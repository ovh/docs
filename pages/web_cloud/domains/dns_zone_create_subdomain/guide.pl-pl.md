---
title: "Tworzenie strefy DNS OVHcloud dla poddomeny"
excerpt: "Dowiedz się, jak utworzyć strefę DNS w OVHcloud dla poddomeny nazwy domeny za pomocą Panelu klienta"
updated: 2026-02-19
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
pre {
    font-size: 14px !important;
}
pre.bgwhite {
    background-color: #fff !important;
    color: #000 !important;
    font-family: monospace !important;
    padding: 5px !important;
    margin-bottom: 5px !important;
}
pre.bgwhite code {
    background-color: #fff !important;
    border: solid 0px transparent !important;
    font-family: monospace !important;
    font-size: 0.90em !important;
    color: #000 !important;
}
.small {
   font-size: 0.90em !important;
}
</style>

## Wprowadzenie

Chcesz utworzyć strefę DNS dla poddomeny?

Strefa **D**omain **N**ame **S**ystem (**DNS**) nazwy domeny to jej plik konfiguracyjny. Składa się z informacji technicznych, zwanych *rekordami DNS*. Strefa DNS działa jak centrum kierowania ruchem.

Aby uzyskać więcej informacji, zapoznaj się z naszymi przewodnikami:

