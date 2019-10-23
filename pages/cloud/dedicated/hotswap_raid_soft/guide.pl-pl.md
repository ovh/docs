---
title: 'Wymiana dysku bez wyłączania serwera – Programowa macierz RAID'
slug: hotswap-raid-soft
excerpt: 'Dowiedz się, jak przebiega wymiana dysku bez wyłączania serwera w programowej macierzy RAID'
section: 'RAID & dyski'
---

**Ostatnia aktualizacja z dnia 14-10-2019**

## Wprowadzenie

Jeśli jeden z dysków w serwerze jest niesprawny, możesz wymienić go bez wyłączania serwera, o ile dysponujesz serwerem dedykowanym z gamy HG.

**Dowiedz się, jak przebiega wymiana dysku bez wyłączania serwera w programowej macierzy RAID.**

## Wymagania początkowe

- Posiadanie serwera mHG, HG lub BHG
- Posiadanie programowej macierzy RAID (z kartą LSI)
- Dostęp SSH (Linux) lub RDP (Windows)
- Instalacja narzędzia „sas2ircu” (skorzystaj z wyszukiwarki [Broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external}, aby je znaleźć)

## W praktyce

### Linux

#### Etap 1: rozpoznanie dysku, który ma zostać wymieniony

Otrzymałeś alert dotyczący dysku `/dev/sdb`. Jest on niesprawny i chcesz go wymienić bez wyłączenia serwera. **Wykorzystaj z tego przewodnika sekcje, które odpowiadają Twojemu przypadkowi.**

Rozpocznij od przetestowania dysku i sprawdzenia jego numeru seryjnego (**Serial Number **) danego dysku.

```sh
root@ns3054662:/home# smartctl -a /dev/sdb
>>> smartctl 6.4 2014-10-07 r4002 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)
>>> Copyright (C) 2002-14, Bruce Allen, Christian Franke, www.smartmontools.org

>>> === START OF INFORMATION SECTION ===
>>> Vendor:               HGST
>>> Product:              HUS726040ALS210
>>> Revision:             A907
>>> Compliance:           SPC-4
>>> User Capacity:        4,000,787,030,016 bytes [4.00 TB]
>>> Logical block size:   512 bytes
>>> LB provisioning type: unreported, LBPME=0, LBPRZ=0
>>> Rotation Rate:        7200 rpm
>>> Form Factor:          3.5 inches
>>> Logical Unit id:      0x5000cca25d3155bc
>>> Serial number:        K4GW439B
>>> Device type:          disk
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

Stwierdzasz, że: 

- dysk **SDB** jest niesprawny ze względu na nieusunięte błędy („uncorrected errors”);
- jego **SErial Number** odpowiada numerowi podanemu w alercie (uzyskanym z centrum danych lub w narzędziu do monitoringu).

Aby otrzymać tylko **Serial Number**:

```sh
root@ns3054662:/home# smartctl -a /dev/sdb | grep Serial
>>> Serial number:        K4GW439B
```

#### Etap 2: określenie pozycji dysku

Odszukaj **Slot ID** i **Enclosure ID** danego dysku. W tym celu użyj zainstalowanego wcześniej na Twoim serwerze narzędzia „sas2ircu”.

Sprawdź, czy dyski są podłączone za pomocą karty LSI.

```sh
root@ns3054662:/home# lspci | grep -i LSI
>>> 81:00.0 Serial Attached SCSI controller: LSI Logic / Symbios Logic SAS2004 PCI-Express Fusion-MPT SAS-2 [Spitfire] (rev 03)
```

Jeśli tak jest, należy określić ID karty LSI.

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

Indeks odpowiada ID. W tym przypadku karta ma indeks/ID 0.

Korzystając z tych informacji, uzyskaj teraz następujące dane dotyczące dysku (przy użyciu **Serial Number**): **Slot ID** oraz **Enclosure ID**.

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

Komenda ta pozwala uzyskać informacje o dysku, w tym **Serial Number** - w tym przypadku: K4GW439B.

W naszym przykładzie zidentyfikowaliśmy zatem **Enclosure ID** (odpowiadające 1) oraz **Slot ID** (odpowiadające 3).

#### Etap 3: oznaczenie dysku dla technika

Włącz diodę LED niesprawnego dysku za pomocą polecenia `./sas2ircu 0 locate EncID:SlotID on`. Dostosuj polecenie do Twojego przypadku, jak w poniższym przykładzie:

```sh
root@ns3054662:/home# ./sas2ircu 0 locate 1:3 on
>>> LSI Corporation SAS2 IR Configuration Utility.
>>> Version 5.00.00.00 (2010.02.09)
>>> Copyright (c) 2009 LSI Corporation. All rights reserved.

