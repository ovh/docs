---
title: 'Utilizzare una chiave SSH nell’interfaccia Public Cloud'
slug: utilizzare_una_chiave_ssh_nell_interfaccia_public_cloud
excerpt: 'Guida passo dopo passo su come utilizzare una chiave SSH per semplificare l’accesso ai server Cloud.'
section: Gestione dallo Spazio Cliente OVHcloud
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento 10/02/2022**

## Obiettivo

Il protocollo SSH ti permette di accedere e comunicare con un server in modo autenticato e criptato.

**Questa guida ti mostra come utilizzare le chiavi SSH dallo Spazio Cliente OVHcloud.**

### Prerequisiti

- Aver creato un [progetto Public Cloud](https://docs.ovh.com/it/public-cloud/crea_il_primo_progetto_public_cloud/) nello Spazio Cliente OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- [Aver creato una chiave SSH](https://docs.ovh.com/it/public-cloud/primi-passi-public-cloud/)

## Procedura

> [!primary]
>
Per salvare una chiave SSH nello Spazio Cliente OVHcloud, ti consigliamo di utilizzare la cifratura RSA o ECDSA. ED25519 non è attualmente supportato.
>

Per aggiungere una chiave SSH dall’interfaccia Public Cloud esistono due modi:

- Il primo, più diretto, consiste nell’aggiungere la chiave al momento della creazione di un’istanza.
- Il secondo metodo consiste nell’aggiungere una chiave dall’interfaccia di gestione delle chiavi SSH.

## Creazione di un’istanza

Per creare un’istanza Cloud, accedi all’interfaccia Public Cloud e clicca su `Crea un’istanza`{.action} dal menu `Instances`{.action} situato nella sezione **Compute** del menu a sinistra.

![Aggiungi un server](images/compute.png){.thumbnail}

Quindi, al momento della creazione dell’istanza, e allo step 3, ti verrà richiesta la chiave SSH.

![Aggiungi un server](images/selectkey.png){.thumbnail}

Se disponi già delle chiavi, seleziona semplicemente la chiave di tua scelta.

Per aggiungere una chiave, clicca su `Aggiungi una chiave`{.action}. Attribuisci un nome alla chiave e inseriscilo nel campo “Nome della chiave SSH”. Poi incolla la chiave nel campo “Chiave SSH”. Per completare l’operazione, clicca su `Aggiungi chiave`{.action}.

![Aggiungi una chiave](images/addkey.png){.thumbnail}

## Dall’interfaccia di gestione delle chiavi

Una volta selezionata l’opzione “Chiavi SSH” dal menu a sinistra del tuo progetto, una scheda “Chiave SSH” sarà disponibile.

![Aggiungi una chiave](images/addkeymenu.png){.thumbnail}

Dopo aver attribuito un nome alla chiave e averla incollata nell’apposito campo, clicca su `Aggiungi una chiave`{.action}e infine su `Aggiungi questa chiave`{.action}.

![Aggiungi una chiave](images/addkeymenu1.png){.thumbnail}

Questa chiave potrà essere utilizzata al momento della [creazione della tua prossima istanza Cloud](https://docs.ovh.com/it/public-cloud/come_utilizzare_la_tua_istanza_public_cloud/){.ref}.

## Per saperne di più
  
Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.