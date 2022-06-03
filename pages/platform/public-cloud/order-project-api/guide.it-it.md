---
title: Ordina un progetto Public Cloud tramite l'API OVHcloud
excerpt: Come ordinare un progetto Public Cloud con l'API OVHcloud
slug: ordina-progetto-public-cloud-api
section: Per iniziare
order: 9
---

**Ultimo aggiornamento: 22/12/2020**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>


## Obiettivo

La creazione di un progetto è il primo step per l'implementazione di [istanze Public Cloud](https://www.ovhcloud.com/it/public-cloud/).

**Questa guida ti mostra come ordinare un progetto Public Cloud tramite l'APIv6 OVHcloud.**

## Prerequisiti

- Disporre delle credenziali OVHcloud valide
- Disporre di una [modalità di pagamento](https://docs.ovh.com/it/billing/manage-payment-methods/) valida e registrata sul tuo account OVHcloud
- familiarizzare con il [funzionamento dell'APIv6 OVHcloud](https://docs.ovh.com/it/api/first-steps-with-ovh-api/).

## Procedura

Accedi all'[interfaccia API OVHcloud](https://api.ovh.com/console/) e segui gli step qui sotto.

### Step 1: costruire il carrello

Il primo step di un comando consiste nel creare un "carrello" (cart). A questo punto è possibile aggiungere un progetto Public Cloud.

#### Crea il carrello

Utilizza questa chiamata per creare il carrello:

> [!api]
>
> @api {POST} /order/cart
>

Scegli la tua filiale OVHcloud annota il numero del carrello ("cartId") nella risposta sarà necessario identificare questo carrello.

In seguito è necessario aggiungere un progetto Public Cloud come articolo. Utilizza questa chiamata con la tua "cartId" per verificare la disponibilità del servizio:

> [!api]
>
> @api {GET} /order/cart/{cartId}/cloud
>

Per verificare le impostazioni relative a un progetto Public Cloud, rispondi:

>
>**code_plan**: "project.2018"
>
>**productName**: "Progetto Public Cloud"
>

#### Aggiungi un progetto al carrello

Utilizza questa chiamata per aggiungere l'articolo al tuo carrello:

> [!api]
>
> @api {POST} /order/cart/{cartId}/cloud
>

Devono essere fornite le seguenti informazioni, estratte nelle fasi precedenti:

|Campo|Valore|
|---|---|
|cartId|*ID del tuo carrello*|
|duration|P1M|
|planCode|project.2018|
|priceMode|default|
|quantity|1|

La risposta includerà un "itemId" che può essere utilizzato (con il "cartId") per identificare l'articolo del carrello:

> [!api]
>
> @api {GET} /order/cart/{cartId}/item/{itemId}
>

Puoi verificare la lista dei parametri di configurazione disponibili per questo articolo con questa chiamata:

> [!api]
>
> @api {GET} /order/cart/{cartId}/item/{itemId}/requiredConfiguration
>

Utilizza questo endpoint per nominare il tuo progetto (`label: "descrizione"`):

> [!api]
>
> @api {POST} /order/cart/{cartId}/item/{itemId}/configuration
>

|Campo|Valore|
|---|---|
|cartId|*ID del tuo carrello*|
|itemId|*ID dell'articolo*|
|label|descrizione|
|value|*Nome del tuo progetto*|

Per applicare un voucher, utilizza la stessa chiamata con il marchio "voucher", ecc...

Le risposte includono una "configurazioneId" che può essere utilizzata (con "cartId" e "itemId") per recuperare o rimuovere la configurazione (GET):

> [!api]
>
> @api {DELETE} /order/cart/{cartId}/item/{itemId}/configurazione/{configurationId}
>


### Step 2: convalidare il carrello

Per verificare il contenuto del tuo carrello utilizza la scheda "cartId":

> [!api]
>
> @api {GET} /order/cart/{cartId}/checkout
>

La chiamata successiva ti permette di creare un link verso il tuo ordine. Per rinunciare al diritto di recesso, è necessario contrassegnare la casella corrispondente.

> [!api]
>
> @api {POST} /order/cart/{cartId}/checkout
>


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
