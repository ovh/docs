---
title: 'Utilizzare una chiave SSH nell’interfaccia Public Cloud'
slug: utilizzare_una_chiave_ssh_nell_interfaccia_public_cloud
excerpt: 'Guida passo dopo passo su come utilizzare una chiave SSH per semplificare l’accesso ai server Cloud.'
---

**Ultimo aggiornamento 04/12/2019**

## Premessa
Il protocollo SSH ti permette di accedere e comunicare con un server in modo autenticato e criptato.

Per aggiungere una chiave SSH dall’interfaccia Public Cloud esistono due modi: 

- Il primo, più diretto, consiste nell’aggiungere la chiave al momento della creazione di un’istanza.
- Il secondo metodo consiste nell'aggiungere una chiave dall’interfaccia di gestione delle chiavi SSH.


### Prerequisiti
- [Aver creato una chiave SSH](https://docs.ovh.com/it/public-cloud/creare-chiave-ssh/){.ref}


## Creazione di un’istanza
Per creare un’istanza Cloud, accedi all’interfaccia Public Cloud e clicca su `Crea un’istanza`{.action} dal menu “Istanze” situato nella sezione `Compute`{.action} del menu a sinistra.

![Aggiungi un server](images/compute.png){.thumbnail}

Quindi, al momento della creazione dell’istanza, e allo step 3, ti verrà richiesta la chiave SSH.

![Aggiungi un server](images/selectkey.png){.thumbnail}

Se disponi già delle chiavi, seleziona semplicemente la chiave di tua scelta.

Per aggiungere una chiave, clicca su `Aggiungi una chiave`{.action}. Attribuisci un nome alla chiave e inseriscilo nel campo “Nome della chiave SSH”. Poi incolla la chiave nel campo “Chiave SSH”. Per completare l’operazione, clicca su `Aggiungi chiave`{.action}.

![Aggiungi una chiave](images/addkey.png){.thumbnail}

## Dall’interfaccia di gestione delle chiavi

Una volta selezionata l’opzione “Chiavi SSH” dal menu a sinistra del tuo progetto, una scheda “Chiave SSH” sarà disponibile.

![Aggiungi una chiave](images/addkeymenu.png){.thumbnail}

Dopo aver attribuito un nome alla chiave e averla incollata nell’apposito campo, clicca su `Aggiungi una chiave`{.action}e infine su `Aggiungi questa chiave`{.action}.

![Aggiungi una chiave](images/addkeymenu1.png){.thumbnail}

Questa chiave potrà essere utilizzata al momento della [creazione della tua prossima istanza Cloud](https://docs.ovh.com/it/public-cloud/come_utilizzare_la_tua_istanza_public_cloud/){.ref}.
