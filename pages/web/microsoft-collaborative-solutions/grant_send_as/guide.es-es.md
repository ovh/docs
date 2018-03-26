---
title: 'Exchange 2013: Send as (enviar como)'
excerpt: ''
slug: exchange_2013_send_as_enviar_como
legacy_guide_number: g1250
section: Funcionalidades de Exchange
---


## Creación de permisos send as, etapa 1
La operación debe realizarse desde el [área de cliente](https://www.ovh.com/manager/web/login.html).

Conéctese y seleccione su servicio Exchange.

En la pestaña «Cuentas de correo», haga clic en el icono «Más acciones», formado por tres puntos.

A continuación seleccione «Gestionar las delegaciones».

![](images/img_1208.jpg){.thumbnail}


## Creación de permisos send as, etapa 2
Se abrirá un cuadro de diálogo en el podrá elegir, para la cuenta seleccionada, quién tendrá permisos de acceso o de envío (send as).

Haga clic en «Siguiente» para continuar.

![](images/img_1209.jpg){.thumbnail}


## Creación de permisos send as, etapa 3
En esta ventana deberá confirmar los cambios haciendo clic en «Aceptar».

Es necesario esperar unos minutos para que sean efectivos.

![](images/img_1063.jpg){.thumbnail}


## Visualización en OWA, etapa 1
Después de crear la delegación, puede comprobar en [Outlook Web App](https://ex.mail.ovh.net/owa) que la cuenta de correo a la que ha dado permisos, en este caso «test», pueda enviar correo en lugar de «config».

Para mostrar el campo «Desde», debe hacer clic en «...», a la derecha de «Insertar».

Introduzca manualmente la segunda dirección en el campo «Desde». Dicha dirección se memorizará automáticamente.

![](images/img_1325.jpg){.thumbnail}


## Visualización en OWA, etapa 2
Los mensajes de correo deberían recibirse como enviados por la cuenta «config».

![](images/img_1032.jpg){.thumbnail}


## Posible error
Si los permisos «send as» no se han configurado correctamente, aparecerá el mensaje de error de la imagen.

![](images/img_1033.jpg){.thumbnail}

