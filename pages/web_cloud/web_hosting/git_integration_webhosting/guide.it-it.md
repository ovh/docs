---
title: "Configurare e utilizzare Git con un hosting Web OVHcloud"
excerpt: "Scopri come configurare e utilizzare Git con il tuo hosting Web nello Spazio Cliente OVHcloud"
updated: 2026-05-04
---

## Obiettivo

Nel panorama digitale di oggi, le società sono sempre più dinamiche e innovative. La capacità di gestire e implementare efficacemente il codice del proprio sito Web è fondamentale per mantenere la competitività e la sostenibilità del marchio. Il Git, il sistema di controllo delle versioni più utilizzato al mondo, permette di archiviare il codice del sito Web su piattaforme come GitHub, permettendo una migliore tracciabilità delle modifiche, una più rapida automazione e deploy. I clienti OVHcloud dispongono di un'infrastruttura solida per ospitare il proprio sito Web e allo stesso tempo possono usufruire dei numerosi vantaggi di Git e GitHub per lo sviluppo e l'evoluzione del proprio sito Web.

**Questa guida ti mostra come configurare e utilizzare Git su un hosting Web dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](/links/web/hosting).
- Disporre di un account [GitHub](https://github.com/) ed essere connesso.

> [!primary]
>
> Alla data corrente, solo la piattaforma GitHub è supportata nell'utilizzo con i servizi di hosting Web OVHcloud.

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

> [!primary]
>
> Per l'associazione e la configurazione di Git, è necessario apportare modifiche all'account GitHub. Prima di iniziare la guida, accedi al tuo account GitHub.

### Associa una directory a Git <a name="associateGitRepo"></a>

> [!warning]
>
> Quando si associa una directory a Git, tutti i domini presenti nella directory verranno associati anche a Git. Ad esempio, se la directory corrispondente al sito Web che stai associando è `www`, tutti i domini associati alla directory `www` saranno associati anche a Git.

<!-- CP-STEPS-START:associate-git-repo -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `I miei siti`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel tavolo che appare, clicca sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `Associa Git`{.action}.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Il modulo di associazione Git appare. Devono essere configurati diversi elementi:
>>
>> - Repository GitHub
>> - Ramo del repository GitHub
>> - Chiave SSH (per un repository GitHub privato)
>> - Webhook (opzionale)
>>
>> Continua a leggere questa guida per ottenere le informazioni necessarie per completare i campi richiesti.
<!-- CP-STEPS-END:associate-git-repo -->

<!-- CP-STEPS-START:git-association-form -->
#### Definisci il repository GitHub

Inserisci l'indirizzo del tuo repository GitHub. Se non disponi ancora di un repository GitHub per il tuo progetto, creane uno.

Per creare un nuovo deposito:

- Accedi al tuo account GitHub.
- Clicca sull’immagine del profilo in alto a destra e poi su `Your repositories`{.action}.
- Clicca sul pulsante `New`{.action} a destra.

Definisci un nome per il tuo deposito e inserisci le informazioni richieste.

> [!warning]
>
> Seleziona l’opzione `Add a README file` per fare in modo che GitHub avvii correttamente il tuo repository.

Infine clicca su `Create Repository`{.action}.

Copia l'indirizzo del tuo repository GitHub. La forma deve essere:

- `https://github.com/<username>/<repository_name>.git` per un deposito pubblico.
- `git@github.com:<username>/<repository_name>.git` per un deposito privato.

Tornare al modulo di associazione di Git e incollare l'indirizzo del repository GitHub nel campo `Repository`{.action}. Se il formato dell'indirizzo non è corretto, viene visualizzato il seguente messaggio di errore:

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-branch-name.png){.thumbnail}

Definisci il ramo del tuo repository GitHub. Il ramo predefinito è `main`, ma se vuoi utilizzare un altro ramo, creane uno su GitHub seguendo i passaggi seguenti:

- Accedi al tuo account GitHub.
- Clicca sull’immagine del profilo in alto a destra e poi su `Your repositories`{.action}.
- Clicca sul repository GitHub corrispondente.
- Clicca su `Main`{.action} e poi su `View all branche`{.action}, oppure clicca direttamente sulla scheda `x Branch`{.action}.
- A destra dello schermo visualizzato, clicca su `New branch`{.action}.
- Inserisci il nome del nuovo ramo e conferma cliccando su `Create new branch`{.action}.

