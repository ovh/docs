---
title: "Hosting WWW - Zmiana nazwy domeny powiązanej z hostingiem"
excerpt: "Dowiedz się, jak zmienić parametry powiązania domeny/subdomeny zadeklarowanej wcześniej w Twojej usłudze hostingu"
updated: 2024-09-04
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

W przypadku korzystania z hostingu lub aktualizacji strony WWW może być konieczna zmiana ustawień domeny lub subdomeny, która jest już powiązana z Twoim hostingiem.

> [!primary]
>
> Ten przewodnik wyjaśnia tylko, jak zmienić nazwę domeny lub subdomenę, która została już zadeklarowana na hostingu OVHcloud. Jeśli chcesz powiązać nową domenę/subdomenę z Twoim hostingiem, zapoznaj się z naszym przewodnikiem "[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)".
>

**Dowiedz się, jak zmienić parametry powiązania domeny/subdomeny zadeklarowanej wcześniej w Twojej usłudze hostingu.**

## Wymagania początkowe

- Dostęp do [panelu klienta OVHcloud](/links/manager).
- Posiadanie oferty [hostingu OVHcloud](/links/web/hosting).
- Posiadanie jednej lub kilku [domen](/links/web/domains).
- Wystarczające uprawnienia dotyczące wszystkich usług. Więcej informacji znajdziesz w przewodniku "[Zarządzanie kontaktami swoich usług](/pages/account_and_service_management/account_information/managing_contacts)".

## W praktyce

> [!warning]
>
> Zmiana parametrów przypisania domeny lub subdomeny może, w przypadku błędnej operacji, spowodować przerwę w dostępie do Twoich usług (Twojej strony WWW). W razie wątpliwości co do konieczności modyfikacji skontaktuj się z wyspecjalizowanym dostawcą
>

Aby zmienić parametry powiązania domeny lub subdomeny, która została już zadeklarowana w Twoim hostingu, należy wykonać następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli kliknij zakładkę `MultiSite`{.action}.
6. W tabeli, która wyświetla się pod zakładką i po prawej stronie nazwy odpowiedniej domeny/subdomeny, kliknij przycisk `...`{.action}, a następnie `Zmień domenę`{.action}.

