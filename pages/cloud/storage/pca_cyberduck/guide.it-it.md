---
title: Gestisci i tuoi archivi con un client Swift
slug: pca/cyberduck
excerpt: Come gestire il tuo servizio Public Cloud Archive
section: Public Cloud Archive
---


## Introduzione
Public Cloud Archive (PCA) è una soluzione di archiviazione gestibile tramite l'API di OpenStack. Se non hai familiarità nell'amministrazione dello spazio di storage da riga di comando, esistono alcune interfacce grafiche che utilizzano le API di OpenStack al tuo posto. Il client Swift Cyberduck è una delle soluzioni disponibili ed è facilmente configurabile. Online puoi trovare anche altre interfacce con una configurazione simile a quella che ti stiamo per presentare.

**Questa guida ti mostra come configurare Cyberduck per gestire il tuo Public Cloud Archive utilizzando un'interfaccia grafica basata sulle API OpenStack.**


## Prerequisiti
- Un utente Horizon configurato (consulta questa [guida](https://www.ovh.it/g1773.crea_un_utente_per_accedere_a_horizon){.external})
- L'identificativo del tuo progetto, composto da una stringa di caratteri alfanumerici. Per recuperare questa informazione, accedi al tuo container nello Spazio Cliente OVH: l’identificativo viene visualizzato tra “AUTH” e lo slash successivo.


![projet](images/project.png){.thumbnail}

## Procedura

### Configura Cyberduck
- Scarica [Cyberduck](https://cyberduck.io/){.external}
- Accedi con un account di tipo "Swift - OpenStack Object Storage"


![configuration](images/Cyberduck.png){.thumbnail}

Inserisci nel form le informazioni richieste:

- Server: auth.cloud.ovh.net (Server di autenticazione)
- Tenant ID:Access Key: corrispondente all’ID_del_Progetto:ID_Utente_Horizon
- Password: password del tuo utente Horizon
- More Options/Path: v2.0
- Connect


![connexion](images/img_2756.jpg){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
