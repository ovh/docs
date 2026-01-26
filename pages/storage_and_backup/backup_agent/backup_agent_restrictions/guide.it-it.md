---
title: "Backup Agent - Restrizioni note"
excerpt: "Scopri le restrizioni e le limitazioni del prodotto Backup Agent"
updated: 2026-01-23
---

## Obiettivo

Questa guida dettaglia le restrizioni e limitazioni note del prodotto Backup Agent che dovete conoscere prima di utilizzare il servizio.

## Restrizioni note

### Politica di backup

- La politica di backup è limitata, non potete modificarla.
- Non potete configurare un backup solo su un elenco di file o cartelle.
- Non potete modificare la data e l'ora di attivazione dei backup (questo è considerato come un miglioramento in futuro).

### Accesso VSPC

- L'utente che ricevete è in sola lettura, non potete fare modifiche direttamente nella VSPC.

### Vault

- Non potete creare vault aggiuntivi, verranno creati automaticamente per assicurare che i vostri dati non siano ospitati nello stesso datacenter dove si trova il vostro server Bare Metal.
- Non potete cambiare il vault di un agente.

### Limitazioni OS

- Potete trovare l'elenco dei sistemi operativi compatibili per l'agente Veeam qui <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=1>

### Compatibilità con altri prodotti OVHcloud

- Attualmente, il prodotto Backup Agent è compatibile solo con i Server Dedicati, non potete utilizzare il vostro agente su altri prodotti.

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).

