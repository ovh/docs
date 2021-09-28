---
title: 'Accedere allo spazio di storage di un hosting Web'
slug: accedere-spazio-storage-ftp-hosting-web
excerpt: 'Come connettersi allo spazio di storage del tuo hosting Web OVH'
section: FTP e SSH
order: 1
---

**Ultimo aggiornamento: 15/04/2019**

## Obiettivo

Le soluzioni di [hosting Web OVH]({ovh_www}/hosting-web/){.external} mettono a disposizione uno spazio di storage in cui è possibile pubblicare i file del tuo sito Internet o delle tue applicazioni. L’accesso a questo spazio è possibile tramite un utente FTP o SSH e la relativa password associata.

**Questa guida ti mostra come effettuare l’accesso allo spazio di storage disponibile con il tuo hosting Web OVH.**

## Prerequisiti

- Disporre di un piano di [hosting Web OVH]({ovh_www}/hosting-web/){.external}
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Web Cloud`{.action}

## Procedura

### Step 1: recupera i dati necessari a effettuare l’accesso

Per accedere allo spazio di storage della tua soluzione di hosting, è necessario avere a disposizione alcuni dati:

- utente FTP o SSH attivo
- password associata all’utente FTP o SSH
- indirizzo del server
- porta di connessione al server

> [!primary]
>
> Queste informazioni, contenute nell’email di conferma dell’installazione dell’hosting Web, sono disponibili anche nello Spazio Cliente OVH.
>
> **Se hai già tutti i dati**, passa direttamente allo [Step 2: accedi allo spazio di storage](./#step-2-accedi-allo-spazio-di-storage).
> 

Per recuperare le informazioni necessarie, accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} nel menu a sinistra e clicca sulla scheda `FTP - SSH`{.action}. 

Nella nuova pagina, visualizzi tutte le informazioni relative allo storage e una tabella con gli utenti FTP e SSH creati sul tuo hosting.

![ftpconnect](images/connect-ftp-step1.png){.thumbnail}

In questa interfaccia dovresti trovare i dati richiesti per eseguire l’accesso. Se non riesci a identificarli, consulta la tabella qui sotto tenendo presente che, in base alla soluzione di hosting attivata, alcuni di essi potrebbero non essere disponibili.

|Campo|Descrizione|
|---|---|
|Server FTP|Indirizzo del server che consente l’accesso allo spazio di storage, da utilizzare per connettersi tramite client FTP.<br><br> La porta di connessione predefinita è la 21. Per accedere con il protocollo SFTP (se attivo), utilizza la porta 22.|
|Accesso in SSH al cluster|Elemento che permette di recuperare due informazioni: <br>- **l’indirizzo del server**, che inizia dopo “ssh://” e termina prima dei “:”<br> - **la porta di connessione**, corrispondente al numero indicato dopo i “:” <br><br>Per esempio: in `ssh://ssh.cluster023.hosting.ovh.net:22/`, `ssh.cluster023.hosting.ovh.net` è l’indirizzo del server e `22` la porta di connessione.|
|Utente FTP principale|Identificativo FTP principale creato sull’hosting. La lista completa degli utenti FTP attivi per il servizio sono riportati nella colonna “Utente FTP” della tabella.|
|Utente SSH principale|Identificativo SSH principale creato sull’hosting. La lista completa degli utenti SSH attivi per il servizio sono riportati nella colonna “Utente SSH” della tabella.|

Se hai dimenticato la password dell’utente FTP o SSH è possibile, in base alla soluzione attivata, utilizzare l’icona a forma di matita o cliccare sui tre puntini in corrispondenza dell’utente e selezionare l’opzione `Modifica la password`{.action}. In caso di necessità, consulta la guida [Modificare la password di un utente FTP](../modificare-la-password-utente-ftp/).

![ftpconnect](images/connect-ftp-step2.png){.thumbnail}

A questo punto dovresti disporre di tutti gli elementi richiesti per accedere allo spazio di storage.

### Step 2: accedi allo spazio di storage

Per effettuare l’accesso, sono disponibili diverse opzioni. Prosegui nella lettura di questa guida in base alla modalità scelta:

