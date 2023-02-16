---
title: "Skonfiguruj adres IPv6 dla swojej strony www"
slug: konfiguracja-ipv6-dla-twojej-strony
excerpt: "Dowiedz się, jak sprawdzić, czy Twoja strona WWW jest kompatybilna z adresem IPv6"
section: 'Konfiguracja hostingu'
order: 06
updated: 2023-02-10
---

**Ostatnia aktualizacja z dnia 10-02-2023**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

## Wprowadzenie

Sieć internetowa działa od początku lat 1990. zgodnie z normą IPv4. Ta norma pozwala na podanie adresu IP X.X.X.X (lub "X" to liczby od 0 do 255.) dla każdej maszyny podłączonej do sieci internetowej (serwery, komputery, smartfony, tablety, itp.). Jednakże norma ta ogranicza liczbę urządzeń podłączonych do sieci internetowej do około 4 miliardów, co w 2022 roku stanowiło mniej niż jedno urządzenie podłączone do sieci dla dwóch osób na Ziemi.

W rezultacie wprowadzono protokół **IPv6**, aby umożliwić podłączenie do sieci internetowej do 340oC urządzeń. Jego wdrożenie trwa od czasu do czasu, ponieważ cała sieć internetowa musi zawierać nową normę. 

Ponieważ adresy IPv4 są obecnie mniej dostępne, trudniej jest dodać nowe maszyny do sieci internetowej z normą IPv4. Połączenia z adresem IPv6 są jednak użyteczne tylko wtedy, gdy Twoja strona WWW jest również dostępna z tym samym protokołem. Im więcej stron internetowych będzie dostępnych w IPv6, tym bardziej różne podmioty działające w sieci internetowej będą przełączać swoje urządzenia/maszyny na nowy protokół.

Więcej informacji znajdziesz w artykule [Wikipedia](https://pl.wikipedia.org/wiki/IPv6){.external} dotyczącym protokołu IPv6.

Nasze pakiety hostingowe są kompatybilne z IPv6 od 2011 roku. Aktywacja tego protokołu była do niedawna opcjonalną opcją podczas konfiguracji. 

**Dowiedz się, jak sprawdzić, czy Twoja strona WWW jest kompatybilna z protokołem IPv6 i jak ją skonfigurować z adresem IPv6.**

## Wymagania początkowe

- Posiadanie [domeny](https://www.ovhcloud.com/pl/domains/){.external} w Panelu klienta OVHcloud.
- Posiadanie [hostingu](https://www.ovhcloud.com/pl/web-hosting/){.external}.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

## W praktyce

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/) i/lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego tutoriala.
> 

Jeśli Twoja strona nie jest skonfigurowana tak, aby działała z adresem IPv6, możesz dodać [adres IPv6 Twojego hostingu OVHcloud](https://docs.ovh.com/pl/hosting/lista-adresow-ip-klastrow-i-hostingow-www/) do strefy DNS aktywnej domeny. Celem jest umożliwienie przeglądarkom internetowym znalezienia adresu IPv6 powiązanego z Twoją stroną WWW za pomocą Twojej domeny.

### Sprawdź kompatybilność IPv6 ze stroną www

Aby sprawdzić, czy Twoja strona WWW używa już adresu IPv6, użyj strony [ipv6-test.com](https://ipv6-test.com/validate.php){.external}. Dowiedz się, czy Twoja strona WWW odpowiada na ten nowy protokół IP. Jeśli tak nie jest, przejdź do opisu w naszym przewodniku.

### Etap 1: pobrać adres IPv6 Twojego hostingu

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. W sekcji `Web Cloud`{.action} kliknij przycisk `Hosting`{.action}, wybierz odpowiedni hosting i przejdź do zakładki `Informacje ogólne`{.action}.

W ramce **IPv6** skopiuj wpis i przejdź do kolejnego etapu.

![IPv6](images/ipv6_01.png){.thumbnail}

### Etap 2: skonfiguruj aktywną strefę DNS Twojej domeny

> [!warning]
>
> Opcje CDN nie są kompatybilne z adresami IPv6. Jeśli skonfigurujesz adres IPv6 dla Twojej strony WWW, internauci nie będą korzystać z CDN.
>
> Dodanie, zmiana lub usunięcie wpisu DNS w strefie DNS domeny powoduje, że czas propagacji wynosi od **4 do 24 godzin**, aby stało się w pełni skuteczne.
>

Aby przeglądarka znalazła adres IPv6 z Twoją domeną, zmodyfikuj aktywną strefę DNS Twojej domeny. Skorzystaj z naszego przewodnika "[Edycja strefy DNS OVHcloud](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/#modyfikacja-strefy-dns-ovhcloud_1)", aby utworzyć wpis DNS typu **AAAA**.

W części `Web Cloud`{.action} kliknij `Domeny`{.action}. Wybierz nazwę domeny i przejdź do zakładki `Strefa DNS`{.action}. Kliknij przycisk `Dodaj rekord`{.action} po prawej stronie tabeli. 

Wpisz wcześniej skopiowany adres IPv6, używając typu rekordu **AAAA**.

![IPv6](images/ipv6_02.png){.thumbnail}

## Przejdź dalej <a name="go-further"></a>

[Edycja strefy DNS OVHcloud](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/#modyfikacja-strefy-dns-ovhcloud_1)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 