---
title: "Come creare e utilizzare chiavi di autenticazione per le connessioni SSH alle istanze Public Cloud"
excerpt: "Scopri come creare coppie di chiavi per OpenSSH sul tuo dispositivo locale e utilizzarle per stabilire connessioni sicure alla tua istanza"
updated: 2024-12-09
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

Il protocollo SSH permette un canale di comunicazione sicuro sulle reti pubbliche in un'architettura client-server. È possibile utilizzare coppie di chiavi per autenticare le connessioni SSH tra due host trusted, ad esempio un computer desktop e un server remoto.

Un set di chiavi è costituito da una chiave pubblica che può essere condivisa e da una chiave privata che rimane segreta. La chiave pubblica è collocata su un server e permette a tutti i clienti che dispongono di una chiave privata di accedervi senza dover immettere una password.

Questo metodo rappresenta in genere il miglior compromesso tra sicurezza e praticità e il valore predefinito per le istanze Public Cloud.

**Questa guida ti mostra come creare e gestire coppie di chiavi di autenticazione sul tuo dispositivo locale e come utilizzarle per connettersi a istanze Public Cloud.**

## Prerequisiti

- Un [progetto Public Cloud](/links/public-cloud/public-cloud) nel tuo account OVHcloud
- Applicazione di connessione da remoto compatibile con il protocollo OpenSSH

