---
title: 'Rendere sicuro un dominio con DNSSEC'
slug: proteggi_il_tuo_dominio_con_dnssec
excerpt: 'Come proteggere un dominio dal Cache Poisoning attivando DNSSEC'
section: 'Protezione e sicurezza'
order: 1
legacy_guide_number: g609
---

**Ultimo aggiornamento: 18/07/2018**

## Obiettivo

I server DNS contengono le configurazioni dei domini che, convenzionalmente, consentono di collegare il dominio a uno o più server che ospitano un sito Internet o caselle email. Negli ultimi anni alcuni hacker hanno sviluppato tecniche di poisoning a danno dei server DNS, riuscendo a reindirizzare il traffico verso le proprie macchine. Utilizzare DNSSEC è una valida soluzione per proteggere i domini da questo tipo di attacchi.

**Questa guida ti mostra come attivare il protocollo DNSSEC per rendere sicuro il tuo dominio in caso di DNS Cache Poisoning.**  
Per maggiori informazioni sul funzionamento di questa protezione, consulta la pagina relativa al [servizio DNSSEC](https://www.ovhcloud.com/it/domains/dnssec/){.external}.

## Prerequisiti

- Disporre di un [dominio](https://www.ovhcloud.com/it/domains/){.external} registrato in OVHcloud
- L’estensione del dominio deve essere compatibile con DNSSEC
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Web Cloud`{.action}

## Procedura

Attivare DNSSEC è possibile seguendo due modalità:

- **se il dominio utilizza server DNS OVHcloud**, l’operazione è disponibile direttamente dallo Spazio Cliente

- **se il dominio non utilizza server DNS OVHcloud**, contatta il provider responsabile della sua configurazione. Se ti occupi personalmente della gestione installa manualmente DNSSEC consultando, se necessario, la documentazione disponibile online.

> [!primary]
>
> Per verificare se il tuo dominio utilizza la configurazione OVHcloud accedi allo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Domini`{.action} e clicca sulla scheda `Server DNS`{.action}.
>

### Step 1: accedi alla gestione del dominio

Accedi alla sezione `Web Cloud` dello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e clicca su `Hosting`{.action}.

Visualizzi una tabella con tutte le informazioni generali del dominio. 

### Step 2: gestisci il DNSSEC del dominio

Sempre nella scheda `Informazioni generali`{.action} è possibile verificare lo stato di attivazione del DNSSEC sul dominio.

L’informazione è disponibile nel riquadro `Sicurezza`, sotto la voce `Delegazione Sicura (DNSSEC)`.

![dnssec](images/activate-dnssec-step2.png){.thumbnail}

Per attivare e disattivare DNSSEC è sufficiente spostare il pulsante da sinistra verso destra (e viceversa) e confermare la modifica nella nuova finestra.

![dnssec](images/activate-dnssec-step3.png){.thumbnail}

### Step 3: attendi la propagazione delle modifiche

Una volta completata l’operazione attendi il tempo necessario alla sua elaborazione. L’attivazione e disattivazione di DNSSEC potrebbe richiedere fino a 24 ore. 

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.