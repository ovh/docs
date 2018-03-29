---
title: 'Konfiguracja konta e-mail na urządzeniu iPhone lub iPad'
slug: hosting_www_konfiguracja_na_iphone_ios_91
excerpt: 'Dowiedz się, jak skonfigurować konto e-mail MX Plan na urządzeniu iPhone lub iPad'
section: Apple
---

**Ostatnia aktualizacja dnia 2018-03-29**

## Wprowadzenie

Konta e-mail usługi MX Plan mogą być skonfigurowane w jednej z kompatybilnych aplikacji lub programów pocztowych. Dzięki temu możesz wysyłać i odbierać wiadomości, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować konto e-mail MX Plan na urządzeniu iPhone lub iPad.**

## Wymagania początkowe

- Posiadanie konta e-mail MX Plan (zawartego w pakiecie MX Plan lub w usłudze [hostingu OVH](https://www.ovh.pl/hosting/){.external})
- Instalacja aplikacji Mail na Twoim urządzeniu
- Dane do logowania do konta e-mail, które chcesz skonfigurować

> [!primary]
>
> Niniejszy przewodnik dotyczy konfiguracji wersji iOS 7 i późniejszych.
>

## W praktyce

Konfigurację można przeprowadzić na dwa różne sposoby:

- **przy użyciu narzędzia Apple Devices**: kliknij link <https://autodiscover.mail.ovh.net/AppleDevices/> i postępuj zgodnie z kolejnymi;

- **przy użyciu asystenta konfiguracji w Twoim urządzeniu**.

Od tego momentu niniejszy przewodnik opisuje jedynie konfigurację kont e-mail na Twoim urządzeniu.

### Etap 1: dodanie konta

Otwórz `Ustawienia`{.action} Twojego urządzenia. Możesz dodać konto, korzystając z jednej z dwóch dostępnych metod, w zależności od wersji iOS:

- **wersja iOS 7, 8, 9 i 10**: kliknij `Poczta, Kontakty, Kalendarz`{.action}, następnie `Dodaj konto`{.action}. Wybierz `Inne`{.action}, następnie `Dodaj konto Mail`{.action};

- **wersja iOS 11**: kliknij `Konta i hasła`{.action}, następnie `Dodaj konto`{.action}. Wybierz `Inne`{.action}, następnie `Dodaj konto Mail`{.action}.

![mxplan](images/configuration-mail-ios-step1.png){.thumbnail}

Wpisz informacje dotyczące Twojego konta:

|Informacja|Opis|
|---|---|
|Nazwa|Wpisz nazwę nadawcy, która będzie się wyświetlać podczas wysyłki wiadomości e-mail przy użyciu tego konta.|
|Konto e-mail|Wpisz pełny adres e-mail.|
|Hasło|Wpisz hasło przypisane do tego konta e-mail.|
|Opis |Wpisz nazwę pozwalającą odróżnić to konto od Twoich pozostałych kont wyświetlających się w aplikacji Mail.|

Kliknij `Dalej`{.action}, po czym wpisz informacje, o które zostaniesz poproszony: 

|Informacja|Opis| 
|---|---| 
|IMAP lub POP|Rekomendujemy użycie protokołu **IMAP** (ustawiony domyślnie). Możesz również wybrać **POP** (przechowywanie e-maili lokalnie w aplikacji Mail).|
|Nazwa hosta (poczta przychodząca)|Wpisz serwer « ssl0.ovh.net ».|
|Nazwa użytkownika (poczta przychodząca)|Wpisz pełny adres e-mail.|
|Hasło (poczta przychodząca)|Wpisz hasło przypisane do tego konta e-mail.|  
|Nazwa hosta (poczta wychodząca)|Wpisz serwer « ssl0.ovh.net ».|
|Nazw użytkownika (poczta wychodząca)|Wpisz pełny adres e-mail.|
|Hasło (poczta wychodząca)|Wpisz hasło przypisane do tego konta e-mail.| 

Kliknij `Dalej`{.action}. Jeśli wpisane informacje są poprawne, logowanie zakończy się sukcesem.

![Exchange](images/configuration-mail-ios-step2.png){.thumbnail}

Na etapie wyboru aplikacji upewnij się, że zaznaczyłeś aplikację `Mail`{.action}, aby mogła ona używać tego konta, następnie kliknij `Zapisz`{.action}.

Wykonaj test wysyłki e-maili, aby sprawdzić, czy konto zostało poprawnie skonfigurowane.

Jeśli wprowadzasz ręcznie dane techniczne w ustawieniach konta, poniżej znajdziesz parametry, których należy użyć w przypadku oferty MX Plan:

- **konfiguracja IMAP**

|Typ serwera|Nazwa serwera|SSL|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|ssl0.ovh.net|Tak|993|
|Serwer poczty wychodzącej|ssl0.ovh.net|Tak|465|

- **konfiguracja POP**

|Typ serwera|Nazwa serwera|SSL|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|ssl0.ovh.net|Tak|995|
|Serwer poczty wychodzącej|ssl0.ovh.net|Tak|465|

### Etap 2: korzystanie z konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVH oferuje aplikację internetową dostępną pod adresem <https://mail.ovh.net/pl/> umożliwiającą korzystanie z Twojego konta e-mail przy użyciu przeglądarki. Możesz się do niej zalogować, używając tych samych danych, których użyłeś do logowania się do konta e-mail.

## Sprawdź również

[Konfiguracja konta Exchange na urządzeniu iPhone lub iPad](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_20132016_automatyczna_konfiguracja_z_poziomu_ios_iphone_-_ipad/){.external}.

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.