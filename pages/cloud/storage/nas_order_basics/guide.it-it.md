---
title: Iniziare a utilizzare un NAS-HA OVHcloud
slug: nas/iniziare
excerpt: Come gestire un NAS-HA dallo Spazio Cliente OVHcloud
section: NAS
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 22/08/2022**

## Obiettivo

Il Network Attached Storage (NAS) è un server di file connesso ad una rete la cui funzione principale è lo storage di dati in un volume centralizzato per clienti di rete eterogenei.
È possibile gestire il servizio NAS-HA tramite l'[API OVHcloud](https://docs.ovh.com/it/storage/nas/nas-quickapi/) o dallo Spazio Cliente.

**Questa guida ti mostra come gestire le partizioni e gli snapshot NAS-HA dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- Disporre di un [NAS-HA OVHcloud](https://www.ovh.it/nas/)
- Disporre di un indirizzo IP associato a un servizio OVHcloud (Hosted Private Cloud, Server Dedicato, VPS, Istanza Public Cloud, ecc...)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

Accedi alla sezione `Bare Metal Cloud`{.action} del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) e apri `NAS e CDN`{.action}.<br>
Clicca sulla scheda `Informazioni generali`{.action} del tuo servizio.

![Informazioni generali](images/nas-ha01.png){.thumbnail}

Nella scheda `Informazioni generali`{.action} sono mostrate le informazioni tecniche, la `Quota` del servizio, i dettagli dell'abbonamento e una scorciatoia per [creare una partizione](#create_partition).

> [!primary]
> Accedi alla pagina [FAQ](../faq-nas/) per scoprire le proprietà tecniche del servizio NAS-HA.
>

### Gestione delle partizioni <a name="manage_partition"></a>

Passa alla scheda `Partizioni`{.action}. La tabella contiene tutte le partizioni create per il servizio selezionato. Clicca sul nome di una partizione per aprire la sua pagina di gestione. 

![Partizioni](images/nas-ha02.png){.thumbnail}

La sezione **Metriche generali** indica la quantità di spazio disco disponibile utilizzata dai dati e dagli snapshot (`Capacità totale`). La percentuale di spazio occupato dagli Snapshot è indicata in giallo. Uno Snapshot ha luogo di default ogni ora.

Il tuo NAS-HA dispone di spazio sufficiente per archiviare gli Snapshot. Questo spazio corrisponde al 20% della dimensione iniziale del volume. Se superi questo limite, questi Snapshot utilizzeranno il tuo spazio di storage principale.

Puoi attivare l'opzione `Avviso di utilizzo`{.action} per ricevere avvisi via email quando viene raggiunta una quota di utilizzo del 90%.

Per effettuare alcune azioni, clicca sul pulsante `...`{.action} in ogni riga della tabella.

