---
title: Object Storage Swift - Sincronizza un Synology NAS con l'Object Storage
excerpt: Come sincronizzare un NAS Synology con un container
updated: 2023-05-22
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 22/05/2023**

## Obiettivo

DiskStation Manager 7.0 di Synology propone uno strumento di sincronizzazione con diverse soluzioni Cloud.

Questo è compatibile con l'Object Storage Public Cloud OVHcloud e vi permetterà di fare un backup dei vostri dati e di renderli accessibili da qualsiasi punto.

**Questa guida ti mostra come configurare DiskStation Manager 7.0 per sincronizzare i file presenti sul tuo NAS verso il tuo Object Storage.**

> [!primary]
>
> DiskStation Manager 6 non è compatibile con l'Object Storage Public Cloud OVHcloud.
>

## Prerequisiti

- [Crea un container Object Storage](/pages/storage_and_backup/object_storage/pcs_create_container)
- [Creare un utente per accedere a Horizon](/pages/public_cloud/compute/create_and_delete_a_user#crea-un-utente-openstack)

## Procedura

### Configurazione di DiskStation Manager 7.0

> [!warning]
>
> Le soluzioni Synology come DiskStation o Hyperbackup non sono compatibili con l'offerta Public Cloud Archive
>

#### Recupero delle credenziali Openstack

Per configurare la sincronizzazione del tuo NAS Synology, è necessario disporre delle credenziali dell'utente OpenStack.

Per recuperarli, scarica il file OpenRC utilizzando la prima parte di questa guida:

- [Impostare le variabili d'ambiente OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables#step-1-recupera-le-variabili){.ref}

#### Configurazione del punto di sincronizzazione con Cloud Sync

Una volta recuperate le credenziali, potete collegarvi al vostro NAS ed effettuare queste diverse azioni:

- Avvia l'applicazione Cloud Sync:

- Seleziona OpenStack Swift come Cloud Providers

![public-cloud](images/DSM7_1.png){.thumbnail}

- Inserisci le informazioni del tuo utente OpenStack:

![public-cloud](images/DSM7_2.png){.thumbnail}

Tutte queste informazioni sono disponibili nel file OpenRC recuperato nel precedente step.

- Configura la localizzazione e il nome del tuo container di storage:

![public-cloud](images/DSM7_3.png){.thumbnail}

- Configura la tua cartella da sincronizzare:

![public-cloud](images/DSM7_4.png){.thumbnail}

## Per saperne di più

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.