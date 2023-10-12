---
title: Modificare la password amministratore su un server Windows
excerpt: "Questa guida ti mostra come ripristinare la password di un account Windows Administrator su un VPS o un’istanza Public Cloud in Rescue mode"
updated: 2023-10-12
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Durante l'installazione o la reinstallazione di un sistema operativo Windows Server, viene fornita una password amministratore (account *Administrator*).

In caso di perdita della password amministratore, è possibile ripristinarla tramite la modalità Rescue di OVHcloud.

**Questa guida ti mostra come ripristinare la password dell’account amministratore di un sistema operativo Windows Server in modalità Rescue OVHcloud.**

## Prerequisiti

- Disporre di un [VPS](https://www.ovhcloud.com/it/vps/) o di un’[istanza Public Cloud](https://www.ovhcloud.com/it/public-cloud/) OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Step 1: riavvia il server in modalità Rescue

Per modificare la password amministratore è necessario attivare la modalità Rescue.

Per riavviare il servizio in modalità Rescue, consulta la guida:

- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Instance Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

### Step 2: esegui il mount della partizione di sistema

Accedi al tuo server in SSH. (se necessario, consulta la nostra [guida introduttiva SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).)

È inoltre possibile aprire una connessione al server utilizzando [KVM (VPS)](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps) o la [console VNC (istanza Public Cloud)](/pages/public_cloud/compute/first_steps_with_public_cloud_instance#accessvnc).

Per eseguire il mount del file system di Windows, digitare i comandi seguenti:

```bash
ntfsfix /dev/sdb2
```

```bash
mount -t ntfs-3g /dev/sdb2 /mnt
```

### Step 3: cancella la password corrente

In questo passaggio, il file *SAM* viene modificato con uno strumento in modalità Rescue. Elenca gli utenti Windows con questo comando:


```bash
chntpw -l /mnt/Windows/System32/config/SAM
```

```text
| RID -|---------- Username ------------| Admin? |- Lock? --|
| 01f4 | Administrator                  | ADMIN  | dis/lock |
| 01f7 | DefaultAccount                 |        | dis/lock |
| 01f5 | Guest                          |        | dis/lock |
| 01f8 | WDAGUtilityAccount             |        | dis/lock |
```

Nell'output di esempio, `Administrator` è l'account amministratore locale. Avviare la procedura di ripristino con il comando seguente. (utilizzare `admin` se `Administrator` non esiste.)

```bash
chntpw -u Administrator /mnt/Windows/System32/config/SAM
```

```text
RID     : 0500 [01f4]
Username: Administrator
fullname:
comment : Built-in account for administering the computer/domain
homedir :

00000220 = Administrators (which has 1 members)

Account bits: 0x0010 =
[ ] Disabled        | [ ] Homedir req.    | [ ] Passwd not req. |
[ ] Temp. duplicate | [X] Normal account  | [ ] NMS account     |
[ ] Domain trust ac | [ ] Wks trust act.  | [ ] Srv trust act   |
[ ] Pwd don't expir | [ ] Auto lockout    | [ ] (unknown 0x08)  |
[ ] (unknown 0x10)  | [ ] (unknown 0x20)  | [ ] (unknown 0x40)  |

Failed login count: 47034, while max tries is: 0
Total  login count: 5

- - - - User Edit Menu:
 1 - Clear (blank) user password
 2 - Unlock and enable user account [probably locked now]
 3 - Promote user (make user an administrator)
 4 - Add user to a group
 5 - Remove user from a group
 q - Quit editing user, back to user select
Select: [q] >
```



Digitare 1 e premere Invio. (Utilizzare l'opzione 2 se accanto a "Disattivato" è presente una "X".)

```text
Select: [q] > 1
Password cleared!
```

Digitare q e premere Invio per uscire dallo strumento. Digitare y quando richiesto e premere INVIO.

```text
Select: [q] > q
 
Hives that have changed:
 #  Name
 0  </mnt/Windows/System32/config/SAM>
Write hive files? (y/n) [n] : y
 0  </mnt/Windows/System32/config/SAM> - OK
```

### 4\. Riavviare il server

A questo punto, esci dalla modalità Rescue e riavvia il server. In caso di necessità, consulta la guida relativa al tuo servizio:

- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Instance Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

### Step 5: definisci una nuova password (KVM / VNC)

> [!warning]
>
> Non ignorare questo step. Un account Administrator non protetto rappresenta un rischio significativo per la sicurezza.
>

Connettersi al server e immettere `cmd` nella barra di ricerca per aprire il prompt dei comandi.

Definisci la password dell'utente corrente ("Administrator"):

```powershell
net user Administrator *
```

![amministratore](images/adminpw_win.png){.thumbnail}

A questo punto puoi accedere come "Administrator" con la nuova password.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
