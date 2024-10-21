---
title: 'Creare regole di posta in arrivo in Outlook Web App (OWA)'
excerpt: 'Come impostare l’inoltro delle email e creare filtri in OWA'
updated: 2020-03-11
---

## Obiettivo

Tramite l’opzione “Regole Posta in arrivo” è possibile creare una serie di regole per gestire i messaggi in arrivo. In questo modo puoi mantenere la posta elettronica organizzata, spostando automaticamente le email in diverse cartelle. È anche un metodo per definire le impostazioni di inoltro (o reindirizzamento) e per filtrare i messaggi indesiderati.

**Questa guida ti mostra come creare filtri e inoltrare le tue email tramite Outlook Web App (OWA).**

## Prerequisiti

- Disporre di una soluzione di posta elettronica OVHcloud attiva (**MX Plan**, disponibile nell'ambito delle nostre offerte di [hosting Web](/links/web/hosting), inclusa in un [Hosting gratuito 100M](/links/web/domains-free-hosting) oppure ordinata separatamente con una soluzione indipendente; [**Hosted Exchange**](/links/web/emails-hosted-exchange)o ancora [**Email Pro**](/links/web/email-pro))
- Disporre delle credenziali di accesso dell’indirizzo email da configurare

## Procedura

### Step 1: vai alla sezione “Opzioni”

Accedi al tuo account Exchange tramite la [Webmail OVHcloud](/links/web/email) Clicca sull’icona a forma di ingranaggio in alto a destra per aprire il menu e seleziona `Opzioni`{.action}.

![inboxrules](images/exchange-rules-step1.png){.thumbnail}

Per accedere all’interfaccia delle regole, seleziona la scheda `Regole Posta in arrivo`{.action} In questa sezione è possibile visualizzare una lista di regole applicate a questo account. Per creare una regola clicca sul simbolo `+ `{.action}.

![inboxrules](images/exchange-rules-step2.png){.thumbnail}

### Step 2: crea nuove regole

![inboxrules](images/exchange-rules-step3.png){.thumbnail}

L’editor di regole consente di impostare azioni specifiche per tutti i messaggi in arrivo in base a diverse condizioni. La configurazione di una regola si effettua in 3 step:

|Step|Descrizione|
|---|---|
|Aggiungi una condizione|Seleziona una o più condizioni che attiveranno la regola.|
|Aggiungi un’azione|Scegli l’azione da applicare alle email che soddisfano le condizioni definite.|
|Aggiungi un’eccezione (facoltativo)|Reimposta la regola aggiungendo una o più condizioni per escludere alcune email.|

Ad esempio, è possibile impostare come condizione “Ricevuto da...” e indicare un indirizzo email, dopodiché scegliere di spostare questi messaggi in una cartella specifica.

#### Seleziona l’opzione “Interrompi l’elaborazione di altre regole”

Se hai creato diverse regole, è probabile che molte di queste siano applicabili a un messaggio in arrivo. Mantieni attiva questa opzione per tutte le regole che non devono mai essere applicate insieme ad altre regole; è un semplice modo per evitare che un’ulteriore elaborazione venga applicata alle email che soddisfano più condizioni.

### Crea regole utili tramite due esempi: inoltro e filtraggio dello Spam 

Data la moltitudine di condizioni e azioni disponibili, non è possibile esaminarle tutte in questa guida.  Ecco, qui di seguito, due esempi molto utili per l’utilizzo di un account email OVHcloud. 

> [!warning]
>OVHcloud fornisce servizi la cui gestione e configurazione sono sotto la tua completa responsabilità. Pertanto spetta a te garantire che tali servizi funzionino correttamente.
>
>Questa guida ti mostra come effettuare le operazioni più comuni. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un esperto del settore e/o il fornitore del servizio. OVHcloud non potrà fornirti alcuna assistenza.  Per maggiori informazioni, consulta la sezione “Per saperne di più” di questa guida.
>

#### Esempio 1: inoltrare un’email a un altro indirizzo

Per creare una regola clicca sul simbolo `+ `{.action}. Assegna un nome a questa regola e seleziona qui sotto a quali email deve essere applicata.  Per questo esempio, scegliamo di includere inizialmente**tutti i messaggi**. Dopodiché, scegli l’azione adeguata. A questo punto, ci concentriamo su come effettuare un **inoltro o reindirizzamento**. Ti ricordiamo che esiste una distinzione tecnica: se “trasferisci” un’email, il destinatario finale visualizzerà il tuo indirizzo email come mittente. Se, invece, “inoltri” un’email, la invierai all’indirizzo email del destinatario senza modificare l’indirizzo del mittente originale. 

![inboxrules](images/exchange-rules-step4.png){.thumbnail}

Nella finestra successiva, seleziona “I tuoi contatti” (`+`{.action}) oppure digita un indirizzo email nella barra in alto. Puoi anche cercare utenti che non compaiono qui come contatti. Una volta completata l’operazione, clicca su `Salva`{.action} per tornare all’interfaccia “Nuova regola di Posta in arrivo”. È possibile estendere ulteriormente questa regola cliccando su `Aggiungi azione`{.action}. Se necessario, aggiungi anche le eccezioni elencate qui di seguito, ad esempio, per impedire l’inoltro di un’email nel caso in cui un messaggio in arrivo sia stato inviato da un indirizzo email specifico o se contiene determinate parole-chiave. Per salvare la regola, clicca su `OK`{.action}.

La nuova regola è ora presente nella lista con una spiegazione della sua funzione e può essere modificata, disattivata o eliminata.

![inboxrules](images/redirection_rulebis.gif){.thumbnail}

#### Esempio 2: filtrare la posta indesiderata (Spam)

> [!primary]
>
Queste istruzioni sono valide soltanto se il tuo dominio utilizza correttamente i record MX OVHcloud. È possibile effettuare altre configurazioni del servizio ma potrebbero non usufruire della nostra protezione antispam.
>

Per creare una regola clicca sul simbolo `+ `{.action}.

![inboxrules](images/exchange-rules-step7.png){.thumbnail}

Assegna un nome alla regola e seleziona come condizioni “Include queste parole” e “nell’oggetto...”. Nella finestra successiva, digita “[SPAM]” per individuare i messaggi contrassegnati dalla nostra protezione antispam. Per aggiungerli, clicca sul simbolo `+`{.action} e poi su `OK`{.action}.

![inboxrules](images/exchange-rules-step8.png){.thumbnail}

Dato che nessuna protezione automatica antispam è in grado di determinare con la massima precisione se un’email è davvero Spam, ti consigliamo di spostare queste email in una cartella dedicata. In questo modo è possibile verificare il contenuto della cartella Spam prima di svuotarla. Per farlo, seleziona l’azione “Sposta, copia o elimina”, quindi “Sposta i messaggi nella cartella...”. Seleziona una cartella dalla lista. Per salvare la regola, clicca su `OK`{.action}.

![inboxrules](images/exchange-rules-step9_2.png){.thumbnail}

> [!primary]
>
Ricordati che non è possibile segnalare i falsi positivi direttamente da Outlook Web App. Se ricevi messaggi di posta falsamente contrassegnati come [SPAM], ti consigliamo di informare il nostro team di Supporto aprendo un [ticket di assistenza](https://help.ovhcloud.com/csm?id=csm_get_help).
>

## Per saperne di più 

[Exchange 2016: imposta una risposta automatica con OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies)

[Condividi un calendario con la Webmail OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

[Utilizzare un account di posta da “Outlook on the web”](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
