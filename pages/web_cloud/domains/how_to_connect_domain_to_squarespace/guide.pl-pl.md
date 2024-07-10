---
title: "Jak powiązać domenę OVHcloud z hostingiem SquareSpace"
excerpt: "Przygotuj i skonfiguruj strefę DNS Twojej domeny OVHcloud, aby połączyć ją z hostingiem SquareSpace"
updated: 2024-05-15
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Posiadasz domenę w OVHcloud i chcesz ją połączyć z hostingiem SquareSpace. W tym przewodniku znajdziesz etapy przygotowania i konfiguracji strefy DNS OVHcloud, aby umożliwić konfigurację hostingu SquareSpace.

**Dowiedz się, jak powiązać domenę OVHcloud z hostingiem SquareSpace**

> [!warning]
>
> - Pomoc SquareSpace nie ma dostępu do ustawień Twojej domeny OVHcloud i nie może udzielić Ci porad dotyczących informacji, które należy jej dostarczyć.
>
> - OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.<br><br> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z wyspecjalizowanym [usługodawcą](/links/partner) lub skontaktuj się z dostawcą usługi. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) ten przewodnik.
>

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager){.external}.
- Posiadanie [domeny](/links/web/domains){.external} zarejestrowanej w OVHcloud.
- Posiadanie odpowiednich [uprawnień do zarządzania](/pages/account_and_service_management/account_information/managing_contacts) domeną w [Panelu klienta OVHcloud](/links/manager){.external}.
- Posiadanie hostingu w SquareSpace.
- Dostęp do interfejsu zarządzania hostingiem w SquareSpace.

## W praktyce

Zalecamy, abyś przed przystąpieniem do dwóch kroków, zapoznał się z konfiguracją strefy DNS za pomocą przewodnika "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> Strefa DNS jest już wstępnie skonfigurowana lub powiązana z hostingiem. Zobaczymy, jak zidentyfikować każdy rekord DNS niezbędny do połączenia z hostingiem SquareSpace. Niektóre z nich będą musiały zostać usunięte, aby uniknąć konfliktu z wymaganymi rekordami DNS w tej konfiguracji. Pozostałe zostaną po prostu zmodyfikowane lub utworzone. Aby lepiej zrozumieć, jako przykład posłużymy się nazwą domeny "**mydomain.ovh**". Zastąp go nazwą domeny podczas konfiguracji.

### Konfiguracja wpisów DNS na koncie OVHcloud

Zaloguj się do Twojego panelu [klienta OVHcloud](/links/manager){.external} w sekcji `Web Cloud`{.action}. Kliknij `Domeny`{.action}, następnie nazwę wybranej domeny. Teraz przejdź do zakładki `Strefa DNS`{.action}.

Tabela, która się wyświetla zawiera listę wszystkich rekordów DNS wybranej domeny.

![dnszone](images/tab.png){.thumbnail}

Każdy rekord DNS można zmienić, klikając przycisk `...`{.action} znajdujący się po prawej stronie odpowiedniego wiersza tabeli, a następnie klikając `Zmień rekord`{.action}.

Postępuj zgodnie z kolejnością kroków, przechodząc przez następujące karty:

