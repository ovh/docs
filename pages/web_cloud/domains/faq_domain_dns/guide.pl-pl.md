---
title: "FAQ dotyczący domen & DNS"
excerpt: "Znajdź najważniejsze pytania dotyczące domen, serwerów DNS i stref DNS"
updated: 2025-12-16
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

**Kliknij na pytania poniżej, aby zobaczyć wyjaśnienia.**

## Subskrypcja nazwy domeny

/// details | Jak mogę zasubskrybować nazwę domeny w OVHcloud?

Postępuj zgodnie z poniższymi krokami:

1. Wejdź na naszą stronę internetową [OVHcloud](/links/website).
2. Na stronie, która się wyświetli i w odpowiednim polu, wpisz nazwę domeny, którą chcesz zarezerwować (np. `domain.tld`), a następnie kliknij przycisk `Szukaj`{.action}.
3. Na nowo otwartej stronie nasz interfejs poinformuje Cię, czy wybrana nazwa domeny jest dostępna do zakupu. Jeśli jest już zarezerwowana z użyciem składni, którą wpisałeś, zmień ją i ponownie uruchom wyszukiwanie dostępności.
4. Gdy znajdziesz nazwę domeny, która jest dostępna, kliknij przycisk `Kup`{.action}, a następnie przycisk `Kontynuuj zamówienie`{.action} w prawym słupku.
5. Wybierz opcjonalne opcje lub usługi, do których chcesz zasubskrybować w dodatku do swojej nazwy domeny, a następnie kliknij `Dalej`{.action} aż do momentu, gdy tunel zakupowy poprosi Cię o zalogowanie się lub utworzenie konta klienta OVHcloud.
6. Po zalogowaniu się na swoim koncie klienta OVHcloud, możesz dostosować informacje kontaktowe (właściciel/posiadacz, administrator, techniczny) dla swojej nazwy domeny. Następnie kliknij przycisk `Kontynuuj`{.action}, aby przejść do podsumowania swojego zamówienia.
7. Na stronie `Podsumowanie zamówienia` i jeśli to konieczne, możesz zmodyfikować konfigurację DNS, która zostanie zastosowana do Twojej nazwy domeny, klikając link oznaczony `Zmień konfigurację`{.action}. Po zakończeniu swoich zmian kliknij przycisk `Zapłać`{.action}, aby przejść do ostatniego etapu swojego zamówienia.

Zapłać swoje zamówienie, aby rozpocząć rezerwację swojej nazwy domeny oraz instalację usług i opcji, do których zasubskrybowałeś się jako dodatek.

Kilka chwil później otrzymasz potwierdzenie e-mailowe dotyczące swojego zamówienia.
Następnie możesz zarządzać swoją nazwą domeny, logując się do swojego [Panelu klienta OVHcloud](/links/manager).

Jeśli to konieczne, nie wahaj się utworzyć zgłoszenie wsparcia z [centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help).

///

/// details | Jak mogę kupić nazwę domeny na rynku wtórnym?

Kupowanie nazwy domeny na rynku wtórnym przebiega w ten sam sposób, co subskrypcja tej samej nazwy domeny.

Postępuj zgodnie z poniższymi krokami:

1. Wejdź na naszą stronę internetową [OVHcloud](/links/website).
2. Na stronie, która się wyświetli i w odpowiednim polu, wpisz nazwę domeny, którą chcesz zarezerwować (np. `domain.tld`), a następnie kliknij przycisk `Szukaj`{.action}.
3. Na nowo otwartej stronie nasz interfejs poinformuje Cię, czy wybrana nazwa domeny jest dostępna do zakupu. Jeśli jest już zarezerwowana z użyciem składni, którą wpisałeś, zmień ją i ponownie uruchom wyszukiwanie dostępności.
4. Gdy znajdziesz nazwę domeny, która jest dostępna, kliknij przycisk `Kup`{.action}, a następnie przycisk `Kontynuuj zamówienie`{.action} w prawym słupku.
5. Wybierz opcjonalne opcje lub usługi, do których chcesz zasubskrybować w dodatku do swojej nazwy domeny, a następnie kliknij `Dalej`{.action} aż do momentu, gdy tunel zakupowy poprosi Cię o zalogowanie się lub utworzenie konta klienta OVHcloud.
6. Po zalogowaniu się na swoim koncie klienta OVHcloud, możesz dostosować informacje kontaktowe (właściciel/posiadacz, administrator, techniczny) dla swojej nazwy domeny. Następnie kliknij przycisk `Kontynuuj`{.action}, aby przejść do podsumowania swojego zamówienia.
7. Na stronie `Podsumowanie zamówienia` i jeśli to konieczne, możesz zmodyfikować konfigurację DNS, która zostanie zastosowana do Twojej nazwy domeny, klikając link oznaczony `Zmień konfigurację`{.action}. Po zakończeniu swoich zmian kliknij przycisk `Zapłać`{.action}, aby przejść do ostatniego etapu swojego zamówienia.

Zapłać swoje zamówienie, aby rozpocząć rezerwację swojej nazwy domeny oraz instalację usług i opcji, do których zasubskrybowałeś się jako dodatek.

Kilka chwil później otrzymasz potwierdzenie e-mailowe dotyczące swojego zamówienia.
Następnie możesz zarządzać swoją nazwą domeny, logując się do swojego [Panelu klienta OVHcloud](/links/manager).

Jeśli to konieczne, nie wahaj się utworzyć zgłoszenie wsparcia z [centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help).

///

## Zarządzanie nazwą domeny

/// details | Jak mogę sprawdzić, czy moja nazwa domeny jest zarejestrowana w OVHcloud?

Aby to zrobić, możesz wykonać zapytanie [WHOIS](/links/web/domains-whois), aby sprawdzić, gdzie jest zarejestrowana Twoja nazwa domeny i upewnić się, że jesteś faktycznie zadeklarowany jako jej posiadacz.

Każdy rejestrator (taki jak OVHcloud) ma możliwość wyboru, jak wyświetlać informacje dotyczące nazwy domeny w WHOIS.

Po wykonaniu zapytania WHOIS, poszukaj w wyniku przynajmniej jednej z poniższych linii:

- Domain Name: ovhcloud.com
- Registrar WHOIS Server: whois.ovh.com
- Registrar URL: https://ovh.com
- Registrar: OVH sas

Jeśli zobaczysz przynajmniej jedną z tych linii w wyniku, Twoja nazwa domeny jest zarejestrowana w OVHcloud.

W przeciwnym razie, Twoja nazwa domeny jest zarejestrowana u innego rejestratora. Poszukaj wtedy linii dotyczących `Registrar`, aby zidentyfikować rejestratora, u którego Twoja nazwa domeny jest zarejestrowana.

///

/// details | Jak mogę poznać datę wygaśnięcia nazwy domeny?

Najprostsze rozwiązanie to wykonanie zapytania [WHOIS](/links/web/domains-whois) na nazwę domeny. Po wykonaniu zapytania, poszukaj w wyniku linii odpowiadającej daty wygaśnięcia (np. `Expiry Date: 2025-09-22T08:00:00Z`, `Registry Expiry Date: 2025-09-22T08:00:00Z`, itp.).

Jeśli Twoja nazwa domeny jest zarejestrowana w OVHcloud, możesz również postępować zgodnie z poniższymi krokami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. Kliknij swoje imię w prawym górnym rogu, a następnie wybierz `Moje rozwiązania i usługi`{.action}.
3. W tabeli, która się pojawi, znajdź linię odpowiadającą Twojej nazwie domeny, a następnie zwróć uwagę na datę w kolumnie `Data wejścia w życie`. Ta data odpowiada dacie wygaśnięcia Twojej nazwy domeny.

///

/// details | Jak mogę zmienić roczną datę wygaśnięcia nazwy domeny?

