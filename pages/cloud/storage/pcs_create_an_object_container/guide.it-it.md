---
title: 'Creare un container di oggetti'
excerpt: 'Come creare un container di oggetti'
slug: crea_un_container_di_oggetti
section: 'Object Storage'
legacy_guide_number: g1921
---

## 
Per utilizzare la soluzione di storage del tuo Public Cloud OVH, è necessario innanzi tutto creare un container per archiviare i tuoi file.

Questa guida ti mostra come creare un container dall'interfaccia Horizon di Openstack.


## Requisiti necessari

- [Creare un utente per accedere a Horizon](https://docs.ovh.com/it/public-cloud/crea_un_utente_per_accedere_a_horizon/){.external}




## 

- Accedi a Horizon
- Seleziona "Objet Store" nel menu a sinistra



![](images/img_2935.jpg){.thumbnail}

- Clicca su "Create Container"


Si apre una nuova finestra:

![](images/img_2937.jpg){.thumbnail}
Puoi:

- assegnare un nome al tuo container
- selezionare il tipo di container

|Pubblico|Accessibile a tutti|
|---|
|Pubblico|Accessibile a tutti|
|Privato|Accessibile solo tramite autenticazione|


A questo punto, visualizzi il container appena creato

![](images/img_2938.jpg){.thumbnail}
e puoi effettuare queste operazioni:

- visualizzare i dettagli del tuo container
- impostare il tuo container come pubblico o privato
- Eliminare il tuo container


Cliccando sul nome del tuo container, puoi:

- creare una pseudo-cartella


I dati salvati sull'Object Storage non sono archiviati secondo l'arborescenza classica (Cartella > Sotto-cartella...), ma si trovano tutti sullo stesso livello. In questo modo, i tempi di accesso ai file vengono ridotti notevolmente.
Le pseudo-cartelle vengono gestite tramite un prefisso.

- inviare i tuoi file
- eliminare i tuoi file e pseudo-cartelle
- scaricare i tuoi file
- copiare i tuoi file
- visualizzare i dettagli dei tuoi file




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

