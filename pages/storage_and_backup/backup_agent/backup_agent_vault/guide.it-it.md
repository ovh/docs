---
title: "Backup Agent - Funzionamento del Vault"
excerpt: "Scopri come funziona il sistema di Vault e la localizzazione dei tuoi dati di backup"
updated: 2026-01-23
---

## Obiettivo

Questa guida ti spiega come funziona il sistema di Vault nel prodotto Backup Agent e come i tuoi dati sono localizzati e memorizzati in base alla posizione dei tuoi server Bare Metal.

## Prerequisiti
- Aver acquistato un servizio Backup Agent al momento dell'acquisto del vostro server Bare Metal o in un momento successivo tramite il menu `Agente di backup`{.action} del vostro spazio client.

## Procedura
### Presentazione del Vault

Un Vault è il vostro spazio di archiviazione dove i vostri dati di backup vengono inviati ad ogni backup. I Vault vengono creati automaticamente da OVHcloud per garantire che i vostri dati non siano ospitati nello stesso datacenter del vostro server Bare Metal.

Questo si basa sui nostri bucket Object Storage, che potete trovare a questo [link](/links/public-cloud/object-storage)

Potete trovare i vostri Vault nel vostro Spazio Cliente, nella sezione Vaults.
![Backup Agent Vault List](images/01-backup-agent-vault-list.png){.thumbnail}

### Principio di localizzazione

**Regola importante:** I dati di backup vengono sempre inviati a un Vault situato in un datacenter diverso da quello in cui si trova il vostro server Bare Metal. Questo garantisce la resilienza e la sicurezza dei vostri dati.

### Casi d'uso

Ecco diversi scenari che illustrano il funzionamento del sistema di Vault:

![Backup Agent Vault Use Cases](images/01-backup-agent-vault-use-cases.png){.thumbnail}

### Caso d'uso 1: Un server Bare Metal in RBX

Se avete un server Bare Metal localizzato a **Roubaix (RBX)** e ordinate il Backup Agent:

- Il vostro server Bare Metal con il Backup Agent installato si trova a **RBX**.
- I vostri dati di backup vengono automaticamente inviati a un Vault creato a **Gravelines (GRA)**, denominato **backup-vault-gra1**.
- Questo garantisce che i vostri dati siano memorizzati in un datacenter diverso dal vostro server.

### Caso d'uso 2: Due server Bare Metal in RBX e GRA

Se avete due server Bare Metal, uno a **Roubaix (RBX)** e l'altro a **Gravelines (GRA)**:

- Il server Bare Metal a **RBX** invia i suoi dati a **backup-vault-sbg-1** a **Gravelines**.
- Il server Bare Metal a **GRA** invia i suoi dati a **backup-vault-gra-1** a **Strasburgo (SBG)**.
- Ogni server utilizza un Vault in un datacenter diverso dal proprio.

### Caso d'uso 3: Tre server Bare Metal in RBX, GRA e LIM

Se avete tre server Bare Metal in diversi datacenter:

- Il server a **RBX** invia i suoi dati a **backup-vault-gra-1** a **GRA**.
- Il server a **GRA** invia i suoi dati a **backup-vault-sbg-1** a **SBG**.
- Il server a **Limburg (LIM)** invia i suoi dati a **backup-vault-sbg-1** a **SBG**.
- Ogni server garantisce che i suoi dati siano memorizzati in un datacenter distante.

### Caso d'uso 4: Server Bare Metal in BHS con NIC EU

Se avete un server Bare Metal a **Beauharnois (BHS)** con un'interfaccia di rete europea:

- Il vostro server Bare Metal si trova a **BHS**.
- I vostri dati di backup vengono inviati a **backup-vault-tor-1** a **Toronto (TOR)**.
- La localizzazione del Vault è determinata in base alla configurazione di rete del vostro server.

## Punti importanti

- I Vault vengono creati automaticamente da OVHcloud, non potete crearli manualmente.
- Non potete cambiare il Vault di un agente una volta che è configurato.
- La localizzazione del Vault è sempre diversa da quella del vostro server Bare Metal per garantire la resilienza.
- Il nome del Vault segue generalmente la convenzione: `backup-vault-<localizzazione>-<numero>`.

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).

