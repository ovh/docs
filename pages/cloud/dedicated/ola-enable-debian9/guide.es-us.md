---
title: 'Configurar un NIC para el servicio OVHcloud Link Aggregation en Debian 9'
slug: ola-debian9
excerpt: 'Activar el servicio OVHcloud Link Aggregation en un servidor Debian 9'
section: 'Uso avanzado'
---

**Última actualización: 24 de octubre de 2019**

## Objetivo

La tecnología OVHcloud Link Aggregation (OLA) está diseñada para aumentar la disponibilidad de su servidor y mejorar la eficiencia de sus conexiones de red. En solo unos clics, es posible añadir sus tarjetas de red y hacer que sus enlaces de red sean redundantes. De este modo, si un enlace se cae, el tráfico se redirige automáticamente hacia otro enlace disponible. Esta guía explica cómo conectar sus NIC (Network Interface Controller) para utilizarlos con el servicio OLA en Debian 9.  

## Requisitos

[Configurar un NIC para el servicio OVHcloud Link Aggregation en el área de cliente de OVHcloud](https://docs.ovh.com/es/dedicated/ola-manager){.external}

> [!warning]
>
> Es necesario descargar el paquete ifenslave en el servidor antes de activar el servicio OLA en el área de cliente de OVHcloud o en la API. Para ello, utilice el siguiente comando:
>
> ```
> apt install ifenslave
> ```
>

## Procedimiento

Nuestros NIC en OLA tienen una configuración privada-privada, por lo que no es posible acceder al servidor por SSH. Así pues, es necesario utilizar la herramienta IPMI para acceder al servidor. Para ello, en primer lugar, acceda al [área de cliente de OVHcloud](https://www.ovh.com/manager/){.external}.  En el menú de la izquierda, seleccione el servidor que quiere configurar y, a continuación, haga clic en **IPMI**.

![remote kvm](images/remote_kvm.png){.thumbnail}

Haga clic en el botón **Desde un applet Java (KVM)**. Se descargará un programa JNLP. Abra el programa para acceder a IPMI e introduzca las claves asociadas al servidor.

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
  bond-xmit_hash_policy layer3+4

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

## Conclusiones

OVHcloud le ofrece a sus clientes la libertad y la flexibilidad necesarias para utilizar su hardware de la forma que mejor se adapta a sus necesidades. Si ha leído esta guía, debe ser capaz de configurar OVHcloud Link Aggregation (OLA) en Debian 9, para utilizar sus dos NIC como interfaces privadas vinculadas.