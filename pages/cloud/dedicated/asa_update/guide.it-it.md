---
title: 'Aggiornare il Firewall CISCO ASA'
excerpt: 'Scopri come aggiornare il tuo Firewall CISCO ASA'
slug: aggiornare-firewall-cisco-asa
section: 'Uso avanzato'
---

> [!primary]
> **End of support for the Cisco ASA Firewall feature on dedicated servers**
>
> OVHcloud announces the end of its support for the Cisco ASA Firewall feature for dedicated servers. More information is available on [this page](https://docs.ovh.com/gb/en/dedicated/cisco-asa-eol/).
>

**Ultimo aggiornamento: 24/08/2018**

## Obiettivo

Per proteggere in maniera ottimale il tuo sistema è necessario aggiornare regolarmente il tuo Firewall CISCO Adaptive Security Appliance (ASA) con le ultime patch. In questo modo potrai evitare eventuali vulnerabilità di sicurezza.

**Questa guida ti mostra come effettuare l’aggiornamento del Firewall CISCO ASA.**


## Prerequisiti

- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}


## Procedura

### Disattivare il Firewall Cisco ASA dallo Spazio Cliente

La procedura di aggiornamento richiede diversi riavvii: per tale motivo, ti consigliamo di disattivare il Firewall Cisco ASA per non rendere il server indisponibile durante questo processo. 

Accedi al tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Dedicato`{.action}, scegli il tuo server dedicato e poi `Firewall Cisco ASA`{.action}. Infine clicca a destra su `Disattiva il Firewall Cisco ASA`{.action}.

![Disattivazione di Cisco ASA](images/customer_panel_asa_disable.png){.thumbnail} 

### Registra la configurazione

#### Primo metodo: via ASDM

Connettiti al Cisco Adaptive Security Device Manager (o ASDM), poi scegli `File`{.action} e `Save Running Configuration to Flash`{.action}:

![Registrazione della configurazione via ASDM](images/asa1.jpg){.thumbnail}


#### Secondo metodo: via SSH

Connettiti al Firewall Cisco ASA utilizzando il protocollo SSH:

```sh
user@desk:~$ ssh adminovh@IP_ASA

adminovh@IP_ASAs password:
Try help or ‘?’ for a list of available commands. 

asa12345>en
Password: ********
```

Quindi digita il seguente comando:

```sh
asa12345# write memory

Buinding configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```

### Salvare la configurazione

Crea un file locale, ad esempio `backupAsa.txt`. Quindi, connettiti via ASDM e vai su `Tools`{.action} e poi su `Backup Configurations`{.action}. 

![Salvare la configurazione via ASDM 1](images/asa2.jpg){.thumbnail} 

Nel menu contestuale che appare, scegli il file locale che hai precedentemente creato (con `Browse Local...`{.action}) poi salva la configurazione cliccando su `Backup`{.action}.

![Salvare la configurazione via ASDM 2](images/asa3.jpg){.thumbnail}


### Riavvia il Firewall Cisco ASA

Questo step è importante poiché è necessario assicurarsi che il Cisco ASA funzioni e sia accessibile dopo un semplice riavvio. 

#### Primo metodo: via ASDM

Connettiti al Cisco Adaptive Security Device Manager, poi scegli `Tools`{.action} e `System Reload...`{.action}

![Riavviare il firewall ASA via ASDM 1](images/asa5.jpg){.thumbnail}

Per un riavvio immediato, nella finestra che appare seleziona in `Reload Start Time`{.action} > `Now`{.action} > `Schedule Reload`{.action}. 

![Riavviare il firewall Cisco ASA via ASDM 2](images/asa6.jpg){.thumbnail}

![Riavviare il firewall Cisco ASA via ASDM 3](images/asa7.jpg){.thumbnail}

#### Secondo metodo: via SSH

Connettiti in SSH al Firewall Cisco ASA e inserisci il comando `reload`{.action}: 

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system 

***
*** --- SHUTDOWN NOW ---
```

Il riavvio per ricaricare la configurazione richiederà alcuni minuti.


### Riattiva il Firewall Cisco ASA dallo Spazio Cliente

Come per il primo step, accedi al tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Dedicato`{.action}. Dopodiché seleziona il tuo server dedicato, poi `Firewall Cisco ASA`{.action}. Infine clicca a destra su `Attivare il Firewall Cisco ASA`{.action}.

![Attivazione del firewall Cisco ASA. ](images/customer_panel_asa_enable.png){.thumbnail}

Dopo il riavvio, quando il Firewall Cisco ASA è avviato, verifica che tutti i servizi sul tuo server funzionino correttamente e passa allo step successivo. Se dovessi riscontrare problemi, effettua le adeguate verifiche per risolvere i malfunzionamenti prima di passare agli step successivi. 

### Disattiva nuovamente il Firewall ASA dallo Spazio Cliente

A questo punto è necessario disattivare il Firewall ASA come al primo step.

Accedi al tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, nella sezione `Dedicato`{.action}, scegli il tuo server dedicato, poi `Firewall Cisco ASA`{.action}. Infine clicca a destra su `Attivare il firewall Cisco ASA.`{.action}.

![Disattivazione di Cisco ASA](images/customer_panel_asa_disable.png){.thumbnail}


### Verifica il file binario utilizzato attualmente

#### Primo metodo: via ASDM

Connettiti al Cisco Adaptive Security Device Manager e vai su `Device Information`{.action}, infine su `General`{.action}. Qui troverai le versioni del Cisco ASA e del ASDM che stai usando. Ti consigliamo di annotarle e conservarle.  

![Verificare i file binari via ASDM](images/asa9.jpg){.thumbnail}


#### Secondo metodo: via SSH

Connettiti in SSH e inserisci il comando seguente:

```sh
asa12345# sh run | i bin

