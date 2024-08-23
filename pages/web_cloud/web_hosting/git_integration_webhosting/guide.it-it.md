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

Copia l'indirizzo del tuo repository GitHub. Il formato deve essere `https://github.com/<username>/<repository_name.git>`{.action}. Tornare al modulo di associazione di Git e incollare l'indirizzo del repository GitHub nel campo `Repository`{.action}. Se il formato dell'indirizzo non è corretto, viene visualizzato il seguente messaggio di errore:

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
- L'indirizzo del tuo repository GitHub è corretto. Il formato deve essere `https://github.com/<username>/<repository_name.git>`{.action}.
- Il nome del ramo del repository GitHub è corretto.
- La directory di installazione è vuota.

Per confermare le informazioni del modulo di associazione di Git, clicca su `Applicare la configurazione`{.action}.

### Attivazione dell'associazione di Git

#### Associazione di Git riuscita

Dopo aver convalidato il modulo di associazione di Git, verrai reindirizzato alla scheda Multisito.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/banner-git-activation-ongoing.png){.thumbnail}

A green banner will show you that Git is being enabled. Follow the activation of Git by clicking on the `Current tasks`{.action} link.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ongoing-task-git-activation.png){.thumbnail}

The status `Running`{.action} indicates that the Git association is in progress. The process may take several minutes. When the task is complete, the status `Enabled`{.action} is displayed.

You can also track the progress of Git activation from the `Multisite`{.action} tab. In the table, identify the rows that correspond to the directory you want to associate with Git. For each of the rows concerned, in the `Git`{.action} column, the phrase `In progress`{.action} tells you that Git is being enabled.

When the Git association is complete, the status `Enabled`{.action} appears in the `Git`{.action} column for the rows concerned.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Git association errors

In the table in the `Multisite`{.action} tab, identify the rows corresponding to the directory you want to associate with Git. In the `Git` column, if the word `Error` appears, this means that at least one of the following errors has occurred:

- The SSH key has not been saved in your GitHub account.
- The installation directory is not empty.
- The GitHub repository address does not exist or is incorrect.
- The branch of the GitHub repository does not exist or its name is incorrect.

For the exact cause of the error, see the information from the last deployment. In the table, identify the row corresponding to the domain name for which you want to view the logs for the last deployment. To the right of the line, click on the `...`{.action} button, then on `Latest deployment information`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/info-last-deployment-button.png){.thumbnail}

Once you have identified the error(s), associate Git again. Retry the operation by clicking on the `...`{.action} button on the corresponding line, then on `Link Git`{.action}.

### Deploy your GitHub repository on your OVHcloud web hosting plan

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain name that you want to deploy with Git. Ensure that the status of the Git column is `Enabled`{.action}. Click the `...`{.action} button, then `Deploy Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/deploy-git-button.png){.thumbnail}

A confirmation message appears, along with a check box telling you that if there is a conflict during deployment, you can force remote (GitHub repository) changes on your local repository. Tick or untick the box depending on your choice, then click `Confirm`{.action} to validate the deployment.

> [!warning]
>
> To avoid losing your local changes, remember to save them before overwriting them with changes from the remote branch.
>

The new version of your website has been deployed on your OVHcloud hosting plan. If other people are working on the same project and they make changes on the GitHub repository, then you can [configure a webhook on GitHub](#configureWebhook) so that their changes are automatically deployed to your web hosting plan. This avoids having to deploy Git manually, and your web hosting plan will always be up-to-date.

### Modify a domain name

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain you want to modify. Click the `...`{.action} button, then `Modify domain`{.action}. There are two possible scenarios:

#### The domain name is not the only one attached to the same directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}

Modify the information of your choice and click `Next`{.action}.

A second confirmation window will appear, with a summary of your changes.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Click `Confirm`{.action} to confirm your domain name changes.

#### The domain name is the only one attached to the directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}

As the message states, [delete your Git association](#deleteGitAssociation) first before changing your domain name.

### Detach a domain name

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the line corresponding to the domain that you want to detach from your OVHcloud web hosting plan. Click the `...`{.action} button, then `Detach domain`{.action}. There are two possible scenarios:

#### The domain name is not the only one attached to the same directory

The following window will appear.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}

Click `Confirm`{.action} to confirm the detachment of your domain name.

#### The domain name is the only one attached to the directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}

As the message states, [delete your Git association](#deleteGitAssociation) first before detaching your domain name.

### Configure Git

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row corresponding to the directory you want to configure with Git. Click the `...`{.action} button, then `Configure Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

