---
title: 'Transfer nazwy domeny do OVHcloud'
excerpt: "Dowiedz się, jak wykonać transfer nazwy domeny do OVHcloud"
updated: 2026-03-27
---

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/MILAnKdjHns" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Wprowadzenie

Twoja nazwa domeny jest aktualnie zarejestrowana w systemie **rejestrator** i chcesz ją przenieść do OVHcloud? Jest to możliwe dzięki zastosowaniu procedury transferu.

Transfer nazwy domeny może spowodować zmianę z **rejestrator** dla nazwy domeny. Możesz przenieść nazwę domeny do OVHcloud, składając zamówienie. Proces ten trwa zazwyczaj od jednego do dziesięciu dni.

**Dowiedz się, jak przenieść nazwę domeny globalną do OVHcloud.**

> [!warning]
>
> *Rejestrator* nazwy domeny to zarejestrowana organizacja/dostawca, u której nazwa domeny jest zarejestrowana/zarejestrowana przez osobę fizyczną, stowarzyszenie lub organizację. To od tego samego *Rejestrator* możesz odnowić subskrypcję Twojej nazwy domeny (zazwyczaj raz w roku).
>
> Jeśli OVHcloud jest już operatorem *rejestratora* Twojej nazwy domeny **przed*** uruchomieniem kolejnej procedury, transfer przychodzący nazwy domeny* nie jest właściwą procedurą. *Transfer przychodzący* ma zastosowanie **tylko** do nazw domen zarejestrowanych w innym operatora* niż OVHcloud.
>
> Aby przenieść zarządzanie nazwą domeny na inne konto klienta OVHcloud, należy wykonać *zmianę kontaktów*. Procedura jest opisana w [tym przewodniku](/pages/account_and_service_management/account_information/managing_contacts).
>
> Jeśli chcesz zmienić również **abonenta** nazwy domeny, musisz to zrobić **przed** zmianą kontaktów nazwy domeny. W tym celu postępuj zgodnie z instrukcjami zawartymi w przewodniku OVHcloud dotyczącym [zmiany abonenta nazw domen](/pages/web_cloud/domains/trade_domain).
>
> Jeśli oprócz transferu Twojej nazwy domeny chcesz przenieść usługi z nią powiązane (strona WWW, konto e-mail, etc.), zapoznaj się z naszym przewodnikiem "[Przeniesienie strony WWW i powiązanych z nią usług do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".
> Ten przewodnik wyjaśnia, jak migrować wszystkie usługi bez przerw w ciągłości usług.
>
> Jeśli wykonujesz wyłącznie transfer Twojej nazwy domeny bez przenoszenia innych usług, upewnij się, że pobrałeś serwery DNS aktywne dla Twojej nazwy domeny od aktualnego **operatora**, aby wprowadzić informacje bezpośrednio na etapie 3 niniejszego przewodnika.
> Dzięki temu nie będziesz musiał przerywać przypisywania nazwy domeny do przypisanych usług zewnętrznych.
>

## Wymagania początkowe

- Nazwa domeny jest zarejestrowana u innego operatora.
- Nazwa domeny istnieje od ponad 60 dni.
- W ciągu ostatnich 60 dni nazwa domeny nie została przeniesiona ani nie zmieniła abonenta.
- Nazwa domeny to "OK" lub "Transferable".
- Nazwa domeny nie wygasła i ma datę wygaśnięcia pozwalającą na zakończenie procesu transferu w czasie (zalecane: ponad 60 dni).
- Posiadanie możliwości odblokowania nazwy domeny
- Posiadanie kodu transferu lub możliwość jego uzyskania
- Posiadanie uprawnień do złożenia wniosku o transfer nazwy domeny
- Powiadomienie abonenta nazwy domeny i/lub administratorów o wszczęciu procedury transferu

