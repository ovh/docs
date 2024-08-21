---
title: "Accedere in SSH a un hosting Web"
excerpt: "Questa guida ti mostra come utilizzare il protocollo SSH per accedere al tuo hosting Web OVHcloud"
updated: 2024-01-30
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Le soluzioni di hosting Web OVHcloud mettono a disposizione uno spazio di storage in cui è possibile pubblicare i file del tuo sito Internet o delle tue applicazioni. L’accesso a questo spazio è possibile tramite un utente FTP o SSH e la relativa password associata.

**Questa guida ti mostra come utilizzare il protocollo SSH per accedere al tuo hosting Web OVHcloud.**

## Prerequisiti

- Disporre di una soluzione [hosting Web OVHcloud](/links/web/hosting) con accesso SSH
- Disporre delle informazioni necessarie per l’accesso in SSH allo spazio di storage
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager), sezione `Web Cloud`{.action}

> [!warning]
> 
> L'accesso SSH a un hosting Web OVHcloud è possibile a partire da [l'offerta Pro](/links/web/hosting-compare).

## Procedura

### Step 1: verifica che l’accesso SSH sia attivo <a name="sshcheck"></a>

Per prima cosa, accedi allo [Spazio Cliente OVHcloud](/links/manager) nella sezione `Web Cloud`{.action}, quindi clicca su `hosting`{.action}. Seleziona il nome dell’hosting interessato e clicca sulla scheda `FTP - SSH`{.action}. Visualizzi le informazioni associate allo spazio di storage. 

Nella tabella, individua la colonna “SSH” e verifica che l’utente SSH (o “Login”) interessato, disponga di un accesso SSH attivo. In caso contrario visualizzi la voce ”Disattivato”.

![usessh](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-ssh.png){.thumbnail}

Se l’accesso SSH non è attivo, clicca sul pulsante `(...)`{.action} in corrispondenza dell’account interessato e seleziona `Modifica`{.action}. Quindi, nella nuova finestra, attiva l’accesso SSH e poi conferma la modifica. Se non hai la possibilità di attivarlo, assicurati che la tua [soluzione di hosting Web OVHcloud](/links/web/hosting) disponga di un accesso SSH.

### Step 2: recupera i dati necessari a effettuare l’accesso <a name="sshlogin"></a>

Per connetterti in SSH al tuo spazio di storage, ritrova gli elementi necessari nella scheda `FTP - SSH`{.action}:

