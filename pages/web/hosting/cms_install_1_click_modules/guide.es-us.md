---
title: Instalar un sitio web con un módulo en un clic
slug: modulos-en-un-clic
excerpt: Cómo instalar un sitio web con los módulos en un clic de OVHcloud
section: CMS
---

**Última actualización: 05/05/2020**

## Objetivo

Los módulos en un clic permiten instalar un sitio web de forma fácil y rápida sin necesidad de conocimientos técnicos. OVHcloud tiene módulos en un clic de los CMS más conocidos: WordPress, PrestaShop, Drupal y Joomla.

**Esta guía explica cómo instalar un sitio web con nuestros módulos en un clic.**


## Requisitos

- Tener contratado un [plan de hosting](https://www.ovh.com/world/es/hosting/).
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager).
- No haber descargado archivos en el directorio en el que vaya a instalar el módulo.
- El dominio (y el subdominio, en su caso) que utilice para el sitio web debe estar declarado como multisitio.


## Procedimiento

### Elegir un CMS

Los CMS (del inglés *content management system*) permiten diseñar un sitio web a través de una interfaz fácil de usar. Existen distintos CMS en función del proyecto que desee crear. Estos módulos le permiten tener la estructura de un sitio web lista para usar, que podrá personalizar a su gusto (diseño, contenido, etc.).

