---
title: Host sostitutivo
slug: host-sostitutivo
excerpt: Come avviene la sostituzione di un host malfunzionante
legacy_guide_number: '2883590'
section: Funzionalità OVHcloud
order: 04
updated: 2020-06-29
---

**Ultimo aggiornamento: 07/07/2020**

## Prerequisiti

- Disporre di una soluzione [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/){.external}

## Obiettivi

In caso di irraggiungibilità di un server host, OVHcloud ne garantisce la sostituzione a livello contrattuale.

**Questa guida ti mostra come funziona la procedura di sostituzione di una macchina malfunzionante.**

## Consegna dello spare host

Per garantire la continuità di servizio anche in caso di malfunzionamento di uno degli host, OVHcloud mette automaticamente a disposizione nell’infrastruttura un host sostitutivo gratuito. 

Al momento della consegna di questa macchina, viene inviata un’email con tutte le informazioni associate e l’indirizzo IP che permette di individuarla facilmente nell’interfaccia vSphere.

Il servizio [High Availability (HA)](../vmware-ha-high-availability) di VMware è abilitato di default sul cluster. Nel caso in cui sia stato lasciato attivo, le macchine virtuali si riavvieranno automaticamente. Se il servizio DRS (Distributed Ressources Scheduler) è attivo e configurato in modalità “fully automated”, anche la distribuzione del carico sugli host del cluster verrà eseguita in modo automatico.

> [!warning]
> 
> Se un lettore CD/DVD risulta ancora montato o connesso su una VM, il servizio HA non potrà riavviarlo sull’host sostitutivo. Consigliamo quindi di assicurarsi che il lettore sia sempre una periferica a livello client.
>

## Cosa fare dopo aver ricevuto lo spare host

Una volta che l’host originale è nuovamente operativo, è possibile restituire uno degli host (la macchina sostitutiva o quella originale).

Consigliamo di rendere il server originale, per permetterci di eseguire una serie di test in seguito all’incidente ed evitare eventuali malfunzionamenti futuri. In questo caso è possibile quindi conservare l’host sostitutivo. Per eseguire questa operazione, consulta la guida sulla [rimozione di un server host](../rimuovere-server-host/): una volta eliminato l’host originale, OVHcloud potrà recuperarlo automaticamente.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
