---
title: ¿Cuáles son las direcciones IP monitoreo de OVHcloud?
excerpt: Encuentre aquí las direcciones IP que debe completar al configurar un firewall para que el sistema de monitoreo de OVHcloud continúe funcionando en su servidor.
slug: montoring-ip-ovh
section: Red e IP
---

## Requisitos

El servicio de monitoreo le permite a OVHcloud monitorear el estado de su máquina y activar automáticamente la intervención de un técnico en el centro de datos.

Todos los servidores de nuestros clientes y toda la red son monitoreados 24/7 por equipos técnicos de OVHcloud.
OVHcloud interviene tan pronto como se activa una alerta (ninguna respuesta de ping) para minimizar el tiempo de inactividad de los servidores y la red.

Para implementar un firewall restrictivo, especialmente en ICMP, y continuar beneficiándose del monitoreo de OVHcloud, es necesario autorizar las IPs que encontrará a continuación.

Para hacer esto, debe tener:

- Un producto OVHcloud en el que ha instalado un firewall.
- Tener acceso a las reglas de Firewall.


## IPs a ser autorizadas 

|Reverse|IP|Protocol|
|---|---|---|
|mrtg-rbx-100|37.187.231.251|icmp|
|mrtg-sbg-100|37.187.231.251|icmp|
|mrtg-gra-100|37.187.231.251|icmp|
|mrtg-bhs-100|37.187.231.251|icmp|
|mrtg-rbx-101|151.80.231.244|icmp|
|mrtg-rbx-102|151.80.231.245|icmp|
|mrtg-rbx-103|151.80.231.246|icmp|
|mrtg-gra-101|151.80.231.247|icmp|
|a2.ovh.net|213.186.33.62|icmp|
||92.222.184.0/24|icmp|
||92.222.185.0/24|icmp|
||92.222.186.0/24|icmp|
||167.114.37.0/24|icmp|
|proxy.p19.ovh.net|213.186.45.4|icmp|
|proxy.rbx.ovh.net|213.251.184.9|icmp|
|proxy.sbg.ovh.net|37.59.0.235|icmp|
|proxy.bhs.ovh.net|8.33.137.2|icmp|
|ping.ovh.net|213.186.33.13|icmp|
|proxy.ovh.net|213.186.50.98|icmp|
||xxx.xxx.xxx.250 (xxx.xxx.xxx.aaa es la ip del servidor)|icmp|
||xxx.xxx.xxx.251 (xxx.xxx.xxx.aaa es la ip del servidor)|icmp + Puerto monitoreado por el servicio de monitoreo|

**La comunicación entre el servicio RTM y su servidor también requiere que permita conexiones entrantes y salientes en los puertos UDP 6100 a 6200.**


> [!primary]
>
> If your server is located in Roubaix 3, you have to retrieve the last IP via tcpdump.
>
```sh
root@nsXXXX:# tcpdump host server.ip | grep ICMP
```
