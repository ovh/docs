---
title: "E-mail Pro - Konfiguracja konta e-mail w programie Gmail na urządzeniu z systemem Android"
excerpt: "Dowiedz się, jak skonfigurować konto E-mail Pro na urządzeniu z systemem Android poprzez aplikację Gmail"
updated: 2024-03-15
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Wprowadzenie

Konta e-mail usługi E-mail Pro mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz wysyłać i odbierać wiadomości, korzystając z dowolnego urządzenia. W tym przewodniku znajdziesz etapy konfiguracji konta e-mail Pro z poziomu aplikacji Gmail obecnej na urządzeniach z systemem Android.

**Dowiedz się, jak skonfigurować konto E-mail Pro na urządzeniu z systemem Android przy użyciu aplikacji Gmail.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Niemniej jednak w przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner) i/lub skontaktowanie się z wydawcą usługi. Niestety firma OVH nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji "Sprawdź również".

## Wymagania początkowe

- Wykupienie usługi [E-mail Pro](/links/web/email-pro)
- Instalacja aplikacji Gmail na Twoim urządzeniu (możesz pobrać ją z Google Play Store)
- Dane do logowania do konta e-mail, które chcesz skonfigurować

> [!primary]
>
> Niniejszy przewodnik został stworzony na urządzeniu korzystającym z wersji 13 systemu Android.

## W praktyce

### Jak dodać konto e-mail

> [!primary]
>
> W naszych przykładach używamy określenia serwer: pro*?*.mail.ovh.net. Należy zastąpić "?" cyfrą wskazującą serwer Twojej usługi E-mail Pro.
>
> Znajdziesz tę cyfrę w Twoim [Panelu klienta OVHcloud](/links/manager), w rubryce `Web Cloud`{.action} następnie `E-mail Pro`{.action}. Nazwa serwera jest widoczna w ramce **Połączenie** w zakładce `Informacje ogólne`{.action}.
>

Na ekranie Twojego urządzenia wybierz aplikację `Gmail`{.action}.

![emailpro](images/emailpro-android-00.png){.thumbnail .w-400}

Dodanie konta zostanie przeprowadzone w inny sposób **jeśli żadne konto nie zostało skonfigurowane** lub **jeśli konto zostało już skonfigurowane**. Wybierz jedną z 2 opisanych sytuacji:

> [!tabs]
> **Pierwsza konfiguracja**
>>
>> Wybierz `Dodaj adres e-mail`{.action}<br><br>![emailpro](images/android-first.png){.thumbnail .h-600}
>>
> **Istniejąca konfiguracja**
>>
>> 1. Przejdź do menu w lewym górnym rogu ekranu<br><br>
>> 2. Wybierz `Parametry`{.action}<br><br>
>> 3. Wybierz `Dodaj konto`{.action}<br><br>![emailpro](images/android-existing.png){thumbnail .h-600}

Postępuj zgodnie z kolejnymi instrukcjami, przechodząc przez poniższe karty:

