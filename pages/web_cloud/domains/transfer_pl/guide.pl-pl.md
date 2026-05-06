---
title: 'Transfer nazwy domeny .pl do OVHcloud'
excerpt: "Dowiedz się, jak wykonać transfer nazwy domeny .pl do OVHcloud"
updated: 2026-02-10
---

## Wprowadzenie

Twoja nazwa domeny .pl jest aktualnie zarejestrowana u innego operatora i chcesz ją przenieść do OVHcloud? Jest to możliwe dzięki zastosowaniu procedury transferu.

> [!warning]
>
> Jeśli oprócz transferu Twojej nazwy domeny chcesz przenieść usługi z nią powiązane (strona WWW, konto e-mail, etc.), zapoznaj się z naszym przewodnikiem "[Przeniesienie strony WWW i powiązanych z nią usług do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".
> Ten przewodnik wyjaśnia, jak migrować wszystkie usługi bez przerw w ciągłości usług.
>
> Jeśli wykonujesz wyłącznie transfer Twojej nazwy domeny bez przenoszenia innych usług, upewnij się, że pobrałeś serwery DNS aktywne dla Twojej nazwy domeny od aktualnego **operatora** i wypełnisz ten przewodnik podczas etapu 3 "[Transfer nazwy domeny do OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)"
> Dzięki temu nie będziesz musiał przerywać przypisywania nazwy domeny do przypisanych usług zewnętrznych.
>

Transfer nazwy domeny umożliwia jej przeniesienie do innego operatora. Możesz przenieść nazwę domeny do OVHcloud, składając zamówienie. Zajmie to od jednego do pięciu dni.

**Dowiedz się, jak przenieść nazwę domeny .pl do OVHcloud.**

> [!warning]
>
> Jeśli nazwa domeny ma pozostać zarejestrowana w OVHcloud, ale została zmieniona w sposób umożliwiający zarządzanie nazwą domeny lub jej abonament, transfer wychodzący z nazwy domeny nie jest właściwą procedurą.
>
> Aby przenieść zarządzanie nazwą domeny na inne konto klienta OVHcloud, należy zmienić kontakt. Procedurę opisano w [tym przewodniku](/pages/account_and_service_management/account_information/managing_contacts).
>
> Jeśli chcesz zmienić również **abonenta** nazwy domeny, musisz to zrobić **przed** zmianą kontaktów nazwy domeny. W tym celu postępuj zgodnie z instrukcjami zawartymi w przewodniku OVHcloud dotyczącym [zmiany abonenta nazw domen](/pages/web_cloud/domains/trade_domain).
>

## Wymagania początkowe

- Nazwa domeny .pl jest zarejestrowana u innego operatora.
- Zainicjowanie transferu możliwe jest najwcześniej 5 dni od daty rejestracji nazwy domeny lub jej ostatniego transferu.
- Status nazwy domeny to "OK" lub "Transferrable".
- Nazwa domeny nie wygasła i ma datę wygaśnięcia pozwalającą na zakończenie procesu transferu w czasie (zalecane: ponad 60 dni).
- Posiadanie możliwości odblokowania nazwy domeny
- Posiadanie kodu transferu lub możliwość jego uzyskania
- Posiadanie uprawnień do złożenia wniosku o transfer nazwy domeny
- Powiadomienie abonenta nazwy domeny i/lub administratorów o wszczęciu procedury transferu

## W praktyce

Procedura transferu składa się z kilku etapów, w które włączone są różne podmioty, w tym obecny rejestr, OVHcloud i inne strony. Poniższa tabela wskazuje osoby, z którymi należy się kontaktować oraz szacowany czas trwania każdego etapu.

