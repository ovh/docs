---
title: 'Web hosting: Información general sobre los servidores DNS'
excerpt: 'Web hosting: Información general sobre los servidores DNS'
slug: web_hosting_informacion_general_sobre_los_servidores_dns
legacy_guide_number: g2015
section: DNS (servidor y zona)
---


## Definición
El protocolo DNS (Domain Name System, por sus siglas en inglés) permite transformar un nombre de dominio en dirección IP para que las peticiones lleguen al servidor de destino.

![](images/img_3413.jpg){.thumbnail}


## Diferencias entre los servidores y la zona DNS

## Servidores DNS

- Los servidores DNS son los servidores asociados a un nombre de dominio. Son, por lo tanto, los servidores que responderán en primer lugar antes de pasar el testigo a la zona DNS asociada.



## Zona DNS

- La zona DNS es un archivo que contiene una serie de registros que indican, entre otros, las direcciones de los servidores que alojan su sitio (A) o sus correos (MX). Estas direcciones pueden adoptar la forma de una dirección IP o de nombres de hosts.




## ¿Por qué es necesario editar los servidores o la zona DNS?

## Servidores DNS
Es posible que necesite modificar sus servidores DNS al cambiar de agente registrador, ya que algunos registros no permiten seguir utilizando sus servidores al transferir su dominio a otro agente distinto. 
También es posible que usted disponga de un servidor dedicado que funcione como servidor DNS y que desee utilizarlo para administrar su dominio.

## Zona DNS
Si desea modificar el servidor que aloja su sitio web o sus servicios de correo debido a un cambio de alojamiento, por ejemplo, deberá modificar su zona DNS. 
Una vez actualizada la zona DNS, su dominio apuntará a los nuevos servidores. 

Si desea más información sobre la zona DNS, consulte la siguiente guía: 

- []({legacy}2015).




## Conexión al área de cliente

- Conéctese a su [área de cliente](https://www.ovh.com/manager/web) con su ID de cliente (NIC Handle) y contraseña. 

- Haga clic en «Login» para validar la operación.



![](images/img_3411.jpg){.thumbnail}


## Selección del dominio

- Acceda a la sección «Dominios» en el menú de la izquierda y seleccione el dominio que desee modificar.



![](images/img_3405.jpg){.thumbnail}


## Agregar nuevos servidores DNS

- Acceda a la sección «Gestión de DNS» y seleccione la opción «Añadir un servidor DNS».



![](images/img_3406.jpg){.thumbnail}

- Indique el primer servidor DNS que desee añadir, acepte y realice la misma operación para el segundo servidor DNS.



![](images/img_3407.jpg){.thumbnail}


## Eliminar mis antiguos servidores DNS

- Haga clic en el icono con forma de papelera para eliminar sus antiguos servidores DNS y, a continuación, valide la operación.



![](images/img_3408.jpg){.thumbnail}

- Espere mientras se realiza la operación.



![](images/img_3409.jpg){.thumbnail}

- Trascurridos unos minutos, se completará la operación.



![](images/img_3410.jpg){.thumbnail}


## Reiniciar servidores DNS por defecto
Si usted realiza una operación incorrecta, podrá reestablecer sus servidores DNS por defecto.


- Acceda a la sección «Gestión de DNS» y seleccione la opción «Reiniciar DNS por defecto».



![](images/img_3416.jpg){.thumbnail}

- Haga clic en «Aceptar» para confirmar la operación.



![](images/img_3417.jpg){.thumbnail}


## ¿Cómo saber qué servidores DNS le ha asignado OVH?
Si desea conocer qué servidores DNS le ha asignado OVH, acceda a la información haciendo clic en la sección «Zona DNS», en la que aparecerán los dos registros NS de su zona.

![](images/img_3418.jpg){.thumbnail}


## Gestión avanzada de DNS con el registro Glue
Si desea información sobre cómo crear sus registros Glue, consulte la siguiente guía: 
[]({legacy}1568)


## Plazos
Servidores DNS

- Todos los cambios en sus servidores DNS pueden tardar hasta 48 h.

Zona DNS
- Todos los cambios en su zona DNS pueden tardar hasta 24 h.



