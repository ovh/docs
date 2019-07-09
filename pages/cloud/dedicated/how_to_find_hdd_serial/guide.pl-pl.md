---
title: 'Ustalenie numeru seryjnego dysku twardego'
slug: ustalenie-numeru-seryjnego-dysku
excerpt: 'Dowiedz się, jak ustalić numer seryjny dysku, aby przystąpić do jego wymiany'
section: 'RAID & dyski'
---

**Ostatnia aktualizacja z dnia 03-07-2019**

## Wprowadzenie

Aby zminimalizować ryzyko błędu podczas wymiany dysku twardego, prosimy naszych klientów o podanie numeru seryjnego dysku przeznaczonego do wymiany. W większości przypadków numer seryjny możesz znaleźć, testując po kolei Twoje dyski twarde za pomocą narzędzia Smartmontools.

**Niniejszy przewodnik wyjaśnia, jak ustalić numer lub numery seryjne dysku/dysków.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovh.pl/serwery_dedykowane/){.external}
- Połączenie z serwerem przez SSH z uprawnieniami użytkownika root
- Instalacja narzędzia sas2ircu na serwerze Windows (znajdziesz je za pomocą wyszukiwarki [Broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external})

## W praktyce

> [!primary]
>
> W przypadku dysku NVMe konieczne jest uruchomienie serwera w trybie Rescue64 i użycie zainstalowanego domyślnie na serwerze narzędzia „nvme-cli”.
> 

### Ustalenie numeru seryjnego dysku w przypadku programowej macierzy RAID

Aby ustalić numer seryjny Twojego dysku twardego w przypadku konfiguracji programowej macierzy RAID, możesz użyć smartctl:

```sh
smartctl -a /dev/sdX | grep Serial Serial Number:    XXXXXXX
```

Urządzenie jest wykrywane przez system operacyjny, na przykład `/dev/sda`, `/dev/sdb`, etc. 

### Ustalenie numeru seryjnego dysku NVMe

W przypadku dysków NVMe konieczne jest zastosowanie polecenia `nvme list`:

```sh
root@rescue:~# nvme list

Node          SN                  Model                Namespace  Usage                      Format   FW Rev
/dev/nvme0n1  CVPF636600YC450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
/dev/nvme1n1  CVPF6333002Y450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
```

Po wpisaniu polecenia będziesz mógł odczytać numery seryjne Twoich dysków NVMe: `nvme0` i `nvme1`.

### Ustalenie numeru seryjnego dysku (Windows)

Instrukcja postępowania dla systemu Windows jest podobna do tej dla dystrybucji Linux. Użyj narzędzia sas2ircu i tych samych poleceń, które zastosowałeś w przypadku systemu Linux.

> [!primary]
>
> Aby uniknąć błędów, uruchom terminal poleceń z prawami administratora.
> 

W celu ustalenia numeru seryjnego w macierzy programowej RAID zastosuj następujące polecenie:

```sh
# .\smartctl -a /dev/sdX Serial Number: 1234567890
```

Urządzenie zostanie wykryte przez system operacyjny i będzie się wyświetlało w następujący sposób: `/dev/sda`, `/dev/sdb`, etc.

![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}


### Ustalenie numeru seryjnego dysku w przypadku sprzętowej macierzy RAID

Szczegółowy opis poleceń oraz sposobu testowania dysków twardych znajdziesz w tym [przewodniku (kontroler RAID LSI)](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external}.


#### Kontroler MegaRaid

##### Etap 1: ustalenie liczby zestawów RAID

Możesz znaleźć numery seryjne dysków, wpisując polecenie `smartctl`. Przed uruchomieniem polecenia sprawdź, ile zestawów RAID (lub wirtualnych dysków) znajduje się na Twoim serwerze.

Informację tę można uzyskać za pomocą polecenia:

```sh
# MegaCli -LDInfo -Lall -aALL | egrep 'Adapter|Size' | grep -v Strip

Adapter 0

Virtual Drive Information: Size: 36.321 GB

Adapter 1

Virtual Drive Information: Size: 2.727 TB
```

W powyższym przykładzie na serwerze znajdują się dwie skonfigurowane macierze RAID: „Adapter 0” i „Adapter 1”. Macierze RAID powinny być zmapowane na `/dev/sda` i `/dev/sdb`.


##### Etap 2: ustalenie informacji dotyczących dysków

Uzyskaj informacje dotyczące fizycznego dysku, używając następującego polecenia:

```sh
# MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g'

Slot Number: 0
Device Id: 4
Raw Size: 279.460 GB [0x22eec130 Sectors]
Firmware state: Online, Spun Up
Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355

Slot Number: 1
Device Id: 5
Raw Size: 279.460 GB [0x22eec130 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355

Slot Number: 2
Device Id: 7
Raw Size: 2.728 TB [0x15d50a3b0 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70

Slot Number: 3 
Device Id: 6 
Raw Size: 2.728 TB [0x15d50a3b0 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70
```

##### Etap 3: ustalenie numeru seryjnego 

Numery ID urządzenia i adaptera używane są do wskazania narzędziu smartctl, którego dysku ma poszukiwać w zestawie RAID.

Należy użyć polecenia podobnego do poniższego:

```sh
# smartctl -d megaraid,N -a /dev/sdX | grep Serial Serial Number: 1234567890
```

Numer ID urządzenia RAID będzie się wyświetlał w następujący sposób: `/dev/sda` = 1er RAID, `/dev/sdb` = 2e RAID, etc.


> [!primary]
>
> W niektórych sytuacjach możesz uzyskać taki wynik:
> 
> ```
> /dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'
> ```
> 
> Zastąp wówczas `megaraid` wpisem `sat+megaraid`:
>
> ```
> smartctl -d sat+megaraid,N -a /dev/sdX | grep Serial Serial Number:    1234567890
> ```
>

#### Ustalenie numeru seryjnego dysku (kontroler RAID LSI)

Kontroler RAID LSI korzysta z modułu o nazwie `sg-map`, który mapuje urządzenia na `/dev/sgX` (gdzie X to numer określający urządzenie).

Możesz skorzystać z [tego przewodnika (kontroler RAID LSI)](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external}, aby określić, który dysk twardy odpowiada oznaczonemu urządzeniu „sg”.

Po odnalezieniu urządzenia „sg” powiązanego z dyskiem twardym, który chcesz przeanalizować, zastosuj następujące polecenie:

```sh
# smartctl -a /dev/sgX | grep Serial Serial Number:    1234567890
```

Numer urządzenia „sg” będzie się wyświetlał w następujący sposób: `/dev/sg0`, `/dev/sg1`...



## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.