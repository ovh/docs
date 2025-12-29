---
title: FAQ dotyczący pomocy OVHcloud
excerpt: Najczęściej zadawane pytania znajdziesz w pomocy OVHcloud
updated: 2025-10-30
---

<style>
/* ---FAQ only--- */
details {
    margin: 0.1rem 1;
    border: 1px solid transparent;
    border-radius: 4px;
    background: #ffffffff;
}
details > summary {
    padding: 0.1rem 1rem;
    font-weight: 500;
    color: #268fd4ff;
    cursor: pointer;
    list-style: none;
}
details > summary::before {
    content: '\25B6';
    display: inline-block;
    margin-right: 0.5ch;
    transition: transform 0.2s;
}
details[open] > summary::before {
    content: '\25BC';
}
details:hover {
    border: 1px solid #147DE8;
    border-radius: 4px;
    transition: border-color 0.5s ease;
}
details[open] > summary {
    background: #ffffffff;
}
details > :not(summary) {
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    list-style-position: inside;
}
.smallish-gap {
    display: block;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}
</style>

## Wprowadzenie

Czy Twój serwis jest objęty incydentem? Czy potrzebujesz pomocy?<br>
Znajdź tu najczęściej zadawane pytania dotyczące wsparcia OVHcloud.

## FAQ

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/44q3cfQM-YI?si=JemH0lvLPWFuFGWZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Status usług

/// details | Myślę, że mój serwis jest objęty incydentem. Gdzie mogę sprawdzić, czy występuje globalny incydent?

Jeśli zauważysz awarię na swoim serwisie i potwierdziłeś, że jest aktywny/odnowiony, sprawdź tę stronę, aby zweryfikować ewentualne bieżące incydenty na naszych infrastrukturach: <https://www.status-ovhcloud.com/>.

Kliknij wtedy na infrastrukturę, która jest objęta (np. `Web Cloud`{.action} dla hostingu webowego lub linii VoIP).

- Bieżące incydenty są wymienione w sekcji *Current events* (bieżące wydarzenia) na górze strony.
- Przeszłe incydenty są wymienione w sekcji *Past Incidents* na dole strony.

Kliknij w wydarzenie odpowiadające serwisowi, który jest objęty, aby uzyskać więcej informacji.

> [!success]
>
> Dla platform hostingu webowego możesz skorzystać z [tego przewodnika](/pages/web_cloud/web_hosting/how_to_know_cluster_and_filer/), aby sprawdzić swój klaster i filer hostingu, aby upewnić się, czy są objęte bieżącym lub przeszłym incydentem.

///

/// details | Jak otrzymywać przez e-mail najnowsze informacje na temat konkretnego incydentu lub konserwacji?

