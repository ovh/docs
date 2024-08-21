---
title: "Tutorial - Guardar una copia de seguridad de su sitio web WordPress"
excerpt: "Descubra cómo realizar el backup del contenido de su sitio web WordPress y de su base de datos"
updated: 2023-02-22
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Aun tomando todas las precauciones de uso, su sitio web seguirá expuesto a posibles fallos de funcionamiento (error de manipulación, sobrescritura accidental de archivos, fallo de configuración, fallos de seguridad o piratería) que pueden provocar la pérdida parcial o total de sus datos.<br>
Una buena práctica consiste en guardar regularmente la información de su sitio web. que le permitirá volver a un estado anterior del sitio web cuando experimente un fallo de funcionamiento.

En un alojamiento web compartido, usted es responsable de las copias de seguridad de su sitio web. Aunque OVHcloud ofrece copias de seguridad (no contractuales), también le recomendamos que realice usted mismo las copias de seguridad regulares y gestione sus propios soportes de backup (disco duro, memoria USB, etc.) para mayor precaución.

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición este tutorial para ayudarle lo mejor posible en tareas habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con [el editor del CMS WordPress](https://wordpress.com/support/){.external}. Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de este tutorial.
>

**Descubra cómo guardar copia de seguridad del contenido de su sitio web WordPress y su base de datos.**

## Requisitos

- Disponer de un [alojamiento web](/links/web/hosting) y haber instalado WordPress.

## Procedimiento

Puede realizar una copia de seguridad de dos formas: **manualmente** o a través de **mediante una extensión**.

OVHcloud ofrece un [servicio (no contractual) de backup automático de los datos](/pages/web_cloud/web_hosting/ftp_save_and_backup), así como la puesta a disposición de estas copias de seguridad. Sin embargo, es su responsabilidad establecer su propia política de restauración y determinar los puntos de restauración en los momentos que considere oportuno.

### Método n°1 - Realizar una copia de seguridad manual

El backup manual debe realizarse en dos pasos. En primer lugar, debe guardar copia de los archivos PHP de su sitio web y exportar la base de datos.

#### 1.1 - Guarde los archivos de su sitio web

La recuperación se realiza a través de un cliente FTP como FileZilla. Para más información, consulte nuestra guía "[Utilizar FileZilla con su alojamiento de OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)".

Al conectarse al servidor por FTP, deberá cargar (arrastrar/soltar) el contenido del directorio `www` en el panel de la derecha. Este directorio contiene todos los archivos y directorios de su sitio web WordPress (configuración, temas, multimedia, etc.).

![Vista raíz de los archivos y directorios WordPress](/pages/assets/screens/other/web-tools/filezilla/wordpress-into-www.png){.thumbnail}

Haga clic en el directorio `www` y arrástrelo al directorio que desee en la ventana de la izquierda. La transferencia de archivos comenzará automáticamente.

En caso de fallo de funcionamiento en su sitio web, deberá realizar la operación opuesta sobrescribiendo los archivos de destino.

#### 1.2 - Exporte su base de datos

Para exportar su base de datos, acceda a la interfaz _PHPMyAdmin_ a través de la URL que le ha sido comunicada al contratar su plan de hosting.

> [!success]
>
> No dude en consultar nuestra guía sobre [la exportación de una base de datos](/pages/web_cloud/web_hosting/sql_database_export).

![Acceso PHPMyAdmin - Inicio](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-2.png){.thumbnail}

Haga clic en `Exportar`{.action} en la parte superior de la página:

![Acceso PHPMyAdmin - Exportar](/pages/assets/screens/other/web-tools/phpmyadmin/pma-export.png){.thumbnail}

Deje las opciones ofrecidas por defecto: método de exportación rápido y formato SQL.

Haga clic en `Ejecutar`{.action} y descargue la base de datos completa en formato SQL (Structured Query Language).

![Acceso PHPMyAdmin - Exportar - Descarga](/pages/assets/screens/other/browsers/web-pages/dowload-successfull.png){.thumbnail}

### Método n°2 - Realizar una copia de seguridad con una extensión

Las extensiones de WordPress permiten gestionar las copias de seguridad. La más popular es [UdraftPlus](https://wordpress.org/plugins/updraftplus/){.external}, que cuenta con varios millones de instalaciones activas. La versión gratuita es suficiente para guardar copia de su sitio web. La versión premium ofrece más opciones, como copias de seguridad incrementales, herramienta de migración, backup multisitio, más opciones en los clouds destinados a almacenar los datos, etc.

Descargue la extensión en formato directo `.zip` en su equipo. En aras de la claridad, el archivo descargado de la extensión se renombrará **updraftplus.zip** en el resto de este tutorial.

#### 2.1 - Conéctese al panel de administración para instalar la extensión

Por defecto, se trata de su nombre de dominio seguido de `wp-admin` :

![Acceso de administrador a wp-admin](/pages/assets/screens/other/cms/wordpress/login-interface.png){.thumbnail}

En la página de inicio, acceda a la sección `Plugins`{.action} y haga clic en `Añadir nuevo`{.action}.

![Añadir una extensión](/pages/assets/screens/other/cms/wordpress/plugins-add-new.png){.thumbnail}

Descargue la extensión haciendo clic en el botón `Recorrer`{.action} :

![Subir la extensión](/pages/assets/screens/other/cms/wordpress/updraftplus/plugins-add-new-updraftplus.png){.thumbnail}

Haga clic en `Instalar ahora`{.action} :

![Instalar la extensión](/pages/assets/screens/other/cms/wordpress/updraftplus/plugins-browse-updraftplus.png){.thumbnail}

Una vez instalada, deberá activar la extensión:

![Confirmación de la instalación](/pages/assets/screens/other/cms/wordpress/updraftplus/plugins-activate-updraftplus.png){.thumbnail}

Una vez activada, aparecerá en la lista de extensiones:

![Lista de extensiones instaladas](/pages/assets/screens/other/cms/wordpress/updraftplus/plugins-list-updraftplus.png){.thumbnail}

#### 2.2 - Configure sus copias de seguridad

En la página de configuración, haga clic en el botón `Ajustes`{.action} > `UpdraftPlus Backup/Restore` y seleccione la pestaña `Ajustes`{.action}.

![Página UpdraftPlus Backup/Restore](/pages/assets/screens/other/cms/wordpress/updraftplus/updraftplus-settings.png){.thumbnail}

Establezca la copia de seguridad diaria de sus archivos y su base de datos:

![Página UpdraftPlus Ajustes](/pages/assets/screens/other/cms/wordpress/updraftplus/updraftplus-settings-2.png){.thumbnail}

Seleccione la copia de seguridad por correo electrónico.

Las copias de seguridad se enviarán a la dirección de correo electrónico de la cuenta de administrador (la cuenta que utilice):

![Backup por correo electrónico](/pages/assets/screens/other/cms/wordpress/email-setting.png){.thumbnail}

Al final de la página, haga clic en `Guardar cambios`{.action} para aceptar.

#### 2.3 - Realice su primera copia de seguridad

Vuelva a la pestaña `Copia de seguridad/Restaurar`{.action} y haga clic en el botón `Hacer ahora una copia de seguridad`{.action}.

![Página Updraft Plus Guardar/Restaurar](/pages/assets/screens/other/cms/wordpress/updraftplus/updraftplus-backup-now.png){.thumbnail}

En la nueva ventana, vuelva a hacer clic en el botón `Hacer ahora una copia de seguridad`{.action}.

![Página UpdraftPlus modal Guardar/Restaurar](/pages/assets/screens/other/cms/wordpress/updraftplus/updraftplus-perform-backup.png){.thumbnail}

Una vez completadas las copias de seguridad, recibirá dos mensajes de correo electrónico: uno con el contenido de su WordPress y el otro con la base de datos de su sitio web.
Si no recibe los mensajes de correo, compruebe la dirección de correo electrónico de la cuenta que utiliza (en la sección `Usuarios`{.action}). Compruebe también sus carpetas "SPAM / Correo no deseado".

### ¿Con qué frecuencia se realizan copias de seguridad?

La frecuencia de las copias de seguridad depende de la frecuencia con la que modifique el contenido. Una copia de seguridad diaria es útil si publicas a diario contenido en su sitio web. Adapte la frecuencia a la de sus publicaciones. Es posible actualizar la versión manualmente (esta es la opción predeterminada). También es recomendable realizar una copia de seguridad cuando instale o modifique un tema o una extensión.

### Lo que hay que recordar

- La integración de copias de seguridad regulares es una buena forma de proteger el contenido de su sitio web.
- Asegúrese de que sus propias copias de seguridad estén a salvo.
- Realice una copia de seguridad antes de realizar una actualización, comprobando que todo funciona correctamente en su sitio web. 

Aplicando estas buenas prácticas, podrá volver a una versión anterior sana.

## Más información <a name="go-further"></a>

- [Sitio oficial de WordPress](https://wordpress.org){.external}
- [Más información sobre las copias de seguridad de su alojamiento web](/pages/web_cloud/web_hosting/hosting_technical_specificities#informacion-tecnica-de-su-alojamiento-web)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).