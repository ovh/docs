---
title: Hacer persistente la configuración de IP Failover
excerpt: Hacer persistente la configuración de IP Failover
slug: hacer_persistente_la_configuracion_de_ip_failover
legacy_guide_number: g1885
section: Red e IP
---


## 
Si tiene pensado conservar una instancia a largo plazo, es recomendable configurar las direcciones IP Failover de manera persistente para no tener que volver a configurarlas cada vez que reinicie la instancia.

Esta guía explica cómo configurar de manera permanente una IP Failover en una instancia.


## Requisitos
Para seguir los pasos descritos en esta guía, es necesario:


- tener una instancia de Public Cloud;
- haber importado una IP Failover en el proyecto de Public Cloud;
- estar conectado al servidor por SSH.




## Para Debian o Ubuntu
Edite el archivo de configuración con el siguiente comando:


```
vi /etc/network/interfaces
```


Al final del archivo, añada lo siguiente:


```
auto ethX:Y
iface ethX:Y inet static
address xxx.xxx.xxx.xxx
netmask 255.255.255.255
broadcast xxx.xxx.xxx.xxx
```


Sustituya arriba los siguientes parámetros por el valor correspondiente:


- X: Número de la interfaz principal (por lo general eth0)
- xxx.xxx.xxx.xxx: IP Failover que quiere configurar
- Y: Número del alias (empezar por 0, luego 1 y así sucesivamente, en función del número de direcciones IP que quiera configurar)|


En caso de que quiera añadir varias IP, hay que añadir cada vez las mismas líneas, pero incrementando el valor Y (número del alias).
Reiniciar los servicios de red con el siguiente comando:


```
service networking restart
```




## Para CentOS o Fedora
Edite el archivo de configuración con el siguiente comando:


```
vi /etc/sysconfig/network-scripts/ifcfg-ethX:Y
```


Sustituya en el comando anterior los siguientes parámetros por el valor correspondiente:


- X: Número de la interfaz principal (por lo general eth0)
- Y: Número del alias (empezar por 0, luego 1 y así sucesivamente, en función del número de direcciones IP que quiera configurar)


Añada lo siguiente al archivo:


```
DEVICE="ethX:Y"
BOOTPROTO=static
IPADDR="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
BROADCAST="xxx.xxx.xxx.xxx"
ONBOOT=yes
```


Reinicie los servicios de red con el siguiente comando:


```
ifup ethX:Y
```




## Para Windows
Windows no acepta la configuración de direcciones IP Failover adicionales a la configuración de la dirección IP principal en DHCP.

Por lo tanto, será necesario reconfigurar la tarjeta de red con una IP de manera manual.

Para ello, obtenga en primer lugar la información de red con ipconfig.

![](images/img_3545.jpg){.thumbnail}
Abra el Panel de control y acceda al Centro de redes y recursos compartidos (puede encontrarse dentro de «Redes e Internet»).

![](images/img_3543.jpg){.thumbnail}
Haga clic en «Cambiar configuración del adaptador».

![](images/img_3544.jpg){.thumbnail}
Haga clic derecho en la interfaz y, a continuación, haga clic en «Propiedades».

![](images/img_3546.jpg){.thumbnail}
Acceda a la configuración del «Protocolo de Internet versión 4 (TCP/IPv4)».

![](images/img_3547.jpg){.thumbnail}
Configure la IP manualmente según se indica más arriba, utilizando las direcciones IP obtenidas con el ipconfig.

Haga clic en «Opciones avanzadas».

![](images/img_3548.jpg){.thumbnail}
Añada la IP Failover como se indica en la imagen.

![](images/img_3551.jpg){.thumbnail}
 

