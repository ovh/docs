---
title: Presentación del área de cliente de Managed Bare Metal OVHcloud
slug: manager-ovhcloud
routes:
    canonical: 'https://docs.ovh.com/es/private-cloud/manager-ovh-private-cloud/'
excerpt: Descubra las posibilidades que ofrece el área de cliente de Managed Bare Metal
section: Primeros pasos
order: 1
---

**Última actualización: 18/11/2020**

## Objetivo

El área de cliente de OVHcloud ofrece múltiples opciones de configuración de la infraestructura Managed Bare Metal.

**Esta guía describe las diversas posibilidades existentes.**

## Requisitos

- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, en la sección `Bare Metal Cloud`{.action}, y dentro, en `Managed Bare Metal`{.action}.
- Haber contratado un servicio [Managed Bare Metal OVHcloud](https://www.ovhcloud.com/es-es/managed-bare-metal/){.external}.


## Procedimiento

### Información general

Una vez en la sección `Bare Metal Cloud`{.action} del [área de cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, haga clic en `Managed Bare Metal`{.action} y aparecerá la información general de su Managed Bare Metal.

![Información general](images/controlpanel1-e.png){.thumbnail}

En la parte superior de la página `(1)`, se indica el nombre y la descripción del servicio Managed Bare Metal. Es posible personalizar esta última haciendo clic en el icono con forma de lápiz. Esto es especialmente útil en caso de que disponga de varias infraestructuras. 

A la izquierda `(2)`, aparece(n) su(s) servicio(s) Managed Bare Metal y los datacenters virtuales que lo(s) componen.


#### Información general

En la tabla de la izquierda, aparece la información general del servicio Managed Bare Metal.

![Información general](images/controlpanel2-e.png){.thumbnail}


- La descripción del servicio Managed Bare Metal (con la opción de modificar el nombre)
- La versión del servicio Managed Bare Metal.
- El datacenter y más concretamente la zona en la que está instalada la infraestructura.
- La política de acceso a su infraestructura (`Abierto` o `Restringido`) con las restricciones por IP de origen.
- El número de datacenters virtuales de su infraestructura.
- El número de bloques de IP (con la opción de contratar bloques adicionales)


#### Opciones y conformidad

En la tabla central, aparece el estado de activación de las opciones del servicio Managed Bare Metal.

![Opciones](images/controlpanel3-e.png){.thumbnail}

#### Gestión del servicio

En la tabla de la derecha, puede gestionar su suscripción a la lista de correo de Managed Bare Metal OVHcloud.

También aparece la fecha de la próxima renovación del servicio Managed Bare Metal. El botón `...`{.action} que está a la derecha de esta fecha permite contratar una licencia o suprimir el servicio Managed Bare Metal.

![Opciones](images/controlpanel4-e.png){.thumbnail}

Si desea más información sobre la cancelación del servicio Managed Bare Metal, consulte nuestra guía [Cómo dar de baja el servicio Managed Bare Metal](../dar-de-baja-solucion-managed-bare-metal/).

#### Datacenters

En esta pestaña aparece un resumen de los datacenters virtuales del servicio Managed Bare Metal:

![Datacenters](images/controlpanel5-e.png){.thumbnail}

Los datacenters virtuales se explican en detalle más adelante en esta guía.

> [!primary]
>
> Podrá añadir otro datacenter desde esta página sin coste adicional.
> 

#### Usuarios

En este apartado aparecen todos los usuarios que pueden conectarse a vSphere:

![Usuarios](images/controlpanel6-e.png){.thumbnail}

Para crear un usuario, haga clic en el botón de la izquierda `Crear un usuario`{.action}.

Aparece la información de cada usuario, así como los permisos relativos al servicio Managed Bare Metal:

- Identificador.
- Nombre (opcional).
- Apellido (opcional).
- Correo electrónico (opcional).
- Número de teléfono (opcional).
- permiso *token validator*,que permite confirmar las operaciones sensibles.
- El permiso *Ip*, que da acceso al plugin OVHcloud network.
- El permiso *Additional IP*, para gestionar las direcciones Additional IP asociadas al servicio Managed Bare Metal.
- El estado (Diagnóstico), que permite ver si el usuario se ha creado correctamente.

Al hacer clic en el botón `...`{.action} situado a la derecha de la tabla, aparecen varias opciones:

- Modificar las entradas de esta tabla (Cambiar los permisos citados anteriormente, añadir un correo electrónico o un número de teléfono).
- Ver y modificar los permisos del usuario por datacenter.
- Cambiar la contraseña del usuario.
- Eliminar este usuario.

Veamos con más detalle la modificación de los permisos por datacenter:

![Permisos de usuario por datacenter](images/controlpanel7-e.png){.thumbnail}

- `Acceso vSphere`{.action}. Son los permisos generales del usuario en vSphere:

|Permisos|Descripción|
|---|---|
|Ninguno|Sin acceso|
|Solo lectura|Acceso de solo lectura|
|Lectura-Escritura|Acceso de lectura-escritura|
|Operador|Acceso reservado a los administradores de OVHcloud|

- `Acceso a la VM Network`{.action}. Administra los permisos de la parte de red pública (llamada `VM Network` en la interfaz vSphere):

|Permisos|Descripción|
|---|---|
|Ninguno|Sin acceso|
|Solo lectura|Acceso de solo lectura|
|Operador|Permite configurar las máquinas virtuales (MV) en la red pública|


- `Añadir recursos`{.action}. Este botón permite otorgar permiso para añadir recursos adicionales a través del plugin OVHcloud en el cliente vSphere.


#### Seguridad

La política de acceso al vCenter se puede configurar en esta pestaña:

![Configuración de seguridad](images/controlpanel8-e.png){.thumbnail}

Se pueden configurar los elementos en la parte superior y en la tabla con los botones de la derecha. Se puede configurar:

- El plazo de expiración del inicio de sesión.

- El número de conexiones simultáneas autorizadas.

- La política de acceso, restringido o no, con autorización por IP de origen. Las direcciones IP aparecen en la tabla.
Se puede modificar o eliminar la dirección IP o el rango haciendo clic en el botón `...`{.action} situado a la derecha de la tabla.

> [!warning]
>
> Si configura la política de acceso en modo restringido y no introduce ninguna dirección IP, ningún usuario se podrá conectar al cliente vSphere. Las máquinas virtuales seguirán estando accesibles.
> 


- La política de desconexión consiste en desconectar el primer o el último usuario conectado.
Pr ejemplo hay 50 usuarios conectados; cuando el número 51 se conecta, el primero que se conectó se desconecta de forma automática.

Hay una segunda tabla disponible para la opción *VM encryption*.

Podrá encontrar más información al respecto en [esta guía](../vm-encrypt/).

#### Operaciones

En esta pestaña, aparecen las operaciones en curso en su infraestructura:

![Operaciones](images/controlpanel9-e.png){.thumbnail}

Se puede comprobar si hay una operación con errores, si existe un mantenimiento programado, etc.

Se puede modificar la fecha de un mantenimiento haciendo clic en el botón `...`{.action} a la derecha de la tabla.

> [!primary]
>
> Si no es posible acceder al cliente vSphere, puede que haya un mantenimiento en curso. Se puede comprobar en esta pestaña.
>


#### Licencia Windows

La pestaña `Licencia Windows`{.action} permite activar las licencias SPLA Windows en el servicio Managed Bare Metal haciendo clic en el botón de la derecha:

![Licencia SPLA Windows](images/controlpanel10-e.png){.thumbnail}

Puede consultar las tarifas [aquí](https://www.ovhcloud.com/es-es/managed-bare-metal/options/){.external}.



### Visualización del datacenter

Se pueden tener varios datacenters en un servicio Managed Bare Metal. Al hacer clic en el servicio Managed Bare Metal, aparecerá la siguiente información:

![Visualización del Datacenter](images/controlpanel11-e.png){.thumbnail}

Al hacer clic en el icono en forma de lápiz se puede personalizar el nombre del datacenter y añadir una descripción personalizada.

Aquí podrá encontrar la información principal de su datacenter, la gama, el número de hosts y de datastores.


#### Hosts

Aquí figuran los hosts de su datacenter:

![Hosts](images/controlpanel12-e.png){.thumbnail}

En este apartado podrá consultar:

- El nombre de los hosts.
- Sus perfiles (M, L, L+...).
- El tipo de facturación: si la facturación de su host es por horas, se puede cambiar a facturación mensual haciendo clic en el botón situado a la derecha de la tabla.
- El estado del host.
- El número de horas utilizadas (solo para los recursos por horas).

En la parte superior izquierda de esta tabla se puede contratar un nuevo host en pago mensual.


#### Datastores

La tabla de los datastores es similar a la de los hosts:

![Datastores](images/controlpanel13-e.png){.thumbnail}

En este apartado podrá consultar:

- Los nombres de los datastores.
- Los perfiles.
- Los tipos (Híbrido o full SSD).
- Los tamaños.
- El modo de facturación
- El estado del datastore, que permite saber si está correctamente instalado.
- El número de horas utilizadas (solo para los recursos por horas).

En la parte superior izquierda de esta tabla se puede contratar un nuevo datastore en pago mensual.


#### Backup

La pestaña de backup permite activar la solución `Veeam backup`.

![Backup](images/controlpanel14-e.png){.thumbnail}

Si desea más información sobre esta opción, puede consultar esta [guía](https://docs.ovh.com/gb/en/managed-bare-metal/veeam-backup-as-a-service/){.external}.


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
