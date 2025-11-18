---
title: "Hosting Web - Come utilizzare l’accesso SSH"
excerpt: "Questa guida ti mostra come effettuare l’accesso e utilizzare il protocollo SSH sul tuo hosting Web OVHcloud."
updated: 2025-09-08
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

Le soluzioni di hosting Web OVHcloud offrono uno spazio di storage in cui è possibile pubblicare i file del sito Internet o delle applicazioni. L’accesso a questo spazio è possibile tramite le credenziali FTP o SSH.

**Questa guida ti mostra come utilizzare il protocollo SSH per accedere al tuo hosting Web OVHcloud.**

## Prerequisiti

- Disporre di una soluzione [hosting Web OVHcloud](/links/web/hosting) con accesso SSH
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager), sezione `Web Cloud`{.action}

> [!warning]
> 
> L'accesso SSH a un hosting Web OVHcloud è possibile a partire da [l'offerta Pro](/links/web/hosting-compare).

## Procedura

Per accedere e utilizzare l’accesso SSH di un hosting Web sono necessari:

- utente SSH attivo;
- la password associata all’utente SSH;
- indirizzo del server SSH dell’hosting Web;
- la porta di connessione al server SSH del tuo hosting Web.

### 1 - Assicurati che l’utente SSH scelto disponga dell’accesso SSH <a name="user-ssh-enablement"></a> attivo

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella nuova pagina clicca sulla scheda `FTP - SSH`{.action}. 
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Nella nuova pagina, visualizzi le informazioni relative allo spazio di storage.
>>
>> Nella tabella, individua la colonna `SSH` per verificare che l’utente SSH (presente nella colonna `Login` della tabella) interessato disponga di un accesso SSH attivo. In caso contrario, comparirà la voce `Disattivato`.
>>
>> ![usessh](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-ssh.png){.thumbnail}
>>
>> Se l’accesso SSH dell’utente interessato è `Disattivato` nella tabella, effettuate le seguenti operazioni:
>>
>> - 1: Clicca sul pulsante `...`{.action} a destra della riga corrispondente all’utente e poi su `Modificare`{.action}.
>> - 2: Nella nuova finestra, sezione `Protocolli di connessione`, seleziona la voce `FTP, SFTP e SSH`{.action} e clicca su `Continua`{.action}.
>> - 3: Controlla il riepilogo della modifica richiesta e clicca su `Conferma`{.action}.
>>
>> > Se non hai la possibilità di attivarlo, assicurati che [la tua soluzione di hosting Web OVHcloud](/links/web/hosting) disponga di un accesso SSH.

#### 2 - Recupera le informazioni necessarie per accedere in SSH <a name="sshlogin"></a>

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella nuova pagina clicca sulla scheda `FTP - SSH`{.action}. 
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Nella nuova pagina, recupera gli elementi descritti nella tabella seguente:
>>
>> |Element|Descrizione|
>> |---|---| 
>> |**Indirizzo del server SSH**| Individua la voce `Server SSH`. Si presenta in forma `ssh.clusterXXX.hosting.ovh.net` (dove ognuno dei 3 `X` corrisponde ad una cifra compresa tra `0` e `9`).|
>> |**Porta di connessione al server SSH**| Individua la voce `Porta SSH`. Di default, il numero della porta SSH è `22`.|
>> |**Utente SSH attivo**| Nella tabella in fondo alla pagina, trovatelo nella colonna `Login`.<br>Ricordiamo che questo utente deve [disporre di un accesso SSH attivo](#user-ssh-enablement).|
>> |**Password utente SSH**| Se hai dimenticato questa password, clicca sul pulsante `...`{.action} a destra della riga corrispondente all’utente in questione nella tabella situata in fondo alla pagina e poi su `Modificare la password`{.action}.|

### 3 - Accedi in SSH allo spazio di storage del tuo hosting Web

Per connetterti in SSH, utilizza un terminale per interagire direttamente con lo spazio di storage tramite riga di comando.

> [!primary]
>
> I terminali di comando sono installati di default su macOS, Linux e Windows 10. Un ambiente Windows meno recente richiederà l'installazione di un software come [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) o l'aggiunta della funzionalità OpenSSH.

Esistono quindi due possibilità per connettersi in SSH al proprio hosting Web. 

**Fare clic di seguito sul metodo di connessione desiderato per visualizzare la spiegazione.**

/// details | Da un terminale

> [!warning]
>
> Non esiste un accesso "super utente" (o "root") via SSH sulle nostre offerte di hosting condiviso.

Una volta aperto il terminale, utilizza il comando seguente sostituendo gli elementi `yourlogin`, `ssh.clusterXXX.hosting.ovh.net` e `22` con le tue credenziali SSH.

```bash
ssh yourlogin@ssh.clusterXXX.hosting.ovh.net -p 22
```

Una volta eseguito il comando, il sistema chiederà di inserire la password dell’utente SSH.

![usessh](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-login.png){.thumbnail}

///

/// details | Da un software

Una volta aperto il software (PuTTY ad esempio), inserisci le informazioni di connessione SSH. Questa operazione varia in base al client che utilizzi, pertanto non possiamo entrare in ulteriori dettagli in questa guida. Ti ricordiamo le informazioni da inserire:

- **Server SSH**: Indica l’indirizzo del server SSH recuperato nella [parte 2](#sshlogin). In base al client utilizzato, potrebbe chiamarsi: "Indirizzo del server", "Hostname" o "Host Name".
- **Porta di connessione**: inserisci la porta di connessione SSH recuperata nella [parte 2](#sshlogin).
- **Login SSH**: Inserisci l’utente SSH. In base al client utilizzato, potrebbe chiamarsi: "Nome utente", "Identificativo", "Login" oppure "Username".
- **Password utente SSH**: Inserisci la password associata al login SSH.

///

Una volta effettuato l’accesso, passa alla sezione successiva.

### 4 - Interagisci in SSH con il tuo spazio di storage <a name="ssh-using"></a>

Per interagire con lo spazio di storage è necessario utilizzare alcuni comandi. il cui significato deriva dall'inglese. Se necessario, consulta la lista qui sotto. Attenzione, **questa non è esaustiva**.

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

Puoi anche avviare uno script utilizzando una versione specifica di PHP. Ad esempio, per la versione di PHP 7.1, utilizza il comando seguente. Adattane gli elementi alla tua situazione personale.

```sh
/usr/local/php7.1/bin/php myscript.php
```

In base alla versione di PHP che vuoi utilizzare, potrebbe essere necessario modificare l’ambiente di esecuzione per motivi di compatibilità. Per maggiori informazioni, consulta la nostra documentazione "[Hosting Web - Ambiente, versione PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)".

> [!primary]
>
> È anche possibile copiare file e/o cartelle utilizzando **S**ecure **C**opy **P**rotocol (**SCP**).
> Questo protocollo utilizza il protocollo SSH per replicare i contenuti in modo sicuro tra:
>
> - un computer/dispositivo locale e un server remoto
> - due server remoti
>
> Per maggiori informazioni sull’utilizzo del comando `scp` con i nostri hosting Web OVHcloud, consulta la nostra guida "[Hosting Web - Copiare file con il comando SCP](/pages/web_cloud/web_hosting/using-scp-command)".

## Per saperne di più

[Hosting Web - Ambiente, versione PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).