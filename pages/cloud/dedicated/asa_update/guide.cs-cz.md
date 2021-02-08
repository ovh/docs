---
deprecated: true
title: 'Aktualizace firewallu CISCO ASA'
excerpt: 'Zjistěte, jak aktualizovat svůj CISCO ASA firewall'
slug: aktualizace-firewallu-cisco-asa
section: 'Pokročilé použití'
---

**Poslední aktualizace 11/04/2018**

## Cíl

Pro zajištění optimální úrovně zabezpečení Vašeho systému je potřeba provádět pravidelné aktualizace firewallu Cisco Adaptive Security appliance (ASA). Pouze tak se lze účinně bránit případným bezpečnostním hrozbám.

Zjistěte, jak aktualizovat svůj Cisco ASA firewall.

## Prerekvizity

- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.


## Postup

### Deaktivace firewallu Cisco ASA prostřednictvím Zákaznického prostoru OVH

V průběhu aktualizace se zařízení několikrát restartuje. Z toho důvodu doporučujeme Cisco ASA firewall nejdříve deaktivovat, a zabránit tak případné nedostupnosti serveru v průběhu aktualizačního procesu.

Za účelem deaktivace firewallu přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, sekce `Dedicated`{.action}. V levém postranním panelu vyberte požadovaný server a přejděte do záložky `Cisco ASA firewall`{.action}. Následně klikněte na tlačítko `Deaktivovat Cisco ASA firewall`{.action} v pravé části obrazovky.

![Deaktivace Cisco ASA](images/customer_panel_asa_disable.png){.thumbnail}

### Aplikace konfigurace

#### První způsob: prostřednictvím ASDM

Připojte se k ASDM (Cisco Adaptive Security Device Manager), klikněte na `File`{.action} a následně vyberte `Save Running Configuration to Flash`{.action}:

![Aplikace konfigurace ASDM](images/asa1.jpg){.thumbnail}

#### Druhý způsob: prostřednictvím SSH

Připojte se k ASA prostřednictvím protokolu SSH:

```sh
user@desk:~$ ssh adminovh@IP_ASA

adminovh@IP_ASAs password:
Type help or '?' for a list of available commands.

asa12345> en
Password: ********
```

Poté zadejte následující příkaz:

```sh
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```

### Uložení konfigurace

Vytvořte lokální soubor, například `backupAsa.txt`. Následně se připojte k ASDM, otevřete záložku `Tools`{.action}, a vyberte možnost `Backup Configurations`{.action}.

![Uložení konfigurace prostřednictvím ASDM 1](images/asa2.jpg){.thumbnail}

V dialogovém okně nahrajte lokální soubor (pomocí tlačítka `Browse Local...`{.action}) a uložte konfiguraci kliknutím na tlačítko `Backup`{.action}.

![Uložení konfigurace prostřednictvím ASDM 2](images/asa3.jpg){.thumbnail}

### Restart ASA

Tento krok je důležitý, neboť je zapotřebí se ujistit, že Cisco ASA firewall funguje a je dostupný i po restartu.

#### První způsob: prostřednictvím ASDM

Připojte se k ASDM (Cisco Adaptive Security Device Manager), klikněte na `Tools`{.action} a následně vyberte `System Reload...`{.action}:

![Restart ASA prostřednictvím ASDM ](images/asa5.jpg){.thumbnail}

Pro okamžitý restart služby vyberte v sekci `Reload Start Time` možnost `Now`{.action} a klikněte na `Schedule Reload`{.action}.

![Restart ASA prostřednictvím ASDM 2](images/asa6.jpg){.thumbnail}

![Restart ASA prostřednictvím ASDM 3](images/asa7.jpg){.thumbnail}


#### Druhý způsob: prostřednictvím SSH

Připojte se k ASA prostřednictvím protokolu SSH a zadejte následující příkaz: `reload`

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

Restart pro obnovení konfigurace může trvat několik minut.

### Reaktivace firewallu Cisco ASA prostřednictvím Zákaznického prostoru OVH

Stejně jako v první fázi přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, sekce `Dedicated`{.action}. V levém postranním panelu vyberte požadovaný server a přejděte do záložky `Cisco ASA firewall`{.action}. Následně klikněte na tlačítko `Aktivovat Cisco ASA firewall`{.action} v pravé části obrazovky.

![Aktivace Cisco ASA](images/customer_panel_asa_enable.png){.thumbnail}

Po dokončení restartu zkontrolujte funkčnost služeb na daném serveru. Pokud vše funguje jak má, přejděte k další části této příručky. V případě jakýchkoli potíží proveďte veškerá opatření nezbytná k odstranění vzniklých dysfunkcí.

### Opětovná deaktivace firewallu Cisco ASA prostřednictvím Zákaznického prostoru OVH

Nyní je zapotřebí provést opětovnou deaktivaci firewallu Cisco ASA.

