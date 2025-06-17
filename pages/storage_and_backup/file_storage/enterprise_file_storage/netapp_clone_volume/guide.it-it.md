---
title: Enterprise File Storage - Clonare un volume
excerpt: "Scopri come clonare un volume della tua soluzione Enterprise File Storage con l'API OVHcloud"
updated: 2024-12-09
---

## Obiettivo

Un volume clonato contiene tutti i dati del volume padre in un determinato momento. Il volume dispone di tutte le funzionalità di un volume e può quindi essere utilizzato come volume classico.<br>

Un volume clonato viene creato a partire da uno Snapshot (istantaneo) di un volume attivo. Una volta creato, le modifiche apportate al volume padre non si rifletteranno sul clone.

> [!primary]
> In questa guida, un volume viene chiamato "*share*", come nell'API OVHcloud.

**Questa guida ti mostra come clonare un volume di una soluzione Enterprise File Storage utilizzando le API di OVHcloud.**

## Casi d'uso

Gli scenari di utilizzo di un volume clonato sono molteplici. Di seguito alcuni esempi.

### Permettere l'accesso ai dati per scopi di qualità, test o formazione

I sistemi di formazione, di qualità e di testing possono necessitare di aggiornamenti periodici con i dati dell'ambiente di produzione.<br>

La duplicazione dei volumi consente di automatizzare la creazione di set di dati basati su dati aggiornati in modo rapido e senza consentire l'accesso ai dati di produzione.

![CloneVolumeUseCaseEnvironmentSync](images/clone_volume_use_case_1.png){.thumbnail}

### Combattere la corruzione dei dati

La corruzione logica dei dati può essere causata da un errore software, da un errore umano o da un atto malevolo.<br>

La creazione di punti di backup regolari con l'aiuto di una [Politica di Snapshots](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_snapshot_policy) e l'utilizzo della funzionalità di clonazione di volumi consentono di analizzare facilmente le cause delle corruzione dei dati creando un nuovo volume a partire dai dati esistenti.

![CloneVolumeUseCaseDataCorruption](images/clone_volume_use_case_2.png){.thumbnail}

## Prerequisiti

- Disporre di una soluzione OVHcloud [Enterprise File Storage](/links/storage/enterprise-file-storage)
- Avere accesso all’[API OVHcloud](/links/api)
- Disporre di un volume Enterprise File Storage con uno Snapshot `manual`

> [!primary]
>
> È possibile creare un volume e uno Snapshot di tipo `manual` tramite l'[API OVHcloud](/links/api) o dal tuo [Spazio Cliente OVHcloud](/links/manager).

> [!success]
> Se non hai familiarità con l'API OVHcloud, consulta la nostra guida "[Iniziare a utilizzare le API OVHcloud](/pages/manage_and_operate/api/first-steps)".

## Limiti della funzionalità

- Per clonare un volume è possibile utilizzare solo gli Snapshot di tipo `manual`.
Se invece vuoi clonare un volume utilizzando uno Snapshot di tipo `automatic`, conservalo per trasformarlo in uno Snapshot di tipo `manual`.
Per maggiori informazioni, consulta la [guida alla conservazione degli Snapshot automatici](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_hold_automatic_snapshot).

- La creazione di un volume clonato da uno Snapshot di tipo `system` non è supportata.

- La dimensione del volume clonato deve essere **superiore o uguale** alla dimensione dello Snapshot utilizzato per l'operazione di clonazione.

## Procedura

1\. Identificare l`id` dello Snapshot da utilizzare utilizzando la chiamata API seguente:

> [!api]
>
> @api {GET} /storage/netapp/{serviceName}/share/{shareId}/snapshot
>

**Impostazioni:**

- `serviceName`: è l’identificativo unico del servizio
- `shareId`: è l’identificativo del volume a cui appartiene lo Snapshot

![CloneVolume](images/clone_volume_step_1.png){.thumbnail}

2\. Crea il volume a partire dallo Snapshot utilizzando la chiamata API seguente:

> [!api]
>
> @api {POST} /storage/netapp/{serviceName}/share
>

**Impostazioni:**

- `serviceName`: è l’identificativo unico del servizio
- `size`: è la dimensione del volume. Deve essere maggiore o uguale alla dimensione dello Snapshot.
- `protocol`: è il protocollo del volume. È supportato solo il protocollo NFS.
- `snapshotID`: è l’identificativo dello snapshot da utilizzare per creare il volume
- `name`: (Facoltativo) è il nome del volume
- `description`: (Facoltativo) è la descrizione del volume

![CloneVolume](images/clone_volume_step_2.png){.thumbnail}

L’API OVHcloud restituirà un codice HTTP 201 e le informazioni relative al volume creato.<br>

Lo stato del volume verrà modificato in `creating_from_snapshot` e diventerà `available` una volta completata la creazione del volume.<br>
In base alla dimensione dello Snapshot utilizzato, l’operazione di creazione del volume potrebbe richiedere del tempo.

**Un nuovo volume è stato creato dallo Snapshot del volume principale.**

## Per saperne di più

Se hai bisogno di formazione o assistenza tecnica per implementare le nostre soluzioni, contatta il tuo rappresentante commerciale o clicca su [questo link](/links/professional-services) per ottenere un preventivo e richiedere un'analisi personalizzata del tuo progetto ai nostri esperti del team Professional Services.

Contatta la nostra [Community di utenti](/links/community).