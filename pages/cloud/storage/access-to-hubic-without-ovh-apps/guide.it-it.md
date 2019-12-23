---
title: 'Accedere a hubiC senza utilizzare sito Internet e applicazioni'
slug: accedere-hubic-senza-applicazioni
excerpt: 'Come connettersi a un cluster hubiC in tre metodi diversi'
section: hubiC
---

## Introduzione 

Il servizio hubiC è basato su cluster di storage OpenStack Swift e, proprio per questo, l’accesso può essere effettuato con diverse modalità. In generale consigliamo di utilizzare il sito [https://hubic.com/it/](https://hubic.com/it/){.external}, ma è possibile optare anche per altri tool.

**Questa guida ti mostra come connettersi a un cluster hubiC con tre diversi metodi: Cyberduck (client Swift), Mountain Duck (disco di rete) o mount svfs.**

> [!warning]
> Questa guida spiega come utilizzare una o più soluzioni OVH con tool esterni in un contesto ben preciso e potrebbe quindi essere necessario adattare le indicazioni fornite alla tua situazione. 
>
In caso di difficoltà o dubbi, rivolgiti a un esperto del settore o alla nostra Community di utenti, disponibile all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}. OVH non potrà fornirti assistenza. 
>

## Prerequisiti

### Conoscenze necessarie

- Installare un’applicazione sulla a macchina locale (per le soluzione Cyberduck e Mountain Duck)
- Avere accesso in SSH (per il mount svfs)

### Hardware e software necessari

- Avere un account hubiC attivo 
- Disporre di un computer con sistema operativo Windows, macOS o GNU/Linux
- Disporre di una connessione Internet
- Possedere una licenza valida per l’utilizzo di software a pagamento (ad esempio: Mountain DUck)


## Procedura 


### Scegli il metodo di connessione più adatto alla tua situazione

A seconda del tuo sistema operativo e delle tue conoscenze personali, puoi scegliere fra diversi metodi di connessione.  

