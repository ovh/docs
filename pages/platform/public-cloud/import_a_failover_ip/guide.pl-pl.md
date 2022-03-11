---
title: 'Importowanie adresu IP Fail Over'
excerpt: 'Dowiedz się, jak zaimportować adres IP Failover do projektu OVHcloud Public Cloud.'
slug: importowanie_adresu_ip_fail_over
legacy_guide_number: g1883
section: 'Zarządzanie w Panelu klienta OVH'
---

**Ostatnia aktualizacja: 10-03-2022**

## Wprowadzenie

Jeśli chcesz skonfigurować adres IP Failover w swoich instancjach, ponieważ:

- masz w instancji wiele witryn internetowych, 
- obsługujesz projekty międzynarodowe,
- chcesz migrować z serwera dedykowanego do instancji Public Cloud,

Można zaimportować adres IP Failover powiązany z inną usługą OVHcloud.

**Dowiedz się, jak zaimportować adres IP Failover do projektu OVHcloud Public Cloud.**

## Wymagania początkowe

- [Projekt Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) na koncie OVHcloud
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}
- [Adres IP Failover](https://www.ovhcloud.com/pl/bare-metal/ip/){.external}

## W praktyce

Najpierw zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, wybierz projekt w sekcji `Public Cloud`{.action}. Wybierz pozycję `Failover IP`{.action} w sekcji "Network".

Kliknij przycisk `Operacje`{.action} i wybierz opcję ` Importuj adres IP`{.action}, aby wyświetlić wszystkie adresy IP, które można zaimportować do projektu Public Cloud.

![IP Section](images/import1.png){.thumbnail}

Kliknij ikonę z trzema kropkami po prawej stronie adresu IP, który chcesz zaimportować, a następnie kliknij pozycję `Importuj ten IP Failover`{.action}.

![Import Failover IP](images/import2.png){.thumbnail}

Kliknij przycisk `Importuj`{.action}:

![Import confirm](images/importconfirm.png){.thumbnail}

Spowoduje to ponowne załadowanie strony. Zostanie wyświetlone potwierdzenie migracji adresu IP.

Po zaimportowaniu adresu IP Failover kliknij ikonę z trzema kropkami (po prawej) i wybierz pozycję `Zmodyfikuj powiązaną instancję`{.action}.

![Import Failover IP](images/modifyinstance.png){.thumbnail}

Zostanie wyświetlone okno umożliwiające wybranie instancji, do której ma zostać przeniesiony adres IP:

![Import Failover IP](images/modifyinstance1.png){.thumbnail}

Kliknij przycisk `Dołącz`{.action}. Spowoduje to ponowne załadowanie strony i wyświetlenie potwierdzenia, że adres IP został powiązany z instancją:

![Import Failover IP](images/modifycompleted.png){.thumbnail}

Adres IP Failover będzie już dołączony do instancji.

Następnym krokiem jest skonfigurowanie adresu IP w systemie operacyjnym. Przewodnik jest dostępny tutaj: [Konfiguracja adresu IP Failover](https://docs.ovh.com/pl/public-cloud/konfiguracja-adresu-ip-failover/){.external}.

## Sprawdź również

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.
