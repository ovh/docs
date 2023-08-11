---
title: 'Konfiguracja konta e-mail w aplikacji Poczta na urządzeniu z systemem Windows 10'
excerpt: 'Dowiedz się, jak skonfigurować Twoje konto e-mail MX Plan w aplikacji Poczta na urządzeniu z systemem Windows 10'
updated: 2018-04-04
---

**Ostatnia aktualizacja dnia 2018-04-04**

## Wprowadzenie

Konta e-mail MX Plan mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz wysyłać i odbierać wiadomości, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować Twoje konto e-mail MX Plan w aplikacji Poczta na urządzeniu z systemem Windows 10.**

## Wymagania początkowe

- Posiadanie konta e-mail MX Plan (zawartego w pakiecie MX Plan lub w usłudze [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external})
- Instalacja aplikacji Poczta na Twoim urządzeniu
- Dane do logowania do konta e-mail, które chcesz skonfigurować

> [!primary]
>
> Czy używasz wcześniejszej wersji systemu Windows? Zapoznaj się z naszą dokumentacją: [Konfiguracja konta e-mail w aplikacji Poczta na urządzeniu z systemem Windows 8](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10){.external}.
>

## W praktyce

### Etap 1: dodanie konta

Po uruchomieniu programu Poczta na Twoim urządzeniu możesz dodać konto, korzystając z jednej z dwóch dostępnych metod.

- **Podczas pierwszego uruchomienia aplikacji**: pojawi się okno z poleceniem, abyś kliknął `Dodaj konto`{.action}.

- **Jeśli konto zostało już skonfigurowane**: kliknij `Konta`{.action} na pasku po lewej stronie, a następnie kliknij `Dodaj konto`{.action} w menu, które pojawiło się po prawej stronie.

![mxplan](images/configuration-mail-windows-step1.png){.thumbnail}

W oknie, które się wyświetli kliknij `Konfiguracja zaawansowana`{.action}, po czym wybierz `Internetowa poczta e-mail`{.action} jako typ konta.

Następnie wpisz informacje: 

|Dane|Opis|
|---|---|
|Adres poczty elektronicznej|Wpisz pełny adres e-mail.|
|Nazwa użytkownika|Wpisz kompletny adres e-mail.|
|Hasło|Wpisz hasło przypisane do tego konta e-mail.|
|Nazwa konta|Wpisz nazwę pozwalającą odróżnić to konto od Twoich pozostałych kont wyświetlających się w aplikacji Poczta.|
|Wysyłaj wiadomości e-mail, używając tej nazwy|Wpisz nazwę nadawcy, która ma się wyświetlać podczas wysyłki e-maili przy użyciu tego konta.|
|Serwer poczty przychodzącej|Wpisz serwer „ssl0.ovh.net:993”.|
|Typ konta|Rekomendujemy użycie IMAP4. Możesz jednak wybrać w rozwijanym menu **POP** (przechowywanie e-maili lokalnie w aplikacji Mail).|
|Serwer poczty wychodzącej|Wpisz serwer „ssl0.ovh.net:465”.|

Upewnij się, że zaznaczone są następujące kratki:

- „Serwer poczty wychodzącej wymaga uwierzytelnienia”;
- „Użyj tej samej nazwy użytkownika i hasła do wysyłania poczty e-mail”;
- „Wymagaj SSL dla poczty przychodzącej”;
- „Wymagaj SSL dla poczty wychodzącej”.

Po uzupełnieniu informacji, kliknij przycisk `Zaloguj się`{.action}. Jeśli wpisane informacje są poprawne, logowanie zakończy się sukcesem.

Wykonaj test wysyłki e-maili, aby sprawdzić, czy konto zostało poprawnie skonfigurowane.

![mxplan](images/configuration-mail-windows-step2.png){.thumbnail}

Jeśli wprowadzasz ręcznie dane techniczne w ustawieniach konta, poniżej znajdziesz parametry, których należy użyć w przypadku oferty MX Plan:

- **Konfiguracja IMAP4**

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

OVHcloud oferuje aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu przeglądarki. Jest ona dostępna pod adresem <https://www.ovh.pl/mail/>. Możesz się do niej zalogować, używając tych samych danych, których użyłeś do konfiguracji konta e-mail.
 
## Sprawdź również

[Konfiguracja konta Exchange w aplikacji Poczta na urządzeniu z systemem Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_windows_10){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.