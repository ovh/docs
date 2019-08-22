---
title: Konfiguracja adresu IP Fail Over
excerpt: Konfiguracja adresu IP Fail Over
slug: konfiguracja_adresu_ip_fail_over
legacy_guide_number: g1884
section: Tutoriale
---


## 
W przypadku chwilowego zapotrzebowania na adres IP Fail Over, nie trzeba konfigurować pliku z konfiguracja sieciową, aby dodać IP. 
Można skonfigurować adres IP Fail Over za pomocą jednej linii poleceń. 

Przewodnik ten wyjaśnia, jak szybko skonfigurować adres IP Fail Over na instancji (tylko dystrybucje Linux).
Konfiguracja ta nie jest trwała, co oznacza, że w przypadku restartu wirtualnego serwera konfiguracja zostanie utracona. Wdrożenie konfiguracji trwałej jest opisane w tym przewodniku:

- [Trwała konfiguracja IP Fail Over]({legacy}1885)




## Wstępne wymagania

- Posiadanie instancji Public Cloud.
- Zaimportowanie adresu IP Fail Over do projektu Public Cloud.
- Zalogowanie się do instancji przez SSH.


W tym przewodniku IP Fail Over jest przedstawiane w formie X.X.X.X. Należy zastąpić tę wartość swoim adresem IP Fail Over.


## 

- W terminalu wpisz:

```
admin@vserver1:~$ sudo ip addr add X.X.X.X/32 dev eth0
```


- Przykład

```
admin@vserver1:~$ sudo ip addr add 87.98.177.67/32 dev eth0
```


Weryfikacja

Aby sprawdzić, czy IP odpowiada, wykonaj prosty test ping z poziomu lokalnego terminala.

Przykład:

```
user@hostname:~$ ping 87.98.177.67
PING 87.98.177.67 (87.98.177.67) 56(84) bytes of data.
64 bytes from 87.98.177.67: icmp_req=1 ttl=60 time=0.819 ms
64 bytes from 87.98.177.67: icmp_req=2 ttl=60 time=0.564 ms
64 bytes from 87.98.177.67: icmp_req=3 ttl=60 time=0.615 ms
64 bytes from 87.98.177.67: icmp_req=4 ttl=60 time=0.559 ms
^C
--- 87.98.177.67 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3000ms
rtt min/avg/max/mdev = 0.559/0.639/0.819/0.107 ms
```


IP odpowiada prawidłowo.


## 
[Przewodniki Cloud]({legacy}1785)

