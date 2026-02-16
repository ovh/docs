---
title: 'Rozpoznawanie e-maili typu phishing'
excerpt: 'Jak rozpoznać e-mail typu phishing i jak postępować, jeśli kliknąłeś w link wyłudzający informacje?'
updated: 2026-01-06
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie

Phishing to rodzaj oszustwa internetowego, który ma na celu wyłudzenie poufnych danych osobowych. Zazwyczaj jest to wiadomość e-mail, której odbiorca zostaje poproszony o kliknięcie linku przekierowującego do formularza. Formularz do złudzenia przypomina formularz serwisu (np. bankowego), z którego korzystasz i zawiera prośbę o wprowadzenie Twoich danych identyfikacyjnych.

**Niniejszy przewodnik wyjaśnia, jak rozpoznać e-mail typu phishing i jak postępować, jeśli kliknąłeś w link wyłudzający informacje.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/RED6EuCLFjk?si=9ppewOVm_bXymThM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## W praktyce

### Otrzymałem/aś wiadomość e-mail lub Usługa SMS od imienia OVHcloud, jak mogę sprawdzić, czy jest autentyczna?

#### Rozpoznawanie phishingowej wiadomości e-mail

Najpierw sprawdź, czy wiadomość, którą otrzymałeś/aś, jest widoczna również w Twoim [Panelu klienta OVHcloud](/links/manager). Zaloguj się, kliknij na swoje imię w prawym górnym rogu, a następnie na `Połączenia`{.action} (lub `E-maile od OVHcloud`{.action}). Znajdziesz tam kopie wszystkich oficjalnych wiadomości wysłanych przez OVHcloud.

Ponadto oto kilka elementów, które pomogą Ci wizualnie rozróżnić autentyczną wiadomość e-mail od phishingową.

Kliknij na obrazek, aby powiększyć. Szczegóły i wyjaśnienia znajdziesz w tabeli poniżej.

![Różnica między wiadomością e-mail od OVHcloud a phishingową](images/EN-legit-and-phishing-email.png){.thumbnail}

> [!primary]
> 
> Numery w tabeli odpowiadają tym widocznych na powyższym obrazku.

|Numer - Opis|Autentyczna wiadomość e-mail od OVHcloud|Phishingowa wiadomość e-mail|
|---|---|---|
|1 - Nadawca|Sprawdź, czy wiadomość została wysłana z adresu kończącego się na nazwę domeny (lub poddomeny, np. `events.ovhcloud.com`) należącą do OVHcloud (zobacz listę poniżej)|Nadawca wiadomości prawdopodobnie będzie adresem, który nie pochodzi od OVHcloud.|
|2 - Tytuł|Sprawdź, czy w tytule wiadomości pojawia się Twój identyfikator konta OVHcloud (NIC Handle) **(zazwyczaj zaczynający się od inicjałów osoby, która założyła konto OVHcloud)** i/lub Twój adres e-mail konta.|Często wiadomość będzie oznaczona jako \[SPAM] i **Twój NIC Handle nie pojawi się lub będzie niepoprawny**.|
|3 - Link|**Bez klikania w niego, najedź kursorem myszy na link lub przycisk**, a zobaczysz jego docelowy adres (bezpośrednio poniżej lub na dole przeglądarki). W naszym przykładzie link poprawnie wskazuje na adres w https://www.ovh.com/. Klikając link, zawsze sprawdzaj adres w przeglądarce. OVHcloud używa zbioru rozpoznawalnych nazw domen, zazwyczaj ovhcloud.com lub ovh.com (patrz lista poniżej). |W phishingowej wiadomości link nie będzie prowadził do oficjalnej strony OVHcloud. **Nie klikaj w niego.**|
|4 - Nagłówek i stopka wiadomości|OVHcloud wysyła wiadomości w formacie TXT i HTML. Nagłówek będzie zawierał logo OVHcloud, a stopka informacje prawne dotyczące OVHcloud|Nagłówek lub stopka może zawierać linki nieskorelowane z OVHcloud. **Nie klikaj w te linki.**|

/// details | **Lista autentycznych domen OVHcloud** (kliknij, aby wyświetlić)

