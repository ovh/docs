---
title: "Przekierowanie domeny zarządzanej w OVHcloud"
slug: przekierowanie-domeny
excerpt: "Poznaj rodzaje przekierowań i dowiedz się, jak utworzyć przekierowanie dla domeny zarządzanej w OVHcloud"
section: Informacje ogólne
order: 01
---

**Ostatnia aktualizacja z dnia 27-09-2022**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

## Wprowadzenie

Przekierowanie domeny polega na przekierowaniu jej na nową docelową stronę. Istnieją różne rodzaje przekierowań, z których każdy odpowiada konkretnej potrzebie.

**Sprawdź różne sposoby przekierowania domeny**

## Wymagania początkowe

- Posiadanie [domeny](https://www.ovhcloud.com/pl/domains/)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Połączenie z hostingiem (przekierowanie za pomocą pliku [.htaccess](#htaccess_rewrite))

## W praktyce

### Poznaj przekierowanie domeny

Funkcja ta pozwala na przekierowanie domeny/subdomeny na:

- inna już istniejąca domena/subdomena:
    - **Przykład**: `domain.tld
- adres URL (Uniform Resource Locator):
    - **Przykłady**: `http://www.domain.tld/welcome/` lub `https://www.domain.tld/welcome/` (jeśli domena docelowa posiada kompatybilny certyfikat SSL).

Działania te mogą być przeprowadzane na kilka sposobów:

- **Z poziomu[Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)**, gdzie asystent konfiguracji pozwala na ustawienie przekierowania.
- **Za pomocą metody wymagającej programowania**. Musisz samodzielnie utworzyć przekierowanie w pliku (zazwyczaj [.htaccess](#htaccess_rewrite)).

> [!warning]
>
> Uruchomienie przekierowania może mieć wpływ na pozycjonowanie Twojej strony WWW. 
> Bądź czujny nad operacjami, które zamierzasz wykonać lub skontaktuj się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/) w celu pozycjonowania strony, jeśli to konieczne.
>
> Uwaga: przekierowanie utworzone w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) nie pozwala na przekierowanie adresu URL na `https://` na inną domenę lub adres URL. 
> Aby utworzyć ten rodzaj przekierowania, należy obowiązkowo przejść przez [wpisanie adresu URL](https://docs.ovh.com/pl/hosting/hosting_www_htaccess_-_generowanie_adresow_za_pomoca_mod_rewrite/), na przykład przez plik ".htaccess".

### Przekieruj domenę w Panelu klienta

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, przejdź do sekcji `Web Cloud`{.action}, wybierz domenę, którą chcesz przekierować do sekcji `Domeny`{.action}, następnie kliknij zakładkę `Przekierowanie`{.action}.


Tabela wyświetla aktywne przekierowania dla Twojej domeny. Możesz zarządzać istniejącymi przekierowaniami za pomocą przycisku `...`{.action} znajduje się po prawej stronie każdej linii.

Kliknij przycisk `Dodaj przekierowanie`{.action}.

![Prezentacja przekierowania menu](images/RedirectionPanel.png){.thumbnail}

Trzy opcje przekierowania są dostępne w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). Każda z nich składa się z **5 kolejnych etapów**. 

> W zakładce `Przekierowanie`{.action} znajduje się czwarta opcja umożliwiająca szybkie przekierowanie domeny na rekordy DNS A, AAAA i CNAME.<br>
> Ponieważ w tym przypadku nie chodzi o "przekierowanie", w tym przewodniku nie zostanie szczegółowo opisany ten wariant.
>
> Więcej informacji na temat wpisów DNS znajdziesz w dokumentacji dotyczącej [rekordy DNS](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/).
>

Poniżej znajdziesz trzy rodzaje przekierowań opisanych krok po kroku.

> [!primary]
>
> Bez względu na wybraną opcję przekierowania, zanim zmiana stanie się w pełni skuteczna, niezbędny jest czas propagacji wynoszący maksymalnie 4-24 godzin.
>

### Opcja 1: stałe przekierowanie widoczne na adres www

Ta opcja pozwala, po wpisaniu przekierowanej domeny, na wyświetlenie domeny docelowej na pasku adresowym przeglądarki internetowej zamiast przekierowanej domeny.

- **Przykład**: jeśli przekierujesz `domain1.tld` na `domain2.tld`, to `domain2.tld` wyświetli się w pasku adresowym w Twojej przeglądarce.

![Gif1](images/redirect1.gif){.thumbnail}

> To przekierowanie "standard" zwróci kod HTTP 301.

> [!success]
> Kliknij na poniższe zakładki, aby kolejno wyświetlić każdy z 5 etapów.

> [!tabs]
> **Etap 1**
>>
>> W oknie pojawi się Twoja domena do przekierowania. Wpisz formularz **tylko**, jeśli chcesz przekierować *subdomenę*.
>>
>> Pole `Przekieruj również`{.action} może zostać zaznaczone do przekierowania subdomeny na `www` do tego samego celu, który wybierzesz dla domeny/subdomeny.
>>
>> ![Etap 1](images/Step1.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 2.
>>
> **Etap 2**
>>
>> Wybierz `Na adres Web`{.action}.
>>
>> ![Etap 2](images/Step2.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 3.
>>
> **Etap 3**
>>
>> Wybierz `Z przekierowaniem widocznym`{.action} spośród dwóch wskazanych opcji.
>>
>> ![Etap 3](images/Step3Visi.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 4.
>>
> **Etap 4**
>>
>> Wybierz `Permanente (301)`{.action} spośród dwóch wskazanych opcji, po czym wprowadź docelową domenę lub adres URL przekierowania w formularzu `Adres www`{.action}, który się wyświetli.
>>
>> ![Etap 4](images/Step4VisiPerma.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 5.
>>
> **Etap 5**
>>
>> W tym ostatnim etapie upewnij się, że wyświetlane informacje są poprawne.
>>
>> ![Etap 5](images/Step5VisiPerma.png){.thumbnail}
>>
>> Kliknij na `Potwierdź`{.action}, aby zatwierdzić Twoją konfigurację.
>> 
>> > [!primary]
>> >
>> > Jeśli wyświetla się komunikat "*Istnieją przekierowania z domen, które chcesz przekierować, które wchodzą w konflikt z przekierowaniami, które chcesz dodać*", możesz zaznaczyć kratkę `Potwierdź usunięcie istniejącego przekierowania`{.action}, aby wymusić zastosowanie przekierowania.
>> >
>> > Uwaga: poprzednia konfiguracja zostanie wyłączona i usunięta.
>> >
>>

### Opcja 2: tymczasowe przekierowanie widoczne na adres www

Podobnie jak w przypadku opcji 1, ta opcja pozwala na wyświetlenie domeny docelowej na pasku adresowym przeglądarki internetowej, a nie przekierowanej domeny po wpisaniu przekierowanego.

Należy je jednak stosować doraźnie, na przykład w przypadku zdarzeń ulotnych.<br>
Pozycjonowanie w wyszukiwarkach jest bowiem gorsze niż w przypadku stałego **przekierowania widocznego** typu 301 (kod HTTP).

- **Przykład**: jeśli przekierujesz `domain1.tld` na `domain2.tld`, to `domain2.tld` wyświetli się w pasku adresowym w Twojej przeglądarce.

![Gif1](images/redirect1.gif){.thumbnail}

> Przekierowanie zwraca kod HTTP 302.

> [!success]
> Kliknij na poniższe zakładki, aby kolejno wyświetlić każdy z 5 etapów.

> [!tabs]
> **Etap 1**
>>
>> W oknie pojawi się Twoja domena do przekierowania. Wpisz formularz **tylko**, jeśli chcesz przekierować *subdomenę*.
>>
>> Pole `Przekieruj również`{.action} może zostać zaznaczone do przekierowania subdomeny na `www` do tego samego celu, który wybierzesz dla domeny/subdomeny.
>>
>> ![Etap 1](images/Step1.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 2.
>>
> **Etap 2**
>>
>> Wybierz `Na adres Web`{.action}.
>>
>> ![Etap 2](images/Step2.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 3.
>>
> **Etap 3**
>>
>> Wybierz `Z przekierowaniem widocznym`{.action} spośród dwóch wskazanych opcji.
>>
>> ![Etap 3](images/Step3Visi.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 4.
>>
> **Etap 4**
>>
>> Wybierz `Tymczasowe (302)`{.action} spośród dwóch wskazanych opcji, po czym wprowadź docelową domenę lub adres URL przekierowania w formularzu `Adres www`{.action}, który się wyświetli.
>>
>> ![Etap 4](images/Step4VisiTempo.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 5.
>>
> **Etap 5**
>>
>> W tym ostatnim etapie upewnij się, że wyświetlane informacje są poprawne.
>>
>> ![Etap 5](images/Step5VisiTempo.png){.thumbnail}
>>
>> Kliknij na `Potwierdź`{.action}, aby zatwierdzić Twoją konfigurację.
>> 
>> > [!primary]
>> >
>> > Jeśli wyświetla się komunikat "*Istnieją przekierowania z domen, które chcesz przekierować, które wchodzą w konflikt z przekierowaniami, które chcesz dodać*", możesz zaznaczyć kratkę `Potwierdź usunięcie istniejącego przekierowania`{.action}, aby wymusić zastosowanie przekierowania.
>> >
>> > Uwaga: poprzednia konfiguracja zostanie wyłączona i usunięta.
>> >
>>

### Opcja 3: przekierowanie niewidoczne na adres www

To przekierowanie pozwala na pozostawienie domeny na pasku adresowym przeglądarki internetowej, zamiast zastępowania jej domeną docelową.<br>
**Uwaga, ta operacja nie jest kompatybilna ze wszystkimi stronami i wpływa na pozycjonowanie Twojej strony.**.

- **Przykład**: jeśli przekierujesz `domain1.tld` na `domain2.tld`, to `domain1.tld` wyświetli się w pasku adresowym w Twojej przeglądarce.

![Gif2](images/redirect2.gif){.thumbnail}

Przekierowanie niewidoczne działa na znaczniku HTML *iFrame*. Pozwala ona domenie przekierowanej na zintegrowanie zawartości innej strony odpowiadającej domenie docelowej ze swoją stroną HTML.

Dzięki tej kapsułce internauci odwiedzający twoją stronę mogą wyświetlić docelową domenę

> Ta opcja zwróci kod HTTP 200.

> [!warning]
>
> Uwaga, strony zamknięte znacznikiem *iFrame* mogą nie być odczytywane na smartfonach. Ich zawartość nie jest zazwyczaj brana pod uwagę przez wyszukiwarki podczas indeksowania i indeksowania Twojej strony.
>

> [!success]
> Kliknij na poniższe zakładki, aby kolejno wyświetlić każdy z 5 etapów.
>

> [!tabs]
> **Etap 1**
>>
>> W oknie pojawi się Twoja domena do przekierowania. Wpisz formularz **tylko**, jeśli chcesz przekierować *subdomenę*.
>>
>> Pole `Przekieruj również`{.action} może zostać zaznaczone do przekierowania subdomeny na `www` do tego samego celu, który wybierzesz dla domeny/subdomeny.
>>
>> ![Etap 1](images/Step1.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 2.
>>
> **Etap 2**
>>
>> Wybierz `Na adres Web`{.action}.
>>
>> ![Etap 2](images/Step2.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 3.
>>
> **Etap 3**
>>
>> Wybierz `Z niewidocznym przekierowaniem`{.action} spośród dwóch wskazanych opcji.
>>
>> ![Etap 3](images/Step3Invi.png){.thumbnail}
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 4.
>>
> **Etap 4**
>>
>> Wybierz `Tymczasowe (iframe)`{.action} spośród dwóch wskazanych opcji, po czym wprowadź docelową domenę lub adres URL przekierowania w formularzu `Adres www`{.action}, który się wyświetli.
>>
>> ![Etap 4](images/Step4Invi.png){.thumbnail}
>>
>> Trzy opcjonalne parametry są dostępne na tym etapie:
>>
>> - **Tytuł**: Twojej strony WWW. Pojawi się jako nazwa strony w zakładce przeglądarek internetowych.<br>
>> - **Słowa kluczowe**: mogą być używane przez wyszukiwarki do częściowego pozycjonowania strony.<br>
>> - **Opis**: dotyczy Twojej strony WWW. Zostanie ona użyta przez wyszukiwarki w ich wynikach.
>>
>> Kliknij na `Dalej`{.action}, aby przejść do etapu 5.
>>
> **Etap 5**
>>
>> W tym ostatnim etapie upewnij się, że wyświetlane informacje są poprawne.
>>
>> ![Etap 5](images/Step5Invi.png){.thumbnail}
>>
>> Kliknij na `Potwierdź`{.action}, aby zatwierdzić Twoją konfigurację.
>> 
>> > [!primary]
>> >
>> > Jeśli wyświetla się komunikat "*Istnieją przekierowania z domen, które chcesz przekierować, które wchodzą w konflikt z przekierowaniami, które chcesz dodać*", możesz zaznaczyć kratkę `Potwierdź usunięcie istniejącego przekierowania`{.action}, aby wymusić zastosowanie przekierowania.
>> >
>> > Uwaga: poprzednia konfiguracja zostanie wyłączona i usunięta.
>> >
>>

### Przekieruj nazwę domeny za pomocą pliku ".htaccess" <a name="htaccess_rewrite"></a>

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy do Twojej dyspozycji tę część przewodnika, aby jak najlepiej wesprzeć Cię w bieżących zadaniach. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/). Niestety firma OVHcloudnie będzie w stanie udzielić wsparcia w zakresie opisanych poniżej udokumentowanych etapów. Więcej informacji znajdziesz w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>

Pliki ".htaccess" to pliki konfiguracyjne, w których można określić komendy. Podczas wykonywania kodu Twojej strony WWW na serwerze WWW (Apache) polecenia zostaną zinterpretowane i tym samym wykonane.<br>
Wśród tych poleceń możesz utworzyć przekierowania.

Manipulowanie plikiem ".htaccess" może spowodować niedostępność Twojej strony WWW. W przypadku wątpliwości należy skontaktować się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/).

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

## Sprawdź również

<a name="go-further"></a>

[Zablokować dostęp do mojej strony dla niektórych adresów IP przez plik ".htaccess" ](https://docs.ovh.com/pl/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/).

[Chroń interfejs administracyjny swojej strony za pomocą ".htaccess" ](https://docs.ovh.com/pl/hosting/hosting-htaccess-w-jaki-sposob-zabezpieczyc-dostep-dostepu-do-katalogu/).

[Stworzenie adresów URL za pomocą mod_rewrite](https://docs.ovh.com/pl/hosting/hosting_www_htaccess_-_generowanie_adresow_za_pomoca_mod_rewrite/)

[Wykonywanie innych operacji za pomocą pliku ".htaccess" ](https://docs.ovh.com/pl/hosting/hosting_www_htaccess_-_inne_operacje/).

[Jak edytować strefę DNS?](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi ofertami pomocy (https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.