boot system disk0:/asa847-30-k8.bin
asdm image disk0:/asdm-771.bin
```

- boot system : la versione del Firewall ASA
- asdm image: la versione del Firewall ASDM


### Verifica il file binario da utilizzare

Per trovare il file binario da utilizzare, fai riferimento alla seguente tabella: 

|Versione attuale ASA|Prima versione verso la quale effettuare l’aggiornamento|In seguito aggiornare verso|
|---|---|---|
|8.2(x) e precedenti|8.4(6)|9.1(3) o superiore|
|8.3(x)|8.4(6)|9.1(3) o superiore|
|Fino a -8.4%|8.4(6) fino a 8.4(4)|9.1(3) o superiore|
|8.4(5+)|Nessuna|9.1(3) o superiore|
|8.5(1)|9.0(2+)|9.1(3) o superiore|
|8.6(1)|9.0(2+)|9.1(3) o superiore|
|9.0(1)|9.0(2+)|9.1(3) o superiore|
|9.0(2+)|Nessuna|9.1(3) o superiore|
|9.1(1)|9.1(2)|9.1(3) o superiore|
|9.1(2+)|Nessuna|9.1(3) o superiore|
|9.2(x)|Nessuna|9.2(2) o superiore|

Ad esempio, se il tuo ASA è su una versione 8.4(2), bisognerà prima aggiornare il sistema verso la versione 8.4(6), successivamente aggiornare verso 8.4(7+) o 9.2+.

Per ulteriori informazioni fai riferimento alla [guida Cisco](https://www.cisco.com/c/en/us/td/docs/security/asa/upgrade/asa-upgrade.html){.external}.

> [!primary]
>
> Per i Firewall Cisco ASA con 256 MB di memoria, ti consigliamo di aggiornare solo fino alla versione 8.4(x). Le versioni 9.1(x) e 9.2(x) utilizzeranno quasi tutta la memoria disponibile ancora prima di avviarsi. 
>

Ci sono due metodi per verificare la versione che stai utilizzando: 

- In SSH con questo comando:

```sh
asa12345# sh ver| i RAM

Hardware: ASA5505, 512 MB RAM, CPU CPU Geode 500 MHz
```

- Con ASDM, selezionando `Tools`{.action} e poi `Command Line Interface...`{.action}:

![Verifica la versione del binario nell’ASDM 1](images/asa10.jpg){.thumbnail}

![Verifica la versione del binario nell’ASDM 2](images/asa11.jpg){.thumbnail}


### Rimuovi i file binari inutilizzati

Prima di aggiungere i nuovi file binari, conviene eliminare quelli vecchi. 

#### Primo metodo: via ASDM

Connettiti al Cisco Adaptive Security Device Manager. Poi vai su `Tools`{.action} e clicca su `File Management...`{.action}. 

![Rimuovere i file binari inutilizzati nell’ASDM 1](images/asa12.jpg){.thumbnail}

Dopodiché elimina i file binari (.bin) inutilizzati. A questo punto nel disco resterà solo un file per ASA e uno per ASDM.

![Rimuovere i file binari inutilizzati nell’ASDM 2](images/asa13.jpg){.thumbnail}


#### Secondo metodo: via SSH

Connettiti in SSH al tuo ASA, poi rimuovi i file dopo averli listati: 

```sh
asa12345# sh flash: | i bin

128 26995116 Apr 18 2017 23:55:52 asdm-771.bin
144 23016144 Dec 12 2016 14:35:07 asdm-721-150.bin
138 25214976 Nov 18 2017 23:29:54 asa847-30-k8.bin
```

```sh
asa12345# delete flash:asdm-781-150.bin

