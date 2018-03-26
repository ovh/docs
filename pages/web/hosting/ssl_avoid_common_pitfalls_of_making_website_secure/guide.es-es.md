---
title: Evitar las trampas del SSL en un sitio web
excerpt: Evitar las trampas del SSL en un sitio web
id: '2220'
slug: evitar_las_trampas_del_ssl_en_un_sitio_web
legacy_guide_number: g2220
section: SSL
---


## El contenido mixto
¿El sitio web no carga los elementos externos, como los botones de Facebook o Twitter? ¿Las interacciones de la página no funcionan como en HTTP? Es probable que se trate de una cuestión de contenido mixto.

Desde hace unos años, los navegadores de internet como Google Chrome, Mozilla Firefox o Internet Explorer impiden que los sitos web HTTPS carguen elementos de la página si estos se encuentran en una URL HTTP. Esto permite evitar que la confidencialidad que aporta el HTTPS se vea afectada por un elemento cargado en HTTP.

En la mayoría de los casos, se trata de scripts externos procedentes de otros sitios web, como redes sociales, y solo hay que sustituir http por https para llamar a estos scripts.

No obstante, hay que prestar atención, ya que algunos sitios web utilizan servicios de CDN para, por ejemplo, alojar librerías JavaScript (como jQuery). Si el CDN entrega la librería con una URL en HTTP, el funcionamiento del sitio puede verse afectado.


¿Cómo saber si esto afecta a mi sitio web?

Las herramientas de depuración que incluyen Mozilla Firefox y Google Chrome indican cuándo el sitio contiene elementos bloqueados por contenido mixto. En la web [Mozilla Developer Network](https://developer.mozilla.org/es/docs/Seguridad/MixedContent) encontrará más información sobre estas herramientas relativa al contenido mixto.


## El contenido duplicado
El contenido duplicado hace referencia al hecho de mostrar el mismo contenido en varias URL distintas. A los motores de búsqueda no les gusta este fenómeno, que consideran un intento de mejorar el posicionamiento. Por eso, penalizan a los sitios web que lo utilizan.

Para evitar este problema, cuando el sitio web funciona correctamente en HTTPS se recomienda añadir una redirección del contenido en HTTP hacia el HTTPS. De esta forma, los visitantes serán remitidos automáticamente a la dirección HTTPS y solo habrá una dirección disponible con el mismo contenido.

A continuación mostramos un ejemplo de redirección aplicada desde el archivo .htaccess en la raíz del sitio web (no olvide sustituir sudominio.es por su nombre de dominio y extensión):


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.sudominio.es/$1 [R,L]
```




## Volver de HTTPS a HTTP
En caso de que quiera restringir su sitio web a HTTP y no utilizar el protocolo HTTPS, solo tiene que forzarlo desde el archivo .htaccess.

De este modo, sus visitantes serán enviados automáticamente a la dirección en HTTP y solo habrá una única dirección disponible para el mismo contenido, aunque se acceda por HTTPS.

A continuación mostramos un ejemplo de redirección de HTTPS a HTTP aplicada desde el archivo .htaccess en la raíz del sitio web (no olvide sustituir sudominio.es por su nombre de dominio y extensión):


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 443
RewriteRule ^(.*)$ http://www.sudominio.es/$1 [R,L]
```



