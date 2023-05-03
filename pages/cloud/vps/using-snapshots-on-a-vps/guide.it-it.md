---
title: 'Usare snapshot su un VPS'
excerpt: 'Scopri come abilitare e utilizzare l’opzione Snapshot nello Spazio Cliente OVHcloud'
slug: usare-snapshot-su-un-vps
section: 'Opzioni di backup'
order: 1
updated: 2023-03-20
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 20/03/2023**


## Obiettivo

Creare uno snapshot è un modo semplice e rapido per mettere al sicuro un sistema che funziona prima di effettuare modifiche che potrebbero avere conseguenze indesiderate o impreviste, ad esempio per testare una nuova configurazione o un nuovo software. Ciò non costituisce comunque una strategia completa di backup del sistema.

**Questa guida spiega l’utilizzo di snapshot per il tuo VPS OVHcloud.**

> [!primary]
>
Prima di applicare opzioni di backup, consigliamo di fare riferimento alle pagine prodotto [e alle domande frequenti](https://www.ovhcloud.com/it/vps/options/) per confrontare i prezzi e per visualizzare ulteriori dettagli.
>

## Prerequisiti

- avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- un servizio [VPS OVHcloud](https://www.ovhcloud.com/it/vps/) già impostato


## Procedura

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Bare Metal Cloud`{.action} e seleziona il tuo server nella sezione `Server Privati Virtuali`{.action}.

### Step 1: Attivare l’opzione snapshot

Partendo dalla scheda `Home`{.action}, scorri verso il basso fino al riquadro "Riassunto opzioni". Clicca su `...`{.action} accanto all’opzione "Snapshot" e nel menu di scelta rapida clicca su `Ordina`{.action}.

![snapshotvps](images/snapshot_vps_step1b.png){.thumbnail}

Nello step successivo, esamina le informazioni sul prezzo, quindi clicca su `Ordina`{.action}. Sarai guidato attraverso la procedura per l’ordine e riceverai una email di conferma.

### Step 2: Acquisire uno snapshot

Una volta attivata l’opzione, clicca su `...`{.action} accanto all’opzione "Snapshot" e nel menu a scelta rapida clicca su `Scatta uno snapshot`{.action}. La durata della creazione dello Snapshot dipende dallo spazio di storage utilizzato. In seguito, nel riquadro “Sintesi opzioni” appariranno la data e l’ora dello scatto.

### Step 3: Cancellare/ripristinare uno snapshot

Dal momento che puoi ottenere l’attivazione di un solo snapshot alla volta, quello esistente deve essere cancellato prima di scattarne un altro. Per farlo è sufficiente scegliere `Cancella snapshot`{.action} dal menu a scelta rapida.

![snapshotvps](images/snapshot_vps_step2.png){.thumbnail}

Se sei certo che desideri ripristinare il tuo VPS allo stato dello snapshot, clicca su `Ripristina lo snapshot`{.action} e conferma il ripristino nella finestra popup.

> [!alert]
>
> Ricorda che quando ripristina un VPS da un'istantanea, quest'ultima verrà eliminata. Per conservare la stessa istantanea, è necessario ripeterne una prima di apportare modifiche al sistema ripristinato.
>

### Scarica uno Snapshot

Lo Snapshot in corso può essere recuperato tramite un link di download. Clicca sui tre puntini `...`{.action} in corrispondenza dell'opzione `Snapshot` e seleziona `Scarica lo Snapshot`{.action} nel menu contestuale.

![snapshotvps](images/snapshot_vps03.png){.thumbnail}

Nella nuova finestra, clicca su `Genera il link di download`{.action}.

![snapshotvps](images/snapshot_vps04.png){.thumbnail}

Dopo pochi secondi visualizzi un messaggio di successo. Di seguito, è possibile copiare il comando completo di download in un click.

![snapshotvps](images/snapshot_vps05.png){.thumbnail}

Verranno visualizzate anche la dimensione dello Snapshot e la data di scadenza del link.

Ti ricordiamo che il link di download scadrà dopo **24 ore**.

L'ordine di download utilizza un `curl` nel seguente formato:

```bash
curl "https://storage.sbg.cloud.ovh.net/v1/AUTH_f5fgh4674dd706f15f6ffgf4z667d3f4g5f05/glance/5ceg3f93-8b49-436b-aefe-4185f9fc3f78?
temp_url_sig=f508cacda60256d5f211ddddf3f81130e935f0e4&temp_url_expires=1678247579" --output vps-x11x11xyy.vps.ovh.net --fail
```

Il comando deve essere azionato da qualsiasi terminale di linea di comando. Tuttavia, quando utilizzi Windows *PowerShell*, dovrai adattare il comando in questo modo:

```powershell
curl -Uri "https://storage.sbg.cloud.ovh.net/v1/AUTH_f5fgh4674dd706f15f6ffgf4z667d3f4g5f05/glance/5ceg3f93-8b49-436b-aefe-4185f9fc3f78?
temp_url_sig=f508cacda60256d5f211ddddf3f81130e935f0e4&temp_url_expires=1678247579" -OutFile vps-x11x11xyy.vps.ovh.net
```

![snapshotvps](images/snapshot_vps06.png){.thumbnail}

> [!primary]
>
> Per evitare di consumare troppo spazio di storage, ti consigliamo di scaricare gli Snapshot direttamente sul VPS.
>


### Best practice per la creazione di uno Snapshot

#### Configurazione del software QEMU su un VPS

Gli Snapshot sono istantanee del proprio sistema in esecuzione (“live snapshot”). Per garantire la disponibilità del sistema durante la creazione dello Snapshot è necessario utilizzare il software QEMU, che  prepara il filesystem al processo.

Nella maggior parte delle distribuzioni, il *qemu-guest-agent* necessario non è installato di default e le eventuali restrizioni delle licenze possono impedire a OVHcloud di includerlo nelle immagini degli OS disponibili. Consigliamo pertanto di verificare la presenza del software sul VPS e, in caso contrario, di installarlo. Per eseguire queste operazioni, accedi in SSH al VPS e segui le istruzioni indicate, in base al sistema operativo utilizzato.

##### **Distribuzioni Debian (Debian, Ubuntu)**

Utilizza il comando seguente per verificare che il sistema sia correttamente configurato per effettuare Snapshot:

```bash
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Se il risultato è differente (“No such file or directory”), installa l’ultima versione del pacchetto:

```bash
$ sudo apt-get update
$ sudo apt-get install qemu-guest-agent
```

Avvia il servizio per assicurarti che sia in esecuzione:

```bash
$ sudo service qemu-guest-agent start
```

##### **Distribuzioni Red Hat (CentOS, Fedora)**

Utilizza il comando seguente per verificare che il sistema sia correttamente configurato per effettuare Snapshot:

```bash
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Se il risultato è differente (“No such file or directory”), installa e attiva il software:

```bash
$ sudo yum install qemu-guest-agent
$ sudo chkconfig qemu-guest-agent on
```

Avvia il servizio per assicurarti che sia in esecuzione:

```bash
$ sudo service qemu-guest-agent start
$ sudo service qemu-guest-agent status
```

##### **Windows**

È possibile installare il software utilizzando un file MSI disponibile sul sito del progetto Fedora: <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-qemu-ga/>

Per verificare che il servizio sia in esecuzione, esegui questo comando *PowerShell*:

```powershell
PS C:\Users\Administrator> Get-Service QEMU-GA

Status   Name               DisplayName
------   ----               -----------
Running  QEMU-GA            QEMU Guest Agent
```

## Per saperne di più

[Usare backup automatizzati su un VPS](../usare-backup-automatizzati-su-un-vps)


Partecipa alla nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.