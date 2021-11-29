---
title: ¿Cómo proteger su sitio web?
excerpt: Esta guía explica cómo aumentar la seguridad de su sitio web
slug: secure-website 
section: Optimización del sitio web 
order: 1
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 24/11/2021**

## Objetivo

Esta guía explica cómo adquirir conocimientos básicos para garantizar la disponibilidad de sus servicios, proteger la integridad de sus datos y proteger el acceso a sus soluciones. Solo concierne a los sitios web alojados en las [soluciones compartidas de OVHcloud](https://www.ovhcloud.com/fr/web-hosting/).

Se organiza por etapas en un orden creciente de importancia y dificultad técnica, lo que significa que los primeros pasos son los más indispensables. La seguridad de su sitio web se medirá en el elemento que le concierna, que es el menos protegido. Le recomendamos que realice todas las acciones descritas. No obstante, si tiene dificultades para realizar algunas de las operaciones que se describen en la guía, no dude en contactar con la [comunidad de OVHcloud](https://community.ovh.com/) o con nuestros [partners](https://partner.ovhcloud.com/fr/).

**Esta guía explica cómo proteger un sitio web.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Le ofrecemos esta guía para ayudarle a completar mejor las tareas más comunes. Sin embargo, le recomendamos que, si necesita ayuda, contacte con un proveedor de servicios especializado o con el editor del programa o la interfaz. Nosotros no podremos asistirle. Más información en la sección "Uso avanzado" de esta guía.
>

## Requisitos

- nuestro plan de web hosting Profesional
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), en la sección Dedicado > Servidores dedicados.

## Procedimiento

### Paso 1 Compruebe la seguridad de sus dispositivos <a name="local"></a>

Este primer paso es fundamental. De hecho, la infección de su equipo informático por un programa malicioso puede dar acceso, a una persona malintencionada, al conjunto de las incautaciones efectuadas en su teclado. Por lo tanto, las claves que utilice para conectarse al área de cliente de OVHcloud o al panel de administración del sitio web pueden estar en peligro.

Por otro lado, el creciente fenómeno de los [transplantes](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/rancongiciels-ransomwares)) {.external} (aproximadamente 400 casos en Francia en 2020) puede no solo conducir al cifrado de todos sus datos personales, sino también poner en peligro su actividad, haciendo inaccesible todos sus datos, dispositivos y programas. 

Compruebe en primer lugar la seguridad de su equipo Windows, Mac o Linux:

- compruebe las actualizaciones de su máquina;
- Una vez que haya actualizado el software antivirus/anti-malware, lance una exploración completa de su equipo.
- cambie regularmente la contraseña de administrador de su puesto (para más información sobre la elección de las contraseñas, siga las instrucciones de esta [guía](../../customer/tout-savoir-sur-identifiant-client/)).

### Paso 2 Proteja su área de cliente de OVHcloud

Para proteger su cuenta de cliente, siga las indicaciones de esta [guía](../../customer/tout-savoir-sur-identifiant-client/).

