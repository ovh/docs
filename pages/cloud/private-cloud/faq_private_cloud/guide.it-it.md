---
title: FAQ Hosted Private Cloud
excerpt: ''
slug: faq_dedicated_cloud
legacy_guide_number: g598
---


## Durante la configurazione di HA ottengo l'errore: "Errore HA: Impossibile eseguire la configurazione HA"
Se l'errore persiste, è necessario annullare la configurazione manualmente e quindi riconfigurare il cluster con il HA. Per fare questo, spostati nelle proprietà del tuo cluster, deseleziona l'opzione HA e poi valida la modifica. Una volta che l'operazione è completata, puoi ritornare nelle proprietà e quindi riattivare HA. Una volta completata l'operazione di attivazione, l'opzione HA sarà attiva sul tuo cluster.


## A cosa serve l'opzione "Rescan Datastore" sul cluster:
Questa opzione viene utilizzata per i salvataggi iSCSI al fine di aggiornare le vie d'accesso.
Questa manipolazione non sarà necessaria per OVH. E' utilizzata soltanto per i filers iSCSI, che noi non proponiamo.


## A seguito di un'allerta, si viene riportati sull'host (triangolo rosso)
È necessario convalidare questo avviso e passarlo in verde, dentro la sezione "avvisi" del tuo host. Fai un clic destro sull'avviso rimanente.


## Ho una VM che si trova in stato "Invalid"
In questo caso, elimina il tuo inventario VM, e fai un clic destro su questa VM.
ATTENZIONE: scegli "rimuovere dall'inventario" e non "rimuovere il disco". In quest'ultimo caso, perderai i dati della tua VM.
In seguito, ti basterà aggiungere la VM nell'inventario.


## Quando accedo alla console della mia VM, ottengo una schermata nera.
In questo tipo di caso, è il sistema operativo della VM che ha messo lo schermo in attesa. Premi un tasto della tua tastiera per riattivarla.