Delete filename [asdm-721-150.bin]?
Delete disk0:/asdm-721-150.bin?[confirm]
```

### Aggiungi e installa i file binari ASDM

#### Primo metodo: via ASDM

Connettiti al Cisco Adaptive Security Device Manager. Dopodiché vai su `Tools`{.action} e clicca su `Upgrade Software from Local Computer...`{.action}.

![Aggiungere e installare i file binari ASDM tramite ASDM 1](images/asa14.jpg){.thumbnail}

Nella schermata successiva seleziona:

- *Image to upload*:  ASDM
- *Local File Patch*: digita `Browse Local Files`{.action} e scegli la tua versione dal file binario dell’ASDM

Infine convalida la tua scelta cliccando su `Upload Image`{.action} e clicca su `Yes`{.action} per confermare che quest’immagine diventi l’immagine di avvio. 

![Aggiungere e installare i file binari ASDM via  ASDM 2. ](images/asa15.jpg){.thumbnail}

![Aggiungere e installare i file binari ASDM via ASDM 3. ](images/asa16.jpg){.thumbnail}


#### Secondo metodo: via SSH

Prima di iniziare, è necessario archiviare il file binario su un server FTP. Successivamente, puoi configurare il Firewall ASA in SSH e salvarne la configurazione: 

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin flash:asdm-781.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Delete filename [asdm-781.bin]?

Destination filename [asdm-781.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asdm-781.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
25025404 bytes copied in 41.690 secs (610375 bytes/sec)
```

```sh
asa12345# conf t

asa12345(config)#asdm image disk0:/asdm-781.bin
asa12345(config)# end

asa12345# write memory
```

### Aggiungi e installa i nuovi file binari ASA

#### Primo metodo: via ASDM

Connettiti al Cisco Adaptive Security Device Manager. Vai su `Tools`{.action} e clicca su `Upgrade Software from Local Computer...`{.action}.

![Aggiungere e installare i file binari ASA via ASDM 1](images/asa14.jpg){.thumbnail}

Nella schermata successiva seleziona:

- *Image to upload*: ASA
- *Local File Patch*: clicca su `Browse Local Files` e scegli la tua versione dal file binario ASA

 
Per confermare la tua scelta clicca su `Upload Image`{.action}, quindi clicca su `Yes`{.action} per confermare che quest’immagine diventerà l’immagine di avvio. 

![Aggiungere e installare i file binari ASA via ASDM 2](images/asa18.jpg){.thumbnail}

![Aggiungere e installare i file binari ASA via ASDM 3](images/asa20.jpg){.thumbnail}


#### Secondo metodo: via SSH

Connettiti in SSH e inserisci i comandi seguenti:

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin flash:asa-924.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Delete filename [asdm-924.bin]?

DestinDestination filename [asdm-924.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asdm-924.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
28057462 bytes copied in 46.270 secs (609345 bytes/sec)

asa12345# conf t

asa12345(config)#asdm image disk0:/asdm-924.bin

asa12345(config)# end

asa12345# write memory
```

### Riavvia il Firewall Cisco ASA

Questo step è importante poiché è necessario assicurarsi che il Cisco ASA funzioni e sia accessibile dopo un semplice riavvio. 

#### Primo metodo: via ASDM

Connettiti al Cisco Adaptive Security Device Manager. Seleziona `Tools`{.action} e poi `System Reload...`{.action}:

![Riavviare il firewall ASA via ASDM 1](images/asa5.jpg){.thumbnail}

Per un riavvio immediato, nella finestra che appare seleziona in Reload Start Time: `Now`{.action}, Ora clicc su `Schedule Reload`{.action}: 

![Riavviare il firewall Cisco ASA via ASDM 2](images/asa6.jpg){.thumbnail}

![Riavviare il firewall Cisco ASA via ASDM 3](images/asa7.jpg){.thumbnail}


#### Secondo metodo: via SSH

Connettiti in SSH al Firewall Cisco ASA e digita il comando `reload`: 

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system 

***
*** --- SHUTDOWN NOW ---
```

Il riavvio per ricaricare la configurazione richiederà alcuni minuti.


> [!warning]
>
> Se a questo step non riesci ad aggiungere il file binario di ASA, riavvia il sistema per aggiornare ASDM, quindi rimuovi il binario ASDM inutilizzato per liberare spazio. 
> 
> Solo dopo potrai aggiornare l'immagine binario ASA, seguendo la procedura precendentemente descritta. 
>


### Correggi la configurazione

Durante l’aggiornamento di Cisco ASA dalle versioni precedenti alla 8.4.6, dopo il riavvio troverai questa nuova configurazione: 

```sh
asa12345# sh run | i permit-

no arp permit-nonconnected
```


È necessario correggere la configurazione come segue:

```sh
asa12345# conf t
asa12345(config)#aarp permit-nonconnected
asa12345(config)# end
asa12345# write memory

Buinding configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```

![Firewall Cisco ASA aggiornato](images/asa10.jpg){.thumbnail}

![Firewall Cisco ASA aggiornato](images/asa23.jpg){.thumbnail}



### Riattiva il Firewall Cisco ASA dallo Spazio Cliente

Come per il primo step, accedi al tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Dedicato`{.action}. In seguito seleziona il tuo server dedicato, poi `Firewall Cisco ASA`{.action}. Infine clicca a destra su `Attiva il firewall Cisco ASA`{.action}.

![Attivazione del firewall Cisco ASA](images/customer_panel_asa_enable.png){.thumbnail}


Il tuo ASA è ora aggiornato.

![Firewall Cisco ASA aggiornato](images/asa22.jpg){.thumbnail}


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}.