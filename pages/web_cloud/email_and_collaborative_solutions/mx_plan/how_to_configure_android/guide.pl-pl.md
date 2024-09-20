---
title: "MXplan - Konfiguracja konta e-mail w Gmailu na Androida"
excerpt: "Dowiedz się, jak skonfigurować konto MX Plan na urządzeniu z systemem Android przy użyciu aplikacji Gmail"
updated: 2023-12-15
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Konta usługi MX Plan mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz wysyłać i odbierać wiadomości, korzystając z wybranej przez Ciebie aplikacji. W tym przewodniku wyjaśnimy proces konfiguracji konta e-mail MXplan z poziomu aplikacji Gmail obecnej na urządzeniach z systemem Android.

**Dowiedz się, jak skonfigurować konto MX Plan na urządzeniu z systemem Android przy użyciu aplikacji Gmail.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym usługodawcą](/links/partner) lub skontaktuj się z dostawcą usługi. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”.

## Wymagania początkowe

- Posiadanie konta e-mail MX Plan (zawartego w usłudze MX Plan lub w usłudze [hostingu OVHcloud](/links/web/hosting)).
- Instalacja aplikacji Gmail na Twoim urządzeniu Możesz ją zainstalować w sklepie Google Play, jeśli jeszcze nie jest dostępna.
- Posiadanie danych do logowania do konta e-mail, które chcesz skonfigurować.

> [!primary]
>
> Niniejszy przewodnik został stworzony na urządzeniu korzystającym z wersji 13 systemu Android.
>

## W praktyce

### Jak dodać konto e-mail

Na ekranie Twojego urządzenia wybierz aplikację `Gmail`{.action}.

![mxplan](images/mxplan-android-00.png){.thumbnail .w-400}

Dodanie konta zostanie wykonane w inny sposób, **jeśli żadne konto nie jest skonfigurowane** lub **jeśli konto zostało już skonfigurowane**. Wybierz jedną z 2 opisanych sytuacji:

> [!tabs]
> **Pierwsza konfiguracja**
>>
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-first.png){.thumbnail}|Wybierz `Dodaj adres e-mail`{.action}|
>>
> **Istniejąca konfiguracja**
>>
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-existing.png){.thumbnail}|1. Przejdź do menu w lewym górnym rogu ekranu<br><br>2.Wybierz `Ustawienia`{.action}<br><br>3.Wybierz `Dodaj konto`{.action}|
>>

Postępuj zgodnie z kolejnymi instrukcjami, przechodząc przez poniższe karty:

> [!tabs]
> **Etap 1**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-01.png){.thumbnail}|Z menu Typy kont e-mail wybierz `Inne`{.action}.|
>>
> **Etap 2**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-02.png){.thumbnail}|Wpisz swój adres e-mail.|
>>
> **Etap 3**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-03.png){.thumbnail}|Wybierz protokół otrzymywania wiadomości e-mail. Zalecane jest wybranie opcji `Personal (IMAP)`{.action}<br><br>[ Szczegółowe informacje na temat protokołów POP i IMAP](#popimap) znajdują się na końcu tego przewodnika.|
>>
> **Etap 4**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-04.png){.thumbnail}|Wpisz hasło przypisane do Twojego konta e-mail. |
>>
> **Etap 5**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-05.png){.thumbnail}|Uzupełnij "**Ustawienia serwera poczty przychodzącej**"<br><br>- **Nazwa użytkownika**: Twój kompletny adres e-mail<br>- **Hasło**: Hasło do Twojego konta e-mail<br>- **Serwer**: wprowadź **ssl0.ovh.net** |
>>
> **Etap 6**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-06.png){.thumbnail}|Uzupełnij **ustawienia serwera poczty wychodzącej**<br><br>- **Nazwa użytkownika**: Twój kompletny adres e-mail<br>- **Hasło**: Hasło do Twojego konta e-mail<br>- **Serwer SMTP**: wprowadź **ssl0.ovh.net** |
>>
> **Etap 7**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-07.png){.thumbnail}|Wybierz częstotliwość synchronizacji e-maili.|
>>
> **Etap 8**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-08.png){.thumbnail}|Określ nazwę, która ma być wyświetlana dla Twojego konta e-mail w aplikacji Gmail, po czym kliknij `Dalej`{.action}|
>>

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz wysyłać i odbierać wiadomości e-mail, korzystając z aplikacji Gmail.

> [!success]
>
> OVHcloud oferuje aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu wyszukiwarki, dostępną pod adresem [Webmail](/links/web/email). Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail.

### Ustawienia POP, IMAP i SMTP

