---
title: 'Cargar las variables de entorno necesarias para OpenStack'
excerpt: 'Cómo cargar sus variables de entorno para utilizar la API de OpenStack'
slug: cargar-las-variables-de-entorno-openstack
legacy_guide_number: 1852
section: OpenStack
---

**Última actualización: 20/11/2019**

## Objetivo

Cambiar las variables de entorno necesarias para OpenStack en su equipo le permitirá utilizar la API de OpenStack y, así, gestionar su infraestructura desde esta.


## Requisitos
- Haber creado un usuario de OpenStack. Consulte [la guía dedicada a este tema](../crear_un_acceso_a_horizon/#crear-un-usuario-openstack)
- Haber preparado el entorno para utilizar OpenStack. Para ello, consulte la siguiente guía: [«Preparar el entorno para utilizar la API de OpenStack»](../preparar_el_entorno_para_utilizar_la_api_de_openstack/)

## Procedimiento

### Paso 1: obtener las variables

Para obtener sus variables de entorno, puede descargar el archivo OpenRC de su usuario OpenStack previamente creado.

Para ello, acceda a la sección `«Usuarios y roles»`{.action}, haga clic en `«...»`{.action} a la derecha de su usuario y seleccione `«Descargar el archivo RC de OpenStack»`{.action}.

![openstack-variables](images/pciopenstackvariables1.png){.thumbnail}

Un archivo OpenRC corresponde tanto a un usuario como a una zona. No puede gestionar varias zonas en un mismo archivo.

### Paso 2: cargar las variables

#### **En Linux**

* Abra una terminal o conéctese con el usuario que hará las llamadas a la API de OpenStack.
* Cargue el contenido del archivo en el entorno actual. El sistema le pedirá la contraseña del usuario de Horizon correspondiente.

```bash
admin@vpsxxxxxx:~$ source openrc.sh
Please enter your OpenStack Password:
```

Como indicamos en la guía [«Conectarse a Horizon»](../crear_un_acceso_a_horizon/), la contraseña solo se ve una vez, en el momento de su creación.

Si la ha olvidado, deberá crearla nuevamente.

Si las interfaces de línea de comandos (CLI) ya están instaladas, solo compruebe que funcionen correctamente.

```bash
admin@vpsxxxxxx:~$ nova list
+--------------------------------------+------+--------+------------+-------------+------------------------+
| ID                                   | Name | Status | Task State | Power State | Networks               |
+--------------------------------------+------+--------+------------+-------------+------------------------+
| 2278e269-a529-40cc-9a08-794fda9302d3 | deb8 | ACTIVE | -          | Running     | Ext-Net=xx.xxx.xx.xxx |
+--------------------------------------+------+--------+------------+-------------+------------------------+
```

Tenga en cuenta que puede guardar la contraseña predefinida del usuario de Horizon. Para ello, sustituya:

```bash
echo "Please enter your OpenStack Password: "
read -sr OS_PASSWORD_INPUT
export OS_PASSWORD=$OS_PASSWORD_INPUT
```

Por:

```bash
#echo "Please enter your OpenStack Password: "
#read -sr OS_PASSWORD_INPUT
export OS_PASSWORD="Contraseña del usuario Horizon"
```

Por defecto, deberá cargar este entorno cada vez que abra una sesión en el entorno actual. Si desea que sea permanente, añada la fuente openrc.sh al archivo bashrc. Para ello, debe predefinir la contraseña en el archivo.


#### **En Windows**

El archivo OpenRC no está diseñado para utilizarlo en Windows.

Por lo tanto, tiene dos soluciones para cargar las variables de entorno:

- Deberá adaptar el archivo modificando algunos comandos. En efecto, **export** puede sustituirse por **set**:

```bash
set OS_PASSWORD="Contraseña del usuario de Horizon"
```

- Es posible cargar las variables directamente desde los parámetros del sistema: Panel de configuración > Sistema > Configuración avanzada del sistema > Variables de entorno:


![public-cloud](images/pciopenstackvariables2.png){.thumbnail}

## Más información

Para aprender a utilizar OpenStack: [Documentación de OpenStack](https://docs.openstack.org/train/){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
