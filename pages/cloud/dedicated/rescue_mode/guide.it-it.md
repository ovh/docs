---
title: Rescue mode
excerpt: Come utilizzare il Rescue mode?
slug: rescue_mode
legacy_guide_number: g920
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/UdMZSgXATFU?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 
In OVH esistono 2 tipi di modalità Rescue: Rescue Pro e WinRescue. La modalità Rescue Pro, pensata per i server Linux, ti permette di accedere in SSH alla tua macchina e verificare lo stato dell’hardware.

In modalità Rescue è possibile eseguire numerose operazioni, ad esempio:

## Modalità Rescue Pro Linux:

- Avviare un fsck/e2fsck
- Consultare e analizzare log
- Correggere problemi sui software
- Verificare/ricostruire il RAID
- Effettuare un backup dei dati



## Interfaccia check hardware:

- Memtest: per verificare la memoria (RAM)
- Cpuburn: per verificare il tuo processore (CPU)
- Fsck: per controllare il file system
- State: per controllare il disco
- Explorer: per consultare i tuoi file



## Modalità Rescue WinPE:

- Gestione dei file: file browser, client FTP, archiviazione
- Gestione delle password: per modificare o eliminare le password degli account utente del sistema Windows
- Tool server: console, Antivirus, lettore virtuale
- Browser Internet
- Gestione dei dischi: Testdisk, Diskpart, Bootsect


Se uno dei test non viene eseguito correttamente o restituisce errori, accedi al tuo Spazio Cliente OVH e crea un ticket di supporto allegando il risultato del test.


## 1. Attiva la modalità Rescue Pro
La modalità Rescue Pro è un sistema operativo basato su Linux (Debian), caricato sul server via rete e totalmente indipendente da quello installato sul server.

## Attenzione:
Non è possibile utilizzare contemporaneamente l'interfaccia Web e l'SSH. Per evitare la perdita di dati, ti consigliamo di non avviare il check dei dischi dall'interfaccia Web e di montare le partizioni in SSH.
Accedi alla sezione Dedicato del tuo Spazio Cliente OVH, seleziona il tuo server nel menu Server dedicati, clicca sulla categoria Boot nella scheda Informazioni generali e scegli la modalità Rescue Pro.

Attivando questa modalità, il tuo server non si riavvia automaticamente. Una volta che il sistema Rescue viene caricato sulla tua macchina, dovrai riavviare il server manualmente in modalità software, effettuando il login sul tuo server, o in modalità hardware, richiedendo dal tuo Spazio Cliente OVH l'interruzione dell'alimentazione elettrica della macchina.

Riavvia il tuo server preferibilmente in modalità software (in SSH: reboot) ed esegui il riavvio hardware se non hai altra scelta (nella sezione Boot del tuo Spazio Cliente OVH).

## Attenzione:
Il riavvio hardware è consigliato solo se non riesci più ad accedere al tuo server. Questa operazione corrisponde a un reset elettrico e può comportare la corruzione di alcuni dati.
L'amministratore del server registrato nei nostri database riceverà un'email con il link e la password necessari ad accedere al tuo server in Rescue mode.
Se hai ricevuto un'email che indica che sul tuo server è attiva la modalità Rescue e che contiene la password di root, in genere significa che è stato riscontrato un problema sul tuo server e che il tecnico del datacenter lo ha dovuto riavviare in modalità Rescue (problema software, ad esempio con grub).


## 2. Check Hardware
Una volta attivata la modalità Rescue Pro accederai a questa interfaccia grafica:

![](images/img_953.jpg){.thumbnail}
Da qui potrai eseguire test hardware sul tuo server, ad esempio su CPU, RAM, dischi e rete.

L'interfaccia è disponibile all'indirizzo http://ip.del.tuo.server:81/ e le credenziali da utilizzare sono quelle ricevute via email.

## Lista degli strumenti di diagnostica:

