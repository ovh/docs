---
title:  Trasferisci un IP FailOver
excerpt: Questa guida ti mostra come spostare un IP Failover dallo Spazio Cliente OVH o via API OVHcloud
slug: ip-fo-move
section: Rete e IP
order: 7
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 12/03/2021**

## Obiettivo

Gli IP Failover possono essere trasferiti tra i servizi utilizzati. L'interesse è di non perdere la tua reputazione, la tua referenziazione e migliorare la continuità di servizio delle tue applicazioni e sistemi.
Questa tecnologia permette di scambiare gli indirizzi IP da una soluzione all'altra in meno di un minuto, praticamente senza alcuna interruzione per i tuoi utenti. Può essere utilizzata in caso di migrazione di servizi (ad esempio, spostamento dei progetti dall'ambiente di sviluppo a quello di produzione) o in caso di trasferimento verso un server di backup in caso di guasto.

**Come migrare un IP Failover dallo Spazio Cliente OVHcloud o tramite le API OVHcloud**

## Prerequisiti

- Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/){.external} nello Spazio Cliente OVHcloud
- Disporre di un [indirizzo IP Fail](https://www.ovhcloud.com/it/bare-metal/ip/) Over
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

> [!primary]
> Un IP FailOver non può essere spostato da una zona all'altra. Ad esempio, un IP situato nel datacenter SBG potrà essere spostato verso GRA o RBX ma non potrà essere spostato verso BHS

### Sposta un IP dallo Spazio Cliente OVHcloud

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca sul menu `Bare Metal Cloud`{.action} e poi sulla sezione `IP`{.action} in basso a sinistra.

![Spazio Cliente](images/manager01.png){.thumbnail}

Il menu a tendina "Service" ti permette di selezionare solo gli IP Failover.

Clicca sul pulsante `...`{.action} a destra dell'indirizzo IP da spostare e poi su `Sposta l'IP Failover`{.action}.

![Spazio Cliente](images/manager02.png){.thumbnail}

Nel menu contestuale che appare, seleziona il servizio verso cui spostare l'indirizzo IP.

Clicca su `Seguente`{.action} e poi su `Conferma`{.action}.

![Spazio Cliente](images/manager03.png){.thumbnail}

### Trasferisci un IP via API

Accedi alla pagina web delle [API OVHcloud](https://api.ovh.com/).

Per prima cosa, è meglio verificare se l'indirizzo IP può essere spostato.
<br>Per verificare se l'IP può essere spostato verso uno dei tuoi server dedicati, utilizza questa chiamata:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/ipCanBeMovedTo
>

- `serviceName`: il riferimento del server dedicato di destinazione
- `ip`: l'indirizzo IP FailOver da spostare

Per spostare l'indirizzo IP, utilizza questa chiamata:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/ipMove
>

- `serviceName`: il riferimento del server dedicato di destinazione
- `ip`: l'indirizzo IP FailOver da spostare

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
