---
title: Jak powiązać domenę OVHcloud z hostingiem GoDaddy
excerpt: Przygotuj i skonfiguruj strefę DNS Twojej domeny OVHcloud, aby połączyć ją z hostingiem GoDaddy
updated: 2024-06-13
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Posiadasz domenę w OVHcloud i chcesz ją połączyć z hostingiem GoDaddy. W tym przewodniku znajdziesz etapy przygotowania i konfiguracji strefy DNS OVHcloud, aby umożliwić konfigurację hostingu GoDaddy.

**Dowiedz się, jak powiązać domenę OVHcloud z hostingiem GoDaddy**

> [!warning]
>
> - Pomoc GoDaddy nie ma dostępu do ustawień Twojej domeny OVHcloud, a zatem nie może udzielić Ci porad dotyczących informacji, które należy jej dostarczyć.
>
> - OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.<br><br> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z wyspecjalizowanym [usługodawcą](/links/partner) lub skontaktuj się z dostawcą usługi. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź](#gofurther) również ten przewodnik.
>

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager){.external}.
- Posiadanie [domeny](/links/web/domains){.external} zarejestrowanej w OVHcloud.
- Posiadanie odpowiednich [uprawnień do zarządzania](/pages/account_and_service_management/account_information/managing_contacts) domeną w [Panelu klienta OVHcloud](/links/manager){.external}.
- Posiadanie hostingu w GoDaddy.
- Dostęp do interfejsu zarządzania hostingiem w GoDaddy.

## W praktyce

Zalecamy, abyś przed przystąpieniem do dwóch kroków, zapoznał się z konfiguracją strefy DNS za pomocą przewodnika "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> Strefa DNS jest już wstępnie skonfigurowana lub powiązana z hostingiem. Zobaczymy, jak zidentyfikować każdy rekord DNS niezbędny do połączenia z hostingiem GoDaddy. Niektóre z nich będą musiały zostać usunięte, aby uniknąć konfliktu z wymaganymi rekordami DNS w tej konfiguracji. Pozostałe zostaną po prostu zmodyfikowane lub utworzone. Aby lepiej zrozumieć, jako przykład posłużymy się nazwą domeny "**mydomain.ovh**". Zastąp go nazwą domeny podczas konfiguracji.

### 1. Skonfiguruj hosting GoDaddy

