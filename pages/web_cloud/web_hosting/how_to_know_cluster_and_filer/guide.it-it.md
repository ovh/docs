---
title: "Hosting Web - Come conoscere cluster e filer"
excerpt: "Questa guida ti mostra come trovare il numero del cluster e/o il numero del filer in cui si trova il tuo hosting Web"
updated: 2025-05-21
---

## Obiettivo

Gli hosting Web funzionano su un'infrastruttura condivisa chiamata *cluster*. OVHcloud dispone di diversi cluster sui quali sono ripartiti diversi hosting Web.
Per motivi di efficienza e sicurezza, ogni cluster è anche suddiviso virtualmente in diversi segmenti chiamati *filers*. I filer contengono essi stessi diversi hosting Web.
Durante l’utilizzo dell’hosting Web, potrebbe essere necessario conoscere il numero del cluster e/o del filer in cui si trova l’hosting.

**Questa guida ti mostra come recuperare il numero di cluster e il numero del filer in cui si trova il tuo hosting Web.**

## Prerequisiti

- Disporre di un piano di [hosting Web](/links/web/hosting) attivo.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).

## Procedura

### Ritrova il numero del cluster di un hosting Web

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella nuova pagina clicca sulla scheda `FTP - SSH`{.action}. 
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ftp-ssh.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Nella nuova pagina, recupera il numero di cluster dell’hosting Web su questa pagina come **Server FTP e SFTP** (3 cifre comprese tra `0` e `9`).
>>
>> ![FTP-SSH - numero del cluster](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/find-cluster-ftp-ssh.png){.thumbnail}

### Ritrova il numero del filer di un hosting Web

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel riquadro **Informazioni generali** della pagina che appare, recupera il numero del filer sotto la dicitura `Filer`{.action}.
>>
>> ![Numero del filer](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/filer.png){.thumbnail}

## Per saperne di più

[Hosting Web - Lista degli indirizzi IP per cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).