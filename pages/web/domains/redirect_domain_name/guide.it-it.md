---
title: "Reindirizzare un dominio gestito da OVHcloud"
slug: reindirizzamento-dominio
excerpt: "I diversi tipi di redirect e come creare un reindirizzamento per un dominio gestito da OVHcloud"
section: Generale
order: 01
---

**Ultimo aggiornamento: 27/09/2022**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Il reindirizzamento di un dominio consiste nel reindirizzarlo verso una nuova destinazione. Esistono diversi tipi di reindirizzamenti, ognuno dei quali risponde a esigenze specifiche.

**Scopri come reindirizzare il tuo dominio**

## Prerequisiti

- Disporre di [un dominio](https://www.ovhcloud.com/it/domains/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Essere connesso al tuo hosting Web (per un reindirizzamento tramite un file [.htaccess](#htaccess_rewrite)

## Procedura

### Comprendere il reindirizzamento di un dominio

Questa funzionalità permette di reindirizzare un dominio/sottodominio verso:

- un altro dominio/sottodominio già esistente:
    - **Esempio**: `domain.tld`
- un URL (Uniform Resource Locator) di sito Internet:
    - **Esempi**: `http://www.domain.tld/welcome/` o `https://www.domain.tld/welcome/` (se il dominio di destinazione dispone di un certificato SSL compatibile).

Queste azioni possono essere eseguite in diversi modi:

- **Dallo[Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)**, dove l'assistente di configurazione permette di impostare il reindirizzamento.
- **Tramite un metodo che richiede programmazione**. Dovrai creare in autonomia il reindirizzamento in un file (in genere un [.htaccess](#htaccess_rewrite).

> [!warning]
>
> L'attivazione di un reindirizzamento può avere conseguenze sull'indicizzazione del tuo sito Internet. 
> Presta la massima attenzione alle operazioni che intendi effettuare o contatta uno dei [provider specializzati](https://partner.ovhcloud.com/it/) nel referenziamento se necessario.
>
> Attenzione: un reindirizzamento creato dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) non permette di reindirizzare una URL in `https://` verso un altro dominio o URL. 
> Per creare questo tipo di reindirizzamento, dovrai necessariamente passare per una riscrittura dell'URL tramite un file ".htaccess" ad esempio.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.