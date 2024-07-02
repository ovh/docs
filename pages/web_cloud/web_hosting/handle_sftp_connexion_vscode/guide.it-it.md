---
title: "Gestire un hosting Web con Visual Studio Code via SFTP"
excerpt: "Gestire un sito Internet su un hosting Web con Visual Studio Code grazie ad un'estensione SFTP"
updated: 2023-11-06
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Gli hosting Web OVHcloud mettono a disposizione uno spazio di storage per la gestione del sito Internet. L’accesso a questo spazio di storage è possibile tramite il protocollo SFTP. È possibile connettersi a un terminale, ma è anche possibile utilizzare l'ambiente di sviluppo integrato (IDE) Visual Studio Code per gestire le cartelle e i file del sito Web.

> [!primary]
>
> Per gestire il sito Web in remoto senza utilizzare Visual Studio Code, installa il client FTP FileZilla. consulta la nostra guida "[Utilizzare FileZilla con un hosting OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)". Per accedere al sito Web in SSH, consulta la nostra documentazione "[Utilizzare l’accesso SSH per il proprio hosting Web](/pages/web_cloud/web_hosting/ssh_on_webhosting)".
>

**Questa guida ti mostra come gestire il tuo sito Internet tramite Visual Studio Code.**
  
## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](/links/web/hosting)
- Installare [Microsoft Visual Studio Code](https://visualstudio.microsoft.com/#vscode-section) sul computer

## Procedura
 
> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner) o [l’editor dell’IDE Visual Studio Code](https://code.visualstudio.com/){.external}. OVH non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

### Installare l'estensione SFTP per Visual Studio Code

> [!warning]
>
> In questo tutorial, abbiamo scelto l'estensione "SFTP/FTP sync" di *Natizyskunk*. Sei libero di sceglierne un'altra. Tuttavia, si noti che un'estensione di Visual Studio Code è spesso un software creato da uno sviluppatore indipendente che può interrompere lo sviluppo in qualsiasi momento.
>

Dopo aver avviato Visual Studio Code, vai al menu orizzontale nella parte superiore dell’interfaccia, clicca su `View`{.action} e poi su `Extensions`{.action}.

![hosting](/pages/assets/screens/other/web-tools/vscode/view_extensions.png){.thumbnail}

Per eseguire la stessa azione con il tasto di scelta rapida, selezionare:

- `Ctrl + Shift + X` se siete su Windows, 
- `Maj + Command + X` se siete su macOS.

In alto a sinistra dell’interfaccia, inserisci il nome dell’estensione "SFTP/FTP sync" di *Natizyskunk* e clicca su `Install`{.action}.

![hosting](/pages/assets/screens/other/web-tools/vscode/extensions.png){.thumbnail}

È inoltre possibile installare [l'estensione "SFTP/FTP sync"](https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp#sftp-sync-extension-for-vs-code) dal marketplace di Visual Studio.
  
### Inizializza il progetto in locale

Per sincronizzare i file del sito Web presenti sull'hosting Web da Visual Studio Code, inserisci il percorso del progetto in locale. A tale scopo, creare una cartella nella posizione desiderata.

Tornando a Visual Studio Code dal menu orizzontale nella parte superiore dell’interfaccia, clicca su `View`{.action} e poi su `Command Palette`{.action} per visualizzare l’editor dei comandi.

Per eseguire la stessa azione con il tasto di scelta rapida, selezionare:

- `Ctrl + Shift + P` se siete su Windows, 
- `Maj + Command + P` se siete su macOS.

Digita il comando seguente: `SFTP: Config`.

![hosting](/pages/assets/screens/other/web-tools/vscode/SFTP_config.png){.thumbnail}

Con questo comando, in Visual Studio Code verrà creato il file di configurazione sftp.json nella cartella principale della cartella locale creata in precedenza. Tuttavia, poiché Visual Studio Code non conosce ancora la posizione locale del progetto, dovrebbe essere visualizzato il seguente messaggio:

![hosting](/pages/assets/screens/other/web-tools/vscode/SFTP_folder.png){.thumbnail}

Clicca su `Open Folder`{.action}, vai alla posizione della cartella locale che preferisci e clicca su `Select Folder`{.action} per confermare.

![hosting](/pages/assets/screens/other/web-tools/vscode/select_folder.png){.thumbnail}

In Visual Studio Code, immettere nuovamente il comando `SFTP: Config`. In Visual Studio Code viene visualizzato un file di configurazione denominato sftp.json.

![hosting](/pages/assets/screens/other/web-tools/vscode/sftp_json_default.png){.thumbnail}

Il file è presente nella cartella vscode, che si trova nella cartella principale del progetto locale.

### Configura il file sftp.json

Prima di lavorare sul progetto, scaricalo nella cartella locale creata in precedenza. Per prima cosa, assicurati che il file "sftp.json" sia configurato correttamente. Le informazioni utili sono disponibili nello [Spazio Cliente OVHcloud](/links/manager). Nella sezione `Web Cloud`{.action}, clicca su `Hosting`{.action}. Seleziona l’hosting interessato e clicca sulla scheda `FTP - SSH`{.action}.

Nel file sftp.json, immettere i valori per le voci seguenti:

#### name 

Individuarlo in entrambe le posizioni evidenziate in arancione.

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/hosting_name.png){.thumbnail}

> [!primary]
>
> Poiché il valore `name`(nome) è personalizzabile, è possibile assegnare quello desiderato. Tuttavia, se si configura più di un file sftp.json, è preferibile utilizzare come riferimento i valori visualizzati sopra per motivi organizzativi.
>

#### host

Sempre nella scheda `FTP-SSH`{.action}, il nome host (`host`) è visibile sotto la dicitura `Server FTP e SFTP`{.action}.

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/hostname.png){.thumbnail}