>>> SAS2IRCU: LOCATE Command completed successfully.
>>> SAS2IRCU: Command LOCATE Completed Successfully.
>>> SAS2IRCU: Utility Completed Successfully.
```

Można wyłączyć miganie diody dysku, zastępując „on” przez „off” w poleceniu.

#### Etap 4: usunięcie niesprawnego dysku z macierzy RAID

Jeśli jeszcze tego nie zrobiłeś, przełącz status niesprawnego dysku na **Faulty**. Następnie sprawdź stan macierzy RAID.

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

W tym przykładzie niesprawny dysk jest częścią md1 i md2 (sdb1 i sdb2). Zmienimy więc jego status na **Faulty**, odpowiednio sdb1 w md1 i sdb2 w md2.

```sh
root@ns3054662:/home# mdadm --manage /dev/md1 --set-faulty /dev/sdb1
>>> mdadm: set /dev/sdb1 faulty in /dev/md1
```

```sh
root@ns3054662:/home# mdadm --manage /dev/md2 --set-faulty /dev/sdb2
>>> mdadm: set /dev/sdb2 faulty in /dev/md2
```

Po wykonaniu tych operacji sprawdź ponownie stan macierzy RAID.

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

Sdb1 i sdb2 mają status zmieniony na „faulty” **(F)**. Teraz możesz usunąć dysk z macierzy RAID.

```sh
root@ns3054662:/home# mdadm --manage /dev/md1 --remove /dev/sdb1
>>> mdadm: hot removed /dev/sdb1 from /dev/md1
```

```sh
root@ns3054662:/home# mdadm --manage /dev/md2 --remove /dev/sdb2
>>> mdadm: hot removed /dev/sdb2 from /dev/md2
```

Na koniec upewnij się, czy dysk nie jest już widoczny w macierzy.

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

Niesprawny dysk jest teraz gotowy do wymiany przez technika w centrum danych. Po wykonaniu operacji zsynchronizuj ponownie macierz RAID. Zanim do tego przystąpisz, zapoznaj się z dokumentacją: [Programowa macierz RAID](https://docs.ovh.com/pl/dedicated/raid-soft/){.external}.

### Windows

#### Etap 1: rozpoznanie dysku, który ma zostać wymieniony

Otrzymałeś alert dotyczący dysku `/dev/sdb`. Jest on niesprawny i chcesz go wymienić bez wyłączenia serwera. **Wykorzystaj z tego przewodnika sekcje, które odpowiadają Twojemu przypadkowi.**

> [!primary]
>
> Pamiętaj, aby uruchomić terminal komend jako administrator. W przeciwnym razie wyświetli się błąd.
> 

Rozpocznij od przetestowania dysku i sprawdzenia jego numeru seryjnego (**Serial Number **) danego dysku. Na poniższym zrzucie, dysk nie jest tak naprawdę niesprawny, ale będziemy postępować tak, jak gdyby był niesprawny.

![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}

Stwierdzasz, że: 

- dysk **SDB** jest niesprawny ze względu na nieusunięte błędy („uncorrected errors”);
- jego **SErial Number** odpowiada numerowi podanemu w alercie (uzyskanym z centrum danych lub w narzędziu do monitoringu).

#### Etap 2: określenie pozycji dysku

Odszukaj **Slot ID** i **Enclosure ID** danego dysku. W tym celu użyj zainstalowanego wcześniej na Twoim serwerze narzędzia „sas2ircu”.

Najpierw ustal ID karty LSI.

![id_lsi_windows](images/id_lsi_windows.png){.thumbnail}

W tym przypadku karta ma indeks/ID 0.

Korzystając z tych informacji, uzyskaj teraz następujące dane dotyczące dysku (przy użyciu **Serial Number**): **Slot ID** oraz **Enclosure ID**.

![select-string](images/select-string.png){.thumbnail}

Komenda ta pozwala uzyskać informacje o dysku, w tym **Serial Number** \- w tym przypadku: K4G187WB.

W naszym przykładzie zidentyfikowaliśmy zatem **Enclosure ID** (odpowiadające 1) oraz **Slot ID** (odpowiadające 1).

#### Etap 3: oznaczenie dysku dla technika

Włącz diodę LED niesprawnego dysku za pomocą polecenia `./sas2ircu 0 locate EncID:SlotID on`. Dostosuj polecenie do Twojego przypadku, jak w poniższym przykładzie:

![locate](images/locate.png){.thumbnail}

Można wyłączyć miganie diody dysku, zastępując „on” przez „off” w poleceniu.

#### Etap 4: usunięcie niesprawnego dysku z macierzy RAID

Przeprowadź tę operację w interfejsie **Zarządzanie dyskami** na serwerze Windows.

Niesprawny dysk jest teraz gotowy do wymiany przez technika w centrum danych. Po wykonaniu operacji zsynchronizuj ponownie macierz RAID. Zanim do tego przystąpisz, zapoznaj się z dokumentacją: [Programowa macierz RAID](https://docs.ovh.com/pl/dedicated/raid-soft/){.external}.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.