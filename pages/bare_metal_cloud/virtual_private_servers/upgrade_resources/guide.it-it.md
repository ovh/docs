---
title: "Come modificare le risorse di un VPS"
excerpt: "Scopri come modificare RAM, vCPU o storage dallo Spazio Cliente"
updated: 2025-09-08
---

<style> details>summary { color:rgb(33, 153, 232) !important; cursor: pointer; } details>summary::before { content:'\25B6'; padding-right:1ch; } details[open]>summary::before { content:'\25BC'; } </style>

## Obiettivo

I nostri servizi VPS offrono flessibilità, affidabilità e performance per svariate esigenze di hosting. L’aggiornamento di RAM, vCPU o storage può essere effettuato dallo [Spazio Cliente OVHcloud](/links/manager).

**Questa guida ti mostra come aggiungere vCore, memoria e storage al tuo servizio VPS.**

## Prerequisiti

- Disporre di un [VPS](/links/bare-metal/vps) nello Spazio Cliente OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Bare Metal Cloud`{.action} e seleziona il server nella sezione `Server privati virtuali`{.action}.

> [!primary]
>
> Le opzioni di aggiornamento disponibili nello Spazio Cliente variano in base alla gamma e al modello del VPS selezionato. Le schermate che seguono sono fornite a titolo illustrativo e non fanno riferimento a uno scenario concreto di aggiornamento del VPS.

Da qui è possibile aggiornare la vCore (`1`), la memoria (`2`) o lo storage (`3`).

![Aggiorna risorse](images/vps_upgrade01.png){.thumbnail}

### 1. Per aggiungere **vCore**

Nella scheda **Home** del pannello **La tua configurazione**, clicca su `Aggiungi vCore passando alla gamma superiore`{.action}.

Seleziona un nuovo modello e clicca su `Avanti`{.action}.

![Aggiorna risorse](images/vps_upgrade02.png){.thumbnail}

Seleziona le opzioni di memoria e storage e clicca su `Avanti`{.action}.

![Aggiorna risorse](images/vps_upgrade03.png){.thumbnail}

Accetta (`☑`{.action}) le **condizioni contrattuali** e clicca su `Avanti`{.action}.

![Aggiorna risorse](images/vps_upgrade04.png){.thumbnail}

Rivedi le modifiche e clicca su `Ordina`{.action}.

![Aggiorna risorse](images/vps_upgrade05.png){.thumbnail}

### 2. Per aggiornare la **Memoria**

Nella scheda **Home** del pannello **La configurazione**, fare clic sulla quantità di memoria desiderata. Le opzioni disponibili dipendono dalla gamma di VPS attualmente disponibili.

Nella finestra pop-up, clicca su `Conferma e paga`{.action} per completare l’ordine.

![Aggiorna risorse](images/vps_upgrade06.png){.thumbnail}

### 3. Per aggiornare lo **Storage**

Nella scheda **Home** nel pannello **La configurazione**, fare clic sulla quantità di storage desiderata. Le opzioni disponibili dipendono dalla gamma di VPS attualmente disponibili.

Nella finestra pop-up, clicca su `Conferma e paga`{.action} per completare l’ordine.

![Aggiorna risorse](images/vps_upgrade07.png){.thumbnail}

Consulta la nostra guida dedicata agli step seguenti: [Come ripartire un VPS dopo un aggiornamento dello storage](/pages/bare_metal_cloud/virtual_private_servers/upsize_vps_partition)

## FAQ

/// details | Manterrò lo stesso indirizzo IP?

Sì, dopo l’aggiornamento del VPS manterrai lo stesso indirizzo IP.

///

/// details | I tuoi dati saranno conservati sul server?

Sì, dopo l'aggiornamento i dati saranno conservati. Quando si esegue l'aggiornamento del disco, potrebbe essere necessario estendere le partizioni.

///

/// details | Cosa succede al backup/snapshot? È possibile utilizzarlo sul nuovo VPS?

Sì. Dopo gli aggiornamenti, avrai sempre accesso ai tuoi backup e Snapshot.

///

/// details | Cosa succede alla licenza software sul vecchio VPS? È possibile spostarla automaticamente sul nuovo VPS?

Se disponi di una licenza attiva, resterà associata al VPS. Il prezzo può variare in base al contratto di licenza o ai requisiti del fornitore.  
Le eventuali modifiche apportate alla licenza verranno spiegate prima dell’aggiornamento del VPS.

///

/// details | La velocità cambia?

In alcuni casi la velocità può cambiare, in particolare quando si passa da un VPS di livello inferiore a quello superiore.

///

/// details | L'aggiornamento sarebbe immediato o avrei tempo di utilizzare entrambi contemporaneamente (configurazione, trasferimento dei dati, ecc.)?

L'aggiornamento sarà effettivo immediatamente, conservando tutti i dati. L’aggiornamento assegnerà più risorse al VPS esistente.

///

## Per saperne di più

[FAQ VPS](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

Contatta la nostra [Community di utenti](/links/community).
