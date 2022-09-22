---
title: 'Aggiungere un record MX alla configurazione di un dominio'
excerpt: 'Come creare un nuovo record MX per il tuo dominio OVHcloud'
slug: aggiungere-record-mx-configurazione-dominio
legacy_guide_number: g2012
section: 'DNS e zona DNS'
order: 04
---

**Ultimo aggiornamento: 21/09/2022**

## Obiettivo

Il record MX è un elemento che permette di associare un dominio e un server di posta, consentendo ai server che inviano email al tuo account di sapere esattamente dove consegnare i messaggi. Se il provider utilizzato dispone di più server di posta, è necessario creare più record MX. 

**Questa guida ti mostra come aggiungere un record MX alla configurazione di un dominio OVHcloud.**

## Prerequisiti

- Avere accesso alla gestione del dominio dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Il dominio deve utilizzare i server DNS OVHcloud

> [!warning]
>
> - Se il dominio non utilizza i server DNS OVHcloud, la modifica dei record MX deve essere eseguita dall’interfaccia del provider che ne gestisce la configurazione.
>
> - Per i domini registrati in OVHcloud è invece possibile verificare la configurazione direttamente dallo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, cliccando sulla scheda `Server DNS`{.action}.
>

## Procedura

### Step 1: conoscere alcune nozioni di base del record MX

Un record MX associa il dominio al server di posta del tuo provider, ad esempio OVHcloud. Quando ti viene inviata un’email, il server che esegue l’invio sa verso quale server inoltrare il messaggio proprio grazie al record MX. 

Per uno stesso dominio è possibile configurare più record MX. In questo caso, per ciascuno è necessario definire una priorità  in modo che i server che inviano le email sappiano a quale macchina recapitare la posta per prima.  Tuttavia, è possibile aggiungere soltanto record MX che appartengono allo stesso provider. 

**Modificare i record MX di un dominio è un’operazione delicata**: un’azione errata potrebbe rendere impossibile la ricezione di nuovi messaggi sull’account di posta.  Ti consigliamo quindi di prestare la massima attenzione quando effettui questa operazione.

### Step 2: conoscere la configurazione MX di OVHcloud

Qui sotto è disponibile la configurazione MX di OVHcloud da utilizzare con i nostri servizi di posta MX Plan (da solo o incluso in un piano di [hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external}, [Email Pro](https://www.ovhcloud.com/it/emails/email-pro/){.external} e [Exchange](https://www.ovhcloud.com/it/emails/hosted-exchange/){.external}. I nostri server di posta dispongono anche di un Antispam e un Antivirus. 

|Dominio|TTL|Record|Priorità|Destinazione|
|---|---|---|---|---|
|Lasciare il campo vuoto|3600|MX|1|mx0.mail.ovh.net|
|Lasciare il campo vuoto|3600|MX|5|mx1.mail.ovh.net|
|Lasciare il campo vuoto|3600|MX|50|mx2.mail.ovh.net|
|Lasciare il campo vuoto|3600|MX|100|mx3.mail.ovh.net|
|Lasciare il campo vuoto|3600|MX|200|mx4.mail.ovh.net.|

A questo punto è necessario utilizzare i diversi record MX nella configurazione DNS del tuo dominio. Per sapere come effettuare questa operazione, prosegui con lo step successivo.

### Step 3: modifica la configurazione di un record MX OVHcloud

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Seleziona il tuo dominio nella sezione `Domini`{.action} e clicca sulla scheda `Zona DNS`{.action}.

Compare una tabella che mostra la configurazione OVHcloud del tuo dominio: ogni riga corrisponde a un diverso record DNS. Per prima cosa, utilizza i filtri per verificare se esistono record MX nella configurazione DNS OVHcloud del tuo dominio.

![dnsmxrecord](images/mx-records-dns-zone.png){.thumbnail}

Nel caso in cui il record MX sia presente e voglia modificarlo, clicca sui tre puntini a destra e clicca su `Elimina record`{.action}. Assicurati di non aver eliminato tutti i record MX prima di aggiungerne di nuovi.

Per verificare più rapidamente se esistono già record MX, seleziona il record di tipo **MX** con il filtro sopra la tabella DNS e conferma per visualizzare solo i record DNS MX della tua zona DNS.

Per eseguire questa operazione, clicca su `Aggiungi un record`{.action} a destra della tabella e seleziona `MX`{.action}. In base al servizio email scelto, inserisci le informazioni richieste: 

- **se utilizzi una soluzione di posta OVHcloud**, consulta il paragrafo precedente di questa guida: [Step 2: conoscere la configurazione MX di OVHcloud](./#step-2-conoscere-la-configurazione-mx-di-ovh){.external}

- **se utilizzi un’altra soluzione di posta**, segui le indicazioni fornite dal provider del tuo servizio di posta.

Una volta inserite le informazioni, prosegui con gli step successivi e clicca su `Conferma`{.action}.

> [!primary]
>
> La propagazione delle modifiche potrebbe richiedere da 4 a 24 ore.
>

## Per saperne di più

[Modificare i server DNS di un dominio OVHcloud](https://docs.ovh.com/it/domains/web_hosting_gestisci_il_tuo_server_dns/){.external}

[Modificare una zona DNS OVHcloud](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/){.external}

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni (offerte di supporto)(https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com>.
