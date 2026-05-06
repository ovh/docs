---
title: "Jak powiązać nazwę domeny OVHcloud z hostingiem Webflow"
excerpt: "Przygotuj i skonfiguruj strefę DNS Twojej nazwy domeny OVHcloud, aby połączyć ją z hostingiem Webflow"
updated: 2026-03-18
---

## Wprowadzenie

Jesteś posiadaczem nazwy domeny w OVHcloud i chcesz połączyć ją z hostingiem Webflow. W tym przewodniku znajdziesz informacje o tym, jak przygotować i skonfigurować strefę DNS OVHcloud dla Twojego hostingu Webflow.

**Dowiedz się, jak powiązać nazwę domeny OVHcloud z hostingiem Webflow.**

> [!warning]
>
> - Pomoc techniczna Webflow nie ma dostępu do ustawień Twojej nazwy domeny OVHcloud i nie może udzielić Ci porad dotyczących informacji, które należy jej dostarczyć.
> - OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.<br><br> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z wyspecjalizowanym [usługodawcą](/links/partner) i/lub wydawcą usługi. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) niniejszego przewodnika.
>

## Wymagania początkowe

- Posiadanie [nazwy domeny](/links/web/domains) zarejestrowanej w OVHcloud.
- Posiadanie odpowiednich [uprawnień do zarządzania](/pages/account_and_service_management/account_information/managing_contacts) nazwą domeny.
- Posiadanie hostingu w Webflow.
- Dostęp do interfejsu zarządzania hostingiem w Webflow.

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
> Twoja strefa DNS jest potencjalnie już wstępnie skonfigurowana lub powiązana z hostingiem. Zobaczymy, jak zidentyfikować każdy rekord DNS niezbędny do połączenia z hostingiem Webflow. Niektóre z nich będą musiały zostać usunięte, aby uniknąć konfliktu z wymaganymi rekordami DNS w tej konfiguracji. Pozostałe zostaną po prostu zmodyfikowane lub utworzone. Aby lepiej zrozumieć, jako przykład posłużymy się nazwą domeny "**mydomain.ovh**". Zastąp ją nazwą Twojej domeny podczas konfiguracji.

### 1. Skonfiguruj hosting Webflow

