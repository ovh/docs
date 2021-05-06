---
title: ¿Qué hacer en caso de error 500 Internal Server Error?
legacy_guide_number: 1987
slug: error-500-internal-server-error
excerpt: Diagnosticar los casos más comunes de errores 500
section: Diagnóstico
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 06/05/2021**

## Objetivo

Los errores 500 "Internal Server Error" pueden afectar a la totalidad o parte de su sitio web, ser aleatorios o permanentes. También pueden aparecer como una página en blanco.

![error500](images/error-500-2.png){.thumbnail}

A veces también se actualizan **automáticamente** en un componente del sitio web, por lo que no tiene que realizar ninguna acción.

**Esta guía explica cómo diagnosticar los casos más comunes de errores 500.**

> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#gofurther) de esta guía.


## Requisitos

- Tener un [plan de hosting](https://www.ovh.es/hosting/).
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).


## Procedimiento

Antes de continuar, compruebe su sitio web en varios dispositivos y navegadores. Si en algunos casos no aparece el error 500 (por ejemplo, a través de un navegador diferente del suyo), es porque no está asociado a sus servicios de OVHcloud. Reinicie sus dispositivos y, si es necesario, contacte con un técnico informático cercano a su domicilio.

Un sitio web está formado por un **código fuente** (los archivos en .php, por ejemplo, visibles durante una conexión a su alojamiento a >pesar del error 500, es altamente recomendable realizar una copia de seguridad local de todos sus datos antes de realizar cualquier otra operación:

- Consulte esta [guía](../mutualise-guide-utilisation-filezilla/) para obtener una copia de su código fuente.
- Si su sitio web utiliza una base de datos, consulte también este [documento](../exportation-bases-donnees/) para obtener una copia de la misma.

En caso de error 500, es totalmente posible realizar una [restauración](../erreur-500-internal-server-error/#restaurer-son-site) del sitio web. Sin embargo, es preferible realizar un diagnóstico a fondo para determinar el origen exacto del error.

### Comprobar los logs de su alojamiento

En primer lugar, consulte esta [guía](../mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/) para buscar la causa del error 500 en los logs de su alojamiento.

### Poner un sitio web en modo de desarrollo

Para identificar los posibles errores de PHP, ponga el alojamiento en modo `desarrollo` utilizando estas [indicaciones](../modifier-lenvironnement-dexecution-de-mon-hebergement-web/#etape-2-modifier-la-configuration-de-lhebergement-web).

### Probar el archivo .htaccess

Un error 500 puede estar relacionado con una anomalía en un archivo `.htaccess`. Este archivo suele estar situado en el primer nivel de la carpeta que contiene el sitio web en su FTP. 

Para comprobarlo, [conéctese por FTP](../connexion-espace-stockage-ftp-hebergement-web/) al alojamiento.

Cambie el nombre del archivo a `.htaccess.old` y permanezca en su sitio web. 

Si este último vuelve a estar accesible, entonces el `.htaccess` está en cuestión. Por lo tanto, deberá modificarse. Si lo desea, contacte con uno de nuestros [partners](https://marketplace.ovhcloud.com/) al respecto.

### Comprobar los permisos de carpetas y archivos

Los archivos y carpetas que componen el sitio web disponen de un cierto nivel de "permisos" en lectura, escritura y ejecución. para protegerlos contra manipulación maliciosa o incorrecta.

Un error 500 puede estar relacionado con un nivel de permisos de acceso incorrecto en algunas de las carpetas o archivos de su sitio web.

Para acceder a estos archivos, conéctese por FTP al alojamiento siguiendo la [guía](../connexion-espace-stockage-ftp-hebergement-web/).

La guía "[Uso de FileZilla con el alojamiento](../mutualise-guide-utilisation-filezilla/#droits-des-fichiers-dossiers)" le ayudará a comprobar lo siguiente: 

-	La **raíz** del alojamiento (es el directorio anotado `/` o `).` en su programa FTP) debe estar obligatoriamente en permisos 705 (estos son los permisos por defecto). Le recomendamos que no modifique este nivel de permisos.
-	Los expedientes deben estar en los derechos 705.
-	Los archivos deben estar habilitados 604.

### Acceder a los detalles de los errores en los scripts

Por motivos de seguridad, su sitio web oculta los detalles sobre el origen del error 500 a cualquier persona que se conecte a él a través de un navegador web.

Si usted o su desarrollador desea tener acceso a estos detalles, puede conectarse a su sitio web a través de una [conexión SSH](https://www.ovh.com/fr/hebergement-web/hebergement-pro.xml) a través de la fórmula de alojamiento [Pro2014](../mutualise-le-ssh-sur-les-hebergements-mutualises/).

### Restaurar el sitio web a su estado anterior

> [!warning]
>
> La restauración del código fuente del sitio web se extenderá a todos los sitios web del alojamiento de OVHcloud.
> 
> Al restaurar un sitio web, el contenido del espacio FTP o el de la base de datos se sustituyen por una copia de seguridad. No podrá recuperar los datos del servidor justo antes de la restauración.

Para restaurar el código fuente del sitio web, consulte nuestra guía [Restaurar el espacio de almacenamiento de un alojamiento web](../restauration-ftp-filezilla-espace-client/). 

Si su sitio web incluye una base de datos, consulte nuestra guía [Restaurar una copia de seguridad de la base de datos](../mutualise-guide-importation-dune-base-de-donnees-mysql/#restaurer-une-sauvegarde-depuis-lespace-client) para restaurarla a un estado anterior.

Por último, si se ha producido un error al actualizar la versión PHP del alojamiento, consulte nuestra guía "[Configurar PHP en el alojamiento](../configurer-le-php-sur-son-hebergement-web-mutu-2014/)" para volver a la configuración anterior.


## Más información <a name="gofurther"></a>

[Todo sobre el archivo .htaccess](../hosting/mutualise-tout-sur-le-fichier-htaccess/)

[¿Cómo diagnosticar una página en blanco?](../hosting/comment-diagnostiquer-page-blanche/)

[Códigos de respuesta de un servidor HTTP](../hosting/mutualise-les-codes-de-reponse-dun-serveur-http/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com>.
