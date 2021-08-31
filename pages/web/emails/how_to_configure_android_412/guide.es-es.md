---
title: 'Correo: Guía de configuración en una tablet Android 4.1.2'
excerpt: Guía de configuración en una tablet Android 4.1.2
slug: correo_guia_de_configuracion_en_una_tablet_android_412
legacy_guide_number: g1283
section: Android
hidden: true
---


## Etapa 1: Correo
Para comenzar, pulse el icono «Correo».

En este ejemplo explicamos la configuración en POP de una cuenta de correo en alojamiento compartido en una Samsung Tab GT p7510 con Android 4.1.2. En otras versiones, el procedimiento descrito puede variar ligeramente.

Para añadir la cuenta, compruebe que su conexión 3G o wifi esté activa.

![](images/img_1161.jpg){.thumbnail}


## Etapa 2: Configurar la cuenta de correo
Si ya tiene una cuenta de correo configurada en el dispositivo, deberá acceder a los ajustes del correo y añadir una nueva cuenta.

Si aún no ha configurado ninguna cuenta de correo, introduzca directamente su dirección de correo electrónico completa y la contraseña que le haya asignado desde su [área de cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

A continuación pulse «Config. manual».

![](images/img_1162.jpg){.thumbnail}


## Etapa 3: Tipo de cuenta de correo
Seleccione «Cuenta POP3» para continuar con la configuración de la cuenta de correo.

Si quiere configurarla en IMAP, deberá introducir los valores que se indican al final de esta guía.

![](images/img_1163.jpg){.thumbnail}


## Etapa 4: Ajustes del servidor entrante
Introduzca aquí los datos de su cuenta de correo para el servidor entrante. 


- Nombre de usuario: La dirección de correo electrónico completa.
- Contraseña: La contraseña que haya indicado en su [área de cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Servidor POP3:SSL0.OVH.NET
- Tipo de seguridad: Seleccione SSL (aceptar todos los certificados).
- Puerto: Introduzca el puerto 995


Pulse «Siguiente» para continuar.

![](images/img_1164.jpg){.thumbnail}


## Etapa 5: Ajustes del servidor saliente
Introduzca aquí los datos de su cuenta de correo para el servidor saliente. 


- Servidor SMTP:SSL0.OVH.NET
- Tipo de seguridad: Seleccione SSL (aceptar todos los certificados).
- Puerto: Introduzca el puerto 465.
- Conexión necesaria: Debe estar marcado.
- Nombre de usuario: La dirección de correo electrónico completa.
- Contraseña: La contraseña que haya indicado en su [área de cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).


Pulse «Siguiente» para continuar.

![](images/img_1165.jpg){.thumbnail}

- Es imprescindible activar la conexión al servidor saliente para que el envío de correo funcione en nuestros servidores SMTP.

- Si no se activa la conexión, puede abrirse un tíquet de incidencia Open SMTP para informarle de que la autenticación «POP before SMTP» no es compatible. Es necesario activar la conexión al servidor saliente para poder enviar correo.




## Etapa 6: Opciones de cuenta
En esta pantalla, puede configurar determinadas opciones para la cuenta de correo en alojamiento compartido. 

Una vez haya establecido los valores que desee, pulse «Siguiente» para continuar.

![](images/img_1166.jpg){.thumbnail}


## Etapa 7: Finalizar
Ahora puede asignar un nombre a su cuenta de correo y elegir el nombre que se mostrará en los mensajes salientes.

Para finalizar la instalación de su cuenta de correo, pulse «Aceptar».

![](images/img_1167.jpg){.thumbnail}


## Interfaz de correo
Esta es la pantalla de gestión del correo.

Pulse el icono de la esquina superior derecha de la pantalla para acceder a los ajustes de la cuenta de correo.

![](images/img_1168.jpg){.thumbnail}


## Valores para la configuración IMAP
A continuación se indican los valores de configuración en IMAP para el servidor entrante:


- Nombre de usuario: La dirección de correo electrónico completa.
- Contraseña: La contraseña que haya indicado en su [área de cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Servidor IMAP: SSL0.OVH.NET
- Tipo de seguridad: Seleccione SSL (aceptar todos los certificados).
- Puerto: Introduzca el puerto 993.


Los valores de configuración en IMAP para el servidor saliente son los siguientes:


- Servidor SMTP: SSL0.OVH.NET
- Tipo de seguridad: Seleccione SSL (aceptar todos los certificados).
- Puerto: Introduzca el puerto 465.
- Conexión necesaria: Debe estar marcado.
- Nombre de usuario: La dirección de correo electrónico completa.
- Contraseña: La contraseña que haya indicado en su [área de cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).




## Configuración POP
Para configurar una cuenta de correo POP, necesitará la información que se indica a continuación.

Configuración POP con la protección SSL activada o desactivada:

Dirección de correo: Dirección de correo electrónico completa.
Contraseña: La contraseña introducida en el [manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) para la cuenta de correo.
Nombre de usuario: Dirección de correo electrónico completa.
Servidor entrante: El servidor de recepción del correo SSL0.OVH.NET.
Puerto del servidor entrante: 995 o 110.
Servidor saliente: El servidor de envío del correo SSL0.OVH.NET.
Puerto del servidor saliente: 465 o 587.

Los puertos 110 y 587 corresponden a la protección SSL desactivada.
Los puertos 995 y 465 corresponden a la protección SSL activada.

Es imprescindible activar la [conexión al servidor saliente SMTP](#configuracion_en_protocolo_pop_etapa_5_ajustes_del_servidor_saliente).

|Puerto|SSL activado|SSL desactivado|
|Entrante|995|110|
|Saliente|465|587|




## Configuración IMAP
Para configurar una cuenta de correo IMAP, necesitará la información que se indica a continuación.

Configuración IMAP con la protección SSL activada o desactivada:

Dirección de correo: Dirección de correo electrónico completa.
Contraseña: La contraseña introducida en el [manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) para la cuenta de correo.
Nombre de usuario: Dirección de correo electrónico completa.
Servidor entrante: El servidor de recepción del correo SSL0.OVH.NET.
Puerto del servidor entrante: 993 o 143.
Servidor saliente: El servidor de envío del correo SSL0.OVH.NET.
Puerto del servidor saliente: 465 o 587.

Los puertos 143 y 587 corresponden a la protección SSL desactivada.
Los puertos 993 y 465 corresponden a la protección SSL activada.

Es imprescindible activar la [conexión al servidor saliente SMTP](#configuracion_en_protocolo_imap_valores_para_la_configuracion_imap).

|Puerto|SSL activado|SSL desactivado|
|Entrante|993|143|
|Saliente|465|587|



