---
title: 'Konfiguracja konta E-mail Pro w programie Outlook 2016 na urządzeniu Mac'
slug: konfiguracja-outlook-2016-mac
excerpt: 'Dowiedz się, jak skonfigurować konto E-mail Pro w programie Outlook 2016 na urządzeniu Mac'
section: 'Konfiguracja programu pocztowego'
order: 2
---

**Ostatnia aktualizacja dnia 2020-04-09**

## Wprowadzenie

Konta E-mail Pro mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować konto E-mail Pro w programie Outlook 2016 na urządzeniu Mac.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak ich konfiguracja, zarządzanie oraz utrzymanie należy do Ciebie. Jesteś tym samym odpowiedzialny za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”.
> 

## Wymagania początkowe

- Wykupienie usługi [E-mail Pro](https://www.ovh.pl/emaile/email-pro/){.external}
- Instalacja aplikacji Microsoft Outlook na Twoim urządzeniu Mac
- Dane do logowania do konta e-mail, które chcesz skonfigurować

> [!primary]
>
> Używasz programu Outlook 2016 na urządzeniu z systemem Windows ? Zapoznaj się z naszą dokumentacją: [Konfiguracja konta e-mail w programie Outlook 2016 na urządzeniu z systemem Windows](https://docs.ovh.com/pl/emails-pro/konfiguracja-outlook-2016/){.external}.
>

## W praktyce

### Etap 1: dodanie konta

> [!primary]
>
> W przewodniku używamy oznaczenia serwera: pro**X**.mail.ovh.net. Zastąp “X” cyfrą oznaczającą serwer powiązany z Twoją usługą E-mail Pro.
> 
> Odszukaj cyfrę w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, w sekcji `Web`{.action} =>  `E-mail Pro`{.action} => w kolumnie po lewej stronie. Nazwa serwera jest widoczna w ramce *Logowanie* w zakładce `Informacje ogólne`{.action}.
>

Po uruchomieniu aplikacji Mail na Twoim urządzeniu możesz dodać konto, korzystając z jednej z dwóch dostępnych metod.

- **Podczas pierwszego uruchomienia aplikacji**: wyświetli się asystent konfiguracji i poprosi o wpisanie adresu e-mail.

- **Jeżeli inne konto zostało wcześniej skonfigurowane**: kliknij `Narzędzia`{.action} na pasku menu górze Twojego ekranu, a następnie kliknij `Konta`{.action}. W oknie, które się wyświetli kliknij `+`{.action}, a następnie `Nowe konto`{.action}.

![emailpro](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Wpisz hasło dla Twojego konta e-mail, po czym kliknij `Dalej`{.action}. Wybierz `IMAP/POP`{.action}, następnie podaj wymagane informacje.

|Informacja|Opis|
|---|---|
|Typ konta|Pozostaw **IMAP** (ustawiony domyślnie).|
|Adres poczty elektronicznej|Wpisz nazwę pozwalającą odróżnić to konto od Twoich pozostałych kont wyświetlających się w aplikacji Mail.|
|Nazwa użytkownika|Wpisz pełny adres e-mail.|
|Hasło|Wpisz hasło wybrane dla tego konta e-mail.|
|Serwer poczty przychodzącej|Wpisz serwer « pro**X**.mail.ovh.net ». Pozostaw zaznaczone **Użyj protokołu SSL do nawiązywania połączeń**.|
|Port poczty przychodzącej|Wpisz port « 993 ».|
|Serwer poczty wychodzącej|Wpisz serwer « pro**X**.mail.ovh.net ». Pozostaw zaznaczone **Użyj protokołu SSL do nawiązywania połączeń**.|
|Port poczty wychodzącej|Wpisz port « 587 ».|

Po uzupełnieniu informacji kliknij przycisk `Dodaj konto`{.action}. Jeśli dane są prawidłowe, logowanie zakończy się sukcesem.

Wykonaj test wysyłki e-maili, aby sprawdzić, czy konto zostało poprawnie skonfigurowane.

![emailpro](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

Jeśli wprowadzasz ręcznie dane techniczne w ustawieniach konta poniżej znajdziesz parametry, których należy użyć w przypadku oferty E-mail Pro:

|Typ serwera|Nazwa serwera|SSL|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|pro**X**.mail.ovh.net|Tak|993|
|Serwer poczty wychodzącej|pro**X**.mail.ovh.net|Tak|587|

### Etap 2: korzystanie z konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVHcloud oferuje również aplikację internetową [funkcje do pracy zespołowej](https://www.ovh.pl/emaile/){.external}. Jest ona dostępna pod adresem <https://www.ovh.pl/mail/>. Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail.

## Sprawdź również

[Konfiguracja konta e-mail, zawartego w usłudze MX Plan lub usłudze hostingu, w programie Outlook 2016 na urządzeniu Mac](https://docs.ovh.com/pl/emails/konfiguracja-outlook-2016-mac/){.external}

[Konfiguracja konta Exchange w aplikacji Outlook 2016 na urządzeniu Mac](https://docs.ovh.com/pl/microsoft-collaborative-solutions/konfiguracja-outlook-2016-mac/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.