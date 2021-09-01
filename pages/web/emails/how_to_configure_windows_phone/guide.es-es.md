---
title: 'Correo: Guía de configuración en Windows Phone'
excerpt: Esta guía explica cómo configurar una cuenta de correo en Windows Phone.
slug: correo_guia_de_configuracion_en_windows_phone
legacy_guide_number: g1346
section: Windows
hidden: true
---


## Etapa 1: Configuración
Para comenzar, pulse el icono «Configuración».

En este ejemplo explicamos la configuración de una cuenta de correo POP en un Nokia Lumia 625 con Windows Phone 8.0.

Para añadir la cuenta, asegúrese de tener activa una conexión 3G o wifi.

![](images/img_1501.jpg){.thumbnail}


## Etapa 2: Sistema
Para continuar añadiendo la cuenta de correo electrónico, pulse «correo y cuentas».

![](images/img_1502.jpg){.thumbnail}


## Etapa 3: Añadir una cuenta
Pulse «agregar una cuenta» para configurar su cuenta de correo OVH.

En esta etapa, aparecerán otras cuentas preconfiguradas.

![](images/img_1503.jpg){.thumbnail}


## Etapa 4: Tipo de cuenta
Pulse «otra cuenta» para añadir una cuenta de tipo POP o IMAP.

![](images/img_1504.jpg){.thumbnail}


## Etapa 5: Configurar la cuenta
En el primer campo, introduzca su dirección de correo electrónico completa.

A continuación, introduzca la contraseña que haya asignado en su [manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) a la cuenta de correo OVH.

Para continuar, pulse el botón «iniciar sesión». Aparecerá un mensaje de advertencia. Pulse «avanzadas».

![](images/img_1505.jpg){.thumbnail}


## Etapa 6: Configuración avanzada
Para acceder a la configuración avanzada de la cuenta de correo en POP o IMAP, seleccione «Correo de Internet».

![](images/img_1506.jpg){.thumbnail}


## Etapa 7: Configuración de la cuenta de correo
Introduzca los siguientes datos:

Nombre de cuenta: Nombre con el que la cuenta aparecerá en el teléfono.

Tu nombre: Nombre que aparecerá como remitente de los mensajes.

Servidor de correo entrante:SSL0.OVH.NET

Tipo de cuenta:POP3 (también puede configurarla en IMAP, en cuyo caso deberá utilizar la información que se indica al final de esta guía).

Nombre de usuario: Dirección de correo electrónico completa.

Contraseña: La contraseña elegida en el [manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) para la cuenta de correo OVH.

Servidor de correo saliente (SMTP):SSL0.OVH.NET

Marque las dos opciones «El servidor saliente requiere autenticación» y «Usar el mismo nombre de usuario y contraseña para enviar correo».

Para continuar, pulse «iniciar sesión».

![](images/img_2401.jpg){.thumbnail}

- Es imprescindible activar la autenticación del servidor saliente para que el envío de mensajes de correo electrónico pueda funcionar en nuestros servidores SMTP.

- Si no activa la autenticación, el sistema podría abrir automáticamente un tíquet de incidencia Open SMTP para notificarle que la autenticación «POP before SMTP» no es compatible. Para poder enviar correo electrónico deberá activar la autenticación del servidor saliente.




## Etapa 8: Finalizar
La cuenta de correo configurada aparecerá en la pantalla de su teléfono.

![](images/img_1508.jpg){.thumbnail}


## Acceder al correo
Ya puede acceder a su correo desde la página de inicio del teléfono móvil.

![](images/img_1509.jpg){.thumbnail}


## Configuración POP
A continuación recordamos los valores de configuración de una cuenta de correo POP.

Configuración POP con la protección SSL activada o desactivada:

Dirección de correo electrónico: Dirección de correo electrónico completa.
Contraseña: La contraseña elegida en el [manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
Nombre de usuario: Dirección de correo electrónico completa.
Servidor entrante:SSL0.OVH.NET
Puerto del servidor entrante:995 o 110
Servidor saliente:SSL0.OVH.NET
Puerto del servidor saliente:465 o 587

Los puertos 110 y 587 corresponden a la protección SSL desactivada.
Los puertos 995 y 465 corresponden a la protección SSL activada.

Es imprescindible activar la [autenticación](#configuration_du_compte_e-mail_mutualise_sous_windows_phone_8_partie_7_parametres_du_compte_e-mail) del servidor SMTP saliente.

|Puerto|SSL activado|SSL desactivado|
|Entrante|995|110|
|Saliente|465|587|




## Configuración IMAP
A continuación recordamos los valores de configuración de una cuenta de correo IMAP.

Configuración IMAP con la protección SSL activada o desactivada:

Dirección de correo electrónico: Dirección de correo electrónico completa.
Contraseña: La contraseña elegida en el [manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
Nombre de usuario: Dirección de correo electrónico completa
Servidor entrante:SSL0.OVH.NET
Puerto del servidor entrante:993 o 143
Servidor saliente:SSL0.OVH.NET
Puerto del servidor saliente:465 o 587

Los puertos 143 y 587 corresponden a la protección SSL desactivada.
Los puertos 993 y 465 corresponden a la protección SSL activada.

Es imprescindible activar la [autenticación](#configuration_du_compte_e-mail_mutualise_sous_windows_phone_8_partie_7_parametres_du_compte_e-mail) del servidor SMTP saliente.

|Puerto|SSL activado|SSL desactivado|
|Entrante|993|143|
|Saliente|465|587|