Roczna data wygaśnięcia nazwy domeny (np. 24 września) jest ustalona z góry na podstawie daty rejestracji (utworzenia) nazwy domeny.

Zazwyczaj roczna data wygaśnięcia nazwy domeny jest taka sama jak data, w której zarejestrowałeś nazwę domeny.

Dlatego nie jest możliwe zmienienie rocznej daty wygaśnięcia nazwy domeny.

///

<br>

/// details | Jak mogę poprawić literówkę w mojej nazwie domeny?

Od momentu subskrypcji nazwy domeny, ta jest zarejestrowana na podstawie znaków, które jej nadałeś podczas składania zamówienia. Rejestracja odbywa się u rejestratora rozszerzenia Twojej nazwy domeny (np. rejestratora *.com*) i obowiązują opłaty za rezerwację po stronie rejestratora (np. OVHcloud).

Nazwa domeny to unikalny adres na Internecie, np. `ovhcloud.com`.
Każda zmiana w tej nazwie, czy to znak, czy rozszerzenie (.com, .fr, .net itp.), czyni z niej zupełnie inną nazwę domeny.

Dlatego, jeśli popełniłeś błąd pisowni podczas składania zamówienia, nie będzie on mógł zostać zmieniony ani poprawiony. Musisz zamówić nową nazwę domeny niezależnie od poprzedniej (pod warunkiem, że nowa pisownia, jaką sobie życzysz, nie jest jeszcze zarezerwowana przez kogoś innego).

Nazwy domeny są traktowane jako produkty personalizowane, ponieważ są zarejestrowane specjalnie dla właściciela i zablokowane dla innych od momentu zamówienia. Dlatego, po rejestracji, nie mogą być zwrotne.

///

/// details | Jak mogę zmienić już zasubskrybowaną nazwę domeny?

Od momentu subskrypcji nazwy domeny, ta jest zarejestrowana na podstawie znaków, które jej nadałeś podczas składania zamówienia. Rejestracja odbywa się u rejestratora rozszerzenia Twojej nazwy domeny (np. rejestratora *.com*) i obowiązują opłaty za rezerwację po stronie rejestratora (np. OVHcloud).

Nazwa domeny to unikalny adres na Internecie, np. `ovhcloud.com`.
Każda zmiana w tej nazwie, czy to znak, czy rozszerzenie (.com, .fr, .net itp.), czyni z niej zupełnie inną nazwę domeny.

Dlatego, jeśli popełniłeś błąd pisowni podczas składania zamówienia, nie będzie on mógł zostać zmieniony ani poprawiony. Musisz zamówić nową nazwę domeny niezależnie od poprzedniej (pod warunkiem, że nowa pisownia, jaką sobie życzysz, nie jest jeszcze zarezerwowana przez kogoś innego).

Nazwy domeny są traktowane jako produkty personalizowane, ponieważ są zarejestrowane specjalnie dla właściciela i zablokowane dla innych od momentu zamówienia. Dlatego, po rejestracji, nie mogą być zwrotne.

///

/// details | Jak mogę usunąć nazwę domeny?

Postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. Kliknij swoje imię w prawym górnym rogu, a następnie wybierz `Moje rozwiązania i usługi`{.action}.
3. W tabeli, która się pojawi, znajdź linię odpowiadającą Twojej nazwie domeny, kliknij przycisk `...`{.action} po prawej stronie, a następnie `Rezygnuję z usługi`{.action}.
4. Na stronie, która się pojawi, wybierz tryb anulowania (natychmiast lub w dniu wygaśnięcia usługi) i kliknij w dół na przycisku `Tak, chcę`{.action}.

Twoja nazwa domeny zostanie wtedy zawieszona w dacie wygaśnięcia, a następnie, od tej daty, zostanie **trwale** usunięta w maksymalnym terminie 60 dni. Ten termin jest ustalony przez **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**), aby nazwa domeny została całkowicie usunięta i ponownie dostępna do rejestracji dla innego właściciela/posiadacza.

> [!primary]
>
> Po złożeniu wniosku o zakończenie usługi, możesz przyspieszyć usunięcie, tworząc zgłoszenie wsparcia z [centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help). Należy dostarczyć dokumenty potwierdzające, aby przyspieszyć to usunięcie.

> [!success]
>
> Znajdziesz wszystkie szczegóły w naszym przewodniku "[Jak zrezygnować z usług OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services)".

///

/// details | Otrzymałem e-mail dotyczący weryfikacji danych właściciela przypisanych do mojej nazwy domeny, co mam zrobić?

Najpierw, jeśli masz wątpliwości co do autentyczności otrzymanego e-maila, zapoznaj się z naszym przewodnikiem "[Rozpoznawanie e-maili typu phishing](/pages/account_and_service_management/account_information/phishing_care)".

Zgodnie z dyrektywą **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) z dnia 01/09/2014, rejestratory (np. OVHcloud) są zobowiązani do weryfikacji ważności danych właścicieli/nosicieli nazw domen. OVHcloud wysyła wtedy e-mail do właścicieli/nosicieli nazwy domeny zarejestrowanej na adres e-mail kontaktowy podany w OVHcloud.

Otrzymasz ten e-mail, gdy wykonasz jedną z poniższych czynności:

- Rejestracja nowej nazwy domeny.
- Przeniesienie nazwy domeny.
- Modyfikacja danych kontaktowych przypisanych do Twojej nazwy domeny.

E-mail zawiera link umożliwiający szybką weryfikację Twoich danych jako właściciela/nosiciela legalnego nazwy domeny.

Uwaga: Weryfikacja musi zostać wykonana w ciągu 15 dni. Po tym terminie nazwa domeny zostanie technicznie zawieszona. Nadal będzie ona umownie Twoja, ale nie będzie dostępna w Internecie. Dla odwiedzających stronę pojawi się komunikat błędu.

Możesz otrzymać poniższe e-maile w ciągu pierwszych 15 dni:

- **Dzień 0**: Natychmiast po złożeniu zamówienia na nazwę domeny lub zmodyfikowaniu jej danych, ty (lub osoba zarejestrowana jako właściciel/nosiciel nazwy domeny) otrzymasz pierwszy e-mail z linkiem weryfikacyjnym.
- **Dni 4, 9 i 13 (e-maile przypominające)**: Jeśli nie zweryfikowałeś jeszcze nazwy domeny, ponownie otrzymasz e-mail.
- **Dzień 14**: Jeśli nadal nie zweryfikowałeś nazwy domeny, e-mail zostanie wysłany ponownie. Ponadto, e-mail zostanie również wysłany na adres e-mail administratora/nosiciela nazwy domeny, aby poinformować go, że dane tego ostatniego nie zostały potwierdzone.
- **Dzień 15**: Jeśli właściciel/nosiciel nazwy domeny nadal nie odpowiedział, wysyłamy e-mail do administratora nazwy domeny, aby poinformować go o sytuacji i dezaktywacji nazwy domeny.

Po upływie 15 dni, system wysyła dodatkowe e-maile (do 9 e-maili) przed usunięciem Twojej nazwy domeny. Usunięcie zostanie wykonane po 60 dniach od dnia 0.

> [!warning]
>
> W zależności od rozszerzenia nazwy domeny (np. *.com*, *.net* itp.) niektóre z powyższych terminów mogą się różnić. Zalecamy, abyś sprawdził u rejestratora rozszerzenia Twojej nazwy domeny proces weryfikacji kontroli kontaktów.

///

/// details | Nie otrzymałem e-maila weryfikacyjnego właściciela przypisanego do mojej nazwy domeny i ta została zawieszona, co mam zrobić?

Jeśli nie otrzymałeś e-maila weryfikacyjnego właściciela swojej nazwy domeny, sprawdź poniższe punkty:

1. Adres e-mail podany dla właściciela nazwy domeny jest poprawny i działa.
2. E-mail weryfikacyjny nie znajduje się w folderze spamu.

Po sprawdzeniu i potwierdzeniu powyższych dwóch punktów, jeśli nadal nie możesz odzyskać e-maila weryfikacyjnego właściciela, prosimy, abyś otworzył zgłoszenie wsparcia z [centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help), aby zażądać ponownego wysłania tego e-maila.

///

/// details | Co to jest nazwa domeny w formacie IDN?

Początkowo nazwy domen mogły zawierać tylko określone znaki **ASCII** (w tym 26 liter alfabetu łacińskiego). **I**nternationalized **D**omain **N**ame (**IDN**) umożliwia m.in. użycie znaków specjalnych lub ze znakami diakrytycznymi, a nawet innych alfabetów (np. cyryliczny).

W OVHcloud możesz bez problemu zamówić IDN i używać ich jako pełnoprawnych nazw domen z naszymi innymi usługami (np. hosting webowy, strefa DNS itd.<sup>1</sup>).

Po zamówieniu IDN będą one wyświetlane w Twoim [Panelu klienta OVHcloud](/links/manager) w formacie **xn--**.

Choć Twoja domena będzie wyświetlana w [notacji międzynarodowej (IDN)](https://pl.wikipedia.org/wiki/Internationalized_Domain_Name) w Twoim [Panelu klienta OVHcloud](/links/manager), będzie działać i wyświetlać się w całkowicie normalny sposób w innych miejscach. Adres Twojej strony internetowej będzie wyświetlany dokładnie tak, jak go zażądałeś. Twoje adresy e-mail będą również wyświetlane tak, jak chcesz u swoich kontaktów.

> [!alert]
>
> <sup>1</sup>: Nie zaleca się używania adresu e-mail z nazwą domeny IDN w kliencie poczty (Outlook, Mail macOS itp.). W rzeczywistości niektóre klienci poczty nie interpretują jeszcze nazw domen z znakami diakrytycznymi, co blokuje przesyłanie wiadomości e-mail. Gdy nadawca wysyła Ci wiadomość e-mail, otrzymuje automatyczną wiadomość informującą, że Twój adres e-mail nie istnieje.
>
> **Zaleca się zarezerwować dodatkowo swoją nazwę domeny z literami bez znaków diakrytycznych, aby uniknąć niekompatybilności w wymianie wiadomości e-mail.**

///

/// details | Jak poprawić nazwę domeny w formacie IDN?

Podobnie jak w przypadku klasycznych nazw domen, nazwa domeny lub IDN, od momentu jej zasubskrybowania, jest zarejestrowana na podstawie znaków, które jej nadałeś podczas składania zamówienia.

Dlatego, jeśli popełniłeś błąd pisowni podczas składania zamówienia, nie będzie on mógł zostać poprawiony. Musisz zamówić nową nazwę domeny niezależnie od poprzedniej (pod warunkiem, że nowa pisownia, jaką sobie życzysz, nie jest jeszcze zarezerwowana przez kogoś innego).

///

/// details | Jak odnowić tylko jedną nazwę domeny w pakiecie Alldom?

Aby to zrobić, musisz być przynajmniej zadeklarowany jako [kontakt "Fakturacja"](/pages/account_and_service_management/account_information/managing_contacts) dla danej nazwy domeny. Następnie musisz zmienić tryb odnawiania nazwy domeny na **automatyczne odnawianie**.

Aby to zrobić, postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. Kliknij swoje imię w prawym górnym rogu, a następnie wybierz `Moje rozwiązania i usługi`{.action}.
3. W tabeli, która się pojawi i po prawej stronie danej nazwy domeny, kliknij przycisk `...`{.action} w kolumnie `Operacje`, a następnie `Skonfiguruj odnowienie`{.action}. Możesz następnie skonfigurować odnawianie tej nazwy domeny w trybie **automatycznego odnawiania**.

> [!primary]
>
> Jeśli posiadasz stary pakiet hostingowy webowy z darmową nazwą domeny i zmodyfikujesz ten pakiet hostingowy, może to w niektórych przypadkach anulować darmowość nazwy domeny.
>
> W przypadku wątpliwości, prosimy, abyś otworzył zgłoszenie wsparcia z [centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help), wskazując nazwę domeny i pakiet hostingowy webowy.

> [!success]
>
> Znajdziesz wszystkie szczegóły w naszym przewodniku "[Jak odnawiać usługi OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)".

///

## Przeniesienie nazwy domeny

/// details | Czy moja nazwa domeny jest transferowalna po zmianie właściciela?

**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) wprowadziła zasady bezpieczeństwa, aby zapobiec nieautoryzowanym lub nadużywającym transferom lub zmianom właścicieli nazw domen.

ICANN określiła m.in. nieodwracalny okres **60** dni między każdą operacją, która może mieć miejsce na nazwie domeny (utworzenie, zmiana właściciela, transfer).

Zasady określone przez ICANN muszą być ściśle przestrzegane przez rejestratory (np. OVHcloud).

Nie masz zatem innej opcji, jak czekać do końca okresu 60 dni, aby móc przenieść swoją nazwę domeny po zmianie jej właściciela.

///

/// details | Moja nazwa domeny jest zablokowana na 60 dni przed transferem, co mam zrobić?

**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) wprowadziła zasady bezpieczeństwa, aby zapobiec nieautoryzowanym lub nadużywającym transferom lub zmianom właścicieli nazw domen.

ICANN określiła m.in. nieodwracalny okres **60** dni między każdą operacją, która może mieć miejsce na nazwie domeny (utworzenie, zmiana właściciela, transfer).

Zasady określone przez ICANN muszą być ściśle przestrzegane przez rejestratory (np. OVHcloud).

Nie masz zatem innej opcji, jak czekać do końca okresu 60 dni, aby móc wykonać nową operację (zmiana właściciela lub transfer) na swojej nazwie domeny.

///

/// details | Nie mogę znaleźć swojej nazwy domeny w Panelu klienta, co mam zrobić?

Najpierw wykonaj zapytanie [WHOIS](/links/web/domains-whois), aby sprawdzić, gdzie jest zarejestrowana Twoja nazwa domeny i upewnić się, że jesteś zadeklarowany jako jej właściciel.

Przypadek n°1.A - Twoja nazwa domeny jest zarejestrowana w OVHcloud i jesteś zadeklarowany jako jej właściciel:

Wykonaj [procedurę odzyskania kontaktów](/links/transversal/procedure-contact-change), aby Twoja nazwa domeny była całkowicie zarządzana w Twoim [Panelu klienta OVHcloud](/links/manager). Dzięki temu nie będziesz już musiał kontaktować się z osobą, która wcześniej zarządzała Twoją nazwą domeny.

Przypadek n°1.B - Twoja nazwa domeny jest zarejestrowana w OVHcloud, ale nie jesteś zadeklarowany jako jej właściciel:

Zgodnie z **R**ozporządzeniem **O**gólnym o Ochronie **D**anych **O**sobowych (**RODO**), OVHcloud nie będzie mógł dostarczyć informacji dotyczących osoby lub organizacji zarządzającej nazwą domeny w OVHcloud.

Możesz jednak spróbować skontaktować się z osobą lub organizacją zarządzającą, postępując zgodnie z instrukcjami [tego formularza](/links/web/contact-domain-owner).

Przypadek n°2 - Twoja nazwa domeny nie jest zarejestrowana w OVHcloud:

Skontaktuj się bezpośrednio z rejestratorem (wskazanym w liniach zaczynających się od słowa `Registrar`) swojej nazwy domeny, aby kontynuować swoje badania. W rzeczywistości, jeśli nazwa domeny nie jest zarejestrowana w OVHcloud, nie będziemy mogli Ci pomóc w tej kwestii.

