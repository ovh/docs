---
title: Empezar con la API Swift
excerpt: Empezar con la API Swift
slug: empezar_con_la_api_swift
legacy_guide_number: g1916
section: OpenStack
---


## 
Con el fin de automatizar sus operaciones en Public Cloud, puede utilizar las API de OpenStack para generar diferentes scripts.

El cliente Swift de OpenStack le permitirá interactuar con sus contenedores y objetos para gestionarlos. Por ejemplo, puede enviar archivos de manera sistemática a sus contenedores con fines de backup.

Esta guía le ayudará a utilizar por primera vez las API de OpenStack para gestionar sus contenedores de objetos con el cliente Python Swfit.


## Requisitos
Para seguir todos los pasos de esta guía, es necesario:


- [Preparar el entorno para utilizar la API de OpenStack](https://docs.ovh.com/es/public-cloud/preparar_el_entorno_para_utilizar_la_api_de_openstack/)
- instalando python-swiftclient;
- Cargar las variables de entorno de OpenStack.




## Documentación Swift
En la documentación del cliente encontrará la lista de posibles comandos:


```
admin@servidor-1:~$ swift --help
```


En esta tabla recogemos los principales:

|delete|Elimina un contenedor o los objetos presentes en un contenedor|
|---|
|delete|Elimina un contenedor o los objetos presentes en un contenedor|
|download|Descarga los archivos de un contenedor|
|list|Muestra los contenedores de la cuenta o los objetos de un contenedor|
|post|Actualiza los metadatos de la cuenta, contenedor u objeto; o crea un contenedor si este no existe|
|stat|Muestra la información de la cuenta, contenedor u objeto|
|upload|Envía archivos o carpetas al contenedor|
|capabilities|Muestra las capacidades del entorno Swift|
|tempurl|Crea una URL temporal|


A continuación puede obtener ayuda para un comando en particular añadiendo «--help» al final del mismo:


```
admin@servidor-1:~$ swift post --help

Updates meta information for the account, container, or object.
If the container is not found, it will be created automatically.

Positional arguments:
[container] Name of container to post to.
[object] Name of object to post. Specify multiple times
for multiple objects.
[...]
```


También puede consultar la documentación del cliente Swift directamente en la [web de Openstack](http://docs.openstack.org/cli-reference/content/swiftclient_commands.html).


## Creación de un contenedor de objetos público
Cree el contenedor «container1»:


```
admin@servidor-1:~$ swift post container1
```


Configure los permisos de acceso para hacerlo público:


```
admin@servidor-1:~$ swift post --header "X-Container-Read: .r:*" container1
```


Compruebe la configuración del contenedor:


```
admin@servidor-1:~$ swift stat container1

Account: AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29
Container: container1
Objects: 0
Bytes: 0
Read ACL: .r:*
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Trans-Id: B2210C05:8D93_052711A1:01BB_561CC9DF_1B305:30D7
X-Storage-Policy: Policy-0
Connection: close
X-Timestamp: 1444726875.27475
Content-Type: text/plain; charset=utf-8
```




## Envío de archivos a un contenedor
Envíe el contenido de una carpeta local a un contenedor:


```
admin@servidor-1:~$ swift upload container1 images/

images/OVHlogo.png
images/OVHSummitKeynote.jpg
```


Atención: Si envía una carpeta completa y no un solo archivo, se añadirá automáticamente un prefijo a los archivos.
Muestre los archivos del contenedor:


```
admin@servidor-1:~$ swift list container1

images/OVHSummitKeynote.jpg
images/OVHlogo.png
text1.txt
text2.txt
text3.txt
```


Puede mostrar los archivos que tengan un prefijo específico utilizando el argumento «--prefix»:


```
admin@servidor-1:~$ swift list container1 --prefix images

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```


Teniendo en cuenta que el contenedor ha sido configurado para que su acceso sea público, es posible acceder al archivo desde una URL:


```
https://storage.gra1.cloud.ovh.net/v1/AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29/container1/images/OVHlogo.png
```


La URL está formada por el punto de acceso API del Object Storage, que puede consultar en el menú [«Acceso y seguridad»](https://docs.ovh.com/es/public-cloud/acceso_y_seguridad_en_horizon/) de Horizon, seguido del nombre del contenedor y el nombre del objeto (prefijo incluido).


## Descarga de archivos
Descargue un archivo:


```
admin@servidor-1:~$ swift download container1 text1.txt

text1.txt [auth 0.328s, headers 0.452s, total 0.453s, 0.000 MB/s]
```


Puede descargar varios archivos que tengan el mismo prefijo utilizando el siguiente comando:


```
admin@servidor-1:~$ swift download container1 --prefix images

images/OVHlogo.png [auth 0.383s, headers 0.520s, total 0.522s, 0.135 MB/s]
images/OVHSummitKeynote.jpg [auth 0.371s, headers 0.514s, total 0.559s, 2.657 MB/s]
```




## Eliminación de contenedores u objetos
Elimine un archivo:


```
admin@servidor-1:~$ swift delete container1 text1.txt

text1.txt
```


Al igual que para la descarga, puede eliminar varios archivos que tengan el mismo prefijo utilizando el siguiente comando:


```
admin@servidor-1:~$ swift delete container1 images/*

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```


Elimine un contenedor:


```
admin@servidor-1:~$ swift delete container1

text2.txt
text3.txt
```


Atención: El comando anterior eliminará todos los archivos que se encuentren en el contenedor.