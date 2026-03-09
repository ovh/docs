---
title: "Backup Agent - Come configurare il primo backup"
excerpt: "Scopri come configurare il primo backup sul tuo server Bare Metal con il prodotto Backup Agent dallo Spazio Cliente OVHcloud"
updated: 2026-03-05
---

## Obiettivo

Hai appena acquistato l'offerta Backup Agent per il tuo server Bare Metal, scopri come configurare i tuoi primi backup.

**Questa guida spiega come configurare il primo backup con Backup Agent su un server Bare Metal.**

> [!primary]
>
> Per ulteriori informazioni sul prodotto Backup Agent, consulta [questa pagina](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).

## Prerequisiti

- Avere acquistato un servizio Backup Agent al momento dell'acquisto del tuo server Bare Metal o successivamente tramite il menu `Backup Agent`{.action} del tuo Spazio Cliente.
- Avere avviato e configurato un sistema operativo sul tuo server Bare Metal.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Percorso di navigazione:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

> [!warning]
>
> Devi assicurarti che il tuo server possa essere raggiunto dalla nostra infrastruttura Veeam.
> Riceverai le informazioni esatte nella tua e-mail di consegna.
>
> Ecco le informazioni da autorizzare sul tuo server Bare Metal:
>
> - IP/DNS del server: `vspc-cgw1.prod01.eu-west-rbx.backup.ovh.net` o `vspc-cgw21.prod01.eu-west-rbx.backup.ovh.net`
> - Porta: 6180
>
> Ti consigliamo vivamente di permettere anche al tuo server di raggiungere altri indirizzi esterni per poter inviare i tuoi dati al Vault. Non è necessario autorizzare un flusso in entrata in questo contesto.

## Procedura

Le fasi per creare un backup per il tuo server sono le seguenti:

- Aggiungi il tuo server al tuo Backup Agent.
- Scarica l'agente.
- Installa l'agente sul tuo server.

Una volta installato l'agente, riceverà la politica di backup e permetterà di effettuare i backup.

Una volta completate queste fasi, il primo backup verrà eseguito automaticamente.

### Aggiungi il tuo server al tuo Backup Agent

Clicca su [questo link](/links/control-panel/baremetal-backup-agent) per accedere alla sezione `Backup Agent`{.action}, poi clicca sul tuo vspc-tenant nella sezione `Servizi`{.action}.

![Backup Agent Services](images/01-backup-agent-services-en.png){.thumbnail}

Vai nella sezione `Agents`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos-en.png){.thumbnail}

> [!primary]
>
> Dovresti trovare nella tabella il server Bare Metal che hai selezionato nel tuo ordine, con lo stato `not_installed`. Questo è normale a questo stadio, devi ora installare l'agente sul tuo server.
>

Clicca sul pulsante `Scaricare`{.action} in alto nella tabella che elenca i tuoi agenti.

![Backup Agent Agents](images/01-backup-agent-agents-en.png){.thumbnail}

Seleziona il tuo sistema operativo e scegli di scaricare il file di installazione o di utilizzare uno dei comandi proposti per recuperarlo.

![Backup Agent Step 13](images/01-backup-agent-download-windows-en.png){.thumbnail}

Per installare il tuo agente sul tuo server Bare Metal, clicca sul tab corrispondente al tuo sistema operativo:

> [!tabs]
> Windows
>>
>> Una volta che il file di installazione è sul tuo server Bare Metal, puoi eseguirlo e seguire la procedura del software:
>>
>> ![Backup Agent Step 01](images/01-backup-agent-step01.png){.thumbnail}
>>
>> ![Backup Agent Step 02](images/01-backup-agent-step02.png){.thumbnail}
>>
>> ![Backup Agent Step 03](images/01-backup-agent-step03.png){.thumbnail}
>>
>> ![Backup Agent Step 04](images/01-backup-agent-step04.png){.thumbnail}
>>
>> ![Backup Agent Step 05](images/01-backup-agent-step05.png){.thumbnail}
>>
>> Una volta installato, l'agente si connette alla nostra infrastruttura per recuperare la politica di backup:
>>
>> ![Backup Agent Step 06](images/01-backup-agent-step06.png){.thumbnail}
>>
>> ![Backup Agent Step 07](images/01-backup-agent-step07.png){.thumbnail}
>>
>> Infine, una volta che la politica di backup è stata applicata, potrai vedere il tuo agente di backup configurato e presente sul tuo server Bare Metal:
>>
>> ![Backup Agent Step 08](images/01-backup-agent-step08.png){.thumbnail}
>>
>> ![Backup Agent Step 09](images/01-backup-agent-step09.png){.thumbnail}
>>
> Linux
>> Seleziona il tuo sistema operativo e scegli di scaricare il file di installazione o di utilizzare uno dei comandi proposti per recuperarlo.
>>
>> ![Backup Agent Step 14](images/01-backup-agent-download-linux-en.png){.thumbnail}
>>
>> Una volta che il file di installazione è sul tuo server, vai nella directory che lo contiene ed esegui il file come segue:
>>
>> ```bash
>> sudo ./LinuxAgentPackages.<YOURCOMPANYNAME>.sh
>> ```
>>
>> Una volta completata l'installazione, puoi verificare con questo comando:
>>
>> ```bash
>> sudo veeamconsoleconfig -s
>>
>> Management agent
>>     Connection state       : Connected
>>     Cloud gateway          : <OVHDOMAIN>:6180
>>     Connection account     : <UTILISATEUR>
>> ```
>>
>> Potrai notare che un elemento non è ancora installato:
>>
>> ```bash
>> Backup agent
>>    Status                 : Not installed
>> ```
>>
>> Questo è normale a questo stadio, applicheremo una configurazione che permetterà di distribuire il Backup Agent con una politica di backup.

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).
