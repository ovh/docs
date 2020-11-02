---
deprecated: true
title: 'Aktualizace kernelu na dedikovaném serveru'
slug: aktualizace-kernelu-dedikovany-server
excerpt: 'Zjistěte, jak aktualizovat OVH jádro na své distribuci'
section: 'Pokročilé použití'
---

**Poslední aktualizace 23/08/2018**

## Cíl

Dedikované servery OVH lze snadno nabootovat do Linuxového operačního systému pomocí *síťového netboot* (jádro aktualizováno společností OVH a aktuální při každém spuštění serveru). Doporučujeme však (a jde o osvědčenou praktiku) updatovat jádro přímo na operačním systému nainstalovaném na serveru.

**Zjistěte, jak aktualizovat OVH jádro na své distribuci.**

Ve výchozím stavu používají všechny systémové obrazy nabízené na dedikovaných serverech OVH optimalizované jádro OVH. V případě nahrazení těchto obrazů vlastní systémovou distribucí se obraťte na oficiální dokumentaci vydavatele příslušné distribuce.


> [!warning]
>
> Společnost OVH Vám dává k dispozici stroje, za jejichž správu nesete plnou odpovědnost. Společnost OVH není administrátorským subjektem těchto strojů a nedisponuje žádnými přístupovými právy. Z toho důvodu spočívá zajištění každodenní správy softwaru a zabezpečení stroje pouze na Vás. 
> 
> Tato příručka slouží jako průvodce aktualizačním procesem kernelu na dedikovaném serveru. Pokud narazíte na jakékoli potíže či pochybnosti ohledně správy, použití nebo zabezpečení svého serveru, obraťte se prosím na profesionálního serverového administrátora.
>


## Prerekvizity

- [Dedikovaný server OVH](https://www.ovh.cz/dedikovane_servery/){.external}.
- SSH root přístup k serveru.
- Záloha dat (pro pomoc se zálohováním dat se obraťte na oficiální dokumentaci své systémové distribuce).


## Postup

### Identifikace kernelu

Za účelem zjištění aktuální verze svého kernelu zadejte následující příkaz:

```sh
uname -r
```

Příklad:

```sh
uname -r

4.09.76-xxxx-std-ipv6-64
```

Verze kernelu je v tomto případě následující: **4.09.76-xxxx-std-ipv6-64**.

### Aktualizace kernelu pomocí balíčků OVH

V případě Debian a RedHat distribucí je kernel instalován pomocí správce balíčků.


#### Fáze 1: aktualizace kernelu

V případě Debian distribucí zadejte následující příkaz:

```sh
apt-get update && apt-get dist-upgrade
```

V případě RedHat distribucí zadejte následující příkaz:

```sh
yum update
```

#### Fáze 2: restart serveru

Aby provedené změny mohly vstoupit v platnost, je nejdříve zapotřebí provést restart serveru:

```sh
reboot
```


### Aktualizace kernelu bez použití balíčků OVH

#### Fáze 1: umístění do správného adresáře

Image kernelu musí být umístěn do následujícího adresáře:

```sh
cd /boot
```

#### Fáze 2: stažení image

Aniž by bylo zapotřebí rekompilovat kernel, stáhněte příslušnou verzi bzImage (ideálně tu nejnovější). Image naleznete na následující adrese: <https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/>. 

Kernely jsou monolitické, což znamená, že celý kód běží v jednom paměťovém prostoru (nejsou zde brány v úvahu moduly jako CEPH, NBD ZFS a další). 

Vraťme se nyní k našemu příkladu. Aktuální verze našeho kernelu je: **4.09.76-xxxx-std-ipv6-64**.

Nyní je zapotřebí stáhnout příslušný image zadáním následujícího příkazu:

```sh
wget https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/4.9.118/313405/bzImage/4.9.118-xxxx-std-ipv6-64/bzImage-4.9.118-xxxx-std-ipv6-64
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
> Zkontrolujte, zda se ve Vaší konfiguraci nachází následující soubor (nezbytný k provedení aktualizace): `06_OVHkernel`. Ověření lze provést zadáním následujícího příkazu:
>
> `ls /etc/grub.d/`
>

#### Fáze 4: restart serveru

Aby provedené změny mohly vstoupit v platnost, je nejdříve zapotřebí provést restart serveru:

```sh
reboot
```

### Návrat do původního stavu

Pokud dojde k chybné manipulaci či neočekávané chybě, je možné vrátit se do původního stavu. Za tímto účelem je nutné server restartovat do [režimu rescue](https://docs.ovh.com/cz/cs/dedicated/ovh-rescue/){.external}. Následně je zapotřebí připojit systém zadáním následujících příkazů:

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> V našem případě je root adresář (nebo lomítko `/`) pojmenován jako *md1*. Název se však může v jednotlivých případech lišit. Pro ověření názvu stačí zadat následující příkaz:
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
rm bzImage-4.9.118-xxxx-std-ipv6-64
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
> Pokud jde o ochranu před nedávnými exploity Meltdown a Spectre, obraťte se na oficiální stránky vydavatele své systémové distribuce a ověřte si, zda je nová verze Vašeho kernelu proti těmto hrozbám zabezpečena.
>
> V případě potřeby existuje hned několik nástrojů (jako například tento: <https://github.com/speed47/spectre-meltdown-checker>), které Vám umožní zjistit, zda je Vámi používaný kernel zranitelný, či nikoli.
>
> **Společnost OVH nemůže ručit za spolehlivost jakýchkoli externích nástrojů. Odpovědnost za jejich využití spadá na administrátora služby.**
>

## Kam dál

[Režim rescue](https://docs.ovh.com/cz/cs/dedicated/ovh-rescue/){.external}.

[Informace ohledně bezpečnostních hrozeb Meltdown a Spectre (EN)](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external}.

[Aktualizace v návaznosti na bezpečnostní hrozby Meltdown a Spectre (EN)](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external}.

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.