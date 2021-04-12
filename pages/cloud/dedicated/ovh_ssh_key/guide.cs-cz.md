---
deprecated: true
title: Instalace SSH klíče OVH
slug: ovh-ssh-key
excerpt: Instalace klíče SSH OVH je zapotřebí v případech, kdy je na serveru či instanci zákazníka vyžadována intervence ze strany administrátora OVH
section: SSH a SSH klíč
---

**Poslední aktualizace 12/04/2021**

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
echo 'from="178.33.222.162,217.182.145.216,217.182.145.217,217.182.145.218,217.182.145.219,217.182.145.220,217.182.145.221,217.182.145.222,217.182.145.223" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDRpA0gxYQAL4HnRrFDlKsfjy6nEihOBsg6dgwR+mYee7nhTaCUqKXIlh3aJaRsiZcx4Uapq8f8NiU0g+SGWxCSbv7v4wbHfTX+brSJ+28bSUXp3B08iIcAiZgXIOBS+r++W1yJYUJRuMV934rmAvbyRhkr6rqZLp0Mr73AKnKlxR/UzN0VyA5JCXQPLAoYkm505WbwCjLKZowDobwpjx0968zkctYCpCxvJ3Wr8f0qEVtwMHawsgv1wmJuIF7689LA7U0i2yXaPrtwPdjWZsrc5YSUZL8JQTDW4PnQLiYild+YKcMMHp12bQKNvJgBStHsLlxx0hCRYoiYdMFuN0f951Vc16EmHH+7qgwCIGeeD7npyhdUevwxlY2IAEka3udOBM0t2koQlGIGckBJlAgL/W2flrvz1noSwIii6HX836lLj80djm4W0LhXu8M+nlQvDE7549srqB3+rDJ18po79+btEHirH/vfkB+X9rFd6hyHX27cygs2TpHIt+OmKkt9UB8gQy6tHX/OK2BR5v9ToBprPNAs2d/iH/K2mpJ0jHFI3FrCg9sqkz/lPwAl8bjCPZiUKU5+o+0O81MSNwqbQBl042n0Sqq9LxWP9TzxHT1GyE4LoV9NR4VHppkn+P22JO3o6B12Q5//pUgrw+VtpArwDdonc7SLQ26uR9nabw== support@cache-ng' >> /root/.ssh/authorized_keys2
```

- Váš server je hostován v kanadském datacentru OVH:

```sh
echo 'from="8.33.137.120,149.56.85.250" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCeVpuVqIrd2HNadlwPmZ0LkWYVaR7WRQgTWXiv2XMJJE1VRW75KiVpUzBpBDN/yorzG6bhzAdo46aNi0aD5OqFJJnj66ZWULRDIErpxXx5gJpbMJlaGNpiwJgbyahFFSpttu5vleGSkQNcNQ6r7tsdNYA4aSkGKiJ7QeCXF/26rwPTpgEI/Dv6z0sX73r2Yojlm4eX328XieSxzOCoMbPnK4hUbJMffTiVDj48LjLVUHA303tF6cSuVkuzlId67i/Y0KHkevO7vuycTNTvzZHD70IRlmFVo3cV5yTENhGgYwHK8CWavGI/HIOlxeS/HQ0nV+dUoZXqZTJi0MFIEFF3LPQbu9PNLGhjhKddZceGGmDkmendVjIwvq4qGMsWhlqcEbbRUEqDNUG+ZQK9QLuePWRe7P5jV0ubpZ9ndguOpY2hUZqUjORQk9+gdaPkVwBOMGvOE61LaTsRW3FXEaEiRWKqaqM6Xfn4qVi8Y2DVQU3ue8EKDmTT95rOCR1KxhdSPbcDAmvUSRaEoYa1zFKo22rUUn6IVLVfR/22V6r3Dtj/J2ILj0bAPmeeR7jpIZS5CjDl3F0bIUwm8LJNuEPJG/ZRmMT4GEUUG1enpyWiZuAHHrE2Dz0kzIkFPd/WTldjthHvkVWW1iukT2iTuqdnV9H9XDVVfcl6eOiPflYXvw== support@cache-ng-ca' >> /root/.ssh/authorized_keys2
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