Jeśli korzystasz z hostingu GoDaddy z domeną OVHcloud, najpierw musisz przygotować hosting, postępując zgodnie z instrukcjami podanymi na [**tej stronie dokumentacji GoDaddy**](https://fr.godaddy.com/help/connect-my-websites-marketing-site-to-a-domain-registered-elsewhere-40612?lc=en-US).

### 2. Konfiguracja wpisów DNS na koncie OVHcloud

> [!warning]
>
> Prima di continuare:
>
> - Apri una scheda in parallelo sul tuo browser internet.
> - Apri [**questa pagina della documentazione GoDaddy**](https://fr.godaddy.com/help/connect-my-websites-marketing-site-to-a-domain-registered-elsewhere-40612?lc=en-US){.external}.
> - Postępuj zgodnie z instrukcjami aż do etapu 10 i uzyskaj informacje dotyczące Twojej strony WWW, aby móc modyfikować rekordy DNS OVHcloud.<br>
> Le istruzioni seguenti ti aiuteranno a configurare la tua zona DNS OVHcloud.

Zaloguj się do Twojego [panelu klienta OVHcloud](/links/manager){.external} w sekcji `Web Cloud`{.action}. Kliknij `Domeny`{.action}, następnie nazwę wybranej domeny. Teraz przejdź do zakładki `Strefa DNS`{.action}.

Tabela, która się wyświetla zawiera listę wszystkich rekordów DNS wybranej domeny.

![dnszone](images/tab.png){.thumbnail}

Każdy rekord DNS można zmienić, klikając przycisk `...`{.action} znajdujący się po prawej stronie odpowiedniego wiersza tabeli, a następnie klikając `Zmień rekord`{.action}.

Postępuj zgodnie z kolejnością kroków, przechodząc przez następujące karty:

> [!tabs]
> **Etap 1**
>> **Rekord A**<br><br>
>> Aby zidentyfikować istniejące rekordy "A", kliknij menu filtrów w górnej części tabeli rekordów DNS i wybierz opcję `A`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> - Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli, który odnosi się tylko do Twojej domeny, bez subdomeny (na przykład: `mydomain.ovh.`), a następnie kliknij `Zmień rekord`{.action}.<br>
>> - Jeśli istnieje rekord dla subdomeny "www." (przykład: `www.mydomain.ovh.`), należy go usunąć, aby nie kolidował z rekordem CNAME, który wprowadzisz w etapie 3. Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli odnoszącego się tylko do Twojej domeny i subdomeny "www.", a następnie kliknij `Usuń rekord`{.action}.<br>
>> - Jeśli nie masz istniejącego rekordu "A", kliknij przycisk `Dodaj rekord`{.action} w prawym górnym rogu ekranu i wybierz "Pole wskaźnika" `A`{.action}<br><br>
>> Pozostaw pole **Subdomena** puste i wpisz adres IPv4 *zgłoszony w interfejsie GoDaddy* w polu **Cel**.
>> Kliknij `Dalej`{.action}, zatwierdź rekord "A" i przejdź do etapu 2.
> **Etap 2**
>> **Rekord AAAA**<br><br>
>>  Aby zidentyfikować istniejące rekordy "AAAA", kliknij menu filtrów u góry tabeli rekordów DNS i wybierz opcję `AAAA`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli, który pasuje tylko do Twojej domeny, bez subdomeny (przykład: `mydomain.ovh.`), a następnie kliknij `Usuń rekord`{.action}.<br>
>> - Jeśli jest obecny rekord dla subdomeny "www" (przykład: `www.mydomain.ovh.`), usuń go również, aby nie kolidował z rekordem CNAME, który wprowadzisz w kroku 4. Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli odpowiadającego Twojej domenie z subdomeną "www", a następnie kliknij `Usuń rekord`{.action}.<br>
>> - Jeśli nie masz istniejącego rekordu "AAAA", przejdź do etapu 3.
> **Etap 3**
>> **Rekord TXT**<br><br>
>>  Aby zidentyfikować istniejące rekordy "TXT", kliknij menu filtrów na górze tabeli rekordów DNS i wybierz opcję `TXT`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> - Jeśli rekordy "TXT" są obecne tylko dla domeny (na przykład: `mydomain.ovh.`) i dla jej subdomeny "www." (na przykład: `www.mydomain.ovh.`), należy je usunąć, aby nie kolidowały z rekordem CNAME, który podasz w etapie 4. Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli odpowiadającego nazwie Twojej domeny z subdomeną "www.", a następnie kliknij `Usuń rekord`{.action}.<br>
> **Etap 4**
>> **Rekord CNAME**<br><br>
>>  Aby zidentyfikować istniejące rekordy "CNAME", kliknij menu filtrów na górze tabeli rekordów DNS i wybierz opcję `CNAME`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> - Kliknij przycisk `...`{.action} po prawej stronie wiersza tabeli odpowiadającego Twojej subdomenie "www." (przykład: `mydomain.ovh.`), a następnie kliknij `Zmień rekord`{.action}.<br>
>> - Jeśli nie posiadasz istniejącego rekordu "CNAME", kliknij przycisk `Dodaj rekord`{.action} w prawym górnym rogu ekranu i wybierz "Pole wpisu" `CNAME`{.action}.
>> Uzupełnij pole **Subdomena** wartością `www` i wpisz wartość odczytaną w interfejsie GoDaddy w polu **Cel**.<br>
>> Kliknij `Dalej`{.action}, po czym zatwierdź rekord "CNAME".

Strefa DNS jest teraz skonfigurowana do łączenia z hostingiem GoDaddy.

> [!primary]
>
> Weryfikacja domeny może potrwać do 48 godzin.

Jeśli korzystasz z oferty e-mail OVHcloud lub zamierzasz zamówić jedną z [naszych usług e-mail](/links/web/emails), musisz również odpowiednio przygotować Twoją strefę DNS. Zapoznaj się z przewodnikiem dotyczącym [konfiguracji rekordu MX](/pages/web_cloud/domains/dns_zone_mx).

## Sprawdź również <a name="go-further"></a>

[Zmiana serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Utworzenie strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Aby zmienić sposób zarządzania domeną na inne konto klienta OVHcloud, zapoznaj się z przewodnikiem "[Zarządzanie kontaktami dla usług](/pages/account_and_service_management/account_information/managing_contacts) OVHcloud".

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