![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

Pojawi się następujące okno:

![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled.png){.thumbnail}

W dalszej części tego przewodnika znajdziesz opis każdego z parametrów dostępnych w powyższym oknie. Po zapoznaniu się z poniższymi opisami i wprowadzeniu zmian kliknij przycisk `Dalej`{.action} na dole po prawej stronie okna, a następnie przejdź do [etap 2](#step2).

### Etap 1 - Opis parametrów możliwych do edycji <a name="step1"></a>

> [!primary]
>
> Formularz `Nazwa domeny`{.action} nie może zostać zmodyfikowany, ponieważ jest to zmiana w ustawieniach domeny powiązanej z hostingiem. Jeśli chcesz powiązać nową domenę/subdomenę z Twoim hostingiem, zapoznaj się z naszym przewodnikiem "[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)".
>

#### Zmień "katalog główny"

> [!warning]
> **Przykład specjalny: konfiguracja za pomocą Git**
>
> Aby zmodyfikować `Katalog główny`{.action} zadeklarowany dla Twojej domeny i jeśli istnieje konfiguracja z Git dla tej samej domeny, najpierw usuń tę konfigurację.
>
> Jeśli istnieje konfiguracja z Git, pod formularzem pojawi się komunikat:
>
> ![Modify domain associed with git](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled-git-message.png){.thumbnail}
>
> Aby usunąć konfigurację Git domeny/subdomeny powiązanej z Twoim hostingiem, zapoznaj się z naszym przewodnikiem "[Konfiguracja i korzystanie z Git na hostingu OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)".
>

Formularz `Katalog główny`{.action} wskazuje nazwę katalogu zawierającego elementy, które wyświetlają się wraz z nazwą domeny. Może to być na przykład folder zawierający pliki Twojej strony WWW.

W trakcie korzystania z usług może być konieczna zmiana `Katalog główny`{.action} zadeklarowanego dla Twojej domeny. Może się to zdarzyć, gdy na przykład:

- Stworzyłeś nową stronę WWW w nowym katalogu dostępnym w przestrzeni dyskowej FTP Twojego hostingu.
- Chcesz przekierować domenę do pustego katalogu, a następnie umieścić na niej nową stronę WWW.
- Itp.

W związku z tym w formularzu należy zastąpić wstępnie wypełnioną nazwę folderu nazwą wybranego nowego folderu.

> [!success]
>
> Jeśli wpiszesz nieistniejącą nazwę katalogu z przestrzeni dyskowej FTP Twojego hostingu, zostanie ona automatycznie utworzona przez nasze roboty w Twojej przestrzeni dyskowej FTP.
>

#### Więcej dostępnych opcji

##### Opcja "SSL"

Zaznacz/usuń zaznaczenie tego pola, jeśli chcesz włączyć/wyłączyć bezpłatny certyfikat SSL **Let's Encrypt** dla Twojej domeny/subdomeny. Nie musisz zaznaczać tego pola w przypadku innych ofert SSL oferowanych przez OVHcloud.

Więcej informacji na temat opcji/ofert SSL znajdziesz w naszej dokumentacji "[Zarządzanie certyfikatem SSL na hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting)".

##### Opcja "Włącz CDN"

Aby skorzystać z tej opcji, należy najpierw wykupić ofertę CDN OVHcloud lub wykupić hosting Performance.

Zaznacz/usuń zaznaczenie tego pola, aby włączyć/wyłączyć opcję GeoCache dla Twojej domeny lub subdomeny.

Więcej informacji na temat opcji/ofert CDN znajdziesz w naszej dokumentacji "[Przewodnik dotyczący usługi CDN na hostingu www](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)".

##### Opcja "Geolokalizacja IP"

Ta opcja jest używana głównie w przypadku stron WWW, których docelowi odbiorcy znajdują się za granicą. Pomaga to ulepszyć pozycjonowanie SEO strony internetowej w wybranym kraju.

Więcej informacji na temat tej opcji znajdziesz w naszej dokumentacji "[Geolokalizacja strony WWW w danym kraju](/pages/web_cloud/web_hosting/multisites_geolocation)".

##### Opcja "Włącz firewall"

Ta opcja pozwala na filtrowanie zapytań przychodzących w celu ochrony hostingu przed najczęstszymi atakami.

Więcej informacji na temat tej opcji znajdziesz w naszej dokumentacji "[Aktywacja zapory systemowej](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)".

##### Opcja "Rozdzielone logi"

Zaznacz/usuń zaznaczenie tej opcji tylko wtedy, gdy chcesz oddzielić logi Twojej domeny od innych domen zadeklarowanych równolegle na Twoim hostingu.

Dowiedz się więcej o tej opcji na naszej [stronie poświęconej szczegółowym statystykom](/links/web/hosting-traffic-analysis).

Po wprowadzeniu zmian kliknij przycisk `Dalej`{.action} na dole po prawej stronie okna, aby przejść do [etap 2](#step2).

### Etap 2 - Podsumowanie zmian <a name="step2"></a>

Po kliknięciu przycisku `Dalej`{.action} znajdziesz podsumowanie ustawień, które zamierzasz zastosować do Twojej domeny:

![Modify domain resume](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Jeśli wszystkie parametry są skonfigurowane zgodnie z Twoimi potrzebami, kliknij przycisk `Potwierdź`{.action}.

W zależności od wybranych opcji wprowadzenie zmian może potrwać od kilku minut do kilku godzin.

Jeśli w przypadku opcji **SSL**, **CDN**, **Geolokalizacja IP** i **Rozdzielone logi** nie zostaną wprowadzone zmiany po 24 godzinach, zapoznaj się z przewodnikami (i stronami) dla wszystkich opcji opisanych w [etap 1](#step1), aby upewnić się, że wszystkie wymagane warunki zostały spełnione.

## Sprawdź również

[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite).

[Zarządzanie certyfikatem SSL na hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Przewodnik dotyczący usługi CDN na hostingu www](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).

[Geolokalizacja strony WWW w danym kraju](/pages/web_cloud/web_hosting/multisites_geolocation).

[Aktywacja zapory systemowej](/pages/web_cloud/web_hosting/multisites_activating_application_firewall).
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).