Za účelem deaktivace firewallu přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, sekce `Dedicated`{.action}. V levém postranním panelu vyberte požadovaný server a přejděte do záložky `Cisco ASA firewall`{.action}. Následně klikněte na tlačítko `Aktivovat Cisco ASA firewall`{.action} v pravé části obrazovky.

![Deaktivace Cisco ASA](images/customer_panel_asa_disable.png){.thumbnail}

### Ověření aktuálně používaného binárního souboru

#### První způsob: prostřednictvím ASDM

Připojte se k ASDM (Cisco Adaptive Security Device Manager), klikněte na `Device Information`{.action} a následně přejděte do záložky `General`{.action}. Na tomto místě jsou uvedeny informace o aktuálně používaných verzích ASA a ASDM. Tyto informace si poznamenejte.

![Ověření binárního souboru ASDM](images/asa9.jpg){.thumbnail}

#### Druhý způsob: prostřednictvím SSH

Připojte se k ASA prostřednictvím protokolu SSH a zadejte následující příkaz:

```sh
asa12345# sh run | i bin

boot system disk0:/asa847-30-k8.bin
asdm image disk0:/asdm-771.bin
```

- *boot system* : la version de l'ASA
- *asdm image* : la version de l'ASDM

### Zjistěte, jaký binární soubor má být používán

Požadované informace naleznete v následující tabulce:

|Aktuální verze ASA|První požadovaná aktualizace|Poslední požadovaná aktualizace|
|---|---|---|
|8.2(x) nebo starší|8.4(6)|9.1(3) nebo novější|
|8.3(x)|8.4(6)|9.1(3) nebo novější|
|8.4(1) až 8.4(4)|8.4(6) ou 9.0(2+)|9.1(3) nebo novější|
|8.4(5+)|Žádná|9.1(3) nebo novější|
|8.5(1)|9.0(2+)|9.1(3) nebo novější|
|8.6(1)|9.0(2+)|9.1(3) nebo novější|
|9.0(1)|9.0(2+)|9.1(3) nebo novější|
|9.0(2+)|Žádná|9.1(3) nebo novější|
|9.1(1)|9.1(2)|9.1(3) nebo novější|
|9.1(2+)|Žádná|9.1(3) nebo novější|
|9.2(x)|Žádná|9.2(2) nebo novější|

Příklad: pokud používáte ASA verzi 8.4(2), budete muset nejdříve provést aktualizaci na verzi 8.4(6) a následně na 8.4(7+) nebo 9.2+.

Detailní informace naleznete [oficiální dokumentaci Cisco](https://www.cisco.com/c/en/us/td/docs/security/asa/migration/upgrade/upgrade.html){.external}.

> [!primary]
>
> V případě Cisco ASA firewallu s 256 MB paměti doporučujeme aktualizovat pouze na verzi 8.4(x). Verze 9.1(x) a 9.2(x) zaberou téměř veškerou dostupnou paměť ještě předtím, než se spustí.
>

Informace o aktuálně používané verzi lze získat následujícími způsoby:

- Prostřednictvím SSH příkazu:

```
asa12345# sh ver| i RAM

Hardware: ASA5505, 512 MB RAM, CPU CPU Geode 500 MHz
```

- Prostřednictvím ASDM, záložka `Tools`{.action}, funkce `Command Line Interface...`{.action}:

![Ověření verze binárního souboru v ASDM 1](images/asa10.jpg){.thumbnail}

![Ověření verze binárního souboru v ASDM 2](images/asa11.jpg){.thumbnail}

### Odstranění nepoužívaných binárních souborů

Před přidáním nových binárních souborů je zapotřebí odstranit ty staré.

#### První způsob: prostřednictvím ASDM
Připojte se k ASDM (Cisco Adaptive Security Device Manager), klikněte na `Tools`{.action} a následně vyberte  `File Management...`{.action}. 

![Odstranění nepoužívaných binárních souborů v ASDM 1](images/asa12.jpg){.thumbnail}

Odstraňte nepoužívané binární soubory (*.bin*). Nyní by Vám na disku měl zbýt pouze jeden soubor pro ASA a jeden pro ASDM.

![Odstranění nepoužívaných binárních souborů v ASDM 2](images/asa13.jpg){.thumbnail}

#### Druhý způsob: prostřednictvím SSH

Připojte se k ASA prostřednictvím protokolu SSH a zadejte následující příkaz:

```sh
asa12345# sh flash: | i bin

128 26995116 Apr 18 2017 23:55:52 asdm-771.bin
144 23016144 Dec 12 2016 14:35:07 asdm-721-150.bin
138 25214976 Nov 18 2017 23:29:54 asa847-30-k8.bin
```

```sh
asa12345# delete flash:asdm-781-150.bin

Delete filename [asdm-721-150.bin]?
Delete disk0:/asdm-721-150.bin? [confirm]
```

### Připojení a instalace binárních souborů ASDM

#### První způsob: prostřednictvím ASDM

Připojte se k ASDM (Cisco Adaptive Security Device Manager), klikněte na `Tools`{.action} a následně vyberte `Upgrade Software from Local Computer...`{.action}. 

![Připojení a instalace binárních souborů ASDM v ASDM 1](images/asa14.jpg){.thumbnail}

V dialogovém okně vyberte:

- *Image to upload*: ASDM
- *Local File Patch*: klikněte na `Browse Local Files`{.action} a vyberte svou verzi binárního souboru ASDM.

Potvrďte kliknutím na tlačítko `Upload Image`{.action}. Následně klikněte na YES, čímž potvrdíte, že daný soubor má sloužit jako boot image.

![Připojení a instalace binárních souborů ASDM v ASDM 2](images/asa15.jpg){.thumbnail}

![Připojení a instalace binárních souborů ASDM v ASDM 3](images/asa16.jpg){.thumbnail}

#### Druhý způsob: prostřednictvím SSH

Binární server nejdříve nahrajte na FTP server. Následně nakonfigurujte ASA prostřednictvím SSH a konfiguraci uložte.

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin flash:asdm-781.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asdm-781.bin]?

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

