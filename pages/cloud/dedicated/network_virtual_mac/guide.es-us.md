---
title: 'Asignar una MAC virtual a una IP Failover'
slug: mac-virtual
excerpt: 'Cómo crear una dirección MAC virtual y asociarle una IP failover'
section: 'Red e IP'
---

**Última actualización: 30/10/2018**

## Objetivo

OVH permite asociar una dirección MAC virtual a una dirección IP para poder desplegar máquinas virtuales con una configuración bridge en los servidores.

**Esta guía explica cómo crear una MAC virtual y asociarle una IP failover.**


## Requisitos

* Tener un [servidor dedicado](https://www.ovh.es/servidores_dedicados/){.external}.
* Tener una [dirección IP failover](https://www.ovh.es/servidores_dedicados/ip_failover.xml){.external} o un bloque de IP failover (RIPE).
* Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.


## Procedimiento

### Asignar una dirección MAC

En el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, acceda al menú `Dedicado`{.action} y haga clic en `IP`{.action} en la columna izquierda.

![IPFO](images/virtual_mac_01.png){.thumbnail}

Localice su dirección IP failover (o su bloque) en la lista, haga clic en el botón `···`{.action} situado al final de la línea correspondiente para ver la lista de opciones y seleccione `Añadir una MAC virtual`{.action}.

![IPFO](images/virtual_mac_02.png){.thumbnail}

En el cuadro de diálogo, seleccione un tipo en la lista desplegable, introduzca el nombre de la máquina virtual y haga clic en `Aceptar`{.action}.

* **Tipo**: Elija el tipo de dirección MAC virtual («VMware» para el sistema VMware ESXi y «OVH» para todos los demás sistemas de virtualización).
* **Nombre de la máquina virtual**: Nombre que quiera asignarle a la dirección MAC virtual, para luego encontrar más fácilmente la pareja IP-MAC.


![IPFO](images/virtual_mac_03.png){.thumbnail}


> [!primary]
>
> No olvide asignar la dirección MAC virtual creada en la configuración de su máquina virtual.
> 

### Eliminar una dirección MAC

> [!warning]
>
> Si elimina una dirección MAC, no será posible recuperarla más adelante.
> 

Para eliminar una dirección MAC virtual asociada a una IP failover, en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external} acceda al menú `Dedicado`{.action} y haga clic en `IP`{.action} en la columna izquierda. Seleccione el servidor para ver las IP failover o bloques de IP asociados.

Por último, haga clic en el botón `···`{.action} situado al final de la línea correspondiente y seleccione `Eliminar una MAC virtual`{.action}.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.