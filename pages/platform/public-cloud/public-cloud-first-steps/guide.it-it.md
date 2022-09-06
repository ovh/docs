---
title: Creare e connettersi a un’istanza Public Cloud
slug: primi-passi-public-cloud
excerpt: Come eseguire le prime operazioni su un servizio Public Cloud dopo aver creato un progetto
section: Per iniziare
order: 1
---

**Ultimo aggiornamento: 02/08/2022**

## Obiettivo

Le istanze di OVHcloud Public Cloud richiedono un approccio diverso da quello di una soluzione VPS o di un server dedicato.

**Questa guida ti mostra le prime operazioni da effettuare per creare e connettersi a un’istanza Public Cloud.**

## Prerequisiti

- Aver già creato un progetto [Public Cloud](https://www.ovhcloud.com/it/public-cloud/) nel tuo account OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)


## Procedura

### Step 1: crea chiavi SSH

Il protocollo SSH assicura una comunicazione client-server criptata. L’utilizzo di chiavi SSH migliora ulteriormente la sicurezza, impedendo qualsiasi connessione da un dispositivo che non dispone della chiave corrispondente. La creazione di un set di chiavi SSH consente di ottenere una chiave pubblica e una chiave privata.

- La **chiave pubblica** sarà aggiunta alla tua istanza Public Cloud al momento dell’installazione.

- La **chiave privata**, salvata sul dispositivo client, permette di accedere all'istanza senza inserire la password utente. 

> [!primary]
>
Ricordati che per connettersi alle istanze Public Cloud, è obbligatorio l’accesso in SSH basato sull’utilizzo di una chiave, ad eccezione di quelle che eseguono sistemi operativi Windows. Le chiavi SSH pubbliche aggiunte al tuo Spazio Cliente OVHcloud saranno disponibili per i servizi Public Cloud di tutte le regioni e i datacenter. È possibile salvare solo chiavi criptata **RSA** e **ECDSA**; ED25519 non è attualmente supportata. 
>
La fase di autenticazione sulle istanze Windows richiede soltanto nome utente e password.
>

#### Creare una chiave SSH in un sistema operativo Linux o Mac

Da un computer Mac o da un dispositivo dotato di un sistema operativo Linux, apri innanzitutto l’applicazione da riga di comando (Terminal). Assicurati di avere una cartella “.ssh” nella tua directory $HOME. Se la cartella non esiste, creala:

```bash
$ mkdir ~/.ssh
$ chmod 700 ~/.ssh
```

Esagui il seguente comando per creare una chiave RSA da 4096 bit:

```bash
$ ssh-keygen -b 4096
```
L’utilizzo dell’opzione “-t” con il comando sopra citato consente di specificare un metodo crittografico, ad esempio:

```bash
$ ssh-keygen -t ed25519 -a 256
```

Il comando ti chiederà di salvare la chiave appena creata nel file standard:

```bash
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Per accettare il file predefinito premi "↩" (Invio). Una volta confermata l’operazione, potrai inserire una passphrase, una sorta di password per proteggere la tua chiave SSH. Ti consigliamo di effettuare questa procedura per una maggiore sicurezza. Poiché per accedere all’istanza Public Cloud dal tuo dispositivo di lavoro sarà necessaria solo la chiave privata corrispondente, in questa fase è necessario applicare adeguate misure di sicurezza. È necessario specificare la passphrase quando si accede all'istanza.

È necessario salvare la chiave SSH nella directory “.ssh” e aggiungere ".pub" al nome del file della chiave pubblica.

```ssh
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
|o +   .  . o ..  |
|o +   .  . o ..  |
|.. .      oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

> [!warning]
>
> La chiave privata dovrebbe essere custodita in un luogo sicuro e l’accesso limitato agli utenti autorizzati.
> 

Per leggere ed esportare la tua chiave pubblica, utilizza il comando “cat” sul file della chiave e copia il seguente risultato:

```bash
$ cat .ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

> [!primary]
>
>In un Terminal MacOS, è possibile anche usare i comandi “pbcopy” e “pbpaste” per gestire le stringhe di chiavi. Ad esempio, usa il comando per copiare la chiave dal file "id_rsa.pub" negli appunti:
>

```bash
$ pbcopy < ~/.ssh/id_rsa.pub
```

#### Creare una chiave SSH con un sistema operativo Windows

[PuTTY](https://putty.org/){.external} è un software client SSH open source con interfaccia grafica, disponibile per Windows e altri sistemi operativi. Può essere utilizzato per connettersi da remoto a un server Linux. Il software associato, PuTTY Key Generator (PuTTYgen), può essere utilizzato per creare chiavi SSH.

Per prima cosa, scarica PuTTY dal sito ufficiale [, se non è già installato. Il pacchetto di installazione standard consigliato include PuTTYgen, ma è disponibile anche come file stand-alone. Per sapere se disponi già di questo software, controlla nel menu “programmi” oppure utilizza Windows Search.

Apri PuTTYgen e seleziona un algoritmo di crittografia supportato.  In questo esempio utilizziamo RSA. Inserisci 4096 come numero di bits e clicca sul pulsante `Generate`{.action}.

![generate key](images/puttygen_01.png){.thumbnail}

A questo punto muovi il mouse in modo casuale nell'area situata sotto la barra di avanzamento:

![generated key](images/puttygen_02.gif){.thumbnail}

Una volta piena, la chiave sarà pronta. 

![save key](images/puttygen_03a.png){.thumbnail}

Puoi selezionare e copiare la chiave pubblica da questa finestra per salvarla sullo Spazio Cliente OVHcloud allo [Step 2](./#step-2-salva-le-chiavi-pubbliche-nello-spazio-cliente-ovhcloud_1).

Salva entrambe le chiavi su file e inserisci una passphrase nell’apposito campo. Poiché per accedere all’istanza Public Cloud dal tuo dispositivo di lavoro sarà necessaria solo la chiave privata corrispondente, in questa fase è necessario applicare adeguate misure di sicurezza. È necessario specificare la passphrase quando si accede all'istanza.

### Step 2: salva le chiavi pubbliche nello Spazio Cliente OVHcloud

A prescindere dal metodo utilizzato per creare le chiavi SSH, ora disponi di una chiave pubblica pronta per essere aggiunta a un’istanza Public Cloud.   È possibile salvare le chiavi pubbliche nella sezione Public Cloud dello Spazio Cliente OVHcloud, per averle facilmente a disposizione quando si crea un’istanza.

> [!primary]
>
Le chiavi SSH salvate ti consentono di creare più rapidamente le tue istanze. Per cambiare le coppie di chiavi e aggiungere utenti in un secondo momento, consulta la guida [Configura chiavi SSH aggiuntive](../configura_chiavi_ssh_aggiuntive).
>

Accedi allo [Spazio Cliente OVHcloud, vai alla sezione `Public Cloud`{.action} e seleziona il tuo progetto Public Cloud. A questo punto clicca su `Chiavi SSH`{.action} nella barra di navigazione a sinistra sotto alla voce “Project Management”.

Clicca sul pulsante `Aggiungi una chiave SSH`{.action}. Nella nuova pagina, inserisci un nome per la chiave e incolla la stringa di chiave (copiata allo [Step 1](./#step-1-crea-chiavi-ssh) dal file della chiave pubblica o dalla finestra di PuTTYgen) nel campo “Chiave”. Clicca su `Aggiungi`{.action} per confermare l’operazione.

![add key](images/puttygen-04.png){.thumbnail}


### Step 3: crea un’istanza  <a name="create-instance"></a>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YP92y1rAVdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Accedi allo [Spazio Cliente OVHcloud, vai alla sezione `Public Cloud`{.action} e seleziona il tuo progetto Public Cloud. Nella Home page, clicca su `Crea un’istanza`{.action}. (È possibile trovare la stessa funzionalità nella pagina “Istanze”, cliccando su`Istanze`{.action} nella barra di navigazione a sinistra sotto alla voce “Compute”.)

![instance select](images/instance-creation-01-2021.png){.thumbnail}

Per prima cosa, seleziona un modello di server in base alle tue esigenze. La procedura guidata fornisce una descrizione dei diversi casi d'uso e della disponibilità del modello di server. Puoi scegliere tra le seguenti categorie personalizzate:

| Tipo di Server | Risorse garantite | Note di utilizzo |
| :---         |     :---:      |          :--- |
| General Purpose   | ✓     | Server di sviluppo, applicazioni business o web    |
| CPU     | ✓       | Codifica video o altri calcoli intensivi      |
| RAM   | ✓     | Database, analisi e calcoli in-memory    |
| GPU     | ✓       | Potenza di elaborazione parallela di massa (rendering, Big Data, deep learning, etc.)       |
| Sandbox    | -       | Hosting in risorse condivise per ambienti di test e sviluppo      |
| Discovery    | -       | Hosting in risorse condivise per ambienti di test e sviluppo      |
| IOPS   | ✓     | Ottimizzato per il trasferimento dei dati su disco    |


> [!primary]
>
Le risorse totali delle tue istanze Public Cloud saranno inizialmente limitate per motivi di sicurezza. È possibile verificare le quote e richiedere un aumento dallo Spazio Cliente OVHcloud cliccando su `Quota and Regions`{.action} nella barra di navigazione a sinistra situata sotto alla voce “Project Management”.
>
È possibile aggiornare l’istanza in un secondo momento, ma non sarà possibile passare a un modello più piccolo (a meno che tu non scelga l’opzione “Flex” allo step 4). Per maggiori dettagli, consulta la sezione qui di seguito.
>

Nello step successivo, seleziona un datacenter per la tua istanza Public Cloud.

Nello step 3 seleziona un sistema operativo per l’istanza. Le immagini disponibili in questo step dipenderanno dalle scelte effettuate negli step precedenti, ad esempio per quanto riguarda la compatibilità con il tipo di server e la regione. Sono disponibili anche sistemi operativi con applicazioni preinstallate. 

![image select](images/instance-creation-02.png){.thumbnail}

> [!primary]
>
Se scegli un sistema operativo che richiede una licenza a pagamento, i relativi costi saranno automaticamente inclusi nella fatturazione oraria o mensile.
>

In questo step è necessario aggiungere una chiave SSH (ad eccezione delle istanze Windows). Per farlo hai due possibilità: puoi aggiungere la chiave direttamente cliccando sul pulsante `Aggiungi una chiave`{.action} oppure puoi selezionare la chiave dalla lista (a condizione di averla salvato nello Spazio Cliente durante lo [Step 2](./#step-2-salva-le-chiavi-pubbliche-nello-spazio-cliente-ovhcloud_1)).

![key select](images/instance-creation-03.png){.thumbnail}

Lo Step 4 consente di configurare opzioni aggiuntive.

![options select](images/instance-creation-04.png){.thumbnail}

- È possibile implementare più istanze con la configurazione selezionata (nella quota iniziale di cui sopra).
- È possibile scegliere di creare un’istanza flessibile che consenta di effettuare, in un secondo momento, il downgrade per un modello più piccolo (anche cambiando categoria del modello di server). Tuttavia, questo limiterà l’istanza a 50GB di**storage incluso**, a prescindere dalle operazioni di upgrade o downgrade.
- È possibile modificare il nome dell’istanza.
- È possibile aggiungere uno script post-installazione. 
- È possibile connettere l’istanza a una rete privata esistente (vRack).
- È possibile attivare i backup automatici per l’istanza. Ti consigliamo di consultare i dettagli relativi ai prezzi e alle opzioni di rotazione. 

Una volta completata l’operazione, clicca su `Successivo`{.action} per procedere allo step finale e scegliere il metodo di pagamento.

![billing select](images/instance-creation-05.png){.thumbnail}

Se hai dubbi riguardo al periodo di utilizzo, ti consigliamo di scegliere la fatturazione oraria, in quanto non sarà possibile effettuare questa scelta in un secondo momento. Avrai la possibilità di passare alla fatturazione mensile non appena l’istanza sarà disponibile nella pagina “Istanze”.

> [!warning]
>
>Scegliendo la fatturazione mensile per la tua istanza, ti impegni a mantenere questa tariffa almeno fino alla fine del mese in corso. A prescindere dal fatto che l’istanza sia in uso oppure no.
>

Una volta confermate le informazioni inserite, clicca sul pulsante `Crea un’istanza`{.action} per completare l’operazione. L’installazione dell’istanza potrebbe richiedere alcuni minuti.

### Step 4: accedi alla tua istanza <a name="connect-to-instance"></a>

Accedi allo [Spazio Cliente OVHcloud, vai alla sezione `Public Cloud`{.action} e seleziona il tuo progetto Public Cloud. A questo punto clicca su `Istanze`{.action} nella barra di navigazione a sinistra sotto alla voce “Compute”.  La tua istanza è pronta quando la colonna “Stato” nella tabella è impostata su “Attivo”.  Per verificarlo, clicca sul pulsante “Refresh” situato accanto a `Crea un’istanza`{.action}.

![instances page](images/instance-connect-01.png){.thumbnail}

Un utente con privilegi elevati viene creato automaticamente sull’istanza. Il nome utente riflette l’immagine selezionata, ad esempio ”ubuntu”, “debian”, “fedora”, “arch”, ecc. È possibile verificare questa e altre caratteristiche sulla “Dashboard”, cliccando sul pulsante con i tre puntini `...`{.action} e poi su `Dettagli dell’istanza`{.action}.

> [!primary]
>
In caso di problemi di connessione, ad esempio errori relativi alle chiavi SSH, consulta la guida[Sostituisci la tua chiave SSH in caso di perdita](../sostituisci_la_tua_chiave_ssh_in_caso_di_perdita/).
>

> [!primary]
>
Se hai creato un'istanza senza chiave SSH tramite l'API OVHcloud o l'interfaccia Openstack Horizon, puoi aggiungere una chiave SSH alla tua istanza solo attraverso [modalità rescue](https://docs.ovh.com/it/public-cloud/riavvia_la_tua_istanza_in_modalita_di_ripristino_rescue_mode/), seguendo le istruzioni descritte in [questa sezione della guida appropriata](../sostituisci_la_tua_chiave_ssh_in_caso_di_perdita/#procedura).
>

#### Connettersi a un’istanza Linux da Linux/Mac

È possibile accedere all’istanza tramite interfaccia a riga di comando (Terminal) via SSH. Sostituisci il “nome utente” negli esempi seguenti con il tuo utente predefinito come spiegato in precedenza. Puoi semplicemente copiare l’intero comando di login dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Per farlo, clicca sul comando in questione nella Dashboard delle Istanze e poi incollalo nel tuo Terminal.

![instances page](images/instance-connect-02.png){.thumbnail}

Digita la passphrase per la tua chiave privata, quando richiesto. 

```bash
ssh username@IPv4_of_your_instance
Enter passphrase for key '/Users/username/.ssh/id_rsa':
```
Dato che hai effettuato l’accesso con i privilegi di root (“sudo user”), puoi inserire subito i comandi per eseguire le attività amministrative. Ti consigliamo di cambiare prima la password:

```bash
$ sudo passwd username
New password:
Retype new password:
passwd: password updated successfully
```
A questo punto, puoi utilizzare queste credenziali per effettuare il login tramite la `console VNC`{.action} nel tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Quindi passa all’utente “root” e imposta una password sicura, dopodiché torna all’utente precedente.

```bash
$ sudo su -
# passwd
New password:
Retype new password:
passwd: password updated successfully
# su - username
```
Tieni presente che è raramente necessario passare all’utente “root”. Per le attività amministrative che richiedono i privilegi “root”, accedi ed esegui i comandi in qualità di utente incluso nel gruppo “sudo”.

#### Connettersi a un’istanza Linux da Windows

Dopo aver creato e salvato le tue chiavi SSH (allo [Step 1](./#step-1-crea-chiavi-ssh)), installato l’istanza con la chiave pubblica (nello [Step 3](./#step-3-crea-unistanza)), puoi utilizzare [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) e la tua chiave privata per accedere all’istanza.

Apri PuTTY ed espandi “SSH” nel menu a sinistra, quindi clicca su “Auth” per visualizzare le opzioni di autenticazione.

![using putty](images/puttyconnect-01.png){.thumbnail}

Clicca sul pulsante `Browse`{.action} per accedere alla cartella in cui si trova il file di chiave privata (.ppk) e aprilo. A questo punto, passa a “Session” tramite il menu a sinistra e inserisci le tue credenziali di accesso (nomeutente@IPv4_indirizzo). Nella schermata di esempio, sostituisci “ubuntu” con l’utente predefinito adeguato in base alla Dashboard dell’istanza nel tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). (Clicca su `Istanze`{.action} nella barra di navigazione a sinistra, poi seleziona il nome dell’istanza).

Per le successive connessioni, è ora possibile salvare questa sessione per renderla disponibile nell’elenco di questa interfaccia.  Inserisci un nome descrittivo nel campo “Saved Sessions” e clicca su `Salva`{.action} per aggiungerlo.

![using putty](images/puttyconnect-02.png){.thumbnail}

A questo punto, clicca su `Open`{.action} e inserisci la passphrase della chiave. 

![using putty](images/puttyconnect-03.png){.thumbnail}


> [!primary]
>
Le istruzioni di cui sopra ti spiegano come accedere alle tue istanze Public Cloud in maniera sicura. Per motivi di praticità e sicurezza, ti consigliamo di utilizzare anche un gestore di password sul tuo dispositivo, come la soluzione open source gratuita **KeePass**.
>


#### Connettersi a un’istanza Windows

Una volta creata l’istanza, è necessario completare l’installazione di Windows (_sysprep_). Per farlo, clicca sul pulsante con i tre puntini `...`{.action} e quindi su `Dettagli dell’istanza`{.action}. Clicca sulla scheda `Console VNC`{.action}. La console dovrebbe già mostrare l’interfaccia di installazione.

![windows sysprep](images/windows-connect-01.png){.thumbnail}

Nel primo step, scegli i parametri di localizzazione, selezionando la regione, la lingua e il layout della tastiera. Clicca su `Avanti`{.action} per continuare.

![windows sysprep](images/windows-connect-02.png){.thumbnail}

Il secondo step richiede la configurazione dell’account predefinito “Amministrator”. Inserisci la tua passphrase per due volte e clicca su `Finish`{.action} per completare il processo di installazione. Clicca sul simbolo dell'occhio per controllare se tutti i caratteri inseriti nei campi corrispondono alla configurazione effettiva della tua tastiera.

L’istanza si riavvierà e sarà possibile accedere con queste credenziali tramite un client Desktop remoto. 

##### **Da Windows**

Se necessario, utilizza Windows Search e apri l’applicazione client “Remote Desktop Connection”. 

![windows remote](images/windows-connect-03.png){.thumbnail}

Inserisci l’indirizzo IPv4 della tua istanza e seleziona l’utente “Amministrator”. A questo punto, inserisci la tua passphrase. Trattandosi di un certificato sconosciuto, potresti visualizzare un messaggio di avviso per confermare la connessione. Clicca `Sì`{.action} per accedere all’istanza.

> [!primary]
>
In caso di difficoltà, verifica che il tuo dispositivo autorizzi la connessione RDP. Per farlo, controlla le impostazioni di sistema, le regole del firewall e le eventuali limitazioni della rete.
>

##### **Da Linux**

È possibile accedere alle istanze Public Cloud tramite la console VNC integrata nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Dal tuo dispositivo locale, la connessione può essere stabilita tramite un’applicazione client compatibile con il Remote Desktop Protocol (RDP).

Ad esempio, Remmina Remote Desktop Client è un’applicazione compatibile inclusa nell’installazione Ubuntu Desktop. Se non riesci a trovare Remmina nel tuo ambiente, puoi ottenerla dal [sito ufficiale](https://remmina.org/).

![linux remote](images/linux-connect-01.png){.thumbnail}

Apri Remmina e assicurati che il protocollo di connessione sia impostato su “RDP”. Inserisci l’indirizzo IPv4 della tua istanza Public Cloud e premi “ "↩" (invio).

![linux remote](images/linux-connect-02.png){.thumbnail}

Se visualizzi un messaggio relativo al certificato, clicca su `Sì`{.action}. Quindi, inserisci nome utente e password dell’istanza e clicca su `OK`{.action} per stabilire la connessione.

![linux remote](images/linux-connect-03.png){.thumbnail}


## Per saperne di più

[Effettuare lo Snapshot di un’istanza](../effettuare-snapshot-di-un-istanza/)

[Aumenta la quota del tuo Public Cloud](../aumenta_la_quota_del_tuo_public_cloud/)

[Passare dalla fatturazione oraria a quella mensile](../cambiare-tipo-fatturazione-public-cloud/)

[Configurare chiavi SSH aggiuntive](../configura_chiavi_ssh_aggiuntive/)

Partecipa alla nostra community di utenti all’indirizzo <https://community.ovh.com/en/>.
