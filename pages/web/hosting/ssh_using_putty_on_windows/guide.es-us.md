---
title: 'Web hosting: PuTTY en Windows'
excerpt: 'Web hosting: PuTTY en Windows'
id: '1964'
slug: web_hosting_putty_en_windows
legacy_guide_number: g1964
section: FTP y SSH
---


## Introducción
En los sistemas de Windows existen varios programas disponibles que permiten conectarse a través de SSH. Uno de los más populares y fáciles de usar es PuTTY. 

Puede descargarlo desde su [página oficial](http://www.putty.org/).

También necesitará sus usuarios FTP: 


- Servidor FTP 
- Nombre de usuario FTP 
- Contraseña FTP 


Podrá acceder a esta información en su área de cliente, en la pestaña «FTP-SSH». Si desea más información, consulte nuestra [guía](../web_hosting_administrar_y_acceder_a_sus_contrasenas/).


## Ejecutar PuTTY

- Descargue y ejecute el programa. 
- En el campo «Host Name» (o dirección IP) introduzca su servidor FTP.
- En el campo «Port» introduzca 22 si aún no aparece nada. 
- Marque la casilla «SSH». 
- Haga clic en «Open».



![Putty](images/img_3094.jpg){.thumbnail}


## Conexión a su alojamiento

- En el prompt, introduzca su nombre de usuario FTP (login)  y haga clic en «Enter».

- Introduzca a continuación su contraseña FTP y haga clic en «Enter». 


Por motivos de seguridad PuTTY no muestra los caracteres introducidos. Si el nombre de usuario o la contraseña no son correctos, repita la operación. 


- Una vez introducida esta información, aparecerá el mensaje «Welcome to Ovh».




## Uso de SSH
Si desea más información sobre el uso de SSH, consulte nuestra [guía](../web_hosting_ssh_en_alojamiento_compartido/).

