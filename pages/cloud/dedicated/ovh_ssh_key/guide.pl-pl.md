---
title: Instalacja klucza SSH OVHcloud
slug: ovh-klucz-ssh
excerpt: Przewodnik opisuje instalację klucza SSH OVHcloud umożliwiającego naszym administratorom dokonywanie interwencji oraz jego dezaktywację
section: SSH i klucz SSH
updated: 2018-02-12
---

**Ostatnia aktualizacja dnia 2021-04-12**

## Wprowadzenie

W niektórych przypadkach istnieje konieczność dokonania interwencji w dedykowanej infrastrukturze przez administratora OVHcloud. 

**Niniejszy przewodnik opisuje instalację klucza SSH OVHcloud umożliwiającego naszym administratorom dokonywanie interwencji oraz jego dezaktywację.**

## Wymagania początkowe

- [Połączenie przez SSH](https://docs.ovh.com/pl/dedicated/ssh-wprowadzenie/){.external} (dostęp root).

## W praktyce

### Krok 1: instalacja klucza

Po połączeniu przez SSH wprowadź następujące polecenie:

- W przypadku serwera OVHcloud zainstalowanego w centrach danych w Europie:

```sh
echo 'from="178.33.222.162,217.182.145.216,217.182.145.217,217.182.145.218,217.182.145.219,217.182.145.220,217.182.145.221,217.182.145.222,217.182.145.223" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDRpA0gxYQAL4HnRrFDlKsfjy6nEihOBsg6dgwR+mYee7nhTaCUqKXIlh3aJaRsiZcx4Uapq8f8NiU0g+SGWxCSbv7v4wbHfTX+brSJ+28bSUXp3B08iIcAiZgXIOBS+r++W1yJYUJRuMV934rmAvbyRhkr6rqZLp0Mr73AKnKlxR/UzN0VyA5JCXQPLAoYkm505WbwCjLKZowDobwpjx0968zkctYCpCxvJ3Wr8f0qEVtwMHawsgv1wmJuIF7689LA7U0i2yXaPrtwPdjWZsrc5YSUZL8JQTDW4PnQLiYild+YKcMMHp12bQKNvJgBStHsLlxx0hCRYoiYdMFuN0f951Vc16EmHH+7qgwCIGeeD7npyhdUevwxlY2IAEka3udOBM0t2koQlGIGckBJlAgL/W2flrvz1noSwIii6HX836lLj80djm4W0LhXu8M+nlQvDE7549srqB3+rDJ18po79+btEHirH/vfkB+X9rFd6hyHX27cygs2TpHIt+OmKkt9UB8gQy6tHX/OK2BR5v9ToBprPNAs2d/iH/K2mpJ0jHFI3FrCg9sqkz/lPwAl8bjCPZiUKU5+o+0O81MSNwqbQBl042n0Sqq9LxWP9TzxHT1GyE4LoV9NR4VHppkn+P22JO3o6B12Q5//pUgrw+VtpArwDdonc7SLQ26uR9nabw== support@cache-ng' >> /root/.ssh/authorized_keys2
```

- W przypadku serwera OVHcloud w centrum danych w Kanadzie:

```sh
echo 'from="8.33.137.120,149.56.85.250" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCeVpuVqIrd2HNadlwPmZ0LkWYVaR7WRQgTWXiv2XMJJE1VRW75KiVpUzBpBDN/yorzG6bhzAdo46aNi0aD5OqFJJnj66ZWULRDIErpxXx5gJpbMJlaGNpiwJgbyahFFSpttu5vleGSkQNcNQ6r7tsdNYA4aSkGKiJ7QeCXF/26rwPTpgEI/Dv6z0sX73r2Yojlm4eX328XieSxzOCoMbPnK4hUbJMffTiVDj48LjLVUHA303tF6cSuVkuzlId67i/Y0KHkevO7vuycTNTvzZHD70IRlmFVo3cV5yTENhGgYwHK8CWavGI/HIOlxeS/HQ0nV+dUoZXqZTJi0MFIEFF3LPQbu9PNLGhjhKddZceGGmDkmendVjIwvq4qGMsWhlqcEbbRUEqDNUG+ZQK9QLuePWRe7P5jV0ubpZ9ndguOpY2hUZqUjORQk9+gdaPkVwBOMGvOE61LaTsRW3FXEaEiRWKqaqM6Xfn4qVi8Y2DVQU3ue8EKDmTT95rOCR1KxhdSPbcDAmvUSRaEoYa1zFKo22rUUn6IVLVfR/22V6r3Dtj/J2ILj0bAPmeeR7jpIZS5CjDl3F0bIUwm8LJNuEPJG/ZRmMT4GEUUG1enpyWiZuAHHrE2Dz0kzIkFPd/WTldjthHvkVWW1iukT2iTuqdnV9H9XDVVfcl6eOiPflYXvw== support@cache-ng-ca' >> /root/.ssh/authorized_keys2
```

Jeśli operacja się powiodła, utworzony został plik `authorized_keys2`. Zawiera informacje w poniższej formie:

```sh
cat /root/.ssh/authorized_keys2
>>> from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
>>> from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
```

### Krok 2: usuwanie usterek

Nawet jeśli klucz został prawidłowo zainstalowany, może się zdarzyć, że administrator nie może połączyć się z Twoim serwerem. Należy wówczas sprawdzić następujące punkty:

#### Sprawdzanie czy istnieje plik */root/.ssh/authorized_keys2*

W celu upewnienia się, że plik istnieje wprowadź poniższe polecenie:

```sh
cat /root/.ssh/authorized_keys2
```

#### Sprawdzanie czy serwer SSH jest skonfigurowany w taki sposób, by akceptował połączenia z roota

W tym celu należy sprawdzić następujące parametry w pliku:

```bash
PermitRootLogin yes
'AuthorizedKeysFile' .ssh/authorized_keys2
UsePAM yes
```

Następnie należy ponownie uruchomić usługę SSH:

```sh
/etc/init.d/sshd restart
```

#### Sprawdzanie czy folderem macierzystym użytkownika root jest /root

By to sprawdzić, można użyć `/etc/passwd`:

```sh
/# grep root /etc/passwd
>>> root:x:0:0:root:/root:/bin/bash
```

Szóstym elementem w linii (elementy oddzielone są znakiem **:**) powinien być /root.

#### Sprawdzanie czy zapora sieciowa nie blokuje dostępu

W przypadku korzystania z zapory sieciowej należy dodać do źródła cache-ng.ovh.net (cache-ng.ovh.ca dla serwera w Kanadzie) regułę umożliwiającą połączenie, a jako port zaznaczyć port SSH (domyślnie ustawiony jest port 22). Oto przykład zasady iptables:

**Dla serwera w Europie**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
```

**Dla serwera w Kanadzie**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
```

- Sprawdzić czy nie zmieniono ustawień portu SSH

Aby umożliwić administratorowi połączenie, prosimy o informację jeśli ustawienia domyślnego portu zostały zmienione.
 

### Krok 3: dezaktywacja klucza

Po zakończeniu interwencji administratora można dezaktywować klucz SSH. W tym celu wystarczy zmienić plik `authorized_keys2` oznaczając (znakiem **#**), jak zaznaczono poniżej:

```sh
cat /root/.ssh/authorized_keys2
>>> #from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
>>> #from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
```

## Sprawdź również

[Wprowadzenie do protokołów SSH](https://docs.ovh.com/pl/dedicated/ssh-wprowadzenie/){.external}.

Przyłącz się do społeczności naszych użytkowników na <https://community.ovh.com>.
