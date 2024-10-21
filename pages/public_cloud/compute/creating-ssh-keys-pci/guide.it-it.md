---
title: Come creare e utilizzare chiavi SSH per le istanze Public Cloud
excerpt: Scopri come creare coppie di chiavi SSH sul tuo dispositivo locale e utilizzarle per stabilire connessioni sicure alla tua istanza
updated: 2024-09-02
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

L’utilizzo del protocollo SSH apre un canale sicuro su una rete non protetta in un’architettura client-server, collegando un client SSH a un server SSH. La creazione di un key pack SSH permette di ottenere una chiave pubblica e una privata. È possibile memorizzare la chiave pubblica su un server e quindi connettersi a esso con un client che dispone della chiave privata corrispondente. Se le chiavi SSH pubblica e privata corrispondono, sarai connesso senza bisogno di una password.

Questo è generalmente il metodo di connessione più sicuro e pratico, oltre che il metodo predefinito sulle istanze Public Cloud.

**Questa guida ti mostra come creare e gestire chiavi SSH sul tuo dispositivo locale per accedere alle istanze Public Cloud.**

## Prerequisiti

- Un [progetto Public Cloud](/links/public-cloud/public-cloud) nel tuo account OVHcloud
- Applicazione client SSH (riga di comando o GUI)

