---
título: 'Instalar o Real Time Monitoring (RTM)'
slug: instalar-rtm
excerto: 'Saiba como instalar o Real Time Monitoring em Linux'
section: 'Diagnóstico e Modo Rescue'
---

**Última atualização: 30/04/2020**

## Sumário

O Real Time Monitoring (RTM) permite monitorizar parcialmente um servidor e a sua atividade. Na Área de Cliente OVHcloud, poderá consultar informações sobre a unidade central de processamento (CPU), a memória viva (RAM), as partições de disco, as portas abertas, etc. Contudo, para as informações ficarem disponíveis, é necessário instalar no servidor o pacote RTM.

**Este guia explica como instalar o RTM em Linux.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- Aceder através de SSH (ou através da interface gráfica) ao servidor Linux (acesso root).


## Instruções

> [!primary]
>
> Algumas restrições de firewall podem impedir a monitorização da sua infraestrutura, mesmo que tenha instalado o RTM. Por isso, não se esqueça de autorizar o acesso ao servidor dos IP de monitorização da OVHcloud. Poderá encontrar mais informações [neste manual](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh) (versão em inglês).
> 

### RTM em Linux

#### Componentes

Nos servidores dedicados, o RTM recolhe de forma contínua informações sobre a CPU, a RAM, os discos, o RAID e o hardware. Em baixo encontram-se informações acerca dos componentes utilizados.

##### Beamium

https://github.com/ovh/beamium

O Beamium recolhe as métricas dos terminais HTTP, tais como _http://127.0.0.1:9100/metrics_, e é compatível com os formatos Prometheus Sensision. 

Uma vez implementado, o Beamium pode filtrar e transferir os dados para uma plataforma Warp 10™ Time Series. Ao receber as métricas, utiliza o DFO (Disk Fail Over) para evitar possíveis perdas causadas por problemas de rede ou indisponibilidade do serviço.

O Beamium está escrito em Rust para garantir a sua eficácia, compacidade e elevado desempenho.

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
  host_type: you can add tag for server and retrieve it in grafana host list

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

Noderig recolhe as métricas do sistema operativo e expõe-nas através de um URL HTTP (http://127.0.0.1:9100/metrics). Cada coletor pode ser facilmente configurado através de um simples cursor de nível.

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


##### RTM Binaries

**rtmHardware**:

- Recolhe informações sobre o hardware, como a motherboard, os periféricos PCI ou a saúde do disco. Também recolhe informações sobre o software, como a versão do núcleo ou da versão BIOS.

**rtmHourly**:

- Recolhe informações sobre os processos com maior consumo, as portas abertas e o número de processos em curso.

**rtmRaidCheck**:

- Verifica a saúde do RAID (se disponível).

### Instalar o RTM automaticamente

Uma vez conectado ao servidor por SSH, execute o seguinte comando:

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```
> [!primary]
> 
> Este procedimento de instalação pode não funcionar na sua distribuição (em função de determinadas dependências). Nesse caso, realize a instalação manual tal como descrito abaixo.
>

### Instalar o RTM manualmente

#### Instalação manual em Debian/Ubuntu


##### Passo 1: Adicionar catálogos OVHcloud

- através de **add-apt-repository**

```sh
#metrics repo
add-apt-repository "deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/$(lsb_release --id --short | tr 'A-Z' 'a-z') $(lsb_release --codename --short) main"
# rtm repo
add-apt-repository "deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/$(lsb_release --id --short | tr 'A-Z' 'a-z') $(lsb_release --codename --short) main"
```

- manualmente

Para **Debian**:

`<distribution codename>` é o nome da sua distribuição (por exemplo: «buster»).
  
```sh
nano /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/debian <distribution codename> main
```

Para **Ubuntu**:

`<distribution codename>` é o nome da sua distribuição (por exemplo: «bionic»).
  
```sh
nano /etc/apt/sources.list.d/rtm.list

```
Adicione estas linhas e guarde o ficheiro:
  
```sh
# metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/ubuntu <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/ubuntu <distribution codename> main

```
> [!primary]
> 
> Relativamente a distribuições atuais, os pacotes necessários podem ainda não estar incluídos nos catálogos das versões atualizadas de Linux OS. Nesse caso, use como alternativa o codename de uma versão (Ubuntu) mais antiga.
>


##### Passo 2: Instalar a chave do catálogo

```sh
curl  https://last-public-ovh-rtm.snap.mirrors.ovh.net/ovh_rtm.pub | apt-key add -
curl  http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key | apt-key add -
```

##### Passo 3: Instalar os pacotes RTM

```sh
apt-get update
apt-get install ovh-rtm-metrics-toolkit
```

#### Instalação manual em CentOS

Adicione o RTM e o catálogo de métricas em CentOs:

```sh
nano /etc/yum.repos.d/ovh-rtm.repo
```
Adicione estas linhas e guarde o ficheiro:

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

Instale os pacotes RTM:

```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

#### Instalação manual em FreeBSD

Adicione o RTM e o catálogo de métricas em CentOs:

```sh
mkdir -p /usr/local/etc/pkg/repos
nano /usr/local/etc/pkg/repos/OVH.conf
```
Adicione estas linhas e guarde o ficheiro:

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

> [!primary]
>**Instalar o RTM em Windows**
>
Atualmente, os pacotes RTM não são compatíveis com sistemas Windows. À medida que desenvolvemos e melhoramos continuamente os nossos serviços, de futuro haverá igualmente uma opção para esse sistema operativo.
>


### O RTM na Área de Cliente OVHcloud

Depois de instalar o RTM, poderá consultar os dados de monitoramento do seu servidor na Área de Cliente OVHcloud. (Poderá ser necessário atualizar o navegador ou sair e voltar a entrar na sua conta.) Dirija-se à secção `Servidor`{.action} e selecione o seu servidor no menu à esquerda. Em `Informações gerais`{.action}, percorra a lista até encontrar as informações de monitoramento.

![Real Time Monitoring](images/rtm_panel.png){.thumbnail}



## Saiba mais

[Endereços IP de monitorização da OVH](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh) (versão em inglês)

[Visualizar os dados](https://docs.ovh.com/gb/en/metrics/usecase-visualize) (versão em inglês)

[Ativar e utilizar o modo rescue](https://docs.ovh.com/pt/dedicated/rescue_mode/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.