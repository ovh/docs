---
title: 'Gestire l’invio delle email automatiche'
excerpt: 'Come monitorare e gestire le email automatiche inviate da un hosting Web OVH'
slug: hosting_web_gestisci_linvio_delle_tue_email_automatiche
section: Diagnostica
order: 09
---

**Ultimo aggiornamento: 27/03/2019**

## Obiettivo

Le email automatiche sono messaggi di posta inviati tramite script  e sono utilizzate, ad esempio, per consentire agli utenti di un sito Web di inviare messaggi tramite un form di contatto.

**Questa guida ti mostra come gestire le email automatiche inviate dal tuo hosting Web OVH.**

## Prerequisiti

- Disporre di una soluzione di [hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external}
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

> [!primary]
>
> Questa guida si applica esclusivamente ai messaggi di posta inviati tramite script da un hosting Web OVH.
>
> Per gestire gli indirizzi email inclusi in una soluzione MX Plan o in un [hosting Web OVH](https://www.ovhcloud.com/it/web-hosting/){.external}, accedi alla sezione `Email`{.action} del tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.
>

## Procedura

Le operazioni di monitoring e gestione delle email automatiche di un hosting Web OVH sono disponibili nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}: clicca su `Hosting`{.action}, seleziona il tuo servizio dalla lista e clicca su `Altre opzioni`{.action} > `Script email`{.action}.

Dalla nuova pagina è possibile seguire e gestire le email automatiche inviate dall’hosting.

![hosting](images/monitoring-automatic-emails-step1.png){.thumbnail}

### Controlla l’invio delle email automatiche

Sempre nella sezione `Script email`{.action}, vengono mostrate diverse informazioni relative agli invii dei messaggi automatici generati dai tuoi script.

|Campo|Descrizione|
|---|---|
|Stato del servizio|Mostra lo stato corrente del servizio che esegue l’invio delle email automatiche dell’hosting. Se il riquadro è di colore verde significa che gli invii sono attivi e funzionano correttamente; il colore rosso indica invece che i messaggi non vengono più inviati.  In base a questo stato, le operazioni possibili sono diverse. Per maggiori informazioni, vai alla sezione [Gestisci l’invio delle email automatiche ](https://docs.ovh.com/it/hosting/hosting_web_gestisci_linvio_delle_tue_email_automatiche/#gestisci-linvio-delle-email-automatiche){.external}.|
|Notifica di errore a|Invia giornalmente le notifiche di errore all’indirizzo email inserito. È possibile definirlo tramite il pulsante `Modifica il destinatario`{.action}. Questi report contengono le email inviate dall’hosting Web la cui consegna non è andata a buon fine e che quindi risultano in stato di errore.  Questi messaggi sono disponibili anche nello Spazio Cliente OVH cliccando sul pulsante `Email in errore`{.action}.|
|Totale email inviate|Mostra il numero totale dei messaggi automatici inviati dal momento in cui è stato creato l’hosting.|
|Email inviate oggi|Mostra il numero totale dei messaggi automatici inviati nella giornata odierna.|
|Totale email in errore|Mostra il numero totale dei messaggi automatici inviati dal momento in cui è stato creato l’hosting e la cui consegna non è andata a buon fine.|
|Storico delle email inviate|Mostra un grafico con la cronologia dei messaggi inviati dall’hosting Web nei giorni precedenti. |

> [!primary]
>
> Per evitare un utilizzo improprio delle email automatiche dal tuo hosting ti consigliamo di configurare un sistema di sicurezza, ad esempio un captcha da inserire nei form di contatto disponibili nel tuo sito Internet.
>

![hosting](images/monitoring-automatic-emails-step2.png){.thumbnail}

Se ti accorgi che le email generate dai tuoi script non vengono inviate anche se lo stato del servizio risulta attivo, ti consigliamo di:

- **verificare gli script che eseguono gli invii**: è possibile che i messaggi non vengano correttamente spediti a causa di un errore di sintassi nello script. Verificane il contenuto, apporta le eventuali modifiche necessarie ed effettua un altro tentativo; 

- **prova a inviare un’email tramite uno script di test**: crea uno script di test per inviare un messaggio al tuo indirizzo personale.  Se lo ricevi correttamente, significa che gli script utilizzati dall’hosting contengono uno o più errori. Alcuni esempi di script di test sono disponibili anche in rete.

- **eseguire gli invii senza utilizzare server SMTP**: è sufficiente non specificare il server SMTP tra i parametri dei tuoi script.  Se gestisci l’invio delle email tramite interfaccia Web, questa informazione dovrebbe poter essere modificata nella configurazione del tuo sito.

### Gestisci l’invio delle email automatiche

Sempre nella sezione `Script email`{.action}, in base allo stato del servizio, sono disponibili alcuni pulsanti per la gestione dell’invio dei tuoi messaggi automatici. 

|Azione|Descrizione|
|---|---|
|Blocca l’invio |Permette di sospendere l’invio delle email automatiche dall’hosting Web.  I messaggi generati dagli script in seguito al blocco non verranno inviati, ma messi in coda per un massimo di 72 ore.|
|Sblocca l’invio |Permette di riattivare l’invio delle email automatiche dall’hosting Web e rimettere in consegna le email in coda. |
|Elimina le email|Permette di cancellare le email in coda e sbloccare l’invio per i nuovi messaggi. |

Per effettuare una di queste azioni, clicca sul pulsante corrispondente e `Conferma`{.action}.  In alcuni casi potrebbero essere necessari alcuni minuti prima che l’azione selezionata diventi effettiva. 

![hosting](images/monitoring-automatic-emails-step3.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.