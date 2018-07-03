---
title: 'IMAPCopy: Guía de uso'
excerpt: ''
slug: imapcopy_guia_de_uso
legacy_guide_number: g1310
section: Herramientas
---


## ¿Para qué sirve?
IMAPCopy permite copiar el correo de una cuenta de origen a otra cuenta de destino.

Solo tendrá que seguir estos pasos:
1. Introducir la información relativa a la cuenta de correo que quiere transferir.
2. Introducir la información relativa a la nueva cuenta de correo.
3. Una vez aceptada la sincronización, podrá cerrar la página. El correo se copiará a la cuenta de destino. Esta operación puede tardar varias horas.

Puede acceder directamente desde la siguiente dirección: [http://webwww.ovh.es/mail/imapcopy/](http://webwww.ovh.es/mail/imapcopy/)

![](images/img_1423.jpg){.thumbnail}


## Dónde encontrarlo en la web
En [OVH.es](http://www.ovh.es), haga clic en «Webmail», en la esquina superior derecha. 

Llegará a la pantalla de conexión al webmail.

![](images/img_2846.jpg){.thumbnail}
En el menú superior derecho, haga clic en «Webmail» y seleccione «Acceder a las herramientas del correo». 

Se abrirá la página de de herramientas de correo, entre las que podrá ver IMAPCopy.

Seleccione «IMAPCopy». La herramienta se abrirá en una nueva pestaña de su navegador.

![](images/img_2411.jpg){.thumbnail}


## Seleccionar los servicios
IMAPCopy permite transferir cuentas de correo externas a una cuenta de correo OVH.

Los principales proveedores de servicios de correo que se indican por defecto son los siguientes:

- Gmail
- Hotmail
- Yahoo
- Hosted Exchange 2013
- Private Exchange 2013
- Alojamiento compartido OVH
- Otro


Si su proveedor de servicios de correo no está en la lista, seleccione «Otro».
En este caso, vamos a copiar nuestra cuenta del alojamiento compartido OVH a nuestra cuenta Exchange 2013.

Por lo tanto, seleccionamos «Alojamiento compartido OVH» como dirección de correo de origen.

![](images/img_1426.jpg){.thumbnail}


## Configuración de la cuenta
Para configurar la dirección de correo de origen, deberá introducir los siguientes datos en los campos correspondientes:

«Servicio»: Ver apartado anterior (en el ejemplo, alojamiento compartido OVH). 
«Login»: La dirección de correo de origen completa (en el ejemplo, support@ovh.net) o el usuario de conexión (lo anterior a la arroba).
«Password»: La contraseña de esa cuenta de correo (usted es el único que la conoce).
«Servidor IMAP»: Servidor de correo al que hay que conectarse para acceder a la cuenta de origen (en el ejemplo, ssl0.ovh.net, servidor que utiliza una conexión SSL).
«SSL»: Marque esta casilla si el servidor utiliza una conexión cifrada de tipo SSL (en nuestro caso debe estar marcada).

Una vez haya introducido todos los elementos, haga clic en «Validar».

![](images/img_1427.jpg){.thumbnail}


## Conexión a la cuenta de origen
Una vez haya validado los datos de conexión a la dirección de correo de origen, se probará la conexión a la cuenta y se confirmará si se ha establecido la conexión.

![](images/img_1428.jpg){.thumbnail}


## Seleccionar los servicios
IMAPCopy fue diseñado inicialmente para transferir cuentas de correo de OVH o externas a una cuenta OVH (Exchange o en alojamiento compartido). Sin embargo, con el nuevo servicio Exchange 2013, se abre la posibilidad de realizar la copia de destino en servidores ajenos a OVH.

Estos son los principales servicios de correo que se indican por defecto:

- Exchange 25 GB
- Exchange Corporate
- Exchange Revendeur
- Alojamiento compartido OVH
- Otro


Si su servicio de correo no aparece en la lista, seleccione «Otro».

En este ejemplo, vamos a copiar nuestra cuenta de OVH en alojamiento compartido a nuestra cuenta Exchange 2013.

Por lo tanto, seleccionamos «Otro» como dirección de correo de destino.

![](images/img_1429.jpg){.thumbnail}


## Configuración de la cuenta
Para configurar la dirección de correo de destino, deberá introducir los siguientes datos en los campos correspondientes:

«Servicio»: Ver arriba (en el ejemplo, otro).
«Login»: La dirección de correo de destino completa (en el ejemplo, la dirección de Exchange 2013 exchange@ovh.net) o el usuario de conexión (lo anterior a la arroba).
«Password»: La contraseña de esa cuenta de correo (usted es el único que la conoce).
«Servidor IMAP»: Servidor de correo al que hay que conectarse para acceder a la cuenta de destino (en el ejemplo, ex.mail.ovh.net).
«SSL»: Marcar esta casilla si el servidor utiliza una conexión cifrada de tipo SSL (en nuestro caso, debe estar marcada).

Una vez haya introducido todos los elementos, haga clic en «Aceptar».

![](images/img_1430.jpg){.thumbnail}


## Conexión a la cuenta de destino
Una vez haya validado los datos de conexión a la dirección de correo de destino, se probará la conexión a la cuenta y se confirmará si se ha establecido la conexión.

![](images/img_1431.jpg){.thumbnail}


## Sincronización
Cuando se haya establecido la conexión a la dirección de destino, aparecerá el botón «Sincronizar».

Haga clic en dicho botón para ejecutar la copia de la cuenta de origen a la cuenta de destino.

En este caso, vamos a copiar todos los mensajes de la cuenta support@ovh.net a la cuenta Exchange 2013 exchange@ovh.net.

Aparecerá el siguiente mensaje:
«Se está procesando la sincronización de las cuentas. Compruebe su estado en cualquier momento indicando su dirección en el campo de abajo.»

![](images/img_1432.jpg){.thumbnail}
Al tratarse de una sincronización de tipo IMAP, las carpetas existentes en la dirección de correo de origen que no existan en la dirección de coreo de destino se crearán aunque estén vacías.


## Sincronización: errores
Una vez se haya lanzado la sincronización, si se produce un error, aparecerá un mensaje con el siguiente formato:

«Se ha producido un error en la sincronización. Todo for sync this account exists.»

Se trata del mensaje general de error en español, seguido del error concreto en inglés.

En el caso de la imagen, hemos pulsado dos veces el botón sincronizar. El mensaje nos indica que ya hay una tarea de sincronización para esa cuenta, por lo que no se creará una segunda.

![](images/img_1433.jpg){.thumbnail}


## Sincronización: fin
Una vez finalizada la sincronización, se enviará un correo con el detalle de la operación a la dirección de correo de destino.

El correo enviado aparece en la siguiente captura de pantalla.

![](images/img_1435.jpg){.thumbnail}


## Conocer el estado de la Sincronización
Para conocer el estado de sincronización de las cuentas, puede introducir en cualquier momento la dirección de correo de origen en el campo previsto a tal efecto y hacer clic en «Enviar».

En nuestro caso, en el momento en que hemos consultado el progreso, la sincronización ya había finalizado.

Veremos el siguiente mensaje: 
«La sincronización de las cuentas ha terminado.»

Si se trata de una copia más pesada, en un primer momento aparecerá el siguiente mensaje: «La sincronización aún no ha comenzado. Por favor, espere.»

![](images/img_1434.jpg){.thumbnail}

