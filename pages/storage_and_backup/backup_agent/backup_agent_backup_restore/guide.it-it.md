---
title: "Backup Agent - Gestisci i tuoi backup e le tue ripristini"
excerpt: "Scopri come effettuare backup e ripristinare i tuoi dati sui server Bare Metal con Backup Agent"
updated: 2026-02-03
---

## Obiettivo

Scopri come effettuare backup e ripristinare i tuoi dati sui server Bare Metal con Backup Agent.

> [!primary]
> 
> Ulteriori informazioni sul prodotto Backup Agent sono disponibili su [questa pagina](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).
>

## Prerequisiti

- Un server Bare Metal su cui è installato Backup Agent. Consulta la nostra guida "[Come configurare il tuo primo backup](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)" per ulteriori informazioni.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Percorso di navigazione:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## Procedura

### Backup

Hai due opzioni per effettuare backup: automatico e manuale.

#### Backup automatico

Il backup automatico è integrato nella politica di backup che applichiamo al tuo Backup Agent.

Si tratta di un backup completo del tuo server, che verrà inviato al tuo punto di archiviazione remoto.

> [!warning]
> 
> Questo avrà luogo tra le 22:00 e le 6:00 (fuso orario CET per l'Europa e fuso orario EST per il Canada e l'Asia).

> [!primary]
> 
> Non è possibile modificare o disattivare questo backup automatico.
> Al momento Lei non può modificare la politica di backup di tutto il Suo server, stiamo lavorando per migliorare questa configurazione in futuro.

Potrai verificare il successo di questo backup tramite:

- Il rapporto quotidiano sui backup.
- Il pannello "Backup Jobs" della console Veeam Service Provider.

![Backup Agent VSPC Backup Jobs](images/01-backup-agent-vspc-backup-jobs.png){.thumbnail}

![Backup Agent VSPC Job](images/01-backup-agent-vspc-job.png){.thumbnail}

#### Backup manuale

In caso di necessità, puoi attivare un backup manuale.

Questo effettuerà un backup completo del tuo server, che verrà inoltre inviato al tuo punto di archiviazione remoto.

Clicca sull'opzione corrispondente al tuo sistema operativo:

> [!tabs]
> Windows
>>
>> Apri l'applicazione "Veeam Agent" sul tuo server Bare Metal:
>>
>> ![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}
>>
>> Clicca sul pulsante `Backup Now`{.action} per avviare un backup:
>>
>> ![Backup Agent BKP Agent](images/01-backup-agent-bkpagent.png){.thumbnail}
>
> Linux
>>
>> Per avviare un backup manuale su Linux, puoi utilizzare la riga di comando.
>>
>> Connetti al tuo server Bare Metal tramite SSH e esegui il comando seguente per elencare i tuoi job di backup:
>>
>> ```bash
>> sudo veeamconfig job list
>> ```
>>
>> Per avviare un backup manuale, utilizza il comando seguente sostituendo `<nom_du_job>` con il nome del tuo job di backup:
>>
>> ```bash
>> sudo veeamconfig job start <nom_du_job>
>> ```
>>
>> Se desideri avviare tutti i job di backup, utilizza:
>>
>> ```bash
>> sudo veeamconfig job start --all
>> ```
>>
>> Puoi seguire l'andamento del backup consultando le sessioni attive:
>>
>> ```bash
>> sudo veeamconfig session list
>> ```
>>
>> Puoi anche disporre di un'interfaccia per interagire con il prodotto digitando questo comando:
>>
>> ```bash
>> sudo veeam
>> ```

### Ripristino

In caso di necessità di ripristinare dati, hai due opzioni:

- tramite l'assistente di ripristino file;
- tramite l'ISO Veeam Baremetal Recovery.

#### Assistant di ripristino file

Per ripristinare file e cartelle, clicca sull'opzione corrispondente al tuo sistema operativo:

