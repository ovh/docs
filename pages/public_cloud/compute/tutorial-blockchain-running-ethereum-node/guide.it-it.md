---
title: "Eseguire un nodo Ethereum su un'istanza Public Cloud"
excerpt: "Esegui il deploy di un nodo Ethereum completo con Nethermind (EL) e Lighthouse (CL) su un'istanza Public Cloud OVHcloud utilizzando il Block Storage per i dati della blockchain"
updated: 2026-03-12
---

## Obiettivo

Ethereum è una delle reti blockchain più utilizzate al mondo, alla base di smart contract per la finanza decentralizzata (DeFi) e gli ecosistemi NFT. Gestire un proprio nodo Ethereum consente di interagire direttamente con la rete senza dipendere da servizi di terze parti.

Un nodo Ethereum completamente funzionale richiede due componenti software principali che operano in coordinazione:

1. **Execution Client (EL)** — responsabile dell'elaborazione delle transazioni e del mantenimento dello stato di Ethereum.
2. **Consensus Client (CL)** — responsabile del raggiungimento del consenso con il resto della rete tramite il protocollo proof-of-stake di Ethereum.

Questi due componenti devono funzionare in parallelo e comunicare in modo sicuro per mantenere la sincronizzazione con la mainnet di Ethereum.

L'ecosistema Ethereum supporta diverse implementazioni client, ciascuna sviluppata in modo indipendente ma conforme alle specifiche di Ethereum. Le opzioni più utilizzate includono:

**Execution Clients (EL):**

- Geth
- Nethermind
- Reth
- Besu
- Erigon

**Consensus Clients (CL):**

- Lighthouse
- Prysm
- Teku
- Nimbus
- Lodestar

Per questo tutorial utilizzeremo la seguente combinazione:

- **Execution Client**: Nethermind
- **Consensus Client**: Lighthouse

**Questo tutorial ti guiderà nel deploy di un nodo Ethereum completamente funzionale su un'istanza Public Cloud OVHcloud.**

> [!warning]
>
> Le misure di hardening della sicurezza e le best practice operative necessarie per proteggere completamente un nodo Ethereum vanno oltre lo scopo di questo tutorial. Si raccomanda vivamente di implementare misure di sicurezza aggiuntive, come la configurazione del firewall, la gestione delle chiavi e il monitoraggio, in base ai propri requisiti organizzativi e alle best practice del settore.
>

## Prerequisiti

- Un [progetto Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) nel tuo account OVHcloud
- Un'[istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) con almeno 2 vCore e 30 GB di RAM (ad esempio R2-30), con **Ubuntu 24.04 LTS**
- Un [volume Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) di almeno 2 TB, di tipo **High-Speed Gen2**, associato all'istanza
- Accesso amministrativo (sudo) all'istanza tramite SSH

> [!primary]
>
> Secondo la documentazione della Ethereum Foundation, un nodo Ethereum richiede almeno:
>
> - **Execution client**: 2 core CPU, 16 GB di RAM e 1 TB di storage SSD veloce
> - **Consensus client**: 2 core CPU, 8 GB di RAM e accesso allo stesso storage
>
> Per ambienti di produzione e stabilità a lungo termine, si raccomandano specifiche superiori.
>

## Procedura

### Passo 1 - Montare il volume Block Storage

Dopo aver [creato e associato il volume Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) all'istanza, connettiti all'istanza tramite SSH:

```bash
ssh -i <percorso-chiave-privata> ubuntu@<indirizzo_IP>
```

Elenca tutti i dispositivi a blocchi disponibili per identificare il volume associato:

```bash
lsblk
```

![Output lsblk che mostra il volume associato](images/lsblk_output.png){.thumbnail}

Questo comando visualizza una struttura ad albero di tutti i dispositivi di storage. Identifica il dispositivo (ad esempio `/dev/sdb`) corrispondente al volume da 2 TB. Verrà formattato e montato per archiviare i dati della blockchain Ethereum.

Crea una partizione sul volume appena associato. Sostituisci `/dev/sdb` con il nome del dispositivo identificato nel passaggio precedente, se diverso:

```bash
sudo fdisk /dev/sdb
```

![Partizionamento con fdisk](images/fdisk_partition.png){.thumbnail}

Questo comando apre l'utilità di partizionamento per il dispositivo a blocchi selezionato. Crea una nuova partizione primaria che occupi l'intero disco, quindi salva le modifiche. Una volta completata l'operazione, la partizione sarà generalmente disponibile come `/dev/sdb1`.

Formatta la nuova partizione con il filesystem ext4, una scelta stabile e ampiamente supportata per l'archiviazione dei dati della blockchain Ethereum:

```bash
sudo mkfs.ext4 /dev/sdb1
```

![Formattazione ext4](images/mkfs_ext4.png){.thumbnail}

Crea una directory dedicata come punto di montaggio per il volume formattato, quindi montalo e verifica che sia stato correttamente associato al filesystem:

