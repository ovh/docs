---
title: "Configurare e utilizzare Git con un hosting Web OVHcloud"
excerpt: "Scopri come configurare e utilizzare Git con il tuo hosting Web nello Spazio Cliente OVHcloud"
updated: 2024-08-22
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Nel panorama digitale di oggi, le società sono sempre più dinamiche e innovative. La capacità di gestire e implementare efficacemente il codice del proprio sito Web è fondamentale per mantenere la competitività e la sostenibilità del marchio. Il Git, il sistema di controllo delle versioni più utilizzato al mondo, permette di archiviare il codice del sito Web su piattaforme come GitHub, permettendo una migliore tracciabilità delle modifiche, una più rapida automazione e deploy. I clienti OVHcloud dispongono di un'infrastruttura solida per ospitare il proprio sito Web e allo stesso tempo possono usufruire dei numerosi vantaggi di Git e GitHub per lo sviluppo e l'evoluzione del proprio sito Web.

**Questa guida ti mostra come configurare e utilizzare Git su un hosting Web dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](/links/web/hosting).
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager), sezione Web Cloud.
- Disporre di un account [GitHub](https://github.com/){.external} ed essere connesso.

## Procedura

> [!primary]
>
> Per l'associazione e la configurazione di Git, è necessario apportare modifiche all'account GitHub. Prima di iniziare la guida, accedi al tuo account GitHub.
>

### Associa una directory a Git <a name="associateGitRepo"></a>

> [!warning]
>
> Quando si associa una directory a Git, tutti i domini presenti nella directory verranno associati anche a Git. Ad esempio, se la directory corrispondente al sito Web che stai associando è `www`, tutti i domini associati alla directory `www` saranno associati anche a Git.
>

Accedi allo [Spazio Cliente OVHcloud](/links/manager) ed effettua le seguenti operazioni:

- Accedi alla scheda `Web Cloud`{.action}.
- Seleziona il tuo hosting nella sezione `Hosting`{.action} a sinistra.
- Clicca sulla scheda `Multisito`{.action}.
- Nella tabella che appare, identifica la riga corrispondente alla directory che desideri associare a Git.
- Clicca sul pulsante `...`{.action} e seleziona `Associare Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/link-git.png){.thumbnail}

Viene visualizzato il modulo di associazione Git. È necessario configurare più elementi:

- Chiave SSH
- Deposito GitHub
- Diramazione del repository GitHub
- Webhook (opzionale)

#### Associare una chiave SSH a GitHub <a name="linkSSHKey"></a>

> [!primary]
>
> La generazione di una chiave SSH è uno step cruciale, in quanto stabilisce una connessione sicura e cifrata tra la directory del tuo sito Web e il repository GitHub. Questa chiave garantisce che i trasferimenti di dati e le modifiche del codice avvengano in modo sicuro e autenticato, impedendo gli accessi non autorizzati e garantendo l'integrità del codice.
>

Copia e salva la chiave SSH sul tuo account GitHub. In questo modo è possibile stabilire una connessione protetta senza dover immettere una password ogni volta che si esegue un'operazione Git.

- Accedi al tuo account GitHub.
- Clicca sull’immagine del profilo in alto a destra e poi su `Settings`{.action}.
- Nella nuova pagina, clicca su `SSH and GPG keys`{.action} nella colonna di sinistra.
- Seleziona `New SSH key`{.action} o `Add SSH key`{.action}.

Viene visualizzato il modulo per l’aggiunta di una nuova chiave SSH:

- **Title**: aggiungi una descrizione per la tua chiave SSH. Ad esempio, questa chiave può essere denominata "OVHcloud".
- **Type of key**: lascia il valore predefinito `authentication key`{.action}
- **Key**: incolla la chiave SSH.

Per confermare le informazioni, clicca su `Add SSH key`{.action}. Se richiesto, conferma l'accesso al tuo account in GitHub.

#### Definisci il repository GitHub

Torna al modulo di associazione Git disponibile nello Spazio Cliente OVHcloud. Inserisci l'indirizzo del tuo repository GitHub. Se non disponi ancora di un repository GitHub per il tuo progetto, creane uno.

Per creare un nuovo deposito:

- Accedi al tuo account GitHub.
- Clicca sull’immagine del profilo in alto a destra e poi su `Your repositories`{.action}.
- Clicca sul pulsante `New`{.action} a destra.

Definisci un nome per il tuo deposito e inserisci le informazioni richieste.

> [!warning]
>
> Seleziona l’opzione `Add a README file` per fare in modo che GitHub avvii correttamente il tuo repository.
>

Infine clicca su `Create Repository`{.action}.

Copia l'indirizzo del tuo repository GitHub. Il formato deve essere `https://github.com/<username>/<repository_name.git>`. Tornare al modulo di associazione di Git e incollare l'indirizzo del repository GitHub nel campo `Repository`{.action}. Se il formato dell'indirizzo non è corretto, viene visualizzato il seguente messaggio di errore:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-branch-name.png){.thumbnail}

Definisci il ramo del tuo repository GitHub. Il ramo predefinito è `main`, ma se vuoi utilizzare un altro ramo, creane uno su GitHub seguendo i passaggi seguenti:

- Accedi al tuo account GitHub.
- Clicca sull’immagine del profilo in alto a destra e poi su `Your repositories`{.action}.
- Clicca sul repository GitHub corrispondente.
- Clicca su `Main`{.action} e poi su `View all branche`{.action}, oppure clicca direttamente sulla scheda `x Branch`{.action}.
- A destra dello schermo visualizzato, clicca su `New branch`{.action}.
- Inserisci il nome del nuovo ramo e conferma cliccando su `Create new branch`{.action}.

Tornando al modulo di associazione Git disponibile nello Spazio Cliente OVHcloud, è possibile inserire il nome del nuovo ramo appena creato.

#### Configura il deploy automatico

Nella parte inferiore del modulo di associazione di Git, viene visualizzata la sezione `Configurare il deploy automatico`{.action}, accompagnata dall’URL del webhook. Configurare un webhook permette al repository GitHub di notificare automaticamente al proprio hosting Web OVHcloud gli eventi che si verificano sul repository GitHub (nuova distribuzione, modifica del codice, ecc...). Questa funzionalità è particolarmente utile se lavorate in gruppo sullo stesso progetto e desiderate rimanere aggiornati su tutte le modifiche apportate al repository GitHub. Per maggiori informazioni, scopri come [configurare un webhook su GitHub](#configureWebhook).

#### Confermare l'associazione di Git

Prima di convalidare il modulo di associazione di Git, assicurarsi che:

- La chiave SSH è stata registrata correttamente nel tuo account GitHub.
- L'indirizzo del tuo repository GitHub è corretto. Il formato deve essere `https://github.com/<username>/<repository_name.git>`.
- Il nome del ramo del repository GitHub è corretto.
- La directory di installazione è vuota.

Per confermare le informazioni del modulo di associazione di Git, clicca su `Applicare la configurazione`{.action}.

### Attivazione dell'associazione di Git

#### Associazione di Git riuscita

Dopo aver convalidato il modulo di associazione di Git, verrai reindirizzato alla scheda Multisito.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/banner-git-activation-ongoing.png){.thumbnail}

Un'intestazione verde indica che Git è in corso di attivazione. Segui l’attivazione di Git cliccando sul link `Operazioni in corso`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ongoing-task-git-activation.png){.thumbnail}

Lo stato `In corso`{.action} indica che l’associazione di Git è in corso. Il processo potrebbe richiedere alcuni minuti. Al termine dell’operazione, viene visualizzato lo stato `Attivato`{.action}.

Per monitorare lo stato dell’attivazione di Git, accedi alla scheda `Multisito`{.action}. Nella tabella, identificare le righe corrispondenti alla directory che si desidera associare a Git. Per ciascuna delle linee interessate, nella colonna `Git`{.action}, la voce `In corso`{.action} indica che Git è in corso di attivazione.

Quando viene eseguita l’associazione di Git, lo stato `Attivato`{.action} appare nella colonna `Git`{.action} per le linee interessate.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Errori dell'associazione di Git

Nella tabella della scheda `Multisito`{.action}, identifica le righe corrispondenti alla directory che vuoi associare a Git. Nella colonna `Git`, se compare la dicitura `Errore`, significa che si è verificato almeno uno dei seguenti errori:

- La chiave SSH non è stata registrata nel tuo account GitHub.
- La directory di installazione non è vuota.
- L'indirizzo del repository GitHub non esiste o è errato.
- Il ramo del repository GitHub non esiste o il nome è errato.

Per la causa esatta dell'errore, vedere le informazioni relative all'ultima distribuzione. Nella tabella, identifica la riga corrispondente al dominio di cui vuoi consultare i log dell’ultima distribuzione. A destra della linea, clicca sul pulsante `...`{.action} e poi su `Informazioni dell'ultimo deploy`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/latest-deployment-information.png){.thumbnail}

