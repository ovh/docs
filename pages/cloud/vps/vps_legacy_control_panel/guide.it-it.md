---
title: Gestire un VPS legacy
excerpt: Come amministrare un VPS di una gamma precedente dallo Spazio Cliente OVHcloud
updated: 2023-06-29
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il nome visualizzato nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) permette di stabilire se un VPS appartiene a una gamma meno recente. Se invece la referenza interna è in formato *vpsXXXX.ovh.net* (dove *X* rappresenta una cifra) e non è stato effettuato il trasferimento del VPS corrispondente alla [nostra gamma attuale di prodotti](https://www.ovhcloud.com/it/vps/), si tratta di un VPS *legacy*. 

Il riferimento di un VPS della gamma attuale si presenta in questo modo: *vps-XXXXXXX.vps.ovh.net* (dove *X* può essere una cifra o una lettera).

Un VPS *legacy* implica alcune differenze in termini di gestione.

**Questa guida ti mostra nel dettaglio le funzionalità dello Spazio Cliente OVHcloud dedicate alla gestione di un VPS *legacy*.**

## Prerequisiti

- Un [VPS *legacy*](https://www.ovhcloud.com/it/vps/) nel tuo account OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca sulla scheda `Bare Metal Cloud`{.action} e seleziona il tuo server tra i `Server Privati Virtuali`{.action}.

Nella scheda `Home`{.action} è possibile accedere alle operazioni principali del VPS dalla sezione **Scelta rapida**.

![controlpanel](images/legacy_vps_1.png){.thumbnail}

### Elimina il tuo VPS

Questa opzione aprirà una finestra pop-up per avviare il processo di [disattivazione del servizio](/pages/account/billing/how_to_cancel_services).

### Riavvia in modalità Rescue

Clicca su questa opzione per riavviare il VPS in modalità Rescue. Trovi tutti i dettagli nella [nostra guida](/pages/cloud/vps/rescue).

### Riavvia il tuo VPS

Se clicca su `Conferma`{.action} nella nuova finestra, questa opzione dello Spazio Cliente eseguirà un *hard reboot* del tuo VPS.

Per applicare gli aggiornamenti della configurazione o risolvere un problema, potrebbe essere necessario riavviare il sistema. Se possibile, esegui un *soft reboot* da riga di comando:

```bash
sudo reboot
```

### Reinstalla il tuo VPS

Fare clic su questa opzione per installare un nuovo sistema operativo. Nella nuova finestra, ti verrà chiesto di scegliere:

- un sistema operativo tra quelli proposti;
- la lingua;
- una [chiave SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated) (facoltativo)

La scelta dei sistemi operativi può essere limitata sul tuo servizio.

> [!primary]
>
> Alcuni sistemi operativi proprietari o alcune piattaforme come Plesk o cPanel richiedono licenze che generano spese supplementari. Le licenze possono essere gestite dallo Spazio Cliente: accedi alla sezione `Bare Metal Cloud`{.action} e apri il menu `Licenze`{.action}.

Una volta completata l’installazione, riceverai un’email. Questo processo può richiedere fino a 30 minuti.

#### Accedi al tuo VPS dopo la reinstallazione

Durante la reinstallazione del VPS, riceverai un’email con la password di root per accedere al tuo VPS in [SSH](/pages/cloud/dedicated/ssh_introduction), a meno che tu non abbia selezionato una [chiave SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated) da preinstallare.

#### Disattivazione dell'accesso al server per l'utente root

L’utente "**root**" è creato di default sui sistemi GNU/Linux. Si tratta del livello di accesso più elevato a un sistema operativo. Rendere accessibile il VPS tramite l’utente root e la sua password può essere pericoloso, in quanto questo account potrebbe effettuare operazioni irreversibilmente dannose.

Le connessioni utente root possono essere disattivate tramite il protocollo SSH. Prima di eseguire le operazioni seguenti, è consigliabile [creare un altro utente](/pages/cloud/vps/secure_your_vps#createuser).

Utilizza un editor di testo come *vim* o *nano* per modificare questo file di configurazione:

```bash
sudo nano /etc/ssh/sshd_config
```

Individuare la riga seguente:

```console
PermitRootLogin yes 
```

Sostituire **yes** con **no** dopo `PermitRootLogin`. Salvare e chiudere l'editor.

Per rendere effettiva questa modifica, riavvia il servizio SSH con uno dei seguenti comandi:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Questo dovrebbe essere sufficiente per applicare le modifiche. In caso contrario, riavvia il VPS (`~$ sudo reboot`).

In seguito, le connessioni al tuo server tramite l'utente root (`ssh root@IPv4_VPS`) saranno rifiutate.

### KVM

Utilizza questa opzione per accedere al tuo VPS via KVM. Trovi tutti i dettagli nella [nostra guida](/pages/cloud/vps/using_kvm_for_vps).

### Cambia il proprietario

Questo link ti indirizza al form da compilare in caso di cambio di proprietario di un VPS. Se hai bisogno di assistenza per effettuare questa procedura, contatta il nostro supporto creando un ticket nel tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

### Passa alla nuova gamma

Il VPS può essere migrato automaticamente verso la gamma attuale. Scopri i vantaggi di questa offerta nelle [nostre FAQ dedicate alla migrazione dei VPS](https://www.ovhcloud.com/it/vps/vps-offer-migration/).

## Per saperne di più

[Introduzione a SSH](/pages/cloud/dedicated/ssh_introduction)

[Creazione e utilizzo di chiavi SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated)

[Mettere in sicurezza un VPS](/pages/cloud/vps/secure_your_vps)

[Configurare una nuova installazione di Windows Server](/pages/cloud/vps/windows_first_config)

[Iniziare a utilizzare un VPS](/pages/cloud/vps/starting_with_a_vps)

Unisciti alla nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.
