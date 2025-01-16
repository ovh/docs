---
title: Come creare e utilizzare chiavi di autenticazione per le connessioni SSH ai server OVHcloud
excerpt: Scopri come creare coppie di chiavi per OpenSSH sul tuo dispositivo locale e come utilizzarle per stabilire connessioni sicure al tuo server dedicato o al tuo VPS
updated: 2025-01-06
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

Il protocollo SSH permette di stabilire un canale di comunicazione sicuro sulle reti pubbliche in un'architettura client-server. È possibile utilizzare coppie di chiavi per autenticare le connessioni SSH tra due host trusted, ad esempio un computer desktop e un server remoto.

Un set di chiavi è costituito da una chiave pubblica che può essere condivisa e da una chiave privata che rimane segreta. La chiave pubblica è collocata su un server e permette a tutti i clienti che dispongono di una chiave privata di accedervi senza dover immettere una password.

Questo metodo di comunicazione è in genere il miglior compromesso tra sicurezza e convenienza.

**Informazioni su come creare e gestire coppie di chiavi di autenticazione sul dispositivo locale e utilizzarle per connettersi a server remoti.**

## Prerequisiti

- Disporre di un [server dedicato](/links/bare-metal/bare-metal) o di un [VPS](/links/bare-metal/vps) nel proprio account OVHcloud
- Applicazione di connessione da remoto compatibile con il protocollo OpenSSH

> [!primary]
> Questa guida non si applica alle connessioni ai sistemi operativi **Windows Server** standard, in quanto utilizzano di default il `Remote Desktop Protocol` (RDP). Le connessioni SSH vengono tuttavia utilizzate per la modalità Rescue di OVHcloud.
>
> Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther) di questa guida.
>

## Procedura

<a name="getstarted"></a>

Per maggiori informazioni, consulta le nostre guide "Iniziare a muovere i primi passi":

