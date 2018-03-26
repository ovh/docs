---
title: Configurar una dirección IP failover en Ubuntu
excerpt: Configurar una dirección IP failover en Ubuntu
slug: configurar_una_direccion_ip_failover_en_ubuntu
legacy_guide_number: g2043
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
vi /etc/network/interfaces
```


- Añadir al final del archivo: 

```
auto ethX:Y
iface ethX:Y inet static
address xxx.xxx.xxx.xxx
netmask 255.255.255.255
broadcast xxx.xxx.xxx.xxx
```



|Parámetros|Valores|
|---|---|
|X|número de la interfaz principal (generalmente eth0)|
|xxx.xxx.xxx.xxx|IP failover que desee configurar|
|Y|número del alias (empezar desde 0 y seguir con 1, etc. en función del número de direcciones IP que desee configurar)|


Si desea añadir varias direcciones IP, deberá hacerlo siempre en las mismas líneas: 
incrementando el valor Y (número de alias).


## Reiniciar el servicio de red

- Reinicie el servicio de red con el comando: 

```
service networking restart
```





## 

- [Migrar una IP failover]({legacy}1890)




## 
 

