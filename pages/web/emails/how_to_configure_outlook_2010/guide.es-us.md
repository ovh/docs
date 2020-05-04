---
title: 'Correo: Guía de configuración en Outlook 2010'
excerpt: ''
slug: correo_guia_de_configuracion_en_outlook_2010
legacy_guide_number: g1299
section: Outlook
---


## Añadir una cuenta, etapa 1
Para añadir una cuenta a Outlook 2010, acceda a «Archivo» > «Información» > «Configuración de la cuenta» y seleccione «Configuración de la cuenta...».

![](images/img_1245.jpg){.thumbnail}


## Añadir una cuenta, etapa 2
En la pestaña «Correo electrónico», haga clic en «Nuevo...».

Podrá elegir entre configuración [manual](#MANU) o [automática](#AUTO).

![](images/img_1246.jpg){.thumbnail}


## Etapa 1: Tipo de configuración
Marque la casilla «Configurar manualmente las opciones del servidor o tipos de servidores adicionales» y haga clic en «Siguiente».

![](images/img_1247.jpg){.thumbnail}


## Etapa 2: Selección del servicio
Marque «Correo electrónico de internet» y haga clic en «Siguiente».

![](images/img_1248.jpg){.thumbnail}


## Etapa 3: Configuración de correo electrónico
En esta página, introduzca los siguientes datos:

Su nombre: Introduzca el nombre tal como quiere que lo vean los destinatarios.
Dirección de correo electrónico: Dirección de correo electrónico completa.
Tipo de cuenta: POP3 (para IMAP, ver el apartado [«Recordatorio de la configuración POP e IMAP»](#recordatorio_de_la_configuracion_pop_e_imap)).
Servidor de correo entrante: SSL0.OVH.NET
Servidor de correo saliente (SMTP): SSL0.OVH.NET
Nombre de usuario: Dirección de correo electrónico completa.
Contraseña: Utilice la contraseña de la cuenta de correo.

![](images/img_1249.jpg){.thumbnail}


## Etapa 4: General
Haga clic en «Más configuraciones...».

Si lo desea, puede introducir una referencia para la cuenta. Por defecto, aparecerá la dirección de correo electrónico. En nuestro caso, la hemos cambiado por «Support OVH».

Esta será la referencia que aparezca en la gestión de cuentas de Outlook.

A continuación, seleccione la pestaña «Servidor de salida».

![](images/img_1250.jpg){.thumbnail}


## Etapa 5: Servidor de salida y opciones avanzadas
En la pestaña «Servidor de salida», marque la casilla «Mi servidor de salida (SMTP) requiere autenticación» y seleccione la opción «Utilizar la misma configuración que mi servidor de correo de entrada».

Es imprescindible marcar la casilla de autenticación para conectarse al servidor de salida y, en opciones avanzadas, utilizar el puerto 587 en SMTP. Ese es el puerto autentificado para todos los proveedores de acceso a internet.

- La autenticación del servidor de salida es imprescindible para que el envío de correo funcione en nuestros servidores SMTP.

- Si no se activa la autenticación del servidor de salida, puede abrirse un tíquet de incidencia Open SMTP para informarle de que la autenticación «POP before SMTP» no es compatible. Es necesario activar la autenticación del servidor de salida para poder enviar correo.


En la pestaña «Avanzadas», introduzca los siguientes valores:

Servidor de entrada (POP3): 110
La casilla «Este servidor precisa una conexión cifrada (SSL)» no debe estar marcada.
Servidor de salida (SMTP): 587
En «Usar el siguiente tipo de conexión cifrada», seleccionar «Ninguno».

En esta pantalla también podrá indicar si quiere que el correo se elimine del servidor de correo, así como el tiempo que debe permanecer en el servidor antes de ser eliminado.

Haga clic en «Aceptar» para continuar.

![](images/img_1251.jpg){.thumbnail}


## Etapa 6: Probar la configuración
Es posible probar la configuración haciendo clic en «Probar configuración de la cuenta...».

![](images/img_1267.jpg){.thumbnail}


## Etapa 7: Finalizar la configuración
Después de asegurarse de que la configuración es correcta, haga clic en «Siguiente». 

Antes de finalizar, se volverá a probar la configuración de la cuenta. Cuando termine la operación, haga clic en «Cerrar».

![](images/img_1266.jpg){.thumbnail}


## Etapa 8: ¡Felicidades!
La cuenta de Outlook 2010 estará correctamente configurada. Haga clic en «Finalizar».

![](images/img_1254.jpg){.thumbnail}


## 1. Introducir la información
Su nombre: Introduzca el nombre que quiere que vean los destinatarios.
Dirección de correo electrónico: Dirección de correo electrónico completa.
Contraseña: La contraseña de la cuenta de correo, y confírmela en la línea inferior «Repita la contraseña».

Haga clic en «Siguiente».

![](images/img_1264.jpg){.thumbnail}


## 2. Autorización
Outlook buscará los elementos del dominio que necesita para finalizar la configuración automática. Si todo va bien, aparecerá el cuadro de diálogo de la imagen.

Si quiere añadir varias direcciones de correo electrónico al mismo dominio, marque la casilla «No volver a preguntarme sobre este sitio web» y haga clic en «Autorizar». Así no se abrirá este cuadro de diálogo cada vez que añada una cuenta de correo.

Si no aparece el cuadro de diálogo de la imagen, compruebe que la contraseña es correcta utilizando el [webmail](http://webmail.ovh.net). Si confirma que la contraseña es correcta, compruebe que su zona DNS contenga las siguientes líneas:


```
_submission._tcp.sudominio SRV 0 0 465 SSL0.OVH.NET
_imaps._tcp.sudominio SRV 0 0 993 SSL0.OVH.NET
_autodiscover._tcp.sudominio SRV 0 0 443 mailconfig.ovh.net.
```


Para ello, conéctese a su [área de cliente](https://www.ovh.com/manager/web) y asegúrese de tener seleccionado el «Modo experto» en la esquina superior derecha. Seleccione el dominio en la columna izquierda y haga clic en la pestaña «Zona DNS».

![](images/img_1265.jpg){.thumbnail}


## 3. Configuración finalizada
La aplicación Outlook ha terminado la configuración. Haga clic en «Finalizar».

![](images/img_1263.jpg){.thumbnail}


## Configuración POP
A continuación recordamos los valores de configuración de una cuenta de correo POP.

Configuración POP con la protección SSL activada o desactivada:

Dirección de correo electrónico: La dirección de correo electrónico completa.
Contraseña: La contraseña introducida en el [área de cliente](https://www.ovh.es/managerv3/) para la cuenta de correo.
Nombre de usuario: La dirección de correo electrónico completa.
Servidor de correo entrante: SSL0.OVH.NET
Puerto del servidor de correo entrante: 995 o 110
Servidor de correo saliente (SMTP): SSL0.OVH.NET
Puerto del servidor de correo saliente: 465 o 587

Los puertos 110 y 587 corresponden a la protección SSL desactivada.
Los puertos 995 y 465 corresponden a la protección SSL activada.

Es imprescindible activar la [autenticación del servidor de salida SMTP](#configuracion_manual_etapa_5_servidor_de_salida_y_opciones_avanzadas).

|Puerto|SSL activado|SSL desactivado|
|Entrante|995|110|
|Saliente|465|587|




## Configuración IMAP
Los valores para la configuración de una cuenta de correo IMAP son los siguientes.

Configuración IMAP con la protección SSL activada o desactivada:

Dirección de correo electrónico: La dirección de correo electrónico completa.
Contraseña: La contraseña introducida en el [área de cliente](https://www.ovh.es/managerv3/) para la cuenta de correo.
Nombre de usuario: La dirección de correo electrónico completa.
Servidor de correo entrante: SSL0.OVH.NET
Puerto del servidor de correo entrante: 993 o 143
Servidor de correo saliente (SMTP): SSL0.OVH.NET
Puerto del servidor de correo saliente: 465 o 587

Los puertos 143 y 587 corresponden a la protección SSL desactivada.
Los puertos 993 y 465 corresponden a la protección SSL activada.

Es imprescindible activar la [autenticación del servidor de salida SMTP](#configuracion_manual_etapa_5_servidor_de_salida_y_opciones_avanzadas).

|Puerto|SSL activado|SSL desactivado|
|Entrante|993|143|
|Saliente|465|587|




## Las intervenciones de pago
En determinadas condiciones, podemos encargarnos de configurar su cuenta en su cliente de correo electrónico a través de una intervención de pago. 

OVH también puede realizar otras intervenciones relacionadas con su dirección de correo electrónico, que puede consultar en esta guía:

- []({legacy}1683)


Para solicitar una intervención de pago, consulte la guía anterior para conocer el procedimiento a seguir.

![](images/img_2503.jpg){.thumbnail}