> [!primary]
> Questa guida non si applica alle installazioni **Windows Server** standard, in quanto basate sul protocollo `Remote Desktop Protocol` (RDP) per le connessioni.
>
> Per maggiori informazioni consulta la nostra [guida sulla creazione di un'istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
>

## Procedura

Le istruzioni seguenti riguardano due metodi di utilizzo delle chiavi SSH:

- [Creazione di una coppia di chiavi **Open SSH** e connessione a un server dal client SSH da riga di comando](#openssh)
- [Creazione di una coppia di chiavi `PuTTY` e connessione a un server dal client SSH `PuTTY`](#useputty)

È possibile utilizzare entrambi i metodi contemporaneamente, ma tieni presente che `PuTTY` mantiene i file di chiave in un formato specifico, rendendoli incompatibili con i file di chiave SSH creati con il client **Open SSH**.

Una chiave privata creata con il client SSH da riga di comando dovrà essere prima [convertita in formato `PuTTY` e viceversa](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt).

<a name="openssh"></a>

#### Creazione da riga di comando di una coppia di chiavi SSH

Da un computer **Mac** o da una periferica su cui è installato un sistema operativo **Linux***, aprire l'applicazione da riga di comando (`Terminal`).

Verificare che nella directory `$HOME` sia presente una cartella denominata `.ssh`. Se la cartella non esiste, crearla:

```bash
mkdir ~/.ssh
```

In un sistema operativo **Windows*** corrente, aprire il prompt dei comand digitando "cmd" nella barra di ricerca (o aprire `PowerShell` dal menu).

Accedi alla directory `.ssh` dell’utente **Windows** attivo (di default: `C:\Users\WindowsUsername.ssh`):

```bash
cd .ssh
```

<a name="createnewkey"></a>

Utilizzare il comando seguente per creare una chiave RSA a 4096 bit:

```bash
ssh-keygen -b 4096
```

Utilizzando l'opzione `-t` con questo comando è possibile specificare un metodo di crittografia alternativo, ad esempio:

```bash
ssh-keygen -t ed25519 -a 256
```

La riga di comando richiede di salvare la chiave appena creata nel file standard:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

È possibile confermare con `Enter` per accettare il nome di file proposto oppure immettere un nome diverso. Ciò è rilevante se nella directory `.ssh` sono presenti più coppie di chiavi. Per maggiori informazioni, consulta la sezione [Gestire più chiavi SSH](#multiplekeys).  
In questo esempio vengono utilizzati i nomi file standard `id_rsa` e `id_rsa.pub`.

È possibile proteggere la chiave SSH con una frase segreta (*passphrase*) al prompt successivo. Questo è consigliato per una maggiore sicurezza.

> [!warning]
>
> L'accesso remoto al server è sicuro quanto il dispositivo client che memorizza la chiave privata. La protezione del tuo dispositivo e dei tuoi file contro gli accessi non autorizzati è fondamentale durante l'utilizzo delle chiavi SSH.
>
> Per motivi di praticità e sicurezza, ti consigliamo di utilizzare un gestore di password sul tuo dispositivo, come la soluzione open source "Keepass".
>

Tutte le chiavi SSH devono essere archiviate nella directory `.ssh`. I file di chiave pubblica avranno il suffisso `.pub` aggiunto al nome del file.

```console
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
| =o.o.  .   .    |
|o +   .  . o ..  |
|.. .  .   oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

<a name="publickey"></a>

Per visualizzare ed esportare la chiave pubblica, utilizza il comando `cat` sul file di chiave `.pub`. Copia questa stringa di chiave per [aggiungere a una nuova istanza](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) o per [importare nello Spazio Cliente OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

```bash
cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

> [!primary]
>
> In un terminale **macOS**, potete utilizzare i comandi `pbcopy` e `pbpaste` per gestire le stringhe di tasti più velocemente. Ad esempio, utilizzare questo comando per copiare la chiave del file `id_rsa.pub` negli appunti:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

In un sistema operativo **Windows**, aprire il file utilizzando `Notepad` da Esplora file (fare clic con il tasto destro sul file e selezionare `Apri con`) o utilizzare uno dei comandi seguenti (in `\Users\WindowsUsername\.ssh`):

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Copia questa stringa di chiave per [aggiungere a una nuova istanza](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) o per [importare nello Spazio Cliente OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

> [!primary]
>
> **Utilizzo degli appunti**
>
> Quando si lavora da riga di comando in **Windows**, fare un `clic destro` per **incollare** il contenuto degli appunti nella finestra della riga di comando. Per **copiare** una stringa dalla finestra della riga di comando, evidenziarla con il mouse e premere il tasto `Invio`. Queste funzioni sono disponibili anche con un `click destro` sulla barra dei menu.
>

<a name="useputty"></a>

#### Crea una coppia di chiavi SSH con PuTTY

[PuTTY](https://putty.org/){.external} è un client SSH open source con interfaccia grafica utente, disponibile per **Windows** e altri sistemi operativi. che fornisce software aggiuntivo per creare chiavi SSH: `PuTTY Key Generator` (`PuTTYgen`).

> [!primary]
>
> L’obiettivo principale di `PuTTY` è quello di gestire le connessioni SSH di un dispositivo client **Windows** verso un server **GNU/Linux**. `PuTTY` archivia i file di chiave in un formato specifico, rendendoli incompatibili con i file di chiave SSH creati con il client **Open SSH** inclusi nativamente nella maggior parte dei sistemi operativi moderni.
>
> Se necessario e come spiegato in precedenza in questa guida, le chiavi generate in *riga di comando* possono essere [convertite nel formato `PPK`](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt) per utilizzarle con il client `PuTTY`. Per un utilizzo più pratico delle chiavi SSH, scegli un’opzione e rispettala (chiavi private **Open SSH** o chiavi private `PuTTY`).
>

Se non è già installato (consulta la tua lista delle applicazioni o utilizza la funzione di ricerca), scarica `PuTTY` dal [sito ufficiale](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html){.external}. Il pacchetto di installazione standard consigliato contiene già `PuTTYgen`, ma è disponibile anche come file autonomo sul sito Web.

Aprire `PuTTYgen` e selezionare uno degli algoritmi di crittografia supportati. In questo esempio viene utilizzato RSA. Inserisci 4096 come numero di bit nell’angolo inferiore destro e clicca sul pulsante `Generate`{.action}.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_01.png){.thumbnail}

Spostare liberamente il cursore del mouse nell'area sotto la barra di avanzamento:

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_02.gif){.thumbnail}

La chiave è pronta quando la barra di avanzamento è piena.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_03.png){.thumbnail}

Copia questa stringa di chiave per [aggiungere a una nuova istanza](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) o per [importare nello Spazio Cliente OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

Salvare entrambe le chiavi come file facendo clic sui pulsanti corrispondenti e immettere anche una frase segreta (*passphrase*) per proteggerle.

> [!warning]
>
> L'accesso remoto all'istanza è sicuro quanto il dispositivo client che memorizza la chiave privata. La protezione del tuo dispositivo e dei tuoi file contro gli accessi non autorizzati è fondamentale durante l'utilizzo delle chiavi SSH.
>
> Per motivi di praticità e sicurezza, ti consigliamo di utilizzare un gestore di password sul tuo dispositivo, come la soluzione open source `KeePass`.
>

Uno dei vantaggi dell’utilizzo di `PuTTY` è la possibilità di salvare diverse connessioni con il nome di `Sessions`. Per maggiori informazioni, consulta la sezione [Gestione di più chiavi SSH sul tuo dispositivo locale](#puttykeys).

<a name="multiplekeys"></a>

### Gestione di più chiavi SSH sul tuo dispositivo locale

È possibile utilizzare più coppie di chiavi SSH per connettersi a diversi host remoti.

> [!primary]
>
> Se utilizzi `PuTTY`, vai alla sezione [corrispondente](#puttykeys) qui sotto.
>

Poiché tutte le chiavi devono trovarsi nella cartella `.ssh` dell'unità locale, i nomi dei file devono essere diversi. Quando [si crea una nuova coppia di chiavi](#createnewkey) e viene richiesto di specificare un nome di file, immettere il nome desiderato. Associalo al nome della tua istanza, ad esempio.

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

Quando ci si connette al server corrispondente, specificare il nome del file di chiave oltre ai dettagli dell'utente e del server:

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Esempio:

```bash
ssh -i ~/.ssh/myInstance_rsa ubuntu@203.0.113.100
```

Come indicato nelle sezioni precedenti, le stesse istruzioni funzioneranno su un client **Windows**. Sostituire solo `~/` con il percorso della cartella utente **Windows**, predefinito `C:\Users\WindowsUsername\`. Ad esempio: `ssh -i C:\Users\Username\.ssh/myInstance_rsa ubuntu@203.0.113.100`.

#### Tramite un file "config"

L'alternativa all'aggiunta dell'opzione `-i` ogni volta consiste nel modificare un file denominato `config` nella cartella `~/.ssh` (`\Users\Username\.ssh` per **Windows**). Permette di configurare i dettagli delle diverse connessioni (nome utente, porta, file di chiave, impostazioni opzionali, ecc...)

Se il file esiste in `.ssh`, probabilmente contiene già alcune informazioni. A seconda dell'ambiente di lavoro, valutare innanzitutto la possibilità di creare una copia di backup dell'originale.

Esempio di contenuto della cartella `.ssh`:

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

Con il file `config`, oltre ai valori standard, possono essere salvate diverse connessioni SSH con i loro parametri individuali. Sfruttare appieno il potenziale di questo file può diventare complesso, in quanto è particolarmente utile per gli utenti esperti che gestiscono più server su base regolare.

Ecco un semplice esempio per configurare una connessione SSH a un’istanza.

Aprire il file e aggiungere le righe seguenti nella parte superiore:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

Dopodiché potrai accedere all’istanza con il nome di alias che avrai definito come `Host`:

```bash
ssh ubuntu@instance
```

Nell'esempio precedente sono stati specificati solo l'IP del server e il file chiave, ma è possibile aggiungere ulteriori dettagli.  
Per configurare una connessione SSH a un secondo server con il nome utente "rocky", la porta SSH modificata "49160" e la chiave privata nel file "myserver_rsa", estendete il contenuto del file come indicato in questo esempio:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa

Host myserver
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myserver_rsa
```

Dopodiché potrai accedere a questo server inserendo:

```bash
ssh myserver
```

Per maggiori informazioni, consulta la [pagina `man` corrispondente](https://manpages.org/ssh_config/5).

<a name="puttykeys"></a>

#### Tramite PuTTY

`PuTTY` può salvare le credenziali e le impostazioni di una connessione SSH come `Session`. Inoltre, consente di connettersi a diversi server utilizzando chiavi singole.

Apri `PuTTY` e apri la sottosezione `SSH` nel menu a sinistra, poi clicca su `Auth` e `Credentials`.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_04.png){.thumbnail}

Clicca sul pulsante `Browse`{.action} e seleziona il file della chiave privata `PuTTY` (`keyfile.ppk`) nella cartella in cui è stato salvato.

Il file di chiave è associato alla sessione SSH in corso. Seleziona `Session` nel menu a sinistra e inserisci le credenziali di connessione al server (`username@IPv4_address`).

Immettere un nome per la connessione in `Saved Sessions` e fare clic su `Save`{.action} per aggiungerla alla lista.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_05.png){.thumbnail}

Da questo momento è possibile cliccare su questo elemento di `Session` e aprire una connessione al server. Per testarlo, clicca su `Open`{.action}. Se il file di chiave è stato protetto con una frase segreta, immetterla in questa fase.

#### Aggiunta di chiavi pubbliche supplementari all'istanza

Per aggiungere chiavi SSH ad altri utenti che accedono alla tua istanza, ripeti i passaggi di creazione della chiave ma utilizza la cartella `$HOME` o **Windows** `Users` dell’utente in questione per creare e archiviare le chiavi SSH (o eseguire i comandi sul dispositivo dedicato di questa persona).

Per una spiegazione dettagliata di questi passaggi, consulta la nostra [guida dedicata](/pages/public_cloud/compute/configuring_additional_ssh_keys).

<a name="gofurther"></a>

## Per saperne di più

[Creare un'istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Iniziare a utilizzare SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Configurazione di chiavi SSH aggiuntive su un'istanza](/pages/public_cloud/compute/configuring_additional_ssh_keys)

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](/links/professional-services) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra [Community di utenti](/links/community).