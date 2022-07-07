---
title: 'Webmail: guida all’utilizzo di RoundCube'
slug: webmail_guida_allutilizzo_di_roundcube
section: Per iniziare
order: 05
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 31/05/2022**

## Obiettivo

Con la soluzione MX Plan OVHcloud, potete inviare e ricevere email da un software di terze parti o tramite una webmail. OVHcloud fornisce un servizio di posta online chiamato RoundCube che permette l'accesso a un account email tramite un browser.

**Come utilizzare la Webmail RoundCube per i tuoi indirizzi email OVHcloud**

## Prerequisiti

- Disporre di una soluzione email OVHcloud **MX Plan**, inclusa nelle nostre [soluzioni di hosting Web](https://www.ovhcloud.com/it/web-hosting/), inclusa in un [hosting Start10M gratuito](https://www.ovhcloud.com/it/domains/free-web-hosting/) o ordinata separatamente come soluzione autonoma
- Disporre delle informazioni di connessione all'indirizzo email MX Plan che vuoi consultare Per maggiori informazioni, consulta la nostra guida Iniziare a [utilizzare la soluzione MX Plan](https://docs.ovh.com/it/emails/informazioni-generali-email-condivise/).

## Procedura

### Accedi alla Webmail RoundCube

Accedi alla pagina <https://www.ovh.com/it/mail/>. Inserisci un indirizzo email e la password e clicca su `Connessione`{.action}. 

![hosting](images/webmail_login.png){.thumbnail}

Verrai reindirizzato all'interfaccia RoundCube.

![hosting](images/roundcube01.png){.thumbnail}

> [!warning]
> 
> Se il server è reindirizzato a un'interfaccia **O**utlook **W**eb **A**ccess (OWA), significa che sei sull'ultima versione della soluzione MX Plan. Per maggiori informazioni sulla soluzione MX Plan, consulta la pagina [Iniziare a utilizzare la soluzione MX Plan](https://docs.ovh.com/it/emails/informazioni-generali-email-condivise/).
>
> Per familiarizzare con l'interfaccia **OWA**, consulta la nostra guida [Consultare il suo account email dall'interfaccia OWA](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_2016_guida_allutilizzo_di_outlook_web_app/).

### Interfaccia generale della Webmail RoundCube <a name="general-interface"></a>

Una volta connesso al tuo account email, hai accesso alla finestra principale di Roundcube, composta da 3 zone:

- [**Colonna di sinistra**](#leftcolumn): cartelle e sottocartelle dell'account email La cartella principale è la `Posta in arrivo`.

- [**Finestra superiore**](#topwindow): elenco delle email contenute nella cartella selezionata nella colonna di sinistra.

- [**Finestra inferiore**](#lowerwindow): il contenuto dell'email selezionata nella finestra superiore.

#### Gestione delle cartelle (colonna di sinistra) <a name="leftcolumn"></a>

In questa sezione vengono mostrate le cartelle presenti nel tuo account email.

Per maggiori informazioni sulle cartelle, clicca sull'icona a forma di ingranaggio in fondo alla colonna e seleziona `Gestione cartelle`{.action}

![hosting](images/roundcube02.png){.thumbnail}

Per creare una cartella, clicca sul pulsante `+`{.action} in fondo alla colonna `Cartelle`.

Per eliminare una cartella, seleziona la cartella, clicca sull'icona a forma di ingranaggio in fondo alla colonna `Cartelle` e seleziona `Elimina`{.action}. Per cancellare il contenuto e conservare la cartella, clicca su `Svuota`{.action}.

Le caselle da barrare a livello delle cartelle corrispondono alle "iscrizioni". L'abbonamento determina se la cartella deve essere visualizzata o meno a livello dell'interfaccia Webmail o del client di posta conservando il contenuto della cartella. con lo scopo di nascondere o visualizzare una cartella sull'account email.

> [!primary]
>
> I fascicoli che presentano una casella da barrare grigia sono fascicoli speciali. Non è possibile cancellarli o ritirarli.

#### Lista delle email ricevute/inviate (finestra superiore) <a name="topwindow"></a>

In questa finestra è mostrato il contenuto della cartella selezionata nella colonna di sinistra. 

##### **Tipo di visualizzazione**

Questa finestra è presentata in una forma personalizzata. Clicca sull'icona a forma di ingranaggio in alto a sinistra da questa finestra.

![hosting](images/roundcube03.png){.thumbnail}

È possibile configurare questi elementi:

- **Disposizione**: permette di determinare la disposizione delle finestre di gestione di un account email.
- **Colonne dell'elenco**: permette di aggiungere colonne da visualizzare (priorità delle email, ecc...).
- **Colonna di selezione**: permette di scegliere la colonna su cui effettuare la selezione di default.
- **Ordine di selezione**: permette di scegliere l'ordine di selezione ascendente o discendente, in funzione della colonna di selezione.

##### **Azione su un'email selezionata**

Quando viene selezionata un'email, è possibile agire su di essa. Ecco le azioni possibili:

- `Rispondi`{.action}: rispondere direttamente al mittente.
- `Rispondere a tutti`{.action}: rispondere direttamente a tutti i destinatari presenti nei campi "A" e "Copia".
- `Inoltra`{.action}: trasferire l'email selezionata a uno o più destinatari.
- `Elimina`{.action}: inserisci l'email selezionata in "Corbeille".
- `SPAM`{.action}: inserire l'email selezionata direttamente nella casella della posta indesiderata (Junk), qualificarla come **spam**.
- `Contrassegna`{.action}: determinare manualmente lo stato di un'email.
- `Azioni`{.action} 
    - `Stampa il messagio`{.action}.
    - `Scarica (.eml)`{.action}: recuperare l'intestazione dell'email e il suo contenuto.
    - `Modifica come nuovo`{.action}: creare una nuova email utilizzando l'email selezionata.
    - `Visualizza sorgente messaggio`{.action}: visualizzare l'email nella forma grezza con l'intestazione.
    - `Sposta in...`{.action}: spostare l'email in una cartella
    - `Copia su...`{.action}: copia l'email in una cartella
    - `Apri in una nuova finestra`{.action}.

![hosting](images/roundcube04.png){.thumbnail}

> [!primary]
>
> Se uno dei tuoi interlocutori richiede che gli sia inviato un messaggio di conferma durante la lettura della sua email, riceverai questo messaggio: `il mittente di questo messaggio ha chiesto di essere avvisato quando leggerai questo messaggio. Desiderate avvisare il mittente?`.
> 

##### **Ricerca un'email**

È disponibile uno strumento di ricerca nella parte superiore destra dell'interfaccia.

Clicca sulla freccia a destra della lente di ingrandimento per visualizzare i filtri di ricerca.


#### Contenuto di un'email (finestra inferiore) <a name="lowerwindow"></a>

Quando un'email è selezionata nella lista, compare nella finestra inferiore.

Visualizza le scorciatoie, a destra, delle funzioni seguenti:

- Visualizza in formato HTML (di default)
- Mostra nel formato testo semplice
- Rispondere
- Rispondere a tutti
- Inoltra
- Apri in una nuova finestra

![hosting](images/roundcube05.png){.thumbnail}

### Configura le preferenze dell'interfaccia Roundcube

I seguenti capitoli della guida corrispondono alle schede che compongono la parte `Preferenze`{.action} delle `Impostazioni`{.action} di Roundcube. La loro descrizione non è esaustiva.

![hosting](images/roundcube06.png){.thumbnail}

#### Interfaccia utente

Definisci qui la `lingua` d'uso dell'interfaccia Roundcube, il `fuso orario`, il `formato orario` e il `formato data`.

Con l'opzione `Date più leggibilie` graziose è possibile visualizzare la data di ricezione/invio con termini relativi come "Oggi", "Ieri", ecc.<br>
**Ad esempio**: siamo il **19/05/2022**, un'email inviata/ricevuta il **17/05/2022** alle **17:38** sarà visualizzata **Mar 17:38**, perché l'email corrisponde al martedì precedente.

La casella `Display next list entry after delete/move` significa che, dopo un'operazione di eliminazione o spostamento su un'email, l'elemento della linea inferiore sarà sistematicamente selezionato, indipendentemente dall'ordine di selezione. 

#### Impaginazione messaggi

Definisci qui l'ergonomia per visualizzare e agire sulle email. L'opzione `Layout` permette di configurare le 3 finestre descritte nella sezione [Interfaccia generale della Webmail RoundCube](#topwindow).

#### Visualizzazione messaggi

Definisci come visualizzare le email.<br>
Ti consigliamo di avere la casella `Mostra HTML` selezionata, per assicurarti che le email formattate dal mittente siano correttamente visualizzate.<br>
Ti consigliamo inoltre di mantenere l'opzione `Permetti risorse remote (immagini, stili)` per `mai`. in quanto evita di caricare gli elementi di un'email che sembra malevolo.

#### Composizione messaggi

Definisci la forma predefinita durante la redazione di un'email o di una risposta.<br>
Ti consigliamo di utilizzare l'opzione `Scrivi i messaggi in HTML` su `sempre`, per utilizzare di default gli strumenti HTML e non alterare la firma HTML.

#### Contatti

Personalizza qui la configurazione delle informazioni nella tua rubrica.

#### Cartelle speciali

Roundcube dispone di 4 cartelle speciali: `Bozze`, `Inviate`, `Marce`, `Cestino`.

Non consigliamo di modificarli, ma è possibile attribuire il comportamento di una cartella speciale a un'altra cartella creata successivamente, grazie ai menu a tendina.<br>
**Ad esempio**, è possibile attribuire il comportamento "Bozze" a un'altra cartella creata. Le email salvate saranno considerate come bozze fino al loro invio effettivo.

#### Impostazioni del server

In questa scheda è possibile ottimizzare lo spazio occupato su un account email. Infatti, l'opzione `Svuota il cestino all'uscita` permette di evitare il cumulo degli elementi che sono stati eliminati. L'opzione `Elimina direttamente i messaggi in Spam` eliminerà automaticamente tutte le email considerate SPAM.

> [!warning]
> 
> Si sconsiglia di attivare l'opzione `Elimina direttamente i messaggi in Spam` nel caso in cui un falso positivo (e-mail erroneamente dichiarato come "SPAM") si trovi dichiarato SPAM per il server ricevente. Infatti, quando un'email è inserita nella cartella "Posta elettronica", è ancora possibile verificare se l'email è legittima.

### Gestisci le identità e la loro firma <a name="identity"></a>

Clicca su `Impostazioni`{.action} nella barra superiore e seleziona `Identità`{.action} nella colonna di sinistra. "L'identità" permette di personalizzare le informazioni inviate ai destinatari, come ad esempio il nome visualizzato o la firma.

![hosting](images/roundcube07.png){.thumbnail}

#### Impostare gli attributi di un'identità 

- **Nome visualizzato**: questo nome comparirà nella sezione "Mittente" del destinatario
- **E-mail**: corrisponde all'indirizzo da cui è stata inviata l'email.
- **Società**: campo destinato al nome della società, associazione o altro ente.
- **Rispondere a**: attribuire un indirizzo email di risposta diverso da quello del mittente.
- **Ccn**: inviare in copia nascosta un indirizzo email durante un invio.
- **Imposta predefinita**: se vi sono più identità (firme), attribuirla di default.
- **Firma**: personalizzare la firma di un'email durante la redazione (cognome, nome, posizione occupata, frasi, immagini...).
- **Firma HTML**: attiva il formato HTML sulla firma. 

> [!alert]
> 
> Completare la casella **E-mail** con un indirizzo email diverso da quello a cui sei connesso è considerato un'usurpazione di identità elettronica (*spoofing*). L'indirizzo IP utilizzato per l'invio rischia di essere "bandito" e/o considerato "SPAM" presso i tuoi destinatari. 

#### Aggiungere una firma

Di default, la casella `firma` è in "testo chiaro". Questo formato non consente di effettuare modifiche avanzate o di inserire un'immagine nella firma. Per usufruire delle opzioni di modifica avanzate per una firma, ti consigliamo di attivare la modalità HTML cliccando su **Firma HTML** sotto il riquadro di registrazione.

> [!warning]
> 
> Pertanto, se la firma è in formato HTML, sarà necessario passare in modalità HTML per la redazione di un'email. Puoi attivare di default questa opzione per ogni redazione di email, dalla sezione `Impostazioni`{.action} dell'interfaccia Roundcube.
> Clicca su `Preferenze`{.action} nella colonna di sinistra e poi su `Composizione messaggi`{.action}. Per la voce **Redigere email HTML**, seleziona `Sempre`.
>

Per inserire un'immagine in una firma, l'immagine deve essere ospitata su un server (un hosting OVHcloud o altro).<br>
**Scaricare un'immagine da un computer non ne permetterà la visualizzazione**.

Clicca sul pulsante `< >`{.action} nella barra degli strumenti HTML e inserisci il codice seguente, sostituendo `your-image-url` con l'indirizzo (URL) dell'immagine e `text-if-image-is-not displayed` con un testo che sostituisce l'immagine se questa non può essere visualizzata.

```bash
<img src="your-image-url" border="0" alt="text-if-image-is-not-displayed" />
```

![hosting](images/roundcube08.png){.thumbnail}

### Rubrica di contatti

Clicca su `Contatti`{.action} nella barra superiore per accedere alla rubrica. Esso è diviso in **3 colonne**:

- **Gruppi**: nella rubrica indirizzi, potete creare gruppi per classificare i contatti.
- **Contatti**: visualizza i contatti della rubrica o del gruppo selezionato.
- **Proprietà contatto** o **Aggiungi contatto**: questa finestra si apre quando viene selezionato un contatto o quando è in fase di creazione. È possibile leggere o modificare le informazioni di un contatto.

![hosting](images/roundcube09.png){.thumbnail}

#### Gruppi <a name="group"></a>

I gruppi sono sottocategorie della rubrica. Permettono di classificare i contatti in sottounità. Ad esempio, è più facile trovare un contatto in un gruppo che hai creato piuttosto che nell'intera rubrica indirizzi. per permetterti di inviare un'email aggiungendo un gruppo di destinatari, invece di aggiungerne uno a uno.

Per creare un gruppo, clicca sul pulsante `+`{.action} in fondo alla colonna `Gruppi`. Definisci il nome del gruppo e clicca su `Salva`{.action} per confermare l'operazione.

![hosting](images/roundcube10.png){.thumbnail}

Per assegnare un contatto a uno dei gruppi, seleziona un contatto nella colonna `Contatti` e, nella finestra che appare, clicca sulla scheda `Gruppi`{.action}. Seleziona il gruppo che vuoi assegnare al contatto.

#### Contatti <a name="contacts"></a>

Nella colonna `Gruppi`, seleziona la rubrica o uno dei gruppi.

> [!primary]
> 
> Quando crei un contatto a partire da un gruppo selezionato, il contatto sarà aggiunto automaticamente al gruppo.

Clicca sul pulsante `+`{.action} in fondo alla colonna `Contatti` per creare un contatto.

![hosting](images/roundcube11.png){.thumbnail}

Inserisci le informazioni del contatto.

> [!primary]
> Aggiungi campi supplementari tramite il menu a tendina `Aggiungi campo...`{.action}, sotto i campi `Nome` e `Indirizzo`.

#### Importa contatti

Dalla finestra `Contatti`{.action}, nella barra superiore, clicca su `importare`{.action} per aprire la finestra di importazione.

- `Importa da file`: seleziona un file CSV o vCard sul tuo computer. I contatti all'interno di un file CSV devono essere separati da virgola. Il file non deve superare i 20 MB.
- `Importa le assegnazioni di gruppo`: Se i contatti del tuo file sono ripartiti per gruppi, puoi attivare questa opzione per trovare questa organizzazione o lasciare questa opzione su `zero` affinché nessun gruppo sia assegnato ai contatti.
- `Sostituisci l'intera rubrica`: Se hai già configurato una rubrica, ti consigliamo di esportarla prima di selezionare questa opzione o di essere sicuro di voler definitivamente sostituirla.

![hosting](images/roundcube-import-contact.png){.thumbnail}

#### Esporta i contatti Roundcube

Dalla finestra `Contatti`{.action}, nella barra superiore, clicca sulla freccia verso il basso a destra del pulsante `Esporta`{.action}.

Puoi scegliere tra:

- `Esporta tutto`{.action} i contatti saranno poi esportati in un file **vcf**.
- `Esporta selezionati`{.action} per esportare solo gli elementi selezionati nella colonna `Contatti`{.action}.

![hosting](images/roundcube-export-contact.png){.thumbnail}

### Risposte (template) <a name="responses"></a>

Questa funzione permette di creare template di risposta durante la redazione di un'email.

Clicca su `Impostazioni`{.action} nella barra superiore e seleziona `Risposte`{.action} nella colonna di sinistra.

Per aggiungere una risposta, clicca sul pulsante `+`{.action} in fondo alla colonna `Risposte`.

![hosting](images/roundcube12.png){.thumbnail}

> [!primary]
> 
> Le "risposte" sono redatte in formato "testo chiaro".

### Redazione di un'email

Nella scheda `E-mail`{.action} nella barra superiore, clicca su `Nuovo messaggio`{.action}.

Nella finestra di redazione di un'email sono disponibili questi campi: 

- **Mittente**: scegli un'[identità](#identity) per definire il mittente.
- **Destinatario+**: aggiungere destinatari e/o un [gruppo di destinatari](#group).

> [!primary]
> 
> Il campo **"Destinatario"** non deve superare i 100 destinatari, include i contatti contenuti in un [gruppo](#group).

- **Aggiungi Cc+**: aggiungere destinatari in copia semplice.
- **Aggiungi Ccn+**: aggiungere destinatari in copia nascosta. Gli altri destinatari dell'email non vedranno questi in Cci.
- **Aggiungi Followup-To**: inviare l'email ai destinatari
- **Tipo editor**:  
    - `Testo semplice`: solo testo senza forma.
    - `HTML`: testo riformato. Si apre una barra degli strumenti HTML sopra la finestra di inserimento.
- **Priorità** dell'email
- **Ricevuta di ritorno**: al destinatario è richiesto un avviso di ricevimento.
- **Notifica di consegna** quando l'email è stata trasmessa al destinatario.
- **Salva i messaggi inviati in**: scegli la cartella in cui verrà salvata una copia dell'email.

Nella barra superiore sono disponibili le seguenti azioni:

- `Annulla`{.action} la redazione di un'email con una richiesta di conferma
- `Invia`{.action} un'email.
- `Salva`{.action} un'email nella cartella speciale "bozza"
- `Controllo ortografico`{.action}, per verificare il testo, con un menù che permette la scelta della lingua.
- `Allegare`{.action} un file a un'email
- `Firma`{.action}: aggiunge la firma associata all'[identità](#identity) selezionata.
- `Risposte`{.action}: aggiungi un template pre-registrato nella sezione [Risposte](#responses).

![hosting](images/roundcube13.png){.thumbnail}

## Per saperne di più

[Iniziare a utilizzare la soluzione MX Plan](https://docs.ovh.com/it/emails/informazioni-generali-email-condivise/)

[Modifica la password di un indirizzo email MX Plan](https://docs.ovh.com/it/emails/modificare-password-account-email-mxplan/)

[Crea filtri per i tuoi indirizzi email](https://docs.ovh.com/it/emails/servizio_email_configura_i_filtri_email_nel_tuo_spazio_cliente_ovh/)

[Utilizza i reindirizzamenti email](https://docs.ovh.com/it/emails/servizio_email_configura_il_reindirizzamento_delle_tue_email/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
