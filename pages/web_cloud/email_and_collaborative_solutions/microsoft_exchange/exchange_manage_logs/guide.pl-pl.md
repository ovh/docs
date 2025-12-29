---
title: Exchange - Jak zarządzać logami
excerpt: Dowiedz się, jak przeglądać i zarządzać logami na swojej ofercie Private Exchange lub Trusted Exchange
updated: 2025-10-28
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

## Wprowadzenie 

Logi odpowiadają za zdarzenia, które zachodzą w systemie komputerowym (serwer, komputer, aplikacja, strona internetowa, baza danych, sieć itp.). Na przykład logi mogą rejestrować i zawierać jeden lub więcej z poniższych elementów:

- Czas zdarzenia (data, godzina, minuta, sekunda).
- Charakter zdarzenia (zalogowanie, wylogowanie, błąd, pobranie, wysłanie, alert itp.).
- Dodatkowe informacje o zdarzeniu (strony lub pliki, które zostały odwiedzone, uruchomione aplikacje, zdalne serwery, nazwa pliku pobranego lub wysłanego itp.).
- Pochodzenie zdarzenia (identyfikator użytkownika, adres IP źródłowy, program źródłowy itp.).
- Stan systemu w momencie zdarzenia (dostępne zasoby, pozostała pamięć, użycie procesora itp.).

Zazwyczaj logi są generowane bezpośrednio przez systemy komputerowe, na których zachodzą zdarzenia. Są one przechowywane i archiwizowane w plikach tekstowych, zwanych również plikami logów.

Pliki logów pozwalają wykonać następujące czynności:

- Analizować zachowanie systemu komputerowego generującego logi.
- Zidentyfikować błędy występujące w systemie komputerowym.
- Rozwiązywać błędy występujące w systemie komputerowym.
- Optymalizować działanie i wydajność systemu komputerowego.

Twoja oferta Private Exchange lub Trusted Exchange generuje więc własne logi. Może się zdarzyć, że musisz je sprawdzić lub pobrać, aby przeanalizować dostęp do swoich skrzynek pocztowych lub śledzić przepływ poczty e-mail.

**Dowiedz się, jak przeglądać i zarządzać logami na swojej ofercie Private Exchange lub Trusted Exchange**

## Wymagania początkowe

