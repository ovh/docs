---
title: 'Web hosting: PuTTY en Windows'
excerpt: 'Web hosting: PuTTY en Windows'
updated: 2020-05-05
---

## Introducción
En los sistemas de Windows existen varios programas disponibles que permiten conectarse a través de SSH. Uno de los más populares y fáciles de usar es PuTTY. 

Puede descargarlo desde su [página oficial](http://www.putty.org/).

También necesitará sus usuarios FTP: 

- Servidor FTP 
- Nombre de usuario FTP 
- Contraseña FTP 

Puede consultar esta información en el Panel de control. Acceda a la sección FTP o siga las instrucciones que se indican a continuación 
[esta guía](/pages/web_cloud/web_hosting/ftp_connection).

## Ejecutar PuTTY

- Descargue y ejecute el programa. 
- En el campo «Host Name» (o dirección IP) introduzca su servidor FTP.
- En el campo «Port» introduzca 22 si aún no aparece nada. 
- Marque la casilla «SSH». 
- Haga clic en «Open».

![Putty](/pages/assets/screens/other/web-tools/putty/configuration.png){.thumbnail}

## Conexión a su alojamiento

- En el prompt, introduzca su nombre de usuario FTP (login)  y haga clic en «Enter».

- Introduzca a continuación su contraseña FTP y haga clic en «Enter». 

Por motivos de seguridad PuTTY no muestra los caracteres introducidos. Si el nombre de usuario o la contraseña no son correctos, repita la operación. 

- Una vez introducida esta información, aparecerá el mensaje «Welcome to Ovh».

## Uso de SSH
Si desea más información sobre el uso de SSH, consulte nuestra [guía](https://www.ovh.es/g1962.web_hosting_ssh_en_alojamiento_compartido).

