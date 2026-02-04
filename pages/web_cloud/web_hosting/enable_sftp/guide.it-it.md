---
title: "Web Hosting - Come attivare l'accesso SFTP"
excerpt: "Scopri come attivare l'accesso SFTP sul tuo web hosting OVHcloud"
updated: 2026-02-04
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Obiettivo

Le offerte di web hosting OVHcloud danno accesso a uno spazio di archiviazione che permette di pubblicare i file del tuo sito web o delle tue applicazioni. L'accesso a questo spazio è possibile tramite un utente FTP o SSH con i rispettivi password associati.

Proprio come il **F**ile **T**ransfer **P**rotocol (**FTP**), il **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**) permette di trasferire dati dal tuo dispositivo verso lo spazio di archiviazione del tuo web hosting.

L'unica differenza è che l'SFTP utilizza un canale sicuro per scambiare dati. I dati che transitano tramite questo protocollo vengono automaticamente crittografati.

**Scopri come attivare l'accesso SFTP sul tuo web hosting OVHcloud.**

## Prerequisiti

- Disporre di un'offerta di [web hosting OVHcloud](/links/web/hosting).
- Essere connesso al tuo [Spazio Cliente OVHcloud](/links/manager), parte `Web Cloud`{.action}.

## Procedura

### Attivare l'accesso SFTP per un utente FTP del tuo web hosting

**Clicca su una delle due righe qui sotto in base alla tua offerta di web hosting per visualizzare le spiegazioni.**

/// details | Attivare l'SFTP su un piano di web hosting **gratuito 100M**, **Starter** o **Perso**

Clicca sui tab qui sotto per visualizzare una alla volta ciascuna delle **4** fasi.

> [!tabs]
> **Fase 1**
>>
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), quindi vai alla sezione `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Fase 2**
>>
>> Clicca sul menu `Hébergements`{.action}, quindi seleziona il web hosting interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Fase 3**
>>
>> Nella pagina che si apre, clicca sull'etichetta `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Fase 4**
>>
>> Nella tabella in fondo alla pagina, seleziona la casella presente nella colonna **SFTP** dell'utente FTP interessato. La pagina si aggiorna automaticamente.
>>
>> ![FTP - SSH Perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-perso.png){.thumbnail}
>>
>> Una volta attivata l'opzione **SFTP**, potrai utilizzare il protocollo SFTP del tuo web hosting con l'utente FTP interessato.
>>

///

/// details | Attivare l'SFTP su un piano di web hosting **Pro** o **Performance**

Clicca sui tab qui sotto per visualizzare una alla volta ciascuna delle **5** fasi.

> [!tabs]
> **Fase 1**
>>
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), quindi vai alla sezione `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Fase 2**
>>
>> Clicca sul menu `Hébergements`{.action}, quindi seleziona il web hosting interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Fase 3**
>>
>> Nella pagina che si apre, clicca sull'etichetta `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Fase 4**
>>
>> Nella tabella in fondo alla pagina, controlla lo stato presente nella colonna **SFTP** dell'utente FTP interessato :
>>
>> - **Attivo** : il protocollo SFTP è già attivo per questo utente.
>> - **Disattivo** : clicca sul pulsante `...`{.action} a destra della riga interessata, quindi su `Modifica`{.action}.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/sftp-enabled-pro.png){.thumbnail}
>>
> **Fase 5**
>>
>> Nella finestra che si apre, nella sezione **Protocoles de connexion**, seleziona `FTP e SFTP`{.action} o `FTP, SFTP e SSH`{.action} se devi attivare anche il protocollo SSH.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-user-step-1-connexion-protocols.png){.thumbnail}
>>
>> Clicca quindi su `Suivant`{.action}, quindi su `Valider`{.action} per completare l'attivazione dell'SFTP per l'utente interessato.

///

### Connessione in SFTP al tuo web hosting

Per farlo, consulta la nostra guida « [Connessione all'area di archiviazione FTP del tuo web hosting](/pages/web_cloud/web_hosting/ftp_connection) ».

## Per saperne di più

[Modificare la password di un utente FTP](/pages/web_cloud/web_hosting/ftp_change_password)

[Utilizzare una connessione SSH su un web hosting](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Utilizzare PuTTY per connettersi in SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Utilizzare FileZilla con il tuo web hosting](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilizzare Cyberduck con il tuo web hosting](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

Per prestazioni specializzate (posizionamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Se desideri ricevere un supporto sull'utilizzo e la configurazione delle tue soluzioni OVHcloud, ti invitiamo a consultare le nostre diverse [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).