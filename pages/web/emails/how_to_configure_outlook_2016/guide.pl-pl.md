---
title: 'Konfiguracja konta e-mail w Outlook 2016 na urządzeniu z systemem Windows'
slug: konfiguracja-outlook-2016
excerpt: 'Dowiedz się, jak skonfigurować Twoje konto e-mail MX Plan w programie Outlook 2016 na urządzeniu z systemem Windows'
section: Outlook
---

**Ostatnia aktualizacja dnia 2018-04-09**

## Wprowadzenie

Konta usługi MX Plan mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz wysyłać i odbierać wiadomości, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować Twoje konto e-mail MX Plan w programie Outlook 2016 na urządzeniu z systemem Windows.**

## Wymagania początkowe

- Posiadanie konta e-mail MX Plan (zawartego w pakiecie MX Plan lub w usłudze [hostingu OVH](https://www.ovh.pl/hosting/){.external})
- Zainstalowany program Microsoft Outlook 2016 na Twoim urządzeniu
- Dane do logowania do konta e-mail, które chcesz skonfigurować

> [!primary]
>
> Czy używasz wcześniejszej wersji programu Outlook zainstalowanej na urządzeniu z systemem Windows? Zapoznaj się z naszą dokumentacją [Outlook 2010](https://docs.ovh.com/pl/emails/konfiguracja_konta_e-mail_w_programie_outlook_2010/){.external}.
>
> Używasz programu Outlook 2016 na urządzeniu Mac ? Zapoznaj się z naszą dokumentacją: [Konfiguracja konta e-mail w programie Outlook 2016 na urządzeniu Mac](https://docs.ovh.com/pl/emails/konfiguracja-outlook-2016-mac/){.external}.
>

## W praktyce

### Etap 1: dodanie konta

Po uruchomieniu aplikacji Outlook na Twoim urządzeniu możesz dodać konto, korzystając z jednej z dwóch dostępnych metod.

- **Podczas pierwszego uruchomienia aplikacji**: wyświetli się asystent konfiguracji i poprosi o wpisanie adresu e-mail.

- **Jeżeli inne konto zostało wcześniej skonfigurowane**: kliknij `Plik`{.action} na pasku menu na górze Twojego ekranu, a następnie kliknij `Dodaj konto`{.action}.

![mxplan](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Wpisz Twój adres e-mail, po czym kliknij `Opcje zaawansowane`{.action}. Zaznacz kratkę obok komunikatu `Pozwól mi ręcznie skonfigurować moje konto`{.action}, a następnie kliknij `Połącz`{.action}.

Spośród różnych rodzajów kont wybierz **IMAP** lub **POP**. Rekomendujemy użycie **IMAP**. Możesz również wybrać **POP**, aby przechowywać wiadomości e-mail lokalnie w Twoim programie Outlook.

![mxplan](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Podaj następnie wymagane informacje.

- **dla poczty przychodzącej:**

|Informacja|Opis|
|---|---|
|Serwer|Wpisz serwer « ssl0.ovh.net ».|
|Port|Wskaż port « 993 ».|
|Metoda szyfrowania|Wybierz « SSL/TLS ».|
|Wymaganie uwierzytelnienia|Nie zaznaczaj kratki « Wymagaj logowania przy użyciu bezpiecznego uwierzytelniania hasła ».|

- **dla poczty wychodzącej:**

|Informacja|Opis|
|---|---|
|Serwer|Wpisz serwer « ssl0.ovh.net ».|
|Port|Wskaż port « 465 ».|
|Metoda szyfrowania|Wybierz « SSL/TLS ».|
|Wymaganie uwierzytelnienia|Nie zaznaczaj kratki « Wymagaj logowania przy użyciu bezpiecznego uwierzytelniania hasła ».|

Po uzupełnieniu informacji kliknij przycisk `Dalej`{.action}, następnie wprowadź **hasło** przypisane do konta e-mail. Jeśli wpisane informacje są poprawne, logowanie zakończy się sukcesem.

Wykonaj test wysyłki e-maili, aby sprawdzić, czy konto zostało poprawnie skonfigurowane.

![mxplan](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Jeśli wprowadzasz ręcznie dane techniczne w ustawieniach konta, poniżej znajdziesz parametry, których należy użyć w przypadku oferty MX Plan:

- **Konfiguracja IMAP**

|Typ serwera|Nazwa serwera|Metoda szyfrowania|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|ssl0.ovh.net|SSL/TLS|993|
|Serwer poczty wychodzącej|ssl0.ovh.net|SSL/TLS|465|

- **Konfiguracja POP**

|Typ serwera|Nazwa serwera|Metoda szyfrowania|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|ssl0.ovh.net|SSL/TLS|995|
|Serwer poczty wychodzącej|ssl0.ovh.net|SSL/TLS|465|

### Etap 2: korzystanie z konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVH oferuje aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu przegladarki. Jest ona dostępna pod adresem <https://mail.ovh.net/pl/>. Możesz się do niej zalogować, używając tych samych danych, których używłeś do konfiguracji konta e-mail.

## Sprawdź również

[Konfiguracja konta Exchange w programie Outlook 2016 na urządzeniu z systemem Windows](https://docs.ovh.com/pl/microsoft-collaborative-solutions/konfiguracja-outlook-2016/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.