OVH ofrece cuatro CMS con sus módulos en un clic, por lo que podrá elegir el que mejor se adapte a su proyecto. Si ya ha elegido su CMS, solo tiene que seguir los pasos que se indican en esta guía.  Si, por el contrario, todavía no ha elegido un CMS, puede consultar nuestra [comparativa de CMS](https://www.ovh.com/world/es/hosting/website/comparativa-cms/).

Si quiere utilizar un CMS que no esté incluido en los módulos en un clic de OVHcloud, puede instalarlo manualmente en su alojamiento, siempre que dicho CMS sea compatible con su [plan de hosting](https://www.ovh.com/world/es/hosting/).

![Logotipos de los CMS](images/CMS_logo.png){.thumbnail}


### Acceder a la gestión de los módulos en un clic

En la columna izquierda del área de cliente de  OVHcloud, haga clic en `Alojamientos`{.action} y seleccione el alojamiento en el que quiera instalar el módulo. A continuación, abra la pestaña `Módulos en un clic`{.action}, desde donde podrá consultar y gestionar los distintos módulos ya instalados, así como añadir un nuevo módulo.

![Acceso a la sección «Módulos en un clic»](images/access_to_the_1_click_modules_section.png){.thumbnail}

### Añadir un módulo

Para añadir el módulo en un clic, haga clic en el botón `Añadir un módulo`{.action}.

Se abrirá una ventana en la que podrá seleccionar el CMS y el dominio en el que quiera instalar el sitio web.

![Elección del módulo](images/add_a_module.png){.thumbnail}

Si no encuentra el dominio en la lista, abra la pestaña `Multisitio`{.action} para añadirlo, y vuelva a intentar añadir el módulo.

Una vez seleccionado el módulo, deberá elegir entre el modo de instalación simple o avanzado.

- Si selecciona la instalación simple (opción por defecto), OVHcloud se encargará de instalar el CMS y le enviará las claves para que pueda administrarlo. Es la forma más sencilla y rápida de instalar un módulo.
- Si selecciona la instalación avanzada, podrá personalizar la configuración de la instalación del CMS. Para ello, deberá proporcionar diversos datos necesarios para el funcionamiento del CMS en su base de datos: información de conexión, directorio de instalación, idioma, nombre del administrador, etc.


#### Instalación simple de un módulo

Para instalar el módulo en modo simple, asegúrese de que la casilla `Instalación en modo avanzado`{.action} no esté marcada y, a continuación, haga clic en el botón `Instalar`{.action}.

> [!warning]
>
> El directorio de instalación del módulo debe estar vacío. Asimismo, para que la instalación pueda realizarse, debe contar con una base de datos disponible.
> 

![Instalación simple de un módulo](images/choose_installation.png){.thumbnail}

Una vez haya finalizado la instalación, recibirá por correo electrónico la información necesaria para conectarse al panel de administración del CMS. Ya puede conectarse a su CMS para personalizar su sitio web.


#### Instalación avanzada de un módulo

Para instalar el módulo en modo avanzado, asegúrese de que la casilla `Instalación en modo avanzado`{.action} esté marcada y, a continuación, haga clic en el botón `Siguiente`{.action}.

![Instalación avanzada de un módulo](images/advanced_installation.png){.thumbnail}


##### Seleccionar la base de datos

Introduzca la información de conexión a la base de datos que utilizará con el módulo. Existen varias posibilidades: 

- Si la base de datos ya está creada en el alojamiento, selecciónela e introduzca la información que se le solicita.
- Si la base de datos todavía no está creada en el alojamiento, deberá seguir los pasos que se indican para crearla y, a continuación, seleccionarla e introducir la información que se le solicita.
- Si la base de datos ya está creada en un SQL Privado o CloudDB, seleccione `Base de datos externa al alojamiento web`{.action} e introduzca la información que se le solicita. El SQL Privado o CloudDB y el plan de hosting deben estar alojados en el mismo datacenter.
- Si la base de datos ya está creada en otro alojamiento web de OVHcloud, seleccione `Base de datos externa al alojamiento web`{.action} e introduzca la información que se le solicita. La base de datos y el plan de hosting deben estar alojados en el mismo datacenter.

Una vez introducidos los datos, haga clic en el botón `Siguiente`{.action}.

> [!warning]
>
> Si los datos introducidos son incorrectos, no será posible instalar el módulo. Para evitar que esto suceda, le recomendamos que pruebe previamente la conexión a la base de datos.
> 

![Base de datos para instalación avanzada](images/advanced_installation_database.png){.thumbnail}

##### Configurar el módulo

Para configurar el módulo, introduzca los siguientes datos:

- **Nombre o dirección de correo electrónico del administrador:** Identificador que utilizará para conectarse al panel de administración de su CMS.
- **Contraseña:** Contraseña que utilizará para conectarse al panel de administración de su CMS.
- **Dominio:** Dominio en el que desea instalar su sitio web.
Para más información, consulte la guía [Utilizar un mismo plan de hosting para varios sitios web](../configurar-un-multisitio-en-un-alojamiento-web/).
- **Idioma:** Idioma en el que se instalará el CMS.
- **Ruta de instalación:** Este parámetro se completa automáticamente al seleccionar el dominio. También puede completar la ruta introduciendo subdirectorios.

Una vez introducidos los datos, haga clic en el botón `Siguiente`{.action}.

> [!warning]
>
> Para que el módulo se instale correctamente, el directorio al que apunte la ruta de instalación debe estar vacío.
> 

![Configuración del módulo en modo avanzado](images/advanced_installation_configuration.png){.thumbnail}

##### Confirmar la instalación

Antes de finalizar la instalación en modo avanzado, compruebe que los datos introducidos son correctos y, a continuación, haga clic en `Aceptar`{.action}.

![Confirmación de la instalación en modo avanzado](images/advanced_installation_summary.png){.thumbnail}

### Personalizar el sitio web

Recibirá un mensaje de correo electrónico confirmándole que el módulo CMS se ha instalado correctamente e invitándole a conectarse a su panel de administración. Desde ahí, podrá cambiar el tema de su sitio web y publicar sus primeros contenidos.

Para más información sobre las distintas funcionalidades de su nuevo sitio web, consulte la documentación oficial del CMS correspondiente.

|CMS|Sitio web oficial|
|---|---|
|WordPress|[https://es.wordpress.com/](https://es.wordpress.com/){.external}|
|PrestaShop|[https://www.prestashop.com/es/](https://www.prestashop.com/es/){.external}|
|Joomla|[https://www.joomla.com/](https://www.joomla.com/){.external}|
|Drupal|[https://www.drupal.org/](https://www.drupal.org/){.external}|

## Más información

[Elegir un CMS para crear un sitio web](https://www.ovh.com/world/es/hosting/website/comparativa-cms/){.external}

[Gestionar una base de datos desde un alojamiento compartido](../gestion-de-una-base-de-datos-desde-un-alojamiento-compartido/){.external}

Descubra nuestras [opciones de SQL Privado](https://www.ovh.com/world/es/hosting/opciones-sql.xml){.external}.

Descubra nuestras [bases de datos Cloud Databases](https://www.ovh.com/world/es/cloud/cloud-databases/){.external}.

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