Jeśli potwierdziłeś na [tej stronie](https://www.status-ovhcloud.com/) lub za pośrednictwem zespołu wsparcia, że Twój serwis jest objęty bieżącym incydentem i chcesz otrzymywać aktualizacje przez e-mail, możesz subskrybować konkretny incydent, aby otrzymywać aktualizacje.

Aby to zrobić, wejdź na stronę <https://www.status-ovhcloud.com/> i otwórz bieżący incydent, który Cię dotyczy.

Kliknij wtedy przycisk `Subscribe to this report`{.action}.

Możesz również subskrybować jedną z stron „status”, aby otrzymywać ogólne aktualizacje dotyczące różnych incydentów.

Na przykład na stronie [Web Cloud Status](https://web-cloud.status-ovhcloud.com/), kliknij `Subscribe to updates`{.action}.

///

### Skontaktuj się z wsparciem

/// details | Jak utworzyć zgłoszenie wsparcia?

Kliknij [ten link](https://help.ovhcloud.com/csm?id=csm_get_help), aby utworzyć zgłoszenie wsparcia z poziomu centrum pomocy OVHcloud. Zaloguj się następnie swoimi danymi OVHcloud.

Po zalogowaniu kliknij `✉ Zgłoszenia`{.action}, a następnie przycisk `Utwórz zgłoszenie`{.action}. Wybierz powód swojego zapytania oraz produkt i usługę, które są dotknięte. Następnie szczegółowo opisz swoje zapytanie, aby uzyskać spersonalizowane wskazówki i porady. Jeśli to nie rozwiąże Twojego problemu, kliknij `Dalej`{.action}, aby uzupełnić swoje zgłoszenie i utworzyć zgłoszenie wsparcia. Upewnij się, że podasz jak najwięcej informacji, aby nasze zespoły mogły Ci pomóc jak najlepiej.

///

<a name="sso"></a>

/// details | Co zrobić w sytuacji, gdy mam problem z zalogowaniem się do centrum pomocy lub do interfejsu zarządzania zgłoszeniami?

Możliwe przyczyny tego problemu:

- Wprowadziłeś niewłaściwe hasło.
- Cookies nie są dozwolone w twojej przeglądarce.
- Próbujesz zalogować się z innego kraju niż kraj, w którym zarejestrowane jest konto klienta.

Oto rozwiązania, których należy wypróbować:

- **Hasło** : upewnij się, że wprowadzono poprawne hasło lub zresetuj hasło, postępując zgodnie z [tą dokumentacją](/pages/account_and_service_management/account_information/manage-ovh-password#lost-password).
- **Pliki cookie** : upewnij się, że zezwalasz na pliki cookie w przeglądarce.
- **Kraj, w którym obowiązuje rozliczenie** : możesz spróbować zalogować się za pomocą jednej z dwóch odpowiednich bram w zależności od Twojej lokalizacji i kraju, w którym zarejestrowane jest rozliczenie:
    - [Unia Europejska (UE)](https://help.ovhcloud.com/login_with_sso.do?glide_sso_id=5e9c81e66886e8901e111f908472f1e2)
    - [Kanada (CA)](http://help.ovhcloud.com/login_with_sso.do?glide_sso_id=e6292c24e02bb050476bf14567ec5ef1)

Jeśli problem będzie się powtarzać, skontaktuj się z naszym zespołem pomocy technicznej, aby uzyskać dalszą pomoc.

> [!success]
>
> **Wskazówki i porady**
>
>Jeśli masz trudności z zalogowaniem się do Panelu klienta, możesz również spróbować zalogować się przy użyciu jednej z dwóch następujących bramek:
>
> - Unia Europejska (UE): <https://www.ovh.com/auth/>
> - Kanada (CA): <https://ca.ovh.com/auth/>
>
> Może to rozwiązać niektóre problemy z połączeniem.

///

/// details | Co zrobić, kiedy nie mogę połączyć się z działem wsparcia klienta przez telefon?

Aby nie przedłużać oczekiwania na pomoc przez telefon, prosimy o utworzenie zgłoszenia w [Centrum pomocy OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help). Kliknij przycisk `Utwórz zgłoszenie`{.action}.

Możesz również zapoznać się z całością naszej dokumentacji (FAQ, przewodniki, narzędzia do diagnostyki, ...) dostępnej w [Centrum Pomocy](https://help.ovhcloud.com/csm/pl-documentation?id=kb_home).

///

/// details | Dlaczego formularz otwierania zgłoszenia został zmieniony?

Dzięki systemowi pytań, na jakich opiera się nowy formularz, procedura otwierania zgłoszenia będzie bardziej kompletna i precyzyjna. Formularz pozwoli na sprawniejszą ocenę Twojego zapytania, w zależności od rodzaju usługi, Twojego zapotrzebowania na wsparcie oraz poziomu krytyczności. Dzięki temu ograniczamy do niezbędnego minimum wymianę pytań i odpowiedzi pomiędzy Tobą, a naszymi zespołami.

///

/// details | Jak mogę wysyłać dokumenty i inne pliki do pomocy OVHcloud?

Pliki można przesyłać w następujących formatach (maksymalny rozmiar: 1024 MB): bmp, cap, csv, eml, gif, jpeg, jpg, pcap, pdf, png, txt, xml, yaml, yml.

Utwórz zgłoszenie w [Centrum pomocy OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help) i dołącz pliki.

Jeśli Twoje pliki przekraczają maksymalny dozwolony rozmiar lub musisz udostępnić nieobsługiwany format, możesz odpowiedzieć bezpośrednio na kopię zgłoszenia wysłaną e-mailem **na adres przypisany do Twojej identyfikacji klienta** i dołączyć pliki. Pozwoli to nam je przeanalizować i bezpiecznie odpowiedzieć na Twoje żądanie.

///

/// details | Czy mogę podać w zgłoszeniu linki do zewnętrznych stron, takich jak Google Drive?

Nie możemy uzyskiwać dostępu do zewnętrznych linków, takich jak Google Drive, ponieważ mogłoby to zagrozić bezpieczeństwu i poufności Twoich danych.

Jeśli musisz udostępnić pliki, możesz je bezpośrednio dodać do swojego zgłoszenia z poziomu [centrum pomocy OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help) w poniższych formatach (maksymalny rozmiar: 1024 MB): bmp, cap, csv, eml, gif, jpeg, jpg, pcap, pdf, png, txt, xml, yaml, yml.

///

/// details | Czy mogę dodać pliki wideo do zgłoszenia? Jakie są rekomendacje dotyczące rozmiaru, formatu i czasu trwania?

Jeśli chcesz przesłać nam wideo, pamiętaj, że akceptowany jest tylko format gif, a rozmiar nie może przekraczać 1024 MB. Jeśli Twoje wideo jest w innym formacie lub jego rozmiar jest większy, możesz wybrać jedną z poniższych opcji:

- Odpowiedz e-mailem (z adresu e-mail przypisanego do Twojego konta OVHcloud) na zgłoszenie wsparcia i dołącz wideo jako załącznik do swojej odpowiedzi.
- Prześlij wideo na platformę taką jak YouTube i udostępnij link do wideo w zgłoszeniu.

> [!warning]
> **Uwaga!**
> Jeśli Twoje wideo przedstawia wrażliwe informacje o Twoim koncie (np. identyfikator klienta, hasło, adres(y) IP, identyfikator(y) usług itp.), nie udostępniaj wideo publicznie na platformie takiej jak YouTube, ponieważ może to wystawić Twoje usługi na potencjalne kradzieże danych.

///

/// details | Jak mogę sprawdzić moje stare zgłoszenia wsparcia?

Kliknij [ten link](https://help.ovhcloud.com/csm?id=csm_get_help), aby zalogować się do centrum pomocy OVHcloud. Wprowadź następnie swoje dane logowania do OVHcloud.

Po zalogowaniu Twoje najnowsze zgłoszenia wsparcia zostaną wyświetlone. Kliknij ikonę filtra nad listą swoich zgłoszeń.

Możesz kliknąć przycisk `Wyczyść wszystko`{.action}, aby zresetować wszystkie warunki filtrowania i sprawdzić starsze zgłoszenia zamknięte.

> [!success]
> Po usunięciu wszystkich warunków filtrowania kliknij kolumnę `Zaktualizowane`{.action}, aby posortować swoje zgłoszenia według daty aktualizacji.
>

///

/// details | Potrzebuję eksperta ds. treści/administratora systemu, czy macie tego typu specjalistę? Gdzie mogę się z nim skontaktować?

Jeśli masz problem z Twoim usługą spowodowany zarządzaniem treścią i/lub złym lokalnym ustawieniem, możesz skontaktować się z jednym z naszych rekomendowanych partnerów, aby uzyskać dodatkową pomoc w sprawach spoza wsparcia technicznego OVHcloud.

Znajdziesz listę partnerów OVHcloud na [tej stronie](/links/partner).

///

### Poziomy wsparcia

/// details | Dlaczego OVHcloud zmieniła sposób funkcjonowania wsparcia klienta?

Decyzja o zmianie systemu została podjęta przez OVHcloud, aby zapewnić jeszcze wyższy poziom satysfakcji klienta i sprawić, żeby doświadczenia podczas korzystania z usług wsparcia odpowiadały Twoim oczekiwaniom. Oznacza to możliwość szybkiego uzyskania odpowiedzi na Twoje pytania i dostęp do usługi o jeszcze wyższej jakości.

Dzięki temu OVHcloud może zaoferować bardziej rozbudowaną, spersonalizowaną i precyzyjną usługę wsparcia. Dostosowujemy usługi wsparcia do potrzeb przedsiębiorstw, jednocześnie pozostawiając dostęp do samodzielnego zarządzania online.

Sprawdź i porównaj różne poziomy wsparcia dostępne [tutaj](/links/support).

///

/// details | Gdzie znajdę informację o przysługującym mi poziomie wsparcia klienta?

Aby poznać poziom wsparcia powiązany z Twoim identyfikatorem klienta, zaloguj się do Twojego [Panelu klienta OVHcloud](/links/manager), a następnie kliknij Twoją nazwę użytkownika w prawym górnym rogu. Po prawej stronie wzmianki znajduje się poziom wsparcia **Dział Wsparcia Klienta**. Jeśli nie została przez Ciebie wykupiona płatna usługa wsparcia, możesz korzystać z domyślnej usługi wsparcia na poziomie Standard.

Sprawdź i porównaj różne poziomy wsparcia dostępne [tutaj](/links/support).

///

/// details | Chcę ponownie skorzystać z poziomu wsparcia Standard. Jak mogę anulować obecny poziom wsparcia?

Po zakończeniu początkowego okresu umownego 12 miesięcy możesz anulować swój poziom wsparcia Premium w dowolnym momencie, bez wiązania się z ustaloną długością umowy.

W tym przypadku potrzebujemy pisemnej potwierdzenia, aby przetworzyć anulowanie.

Aby dokonać tego anulowania, skontaktuj się z naszym zespołem wsparcia, tworząc [zgłoszenie wsparcia za pośrednictwem centrum pomocy OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help).

> [!warning]
> **Ważne:**
>
> - Wsparcie Premium jest zawierane na podstawie umowy na 12 miesięcy, a klienci nie mogą anulować usługi w trakcie trwania umowy.
> - Jedyne wyjątki to prawo odstąpienia od umowy po zakupie, które podlega określonym warunkom:
>     - Anulowanie musi zostać złożone w ciągu 14 dni od daty zakupu.
>     - Usługa musiała zostać zakupiona jako klient indywidualny.

Skontaktuj się z [naszym zespołem wsparcia](https://help.ovhcloud.com/csm?id=csm_get_help), aby uzyskać więcej informacji.

///

/// details | Czy macie tutoriale wideo?

Dodajemy coraz więcej tutoriali do naszego kanału YouTube: <https://www.youtube.com/@OvhGroup>.

Nie wahaj się skorzystać z wyszukiwarki na tej stronie, aby znaleźć wideo na konkretne tematy (np. „stworzenie strony internetowej”).

///


### Zgłoś nadużycie/nadużycie lub włamanie

/// details | Co zrobić w sytuacji, gdy moje konto OVHcloud zostało zhakowane?

W przypadku nielegalnego wykorzystania Twojego konta OVHcloud (tożsamość, środek płatności...), należy jak najszybciej złożyć wstępne zgłoszenie o wystąpieniu naruszenia do odpowiednich organów policji.

Po otrzymaniu zawiadomienia organy policji skontaktują się z Tobą, aby umówić się na spotkanie i dokończyć procedurę. Zaraz po otrzymaniu dokumentu potwierdzającego złożenie przez Ciebie skargi, należy przesłać nam jego kopię. Tym samym będziemy mogli rozpocząć odpowiednie działania wewnętrzne.

Twój identyfikator klienta zostanie zablokowany. Wszelkie usługi wykupione nielegalnie zostaną automatycznie usunięte, a płatności za nie zwrócone.

Skontaktuj się z pomocą OVHcloud telefonicznie:

- Polska: 71 750 02 00

Abyś mogła/mógł ponownie korzystać z Twojego konta klienta, poprosimy Cię ewentualnie o zmianę Twojego adresu e-mail i/lub Twojego hasła po kliknięciu tego linku: [www.ovh.pl/cgi-bin/pl/procedure/procedureChangeEmail.cgi](https://www.ovh.pl/cgi-bin/pl/procedure/procedureChangeEmail.cgi).

///

/// details | Otrzymałem e-mail, który wygląda na phishing i kradzież tożsamości OVHcloud. Jak zgłosić tę wiadomość do weryfikacji?

Wyjaśnienie, jak rozpoznać i zgłosić atak phising przeprowadzony przy użyciu wiadomości e-mail lub SMS, znajdziesz w [przewodniku](/pages/account_and_service_management/account_information/phishing_care).

///

/// details | W jaki sposób zgłosić nadużycie lub treści niezgodne z prawem wykryte na usługach hostowanych przez OVHcloud?

Nadużycia lub treści niezgodne z prawem należy zgłaszać na przeznaczonej do tego celu platformie OVHcloud [www.ovh.com/abuse/](https://www.ovh.com/abuse/). Wybierz odpowiednią kategorię i uzupełnij wymagane pola.

Tylko logi i dane techniczne mogą zostać przekazane właścicielowi usługi, której dotyczy nadużycie. Wypełniając pola, nie należy zatem podawać żadnych danych osobowych.

///

/// details | Po zgłoszeniu nadużycia, co się stanie z moją zgłoszeniem?

Twoja zgłoszenie zostanie przetworzone jak najszybciej przez dział prawny OVHcloud. Twoja skarga zostanie przeanalizowana, a na podstawie tego skontaktujemy się z Tobą z dodatkowymi informacjami. Jeśli nadużywanie przez jednego z naszych klientów zostanie potwierdzone, poinformujemy Cię i zrobimy wszystko, co konieczne, by jak najszybciej zakończyć to u osób odpowiedzialnych.

///

/// details | Firma OVHcloud przesłała mi wiadomość e-mail informującą o potencjalnym nadużyciu z mojej strony. Co powinienem w takiej sytuacji zrobić?

Jeśli nadużycie zostało nam zgłoszone lub zauważone przez nasze zespoły, otrzymasz wiadomość e-mail wysłaną z adresu o formacie: "ticket+"numer-zgłoszenia"@abuse.ovh.net".

Poprosimy Cię o przeanalizowanie działań uznanych jako nadużycie oraz podjęcie odpowiednich kroków w celu ich zaprzestania i/lub usunięcie wszelkich treści niezgodnych z prawem.

Aby upewnić się, czy osoby trzecie nie przejęły kontroli nad Twoimi usługami (np. w wyniku włamania), zalecamy, abyś sprawdził, czy Twoje usługi są odpowiednio zabezpieczone:

- [Zabezpieczenie konta OVHcloud i zarządzanie danymi osobowymi](/pages/account_and_service_management/account_information/all_about_username)
- [Zmiana hasła do konta](/pages/account_and_service_management/account_information/manage-ovh-password)
- [Zabezpieczenie konta OVHcloud za pomocą weryfikacji dwuetapowej](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)
- [Jak zabezpieczyć stronę WWW?](/pages/web_cloud/web_hosting/secure_your_website)
- [Zabezpieczenie serwera VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)
- [Zabezpieczenie serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

///

/// details | W jaki sposób mogę uniknąć zawieszenia usługi w przypadku wykrycia nadużycia na jednej z moich usług OVHcloud?

Po przeprowadzeniu niezbędnych działań odpowiedz na wiadomość e-mail wysłaną przez dział Abuse i poinformuj o podjętych krokach.
Pracownik naszego zespołu odpowie na Twoją wiadomość w najkrótszym możliwym terminie.

///

/// details | Wysłałem wiadomość do działu Abuse OVHcloud, ale moja usługa jest nadal zablokowana. Co mogę zrobić?

W [Centrum pomocy OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help) możesz zwrócić się do Biura Obsługi Klienta o udzielenie dodatkowych informacji dotyczących przetwarzania Twojego zgłoszenia Abuse. Aby usprawnić obsługę Twojego zapytania, podaj numer zgłoszenia Abuse.

///

## Sprawdź również

[FAQ dotyczący zarządzania kontem OVHcloud](/pages/account_and_service_management/account_information/faq-account-management)

Dołącz do [grona naszych użytkowników](/links/community).