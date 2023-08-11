---
title: "Uso de los tokens OpenStack"
excerpt: "Cómo crear y utilizar tokens OpenStack para sus acciones"
updated: 2023-05-05
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 05/05/2023**

## Objetivo

**Esta guía explica las buenas prácticas para realizar un gran número de acciones OpenStack en poco tiempo.**

> [!primary]
>
> Los pasos descritos en esta guía se basan en la versión 3.0 de la API Keystone.
>

### Definiciones

- **Punto de terminación (*Endpoint*)**: dirección web que apunta directamente a la API de un servicio. Por ejemplo, [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/) para el punto de acceso a la autenticación o [https://image.compute.gra11.cloud.ovh.net/](https://image.compute.gra11.cloud.ovh.net/) para el punto de acceso a la gestión de imágenes de la zona GRA11. 

- **Token**: una cadena única que se utiliza para autenticarse y acceder a los recursos. El usuario lo solicita introduciendo sus claves de acceso (detalles de conexión) en la API de autenticación. El token se genera y es válido durante 24 horas.

- **OpenRC**: Para mejorar la eficacia de las interacciones con el servicio de identidad a través del cliente OpenStack, OpenStack se encarga de los scripts de entorno de cliente sencillos también conocidos como archivos OpenRC. Estos archivos contienen opciones comunes a todos los clientes, pero también soportan opciones únicas.

### Problemas

La mayoría de las solicitudes enviadas a la API OpenStack deben seguir un procedimiento de autorización que implica la generación de un token y su validación.

Sin embargo, si realiza demasiadas acciones en poco tiempo, algunas acciones OpenStack se verán perjudicadas por el gran número de llamadas a la API. El límite actual es de 60 creaciones de tokens por minuto y por usuario. La API de autenticación devolverá los errores HTTP 429 más allá de este límite.

Para más información, consulte la [documentación oficial de la API](http://developer.openstack.org/api-guide/quick-start/) de OpenStack.

Esta guía explica cómo enviar un token OpenStack, utilizarlo para las acciones que desee realizar y cómo revocar un token.

## Requisitos 

- Estar conectado al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.
- Esta guía explica cómo instalar en su máquina OpenStack CLI.

> [!primary]
>
> Para más información, consulte la [documentación de OpenStack CLI](https://docs.openstack.org/python-openstackclient/latest/).

Puede obtenerlo desde el gestor de paquetes apt (para las distribuciones basadas en Debian) o por yum (para las distribuciones basadas en RHEL/CentOS):

```bash
# Distribuciones Debian 

sudo apt install python3-openstackclient

# Distribuciones CentOS/RHEL

sudo yum install python3-openstackclient
```

- Para los usuarios de Windows, consulte esta guía para exportar sus variables de entorno: [Cargar las variables de entorno necesarias para OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables/).

## Procedimiento

### 1. descargue y solte su archivo OpenRC.

Conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) y abra su proyecto de `Public Cloud`{.action}.

Haga clic en `Users & Roles`{.action} en la sección `Project Management` del proyecto y, seguidamente, en el botón `...`{.action} situado a la derecha de su usuario OpenStack.<br>
Descargue el archivo OpenRC de este usuario y especifique la región en la que desea realizar acciones.

![descargar el archivo openRC](images/openrc.png){.thumbnail}

Una vez descargado, edite su archivo OpenRC y añada esta línea:

```bash
OS_PASSWORD=<your_password>
```

No olvide adaptar esta línea a la contraseña de su usuario OpenStack que le haya sido asignada al crear el usuario.

Haga clic en el archivo que ha descargado anteriormente:

```bash
source openrc.sh
```

### 2. emisión de un token OpenStack

> [!primary]
>
> Un token OpenStack es válido durante 24 horas después de su emisión. Para una mayor fiabilidad, puede emitir un token cada 8 horas (por ejemplo) para evitar realizar acciones con un token caducado.
>
> Si tiene en cuenta acciones largas, como snapshots, *shelving* de instancias, creación de imágenes, etc., prefiere crear un nuevo token en lugar de ejecutar directamente la acción deseada.
>

Una vez que haya buscado el archivo OpenRC, ejecute el siguiente comando para enviar un token:

```bash
openstack token issue
```

El resultado debería ser similar al siguiente:

```bash
+------------+----------------------------------------------------------------+
| Field      | Value                                                          |
+------------+----------------------------------------------------------------+
| expires    | 2023-04-06T08:33:15+0000                                       |
| id         | gAAAAA[...]                                                    |
| project_id | 8a7[...]                                                       |
| user_id    | f99[...]                                                       |
+------------+----------------------------------------------------------------+
```

Ya puede exportar el ID del token enviado anteriormente:

```bash
export OS_TOKEN = gAAAAA[...]
```

También puede exportar directamente su token con el siguiente comando:

```bash
export OS_TOKEN=$(openstack token issue -f value -c id)
```

### 3. eliminar la variable innecesaria

Para utilizar su token para realizar acciones con su usuario, debe eliminar la variable `OS_USER_DOMAIN_NAME`.

Para ello, ejecute el siguiente comando:

```bash
unset OS_USER_DOMAIN_NAME
```

### 4. utilizar el token para ejecutar órdenes

Una vez que disponga de su token, podrá utilizar las llamadas clásicas de OpenStack para gestionar su infraestructura.

```bash
openstack --os-auth-type token <command>
```

Por ejemplo: 

```bash
openstack --os-auth-type token image list
```

### 5. revocar el token OpenStack

Una vez realizadas todas las acciones, puede desactivar el token OpenStack para evitar que se utilice para otras acciones.

Para ello, utilice el siguiente comando:

```bash
openstack --os-auth-type token token revoke <token_id>

# o 

openstack --os-auth-type token token revoke $OS_TOKEN
```

## Más información

Únase a nuestra comunidad de usuarios en <https://community.ovh.com/en/>.