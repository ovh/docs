---
title: "Jak powiązać nazwę domeny OVHcloud z hostingiem SquareSpace"
excerpt: "Przygotuj i skonfiguruj strefę DNS Twojej nazwy domeny OVHcloud, aby połączyć ją z hostingiem SquareSpace"
updated: 2026-03-18
---

## Wprowadzenie

Jesteś posiadaczem nazwy domeny w OVHcloud i chcesz połączyć ją z hostingiem SquareSpace. W tym przewodniku znajdziesz informacje o tym, jak przygotować i skonfigurować strefę DNS OVHcloud dla Twojego hostingu SquareSpace.

**Dowiedz się, jak powiązać nazwę domeny OVHcloud z hostingiem SquareSpace.**

> [!warning]
>
> - Pomoc techniczna SquareSpace nie ma dostępu do ustawień Twojej nazwy domeny OVHcloud i nie może udzielić Ci porad dotyczących informacji, które należy jej dostarczyć.
>
> - OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.<br><br> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z wyspecjalizowanym [usługodawcą](/links/partner) i/lub wydawcą usługi. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) niniejszego przewodnika.
>

## Wymagania początkowe

- Posiadanie [nazwy domeny](/links/web/domains) zarejestrowanej w OVHcloud.
- Posiadanie odpowiednich [uprawnień do zarządzania](/pages/account_and_service_management/account_information/managing_contacts) nazwą domeny.
- Posiadanie hostingu w SquareSpace.
- Dostęp do interfejsu zarządzania hostingiem w SquareSpace.

