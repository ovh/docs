---
title: 'Utilizzare il proprio indirizzo e-mail dalla webmail Roundcube'
updated: 2026-05-04
---

## Obiettivo

Con la soluzione MX Plan OVHcloud, puoi inviare e ricevere e-mail da un software di terze parti o tramite una webmail. OVHcloud fornisce un servizio di messaggistica online chiamato Roundcube che permette, tramite un browser web, di accedere a un account e-mail.

**Scopri come utilizzare la webmail Roundcube per i tuoi indirizzi e-mail OVHcloud**

## Prerequisiti

- Disporre di una soluzione e-mail OVHcloud **MX Plan**, proposta tra le nostre [offerte di hosting Web](/links/web/hosting), inclusa in un [hosting gratuito 100M](/links/web/domains-free-hosting), o ordinata separatamente come soluzione autonoma.
- Disporre delle informazioni di connessione all'indirizzo e-mail MX Plan che desideri consultare. Per maggiori informazioni, consulta la nostra guida [Iniziare a utilizzare la soluzione MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
- La tua soluzione e-mail OVHcloud **MX Plan** deve utilizzare la tecnologia webmail **Roundcube**. Per identificarla, segui le istruzioni riportate di seguito.

> [!primary]
> 
> **Come identificare la tecnologia utilizzata sulla mia offerta MX Plan?**
>
> La tecnologia e-mail utilizzata per la tua offerta MX Plan è caratterizzata dall'interfaccia della sua webmail. Per identificarla dal tuo Spazio Cliente, segui questo percorso:
>
> 1. Accedi al tuo [Spazio Cliente OVHcloud](/links/manager).
> 1. Accedi alla sezione `Web Cloud`{.action}.
> 1. Clicca su `MX Plan`{.action}.
> 1. Seleziona il dominio interessato.
> 1. Dalla scheda `Informazioni generali`{.action} (selezionata di default), individua la tecnologia utilizzata sotto la voce **Webmail**.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

<!-- CP-NAV-START:web-mx-plan -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [MX Plan](/links/control-panel/web-mx-plan)
- **Per accedere ai tuoi servizi:** `Web Cloud`{.action} > `MX Plan`{.action} > Seleziona il tuo servizio MX Plan

---
<!-- CP-NAV-END:web-mx-plan -->

## Procedura

**Sommario**

