---
title: Jak powiązać domenę OVHcloud z Google Site
excerpt: Przygotuj i skonfiguruj strefę DNS Twojej domeny OVHcloud, aby połączyć ją z Google Site
updated: 2024-06-13
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Posiadasz domenę w OVHcloud i chcesz ją połączyć z Google Site. W tym przewodniku znajdziesz etapy przygotowania i konfiguracji strefy DNS OVHcloud, aby umożliwić konfigurację Google Site.

**Dowiedz się, jak powiązać domenę OVHcloud z Google Site**

> [!warning]
>
> - Pomoc Google Site nie ma dostępu do ustawień Twojej domeny OVHcloud, a zatem nie może udzielić Ci porad dotyczących informacji, które należy jej dostarczyć.
>
> - OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.<br><br> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z wyspecjalizowanym [usługodawcą](/links/partner) lub skontaktuj się z dostawcą usługi. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#gofurther) ten przewodnik.
>

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager).
- Posiadanie [domeny](/links/web/domains) zarejestrowanej w OVHcloud.
- Posiadanie odpowiednich [uprawnień do zarządzania](/pages/account_and_service_management/account_information/managing_contacts) domeną w [Panelu klienta OVHcloud](/links/manager).
- Posiadanie strony Google i bycie jej właścicielem.

## W praktyce

Zalecamy, abyś przed przystąpieniem do dwóch kroków, zapoznał się z konfiguracją strefy DNS za pomocą przewodnika "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> Strefa DNS jest już wstępnie skonfigurowana lub powiązana z hostingiem. Zobaczymy, jak zidentyfikować każdy rekord DNS niezbędny do połączenia z Google Site. Niektóre z nich będą musiały zostać usunięte, aby uniknąć konfliktu z wymaganymi rekordami DNS w tej konfiguracji. Pozostałe zostaną po prostu zmodyfikowane lub utworzone. Aby lepiej zrozumieć, jako przykład posłużymy się nazwą domeny "**mydomain.ovh**". Zastąp go nazwą domeny podczas konfiguracji.

### 1. Skonfiguruj Google Site

