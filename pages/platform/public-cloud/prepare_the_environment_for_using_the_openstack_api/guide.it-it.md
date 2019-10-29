---
title: 'Preparare l’ambiente per utilizzare l’API OpenStack'
slug: prepara_il_tuo_ambiente_di_sviluppo_per_utilizzare_lapi_openstack
excerpt: 'Come installare l’ambiente OpenStack per gestire le istanze via API'
section: 'Da client da riga di comando'
legacy_guide_number: g1851
---

**Ultimo aggiornamento: 28/06/2019**

## Obiettivo

Per gestire i servizi Public Cloud attraverso un terminale, è possibile scaricare e installare tool OpenStack: le API, per creare diversi script con cui automatizzare le operazioni; il client Nova, per gestire le istanze e lo spazio disco; il client Glance, per gestire ed eseguire operazioni su immagini e backup; Il client Swift, per gestire lo spazio di storage degli oggetti.

**Questa guida ti mostra la procedura da seguire per installare i client OpenStack.**

## Prerequisiti

- Disporre di un accesso **root** all’ambiente da configurare

## Procedura

### Con Debian

Apri il terminale o una connessione SSH verso l’ambiente da configurare.

Aggiorna la cache dei pacchetti utilizzando il comando `apt-get update`:

```sh
apt-get update
```

Installa i client per Nova (compute), Glance (image service) e Swift:

```sh
apt-get install python-openstackclient python-novaclient -y
```

A questo punto ti consigliamo di creare un altro user, in modo da non utilizzare l’utente amministratore.

Per consultare le guide d’utilizzo OpenStack, esegui questi comandi: 

```sh
openstack --help
nova help
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
Installa il rpm rdo-realease:

```sh
yum install -y https://rdoproject.org/repos/rdo-release.rpm
```

Installa il client OpenStack: 

```sh
yum install -y python-openstackclient
```

Installa Nova:

```sh
yum install -y python-novaclient
```

A questo punto ti consigliamo di creare un altro user, in modo da non utilizzare l’utente amministratore.

Per consultare le guide d’utilizzo OpenStack, esegui questi comandi: 

```sh
openstack --help
nova help
```

> [!primary]
> 
> Per consultare la documentazione relativa all’API OpenStack [clicca qui](https://docs.openstack.org/python-openstackclient/latest/){.external}.
> 

### Con Windows

Scarica e installa la versione 2.7.14 di Python. Per aggiungere automaticamente il linguaggio di programmazione Python al Path, seleziona nella finestra di configurazione l’opzione corrispondente:

![Installazione automatica](images/1_preparation_openstack_environment_windows.png){.thumbnail}

Per effettuare l’installazione in autonomia, segui la procedura descritta di seguito.

#### Step 1: modifica le variabili d'ambiente del sistema

Cerca “Modifica le variabili di ambiente relative al sistema” per trovare le impostazioni delle variabili d’ambiente del sistema.

![Impostazioni delle variabili d’ambiente](images/2_preparation_openstack_environment_windows.png){.thumbnail}

#### Step 2: modifica le impostazioni del sistema

Per personalizzare i parametri, seleziona la scheda `Avanzate`{.action} e clicca su `Variabili d’ambiente...`{.action} .

![Parametri delle performance](images/3_preparation_openstack_environment_windows.png){.thumbnail}

#### Step 3: configura le variabili d'ambiente 

Nella sezione **Variabili di sistema**, seleziona `Nuova...`{.action}, assegna il nome `PYTHON_HOME` alla variabile e imposta come valore il percorso di Python che, di default, sarà `C:\\Python27`.

![Aggiungi il percorso di accesso](images/4_edit_system_variables.png){.thumbnail}

#### Step 4: aggiungi il percorso per le variabili 

Dopo aver aggiunto Python, nelle variabili di sistema modifica `Path`{.action} aggiungendo alla fine del percorso:

`...,%PYTHON_HOME%\;%PYTHON_HOME%\Script`

#### Step 5: riavvia Windows

Per rendere effettive le modifiche apportate, riavvia il sistema.

#### Step 6: installa il client OpenStack

Accedi come amministratore, avvia il prompt dei comandi (CMD) e installa il client OpenStack eseguendo questo comando:

```sh
# pip install python-openstackclient
```

Se l’operazione è stata effettuata correttamente, si aprirà una schermata di riepilogo: 

![Installazione automatica](images/5_preparation_openstack_environment_windows.png){.thumbnail}

Per verificare la versione d’installazione nella finestra CMD, digita `python -V` da qualsiasi punto del sistema.

![Verifica](images/6_preparation_openstack_environment_windows.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.