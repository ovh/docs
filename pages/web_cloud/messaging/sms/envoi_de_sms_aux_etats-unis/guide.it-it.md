---
title: Inviare SMS negli Stati Uniti
excerpt: Scopri come rispettare le regole specifiche per inviare SMS negli Stati Uniti e applicarle dal tuo Spazio Cliente OVHcloud
updated: 2022-08-05
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

L’invio di SMS negli Stati Uniti è sottoposto a regole specifiche. Questa guida ti mostra come applicarle per poter inviare SMS verso questa destinazione.

## Prerequisiti

- Disporre di un account SMS OVHcloud con crediti SMS.
- Avere accesso alle [API OVHcloud](/links/api) (solo per il metodo di invio via API)

<!-- CP-NAV-START:telecom-sms -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [SMS](/links/control-panel/telecom-sms)
- **Percorso di navigazione:** `Telecom`{.action} > `SMS`{.action} > Seleziona il tuo SMS account

---
<!-- CP-NAV-END:telecom-sms -->

![Spazio Cliente Telecom SMS](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## Procedura

### Passaggio 1: Leggi le restrizioni

In accordo con l’autorità di regolamentazione degli Stati Uniti (Neustar), l’invio di SMS verso questa destinazione deve essere oggetto di una preventiva convalida, da parte dei nostri servizi, di un modello di messaggio.
Sono autorizzati soltanto messaggi di alert e di doppia autenticazione. I modelli di SMS pubblicitari non saranno accettati. Una volta convalidato il modello, l’invio avverrà nello stesso modo in cui avviene per le altre destinazioni.

È possibile richiedere la convalida di più modelli di messaggi.

> [!primary]
>
> La convalida dei modelli di messaggi è gratuita e viene effettuata dai team di OVHcloud entro uno o due giorni lavorativi.
>

### Passaggio 2: Aggiungi un modello

#### 2.1 Dallo Spazio Cliente OVHcloud

<!-- CP-STEPS-START:add-template-cp -->
Clicca sulla scheda `Messaggio e campagna`{.action} e poi su `Gestisci gli SMS`{.action}.

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

<!-- CP-STEPS-END:add-template-cp -->

#### 2.2 Via API

> [!success]
> Se non conosci l'utilizzo dell'API OVHcloud, consulta la nostra guida [Iniziare a utilizzare le API OVHcloud](/pages/manage_and_operate/api/first-steps).

Accedi alla pagina [https://api.ovh.com/](/links/api) e poi utilizza l’API seguente:

> [!api]
>
> @api {v1} /sms POST /sms/{serviceName}/templatesControl
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

### Passaggio 3: Analizza i risultati

Una volta creato e convalidato il proprio modello di messaggio, l’invio di un SMS genera un controllo automatico per garantire che il contenuto dell’SMS corrisponda al modello. Se il risultato è positivo, l’SMS viene inviato nello stesso modo in cui viene inviato verso gli altri Paesi.

Se invii un SMS negli Stati Uniti senza aver prima creato e convalidato un modello, l’SMS sarà rifiutato e riceverai un Premium Tracking Transaction Code (PTT code) 1999. Questo codice corrisponde al messaggio di errore “No templates available” (nessun modello disponibile).

Per conoscere i codici PTT, consulta [questa guida](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms#step-5-specifica-un-url-di-callback).

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).
