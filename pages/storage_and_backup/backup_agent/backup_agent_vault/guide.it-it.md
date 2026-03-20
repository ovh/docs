---
title: "Backup Agent - Funzionamento del Vault"
excerpt: "Scopri come funziona il sistema del Vault e dove vengono localizzati i tuoi dati di backup"
updated: 2026-01-28
---

## Obiettivo

Questo manuale ti spiega come funziona il sistema del Vault nel prodotto Backup Agent e come i tuoi dati vengono localizzati e archiviati in base alla posizione dei tuoi server Bare Metal.

## Prerequisiti

- Avere ordinato un servizio Backup Agent al momento dell'acquisto del tuo server Bare Metal o in seguito tramite il menu `Backup Agent`{.action} del tuo Spazio Cliente.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Percorso di navigazione:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## Procedura

### Presentazione del Vault

Un Vault è lo spazio di archiviazione dove i tuoi dati di backup vengono inviati ad ogni backup. I Vaults vengono creati automaticamente da OVHcloud per garantire che i tuoi dati non siano ospitati nello stesso datacenter del tuo server Bare Metal.

Questo si basa sui nostri bucket Object Storage, che puoi trovare a [questo link](/links/public-cloud/object-storage).

Per trovare i tuoi Vaults, clicca su [questo link](/links/control-panel/baremetal-backup-agent) per accedere alla sezione `Backup Agent`{.action}, poi clicca sull'etichetta `Vaults`{.action}.

![Backup Agent Vault List](images/01-backup-agent-vault-list.png){.thumbnail}

### Principio di localizzazione

**Regola importante :** I dati di backup vengono sempre inviati verso un Vault situato in un datacenter diverso da quello dove si trova il tuo server Bare Metal. Questo garantisce la resilienza e la sicurezza dei tuoi dati.

### Caso d'uso

Ecco diversi scenari che illustrano il funzionamento del sistema del Vault :

![Backup Agent Vault Use Cases](images/01-backup-agent-vault-use-cases.png){.thumbnail}

### Caso d'uso 1 : Un server Bare Metal a RBX

Se hai un server Bare Metal localizzato a **Roubaix (RBX)** e ordini il Backup Agent :

- Il tuo server Bare Metal con Backup Agent installato si trova a **RBX**.
- I tuoi dati di backup vengono automaticamente inviati verso un Vault creato a **Gravelines (GRA)**, chiamato **backup-vault-gra1**.
- Questo garantisce che i tuoi dati siano archiviati in un datacenter diverso da quello del tuo server.

### Caso d'uso 2 : Due server Bare Metal a RBX e GRA

Se hai due server Bare Metal, uno a **Roubaix (RBX)** e l'altro a **Gravelines (GRA)** :

- Il server Bare Metal a **RBX** invia i suoi dati verso **backup-vault-sbg-1** a **Gravelines**.
- Il server Bare Metal a **GRA** invia i suoi dati verso **backup-vault-gra-1** a **Strasbourg (SBG)**.
- Ogni server utilizza un Vault in un datacenter diverso dal proprio.

### Caso d'uso 3 : Tre server Bare Metal a RBX, GRA e LIM

Se hai tre server Bare Metal in diversi datacenter :

- Il server a **RBX** invia i suoi dati verso **backup-vault-gra-1** a **GRA**.
- Il server a **GRA** invia i suoi dati verso **backup-vault-sbg-1** a **SBG**.
- Il server a **Limburg (LIM)** invia i suoi dati verso **backup-vault-sbg-1** a **SBG**.
- Ogni server garantisce che i suoi dati siano archiviati in un datacenter distante.

### Caso d'uso 4 : Server Bare Metal a BHS con NIC EU

Se hai un server Bare Metal a **Beauharnois (BHS)** con una interfaccia di rete europea :

- Il tuo server Bare Metal si trova a **BHS**.
- I tuoi dati di backup vengono inviati verso **backup-vault-tor-1** a **Toronto (TOR)**.
- La localizzazione del Vault è determinata in base alla configurazione di rete del tuo server.

## Punti importanti

- I Vaults vengono creati automaticamente da OVHcloud, non puoi crearli manualmente.
- Non puoi cambiare Vault per un agente una volta che è configurato.
- La localizzazione del Vault è sempre diversa da quella del tuo server Bare Metal per garantire la resilienza.
- Il nome del Vault segue generalmente la convenzione : `backup-vault-<location>-<number>`.

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).