Una volta individuato il/i errore/i, associa di nuovo Git. Ripeti l’operazione cliccando sul pulsante `...`{.action} della riga corrispondente e poi su `Associare Git`{.action}.

### Avviare il repository GitHub sull’hosting Web OVHcloud

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Hosting`{.action} nella sezione `Web Cloud`{.action} e seleziona il nome dell’hosting interessato. Seleziona la scheda `Multisito`{.action}. Nella tabella che appare, identifica la riga corrispondente al dominio che vuoi sviluppare con Git. Assicurati che lo stato della colonna Git sia `Attivato`{.action}. Clicca sul pulsante `...`{.action} e poi su `Eseguire il deploy Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/deploy-git-button.png){.thumbnail}

Verrà visualizzato un messaggio di conferma e una casella di controllo che indica che, in caso di conflitto durante la distribuzione, è possibile forzare le modifiche remote (del repository GitHub) sul repository locale. Seleziona la casella in base alla tua scelta e clicca su `Confermare`{.action} per confermare l’installazione.

> [!warning]
>
> Per evitare di perdere le modifiche locali, salvare le modifiche prima di sovrascriverle con le modifiche apportate al ramo remoto.
>

La nuova versione del sito Web è stata implementata correttamente sugli hosting OVHcloud. Se altre persone lavorano sullo stesso progetto e apportano modifiche al repository GitHub, allora puoi [configurare un webhook su GitHub](#configureWebhook) perché le loro modifiche vengano distribuite automaticamente sul tuo hosting Web. Questo ti evita di installare Git manualmente e di mantenere sempre aggiornato il tuo hosting Web.

### Modificare un dominio

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Hosting`{.action} nella sezione `Web Cloud`{.action} e seleziona il nome dell’hosting interessato. Seleziona la scheda `Multisito`{.action}. Nella nuova finestra, identifica la riga corrispondente al dominio che vuoi modificare. Clicca sul pulsante `...`{.action} e poi su `Modifica il dominio`{.action}. Sono possibili due scenari:

#### Il dominio non è l'unico associato alla stessa directory

Viene visualizzata la seguente finestra:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}

Modifica le informazioni e clicca su `Continua`{.action}.

Verrà visualizzata una seconda finestra di conferma con il riepilogo delle modifiche.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Clicca su `Confermare`{.action} per confermare le modifiche del dominio.

#### Il dominio è l'unico associato alla directory

Viene visualizzata la seguente finestra:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}

Come indicato nel messaggio, [eliminare l'associazione Git](#deleteGitAssociation) per prima cosa prima di modificare il dominio.

### Scollega un dominio

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Hosting`{.action} nella sezione `Web Cloud`{.action} e seleziona il nome dell’hosting interessato. Seleziona la scheda `Multisito`{.action}. Nella tabella che appare, identifica la riga corrispondente al dominio che vuoi scollegare dal tuo hosting Web OVHcloud. Clicca sul pulsante `...`{.action} e poi su `Scollega il dominio`{.action}. Sono possibili due scenari:

#### Il dominio non è l'unico associato alla stessa directory

Viene visualizzata la finestra successiva.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}

