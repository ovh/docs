---
title: "FAQ Web Hosting"
excerpt: "Principales preguntas sobre los planes de hosting de OVHcloud"
updated: 2025-08-01
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

**Haga clic en las preguntas siguientes para ver las explicaciones.**

## Gestión de su producto

/// details | ¿Cómo configurar un alojamiento web?

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.

Desde ahí podrá gestionar sus certificados SSL, la versión PHP aplicada a su alojamiento web, la opción CDN, los posibles multisitios, las bases de datos, etc.

> [!success]
>
> Para ayudarle a configurar su alojamiento web, no dude en consultar las secciones "*Primeros pasos*" y "*Configurar un web hosting Personal, Profesional o Performance*" de [esta página](/products/web-cloud-hosting).

///

/// details | He olvidado la contraseña de acceso a la cuenta en la que se encuentra mi alojamiento web, ¿qué hago?

Si ha olvidado su ID de cliente de OVHcloud o la contraseña, siga estos pasos:

1. Acceda a la [interfaz de conexión al área de cliente de OVHcloud](/links/manager).
{.action} 2. Haga clic en el enlace `¿Ha olvidado el identificador o la contraseña?`{.action}, situado bajo la ventana de inicio de sesión.
3. Introduzca su ID de cliente de OVHcloud (por ejemplo: **aa00000-ovh**) o la dirección de correo electrónico de contacto asociada a su ID de cliente de OVHcloud.
4. Haga clic en el botón `Enviar`{.action}.

El procedimiento de restauración se enviará a su dirección de correo electrónico de contacto.

> [!success]
>
> Para más información, consulte nuestra guía "[Establecer y gestionar la contraseña de su cuenta](/pages/account_and_service_management/account_information/manage-ovh-password)".

///

/// details | ¿Cómo gestionar la contraseña del espacio de almacenamiento FTP de un alojamiento web?

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
3. Abra la pestaña `FTP - SSH`{.action}.

Desde ahí podrá cambiar la contraseña FTP de su alojamiento web.

> [!success]
>
> Para más información, consulte nuestra guía "[Cambiar la contraseña de un usuario FTP](/pages/web_cloud/web_hosting/ftp_change_password)".

///

/// details | ¿Cómo cambiar la contraseña de la base de datos asociada a mi alojamiento web?

> [!warning]
>
> Si cambia la contraseña de una base de datos utilizada por uno de sus sitios web, actualícela también en el archivo de configuración del sitio web correspondiente. De lo contrario, el sitio web se desconectará de la base de datos y no funcionará.

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
3. En la nueva página, haga clic en la pestaña `Bases de datos`{.action}.

Desde ahí podrá cambiar las contraseñas de las bases de datos asociadas a su alojamiento web.

> [!success]
>
> Para más información, consulte nuestra guía "[Cambiar la contraseña de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_change_password)".

///

