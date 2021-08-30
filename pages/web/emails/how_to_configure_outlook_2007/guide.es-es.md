---
title: 'Correo: Guía de configuración en Outlook 2007'
excerpt: ''
slug: correo_guia_de_configuracion_en_outlook_2007
legacy_guide_number: g1298
section: Outlook
hidden: true
---


## Etapa 1: Inicio
Abra Outlook 2007.

Haga clic en el menú «Herramientas» y seleccione «Configuración de la cuenta».

En el cuadro de diálogo, haga clic en «Nuevo...» para guardar un nuevo buzón de correo.

![](images/img_1238.jpg){.thumbnail}


## Etapa 2: Agregar una nueva cuenta
Marque la casilla «Configurar manualmente las opciones del servidor o tipos de servidores adicionales», situada en la esquina inferior izquierda.

Haga clic en «Siguiente».

![](images/img_1239.jpg){.thumbnail}


## Etapa 3: Elegir servicio
Seleccione «Correo electrónico de internet» y haga clic en «Siguiente».

![](images/img_1240.jpg){.thumbnail}


## Etapa 4: Configuración de correo electrónico
En esta ventana, introduzca los siguientes datos:

Su nombre: El nombre que quiere que se muestre.
Dirección de correo electrónico: Dirección de correo electrónico completa.
Tipo de cuenta: POP3
Servidor de correo entrante: SSL0.OVH.NET
Servidor de correo saliente (SMTP): SSL0.OVH.NET
Nombre de usuario: Dirección de correo electrónico completa (p. ej.: test@ovh.net).
Contraseña: La contraseña de esa cuenta de correo.

A continuación, haga clic en «Más configuraciones...» para continuar.

![](images/img_1241.jpg){.thumbnail}


## Etapa 5: Servidor de salida
En la pestaña «Servidor de salida», marque la casilla «Mi servidor de salida (SMTP) requiere autenticación» y seleccione la opción «Iniciar sesión utilizando».

Introduzca:
Nombre de usuario: Dirección de correo electrónico completa (p. ej.: test@ovh.net).
Contraseña: La contraseña de esa cuenta de correo.

Es imprescindible marcar la casilla de autenticación para conectarse al servidor de salida y, en opciones avanzadas, utilizar el puerto 587 en SMTP. Ese es el puerto autentificado para todos los proveedores de acceso a internet.

![](images/img_1242.jpg){.thumbnail}

- La autenticación del servidor de salida es imprescindible para que el envío de correo funcione en nuestros servidores SMTP.

- Si no se activa la autenticación del servidor de salida, puede abrirse un tíquet de incidencia Open SMTP para informarle de que la autenticación «POP before SMTP» no es compatible. Es necesario activar la autenticación del servidor de salida para poder enviar correo.




## Etapa 6: Opciones avanzadas
En la pestaña «Avanzadas», introduzca los valores:

Servidor de entrada (POP3): 110

La casilla «Este servidor precisa una conexión cifrada (SSL)» no debe estar marcada.

Servidor de salida (SMTP): 587

En «Usar el siguiente tipo de conexión cifrada», seleccionar «Ninguno».

En esta pantalla también podrá indicar si quiere que el correo se elimine del servidor de correo.

![](images/img_1243.jpg){.thumbnail}


## Etapa 7: Finalizar
La cuenta ya estará correctamente configurada.

![](images/img_1244.jpg){.thumbnail}


## Configuración POP
A continuación recordamos los valores de configuración de una cuenta de correo POP.

Configuración POP con la protección SSL activada o desactivada:

Dirección de correo electrónico: La dirección de correo electrónico completa.
Contraseña: La contraseña introducida en el [área de cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) para la cuenta de correo.
Nombre de usuario: La dirección de correo electrónico completa.
Servidor de correo entrante: SSL0.OVH.NET
Puerto del servidor de correo entrante: 995 o 110
Servidor de correo saliente (SMTP): SSL0.OVH.NET
Puerto del servidor de correo saliente:465 o 587

Los puertos 110 y 587 corresponden a la protección SSL desactivada.
Los puertos 995 y 465 corresponden a la protección SSL activada.

Es imprescindible activar la [autenticación del servidor de salida SMTP](#configuracion_manual_etapa_5_servidor_de_salida).

|Puerto|SSL activado|SSL desactivado|
|Entrante|995|110|
|Saliente|465|587|




## Configuración IMAP
Los valores para la configuración de una cuenta de correo IMAP son los siguientes.

Configuración IMAP con la protección SSL activada o desactivada:

Dirección de correo electrónico: La dirección de correo electrónico completa.
Contraseña: La contraseña introducida en el [área de cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) para la cuenta de correo
Nombre de usuario: La dirección de correo electrónico completa
Servidor de correo entrante: SSL0.OVH.NET
Puerto del servidor de correo entrante: 993 o 143
Servidor de correo saliente (SMTP): SSL0.OVH.NET
Puerto del servidor de correo saliente: 465 o 587

Los puertos 143 y 587 corresponden a la protección SSL desactivada.
Los puertos 993 y 465 corresponden a la protección SSL activada.

Es imprescindible activar la [autenticación del servidor de salida SMTP](#configuracion_manual_etapa_5_servidor_de_salida).

|Puerto|SSL activado|SSL desactivado|
|Entrante|993|143|
|Saliente|465|587|
