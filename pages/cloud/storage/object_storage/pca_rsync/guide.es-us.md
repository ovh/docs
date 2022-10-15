---
title: Object Storage Swift - Gestión de sus archivos con Rsync
slug: pca/rsync
excerpt: Cómo acceder a los archivos de Public Cloud con Rsync
section: OpenStack Swift Archive Storage Class Specifics
order: 090
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 08/12/2020**

## Objetivo

Public Cloud Archive de OVHcloud es una solución de almacenamiento gestionada principalmente a través de la API de OpenStack. Sin embargo, hemos desarrollado una pasarela que permite conectarse a su contenedor PCA con Rsync.

**Descubra la información necesaria para activar la conexión a los datos almacenados con Rsync.**

## Requisitos

### Rsync

[Rsync](https://rsync.samba.org/) est un utilitaire Open Source qui permet un transfert de fichiers incrémentiel rapide.<br>
Los archivos binarios precompilados están disponibles en la mayoría de las distribuciones de sistemas operativos recientes. Por lo tanto, primero debe comprobar si puede instalar un paquete Rsync utilizando sus herramientas de instalación de paquetes estándar para su sistema operativo.

### ID OpenStack

Puede generar su identificador y contraseña OpenStack a través de esta [guía](https://docs.ovh.com/us/es/public-cloud/crear-y-eliminar-un-usuario-de-openstack/).

### TenantName

El TenantName corresponde al nombre del proyecto Horizon. Para obtener el TenantName, debe conectarse a la interfaz web de OpenStack: [https://horizon.cloud.ovh.net/](https://horizon.cloud.ovh.net/){.external}.

Una vez conectado, el TenantName se muestra en la parte superior de la página.

![horizon](images/image1.png){.thumbnail}

## Procedimiento

### Detalles de la conexión

- Host Name: gateways.storage.{region}.cloud.ovh.net
- User Name: pca
- Password: {TenantName}.{Username_Openstack}.{Password_Openstack}
- Port: 22

### Transferencia de datos

Ejemplo de línea de comandos si ha creado un contenedor PCA en la región GRA:

```bash
user@host:~$ rsync -a /path/to/my/dir pca@gateways.storage.gra.cloud.ovh.net:/container
pca@gateways.storage.gra.cloud.ovh.net's password:
user@host:~$
```

### Descarga de los datos

El Public Cloud de OVHcloud Archive ofrece un almacenamiento de datos de bajo coste, a cambio de una mayor latencia en el proceso de recuperación. Para acceder a su archivo comprimido, debe recibir una solicitud de extracción con los nombres de contenedor y de archivo a los que se refiere.

Una vez que haya extraído el archivo comprimido, puede descargarlo durante 24 horas con una velocidad ilimitada y una frecuencia de acceso ilimitado. Después de este período de recuperación, el archivo se bloqueará de nuevo.

```bash
user@host:~$ rsync -a pca@gateways.storage.gra.cloud.ovh.net:/container
pca@gateways.storage.gra.cloud.ovh.net's password:
user@host:~$
```

### Información adicional: Opciones Rsync

Dado que el servidor Rsync está conectado para funcionar con la API Swift, estas opciones se aplicarán en el servidor para que se ajuste al comportamiento del servidor principal de almacenamiento de objetos:

> —inplace : En lugar del método predeterminado de crear una nueva copia del archivo y moverla una vez finalizado el proceso, Rsync escribe los datos actualizados directamente en el archivo de destino.
>

Además, solo está permitido un subconjunto de opciones en el lado del cliente:

> -a, —archive: Activa el modo de archivado.
>
> -r, —recursive: Copia los directorios de forma recursiva.
>
> -v, —verbose: Aumenta la cantidad de información proporcionada durante la transferencia.
>
> —del, —delete: Elimina los archivos superfluos del directorio de destino.
>
> -P, --progress: Imprime los datos que indican el progreso de la transferencia.


## Más información

[Particularidades de la API OpenStack Swift en Cloud Archive](https://docs.ovh.com/gb/en/storage/pca/api/)

[Página de inicio de Rsync](https://linux.die.net/man/1/rsync)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
