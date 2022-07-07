---
title: 'Assegnare un MAC virtuale a un IP Failover'
slug: network-virtual-mac
excerpt: 'Scopri come aggiungere un indirizzo MAC virtuale e come associarlo a un IP Failover'
section: 'Rete e IP'
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 17/05/2022**

## Obiettivo

OVHcloud ti permette di associare un indirizzo MAC virtuale a un indirizzo IP al fine di poter creare VM con una configurazione <i>bridge</i> sul tuo server.

**Questa guida ti mostra come creare un indirizzo MAC virtuale e come associarlo a un IP Failover.**

## Prerequisiti

- Possedere un [server dedicato](https://www.ovh.it/server_dedicati/){.external}
- Disporre di un [indirizzo IP Failover](https://www.ovh.it/server_dedicati/ip_failover.xml){.external} o di un blocco IP Failover (RIPE)
- Essere connesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} o all'[API OVHcloud](https://api.ovh.com/console/)
- Il tuo server deve supportare i MAC virtuali. Consulta [questa guida](https://docs.ovh.com/it/dedicated/network-support-virtual-mac/) per determinarlo.

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](https://eco.ovhcloud.com/it/about/).
>
> Per maggiori informazioni, consulta la nostra [a confronto](https://eco.ovhcloud.com/it/compare/).

> [!primary]
> Se non conosci l'utilizzo dell'API OVHcloud, consulta la nostra guida [Iniziare a utilizzare le API OVHcloud](https://docs.ovh.com/it/api/first-steps-with-ovh-api/).

## Procedura

### Assegna un indirizzo MAC

#### Tramite lo Spazio Cliente OVHcloud

Una volta connesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, accedi al menu `Bare Metal Cloud`{.action} e apri la sezione `IP`{.action}.

![IPFO](images/manageIPOVHcloud.png){.thumbnail}

Successivamente, individua il tuo indirizzo IP Failover (o il tuo blocco) nella lista, clicca sul pulsante `...`{.action} per visualizzare la lista delle opzioni e seleziona Aggiungi un MAC virtuale.

![IPFO](images/addvmac.png){.thumbnail}

Nella finestra di dialogo, seleziona il tipo di indirizzo dal menu a tendina, inserisci il nome della macchina virtuale e infine clicca su `Conferma`{.action}.

> [!primary]
>
> **Tipo**: si tratta del tipo di indirizzo MAC virtuale (“VMware” per il sistema VMware ESXi e “ovh” per tutti gli altri sistemi di virtualizzazione).
>
> **Nome della macchina virtuale**: si tratta del nome che intendi assegnare all’indirizzo MAC virtuale per poi ritrovare più facilmente la coppia IP/MAC.
>

![IPFO](images/addvmac2.png){.thumbnail}


> [!primary]
>
> Ricordati di assegnare l’indirizzo MAC virtuale creato durante la configurazione della tua macchina virtuale.
> 

#### Via API OVHcloud

Utilizza questa chiamata API:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}

### Elimina un indirizzo MAC

> [!warning]
>
> La rimozione di un indirizzo MAC è definitiva e non sarà quindi più possibile recuperarlo in seguito.
> 

#### Tramite lo Spazio Cliente OVHcloud

Per eliminare un indirizzo MAC virtuale associato a un IP Failover, collegati al tuo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, accedi al menu `Bare Metal Cloud`{.action} e apri la sezione `IP`{.action}. Seleziona il server per visualizzare gli IP Failover o i blocchi IP associati.

Infine clicca sul pulsante `...`{.action} sulla destra e seleziona la voce `Elimina il MAC virtuale`{.action}.

#### Via API OVHcloud

Utilizza questa chiamata API:

> [!api]
>
> @api {DELETE} /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}
>

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.