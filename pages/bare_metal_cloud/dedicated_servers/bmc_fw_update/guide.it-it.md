---
title: "Verificare la versione del firmware BMC su un server dedicato Linux"
excerpt: "Verifica la versione del firmware BMC sul tuo server dedicato OVHcloud per garantire la compatibilità della gestione hardware."
updated: 2026-02-25
---

## Obiettivo

Un BMC (Baseboard Management Controller) è responsabile della gestione remota e del controllo di basso livello dell'hardware del server. Una versione obsoleta può avere un impatto diretto sulla sicurezza, la stabilità e la facilità di gestione del server. È necessario mantenere aggiornato il firmware del controller BMC per correggere le falle di sicurezza, mantenere la stabilità del sistema e soddisfare i requisiti di conformità.

**Questo manuale illustra le fasi necessarie per verificare la versione del firmware BMC su un server dedicato.**

## Prerequisiti

- Un [server dedicato](/links/bare-metal/bare-metal) nel vostro account OVHcloud.
- Diritti di amministratore (sudo).
- Il tuo server dedicato deve essere connesso a Internet (solo se lo strumento `ipmitool` non è già installato).

> [!primary]
> A causa della configurazione specifica dei nostri servizi, l'aggiornamento del BMC viene effettuato esclusivamente tramite l'automazione OVHcloud, sotto la supervisione dei nostri tecnici. Nessun pacchetto né meccanismo di aggiornamento autonomo è disponibile.
>

### Su un Server Linux

In primo luogo, è necessario installare lo strumento `ipmitool`. Questo strumento consente di interrogare il BMC tramite l'interfaccia IPMI. Per ulteriori informazioni, consulta la documentazione ufficiale: <https://linux.die.net/man/1/ipmitool>.

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

- Se la versione del firmware è inferiore o uguale a 1.14, contattate il nostro supporto creando un [ticket di assistenza dal centro di aiuto OVHcloud](/links/support-contact) per richiedere un aggiornamento del firmware. 
- Se la versione è superiore alla 1.14, non è richiesta alcuna azione.

### Su un Server Windows

Attualmente, non possiamo fornire la procedura per i server che utilizzano il sistema operativo Windows. Vi consigliamo di riavviare il vostro server Windows nel nostro ambiente [modalità rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) per verificare la versione seguendo le istruzioni riportate di seguito.

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

- Se la versione del firmware è inferiore o uguale a 1.14, contattate il nostro supporto creando un [ticket di assistenza dal centro di aiuto OVHcloud](/links/support-contact) per richiedere un aggiornamento del firmware. 
- Se la versione è superiore alla 1.14, non è richiesta alcuna azione.

## Per saperne di più

Per prestazioni specializzate (posizionamento, sviluppo, ecc.), contattate i [partner OVHcloud](/links/partner).

Se desiderate ricevere un supporto nell'utilizzo e nella configurazione delle vostre soluzioni OVHcloud, vi proponiamo di consultare le nostre diverse [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).