---
title: 'CMS: Instalar manualmente WordPress'
excerpt: ¿Cómo instalar manualmente WordPress?
slug: cms_instalar_manualmente_wordpress
section: CMS
order: 07
---

**Última actualización: 15/11/2022**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Este tutorial le ayudará a instalar manualmente el CMS (Content Management System) WordPress en pocos etapas.

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/fr/) o [el editor del CMS WordPress](https://wordpress.com/fr/support/){.external}. Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de esta guía.
>

> [!success]
>
> Para instalar WordPress **automáticamente** desde su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), consulte nuestra documentación sobre la instalación de un módulo en un clic](https://docs.ovh.com/fr/hosting/modules-en-1-clic/).
>
> Para instalar **otro CMS** (Joomla, Drupal, PrestaShop), consulte nuestra documentación sobre la [instalación manual de un CMS](https://docs.ovh.com/fr/hosting/mutualise-installer-manuellement-mon-cms/).
>

## Requisitos

- Tener contratado un plan de [hosting de OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) que contenga al menos una base de datos.
- Disponer de un [dominio](https://www.ovhcloud.com/fr/domains/)
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}

## Procedimiento

### Etapa 1 - preparar la instalación <a name="step1"></a>

Para instalar el CMS **WordPress** en su plan [hosting de OVHcloud](https://www.ovhcloud.com/fr/web-hosting/), es necesario realizar algunos preparativos.

##### 1.1 - Comprobar la declaración de la "carpeta raíz"

La carpeta raíz corresponde al directorio en el que se instalará el futuro CMS en el alojamiento. Le recomendamos que elija un directorio vacío para evitar conflictos con otros posibles multisitios.

Consulte nuestra guía sobre [cómo añadir un multisitio a un alojamiento web](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/) para determinar la carpeta raíz que debe utilizar en su WordPress.

> [!primary]
>
> Si define un nombre de "carpeta raíz" que no existe en su alojamiento web, se creará automáticamente en el espacio de almacenamiento FTP de su alojamiento web.
>

#### 1.2 - Comprobar el "puntero" del nombre de dominio

- Asegúrese de que el dominio que utilice para acceder a su WordPress y al subdominio en "www" apuntan correctamente a la dirección IP de su plan de [hosting de OVHcloud](https://www.ovhcloud.com/fr/web-hosting/).

Para obtener la dirección IP de su plan de hosting, conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) en la sección `Web Cloud`{.action} y seleccione su plan de hosting en la sección `Alojamientos`{.action}.<br>
En el recuadro `Información general`{.action}", a su derecha, encontrará la dirección IP de su alojamiento web en el formulario `IPv4`{.action}.

Si la zona DNS activa de su dominio está gestionada en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), compare la dirección IP de su alojamiento con la presente en la zona DNS de su dominio, ayudándole a nuestra documentación sobre las [zonas DNS de OVHcloud](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/).

> [!warning]
>
> Si ha activado las opciones `CDN`{.action} o `IP del país`{.action} con su dominio, utilice la dirección IP adecuada con nuestra documentación que recoge [todas las direcciones IP de nuestros alojamientos compartidos](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/).
>

Si no puede realizar estas comprobaciones, póngase en contacto con el proveedor de hosting de su zona DNS activa para actualizar el direccionamiento del dominio.

> [!warning]
>
> Todos los cambios realizados en la zona DNS conllevan un plazo de propagación de entre 4 y 24 horas.
>

- Obtenga [la información necesaria para conectarse al espacio FTP de su alojamiento web](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/#etape-1-recuperer-les-informations-necessaires-pour-se-connecter).
- Consulte los accesos a la base de datos de su plan de hosting, si ya existe, o cree una con ayuda de [documentación](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/).

#### 1.3 - Instalar el cliente FTP gratuito "Filezilla"

Para más información, consulte la página de descarga gratuita y el tutorial sobre su uso en nuestra documentación sobre el [uso de Filezilla en el alojamiento de OVHcloud](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/).

#### 1.4 - Preparar una base de datos <a name="step1-4"></a>

Los CMS necesitan una base de datos para funcionar. Nuestros planes [de hosting](https://www.ovhcloud.com/fr/web-hosting/) contienen [el alojamiento gratuito Start 10M](https://www.ovhcloud.com/fr/domains/free-web-hosting/).

Utilice nuestra guía para [crear una base de datos desde su plan de hosting](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/).

Si tiene un servicio CloudDB en MySQL o MariaDB y quiere utilizarlo para instalar manualmente su WordPress, consulte nuestra guía sobre la [creación de una base de datos en un Cloud Databases](https://docs.ovh.com/fr/clouddb/creer-bases-de-donnees-et-utilisateurs/#creer-une-base-de-donnees).

Una vez que haya creado la base de datos, deberá descargar los parámetros de conexión (servidor, nombre de la base de datos, nombre de usuario y contraseña) y conservarlos para [el etapa 3](#step3) de esta guía.

> [!primary]
>
> Si desea instalar su CMS WordPress con una base de datos ya existente, recupere los parámetros de conexión a su base de datos directamente en los archivos del sitio web asociados a esta.
>
> Si se trata también de un CMS como el que debe instalar, puede utilizar [esta guía](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/#etape-3-modifier-le-mot-de-passe-de-la-base-de-donnees-de-votre-site-dans-son-fichier-de-configuration) para identificar los archivos de configuración en su [espacio de almacenamiento FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).
>
> Conéctese a la base de datos para identificar los "prefijos" de las tablas que ya están en su interior. para no elegir un "prefijo" de tabla que ya utilice otro sitio web.
>
> - Para conectarse a la base de datos asociada a su plan de hosting, consulte [esta guía](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/#acceder-a-linterface-phpmyadmin).
> - Para conectarse a una base de datos en un Cloud Databases, consulte [esta guía](https://docs.ovh.com/fr/clouddb/connexion-base-de-donnees-serveur-bdd/).
>

### Etapa 2 - iniciar la instalación manual

#### 2.1 - Obtener los archivos de origen de WordPress

Acceda a la web del editor [WordPress](https://wordpress.org/download/#download-install){.external} para descargar los archivos de origen del CMS.

![hosting](images/downloadWP.png){.thumbnail}

> [!primary]
>
> En la página de descarga, consulte la versión PHP y MySQL o MariaDB necesarios para que su WordPress funcione.
>
> Configure la versión de PHP en su alojamiento web con nuestra guía sobre [el cambio de versión PHP de un alojamiento web](https://docs.ovh.com/fr/hosting/configurer-le-php-sur-son-hebergement-web-mutu-2014/).
>
Si ya utiliza una versión de PHP igual o superior a la necesaria, no es necesario realizar ningún cambio.
>

> [!warning]
>
> Si tiene otros sitios web alojados en su plan de hosting, compruebe que estos son compatibles con la versión de PHP que seleccione para su WordPress.
>

#### 2.2 - Descomprimir los archivos fuente descargados en una nueva carpeta

El archivo descargado está en un formato **comprimido* (zippé)**. Cree una carpeta llamada "**WordPress**" en su ordenador y luego **descomprima** el contenido del archivo descargado en la carpeta "**WordPress**".

Para ello, abra la carpeta en la que haya descargado el archivo comprimido, haga clic derecho sobre el archivo en cuestión y seleccione "Extraer todo... ".

Indique la carpeta "**WordPress**" en la que quiera descargar los archivos desde esta carpeta.

#### 2.3 - Mover los archivos fuente del directorio "WordPress" al "directorio raíz" de su alojamiento web

Una vez descomprimidos los archivos en su carpeta "**WordPress**", [conéctese por FTP al espacio de almacenamiento](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) utilizando el [cliente FTP Filezilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/) y, a continuación, copie los archivos contenidos en la carpeta "**WordPress**" en la "carpeta raíz" que haya establecido en su alojamiento durante el [etapa 1](#step1) de esta guía.

![hosting](images/wpfl2.png){.thumbnail}

>[!warning]
>
> Le recomendamos encarecidamente que utilice una carpeta raíz vacía para evitar conflictos con otro sitio web. Compruebe que la carpeta de destino no contenga ningún elemento antes de mover los archivos.
>

>[!primary]
>
Si el directorio raíz que ha definido no se ha creado automáticamente en las acciones descritas en el [etapa 1](#step1), puede crearlo a través de Filezilla.
>
> El almacenamiento de los archivos en el alojamiento puede tardar unos minutos.
>
> Una vez finalizada la transferencia, compruebe que todos los elementos de la carpeta local "**WordPress**" se hayan transferido correctamente a la carpeta raíz de su alojamiento web.
>

**Caso Particular**: Si tiene una tasa de internet limitada y/o un plan de hosting **Pro** o superior, puede utilizar la conexión **SSH** para colocar los archivos de origen de WordPress en el espacio de almacenamiento de su alojamiento web. 

Para conectarse a su alojamiento por SSH, consulte nuestra guía sobre [la conexión por SSH desde un alojamiento compartido de OVHcloud](https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/).

Una vez que se haya conectado a **SSH**, ejecute los siguientes comandos:

Acceda a la carpeta raíz en la que quiere instalar su WordPress en su alojamiento web:

```bash
cd NameOfYourTargetFolder
```

- Consulte los archivos de origen de WordPress directamente desde la carpeta raíz:

```bash
wget http://wordpress.org/latest.tar.gz
```

- Descomprima los archivos de origen de WordPress en la carpeta raíz:

```bash
tar xvf latest.tar.gz
```

- En su "directorio raíz", se crea una carpeta "**wordpress**". Mueva su contenido a la base de su carpeta raíz:

```bash
mv wordpress/* ./
```

- Elimine la carpeta "**wordpress**" ya vacía:

```bash
rmdir ./wordpress/
```

- Elimine el archivo comprimido "**latest.tar.gz**":

```bash
rm -f latest.tar.gz
```

### Etapa 3 - Finalizar la instalación manual <a name="step3"></a>

> [!success]
>
> Antes de continuar la instalación, vacíe la caché de su navegador de Internet para evitar cualquier error.
>

#### 3.1 - Acceder a su sitio WordPress a través de su navegador

Escriba su dominio en la barra de búsqueda de su navegador de Internet.

Si los archivos fuente de WordPress se han colocado correctamente en la carpeta raíz, aparecerá la página WordPress en la que podrá seleccionar el idioma:

![hosting](images/WPselectlangue.png){.thumbnail}

Seleccione el idioma del sitio web y haga clic en `Continuar`{.action}.

#### 3.2 - Asociar su WordPress y su base de datos

WordPress le pedirá que obtenga las claves de conexión a la base de datos:

![hosting](images/WPstart.png){.thumbnail}

Conéctese con las claves de su base de datos (si es necesario, consulte [el etapa 1.4](#step1-4) de esta guía) y haga clic en `¡Ya está!`{.action} para continuar.

Se abrirá la siguiente página:

![hosting](images/WPdb.png){.thumbnail}

Introduzca la información solicitada para la base de datos:

- Nombre de la base de datos: este nombre se ha establecido al crear la base de datos en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

- Identificador: es idéntico al nombre de la base de datos si utiliza una base de datos incluida con su alojamiento web.
Para las bases de datos creadas en un CloudDB, consulte la información indicada en [el etapa 1.4](#step1-4) de esta guía.

- Contraseña: le hemos enviado un mensaje de correo electrónico al crear la base de datos. Es posible que lo hayan cambiado.

- Dirección de la base de datos: introduzca el nombre del servidor de la base de datos, en el mensaje de correo electrónico de instalación o en el área de cliente de OVHcloud. 

> [!primary]
> 
> - El nombre del servidor de una base de datos incluida con su plan de hosting suele tener la siguiente forma: `NameOfYourDatabase.mysql.db`. 
>
> El nombre del servidor de una base de datos Cloud Databases comienza por su identificador de cliente de OVHcloud y tiene el siguiente formato: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` donde los **"X"** se sustituyen por la referencia de su servicio Cloud Databases.
>

- Prefijo de tablas: si la instalación se realiza con una nueva base de datos, introduzca el prefijo que prefiera. Si utiliza una base de datos ya utilizada en otro sitio web, consulte el [etapa 1.4](#step1-4) de esta guía para no indicar un "prefijo" de tabla que ya haya utilizado la base de datos.

Haga clic en `Enviar`{.action} para validar la información de conexión a la base de datos.

Si todo ha ido bien, aparecerá la siguiente página:

![hosting](images/WPafterDB.png){.thumbnail}

Haga clic en `Ejecutar la instalación`{.action}.

#### 3.3 - Establecer el acceso Administrador al "back-office" de su WordPress y su dirección de correo electrónico de contacto

Una vez realizada la instalación, WordPress le pedirá información sobre su futuro sitio web, incluyendo la creación de su usuario de administrador de WordPress.

que le permitirá acceder al panel de administración, denominado comúnmente "backup-office", de su CMS WordPress.

![hosting](images/WPafterDB2.png){.thumbnail}

Introduzca la información solicitada:

- Título del sitio web: introduzca el título de su sitio web.
- Identificador: defina el identificador de administrador de su CMS.
- Contraseña: establezca una contraseña para este identificador de administrador.
- Su dirección de correo: introduzca una dirección de correo electrónico válida.
- Vida privada: marque esta casilla para que los motores de búsqueda remitan su WordPress.

Haga clic en `Instalar WordPress`{.action} cuando se haya introducido correctamente.

#### 3.4 - Finalizar la instalación manual y probar el acceso "Administrador"

La instalación se cerrará si aparece la siguiente página:

![hosting](images/WPend.png){.thumbnail}

Haga clic en el botón `Conectarse`{.action} para probar el acceso al "Back-office" de su nuevo CMS WordPress utilizando las claves de administrador creadas anteriormente en el etapa 3.3. Justo antes.

> [!primary]
>
El equipo de OVHcloud no proporciona soporte a otras soluciones, como WordPress, por lo que no puede ayudarle a utilizar o configurar su CMS WordPress.
>
> Para este tipo de soporte, utilice los foros dedicados a la solución WordPress.
>

Una vez se haya conectado, se abrirá la siguiente página:

![hosting](images/WPadminInterface.png){.thumbnail}

> [!success]
>
> Ya puede empezar a crear el contenido de su sitio web WordPress.
>

## Más información <a name="go-further"></a>

[Sitio oficial de WordPress](https://wordpress.org)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/fr/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/fr/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com>.