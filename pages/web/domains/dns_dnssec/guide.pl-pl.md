---
title: "Zabezpieczenie domeny za pomocą DNSSEC"
excerpt: "Dowiedz się, jak zabezpieczyć domenę przed atakiem DNSSEC"
updated: 2023-07-26
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie 

Serwer DNS przechowuje jedną lub kilka stref DNS. Strefa DNS zawiera konfigurację DNS domeny. Jest to konfiguracja, która łączy Twoją domenę z powiązanymi z nią usługami (serwer hostingowy dla Twojej strony WWW, serwery dla Twoich kont e-mail z Twoją domeną, itp.).

W niektórych przypadkach przepływ danych przez serwery DNS może być kierowany przez osoby niepowołane.
Podsumowując, ci ludzie wprowadzają w błąd cache serwerów DNS korzystając z konfiguracji DNS, którą chcą zastosować do Twojej domeny: to się nazywa "Cache poisoning".
Dzięki temu mogą przekierować przychodzące strumienie Twojej domeny na własne strony WWW i konta e-mail.

**D**omain **N**ame **S**ystem **SEC**urity wtyczki (**DNSSEC**) pozwala na ochronę konfiguracji DNS Twojej domeny przed "cache poisoning" poprzez weryfikację i uwierzytelnienie odpowiedzi DNS.

**Dowiedz się, jak aktywować DNSSEC dla Twojej domeny, aby zapewnić jej ochronę przed atakiem "Cache poisoning".**

Aby uzyskać więcej informacji na temat działania usługi **DNSSEC**, sprawdź naszą stronę "[Dowiedz się więcej o DNSSEC](https://www.ovhcloud.com/pl/domains/dnssec/){.external}".

Zapoznaj się również z naszymi przewodnikami dotyczącymi [serwerów DNS OVHcloud](/pages/web/domains/dns_server_general_information/) oraz [edycji strefy DNS OVHcloud](/pages/web/domains/dns_zone_edit/), jeśli chcesz uzyskać więcej informacji na temat tych tematów.

## Wymagania początkowe

- Zarejestrowana domena OVHcloud
- Nazwa domeny musi posiadać rozszerzenie kompatybilne z DNSSEC.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, część `Web Cloud`{.action}.

## W praktyce

Aktywacja **DNSSEC** jest możliwa w dwóch przypadkach:

- **Twoja domena używa serwerów DNS OVHcloud** : aktywacja następuje za pomocą jednego kliknięcia w [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} (jeśli nie jest ona jeszcze włączona domyślnie).

- **Twoja domena nie używa serwerów DNS OVHcloud** : skontaktuj się z dostawcą zarządzającym konfiguracją DNS Twojej domeny, aby poprosić o jej ustawienia. Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i przejdź do sekcji `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij `Domeny`{.action}, następnie wybierz odpowiednią domenę z listy.</br>
Wybierz zakładkę `Rekordy DS`{.action}, kliknij przycisk `Zmień`{.action} po prawej stronie, następnie przycisk `+`{.action}, który się wyświetli.</br>
Możesz teraz wpisać 4 pola "Key Tag", "Flaga", "Algorytm", "Klucz publiczny zakodowany w base64)" wraz z danymi dostarczonymi przez aktualnego operatora.

> [!primary]
>
> Aby sprawdzić, czy Twoja domena używa konfiguracji DNS OVHcloud, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i przejdź do sekcji `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij `Domeny`{.action}, następnie wybierz odpowiednią domenę z listy. Wybierz kartę `Serwery DNS`{.action} po wybraniu domeny.
>
> Jeśli nazwy serwerów DNS kończą się na *ovh.net*, *ovh.ca* lub *anycast.me*, Twoja domena używa serwerów DNS OVHcloud.
>

### Etap 1: dostęp do interfejsu zarządzania domeną <a name="step1"></a>

Aby aktywować rozwiązanie **DNSSEC** dla Twojej domeny, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i przejdź do sekcji `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij `Domeny`{.action}, następnie wybierz odpowiednią domenę z listy.

Wyświetli się strona z ogólnymi informacjami o hostingu. 

### Etap 2: zarządzaj DNSSEC domeny

W zakładce `Informacje ogólne`{.action}, po zalogowaniu się do [etap 1](#step1), możesz sprawdzić stan aktywacji **DNSSEC** dla Twojej domeny.

W sekcji "Bezpieczeństwo" sprawdź status obok pozycji "Zabezpieczenie DNS - DNSSEC".

![dnssec](images/activate-dnssec-step2.png){.thumbnail}

Za pomocą przycisku aktywacyjnego powyżej hasła `Zabezpieczenie DNS - DNSSEC`{.action} możesz włączyć lub wyłączyć **DNSSEC** dla Twojej domeny. Po wykonaniu tych operacji pojawi się nowe okno, w którym możesz zatwierdzić modyfikację.

![dnssec](images/activate-dnssec-step3.png){.thumbnail}

> [!primary]
>
> Aktywacja / wyłączanie **DNSSEC** trwa **24** godzin, aby być aktywnym.
>
> Ponadto, jeśli w przyszłości chcesz zmienić serwery DNS przypisane do Twojej domeny, zmiana serwerów DNS zostanie wykonana w OVHcloud dopiero po wyłączeniu **DNSSEC**. Po upływie tego czasu konieczne będzie przedłużenie czasu trwania zmiany o **24** do **48** godzin, aby wznowić prace DNS.
>
> Zmiana serwerów DNS domeny w połączeniu z opcją **DNSSEC** włączona do usługi zostanie wykonana w pełni po upływie **48** do **72** godzin.
>

## Sprawdź również

[Informacje ogólne na temat serwerów DNS OVHcloud](/pages/web/domains/dns_server_general_information/)

[Edytuj strefę DNS OVHcloud](/pages/web/domains/dns_zone_edit/)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 