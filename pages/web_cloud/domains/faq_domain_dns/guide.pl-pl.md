---
title: "FAQ dotyczący nazw domen i DNS"
excerpt: "Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące nazw domen, serwerów DNS i stref DNS"
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

**Kliknij poniższe pytania, aby wyświetlić wyjaśnienia.**

## Subskrypcja nazwy domeny

/// details | Jak mogę zamówić nazwę domeny w OVHcloud?

Wykonaj poniższe kroki:

1. Przejdź na [stronę OVHcloud](/links/website).
2. Na wyświetlonej stronie, w odpowiednim polu, wpisz nazwę domeny, którą chcesz zarezerwować (np. `domain.tld`), a następnie kliknij przycisk `Szukaj`{.action}.
3. Na nowej stronie nasz interfejs wskaże, czy wybrana nazwa domeny jest dostępna do zakupu. Jeśli jest już zarezerwowana z wpisaną składnią, zmień ją i uruchom nowe wyszukiwanie dostępności.
4. Po znalezieniu dostępnej nazwy domeny kliknij przycisk `Kup`{.action}, a następnie kliknij przycisk `Kontynuuj zamówienie`{.action} w prawej kolumnie.
5. Wybierz dodatkowe opcje lub usługi, które chcesz zamówić wraz z nazwą domeny, a następnie klikaj `Dalej`{.action}, aż proces zamówienia poprosi Cię o zalogowanie się lub utworzenie konta klienta OVHcloud.
6. Po zalogowaniu się na konto klienta OVHcloud możesz dostosować dane kontaktowe (właściciel, administrator, kontakt techniczny) swojej nazwy domeny. Kliknij przycisk `Dalej`{.action}, aby przejść do podsumowania zamówienia.
7. Na stronie `Podsumowanie zamówienia`, w razie potrzeby, możesz zmienić konfigurację DNS, która będzie stosowana do Twojej nazwy domeny, klikając link `Zmień konfigurację`{.action}. Po zakończeniu zmian kliknij przycisk `Zapłać`{.action}, aby przejść do ostatniego etapu zamówienia.

Zapłać za zamówienie, aby rozpocząć rezerwację nazwy domeny i instalację zamówionych usług i opcji.

Po chwili otrzymasz e-mail z potwierdzeniem zamówienia.
Następnie możesz zarządzać swoją nazwą domeny, logując się do [Panelu klienta OVHcloud](/links/manager).

W razie potrzeby utwórz zgłoszenie do działu wsparcia w [Centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help).

///

/// details | Jak mogę kupić nazwę domeny na rynku wtórnym?

Zakup nazwy domeny na rynku wtórnym przebiega tak samo jak subskrypcja nazwy domeny.

Wykonaj poniższe kroki:

1. Przejdź na [stronę OVHcloud](/links/website).
2. Na wyświetlonej stronie, w odpowiednim polu, wpisz nazwę domeny, którą chcesz zarezerwować (np. `domain.tld`), a następnie kliknij przycisk `Szukaj`{.action}.
3. Na nowej stronie nasz interfejs wskaże, czy wybrana nazwa domeny jest dostępna do zakupu. Jeśli jest już zarezerwowana z wpisaną składnią, zmień ją i uruchom nowe wyszukiwanie dostępności.
4. Po znalezieniu dostępnej nazwy domeny kliknij przycisk `Kup`{.action}, a następnie kliknij przycisk `Kontynuuj zamówienie`{.action} w prawej kolumnie.
5. Wybierz dodatkowe opcje lub usługi, które chcesz zamówić wraz z nazwą domeny, a następnie klikaj `Dalej`{.action}, aż proces zamówienia poprosi Cię o zalogowanie się lub utworzenie konta klienta OVHcloud.
6. Po zalogowaniu się na konto klienta OVHcloud możesz dostosować dane kontaktowe (właściciel, administrator, kontakt techniczny) swojej nazwy domeny. Kliknij przycisk `Dalej`{.action}, aby przejść do podsumowania zamówienia.
7. Na stronie `Podsumowanie zamówienia`, w razie potrzeby, możesz zmienić konfigurację DNS, która będzie stosowana do Twojej nazwy domeny, klikając link `Zmień konfigurację`{.action}. Po zakończeniu zmian kliknij przycisk `Zapłać`{.action}, aby przejść do ostatniego etapu zamówienia.

Zapłać za zamówienie, aby rozpocząć rezerwację nazwy domeny i instalację zamówionych usług i opcji.

Po chwili otrzymasz e-mail z potwierdzeniem zamówienia.
Następnie możesz zarządzać swoją nazwą domeny, logując się do [Panelu klienta OVHcloud](/links/manager).

W razie potrzeby utwórz zgłoszenie do działu wsparcia w [Centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help).

///

## Zarządzanie nazwą domeny

/// details | Jak mogę sprawdzić, czy moja nazwa domeny jest zarejestrowana w OVHcloud?

Możesz wykonać zapytanie [WHOIS](/links/web/domains-whois), aby dowiedzieć się, gdzie Twoja nazwa domeny jest zarejestrowana, i zweryfikować, czy jesteś zadeklarowany jako właściciel nazwy domeny.

Każdy rejestrator (taki jak OVHcloud) może wybrać sposób wyświetlania informacji związanych z nazwą domeny w bazie WHOIS.

Po wykonaniu zapytania WHOIS poszukaj w wynikach co najmniej jednego z następujących wierszy:

- Domain Name: ovhcloud.com
- Registrar WHOIS Server: whois.ovh.com
- Registrar URL: https://ovh.com
- Registrar: OVH sas

Jeśli widzisz co najmniej jeden z tych wierszy w wynikach, Twoja nazwa domeny jest zarejestrowana w OVHcloud.

W przeciwnym razie Twoja nazwa domeny jest zarejestrowana u innego rejestratora. Poszukaj wierszy związanych z terminem `Registrar`, aby zidentyfikować rejestratora, u którego zarejestrowana jest Twoja nazwa domeny.

///

/// details | Jak mogę sprawdzić datę wygaśnięcia nazwy domeny?

Najszybszym rozwiązaniem jest wykonanie zapytania [WHOIS](/links/web/domains-whois) dla nazwy domeny. Po wykonaniu zapytania poszukaj w wynikach wiersza odpowiadającego dacie wygaśnięcia (np. `Expiry Date: 2025-09-22T08:00:00Z`, `Registry Expiry Date: 2025-09-22T08:00:00Z` itp.).

Jeśli Twoja nazwa domeny jest zarejestrowana w OVHcloud, kliknij poniższe karty, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Moje rozwiązania i usługi](/links/control-panel/billing-services).
>>
> **Krok 2**
>>
>> W wyświetlonej tabeli znajdź wiersz odpowiadający Twojej nazwie domeny, a następnie zanotuj datę w kolumnie `Data obowiązywania`. Ta data odpowiada dacie wygaśnięcia Twojej nazwy domeny.

///

/// details | Jak mogę zmienić roczną datę wygaśnięcia nazwy domeny?

Roczna data wygaśnięcia nazwy domeny (np. 24 września) jest ustalana na podstawie daty rejestracji (utworzenia) nazwy domeny.

Zazwyczaj roczna data wygaśnięcia nazwy domeny jest taka sama jak data rejestracji nazwy domeny.

Dlatego nie jest możliwa zmiana rocznej daty wygaśnięcia nazwy domeny.

///

<br>

/// details | Jak mogę poprawić literówkę w nazwie domeny?