> [!primary]
> Questa guida non si applica alle connessioni ai sistemi operativi **Windows Server** standard, in quanto utilizzano di default il `Remote Desktop Protocol` (RDP).
>
> Per maggiori informazioni consulta la nostra [guida sulla creazione di un'istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
>

## Procedura

### Creazione di coppie di chiavi per le connessioni OpenSSH

Nelle istruzioni seguenti viene descritto come creare e gestire coppie di chiavi per connessioni remote con **OpenSSH** dalla **riga di comando**. La maggior parte dei sistemi operativi esistenti include questa funzionalità senza la necessità di installare software aggiuntivo.

Se si preferisce un'interfaccia utente grafica, è possibile trovare numerose applicazioni software per ogni tipo di sistema operativo che consentono di connettersi a host remoti tramite il protocollo OpenSSH.

Ad esempio, [PuTTY](https://putty.org/) è un software client SSH open source dotato di numerose funzionalità utili. Scopri come utilizzarlo per le connessioni ai server e alle istanze OVHcloud nella nostra guida:

- [Come utilizzare PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

> [!primary]
>
> Se vengono visualizzati messaggi di errore durante un tentativo di connessione, verificare che vengano utilizzate le impostazioni e le informazioni di connessione corrette e che il sistema e le applicazioni installate siano aggiornati correttamente. Se ricevi un messaggio di avviso del tipo `REMOTE HOST IDENTIFICATION HAS CHANGED`, consulta la nostra [guida introduttiva a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>

#### Configurazione delle coppie di chiavi da una distribuzione GNU/Linux o macOS

Espandi questa sezione

Aprire l'applicazione da riga di comando (`Terminal`) sul dispositivo locale.

Verificare che nella directory `$HOME` sia presente una cartella denominata `.ssh`. Se la cartella non esiste, crearla:

```bash
mkdir ~/.ssh
```

Utilizzare il comando `ssh-keygen` per creare una coppia di chiavi. L'opzione `-t` consente di specificare il metodo di crittografia.

> [!primary]
>
> `Ed25519` è considerato il più sicuro, ma `RSA` è un’alternativa valida. Entrambi i metodi sono compatibili con lo [Spazio Cliente OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps).

Esempi:

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

Il prompt dei comandi seguente consente di assegnare un nome alla chiave appena creata o di utilizzare il nome file standard:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Se confermi utilizzando il pulsante `Enter`{.action} senza immettere un nome, verrà utilizzato il nome file standard (in questo esempio, `id_rsa`).

Se si prevede di utilizzare più coppie di chiavi in futuro, immettere un nome di file univoco per identificare la chiave. Per ulteriori informazioni, vedere la sezione **Gestione di più chiavi di autenticazione nel dispositivo locale**.

Gli output di esempio seguenti continueranno a utilizzare i nomi di file `id_rsa` e `id_rsa.pub` a scopo illustrativo.

È possibile proteggere la chiave SSH con una frase segreta al prompt successivo. Questo è consigliato per una maggiore sicurezza.

> [!warning]
>
> L'accesso remoto all'istanza è sicuro quanto il dispositivo client che memorizza la chiave privata. È pertanto fondamentale proteggere il dispositivo e i file chiave in esso contenuti dall'accesso non autorizzato.
>
> Per maggiore praticità e sicurezza, archivia le frasi segrete in un gestore di password sul tuo PC, come la soluzione open source **KeePass**.
>

Tutte le chiavi SSH sono archiviate nella directory `.ssh` di default. I file di chiave pubblica avranno `.pub` aggiunto al nome del file.

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

Per visualizzare ed esportare la chiave pubblica, utilizzare il comando `cat` nel file di chiave `.pub` o aprirlo con un editor di testo.

```bash
cat ~/.ssh/id_rsa.pub
```

```console
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

Copia questa stringa di chiave per [aggiungerla a una nuova istanza o importarla nello Spazio Cliente](/pages/public_cloud/compute/public-cloud-first-steps).

> [!primary]
>
> In un terminale **macOS**, potete utilizzare i comandi `pbcopy` e `pbpaste` per gestire le stringhe di chiave più velocemente. Ad esempio, utilizzare questo comando per copiare la chiave del file `id_rsa.pub` negli appunti:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

#### Gestione di più chiavi di autenticazione sul dispositivo locale

È possibile utilizzare più coppie di chiavi SSH per connettersi a diversi host remoti o dispositivi LAN.

Poiché tutti i file chiave devono trovarsi nella cartella `.ssh` della directory `home` dell'utente, i nomi dei file devono essere diversi. Quando si crea una nuova coppia di chiavi e viene richiesto un nome di file, immettere un nome di propria scelta, ad esempio il nome dell'istanza.

Esempio di output:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

Quando ci si connette all'istanza corrispondente, specificare il nome del file della chiave privata oltre ai dettagli dell'utente e del server di connessione:

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Esempio:

```bash
ssh -i ~/.ssh/myInstance_rsa ubuntu@203.0.113.100
```

##### Utilizzo del file "config"

L'alternativa all'aggiunta dell'opzione `-i` ogni volta è quella di modificare un file denominato `config` all'interno della cartella `~/.ssh`. Permette di configurare i dettagli delle diverse connessioni (nome utente, porta, file di chiave, impostazioni opzionali, ecc...)

Se il file esiste all'interno di `.ssh`, probabilmente contiene già delle informazioni. A seconda dell'ambiente di lavoro, è consigliabile creare innanzitutto una copia di backup dell'originale.

Esempio di output per la visualizzazione del contenuto della cartella `.ssh`:

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

Il file `config` permette di archiviare più connessioni SSH e i loro parametri individuali, oltre ai valori standard. Sfruttare appieno il potenziale di questo file può diventare complesso, in quanto è particolarmente utile per gli utenti esperti che gestiscono più server.

Ecco un semplice esempio per configurare una connessione SSH a un’istanza.  
Aprire il file e aggiungere le righe seguenti nella parte superiore:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

Assicurarsi di utilizzare l'indirizzo IP e il nome del file di chiave corretti. La prima riga, che inizia per `Host`, definisce il nome della connessione (`instance` in questo esempio).

Per accedere all’istanza, sostituisci l’indirizzo IP dell’istanza con il nome alias che identifica la connessione (`Host`):

```bash
ssh username@connection_name
```

Esempio:

```bash
ssh ubuntu@instance
```

Nell'esempio precedente sono stati specificati solo l'IP dell'istanza e il file chiave, ma è possibile aggiungere ulteriori dettagli.  
Per configurare una connessione SSH a un secondo host remoto con il nome utente "rocky", la porta SSH modificata "49160" e la chiave privata nel file "myserver_rsa", estendete il contenuto del file come indicato in questo esempio:

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

Dopodiché potrai accedere a questo secondo host inserendo:

```bash
ssh myserver
```

Per maggiori informazioni sul file `config`, consulta la [pagina `man` corrispondente](https://manpages.org/ssh_config/5).

///


#### Configurazione delle coppie di chiavi da un dispositivo Windows

/// details | Espandi questa sezione

Aprire l'applicazione `Prompt dei comandi` digitando "cmd" nella barra di ricerca (o aprire PowerShell dal menu `Start`{.action}).

Aprire la directory `.ssh` dell'account utente di Windows corrente (percorso predefinito: `C:\Users\WindowsUsername\.ssh`):

```bash
cd .ssh
```

Utilizzare il comando `ssh-keygen` per creare una coppia di chiavi. L'opzione `-t` consente di specificare il metodo di crittografia.

> [!primary]
>
> `Ed25519` è considerato il più sicuro, ma `RSA` è un’alternativa valida. Entrambi i metodi sono compatibili con lo [Spazio Cliente OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps).

Esempi:

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

Il prompt seguente consente di assegnare un nome alla chiave appena creata o di utilizzare il nome file standard:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa):
```

Se si conferma con il tasto `Enter`{.action} senza immettere un nome, verrà utilizzato il nome file standard (in questo esempio, `id_rsa`).

Se si prevede di utilizzare più coppie di chiavi in futuro, immettere un nome di file univoco per identificare la chiave. Per ulteriori informazioni, vedere la sezione **Gestione di più chiavi di autenticazione nel dispositivo locale**.

Gli output di esempio seguenti continueranno a utilizzare i nomi di file `id_rsa` e `id_rsa.pub` a scopo illustrativo.

È possibile proteggere la chiave SSH con una frase segreta al prompt successivo. Questo è consigliato per una maggiore sicurezza.

> [!warning]
>
> L'accesso remoto all'istanza è sicuro quanto il dispositivo client che memorizza la chiave privata. È pertanto fondamentale proteggere il dispositivo e i file chiave in esso contenuti dall'accesso non autorizzato.
>
> Per maggiore praticità, archivia le frasi segrete in un gestore di password sulla tua postazione di lavoro, come la soluzione open source **KeePass**.
>

Tutte le chiavi SSH sono archiviate nella directory `.ssh` di default. I file di chiave pubblica avranno `.pub` aggiunto al nome del file.

```console
Your identification has been saved in id_rsa.
Your public key has been saved in id_rsa.pub.
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

È possibile aprire il file di chiave utilizzando un editor di testo (Notepad, Notepad++ e così via). Da Esplora risorse di Windows, clicca con il tasto destro sul file e seleziona `Apri con`{.action}.

È inoltre possibile utilizzare uno dei comandi seguenti (nella directory `\Users\WindowsUsername\.ssh`):

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Copia questa stringa di chiave per [aggiungerla a una nuova istanza o importarla nello Spazio Cliente](/pages/public_cloud/compute/public-cloud-first-steps).

> [!primary]
>
> **Utilizzo degli Appunti**
>
> Quando si utilizza una riga di comando **Windows**, è possibile utilizzare un clic destro per **incollare** il contenuto degli Appunti nella finestra della riga di comando. Per **copiare** una stringa dalla finestra della riga di comando, evidenziarla e premere `Enter`{.action}. Queste funzioni sono disponibili anche facendo clic con il pulsante destro del mouse sulla barra dei menu della finestra della riga di comando.
>

#### Gestione di più chiavi di autenticazione sul dispositivo locale

È possibile utilizzare più coppie di chiavi SSH per connettersi a diversi host remoti o dispositivi LAN.

Poiché tutti i file chiave devono trovarsi nella cartella `.ssh` della directory utente di Windows, i nomi dei file devono essere diversi. Quando si crea una nuova coppia di chiavi e viene richiesto un nome di file, digitare il nome desiderato, ad esempio il nome dell'istanza.

Esempio di output:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in KeyFileName_rsa.
Your public key has been saved in KeyFileName_rsa.pub.
```

Quando ci si connette all'istanza corrispondente, specificare il nome del file della chiave privata oltre ai dettagli dell'utente e del server di connessione:

```bash
ssh -i C:\Users\Username\.ssh/KeyFileName user@IP_ADDRESS
```

Esempio:

```bash
ssh -i C:\Users\Username\.ssh/myInstance_rsa ubuntu@203.0.113.100
```

##### Utilizzo del file "config"

L’alternativa all’aggiunta dell’opzione `-i` ogni volta è modificare un file denominato `config` all’interno della cartella `C:\Users\Username\.ssh`. Permette di configurare i dettagli delle diverse connessioni (nome utente, porta, file di chiave, impostazioni opzionali, ecc...)

Se il file esiste all'interno di `.ssh`, probabilmente contiene già delle informazioni. A seconda dell'ambiente di lavoro, è consigliabile creare innanzitutto una copia di backup dell'originale.

Esempio di output dell'elenco del contenuto della cartella `.ssh`:

```bash
C:\Users\Username\.ssh>dir /B
```

```console
config
id_rsa
id_rsa.pub
known_hosts    
known_hosts.old
```

Il file `config` permette di archiviare più connessioni SSH e i loro parametri individuali, oltre ai valori standard. Sfruttare il potenziale di questo file può diventare complesso, in quanto è particolarmente utile per gli utenti esperti che gestiscono più server.

Ecco un semplice esempio per configurare una connessione SSH a un’istanza.  
Aprire il file e aggiungere le righe seguenti nella parte superiore:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

Assicurarsi di utilizzare l'indirizzo IP e il nome del file di chiave corretti. La prima riga, che inizia per `Host`, definisce il nome della connessione (`instance` in questo esempio).

Per accedere all’istanza, sostituisci l’indirizzo IP dell’istanza con il nome alias che identifica la connessione (`Host`):

```bash
ssh username@connection_name
```

Esempio:

```bash
ssh ubuntu@instance
```

Nell'esempio precedente sono stati specificati solo l'IP dell'istanza e il file di chiave privata, ma è possibile aggiungere ulteriori dettagli.

Per configurare una connessione SSH a un secondo host remoto con il nome utente "rocky", la porta SSH modificata "49160" e la chiave privata nel file "myserver_rsa", estendete il contenuto del file come indicato in questo esempio:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile C:\Users\Username\.ssh/myInstance_rsa

Host myserver
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile C:\Users\Username\.ssh/myserver_rsa
```

Dopodiché potrai accedere a questo secondo host inserendo:

```bash
ssh myserver
```

Per maggiori informazioni sul file `config`, consulta la [pagina `man` corrispondente](https://manpages.org/ssh_config/5).

///


### Aggiunta di chiavi pubbliche supplementari a un'istanza in esecuzione

Per aggiungere chiavi SSH ad altri utenti che accedono alla tua istanza, ripeti i passaggi di creazione della chiave ma utilizzi la cartella `$HOME` o la directory Windows `Users` dell’utente in questione per creare e archiviare le chiavi SSH (o eseguire i comandi sul dispositivo dedicato di questa persona).

Per una spiegazione dettagliata di questi passaggi, consulta la nostra [guida specifica](/pages/public_cloud/compute/configuring_additional_ssh_keys).

## Per saperne di più

[Come creare un’istanza Public Cloud e connettersi ad essa](/pages/public_cloud/compute/public-cloud-first-steps)

[Come eseguire le prime operazioni sulle connessioni SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Come configurare chiavi SSH aggiuntive su un’istanza](/pages/public_cloud/compute/configuring_additional_ssh_keys)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).