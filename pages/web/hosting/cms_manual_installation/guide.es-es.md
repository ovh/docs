---
title: "Tutorial - Instalar manualmente un CMS en mi alojamiento"
slug: web_hosting_instalar_un_cms_manualmente
excerpt: "Descubra cómo instalar manualmente un CMS en un alojamiento"
section: CMS
order: 03
updated: 2023-04-04
---

**Última actualización: 04/04/2023**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Esta guía explica cómo instalar manualmente un CMS (del inglés content management system), como WordPress, Joomla!, Drupal o PrestaShop, en pocos pasos.

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición este tutorial para ayudarle lo mejor posible en tareas habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) o con el editor del CMS que haya elegido instalar. Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de este tutorial.
>
> Para contactar con los diferentes editores de los CMS mencionados, consulte los enlaces a sus páginas oficiales respectivas:
>
> - [WordPress](https://wordpress.com/support/){.external}
> - [Joomla!](https://www.joomla.org/){.external}
> - [Drupal](https://www.drupal.org/){.external}
> - [PrestaShop](https://www.prestashop.com/en/support){.external}
>

> [!success]
>
> Para instalar su CMS **automáticamente** desde su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), consulte nuestra documentación sobre la instalación de un módulo en un clic](https://docs.ovh.com/es/hosting/modulos-en-un-clic/).
>

**Descubra cómo configurar su sitio web instalando manualmente un CMS.**
  
## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/) que contenga al menos una base de datos.
- Disponer de un [dominio](https://www.ovhcloud.com/es-es/domains/)
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)
  
## Procedimiento

### Presentación de los CMS

Para ayudarle a elegir su CMS, consulte a continuación una breve descripción para cada uno de los 4 CMS anteriores.

#### WordPress

**WordPress** suele utilizarse para crear un sitio web o blog. Está basado en la tecnología PHP y cuenta con una gran variedad de herramientas, como un corrector ortográfico y plugins para el e-commerce, el SEO o la seguridad de su sitio web.

Más información en nuestra página relativa a [módulo WordPress](https://www.ovhcloud.com/es-es/web-hosting/uc-wordpress-website/)

- Sitio oficial de [WordPress](https://https://wordpress.com/){.external}

#### Joomla!

**Joomla!** es un CMS que permite crear sitios web y aplicaciones web de alto rendimiento.

La comunidad **Joomla!** es muy grande y puede prestar asistencia y servicios en todos los ámbitos relacionados con este CMS (ayuda, documentación, asistencia técnica, temas, etc.).

Más información en nuestra página relativa a [Joomla!](https://www.ovhcloud.com/es-es/web-hosting/uc-joomla-website/)

- Sitio oficial de [Joomla!](https://www.joomla.org/){.external}

#### Drupal

**Drupal** es una plataforma open source gratuita con PHP creada en 2000. **Drupal** permite crear rápidamente sitios web dinámicos.

Más información en nuestra página relativa a [Drupal](https://www.ovhcloud.com/es-es/web-hosting/uc-drupal-website/)

- Sitio oficial de [Drupal](https://www.drupal.org/){.external}

#### PrestaShop

CMS creado en 2005 y dedicado a la creación de sitios web de e-commerce. Fuera de las funcionalidades habituales de las tiendas en linea, este software también puede personalizarse con módulos, temas y modelos. 

Más información en nuestra página relativa a [PrestaShop](https://www.ovhcloud.com/es-es/web-hosting/uc-prestashop-website/)

- Sitio oficial de [PrestaShop](https://www.prestashop.com/){.external}

> [!warning]
>
> No importa cuál sea el CMS que elija, le recordamos que OVHcloud no proporciona soporte sobre el uso de estos CMS. Si necesita ayuda, contacte directamente con el editor del CMS que haya elegido utilizando los enlaces que se indican más arriba en este tutorial.
>

### Etapa 1 - preparar la instalación <a name="step1"></a>

Para instalar un CMS en su [plan de hosting](https://www.ovhcloud.com/fr/web-hosting/), es necesario realizar algunos preparativos.

#### 1.1 - Comprobar la declaración de la "carpeta raíz"

La carpeta raíz corresponde al directorio en el que se instalará el futuro CMS en el alojamiento. Le recomendamos que elija un directorio vacío para evitar conflictos con otros posibles multisitios.

Consulte nuestra guía sobre [cómo añadir un multisitio a un alojamiento web](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/) para determinar la carpeta raíz que debe utilizar con su CMS.

> [!primary]
>
> Si define un nombre de "carpeta raíz" que no existe en su alojamiento web, se creará automáticamente en el espacio de almacenamiento FTP de su alojamiento web.

#### 1.2 - Comprobar el "puntero" del nombre de dominio

- Asegúrese de que el dominio que utilizará para acceder al CMS y al subdominio en "www" apuntan a la dirección IP de su [plan de hosting](https://www.ovhcloud.com/es-es/web-hosting/).

Para obtener la dirección IP de su plan de hosting, conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) en la sección `Web Cloud`{.action} y seleccione su plan de hosting en la sección `Alojamientos`{.action}.<br>
En el recuadro `Información general`{.action}, a su derecha, encontrará la dirección IP de su alojamiento web en el formulario `IPv4`{.action}.

Si la zona DNS activa de su dominio está gestionada en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), compare la dirección IP de su alojamiento con la presente en la zona DNS de su dominio, ayudándole a nuestra documentación sobre las [zonas DNS de OVHcloud](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/).

> [!warning]
>
> Si ha activado las opciones `CDN`{.action} o `IP del país`{.action} con su dominio, utilice la dirección IP adecuada con nuestra documentación que recoge [todas las direcciones IP de nuestros alojamientos compartidos](https://docs.ovh.com/es/hosting/lista-de-direcciones-ip-de-los-clusters-y-alojamientos-web/).

Si no puede realizar estas comprobaciones, póngase en contacto con el proveedor de hosting de su zona DNS activa para actualizar el direccionamiento del dominio.

> [!warning]
>
> Todos los cambios realizados en la zona DNS conllevan un plazo de propagación de entre 4 y 24 horas.
>

- Obtenga [la información necesaria para conectarse al espacio FTP de su alojamiento web](https://docs.ovh.com/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/#1-obtener-los-datos-de-conexion).
- Consulte los accesos a la base de datos de su plan de hosting, si ya existe, o cree una con ayuda de [documentación](https://docs.ovh.com/es/hosting/crear-base-de-datos/).

#### 1.3 - Instalar el cliente FTP gratuito "FileZilla"

Si todavía no utiliza un cliente FTP, puede utilizar Filezilla. Consulte la página de descarga gratuita y el tutorial sobre su uso en nuestra documentación sobre el [uso de FileZilla en el alojamiento de OVHcloud](https://docs.ovh.com/es/hosting/web_hosting_guia_de_uso_de_filezilla/).

#### 1.4 - Preparar una base de datos <a name="step1-4"></a>

Los CMS necesitan una base de datos para funcionar. Nuestros [planes de hosting](https://www.ovhcloud.com/es-es/web-hosting/) contienen, a excepción de [el alojamiento gratuito Start 10M](https://www.ovhcloud.com/es-es/domains/free-web-hosting/).

Utilice nuestra guía para [crear una base de datos desde su plan de hosting](https://docs.ovh.com/es/hosting/crear-base-de-datos/).

Si tiene un plan Web Cloud Databases en MySQL o MariaDB y quiere utilizarlo para instalar manualmente su CMS, consulte nuestra documentación sobre la [creación de una base de datos en un servicio Web Cloud Databases](https://docs.ovh.com/es/clouddb/crear-bases-de-datos-y-usuarios/).

Una vez que haya creado la base de datos, deberá descargar los parámetros de conexión (servidor, nombre de la base de datos, nombre de usuario y contraseña) y conservarlos para [el etapa 3](#step3) de esta guía.

> [!primary]
>
> Si desea instalar su CMS con una base de datos ya existente, recupere los parámetros de conexión a su base de datos directamente en los archivos del sitio web asociados a esta.
>
> Si también se trata de un CMS idéntico al que tiene que instalar, puede utilizar [esta guía](https://docs.ovh.com/es/hosting/cambiar-contrasena-base-de-datos/#etapa-3-cambiar-la-contrasena-de-la-base-de-datos-del-sitio-web-en-el-archivo-de-configuracion) para identificar los archivos de configuración en su [espacio de almacenamiento FTP](https://docs.ovh.com/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/).
>
> Conéctese a la base de datos para identificar los "prefijos" de las tablas que ya están en su interior. para no elegir un "prefijo" de tabla que ya utilice otro sitio web.
>
> - Para conectarse a la base de datos asociada a su plan de hosting, consulte [esta guía](https://docs.ovh.com/es/hosting/crear-base-de-datos/#acceder-a-la-interfaz-phpmyadmin).
> - Para conectarse a una base de datos en un databases de Web Cloud, consulte [esta guía](https://docs.ovh.com/es/clouddb/coneccion-base-de-datos-servidor-bdd/).
>