Po zamówieniu nazwy domeny jest ona rejestrowana na podstawie znaków zdefiniowanych podczas zamówienia. Rejestracja jest przetwarzana przez rejestr rozszerzenia nazwy domeny (np. rejestr *.com*), a opłaty za rezerwację ponosi rejestrator (taki jak OVHcloud).

Nazwa domeny to unikalny adres w Internecie, na przykład: `ovhcloud.com`.
Każda zmiana tej nazwy, czy to znaku, czy rozszerzenia (.com, .fr, .net itp.), tworzy zupełnie inną nazwę domeny.

Dlatego jeśli podczas zamówienia popełniono literówkę, nie można jej zmienić ani poprawić. Konieczne będzie zamówienie nowej nazwy domeny niezależnie od poprzedniej (pod warunkiem, że nowa żądana pisownia nie jest już zarezerwowana przez kogoś innego).

Nazwy domen są uznawane za produkty niestandardowe, ponieważ są rejestrowane specjalnie dla właściciela i zablokowane dla innych od momentu zamówienia. Dlatego po rejestracji nie podlegają zwrotowi.

///

/// details | Jak mogę zmienić już zamówioną nazwę domeny?

Po zamówieniu nazwy domeny jest ona rejestrowana na podstawie znaków zdefiniowanych podczas zamówienia. Rejestracja jest przetwarzana przez rejestr rozszerzenia nazwy domeny (np. rejestr *.com*), a opłaty za rezerwację ponosi rejestrator (taki jak OVHcloud).

Nazwa domeny to unikalny adres w Internecie, na przykład: `ovhcloud.com`.
Każda zmiana tej nazwy, czy to znaku, czy rozszerzenia (.com, .fr, .net itp.), tworzy zupełnie inną nazwę domeny.

Dlatego jeśli podczas zamówienia popełniono literówkę, nie można jej zmienić ani poprawić. Konieczne będzie zamówienie nowej nazwy domeny niezależnie od poprzedniej (pod warunkiem, że nowa żądana pisownia nie jest już zarezerwowana przez kogoś innego).

Nazwy domen są uznawane za produkty niestandardowe, ponieważ są rejestrowane specjalnie dla właściciela i zablokowane dla innych od momentu zamówienia. Dlatego po rejestracji nie podlegają zwrotowi.

///

/// details | Jak mogę usunąć nazwę domeny?

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Moje rozwiązania i usługi](/links/control-panel/billing-services).
>>
> **Krok 2**
>>
>> W wyświetlonej tabeli znajdź wiersz odpowiadający Twojej nazwie domeny, kliknij przycisk `...`{.action} po prawej stronie, a następnie kliknij `Anuluj subskrypcję`{.action}.
>>
> **Krok 3**
>>
>> Na wyświetlonej stronie wybierz tryb anulowania (natychmiast lub w dniu wygaśnięcia usługi), a następnie kliknij przycisk `Tak, anuluję`{.action} na dole.
>>
>> Twoja nazwa domeny zostanie zawieszona w dniu wygaśnięcia. Po tej dacie zostanie **trwale** usunięta w ciągu maksymalnie 60 dni. Termin ten jest określony przez **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**), aby zapewnić pełne usunięcie nazwy domeny i udostępnienie jej do rejestracji przez innego właściciela.

> [!primary]
>
> Po złożeniu wniosku o anulowanie możesz przyspieszyć usunięcie, tworząc zgłoszenie do działu wsparcia w [Centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help). W celu przyspieszenia usunięcia konieczne będzie dostarczenie dokumentów potwierdzających.

> [!success]
>
> Wszystkie szczegóły znajdziesz w naszym przewodniku "[Jak anulować usługi OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services)".

///

/// details | Otrzymałem e-mail dotyczący potwierdzenia informacji o właścicielu mojej nazwy domeny. Co powinienem zrobić?

Jeśli masz wątpliwości co do autentyczności otrzymanego e-maila, zapoznaj się z naszym przewodnikiem "[Uwaga na oszustwa — rozpoznawanie fałszywych e-maili i phishingu](/pages/account_and_service_management/account_information/phishing_care)".

Zgodnie z dyrektywą **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) z dnia 01.09.2014, rejestratorzy nazw domen (np. OVHcloud) są zobowiązani do weryfikacji ważności danych kontaktowych właścicieli nazw domen. OVHcloud wysyła wówczas e-mail do właściciela nazwy domeny na adres kontaktowy zadeklarowany w OVHcloud.

Otrzymasz ten e-mail po wykonaniu jednej z następujących czynności:

- Rejestracja nowej nazwy domeny.
- Transfer nazwy domeny.
- Zmiana danych kontaktowych powiązanych z nazwą domeny.

Ten e-mail zawiera link do szybkiej weryfikacji danych kontaktowych jako prawowitego właściciela nazwy domeny.

**Ważne:** Weryfikacja musi zostać zakończona w ciągu 15 dni. W przeciwnym razie nazwa domeny zostanie technicznie zawieszona. Pozostanie ona umownie na Twoje nazwisko, ale nie będzie już dostępna w Internecie. Odwiedzający Twoją stronę internetową zobaczą komunikat o błędzie.

W ciągu pierwszych 15 dni możesz otrzymać następujące e-maile:

- **Dzień 0**: Natychmiast po zamówieniu nazwy domeny lub zmianie jej danych kontaktowych Ty (lub osoba zarejestrowana jako właściciel nazwy domeny) otrzymasz pierwszy e-mail z linkiem weryfikacyjnym.
- **Dni 4, 9 i 13 (e-maile przypominające)**: Jeśli nazwa domeny nie została jeszcze zweryfikowana, otrzymasz e-mail ponownie.
- **Dzień 14**: Jeśli nazwa domeny nadal nie została zweryfikowana, e-mail zostanie wysłany po raz ostatni. Ponadto e-mail zostanie również wysłany na adres administratora, aby poinformować go, że dane kontaktowe nie zostały potwierdzone.
- **Dzień 15**: Jeśli właściciel nazwy domeny jeszcze nie odpowiedział, wysyłamy e-mail do administratora nazwy domeny, informując go o sytuacji i dezaktywacji nazwy domeny.

Po upływie tych 15 dni system wysyła dodatkowe e-maile (do 9 e-maili) przed usunięciem nazwy domeny. Usunięcie nastąpi 60 dni po dniu 0.

> [!warning]
>
> W zależności od rozszerzenia nazwy domeny (np. *.com*, *.net* itp.) niektóre z wyżej wymienionych terminów mogą się różnić. Zdecydowanie zalecamy przeprowadzenie weryfikacji danych kontaktowych w rejestrze rozszerzenia Twojej nazwy domeny.

///

/// details | Nie otrzymałem e-maila z potwierdzeniem informacji o właścicielu mojej nazwy domeny i jest ona zawieszona. Co powinienem zrobić?

Jeśli nie otrzymałeś e-maila weryfikacyjnego dotyczącego właściciela nazwy domeny, sprawdź następujące punkty:

1. Adres e-mail zadeklarowany dla właściciela nazwy domeny jest prawidłowy i funkcjonalny.
2. E-mail weryfikacyjny nie znajduje się w folderze spam/śmieci.

Po potwierdzeniu powyższych dwóch punktów, jeśli nadal nie możesz odnaleźć e-maila weryfikacyjnego, zalecamy utworzenie zgłoszenia do działu wsparcia w [Centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help) w celu ponownego wysłania e-maila.

///

/// details | Czym jest IDN (Internationalized Domain Name)?

