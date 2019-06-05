---
title: IP Failover konfigūravimas neišjungus sitemos
excerpt: IP Failover konfigūravimas neišjungus sitemos
slug: ip_failover_konfiguravimas_neisjungus_sitemos
legacy_guide_number: g1884
---


## 
Priklausomai nuo papildomo (Failover) IP adreso naudojimo, nebūtina konfigūruoti tinklo konfigūracijos failo, kad pridėtumėte IP adresą. 

Iš tiesų, papildomus IP adresus galima pridėti naudojant tik vieną komandą.

Šiame gide paaiškinama, kaip greitai pridėti papildomą IP adresą virtualioje mašinoje (tinka tik Linux OS).
Ši konfigūracija nėra nuolatinė, kitaip sakant, perkrovus virtualų serverį, IP informacija bus prarasta. Nuolatinis IP priskyrimas aprašytas šiame gide:

- [Nuolatinis IP Failover priskyrimas]({legacy}1885).




## Reikalavimai

- Turėti Public Cloud VM.
- Turėti į Public Cloud importuotą papildomą IP (Failover).
- Galėti jungtis prie VM per SSH.


Šiame gide IP Failover žymimas simboliais X.X.X.X. Realiose komandose tai keiskite papildomu IP adresu.


## 

- Terminale įveskite:

```
admin@vserver1:~$ sudo ip addr add X.X.X.X/32 dev eth0
```



Pavyzdys:

```
admin@vserver1:~$ sudo ip addr add 87.98.177.67/32 dev eth0
```


Tikrinimas
Norėdami patikrinti, ar IP adresas veikia, paleiskite ping komandą terminale (ši komanda veikia Windows, Linux ir MAC sistemose).

Pavyzdys:

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


Matome, kad IP veikia.


## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

