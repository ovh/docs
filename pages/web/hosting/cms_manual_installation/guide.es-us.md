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
> Ponemos a su disposición este tutorial para ayudarle lo mejor posible en tareas habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) o con el editor del CMS que haya elegido instalar. Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de este tutorial.
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
> Para instalar su CMS **automáticamente** desde su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), consulte nuestra documentación sobre la instalación de un módulo en un clic](https://docs.ovh.com/us/es/hosting/modulos-en-un-clic/).
>

**Descubra cómo configurar su sitio web instalando manualmente un CMS.**
  
## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/) que contenga al menos una base de datos.
- Disponer de un [dominio](https://www.ovhcloud.com/es/domains/)
- Estar conectado al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws)
  
## Procedimiento

### Presentación de los CMS

Para ayudarle a elegir su CMS, consulte a continuación una breve descripción para cada uno de los 4 CMS anteriores.

#### WordPress

**WordPress** suele utilizarse para crear un sitio web o blog. Está basado en la tecnología PHP y cuenta con una gran variedad de herramientas, como un corrector ortográfico y plugins para el e-commerce, el SEO o la seguridad de su sitio web.

Más información en nuestra página relativa a [módulo WordPress](https://www.ovhcloud.com/es/web-hosting/uc-wordpress-website/)

- Sitio oficial de [WordPress](https://https://wordpress.com/){.external}

#### Joomla!

**Joomla!** es un CMS que permite crear sitios web y aplicaciones web de alto rendimiento.

La comunidad **Joomla!** es muy grande y puede prestar asistencia y servicios en todos los ámbitos relacionados con este CMS (ayuda, documentación, asistencia técnica, temas, etc.).

Más información en nuestra página relativa a [Joomla!](https://www.ovhcloud.com/es/web-hosting/uc-joomla-website/)

- Sitio oficial de [Joomla!](https://www.joomla.org/){.external}

#### Drupal

**Drupal** es una plataforma open source gratuita con PHP creada en 2000. **Drupal** permite crear rápidamente sitios web dinámicos.

Más información en nuestra página relativa a [Drupal](https://www.ovhcloud.com/es/web-hosting/uc-drupal-website/)

- Sitio oficial de [Drupal](https://www.drupal.org/){.external}

#### PrestaShop

CMS creado en 2005 y dedicado a la creación de sitios web de e-commerce. Fuera de las funcionalidades habituales de las tiendas en linea, este software también puede personalizarse con módulos, temas y modelos. 

Más información en nuestra página relativa a [PrestaShop](https://www.ovhcloud.com/es/web-hosting/uc-prestashop-website/)

- Sitio oficial de [PrestaShop](https://www.prestashop.com/){.external}

> [!warning]
>
> No importa cuál sea el CMS que elija, le recordamos que OVHcloud no proporciona soporte sobre el uso de estos CMS. Si necesita ayuda, contacte directamente con el editor del CMS que haya elegido utilizando los enlaces que se indican más arriba en este tutorial.
>

### Etapa 1 - preparar la instalación <a name="step1"></a>

Para instalar un CMS en su [plan de hosting](https://www.ovhcloud.com/es/web-hosting/), es necesario realizar algunos preparativos.

#### 1.1 - Comprobar la declaración de la "carpeta raíz"

La carpeta raíz corresponde al directorio en el que se instalará el futuro CMS en el alojamiento. Le recomendamos que elija un directorio vacío para evitar conflictos con otros posibles multisitios.

Consulte nuestra guía sobre [cómo añadir un multisitio a un alojamiento web](https://docs.ovh.com/us/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/) para determinar la carpeta raíz que debe utilizar con su CMS.

> [!primary]
>
> Si define un nombre de "carpeta raíz" que no existe en su alojamiento web, se creará automáticamente en el espacio de almacenamiento FTP de su alojamiento web.

#### 1.2 - Comprobar el "puntero" del nombre de dominio

- Asegúrese de que el dominio que utilizará para acceder al CMS y el subdominio en "www" apuntan a la dirección IP de su [plan de hosting](https://www.ovhcloud.com/es/web-hosting/).


Para obtener la dirección IP de su plan de hosting, conéctese a su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) en la sección `Web Cloud`{.action} y seleccione su plan de hosting en la sección `Alojamientos`{.action}.<br>
En el recuadro `Información general`{.action}, a su derecha, encontrará la dirección IP de su alojamiento web en el formulario `IPv4`{.action}.

Si la zona DNS activa de su dominio está gestionada en su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), compare la dirección IP de su alojamiento con la presente en la zona DNS de su dominio, ayudándole a nuestra documentación sobre las [zonas DNS de OVHcloud](https://docs.ovh.com/us/es/domains/web_hosting_como_editar_mi_zona_dns/).

> [!warning]
>
> Si ha activado las opciones `CDN`{.action} o `IP del país`{.action} con su dominio, utilice la dirección IP adecuada con nuestra documentación que recoge [todas las direcciones IP de nuestros alojamientos compartidos](https://docs.ovh.com/us/es/hosting/lista-de-direcciones-ip-de-los-clusters-y-alojamientos-web/).

Si no puede realizar estas comprobaciones, póngase en contacto con el proveedor de hosting de su zona DNS activa para actualizar el direccionamiento del dominio.

> [!warning]
>
> Todos los cambios realizados en la zona DNS conllevan un plazo de propagación de entre 4 y 24 horas.
>

- Obtenga [la información necesaria para conectarse al espacio FTP de su alojamiento web](https://docs.ovh.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/#1-obtener-los-datos-de-conexion).
- Consulte los accesos a la base de datos de su plan de hosting, si ya existe, o cree una con ayuda de [documentación](https://docs.ovh.com/us/es/hosting/crear-base-de-datos/).

#### 1.3 - Instalar el cliente FTP gratuito "FileZilla"

Si todavía no utiliza un cliente FTP, puede utilizar Filezilla. Consulte la página de descarga gratuita y el tutorial sobre su uso en nuestra documentación sobre el [uso de FileZilla en el alojamiento de OVHcloud](https://docs.ovh.com/us/es/hosting/web_hosting_guia_de_uso_de_filezilla/).

#### 1.4 - Preparar una base de datos <a name="step1-4"></a>

Los CMS necesitan una base de datos para funcionar. Nuestros [planes de hosting](https://www.ovhcloud.com/es/web-hosting/) contienen.

Utilice nuestra guía para [crear una base de datos desde su plan de hosting](https://docs.ovh.com/us/es/hosting/crear-base-de-datos/).

Si tiene un plan Web Cloud Databases en MySQL o MariaDB y quiere utilizarlo para instalar manualmente su CMS, consulte nuestra documentación sobre la [creación de una base de datos en un servicio Web Cloud Databases](https://docs.ovh.com/us/es/clouddb/crear-bases-de-datos-y-usuarios/).

Una vez que haya creado la base de datos, deberá descargar los parámetros de conexión (servidor, nombre de la base de datos, nombre de usuario y contraseña) y conservarlos para [el etapa 3](#step3) de esta guía.

> [!primary]
>
> Si desea instalar su CMS con una base de datos ya existente, recupere los parámetros de conexión a su base de datos directamente en los archivos del sitio web asociados a esta.
>
> Si también se trata de un CMS idéntico al que tiene que instalar, puede utilizar [esta guía](https://docs.ovh.com/us/es/hosting/cambiar-contrasena-base-de-datos/#etapa-3-cambiar-la-contrasena-de-la-base-de-datos-del-sitio-web-en-el-archivo-de-configuracion) para identificar los archivos de configuración en su [espacio de almacenamiento FTP](https://docs.ovh.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/).
>
> Conéctese a la base de datos para identificar los "prefijos" de las tablas que ya están en su interior. para no elegir un "prefijo" de tabla que ya utilice otro sitio web.
>
> - Para conectarse a la base de datos asociada a su plan de hosting, consulte [esta guía](https://docs.ovh.com/us/es/hosting/crear-base-de-datos/#acceder-a-la-interfaz-phpmyadmin).
> - Para conectarse a una base de datos en un databases de Web Cloud, consulte [esta guía](https://docs.ovh.com/us/es/clouddb/coneccion-base-de-datos-servidor-bdd/).
>

### Etapa 2 - iniciar la instalación manual

#### 2.1 - Obtener los archivos de origen de su CMS

Acceda a la web del editor del CMS que haya elegido para descargar los archivos de origen.

A continuación se muestran los enlaces a las páginas de descarga de los CMS que figuran en el presente tutorial:

- [WordPress](https://wordpress.org/download/#download-install){.external}
- [Joomla!](https://downloads.joomla.org/){.external}
- [Drupal](https://www.drupal.org/download){.external}
- [Prestashop](https://www.prestashop.com/en/download){.external}

> [!primary]
>
> Descargue la versión PHP y la versión MySQL o MariaDB necesarias para hacer funcionar el CMS.
>
> Para ello, consulte el enlace a la página oficial del CMS que quiera instalar:

>
> - [WordPress](https://wordpress.org/about/requirements/){.external}
> - [Joomla!](https://downloads.joomla.org/technical-requirements){.external}
> - [Drupal](https://www.drupal.org/docs/getting-started/system-requirements/php-requirements){.external}
> - [Prestashop](https://www.prestashop.com/en/system-requirements){.external}
>
>
> Configure la versión de PHP en su alojamiento web con nuestra guía sobre [el cambio de versión PHP de un alojamiento web](https://docs.ovh.com/us/es/hosting/cambiar-version-php-en-alojamiento-web/).
>
Si ya utiliza una versión de PHP igual o superior a la necesaria, no es necesario realizar ningún cambio.
>

Siga las instrucciones del editor de su CMS hasta que los archivos de origen se carguen a su ordenador y continúe leyendo este tutorial.

> [!warning]
>
> Si tiene otros sitios web alojados en su plan de hosting, compruebe que son compatibles con la versión de PHP que seleccione para su nuevo CMS.
>

#### 2.2 - Descomprimir los archivos fuente descargados en una nueva carpeta

>[!primary]
>
> Para mayor facilidad, sustituya en este paso el nombre de la carpeta "**CMS**" por el nombre del CMS que haya elegido para mayor facilidad. (**WordPress**, **Joomla!**, **Drupal**, **PrestaShop**).
>

El archivo descargado está en un formato **comprimido** (zippé). Cree una carpeta llamada "**CMS**" en su ordenador y luego **descomprima** el contenido del archivo descargado en la carpeta "**CMS**".

Para ello, abra la carpeta en la que haya descargado el archivo comprimido, haga clic derecho sobre el archivo en cuestión y seleccione "Extraer todo... ".

Indique la carpeta "**CMS**" en la que quiera descargar los archivos desde esta carpeta.

#### 2.3 - Mover los archivos fuente de la carpeta "CMS" al "directorio raíz" de su alojamiento web

Una vez descomprimidos los archivos en su carpeta "**CMS**", [conéctese por FTP al espacio de almacenamiento](https://docs.ovh.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/) utilizando el [cliente FTP FileZilla](https://docs.ovh.com/us/es/hosting/web_hosting_guia_de_uso_de_filezilla/) y, a continuación, copie los archivos contenidos en la carpeta "**CMS**" en la "carpeta raíz" que haya establecido en su alojamiento durante el [etapa 1](#step1) de esta guía.

A continuación, un ejemplo con el CMS *WordPress*:

![hosting](images/wpfl2.png){.thumbnail}

> [!warning]

>
> Le recomendamos encarecidamente que utilice una "carpeta raíz" vacía para evitar conflictos con otro de sus sitios web. Compruebe que la carpeta de destino no contenga ningún elemento antes de mover los archivos.
>

> [!primary]

>
Si la "carpeta raíz" que ha definido no se ha creado automáticamente en las acciones descritas en el [etapa 1](#step1), puede crearla a través de FileZilla.
>
> El almacenamiento de los archivos en el alojamiento puede tardar unos minutos.
>
> Una vez finalizada la transferencia, compruebe que todos los elementos de la carpeta local "**CMS**" se hayan transferido correctamente a la carpeta raíz de su alojamiento web.
>

**Caso Particular**: Si tiene una velocidad de internet limitada y/o un plan de hosting **Pro** o superior, puede utilizar la conexión **SSH** para colocar los archivos de origen de su CMS en el espacio de almacenamiento de su alojamiento web.

Para conectarse a su alojamiento por SSH, consulte nuestra guía sobre la [conexión por SSH desde un alojamiento compartido de OVHcloud](https://docs.ovh.com/us/es/hosting/web_hosting_ssh_en_alojamiento_compartido/).

Una vez que se haya conectado a **SSH**, ejecute los siguientes comandos:

Acceda a la carpeta raíz en la que quiere instalar su CMS en su alojamiento web:

```bash
cd NameOfYourTargetFolder
```

- Consulte los archivos de origen de su CMS directamente desde su "directorio raíz" con el comando correspondiente al CMS que haya elegido:

> [!tabs]
> **WordPress**
>> 
>> ```bash
>> wget http://wordpress.org/latest.tar.gz
>> ```
>>
>> **latest** permite instalar automáticamente la última versión del CMS.
>>
> **Joomla!**
>> 
>> ```bash
>> wget https://downloads.joomla.org/cms/joomla4/4-2-8/Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
>> **Joomla4** y **4-2-8*** coinciden con la última versión de Joomla! disponible.
>> Sustituya estos valores por los valores que desee instalar.
>> 
> **Drupal**
>> 
>> ```bash
>> wget https://ftp.drupal.org/files/projects/admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
>> **8.x-2.4** corresponde a la última versión de Drupal disponible.
>> Sustituya estos valores por los valores que desee instalar.
>> 
> **PrestaShop**
>> 
>> ```bash
>> wget https://github.com/PrestaShop/PrestaShop/archive/1.7.8.8.tar.gz
>> ```
>> 
>> **1.7.8.8** corresponde a la última versión de PrestaShop disponible.
>> Sustituya estos valores por los valores que desee instalar.
>> 

- Descomprima los archivos de origen de su CMS en la carpeta raíz utilizando el comando correspondiente al CMS que haya elegido:

> [!tabs]
> **WordPress**
>> 
>> ```bash
>> tar xvf latest.tar.gz
>> ```
>> 
> **Joomla!**
>> 
>> ```bash
>> tar xvf Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
> **Drupal**
>> 
>> ```bash
>> tar xvf admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
> **PrestaShop**
>> 
>> ```bash
>> tar xvf 1.7.8.8.tar.gz
>> ```
>> 

- En la carpeta raíz se crea una carpeta "**CMS**". Mueva su contenido a la base de su carpeta raíz:

```bash
mv CMS/* ./
```

- Elimine la carpeta "**CMS**" ya vacía:

```bash
rmdir ./CMS/
```

- Elimine el archivo comprimido correspondiente al CMS que haya elegido:

> [!tabs]
> **WordPress**
>> ```bash
>> rm -f latest.tar.gz
>> ```
>> 
> **Joomla!**
>> ```bash
>> rm -f Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
> **Drupal**
>> ```bash
>> rm -f admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
> **PrestaShop**
>> ```bash
>> rm -f 1.7.8.8.tar.gz
>> ```
>> 

### Etapa 3 - Finalizar la instalación manual <a name="step3"></a>


> [!success]
>
> Antes de continuar la instalación, vacíe la caché de su navegador de Internet para evitar cualquier error.
>

A partir de esta etapa, el procedimiento será diferente en función del CMS que haya elegido previamente.

Para continuar con la instalación, siga uno de los siguientes enlaces haciendo clic en la guía correspondiente a su CMS:

- [Finalizar la instalación de WordPress](https://docs.ovh.com/us/es/hosting/cms_instalar_manualmente_wordpress/)
- [Finalizar la instalación de Joomla!](https://docs.ovh.com/us/es/hosting/cms_manually_install_joomla/
)
- [Finalizar la instalación de Drupal](https://docs.ovh.com/us/es/hosting/cms_manually_install_drupal/)
- [Finalizar la instalación de PrestaShop](https://docs.ovh.com/us/es/hosting/cms_manually_install_prestashop/)

## Más información <a name="go-further"></a>

[Migración de su sitio web y de su correo a OVHcloud](https://docs.ovh.com/us/es/hosting/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/)

[Publicar un sitio web en internet en un alojamiento web](https://docs.ovh.com/us/es/hosting/web_hosting_publicar_un_sitio_web_en_internet/)

[Alojar varios sitios web en un mismo hosting](https://docs.ovh.com/us/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