- Hard Drives: permette di visualizzare i dischi installati sul server e il loro stato (SMART)
- Processors: verifica il processore/raffreddamento. Se il risultato del test non viene visualizzato o se il server si riavvia o si blocca, significa che si è verificao un problema. Contatta il nostro supporto per pianificare la verifica del raffreddamento del tuo processore.
- Partitions State: effettua un controllo dei dischi
- Partitions File System: effettua un controllo del file system. Un'instabilità del sistema può essere confusa con un disco rotto. In questo caso, spesso è sufficiente reinstallare l'OS per ripristinare il suo corretto funzionamento, soprattutto se il server sposta alcuni file nella cartella lost+found. Attenzione: ricordati di eseguire un backup dei tuoi dati prima di eseguire la reinstallazione.
- Partitions Explore: permette di esplorare i file. Utilizzando questo tool non è possibile modificare i file, ma solo salvarli. Importante: è possibile consultare i log della macchina senza necessariamente accedere in SSH. Alcuni file system potrebbero non essere compatibili con questo strumento.
- Memory: effettua un controllo della RAM. Ricordati che un memtest utilizza molta CPU. Se questo test si blocca o provoca un crash della macchina, è molto probabile che la tua CPU non venga raffreddata correttamente o presenti un guasto. Se la RAM è difettosa, alla fine del test verrà visualizzato un report con gli errori rilevati.


Questa interfaccia non permette di individuare tutti i problemi. 
Se i test effettuati non mostrano errori sul tuo server ma credi che il problema sia legato all'hardware, contatta il supporto OVH, che analizzerà la situazione e sarà in grado di pianificare un controllo dell'hardware del tuo server da parte di un tecnico del datacenter.

## Attenzione:
È possibile che, al 64% del test della RAM, venga mostrato questo errore:
"your server hasn't reacted for a least 20 seconds. it is probably down you can try to refresh the pageif the server crashed while doing a cpu test. it is possible that the cpu is faulty."
Clicca su ok: spesso si verifica perché il test eseguito in quel momento è di durata maggiore rispetto agli altri.


## 3. Rescue in SSH

## a. Effettua l'accesso
Accedi alla tua macchina in SSH.
Ricordati che è necessario utilizzare la password di root temporanea ricevuta via email subito dopo l'attivazione della modalità Rescue.

```
angie@amazone:~$ ssh root@213.186.xx.yy
The authenticity of host '213.186.xx.yy (213.186.xx.yy)' can't be established.
RSA key fingerprint is 02:11:f2:db:ad:42:86:de:f3:10:9a:fa:41:2d:09:77.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '213.186.xx.yy' (RSA) to the list of known hosts.
Password:
rescue:~#
```


A questo punto sei connesso al server, ma per accedere ai tuoi file è necessario 'montare' il file system.

## b. Montaggio dischi
Generalmente, /dev/xda1 è la tua partizione di root (/) e /dev/xda2 corrisponde alla tua /home.

## I dispositivi saranno di tipo:

- /dev/sd per SCSI, SATA, Raid Hard
- /dev/hd per i dischi IDE
- /dev/md per i RAID Soft
- /dev/rd/c0d0p per i RAID Mylex
- /dev/ad4s1 per i sistemi Freebsd


Puoi utilizzare anche le denominazioni devfs.
Se non conosci quali dischi utilizzi e la loro tabella delle partizioni, utilizza i comandi fdisk o parted. Ecco un esempio con il comando fdisk e il risultato restituito:


```
rescue:~# fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```


In questo caso, il server utilizza due dispositivi: /dev/hda e /dev/sda. Su hda sono presenti 3 partizioni (hda1, hda2, hda3) e su sda 1 partizione (sda1).

