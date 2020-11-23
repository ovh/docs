---
deprecated: true
title: 'Aktivace a použití režimu rescue'
slug: ovh-rescue
excerpt: 'Zjistěte, jak pracovat s režimem rescue na dedikovaném serveru OVH'
section: 'Diagnostika a režim rescue'
---

**Poslední aktualizace 20/08/2018**

## Cíl

Režim rescue umožňuje spuštění serveru s dočasným operačním systémem, a to za účelem diagnostiky a následné opravy problémů vzniklých při manipulaci se serverem v běžném režimu. 

**V této příručce se dozvíte, jak pracovat s režimem rescue na dedikovaném serveru OVH.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/UdMZSgXATFU?ecver=2" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Prerekvizity

- SSH (root) přístup k [dedikovanému serveru](https://www.ovh.cz/dedikovane_servery/){.external}.


## Postup

Režim rescue lze aktivovat prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager/){.external}. V sekci `Dedicated`{.action} přejděte do `základního administračního rozhraní`{.action} svého dedikovaného serveru. V tabulce `Základní informace`{.action} klikněte na ikonku tří teček u kolonky`Boot`{.action} a vyberte možnost `Upravit`{.action}.

![Upravit netboot](images/rescue-mode-01.png){.thumbnail}

Následně změňte výchozí netboot na `režim rescue`{.action}. Objeví se pole se seznamem dostupných režimů rescue. Pokud na svém serveru máte nainstalován operační systém Linux, vyberte `rescue64-pro`{.action}. Pokud používáte operační systém Windows, zvolte možnost `WinRescue`{.action}. Nakonec zadejte svou e-mailovou adresu a klikněte na tlačítko `Další`{.action}.

![Režim rescue](images/rescue-mode-03.png){.thumbnail}.

Zkontrolujte zadané údaje a klikněte na tlačítko `Schválit`{.action}.

![Restart serveru](images/rescue-mode-02.png){.thumbnail}

Váš server bude restartován do režimu rescue. Na uvedenou e-mailovou adresu obdržíte přístupové údaje. Pro deaktivaci režimu rescue stačí výchozí netboot opětovně změnit na `bootování z pevného disku`{.action}.

### Linux

#### Požití webového rozhraní

Po restartu serveru obdržíte e-mail s přístupovými údaji k režimu rescue. Tento e-mail zároveň obsahuje i odkaz pro připojení k webovému rozhraní režimu rescue, v jehož rámci můžete provádět následující testy:

- Pevné disky: ověření integrity pevných disků pomocí testů SMART
- Procesory: ověření normální funkčnosti CPU
- Diskové oddíly (stav): ověření stavu diskových oddílů
- Diskové oddíly (souborový systém): ověření souborového systému serveru
- Diskové oddíly (explore): spuštění průzkumníka souborů. Tento nástroj neumožňuje provádět úpravy souborů, s jeho pomocí však lze vytvářet zálohy.
- Paměť: ověření paměti RAM.

![Režim rescue webové rozhraní](images/rescue-mode-04.png){.thumbnail}

#### Použití SSH (příkazový řádek)


> [!primary]
> 
> Pokud používáte SSH klíč (lze aktivovat prostřednictvím Zákaznického prostoru OVH), nebude Vám po restartu serveru zasláno žádné přístupové heslo. Jakmile bude Váš server restartován do režimu rescue, budete se moci připojit napřímo prostřednictvím svého SSH klíče.
>

Po restartu serveru obdržíte e-mail s přístupovými údaji k režimu rescue. K serveru se připojte obvyklým způsobem prostřednictvím příkazového řádku (v tomto případě však zadejte přístupové heslo pro režim rescue, které jste obdrželi v rámci informačního e-mailu).

Příklad:

```sh
ssh root@IP_de_votre_serveur
root@*IP_du_serveurs*'s password:
```

Většina změn prováděných na serveru prostřednictvím SSH v režimu rescue vyžaduje připojení diskového oddílu. Je tomu tak z toho důvodu, že režim rescue disponuje svým vlastním souborovým systémem, v důsledku čehož budou všechny změny v souborovém systému po restartu do standardního režimu ztraceny. 

Diskové oddíly lze připojit prostřednictvím příkazu `mount`. Nejdříve je však zapotřebí získat seznam dostupných oddílů, na jehož základě lze následně připojit požadovaný oddíl. Podívejte se prosím na následující příklad:

```sh
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

Jakmile máte k dispozici přesný název oddílu, který si přejete připojit, můžete tak učinit pomocí následujícího příkazu:

```sh
rescue:~# mount /dev/hda1 /mnt/
```

> [!primary]
>
> Po připojení oddílu můžete začít provádět změny v souborovém systému. 
> 
> Pokud na svém serveru máte nakonfigurován softwarový RAID, budete zapotřebí připojit celý RAID rozsah (obecně `/dev/mdX`).
>


### Windows

#### Přístup k WinRescue

Po restartu serveru obdržíte e-mail s přístupovými údaji k režimu rescue. Pro připojení je zapotřebí stáhnout a nainstalovat VNC konzoli nebo použít `IPMI modul` v [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager/){.external}.

![Winrescue Windows](images/rescue-mode-06.png){.thumbnail}

#### Nástroje WinRescue

|Nástroj|Popis|
|---|---|
|Freecommander|Správce souborů disponující všemi standardními funkcemi.|
|NTPWdi|Přehledný a snadno ovladatelný správce hesel, dovolující resetovat či upravovat přístupová hesla k uživatelským účtům na Vašem serveru.  Tento nástroj se hodí zejména v případě ztráty přístupových údajů nebo nutnosti reaktivace bezpečnostního účtu.|
|FileZilla|Open source FTP klient, podporující SSH a SSL protokoly a nabízející intuitivní „drag&drop“ uživatelské rozhraní.  Může být použit pro upload dat na FTP server (například FTP zálohy podporované většinou modelů dedikovaných serverů OVH).|
|7-ZIP|Nástroj pro kompresi a archivaci souborů, podporující následující formáty: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR a Z. Tento nástroj zároveň umožňuje vytvářet vlastní archivy, a to v následujících formátech: BZIP2, GZIP, TAR, WIM, XZ, Z a ZIP.|
|Avast Virus Cleaner|Antivirový program se schopností skenování a čistění souborů.|
|ActivNIC|Nástroj umožňující opětovnou aktivaci síťové karty.|
|SRVFirewall|Skript pro aktivaci či deaktivaci firewallu na Vašem serveru.|
|SysInternal|Balíček nástrojů Microsoft pro údržbu sítě, správu procesů apod.|
|Virtual Clone Drive|Nástroj pro připojení souborů ISO, BIN a CCD do virtuální CD mechaniky.|
|Firefox|Webový prohlížeč.|
|Testdisk|Výkonná aplikace pro obnovu dat. Testdisk umožňuje provádět obnovu a modifikace poškozených oddílů, vyhledání ztracených oddílů, opravy bootovacích sektorů a rekonstrukce defektního MBR.|

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.