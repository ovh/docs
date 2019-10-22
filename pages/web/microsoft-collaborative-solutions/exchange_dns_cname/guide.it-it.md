---
title: 'Creare un record CNAME per aggiungere un dominio associato'
slug: exchange_20132016_aggiungi_un_record_di_tipo_cname
legacy_guide_number: g1519
excerpt: 'Scopri come aggiungere un record CNAME e a cosa serve'
section: 'Configurazione del servizio Exchange'
---

**Ultimo aggiornamento: 02/07/2018**

## Obiettivo

Dopo aver aggiunto un dominio al servizio Exchange, potrebbe essere richiesta anche la configurazione del record CNAME (DNS), con lo scopo di garantire che l'aggiunta del dominio sia legittima.

**Questa guida ti spiega l’importanza di un record CNAME e ti mostra come crearne uno in OVH**.


## Prerequisiti

- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
- Avere i permessi necessari per gestire Exchange dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
- Aver aggiunto un dominio sul servizio Exchange che necessita l’aggiunta di un record CNAME
- Avere i permessi necessari per modificare la configurazione del tuo dominio (zona DNS)


## Procedura

### Step 1: la diagnostica CNAME di OVH

La casellina di diagnostica **CNAME** (Canonical Name) appare in alcuni casi specifici quando si dichiara un dominio nel servizio Exchange,

con lo scopo di dimostrare che tu sei l'amministratore del dominio che vuoi dichiarare.

Questa casellina può apparire nei seguenti casi:

- il dominio dichiarato non è registrato con OVH
- il dominio dichiarato non è gestito dallo stesso ID cliente del servizio Exchange
- il dominio dichiarato non è configurato con OVH (non utilizza quindi i server DNS di OVH)

![Exchange](images/cname_exchange_diagnostic.png){.thumbnail}

### Step 2: recupera la configurazione CNAME di OVH

Seleziona la scheda `Domini associati`{.action} e clicca sulla casellina rossa `CNAME`{.action} per recuperare le informazioni necessarie.

Il record CNAME apparirà sull’immagine.

![Exchange](images/cname_exchange_informations.png){.thumbnail}

A questo punto puoi scegliere tra due opzioni:

- **se il tuo dominio è configurato con OVH**, puoi eseguire l’operazione descritta nello Step 3 direttamente dallo Spazio Cliente OVH;

- **se il tuo dominio non è configurato con OVH**, è necessario effettuare le modifiche attraverso l’interfaccia di gestione per la configurazione del tuo dominio.

> [!primary]
>
> Se il tuo dominio è registrato presso OVH, puoi verificarne la configurazione attraverso lo `Spazio Cliente OVH` cliccando sulla scheda Server DNS.
>

### Step 3: creare un record CNAME in OVH

Dallo Spazio Cliente, seleziona la voce Domini nel menu di sinistra e poi clicca sul dominio corrispondente. A questo punto seleziona la scheda `Zona DNS`{.action}.

Apparirà una tabella che mostra la configurazione del tuo dominio in OVH.  Ogni riga della tabella contiene un record DNS.

Per aggiungere un record CNAME, clicca sul pulsante `Aggiungi un record`{.action}.

![Exchange](images/cname_exchange_add_entry_step1.png){.thumbnail}

Nella finestra che apparirà ti vengono proposti diversi record DNS. Clicca su `CNAME`{.action} e inserisci le informazioni recuperate precedentemente dalla diagnostica Exchange.

![Exchange](images/cname_add_entry_dns_zone.png){.thumbnail}

Una volta inseriti tutti i dati, clicca su `Seguente`{.action}. Assicurati che il riepilogo delle informazioni sia corretto e infine clicca su `Conferma`{.action}.

> [!primary]
>
> La propagazione delle modifiche potrebbe richiedere da 1 a 24 ore.
>

Per verificare che la configurazione del record CNAME sia stata eseguita correttamente, clicca di nuovo su `Domini associati`{.action} dalla sezione Exchange. Se la casellina è diventata verde, l’aggiunta del dominio è andata a buon fine. In caso contrario, può darsi che la propagazione delle modifiche non sia ancora terminata.

![Exchange](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}.