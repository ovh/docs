---
title: Instalacja klucza SSH OVH
slug: ovh-klucz-ssh
excerpt: Przewodnik opisuje instalację klucza SSH OVH umożliwiającego naszym administratorom dokonywanie interwencji oraz jego dezaktywację
section: SSH i klucz SSH
---

**Ostatnia aktualizacja dnia 2018-01-03**

## Wprowadzenie

W niektórych przypadkach istnieje konieczność dokonania interwencji w dedykowanej infrastrukturze przez administratora OVH. 

**Niniejszy przewodnik opisuje instalację klucza SSH OVH umożliwiającego naszym administratorom dokonywanie interwencji oraz jego dezaktywację.**

## Wymagania początkowe

- [Połączenie przez SSH](https://docs.ovh.com/pl/dedicated/ssh-wprowadzenie/){.external} (dostęp root).

## W praktyce

### Krok 1: instalacja klucza

Po połączeniu przez SSH wprowadź następujące polecenie:

- W przypadku serwera OVH zainstalowanego w centrach danych w Europie:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cle.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

- W przypadku serwera OVH w centrum danych w Kanadzie:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cleCA.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
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