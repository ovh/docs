---
title: Determinare se la funzionalità dei MAC virtuali è supportata su un server dedicato
excerpt: "Scopri come determinare se la funzionalità dei MAC virtuali è supportata su un server dedicato tramite l'API OVHcloud"
updated: 2021-12-09
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Per utilizzare la funzionalità dei MAC virtuali (VMAC) su un server dedicato, è necessario prima determinare se il server supporta questa funzionalità.

Il supporto di questa funzionalità è un prerequisito per tutte le azioni relative ai MAC virtuali.

**Questa guida ti mostra come verificare se il tuo server dedicato supporta la funzionalità dei MAC virtuali.**

## Prerequisiti

- Possedere un [server dedicato](https://www.ovhcloud.com/it/bare-metal/){.external}
- Essere connesso all'[API OVHcloud](https://api.ovh.com/){.external}

> [!primary]
> Se non conosci l'utilizzo dell'API OVHcloud, consulta la nostra guida Iniziare a utilizzare le [API OVHcloud](/pages/manage_and_operate/api/first-steps).

## Procedura

### Ottenere le informazioni

Utilizza la seguente chiamata API:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

Inserisci il nome del tuo server nel campo `serviceName` e clicca su `Execute`{.action}.

![SVMAC](images/support_virtual_mac_02.png){.thumbnail}

Una lista con un record "vmac / supported" che sarà "true" o "false" (valore booleico).

![SVMAC](images/support_virtual_mac_04.png){.thumbnail}

> [!primary]
> **Interpretazione del risultato**
>
> - **false**: su questo server non è possibile utilizzare le funzionalità associate ai MAC virtuali.
>
> - **true**: su questo server è possibile utilizzare le funzionalità associate ai MAC virtuali.
>

## Per saperne di più

[Iniziare a utilizzare le API OVHcloud](/pages/manage_and_operate/api/first-steps)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.