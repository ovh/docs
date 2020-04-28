---
title: 'Web hosting: Configurar la versión de PHP desde el área de cliente'
excerpt: Configurar la versión de PHP desde el área de cliente
id: '1999'
slug: web_hosting_configurar_la_version_de_php_desde_el_area_de_cliente
legacy_guide_number: g1999
section: PHP
---


## Información sobre PHP

## ¿Qué es PHP?
PHP es un lenguaje de programación libre que se utiliza principalmente para crear sitios web dinámicos. 
Es el lenguaje más utilizado en internet actualmente y en él se basan sistemas de gestión de contenidos como WordPress, Joomla o Drupal.

## ¿Para qué sirve el PHP FPM?
Permite acelerar las respuestas PHP, minimiza las solicitudes al disco así como el tratamiento necesario de su código PHP. Conseguimos así un rendimiento hasta 7 veces más rápido en nuestros laboratorios de pruebas con respecto al mecanismo anterior.

## ¿Qué beneficios obtienen los usuarios al migrar a las nuevas versiones de PHP?
Al migrar su sitio a las últimas versiones de PHP, conseguirá una menor exposición a fallos de seguridad (pirateo) y podrá disfrutar de las novedades. 
Además, OVH le ofrece la optimización gratuita PHP-FPM para mejorar su rendimiento a partir de la versión 5.3.

## Mi sitio web o parte de él utiliza versiones antiguas de PHP, ¿qué puedo hacer?
Le aconsejamos encarecidamente que pruebe sus sitios y tareas planificadas con estas nuevas versiones. En esta guía le explicamos cómo hacerlo.

## ¿Por qué OVH no realiza esta actualización de forma automática?
Cada sitio web es único y exclusivo, por lo que nos resulta imposible realizar una actualización personalizada. El cliente debe realizar dicha operación.

## Soy desarrollador y me gustaría realizar esta configuración de forma manual
Puede consultar la siguiente guía, en la que se explica cómo configurar el archivo .ovhconfig: []({legacy}1207)


## Conocer la versión actual
En el área de cliente, seleccione su alojamiento en la sección «Alojamiento». La versión que utiliza su sitio (1) se incluye en «Versión PHP global».

![](images/img_3314.jpg){.thumbnail}
Para modificar esta versión, haga clic en «Modificar la configuración», tal y cómo se muestra en la imagen superior (2).


## Modificar la versión
Puede elegir los siguientes elementos: 

Entorno de ejecución :
En los planes de hosting de OVH, puede cambiar el entorno de ejecución en el que funciona su sitio web. Esto le permite, o bien disfrutar de una configuración estable a largo plazo, o bien disfrutar de las últimas actualizaciones de los programas que incluye OVH.

Si desea más información, puede consultar nuestra guía: 
[]({legacy}2149)

Versión de PHP: 

- 5.4
- 5.5
- 5.6
- 7.0 

(por defecto, puede elegir la última versión estable 5.6)

Motor: 

- php (activa el PHP FPM)
- phpcgi (desactiva el PHP FPM)

(el motor «php» es el que aparece por defecto; se aconseja su uso para disfrutar de PHP FPM, la utilidad del FPM se describe en el párrafo «Información general»). 

Entorno: 

- desarrollo: no se aplica ninguna caché y los logs PHP aparecen en su sitio (display_errors=On).
- producción: los archivos estáticos como las imágenes, video, audio, html, css... tienen una expiración mayor. Esto maximiza la puesta en caché de los archivos en los navegadores y los logs PHP no aparecen en su sitio (display_errors=Off).

Firewall de aplicación: 
- desactivado
- activado: le permite activar un firewall de aplicación del tipo mod_security.



![](images/img_4130.jpg){.thumbnail}
Para una configuración por defecto, le aconsejamos que seleccione las opciones indicadas en la captura de pantalla que se incluye más arriba.
La modificación de la versión tardará unos minutos.

