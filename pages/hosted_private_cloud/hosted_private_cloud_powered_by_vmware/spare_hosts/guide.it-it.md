---
title: Host sostitutivo
excerpt: Come avviene la sostituzione di un host malfunzionante
updated: 2026-05-12
---

## Obiettivo

In caso di irraggiungibilità di un server host, OVHcloud ne garantisce la sostituzione a livello contrattuale.

**Questa guida ti mostra come funziona la procedura di sostituzione di una macchina malfunzionante.**

## Prerequisiti

- Disporre di una soluzione [Hosted Private Cloud](/links/hosted-private-cloud/vmware).

## Procedura

### Consegna dello spare host

Per garantire la continuità di servizio anche in caso di malfunzionamento di uno degli host, OVHcloud mette automaticamente a disposizione nell’infrastruttura un host sostitutivo gratuito.

Al momento della consegna di questa macchina, viene inviata un’email con tutte le informazioni associate e l’indirizzo IP che permette di individuarla facilmente nell’interfaccia vSphere.

Il servizio [HA (High Availability)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_ha_high_availability) di VMware è abilitato di default sul cluster. Nel caso in cui sia stato lasciato attivo, le macchine virtuali si riavvieranno automaticamente. Se il servizio [DRS (Distributed Resource Scheduler)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_drs_distributed_ressource_scheduler_new) è attivo e configurato in modalità "Completamente automatizzata", anche la distribuzione del carico sugli host del cluster verrà eseguita in modo automatico.

> [!warning]
> 
> Se un lettore CD/DVD risulta ancora montato o connesso su una VM, il servizio HA non potrà riavviarlo sull’host sostitutivo. Consigliamo quindi di assicurarsi che il lettore sia sempre una periferica a livello client.
>

### Cosa fare dopo aver ricevuto lo spare host

Consigliamo di rendere il server originale, per permetterci di eseguire una serie di test in seguito all’incidente ed evitare eventuali malfunzionamenti futuri. In questo caso è possibile quindi conservare l’host sostitutivo. Per eseguire questa operazione, consulta la guida sulla [rimozione di un server host](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/delete_host).

> [!warning]
> 
> In caso di mancata restituzione di uno dei due host (originale o spare) entro un termine di 7 giorni, lo spare host sarà fatturato a ore a partire dall’8° giorno.
>

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).
