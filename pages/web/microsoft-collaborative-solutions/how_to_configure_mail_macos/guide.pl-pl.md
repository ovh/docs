---
title: 'Konfiguracja konta Exchange w aplikacji Mail na macOS'
slug: konfiguracja-mail-macos
excerpt: 'Dowiedz się, jak skonfigurować Twoje konto Exchange w aplikacji Mail na macOS - El Capitan, Sierra i High Sierra'
section: 'Konfiguracja programu pocztowego Exchange'
---

**Ostatnia aktualizacja dnia 2018-03-27**

## Wprowadzenie

Konta Exchange mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych.  Dzięki temu możesz używać Twojego konta e-mail oraz funkcji do pracy zespołowej Exchange, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować Twoje konto Exchange w aplikacji Mail na urządzeniach z systemami macOS: El Capitan, Sierra i High Sierra.**


## Wymagania początkowe

- Wykupienie kont e-mail [Exchange](https://www.ovhcloud.com/pl/emails/){.external}
- Instalacja aplikacji Mail na Twoim urządzeniu
- Dane do logowania do konta e-mail, które chcesz skonfigurować

> [!primary]
>
> Niniejszy przewodnik dotyczy konfiguracji następujących wersji macOS: El Capitan, Sierra, High Sierra.
>

## W praktyce

Konfigurację można przeprowadzić na dwa różnej sposoby:

- **przy użyciu narzędzia Apple Devices OVH**: kliknij link <https://autodiscover.mail.ovh.net/AppleDevices/> i postępuj zgodnie z kolejnymi instrukcjami;

- **przy użyciu asystenta konfiguracji Twojej aplikacji Mail**: uruchom aplikację Mail na Twoim urządzeniu.

Od tego momentu niniejszy przewodnik opisuje jedynie konfigurację kont e-mail przy użyciu aplikacji Mail.

### Etap 1: dodanie konta

Po uruchomieniu aplikacji Mail na Twoim urządzeniu możesz dodać konto, korzystając z jednej z dwóch dostępnych metod.

- **Podczas pierwszego uruchomienia aplikacji**: wybierz w oknie nazwę dostawcy konta Mail. Wybierz `Exchange`{.action} i przejdź do kolejnych kroków.

- **Jeżeli inne konto zostało wcześniej skonfigurowane**: kliknij `Mail`{.action} na górze Twojego ekranu, a następnie kliknij `Dodaj konto`{.action}. Wybierz `Exchange`{.action} i przejdź do kolejnych kroków.

![Exchange](images/configuration-mail-macos-step1.png){.thumbnail}

Wpisz informacje dotyczące Twojego konta:

|Dane|Opis| 
|---|---| 
|Nazwisko|Wpisz nazwę nadawcy, która ma się wyświetlać podczas wysyłki e-maili przy użyciu tego konta.|
|Konto e-mail|Wpisz pełny adres e-mail.|
|Hasło|Wpisz hasło przypisane do tego konta e-mail.|  

Kliknij przycisk `Zaloguj się`{.action}. Jeśli wpisane informacje są poprawne, i jeśli domena jest prawidłowo skonfigurowana w usłudze Exchange, logowanie zakończy się sukcesem.

![Exchange](images/configuration-mail-macos-step2.png){.thumbnail}

Na etapie wyboru aplikacji upewnij się, że zaznaczyłeś co najmniej aplikację `Mail`{.action}, aby mogła ona używać tego konta. Pozostałe aplikacje mogą używać niektórych funkcji do pracy zespołowej dostępnych w programie Exchange. Po dokonaniu wyboru kliknij `Zakończ`{.action}.

Wykonaj test wysyłki e-maili, aby sprawdzić, czy konto zostało poprawnie skonfigurowane.

![Exchange](images/configuration-mail-macos-step3.png){.thumbnail}

Jeśli nie udaje Ci się zalogować, zalecamy, abyś:

- sprawdź konfigurację domeny w usłudze Exchange w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, zakładka `Powiązane domeny`{.action}, kolumna `Diagnostyka`{.action} w tabeli;

- wprowadź ręcznie linki dostępowe do usługi Exchange. Kontynuuj operację mimo alertu o bezpieczeństwie certyfikatu, następnie wpisz w polach `URL wewnętrzny`{.action} i `URL zewnętrzny`{.action} informacje o serwerze, na którym hostowana jest Twoja usługa Exchange.

W celu sprawdzenia nazwy serwera zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i przejdź do usługi Exchange. Następnie przejdź do zakładki `Informacje ogólne`{.action} i wyszukaj serwer, który pojawia się w ramce `Połączenie`{.action}.

### Etap 2: korzystanie z konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVH oferuje aplikację internetową posiadającą [funkcje do pracy zespołowej](https://www.ovhcloud.com/pl/emails/){.external} dostępną pod adresem <https://www.ovh.pl/mail/>. Możesz się do niej zalogować, używając tych samych danych, których użyłeś do konfiguracji konta e-mail przez Mail.

## Sprawdź również

[Konfiguracja konta e-mail włączonego do usługi MX Plan lub do usługi hostingu w aplikacji Mail na urządzeniach z systemem macOS](https://docs.ovh.com/pl/emails/konfiguracja-mail-macos/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.