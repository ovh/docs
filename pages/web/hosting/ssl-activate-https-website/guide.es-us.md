---
title: 'Habilitar HTTPS en un sitio web con certificado SSL'
slug: activar-https-en-un-sitio-web-con-ssl
excerpt: 'Cómo activar el protocolo HTTPS en un sitio web que dispone de un certificado SSL'
section: SSL
order: 2
---

**Última actualización: 05/12/2018**

## Objetivo

Los planes de hosting de OVH incluyen un certificado SSL gratuito. Dicho certificado permite establecer una conexión segura con uno o más sitios web y que, por tanto, sea posible acceder a ellos a través de HTTPS. Sin embargo, para poder disfrutar de esta conexión segura, es necesario configurar previamente el sitio web.

**Esta guía explica cómo habilitar el protocolo HTTPS en un sitio web con certificado SSL.**

## Requisitos

- Tener un [certificado SSL](https://www.ovh.es/ssl/){.external} instalado en su [alojamiento web de OVH](https://www.ovh.es/hosting/){.external}.
- Tener al menos un sitio web instalado y accesible en su alojamiento web de OVH.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Web`{.action}.

## Procedimiento

La seguridad desempeña un papel cada día más relevante en el mundo de internet. Los usuarios conceden una gran importancia a la confidencialidad de sus datos y a cómo se transmiten por la red. En general, los internautas se fían más de aquellos sitios web que permiten un intercambio seguro de los datos, especialmente cuando se trata de datos sensibles. 

Cuando navegamos por internet, existen varias formas de identificar los sitios web que disponen de una conexión segura: mediante un icono (normalmente un candado) en la barra de navegación de nuestro explorador, un mensaje, un código de colores... El protocolo HTTPS, en lugar del tradicional HTTP, también nos permite reconocer este tipo de conexiones. Cada vez es más fácil, pues, identificar a simple vista si un sitio web dispone o no de una conexión segura.

![Sitio web en HTTPS](images/activate-https-website-ssl-step1.png){.thumbnail}

**Habilitar HTTPS en un sitio web es una operación delicada**, ya que requiere realizar diversas acciones en la configuración del sitio web, es decir, en el código. Una manipulación incorrecta podría tener consecuencias negativas: desde un peor posicionamiento en los motores de búsqueda hasta la imposibilidad de acceder al sitio web, en el peor de los casos. 

A continuación se resumen los pasos necesarios para habilitar la conexión HTTPS en un sitio web.

|Paso|Acción|Descripción|
|---|---|---|
|1|Activar el certificado SSL en el alojamiento web|Es necesario activar el certificado SSL o comprobar que este se ha instalado correctamente y que está activo en el sitio web correspondiente.|
|2|Comprobar el entorno técnico|Antes de proseguir, debe verificar que la activación del protocolo HTTPS en el sitio web no tendrá efectos negativos para este último.|
|3|Activar el protocolo HTTPS en el sitio web|A continuación hay que activar el protocolo HTTPS para que el sitio web pueda utilizarlo. Esta operación no es igual en todos los casos y dependerá del propio sitio web.|
|4|Comprobar que el sitio web funcione correctamente|En último lugar, debe verificar que el sitio web sigue funcionando correctamente una vez activado el protocolo HTTPS.|

### 1. Activar el certificado SSL en el alojamiento web

Para activar el certificado SSL en un alojamiento web, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external} y realice las siguientes acciones:

|Acción|Descripción|
|---|---|
|Activar un certificado SSL en el alojamiento web|Una vez que haya elegido el certificado SSL más adecuado en función de sus necesidades, OVH lo instalará en su alojamiento.|
|Activar el certificado SSL en el multisitio correspondiente|El sitio web en el que quiera activar el protocolo HTTPS debe estar configurado como multisitio en el alojamiento web. Asimismo, asegúrese de que el certificado SSL está activado para el multisitio.|

Para más información sobre estas dos acciones, consulte nuestra guía [Gestionar un certificado SSL en un alojamiento web](https://docs.ovh.com/es/hosting/gestionar-un-certificado-ssl-en-un-alojamiento-web/){.external}. Si ha contratado recientemente su alojamiento web con OVH, es posible que este último ya tenga un certificado SSL instalado y que la conexión SSL para el multisitio ya esté activa.

Para comprobarlo, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. Por defecto, se abrirá la pestaña **Información general**. En el panel **Configuración**, consulte la información que aparece bajo el epígrafe **Certificado SSL**. Si se indica «Sí», significa que hay un certificado SSL instalado en el alojamiento web. 

![Sitio web en HTTPS](images/activate-https-website-ssl-step2.png){.thumbnail}

A continuación, abra la pestaña `Multisitio`{.action}. Aparecerá una tabla en la que se muestran todos los dominios añadidos al alojamiento. En la columna **SSL** puede consultar si la conexión segura SSL está activada o desactivada en los diferentes multisitios. 

![Sitio web en HTTPS](images/activate-https-website-ssl-step3.png){.thumbnail}

Si tiene dificultades para comprobar si el certificado SSL está instalado en su alojamiento web y/o está activo en el multisitio correspondiente, consulte la guía [Gestionar un certificado SSL en un alojamiento web](https://docs.ovh.com/es/hosting/gestionar-un-certificado-ssl-en-un-alojamiento-web/){.external}.

### 2. Comprobar el entorno técnico

Antes de realizar cambios en la configuración del sitio web, compruebe que este está listo para utilizar el protocolo HTTPS. No hay un procedimiento válido para todos los casos, ya que depende del propio sitio web. 

Le recomendamos que tenga en cuenta las consideraciones que se ofrecen a continuación. No obstante, recuerde que el objetivo de esta guía es ayudarle en la medida de lo posible, sin que esto sustituya a la ayuda de un webmaster.

> [!warning]
>
> La responsabilidad sobre la configuración y la gestión de los servicios que OVH pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía. 
>

#### 2.1. Evitar mezclar contenido HTTP y HTTPS

En general, si el sitio web admite la conexión a través de HTTPS, debe evitar mezclar contenido HTTP y HTTPS en una misma página o en el conjunto del sitio web. Es decir, que cuando el sitio web utiliza HTTPS, todo el contenido debe cargarse en este protocolo.

De lo contrario, corre el riesgo de ofrecer en su sitio web lo que los navegadores denominan «contenido mixto» (*mixed content*), esto es, contenido considerado como potencialmente inseguro en una página web identificada como segura. En función del tipo de contenido mixto, pueden darse dos situaciones:

- **El sitio web se muestra con normalidad, pero aparece una advertencia en la barra de direcciones**: El navegador informa al visitante de que ha cargado contenido pasivo (imágenes, vídeos...) desde una fuente no segura.

- **Algunas partes del sitio web no se muestran y aparece una advertencia en la barra de direcciones**: El navegador informa al visitante de que ha bloqueado contenido activo (scripts, iframes, archivos CSS...) procedente de una fuente no segura.

En ese sentido, debe asegurarse de que todo el contenido que se carga desde el sitio web proviene de una fuente segura. 

![Contenido mixto en el sitio web](images/activate-https-website-ssl-step4.png){.thumbnail}

Tenga en cuenta que, aunque el alojamiento tenga un certificado SSL, el contenido alojado podría cargarse tanto en HTTP como en HTTPS en función de cómo haya identificado dicho contenido en el código del sitio web. Por lo tanto, debe comprobar que el contenido que se carga desde el sitio web utiliza el protocolo HTTPS.

Preste especial atención a cómo están escritas las direcciones en el código del sitio web. Le recomendamos que:

- siempre que sea posible, utilice direcciones relativas, por ejemplo, `../img/header.png`;
- evite las direcciones absolutas que incluyan el protocolo HTTP, como `http://mypersonaldomain.ovh/img/header.png`.

Si es necesario, edite el código del sitio web para que se ajuste a las recomendaciones anteriores. Si utiliza un CMS (por ejemplo, WordPress), su estructura probablemente estará lista para utilizar el protocolo HTTPS y no será necesario modificar el código del sitio web.

#### 2.2. Evitar generar contenido duplicado

En función de cómo esté escrito el código del sitio web, deberá asegurarse de que no es posible acceder a él desde distintas direcciones, por ejemplo, utilizando tanto HTTP como HTTPS. Si esto ocurriera, su sitio web tendría el mismo contenido disponible en varias direcciones diferentes, algo que los motores de búsqueda consideran «contenido duplicado» (o *duplicate content*).

Este fenómeno puede afectar negativamente al posicionamiento del sitio web. Para solucionarlo, asegúrese de que el sitio web «fuerza» la utilización del protocolo HTTPS. Para ello, deberá implementar una regla de reescritura de URL en el código del sitio web.

Si utiliza un CMS (por ejemplo, WordPress), su estructura probablemente gestionará automáticamente las reglas de reescritura y no será necesario modificar el código del sitio web.

### 3. Activar el protocolo HTTPS en el sitio web

Una vez que el alojamiento web disponga de un certificado SSL activo, que el multisitio correspondiente tenga una conexión SSL activa y que usted se haya asegurado de que el sitio web está listo para utilizar HTTPS, ya puede activar este protocolo.

> [!warning]
>
> Antes de realizar cualquier operación, le recomendamos que guarde una copia de seguridad completa del sitio web, incluyendo tanto los archivos presentes en el espacio de almacenamiento como la base de datos, en su caso. 
>

Para activar el protocolo HTTPS en un sitio web, es necesario realizar cambios en su configuración. Hay varias formas de hacerlo. La información que se indica a continuación puede servir de ayuda, pero es posible que no sea completa o no se aplique a su caso particular.

- **Si utiliza un CMS (por ejemplo, WordPress)**: 

Normalmente es posible activar HTTPS desde el panel de administración del sitio web. Los pasos para activar este protocolo varían en función del CMS utilizado. 

Por ejemplo, puede tener que activar un parámetro llamado «Forzar HTTPS», o modificar la URL completa del sitio web para añadir la «s», cambiando «**http**://mypersonaldomain.ovh» por «**https**://mypersonaldomain.ovh».

Si necesita ayuda para realizar esta modificación desde el panel de administración de su CMS, consulte la documentación oficial del mismo. 

- **Si usted mismo (o un desarrollador) ha escrito el código de su sitio web**: 

Seguramente deberá activar HTTPS editando directamente el código del sitio web. Si tiene los conocimientos necesarios, puede editar el código usted mismo para adaptarlo al protocolo HTTPS. En caso contrario, le recomendamos que se ponga en contacto con el desarrollador que haya creado el sitio web. 

A continuación le ofrecemos un ejemplo de script que deberá insertar en el archivo **.htaccess**, sin que esto sustituya a la ayuda de un webmaster. No olvide sustituir la información genérica por la de su propio dominio y adaptar el script si es necesario.

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.mypersonaldomain.ovh/$1 [R,L]
```

### 4. Comprobar que el sitio web funcione correctamente

Una vez que haya activado el protocolo HTTPS en el sitio web, compruebe que este último funciona correctamente y que se sigue mostrando todo el contenido. Para ello, acceda al sitio web, compruebe si aparece algún mensaje de aviso y examine las distintas secciones verificando que no haya problemas de visualización. 

Si encuentra algún fallo, le recomendamos que intente solucionarlo lo antes posible o que desactive el protocolo HTTPS hasta que identifique su origen. Si lo anterior no da resultado, puede utilizar la copia de seguridad completa del sitio web realizada en el paso anterior.

Si el contenido del sitio web se muestra con normalidad en HTTPS y no aparece ningún mensaje de aviso, significa que el cambio se ha realizado correctamente. Si quiere activar HTTPS en otro sitio web del mismo alojamiento, deberá volver a realizar todos los pasos que se describen en esta guía.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.