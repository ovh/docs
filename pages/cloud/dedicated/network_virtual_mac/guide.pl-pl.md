---
title: 'Przypisanie wirtualnego adresu MAC do IP Failover'
slug: network-virtual-mac
excerpt: 'Dowiedz się, jak utworzyć wirtualny adres MAC i jak powiązać go z IP Failover'
section: 'Sieć & IP'
---

**Ostatnia aktualizacja z dnia 08-11-2018**

## Wprowadzenie

OVH umożliwia Ci powiązanie wirtualnego adresu MAC z adresem IP, abyś mógł wdrażać na Twoim serwerze wirtualne maszyny z konfiguracją mostka sieciowego.

**Niniejszy przewodnik wyjaśnia, jak utworzyć wirtualny adres MAC i jak go powiązać z adresem IP Failover.**


## Wymagania początkowe

* Posiadanie [serwera dedykowanego](https://www.ovh.pl/serwery_dedykowane/){.external}
* Posiadanie [adresu IP Failover](https://www.ovh.pl/serwery_dedykowane/ip_failover.xml){.external} lub bloku IP Failover (RIPE)
* Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}


## W praktyce

### Przypisanie adresu MAC

Po zalogowaniu się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} kliknij menu `Dedykowane`{.action}, po czym kliknij sekcję `IP`{.action} w kolumnie po lewej stronie.

![IPFO](images/virtual_mac_01.png){.thumbnail}

Zlokalizuj następnie na liście Twój adres IP Failover (lub blok IP Failover), po czym kliknij przycisk `...`{.action}, aby wyświetlić listę opcji.

![IPFO](images/virtual_mac_02.png){.thumbnail}

Po wyświetleniu okna dialogowego "Dodaj wirtualny adres MAC" wybierz typ adresu z rozwijanej listy, wprowadź nazwę maszyny wirtualnej i kliknij `Potwierdź`{.action}.

> [!primary]
>
> **Typ**: jest to rodzaj wirtualnego adresu MAC („VMware” będzie adresem MAC utworzonym dla systemu VMware ESXi, podczas gdy „OVH” będzie odpowiedni dla wszystkich innych systemów wirtualizacji).
>
> **Nazwa wirtualnej maszyny**: jest to nazwa dla wirtualnego adresu MAC ułatwiająca odnalezienie pary IP/MAC.
>

![IPFO](images/virtual_mac_03.png){.thumbnail}


> [!primary]
>
> Pamiętaj, aby przypisać wirtualny adres MAC podczas konfiguracji Twojej wirtualnej maszyny.
> 

### Usuwanie adresu MAC

> [!warning]
>
> Usunięcie adresu MAC jest nieodwracalne, nie jest możliwe jego późniejsze przywrócenie.
> 

Aby usunąć wirtualny adres MAC powiązany z IP Failover, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, następnie przejdź do menu `Dedykowane`{.action} i sekcji `IP`{.action}. Wybierz odpowiedni serwer, aby wyświetliły się powiązane z nim adresy IP Failover (lub blok IP).

Aby zakończyć, kliknij przycisk `...`{.action} po prawej stronie, po czym kliknij `Usuń wirtualny adres MAC`{.action}.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.