---
title: Aktualizace kernelu na dedikovaném serveru
excerpt: Zjistěte, jak aktualizovat jádro operačního systému
slug: aktualizace-kernelu-dedikovany-server
section: Pokročilé použití
---

**Poslední aktualizace 01/02/2018**

## Cíl

OVH Vám nabízí možnost snadné aktualizace kernelu Vaší linuxové distribuce prostřednictvím služby *netboot*. Nicméně i přesto může být výhodné udržovat kernel systémové distribuce (OS) aktuální i na Vašem pevném disku.

**V této příručce se dozvíte, jak na aktualizaci svého kernelu.**

> [!warning]
>
> Společnost OVH Vám dává k dispozici stroje, za jejichž správu nesete plnou odpovědnost.  Společnost OVH není administrátorským subjektem těchto strojů a nedisponuje žádnými přístupovými právy. Z toho důvodu spočívá zajištění každodenní správy softwaru a zabezpečení stroje pouze na Vás. 
> Tato příručka slouží jako asistent pro zvládání těch nejběžnějších úkonů spojených se správou Vašeho serveru. Pokud narazíte na jakékoli potíže či pochybnosti ohledně správy, použití nebo zabezpečení svého serveru, obraťte se prosím na profesionálního serverového administrátora.
>

## Prerekvizity

- Root přístup k serveru (SSH).
- Záloha dat (pro pomoc se zálohováním dat se obraťte na oficiální dokumentaci své systémové distribuce).

## Postup

### Identifikace kernelu

Za účelem zjištění aktuální verze Vašeho kernelu zadejte následující příkaz:

```sh
uname -a
```

Příklad:

```sh
uname -a

4.09.76-xxxx-std-ipv6-64
```

V tomto případě je verze kernelu *4.09.76-xxxx-std-ipv6-64*\*.

### Aktualizace kernelu

#### Fáze 1: umístění do správného adresáře

Image kernelu musí být umístěn do následujícího adresáře:

```sh
cd /boot
```

#### Fáze 2: stažení image

Aniž by bylo zapotřebí rekompilovat kernel, stáhněte příslušnou verzi bzImage (ideálně tu nejnovější). Image naleznete na následující adrese: <ftp://ftp.ovh.net/made-in-ovh/bzImage/>. 

Kernely jsou monolitické, což znamená, že veškerý kód běží v jednom paměťovém prostoru (nejsou zde brány v úvahu moduly jako CEPH, NBD ZFS a další).

Vraťme se nyní zpět k našemu příkladu. Verze našeho kernelu je následující: **4.09.76-xxxx-std-ipv6-64**.

Nyní je tedy zapotřebí stáhnout příslušný image zadáním následujícího příkazu:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/bzImage/4.14.13/bzImage-4.14.13-xxxx-std-ipv6-64
```

#### Fáze 3: aktualizace bootovacího programu (GRUB)

Nyní aktualizujte bootovací program (GRUB) zadáním následujícího příkazu:

```sh
update-grub
```

Vrátí se Vám následující výstup:

```sh
Generating grub configuration file ...
done
```

> [!primary]
>
> Nyní zkontrolujte, zda se ve Vaší konfiguraci nachází následující soubor (nezbytný k provedení aktualizace): `06_OVHkernel`. Přítomnost souboru můžete ověřit zadáním následujícího příkazu:
>
> `ls /etc/grub.d/`
>

#### Fáze 4: restart serveru

Aby provedené úpravy mohly vstoupit v platnost, je zapotřebí restartovat server:

```sh
reboot
```

### Návrat do předchozího stavu

Pokud dojde k chybné manipulaci či neočekávané chybě, je možné vrátit se do předchozího stavu. Za tímto účelem je nutné server restartovat v režimu rescue. Následně je zapotřebí připojit systém zadáním následujících příkazů:

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> V našem případě je root (nebo lomítko `/`) pojmenován jako *md1*. Název se však může v jednotlivých případech lišit. Pro ověření názvu stačí zadat následující příkaz:
>
> `fdisk`nebo `lsblk`
>

```sh
mount -o rbind /dev /mnt/dev
```

```sh
mount -t proc proc /mnt/proc
```

```sh
mount -t sysfs sys /mnt/sys
```

```sh
chroot /mnt
```

Následně přejděte do adresáře `/boot` a odstraňte naposledy nainstalované soubory (příkaz `rm`). V našem případě je zapotřebí zadat příkaz v následujícím formátu:

```sh
rm bzImage-4.14.13-xxxx-std-ipv6-64
```

Následně je opět zapotřebí aktualizovat bootovací systém:

```sh
update-grub
```

Nakonec opusťte režim rescue (restart z disku) a proveďte softwarový restart pomocí následujícího příkazu:

```sh
reboot
```

### Ověření aktualizace

Jakmile je update dokončen, ověřte nově nainstalovanou verzi kernelu zadáním následujícího příkazu:

```sh
uname –r
```

> [!primary]
>
> Pokud jde o ochranu před nedávnými exploity Meltdown a Spectre, obraťte se na oficiální stránky vydavatele Vaší systémové distribuce a ověřte si, zda je nová verze Vašeho kernelu proti těmto hrozbám zabezpečena.
>
> V případě potřeby existuje hned několik nástrojů (například tento: <https://github.com/speed47/spectre-meltdown-checker>), které Vám umožní zjistit, zda je Vámi používaný kernel zranitelný, či nikoli.
>
> **Společnost OVH nemůže ručit za spolehlivost jakýchkoli externích nástrojů. Odpovědnost za jejich využití spadá na administrátora služby.**
>

## Kam dál

[Režim rescue](https://docs.ovh.com/fr/dedicated/ovh-rescue/){.external}.

[Informace ohledně bezpečnostních hrozeb Meltdown a Spectre (EN)](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external}.

[Aktualizace v návaznosti na bezpečnostní hrozby Meltdown a Spectre (EN)](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external}.

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.