Tornando al modulo di associazione Git disponibile nello Spazio Cliente OVHcloud, è possibile inserire il nome del nuovo ramo appena creato.

Se inserisci l’indirizzo di un repository GitHub privato (di tipo `git@github.com:<username>/<repository_name>.git`), sotto il campo `Branch` apparirà un campo `SSH key` (chiave SSH).

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/field-ssh-key.png){.thumbnail}

Per configurare la chiave SSH, consulta lo step "Associare una chiave SSH a GitHub (solo per i repository GitHub privati)" qui sotto.

#### Associare una chiave SSH a GitHub (solo per i repository GitHub privati) <a name="linkSSHKey"></a>

> [!primary]
>
> **Perché la chiave SSH è necessaria solo per un deposito privato?**
>
> Quando il tuo repository GitHub è pubblico, i file possono essere recuperati senza autenticazione, il che significa che Git può clonare e aggiornare il codice senza la necessità di una chiave SSH. Se il tuo repository è privato, GitHub richiede un'autenticazione per accedervi. La chiave SSH permette di stabilire questa connessione protetta e garantire che solo gli utenti autorizzati possano interagire con il repository.

> [!primary]
>
> La generazione di una chiave SSH è uno step cruciale, in quanto stabilisce una connessione sicura e cifrata tra la directory del tuo sito Web e il repository GitHub. Questa chiave garantisce che i trasferimenti di dati e le modifiche del codice avvengano in modo sicuro e autenticato, impedendo gli accessi non autorizzati e garantendo l'integrità del codice.

Copia la chiave SSH cliccando sul pulsante a destra.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/field-ssh-key-copy.png){.thumbnail}

Registra la chiave SSH sul tuo account GitHub:

- Accedi al tuo account GitHub.
- Clicca sull’immagine del profilo in alto a destra e poi su `Settings`{.action}.
- Nella nuova pagina, clicca su `SSH and GPG keys`{.action} nella colonna di sinistra.
- Seleziona `New SSH key`{.action} o `Add SSH key`{.action}.

Viene visualizzato il modulo per l’aggiunta di una nuova chiave SSH:

- **Title**: aggiungi una descrizione per la tua chiave SSH. Ad esempio, questa chiave può essere denominata "OVHcloud".
- **Type of key**: lascia il valore predefinito `authentication key`{.action}
- **Key**: incolla la chiave SSH.

Per confermare le informazioni, clicca su `Add SSH key`{.action}. Se richiesto, conferma l'accesso al tuo account in GitHub.

#### Configura il deploy automatico