L'asterisco vicino a /dev/hda indica il disco di boot. 
/dev/sda, invece, indica la chiave USB.
Se l'hard disk utilizza una tabella delle partizioni di tipo GPT, è necessario utilizzare il tool "parted" per visualizzare le tabelle delle partizioni dei dischi.
Per montare la partizione principale (/) del server, è sufficiente eseguire il comando "mount" seguito dal nome del disco (/dev/hda1) e della cartella in cui la partizione sarà montata sul sistema di file (/mnt/):


```
rescue:~# mount /dev/hda1 /mnt/
```


In genere, la partizione /home è sul disco /dev/hda2. Si monta dopo "/" eseguendo il comando mount /dev/hda2 /mnt/home.

/home non è necessariamente su /dev/hda2: è possibile anche che i tuoi dati siano in /var (ad esempio, per Plesk). Per essere sicuro della configurazione, puoi montare la partizione "/" e poi eseguire il comando cat /mnt/etc/fstab. Questo file contiene le partizioni del server utilizzate normalmente all'avvio.

Ecco un esempio:


```
rescue:# cat /mnt/etc/fstab
/dev/hda1 / ext3 errors=remount-ro 0 1
/dev/hda2 /var ext3 defaults,usrquota,grpquota 1 2
/dev/hda3 swap swap defaults 0 0
/dev/devpts /dev/pts devpts gid=5,mode=620 0 0
/dev/shm /dev/shm tmpfs defaults 0 0
/dev/proc /proc proc defaults 0 0
/dev/sys /sys sysfs defaults 0 0
```


In questo caso, il /dev/hda2 non è "/home" ma "/var".
Effettua il mount con mount /dev/hda2 /mnt/var.
Se il tuo server è configurato con un RAID software, ti consigliamo di montare le partizioni /dev/md[x].

## c. Chroot
A questo punto, è possibile modificare i file utilizzando, ad esempio, il percorso /mnt/var/[...] o /mnt/etc/lilo.conf. Per eseguire alcune operazioni, è necessario accedere al sistema installato sul disco con i privilegi di root, in quanto non è possibile utilizzare l'account root del Rescue.
Per queste operazioni è necessario eseguire il comando chroot:


```
rescue:~# chroot /mnt/
rescue:/#
```


In questo modo, vieni posizionato nella / del server e a questo punto puoi eseguire i comandi sul tuo sistema.


## 4. Esci dalla modalità Rescue
Per riavviare il server utilizzandoisuoi dischi, seleziona di nuovo il tipo di Netboot nella sezione "Boot" del tuo Spazio Cliente OVH. Seleziona "Avvio da hard disk" e conferma l'operazione, poi esegui un riavvio software (comando reboot dal server), o hardware (scheda "Reboot" dello Spazio Cliente OVH).

Esempio di reboot software:


```
rescue:~# reboot
Broadcast message from root (pts/0) (Tue Apr 12 15:56:17 2005):
The system is going down for reboot NOW!
```




## 1. Attiva la modalità WinRescue
Accedi alla sezione Dedicato del tuo Spazio Cliente OVH, seleziona il tuo server nel menu Server dedicati, clicca sulla categoria Boot nella scheda Informazioni generali e scegli la modalità WinRescue.

Attivando questa modalità, il tuo server non si riavvia automaticamente. Una volta che il sistema Rescue viene caricato sulla tua macchina, dovrai riavviare il server manualmente in modalità software, effettuando il login sul tuo server, o in modalità hardware, richiedendo dal tuo Spazio Cliente OVH l'interruzione dell'alimentazione elettrica della macchina.

Riavvia il tuo server preferibilmente in modalità software (Menu Avvia + Riavvia o via SSH: "shutdown /r /t 0") ed esegui il riavvio hardware se non hai altra scelta (nella sezione Boot del tuo Spazio Cliente OVH).

