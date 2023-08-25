---
title: "Disinstallare il sistema di monitoring RTM v2"
excerpt: "Questa guida ti mostra come disinstallare un sistema di monitoring RTM sui tuoi servizi"
updated: 2023-06-20
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il sistema di monitoring OVHcloud RTM v2 ha subito una riduzione di valore e i suoi depositi sono stati eliminati. Ti consigliamo quindi di disinstallare questo sistema dal tuo o dai tuoi servizi e di eliminare tutti i pacchetti associati.

**Questa guida ti mostra come eseguire le operazioni di pulizia dei pacchetti utilizzati da questo sistema.**

## Prerequisiti

- Un [server dedicato](https://www.ovhcloud.com/it/bare-metal/) sul quale RTM v2 è stato installato
- Avere un accesso amministratore (*root*) al tuo server via SSH

## Procedura

Accedi al tuo server via SSH ed elimina i package qui sotto:

### Distribuzioni basate su Debian

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

In seguito, è necessario eliminare i depositi.

### Debian / Ubuntu

#### Verifica che i package siano installati:**

```bash
dpkg --list | grep -E "noderig|beamium|ovh-rtm-binaries|ovh-rtm-metrics-toolkit"
```

Se il comando non restituisce alcun valore, significa che i package non sono installati, puoi passare allo step di verifica dei depositi. In caso contrario, è possibile eliminarli eseguendo questo comando:

```bash
sudo apt-get remove ovh-rtm-binaries ovh-rtm-metrics-toolkit noderig beamium
```

#### Verifica se i depositi esistono

```bash
ls /etc/apt/sources.list.d/
``` 

Se i file `ovh-metrics.list` e `ovh-rtm.list` non sono elencati, non è necessario eseguire nessuna operazione. In caso contrario, è possibile eliminarli eseguendo questo comando:

```bash
rm -f /etc/apt/sources.list.d/ovh-metrics.list /etc/apt/sources.list.d/ovh-rtm.list
```

### CentOS

#### Verifica che i package siano installati

```bash
yum list installed | grep -E "noderig|beamium|ovh-rtm-binaries|ovh-rtm-metrics-toolkit"
```

Se il comando non restituisce alcun valore, significa che i package non sono installati, puoi passare allo step di verifica dei depositi. In caso contrario, è possibile eliminarli eseguendo questo comando:

```bash
sudo yum remove ovh-rtm-binaries ovh-rtm-metrics-toolkit noderig beamium
```

#### Verifica se i depositi esistono

```bash
ls /etc/yum.repos.d/
```

Se i file `OVH-metrics.repo` e `OVH-rtm.repo` non sono elencati, non è necessario eseguire nessuna operazione. In caso contrario, è possibile eliminarli eseguendo questo comando: 

```bash
rm -f /etc/yum.repos.d/OVH-metrics.repo /etc/yum.repos.d/OVH-rtm.repo
```

## Per saperne di più

In caso di necessità di formazione o assistenza tecnica per l'implementazione delle nostre soluzioni, contatta il tuo provider o clicca su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del tuo progetto ai nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.