///

/// details | Nie mogę skontaktować się z osobą zarządzającą moją nazwą domeny, co mam zrobić?

Najpierw wykonaj zapytanie [WHOIS](/links/web/domains-whois), aby upewnić się, że jesteś zadeklarowany jako jej właściciel.

Przypadek n°1 - Jesteś zadeklarowany jako właściciel nazwy domeny:

Wykonaj [procedurę odzyskania kontaktów](/links/transversal/procedure-contact-change), aby Twoja nazwa domeny była całkowicie zarządzana w Twoim [Panelu klienta OVHcloud](/links/manager). Dzięki temu nie będziesz już musiał kontaktować się z osobą, która wcześniej zarządzała Twoją nazwą domeny.

Przypadek n°2 - Nie jesteś zadeklarowany jako właściciel nazwy domeny:

Zgodnie z **R**ozporządzeniem **O**gólnym o Ochronie **D**anych **O**sobowych (**RODO**), OVHcloud nie będzie mógł dostarczyć informacji dotyczących osoby lub organizacji zarządzającej nazwą domeny w OVHcloud.

Możesz jednak spróbować skontaktować się z osobą lub organizacją zarządzającą, postępując zgodnie z instrukcjami [tego formularza](/links/web/contact-domain-owner).

///

/// details | Czy mogę sprzedać swoją nazwę domeny?

Obecnie OVHcloud nie obsługuje bezpośrednio procesu sprzedaży już zarejestrowanych nazw domen. Nie oferujemy tego typu usług.

Jednak, jeśli chcesz sprzedawać swoją nazwę domeny na rynku wtórnym, skontaktuj się z jednym z naszych partnerów:

