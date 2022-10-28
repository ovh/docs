---
title: 'Accedere allo spazio di storage di un hosting Web'
slug: accedere-spazio-storage-ftp-hosting-web
excerpt: 'Come connettersi allo spazio di storage del tuo hosting Web OVHcloud'
section: FTP e SSH
order: 02
---

**Ultimo aggiornamento: 19/01/2022**

## Obiettivo

Le soluzioni di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} mettono a disposizione uno spazio di storage in cui è possibile pubblicare i file del tuo sito Internet o delle tue applicazioni. L’accesso a questo spazio è possibile tramite un utente FTP o SSH e la relativa password associata.

**Questa guida ti mostra come effettuare l’accesso allo spazio di storage disponibile con il tuo hosting Web OVHcloud.**

## Prerequisiti

- Disporre di un piano di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} (per attivare più utenti FTP è necessario disporre almeno di un hosting Pro o Performance).
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Web Cloud`{.action}

## Procedura

### Step 1: recupera i dati necessari a effettuare l’accesso

Per accedere allo spazio di storage della tua soluzione di hosting, è necessario avere a disposizione alcuni dati:

- utente FTP o SSH attivo
- password associata all’utente FTP o SSH
- indirizzo del server
- porta di connessione al server

> [!primary]
>
> Queste informazioni, contenute nell’email di conferma dell’installazione dell’hosting Web, sono disponibili anche nello Spazio Cliente OVHcloud.
>
> **Se hai già tutti i dati**, passa direttamente allo [Step 2: accedi allo spazio di storage](./#step-2-accedi-allo-spazio-di-storage).
> 

Per recuperare le informazioni necessarie, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} e clicca sulla scheda `FTP - SSH`{.action}. 

Nella nuova pagina, visualizzi tutte le informazioni relative allo storage e una tabella con gli utenti FTP e SSH creati sul tuo hosting.

![ftpconnect](images/connect-ftp-step1.png){.thumbnail}

In questa interfaccia dovresti trovare i dati richiesti per eseguire l’accesso. Se non riesci a identificarli, consulta la tabella qui sotto tenendo presente che, in base alla soluzione di hosting attivata, alcuni di essi potrebbero non essere disponibili.

- **Server FTP e SFTP**: Indirizzo del server che consente l'accesso allo spazio di storage utilizzando un software FTP tramite il protocollo FTP o SFTP.

> La porta classica di connessione è la porta "21". Utilizza la porta "22" per una connessione tramite il protocollo SFTP (se attivo)

- **Server SSH**: Indirizzo del server che consente l'accesso allo spazio di storage utilizzando un terminale tramite il protocollo SSH.
- **Utente principale**: Identificativo (S)FTP principale creato sul tuo hosting. Tutti gli utenti (S)FTP del tuo hosting sono disponibili nella colonna "Login" della tabella.

Se hai dimenticato la password dell’utente FTP o SSH è possibile, in base alla soluzione attivata, utilizzare l’icona a forma di matita o cliccare sui tre puntini in corrispondenza dell’utente e selezionare l’opzione `Modifica la password`{.action}. In caso di necessità, consulta la guida [Modificare la password di un utente FTP](../modificare-la-password-utente-ftp/).

![ftpconnect](images/connect-ftp-step2.png){.thumbnail}

A questo punto dovresti disporre di tutti gli elementi richiesti per accedere allo spazio di storage.

### Step 2: accedi allo spazio di storage

Per effettuare l’accesso, sono disponibili diverse opzioni. Prosegui nella lettura di questa guida in base alla modalità scelta:

- [1. FTP Explorer](#ftpexplorer): consente di effettuare l’accesso direttamente dal browser Internet.

- [2. Client FTP](#ftpsoftware): consente di effettuare l’accesso tramite software (ad esempio, FileZilla o Cyberduck). Se opti per questa soluzione, installa il software scelto sul tuo computer.

- [3. Accesso SSH](#ssh): consente di effettuare l’accesso tramite il protocollo Secure Shell. Per utilizzare questa soluzione sono necessarie competenze tecniche avanzate e un [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} compatibile.

#### 1. FTP Explorer <a name="ftpexplorer"></a>

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} e, nella scheda `FTP - SSH`{.action}, clicca sul pulsante `FTP Explorer`{.action}. 

![ftpconnect](images/connect-ftp-step3.png){.thumbnail}

Nella nuova pagina, inserisci le credenziali ed esegui il login per entrare nello spazio di storage.

![ftpconnect](images/connect-ftp-step4.png){.thumbnail}

#### 2. Client FTP <a name="ftpsoftware"></a>

Avvia il client installato e inserisci le credenziali di accesso. Questa operazione dipende dal tipo e versione di software utilizzato, pertanto non è possibile descrivere nel dettaglio tutti i casi possibili.

Ti ricordiamo le informazioni da inserire:

- **Server FTP e SFTP**: Indirizzo del server che consente l’accesso allo spazio di storage. In base al client utilizzato, potrebbe chiamarsi “Server”, “Indirizzo del server”, “Indirizzo”, “Host”, “Hostname”.
- **Utente principale**: Indirizzo del server che consente l’accesso allo spazio di storage. In base al client utilizzato, potrebbe chiamarsi “Utente”, “Nome utente”, “Identificativo”, “Login”, “Username”.
- **Password dell'utente FTP**: È la password associata al login FTP. A seconda del software utilizzato, la denominazione può essere "Password" o "Password".
- **Porta di connessione**: Questo campo, in genere, viene completato automaticamente dal client. In caso contrario:
    - utilizza la porta 21 per stabilire una connessione tramite protocollo FTP
    - utilizza la porta 22 per stabilire una connessione tramite protocollo SFTP (se attivo).

Se tutte le informazioni sono corrette, il software dovrebbe mostrare il contenuto dello spazio di storage. Inoltre, è possibile che compaia un messaggio (chiamato anche “status”) che conferma che il client ha mostrato il contenuto.

#### 3. Accesso SSH <a name="ssh"></a>

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

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
