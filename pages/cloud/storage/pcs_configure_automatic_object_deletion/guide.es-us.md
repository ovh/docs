---
title: Configurar la eliminación automática de objetos
excerpt: Configurar la eliminación automática de objetos
slug: configurar_la_eliminacion_automatica_de_objetos
section: Object Storage
legacy_guide_number: g1950
---


## 
Para facilitarle la gestión de su Object Storage, es posible que necesite especificar el ciclo de vida de determinados archivos para, por ejemplo, guardar determinados backups durante un cierto período de tiempo.

Esta guía explica cómo eliminar los archivos de manera automática al cabo de un cierto período de tiempo o en una fecha concreta.


## Requisitos
Para seguir todos los pasos de esta guía, es necesario:


- [Preparar el entorno para utilizar la API de OpenStack](../preparar_el_entorno_para_utilizar_la_api_de_openstack){.ref}
- Cargar las variables de entorno de OpenStack




## 
Existen dos formas de eliminar los archivos:


- al cabo de un cierto número de segundos,
- en una fecha determinada.




## Al cabo de un cierto número de segundos
Configure el header X-Delete-After de los objetos:


```
root@server:~$ swift post --header "X-Delete-After: 3600" container test.txt
```


En este ejemplo, el archivo test.txt se eliminará al cabo de una hora.


## En una fecha determinada
En primer lugar, hay que conocer la fecha de eliminación en formato Epoch. Para calcularla fácilmente puede utilizar un [conversor](http://espanol.epochconverter.com/).

A continuación, introduzca ese valor en el header X-Delete-At:


```
root@server:~$ swift post --header "X-Delete-At: 1512086400000" container test.txt
```


En este ejemplo, el archivo test.txt se eliminará el 1 de diciembre de 2017.


## 
 