- Subskrybujesz ofertę [Private Exchange](/links/web/emails-hosted-exchange) lub [Trusted Exchange](/links/web/emails-trusted-exchange).
- Konto na platformie Logs Data Platform (LDP). Ta instrukcja przeprowadzi Cię przez wszystkie niezbędne kroki: [Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## W praktyce

### Wyświetlanie logów Twojej platformy Exchange w czasie rzeczywistym

Aby uzyskać dostęp do logów w czasie rzeczywistym na ofercie Private lub Trusted Exchange, wykonaj poniższe instrukcje:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
1. Przejdź do sekcji `Web Cloud`{.action}.
1. W sekcji `MICROSOFT` kliknij `Exchange`{.action}.
1. Wybierz odpowiednią platformę.
1. Obok serii kart kliknij kartę `Więcej`{.action}, a następnie `Logi`{.action}.

![exchange - logs](images/exchange-logs01.png){.thumbnail}

> [!warning]
>
> Ponieważ to konsola w czasie rzeczywistym, logi pojawiają się tylko wtedy, gdy jesteś na karcie `Logi`{.action}. Jeśli opuścisz kartę `Logi`{.action} i wrócisz do niej, poprzednia historia zostanie usunięta.

Usługi Exchange oferują dwa typy logów:

- **Access**: Pozwala wyświetlić aktywność połączeń na Twojej usłudze Exchange.
- **Messagetracking**: Pozwala wyświetlić szczegółowe logi przepływu poczty e-mail przez usługę Exchange. Znajdziesz tam następujące informacje:
    - status dostawy e-maili na Twoje konta Exchange;
    - status wysyłki e-maili z Twojej usługi Exchange;
    - rozmiar przesyłanych e-maili;
    - itp.

### Integrowanie logów Twojej usługi Exchange na platformie Logs Data Platform

Rozwiązanie Logs Data Platform może być przydatne, jeśli masz dużą infrastrukturę lub Twoje usługi generują dużą ilość logów. Istotnie, ta platforma została zaprojektowana w celu ułatwienia agregacji i zarządzania logami.

Działa poprzez pobieranie logów generowanych przez Twoją infrastrukturę, strony internetowe lub aplikacje, aby na przykład:

- przechowywać je;
- wyświetlać je na dynamicznych tablicach;
- umożliwiać użytkownikom wykonywanie złożonych zapytań;
- filtrować je według daty, aplikacji, typu lub treści.

> [!primary]
>
> Aby uzyskać więcej informacji na temat Logs Data Platform, zapoznaj się z naszym przewodnikiem wprowadzającym dotyczącym [Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

Rozwiązania Exchange są kompatybilne z różnymi usługami, takimi jak hosting udostępniony, VPS i serwery dedykowane. Mogą również być uzupełnione strumieniami danych na platformie Logs Data Platform, oprócz logów w czasie rzeczywistym, które są już dostępne.

Aby zasubskrybować logi Twojej usługi Exchange do strumienia danych na platformie Logs Data Platform, wykonaj poniższe czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
1. Przejdź do sekcji `Web Cloud`{.action}.
1. W sekcji `MICROSOFT` kliknij `Exchange`{.action}.
1. Wybierz odpowiednią platformę.
1. Obok serii kart kliknij kartę `Więcej`{.action}, a następnie `Logi`{.action}.
1. Na prawo od okna, w którym wyświetlane są Twoje logi w czasie rzeczywistym, kliknij przycisk `Subskrybuj`{.action}.

![exchange - logs](images/exchange-logs02.png){.thumbnail}

Z pojawiającej się strony wybierz odpowiednie konto na platformie Logs Data Platform z menu rozwijanego znajdującego się nad tabelą.

![exchange - logs](images/exchange-logs03.png){.thumbnail}

Dwa scenariusze są dostępne, aby zasubskrybować Twoje rozwiązanie Exchange:

> [!tabs]
> **Przypadek n°1**
>> **Zasubskrybowanie istniejącego strumienia danych na Twojej platformie Logs Data Platform**
>>
>> Jeśli odpowiedni strumień danych już istnieje, pojawia się jako wiersz w tabeli. W tym konkretnym przypadku, aby zasubskrybować swoje rozwiązanie Exchange do tego istniejącego strumienia, po prostu kliknij przycisk `Subskrybuj`{.action} znajdujący się po prawej stronie wiersza odpowiadającego odpowiedniemu strumieniowi.
>>
>> Po kilku chwilach i jeśli pozostaniesz na tej samej stronie, pojawi się komunikat w Twoim panelu kontrolnym, który poinformuje Cię, że subskrypcja została pomyślnie utworzona.
>>
> **Przypadek n°2**
>> **Zasubskrybowanie nowego strumienia danych na Twojej platformie Logs Data Platform**
>>
>> Jeśli odpowiedni strumień danych jeszcze nie istnieje, kliknij przycisk `Dodaj strumień danych`{.action}. Następnie zostaniesz przekierowany na nową stronę w Twoim Panelu klienta OVHcloud, gdzie możesz utworzyć nowy strumień danych na Twojej platformie Logs Data Platform.
>>
>> Skorzystaj z naszych przewodników [Introduction to Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) i [Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start), aby wykonać tę czynność.
>>
>> Po wypełnieniu formularza kliknij przycisk `Zapisz`{.action}.
>>
>> ![exchange - logs](images/exchange-logs04.png){.thumbnail}
>>
>> Następnie zostaniesz przekierowany do karty `Strumień danych`{.action} swojej platformy Logs Data Platform.
>>
>> Możesz teraz zasubskrybować swoje rozwiązanie Exchange do nowego strumienia danych na platformie Logs Data Platform, postępując zgodnie z instrukcjami podanymi na początku tego rozdziału.

## Sprawdź również <a name="go-further"></a>

Dla usług specjalistycznych (SEO, programowanie itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

[Wprowadzenie do usługi Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

[Introduction to Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)

[Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

Jeśli potrzebujesz pomocy w zakresie korzystania z rozwiązań OVHcloud i ich konfiguracji, zapraszamy do zapoznania się z różnymi [ofertami wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).