Clicca su `Confermare`{.action} per confermare lo scollegamento del dominio.

#### Il dominio è l'unico associato alla directory

Viene visualizzata la seguente finestra:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}

Come indicato nel messaggio, [eliminare l'associazione Git](#deleteGitAssociation) in un primo momento, prima di scollegare il dominio.

### Configura Git

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Hosting`{.action} nella sezione `Web Cloud`{.action} e seleziona il nome dell’hosting interessato. Seleziona la scheda `Multisito`{.action}. Nella tabella che appare, identifica la riga corrispondente alla directory che vuoi configurare con Git. Clicca sul pulsante `...`{.action} e poi su `Configurare Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

Vengono visualizzate le seguenti informazioni:

- Chiave SSH: se non l'hai già fatto, [registra la tua chiave SSH nel tuo account GitHub](#linkSSHKey).
- Deposito: indirizzo del vostro deposito Git. Questo campo è disattivato perché non è possibile modificare l'indirizzo del repository Git. Per modificare l'URL del repository Git, è necessario [rimuovere l'associazione Git dalla directory](#deleteGitAssociation) e di nuovo [associare la directory a Git](#associateGitRepo).
- Diramazione: nome della diramazione del deposito GitHub. È possibile modificare questo campo.
- URL del webhook : per ottimizzare i deploy su Git, [configura il webhook su GitHub](#configureWebhook).

### Informazioni dell'ultimo deploy

Dopo aver implementato il repository GitHub sul tuo hosting Web, puoi consultare le informazioni relative all’ultimo implementazione, come errori, test o qualsiasi informazione utile.

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Hosting`{.action} nella sezione `Web Cloud`{.action} e seleziona il nome dell’hosting interessato. Seleziona la scheda `Multisito`{.action}. Nella tabella che appare, identifica la riga corrispondente al dominio di cui vuoi consultare i log dell’ultima distribuzione. A destra della linea, clicca sul pulsante `...`{.action} e poi su `Informazioni dell'ultimo deploy`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/latest-deployment-information.png){.thumbnail}

In questa schermata sono disponibili tutte le informazioni relative all’ultima distribuzione.

### Elimina l'associazione di Git <a name="deleteGitAssociation"></a>

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Hosting`{.action} nella sezione `Web Cloud`{.action} e seleziona il nome dell’hosting interessato. Seleziona la scheda `Multisito`{.action}. Nella tabella che appare, identifica la riga corrispondente alla directory dalla quale vuoi eliminare l’associazione con Git. Clicca sul pulsante `...`{.action} e poi su `Eliminare Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-button.png){.thumbnail}

Viene visualizzata la seguente finestra:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}

Il messaggio ti informa che l'eliminazione verrà applicata a tutti i domini associati alla tua directory. Seleziona la casella `Vuoi eliminare il contenuto della directory <your_directory>?`{.action} se vuoi anche eliminare il contenuto (cartelle e file) dalla directory.

1\.	Se si seleziona la casella di controllo, viene visualizzata la seguente finestra:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}

