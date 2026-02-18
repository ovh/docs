---
title: "Tworzenie strefy DNS OVHcloud dla poddomeny"
excerpt: "Dowiedz się, jak utworzyć strefę DNS w OVHcloud dla poddomeny nazwy domeny za pomocą Panelu klienta"
updated: 2025-04-28
---

## Wprowadzenie

Chcesz utworzyć strefę DNS dla poddomeny?

Strefa **D**omain **N**ame **S**ystem (**DNS**) nazwy domeny to jej plik konfiguracyjny. Składa się z informacji technicznych, zwanych *rekordami DNS*. Strefa DNS działa jak centrum kierowania ruchem.

Aby uzyskać więcej informacji, zapoznaj się z naszymi przewodnikami poniżej :

- [Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

Zazwyczaj rekordy DNS poddomeny konfiguruje się bezpośrednio ze strefy DNS aktywnej nazwy domeny, do której należy.
Jednak również możliwe jest utworzenie specjalnej strefy DNS dla poddomeny.

Z różnych powodów możesz chcieć utworzyć strefę DNS dla poddomeny w OVHcloud.
Wówczas będzie ona mieć własną strefę do konfigurowania rekordów DNS.

> [!success]
>
> Na przypomnienie :
>
> - Nazwa domeny ma zazwyczaj postać: **domain.tld**. Na przykład: ovhcloud.com.
> - Poddomena ma zazwyczaj postać: **sub.domain.tld**. Na przykład: help.ovhcloud.com.
>
> Domyślnie poddomena zależy od nazwy domeny, aby działać.
> W praktyce nie będziesz mógł użyć poddomeny **sub.domain.tld**, jeśli nie masz dostępu do zarządzania nazwą domeny **domain.tld**.
>
> Jeśli chcesz utworzyć strefę DNS dla nazwy domeny, skorzystaj bezpośrednio z [tego przewodnika](/pages/web_cloud/domains/dns_zone_create).

**Dowiedz się, jak utworzyć strefę DNS w OVHcloud dla poddomeny nazwy domeny za pomocą Panelu klienta OVHcloud.**

## Wymagania początkowe

- Posiadanie nazwy domeny, od której będzie zależeć wybrana poddomena.
- Poddomena nie może już mieć aktywnej lub nieaktywnej strefy DNS w OVHcloud lub być obecnie przedmiotem operacji lub zamówienia w OVHcloud.
- Zalogowanie się do swojego [Panelu klienta OVHcloud](/links/manager).

## W praktyce

### 1 - Utwórz strefę DNS za pomocą Panelu klienta OVHcloud

> **Krok 2**
>>
>> Kliknij w menu `Strefy DNS`{.action}, a następnie w przycisk `Zamów`{.action}.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 3**
>>
>> Na stronie, która się pojawi, wprowadź poddomenę (np. *sub.domain.tld*), dla której chcesz utworzyć strefę DNS OVHcloud. Poczekaj kilka chwil, dopóki narzędzie nie przeprowadzi weryfikacji poddomeny.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Jeśli pojawi się komunikat informujący, że strefa DNS nie może zostać utworzona, upewnij się, że poddomena spełnia wymagania wstępne lub skontaktuj się z osobą, która ją zarządza. Gdy wszystko będzie poprawne, spróbuj ponownie.
>>
> **Krok 4**
>>
>> Po zakończeniu weryfikacji wybierz, czy chcesz włączyć minimalne wpisy dla strefy DNS, którą chcesz utworzyć. Ta decyzja nie jest ostateczna, zawsze możesz [edytować rekordy strefy DNS](/pages/web_cloud/domains/dns_zone_edit) później.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}
>>
>> |Czy włączyć minimalne wpisy?|Szczegóły|
>> |---|---|
>> |Tak|Wybierz **Tak**, jeśli chcesz później samodzielnie skonfigurować strefę DNS.<br>![minimal-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
>> |Nie|Wybierz **Nie**, jeśli planujesz używać usług OVHcloud, takich jak [hosting www](/links/web/hosting), ponieważ strefa DNS zostanie automatycznie wstępnie skonfigurowana dla tych usług.<br>![no-minimal-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Po dokonaniu wyboru, postępuj zgodnie z etapami wyświetlanymi w Panelu klienta OVHcloud, aż do utworzenia strefy DNS.

### 2 - Edytowanie strefy DNS (opcjonalnie)

Strefa DNS dla Twojej poddomeny została właśnie utworzona, możesz ją już edytować. Ta czynność jest opcjonalna, ale może się okazać konieczna, jeśli chcesz zapewnić ciągłość dostępności usług związanych z tą poddomeną (np. witryny internetowej i/lub e-maili).

Aby edytować tę strefę DNS, zapoznaj się z naszym przewodnikiem „[Edytowanie strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)”.

> [!primary]
>
> Jeśli dopiero co utworzyłeś strefę DNS i poddomena nie pojawia się jeszcze na liście swoich usług (w sekcji `Web Cloud`{.action} Panelu klienta OVHcloud, a następnie w sekcji `Strefy DNS`{.action}), poczekaj 15-20 minut, a następnie odśwież stronę.

### 3 - Zadeklarowanie serwerów DNS w aktywnej strefie DNS nazwy domeny, od której zależy wybrana poddomena

Aktywacja strefy DNS dla poddomeny różni się od aktywacji nazwy domeny, ponieważ poddomena musi zależeć od nazwy domeny, aby działać.

Najpierw musisz uzyskać nazwy **serwerów DNS** OVHcloud skojarzonych ze strefą DNS utworzoną dla Twojej poddomeny.

Aby je odnaleźć, kliknij w odpowiednie karty poniżej, aby kolejno wyświetlić każdą z **3** etapów.

**Krok 2**
>>
>> Kliknij w menu `Strefy DNS`{.action}, a następnie wybierz odpowiednią poddomenę.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli na stronie, która się pojawi, zwróć uwagę na dwie kolumny **Typ** i **Celem**.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> Znajdź dwie linie typu **NS** i zanotuj dwie wartości w kolumnie **Celem**.
>> Nazwy serwerów DNS powinny mieć jedną z poniższych trzech form:
>>
>> - `nsXX.ovh.net` i `dnsXX.ovh.net` lub `nsXXX.ovh.net` i `dnsXXX.ovh.net` (gdzie każdy `X` reprezentuje cyfrę od **0** do **9**).
>> - `nsXX.ovh.ca` i `dnsXX.ovh.ca` lub `nsXXX.ovh.ca` i `dnsXXX.ovh.ca` (gdzie każdy `X` reprezentuje cyfrę od **0** do **9**).
>> - `ns200.anycast.me` i `dns200.anycast.me` (jeśli podpisałeś się na opcję [DNS anycast](/links/web/domains-Opcje)).

Po odzyskaniu dwóch nazw serwerów DNS, mogą zajść dwie sytuacje:

**Kliknij jedną z dwóch sytuacji, aby wyświetlić zawartość.**

/// details | Nazwa domeny, od której zależy Twoja poddomena, ma aktywną strefę DNS w OVHcloud

Kliknij w odpowiednie karty poniżej, aby kolejno wyświetlić każdą z **5** etapów.

> **Krok 3**
>>
>> Na prawym lub poniżej tabeli kliknij `Dodaj wpis`{.action}.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
> **Krok 4**
>>
>> W oknie, które się otworzy, wybierz rekord DNS typu `NS`{.action}, a następnie kliknij `Dalej`{.action}
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone.png){.thumbnail}
>>
> **Krok 5**
>>
>> Następnie wprowadź w polu `Poddomena *` odpowiednią poddomenę (np. `sub` dla poddomeny `sub.domain.tld`), a w polu `Celem *` jeden z dwóch wcześniej odzyskanych serwerów DNS (np. `nsXX.ovh.net`).
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-a-ns-entry-to-the-dns-zone.png){.thumbnail}
>>
>> Na koniec kliknij `Dalej`{.action}.
>>
>> Sprawdź podsumowanie, a następnie kliknij `Potwierdź`{.action}.
>>
>> **Powtórz cały proces dla drugiego serwera DNS.**
>>
>> W razie potrzeby, skorzystaj również z naszego przewodnika „[Edytowanie strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)”.

