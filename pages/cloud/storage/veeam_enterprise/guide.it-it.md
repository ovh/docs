---
title: 'Installare Veeam Backup & Replication'
slug: veeam-backup-replication
excerpt: 'Come configurare un server Veeam Backup & Replication con Veeam Enterprise'
section: 'Veeam Backup & Replication'
---

**Ultimo aggiornamento: 17/05/2019**

## Obiettivo

Veeam Backup & Replication è un software di protezione dei dati che offre diverse funzionalità di backup, replica e ripristino.

**Questa guida ti mostra come installare un server Veeam Backup & Replication e in che modo registrarlo sul server delle licenze Veeam Enterprise di OVH.**


## Prerequisiti

* Disporre dell’opzione Veeam Enterprise
* Disporre di una macchina Windows Server 2012 o 2016

## Procedura

### Installa Veeam Backup & Replication

Scarica la soluzione **Veeam Backup & Replication** dal sito di Veeam. Se non hai ancora registrato un account, creane uno (gratis).

Il file è un’immagine disco in formato ISO: dopo averlo trasferito sul tuo server, seleziona il lettore CD della macchina e scegli l’immagine, poi avvia l’installazione.

Seleziona `Install`{.action} per il componente <b>Veeam Backup & Replication</b>.

![](images/veeamBandR_inst_01.png){.thumbnail}

Prendi visione del contratto di licenza, accettalo e clicca su `Next`{.action}.

![](images/veeamBandR_inst_02.png){.thumbnail}

Ignora il passaggio relativo all’upload del file di licenza cliccando su `Next`{.action}.

![](images/veeamBandR_inst_03.png){.thumbnail}

Durante la selezione dei componenti da installare non è necessario apportare modifiche ma, in base alle tue esigenze, puoi cambiare la destinazione dell’installazione. Clicca su `Next`{.action} per confermare l’operazione.

![](images/veeamBandR_inst_04.png){.thumbnail}

A questo punto verrà effettuata una verifica dei requisiti. Partendo da un’installazione base di Windows alcuni componenti non saranno presenti, ma l’installer li scaricherà e installerà automaticamente. Clicca su `Next`{.action} per confermare l’operazione.

![](images/veeamBandR_inst_05.png){.thumbnail}

Attendi il completamento dell’installazione dei requisiti mancanti.

![](images/veeamBandR_inst_06.png){.thumbnail}

Conferma l’installazione di **Veeam Backup & Replication** cliccando su `Next`{.action}.

![](images/veeamBandR_inst_07.png){.thumbnail}

Nella fase di personalizzazione dell’installazione, accetta la configurazione cliccando su `Install`{.action}.

![](images/veeamBandR_inst_08.png){.thumbnail}

Attendi il completamento dell’installazione.

![](images/veeamBandR_inst_09.png){.thumbnail}

A operazione completata, esci dall’installer cliccando su `Finish`{.action}.

![](images/veeamBandR_inst_10.png){.thumbnail}

Ti verrà chiesto di riavviare Windows per finalizzare l’operazione. Clicca su `Yes`{.action}.

![](images/veeamBandR_inst_11.png){.thumbnail}

### Crea un account di servizio Veeam Enterprise

#### Attiva un account di servizio 

Per prima cosa, genera una password **complessa**.

Successivamente, crea un account di servizio accedendo come amministratore e utilizzando queste righe di comando: 

```powershell
New-LocalUser “OVHVeeamEnterprise” -Password (ConvertTo-SecureString - AsPlainText “P@ssword01” -Force) -Description “OVH Service Account for Veeam Enterprise -PasswordNeverExpires:$true -UserMayNotChangePassword:$true -AccountNeverExpires:$true
```

Sostituisci il nome dell’account (OVHVeeamEnterprise) e la password (P@ssword01) dell’esempio con le tue credenziali.
  
  

#### Definisci le autorizzazioni dell’account di servizio

Avvia la console Veeam ed esegui il login.

![](images/veeamBandR_use_12.png){.thumbnail}

Assicurati di aver effettuato l’accesso in modalità **Free Edition**, nell’angolo in basso a destra.

![](images/veeamBandR_conf_13.PNG){.thumbnail}

Nel menu, clicca su `Users and Roles`{.action}.

![](images/veeamBandR_conf_14.PNG){.thumbnail}

Nella finestra `Security`{.action}, seleziona `Add...`{.action}.

![](images/veeamBandR_conf_15.PNG){.thumbnail}

Nella finestra `Add User`{.action}, inserisci l’account di servizio creato precedentemente. Seleziona il ruolo **Veaam Backup Administrator** e clicca su `OK`{.action} per confermare.

![](images/veeamBandR_conf_15.PNG){.thumbnail}

Per verificare che l’account sia definito correttamente, torna sulla finestra **Security**.

![](images/veeamBandR_conf_16.PNG){.thumbnail}

#### Registra il server Veeam Backup & Replication

Per effettuare questo step, utilizza l’API OVH.

Per prima cosa, recupera il serviceName:

> [!api]
>
> @api {GET} /veeam/veeamEnterprise
>

Esegui la registrazione: 

> [!api]
>
> @api {POST} /veeamEnterprise/{serviceName}/register
>

Recupera queste informazioni:

 * l’indirizzo IP pubblico da utilizzare per contattare il server **Veeam Backup & Replication**
 * la porta del server **Veeam Backup & Replication** (solitamente **9392/TCP**)
 * l’utente dell’account di servizio creato precedentemente
 * la password dell’account di servizio

Per ottenere l’indirizzo IP pubblico utilizzato da Veeam Enterprise per contattare il server **Veeam Backup & Replication**, esegui il comando:

> [!api]
>
> @api {GET} /veeam/veeamEnterprise/service/{serviceName}
>

#### Verifica l’avvenuta registrazione

Avvia la console Veeam ed esegui il login.

![](images/veeamBandR_use_12.png){.thumbnail}

Clicca sul menu tendina e seleziona `Licence`{.action}.

![](images/veeamBandR_lic_1.png){.thumbnail}

Verifica le informazioni per assicurarti che si tratti della tua licenza OVH.

![](images/veeamBandR_lic_2.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.