> [!tabs]
> Windows
>>
>> Apri l'applicazione "Veeam Agent" sul tuo server Baremetal:
>>
>> ![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}
>>
>> Vai nel menu e seleziona `Restore File`{.action}:
>>
>> ![Backup Agent Restore Menu](images/01-backup-agent-restore-menu.png){.thumbnail}
>>
>> Seleziona il punto di ripristino desiderato nell'assistente:
>>
>> ![Backup Agent Restore Points](images/01-backup-agent-restore-restore-points.png){.thumbnail}
>>
>> Poi conferma:
>>
>> ![Backup Agent Restore Point Summary](images/01-backup-agent-restore-restore-point-summary.png){.thumbnail}
>>
>> Infine, cerca il tuo file e seleziona un'opzione:
>>
>> ![Backup Agent Restore Wizard](images/01-backup-agent-restore-wizard.png){.thumbnail}
>>
>> - Restore - Overwrite: ti permette di ripristinare il file sovrascrivendo quello attualmente presente sul server.
>> - Restore - Keep: ti permette di ripristinare il file mantenendo quello attualmente presente sul server.
>> - Copy To: ti permette di copiare il file in un'ubicazione del tuo server.
>> - Explore: ti permette di esplorare il backup.
>> - Properties: ti permette di visualizzare le proprietà del file.
>>
>> Avviare un ripristino ti permetterà di ottenere un'ultima finestra che mostrerà il trasferimento:
>>
>> ![Backup Agent Restore Transfer](images/01-backup-agent-restore-transfer.png){.thumbnail}
>
> Linux
>>
>> Per ripristinare file e cartelle su Linux, hai due opzioni: tramite l'interfaccia grafica o tramite la riga di comando.
>>
>> #### Tramite l'interfaccia grafica
>>
>> 1\. Connetti al tuo server Bare Metal tramite SSH.
>> 2\. Avvia l'interfaccia Veeam digitando il comando seguente:
>>
>> ```bash
>> sudo veeam
>> ```
>>
>> 3\. Nell'interfaccia, seleziona l'opzione di ripristino file.
>> 4\. Seleziona il Backup e il punto di ripristino desiderato.
>> 5\. Naviga nel backup per trovare i file o le cartelle da ripristinare.
>> 6\. Seleziona i file e scegli l'azione di ripristino:
>>    - Ripristina alla posizione originale
>>    - Copia in una nuova posizione
>>    - Esplora il backup
>>
>> #### Tramite la riga di comando
>>
>> Per ripristinare file tramite la riga di comando, devi prima montare il backup:
>>
>> 1\. Elenca i tuoi backup disponibili:
>>
>> ```bash
>> sudo veeamconfig backup list
>> ```
>>
>> 2\. Elenca i punti di ripristino di un Backup:
>>
>> ```bash
>> sudo veeamconfig restore list --backup <backup_name>
>> ```
>>
>> 3\. Monta un punto di ripristino:
>>
>> ```bash
>> sudo veeamconfig mount --backup <backup_name> --restorepoint <point_name>
>> ```
>>
>> 4\. Una volta montato, puoi accedere ai file tramite il punto di montaggio (di norma in `/mnt/veeam/`).
>>
>> 5\. Copia i file desiderati dal punto di montaggio alla destinazione.
>>
>> 6\. Una volta completato il ripristino, smonta il backup:
>>
>> ```bash
>> sudo veeamconfig unmount --backup <backup_name>
>> ```
>>
>> Per ulteriori informazioni, consulta la [documentazione Veeam](https://helpcenter.veeam.com/docs/agentforlinux/userguide/files_restore_gui.html?ver=13) e la [documentazione sul ripristino tramite riga di comando](https://helpcenter.veeam.com/docs/agentforlinux/userguide/files_restore_cmd.html?ver=13).

### ISO Veeam Baremetal Recovery

Bare Metal Recovery è una funzionalità di Veeam che consiste nel creare in anticipo un ISO personalizzato, che può essere utilizzato per avviare un sistema e ripristinarlo da un backup memorizzato su un altro server.

Consulta questa guida per ulteriori informazioni: [Ripristinare un server Bare Metal con Veeam Backup Agent](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_agent_bare_metal_recovery).

Dovrai adattare il server e le credenziali a quelle che ti abbiamo fornito.

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).