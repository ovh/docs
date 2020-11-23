---
deprecated: true
title: 'Změna hesla root na linuxovém dedikovaném serveru'
slug: zmena-hesla-root-dedikovany-server-linux
excerpt: 'Zjistěte, jak změnit heslo uživatele root na dedikovaném serveru s operačním systémem Linux'
section: 'Diagnostika a režim rescue'
---

**Poslední aktualizace 27/08/2018**

## Cíl

Při instalaci či reinstalaci systémové distribuce dochází k automatickému vygenerování hesla pro root přístup k Vašemu serveru. Z důvodů popsaných v naší příručce [Zabezpečení dedikovaného serveru](https://docs.ovh.com/cz/cs/dedicated/zabezpeceni-dedikovany-server/){.external} důrazně doporučujeme vygenerované heslo co nejdříve změnit. Rovněž se může stát, že své heslo jednoduše zapomenete a budete ho potřebovat obnovit.

**Zjistěte, jak změnit heslo uživatele root na dedikovaném serveru s operačním systémem Linux.**


## Prerekvizity

* [Dedikovaný server](https://www.ovh.cz/dedikovane_servery/){.external} s linuxovou systémovou distribucí.
* SSH root přístup k serveru.
* Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.


## Postup

### Změna hesla uživatele root

Připojte se ke svému serveru prostřednictvím zabezpečeného protokolu SSH (příkazový řádek) a zadejte následující příkaz:

```sh
passwd
```

Zadejte a potvrďte nové heslo:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> Mějte prosím na paměti, že v případě linuxové distribuce se při psaní hesla **zadávané znaky nezobrazují**.
>

### Změna zapomenutého hesla

#### Fáze 1: identifikace systémového oddílu

Po aktivaci [režimu rescue](https://docs.ovh.com/cz/cs/dedicated/ovh-rescue/){.external} je zapotřebí identifikovat systémový oddíl. Za tímto účelem použijte následující příkaz:

```sh
fdisk -l

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

V našem případě jsme hledaný oddíl identifikovali jako `/dev/hda1`. 

> [!primary]
>
> Pokud na svém serveru máte nakonfigurován softwarový RAID, budete zapotřebí připojit celý RAID rozsah (obecně `/dev/mdX`). 
>

#### Fáze 2: připojení systémového oddílu

Zadejte následující příkaz:

```sh
mount /dev/hda1 /mnt/
```

#### Fáze 3: modifikace root oddílu

Systémový oddíl je ve výchozím nastavení uzamčen a nelze na něm provádět žádné úpravy. Z toho důvodu je ho nejdříve zapotřebí odemknout pro „write“ přístup. Učinit tak můžete pomocí následujícího příkazu:

```sh
chroot /mnt
```

#### Fáze 4: změna hesla root

Nyní je heslo možné změnit prostřednictvím následujícího příkazu:

```sh
passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Jakmile dokončíte potřebné úpravy, změňte výchozí netboot serveru zpět na `Bootování z pevného disku`{.action} a proveďte restart. Vaše heslo je nyní úspěšně změněno.


## Kam dál

[Aktivace a použití režimu rescue](https://docs.ovh.com/cz/cs/dedicated/ovh-rescue/){.external}.

[Změna administrátorského hesla Windows na dedikovaném serveru](https://docs.ovh.com/cz/cs/dedicated/zmena-hesla-admin-windows/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.