---
title: 'Gestisci il tuo Object Storage con CyberDuck'
excerpt: 'Gestisci il tuo Object Storage con CyberDuck'
slug: gestisci_il_tuo_object_storage_con_cyberduck
section: 'Object Storage'
legacy_guide_number: g1868
---

**Ultimo aggiornamento: 31/03/2020**

## Obiettivo

L'Object Storage è una soluzione di archiviazione gestibile principalmente tramite l'API di OpenStack.
Se non hai familiarità nella gestione del tuo spazio di storage tramite riga di comando, esistono alcune soluzioni grafiche che utilizzano le API di OpenStack al tuo posto.
CyberDuck è una delle soluzioni disponibili, ed è facilmente configurabile.

Questa guida ti mostra come configurare Cyberduck per gestire il tuo Object Storage utilizzando un'interfaccia grafica basata sulle API OpenStack.

## Prerequisiti

- aver configurato un utente Horizon: [Creare un utente per accedere a Horizon](../../public-cloud/crea_un_utente_per_accedere_a_horizon/)
- disporre dell'identificativo del tuo progetto e del tuo utente, recuperabile scaricando il file OpenRC nel menu [Accesso e Sicurezza in Horizon]({legacy}1774)

## Procedura

- Scarica [Cyberduck](https://cyberduck.io/)
- Accedi con un account di tipo "Swift - OpenStack Object Storage"

![objectstorage-cyberduck](images/v3.0.png){.thumbnail}

Inserisci queste informazioni:

- Server: auth.cloud.ovh.net (Server di autenticazione)
- Project:Domain:Username : OS_TENANT_NAME:default:OS_USERNAME
- Secret Key: password del tuo utente Horizon
- More Options/Path: v3.0

- Accedi

![objectstorage-cyberduck](images/img_2756.jpg){.thumbnail}

## Per saperne di più

[Come utilizzare l'API Swift](../../public-cloud/come_utilizzare_lapi_swift/)

Unisciti alla nostra Community di utenti <https://community.ovh.com/en/>.
