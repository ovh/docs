---
title: Dostęp root i zdefiniowanie hasła
excerpt: Dostęp root i zdefiniowanie hasła
slug: dostep_root_i_zdefiniowanie_hasla
legacy_guide_number: g1786
section: Tutoriale
---


## 
Do wykonania niektórych operacji potrzebny jest dostęp root, na przykład:

- instalacja pakietów
- zdefiniowanie hasła dla użytkownika lub dla roota (niezbędne, żeby uzyskać dostęp do KVM)
- wykonanie niektórych zadań administracyjnych




## Wstępne wymagania

- []({legacy}1775)
- Zalogowanie przez SSH za pomocą domyślnego użytkownika (admin lub nazwa dystrybucji dla najnowszych obrazów)



## Informacje
W przewodniku tym domyślnym użytkownikiem jest admin.


## Zdefiniowanie hasła

- Zdefiniuj hasło dla użytkownika admin (hasło nie jest wyświetlane ze względów bezpieczeństwa):

```
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```


- Zdefiniuj hasło dla użytkownika root (hasło nie jest wyświetlane ze względów bezpieczeństwa):

```
~$ sudo passwd root
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```





## Inne przykłady

- Aktualizacja pamięci cache pakietów (Debian / Ubuntu)

```
~$ sudo apt-get update
```


- Aktualizacja systemu (CentOS / Fedora)

```
~$ sudo yum update
```


- Edycja pliku konfiguracyjnego:

```
~$ sudo vi /etc/hosts.allow
```





## 

- Przejście w tryb użytkownika root

```
~$ sudo su -
~#
```


- Zdefiniowanie hasła dla użytkownika root (po przejściu w tryb użytkownika root):

```
~# passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```


- Zdefiniowane hasła dla użytkownika admin

```
~# passwd admin
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```





## 
[Przewodniki Cloud]({legacy}1785)

