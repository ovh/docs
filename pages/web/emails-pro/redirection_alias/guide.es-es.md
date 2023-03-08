---
title: 'Utilizar los alias y redirecciones de correo'
excerpt: 'Cómo gestionar los alias y redirecciones de correo'
slug: email-redirection-guide
section: 'Gestión de la cuenta de correo'
order: 1
routes:
  canonical: "https://docs.ovh.com/es/emails/correo_redirecciones_de_correo/"
updated: 2020-05-20
---

**Última actualización: 01/02/2023**

## Objetivo

En esta guía encontrará toda la información necesaria para configurar las redirecciones y los alias de correo electrónico, por ejemplo, para reenviar mensajes recibidos en una dirección A a una dirección B.

**Cómo gestionar los alias y redirecciones de correo.**

### ¿Qué es una redirección de correo?

Una redirección permite modificar el trayecto inicial de un email a otra o más direcciones de correo.

Por ejemplo, cuando envíe un mensaje de correo electrónico a la dirección **contact@mydomain.ovh**, este se reenviará también a **john.smith@otherdomain.ovh**. De este modo, podrá enviar automáticamente un mensaje de correo electrónico destinado a **contact@mydomain.ovh** a **john.smith@otherdomain.ovh**.

### ¿Qué es un alias de correo?

A diferencia de la redirección, la dirección de correo electrónico asociada al alias no es una dirección que se consulte, sino que se trata de una "máscara".

Crear un alias para su dirección de correo le permite comunicar una dirección "máscara" a sus contactos, sin tener que comunicar su dirección personal al remitente. Una dirección de correo electrónico puede tener varios alias.

Por ejemplo, su dirección de correo electrónico es **john.smith@mydomain.ovh** y su alias **information@mydomain.ovh**. A continuación, podrá comunicar a sus contactos la dirección **information@mydomain.ovh** y recibir sus emails en **john.smith@mydomain.ovh**, sin que el remitente tenga conocimiento de **john.smith@mydomain.ovh**.

### Redirección y alias en imágenes <a name="diagram"></a>

- **La redirección simple (esquema n°1 más abajo)** : el mensaje se envía directamente a la redirección, ya que el destinatario inicial no recibe el correo.

- **La redirección con copia local (esquema n°2 más abajo)** : el mensaje se transmite al destinatario inicial y a la dirección de redirección.

- **El alias e-mail (esquema n°3 más abajo)** : el mensaje de correo electrónico se dirige al alias que lo reenvía al destinatario en el que haya configurado el alias.

![correo electrónico](images/schema-redirect.png){.thumbnail}

> [!primary]
>
> Tenga en cuenta que es posible configurar una redirección hacia varias direcciones de correo electrónico.

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Disponer de una solución de correo electrónico de OVHcloud previamente configurada (**MX Plan**, incluida en nuestros [planes de hosting](https://www.ovhcloud.com/es-es/web-hosting/), incluida en un [alojamiento Start10M gratuito](https://www.ovhcloud.com/es-es/domains/free-web-hosting/) o contratada por separado como solución autónoma, como [Hosted Exchange](https://www.ovhcloud.com/es-es/emails/hosted-exchange/) o [Email Pro](https://www.ovhcloud.com/es-es/emails/email-pro/)).

## Procedimiento

Siga nuestra guía [Utilizar los alias y redirecciones de correo](https://docs.ovh.com/es/emails/correo_redirecciones_de_correo/) en la sección "Correo electrónico".
