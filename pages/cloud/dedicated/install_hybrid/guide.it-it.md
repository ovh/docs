---
title: 'Scegliere il gruppo di dischi su cui installare un sistema operativo'
slug: scegliere-gruppo-dischi-per-installare-sistema-operativo
excerpt: 'Come scegliere un gruppo di dischi specifico per installare il tuo sistema operativo'
section: 'RAID & dischi'
---

**Ultimo aggiornamento: 17/05/2019**

## Obiettivo

Alcuni [server dedicati OVH](https://www.ovh.it/server_dedicati/){.external} dispongono di gruppo di dischi SATA e SSD: queste macchine sono chiamate **server ibridi**.

**Questa guida ti mostra come definire il gruppo di dischi su cui installare il sistema operativo.**

> [!warning]
> 
> OVH mette a disposizione i server, ma non è autorizzata ad accedervi e non si occupa quindi della loro amministrazione. Garantire quotidianamente la gestione software e la sicurezza di queste macchine è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a utilizzare un cluster di dischi sulla tua macchina. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più”.
>

## Prerequisiti

* Disporre di un [server ibrido OVH](https://www.ovh.it/server_dedicati/){.external}
* Avere accesso all’[API OVH](https://api.ovh.com/console/){.external}
* Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}

> [!warning]
>
> Questa procedura è valida soltanto per i sistemi Linux (ESXi e XenServer esclusi) e su configurazioni in RAID Soft, NoRAID o RAID Hard (configurazione di default).
> 

## Procedura

### Recupera il nome del server con l’API OVH

Una volta effettuato l’accesso su <https://api.ovh.com/console/>, recupera il nome del server tramite questa API:

> [!api]
>
> @api {GET} /dedicated/server
> 

In seguito, clicca su `Execute`{.action} per recuperare il nome del tuo server ibrido:

![Servizi disponibili](images/services-01.png){.thumbnail}

### Recupera il DiskGroupId

Il `DiskGroupId` è l’elemento che consente di definire il gruppo di dischi su cui verrà installato il sistema operativo. 

Per effettuare l’operazione, utilizza questa chiamata API:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/specifications/hardware
> 

Sostituisci **{serviceName}** con il nome del tuo server e clicca su `Execute`{.action}. Visualizzi le informazioni relative all’hardware del tuo server: scegli il `diskGroupId` tra quelli disponibili in `diskGroups` (di default, il sistema operativo è installato sul `diskGroupId 1`).

![Hybrid](images/hybrid-01.png){.thumbnail}

### Avvia l’installazione del sistema operativo

Una volta recuperato il `diskGroupId` puoi passare all’ultimo step, che consiste nell’installazione del sistema operativo.

Per visualizzare l’elenco dei sistemi operativi compatibili, utilizza questa chiamata API:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/install/compatibleTemplates
> 

![Modelli compatibili:](images/templates-01.png){.thumbnail}

Annota il modello corrispondente al sistema operativo scelto ed esegui questa chiamata API:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/install/start
> 

Compila i campi **serviceName**, **diskGroupId** e **TemplateName** con i dati recuperati negli step precedenti. Tutti gli altri campi sono facoltativi.

Dopo aver inserito tutte le informazioni necessarie, clicca su `Execute`{.action}.

![Installazione](images/install-01.png){.thumbnail}

A questo punto inizierà l’installazione del sistema operativo: per verificare lo stato di avanzamento del processo, aggiorna la pagina del tuo server nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} o effettua la chiamata API qui sotto, inserendo il nome del tuo server nel campo **serviceName** e cliccando sul pulsante `Execute`{.action}.

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/install/start
> 

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.