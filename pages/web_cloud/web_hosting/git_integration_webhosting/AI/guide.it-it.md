35 71 

Clicca sui tab sottostanti per visualizzare una alla volta ciascuna delle **5** fasi.

> [!tabs]
> **Passo 1**
>>
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), quindi vai alla sezione `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clicca sul menu `Hosting`{.action}, quindi seleziona l'hosting web desiderato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Nella pagina visualizzata, clicca sull'etichetta `I miei siti`{.action}.
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
>>
>> Nel tavolo che appare, clicca sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `Associa Git`{.action}.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Passo 5**
>>
>> Il modulo di associazione Git appare. Devono essere configurati diversi elementi:
>>
>> - Repository GitHub
>> - Branch del repository GitHub
>> - Chiave SSH (per un repository GitHub privato)
>> - Webhook (opzionale)
>>
>> Continua a leggere questa guida per ottenere le informazioni necessarie per completare i campi richiesti.

167

Dopo aver validato il modulo di associazione Git, sei reindirizzato alla pagina dell'etichetta `I miei siti`{.action}.

177 179

Puoi anche seguire l'evoluzione dell'attivazione di Git dall'etichetta `I miei siti`{.action}. Nella colonna `Git`{.action} del tavolo, la dicitura `In corso`{.action} presente sulla riga del sito web desiderato ti indica che Git è in corso di attivazione.

Quando l'associazione di Git è completata, lo stato `Attivo`{.action} appare nella colonna `Git`{.action} per il sito web desiderato.

185

Nel tavolo dell'etichetta `I miei siti`{.action}, identifica le righe corrispondenti al directory del sito web che desideri associare a Git. Nella colonna `Git`, se la dicitura `Errore` appare, ciò significa che almeno uno dei seguenti errori è avvenuto:

192 196

Per conoscere la causa esatta dell'errore, consulta le informazioni dell'ultimo deployment. Nel tavolo, clicca sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `Informazioni dell'ultimo deployment`{.action}.

