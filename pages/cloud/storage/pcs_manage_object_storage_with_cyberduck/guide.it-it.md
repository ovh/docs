---
title: 'Gestisci il tuo Object Storage con CyberDuck'
excerpt: 'Gestisci il tuo Object Storage con CyberDuck'
slug: gestisci_il_tuo_object_storage_con_cyberduck
section: 'Object Storage'
legacy_guide_number: g1868
---

**Ultimo aggiornamento: 08/01/2020**

## 
L'Object Storage è una soluzione di archiviazione gestibile principalmente tramite l'API di OpenStack.
Se non hai familiarità nella gestione del tuo spazio di storage tramite riga di comando, esistono alcune soluzioni grafiche che utilizzano le API di OpenStack al tuo posto.
CyberDuck è una delle soluzioni disponibili, ed è facilmente configurabile.

Questa guida ti mostra come configurare Cyberduck per gestire il tuo Object Storage utilizzando un'interfaccia grafica basata sulle API OpenStack.


## Requisiti necessari

- aver configurato un utente Horizon: []({legacy}1773)
- disporre dell'identificativo del tuo progetto e del tuo utente, recuperabile scaricando il file OpenRC nel menu [Accesso e Sicurezza in Horizon]({legacy}1774)




## 

- Scarica [Cyberduck](https://cyberduck.io/)
- Accedi con un account di tipo "Swift - OpenStack Object Storage"



![objectstorage-cyberduck](images/v3.0.png){.thumbnail}
Inserisci queste informazioni:

- Server: auth.cloud.ovh.net (Server di autenticazione)
- Tenant ID:Access Key: corrisponde all'ID_del_Progetto:ID_Utente_Horizon
- Secret Key: password del tuo utente Horizon
- More Options/Path: v3.0



- Accedi



![objectstorage-cyberduck](images/img_2756.jpg){.thumbnail}


## 

- [Come utilizzare l'API Swift]({legacy}1916)
- [Configura il tuo Object Storage su Owncloud]({legacy}2000)




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

