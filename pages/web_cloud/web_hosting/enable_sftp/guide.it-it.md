---
title: "Web Hosting - Come attivare l'accesso SFTP"
excerpt: "Questa guida ti mostra come attivare l'accesso SFTP sul tuo web hosting OVHcloud"
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

**Questa guida ti mostra come attivare l'accesso SFTP sul tuo web hosting OVHcloud.**

## Prerequisiti

- Disporre di un'offerta di [web hosting OVHcloud](/links/web/hosting).
<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting plans](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

### Attivare l'accesso SFTP per un utente FTP del tuo web hosting

**Clicca su una delle due righe qui sotto in base alla tua offerta di web hosting per visualizzare le spiegazioni.**

/// details | Attivare l'SFTP su un piano di web hosting **gratuito 100M**, **Starter** o **Personale**

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting plans](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `FTP - SSH`{.action}.
>>
>> ![FTP -SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella tabella in fondo alla pagina, seleziona la casella presente nella colonna **SFTP** dell'utente FTP interessato. La pagina si aggiorna automaticamente.
>>
>> ![FTP - SSH Perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-perso.png){.thumbnail}
>>
>> Una volta attivata l'opzione **SFTP**, potrai utilizzare il protocollo SFTP del tuo web hosting con l'utente FTP interessato.
>>

///

/// details | Attivare l'SFTP su un piano di web hosting **Pro** o **Performance**

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting plans](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `FTP - SSH`{.action}.
>>
>> ![FTP -SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella tabella in fondo alla pagina, controlla lo stato presente nella colonna **SFTP** dell'utente FTP interessato :
>>
>> - **Attivato** : il protocollo SFTP è già attivo per questo utente.
>> - **Disattivato** : clicca sul pulsante `...`{.action} a destra della riga interessata, quindi su `Modificare`{.action}.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/sftp-enabled-pro.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Nella finestra che si apre, nella sezione **Protocolli di connessione**, seleziona `FTP e SFTP`{.action} o `FTP, SFTP e SSH`{.action} se devi attivare anche il protocollo SSH.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-user-step-1-connexion-protocols.png){.thumbnail}
>>
>> Clicca quindi su `Continua`{.action}, quindi su `Conferma`{.action} per completare l'attivazione dell'SFTP per l'utente interessato.

///

### Connessione in SFTP al tuo web hosting

Per farlo, consulta la nostra guida « [Accedi allo spazio di storage FTP del tuo hosting Web](/pages/web_cloud/web_hosting/ftp_connection) ».

## Per saperne di più

[Modificare la password di un utente FTP](/pages/web_cloud/web_hosting/ftp_change_password).

[Utilizza una connessione SSH su un hosting Web](/pages/web_cloud/web_hosting/ssh_on_webhosting).

[Utilizza PuTTY per connetterti in SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Utilizza FileZilla con il tuo hosting Web](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilizza Cyberduck con il tuo hosting Web](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).