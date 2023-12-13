---
title: 'Installare Veeam Backup & Replication'
excerpt: 'Come configurare un server Veeam Backup & Replication con Veeam Enterprise'
updated: 2023-06-23
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

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

![Veeam Backup & Replication](images/veeamBandR_inst_01.png){.thumbnail}

Prendi visione del contratto di licenza, accettalo e clicca su `Next`{.action}.

![Veeam Backup & Replication](images/veeamBandR_inst_02.png){.thumbnail}

Ignora il passaggio relativo all’upload del file di licenza cliccando su `Next`{.action}.

![Veeam Backup & Replication](images/veeamBandR_inst_03.png){.thumbnail}

Durante la selezione dei componenti da installare non è necessario apportare modifiche ma, in base alle tue esigenze, puoi cambiare la destinazione dell’installazione. Clicca su `Next`{.action} per confermare l’operazione.

![Veeam Backup & Replication](images/veeamBandR_inst_04.png){.thumbnail}

A questo punto verrà effettuata una verifica dei requisiti. Partendo da un’installazione base di Windows alcuni componenti non saranno presenti, ma l’installer li scaricherà e installerà automaticamente. Clicca su `Next`{.action} per confermare l’operazione.

![Veeam Backup & Replication](images/veeamBandR_inst_05.png){.thumbnail}

Attendi il completamento dell’installazione dei requisiti mancanti.

![Veeam Backup & Replication](images/veeamBandR_inst_06.png){.thumbnail}

Conferma l’installazione di **Veeam Backup & Replication** cliccando su `Next`{.action}.

![Veeam Backup & Replication](images/veeamBandR_inst_07.png){.thumbnail}

Nella fase di personalizzazione dell’installazione, accetta la configurazione cliccando su `Install`{.action}.

![Veeam Backup & Replication](images/veeamBandR_inst_08.png){.thumbnail}

Attendi il completamento dell’installazione.

![Veeam Backup & Replication](images/veeamBandR_inst_09.png){.thumbnail}

A operazione completata, esci dall’installer cliccando su `Finish`{.action}.

![Veeam Backup & Replication](images/veeamBandR_inst_10.png){.thumbnail}

Verrai reindirizzato all'assistente all'installazione, ti sarà sufficiente chiudere la finestra.

### Crea un account di servizio Veeam Enterprise

#### Passo 1 - Attiva un account di servizio

Per prima cosa, genera una password **complessa**.

Per iniziare, attiva Windows Powershell come amministratore.

Successivamente, crea un account di servizio accedendo come amministratore e utilizzando queste righe di comando:

```powershell
New-LocalUser “OVHVeeamEnterprise” -Password (ConvertTo-SecureString - AsPlainText “P@ssword01” -Force) -Description “OVH Service Account for Veeam Enterprise -PasswordNeverExpires:$true -UserMayNotChangePassword:$true -AccountNeverExpires:$true
```

Tieni presente che il nome dell'account e la password rappresentano un esempio e devono essere sostituiti:

* Nome dell'account: OVHVeeamEnterprise
* Password: P@ssword01

#### Passo 2 - Definisci le autorizzazioni dell’account di servizio

Avvia la console Veeam ed esegui il login.

![Veeam Backup & Replication](images/veeamBandR_use_12.png){.thumbnail}

Assicurati di aver effettuato l’accesso in modalità **Community Edition**, nell’angolo in basso a destra.

![Veeam Backup & Replication](images/Veeamcommunity.png){.thumbnail}

Nel menu, clicca su `Users and Roles`{.action}.

![Veeam Backup & Replication](images/veeamBandR_conf_2.png){.thumbnail}

Nella finestra `Security`{.action}, seleziona `Add...`{.action}.

![Veeam Backup & Replication](images/veeamBandR_conf_3.png){.thumbnail}

Nella finestra `Add User`{.action}, inserisci l’account di servizio creato precedentemente. Seleziona il ruolo **Veaam Backup Administrator** e clicca su `OK`{.action} per confermare.

![Veeam Backup & Replication](images/veeamBandR_conf_4.png){.thumbnail}

Per verificare che l’account sia definito correttamente, torna sulla finestra **Security**.

![Veeam Backup & Replication](images/veeamBandR_conf_5.png){.thumbnail}

#### Passo 3 - Autorizzazioni di esecuzione e di attivazione

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

#### Passo 4 - Registra il server Veeam Backup & Replication

##### Dallo Spazio Cliente OVHcloud

Accedi alla sezione `Hosted Private Cloud`{.action} del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca su `Hosted Private Cloud`{.action} e seleziona `Piattaforme e servizi`{.action}. Seleziona il tuo servizio **backupserverenterenterprise** e clicca su `Attiva la licenza`{.action}` nella sezione `Scelta rapida`.

Per configurare il tuo ambiente, assicurati di aver aperto le porte da OVHcloud ai tuoi server Veeam Backup e Replication:

- `Porta 9392/TCP`
- `Porta 9405/TCP`

![installazione Veeam](images/architecture.png){.thumbnail}

![Veeam Backup & Replication](images/veeam001.png){.thumbnail}

Nella nuova finestra inserisci le seguenti informazioni:

- l’indirizzo IP pubblico da utilizzare per contattare il server **Veeam Backup & Replication**
- l’utente dell’account di servizio creato precedentemente
- a password dell’account di servizio

Clicca su `OK`{.action} per confermare.

![Veeam Backup & Replication](images/veeam03.png){.thumbnail}

Una volta attivata l'opzione, visualizzi le informazioni principali nella pagina del servizio.

![Veeam Backup & Replication](images/veeam02.png){.thumbnail}

##### Con l'API OVHcloud

Per prima cosa, recupera il serviceName:

> [!api]
>
> @api {v1} /veeam/veeamEnterprise GET /veeam/veeamEnterprise
>

Esegui la registrazione:

> [!api]
>
> @api {v1} /veeam/veeamEnterprise POST /veeam/veeamEnterprise/{serviceName}/register
>

Recupera queste informazioni:

 * l’indirizzo IP pubblico da utilizzare per contattare il server **Veeam Backup & Replication**
 * la porta del server **Veeam Backup & Replication** (solitamente **9392/TCP**)
 * l’utente dell’account di servizio creato precedentemente
 * la password dell’account di servizio

Per ottenere l’indirizzo IP pubblico utilizzato da Veeam Enterprise per contattare il server **Veeam Backup & Replication**, esegui il comando:

> [!api]
>
> @api {v1} /veeam/veeamEnterprise GET /veeam/veeamEnterprise/service/{serviceName}
>

> [!primary]
> L'attivazione del tuo server Veeam Backup & Replication può richiedere fino a diverse ore.

#### Passo 5 - Verifica l’avvenuta registrazione

Avvia la console Veeam ed esegui il login.

![Veeam Backup & Replication](images/veeamBandR_use_12.png){.thumbnail}

Clicca sul menu tendina e seleziona `License`{.action}.

![Veeam Backup & Replication](images/veeamBandR_lic_1.png){.thumbnail}

Verifica le informazioni per assicurarti che si tratti della tua licenza OVHcloud.

Se tutto è andato bene si dovrebbe vedere "Edizione: Enterprise Plus".

> [!primary]
> Ora puoi disattivare l'utente che hai creato per creare la registrazione.

![Veeam Backup & Replication](images/veeamBandR_lic_2.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti su Discord: <https://discord.gg/ovhcloud>

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
