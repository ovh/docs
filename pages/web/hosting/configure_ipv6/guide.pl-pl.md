---
title: 'Skonfiguruj IPv6 dla swojej strony www'
slug: konfiguracja-ipv6-dla-twojej-strony
excerpt: Dowiedz się, jak stworzyć stronę WWW kompatybilną z IPv6
section: 'Konfiguracja hostingu'
order: 06
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 27-11-2020**

## Informacje ogólne

Sieć internetowa działa od początku lat 1990\. zgodnie z normą IPv4. Standard ten pozwala na podanie adresu IP dla każdej maszyny podłączonej do sieci internetowej: serwery, ale także komputery, smartfony, tablety i inne urządzenia podłączone do Internetu. Norma ta zawiera znaczne ograniczenie: pozwala nam wyodrębnić ponad 4 miliardów różnych urządzeń. Albo urządzenie dla dwóch osób na Ziemi.

Szybko zaproponowano nowy protokół: **IPv6**. Pozwala on na zidentyfikowanie ponad 340 sextylionów różnych adresów. Jego wdrożenie trwa długo ze względu na istotne zmiany w całej sieci internetowej. 

Ponieważ liczba adresów IPv4 jest niska, coraz trudniej jest dodać nowe zasoby do sieci internetowej. Połączenia IPv6 są użyteczne tylko wtedy, gdy zawartość jest również dostępna na tym protokole. Im więcej stron internetowych będzie w IPv6, tym ważniejsze będzie dla każdego uczestnika sieci migracja na ten protokół.

Więcej informacji znajdziesz w artykule [Wikipedii](https://pl.wikipedia.org/wiki/IPv6){.external} na temat protokołu IPv6.

## Wprowadzenie

Nasze pakiety hostingowe są kompatybilne z IPv6 od 2011 roku. Aktywacja tego protokołu była jednak do niedawna opcjonalną opcją podczas konfiguracji. 

**Niniejszy przewodnik wyjaśnia, jak sprawdzić, czy Twoja strona WWW jest kompatybilna z IPv6 i jak ją skonfigurować.**

## Wymagania początkowe

- Posiadanie [domeny](https://www.ovhcloud.com/pl/domains/){.external} i możliwość zarządzania nią w Panelu klienta
- Posiadanie [hostingu WWW](https://www.ovhcloud.com/pl/web-hosting/){.external}.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

## W praktyce

> [!warning]
>OVHcloud oferuje usługi, ale to użytkownik ponosi odpowiedzialność za zarządzanie nimi oraz ich konfigurację. Tym samym odpowiada za zapewnienie ich prawidłowego działania.
>
>Niniejszy przewodnik zawiera informacje pomocne przy wykonywaniu typowych zadań. Jednak w przypadku wystąpienia problemów zalecamy kontakt z dostawcą danych usług lub wydawcą oprogramowania, ponieważ nie będziemy w stanie udzielić pomocy. Więcej informacji zawiera sekcja „Sprawdź również” tego przewodnika.
>

Jeśli Twoja strona nie jest skonfigurowana dla IPv6, możesz to zrobić, dodając informacje w strefie DNS Twojej domeny. Umożliwia przeglądarkom znalezienie adresu IPv6 podczas wyświetlania strony WWW za pomocą nazwy domeny.

### Sprawdź kompatybilność IPv6 na Twojej stronie

Aby sprawdzić, czy Twoja strona WWW jest kompatybilna z IPv6, możesz użyć strony [ipv6-test.com](https://ipv6-test.com/validate.php){.external}. Raport informacyjny poinformuje Cię, czy Twoja strona odpowiada na ten nowy protokół IP. Jeśli tak nie jest, postępuj zgodnie z instrukcjami zawartymi w tym przewodniku.

### Etap 1: Pobierz adres IPv6 Twojego hostingu

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, kliknij `Hosting`{.action}, następnie wybierz hosting.

W sekcji `Informacje ogólne`, w polu **IPv6**, skopiuj wpis i przejdź do kolejnego etapu.

![IPv6](images/ipv6_01.png){.thumbnail}

### Etap 2: Konfiguracja strefy DNS

> [!warning]
> Nasza opcja CDN nie jest aktualnie kompatybilna z IPv6. Jeśli skonfigurujesz adres IPv6 na Twojej stronie WWW, internauci nie skorzystają z usługi CDN.

Aby Twoja przeglądarka znalazła adres IPv6 z Twoją domeną, zmodyfikuj przypisaną do niego strefę DNS. Możesz skorzystać z naszego przewodnika [Edycja strefy DNS OVHcloud](../../domains/hosting_www_jak_edytowac_strefe_dns/), aby utworzyć wpis typu **AAAA**.

W `Domeny`{.action} przejdź do zakładki `Strefa DNS`{.action} Twojej domeny. Kliknij przycisk `Dodaj wpis`{.action} po prawej stronie tabeli. Wstaw adres IPv6, używając typu rekordu **AAAA** i IPv6 pobranych wcześniej w Panelu klienta.

![IPv6](images/ipv6_02.png){.thumbnail}

## Sprawdź również

[Modyfikacja strefy DNS OVHcloud](../../domains/hosting_www_jak_edytowac_strefe_dns/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
