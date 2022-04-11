---
title: Modificare la password di root su un VPS
slug: root-password
excerpt: Come modificare la password dell’utente root sui VPS
section: Diagnostica e modalità Rescue
---

**Ultimo aggiornamento: 27/04/2021**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Potrebbe essere necessario modificare la password di root sul tuo sistema operativo Linux. Esistono due possibili scenari:

- Accedi sempre via SSH
- Non puoi connetterti via SSH perché hai perso la password

**Questa guida ti mostra come modificare la password di amministratore in base a queste due situazioni.**

## Prerequisiti

- Disporre di un [VPS OVHcloud](https://www.ovhcloud.com/it/vps/){.external} già configurato
- Disporre delle credenziali di accesso ricevute via email dopo l'installazione (se ancora valide)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} (per utilizzare la modalità Rescue)

> [!warning]
>
> OVHcloud mette a disposizione i server,  ma non è autorizzata ad accedervi e non si occupa quindi della loro amministrazione. Garantire quotidianamente la gestione software e la sicurezza di queste macchine è quindi responsabilità dell’utente. Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
>

## Procedura

### Modifica della password se hai sempre un accesso (sudo o root)

> [!primary]
>
> Per maggiori informazioni sulla connessione al tuo VPS, consulta la guida [Inizia con un VPS](../iniziare-a-utilizzare-vps/).
>

Accedi al tuo VPS via SSH. Se necessario, passa all'utente root:

```sh
~$ sudo su -
~#
```

Modifica la password dell'utente attuale:

```sh
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

> [!primary]
>
> Su una distribuzione Linux, la password che digitate **non** apparirà.
>

Per autorizzare la connessione come utente root, segui gli step di [questa sezione](./#attiva-la-password-di-root_1).

### Modifica della password se l'hai perso

<iframe width="560" height="315" src="https://www.youtube.com/embed/ua1qoTMq35g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> 

#### Step 1: Riavvia il VPS in modalità Rescue.

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e riavvia il VPS in modalità Rescue. Se hai bisogno di ulteriori istruzioni sull'utilizzo della modalità Rescue con un VPS, consulta la [guida della modalità Rescue](../rescue/).

#### Step 2: Identificare il punto di mount

Sulle gamme precedenti di VPS, le tue partizioni saranno automaticamente installate in modalità Rescue. Puoi utilizzare questi comandi per identificare il punto di mount della tua partizione:

##### **df -h**

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

##### **lsblk**

```sh
~$ lsblk
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0  2.5G  0 disk
└─sda1    8:1    0  2.5G  0 part /
sdb       8:16   0   50G  0 disk
├─sdb1    8:17   0 49.9G  0 part /mnt/sdb1
├─sdb14   8:30   0    4M  0 part
└─sdb15   8:31   0  106M  0 part /mnt/sdb15
```

L'esempio che hai mostrato qui sopra mostra che la partizione di sistema è montata su **/mnt/sdb1**.

Se il tuo VPS è recente, la colonna `MOUNTPOINT` dovrebbe essere vuota. In questo caso, esegui il mount della partizione:

```sh
~$ mkdir -p /mnt/sdb1
~$ mount /dev/sdb1 /mnt/sdb1
```

#### Step 3: autorizzazioni CHROOT

È necessario modificare la directory di root per applicare le modifiche al tuo sistema. Per farlo, utilizza il comando `chroot`:

```sh
~$ chroot /mnt/sdb1/
```

È possibile effettuare una verifica digitando il comando `ls -l`, che registra il contenuto archiviato nella directory corrente del tuo sistema:

```sh
~$ ls -l
```

#### Step 4: Modifica la password (root)

Nell'ultimo step, modifica la password utilizzando il comando `passwd`.

```sh
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

Se il tuo VPS è di ultima generazione: *vps-XXXXX.vps.ovh.net*), hai inizialmente ricevuto le credenziali di accesso per un utente con diritti importanti, invece dell'account "root" predefinito. Il servizio SSH non accetta richieste di connessione come root.

Inserisci il nome utente che utilizzi per accedere al tuo `passwd`:

```sh
~# passwd <username>
New password:
Retype new password:
passwd: password updated successfully
```

In questo modo, in caso di disattivazione della connessione root, potrai riconnetterti con questo nome utente dopo il riavvio.

Riavvia il tuo VPS sul disco dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).


### Attiva la password di root

Se il tuo VPS è di ultima generazione: *vps-XXXXX.vps.ovh.net*), hai ricevuto le credenziali di accesso per un utente con diritti importanti, invece dell'account "root" predefinito. Il servizio SSH non accetta richieste di connessione come root.

> [!warning]
>
> Attivare la password di root è generalmente considerato come una vulnerabilità di sicurezza e non è quindi consigliato.
>
> Per proteggere il tuo VPS, ti consigliamo di adottare le misure necessarie. Per maggiori informazioni, consulta la nostra guida sulla [protezione di un VPS](../consigli-sicurezza-vps/).
>

#### Step 1: Modifica il file sshd_config

Utilizza un editor di testo come vim o nano per modificare questo file di configurazione:

```sh
~$ nano /etc/ssh/sshd_config
```

Aggiungi questa riga.

```sh
PermitRootLogin yes
```

Cerca questa linea e assicurati che sia commentata:

```sh
#PermitRootLogin prohibit-password
```

Salva il file e lascia l'editor.

#### Step 2: Riavvia il servizio SSH

```sh
~$ systemctl restart sshd
```

Ciò dovrebbe bastare per applicare le modifiche. È possibile riavviare il VPS (```~$ reboot```).

### Malfunzionamento

Se dopo aver modificato la password e avviato il riavvio riscontri problemi di avvio:

- Consulta il KVM per sapere perché il VPS non può iniziare. Consulta la [guida KVM](../utilizza_il_kvm_sul_tuo_vps/) per ottenere assistenza sull'utilizzo di questa funzionalità nello Spazio Cliente OVHcloud.
- Se il KVM visualizza l'avvio del VPS o se non riesce a trovare il disco, assicurati che il [bootlog sia attivo](../bootlog-kvm/). Per maggiori informazioni, invia i log pertinenti ai nostri team di supporto creando una richiesta di supporto nel tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

## Per saperne di più

[Introduzione a SSH](../../dedicated/introduzione-ssh/)

[Mettere in sicurezza un VPS](../consigli-sicurezza-vps/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
