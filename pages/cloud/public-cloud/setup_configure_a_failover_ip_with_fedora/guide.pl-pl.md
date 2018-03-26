---
title: Konfiguracja adresu IP Fail Over w systemie Fedora
excerpt: Konfiguracja adresu IP Fail Over w systemie Fedora
slug: konfiguracja_adresu_ip_fail_over_w_systemie_fedora
legacy_guide_number: g2045
section: Tutoriale
---


## 
Chcesz skonfigurować adres IP Fail Over na swoich instancjach, ponieważ:

- masz kilka stron na swojej instancji,
- obsługujesz projekty międzynarodowe.

Możesz zamówić i zaimportować adres IP Fail Over dla swoich instancji Public Cloud. 

Adresy IP Fail Over nie są automatycznie konfigurowane na instancji.

Przewodnik ten wyjaśnia, jak skonfigurować interfejs sieciowy instancji, aby dodać do niej adres IP Fail Over.


## Wstępne wymagania

- [Utworzenie instancji w panelu klienta OVH]({legacy}1775)
- Adres IP Failover




## Konfiguracja interfejsu

- Edytuj plik konfiguracyjny za pomocą polecenia:

```
vi /etc/sysconfig/network-scripts/ifcfg-ethX:Y
```



|Parametry|Wartości|
|---|---|
|X|Numer interfejsu głównego (zazwyczaj eth0)|
|Y|Numer aliasu (począwszy od 0 następnie 1... w zależności od liczby IP do skonfigurowania)|



- Dodaj w pliku:

```
DEVICE="ethX:Y"
BOOTPROTO=static
IPADDR="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
BROADCAST="xxx.xxx.xxx.xxx"
ONBOOT=yes
```





## Restart usługi sieciowej

- Zrestartuj usługi sieciowe za pomocą tego polecenia:

```
ifup ethX:Y
```





## 

- [Przeniesienie IP Fail Over]({legacy}1890)




## 
[Przewodniki Cloud]({legacy}1785)

