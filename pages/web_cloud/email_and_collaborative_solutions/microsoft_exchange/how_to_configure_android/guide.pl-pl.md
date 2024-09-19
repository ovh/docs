---
title: "Exchange - Konfiguracja konta e-mail w Gmailu na Androida"
excerpt: "Dowiedz się, jak skonfigurować konto Exchange na urządzeniu z systemem Android poprzez aplikację Gmail"
updated: 2024-03-20
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Konta e-mail Exchange mogą być skonfigurowane w jednym z kompatybilnych programów pocztowych. Dzięki temu możesz wysyłać i odbierać wiadomości, korzystając z wybranej przez Ciebie aplikacji. W tym przewodniku znajdziesz etapy konfiguracji konta e-mail Exchange przy użyciu aplikacji Gmail dostępnej na urządzeniach z systemem Android.

**Dowiedz się, jak skonfigurować konto Exchange na urządzeniu z systemem Android przy użyciu aplikacji Gmail.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym usługodawcą](https://partner.ovhcloud.com/pl/) lub skontaktuj się z dostawcą usługi. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”.


## Wymagania początkowe

- Wykupienie konta e-mail [Exchange](/links/web/emails)
- Zainstalowana aplikacja Gmail na Twoim urządzeniu (możesz pobrać ją z Google Play Store)
- Dane do logowania do konta e-mail, które chcesz skonfigurować

> [!primary]
>
> Niniejszy przewodnik został stworzony na urządzeniu korzystającym z wersji 13 systemu Android.
>

## W praktyce

### Jak dodać konto e-mail

> [!primary]
>
> Poniżej stosujemy przykładową nazwę serwera: ex**?*.mail.ovh.net. Chcesz zastąpić "? "cyfrą wskazującą serwer Twojej usługi Exchange.
>
> Liczbę tę odnajdziesz w [Panelu klienta OVHcloud](/links/manager), w sekcji `Web Cloud`{.action}, a następnie w wersji `Microsoft`{.action}.
> Kliknij `Exchange`{.action}, a następnie wybraną platformę Exchange. Nazwa serwera jest widoczna w ramce **Połączenie** w karcie `Informacje ogólne`{.action}.

Na ekranie Twojego urządzenia wybierz aplikację `Gmail`{.action}.

![Exchange Android](images/exchange-android-00.png){.thumbnail .w-400}

Dodanie konta zostanie wykonane w inny sposób, **jeśli żadne konto nie jest skonfigurowane** lub **jeśli konto zostało już skonfigurowane**. Wybierz jedną z 2 opisanych sytuacji:

> [!tabs]
> **Pierwsza konfiguracja**
>>
>> Wybierz `Dodaj adres e-mail`{.action}<br><br>
>> ![Exchange Android](images/android-first.png){.thumbnail .h-600}
>>
> **Istniejąca konfiguracja**
>>
>> 1. Przejdź do menu w lewym górnym rogu ekranu<br><br>
>> 2. Wybierz `Ustawienia`{.action}<br><br>
>> 3. Wybierz `Dodaj konto`{.action}<br><br>
>> ![Exchange Android](images/android-existing.png){.thumbnail}
>>

Postępuj zgodnie z kolejnymi instrukcjami, przechodząc przez poniższe karty:

> [!tabs]
> **Etap 1**
>> Z menu Typy kont e-mail wybierz `Exchange i Office`{.action}.<br><br>
>> ![Exchange Android](images/exchange-android-01.png){.thumbnail .h-600}
>>
> **Etap 2**
>> Wpisz swój adres e-mail i kliknij `Dalej`{.action}.<br><br>
>> ![Exchange Android](images/exchange-android-02.png){.thumbnail .h-600}
>>
> **Etap 4**
>> Wpisz hasło wybrane dla Twojego konta e-mail i kliknij `Dalej`{.action}.<br><br>
>> ![Exchange Android](images/exchange-android-03.png){.thumbnail .h-600}
>>
> **Etap 5**
>> Uzupełnij stronę "**Konfiguracja adresu**"<br><br>- **E-mail**: Twój kompletny adres e-mail<br>- **Hasło**: hasło do Twojego konta e-mail<br>- **Certyfikat**: zostaw "Brak"<br>- **Domena\Nazwa użytkownika**: Twój kompletny adres e-mail<br>- **Serwer** : **ex?.mail.ovh.net** ( zastąp **?** przez [numer serwera Exchange](#addaccount))<br>- **Port**: 443<br>- **Rodzaj zabezpieczenia**: SSL/TLS<br><br>Kliknij `Dalej`{.action}, aby zatwierdzić konfigurację.<br><br>
>> ![Exchange Android](images/exchange-android-04.png){.thumbnail .h-600}
>>
> **Etap 6**
>> Wyświetli się komunikat "Możesz od tej chwili korzystać ze swojego konta". Naciśnij przycisk `OK`{.action}, aby zakończyć konfigurację.<br><br>
>> ![Exchange Android](images/exchange-android-05.png){.thumbnail .h-600}
>>

Po zakończeniu konfiguracji konto jest gotowe do użytku. Możesz teraz wysyłać i odbierać wiadomości e-mail, korzystając z aplikacji Gmail.

> [!success]
>
> OVHcloud oferuje aplikację internetową umożliwiającą korzystanie z Twojego konta e-mail przy użyciu wyszukiwarki, dostępną pod adresem <https://www.ovhcloud.com/pl/mail/>. Możesz się do niej zalogować, używając tych samych danych, których używasz do logowania się do konta e-mail.

## Sprawdź również <a name="go-further"></a>

[MXplan - Konfiguracja konta e-mail w Gmailu na urządzeniu z systemem Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).

[E-mail Pro - Konfiguracja konta e-mail w Gmailu na urządzeniu z systemem Android](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_android).


Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>