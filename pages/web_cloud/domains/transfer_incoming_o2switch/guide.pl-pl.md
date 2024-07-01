---
title: 'Transfer domeny O2Switch do OVHcloud'
excerpt: 'Dowiedz się więcej o transferze domeny z systemu O2Switch do OVHcloud'
updated: 2024-07-01
flag: hidden
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Transfer domeny O2Switch wymaga zastosowania określonej procedury.

**Dowiedz się, jak wykonać transfer domeny O2Switch do OVHcloud**

> [!warning]
>
> [rejestrator](/links/web/domains-what-is-registrar) domeny reprezentuje organizację/autoryzowanego dostawcę, w którym domena jest zarejestrowana/zarejestrowana przez osobę prywatną, stowarzyszenie lub organizację. To u tego samego rejestratora odnawiasz rejestrację domeny (zazwyczaj raz w roku).
>
> Jeśli OVHcloud jest już rejestratorem Twojej domeny **przed** rozpoczęciem odpowiedniej procedury, przychodzący transfer domeny nie jest właściwą procedurą. Procedura transferu domeny ma zastosowanie **tylko** do domen zarejestrowanych u innego operatora niż OVHcloud.
>
> Aby przenieść zarządzanie domeną na inne konto klienta OVHcloud, odpowiednią metodą jest **zmiana kontaktów**. Procedura opisana jest w [tym przewodniku](/pages/account_and_service_management/account_information/managing_contacts).
> Jeśli musisz również zmienić **właściciela** domeny, musisz zmienić **przed** zmianą kontaktów domeny. W tym celu postępuj zgodnie z instrukcjami zawartymi w przewodniku dotyczącym [zmiany właściciela domeny](/pages/web_cloud/domains/trade_domain).
>

## Wymagania początkowe

- Domena jest zarejestrowana u operatora O2Switch.
- Domena istnieje od ponad 60 dni.
- W ciągu ostatnich 60 dni domena nie została przeniesiona ani nie zmienił właściciela.
- Nazwa domeny ma status "OK" lub "możliwy do przeniesienia".
- Nazwa domeny nie wygasła i ma datę wygaśnięcia umożliwiającą zakończenie procesu transferu w odpowiednim czasie (zalecane: ponad 60 dni).

Musisz również:

- Posiadanie możliwości odblokowania domeny.
- Posiadanie kodu transferu lub możliwość jego uzyskania.
- Posiadanie uprawnień do złożenia wniosku o transfer domeny.
- Właściciel i/lub administratorzy domeny zostali poinformowani o wszczęciu procedury transferu domeny.

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Niemniej jednak w przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner) lub kontakt z aktualnym operatorem. Niestety firma OVHcloud nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) niniejszego przewodnika.
>

## W praktyce

> [!primary]
>
> Aktywna strefa DNS domeny zawiera konfigurację DNS zastosowaną do Twojej domeny. Dzięki niemu możesz powiązać domenę z Twoimi usługami, takimi jak konta e-mail lub strona WWW.
>
> Jeśli oprócz nazwy domeny posiadasz również aktywną strefę DNS dla domeny u dotychczasowego operatora, sprawdź u jego służb, czy strefa DNS zastosowana do Twojej domeny nie zostanie usunięta po zakończeniu transferu.
>
> Rekordy usuwają strefę DNS obecną u nich w momencie zakończenia transferu Twojej domeny. W takim przypadku przed rozpoczęciem operacji związanych z transferem domeny utwórz ponownie strefę DNS w OVHcloud.
>
> Aby to zrobić, zapoznaj się z następującymi przewodnikami:
>
> - [Utwórz strefę DNS w OVHcloud](/pages/web_cloud/domains/dns_zone_create)
> - [Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>
> Upewnij się również, że dotychczasowy operator nie zamknie dodatkowych usług, takich jak na przykład adresy e-mail powiązane z Twoją domeną.
>

### Odblokowanie domeny i pobranie kodu transferu

Aby odblokować domenę i uzyskać kod transferu, wykonaj kroki opisane w [dedykowanej dokumentacji O2Switch](https://faq.o2switch.fr/espace-client/recuperer-code-de-transfert){.external}.

### Rozpocznij transfer domeny do OVHcloud

Po uzyskaniu kodu autoryzacyjnego możesz przenieść domenę zgodnie z instrukcjami zawartymi w przewodniku "[Transfer domeny do OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)".

## Sprawdź również <a name="go-further"></a>

[Transfer domeny do OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Przeniesienie strony WWW i kont e-mail do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).