```bash
sudo mkdir -p /mnt/chaindata
sudo mount /dev/sdb1 /mnt/chaindata
df -h
```

- `mkdir -p /mnt/chaindata` crea la directory di montaggio (l'opzione `-p` garantisce che non venga generato un errore in caso di directory intermedie mancanti).
- `mount /dev/sdb1 /mnt/chaindata` monta la partizione formattata nella directory.
- `df -h` visualizza tutti i filesystem montati in un formato leggibile, consentendo di confermare che `/dev/sdb1` è correttamente montato in `/mnt/chaindata` con la capacità prevista (circa 2 TB).

![Verifica del montaggio](images/mount_verify.png){.thumbnail}

Il disco è ora montato, ma la configurazione **non è persistente**: se il server viene riavviato, il volume dovrà essere montato manualmente. Per configurare il montaggio automatico all'avvio, aggiungi una voce in `/etc/fstab`.

Recupera l'**UUID (Universally Unique Identifier)** del volume:

```bash
sudo blkid
```

![Output blkid](images/blkid_output.png){.thumbnail}

Questo comando elenca tutti i dispositivi a blocchi e i relativi attributi. Identifica la voce corrispondente alla nuova partizione (ad esempio `/dev/sdb1`) e copia il valore del campo `UUID`.

Modifica il file `/etc/fstab` per configurare il montaggio automatico:

```bash
sudo nano /etc/fstab
```

```text
UUID=<your-uuid-here> /mnt/chaindata ext4 nofail 0 0
```

L'opzione `nofail` consente al sistema di proseguire l'avvio anche se il dispositivo non è disponibile.

### Passo 2 - Creare un utente dedicato

Crea un **account utente dedicato** per gestire tutte le operazioni del nodo Ethereum. Questa pratica migliora la sicurezza separando i processi del nodo dall'utente di sistema predefinito.

```bash
sudo useradd -s /bin/bash -d /home/node_admin/ -m -G sudo node_admin
```

- `useradd` crea un nuovo utente denominato `node_admin`, con una directory home, la shell bash e l'appartenenza al gruppo `sudo`.

Imposta una password per il nuovo utente (sostituisci con una password complessa o configura l'accesso tramite chiave):

```bash
echo 'node_admin:<strong_password>' | sudo chpasswd
```

Configura l'**autenticazione tramite chiave SSH** per il nuovo utente aggiungendo la chiave SSH pubblica al file `authorized_keys`. Sostituisci il segnaposto con la tua chiave pubblica effettiva:

```bash
sudo mkdir -p /home/node_admin/.ssh
sudo sh -c "echo '<your-public-ssh-key>' > /home/node_admin/.ssh/authorized_keys"
```

Questo crea il file `authorized_keys` nella directory `/home/node_admin/.ssh/` e vi inserisce la chiave pubblica, consentendo un accesso sicuro e senza password come utente `node_admin`.

### Passo 3 - Installare Nethermind (Execution Client)

Nethermind è un execution client Ethereum responsabile dell'elaborazione delle transazioni e del mantenimento dello stato di Ethereum.

Aggiungi il repository APT ufficiale di Nethermind:

```bash
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:nethermindeth/nethermind
```

![Aggiunta del repository Nethermind](images/nethermind_add_repo.png){.thumbnail}

Aggiorna l'indice dei pacchetti:

```bash
sudo apt-get update
```

![Aggiornamento dei pacchetti](images/nethermind_apt_update.png){.thumbnail}

Installa Nethermind:

```bash
sudo apt-get install nethermind -y
```

![Installazione di Nethermind](images/nethermind_install.png){.thumbnail}

### Passo 4 - Installare Lighthouse (Consensus Client)

Lighthouse è un consensus client Ethereum responsabile del raggiungimento del consenso tramite il protocollo proof-of-stake.

Scarica l'ultima versione stabile dalla [pagina delle release di Lighthouse su GitHub](https://github.com/sigp/lighthouse/releases):

```bash
curl -LO https://github.com/sigp/lighthouse/releases/download/v8.1.3/lighthouse-v8.1.3-x86_64-unknown-linux-gnu.tar.gz
```

![Download di Lighthouse](images/lighthouse_download.png){.thumbnail}

Estrai l'archivio:

```bash
tar -xvf lighthouse-v8.1.3-x86_64-unknown-linux-gnu.tar.gz
```

![Estrazione di Lighthouse](images/lighthouse_extract.png){.thumbnail}

Verifica il binario e spostalo in una posizione accessibile a livello di sistema:

```bash
./lighthouse --version
sudo cp lighthouse /usr/bin
```

![Versione di Lighthouse](images/lighthouse_version.png){.thumbnail}

### Passo 5 - Creare il file JWT secret

Un segreto JWT condiviso è necessario per la comunicazione sicura tra l'execution client e il consensus client.

```bash
sudo mkdir -p /secrets
openssl rand -hex 32 | tr -d "\n" | sudo tee /secrets/jwt.hex > /dev/null
```

![JWT secret creato](images/jwt_secret.png){.thumbnail}

### Passo 6 - Installare screen per la persistenza delle sessioni

Su un server remoto, la disconnessione dalla sessione SSH termina i processi in esecuzione. `screen` consente di mantenerli attivi in background, indipendentemente dalla sessione.

```bash
screen --version
```

![Versione di screen](images/screen_version.png){.thumbnail}

Se non è già installato:

```bash
sudo apt-get install screen -y
```

### Passo 7 - Impostare la proprietà delle directory

I client Ethereum necessitano di accesso in scrittura alla directory dei dati. Assegna la proprietà del punto di montaggio al tuo utente corrente:

```bash
sudo chown $USER:$USER /mnt/chaindata
```

Questo comando assegna al tuo utente la piena proprietà di `/mnt/chaindata`, in modo che i client Ethereum possano leggere e scrivere dati al suo interno.

### Passo 8 - Avviare Nethermind

Crea una sessione screen e avvia Nethermind:

```bash
screen -S nethermind
```

```bash
nethermind -c mainnet \
  --data-dir /mnt/chaindata/nethermind \
  --JsonRpc.Enabled true \
  --HealthChecks.Enabled true \
  --HealthChecks.UIEnabled true \
  --JsonRpc.EngineHost 127.0.0.1 \
  --JsonRpc.EnginePort 8551 \
  --JsonRpc.JwtSecretFile /secrets/jwt.hex
```

Dovresti visualizzare dei log che indicano che il client è in esecuzione. Alla fine, apparirà il seguente messaggio:

```text
Waiting for Forkchoice message from Consensus Layer
```

Questo indica che l'execution client è in attesa di collegarsi al consensus client.

![Nethermind in esecuzione](images/nethermind_running.png){.thumbnail}

Disconnetti la sessione premendo `Ctrl+A` e poi `D` per tornare alla shell principale.

Puoi elencare le sessioni attive con `screen -ls` e ricollegarti successivamente con `screen -r nethermind`.

![Sessioni screen](images/screen_list.png){.thumbnail}

### Passo 9 - Avviare Lighthouse

Crea una nuova sessione screen e avvia Lighthouse:

```bash
screen -S lighthouse
```

```bash
lighthouse bn \
  --network mainnet \
  --execution-endpoint http://127.0.0.1:8551 \
  --execution-jwt /secrets/jwt.hex \
  --checkpoint-sync-url https://mainnet.checkpoint.sigp.io \
  --http \
  --datadir /mnt/chaindata/lighthouse
```

![Avvio di Lighthouse](images/lighthouse_start.png){.thumbnail}

Dopo la configurazione iniziale, Lighthouse dovrebbe iniziare la sincronizzazione con la rete.

![Sincronizzazione di Lighthouse](images/lighthouse_syncing.png){.thumbnail}

Disconnetti la sessione premendo `Ctrl+A` e poi `D`.

### Passo 10 - Verificare la sincronizzazione

A questo punto, sia l'**execution client** (Nethermind) che il **consensus client** (Lighthouse) dovrebbero essere in esecuzione in sessioni screen separate. Per verificare che siano correttamente collegati e che la sincronizzazione sia in corso, ricollegati alla sessione Nethermind e ispeziona i log:

```bash
screen -r nethermind
```

Se Lighthouse è collegato correttamente, il messaggio "Waiting for Forkchoice" dovrebbe scomparire. Al suo posto, dovresti visualizzare i log di comunicazione dell'**Engine API** e dell'elaborazione dei blocchi:

```text
Received ForkChoice: ...
Syncing...
```

![Sincronizzazione EL e CL](images/el_cl_sync.png){.thumbnail}

Questi log confermano che Nethermind sta ricevendo le proposte di blocco e gli aggiornamenti di fork choice da Lighthouse, e che il nodo è in fase di sincronizzazione con la mainnet di Ethereum.

Sebbene questo tutorial si sia concentrato sul deploy tecnico, è importante completare la configurazione con adeguate misure di hardening della sicurezza, monitoraggio e manutenzione per garantire la stabilità a lungo termine. Con le basi ora in atto, è possibile estendere le funzionalità del nodo, integrarlo in infrastrutture più ampie o utilizzarlo come base per attività di ricerca, sviluppo e staking.

## Per saperne di più

- [Ethereum Foundation - Run a node](https://ethereum.org/en/run-a-node/)
- [Documentazione Nethermind](https://docs.nethermind.io/)
- [Documentazione Lighthouse](https://lighthouse-book.sigmaprime.io/)

[Creare un'istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Creare e configurare un disco aggiuntivo su un'istanza](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

Contatta la nostra [Community di utenti](/links/community).
