---
title: Uruchomienie instancji na przypisanym woluminie
excerpt: Uruchomienie instancji na przypisanym woluminie
slug: uruchomienie_instancji_na_przypisanym_woluminie
legacy_guide_number: g2064
section: Zarządzanie w OpenStack CLI
---


## 
Serwery cloud są dostarczane z dyskiem domyślnym, który zawiera obraz systemu (Debian 8, Windows 10...). Można korzystać również z dodatkowych woluminów - są to dyski stałe pozwalające na przechowywanie danych. 

Na woluminie można wdrożyć system operacyjny i uruchomić serwer cloud z tego woluminu zamiast z dysku domyślnego.

![](images/img_3704.jpg){.thumbnail}

## Inna funkcjonalność
OpenStack pozwala na uruchomienie serwera z woluminu. Wystarczy skonfigurować ten wolumin jako wolumin startowy i uruchomić serwer cloud z tego woluminu. 

Skutkiem ubocznym takiej operacji będzie zniknięcie dysku domyślnego, ponieważ wolumin zajmie jego miejsce. Funkcjonalność opisana w tym przewodniku pozwala na zachowanie dostępu do dysku domyślnego.


## Wymagania

- [Pobranie zmiennych środowiskowych OpenStack]({legacy}1852)
- Wolumin z systemem operacyjnym




## Oznaczenie woluminu jako priorytetowego w kolejności bootowania
Do woluminu należy dodać parametr metadata, aby serwer cloud wybierał ten dysk podczas uruchamiania. 


```
cinder metadata 897ec71d-bae2-4394-b8c1-4d8fd373a725 set boot_from=True
```




## Podłączanie woluminu
Następnie należy podłączyć wolumin do instancji. 


```
nova volume-attach myinstance01 897ec71d-bae2-4394-b8c1-4d8fd373a72
```




## 
Aby instancja uruchamiała się z dodatkowego woluminu, należy ją zrestartować. 

Można wykonać polecenia nova stop i nova start, lub wymusić restart.


```
nova reboot --hard myinstance01
```



## Uwaga
Restart "soft" nie będzie wystarczający.
Jeśli chcesz sprawdzić, czy kolejność uruchamiania jest prawidłowa, sprawdź punkty montowania. 


```
$ lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 252:0 0 10G 0 disk
└─vda1 252:1 0 10G 0 part
vdb 252:16 0 15G 0 disk
└─vdb1 252:17 0 15G 0 part /
```


Punkt montowania / jest montowany z /dev/vdb1.


## 

- [Zwiększenie rozmiaru dodatkowego dysku]({legacy}1865)




## 
[Przewodniki Cloud]({legacy}1785)

