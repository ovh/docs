---
title: 'Modificare una zona DNS di OVH'
excerpt: 'Scopri come modificare una zona DNS OVH dallo Spazio Cliente'
slug: web_hosting_modifica_la_tua_zona_dns
legacy_guide_number: g1604
---

**Ultimo aggiornamento: 31/08/2018**

## Obiettivo

La zona <i>Domain Name System</i> (DNS) di un dominio consiste nel file di configurazione in cui si archiviano le relative informazioni tecniche, denominate record.  Convenzionalmente, questi record consentono di collegare il tuo dominio al server o ai server che ospitano il tuo sito Internet e i tuoi indirizzi email.

**Questa guida ti mostra come modificare una zona DNS OVH dal tuo Spazio Cliente.**

## Prerequisiti

- Avere accesso alla gestione del dominio dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
- Essere connesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
- Utilizzare i server DNS di OVH per la configurazione del dominio in questione

> [!warning]
>
> - Se il dominio non utilizza i server DNS di OVH, è necessario realizzare la modifica dall’interfaccia del provider che gestisce la configurazione del tuo dominio.
> - Se il dominio è registrato presso OVH, verifica che utilizzi la nostra configurazione accedendo allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} > `Server DNS`{.action} e seleziona il tuo dominio.
>

## Procedura

**La modifica di una zona DNS è un’operazione delicata.** Effettuare una modifica inappropriata potrebbe, ad esempio, rendere impossibile l’accesso al tuo sito Internet o la ricezione di nuovi messaggi di posta elettronica.

Essere a conoscenza delle diverse tipologie di record consente di modificare al meglio la zona DNS del dominio. La seguente tabella descrive la funzione di ciascun record. 

|Record|Descrizione|  
|---|---|
|A|Consente di associare un dominio a un indirizzo IP (IPv4) come, ad esempio, l’indirizzo IP del server nel quale è ospitato il tuo sito Web.|
|AAAA|Consente di associare un dominio a un indirizzo IP (IPv6). come, ad esempio, l’indirizzo IP del server nel quale è ospitato il tuo sito Web.|
|CNAME|Consente che un dominio possa utilizzare il o gli indirizzi IP di un altro dominio collegandoli tra loro attraverso la creazione di un alias. Ad esempio, se *www.mypersonaldomain.ovh* è un alias di *mypersonaldomain.ovh*, ciò indica che *www.mypersonaldomain.ovh* utilizzerà il o gli indirizzi IP di *mypersonaldomain.ovh*.|
|MX|Consente di associare un dominio a un server di posta come, ad esempio, l’indirizzo IP del server in cui è ospitata la tua soluzione email. È possibile che il provider disponga di vari server di posta: in questo caso darà necessario creare altrettanti record MX.|
|SRV|Consente di indicare l’indirizzo di un server che gestisce un servizio. Ad esempio, questo record può indicare l’indirizzo di un server SIP o quello di un server che consente a un client di posta elettronica di configurarsi automaticamente attraverso l’<i>autodiscover</i>.|
|TXT|Consente di aggiungere il valore della tua scelta (in formato testo) ai parametri DNS del tuo dominio. Questo record è quello utilizzato durante i processi di verifica.|
|SPF|Consente di impedire agli spammer di utilizzare il tuo dominio per l'invio di email non autorizzate. Ad esempio, questo record può stabilire che solo il server del tuo provider di soluzioni email deve essere identificato come legittima fonte di invio. Per saperne di più consulta la nostra guida su [come aggiungere un record SPF alla configurazione di un dominio](https://docs.ovh.com/it/domains/hosting_condiviso_il_record_spf/){.external}.|
|CAA|Consente di elencare le autorità di certificazione autorizzate a fornire certificati SSL per un dominio.|

### Step 1: accedi alla gestione della zona DNS del tuo dominio

Come prima cosa, connettiti al tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clicca su `Domini`{.action} nella barra del menu a sinistra, poi seleziona il nome del dominio interessato. Infine, seleziona la scheda` Zona DNS`{.action}.

La griglia mostra la configurazione del tuo dominio in OVH costituita dai vari record DNS, a ciascuno dei quali corrisponde una riga. Puoi filtrare il contenuto per tipo di record o per dominio.

![dnszone](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### Step 2: modifica la zona DNS del tuo dominio

Puoi modificare la zona DNS del tuo dominio aggiungendo, modificando o rimuovendo un record DNS. Per fare ciò, ci sono due possibilità:

- **modificare manualmente la zona utilizzando l’editor di testo**(solo per gli utenti esperti): nella scheda `Zona DNS`{.action}, clicca su `Utilizza l’editor di testo`{.action}, poi segui gli step;

- **utilizzare la configurazione assistita**.

Da questo momento, questa guida mostrerà soltanto la configurazione assistita.

> [!primary]
>
> Procurati le informazioni da modificare nella tua zona DNS. Se effettui questa modifica su richiesta di un provider di servizi, quest’ultimo ti ha precedentemente comunicato la lista degli elementi da modificare.
>

- **Aggiungi un nuovo record DNS**

Per aggiungere un nuovo record DNS, rimanendo posizionato sulla scheda `Zona DNS`{.action} del tuo Spazio Cliente, clicca sul pulsante `Aggiungi un record`{.action} nella tabella a destra. Seleziona il tipo di record DNS, poi segui gli step.

Verifica che questo record non esista già e che non punti a un target differente. Pertanto, filtra il contenuto della tabella per tipo di record o per dominio. Se quest’ultimo esiste già, ti invitiamo a modificarlo seguendo l’operazione descritta qui di seguito.

![dnszone](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

- **Modifica un record DNS esistente**

Per modificare un record DNS, sempre dalla scheda `Zona DNS`{.action} del tuo Spazio Cliente, clicca sull’icona a forma di ingranaggio sulla destra del record selezionato. Poi clicca su `Modifica il record`{.action} e segui gli step.

![dnszone](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

- **Elimina un record DNS** 

Per eliminare un record DNS, rimanendo posizionato sulla scheda `Zona DNS`{.action} del tuo Spazio Cliente, clicca sull’icona a forma di ingranaggio sulla destra del record selezionato. Poi clicca su `Elimina il record`{.action}, dopodiché segui gli step.

Puoi eliminare più record in una volta sola selezionando le caselle corrispondenti sulla sinistra, poi cliccando sul tasto `Elimina`{.action}.

![dnszone](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

### Step 3: attendi il tempo di propagazione

Una volta modificata la configurazione DNS del tuo dominio, la propagazione delle modifiche potrebbe richiedere fino a 24 ore.

Se vuoi ridurre il tempo di propagazione per le prossime modifiche della tua zona DNS, è possibile modificarlo regolando il TTL (*Time To Live*) che si applicherà a tutti i record della zona DNS.
Per fare ciò, vai sulla scheda `Zona DNS`{.action} del tuo Spazio Cliente, clicca sul tasto `Modifica il TTL di default`{.action} e poi segui gli step. 

Inoltre è possibile modificare il TTL di un record DNS. Tuttavia, questa operazione si può effettuare soltanto record per record, nel momento in cui vengono modificati oppure aggiunti.

## Per saperne di più

[Generalità sui server DNS](https://docs.ovh.com/it/domains/web_hosting_gestisci_il_tuo_server_dns/){.external}

[Aggiungere un record SPF alla configurazione di un dominio](https://docs.ovh.com/it/domains/hosting_condiviso_il_record_spf/){.external}

[Proteggi il tuo dominio dal Cache Poisoning con DNSSEC](https://www.ovh.it/domini/servizio_dnssec.xml){.external}

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}