---
title: 'Installare Veeam Backup & Replication'
slug: veeam/veeam-backup-replication
excerpt: 'Come configurare un server Veeam Backup & Replication con Veeam Enterprise'
section: 'Veeam Backup & Replication'
---

**Ultimo aggiornamento: 08/03/2022**

## Obiettivo

Veeam Backup & Replication è un software di protezione dei dati che offre diverse funzionalità di backup, replica e ripristino.

**Questa guida ti mostra come installare un server Veeam Backup & Replication e in che modo registrarlo sul server delle licenze Veeam Enterprise di OVHcloud.**


## Prerequisiti

* Disporre dell’opzione [Veeam Enterprise](https://www.ovhcloud.com/it/storage-solutions/veeam-enterprise/){.external}.
* Disporre di una macchina Windows Server 2012 o di una versione più recente.

## Procedura

### Installa Veeam Backup & Replication

Scarica la soluzione **Veeam Backup & Replication** dal [sito di Veeam](https://www.veeam.com/downloads.html?ad=top-sub-menu){.external}. Se non hai ancora registrato un account, creane uno (gratis).

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

Verrai reindirizzato all'assistente all'installazione, ti sarà sufficiente chiudere la finestra.

### Crea un account di servizio Veeam Enterprise

#### Attiva un account di servizio 

Per prima cosa, genera una password **complessa**.

Per iniziare, attiva Windows Powershell come amministratore.

Successivamente, crea un account di servizio accedendo come amministratore e utilizzando queste righe di comando: 

```powershell
New-LocalUser “OVHVeeamEnterprise” -Password (ConvertTo-SecureString - AsPlainText “P@ssword01” -Force) -Description “OVH Service Account for Veeam Enterprise -PasswordNeverExpires:$true -UserMayNotChangePassword:$true -AccountNeverExpires:$true
```

Tieni presente che il nome dell'account e la password rappresentano un esempio e devono essere sostituiti:

* Nome dell'account: OVHVeeamEnterprise
* Password: P@ssword01
  

#### Definisci le autorizzazioni dell’account di servizio

Avvia la console Veeam ed esegui il login.

![](images/veeamBandR_use_12.png){.thumbnail}

Assicurati di aver effettuato l’accesso in modalità **Community Edition**, nell’angolo in basso a destra.

![](images/Veeamcommunity.png){.thumbnail}

Nel menu, clicca su `Users and Roles`{.action}.

![](images/veeamBandR_conf_2.png){.thumbnail}

Nella finestra `Security`{.action}, seleziona `Add...`{.action}.

![](images/veeamBandR_conf_3.png){.thumbnail}

Nella finestra `Add User`{.action}, inserisci l’account di servizio creato precedentemente. Seleziona il ruolo **Veaam Backup Administrator** e clicca su `OK`{.action} per confermare.

![](images/veeamBandR_conf_4.png){.thumbnail}

Per verificare che l’account sia definito correttamente, torna sulla finestra **Security**.

![](images/veeamBandR_conf_5.png){.thumbnail}

#### Autorizzazioni di esecuzione e di attivazione

L'utente OVHVeeamEnterprise è accessibile solo in locale. Per attivare la connessione remota, è necessario aggiungere autorizzazioni nell'interfaccia utente grafica Windows.

Tramite l'interfaccia grafica utente:

1. Nella barra di ricerca Windows, inserisci `Component Services`{.action} e avvia il servizio.
2. Nel menu a sinistra e nella colonna a sinistra, clicca su `Component Services`{.action}, poi `Computers`{.action}, poi `My Computer`{.action}.
3. A destra, sotto la scheda `Actions`{.action}, clicca su `More Actions`{.action} e poi su `Properties`{.action}.
4. Seleziona `COM Security`{.action} e sotto la seconda sezione `Launch and Activation Permissions`{.action}, clicca su `Edit Limits`{.action}. Poi clicca su `Add...`{.action}.

![Launch and Activation Permissions](images/veeamuseradd.png){.thumbnail}

<ol start="5">
 <li>Clicca su <code class="action">Advanced...</code> per localizzare l'account di servizio precedentemente aggiunto. Clicca su <code class="action">Find Now</code> e seleziona l'utente <code class="action">OVHVeeamEnterprise</code> nella lista degli utenti.</li>
</ol>

![Launch and Activation Permissions](images/veeamuseradd1.png){.thumbnail}

<ol start="6">
 <li>clicca su <code class="action">OK</code> per confermare la selezione e poi su `<code class="action">OK</code>. In seguito, attiva tutti i permessi sull'utente `OVHVeeamEnterprise`{.action}.</li>
</ol>

![Launch and Activation Permissions](images/veeamuseradd3.png){.thumbnail}

<ol start="7">
 <li>Clicca su <code class="action">OK</code> per confermare e <code class="action">Apply</code> per validare le modifiche.</li>
</ol>

Il tuo utente OVHVeeamEnterprise è accessibile in locale e a distanza.

#### Registra il server Veeam Backup & Replication

## Dallo Spazio Cliente OVHcloud

Accedi alla sezione `Hosted Private Cloud`{.action} del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca su `Hosted Private Cloud`{.action} e seleziona `Piattaforme e servizi`{.action}. Seleziona il tuo servizio **backupserverenterenterprise** e clicca su `Attiva la licenza`{.action} nella sezione `Scelta rapida`.

![](images/veeam001.png){.thumbnail}

Nella nuova finestra inserisci le seguenti informazioni:

 l’indirizzo IP pubblico da utilizzare per contattare il server **Veeam Backup & Replication**
 * la porta del server **Veeam Backup & Replication** (solitamente **9392/TCP**)
 * l’utente dell’account di servizio creato precedentemente
 * la password dell’account di servizio

 Clicca su `OK`{.action} per confermare.

![](images/veeam03.png){.thumbnail}

Una volta attivata l'opzione, visualizzi le informazioni principali nella pagina del servizio.

![](images/veeam02.png){.thumbnail}

## Con l'API OVHcloud

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

Clicca sul menu tendina e seleziona `License`{.action}.

![](images/veeamBandR_lic_1.png){.thumbnail}

Verifica le informazioni per assicurarti che si tratti della tua licenza OVHcloud.

![](images/veeamBandR_lic_2.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.