- [Accedere alla webmail Roundcube](#roundcube-connexion)
- [Interfaccia generale della webmail Roundcube](#general-interface)
    - [Gestione delle cartelle (colonna di sinistra)](#leftcolumn)
    - [Lista delle e-mail ricevute / inviate (finestra superiore)](#topwindow)
        - [Tipo di visualizzazione](#topwindow-display)
        - [Azione su un'e-mail selezionata](#topwindow-action)
        - [Cercare un'e-mail](#topwindow-search)
    - [Contenuto di un'e-mail (finestra inferiore)](#lowerwindow)
- [Configurare le preferenze dell'interfaccia Roundcube](#roundcube-settings)
    - [Interfaccia utente](#user-interface-settings)
    - [Vista della casella di posta](#mail-view-settings)
    - [Visualizzazione dei messaggi](#mail-display-settings)
    - [Composizione dei messaggi](#mail-writing-settings)
    - [Contatti](#contacts-settings)
    - [Cartelle speciali](#special-folder-settings)
    - [Impostazioni del server](#server-settings)
    - [Cifratura](#encryption)
- [Gestire le identità e la loro firma](#identity-signature)
    - [Identità](#identity)
    - [Firma](#signature)
- [Rubrica dei contatti](#contact-book)
    - [Gruppi](#group)
    - [Contatti](#contacts)
    - [Importare contatti](#import-contacts)
    - [Esportare i contatti](#export-contacts)
- [Risposte (modelli)](#responses)
- [Aggiungere una risposta automatica](#automatic-respond)
- [Modificare la password del tuo indirizzo e-mail](#password)
- [Redazione di un'e-mail](#email-writing)
- [Casi d'uso](#usecase)

### Accedere alla webmail Roundcube <a name="roundcube-connexion"></a>

Accedi alla pagina [Webmail](/links/web/email). Inserisci un indirizzo e-mail e la password, poi clicca su `Connessione`{.action}. 

![hosting](images/webmail_login.png){.thumbnail}

Verrai quindi reindirizzato all'interfaccia Roundcube.

![hosting](images/roundcube01.png){.thumbnail}

> [!primary]
> 
> Quando ti connetti per la prima volta all'interfaccia Roundcube, l'aspetto può essere diverso da quello che vedrai in questa documentazione. Significa che è stato impostato l'aspetto "classico" sulla tua interfaccia. Per modificarlo, segui la sezione "[Interfaccia utente](#user-interface-settings)" e seleziona la visualizzazione "Larry".
> L'aspetto dell'interfaccia non avrà alcuna incidenza sulle spiegazioni che seguono in questa documentazione.

> [!warning]
> 
> Se vieni reindirizzato a un'interfaccia **O**utlook **W**eb **A**pp (OWA), significa che ti trovi sull'ultima versione dell'offerta MX Plan. Per maggiori informazioni sulla tua offerta MX Plan, consulta la nostra pagina [Iniziare a utilizzare la soluzione MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
>
> Per familiarizzare con l'interfaccia **OWA**, consulta la nostra guida [Consultare il proprio account e-mail dall'interfaccia OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Interfaccia generale della webmail Roundcube <a name="general-interface"></a>

Una volta connesso al tuo account e-mail, hai accesso alla finestra principale di Roundcube, composta da 3 zone:

- [**Colonna di sinistra**](#leftcolumn): l'albero del tuo account e-mail, composto da cartelle e sottocartelle. La cartella principale è la `Posta in arrivo`.

- [**Finestra superiore**](#topwindow): l'elenco delle e-mail contenute nella cartella selezionata nella colonna di sinistra.

- [**Finestra inferiore**](#lowerwindow): il contenuto dell'e-mail selezionata nella finestra superiore.

#### Gestione delle cartelle (colonna di sinistra) <a name="leftcolumn"></a>

In questa zona compaiono le cartelle presenti nel tuo account e-mail.

Per gestire più precisamente le cartelle, clicca sull'icona a forma di ingranaggio in fondo alla colonna e poi su `Gestione cartelle`{.action}.

![hosting](images/roundcube02.png){.thumbnail}

Per creare una cartella, clicca sul pulsante `+`{.action} in fondo alla colonna `Cartelle`.

Per eliminare una cartella, seleziona la cartella interessata, clicca sull'icona a forma di ingranaggio in fondo alla colonna `Cartelle` e poi su `Elimina`{.action}. Per cancellare il contenuto ma conservare la cartella, clicca su `Svuota`{.action}.

Le caselle da spuntare a livello delle cartelle corrispondono alle "iscrizioni". L'iscrizione determina se la cartella deve essere visualizzata o meno a livello dell'interfaccia webmail o del client di posta, conservando comunque il contenuto della cartella. Lo scopo è soltanto nascondere o visualizzare una cartella sull'account e-mail.

> [!primary]
>
> Le cartelle che presentano una casella da spuntare grigia sono cartelle speciali. Non è possibile eliminarle o rimuoverne l'iscrizione.

#### Lista delle e-mail ricevute / inviate (finestra superiore) <a name="topwindow"></a>

Questa finestra mostra il contenuto della cartella selezionata nella colonna di sinistra. 

##### Tipo di visualizzazione <a name="topwindow-display"></a>

Questa finestra è presentata in una forma personalizzabile. Per farlo, clicca sull'icona a forma di ingranaggio situata in alto a sinistra di questa finestra.

![hosting](images/roundcube03.png){.thumbnail}

Sono configurabili quattro parametri:

- **Disposizione**: definisce la disposizione delle finestre di gestione di un account e-mail. Tre opzioni:
    - `Schermo largo`{.action} (*Widescreen*): tre pannelli affiancati — cartelle, lista delle e-mail e riquadro di lettura allineati orizzontalmente;
    - `Desktop`{.action} (*Desktop*): lista delle e-mail in alto, riquadro di lettura sotto (disposizione classica);
    - `Lista`{.action} (*List*): nessun riquadro di lettura — le e-mail si aprono a tutto schermo al clic.

- **Colonne della lista**: caselle da spuntare che determinano le colonne visualizzate nella lista delle e-mail. Le colonne **Oggetto** e **Discussioni** sono sempre visibili. Colonne opzionali disponibili: `Da`{.action}, `A`{.action}, `Da/A`{.action}, `Rispondi a`{.action}, `Copia`{.action}, `Data`{.action}, `Dimensione`{.action}, `Stato lettura`{.action}, `Allegati`{.action}, `Indicatore`{.action}, `Priorità`{.action}.

- **Colonna di ordinamento**: permette di scegliere la colonna di ordinamento predefinita. Opzioni disponibili: `Nessuno`{.action}, `Data di arrivo`{.action}, `Data di invio`{.action}, `Oggetto`{.action}, `Da`{.action}, `A`{.action}, `Da/A`{.action}, `Copia`{.action} o `Dimensione`{.action}.

- **Ordine di ordinamento**: ascendente o discendente.

Clicca su `Salva`{.action} per applicare le tue scelte.

> [!primary]
>
> Puoi anche **ordinare dinamicamente la lista** cliccando direttamente sull'intestazione di una colonna visualizzata (ad esempio **Data**, **Oggetto** o **Dimensione**). Un secondo clic sulla stessa colonna inverte l'ordine.

##### Azione su un'e-mail selezionata <a name="topwindow-action"></a>

Quando un'e-mail è selezionata, è possibile agire su di essa. Ecco le azioni possibili:

- `Rispondi`{.action}: rispondere direttamente al mittente.
- `Rispondi a tutti`{.action}: rispondere direttamente a tutti i destinatari presenti nei campi "A" e "Copia".
- `Inoltra`{.action}: inoltrare l'e-mail selezionata a uno o più destinatari.
- `Elimina`{.action}: spostare l'e-mail selezionata nel "Cestino".
- `Indesiderata`{.action}: inserire l'e-mail selezionata direttamente nella casella della posta indesiderata (Junk), qualificarla come **spam**.
- `Contrassegna`{.action}: determinare manualmente lo stato di un'e-mail.
- `Altro`{.action} 
    - `Stampa questo messaggio`{.action}.
    - `Scarica (.eml)`{.action}: recuperare l'intestazione dell'e-mail e il suo contenuto.
    - `Modifica come nuovo`{.action}: creare una nuova e-mail basandosi sull'e-mail selezionata.
    - `Visualizza sorgente`{.action}: visualizzare l'e-mail nella sua forma grezza con l'intestazione.
    - `Sposta in`{.action}: spostare l'e-mail in una cartella.
    - `Copia in`{.action}: copiare l'e-mail in una cartella.
    - `Apri in una nuova finestra`{.action}.

![hosting](images/roundcube04.png){.thumbnail}

> [!primary]
>
> Se uno dei tuoi corrispondenti chiede di ricevere una conferma di lettura quando leggi la sua e-mail, otterrai il seguente messaggio: `il mittente di questo messaggio ha chiesto di essere avvisato quando leggerai questo messaggio. Desideri avvisare il mittente?`.
>

##### Cercare un'e-mail <a name="topwindow-search"></a>

Uno strumento di ricerca è disponibile nella parte superiore destra dell'interfaccia.

Inserisci un termine nel campo di ricerca, poi conferma con il tasto `Invio`{.action}: Roundcube effettua per impostazione predefinita la ricerca su tutta la cartella corrente.

Clicca sulla freccia situata a destra della lente di ingrandimento per visualizzare i filtri di ricerca: puoi limitare la ricerca a determinati campi (oggetto, corpo del messaggio, mittente, destinatari, ecc.) o estenderne la portata a tutte le cartelle.

#### Contenuto di un'e-mail (finestra inferiore) <a name="lowerwindow"></a>

Quando un'e-mail è selezionata nella lista, questa viene visualizzata nella finestra inferiore.

A destra, trovi le scorciatoie delle funzioni qui sotto:

- `Visualizza in formato HTML`{.action} (predefinito)
- `Visualizza in formato testo semplice`{.action}
- `Rispondi`{.action}
- `Rispondi a tutti`{.action}
- `Inoltra`{.action}
- `Apri in una nuova finestra`{.action}

![hosting](images/roundcube05.png){.thumbnail}

### Configurare le preferenze dell'interfaccia Roundcube <a name="roundcube-settings"></a>

I capitoli seguenti di questa guida corrispondono alle schede che compongono la sezione `Preferenze`{.action} delle `Impostazioni`{.action} di Roundcube. La loro descrizione non è esaustiva.

![hosting](images/roundcube06.png){.thumbnail}

#### Interfaccia utente <a name="user-interface-settings"></a>

Definisci qui la `lingua` di utilizzo dell'interfaccia Roundcube, il `fuso orario`, il `formato orario` e il `formato data`.

L'opzione `Date più leggibili` permette di visualizzare la data di ricezione/invio con termini relativi come "Oggi", "Ieri", ecc.<br>
**Ad esempio**: oggi è il **19/05/2022**, un'e-mail inviata/ricevuta il **17/05/2022** alle **17:38** sarà visualizzata come **Mar 17:38**, perché l'e-mail corrisponde al martedì precedente.

La casella `Visualizza la voce successiva della lista dopo eliminazione o spostamento` significa che, dopo un'azione di eliminazione o spostamento su un'e-mail, l'elemento della riga inferiore sarà sistematicamente selezionato, indipendentemente dall'ordine di ordinamento.

Puoi scegliere l'estetica di visualizzazione della tua interfaccia. Hai la scelta tra la visualizzazione **Classic** o la visualizzazione **Larry**.

#### Vista della casella di posta <a name="mail-view-settings"></a>

Definisci qui l'ergonomia per visualizzare e agire sulle e-mail. L'opzione `Disposizione` permette di disporre le 3 finestre descritte nella sezione [Lista delle e-mail ricevute / inviate](#topwindow).

#### Visualizzazione dei messaggi <a name="mail-display-settings"></a>

Definisci la modalità di visualizzazione delle e-mail.<br>
È consigliato avere la casella `Mostra HTML` selezionata, per assicurarsi che le e-mail formattate dal mittente vengano visualizzate correttamente.<br>
È inoltre consigliato mantenere l'opzione `Consenti risorse remote (immagini, stili)` su `mai`. Questo evita di caricare gli elementi di un'e-mail che sembra malevola.

#### Composizione dei messaggi <a name="mail-writing-settings"></a>

Definisci la forma predefinita durante la redazione di un'e-mail o di una risposta.<br>
È consigliato impostare l'opzione `Componi e-mail HTML` su `sempre`, per beneficiare per impostazione predefinita degli strumenti di modifica HTML e non alterare una firma HTML.

#### Contatti <a name="contacts-settings"></a>

Personalizza qui la disposizione delle informazioni nella tua rubrica.

#### Cartelle speciali <a name="special-folder-settings"></a>

Roundcube dispone di 4 cartelle speciali: `Bozze`, `Inviata`, `Indesiderata`, `Cestino`.

Sconsigliamo di modificarle, ma è possibile attribuire il comportamento di una cartella speciale a un'altra cartella creata successivamente, grazie ai menu a tendina.<br>

**Ad esempio**, puoi attribuire il comportamento "Bozze" a un'altra cartella che hai creato cliccando sulla lista a tendina e scegliendo la cartella. Se nessuna cartella le è attribuita, sarà automaticamente impostata sull'opzione "Drafts". Le e-mail che vi saranno salvate verranno considerate come bozze fino al loro invio effettivo.

> In pratica, creo una sottocartella "Bozze e-mail clienti". Accedo a `Le mie preferenze`{.action} / `Cartelle speciali`{.action} e scelgo l'opzione "Bozze". Nel menu a tendina, seleziono la cartella "Bozze e-mail clienti" per sostituire "Drafts". Le e-mail redatte in questa cartella saranno considerate come bozze.

#### Impostazioni del server <a name="server-settings"></a>

In questa scheda, puoi ottimizzare lo spazio occupato su un account e-mail. Infatti, l'opzione `Svuota il cestino alla disconnessione` permette di evitare l'accumulo degli elementi che sono stati eliminati. L'opzione `Elimina direttamente le e-mail indesiderate` eliminerà automaticamente tutte le e-mail considerate spam.

> [!warning]
> 
> È sconsigliato attivare l'opzione `Elimina direttamente le e-mail indesiderate`, nel caso in cui un falso positivo (e-mail dichiarata erroneamente come "spam") venga dichiarato come spam dal server di ricezione. Infatti, quando un'e-mail è inserita nella cartella "Indesiderata", è ancora possibile verificare se l'e-mail è legittima.

#### Cifratura <a name="encryption"></a>

Se il tuo browser te lo permette, puoi installare e attivare l'estensione "Mailvelope". Si tratta di un'estensione del browser che integra il PGP (**P**retty **G**ood **P**rivacy) nella tua messaggistica web. Il sistema di cifratura PGP e, di conseguenza, l'estensione "Mailvelope" permettono di:

- Cifrare e decifrare e-mail nel tuo browser.
- Mantenere il contenuto delle tue e-mail privato nei confronti del tuo fornitore di posta.

Sei quindi l'unico a poter leggere le tue e-mail. Questa estensione è un modo per proteggere la tua webmail se ricevi e-mail di natura confidenziale.

Per maggiori informazioni, consulta la FAQ di "Mailvelope" all'indirizzo <https://mailvelope.com/faq>.

### Gestire le identità e la loro firma <a name="identity-signature"></a>

Da Roundcube, clicca su `Impostazioni`{.action} nella barra superiore, poi su `Identità`{.action} nella colonna di sinistra. "L'identità" permette di personalizzare le informazioni inviate ai destinatari come, ad esempio, il nome visualizzato o la firma.

![hosting](images/roundcube07.png){.thumbnail}

#### Configurare gli attributi di un'identità <a name="identity"></a>

- **Nome visualizzato**: questo nome apparirà nella sezione "mittente" del destinatario.
- **E-mail**: corrisponde all'indirizzo da cui viene inviata l'e-mail.
- **Organizzazione**: campo destinato al nome di un'azienda, associazione o altra entità.
- **Rispondi a**: attribuire un altro indirizzo e-mail di risposta diverso da quello del mittente.
- **Ccn**: mettere in copia nascosta un indirizzo e-mail durante un invio.
- **Imposta come predefinito**: quando ci sono più identità (firme), attribuire questa per impostazione predefinita.
- **Firma**: personalizzare il piè di pagina di un'e-mail durante la sua redazione (cognome, nome, posizione occupata, frasi, immagini...).
- **Firma HTML**: attiva il formato HTML sulla firma.

> [!alert]
>
> Compilare la casella **E-mail** con un indirizzo e-mail diverso da quello a cui sei connesso è considerato un'usurpazione di identità elettronica (*spoofing*). L'indirizzo IP utilizzato per l'invio rischia di essere "bandito" e/o considerato come "spam" presso i tuoi destinatari.

#### Aggiungere una firma <a name="signature"></a>

Per impostazione predefinita, la casella `firma` è in "testo semplice". Questo formato non permette una modifica avanzata o di inserire un'immagine nella tua firma. Per beneficiare delle opzioni di modifica avanzata per una firma, è consigliato attivare la modalità HTML cliccando su **Firma HTML** sotto il riquadro di inserimento.

> [!warning]
>
> Di conseguenza, se la firma è in formato HTML, sarà necessario passare alla modalità HTML per la redazione di un'e-mail. Puoi attivare questa opzione per impostazione predefinita per ogni redazione di e-mail, dalla sezione `Impostazioni`{.action} dell'interfaccia Roundcube.
> Clicca su `Preferenze`{.action} nella colonna di sinistra, poi su `Composizione dei messaggi`{.action}. Per la voce **Componi e-mail HTML**, seleziona `Sempre`.
>

Per inserire un'immagine in una firma, l'immagine deve essere ospitata su un server (un hosting OVHcloud o altro).<br>
**Caricare un'immagine da un computer non ne permetterà la visualizzazione**.

Clicca sul pulsante `< >`{.action} nella barra degli strumenti HTML, poi inserisci il codice seguente, sostituendo `your-image-url` con l'indirizzo (URL) dell'immagine e `text-if-image-is-not-displayed` con un testo che sostituisca l'immagine se questa non può essere visualizzata.

```html
<img src="your-image-url" border="0" alt="text-if-image-is-not-displayed" />
```

![hosting](images/roundcube08.png){.thumbnail}

### Rubrica dei contatti <a name="contact-book"></a>

Clicca su `Contatti`{.action}, nella barra superiore, per accedere alla rubrica dei contatti. Questa è suddivisa in **3 colonne**:

- **Gruppi**: nella rubrica indirizzi, puoi creare gruppi per classificare i contatti.
- **Contatti**: visualizza i contatti della rubrica indirizzi o del gruppo selezionato.
- **Proprietà del contatto** o **Aggiungi un contatto**: questa finestra appare quando un contatto è selezionato o in fase di creazione. Puoi leggere o modificare le informazioni di un contatto.

![hosting](images/roundcube09.png){.thumbnail}

#### Gruppi <a name="group"></a>

I gruppi sono sottocategorie della rubrica indirizzi. Permettono di classificare i contatti in sottoinsiemi. Ad esempio, ritroverai più facilmente un contatto in un gruppo che avrai creato piuttosto che nell'insieme della tua rubrica indirizzi. Questo ti permette inoltre di inviare un'e-mail aggiungendo un gruppo come destinatario, invece di aggiungere uno a uno i contatti del gruppo.

Per creare un gruppo, clicca sul pulsante `+`{.action} in fondo alla colonna `Gruppi`. Definisci il nome del gruppo, poi clicca su `Salva`{.action} per confermare.

![hosting](images/roundcube10.png){.thumbnail}

Per assegnare un contatto a uno dei gruppi, seleziona un contatto nella colonna `Contatti` poi, nella finestra che appare, clicca sulla scheda `Gruppi`{.action}. Spunta il gruppo che vuoi assegnare al contatto.

#### Contatti <a name="contacts"></a>

Nella colonna `Gruppi`, seleziona la rubrica indirizzi o uno dei gruppi.

> [!primary]
>
> Quando crei un contatto a partire da un gruppo selezionato, il contatto verrà automaticamente aggiunto al gruppo.

Clicca sul pulsante `+`{.action} in fondo alla colonna `Contatti` per creare un contatto.

![hosting](images/roundcube11.png){.thumbnail}

Compila quindi le informazioni del contatto.

> [!primary]
> Puoi aggiungere campi supplementari tramite il menu a tendina `Aggiungi un campo...`{.action}, situato sotto i campi `Nome` e `Indirizzo`.

#### Importare contatti <a name="import-contacts"></a>

Dalla finestra `Contatti`{.action}, nella barra superiore, clicca su `importa`{.action} per aprire la finestra di importazione.

- `Importa da un file`: seleziona un file CSV o un file vCard sul tuo computer. I contatti all'interno di un file CSV devono essere separati da virgole. Il file non deve superare i 20 MB.
- `Importa le assegnazioni di gruppo`: se i contatti del tuo file sono ripartiti per gruppi, puoi attivare questa opzione per ritrovare questa organizzazione oppure lasciare questa opzione su `nessuna` affinché nessun gruppo sia assegnato ai contatti.
- `Sostituisci l'intera rubrica indirizzi`: se una rubrica è già configurata, ti consigliamo di esportarla prima di selezionare questa opzione o di essere certo di volerla definitivamente sostituire.

![hosting](images/roundcube-import-contact.png){.thumbnail}

#### Esportare i contatti <a name="export-contacts"></a>

Dalla finestra `Contatti`{.action}, nella barra superiore, clicca sulla freccia rivolta verso il basso a destra del pulsante `Esporta`{.action}.

Hai la scelta tra:

- `Esporta tutto`{.action} e l'insieme dei contatti sarà quindi esportato in un file **.vcf**.
- `Esporta la selezione`{.action} per esportare solo gli elementi che avrai scelto nella colonna `Contatti`{.action}.

![hosting](images/roundcube-export-contact.png){.thumbnail}

### Risposte (modelli) <a name="responses"></a>

Questa funzione permette di creare modelli di risposta durante la redazione di un'e-mail.

Da Roundcube, clicca su `Impostazioni`{.action} nella barra superiore, poi su `Risposte`{.action} nella colonna di sinistra.

Per aggiungere una risposta, clicca sul pulsante `+`{.action} in fondo alla colonna `Risposte`.

![hosting](images/roundcube12.png){.thumbnail}

> [!primary]
>
> Le "risposte" si redigono in formato "testo semplice".

### Aggiungere una risposta automatica <a name="automatic-respond"></a>

Vuoi aggiungere una risposta automatica al tuo indirizzo e-mail quando sei assente o non disponibile. Questa funzione non può essere attivata dalla webmail ma dal tuo [Spazio Cliente OVHcloud](/links/manager), nell'interfaccia di gestione dei tuoi indirizzi e-mail. Consulta la nostra guida "[Creare una risposta automatica per il proprio indirizzo e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses/)".

### Modificare la password del tuo indirizzo e-mail <a name="password"></a>

Per modificare la password del tuo indirizzo e-mail, devi accedere al tuo [Spazio Cliente OVHcloud](/links/manager), nell'interfaccia di gestione dei tuoi indirizzi e-mail. Consulta la nostra guida "[Modificare la password di un indirizzo e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password/)".

### Redazione di un'e-mail <a name="email-writing"></a>

Dalla scheda `E-mail`{.action} nella barra superiore, clicca su `Componi`{.action}.

Nella finestra di redazione di un'e-mail, ritroviamo i seguenti campi:

- **Da**: scegli un'[identità](#identity) per definire il mittente.
- **A**: aggiungere destinatari e/o un [gruppo di destinatari](#group). Il pulsante `+`{.action} a destra del campo permette di inserire più indirizzi.

> [!primary]
>
> Il campo **"A"** non deve superare i 100 destinatari, inclusi i contatti contenuti in un [gruppo](#group).

- **Cc**: tramite il pulsante `Aggiungi Cc`{.action}, aggiungere destinatari in copia semplice.
- **Ccn**: tramite il pulsante `Aggiungi Ccn`{.action}, aggiungere destinatari in copia nascosta. Gli altri destinatari dell'e-mail non vedranno quelli in Ccn.
- **Inoltra a**: tramite il pulsante `Aggiungi Inoltra a`{.action}, inoltrare l'e-mail a dei destinatari.
- **Tipo di editor**:
    - `Testo semplice`: solo testo senza formattazione.
    - `HTML`: testo con formattazione. Una barra degli strumenti HTML appare sopra la finestra di inserimento.
- **Priorità** dell'e-mail.
- **Conferma di apertura dell'e-mail**: viene richiesto al destinatario un avviso di ricevimento.
- **Notifica dello stato di consegna** quando l'e-mail è stata correttamente trasmessa al destinatario.
- **Salva l'e-mail inviata in**: scegli la cartella in cui sarà conservata una copia dell'e-mail.

Nella barra superiore, sono disponibili le seguenti azioni:

- `Annulla`{.action} la redazione di un'e-mail con una richiesta di conferma.
- `Invia`{.action} un'e-mail.
- `Salva`{.action} un'e-mail nella cartella speciale "bozza".
- `Ortografia`{.action}, per verificare il testo, con un menu che permette la scelta della lingua.
- `Allega`{.action} un file a un'e-mail.
- `Firma`{.action}: aggiunge la firma associata all'[identità](#identity) selezionata.
- `Risposte`{.action}: aggiunge un modello preregistrato nella sezione [Risposte](#responses).

![hosting](images/roundcube13.png){.thumbnail}

### Casi d'uso <a name="usecase"></a>

#### Verifica della richiesta non riuscita

Riscontri il seguente messaggio quando provi ad accedere alla tua webmail Roundcube:

```console
VERIFICA DELLA RICHIESTA NON RIUSCITA
Per la tua protezione, l'accesso a questa risorsa è protetto dagli attacchi CSRF.
Se visualizzi questo messaggio, probabilmente non hai effettuato la disconnessione prima di uscire dall'applicazione web.
È ora richiesta un'interazione umana per continuare.
Contatta l'amministratore del tuo server.
```

Come precisato nel messaggio, il tuo account e-mail è considerato come già connesso. Si parla qui di "sessione". Significa che il tuo account e-mail è già in fase di utilizzo agli occhi del server e-mail e che questa sessione precedente deve essere chiusa. Verifica che il tuo account e-mail non sia già aperto su roundcube. Svuota anche i dati nella cache del tuo browser internet.

## Per saperne di più

[Iniziare a utilizzare la soluzione MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Modificare la password di un indirizzo e-mail MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

[Creare una risposta automatica per il proprio indirizzo e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses/)

[Creare filtri per i tuoi indirizzi e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_filters)

[Utilizzare i reindirizzamenti e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Contatta la nostra [Community di utenti](/links/community).
