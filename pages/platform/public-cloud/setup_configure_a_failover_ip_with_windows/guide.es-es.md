---
title: Configurar una dirección IP failover en Windows
excerpt: Configurar una dirección IP failover en Windows
slug: configurar_una_direccion_ip_failover_en_windows
legacy_guide_number: g2046
section: Red e IP
---


## 
Es posible que necesite configurar una dirección IP failover en sus instancias, ya sea porque tiene varios sitios en su instancia o porque aloja proyectos internacionales. Public Cloud le permite adquirir o importar una dirección IP failover para sus instancias. 

Sin embargo, estas direcciones no se configurarán automáticamente en su instancia. Esta guía explica cómo configurar la interfaz de red de su instancia para añadir la dirección IP failover.


## Requisitos

- [Crear una instancia desde el área de cliente de OVH]({legacy}1775). 
- Una dirección IP failover.




## Configuración de la interfaz
Windows no acepta la configuración de una dirección IP failover como complemento de la configuración de la dirección IP principal en DHCP. Debe reconfigurar su tarjeta de red con una IP suministrada de manera manual. 


- Recuperar la información de red con ayuda de «ipconfig».



![](images/img_3609.jpg){.thumbnail}

- Acceda al «Panel de control» > «Centro de redes y recursos compartidos».



![](images/img_3602.jpg){.thumbnail}

- Modifique los parámetros de la tarjeta de red.



![](images/img_3603.jpg){.thumbnail}

- Acceda a las propiedades de su interfaz:



![](images/img_3604.jpg){.thumbnail}

- Acceda a la configuración del protocolo TCP/IPv4.



![](images/img_3605.jpg){.thumbnail}

- Seleccione la configuración manual y utilice una configuración similar a la que se incluye a continuación, adaptando las direcciones IP según la información que haya obtenido con su «ipconfig». 


A continuación, seleccione «Avanzado»:

![](images/img_3606.jpg){.thumbnail}

- Añada una dirección IP failover como se indica a continuación:



![](images/img_3607.jpg){.thumbnail}


## 

- [Migrar una IP failover]({legacy}1890)




## 
 

