---
title: 'Instalar Real Time Monitoring (RTM)'
slug: instalar-rtm
excerpt: 'Cómo instalar Real Time Monitoring en Linux o Windows'
section: 'Diagnóstico y modo de rescate'
---

**Última actualización: 24/3/2020**

## Objetivo

El servicio Real Time Monitoring (RTM) le permite supervisar parcialmente su servidor y la actividad de las CPU, las memorias RAM, las particiones de disco, etc. Para poder mostrar esta información directamente en su área de cliente de OVHcloud, es necesario instalar previamente el paquete RTM en su servidor.

**Esta guía explica cómo instalar RTM en Linux.**

## Requisitos

- Tener acceso al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- Tener acceso root al servidor por SSH (o por interfaz gráfica de usuario)


## Procedimiento

> [!primary]
>
> Algunas restricciones del firewall podrían impedir la supervisión de la infraestructura, aunque haya instalado RTM. Por lo tanto, no olvide autorizar el acceso al servidor de las IP de monitorización de OVHcloud. En [esta guía](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh) encontrará más información.
> 

### RTM en Linux

#### Componentes

Al instalarlo en los servidores dedicados, el servicio RTM recopila información en tiempo real sobre la CPU, la RAM, los discos, el RAID y el hardware. A continuación, encontrará más información sobre los componentes que se utilizan:

##### Beamium

https://github.com/ovh/beamium

Beamium recopila las métricas de los terminales HTTP, tales como _http://127.0.0.1:9100/metrics_, y es compatible con los formatos Prometheus Sensision. 

Una vez implementado, Beamium puede filtrar y transferir los datos a una plataforma Warp 10™ Time Series. Una vez recibe las métricas, utiliza DFO (Disk Failover) para evitar posibles pérdidas por problemas de red o indisponibilidad del servicio.

Beamium está escrito en Rust para garantizar eficacia, un consumo de recursos bajo control y alto rendimiento.

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
    Size : 1000000
    selector: (os|rtm).*
    ttl: 60

labels:
  host: hostname
  host_type: you can add tag for server and retrieve it in grafana host list

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

- Recopila información sobre el hardware: la placa base, los periféricos PCI, la salud del disco, etc. También recopila información sobre el software, como la versión del núcleo o de la BIOS.

**rtmHourly**:

- Recopila información sobre los procesos principales, los puertos abiertos y el número de procesos en curso.

**rtmRaidCheck**:

- Verifica la salud del RAID (si está disponible).

### Instalar RTM de forma automática

Una vez conectado a su servidor por SSH, ejecute el siguiente comando:

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```
> [!primary]
> 
> Es posible que esta instalación automática no funcione en su distribución (dependiendo de ciertas dependencias). Si se produce un error, debe proceder a instalarlo de forma manual, siguiendo las instrucciones indicadas en las secciones siguientes:
>

### Instalar RTM de forma manual

#### Instalación manual en Debian/Ubuntu


##### Paso 1: Añadir los repositorios OVHcloud

- utilizando **add-apt-repository**

```sh
#metrics repo
add-apt-repository "deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/$(lsb_release --id --short | tr 'A-Z' 'a-z') $(lsb_release --codename --short) main"
# rtm repo
add-apt-repository "deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/$(lsb_release --id --short | tr 'A-Z' 'a-z') $(lsb_release --codename --short) main"
```

- añadiéndolos manualmente.

Para **Debian**:

`<distribution codename>` es el nombre de su distribución (por ejemplo: "buster").
  
```sh
nano /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/debian <distribution codename> main
```

Para **Ubuntu**:

`<distribution codename>` es el nombre de su distribución (por ejemplo: "bionic").
  
```sh
nano /etc/apt/sources.list.d/rtm.list

```
Añada estas líneas y guarde el archivo:
  
```sh
# metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/ubuntu <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/ubuntu <distribution codename> main

```
> [!primary]
> 
> Tenga en cuenta que, para las distribuciones actuales, es posible que los paquetes necesarios no estén aun incluidos en los repositorios de las versiones actualizadas del sistema operativo Linux. En ese caso, debe utilizar el nombre de una versión (Ubuntu) antigua como alternativa.
>


##### Paso 2: Instalar la apt key

```sh
curl  https://last-public-ovh-rtm.snap.mirrors.ovh.net/ovh_rtm.pub | apt-key add -
curl  http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key | apt-key add -
```

##### Paso 3: Instalar los paquetes RTM

```sh
apt-get update
apt-get install ovh-rtm-metrics-toolkit
```

#### Instalación manual en CentOS

Añada el RTM y los repositorios de métricas para CentOS:

```sh
nano /etc/yum.repos.d/ovh-rtm.repo
```
Añada estas líneas y guarde el archivo:

```sh
[rtm]
name=OVH RTM RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.rtm.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
repo_gpgcheck=1
gpgcheck=0
gpgkey=http://last.public.ovh.rtm.snap.mirrors.ovh.net/ovh_rtm.pub

[metrics]
name=OVH METRICS RHEL/ CentOS $releasever - $basearch
baseurl=http://last.public.ovh.metrics.snap.mirrors.ovh.net/centos/$releasever/$basearch/Packages/
enabled=1
repo_gpgcheck=1
gpgcheck=0
gpgkey=http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key
```

Instale los paquetes RTM:

```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

#### Instalación manual en FreeBSD

Añada el RTM y los repositorios de métricas para FreeBSD:

```sh
mkdir -p /usr/local/etc/pkg/repos
nano /usr/local/etc/pkg/repos/OVH.conf
```
Añada estas líneas y guarde el archivo:

```sh
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

> [!primary]
>**RTM en Windows**
>
El paquete RTM no es actualmente compatible con los sistemas Windows. Estamos continuamente desarrollando y mejorando nuestros servidos y próximamente tendremos la opción para Windows.
>


### RTM en el área de cliente de OVHcloud

Una vez haya instalado RTM correctamente, podrá ver los datos de monitorización de su servidor en el área de cliente de OVHcloud. (Puede que sea necesario actualizar el navegador o cerrar sesión e iniciarla de nuevo). Diríjase a la sección `Servidor`{.action} y seleccione el servidor en el menú de la izquierda. En la pestaña `Información general`{.action}, deberá desplazarse hacia abajo para encontrar la información de monitorización.

![Real Time Monitoring](images/rtm_panel.png){.thumbnail}



## Más información

[Direcciones IP de monitorización de OVHcloud](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh)

[Visualizar sus datos](https://docs.ovh.com/gb/en/metrics/usecase-visualize)

[Activar y utilizar el modo de rescate](../modo_de_rescate/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.