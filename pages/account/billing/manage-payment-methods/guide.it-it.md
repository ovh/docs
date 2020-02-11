---
title: 'Gestire i metodi di pagamento'
slug: manage-payment-methods
excerpt: 'Come gestire i tuoi metodi di pagamento nello Spazio Cliente OVHcloud'
section: Fatturazione
---

**Ultimo aggiornamento: 20/11/2019**

## Obiettivo
Nello Spazio Cliente OVHcloud puoi salvare e gestire diversi metodi di pagamento.

## Prerequisiti
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
- Disporre di un metodo di pagamento valido

## Procedura

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, clicca sul tuo nome in alto a destra e seleziona `Metodi di pagamento`{.action}.

![manage-payment-methods](images/managepaymentmethods1.png){.thumbnail}

Nella nuova pagina visualizzi una tabella con tutti i metodi di pagamento salvati nel tuo Spazio Cliente, in particolare quelli utilizzati per i tuoi ordini. Da questa pagina è possibile: 

- Aggiungere un metodo di pagamento
- Modificare il metodo di pagamento predefinito
- Eliminare un metodo di pagamento

### Aggiungere un metodo di pagamento

Quando effettui il primo ordine di un prodotto OVH ti viene chiesto di salvare un metodo di pagamento per garantire il rinnovo del servizio tramite prelevamento automatico.

Questo metodo di pagamento è utilizzato di default per i tuoi rinnovi e proposto nel momento in cui effettui un nuovo ordine.

Puoi aggiungere un nuovo metodo di pagamento per i tuoi futuri ordini o prelevamenti.

È possibile salvare 3 metodi di pagamento:

- Carta bancaria
- Conto corrente
- Account PayPal

Per farlo, clicca su`Aggiungi un metodo di pagamento`{.action}.

![manage-payment-methods](images/managepaymentmethods2.png){.thumbnail}

Segui gli step successivi per il salvataggio del metodo di pagamento. Al primo step, ti viene chiesto di indicare questo nuovo metodo di pagamento come predefinito per gli acquisti futuri o per i prelevamenti automatici.

Se hai salvato un conto corrente, sarà necessario inviare un’autorizzazione di prelevamento tramite posta. Per scaricare questo documento, clicca sul pulsante `...`{.action} a destra del tuo conto corrente e poi su `Scarica il modulo da compilare e restituire tramite posta`{.action}.

![manage-payment-methods](images/managepaymentmethods2b.png){.thumbnail}

> [!primary]
>
Finché i nostri servizi non ricevono l’autorizzazione, accanto al tuo conto corrente comparirà la voce: “in attesa di ricezione”. Ciò significa che questo metodo di pagamento non potrà essere utilizzato.
>


### Modificare il metodo di pagamento predefinito

Le fatture di rinnovo dei servizi vengono sempre prelevate dal tuo metodo di pagamento predefinito. Se intendi modificarlo, è necessario aggiungere un nuovo metodo di pagamento nel tuo Spazio Cliente.

Clicca quindi su `...`{.action} a destra del nuovo metodo di pagamento e poi su `Imposta questo metodo di pagamento come predefinito`{.action}.

![manage-payment-methods](images/managepaymentmethods3.png){.thumbnail}

### Eliminare un metodo di pagamento

Se non vuoi più utilizzare uno dei tuoi metodi di pagamento, puoi eliminarlo cliccando su `...`{.action} a destra. Clicca su `Elimina questo metodo di pagamento`{.action}.

![manage-payment-methods](images/managepaymentmethods4.png){.thumbnail}

> [!warning]
>
Il metodo di pagamento predefinito non può essere eliminato. Per eliminarlo è necessario impostare prima un altro metodo di pagamento predefinito.
>

### Eliminare un metodo di pagamento tramite le API OVHcloud

L’eliminazione di un metodo di pagamento può essere effettuato tramite le API. Per farlo clicca su questo link [https://eu.api.ovh.com/](https://eu.api.ovh.com/){.external}.

- ottieni l’ID del metodo di pagamento:  

> [!api]
>
> @api {GET} /me/payment/method 
>

- rimuovi il metodo di pagamento utilizzando l’ID ottenuto precedentemente:

> [!api]
>
> @api {DELETE} /me/payment/method/{paymentMethodId}
>

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com>