> [!warning]
>
> Tylko właściciel witryny Google może ją połączyć z domeną. W razie potrzeby sprawdź, jak [zmienić właściciela witryny Google](https://support.google.com/sites/answer/97934).

Jeśli korzystasz z Google Site wraz z domeną OVHcloud, najpierw przygotuj hosting, postępując zgodnie z instrukcjami zawartymi w sekcji **Konfiguracja domeny niestandardowej** z [**tej strony pomocy Google**](https://support.google.com/sites/answer/9068867?hl=pl#zippy=).

### 2. Konfiguracja wpisów DNS na koncie OVHcloud

Zaloguj się do Twojego [panelu klienta OVHcloud](/links/manager){.external} w sekcji `Web Cloud`{.action}. Kliknij `Domeny`{.action}, następnie nazwę wybranej domeny. Teraz przejdź do zakładki `Strefa DNS`{.action}.

Tabela, która się wyświetla zawiera listę wszystkich rekordów DNS wybranej domeny.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-mydomain-anycast.png){.thumbnail}

Każdy rekord DNS można zmienić, klikając przycisk `...`{.action} znajdujący się po prawej stronie odpowiedniego wiersza tabeli, a następnie klikając `Zmień rekord`{.action}.

Postępuj zgodnie z kolejnością kroków, przechodząc przez następujące karty:

> [!tabs]
> **Etap 1**
>> **Rekord A**<br><br>
>> Aby zidentyfikować istniejące rekordy "A", kliknij menu filtrów na górze tabeli rekordów DNS i wybierz opcję `A`.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> - Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli, który odpowiada nazwie Twojej domeny, bez subdomeny (przykład: `mydomain.ovh.`), a następnie kliknij `Zmień rekord`{.action}.<br>
>> - Jeśli jest obecny rekord dla subdomeny "www" (przykład: `www.mydomain.ovh.`), usuń go, aby nie kolidował z rekordem CNAME, który wprowadzisz w kroku 4. Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli odpowiadającego Twojej subdomenie na "www", a następnie kliknij `Usuń rekord`{.action}.<br>
>> - Jeśli nie posiadasz istniejącego rekordu "A", kliknij przycisk `Dodaj rekord`{.action} w prawym górnym rogu ekranu i wybierz "Pole wskaźnika" `A`{.action}<br><br>
>> Utwórz kolejno 4 rekordy typu "A", aby wpisać 4 adresy IPv4 związane z Google Site.
>> Pozostaw pole **Subdomena** puste i wprowadź pierwszy adres IPv4 serwisu Google Site `216.239.32.21` w polu **Adres docelowy**.
>> Kliknij na `Dalej`{.action} i zatwierdź rejestrację "A". Powtórz operację dla pozostałych trzech adresów IPv4 `216.239.34.21`, `216.239.36.21` i `216.239.38.21`, a następnie przejdź do etapu 2. Ponieważ wartości tych adresów IP mogą ulec zmianie, sprawdź w oficjalnej dokumentacji [wartość rekordów A](https://support.google.com/a/answer/2579934?hl=pl&ref_topic=2721296&sjid=103737497980680534-EU).
>>
> **Etap 2**
>> **Rekord AAAA**<br><br>
>> Aby zidentyfikować istniejące rekordy "AAAA", kliknij menu filtrów u góry tabeli rekordów DNS i wybierz opcję `AAAA`.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli odpowiadającego tylko Twojej domenie, bez subdomeny (przykład: `mydomain.ovh.`), a następnie kliknij `Usuń rekord`{.action}.<br>
>> - Jeśli jest obecny rekord dla subdomeny "www" (przykład: `www.mydomain.ovh.`), usuń go również, aby nie kolidował z rekordem CNAME, który wprowadzisz w kroku 4. Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli odpowiadającego Twojej subdomenie na "www", a następnie kliknij `Usuń rekord`{.action}.<br>
>> - Jeśli nie masz istniejącego rekordu "AAAA", przejdź do etapu 3.
>>
> **Etap 3**
>> **Rekord TXT**<br><br>
>> Aby zidentyfikować istniejące rekordy "TXT", kliknij menu filtrów u góry tabeli rekordów DNS i wybierz opcję `TXT`.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> - Jeśli dla samej domeny istnieją rekordy "TXT" (na przykład: `mydomain.ovh.`) i dla subdomeny na "www" (na przykład: `www.mydomain.ovh.`), usuń je, aby nie kolidowały z rekordem CNAME, który podasz w etapie 4. Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli odpowiadającego Twojej subdomenie na "www", a następnie kliknij `Usuń rekord`{.action}.<br>
>> - Należy utworzyć rekord typu "TXT". Kliknij przycisk `Dodaj rekord`{.action} w prawym górnym rogu ekranu i wybierz "Pole wskazania" `TXT`{.action}.
>> Uzupełnij pola **Subdomena** i **Adres docelowy** informacjami zawartymi na stronie "[Wartości rekordów TXT](https://support.google.com/a/answer/2716802?hl=pl&ref_topic=2716886&sjid=3052810298579211755-EU)" w oficjalnej dokumentacji. Pole **Subdomena** jest zazwyczaj puste, a pole **Adres docelowy** jest typu `google-site-verification=XXXXXXXXXXXX`.<br>
>> Kliknij na `Dalej`{.action}, aby potwierdzić rejestrację "TXT" i przejść do etapu 4.
>>
> **Etap 4**
>> **Rekord CNAME**<br><br>
>> Aby zidentyfikować istniejące rekordy "CNAME", kliknij menu filtrów u góry tabeli rekordów DNS i wybierz opcję `CNAME`.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> - Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli odpowiadającego Twojej subdomenie "www" (przykład: `www.mydomain.ovh.`), a następnie kliknij `Zmień rekord`{.action}.<br>
>> - Jeśli nie posiadasz istniejącego rekordu "CNAME", kliknij przycisk `Dodaj rekord`{.action} w prawym górnym rogu ekranu i wybierz "Pole wpisu" `CNAME`{.action}.
>>
>> Uzupełnij pole **Subdomena** wartością `www` i wpisz `ghs.googlehosted.com.` w polu **Adres**. Ponieważ te wartości ulegną zmianie, sprawdź je na stronie "[Wartości rekordów CNAME](https://support.google.com/a/answer/112038?sjid=3052810298579211755-EU)" w oficjalnej dokumentacji<br>
>> Kliknij na `Dalej`{.action}, aby potwierdzić rejestrację "CNAME".

Strefa DNS jest teraz skonfigurowana do łączenia z Google Site.

> [!primary]
>
> Weryfikacja domeny może potrwać do 48 godzin.

Jeśli korzystasz z oferty e-mail OVHcloud lub zamierzasz zamówić jedną z [naszych usług e-mail](/links/web/emails), musisz również odpowiednio przygotować Twoją strefę DNS. Zapoznaj się z przewodnikiem dotyczącym [konfiguracji rekordu MX](/pages/web_cloud/domains/dns_zone_mx).

## Sprawdź również <a name="go-further"></a>

[Zmiana serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Utworzenie strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Aby zmienić sposób zarządzania domeną na inne konto klienta OVHcloud, zapoznaj się z przewodnikiem "[Zarządzanie kontaktami dla usług OVHcloud](/pages/account_and_service_management/account_information/managing_contacts)".

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).