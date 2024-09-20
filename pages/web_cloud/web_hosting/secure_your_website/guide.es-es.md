---
title: "¿Cómo proteger su sitio web?"
excerpt: "Descubra cómo aumentar la seguridad de su sitio web"
updated: 2024-01-29
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Esta guía explica cómo adquirir conocimientos básicos para garantizar la disponibilidad de sus servicios, proteger la integridad de sus datos y proteger el acceso a sus soluciones. Solo concierne a los sitios web alojados en las [soluciones compartidas de OVHcloud](/links/web/hosting).

Se organiza por etapas en un orden creciente de importancia y dificultad técnica, lo que significa que los primeros pasos son los más indispensables. La seguridad de su sitio web se medirá en el elemento que le concierna, que es el menos protegido. Le recomendamos que realice todas las acciones descritas. No obstante, si tiene dificultades para realizar algunas de las operaciones que se describen en la guía, no dude en contactar con la [comunidad de OVHcloud](/links/community) o con nuestros [partners](/links/partner).

**Esta guía explica cómo proteger un sitio web.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Le ofrecemos esta guía para ayudarle a completar mejor las tareas más comunes. Sin embargo, le recomendamos que, si necesita ayuda, contacte con un proveedor de servicios especializado o con el editor del programa o la interfaz. Nosotros no podremos asistirle. Para más información, consulte la sección [Más información](#go-further) de esta guía.
>

## Requisitos

- un [plan OVHcloud Web Hosting](/links/web/hosting)
- tener los detalles de [inicio de sesión](/pages/web_cloud/web_hosting/ftp_connection#1-obtener-los-datos-de-conexion) para acceder al espacio de almacenamiento de su plan de alojamiento
- acceso al [panel de control de OVHcloud](/links/manager)
- acceso a la [interfaz de administración de su sitio web](https://codex.wordpress.org/es:First_Steps_With_WordPress){.external}

## Procedimiento

### Etapa 1 - Comprobar la seguridad de los dispositivos <a name="local"></a>

Este primer paso es fundamental. De hecho, la infección de su equipo informático por un programa malicioso puede dar acceso, a una persona malintencionada, al conjunto de las incautaciones efectuadas en su teclado. Por lo tanto, las claves que utilice para conectarse al área de cliente de OVHcloud o al panel de administración del sitio web pueden estar en peligro.

Por otro lado, el creciente fenómeno de los [ransomware](https://www.osi.es/es/actualidad/avisos/2017/06/nueva-oleada-de-ransomware-afectando-multiples-equipos){.external} (aproximadamente 400 casos en Francia en 2020) puede no solo conducir al cifrado de todos sus datos personales, sino también poner en peligro su actividad, haciendo inaccesible todos sus datos, dispositivos y programas.

Compruebe en primer lugar la seguridad de su equipo Windows, Mac o Linux:

- compruebe las actualizaciones de su máquina;
- una vez que haya actualizado el software antivirus/anti-malware, lance una exploración completa de su equipo;
- cambie regularmente la contraseña de administrador de su puesto (para más información sobre la elección de las contraseñas, siga las instrucciones de esta [guía](/pages/account_and_service_management/account_information/all_about_username#crear-una-contrasena-solida-y-unica).

### Etapa 2 - Proteger el área de cliente de OVHcloud

Para proteger su cuenta de cliente, [active la doble autenticación](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) y siga las instrucciones de este [guía](/pages/account_and_service_management/account_information/all_about_username).

Actualice la [información de su cuenta de cliente](/pages/account_and_service_management/account_information/all_about_username#editar-mis-datos-personales) y añada un **email de seguridad**.<br>
Si pierde sus claves de acceso o no está disponible la dirección de correo electrónico principal de su cuenta de cliente de OVHcloud, necesitaremos un correo electrónico alternativo o información personal actualizada para ayudarle a recuperar el acceso a sus soluciones.

### Etapa 3 - Realizar regularmente copias de seguridad de su sitio web <a name="backup"></a>

> [!primary]
>
> El backup regular de los datos, independientemente del servicio en cuestión, es el etapa más importante en materia de seguridad informática. Siempre será posible reinstalar un programa o contratar un nuevo dispositivo, pero es muy difícil recuperar los datos una vez perdidos.
>
> OVHcloud realiza regularmente copias de seguridad de sus datos en su infraestructura. Sin embargo, un error de manipulación, como una operación de eliminación lanzada sobre una base de datos en producción o una no renovación de los servicios, puede conllevar la pérdida definitiva de los datos.
>

En primer lugar, haga una copia de seguridad de los datos que componen su sitio web conectándose a su [espacio FTP](/pages/web_cloud/web_hosting/ftp_connection) y a su [servidor de bases de datos](/pages/web_cloud/web_hosting/sql_database_export). Importe estos en su equipo o en un soporte externo, de tipo servidor NAS o llave USB.

Los programas de gestión de sitios web (CMS) ofrecen la posibilidad de instalar complementos de backup automático.<br>
Consulte los foros oficiales de su CMS preferido o contacte con la [comunidad de OVHcloud](/links/community) al respecto.

### Etapa 4 - Aprender a reconocer los mensajes fraudulentos

Los mensajes de phishing constituyen también una amenaza para la seguridad de su sitio web, ya que pueden contener o conducir a la instalación de programas maliciosos. Para saber cómo reconocerlas y protegerlas, consulte esta [guía](/pages/account_and_service_management/account_information/phishing_care).

### Etapa 5 - Activar la renovación automática

En caso de no renovar sus servicios, OVHcloud tiene la obligación legal, una vez haya expirado su suscripción, de eliminar íntegramente los datos asociados a su plan de hosting, así como todas sus copias de seguridad. Enviamos mensajes de recordatorio a nuestros clientes para recordarles sus fechas de renovación.<br>
No obstante, estos mensajes de correo electrónico pueden aparecer en su spam, o la dirección de correo electrónico asociada a su cuenta de OVHcloud puede ser errónea o no estar disponible.

Si su sitio web tiene un lugar preponderante en su actividad profesional, [active la renovación automática](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#acceder-a-la-configuracion-de-los-servicios) en el conjunto de sus servicios OVHcloud.<br>
También le recomendamos que compruebe regularmente la **validez de las formas de pago** que haya registrado.

### Etapa 6 - Compruebe que su sitio web está actualizado

Compruebe regularmente las actualizaciones de su sitio web siguiendo las instrucciones de esta [guía](/pages/web_cloud/web_hosting/diagnostic_403_forbidden#22-actualizar-el-sitio-web).

No olvide utilizar una versión reciente del [lenguaje PHP](/pages/web_cloud/web_hosting/configure_your_web_hosting) en su alojamiento.

### Etapa 7 - Activar el HTTPS

Establezca la conexión encriptada a su sitio web a través del protocolo **HTTPS** siguiendo este [guía](/pages/web_cloud/web_hosting/ssl-activate-https-website). La activación de este protocolo permitirá cifrar toda la información que transita por su sitio web (especialmente las entradas efectuadas por los usuarios en sus formularios).

### Etapa 8 - Proteja sus formularios

Los formularios de los sitios web son un objetivo principal de los piratas informáticos y los spammers. Proteja sus formularios de cualquier ataque introduciendo plugins de tipo **"CAPTCHA"**.

### Etapa 9 - Implementar un plugin de seguridad en su sitio web

Añada a su sitio web un plugin de seguridad recomendado por el editor del CMS:

- [WordPress](https://es.wordpress.org/){.external}
- [Joomla](https://downloads.joomla.org/es/){.external}
- [Drupal](https://www.drupal.org/drupal-7.0/es){.external}
- [PrestaShop](https://www.prestashop.com/es){.external}

### Etapa 10 - Compruebe si hay archivos maliciosos en su alojamiento web

Para ello, debe conectarse al [espacio FTP](/pages/web_cloud/web_hosting/ftp_connection). y requiere conocimientos técnicos para reconocer los posibles archivos maliciosos del alojamiento. Si necesita ayuda para realizar esta comprobación, no dude en ponerse en contacto con nuestros [partners](/links/partner).

Si tiene dudas sobre este asunto, no olvide realizar las comprobaciones que se describen en [el etapa 1 de esta guía](#local) y [cambiar la contraseña](/pages/web_cloud/web_hosting/ftp_change_password) de su espacio FTP.

### Etapa 11 - Probar las copias de seguridad de su sitio web

Es necesario realizar regularmente [copias de seguridad de los datos](#backup) del sitio web (archivos FTP y base de datos).

Pero no son una seguridad absoluta. También es necesario probar las copias de seguridad de la base de datos para comprobar que no estén dañadas.

Puede realizar estas pruebas localmente, por ejemplo importando sus datos en un programa de tipo [WAMP](https://www.wampserver.com/){.external}. Asegúrese de configurar su solución local para que su configuración se corresponda plenamente con la de nuestros [servidores de alojamiento compartido](https://webhosting-infos.hosting.ovh.net/).

También puede crear una **versión de prueba** del sitio web (p. ej.: test.mondominio.tld) en otra carpeta de su alojamiento (podrá utilizar una plantilla de base).

### Etapa 12 - Proteger el acceso a su sitio web con el archivo ".htaccess"

El archivo ".htaccess" es un archivo de configuración (HTTP) Apache que ejecuta el servidor web de su alojamiento web. Gracias a él, puede sobre todo:

- [bloquear el acceso a su sitio web para determinadas direcciones IP](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website);
- [proteger un directorio o la interfaz de administración de su sitio web asociándolo con un archivo ".htpasswd"](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password);
- [proteger su CMS WordPress](/pages/web_cloud/web_hosting/htaccess_how_to_protect_wordpress).

## Más información <a name="go-further"></a>

[Consejos sobre la piratería de su sitio WordPress](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

[Reaccionar en caso de desactivación por seguridad de un alojamiento](/pages/web_cloud/web_hosting/diagnostic_403_forbidden)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Interactúe con nuestra [comunidad de usuarios](/links/community).