Do odbierania wiadomości e-mail, wybierając rodzaj konta, zalecamy użycie protokołu **IMAP**. Możesz również wybrać **POP**. Aby dowiedzieć się, jak to działa, sprawdź naszą sekcję ["POP lub IMAP, jaka jest różnica?"](#popimap)

- **Konfiguracja POP**

|Informacja|Opis|
|---|---|
|Nazwa użytkownika|Wpisz **kompletny adres e-mail**|
|Hasło|Wpisz hasło wybrane dla tego konta e-mail|
|Serwer|ssl0.ovh.net|
|Port|995|
|Typ zabezpieczenia|SSL/TLS|

- **Konfiguracja IMAP**

|Informacja|Opis|
|---|---|
|Nazwa użytkownika|Wpisz **kompletny adres e-mail**|
|Hasło|Wpisz hasło wybrane dla tego konta e-mail|
|Serwer|ssl0.ovh.net|
|Port|993|
|Typ zabezpieczenia|SSL/TLS|

Do wysyłki e-maili, jeśli wprowadzasz ręcznie ustawienia **SMTP** w ustawieniach konta poniżej znajdziesz parametry, których należy użyć:

- **Konfiguracja SMTP**

|Informacja|Opis|
|---|---|
|Nazwa użytkownika|Wpisz **kompletny adres e-mail**|
|Hasło|Wpisz hasło wybrane dla tego konta e-mail|
|Serwer|ssl0.ovh.net|
|Port|465|
|Typ zabezpieczenia|SSL/TLS|

### POP lub IMAP, jaka jest różnica? <a name="popimap"></a>

Podczas ręcznej konfiguracji adresu e-mail klient poczty pyta, czy chcesz używać protokołu **POP** (**P**ost **O**ffice **P**rotocol) czy **IMAP**(**I**nternet **M**essage **A**ccess **P**rotocol). W konfiguracji Twojego konta e-mail należy umieścić protokoły POP i IMAP.

Podczas konfigurowania klienta poczty, wprowadź dane **serwera poczty przychodzącej**, aby odbierać e-maile, oraz nazwę **serwera poczty wychodzącej**, aby wysyłać e-maile. Do wysyłania e-maili nie ma wyboru, jest używany protokół **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol). W przypadku odbioru wiadomości masz wybór między **POP** a **IMAP**.

![mxplan](images/mxplan-android-popimap-01.png){.thumbnail}

Aby zrozumieć różnicę między używaniem protokołu POP i IMAP, rozbijemy elementy, które składają się na przetwarzanie wiadomości e-mail otrzymywanych:

1. **Twoje urządzenie**: komputer, smartfon lub tablet. To Twoje narzędzie do konsultacji.

2. **Twój program pocztowy**: dedykowany program lub aplikacja() do zarządzania e-mailami. Wybór tego wariantu zadecyduje o stopniu ergonomii i funkcjonalności, jakich potrzebujesz, aby sprawdzać wiadomości e-mail.

3. **Protokół odbioru**: wybór określający sposób odbierania wiadomości e-mail na Twoim urządzeniu. Jego wybór ma wpływ na inne urządzenia, które korzystają z tego samego konta e-mail.
    - **IMAP**: Twój klient poczty odpytuje serwer e-mail i pobiera wiadomości e-mail na Twoje urządzenie. Gdy wyświetlasz nieprzeczytaną wiadomość e-mail, serwer domyślnie oznacza ją jako "przeczytaną". Inne urządzenia skonfigurowane w protokole IMAP będą mogły zobaczyć ten stan i wyświetlić ten e-mail do momentu usunięcia go z jednego z urządzeń.
    - **POP**: Twój klient poczty odpytuje serwer e-mail i pobierze e-maile na Twoje urządzenie. Domyślnie wiadomość zostaje usunięta z serwera po zapisaniu jej na urządzeniu. Z tego powodu inne urządzenia połączone z tym adresem e-mail nie będą mogły wyświetlać tej wiadomości e-mail.

![mxplan](images/mxplan-android-popimap-02.png){.thumbnail}

> [!primary]
>
> Ten opis jest syntezą, reprezentuje standardowe działanie obu protokołów. Możesz również ustawić POP, aby wiadomości e-mail nie były usuwane po odczytaniu wiadomości. Celem jest tutaj opisanie rodzimego działania tych dwóch protokołów i uniknięcie dodatkowych operacji, aby dostosować się do swoich potrzeb.

## Sprawdź również

[Konfiguracja konta E-mail Pro na urządzeniu z systemem Android przy użyciu aplikacji Gmail](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_android).

[Konfiguracja konta Exchange na urządzeniu z systemem Android przy użyciu aplikacji Gmail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.