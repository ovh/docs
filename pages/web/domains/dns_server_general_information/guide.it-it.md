---
title: 'Modificare i server DNS di un dominio OVH'
slug: web_hosting_gestisci_il_tuo_server_dns
excerpt: 'Come modificare i server DNS di un dominio OVH'
legacy_guide_number: g2015
section: 'DNS e zona DNS'
order: 1
---

**Ultimo aggiornamento: 16/07/2019**

## Obiettivo

I server DNS ospitano le configurazioni DNS dei domini che, chiamate anche zone DNS, contengono informazioni tecniche denominate _record_. Convenzionalmente i record consentono di collegare il dominio a uno o più server che ospitano un sito Internet o caselle email.

Si può quindi affermare che i record salvati su server DNS permettono ai domini di essere raggiungibili su Internet.

**Questa guida ti mostra come modificare i server DNS configurati sul tuo dominio OVH.**

## Prerequisiti

- Disporre di un [dominio](https://www.ovh.it/domini/){.external} registrato in OVH
- Disporre delle [autorizzazioni per la gestione](https://docs.ovh.com/it/customer/gestisci_i_tuoi_contatti/){.external} del dominio dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}

> [!warning]
>
> Se il tuo dominio non è registrato in OVH, la modifica dei server DNS deve essere eseguita dall’interfaccia del provider che gestisce il tuo dominio.
>

## Procedura

**Modificare i server DNS di un dominio è un’operazione delicata**: un’azione errata potrebbe rendere impossibile raggiungere il tuo sito e ricevere nuovi messaggi nella tua casella di posta. Comprendere i possibili effetti di una modifica è importante per effettuare l’operazione con la massima consapevolezza.  

Quando si modificano i server DNS di un dominio, cambia anche la configurazione DNS utilizzata. La nuova configurazione viene salvata sui nuovi server DNS e sostituisce la precedente. Tecnicamente, il dominio utilizza una nuova zona DNS.

Attenzione:

- il contenuto della configurazione DNS precedente non viene replicato automaticamente sulla nuova, ed è quindi necessario verificare che siano presenti tutti gli elementi essenziali al corretto funzionamento dei servizi associati al dominio (ad esempio, un sito Internet o una casella email)

- per modificare un solo elemento della configurazione DNS corrente (ad esempio un record), ti consigliamo di agire direttamente sulla zona DNS seguendo le istruzioni riportate nella guida [Modificare una zona DNS OVH](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/){.external}

> [!warning]
>
> Prima di apportare qualsiasi modifica, assicurati che l‘operazione non abbia impatto sulla raggiungibilità del tuo dominio. In caso di dubbi, contatta la persona che ha richiesto la modifica e chiedi conferma della sua correttezza.
>

### Step 1: accedi alla gestione dei server DNS del dominio

Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, seleziona il tuo servizio nella sezione `Domini`{.action} della colonna a sinistra e clicca sulla scheda `Server DNS`{.action}.

Visualizzi una tabella con tutti i server DNS OVH configurati per il tuo dominio. A ogni riga corrisponde un server DNS. 

![dns server](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Step 2: modifica i server DNS del dominio

Per effettuare questa operazione clicca sul pulsante `Modifica i server DNS`{.action} e, nelle caselle di testo, sostituisci i server DNS correnti con i nuovi. Per aggiungere altri server alla lista, clicca sul simbolo `+`{.action} a destra dell’ultima riga. Nella tabella compare una nuova riga con alcuni campi di testo da completare.

Una volta inserite tutte le informazioni, clicca su `Applica la configurazione`{.action}. Lo stato dei server DNS verrà aggiornato nella tabella con le modifiche appena eseguite.

> [!primary]
>
> Il pulsante `Reinizializza i server DNS`{.action} permette di sostituire i server DNS correnti del dominio con i server OVH originari: utilizza questa opzione per ripristinare i server DNS OVH.  
>

![dns server](images/edit-dns-server-ovh-step2.png){.thumbnail}

### Step 3: attendi la propagazione delle modifiche

Una volta completata l’operazione attendi il tempo necessario alla sua elaborazione, tenendo in considerazione che: 

- la modifica apportata in OVH deve essere presa in carico dall’organismo che gestisce l’estensione del tuo dominio. Lo stato di avanzamento della richiesta è disponibile nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Operazioni in corso`{.action}.

- una volta applicata dall’organismo responsabile, la propagazione delle modifiche potrebbe richiedere fino a 48 ore.

## Per saperne di più

[Gestire i contatti dei servizi OVH](https://docs.ovh.com/it/customer/gestisci_i_tuoi_contatti/){.external}

[Modificare una zona DNS OVH](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.