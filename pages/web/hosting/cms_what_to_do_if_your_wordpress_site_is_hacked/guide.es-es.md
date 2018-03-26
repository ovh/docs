---
title: 'Pirateo de su sitio web WordPress: Consejos y casos prácticos'
excerpt: ''
id: '1874'
slug: pirateo_de_su_sitio_web_wordpress_consejos_y_casos_practicos
legacy_guide_number: g1874
section: Casos de uso
---


## 
Esta guía se dirige a todos aquellos usuarios que disponen de un sitio web WordPress alojado en OVH que ha desaparecido, está redirigido a otro sitio o lleno de anuncios molestos. 

OVH no ofrece soporte para los productos de WordPress ni por correo ni por teléfono. Sin embargo, podemos indicarle los pasos a seguir en caso de pirateo.


## ¿Por qué me han pirateado el sitio web?
¿Por qué me han pirateado el sitio web? ¿Qué pasos he de seguir? 

El pirateo de un sitio web suele producirse cuando no se actualiza correctamente el producto, se utilizan plugins no oficiales o contraseñas demasiado obvias, etc. 

¡La ausencia total de riesgo no existe! Sin embargo, sí es posible reducir los riesgos. 

Puede adoptar una serie de medidas prácticas que le permitirán corregir el problema y/o evitar que este se repita (realizando regularmente las actualizaciones necesarias de la versión de WordPress, los temas, los plugins, etc.). 

Esta guía explica cómo volver a poner en línea su sitio web. 

