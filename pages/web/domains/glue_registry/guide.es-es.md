---
title: Glue Record
excerpt: ¿Para qué sirve un Glue Record?
slug: glue_record
legacy_guide_number: g1568
section: DNS (servidor y zona)
---


## 
El Glue Record permite personalizar sus servidores DNS con su nombre de dominio. De ese modo, será su nombre el que aparezca en las bases de datos Whois, en lugar del de su proveedor de hosting. Puede crear sus propios servidores DNS en IPv4.

Es posible personalizar servidores DNS para todos los dominios gTLD: .com, .net, .org...
Para utilizar este servicio, acceda al [área de cliente](https://www.ovh.com/manager/web/login.html).

En el apartado «Dominios» de la columna izquierda, seleccione el dominio correspondiente.

![](images/img_2903.jpg){.thumbnail}
Abra la pestaña «Glue» y haga clic en el botón «Añadir».

![](images/img_2900.jpg){.thumbnail}
Se abrirá un cuadro de diálogo donde podrá configurar el Glue Record.

![](images/img_2901.jpg){.thumbnail}
Indique un subdominio y la dirección IP de un servidor DNS válido.

![](images/img_2902.jpg){.thumbnail}


## 
Si utiliza servidores DNS externos a OVH, es necesario crear el subdominio en la zona DNS correspondiente, y no en la zona de OVH.
Una vez creado el registro Glue, es necesario declarar un registro de tipo A en la zona DNS.

Para ello, abra la pestaña «Zona DNS».

![](images/img_2953.jpg){.thumbnail}
Haga clic en «Añadir un registro».

![](images/img_2952.jpg){.thumbnail}
Seleccione «A».

![](images/img_2956.jpg){.thumbnail}
A continuación podrá ver el registro de tipo «A» que se va a generar, en función de los datos que haya introducido. 

Haga clic en «Siguiente» y acepte la adición del registro.

![](images/img_2954.jpg){.thumbnail}
Será necesario esperar entre 24 y 48 horas a que se propaguen los cambios.

