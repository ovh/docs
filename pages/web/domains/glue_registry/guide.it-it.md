---
title: 'Personalizzare i server DNS di un dominio'
slug: glue-registry
excerpt: 'Come modificare i server DNS del tuo dominio OVH'
section: 'DNS e zona DNS'
order: 7
legacy_guide_number: g1568
---

**Ultimo aggiornamento: 27/06/2019**

## Obiettivo

I server DNS ospitano le configurazioni DNS dei domini che, chiamate anche zone DNS, contengono informazioni tecniche denominate <i>record</i>. Convenzionalmente i record consentono di collegare il dominio a uno o più server che ospitano un sito Internet o caselle email.

In base alle esigenze, il nome dei server DNS dei domini OVH può essere personalizzato.

**Questa guida ti mostra come personalizzare i server DNS configurati sul tuo dominio OVH.**

## Prerequisiti

- Disporre di un [dominio](https://www.ovh.it/domini/){.external} registrato in OVH  
- Avere accesso alla sezione `Web`{.action} dello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}

## Procedura

**Personalizzare i server DNS di un dominio è un’operazione delicata**: un’azione errata potrebbe rendere impossibile raggiungere il sito e ricevere nuovi messaggi nella casella di posta. Per eseguire l’operazione segui gli step descritti in questa guida o, in caso di dubbi, rivolgiti a un esperto del settore.

### Step 1: aggiungi i record GLUE

Accedi all’area `Web` dello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, seleziona il tuo servizio nella sezione `Domini`{.action} della colonna a sinistra e clicca sulla sulla scheda `GLUE`{.action}.

Visualizzi una tabella con tutti i record GLUE configurati per il tuo dominio. Per aggiungerne uno, clicca sul pulsante `Aggiungi`{.action}.

![glueregistry](images/customize-dns-servers-step1.png){.thumbnail}

Nella nuova finestra, inserisci le informazioni richieste:

|Campo|Descrizione|  
|---|---|
|Nome dell’host|Indica l’hostname che intendi utilizzare come server DNS personalizzato.|
|IP di destinazione|Indica gli IP a cui deve essere associato l’hostname, cioè l’indirizzo IP del server DNS utilizzato dal tuo dominio. Se il dominio utilizza i server DNS OVH e non conosci l’indirizzo IP corrispondente, è possibile recuperare questa informazione eseguendo il comando `dig`. L’indirizzo IP comparirà nella sezione`ANSWER SECTION`, accanto alla “A”.|

Una volta inserite le informazioni clicca sul pulsante`Seguente`{.action}, leggi le informazioni mostrate e clicca su `Conferma`{.action}. Ripeti l’operazione per tutti i server DNS utilizzati dal tuo dominio.

![glueregistry](images/customize-dns-servers-step2.png){.thumbnail}

### Step 2: crea i record DNS di tipo A corrispondenti

A questo punto è necessario creare i record A per gli hostname definiti nello step precedente, ognuno dei quali deve avere come destinazione l’indirizzo IP corrispondente al nome dell’host creato.

Questa operazione deve essere eseguita dall’interfaccia del provider che gestisce la configurazione DNS del tuo dominio. Ora possono presentarsi due eventualità:

- **se il dominio non utilizza la configurazione DNS di OVH**, contatta il provider responsabile della sua gestione e, una volta effettuata l’operazione, passa allo step successivo

- **se il dominio utilizza la configurazione DNS di OVH**, seleziona la scheda `Zona DNS`{.action}e aggiungi un nuovo record con il pulsante `Aggiungi un record`{.action}. Seleziona “A” come tipo di record e segui gli step fino al completamento dell’operazione. Se necessario, segui la procedura descritta nella guida [Modificare una zona DNS OVH](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/){.external}

![glueregistry](images/customize-dns-servers-step3.png){.thumbnail}

### Step 3: modifica i server DNS del dominio

A questo punto non resta che modificare i server DNS del dominio. Per effettuare questa operazione, seleziona la scheda `Server DNS`{.action}, clicca sul pulsante `Modifica i server DNS`{.action} e, nelle caselle di testo, sostituisci i server DNS correnti con i nuovi. 

Se necessario, segui la procedura descritta nella guida [Modificare i server DNS di un dominio OVH](https://docs.ovh.com/it/domains/web_hosting_gestisci_il_tuo_server_dns/){.external}.

Una volta completata l’operazione attendi il tempo necessario alla sua elaborazione, tenendo in considerazione che la propagazione delle modifiche potrebbe richiedere fino a 48 ore.

![glueregistry](images/customize-dns-servers-step4.png){.thumbnail}

## Per saperne di più

[Modificare i server DNS di un dominio OVH](https://docs.ovh.com/it/domains/web_hosting_gestisci_il_tuo_server_dns/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.