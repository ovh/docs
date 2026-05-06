---
title: 'Transfer nazwy domeny Ionos do OVHcloud'
excerpt: 'Dowiedz się więcej o transferze nazwy domeny z systemu Ionos do OVHcloud'
updated: 2026-02-10
---

## Wprowadzenie

Transfer nazwy domeny Ionos wymaga zastosowania określonej procedury.

**Dowiedz się, jak wykonać transfer nazwy domeny Ionos do OVHcloud**

> [!warning]
>
> [rejestrator](/links/web/domains-what-is-registrar) nazwy domeny reprezentuje organizację/autoryzowanego dostawcę, w którym nazwa domeny jest zarejestrowana/zarejestrowana przez osobę prywatną, stowarzyszenie lub organizację. To u tego samego rejestratora odnawiasz rejestrację nazwy domeny (zazwyczaj raz w roku).
>
> Jeśli OVHcloud jest już rejestratorem Twojej nazwy domeny **przed** rozpoczęciem odpowiedniej procedury, przychodzący transfer nazwy domeny nie jest właściwą procedurą. Procedura transferu nazwy domeny ma zastosowanie **tylko** do nazw domen zarejestrowanych u innego operatora niż OVHcloud.
>
> Aby przenieść zarządzanie nazwą domeny na inne konto klienta OVHcloud, odpowiednią metodą jest **zmiana kontaktów**. Procedura opisana jest w [tym przewodniku](/pages/account_and_service_management/account_information/managing_contacts).
> Jeśli musisz również zmienić **abonenta** nazwy domeny, musisz zmienić **przed** zmianą kontaktów nazwy domeny. W tym celu postępuj zgodnie z instrukcjami zawartymi w przewodniku dotyczącym [zmiany abonenta nazwy domeny](/pages/web_cloud/domains/trade_domain).
>

## Wymagania początkowe

- Nazwa domeny jest zarejestrowana u operatora Ionos.
- Nazwa domeny istnieje od ponad 60 dni.
- W ciągu ostatnich 60 dni nazwa domeny nie została przeniesiona ani nie zmienił abonent.
- Nazwa domeny ma status "OK" lub "możliwy do przeniesienia".
- Nazwa domeny nie wygasła i ma datę wygaśnięcia umożliwiającą zakończenie procesu transferu w odpowiednim czasie (zalecane: ponad 60 dni).

Musisz również:

- Posiadanie możliwości odblokowania nazwy domeny.
- Posiadanie kodu transferu lub możliwość jego uzyskania.
- Posiadanie uprawnień do złożenia wniosku o transfer nazwy domeny.
- Abonent i/lub administratorzy nazwy domeny zostali poinformowani o wszczęciu procedury transferu nazwy domeny.

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Niemniej jednak w przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner) lub kontakt z aktualnym operatorem. Niestety firma OVH nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) niniejszego przewodnika.
>

## W praktyce

> [!primary]
>
> Aktywna strefa DNS nazwy domeny zawiera konfigurację DNS zastosowaną do Twojej nazwy domeny. Dzięki niemu możesz powiązać nazwę domeny z Twoimi usługami, takimi jak konta e-mail lub strona WWW.
>
> Jeśli oprócz nazwy domeny posiadasz również aktywną strefę DNS dla nazwy domeny u dotychczasowego operatora, sprawdź u jego służb, czy strefa DNS zastosowana do Twojej nazwy domeny nie zostanie usunięta po zakończeniu transferu.
>
> Rekordy usuwają strefę DNS obecną u nich w momencie zakończenia transferu Twojej nazwy domeny. W takim przypadku przed rozpoczęciem operacji związanych z transferem nazwy domeny utwórz ponownie strefę DNS w OVHcloud.
>
> Aby to zrobić, zapoznaj się z następującymi przewodnikami:
>
> - [Utwórz strefę DNS w OVHcloud](/pages/web_cloud/domains/dns_zone_create)
> - [Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>
> Upewnij się również, że dotychczasowy operator nie zamknie dodatkowych usług, takich jak na przykład adresy e-mail powiązane z Twoją nazwą domeny.
>
> Jeśli oprócz transferu Twojej nazwy domeny chcesz przenieść usługi z nią powiązane (strona WWW, konto e-mail, etc.), zapoznaj się z naszym przewodnikiem "[Przeniesienie strony WWW i powiązanych z nią usług do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".
> Ten przewodnik wyjaśnia, jak migrować wszystkie usługi bez przerw w ciągłości usług.
>
> Jeśli wykonujesz wyłącznie transfer Twojej nazwy domeny bez przenoszenia innych usług, upewnij się, że pobrałeś serwery DNS aktywne dla Twojej nazwy domeny od aktualnego **operatora** i wypełnisz ten przewodnik podczas etapu 3 "[Transfer nazwy domeny do OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)"
> Dzięki temu nie będziesz musiał przerywać przypisywania nazwy domeny do przypisanych usług zewnętrznych.
>

### Etap 1 - Wyłącz prywatne nagrywanie

Aby potwierdzić, czy prywatna rejestracja jest włączona dla Twojej nazwy domeny, wykonaj kroki opisane w [dokumentacji dedykowanej Ionos](https://www.ionos.com/help/domains/transferring-your-domain-within-ionos/disabling-private-registration-for-a-11-ionos-domain/).

#### Etap 2 - Wyłącz blokadę transferu

> [!warning]
>
> Ze względów bezpieczeństwa nazwy domen z rozszerzeniem globalnym (na przykład *.com*, *.net* lub *.org*) są domyślnie zablokowane i nie można ich przenieść. Przed rozpoczęciem transferu nazwy domeny należy wyłączyć blokadę transferu.
>

Postępuj zgodnie z instrukcjami zawartymi w [dokumentacji dedykowanej Ionos](https://www.ionos.com/help/domains/transferring-your-domain-within-ionos/disabling-the-domain-transfer-lock-with-11-ionos/).

### Etap 3 - Uzyskanie kodu autoryzacyjnego

Kod autoryzacyjny chroni Twoją nazwę domeny przed nieautoryzowanym transferem przez osoby trzecie. Ten kod jest niezbędny, aby zezwolić na transfer nazwy domeny do nowego dostawcy.

Postępuj zgodnie z instrukcjami zawartymi w [dokumentacji dedykowanej Ionos](https://www.ionos.com/help/domains/transferring-your-domain-away-from-ionos-to-another-provider/getting-the-authorization-code-for-your-domain-with-11-ionos/).

Po uzyskaniu kodu autoryzacyjnego możesz przenieść nazwę domeny zgodnie z instrukcjami zawartymi w przewodniku "[Transfer nazwy domeny do OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)".

## Sprawdź również <a name="go-further"></a>

[Przeniesienie strony WWW i kont e-mail do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).