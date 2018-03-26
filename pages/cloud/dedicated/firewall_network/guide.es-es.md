---
title: Configurar el firewall de red
slug: firewall-de-red
section: Red e IP
---

**Última actualización: 02/03/2018**

## Objetivo

Para proteger su infraestructura mundial y los servidores de sus clientes, OVH ofrece un cortafuegos configurable integrado en su [solución anti-DDoS (VAC)](https://www.ovh.es/anti-ddos/){.external}: el firewall de red. Se trata de una opción que permite limitar la exposición de los servicios a los ataques procedentes de la red pública.

**Esta guía explica cómo configurar el firewall de red de OVH.**

![El VAC en detalle](images/vac-inside.png){.thumbnail}


## Requisitos

- Tener contratado un servicio de OVH que utilice el firewall de red ([servidores dedicados](https://www.ovh.es/servidores_dedicados/){.external}, [VPS](https://www.ovh.es/vps/){.external}, [instancias de Public Cloud](https://www.ovh.es/public-cloud/instancias/){.external}, [Private Cloud](https://www.ovh.es/private-cloud/){.external}, [IP Failover](https://www.ovh.es/servidores_dedicados/ip_failover.xml){.external}...).
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Dedicado`{.action}.
- Tener conocimientos básicos de redes.


## Procedimiento

### Activar el firewall de red

> [!primary]
>
> El firewall de red protege las direcciones IP asociadas a una máquina. Es necesario configurar cada IP de forma independiente; no es posible configurar directamente el servidor.
> 

El firewall se activa y se configura manualmente en cada IP desde el área de cliente. 

En la columna izquierda, haga clic en `IP`{.action}. Se mostrará la lista de direcciones IP.

Haga clic en la rueda dentada situada al final de la línea correspondiente a la IPv4 que quiera configurar y haga clic en `Crear firewall`{.action}.

![Activación del firewall de red](images/firewall_creation.png){.thumbnail}

Confirme la activación haciendo clic en `Aceptar`{.action}.

![Confirmación](images/creationvalid.png){.thumbnail}

Una vez creado el firewall, solo queda activarlo y configurarlo. Al hacer clic de nuevo en la rueda dentada situada al final de la línea correspondiente a la IPv4 se mostrarán las opciones `Activar el firewall`{.action} y `Configurar el firewall`{.action}.

![Activación de la configuración](images/activationconfig.png){.thumbnail}

Es posible añadir hasta **20 reglas por IP**.


> [!warning]
>
> El firewall se activa automáticamente en cada ataque DDoS y no es posible desactivarlo hasta que el ataque haya finalizado. Por ese motivo, es importante mantener las reglas de firewall actualizadas.
>
> Las IP de OVH no tienen ninguna regla configurada por defecto, por lo que pueden establecerse todas las conexiones.
>
> No olvide comprobar regularmente sus reglas de firewall (si las tiene), aunque haya desactivado el firewall.
> 



> [!primary]
>
> La fragmentación UDP está bloqueada (DROP) por defecto. Si utiliza una VPN, al activar el firewall de red no olvide configurar correctamente su MTU (unidad de transmisión máxima). Por ejemplo, en OpenVPN, puede marcar `MTU test`{.action}.
>
> El firewall de red no se aplica dentro de la red de OVH, por lo que las reglas creadas no afectan a las conexiones internas.
>


### Configurar el firewall de red

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
> - **Prioridad 0:** Se recomienda autorizar el protocolo TCP en todas las direcciones IP con la opción `ESTABLISHED`{.action}. Dicha opción permite comprobar que el paquete pertenece a una sesión abierta anteriormente (ya iniciada). Si no autoriza esta opción, el servidor no recibirá las respuestas para el protocolo TCP de las peticiones SYN/ACK.
> - **Prioridad 19:** Se recomienda bloquear todo el protocolo IPv4 si no se cumple ninguna regla hasta la última (la 19).
> 


### Ejemplo de configuración

Para dejar abiertos únicamente los puertos SSH (22), HTTP (80), HTTPS (443) y UDP (en el puerto 10 000), autorizando el ICMP, utilice las reglas de la siguiente imagen: 

![Ejemplo de configuración](images/exemple.png){.thumbnail}

Las reglas se ordenan cronológicamente de 0 (la primera regla leída) a 19 (la última regla leída). La cadena deja de recorrerse en el momento en el que pueda aplicarse una regla al paquete recibido.

Por ejemplo, para un paquete destinado al puerto 80/TCP, se aplicará la regla 2 y ya no se leerán las siguientes. Para un paquete destinado al puerto 25/TCP, no se aplicará ninguna regla hasta la última (la 19), que lo bloqueará, ya que las anteriores no autorizan ninguna comunicación en el puerto 25.

> [!warning]
>
> Si se activa la mitigación anti-DDoS, las reglas del firewall de red se activarán aunque el firewall esté desactivado. Por lo tanto, recuerde eliminar las reglas si desactiva el firewall.
> 

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.

