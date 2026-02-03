---
title: Local Zone Compute - Funzionalità, capacità e limiti
excerpt: Scopri le funzionalità, le capacità e i limiti attuali delle istanze Local Zones
updated: 2026-01-16
---

## Obiettivo

Le istanze Local Zones sono un'estensione delle [regioni](/links/public-cloud/regions-pci) che avvicinano i servizi OVHcloud a luoghi specifici, offrendo latenza ridotta e performance migliorate per le applicazioni.

Le istanze Local Zones sono strategicamente posizionate in prossimità delle zone a forte richiesta degli utenti. Il loro obiettivo principale è ridurre al minimo il tempo necessario al trasferimento dei dati tra utente e Cloud, per rendere i servizi più rapidi e più reattivi e rispondere ai requisiti di Data residency.

Per maggiori informazioni, accedi alla nostra [pagina dedicata alle istanze Local Zone](/links/public-cloud/local-zones).

**Scopri le funzionalità e le capacità attuali e future delle istanze Local Zones.**

## Funzionalità disponibili

| Servizi Public Cloud | Prodotto                    | Disponibilità Local Zone | Limitazioni |
| --------------------- | -------------------------- | ------------------------ | ----------- |
| Compute               | Istanze                    | Sì | L'azione "sospendere (shelve)" non è supportata nelle Local Zones |
|                       | Istanze Metal              | No | |
|                       | GPU                        | No | |
|                       | Backup delle istanze       | Sì | |
|                       | Backup a distanza          | No | |
|                       | Workflow Management per i backup | Sì | |
|                       | Immagini Linux             | Sì | |
|                       | Immagini Windows           | No | |
|                       | Importa la tua immagine     | Sì | Dimensione dell'immagine limitata a un massimo di 25 GB |
| Network               | Load Balancer              | No | |
|                       | Gateway                    | No | |
|                       | Floating IP               | No | |
|                       | Additional IP              | No | |
|                       | Rete privata con vRack     | No | Le Local Zones non sono compatibili con vRack. Le reti private sono limitate alla stessa Local Zone. DHCP è supportato sulle reti private locali. |
| Archiviazione         | Object Storage             | Sì | 1. Non sono supportate le politiche utente. tutte le chiavi di accesso all'interno di un progetto possono accedere a tutti i bucket in tutte le Local Zones. <br> 2. Supportato solo il livello di archiviazione Standard. <br> 3. Funzionalità S3<sup>1</sup> non supportate: tag S3, Legal Hold, SSE-OMK, replica S3, accesso log server. |
|                       | Archiviazione su disco     | Sì | Nessun supporto per la crittografia. I volumi classici non possono essere multi-attaccati. I volumi classici limitati a 250 IOPS (contro 500 IOPS nelle regioni 1AZ e 3AZ). Dimensione massima 4 TB (contro 12 TB). |
|                       | File Storage         | No | |
| Container.            | Managed Kubernetes Service         | No | |
|                       | Managed Rancher Service   | No | |
|                       | Managed Private Registry   | No | |
| DBaas                 | DBaas                      | No | |
|                       | Analytics                    | No | |
| AI                    | AI                         | No | |

## Funzionalità e limiti

Tutte le funzionalità delle istanze che non sono elencate qui, come il riavvio (reboot) delle istanze o il supporto di Object Storage, saranno disponibili nei prossimi mesi. Il nostro obiettivo è quello di supportare tutte le funzionalità già supportate nelle regioni globali.

### Server SMTP

Le istanze Local Zones non possono contattare i server SMTP.

## Per saperne di più

- [Object Storage - Local Zones specifications](/pages/storage_and_backup/object_storage/s3_local_zones_limitations) (EN)

Se hai domande, commenti e suggerimenti per migliorare il servizio, non esitare a contattarci:

- Sul [server Discord OVHcloud](https://discord.gg/ovhcloud)

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.