> [!tabs]
> **Etap 1**
>> **Rekord A**<br><br>
>> Aby zidentyfikować istniejące rekordy "A", kliknij menu filtrów w górnej części tabeli rekordów DNS i wybierz opcję `A`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}<br>
>> - Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli, który odnosi się tylko do Twojej domeny, bez subdomeny (na przykład: `mydomain.ovh.`), a następnie kliknij `Zmień rekord`{.action}.<br>
>> - Jeśli istnieje rekord dla subdomeny "www." (przykład: `www.mydomain.ovh.`), należy go usunąć, aby nie kolidował z rekordem CNAME, który wprowadzisz w etapie 4. Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli odpowiadającego nazwie Twojej domeny z subdomeną "www.", a następnie kliknij `Usuń rekord`{.action}.<br>
>> - Jeśli nie masz istniejącego rekordu "A", kliknij przycisk `Dodaj rekord`{.action} w prawym górnym rogu ekranu i wybierz "Pole wskaźnika" `A`{.action}<br><br>
>> Kolejno utwórz 4 rekordy typu "A", aby wpisać 4 adresy IPv4 związane z usługą SquareSpace.
>> Pozostaw puste pole **Subdomena** i wprowadź pierwszy adres IPv4 domeny SquareSpace `198.185.159.144` w polu **Adres docelowy**.
>> Kliknij przycisk `Dalej`{.action}, zatwierdź rejestrację "A", powtórz operację dla 3 pozostałych adresów IPv4 `198.185.159.145`; `198.49.23.144`; `198.49.23.145` i przejdź do etapu 2.
> **Etap 2**
>> **Rekord AAAA**<br><br>
>>  Aby zidentyfikować istniejące rekordy "AAAA", kliknij menu filtrów u góry tabeli rekordów DNS i wybierz opcję `AAAA`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}<br>
>> - Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli, który pasuje tylko do Twojej domeny, bez subdomeny (przykład: `mydomain.ovh.`), a następnie kliknij `Usuń wpis`{.action}.<br>
>> - Jeśli jest obecny rekord dla subdomeny "www" (przykład: `www.mydomain.ovh.`), usuń go również, aby nie kolidował z rekordem CNAME, który wprowadzisz w kroku 4. Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli odpowiadającego Twojej domenie z subdomeną "www", a następnie kliknij `Usuń rekord`{.action}.<br>
>> - Jeśli nie masz istniejącego rekordu "AAAA", przejdź do etapu 3.
> **Etap 3**
>> **Rekord TXT**<br><br>
>> Aby zidentyfikować istniejące rekordy "TXT", kliknij menu filtrów u góry tabeli rekordów DNS i wybierz opcję `TXT`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}<br>
>> - Jeśli dla samej domeny istnieją rekordy "TXT" (na przykład: `mydomain.ovh.`), a dla jej subdomeny na "www" (na przykład: `www.mydomain.ovh.`), musisz je usunąć, aby nie kolidowały z rekordem CNAME, który wprowadzisz w etapie 4. Kliknij przycisk`...`{.action} po prawej stronie wiersza tabeli odpowiadającego nazwie Twojej domeny wraz z subdomeną "www", a następnie kliknij `Usuń rekord`{.action}.<br>
> **Etap 4**
>> **Rekord CNAME**<br><br>
>> Aby zidentyfikować istniejące rekordy "CNAME", kliknij menu filtrów u góry tabeli rekordów DNS i wybierz opcję `CNAME`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>> - Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli odpowiadającego Twojej subdomenie'' www' (przykład: `mydomain.ovh.`), a następnie kliknij `Zmień rekord`{.action}.<br>
>> - Jeśli nie posiadasz istniejącego rekordu "CNAME", kliknij przycisk `Dodaj rekord`{.action} w prawym górnym rogu ekranu i wybierz "Pole wpisu" `CNAME`{.action}.
>> Uzupełnij pole **Subdomena** wartością `www` i wprowadź `verify.squarespace.com.` w polu **Adres docelowy**.<br>
>>![CNAME-entry](images/add-an-entry-to-the-dns-zone-cname-squarespace.png){.thumbnail}
>> Kliknij na `Dalej`{.action}, następnie zatwierdź rekord "CNAME".
>> Dodaj drugi rekord CNAME, wprowadzając `ext-cust.squarespace.com.` w polu **Adres docelowy**.<br>

Strefa DNS jest teraz skonfigurowana do łączenia z hostingiem SquareSpace.

### Połącz swoją domenę z SquareSpace

Operacje na tym etapie należy wykonać w panelu zarządzania SquareSpace.

> [!primary]
>
> - Możesz połączyć swoją domenę z testową lub płatną witryną SquareSpace. Nie można połączyć go z wygasłą witryną.
> - Jeśli posiadasz konto e-mail powiązane z Twoją domeną, możesz z niego nadal korzystać po zalogowaniu domeny do SquareSpace. Przed połączeniem domeny zalecamy zapoznanie się z tym [przewodnikiem dotyczącym platformy SquareSpace](https://support.squarespace.com/hc/en-us/articles/217601877-Using-a-custom-domain-email-you-already-own-with-Squarespace){.external}.
> - Możesz używać kilku niestandardowych nazw domen dla swojej strony www. Możesz się z nimi połączyć lub zapisać dowolną ich liczbę.
> - Nie można połączyć domeny niestandardowej z usługą SquareSpace, jeśli nazwa domeny zawiera słowo "squarespace" lub "sqsp".

Aby rozpocząć, wykonaj kroki połączenia opisane w etapie 1 tego [przewodnika SquareSpace](https://support.squarespace.com/hc/en-us/articles/12880712406797-Connecting-an-OVHcloud-domain-to-your-Squarespace-site){.external}.

> [!warning]
>
> Jeśli otrzymasz alert "This domain is already connected to another Squarespace site" (Ta domena jest już połączona z inną stroną Squarespace), sprawdź na innych stronach WWW Squarespace, czy domena jest połączona z inną stroną. Następnie wyloguj go z tej witryny.

Aby kontynuować proces, przejdź do etapu 2 niniejszego [przewodnika SquareSpace](https://support.squarespace.com/hc/en-us/articles/12880712406797-Connecting-an-OVHcloud-domain-to-your-Squarespace-site){.external}.

Jeśli korzystasz z oferty e-mail OVHcloud lub zamierzasz zamówić jedną z [naszych usług e-mail](/links/web/emails), przygotuj odpowiednio Twoją strefę DNS. Zapoznaj się z przewodnikiem dotyczącym "[Konfiguracja rekordu MX](/pages/web_cloud/domains/dns_zone_mx)".

## Sprawdź również <a name="go-further"></a>

[Zmiana serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Utworzenie strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Aby zmienić sposób zarządzania domeną na inne konto klienta OVHcloud, zapoznaj się z przewodnikiem "[Zarządzanie kontaktami dla usług](/pages/account_and_service_management/account_information/managing_contacts) OVHcloud".

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).