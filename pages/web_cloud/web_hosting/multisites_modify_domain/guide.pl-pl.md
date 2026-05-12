---
title: "Hosting WWW - Zmiana nazwy domeny powiązanej z hostingiem"
excerpt: "Dowiedz się, jak zmienić parametry powiązania domeny/subdomeny zadeklarowanej wcześniej w Twojej usłudze hostingu"
updated: 2026-05-04
---

## Wprowadzenie

W przypadku korzystania z hostingu lub aktualizacji strony WWW może być konieczna zmiana ustawień domeny lub subdomeny, która jest już powiązana z Twoim hostingiem.

> [!primary]
>
> Ten przewodnik wyjaśnia tylko, jak zmienić nazwę domeny lub subdomenę, która została już zadeklarowana na hostingu OVHcloud.
>
> - Aby przypisać nową domenę lub poddomenę do strony internetowej znajdującej się na Twoim hostingu, zapoznaj się z naszym poradnikiem "[Jak przypisać domenę do istniejącej strony internetowej?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
> - Aby dodać nową stronę internetową na Twoim hostingu, zapoznaj się z naszym poradnikiem "[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

**Dowiedz się, jak zmienić parametry powiązania domeny/subdomeny zadeklarowanej wcześniej w Twojej usłudze hostingu.**

## Wymagania początkowe

- Posiadanie oferty [hostingu OVHcloud](/links/web/hosting).
- Posiadanie jednej lub kilku [domen](/links/web/domains).
- Wystarczające uprawnienia dotyczące wszystkich usług. Więcej informacji znajdziesz w przewodniku "[Zarządzanie kontaktami swoich usług](/pages/account_and_service_management/account_information/managing_contacts)".

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

> [!warning]
>
> Zmiana parametrów przypisania domeny lub subdomeny może, w przypadku błędnej operacji, spowodować przerwę w dostępie do Twoich usług (Twojej strony WWW). W razie wątpliwości co do konieczności modyfikacji skontaktuj się z wyspecjalizowanym dostawcą

Aby zmienić ustawienia przypisania już zadeklarowanej domeny lub poddomeny na Twoim ofercie hostingu, kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![Moje strony](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli, która się pojawi, kliknij przycisk `>`{.action} po lewej stronie nazwy strony internetowej, aby wyświetlić przypisane domeny lub poddomeny.
>>
>> ![Strona internetowa](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Następnie kliknij przycisk `⁝`{.action} po prawej stronie nazwy domeny lub poddomeny, a następnie kliknij `Zmień domenę`{.action}.
>>
>> ![Opcje przypisanych domen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Krok 4**
>>
>> Zostanie wyświetlone następujące okno:
>>
>> ![Zmień domenę](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled.png){.thumbnail}
>>
>> W dalszej części tego przewodnika znajdziesz opis każdego z dostępnych parametrów w powyższym oknie. Po przeczytaniu różnych opisów w etap "[Opis zmienialnych parametrów](#step1)", oraz po wprowadzeniu zmian, kliknij przycisk `Dalej`{.action} w prawym dolnym rogu okna, a następnie przejdź do [część 2](#step2).

### 1 - Opis parametrów możliwych do edycji <a name="step1"></a>

> [!primary]
>
> Pola `Nazwa domeny`{.action} i `Katalog główny`{.action} nie są modyfikowalne, ponieważ dotyczą one strony internetowej znajdującej się na Twoim hostingu.
>
> - Aby przypisać nową domenę lub poddomenę do strony internetowej znajdującej się na Twoim hostingu, zapoznaj się z naszym poradnikiem "[Jak przypisać domenę do istniejącej strony internetowej?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
> - Aby zmienić katalog główny swojej strony internetowej, zapoznaj się z naszym przewodnikiem "[Jak zmienić katalog główny istniejącej strony internetowej?](/pages/web_cloud/web_hosting/my_websites_modify_root_folder)".

#### Opcja "Włącz CDN"

Aby skorzystać z tej opcji, należy najpierw wykupić ofertę CDN OVHcloud lub wykupić hosting Performance.

Zaznacz/usuń zaznaczenie tego pola, aby włączyć/wyłączyć opcję GeoCache dla Twojej domeny lub subdomeny.

Więcej informacji na temat opcji/ofert CDN znajdziesz w naszej dokumentacji "[Przewodnik dotyczący usługi CDN na hostingu www](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)".

#### Opcja "Geolokalizacja IP"

Ta opcja jest używana głównie w przypadku stron WWW, których docelowi odbiorcy znajdują się za granicą. Pomaga to ulepszyć pozycjonowanie SEO strony internetowej w wybranym kraju.

Więcej informacji na temat tej opcji znajdziesz w naszej dokumentacji "[Geolokalizacja strony WWW w danym kraju](/pages/web_cloud/web_hosting/multisites_geolocation)".

#### Opcja "Włącz firewall"

Ta opcja pozwala na filtrowanie zapytań przychodzących w celu ochrony hostingu przed najczęstszymi atakami.

Więcej informacji na temat tej opcji znajdziesz w naszej dokumentacji "[Aktywacja zapory systemowej](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)".

#### Opcja "Rozdzielone logi"

Zaznacz/usuń zaznaczenie tej opcji tylko wtedy, gdy chcesz oddzielić logi Twojej domeny od innych domen zadeklarowanych równolegle na Twoim hostingu.

Dowiedz się więcej o tej opcji na naszej [stronie poświęconej szczegółowym statystykom](/links/web/hosting-traffic-analysis).

Po wprowadzeniu zmian kliknij przycisk `Dalej`{.action} na dole po prawej stronie okna, aby przejść do [część 2](#step2).

### 2 - Podsumowanie zmian <a name="step2"></a>

Po kliknięciu przycisku `Dalej`{.action} znajdziesz podsumowanie ustawień, które zamierzasz zastosować do Twojej domeny:

![Modify domain resume](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Jeśli wszystkie parametry są skonfigurowane zgodnie z Twoimi potrzebami, kliknij przycisk `Zatwierdź`{.action}.

W zależności od wybranych opcji wprowadzenie zmian może potrwać od kilku minut do kilku godzin.

Jeśli w przypadku opcji **CDN**, **Geolokalizacja IP** i **Rozdzielone logi** nie zostaną wprowadzone zmiany po 24 godzinach, zapoznaj się z przewodnikami (i stronami) dla wszystkich opcji opisanych w [część 1](#step1), aby upewnić się, że wszystkie wymagane warunki zostały spełnione.

## Sprawdź również

[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite).

[Zarządzanie certyfikatem SSL na hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Przewodnik dotyczący usługi CDN na hostingu www](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).

[Geolokalizacja strony WWW w danym kraju](/pages/web_cloud/web_hosting/multisites_geolocation).

[Aktywacja zapory systemowej](/pages/web_cloud/web_hosting/multisites_activating_application_firewall).
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).
