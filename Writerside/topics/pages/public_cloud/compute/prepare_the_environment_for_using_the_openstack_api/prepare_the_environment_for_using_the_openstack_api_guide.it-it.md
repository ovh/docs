---
title: 'Preparare l’ambiente per utilizzare l’API OpenStack'
excerpt: 'Come installare l’ambiente OpenStack per gestire le istanze via API'
updated: 2024-01-22
---

## Obiettivo

Per gestire i servizi Public Cloud attraverso un terminale, è possibile scaricare e installare tool OpenStack: le API, per creare diversi script con cui automatizzare le operazioni.

> [!primary]
>
> OpenStack richiede Python >=3.8.
> Questa guida descrive l'installazione del pacchetto `python-openstackclient` che contiene la linea di comando per la maggior parte dei progetti OpenStack.
> Il progetto Octavia (che alimenta il `Public Cloud Load Balancer`) non è incluso. È quindi necessario eseguire `pip3 install python-octaviaclient` oltre alle istruzioni di installazione che si trovano di seguito.

**Questa guida ti mostra la procedura da seguire per installare i client OpenStack.**

## Prerequisiti

- Disporre di un accesso **root** all’ambiente da configurare

## Procedura

### Con Debian

Apri il terminale o una connessione SSH verso l’ambiente da configurare.

Aggiorna la cache dei pacchetti utilizzando il comando `apt update`:

```sh
apt update
```

Utilizzare il comando seguente per installare i client OpenStack:

```sh
$ apt install python3-pip python3-venv -y
$ python3 -m venv env
$ source env/bin/activate
(env)$ pip3 install --upgrade pip
(env)$ pip3 install python-openstackclient
```

A questo punto ti consigliamo di creare un altro user, in modo da non utilizzare l’utente amministratore.

Per consultare le guide d’utilizzo OpenStack, esegui questi comandi: 

```sh
openstack --help
```

> [!primary]
> 
> Per consultare la documentazione relativa all’API OpenStack [clicca qui](https://docs.openstack.org/python-openstackclient/latest/){.external}.
> 

### Con CentOS

Apri il terminale o una connessione SSH verso l’ambiente da configurare.

Aggiorna la cache dei pacchetti utilizzando questo comando:

```sh
yum update -y
```

Utilizzare il comando seguente per installare i client OpenStack:

```sh
yum install python3-pip -y
$ python3 -m venv env
$ source env/bin/activate
(env)$ pip3 install --upgrade pip
(env)$ pip3 install python-openstackclient
```

A questo punto ti consigliamo di creare un altro user, in modo da non utilizzare l’utente amministratore.

Per consultare le guide d’utilizzo OpenStack, esegui questi comandi: 

```sh
openstack --help
```

> [!primary]
> 
> Per consultare la documentazione relativa all’API OpenStack [clicca qui](https://docs.openstack.org/python-openstackclient/latest/){.external}.
> 

### Con Windows

Scarica e installa la versione 3.12.0 di Python. Per aggiungere automaticamente il linguaggio di programmazione Python al Path, seleziona nella finestra di configurazione l’opzione corrispondente:

![Installazione automatica](1_preparation_openstack_environment_windows.png){.thumbnail}

Per effettuare l’installazione in autonomia, segui la procedura descritta di seguito.

#### Step 1: modifica le variabili d'ambiente del sistema

Cerca “Modifica le variabili di ambiente relative al sistema” per trovare le impostazioni delle variabili d’ambiente del sistema.

![Impostazioni delle variabili d’ambiente](2_preparation_openstack_environment_windows.png){.thumbnail}

#### Step 2: modifica le impostazioni del sistema

Per personalizzare i parametri, seleziona la scheda `Avanzate`{.action} e clicca su `Variabili d’ambiente...`{.action}.

![Parametri delle performance](3_preparation_openstack_environment_windows.png){.thumbnail}

#### Step 3: configura le variabili d'ambiente 

Nella sezione **Variabili di sistema**, seleziona `Nuova...`{.action}, assegna il nome `PYTHON_HOME` alla variabile e imposta come valore il percorso di Python.

![Aggiungi il percorso di accesso](4_edit_system_variables.png){.thumbnail}

#### Step 4: aggiungi il percorso per le variabili 

Dopo aver aggiunto Python, nelle variabili di sistema modifica `Path`{.action} aggiungendo alla fine del percorso:

`...,%PYTHON_HOME%\;%PYTHON_HOME%\Script`

#### Step 5: riavvia Windows

Per rendere effettive le modifiche apportate, riavvia il sistema.

#### Step 6: installa il client OpenStack

Accedi come amministratore, avvia il prompt dei comandi (CMD) e installa il client OpenStack eseguendo questo comando:

```sh
pip install python-openstackclient
```

Se l’operazione è stata effettuata correttamente, si aprirà una schermata di riepilogo: 

![Installazione automatica](5_preparation_openstack_environment_windows.png){.thumbnail}

Per verificare la versione d’installazione nella finestra CMD, digita `python -V` da qualsiasi punto del sistema.

![Verifica](6_preparation_openstack_environment_windows.png){.thumbnail}

### Con MacOS

È possibile utilizzare [HomeBrew](https://brew.sh), un gestore di pacchetti per MacOS.

Apri il terminale e inserisci questo comando:

```bash
brew install openstackclient
```

Per accedere ai tool di aiuto, esegui questo comando:

```sh
openstack --help
```

## Per saperne di più

[Impostare le variabili d’ambiente OpenStack](loading_openstack_environment_variables1.).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.