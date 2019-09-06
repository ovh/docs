---
title: 'Instalacja Real Time Monitoring (RTM)'
slug: instalacja-rtm
excerpt: 'Sprawdź, jak zainstalować Real Time Monitoring w systemie Linux lub Windows'
section: 'Diagnostyka i tryb Rescue'
---

**Ostatnia aktualizacja z dnia 05-09-2019**

## Wprowadzenie

Narzędzie Real Time Monitoring (RTM) umożliwia częściowe monitorowanie serwera i jego aktywności. W Panelu klienta można monitorować: wykorzystanie procesora (CPU), pamięci (RAM), partycji dysków, otwartych portów itd. Aby informacje te były dostępne, niezbędna jest instalacja pakietu RTM.

**Ten przewodnik wyjaśnia, jak zainstalować RTM w systemie Linux.**

## Wymagania początkowe

- Połączenie przez SSH (lub interfejs graficzny) z serwerem Linux (dostęp *root*)
- Dostęp do serwera Windows przez zdalny pulpit (dostęp *administratora*)
- Dostęp do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager){.external}

## W praktyce

Po zainstalowaniu narzędzia RTM możesz monitorować serwer z poziomu Panelu klienta, w części `Serwer`{.action}. Na stronie głównej serwera wyświetlą się informacje o monitorowaniu w `Real Time Monitoring`:

![Real Time Monitoring](images/rtm.png){.thumbnail}

> [!primary]
>
> Zdarza się, że pomimo zainstalowania RTM-u, zapora sieciowa uniemożliwia monitorowanie infrastruktury. Należy pamiętać o otwarciu dostępu do serwera w monitoringu IP. Szczegóły znajdziesz [tutaj](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external}.
> 

### Instalowanie RTM w systemie Linux
RTM gromadzi stale na serwerach dedykowanych informacje o CPU, RAM, dyskach, macierzy RAID oraz sprzęcie.

##### Beamium

[https://github.com/ovh/beamium](https://github.com/ovh/beamium)

Beamium gromadzi metryki z terminali HTTP, takie jak http://127.0.0.1:9100/metrics obsługuje formaty Prometheus Sensision. 

Beamium może filtrować i przesyłać dane do platformy Warp 10™ Time Series. Podczas pozyskiwania metryk używa DFO (Disk Fail Over), aby uniknąć ewentualnych strat związanych z problemami sieciowymi lub z niedostępnością usługi.

Beamium jest napisany w języku Rust, dzięki czemu jest skuteczny, wydajny i nie zajmuje dużo miejsca.

Przykład konfiguracji:

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
Po zakończonej instalacji plik konfiguracyjny zostanie automatycznie uzupełniony.

##### Noderig

[https://github.com/ovh/noderig](https://github.com/ovh/noderig)

Noderig gromadzi metryki systemu operacyjnego i udostępnia je za pośrednictwem adresu URL HTTP (https://github.com/ovh/noderig). Konfiguracja kolektorów jest prosta. Można ją przeprowadzić przy użyciu suwaka poziomu.

Metryki Noderig:

* CPU
* Pamięć
* Load
* Disk
* Net
* Kolektory zewnętrzne

Przykład konfiguracji:

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

- Gromadzenie informacji o sprzęcie, np. o płycie głównej, urządzeniach PCI, zdrowiu dysku, a także informacji o oprogramowaniu, takich jak wersja jądra i wersja BIOS.

**rtmHourly**:

- Gromadzenie informacji na temat najważniejszych procesów, otwartych portów oraz liczby trwających procesów.

**rtmRaidCheck**:

- Weryfikacja zdrowia macierzy RAID (jeśli dostępna)

### Instalowanie RTM w systemie Linux (automatyczne)

Po połączeniu z serwerem za pomocą protokołu SSH wpisz następujące polecenie:

```sh
wget -qO - https://last-public-ovh-infra-yak.snap.mirrors.ovh.net/yak/archives/apply.sh | OVH_PUPPET_MANIFEST=distribyak/catalog/master/puppet/manifests/common/rtmv2.pp bash
```
> [!primary]
> 
> Automatyczna instalacja może nie działać na Twojej dystrybucji (w przypadku niektórych zależności). W takiej sytuacji przeprowadź instalację ręcznie w sposób opisany poniżej. 
>


#### Ręczna instalacja dystrybucji Debian / Ubuntu

Dodaj RTM i zbiór metryk dla dystrybucji Debian:
gdzie `<distribution codename>` jest nazwą Twojej dystrybucji (na przykład: 'jessie')
  
```sh
vi /etc/apt/sources.list.d/rtm.list
#metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/debian <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/debian <distribution codename> main
```

Dodaj RTM i zbiór metryk dla dystrybucji Ubuntu:
gdzie `<distribution codename>` jest nazwą Twojej dystrybucji (na przykład: 'xenial')
  
```sh
vi /etc/apt/sources.list.d/rtm.list
# metrics repo
deb http://last.public.ovh.metrics.snap.mirrors.ovh.net/ubuntu <distribution codename> main
# rtm repo
deb http://last.public.ovh.rtm.snap.mirrors.ovh.net/ubuntu <distribution codename> main

```
Zainstaluj klucz zbioru:

```sh
curl  https://last-public-ovh-rtm.snap.mirrors.ovh.net/ovh_rtm.pub | apt-key add -
curl  http://last.public.ovh.metrics.snap.mirrors.ovh.net/pub.key | apt-key add -
```

Zainstaluj pakiety RTM:

```sh
apt-get update
apt-get install ovh-rtm-metrics-toolkit
```

#### CentOS

Dodaj RTM i zbiór metryk dla dystrybucji CentOs:

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

Zainstaluj pakiety RTM:

```sh
yum update
yum install ovh-rtm-metrics-toolkit
```

### FreeBSD

Dodaj RTM i zbiór metryk dla dystrybucji FreeBSD:

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
Zainstaluj pakiety RTM:

```sh
pkg install -y noderig beamium ovh-rtm-binaries
pkg install -y ovh-rtm-metrics-toolkit
```
Uruchom usługi:
```sh
service noderig start
service beamium start
```

### Instalowanie RTM w systemie Windows

Pakiet RTM nie jest jeszcze kompatybilny z Windowsem (w trakcie).

## Sprawdź również

[Monitoring IP OVH](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external}

[Wizualizacja danych](https://docs.ovh.com/gb/en/metrics/usecase-visualize/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.