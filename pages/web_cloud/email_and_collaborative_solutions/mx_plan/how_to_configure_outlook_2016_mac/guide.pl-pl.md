---
title: MX Plan - Konfiguracja konta e-mail w programie Outlook na urządzeniu z systemem macOS
excerpt: Dowiedz się, jak skonfigurować konto e-mail MX Plan w programie Outlook na urządzeniu macOS
updated: 2018-05-31
---

## Wprowadzenie

Konta usługi MX Plan mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz wysyłać i odbierać wiadomości e-mail, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować Twoje konto e-mail MX Plan w programie Outlook na urządzeniu Mac.**

## Wymagania początkowe

- Konto e-mail MX Plan (zawarte w pakiecie MX Plan lub w ramach [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external})
- Zainstalowany Microsoft Outlook na Twoim urządzeniu Mac
- Dane do logowania do konta e-mail, które chcesz skonfigurować

> [!primary]
>
> Używasz programu Outlook na urządzeniu z systemem Windows? Zapoznaj się z naszą dokumentacją: [Konfiguracja konta e-mail w programie Outlook na urządzeniu z systemem Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016){.external}.
>

## W praktyce

### Etap 1: dodanie konta

Po uruchomieniu aplikacji Outlook na Twoim urządzeniu możesz dodać konto, korzystając z jednej z dwóch dostępnych metod.

- **Podczas pierwszego uruchomienia aplikacji**: wyświetli się asystent konfiguracji i poprosi o wpisanie adresu e-mail.

- **Jeżeli konto zostało wcześniej skonfigurowane**: kliknij `Narzędzia`{.action} na pasku menu na górze Twojego ekranu, a następnie kliknij `Konta`{.action}. W oknie, które się wyświetli kliknij `+`{.action}, a następnie `Nowe konto`{.action}.

![mxplan](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Wpisz Twój adres e-mail, po czym kliknij `Dalej`{.action}. Wybierz `IMAP/POP`{.action}, następnie podaj wymagane informacje.

|Dane|Opis|
|---|---|
|Typ konta|Rekomendujemy użycie protokołu **IMAP** (ustawiony domyślnie). Możesz również wybrać w rozwijanym menu **POP** (przechowywanie e-maili lokalnie w aplikacji Mail).|
|Adres poczty elektronicznej|Wpisz nazwę pozwalającą odróżnić to konto od Twoich pozostałych kont wyświetlających się w aplikacji Outlook.|
|Nazwa użytkownika|Wpisz pełny adres e-mail.|
|Hasło|Wpisz hasło przypisane do tego konta e-mail.|
|Serwer poczty przychodzącej|Wpisz serwer « ssl0.ovh.net ». Pozostaw zaznaczone **Użyj protokołu SSL do nawiązywania połączeń**.|
|Port poczty przychodzącej|Wpisz port 993.|
|Serwer poczty wychodzącej|Wpisz serwer « ssl0.ovh.net ». Pozostaw zaznaczone **Użyj protokołu SSL do nawiązywania połączeń**.|
|Port poczty wychodzącej|Wpisz port 465.|

Po uzupełnieniu informacji kliknij przycisk `Dodaj konto`{.action}. Jeśli dane są prawidłowe, logowanie zakończy się sukcesem.

Wykonaj test wysyłki e-maili, aby sprawdzić, czy konto zostało poprawnie skonfigurowane.

![mxplan](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

Jeśli wprowadzasz ręcznie dane techniczne w ustawieniach konta, poniżej znajdziesz parametry, których należy użyć w przypadku oferty MX Plan:

- **Konfiguracja IMAP**

|Typ serwera|Nazwa serwera|SSL|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|ssl0.ovh.net|Tak|993|
|Serwer poczty wychodzącej|ssl0.ovh.net|Tak|465|

- **Konfiguracja POP**

|Typ serwera|Nazwa serwera|SSL|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|ssl0.ovh.net|Tak|995|
|Serwer poczty wychodzącej|ssl0.ovh.net|Tak|465|

### Etap 2: korzystanie z konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVHcloud oferuje aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu wyszukiwarki. Jest ona dostępna pod adresem <https://www.ovh.pl/mail/>. Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail.

## Sprawdź również

[Konfiguracja konta Exchange w programie Outlook na urządzeniu Mac](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016_mac){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.