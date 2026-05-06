---
title: "Backup Agent - Procedura di eliminazione"
excerpt: "Scopri come eliminare un agente, un vault o un tenant Backup Agent"
updated: 2026-02-03
---

## Obiettivo

Questo manuale ti spiega come eliminare diversi elementi del tuo servizio Backup Agent: gli agenti, i vault e i tenant.

## Prerequisiti

- Avere un servizio Backup Agent attivo.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Percorso di navigazione:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## Procedura

### Eliminare un agente

> [!primary]
>
> **Comportamento in base all'utilizzo dell'agente :**
>
> - **Se l'agente non è stato utilizzato per trasferire dati** : Può essere eliminato immediatamente. Verrà disattivato inizialmente, quindi eliminato.
> - **Se sono stati trasferiti dati** : Applichiamo una sospensione dell'agente in stato "Disattivato" per 14 giorni, il tempo necessario per eliminare i dati immutabili.

> [!warning]
>
> Una volta che il tuo agente è sospeso, non puoi più creare un nuovo agente sullo stesso server, devi attendere che il primo agente venga eliminato.

Vai alla sezione `Agenti`{.action} e clicca sul pulsante di eliminazione per l'agente desiderato.

Conferma l'eliminazione dell'agente nella finestra che appare.

![Backup Agent Delete Agent](images/01-backup-agent-delete-agent.png){.thumbnail}

### Eliminare un vault

> [!warning]
>
> Un vault non può essere eliminato se contiene dati. Se desideri eliminare un vault, devi [contattare l'assistenza](/links/support-contact), che effettuerà controlli con te prima di avviare l'eliminazione.

Vai alla sezione `Vaults`{.action} e clicca sul pulsante di eliminazione per il vault desiderato.

Conferma l'eliminazione nella finestra che appare.

![Backup Agent Delete Vault](images/01-backup-agent-delete-vault.png){.thumbnail}

### Eliminare un tenant

> [!warning]
>
> Al momento, un tenant non può essere eliminato in modo autonomo. Se desideri eliminare un tenant, devi [contattare l'assistenza](/links/support-contact). Prenderemo in considerazione la tua richiesta.

Seleziona il tuo tenant e clicca sul pulsante di eliminazione.

Conferma l'eliminazione nella finestra che appare.

![Backup Agent Delete Tenant](images/01-backup-agent-delete-tenant.png){.thumbnail}

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).