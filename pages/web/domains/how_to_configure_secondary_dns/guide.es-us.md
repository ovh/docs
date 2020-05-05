---
title: Configurar el DNS secundario
excerpt: Cómo configurar un dominio en el servidor DNS secundario
slug: configurar_el_dns_secundario
legacy_guide_number: g1477
section: DNS (servidor y zona)
---


## 
Si quiere utilizar su servidor como DNS primario para su dominio, OVHcloud le ofrece un DNS secundario.

El menú «DNS secundario» aparece el panel central del área de cliente, seleccionando un VPS como plataforma.

La pantalla se muestra de la siguiente forma:

![secondary dns](images/img_2008.jpg){.thumbnail}
En esa pantalla, es posible:


- Ver directamente la lista de dominios ya configurados en nuestro DNS secundario.
- Añadir o eliminar un dominio de nuestro servidor DNS secundario.




## 1. Añadir un dominio
Para añadir un dominio, haga clic en «Añadir un dominio». Se mostrará el cuadro de diálogo de la imagen. 

Introduzca el dominio en el campo de texto.

![secondary dns](images/img_2009.jpg){.thumbnail}
Haga clic en «Aceptar».

![secondary dns](images/img_2010.jpg){.thumbnail}
A continuación, su dominio aparecerá en la lista, como en el siguiente ejemplo:

![secondary dns](images/img_2011.jpg){.thumbnail}
Para cada dominio añadido, se mostrarán los siguientes datos:


- Dominio: El dominio configurado en el servidor DNS secundario.
- IP: La dirección IP del servidor DNS primario para el dominio correspondiente.
- Fecha de creación: Fecha en la que se añadió el dominio al servidor DNS secundario.
- DNS secundario: Nombre del DNS secundario de OVHcloud en el que se ha configurado el dominio.


Es posible que sea necesaria una verificación de la gestión del dominio. En ese caso, al aceptar la adición del dominio aparecerá el siguiente mensaje de error:
Se ha producido un error al solicitar la adición del dominio al DNS secundario. (First we need to verify you are the owner of this domain. To do so, please add a TXT field on your DNS zone for the domain mispruebas.info, with the subdomain 'ownercheck' and the following value: '339ea8d0'. Once done and your zone reloaded, try again (you don't need to wait for DNS propagation).)
Si eso ocurre, deberá añadir un registro TXT para el subdominio ownercheck.sudominio.com en la actual zona DNS del dominio (que debe estar operativa):


```
ownercheck TXT "339ea8d0"
```


En el ejemplo anterior, sustituya el valor indicado entre comillas por el que aparece en el mensaje de error.


## 2. Eliminar un dominio
Para eliminar la declaración en el DNS secundario para un dominio, solo hay que hacer clic en el icono con forma de papelera, situado a la derecha de cada dominio configurado.


## 
En esta guía se ha explicado cómo:

- Añadir un dominio a nuestro servidor DNS secundario.
- Eliminar un dominio de nuestro servidor DNS secundario.