![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Una volta identificato(i) l'(i) errore(i), associa Git nuovamente. Ripeti l'operazione cliccando sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `Associa Git`{.action}.

200 235

Clicca sui tab sottostanti per visualizzare una alla volta ciascuna delle **5** fasi.

> [!tabs]
> **Passo 1**
>>
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), quindi vai alla sezione `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clicca sul menu `Hosting`{.action}, quindi seleziona l'hosting web desiderato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Nella pagina visualizzata, clicca sull'etichetta `I miei siti`{.action}.
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
>>
>> Nel tavolo che appare, clicca sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `Deploy Git`{.action}.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Passo 5**
>>
>> Un messaggio di conferma appare, insieme a una casella da spuntare che ti indica che in caso di conflitto durante il deployment, puoi forzare le modifiche remote (del repository GitHub) sul tuo repository locale. Spunta o non spuntare la casella a seconda della tua scelta, quindi clicca su `Conferma`{.action} per validare il deployment.
>>
>> > [!warning]
>> >
>> > Per evitare di perdere le tue modifiche locali, pensa a salvarle prima di sovrascriverle con le modifiche della branch remota.
>> 
>> La nuova versione del tuo sito web è stata correttamente deployata sul tuo hosting web OVHcloud. Se altre persone lavorano sullo stesso progetto e apportano modifiche al repository GitHub, puoi [configurare un webhook su GitHub](#configureWebhook) in modo che le loro modifiche siano automaticamente deployate sul tuo hosting web. Questo ti evita di deployare Git manualmente, e il tuo sito web resterà sempre aggiornato.

239 294

Clicca sui tab sottostanti per visualizzare una alla volta ciascuna delle **5** fasi.

> [!tabs]
> **Passo 1**
>>
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), quindi vai alla sezione `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clicca sul menu `Hosting`{.action}, quindi seleziona l'hosting web desiderato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Nella pagina visualizzata, clicca sull'etichetta `I miei siti`{.action}.
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
>>
>> Nel tavolo che appare, clicca sul pulsante `>`{.action} a sinistra del nome del sito web desiderato per visualizzare i nomi di dominio o sottodomini associati.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Clicca quindi sul pulsante `⁝`{.action} a destra del nome del dominio o sottodominio desiderato, quindi su `Modifica il dominio`{.action}.
>>
>> ![Opzioni domini associati](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Passo 5**
>>
>>  Due scenari sono possibili:
>>
>> **1 - Uno o più altri nomi di dominio sono associati al sito web**
>>
>> La seguente finestra appare:
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}
>>
>> Modifica le informazioni come necessario e clicca su `Avanti`{.action}.
>>
>> Una seconda finestra di conferma appare con il riepilogo delle tue modifiche:
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}
>>
>> Clicca su `Conferma`{.action} per validare le modifiche del tuo nome di dominio.
>>
>> **2 - Un solo nome di dominio è associato al sito web**
>>
>> La seguente finestra appare:
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}
>>
>> Come il messaggio indica, [elimina la tua associazione Git](#deleteGitAssociation) in un primo tempo prima di modificare il tuo nome di dominio.

298 347

Clicca sui tab sottostanti per visualizzare una alla volta ciascuna delle **5** fasi.

> [!tabs]
> **Passo 1**
>>
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), quindi vai alla sezione `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clicca sul menu `Hosting`{.action}, quindi seleziona l'hosting web desiderato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Nella pagina visualizzata, clicca sull'etichetta `I miei siti`{.action}.
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
>>
>> Nel tavolo che appare, clicca sul pulsante `>`{.action} a sinistra del nome del sito web desiderato per visualizzare i nomi di dominio o sottodomini associati.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Clicca quindi sul pulsante `⁝`{.action} a destra del nome del dominio o sottodominio desiderato, quindi su `Stacca il dominio`{.action}.
>>
>> ![Opzioni domini associati](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Passo 5**
>>
>>  Due scenari sono possibili:
>>
>> **1 - Uno o più altri nomi di dominio sono associati al sito web**
>>
>> La seguente finestra appare.
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Clicca su `Conferma`{.action} per validare lo stacco del tuo nome di dominio.
>>
>> **2 - Un solo nome di dominio è associato al sito web**
>>
>> La seguente finestra appare:
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>>
>> Come il messaggio indica, [elimina la tua associazione Git](#deleteGitAssociation) in un primo tempo prima di staccare il tuo nome di dominio.

351 385

Clicca sui tab sottostanti per visualizzare una alla volta ciascuna delle **5** fasi.

> [!tabs]
> **Passo 1**
>>
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), quindi vai alla sezione `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clicca sul menu `Hosting`{.action}, quindi seleziona l'hosting web desiderato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Nella pagina visualizzata, clicca sull'etichetta `I miei siti`{.action}.
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
>>
>> Nel tavolo che appare, clicca sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `Configura Git`{.action}.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Passo 5**
>>
>> Le seguenti informazioni appaiono:
>>
>> - Chiave SSH: Se non l'hai già fatto, [registra la tua chiave SSH nel tuo account GitHub](#linkSSHKey).
>> - Repository: Indirizzo del tuo repository Git. Questo campo è grigio perché non puoi modificare l'indirizzo del repository Git. Per cambiare l'URL del repository Git, devi [eliminare l'associazione Git del tuo directory](#deleteGitAssociation) e poi nuovamente [associare il directory a Git](#associateGitRepo).
>> - Branch: Nome del branch del repository GitHub. Puoi modificare questo campo se necessario.
>> - URL webhook: Se desideri ottimizzare i tuoi deployment su Git, [configura il webhook su GitHub](#configureWebhook).

391 418

Clicca sui tab sottostanti per visualizzare una alla volta ciascuna delle **4** fasi.

> [!tabs]
> **Passo 1**
>>
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), quindi vai alla sezione `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clicca sul menu `Hosting`{.action}, quindi seleziona l'hosting web desiderato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Nella pagina visualizzata, clicca sull'etichetta `I miei siti`{.action}.
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
>>
>> Nel tavolo che appare, clicca sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `informazioni dell'ultimo deployment`{.action}.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
>> Trova su questo schermo tutte le informazioni relative all'ultimo deployment.

422 467

Clicca sui tab sottostanti per visualizzare una alla volta ciascuna delle **5** fasi.

> [!tabs]
> **Passo 1**
>>
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), quindi vai alla sezione `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clicca sul menu `Hosting`{.action}, quindi seleziona l'hosting web desiderato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Nella pagina visualizzata, clicca sull'etichetta `I miei siti`{.action}.
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
>>
>> Nel tavolo che appare, clicca sul pulsante `⁝`{.action} a destra del sito web desiderato, quindi su `Elimina Git`{.action}.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Passo 5**
>>
>> La seguente finestra appare:
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}
>>
>> Il messaggio ti informa che l'eliminazione si applicherà sull'intero dei nomi di dominio associati al tuo sito web. Spunta la casella `Desideri svuotare il contenuto della directory <la_tua_directory>`{.action} se desideri anche eliminare il contenuto (directory e file) della directory.
>>
>> 1\. Se spunti la casella, la seguente finestra appare:
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}
>>
>> Clicca su `Conferma`{.action} per validare l