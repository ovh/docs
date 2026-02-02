---
title: "Backup Agent - Come configurare la tua prima copia di backup"
excerpt: "Come configurare la tua prima copia di backup sul tuo server Bare Metal utilizzando il prodotto Backup Agent"
updated: 2026-01-30
---

## Obiettivo

Hai appena acquistato l'offerta Backup Agent per il tuo server Bare Metal, scopri come configurare le tue prime copie di backup.

> [!primary]
> 
> Per ulteriori informazioni sul prodotto Backup Agent, consulta [questa pagina](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).

## Prerequisiti

- Essere connessi al [Spazio Cliente OVHcloud](/links/manager).
- Avere acquistato un servizio Backup Agent al momento dell'acquisto del tuo server Bare Metal o successivamente tramite il menu `Backup Agent`{.action} del tuo spazio cliente.
- Avere avviato e configurato un sistema operativo sul tuo server Bare Metal.

> [!warning]
>
> Devi assicurarti che il tuo server possa essere raggiunto dalla nostra infrastruttura Veeam.
> Ecco le informazioni da autorizzare sul tuo server Bare Metal:
> IP/DNS del server: vspc-cgw1.stg01.eu-west-rbx.backup.ovh.net
> Porta: 6180
>
> Ti consigliamo vivamente di permettere anche al tuo server di raggiungere altri indirizzi esterni per poter inviare i tuoi dati al Vault. Non è necessario autorizzare un flusso in entrata in questo contesto.


## Procedura

Le fasi per creare una copia di backup per il tuo server sono le seguenti:

- Aggiungi il tuo server al tuo Backup Agent.
- Scarica l'agente.
- Installa l'agente sul tuo server.

Una volta installato l'agente, riceverà la politica di backup e permetterà di effettuare le copie di backup.

Una volta completate tutte queste fasi, la tua prima copia di backup sarà eseguita.

## Aggiungi il tuo server al tuo Backup Agent

Accedi al tuo [Spazio Cliente OVHcloud](/links/manager) e vai nella sezione `Backup Agent`{.action}.

![Backup Agent Menu](images/01-backup-agent-menu-en.png){.thumbnail}

Clicca sul tuo vspc-tenant, nella sezione `Servizi`{.action}.

![Backup Agent Services](images/01-backup-agent-services-en.png){.thumbnail}

Vai nella sezione `Agents`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos-en.png){.thumbnail}

> [!primary]
>
> Dovresti trovare nel tabella il server Bare Metal che hai selezionato nel tuo ordine, con lo stato `not_installed`. Questo è normale a questo stadio, devi ora installare l'agente sul tuo server.
>

Clicca sul pulsante `Scarica`{.action} in alto nella tabella che elenca i tuoi agenti.

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
>> Una volta installato, potrai vedere il tuo agente che si connette alla nostra infrastruttura per scaricare la tua politica di backup:
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