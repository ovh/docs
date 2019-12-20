---
title: 'Installare Ghost su un hosting Cloud Web'
slug: installare-ghost-cloud-web
excerpt: 'Come creare un blog con la piattaforma Ghost sul tuo hosting Cloud Web'
section: Tutorial
order: 1
---

## Introduzione

[Ghost](https://ghost.org/){.external} è una piattaforma di blogging open source sviluppata per semplificare il processo di pubblicazione di contenuti online da parte di blogger e giornalisti. Scritto in JavaScript, questo programma utilizza [Node.js](https://nodejs.org/){.external}, un framework che consente di creare siti e API in JavaScript lato server.

Gli [hosting Cloud Web OVH](https://www.ovh.it/hosting-web/cloud-web.xml){.external} permettono di utilizzare Node.js come motore di esecuzione per i siti Web consentendo quindi l’installazione e l’hosting di Ghost o qualsiasi altra applicazione sviluppata per Node.js.

**Questo tutorial ti mostra come utilizzare Ghost per creare un blog su un hosting Cloud Web OVH e pubblicarlo con il tuo dominio.**

## Prerequisiti

### Competenze necessarie

- Conoscenze di base dell’ecosistema Node.js
- Saper effettuare un accesso via SSH
- Saper modificare un file da riga di comando utilizzando editor come Vim, Emacs o Nano

### Hardware e software necessari

- Disporre di un [hosting Cloud Web](https://www.ovh.it/hosting-web/cloud-web.xml){.external} attivo
- Aver impostato Node.js come motore di esecuzione
- Aver aggiunto il dominio in questione come multisito e definito Node.js come motore di esecuzione associato
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Web`{.action}

## Procedura

### Step 1: attiva Node.js come motore di esecuzione

Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, seleziona il tuo servizio Cloud Web nella sezione `Hosting`{.action} nel menu a sinistra  e clicca sulla scheda `Programma di esecuzione`{.action}.

Visualizzi una tabella con tutti i motori di esecuzione aggiunti alla tua soluzione: assicurati che Node.js sia attivo. Se il motore risulta abilitato passa direttamente allo [Step 2: associa Node.js a un multisito](./#step-2-associa-nodejs-a-un-multisito).

![ghostcloudweb](images/ghost-cloud-web-step1.png){.thumbnail}

In caso contrario aggiungine uno (se la tua offerta lo consente) o modifica quello esistente.

- Per **aggiungere un motore**, clicca sul pulsante `Azioni`{.action} in alto a sinistra della tabella e seleziona l’opzione `Aggiungi un programma di esecuzione`{.action}
- Per **modificare un motore**, clicca sul pulsante `...`{.action} in corrispondenza del motore in questione e seleziona l’opzione `Modifica`{.action}

Nella nuova finestra, completa i campi con i valori indicati nel nostro esempio oppure adattali al tuo caso specifico.

|Campo|Valore da inserire| 
|---|---| 
|Nome personalizzato|NodeJS 8|
|Programma di esecuzione|nodejs-8|
|Percorso per l’accesso alla directory pubblica|public|
|Ambiente dell’applicazione|production|
|Script di avvio dell'applicazione|server.js|

Una volta inserite tutte le informazioni, clicca su `Conferma`{.action}. Per maggiori informazioni sui motori di esecuzione, consulta la nostra guida [Gestire i motori di esecuzione di un hosting Cloud Web](https://docs.ovh.com/it/cloud-web/gestire-motori-esecuzione-hosting-cloud-web/){.external}.

![ghostcloudweb](images/ghost-cloud-web-step2.png){.thumbnail}

### Step 2: associa Node.js a un multisito

Ora che Node.js è attivo come motore di esecuzione, è necessario associarlo a un multisito. Per effettuare questa operazione clicca sulla scheda `Multisito`{.action}, che mostra una tabella con tutti i domini aggiunti alla tua soluzione di hosting come multisito. 

![ghostcloudweb](images/ghost-cloud-web-step3.png){.thumbnail}

Presta particolare attenzione alle colonne relative alla cartella di root e al programma di esecuzione: verifica che Node.js risulti associato ai domini in questione e che la directory sia corretta aiutandoti, se necessario, con le informazioni riportate qui sotto. Se tutte le informazioni sono corrette, passa direttamente allo [Step 3: crea un database MySQL](./#step-3-crea-un-database-mysql).

|Colonna|Descrizione| 
|---|---| 
|Cartella di root|È la directory che conterrà il codice sorgente del dominio (corrispondente al <i>DocumentRoot</i>). Nel nostro esempio, indicheremo “ghost”: questa cartella dovrà quindi contenere il codice sorgente Node.js.|
|Programma di esecuzione|È il motore di esecuzione associato al dominio. Il nome visualizzato corrisponde al “Nome personalizzato” definito in fase di creazione del motore di esecuzione. Nel nostro esempio, è “NodeJS 8”.|

Se i dati non sono corretti, aggiungi un nuovo multisito o modifica quello esistente.

- Per **aggiungere un multisito**, clicca su `Aggiungi un dominio o un sottodominio`{.action} a destra della tabella
- Per **modificare un multisito**, clicca sull’icona a forma di ingranaggio in corrispondenza del dominio in questione e seleziona `Modifica`{.action}

Nella nuova finestra, inserisci le informazioni richieste. La tabella qui sotto mostra i valori utilizzati in questo tutorial.

|Campo|Valore utilizzato in questo tutorial| 
|---|---| 
|Dominio|ghost.demo-nodejs.ovh|
|Cartella di root|ghost|
|Programma di esecuzione|NodeJS 8|

Scegli quali opzioni aggiuntive attivare. Una volta completate le informazioni clicca su `Seguente`{.action} e conferma. L’operazione potrebbe richiedere fino a un’ora e la propagazione della modifica della configurazione DNS fino a 24 ore prima di diventare effettiva. Per maggiori informazioni sulla gestione dei multisiti, consulta la nostra guida [Ospitare più siti su uno stesso hosting](https://docs.ovh.com/it/hosting/configurare-un-multisito-su-un-hosting-web/){.external}.

![ghostcloudweb](images/ghost-cloud-web-step4.png){.thumbnail}

### Step 3: crea un database MySQL

Apri la scheda `Database`{.action} (se non è visibile, clicca sull’icona con tre linee). Visualizzi una tabella con tutti i database creati sull’hosting. Esistono due modi per creare un database:

- **se non hai ancora creato database**, clicca sul pulsante `Crea un database`{.action}

- **se hai già creato database**, clicca sul pulsante `Azioni`{.action} in alto a sinistra della tabella e seleziona `Crea un database`{.action}

![ghostcloudweb](images/ghost-cloud-web-step5.png){.thumbnail}

Nella nuova finestra scegli l’opzione “MySQL” e la versione del database da aggiungere (in questo tutorial utilizzeremo la “5.6”). Seleziona “Archiviata nella tua istanza Cloud Web” e clicca su `Seguente`{.action}.

Indica il nome utente e la password associata e clicca su `Seguente`{.action}. Conferma e attendi alcuni minuti fino al completamento dell’operazione.

![ghostcloudweb](images/ghost-cloud-web-step6.png){.thumbnail}

### Step 4: crea le variabili d'ambiente

Creare variabili d’ambiente non è obbligatorio, ma fortemente consigliato. 

Questa guida mostra come creare variabili d'ambiente in cui inserire le informazioni di accesso al database MySQL. In questo modo, in caso di modifiche (ad esempio della password) sarà sufficiente cambiare il valore della variabile dallo Spazio Cliente, anziché intervenire sul codice sorgente. 

Clicca sulla scheda`Variabili d’ambiente`{.action}. Visualizzi una tabella con le variabili già create. Per aggiungerne una nuova, clicca sul pulsante `Azioni`{.action} in alto a sinistra della tabella e seleziona `Aggiungi una variabile d'ambiente`{.action}.

![ghostcloudweb](images/ghost-cloud-web-step7.png){.thumbnail}

Nella nuova finestra, completa i campi con i valori corrispondenti al tuo caso specifico e clicca su `Conferma`{.action} per creare la variabile. Ecco le variabili create in questo tutorial:

|Nome|Tipo di variabile|Valore| 
|---|---|---|
|database__connection__user|string|Nome utente MySQL scelto durante la creazione del database|
|database__connection__database|string|Nome del database MySQL|
|database__connection__password|password|Password MySQL definita durante la creazione del database|
|database__client|string|mysql|
|server__port|integer|80|
|server__host|string|0.0.0.0|

![ghostcloudweb](images/ghost-cloud-web-step8.png){.thumbnail}

### Step 5: accedi all’hosting Cloud Web via SSH

Per prima cosa è necessario recuperare le informazioni di accesso. Clicca sulla scheda `FTP - SSH`{.action} (se non è visibile, clicca sull’icona con tre linee). Visualizzi le informazioni associate allo spazio di storage. Recupera quelle relative a questi elementi: 

|Elemento|Descrizione| 
|---|---| 
|Accesso SSH al cluster|Il link mostrato permette di recuperare due informazioni: <br>- l’**indirizzo del server**, incluso tra `ssh://` e i `:`<br> - la **porta di connessione**, che corrisponde al numero indicato dopo i `:`<br><br>Per esempio, in `ssh://ssh.cluster024.hosting.ovh.net:12345/`, `ssh.cluster024.hosting.ovh.net` è l’indirizzo del server e `12345` la porta di connessione.|
|Utente SSH principale|Identificativo SSH principale creato sull’hosting.|

Se hai dimenticato la password associata all’utente SSH, clicca sui tre puntini in corrispondenza dell’utente in questione e seleziona `Modifica password`{.action}.

![ghostcloudweb](images/ghost-cloud-web-step9.png){.thumbnail}

Per effettuare l’accesso tramite SSH è necessario utilizzare un terminale. Su macOS e Linux questo tool è installato di default. Sugli ambienti Windows è invece necessario installare un software come PuTTY o aggiungere la funzionalità “OpenSSH”. La procedura da seguire varia in base al sistema operativo installato e non è quindi possibile fornirne i dettagli in questa guida, ma proponiamo l’esempio di un comando da utilizzare (ricordati di sostituire `sshlogin`, `sshserver` e `connectionport`con i dati corrispondenti). Una volta eseguito il comando, il sistema chiederà di inserire la password dell’utente SSH.

```sh
ssh sshlogin@sshserver -p connectionport
```

A questo punto è possibile verificare, ad esempio, che le variabili d’ambiente create [nello step 4 ](./#step-4-crea-le-variabili-di-ambiente) siano visibili.  Se hai seguito le operazioni effettuate in questo tutorial, troverai: 

```sh
demonon@cloudweb-ssh:~ $ env | grep "database_"
database__client=mysql
database__connection__host=demononghost.mysql.db
database__connection__user=demononghost
database__connection__password=ZuperZecure123
database__connection__database=demononghost
```

### Step 6: installa Ghost

Per prima cosa, posizionati nella cartella di root indicata nello [lo step 2](./#step-2-associa-nodejs-a-un-multisito) (nel nostro caso, la directory è “ghost”).

```sh
demonon@cloudweb-ssh:~ $ ls -l
drwxr-xr-x 3 demonon demonon 4 Mar  6 16:53 ghost
drwx---r-x 3 demonon demonon 5 Mar  6 16:48 www
demonon@cloudweb-ssh:~ $ cd ghost/
demonon@cloudweb-ssh:~/ghost $
```

Scarica l’[ultima versione di Ghost ](https://ghost.org/it/developers/){.external} e decomprimine il contenuto.

```sh
demonon@cloudweb-ssh:~/ghost $ ls
public  server.js
demonon@cloudweb-ssh:~/ghost $ curl -s -LO https://github.com/TryGhost/Ghost/releases/download/2.16.4/Ghost-2.16.4.zip
demonon@cloudweb-ssh:~/ghost $ unzip Ghost-2.16.4.zip
Archive:  Ghost-2.16.4.zip
   creating: content/
   creating: content/adapters/
  inflating: content/adapters/README.md 
   creating: content/apps
  nflating: content/apps/README.md 
  ....
demonon@cloudweb-ssh:~/ghost $ rm Ghost-2.16.4.zip
demonon@cloudweb-ssh:~/ghost $ ls
Gruntfile.js  LICENSE  MigratorConfig.js  PRIVACY.md  README.md  content  core  index.js  package.json  public  server.js  yarn.lock
```

Per gestire le dipendenze Node.js Ghost utilizza [Yarn](https://yarnpkg.com/en/){.external}, un framework alternativo a **npm**. Installalo via **npm**, e aggiungi questi binari nel “ PATH”:

```sh
demonon@cloudweb-ssh:~/ghost $ npm-node8 install yarn
npm notice created a lockfile as package-lock.json. You should commit this file.
+ yarn@1.13.0
added 1 package and audited 1 package in 2.893s
found 0 vulnerabilities
 
demonon@cloudweb-ssh:~/ghost $ export PATH=$PATH:/usr/local/nodejs8/bin/:~/ghost/node_modules/.bin/
demonon@cloudweb-ssh:~/ghost $ node --version
v8.15.0
demonon@cloudweb-ssh:~/ghost $ yarn --version
1.13.0
```

È possibile rendere persistenti le modifiche al ”PATH” aggiungendo l’esportazione nel file `~/.profile`:

```sh
demonon@cloudweb-ssh:~ $ echo "export PATH=$PATH:/usr/local/nodejs8/bin/:~/ghost/node_modules/.bin/" >> ~/.profile
```

A questo punto installa le dipendenze di Ghost utilizzando Yarn:

```sh
demonon@cloudweb-ssh:~/ghost $ yarn install
yarn install v1.13.0
1/5] Validating package.json...
[2/5] Resolving packages...
[3/5] Fetching packages...
[4/5] Linking dependencies...
[5/5] Building fresh packages...
success Saved lockfile.
Done in 269.89s.
```

Sempre nella cartella **~/ghost**, crea un file `config.production.json` che contenga la configurazione di Ghost:

```json
{
    "url": "http://ghost.demo-nodejs.ovh",
    "paths": {
        "contentPath": "content/"
    }
}
```

Configura il puntamento del file **server.js** (definito [nello step 1](./#step-1-attiva-nodejs-come-motore-di-esecuzione)) verso il file **index.js** di Ghost:

```sh
demonon@cloudweb-ssh:~/ghost $ unlink  server.js
demonon@cloudweb-ssh:~/ghost $ ln -s index.js server.js
```

A questo punto l’installazione e la configurazione di Ghost sono completate e non resta che riavviare il daemon Node.js per applicare le modifiche apportate nella cartella **~/ghost**.

### Step 7: riavvia il daemon Node.js

Per riavviare il daemon Node.js, torna allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Apri la scheda `Multisito`{.action}, clicca sull’icona a forma di ingranaggio in corrispondenza del tuo dominio e seleziona `Riavvia`{.action}.

L’applicazione sarà accessibile dal dominio scelto durante la configurazione del multisito. 

![ghostcloudweb](images/ghost-cloud-web-step10.png){.thumbnail}

### Step 8: utilizza HTTPS

Per una maggiore sicurezza del sito è possibile creare un reindirizzamento da HTTP a HTTPS. Sempre nella cartella `ghost`, crea un file `.htaccess` con questo contenuto: 

```
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Conclusione

In questo tutorial abbiamo descritto gli step necessari per l’installazione di un’applicazione Node.js su un hosting Cloud Web OVH. A questo punto, puoi utilizzare Ghost e pubblicarvi i tuoi primi contenuti!