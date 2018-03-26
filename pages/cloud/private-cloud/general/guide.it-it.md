---
title: Generalità
excerpt: ''
slug: generalita
legacy_guide_number: g597
---


## 
L'elevata specificità di questo prodotto in rapporto agli altri, è che si installa direttamente sullo supporto
materiale (noto come hypervisor Bare Metal). Non è necessario installare un sistema operativo
"Host" per installare VMware ESXi.
VMware ESXi è un hypervisor che permette una gestione precisa delle risorse per ogni macchina virtuale e anche migliori prestazioni.
Una macchina virtuale è infatti un insieme di diversi archivi.
Questo sistema ha diverse caratteristiche, fra le quali la più significativa è che sia in grado di gestire
più connessioni simultanee.
ESXi dispone anche di meccanismi molto precisi per la gestione della memoria condivisa, come il recupero della memoria inutilizzata, così come la duplicazione e la decompressione delle pagine di memoria.


## 
Questo strumento consente di migrare una macchina virtuale da un server ESXi ad un altro "a caldo", vale a dire senza
interruzione di servizio. Questa operazione è possibile quando i server host utilizzano dei microprocessori
compatibili (gli host proposti da OVH sono compatibili) e quando lo spazio di storage dei file delle macchine virtuali si trova condiviso su un SAN o un NAS.


## 
Questo strumento consente la ripartizione del carico su più server ESXi.
Sono disponibili diverse modalità di funzionamento. Per esempio, è possibile lasciare DRS gestire
automaticamente l'assegnazione delle risorse tra i server ESXi.
DRS si basa sul meccanismo di VMotion per spostare le macchine virtuali tra i differenti servers
ESXi all'interno dello stesso cluster. È inoltre possibile creare regole di affinità al fine di raggruppare o separare delle VM su uno o più ESXi. (Es: un AD primario e secondario).


## 
Questa opzione di vCenter crea un cluster di server ESXi e li collega.
La tecnologia "vLockStep", sulla quale si basa il cluster FT, permette alla VM del server secondario di eseguire la VM del server principale in parallelo. Solo il server primario esegue le scritture verso il disco o la rete; il server secondario esegue la stessa VM, in parallelo, senza realizzare le scritture.
In caso di guasto del server primario, vCenter lo disattiva esplicitamente . Ciò consente al server secondario di
prendere il relè per garantire la continuità di funzionamento di questa VM.

## ATTENZIONE ! ! !
Questa funzione al momento non è supportata sul Private Cloud.


## 
vCenter è uno strumento di gestione che permette di amministrare, in modo centralizzato, tutte le macchine virtuali e gli host fisici di un ambiente virtuale. Tramite questa interfaccia, è anche possibile gestire:

- gli avvisi di supervisione (CPU/RAM);
- i templates (allegati di sistemi operativi preconfigurati);
- l'uso delle opzioni (HA, vMotion, DRS).



