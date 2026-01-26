---
title: "Backup Agent - Presentazione dell'offerta"
excerpt: "Presentazione delle funzionalità e dei vantaggi del prodotto Backup Agent"
updated: 2026-01-23
---

## Obiettivo

Questo manuale ti aiuterà a comprendere il funzionamento del prodotto Backup Agent e i suoi vantaggi per i tuoi servizi Bare Metal.

## Presentazione del prodotto

Il prodotto Backup Agent permette di effettuare il backup dei tuoi server Bare Metal utilizzando un agente che, in base a una politica di backup che hai scelto, invierà i dati del tuo server verso un punto di archiviazione esterno.

Il prodotto Backup Agent si basa su due prodotti del software Veeam:

- La Veeam Service Provider Console (VSPC).
- L'agente Veeam.

L'agente Veeam è un software creato da Veeam, che si installa sul vostro sistema operativo su Linux e Windows, e vi permette di effettuare backup del vostro sistema.

La VSPC permette di distribuire le politiche di backup agli agenti registrati su di essa e consente di fornire le informazioni sull'archiviazione e le credenziali a ciascun agente al momento dell'avvio del backup.
Ecco la [guida](/pages/storage_and_backup/backup_agent/backup_agent_vspc_presentation) che vi spiega come navigare nella VSPC.

Quando ordinate il prodotto, riceverete un'email che conferma la consegna con credenziali che vi permettono di connettervi al vostro tenant nella VSPC. Questo account è in sola lettura e vi permetterà di accedere a visualizzazioni per vedere i vostri backup e i vostri agenti.

Una volta che l'agente riceve le informazioni, invia direttamente i dati verso il punto di archiviazione senza mai passare attraverso l'infrastruttura VSPC.

Lo schema di principio è il seguente:

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail}

Si noti che:

- L'infrastruttura VSPC è ospitata nei data center OVHcloud e non invia dati verso i server di Veeam.
- I punti di archiviazione sono dei bucket [OVHcloud Object Storage](/links/public-cloud/object-storage) che sono ospitati nei data center OVHcloud.

Diversi punti di forza sono presenti in questa offerta:

- Prima politica di backup automatico con 14 giorni di conservazione.
- Possibilità di passare a 30 giorni di conservazione.
- La politica effettua un backup completo del vostro server.
- 14 giorni di immutabilità sui nostri bucket.
- Il periodo dei backup automatici è tra le 22:00 e le 06:00 (fuso orario CET per l'Europa - fuso orario EST per il Canada e l'Asia).
- Crittografia gestita da OVHcloud sull'archiviazione che ospita i tuoi dati di backup.
- Invio diretto del dato di backup verso il bucket senza copiare nulla sulla nostra infrastruttura.
- Il punto di archiviazione è sempre distante dalla localizzazione del tuo server Bare Metal (se sei a Roubaix, il tuo punto di archiviazione sarà a Gravelines).

È anche importante tenere presente che:

- La politica di backup è limitata, non potete modificarla.
- Non potete configurare un backup solo su un elenco di file o cartelle.
- Non potete modificare la data e l'ora di attivazione dei backup (questo è considerato come un miglioramento in futuro).

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).