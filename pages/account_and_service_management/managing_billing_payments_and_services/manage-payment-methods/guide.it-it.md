---
title: Gestire i metodi di pagamento
excerpt: Come gestire i tuoi metodi di pagamento nello Spazio Cliente OVHcloud
updated: 2023-05-09
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Nello Spazio Cliente OVHcloud puoi salvare e gestire diversi metodi di pagamento.

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Disporre di un metodo di pagamento valido

## Procedura <a name="payment_methods"></a>

Nello [Spazio Cliente OVHcloud](/links/manager), clicca sul tuo nome in alto a destra e seleziona `Metodo di pagamento`{.action}.

![hubpayment](images/hubpayment.png){.thumbnail}

Visualizzi una tabella con tutti i metodi di pagamento salvati sul tuo account cliente. Da questa pagina è possibile: 

- Aggiungere un metodo di pagamento
- Modificare il metodo di pagamento predefinito
- Modifica la descrizione del metodo di pagamento
- Eliminare un metodo di pagamento

### Aggiungere un metodo di pagamento

Al momento del primo ordine, ti viene chiesto di registrare una modalità di pagamento per garantire il rinnovo del tuo servizio tramite prelievo automatico.

Questo metodo di pagamento viene utilizzato di default per tutti i rinnovi e ti viene proposto di saldare nuovi ordini.

Puoi salvare altri metodi di pagamento, in modo che vengano proposti al momento dei tuoi nuovi ordini o utilizzati di default per i tuoi futuri addebiti.

È possibile salvare 3 metodi di pagamento:

- Prelievo bancario
- Carta bancaria
- Account PayPal

Per farlo, clicca su `Aggiungi un metodo di pagamento` e seleziona il metodo di pagamento da utilizzare.

![manage-payment-methods](images/managepaymentmethods2.png){.thumbnail}

Segui gli step successivi per il salvataggio del metodo di pagamento. Al primo step, ti viene proposto di selezionare la casella `Una volta confermata, voglio impostare questa modalità di pagamento come predefinita.`{.action}, in modo che sia utilizzata per i futuri acquisti o prelievi automatici.

#### Prelievo bancario

> [!warning]
>
> - L'utilizzo del prelievo bancario è possibile solo per i conti clienti francesi, belgi, tedeschi, spagnoli, irlandesi, italiani e olandesi.
>
> - Il titolare del conto bancario deve corrispondere al proprietario dell'account OVHcloud.

Per registrare un prelievo sul tuo conto bancario, verrai reindirizzato verso uno spazio che permetterà la registrazione di questo account e la firma elettronica del tuo mandato di prelievo.

![modalità di pagamento SEPA](images/sepa.png){.thumbnail}

Se la tua banca è registrata dal nostro partner, la registrazione del conto bancario sarà immediata. In caso contrario, può essere necessario un periodo di circa 48 ore.

#### Carta bancaria

![credit-card-no-sepa](images/credit-card.png){.thumbnail}

Per salvare una nuova carta bancaria, verrai reindirizzato all'interfaccia sicura del nostro provider di pagamento. Per verificare il numero e la validità della carta inserita verrà effettuato un tentativo di prelievo presso il tuo istituto bancario.<br>
Non verrà addebitato alcun importo e la tua carta bancaria verrà attivata entro pochi minuti.

#### Account PayPal

![paypal_no_sepa](images/paypal.png){.thumbnail}

Seleziona `PayPal`{.action} come modalità di pagamento. Clicca sul pulsante `PayPal`{.action}. Si aprirà una finestra contestuale per accedere al tuo account PayPal® e registrarlo come metodo di pagamento autorizzato presso OVHcloud.

Il tuo account PayPal® sarà attivo in pochi minuti.

### Modificare il metodo di pagamento predefinito

Le fatture di rinnovo dei servizi vengono sempre prelevate dal tuo metodo di pagamento predefinito. Se intendi modificarlo, è necessario aggiungere un nuovo metodo di pagamento nel tuo Spazio Cliente.

Clicca quindi su `...`{.action}a destra del nuovo metodo di pagamento e poi su `Imposta questo metodo di pagamento come predefinito`.

![manage-payment-methods](images/managepaymentmethods3.png){.thumbnail}