## Attenzione:
Il riavvio hardware è consigliato solo se non riesci più ad accedere al tuo server. Questa operazione corrisponde a un reset elettrico e può comportare la corruzione di alcuni dati.
L'amministratore del server registrato nei nostri database riceverà un'email con il link e la password necessari ad accedere al tuo server in WinRescue.
Se hai ricevuto un'email che indica che sul tuo server è attiva la modalità Rescue e che contiene la password di root, in genere significa che è stato riscontrato un problema sul tuo server e che il tecnico del datacenter lo ha dovuto riavviare in modalità Rescue (problema software, ad esempio con grub).


## 2. I tool
Ecco i principali tool disponibili su WinPE

a. File browser

![](images/img_737.jpg){.thumbnail}
Freecommander è un file manager con numerose funzionalità, che ti permettono di eseguire diverse azioni sui tuoi dati, come esplorare i file presenti sulle periferiche di storage collegate al server o gestire i dati eseguendo le operazioni Copia/Incolla/Taglia, Comprimi/Decomprimi, Rinomina, Sposta, ecc...

b. Gestore password

![](images/img_738.jpg){.thumbnail}
NTPWedit è un gestore di password semplice da utilizzare che permette di riattivare un account o di modificarne la password.
Questo strumento è utile in caso di perdita degli identificativi o per riattivare un account di sicurezza.

c. Client FTP

![](images/img_739.jpg){.thumbnail}
Filezilla è un client FTP open source che supporta i protocolli SSH e SSL e le operazioni copia/trascona.
Con la sua interfaccia semplice e chiara permette di trasferire i tuoi dati verso un server FTP come lo spazio di backup FTP incluso gratuitamente con la maggior parte delle gamme dei server OVH.

d. Gestori di archivi

![](images/img_740.jpg){.thumbnail}
7-ZIP è uno strumento di archiviazione gratuito, potente e semplice da utilizzare.
Permette di leggere gli archivi nei formati: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR e Z.
Con 7-ZIP è possibile anche creare i tuoi archivi nei formati: 7z, XZ, BZIP2, GZIP, TAR, ZIP e WIM.

e. Antivirus di emergenza

![](images/img_741.jpg){.thumbnail}
Il tool Avast Virus Cleaner permette di eseguire una scansione rapida dei tuoi dischi locali in caso di infezione.

f. Tool server

![](images/img_743.jpg){.thumbnail}
ActivNIC permette di riattivare una scheda di rete che è stata disattivata sul server.

![](images/img_742.jpg){.thumbnail}
SRVFirewall è uno script che tenta di attivare o disattivare il firewall sul tuo server.

g. Tool System Microsoft

![](images/img_745.jpg){.thumbnail}
SysInternals Tools è una suite Microsoft composta da diversi strumenti per la rete, la gestione dei processi e altre funzionalità.

![](images/img_744.jpg){.thumbnail}
Interfaccia che permette di eseguire comandi da terminale.

h. Lettore virtuale

![](images/img_746.jpg){.thumbnail}
Virtual Clone Drive consente di montare i tuoi file ISO, BIN e CCD su un lettore virtuale.

i. Browser Internet

![](images/img_747.jpg){.thumbnail}
Browser Web (Firefox).

j. Utility disco

![](images/img_748.jpg){.thumbnail}
Testdisk è un software di recupero dei dati.
Ti permette di recuperare o modificare una tabella delle partizioni corrotta, ritrovare una partizione scomparsa, riparare un settore di boot o ricostruire un MBR difettoso.

![](images/img_749.jpg){.thumbnail}
Diskpart è un tool Microsoft disponibile da riga di comando che consente di creare, modificare e gestire le partizioni di uno o più dischi.
È possibile estendere o ridurre una partizione, modificare la lettera assegnata a un volume, formattare un disco, ecc...
Permette anche di effettuare e sospendere un RAID Software tra più dischi.

![](images/img_750.jpg){.thumbnail}
Bootsect è un tool estratto dalla console di recupero Windows.
Ti permette di riparare un settore di boot difettoso sulla tua partizione di sistema.


## 
In questa guida ti abbiamo mostrato come avviare il tuo server in modalità Rescue in 3 modi diversi.

