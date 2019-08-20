---
title: 'Instalar o Real Time Monitoring (RTM)'
slug: instalar-rtm
excerpt: 'Saiba como instalar o Real Time Monitoring em Linux'
section: 'Diagnóstico e Modo Rescue'
---

**Última atualização: 06/08/2019**

## Sumário

O Real Time Monitoring (RTM) permite monitorizar parcialmente um servidor e a sua atividade. Na Área de Cliente, poderá consultar informações sobre a unidade central de processamento (CPU), a memória viva (RAM), as partições de disco, as portas abertas, etc. Contudo, para as informações ficarem disponíveis, é necessário instalar o pacote RTM.

**Este manual explica como instalar o RTM em Linux.**

## Requisitos

- Deve aceder através de SSH (ou através da interface gráfica) no servidor Linux (acesso *root*).
- Deve estar conectado ao ambiente de trabalho remoto no seu servidor Windows (acesso *administrador*).
- Deve ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instruções

Depois de instalar o RTM através da Área de Cliente, poderá monitorizar o servidor na secção `Server`{.action} (“Dedicado” na interface antiga). Na página principal do seu servidor, poderá consultar as informações de monitorização em `Real Time Monitoring`:

![Real Time Monitoring](images/rtm.png){.thumbnail}

> [!primary]
>
> Algumas restrições de firewall podem impedir a monitorização da sua infraestrutura, mesmo se instalou o RTM.  Por isso, não se esqueça de autorizar o acesso ao servidor dos IP de monitorização da OVH. Poderá encontrar mais informações neste [manual](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external} (versão em inglês).
> 

### RTM em Linux
Nos servidores dedicados, o RTM recolhe de forma contínua informações sobre a CPU, a RAM, os discos, o RAID e o hardware.


#### Componentes

##### Beamium

https://github.com/ovh/beamium

Beamium recolhe as métricas dos terminais HTTP, tais como _http://127.0.0.1:9100/metrics_, e é compatível com os formatos Prometheus Sensision. 

Uma vez implementado, Beamium pode filtrar e transferir os dados para uma plataforma Warp 10™ Time Series. Ao receber as métricas, utiliza DFO (Disk Fail Over) para evitar possíveis perdas causadas por problemas de rede ou indisponibilidade do serviço.

Beamium está escrito em Rust para garantir a sua eficácia, compacidade e bom desempenho.

Exemplo de configuração:

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
  host_type: you can add tag for server and retreive it in grafana host list

parameters:
  source-dir: /opt/beamium/sources
  sink-dir: /opt/beamium/sinks
  log-level: 1
  scan-period: 60000
  log-file: /var/log/beamium/beamium.log
```
O ficheiro de configuração será automaticamente preenchido depois de finalizar a instalação.

##### Noderig

https://github.com/ovh/noderig

Noderig recolhe as métricas do sistema operativo e expõe-nas através de um URL HTTP (http://127.0.0.1:9100/metrics). Cada coletor pode ser facilmente configurado através de um simples cursor de nível

Métricas Noderig:

* CPU
* Memória
* Carga
* Disco
* Rede
* Coletores externos

Exemplo de configuração:

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

##### Rtm-binaries

**rtmHardware**:

Recolhe informações sobre o hardware, como a motherboard, os periféricos PCI ou a saúde do disco, assim como sobre o software, como a versão do núcleo ou da versão BIOS.

**rtmHourly**:

Recolhe informações sobre os processos com maior consumo, as portas abertas, o número de processos em curso.

**rtmRaidCheck**:

Verifica a saúde do RAID (se disponível).

### Instalar o RTM em Linux (automaticamente)

Uma vez conectado ao servidor por SSH, execute o seguinte comando:

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```
> [!primary]
> 
> Este procedimento de instalação pode não funcionar na sua distribuição (em função de determinadas dependências). Nesse caso, realize a instalação manual tal como descrito abaixo.
>


#### Instalação manual em Debian/Ubuntu

Adicione o RTM e o catálogo de métricas em Debian (não se esqueça de substituir `<distribution codename>` pelo nome da sua distribuição, por exemplo “jessie”):
  
```sh
vi /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/debian <distribution codename> main
```

Adicione o RTM e o catálogo de métricas em Ubuntu (não se esqueça de substituir `<distribution codename>` pelo nome da sua distribuição, por exemplo “xenial”):
  
```sh
vi /etc/apt/sources.list.d/rtm.list
# metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/ubuntu <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/ubuntu <distribution codename> main

```
Instale a chave do catálogo:

```sh
curl  https://last-public-ovh-rtm.snap.mirrors.ovh.net/ovh_rtm.pub | apt-key add -
curl  http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key | apt-key add -
```

Instale os pacotes RTM:

```sh
apt-get update
apt-get install ovh-rtm-metrics-toolkit
```

#### CentOS

Adicione o RTM e o catálogo de métricas em CentOs:

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

Instale os pacotes RTM:

```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

### FreeBSD

Adicione o RTM e o catálogo de métricas em FreeBSD:

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
Instale os pacotes RTM:

```sh
pkg install -y noderig beamium ovh-rtm-binaries
pkg install -y ovh-rtm-metrics-toolkit
```
Inicie os serviços:
```sh
service noderig start
service beamium start
```

### Instalar o RTM em Windows

No entanto, o pacote RTM não é compatível com Windows (brevemente).

## Quer saber mais?

[Endereços IP de monitorização da OVH](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external} (versão em inglês).

[Visualizar os dados](https://docs.ovh.com/gb/en/metrics/usecase-visualize/){.external} (versão em inglês).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.