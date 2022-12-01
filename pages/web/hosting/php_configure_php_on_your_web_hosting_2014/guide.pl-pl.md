---
title: "Zmiana wersji PHP na hostingu"
slug: konfiguracja_php_na_hostingu_www_ovh_2014
excerpt: "Dowiedz się, jak zmienić wersję PHP na hostingu OVHcloud"
section: PHP
order: 01
---

**Ostatnia aktualizacja z dnia 19-09-2022**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Dowiedz się, jak zmienić wersję PHP na hostingu OVHcloud.**

## Wprowadzenie 

Twój [hosting OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external} umożliwia Ci hostowanie wybranej strony internetowej, o ile jest ona kompatybilna z [konfiguracją infrastruktury OVHcloud](https://webhosting-infos.hosting.ovh.net){.external}. W tym celu może być konieczne zmodyfikowanie wersji PHP używanej przez Twój hosting.

**Dowiedz się, jak zmienić wersję PHP na hostingu OVHcloud.**

## Wymagania początkowe

- Posiadanie oferty[hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external}, z wyjątkiem oferty hostingu Cloud Web.
- Dostęp do Twojej usługi hostingu WWW z poziomu [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) lub informacje potrzebne do zalogowania się do [przestrzeni dyskowej FTP](https://docs.ovh.com/pl/hosting/logowanie-przestrzen-dyskowa-ftp-hosting-web/). 

## W praktyce

Istnieje kilka wersji języka programowania PHP. Zmiany w wersjach zawierają różne poprawki oraz dodawanie lub wyłączanie funkcji. OVHcloud udostępnia najnowsze główne wersje PHP, których listę znajdziesz [tutaj](https://www.ovhcloud.com/pl/web-hosting/uc-programming-language/). 

> [!primary]
>
> Ponieważ niektóre funkcje mogą nie być utrzymywane w nowych wersjach, **przed wprowadzeniem jakichkolwiek zmian upewnij się, że nowa, wybrana wersja PHP jest kompatybilna z Twoją stroną WWW.**
>

### Etap 1: upewnij się, że twoja strona jest kompatybilna

Mimo że OVHcloud zarządza instalacją najnowszych wersji PHP na swoich serwerach, to klient jako webmaster musi upewnić się, czy Twoja strona WWW jest **zawsze aktualna**, a tym samym kompatybilna z najnowszymi wersjami PHP. W zależności od rodzaju Twojej strony WWW dostępne są dwie możliwości:

**Przypadek nr 1: używasz strony zbudowanej w oparciu o gotowy system zarządzania treścią (Content Management System lub CMS)**, takiej jak WordPress, Joomla!, PrestaShop lub Drupal: 

- Zapoznaj się z oficjalną dokumentacją stworzoną przez producenta używanego przez Ciebie CMS.
- Zapoznaj się z informacjami na temat wymagań technicznych niezbędnych do działania CMS-a oraz instrukcją aktualizacji.
- W razie potrzeby zaktualizuj CMS i upewnij się, czy nowa wersja jest kompatybilna z hostingiem OVHcloud.

**Przypadek nr 2: korzystasz ze strony zbudowanej w oparciu o spersonalizowane rozwiązanie**: 

- Zbliż się do webmastera, który założył stronę WWW.
- Skorzystaj z [oficjalnej dokumentacji PHP](http://php.net/manual/en/appendices.php){.external} dostarczającej więcej informacji na temat migracji wersji.
- Jeśli to konieczne, zaktualizuj kod Twojej strony WWW, upewniając się, że jest ona kompatybilna z hostingiem OVHcloud.

Możesz sprawdzić wersję PHP aktualnie używaną przez Twój hosting na dwa sposoby:

- **w Panelu klienta OVHcloud** : zaloguj się do [panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, przejdź do sekcji `Web Cloud`{.action}, kliknij `Hosting`{.action}, następnie wybierz odpowiedni hosting. W zakładce `Informacje ogólne`{.action} znajdź wersję pod *Ogólna wersja PHP*. 

![phpversion](images/change-php-version-step1.png){.thumbnail}

> [!primary]
> Jeśli pojawi się niebieski okrągły symbol, odczekaj kilka minut, aż aktualizacja wersji się zakończy.
>

- **przez skrypt**: Utwórz skrypt **.php** zawierający tylko kod `<?php phpinfo(); ?>`. Następnie umieść go w Internecie na [przestrzeń dyskowa FTP](https://docs.ovh.com/pl/hosting/logowanie-przestrzen-dyskowa-ftp-hosting-web/), następnie zadzwoń do niego po zalogowaniu się na pełny adres/URL.

Jeśli nie możesz sprawdzić, czy Twoja strona WWW jest kompatybilna z nową wersją PHP i **nawet jeśli nie polecamy tej metody**, możesz spróbować zmienić aktualną wersję i cofnąć ją. W takim przypadku podejmij ryzyko wystąpienia usterki na Twojej stronie WWW. Ponadto, nawet jeśli po zmianie wyświetla się ona nadal, może to mieć wpływ na jedną z jego specyficznych funkcji i stać się nieskuteczna. 

Kiedy jesteś gotowy do zmiany wersji PHP, przejdź do etapu 2.

### Etap 2: zmiana wersji PHP na hostingu

Istnieją dwa sposoby modyfikacji wersji PHP na Twoim hostingu:

- **poprzez asystenta konfiguracji w Panelu klienta** : po zalogowaniu się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) możesz wybrać nową wersję PHP spośród innych parametrów. Zapoznaj się z instrukcjami zawartymi w przewodniku OVHcloud ["Zmiana konfiguracji hostingu"](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/){.external} i przeprowadź operację w tym celu.

- **modyfikując ręcznie plik na Twojej przestrzeni dyskowej**: to rozwiązanie jest bardziej techniczne i wymaga podłączenia do [przestrzeni FTP](https://docs.ovh.com/pl/hosting/logowanie-przestrzen-dyskowa-ftp-hosting-web/), gdzie należy zmienić plik `.ovhconfig`. Zapoznaj się z instrukcjami zawartymi w przewodniku OVHcloud ["Konfiguracja pliku .ovhconfig na hostingu WWW"](https://docs.ovh.com/pl/hosting/konfiguracja-pliku-ovhconfig/){.external}, aby przeprowadzić operację za pomocą tego pliku.

> [!primary]
>
> Zmiana wersji PHP za pomocą pliku ".htaccess" nie jest już możliwa w najnowszych ofertach [hostingu www OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external}.<br>
> Komenda pozwalająca na zmianę wersji PHP w pliku ".htaccess" nie pozwala na korzystanie z najnowszych wersji PHP na naszych infrastrukturach.<br>
> W tym celu konieczne jest użycie pliku `.ovhconfig`, aby uzyskać pomoc w naszej dokumentacji ["Konfiguracja pliku .ovhconfig na hostingu www"](https://docs.ovh.com/pl/hosting/konfiguracja-pliku-ovhconfig/){.external}.
>

Niektóre wersje PHP działają tylko w niektórych środowiskach. Wersje PHP dostępne na hostingu OVHcloud i [środowiska uruchomieniowe](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/) są kompatybilne:

|Wersje PHP|Kompatybilne środowiska wykonawcze|
|---|---|
|5.4, 5.5, 5.6 i 7.0|Legacy, Stable|
|7.1, 7.2 i 7.3|Stable|
|7.4, 8.0 i 8.1 (beta)|stable64|

## Sprawdź również

[Zmiana konfiguracji hostingu](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/){.external}

[Konfiguracja pliku .ovhconfig na hostingu WWW](https://docs.ovh.com/pl/hosting/konfiguracja-pliku-ovhconfig/){.external}

[Logowanie do przestrzeni dyskowej hostingu www](https://docs.ovh.com/pl/hosting/logowanie-przestrzen-dyskowa-ftp-hosting-web/){.external}

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 