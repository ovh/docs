---
title: 'Creare un DNS secondario su un server dedicato'
excerpt: 'Come configurare un DNS secondario sul tuo server dedicato OVHcloud'
updated: 2021-01-08
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 12/01/2021**

## Obiettivo

Se configuri il tuo server dedicato come server DNS, puoi utilizzare il DNS OVHcloud secondario per ospitare una zona secondaria. In questo modo, il DNS del tuo dominio resterà disponibile anche se il server DNS principale non risponde più.

**Questa guida ti mostra come aggiungere un dominio allo Spazio Cliente OVHcloud per utilizzare un server DNS secondario.**


## Prerequisiti

- Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/){.external}
- Disporre di un [dominio](https://www.ovhcloud.com/it/domains/){.external} di gestione amministrativa o tecnica
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi relativi all'amministrazione, all'utilizzo o alla realizzazione dei servizi su un server, ti consigliamo di contattare un esperto del settore.
> 


## Procedura

### Aggiungi un dominio <a name="ajoutdomaine"></a>

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), accedi alla sezione `Bare Metal Cloud`{.action} e seleziona il tuo server da `Server dedicati`{.action}.

Clicca sulla scheda `DNS secondaria`{.action} e poi sul pulsante `Aggiungi un dominio`{.action}.

![DNS secondario](images/cp-01.png){.thumbnail}

Inserisci il tuo indirizzo IP e il dominio da aggiungere e clicca su `Seguente`{.action}.

![DNS secondario](images/cp-02.png){.thumbnail}

Una volta cliccato su `Seguente`{.action}, la verifica del dominio verrà attivata. Se non hai già aggiunto un record TXT alla tua zona DNS, segui prima le istruzioni [descritte qui sotto](#verificationdomaine). Altrimenti clicca su `Avanti`{.action}.

![DNS secondario](images/cp-03.png){.thumbnail}

Dopo aver cliccato su `Aggiungi`{.action} nell'ultima finestra, il dominio sarà aggiunto al server DNS secondario OVHcloud.

I domini aggiunti saranno elencati in questa scheda e potranno essere eliminati cliccando sul pulsante `...`{.action}. Il nome del server DNS secondario apparirà accanto al dominio.

![DNS secondario](images/cp-05.png){.thumbnail}

> [!primary]
>
> Le altre azioni necessarie per configurare il tuo DNS per il tuo dominio sono generalmente:
>
> - configurazione di un servizio DNS (come *BIND*)
> - configurazione delle registrazioni GLUE
> - autorizzazione dei trasferimenti di zona
>
> Per completare questi compiti amministrativi, consulta la documentazione esterna pertinente.

### Verifica dell'autorizzazione per il dominio <a name="verificationdomaine"></a>

Prima di poterlo aggiungere al DNS secondario OVHcloud, è necessario confermare l'autorizzazione a gestire il dominio. tramite una ricerca DNS automatizzata sul sottodominio *ownercheck.tuodominio*. A questo scopo viene generata una stringa di caratteri unica, visualizzata nello Spazio Cliente OVHcloud.

- Se il dominio è gestito da un provider esterno o utilizza server DNS esterni allo stadio attuale, accedi allo Spazio Cliente del tuo provider DNS e aggiungi un record TXT con il sottodominio "ownercheck" e il valore fornito allo Step 2 dell'[Aggiungi un dominio"](#ajoutdomaine).

- Se il dominio è gestito da OVHcloud come server di registrazione e utilizza server DNS OVHcloud, chiudi la finestra cliccando su `Annulla`{.action}. Segui le istruzioni di [questa guida](../../domains/web_hosting_modifica_la_tua_zona_dns/) per aggiungere il record TXT nel tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

![DNS secondario](images/cp-04.png){.thumbnail}

Dopo aver aggiunto correttamente il record TXT alla zona DNS del dominio, ripeti gli [step](#ajoutdomaine) e chiudi la procedura.

## Per saperne di più

[Modifica una zona DNS OVHcloud](/pages/web/domains/dns_zone_edit){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
