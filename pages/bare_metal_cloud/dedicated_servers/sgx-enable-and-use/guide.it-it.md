---
title: "Come gestire Intel SGX su un server dedicato"
excerpt: "Scopri come attivare l'opzione SGX sul tuo server dedicato e installare la pila software SGX per Linux"
updated: 2025-11-20
---

## Obiettivo

L'abilitazione delle Intel Software Guard Extensions (SGX) sul tuo server ti permette di eseguire applicazioni compatibili con SGX. Intel SGX fornisce funzionalità avanzate di crittografia della sicurezza hardware e della memoria RAM, al fine di isolare parti specifiche di codice e dati per ogni applicazione.

**Questa guida spiega come attivare la funzionalità SGX, tramite lo Spazio Cliente OVHcloud o tramite l'API OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager) o all'[API OVHcloud](/links/api)
- Avere un server dedicato compatibile con [l'opzione SGX](/links/bare-metal/sgx) nel tuo account OVHcloud
- Disporre delle credenziali ricevute via e-mail dopo l'installazione
- Ubuntu 24.04 o equivalente installato sul server

## Procedura

### Attivare SGX

L'attivazione di SGX è possibile dal pannello clienti di OVHcloud, dall'API di OVHcloud o dal BIOS del tuo server.

> [!tabs]
> **Tramite lo Spazio Cliente OVHcloud**
>>
>> **1 - Connessione allo Spazio Cliente OVHcloud**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager), vai alla sezione `Bare Metal Cloud`{.action} e clicca su `Server dedicati`{.action}. Seleziona quindi il server su cui desideri abilitare SGX.
>>
>> **2 - Attivare SGX**
>>
>> Dall'onghetta `Informazioni generali`{.action}, nel riquadro **Funzionalità avanzate**, clicca su `...`{.action} accanto alla voce **Sicurezza - Intel SGX (Software Guard Extensions)** e seleziona `Attiva SGX`{.action} nel menu a discesa.
>>
>> ![Attivazione SGX](images/enable_sgx.png){.thumbnail}
>>
>> Nello schermo successivo, clicca sul pulsante `Attiva`{.action}.
>>
>> ![Attivazione SGX](images/enable_sgx2.png){.thumbnail}
>>
>> Puoi scegliere di abilitare SGX con una quantità specifica di memoria riservata o permettendo all'applicazione di riservare automaticamente la memoria necessaria. Una volta effettuata la scelta, clicca su `Conferma`{.action}.
>>
>> ![Gestione SGX](images/manage_sgx.png){.thumbnail}
>>
>> Verrà visualizzata una finestra di conferma. Conferma di aver compreso che l'abilitazione della tecnologia Intel SGX comporterà un riavvio del tuo server.
>>
>> ![Attivazione SGX](images/confirmation-popup_sgx.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Questo comporterà uno o più riavvii del tuo server, a seconda del modello.
>>
> **Tramite l'API OVHcloud**
>>
>> **1 - Connessione alla console API**
>>
>> Nella pagina delle [API OVHcloud](/links/console):
>>
>> - Clicca su `Authentication`{.action} in alto a sinistra.
>> - Clicca quindi su `Login with OVHcloud SSO`{.action}.
>> - Inserisci le tue credenziali OVHcloud.
>> - Clicca sul pulsante `Authorize`{.action} per autorizzare le chiamate alle API da questo sito.
>>
>> **2 - Attivare SGX**
>>
>> Recupera il nome del tuo server nell'elenco restituito dalla seguente chiamata:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server
>>
>> Verifica che il tuo servizio disponga dell'opzione SGX utilizzando questa chiamata:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/biosSettings/sgx
>>
>> ![SGX disabilitato](images/get-disabled.png){.thumbnail}
>>
>> Attiva SGX utilizzando il nome del server:
>>
>> > [!warning]
>> >
>> > Questo comporterà uno o più riavvii del tuo server, a seconda del modello.
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/biosSettings/sgx/configure
>>
>> ![Configurazione SGX](images/post-configure.png){.thumbnail}
>>
>> Verifica l'avanzamento del compito di configurazione chiamando questo endpoint con l'*taskId* restituito dalla chiamata precedente:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/task/{taskId}
>>
>> ![Ottieni il compito di configurazione SGX](images/get-task.png){.thumbnail}
>>
>> Puoi verificare che lo stato sia abilitato:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/biosSettings/sgx
>>
>> ![SGX abilitato](images/get-enabled.png){.thumbnail}
>>
> **Configurazione manuale nel BIOS**
>>
>> **1 - Avviare una sessione Remote KVM**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager), vai alla sezione `Bare Metal Cloud`{.action} e clicca su `Server dedicati`{.action}. Seleziona quindi il server su cui desideri abilitare SGX.
>>
>> Dall'onghetta `IPMI/KMV`{.action}, avvia una sessione Remote KVM:
>>
>> ![Avviare una sessione Remote KVM](images/manager.png){.thumbnail}
>>
>> **2 - Attivare SGX**
>>
>> Successivamente, dal KVM, avvia un riavvio del server e accedi al BIOS (di norma premendo il tasto `DEL`{.action} o `F2`{.action}).
>>
>> Nel BIOS, vai nella sezione `Advanced` > `Processor Configuration`.
>>
>> Attiva le Opzioni TME e SGX e configura la dimensione PRMRR desiderata:
>>
>> ![Attivare SGX](images/sgx_bios.png){.thumbnail}
>>
>> Salva le modifiche premendo il tasto `F10`{.action}. Verrà visualizzata una finestra di conferma, conferma con l'opzione `Yes`.
>>
>> Il tuo server successivamente si riavvierà sul tuo sistema operativo.
>>

