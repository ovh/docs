---
title: 'Sostituire un disco difettoso'
slug: sostituzione-disco
excerpt: 'Scopri come individuare un disco difettoso e chiederne la sostituzione'
section: 'RAID e dischi'
---

**Ultimo aggiornamento: 12/07/2018**

## Obiettivo

Se riscontri un malfunzionamento del disco oppure il nostro sistema ti ha inviato una notifica tramite email per avvisarti del problema su un disco, è necessario prendere i provvedimenti necessari per sostituirlo il prima possibile.

**Questa guida ti mostra come identificare un disco difettoso e come richiederne la sostituzione al nostro team.**

> [!warning]
>
> OVHcloud mette a tua disposizione macchine di cui tu sei responsabile. Non avendo accesso a queste macchine, non siamo noi gli amministratori e pertanto non possiamo fornirti alcuna assistenza. È responsabilità dell'utente garantire ogni giorno la gestione e la sicurezza del software.
> 
> Mettiamo questa guida a tua disposizione per aiutarti con le attività più comuni. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
> 


## Prerequisiti

- Avere un [server dedicato OVHcloud](https://www.ovh.it/server_dedicati/){.external}
- Avere l’accesso amministratore (*root*) al server via SSH


## Procedura

### Effettua il backup dei dati

Prima di fare qualsiasi cosa **è necessario effettuare un backup dei dati**. L’unico scopo di un RAID, a eccezione del RAID 0, è di proteggere i tuoi dati contro il malfunzionamento dei dischi. Una volta che un disco è inutilizzabile, tutti i tuoi dati dipendono dalla salute dei dischi rimanenti.

Anche se è raro che due dischi diventino difettosi contemporaneamente, questa eventualità non è impossibile.
Nessun disco verrà sostituito senza che tu abbia prima confermato quanto segue:

-	di aver effettuato il backup dei dati
-	di accettare la potenziale perdita dei dati come conseguenza della sostituzione del disco


### Rilevamento di un disco difettoso

Se ricevi un alert via email o noti qualsiasi segno di malfunzionamento, è fondamentale verificare che tutti i dischi funzionino correttamente. Nel caso in cui due dischi che fanno parte dello stesso RAID presentino dei malfunzionamenti, procederemo come prima cosa alla sostituzione di quello che possiede il maggior numero di errori.

#### Server con RAID software

Se possiedi un server che dispone di un RAID software, fai riferimento alla guida [Software RAID](https://docs.ovh.com/it/dedicated/raid-software/){.external} per trovare i dischi installati sul tuo server.

Una volta individuato il percorso per accedere ai dischi, puoi testarli utilizzando il comando `smartctl` come segue:

```sh
smartctl -a/dev/sdX
```

> [!primary]
>
> Non dimenticare di sostituire `/dev/sdX` con il percorso di accesso al tuo disco, come ad esempio sdA, sdB, ecc...
> 

Questo comando ti permetterà inoltre di recuperare il numero di serie (*Serial Number*) del o dei dischi da sostituire, così potrai comunicarli al tecnico.

Ecco un esempio del risultato:

```sh
smartctl -a/dev/sda

>>> smartctl 5..41 2011-06-09 r3365 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)                                                                                          
>>> Copyright (C) 2002-11 by Bruce Allen, http://smartmontools.sourceforge.net

>>> === START OF INFORMATION SECTION ===
>>> Device Model:     TOSHIBA DT01ACA050
>>> Serial Number:    5329T58NS
>>> LU WWN Device Id: 5 000039 ff6d28993
>>> Firmware Version: MS1OA750
>>> User Capacity:    500 107 862 016 bytes [500 GB]
>>> Sector Sizes:     512 bytes logical, 4096 bytes physical
>>> Device is:        Not in smartctl database [fors details use: -P showall]
>>> ATA Version is:   8
>>> ATA Standard is:  ATA-8-ACS revision 4
>>> Local Time is:    Thu Nov 24 15:51:25 2016 CET
>>> SMART support is: Available - device has SMART capability.
>>> SMART support is: Enabled
```

Nel nostro caso, la riga importante è la seguente:

**`Serial Number:    5329T58N`**

#### Server con RAID hardware

Se il tuo server dispone di un RAID hardware, fai riferimento alla guida (in inglese) [Hardware RAID - EN](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} e segui la procedura relativa al tuo tipo di controller RAID per trovare i percorsi di accesso ai tuoi dischi.

Una volta individuato il percorso per accedere ai dischi, puoi testarli utilizzando il comando `smartctl` come segue:

```sh
smartctl -d megaraid, N -a /dev/sdX
```

> [!primary]
>
> Non dimenticare di sostituire /dev/sdX con il percorso di accesso al tuo disco, ad esempio sdA, sdB, ecc...
> 


> [!warning]
>
> In alcuni casi, puoi ricevere il seguente messaggio: `/dev/sda [megaraid_disk_00][SAT]: Device open changed type from ‘megaraid’ to ‘sat’`.
> 
> In questo caso sarà necessario sostituire `megaraid` con `sat+megaraid` come segue: `smartctl -d sat+megaraid,N -a /dev/sdX`.
> 

Per una scheda Raid LSI, puoi testare i dischi utilizzando il comando `smartctl` in questo modo:

```sh
smartctl -a /dev/sgY
```

È necessario precisare il numero del RAID (/dev/sg0 = 1er RAID, /dev/sg1 = 2e RAID, etc.)


#### Server con un disco NVMe

Nel caso di un disco NVME, è necessario mettere il server in modalità [Rescue mode](https://docs.ovh.com/it/dedicated/rescue_mode/){.external} dove il tool **nvme-cli** è installato di default.

Sarà quindi necessario utilizzare il comando `nvme list` per recuperare i numeri di serie dei dischi:

```sh
root@rescue:~# nvme list
>>>Node        SN               Model                          Namespace Usage                 Format      FW Rev
>>> -------------- ------------------- --------------------- --------- ------------------------- ------------- --------
>>> /dev/nvme0n1   CVPF636600YC450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
>>> /dev/nvme1n1   CVPF6333002Y450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
```


### Richiedi la sostituzione del disco

#### Sostituzione del disco a freddo (spegnimento del server necessario)

Per richiedere la sostituzione di un disco, basta creare un ticket presso il nostro team di assistenza direttamente dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/manager/dedicated/index.html#/ticket){.external}. Al fine di accelerare il processo, fornisci gli elementi collegati ai test. Di seguito, un riepilogo delle informazioni che dovrai fornire.

- **Il numero di serie del disco da sostituire e di tutti gli altri dischi funzionanti**. Per recuperare il numero di serie del disco da sostituire consulta [questa guida](https://docs.ovh.com/it/dedicated/recuperare-numero-di-serie-disco/){.external}. Se non è possibile recuperare il numero di serie del disco, è necessario farlo presente nel ticket e comunicarci il numero di serie del o dei dischi da non sostituire. 

Come anticipato, sono importanti i numeri di tutti i dischi in quanto verranno poi trasmessi al tecnico nel datacenter ed eviteranno un possibile errore durante l’operazione.

- **L data e l’ora di inizio dell’operazione**. È prevista una breve interruzione di servizio, ma puoi programmare l’operazione 24 ore su 24 - 7 giorni su 7.

- **La conferma che hai eseguito un backup dei tuoi dati e che accetti il potenziale rischio della loro perdita.**.


#### Sostituzione del disco a caldo (senza spegnere il server)

> [!primary]
>
> Questo tipo di sostituzione è possibile solo per i server [FS-MAX](https://www.ovh.it/server_dedicati/storage/1801fs05.xml){.external} e i server [Big-HG](https://www.ovh.it/server_dedicati/hg/1801bhg01.xml){.external} che dispongono di una scheda RAID.
> 

Nel caso di una sostituzione a caldo su un server con una scheda MegaRAID, ti sarà chiesto di far lampeggiare il LED del disco da sostituire una volta programmata l’operazione, al fine di facilitare il lavoro dei nostri team.

Se il tuo server dispone di una scheda MegaRAID, ecco i comandi da utilizzare:

- per avviare il lampeggiamento del LED:

```sh
MegaCli -PdLocate -start -physdrv[E0:S0] -a0
```

- per interrompere il lampeggiamento del LED:

```sh
MegaCli -PdLocate -start -physdrv[E0:S0] -a0
```

> [!primary]
>
> Equivalente tramite il comando `storcli`:
>
> - per avviare il lampeggiamento del LED:
>
> ```sh
> storcli /c0/e0/s0 start locate
> ```
>
> - per interrompere il lampeggiamento del LED:
>
> ```sh
> storcli /c0//e0/s0 stop locate
> ```
>


> [!primary]
>
> Oltre al lampeggiamento del LED, non dimenticare di specificare nel ticket di assistenza il numero di serie e lo *slot* del disco.
> 

### Una volta effettuata la sostituzione

Se possiedi un server con RAID hardware, il RAID si ricostruisce da sé. Poiché l’*auto-rebuild* è attiva di default, assicurati di non averla disattivata manualmente. Il processo di risincronizzazione può richiedere alcuni minuti e ridurre le performance di lettura/scrittura sul RAID.

Se possiedi un server con RAID software, ti consigliamo di risincronizzare i dischi manualmente. Per maggiori informazioni, consulta la documentazione in inglese sul [RAID software ](https://docs.ovh.com/it/dedicated/raid-software/).


## Per saperne di più

[RAID software](https://docs.ovh.com/it/dedicated/raid-software/)

[RAID hardware - EN](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external}

[Rescue Mode](https://docs.ovh.com/it/dedicated/rescue_mode/){.external}


Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.