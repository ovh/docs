---
title: 'Tutorial - Korzystanie z opcji Zonemaster'
slug: ovhcloud-domain-zonemaster-tutorial
section: DNS i strefa DNS
order: 08
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 12-09-2022**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [specjalisty](https://partner.ovhcloud.com/pl/). Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
> 


## Wprowadzenie

[Zonemaster](https://zonemaster.fr/) jest narzędziem powstałym w wyniku współpracy między [AFNIC](https://www.afnic.fr/) (francuski rejestr) i [The Swedish Internet Foundation](https://internetstiftelsen.se/en/) (szwedzki rejestr). Umożliwia analizowanie konfiguracji DNS (Domain Name System) domeny i identyfikowanie elementów, które mogą zostać ulepszone lub usunięte.

> [!primary]
>
> Aby lepiej zrozumieć pojęcie DNS, zapoznaj się z wprowadzeniem naszego przewodnika dotyczącego [konfiguracji strefy DNS](https://docs.ovh.com/pl/domains/hosting_www_informacje_na_temat_serwerow_dns/).

## Wymagania początkowe

- Posiadanie [domeny](https://www.ovhcloud.com/pl/domains/)

## W praktyce

### Pole wprowadzania

Narzędzie Zonemaster umożliwia sprawdzenie konfiguracji DNS w Twojej domenie lub przetestowanie strefy DNS na przyszłych serwerach DNS.

Aby sprawdzić aktualną konfigurację domeny, wpisz nazwę domeny, następnie kliknij `Check`{.action}

![domeny](images/zonemaster01.png){.thumbnail}

Aby sprawdzić konfigurację DNS, która została przygotowana, ale nie została jeszcze zastosowana dla danej domeny, zaznacz kratkę `Options`{.action}, następnie wprowadź następujące informacje:

- **Serwery DNS**: Wpisz informacje dotyczące serwera DNS przypisanego do domeny, następnie kliknij na `+`{.action}, aby zatwierdzić wprowadzone dane. Wpisanie adresu IP jest opcjonalne.
- **Delegacja Podpisującego (rejestracja DS)**: W ramach ochrony DNSSEC, wprowadź elementy rekordu DS, następnie kliknij `+`{.action}, aby dodać wartość. Jeśli serwery DNS nie używają protokołu DNSSEC, możesz zostawić te pola wolne.

Możesz również wymusić weryfikację przy użyciu wybranego protokołu IP poprzez `Disable IPv4` i `Disable IPv6`

> **Przykład**:<br><br> Posiadasz domenę "mydomain.ovh", która aktualnie używa serwerów DNS "dns19.ovh.net" i "ns19.ovh.net". Skonfigurowałeś strefę DNS dla tej domeny na serwerach DNS "mydns.test.ovh" i "mydns2.test.ovh".<br>
>
> Przed zmianą serwerów DNS, możesz przeprowadzić zaawansowane wyszukiwanie w polu `Options`{.action}, wprowadzając "mydns.test.ovh" i "mydns2.test.ovh" w rubrykach `Nameservers`.<br>
> Zonemaster przeprowadzi test tak, jakby korzystał z serwerów "mydns.test.ovh" i "mydns2.test.ovh" na "mydomain.ovh".<br>
> ![domeny](images/zonemaster02.png){.thumbnail}

> [!primary]
>
> Po wpisaniu nazwy domeny i kliknięciu na przycisk `Fetch data from parent zone`{.action}, pojawią się serwery DNS przypisane do domeny wraz z informacjami o rekordzie DS (DNSSEC), jeśli domena została skonfigurowana.
> ![domeny](images/zonemaster03.png){.thumbnail}

### Rezultat

Po zatwierdzeniu formularza wyniki są klasyfikowane według kodu koloru:

- **Zielony**: Część ta jest funkcjonalna i spełnia standardowe kryteria w swojej klasie.
- **Pomarańczowy**: Ta część jest funkcjonalna, ale zasługuje na szczególną uwagę. Narzędzie wykryło, że ten parametr ma cechy, które nie wchodzą w zakres standardu jego kategorii bez zablokowania jego działania.
- **Czerwony**: W tej części znajdują się błędy lub brakujące elementy, które mogą powodować usterkę. 
- **Niebieski**: jest to zwykła informacja, bez wpływu na działanie domeny.

![domeny](images/zonemaster04.png){.thumbnail}

### Przydatne informacje

Jeśli masz dodatkowe pytania dotyczące Zonemaster, sprawdź sekcję [FAQ](https://zonemaster.net/faq) na <https://zonemaster.fr/>.

## Sprawdź również <a name="go-further"></a>

[Informacje na temat serwerów DNS](https://docs.ovh.com/pl/domains/hosting_www_informacje_na_temat_serwerow_dns/){.external}.

[Zmiana strefy DNS OVHcloud](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external} .

[Zabezpieczenie domeny przed Cache Poisoning za pomocą DNSSEC](https://docs.ovh.com/pl/domains/jak_skonfigurowac_strefe_dnssec_dla_domeny/){.external}.

Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>
