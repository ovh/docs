---
title: Añadir un DNS secundario en Kimsufi y So you Start
excerpt: Añadir un DNS secundario en Kimsufi y So you Start
slug: anadir_un_dns_secundario_en_kimsufi_y_so_you_start
section: Miscelánea
---


## Añadir un dominio en el DNS secundario
Para añdir un dominio en el DNS secundario de un servidor Kimsufi o So you Start, debe: 

- Acceder a su área de cliente Kimsufi o So you Start. 
- Hacer clic en la pestaña DNS.



![](images/img_4078.jpg){.thumbnail}
A continuación, haga clic en Añadir un DNS secundario.

![](images/img_4081.jpg){.thumbnail}
Para los servidores Kimsufi, el DNS secundario será ns.kimsufi.com.
Debe indicar su nombre de dominio y seleccionar la IP a la que está asociado.

![](images/img_4077.jpg){.thumbnail}
Aparecerá un mensaje indicándole que debe añadir el subdominio ownercheck con un valor determinado en su zona DNS. 

Una vez que haya añadido el subdominio, relanzado el servicio BIND y propagado la zona (entre 24 y 48 horas), podrá añadir su dominio al DNS secundario.


## Eliminar un dominio del DNS secundario
Para eliminar un dominio del DNS secundario, debe: 

- Acceder a su área de cliente Kimsufi o So you Start. 
- Hacer clic en la pestaña DNS.
- Hacer clic en la pestaña Editar los DNS secundarios.
- Eliminar el dominio en el botón Eliminar que aparece a la derecha y confirmar la operación.



![](images/img_4082.jpg){.thumbnail}

