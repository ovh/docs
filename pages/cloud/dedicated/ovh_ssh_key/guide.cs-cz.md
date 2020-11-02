---
deprecated: true
title: Instalace SSH klíče OVH
slug: ovh-ssh-key
excerpt: Instalace klíče SSH OVH je zapotřebí v případech, kdy je na serveru či instanci zákazníka vyžadována intervence ze strany administrátora OVH
section: SSH a SSH klíč
---

**Poslední aktualizace 24/01/2018**

## Cíl

V některých situacích může být na Vaší dedikované infrastruktuře vyžadován zásah ze strany administrátora OVH. 

**V této příručce se dozvíte, jak na instalaci a následnou deaktivaci SSH klíče OVH.**

## Prerekvizity

- [Připojeni prostřednictvím SSH](https://docs.ovh.com/cz/cs/dedicated/ssh-uvod/){external} (root přístup).

## Postup

### Fáze 1: instalace klíče

Po navázání spojení prostřednictvím SSH zadejte následující příkaz:

- Váš server je hostován v některém z evropských datacenter OVH:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cle.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

- Váš server je hostován v kanadském datacentru OVH:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cleCA.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

Pokud vše proběhne v pořádku, dojde k vytvoření souboru `authorized_keys2`. Vytvořený soubor obsahuje údaje v následujícím tvaru:

```sh
cat /root/.ssh/authorized_keys2
>>> from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
>>> from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
```

### Fáze 2: odstranění problémů

I přes úspěšnou instalaci SSH klíče může dojít k situaci, v níž se našim administrátorům nepodaří k Vašemu serveru připojit. V takovém případě proveďte následná opatření:

#### Ověřte, zda soubor */root/.ssh/authorized_keys2* existuje.

O jeho existenci se snadno přesvědčíte zadáním následujícího příkazu:

```sh
cat /root/.ssh/authorized_keys2
```

#### Ověřte, zda je SSH server nakonfigurován tak, aby přijímal připojení přicházející z root.

Za tímto účelem ověřte následující parametry v souboru `/etc/ssh/sshd_config`:

```bash
PermitRootLogin yes
'AuthorizedKeysFile' .ssh/authorized_keys2
UsePAM yes
```

Následně proveďte restart služby SSH:

```sh
/etc/init.d/sshd restart
```

#### Ověřte, že domovský adresář uživatele root je skutečně /root

K ověření můžete použít následující příkaz: `/etc/passwd`

```sh
/# grep root /etc/passwd
>>> root:x:0:0:root:/root:/bin/bash
```

Šestý prvek řádku musí být /root (jednotlivé prvky jsou od sebe odděleny dvojtečkami **:**).

#### Ověřte, zda není přístup blokován firewallem

Pokud používáte softwarový firewall, bude zapotřebí přidat autorizační pravidlo pro zdroj cache-ng.ovh.net (v případě serveru hostovaného v Kanadě cache-ng.ovh.ca) s Vaším SSH portem jakožto cílovým portem (standardně 22). Příklad pravidla iptables:

**V případě serveru hostovaného ve Francii**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
```

**V případě serveru hostovaného v Kanadě**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
```

- Ověřte, zda není zadán jiný SSH port

Pokud jste zadali jiný SSH port, sdělte nám to. Bez této informace se náš administrátor nebude moci připojit.
 

### Fáze 3: deaktivace klíče

Po ukončení zásahu můžete SSH klíč deaktivovat. Za tímto účelem stačí upravit soubor `authorized_keys2` a přidat k němu komentář ve formě křížku (`#`), jak je uvedeno níže:

```sh
cat /root/.ssh/authorized_keys2
>>> #from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
>>> #from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
```

## Kam dál

[Úvod do SSH](https://docs.ovh.com/cz/cs/dedicated/ssh-uvod/){external}

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.