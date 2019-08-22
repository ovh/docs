---
title: Zmiana klucza SSH w przypadku utraty
excerpt: Zmiana klucza SSH w przypadku utraty
slug: zmiana_klucza_ssh_w_przypadku_utraty
legacy_guide_number: g2069
section: Tutoriale
---


## 
W przypadku utraty klucza SSH (na przykład na skutek reinstalacji komutera), możesz mieć problem z zalogowaniem się na swoją instancję, jeśli nie skonfigurowałeś innego alternatywnego sposobu logowania się na instancję. 

Abyś mógł odzyskać dostęp, udostępniamy tryb rescue, który pozwala na zalogowanie się za pomocą hasła i na zmodyfikowanie plików. 

Przewodnik ten wyjaśnia, jak skonfigurować plik authorized_keys użytkownika admin, aby móc dodać nowy klucz SSH i odzyskać dostęp do instancji.


## Wstępne wymagania

- [Utworzenie kluczy SSH]({legacy}1769)
- [Przełączenie instancji w tryb rescue]({legacy}2029)




## 
Po zamontowaniu dysku instancji w trybie rescue, uzyskasz dostęp do wszystkich plików. 

Klucze SSH znajdują się w pliku:


```
/home/NOM_UTILISATEUR/.ssh/authorized_keys
```


Jeśli chcesz dodać nowy klucz SSH, wystarczy wyedytować ten plik i dodać do niego nowy klucz:


```
admin@instance:~$ sudo vim /mnt/home/NOM_UTILISATEUR/.ssh/authorized_keys

ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```



## Informacje:
Aby zmodyfikować klucz SSH domyślnego użytkownika, należy przejść do jego prywatnego katalogu. 

Na przykład dla użytkownika admin plik będzie się znajdował w poniższym katalogu:


```
/home/admin/.ssh/authorized_keys
```


Dla instancji z systemem Ubuntu 15.10 domyślnym użytkownikiem będzie ubuntu. Plik będzie się znajdował w poniższym katalogu:


```
/home/ubuntu/.ssh/authorized_keys
```



## Warto wiedzieć:
Możesz również zmienić hasło domyślnego użytkownika korzystając z trybu rescue i poniższych poleceń (jeśli użytkownikiem jest admin):


- Zmieniamy katalog główny, aby przejść bezpośrednio na dysk instancji:


```
root@instance:/home/admin# mount /dev/vdb1 /mnt/
root@instance:/home/admin# chroot /mnt/
```


- Zmieniamy hasło dla użytkownika admin:


```
root@instance:/# passwd admin
```



Po wykonaniu i zapisaniu zmiany wystarczy zrestartować i uruchomić instancję z jej dysku. Można już zalogować się na instancję za pomocą nowego klucza SSH.


## 

- [Konfiguracja dodatkowych kluczy SSH]({legacy}1924)
- [Zdefiniowanie hasła przez użytkownika root]({legacy}1786)




## 
[Przewodniki Cloud]({legacy}1785)

