---
title: 'Konfiguracja konta e-mail w aplikacji Mail na urządzeniach macOS'
slug: konfiguracja-mail-macos
excerpt: 'Dowiedz się, jak skonfigurować konto MX Plan w aplikacji Mail na urządzeniach z systemem macOS El Capitan, Sierra i High Sierra'
section: Apple
---

**Ostatnia aktualizacja dnia 2018-03-26**

## Wprowadzenie

Konta e-mail MX Plan mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz wysyłać i odbierać wiadomości, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować konto MX Plan w aplikacji Mail na urządzeniach z systemem macOS El Capitan, Sierra i High Sierra.**

## Wymagania początkowe

- Posiadanie konta e-mail MX Plan (zawartego w pakiecie MX Plan lub w usłudze [hostingu OVH](https://www.ovh.pl/hosting/){.external})
- Instalacja aplikacji Mail na Twoim urządzeniu
- Dane do logowania do konta e-mail, które chcesz skonfigurować

> [!primary]
>
> Niniejszy przewodnik dotyczy konfiguracji następujących wersji macOS: El Capitan, Sierra, High Sierra.
>

## W praktyce

Konfigurację można przeprowadzić na dwa różne sposoby:

- **przy użyciu narzędzia Apple Devices OVH**: kliknij link [https://autodiscover.mail.ovh.net/AppleDevices/](https://autodiscover.mail.ovh.net/AppleDevices/){.external} i postępuj zgodnie z kolejnymi instrukcjami;

- **przy użyciu asystenta konfiguracji Twojej aplikacji Mail**: uruchom aplikację Mail na Twoim urządzeniu.

Od tego momentu niniejszy przewodnik opisuje jedynie konfigurację kont e-mail przy użyciu aplikacji Mail.

### Etap 1: dodanie konta

Po uruchomieniu aplikacji Mail na Twoim urządzeniu możesz dodać konto, korzystając z jednej z dwóch dostępnych metod.

- **Podczas pierwszego uruchomienia aplikacji**: wybierz w oknie nazwę dostawcy konta Mail. Wybierz `Inne konto Mail`{.action}, i przejdź do kolejnych kroków.

- **Jeżeli inne konto zostało wcześniej skonfigurowane**: kliknij `Mail`{.action} na górze Twojego ekranu, a następnie kliknij `Dodaj konto`{.action}. Wybierz `Inne konto Mail`{.action} i przejdź do kolejnych kroków.

![mxplan](images/configuration-mail-macos-step1.png){.thumbnail}

Wpisz informacje dotyczące Twojego konta:

|Informacja|Opis|
|---|---|
|Nazwisko|Wpisz kompletny adres e-mail.|
|Konto e-mail|Wpisz kompletny adres e-mail.|
|Hasło|Wpisz hasło przypisane do tego konta e-mail.|

Kliknij przycisk `Zaloguj się`{.action}. Pojawi się komunikat, w którym zostaniesz poproszony o kontynuowanie i wpisanie kolejnych informacji.

|Informacja|Opis|
|---|---|
|Typ konta|Rekomendujemy użycie protokołu **IMAP** (ustawiony domyślnie). Możesz jednak wybrać w rozwijanym menu **POP** (przechowywanie e-maili lokalnie w aplikacji Mail).|
|Serwer poczty przychodzącej|Wpisz serwer "ssl0.ovh.net".|
|Serwer poczty wychodzącej|Wpisz serwer "ssl0.ovh.net".|

Kliknij ponownie przycisk `Zaloguj się`{.action}. Jeśli wpisane informacje są poprawne, logowanie zakończy się sukcesem.

![mxplan](images/configuration-mail-macos-step2.png){.thumbnail}

Na etapie wyboru aplikacji upewnij się, że zaznaczyłeś aplikację `Mail`{.action}, aby mogła ona używać tego konta, następnie kliknij `Zakończ`{.action}.

Wykonaj test wysyłki e-maili, aby sprawdzić, czy konto zostało poprawnie skonfigurowane.

Jeśli wprowadzasz ręcznie dane techniczne w ustawieniach konta, poniżej znajdziesz parametry, których należy użyć w przypadku oferty MX Plan:

- **konfiguracja IMAP**

|Typ serwera|Nazwa serwera|SSL|Port|
|---|---|---|---|
|Poczta przychodząca|ssl0.ovh.net|Tak|993|
|Poczta wychodząca|ssl0.ovh.net|Tak|465| 

- **konfiguracja POP**

|Typ serwera|Nazwa serwera|SSL|Port|
|---|---|---|---|
|Poczta przychodząca|ssl0.ovh.net|Tak|995|
|Poczta wychodząca|ssl0.ovh.net|Tak|465|

### Etap 2: korzystanie z konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVH oferuje aplikację internetową dostępną pod adresem [https://www.ovh.pl/mail/](https://www.ovh.pl/mail/){.external} umożliwiającą korzystanie z Twojego konta e-mail przy użyciu wyszukiwarki. Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail.

## Sprawdź również

[Konfiguracja konta Exchange w aplikacji Mail na urządzeniach z systemem macOS](https://docs.ovh.com/pl/microsoft-collaborative-solutions/konfiguracja-mail-macos/){.external}.

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.