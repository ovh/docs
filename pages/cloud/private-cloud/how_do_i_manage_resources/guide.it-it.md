---
title: Come gestire le mie risorse?
excerpt: ''
slug: come_gestire_le_mie_risorse
legacy_guide_number: g602
---


## 
Vediamo qui come monitorare le risorse del tuo Private Cloud.
È necessario utilizzare il client vSphere, o accedervi utilizzando il proprio client installato sulla tua macchina, o utilizzando la connessione RDP che ti abbiamo fornito al momento dell'attivazione del tuo PCC.


## Sugli Hosts
È possibile ottenere una panoramica delle risorse dell'host recandoti sul tuo PCC nella sezione "host":

![](images/img_98.jpg){.thumbnail}


## Su un cluster o su un pool di risorse.
Puoi vedere tutte le informazioni sulle risorse per il tuo PCC andando alla sezione "Allocazione Risorse" di quest'ultimo.
Troverai tutte le risorse disponibili: RAM, CPU, spazio di storage. Questo ti permetterà di isolare un eventuale carico anomalo, causato da una macchina virtuale su uno degli host o su uno dei datacenter virtuali. Puoi impostare limiti di accesso del disco (I/O) per i tuoi storage. Puoi anche dare la priorità ad ognuna delle tue VM, ma anche di gestire i limiti delle tue risorse per le macchine virtuali per impedire a certe VM di monopolizzare troppe risorse e degradare le prestazioni complessive.
E 'inoltre possibile gestire le risorse per un pool di VM.

![](images/img_96.jpg){.thumbnail}


## Grafici di risorse per i tuoi cluster o per i tuoi hosts
Sulla sezione "Prestazioni" ritroverai i grafici dell'utilizzo del tuo cluster o del tuo host:

![](images/img_95.jpg){.thumbnail}
Puoi utilizzare l'opzione "Avanzato" quindi "Opzioni Grafico ..." al fine di personalizzare tutti gli elementi grafici.
Puoi selezionare l'intervallo di tempo da visualizzare, o il tipo di grafico, al fine di fare un'analisi più precisa di questi dati:

![](images/img_100.jpg){.thumbnail}
Personalizzazione dei grafici:

![](images/img_101.jpg){.thumbnail}


## Suoi tuoi archivi
Recandoti nella sezione "Datacenter", e poi nella sezione "Datastore"(o database), vedrai l'insieme dei tuoi storage. 
È possibile così controllare lo spazio utilizzato sulla tua intera infrastruttura:

![](images/img_102.jpg){.thumbnail}