### Installare la pila software SGX

Utilizza i seguenti comandi per installare l'SDK di Intel in modo da poter sviluppare ed eseguire applicazioni SGX.

Innanzitutto, installa alcune dipendenze:

```bash
sudo apt update
sudo apt install autoconf automake build-Essential cmake debhelper git libcurl4-openssl-dev libprotobuf-dev libssl-dev libtool lsb-release ocaml ocamlbuild protobuf-compiler python-is-python3 reprepro wget perl unzip pkgconf libboost-dev libboost-system-dev libboost-thread-dev libsystemd0
```

Successivamente, scarica il codice sorgente e prepara i sottomoduli e i binari pronti all'uso:

```bash
BASE_DIR=/opt/intel
[[ -d $BASE_DIR ]] || sudo mkdir -p $BASE_DIR && sudo chown `whoami` $BASE_DIR
cd $BASE_DIR
 
git clone https://github.com/intel/linux-sgx.git
 
cd linux-sgx
git checkout sgx_2.26
make preparation
```

Costruisci e installa l'SDK SGX:

```bash
make sdk_install_pkg
$ ./linux/installer/bin/sgx_linux_x64_sdk_2.26.100.0.bin --prefix=$BASE_DIR/
```

### Testare l'applicazione di esempio in modalità simulatore

Per costruire ed eseguire il codice di esempio *LocalAttestation* in modalità simulatore:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
 
make clean
SGX_MODE=SIM make
cd bin
./app
succeed to load enclaves.
succeed to establish secure channel.
Succeed to exchange secure message...
Succeed to close Session...
```

### Costruire e installare il PSW Intel SGX

Il software Intel SGX Platform Software (PSW) fornisce librerie software per eseguire applicazioni SGX in modalità hardware. Per creare il repository Debian locale che ospita i pacchetti, esegui i seguenti comandi:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/linux-sgx
make deb_local_repo
```

Crea il seguente file per aggiungere il repository locale dei pacchetti Debian al sistema di configurazione dei repository:

```bash
$ cat /etc/apt/sources.list.d/sgx.sources
Types: deb
URIs: file:/opt/intel/linux-sgx/linux/installer/deb/sgx_debian_local_repo
Suites: noble
Components: main
trusted: yes
```

Successivamente, installa i seguenti pacchetti:

```bash
sudo apt update
sudo apt-get install libsgx-epid libsgx-quote-ex libsgx-dcap-ql
```

### Testare l'applicazione di esempio in modalità hardware (opzionale)

Per costruire ed eseguire il codice di esempio *LocalAttestation* in modalità hardware:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
 
make clean
SGX_MODE=HW make
cd bin
./app
succeed to load enclaves.
succeed to establish secure channel.
Succeed to exchange secure message...
Succeed to close Session...
```

## Per saperne di più

Per approfondire (sviluppare la tua applicazione, iscriverti all'attestazione remota, ecc.), ecco alcune risorse utili:

- [Intel SGX](https://software.intel.com/en-us/sgx)
- [Intel SGX Attestation services](https://software.intel.com/en-us/sgx/attestation-services)
- [Intel SGX linux-2.26 documentation](https://download.01.org/intel-sgx/sgx-linux/2.26/docs/)
- [github.com/intel/linux-sgx](https://github.com/intel/linux-sgx)