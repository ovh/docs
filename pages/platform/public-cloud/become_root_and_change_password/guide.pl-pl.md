---
title: 'Logowanie jako użytkownik root i ustawienie hasła'
excerpt: 'Dowiedz się, jak się zalogować jako użytkownik root i ustawić dla niego hasło'
slug: dostep_root_i_zdefiniowanie_hasla
legacy_guide_number: g1786
section: Tutoriale
---

**Ostatnia aktualizacja z dnia 17-06-2019**

## Wprowadzenie

Aby wykonywać niektóre działania administracyjne na Twoim serwerze (np. instalacja pakietów), powinieneś posiadać dostęp z uprawnieniami administracyjnymi. W przypadku serwerów Linux poziom ten nazywany jest „root”. 

**Dowiedz się, jak się zalogować jako użytkownik root i ustawić dla niego hasło.**

## Wymagania początkowe

* Posiadanie aktywnego projektu Public Cloud
* Możliwość łączenia się z serwerem za pomocą SSH

> [!primary]
>
> W przewodniku tym przyjmujemy, że użytkownik ma przypisaną domyślnie nazwę „admin”. 
>

## W praktyce

### Zmiana hasła "root"

Połącz się z Twoim serwerem za pomocą SSH.

Użyj w tym celu poniższej komendy, a następnie wprowadź hasło użytkownika „admin” (ze względów bezpieczeństwa hasło to nie będzie się wyświetlało podczas jego wprowadzania):

```sh
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully 
successfully
```

### Aktualizacja repozytoriów (Debian i Ubuntu)

Aby zaktualizować _pakiety_ oprogramowania zainstalowane na Twoim serwerze, wprowadź następującą komendę: 

```
sudo apt-get update
```

### Aktualizacja systemu (CentOS i Fedora)

Aby zaktualizować system operacyjny Twojego serwera, wprowadź następującą komendę:

```
~$ sudo yum update
```

### Modyfikacja pliku konfiguracyjnego 

Aby zaktualizować plik konfiguracyjny Twojego serwera, wprowadź następującą komendę:

```
~$ sudo vi /etc/hosts.allow
```

### Logowanie jako użytkownik root

Aby zalogować się jako użytkownik root, wprowadź następującą komendę:

```
~$ sudo su -
~#
```

Następnie wprowadź hasło root.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.