---
title: Crea/ripristina il tuo server virtuale da un backup
excerpt: Crea/ripristina il tuo server virtuale da un backup
slug: crearipristina_il_tuo_server_virtuale_da_un_backup
legacy_guide_number: g1882
---


## 
Riprortare la tua istanza a stato precedente utilizzando un backup è necessario, ad esempio, se hai effettuato una modifica scorretta sulla sua configurazione o semplicemente per crearne una nuova. La duplicazione dell'istanza, infatti, è utile anche per la ripartizione del carico o per l'high availability.

Questa guida ti mostra come utilizzare i tuoi backup per creare, duplicare o ripristinare le tue istanze.


## Descrizione

- Il backup di un'istanza Public Cloud
- Un server virtuale già creato




## 

- Accedi allo Spazio Cliente Public Cloud OVH
- Clicca sul tab "Backup"



![](images/img_2808.jpg){.thumbnail}

- Clicca sull'icona "Crea un Cloud server con questo backup" a destra del backup da ripristinare
- Si apre questa finestra:



![](images/img_2809.jpg){.thumbnail}

- Personalizza il nome del VPS, se necessario
- Scegli il tuo modello

Attenzione!

Attualmente, dallo Spazio Cliente OVH, è possibile eseguire il ripristino solo nel datacenter in cui si trova il backup. Per trasferire il backup in un altro datacenter, è necessario utilizzare l'API OpenStack.


- Scegli la tua chiave SSH
- Scegli la modalità di fatturazione
- Clicca su "Avvia adesso"
- Il tuo server virtuale è disponibile dopo qualche secondo




## 

- Accedi allo Spazio Cliente Public Cloud OVH
- Clicca sulla freccia e, nel menu, seleziona "Modifica":



![](images/img_2810.jpg){.thumbnail}

- Si apre questa finestra:



![](images/img_2812.jpg){.thumbnail}

- Personalizza il nome del tuo server
- Scegli il modello (caratteristiche uguali o superiori alla macchina virtuale di partenza)
- Clicca sulle distribuzioni
- Visualizzi i backup che puoi utilizzare:



![](images/img_2815.jpg){.thumbnail}

- Clicca su "I tuoi backup (Snapshot)":



![](images/img_2816.jpg){.thumbnail}

- Seleziona i backup da ripristinare
- Scegli la modalità di pagamento
- Clicca su "Applica le modifiche"
- Il tuo server virtuale è disponibile dopo qualche secondo


La tua istanza non conserverà i dati generati dopo la creazione di questo backup.


## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

