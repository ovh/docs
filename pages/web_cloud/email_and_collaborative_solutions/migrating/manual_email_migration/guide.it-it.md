---
title: Migra manualmente il tuo indirizzo email
excerpt: Come migrare manualmente il tuo indirizzo email verso un altro indirizzo email
updated: 2026-03-30
---

## Obiettivo

[La migrazione automatica](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm) di un indirizzo email è possibile tramite il nostro tool [OVHcloud Mail Migrator](/links/web/omm). Inoltre, è possibile migrare manualmente il tuo indirizzo email tramite client di posta.

**Questa guida ti mostra come migrare manualmente il tuo indirizzo email.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni, consulta la sezione "Per saperne di più" di questa guida.
>

## Prerequisiti

- Disporre di un servizio email OVHcloud, come [Exchange](/links/web/emails-exchange), [Email Pro](/links/web/email-pro), [Zimbra](/links/web/zimbra) o MX Plan (tramite l'offerta MX Plan o inclusa in un'offerta di [hosting Web OVHcloud](/links/web/hosting))
- Disporre delle credenziali relative agli account e-mail da migrare
- Disporre delle credenziali relative agli account e-mail OVHcloud che ricevono i dati migrati (gli account di destinazione).

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### Accesso allo Spazio Cliente OVHcloud

**MX Plan:**

- **Link diretto:** [MX Plan](/links/control-panel/web-mx-plan)
- **Percorso di navigazione:** `Web Cloud`{.action} > `MX Plan`{.action} > Seleziona il tuo servizio MX Plan

**Email Pro:**

- **Link diretto:** [Email Pro](/links/control-panel/web-email-pro)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Email Pro`{.action} > Seleziona la tua piattaforma

**Exchange:**

- **Link diretto:** [Exchange](/links/control-panel/web-exchange)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Exchange`{.action} > Seleziona la tua piattaforma

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-mx-plan -->

## Procedura

