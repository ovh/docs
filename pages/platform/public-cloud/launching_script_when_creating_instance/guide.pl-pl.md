---
title: Uruchomienie skryptu podczas tworzenia instancji
excerpt: Uruchomienie skryptu podczas tworzenia instancji
slug: uruchomienie_skryptu_podczas_tworzenia_instancji
legacy_guide_number: g1932
section: Zarządzanie w OpenStack CLI
---


## 
W niektórych sytuacjach będziesz musiał uruchomić skrypt podczas tworzenia instancji. 
Na przykład w przypadku chęci skonfigurowania kilku kluczy SSH dla instancji lub aby konfigurować usługi SSH automatycznie.

Przewodnik ten wyjaśnia, jak uruchomić skrypt podczas tworzenia instancji za pomocą Cloud-init i API OpenStack.


## Wstępne wymagania

- [Przygotowanie środowiska do korzystania z API OpenStack]({legacy}1851)
- [Pobranie zmiennych środowiskowych OpenStack]({legacy}1852)




## Utworzenie skryptu
Istnieje kilka rodzajów użytecznych skryptów, które można uruchomić podczas tworzenia instancji. 

Możesz na przykład skorzystać ze skryptów shell:


- Dodawanie nowego użytkownika:


```
#!/bin/bash

adduser ovh -gecos "" --disabled-password
echo "ovh ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

mkdir /home/ovh/.ssh
echo "VOTRE_CLE_SSH_PUBLIQUE" > /home/ovh/.ssh/authorized_keys
```



Skrypt ten pozwala na utworzenie użytkownika "ovh". Nadajemy mu następnie uprawnienia sudo i dodajemy klucz ssh.


- Modyfikacja konfiguracji SSH:


```
#!/bin/bash

sed -i 's/Port\ 22/Port\ 2211/g' /etc/ssh/sshd_config
sed -i 's/PermitRootLogin\ yes/PermitRootLogin\ no/g' /etc/ssh/sshd_config
service ssh restart
```



Skrypt ten pozwala na modyfikowanie domyślnego portu SSH (22 -> 2211) i na odrzucanie połączeń za pomocą użytkownika "root".


- Aktualizacja pakietów i instalacja serwera WEB:


```
#!/bin/bash

apt-get update
apt-get upgrade -y
apt-get install -y apache2 php5
```




## Uwaga!
Ten skrypt może zwiększyć czas tworzenia instancji.
Można również uruchomić skrypty cloud-config podczas tworzenia instancji. Na przykład:


- Utworzenie użytkownika z 2 kluczami SSH:


```
#cloud-config

users:
- name: ovh
groups: sudo
shell: /bin/bash
sudo: ['ALL=(ALL) NOPASSWD:ALL']
ssh-authorized-keys:
- SSH_KEY1
- SSH_KEY2
```



Skrypt ten pozwala więc na utworzenie użytkownika "ovh" z uprawnieniami sudo, z możliwością logowania się za pomocą 2 różnych kluczy SSH.

## Uwaga!
Użytkownik "admin" nie zostanie utworzony, ale zostanie zastąpiony Twoim użytkownikiem.


## Tworzenie instancji
Po pobraniu listy obrazów i modeli instancji można uruchomić skrypt z Cloud-init korzystając z argumentu --user-data:


```
root@server:~# nova boot --key_name SSH_KEY --image bdcb5042-3548-40d0-b06f-79551d3b4377 --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --user-data ./adduser.sh Instance1
```


Nasz użytkownik został prawidłowo dodany po utworzeniu instancji z niezbędnymi uprawnieniami:


```
root@server:~# ssh ovh@149.xxx.xxx.194

Last login: Tue Oct 20 07:51:58 2015 from proxy-109-190-254-35.ovh.net

ovh@instance1:~$ sudo su
root@instance1:/home/ovh#
```




## 
[Przewodniki Cloud]({legacy}1785)

