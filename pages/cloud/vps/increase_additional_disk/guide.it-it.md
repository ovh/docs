---
title: "Aumenta la dimensione di un disco aggiuntivo"
excerpt: "Scopri come aumentare la dimensione di un volume aggiuntivo e aumentare la sua partizione principale"
updated: 2023-03-14
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 14/03/2023**

## Obiettivo

Se hai raggiunto la capacità massima del tuo disco aggiuntivo, puoi aggiungere spazio di storage aumentando la dimensione del disco.

**Questa guida ti mostra come aumentare la dimensione di un disco aggiuntivo ed estendere di conseguenza la partizione principale.**

## Prerequisiti

- Un [VPS](https://www.ovhcloud.com/it/vps/) nel tuo account OVHcloud.
- Un [disco aggiuntivo](/pages/cloud/vps/config_additional_disk) configurato sul VPS.
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
- Avere accesso al VPS in SSH o in RDP per l'amministrazione.

## Procedura

Negli step successivi è necessario aver configurato un disco aggiuntivo seguendo le indicazioni di [questa guida](/pages/cloud/vps/config_additional_disk).

### Modifica la dimensione del disco <a name="extend"></a>

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Bare Metal Cloud`{.action} e seleziona il tuo server tra i `Server Privati Virtuali`{.action}.

Nel riquadro **Sintesi delle opzioni**, clicca sul pulsante `...`{.action} nella sezione `Dischi aggiuntivi`. Seleziona `Aumenta la dimensione del disco`{.action}.

![size-disk-vps](images/increase_disk_vps01.png){.thumbnail}

Seleziona la nuova dimensione del disco nella nuova finestra e clicca su `Aumenta`{.action}.

![size-disk-vps](images/increase_disk_vps02.png){.thumbnail}

Visualizzerai un messaggio per confermare la tua richiesta. Clicca sul link all'interno del messaggio e segui la procedura d'ordine. È possibile che una nuova scheda di navigazione per il comando si sia aperta automaticamente.

![size-disk-vps](images/increase_disk_vps03.png){.thumbnail}

L'aumento di capacità del disco richiederà alcuni minuti dopo la conferma del pagamento. Puoi verificare lo stato di avanzamento della procedura nella scheda `Dischi aggiuntivi`{.action}: se visualizzi la nuova dimensione selezionata, il disco è pronto.

![size-disk-vps](images/increase_disk_vps04.png){.thumbnail}

> [!warning]
>
> Salva i tuoi dati sul disco aggiuntivo prima di continuare.
>

### Estensione della partizione

> [!warning]
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie sul tuo VPS. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a un [provider specializzato](https://partner.ovhcloud.com/it/directory/) o di contattare la [nostra Community](https://community.ovh.com/en/).
>

#### Su un VPS Linux

> [!primary]
>
> Questa sezione descrive un approccio generale agli step necessari, basato su un sistema operativo Ubuntu Server. Alcuni ordini potrebbero richiedere una personalizzazione per la distribuzione utilizzata.
>

Se sul tuo VPS è installata una distribuzione GNU/Linux, connettiti in SSH al tuo server dal terminale della linea di comando o utilizzando un'applicazione cliente SSH.

Gli esempi che seguono presuppongono che tu sia connesso come utente con elevate autorizzazioni.

Assicurati che il disco non sia montato con questo comando:

```bash
ubuntu@server:~$ sudo umount /mnt/disk
```

Sostituisci `/mnt/disk` con il percorso di mount effettivo verso il disco aggiuntivo, se necessario.

Determina i nomi dei dischi e delle partizioni:

```bash
ubuntu@server:~$ lsblk
NAME    MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
loop0     7:0    0  63.2M  1 loop /snap/core20/1623
loop1     7:1    0  63.3M  1 loop /snap/core20/1828
loop2     7:2    0 111.9M  1 loop /snap/lxd/24322
loop3     7:3    0  49.8M  1 loop /snap/snapd/18357
loop4     7:4    0   103M  1 loop /snap/lxd/23541
sda       8:0    0   160G  0 disk
├─sda1    8:1    0 159.9G  0 part /
├─sda14   8:14   0     4M  0 part
└─sda15   8:15   0   106M  0 part /boot/efi
sdc       8:32   0   100G  0 disk
└─sdc1    8:33   0    50G  0 part 
```

In questo esempio, il disco è chiamato `sdc` e ha la nuova dimensione del disco corretta di 100 GB dopo l'aggiornamento spiegato nella [prima parte](#extend) di questa guida. La partizione `sdc1` esiste sul disco e utilizza 50 GB.

Ricrea la partizione sul disco eseguendo `fdisk`:

```bash
ubuntu@server:~$ sudo fdisk /dev/sdc
```

Su invito `fdisk`, inserisci questi comandi:

```console
Welcome to fdisk (util-linux 2.37.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Command (m for help): d
Selected partition 1
Partition 1 has been deleted.

Command (m for help): n
```

Conferma tutti i valori predefiniti cliccando su `Input`:

```console
Partition type
   p primary (0 primary, 0 extended, 4 free)
   e extended (container for logical partitions)
Select (default p):

Using default response p.
Partition number (1-4, default 1):
First sector (2004-2007-15199, default 2048):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-209715199, default 209715199):

Created a new partition 1 of type 'Linux' and of size 100 GiB.
```

Inserisci `n` e infine `w`:

```console
Partition #1 contains a ext4 signature.

Do you want to remove the signature? [Y]es/[N]o: n

Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Verifica la partizione ed estende il file system:

```bash
ubuntu@server:~$ sudo e2fsck -f /dev/sdc1
e2fsck 1.46.5 (30-Dec-2021)
/dev/sdc1: recovering journal
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/sdc1: 11/3276800 files (0.0% non-contiguous), 284558/13106944 blocks
```
```bash
ubuntu@server:~$ sudo resize2fs /dev/sdc1
resize2fs 1.46.5 (30-Dec-2021)
Resizing the filesystem on /dev/sdc1 to 26214144 (4k) blocks.
The filesystem on /dev/sdc1 is now 26214144 (4k) blocks long.
```

Infine, monta il disco:

```bash
ubuntu@server:~$ sudo mount /dev/sdc1 /mnt/disk/
```

La partizione 1 utilizza ora la dimensione massima del disco.

```bash
ubuntu@server:~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
tmpfs           776M  992K  776M   1% /run
/dev/sda1       155G  2.2G  153G   2% /
tmpfs           3.8G     0  3.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
/dev/sda15      105M  5.3M  100M   5% /boot/efi
tmpfs           776M  4.0K  776M   1% /run/user/1000
/dev/sdc1        99G   24K   94G   1% /mnt/disk
```

#### Su un VPS Windows

Se sul tuo VPS è installato un OS Windows, connetti RDP (Remote Desktop) al tuo server.

Una volta connesso, clicca con il tasto destro sul pulsante `Menu Inizia`{.action} e apri la `Gestisci i dischi`{.action}.

![winmountdiskvps](images/increase_disk_vps05.png){.thumbnail}

Il [disco esteso](#extend) mostra la capacità aggiuntiva sotto forma di spazio non allocato. Fai click con il tasto destro sul volume del tuo disco aggiuntivo e seleziona `Estendi il volume`{.action} nel menu contestuale.

![winmountdiskvps](images/increase_disk_vps06.png){.thumbnail}

Nell'assistente all'estensione del volume, clicca su `Avanti`{.action} per continuare.

Se necessario, è possibile modificare lo spazio disco in questo step. Clicca su `Avanti`{.action}.

![winmountdiskvps](images/increase_disk_vps07.png){.thumbnail}

Clicca su `Terminare`{.action} per completare il processo.

Il volume ridimensionato include lo spazio disco aggiuntivo.

![winmountdiskvps](images/increase_disk_vps08.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
