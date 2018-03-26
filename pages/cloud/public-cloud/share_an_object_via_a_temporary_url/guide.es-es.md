---
title: Compartir un objeto con una dirección temporal
excerpt: Compartir un objeto con una dirección temporal
slug: compartir_un_objeto_con_una_direccion_temporal
legacy_guide_number: g2007
section: Seguridad
---


## 
OpenStack Swift permite almacenar una gran cantidad de archivos. Para gestionarlos, es necesario estar autenticado con un token para cada llamada a la API. Este mecanismo permite confirmar sus permisos (lectura, escritura...) en Swift.

El token proviene del sistema de autenticación, utilizando su ID de cliente y contraseña.

Tomemos como ejemplo una situación en la que quiere enviar un archivo a un amigo o compañero de trabajo pero que, evidentemente, no quiere proporcionarle sus claves de autenticación personales. En este caso, las URL temporales (tempURL) pueden serle útiles.

tempURL es una funcionalidad que le permite, no solo controlar qué archivos quiere compartir, sino también cuánto tiempo quiere que el enlace esté disponible.


## ¿Cómo funciona?
La función tempURL genera una dirección temporal utilizando los siguientes elementos:


- la dirección del punto de acceso, por ejemplo https://storage.sbg1.cloud.ovh.net/
- la ruta al objeto que contiene el proyecto, el contenedor y el nombre del objeto: v1/AUTH_tenant/default/file
- un primer parámetro adicional tempurlsign, que corresponde a una firma generada con su clave secreta, el método HTTP, la ruta del archivo y la fecha de expiración
- un segundo parámetro url_expires, que corresponde a la fecha de expiración del enlace




## Requisitos
Para seguir todos los pasos de esta guía, es necesario:


- [preparar el entorno para utilizar la API de OpenStack](https://docs.ovh.com/es/public-cloud/preparar_el_entorno_para_utilizar_la_api_de_openstack/);
- tener Python instalado en su equipo;
- el script Python [swift-temp-url](https://raw.githubusercontent.com/openstack/swift/master/bin/swift-temp-url).




## Generación de la clave
En primer lugar, es necesario generar una clave, que podrá utilizar para todos los archivos del proyecto (una sola clave es suficiente para todas las futuras tempURL). Por lo tanto, se recomienda elegir una clave segura. No obstante, en cualquier momento podrá generar una nueva.

Es recomendable que la clave tenga al menos 20 caracteres. Puede utilizar herramientas como las siguientes:


- [http://www.random.org/strings/](http://www.random.org/strings/)
- El comando ur de Linux: /dev/urandom
- O simplemente el siguiente comando: date +%s | md5sum


Una vez tenga la clave, puede configurarla en su proyecto con el cliente Swift (sustituyendo la cadena «12345» por su clave):


```
swift post -m "Temp-URL-Key: 12345"
```


O utilizando curl:


```
curl -i -X POST \ -H "X-Account-Meta-Temp-URL-Key: 12345" \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```



## Información:
El nombre completo del header es X-Account-Meta-Temp-Url-Key, pero el cliente Swift utiliza Temp-Url-Key, ya que añade X-Account-Meta automáticamente.
Una vez que la clave esté configurada en la cuenta, puede comprobar que el header se ha aplicado correctamente con el siguiente comando, utilizando el cliente Swift:


```
swift stat
```


O con curl:


```
curl -i -X HEAD \ -H "X-Auth-Token: abcdef12345" \ ttps://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```




## Generación de la URL
Las operaciones que se describen a continuación pueden realizarse sin conexión.

Genere la URL temporal con el script swift-temp-url:


```
python swift-temp-url GET 60 /v1/AUTH_tenant/default/file 12345
```



- GET: método HTTP
- 60: enlace disponible durante 60 segundos (puede personalizar este valor)
- /v1/AUTH_tenant/default/file: la ruta al archivo (no es necesario añadir el punto de acceso en esta etapa del procedimiento)
- 12345: sustituya esta cadena por su clave


Esto devolverá una tempURL como la siguiente:


```
v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```


Como se ha indicado más arriba, en ella puede ver la ruta al archivo, la firma y la fecha de expiración.

Para que esta URL funcione correctamente, solo tiene que añadir la dirección del punto de acceso delante de la tempURL:


```
https://storage.sbg1.cloud.ovh.net/v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```


En este ejemplo, la URL permite que cualquiera se descargue el archivo «file» que se encuentra en el contenedor «default», durante 60 segundos, y sin autenticación. Al cabo de 60 segundos, la URL dejará de funcionar.
Los usuarios más avanzados que quieran generar tempURL sin el script [swift-temp-url](https://raw.githubusercontent.com/openstack/swift/master/bin/swift-temp-url) pueden consultar la documentación completa en la [web de OpenStack](http://docs.openstack.org/liberty/config-reference/content/object-storage-tempurl.html).