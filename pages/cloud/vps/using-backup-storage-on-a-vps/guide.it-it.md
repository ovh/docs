---
title: 'Usare snapshot su un VPS'
excerpt: 'Scopri come abilitare e utilizzare l’opzione Snapshot nello Spazio Cliente OVHcloud'
slug: usare-snapshot-su-un-vps
section: 'Opzioni di backup'
order: 1
---

**Ultimo aggiornamento: 22/07/2020**


## Obiettivo

Creare uno snapshot è un modo semplice e rapido per mettere al sicuro un sistema che funziona prima di effettuare modifiche che potrebbero avere conseguenze indesiderate o impreviste, ad esempio per testare una nuova configurazione o un nuovo software. Ciò non costituisce comunque una strategia completa di backup del sistema.

**Questa guida spiega l’utilizzo di snapshot per il tuo VPS OVHcloud.**

> [!primary]
>
Prima di applicare opzioni di backup, consigliamo di fare riferimento alle pagine prodotto [e alle domande frequenti](https://www.ovhcloud.com/it/vps/options/) per confrontare i prezzi e per visualizzare ulteriori dettagli.
>

## Prerequisiti

- avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- un servizio [VPS OVHcloud](https://www.ovhcloud.com/it/vps/) già impostato


## Procedura

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager), vai fino alla sezione "Server" e seleziona il tuo server dalla barra laterale sinistra in `VPS`{.action}.

### Step 1: Attivare l’opzione snapshot

Partendo dalla scheda `Home`{.action}, scorri verso il basso fino al riquadro "Riassunto opzioni". Clicca su `...`{.action} accanto all’opzione "Snapshot" e nel menu di scelta rapida clicca su `Ordina`{.action}.

![snapshotvps](images/snapshot_vps_step1b.png){.thumbnail}

Nello step successivo, esamina le informazioni sul prezzo, quindi clicca su `Ordina`{.action}. Sarai guidato attraverso la procedura per l’ordine e riceverai una email di conferma.

### Step 2: Acquisire uno snapshot

Una volta attivata l’opzione, clicca su `...`{.action} accanto all’opzione "Snapshot" e nel menu a scelta rapida clicca su `Scatta uno snapshot`{.action}. Per ottenere uno snapshot potrebbero essere necessari alcuni minuti. In seguito, nel riquadro “Sintesi opzioni” appariranno la data e l’ora dello scatto.

### Step 3: Cancellare/ripristinare uno snapshot

Dal momento che puoi ottenere l’attivazione di un solo snapshot alla volta, quello esistente deve essere cancellato prima di scattarne un altro. Per farlo è sufficiente scegliere `Cancella snapshot`{.action} dal menu a scelta rapida.

![snapshotvps](images/snapshot_vps_step2.png){.thumbnail}

Se sei certo che desideri ripristinare il tuo VPS allo stato dello snapshot, clicca su `Ripristina lo snapshot`{.action} e conferma il ripristino nella finestra popup.

### Best practice per la creazione di uno Snapshot

#### Configurazione del software QEMU su un VPS

Gli Snapshot sono istantanee del proprio sistema in esecuzione (“live snapshot”). Per garantire la disponibilità del sistema durante la creazione dello Snapshot è necessario utilizzare il software QEMU, che  prepara il filesystem al processo.

Nella maggior parte delle distribuzioni, il *qemu-guest-agent* necessario non è installato di default e le eventuali restrizioni delle licenze possono impedire a OVHcloud di includerlo nelle immagini degli OS disponibili. Consigliamo pertanto di verificare la presenza del software sul VPS e, in caso contrario, di installarlo. Per eseguire queste operazioni, accedi in SSH al VPS e segui le istruzioni indicate, in base al sistema operativo utilizzato.

##### **Distribuzioni Debian (Debian, Ubuntu)**

Utilizza il comando seguente per verificare che il sistema sia correttamente configurato per effettuare Snapshot:

```
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Se il risultato è differente (“No such file or directory”), installa l’ultima versione del pacchetto:

```
$ sudo apt-get update
$ sudo apt-get install qemu-guest-agent
```

Avvia il servizio per assicurarti che sia in esecuzione:

```
$ sudo service qemu-guest-agent start
```

##### **Distribuzioni Red Hat (CentOS, Fedora)**

Utilizza il comando seguente per verificare che il sistema sia correttamente configurato per effettuare Snapshot:

```
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Se il risultato è differente (“No such file or directory”), installa e attiva il software:

```
$ sudo yum install qemu-guest-agent
$ sudo chkconfig qemu-guest-agent on
```

Avvia il servizio per assicurarti che sia in esecuzione:

```
$ sudo service qemu-guest-agent start
$ sudo service qemu-guest-agent status
```

##### **Windows**

È possibile installare il software utilizzando un file MSI disponibile sul sito del progetto Fedora: <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-qemu-ga/>

Per verificare che il servizio sia in esecuzione, esegui questo comando powershell:

```
PS C:\Users\Administrator> Get-Service QEMU-GA

Status   Name               DisplayName
------   ----               -----------
Running  QEMU-GA            QEMU Guest Agent
```

## Per saperne di più

[Usare backup automatizzati su un VPS](../usare-backup-automatizzati-su-un-vps)


Partecipa alla nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.