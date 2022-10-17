---
title: Object Storage Swift - Empezar con la API Swift
excerpt: Empezar con la API Swift
slug: pcs/getting-started-with-the-swift-api
legacy_guide_number: g1916
section: OpenStack Swift Storage Class Specifics
order: 010
---


> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 25/06/2021**

## Objetivo

Puede utilizar la API de OpenStack para generar varios scripts para automatizar sus acciones en sus instancias de Public Cloud.

El *swiftclient* de OpenStack permite interactuar y gestionar contenedores y objetos. Por ejemplo, puede enviar archivos regularmente a sus contenedores para guardarlos.

**Esta guía explica cómo familiarizarse con la API de OpenStack para gestionar los contenedores de objetos utilizando *python-swiftclient*.**

## Requisitos

- [Preparar el entorno para utilizar la API OpenStack](https://docs.ovh.com/us/es/public-cloud/preparar_el_entorno_para_utilizar_la_api_de_openstack/) instalando python-swiftclient
- [Cargar las variables de entorno OpenStack](https://docs.ovh.com/us/es/public-cloud/cargar-las-variables-de-entorno-openstack/)

## Procedimiento

> [!primary]
>
Tenga en cuenta que las instrucciones siguientes se refieren únicamente a la interfaz de línea de comandos de una distribución GNU/Linux, después de haber aplicado los requisitos anteriores.
>

### Documentación Swift

En la documentación del cliente puede consultar la lista de posibles comandos:

```
admin@server-1:~$ swift --help
```

Estos son los comandos principales:

|Comando|Descripción|
|---|---|
|**delete**|Elimina un contenedor u objetos presentes en un contenedor|
|**download**|Objetos descargados desde contenedores|
|**list**|Lista los contenedores de una cuenta u objetos de un contenedor|
|**post**|Actualiza los metadatos de la cuenta, el contenedor o el objeto. Si no se encuentra el contenedor, se creará automáticamente.|
|**stat**|Muestra información sobre la cuenta, el contenedor o el objeto.|
|**upload**|Descarga los archivos y directorios especificados en el contenedor dado.|
|**capabilities**|Extrae la capacidad del proxy.|
|**tempurl**|Genera una URL temporal para un objeto Swift.|


Para más información sobre un pedido Swift específico, añada `--help` al final del pedido:

```
admin@server-1:~$ swift post --help

Updates meta informacion for the account, container, or object.
If the container is not found, it will be created automatically.

Argumentos posicionales:
[container] Name of container to post to post to.
[object] Name of object to post. Especial para múltiples amigos
para múltiples objetos.
[...]
```

También puede consultar la documentación de Swift disponible en el [sitio web de OpenStack](http://docs.openstack.org/cli-reference/content/swiftclient_commands.html).

### Creación de un contenedor de objetos públicos

- Cree el contenedor "container1":

```
admin@server-1:~$ swift post container1
```

- Configure los permisos de acceso para hacer público su contenedor:

```
admin@server-1:~$ swift post —header "X-Container-Read: .r:*" container1
```

- Compruebe la configuración del contenedor:

```
admin@server-1:~$ swift stat container1

Account: AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29
Container: container1
Objetivos: 0
Bytes: 0
Read ACL: .r:*
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Trans-Id: B2210C05:8D93_052711A1:01BB_561CC9DF_1B305:30D7
X-Storage-Policy: Policy-0
Conexión: close
X-Timestamp: 1444726875.27475
Content-Type: text/plain; charset=utf-8
```

### Envío de archivos a su contenedor

- Descargue el contenido de una carpeta local en un contenedor:

```
admin@server-1:~$ swift upload container1 images/

images/OVHlogo.png
images/OVHSummitKeynote.jpg
```

Si envía una carpeta completa en lugar de un solo archivo, se añadirá automáticamente un prefijo a sus archivos.

- Listar los archivos de un contenedor:

```
admin@server-1:~$ swift list container1

images/OVHSummitKeynote.jpg
images/OVHlogo.png
text1.txt
text2.txt
text3.txt
```

Los archivos con un prefijo particular pueden mostrarse con el argumento `--prefix`:

```
admin@server-1:~$ swift list container1 --prefix images

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

Si el contenedor está configurado como público, puede acceder al archivo mediante una URL:

```
https://storage.gra1.cloud.ovh.net/v1/AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29/container1/images/OVHlogo.png
```

La URL se compone de un punto de terminación, disponible a partir de la [interfaz Horizon](https://docs.ovh.com/us/es/public-cloud/acceso_y_seguridad_en_horizon/), el nombre del contenedor y el nombre del objeto (incluido el prefijo).

### Descargando archivos

- Descargar un archivo:

```
admin@server-1:~$ swift download container1 text1.txt

text1.txt [auth 0.328s, headers 0.452s, total 0.453s, 0.000 MB/s]
```

Puede descargar varios archivos con el mismo prefijo con el siguiente comando:

```
admin@server-1:~$ swift download container1 --prefix images

images/OVHlogo.png [auth 0.383s, headers 0.520s, total 0.522s, 0.135 MB/s]
images/OVHSummitKeynote.jpg [auth 0.371s, headers 0.514s, total 0.559s, 2.657 MB/s]
```

### Eliminación de contenedores u objetos

- Eliminar un archivo:

```
admin@server-1:~$ swift delete container1 text1.txt

text1.txt
```

Como en el caso de la descarga, puede eliminar varios archivos con el mismo prefijo utilizando el siguiente comando:

```
admin@server-1:~$ swift delete container1 images/*

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

- Eliminar un contenedor:

```
admin@server-1:~$ swift delete container1

text2.txt
text3.txt
```

Esta operación eliminará todos los archivos del contenedor.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
