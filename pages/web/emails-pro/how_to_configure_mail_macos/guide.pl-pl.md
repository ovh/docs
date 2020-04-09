---
title: 'Konfiguracja konta E-mail Pro w aplikacji Mail na urządzeniach z systemem macOS'
slug: konfiguracja-email-pro-mail-macos
excerpt: 'Dowiedz się, jak skonfigurować Twoje konto E-mail Pro w aplikacji Mail na urządzeniach z systemami macOS: El Capitan, Sierra i High Sierra'
section: 'Konfiguracja programu pocztowego'
order: 4
---

**Ostatnia aktualizacja dnia 2020-04-09**

## Wprowadzenie

Konta E-mail Pro mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować Twoje konto E-mail Pro w aplikacji Mail na urządzeniach z systemami macOS: El Capitan, Sierra i High Sierra.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak ich konfiguracja, zarządzanie oraz utrzymanie należy do Ciebie. Jesteś tym samym odpowiedzialny za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”.
> 

## Wymagania początkowe

- Wykupienie usługi [E-mail Pro](https://www.ovh.pl/emaile/email-pro/){.external}
- Instalacja aplikacji Mail na Twoim urządzeniu
- Dane do logowania do konta e-mail, które chcesz skonfigurować

> [!primary]
>
> Niniejszy przewodnik dotyczy konfiguracji następujących wersji macOS: El Capitan, Sierra, High Sierra.
>

## W praktyce

Konfigurację można przeprowadzić na dwa różne sposoby:

- **przy użyciu narzędzia Apple Devices OVHcloud**: kliknij link [https://autodiscover.mail.ovh.net/AppleDevices/](https://autodiscover.mail.ovh.net/AppleDevices/){.external} i postępuj zgodnie z kolejnymi instrukcjami;

- **przy użyciu asystenta konfiguracji Twojej aplikacji Mail**: uruchom aplikację Mail na Twoim urządzeniu.

Od tego momentu niniejszy przewodnik opisuje jedynie konfigurację kont e-mail przy użyciu aplikacji Mail.

### Etap 1: dodanie konta

> [!primary]
>
> W przewodniku używamy oznaczenia serwera: pro**X**.mail.ovh.net. Zastąp “X” cyfrą oznaczającą serwer powiązany z Twoją usługą E-mail Pro.
> 
> Odszukaj cyfrę w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, w sekcji `Web`{.action} =>  `E-mail Pro`{.action} => w kolumnie po lewej stronie. Nazwa serwera jest widoczna w ramce *Logowanie* w zakładce `Informacje ogólne`{.action}.
>

Po uruchomieniu aplikacji Mail na Twoim urządzeniu możesz dodać konto, korzystając z jednej z dwóch dostępnych metod.

- **Podczas pierwszego uruchomienia aplikacji**: wybierz w oknie nazwę dostawcy konta Mail. Wybierz `Inne konto Mail`{.action}, i przejdź do kolejnych kroków.

- **Jeżeli inne konto zostało wcześniej skonfigurowane**: kliknij `Mail`{.action} na górze Twojego ekranu, a następnie kliknij `Dodaj konto`{.action}. Wybierz `Inne konto Mail`{.action}, i przejdź do kolejnych kroków.

![email pro - profesjonalna poczta e-mail](images/configuration-mail-sierra-step1.png){.thumbnail}

Wpisz informacje dotyczące Twojego konta:

|Informacja|Opis|  
|---|---|  
|Nazwa|Wpisz nazwę nadawcy, która będzie się wyświetlać podczas wysyłki wiadomości e-mail przy użyciu tego konta.| 
|Konto e-mail|Wpisz pełny adres e-mail.| 
|Hasło|Wpisz hasło przypisane do tego konta e-mail.|  

Kliknij przycisk `Zaloguj się`{.action}. Pojawi się komunikat, w którym zostaniesz poproszony o kontynuowanie i wpisanie kolejnych informacji.

|Informacja|Opis|  
|---|---|  
|Typ konta|Pozostaw IMAP zaznaczony w rozwijanym menu.| 
|Serwer poczty przychodzącej|Wpisz serwer « pro**X**.mail.ovh.net ».| 
|Serwer poczty wychodzącej|Wpisz serwer « pro**X**.mail.ovh.net ».|  

Kliknij ponownie przycisk `Zaloguj się`{.action}. Jeśli wpisane informacje są poprawne, logowanie zakończy się sukcesem.

![email pro - profesjonalna poczta e-mail](images/configuration-mail-sierra-step2.png){.thumbnail}

Na etapie wyboru aplikacji upewnij się, że zaznaczyłeś aplikację `Mail`{.action}, aby mogła ona używać tego konta, następnie kliknij `Zakończ`{.action}.

Wykonaj test wysyłki e-maili, aby sprawdzić, czy konto zostało poprawnie skonfigurowane.

Jeśli wprowadzasz ręcznie dane techniczne w ustawieniach konta, poniżej znajdziesz parametry, których należy użyć w przypadku oferty E-mail Pro:

|Typ serwera|Nazwa serwera|SSL|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|pro**X**.mail.ovh.net|Tak|993|
|Serwer poczty wychodzącej|pro**X**.mail.ovh.net|Tak|587|

### Etap 2: korzystanie z konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVHcloud oferuje aplikację internetową posiadającą [funkcje do pracy zespołowej](https://www.ovh.pl/emaile/){.external} dostępną pod adresem [https://www.ovh.pl/mail/](https://www.ovh.pl/mail/){.external}. Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail. 

## Sprawdź również

[Konfiguracja konta e-mail MX Plan lub udostępnionego na hostingu w aplikacji Mail na urządzeniach z systemem macOS](https://docs.ovh.com/pl/emails/konfiguracja-mail-macos/){.external}

[Konfiguracja konta Exchange w aplikacji Mail na macOS](https://docs.ovh.com/pl/microsoft-collaborative-solutions/konfiguracja-mail-macos/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie [https://community.ovh.com/en](https://community.ovh.com/en){.external}.