---
title: FAQ
excerpt: 'Encuentre las respuestas a las preguntas más frecuentes sobre alojamiento web'
slug: faq-web-hosting
section: 'Primeros pasos'
---

**Última actualización: 14/05/2020**

## FAQ

### ¿Qué hacer si mi sitio web no funciona bien? 

Existen varios motivos por los que un sitio web puede funcionar de forma incorrecta. Para identificar la causa del fallo, compruebe en primer lugar que ha renovado todos sus servicios y que estos están activos, desde su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. A continuación, consulte las tareas en progreso desde la página [Status](http://travaux.ovh.net/){.external} de OVHcloud. Si todos los servicios están activos y no hay tareas que afecten a su sitio, deberá realizar un diagnóstico más profundo desde la sección «Diagnóstico» de [esta página](../). 

**Ideas y consejos**: Si su sitio deja de estar disponible tras una acción realizada por usted, puede restaurar el contenido directamente desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Para ello, acceda la pestaña `FTP - SSH` de su alojamiento y haga clic en el botón `Restaurar una copia de seguridad`{.action}, situado en la parte derecha. Para más información, consulte la siguiente documentación: [Restaurar el espacio de almacenamiento de un alojamiento web](../restaurar-espacio-almacenamiento-alojamiento-web).

### ¿Cómo configurar mi alojamiento? 

Para configurar su alojamiento, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Desde la sección `Alojamientos` podrá gestionar sus certificados SSL, versiones PHP, CDN, multisitios, bases de datos, etc. 

**Ideas y consejos**: Para ayudarle a configurar su alojamiento, le invitamos a consultar la sección «Primeros pasos» de [esta página](../).

### ¿Cómo crear o eliminar un elemento en mi producto o servicio (cuenta de correo electrónico, bases de datos, etc.)?

Para crear o eliminar un elemento, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} y seleccione el producto correspondiente (Correo electrónico, Bases de datos, etc.). De este modo, podrá configurar su alojamiento para adaptarlo a sus necesidades. 

**Ideas y consejos**: Puede realizar copias de seguridad diarias de sus bases de datos directamente desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

### ¿Cómo administrar mis contraseñas? 

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} para gestionar sus contraseñas. Si ha olvidado su ID de cliente o contraseña, haga clic en «¿No recuerda su ID de cliente o contraseña?» en la página de conexión. Recibirá la información necesaria por correo electrónico. Para más información, consulte la siguiente documentación: [Establecer y gestionar la contraseña de su cuenta](https://docs.ovh.com/es/customer/gestionar-su-contrase%C3%B1a/).

Una vez conectado al área de cliente, podrá gestionar los accesos a su servidor FTP y a las bases de datos. Para ello, acceda a la sección `Alojamientos` y seleccione el servicio correspondiente. Podrá acceder a sus mensajes de correo electrónico desde la sección `Correo electrónico` del área de cliente. 

**Ideas y consejos**: Si posee una solución Email Pro o Exchange, podrá gestionar sus accesos desde los respectivos webmails.

### ¿Cómo publicar mi sitio web? 

Para publicar su sitio web en OVHcloud, debe disponer de un nombre de dominio, que corresponderá a la dirección desde la que el sitio web estará accesible (ejemplo: «ovh.com»). Asimismo, debe disponer de un alojamiento web en el que publicar su sitio web. Puede consultar la siguiente documentación: [Publicar un sitio web en internet](../web_hosting_publicar_un_sitio_web_en_internet).

**Ideas y consejos**: Para ayudarle a crear su sitio web, OVHcloud pone a su disposición módulos en un clic como WordPress, PrestaShop, Joomla o Drupal. Acceda a ellos [aquí](https://www.ovh.com/world/es/hosting/website/). También puede consultar la siguiente documentación: [Instalar un sitio web con un módulo en un clic](../modulos-en-un-clic).

### ¿Cómo migrar mi sitio web y mis mensajes de correo electrónico a OVHcloud? 

Para migrar su sitio web y su correo a OVHcloud, debe tener un [plan de alojamiento web](https://www.ovh.com/world/es/hosting/){.external} y una [solución de correo](https://www.ovh.com/world/es/emails/){.external} contratados con OVHcloud. Para transferir los archivos de su sitio web, deberá conectarse al servidor FTP de su alojamiento. Si actualmente dispone de una base de datos, le recomendamos que realice una copia de seguridad. 

Para migrar el correo, deberá volver crear sus cuentas en OVHcloud y utilizar la herramienta de migración [OMM (OVHcloud Mail Migrator)](https://omm.ovh.net/) que encontrará [aquí](https://omm.ovh.net/). 

Una vez realizadas estas operaciones, podrá modificar la zona DNS de su dominio para que, en un plazo de 1 a 24 horas, apunte hacia nuestra infraestructura. Para más información, consulte la siguiente guía: [Migrar un sitio web y el correo a OVHcloud](../web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio). 

**Ideas y consejos**: Para transferir sus archivos, puede utilizar programas como Filezilla o Cyberduck. Para más información, consulte la siguiente documentación: [Web hosting: guía de uso de FileZilla](../web_hosting_guia_de_uso_de_filezilla).

### ¿Cómo alojar varios sitios web en un mismo plan de hosting?

Para los usuarios expertos, es posible alojar varios sitios web en un mismo alojamiento compartido. Para ello, deberá asociar un nombre de dominio diferente o asociar un subdominio a este alojamiento. Para más información sobre cómo asociar o desvincular un dominio, consulte la siguiente guía: [Alojar varios sitios web en un mismo hosting](../configurar-un-multisitio-en-un-alojamiento-web).

### Ya he publicado mi sitio web, pero sigue viéndose la página de «sitio en construcción» de OVHcloud, ¿qué puedo hacer?

Durante la instalación de su alojamiento, OVHcloud muestra una página por defecto para que pueda cargar los archivos de su sitio web. Si carga estos archivos a la carpeta «www», recuerde eliminar el contenido creado por OVHcloud para evitar posibles fallos. 

Para ello, elimine o renombre el archivo «index.html» creado por OVHcloud en su alojamiento. Para poder reactivar este contenido en cualquier momento y utilizarlo como página por defecto, puede asignarle otro nombre al archivo. 

**Importante**: Los archivos del sitio web deben subirse a la carpeta «www».

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