- **Modifica/Visualizza**: Apri la sezione "Informazioni generali" della partizione.
- **Gestisci gli Snapshot**: Apri la sezione [Politiche di Snapshot](#snapshots) della partizione.
- **Gestisci gli accessi**: Apri la sezione [Lista di controllo degli accessi (ACL)](#access_control) nella quale puoi gestire i diritti di accesso degli indirizzi IP per la partizione.
- **Modifica la dimensione**: Apri una finestra per [modificare la dimensione](#modify_partition) della partizione.
- **Parametri Z File System (ZFS)**: Apri una finestra che permette di [modificare i parametri del sistema ZFS](#zfs).
- **Eliminare**: Apri una finestra per [eliminare questa partizione](#deletion).

#### Crea una partizione <a name="create_partition"></a>

Per aggiungere una nuova partizione, clicca sul pulsante `+ Crea una partizione`{.action} sopra la tabella.

![Partizioni](images/nas-ha03.png){.thumbnail}

Inserisci un **nome** per la partizione, determinandone la **dimensione** in GB e seleziona i **protocolli** di accesso (NFS, CIFS o entrambi) da autorizzare.

Se hai bisogno di una descrizione, clicca su `Crea una partizione`{.action}.

#### Modifica la dimensione di una partizione <a name="modify_partition"></a>

Per modificare la dimensione di una partizione, clicca sui tre puntini `...`{.action} a destra della partizione in questione e seleziona `Modifica la dimensione`{.action}.

![Partizioni](images/nas-ha04.png){.thumbnail}

Inserisci la nuova dimensione e clicca su `Modifica la dimensione`{.action}.

#### Crea e gestisci gli Snapshot <a name="snapshots"></a>

Clicca sui tre puntini `...`{.action} in corrispondenza della partizione interessata e seleziona `Gestisci gli Snapshot`{.action}.

Di default, uno Snapshot dei tuoi dati ha luogo ogni ora e viene salvato sul tuo NAS-HA. Questa regola è riportata nella tabella della scheda `Politiche di Snapshot`{.action}.

![Snapshot](images/nas-ha05.png){.thumbnail}

Per attivare altre regole di Snapshot che creeranno Snapshot a frequenze predefinite, clicca sul pulsante a tendina con `Opzioni`. Seleziona le frequenze e clicca sul pulsante `Seleziona`{.action} a destra.

![Snapshot](images/nas-ha06.png){.thumbnail}

Nella nuova finestra, attendi il completamento del processo e clicca su `Chiudi`{.action}. Gli Snapshot supplementari saranno salvati anche sul tuo NAS-HA.

##### **Crea uno Snapshot manuale**

Al di fuori degli Snapshot effettuati automaticamente, è possibile creare in qualsiasi momento uno Snapshot manuale di una partizione. Clicca sul pulsante `+ Crea uno Snapshot manuale`{.action} sopra la tabella.

![Snapshot](images/nas-ha07.png){.thumbnail}

Lo Snapshot sarà aggiunto alla tabella. Digita un nome dopo il prefisso e clicca sul pulsante `Seleziona`{.action} a destra.

##### **Lista e ripristino degli Snapshot**

Lo Spazio Cliente non include le funzionalità di accesso e ripristino dei tuoi Snapshot. salvate in sola lettura sulla partizione.

Per accedere agli snapshot a partire dal tuo punto di mount, devi accedere alla directory `.zfs/snapshot` della tua partizione.

Ad esempio, sul tuo servizio con l'ID `zpool-123456`, esiste una partizione chiamata `partition1` di cui hai creato uno snapshot chiamato `snap-snapshot01`. Per visualizzare lo Snapshot esegui questo comando:

```bash
ls -al /zpool-123456/partition1/.zfs/snapshot/snap-snapshot01/
```

Per ripristinare lo Snapshot, copia dal percorso di accesso del file `.zfs` alla nuova cartella in cui vuoi ripristinare lo Snapshot. È possibile utilizzare strumenti come *rsync* che permettono di effettuare interventi di ripristino.

Per maggiori informazioni, consulta la sezione [Per saperne di più](#gofurther) di questa guida.

#### Gestione delle ACL di partizione <a name="access_control"></a>

Il controllo di accesso alle partizioni funziona tramite restrizioni di indirizzi IP. Dato che di default non sono presenti restrizioni, il primo step di configurazione per ogni partizione consiste nel definire indirizzi IP o fasce a partire dalle quali sarà autorizzato l'accesso.

> [!primary]
>
> Possono accedere al NAS-HA solo gli indirizzi IP associati ai servizi OVHcloud (ad esempio: Server dedicato, VPS, istanze Public Cloud, ecc...).
>

##### **Aggiungi accesso**

Clicca sul pulsante `+ Aggiungi un nuovo accesso`{.action}.

![Access](images/nas-ha08.png){.thumbnail}

Crea una nuova riga nella tabella in cui puoi selezionare un indirizzo IP o un blocco di indirizzi (CIDR). Scegli `Lettura` (RO) o `Lettura/scrittura` (RW) come tipo di accesso nel menu a tendina e clicca sul pulsante `Seleziona`{.action} per aggiungere questo record all'ACL.

Nella nuova finestra, attendi il completamento del processo e clicca su `Chiudi`{.action}.

##### **Elimina un accesso**

Per eliminare l'accesso a una partizione, clicca sull'icona del `cestino`{.action} corrispondente nella tabella.

![Access](images/nas-ha09.png){.thumbnail}

Nella nuova finestra, conferma cliccando su `Elimina l'accesso`{.action} e attendi il completamento dell'operazione. Clicca su `Chiudi`{.action}.

### Impostazioni ZFS <a name="zfs"></a>

> [!warning]
>
> Tutti i parametri predefiniti del file system Z sono ottimizzati. Anche se non consigliamo di modificare questi parametri, questo menu ti permette di adattare il ZFS utilizzato dal NAS-HA.
>

Per modificare i parametri ZFS di una partizione, clicca sul pulsante `...`{.action} a destra della partizione interessata e seleziona `Parametri Z File System (ZFS)`{.action}. 

![zfs](images/nas-ha10.png){.thumbnail}

- **Disattiva l'aggiornamento dei tempi di accesso (*atime*)**: La disattivazione del *gesto* significa che il kernel non aggiornerà più l'orario del file ad ogni accesso al file. Ciò può essere utile per accelerare le operazioni di lettura frequenti, ad esempio su pagine Web statiche. Questa disattivazione non è consigliabile per applicazioni critiche in termini di coerenza, come i database.
- **ZFS recordsize**: Questa proprietà modifica la dimensione massima del blocco sul file system ZFS. Si noti che ZFS utilizzerà sempre una dimensione del blocco inferiore se il file è inferiore alla dimensione massima. Ad esempio, un file da 16 KB utilizzerà un blocco da 16 KB (più i metadati) per non sprecare spazio di storage. In generale, ti consigliamo di non modificare il ZFS *recordsize*.
- **Sync**: Questo parametro modifica il comportamento delle transazioni del file system ZFS per quanto riguarda la memorizzazione in buffer dei dati RAM e la scrittura dei dati sul disco. Ti consigliamo di non modificare questa proprietà, tranne nel caso in cui ci sia un motivo specifico.

### Elimina una partizione <a name="deletion"></a>

> [!warning]
>
> L'eliminazione di una partizione comporta la cancellazione definitiva di tutti i dati in essa contenuti.
>

Per eliminare una partizione, clicca sul pulsante `...`{.action} a destra della partizione interessata e seleziona `Elimina`{.action}.

![Elimina](images/nas-ha11.png){.thumbnail}

Nella nuova finestra, clicca su `Elimina la partizione`{.action}. Attendi il completamento del processo e clicca su `Chiudi`{.action}.

## ## Per saperne di più <a name="gofurther"></a>

[Gestione delle partizioni tramite API](https://docs.ovh.com/it/storage/nas/nas-partitions-api/)

[Gestione delle ACL di partizione via API](https://docs.ovh.com/it/storage/nas/nas-manage-acls/)

[Gestione degli snapshot via API](https://docs.ovh.com/it/storage/nas/nas-snapshots-api/)

[Eseguire il mount di un NAS tramite NFS](../nas-nfs/)

[Configura il tuo NAS su Windows Server via CIFS](../nas-cifs/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