Nella parte inferiore del modulo di associazione di Git, viene visualizzata la sezione `Configurare il deploy automatico`{.action}, accompagnata dall’URL del webhook. Configurare un webhook permette al repository GitHub di notificare automaticamente al proprio hosting Web OVHcloud gli eventi che si verificano sul repository GitHub (nuova distribuzione, modifica del codice, ecc...). Questa funzionalità è particolarmente utile se lavorate in gruppo sullo stesso progetto e desiderate rimanere aggiornati su tutte le modifiche apportate al repository GitHub. Per maggiori informazioni, scopri come [configurare un webhook su GitHub](#configureWebhook).

#### Confermare l'associazione di Git

Prima di convalidare il modulo di associazione di Git, assicurarsi che:

- La chiave SSH è stata registrata correttamente nel tuo account GitHub.
- L'indirizzo del tuo repository GitHub è corretto. Il formato deve essere `https://github.com/<username>/<repository_name>.git`.
- Il nome del ramo del repository GitHub è corretto.
- La directory di installazione è vuota.

Per confermare le informazioni del modulo di associazione di Git, clicca su `Applicare la configurazione`{.action}.
<!-- CP-STEPS-END:git-association-form -->

### Attivazione dell'associazione di Git

<!-- CP-STEPS-START:git-activation-status -->
#### Associazione di Git riuscita

Dopo aver validato il modulo di associazione Git, sei reindirizzato alla pagina dell'etichetta `I miei siti`{.action}.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/git-activation-ongoing.png){.thumbnail}

Un'intestazione verde indica che Git è in corso di attivazione. Segui l’attivazione di Git cliccando sul link `Operazioni in corso`{.action}.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ongoing-tasks/ongoing-task-git-activation.png){.thumbnail}

Lo stato `In corso`{.action} indica che l’associazione di Git è in corso. Il processo potrebbe richiedere alcuni minuti. Al termine dell’operazione, viene visualizzato lo stato `Attivato`{.action}.

Puoi anche seguire l'evoluzione dell'attivazione di Git dall'etichetta `I miei siti`{.action}. Nella colonna `Git`{.action} del tavolo, la dicitura `In corso`{.action} presente sulla riga del sito web desiderato ti indica che Git è in corso di attivazione.

Quando l'associazione di Git è completata, lo stato `Attivato`{.action} appare nella colonna `Git`{.action} per il sito web desiderato.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Errori dell'associazione di Git

Nel tavolo dell'etichetta `I miei siti`{.action}, identifica le righe corrispondenti al directory del sito web che desideri associare a Git. Nella colonna `Git`, se la dicitura `Errore` appare, ciò significa che almeno uno dei seguenti errori è avvenuto:

- La chiave SSH non è stata registrata nel tuo account GitHub.
- La directory di installazione non è vuota.
- L'indirizzo del repository GitHub non esiste o è errato.
- Il ramo del repository GitHub non esiste o il nome è errato.

Per conoscere la causa esatta dell'errore, consulta le informazioni dell'ultimo deployment. Nel tavolo, clicca sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `Informazioni dell'ultimo deploy`{.action}.

![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Una volta identificato(i) l'(i) errore(i), associa Git nuovamente. Ripeti l'operazione cliccando sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `Associa Git`{.action}.
<!-- CP-STEPS-END:git-activation-status -->

### Avviare il repository GitHub sull’hosting Web OVHcloud

<!-- CP-STEPS-START:deploy-github-repo -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `I miei siti`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel tavolo che appare, clicca sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `Distribuisci Git`{.action}.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Un messaggio di conferma appare, insieme a una casella da spuntare che ti indica che in caso di conflitto durante il deployment, puoi forzare le modifiche remote (del repository GitHub) sul tuo repository locale. Spunta o non spuntare la casella a seconda della tua scelta, quindi clicca su `Confermare`{.action} per validare il deployment.
>>
>> > [!warning]
>> >
>> > Per evitare di perdere le tue modifiche locali, pensa a salvarle prima di sovrascriverle con le modifiche della branch remota.
>> 
>> La nuova versione del tuo sito web è stata correttamente deployata sul tuo hosting web OVHcloud. Se altre persone lavorano sullo stesso progetto e apportano modifiche al repository GitHub, puoi [configurare un webhook su GitHub](#configureWebhook) in modo che le loro modifiche siano automaticamente deployate sul tuo hosting web. Questo ti evita di deployare Git manualmente, e il tuo sito web resterà sempre aggiornato.
<!-- CP-STEPS-END:deploy-github-repo -->

### Modificare un dominio

<!-- CP-STEPS-START:modify-domain-name -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `I miei siti`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel tavolo che appare, clicca sul pulsante `>`{.action} a sinistra del nome del sito web desiderato per visualizzare i nomi di dominio e sottodomini associati.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Clicca quindi sul pulsante `⁝`{.action} a destra del nome del dominio o sottodominio desiderato, quindi su `Modifica un dominio`{.action}.
>>
>> ![Opzioni domini associati](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Due scenari sono possibili:
>>
>> **1 - Uno o più altri nomi di dominio sono associati al sito web**
>>
>> La seguente finestra appare:
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}
>>
>> Modifica le informazioni come necessario e clicca su `Successivo`{.action}.
>>
>> Una seconda finestra di conferma appare con il riepilogo delle tue modifiche:
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}
>>
>> Clicca su `Confermare`{.action} per validare le modifiche del tuo nome di dominio.
>>
>> **2 - Un solo nome di dominio è associato al sito web**
>>
>> La seguente finestra appare:
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}
>>
>> Come il messaggio indica, [elimina la tua associazione Git](#deleteGitAssociation) in un primo tempo prima di modificare il tuo nome di dominio.
<!-- CP-STEPS-END:modify-domain-name -->

### Scollega un dominio

<!-- CP-STEPS-START:detach-domain-name -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `I miei siti`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel tavolo che appare, clicca sul pulsante `>`{.action} a sinistra del nome del sito web desiderato per visualizzare i nomi di dominio e sottodomini associati.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Clicca quindi sul pulsante `⁝`{.action} a destra del nome del dominio o sottodominio desiderato, quindi su `Stacca un dominio`{.action}.
>>
>> ![Opzioni domini associati](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Due scenari sono possibili:
>>
>> **1 - Uno o più altri nomi di dominio sono associati al sito web**
>>
>> La seguente finestra appare.
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Clicca su `Confermare`{.action} per validare lo stacco del tuo nome di dominio.
>>
>> **2 - Un solo nome di dominio è associato al sito web**
>>
>> La seguente finestra appare:
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>>
>> Come il messaggio indica, [elimina la tua associazione Git](#deleteGitAssociation) in un primo tempo prima di staccare il tuo nome di dominio.
<!-- CP-STEPS-END:detach-domain-name -->

### Configura Git

<!-- CP-STEPS-START:configure-git -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `I miei siti`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel tavolo che appare, clicca sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `Configura Git`{.action}
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Le seguenti informazioni appaiono:
>>
>> - Chiave SSH: Se non l'hai già fatto, [registra la tua chiave SSH nel tuo account GitHub](#linkSSHKey).
>> - Repository: Indirizzo del tuo repository Git. Questo campo è grigio perché non puoi modificare l'indirizzo del repository Git. Per cambiare l'URL del repository Git, devi [eliminare l'associazione Git del tuo directory](#deleteGitAssociation) e poi nuovamente [associare il directory a Git](#associateGitRepo).
>> - Branch: Nome del ramo del repository GitHub. Puoi modificare questo campo se necessario.
>> - URL del webhook: Se desideri ottimizzare i tuoi deployment su Git, [configura il webhook su GitHub](#configureWebhook).
<!-- CP-STEPS-END:configure-git -->

### Informazioni dell'ultimo deploy

Dopo aver implementato il repository GitHub sul tuo hosting Web, puoi consultare le informazioni relative all’ultimo implementazione, come errori, test o qualsiasi informazione utile.

<!-- CP-STEPS-START:latest-deployment-info -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `I miei siti`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel tavolo che appare, clicca sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `Informazioni dell'ultimo deployment`{.action}.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
>> Trova su questo schermo tutte le informazioni relative all'ultimo deployment.
<!-- CP-STEPS-END:latest-deployment-info -->

### Elimina l'associazione di Git <a name="deleteGitAssociation"></a>

<!-- CP-STEPS-START:delete-git-association -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `I miei siti`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel tavolo che appare, clicca sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `Elimina Git`{.action}.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> La seguente finestra appare:
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}
>>
>> Il messaggio ti informa che l'eliminazione si applicherà sull'intero dei nomi di dominio associati al tuo sito web. Spunta la casella `Vuoi eliminare il contenuto della directory <la_tua_directory>?`{.action} se desideri anche eliminare il contenuto (directory e file) della directory.
>>
>> 1\. Se spunti la casella, la seguente finestra appare:
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}
>>
>> Clicca su `Confermare`{.action} per validare la rimozione dell'associazione Git della tua directory e del suo contenuto.
>>
>> 2\. Se non spunti la casella, la finestra seguente appare:
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}
>>
>> Clicca su `Confermare`{.action} per validare la rimozione dell'associazione Git della tua directory.
<!-- CP-STEPS-END:delete-git-association -->

### Configura un webhook su GitHub

#### Recupera l'URL del webhook

> [!primary]
>
> Se siete già nel modulo di associazione di Git, copiate l'URL del webhook e andate al passaggio "[Configura il webhook](#configureWebhook)".

<!-- CP-STEPS-START:configure-webhook -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `I miei siti`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel tavolo che appare, clicca sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `Configura Git`{.action}.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> In fondo al modulo che appare, copia l'indirizzo contenuto nel campo `URL del webhook`{.action}. Devi ora registrare l'URL e configurare il webhook sul tuo account GitHub.
<!-- CP-STEPS-END:configure-webhook -->

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