asa12345(config)# asdm image disk0:/asdm-781.bin
asa12345(config)# end

asa12345# write memory
```

### Připojení a instalace nových binárních souborů ASA

#### První způsob: prostřednictvím ASDM

Připojte se k ASDM (Cisco Adaptive Security Device Manager), klikněte na `Tools`{.action} a následně vyberte `Upgrade Software from Local Computer...`{.action}. 

![Připojení a instalace binárních souborů ASA v ASDM 1](images/asa14.jpg){.thumbnail}

V dialogovém okně vyberte:

- *Image to upload*: ASA
- *Local File Patch*: klikněte na `Browse Local Files`{.action} a vyberte svou verzi binárního souboru ASA.

Potvrďte kliknutím na tlačítko `Upload Image`{.action}. Následně klikněte na YES, čímž potvrdíte, že daný soubor má sloužit jako boot image.

![Připojení a instalace binárních souborů ASA v ASDM 2](images/asa18.jpg){.thumbnail}

![Připojení a instalace binárních souborů ASA v ASDM 3](images/asa20.jpg){.thumbnail}

#### Druhý způsob: prostřednictvím SSH

Připojte se k ASA prostřednictvím protokolu SSH a zadejte následující příkaz:

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin flash:asa-924.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asdm-924.bin]?

Destination filename [asa-924.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asa-924.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
28057462 bytes copied in 46.270 secs (609345 bytes/sec)

asa12345# conf t

asa12345(config)# asdm image disk0:/asa-924.bin

asa12345(config)# end

asa12345# write memory
```
 
### Restart ASA

Tento krok je důležitý, neboť je zapotřebí se ujistit, že Cisco ASA firewall funguje a je dostupný i po restartu.

#### První způsob: prostřednictvím ASDM

Připojte se k ASDM (Cisco Adaptive Security Device Manager), klikněte na `Tools`{.action} a následně vyberte `System Reload...`{.action}: 

![Restart ASA prostřednictvím ASDM ](images/asa5.jpg){.thumbnail}

Pro okamžitý restart služby vyberte v sekci `Reload Start Time` možnost Now a klikněte na Schedule Reload. 

![Restart ASA prostřednictvím ASDM 2](images/asa6.jpg){.thumbnail}

![Restart ASA prostřednictvím ASDM 3](images/asa7.jpg){.thumbnail}

#### Druhý způsob: prostřednictvím SSH

Připojte se k ASA prostřednictvím protokolu SSH a zadejte následující příkaz: `reload`

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

Restart pro obnovení konfigurace může trvat několik minut.

> [!warning]
>
> Pokud v této fázi nemůžete přidat binární soubor ASA, restartujte systém pro aktualizaci ASDM. Následně odstraňte nepoužívaný binární soubor ASDM pro uvolnění místa na disku.
> 
> Následně aktualizujte binární soubor ASA.
>

### Oprava konfigurace

Pokud aktualizujete ASA z verze starší než 8.4.6, zobrazí se po restartu služby následující konfigurace:

```sh
asa12345# sh run | i permit-

no arp permit-nonconnected
```

Konfiguraci upravte následujícím způsobem:

```sh
asa12345# conf t
asa12345(config)# aarp permit-nonconnected
asa12345(config)# end
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```

![Firewall Cisco ASA po aktualizaci](images/asa10.jpg){.thumbnail}

![Firewall Cisco ASA po aktualizaci](images/asa23.jpg){.thumbnail}

### Reaktivace firewallu Cisco ASA prostřednictvím Zákaznického prostoru OVH

Stejně jako v první fázi přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, sekce `Dedicated`{.action}. V levém postranním panelu vyberte požadovaný server a přejděte do záložky `Cisco ASA firewall`{.action}. Následně klikněte na tlačítko `Aktivovat Cisco ASA firewall`{.action} v pravé části obrazovky.

![Aktivace Cisco ASA](images/customer_panel_asa_enable.png){.thumbnail}

Váš Cisco ASA firewall je nyní aktuální.

![Firewall Cisco ASA po aktualizaci](images/asa22.jpg){.thumbnail}

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.