---
title: "Transfer nazwy domeny do innego operatora"
excerpt: "Dowiedz się, jak wykonać transfer nazwy domeny z OVHcloud do wybranego operatora"
updated: 2026-03-24
---

## Wprowadzenie

**Transfer nazwy domeny** odnosi się do przeniesienia nazwy domeny z jednego operatora na drugi. Na przykład, jeśli zamówiłeś nazwę domeny na naszej stronie internetowej, OVHcloud jest jej aktualnym operatorem. Transfer nazwy domeny wychodzącej musi zostać zainicjowany przez nowego operatora.

Aby zapobiec przenoszeniu nazwy domeny bez zezwolenia, nazwy domen są zazwyczaj blokowane statusem *clientTransferProhibited*. Ochrona ta musi zostać usunięta w Panelu klienta OVHcloud przed rozpoczęciem transferu.

**Dowiedz się, jak przygotować nazwę domeny do transferu wychodzącego.**

> [!warning]
>
> Jeśli nazwa domeny ma pozostać zarejestrowana w OVHcloud, ale została zmieniona w sposób umożliwiający zarządzanie nazwą domeny lub jej abonament, transfer wychodzący z nazwą domeny nie jest właściwą procedurą.
>
> Aby przenieść zarządzanie nazwą domeny na inne konto klienta OVHcloud, należy **zmienić kontakt**. Procedurę opisano w [tym przewodniku](/pages/account_and_service_management/account_information/managing_contacts).
>
> Jeśli chcesz zmienić również **abonenta** nazwy domeny, musisz to zrobić **przed** zmianą kontaktów nazwy domeny. W tym celu postępuj zgodnie z instrukcjami zawartymi w przewodniku OVHcloud dotyczącym [zmiany abonenta nazw domen](/pages/web_cloud/domains/trade_domain).
>

## Wymagania początkowe

- Posiadanie [nazwy domeny zarejestrowanej](/links/web/domains) w OVHcloud
- Posiadanie uprawnień do złożenia wniosku o transfer nazwy domeny: abonent i/lub administratorzy nazwy domeny powinni zostać poinformowani o wszczęciu takiej procedury.
- Rejestracja tej nazwy domeny trwa co najmniej 60 dni **i** nie została przeniesiona ani wymieniona (tj. zmiana abonenta) w ciągu ostatnich 60 dni

