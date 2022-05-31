---
title: Ripristina i backup tramite le API OVHcloud
slug: veeam-backup-restoration
routes:
    canonical: 'https://docs.ovh.com/it/private-cloud/veeam-backup-restoration/'
excerpt: Come ripristinare i backup Veeam Managed Backup tramite le API OVHcloud
section: Servizi e opzioni OVHcloud
order: 06
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 29/03/2021**

## Obiettivo

**Questa guida ti mostra come identificare e ripristinare i backup tramite le API OVHcloud.**

## Prerequisiti

- Essere connesso alle [API OVHcloud](https://api.ovh.com/)
- [Veeam Managed Backup attivo](https://docs.ovh.com/gb/en/managed-bare-metal/veeam-backup-as-a-service/) sulla soluzione Hosted Private Cloud

## Procedura

Se non sei abituato al funzionamento delle API OVHcloud, consulta la nostra guida Iniziare [a utilizzare le API OVHcloud](https://docs.ovh.com/it/api/first-steps-with-ovh-api/).

### Step 1: genera un report dei backup

Per prima cosa, seleziona i backup da ripristinare.

Accedi alla pagina [https://api.ovh.com/](https://api.ovh.com/) e utilizza questa chiamata:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/generateReport

Inserisci le variabili:

- serviceName: il riferimento del tuo PCC in forma `pcc-XX-XX-XX-XX`
- datacenterId: l'ID del datacenter su cui è attiva la soluzione Veeam Managed Backup

Questa chiamata genererà un report dei backup. Riceverai un'email all'indirizzo indicato sull'account amministratore del servizio Hosted Private Cloud.
<br>L'email elenca i seguenti elementi:

- Nome della VM
- Backup effettuati (BackupJobName)
- Dimensione di ogni backup
- **Cartella di storage (BackupRepository)**
- Ultimo punto di ripristino

![email](images/backup-report-email2.png){.thumbnail}

Annota la cartella di storage (BackupRepository), che ti permetterà di ripristinare i backup nello step successivo.

### Step 2: ripristina i backup

> [!warning]
>
> Prima di avviare il ripristino, assicurati che il datastore disponga di una capacità di storage sufficiente per ospitare tutti i dati da ripristinare.
>
> In caso contrario, riceverai un'email di notifica e l'operazione verrà annullata.

La chiamata API ripristina gli ultimi punti di ripristino validi di ogni backup presente sulla cartella di storage.

Accedi alla pagina [https://api.ovh.com/](https://api.ovh.com/) e utilizza questa chiamata:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/batchRestore
>

Inserisci le variabili:

- serviceName: il riferimento del tuo PCC in forma `pcc-XX-XX-XX-XX`
- datacenterId: l'ID del datacenter su cui è attiva la soluzione Veeam Managed Backup
- backupJobName (facoltativo): nome di un backup (ottenuto allo step 1) sotto forma `pcc-XXX-XXX-XXX-XXX_vm-XXX` se desideri ripristinare una sola VM.
- backupRepositoryName: il nome del backupRepository ottenuto allo Step 1

Una volta terminato il ripristino, nell'interfaccia vSphere sono disponibili le VM che corrispondono ai backup ripristinati.
<br>Per identificarli, i loro nomi contengono il suffisso *BatchRestore* e un orario della ristorazione.
<br>Le VM sono ripristinate spente. A vostra carico, accenderli.

![vSphere](images/vcenter2.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
