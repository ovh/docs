---
title: 'Gestire i metodi di pagamento'
slug: manage-payment-methods
excerpt: 'Come gestire i tuoi metodi di pagamento nello Spazio Cliente OVHcloud'
section: Fatturazione
---

**Ultimo aggiornamento: 21/05/2021**

## Obiettivo

Nello Spazio Cliente OVHcloud puoi salvare e gestire diversi metodi di pagamento.

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Disporre di un metodo di pagamento valido

## Procedura

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca sul tuo nome in alto a destra e seleziona `Metodi di pagamento`{.action}.

![manage-payment-methods](images/hubpayment.png){.thumbnail}

Nella nuova pagina visualizzi una tabella con tutti i metodi di pagamento salvati nel tuo Spazio Cliente, in particolare quelli utilizzati per i tuoi ordini. Da questa pagina è possibile:

- Aggiungere un metodo di pagamento
- Modificare il metodo di pagamento predefinito
- Eliminare un metodo di pagamento

### Aggiungere un metodo di pagamento

Quando effettui il primo ordine di un prodotto OVH ti viene chiesto di salvare un metodo di pagamento per garantire il rinnovo del servizio tramite prelevamento automatico.

Questo metodo di pagamento è utilizzato di default per i tuoi rinnovi e proposto nel momento in cui effettui un nuovo ordine.

Puoi aggiungere un nuovo metodo di pagamento per i tuoi futuri ordini o prelevamenti.

È possibile salvare 2 metodi di pagamento:

- Carta di credito
- Account PayPal

Per farlo, clicca su`Aggiungi un metodo di pagamento`{.action}.

![manage-payment-methods](images/managepaymentmethods2.png){.thumbnail}

Segui gli step successivi per il salvataggio del metodo di pagamento. Al primo step, ti viene chiesto di indicare questo nuovo metodo di pagamento come predefinito per gli acquisti futuri o per i prelevamenti automatici.

### Modificare il metodo di pagamento predefinito

Le fatture di rinnovo dei servizi vengono sempre prelevate dal tuo metodo di pagamento predefinito. Se intendi modificarlo, è necessario aggiungere un nuovo metodo di pagamento nel tuo Spazio Cliente.

Clicca quindi su `...`{.action} a destra del nuovo metodo di pagamento e poi su `Imposta questo metodo di pagamento come predefinito`{.action}.

![manage-payment-methods](images/managepaymentmethods3.png){.thumbnail}

### Eliminare un metodo di pagamento

Se non vuoi più utilizzare uno dei tuoi metodi di pagamento, puoi eliminarlo cliccando su `...`{.action} a destra. Clicca su `Elimina questo metodo di pagamento`{.action}.

![manage-payment-methods](images/managepaymentmethods4.png){.thumbnail}

L'eliminazione di un metodo di pagamento può essere effettuata solo se è soddisfatta una delle seguenti condizioni:

- nello Spazio Cliente OVHcloud è presente un altro metodo di pagamento attivo;
- tutti i servizi OVHcloud sono in [rinnovo manuale](../imposta_il_rinnovo_automatico_dei_tuoi_servizi_ovh/#il-rinnovo-manuale).

> [!warning]
>
Il metodo di pagamento predefinito non può essere eliminato. Per eliminarlo è necessario impostare prima un altro metodo di pagamento predefinito.
>

#### Eliminare un metodo di pagamento tramite le API OVHcloud

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

### Attiva il meccanismo dello split payment <a name="attiva-split-payment"></a>

Se la società o l'organizzazione è [autorizzata all’applicazione dello Split Payment](https://www1.finanze.gov.it/finanze3/split_payment/public/#/#testata){.external}, è possibile attivarlo dallo Spazio Cliente OVHcloud.

Nella sezione `Metodi di pagamento`{.action}, clicca su `Attiva lo Split Payment`{.action} e conferma l'attivazione nella finestra che appare.

![manage-payment-methods](images/split-payment.png){.thumbnail}

La tua idoneità all’utilizzo dello split payment verrà verificata dai nostri team per la convalida nel più breve tempo possibile.

### Disattiva il meccanismo dello split payment <a name="disattiva-split-payment"></a>

Per disattivare il meccanismo dello split payment sul tuo account OVHcloud, accedi alla sezione `Metodi di pagamento`{.action}. Clicca su `Disattiva lo Split Payment`{.action} e conferma la disattivazione nella nuova finestra.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>