Najpierw przygotuj hosting Webflow, postępując zgodnie z instrukcjami zawartymi w sekcji **How to connect your custom domain** z [**tej strony dokumentacji Webflow**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export#how-to-connect-your-custom-domain).

### 2. Konfiguracja rekordów DNS na koncie OVHcloud

> [!warning]
>
> Zanim przejdziesz dalej:
>
> - Otwórz kartę w przeglądarce internetowej.
> - Otwórz [**tę stronę dokumentacji Webflow**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export).
> - Przejdź do sekcji "**How to set your DNS records**" dokumentacji Webflow.<br>
> Poniższe instrukcje pomogą Ci łatwiej skonfigurować strefę DNS OVHcloud.

<!-- CP-STEPS-START:configure-dns-records -->
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
>> **2 - Usuwanie:** Usuń wszystkie istniejące rekordy "A" dla subdomeny "www". Jeśli dla samej nazwy domeny istnieje więcej niż 2 rekordy "A", usuń nadmiarowe rekordy, aby pozostały tylko 2. Aby usunąć rekord, kliknij przycisk `...`{.action} po prawej stronie odpowiedniego wiersza, a następnie kliknij `Usuń wpis`{.action}.
>>
>> **3 - Modyfikacja:** Zmodyfikuj każdy pozostały rekord "A" dla samej nazwy domeny, klikając przycisk `...`{.action}, a następnie klikając `Zmień wpis`{.action}. Zastąp cel jednym z 2 adresów IPv4 Webflow (inny adres dla każdego rekordu):
>>
>> - `75.2.70.75`
>> - `99.83.190.102`
>>
>> Kliknij `Dalej`{.action} i zatwierdź.
>>
>> **4 - Dodawanie:** Jeśli istniało mniej niż 2 rekordy "A", utwórz brakujące rekordy. Kliknij `Dodaj wpis`{.action} w prawym górnym rogu, wybierz typ rekordu `A`{.action}, pozostaw pole **Subdomena** puste i wprowadź w polu **Cel** każdy adres IPv4, który nie został jeszcze przypisany. Kliknij `Dalej`{.action} i zatwierdź.
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
>> **Konfiguracja rekordu TXT**
>>
>> **1 - Identyfikacja:** Przefiltruj rekordy DNS, wybierając typ `TXT` w menu filtrów w prawym górnym rogu tabeli.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> Zidentyfikuj istniejące rekordy "TXT" dla samej nazwy domeny (np. `mydomain.ovh.`) oraz dla subdomeny "www" (np. `www.mydomain.ovh.`).
>>
>> **2 - Usuwanie:** Usuń wszystkie zidentyfikowane rekordy "TXT" (sama nazwa domeny i subdomena "www"), aby uniknąć konfliktów z nowymi rekordami DNS. Dla każdego rekordu kliknij przycisk `...`{.action} po prawej stronie odpowiedniego wiersza, a następnie kliknij `Usuń wpis`{.action}.
>>
>> **3 - Dodawanie:** Utwórz weryfikacyjny rekord TXT. Kliknij `Dodaj wpis`{.action} w prawym górnym rogu, wybierz typ rekordu `TXT`{.action}, wprowadź `_webflow` w polu **Subdomena**, a w polu **Cel** wartość typu `one-time-verification=XXXXXXXX` znajdującą się w sekcji `Site settings > Publishing tab > Production`{.action} Twojego konta Webflow. Kliknij `Dalej`{.action} i zatwierdź.
>>
>> Następnie przejdź do kroku 5.
>>
> **Krok 5**
>>
>> **Konfiguracja rekordu CNAME**
>>
>> **1 - Identyfikacja:** Przefiltruj rekordy DNS, wybierając typ `CNAME` w menu filtrów w prawym górnym rogu tabeli.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> Zidentyfikuj istniejące rekordy "CNAME" dla subdomeny "www" (np. `www.mydomain.ovh.`).
>>
>> **2 - Usuwanie:** Jeśli istnieje więcej niż jeden rekord "CNAME" dla subdomeny "www", usuń wszystkie z wyjątkiem jednego. Aby usunąć rekord, kliknij przycisk `...`{.action} po prawej stronie odpowiedniego wiersza, a następnie kliknij `Usuń wpis`{.action}.
>>
>> **3 - Modyfikacja:** Jeśli istnieje rekord "CNAME" dla subdomeny "www", kliknij przycisk `...`{.action}, a następnie kliknij `Zmień wpis`{.action}. Zastąp jedynie **Cel** wartością `proxy-ssl.webflow.com.`. Kliknij `Dalej`{.action} i zatwierdź.
>>
>> Jeśli nie istnieje żaden rekord "CNAME" dla subdomeny "www", kliknij `Dodaj wpis`{.action} w prawym górnym rogu, wybierz typ rekordu `CNAME`{.action}, wprowadź `www` w polu **Subdomena** i `proxy-ssl.webflow.com.` w polu **Cel**. Kliknij `Dalej`{.action} i zatwierdź.
<!-- CP-STEPS-END:configure-dns-records -->

Strefa DNS jest teraz skonfigurowana tak, aby wskazywała na hosting Webflow.

> [!primary]
>
> Weryfikacja nazwy domeny może potrwać do 48 godzin.

Jeśli korzystasz z rozwiązania e-mail OVHcloud lub zamierzasz zamówić jedną z [naszych usług e-mail](/links/web/emails), musisz również odpowiednio przygotować Twoją strefę DNS. Zapoznaj się z przewodnikiem dotyczącym [konfiguracji rekordu MX](/pages/web_cloud/domains/dns_zone_mx).

## Sprawdź również <a name="go-further"></a>

[Zmiana serwerów DNS nazwy domeny OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Utworzenie strefy DNS OVHcloud dla nazwy domeny](/pages/web_cloud/domains/dns_zone_create)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Aby przekazać zarządzanie nazwą domeny na inne konto klienta OVHcloud, zapoznaj się z przewodnikiem "[Zarządzanie kontaktami dla usług OVHcloud](/pages/account_and_service_management/account_information/managing_contacts)".

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
