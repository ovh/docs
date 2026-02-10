---
title: 'Verifica della versione del firmware BMC su un server dedicato'
excerpt: "Scopri come verificare la versione del firmware BMC su un server dedicato."
updated: 2026-02-11
---

## Obiettivo

Gli aggiornamenti regolari del firmware svolgono un ruolo fondamentale nel mantenere le prestazioni, la stabilità e la sicurezza dei vostri dischi. Questi aggiornamenti includono spesso correzioni di bug critici, una maggiore compatibilità e funzionalità di sicurezza avanzate indispensabili per preservare l'integrità dei vostri dati e mantenere un'efficienza operativa ottimale.

**Questo manuale illustra le fasi necessarie per verificare la versione del firmware BMC su un server dedicato.**

## Prerequisiti

- Un [server dedicato](/links/bare-metal/bare-metal) nel vostro account OVHcloud.
- Diritti di amministratore (sudo).
- Connessione Internet (solo se lo strumento `ipmitool` non è già installato).

### Su un Server Linux

In primo luogo, è necessario installare lo strumento `ipmitool`. Questo strumento consente di interrogare il BMC tramite l'interfaccia IPMI. Ecco la documentazione ufficiale: <https://linux.die.net/man/1/ipmitool>

A seconda della distribuzione Linux, il comando può variare:

> [!tabs]
> **Debian/Ubuntu**
>>
>> ```sh
>> sudo apt update
>> sudo apt install ipmitool -y
>> ```
>>
> **RHEL/CentOS/AlmaLinux/Rocky Linux**
>>
>> ```sh
>> sudo dnf install epel-release -y
>> sudo dnf install ipmitool -y
>> ```
>> 

Verificare la versione del firmware BMC con il seguente comando:

```sh
sudo ipmitool mc info
```

![bmc](images/ipmi_tool.png){.thumbnail} 

Se la versione del firmware è inferiore a 1.14, contattate il nostro supporto creando un [ticket di assistenza dal centro di aiuto OVHcloud](/links/support-contact) per richiedere un aggiornamento del firmware. Tuttavia, se la versione è superiore a 1.14, non è necessaria alcuna azione.

### Su un Server Windows

Attualmente, non possiamo fornire la procedura per i server che utilizzano il sistema operativo Windows. Vi consigliamo di riavviare il vostro server Windows nel nostro ambiente [modalità rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) per verificare la versione. Il comando funziona anche in modalità rescue.

### Su un Server in modalità rescue

Dopo aver riavviato il vostro server in [modalità rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), installate lo strumento `ipmitool`.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # apt install ipmitool -y
```

Successivamente, verificate la versione del firmware:

```sh
ipmitool mc info
```

![bmc](images/ipmi_tool_rescue.png){.thumbnail}

Se la versione del firmware è inferiore a 1.14, contattate il nostro supporto creando un [ticket di assistenza dal centro di aiuto OVHcloud](/links/support-contact) per richiedere un aggiornamento del firmware. Tuttavia, se la versione è superiore a 1.14, non è necessaria alcuna azione.

## Per saperne di più

Per prestazioni specializzate (posizionamento, sviluppo, ecc.), contattate i [partner OVHcloud](/links/partner).

Se desiderate ricevere un supporto nell'utilizzo e nella configurazione delle vostre soluzioni OVHcloud, vi proponiamo di consultare le nostre diverse [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).