- [Afternic](https://www.afternic.com).
- [Sedo](https://sedo.com).

Jeśli chcesz sprzedać swoją nazwę domeny, możesz ją dodać do tych platform. Po dodaniu, uprawnieni dostawcy będą oferować Twoją nazwę domeny za cenę, jaką ustalisz na jednej z powyższych platform.

///

## Strefa DNS

> [!primary]
>
> Modyfikacja strefy DNS to czynność wrażliwa i może spowodować przerwę w działaniu usług związanych z Twoją nazwą domeny (hosting webowy, poczta itp.). W przypadku wątpliwości, nie wahaj się skontaktować z [specjalistycznym dostawcą](/links/partner).

/// details | Co to jest strefa DNS?

Strefa DNS nazwy domeny zawiera konfigurację stosowaną do tej nazwy. Składa się z informacji technicznych, zwanych *rekordami DNS*. Strefa DNS działa jak centrum kierowania ruchem, kierującym ruch do odpowiednich usług związanych z domeną.

Możesz na przykład określić:

- Adres IP (rekordy DNS typu *A* i *AAAA*) swojego hostingu webowego, aby wyświetlić swoją stronę internetową z użyciem swojej nazwy domeny.
- Serwery poczty (rekordy DNS typu *MX*), do których Twoja nazwa domeny powinna kierować otrzymywane e-maile.
- Informacje związane z bezpieczeństwem / uwierzytelnieniem Twoich usług (hosting webowy, serwer webowy, serwer poczty itp.) przypisanych do Twojej nazwy domeny (rekordy DNS typu *SPF*, *DKIM*, *DMARC* itp.).

Strefa DNS jest hostowana / zarejestrowana na **serwerach DNS**. Te **serwery DNS** muszą być zadeklarowane u rejestratora nazwy domeny, aby móc używać strefy DNS, którą hostują.

> [!success]
>
> Znajdziesz wszystkie szczegóły w naszym przewodniku "[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)".

///

/// details | Co to jest rekord DNS?

Rekordy DNS są używane, m.in. do:

- Przypisania nazwy domeny do adresu IP, co umożliwia użytkownikom dostęp do strony internetowej lub odległego serwera.
- Przypisania nazwy domeny do innych zasobów online, używając nazwy domeny (łatwiejszej do zapamiętania) zamiast adresu IP.
- Weryfikacji konfiguracji przypisania lub bezpieczeństwa, w szczególności dla usług poczty e-mail i hostingu współdzielonego.

Istnieje wiele rekordów DNS. Każdy z nich ma określony cel w rozwiązywaniu DNS. W OVHcloud są one podzielone na trzy części:

- **Pola wskazujące**: `A`, `AAAA`, `NS`, `CNAME` i `DNAME`.
- **Pola rozszerzone**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` i `HTTPS`.
- **Pola pocztowe**: `MX`, `SPF`, `DKIM` i `DMARC`.

> [!success]
>
> Znajdziesz więcej szczegółów w poniższych przewodnikach:
>
> - Informacje ogólne:
>     - [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)
> - Rekordy DNS wskazujące:
>     - [Dodaj rekord DNS typu A dla domeny](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Dodaj rekord DNS typu AAAA dla domeny](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Dodaj rekord DNS typu CNAME dla domeny](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Rekordy DNS rozszerzone:
>     - [Dodaj rekord DNS typu TXT dla domeny](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Rekordy DNS pocztowe:
>     - [Konfiguracja rekordu MX dla emaili](/pages/web_cloud/domains/dns_zone_mx)
>     - [Poprawa bezpieczeństwa e-maili poprzez rekord SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Poprawa bezpieczeństwa e-maili poprzez rekord DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Poprawa bezpieczeństwa e-maili poprzez rekord DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Jakie rekordy DNS są dostępne w strefie DNS OVHcloud?

Postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
3. Na prawej stronie lub poniżej tabeli kliknij `Dodaj rekord`{.action}.

W tym miejscu zobaczysz wszystkie rekordy DNS, które możesz dodać za pomocą asystenta konfiguracji OVHcloud.

Dzięki temu asystentowi konfiguracji możesz dodać następujące typy rekordów DNS:

- **Pola wskazujące**: `A`, `AAAA`, `NS`, `CNAME` i `DNAME`.
- **Pola rozszerzone**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` i `HTTPS`.
- **Pola pocztowe**: `MX`, `SPF`, `DKIM` i `DMARC`.

> [!primary]
>
> Jeśli chcesz dodać rekord DNS, którego nie ma na liście, zamknij okno, które się otworzyło po kliknięciu przycisku `Dodaj rekord`{.action}, a następnie kliknij przycisk `Modyfikacja w trybie tekstowym`{.action} po prawej stronie lub poniżej tabeli.
>
> Dzięki temu możesz ręcznie dodać wybrany rekord DNS.

> [!success]
>
> Znajdziesz więcej szczegółów w poniższych przewodnikach:
>
> - Informacje ogólne:
>     - [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)
> - Rekordy DNS wskazujące:
>     - [Dodaj rekord DNS typu A dla domeny](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Dodaj rekord DNS typu AAAA dla domeny](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Dodaj rekord DNS typu CNAME dla domeny](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Rekordy DNS rozszerzone:
>     - [Dodaj rekord DNS typu TXT dla domeny](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Rekordy DNS pocztowe:
>     - [Konfiguracja rekordu MX dla emaili](/pages/web_cloud/domains/dns_zone_mx)
>     - [Poprawa bezpieczeństwa e-maili poprzez rekord SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Poprawa bezpieczeństwa e-maili poprzez rekord DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Poprawa bezpieczeństwa e-maili poprzez rekord DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Czy mogę zmienić serwery DNS zadeklarowane w mojej strefie DNS w OVHcloud?

Ręczna modyfikacja rekordów DNS typu NS dla nazwy domeny w strefie DNS OVHcloud nie jest zalecana, ponieważ uniemożliwiłoby to rozwiązywanie DNS dla odpowiedniej strefy DNS.

Jeśli chcesz zmienić konfigurację rekordów DNS typu NS dla swojej nazwy domeny, prawdopodobnie chcesz zmienić serwery DNS zadeklarowane dla tej nazwy domeny.

> [!primary]
>
> Aby zmienić serwery DNS dla swojej nazwy domeny w OVHcloud, musi już istnieć strefa DNS na nowych, pożądanych serwerach DNS.
> Ponadto, musisz upewnić się, że w tej samej strefie DNS rekordy DNS typu NS odpowiadają odpowiednim serwerom DNS.

Aby to zrobić, postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Domeny`{.action}, następnie wybierz odpowiednią domenę.
3. Po wybraniu nazwy domeny wybierz kartę `Serwery DNS`{.action}.
4. Aby zmienić serwery DNS, kliknij przycisk `Zmień serwery DNS`{.action} po prawej stronie tabeli "serwery DNS". W zależności od rozdzielczości ekranu, przycisk może znajdować się poniżej tabeli.

Na stronie, która się pojawi, możesz zmienić serwery DNS dla swojej nazwy domeny.

> [!primary]
>
> Propagacja zmiany serwerów DNS zadeklarowanych dla nazwy domeny może zająć do **48** godzin.

W przypadku wystąpienia błędu, prosimy, abyś otworzył zgłoszenie wsparcia z [centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help), wskazując poniższe informacje:

- Nazwy serwerów DNS, które chcesz skonfigurować.
- Komunikat o błędzie, który wystąpił.

> [!success]
>
> Znajdziesz wszystkie szczegóły w naszym przewodniku "[Zmiana serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Jaka jest różnica między rekordem DNS typu A (IPv4) a AAAA (IPv6)?

Sieć Internet działa od początku lat 90. zgodnie z normą IPv4. Ta norma umożliwia przypisanie adresu IP X.X.X.X (gdzie każdy "X" to liczba od 0 do 255) każdej maszynie podłączonej do sieci Internet (serwerom, komputerom, smartfonom, tabletom itp.). Jednak ta norma ogranicza liczbę urządzeń podłączonych do sieci Internet do około 4 miliardów.

W związku z tym wprowadzono protokół IPv6, który umożliwia podłączenie do sieci Internet aż 340 sekstylionów urządzeń.

Adresy IPv4 są obecnie mniej dostępne, więc trudniej jest dodawać nowe maszyny do sieci Internet zgodnie z normą IPv4. Jednak połączenia z adresem IPv6 są przydatne tylko wtedy, gdy np. Twoja strona internetowa jest również dostępna z tym samym protokołem.

Rekordy DNS typu A i AAAA to dwa typy rekordów zasobów używane do przypisywania nazwy domeny do adresu IP.

Ich główne różnice polegają na typie adresu IP, który wykorzystują:

- **Rekord A** (nazywany również "rekordem hosta"): Przypisuje nazwę domeny do adresu IPv4 (np. 213.0.113.0). Adresy IPv4 to adresy 32-bitowe, zazwyczaj zapisywane w notacji dziesiętnej z kropkami.
- **Rekord AAAA** (nazywany również "czterokrotnym rekordem A"): Przypisuje nazwę domeny do adresu IPv6 (np. 2001:db8:1:1b00:213:0:113:0). Adresy IPv6 to adresy 128-bitowe, zazwyczaj zapisywane w notacji heksadecymalnej.

Innymi słowy, rekordy A są używane dla adresów IPv4, a rekordy AAAA dla adresów IPv6. Oba typy rekordów służą do kierowania ruchu do konkretnego adresu IP, ale są używane do różnych wersji protokołu Internet.

Warto zauważyć, że domena może mieć zarówno rekordy A, jak i AAAA, co umożliwia jej dostępność na sieciach IPv4 i IPv6. Tę praktykę nazywa się "podwójnym stosowaniem", a jest powszechnie stosowana w przypadku stron internetowych i usług, które chcą być dostępne dla użytkowników na sieciach IPv4 i IPv6.

> [!success]
>
> Znajdziesz więcej szczegółów w poniższych przewodnikach:
>
> - [Dodaj rekord DNS typu A dla domeny](/pages/web_cloud/domains/dns_zone_a_record_creation)
> - [Dodaj rekord DNS typu AAAA dla domeny](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
> - [Skonfiguruj adres IPv6 dla swojej strony www](/pages/web_cloud/web_hosting/configure_ipv6)

///

/// details | Jak skonfigurować rekord PTR dla mojej zewnętrznej adresu IP w OVHcloud?

W OVHcloud konfiguracje **P**oin**T**er **R**ecord (**PTR**) nie można bezpośrednio zarządzać w naszych strefach DNS.

Aby skonfigurować rekord odwrotny/PTR dla zewnętrznego adresu IP, skontaktuj się ze swoim **I**nternet **S**ervice **P**rovider (**ISP**), ponieważ on jest odpowiedzialny za zarządzanie rekordami DNS odwrotnymi dla adresów IP, które przydziela.

> [!success]
>
> Znajdziesz wszystkie szczegóły w naszym przewodniku "[Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)".

///

/// details | Jak zmienić TTL domyślny w mojej strefie DNS OVHcloud?

Postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
3. Na prawej stronie lub poniżej tabeli kliknij `Zmień domyślny TTL`{.action}.
4. W oknie, które się otworzy, dostosuj wartość pod opisem `Domyślny TTL` zgodnie z Twoimi potrzebami, a następnie kliknij `Zmień`{.action}.

> [!primary]
>
> Propagacja zmiany strefy DNS może zająć do **24** godzin.

///

/// details | Co to jest rekord DNS typu SOA?

Rekord DNS typu **S**tart **O**f **A**uthority (**SOA**) zawiera zestaw elementów dotyczących konfiguracji DNS dla nazwy domeny.

Poniżej znajduje się wynik zapytania SOA dla nazwy domeny `domain.tld`.

```bash
              ;; ANSWER SECTION:                                                                                                     

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300   
```

|Element w wyniku|Opis|Odpowiednik w powyższym przykładzie|
|---|---|---|
|**NS (Name Server)**|Główny serwer DNS zadeklarowany dla nazwy domeny `domain.tld`.|`dns200.anycast.me`.|
|**Email address**|Adres e-mail osoby odpowiedzialnej za strefę DNS.|`tech.ovh.net` (kropka między słowami `tech` i `ovh` powinna zostać zastąpiona znakiem `@`).|
|**Serial number**|Unikalny numer seryjny, który zwiększa się o 1 przy każdej modyfikacji strefy DNS.<br>Zwykle składa się z daty aktualizacji w formacie `YYYYMMDD` i liczby aktualizacji dokonanych tego dnia.|`2025091801`: W tym przypadku 2 aktualizacje (`00` dla 1, `01` dla 2 itd.) zostały wykonane 18/09/2025.|
|**Refresh time**|Interwał (w sekundach) między każdą aktualizacją serwerów DNS wtórnych (składających się na sieć DNS) z serwerem DNS głównym.|`86400` (24 godziny).|
|**Retry time**|Interwał (w sekundach) między każdą próbą ponownego odświeżenia ustawień serwerów DNS wtórnych (składających się na sieć DNS) z serwerem DNS głównym, jeśli ten nie odpowiada lub jest niedostępny.|`3600` (1 godzina).|
|**Expire time**|Czas (w sekundach), po którym serwery DNS wtórne (składające się na sieć DNS) przestają odpowiadać na zapytania DNS, jeśli serwer DNS główny nie aktualizuje się z nimi.|`3600000` (1000 godzin, 41,67 dni).|
|**Minimum TTL**|Minimalny czas życia (w sekundach), przez który rekordy DNS strefy DNS są buforowane na serwerach DNS wtórnych (składających się na sieć DNS).|`300` (5 minut).|

///

<br>

/// details | Jak sprawdzić konfigurację mojej strefy DNS?

Oto różne rozwiązania, aby sprawdzić konfigurację strefy DNS:

- **Narzędzie weryfikacji online**: Wiele narzędzi online umożliwia sprawdzenie konfiguracji Twojej strefy DNS. Znajdź je bezpośrednio za pomocą przeglądarki internetowej (Chrome, Edge, Firefox, Safari itp.), wpisując odpowiednie słowa kluczowe (np. "sprawdź propagację DNS") w wyszukiwarce.

- **Komenda "dig"**: Jeśli masz dostęp do *terminala* z systemu Linux lub macOS, możesz użyć komendy `dig`, aby sprawdzić konfigurację Twojej strefy DNS na sieci DNS.

- **Komenda "nslookup"**: Komenda `nslookup` jest dostępna na większości systemów operacyjnych i umożliwia również sprawdzenie konfiguracji Twojej strefy DNS.

- **Z Twojego Panelu klienta OVHcloud**: Aby to zrobić, postępuj zgodnie z poniższymi krokami (jeśli aktywna strefa DNS Twojej nazwy domeny jest zarządzana w OVHcloud): 
    1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
    2. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
    3. W tabeli na stronie, która się pojawi, zobaczysz wszystkie zadeklarowane rekordy DNS dla swojej nazwy domeny.

> [!success]
>
> Znajdziesz wszystkie szczegóły w naszym przewodniku "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Jak sprawdzić propagację zmian wprowadzonych w mojej strefie DNS?

> [!primary]
>
> Przed kontynuowaniem, wiedz, że:
>
> - Propagacja zmiany wprowadzonej w strefie DNS może zająć do **24** godzin.
> - Propagacja zmiany serwerów DNS dla nazwy domeny może zająć do **48** godzin.

Możesz jednak sprawdzić, czy propagacja DNS przebiega poprawnie, używając rekordu DNS typu **S**tart **O**f **A**uthority (**SOA**).

Najpierw otwórz kompatybilny terminal na swoim komputerze, a następnie wykonaj poniższą linię komend (zastąp `domain.tld` swoją własną nazwą domeny):

```bash
dig domain.tld soa
```

> [!primary]
>
> Systemy operacyjne Linux i macOS mają natywnie zainstalowany kompatybilny terminal do uruchamiania tego typu komend. Jeśli używasz innego systemu operacyjnego, np. Windows, musisz wcześniej zainstalować kompatybilny terminal, aby uruchomić komendę.
>
> Ponadto, wiedz, że istnieją również narzędzia dostępne online do sprawdzania propagacji DNS.

Po wykonaniu komendy otrzymasz wynik podobny do poniższego:

```bash
              ;; ANSWER SECTION:                                                                                                     

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300   
```

W tym wyniku pobierz **numer seryjny** (w naszym przykładzie: `2025091801`).

Ma on postać `YYYYMMDDRR`, gdzie:

- `YYYYMMDD`: Reprezentuje datę (rok, miesiąc i dzień) ostatniej aktualizacji DNS dla nazwy domeny.
- `RR`: Reprezentuje liczbę aktualizacji, które zostały wykonane w dniu wskazanym. Na przykład, jeśli została wykonana tylko jedna aktualizacja w ciągu dnia, będzie miała wartość `00`. Jeśli 2 aktualizacje zostały wykonane tego samego dnia, będzie miała wartość `01` i tak dalej.

Po pobraniu numeru seryjnego, postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
3. Na prawej stronie lub poniżej tabeli kliknij `Modyfikacja w trybie tekstowym`{.action}.
4. W oknie, które się otworzy, znajdź drugi wiersz, który w naszym przykładzie będzie wyglądał tak: `@	IN SOA dns200.anycast.me. tech.ovh.net. (2025091801 86400 3600 3600000 60)`.
5. Porównaj numer seryjny pobrany z terminala z tym, który wyświetla się w Twoim Panelu klienta OVHcloud.

Przypadek n°1 - Dwa numery seryjne są identyczne:

Oznacza to, że propagacja DNS przebiega poprawnie. Nie musisz nic więcej robić.

Przypadek n°2 - Dwa numery seryjne są różne: 

Oznacza to, że albo:

- Propagacja DNS Twoich zmian nie została jeszcze całkowicie zakończona (jesteś wciąż w standardowym okresie propagacji DNS). W takim przypadku, poczekaj, aż propagacja DNS zostanie całkowicie zakończona (**24** godziny dla zmiany strefy DNS i **48** godzin dla zmiany serwerów DNS), a następnie powtórz operację.
- Propagacja DNS nie przebiega poprawnie. W takim przypadku, z okna `Modyfikacja w trybie tekstowym`{.action}, który się otworzył w kroku **4**, kliknij bezpośrednio **bez wprowadzania żadnych zmian** przycisk `Dalej`{.action}, a następnie `Zatwierdź`{.action}. Zostanie wtedy uruchomiona nowa propagacja DNS.

///

/// details | Jak przywrócić strefę DNS?

Postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
3. Na prawej stronie lub poniżej tabeli kliknij `Wyświetl historię strefy DNS`{.action}.
4. W tabeli na stronie, która się pojawi, zidentyfikuj linię odpowiadającą kopii zapasowej strefy DNS, którą chcesz przywrócić, a następnie kliknij ikonę w kolumnie `Przywróć`{.action}. Obecna konfiguracja strefy DNS zostanie zastąpiona wybraną kopią zapasową.

> [!primary]
>
> Propagacja zmiany strefy DNS może zająć do **24** godzin.

> [!success]
>
> Znajdziesz wszystkie szczegóły w naszym przewodniku "[Zarządzanie historią strefy DNS](/pages/web_cloud/domains/dns_zone_history)".

///

/// details | Jak pobrać kopię mojej strefy DNS?

Postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
3. Na prawej stronie lub poniżej tabeli kliknij `Wyświetl historię strefy DNS`{.action}.
4. W tabeli na stronie, która się pojawi, zidentyfikuj linię odpowiadającą kopii zapasowej strefy DNS, którą chcesz pobrać, a następnie kliknij ikonę w kolumnie `Pobierz`{.action}. Kopia strefy DNS zostanie pobrana w formacie *.txt*.

> [!success]
>
> Znajdziesz wszystkie szczegóły w naszym przewodniku "[Zarządzanie historią strefy DNS](/pages/web_cloud/domains/dns_zone_history)".

///

/// details | Czy mogę utworzyć strefę DNS dla subdomeny?

Możesz utworzyć strefę DNS dla subdomeny.

Aby to zrobić, postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Strefy DNS`{.action}, a następnie kliknij przycisk `Zamów`{.action} w prawym górnym rogu tabeli, która się pojawi.
3. Na stronie, która się wyświetli, wprowadź Subdomenę (np. *www.domain.tld*), dla której chcesz utworzyć strefę DNS OVHcloud. Poczekaj kilka chwil, aż narzędzie wykona weryfikacje dotyczące poddomeny.
4. Gdy weryfikacja się powiedzie, wybierz, czy chcesz włączyć wpisy minimalne dla strefy DNS, którą chcesz utworzyć. Ta decyzja nie jest ostateczna, ponieważ zawsze będziesz mógł [edytować wpisy strefy DNS](/pages/web_cloud/domains/dns_zone_edit) później.
5. Po podjęciu decyzji, kontynuuj kroki aż do utworzenia strefy DNS.

Ta strefa DNS zostanie zainstalowana na 2 serwerach DNS OVHcloud. Musisz zadeklarować nazwy tych dwóch serwerów w aktywnej strefie DNS nazwy domeny, z której pochodzi Twoja poddomena (np. *www.domain.tld* jest poddomeną nazwy domeny *domain.tld*).

Aby uzyskać nazwy dwóch serwerów DNS, postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią subdomenę.
3. W lewym górnym rogu strony, która się pojawi, pobierz nazwy dwóch serwerów DNS pod opisem `Name Servers`. Mają one jedną z dwóch poniższych form:

- `dnsXXX.ovh.net` i `nsXXX.ovh.net` **lub** `dnsXXX.ovh.ca` i `nsXXX.ovh.ca` (gdzie każdy `X` reprezentuje cyfrę od `0` do `9`).
- `dns200.ovh.me` i `ns200.anycast.me`.

Po uzyskaniu dwóch serwerów DNS, zadeklaruj je za pomocą dwóch wpisów typu NS w aktywnej strefie DNS nazwy domeny, z której pochodzi Twoja Subdomena.

Przypadek n°1 - Aktywna strefa DNS nazwy domeny, z której pochodzi Twoja Subdomena, znajduje się w OVHcloud:

Postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
3. Na prawej stronie lub poniżej tabeli kliknij `Dodaj rekord`{.action}, a następnie wybierz typ wpisu DNS typu `NS`{.action}, aby zadeklarować serwer DNS.
4. W oknie, które się otworzy, wprowadź odpowiednią poddomenę w polu `Subdomena *`{.action} (np. wpisz **tylko** *www*, jeśli Twoja nazwa domeny to *domain.tld*, a Twoja pełna poddomena to *www.domain.tld*). W polu `Adres docelowy *`{.action} wprowadź **jeden** z dwóch serwerów DNS.
5. Kliknij `Dalej`{.action}, a następnie `Zatwierdź`{.action}.

Powtórz operację dla drugiego serwera DNS, który został do zadeklarowania.

Przypadek n°2 - Aktywna strefa DNS nazwy domeny, z której pochodzi Twoja poddomena, nie znajduje się w OVHcloud:

W takim przypadku musisz zadeklarować dwa serwery DNS bezpośrednio u dostawcy DNS Twojej nazwy domeny (z której pochodzi Twoja poddomena).

> [!primary]
>
> W obu przypadkach propagacja zmiany strefy DNS może zająć do **24** godzin.

> [!success]
>
> Znajdziesz więcej szczegółów w poniższych przewodnikach:
>
> - [Tworzenie strefy DNS OVHcloud dla domeny](/pages/web_cloud/domains/dns_zone_create)
> - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)

///

/// details | Jak przekierować wszystkie poddomeny tej samej nazwy domeny na tę samą adres IP?

Postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
3. Na prawej stronie lub poniżej tabeli kliknij `Dodaj rekord`{.action}, a następnie wybierz typ wpisu DNS typu `A`{.action} dla IPv4 (np. `203.0.113.0`) lub typu `AAAA`{.action} dla IPv6 (np. `2001:db8:1:1b00:203:0:113:0`).
4. W oknie, które się otworzy i w polu wprowadzania oznaczonym `Subdomena *`{.action}, wprowadź wartość `*`. Gwiazdka `*` będzie reprezentować wszystkie poddomeny (np. `www.domain.tld` lub `ovhcloud.domain.tld`) Twojej nazwy domeny. Uzupełnij pole `Adres decelowy *`{.action} o żądaną adres IP.
5. Kliknij `Dalej`{.action}, a następnie `Zatwierdź`{.action}.

> [!primary]
>
> Propagacja zmiany strefy DNS może zająć do **24** godzin.

> [!success]
>
> Znajdziesz wszystkie szczegóły w naszym przewodniku "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Czy mogę wdrożyć wildcard w mojej strefie DNS?

Można wdrożyć wildcard w strefie DNS OVHcloud.

Aby to zrobić, postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
3. Na prawej stronie lub poniżej tabeli kliknij `Dodaj rekord`{.action}, a następnie wybierz typ wpisu DNS, dla którego chcesz wdrożyć wildcard.
4. W oknie, które się otworzy i w polu wprowadzania oznaczonym `Subdomena *`{.action}, wprowadź wartość `*`. Gwiazdka `*` będzie reprezentować wszystkie poddomeny (np. `www.domain.tld` lub `ovhcloud.domain.tld`) Twojej nazwy domeny. Uzupełnij pozostałe pola wartościami, które chcesz.
5. Kliknij `Dalej`{.action}, a następnie `Zatwierdź`{.action}.

> [!primary]
>
> Propagacja zmiany strefy DNS może zająć do **24** godzin.

> [!success]
>
> Znajdziesz wszystkie szczegóły w naszym przewodniku "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)".

///

<br>

/// details | Usunąłem przypadkowo moją strefę DNS i chcę ją przywrócić, co mam zrobić?

OVHcloud wysyła e-mail zawierający kopię strefy DNS w formacie tekstowym po usunięciu Twojej strefy DNS, abyś mógł ją później przywrócić, jeśli będzie to konieczne.
E-mail jest wysyłany na adres e-mail przypisany do Twojego konta klienta OVHcloud.

> [!success]
>
> Jeśli nie otrzymałeś tego e-maila, sprawdź folder spamu lub postępuj zgodnie z poniższymi krokami:
>
> 1. Zaloguj się do swojego [Panelu klienta OVHcloud](/links/manager), kliknij swoje imię w prawym górnym rogu, a następnie `Dostęp do konta`{.action}.
> 2. Na stronie, która się wyświetli, kliknij kartę `Otrzymane e-maile`{.action}.
> 3. W tabeli, która się pojawi i wśród listy otrzymanych e-maili, kliknij odpowiedni e-mail, aby wyświetlić jego zawartość.

Aby przywrócić swoją strefę DNS, postępuj zgodnie z poniższymi krokami:

1. Pobierz plik zawierający strefę DNS z otrzymanego e-maila.
2. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
3. Kliknij menu `Domeny`{.action}, następnie wybierz odpowiednią domenę.
4. Po wybraniu nazwy domeny wybierz kartę `Strefa DNS`{.action}. **Jeśli strefa DNS jest nieaktywna, aktywuj ją z tej karty.**
5. Na prawej stronie lub poniżej tabeli kliknij `Modyfikacja w trybie tekstowym`{.action}.
6. W oknie, które się otworzy, zastąp cały wyświetlany zawartość kopią usuniętej strefy DNS. Następnie kliknij `Dalej`{.action}, a następnie `Zatwierdź`{.action}.

> [!primary]
>
> Propagacja zmiany strefy DNS może zająć do **24** godzin.

> [!success]
>
> Znajdziesz więcej szczegółów w poniższych przewodnikach:
>
> - [Tworzenie strefy DNS OVHcloud dla domeny](/pages/web_cloud/domains/dns_zone_create)
> - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)
> - [Zarządzanie historią strefy DNS](/pages/web_cloud/domains/dns_zone_history)

///

/// details | Jak anulować żądanie usunięcia mojej strefy DNS?

Dla każdego żądania usunięcia usługi, e-mail z prośbą o potwierdzenie usunięcia jest wysyłany na adres e-mail przypisany do Twojego konta klienta OVHcloud.

Jeśli nie kliknąłeś linku potwierdzenia w tym e-mailu, nie martw się, Twoja strefa DNS nie zostanie usunięta.

W przeciwnym razie, usunięcie zostanie uruchomione i nie będzie można go anulować. Operacja usunięcia może zająć do 3 dni, zanim będziesz mógł ponownie utworzyć strefę DNS OVHcloud dla swojej nazwy domeny.

///

/// details | Nie mogę aktywować strefy DNS dla mojej nazwy domeny, co mam zrobić?

Ta sytuacja występuje, gdy strefa DNS już istnieje dla Twojej nazwy domeny w OVHcloud.

Postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do swojego [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Strefy DNS`{.action}, a następnie sprawdź, czy nazwa domeny, która Cię interesuje, się pojawia.

Przypadek n°1 - Nazwa domeny, która Cię interesuje, się pojawia w liście:

Oznacza to, że strefa DNS dla nazwy domeny już istnieje w Twoim [Panelu klienta OVHcloud](/links/manager). Możesz ją zarządzać bezpośrednio w tym miejscu.

Przypadek n°2 - Nazwa domeny, która Cię interesuje, nie się pojawia w liście:

Oznacza to, że strefa DNS dla nazwy domeny jest zarządzana przez inny identyfikator klienta OVHcloud niż Twój.

Zgodnie z **R**ozporządzeniem **O**gólnym o Ochronie **D**anych **O**sobowych (**RODO**), identyfikator klienta, na którym znajduje się strefa DNS, pozostanie poufny.

W tej sytuacji i jeśli nie znasz tego innego identyfikatora klienta, prosimy, abyś otworzył zgłoszenie wsparcia z [centrum pomocy](https://help.ovhcloud.com/csm?id=csm_get_help), aby odzyskać zarządzanie strefą DNS.

///

/// details | Dlaczego nie mogę znaleźć karty "GLUE" w moim Panelu klienta OVHcloud?

Funkcja nie jest dostępna dla wszystkich rozszerzeń nazw domen.
Jeśli karta nie się pojawia w Twoim [Panelu klienta OVHcloud](/links/manager), oznacza to, że opcja "GLUE" jest niedostępna dla Twojej nazwy domeny.

> [!success]
>
> Znajdziesz wszystkie szczegóły w naszym przewodniku "[Dostosowanie serwerów DNS dla nazwy domeny (Glue records)](/pages/web_cloud/domains/glue_registry)".

///

## Serwery DNS

> [!primary]
>
> Modyfikacja serwerów DNS to czynność wrażliwa i może spowodować przerwę w działaniu usług związanych z Twoją nazwą domeny (hosting webowy, poczta itp.). W przypadku wątpliwości, nie wahaj się skontaktować z [specjalistycznym dostawcą](/links/partner).

/// details | Jak zmienić moje serwery DNS?

Postępuj zgodnie z poniższymi krokami:

1. Zaloguj się do swojego [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Domeny`{.action}, następnie wybierz odpowiednią domenę.
3. Po wybraniu nazwy domeny wybierz kartę `Serwery DNS`{.action}.
4. Aby zmienić serwery DNS, kliknij przycisk `Zmień serwery DNS`{.action} po prawej stronie tabeli "serwery DNS". W zależności od rozdzielczości ekranu, przycisk może znajdować się poniżej tabeli.

Możesz zmienić serwery DNS dla swojej domeny na stronie, która się pojawia.

> [!primary]
>
> Propagacja zmiany serwerów DNS może zająć do **48** godzin.

> [!success]
>
> Znajdź wszystkie szczegóły w naszym przewodniku: [Zmiana serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit).

///

/// details | Jak spersonalizować moje serwery DNS?

Wykonaj poniższe kroki:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Domeny`{.action}, następnie wybierz odpowiednią domenę.
3. Po wybraniu domeny kliknij kartę `Serwery DNS`{.action}.
4. Aby zmienić serwery DNS, kliknij przycisk `Zmień serwery DNS`{.action} po prawej stronie tabeli "serwery DNS". W zależności od rozdzielczości ekranu, przycisk może znajdować się pod tabelą.

Możesz spersonalizować serwery DNS dla swojej domeny na stronie, która się pojawia.

> [!primary]
>
> Propagacja zmiany serwerów DNS może zająć do **48** godzin.

> [!success]
>
> Znajdź wszystkie szczegóły w naszym przewodniku: [Zmiana serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit).

///

/// details | Jak zastąpić moje serwery DNS serwerami OVHcloud?

Wykonaj poniższe kroki:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Domeny`{.action}, następnie wybierz odpowiednią domenę.
3. Po wybraniu domeny kliknij kartę `Serwery DNS`{.action}.
4. Aby zmienić serwery DNS, kliknij przycisk `Zmień serwery DNS`{.action} po prawej stronie tabeli "serwery DNS". W zależności od rozdzielczości ekranu, przycisk może znajdować się pod tabelą.

Możesz zastąpić swoje serwery DNS serwerami OVHcloud na stronie, która się pojawia.

> [!primary]
>
> Propagacja zmiany serwerów DNS może zająć do **48** godzin.

> [!success]
>
> Znajdź wszystkie szczegóły w naszym przewodniku: [Zmiana serwerów DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit).

///

/// details | W moim Panelu klienta pojawił się komunikat błędu informujący, że nie korzystam z serwerów DNS OVHcloud dla mojej domeny, co mam zrobić?

W [Panelu klienta OVHcloud](/links/manager) ten komunikat oznacza jedynie, że strefa DNS utworzona dla Twojej domeny nie jest strefą aktywną.

Innymi słowy, oznacza to, że konfiguracja zawarta w tej strefie DNS nie jest obecnie stosowana do Twojej domeny.

Sprawdź jednak, czy serwery DNS wymienione w komunikacie błędu odpowiadają serwerom DNS, które chcesz zastosować do swojej domeny. Następnie sprawdź konfigurację strefy DNS zadeklarowanej na tych samych serwerach DNS u swojego dostawcy DNS.

Jeśli chcesz korzystać z serwerów DNS OVHcloud dla swojej domeny, możesz przygotować konfigurację DNS strefy DNS znajdującej się w OVHcloud, aby odpowiadała Twoim potrzebom, a następnie ją aktywować dla swojej domeny.

> [!success]
>
> Znajdź więcej szczegółów w poniższych przewodnikach:
>
> - [Edytowanie strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Zmiana serwerów DNS dla domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)

///

/// details | Nie mogę zmienić serwerów DNS dla domeny z mojego Panelu klienta OVHcloud, co mam zrobić?

Oznacza to, że masz tylko uprawnienia do zarządzania strefą DNS dla tej domeny, ale nie samą domeną.

Aby to sprawdzić, wykonaj poniższe kroki:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Domeny`{.action}, a następnie sprawdź, czy domena, której dotyczy problem, znajduje się na liście.

Przypadek nr 1 - Domena nie pojawia się na liście:

Oznacza to, że domena nie jest zarządzana z Twojego [Panelu klienta OVHcloud](/links/manager). Wykonaj zapytanie [WHOIS](/links/web/domains-whois), aby dowiedzieć się, gdzie jest zarejestrowana.

Następnie możesz wykonać jedną z poniższych czynności (jeśli jesteś właścicielem domeny zgodnie z WHOIS):

- Domena jest zarejestrowana u OVHcloud: Możesz przeprowadzić [procedurę odzyskania kontaktów](/links/transversal/procedure-contact-change), aby Twoja domena była zarządzana w Twoim [Panelu klienta OVHcloud](/links/manager).
- Domena nie jest zarejestrowana u OVHcloud: Możesz przeprowadzić [przesunięcie domeny](/pages/web_cloud/domains/transfer_incoming_generic_domain) do OVHcloud, aby Twoja domena była zarządzana w Twoim [Panelu klienta OVHcloud](/links/manager).

Przypadek nr 2 - Domena pojawia się na liście:

Oznacza to, że nie masz wystarczających uprawnień do zarządzania domeną z Twojego [Panelu klienta OVHcloud](/links/manager). Wykonaj zapytanie [WHOIS](/links/web/domains-whois), aby sprawdzić, czy jesteś faktycznie właścicielem domeny.

Następnie możesz przeprowadzić [procedurę odzyskania kontaktów](/links/transversal/procedure-contact-change), aby Twoja domena była całkowicie zarządzana w Twoim [Panelu klienta OVHcloud](/links/manager).

///

## Sprawdź również <a name="go-further"></a>

[FAQ e-mail OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[FAQ Web Hosting](/pages/web_cloud/web_hosting/faq-web_hosting)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).