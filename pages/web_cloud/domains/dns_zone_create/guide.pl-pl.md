---
title: 'Tworzenie strefy DNS OVHcloud dla domeny'
excerpt: 'Dowiedz się, jak utworzyć strefę DNS w OVHcloud dla Twojej domeny w Panelu klienta'
updated: 2026-03-10
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

Strefa **D**omain **N**ame **S**ystem (**DNS**) nazwy domeny stanowi jej plik konfiguracyjny. Zawiera on informacje techniczne nazywane *rekordy DNS*. Strefa DNS jest jak ośrodek sterowania.

Aby uzyskać więcej informacji, zapoznaj się z naszymi przewodnikami:

- [Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

Może zaistnieć konieczność utworzenia strefy DNS dla Twojej domeny w OVHcloud.

**Dowiedz się, jak utworzyć strefę DNS w OVHcloud dla Twojej domeny w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Posiadanie domeny
- Nazwa domeny nie może mieć strefy DNS (aktywnej lub nieaktywnej) w OVHcloud ani podlegać operacji lub zamówieniu w trakcie realizacji.

<!-- CP-NAV-START:web-dns-zone -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Strefy DNS](/links/control-panel/web-dns-zone)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Strefy DNS`{.action} > Wybierz nazwę domeny

---
<!-- CP-NAV-END:web-dns-zone -->

## W praktyce

> [!warning]
>
> Dla tej samej domeny możesz utworzyć kilka stref DNS (u różnych dostawców/dostawców/hostingu DNS). Można utworzyć tylko jedną strefę DNS dla Twojej domeny. Ograniczenie to ma na celu zapobieganie *konfliktom DNS*.
>
> Aktywacja/dezaktywacja strefy DNS odbywa się po zgłoszeniu **serwerów DNS** w Twojej domenie. Możesz zmienić tę deklarację i zmienić **serwery DNS** domeny na: 
>
> - u *registrar*, u którego bezpośrednio zarejestrowałeś domenę;
> - od dostawcy zarządzającego domeną w przypadku przejścia przez wyspecjalizowanego dostawcę do zarządzania domeną.
>
> Zmiana **serwerów DNS** domeny powoduje wyłączenie konfiguracji starej strefy DNS używanej do konfiguracji nowej strefy DNS (obecnej w nowych zadeklarowanych **serwerów DNS**).
>
> Przed zmianą** serwerów DNS* zadeklarowanych u Twojej domeny sprawdź, czy konfiguracja nowej strefy DNS odpowiada Twoim oczekiwaniom.
>

### 1 - Utworzyć strefę DNS w Panelu klienta OVHcloud

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
>> Na stronie, która się pojawi, wprowadź nazwę domeny (np. *domain.tld*), dla której chcesz utworzyć strefę DNS OVHcloud. Poczekaj kilka chwil, dopóki narzędzie nie przeprowadzi weryfikacji domeny.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Jeśli pojawi się komunikat informujący, że strefa DNS nie może zostać utworzona, upewnij się, że domena spełnia wymagania wstępne lub skontaktuj się z osobą, która ją zarządza. Gdy wszystko będzie poprawne, spróbuj ponownie.
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

### 2 - Edycja strefy DNS (opcjonalnie)

Po utworzeniu strefy DNS Twojej domeny możesz ją edytować. Operacja ta jest opcjonalna, ale może okazać się konieczna, jeśli chcesz zapewnić nieprzerwaną dostępność usług powiązanych z tą domeną (takich jak strona WWW i/lub konta e-mail).

Aby edytować strefę DNS, zapoznaj się z naszym przewodnikiem "[Edytuj strefę DNS w OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!primary]
>
> Jeśli właśnie utworzyłeś strefę DNS i nazwa domeny nie wyświetla się jeszcze na liście Twoich usług, odczekaj 15-20 minut, a następnie przeładuj stronę.
>

### 3 - Zmień serwery DNS domeny

Kiedy strefa DNS OVHcloud jest gotowa do użytku, powiąż ją z Twoją domeną, aby zastosować konfigurację, którą ona zawiera. 

Należy zatem pobrać z wyprzedzeniem **serwery DNS** OVHcloud, na których strefa DNS OVHcloud została utworzona dla Twojej domeny.

Aby je odnaleźć, kliknij poniższe zakładki, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią domenę.
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

Po odzyskaniu dwóch nazw serwerów DNS, mogą zajść dwie sytuacje.

> [!primary]
>
> Przypominamy, że przed zmianą **serwerów DNS** zadeklarowanych u Twojej domeny sprawdź, czy konfiguracja nowej strefy DNS odpowiada Twoim oczekiwaniom.

**Kliknij jedną z dwóch sytuacji, aby wyświetlić zawartość.**

/// details | Domena ma aktywną strefę DNS w OVHcloud

Zapoznaj się z [tym przewodnikiem](/pages/web_cloud/domains/dns_server_edit), aby zweryfikować lub zmodyfikować serwery DNS zadeklarowane dla Twojej domeny.

///

/// details | Domena ma aktywną strefę DNS u innego dostawcy

W takim przypadku skontaktuj się ze swoim dostawcą DNS, informując go, że chcesz zastąpić rekordy DNS typu NS dla Twojej domeny.

Oto przykład żądania do przesłania do dostawcy DNS:

<pre class="bgwhite"><code>
Dzień dobry,

Dla mojej domeny <b>domain.tld</b> chciałbym zastąpić obecne serwery DNS następującymi serwerami DNS:

 - nsXX.ovh.net.
 - dnsXX.ovh.net.

Z poważaniem,
</code></pre>

W powyższym przykładzie zastąp wartości **domain.tld**, **nsXX.ovh.net** i **dnsXX.ovh.net** własnymi wartościami.

///

Po zmianie serwerów DNS domeny propagacja zmian może potrwać do **48 godzin**.

> [!success]
>
> Jeśli chcesz spersonalizować nazwy serwerów DNS powiązanych z aktywną strefą DNS Twojej domeny, zapoznaj się z naszym przewodnikiem "[Personalizacja serwerów DNS domeny (Glue Records)](/pages/web_cloud/domains/glue_registry)".
>

## Sprawdź również

[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)

[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 