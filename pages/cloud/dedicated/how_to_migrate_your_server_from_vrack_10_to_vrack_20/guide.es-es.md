---
title: Cómo migrar un servidor de un vRack 1.0 a un vRack 2.0.
excerpt: Cómo migrar un servidor de un vRack 1.0 a un vRack 2.0.
slug: como_migrar_un_servidor_de_un_vrack_10_a_un_vrack_20
legacy_guide_number: g1994
section: vRack
---


## 
Esta guía explica cómo migrar de un vRack 1.0 a un vRack 2.0.


## 
Para realizar esta operación necesitará: 

- Servidores con dos tarjetas de red actualmente en el vRack 1.0 (servidor de gama profesional fuera de la gama Superplan).  
- Un vRack 1.0.




## 
Para realizar la migración de los servidores presentes en el vRack 1.0 al vRack 2.0 deberá seguir estos pasos: 

- Configurar la segunda interfaz de cada servidor. 
- Crear un vRack 2.0. 
- Configurar temporalmente una dirección IP en la interfaz del vRack 2.0. 
- Desactivar la interfaz del vRack 1.0 y reconfigurar la interfaz del vRack 2.0.




## Configurar la interfaz del vRack 2.0

## Para mover un servidor a un vRack 2.0, necesita un servidor que posea dos interfaces de red.
En primer lugar, debemos configurar la interfaz del vRack 2.0 de nuestro servidor. 

Para conocer la interfaz que debemos configurar en Linux o en modo «rescue pro», despliegue las interfaces: 


```
ifconfig -a | grep eth | awk '{print $1}'
```


Ejemplo: 


```
#ifconfig -a | grep eth | awk '{print $1}'
eth0
eth1
```


eth0 ya es nuestra interfaz principal, puede ver su ip con ifconfig. 

A continuación, utilice: 


```
#ifconfig eth1 up
#ethtool eth1 | grep "Link detected"
Link detected: yes
```


Si en «Link detected» el mensaje que se muestra es «no», significa que no es la correcta. Pruebe: 


```
#ifconfig eth1 down
```


Realice la misma operación con el resto. 

En nuestro ejemplo utilizaremos eth1.


## Creación de un vRack 2.0
Para crear un vRack 2.0 puede utilizar la guía en la que se explica cómo hacerlo.


## Añadir el vRack 1.0 al 2.0
Para migrar del vRack 1.0 al 2.0 le invitamos a mover el vRack 1.0 al 2.0. 

Para ello, conéctese a su área de cliente en la siguiente dirección:

https://www.ovh.com/manager/

A continuación, seleccione el vRack 2.0 en el menú de la izquierda. 

Aparecerá la siguiente información:

![](images/img_3295.jpg){.thumbnail}
Seleccione un vRack 1.0 en la columna de servicios disponibles (columna de la izquierda). 

A continuación, haga clic en «Añadir».


## Añadir sus servidores al 2.0
Para migrar del vRack 1.0 al vRack 1.5 le invitamos a mover sus servidores al vRack 1.5. 

Para ello, conéctese a su área de cliente en la siguiente dirección: 

https://www.ovh.com/manager/dedicated

A continuación, seleccione el vRack 2.0 en el menú de la izquierda. 

Aparecerá la siguiente información:

![](images/img_3297.jpg){.thumbnail}
Seleccione un servidor en la columna de servicios disponibles (columna de la izquierda). 

A continuación, haga clic en «Añadir».


## Configuración temporal de una IP en la interfaz del vRack 2.0

## En primer lugar, realizaremos una configuración temporal para verificar el funcionamiento del vRack 2.0.
Agregue una IP privada en la interfaz del vRack para cada uno de sus servidores: 

Ejemplo (en un servidor en Debian con eth1 para la interfaz del vRack 2.0 y el bloque 10.0.0.0/24):

Desde el archivo de configuración: 
/etc/network/interfaces

Añada: 