<!-- CP-NAV-START:web-domains -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Domeny](/links/control-panel/web-domains)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Domeny`{.action} > Wybierz nazwę domeny

---
<!-- CP-NAV-END:web-domains -->

> [!primary]
>
> Jeśli jesteś **abonentem** nazwy domeny, ale zarządzanie nią w Panelu klienta OVHcloud jest niedostępne, zarówno poprzez własny dostęp, jak i poprzez kontakt administracyjny nazwy domeny, zapoznaj się z [tym przewodnikiem](/pages/account_and_service_management/account_information/managing_contacts).
>

## W praktyce

> [!warning]
>
> Poniższe instrukcje opisują najpopularniejszy sposób transferu nazwy domeny, ważny dla większości nazw domen najwyższego poziomu (top-level domain lub TLD). Jednakże szczegółowe przepisy dotyczące procedur właściwych dla TLD są określane wyłącznie przez właściwy organ, tj. **rejestr**. Rejestratorzy, tacy jak OVHcloud, muszą przestrzegać tych zasad i nie mają wpływu na decyzje podejmowane przez rejestry.
>
> Dokładna procedura transferu nazwy domeny może się zatem różnić, w szczególności w przypadku niektórych TLD kodu kraju (np. ccTLD, np. .lu, .uk., .hk, .ro) i niektórych TLD specjalnych (.am, .fm, itp.). Transfery mogą być również zakazane z różnych powodów, np. w przypadku płatności oczekujących na płatność, nadużycia lub blokady rejestru.
>
> W przypadku wątpliwości zalecamy sprawdzenie następujących zasobów:
>
> - strona internetowa odpowiedniego rejestru TLD;
> - Lista [TLD dostępnych w OVHcloud](/links/web/domains-tld);
> - [Wyjaśnienia ICANN dotyczące kodów statusu EPP](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) (aby dowiedzieć się, które kody statusu mają obecnie zastosowanie do Twojej nazwy domeny, należy przeszukać *Whois*, najlepiej korzystając ze strony internetowej odpowiedniego rejestru TLD);
> - Twoja strona WWW oraz interfejs zarządzania nowym operatorem, zwłaszcza w przypadku pytań dotyczących procesu transferu oczekującego na połączenie.
>
> W zależności od tego, który nowy operator wybrałeś, transfer nazwy domeny może być operacją płatną. Przed kolejnymi krokami sprawdź, czy spełnione są te warunki.
>

### 1 - Wyłączenie ochrony przed transferem nazwy domeny

<!-- CP-STEPS-START:unlock-domain-transfer -->
Kliknij na karty poniżej, aby wyświetlić kolejno każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią domenę.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> W zakładce `Informacje ogólne`{.action} znajdziesz suwak `Ochrona przed transferem` pod **Bezpieczeństwo**. Domyślnie ochrona ta jest `Aktywne`{.action}.
>>
>> > [!warning]
>> >
>> > Jeśli przycisk `Ochrona przed transferem` nie jest widoczny, oznacza to, że rozszerzenie nazwy domeny nie wymaga kodu transferu. Będziesz mógł wówczas rozpocząć transfer nazwy domeny.
>>
>> ![ochrona włączona](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-enabled.png){.thumbnail}
>>
> **Krok 3**
>>
>> Kliknij kursor i potwierdź w oknie, które się wyświetli, że chcesz usunąć tę ochronę. Odczekaj kilka minut, aż stan się `Wyłączone`{.action}.
>>
>> > [!primary]
>> >
>> > Jeśli pojawi się komunikat "**Wystąpił błąd podczas zlecania wyłączenia ochrony nazwy domeny (User not granted for this request)**", oznacza to, że nie masz wystarczających uprawnień do odblokowania nazwy domeny.
>> >
>> > Ponadto, jeśli pojawi się komunikat: "**AUTH/INFO code : Authcode is not managed by OVHcloud, contact the registry to claim it**", co oznacza, że kod transferu Twojej nazwy domeny nie będzie możliwy do pobrania za pośrednictwem [Panelu klienta OVHcloud](/links/manager).
>> >
>> > W obu przypadkach sprawdź, czy jesteś kontaktem **administrator** nazwy domeny korzystając z naszego przewodnika do [zarządzanie kontaktami](/pages/account_and_service_management/account_information/managing_contacts), a następnie sprawdź, czy rozszerzenie Twojej nazwy domeny pozwala na odblokowanie w [Panelu klienta OVHcloud](/links/manager).
>> >
>> > Niektóre *kody transferu* są zarządzane bezpośrednio przez *registry* przy rozszerzaniu nazwy domeny. *Rejestr* to organizacja, która zarządza wszystkimi nazwami domen dla wybranego rozszerzenia. Na przykład,**AFNIC** zarządza wszystkimi nazwami domen, których rozszerzenie oznacza "*.fr*". W takim przypadku należy skontaktować się bezpośrednio z repozytorium*, które zarządza rozszerzeniem Twojej nazwy domeny, aby pobrać *kod transferu*.
>>
>> ![dezaktywacja](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-deactivating.png){.thumbnail}
<!-- CP-STEPS-END:unlock-domain-transfer -->

> [!primary]
>
> Po odblokowaniu nazwy domeny zostanie ona odblokowana na siedem dni. Po tym czasie ochrona zostanie automatycznie ponownie włączona. Jeśli w tym czasie nie wystąpi o transfer nazwy domeny do nowego operatora, konieczne będzie ponowne usunięcie ochrony nazwy domeny.
>

### 2 - Pobrać kod transferu

> [!warning]
>
> Pamiętaj, że zawsze istnieje możliwość odblokowania i odzyskania kodu transferu nazwy domeny po jej wygaśnięciu. Zgodnie z zasadami rejestru, nazwa domeny w [redemptionPeriod](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) może wymagać przywrócenia w celu przeniesienia. Skontaktuj się z nowym rejestratorem, aby uzyskać szczegóły przeniesienia.
>

Po odblokowaniu Twojej nazwy domeny do transferu, pobierz jej kod transferu.

<!-- CP-STEPS-START:get-transfer-code -->
Kliknij na karty poniżej, aby wyświetlić kolejno każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią domenę.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> W zakładce `Informacje ogólne`{.action}, kliknij przycisk `AUTH/INFO`{.action} znajdujący się obok przycisku `Ochrona przed transferem`{.action}. Jeśli to konieczne, odśwież stronę.
>>
>> ![outgoingtransfer](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-disabled.png){.thumbnail}
>>
> **Krok 3**
>>
>> Wyświetli się wówczas okno zawierające kod AUTH/INFO (zwany również kodem transferu, hasłem nazwy domeny, AUTH-CODE lub EPP-Code).
>>
>> Kod zostanie poproszony przez nowego operatora o zakończenie procesu transferu. Szczegóły możesz sprawdzić u nowego operatora.
>>
>> Zamiast ręcznie wpisywać kod, zalecamy jego skopiowanie/wklejenie, ponieważ niektóre znaki mogą być łatwo mylone.
<!-- CP-STEPS-END:get-transfer-code -->

Po pobraniu kodu transferu **nie zablokuj ponownie nazwy domeny, chyba że nie chcesz jej już przenosić**.

### 3 - Rozpocząć transfer do nowego operatora

Po wykonaniu powyższych czynności, uruchom proces przeniesienia nazwy domeny, zazwyczaj zamawiając ją u nowego rejestratora nazw domen. Transfer może potrwać do 10 dni.

Aby uzyskać więcej informacji, skontaktuj się z wybranym przez Ciebie nowym rejestratorem nazw domen.

> [!warning]
>
> Jeśli Twój nowy operator wymaga nowego kodu transferu, aktywuj ponownie **Ochronę przed transferem** dla swojej nazwy domeny, a następnie ponownie wyłącz ją kilka minut później. W ten sposób uzyskasz nowy kod transferu.
>

## Sprawdź również

[Transfer nazwy domeny.co.uk wychodzący](/pages/web_cloud/domains/transfer_outgoing_couk)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