- Se vuoi utilizzare una soluzione Windows o macOS da configurare, puoi consultare la sezione intitolata “[Connettersi a un cluster hubiC via Cyberduck](./#connettersi-a-un-cluster-hubic-attraverso-cyberduck)” di questo tutorial per connetterti a un cluster hubiC attraverso il client Swift.  

- Se vuoi utilizzare una soluzione “tutto in uno” per Windows o MacOS con pochissime configurazioni da effettuare e attraverso un disco di rete, consulta la sezione di questo tutorial intitolata “[Connettersi a un cluster hubiC attraverso Mountain Duck](./#connettiti-a-un cluster-hubic-attraverso-mountain-duck) per connetterti a un cluster hubiC attraverso un software a pagamento.

- Se utilizzi una distribuzione GNU/Linux, consulta la sezione di questo tutorial intitolata “[Connettersi a un cluster hubiC tramite svfs](./#connettiti-a-un-cluster-hubiC-attraverso-svfs)” per connetterti a un cluster hubiC tramite un mount svsf.


## Accedi a un cluster hubiC attraverso Cyberduck

Puoi connetterti a un cluster hubiC utilizzando un client Swift. In questo tutorial utilizzeremo Cyberduck, disponibile per le piattaforme Windows e MacOS. 


### Step 1: scarica e installa Cyberduck

Recupera l’ultima versione di Cyberduck adatta al tuo sistema operativo (Windows o macOS) cliccando su[questo link](https://cyberduck.io/download/){.external}. 

Questa applicazione è gratuita e può essere utilizzata senza restrizioni. Dopo l’installazione, avvia il software per verificare che l’operazione sia stata completata e infine **chiudi il software**.


### Step 2: ottieni le credenziali di accesso 

È necessario ottenere e fornire un profilo di connessione particolare per poter connettersi a huberC tramite Cyberduck.

Questo profilo si presenta come un file che puoi scaricare cliccando su[questo link](https://svn.cyberduck.io/trunk/profiles/hubiC.cyberduckprofile){.external}.

Apri il file, che lancerà Cyberduck e una finestra di configurazione.


### Step 3: autorizza Cyberduck a connettersi al tuo account hubiC

Nella finestra aperta precedentemente, inserisci l’indirizzo email di accesso al tuo account hubiC nel campo “E-mail”.

![enter email](images/hubic_cyberduck_02.png){.thumbnail}

Nell’applicazione Cyberduck, fai doppio clic sull’icona dell’hard disk accanto a cui è indicato il tuo indirizzo email. 

A questo punto si aprirà una nuova pagina che ti chiederà di inserire le tue credenziali di accesso hubiC. Inserisci gli elementi richiesti e clicca sul pulsante `Accetta`{.action}. Con questa azione autorizzerai Cyberduck a connettersi a hubiC.

![auth](images/hubic_cyberduck_03.png){.thumbnail}

Dopodiché, per convalidare l’accesso, riceverai un codice di autorizzazione.

![token](images/hubic_cyberduck_04.png){.thumbnail}

 Copialo e incollalo nella sezione “Authorization code” di Cyberduck e clicca su `Continua`{.action}. 

![oauth](images/oauth.png){.thumbnail}

Una volta scomparsa la finestra, clicca su `Login`{.action}.

### Step 4: accedi al tuo account hubiC tramite Cyberduck

Una volta tornato nel software Cyberduck, puoi accedere in qualsiasi momento al tuo Spazio hubiC facendo doppio clic sull’icona a forma di hard disk.

![login](images/hubic_cyberduck_05.png){.thumbnail}

Qui puoi consultare i file e le cartelle. 

![navigate](images/hubic_cyberduck_06.png){.thumbnail}

Cliccando con il tasto destro del mouse su un file o su una cartella puoi accedere alle seguenti opzioni: con l’opzione`download`puoi scaricare il file o la cartella, mentre cliccando su`delete`li puoi rimuovere.

> [!warning]
> 
> Non rimuovere per nessun motivo la sezione “*Default*” o “*Default_segments*”, altrimenti potresti rendere inutilizzabile il tuo account hubiC e perdere tutti i dati salvati.
>

## Accedi a un cluster hubiC tramite Mountain Duck

Mountain Duck è un software disponibile per Windows e macOS, che consente di accedere semplicemente ad alcuni servizi di archiviazione dati, come hubiC, che saranno disponibili come dischi di rete all’interno del computer e utilizzabili come tali. 

> [!primary]
>
> Mountain Duck è un’applicazione a pagamento. È disponibile una**Una versione di prova (*Trial version*) ma non consente di stabilire una connessione di oltre dieci minuti.

### Step 1: scarica e installa Mountain Duck

Scarica l’ultima versione di Mountain Duck adatta al tuo sistema operativo cliccando [qui](https://mountainduck.io/){.external}. Avvia l’installazione e poi inserisci il codice Product Key ricevuto al momento dell’acquisto della licenza.

### Step 2: ottieni le credenziali di accesso 

È necessario ottenere e fornire un profilo di connessione specifico per potersi connettere a huberC tramite Cyberduck.

Questo profilo si presenta come un file che puoi scaricare cliccando su[questo link](https://svn.cyberduck.io/trunk/profiles/hubiC.cyberduckprofile){.external}.

Apri il file in modo da aggiungere hubiC alla lista dei servizi supportati.

### Step 3: apri un hard disk di rete hubiC

Verifica che Mountain Duck funzioni correttamente e fai clic destro sull’icona corrispondente nella barra delle applicazioni.

![barra delle applicazioni](images/hubic_mountainduck_01.png){.thumbnail}

A questo punto si aprirà una finestra di conferma. Seleziona`hubiC OVH`{.action} nel menu a tendina.

![barra delle applicazioni](images/hubic_mountainduck_02.png){.thumbnail}

Nella nuova finestra inserisci l’indirizzo email del tuo account hubiC nel campo “Email” e poi clicca sul pulsante `Connect`{.action}.

### Step 4: autorizza Mountain Duck ad accedere al tuo account hubiC

Si aprirà una nuova pagina che ti chiederà di inserire le tue credenziali di accesso hubiC. Inserisci gli elementi richiesti e clicca sul pulsante `Accept`{.action}. Con questa azione autorizzerai Cyberduck a connettersi a hubiC.

![auth](images/hubic_cyberduck_03.png){.thumbnail}

Dopodiché si aprirà una nuova finestra con il codice di autorizzazione per convalidare l’accesso.

![token](images/hubic_cyberduck_04.png){.thumbnail}

Copia e incolla il codice nella finestra corrispondente.

![auth md](images/hubic_mountainduck_03.png){.thumbnail}

Una volta inserito il codice su Mountain Duck, il tuo spazio hubiC risulterà disponibile sul tuo computer come unità di rete.

![network drive](images/hubic_mountainduck_04.png){.thumbnail}

## Accedi a un cluster hubiC attraverso Cyberduck

Se utilizzi un computer con una distribuzione GNU/Linux ad esempio Debian), puoi accedere al tuo spazio hubiC tramite un punto di mount svfs (*Swift Virtual File System*). Per maggiori informazioni su svfs consulta il[repository GitHub del progetto](https://github.com/ovh/svfs).

### Step 1: installa svfs

Accedi in SSH e recupera il pacchetto svsf compatibile con hubiC tramite questo comando: 

```sh
wget https://github.com/ovh/svfs/releases/download/v0.9.1/svfs_0.9.1_amd64.deb
```

Procedi con l’installazione:

```sh
dpkg -i svfs_0.9.1_amd64.deb
```

Durante questa fase di installazione si possono verificare errori di corrispondenza.  La maggior parte di loro possono essere corretti da questo comando (sempre su Debian e sistemi derivati): 

```sh
apt --fix-broken install
```

A questo punto è possibile riavviare l’installazione, che non dovrebbe più incontrare problemi.

### Step 2: imposta il punto di mount

Accedi a [hubic.com](https://hubic.com). Clicca su`Il mio account`{.action}, su `Sviluppatori`{.action} e infine su `Aggiungi un’applicazione`{.action}. Attribuiscile un nome e indicala nel “Dominio di redirect”:

```sh
http://localhost
```

![application![

A destra dell’applicazione creata, clicca su `Dettagli`{.action}e recupera le informazioni nel campo “Client ID” e in “Client Secret”.

![client_secret](images/client_secret.png){.thumbnail}

Accedi in SSH e inserisci questo comando:

```ssh
hubic-application
```

Inserisci le informazioni richieste:

| Nome del record              | Informazione               |
|---------------------------|----------------------------------------|
| Application redirect URL  | http://localhost/                      |
| Application Client ID     | Il Client ID recuperato precedentemente     |
| Application Client Secret | Il client secret recuperato precedentemente |

Poi completa i punti seguenti:

```
1. Setting scope ... OK ~> Email: /votre mail hubic/ ~> Password: /mot de passe hubic/
2. Granting access ... OK
3. Getting refresh token ... OK == Your mount options == ~> hubic_auth=xxxxxxxx ~> hubic_token=xxxxxxxx
```

### Step 3: crea il punto di mount

Una volta completate le informazioni, è possibile creare un punto di mount scfs utilizzando i dati ottenuti: 

```
# sudo mount -t svfs hubic /mountpoint -o hubic_auth=<hubic_auth>,hubic_token=<hubic_token>,container=default
```

## Conclusioni

Ora puoi accedere allo spazio di storage hubiC senza utilizzare l’applicazione ufficiale o il sito hubi.com (l’applicazione web). 

Tuttavia, tieni presente che l’accesso ai dati tramite hubic.com resta, secondo OVH, il metodo più consigliato.  OVH non sarà in grado di fornirti assistenza nelle operazioni illustrate in questa guida.