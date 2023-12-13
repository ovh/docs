---
title: "Enterprise File Storage - Ripristinare un volume con l'API di ripristino Snapshot"
excerpt: "Scopri come ripristinare i volumi della tua soluzione Enterprise File Storage grazie alla funzionalità di ripristino degli Snapshot fornita dall'API OVHcloud"
updated: 2023-09-15
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

In questa guida ti spieghiamo come ripristinare un volume al suo ultimo Snapshot, utilizzando la funzione di *snapshot revert*.

**Questa guida ti mostra come ripristinare i volumi della soluzione Enterprise File Storage utilizzando l’API OVHcloud per il ripristino degli Snapshot.**

## Prerequisiti

- Disporre di una soluzione OVHcloud Enterprise File Storage con un volume
- Avere accesso all’[API OVHcloud](https://api.ovh.com/)

## Nozioni di base

Uno Snapshot di un volume è una copia temporizzata di sola lettura di un volume.
Gli Snapshot sono creati a partire da un volume esistente e operativo. Non è possibile utilizzare uno Snapshot se il volume a cui appartiene non esiste più.

> [!warning]
>
> Ti ricordiamo che, una volta ripristinato un volume con uno Snapshot, tutti i file e gli Snapshot creati in seguito andranno persi. Quando un volume viene ripristinato, tutti i dati in esso contenuti vengono sovrascritti con i dati dello Snapshot. Questa azione è irreversibile.
>

In questa guida, un volume viene anche chiamato "*share*", come nell’API OVHcloud.

## Limiti

È possibile ripristinare un volume solo al suo Snapshot più recente disponibile. Per ripristinare un volume da uno Snapshot precedente è invece necessario eliminare gli Snapshot fino a quando non risulti aggiornato quello da utilizzare per il ripristino.

## In pratica

### Scenario 1: ripristinare un volume da uno Snapshot di tipo `manual`

In questo scenario, vuoi ripristinare l’ultimo Snapshot di tipo `manual` creato tramite l’API OVHcloud o lo Spazio Cliente OVHcloud.

> [!primary]
> **Prerequisiti per questo scenario:**
>
> - Hai già creato uno Snapshot di tipo `manual`. In caso contrario, è possibile creare uno Snapshot di tipo `manual` tramite l’API OVHcloud o dallo Spazio Cliente OVHcloud.
> - Lo Snapshot di tipo `manual` deve appartenere al volume da ripristinare.

1\. Identifica l’ultimo Snapshot di tipo `manual` tramite questa chiamata API:

> [!api]
>
> @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/snapshot
>

- `{serviceName}` è l’identificativo unico del servizio
- `{shareId}` è il volume da ripristinare 

![RevertManualSnapshot](images/use_case_1_step_1.png){.thumbnail}

2\. Ripristina il volume all'ultimo Snapshot utilizzando la chiamata API `/revert`: 

> [!api]
>
> @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/revert
>

- `{serviceName}` è l’identificativo unico del servizio
- `{shareId}` è il volume da ripristinare
- `{snapshotID}` è l’ultimo Snapshot del volume

L’API OVHcloud restituirà esclusivamente un codice HTTP 202 (*Accepted*).<br>
Lo stato del volume verrà modificato in `reverting` e tornerà a `available` al termine del processo di ripristino. Contemporaneamente lo stato dello Snapshot passerà a `restoring` e ritornerà a `available` una volta completato il processo di ripristino del volume.

![RevertManualSnapshot](images/use_case_1_step_2.png){.thumbnail}

### Scenario 2: Ripristinare un volume da uno Snapshot effettuato tramite la politica di Snapshot

In questo scenario, una regola di una politica di Snapshot (*Snapshot policy*) prende snapshot regolari (automatici) di un volume e desideri ripristinare il tuo volume all'ultimo snapshot creato dalla *Snapshot policy*.

È necessario "conservare" (`hold`) l’ultimo Snapshot effettuato dalla politica di Snapshot associato a un volume, affinché questo Snapshot diventi uno Snapshot `manual`. Una volta che lo Snapshot è di tipo `manual`, il volume associato può essere ripristinato.

> [!primary]
> **Prerequisiti per questo scenario:**
>
> - Hai creato una *Snapshot policy* e l'hai associata al volume da ripristinare.
> - *Questa *Snapshot policy* ha creato almeno uno Snapshot.

> [!primary]
>
> Gli Snapshot presi dalla *Snapshot policy* sono di tipo `automatic`. Per poter essere utilizzati per il ripristino del volume, devono essere conservati utilizzando la route API `/hold`. Questo impedirà la loro rotazione tramite la *Snapshot policy*.
>

1\. Identifica l’ultimo Snapshot di tipo `automatic` utilizzando questa chiamata API:

> [!api]
>
> @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/snapshot
>

- `{serviceName}` è l’identificativo unico del servizio
- `{shareId}` è il volume da ripristinare

![RevertSnapshot](images/use_case_2_step_1.png){.thumbnail}

2\. Conserva lo Snapshot utilizzando questa chiamata API: 

> [!api]
>
> @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}/hold

- `{serviceName}` è l’identificativo unico del servizio
- `{shareId}` è il volume da ripristinare
- `{snapshotID}` è l’ultimo Snapshot automatico in data

> [!warning]
>
> Una volta effettuata l’operazione di conservazione (`hold`), l’identificativo e il tipo dello Snapshot saranno modificati. Tuttavia, le proprietà `name`, `createdAt` e `path` verranno mantenute. Prendi nota del nuovo `id` per gli step successivi.
>

![RevertSnapshot](images/use_case_2_step_2.png){.thumbnail}

3\. Assicurati che il nuovo Snapshot sia l’ultimo di tipo `manual` del volume.

Se sono stati effettuati altri Snapshot di tipo `manual` prima di questo Snapshot, questi dovranno essere eliminati.

4\. La rotta API utilizzata per recuperare l'elenco degli Snapshot del volume dello Step 1 può essere riutilizzata qui.

![RevertSnapshot](images/use_case_2_step_3.png){.thumbnail}

5\. Ripristina il volume all'ultimo Snapshot chiamando la route API `/revert`:

> [!api]
>
> @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/revert
>

- `{serviceName}` è l’identificativo unico del servizio
- `{shareId}` è il volume da ripristinare
- `{snapshotID}` è l’ultimo Snapshot del volume

L’API OVHcloud restituirà esclusivamente un codice HTTP 202 (*Accepted*).<br>
Lo stato del volume verrà modificato in `reverting` e tornerà a `available` al termine del processo di ripristino. Contemporaneamente lo stato dello Snapshot passerà a `restoring` e ritornerà a `available` una volta completato il processo di ripristino del volume.

![RevertSnapshot](images/use_case_2_step_4.png){.thumbnail}

A questo punto il volume verrà ripristinato allo Snapshot selezionato.

## Per saperne di più <a name="go-further"></a>

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.