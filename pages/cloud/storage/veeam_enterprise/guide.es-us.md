---
title: 'Implementar Veeam Backup & Replication'
slug: veeam-backup-replication
excerpt: 'Cómo instalar un servidor Veeam Backup & Replication con Veeam Enterprise'
section: 'Veeam Backup & Replication'
---

**Última actualización: 17/10/2018**

## Objetivo

Veeam Backup & Replication es un programa que permite gestionar la seguridad de los datos. Ofrece diversas posibilidades de backup, replicación y restauración.

**Esta guía explica cómo instalar un servidor Veeam Backup & Replication y cómo registrarlo en el servidor de licencias Veeam Enterprise de OVH.**


## Requisitos

* Tener contratado Veeam Enterprise.
* Disponer de una máquina Windows Server 2012 o 2016.

## Procedimiento

### Instalar Veeam Backup & Replication

Descargue la solución **Veeam Backup & Replication** desde la web de Veeam. Si todavía no tiene una cuenta, deberá crear una (es gratuita).

El archivo es una imagen de disco en formato ISO. Después de transferirlo a su servidor, seleccione el lector de CD de la máquina y elija la imagen.

En la máquina, ejecute el instalador. Haga clic en `Install`{.action} para el componente **Veeam Backup & Replication**.

![Add OVH Storage](images/veeamBandR_inst_01.png){.thumbnail}

Lea el contrato de licencia, acéptelo y haga clic en `Next`{.action}.

![Add OVH Storage](images/veeamBandR_inst_02.png){.thumbnail}

Omita la introducción del archivo de licencia haciendo clic en `Next`{.action}.

![Add OVH Storage](images/veeamBandR_inst_03.png){.thumbnail}

En la selección de los componentes que se van a instalar, no es necesario cambiar nada, aunque, según sus necesidades, puede cambiar la ruta de destino de la instalación. Acepte haciendo clic en `Next`{.action}.

![Add OVH Storage](images/veeamBandR_inst_04.png){.thumbnail}

El instalador realizará un control de los requerimientos. Si parte de una instalación bruta de Windows, faltarán algunos componentes, pero no se preocupe: el instalador los descargará e instalará automáticamente. Acepte haciendo clic en `Next`{.action}.

![Add OVH Storage](images/veeamBandR_inst_05.png){.thumbnail}

Espere mientras se instalan los requerimientos.

![Add OVH Storage](images/veeamBandR_inst_06.png){.thumbnail}

A continuación, acepte la instalación de **Veeam Backup & Replication** haciendo clic en `Next`{.action}.

![Add OVH Storage](images/veeamBandR_inst_07.png){.thumbnail}

En la etapa de personalización de la instalación, acepte la configuración por defecto haciendo clic en `Install`{.action}.

![Add OVH Storage](images/veeamBandR_inst_08.png){.thumbnail}

Espere a que finalice la instalación.

![Add OVH Storage](images/veeamBandR_inst_09.png){.thumbnail}

Cuando haya terminado, salga del instalador haciendo clic en `Finish`{.action}.

![Add OVH Storage](images/veeamBandR_inst_10.png){.thumbnail}

El instalador le pedirá que reinicie Windows para que se apliquen los cambios. Haga clic en `Yes`{.action}.

![Add OVH Storage](images/veeamBandR_inst_11.png){.thumbnail}

### Crear una cuenta de servicio Veeam Enterprise

#### Crear la cuenta de servicio

En primer lugar, es necesario generar una contraseña **compleja**. Para ello puede utilizar un generador de contraseñas.

A continuación, cree una cuenta de servicio introduciendo el siguiente comando desde un acceso de administrador:

```powershell
New-LocalUser "OVHVeeamEnterprise" -Password (ConvertTo-SecureString -AsPlainText "P@ssword01" -Force) -Description "OVH Service Account for Veeam Enterprise" -PasswordNeverExpires:$true -UserMayNotChangePassword:$true -AccountNeverExpires:$true
```

No olvide sustituir en el comando anterior el nombre de la cuenta (OVHVeeamEnterprise) y la contraseña (P@ssword01) por los suyos propios.


#### Establecer las autorizaciones de la cuenta de servicio

Abra la consola Veeam y conéctese.

![Add OVH Storage](images/veeamBandR_use_12.png){.thumbnail}

Compruebe que se encuentre en modo **Free Edition** en la esquina inferior derecha.

![Add OVH Storage](images/veeamBandR_conf_13.PNG){.thumbnail}

En el menú, haga clic en `Users and Roles`{.action}.

![Add OVH Storage](images/veeamBandR_conf_14.PNG){.thumbnail}

En la ventana **Security**, haga clic en `Add...`{.action}.

![Add OVH Storage](images/veeamBandR_conf_15.PNG){.thumbnail}

En la ventana **Add User**, introduzca la cuenta de servicio anteriormente creada. Seleccione el rol **Veeam Backup Administrator** y acepte con `OK`{.action}.

![Add OVH Storage](images/veeamBandR_conf_15.PNG){.thumbnail}

Al volver a la ventana **Security**, compruebe que aparezca la cuenta.

![Add OVH Storage](images/veeamBandR_conf_16.PNG){.thumbnail}

#### Registrar el servidor Veeam Backup & Replication

Esta operación debe realizarse a través de la API de OVH.

En primer lugar, obtenga el serviceName:

> [!api]
>
> @api {GET} /veeam/veeamEnterprise
>

A continuación, regístrelo:

> [!api]
>
> @api {POST} /veeam/veeamEnterprise/{serviceName}/register
>

Necesitará la siguiente información:

* la dirección IP pública a través de la cual es posible comunicar con el servidor **Veeam Backup & Replication**;
* el puerto del servidor **Veeam Backup & Replication** (normalmente **9392/TCP**);
* el usuario de la cuenta de servicio anteriormente creada;
* la contraseña de la cuenta de servicio.

Puede obtener la dirección IP pública que utiliza Veeam Enterprise para comunicar con el servidor **Veeam Backup & Replication** de la siguiente forma:

> [!api]
>
> @api {GET} /veeam/veeamEnterprise/{serviceName}
>

#### Comprobar el registro

Abra la consola Veeam y conéctese.

![Add OVH Storage](images/veeamBandR_use_12.png){.thumbnail}

En el menú, haga clic en `License`{.action}.

![Add OVH Storage](images/VeeamBR_lic_1.png){.thumbnail}

Compruebe que la información mostrada corresponde a su licencia de OVH.

![Add OVH Storage](images/VeeamBR_lic_2.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.