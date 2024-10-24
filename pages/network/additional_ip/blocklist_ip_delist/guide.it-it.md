---
title: "Come rimuovere un indirizzo IP da un elenco di indirizzi IP bloccati"
excerpt: "Scopri come richiedere la rimozione di un indirizzo IP da una blocklist se i tuoi servizi sono interessati dai fornitori di antispam"
updated: 2024-10-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Obiettivo

La *blocklist* (o lista di blocco) è uno strumento di lotta contro lo spam utilizzato sugli indirizzi IP (o classi di indirizzi IP) per bloccare le email considerate come spam o che potrebbero contenere malware. Se un dominio di posta o un indirizzo IP viene bloccato, è possibile che le email provenienti da tale dominio o indirizzo IP non raggiungano il client (server in entrata/antivirus), compromettendo l'adempienza a obblighi contrattuali e la reputazione del mittente. Le email che arrivano comunque ad essere trasmesse possono essere instradate nella cartella spam del destinatario invece che verso la sua casella di posta.

È importante notare che le liste di blocco possono includere nomi di dominio e indirizzi IP che non rappresentano una minaccia per gli utenti. Inoltre, alcuni servizi di filtro della posta indesiderata prendono in considerazione il reverse DNS durante la valutazione degli indirizzi IP, come SpamRATS.

> [!primary]
> Consulta la nostra guida su [come evitare che le tue email siano contrassegnate come spam](/pages/bare_metal_cloud/dedicated_servers/mail_sending_optimization) per conoscere le best practice da seguire con un server di posta elettronica.
>

**Questa guida ti mostra le operazioni da eseguire per rimuovere gli indirizzi IP da una blocklist, se presenti.**

> [!warning]
> Le informazioni contenute in questa guida sono soggette a modifica e si applicano agli indirizzi IP acquistati di recente. OVHcloud non può essere ritenuta responsabile delle azioni dei provider terzi.
>
> In caso di difficoltà o dubbi relativamente ad amministrazione, utilizzo o implementazione dei servizi su un server, ti consigliamo di contattare un [provider di servizi specializzato](/links/partner) o [la nostra Community](/links/community).
>

## Prerequisiti

- I tuoi servizi non sono attualmente interessati da una procedura di segnalazione di abusi.

## Procedura

### Provider supportati

