---
deprecated: true
title: Změna hesla root na VPS
slug: root-password
excerpt: Zjistěte, jak upravit heslo root na svém VPS v několika krocích
section: Diagnostika a režim rescue
---

**Poslední aktualizace 27/06/2018**

## Cíl

Při instalaci či reinstalaci systémové distribuce dochází k automatickému vygenerování hesla pro root přístup k Vašemu serveru. Z důvodů popsaných v naší příručce [Zabezpečení VPS](https://docs.ovh.com/fr/vps/conseils-securisation-vps/){.external} důrazně doporučujeme vygenerované heslo co nejdříve změnit. Rovněž se může stát, že své heslo jednoduše zapomenete a budete ho potřebovat obnovit. Tato příručka Vám ukáže, jak na to.

Zjistěte, jak změnit heslo root na svém VPS.

## Prerekvizity

- SSH připojení k VPS (root přístup)
- VPS restartované v režimu [rescue](https://docs.ovh.com/cz/cs/vps/rescue/){.external}

<iframe width="560" height="315" src="https://www.youtube.com/embed/ua1qoTMq35g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Postup

### Změna hesla s přístupovými údaji k uživateli root

Pokud máte své aktuální heslo root k dispozici, je postup pro jeho změnu jednodušší. Připojte se ke svému serveru a zadejte následující příkaz:

```sh
passwd
```

Nyní zadejte a potvrďte své nové heslo. Následně obdržíte následující potvrzení:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> Na linuxových distribucích se zadané heslo **nezobrazuje**.
> 

### Změna hesla po ztrátě přihlašovacích údajů

#### Fáze 1: identifikace bodu připojení

Na všech VPS z řady 2016 je připojení diskového oddílu vytvářeno automaticky. Zbývá tedy jen zjistit, kde je Váš systémový oddíl připojen. Pro tento účel existují dva možné příkazy:

##### df -h

```sh
root@rescue-pro:~# df -h
Size Used Avail Use% Mounted on
/dev/vda1 4.7G 1.3G 3.2G 29% /
udev 10M 0 10M 0% /dev
tmpfs 774M 8.4M 766M 2% /run
tmpfs 1.9G 0 1.9G 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 1.9G 0 1.9G 0% /sys/fs/cgroup
/dev/vdb1 20G 934M 18G 5% /mnt/vdb1
```

##### lsblk

```sh
root@rescue-pro:~# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 4.9G 0 disk
└─vda1 254:1 0 4.9G 0 part /
vdb 254:16 0 20G 0 disk
└─vdb1 254:17 0 20G 0 part /mnt/vdb1
```

Z obrázku výše lze určit, že Váš systémový oddíl je připojen na **/mnt/vdb1**.


#### Fáze 2: oprávnění CHROOT

V následujícím kroku bude zapotřebí upravit adresář root tak, aby se změny projevily ve Vašem systému. Toho lze docílit zadáním příkazu `chroot`. Zadejte prosím následující příkaz:

```sh
root@rescue-pro:~# chroot /mnt/vdb1/
root@rescue-pro:/#
```

Pomocí příkazu `ls -l` můžete provést kontrolu systémového adresáře.

```sh
root@rescue-pro:/# ls -l
```

#### Fáze 3: změna hesla root

Nyní nezbývá než změnit heslo root pomocí příkazu `passwd`:

```sh
passwd
```
```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Nakonec nabootujte své VPS z disku prostřednictvím Zákaznického prostoru OVH.

## Kam dál

[Úvod do SSH](https://docs.ovh.com/cz/cs/dedicated/ssh-uvod/){.external}
[VPS - restart v režimu rescue](https://docs.ovh.com/cz/cs/vps/rescue/){.external}

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com>.