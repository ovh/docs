---
title: "Configurar un bloque IPv6 en un vRack en un servidor dedicado"
excerpt: "Configure un bloque de direcciones IPv6 públicas para la red privada vRack de OVHcloud en su servidor dedicado."
updated: 2026-03-13
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

La red vRack es una red privada global que interconecta diferentes productos de OVHcloud y permite crear soluciones de red sofisticadas. Además de facilitar las conexiones privadas, también permite enrutar direcciones IP públicas.

**Esta guía se centra en la configuración de bloques de direcciones Additional IPv6 dentro de una red vRack.**

> [!primary]
>
> El vRack admite el enrutamiento público IPv4 e IPv6 con bloques de direcciones Additional IP. Puede encontrar las instrucciones para configurar bloques IPv4 en esta guía: [Configurar un bloque IP en el vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack).
>

> [!primary]
>
> Este artículo detalla la configuración de direcciones Additional IP en una red vRack. Si busca instrucciones para configurar direcciones Additional IP con una dirección IP principal (en la interfaz de red pública), consulte los siguientes artículos:
>
> - IPv4:
>     - [Configurar una dirección IP en alias en un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).
>     - [Configurar una dirección IP en alias en un servidor VPS](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>
> - IPv6:
>     - [Configurar IPv6 en un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).
>     - [Configurar IPv6 en un servidor VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>     - [Configurar IPv6 en una instancia Public Cloud](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>

## Introducción

El IPv6 revoluciona las redes dentro del vRack de OVHcloud, ofreciendo una solución a las limitaciones del IPv4 y funcionalidades adaptadas a la Internet moderna. Su despliegue responde directamente a la necesidad de arquitecturas de Internet más amplias, seguras y sofisticadas. Estas son las principales ventajas de integrar IPv6 en el vRack:

- **Flexibilidad para redes avanzadas**: el IPv6 aumenta considerablemente el espacio de direccionamiento, proporcionando la flexibilidad necesaria para escalar la infraestructura, gestionar escenarios de conmutación por error y soportar soluciones de mayor envergadura. Esto permite que las redes crezcan y se adapten sin las restricciones de direccionamiento del IPv4.

- **Enrutamiento jerárquico y segmentación**: IPv6 permite un enrutamiento jerárquico eficiente y una segmentación lógica de la infraestructura. Esto mejora la gestión y la seguridad de la red, ideal para revender máquinas virtuales con subredes dedicadas o para segmentar la infraestructura de red.

- **Baja latencia**: la conectividad IPv6 nativa de extremo a extremo puede facilitar la implementación de servicios sensibles a la latencia, como el streaming multimedia, ya que muchas redes de proveedores recientes se han construido con IPv6 nativo. En tales redes, el uso de servicios IPv4 genera latencia (y costes) adicionales.

Al aprovechar el IPv6 dentro del vRack, los usuarios de OVHcloud pueden disfrutar de un entorno de red más seguro, eficiente y escalable, listo para satisfacer las exigencias de los usos modernos de Internet.

## Requisitos

- Un servicio [vRack](/links/network/vrack) activo en su cuenta
- Un [servidor compatible con vRack](/links/network/vrack) conectado a su red vRack

<!-- CP-NAV-START:network-vrack -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [vRack](/links/control-panel/network-vrack)
- **Ruta de navegación:** `Network`{.action} > `Red privada vRack`{.action}

---
<!-- CP-NAV-END:network-vrack -->

> [!warning]
> Esta funcionalidad puede estar limitada o no disponible en los servidores de [la gama **Eco**](/links/bare-metal/eco-about).
>
> Consulte nuestra [página de comparación de servidores Eco](/links/bare-metal/eco-compare) para obtener más información.

## Procedimiento

### Obtención de un nuevo bloque Additional IPv6

Al solicitar un nuevo bloque Additional IPv6, es importante tener en cuenta que la asignación es regional. Esto significa que el bloque IPv6 que reciba estará vinculado a una región específica, que define el punto de entrada del tráfico público en su red vRack (es decir, la ubicación de la pasarela).

/// details | Solicitar un nuevo bloque Additional IPv6

Puede contratar su nuevo bloque IPv6 adicional [aquí](https://www.ovh.com/manager/#/dedicated/ip/agoraOrder/ipv6?catalogName=ip).

![página de configuración](images/500.png){.thumbnail}

A continuación, siga las instrucciones paso a paso.

Su Additional IPv6 estará disponible en la página de configuración de su vRack.

///

### Configurar la IPv6 en un vRack (modo básico)

En esta sección presentamos la configuración básica de IPv6 para sus hosts conectados al vRack.

![Configurar una IPv6 en un vRack](images/20240418-03.png){.thumbnail}

El ejemplo anterior muestra dos hosts con sus interfaces del lado del vRack configuradas con direcciones públicas IPv6. Un host tiene una configuración manual, mientras que otro tiene una dirección IP asignada automáticamente mediante SLAAC. Todas las direcciones IP pertenecen a la primera subred /64 de un bloque /56 de Additional IPv6 públicas dado. Ambos utilizan la interfaz vRack para la conectividad IPv6 pública.

La pasarela predeterminada para la primera subred /64 (la que está puenteada) es la primera dirección del bloque /56. En este ejemplo, la pasarela es `2001:41d0:abcd:ef00::1`. Esta se distribuye mediante SLAAC, pero debe configurarse manualmente (como ruta predeterminada) si el SLAAC está desactivado (consulte la sección **Configuración IP estática** a continuación).

/// details | A través del área de cliente de OVHcloud

![gestión del vRack](images/700.png){.thumbnail}

En la parte izquierda se muestran las opciones disponibles (servicios elegibles para configurar).

En la parte derecha puede ver lo que ya está configurado en su vRack.

Seleccione su nueva Additional IPv6 y añádala a su vRack.

![selección del vRack](images/701.png){.thumbnail}

Su nueva Additional IPv6 ya está añadida a su vRack.

### Configuración IP estática

Una vez que el bloque Additional IPv6 /56 se asigna a una red vRack, la primera subred /64 queda puenteada con él.

Esto significa que puede utilizar fácilmente estas IP en sus hosts con una configuración IP estática en las interfaces vRack (consulte la siguiente sección para ver un ejemplo de configuración en el lado del host).

### Configuración IP automática (SLAAC)

Para simplificar el direccionamiento IP dentro de su red, puede utilizar SLAAC. Puede activarse únicamente por subred puenteada, y también puede activarse para la primera subred /64 de su bloque (que siempre está puenteada) en cualquier momento mediante este botón deslizante:

![activar SLAAC](images/702.png){.thumbnail}

No olvide configurar SLAAC en su máquina host.

///


/// details | A través de la APIv6 (método alternativo)

Cuando solicita una IPv6 adicional, esta se asigna automáticamente a su vRack.

Si ha eliminado esta nueva Additional IPv6 de su vRack, puede reasignarla utilizando el siguiente método POST:

> [!api]
>
> @api {v1} /vrack POST /vrack/{serviceName}/ipv6
>

Como en el ejemplo siguiente:

![api post add block](images/post-ipv6.png){.thumbnail}

Utilice la siguiente llamada para verificar que la IPv6 ha sido asignada:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}
>

Como en el ejemplo siguiente:

![GET ipv6 call](images/20240418-04.png){.thumbnail}

Ahora vemos nuestro bloque configurado con un vRack. El siguiente paso es configurar el host o los hosts virtuales.

### Configuración IP estática

Una vez que el bloque Additional IPv6 /56 se asigna a una red vRack, la primera subred /64 queda puenteada con él. Esto significa que puede utilizar fácilmente estas IP en sus hosts.

Verifiquemos qué subredes están puenteadas:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange
>

Como en el ejemplo siguiente:

![GET subrange bridged into your vRack](images/20240418-05.png){.thumbnail}

Para obtener más detalles, utilice la siguiente llamada:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
>

Como en el ejemplo siguiente:

![GET subrange bridged into your vRack](images/20240418-06.png){.thumbnail}

Tenga en cuenta que la configuración IP automática (SLAAC) está desactivada por defecto.

### Configuración IP automática (SLAAC)

Para simplificar el direccionamiento IP dentro de su red, puede utilizar SLAAC. Puede activarse únicamente por subred puenteada y puede activarse con el siguiente método PUT:

> [!api]
>
> @api {v1} /vrack PUT /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
>

Como en el ejemplo siguiente:

![API call POST enable SLAAC](images/20240418-07.png){.thumbnail}

No olvide configurar SLAAC en su máquina host.

///

### Gestionar el ancho de banda de las IP públicas en el vRack

Por defecto, los bloques de Additional IP enrutados a través de un vRack disponen de un ancho de banda público estándar de 5 Gbps en Europa y América del Norte, o de 100 Mbps en las regiones APAC. Para más información sobre las opciones disponibles, consulte las opciones de enrutamiento público en nuestra [página del producto vRack](/links/network/vrack).

Para responder al aumento de la carga de la infraestructura y a las necesidades de los servicios con tráfico elevado, OVHcloud ofrece opciones de ancho de banda de pago. Tenga en cuenta que estas opciones se aplican **por vRack y por región**. Dado que las Additional IP están vinculadas a una región específica, cualquier modificación del ancho de banda afectará a todas las direcciones (IPv4 e IPv6) enrutadas hacia ese vRack en la región correspondiente.

/// details | Al contratar una Additional IP

#### Elegir el ancho de banda público al contratar

Puede modificar el ancho de banda predeterminado en el momento de contratar un nuevo bloque de Additional IP, siempre que se seleccione una red vRack como servicio backend.

Para contratar un nuevo bloque de Additional IPv6:

- Conéctese al [área de cliente de OVHcloud](/links/manager).
- En la barra lateral izquierda, acceda a la sección `Network`{.action}.
- Seleccione `Direcciones IP Públicas`{.action}.
- Haga clic en el botón `Contratar IPs`{.action} en la parte superior de la página.
- Elija la versión de la IP y, a continuación, el vRack al que se asociará la Additional IP.
- Seleccione la región de su Additional IP.
- Elija el ancho de banda público que desea aplicar a su vRack para esa región.
- Configure las demás opciones según sus necesidades y finalice el pedido.

///

/// details | Desde la página de gestión del vRack

#### Modificar el ancho de banda público desde la página de gestión

Para los bloques de Additional IP ya asociados a un vRack, el ancho de banda se gestiona directamente desde la página de configuración del servicio.

Para acceder a la interfaz de gestión:

- En la barra lateral izquierda del área de cliente, abra `Network`{.action}.
- Seleccione `Red privada vRack`{.action}.
- En la columna "IP pública y ancho de banda", haga clic en el botón `Gestionar`{.action} correspondiente al vRack deseado.

La interfaz de gestión se divide en dos pestañas:

- **Todos los servicios asociados**: Por el momento, redirige a la página de gestión clásica del vRack. Próximamente, esta pestaña listará de forma optimizada todos los productos (servidores, proyectos Cloud, etc.) vinculados al vRack.
- **Conectividad IP pública**: Permite gestionar las opciones de enrutamiento público de su vRack, incluido el ancho de banda.

Para modificar el ancho de banda:

- Vaya a la pestaña `Conectividad IP pública`{.action}.
- La interfaz muestra ventanas de gestión por región (p. ej.: `eu-west-par`) asociadas al vRack, con la lista de IP asociadas.
- En el recuadro de la región correspondiente, haga clic en `Modificar el ancho de banda`{.action}.
- Seleccione la opción deseada en el panel de la derecha y haga clic en `Contratar`{.action} para validar.
- Una vez efectuado el pago, el nuevo ancho de banda estará activo en su vRack en la región elegida en pocos minutos.

> [!primary]
>
> El primer mes suscrito se factura de forma proporcional a los días restantes. La tarifa completa se aplicará en el siguiente ciclo de facturación.
>

El aumento del ancho de banda se aplicará a todas las direcciones IP de esa región para el vRack seleccionado.

///

#### Comandos en el host

/// details | Configuración IP estática

En una configuración básica, puede querer configurar una dirección IP y el enrutamiento manualmente. Este también es el método recomendado cuando su máquina está configurada como enrutador (consulte la sección [configurar la subred enrutada](#routedmode)) y el modo ipv6.forwarding está activado.

En primer lugar, añadamos una dirección IP en la interfaz vRack (en nuestro ejemplo, "eth1"):

```bash
$ sudo ip address add 2001:41d0:abcd:ef00::2/64 dev eth1
```

(Tenga en cuenta que la primera dirección IP de un bloque, en este caso `2001:41d0:abcd:ef00::1/64`, es la dirección de la pasarela y no debe utilizarse para el direccionamiento de hosts).

Si desea utilizar la interfaz vRack como interfaz principal para el tráfico IPv6, la ruta predeterminada puede configurarse de la siguiente manera:

```bash
$ sudo ip -6 route add default via 2001:41d0:abcd:ef00::1/64 dev eth1
```

Por último, active la interfaz (y compruebe la IP configurada en ella):

```bash
$ sudo ip link set up dev eth1
$ ip -6 addr list dev eth1
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet6 2001:41d0:abcd:ef00::2/64 scope global static
```

///

/// details | Configuración IP automática (SLAAC)

Para utilizar la configuración automática, asegúrese de haber configurado su interfaz de la siguiente manera:

En primer lugar, permitamos a nuestro host aceptar los anuncios de enrutamiento (para la configuración automática) en la interfaz vRack (en nuestro ejemplo "eth1"):

```bash
$ sudo sysctl -w net.ipv6.conf.eth1.accept_ra=1
```

Es importante tener en cuenta que esta configuración no funcionará si el modo ipv6.forwarding está activado en su sistema. En ese caso, consulte la [Configuración IP automática para una subred enrutada](#host-side) para obtener más detalles.


A continuación, active la interfaz:

```bash
$ sudo ip link set up dev eth1
$ ip -6 addr list dev eth1
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet6 2001:41d0:abcd:ef00:fe34:97ff:feb0:c166/64 scope global dynamic mngtmpaddr
       valid_lft 2322122sec preferred_lft 334922sec
```

Tras un breve período de tiempo (el tiempo de propagación de la configuración), debería aparecer en la interfaz una dirección IPv6 específica (con los flags *global* y *dynamic*).

///

#### Verificación de la instalación

/// details | Local

La prueba más sencilla es realizar un ping hacia una dirección IP local desde un host:

```bash
debian@host:~$ ping 2001:41d0:900:2100:fe34:97ff:feb0:c166
PING 2001:41d0:900:2100:fe34:97ff:feb0:c166(2001:41d0:900:2100:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=1 ttl=64 time=0.043 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=2 ttl=64 time=0.034 ms
```

///

/// details | Remoto

A continuación, verifiquemos la conectividad desde una dirección remota:

```bash
ubuntu@remote-test:~$ ping 2001:41d0:900:2100:fe34:97ff:feb0:c166
PING 2001:41d0:900:2100:fe34:97ff:feb0:c166(2001:41d0:900:2100:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=1 ttl=55 time=7.23 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=2 ttl=55 time=6.90 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=3 ttl=55 time=6.92 ms
```

///

### Configurar una IPv6 en un vRack para el modo de enrutamiento <a name="routedmode"></a>

En esta sección presentamos una configuración IPv6 más avanzada, donde los hosts conectados al vRack actúan como enrutadores para las máquinas virtuales alojadas. Estas VMs disponen de subredes delegadas procedentes del bloque IPv6 principal (representadas en color naranja en el esquema siguiente).

![Configurar una IPv6 en un vRack para el modo de enrutamiento](images/routed-mode-20240513.png){.thumbnail}

El flujo de tráfico es el siguiente: el tráfico entrante hacia una VM determinada (con la subred especificada) se enruta a través del vRack del cliente, primero hacia un host específico (con una dirección de siguiente salto), y luego a través de un enlace local (o vSwitch - enlace negro fd00::/64 en el diagrama) hasta la máquina virtual concreta.
El tráfico que retorna de dicha VM debe utilizar la ruta predeterminada a través de la primera parte del enlace local (el negro, fd00::1), y luego la ruta (posiblemente predeterminada) del host hacia su pasarela.

Para la definición de una subred enrutada, se puede utilizar cualquier tamaño de prefijo entre /57 y /64.

La pasarela predeterminada del host es la primera dirección del bloque /56, que en este ejemplo es: `2001:41d0:abcd:ef00::1`. Las pasarelas predeterminadas utilizadas por las VMs son las direcciones configuradas del host (aquí fd00::1).

#### Definir una subred enrutada

/// details | Área de cliente de OVHcloud

Después de añadir la Additional IP a su vRack, puede gestionar la subred enrutada haciendo clic en el botón `Añadir una subred`{.action}.

![selección vRack](images/600.png){.thumbnail}

Para crear una subred enrutada, primero debemos definir:

- **subred en notación CIDR** (tamaño comprendido entre /57 y /64)
- **dirección de siguiente salto** (dirección IPv6 del host)

Tenga en cuenta que una subred dada no puede solaparse con ninguna otra subred definida, y que la dirección del siguiente salto debe pertenecer a la primera parte (subred /64 puenteada) de su prefijo Additional IPv6.

![continuar](images/800.png){.thumbnail}

La subred enrutada `2001:41d0:abcd::ef10::/60` es accesible a través del siguiente salto `2001:41d0:abcd::ef00::2`.

![continuar](images/801.png){.thumbnail}

///

/// details | Comandos APIv6

Para crear una subred enrutada, primero debemos definir:

- **subred en notación CIDR** (tamaño comprendido entre /57 y /64)
- **dirección de siguiente salto** (por tanto, la dirección IPv6 del host)

Tenga en cuenta que una subred dada no puede solaparse con ninguna otra subred definida, y que la dirección del siguiente salto debe pertenecer a la primera parte (subred /64 puenteada) de su prefijo Additional IPv6.

El ejemplo siguiente muestra cómo definir una subred de este tipo:

![continuar](images/20240418-02.png){.thumbnail}

Aquí hemos definido la subred enrutada `2001:41d0:abcd:ef10::/60`, que será delegada a la VM alojada en la dirección `2001:41d0:abcd:ef00::2`.

///

#### Configuración del host <a name="host-side"></a>

/// details | Configuración IP estática de un host (recomendado)

Cuando aloje VMs, le recomendamos encarecidamente utilizar una configuración estática en su host.

Configure una dirección IPv6, active la interfaz y (opcionalmente) añada la ruta predeterminada en la interfaz vRack:

```bash
$ sudo ip addr add 2001:41d0:abcd:ef00::2/64 dev eth1
$ sudo ip link set dev eth1 up
$ sudo ip -6 route add default via 2001:41d0:abcd:ef00::1 dev eth1
```

///

/// details | Configuración IP automática (SLAAC) para un host

En algunos casos, puede querer configurar sus interfaces con SLAAC y el reenvío de IP juntos.

Tenga en cuenta que esto conlleva riesgos adicionales (como la pérdida de acceso no solo al host sino también a todas las VMs) y no es recomendable.

Verificación de que el reenvío IPv6 está activado:

```bash
$ sudo sysctl -w net.ipv6.conf.all.forwarding=1
```

Configuración de los anuncios de enrutamiento para que sean aceptados (en la interfaz vRack eth1 en nuestro ejemplo):

```bash
$ sudo sysctl -w net.ipv6.conf.eth1.accept_ra=2
```

///

/// details | Configuración de la subred enrutada en un host y dentro de una máquina virtual

Para garantizar que nuestro host sepa cómo gestionar los paquetes dirigidos a la nueva subred enrutada (que estará en una VM), debemos añadir una ruta específica para ella.

En nuestro ejemplo, se trata del enlace vEth con la dirección fd00::2/64, dentro de una VM que utilizaremos para el enrutamiento.

Tenga en cuenta que esto es específico del hipervisor instalado (puede tratarse de vSwitch o interfaces vEth). Consulte la guía de configuración de red específica del hipervisor para esta configuración.

```bash
$ sudo ip -6 route add 2001:41d0:abcd:ef10::/60 via fd00::2
```

///


/// details | Configuración de una subred enrutada dentro de una VM

De nuevo, tenga en cuenta que el enlace utilizado entre el host y las VMs es específico del hipervisor instalado (puede tratarse de vSwitch o interfaces vEth). Consulte las guías de configuración de red de su hipervisor para esta configuración.

Añada el bloque de IP enrutadas dentro de una VM para garantizar que puede aceptar paquetes:

```bash
debian@vm-1:~$ sudo ip address add 2001:41d0:abcd:ef10::1/60 dev lo
```

Añada la ruta predeterminada en una VM para garantizar que el tráfico pueda salir de ella:

```bash
debian@vm-1:~$ sudo ip -6 route add default via fd00::1
```

///


#### Verificación de la configuración

/// details | Local, en un host

Realice un ping desde el host hacia el contenedor (utilizando el enlace local):

```bash
debian@host:~$ ping fd00::2
PING fd00::2(fd00::2) 56 data bytes
64 bytes from fd00::2: icmp_seq=1 ttl=64 time=0.053 ms
64 bytes from fd00::2: icmp_seq=2 ttl=64 time=0.071 ms
```

Realice un ping desde el host hacia el contenedor (utilizando la subred enrutada):

```bash
debian@host:~$ ping 2001:41d0:abcd:ef10::1
PING 2001:41d0:abcd:ef10::1(2001:41d0:abcd:ef10::1) 56 data bytes
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=1 ttl=64 time=0.054 ms
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=2 ttl=64 time=0.073 ms
```

Compruebe la ruta hacia nuestra subred /60 en un host:

```bash
debian@host:~$ ip -6 route get 2001:41d0:abcd:ef10::1
2001:41d0:abcd:ef10::1 from :: via fd00::2 dev veth1a src fd00::1 metric 1024 pref medium
```

///

/// details | Local, en una VM

En primer lugar, compruebe la tabla de enrutamiento:

```bash
debian@vm-1:~$ ip -6 route show
2001:41d0:abcd:ef10::/60 dev lo proto kernel metric 256 pref medium
fd00::/64 dev veth1b proto kernel metric 256 pref medium
default via fd00::1 dev veth1b src 2001:41d0:abcd:ef10::1 metric 1024 pref medium
```

Realice un ping hacia la interfaz de enlace local del host:

```bash
debian@vm-1:~$ ping fd00::1
PING fd00::1(fd00::1) 56 data bytes
64 bytes from fd00::1: icmp_seq=1 ttl=64 time=0.051 ms
64 bytes from fd00::1: icmp_seq=2 ttl=64 time=0.070 ms
```

Realice un ping hacia la interfaz global del host:

```bash
debian@vm-1:~$ ping 2001:41d0:abcd:ef00::2
PING 2001:41d0:abcd:ef00::2(2001:41d0:abcd:ef00::2) 56 data bytes
64 bytes from 2001:41d0:abcd:ef00::2: icmp_seq=1 ttl=64 time=0.050 ms
64 bytes from 2001:41d0:abcd:ef00::2: icmp_seq=2 ttl=64 time=0.080 ms
```

Por último, realice un ping hacia una dirección IPv6 externa desde una VM:

```bash
debian@vm-1:~$ ping 2001:41d0:242:d300::
PING 2001:41d0:242:d300::(2001:41d0:242:d300::) 56 data bytes
64 bytes from 2001:41d0:242:d300::: icmp_seq=1 ttl=57 time=0.388 ms
64 bytes from 2001:41d0:242:d300::: icmp_seq=2 ttl=57 time=0.417 ms
```

O bien, utilizando un nombre de dominio:

```bash
debian@vm-1:~$ ping -6 proof.ovh.net
PING proof.ovh.net(2001:41d0:242:d300:: (2001:41d0:242:d300::)) 56 data bytes
64 bytes from 2001:41d0:242:d300:: (2001:41d0:242:d300::): icmp_seq=1 ttl=57 time=0.411 ms
64 bytes from 2001:41d0:242:d300:: (2001:41d0:242:d300::): icmp_seq=2 ttl=57 time=0.415 ms
```

///

/// details | Desde un host remoto

Verifiquemos la conectividad con nuestra VM desde fuera de la red de OVHcloud:

```bash
ubuntu@remote-test:~$ ping 2001:41d0:abcd:ef10::1
PING 2001:41d0:abcd:ef10::1(2001:41d0:abcd:ef10::1) 56 data bytes
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=1 ttl=55 time=5.84 ms
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=2 ttl=55 time=2.98 ms
```

Y realice un traceroute desde un host remoto (en Internet):

```bash
ubuntu@remote-test:~$ mtr -rc1 2001:41d0:abcd:ef10::1
Start: 2024-03-26T09:26:45+0000
HOST: remote-test                  				Loss%   Snt   Last   Avg  Best  Wrst StDev
...
...
  9.|-- 2001:41d0:abcd::2:5d        				0.0%     1    1.9   1.9   1.9   1.9   0.0
 10.|-- 2001:41d0:abcd:ef00::2      				0.0%     1    2.2   2.2   2.2   2.2   0.0
 11.|-- 2001:41d0:abcd:ef10::1      				0.0%     1    2.2   2.2   2.2   2.2   0.0
```

En este ejemplo:

- salto 10 - Dirección IP del host
- salto 11 - Dirección IP de la VM

///

## Ubicaciones multirregión vs. vRack global

La tecnología vRack de OVHcloud permite a las empresas conectar servidores en diferentes ubicaciones, como si estuvieran situados en el mismo centro de datos.
Por otro lado, los servicios como Additional IPv6 son regionales, lo que significa que su funcionamiento está vinculado a una ubicación concreta.

A continuación se presenta una arquitectura con fines didácticos con dos regiones diferentes y bloques Additional IPv6 distintos anunciados desde cada una de ellas. Además, se muestra un host configurado con direcciones IP de ambas redes y un ejemplo de ruta subóptima: un host en una región con una dirección IPv6 anunciada en otra región:

![image](images/20240418-08.png){.thumbnail}

Tenga en cuenta que en tales configuraciones (con Additional IPv6 procedentes de más de una región), el SLAAC **debe estar desactivado en todo el vRack** (ya que esto puede provocar resultados impredecibles y pérdidas aleatorias de conectividad).

### Ventajas

- **Conectividad mejorada:** Al aprovechar una red vRack junto con bloques de IP públicas enrutados en múltiples ubicaciones, las empresas pueden garantizar una comunicación fluida en todo el mundo, independientemente de las ubicaciones físicas de los servidores backend.
- **Migración a la nube:** La tecnología vRack puede facilitar enormemente los primeros pasos hacia una estrategia organizacional de "migración a la nube", desbloqueando algunas aplicaciones heredadas que todavía requieren comunicación de red local.

### Riesgos y consideraciones

- **Sin compatibilidad con SLAAC en configuraciones con múltiples ubicaciones:** Cuando hay más de una ubicación implicada en el enrutamiento del tráfico IP público (IPv4 e IPv6) en el mismo vRack, la configuración automática de direcciones sin estado (SLAAC) **no debe utilizarse**. Como ejemplo de tal situación, consideremos hosts existentes que utilizan direcciones IPv4. Estos hosts son reconfigurados automáticamente por SLAAC con una pasarela IPv6 configurada desde otra región. Junto con la priorización de IPv6 sobre IPv4 por parte de algunos sistemas operativos, esta situación puede provocar un enrutamiento subóptimo o incluso una pérdida total de conectividad para dichos hosts.

## Limitaciones conocidas

Comprender las restricciones relacionadas con el uso de **Additional IPv6** en el entorno **vRack** es esencial para una planificación eficaz de la red. Estas son las principales limitaciones a tener en cuenta:

- **Additional IPv6 solo está disponible con vRack**: Tenga en cuenta que las direcciones Additional IPv6 solo pueden configurarse con backends conectados al vRack.
- **Limitaciones del SLAAC en configuraciones con múltiples ubicaciones**: La configuración automática de direcciones sin estado (SLAAC) no es compatible cuando hay tráfico IP público (IPv6 e IPv4) enrutado en el vRack en múltiples regiones.
- **Hasta 128 hosts dentro de la subred puenteada**: Puede utilizar hasta 128 direcciones IP directamente en el vRack.
- **Hasta 128 rutas de siguiente salto**: Puede utilizar hasta 128 rutas para subredes enrutadas dentro de un vRack.
- **Límite de ancho de banda público**: El tráfico saliente de OVHcloud hacia Internet está limitado a 5 Gbps por región.
- **Límites de asignación de bloques IPv6**: Un único bloque Additional IPv6 por vRack en una región. Máximo de 3 bloques (/56) por ubicación de región.
- **Movilidad de los bloques Additional IPv6**: Debido al diseño jerárquico del espacio de direcciones IPv6, los bloques Additional IPv6 son específicos de cada región. Esto significa que los bloques no pueden transferirse entre regiones, aunque sí pueden reasignarse a cualquier backend conectado al vRack.
- **Sin compatibilidad directa con VLAN 802.1Q en el vRack con Additional IPv6**: La configuración solo puede realizarse con la VLAN nativa de su red vRack. Para la transmisión de paquetes dentro de una VLAN específica (en un vRack), será necesario un host dedicado en el lado del cliente.
- **Por el momento, el enrutamiento de Additional IPv6 en el vRack no es compatible con las regiones APAC.**

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).