- [Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

Zazwyczaj rekordy DNS poddomeny konfiguruje się bezpośrednio ze strefy DNS aktywnej nazwy domeny, do której należy.
Jednak również możliwe jest utworzenie specjalnej strefy DNS dla poddomeny.

Z różnych powodów możesz chcieć utworzyć strefę DNS dla poddomeny w OVHcloud.
Wówczas będzie ona mieć własną strefę do konfigurowania rekordów DNS.

> [!success]
>
> Na przypomnienie:
>
> - Nazwa domeny ma zazwyczaj postać: **domain.tld**. Na przykład: ovhcloud.com.
> - Poddomena ma zazwyczaj postać: **sub.domain.tld**. Na przykład: help.ovhcloud.com.
>
> Domyślnie subdomena zależy od nazwy domeny, aby działać.
> W praktyce nie będziesz mógł użyć poddomeny **sub.domain.tld**, jeśli nie masz dostępu do zarządzania nazwą domeny **domain.tld**.
>
> Jeśli chcesz utworzyć strefę DNS dla nazwy domeny, skorzystaj bezpośrednio z [tego przewodnika](/pages/web_cloud/domains/dns_zone_create).

**Dowiedz się, jak utworzyć strefę DNS w OVHcloud dla poddomeny nazwy domeny za pomocą Panelu klienta OVHcloud.**

## Wymagania początkowe

- Posiadanie nazwy domeny, od której będzie zależeć wybrana subdomena.
- Poddomena nie może już mieć aktywnej lub nieaktywnej strefy DNS w OVHcloud lub być obecnie przedmiotem operacji lub zamówienia w OVHcloud.
- Zalogowanie się do swojego [Panelu klienta OVHcloud](/links/manager).

<!-- CP-NAV-START:web-dns-zone -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Strefy DNS](/links/control-panel/web-dns-zone)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Strefy DNS`{.action} > Wybierz nazwę domeny

---
<!-- CP-NAV-END:web-dns-zone -->

## W praktyce

### 1 - Utwórz strefę DNS za pomocą Panelu klienta OVHcloud

<!-- CP-STEPS-START:create-dns-zone -->
W tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), a następnie w przycisk `Zamów`{.action}.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się pojawi, wprowadź poddomenę (np. *sub.domain.tld*), dla której chcesz utworzyć strefę DNS OVHcloud. Poczekaj kilka chwil, dopóki narzędzie nie przeprowadzi weryfikacji poddomeny.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Jeśli pojawi się komunikat informujący, że strefa DNS nie może zostać utworzona, upewnij się, że subdomena spełnia wymagania wstępne lub skontaktuj się z osobą, która ją zarządza. Gdy wszystko będzie poprawne, spróbuj ponownie.
>>
> **Krok 3**
>>
>> Po zakończeniu weryfikacji, wybierz opcję aktywacji lub nie dodawania wpisów minimalnych w strefie DNS, którą utworzysz. Wybór ten nie jest ostateczny, ponieważ w przyszłości będziesz mógł [edytować rekordy strefy DNS](/pages/web_cloud/domains/dns_zone_edit).
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}
>>
>> |Włącz minimalne wpisy?|Szczegóły|
>> |---|---|
>> |Tak|Wybierz ten wybór, jeśli chcesz samodzielnie spersonalizować strefę DNS.<br>![minimum-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
>> |Nie|Wybierz ten wybór, jeśli planujesz korzystać z usług OVHcloud takich jak [hosting WWW](/links/web/hosting), strefa jest wstępnie skonfigurowana do tego celu.<br>![no-minimum-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Po dokonaniu wyboru, postępuj zgodnie z etapami wyświetlanymi w Panelu klienta OVHcloud, aż do utworzenia strefy DNS.
<!-- CP-STEPS-END:create-dns-zone -->

### 2 - Edytowanie strefy DNS (opcjonalnie)

Po utworzeniu strefy DNS Twojej subdomena możesz ją edytować. Operacja ta jest opcjonalna, ale może okazać się konieczna, jeśli chcesz zapewnić nieprzerwaną dostępność usług powiązanych z tą subdomena (takich jak strona WWW i/lub konta e-mail).

Aby edytować tę strefę DNS, zapoznaj się z naszym przewodnikiem "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!primary]
>
> Jeśli właśnie utworzyłeś strefę DNS i nazwa subdomena nie wyświetla się jeszcze na liście Twoich usług, odczekaj 15-20 minut, a następnie przeładuj stronę.

### 3 - Zadeklarowanie serwerów DNS w aktywnej strefie DNS nazwy domeny, od której zależy wybrana subdomena

Aktywacja strefy DNS dla poddomeny różni się od aktywacji nazwy domeny, ponieważ subdomena musi zależeć od nazwy domeny, aby działać.

Najpierw musisz uzyskać nazwy **serwerów DNS** OVHcloud skojarzonych ze strefą DNS utworzoną dla Twojej poddomeny.

<!-- CP-STEPS-START:find-dns-servers -->
Aby je odnaleźć, w tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią poddomenę.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> W tabeli na stronie, która się pojawi, zwróć uwagę na dwie kolumny **Typ** i **Adres docelowy**.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> Znajdź dwie linie typu **NS** i zanotuj dwie wartości w kolumnie **Adres docelowy**.
>> Nazwy serwerów DNS powinny mieć jedną z poniższych trzech form:
>>
>> - `nsXX.ovh.net` i `dnsXX.ovh.net` lub `nsXXX.ovh.net` i `dnsXXX.ovh.net` (gdzie każdy `X` reprezentuje cyfrę od **0** do **9**).
>> - `nsXX.ovh.ca` i `dnsXX.ovh.ca` lub `nsXXX.ovh.ca` i `dnsXXX.ovh.ca` (gdzie każdy `X` reprezentuje cyfrę od **0** do **9**).
>> - `ns200.anycast.me` i `dns200.anycast.me` (jeśli podpisałeś się na opcję [DNS anycast](/links/web/domains-options)).
<!-- CP-STEPS-END:find-dns-servers -->

Po odzyskaniu dwóch nazw serwerów DNS, mogą zajść dwie sytuacje:

**Kliknij jedną z dwóch sytuacji, aby wyświetlić zawartość.**

/// details | Nazwa domeny, od której zależy Twoja subdomena, ma aktywną strefę DNS w OVHcloud

<!-- CP-STEPS-START:add-ns-records-ovhcloud -->
W tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią poddomenę.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na prawym lub poniżej tabeli kliknij `Dodaj rekord`{.action}.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
> **Krok 3**
>>
>> W oknie, które się otworzy, wybierz rekord DNS typu `NS`{.action}, a następnie kliknij `Dalej`{.action}
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone.png){.thumbnail}
>>
> **Krok 4**
>>
>> Następnie wprowadź w polu `Subdomena *` odpowiednią poddomenę (np. `sub` dla poddomeny `sub.domain.tld`), a w polu `Adres docelowy *` jeden z dwóch wcześniej odzyskanych serwerów DNS (np. `nsXX.ovh.net`).
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-a-ns-entry-to-the-dns-zone.png){.thumbnail}
>>
>> Na koniec kliknij `Dalej`{.action}.
>>
>> Sprawdź podsumowanie, a następnie kliknij `Zatwierdź`{.action}.
>>
>> **Powtórz cały proces dla drugiego serwera DNS.**
>>
>> W razie potrzeby, skorzystaj również z naszego przewodnika "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".
<!-- CP-STEPS-END:add-ns-records-ovhcloud -->

///

/// details | Nazwa domeny, od której zależy Twoja subdomena, ma aktywną strefę DNS u innego dostawcy

W tym przypadku skontaktuj się ze swoim dostawcą DNS i poinformuj go, że chcesz dodać dwa rekordy DNS typu NS dla swojej poddomeny. 

Oto przykład zapytania, które możesz wysłać do swojego dostawcy DNS:

<pre class="bgwhite"><code>
Dzień dobry,

Chciałbym dodać do aktywnej strefy DNS nazwy domeny <b>domain.tld</b> następujące rekordy DNS typu NS dla mojej poddomeny <b>sub.domain.tld</b>:

 - sub IN NS nsXX.ovh.net.
 - sub IN NS dnsXX.ovh.net.

Aby włączyć specjalną strefę DNS dla mojej poddomeny <b>sub.domain.tld</b>.

Z poważaniem,
</code></pre>

W powyższym przykładzie zastąp wartości **domain.tld**, **sub.domain.tld**, **nsXX.ovh.net** i **dnsXX.ovh.net** własnymi wartościami.

///

> [!warning]
>
> **Następujące uwagi dotyczą nie dwóch właśnie dodanych rekordów DNS typu NS.** 
>
> Jeśli inne rekordy DNS znajdowały się w aktywnej strefie DNS nazwy domeny, od której zależy Twoja subdomena:
>
> 1. Pamiętaj, aby je skopiować do strefy DNS utworzonej dla Twojej poddomeny.
> 2. Po skopiowaniu usuń je ze strefy DNS aktywnej Twojej nazwy domeny.
>
> W przeciwnym razie może dojść do konfliktu w rozwiązywaniu DNS.

Po zmodyfikowaniu strefy DNS nazwy domeny, od której zależy Twoja subdomena, propagacja zmian może zająć nawet **48 godzin**.

## Sprawdź również

[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)

[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 