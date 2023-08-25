---
title: 'Configurar un NIC para el servicio OVHcloud Link Aggregation en Debian 9'
excerpt: 'Activar el servicio OVHcloud Link Aggregation en un servidor Debian 9'
updated: 2022-01-07
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>


## Objetivo

La tecnología OVHcloud Link Aggregation (OLA) está diseñada para aumentar la disponibilidad de su servidor y mejorar la eficiencia de sus conexiones de red. En solo unos clics, es posible añadir sus tarjetas de red y hacer que sus enlaces de red sean redundantes. De este modo, si un enlace se cae, el tráfico se redirige automáticamente hacia otro enlace disponible.

**Esta guía explica cómo conectar sus NIC (Network Interface Controller) para utilizarlos con el servicio OLA en Debian 9.**

## Requisitos

- [Configurar un NIC para el servicio OVHcloud Link Aggregation en el área de cliente de OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager){.external}.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

> [!warning]
>
> Es necesario descargar el paquete ifenslave en el servidor antes de activar el servicio OLA en el área de cliente de OVHcloud o en la API. Para ello, utilice el siguiente comando:
>
> ```
> apt install ifenslave
> ```
>

## Procedimiento

Nuestros NIC en OLA tienen una configuración privada-privada, por lo que no es posible acceder al servidor por SSH. Así pues, es necesario utilizar la herramienta IPMI para acceder al servidor.
<br>Para ello, en primer lugar, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). En la pestaña `Bare Metal Cloud`{.action}, haga clic en `Servidores dedicados`{.action} y seleccione el servidor. A continuación, abra la pestaña `IPMI`{.action} (1).

Haga clic en el botón `Desde un applet Java (KVM)`{.action} (2).

![remote_kvm](images/remote_kvm2022.png){.thumbnail}

Se descargará un programa JNLP. Abra el programa para acceder a IPMI e introduzca las claves asociadas al servidor.

Por defecto, al utilizar una plantilla de OVHcloud, el nombre asignado de los NIC será o bien *ethX* o *enoX*. Si no utiliza una plantilla de OVHcloud, puede consultar el nombre de las interfaces utilizando el siguiente comando:

```bash
ip a
```

> [!primary]
>
> Este comando mostrará diversas interfaces. Si tiene dificultad para determinar qué interfaces corresponden a sus NIC físicos, la primera interfaz todavía tendrá la dirección de la IP pública del servidor asignada por defecto.
>

Una vez que haya determinado el nombre de los dos NIC, ya puede asociar los NIC en el sistema operativo. Para ello, cree el siguiente archivo de configuración en el editor de texto que desee:

```bash
vi /etc/network/interfaces
```

Se abrirá un archivo de texto vacío. Para configurar la interfaz de enlace, introduzca el siguiente texto al final del archivo:

```bash
auto bond0
  iface bond0 inet static
  address 10.0.0.1/24
  bond-mode 802.3ad
  bond-slaves eno1 eno2
  bond-miimon 100
  bond-downdelay 200
  bond-lacp-rate 1
  bond-xmit_hash_policy layer2+3

  up ip -6 addr add fc10:0000:0000:0001::/64 dev bond0
```

> [!primary]
>
> Añada la última línea de comando si piensa configurar una red privada a través de IPv6.
>

Por último, reinicie el servicio de red utilizando el siguiente comando:

```bash
systemctl restart networking
```

Este reinicio puede tardar unos minutos ya que se está creando la interfaz de enlace.  Para comprobar que el enlace funciona correctamente, haga ping en otro servidor en el mismo vRack. Si funciona, ha configurado el enlace correctamente. En caso contrario, compruebe que la configuración es correcta o reinicie el servidor.

## Más información

[Configurar el servicio OVHcloud Link Aggregation desde el área de cliente de OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Configurar un NIC para el servicio OVHcloud Link Aggregation en CentOS 7](/pages/bare_metal_cloud/dedicated_servers/ola-enable-centos7)

[Configurar un NIC para el servicio OVHcloud Link Aggregation en Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