- [Spamhaus](https://check.spamhaus.org/)

    - [Spamhaus Block List (SBL)](https://www.spamhaus.org/blocklists/spamhaus-blocklist/)
    Se [l’IP figura nella lista di blocco (SBL) di Spamhaus](https://check.spamhaus.org/sbl/listings/ovh.net/), significa che sei già stato contattato via email dal nostro team responsabile delle segnalazioni di abusi.<br>
    L’email inviata dal nostro team proviene da un indirizzo simile a questo: `ticket+ABCDEFGHIJ.ID@abuse.ovh.net` (il numero di ticket è sempre in maiuscolo e l’ID che segue è composto da 4 caratteri alfanumerici).<br>
    Per risolvere il problema, segui le indicazioni fornite nell’email. Una volta prese le misure necessarie, OVHcloud le trasmetterà a Spamhaus per chiedere la cancellazione del tuo IP dalla lista. Solo Spamhaus potrà decidere sul seguito da dare alla nostra richiesta.
    - [Exploits Block List (XBL)](https://www.spamhaus.org/blocklists/exploits-blocklist/) o [Combined Spam Sources (CSS)](https://www.spamhaus.org/blocklists/combined-spam-sources/)  
    Se il tuo IP figura nella *Exploits Block List* e/o nella lista combinata delle sorgenti di Spam, ciò è dovuto a problemi di configurazione. Segui gli step indicati sul sito Spamhaus per rimuovere l'IP dalla lista (vedi l'esempio qui sotto). Una volta completati i passaggi, puoi rimuoverlo dall'elenco.  
    /// details | Esempio
    
    ![spamhaus example](images/blocklist1.png){.thumbnail}  
    ![spamhaus example](images/blocklist2.png){.thumbnail}

    ///

- [SpamCop](https://www.spamcop.net/bl.shtml)

- [Barracuda](https://www.barracudacentral.org/lookups)

- [SpamRATS](https://spamrats.com/lookup.php)  
    Se si utilizza un server di posta elettronica di proprietà dell'utente, sarà necessario configurare il dominio nel campo PTR in cui sono contenuti i dati di contatto del proprietario. Solo i server di posta configurati correttamente verranno rimossi da questo elenco.  
    Sarà inoltre necessario [configurare la risoluzione DNS inversa](/pages/bare_metal_cloud/virtual_private_servers/configuring-reverse-dns).
    
    > [!primary]
    > **Best practice:**
    >
    > Gli indirizzi IP utilizzati per l'invio di email devono corrispondere al dominio del proprietario. È inoltre possibile utilizzare sottodomini per la risoluzione DNS inversa, ad esempio `mail.nome_dominio.com` o `gateway.nome_dominio.com`.

### Provider non supportati

#### s5h.net

/// details | Maggiori informazioni...

Per richiederne l'eliminazione, accedi a questa pagina dall'indirizzo IP bloccato. Dovrebbe essere rimosso immediatamente dalla lista.

È inoltre possibile utilizzare gli strumenti *telnet*, *curl* o *wget*.

Per rimuovere il tuo indirizzo IPv4 dalla lista utilizzando *curl*, accedi al server di posta indicato ed esegui il comando:

```bash
curl -4 http://www.usenix.org.uk/content/rblremove
```

Per eseguire la stessa operazione utilizzando *telnet* da un host Windows/Linux, immettere le righe *GET* e *Host* dopo il comando *telnet* come indicato di seguito.

```bash
telnet www.usenix.org.uk 80
```

```bash
GET /content/rblremove HTTP/1.1
```

```bash
Host: www.usenix.org.uk
```

Una spiegazione dettagliata è disponibile sul sito <http://www.usenix.org.uk/content/rbl.html>.

///

#### UCEprotect

/// details | Maggiori informazioni...

Di recente, UCE Protect ha inserito nella sua blocklist oltre mille nuovi ASN. Sfortunatamente, il nostro ASN (AS16276) ne è stato colpito. Per un elenco delle altre ASN interessate e il numero di nuove ASN aggiunte, consultare i seguenti link:

- http://www.uceprotect.net/en/l3charts.php
- http://stats.uceprotect.net/?page=su

Il nostro team di segnalazione degli abusi ha contattato UCEProtect per rimuovere il nostro ASN dalla blocklist. In generale, UCEProtect vuole che gli operatori di rete delle ASN appena bloccate paghino per il ritiro rapido dalla lista. Come tutti i principali fornitori, OVHcloud non paga per la cancellazione dalla blocklist, trattandosi di un servizio fuori dal nostro controllo. Pagare per il ritiro di una blocklist non fa che aumentare la blocklist nel suo complesso, danneggiando il settore.

UCEProtect sostiene di cancellare automaticamente le ASN entro una settimana, cosa che speriamo accada, ma poiché questo è fuori dal nostro controllo, non possiamo dare alcuna garanzia.

Se sei attualmente interessato da questa situazione, ti consigliamo di:

1. Utilizzare indirizzi IPv6 per inviare email. UCEProtect non blocca le email inviate tramite IPv6. Tutti i servizi OVHcloud vengono consegnati con almeno un indirizzo IPv6 configurabile. Tutti i principali provider di posta elettronica ora supportano l'IPv6.
2. Richiedere alla parte ricevente di contattare il proprio provider di posta elettronica per interrompere l'utilizzo della blocklist UCEProtect per il momento.

///

#### Fabel Spamsources

/// details | Maggiori informazioni...

Per rimuovere un IP dalla lista di Fabel Spamsources, accedi alla relativa [pagina di rimozione dalla lista](https://www.spamsources.fabel.dk/delist).

Clicca su `Please login to continue`{.action}, inserisci il tuo indirizzo e-mail e verifica la tua casella di posta. Utilizzare il codice di verifica per completare la connessione.

Inserisci il tuo indirizzo IP, indica il motivo della richiesta di eliminazione e poi clicca sul pulsante `Submit Query`{.action}.

![fabel esempio](images/blocklist3.png){.thumbnail}

Il ritiro dalla lista dovrebbe richiedere tra i 20 e i 30 minuti.

///

#### MIPSpace

/// details | Maggiori informazioni...

Per [rimuovere un IP da MIPSpace](https://www.mipspace.com/remove.php), accedi prima allo [Spazio Cliente OVHcloud](/links/manager) e assicurati che le informazioni riportate di seguito siano aggiornate:

- [Risoluzione reverse DNS](/pages/bare_metal_cloud/virtual_private_servers/configuring-reverse-dns) (campo PTR).
- I dettagli dell’organizzazione (*RWhois*) nella sezione `Network`{.action}: Apri `IP`{.action} e clicca sul pulsante `Ingranaggio`{.action} a destra. Seleziona `Gestisci le mie organizzazioni`{.action} nel menu a tendina.

///

## Per saperne di più

Per prestazioni specializzate (referenziazione, sviluppo, etc.), contatta i [partner OVHcloud](/links/partner).

Contatta la nostra [Community di utenti](/links/community).