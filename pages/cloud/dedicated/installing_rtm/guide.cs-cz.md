---
deprecated: true
title: Instalace řešení Real Time Monitoring (RTM)
slug: instalace-rtm
excerpt: Zjistěte, jak nainstalovat Real Time Monitoring na operačních systémech Linux a Windows
section: Diagnostika a režim rescue
---

**Poslední aktualizace 05/02/2017**

## Cíl

Real Time Monitoring (RTM) umožňuje provádět částečný monitoring aktivit na Vašem serveru. Ve svém Zákaznickém prostoru OVH naleznete následující informace: využití procesoru (CPU), využití operační paměti (RAM), přehled otevřených portů... Pro zobrazení těchto informací je nejdříve zapotřebí nainstalovat řešení RTM.

**V této příručce se dozvíte, jak nainstalovat RTM na operačních systémech Linux a Windows**

## Prerekvizity

- SSH připojení k linuxovému serveru (*root* přístup).
- Připojení ke vzdálené ploše serveru s operačním systémem Windows (*administrátorský* přístup).
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Postup

Po instalaci řešení RTM budete moci ve svém Zákaznickém prostoru OVH (sekce `Dedicated`{.action}) monitorovat důležité aktivity na svém serveru. Veškeré informace týkající se monitoringu Vašeho serveru naleznete v základním administračním rozhraní serveru, v záložce `Real Time Monitoring`).

![Real Time Monitoring](images/rtm.png){.thumbnail}

> [!primary]
>
> Některá firewallová pravidla mohou bránit ve sledování aktivit na Vašem serveru, a to i v případě, že máte nainstalované řešení RTM. Nezapomeňte proto IP adresám monitoringu OVH povolit přístup. Detailní informace naleznete zde: <https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/>.
> 

### Instalace RTM na Linuxu

Jakmile se ke svému serveru připojíte přes SSH, zadejte následující příkaz:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/rtm/install_rtm.sh -O install_rtm.sh ; /bin/bash install_rtm.sh
```

### Instalace RTM na Windows

Jakmile se ke svému serveru připojíte přes vzdálenou plochu, postupujte následujícím způsobem:

- Pokud RTM nikdy nebylo na daném serveru nainstalováno, nainstalujte ActivePerl. Ke stažení na následujícím odkazu: <http://www.activestate.com/activeperl/>
- Stáhněte a nainstalujte poslední verzi RTM: <ftp://ftp.ovh.net/made-in-ovh/rtm/windows/>
- Klikněte pravým tlačítkem na stažený soubor a vyberte možnost `Spustit jako správce`{.action}.


## Kam dál

[IP adresy monitoringu OVH](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external}

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.