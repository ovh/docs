---
title: Inviare SMS negli Stati Uniti
slug: invio_sms_negli_stati-uniti
excerpt: Come inviare SMS negli Stati Uniti
section: 'Inviare SMS'
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 05/08/2022**

## Obiettivo

L’invio di SMS negli Stati Uniti è sottoposto a regole specifiche. Questa guida ti mostra come applicarle per poter inviare SMS verso questa destinazione.

## Prerequisiti

- Disporre di un account SMS OVHcloud con crediti SMS.
- Avere accesso alle [API OVHcloud](https://api.ovh.com/console/)(solo per il metodo di invio via API)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Télécom`{.action} > `SMS`{.action}

![Spazio Cliente Telecom SMS](https://raw.githubusercontent.com/ovh/docs/master/templates/control-panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## Procedura

### Step 1: leggi le restrizioni

In accordo con l’autorità di regolamentazione degli Stati Uniti (Neustar), l’invio di SMS verso questa destinazione deve essere oggetto di una preventiva convalida, da parte dei nostri servizi, di un modello di messaggio.
Sono autorizzati soltanto messaggi di alert e di doppia autenticazione. I modelli di SMS pubblicitari non saranno accettati. Una volta convalidato il modello, l’invio avverrà nello stesso modo in cui avviene per le altre destinazioni.

È possibile richiedere la convalida di più modelli di messaggi.

> [!primary]
>
La convalida dei modelli di messaggi è gratuita e viene effettuata dai team di OVHcloud entro uno o due giorni lavorativi.
>

### Step 2: Aggiungi un modello

#### 2.1 Dallo Spazio Cliente OVHcloud

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e seleziona `Télécom`{.action}. Clicca su `SMS`{.action} e seleziona il tuo account SMS. Clicca sulla scheda `Messagio e campagna`{.action} e poi su `Gestisci gli SMS`{.action}.

Clicca su `Gestisci i modelli`{.action}.

![SMS negli Stati Uniti](images/smstousa1.png){.thumbnail}

Nella nuova pagina, clicca su `Azione`{.action} e poi su `Aggiungi`{.action}.

![SMS negli Stati Uniti](images/smstousa2.png){.thumbnail}

Visualizzi un pop-up con i campi da compilare.

![SMS negli Stati Uniti](images/smstousa3.png){.thumbnail}


| Campo       | Descrizione                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------------|
| Nome         | Nome del template                                                                                                  |
| Attività    | Seleziona il tipo di modello:<br>\- Alert<br>\- Autentificazione<br>\- Sistema di gestione transazionale |
| Descrizione | Descrizione del modello                                                                                            |
| Modello      | Digita il modello. È possibile includere le variabili delimitate con il carattere #.                                                                  |


#### 2.2 Via API

> [!success]
> Se non conosci l'utilizzo dell'API OVHcloud, consulta la nostra guida [Iniziare a utilizzare le API OVHcloud](https://docs.ovh.com/it/api/first-steps-with-ovh-api/).

Accedi alla pagina [https://api.ovh.com/](https://api.ovh.com/) e poi utilizza l’API seguente:

> [!api]
>
> @api {post} /sms/{serviceName}/templatesControl
>

![SMS negli Stati Uniti](images/smstousa4.png){.thumbnail}

Compila i campi richiesti e clicca su `Execute`{.action}

#### Esempi di modelli

Ecco qui di seguito 2 esempi di modelli di messaggi verso gli Stati Uniti.

- Esempio di template di autenticazione:

```bash
Your security code is: #CODE#. Have a good day!
```

- Esempio di template di alert:

```bash
Our monitoring system detected your server #SERVER# doesn't respond to ping requests
```

### Step 3: analizza i risultati

Una volta creato e convalidato il proprio modello di messaggio, l’invio di un SMS genera un controllo automatico per garantire che il contenuto dell’SMS corrisponda al modello. Se il risultato è positivo, l’SMS viene inviato nello stesso modo in cui viene inviato verso gli altri Paesi.

Se invii un SMS negli Stati Uniti senza aver prima creato e convalidato un modello, l’SMS sarà rifiutato e riceverai un Premium Tracking Transaction Code (PTT code) 1999. Questo codice corrisponde al messaggio di errore “No templates available” (nessun modello disponibile).

Per conoscere i codici PTT, consulta [questa guida](../tutto_sugli_utenti_sms/#step-5-specifica-un-url-di-callback).

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