Si OVH ha cerrado su sitio, puede consultar una [guía general](https://www.ovh.es/g1392.procedimiento-cierre-hack-ovh) sobre los procedimientos de cierre por pirateo (hack).


## Escanee su puesto de trabajo
Debe empezar por analizar su entorno local, ya que el origen del ataque o de la infección suele ser local (ordenador portátil, de sobremesa, etc.). 

Asegúrese de que utiliza un antivirus/malware en su ordenador local. Algunos antivirus no pueden eliminar determinados virus, de modo que sería necesario utilizar varios programas antivirus (locales y online). Este consejo es aplicable para Windows, Mac y Linux.


## Evaluar la situación
Si descubre que su sitio web ha sido pirateado, debe actuar de inmediato. En primer lugar, debe identificar cuándo se produjo el pirateo para determinar si OVH puede recuperar los datos. A continuación, veremos cómo localizar la intrusión y abordaremos los dos casos posibles.


## 
Antes de realizar cualquier restauración, debemos conocer la fecha de las últimas modificaciones de sus archivos web (FTP).
No es posible establecer un procedimiento detallado para localizar sin ninguna duda el origen preciso de una intrusión, pero a continuación explicamos cómo proceder de manera general, basándonos en la hipótesis de que el origen del ataque sea un fallo de seguridad de un script y que, por tanto, el hacker haya realizado una petición HTTP.

Todas las peticiones HTTP pueden consultarse en los logs (https://logs.ovh.net/su_dominio). Sustituya «su_dominio» por su nombre de dominio y extensión: p. ej., «ovh.es».
1. Busque la fecha y la hora que aparecen en el registro de tiempo (contenido del correo que ha recibido)*. 
2. Partiendo de esa hora, vaya revisando sus logs ampliando progresivamente el campo de búsqueda a los horarios anteriores hasta que identifique una entrada incorrecta (una entrada extraña, diferente a las demás, etc.). Según el caso, este procedimiento puede requerir algo de práctica o de conocimiento sobre el formato de las peticiones. 
3. Identifique el script atacado por esta petición. 
4. Analice el script para localizar el fallo. 
5. Corrija el fallo. 

* El envío de correo tan solo se produce si su alojamiento ha sido bloqueado. Si no ha sido bloqueado, deberá buscar la fecha de los últimos cambios a través de su espacio FTP (fecha de los archivos). 

No basta con eliminar el código malicioso añadido por un hacker. Es necesario corregir el fallo de seguridad en su conjunto.

Le aconsejamos que solicite la ayuda de un [webmaster](https://partners.ovh.com) especializado en este tipo de operaciones y/o que consulte el foro oficial de WordPress.
Nuestro soporte no está facultado para prestar asistencia directa en este tipo de solicitudes.


## Restauración del sitio
WordPress está compuesto por archivos y una base de datos. Puede restaurar sus archivos a una fecha anterior. OVH le ofrece un historial de 3 semanas de los archivos alojados en su alojamiento. En cuanto a la base de datos, es posible realizar una copia de hace 7 días.
La restauración no permite corregir los fallos de seguridad, sino que es necesario buscar el fallo y corregirlo. 
La restauración sustituye los datos presentes por el contenido de la copia de seguridad.


## Restauración de archivos por FTP
Es posible restaurar todo su espacio FTP a través del área de cliente. Sin embargo, esta operación resultará complicada si cuenta con más dominios asignados al mismo alojamiento. 

En caso de que varios sitios cohabiten en el mismo alojamiento, le aconsejamos que tan solo restaure el directorio afectado. Para ello, puede consultar la siguiente [guía](https://www.ovh.es/g1593.web_hosting_restauracion_de_un_backup_completo_o_un_archivo_especifico_por_ftp_con_filezilla).


## Restauración de la base de datos SQL
Estas dos guías explican cómo realizar la [exportación](http://www.ovh.es/g1394.exportacion-base-de-datos) y la [importación](https://www.ovh.es/g1393.importacion-base-de-datos-mysql) de la base de datos.

Una vez que haya realizado la copia de seguridad de la base de datos (dump), deberá eliminar el conjunto de tablas desde [phpMyAdmin](https://phpmyadmin.ovh.net) para poder importar la copia de seguridad.


## Tras la restauración
Una vez que haya terminado la restauración, deberá comprobar si existen actualizaciones disponibles de WordPress, del tema y de los plugins y, en caso afirmativo, ejecutarlas. 

También deberá desinstalar los plugins que no utilice. No basta con desactivarlos, ya que de este modo podría no eliminar el fallo presente en los mismos.

Si el pirateo es más antiguo y la restauración no funciona, estos son los pasos que debe seguir para volver a poner en línea su sitio WordPress.

## No puede conectarse al panel de administración de WordPress
En ese caso, deberá modificar su [contraseña de administrador](https://codex.wordpress.org/Resetting_Your_Password) siguiendo la guía oficial de WordPress. 

Si le resulta demasiado complicado, podrá actualizar su correo desde [phpMyAdmin](https://phpmyadmin.ovh.net) en la tabla «user». Vuelva a la página de conexión, haga clic en «He olvidado mi contraseña» y espere a que se le envíe un mensaje de correo electrónico.


## Sustituir los archivos de WordPress por otros de un WordPress que haya sido descargado recientemente
Al sustituir los archivos de base se asegura de que no contengan ningún rastro del pirateo. 

Para ello, acceda a la página oficial de [WordPress](https://es.wordpress.org/).

También puede descargarse la última versión estable del CMS en su ordenador. 

El archivo de instalación suele ser un archivo comprimido (.zip), por lo que deberá descomprimirlo (extraerlo) en su ordenador. Existen diversas guías en internet sobre cómo realizar esta operación. 

Una vez descomprimido, deberá transferir sus archivos a su espacio FTP. Para ello, puede consultar la siguiente [guía](https://www.ovh.es/g1374.publicar-sitio-web-en-internet).

En caso de que uno o varios sitios web cohabiten en el mismo alojamiento, deberá realizar la transferencia de archivos en el directorio afectado. 

Para ello, deberá modificar el archivo wp-config.php para que el enlace en la base de datos esté operativo. 

Deberá recuperar el mensaje de correo electrónico que recibió al crear la base de datos. Podrá encontrar dicha información en su área de cliente. Para ello, acceda a «Soporte» > «Historial de mensajes de correo». 

Si no recuerda la contraseña de su base de datos, podrá modificarla desde el área de cliente. Para ello, consulte la siguiente [guía](https://www.ovh.es/g1374.publicar-sitio-web-en-internet).
A continuación, deberá comprobar las actualizaciones disponibles desde el panel de administración de Wordpress.


## Información útil
Le aconsejamos que utilice únicamente los plugins oficiales de WordPress, ya que los plugins no oficiales podrían no estar actualizados y, por lo tanto, contener un código malicioso.

