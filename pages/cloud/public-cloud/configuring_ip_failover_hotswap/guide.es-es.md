---
title: Configurar una IP Failover en caliente
excerpt: Configurar una IP Failover en caliente
slug: configurar_una_ip_failover_en_caliente
legacy_guide_number: g1884
section: Red e IP
---


## 
Si necesita de manera puntual alguna dirección IP Failover, no es necesario modificar el archivo de configuración de red para añadir la IP; puede configurarla con una simple línea de comandos.

Esta guía explica cómo configurar rápidamente una IP Failover en una instancia (solo en distribuciones Linux).
Atención: Esta configuración no es persistente, lo que significa que, en caso de reiniciar el servidor virtual, la configuración de la IP se perderá.


## Requisitos
Para seguir todos los pasos de esta guía es necesario:


- tener una instancia de Public Cloud;
- haber importado una IP Failover al proyecto de Public Cloud;
- estar conectado a la instancia por SSH.


En esta guía, la IP Failover se representa con la cadena de caracteres X.X.X.X. Es necesario sustituir esta cadena por la IP Failover correspondiente.


## 
Introduzca el siguiente comando en un terminal:


```
admin@vserver1:~$ sudo ip addr add X.X.X.X/32 dev eth0
```


Por ejemplo:


```
admin@vserver1:~$ sudo ip addr add 87.98.177.67/32 dev eth0
```


Para comprobar que la IP responde, haga un test «ping» desde un terminal local (o el símbolo del sistema de Windows, o un terminal en Linux o Mac).

Por ejemplo:


```
user@hostname:~$ ping 87.98.177.67
PING 87.98.177.67 (87.98.177.67) 56(84) bytes of data.
64 bytes from 87.98.177.67: icmp_req=1 ttl=60 time=0.819 ms
64 bytes from 87.98.177.67: icmp_req=2 ttl=60 time=0.564 ms
64 bytes from 87.98.177.67: icmp_req=3 ttl=60 time=0.615 ms
64 bytes from 87.98.177.67: icmp_req=4 ttl=60 time=0.559 ms
^C
--- 87.98.177.67 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3000ms
rtt min/avg/max/mdev = 0.559/0.639/0.819/0.107 ms
```


En este caso, podemos ver que la IP responde correctamente.