///

/// details | Nazwa domeny, od której zależy Twoja poddomena, ma aktywną strefę DNS u innego dostawcy

W tym przypadku skontaktuj się ze swoim dostawcą DNS i poinformuj go, że chcesz dodać dwa rekordy DNS typu NS dla swojej poddomeny. 

Oto przykład zapytania, które możesz wysłać do swojego dostawcy DNS:

<pre class="bgwhite"><code>
Dzień dobry,

Chciałbym dodać do aktywnej strefy DNS nazwy domeny <b>domain.tld</b> następujące rekordy DNS typu NS dla mojej poddomeny <b>sub.domain.tld</b> :

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
> Jeśli inne rekordy DNS znajdowały się w aktywnej strefie DNS nazwy domeny, od której zależy Twoja poddomena :
>
> 1. Pamiętaj, aby je skopiować do strefy DNS utworzonej dla Twojej poddomeny.
> 2. Po skopiowaniu usuń je ze strefy DNS aktywnej Twojej nazwy domeny.
>
> W przeciwnym razie może dojść do konfliktu w rozwiązywaniu DNS.

Po zmodyfikowaniu strefy DNS nazwy domeny, od której zależy Twoja poddomena, propagacja zmian może zająć nawet **48 godzin**.

## Sprawdź również

[Tutaj znajdziesz wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)

[Tutaj znajdziesz wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Tutaj znajdziesz wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

[Edytowanie strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)