---
title: "Backup Agent - Limitazioni note"
excerpt: "Scopri le restrizioni e limitazioni del prodotto Backup Agent"
updated: 2026-01-27
---

## Obiettivo

Questo manuale dettaglia le restrizioni e limitazioni note del prodotto Backup Agent che devi conoscere prima di utilizzare il servizio.

## Limitazioni note

### Politica di backup

- La politica di backup è limitata, non è possibile modificarla.
- Non è possibile configurare un backup su una lista di file o cartelle.
- Non è possibile modificare la data e l'ora di attivazione dei backup (questa funzionalità sarà migliorata in futuro).

### Accesso VSPC

- L'utente che ricevi ha accesso in sola lettura, non è possibile apportare modifiche direttamente sulla VSPC.

### Vault

- Non è possibile creare vault aggiuntive, verranno create automaticamente per garantire che i tuoi dati non siano ospitati nello stesso datacenter in cui si trova il tuo server Bare Metal.
- Non è possibile cambiare vault su un agente.

### Limitazioni del sistema operativo

- È possibile trovare l'elenco dei sistemi operativi compatibili con Veeam Agent a [questo indirizzo](https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=1).

### Compatibilità con altri prodotti OVHcloud

- Al momento il prodotto Backup Agent è compatibile solo con i Server dedicati, non è possibile utilizzare l'agente su altri prodotti.

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).