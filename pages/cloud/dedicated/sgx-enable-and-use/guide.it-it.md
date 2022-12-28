---
title: 'Attiva Intel SGX sul tuo server dedicato'
slug: enable-and-use-intel-sgx
excerpt: 'Come attivare SGX sul tuo server Infrastructure o Advance e installare lo stack software Linux SGX'
section: 'Utilizzo avanzato'
---

**Ultimo aggiornamento: 31/08/2022**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Questa guida ti mostra come attivare Intel Software Guard Extension sul tuo server per poter utilizzare le applicazioni SGX-ready.
Intel SGX offre funzionalità avanzate di crittografia di sicurezza hardware e RAM allo scopo di isolare parti di codice e dati specifici per ogni applicazione.

## Prerequisiti

- Un server dedicato [Infrastructure](https://www.ovhcloud.com/it/bare-metal/infra/){.external} o [Advance](https://www.ovhcloud.com/it/bare-metal/advance/){.external} dotato dell’opzione [SGX](https://www.ovhcloud.com/it/bare-metal/intel-software-guard-extensions/){.external}
- Avere accesso al server via SSH con l’utente root
- Avere accesso alle [API OVHcloud](https://api.ovh.com/){.external}
- Aver installato Ubuntu 18.04 (o un sistema operativo simile) sul server

> [!warning]
>
> Tra la gamma Advance, solo i server di seguito, dotati di CPU Intel, sono compatibili con la tecnologia Intel SGX:
>
> - Advance-1
> - Advance-2
> - Advance-6
> - Advance-APAC

## Procedura

### Dallo Spazio Cliente

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), accedi alla sezione `Bare Metal Cloud`{.action} e seleziona il server su cui vuoi attivare SGX nella sezione **Server dedicati** del menu a sinistra.

#### Attiva l'opzione

Scendi fino alla zona `Funzionalità avanzate` e clicca su `...`{.action} in corrispondenza di "Sicurezza - Intel SGX (Software Guard Extensions)". Seleziona `Attiva SGX`{.action} nel menu a tendina.

![attivazione SGX](images/enable_sgx.png){.thumbnail}

Nella finestra successiva clicca sul pulsante `Attiva`{.action}.

![attivazione SGX](images/enable_sgx2.png){.thumbnail}

Puoi scegliere di attivare SGX con una quantità specifica di memoria riservata o attivarla permettendo al tuo software di prenotare automaticamente la memoria di cui ha bisogno. Una volta effettuata la scelta, clicca su `Conferma`{.action}.

![attivazione SGX](images/manage_sgx.png){.thumbnail}

A questo punto, compare un pop-up di conferma, conferma che per attivare la tecnologia Intel SGX è necessario riavviare il tuo server.

![attivazione SGX](images/confirmation-popup_sgx.png){.thumbnail}

> [!warning]
>
> In base al server, questa azione comporta l'avvio da 1 a diversi riavvii.

#### Disattivazione dell'opzione

Scendi fino alla zona `Funzionalità avanzate` e clicca su `...`{.action} in corrispondenza di "Sicurezza - Intel SGX (Software Guard Extensions)". Seleziona `Modifica SGX`{.action} nel menu a tendina. Scegli l'opzione `Disattivare`{.action} e clicca su `Conferma`{.action}.

![Disattivazione di SGX](images/disable_sgx.png){.thumbnail}

> [!warning]
>
> In base al server, questa azione comporta l'avvio da 1 a diversi riavvii.

Continua la lettura di questa guida allo [Step 3](#sgx-softwares).

### Via API OVHcloud

#### Step 1: accedi alla console API

Vai sul sito <https://api.ovh.com/console/> e clicca su`Login`{.action} in alto a destra.  
Nella nuova pagina, effettua l’accesso con le credenziali del tuo account OVHcloud.

#### Step 2: attiva SGX

Recupera il nome del server dalla lista ottenuta da questa chiamata:

> [!api]
>
> @api {GET} /dedicated/server

Verifica che il tuo server abbia l’opzione SGX effettuando questa chiamata:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/biosSettings/sgx

![SGX disabled](images/get-disabled.png){.thumbnail}

A questo punto, attiva SGX:

> [!warning]
>
> In base al server, questa azione comporta l'avvio da 1 a diversi riavvii.

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/biosSettings/sgx/configure

![Configure SGX](images/post-configure.png){.thumbnail}

Controlla lo stato di avanzamento della configurazione chiamando questo endpoint con il taskld ottenuto dalla chiamata precedente:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/task/{taskId}

![Get SGX configuration task](images/get-task.png){.thumbnail}

Ora verifica che l’opzione sia attiva:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/biosSettings/sgx

![SGX enabled](images/get-enabled.png){.thumbnail}

#### Step 3: installa lo stack software SGX <a name="sgx-softwares"></a>

A questo punto installa il driver Intel e SDK per sviluppare ed eseguire le applicazioni SGX.  

Per prima cosa, installa alcune dipendenze:

```bash
sudo apt-get install build-essential ocaml ocamlbuild automake autoconf libtool wget python libssl-dev libcurl4-openssl-dev protobuf-compiler libprotobuf-dev debhelper cmake git
```

Poi, scarica, costruisci e installa il software SGX:

```bash
BASE_DIR=/opt/intel
[[ -d $BASE_DIR ]] || sudo mkdir -p $BASE_DIR && sudo chown `whoami` $BASE_DIR
cd $BASE_DIR

git clone https://github.com/intel/linux-sgx.git

cd linux-sgx
git checkout sgx_2.6
./download_prebuilt.sh
make -j 6
make sdk_install_pkg -j 6
make deb_pkg -j 6
$BASE_DIR/linux-sgx/linux/installer/bin/sgx_linux_x64_sdk_2.6.100.51363.bin --prefix=$BASE_DIR/

sudo dpkg -i $BASE_DIR/linux-sgx/linux/installer/deb/libsgx-urts_2.6.100.51363-bionic1_amd64.deb $BASE_DIR/linux-sgx/linux/installer/deb/libsgx-enclave-common_2.6.100.51363-bionic1_amd64.deb
```

Scarica e installa il driver:

```bash
wget https://download.01.org/intel-sgx/linux-2.6/ubuntu18.04-server/sgx_linux_x64_driver_2.5.0_2605efa.bin
chmod +x sgx_linux_x64_driver_2.5.0_2605efa.bin
sudo ./sgx_linux_x64_driver_2.5.0_2605efa.bin
```

#### Step 4: riavvia il sistema per completare l’installazione

#### Step 5: utilizza un’applicazione campione per convalidare l’installazione

Costruisci una delle applicazioni campione proposte:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
make SGX_DEBUG=0 SGX_MODE=HW SGX_PRERELEASE=1
```

Esegui l’applicazione:

```bash
ovh@nsXXXX:/opt/intel/sgxsdk/SampleCode/LocalAttestation$ ./app 

Available Enclaves
Enclave1 - EnclaveID 2
Enclave2 - EnclaveID 3
Enclave3 - EnclaveID 4

Secure Channel Establishment between Source (E1) and Destination (E2) Enclaves successful !!!

Enclave to Enclave Call between Source (E1) and Destination (E2) Enclaves successful !!!

Message Exchange between Source (E1) and Destination (E2) Enclaves successful !!!

Secure Channel Establishment between Source (E1) and Destination (E3) Enclaves successful !!!

Enclave to Enclave Call between Source (E1) and Destination (E3) Enclaves successful !!!

Message Exchange between Source (E1) and Destination (E3) Enclaves successful !!!

Secure Channel Establishment between Source (E2) and Destination (E3) Enclaves successful !!!

Enclave to Enclave Call between Source (E2) and Destination (E3) Enclaves successful !!!

Message Exchange between Source (E2) and Destination (E3) Enclaves successful !!!

Secure Channel Establishment between Source (E3) and Destination (E1) Enclaves successful !!!

Enclave to Enclave Call between Source (E3) and Destination (E1) Enclaves successful !!!

Message Exchange between Source (E3) and Destination (E1) Enclaves successful !!!

Message Exchange between Source (E1) and Destination (E2) Enclaves successful !!!

Message Exchange between Source (E1) and Destination (E3) Enclaves successful !!!

Message Exchange between Source (E2) and Destination (E3) Enclaves successful !!!

Message Exchange between Source (E3) and Destination (E1) Enclaves successful !!!

Premi un tasto...
```

## Spingiti oltre

Per saperne di più (ad esempio, su come sviluppare la tua applicazione o registrarsi per un’attestazione remota, ecc.) ecco alcune risorse utili:

- [Intel SGX](https://software.intel.com/en-us/sgx){.external}
- [Intel SGX Attestation service](https://software.intel.com/en-us/sgx/attestation-services){.external}
- [Intel SGX linux-2.6 documentation](https://download.01.org/intel-sgx/linux-2.6/docs/){.external}
- [github.com/intel/linux-sgx](https://github.com/intel/linux-sgx){.external}
- [github.com/intel/linux-sgx-driver](https://github.com/intel/linux-sgx-driver){.external}
- [github.com/intel/sgx-ra-sample](https://github.com/intel/sgx-ra-sample){.external}
