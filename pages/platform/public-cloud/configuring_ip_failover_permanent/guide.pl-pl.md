---
title: Trwała konfiguracja IP Fail Over
excerpt: Trwała konfiguracja IP Fail Over
slug: trwala_konfiguracja_ip_fail_over
legacy_guide_number: g1885
section: Tutoriale
---


## 
Jeśli chcesz dłużej zatrzymać konfigurację swojej instancji, możesz w sposób trwały skonfigurować swoje adresy IP Fail Over. Dzięki temu nie będziesz musiał konfigurować tych adresów po każdym restarcie. 
Przewodnik ten wyjaśnia, jak trwale skonfigurować IP Fail Over na instancji.


## Wstępne wymagania

- Posiadanie instancji Public Cloud.
- Zaimportowanie adresu IP Fail Over do projektu Public Cloud.
- Zalogowanie do serwera przez SSH.




## Debian / Ubuntu

- Edytuj plik konfiguracyjny za pomocą komendy:

```
vi /etc/network/interfaces
```


- Na końcu pliku dodaj:

```
auto ethX:Y
iface ethX:Y inet static
address xxx.xxx.xxx.xxx
netmask 255.255.255.255
broadcast xxx.xxx.xxx.xxx
```



|Parametry|Wartości|
|---|---|
|X|numer głównego interfejsu (zazwyczaj eth0)|
|xxx.xxx.xxx.xxx|IP failover do skonfigurowania|
|Y|numer aliasu (zacząć od 0 następnie 1... w zależności od liczby IP do skonfigurowania)|


W przypadku dodawania kilku adresów IP należy dodać w tych samych liniach:
narastająca wartość Y (numer aliasu)

- Zrestartuj usługi nertwork za pomocą komendy:

```
service networking restart
```





## CentOS / Fedora

- Edytuj plik konfiguracyjny za pomocą komendy:

```
vi /etc/sysconfig/network-scripts/ifcfg-ethX:Y
```



|Parametry|Wartości|
|---|---|
|X|numer głównego interfejsu (zazwyczaj eth0)|
|Y|numer aliasu (zacząć od 0 następnie 1... w zależności od liczby IP do skonfigurowania)|



- Dodaj w pliku:

```
DEVICE="ethX:Y"
BOOTPROTO=static
IPADDR="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
BROADCAST="xxx.xxx.xxx.xxx"
ONBOOT=yes
```


- Zrestartuj usługi nertwork za pomocą komendy:

```
ifup ethX:Y
```





## W systemie Windows
Windows nie akceptuje konfiguracji adresu IP FailOver jako uzupełnienia konfiguracji głównego adresu IP w DHCP. 
Należy więc zmienić konfigurację karty sieciowej wprowadzając ręcznie informacje na temat dostarczonego adresu IP.


- Pobierz informacje sieciowe za pomocą polecenia "ipconfig":



![](images/img_3545.jpg){.thumbnail}

- Przejdź do panelu sterowania i w centrum sieci i udostępniania:



![](images/img_3543.jpg){.thumbnail}

- Zmień ustawienia karty:



![](images/img_3544.jpg){.thumbnail}

- Przejdź do właściwości interfejsu:



![](images/img_3546.jpg){.thumbnail}

- Przejdź do konfiguracji protokołu TCP/IPv4



![](images/img_3547.jpg){.thumbnail}

- W trybie konfiguracji ręcznej wprowadź konfigurację zaprezentowaną poniżej, dostosowując adresy IP w zależności od informacji otrzymanych za pomocą polecenia "ipconfig" i kliknij na "Zaawansowane:



![](images/img_3548.jpg){.thumbnail}

- Dodaj swój adres IP Failover:



![](images/img_3551.jpg){.thumbnail}


## 

- [Przełączanie adresu IP Fail Over]({legacy}1890)




## 
[Przewodniki Cloud]({legacy}1785)

