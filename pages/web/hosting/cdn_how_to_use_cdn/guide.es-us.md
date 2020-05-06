---
title: Guía de uso del acelerador GeoCaché en un alojamiento web
excerpt: Guía de uso del acelerador GeoCaché incluido con los planes de web hosting.
slug: guia_de_uso_del_acelerador_geocache_en_un_alojamiento_web
legacy_guide_number: g1290
section: Optimización del sitio web
---


## 
Conéctese al [área de cliente](https://www.ovh.com/manager/web) con su ID de cliente y contraseña.

En la columna izquierda, sección «Alojamientos», seleccione el alojamiento.

![](images/img_2904.jpg){.thumbnail}


## Vaciar la caché del acelerador GeoCaché
El TTL (Time to Live, tiempo de permanencia en caché de un archivo en un PoP) es de entre 5 y 60 minutos (gestionado por nuestros servidores para su optimización). Transcurrido este plazo, el archivo se elimina de la caché, por lo que otro usuario tendrá que llamar al elemento para vuelva a guardarse en caché en el PoP correspondiente.

Para forzar la sustitución de un archivo en la caché de los PoP, por ejemplo después de modificar la web, hay que vaciar lo que ya está en caché. Posteriormente, cuando un usuario llame al archivo desde la zona de influencia de ese PoP, dicho archivo volverá a guardarse en caché.

Para vaciar manualmente la caché de los PoP de la red de OVH, solo hay que hacer clic en «Vaciar la caché de la CDN de base».

![](images/img_2957.jpg){.thumbnail}


## Desactivar el acelerador GeoCaché
Si no quiere utilizar el acelerador GeoCaché incluido con su plan de hosting, tiene varias posibilidades:


- No utilizar la IP (campo A) del alojamiento asociado al acelerador.
- Editar el archivo de reglas ubicado en la raíz del alojamiento (ver punto siguiente).


A continuación explicaremos la solución que consiste en cambiar la IP que utiliza el alojamiento.

Para ello, en la columna izquierda seleccione el dominio asociado al alojamiento que cuenta con el acelerador GeoCaché y haga clic en la pestaña «Zona DNS».

De todos los campos que forman la zona DNS, busque el campo «A», asociado a una IP de tipo 213.xxx.xxxx.xxx*.

* Esta IP es la del acelerador GeoCaché asociado al alojamiento. Si en algún momento desea restablecerlo, solo tendrá que volver a introducirla en el campo A. La lista de IP se incluye más abajo y puede solicitarse también al soporte. Si no quiere tener que buscar la información más adelante en caso de necesitarla, anótela.

Haga clic en el botón de edición (icono con forma de lápiz) del campo A para acceder al formulario de edición.

En la página del formulario, podrá ver los siguientes campos:


- Subdominio: El campo A aparecerá seleccionado por defecto (no debe cambiarlo).
- Seleccionar una IP: Seleccione «Alojamiento compartido».
- Seleccionar un alojamiento: Seleccione el dominio asociado al alojamiento.
- Seleccionar un país: Elija una localización geográfica de salida de la IP.


Confirme la selección con el botón «Aceptar». La IP se modificará de inmediato, aunque el cambio tardará unos instantes en aplicarse.


Lista de IP asociadas al acelerador GeoCaché 3 PoP/17 PoP

En su área de cliente, en la sección «Alojamientos» > «FTP-SSH» o en el mensaje de instalación que le enviamos al activar el alojamiento, puede consultar el cluster que corresponde a su alojamiento.

|Cluster|Sin geocaché|3 PoP (Basic)|17 PoP (Business)|
|002|37.187.184.2|213.186.33.2 o 213.186.33.68|213.186.33.69|
|003|37.187.184.4|213.186.33.4 o 213.186.33.84|213.186.33.85|
|005|37.187.184.16|213.186.33.16 o 213.186.33.94|213.186.33.95|
|006|37.187.184.17|213.186.33.17 o 213.186.33.96|213.186.33.97|
|007|37.187.184.18|213.186.33.18 o 213.186.33.104|213.186.33.105|
|010|37.187.184.19|213.186.33.19 o 213.186.33.106|213.186.33.107|
|011|37.187.184.40|213.186.33.40 o 213.186.33.150|213.186.33.151|
|012|37.187.184.48|213.186.33.48 o 213.186.33.152|213.186.33.153|
|013|37.187.184.24|213.186.33.24 o 213.186.33.82|213.186.33.83|
|014|37.187.184.87|213.186.33.87 o 213.186.33.168|213.186.33.169|
|015|37.187.184.3|213.186.33.3 o 213.186.33.170|213.186.33.171|
|017|37.187.184.50|213.186.33.50 o 213.186.33.172|213.186.33.173|




## 
Para acceder al archivo necesario, conéctese a su espacio de alojamiento por FTP.

Para ello, puede utilizar FileZilla, por ejemplo.


## Activar/Desactivar el acelerador GeoCaché
Una vez se haya conectado al espacio FTP del alojamiento, llegará por defecto a la raíz. En ella debería encontrar varios archivos y carpetas, uno de ellos un archivo con el nombre «.ovhconfig».

Descargue el archivo en su ordenador (normalmente puede hacerse con doble clic en el archivo) y ábralo con un editor de texto plano. Si es necesario, renómbrelo como ovhconfig.txt.

En su contenido, cambie el environment «production» por «development» (en inglés).

Si ha cambiado el nombre del archivo, vuelva a llamarlo .ovhconfig y súbalo a la raíz del espacio FTP, reemplazando al actual.

Para reactivar el acelerador GeoCaché, solo tendrá que repetir la operación modificando el parámetro environment con el valor «production».

![](images/img_1207.jpg){.thumbnail}
También puede añadir la siguiente linea en el archivo .htaccess: 

```
Header set Cache-Control "no-cache"
```



