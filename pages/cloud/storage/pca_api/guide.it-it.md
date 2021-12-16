---
title: Caratteristiche delle API
slug: pca/api
excerpt: Caratteristiche delle API OpenStack Swift per la soluzione OVH Public Cloud Archive
section: Public Cloud Archive
order: 120
---


## Operazioni sui container
Questa sezione descrive le modifiche apportate da OVH alle API OpenStack Swift per eseguire operazioni sui container.


### GET Container inventory
**Descrizione**

Recupera l’inventario di un container.

**Parametri della richiesta**

|Parametro|Tipo|Descrizione|Richiesto|
|---|---|---|---|
|policy_extra|Boolean|Include campi che contengono informazioni aggiuntive provenienti dalla policy di storage nella risposta. Se richiesto, il formato è json.|No|

**Risposta**

|Campo|Tipo|Descrizione|
|---|---|---|
|policy_retrieval_delay|Integer|Tempo di recupero dell'oggetto in secondi se lo stato è *unsealing*, altrimenti *null*.|
|policy_retrieval_state|String|Stato del recupero dell'oggetto. I valori possibili sono: *sealed*, *unsealing*, *unsealed*.|


## Operazioni sugli oggetti
Questa sezione descrive le modifiche apportate da OVH alle API OpenStack Swift per eseguire operazioni sugli oggetti.


### GET Object
**Descrizione**

Recupera un oggetto.

**Codici di errore**

|Codice|Descrizione|
|---|---|
|429|L’operazione di unsealing sull’oggetto è in corso.|

**Header di risposta**

|Nome|Tipo|Descrizione|Richiesto|
|---|---|---|---|
|Retry-After|Integer|Tempo di recupero dell’oggetto in secondi se il codice di errore della risposta è 429.|No|