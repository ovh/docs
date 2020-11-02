---
deprecated: true
title: Zabezpečení služby Memcached
slug: zabezpeceni-serveru-se-sluzbou-memcached
excerpt: Zjistěte, jak zabezpečit svou službu Memcached
section: Pokročilé použití
---

**Poslední aktualizace 02/03/2018**


## Cíl

Memcached je open-source cachovací databázový systém, který pomáhá zvyšovat výkon webových aplikací tím, že do paměti cache umisťuje statický obsah a výsledky databázových dotazů. Celý mechanismus je prostý: jedná se o jednoduchého daemona s alokovaným množstvím paměti, do níž mohou aplikace ukládat svá data.

Memcached nemá ve výchozím nastavení zabezpečený přístup. Pokud je server přístupný z internetu, mohou třetí strany číst a upravovat data uložená v Memcache databázi. Z toho důvodu je službu potřeba zabezpečit.


**Tato příručka Vám ukáže, jak na to.**


> [!warning]
>
> Společnost OVH Vám dává k dispozici stroje, za jejichž správu nesete plnou odpovědnost.  Společnost OVH není administrátorským subjektem těchto strojů a nedisponuje žádnými přístupovými právy. Z toho důvodu spočívá zajištění každodenní správy softwaru a zabezpečení stroje pouze na Vás.
>
> Tato příručka slouží jako úvod do nejčastějších úkonů spojených se správou a zabezpečením Vašeho serveru.  Pokud narazíte na jakékoli potíže či pochybnosti ohledně správy, použití nebo zabezpečení svého serveru, obraťte se prosím na profesionálního serverového administrátora. Další informace naleznete v poslední sekci této příručky.
>


## Prerekvizity


- Přístup k serveru s nainstalovanou službou Memcached (SSH v případě linuxové distribuce, vzdálená plocha v případě OS Windows).
- Identifikace služeb využívajících Memcached. Za tímto účelem bude zapotřebí získat odpovědi na následující otázky:
    - Nacházejí se služby, které využívají Memcached, na stejném serveru? Jsou tyto služby používány v rámci privátní sítě?
    - Je zapotřebí, aby služby, které Memcached využívají, byly veřejně přístupné na internetu?


## Postup

### Zabezpečení služby Memcached

Zabezpečení memcached serveru probíhá ve dvou fázích:

- Omezení adresy služby;
- zablokování všech komunikačních protokolů s výjimkou TCP.


Až do verze 1.5.6 Memcached ve výchozím nastavení povoluje připojení prostřednictvím protokolů TCP a UDP. Tato výchozí konfigurace však může být zneužita pro generování DDoS útoků.
Vývojáři poukazují na to, že připojení přes UDP bylo důležité v průběhu počátečního vývoje služby. V té době byly totiž zdroje mnohem omezenější.
V této příručce proto budeme předpokládat, že se řadíte mezi 99 % uživatelů, kteří UDP připojení nevyžadují.

Jestliže je memcached server používán pouze Vaším lokálním serverem, můžete přístup omezit pouze na privátní adresu `127.0.0.1`.
Jestliže je potřeba, aby se k memcached serveru připojovaly i jiné veřejné servery přes privátní síť, nastavte adresu pro komunikaci na privátní IP (například `10.0.0.1`, v závislosti na typu Vaší sítě).

**V každém případě** však deaktivujte připojení prostřednictvím protokolu UDP pomocí direktivy `-U 0`.

V následujícím textu do detailu rozebereme konfigurační aspekty vážící se k těm nejčastěji používaným operačním systémům.


#### Debian/Ubuntu

Debian a Ubuntu používají pro správu služby Memcached sadu příkazů `service memcached status/start/restart/force-reload`. Pokud používáte některý z těchto operačních systémů, přihlaste se jako uživatel root a upravte soubor `/etc/memcached.conf`.

Začněte zadáním následujícího řádku, který deaktivuje možnost připojení přes protokol UDP. Jak jsme uvedli výše, tento protokol je již zastaralý. Jeho deaktivace Vás proto nijak neomezí.

```sh
# Disable UDP protocol
-U 0
```
Jestliže je memcached server používán pouze Vaším lokálním serverem, můžete zadat následující řádek, který znemožní přístup k Vaší službě z internetu:

```sh
-l 127.0.0.1
```

Jakmile provedete veškeré potřebné úpravy, uložte soubor a restartujte svou konfiguraci pomocí jednoho z následujících příkazů:


```sh
service memcached force-reload
/etc/init.d/memcached force-reload
```


#### CentOS - Fedora - Red Hat


ContOS, Fedora a Red Hat používají pro správu služby Memcached sadu příkazů `service memcached status/start/restart/force-reload`. Pokud používáte některý z těchto operačních systémů, přihlaste se jako uživatel root a upravte soubor `/etc/sysconfig/memcached`.


Jestliže je memcached server používán pouze Vaším lokálním serverem, doporučujeme přidat následující `OPTIONS` řádek, který deaktivuje protokol UDP a znemožní přístup k Vaší službě z internetu:

```sh
OPTIONS="-l 127.0.0.1 -U 0"
```


Jestliže je potřeba, aby se k memcached serveru připojovaly i jiné veřejné servery, přidejte následující `OPTIONS` řádek, který pouze deaktivuje protokol UDP, aniž by znemožnil přístup k serveru z internetu.

```sh
OPTIONS="-U 0"
```

Jakmile provedete veškeré potřebné úpravy, uložte soubor a restartujte svou konfiguraci pomocí následujícího příkazu:

```sh
sudo service memcached force-reload
```


#### Arch Linux


Arch Linux používá pro správu služby Memcached sadu příkazů `systemctl start/restart/stop memcached`. Pokud používáte Arch Linux, přihlaste se jako uživatel root a upravte soubor `/usr/lib/systemd/system/memcached`.

Jestliže je memcached server používán pouze Vaším lokálním serverem, doporučujeme přidat následující řádek, který deaktivuje protokol UDP a znemožní přístup k Vaší službě z internetu:

```sh
ExecStart=/usr/bin/memcached -l 127.0.0.1 -U 0 -o modern
```


Jestliže je potřeba, aby se k memcached serveru připojovaly i jiné veřejné servery, přidejte následující řádek, který pouze deaktivuje protokol UDP, aniž by znemožnil přístup k serveru z internetu.

```sh
ExecStart=/usr/bin/memcached -U 0 -o modern
```


Jakmile provedete veškeré potřebné úpravy, uložte soubor a restartujte svou konfiguraci pomocí jednoho z následujících příkazů:


```sh
sudo systemctl daemon-reload
sudo systemctl force-reload memcached
```

## Kam dál

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.