![](images/img_3316.jpg){.thumbnail}
A continuación, puede volver a modificar la versión PHP haciendo clic en «Modificar la configuración» > «Modificar la configuración actual».

![](images/img_3317.jpg){.thumbnail}


## Volver a la versión anterior
Si la modificación de la versión PHP provoca problemas en su sitio, puede «dar marcha atrás» y volver a la versión anterior de PHP. Para ello, haga clic en «Modificar la configuración».

![](images/img_3318.jpg){.thumbnail}
A continuación, haga clic en «Volver a la configuración».

![](images/img_3319.jpg){.thumbnail}
Si no ha realizado ningún cambio en la versión de PHP, aparecerá el siguiente cuadro. En caso contrario, tan solo tendrá que elegir en el «Historial» la versión que desee.

![](images/img_3320.jpg){.thumbnail}
La modificación de la versión tardará unos minutos.

![](images/img_3316.jpg){.thumbnail}
Si desea volver a la versión de PHP anterior, le invitamos a consultar el apartado «¿Cómo saber si mi sitio web es compatible con una nueva versión de PHP?» a continuación.


## ¿Cómo saber si mi sitio web es compatible con una nueva versión de PHP?
1. Si utiliza un sistema de gestión de contenido como WordPress, Joomla o Dotclear phpBB, el primer paso consiste en actualizar su sitio siguiendo las guías oficiales: 

- [Wordress](https://codex.wordpress.org/Updating_WordPress)
- [Joomla](https://docs.joomla.org/Portal:Upgrading_Versions/en)
- [Drupal](http://drupal.org/documentation/)
- [Prestashop](http://doc.prestashop.com/pages/viewpage.action?pageId=11272342)

...
2. Si su sitio se basa en una solución personalizada, deberá utilizar las [guías oficiales sobre migración de PHP](http://php.net/manual/en/appendices.php). 
Si usted no es el desarrollador de su sitio, puede ponerse en contacto con su webmaster.

## ¿Cómo conocer la versión de PHP que se utiliza en un directorio específico?
Su área de cliente muestra la versión de PHP «global», es decir, la que se define en la raíz del alojamiento. Si ha guardado una configuración particular en un subdirectorio, puede ver la versión de PHP utilizada descargando el siguiente archivo: [info.php](https://www.ovh.com/fr/documents/info.php). 
Si desea hacerlo manualmente, basta con crear un archivo de texto e incluir: 

```
<?php phpinfo(); ?>
```

A continuación, guárdelo con el formato «.php» y asígnele el nombre «info.php». 

Publique mediante FTP ([]({legacy}1380)) el archivo en la carpeta que desee, por ejemplo «/www/miwordpress/». 
Abra su navegador y acceda a «info.php». Por ejemplo: «www.su-sitio-com/miwordpress/info.php».

![](images/img_3321.jpg){.thumbnail}


## He configurado un archivo «.htaccess» para forzar una versión de PHP, ¿qué va a pasar?
La versión PHP definida en este archivo no se tendrá en cuenta, ya que la nueva versión definida en el área de cliente tiene prioridad. Si su archivo «.htaccess» contiene otras directivas (URL rewriting, redirección...), estas permanecerán activas.


## ¿Cuáles son las restricciones de PHP FPM?
Por motivos de seguridad, las siguientes opciones están desactivadas (desaconsejadas por PHP): 

```
register_globals
magic_quotes_gpc
```




## Tengo problemas para realizar la migración, ¿qué puedo hacer?
Nuestro soporte no puede realizar la migración de su versión de PHP por usted. Sin embargo, sí podrá guiarle durante el proceso de actualización de su versión de PHP (a través del área de cliente o del archivo «.ovhconfig»). Nuestro soporte no será responsable de los posibles fallos.

## ¿Necesita ayuda?
En nuestra red de Partners podrá encontrar empresas de servicios web que le ayudarán durante el proceso de migración de su sitio web: 
[https://partners.ovh.com/](https://partners.ovh.com/).