[1. FTP Explorer](./#1-ftp-explorer): consente di effettuare l’accesso direttamente dal browser Internet.

[2. Client FTP](./#2-client-ftp): consente di effettuare l’accesso tramite software (ad esempio, FileZilla o Cyberduck). Se opti per questa soluzione, installa il software scelto sul tuo computer.

[3. Accesso SSH](./#3-accesso-ssh): consente di effettuare l’accesso tramite il protocollo Secure Shell. Per utilizzare questa soluzione sono necessarie competenze tecniche avanzate e un [hosting Web OVH]({ovh_www}/hosting-web/){.external} compatibile.

#### 1. FTP Explorer

Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} nel menu a sinistra e, nella scheda `FTP - SSH`{.action}, clicca sul pulsante `FTP Explorer`{.action}. 

![ftpconnect](images/connect-ftp-step3.png){.thumbnail}

Nella nuova pagina, inserisci le credenziali ed esegui il login per entrare nello spazio di storage.

![ftpconnect](images/connect-ftp-step4.png){.thumbnail}

#### 2. Client FTP

Avvia il client installato e inserisci le credenziali di accesso. Questa operazione dipende dal tipo e versione di software utilizzato, pertanto non è possibile descrivere nel dettaglio tutti i casi possibili.

Ti ricordiamo le informazioni da inserire:

|Informazione|Descrizione|
|---|---|
|Server FTP|Indirizzo del server che consente l’accesso allo spazio di storage.<br><br> In base al client utilizzato, potrebbe chiamarsi “Server”, “Indirizzo del server”, “Indirizzo”, “Host”, “Hostname”.|
|Login FTP|Indirizzo del server che consente l’accesso allo spazio di storage.<br><br> In base al client utilizzato, potrebbe chiamarsi “Utente”, “Nome utente”, “Identificativo”, “Login”, “Username”.|
|Password dell’utente FTP|Password associata all’utente FTP.<br><br> |
|Porta di connessione|Questo campo, in genere, viene completato automaticamente dal client. In caso contrario:<br><br>\- utilizza la porta 21 per stabilire una connessione via protocollo FTP<br>\- utilizza la porta 22 per stabilire una connessione via protocollo SFTP (se attivo)|

Se tutte le informazioni sono corrette, il software dovrebbe mostrare il contenuto dello spazio di storage. Inoltre, è possibile che compaia un messaggio (chiamato anche “status”) che conferma che il client ha mostrato il contenuto.

#### 3. Accesso SSH

Per connetterti in SSH, utilizza un terminale per interagire con lo spazio di storage direttamente da riga di comando. 

Su macOS e Linux questo tool è installato di default; un ambiente Windows richiederà invece l’utilizzo di un software (ad esempio, PuTTY) o l’aggiunta della funzionalità OpenSSH. Questa operazione dipende dal tipo di sistema operativo utilizzato, pertanto non è possibile descriverne il processo dettagliato in questa guida.

Una volta stabilita la connessione SSH, in base al metodo scelto, esistono due modi diversi di effettuare l’accesso: 

- tramite software: i campi devono essere completati con le informazioni di connessione
- tramite riga di comando: in questo caso, è necessario rispettare una sintassi specifica

Se scegli quest’ultima opzione, ecco il comando da eseguire:

```ssh
ssh sshlogin@sshserver -p connectionport
```

Sostituisci “sshlogin” “shserver” e “connectionport”con i tuoi dati. Una volta inviato il comando, ti verrà richiesto di inserire la password dell’utente SSH.

Se le informazioni sono corrette, potrai eseguire operazioni sullo spazio di storage. Per maggiori informazioni, consulta la guida [Utilizzare la connessione SSH su un hosting Web](../hosting_condiviso_il_protocollo_ssh/).

![ftpconnect](images/connect-ftp-step5.png){.thumbnail}

## Per saperne di più

[Modificare la password di un utente FTP ](../modificare-la-password-utente-ftp/){.external}

[Utilizzare la connessione SSH su un hosting condiviso](../hosting_condiviso_il_protocollo_ssh/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.
