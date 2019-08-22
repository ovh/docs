---
title: Crea un’istanza con Horizon
excerpt: Crea un'istanza con Horizon
slug: crea_unistanza_con_horizon
legacy_guide_number: g1772
---


## 
In alcuni casi, potresti avere bisogno di creare istanze dall'interfaccia Horizon, soprattutto per creare più istanze contemporaneamente o configurare un gruppo di sicurezza specifico per le tue istanze.
Questa guida ti mostra come effettuare queste operazioni.


## 
Se vuoi creare un'istanza:


- Accedi a Horizon
- Clicca su Istanze nel menu a sinistra
- Clicca su Avvia un'istanza
- Completa il modulo:



## Tab Dettagli
Inserisci queste informazioni:

|Zona di disponibilità|Lascia "nova" (scelta predefinita)|
|Nome dell'istanza|Indica il nome dell'istanza che vuoi creare|
|Modello|Seleziona il tipo di istanza che vuoi creare|
|Numero di istanze|Indica il numero delle istanze che vuoi creare|
|Sorgente di avvio dell'istanza|Seleziona il metodo di creazione dell'istanza (avvio da un'immagine o da uno snapshot)|
|Nome dell'immagine|Seleziona l'immagine dell'istanza (solo in caso di avvio da un'immagine)|
|Snapshot dell'istanza|Seleziona lo snapshot di un'istanza (solo in caso di avvio da uno snapshot)|



## Tab Accesso e sicurezza
In questa sezione puoi indicare la chiave SSH e il gruppo di sicurezza per l'istanza.

|Coppia di chiavi|Seleziona una chiave SSH per poter accedere all'istanza (per creare una chiave, clicca sul simbolo "+"|
|Gruppi di sicurezza|Seleziona il gruppo di sicurezza per l'istanza (autorizzazione all'apertura delle porte)|



## Tab Rete
In questa sezione puoi indicare su quali reti connettere l'istanza.

|Reti selezionate|Seleziona la rete o le reti da creare nella lista delle reti disponibili|



## Tab Post-creazione
Da questa sezione puoi personalizzare un'istanza già creata.

|Sorgente dello Script personnalizzato|Entrata diretta o File|
|Argomento di Script|Indica il codice dello script nel campo di inserimento (massimo 16 KB)|
|File di Script|Clicca su Continua per selezionare lo script post-installazione|



## Opzioni avanzate
Da questa sezione puoi gestire le partizioni dell'istanza.

|Partizione del disco|Automatica o Manuale|
|Disco di configurazione|Configura OpenStack per scrivere i metadati su un disco di configurazione specifico che all'avvio sarà associato all'istanza|




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

