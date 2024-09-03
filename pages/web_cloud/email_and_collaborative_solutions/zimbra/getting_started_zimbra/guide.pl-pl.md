--- 
title: "Pierwsze kroki z ofertą Zimbra"
excerpt: "Dowiedz się, jak rozpocząć korzystanie z oferty Zimbra z poziomu Panelu klienta OVHcloud"
Updated: 2024-09-02
--- 

<style>
.w-400 {
max-width:400px!importante;
}
</style>

> [!primary]
>
> **Ważne**
>
> Oferta Zimbra jest w fazie beta.
>
> Jest on dostępny tylko dla tych osób, które wypełniły [formularz rejestracji w fazie beta](https://labs.ovhcloud.com/en/zimbra-beta/).
>
> Niektóre funkcje lub ograniczenia przedstawione w tym przewodniku mogą ulec zmianie po wprowadzeniu produktu na rynek.

## Wprowadzenie

Z ofertą Zimbra OVHcloud oferuje platformę open source do przesyłania wiadomości e-mail z wszystkimi niezbędnymi funkcjami do profesjonalnego użytku. W tym przewodniku znajdziesz pierwsze kroki z konfiguracją Twoich kont e-mail Zimbra.

**Dowiedz się, jak rozpocząć korzystanie z usługi e-mail Zimbra**

## Wymagania początkowe

- Zakup konta e-mail w ramach naszego rozwiązania e-mail Zimbra OVHcloud.
- Posiadanie [domeny OVHcloud](/links/web/domains).
- Dostęp do [panelu klienta OVHcloud](/links/manager).

## W praktyce

### Dostęp do interfejsu zarządzania usługą

Aby uzyskać dostęp do usługi Zimbra, zaloguj się do [panelu klienta OVHcloud](/links/manager) i kliknij zakładkę `Web Cloud`{.action}. W części `E-maile`{.action} kliknij `Zimbra`{.action}.

### Skonfiguruj usługę Zimbra

Zanim rozpoczniesz konfigurację kont e-mail Zimbra, zapoznaj się z trzema elementami, które hierarchicznie porządkują Twoją usługę Zimbra:

- [**Organisation**](#organizations): umożliwia pogrupowanie domen w grupy. **Nie musisz tworzyć organizacji, aby móc utworzyć konto e-mail**.
- [**Nazwa domeny**](#domains): niezbędne do założenia konta e-mail. Należy zarządzać co najmniej jednym z nich w Panelu klienta OVHcloud i dodać go do usługi Zimbra.
- [**Konta e-mail**](#emaile): korzystając z domen dodanych do Twojej usługi Zimbra, będziesz mógł utworzyć adres e-mail.

Poniższy schemat podsumowuje hierarchiczne powiązanie między wyżej wymienionymi elementami.

![Zimbra](images/Zimbra_Organization.png){.thumbnail .w-400}

## Organizacje <a name="organizations"></a>

Jeśli dodajesz wiele domen do swojej usługi Zimbra, pomocne może być pogrupowanie ich w "organizację". W usłudze Zimbra kliknij `Organisation`{.action}.

### Utwórz organizację

Aby utworzyć organizację, kliknij przycisk `Dodaj organizację`{.action}. Ustaw `Nazwa` organizacji oraz `Znak organizacji`, przy czym ten ostatni jest krótkim opisem organizacji pozwalającym na odnalezienie Cię podczas filtrowania wyświetlania nazw domen i kont e-mail Twojej usługi Zimbra.

### Filtruj według organizacji

Po utworzeniu organizacji upewnij się, że domeny zadeklarowane w Twojej usłudze Zimbra są powiązane z organizacją.

Z zakładek `Organizacja`{.action}, `Domena`{.action} i `Konta e-mail`{.action}, klikając na etykietę organizacji, utworzysz filtr, który wyświetli tylko elementy powiązane z tą organizacją.<br>
Możesz zauważyć, że filtr jest stosowany, gdy etykieta jest wyświetlana obok nazwy Twojej usługi Zimbra.<br>
Aby usunąć filtr, wystarczy kliknąć na krzyżyk filtra.

![Zimbra](images/Zimbra_Organization_filter.png){.thumbnail .w-400}

## Domeny <a name="domains"></a>

W tej karcie znajdziesz wszystkie nazwy domen dodane do Twojej usługi Zimbra. Aby je dodać, należy nimi zarządzać w Panelu klienta OVHcloud.

Tabela domen podaje dwie informacje:

- **Organization** : Domena zostanie oznaczona po dodaniu nazwy. W tej kolumnie automatycznie odnajdziesz jej etykietę.
- **Liczba kont** : w tej sekcji odnajdziesz wszystkie konta utworzone pod daną nazwą domeny.

### Dodaj domenę

Aby dodać domenę do Twojej usługi Zimbra, kliknij w zakładkę `Domena`{.action}, następnie kliknij `Dodaj domenę`{.action}.

Jeśli masz utworzone organizacje, wybierz jedną z nich z rozwijanego menu, a następnie wybierz domenę z listy (konieczne jest, aby nazwy domen były zarządzane w Panelu klienta OVHcloud). Następnie kliknij przycisk `Potwierdź`{.action}, aby dokończyć dodawanie domeny.

## Konta email <a name="emails"></a>

Adresami e-mail usługi Zimbra można zarządzać w zakładce `Konta e-mail`{.action}. W tabeli wyświetla się lista kont e-mail obecnych w Twojej usłudze oraz 3 informacje dla każdego z nich:

- **Organizacja** : Jeśli nazwa domeny przypisana do Twojego konta e-mail jest skojarzona z organizacją, w tej kolumnie automatycznie odnajdziesz jej etykietę.
- **Oferta** : Ponieważ Twoja usługa Zimbra może hostować kilka ofert Zimbra, w tej kolumnie znajdziesz ofertę powiązaną z Twoim kontem e-mail.
- **Rozmiar** : w tej kolumnie wyświetlana jest całkowita pojemność konta e-mail oraz aktualnie zajęta przestrzeń.

Na górze tej strony znajduje się również link do [Webmail](/links/web/email), dzięki któremu będziesz mógł połączyć się bezpośrednio z zawartością Twojego konta e-mail z poziomu przeglądarki internetowej.

### Załóż konto e-mail

Aby utworzyć konto e-mail w Twojej usłudze Zimbra, kliknij zakładkę `Konta e-mail`{.action}, a następnie `Utwórz konto`{.action}.

Uzupełnij kolejne informacje, o które zostaniesz poproszony.

- **Konto e-mail** : wpisz *nazwę konta*, które będzie posiadać Twój adres e-mail (np. imię.nazwisko) i *wybierz nazwę domeny* z rozwijanego menu.

> [!warning]
>
> Wybór nazwy konta e-mail musi spełniać następujące warunki:
>
> - Minimum 2 znaki
> - Maksymalnie 32 znaki
> - Brak znaków akcentowanych
> - Brak znaków specjalnych, z wyjątkiem następujących znaków:`.`,`,`,`-` et `_`

- **Imię** : wpisz imię.
- **Nazwa** : wprowadź nazwę.
- **Nazwa wyświetlana** : wprowadź nazwę nadawcy, która ma się wyświetlać podczas wysyłki e-maili z tego adresu.
- **Hasło**: Ustaw hasło składające się z (minimum) 9 znaków, jednej wielkiej litery, jednej małej litery i jednej cyfry. Ze względów bezpieczeństwa nie używaj dwa razy tego samego hasła. Wybierz takie, które nie ma żadnego związku z Twoimi danymi osobowymi (np. unikaj podawania imienia, nazwiska i daty urodzenia). Zmieniaj ustawienia regularnie.

> [!warning]
>
> Wybór hasła musi spełniać następujące warunki:
>
> - Minimum 9 znaków
> - Maksymalnie 30 znaków
> - Brak znaków akcentowanych

Kliknij na `Potwierdź`{.action}, aby rozpocząć zakładanie konta.

## Sprawdź również <a name="go-further"></a>

[Skorzystaj z poczty Zimbra Webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ dotyczący rozwiązania Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