|Etapy|Opis|Kto wykonuje działanie?|Gdzie?/Jak?|Czas realizacji|
|---|---|---|---|---|
|1|Weryfikacja informacji związanych z nazwą domeny|Administrator nazwy domeny|U obecnego operatora nazwy domeny|W zależności od podjętych przez Ciebie działań|
|2|Odblokowanie nazwy domeny i pobranie kodu transferu|Administrator nazwy domeny, za zgodą abonenta|U obecnego operatora nazwy domeny|W zależności od podjętych przez Ciebie działań|
|3|Wniosek o transfer nazwy domeny|Każda osoba posiadająca kod transferu, za zgodą abonenta|U nowego operatora (np. OVHcloud)|W zależności od podjętych przez Ciebie działań|
|4|Zatwierdzenie transferu|Abonent nazwy domeny musi potwierdzić operację na wniosek registry |W otrzymanym e-mailu|Maksymalnie 5 dni|

### 1 - Weryfikacja informacji związanych z nazwą domeny

**W pierwszym kroku sprawdź, czy informacje związane z nazwą domeny są aktualne.** Od momentu wdrożenia RODO bardzo mało danych jest widocznych w bazie "Whois". Sugerujemy zatem sprawdzenie informacji dotyczących Twojej nazwy domeny u aktualnego operatora.

- **Jeśli informacje są poprawne: przejdź do kolejnego etapu niniejszego przewodnika.**

- **Jeśli informacje są nieprawidłowe lub niewidoczne: skontaktuj się z aktualnym operatorem nazwy domeny, aby je zweryfikować i/lub zmodyfikować.**

> [!primary]
>
> Jeśli nie wiesz, który operator jest odpowiedzialny za Twoją nazwę domeny, możesz podać informacje dotyczące jej tożsamości w wierszach "Registrar", które pojawią się w wyniku wyszukiwania narzędzia "Whois".
>

### 2 - Odblokowanie nazwy domeny i pobranie kodu transferu

Po sprawdzeniu informacji dotyczących nazwy domeny konieczne jest jej odblokowanie. Operacja ta może zostać przeprowadzona wyłącznie we współpracy z aktualnym operatorem. Zalecamy kontakt z operatorem i uzyskanie informacji o przebiegu procedury.

Po odblokowaniu nazwy domeny poproś aktualnego operatora o podanie przypisanego do nazwy domeny kodu transferu. Ten kod jest czasem oznaczany różnymi nazwami, takimi jak: `Kod transferu`, `authinfo`, `authcode` lub `Kod EPP`.

Pamiętaj, że OVHcloud nie jest operatorem Twojej nazwy domeny w momencie rozpoczęcia procedury transferu. Nie możemy więc jej odblokować ani dostarczyć Ci kodu transferu.

> [!warning]
>
> Po odblokowaniu Twojej nazwy domeny otrzymasz siedem (7) dni na transfer do OVHcloud. Po tym czasie Twoja nazwa domeny zostanie automatycznie zablokowana, jeśli nie złożysz wniosku o zmianę operatora nazwy domeny.
>

### 3 - Zlecić transfer nazwy domeny do OVHcloud <a name="step3"></a>

Po odblokowaniu Twojej nazwy domeny i uzyskanym kodzie możesz zamówić jej transfer z [naszej strony WWW](/links/web/domains). Wprowadź nazwę Twojej nazwy domeny, po czym postępuj zgodnie z kolejnymi instrukcjami.

Wprowadź kod transferu w polu obok nazwy Twojej nazwy domeny. Jeśli nie posiadasz jeszcze kodu transferu, możesz zaznaczyć pole `Podaj kod transferu później`{.action}. Zalecamy jednak, abyś przed kolejnymi krokami upewnił się, że jesteś w stanie ten kod uzyskać. Pamiętaj, że transfer nie rozpocznie się, dopóki nie zostanie podany prawidłowy kod.

Możesz również zakończyć zamówienie [hostingiem www](/links/web/hosting) i innymi rozwiązaniami OVHcloud. Może to być interesujące, jeśli chcesz przenieść Twoje usługi do OVHcloud. Przewodnik [Przeniesienie strony WWW do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh) zawiera instrukcje, jak to zrobić.