<!-- CP-NAV-START:web-dns-zone -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Strefy DNS](/links/control-panel/web-dns-zone)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Strefy DNS`{.action} > Wybierz nazwę domeny

---
<!-- CP-NAV-END:web-dns-zone -->

## W praktyce

Przed przystąpieniem do wykonywania kolejnych kroków tego przewodnika zalecamy zapoznanie się z przewodnikiem dotyczącym [edycji strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

> [!warning]
>
> Twoja strefa DNS jest potencjalnie już wstępnie skonfigurowana lub powiązana z hostingiem. Zobaczymy, jak zidentyfikować każdy rekord DNS niezbędny do połączenia z hostingiem SquareSpace. Niektóre z nich będą musiały zostać usunięte, aby uniknąć konfliktu z wymaganymi rekordami DNS w tej konfiguracji. Pozostałe zostaną po prostu zmodyfikowane lub utworzone. Aby lepiej zrozumieć, jako przykład posłużymy się nazwą domeny "**mydomain.ovh**". Zastąp ją nazwą Twojej domeny podczas konfiguracji.

### Konfiguracja rekordów DNS na koncie OVHcloud

Kliknij poniższe karty, aby wyświetlić kolejno każdy z **5** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> Wyświetlona tabela zawiera listę wszystkich rekordów DNS dla wybranej nazwy domeny.
>>
> **Krok 2**
>>
>> **Konfiguracja rekordów A**
>>
>> **1 - Identyfikacja:** Przefiltruj rekordy DNS, wybierając typ `A` w menu filtrów w prawym górnym rogu tabeli.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> Zidentyfikuj istniejące rekordy "A" dla samej nazwy domeny (np. `mydomain.ovh.`) oraz dla subdomeny "www" (np. `www.mydomain.ovh.`).
>>
>> **2 - Usuwanie:** Usuń wszystkie istniejące rekordy "A" dla subdomeny "www". Jeśli dla samej nazwy domeny istnieje więcej niż 4 rekordy "A", usuń nadmiarowe rekordy, aby pozostały tylko 4. Aby usunąć rekord, kliknij przycisk `...`{.action} po prawej stronie odpowiedniego wiersza, a następnie kliknij `Usuń wpis`{.action}.
>>
>> **3 - Modyfikacja:** Zmodyfikuj każdy pozostały rekord "A" dla samej nazwy domeny, klikając przycisk `...`{.action}, a następnie klikając `Zmień wpis`{.action}. Zastąp cel jednym z 4 adresów IPv4 SquareSpace (inny adres dla każdego rekordu):
>>
>> - `198.185.159.144`
>> - `198.185.159.145`
>> - `198.49.23.144`
>> - `198.49.23.145`
>>
>> Kliknij `Dalej`{.action} i zatwierdź.
>>
>> **4 - Dodawanie:** Jeśli istniało mniej niż 4 rekordy "A", utwórz brakujące rekordy. Kliknij `Dodaj wpis`{.action} w prawym górnym rogu, wybierz typ rekordu `A`{.action}, pozostaw pole **Subdomena** puste i wprowadź w polu **Cel** każdy adres IPv4, który nie został jeszcze przypisany. Kliknij `Dalej`{.action} i zatwierdź.
>>
>> Następnie przejdź do kroku 3.
>>
> **Krok 3**
>>
>> **Usuwanie rekordów AAAA**
>>
>> **1 - Identyfikacja:** Przefiltruj rekordy DNS, wybierając typ `AAAA` w menu filtrów w prawym górnym rogu tabeli.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> Zidentyfikuj istniejące rekordy "AAAA" dla samej nazwy domeny (np. `mydomain.ovh.`) oraz dla subdomeny "www" (np. `www.mydomain.ovh.`).
>>
>> **2 - Usuwanie:** Usuń wszystkie zidentyfikowane rekordy "AAAA" (sama nazwa domeny i subdomena "www"), aby uniknąć konfliktów z nowymi rekordami DNS. Dla każdego rekordu kliknij przycisk `...`{.action} po prawej stronie odpowiedniego wiersza, a następnie kliknij `Usuń wpis`{.action}.
>>
>> Jeśli nie istnieją żadne rekordy "AAAA", przejdź do kroku 4.
>>
> **Krok 4**
>>
>> **Usuwanie rekordów TXT**
>>
>> **1 - Identyfikacja:** Przefiltruj rekordy DNS, wybierając typ `TXT` w menu filtrów w prawym górnym rogu tabeli.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> Zidentyfikuj istniejące rekordy "TXT" dla samej nazwy domeny (np. `mydomain.ovh.`) oraz dla subdomeny "www" (np. `www.mydomain.ovh.`).
>>
>> **2 - Usuwanie:** Usuń wszystkie zidentyfikowane rekordy "TXT" (sama nazwa domeny i subdomena "www"), aby uniknąć konfliktów z nowymi rekordami DNS. Dla każdego rekordu kliknij przycisk `...`{.action} po prawej stronie odpowiedniego wiersza, a następnie kliknij `Usuń wpis`{.action}.
>>
>> Jeśli nie istnieją żadne rekordy "TXT", przejdź do kroku 5.
>>
> **Krok 5**
>>
>> **Konfiguracja rekordów CNAME**
>>
>> **1 - Identyfikacja:** Przefiltruj rekordy DNS, wybierając typ `CNAME` w menu filtrów w prawym górnym rogu tabeli.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> Zidentyfikuj istniejące rekordy "CNAME" dla subdomeny "www" (np. `www.mydomain.ovh.`).
>>
>> **2 - Usuwanie:** Jeśli istnieje więcej niż jeden rekord "CNAME" dla subdomeny "www", usuń wszystkie z wyjątkiem jednego. Aby usunąć rekord, kliknij przycisk `...`{.action} po prawej stronie odpowiedniego wiersza, a następnie kliknij `Usuń wpis`{.action}.
>>
>> **3 - Modyfikacja:** Jeśli istnieje rekord "CNAME" dla subdomeny "www", kliknij przycisk `...`{.action}, a następnie kliknij `Zmień wpis`{.action}. Zastąp jedynie **Cel** wartością `ext-cust.squarespace.com.`. Kliknij `Dalej`{.action} i zatwierdź.
>>
>> Jeśli nie istnieje żaden rekord "CNAME" dla subdomeny "www", kliknij `Dodaj wpis`{.action} w prawym górnym rogu, wybierz typ rekordu `CNAME`{.action}, wprowadź `www` w polu **Subdomena** i `ext-cust.squarespace.com.` w polu **Cel**. Kliknij `Dalej`{.action} i zatwierdź.
>>
>> **4 - Dodawanie:** Utwórz weryfikacyjny rekord CNAME, wprowadzając `unikalny kod pobrany z SquareSpace` w polu **Subdomena**, a następnie `verify.squarespace.com.` w polu **Cel**. Kliknij `Dalej`{.action} i zatwierdź.

Strefa DNS jest teraz skonfigurowana tak, aby wskazywała na hosting SquareSpace.

### Połącz nazwę domeny z SquareSpace

Poniższe kroki należy wykonać z poziomu interfejsu zarządzania SquareSpace.

> [!primary]
>
> - Możesz połączyć swoją nazwę domeny z testową lub płatną witryną SquareSpace. Nie można połączyć jej z wygasłą witryną.
> - Jeśli posiadasz konto e-mail powiązane z Twoją nazwą domeny, możesz z niego nadal korzystać po połączeniu nazwy domeny z SquareSpace. Przed połączeniem nazwy domeny zalecamy zapoznanie się z tym [przewodnikiem SquareSpace](https://support.squarespace.com/hc/pl/articles/217601877-Using-a-custom-domain-email-you-already-own-with-Squarespace).
> - Możesz używać kilku niestandardowych nazw domen dla swojej strony WWW. Możesz je połączyć lub zarejestrować w dowolnej liczbie.
> - Nie można połączyć niestandardowej nazwy domeny z SquareSpace, jeśli nazwa domeny zawiera słowo "squarespace" lub "sqsp".

Aby rozpocząć, wykonaj kroki połączenia opisane w etapie 1 tego [przewodnika SquareSpace](https://support.squarespace.com/hc/pl/articles/12880712406797-Connecting-an-OVHcloud-domain-to-your-Squarespace-site).

> [!warning]
>
> Jeśli otrzymasz alert "This domain is already connected to another Squarespace site", sprawdź na innych stronach SquareSpace, do której witryny jest połączona nazwa domeny. Następnie odłącz ją od tej witryny.

Kontynuuj, przechodząc do etapu 2 tego [przewodnika SquareSpace](https://support.squarespace.com/hc/pl/articles/12880712406797-Connecting-an-OVHcloud-domain-to-your-Squarespace-site).

Jeśli korzystasz z rozwiązania e-mail OVHcloud lub zamierzasz zamówić jedną z [naszych usług e-mail](/links/web/emails), musisz również odpowiednio przygotować Twoją strefę DNS. Zapoznaj się z przewodnikiem dotyczącym [konfiguracji rekordu MX](/pages/web_cloud/domains/dns_zone_mx).

## Sprawdź również <a name="go-further"></a>

[Zmiana serwerów DNS nazwy domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Utworzenie strefy DNS OVHcloud dla nazwy domeny](/pages/web_cloud/domains/dns_zone_create)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Aby przekazać zarządzanie nazwą domeny na inne konto klienta OVHcloud, zapoznaj się z przewodnikiem "[Zarządzanie kontaktami dla usług OVHcloud](/pages/account_and_service_management/account_information/managing_contacts)".

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
