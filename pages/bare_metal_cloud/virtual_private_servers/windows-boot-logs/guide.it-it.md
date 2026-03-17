---
title: "VPS - Attivare i log di avvio Windows"
excerpt: "Scopri come attivare i log di avvio Windows per facilitare la diagnostica e la risoluzione dei problemi di avvio del tuo VPS"
updated: 2026-01-21
---

## Obiettivo

I log di avvio Windows permettono di identificare i driver e i servizi caricati durante l'avvio del sistema.  
Sono particolarmente utili per la **diagnosi dei problemi di avvio**, degli **schermi blu** o dei **bloccaggi del sistema**.

**Questo manuale ti spiega come attivare i log di avvio su un server Windows per facilitare l'analisi e la risoluzione dei problemi del tuo VPS.**

## Prerequisiti

- Disporre di un'offerta [VPS](/links/bare-metal/vps) attiva nel tuo Spazio Cliente OVHcloud.

## Procedura

### Attivazione dei log di avvio Windows

I log di avvio di Windows possono essere utili per la diagnostica degli errori del server.

Per attivarli, segui le seguenti fasi scorrendo le schede:

> [!tabs]
> 1. **Connettersi al server**
>>
>> Connetti il tuo server tramite desktop remoto o una [sessione KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).
>>
> 2. **Aprire l'utilità "Esegui"**
>>
>> Apri il menu `Start` di Windows e clicca su `Esegui`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}
>>
> 3. **Aprire `msconfig`**
>>
>> Digita `msconfig` e clicca su `OK`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}
>>
> 4. **Attivare i log**
>>
>> Nella nuova finestra, attiva l'opzione log accanto a `Boot log`. Clicca quindi su `OK`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}
>>

Al prossimo avvio del tuo server, i log saranno registrati in un file `.txt`. Il percorso del file è: `C:\Windows\ntbtlog.txt`.

Per accedere al file di log in modalità rescue, segui le istruzioni del manuale "[Attivare e utilizzare la modalità rescue su un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)".

## Per saperne di più

[Cambiare la password amministratore su un server Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introduzione al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Proteggere un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Come recuperare l'accesso al server in caso di perdita della password dell'utente](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Contatta la nostra [Community di utenti](/links/community).