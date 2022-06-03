---
title: Konfiguracja dodatkowych kluczy SSH
excerpt: Dowiedz się, jak skonfigurować dodatkowe klucze SSH dla instancji Public Cloud
slug: konfiguracja_dodatkowych_kluczy_ssh
section: Tutoriale
order: 01
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 04-02-2022**

## Wprowadzenie
 
Podczas tworzenia instancji można skonfigurować tylko jeden klucz SSH do początkowego połączenia. Aby umożliwić dostęp Twojej instancji do innych użytkowników, możesz dodać dodatkowe klucze, konfigurując plik *authorized_keys*.

**Niniejszy przewodnik wyjaśnia, jak skonfigurować dodatkowe klucze SSH do logowania do Twojej instancji.**

## Wymagania początkowe

- Posiadanie [instancji Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) na koncie OVHcloud
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Dostęp do instancji przez SSH jako administrator (root)

## W praktyce

> [!primary]
>
Jeśli chcesz zapisać klucz SSH w Panelu client OVHcloud, zalecamy użycie szyfrowania RSA lub ECDSA. ED25519 nie jest aktualnie obsługiwany.
>

### Tworzenie klucza SSH

Aby utworzyć nowy klucz SSH, zapoznaj się z [przewodnikiem dotyczącym pierwszych kroków w ramach usługi Public Cloud](https://docs.ovh.com/pl/public-cloud/public-cloud-pierwsze-kroki/).

### Konfiguracja nowego użytkownika

[Zaloguj się do instancji przez SSH](https://docs.ovh.com/pl/public-cloud/public-cloud-pierwsze-kroki/#connect-to-instance) i utwórz nowego użytkownika za pomocą poniższych poleceń:

```bash
~$ sudo adduser user2

Adding user `user2' ...
Adding new group `user2' (1001) ...
Adding new user `user2' (1001) with group `user2' ...
Creating home directory `/home/user2' ...
Copying files from `/etc/skel' ...

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
Full Name []:
Room Number []:
Work Phone []:
Home Phone []:
Other []:
Is the information correct? [Y/n] Y
```

Otwórz plik *authorized_keys* w folderze nowego użytkownika z edytorem tekstu:

```bash
~$ sudo nano /home/user2/.ssh/authorized_keys
```

Dodaj do pliku klucz publiczny utworzony na pierwszym etapie. Zarejestruj i zamknij wydawcę.

Jeśli folder .ssh jeszcze nie istnieje, możesz go utworzyć za pomocą polecenia:

```bash
~$ sudo mkdir /home/user2/.ssh/
```

Możesz skonfigurować kilka kluczy SSH dodając je do plików *authorized_keys* odpowiednich folderów użytkownika.

Teraz możesz połączyć się z użytkownikiem i kluczem prywatnym, które zostały wcześniej skonfigurowane:

```bash
~$ ssh user2@instance_IP
```
```console
Linux b2-7-de1 5.10.0-10-cloud-amd64 #1 SMP Debian 5.10.84-1 (2021-12-08) x86_64

user2@server:~$
```

## Sprawdź również

[Utwórz pierwszą instancję Public Cloud i połącz się z nią](https://docs.ovh.com/pl/public-cloud/public-cloud-pierwsze-kroki/)

[Zmień klucz SSH w przypadku utraty](https://docs.ovh.com/pl/public-cloud/zmiana_klucza_ssh_w_przypadku_utraty/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.