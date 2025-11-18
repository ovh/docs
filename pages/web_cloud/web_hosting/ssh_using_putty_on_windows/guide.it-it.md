---
title: "Tutorial - Come utilizzare PuTTY per le connessioni SSH e l'autenticazione"
excerpt: "Scopri come accedere al tuo server Cloud o al tuo hosting Web e gestire le chiavi SSH con il software client SSH PuTTY"
updated: 2024-11-11
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Obiettivo

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) è un software client SSH open source con interfaccia grafica utente. È stato sviluppato per Windows ma è disponibile anche per altri sistemi operativi e include funzionalità utili, come la gestione delle chiavi SSH.

**Questa guida ti mostra come utilizzare PuTTY per rendere sicure le connessioni al servizio OVHcloud tramite il protocollo SSH.**

## Prerequisiti

- [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) installato sul dispositivo locale
- Conoscenze di base del [protocollo SSH e del suo utilizzo](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

> [!warning]
> OVHcloud fornisce servizi la cui configurazione e gestione sono di vostra responsabilità. Questa guida ti mostra come utilizzare le soluzioni OVHcloud con tool esterni. Potrebbe essere necessario adattare alcune istruzioni specifiche al sistema operativo della workstation locale o del server.
>
> In caso di difficoltà o dubbi, ti consigliamo di contattare un [provider di servizi specializzato](/links/partner) o [la nostra Community](/links/community).
>

## Procedura

### Presentazione del contenuto

- [Installazione di PuTTY](#installation)
- [Connessioni SSH con nome utente e password](#sshconnect1)
    - [Hosting condiviso](#webhosting)
    - [Server dedicato o VPS](#cloudserver)
- [Connessioni SSH con nome utente e autenticazione con chiave SSH](#sshconnect2)
    - [Creazione di chiavi SSH con PuTTY](#puttygen)
    - [Trasferimento delle chiavi SSH pubbliche verso il tuo server](#transferkeys)
    - [Connessione al server](#puttykeys)
    - [Gestione delle chiavi SSH private su un dispositivo locale (PuTTY authentication agent)](#pageant)
    - [Utilizzo delle sessioni di accesso PuTTY](#sessions)
- [Esempio di utilizzo: Come utilizzare gli strumenti PuTTY per configurare connessioni sicure ai server OVHcloud (VPS, server dedicato, istanza Public Cloud)](#example)

<a name="installation"></a>

### Installazione di PuTTY

Scarica l’ultima versione del client PuTTY dal [sito ufficiale](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) e installala sul sistema (o decomprimi i file eseguibili). Le versioni con estensione PuTTY possono essere disponibili anche tramite il gestore pacchetti o [Homebrew](https://brew.sh/).

Il pacchetto di installazione standard consigliato include diverse applicazioni che migliorano le funzionalità di PuTTY, in particolare per i trasferimenti di file (`psftp`, `pscp`, non inclusi in questo tutorial) e la gestione delle chiavi SSH (`PuTTYgen`, `Pageant`, richiesti per le parti corrispondenti riportate di seguito).

> [!primary]
> Le istruzioni seguenti sono basate su un sistema operativo Windows. Le funzionalità del software PuTTY devono essere simili su tutti i sistemi operativi. Tuttavia, se non si utilizza PuTTY su un computer Windows, potrebbe essere necessario consultare la documentazione del sistema operativo o le [FAQ ufficiali](https://www.greenend.org.uk/~sgtatham/putty/faq.html) e la [documentazione](https://www.chiark.greenend.org.uk/~sgtatham/putty/docs.html) di PuTTY.
>

> [!success]
> Potrete avere più istanze di PuTTY e dei suoi strumenti compagni aperte simultaneamente. Ad esempio, è possibile aprire una finestra per seguire i passaggi dell'esercitazione e una seconda finestra per verificare le connessioni.
>

<a name="sshconnect1"></a>

### Connessioni SSH con PuTTY - Nome utente e password

Questa sezione spiega come stabilire una prima connessione SSH ai seguenti servizi OVHcloud:

- [Spazio di storage FTP di un hosting Web compatibile SSH](/links/web/hosting-compare)
- [Server dedicato](/links/bare-metal/bare-metal)
- [VPS](/links/bare-metal/vps)

<a name="webhosting"></a>

#### Hosting Web

È necessario conoscere il nome del cluster dell’hosting Web presente nello [Spazio Cliente OVHcloud](/links/manager), il nome utente FTP e la password associata. Per maggiori informazioni su questo metodo di accesso, consulta la [guida corrispondente](/pages/web_cloud/web_hosting/ftp_connection).

/// details | Connessione a un hosting Web

Apri PuTTY e inserisci gli identificativi FTP dell’hosting nei campi previsti.

- `Host Name (or IP address)`: **ftp_username@hosting_cluster_name** (esempio: **yourlogin@ssh.cluster042.hosting.ovh.net**)
- `Port`: 22

![putty](/pages/assets/screens/other/web-tools/putty/putty1.png){.thumbnail}

Clicca su `Open`{.action}.

Al momento della prima connessione, visualizzi il messaggio "PuTTY Security Alert", che ti avverte dei possibili rischi. Questo in genere non è un problema, purché ti connetti a un host trusted (come l’archivio FTP di un hosting Web).  
Clicca su `Accept`{.action} per continuare. Selezionando `Connect Once`{.action}, l’impronta digitale dell’hosting Web non verrà salvata nella cache e la finestra di alert apparirà al prossimo login. Per maggiori informazioni, consulta la nostra [guida introduttiva a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

Viene visualizzata la finestra della riga di comando (PuTTY terminal) in cui viene richiesto di immettere la password di accesso.

Immettere la password [assegnata a questo utente](/pages/web_cloud/web_hosting/ftp_connection). È possibile incollare la stringa di password in questa finestra facendo clic con il pulsante destro del mouse.

Si noti che **il prompt della password non visualizzerà le immissioni della tastiera** in un terminale PuTTY. Esempio di output:

```console
Using username "yourlogin".
yourlogin@ssh.cluster042.hosting.ovh.net's password:
```

```console
Welcome to OVH
yourlogin@ssh.cluster042.hosting.ovh.net (php/7.3/production/stable) ~ $ 
```

Consulta la nostra guida "[Accesso SSH per gli hosting Web OVHcloud](/pages/web_cloud/web_hosting/ssh_on_webhosting)" per conoscere le possibili azioni da effettuare sullo spazio di storage FTP del tuo hosting Web.

PuTTY può salvare le credenziali e le impostazioni di una connessione SSH come "sessione". In questo modo è possibile connettersi a host o dispositivi LAN noti senza immettere le rispettive informazioni ogni volta. Come utilizzare le sessioni PuTTY nella [sezione seguente](#sessions).

///

<a name="cloudserver"></a>

#### Server dedicato o VPS

È necessario indicare l’indirizzo IP del server presente nello [Spazio Cliente OVHcloud](/links/manager) e il nome dell’account utente da utilizzare per la sessione di connessione. Per maggiori informazioni, consulta le nostre guide "Primi passi":

- [Server dedicato](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Server dedicato della gamma **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

/// details | Come connettersi a un host remoto

Aprire PuTTY e inserire le credenziali di accesso nei campi appropriati.

- `Host Name (or IP address)`: **username@IPv4_server** (esempio: **ubuntu@203.0.113.101**)
- `Port`: 22 (a meno che non abbiate modificato il numero di porta SSH del vostro server)

![putty](/pages/assets/screens/other/web-tools/putty/putty2.png){.thumbnail}

Clicca sul pulsante `Open`{.action}.

Al momento della prima connessione, compare la finestra "PuTTY Security Alert", che ti avverte dei possibili rischi. In genere non si tratta di un problema, purché ci si connetta a un host trusted (ad esempio, un server sicuro).  
Clicca su `Accept`{.action} per continuare. Selezionando `Connect Once`{.action}, l’impronta del server non verrà salvata nella cache e l’alert apparirà di nuovo alla prossima connessione. Per maggiori informazioni, consulta la nostra [guida introduttiva a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

Viene visualizzata la finestra della riga di comando (PuTTY terminal) in cui viene richiesto di immettere la password dell'account utente. È possibile incollare la stringa di password in questa finestra facendo clic con il pulsante destro del mouse.

Si noti che **il prompt della password non visualizzerà le immissioni della tastiera** in un terminale PuTTY. Esempio di output:

```console
Using username "ubuntu".
ubuntu@203.0.113.101's password:
```

```console
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-47-generic x86_64)
```

Per maggiori informazioni sulle connessioni SSH, consulta la nostra guida d'[introduzione a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

PuTTY può salvare le impostazioni di una connessione SSH come "sessione". In questo modo è possibile connettersi a host remoti o a dispositivi di rete locali noti senza immettere ogni volta le rispettive informazioni. Questa guida ti mostra come utilizzare **PuTTY sessions** nella [sezione corrispondente di questo tutorial](#sessions).

///

<a name="sshconnect2"></a>

### Connessioni SSH con PuTTY - Nome utente e chiave di autenticazione (file di chiave SSH)

Questa parte del tutorial spiega come utilizzare SSH con **autenticazione a coppie di chiavi** in PuTTY per connettersi ai seguenti servizi OVHcloud:

- [Istanza Public Cloud](/links/public-cloud/public-cloud)
- [Server dedicato](/links/bare-metal/bare-metal)
- [VPS](/links/bare-metal/vps)

È necessario indicare l’indirizzo IP del server presente nello [Spazio Cliente OVHcloud](/links/manager) e il nome dell’account utente da utilizzare per la sessione di connessione. Per maggiori informazioni, consulta le nostre guide "Primi passi":

- [Istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)
- [Server dedicato](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Server dedicato della gamma **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)


> [!primary]
>
> PuTTY archivia i file di chiave in un formato specifico che li rende incompatibili con i file di chiave SSH creati con il client **OpenSSH**. Per utilizzare una **chiave privata** creata precedentemente con il cliente SSH da riga di comando (ad esempio per un [server dedicato](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) o un [istanza Public Cloud](/pages/public_cloud/compute/creating-ssh-keys-pci)), è necessario innanzitutto [convertirla nel formato PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt).
>

<a name="puttygen"></a>

#### Creare chiavi SSH (PuTTY key generator)

Questa operazione richiede il componente aggiuntivo **PuTTY key generator** (PuTTYgen).

/// details | Come creare chiavi SSH con PuTTYgen

##### Step 1: Crea una coppia di chiavi

Aprire l'applicazione PuTTYgen e selezionare l'algoritmo di crittografia. In questo esempio viene utilizzato **RSA**. Digitare "4096" nel campo `Number of bits in a generated key:` in basso.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen1.png){.thumbnail}

Clicca sul pulsante `Generate`{.action}.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen2.png){.thumbnail}

Viene visualizzato un indicatore di stato. Spostare il cursore del mouse sull'area sotto la barra di avanzamento fino a quando PuTTYgen non ha dati casuali sufficienti per iniziare a generare la chiave.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen.gif){.thumbnail}

Disporrete ora di una **coppia di chiavi** composta da due elementi:

- **Public key**: stringa di chiave che verrà archiviata sull'host o sugli host remoti a cui si desidera connettersi.
- **Private key**: una stringa di chiave che rimane nel dispositivo locale dal quale ci si connette a uno o più host remoti.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen3.png){.thumbnail}

Facoltativamente, è possibile modificare il campo `Comment` con la propria descrizione. Verrà visualizzata dagli strumenti PuTTY quando si utilizza la chiave.

##### Step 2: Registra la chiave privata

Immettere una frase segreta per proteggere il file di chiave privata nei campi `Key passphrase` e `Confirm`. L'approccio migliore consiste nell'utilizzare un gestore di password per creare e memorizzare una password composta da più parole (passphrase).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen4.png){.thumbnail}

Clicca sul pulsante `Save private key`{.action}. Selezionare una cartella per i file chiave o crearne una nuova, ad esempio `putty_key_files`.  
Assegna un nome al tuo file e salvalo. A questo punto dovresti avere un nuovo file **private key** con l’estensione `ppk` (*PuTTY private key*) nella tua cartella.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen5.png){.thumbnail}

> [!warning]
>
> L'accesso ai server remoti è sicuro quanto il dispositivo client che memorizza la chiave privata. È pertanto fondamentale proteggere il dispositivo e i file chiave in esso contenuti dall'accesso non autorizzato.
>
> Per maggiore praticità, memorizzate le frasi segrete in un gestore di password sul vostro dispositivo, come la soluzione open source **KeePass**, e utilizzate lo strumento [Pageant](#pageant) per le connessioni basate su chiave.
>

Il pulsante `Save public key`{.action} nell’interfaccia PuTTYgen convertirà il canale **public key** nel formato "SSH-2 standard format", quindi creerà un file contenente questo canale. Tuttavia, le stringhe di chiave in questo formato non sono rilevanti per questo tutorial.

##### Step 3: Prepara la chiave pubblica

Lo step successivo consiste nell’archiviare la **chiave pubblica** sull’host remoto al quale vuoi connetterti. Il formato della stringa di chiave visualizzato nella finestra PuTTYgen in `Public key for pasting into OpenSSH authorized_keys file` è compatibile con OpenSSH. La stringa di chiave esatta verrà utilizzata in una sola riga.

> [!primary]
> Non è necessario salvare la chiave pubblica come file perché è possibile recuperarla sempre dal file **private key**. Per farlo, apri PuTTYgen e clicca sul pulsante `Load`{.action}. Seleziona il file di chiave `ppk` e inserisci la frase segreta per aprirlo.
>
> Potete anche copiare la stringa di chiave pubblica e incollarla in un file di testo normale (senza interrompere la stringa di chiave con interruzioni di riga).
>

Per continuare con [passaggio successivo](#transferkeys), evidenziare **l'intera stringa chiave** e copiarla.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

///

<a name="transferkeys"></a>

#### Trasferimento delle chiavi SSH pubbliche verso il tuo server

Le azioni in questo passaggio dipendono dal tipo di servizio in uso e dall'installazione di un nuovo sistema operativo o dall'aggiunta della chiave a un sistema in uso.

/// details | Come aggiungere una chiave SSH pubblica durante l'installazione o la reinstallazione di un OS (Spazio Cliente OVHcloud)

Clicca sulla scheda del tuo servizio:

> [!tabs]
> **Istanza Public Cloud**
>>
>> Evidenziare e copiare **l'intera stringa di chiave pubblica** creata [nel passaggio precedente](#puttygen) dalla finestra PuTTYgen (prima aprire il **file di chiave privata** corrispondente, se necessario). e, come indicato nella sezione corrispondente della nostra [guida sulla creazione di un’istanza Public Cloud nello Spazio Cliente OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>
> **Server dedicato**
>>
>> Evidenziare e copiare **l'intera stringa di chiave pubblica** creata [nel passaggio precedente](#puttygen) dalla finestra PuTTYgen (prima aprire il **file di chiave privata** corrispondente, se necessario). Inseriscila nel campo corrispondente al momento dell’installazione. Consulta i dettagli nella nostra [guida introduttiva per un server dedicato](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>
> **VPS**
>>
>> Evidenziare e copiare **l'intera stringa di chiave pubblica** creata [nel passaggio precedente](#puttygen) dalla finestra PuTTYgen (prima aprire il **file di chiave privata** corrispondente, se necessario). Inseriscila nel campo corrispondente al momento dell’installazione. Per maggiori informazioni, consulta la nostra [guida introduttiva sui VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>

///

**Come aggiungere una chiave SSH pubblica su un OS in esecuzione**

Seleziona il tipo di servizio:

/// details | Istanza Public Cloud

Evidenziare e copiare **l'intera stringa di chiave pubblica** creata [nel passaggio precedente](#puttygen) dalla finestra PuTTYgen (prima aprire il **file di chiave privata** corrispondente, se necessario). Segui le istruzioni della guida:

- [Come configurare chiavi SSH aggiuntive su un’istanza](/pages/public_cloud/compute/configuring_additional_ssh_keys)
- [Come sostituire una coppia di chiavi SSH su un’istanza Public Cloud](/pages/public_cloud/compute/replacing_lost_ssh_key)

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

///


/// details | Server dedicato o VPS

[Accedi al tuo server](#cloudserver) con l'account utente corrispondente. Creare la cartella `.ssh` (se non esiste):

```bash
mkdir ~/.ssh
```

Per archiviare la chiave per l’utente corrente, aprire (o creare) il file `authorized_keys` con l’editor di testo preferito (`nano` è utilizzato in questo esempio):

```bash
nano ~/.ssh/authorized_keys
```

Evidenziare e copiare **l'intera stringa di chiave pubblica** creata [nel passaggio precedente](#puttygen) dalla finestra PuTTYgen (prima aprire il **file di chiave privata** corrispondente, se necessario).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

Incolla la tua **stringa di chiave pubblica completa** in questo file. Assicurarsi che la stringa di chiave sia sempre ininterrotta senza interruzioni di riga.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen7.png){.thumbnail}

Salvare il file e uscire dall'editor. Riavvia il server (`sudo reboot`) o riavvia il servizio OpenSSH utilizzando uno dei comandi seguenti (il comando appropriato può variare in base al sistema operativo):

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Esci dalla sessione PuTTY in corso:

```bash
logout
```

Per verificare che la chiave sia configurata correttamente, accedi al server utilizzando i [passaggi descritti di seguito](#puttykeys).

///

<a name="puttykeys"></a>

#### Connessione al server

Per connettersi a un host remoto (istanza Public Cloud, server dedicato o VPS), è necessario aver [creato la coppia di chiavi](#puttygen) e [aggiunto la stringa di chiave pubblica al server](#transferkeys).

|![putty](/pages/assets/screens/other/web-tools/putty/putty3.png){.thumbnail} |
|---| 
| 1\. Aprire PuTTY.<br> 2\. Espandere il nodo `SSH` in `Connection` nella struttura `Category`.<br> 3\. Espandere il nodo `Auth`.<br> 4\. Fare clic su `Credentials` per visualizzare le impostazioni corrispondenti.<br> 5\. Clicca sul pulsante `Browse`{.action}.<br> 6\. Selezionare il file di chiave privata (`keyfile.ppk`) nella cartella in cui è stato salvato. |

Torna a `Session` nel menu a sinistra. Inserisci le credenziali di accesso nei campi appropriati.

![putty](/pages/assets/screens/other/web-tools/putty/putty2.png){.thumbnail}

- `Host Name (or IP address)`: **username@IPv4_server** (esempio: **ubuntu@203.0.113.101**)
- `Port`: 22 (a meno che non abbiate modificato il numero di porta SSH del vostro server)

Clicca sul pulsante `Open`{.action}. Il terminale PuTTY ti chiederà la password del file di chiave. È possibile incollare la stringa di password in questa finestra facendo clic con il pulsante destro del mouse.

Si noti che **il prompt della password non visualizzerà le immissioni della tastiera** in un terminale PuTTY. Esempio di output:

```console
Using username "ubuntu".
Authenticating with public key "rsa-key-example"
Passphrase for key "rsa-key-example":
```

```console
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-47-generic x86_64)
```

Per un approccio più pratico, scopri come associare un file di chiave (tramite Pageant) e [salvare questa connessione](#sessions) nelle sezioni seguenti.

<a name="Pageant"></a>

#### Gestione delle chiavi SSH su un dispositivo locale con Pageant (PuTTY authentication agent)

Se si seguono le istruzioni sopra riportate, è possibile accedere all'host remoto tramite l'autenticazione a chiave. Anche se la connessione stessa non richiede una password, PuTTY richiederà sempre la password del file di chiave privata corrispondente.

![Pageant](/pages/assets/screens/other/web-tools/putty/pterminal.png){.thumbnail}

L'utilizzo di Pageant consente connessioni più rapide in due modi:

- Non è necessario selezionare il file di chiave privata per ogni connessione in PuTTY.
- È necessario immettere la frase segreta per il file di chiave privata una sola volta, quando il file di chiave viene aperto da Pageant.

Aprire l'applicazione Pageant [sulla workstation](#installation). Poiché la finestra della chiave Pageant non si apre automaticamente, è necessario fare doppio clic sulla relativa icona nella barra delle applicazioni (barra delle applicazioni o *system trial* in Windows).

![Pageant](/pages/assets/screens/other/web-tools/putty/systray.png){.thumbnail}

Verrà aperta la **Pageant Key List**. Clicca sul pulsante `Add Key`{.action} e seleziona il file della chiave privata (`keyfile.ppk`) nella cartella in cui è stato salvato.

![Pageant](/pages/assets/screens/other/web-tools/putty/pageant1.png){.thumbnail}

Immettere la frase segreta per il file di chiave. La chiave è ora nell'elenco e verrà utilizzata da PuTTY mentre Pageant è in esecuzione.

![Pageant](/pages/assets/screens/other/web-tools/putty/pageant2.png){.thumbnail}

Anche se si chiude questa finestra, Pageant continuerà ad essere eseguito in background. Funziona finché l'icona è presente nella barra delle applicazioni.

Se la connessione viene salvata anche come sessione in PuTTY come descritto nella sezione seguente, sarà possibile aprire connessioni remote in pochi clic.

<a name="sessionskeys"></a>

### Utilizzo delle sessioni di connessione PuTTY

PuTTY ha la possibilità di archiviare le impostazioni per diverse connessioni come sessioni, consentendo di stabilire una connessione all'host remoto (hosting Web, server, istanza, periferica di rete locale) più velocemente.

Selezionare il metodo di connessione appropriato:

/// details | Accedi con nome utente e password

Per archiviare una [sessione di accesso basata su password](#sshconnect1), eseguire le operazioni seguenti:

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions1.png){.thumbnail} |
|---| 
| 1\. Aprire PuTTY.<br> 2\. Inserisci le informazioni di connessione nel campo `Host Name (or IP address)`: **username@IPv4_server** (esempio: **ubuntu@203.0.113.101**)<br> 3\. Se necessario, modificare il numero di porta SSH nel campo in `Port`.<br> 4\. Immettere un nome per la connessione nel campo in `Saved Sessions`.<br> 5\. Clicca sul pulsante `Save`{.action}. |

Per aprire una connessione salvata in precedenza, eseguire le operazioni seguenti:

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions2.png){.thumbnail} |
|---| 
| 1\. Aprire PuTTY.<br> 2\. Fare doppio clic sulla sessione desiderata nell’elenco in `Saved Sessions` oppure selezionarla e fare clic sul pulsante `Open`{.action}. |

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions3.png){.thumbnail} |
|---|
| Nella finestra del terminale PuTTY, inserisci la password utente dell’host remoto. |

///

<a name="sessionskeys"></a>

/// details | Connessione con nome utente e chiavi di autenticazione

Per archiviare una [sessione di connessione basata su chiave](#puttykeys), eseguire le operazioni seguenti:

| ![putty](/pages/assets/screens/other/web-tools/putty/sessions4.png){.thumbnail} |
|---| 
| 1\. Aprire PuTTY.<br> 2\. Inserisci le informazioni di connessione nel campo `Host Name (or IP address)`: **username@IPv4_server** (esempio: **ubuntu@203.0.113.101**)<br> 3\. Se necessario, modifica il numero di porta SSH nel campo in `Port`. |

| ![putty](/pages/assets/screens/other/web-tools/putty/putty3.png){.thumbnail} |
|---|
| 4\. Espandere il nodo `SSH` in `Connection` nella struttura `Category`.<br> 5\. Espandere il nodo `Auth` nella struttura `Category`.<br> 6\. Fare clic su `Credentials` per visualizzare le impostazioni corrispondenti.<br> 7\. Clicca sul pulsante `Browse`{.action}.<br> 8\. Passare alla cartella in cui sono archiviati i file delle chiavi private.<br> 9\. Aprire il file di chiave in questione. |

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions5.png){.thumbnail} |
|---|
| 10\. Tornare alla categoria di configurazione `Session` nel menu di sinistra.<br> 11\. Immettere un nome per la connessione nel campo in `Saved Sessions`.<br> 12\. Clicca sul pulsante `Save`{.action}. |

<a name="qconnect"></a>

A questo punto è possibile aprire rapidamente qualsiasi connessione basata su chiave salvata in precedenza dalla finestra PuTTY o tramite Pageant:

| **PuTTY** | **Pageant** |
|---|---| 
| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions2.png){.thumbnail}<br> 1\. Aprire PuTTY.<br> 2\. Fare doppio clic sulla sessione desiderata nell'elenco in `Saved Sessions`. |![Pageant](/pages/assets/screens/other/web-tools/putty/pageant3.png){.thumbnail}<br> 1\. Fare clic con il pulsante destro del mouse sull'icona di Pageant nella barra delle applicazioni.<br> 2\. Fare clic sulla sessione desiderata nel sottomenu `Saved Sessions`. |

///

Per modificare le impostazioni di una sessione, selezionala nell’elenco e clicca sul pulsante `Load`{.action}.

<a name="example"></a>

### Esempio di utilizzo: come utilizzare gli strumenti PuTTY per configurare connessioni sicure ai server OVHcloud

Questa guida può essere applicata a diversi scenari e tipi di connessione.

Seguendo questi passaggi in sequenza, è possibile configurare le connessioni in modo che si aprano in pochi click:

- Step 1: [Installa il pacchetto PuTTY](#installation)
- Step 2: [Creare una coppia di chiavi in PuTTYgen](#puttygen)
- Step 3: [Aggiungi la chiave pubblica all’host remoto](#transferkeys)
- Step 4: [Aggiungi la chiave privata in Pageant](#pageant)
- Step 5: [Registra la connessione come sessione in PuTTY](#sessions)
- Step 6: [Connettersi all’host remoto tramite la sessione registrata corrispondente](#qconnect)

## Per saperne di più

[Introduzione a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Come creare chiavi SSH con OpenSSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Come creare chiavi SSH con OpenSSH per le istanze Public Cloud](/pages/public_cloud/compute/creating-ssh-keys-pci)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).