- per un [server dedicato](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server);
- per un [server dedicato della gamma Eco](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco);
- per un [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

### Creazione di coppie di chiavi per le connessioni OpenSSH

Le istruzioni seguenti spiegano come creare e gestire coppie di chiavi per le connessioni remote con **OpenSSH** in **riga di comando**. La maggior parte dei sistemi operativi esistenti include questa funzionalità senza la necessità di installare software aggiuntivo.

Se si preferisce un'interfaccia utente grafica, per ogni tipo di sistema operativo sono disponibili numerose applicazioni software che consentono di connettersi a host remoti tramite il protocollo OpenSSH.

Ad esempio, [PuTTY](https://putty.org/) è un software client SSH open source dotato di numerose funzionalità utili. Scopri come utilizzarlo per le connessioni ai server OVHcloud nella nostra guida:

- [Come utilizzare PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

> [!primary]
>
> Se vengono visualizzati messaggi di errore durante un tentativo di connessione, verificare che le informazioni e le impostazioni di connessione utilizzate siano corrette e che il sistema e le applicazioni installate siano aggiornati correttamente. Se ricevi un messaggio di avviso del tipo `REMOTE HOST IDENTIFICATION HAS CHANGED`, consulta la nostra [guida introduttiva a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>

#### Configurazione delle coppie di chiavi da una distribuzione GNU/Linux o macOS

/// details | Espandi questa sezione

Aprire l'applicazione da riga di comando (`Terminal`) sul dispositivo locale.

Verificare che nella directory `$HOME` sia presente una cartella denominata `.ssh`. Se la cartella non esiste, crearla:

```bash
mkdir ~/.ssh
```

Utilizzare il comando `ssh-keygen` per creare una coppia di chiavi. L'opzione `-t` specifica il metodo di crittografia.

> [!primary]
>
> `Ed25519` è considerato il metodo più sicuro, ma `RSA` è un’alternativa valida. Entrambi sono compatibili con lo Spazio Cliente OVHcloud se desideri [salvare le chiavi pubbliche nel tuo account cliente](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

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
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Se si conferma con `Entrata`{.action} senza immettere un nome, verrà utilizzato il nome file standard (in questo esempio, `id_rsa`).

Se si prevede di utilizzare più coppie di chiavi in futuro, immettere un nome di file univoco per identificare la chiave. Per ulteriori informazioni su questo argomento, vedere la sezione **Gestire più chiavi di autenticazione sul dispositivo locale**.

Gli output di esempio seguenti continueranno a utilizzare i nomi di file `id_rsa` e `id_rsa.pub` a scopo illustrativo.

È possibile proteggere la chiave SSH con una frase segreta al prompt successivo. Questo è consigliato per una maggiore sicurezza.

> [!warning]
>
> Quando si utilizzano le chiavi di autenticazione, l'accesso remoto al server è sicuro quanto il dispositivo client che memorizza la chiave privata. Per questo motivo, è fondamentale proteggere il dispositivo e i file chiave in esso contenuti dall'accesso non autorizzato.
>
> Per maggiore praticità e sicurezza, archivia le frasi segrete in un gestore di password sul tuo dispositivo, come la soluzione open source **KeePass**.
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

Copiare questa stringa di chiave per [aggiungerla a un nuovo server](#getstarted) o per [importarla nello Spazio Cliente](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

> [!primary]
>
> In un terminale **macOS**, potete utilizzare i comandi `pbcopy` e `pbpaste` per gestire le stringhe di chiave più velocemente. Ad esempio, utilizzare questo comando per copiare la chiave del file `id_rsa.pub` negli appunti:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

#### Gestire più chiavi di autenticazione sul dispositivo locale

È possibile utilizzare più coppie di chiavi SSH per connettersi a diversi host remoti o dispositivi LAN.

Poiché tutti i file chiave devono trovarsi nella cartella `.ssh` della directory `home` dell’utente, i nomi dei file devono essere diversi. Quando si crea una nuova coppia di chiavi e viene richiesto un nome di file, immettere il nome desiderato, ad esempio il nome del server.

Esempio di output:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

Durante la connessione al server corrispondente, specificare il nome del file della chiave privata oltre ai dettagli dell'utente e del server di connessione:

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Esempio:

```bash
ssh -i ~/.ssh/myServer_rsa ubuntu@203.0.113.100
```

##### Utilizzo del file "config"

L'alternativa all'aggiunta dell'opzione `-i` ogni volta è quella di modificare un file denominato `config` all'interno della cartella `~/.ssh`. Permette di configurare i dettagli delle diverse connessioni (nome utente, porta, file di chiave, impostazioni opzionali, ecc...)

Se il file esiste all'interno di `.ssh`, probabilmente contiene già delle informazioni. A seconda dell'ambiente di lavoro, è consigliabile creare innanzitutto una copia di backup dell'originale.

Esempio di output dell'elenco del contenuto della cartella `.ssh`:

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

Il file `config` permette di archiviare più connessioni SSH e i loro parametri individuali, oltre ai valori standard. Sfruttare il potenziale di questo file può diventare complesso, in quanto è particolarmente utile per gli utenti esperti che gestiscono più server.

Ecco un semplice esempio per configurare una connessione SSH a un server.  
Aprire il file e aggiungere le righe seguenti nella parte superiore:

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa
```

Assicurarsi di utilizzare l'indirizzo IP e il nome del file di chiave corretti. La prima riga, che inizia per `Host`, definisce il nome della connessione (`dedicated_server` in questo esempio).

Successivamente, è possibile connettersi al server sostituendo l’indirizzo IP del server con il nome alias che identifica la connessione (`Host`):

```bash
ssh username@connection_name
```

Esempio:

```bash
ssh ubuntu@dedicated_server
```

Nell'esempio precedente sono stati specificati solo l'IP del server e il file chiave, ma è possibile aggiungere ulteriori dettagli.  
Per configurare una connessione SSH a un secondo host remoto con il nome utente "rocky", la porta SSH modificata "49160" e la chiave privata nel file "myVPS_rsa", estendete il contenuto del file come indicato in questo esempio:

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa

Host vps
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myVPS_rsa
```

Dopodiché potrai accedere a questo secondo host inserendo:

```bash
ssh vps
```

Per maggiori informazioni sul file `config`, consulta la [pagina `man` corrispondente](https://manpages.org/ssh_config/5).

///


#### Come configurare coppie di chiavi su un dispositivo Windows

/// details | Espandi questa sezione

Aprire l'applicazione Prompt dei comandi digitando cmd nella barra di ricerca (o aprire PowerShell dal menu Start).

Aprire la directory `.ssh` dell'account utente di Windows corrente (percorso predefinito: `C:\Users\WindowsUsername\.ssh`):

```bash
cd .ssh
```

Utilizzare il comando `ssh-keygen` per creare una coppia di chiavi. L'opzione `-t` consente di specificare il metodo di crittografia.

> [!primary]
>
> `Ed25519` è considerato il metodo più sicuro, ma `RSA` è un’alternativa valida. Entrambi sono compatibili con lo Spazio Cliente OVHcloud se desideri [salvare le chiavi pubbliche nel tuo account cliente](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

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

Se si conferma con il tasto `Invio`{.action} senza immettere un nome, verrà utilizzato il nome file standard (in questo esempio, `id_rsa`).

Se si prevede di utilizzare più coppie di chiavi in futuro, immettere un nome di file univoco per identificare la chiave. Per ulteriori informazioni su questo argomento, vedere la sezione **Gestire più chiavi di autenticazione sul dispositivo locale**.

Gli output di esempio seguenti continueranno a utilizzare i nomi di file `id_rsa` e `id_rsa.pub` a scopo illustrativo.

È possibile proteggere la chiave SSH con una frase segreta al prompt successivo. Questo è consigliato per una maggiore sicurezza.

> [!warning]
>
> Quando si utilizzano le chiavi di autenticazione, l'accesso remoto al server è sicuro quanto il dispositivo client che memorizza la chiave privata. Per questo motivo, è fondamentale proteggere il dispositivo e i file chiave in esso contenuti dall'accesso non autorizzato.
>
> Per maggiore praticità e sicurezza, archivia le frasi segrete in un gestore di password sul tuo PC, come la soluzione open source **KeePass**.
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

È possibile aprire il file dei tasti utilizzando un editor di testo (Notepad, Notepad++ e così via). Da Esplora risorse di Windows, fare clic con il pulsante destro del mouse sul file e selezionare "Apri con".  
È inoltre possibile utilizzare uno dei comandi seguenti (nella directory `\Users\WindowsUsername\.ssh`):

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Copiare questa stringa di chiave per [aggiungerla a un nuovo server](#getstarted) o per [importarla nello Spazio Cliente](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

> [!primary]
>
> **Utilizzo degli Appunti**
>
> Quando si lavora da riga di comando **Windows**, utilizzare il pulsante destro del mouse per **incollare** il contenuto degli Appunti nella finestra della riga di comando. Per **copiare** una stringa dalla finestra della riga di comando, evidenziarla e premere `Invio`{.action}. Queste funzioni sono disponibili anche facendo clic con il pulsante destro del mouse sulla barra dei menu della finestra della riga di comando.
>

#### Gestire più chiavi di autenticazione sul dispositivo locale

È possibile utilizzare più coppie di chiavi SSH per connettersi a diversi host remoti o dispositivi LAN.

Poiché tutti i file chiave devono trovarsi nella cartella `.ssh` della directory utente di Windows, i nomi dei file devono essere diversi. Quando si crea una nuova coppia di chiavi e viene richiesto un nome di file, immettere un nome, ad esempio il nome del server.

Esempio di output:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in KeyFileName_rsa.
Your public key has been saved in KeyFileName_rsa.pub.
```

Durante la connessione al server corrispondente, specificare il nome del file della chiave privata oltre ai dettagli dell'utente e del server di connessione:

```bash
ssh -i C:\Users\Username\.ssh/KeyFileName user@IP_ADDRESS
```

Esempio:

```bash
ssh -i C:\Users\Username\.ssh/myServer_rsa ubuntu@203.0.113.100
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

Ecco un semplice esempio per configurare una connessione SSH a un server.
Aprire il file e aggiungere le righe seguenti nella parte superiore:

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa
```

Assicurarsi di utilizzare l'indirizzo IP e il nome del file di chiave corretti. La prima riga, che inizia per `Host`, definisce il nome della connessione (`dedicated_server` in questo esempio).

Successivamente connettiti al server sostituendo l'indirizzo IP del server con il nome alias che identifica la connessione (`Host`):

```bash
ssh username@connection_name
```

Esempio:

```bash
ssh ubuntu@dedicated_server
```

Nell'esempio precedente sono stati specificati solo l'IP del server e il file chiave, ma è possibile aggiungere ulteriori dettagli.  
Per configurare una connessione SSH a un secondo host remoto con il nome utente "rocky", la porta SSH modificata "49160" e la chiave privata nel file "myVPS_rsa", estendete il contenuto del file come indicato in questo esempio:

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile C:\Users\Username\.ssh/myServer_rsa

Host vps
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile C:\Users\Username\.ssh/myVPS_rsa
```

Dopodiché potrai accedere a questo secondo host inserendo:

```bash
ssh vps
```

Per maggiori informazioni sul file `config`, consulta la [pagina `man` corrispondente](https://manpages.org/ssh_config/5).

///


#### Aggiunta di chiavi pubbliche supplementari al tuo server

Per aggiungere l'autenticazione a chiave ad altri utenti che accedono al server, creare una nuova coppia di chiavi ma utilizzare la cartella `$HOME` o **Windows** `Users` appropriata per archiviare le chiavi di autenticazione (o eseguire i comandi sul dispositivo dedicato di tale persona).  
Aggiungere quindi la nuova stringa di chiave pubblica al server nel file `authorized_keys`, come descritto in precedenza.

#### Elimina le chiavi pubbliche del tuo server

Aprire il file `authorized_keys` sul server come descritto sopra, quindi eliminare la stringa di chiave corrispondente all'account utente il cui accesso viene revocato.

<a name="gofurther"></a>

## Per saperne di più

[Introduzione al protocollo SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Modalità Rescue su server dedicato](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Modalità Rescue su VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).