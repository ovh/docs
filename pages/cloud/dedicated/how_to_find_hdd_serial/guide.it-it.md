---
title: 'Recuperare il numero di serie di un hard disk'
slug: recuperare-numero-di-serie-disco
excerpt: 'Come conoscere il numero di serie di un disco per effettuarne la sostituzione'
section: 'RAID e dischi'
---

**Ultimo aggiornamento: 05/08/2019**

## Obiettivo

Per ridurre al minimo il rischio di errore durante la sostituzione di un hard disk, chiediamo ai nostri clienti di fornirci il numero di serie del disco da sostituire. Nella maggior parte dei casi, è possibile recuperare l'informazione testando in autonomia gli hard disk con il programma **Smartmontools**.

**Questa guida ti mostra come recuperare il numero di serie di un hard disk per richiederne la sostituzione.**


## Prerequisiti

- Disporre di un [server dedicato OVH](https://www.ovh.it/server_dedicati/){.external}
- Avere accesso al server via SSH con l’utente root
- Su server Windows, aver installato l’utility **sas2ircu** (distribuita da [Broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external})


## Procedura

> [!primary]
>
> Per i dischi NVMe è necessario attivare sul server la modalità [Rescue64](https://docs.ovh.com/it/dedicated/rescue_mode/){.external} e utilizzare il tool preinstallato **nvme-cli**.
> 

### Recupera il numero di serie di un disco con RAID software

Per conoscere il numero di serie di un hard disk con configurazione softRAID è sufficiente utilizzare il comando `smartctl`:

```sh
smartctl -a /dev/sdX | grep "Serial"
```


La periferica viene rilevata dal sistema operativo (ad esempio `/dev/sda`, `/dev/sdb`, ecc...).


### Recupera il numero di serie di un disco NVMe

Per i dischi NVMe il comando da eseguire è `nvme list`:

```sh
root@rescue:~# nvme list

Node          SN                  Model                Namespace  Usage                      Format   FW Rev
/dev/nvme0n1  CVPF636600YC450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
/dev/nvme1n1  CVPF6333002Y450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
```

Il risultato restituito contiene i numeri di serie dei diversi dischi NVMe (`nvme0` e `nvme1`).


### Recupera il numero di serie di un disco con Windows

La procedura da seguire per Windows è simile a quella per Linux. In questa guida utilizzeremo l’utility **sas2ircu** con gli stessi comandi eseguiti su Linux.

> [!primary]
>
> Per evitare errori, è necessario eseguire il comando via terminale come amministratore.
> 

Per conoscere il numero di serie di un disco con configurazione softRAID è necessario utilizzare il comando `smartctl`:

```sh
# .\smartctl -a /dev/sdX
```


La periferica viene rilevata dal sistema operativo e mostrata in questo modo: `/dev/sda`, `/dev/sdb`, ecc...

![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}

### Recupera il numero di serie di un disco con RAID hardware

Per maggiori informazioni relativamente ai comandi da utilizzare e a come eseguire test sugli hard disk, consulta [questa guida](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} (in inglese).


#### Controller MegaRaid

##### Step 1: identifica i volumi RAID

Prima di recuperare il numero di serie dei dischi con `smartctl`, è necessario sapere quanti volumi RAID (o dischi virtuali) si trovano sul server.

È possibile ottenere l’informazione eseguendo questo comando:

```sh
# MegaCli -LDInfo -Lall -aALL | egrep 'Adapter|Size' | grep -v Strip

Adapter 0

Virtual Drive Information: Size: 36.321 GB

Adapter 1

Virtual Drive Information: Size: 2.727 TB
```

Nell’esempio, sul server sono configurati due RAID (**Adapter 0** e **Adapter 1**) che dovrebbero essere associati a `/dev/sda` e `/dev/sdb`.


##### Step 2: recupera le informazioni relative ai dischi

A questo punto riunisci le informazioni relative al disco fisico utilizzando questo comando:

```sh
MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g'

Slot Number: 0
Device id: 4
Raw Size: 279.460 GB [0x22eec130 Sectors]
Firmware state: Online, Spun Up
Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355

Slot Number: 1
Device id: 5
Raw Size: 279.460 GB [0x22eec130 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355

Slot Number: 2
Device id: 7
Raw Size: 2.728 TB [0x15d50a3b0 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70

Slot Number: 3 
Device id: 6 
Raw Size: 2.728 TB [0x15d50a3b0 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70
```

##### Step 3: recupera il numero di serie

Una volta che si dispone dell’ID della periferica e dell’Adapter, è possibile utilizzare questi valori per indicare a `smartctl` quale disco cercare e in quale volume RAID.

Il comando da eseguire è di questo tipo:

```sh
smartctl -d megaraid,N -a /dev/sdX | grep "Serial"
```

L’ID della periferica RAID verrà mostrato in questo modo: `/dev/sda` = 1° RAID, `/dev/sdb` = 2° RAID, ecc...


> [!primary]
>
> È anche possibile che il risultato restituito sia di questo tipo:
> 
> ```
> /dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'
> ```
> 
> In questo caso è necessario sostituire `megaraid` con `sat+megaraid`:
>
> ```
> smartctl -d sat+megaraid,N -a /dev/sdX | grep "Serial"
> ```
>

#### Recupera il numero di serie del disco (Controller RAID LSI)

Il controller RAID LSI utilizza un modulo chiamato `sg-map`, che associa le periferiche in `/dev/sgX` (dove "X" corrisponde al numero della periferica).

Per identificare quale hard disk corrisponde alle diverse periferiche _sg_, consulta [questa guida](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} (in inglese).

Una volta individuato quale dispositivo _sg_ è associato all’hard disk che intendi analizzare, utilizza il comando:

```sh
smartctl -a /dev/sgX | grep "Serial"
```

Il numero del dispositivo _sg_ verrà mostrato in questo modo: `/dev/sg0`, `/dev/sg1`, ecc...


## Per saperne di più

[Sostituire un disco difettoso](https://docs.ovh.com/it/dedicated/sostituzione-disco/){.external}

[Configurare un RAID software](https://docs.ovh.com/it/dedicated/raid-software){.external}

[Configurare un RAID hardware](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} (in inglese)

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.