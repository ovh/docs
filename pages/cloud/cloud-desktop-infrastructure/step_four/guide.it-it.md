---
title: 'Step 4 - Assegnare desktop virtuali agli utenti'
slug: assegnare-desktop-virtuali
excerpt: 'Come aggiungere utenti sui desktop virtuali'
section: Procedura
order: 4
---

**Ultimo aggiornamento: 21/09/2018**

## Obiettivo

Una volta [creato il pool](https://docs.ovh.com/it/cloud-desktop-infrastructure/creare-un-pool/){.external}, vediamo come autorizzare gli utenti ad accedere ai vari desktop virtuali.

**Questa guida ti mostra come aggiungere gli utenti.**


## Prerequisiti

- Aver creato degli utenti nell’Active Directory (previa creazione di un rapporto di approvazione) o aver creato degli utenti nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Essere connesso all’interfaccia VMware Horizon 7.1.

## Procedura

### Gestire gli utenti

Al momento della consegna della piattaforma, vengono creati dieci utenti generici (*vdiXX* dove XX rappresenta un numero). 


## Attribuire desktop virtuali

Le operazioni si svolgono all’interno di VMware Horizon 7.1. La scheda `Entitlements`{.action} del pool consente di associare nuovi utenti in modo da fornire loro l’accesso ai desktop virtuali.

- Clicca su `Add Entitlement`{.action} per aprire il menu contestuale.

![Add Entitlement](images/1200.png){.thumbnail}

- Cerca e seleziona gli utenti da associare e poi conferma.

![Selection de l'utilisateur](images/1201.png){.thumbnail}


A questo punto gli utenti associati a un pool possono[ connettersi e utilizzare i desktop virtuali.](https://docs.ovh.com/it/cloud-desktop-infrastructure/connessione-desktop-virtuale/){.external}


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.