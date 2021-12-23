---
title: 'Accedere in SSH a un hosting Web'
excerpt: 'Come utilizzare il protocollo SSH per accedere al tuo hosting Web OVHcloud'
id: '1962'
slug: hosting_condiviso_il_protocollo_ssh
section: FTP e SSH
legacy_guide_number: g1962
---


**Ultimo aggiornamento: 04/08/2020**

## Obiettivo

Le soluzioni di hosting Web OVHcloud mettono a disposizione uno spazio di storage in cui è possibile pubblicare i file del tuo sito Internet o delle tue applicazioni. L’accesso a questo spazio è possibile tramite un utente FTP o SSH e la relativa password associata.

**Questa guida ti mostra come utilizzare il protocollo SSH per accedere al tuo hosting Web OVHcloud.**

## Prerequisiti

- Disporre di una soluzione [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/) con accesso SSH
- Disporre delle informazioni necessarie per l’accesso in SSH allo spazio di storage
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), sezione `Web Cloud`{.action}

## Procedura

### Step 1: verifica che l’accesso SSH sia attivo

Per prima cosa, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) nella sezione `Web Cloud`{.action}, quindi clicca su `hosting`{.action} nella barra delle applicazioni a sinistra. Seleziona il nome dell’hosting interessato e clicca sulla scheda `FTP - SSH`{.action}. Visualizzi le informazioni associate allo spazio di storage. 

Nella tabella, individua la colonna “SSH” e verifica che l’utente SSH (o “Login SSH”) interessato, disponga di un accesso SSH attivo. In caso contrario visualizzi la voce ”Disattivato”.

![usessh](images/use-ssh-step1.png){.thumbnail}

Se l’accesso SSH non è attivo, clicca sul pulsante `(...)`{.action} in corrispondenza dell’account interessato e seleziona `Modifica`{.action}. Quindi, nella nuova finestra, attiva l’accesso SSH e poi conferma la modifica. Se non hai la possibilità di attivarlo, assicurati che la tua [soluzione di hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/) disponga di un accesso SSH.

### Step 2: recupera i dati necessari a effettuare l’accesso

Per accedere in SSH allo spazio di storage sono necessarie le seguenti informazioni, disponibili nella scheda `FTP - SSH`{.action}.

|Elemento|Dove trovarlo?|
|---|---|
|Utente SSH attivo|Puoi visualizzarlo nella colonna “Login SSH” della tabella. Ricorda: questo utente deve [disporre di un accesso SSH attivo](./#step-1-verifica-che-laccesso-ssh-sia-attivo).|
|Password dell’utente SSH|Se hai dimenticato la password, è possibile modificarla cliccando sul pulsante `(...)`{.action}, e poi su `Modifica la password`{.action}.|
|Indirizzo del server SSH|Individua la voce “Accesso SSH al cluster”. L’indirizzo del server SSH comincia dopo “ssh://” e termina prima dei due punti  (”:”).|
|Porta di connessione al server SSH|Individua la voce “Accesso SSH al cluster”. Il numero della porta è indicato dopo i due punti (“:”).|

Ad esempio :`ssh://ssh.cluster023.hosting.ovh.net:22/` Quindi “ssh.cluster023.hosting.ovh.net” come indirizzo del server SSH e “22” per la porta di connessione SSH.

![usessh](images/use-ssh-step2.png){.thumbnail}

### Step 3: accedi in SSH allo spazio di storage

Per connetterti in SSH, utilizza un terminale per interagire con lo spazio di storage direttamente da riga di comando. 

Su macOS, Linux et Windows 10 questo tool è installato di default. Sugli ambienti Windows meno recenti è invece necessario installare un software come PuTTY o aggiungere la funzionalità “OpenSSH”. La procedura da seguire varia in base al sistema operativo installato e non è quindi possibile fornirne i dettagli in questa guida.

A seconda del metodo che utilizzi, hai due possibilità per accedere:

#### 3.1  Da un terminale 

> [!warning]
> Le nostre soluzioni condivise non dispongono dell’accesso “super utente” (o “root”) in SSH.

Una volta aperto il terminale, utilizza il comando seguente sostituendo gli elementi “sshlogin”,”sshsrver” e “connectionport” con le tue credenziali SSH. 

```ssh
ssh sshlogin@sshserver -p connectionport
```

Una volta eseguito il comando, il sistema chiederà di inserire la password dell’utente SSH. Una volta connesso, passa allo step successivo “[Interagire in SSH con lo spazio di storage](./#step-4-interagire-in-ssh-con-lo-spazio-di-storage_1)”.

![usessh](images/use-ssh-step3.png){.thumbnail}

#### 3.2 Da un client

Una volta aperto il client (PuTTY ad esempio), inserisci le informazioni di connessione SSH. Questa operazione varia in base al client che utilizzi, pertanto non possiamo entrare in ulteriori dettagli in questa guida. Ti ricordiamo le informazioni da inserire:

|Informazione|Descrizione|
|---|---|
|Server SSH|Indica l’indirizzo del server SSH recuperato [allo Step 2](./#step-2-recupera-i-dati-necessari-a-effettuare-laccesso). In base al client utilizzato, potrebbe chiamarsi “Indirizzo del server”, “Host” o “Hostname”.|
|Porta di connessione|Inserisci la porta di connessione SSH recuperata [allo Step 2](./#step-2-recupera-i-dati-necessari-a-effettuare-laccesso).|
|Login SSH|Inserisci il nome utente SSH In base al client utilizzato, potrebbe chiamarsi “Nome utente”, “Identificativo”, “Login” oppure “Username”.|
|Password dell’utente SSH|Indica la password associata al login SSH.<br><br> In base al client utilizzato, potrebbe chiamarsi: “Password”.|

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

A seconda della versione di PHP che vuoi utilizzare, potrebbe essere necessario modificare l’ambiente di esecuzione per motivi di compatibilità. Consulta la nostra documentazione “>.

## Per saperne di più

[Modificare la configurazione di un hosting Web](../modifica_lambiente_di_esecuzione_del_tuo_hosting_web/)

[Configurare il file .ovhconfig di un hosting Web](../configurare-file-ovhconfig/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