<!-- CP-NAV-START:web-domains -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Domeny](/links/control-panel/web-domains)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Domeny`{.action} > Wybierz nazwę domeny

---
<!-- CP-NAV-END:web-domains -->

## W praktyce

> [!success]
>
> Aby uzyskać informacje na temat cennika transferu nazwy domeny w zależności od jej rozszerzenia, wprowadź nazwę domeny, którą chcesz przenieść na naszą stronę [www.ovhcloud.com/pl/domains/tld/](/links/web/domains-tld) następnie postępuj zgodnie z instrukcjami zawartymi w tym przewodniku.
>

Procedura transferu składa się z kilku etapów, w które włączone są różne podmioty, w tym obecny rejestr, OVHcloud i inne strony. Poniższa tabela wskazuje osoby, z którymi należy się kontaktować oraz szacowany czas trwania każdego etapu.

|Etapy|Opis|Kto wykonuje działanie?|Gdzie?/Jak?|Czas realizacji|
|---|---|---|---|---|
|[1](#step1)|[Weryfikacja informacji związanych z nazwą domeny](#step1)|Administrator nazwy domeny|U obecnego operatora nazwy domeny|W zależności od podjętych przez Ciebie działań|
|[2](#step2)|[Odblokowanie nazwy domeny i pobranie kodu transferu](#step2)|Administrator nazwy domeny, za zgodą abonenta|U obecnego operatora nazwy domeny|W zależności od podjętych przez Ciebie działań|
|[3](#step3)|[Wniosek o transfer nazwy domeny](#step3)|Każda osoba posiadająca kod transferu, za zgodą abonenta|U nowego operatora (np. OVHcloud)|W zależności od podjętych przez Ciebie działań|
|[4](#step4)|[Zatwierdzenie transferu](#step4)|U obecnego operatora nazwy domeny|Na prośbę organizacji zarządzającej rozszerzeniem Twojej nazwy domeny|Maksymalnie 5 dni|

> [!warning]
>
> Dokładna procedura transferu nazwy domeny może się różnić, w szczególności w przypadku niektórych **TLD** kodu kraju (**ccTLD**, takich jak .pl, .lu, .hk, .ro, .be, .lt, .dk, .at, .fi, itp.) oraz niektórych specjalnych **TLD** (.am, .fm, itp.). W zależności od rozszerzenia Twojej nazwy domeny, mogą być konieczne dodatkowe wymagania. Zalecamy sprawdzenie w pierwszej kolejności informacji wyświetlanych dla danego rozszerzenia na naszej stronie internetowej: <https://www.ovhcloud.com/pl/domains/tld/>.
>

### Etap 1: weryfikacja informacji związanych z nazwą domeny <a name="step1"></a>

**W pierwszym kroku sprawdź, czy informacje związane z nazwą domeny są aktualne.** Od momentu wdrożenia RODO bardzo mało danych widocznych w bazie « [Whois](/links/web/domains-whois) ». Sugerujemy zatem sprawdzenie informacji dotyczących Twojej nazwy domeny u aktualnego operatora.

- **Jeśli informacje są poprawne: przejdź do kolejnego etapu niniejszego przewodnika.**

- **Jeśli informacje są nieprawidłowe lub niewidoczne: skontaktuj się z aktualnym operatorem nazwy domeny, aby sprawdzić i/lub zmodyfikować nazwę domeny.**

> [!primary]
>
> Jeśli nie wiesz, który operator jest odpowiedzialny za Twoją nazwę domeny, możesz podać informacje dotyczące jej tożsamości w wierszach "Registrar", które pojawią się w wyniku wyszukiwania narzędzia [Whois](/links/web/domains-whois).
>

### Etap 2: odblokowanie nazwy domeny i pobranie kodu transferu <a name="step2"></a>

Po sprawdzeniu informacji dotyczących nazwy domeny konieczne jest jej odblokowanie.  Operacja ta może zostać przeprowadzona wyłącznie we współpracy z aktualnym operatorem.  Zalecamy kontakt z operatorem i uzyskanie informacji o przebiegu procedury.

Po odblokowaniu nazwy domeny poproś aktualnego operatora o podanie przypisanego do nazwy domeny kodu transferu. Ten kod jest czasem oznaczany różnymi nazwami, takimi jak: "Kod transferu", "Kod Auth", "Informacje Auth" lub "Kod EPP".

Pamiętaj, że OVHcloud nie jest operatorem Twojej nazwy domeny w momencie rozpoczęcia procedury transferu. Nie możemy więc jej odblokować ani dostarczyć Ci kodu transferu.

> [!warning]
>
> Po odblokowaniu Twojej nazwy domeny otrzymasz siedem (7) dni na transfer do OVHcloud. Po tym czasie Twoja nazwa domeny zostanie automatycznie zablokowana, jeśli nie złożysz wniosku o zmianę operatora nazwy domeny.
>

### Etap 3: zlecić transfer nazwy domeny do OVHcloud <a name="step3"></a>

Po odblokowaniu Twojej nazwy domeny i uzyskanym kodzie możesz zamówić transfer nazwy domeny do OVHcloud z [naszej strony](/links/web/domains). Wprowadź nazwę Twojej nazwy domeny, po czym postępuj zgodnie z kolejnymi instrukcjami.

![nazwa domeny](/pages/assets/screens/website/order/domain-transfer-order.png){.thumbnail}

Wprowadź kod transferu w polu obok nazwy Twojej nazwy domeny. Jeśli nie posiadasz jeszcze kodu transferu, możesz zaznaczyć pole Podaj `kod transferu później`{.action}. Zalecamy jednak, abyś przed kolejnymi krokami upewnił się, że jesteś w stanie ten kod uzyskać. Pamiętaj, że transfer nie rozpocznie się, dopóki nie zostanie podany prawidłowy kod.

![nazwa domeny](/pages/assets/screens/website/order/step_authinfo_add.png){.thumbnail}

Możesz również zakończyć zamówienie [hostingiem www](/links/web/hosting) i innymi rozwiązaniami OVHcloud. Może to być interesujące, jeśli chcesz przenieść Twoje usługi do OVHcloud. Przewodnik "[Przeniesienie strony WWW do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" zawiera instrukcje, jak to zrobić.

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

#### Informacje o transferze po zamówieniu

Po zatwierdzeniu zamówienia otrzymasz zamówienie. Transfer rozpocznie się po otrzymaniu płatności. Po przeprowadzeniu tej operacji możesz śledzić postęp transferu na stronie [Operacje w toku](/links/control-panel/web-ongoing-operations).

> [!primary]
>
> Jeśli kod transferu nie został wpisany podczas składania zamówienia, możesz go wpisać na tej samej stronie, aby potwierdzić operację.

### Etap 4: potwierdzenie transferu przez aktualnego operatora <a name="step4"></a>

Po zatwierdzeniu zamówienia i kodu transferu aktualny operator (którym nie jest jeszcze OVHcloud) otrzyma prośbę o zatwierdzenie. Możliwych jest kilka scenariuszy w zależności od podjętych działań.

|Działanie|Rezultat|
|---|---|
|Zatwierdzenie obecnego operatora nazwy domeny|Transfer zostaje zrealizowany w ciągu **24 godzin**.|
|Brak odpowiedzi od aktualnego operatora|Transfer zostaje zakończony po upływie **5 dni**.|
|Odmowa ze strony aktualnego operatora.|Transfer zostaje **anulowany** po wydaniu odmowy.|

Jeśli odmowa została wydana przez aktualny operator rejestracji, skontaktuj się z nim, aby dowiedzieć się, dlaczego odmówił rejestracji.

Proces transferu może zostać ponownie uruchomiony na stronie [Operacje w toku](/links/control-panel/web-ongoing-operations).

> [!primary]
>
> Transfer nazwy domeny z rozszerzeniem ".fr" różni się nieznacznie od opisanego powyżej procesu. Odblokuj nazwę domeny i pobierz jej kod transferu od aktualnego operatora.
> Złóż zamówienie na transfer i wprowadź kod transferu, jak opisano powyżej.
>
> Po uruchomieniu transferu, całkowity czas **transferu nazwy domeny ".fr" wynosi co najmniej 8 dni.**
>
> W przypadku **sprzeciwu wobec transferu ze strony aktualnego rejestratora**, przeniesienie **nastąpi mimo wszystko**, ale do sfinalizowania operacja ta zajmie **minimum 22 dni**.
>

### Etap 5: zarządzaj nazwą domeny za pomocą OVHcloud

Po zakończeniu operacji transferu możesz zarządzać nazwą domeny na stronie [Domeny](/links/control-panel/web-domains).

> [!warning]
>
> W przypadku nazw domen z rozszerzeniem * o charakterze ogólnym* (**gTLD**, takich jak *.com*, *.net*, *.info*, *.org*, itp.) należy zachować datę wygaśnięcia nazwy domeny. OVHcloud oprócz zrealizowanego transferu za darmo zwiększa dodatkowy rok subskrypcji.
> Na przykład, jesteśmy 04/06/2023 i Twoja nazwa domeny z rozszerzeniem * ogólny* wygasa 29/09/2023 **przed** transferu. Po przeniesieniu nazwy domeny do OVHcloud, nazwa domeny wygaśnie 29/09/2024.
>
> Dla nazw domen z rozszerzeniem *lokalnym* lub *regionalnym* (z **ccTLD**, takich jak *.fr*, *.be*, *.de*, *.es*, itp.) zależy to od rozszerzeń i reguł wdrożonych przez **registry** danego rozszerzenia.
> Po zakończeniu transferu sprawdź w Panelu klienta datę wygaśnięcia Twojej nazwy domeny.
>
> W zależności od sytuacji oraz od daty wygaśnięcia nazwy domeny, może zaistnieć konieczność odnowienia nazwy domeny zaraz po jej zakończeniu.

<!-- CP-STEPS-START:check-domain-expiry -->
Aby to sprawdzić, kliknij na poniższe karty, aby wyświetlić kolejno każdy z **2** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Domeny](/links/control-panel/web-domains), a następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na wyświetlonej stronie, tuż poniżej nazwy domeny, znajdziesz planowaną datę odnowienia wraz z **miesiącem** i **rokiem** wygaśnięcia.
<!-- CP-STEPS-END:check-domain-expiry -->

## Sprawdź również

[Migracja strony WWW i kont e-mail do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