> **Vorrei sostituire il metodo di pagamento predefinito con un altro, come fare?**
>
> - Step 1: aggiungi il nuovo metodo di pagamento
> - Step 2: definisci il nuovo metodo di pagamento come metodo di pagamento predefinito
> - Step 3: elimina il metodo di pagamento precedente
>

### Eliminare un metodo di pagamento

Se non vuoi più utilizzare uno dei tuoi metodi di pagamento, puoi eliminarlo cliccando su `...`{.action} a destra. Clicca su `Elimina questo metodo di pagamento`{.action}.

![manage-payment-methods](images/managepaymentmethods4.png){.thumbnail}

Per eliminare tutti i metodi di pagamento, tutti i servizi devono essere in [rinnovo manuale](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#il-rinnovo-manuale).

#### Eliminare un metodo di pagamento tramite le API OVHcloud

L’eliminazione di un metodo di pagamento può essere effettuato tramite le API. Per farlo clicca su questo link [https://eu.api.ovh.com/](https://eu.api.ovh.com/).

Ottieni l’ID del metodo di pagamento: 

> [!api]
>
> @api {v1} /me GET /me/payment/method
>

Elimina il metodo di pagamento utilizzando l'ID precedentemente ottenuto:

> [!api]
>
> @api {v1} /me DELETE /me/payment/method/{paymentMethodId}
>

> [!primary]
>
> Per maggiori informazioni, consulta la guida [Iniziare a utilizzare le API OVHcloud](/pages/manage_and_operate/api/first-steps).
>
> In caso di difficoltà nell'identificazione dei metodi di pagamento tramite le API OVHcloud, utilizza la funzione `Modifica la descrizione`{.action} (pulsante `...`{.action} a destra dello schermo) nella sezione [Modalità di pagamento](#payment_methods) dello [Spazio Cliente OVHcloud](/links/manager).
>

### Il conto prepagato

#### Cos'è il conto prepagato?

Il *conto prepagato* è presente nello [Spazio Cliente OVHcloud](/links/manager) al momento della creazione. che permette di accreditare in anticipo il tuo account cliente e utilizzare questi fondi per il pagamento degli ordini e delle fatture di rinnovo.

Ricaricando regolarmente il tuo account, assicurati che il [rinnovo automatico](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#il-rinnovo-automatico) dei tuoi servizi non venga mai interrotto per mancato pagamento.

Per effettuare questa operazione, accedi alla sezione `Modalità di pagamento` dello Spazio Cliente:

- clicca sul tuo nome in alto a destra e poi sul `Metodo di pagamento`{.action} nel menu a destra.
- seleziona la scheda `Il tuo conto prepagato`{.action}.

![prepaid-account](images/prepaid-account.png){.thumbnail}

#### Come funziona?

Per ogni scadenza, se disponi di servizi impostati con *rinnovo automatico*, l'importo della tua fattura viene prelevato dal tuo conto prepagato.

In assenza di fondi sufficienti, il saldo del tuo conto passerà in negativo e resterà in attesa di pagamento.

Se disponi di una modalità di pagamento valida registrata sul tuo account cliente, l'importo verrà automaticamente prelevato entro 24 ore e il saldo sarà azzerato. senza alcun impatto sullo stato dei tuoi servizi.

Se non hai salvato nessuna modalità di pagamento, dovrai saldare l'importo in sospeso dal tuo Spazio Cliente entro 7 giorni per evitare interruzioni di servizio.

Se non hai impostato nessuna modalità di pagamento registrata, ti consigliamo di impostare una **soglia di allarme** per assicurarti che disporrai di fondi sufficienti per le tue prossime fatture:

![warning_prepaid_account](images/warning_prepaid_account.png){.thumbnail}

Se il credito disponibile sul tuo conto prepagato scende al di sotto del limite definito, riceverai immediatamente un'email di notifica.

#### Come accreditare il vostro conto prepagato?

Nella scheda `Il tuo conto prepagato`{.action}, clicca sul pulsante `Accredita`{.action}.

![credito-prepaid-account](images/credit-prepaid-account.png){.thumbnail}

Nella nuova finestra, indica l'importo da accreditare, clicca su `Continua`{.action} e poi su `Ordina`{.action}.

![order-prepaid-account](images/order-prepaid-account.png){.thumbnail}

Nella nuova finestra, seleziona il metodo di pagamento che preferisci e salda il tuo ordine.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
