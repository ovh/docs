---
title: Konfiguracja dodatkowych kluczy SSH
excerpt: Konfiguracja dodatkowych kluczy SSH
slug: konfiguracja_dodatkowych_kluczy_ssh
legacy_guide_number: g1924
section: Tutoriale
---


## 
Podczas tworzenia instancji można skonfigurować tylko jeden klucz SSH. 
Możesz zezwolić na dostęp do Twojej instancji innym użytkownikom dysponującym kluczami SSH konfigurując plik authorized_keys.

Przewodnik ten wyjaśnia, jak skonfigurować dla instancji dodatkowe klucze SSH, aby dać innym osobom dostęp do tej instancji.


## Wstępne wymagania

- Instancja




## Utworzenie klucza SSH
Aby utworzyć klucz SSH, należy postępować zgodnie z tym przewodnikiem: 

- [Klucze SSH]({legacy}1769)


Nie trzeba go dodawać w panelu manager OVH.


## Konfiguracja nowego użytkownika

- Zaloguj się do swojej instancji.
- Utwórz nowego użytkownika:

```
admin@serveur-1:~$ sudo adduser user2

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


- Dodaj publiczny klucz SSH w katalogu nowego użytkownika:

```
admin@serveur-1:~$ sudo vim /home/user2/.ssh/authorized_keys
```



Możesz utworzyć katalog .ssh, jeśli katalog ten nie istnieje.

```
admin@serveur-1:~$ sudo mkdir /home/user2/.ssh/
```


Możesz już zalogować się na tego użytkownika za pomocą klucza prywatnego przypisanego do tego, który skonfigurowałeś. 

```
root@serveur:~$ ssh user2@149.xxx.xxx.22

Linux serveur-1 3.2.0-4-amd64 #1 SMP Debian 3.2.68-1+deb7u1 x86_64
Last login: Fri Oct 16 08:14:24 2015 from proxy-109-190-254-35.ovh.net

user2@serveur-1:~$
```


Możesz skonfigurować inne klucze SSH dla użytkownika admin dodając je w odpowiednim pliku authorized_keys.

```
admin@serveur-1:~$ sudo vim /home/admin/.ssh/authorized_keys
```




## 
[Przewodniki Cloud]({legacy}1785)