> [!warning]
>
> Podczas składania zamówienia radzimy uwzględnić następujące kwestie:
>
> - **dane dotyczące abonenta nazwy domeny.** Szczególnie od czasu wejścia w życie rozporządzenia RODO należy upewnić się, czy dane abonenta nazwy domeny odpowiadają informacjom przechowywanym przez aktualnego operatora. Pozwoli to uniknąć podejrzenia kradzieży nazwy domeny;
>
> - **wprowadzenie serwerów DNS dla Twojej nazwy domeny** Jeśli używasz aktualnie Twojej nazwy domeny do utrzymania strony WWW lub usługi poczty elektronicznej, określ Twoje serwery DNS, aby uniknąć przerw w dostępie do usługi.
>

#### Zarządzanie abonentem i szczegóły dotyczące serwerów DNS

- Po kliknięciu `Zmień konfigurację`{.action} w tym etapie możesz wprowadzić nazwy serwerów DNS, których nazwa domeny używa obecnie. W ten sposób nazwa domeny będzie już powiązana z tymi serwerami DNS w konfiguracji OVHcloud.

- Jeśli nie przeprowadzasz tej operacji, nazwa domeny zostanie dostarczona wraz z nową strefą DNS na serwerach DNS OVHcloud. Może zaistnieć konieczność ręcznej [modyfikacji strefy DNS](/pages/web_cloud/domains/dns_zone_edit).

- W niektórych przypadkach proces transferu może wymagać dodatkowych informacji o abonencie nazwy domeny. Aby dodać te informacje, kliknij opcję `Zarządzanie kontaktami/abonentem`{.action}.

![nazwa domeny](/pages/assets/screens/website/order/order-summary.png){.thumbnail}

Po zatwierdzeniu zamówienia otrzymasz bezpłatne zamówienie. Transfer rozpocznie się po zatwierdzeniu tego darmowego zamówienia. Po przeprowadzeniu tej operacji możesz śledzić postęp transferu na stronie [Operacje w toku](/links/control-panel/web-ongoing-operations).

### 4 - Zatwierdzenie transferu

Transfer nazwy domeny wiąże się z potwierdzeniem przez e-mail. Etap ten może zostać wykonany od początku transferu, ale może trwać do pięciu dni.

- Abonent nazwy domeny otrzymuje e-mail na adres, który podał w bazie (jeśli nie jest ukryty).
- E-mail ten pochodzi z rejestru nazw domen ".pl" - "automat@dns.pl".
- Kliknij link potwierdzający zawarty w tym e-mailu, aby sfinalizować transfer.
- Po zatwierdzeniu nazwa domeny będzie dostępna w [Panelu klienta OVHcloud](/links/manager) w ciągu 24 godzin.

> [!warning]
>
> Potwierdzenie transferu poprzez link musi zostać wykonane w ciągu 5 dni od daty zlecenia. Po upływie tego terminu transfer zostanie anulowany.
>

#### Co zrobić, jeśli nie otrzymałeś e-maila z potwierdzeniem transferu?

Sprawdź adres e-mail abonenta nazwy domeny u aktualnego operatora nazwy domeny.<br>
Sprawdź również w pierwszej kolejności foldery "SPAM" / "niechciane wiadomości" odpowiednich adresów e-mail.

Jeśli e-mail do potwierdzenia nie zostanie odnaleziony, skontaktuj się z pomocą OVHcloud poprzez utworzenie zgłoszenia. Wsparcie techniczne OVHcloud może wówczas anulować transfer. Po anulowaniu operacji zmień adres e-mail abonenta nazwy domeny, wybierając innego dostawcę e-mail (np. Gmail, Yahoo, Onet, wp.pl itp.).<br>
Po zmianie adresu e-mail wykonaj [nowy wniosek o transfer](#step3).

### 5 - Zarządzaj nazwą domeny za pomocą OVHcloud

Po zakończeniu operacji transferu możesz zarządzać nazwą domeny na stronie [Domeny](/links/control-panel/web-domains).

## Sprawdź również

[Migracja strony WWW i kont e-mail do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