> [!primary]
> Per prima cosa, verifica che la migrazione automatica sia possibile utilizzando il nostro tool [OVHcloud Mail Migrator](/links/web/omm). Per effettuare questa operazione, consulta la guida [Migrare account e-mail via OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

In questa guida abbiamo eseguito le operazioni sui 3 client di posta più utilizzati, **Outlook**, **Mail** su Mac OS e **Thunderbird**.

Le seguenti istruzioni sono suddivise in due parti:

- **L'esportazione**. per estrarre un backup completo del tuo account e-mail e trasferirlo verso un'altra postazione, un client di posta o un altro account. Se è necessario spostare gli elementi da un indirizzo email verso un altro indirizzo configurato sullo stesso client di posta, è possibile copiare/incollare o trascinare/depositare l'uno verso l'altro. Ti consigliamo comunque di utilizzare il sistema di esportazione del software utilizzato.

- **Importazione**. per permetterti di applicare un backup realizzato sulla tua nuova postazione o software. Verifica che il file di backup da importare sia compatibile con il client di posta utilizzato.

### Outlook

Se disponi di un account e-mail [Exchange OVHcloud](/links/web/emails-hosted-exchange), è possibile esportarlo direttamente in formato PST dallo Spazio Cliente.

Una volta nella pagina del tuo servizio Exchange, nella scheda `Account e-mail`{.action}, clicca sul pulsante `...`{.action} a destra dell'account da esportare e poi su `Esporta in formato PST`{.action}.

![email](images/manager-export-pst01.png){.thumbnail .w-640}

Attendi il completamento dell'operazione, che potrebbe richiedere da qualche minuto a diverse ore, in base alla dimensione dell'esportazione. Al termine di questo processo, sarà sufficiente tornare al pulsante `Esporta in formato PST`{.action} per recuperare un link per scaricare il file.

![email](images/manager-export-pst02.png){.thumbnail .w-640}

#### Windows

> [!tabs]
> **Esportare**
>>
>> - Clicca su `File`{.action} in alto a sinistra, poi su `Aprire ed esportare`{.action} e infine su `Importare/Esportare`{.action}.
>>
>> ![email](images/outlook-export-import-win.png){.thumbnail .w-640}
>>
>> - Seleziona `Esporta dati verso un file`{.action} e clicca su `Seguente`{.action}.
>>
>> ![email](images/outlook-export-win02.png){.thumbnail .w-640}
>>
>> - Seleziona `File dati Outlook (.pst)`{.action} e clicca su `Seguente`{.action}.
>>
>> ![email](images/outlook-export-win03.png){.thumbnail .w-640}
>>
>> - Seleziona il nome dell'account e-mail da esportare.
>>
>> > [!primary]
>> > Potete esportare un solo account per volta.
>>
>> Seleziona `Includi le sottocartelle`{.action} e clicca su `Seguente`{.action}.
>>
>> ![email](images/outlook-export-win04.png){.thumbnail .w-640}
>>
>> - Scegli la cartella di destinazione del tuo backup e inserisci un nome per quest'ultimo cliccando su `Percorrere`{.action}. Seleziona l'opzione che preferisci e clicca su `Terminare`{.action}.
>>
>> ![email](images/outlook-export-win05.png){.thumbnail .w-640}
>>
>> L'esportazione del tuo file inizia. Durante la creazione di un file, ti verrà chiesto di definire una password, che è facoltativo.
>>
>> ![email](images/outlook-export-win06.png){.thumbnail .w-640}
>>
> **Importare**
>>
>> - Clicca su `File`{.action} in alto a sinistra, poi su `Aprire ed esportare`{.action} e infine su `Importare/Esportare`{.action}.
>>
>> ![email](images/outlook-export-import-win.png){.thumbnail .w-640}
>>
>> - Seleziona `Importa da un altro programma o file`{.action} e clicca su `Seguente`{.action}.
>>
>> ![email](images/outlook-import-win02.png){.thumbnail .w-640}
>>
>> - Seleziona `File dati Outlook (.pst)`{.action} e clicca su `Seguente`{.action}.
>>
>> ![email](images/outlook-import-win03.png){.thumbnail .w-640}
>>
>> - Seleziona il file di backup cliccando su `Percorri`{.action}. Seleziona l'opzione che preferisci e clicca su `Terminare`{.action}.
>>
>> ![email](images/outlook-import-win04.png){.thumbnail .w-640}
>>
>> - Se hai impostato una password sul tuo file di backup, inseriscila e clicca su `OK`{.action}.
>>
>> - Seleziona `Importa gli elementi nella cartella attiva`{.action} e clicca su `Termina`{.action}.
>>
>> L'importazione del tuo backup inizia.

#### Mac OS

> [!tabs]
> **Esportare**
>>
>> Nella scheda `Strumenti`{.action} della tua finestra Outlook, clicca su `Esporta`{.action}.
>>
>> ![email](images/outlook-export-mac01.png){.thumbnail .w-640}
>>
>> Dalla finestra "Esporta verso un file archivio (.olm)", seleziona gli elementi che vuoi aggiungere al tuo file di backup e clicca su `Continua`{.action}.
>>
>> ![email](images/outlook-export-mac02.png){.thumbnail .w-640}
>>
>> Seleziona la cartella di destinazione per il tuo backup e clicca su `Salva`{.action}.
>>
>> ![email](images/outlook-export-mac03.png){.thumbnail .w-640}
>>
>> Viene visualizzata una finestra di progressione, clicca su `Continua`{.action} alla fine dell'operazione. Il file di backup è disponibile nella cartella selezionata precedentemente.
>>
> **Importare**
>>
>> Nella scheda `Strumenti`{.action} della tua finestra Outlook, clicca su `Importa`{.action}.
>>
>> ![email](images/outlook-import-mac01.png){.thumbnail .w-640}
>>
>> Scegli il formato di backup che vuoi importare e clicca su `Continua`{.action}.
>>
>> ![email](images/outlook-import-mac02.png){.thumbnail .w-640}
>>
>> Seleziona il file di backup e clicca su `Importa`{.action}.
>>
>> ![email](images/outlook-import-mac03.png){.thumbnail .w-640}
>>
>> Viene visualizzata una finestra di progressione, clicca su `Continua`{.action} alla fine dell'operazione. Il backup viene poi implementato sul tuo Outlook.

### Email su Mac OS

> [!tabs]
> **Esportare**
>>
>> Nella colonna di sinistra, seleziona uno o più account e-mail. Clicca sulla `Casella lettere`{.action} nel menu orizzontale e poi su `Esporta la cassetta delle lettere`{.action}.
>>
>> ![email](images/mail-export-mac01.png){.thumbnail .w-640}
>>
>> Seleziona la cartella scelta o creane una nuova, poi clicca su `Scegli`{.action}.
>>
>> ![email](images/mail-export-mac02.png){.thumbnail .w-640}
>>
>> La tua esportazione è un file ".mbox".
>>
> **Importare**
>>
>> Clicca su `File`{.action} nel menu orizzontale e poi su `Importa cassette delle lettere`{.action}.
>>
>> ![email](images/mail-import-mac01.png){.thumbnail .w-640}
>>
>> Seleziona il file di backup in formato ".mbox" e clicca su `Continua`{.action}.
>>
>> ![email](images/mail-import-mac02.png){.thumbnail .w-640}
>>
>> Nella colonna di sinistra, le email importate sono contenute in un nuovo account e-mail chiamato "Importazione". Le cartelle e i messaggi possono essere spostati dall'account "Importazione" verso i tuoi account e-mail già configurati. Una volta terminati i trasferimenti, potrai eliminare l'account "Importazione".

### Thunderbird

Al momento non esistono funzionalità native per esportare o importare un account e-mail da Thunderbird. È comunque possibile salvare un profilo Thunderbird che contiene tutti gli account e le e-mail in locale sul tuo computer. Questa guida ti mostra come salvare un profilo Thunderbird e reinserirlo su una nuova istanza di Thunderbird.

> [!tabs]
> **Esportare**
>>
>> Dalla finestra principale, clicca sul menu in alto a destra, poi su `Aiuto`{.action} e infine su `Informazioni di soccorso`{.action}.
>>
>> ![email](images/thunderbird_menu.png){.thumbnail .w-640}
>>
>> Visualizzi una tabella. Identifica la linea `Directory del profilo`{.action} e clicca sul pulsante `Apri la cartella corrispondente`{.action}.
>>
>> ![email](images/thunderbird_open_folder.png){.thumbnail .w-640}
>>
>> Verrai diretto nella cartella del profilo. Risali di un livello nella struttura ad albero.
>>
>> ![email](images/thunderbird_profil_folder1.png){.thumbnail .w-640}
>>
>> Copia la cartella del profilo tramite un click con il tasto destro sul profilo e incolla la cartella nella cartella o supporto di tua scelta.
>>
>> ![email](images/thunderbird_profil_folder2.png){.thumbnail .w-640}
>>
> **Importare**
>>
>> Anziché importare, si tratterà di un carico di profilo.
>> Se sull'istanza Thunderbird di destinazione sono già stati configurati account e-mail, questi saranno presenti sul profilo A.
>> Quando Thunderbird caricerà un nuovo profilo (profilo B), potrà caricare **solo** gli elementi di questo profilo B.
>> Per questo ti consigliamo di caricare il nuovo profilo (profilo B) e configurare gli account e-mail provenienti dal profilo A.
>>
>> Per prima cosa è necessario avviare Thunderbird tramite il gestore dei profili.
>>
>> - Su Windows, clicca sul menu `Start`{.action} e poi sul programma `Esegui`{.action}. Inserisci `thunderbird.exe -ProfileManager` e clicca su `OK`{.action}.
>>
>> ![email](images/thunderbird-run-profil.png){.thumbnail .w-640}
>>
>> - Su Mac OS, avvia l'applicazione Terminal e inserisci la tua applicazione Thunderbird nella finestra del Terminal, aggiungendo alla linea `/Contents/MacOS/thunderbird-bin -ProfileManager`. Clicca sul tasto `Invio`{.action} (⏎) per confermare.
>>
>> ![email](images/thunderbird-terminal-profil.png){.thumbnail .w-640}
>>
>> Visualizzi una tabella con tutti i profili disponibili. Clicca su `Crea un profilo`{.action} e poi su `Seguente`{.action} quando visualizzi il messaggio informativo.
>>
>> ![email](images/thunderbird-profil-create01.png){.thumbnail .w-640}
>>
>> Allo step successivo, assegna un nome al tuo profilo e identifica la cartella in cui verrà creato il profilo, sotto la frase "I tuoi parametri utente, preferenze e tutti i tuoi dati personali saranno registrati in":
>>
>> ![email](images/thunderbird-profil-create02.png){.thumbnail .w-640}
>>
>> > [!primary]
>> > Ti consigliamo di copiare il backup del tuo profilo Thunderbird nella cartella dei profili di Thunderbird.
>>
>> Clicca su `Seleziona una cartella...`{.action} per selezionare la cartella contenente il tuo backup. Clicca su `Fine`{.action} per creare il profilo con il tuo backup.
>>
>> Puoi trovare la finestra di scelta del tuo profilo con il tuo nuovo profilo selezionato. Clicca su `Avvia Thunderbird`{.action}, Thunderbird verrà lanciato con tutti gli elementi presenti nel tuo backup.

### Verifica l'importazione sul nuovo indirizzo email

Verifica che i tuoi elementi siano presenti sul server quando hai effettuato l'operazione giusta seguendo le istruzioni d'importazione.

Accedi alla [Webmail](/links/web/email).

Nella casella di ricezione e nella colonna di sinistra, troverai le cartelle e le email del tuo indirizzo email salvato.

> [!primary]
> Ti ricordiamo che il tempo di caricamento degli elementi presenti sul tuo computer è limitato al server di posta. L'operazione potrebbe richiedere diversi minuti o diverse ore, in base alla connessione a Internet.

## Per saperne di più

[Migrare un account e-mail con OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)

Contatta la nostra [Community di utenti](/links/community).
