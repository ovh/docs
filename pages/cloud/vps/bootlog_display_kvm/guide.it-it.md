---
title: Visualizza i log di boot nel KVM
slug: bootlog-kvm
excerpt: Come diagnosticare un VPS consultando i log di avvio (boot logs)
section: Diagnostica e modalità Rescue
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 05/07/2021**

## Obiettivo

Se il tuo VPS non risponde, accedi al tuo Spazio Cliente OVHcloud tramite il [KVM](../utilizza_il_kvm_sul_tuo_vps/). Il modo più rapido per diagnosticare il problema è verificare i log di avvio (boot log) del server. Per visualizzare i log, tuttavia, è necessario modificare la configurazione GRUB. 

> [!primary]
>
> Ti ricordiamo che in alcuni ambienti il KVM non fornirà alcuna informazione utile in quanto la sequenza di avvio compare nella porta di serie in cui il GRUB è configurato in modalità silenziosa.
>

**Questa guida ti mostra come attivare i log di boot che ti aiutano a risolvere il problema dei tuoi VPS.**

> [!warning]
> OVHcloud fornisce i servizi di cui sei responsabile per la configurazione e la gestione. Sei quindi responsabile del loro corretto funzionamento.
>
>In caso di difficoltà nell'effettuare queste azioni, contatta un fornitore di servizi specializzato e/o contatta la nostra Community di utenti <https://community.ovh.com/en/>. OVHcloud non potrà fornirti assistenza tecnica al riguardo.
>

## Prerequisiti

- disporre di un [VPS](https://www.ovhcloud.com/it/vps/) nel tuo account OVHcloud
- avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

> [!warning]
>
> Queste modifiche modificheranno la configurazione del GRUB. Prima di apportare qualsiasi modifica, effettua un backup di tutti i tuoi dati importanti, in modo che OVHcloud non possa essere ritenuta responsabile dei danni o della perdita dei dati causati da queste operazioni.
>

Se hai sempre accesso al tuo VPS via SSH, puoi passare allo Step 6 [dello](#step6).

### Step 1: riavvia il VPS in modalità Rescue

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e avvia il riavvio del server in modalità Rescue. Se necessario, consulta la nostra [guida sulla modalità Rescue](../rescue/).

### Step 2: effettua la verifica iniziale

Sulle gamme precedenti di VPS, le tue partizioni saranno automaticamente installate in modalità Rescue. Per verificarlo e identificare la posizione di montaggio della partizione, utilizza questi comandi:

#### **df -h**

```sh
~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            5.8G     0  5.8G   0% /dev
tmpfs           1.2G   17M  1.2G   2% /run
/dev/sda1       2.4G  1.5G  788M  66% /
tmpfs           5.8G     0  5.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           5.8G     0  5.8G   0% /sys/fs/cgroup
/dev/sdb1        49G  1.2G   48G   3% /mnt/sdb1
/dev/sdb15      105M  3.6M  101M   4% /mnt/sdb15
```

#### **lsblk**

```sh
~$ lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 8:0 0 2.5G 0 disk
└ ─ sda1 8:1 0 2.5G 0 part /
sdb 8:16 0 50G 0 disk
├ ─ sdb1 8:17 0 49.9G 0 part /mnt/sdb1
├ ─ sdb14 8:30 0 4M 0 parte
└ ─ sdb15 8:31 0 106M 0 parte /mnt/sdb15
```

L'esempio che hai mostrato qui sopra mostra che la partizione di sistema è montata su **/mnt/sdb1**. (Il disco principale è **sdb**. Il disco rescue è **sda** e **sda1** è la partizione principale in rescue montata su **/**).

Se il tuo VPS appartiene alle [**gamme VPS esistenti**](https://www.ovhcloud.com/it/vps/), non verrà effettuato alcun mount automatico e la colonna "MOUNTPOINT" sarà vuota. In questo caso passa allo [Step 4](#step4).

### Step 3: smontare la partizione (solo per le gamme VPS precedenti)

Sui VPS appartenenti alle gamme precedenti in modalità Rescue, il disco principale è già montato. Pertanto, prima di essere rimosso, esso deve essere rimosso al passaggio 4:

```sh
~$ umount /dev/sdb1
```

### Step 4: monta la partizione con i parametri appropriati <a name="step4"></a>

Se il tuo VPS appartiene alle [**gamme VPS esistenti**](https://www.ovhcloud.com/it/vps/), verifica prima che la cartella di mount sia creata:

```sh
~$ mkdir -p /mnt/sdb1
```

Inserisci questi comandi per effettuare il mount della partizione con i parametri appropriati:

```sh
~$ mount /dev/sdb1 /mnt/sdb1
~$ mount -t proc none /mnt/sdb1/proc
~$ mount -o bind /dev /mnt/sdb1/dev
~$ mount -t sysfs none /mnt/sdb1/sys/
```

La partizione di sistema è stata montata per essere utilizzata con il comando `chroot`, per eseguire azioni che richiedono l'accesso alle directory `sys`, `dev` e `proc`.

### Step 5: utilizza il comando CHROOT per configurare i tuoi file di sistema

A questo punto è necessario accedere ai file GRUB del tuo sistema e modificarli. Per farlo, utilizza il comando `chroot`:

```sh
~$ chroot /mnt/sdb1
```

Da questo momento, tutti i comandi che inserisci saranno applicati al tuo VPS invece dell'ambiente temporaneo della modalità Rescue.

### Step 6: modifica la configurazione GRUB <a name="step6"></a>

#### **Per Debian 8 o superiori e Ubuntu 18 o superiori**

Crea una copia del backup del file di configurazione:

```sh
~$ cp /etc/default/grub /root/grub.backup
```

Per accedere ai log di boot utilizzando la console KVM, assicurati di avere questo valore nel file `/etc/default/grub`:

```sh
GRUB_CMDLINE_LINUX_DEFAULT="console=ttyS0 console=tty0"
```

Se questa riga è mancante o diversa, modifica il file con un editor e registralo.

A questo punto, utilizza il comando seguente per rigenerare il file di configurazione GRUB (le modifiche saranno registrate per il prossimo riavvio):

```sh
~$ update-grub
```

#### **Per CentOS 7 o superiore (grub2)**

Crea una copia del backup del file di configurazione:

```sh
~$ cp /etc/default/grub /root/grub.backup
```

Per accedere ai log di boot utilizzando la console KVM, assicurati di disporre dei seguenti valori nel file `/etc/default/grub`:

```sh
GRUB_TERMINAL_OUTPUT="console"
GRUB_CMDLINE_LINUX="console=ttyS0,115200n8 no_timer_check net.ifnames=0 crashkernel=auto rhgb"
GRUB_CMDLINE_LINUX_DEFAULT="console=tty0 console=ttyS0"
```

Se queste righe sono mancanti o differenti, modifica il file con un editor e registralo.

A questo punto, utilizza il comando seguente per rigenerare il file di configurazione GRUB (i valori saranno registrati per il prossimo riavvio):

```sh
~$ grub2-mkconfig -o "$(readlink /etc/grub.cfg)"
```

Una volta effettuate le modifiche, riavvia il tuo VPS in modalità normale dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). I log di boot devono apparire durante l'utilizzo della [console KVM](../utilizza_il_kvm_sul_tuo_vps/).

## Per saperne di più

[Utilizzare KVM sui VPS](../utilizza_il_kvm_sul_tuo_vps/)

[Attiva la modalità Rescue su un VPS](../rescue/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
