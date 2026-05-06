---
title: "Przekierowanie nazwy domeny zarządzanej w OVHcloud"
excerpt: "Poznaj rodzaje przekierowań i dowiedz się, jak utworzyć przekierowanie dla nazwy domeny zarządzanej w OVHcloud"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie

Przekierowanie nazwy domeny polega na przekierowaniu jej na nowy cel. Istnieją różne rodzaje przekierowań, z których każdy odpowiada konkretnej potrzebie.

**Sprawdź różne sposoby przekierowania nazwy domeny.**

## Wymagania początkowe

- [Nazwa domeny](/links/web/domains)
- Dostęp do hostingu (w przypadku przekierowania za pomocą pliku [.htaccess](#htaccess_rewrite))

<!-- CP-NAV-START:web-domains -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Domeny](/links/control-panel/web-domains)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Domeny`{.action} > Wybierz nazwę domeny

---
<!-- CP-NAV-END:web-domains -->

## W praktyce

### Przekierowanie nazwy domeny

Ta funkcja pozwala na przekierowanie nazwy domeny/subdomeny na:

- Inną istniejącą nazwę domeny/subdomenę:
    - **Przykład**: `domain.tld`
- Adres URL strony internetowej (Uniform Resource Locator):
    - **Przykłady**: `http://www.domain.tld/welcome/` lub `https://www.domain.tld/welcome/` (jeśli nazwa domeny docelowej posiada kompatybilny certyfikat SSL).

Można to zrobić na kilka sposobów:

- **Z poziomu [Panelu klienta OVHcloud](/links/manager)**, w którym asystent konfiguracji pozwala na ustawienie przekierowania.
- **Za pomocą metody wymagającej programowania**: przekierowanie należy utworzyć samodzielnie w pliku (zazwyczaj [.htaccess](#htaccess_rewrite)).

> [!warning]
>
> Konfiguracja przekierowania może mieć wpływ na pozycjonowanie Twojej strony WWW w wyszukiwarkach.
> Zachowaj ostrożność przy wprowadzanych zmianach lub skontaktuj się z [wyspecjalizowanym usługodawcą](/links/partner) w zakresie pozycjonowania, jeśli to konieczne.
>
> Uwaga: przekierowanie utworzone w [Panelu klienta OVHcloud](/links/manager) nie pozwala na przekierowanie adresu URL `https://` na inną nazwę domeny lub adres URL.
> Aby utworzyć ten rodzaj przekierowania, należy użyć [przepisywania adresów URL](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite), na przykład za pomocą pliku ".htaccess".
>

### Przekierowanie nazwy domeny z poziomu Panelu klienta

Oprócz przekierowań wskazujących na rekordy DNS typu A, AAAA i CNAME, w [Panelu klienta OVHcloud](/links/manager) dostępne są 3 opcje przekierowania.

W razie potrzeby zapoznaj się z naszą dokumentacją dotyczącą [rekordów DNS](/pages/web_cloud/domains/dns_zone_records).

> [!warning]
>
> Aby skorzystać z jednej z 3 poniższych opcji, aktywna strefa DNS Twojej nazwy domeny musi być zarządzana w Panelu klienta OVHcloud. Te opcje przekierowania modyfikują konfigurację strefy DNS, aby mogły działać.
>
> W przeciwnym razie przekierowania nie będą działać.

> [!primary]
>
> Niezależnie od wybranej opcji przekierowania, zmiana wymaga czasu propagacji wynoszącego od 4 do maksymalnie 24 godzin, zanim stanie się w pełni skuteczna.

**Kliknij poniższe opcje, aby wyświetlić ich zawartość.**

/// details | Opcja 1 - Stałe przekierowanie widoczne na adres WWW

Ta opcja pozwala, po wpisaniu przekierowanej nazwy domeny, na wyświetlenie nazwy domeny docelowej w pasku adresowym przeglądarki internetowej zamiast przekierowanej nazwy domeny.

- **Przykład**: jeśli przekierujesz `domain1.tld` na `domain2.tld`, to `domain2.tld` wyświetli się w pasku adresowym Twojej przeglądarki.

![Gif1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> To "standardowe" przekierowanie zwróci kod HTTP 301.

<!-- CP-STEPS-START:configure-redirect-permanent -->
Kliknij poniższe karty, aby wyświetlić kolejne **7** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Przekierowanie`{.action}: tabela wyświetla aktywne przekierowania dla Twojej nazwy domeny. Następnie kliknij `Dodaj przekierowanie`{.action}.
>>
>> ![Redirection menu overview](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Krok 3**
>>
>> W oknie wyświetli się Twoja nazwa domeny do przekierowania. Wypełnij formularz **tylko** wtedy, gdy chcesz przekierować *subdomenę*.
>>
>> Pole `Przekieruj również`{.action} można zaznaczyć, aby przekierować subdomenę `www` na ten sam cel, który wybrałeś dla nazwy domeny/subdomeny.
>>
>> ![Step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Kliknij `Dalej`{.action}.
>>
> **Krok 4**
>>
>> Wybierz `Na adres Web`{.action}.
>>
>> ![Step 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Kliknij `Dalej`{.action}.
>>
> **Krok 5**
>>
>> Wybierz `Z przekierowaniem widocznym`{.action} spośród dwóch wyświetlonych opcji.
>>
>> ![Step 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Kliknij `Dalej`{.action}.
>>
> **Krok 6**
>>
>> Wybierz `Permanentne (301)`{.action} spośród dwóch wyświetlonych opcji, a następnie wprowadź docelową nazwę domeny lub adres URL przekierowania w polu `Adres www`{.action}.
>>
>> ![Step 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-permanent.png){.thumbnail}
>>
>> Kliknij `Dalej`{.action}.
>>
> **Krok 7**
>>
>> W tym ostatnim kroku upewnij się, że wyświetlane informacje są poprawne.
>>
>> ![Step 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-permanent.png){.thumbnail}
>>
>> Kliknij `Potwierdź`{.action}, aby zatwierdzić konfigurację.
>>
>> > [!primary]
>> >
>> > Jeśli wyświetla się komunikat "*Istnieją przekierowania z nazw domen, które chcesz przekierować, kolidujące z przekierowaniami, które chcesz dodać*", możesz zaznaczyć pole `Potwierdź usunięcie istniejącego przekierowania`{.action}, aby wymusić zastosowanie przekierowania.
>> >
>> > Uwaga: poprzednia konfiguracja zostanie wyłączona i usunięta.
>> >
>>
<!-- CP-STEPS-END:configure-redirect-permanent -->

///

/// details | Opcja 2 - Tymczasowe przekierowanie widoczne na adres WWW

Podobnie jak w opcji 1, ta opcja wyświetla nazwę domeny docelowej w pasku adresowym przeglądarki zamiast przekierowanej nazwy domeny.

Należy ją jednak stosować jedynie doraźnie, na przykład w przypadku tymczasowych wydarzeń.

Pozycjonowanie w wyszukiwarkach jest gorsze niż w przypadku **stałego widocznego** przekierowania typu 301 (kod HTTP).

- **Przykład**: jeśli przekierujesz `domain1.tld` na `domain2.tld`, to `domain2.tld` wyświetli się w pasku adresowym Twojej przeglądarki.

![Gif1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> To przekierowanie zwróci kod HTTP 302.

<!-- CP-STEPS-START:configure-redirect-temporary -->
Kliknij poniższe karty, aby wyświetlić kolejne **7** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Przekierowanie`{.action}: tabela wyświetla aktywne przekierowania dla Twojej nazwy domeny. Następnie kliknij `Dodaj przekierowanie`{.action}.
>>
>> ![Redirection menu overview](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Krok 3**
>>
>> W oknie wyświetli się Twoja nazwa domeny do przekierowania. Wypełnij formularz **tylko** wtedy, gdy chcesz przekierować *subdomenę*.
>>
>> Pole `Przekieruj również`{.action} można zaznaczyć, aby przekierować subdomenę `www` na ten sam cel, który wybrałeś dla nazwy domeny/subdomeny.
>>
>> ![Step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Kliknij `Dalej`{.action}.
>>
> **Krok 4**
>>
>> Wybierz `Na adres Web`{.action}.
>>
>> ![Step 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Kliknij `Dalej`{.action}.
>>
> **Krok 5**
>>
>> Wybierz `Z przekierowaniem widocznym`{.action} spośród dwóch wyświetlonych opcji.
>>
>> ![Step 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Kliknij `Dalej`{.action}.
>>
> **Krok 6**
>>
>> Wybierz `Tymczasowe (302)`{.action} spośród dwóch wyświetlonych opcji, a następnie wprowadź docelową nazwę domeny lub adres URL przekierowania w polu `Adres www`{.action}.
>>
>> ![Step 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-temporary.png){.thumbnail}
>>
>> Kliknij `Dalej`{.action}.
>>
> **Krok 7**
>>
>> W tym ostatnim kroku upewnij się, że wyświetlane informacje są poprawne.
>>
>> ![Step 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-temporary.png){.thumbnail}
>>
>> Kliknij `Potwierdź`{.action}, aby zatwierdzić konfigurację.
>>
>> > [!primary]
>> >
>> > Jeśli wyświetla się komunikat "*Istnieją przekierowania z nazw domen, które chcesz przekierować, kolidujące z przekierowaniami, które chcesz dodać*", możesz zaznaczyć pole `Potwierdź usunięcie istniejącego przekierowania`{.action}, aby wymusić zastosowanie przekierowania.
>> >
>> > Uwaga: poprzednia konfiguracja zostanie wyłączona i usunięta.
<!-- CP-STEPS-END:configure-redirect-temporary -->

///

/// details | Opcja 3 - Niewidoczne przekierowanie na adres WWW

To przekierowanie pozwala, po wpisaniu przekierowanej nazwy domeny, na pozostawienie jej w pasku adresowym przeglądarki internetowej zamiast zastępowania jej nazwą domeny docelowej.

**Uwaga: ta operacja nie jest kompatybilna ze wszystkimi stronami i wpływa na pozycjonowanie Twojej strony w wyszukiwarkach.**

- **Przykład**: jeśli przekierujesz `domain1.tld` na `domain2.tld`, to `domain1.tld` wyświetli się w pasku adresowym Twojej przeglądarki.

![Gif2](/pages/assets/schemas/domains/invisible-redirection.gif){.thumbnail}

Niewidoczne przekierowanie działa za pomocą znacznika HTML *iFrame*. Pozwala on przekierowanej nazwie domeny na zintegrowanie zawartości innej strony odpowiadającej nazwie domeny docelowej w swojej własnej stronie HTML.

Ta enkapsulacja uniemożliwia odwiedzającym Twoją stronę zobaczenie nazwy domeny docelowej.

> Ta opcja zwróci kod HTTP 200.

> [!warning]
>
> Uwaga: strony osadzone za pomocą znacznika *iFrame* mogą nie być czytelne na smartfonach. Ich zawartość nie jest zazwyczaj brana pod uwagę przez wyszukiwarki podczas pozycjonowania i indeksowania Twojej strony.

<!-- CP-STEPS-START:configure-redirect-invisible -->
Kliknij poniższe karty, aby wyświetlić kolejne **7** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Przekierowanie`{.action}: tabela wyświetla aktywne przekierowania dla Twojej nazwy domeny. Następnie kliknij `Dodaj przekierowanie`{.action}.
>>
>> ![Redirection menu overview](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Krok 3**
>>
>> W oknie wyświetli się Twoja nazwa domeny do przekierowania. Wypełnij formularz **tylko** wtedy, gdy chcesz przekierować *subdomenę*.
>>
>> Pole `Przekieruj również`{.action} można zaznaczyć, aby przekierować subdomenę `www` na ten sam cel, który wybrałeś dla nazwy domeny/subdomeny.
>>
>> ![Step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Kliknij `Dalej`{.action}.
>>
> **Krok 4**
>>
>> Wybierz `Na adres Web`{.action}.
>>
>> ![Step 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Kliknij `Dalej`{.action}.
>>
> **Krok 5**
>>
>> Wybierz `Z niewidocznym przekierowaniem`{.action} spośród dwóch wyświetlonych opcji.
>>
>> ![Step 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-with-an-invisible-redirection.png){.thumbnail}
>>
>> Kliknij `Dalej`{.action}.
>>
> **Krok 6**
>>
>> Wybierz `Tymczasowe (iframe)`{.action} spośród dwóch wyświetlonych opcji, a następnie wprowadź docelową nazwę domeny lub adres URL przekierowania w polu `Adres www`{.action}.
>>
>> ![Step 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-iframe.png){.thumbnail}
>>
>> Na tym etapie dostępne są trzy opcjonalne ustawienia:
>>
>> - **Tytuł**: tytuł Twojej strony WWW. Pojawi się jako tytuł strony w karcie przeglądarki.
>> - **Słowa kluczowe**: mogą być używane przez wyszukiwarki do częściowego indeksowania strony.
>> - **Opis**: opis Twojej strony WWW. Zostanie wykorzystany przez wyszukiwarki w ich wynikach.
>>
>> Kliknij `Dalej`{.action}.
>>
> **Krok 7**
>>
>> W tym ostatnim kroku upewnij się, że wyświetlane informacje są poprawne.
>>
>> ![Step 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-iframe.png){.thumbnail}
>>
>> Kliknij `Potwierdź`{.action}, aby zatwierdzić konfigurację.
>>
>> > [!primary]
>> >
>> > Jeśli wyświetla się komunikat "*Istnieją przekierowania z nazw domen, które chcesz przekierować, kolidujące z przekierowaniami, które chcesz dodać*", możesz zaznaczyć pole `Potwierdź usunięcie istniejącego przekierowania`{.action}, aby wymusić zastosowanie przekierowania.
>> >
>> > Uwaga: poprzednia konfiguracja zostanie wyłączona i usunięta.
<!-- CP-STEPS-END:configure-redirect-invisible -->

### Przekierowanie nazwy domeny za pomocą pliku ".htaccess" <a name="htaccess_rewrite"></a>

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Tobie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
>
> Niniejszy przewodnik ma na celu pomoc w realizacji bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w zakresie opisanych poniżej kroków. Więcej informacji znajdziesz w sekcji [Sprawdź również](#go-further) niniejszego przewodnika.
>

Pliki ".htaccess" to pliki konfiguracyjne, w których można określić polecenia. Podczas wykonywania kodu Twojej strony WWW na serwerze (Apache) polecenia te zostaną zinterpretowane i wykonane.

Za ich pomocą można tworzyć przekierowania.

Modyfikowanie pliku ".htaccess" może spowodować niedostępność Twojej strony WWW. W razie wątpliwości skontaktuj się z [wyspecjalizowanym usługodawcą](/links/partner).

Pełna dokumentacja dotycząca ".htaccess" znajduje się w sekcji [Sprawdź również](#go-further) niniejszego przewodnika.

> [!success]
>
> Zalecamy **wykonanie kopii zapasowej pliku .htaccess** przed wprowadzeniem zmian. W razie błędu będzie można przywrócić wcześniejszą wersję pliku.
>

Poniżej znajdziesz 4 zmienne umożliwiające tworzenie przekierowań za pomocą pliku ".htaccess".

#### Zmienna 1 - "Redirect permanent"

Ta zmienna pozwala na przekierowanie całej strony lub jej części na inną stronę lub inną jej część. Odwiedzający są automatycznie przekierowywani na prawidłowy adres/URL, gdy próbują uzyskać dostęp do Twojej strony przez historyczny adres/URL.

> [!tabs]
> Kod do umieszczenia w ".htaccess"
>>
>> Przekierowanie całej strony:
>>
>>```bash
>>Redirect permanent / http://domainTarget.tld/
>>```
>>
>> Aby przekierować katalog na inny:
>>
>> ```bash
>>Redirect permanent /old_folder http://domain.tld/new_folder
>>```
>>
>> Aby przekierować plik na inny:
>>
>> ```bash
>>Redirect permanent /old_file.php http://domain.tld/new_file.php
>>```
>>
> Kod HTTP
>>
>> Skrypt zwróci kod HTTP 301. Poinformuje to roboty wyszukiwarek o konieczności aktualizacji linków do nowego adresu/URL.
>>

#### Zmienna 2 - "Redirect gone"

Ta zmienna jest przydatna w przypadku usuniętych plików. Zastępuje komunikat *404 document not found* bardziej jednoznacznym komunikatem *410 document no longer exists*. Odwiedzający Twoją stronę zostają poinformowani, że żądany plik już nie istnieje.

> [!tabs]
> Kod do umieszczenia w ".htaccess"
>>
>>```bash
>>Redirect gone /fileDeleted.html
>>```
>>
> Kod HTTP
>>
>> Skrypt zwróci kod HTTP 410.
>>

#### Zmienna 3 - "Redirect seeother"

Jeśli zmienisz rozszerzenie pliku, zmienna *seeother* umożliwia zmianę typu pliku. Osoba próbująca uzyskać dostęp do starego pliku zostanie automatycznie przekierowana na plik z prawidłowym rozszerzeniem.

> [!tabs]
> Kod do umieszczenia w ".htaccess"
>>
>>```bash
>>Redirect seeother /example.doc http://domain.tld/example.pdf
>>```
>>
> Kod HTTP
>>
>> Skrypt zwróci kod HTTP 303.
>>

#### Zmienna 4 - "Redirect Temp"

Ta zmienna może być używana podczas tymczasowego przenoszenia plików na inną stronę. Odwiedzający, którzy próbują uzyskać dostęp do Twojej strony przez historyczny adres/URL, są automatycznie przekierowywani na nowy tymczasowy adres/URL.

> [!tabs]
> Kod do umieszczenia w ".htaccess"
>>
>>```bash
>>Redirect temp / http://OtherWebsite.tld/site/
>>```
>>
> Kod HTTP
>>
>> Skrypt zwróci kod HTTP 302.

///

## Sprawdź również <a name="go-further"></a>

[Blokowanie dostępu do strony dla określonych adresów IP za pomocą pliku ".htaccess"](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website).

[Ochrona interfejsu administracyjnego strony za pomocą pliku ".htaccess"](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).

[Przepisywanie adresów URL za pomocą mod_rewrite](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite).

[Inne operacje z plikami ".htaccess"](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do).

[Jak edytować strefę DNS?](/pages/web_cloud/domains/dns_zone_records)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
