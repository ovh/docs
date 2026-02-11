---
title: "Backup Agent - Presentazione del prodotto"
excerpt: "Presentazione delle funzionalità e dei vantaggi del prodotto Backup Agent"
updated: 2026-01-28
---

## Obiettivo

Questo manuale vi aiuterà a comprendere il funzionamento del prodotto Backup Agent e i suoi vantaggi per i vostri servizi Bare Metal.

## Presentazione del prodotto

Il prodotto Backup Agent permette di effettuare il backup dei vostri server Bare Metal utilizzando un agente che, in base a una politica di backup che avete scelto, invierà i dati del vostro server verso un punto di archiviazione esterno.

Il prodotto Backup Agent si basa su due prodotti del software publisher Veeam:

- La Veeam Service Provider Console (VSPC).
- L'agente Veeam.

L'agente Veeam è un software creato da Veeam, che si installa sul vostro sistema operativo Linux e Windows, e vi permette di effettuare backup del vostro sistema.

La VSPC permette di inviare le politiche di backup agli agenti registrati e di fornire le informazioni sull'archiviazione e le credenziali ad ogni agente al momento dell'avvio del backup.
Scoprite come navigare nella VSPC tramite [questa guida](/pages/storage_and_backup/backup_agent/backup_agent_vspc_presentation).

Quando ordinate il prodotto, riceverete un'e-mail che conferma la consegna del servizio nonché le credenziali per accedere al vostro tenant nella VSPC. Questo account è in sola lettura e vi darà accesso a visualizzazioni dei vostri backup e dei vostri agenti.

Una volta che l'agente ottiene le informazioni, invia direttamente i dati verso il punto di archiviazione senza mai passare attraverso l'infrastruttura VSPC.

## Punti chiave

Numerosi punti di forza sono presenti in questa offerta:

- Prima politica di backup automatico con 14 giorni di conservazione.
- Possibilità di passare a 30 giorni di conservazione.
- La politica effettua un backup completo del vostro server.
- 14 giorni di immutabilità sui nostri bucket.
- Il periodo dei backup automatici è tra le 22:00 e le 06:00 (fuso orario CET per l'Europa - fuso orario EST per il Canada e l'Asia).
- Crittografia gestita da OVHcloud sull'archiviazione che ospita i vostri dati di backup.
- Invio diretto del dato di backup verso il bucket senza creare una copia sulle nostre infrastrutture.
- Punto di archiviazione sempre distante dalla localizzazione del vostro server Bare Metal (se siete a Roubaix, il vostro punto di archiviazione sarà a Gravelines).

È anche importante tener presente che:

- La politica di backup è vincolata, non potete modificarla.
- Non potete configurare un backup unicamente su una lista di file o cartelle.
- Non potete modificare la data e l'ora dei trigger di backup (questo sarà oggetto di un miglioramento in arrivo).

## L'infrastruttura

Lo schema di principio è il seguente:

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail}

Si noti che:

- L'infrastruttura VSPC è ospitata nei datacenter OVHcloud e non invia dati sui server di Veeam.
- L'archiviazione si basa sulla tecnologia [OVHcloud Object Storage](/links/public-cloud/object-storage) che è ospitata nei datacenter OVHcloud.

Al momento della consegna, riceverete:

- Un Backup Tenant, in genere denominato `Backup-tenant-xxxx`, che è un contenitore virtuale che permette di raggruppare tutti i vostri servizi Backup.
- Un VSPC Tenant, in genere denominato `vspc-tenant-xxxx`, che è la vostra "azienda" nella VSPC, permettendo l'accesso ai vostri dashboard e la connessione dei vostri agenti.
- Un Vault, in genere denominato `Backup-vault-xxxx`, che è il vostro spazio di archiviazione dove i vostri dati di backup vengono inviati ad ogni backup.

Vi invitiamo a leggere i nostri altri guide per scoprire il prodotto.

## Anti-affinità

I backup vengono effettuati in remoto, tramite la configurazione Vault predefinita, con un punto di archiviazione situato in una zona geograficamente distinta da quella del server Bare Metal. Questo meccanismo di anti-affinità rafforza la resilienza dei dati di backup.

Mapping delle zone di backup:

| Localizzazione Bare Metal | Vault Affinity |
| ------------------------- | -------------- |
| BHS                       | TOR            |
| SGP                       | SYD            |
| MUM                       | SGP            |
| SYD                       | SGP            |
| RBX                       | GRA            |
| GRA                       | SBG            |
| LIM                       | SBG            |
| PAR                       | RBX            |
| ERI                       | LIM            |
| WAR                       | LIM            |
| SBG                       | RBX            |
| TOR                       | BHS            |

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).