---
title: Gestire la cronologia degli SMS
slug: gestire-la-cronologia-degli-sms
excerpt: Come consultare la cronologia degli SMS inviati dallo Spazio Cliente OVHcloud
section: Gestisci la tua offerta 
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 05/08/2022**

## Obiettivo

Dallo Spazio Cliente è possibile consultare e scaricare la cronologia degli SMS inviati. Questa guida ti mostra come effettuare queste operazioni.

## Prerequisiti

- Disporre di un account SMS OVHcloud con almeno 1 SMS inviato
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Télécom`{.action} > `SMS`{.action}

![Spazio Cliente Telecom SMS](https://raw.githubusercontent.com/ovh/docs/master/templates/control-panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## Procedura

I dettagli elencati nella cronologia includono la data, l’ora, il mittente, il destinatario e il contenuto dell’SMS inviato.

> [!primary]
>
> Nello Spazio Cliente è possibile visualizzare soltanto la cronologia degli ultimi 6 mesi. Per consultare gli SMS meno recenti, vai allo [Step 2: scarica la cronologia degli SMS in formato CSV](#csv).
>

### Step 1: consulta la cronologia dal tuo Spazio Cliente

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) e seleziona `Telecom`{.action}. Clicca su `SMS`{.action} e seleziona il tuo account SMS.

Nella barra delle schede, clicca su `Messaggio e campagna`{.action} e poi su `Gestisci gli SMS`{.action} per accedere allo storico dei tuoi SMS unitari o su `Gestisci le campagne`{.action} per accedere allo storico delle tue campagne di SMS.

Clicca su `Storico invii`{.action} o `Statistiche e storico`{.action}.

![sms-history](images/smshistory1.png){.thumbnail}

Per filtrare la cronologia degli SMS in base alla data di invio, clicca su “Data” nella prima colonna a sinistra.

![sms-history](images/smshistory2.png){.thumbnail}

Dalla sezione “Azioni”, clicca sui tre puntini `...`{.action} in corrispondenza di ciascun SMS, per consultarlo o eliminarlo.

![sms-history](images/smshistory3.png){.thumbnail}

Per eliminare più SMS alla volta, spunta le caselle accanto a ciascun messaggio. Una volta selezionati i messaggi, visualizzi il pulsante `Elimina gli elementi selezionati`{.action} sopra la cronologia.

![sms-history](images/smshistory4.png){.thumbnail}
 
Il pulsante `Filtra`{.action} consente di filtrare la ricerca in base al mittente (se disponi di più mittenti) o al destinatario.

![sms-history](images/smshistory5.png){.thumbnail}
 
### Step 2: scarica la cronologia degli SMS in formato CSV <a name="csv"></a>

Per scaricare la cronologia degli SMS inviati in formato “.csv”, clicca sul pulsante `Azioni`{.action} nell’angolo in alto a sinistra e poi clicca su `Scarica`{.action} 
 
![sms-history](images/smshistory6.png){.thumbnail}
 
A questo punto è possibile visualizzare la cronologia da un programma per fogli di calcolo. Le informazioni verranno visualizzate come nell’esempio seguente: 

![sms-history](images/smshistory7.png){.thumbnail}

Ecco i dettagli delle informazioni contenute nella cronologia:

|  Titolo  |  Descrizione  |
|  :-----          |  :-----          |
|  id |  identificativo unico sui nostri server dell’SMS inviato |
|  date | data e ora di invio dell’SMS  |
|  sender |  numero di telefono del mittente dell’SMS |
|  receiver |  numero di telefono del destinatario dell’SMS |
|  ptt |  codice di risposta con lo stato dell’SMS |
|  operatorCode |  l’identificativo di rete dell’operatore di telefonia mobile a cui abbiamo trasmesso l’SMS |
|  descriptionDIr |  descrizione del codice ptt e quindi dello stato dell’SMS |
|  tag |  il tag attribuito manualmente tramite API (a uno o più SMS) o automaticamente dai nostri server a ciascuno degli SMS (o a ciascuna campagna di SMS) inviati. |
|  message |  contenuto dell'SMS |

Per maggiori dettagli sui codici ptt e sui diversi ID del DRL, consulta l’ultima sezione della nostra guida [Tutto sugli utenti SMS](../tutto_sugli_utenti_sms/#step-5-specifica-un-url-di-callback).
 
## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
