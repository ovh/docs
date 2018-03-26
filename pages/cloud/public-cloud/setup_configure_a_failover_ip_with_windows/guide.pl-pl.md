---
title: Konfiguracja adresu IP Fail Over w systemie Windows
excerpt: Konfiguracja adresu IP Fail Over w systemie Windows
slug: konfiguracja_adresu_ip_fail_over_w_systemie_windows
legacy_guide_number: g2046
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
Windows nie akceptuje konfigurowania adresu IP Failover jako uzupełnienie konfiguracji głównego adresu IP w DHCP. 
Należy więc ręcznie zmienić konfigurację karty sieciowej z dostarczonym IP.


- Pobierz informacje sieciowe za pomocą "ipconfig":



![](images/img_3609.jpg){.thumbnail}

- Przejdź do panelu sterowania i wybierz centrum sieci i udostępniania:



![](images/img_3602.jpg){.thumbnail}

- Zmień ustawienia karty:



![](images/img_3603.jpg){.thumbnail}

- Przejdź do właściwości interfejsu:



![](images/img_3604.jpg){.thumbnail}

- Przejdź do konfiguracji protokołu TCP/IPv4



![](images/img_3605.jpg){.thumbnail}

- Zmień tryb na ręczny i skorzystaj z konfiguracji przedstawionej poniżej dostosowując adresy IP w zależności od informacji, które otrzymałeś za pomocą ipconfig" klikając na "Zaawansowane:



![](images/img_3606.jpg){.thumbnail}

- Dodaj IP Failover:



![](images/img_3607.jpg){.thumbnail}


## 

- [Przeniesienie IP Fail Over]({legacy}1890)




## 
[Przewodniki Cloud]({legacy}1785)