```
auto eth1
iface eth1 inet static
address 10.0.0.1
netmask 255.255.255.0
broadcast 10.0.0.255
```


A continuación, reinicie su interfaz de red:


```
service networking restart
```


Para cualquier otra distribución, puede consultar la guía: 

VrackInfrastructureServer en la sección "IP privada" relativa a esta distribución.

## Importante:
Asegúrese de realizar un ping en cada uno de sus servidores a través de las direcciones IP privadas que acaba de configurar.
Si todos los servidores responden a un simple ping, pasaremos a la siguiente etapa. 

Si no, ejecute el comando: 


```
arping -I INTERFACE_VRACK_2.0 1.1.1.1
```


INTERFACE_VRACK_2.0: sustitúyala por su interfaz vRack 2.0 en nuestro ejemplo eth1.


## Desactivar el vRack 1.0 y reconfigurar el vRack 2.0

## Importante:
En esta etapa se producirá un corte durante la migración de la IP que utiliza en la interfaz 1.0 a la interfaz 2.0.
Elimine la configuración temporal de la interfaz del vRack 2.0 y de su interfaz del vRack 1.0. 

A continuación, reinicie sus interfaces. 

Una vez finalizado este proceso, añada su IP en el vRack 1.0 en la interfaz 2.0. 

En Debian, por ejemplo: 

Extracto de la configuración antes de la modificación:


```
auto eth0.XXXX
iface eth0.XXXX inet static
address 172.16.0.1
netmask 255.240.0.0
post-up ip r a 172.16.0.0/12 via 172.31.255.254 dev eth0.XXXX ;

auto eth1
iface eth1 inet static
address 10.0.0.1
netmask 255.255.255.0
broadcast 10.0.0.255
```


Extracto de la configuración tras la modificación:

```
auto eth1
iface eth1 inet static
address 172.16.0.1
netmask 255.240.0.0
broadcast 255.240.0.0
```


Reinicie las interfaces de las redes. 

Para cada distribución, puede consultar la guía VrackInfrastructureServer en la sección relativa a esta distribución.

Sus servidores deben poder comunicarse inmediatamente.


## Bloque de dirección IP pública

## Importante:
No es necesario que siga estos pasos si el bloque público es de un ACE o Firewall ASA.

## Si tiene un bloque de IP pública y todos sus servidores con compatibles con el vRack 1.5, puede añadir su bloque de dirección IP pública al vRack 1.5. De este modo, dejará de utilizar el vRack 1.0 en el manager.
Para ello, conéctese a su área de cliente en la siguiente dirección: 

https://www.ovh.com/manager/dedicated

Seleccione el bloque de la IP pública en el menú de la izquierda. 

Aparecerá la siguiente información:

![](images/img_3297.jpg){.thumbnail}

## Seleccione un servidor en la columna de servicios disponibles (columna de la izquierda).
A continuación, haga clic en «Añadir».

## Importante:
Esta operación provocará un corte de 1 minuto aproximadamente.


## Desactivación del vRack 1.0

## Importante:
Tan solo deberá seguir estos pasos en caso de que no tenga más material que solo funciona en el vRack 1.0, como sucede en los siguientes casos: 


- Antiguo servidor Superplan compatible con el vRack 1.0. 
- Si tiene un ACE. 
- Si tiene un firewall ASA para el vRack. 


Si cuenta con alguno de estos elementos, por ahora no podrá desactivar su vRack 1.0.
Una vez que los servidores se comuniquen en el vRack 1.5, podrá retirar los servidores del vRack 1.0. 

Conéctese a su área de cliente en la siguiente dirección: 

https://www.ovh.com/manager

Seleccione uno de sus vRack 1.0 y retire su servidor del vRack. A continuación, haga clic en «Composición actual de la infraestructura» y en «>>». 

Cuando todos sus servidores estén operativos en el vRack 2.0 y haya eliminado todos los servidores del vRack 1.0, puede ponerse en contacto con nuestro soporte para eliminar definitivamente su vRack 1.0.

