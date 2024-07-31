---
title: "Hosting Web - Copiare file con il comando SCP"
excerpt: "Questa guida ti mostra come utilizzare il comando Secure Copy Protocol (SCP) in SSH per copiare file da o verso il tuo hosting Web"
updated: 2024-01-30
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il Secure Copy Protocol (SCP) permette di copiare dati in modo sicuro (grazie al protocollo SSH) tra due dispositivi. In questo modo è possibile copiare il contenuto:

- presente in locale dal tuo computer verso un dispositivo remoto;
- da un dispositivo remoto verso il tuo computer;
- da un server verso un altro (non disponibile tra due hosting Web OVHcloud).

Permette, da un terminale e con l’aiuto di un comando Linux, di copiare un file o una cartella che contiene uno o più file.

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner). OVHcloud non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>
  
**Questa guida ti mostra come utilizzare il comando Secure Copy Protocol (SCP) in SSH per copiare file da o verso un hosting Web.**

## Prerequisiti

- Disporre di un terminale compatibile con i comandi Linux e SSH (ad esempio, il *terminale* di MacOS o l’emulatore *Ubuntu* su Windows)
- Familiarizzare con i comandi Linux e SSH
- Disporre di una soluzione di [hosting Web](/links/web/hosting) con accesso in SSH
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}
  
## Procedura

Questa guida ti mostra in modo dettagliato le funzionalità disponibili con il comando `scp`. Per maggiori informazioni, contatta la nostra [Community di utenti](/links/community).
### Step 1 - Recupera gli accessi SSH del tuo hosting Web

Per recuperare gli accessi SSH del tuo hosting Web, consulta la nostra guida "[Utilizzare l’accesso SSH del tuo hosting Web](/pages/web_cloud/web_hosting/ssh_on_webhosting)".

### Step 2 - Recupera il percorso completo dello spazio di storage FTP del tuo hosting Web<a name="step2"></a>

Apri il terminale e connettiti al tuo hosting Web in SSH.

Una volta effettuato l’accesso in SSH al tuo hosting Web, esegui questo comando: 

```ssh
cd ..
```

Confermare il comando utilizzando il tasto `enter`(↲) della tastiera e digitare il comando seguente:

```ssh
ls
```

Convalidare il secondo comando utilizzando il tasto `enter`(↲) della tastiera.

Nel tuo terminale, visualizzi un risultato simile al nostro esempio:

```ssh
FTP-login@ssh0X.cluster0XX.xxx.hosting.ovh.net (php/X.X/production/legacy) /homez.XXX $
FTP-main-login
```

Nel nostro esempio:

- `FTP-login`: nome di uno degli utenti FTP (principale o meno) del tuo hosting Web.
- `/homez.XXX`: *filer* su cui si trova l’hosting Web.
- `FTP-main-login`: percorso directory dello spazio di storage FTP del tuo hosting Web. Questa directory viene normalmente denominata allo stesso modo del login FTP principale del tuo hosting Web.

Nel nostro esempio, il percorso completo dello spazio di storage FTP per accedere alla radice FTP dell’hosting Web è il seguente: `/homez.XXX/FTP-main-login`.

Solo da una directory equivalente alla directory `FTP-main-login` del nostro esempio, sarai autorizzato a utilizzare il comando `scp`.

Quando ti connetti in modo classico allo spazio FTP di un hosting Web, la connessione avviene direttamente posizionandoti all’interno della cartella equivalente alla cartella `FTP-main-login` del nostro esempio.

È qui che si trovano, di default, la cartella `www` e il file `.ovhconfig` del tuo hosting Web.

### Step 3 - Utilizza il comando "scp" con il tuo hosting Web

> [!success]
>
> Tutti i comandi seguenti vengono eseguiti dal terminale del tuo dispositivo/computer **in locale**. Non è quindi necessario essere connessi in SSH nel terminale dell’hosting Web.
>
> Il percorso del file utilizzato con il comando `scp` è relativo alla directory locale corrente. Per trasferire dati verso un hosting Web o un hosting Web verso un dispositivo locale, assicurati di eseguire i comandi dalla directory principale locale, come mostrato negli esempi di seguito.
>

Ricordarsi di sostituire tutte le seguenti impostazioni generali con le proprie:

- `FTP-login`: login FTP del tuo hosting Web.
- `ssh.cluster0XX.hosting.ovh.net`: sostituisci gli `XX` con il numero del cluster in cui si trova il tuo hosting Web. In caso di necessità, consulta la nostra guida "[Utilizzare l’accesso SSH del proprio hosting Web](/pages/web_cloud/web_hosting/ssh_on_webhosting)" per recuperare questa informazione.
- `/homez.XXX/FTP-main-login/`: modifica i `XXX` con il numero del *filer* e il `FTP-main-login` con i parametri recuperati allo [step 2](#step2) di questa guida.
- `source_folder`: nome della cartella di origine da copiare o in cui si trova il file da copiare. *Se la struttura è costituita da una successione di cartelle nidificate, è necessario specificare tutti i nomi delle cartelle separandoli con `/`*.
- `target_folder`: nome della cartella di destinazione che riceverà la cartella o il file locale da copiare. *Se la struttura è costituita da una successione di cartelle nidificate, è necessario specificare tutti i nomi delle cartelle separandoli con `/`*.
- `file`: nome del file da copiare utilizzando il comando `scp`. Ricordati di precisare l'estensione del file (ad esempio *.html*, *.css*, *.php*, *.txt*, ecc...).

#### Copiare contenuti presenti in locale sul tuo dispositivo verso il tuo hosting Web

Per copiare un solo file locale sul tuo hosting Web, utilizza questo comando:

```ssh
scp source_folder/file FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder
```

Per copiare una cartella locale e l’intero contenuto sul tuo hosting Web, utilizza questo comando:

```ssh
scp -r source_folder FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder 
```

#### Copiare il contenuto dell’hosting Web sul dispositivo locale

Per copiare un solo file presente sull’hosting Web sul dispositivo locale, esegui questo comando:

```ssh
scp FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main/login/source_folder/file target_folder 
```

Per copiare una cartella presente sul tuo hosting Web e l’intero contenuto nel tuo dispositivo locale, utilizza questo comando:

```ssh
scp -r FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/source_folder target_folder
```

#### Copiare il contenuto presente sul tuo hosting Web OVHcloud verso un altro hosting Web OVHcloud

Per motivi di sicurezza, il comando `scp` viene rifiutato in SSH dall’infrastruttura di hosting Web OVHcloud quando due hosting Web tentano di copiare contenuti tra loro.

### Step 4 - Assicurati che il contenuto sia stato copiato correttamente

Per verificare che alcuni contenuti presenti in locale sul tuo computer siano stati copiati sul tuo hosting Web, [accedi allo spazio di storage FTP del tuo hosting Web](/pages/web_cloud/web_hosting/ftp_connection) e clicca sulla cartella di destinazione in cui i contenuti devono essere copiati.

Per verificare che il contenuto dell’hosting Web sia stato copiato localmente sul computer, accedi alla directory di destinazione sul dispositivo o computer e verifica che il contenuto sia presente.

## Per saperne di più <a name="go-further"></a>

[Utilizzare l’accesso SSH del proprio hosting Web](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Accedere allo spazio di storage FTP dell’hosting Web](/pages/web_cloud/web_hosting/ftp_connection)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Contatta la nostra [Community di utenti](/links/community).