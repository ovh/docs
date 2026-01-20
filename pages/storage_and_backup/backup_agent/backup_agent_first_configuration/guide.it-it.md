---
title: "Backup Agent - Come configurare la prima copia di backup"
excerpt: "Come configurare la prima copia di backup sul vostro server Bare Metal utilizzando il prodotto Backup Agent"
updated: 2026-01-09
---

## Obiettivo

Hai appena acquistato l'offerta Backup Agent per il tuo server Bare Metal, scopri come configurare le tue prime copie di backup.

## Prerequisiti

- Essere connessi al [Spazio Cliente OVHcloud](/links/manager).
- Avere acquistato un servizio Backup Agent al momento dell'acquisto del vostro server Bare Metal o in un momento successivo tramite il menu `Agente di backup`{.action} del vostro spazio client.
- Avere avviato e configurato un sistema operativo sul vostro server Bare Metal.

## Procedura

Per poter configurare la prima copia di backup, è necessario installare l'agente sul vostro server Bare Metal.

Il funzionamento è il seguente :

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail}

Una volta installato l'agente, riceverà la politica di backup e permetterà di effettuare le copie di backup.

Per installare il vostro agente sul vostro server Bare Metal, seguite la procedura qui sotto in base al vostro sistema operativo :

### Windows

Accedi al vostro [Spazio Cliente OVHcloud](/links/manager), vai alla sezione `Bare Metal Cloud`{.action} e seleziona `Agente di backup`{.action}.

![Backup Agent Menu](images/01-backup-agent-step15.png){.thumbnail}

Cliccate sul vostro vspc-tenant, nella sezione `Servizi`{.action}.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Andate nella sezione `Agenti`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

Cliccate sul pulsante `Scaricare`{.action} in alto nella tabella che elenca i vostri agenti.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Selezionate il vostro sistema operativo e scegliete se scaricare il file di installazione o utilizzare uno dei comandi proposti per recuperarlo.

![Backup Agent Step 13](images/01-backup-agent-step13.png){.thumbnail}

Una volta che il file di installazione è sul vostro Bare Metal, potete eseguirlo e seguire la procedura del software :

![Backup Agent Step 01](images/01-backup-agent-step01.png){.thumbnail}

![Backup Agent Step 02](images/01-backup-agent-step02.png){.thumbnail}

![Backup Agent Step 03](images/01-backup-agent-step03.png){.thumbnail}

![Backup Agent Step 04](images/01-backup-agent-step04.png){.thumbnail}

![Backup Agent Step 05](images/01-backup-agent-step05.png){.thumbnail}

Una volta installato, potrete vedere il vostro agente connettersi alla nostra infrastruttura per scaricare la vostra politica di backup :

![Backup Agent Step 06](images/01-backup-agent-step06.png){.thumbnail}

![Backup Agent Step 07](images/01-backup-agent-step07.png){.thumbnail}

Infine, una volta che la politica di backup è stata presa in carico, potrete vedere il vostro agente di backup configurato e presente sul vostro server Baremetal :

![Backup Agent Step 08](images/01-backup-agent-step08.png){.thumbnail}

![Backup Agent Step 09](images/01-backup-agent-step09.png){.thumbnail}

Per default, le vostre copie di backup vengono attivate tra le 22:00 e le 06:00, ma potete lanciare copie di backup manualmente cliccando sul pulsante `Backup Now`{.action}.

### Linux

Accedi al vostro [Spazio Cliente OVHcloud](/links/manager), vai alla sezione `Bare Metal Cloud`{.action} e seleziona `Agente di backup`{.action}.

![Backup Agent Menu](images/01-backup-agent-step15.png){.thumbnail}

Cliccate sul vostro vspc-tenant, nella sezione `Servizi`{.action}.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Andate nella sezione `Agenti`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

Cliccate sul pulsante `Scaricare`{.action} in alto nella tabella che elenca i vostri agenti.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Selezionate il vostro sistema operativo e scegliete se scaricare il file di installazione o utilizzare uno dei comandi proposti per recuperarlo.

![Backup Agent Step 14](images/01-backup-agent-step14.png){.thumbnail}

Una volta che il file di installazione è sul vostro server, accedete alla directory che lo contiene ed eseguite il file nel seguente modo :

```bash
sudo ./LinuxAgentPackages.<NOMDEVOTRECOMPANY>.sh
```

Una volta completata l'installazione, potrete verificare con questo comando :

```bash
sudo veeamconsoleconfig -s

Management agent
    Connection state       : Connected
    Cloud gateway          : <OVHDOMAIN>:6180
    Connection account     : <UTILISATEUR>
```

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).