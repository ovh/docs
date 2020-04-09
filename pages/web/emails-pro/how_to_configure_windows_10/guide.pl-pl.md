---
title: 'Konfiguracja konta E-mail Pro w aplikacji Poczta na urządzeniu z systemem Windows 10'
slug: konfiguracja-poczta-windows-10
excerpt: 'Dowiedz się, jak skonfigurować konto E-mail Pro w aplikacji Poczta na urządzeniu z systemem Windows 10'
section: 'Konfiguracja programu pocztowego'
order: 7
---

**Ostatnia aktualizacja dnia 2020-04-09**

## Wprowadzenie

Konta E-mail Pro mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz używać Twojego konta e-mail, korzystając z wybranej przez Ciebie aplikacji.

**Dowiedz się, jak skonfigurować konto E-mail Pro w programie Poczta na urządzeniu z systemem Windows 10.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak ich konfiguracja, zarządzanie oraz utrzymanie należy do Ciebie. Jesteś tym samym odpowiedzialny za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”.
> 

## Wymagania początkowe

- Wykupienie usługi [E-mail Pro](https://www.ovh.pl/emaile/email-pro/){.external}
- Instalacja aplikacji Poczta na Twoim urządzeniu
- Dane do logowania do konta e-mail, które chcesz skonfigurować

## W praktyce

### Etap 1: dodanie konta

> [!primary]
>
> W przewodniku używamy oznaczenia serwera: pro**X**.mail.ovh.net. Zastąp “X” cyfrą oznaczającą serwer powiązany z Twoją usługą E-mail Pro.
> 
> Odszukaj cyfrę w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, w sekcji `Web`{.action} =>  `E-mail Pro`{.action} => w kolumnie po lewej stronie. Nazwa serwera jest widoczna w ramce *Logowanie* w zakładce `Informacje ogólne`{.action}.
>

Po uruchomieniu programu Poczta na Twoim urządzeniu możesz dodać konto, korzystając z jednej z dwóch dostępnych metod.

- **Podczas pierwszego uruchomienia aplikacji**: pojawi się okno z poleceniem, abyś kliknął przycisk `Dodaj konto`{.action}. 

- **Jeśli inne konto zostało już skonfigurowane**: kliknij `Konta`{.action} na pasku po lewej stronie, a następnie kliknij `Dodaj konto`{.action} w menu, które pojawiło się po prawej stronie. 

![emailpro](images/configuration-mail-windows-step1.png){.thumbnail}

W oknie, które się wyświetli kliknij `Konfiguracja zaawansowana`{.action}, po czym wybierz `Internetowa poczta e-mail`{.action} jako typ konta.

Następnie wpisz informacje: 

|Dane|Opis|
|---|---|
|Adres poczty elektronicznej|Wpisz pełny adres e-mail.|
|Nazwa użytkownika|Wpisz kompletny adres e-mail.|
|Hasło|Wpisz hasło przypisane do tego konta e-mail.|
|Nazwa konta |Wpisz nazwę pozwalającą odróżnić to konto od Twoich pozostałych kont wyświetlających się w aplikacji Poczta.|
|Wysyłaj wiadomości e-mail, używając tej nazwy|Wpisz nazwę nadawcy, która będzie się wyświetlać podczas wysyłki wiadomości e-mail przy użyciu tego konta.|
|Serwer poczty przychodzącej|Wpisz serwer „pro**X**.mail.ovh.net”.|
|Typ konta|Rekomendujemy użycie IMAP4. Możesz jednak wybrać w rozwijanym menu **POP** (przechowywanie e-maili lokalnie w aplikacji Poczta).|
|Serwer poczty wychodzącej|Wpisz serwer „pro**X**.mail.ovh.net”.|

Upewnij się, że zaznaczone są następujące kratki:

- „Serwer poczty wychodzącej wymaga uwierzytelnienia”;
- „Użyj tej samej nazwy użytkownika i hasła do wysyłania poczty e-mail”;
- „Wymagaj SSL dla poczty przychodzącej”;
- „Wymagaj SSL dla poczty wychodzącej”.

Po uzupełnieniu informacji, kliknij przycisk `Zaloguj się`{.action}. Jeśli dane są prawidłowe, logowanie zakończy się sukcesem.

Wykonaj test wysyłki e-maili, aby sprawdzić, czy konto zostało poprawnie skonfigurowane.

![emailpro](images/configuration-mail-windows-step2.png){.thumbnail}

Jeśli wprowadzasz ręcznie dane techniczne w ustawieniach konta, poniżej znajdziesz parametry, których należy użyć w przypadku oferty E-mail Pro:

|Typ serwera|Nazwa serwera|SSL|Port|
|---|---|---|---|
|Serwer poczty przychodzącej|pro**X**.mail.ovh.net|Tak|993|
|Serwer poczty wychodzącej|pro**X**.mail.ovh.net|Tak|587|

### Etap 2: korzystanie z konta e-mail

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz zacząć wysyłać i odbierać wiadomości.

OVHcloud oferuje również aplikację internetową [funkcje do pracy zespołowej](https://www.ovh.pl/emaile/){.external}. Jest ona dostępna pod adresem <https://www.ovh.pl/mail/>. Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail.

## Sprawdź również

[Konfiguracja konta e-mail, zawartego w usłudze MX Plan lub usłudze hostingu, w aplikacji Courrier na urządzeniu z systemem Windows 10](https://docs.ovh.com/pl/emails/konfiguracja-poczta-windows-10/){.external}

[Konfiguracja konta Exchange w aplikacji Poczta na urządzeniu z systemem Windows 10](https://docs.ovh.com/pl/microsoft-collaborative-solutions/konfiguracja-poczta-windows-10/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en>.