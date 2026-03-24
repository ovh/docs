---
title: "Przekierowanie nazwy domeny zarządzanej w OVHcloud"
excerpt: "Poznaj rodzaje przekierowań i dowiedz się, jak utworzyć przekierowanie dla nazwy domeny zarządzanej w OVHcloud"
updated: 2026-02-10
---

## Wprowadzenie

Przekierowanie nazwy domeny polega na przekierowaniu jej na nową docelową stronę. Istnieją różne rodzaje przekierowań, z których każdy odpowiada konkretnej potrzebie.

**Sprawdź różne sposoby przekierowania nazwy domeny**

## Wymagania początkowe

- Posiadanie [nazwy domeny](/links/web/domains)
- Połączenie z hostingiem (przekierowanie za pomocą pliku [.htaccess](#htaccess_rewrite))

<!-- CP-NAV-START:web-domains -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Domeny](/links/control-panel/web-domains)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Domeny`{.action} > Wybierz nazwę domeny

---
<!-- CP-NAV-END:web-domains -->

## W praktyce

### Poznaj przekierowanie nazwy domeny

Funkcja ta pozwala na przekierowanie nazwy domeny/subdomeny na:

- inna już istniejąca nazwa domeny/subdomena:
    - **Przykład**: `domain.tld`
- adres URL (Uniform Resource Locator):
    - **Przykłady**: `http://www.domain.tld/welcome/` lub `https://www.domain.tld/welcome/` (jeśli nazwa domeny docelowej posiada kompatybilny certyfikat SSL).

Działania te mogą być przeprowadzane na kilka sposobów:

- **Z poziomu[Panelu klienta OVHcloud](/links/manager)**, gdzie asystent konfiguracji pozwala na ustawienie przekierowania.
- **Za pomocą metody wymagającej programowania**. Musisz samodzielnie utworzyć przekierowanie w pliku (zazwyczaj [.htaccess](#htaccess_rewrite)).

> [!warning]
>
> Uruchomienie przekierowania może mieć wpływ na pozycjonowanie Twojej strony WWW. 
> Bądź czujny nad operacjami, które zamierzasz wykonać lub skontaktuj się z [wyspecjalizowanym dostawcą](/links/partner) w celu pozycjonowania strony, jeśli to konieczne.
>
> Uwaga: przekierowanie utworzone w [Panelu klienta OVHcloud](/links/manager) nie pozwala na przekierowanie adresu URL na `https://` na inną nazwę domeny lub adres URL. 
> Aby utworzyć ten rodzaj przekierowania, należy obowiązkowo przejść przez [wpisanie adresu URL](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite), na przykład przez plik ".htaccess".

### Przekieruj nazwę domeny w Panelu klienta

Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią nazwę domeny. Kliknij zakładkę `Przekierowanie`{.action}.

Tabela wyświetla aktywne przekierowania dla Twojej nazwy domeny. Możesz zarządzać istniejącymi przekierowaniami za pomocą przycisku `...`{.action} znajduje się po prawej stronie każdej linii.

Kliknij przycisk `Dodaj przekierowanie`{.action}.

![Prezentacja przekierowania menu](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}

Trzy opcje przekierowania są dostępne w [Panelu klienta OVHcloud](/links/manager). Każda z nich składa się z **5 kolejnych etapów**. 

> W zakładce `Przekierowanie`{.action} znajduje się czwarta opcja umożliwiająca szybkie przekierowanie nazwy domeny na rekordy DNS A, AAAA i CNAME.<br>
> Ponieważ w tym przypadku nie chodzi o "przekierowanie", w tym przewodniku nie zostanie szczegółowo opisany ten wariant.
>
> Więcej informacji na temat wpisów DNS znajdziesz w dokumentacji dotyczącej [rekordy DNS](/pages/web_cloud/domains/dns_zone_records).
>

Poniżej znajdziesz trzy rodzaje przekierowań opisanych krok po kroku.

> [!primary]
>
> Bez względu na wybraną opcję przekierowania, zanim zmiana stanie się w pełni skuteczna, niezbędny jest czas propagacji wynoszący maksymalnie 4-24 godzin.
>

### Opcja 1: stałe przekierowanie widoczne na adres www

Ta opcja pozwala, po wpisaniu przekierowanej nazwy domeny, na wyświetlenie nazwy domeny docelowej na pasku adresowym przeglądarki internetowej zamiast przekierowanej nazwy domeny.

- **Przykład**: jeśli przekierujesz `domain1.tld` na `domain2.tld`, to `domain2.tld` wyświetli się w pasku adresowym w Twojej przeglądarce.

![Gif1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> To przekierowanie "standard" zwróci kod HTTP 301.

> [!success]
> Kliknij na poniższe zakładki, aby kolejno wyświetlić każdy z 5 etapów.

> [!tabs]
> **Krok 1**
>>
>> W oknie pojawi się Twoja nazwa domeny do przekierowania. Wpisz formularz **tylko**, jeśli chcesz przekierować *subdomenę*.
>>
>> Pole `Przekieruj również`{.action} może zostać zaznaczone do przekierowania subdomeny na `www` do tego samego celu, który wybierzesz dla nazwy domeny/subdomeny.
>>
>> ![Etap 1](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 2.
>>
> **Krok 2**
>>
>> Wybierz `Na adres Web`{.action}.
>>
>> ![Etap 2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 3.
>>
> **Krok 3**
>>
>> Wybierz `Z przekierowaniem widocznym`{.action} spośród dwóch wskazanych opcji.
>>
>> ![Etap 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 4.
>>
> **Krok 4**
>>
>> Wybierz `Permanente (301)`{.action} spośród dwóch wskazanych opcji, po czym wprowadź docelową nazwę domeny lub adres URL przekierowania w formularzu `Adres www`{.action}, który się wyświetli.
>>
>> ![Etap 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-permanent.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 5.
>>
> **Krok 5**
>>
>> W tym ostatnim etapie upewnij się, że wyświetlane informacje są poprawne.
>>
>> ![Etap 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-permanent.png){.thumbnail}
>>
>> Kliknij na `Potwierdź`{.action}, aby zatwierdzić Twoją konfigurację.
>> 
>> > [!primary]
>> >
>> > Jeśli wyświetla się komunikat "*Istnieją przekierowania z nazw domen, które chcesz przekierować, które wchodzą w konflikt z przekierowaniami, które chcesz dodać*", możesz zaznaczyć kratkę `Potwierdź usunięcie istniejącego przekierowania`{.action}, aby wymusić zastosowanie przekierowania.
>> >
>> > Uwaga: poprzednia konfiguracja zostanie wyłączona i usunięta.
>> >
>>

### Opcja 2: tymczasowe przekierowanie widoczne na adres www

Podobnie jak w przypadku opcji 1, ta opcja pozwala na wyświetlenie nazwy domeny docelowej na pasku adresowym przeglądarki internetowej, a nie przekierowanej nazwy domeny po wpisaniu przekierowanego.

Należy je jednak stosować doraźnie, na przykład w przypadku zdarzeń ulotnych.<br>
Pozycjonowanie w wyszukiwarkach jest bowiem gorsze niż w przypadku stałego **przekierowania widocznego** typu 301 (kod HTTP).

- **Przykład**: jeśli przekierujesz `domain1.tld` na `domain2.tld`, to `domain2.tld` wyświetli się w pasku adresowym w Twojej przeglądarce.

![Gif1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> Przekierowanie zwraca kod HTTP 302.

> [!success]
> Kliknij na poniższe zakładki, aby kolejno wyświetlić każdy z 5 etapów.

> [!tabs]
> **Krok 1**
>>
>> W oknie pojawi się Twoja nazwa domeny do przekierowania. Wpisz formularz **tylko**, jeśli chcesz przekierować *subdomenę*.
>>
>> Pole `Przekieruj również`{.action} może zostać zaznaczone do przekierowania subdomeny na `www` do tego samego celu, który wybierzesz dla nazwy domeny/subdomeny.
>>
>> ![Etap 1](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 2.
>>
> **Krok 2**
>>
>> Wybierz `Na adres Web`{.action}.
>>
>> ![Etap 2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 3.
>>
> **Krok 3**
>>
>> Wybierz `Z przekierowaniem widocznym`{.action} spośród dwóch wskazanych opcji.
>>
>> ![Etap 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 4.
>>
> **Krok 4**
>>
>> Wybierz `Tymczasowe (302)`{.action} spośród dwóch wskazanych opcji, po czym wprowadź docelową nazwę domeny lub adres URL przekierowania w formularzu `Adres www`{.action}, który się wyświetli.
>>
>> ![Etap 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-temporary.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 5.
>>
> **Krok 5**
>>
>> W tym ostatnim etapie upewnij się, że wyświetlane informacje są poprawne.
>>
>> ![Etap 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-temporary.png){.thumbnail}
>>
>> Kliknij na `Potwierdź`{.action}, aby zatwierdzić Twoją konfigurację.
>> 
>> > [!primary]
>> >
>> > Jeśli wyświetla się komunikat "*Istnieją przekierowania z nazw domen, które chcesz przekierować, które wchodzą w konflikt z przekierowaniami, które chcesz dodać*", możesz zaznaczyć kratkę `Potwierdź usunięcie istniejącego przekierowania`{.action}, aby wymusić zastosowanie przekierowania.
>> >
>> > Uwaga: poprzednia konfiguracja zostanie wyłączona i usunięta.
>> >
>>

### Opcja 3: przekierowanie niewidoczne na adres www

To przekierowanie pozwala na pozostawienie nazwy domeny na pasku adresowym przeglądarki internetowej, zamiast zastępowania jej nazwą domeny docelową.<br>
**Uwaga, ta operacja nie jest kompatybilna ze wszystkimi stronami i wpływa na pozycjonowanie Twojej strony.**.

- **Przykład**: jeśli przekierujesz `domain1.tld` na `domain2.tld`, to `domain1.tld` wyświetli się w pasku adresowym w Twojej przeglądarce.

![Gif2](/pages/assets/schemas/domains/invisible-redirection.gif){.thumbnail}

Przekierowanie niewidoczne działa na znaczniku HTML *iFrame*. Pozwala ona nazwie domeny przekierowanej na zintegrowanie zawartości innej strony odpowiadającej nazwie domeny docelowej ze swoją stroną HTML.

Dzięki tej kapsułce internauci odwiedzający twoją stronę mogą wyświetlić docelową nazwę domeny

> Ta opcja zwróci kod HTTP 200.

> [!warning]
>
> Uwaga, strony zamknięte znacznikiem *iFrame* mogą nie być odczytywane na smartfonach. Ich zawartość nie jest zazwyczaj brana pod uwagę przez wyszukiwarki podczas indeksowania i indeksowania Twojej strony.
>

> [!success]
> Kliknij na poniższe zakładki, aby kolejno wyświetlić każdy z 5 etapów.
>

> [!tabs]
> **Krok 1**
>>
>> W oknie pojawi się Twoja nazwa domeny do przekierowania. Wpisz formularz **tylko**, jeśli chcesz przekierować *subdomenę*.
>>
>> Pole `Przekieruj również`{.action} może zostać zaznaczone do przekierowania subdomeny na `www` do tego samego celu, który wybierzesz dla nazwy domeny/subdomeny.
>>
>> ![Etap 1](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 2.
>>
> **Krok 2**
>>
>> Wybierz `Na adres Web`{.action}.
>>
>> ![Etap 2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 3.
>>
> **Krok 3**
>>
>> Wybierz `Z niewidocznym przekierowaniem`{.action} spośród dwóch wskazanych opcji.
>>
>> ![Etap 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-with-an-invisible-redirection.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 4.
>>
> **Krok 4**
>>
>> Wybierz `Tymczasowe (iframe)`{.action} spośród dwóch wskazanych opcji, po czym wprowadź docelową nazwę domeny lub adres URL przekierowania w formularzu `Adres www`{.action}, który się wyświetli.
>>
>> ![Etap 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-iframe.png){.thumbnail}
>>
>> Trzy opcjonalne parametry są dostępne na tym etapie:
>>
>> - **Tytuł**: Twojej strony WWW. Pojawi się jako nazwa strony w zakładce przeglądarek internetowych.<br>
>> - **Słowa kluczowe**: mogą być używane przez wyszukiwarki do częściowego pozycjonowania strony.<br>
>> - **Opis**: dotyczy Twojej strony WWW. Zostanie ona użyta przez wyszukiwarki w ich wynikach.
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 5.
>>
> **Krok 5**
>>
>> W tym ostatnim etapie upewnij się, że wyświetlane informacje są poprawne.
>>
>> ![Etap 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-iframe.png){.thumbnail}
>>
>> Kliknij na `Potwierdź`{.action}, aby zatwierdzić Twoją konfigurację.
>> 
>> > [!primary]
>> >
>> > Jeśli wyświetla się komunikat "*Istnieją przekierowania z nazw domen, które chcesz przekierować, które wchodzą w konflikt z przekierowaniami, które chcesz dodać*", możesz zaznaczyć kratkę `Potwierdź usunięcie istniejącego przekierowania`{.action}, aby wymusić zastosowanie przekierowania.
>> >
>> > Uwaga: poprzednia konfiguracja zostanie wyłączona i usunięta.
>> >
>>

### Przekieruj nazwę domeny za pomocą pliku ".htaccess" <a name="htaccess_rewrite"></a>

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy do Twojej dyspozycji tę część przewodnika, aby jak najlepiej wesprzeć Cię w bieżących zadaniach. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner). Niestety firma OVHcloud nie będzie w stanie udzielić wsparcia w zakresie opisanych poniżej udokumentowanych etapów. Więcej informacji znajdziesz w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>

Pliki ".htaccess" to pliki konfiguracyjne, w których można określić komendy. Podczas wykonywania kodu Twojej strony WWW na serwerze WWW (Apache) polecenia zostaną zinterpretowane i tym samym wykonane.<br>
Wśród tych poleceń możesz utworzyć przekierowania.

Manipulowanie plikiem ".htaccess" może spowodować niedostępność Twojej strony WWW. W przypadku wątpliwości należy skontaktować się z [wyspecjalizowanym dostawcą](/links/partner).

Pełna dokumentacja dotycząca ".htaccess" znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.

> [!success]
>
> Zalecamy **wykonanie kopii zapasowej pliku .htaccess** przed wprowadzeniem zmian. W przypadku nieprawidłowej operacji będziesz mógł przywrócić wcześniejszą wersję pliku.
>

Poniżej znajdziesz 4 zmiennych do wykonywania przekierowań za pomocą pliku ".htaccess".

#### Zmienna 1 - "Redirect permanent"

Ta zmienna pozwala na przekierowanie strony jako całości lub tylko jej części na inną stronę WWW lub jej część. Odwiedzający są automatycznie przekierowywani na prawidłowy adres/URL, gdy próbują uzyskać dostęp do Twojej strony za pośrednictwem historycznego adresu/URL.

> [!tabs]
> Kod do umieszczenia w ".htaccess" 
>>
>> Przekierowanie strony www:
>>
>>```bash
>>Redirect permanent / http://domainTarget.tld/
>>```
>>
>> Aby przekierować katalog na inny:
>>
>>```bash
>>Redirect permanent /old_folder http://domain.tld/new_folder
>>```
>>
>> Aby przekierować plik na inny:
>>
>>```bash
>>Redirect permanent /old_file.php http://domain.tld/new_file.php
>>```
>>
> Kod HTTP
>>
>> Skrypt wyśle kod HTTP 301. Zapobiegnie to robotom wyszukiwarek, że należy zaktualizować ich linki do nowego adresu/URL.
>>

#### Zmienna 2 - "Redirect gone"

Ta zmienna jest użyteczna dla usuniętych plików. Zastępuje komunikat *404 nieodnaleziony dokument* wyraźniejszym komunikatem typu *410 dokument już nie istnieje*. Osoba odwiedzająca Twoją stronę zostanie poinformowana, że plik, do którego zamierzasz zadzwonić, już nie istnieje.

> [!tabs]
> Kod do umieszczenia w ".htaccess" 
>>
>>```bash
>>Redirect gone /fileDeleted.html
>>```
>>
> Kod HTTP
>>
>> Skrypt wyśle kod HTTP 410.
>>

#### Zmienna 3 - "Redirect seeother"

Jeśli zmienisz rozszerzenie pliku, zmienna *seeother* umożliwia zmianę typu pliku. Osoba, która stara się uzyskać dostęp do starego pliku, zostanie automatycznie przekierowana na ten plik, który ma odpowiednie rozszerzenie.

> [!tabs]
> Kod do umieszczenia w ".htaccess" 
>>
>>```bash
>>Redirect seeother /example.doc http://domain.tld/example.pdf
>>```
>>
> Kod HTTP
>>
>> Skrypt wyśle kod HTTP 303.
>>

#### Zmienna 4 - "Redirect Temp"

Ta zmienna może być używana podczas tymczasowego przenoszenia plików na inną stronę. Odwiedzający, którzy próbują uzyskać dostęp do Twojej strony poprzez historyczny adres/URL, są automatycznie przekierowywani na nowy tymczasowy adres/URL.

> [!tabs]
> Kod do umieszczenia w ".htaccess" 
>>
>>```bash
>>Redirect temp / http://OtherWebsite.tld/site/
>>```
>>
> Kod HTTP
>>
>> Skrypt wyśle kod HTTP 302.
>>

## Sprawdź również <a name="go-further"></a>

[Zablokować dostęp do mojej strony dla niektórych adresów IP przez plik ".htaccess" ](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website)

[Chroń interfejs administracyjny swojej strony za pomocą ".htaccess" ](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)

[Stworzenie adresów URL za pomocą mod_rewrite](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)

[Wykonywanie innych operacji za pomocą pliku ".htaccess" ](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do)

[Jak edytować strefę DNS?](/pages/web_cloud/domains/dns_zone_edit)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
