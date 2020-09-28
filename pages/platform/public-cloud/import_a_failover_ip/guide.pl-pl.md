---
title: 'Importowanie adresu IP Fail Over'
excerpt: 'Dowiedz się, jak zaimportować adres IP Failover do projektu OVHcloud Public Cloud.'
slug: importowanie_adresu_ip_fail_over
legacy_guide_number: g1883
section: 'Zarządzanie w Panelu klienta OVH'
---

**Ostatnia aktualizacja: 06-12-2019**

## Wprowadzenie

Jeśli chcesz skonfigurować adres IP Failover w swoich instancjach, ponieważ:

- masz w instancji wiele witryn internetowych, 
- obsługujesz projekty międzynarodowe,
- chcesz migrować z serwera dedykowanego do instancji Public Cloud,

... możesz zaimportować adres IP Failover powiązany z inną usługą OVHcloud.

**Dowiedz się, jak zaimportować adres IP Failover do projektu OVHcloud Public Cloud.**

## Wymagania początkowe

* dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}
* [adres IP Failover](https://www.ovh.pl/serwery_dedykowane/ip_failover.xml){.external} przypisany do [serwera dedykowanego OVHcloud](https://www.ovh.pl/serwery_dedykowane/){.external}

## W praktyce

Najpierw zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, kliknij menu `Public Cloud`{.action} i wybierz `Projekt`{.action}.

Wybierz pozycję `Adres IP Failover`{.action} w sekcji Sieć.

![IP Section](images/import.png){.thumbnail}

Zostaną wyświetlone wszystkie adresy IP, które można zaimportować do projektu Public Cloud:

![IP Section](images/import1.png){.thumbnail}

Kliknij ikonę z trzema kropkami po prawej stronie adresu IP, który chcesz zaimportować, a następnie kliknij pozycję `Importuj ten adres IP Failover`{.action}.

![Import Failover IP](images/import2.png){.thumbnail}

Kliknij przycisk `Importuj`{.action}:

![Import Failover IP](images/importconfirm.png){.thumbnail}

Spowoduje to ponowne załadowanie strony. Zostanie wyświetlone potwierdzenie migracji adresu IP.

Po zaimportowaniu adresu IP Failover kliknij ikonę z trzema kropkami (po prawej) i wybierz pozycję `Zmodyfikuj powiązaną instancję`{.action}.

![Import Failover IP](images/modifyinstance.png){.thumbnail}

Zostanie wyświetlone okno umożliwiające wybranie instancji, do której ma zostać przeniesiony adres IP:

![Import Failover IP](images/modifyinstance1.png){.thumbnail}

Kliknij przycisk `Dołącz`{.action}. Spowoduje to ponowne załadowanie strony i wyświetlenie potwierdzenia, że adres IP został powiązany z instancją:

![Import Failover IP](images/modifycompleted.png){.thumbnail}

Adres IP Failover będzie już dołączony do instancji.

Następnym krokiem jest skonfigurowanie adresu IP w systemie operacyjnym. Przewodnik jest dostępny tutaj: [Konfiguracja adresu IP Failover](https://docs.ovh.com/gb/en/public-cloud/configure_a_failover_ip/){.external}

## Sprawdź również

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.
