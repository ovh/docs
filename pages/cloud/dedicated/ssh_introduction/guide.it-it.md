---
title: Introduzione a SSH
slug: introduzione-ssh
excerpt: "Scopri come utilizzare le connessioni SSH per accedere al tuo server"
section: Per iniziare
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 08/06/2022**

## Obiettivo

Il protocollo di comunicazione SSH (Secure Shell) è lo strumento principale per stabilire connessioni host cifrate attraverso reti non sicure. OpenSSH è installato nativamente su tutti i server OVHcloud (VPS, server dedicati, istanze Public Cloud) per consentire connessioni sicure a server remoti e altre operazioni.

**Questa guida ti mostra come accedere al tuo server in modo sicuro grazie all'SSH.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
> OVHcloud mette a disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
>
> In caso di difficoltà durante l'esecuzione di queste azioni, ti invitiamo a contattare un professionista specializzato e/o a contattare la nostra Community di utenti all'indirizzo https://community.ovh.com/en/. OVHcloud non può fornirti assistenza tecnica al riguardo.
>

## Prerequisiti

- Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/) o di un [VPS](https://www.ovhcloud.com/it/vps/) sul proprio account OVHcloud
- Un'applicazione cliente SSH (da riga di comando o interfaccia grafica)

> [!primary]
> Questa guida non si applica alle installazioni standard di server Windows, in quanto basate sul protocollo di Desktop remoto (*Remote Desktop Protocol*) per le connessioni. Le connessioni SSH sono comunque utilizzate per la modalità Rescue OVHcloud. Per maggiori informazioni, consulta la sezione [Per saperne di più](#gofurther) di questa guida.
>

## Procedura

Esistono diversi metodi per autenticare una connessione a una periferica remota via SSH.<br>
Le istruzioni che seguono riguardano il metodo di autenticazione tramite nome utente e password.<br>
Puoi anche configurare chiavi SSH per attivare le connessioni sicure senza password. Per maggiori informazioni, consulta la nostra [guida sulle chiavi SSH](https://docs.ovh.com/it/dedicated/creare-chiave-ssh-dedicata/).

Le credenziali di accesso (identificativo e password) vengono inviate via email dopo l'installazione o la reinstallazione del server effettuata dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
Il nome utente corrisponde al sistema operativo, ad esempio `ubuntu` o `debian`.<br>
Per connetterti, devi specificare anche l'indirizzo IPv4 o l'hostname del server. Queste informazioni sono disponibili nell'email di installazione e nello Spazio Cliente OVH.

Ricordati di consultare anche le nostre guide "Iniziare a fare":

- Per un [server dedicato](https://docs.ovh.com/it/dedicated/iniziare-a-utilizzare-server-dedicato/)
- Per un [server dedicato della gamma di prodotti **Eco**](https://docs.ovh.com/it/dedicated/getting-started-dedicated-server-eco/)
- Per un [VPS](https://docs.ovh.com/it/vps/iniziare-a-utilizzare-vps/)

### Connessione da una distribuzione GNU/Linux o macOS

Un client da riga di comando SSH (OpenSSH) è generalmente disponibile di default. Apri l'applicazione Terminal e accedi al server utilizzando questo comando:

```bash
ssh username@server_IP
```

Se la porta SSH del server non è la porta standard, esegui questo comando:

```bash
ssh username@server_IP -p port_number
```

### Connessione da una postazione Windows 10/11

Le ultime versioni di Windows includono nativamente OpenSSH per le connessioni dal Powershell o dal prompt dei comandi.

Clicca con il tasto Avvia Windows e seleziona `Windows PowerShell`{.action}. È inoltre possibile utilizzare il campo di ricerca per avviare uno di questi programmi.

![PowerShell](images/windowsps.png){.thumbnail}

Accedi al server con questo comando:

```bash
ssh username@server_IP
```

Se la porta SSH del server non è la porta standard, utilizza questo comando:

```bash
ssh username@server_IP -p port_number
```

### Connessione e fingerprint

Quando ti viene chiesto di inserire una password, inserisci quella dell'utente che si connette e clicca su `Enter`.

Se si tratta di una nuova connessione, il tuo client SSH riceverà un'impronta di chiave (*fingerprint*) del server. Inserisci "yes" per confermare e poi la password dell'utente che si connette.


```bash
ssh ubuntu@169.254.10.254
```
```console
The authenticity of host '169.254.10.254 (169.254.10.254)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '169.254.10.254' (ECDSA) to the list of known hosts.
ubuntu@169.254.10.254's password:
```

L'impronta della chiave viene poi registrata sul tuo dispositivo e verificata ad ogni nuova connessione. Se la chiave è cambiata sull'host remoto, visualizzi un messaggio di avvertimento quando cerchi di connetterti, ad esempio:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in /home/user/.ssh/known_hosts:3
```

Ciò significa che si è verificata una delle seguenti situazioni:

- Il server è stato reinstallato.
- Il servizio SSH sul server è stato reinstallato.
- Accedi a un altro host con lo stesso indirizzo IP.

> [!primary]
> Il messaggio di avvertimento non indica necessariamente un problema di sicurezza. Tuttavia, se non ti viene chiesto di attivarti in una di queste situazioni, il server remoto può essere compromesso.
>

Per risolvere il problema, utilizza questo comando con l'indirizzo IP del tuo server:

```bash
ssh-keygen -f ~/.ssh/known_hosts -R 169.254.10.254
```

Puoi anche aprire il file `known_hosts` nella tua cartella personale tramite un editor di testo ed eliminare la riga "offending" specificata nel messaggio di avviso:

```bash
nano ~/.ssh/known_hosts
```

Salva le modifiche e lascia l'editor. La nuova impronta della chiave deve essere accettata al momento della prossima connessione al server.

Con Windows, sono specificati anche la posizione del file `known_hosts` e la riga da eliminare, ad esempio:

```console
Offending ECDSA key in C:\\Users\\YourWindowsUser/.ssh/known_hosts:3
```

Accedi a questa cartella, clicca con il tasto destro sul file e apri con l'applicazione Blocco note.

![known_hosts](images/windowskh.png){.thumbnail}

Elimina la linea in questione, in questo caso la terza. Salva le modifiche e lascia l'editor. La nuova impronta della chiave deve essere accettata al momento della prossima connessione al server.

### Utilizzo di client grafici o software compatibili con SSH

Per ogni tipo di sistema operativo, numerosi software consentono di connettersi al server tramite il protocollo SSH. 

Ad esempio, [PuTTY](https://putty.org/){.external} per Windows è un client SSH open source dotato di interfaccia grafica. È stato installato anche su altre piattaforme ed è disponibile tramite [il sito ufficiale](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), i gestori di pacchetti software e via [Homebrew](https://brew.sh/).

Avvia PuTTY e inserisci l'indirizzo IP del server. Specifica il numero della porta se la porta standard non è utilizzata. Clicca su `Open`{.action} per accedere Ti verrà richiesto un nome utente e una password.

![PuTTY](images/putty_01.png){.thumbnail}

Uno dei vantaggi di PuTTY è la possibilità di salvare diverse sessioni. Inserisci le informazioni di connessione nel campo `Saved Session` e clicca su `Save`{.action}.

![PuTTY](images/putty_02.png){.thumbnail}

Come al solito, al primo collegamento viene visualizzato l’avviso di presenza dell’impronta. Clicca su `Accept`{.action} per registrare l'impronta della chiave o seleziona `Connect Once`{.action}.

![PuTTY](images/putty_03.png){.thumbnail}

Per maggiori informazioni, consulta le FAQ ufficiali e la documentazione di PuTTY.

## Spingiti oltre <a name="gofurther"></a>

[Crea chiavi SSH](https://docs.ovh.com/it/dedicated/creare-chiave-ssh-dedicata/)

[Modalità Rescue server dedicato](https://docs.ovh.com/it/dedicated/rescue_mode/)

[VPS modalità Rescue](https://docs.ovh.com/it/vps/rescue/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