/// details | ¿Cómo cambiar la contraseña de una dirección de correo asociada a mi alojamiento web?

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Correo electrónico`{.action} (o en el menú `MX Plan`{.action} si utiliza la versión beta del área de cliente de OVHcloud) y seleccione el dominio correspondiente.
3. En la nueva página, haga clic en la pestaña `Correo electrónico`{.action}.
4. En la tabla que aparece, haga clic en el botón `...`{.action} situado a la derecha de la dirección de correo electrónico correspondiente y seleccione `Cambiar la contraseña`{.action}.

Desde ahí podrá cambiar la contraseña de su dirección de correo (asegúrese de respetar la política de contraseñas que se indica en la ventana de entrada).

> [!success]
>
> Para más información, consulte nuestra guía "[Cambiar la contraseña de una dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)".
>
> Si utiliza un cliente de correo (Outlook, Mail de macOS, Thunderbird, etc.), actualice la contraseña de su cuenta de correo cuando el cliente de correo se lo pida, al abrirlo o sincronizarlo.
>
> Si tiene más preguntas sobre la solución *MX Plan*, consulte nuestras [FAQ - Correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).

///

/// details | ¿Cómo publicar un sitio web en internet?

Para publicar su sitio web, debe disponer en primer lugar de los siguientes elementos:

- Un [nombre de dominio](/links/web/domains) que corresponderá a la dirección web desde la que se accederá a su sitio web a través de un navegador de internet (por ejemplo: *domain.tld*). Este dominio también debe estar asociado a su alojamiento web para poder mostrar el sitio web.
- Un [alojamiento web](/links/web/hosting) en el que instalar su sitio web.

Estos son los pasos clave que debe seguir:

1. Defina su proyecto (sitio web "llave en mano" (CMS) instalado manualmente o gracias a los módulos en un clic de OVHcloud o a un sitio web creado por usted o por un proveedor).
2. Suba los archivos del sitio web al espacio de almacenamiento FTP de su alojamiento web.
3. Asocie el sitio web a una base de datos (si el sitio web utiliza una).
4. Acceda a su sitio web.

> [!success]
>
> Para más información sobre la publicación de un sitio web en un alojamiento web, consulte nuestra guía detallada "[Publicar un sitio web en internet](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".
>
> Si decide instalar un CMS (WordPress, Joomla, PrestaShop o Drupal) con nuestra solución Módulos en un clic, consulte nuestra guía detallada "[Instalar su sitio web con un 'módulo en 1 clic' (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>
> Si su sitio web ya existe con otro proveedor y desea migrarlo a OVHcloud, consulte nuestra guía detallada "[Migrar un sitio web y los servicios asociados a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".
>
> Para ayudarle a configurar su alojamiento web, puede consultar todas las [guías relativas a nuestras soluciones de alojamiento web](/products/web-cloud-hosting).

///

/// details | ¿Cómo transferir mi sitio web, mi base de datos, mi dominio y mi correo a OVHcloud sin interrupción del servicio?

Estos son los pasos clave que debe seguir:

1. Contratar el alojamiento y las direcciones de correo electrónico en OVHcloud.
2. Crear y preconfigurar una zona DNS para su dominio en OVHcloud.
3. Obtener una copia de seguridad completa de su sitio web.
4. Importar la copia de seguridad de su sitio web en su plan de hosting de OVHcloud.
5. Volver a crear las mismas direcciones de correo electrónico en OVHcloud.
6. Declarar los servidores de correo de OVHcloud en la zona DNS activa del dominio.
7. Transferir el contenido de sus antiguas direcciones de correo electrónico a sus nuevas direcciones en OVHcloud.
8. Reconfigurar el software de correo electrónico.
9. Sustituir los servidores DNS activos de su dominio por los de OVHcloud.
10. Transferir un dominio a OVHcloud.

> [!success]
>
> Para más información, consulte nuestra guía "[Migrar un sitio web y los servicios asociados a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".

///

/// details | ¿Cómo alojar varios sitios web en un mismo alojamiento web?

Si su [alojamiento web](/links/web/hosting) es compatible, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
3. En la nueva página, haga clic en la pestaña `Multisitio`{.action}.

Desde ahí podrá gestionar los dominios o subdominios declarados en multisitio en su alojamiento web.

> [!success]
>
> Para más información, consulte nuestra guía "[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

///

/// details | ¿Cómo ver un sitio web con una URL en HTTPS?

Para que su sitio web esté accesible con una URL en HTTPS (por ejemplo: `https://domain.tld`), es necesario cumplir dos requisitos:

- Debe disponer de un certificado SSL activo para su nombre de dominio (o instalado en su alojamiento web).
- En el código fuente de su sitio web, este debe forzar la reescritura de las URL en HTTPS.

OVHcloud ofrece varios [certificados SSL](/links/web/hosting-options) en los alojamientos web.

Para activar un certificado SSL en un alojamiento web para su sitio web, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
3. En la página que se abre y en el recuadro **Configuración**, haga clic en el botón `...`{.action} de la derecha de la indicación **Certificado SSL** y seleccione `Contratar un certificado SSL`{.action}.
4. Seleccione el certificado que desee de la [lista de certificados disponibles](/pages/web_cloud/web_hosting/ssl_on_webhosting) y continúe hasta finalizar la orden de pedido.

