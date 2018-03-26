---
title: Konfiguracja adresu IP Fail Over w Debianie
excerpt: Konfiguracja adresu IP Fail Over w Debianie
slug: konfiguracja_adresu_ip_fail_over_w_debianie
legacy_guide_number: g2042
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
|X|Numer interfejsu głównego (zazwyczaj eth0)|
|xxx.xxx.xxx.xxx|IP failover do skonfigurowania|
|Y|Numer aliasu (począwszy od 0 następnie 1... w zależności od liczby IP do skonfigurowania)|


Jeśli chcesz dodać kilka adresów IP, dodaj w tych samych liniach:
zwiększając wartość Y (numer aliasu)


## Restart usługi sieciowej

- Zrestartuj usługi sieciowe za pomocą tego polecenia:

```
service networking restart
```





## 

- [Przeniesienie IP Fail Over]({legacy}1890)




## 
[Przewodniki Cloud]({legacy}1785)

