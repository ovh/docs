---
title: Importowanie adresu Additional IP
excerpt: "Dowiedz się, jak zaimportować adres Additional IP do projektu OVHcloud Public Cloud"
updated: 2023-01-04
---

> [!primary]
>
> Od 6 października 2022 nasze rozwiązanie "Failover IP" nazywa się teraz [Additional IP](https://www.ovhcloud.com/pl/network/additional-ip/). To nie ma wpływu na jego funkcje.
>

## Wprowadzenie

Jeśli chcesz skonfigurować adres Additional IP w swoich instancjach, ponieważ:

- masz w instancji wiele witryn internetowych, 
- obsługujesz projekty międzynarodowe,
- chcesz migrować z serwera dedykowanego do instancji Public Cloud,

Można zaimportować adres Additional IP powiązany z inną usługą OVHcloud.

**Dowiedz się, jak zaimportować adres Additional IP do projektu OVHcloud Public Cloud.**

## Wymagania początkowe

- [Projekt Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) na koncie OVHcloud
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}
- [Adres Additional IP](https://www.ovhcloud.com/pl/bare-metal/ip/){.external}

> [!warning]
> Ta funkcja nie jest aktualnie dostępna dla instancji Metal.
>

## W praktyce

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i wybierz Twój projekt w sekcji `Public Cloud `{.action}.

W menu po lewej stronie otwórz `Public IPs`{.action} w `Network`.

Otwórz kartę `Additional IP`{.action} i kliknij przycisk `Operacje`{.action}. Wybierz `Importuj Additional IP`{.action}, aby wyświetlić wszystkie adresy IP, które mogą być importowane do Twojego projektu Public Cloud.

![Sekcja IP](images/import22_01.png){.thumbnail}

Jeśli nie posiadasz jeszcze additional IP w Twoim projekcie Public Cloud, na stronie głównej pojawi się opcja importu dodatkowego adresu IP.

Kliknij `...`{.action} obok adresu IP, który chcesz importować i kliknij `Importuj ten Additional IP`{.action}.

![Dodatkowe IP](images/import22_02.png){.thumbnail}

Zatwierdź klikając `Importuj`{.action}.

![Import potwierdzenia](images/import22_03.png){.thumbnail}

Odczekaj kilka minut, aż import zostanie zrealizowany. Otwórz zakładkę `Additional IP`{.action}, aby wyszukać zaimportowany adres Additional IP. W razie potrzeby odśwież stronę.

Kliknij `...`{.action} po prawej stronie i wybierz `Zmień powiązaną`{.action} instancję.

![Dodatkowe IP](images/import22_04.png){.thumbnail}

Pojawi się okno, w którym wybierz instancję, do której należy przypisać Twój adres IP.

![Dodatkowe IP](images/import22_05.png){.thumbnail}

Kliknij przycisk `Dołącz`{.action}, aby potwierdzić. Na stronie pojawi się komunikat modyfikacji.

> [!warning]
>
> Dodatkowy adres IP nie może być przenoszony między różnymi strefami. Na przykład adres IP zlokalizowany w centrum danych SBG może zostać przeniesiony do GRA lub RBX, ale nie do BHS.
>

Twój adres Additional IP zostanie teraz przypisany do Twojej instancji.

Następnym krokiem jest konfiguracja IP w systemie operacyjnym. Zapoznaj się [z przewodnikiem dotyczącym tej konfiguracji](/pages/public_cloud/public_cloud_network_services/getting-started-04-configure-additional-ip-to-instance).

## Sprawdź również

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