Początkowo nazwy domen mogły zawierać jedynie określone znaki **ASCII** (takie jak 26 liter alfabetu łacińskiego). **I**nternationalized **D**omain **N**ame (**IDN**) umożliwia użycie znaków specjalnych lub akcentowanych, a także innych alfabetów (np. *cyrylicy*).

W OVHcloud można zamawiać nazwy IDN i używać ich jak zwykłych nazw domen z naszymi innymi usługami (hosting, strefy DNS itp.<sup>1</sup>).

Po zamówieniu nazwy IDN wyświetlają się w [Panelu klienta OVHcloud](/links/manager) w formacie **xn--**.

Mimo że Twoja nazwa domeny jest wyświetlana w [notacji międzynarodowej (IDN)](https://en.wikipedia.org/wiki/Internationalized_domain_name) w [Panelu klienta OVHcloud](/links/manager), będzie funkcjonować i wyświetlać się normalnie w innych miejscach. Adres Twojej strony internetowej będzie wyświetlany zgodnie z żądaniem. Adresy e-mail również będą wyświetlane Twoim kontaktom zgodnie z oczekiwaniami.

> [!alert]
>
> <sup>1</sup>: Nie zaleca się używania adresu e-mail z nazwą domeny IDN w kliencie poczty (Outlook, macOS Mail itp.). Niektóre klienty poczty nie obsługują jeszcze nazw domen ze znakami akcentowanymi, co blokuje transmisję e-maili. Gdy nadawca próbuje wysłać do Ciebie e-mail, otrzymuje automatyczną wiadomość, że Twój adres e-mail nie istnieje.
>
> **Zalecamy zarezerwowanie tej samej nazwy domeny bez znaków akcentowanych oprócz nazwy domeny z akcentami, aby uniknąć problemów z kompatybilnością e-maili.**

///

/// details | Jak mogę poprawić IDN (Internationalized Domain Name)?

Podobnie jak w przypadku zwykłych nazw domen, po zamówieniu nazwa domeny lub IDN jest rejestrowana na podstawie znaków zdefiniowanych podczas zamówienia.

Dlatego jeśli podczas zamówienia popełniono literówkę, nie można jej poprawić. Konieczne będzie zamówienie nowej nazwy domeny niezależnie od poprzedniej (pod warunkiem, że nowa żądana pisownia nie jest już zarezerwowana przez kogoś innego).

///

/// details | Jak mogę odnowić pojedynczą nazwę domeny w pakiecie Alldom?

W tym celu musisz być zadeklarowany co najmniej jako [kontakt "Płatności"](/pages/account_and_service_management/account_information/managing_contacts) dla danej nazwy domeny. Następnie musisz zmienić tryb odnawiania nazwy domeny na **automatyczne odnawianie**.

W tym celu kliknij poniższe karty, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Moje rozwiązania i usługi](/links/control-panel/billing-services).
>>
> **Krok 2**
>>
>> W wyświetlonej tabeli, po prawej stronie odpowiedniej nazwy domeny, kliknij przycisk `...`{.action} w kolumnie `Działania`, a następnie kliknij `Konfiguruj odnawianie`{.action}. Możesz następnie skonfigurować odnawianie tej nazwy domeny w trybie **automatycznego odnawiania**.

> [!primary]
>
> Jeśli posiadasz starszy plan hostingowy z bezpłatną nazwą domeny i zmodyfikujesz ten plan, w niektórych przypadkach może to spowodować utratę bezpłatnego statusu nazwy domeny.
>
> W razie wątpliwości zalecamy utworzenie zgłoszenia do działu wsparcia w [Centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help), podając nazwę domeny i odpowiedni hosting.

> [!success]
>
> Wszystkie szczegóły znajdziesz w naszym przewodniku "[Jak odnawiać usługi OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)".

///

## Transfer nazwy domeny

/// details | Czy moja nazwa domeny jest transferowalna po zmianie właściciela?

**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) wdrożyła środki bezpieczeństwa zapobiegające nieautoryzowanym lub nadużywającym transferom lub zmianom właściciela nazw domen.

ICANN określiła niezbywalny okres **60** dni pomiędzy każdą operacją, która może zostać wykonana na nazwie domeny (utworzenie, zmiana właściciela, transfer).

Zasady określone przez ICANN muszą być ściśle przestrzegane przez rejestratorów (takich jak OVHcloud).

Dlatego nie masz innego wyjścia, jak poczekać do końca 60-dniowego okresu, aby przetransferować nazwę domeny po zmianie właściciela.

///

/// details | Moja nazwa domeny jest zablokowana przed transferem na 60 dni. Co powinienem zrobić?

**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) wdrożyła środki bezpieczeństwa zapobiegające nieautoryzowanym lub nadużywającym transferom lub zmianom właściciela nazw domen.

ICANN określiła niezbywalny okres **60** dni pomiędzy każdą operacją, która może zostać wykonana na nazwie domeny (utworzenie, zmiana właściciela, transfer).

Zasady określone przez ICANN muszą być ściśle przestrzegane przez rejestratorów (takich jak OVHcloud).

Dlatego nie masz innego wyjścia, jak poczekać do końca 60-dniowego okresu, aby wykonać nową operację (zmianę właściciela lub transfer) na nazwie domeny.

///

/// details | Nie mogę znaleźć mojej nazwy domeny w Panelu klienta. Co powinienem zrobić?

Najpierw wykonaj zapytanie [WHOIS](/links/web/domains-whois), aby dowiedzieć się, gdzie Twoja nazwa domeny jest zarejestrowana, i zweryfikować, czy jesteś zadeklarowany jako właściciel nazwy domeny.

Przypadek 1.A — Twoja nazwa domeny jest zarejestrowana w OVHcloud i jesteś zadeklarowany jako właściciel:

Wykonaj [procedurę odzyskania kontaktu](/links/transversal/procedure-contact-change), aby Twoja nazwa domeny była w pełni zarządzana w [Panelu klienta OVHcloud](/links/manager). W ten sposób nie będziesz musiał kontaktować się z osobą, która wcześniej zarządzała Twoją nazwą domeny.

Przypadek 1.B — Twoja nazwa domeny jest zarejestrowana w OVHcloud i nie jesteś zadeklarowany jako właściciel:

Zgodnie z **O**gólnym **R**ozporządzeniem o **O**chronie **D**anych (**RODO**) OVHcloud nie może udostępniać informacji o osobie lub organizacji zarządzającej nazwą domeny w OVHcloud.

Możesz jednak spróbować skontaktować się z osobą lub organizacją zarządzającą nazwą domeny, postępując zgodnie z instrukcjami w [tym formularzu](/links/web/contact-domain-owner).

Przypadek 2 — Twoja nazwa domeny nie jest zarejestrowana w OVHcloud:

Skontaktuj się bezpośrednio z rejestratorem (wskazanym w wierszach zaczynających się od terminu `Registrar`) Twojej nazwy domeny, aby kontynuować poszukiwania. Jeśli nazwa domeny nie jest zarejestrowana w OVHcloud, nie będziemy w stanie pomóc w tej kwestii.

///

/// details | Nie mogę skontaktować się z osobą zarządzającą moją nazwą domeny. Co powinienem zrobić?

Najpierw wykonaj zapytanie [WHOIS](/links/web/domains-whois), aby zweryfikować, czy jesteś zadeklarowany jako właściciel nazwy domeny.

Przypadek 1 — Jesteś zadeklarowany jako właściciel nazwy domeny:

Wykonaj [procedurę odzyskania kontaktu](/links/transversal/procedure-contact-change), aby Twoja nazwa domeny była w pełni zarządzana w [Panelu klienta OVHcloud](/links/manager). W ten sposób nie będziesz musiał kontaktować się z osobą, która wcześniej zarządzała Twoją nazwą domeny.