The following information is displayed:

- SSH key: If you have not already done so, [save your SSH key in your GitHub account](#linkSSHKey).
- Deposit: Address of your Git deposit. This field is grayed out because you cannot change the address of the Git repository. To change the Git repository URL, you must [remove Git association from your directory](#deleteGitAssociation) and then [associate directory to Git](#associateGitRepo) again.
- Branch: Name of the branch of the GitHub repository. You can edit this field.
- Webhook URL: If you want to optimise your deployments on Git, [configure the webhook on GitHub](#configureWebhook).

### Latest deployment information

Once you have deployed your GitHub repository on your web hosting plan, you can view information on the latest deployment, such as errors, tests and any useful information. 

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain whose logs you want to view from the last deployment. To the right of the line, click the `...`{.action} button, then `Latest deployment information`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/informations-last-git-deployment-button.png){.thumbnail}

On this screen, you can view all the information related to the latest deployment.

### Delete Git <a name="deleteGitAssociation"></a> association

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that opens, identify the row corresponding to the directory whose association with Git you want to remove. Click the `...`{.action} button, then `Delete Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-button.png){.thumbnail}

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}

The message informs you that the deletion will apply to all domain names attached to your directory. Tick the `Do you want to empty the contents of the <your_directory> directory?`{.action} option if you also want to delete the contents (folders and files) of the directory.

1\.	If you select the check box, the following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}

Click `Confirm`{.action} to confirm the deletion of the Git association from your directory, as well as its contents.

2\.	If you do not select the check box, the following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}

Click `Confirm`{.action} to confirm the deletion of the Git association from your directory.

### Configure a webhook on GitHub

#### Retrieve the webhook URL

> [!primary]
>
> If you are already in the Git association form, copy the webhook URL and go to the step “[Configure the webhook](#configureWebhook)”.
>

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that opens, identify the row that corresponds to the directory where you want to configure a webhook. Click the `...`{.action} button, then `Configure Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

At the bottom of the form that opens, identify the address of the `Webhook URL`{.action} field, and copy it. You will now need to save the URL and configure the webhook on your GitHub account.

#### Configure the <a name="configureWebhook"></a> webhook

Log in to your GitHub account, and go to the repository where you want to configure the webhook. Go to the `Settings`{.action} tab, then in the settings side menu, click `Webhooks`{.action}. Click the `Add webhook`{.action} button to access the form:

- **Payload URL**: Enter the URL provided in the Git association form (`Webhook URL`{.action}).
- **Content type**: Choose `application/json`{.action} as the content type for the data sent.
- **Secret**: The secret is optional. GitHub will use it to sign messages sent by the webhook, enhancing security.
- **SSL verification**: If your website supports HTTPS, leave this option enabled for increased security.
- **Which events would you like to trigger this webhook?**: Select the events that will trigger the webhook to be sent. For automatic deployment, `Just the push event`{.action} is often enough, but you can choose `Send me everything`{.action} to receive notifications for all events.
- **Active**: Make sure that the box is ticked to enable the webhook.

Click `Add webhook`{.action} to save and activate your new webhook.

#### Test your webhook

Once you have created your webhook in GitHub, go to the list of your webhooks and select the one you have just created, or click `Edit`{.action}.

On the screen that appears, click on the `Recent Deliveries`{.action} tab. To send a test event specifically, GitHub usually sends a `ping` event when creating the webhook, and you can use the `Redeliver`{.action} button next to this event to test it.

If the test has worked, the `Response`{.action} tab returns a code of 200. If an error code is returned (usually 500 or 400), this means that your webhook has been misconfigured. Return to the form for adding a webhook, and check the information, specifically the webhook URL provided by OVHcloud.

#### Utilizza il webhook

Una volta configurato il tuo webhook, il codice del tuo sito Web verrà aggiornato automaticamente ogni volta che si verificano modifiche sul repository GitHub. Ad esempio, se un collega apporta modifiche al repository GitHub, il codice del sito Web viene aggiornato localmente (sull’hosting OVHcloud).

### Conclusione

Hai appena associato il codice del tuo sito Web a Git, tramite il tuo repository GitHub. A questo punto puoi distribuire le modifiche apportate sul repository GitHub verso il tuo hosting Web o distribuirle in modo automatico grazie al webhook, consultare i log dei deploy ed effettuare diverse azioni, tutto questo dal tuo Spazio Cliente, in pochi click.

## Per saperne di più

[Mettere online un sito Internet su un hosting Web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).