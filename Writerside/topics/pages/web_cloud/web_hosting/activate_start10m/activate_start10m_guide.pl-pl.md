---
title: "Włączanie darmowy hosting 100M"
excerpt: "Dowiedz się, jak włączyć darmowy hosting 100M"
updated: 2023-12-18
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie 

Dzięki [Darmowy hosting 100M](domains-free-hosting.){.external}, OVHcloud oferuje hosting WWW o rozmiarze 100 MB oraz konto e-mail o pojemności 5 GB. Z tego przewodnika dowiesz się, jak włączyć Darmowy hosting 100M w swojej [domenie](domains.){.external}.

> [!warning]
>
> Ten darmowy hosting o rozmiarze 100 MB jest odpowiedni do prostej strony WWW w której **można wyświetlić serwer bez bazy danych**.
> Jest to również właściwe, jeśli nie potrzebujesz więcej niż jednego konta e-mail typu "MX plan". 
> Jeśli chcesz uruchomić stronę WWW zawierającą kilka stron i wymagającą bazy danych, takich jak CMS (WordPress, Joomla!, PrestaShop, Drupal, etc.), zachęcamy do zamówienia jednej z [naszych ofert hostingu www](hosting.) na naszej stronie internetowej lub w Twoim [Panelu klienta OVHcloud](manager.){.external}.
>

**Dowiedz się, jak włączyć darmowy hosting 100M**

## Wymagania początkowe

- Posiadanie [domeny](domains.){.external} w [Panelu klienta OVHcloud](manager.){.external}, odłączone od hostingu www i bez żadnego [MX Plan](email_generalities1.).
- Dostęp do [Panelu klienta OVHcloud](manager.){.external}.

## W praktyce

Zaloguj się do [Panelu klienta OVHcloud](manager.){.external}, kliknij `Domeny`{.action}  na pasku usług po lewej stronie, następnie wybierz odpowiednią domenę.

W ramce **Informacje ogólne** znajduje się pozycja *Darmowy hosting WWW i e-mail*. Kliknij przycisk `…`{.action} po prawej stronie, a następnie przycisk `Włącz`{.action}.

![enable 100m](https://raw.githubusercontent.com/ovh/docs/develop/templates/control-panel/product-selection/web-cloud/domain-dns/general-information/enable-100m.png){.thumbnail}

Pojawi się okno aktywacyjne. W **etapie 1** wyświetla się przypomnienie oferty i cennika. Kliknij przycisk `Dalej`{.action}. W **etapie 2** wybierz zmiany, jakie mają zostać wprowadzone w strefie DNS:

![activate100m](https://raw.githubusercontent.com/ovh/docs/develop/templates/control-panel/product-selection/web-cloud/order/order-100m-step-2.png){.thumbnail}

> [!warning]
>
> Jeśli zaznaczysz jedno z dwóch pól `Rekord DNS A` i `Rekord DNS MX` lub oba te pola, zostanie on usunięty z konfiguracji pierwotnie wprowadzonej w strefie DNS Twojej domeny.
>
> Jeśli Twoja strefa DNS nie jest zarządzana w [Panelu klienta OVHcloud](manager.){.external}, wprowadź ręcznie zmiany w zewnętrznej strefie DNS.
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym przewodnikiem dotyczącym [edycji strefy DNS OVHcloud](dns_zone_edit1.).
>

| Wybór                                       	| Opis                                                                                                               								|
|--------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Rekord DNS A                         	| Domena będzie wskazywać na adres IP Darmowy hosting 100M.                                               								|
| Rekord DNS MX 	| Do nazwy domeny zostaną zastosowane serwery e-mail (`mx1.mail.ovh.net`, `mx2.mail.ovh.net`, `mx3.mail.ovh.net`, etc.). 	|

> [!primary]
>
> Jeśli Twój projekt wymaga szybszego przejścia na hosting z bazą danych, z większej przestrzeni dyskowej lub z większej liczby adresów e-mail, będziesz mógł przejść bezpośrednio i tylko z Darmowy hosting 100M na ofertę hostingu **Perso** z [Panelu klienta OVHcloud](manager.){.external}.
>
> Przejście na ofertę **Pro** lub **Performance** wymaga wcześniejszego przejścia z oferty Darmowy hosting 100M na ofertę **Perso**.
>
> Możesz również usunąć bezpłatną ofertę, dbając o wcześniejsze pobranie danych o hostingu oraz zawartości konta e-mail.
>
> Aby uzyskać więcej informacji, sprawdź [naszą ofertę hostingu](hosting.).
>

**Etap 3** przypomina o cenniku oferty. 

Podczas **etapu 4** zapoznaj się z regulaminami i zatwierdź zamówienie.

Po zatwierdzeniu zamówienia otrzymasz wiadomość e-mail z danymi do [logowania FTP](ftp_connection1.){.external} do darmowy hosting 100M.

Zapoznaj się z przewodnikiem [utworzenie konta E-mail MX Plan](email_creation1.){.external}, aby korzystać z adresu e-mail zawartego w pakiecie hostingowym Darmowy hosting 100M.

## Sprawdź również

[Logowanie do przestrzeni dyskowej hostingu www](ftp_connection1.){.external}

[Tworzenie konta e-mail w ramach usługi MX Plan](email_creation1.){.external}

[Zarządzanie certyfikatem SSL na hostingu](ssl_on_webhosting1.)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](partner.).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z [naszymi ofertami pomocy](support.).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>