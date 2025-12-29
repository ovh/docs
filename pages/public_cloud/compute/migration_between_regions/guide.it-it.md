---
title: 'Migrazione di istanze tra zone di disponibilità (AZ)'
excerpt: "Questa guida descrive come migrare un'istanza Public Cloud OVHcloud tra due zone di disponibilità (AZ), 1AZ e 3AZ. Copre le fasi di backup, trasferimento e ricreazione, con istruzioni tramite il Manager, Horizon o la CLI OpenStack."
updated: 2025-11-04
---

## Obiettivi

Questa guida spiega come migrare un'istanza Public Cloud da una zona di disponibilità (AZ) a un'altra, da 1AZ a 3AZ o viceversa. Centralizza le fasi chiave (backup, trasferimento e ricreazione) e rimanda ai guide dettagliate per ogni elemento.

## Prerequisiti

- Avere un'[istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
- Essere connessi al vostro [Spazio Cliente OVHcloud](/links/manager).

## In pratica

> [!primary]
>
> Prima di effettuare una migrazione dell'istanza, è importante comprendere bene le differenze tra i tipi di distribuzione offerti nel Public Cloud OVHcloud. Ogni modalità (1AZ, 3AZ o Local Zones) ha un impatto diretto sulla resilienza, disponibilità e progettazione della vostra infrastruttura.
>
> Per saperne di più, consultate la documentazione: [Comparison and resilience of Deployment Modes - Understanding 3-AZ / 1-AZ / Local Zones (EN)](/pages/public_cloud/public_cloud_cross_functional/deployment_modes_comparison_resilience_details).
>

### Passo 1. Backup dell'istanza

Iniziate creando un backup dell'istanza da migrare, oppure utilizzate un backup esistente se è ancora valido.

OVHcloud offre due tipi di backup, con comportamenti diversi in base al tipo di migrazione desiderato:

- Backup locale: richiede un trasferimento manuale se si migra verso un'altra regione o AZ.
- Backup remoto (backup distante) (**raccomandato**): gestito automaticamente da OVHcloud, il backup locale viene replicato nella regione scelta. Non è richiesto alcun trasferimento manuale.

> [!primary]
>
> Se il backup locale è stato effettuato in una regione 3AZ e desiderate ricreare l'istanza in un'altra AZ della stessa regione, non è necessario alcun trasferimento.
>
> I backup locali sono accessibili da tutte le zone di disponibilità di una regione 3AZ. È possibile passare direttamente alla fase di ricreazione dell'istanza.
>

Il backup di un'istanza può essere effettuato:

- tramite lo Spazio Cliente OVHcloud.
- tramite l'API OVHcloud.
- tramite la CLI Openstack.
- tramite Horizon.

Trovate tutte le informazioni dettagliate nella sezione **Effettua un backup dell’istanza** della nostra guida "[Effettuare il backup di un'istanza](/pages/public_cloud/compute/save_an_instance)".

### Passo 2. Migrazione del backup verso un'altra regione

> [!primary]
>
> Se avete utilizzato un backup remoto, potete passare direttamente a [Passo 3. Ripristino dell'istanza nella nuova regione](#step3recreateinstance).
>

> [!tabs]
> Tramite la CLI Openstack
>> Per trasferire il vostro backup da un'AZ a un'altra tramite la CLI Openstack, seguite la nostra guida "[Scaricare e trasferire il backup di un’istanza da una Region OpenStack ad un’altra](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another)".
>>

### Passo 3. Ripristino dell'istanza nella nuova regione <a name="step3recreateinstance"></a>

Il ripristino dell'istanza nella nuova regione può essere effettuato:

- tramite lo Spazio Cliente OVHcloud.
- tramite l'API OVHcloud.
- tramite la CLI Openstack.
- tramite Horizon.

Trovate tutte le informazioni dettagliate nella sezione **Crea un’istanza a partire da un backup** della nostra guida « [Crea/ripristina il tuo server virtuale da un backup](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup) ».

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).