> [!success]
>
> Para más información, consulte las siguientes guías:
>
> - [Web hosting - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).
> - [Web hosting - Activar un certificado SSL gratuito Let's Encrypt](/pages/web_cloud/web_hosting/ssl_letsencrypt).
> - [HWeb hosting - Activar un certificado SSL Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv).
> - [Web hosting - Activar un certificado SSL Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev).
> - [Web hosting - Instalar un certificado SSL personalizado](/pages/web_cloud/web_hosting/ssl_custom).

Una vez que haya instalado y configurado el certificado SSL de su elección en OVHcloud, compruebe que el código fuente de su sitio web reescribe correctamente las URL de acceso a su sitio web en HTTPS. Si tiene alguna duda al respecto, póngase en contacto con su Webmaster o con uno de nuestros [partners](/links/partner).

///

/// details | ¿Cómo cambiar de plan de hosting?

Para contratar el plan de hosting más adaptado a sus necesidades, consulte nuestras ofertas en [esta página](/links/web/hosting).

> [!primary]
>
> En función de su plan de hosting actual, es posible que algunos planes no se le ofrezcan. Para más información, consulte nuestra guía "[Web hosting - Cómo mejorar su solución](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".

Una vez que haya elegido, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
3. En la página que aparece, en el recuadro **Suscripción**, haga clic en el botón `...`{.action} a la derecha de la mención `Solución` y luego en `Cambiar de plan`{.action}.
4. A continuación, seleccione la nueva suscripción y su duración. Acepte los contratos correspondientes y haga clic en `Enviar`{.action}.

> [!success]
>
> Para más información, consulte nuestra guía "[Web hosting - Cómo mejorar su solución](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".

///

/// details | Al dar de baja el servicio, ¿cómo puedo conservar la solución de correo asociada a mi alojamiento web?

Al dar de baja o eliminar el alojamiento web, también se dará de baja la solución de correo asociada. Para conservar sus direcciones de correo, deberá desvincular la solución de correo **antes* de la baja del alojamiento web correspondiente.

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
3. En la página que se abre, en el recuadro **Configuración**, haga clic en el botón `...`{.action} a la derecha de la mención `Direcciones de correo` y seleccione `Desvincular mi opción de correo`{.action}.
4. Siga las instrucciones para contratar un servicio de correo independiente que le permitirá conservar sus direcciones de correo ya creadas.

///

/// details | Tras la baja de un alojamiento web Performance, ¿cómo puedo conservar la solución Web Cloud Databases asociada?

Los planes de hosting **Performance** incluyen una solución Web Cloud Databases que puede activar gratuitamente.<br>
Al dar de baja o eliminar el alojamiento web **Performance**, también se dará de baja la solución Web Cloud Databases asociada. Para conservar su solución Web Cloud Databases, deberá desvincularla **antes* de la baja del alojamiento.

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
3. En la página que se abre, en el recuadro **Configuración**, haga clic en el botón `...`{.action} a la derecha de la mención `Web Cloud Databases` y seleccione `Desvincular`{.action}.
4. Siga las instrucciones para contratar una solución Web Cloud Databases independiente con el fin de conservar su solución Web Cloud Databases ya creada.

**Esta acción es irreversible y la solución Web Cloud Databases se facturará independientemente de su alojamiento web Performance.**

///

/// details | ¿Cómo aumentar la RAM de una solución Web Cloud Databases asociada a un alojamiento web Performance?

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Web Cloud Databases`{.action} y seleccione la solución Web Cloud Databases correspondiente.
3. En la página que se abre, en el recuadro **Información general**, haga clic en el botón `...`{.action} a la derecha de la mención `RAM` y luego en `Cambiar la cantidad de RAM`{.action}.
4. Siga las instrucciones para contratar la cantidad de RAM deseada y continúe hasta la validación del pedido.

> [!success]
>
> Si lo necesita, consulte también la sección "*Modificar su servicio Web Cloud Databases*" de nuestra guía "[Configurar un servicio Web Cloud Databases](/pages/web_cloud/web_cloud_databases/configure-database-server)".

///

## Diagnóstico

> [!success]
>
> Si experimenta un fallo de funcionamiento no indicado en estas FAQ, consulte la sección "*Resolución de problemas*" de nuestras [guías sobre soluciones de alojamiento web](/products/web-cloud-hosting).

/// details | ¿Qué hago si mi sitio web no funciona?

Existen diversos motivos por los que un sitio web no funciona correctamente.<br>
Para identificar la causa, compruebe primero que no es necesario **renovar** ninguna de sus suscripciones.

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en su nombre en la esquina superior derecha y seleccione `Mis soluciones y servicios`{.action}.

> [!success]
>
> Para más información, consulte nuestra guía "[Cómo renovar mis servicios OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)".

A continuación, consulte los [eventos en curso en nuestra infraestructura](https://www.status-ovhcloud.com/).

Si todos sus servicios están activos y no se ven afectados por ningún incidente o mantenimiento, le recomendamos que realice un diagnóstico más detallado.

> [!success]
>
> Consulte la sección "*Resolución de problemas*" de nuestras [guías sobre las soluciones de alojamiento web](/products/web-cloud-hosting).

///

/// details | ¿Qué debo hacer si la página "Sitio en construcción" de OVHcloud sigue apareciendo una vez publicado el sitio web?

![site-en-construction](/pages/assets/screens/other/browsers/errors/site-en-construction.png){.thumbnail}

Al instalar su alojamiento web, OVHcloud crea esta página de espera en forma de archivo **index.html**, que se encuentra en la carpeta `www` del espacio de almacenamiento FTP de su alojamiento web.

Existen dos situaciones posibles:

- Si ha instalado un "[módulo en un clic](/pages/web_cloud/web_hosting/cms_install_1_click_modules)", este archivo será automáticamente eliminado por nuestros robots de instalación.
- Si ha instalado su sitio web manualmente, siga los pasos que se indican a continuación:
    - Conéctese al [espacio de almacenamiento FTP](/pages/web_cloud/web_hosting/ftp_connection) de su alojamiento web.
    - Una vez conectado al espacio de almacenamiento FTP, acceda al directorio `www`.
    - Cambie el nombre del archivo **index.html** a **index.html.old**. Esto desactivará la página en unos minutos.

> [!success]
>
> Para más información, consulte las siguientes guías:
>
> - [Conectarse al espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection).
> - [Cambiar la contraseña de un usuario FTP](/pages/web_cloud/web_hosting/ftp_change_password).
> - [Tutorial - Utilizar FileZilla con su alojamiento de OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).
> - [Tutorial - Utilizar Cyberduck con su alojamiento de OVHcloud](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac).

///

/// details | Una vez creado el sitio web, aparecerá una dirección del tipo "xxxxx.clusterXXX.hosting.ovh.net". ¿Qué debo hacer?

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Su sitio web se ha creado con un [módulo en un clic](/pages/web_cloud/web_hosting/cms_install_1_click_modules) utilizando, en el momento de su instalación, la dirección web por defecto de su alojamiento web "xxxxx.clusterXXX.hosting.ovh.net".

En ese caso, deberá eliminar el módulo en un clic y volver a instalarlo.

> [!warning]
>
> La eliminación de un [módulo en un clic](/pages/web_cloud/web_hosting/cms_install_1_click_modules), al igual que la de una base de datos, es definitiva. Esta operación también conlleva **la eliminación de las copias de seguridad** de los datos en cuestión. Antes de eliminar su sitio web en el alojamiento web, **asegúrese de poder volver a crearlo de la misma forma**. Si no está seguro de las operaciones que debe realizar, póngase en contacto con su Webmaster o con uno de nuestros [partners](/links/partner).
>
> Si lo necesita, consulte también estas guías detalladas:
>
> - [Restaurar el espacio de almacenamiento de un alojamiento web](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Exportar una copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export).

**Solo** después de haber realizado todas las copias de seguridad necesarias, elimine su [módulo en un clic](/pages/web_cloud/web_hosting/cms_install_1_click_modules) realizando las siguientes acciones:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
3. En la nueva página, haga clic en la pestaña `Módulos en un clic`{.action}.
4. En la tabla que aparece, haga clic en el botón `...`{.action} situado a la derecha en la línea del *módulo en 1 clic* correspondiente y seleccione `Eliminar el módulo`{.action}.

La eliminación del *module en 1 clic* puede tardar **varios minutos**.

A continuación, elimine la base de datos asociada realizando las siguientes acciones:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
3. En la nueva página, haga clic en la pestaña `Bases de datos`{.action}.
4. En la tabla que aparece, haga clic en el botón `...`{.action} situado a la derecha de la fila de la base de datos correspondiente y seleccione `Eliminar la base de datos`{.action}.

La eliminación de la base de datos asociada puede tardar **varios minutos**.

Una vez que hayan finalizado las eliminaciones, instale de nuevo el *módulo en un clic* y asegúrese de seleccionar el dominio deseado.

> [!success]
>
> Para más información, consulte nuestra guía "[Instalar su sitio web con un 'módulo en 1 clic' (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".

///

/// details | Tras una modificación, mi sitio web se muestra con una dirección web del tipo "xxxxx.clusterXXX.hosting.ovh.net". ¿Qué debo hacer?

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Su sitio web se muestra con la dirección web por defecto de su alojamiento web del tipo "xxxxx.clusterXXX.hosting.ovh.net" tras una modificación de su [módulo en un clic](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

Si el sitio web se abre con esta URL tras una manipulación, la solución más rápida será restaurarlo a un estado anterior en el que funcionaba correctamente.

> [!alert]
>
> La restauración de un alojamiento web conlleva la restauración de **el conjunto de sitios web** que contiene.
>
> Durante una restauración, el contenido de su espacio de almacenamiento FTP, o el de su base de datos, se sustituye de manera irreversible por una copia de seguridad. Los datos presentes **antes del inicio de la restauración** en el espacio de almacenamiento FTP o en la base de datos que vaya a restaurar se borrarán y perderán definitivamente. Si es necesario, asegúrese de recuperar una copia de seguridad de este contenido. Si no está seguro de las operaciones que debe realizar, póngase en contacto con su Webmaster o con uno de nuestros [partners](/links/partner).
>
> Si lo necesita, consulte también estas guías detalladas:
>
> - [Restaurar el espacio de almacenamiento de un alojamiento web](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Exportar una copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export).

Para restaurar el código fuente de su sitio web, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
3. Abra la pestaña `FTP - SSH`{.action}.
4. En la nueva página que aparece, haga clic en el botón `Restaurar una copia de seguridad`{.action}.
5. En la nueva ventana, seleccione la fecha de la copia de seguridad que desea restaurar y continúe hasta que comience la restauración.

La restauración del espacio de almacenamiento FTP puede tardar **varios minutos**.

Para restaurar una copia de seguridad de la base de datos, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
3. En la nueva página, haga clic en la pestaña `Bases de datos`{.action}.
4. En la tabla que aparece, haga clic en el botón `...`{.action} situado a la derecha de la fila de la base de datos correspondiente y seleccione `Restaurar una copia de seguridad`{.action}.
5. En la nueva página, seleccione la copia de seguridad que quiera restaurar (**preferentemente la que corresponde a la fecha elegida para la restauración del código fuente de su sitio web (ver más arriba)**).
6. Una vez seleccionada la copia de seguridad, haga clic en el botón `...`{.action} situado a la derecha de la copia de seguridad que quiera restaurar y seleccione `Restaurar la copia de seguridad`{.action}.

La restauración de la copia de seguridad de una base de datos puede tardar **varios minutos**.

> [!success]
>
> Para más información, consulte las siguientes guías:
>
> - [Restaurar el espacio de almacenamiento de un alojamiento web](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Importar una copia de seguridad en la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

///

/// details | Mi sitio web redirige a la interfaz de conexión al webmail de OVHcloud. ¿Qué debo hacer?

![webmail-login-interface](/pages/assets/screens/website/webmail/webmail-login-interface.png){.thumbnail}

Esta situación indica una configuración errónea en los [servidores DNS](/pages/web_cloud/domains/dns_server_edit) o en la [zona DNS](/pages/web_cloud/domains/dns_zone_edit) asociados al dominio.

El caso más común es el siguiente: ha contratado un dominio por separado de su alojamiento web, por lo que no se conectan automáticamente entre sí a través de la zona DNS del dominio.

Para corregirlo, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Dominios`{.action} y seleccione el dominio correspondiente.
3. En la nueva página, haga clic en la pestaña `Servidores DNS`{.action}.
4. Anote los nombres de los servidores DNS indicados y acceda a la pestaña `Zona DNS`{.action} (a la derecha de la pestaña `Servidores DNS`{.action}).
5. En la tabla que aparece (que representa la zona DNS del dominio), compare los `Destinos` de las entradas de tipo `NS` presentes en la zona DNS con los nombres de los servidores DNS recuperados anteriormente. Pueden darse tres situaciones. Haga clic en las fichas siguientes para ver cada uno de los **3** casos.

> [!tabs]
> **Caso n° 1**
>>
>> Los `Destinos` (servidores DNS) de las entradas de tipo `NS` declaradas en la zona DNS del nombre de dominio **son idénticas** a las recuperadas en la pestaña `Servidores DNS`{.action}.
>>
>> En este caso, su dominio (o su subdominio en *www*) apunta a la dirección IP de nuestro servidor de redirección (213.186.33.5).
>>
>> 1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>> 2. Haga clic en el menú `Dominios`{.action} (o en el menú `Zonas DNS`{.action} si utiliza la versión beta del área de cliente de OVHcloud) y seleccione el dominio correspondiente.
>> 3. A continuación, abra la pestaña `Zona DNS`{.action}.
>> 4. En la tabla que aparece (que representa la zona DNS de su dominio), identifique la entrada de tipo `A` cuya " Destino " tiene como valor la dirección IP `213.186.33.5`.
>> 5. Haga clic en el botón `...`{.action} situado a la derecha de la línea y seleccione `Modificar el registro`{.action}.
>> 6. En la nueva ventana, sustituya, en el campo `Destino *`, la dirección IP `213.186.33.5` por la dirección IP del alojamiento web en el que esté alojado su sitio web.
>>
>> > [!success]
>> >
>> > Si es necesario, consulte también las siguientes guías detalladas:
>> >
>> > - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
>> > - [Web hosting - Lista de direcciones IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
>>
> **Caso n°2**
>>
>> Los `Destinos` (servidores DNS) de las entradas de tipo `NS` declaradas en la zona DNS del nombre de dominio **no son idénticas** a las recuperadas en la pestaña `Servidores DNS`{.action}. Sin embargo, los `Destinos` (servidores DNS) tienen una de las siguientes formas:
>>
>> - `nsXX.ovh.net` y `dnsXX.ovh.net` **ou** `nsXXX.ovh.net` y `dnsXXX.ovh.net` (donde cada `X` designa un número comprendido entre **0** y **9**);
>> - `nsXX.ovh.ca` y `dnsXX.ovh.ca` **ou** `nsXXX.ovh.ca` y `dnsXXX.ovh.ca` (donde cada `X` designa un número comprendido entre **0** y **9**);
>> - `ns200.anycast.me` y `dns200.anycast.me` (si ha contratado la opción [DNS anycast](/links/web/domains-options)).
>>
>> > [!primary]
>> >
>> > Si alguno de sus servidores DNS declarados en la pestaña `Servidores DNS`{.action} tiene la forma siguiente: `sdnsX.ovh.net`, `sdnsX.ovh.ca`, `vpsXXXXXX.ovh.net` o `vpsXXXXXX.ovh.ca` (donde cada `X` designa un número comprendido entre **0** y **9**), consulte directamente el **Caso n°3**.
>> > Se trata de nombres de servidores DNS proporcionados por OVHcloud que solo permiten a nuestros clientes alojar su configuración DNS directamente en sus propios servidores (servidores dedicados, VPS, etc.).
>>
>> En este caso, el dominio no utiliza los servidores DNS adecuados de OVHcloud para aplicar la configuración de la zona DNS que se indica en la pestaña `Zona DNS`{.action}.
>>
>> Para corregirlo, siga estos pasos:
>>
>> 1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>> 2. Haga clic en el menú `Dominios`{.action} y seleccione el dominio correspondiente.
>> 3. A continuación, abra la pestaña `Servidores DNS`{.action} en la columna izquierda.
>> 4. En la nueva página, haga clic en el botón `Cambiar los servidores DNS`{.action}.
>> 5. A continuación, seleccione la opción `Utilizar los DNS por defecto de OVHcloud`{.action} y haga clic en el botón `Aplicar la configuración`{.action}.
>>
>> La propagación de la actualización de los servidores DNS aplicados a un dominio puede tardar hasta **48** horas.
>>
>> > [!success]
>> >
>> > Para más información, consulte nuestra guía "[Cambiar los servidores DNS de un dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>>
> **Caso 3**
>>
>> Los `Destinos` (servidores DNS) de las entradas de tipo `NS` declaradas en la zona DNS del nombre de dominio **no son idénticas** a las recuperadas en la pestaña `Servidores DNS`{.action}. Además, los nombres de los servidores DNS recuperados en la pestaña `Servidores DNS`{.action} no tienen ninguna de las formas descritas en el **Caso n°2**, a excepción de las siguientes formas: `sdnsX.ovh.net`, `sdnsX.ovh.ca`, `vpsXXXXXX.ovh.net` o `vpsXXXXXX.ovh.ca` (donde cada `X` designa un número comprendido entre **0** y **9**).
>>
>> En este caso, OVHcloud no gestiona directamente la zona DNS activa aplicada a su dominio. Póngase en contacto con su webmaster, su proveedor de dominios, su proveedor de DNS o uno de nuestros [partners](/links/partner).

///

/// details | ¿Qué hago si mi sitio web muestra un error "La página no se redirige correctamente"?

![the-page-isnt-redirecting-properly](/pages/assets/screens/other/browsers/errors/the-page-isnt-redirecting-properly.png){.thumbnail}

En ese caso, la solución más rápida será restaurarlo a un estado anterior en el que funcionaba correctamente.

> [!alert]
>
> La restauración de un alojamiento web conlleva la restauración de **el conjunto de sitios web** que contiene.
>
> Durante una restauración, el contenido de su espacio de almacenamiento FTP, o el de su base de datos, se sustituye de manera irreversible por una copia de seguridad. Los datos presentes **antes del inicio de la restauración** en el espacio de almacenamiento FTP o en la base de datos que vaya a restaurar se borrarán y perderán definitivamente. Por lo tanto, deberá realizar una copia de seguridad de este contenido. Si no está seguro de las operaciones que debe realizar, póngase en contacto con su Webmaster o con uno de nuestros [partners](/links/partner).
>
> Consulte también estas guías detalladas:
>
> - [Restaurar el espacio de almacenamiento de un alojamiento web](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Exportar una copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export).

Para restaurar el código fuente de su sitio web, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
3. Abra la pestaña `FTP - SSH`{.action}.
4. En la nueva página, haga clic en el botón `Restaurar una copia de seguridad`{.action}.
5. En la nueva ventana, seleccione la fecha de la copia de seguridad que desea restaurar y continúe hasta que comience la restauración.

La restauración del espacio de almacenamiento FTP puede tardar **varios minutos**.

Para restaurar una copia de seguridad de la base de datos, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
3. En la nueva página, haga clic en la pestaña `Bases de datos`{.action}.
4. En la tabla que aparece, haga clic en el botón `...`{.action} situado a la derecha de la fila de la base de datos correspondiente y seleccione `Restaurar una copia de seguridad`{.action}.
5. En la nueva página, seleccione la copia de seguridad que quiera restaurar (**preferentemente la que corresponde a la fecha elegida para la restauración del código fuente de su sitio web (ver más arriba)**).
6. Una vez seleccionada la copia de seguridad, haga clic en el botón `...`{.action} situado a la derecha de la copia de seguridad que quiera restaurar y seleccione `Restaurar la copia de seguridad`{.action}.

La restauración de la copia de seguridad de una base de datos puede tardar **varios minutos**.

> [!success]
>
> Para más información, consulte las siguientes guías:
>
> - [Restaurar el espacio de almacenamiento de un alojamiento web](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Importar una copia de seguridad en la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

Si las restauraciones no le permiten restablecer el acceso a su sitio web, póngase en contacto con su Webmaster o con uno de nuestros [partners](/links/partner).

///

/// details | ¿Qué hago si mi sitio web muestra un error "503 error Backend fetch failed (Varnish cache)"?

![503_varnish](/pages/assets/screens/other/browsers/errors/http-503-backend-varnish.png){.thumbnail}

Si ha activado la [opción CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) en su alojamiento web, desactive el modo *Maintenance* en su sitio WordPress o PrestaShop.

Si no ha activado esta opción ni ha utilizado el modo *Maintenance*, contacte con su Webmaster o con uno de nuestros [partners](/links/partner).

Este error también puede aparecer en caso de una petición HTTP que tenga como resultado un *timeout* en su sitio web.

> [!success]
>
> Si lo necesita, consulte también estas guías detalladas:
>
> - [Acelerar mi sitio web utilizando la CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).
> - [Resolver los errores más frecuentes relacionados con los módulos en un clic](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic).

///

/// details | ¿Qué hago si mi sitio web muestra un error "Your request has been blocked"?

![your-request-has-been-blocked](/pages/assets/screens/other/browsers/errors/your-request-has-been-blocked.png){.thumbnail}

La página "Your request has been blocked" puede aparecer por diversos motivos (lista no exhaustiva):

- La solicitud se realiza desde un navegador de internet (Firefox, Chrome, Safari, Edge, etc.) no actualizado.
- Un gran número de peticiones, similares o no, se realizan en un plazo extremadamente corto.
- La consulta intenta realizar acciones no autorizadas en la infraestructura compartida en la que se encuentra el alojamiento web.

En esta situación, es necesario realizar varias acciones:

- Compruebe que su navegador de Internet esté actualizado.
- Obtenga la dirección URL (por ejemplo: `https://www.domain.tld`) y toda la información de la página "Your request has been blocked" (`IP address`, `Date` y `Request ID`).
- Transmita los elementos recuperados al soporte creando un [tíquet de asistencia](https://help.ovhcloud.com/csm?id=csm_get_help).

Si no está seguro de las operaciones que debe realizar, póngase en contacto con su Webmaster o con uno de nuestros [partners](/links/partner).

> [!success]
>
> Consulte también nuestra guía detallada: [¿Qué hacer si aparece la página "Your request has been blocked"?](/pages/web_cloud/web_hosting/diagnostic_request_blocked).

///

/// details | ¿Qué hago si mi sitio web muestra un error "Your IP has been banned"?

![your-ip-has-been-banned](/pages/assets/screens/other/browsers/errors/your-ip-has-been-banned.png){.thumbnail}

La página "Your IP has been banned" puede aparecer por diversos motivos (lista no exhaustiva):

- Un gran número de peticiones, similares o no, se realizan en un plazo extremadamente corto desde la misma dirección IP.
- Las peticiones realizadas desde la dirección IP en cuestión son sospechosas.

En esta situación, es necesario realizar varias acciones:

- Obtenga la dirección URL (por ejemplo: `https://www.domain.tld`) y toda la información de la página "Your IP has been banned" (`IP address`, `Date` y `Request ID`).
- Transmita los elementos recuperados al soporte creando un [tíquet de asistencia](https://help.ovhcloud.com/csm?id=csm_get_help).

Si no está seguro de las operaciones que debe realizar, póngase en contacto con su Webmaster o con uno de nuestros [partners](/links/partner).

> [!success]
>
> Consulte también nuestra guía detallada: [¿Qué hacer si aparece la página "Your IP has been banned"?](/pages/web_cloud/web_hosting/diagnostic_ip_banned).

///

/// details | He contratado un dominio con acentos que aparece escrito de forma extraña en mi área de cliente. ¿Qué debo hacer?

![idn-notation](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/idn-notation.png){.thumbnail}

No tiene que hacer nada al respecto. Aunque su dominio se muestre en [notación internacionalizada (IDN)](https://es.wikipedia.org/wiki/Nombre_de_dominio_internacionalizado) en su área de cliente, funcionará y se mostrará de forma totalmente normal en otro lugar. La dirección web del sitio web se mostrará tal y como usted lo haya solicitado. Sus direcciones de correo también se mostrarán como desee con sus interlocutores.

> [!alert]
>
> No se recomienda utilizar una dirección de correo con un nombre de dominio internacionalizado (IDN) desde un cliente de correo (Outlook, Mail de macOS, etc.). Algunos clientes de correo no interpretan los nombres de dominio con caracteres acentuados, lo que bloquea la transmisión de los mensajes de correo. Un remitente que le envíe un mensaje de correo electrónico recibirá un mensaje automático indicando que su dirección de correo electrónico no existe.
>
> **Le recomendamos que, además de su dominio con caracteres acentuados, reserve el mismo dominio sin estos acentos para evitar incompatibilidades en el intercambio de correo electrónico.**
>

///

## Más información <a name="go-further"></a>

[FAQ - Correo en alojamiento compartido MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).