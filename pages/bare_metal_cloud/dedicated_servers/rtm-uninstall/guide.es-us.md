---
title: "Desinstalar el sistema de monitorización RTM v2"
excerpt: "Descubra cómo desinstalar el sistema de monitorización RTM en un servicio"
updated: 2023-06-20
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

El sistema de monitorización de OVHcloud RTM v2 ya está deteriorado y los depósitos de este se han eliminado. Por lo tanto, le recomendamos que desinstale el sistema de sus servicios y que elimine todos los paquetes asociados.

**Decubra cómo limpiar los paquetes de este sistema.**

## Requisitos

- Un [servidor dedicado](https://www.ovhcloud.com/es/bare-metal/) en el que se haya instalado RTM v2
- Tener acceso de administrador (*root*) a su servidor a través de SSH

## Procedimiento

Conéctese al servidor por SSH y elimine los siguientes paquetes:

### Distribuciones basadas en Debian

```bash
# apt remove ovh-rtm-binaries
# apt remove ovh-rtm-metrics-toolkit
# apt remove noderig
# apt remove beamium
```

### CentOS 7 / AlmaLinux / Rocky Linux

```bash
# yum remove ovh-rtm-binaries
# yum remove ovh-rtm-metrics-toolkit
# yum remove noderig
# yum remove beamium
```

### Fedora

```bash
# dnf remove ovh-rtm-binaries
# dnf remove ovh-rtm-metrics-toolkit
# dnf remove noderig
# dnf remove beamium
```

A continuación, elimine los repositorios.

### Debian / Ubuntu

#### Comprobar si los paquetes están instalados:**

```bash
dpkg --list | grep -E "noderig|beamium|ovh-rtm-binaries|ovh-rtm-metrics-toolkit"
```

Si la orden no devuelve ningún valor, significa que los paquetes no están instalados, puede pasar a la etapa de comprobación de repositorios. En caso contrario, puede eliminarlos utilizando el siguiente comando:

```bash
sudo apt-get remove ovh-rtm-binaries ovh-rtm-metrics-toolkit noderig beamium
```

#### Comprobar si los repositorios existen

```bash
ls /etc/apt/sources.list.d/
``` 

Si los archivos `ovh-metrics.list` y `ovh-rtm.list` no están listados, no tiene nada que hacer. En caso contrario, puede eliminarlos utilizando el siguiente comando:

```bash
rm -f /etc/apt/sources.list.d/ovh-metrics.list /etc/apt/sources.list.d/ovh-rtm.list
```

### CentOS

#### Compruebe si los paquetes están instalados

```bash
yum list installed | grep -E "noderig|beamium|ovh-rtm-binaries|ovh-rtm-metrics-toolkit"
```

Si la orden no devuelve ningún valor, significa que los paquetes no están instalados, puede pasar a la etapa de comprobación de repositorios. En caso contrario, puede eliminarlos utilizando el siguiente comando:

```bash
sudo yum remove ovh-rtm-binaries ovh-rtm-metrics-toolkit noderig beamium
```

#### Comprobar si los repositorios existen

```bash
ls /etc/yum.repos.d/
```

Si los archivos `OVH-metrics.repo` y `OVH-rtm.repo` no están listados, no tiene nada que hacer. En caso contrario, puede eliminarlos utilizando el siguiente comando: 

```bash
rm -f /etc/yum.repos.d/OVH-metrics.repo /etc/yum.repos.d/OVH-rtm.repo
```

## Más información

Si necesita formación o asistencia técnica para la implementación de nuestras soluciones, póngase en contacto con su empresa o haga clic en [este enlace](https://www.ovhcloud.com/es/professional-services/) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo Professional Services.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.