- ovhcloud.com
- ovh.com
- ovh.fr
- services.ovhcloud.com
- news.ovhcloud.com
- clientmanager.fr
- kimsufi.com
- soyoustart.com
- ovh.ca
- ovh.com.au
- ovh.co.uk
- ovh.ie
- ovh.de
- ovh.es
- ovh.it
- ovh.lt
- ovh-hosting.fi
- ovh.net
- ovh.nl
- ovh.pl
- ovh.pt
- ovh.sn
- ovh.us
- robot.ovh.net

Wiadomości e-mail mogą również pochodzić z autentycznych poddomen, takich jak:

- events.ovhcloud.com
- news.soyoustart.com
- services.kimsufi.com

///

#### Rozpoznawanie phishingowej wiadomości Usługa SMS

OVHcloud **nigdy** nie wyśle Ci linku przez Usługa SMS. Wiadomości Usługa SMS, które wysyłamy, są zazwyczaj związane z [uwierzytelnieniem dwuetapowym w Twoim Panelu klienta OVHcloud](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa).

Poniżej znajdziesz dwa przykłady wiadomości Usługa SMS, pierwsza z nich jest autentyczna i odpowiada uwierzytelnieniu dwuetapowemu. Druga wiadomość Usługa SMS jest oszustwowa.

![Oszustwowa wiadomość Usługa SMS](images/sms-phishing.png){.thumbnail}

#### Jak zgłosić phishingową wiadomość e-mail?

Po wykonaniu powyższych sprawdzeń, jeśli jesteś pewny/a, że otrzymałeś/aś phishingową wiadomość e-mail imitującą OVHcloud, możesz wysłać nam jak najwięcej informacji (w minimum zawartość wiadomości e-mail) na poniższy adres e-mail: **<fraude@ovh.com>**.

> [!primary]
> 
> Prosimy zauważyć, że dostarczone przez Ciebie informacje mogą zostać udostępnione trzecim stroną, aby pomóc nam w zwalczaniu tych zagrożeń.
> 

### Wpisałem/aś swoje dane osobiste: co mam zrobić?

Kliknij w nagłówki poniżej, aby zobaczyć instrukcje.

/// details | **Jeśli wpisałeś/aś numer swojej karty kredytowej na oszustwowej stronie internetowej**

Jedyną rzeczą, którą możesz zrobić, jest natychmiastowe kontaktowanie się z bankiem, aby zablokować kartę. Poinformuj ich o dacie i (jeśli to możliwe) godzinie, w której wpisałeś/aś numer swojej karty kredytowej.

**Tylko Twój bank może anulować transakcje oszustwowe, które mogły zostać wykonane bez Twojej wiedzy.**

///

/// details | **Jeśli wpisałeś/aś swoje hasło do konta OVHcloud na oszustwowej stronie internetowej**

Zaloguj się do swojego [Panelu klienta OVHcloud](/links/manager) i zmień hasło.

W naszym przewodniku [Zmiana hasła konta](/pages/account_and_service_management/account_information/manage-ovh-password) znajdziesz instrukcje zmiany hasła za pomocą Panelu klienta OVHcloud, jak również nasze rekomendacje dotyczące generowania silnego hasła i jego zapisywania w menedżerze haseł.

Zalecamy bardzo, aby włączyć [uwierzytelnienie dwuetapowe](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa), aby trwale zabezpieczyć swoje konto.

> [!primary]
>
> Aby upewnić się, że Twoje dane są bezpieczne, Twoje hasło musi spełniać poniższe kryteria:
>
> - Musi zawierać co najmniej 12 znaków.
> - Musi zawierać co najmniej jedną wielką literę, jedną małą literę i jedną cyfrę.
> - Musi zawierać znaki specjalne (np. `%`, `#`, `:`, `$`, `*`).
> - Musi nie zawierać słowa zapisanego w słowniku.
> - Musi nie zawierać żadnych informacji osobistych (np. Twoje imię, nazwisko lub data urodzenia).
> - Musi nie być używane jako hasło do innych kont użytkowników.
> - Musi być zapisane w menedżerze haseł.
> - Musi być zmieniane co trzy miesiące.
> - Musi być inne niż wszystkie poprzednie hasła, które kiedykolwiek były używane.
>
///

## Sprawdź również

[Ustaw i zarządzaj hasłem konta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Zabezpiecz swoje konto OVHcloud za pomocą uwierzytelnienia dwuetapowego](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Zabezpiecz swoje konto OVHcloud i zarządzaj swoimi danymi osobowymi](/pages/account_and_service_management/account_information/all_about_username)

Dołącz do [grona naszych użytkowników](/links/community).