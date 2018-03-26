---
title: Asignar una MAC virtual a una IP Failover
slug: mac-virtual
excerpt: OVH permite asociar una MAC virtual a una IP Failover para poder desplegar maquinas virtuales con una configuracion bridge en su servidor.
section: Red e IP
---


## Requisitos
Para asignar una MAC virtual a una IP Failover, es necesario:

- tener un servidor dedicado;
- tener una dirección IP Failover o un bloque de direcciones IP Failover (RIPE);
- tener acceso al área de cliente.


## Asignar una direccion MAC
Para empezar, conéctese al [área de cliente Cloud](https://www.ovh.com/manager/cloud/){.external}.

Una vez se haya conectado, seleccione `IP`{.action} en el menú izquierdo.

Seleccione el servidor correspondiente para ver las IP Failover o bloques de IP asociados a él.

- Para una IP Failover:


![IPFO](images/IPFO.png){.thumbnail}

- Para un bloque de IP Failover:


![BlocIPFO](images/BlocFO.png){.thumbnail}



> [!primary]
>
> Los bloques de IP tienen un `+`{.action} a la izquierda. Haga clic en dicho símbolo para ver todas las direcciones IP del bloque (es necesario para asignar una MAC virtual a cada IP del bloque).
> 

A continuación, haga clic en la rueda dentada situada al final de la línea y seleccione `Añadir una MAC virtual`{.action}.


![MAC](images/mac.png){.thumbnail}

- **Tipo**: Elija el tipo de dirección MAC virtual: `vmware`{.action} para el sistema VMware ESXi, y `ovh`{.action} para todos los demás sistemas de virtualización.
- **Nombre de la máquina virtual**: Nombre que quiera asignarle a la dirección MAC virtual, para luego encontrar más fácilmente la pareja IP-MAC.



> [!primary]
>
> No olvide asignar la dirección MAC virtual creada en la configuración de su máquina virtual.
> 


## Eliminar una direccion MAC


> [!warning]
>
> Si elimina una dirección MAC, no será posible recuperarla más adelante.
> 

Para eliminar una dirección MAC virtual asociada a una IP Failover, conéctese en primer lugar al [área de cliente Cloud](https://www.ovh.com/manager/cloud/){.external}.

Una vez se haya conectado, seleccione `IP`{.action} en el menú izquierdo.

Seleccione el servidor correspondiente para ver las IP Failover o bloques de IP asociados a él.

Por último, haga clic en la rueda dentada situada al final de la línea y seleccione `Eliminar una MAC virtual`{.action}.