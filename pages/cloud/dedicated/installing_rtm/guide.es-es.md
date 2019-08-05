---
title: 'Instalar Real Time Monitoring (RTM)'
slug: instalar-rtm
excerpt: 'Cómo instalar Real Time Monitoring en Linux o Windows'
section: 'Diagnóstico y modo de rescate'
---

**Última actualización: 01/08/2019**

## Objetivo

Real Time Monitoring (RTM) permite supervisar parcialmente un servidor y su actividad. Permite consultar en el área de cliente información sobre la CPU, la memoria RAM, las particiones de disco, los puertos abiertos... pero para ello necesario haber instalado previamente el paquete RTM.

**Esta guía explica cómo instalar RTM en Linux o Windows.**

## Requisitos

- Estar conectado por SSH (o a través de una interfaz gráfica) al servidor Linux (con acceso root).
- En servidores Windows, estar conectado al escritorio remoto (con acceso de administrador).
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

Una vez que haya instalado RTM desde el área de cliente, podrá supervisar su servidor en la sección `Dedicado`{.action}. En la página principal del servidor, en **Real Time Monitoring**, verá la información de monitorización.

![Real Time Monitoring](images/rtm.png){.thumbnail}

> [!primary]
>
> Algunas restricciones del firewall podrían impedir la supervisión de la infraestructura, aunque haya instalado RTM. Por lo tanto, no olvide autorizar el acceso al servidor de las IP de monitorización de OVH. En [esta guía](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external} encontrará más información.
> 

### En Linux
RTM recoge continuamente información de los servidores dedicados sobre la CPU, la RAM, los discos, el RAID y el hardware.


#### Componentes

##### Beamium

https://github.com/ovh/beamium

Beamium recopila las métricas de los terminales HTTP, tales como `http://127.0.0.1:9100/metrics`, y es compatible con los formatos Prometheus Sensision. 

Una vez implementado, Beamium puede filtrar y transferir los datos hacia una plataforma Warp 10™ Time Series. Al recibir las métricas, utiliza DFO (Disk Fail Over) para evitar posibles pérdidas causadas por problemas de red o indisponibilidad del servicio.

Beamium está escrito en Rust para garantizar su eficacia, ligereza y buen rendimiento.

Ejemplo de configuración:

```sh
# noderig endpoint to fetch
scrapers:
  noderig:
    url: http://127.0.0.1:9100/metrics
    format: sensision
    period: 60000

# Warp10 platform to send data
sinks:
  metrics:
    url: https://rtm.ovh.net/
    token: 526873a6b912637ee4c44b525413
    Size: 1000000
    selector: (os|rtm).*
    ttl: 60

labels:
  host: hostname
  host_type: you can add tag for server and retreive it in grafana host list

parameters:
  source-dir: /opt/beamium/sources
  sink-dir: /opt/beamium/sinks
  log-level: 1
  scan-period: 60000
  log-file: /var/log/beamium/beamium.log
```
El archivo de configuración se cumplimentará automáticamente una vez finalizada la instalación.

##### Noderig

https://github.com/ovh/noderig

Noderig recopila las métricas del sistema operativo y las expone a través de una URL HTTP (http://127.0.0.1:9100/metrics). Cada recopilador se puede configurar fácilmente mediante un simple control deslizante.

Métricas Noderig:

* CPU
* Memoria
* Carga
* Disco
* Red
* Colectores externos

Ejemplo de configuración:

```sh
cpu: 1
mem: 1
load: 2
disk: 2
net: 2
net-opts:
  interfaces:
    - eth0
    - eth1
period: 60000
collectors: /opt/noderig
```

##### Binarios RTM

**rtmHardware**:

Recopila información sobre el hardware, como la placa base, los periféricos PCI o la salud del disco, así como sobre el software, como la versión del núcleo o de la BIOS.

**rtmHourly**:

Recopila información sobre los procesos que más consumen, los puertos abiertos, el número de procesos actuales...

**rtmRaidCheck**:

Comprueba la salud del RAID (en su caso).

### Instalar RTM en Linux automáticamente

Una vez conectado al servidor por SSH, ejecute el siguiente comando:

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```
> [!primary]
> 
> Este procedimiento de instalación podría no funcionar en su distribución (en función de determinadas dependencias). Si ese es el caso, realice la instalación manual tal y como se indica a continuación.
>


### Instalar RTM manualmente en Debian/Ubuntu

Añada RTM y el catálogo de métricas en Debian (no olvide sustituir `<distribution codename>` por el nombre de su distribución, por ejemplo «jessie»):
  
```sh
vi /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/debian <distribution codename> main
```

O añada RTM y el catálogo de métricas en Ubuntu (no olvide sustituir `<distribution codename>` por el nombre de su distribución, por ejemplo «xenial»):
  
```sh
vi /etc/apt/sources.list.d/rtm.list
# metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/ubuntu <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/ubuntu <distribution codename> main

```
Instale la clave del catálogo:

```sh
curl  https://last-public-ovh-rtm.snap.mirrors.ovh.net/ovh_rtm.pub | apt-key add -
curl  http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key | apt-key add -
```

Instale los paquetes RTM:

```sh
apt-get update
apt-get install ovh-rtm-metrics-toolkit
```

#### CentOS

Añada RTM y el catálogo de métricas en CentOs:

```sh
vi /etc/yum.repos.d/ovh-rtm.repo

[rtm]
name=OVH RTM RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.rtm.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
repo_gpgcheck=1
gpgkey=http://last.public.ovh.rtm.snap.mirrors.ovh.net/ovh_rtm.pub

[metrics]
name=OVH METRICS RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.metrics.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
repo_gpgcheck=1
gpgkey=http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key
```

Instale los paquetes RTM:

```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

### FreeBSD

Añada RTM y el catálogo de métricas en FreeBSD:

```sh
mkdir -p /usr/local/etc/pkg/repos 

vi /usr/local/etc/pkg/repos/OVH.conf

# OVH mirror
RTM: {
  url: "http://last.public.ovh.rtm.snap.mirrors.ovh.net/FreeBSD-pkg/${ABI}/latest",
  mirror_type: "none",
  enabled: yes
}
Metrics: {
  url: "http://last-public-ovh-metrics.snap.mirrors.ovh.net/FreeBSD-pkg/${ABI}/latest",
  mirror_type: "none",
  enabled: yes
}
```
Instale los paquetes RTM:

```sh
pkg install -y noderig beamium ovh-rtm-binaries
pkg install -y ovh-rtm-metrics-toolkit
```
Inicie los servicios:

```sh
service noderig start
service beamium start
```

### Instalar RTM en Windows

El paquete RTM todavía no es compatible con Windows (próximamente).

## Más información

[Direcciones IP de monitorización de OVH](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external}

[Visualizar los datos](https://docs.ovh.com/gb/en/metrics/usecase-visualize/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.