---
title: 'Configurare un account Email Pro su Gmail'
slug: configurazione-email-pro-su-gmail
excerpt: 'Come configurare un account Email Pro dall’interfaccia Web di Gmail'
section: 'Altri client di posta'
order: 1
---

**Ultimo aggiornamento: 08/03/2019**

## Obiettivo

Gli account Email Pro possono essere configurati su client o applicazioni di posta compatibili, per permetterti di utilizzare il tuo account email dal dispositivo che preferisci.

**Questa guida ti mostra come configurare un account Email Pro dall’interfaccia Web di Gmail.**

> [!warning]
>
> OVH mette a disposizione i servizi ma non si occupa della loro configurazione e gestione; garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio.  Per maggiori informazioni consulta la sezione “Per saperne di più”.
> 

## Prerequisiti

- Disporre di una soluzione [Email Pro](https://www.ovh.it/emails/email-pro/){.external}
- Disporre delle credenziali associate all’account Email Pro da configurare
- Disporre delle credenziali associate all’account Gmail su cui configurare l’account Email Pro OVH

> [!primary]
>
> Questa guida è stata realizzata utilizzando l’ultima interfaccia di Gmail. Le immagini mostrate potrebbero differire leggermente dalla tua versione, ma gli step da seguire sono gli stessi.
>

## Procedura

### Step 1: aggiungi il tuo account Email Pro OVH nell’interfaccia di Gmail

Accedi tramite browser all’interfaccia Web di Gmail, inserisci le credenziali del tuo account ed effettua il login.

Clicca sull’icona a forma di ingranaggio in alto a destra e poi su `Impostazioni`{.action}. Seleziona la scheda `Account e importazione`{.action}. 

![Email Pro](images/configuration-gmail-web-step1.png){.thumbnail}

Nella sezione `Controlla la posta da altri account`, clicca su `Aggiungi un account email`{.action}. Nella nuova finestra, inserisci il tuo indirizzo Email Pro OVH e clicca su `Avanti`{.action}. Seleziona `Importa le email dal mio altro account (POP3)`{.action} e clicca di nuovo su `Avanti`{.action}.

![Email Pro](images/configuration-gmail-web-step2.png){.thumbnail}

Indica i parametri del server POP (server in entrata) del tuo account Email Pro OVH:

|Informazione|Descrizione| 
|---|---| 
|Nome utente|Inserisci l’indirizzo email completo|  
|Password|Inserisci la password associata all’account|
|Server POP|Inserisci il server “pro1.mail.ovh.net”|
|Porta|Seleziona la porta 995|

Ecco le opzioni disponibili:

- **Lascia una copia del messaggio scaricato sul server**: seleziona questa opzione per conservare una copia dei messaggi ricevuti dal tuo indirizzo Email Pro OVH sui nostri server.

- **Utilizza sempre una connessione protetta (SSL) quando viene scaricata la posta**: assicurati di aver selezionato questa opzione per consentire che la connessione all’indirizzo Email Pro OVH venga stabilita.

- **Applica etichetta ai messaggi in arrivo**: seleziona questa opzione per aggiungere un’etichetta alle email importate dal tuo indirizzo Email Pro OVH verso l’account Gmail.

- **Archivia messaggi in arrivo (ignora Posta in arrivo)**: seleziona questa opzione per non visualizzare nella posta in arrivo dell’account Gmail i messaggi importati dal tuo indirizzo Email Pro OVH.

Una volta inserite tutte le informazioni, clicca su `Aggiungi account`{.action}. Se i dati sono corretti, la connessione all’account andrà a buon fine. 

![Email Pro](images/configuration-gmail-web-step3.png){.thumbnail}

Per inviare messaggi dal tuo indirizzo Email Pro utilizzando l’interfaccia di Gmail, seleziona la casella `Sì, desidero poter inviare messaggi come...`{.action} e continua. 

Nella nuova finestra inserisci il nome che verrà visualizzato come mittente per i messaggi inviati da questo account, spunta la casella `Considera come un alias`{.action} e clicca su `Passaggio successivo`{.action}.

![Email Pro](images/configuration-gmail-web-step4.png){.thumbnail}

A questo punto ti verrà chiesto di indicare i parametri del server SMTP (server in uscita) dell’account Email Pro OVH:

|Informazione|Descrizione| 
|---|---| 
|Server SMTP|Inserisci il server “pro1.mail.ovh.net”|
|Porta|Seleziona la porta 587|
|Nome utente|Inserisci l’indirizzo email completo|  
|Password|Inserisci la password associata all’account|

Una volta inserite tutte le informazioni, seleziona `Connessione protetta TLS (consigliata)`{.action} e clicca su `Aggiungi account`{.action}. Se i dati sono corretti, la connessione all’account andrà a buon fine. 

![Email Pro](images/configuration-gmail-web-step5.png){.thumbnail}

Per confermare l’operazione è necessario inserire il codice di conferma inviato al tuo indirizzo Email Pro OVH. Per recuperarlo, accedi all’account dalla nostra interfaccia disponibile all’indirizzo <https://pro1.mail.ovh.net> 

Una volta effettuata la convalida, l’indirizzo email OVH compare nella scheda `Account e Importazione`{.action} a cui ti sei connesso all’inizio della procedura.

### Step 2: utilizza l’indirizzo Email Pro dall’interfaccia di Gmail

Una volta completata la configurazione dell’indirizzo Email Pro non ti resta che utilizzarlo: da questo momento è infatti possibile inviare e ricevere messaggi dall’interfaccia di Gmail.

Per inviare email dall’account OVH è necessario scegliere l’indirizzo di posta che eseguirà l’invio al momento della redazione del nuovo messaggio, dal campo `Da`{.action} della finestra di redazione.

![Email Pro](images/configuration-gmail-web-step6.png){.thumbnail}

i ricordiamo che per accedere all’account Email Pro OVH è sempre possibile utilizzare la nostra interfaccia disponibile all’indirizzo <https://pro1.mail.ovh.net>. 

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.