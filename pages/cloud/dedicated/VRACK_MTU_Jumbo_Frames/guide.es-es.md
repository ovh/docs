---
title: 'Configuración de tramas Jumbo en el vRack'
slug: 'network-jumbo'
excerpt: 'Cómo configurar Jumbo frames en el vRack'
section: 'vRack'
---

**Última actualización: 17/6/2020**

## Objetivo

Las tramas Jumbo o *Jumbo frames* son tramas Ethernet con una carga útil superior a 1500 bytes y que puede alcanzar los 9000 bytes. Su uso permite reducir el tiempo de tratamiento del enrutamiento. En el caso del vRack, su utilización ayuda a optimizar el tráfico.

**Esta guía explica cómo configurar una distribución Linux para utilizar las tramas Jumbo en el vRack.**

## Requisitos

- Tener un [vRack](https://www.ovh.es/soluciones/vrack/){.external}.
- Abrir un *shell* con permisos root.

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](https://eco.ovhcloud.com/es-es/about/).
>
> Para más información, consulte nuestra [comparativa](https://eco.ovhcloud.com/es-es/compare/).

> [!primary]
>
> El tamaño MTU debe ser idéntico en todos los hosts de una misma subred. 
>

## Procedimiento

### Configurar la MTU

```sh
ip link show | grep mtu
```

### Indicar un nuevo tamaño y probar el comando

```sh
ip link set <nombre de la interfaz> mtu 9000
```

### Hacer un cambio permanente 

Editar el archivo `/etc/network/interface` y añadir las siguientes líneas:

#### Para una interfaz gestionada por DHCP

```sh
Auto <nombre de la interfaz>

Iface <nombre de la interfaz> inet dhcp

  Pre-up /sbin/ip link set dev <nombre de la interfaz> up mtu 9000
```

#### Para una interfaz en IP fija

```sh
Auto <nombre de la interfaz>

Iface <nombre de la interfaz> inet static
  mtu 9000
```

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
