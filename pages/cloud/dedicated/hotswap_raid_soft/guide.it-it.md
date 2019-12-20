---
title: 'Sostituire un disco a caldo su un server con RAID Software'
slug: hotswap-raid-soft
excerpt: 'Come sostituire un disco senza interruzione di servizio sul tuo server con RAID Software'
section: 'RAID e dischi'
---

**Ultimo aggiornamento: 20/12/2019**

## Obiettivo

Alcuni server Top Gamma OVH consentono la sostituzione del disco senza interruzione di servizio. Nel caso in cui uno dei dischi del server risulti danneggiato o non funzioni correttamente è possibile sostituirlo a caldo, se il modello attivato è compatibile.

**Questa guida ti mostra come sostituire a caldo un disco su una macchina con RAID software.**

## Prerequisiti

- Disporre di un server [mHG, HG o BHG](https://www.ovh.it/server_dedicati/hg/){.external}
- Disporre di un RAID Software (con scheda LSI)
- Avere accesso al server via SSH (Linux) o RDP (Windows)
- Aver installato l’utility <b>sas2ircu</b> (distribuita da [Broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external})

## Procedura

### Con Linux

#### Step 1: individua il disco malfunzionante

Le operazioni descritte in questa guida partono dal presupposto che l’utente abbia ricevuto un messaggio di alert per il disco `/dev/sdb` che, a causa di un malfunzionamento, richiede la sostituzione a caldo. **Ricordati di sostituire i valori generici indicati nella procedura con le informazioni corrispondenti.**

Per prima cosa, verifica il **Serial Number** del disco in questione.

```sh
root@ns3054662:/home# smartctl -a /dev/sdb
>>> smartctl 6.4 2014-10-07 r4002 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)
>>> Copyright (C) 2002-14, Bruce Allen, Christian Franke, www.smartmontools.org

>>> === START OF INFORMATION SECTION ===
>>> Vendor:               HGST
>>> Product:              HUS726040ALS210
>>> Revision:             A907
>>> Compliance:           SPC-4
>>> User Capacity:        4,000,787,030,016 bytes [4.00 GB]
>>> Logical block size:   512 bytes
>>> LB provisioning type: unreported, LBPME=0, LBPRZ=0
>>> Rotation Rate:        7200 rpm
>>> Form Factor:          3.5 inches
>>> Logical Unit id:      0x5000cca25d3155bc
>>> Serial Number:        K4GW439B
>>> Device type:
>>> Transport protocol:   SAS (SPL-3)
>>> Local Time is:        Mon Nov 21 14:23:43 2016 CET
>>> SMART support is:     Available - device has SMART capability.
>>> SMART support is:     Enabled
>>> Temperature Warning:  Enabled

>>> === START OF READ SMART DATA SECTION ===
>>> SMART Health Status: OK

>>> Current Drive Temperature:     34 C
>>> Drive Trip Temperature:        85 C

>>> Manufactured in week 44 of year 2016
>>> Specified cycle count over device lifetime:  50000
>>> Accumulated start-stop cycles:  9
>>> Specified load-unload count over device lifetime:  600000
>>> Accumulated load-unload cycles:  14
>>> Elements in grown defect list: 0

>>> Vendor (Seagate) cache information
>>> Blocks sent to initiator = 2305525022720

>>> Error counter log:
>>>        Errors Corrected by           Total   Correction     Gigabytes    Total
>>>            ECC          rereads/    errors   algorithm      processed    uncorrected
>>>        fast | delayed   rewrites  corrected  invocations   [10^9 bytes]  errors
>>> read:          0        572         0       22548         77          4.725         5580
>>> write:         0        0         0         19548       196         17.344          2569

>>> Non-medium error count:        0

>>> SMART Self-test log
>>> Num  Test              Status                 segment  LifeTime  LBA_first_err [SK ASC ASQ]
>>>  Description                              number   (hours)
>>> # 1  Background short  Completed                   -       6                 - [-   -    -]
>>> # 2  Background short  Completed                   -       4                 - [-   -    -]
>>> # 3  Background short  Completed                   -       4                 - [-   -    -]
>>> # 4  Background short  Completed                   -       4                 - [-   -    -]
>>> # 5  Background short  Completed                   -       1                 - [-   -    -]

>>> Long (extended) Self Test duration: 34237 seconds [570.6 minutes]
```

La risposta restituita al comando eseguito mostra che: 

- il disco **SDB** è fuori servizio a causa di errori non corretti (uncorrected errors)
- Il **Serial Number** coincide con quello dell’alert ricevuto (inviato dal datacenter o altri strumenti di monitoraggio)

Per ottenere soltanto il **Serial Number** esegui questo comando:

```sh
root@ns3054662:/home# smartctl -a /dev/sdb | grep Serial
>>> Serial Number:        K4GW439B
```

#### Step 2: recupera la collocazione del disco

A questo punto è necessario identificare lo **Slot ID** e l’**Enclosure ID** del disco. Per recuperare queste informazioni utilizza il tool <b>sas2ircu</b> installato sul server.

Per prima cosa, verifica che i dischi siano connessi tramite una scheda LSI.

```sh
root@ns3054662:/home# lspci | grep -i LSI
>>> 81:00.0 Serial Attached SCSI controller: LSI Logic / Symbios Logic SAS2004 PCI-Express Fusion-MPT SAS-2 [Spitfire] (rev 03)
```

In questo caso, identifica l’ID della scheda.

```sh
root@ns3054662:/home# ./sas2ircu list
>>> LSI Corporation SAS2 IR Configuration Utility.
>>> Version 5.00.00.00 (2010.02.09)
>>> Copyright (c) 2009 LSI Corporation. All rights reserved.


>>>          Adapter      Vendor  Device                       SubSys  SubSys
>>>  Index    Type          ID      ID    Pci Address          Ven ID  Dev ID
>>>  -----  ------------  ------  ------  -----------------    ------  ------
>>>      0     SAS2004     1000h    70h   00h:81h:00h:00h      1000h   3010h
>>> SAS2IRCU: Utility Completed Successfully.
```

L’index corrisponde all’ID. Nel nostro esempio il valore dell’index (e quindi dell’ID) della scheda è pari a  0.

Con questa informazione è possibile recuperare, tramite il **Serial Number**, lo **Slot ID** e l'**Enclosure ID** del disco.

```sh
root@ns3054662:/home# ./sas2ircu 0 display | grep -B 7 -A 2 K4GW439B
>>> Device is a Hard disk
>>>   Enclosure                               : 1
>>>   Slot                                    : 3
>>>   State                                   : Available (AVL)
>>>   Manufacturer                            : HGST
>>>   Model Number                            : HUS726040ALS210
>>>   Firmware Revision                       : A907
>>>   Serial No                               : K4GW439B
>>>   Protocol                                : SAS
>>>   Drive Type                              : SAS_HDD
```

Questo comando permette di visualizzare le informazioni del disco, il cui **Serial Number** è K4GW439B.

Nel nostro esempio, abbiamo recuperato l'**Enclosure ID** (corrispondente a 1) e lo **Slot ID** (corrispondente a 3).

#### Step 3: accendi il disco

Con le informazioni recuperate negli step precedenti, accendi il LED del disco da sostituire utilizzando il comando `./sas2ircu 0 locate EncID:SlotID on` (ricordati di sostituire i valori generici “EncID” e “SlotID” con le informazioni recuperate precedentemente):

```sh
root@ns3054662:/home# ./sas2ircu 0 locate 1:3 on
>>> LSI Corporation SAS2 IR Configuration Utility.
>>> Version 5.00.00.00 (2010.02.09)
>>> Copyright (c) 2009 LSI Corporation. All rights reserved.

>>> SAS2IRCU: LOCATE Command completed successfully.
>>> SAS2IRCU: Command LOCATE Completed Successfully.
>>> SAS2IRCU: Utility Completed Successfully.
```

Per disattivare la spia lampeggiante del disco, esegui il comando precedente sostituendo “on” con “off”.

#### Step 4: rimuovi il disco malfunzionante dal RAID

Se questa modalità non è già attiva, passa il disco difettoso in **Faulty** e verifica lo stato del RAID.

```sh
root@ns3054662:/home# cat /proc/mdstat
>>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>>> md2 : active raid1 sda2[0] sdb2[1]
>>>       3885385728 blocks super 1.2 [2/2] [UU]
>>>       bitmap: 0/29 pages [0KB], 65536KB chunk

>>> md1 : active raid1 sdb1[1] sda1[0]
>>>       20971456 blocks [2/2] [UU]

>>> unused devices: <none>
```

Nel nostro esempio, il disco malfunzionante fa parte di “md1” e “md2” (“sbd1” e “sdb2”). A questo punto, attiveremo lo stato **Faulty** rispettivamente su “sdb1” in “md1” e “sdb2” in “md2”.

```sh
root@ns3054662:/home# mdadm --manage /dev/md1 --set-faulty /dev/sdb1
>>> mdadm: set /dev/sdb1 faulty in /dev/md1
```

```sh
root@ns3054662:/home# mdadm --manage /dev/md2 --set-faulty /dev/sdb2
>>> mdadm: set /dev/sdb2 faulty in /dev/md2
```

Una volta completata l’operazione, verifica nuovamente lo stato del RAID.

```sh
root@ns3054662:/home# cat /proc/mdstat
>>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>>> md2 : active raid1 sda2[0] sdb2[1](F)
>>>       3885385728 blocks super 1.2 [2/1] [U_]
>>>       bitmap: 0/29 pages [0KB], 65536KB chunk

>>> md1 : active raid1 sdb1[2](F) sda1[0]
>>>       20971456 blocks [2/1] [U_]

>>> unused devices: <none>
```

Adesso che “sdb1” e “sdb2” risultano in Faulty (**F**) è possibile rimuovere il disco dal RAID.

```sh
root@ns3054662:/home# mdadm --manage /dev/md1 --remove /dev/sdb1
>>> mdadm: hot removed /dev/sdb1 from /dev/md1
```

```sh
root@ns3054662:/home# mdadm --manage /dev/md2 --remove /dev/sdb2
>>> mdadm: hot removed /dev/sdb2 from /dev/md2
```

Per verificare la corretta rimozione del disco, esegui questo comando:

```sh
root@ns3054662:/home# cat /proc/mdstat
>>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>>> md2 : active raid1 sda2[0]
>>>       3885385728 blocks super 1.2 [2/1] [U_]
>>>       bitmap: 0/29 pages [0KB], 65536KB chunk

>>> md1 : active raid1 sda1[0]
>>>       20971456 blocks [2/1] [U_]

>>> unused devices: <none>
```

A questo punto il disco malfunzionante è pronto per essere sostituito da un tecnico nel datacenter e, a intervento ultimato, non resta che risincronizzare il RAID. Per effettuare questa operazione, consulta la guida [Configurare un RAID software](https://docs.ovh.com/it/dedicated/raid-software/){.external}.

### Con Windows

#### Step 1: individua il disco malfunzionante

Le operazioni descritte in questa guida partono dal presupposto che l’utente abbia ricevuto un messaggio di alert per il disco `/dev/sdb` che, a causa di un malfunzionamento, richiede la sostituzione a caldo. **Ricordati di sostituire i valori generici indicati nella procedura con le informazioni corrispondenti.**

> [!primary]
>
> Per evitare errori è importante avviare il terminale come amministratore.
> 

Per prima cosa, verifica il **Serial Number** del disco in questione. **Nella schermata mostrata qui sotto, lo storage non è realmente danneggiato, ma faremo finta che lo sia.**

![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}

La risposta restituita al comando eseguito mostra che: 

- il disco **SDB** è fuori servizio a causa di errori non corretti (uncorrected errors)
- Il **Serial Number** coincide con quello dell’alert ricevuto (inviato dal datacenter o altri strumenti di monitoraggio)

#### Step 2: recupera la collocazione del disco

A questo punto è necessario identificare lo **Slot ID** e l’**Enclosure ID** del disco. Per recuperare queste informazioni utilizza il tool <b>sas2ircu</b> installato sul server.

Per prima cosa, identifica l’ID della scheda LSI.

![id_lsi_windows](images/id_lsi_windows.png){.thumbnail}

Nel nostro esempio il valore dell’index (e quindi dell’ID) della scheda LSI è pari a  0.

Con questa informazione è possibile recuperare, tramite il **Serial Number**, lo **Slot ID** e l'**Enclosure ID** del disco.

![select-string](images/select-string.png){.thumbnail}

Questo comando permette di visualizzare le informazioni del disco, il cui **Serial Number** è K4GW439B.

Nel nostro esempio, abbiamo recuperato l'**Enclosure ID** (corrispondente a 1) e lo  Slot ID  (corrispondente a 1).

#### Step 3: accendi il disco

Con le informazioni recuperate negli step precedenti, accendi il LED del disco da sostituire utilizzando il comando `./sas2ircu 0 locate EncID:SlotID on` (ricordati di sostituire i valori generici “EncID” e “SlotID” con le informazioni recuperate precedentemente):

![locate](images/locate.png){.thumbnail}

Per disattivare la spia lampeggiante del disco, esegui il comando precedente sostituendo “on” con “off”.

#### Step 4: rimuovi dal RAID il disco malfunzionante

Questa operazione può essere effettuata dall’interfaccia **Gestione disco** del server Windows.

A questo punto il disco malfunzionante è pronto per essere sostituito da un tecnico nel datacenter e, a intervento ultimato, non resta che risincronizzare il RAID. Per effettuare questa operazione, consulta la guida [Configurare un RAID software](https://docs.ovh.com/it/dedicated/raid-software/){.external}.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.