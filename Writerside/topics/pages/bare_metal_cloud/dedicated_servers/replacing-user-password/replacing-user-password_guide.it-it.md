---
title: "Come recuperare l'accesso al server in caso di perdita della password dell'utente"
excerpt: "Scopri come configurare una nuova password per un account utente su un sistema operativo GNU/Linux in modalità Rescue OVHcloud"
updated: 2024-02-19
---


> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Senza un’altra modalità di autenticazione o un altro account utente, la perdita della password significa che non è più possibile connettersi al server in modo normale.

In questo caso, è possibile accedere al server tramite la modalità Rescue di OVHcloud, che permette di utilizzare una password provvisoria e modificare i file.

**Questa guida ti mostra come reimpostare la password dell’account utente nel caso in cui non si disponga più dell’accesso al server.**

> [!primary]
>
> Per recuperare l'accesso a un server al quale ti connetti con una chiave SSH, consulta la nostra guida "[Come sostituire una coppia di chiavi SSH](replacing-lost-ssh-key1.)".
>

## Prerequisiti

- Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/) o di un [VPS](https://www.ovhcloud.com/it/vps/) nel proprio account OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

> [!primary]
> Questa guida non si applica alle installazioni di **Windows** Server. Consulta le nostre guide "[Come cambiare la password amministratore su un server dedicato Windows](changing-admin-password-on-windows1.)" e "[Come cambiare la password amministratore su un VPS Windows](resetting_a_windows_password1.)".
>

## Procedura

Non dimenticare di consultare anche le nostre guide di primo passo:

- Per un [server dedicato](getting-started-with-dedicated-server1.)
- Per un [server dedicato della gamma **Eco**](getting-started-with-dedicated-server-eco1.)
- Per un [VPS](starting_with_a_vps1.)

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi relativamente all’amministrazione, all’utilizzo o all’implementazione dei servizi di un server, ti consigliamo di contattare un [provider specializzato](https://partner.ovhcloud.com/it/directory/) o [la nostra Community](https://community.ovh.com/en/).
>

<a name="step1"></a>

### Step 1: riavvia il server in modalità Rescue

Segui gli step delle nostre guide in modalità Rescue per connetterti al tuo server e montare le tue partizioni:

- [Utilizzare il Rescue mode su un server dedicato](rescue_mode1.)
- [Utilizzare il Rescue mode su un VPS](rescue1.)

Per continuare, è necessario montare la partizione di sistema e disporre dell'accesso in scrittura al file system.

Ciò significa che è stata immessa una versione del comando seguente nella shell della modalità Rescue:

```bash
chroot path/to/partition/mountpoint/
```

Il comando esatto dipende dal punto di montaggio utilizzato. Ad esempio, se la partizione è stata montata su `/mnt`, il comando sarà il seguente:

```bash
chroot /mnt/
```

### Step 2: reimposta la password dell'utente

Nota: in una distribuzione GNU/Linux, **il prompt della password non visualizza le voci della tastiera**.

Modifica la password dell’utente con questo comando (sostituisci `username` con il nome reale dell’account utente):

```bash
passwd username
```

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Utilizza la modalità di avvio **normal** del tuo server quando lo riavvii dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

Se necessario, consulta la [guida del Rescue mode](#step1.).

A questo punto, sarà possibile accedere al server con la nuova password.


## Per saperne di più

[Creare e utilizzare chiavi SSH](creating-ssh-keys-dedicated1.)

[Modalità Rescue per un server dedicato](rescue_mode1.)

[Modalità Rescue per un VPS](rescue1.)

[Configurazione degli account utente e dell'accesso root su un server](changing_root_password_linux_ds1.)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.