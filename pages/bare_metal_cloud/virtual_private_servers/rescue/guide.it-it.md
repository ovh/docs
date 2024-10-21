---
title: Attivare e utilizzare il Rescue mode su un VPS
excerpt: Scopri come utilizzare il Rescue mode OVHcloud per risolvere i problemi del VPS ed effettuare verifiche di sistema
updated: 2024-02-19
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La modalità di ripristino (*rescue*) è uno strumento fornito da OVHcloud per avviare il tuo VPS in un sistema operativo temporaneo. È quindi possibile accedere al sistema per eseguire attività di diagnostica e risolvere diversi problemi, ad esempio:

- [Reimposta la password dell'utente per recuperare l'accesso](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)
- Diagnosi di problemi di rete
- Riparare un sistema operativo difettoso
- Riparare un firewall software mal configurato
- Test delle prestazioni del disco

In caso di problemi al sistema, eseguire controlli in Rescue mode permette di determinare se è associato a software installato sul VPS o se c’è una causa più profonda. Prima di contattare i nostri team di supporto, ti consigliamo di utilizzare il Rescue mode per raccogliere i risultati dei test ed escludere eventuali errori software.

> [!warning]
>
> Se alcuni dei tuoi servizi sono ancora online, la modalità Rescue li interrompe al momento del riavvio del server nell'ambiente di backup ausiliario.
>

**Questa guida ti mostra come attivare il Rescue mode dallo Spazio Cliente OVHcloud e come utilizzarlo per accedere al tuo file system VPS.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Disporre di un [VPS OVHcloud](https://www.ovhcloud.com/it/vps/) già configurato

> [!warning]
> OVHcloud fornisce servizi la cui configurazione e gestione sono di vostra responsabilità. È quindi vostra responsabilità assicurarvi che funzionino correttamente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi relativamente all’amministrazione, all’utilizzo o all’implementazione dei servizi di un server, ti consigliamo di contattare un [provider di servizi specializzato](https://partner.ovhcloud.com/it/directory/) o [la nostra Community](https://community.ovh.com/en/).
>

## Procedura

### Attivazione della modalità Rescue

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/it/&ovhSubsidiary=it), clicca sulla sezione `Bare Metal Cloud`{.action} e seleziona il tuo server nella sezione `Server privati virtuali`{.action}.

Nella scheda `Home`{.action}, clicca su `...`{.action} accanto a "Boot" nella casella **Il tuo VPS**.

![configurazione della modalità rescue](images/rescue_new.png){.thumbnail}

Seleziona `Riavvia in modalità Rescue`{.action} nel menu.

Se il tuo Spazio Cliente è differente, consulta la nostra guida "[Gestire un VPS legacy](/pages/bare_metal_cloud/virtual_private_servers/vps_legacy_control_panel)".

### Utilizzo della modalità Rescue

Una volta avviato il riavvio, comparirà un indicatore di stato che indica la durata dell’operazione. Ti ricordiamo che l’operazione potrebbe richiedere alcuni minuti.

> [!primary]
>
> Riceverai un’email automatica con le credenziali SSH per accedere in Rescue mode. Attendi la ricezione dell'email prima di proseguire con qualsiasi operazione. Questa email è disponibile anche nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Per recuperarlo, clicca sul nome associato al tuo identificativo OVHcloud nella barra dei menu situata nell’angolo in alto a destra e seleziona `Email di servizio`{.action}.
>

In seguito, dovrai [accedere al tuo server via SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction), utilizzando la password temporanea generata per la modalità rescue.

Esempio:

```bash
ssh root@vps-x11x11xyy.vps.ovh.net
```

```console
root@vps-x11x11xyy.vps.ovh.net's password:
```

> [!warning]
>
> Il tuo client SSH bloccherà probabilmente la connessione in un primo momento a causa di un'incompatibilità dell'impronta ECDSA. Questo è normale perché la modalità Rescue utilizza il proprio server SSH temporaneo.
>
> Un modo per ovviare a questo problema è "commentare" l’impronta del tuo VPS aggiungendo un `#` davanti alla sua riga nel file `known_hosts`. Ricordarsi di annullare la modifica prima di ripristinare il netboot in modalità "normale".<br>È inoltre possibile eliminare la riga dal file. Una volta stabilita nuovamente la connessione, il client SSH aggiungerà una nuova voce per il VPS. Per maggiori informazioni, consulta la nostra guida "[Introduzione a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction#login)".
>

Per effettuare la maggior parte delle modifiche sul tuo server in modalità Rescue via SSH, è necessario montare la partizione di sistema.

Una volta effettuato l’accesso, controlla i dischi associati utilizzando questo comando:

```bash
lsblk
```

Il risultato sarà simile all'output di esempio seguente:

```console
NAME    MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda       8:0    0   2.9G  0 disk
└─sda1    8:1    0   2.9G  0 part /
sdb       8:16   0   160G  0 disk
├─sdb1    8:17   0 159.9G  0 part
├─sdb14   8:30   0     4M  0 part
└─sdb15   8:31   0   106M  0 part
```

In modalità Rescue, `sda` è il disco in modalità Rescue e `sda1` è la partizione di soccorso principale montata su `/`.

In questo esempio, il disco principale del VPS è `sdb` e la partizione di sistema è `sdb1` (indicata dalla dimensione).

Monta questa partizione con questo comando:

```bash
mount /dev/sdb1 /mnt/
```

A questo punto i tuoi file sono accessibili dal punto di mount `/mnt`:


```bash
cd /mnt
```

```bash
ls
```

In questo caso, è necessario visualizzare il file system:

```console
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  lost+found  media  mnt  opt  proc  root  run  sbin  snap  srv  sys  tmp  usr  var
```

Tuttavia, prima di poter modificare questa partizione, è necessario aprirla per l'accesso in scrittura, operazione che può essere eseguita con il comando:

```bash
chroot /mnt
```

A questo punto è possibile apportare modifiche al sistema, ad esempio [reimpostare le password utente e le chiavi SSH](#gofurther).

Una volta terminata l’operazione, riavvia il VPS in modalità normale dallo Spazio Cliente.

![rescue mode control panel](images/rescue_exit.png){.thumbnail}

### Risolvi i problemi di avvio

In caso di errore durante il riavvio di un VPS, segui questi step:

- Consulta il KVM nel tuo Spazio Cliente per ottenere informazioni utili sulle ragioni per cui il VPS non può essere avviato. Per maggiori informazioni su questa funzionalità, consulta la nostra [guida KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).
- Se il KVM indica che il VPS è bloccato all'avvio o che non riesce a trovare il disco, assicurati che [i log di avvio sono attivati](/pages/bare_metal_cloud/virtual_private_servers/bootlog_display_kvm). Per ulteriori indagini, invia i log rilevanti al nostro team di supporto [crea una richiesta di assistenza](https://help.ovhcloud.com/csm?id=csm_get_help).

<a name="gofurther"></a>

## Per saperne di più

[Introduzione a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Recupera l'accesso al server in caso di perdita della password utente](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

[Sostituire una coppia di chiavi SSH](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)

[Controllare il file system su un VPS](/pages/bare_metal_cloud/virtual_private_servers/check-filesystem)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
