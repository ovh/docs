---
title: Accedere all’interfaccia di gestione NSX
slug: accedere-all-interfaccia-di-gestione-nsx
excerpt: Come utilizzare l’interfaccia di NSX
section: NSX
order: 01
---

**Ultimo aggiornamento: 29/06/2020**

## Obiettivo

NSX è una soluzione Software Defined Network (SDN) sviluppata da VMware che si attiva dal vCenter e viene gestita direttamente dall’interfaccia vSphere. Questa funzionalità permette di configurare le regole di accesso alle reti, creare politiche di sicurezza e implementare rapidamente i servizi di rete necessari per costruire l’infrastruttura.

**Questa guida fornisce una breve presentazione dell’interfaccia.**

## Prerequisiti

- Disporre di un account con diritti specifici per NSX
- Avere accesso all’[interfaccia vSphere](../connessione-interfaccia-vsphere/)

## Procedura

Il servizio VMWare NSX è disponibile esclusivamente dall’interfaccia di vSphere.

Nella homepage del client, clicca su `Networking & Security`{.action} nel menu a sinistra:

![Networking and Security](images/nsx01.png){.thumbnail}

Sarà possibile accedere alla homepage NSX e ai relativi menu.


> [!primary]
>
> Per accedere all’API NSX è necessario utilizzare https://nsx.pcc-x-x-x-x.ovh.com/api
>
> Ad esempio, per recuperare la configurazione del firewall: 
>
> ```
> curl -u "admin:xxxx" -XGET "https://nsx.pcc-x-x-x-x.ovh.com/api/4.0/firewall/globalroot-0/defaultconfig"
> ```
>
> Per motivi di sicurezza, /api/1.0/ non è supportato.
> 


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
