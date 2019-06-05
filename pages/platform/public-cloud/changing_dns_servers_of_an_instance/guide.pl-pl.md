---
title: Zmiana serwerów DNS instancji
excerpt: Zmiana serwerów DNS instancji
slug: zmiana_serwerow_dns_instancji
legacy_guide_number: g1985
section: Tutoriale
---


## 
Domyślny serwer DNS instancji to serwer OVH (213.186.33.99).
Możliwe, że będziesz chciał zmienić serwer DNS lub dodać kolejny. 
Serwery DNS są konfigurowane automatycznie przez serwer DHCP i nie można ich zmienić edytując plik resolv.conf.

Przewodnik ten wyjaśnia procedurę zmiany konfiguracji DHCP dla instancji, w celu zmiany serwerów DNS instancji.


## Wstępne wymagania

- Instancja




## 

- Zaloguj się do instancji przez SSH


```
user@postelocal:~$ ssh admin@ip_de_l'instance
```


- Skorzystaj z trybu użytkownika root


```
admin@instance:~$ sudo su
```



Można odczytać plik resolv.conf, aby sprawdzić serwer DNS instancji:


```
root@instance:~$ cat /etc/resolv.conf

domain local
search local
nameserver 213.186.33.99
```



- Edytuj plik /etc/dhcp/dhclient.conf


```
root@instance:~$ vim /etc/dhcp/dhclient.conf
```


- Dodaj linię pozwalającą na dodanie nowego serwera DNS poza serwerem domyślnym:


```
supersede domain-name-servers 213.186.33.99, 127.0.0.1;
```



Po wykonaniu tej czynności instancja bedzie dysponować 2 skonfigurowanymi serwerami DNS:


```
root@instance:~$ cat /etc/resolv.conf

domain local
search local
nameserver 213.186.33.99
nameserver 127.0.0.1
```




## 
[Przewodniki Cloud]({legacy}1785)

