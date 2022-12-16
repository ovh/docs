---
title: 'Diagnosticare problemi hardware su un server dedicato'
slug: diagnostica-problemi-hardware-server-dedicato
excerpt: 'Scopri come utilizzare gli strumenti di diagnostica per identificare malfunzionamenti hardware sul tuo server'
section: Sicurezza
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 15/12/2022**

## Obiettivo

Con il passare del tempo, l’usura di un server può causare malfunzionamenti dovuti a problemi di tipo hardware. Per questo motivo, i server dedicati OVH sono dotati di numerosi strumenti di diagnostica che permettono di individuare i componenti hardware difettosi.

**Questa guida ti mostra come diagnosticare problemi hardware su un server.**

## Prerequisiti

- Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/)
- Aver riavviato il server in [Rescue mode](https://docs.ovh.com/it/dedicated/rescue_mode/)

## Procedura

Questa guida ti mostra i test da effettuare per diagnosticare:

- processori
- connessione di rete
- memoria RAM
- partizioni del disco

### Processori

Questo test serve per verificare il corretto funzionamento del processore del server e richiede circa 30 minuti. Se il server si blocca durante il test, significa che il processore è difettoso.

```bash
WRKR=$(grep -c "^processor" /proc/cpuinfo)
stress-ng --metrics-brief --timeout 60s --cpu $WRKR --io $WRKR --aggressive --ignite-cpu --maximize --pathological
stress-ng --metrics-brief --timeout 60s --brk 0 --stack 0 --bigheap 0 
```

### Connessione di rete

Il test di connessione di rete permette di verificare la larghezza di banda interna ed esterna. Questi dati sono forniti a titolo indicativo e non costituiscono un test di performance.

```bash
ping -c 10 proof.ovh.net
for file in 1Mb 10Mb 100Mb 1Gb ; do time curl -4f https://proof.ovh.net/files/${file}.dat -o /dev/null; done
```

### Memoria RAM

Il test di memoria consente di verificare l’integrità dei moduli RAM del server. Se il server si blocca durante il test, significa che uno o più moduli RAM sono difettosi.

> [!warning]
> Attenzione, questo test potrebbe richiedere molto tempo.

```bash
RAM="$(awk -vOFMT=%.0f '$1 == "MemAvailable:" {print $2/1024 - 1024}' /proc/meminfo)"
memtester ${RAM}M 1
```

### Partizioni del disco

Questo test comprende sia una verifica dell’accesso al disco che un controllo del file system. Il test di accesso al disco serve per verificare che il sistema sia in grado di comunicare con gli hard disk del server. Riguardo al test del file system, si utilizza il comando `fsck -fy`.

```bash
stress-ng --metrics-brief --timeout 60s --hdd 0 --aggressive
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
