---
title: 'Configurar el firewall de red'
slug: firewall-de-red
excerpt: 'Cómo configurar el Firewall Network'
section: 'Red e IP'
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 23/12/2021**

## Objetivo

Para proteger su infraestructura mundial y los servidores de sus clientes, OVHcloud ofrece un cortafuegos configurable integrado en su solución **anti-DDoS**: el Firewall Network. Se trata de una opción que permite limitar la exposición de los servicios a los ataques procedentes de la red pública.

**Esta guía explica cómo configurar el Firewall Network.**


> [!primary]
>
> Para más información sobre la solución anti-DDoS de OVHcloud, consulte la página <https://www.ovh.es/anti-ddos/>.
> 

![El VAC en detalle](images/vac-inside.png){.thumbnail}


## Requisitos

- Tener contratado un servicio de OVHcloud que utilice el Firewall Network ([servidores dedicados](https://www.ovh.es/servidores_dedicados/){.external}, [VPS](https://www.ovh.es/vps/){.external}, [instancias de Public Cloud](https://www.ovh.es/public-cloud/instancias/){.external}, [Private Cloud](https://www.ovh.es/private-cloud/){.external}, [IP Failover](https://www.ovh.es/servidores_dedicados/ip_failover.xml){.external}...).
- Tener acceso al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](https://eco.ovhcloud.com/es-es/about/).
>
> Para más información, consulte nuestra [comparativa](https://eco.ovhcloud.com/es-es/compare/).

## Procedimiento

### Activar el Firewall Network

> [!primary]
>
> El Firewall Network protege las direcciones IP asociadas a una máquina. Es necesario configurar cada IP de forma independiente; no es posible configurar directamente el servidor.
> 

Conéctese al área de cliente de OVHcloud, haga clic en el menú `Bare Metal Cloud`{.action} y abra la sección `IP`{.action}.<br>
Haga clic en el botón `···`{.action} situado al final de la línea correspondiente a la IPv4 en la que quiera activar el cortafuegos y seleccione `Crear firewall`{.action}.

![Activación del firewall de red](images/firewall_creation2022.png){.thumbnail}

Confirme la operación haciendo clic en `Aceptar`{.action}.

![Confirmación](images/creationvalid.png){.thumbnail}

Una vez creado el firewall, es necesario activarlo y configurarlo. Para ello, vuelva a hacer clic en el botón `···`{.action} situado al final de la línea correspondiente a la IPv4 y seleccione `Activar el firewall`{.action} (1). Repita el proceso y seleccione `Configurar el firewall`{.action} (2).

![Activación de la configuración](images/activationconfig.png){.thumbnail}

Es posible añadir hasta **20 reglas por IP**.

> [!warning]
>
> El firewall se activa automáticamente en cada ataque DDoS y no es posible desactivarlo hasta que el ataque haya finalizado. Por ese motivo, es importante mantener las reglas de firewall actualizadas.
> Las IP de OVHcloud no tienen ninguna regla configurada por defecto, por lo que pueden establecerse todas las conexiones.
> No olvide comprobar regularmente sus reglas de firewall (si las tiene), aunque lo haya desactivado.
> 


> [!primary]
>
> - La fragmentación UDP está bloqueada (DROP) por defecto. Si utiliza una VPN, al activar el firewall de red no olvide configurar correctamente su MTU (unidad de transmisión máxima). Por ejemplo, en OpenVPN, puede marcar `MTU test`{.action}.
> - El firewall de red no actúa dentro de la red de OVHcloud, por lo que las reglas creadas no afectan a las conexiones internas.
>


### Configurar el Firewall Network

> [!warning]
> Tenga en cuenta que el Firewall Network de OVHcloud no puede utilizarse para abrir puertos en un servidor. Para abrir puertos en un servidor, debe utilizar el cortafuegos del sistema operativo instalado en el servidor.<br>
> Para más información, consulte las siguientes guías: [Configurar el firewall de Windows](https://docs.ovh.com/es/dedicated/firewall-windows/) y [Configurar el firewall de Linux con iptables](https://docs.ovh.com/es/dedicated/firewall-iptables/).
>

Para añadir una regla, haga clic en el botón `Añadir una regla`{.action}.

![Añadir una regla](images/ajoutregle1.png){.thumbnail}

Para cada regla es necesario seleccionar:

- la prioridad (de 0 a 19, siendo 0 la primera regla en aplicarse)
- una acción (`Denegar`{.action} o `Autorizar`{.action})
- el protocolo
- una IP de origen (opcional)
- el puerto de origen (TCP y UDP)
- el puerto de destino (TCP y UDP)
- las opciones TCP (solo TCP)

![Añadir una regla](images/ajoutregle4.png){.thumbnail}


> [!primary]
>
> - Prioridad 0: Se recomienda autorizar el protocolo TCP en todas las direcciones IP con la opción `ESTABLISHED`{.action}. Dicha opción permite comprobar que el paquete pertenece a una sesión abierta anteriormente (ya iniciada). Si no autoriza esta opción, el servidor no recibirá las respuestas para el protocolo TCP de las peticiones SYN/ACK.
> - Prioridad 19: Se recomienda bloquear todo el protocolo IPv4 si no se cumple ninguna de las reglas anteriores.
> 

### Ejemplo de configuración

Para dejar abiertos únicamente los puertos SSH (22), HTTP (80), HTTPS (443) y UDP (10000), autorizando el ICMP, utilice las reglas de la siguiente imagen:

![Ejemplo de configuración](images/exemple.png){.thumbnail}

Las reglas se ordenan cronológicamente de 0 (la primera regla leída) a 19 (la última regla leída). La cadena deja de recorrerse en el momento en el que pueda aplicarse una regla al paquete recibido.

Por ejemplo, para un paquete destinado al puerto 80/TCP, se aplicará la regla 2 y ya no se leerán las siguientes. Para un paquete destinado al puerto 25/TCP, no se aplicará ninguna regla hasta la última (la 19), que lo bloqueará, ya que las anteriores no autorizan ninguna comunicación en el puerto 25.

> [!warning]
>
> Si se activa la mitigación anti-DDoS, las reglas del Firewall Network se activarán aunque lo haya desactivado. Por lo tanto, recuerde eliminar las reglas si desactiva el firewall.
> 

### Configurar el firewall de red Armor (Firewall Game)

> [!primary]
> Por defecto, el cortafuegos Armor está preconfigurado con algunas reglas que OVHcloud ha determinado que funcionan con los juegos más comunes. Sin embargo, para los clientes que dispongan de un servidor dedicado Game, le ofrecemos la posibilidad de ir más lejos y configurar también las reglas para los puertos.
>

Para configurar las reglas de sus puertos en Armor, debe conectarse primero al área de cliente de OVHcloud.<br>
A continuación, acceda al menú `Bare Metal Cloud`{.action} y haga clic en la sección `IP`{.action} de la columna izquierda. Haga clic en `...`{.action} junto a la dirección IP del servidor de juego y, seguidamente, en `Configurar el firewall «Game»`{.action}".

![Game_wall](images/GAMEwall2021.png){.thumbnail}

En la siguiente pantalla, haga clic en el botón `Añadir una regla`{.action} para añadir una regla a Armor.

![Configure_Armor](images/ConfigureArmor2021.png){.thumbnail}

Active los puertos según sus necesidades en la siguiente pantalla y haga clic en el botón `Confirmar`{.action} cuando haya terminado de añadir las reglas. El firewall Armor se ha configurado correctamente.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.