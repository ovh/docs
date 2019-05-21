---
title: Public Cloud e vRack - Roadmap e qualche spiegazione
excerpt: Public Cloud e vRack - Roadmap e qualche spiegazione
slug: public_cloud_e_vrack_-_roadmap_e_qualche_spiegazione
legacy_guide_number: g2148
---


## 
La vRack è una tecnologia che permette di collegare diversi servizi OVH qualunque sia la loro localizzazione, purché compatibili con la vRack.

La vRack può essere paragonata a uno switch privato virtuale in grado di connettere tra di loro, ad esempio, server dedicati in Canada, istanze Cloud a Strasburgo e servizi Dedicated Cloud a Roubaix.

Una volta collegato questo "switch" ai tuoi server, puoi farli comunicare attraverso le vLAN, ognuna delle quali è una rete isolata e privata.


## 
La vRack su Public Cloud OVH è una vRack di terza generazione: per il suo corretto funzionamento potrebbe quindi essere necessario modificare o aggiornare i tuoi servizi.


## Step 1: configura la vRack sulle tue istanze Public Cloud localizzate a Strasburgo e Gravelines
Questa fase è in produzione
Configura il servizio sulle tue istanze Public Cloud localizzate nei datacenter di Strasburgo e Gravelines, per far comunicare le risorse di uno stesso progetto ospitate nelle Region SBG1 e GRA1.


## Step 2: collega il tuo progetto Public Cloud OVH tutti i datacenter
Questa fase è in produzione
Oltre a SBG1 e GRA1, puoi attivare la vRack anche in Canada, nel datacenter BHS1.

Le diverse Region saranno collegate tra di loro permettendoti di usufruire della comunicazione inter-datacenter per i tuoi servizi.

Le reti private che utilizzano lo stesso ID vengono collegate automaticamente tra di loro: le tue istanze di SBG1 potranno comunicare con le tue istanze di BHS1 o a GRA1, utilizzando la stessa rete privata.


## Step 3: collega la vRack Public Cloud agli altri prodotti vRack
Le vRack ti permettono anche di collegare le istanze Public Cloud con altri prodotti OVH.

Per farlo, è sufficiente aggiungere questi servizi nella vRack in cui è già presente il Public Cloud. Tutti i servizi OVH collegati a una stessa vRack possono comunicare tra loro, qualunque sia la loro localizzazione. Ad esempio, per un progetto Public Cloud, le istanze ospitate a BHS1 possono comunicare con le istanze localizzate a SBG1 e con un Dedicated Cloud a Roubaix.


## 
Per configurare l'interfaccia di rete vRack (eth1 su Linux) su un server dedicato, puoi scegliere due modalità:


- eth1: 192.168.0.2 - assegnare un indirizzo privato direttamente a eth1. In questo caso, per far comunicare i server la vRack utilizza implicitamente un VLAN ID 0.
- eth1.8: 10.8.0.2 - taggare eth1 per specificare il VLAN ID 8. In questo caso, abbiamo scelto l'ID della VLAN utilizzata e definito un indirizzo privato sull'interfaccia taggata.


In questo modo, tutte le VLAN vengono definite sull'interfaccia del server dedicato e, in base all'ID, la configurazione dell'interfaccia di rete selezionerà la VLAN tra quelle disponibili.

Per utilizzare le reti private su Public Cloud, invece, è necessario collegare il tuo progetto a una vRack.

Una volta effettuato il collegamento, è possibile creare reti private che utilizzanno direttamente il VLAN ID scelto. Non è necessario taggare le interfacce nelle istanze, perché l'isolamento viene effettuato direttamente nella rete privata.

Di conseguenza, per collegarsi a più VLAN le istanze Public Cloud utilizzeranno più interfacce di rete (eth1, eth2 ...), mentre un server dedicato userà la stessa interfaccia con tag diversi (eth1.4, eth1.123 ...).


## 
[Utilizza la vRack e le reti private con le istanze Public Cloud]({legacy}2162)


## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

