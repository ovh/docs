---
title: Utilizar el Object Storage con Rclone
slug: sync-rclone-object-storage
excerpt: Cómo sincronizar el Object Storage de OVH con Rclone
section: Object Storage
---

**Última actualización: 22/02/2018**

## Objetivo

El Object Storage de OVH se puede sincronizar mediante Rclone.

**Esta guía explica cómo realizar la sincronización desde el área de cliente de OVH.**

Tenga en cuenta que Rclone es un software de sincronización externo. Para más información, consulte directamente la [documentación oficial](https://Rclone.org/){.external}.

## Requisitos

- Haber creado un contenedor de Object Storage desde el área de cliente o desde [Horizon](https://docs.ovh.com/es/storage/horizon_crear_un_contenedor_de_objetos/){.external}.
- Haber creado un [usuario de OpenStack](https://docs.ovh.com/es/public-cloud/crear_un_acceso_a_horizon/){.external}.

## Procedimiento

Una vez que haya creado el contenedor y el usuario de OpenStack, deberá realizar las operaciones que se describen a continuación.

### 1. Descargar el archivo de configuración de Rclone

Una vez creado el [usuario de OpenStack](https://docs.ovh.com/es/public-cloud/crear_un_acceso_a_horizon/){.external}, podrá descargar el archivo de configuración de Rclone desde el área de cliente.

Para ello, en la columna izquierda, haga clic en `Servidores`{.action}, seleccione el proyecto cloud y haga clic en `OpenStack`{.action}. Se mostrará la lista de usuarios creados en el proyecto.

A continuación, haga clic en los tres puntos situados al final de la línea correspondiente al usuario y seleccione `Descargar un archivo de configuración Rclone`{.action}.

![Descargar un archivo de configuración Rclone](images/download_file.png){.thumbnail}


### 2. Configurar Rclone

Una vez descargado el archivo, puede ejecutar el siguiente comando para añadir un nuevo espacio de almacenamiento:

```sh
rclone config
```

A continuación, deberá introducir los datos de configuración indicados en el archivo.

> [!primary]
>
> Otra alternativa consiste en copiar y pegar el contenido del archivo en el espacio dedicado a las configuraciones de Rclone: **.config/rclone/rclone.conf**.
> 

Una vez configurado Rclone, puede comprobar que todo funciona correctamente solicitando, por ejemplo, una lista de los contenedores con el comando:

```sh
rclone lsd BackupStorage
```

En el comando anterior, sustituya «BackupStorage» por el nombre de su espacio de almacenamiento.

En la [documentación oficial de Rclone](https://Rclone.org/swift/){.external} encontrará más información sobre cómo sincronizar su Object Storage y Rclone.


## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.