> [!tabs]
> **Etap 1**
>> Z menu Typy kont e-mail wybierz `Inny`{.action}.<br><br>
>> ![emailpro](images/emailpro-android-01.png){.thumbnail .h-600}
>>
> **Etap 2**
>> Wpisz swój adres e-mail.<br><br>
>> ![emailpro](images/emailpro-android-02.png){.thumbnail .h-600}
>>
> **Etap 3**
>> Wybierz protokół otrzymywania e-maili. Zalecamy wybranie opcji `Personal (IMAP)`{.action}<br><br>Aby zapoznać się z różnicami, zapoznaj się z [więcej szczegółów dotyczących protokołów POP i IMAP](#popimap) na końcu tego przewodnika.<br><br>
>> ![emailpro](images/emailpro-android-03.png){.thumbnail .h-600}
>>
> **Etap 4**
>> Wpisz hasło przypisane do Twojego konta e-mail.<br><br>
>> ![emailpro](images/emailpro-android-04.png){.thumbnail .h-600}
>>
> **Etap 5**
>> Uzupełnij znaki "**Parametry serwera poczty przychodzącej**"<br><br>- **Nazwa użytkownika**: Twój pełny adres e-mail<br>- **Hasło** : Hasło do Twojego konta e-mail<br>- **Serwer** : wpisz **pro**?**.mail.ovh.net** (zmień "**?**" na numer serwera). <br><br>
>> ![emailpro](images/emailpro-android-05.png){.thumbnail .h-600}
>>
> **Etap 6**
>> Uzupełnij znaki "**Ustawienia serwera poczty wychodzącej**"<br><br>- **Nazwa użytkownika**: Twój kompletny adres e-mail<br>- **Hasło**: Hasło do konta e-mail<br>- **Serwer SMTP** : wpisz **pro**?**.mail.ovh.net** (dobrze zastąp "**?**" numerem serwera). <br><br>
>> ![emailpro](images/emailpro-android-06.png){.thumbnail .h-600}
>>
> **Etap 7**
>> Wybierz częstotliwość synchronizacji e-maili.<br><br>
>> ![emailpro](images/emailpro-android-07.png){.thumbnail .h-600}
>>
> **Etap 8**
>> Określ w aplikacji Gmail nazwę wyświetlaną Twojego konta e-mail, po czym kliknij `Dalej`{.action}.<br><br>
>> ![emailpro](images/emailpro-android-08.png){.thumbnail .h-600}
>>

Po zakończeniu konfiguracji konto jest gotowe do użytku! Możesz teraz wysyłać i odbierać wiadomości e-mail, korzystając z aplikacji Gmail.

> [!success]
>
> OVHcloud oferuje aplikację internetową dostępną pod adresem [Webmail](/links/web/email) umożliwiającą korzystanie z Twojego konta e-mail przy użyciu wyszukiwarki. Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail.

### Parametry POP, IMAP i SMTP

Jeśli chcesz otrzymywać e-maile, wybierz rodzaj konta. Zalecamy użycie **IMAP**. Możesz jednak wybrać **POP**. Aby dowiedzieć się, jak to działa, sprawdź naszą sekcję ["POP lub IMAP, jaka jest różnica?"](#popimap)

- **Konfiguracja POP**

|Informacje|Opis|
|---|---|
|Nazwa użytkownika|Wpisz pełny adres e-mail **complete**|
|Hasło|Wpisz hasło wybrane dla tego konta e-mail|
|Serwer|pro**?**.mail.ovh.net (zastąp "**?**" numerem serwera)|
|Port|995|
|Typ zabezpieczeń|SSL/TLS|

- **Konfiguracja IMAP**

|Informacje|Opis|
|---|---|
|Nazwa użytkownika|Wpisz pełny adres e-mail **complete**|
|Hasło|Wpisz hasło wybrane dla tego konta e-mail|
|Serwer|pro**?**.mail.ovh.net (zastąp "**?**" numerem serwera)|
|Port|993|
|Typ zabezpieczeń|SSL/TLS|

Do wysyłki e-maili, jeśli wprowadzasz ręcznie ustawienia **SMTP** w ustawieniach konta poniżej znajdziesz parametry, których należy użyć:

- **Konfiguracja SMTP**

|Informacje|Opis|
|---|---|
|Nazwa użytkownika|Wpisz pełny adres e-mail **complete**|
|Hasło|Wpisz hasło wybrane dla tego konta e-mail|
|Serwer|pro**?**.mail.ovh.net (zastąp "**?**" numerem serwera)|
|Port|587|
|Typ zabezpieczeń|STARTTLS|

### POP lub IMAP, jaka jest różnica? <a name="popimap"></a>

Podczas ręcznej konfiguracji adresu e-mail klient poczty pyta, czy chcesz używać protokołu **POP** (**P**ost **O**ffice **P**rotocol) czy **IMAP**(**I**internet **M**essage **A**ccess **P**rotocol). W konfiguracji Twojego konta e-mail należy umieścić protokoły POP i IMAP.

Podczas konfiguracji klienta poczty należy podać informacje dotyczące **serwera poczty przychodzącej**, aby móc odbierać e-maile, oraz **serwera poczty wychodzącej**, aby móc wysyłać e-maile. Do wysyłania e-maili nie ma wyboru. Zastosowany jest protokół **SMTP** (**S**proste **M**ail **T**transfer **P**rotocol). W przypadku odbioru wiadomości należy wybrać **POP** lub **IMAP**.

![emailpro](images/popimap-01.png){.thumbnail}

Aby zrozumieć różnicę między używaniem protokołu POP i IMAP, wyjaśnimy szczegółowo elementy składające się na przetwarzanie e-maili otrzymywanych:

1. **Twoje urządzenie**: komputer, smartfon lub tablet. To Twoje narzędzie do konsultacji.

2. **Twój klient poczty**: dedykowane oprogramowanie lub aplikacja(e) do zarządzania e-mailami. Wybór tego wariantu zadecyduje o stopniu ergonomii i funkcjonalności, jakich potrzebujesz, aby sprawdzać wiadomości e-mail.

3. **Protokół odbierania**: wybór sposobu odbierania wiadomości e-mail na Twoim urządzeniu. Jego wybór ma wpływ na inne urządzenia, które korzystają z tego samego konta e-mail.
    - **IMAP**: Twój klient poczty odpytuje serwer e-mail i pobiera wiadomości na Twoje urządzenie. Gdy wyświetlasz nieprzeczytaną wiadomość e-mail, serwer domyślnie oznacza ją jako "przeczytaną". Inne urządzenia skonfigurowane w protokole IMAP będą mogły zobaczyć ten stan i wyświetlić ten e-mail do momentu usunięcia go z jednego z urządzeń.
    - **POP** : Twój klient poczty wypytuje serwer e-mail i pobierze wiadomości na Twoje urządzenie. Domyślnie wiadomość zostaje usunięta z serwera po zapisaniu jej na urządzeniu. Z tego powodu inne urządzenia połączone z tym adresem e-mail nie będą mogły wyświetlać tej wiadomości e-mail.

![emailpro](images/popimap-02.png){.thumbnail}

> [!primary]
>
> Ten opis jest syntezą, reprezentuje standardowe działanie obu protokołów. Możesz również ustawić POP, aby wiadomości e-mail nie były usuwane po odczytaniu wiadomości. Celem jest opisanie rodzimego działania tych dwóch protokołów i uniknięcie dodatkowych operacji, aby zaspokoić swoje potrzeby.

## Sprawdź również

[Konfiguracja konta e-mail, zawartego w usłudze MX Plan lub usłudze hostingu, na urządzeniu z systemem Android przy użyciu aplikacji Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)

[Konfiguracja konta Exchange na urządzeniu z systemem Android przy użyciu aplikacji Gmail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.