---
title: 'Modificare i server DNS di un dominio OVHcloud'
slug: web_hosting_gestisci_il_tuo_server_dns
excerpt: 'Come modificare i server DNS di un dominio OVHcloud'
legacy_guide_number: g2015
section: 'DNS e zona DNS'
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 18 febbraio 2021**

## Obiettivo

### Capire il concetto di DNS 

La sigla DNS, che indica **D**omain **N**ame **S**ystem, è un insieme di elementi che permettono di far corrispondere un dominio con un indirizzo IP.

Per maggiori informazioni, consulta la guida Modificare una [zona DNS di OVHcloud](../web_hosting_modifica_la_tua_zona_dns/#understanddns).

### Server DNS 

I **server DNS** contengono i file di configurazione DNS dei domini, chiamati **zone DNS**.

![DNS](images/dnsserver.png){.thumbnail}

I server DNS sono generalmente utilizzati per gruppi di due (primario e secondario), per ottenere una ridondanza in caso di guasto di uno dei server DNS.

**Questa guida ti mostra come modificare i server DNS configurati sul tuo dominio OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisiti

- Disporre di un [dominio](https://www.ovhcloud.com/it/domains/) registrato in OVHcloud
- Disporre delle autorizzazioni [per gestire](../../customer/gestisci_i_tuoi_contatti/){.external} il dominio dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

> [!primary]
>
> Se il dominio non è registrato in OVHcloud, è necessario modificare i server DNS utilizzando l'interfaccia fornita dal provider di servizi che lo gestisce.
>

## Procedura

> [!warning]
>
> **Quando modifichi i server DNS di un dominio, ti consigliamo di fare attenzione.** Un errore di modifica può rendere il tuo sito Web inaccessibile o impedire ai tuoi indirizzi di posta di ricevere nuove email. Comprendere i possibili effetti di una modifica è importante per effettuare l’operazione con la massima consapevolezza.
>

Quando si modificano i server DNS di un dominio, cambia anche la configurazione DNS utilizzata. La nuova configurazione DNS sostituisce la precedente ed è salvata sui nuovi server DNS. Tecnicamente, il dominio utilizza una nuova zona DNS.

Attenzione:

- Durante la modifica del server DNS (e.g. DNS esterno da DNS OVHcloud), il contenuto della configurazione DNS precedente non viene replicato automaticamente nella nuova. Assicurati che la tua nuova zona DNS includa tutti i record DNS richiesti per il corretto funzionamento dei servizi associati al tuo dominio (ad esempio, il tuo sito Web e i tuoi indirizzi email).

- Per modificare un solo elemento della configurazione DNS corrente (ad esempio un record DNS), ti consigliamo di seguire la nostra guida per modificare la zona DNS: Modificare [una zona DNS OVHcloud](../web_hosting_modifica_la_tua_zona_dns/){.external}.

- Alcune organizzazioni, i Registry, che gestiscono le estensioni dei domini, hanno esigenze particolari relative ai server DNS (quantità di server nomi, valore delle registrazioni...). In caso di dubbi, contatta il Registro responsabile del dominio.

Assicurati che le modifiche non rendano il tuo dominio inaccessibile. Se non ne sei sicuro, contatta la persona che ti chiede di apportare queste modifiche.


### Accedere alla gestione dei server DNS OVHcloud

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca su `Domini`{.action} e seleziona il tuo dominio. e clicca sulla scheda `Server DNS`{.action}.

Visualizzi una tabella con tutti i server DNS OVHcloud configurati per il tuo dominio. A ogni riga corrisponde un server DNS. 

> [!primary]
>
> Quando utilizzi i server DNS OVHcloud, i numeri dei server non hanno alcun legame con i servizi che utilizzi. Solo l'opzione [DNS anycast](https://www.ovhcloud.com/it/domains/options/dns-anycast/) utilizza server DNS specifici che ti vengono automaticamente attribuiti.

![dns server](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Modifica i server DNS

Per utilizzare server DNS esterni è necessario sostituirli ai server DNS OVHcloud e non aggiungerli ai server DNS esterni.

Clicca su `Modifica i server DNS`{.action} a destra.

Nei campi di testo, **sostituisci** i valori attuali dei server DNS con le informazioni relative ai nuovi server che vuoi definire. Per aggiungere altri server alla lista attiva, clicca sul pulsante `+`{.action} a destra dell'ultima riga della tabella. Nella tabella compare una nuova riga con alcuni campi di testo da completare.

> [!warning]
>
> Non mescolare un gruppo di server DNS con un altro
> Ad esempio, *DNS19.ovh.net* e *ns19.ovh.net* corrispondono a un gruppo di server DNS OVHcloud, sono identici e sincronizzati. Se aggiungiamo server DNS esterni a OVHcloud (o di un gruppo OVHcloud diverso), la risoluzione DNS verrà eseguita casualmente tra i server DNS OVHcloud e i server DNS esterni indicati.

Una volta inserite le informazioni, clicca su `Applica la configurazione`{.action}. Lo stato dei server DNS verrà aggiornato nella tabella con le modifiche appena eseguite.

![dns server](images/edit-dns-server-ovh-step2.png){.thumbnail}

### Reinizializza i server DNS 

Cliccando sul pulsante `Reimposta i server DNS`{.action}, puoi reinizializzare i server DNS correnti sostituendoli automaticamente con i server DNS OVHcloud originari. Ti consigliamo di utilizzare questa opzione solo se vuoi riutilizzare i server DNS OVHcloud. 

![dns server](images/edit-dns-server-ovh-step3.png){.thumbnail}

Una volta completata l’operazione attendi il tempo necessario alla sua elaborazione, tenendo in considerazione che: 

- la modifica apportata in OVHcloud deve essere presa in carico dal Registro che gestisce l'estensione del dominio. Lo stato di avanzamento dell'operazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Domini`{.action} e poi `Operazioni in corso`{.action}.
- una volta applicata dall’organismo responsabile, la propagazione delle modifiche potrebbe richiedere fino a 48 ore.

## Per saperne di più

[ Modifica di una zona](../web_hosting_modifica_la_tua_zona_dns/){.external} DNS OVHcloud.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
