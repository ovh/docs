---
title: 'Modificare una zona DNS di OVHcloud'
excerpt: 'Come modificare una zona DNS OVHcloud dallo Spazio Cliente'
slug: web_hosting_modifica_la_tua_zona_dns
section: 'DNS e zona DNS'
legacy_guide_number: g1604
---

**Ultimo aggiornamento: 29/08/2018**

## Obiettivo

La zona Domain Name System (DNS) di un dominio consiste nel file di configurazione in cui si archiviano le relative informazioni tecniche, chiamate record. Convenzionalmente, questi record consentono di collegare il dominio al server o ai server che ospitano il sito Internet e gli indirizzi email.

**Questa guida ti mostra come modificare la zona DNS OVHcloud dallo Spazio Cliente.**

## Prerequisiti

- Avere accesso alla gestione del dominio dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}
- Essere connesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}
- Utilizzare i server DNS di OVHcloud per la configurazione del dominio in questione

> [!warning]
>
> - Se il dominio non utilizza i server DNS di OVHcloud, è necessario realizzare la modifica dall’interfaccia del provider che gestisce la configurazione del tuo dominio.
> 
> - Se il dominio è registrato in OVHcloud, verifica che utilizzi la nostra configurazione accedendo allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} > `Server DNS`{.action} e selezionando il dominio interessato.
>

## Procedura

**Modificare i server DNS di un dominio è un’operazione delicata**: se non viene eseguita correttamente, potrebbe risultare impossibile raggiungere il proprio sito e ricevere nuovi messaggi nella casella di posta.

Essere a conoscenza delle diverse tipologie di record consente di modificare al meglio la zona DNS del dominio. La tabella seguente  descrive la funzione di ciascun record.

|Record|Descrizione|  
|---|---|
|A|Consente di associare un dominio a un indirizzo IP (IPv4) come, ad esempio, l’indirizzo IP del server nel quale è ospitato il sito Web.|
|AAAA|Consente di associare un dominio a un indirizzo IP (IPv6) come, ad esempio, l’indirizzo IP del server nel quale è ospitato il sito Web.|
|CNAME|Consente che un dominio possa utilizzare il o gli indirizzi IP di un altro dominio collegandoli tra loro attraverso la creazione di un alias. Ad esempio, se *www.mypersonaldomain.ovh* è un alias di *mypersonaldomain.ovh*, ciò indica che *www.mypersonaldomain.ovh* utilizzerà il o gli indirizzi IP di *mypersonaldomain.ovh*.|
|MX|Consente di associare un dominio a un server di posta come, ad esempio, l’indirizzo IP del server in cui è ospitata la soluzione email. È possibile che il provider disponga di vari server di posta: in questo caso darà necessario creare altrettanti record MX.|
|SRV|Consente di indicare l’indirizzo di un server che gestisce un servizio. Questo record può indicare, ad esempio, l’indirizzo di un server SIP o quello di un server che consente a un client di posta elettronica di configurarsi automaticamente attraverso l’<i>autodiscover</i>.|
|TXT|Consente di aggiungere il valore della tua scelta (in formato testo) ai parametri DNS del dominio. Questo record è quello utilizzato durante i processi di verifica.|
|SPF|Consente di impedire agli spammer di utilizzare il dominio per l'invio di email non autorizzate. Ad esempio, questo record può stabilire che solo il server del tuo provider di soluzioni email deve essere identificato come legittima fonte di invio. Per saperne di più consulta la nostra guida su [come aggiungere un record SPF alla configurazione di un dominio](../hosting_condiviso_il_record_spf/){.external}.|
|CAA|Consente di elencare le autorità di certificazione autorizzate a fornire certificati SSL per un dominio.|

> [!warning]
>
> Un record CNAME non può coesistere con un altro tipo di record dello stesso dominio o sottodominio. 
>

### Step 1: accedi alla gestione dei server DNS del dominio

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, seleziona il tuo servizio nella sezione `Domini`{.action} della colonna a sinistra e clicca sulla scheda `Zona DNS`{.action}.

Compare una tabella che mostra la configurazione OVHcloud del dominio: a ogni riga corrisponde un record DNS. Il contenuto può essere filtrato per tipo di record o per dominio.

![dnszone](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### Step 2: modifica la zona DNS del dominio

Per modificare la zona DNS del dominio è possibile aggiungere, modificare o rimuovere un record DNS in due modi diversi:

- **manualmente, utilizzando l’editor di testo**(solo per utenti avanzati): nella scheda `Zona DNS`{.action}, clicca su `Utilizza l’editor di testo`{.action} e segui gli step

- **tramite la configurazione guidata**

Questa guida descrive la procedura relativa alla configurazione guidata.

> [!primary]
>
> Recupera le informazioni da aggiornare nella zona DNS. Se la modifica è stata richiesta da un provider di servizi, è stata sicuramente fornita la lista degli elementi da modificare.
>

- **Aggiungi un nuovo record DNS**

Per aggiungere un record DNS resta posizionato sulla scheda `Zona DNS`{.action} dello Spazio Cliente, clicca sul pulsante `Aggiungi un record`{.action} a destra e seleziona il tipo di record.

Ti consigliamo di verificare che il record non risulti già esistente e non punti a un target differente filtrando il contenuto della tabella per tipo di record o dominio. Nel caso risulti esistente, modificalo seguendo la procedura descritta di seguito.

![dnszone](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

- **Modifica un record DNS esistente**

Per modificare un record DNS resta posizionato sulla scheda `Zona DNS`{.action} dello Spazio Cliente, clicca sull’icona a forma di ingranaggio a destra del record in questione e  clicca su `Modifica il record`{.action}.

![dnszone](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

- **Elimina un record DNS** 

Per eliminare un record DNS resta posizionato sulla scheda `Zona DNS`{.action} dello Spazio Cliente, clicca sull’icona a forma di ingranaggio a destra del record in questione e clicca su `Elimina il record`{.action}.

Per eliminare più record contemporaneamente è sufficiente selezionare le caselle corrispondenti e cliccare su `Elimina`{.action}.

![dnszone](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

### Step 3: attendi il tempo di propagazione

Una volta modificata la configurazione DNS OVHcloud del dominio, la propagazione potrebbe richiedere fino a 24 ore.

Per ridurre questa tempistica nell’eventualità di modifiche successive, è possibile cambiare il TTL (*Time To Live*). La modifica verrà applicata a tutti i record della zona DNS.
Per effettuare questa operazione seleziona la scheda `Zona DNS`{.action} dello Spazio Cliente e clicca sul pulsante `Modifica il TTL di default`{.action} a destra. 

Modificare il TTL di un solo record DNS è possibile esclusivamente effettuando l’operazione sui singoli record durante la fase di modifica o aggiunta.

## Per saperne di più

[Modificare i server DNS di un dominio OVHcloud](../web_hosting_gestisci_il_tuo_server_dns/){.external}

[Aggiungere un record SPF alla configurazione di un dominio](../hosting_condiviso_il_record_spf/){.external}

[Proteggere il dominio dal Cache Poisoning con DNSSEC](https://www.ovh.it/domini/servizio_dnssec.xml){.external}

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}