- **Utente SSH attivo**: Lo trovi nella colonna "**Login**" della tabella. Ricorda: questo utente deve [disporre di un accesso SSH attivo](#sshcheck).
- **Password dell'utente SSH**: Se hai dimenticato la password, è possibile modificarla cliccando sul pulsante `(...)`{.action}, e poi su `Modifica la password`{.action}.
- **Indirizzo del server SSH**: Clicca sulla voce "**Server SSH**".
- **Porta di connessione al server SSH**: contrassegna la voce "**Porta SSH**"

### Step 3: accedi in SSH allo spazio di storage

Per connetterti in SSH, utilizza un terminale per interagire con lo spazio di storage direttamente da riga di comando. 

> [!primary]
>
> Su macOS, Linux et Windows 10 questo tool è installato di default. Sugli ambienti Windows meno recenti è invece necessario installare un software come PuTTY o aggiungere la funzionalità “OpenSSH”.

A seconda del metodo che utilizzi, hai due possibilità per accedere:

#### 3.1  Da un terminale 

> [!warning]
> Le nostre soluzioni condivise non dispongono dell’accesso “super utente” (o “root”) in SSH.

Una volta avviato il terminale, esegui questo comando sostituendo gli elementi "yourlogin", "ssh.cluster00.hosting.ovh.net" e "22" con quelli corrispondenti ai tuoi identificativi SSH. 

```bash
ssh yourlogin@ssh.cluster000.hosting.ovh.net -p 22
```

Una volta eseguito il comando, il sistema chiederà di inserire la password dell’utente SSH. Una volta connesso, passa allo step successivo “[Interagire in SSH con lo spazio di storage](./#step-4-interagire-in-ssh-con-lo-spazio-di-storage)”.

![usessh](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-login.png){.thumbnail}

#### 3.2 Da un client

Una volta aperto il client (PuTTY ad esempio), inserisci le informazioni di connessione SSH. Questa operazione varia in base al client che utilizzi, pertanto non possiamo entrare in ulteriori dettagli in questa guida. Ti ricordiamo le informazioni da inserire:

- **Server SSH**: Indica l’indirizzo del server SSH recuperato [allo Step 2](#sshlogin). In base al client utilizzato, potrebbe chiamarsi “Indirizzo del server”, “Host” o “Hostname”.
- **Porta di connessione**: Inserisci la porta di connessione SSH recuperata [allo Step 2](#sshlogin).
- **Login SSH**: Inserisci il nome utente SSH In base al client utilizzato, potrebbe chiamarsi “Nome utente”, “Identificativo”, “Login” oppure “Username”.
- **Password dell'utente SSH**: Indica la password associata al login SSH. In base al client utilizzato, potrebbe chiamarsi: “Password”.

Una volta effettuato l’accesso, passa allo step successivo.

### Step 4: Interagire in SSH con lo spazio di storage 

Per interagire con il tuo spazio di storage, è necessario utilizzare vari comandi, il cui significato deriva dall’inglese. Se necessario, consulta la seguente lista: Attenzione: **questa lista non è esaustiva**.

|Comando|Significato in inglese|Descrizione| 
|---|---|---|
|pwd|Print working directory|Mostra l’attuale directory di lavoro.| 
|cd `arg`|Change directory|Consente di sostituire la directory di lavoro con quella indicata al posto di `arg`.|
|cd `..`|Change directory|Consente di cambiare la directory di lavoro risalendo di un livello nell’albero delle directory.|
|cd|Change directory|Se non viene specificato nessun argomento, consente di riposizionarsi alla radice dello spazio di storage (home).|
|ls|List|Lista del contenuto della directory di lavoro. Aggiungi attributi per modificare la visualizzazione del risultato del comando (come `ls -ulhG`).| 
|chmod `droit` `arg`|Change mode|Cambia i permessi del file o della directory indicata come argomento `arg`.| 
|mkdir `arg`|Make directory|Consente di creare una directory con il nome dell’argomento `arg`.| 
|touch `arg`|Touch|Crea un file vuoto, se non esiste già, con il nome indicato come argomento `arg`.|
|rm `arg`|Remove|Elimina il file indicato come argomento  `arg`.| 
|rm -r `arg`|Remove|Elimina la directory indicata come argomento `arg` e il suo contenuto in modo ricorsivo.| 
|mv `arg1` `arg2`|Move|Rinomina o sposta un elemento (indicato come `arg`) in una nuova posizione (indicato come`arg2`).| 

Tramite un comando, puoi anche avviare uno script utilizzando una versione specifica di PHP. Ad esempio, per la versione di PHP 7.1, utilizza il seguente comando: Adattane gli elementi alla tua situazione personale. 

```sh
/usr/local/php7.1/bin/php myscript.php
```

A seconda della versione di PHP che vuoi utilizzare, potrebbe essere necessario modificare l’ambiente di esecuzione per motivi di compatibilità. Consulta la nostra documentazione "[Hosting Web : ambiente, versione PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)".

> [!primary]
>
> È anche possibile copiare file e/o cartelle utilizzando **S**ecure **C**opy **P**rotocol (**SCP**).
> Questo protocollo utilizza il protocollo SSH per duplicare contenuti in modo sicuro tra:
> 
> - da un computer/dispositivo locale a un server remoto
> - un server remoto e un computer/dispositivo locale
> - due server remoti
>
> Per maggiori informazioni sull’utilizzo del comando `scp` con i nostri hosting Web OVHcloud, consulta la nostra guida "[Hosting Web - Copiare file con il comando SCP](/pages/web_cloud/web_hosting/using-scp-command)"
>

## Per saperne di più

[Hosting Web : ambiente, versione PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).