#### username

Individua il nome utente (`username`) nella colonna `Login`{.action} della tabella.

#### remotePath

Ritrova il percorso remoto (`remotePath`) sotto la voce `Percorso cartella Home`{.action}. Tuttavia, se sono configurati più utenti, il percorso specificato potrebbe essere diverso. In questo caso, sostituisci il nome utente indicato dopo `home/` con quello che preferisci nella lista `Login`{.action} del tuo hosting Web.

**Esempio**: se il tuo nome utente è "john-smith", otterrai `home/john-smith`

Infine, ricordati di aggiungere questa riga nel file "sftp.json": `"openSsh": true`

> [!primary]
>
> Per evitare di dover immettere la password dopo ogni comando in Visual Studio Code, salvarla nel file "sftp.json" aggiungendo la riga: `"password": "<password>"`
>

Di seguito è riportato un esempio di file "sftp.json":

```json

{
    "name": "<name>",
    "host": "<host>",
    "protocol": "sftp",
    "port": 22,
    "username": "myusername",
    "password": "mypassword",
    "remotePath": "/home/myusername",
    "uploadOnSave": false,
    "useTempFile": false,
    "openSsh": true
}

```

Per maggiori informazioni sulle opzioni del file "sftp.json", consulta la [documentazione del progetto](https://github.com/Natizyskunk/vscode-sftp/wiki/configuratio).

### Scarica il progetto in locale

Una volta configurato il file "sftp.json", scarica il contenuto del progetto per recuperare tutte le cartelle e i file del sito Web. Per effettuare questa operazione, accedi a Visual Studio Code e digita il comando `SFTP: Download Project`.

Visual Studio Code richiede di selezionare la cartella che si desidera scaricare sull'hosting Web. Immettere il valore `name` precedentemente definito nel file sftp.json.

![hosting](/pages/assets/screens/other/web-tools/vscode/download_project.png){.thumbnail}

Se richiesto, digita la password associata all’utente inserito nel file "sftp.json" e clicca su `enter`. Dopo il download, tutte le cartelle e i file del progetto vengono visualizzati in Esplora file nella colonna a sinistra dell'interfaccia Visual Studio Code.

![hosting](/pages/assets/screens/other/web-tools/vscode/explorer.png){.thumbnail}

> [!primary]
>
> Ti ricordiamo che la corretta configurazione del file "sftp.json" è fondamentale. Se riscontri un errore prima di scaricare il tuo progetto, è generalmente causato da un difetto di configurazione del file "sftp.json". Per qualsiasi domanda, consulta la sezione [FAQ dell'estensione](https://github.com/Natizyskunk/vscode-sftp/blob/HEAD/FAQ.md){.external}.
>

### Effettuare modifiche sui file

Una volta che il progetto è stato scaricato sul computer locale, è possibile modificare, aggiungere o eliminare facilmente i file in Visual Studio Code.

Se si desidera che le modifiche locali vengano sincronizzate ogni volta che si salva un file, aggiungere questa riga nel file "sftp.json": `"uploadOnSave": true`

Per disattivare questa funzione, conservatela nel file "sftp.json", sostituite il valore `true` con `false`.

Finora abbiamo menzionato solo i comandi `SFTP: Config` e `SFTP: Download Project`. Per ulteriori comandi, digitare `SFTP:` nell'editor dei comandi per l'autocompletamento.

![hosting](/pages/assets/screens/other/web-tools/vscode/list_commands.png){.thumbnail}

Consulta la lista dei comandi [qui](https://github.com/Natizyskunk/vscode-sftp/wiki/Commands){.external}.

A questo punto, è possibile accedere e modificare il contenuto dell’hosting Web tramite Visual Studio Code.
Questa guida è finalizzata a presentare in modo efficace la gestione di un progetto da Visual Studio Code. È adatto per una prima esperienza. Tuttavia, se modifichi diversi file sincronizzati con il tuo hosting Web, non sarà possibile visualizzare la cronologia delle modifiche e ripetere l’operazione.

## Per saperne di più <a name="go-further"></a>

[Accedere allo spazio di storage FTP del proprio hosting Web](/pages/web_cloud/web_hosting/ftp_connection)

[Utilizzare FileZilla con l’hosting OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilizzare l’accesso SSH del proprio hosting Web](/pages/web_cloud/web_hosting/ssh_on_webhosting). Ti ricordiamo che per utilizzare SSH è necessario disporre di una [soluzione di hosting Web Pro o Performance](/links/web/hosting).

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).