Przypadek 2 — Nie jesteś zadeklarowany jako właściciel nazwy domeny:

Zgodnie z **O**gólnym **R**ozporządzeniem o **O**chronie **D**anych (**RODO**) OVHcloud nie może udostępniać informacji o osobie lub organizacji zarządzającej nazwą domeny w OVHcloud.

Możesz jednak spróbować skontaktować się z osobą lub organizacją zarządzającą nazwą domeny, postępując zgodnie z instrukcjami w [tym formularzu](/links/web/contact-domain-owner).

///

/// details | Czy mogę sprzedać swoją nazwę domeny?

Obecnie OVHcloud nie obsługuje bezpośrednio sprzedaży już zarejestrowanych nazw domen. Nie oferujemy tego typu usługi.

Jeśli jednak chcesz wystawić swoją nazwę domeny na sprzedaż na rynku wtórnym, skontaktuj się z jednym z naszych partnerów:

- [Afternic](https://www.afternic.com).
- [Sedo](https://sedo.com).

Jeśli chcesz sprzedać swoją nazwę domeny, możesz dodać ją na tych platformach. Po dodaniu autoryzowani dostawcy zaoferują Twoją nazwę domeny po cenie ustalonej przez Ciebie na jednej z powyższych platform.

///

## Strefa DNS

> [!primary]
>
> Modyfikacja strefy DNS jest wrażliwą operacją i może spowodować przerwy w działaniu usług powiązanych z nazwą domeny (hosting, e-mail itp.). W razie wątpliwości skontaktuj się ze [specjalistycznym dostawcą](/links/partner).

/// details | Czym jest strefa DNS?

Strefa DNS nazwy domeny zawiera konfigurację mającą do niej zastosowanie. Składa się z informacji technicznych zwanych *rekordami DNS*. Strefa DNS pełni funkcję centrum routingu, kierując ruch do odpowiednich usług powiązanych z nazwą domeny.

Możesz na przykład określić:

- Adres IP (rekordy DNS typu *A* i *AAAA*) Twojego hostingu, aby wyświetlić stronę internetową pod nazwą domeny.
- Serwery e-mail (rekordy DNS typu *MX*), na które nazwa domeny powinna przekierowywać otrzymywane e-maile.
- Informacje związane z bezpieczeństwem/uwierzytelnianiem usług (hosting, serwer WWW, serwer e-mail itp.) powiązanych z nazwą domeny (rekordy DNS typu *SPF*, *DKIM*, *DMARC* itp.).

Strefa DNS jest hostowana/zarejestrowana na **serwerach DNS**. Te **serwery DNS** muszą być zadeklarowane u rejestratora nazwy domeny, aby korzystać ze strefy DNS, którą hostują.

> [!success]
>
> Wszystkie szczegóły znajdziesz w naszym przewodniku "[Wszystko o strefach DNS](/pages/web_cloud/domains/dns_zone_general_information)".

///

/// details | Czym jest rekord DNS?

Rekordy DNS służą na przykład do:

- Powiązania nazwy domeny z adresem IP, umożliwiając użytkownikom dostęp do strony internetowej lub serwera zdalnego.
- Powiązania nazwy domeny z innymi zasobami online za pomocą nazwy domeny (łatwiejszej do zapamiętania) zamiast adresu IP.
- Walidacji konfiguracji powiązania lub bezpieczeństwa, w szczególności dla usług e-mail i hostingu współdzielonego.

Istnieje wiele rekordów DNS. Każdy z nich ma określoną funkcję w rozwiązywaniu DNS. W OVHcloud są one podzielone na trzy kategorie:

- **Rekordy wskaźnikowe**: `A`, `AAAA`, `NS`, `CNAME` i `DNAME`.
- **Rekordy rozszerzone**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` i `HTTPS`.
- **Rekordy e-mail**: `MX`, `SPF`, `DKIM` i `DMARC`.

> [!success]
>
> Więcej szczegółów znajdziesz w następujących przewodnikach:
>
> - Informacje ogólne:
>     - [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)
> - Rekordy wskaźnikowe DNS:
>     - [Jak dodać rekord DNS A dla nazwy domeny](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Jak dodać rekord DNS AAAA dla nazwy domeny](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Jak dodać rekord DNS CNAME dla nazwy domeny](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Rozszerzone rekordy DNS:
>     - [Jak dodać rekord DNS TXT dla nazwy domeny](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Rekordy DNS e-mail:
>     - [Konfiguracja rekordu MX do zarządzania e-mailem](/pages/web_cloud/domains/dns_zone_mx)
>     - [Jak poprawić bezpieczeństwo e-maili za pomocą rekordu SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Jak poprawić bezpieczeństwo e-maili za pomocą rekordu DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Jak poprawić bezpieczeństwo e-maili za pomocą rekordu DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Jakie rekordy DNS są dostępne w strefie DNS OVHcloud?

Kliknij poniższe karty, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Po prawej stronie lub poniżej tabeli kliknij `Dodaj rekord`{.action}.
>>
>> Zobaczysz wszystkie rekordy DNS, które możesz dodać za pomocą asystenta konfiguracji OVHcloud:
>>
>> - **Rekordy wskaźnikowe**: `A`, `AAAA`, `NS`, `CNAME` i `DNAME`.
>> - **Rekordy rozszerzone**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` i `HTTPS`.
>> - **Rekordy e-mail**: `MX`, `SPF`, `DKIM` i `DMARC`.
>>
>> > [!primary]
>> >
>> > Jeśli chcesz dodać rekord DNS, który nie jest wymieniony na liście, zamknij okno otwarte po kliknięciu przycisku `Dodaj rekord`{.action} i kliknij przycisk `Zmień w trybie tekstowym`{.action} po prawej stronie lub poniżej tabeli.
>> >
>> > Możesz następnie ręcznie dodać wybrany rekord DNS.

> [!success]
>
> Więcej szczegółów znajdziesz w następujących przewodnikach:
>
> - Informacje ogólne:
>     - [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)
> - Rekordy wskaźnikowe DNS:
>     - [Jak dodać rekord DNS A dla nazwy domeny](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Jak dodać rekord DNS AAAA dla nazwy domeny](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Jak dodać rekord DNS CNAME dla nazwy domeny](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Rozszerzone rekordy DNS:
>     - [Jak dodać rekord DNS TXT dla nazwy domeny](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Rekordy DNS e-mail:
>     - [Konfiguracja rekordu MX do zarządzania e-mailem](/pages/web_cloud/domains/dns_zone_mx)
>     - [Jak poprawić bezpieczeństwo e-maili za pomocą rekordu SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Jak poprawić bezpieczeństwo e-maili za pomocą rekordu DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Jak poprawić bezpieczeństwo e-maili za pomocą rekordu DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Czy mogę zmienić serwery DNS zadeklarowane w mojej strefie DNS OVHcloud?

Ręczna modyfikacja rekordów DNS typu NS dla nazwy domeny w strefie DNS OVHcloud nie jest zalecana, ponieważ uniemożliwiłoby to rozwiązywanie odpowiedniej strefy DNS.

Jeśli chcesz zmodyfikować konfigurację rekordów DNS typu NS dla swojej nazwy domeny, prawdopodobnie chcesz zmienić zadeklarowane serwery DNS.

> [!primary]
>
> Aby zmienić serwery DNS dla nazwy domeny w OVHcloud, strefa DNS musi już istnieć na nowych serwerach DNS.
> Ponadto musisz zweryfikować w tej samej strefie DNS, czy rekordy DNS typu NS odpowiadają odpowiednim serwerom DNS.

W tym celu kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Wybierz zakładkę `Serwery DNS`{.action} po przejściu na odpowiednią nazwę domeny.
>>
> **Krok 3**
>>
>> Kliknij przycisk `Zmień serwery DNS`{.action} znajdujący się po prawej stronie tabeli "Serwery DNS". W zależności od rozdzielczości ekranu przycisk może znajdować się poniżej tabeli.
>>
>> Na wyświetlonej stronie możesz zmienić serwery DNS swojej nazwy domeny.

> [!primary]
>
> Propagacja zmian serwerów DNS zadeklarowanych dla nazwy domeny może trwać do **48** godzin.

Jeśli wystąpi błąd, zalecamy utworzenie zgłoszenia do działu wsparcia w [Centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help), podając następujące informacje:

- Nazwy serwerów DNS, które chcesz skonfigurować.
- Napotkany komunikat o błędzie.

> [!success]
>
> Wszystkie szczegóły znajdziesz w naszym przewodniku "[Jak zmienić serwery DNS nazwy domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Jaka jest różnica między rekordem A (IPv4) a rekordem AAAA (IPv6)?

Internet działa od początku lat 90. w oparciu o standard IPv4. Standard ten przypisuje adres IP w formacie X.X.X.X (gdzie każde "X" to liczba od 0 do 255) każdemu urządzeniu podłączonemu do Internetu (serwery, komputery, smartfony, tablety itp.). Standard ten ogranicza jednak liczbę podłączonych urządzeń do około 4 miliardów.

Aby rozwiązać ten problem, wprowadzono protokół IPv6, umożliwiający podłączenie do Internetu do 340 sekstylionów urządzeń.

Adresy IPv4 są obecnie mniej dostępne, co utrudnia dodawanie nowych urządzeń do Internetu za pomocą IPv4. Jednak połączenia IPv6 są przydatne tylko wtedy, gdy np. Twoja strona internetowa jest również dostępna za pośrednictwem tego protokołu.

Rekordy DNS A i AAAA to dwa typy rekordów zasobów służących do powiązania nazwy domeny z adresem IP.

Ich główne różnice dotyczą typu używanego adresu IP:

- **Rekord A** (zwany też "rekordem hosta"): Wiąże nazwę domeny z adresem IPv4 (np. 213.0.113.0). Adresy IPv4 to adresy 32-bitowe, zazwyczaj zapisywane w notacji dziesiętnej z kropkami.
- **Rekord AAAA** (zwany też "rekordem quad A"): Wiąże nazwę domeny z adresem IPv6 (np. 2001:db8:1:1b00:213:0:113:0). Adresy IPv6 to adresy 128-bitowe, zazwyczaj zapisywane w notacji szesnastkowej.

Innymi słowy, rekordy A są używane dla adresów IPv4, a rekordy AAAA dla adresów IPv6. Oba typy rekordów kierują ruch do określonego adresu IP, ale są używane dla różnych wersji protokołu internetowego.

Należy pamiętać, że nazwa domeny może mieć zarówno rekordy A, jak i AAAA, co pozwala na dostępność zarówno w sieciach IPv4, jak i IPv6. Jest to znane jako "dual stack" i stanowi powszechną praktykę dla stron internetowych i usług, które mają być dostępne zarówno w sieciach IPv4, jak i IPv6.

> [!success]
>
> Więcej szczegółów znajdziesz w następujących przewodnikach:
>
> - [Jak dodać rekord DNS A dla nazwy domeny](/pages/web_cloud/domains/dns_zone_a_record_creation)
> - [Jak dodać rekord DNS AAAA dla nazwy domeny](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
> - [Konfiguracja IPv6 dla strony internetowej](/pages/web_cloud/web_hosting/configure_ipv6)

///

/// details | Jak mogę skonfigurować rekord PTR dla mojego zewnętrznego adresu IP w OVHcloud?

W OVHcloud konfiguracje **P**oin**T**er **R**ecord (**PTR**) nie mogą być zarządzane bezpośrednio w naszych strefach DNS.

Aby skonfigurować rekord reverse/PTR dla zewnętrznego adresu IP, skontaktuj się ze swoim **d**ostawcą **u**sług **i**nternetowych (**ISP**), ponieważ jest on odpowiedzialny za zarządzanie rekordami reverse DNS dla przydzielonych przez niego adresów IP.

> [!success]
>
> Wszystkie szczegóły znajdziesz w naszym przewodniku "[Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)".

///

/// details | Jak mogę zmienić domyślny TTL w mojej strefie DNS OVHcloud?

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Po prawej stronie lub poniżej tabeli kliknij `Zmień domyślny TTL`{.action}.
>>
> **Krok 3**
>>
>> W otwartym oknie dostosuj wartość pod etykietą `Domyślny TTL` do swoich potrzeb, a następnie kliknij `Zmień`{.action}.

> [!primary]
>
> Propagacja zmiany strefy DNS może trwać do **24** godzin.

///

/// details | Czym jest rekord SOA DNS?

Rekord DNS **S**tart **O**f **A**uthority (**SOA**) zawiera zestaw elementów związanych z konfiguracją DNS nazwy domeny.

Poniżej wynik zapytania SOA dla nazwy domeny `domain.tld`.

```bash
              ;; ANSWER SECTION:

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300
```

|Element w wyniku|Opis|Odpowiednik w powyższym przykładzie|
|---|---|---|
|**NS (Name Server)**|Główny serwer DNS zadeklarowany dla nazwy domeny `domain.tld`.|`dns200.anycast.me.`|
|**Adres e-mail**|Adres e-mail administratora strefy DNS.|`tech.ovh.net.` (kropkę pomiędzy `tech` a `ovh` należy zastąpić znakiem `@`).|
|**Numer seryjny**|Unikalny numer, który jest inkrementowany przy każdej modyfikacji strefy DNS.<br>Zazwyczaj składa się z daty aktualizacji w formacie `RRRRMMDD`, po której następuje liczba aktualizacji wykonanych tego dnia.|`2025091801`: Tutaj 2 aktualizacje (`00` oznacza 1, `01` oznacza 2 itd.) zostały wykonane 18.09.2025.|
|**Czas odświeżania**|Interwał (w sekundach) między każdym odświeżeniem wtórnych serwerów DNS (część sieci DNS) z głównym serwerem DNS.|`86400` (24 godziny).|
|**Czas ponownej próby**|Interwał (w sekundach) między każdą ponowną próbą odświeżenia ustawień wtórnych serwerów DNS (część sieci DNS) z głównym serwerem DNS, jeśli ten nie odpowiada lub jest niedostępny.|`3600` (1 godzina).|
|**Czas wygaśnięcia**|Czas (w sekundach), po którym wtórne serwery DNS (część sieci DNS) przestają odpowiadać na zapytania DNS, jeśli główny serwer DNS nie aktualizuje ich już.|`3600000` (1000 godzin, 41,67 dnia).|
|**Minimalny TTL**|Minimalny czas życia (w sekundach), przez który rekordy DNS w strefie są buforowane na wtórnych serwerach DNS (część sieci DNS).|`300` (5 minut).|

///

<br>

/// details | Jak mogę zweryfikować konfigurację mojej strefy DNS?

Oto kilka metod weryfikacji konfiguracji strefy DNS:

- **Narzędzie weryfikacji online**: Kilka narzędzi online może zweryfikować konfigurację strefy DNS. Użyj przeglądarki internetowej (Chrome, Edge, Firefox, Safari itp.), aby wyszukać odpowiednie słowa kluczowe (np. "weryfikacja propagacji DNS") w wyszukiwarce.

- **Polecenie "dig"**: Jeśli masz dostęp do *terminala* w systemie Linux lub macOS, możesz użyć polecenia `dig`, aby zweryfikować konfigurację strefy DNS w sieci DNS.

- **Polecenie "nslookup"**: Polecenie `nslookup` jest dostępne w większości systemów operacyjnych i może być również używane do weryfikacji konfiguracji strefy DNS.

- **Z Panelu klienta OVHcloud**: Jeśli aktywna strefa DNS Twojej nazwy domeny jest zarządzana przez OVHcloud, przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), aby wyświetlić wszystkie rekordy DNS zadeklarowane dla Twojej nazwy domeny.

> [!success]
>
> Wszystkie szczegóły znajdziesz w naszym przewodniku "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Jak mogę sprawdzić propagację zmian dokonanych w mojej strefie DNS?

> [!primary]
>
> Przed kontynuowaniem pamiętaj, że:
>
> - Propagacja zmiany dokonanej w strefie DNS może trwać do **24** godzin.
> - Propagacja zmiany serwera DNS dla nazwy domeny może trwać do **48** godzin.

Możesz zweryfikować prawidłowość propagacji DNS za pomocą rekordu DNS **S**tart **O**f **A**uthority (**SOA**).

Najpierw otwórz kompatybilny terminal na swoim komputerze i wykonaj następujące polecenie (zastąp `domain.tld` swoją nazwą domeny):

```bash
dig domain.tld soa
```

> [!primary]
>
> Systemy operacyjne Linux i macOS natywnie obsługują kompatybilny terminal do wykonania tego polecenia. Jeśli używasz innego systemu operacyjnego, takiego jak Windows, musisz najpierw zainstalować kompatybilny terminal, aby wykonać polecenie.
>
> Ponadto istnieją również narzędzia online do weryfikacji propagacji DNS.

Po wykonaniu polecenia otrzymasz wynik podobny do następującego:

```bash
              ;; ANSWER SECTION:

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300
```

Z tego wyniku pobierz **numer seryjny** (w naszym przykładzie: `2025091801`).

Ma on format `RRRRMMDDNN`, gdzie:

- `RRRRMMDD`: Oznacza datę (rok, miesiąc i dzień) ostatniej propagowanej aktualizacji DNS dla nazwy domeny.
- `NN`: Oznacza liczbę aktualizacji wykonanych w danym dniu. Na przykład, jeśli w danym dniu wykonano tylko jedną aktualizację, będzie miała wartość `00`. Jeśli dwie aktualizacje zostały wykonane tego samego dnia, będzie miała wartość `01` itd.

Po pobraniu numeru seryjnego kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Po prawej stronie lub poniżej tabeli kliknij `Zmień w trybie tekstowym`{.action}.
>>
> **Krok 3**
>>
>> W otwartym oknie znajdź drugi wiersz, który w naszym przykładzie odpowiadałby: `@	IN SOA dns200.anycast.me. tech.ovh.net. (2025091801 86400 3600 3600000 60)`.
>>
> **Krok 4**
>>
>> Porównaj numer seryjny pobrany z terminala z numerem wyświetlonym w Panelu klienta OVHcloud.
>>
>> **Przypadek 1** — Oba numery seryjne są zgodne:
>>
>> Oznacza to, że propagacja DNS przebiega prawidłowo. Nie musisz nic więcej robić.
>>
>> **Przypadek 2** — Oba numery seryjne są różne:
>>
>> Oznacza to, że:
>>
>> - Propagacja DNS Twoich zmian nie została jeszcze zakończona (jesteś w standardowym okresie propagacji). W takim przypadku poczekaj, aż propagacja DNS zostanie w pełni zakończona (**24** godziny na zmianę strefy DNS i **48** godzin na zmianę serwera DNS), a następnie powtórz procedurę.
>> - Propagacja DNS nie przebiega prawidłowo. W takim przypadku, w oknie `Zmień w trybie tekstowym`{.action} otwartym w kroku **3**, kliknij bezpośrednio **bez dokonywania żadnych zmian** na `Dalej`{.action}, a następnie na `Potwierdź`{.action}. Zostanie wówczas zainicjowana nowa propagacja DNS.

///

/// details | Jak mogę przywrócić strefę DNS?

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Po prawej stronie lub poniżej tabeli kliknij `Wyświetl historię strefy DNS`{.action}.
>>
> **Krok 3**
>>
>> W tabeli na wyświetlonej stronie zidentyfikuj wiersz odpowiadający kopii zapasowej strefy DNS, którą chcesz przywrócić, a następnie kliknij ikonę w kolumnie `Przywróć`{.action}. Bieżąca konfiguracja strefy DNS zostanie zastąpiona wybraną kopią zapasową.

> [!primary]
>
> Propagacja zmiany strefy DNS może trwać do **24** godzin.

> [!success]
>
> Wszystkie szczegóły znajdziesz w naszym przewodniku "[Zarządzanie historią strefy DNS](/pages/web_cloud/domains/dns_zone_history)".

///

/// details | Jak mogę pobrać kopię mojej strefy DNS?

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Po prawej stronie lub poniżej tabeli kliknij `Wyświetl historię strefy DNS`{.action}.
>>
> **Krok 3**
>>
>> W tabeli na wyświetlonej stronie zidentyfikuj wiersz odpowiadający kopii zapasowej strefy DNS, którą chcesz pobrać, a następnie kliknij ikonę w kolumnie `Pobierz`{.action}. Kopia strefy DNS zostanie pobrana w formacie *.txt*.

> [!success]
>
> Wszystkie szczegóły znajdziesz w naszym przewodniku "[Zarządzanie historią strefy DNS](/pages/web_cloud/domains/dns_zone_history)".

///

/// details | Czy mogę utworzyć strefę DNS dla subdomeny?

Możesz utworzyć strefę DNS dla subdomeny.

W tym celu kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie kliknij przycisk `Zamów`{.action} w prawym górnym rogu wyświetlonej tabeli.
>>
> **Krok 2**
>>
>> Na wyświetlonej stronie wpisz subdomenę (np. *www.domain.tld*), dla której chcesz utworzyć strefę DNS OVHcloud. Poczekaj chwilę, aż narzędzie zweryfikuje subdomenę.
>>
> **Krok 3**
>>
>> Po pomyślnej weryfikacji wybierz, czy chcesz aktywować minimalne wpisy dla tworzonej strefy DNS. Ten wybór nie jest ostateczny, ponieważ zawsze możesz później [edytować rekordy strefy DNS](/pages/web_cloud/domains/dns_zone_edit).
>>
> **Krok 4**
>>
>> Po dokonaniu wyboru przejdź przez kolejne etapy aż do utworzenia strefy DNS.

Ta strefa DNS zostanie zainstalowana na 2 serwerach DNS OVHcloud. Musisz zadeklarować nazwy tych dwóch serwerów w aktywnej strefie DNS nazwy domeny, z której pochodzi Twoja subdomena (np. *www.domain.tld* jest subdomeną nazwy domeny *domain.tld*).

Aby pobrać nazwy 2 serwerów DNS, kliknij poniższe karty, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią subdomenę.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> W lewym górnym rogu wyświetlonej strony pobierz 2 nazwy serwerów DNS wymienione pod etykietą `Name Servers`. Mają one jeden z dwóch następujących formatów:
>>
>> - `dnsXXX.ovh.net` i `nsXXX.ovh.net` **lub** `dnsXXX.ovh.ca` i `nsXXX.ovh.ca` (gdzie każde `X` oznacza cyfrę od `0` do `9`).
>> - `dns200.ovh.me` i `ns200.anycast.me`.

Po uzyskaniu 2 serwerów DNS zadeklaruj je za pomocą dwóch rekordów DNS typu NS w aktywnej strefie DNS nazwy domeny, z której pochodzi Twoja subdomena.

Przypadek 1 — Aktywna strefa DNS nazwy domeny, z której pochodzi Twoja subdomena, jest w OVHcloud:

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Po prawej stronie lub poniżej tabeli kliknij `Dodaj rekord`{.action}, a następnie wybierz typ rekordu DNS `NS`{.action}, aby zadeklarować serwer DNS.
>>
> **Krok 3**
>>
>> W otwartym oknie wpisz subdomenę w polu `Sub-domain *`{.action} (np. wpisz **tylko** *www*, jeśli Twoja nazwa domeny to *domain.tld*, a pełna subdomena to *www.domain.tld*). W polu `Target *`{.action} wpisz **jeden** z 2 serwerów DNS.
>>
> **Krok 4**
>>
>> Kliknij `Dalej`{.action}, a następnie `Potwierdź`{.action}.
>>
>> Powtórz procedurę dla drugiego serwera DNS do zadeklarowania.

Przypadek 2 — Aktywna strefa DNS nazwy domeny, z której pochodzi Twoja subdomena, nie jest w OVHcloud:

Musisz zadeklarować 2 serwery DNS dla swojej subdomeny bezpośrednio u dostawcy DNS Twojej nazwy domeny (z której pochodzi Twoja subdomena).

> [!primary]
>
> W obu przypadkach propagacja zmiany strefy DNS może trwać do **24** godzin.

> [!success]
>
> Więcej szczegółów znajdziesz w następujących przewodnikach:
>
> - [Tworzenie strefy DNS OVHcloud dla nazwy domeny](/pages/web_cloud/domains/dns_zone_create)
> - [Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///

/// details | Jak mogę przekierować wszystkie subdomeny tej samej nazwy domeny na ten sam adres IP?

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Po prawej stronie lub poniżej tabeli kliknij `Dodaj rekord`{.action}, a następnie wybierz typ rekordu DNS `A`{.action} dla adresu IPv4 (np. `203.0.113.0`) lub typ rekordu DNS `AAAA`{.action} dla adresu IPv6 (np. `2001:db8:1:1b00:203:0:113:0`).
>>
> **Krok 3**
>>
>> W otwartym oknie, w polu `Sub-domain *`{.action}, wpisz wartość `*`. Gwiazdka `*` reprezentuje wszystkie subdomeny (np. `www.domain.tld` lub `ovhcloud.domain.tld`) Twojej nazwy domeny. Uzupełnij pole `Target *`{.action} żądanym adresem IP.
>>
> **Krok 4**
>>
>> Kliknij `Dalej`{.action}, a następnie `Potwierdź`{.action}.

> [!primary]
>
> Propagacja zmiany strefy DNS może trwać do **24** godzin.

> [!success]
>
> Wszystkie szczegóły znajdziesz w naszym przewodniku "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Czy mogę skonfigurować wildcard w mojej strefie DNS?

Skonfigurowanie wildcard w strefie DNS OVHcloud jest możliwe.

W tym celu kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Po prawej stronie lub poniżej tabeli kliknij `Dodaj rekord`{.action}, a następnie wybierz typ rekordu DNS, dla którego chcesz skonfigurować wildcard.
>>
> **Krok 3**
>>
>> W otwartym oknie, w polu `Sub-domain *`{.action}, wpisz wartość `*`. Gwiazdka `*` reprezentuje wszystkie subdomeny (np. `www.domain.tld` lub `ovhcloud.domain.tld`) Twojej nazwy domeny. Uzupełnij pozostałe pola żądanymi wartościami.
>>
> **Krok 4**
>>
>> Kliknij `Dalej`{.action}, a następnie `Potwierdź`{.action}.

> [!primary]
>
> Propagacja zmiany strefy DNS może trwać do **24** godzin.

> [!success]
>
> Wszystkie szczegóły znajdziesz w naszym przewodniku "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

<br>

/// details | Przypadkowo usunąłem moją strefę DNS i chcę ją przywrócić. Co powinienem zrobić?

OVHcloud wysyła e-mail z tekstową kopią strefy DNS po jej usunięciu, abyś mógł ją później przywrócić w razie potrzeby.
Ten e-mail jest wysyłany na adres e-mail powiązany z Twoim kontem klienta OVHcloud.

> [!success]
>
> Jeśli nie otrzymałeś tego e-maila, sprawdź folder spam lub przejdź na stronę [Moje konto](/links/control-panel/account-dashboard), następnie kliknij zakładkę `Otrzymane e-maile`{.action}.

Aby przywrócić strefę DNS, pobierz plik zawierający strefę DNS z otrzymanego e-maila.

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Wybierz zakładkę `Strefa DNS`{.action} po przejściu na odpowiednią nazwę domeny. **Jeśli strefa DNS jest nieaktywna, aktywuj ją z tej zakładki.**
>>
> **Krok 3**
>>
>> Po prawej stronie lub poniżej tabeli kliknij `Zmień w trybie tekstowym`{.action}.
>>
> **Krok 4**
>>
>> W otwartym oknie zastąp całą wyświetloną zawartość kopią usuniętej strefy DNS. Kliknij `Dalej`{.action}, a następnie `Potwierdź`{.action}.

> [!primary]
>
> Propagacja zmiany strefy DNS może trwać do **24** godzin.

> [!success]
>
> Więcej szczegółów znajdziesz w następujących przewodnikach:
>
> - [Tworzenie strefy DNS OVHcloud dla nazwy domeny](/pages/web_cloud/domains/dns_zone_create)
> - [Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Zarządzanie historią strefy DNS](/pages/web_cloud/domains/dns_zone_history)

///

/// details | Jak mogę anulować żądanie usunięcia strefy DNS?

Dla każdego żądania usunięcia usługi e-mail z potwierdzeniem usunięcia jest wysyłany na adres e-mail powiązany z kontem klienta OVHcloud.

Jeśli nie kliknąłeś linku potwierdzającego w tym e-mailu, Twoja strefa DNS nie zostanie usunięta.

W przeciwnym razie usunięcie zostało zainicjowane i nie można go już anulować. Proces usuwania może trwać do 3 dni, zanim będzie można ponownie utworzyć strefę DNS OVHcloud dla nazwy domeny.

///

/// details | Nie mogę aktywować strefy DNS dla mojej nazwy domeny. Co powinienem zrobić?

Ta sytuacja występuje, gdy strefa DNS dla Twojej nazwy domeny już istnieje w OVHcloud.

Kliknij poniższe karty, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), a następnie sprawdź, czy odpowiednia nazwa domeny jest wyświetlana.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> **Przypadek 1** — Odpowiednia nazwa domeny pojawia się na liście:
>>
>> Oznacza to, że strefa DNS dla nazwy domeny już istnieje w Twoim Panelu klienta OVHcloud. Możesz nią zarządzać bezpośrednio z tego miejsca.
>>
>> **Przypadek 2** — Odpowiednia nazwa domeny nie pojawia się na liście:
>>
>> Oznacza to, że strefa DNS dla nazwy domeny jest zarządzana przez inne konto klienta OVHcloud.
>>
>> Zgodnie z **O**gólnym **R**ozporządzeniem o **O**chronie **D**anych (**RODO**) identyfikator konta klienta, w którym znajduje się strefa DNS, pozostaje poufny.
>>
>> W tej sytuacji, jeśli nie znasz identyfikatora tego innego konta klienta, zalecamy utworzenie zgłoszenia do działu wsparcia w [Centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help), aby odzyskać zarządzanie strefą DNS.

///

/// details | Dlaczego nie mogę znaleźć zakładki "GLUE" w moim Panelu klienta OVHcloud?

Ta funkcja nie jest dostępna dla wszystkich rozszerzeń nazw domen.
Jeśli zakładka nie pojawia się w [Panelu klienta OVHcloud](/links/manager), oznacza to, że opcja "GLUE" jest niedostępna dla Twojej nazwy domeny.

> [!success]
>
> Wszystkie szczegóły znajdziesz w naszym przewodniku "[Personalizacja serwerów DNS nazwy domeny (Glue Records)](/pages/web_cloud/domains/glue_registry)".

///

## Serwery DNS

> [!primary]
>
> Modyfikacja serwerów DNS jest wrażliwą operacją i może spowodować przerwy w działaniu usług powiązanych z nazwą domeny (hosting, e-mail itp.). W razie wątpliwości skontaktuj się ze [specjalistycznym dostawcą](/links/partner).

/// details | Jak mogę zmienić moje serwery DNS?

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Wybierz zakładkę `Serwery DNS`{.action} po przejściu na odpowiednią nazwę domeny.
>>
> **Krok 3**
>>
>> Kliknij przycisk `Zmień serwery DNS`{.action} znajdujący się po prawej stronie tabeli "Serwery DNS". W zależności od rozdzielczości ekranu przycisk może znajdować się poniżej tabeli.
>>
>> Na wyświetlonej stronie możesz zmienić serwery DNS swojej nazwy domeny.

> [!primary]
>
> Propagacja zmian serwerów DNS zadeklarowanych dla nazwy domeny może trwać do **48** godzin.

> [!success]
>
> Wszystkie szczegóły znajdziesz w naszym przewodniku "[Jak zmienić serwery DNS nazwy domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Jak mogę spersonalizować moje serwery DNS?

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Wybierz zakładkę `Serwery DNS`{.action} po przejściu na odpowiednią nazwę domeny.
>>
> **Krok 3**
>>
>> Kliknij przycisk `Zmień serwery DNS`{.action} znajdujący się po prawej stronie tabeli "Serwery DNS". W zależności od rozdzielczości ekranu przycisk może znajdować się poniżej tabeli.
>>
>> Na wyświetlonej stronie możesz spersonalizować serwery DNS swojej nazwy domeny.

> [!primary]
>
> Propagacja zmian serwerów DNS zadeklarowanych dla nazwy domeny może trwać do **48** godzin.

> [!success]
>
> Wszystkie szczegóły znajdziesz w naszym przewodniku "[Jak zmienić serwery DNS nazwy domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Jak mogę zastąpić moje serwery DNS serwerami dostarczonymi przez OVHcloud?

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Wybierz zakładkę `Serwery DNS`{.action} po przejściu na odpowiednią nazwę domeny.
>>
> **Krok 3**
>>
>> Kliknij przycisk `Zmień serwery DNS`{.action} znajdujący się po prawej stronie tabeli "Serwery DNS". W zależności od rozdzielczości ekranu przycisk może znajdować się poniżej tabeli.
>>
>> Na wyświetlonej stronie możesz zastąpić serwery DNS swojej nazwy domeny serwerami dostarczonymi przez OVHcloud.

> [!primary]
>
> Propagacja zmian serwerów DNS zadeklarowanych dla nazwy domeny może trwać do **48** godzin.

> [!success]
>
> Wszystkie szczegóły znajdziesz w naszym przewodniku "[Jak zmienić serwery DNS nazwy domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | W moim Panelu klienta pojawia się komunikat o błędzie informujący, że nie używam serwerów DNS OVHcloud dla mojej nazwy domeny. Co powinienem zrobić?

W [Panelu klienta OVHcloud](/links/manager) ten komunikat wskazuje jedynie, że strefa DNS utworzona dla Twojej nazwy domeny nie jest jej aktywną strefą DNS.

Innymi słowy oznacza to, że konfiguracja obecna w tej strefie DNS nie jest tą aktualnie stosowaną do Twojej nazwy domeny.

Upewnij się jednak, że serwery DNS wymienione w komunikacie o błędzie są rzeczywiście tymi, które chcesz zastosować do swojej nazwy domeny. Następnie sprawdź konfigurację strefy DNS zadeklarowanej na tych samych serwerach DNS u dostawcy DNS.

Jeśli chcesz korzystać z serwerów DNS OVHcloud dla swojej nazwy domeny, możesz przygotować konfigurację DNS strefy DNS obecnej w OVHcloud tak, aby odpowiadała Twoim potrzebom, a następnie aktywować ją dla swojej nazwy domeny.

> [!success]
>
> Więcej szczegółów znajdziesz w następujących przewodnikach:
>
> - [Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Jak zmienić serwery DNS nazwy domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)

///

/// details | Nie mogę zmienić serwerów DNS nazwy domeny z Panelu klienta OVHcloud. Co powinienem zrobić?

Oznacza to, że zarządzasz jedynie strefą DNS nazwy domeny, ale nie samą nazwą domeny.

Aby to zweryfikować, kliknij poniższe karty, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), a następnie sprawdź, czy odpowiednia nazwa domeny jest wyświetlana.
>>
>> ![Domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> **Przypadek 1** — Nazwa domeny nie pojawia się na liście:
>>
>> Oznacza to, że nazwa domeny nie jest zarządzana z Twojego Panelu klienta OVHcloud. Wykonaj zapytanie [WHOIS](/links/web/domains-whois), aby dowiedzieć się, gdzie jest zarejestrowana.
>>
>> Możesz następnie wykonać jedną z poniższych czynności (jeśli jesteś właścicielem zadeklarowanym w WHOIS nazwy domeny):
>>
>> - Nazwa domeny jest zarejestrowana w OVHcloud: Możesz wykonać [procedurę odzyskania kontaktu](/links/transversal/procedure-contact-change), aby Twoja nazwa domeny była zarządzana w [Panelu klienta OVHcloud](/links/manager).
>> - Nazwa domeny nie jest zarejestrowana w OVHcloud: Możesz wykonać [transfer przychodzący](/pages/web_cloud/domains/transfer_incoming_generic_domain) do OVHcloud, aby Twoja nazwa domeny była zarządzana w [Panelu klienta OVHcloud](/links/manager).
>>
>> **Przypadek 2** — Nazwa domeny pojawia się na liście:
>>
>> Oznacza to, że nie masz wystarczających uprawnień do zarządzania nazwą domeny z Panelu klienta OVHcloud. Wykonaj zapytanie [WHOIS](/links/web/domains-whois), aby zweryfikować, czy jesteś zadeklarowany jako właściciel nazwy domeny.
>>
>> Możesz następnie wykonać [procedurę odzyskania kontaktu](/links/transversal/procedure-contact-change), aby Twoja nazwa domeny była w pełni zarządzana w [Panelu klienta OVHcloud](/links/manager).

///

## Sprawdź również <a name="go-further"></a>

[FAQ dotyczący e-maili OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[FAQ dotyczący hostingu](/pages/web_cloud/web_hosting/faq-web_hosting)

W przypadku wyspecjalizowanych usług (SEO, programowanie itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz uzyskać wsparcie w zakresie użytkowania i konfiguracji Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami wsparcia](/links/support).

Dołącz do naszej [społeczności użytkowników](/links/community).
