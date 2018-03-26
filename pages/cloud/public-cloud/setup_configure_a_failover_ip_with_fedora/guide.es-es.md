---
title: Configurar una dirección IP failover en Fedora
excerpt: Configurar una dirección IP failover en Fedora
slug: configurar_una_direccion_ip_failover_en_fedora
legacy_guide_number: g2045
section: Red e IP
---


## 
Es posible que necesite configurar una dirección IP failover en sus instancias, ya sea porque tiene varios sitios en su instancia o porque aloja proyectos internacionales. Public Cloud le permite adquirir o importar una dirección IP failover para sus instancias. 

Sin embargo, estas direcciones no se configurarán automáticamente en su instancia. Esta guía explica cómo configurar la interfaz de red de su instancia para añadir la dirección IP failover.


## Requisitos

- [Crear una instancia desde el área de cliente de OVH]({legacy}1775). 
- Una dirección IP failover.




## Configuración de la interfaz

- Edite el archivo de configuración con el comando: 


```
vi /etc/sysconfig/network-scripts/ifcfg-ethX:Y
```



|Parámetros|Valores|
|---|---|
|X|número de la interfaz principal (generalmente eth0)|
|Y|número del alias (empezar desde 0 y seguir con 1, etc. en función del número de direcciones IP que desee configurar)|



- Añadir al archivo: 

```
DEVICE="ethX:Y"
BOOTPROTO=static
IPADDR="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
BROADCAST="xxx.xxx.xxx.xxx"
ONBOOT=yes
```





## Reiniciar el servicio de red

- Reinicie el servicio de red con el comando: 

```
ifup ethX:Y
```





## 

- [Migrar una IP failover]({legacy}1890)




## 
 