Clicca su `Confermare`{.action} per confermare l’eliminazione dell’associazione Git dalla tua directory e il suo contenuto.

2\.	Se non si seleziona la casella di controllo, viene visualizzata la seguente finestra:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}

Clicca su `Confermare`{.action} per confermare l’eliminazione dell’associazione Git dalla directory.

### Configura un webhook su GitHub

#### Recupera l'URL del webhook

> [!primary]
>
> Se siete già nel modulo di associazione di Git, copiate l'URL del webhook e andate al passaggio "[Configura il webhook](#configureWebhook)".
>

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Hosting`{.action} nella sezione `Web Cloud`{.action} e seleziona il nome dell’hosting interessato. Seleziona la scheda `Multisito`{.action}. Nella tabella che appare, identifica la riga corrispondente alla directory sulla quale vuoi configurare un webhook. Clicca sul pulsante `...`{.action} e poi su `Configurare Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

In fondo al form che viene visualizzato, identifica l’indirizzo del campo `URL del webhook`{.action} e copialo. A questo punto è necessario salvare l’URL e configurare il webhook sul tuo account GitHub.

#### Configura il webhook <a name="configureWebhook"></a>

Accedi al tuo account GitHub e accedi al repository su cui vuoi configurare il webhook. Clicca sulla scheda `Settings`{.action} e, nel menu laterale delle impostazioni, clicca su `Webhooks`{.action}. Clicca sul pulsante `Add webhook`{.action} per accedere al modulo:

- **Payload URL**: immettere l'URL fornito nel modulo di associazione di Git (`URL del webhook`{.action}).
- **Content type**: scegli `application/json`{.action} come tipo di contenuto per i dati inviati.
- **Secret**: il segreto è facoltativo. GitHub lo utilizzerà per firmare i messaggi inviati dal webhook, migliorando così la sicurezza.
- **SSL verification**: se il tuo sito Web supporta l’HTTPS, lascia questa opzione attiva per una maggiore sicurezza.
- **Which events would you like to trigger this webhook?**: seleziona gli eventi che attiveranno l'invio del webhook. Per un deploy automatico, `Just the push event`{.action} (Solo l’evento push) è spesso sufficiente, ma è possibile scegliere `Send me everything`{.action} per ricevere notifiche per tutti gli eventi.
- **Active**: assicurati che la casella sia selezionata per attivare il webhook.

Clicca su `Add webhook`{.action} per registrare e attivare il nuovo webhook.

#### Testare il tuo webhook

Dopo aver creato il tuo webhook in GitHub, vai nella lista dei tuoi webhook e seleziona quello che hai creato o clicca su `Edit`{.action}.

Clicca sulla scheda `Recent Deliveries`{.action}. Per inviare un evento di prova specifico, GitHub invia in genere un evento `ping` durante la creazione del webhook, ed è possibile utilizzare il pulsante `Redeliver`{.action} accanto a questo evento per testarlo.

Se il test ha funzionato correttamente, la scheda `Response`{.action} restituisce un codice 200. Se viene restituito un codice di errore (generalmente 500 o 400), significa che il tuo webhook è stato configurato male. Tornate al modulo di aggiunta di un webhook e verificate le informazioni, in particolare l'URL del webhook fornito da OVHcloud.

#### Utilizza il webhook

Una volta configurato il tuo webhook, il codice del tuo sito Web verrà aggiornato automaticamente ogni volta che si verificano modifiche sul repository GitHub. Ad esempio, se un collega apporta modifiche al repository GitHub, il codice del sito Web viene aggiornato localmente (sull’hosting OVHcloud).

### Conclusione

Hai appena associato il codice del tuo sito Web a Git, tramite il tuo repository GitHub. A questo punto puoi distribuire le modifiche apportate sul repository GitHub verso il tuo hosting Web o distribuirle in modo automatico grazie al webhook, consultare i log dei deploy ed effettuare diverse azioni, tutto questo dal tuo Spazio Cliente, in pochi click.

## Per saperne di più

[Mettere online un sito Internet su un hosting Web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).