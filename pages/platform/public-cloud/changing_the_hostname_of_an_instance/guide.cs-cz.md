---
title: 'Úprava hostname instance Public Cloud'
slug: modifikace-hostname-instance
excerpt: 'Zjistěte, jak upravit hostname své Public Cloud instance'
legacy_guide_number: 1928
section: Tutoriály
---

**Poslední aktualizace 24/08/2018**

## Cíl

Modul Cloud-init provádí konfiguraci [instance Public Cloud](https://www.ovh.cz/public-cloud/instances/){.external} po jejím vytvoření a při každém restartu. Pokud si přejete upravit hostname instance, ať již z důvodu chyby při jejím vytváření nebo za účelem přenastavení mailového serveru, je tento modul nutné deaktivovat. 

**Zjistěte, jak přenastavit modul Cloud-init tak, aby bylo možné provést změnu hostname Public Cloud instance.**

> [!warning]
>
> Společnost OVH Vám dává k dispozici stroje, za jejichž správu nesete plnou odpovědnost. Společnost OVH není administrátorským subjektem těchto strojů a nedisponuje žádnými přístupovými právy. Z toho důvodu spočívá zajištění každodenní správy softwaru a zabezpečení stroje pouze na Vás.
>
> Tato příručka slouží jako úvod do nejčastějších úkonů spojených se správou a zabezpečením Vašeho serveru.  Pokud narazíte na jakékoli potíže či pochybnosti ohledně správy, použití nebo zabezpečení svého serveru, obraťte se prosím na profesionálního serverového administrátora. Další informace naleznete v poslední sekci této příručky.
>


## Prerekvizity

- [Public Cloud instance](https://www.ovh.cz/public-cloud/instances/){.external}.
- [SSH připojení](https://docs.ovh.com/cz/cs/public-cloud/prvni-pripojeni/){.external} (root) k instanci.


## Postup

### Deaktivace modulu Cloud-init

Upravte konfigurační soubor:

```sh
sudo vim /etc/cloud/cloud.cfg
```

Přidejte či upravte následující řádky:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Úprava hostname

Upravte hostname:

```sh
sudo vim /etc/hostname
webserver
```

Upravte soubor `/etc/hosts`:

```sh
sudo vim /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

Nyní je instanci zapotřebí restartovat:

```bash
sudo reboot
```

Po restartu je změna hostname úspěšně zaregistrována:

```sh
sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

## Kam dál 

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.