Actualice la [información de su cuenta de cliente](../tout-savoir-sur-identifiant-client/#modifier-mes-informations-personnelles) y añada un **email de seguridad**.<br>
Si pierde sus claves de acceso o no está disponible la dirección de correo electrónico principal de su cuenta de cliente de OVHcloud, necesitaremos un correo electrónico alternativo o información personal actualizada para ayudarle a recuperar el acceso a sus soluciones.

### Paso 3 Realice regularmente copias de seguridad de su sitio web <a name="backup"></a>

> \[!primary]
>
> El backup regular de los datos, independientemente del servicio en cuestión, es el paso más importante en materia de seguridad informática. Siempre será posible reinstalar un programa o contratar un nuevo dispositivo, pero es muy difícil recuperar los datos una vez perdidos.
>
> OVHcloud realiza regularmente copias de seguridad de sus datos en su infraestructura. Sin embargo, un error de manipulación, como una operación de eliminación lanzada sobre una base de datos en producción o una no renovación de los servicios, puede conllevar la pérdida definitiva de los datos.
>

En primer lugar, haga una copia de seguridad de los datos que componen su proyecto (archivos FTP **Y** base de datos) siguiendo las instrucciones de esta [guía](../exporter-son-site-web/). Importe estos en su equipo o en un soporte externo, de tipo servidor NAS o llave USB.

Los programas de gestión de sitios web (CMS) ofrecen la posibilidad de instalar complementos de backup automático.<br>
Consulte los foros oficiales de su CMS preferido o contacte con la [comunidad de OVHcloud](https://community.ovh.com/) al respecto.

### Paso 4 Cómo reconocer el correo fraudulento

Los mensajes de phishing constituyen también una amenaza para la seguridad de su sitio web, ya que pueden contener o conducir a la instalación de programas maliciosos. Para saber cómo reconocerlas y protegerlas, consulte esta [guía](../customer/arnaques-fraude-phishing/).

### Paso 5 Aplicar la renovación automática

En caso de no renovar sus servicios, OVHcloud tiene la obligación legal, una vez haya expirado su suscripción, de eliminar íntegramente los datos asociados a su plan de hosting, así como todas sus copias de seguridad. Enviamos mensajes de recordatorio a nuestros clientes para recordarles sus fechas de renovación.<br>
No obstante, estos mensajes de correo electrónico pueden aparecer en su spam, o la dirección de correo electrónico asociada a su cuenta de OVHcloud puede ser errónea o no estar disponible.

Especialmente si no tiene la posibilidad de realizar copias de seguridad regulares y su sitio web tiene un lugar destacado en su actividad profesional, [active la renovación automática](../../billing/renouvellement-automatique-ovh/#acceder-au-parametrage-de-vos-services) en todos sus servicios de OVHcloud.<br>
Le recomendamos que compruebe regularmente la validez de las formas de pago que haya registrado.

### Paso 6 Compruebe que el sitio web esté actualizado

Compruebe regularmente las actualizaciones de su sitio web siguiendo las instrucciones de esta [guía](../site-ferme-pour-hack/#22-mettre-a-jour-votre-site-internet).

No olvide utilizar una versión reciente del [lenguaje PHP](../configurer-le-php-sur-son-hebergement-web-mutu-2014/) en su alojamiento.

### Paso 7 Active el https

Establezca la conexión encriptada a su sitio web a través del protocolo **HTTPS** siguiendo esta [guía](../passer-site-internet-https-ssl/).

### Paso 8 Proteja sus formularios

Los formularios de los sitios web son un objetivo principal de los piratas informáticos y los spammers. Proteja sus formularios de cualquier ataque introduciendo plugins de tipo **"CAPTCHA"**.

### Paso 9 Ponga en marcha un plugin de seguridad en su sitio web

Añada a su sitio web un plugin de seguridad recomendado por el editor del CMS:

- [Wordpress](https://wordpress.com/fr/){.external}
- [Joomla](https://www.joomla.fr/){.external}
- [Drupal](https://www.drupal.fr/){.external}
- [Prestashop](https://www.prestashop.com/fr){.external}

### Paso 1 Compruebe que su alojamiento no contenga archivos maliciosos

Para ello, debe conectarse al [espacio FTP](../connexion-espace-stockage-ftp-hebergement-web/). y requiere conocimientos técnicos para reconocer los posibles archivos maliciosos del alojamiento. Si necesita ayuda para realizar esta comprobación, no dude en ponerse en contacto con nuestros [partners](https://partner.ovhcloud.com/fr/).

Si tiene dudas sobre este asunto, no olvide realizar las comprobaciones que se describen en [el paso 1 de esta guía](#local) y [cambiar la contraseña](../modifier-mot-de-passe-utilisateur-ftp/) de su espacio FTP.

### Paso 1 Pruebe las copias de seguridad de su sitio web

Es necesario realizar regularmente [copias de seguridad de los datos](#backup) del sitio web (archivos FTP y base de datos).

Pero no son una seguridad absoluta. También es necesario probar las copias de seguridad de la base de datos para comprobar que no estén dañadas.

Puede realizar estas pruebas localmente, por ejemplo importando sus datos en un programa de tipo [WAMP](https://www.wampserver.com/) {.external}. Asegúrese de configurar su solución local para que su configuración se corresponda plenamente con la de nuestros [servidores de alojamiento compartido]().

También puede crear una **versión de prueba** del sitio web (p. ej.: test.mondominio.tld) en otra carpeta de su alojamiento (podrá utilizar una plantilla de base).

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](https://partner.ovhcloud.com/fr/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, consulte nuestros distintos [servicios de soporte](https://www.ovhcloud.com/fr/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/>ovh.es/community</https://community.ovh.com/>.
