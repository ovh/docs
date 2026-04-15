---
title: "Usunięcie błędu dla nazwy domeny"
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232);
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

Rejestracja nazwy domeny, jej transfer lub zmiana abonenta to operacje, w których może wystąpić błąd wymagający interwencji z Twojej strony.

**Dowiedz się, jak postępować w przypadku wystąpienia błędu dla nazwy domeny.**

## Wymagania początkowe

- Posiadanie jednej lub kilku [nazw domen](/links/web/domains).
- Aktualizacja [płatności](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) i [odnowień](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) nazw domen.

<!-- CP-NAV-START:web-ongoing-operations -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Operacje w toku](/links/control-panel/web-ongoing-operations)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Operacje w toku`{.action} > Wybierz zakładkę `Domena`{.action} lub `DNS`{.action}.

---
<!-- CP-NAV-END:web-ongoing-operations -->

## W praktyce

### Przegląd interfejsu zarządzania operacjami w toku

<!-- CP-STEPS-START:ongoing-ops-presentation -->
Kliknij poniższe karty, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Operacje w toku](/links/control-panel/web-ongoing-operations).
>>
> **Krok 2**
>>
>> Tabela zawiera listę wszystkich operacji związanych z nazwami domen w Twoim Panelu klienta.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-error-creating-domain-name-with-registry.png){.thumbnail}
>>
>> - `Domena`: Nazwa domeny, której dotyczy operacja.
>> - `Operacja`: Trwająca operacja dla nazwy domeny.
>> - `Komentarz`: Szczegóły bieżącej operacji. Instrukcje.
>> - `Data przetwarzania`: Data utworzenia operacji.
>> - `Data aktualizacji`: Znacznik czasu aktualizacji bieżącej operacji.
>> - `Data zakończenia`: Data zakończenia operacji.
>> - `Status`: Obecny stan operacji.
<!-- CP-STEPS-END:ongoing-ops-presentation -->

Nie wszystkie operacje wymienione w tej tabeli wymagają Twojej interwencji, aby przebiegały prawidłowo.

Niniejszy przewodnik dotyczy operacji **z błędem** na podstawie powtarzających się sytuacji.

### Sytuacje

> [!primary]
>
> Poniższa lista sytuacji nie jest wyczerpująca. Jeśli pojawi się błąd, który nie jest opisany w tym przewodniku:
>
> - Sprawdź, czy jesteś na bieżąco z [płatnościami](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) i [odnowieniami](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) nazw domen.
> - Sprawdź, czy dostępna jest czynność, klikając opcje po prawej stronie wybranej operacji.
> - Przeczytaj komunikat opisowy i sprawdź, czy pozwala on rozwiązać błąd.
>
> Jeśli mimo tych weryfikacji nie możesz rozwiązać błędu, [otwórz zgłoszenie serwisowe](/links/support) w Panelu klienta.

**Kliknij wybraną sytuację, aby wyświetlić jej zawartość.**

<!-- CP-STEPS-START:situation-document-request -->
/// details | Wniosek o dokumenty

Niektóre rozszerzenia nazw domen wymagają uzasadnienia rejestracji przez dostarczenie dokumentów. W takim przypadku należy przesłać dokumenty z Panelu klienta OVHcloud.

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Operacje w toku](/links/control-panel/web-ongoing-operations).
>>
> **Krok 2**
>>
>> Znajdź operację z błędem w tabeli.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/contacts-update-provide-us-with-the-documents-required.png){.thumbnail}
>>
> **Krok 3**
>>
>> Kliknij przycisk `...`{.action} po prawej stronie wybranej operacji.
>>
> **Krok 4**
>>
>> Pojawi się poniższe okno. Sekcja "Opis" zawiera szczegóły dotyczące wymaganego dokumentu oraz przycisk do jego przesłania.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-provide-us-with-the-documents-required.png){.thumbnail}

///
<!-- CP-STEPS-END:situation-document-request -->

<!-- CP-STEPS-START:situation-missing-info -->
/// details | Brakujące informacje

Podczas rejestracji nazwy domeny konieczne jest czasem uzupełnienie danych kontaktowych. Jeśli dane te nie odpowiadają kryteriom nazwy domeny, może pojawić się poniższy błąd.

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Operacje w toku](/links/control-panel/web-ongoing-operations).
>>
> **Krok 2**
>>
>> Znajdź operację z błędem w tabeli.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-complete-nic-admin-es-tld.png){.thumbnail}
>>
> **Krok 3**
>>
>> Kliknij przycisk `...`{.action} po prawej stronie wybranej operacji.
>>
> **Krok 4**
>>
>> Pojawi się poniższe okno. Wypełnij pola danymi kontaktowymi.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-complete-nic-admin-es-tld.png){.thumbnail}

///
<!-- CP-STEPS-END:situation-missing-info -->

<!-- CP-STEPS-START:situation-transfer-code -->
/// details | Nieprawidłowy kod transferu

Podczas transferu nazwy domeny do OVHcloud należy wprowadzić kod transferu (**authInfo** / **AuthCode**) przy składaniu zamówienia. Jeśli ten kod jest nieprawidłowy, operacja zostaje zawieszona. Możesz ją wznowić, wprowadzając poprawny kod.

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Operacje w toku](/links/control-panel/web-ongoing-operations).
>>
> **Krok 2**
>>
>> Znajdź operację z błędem w tabeli.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-auth-code-missing.png){.thumbnail}
>>
> **Krok 3**
>>
>> Kliknij przycisk `...`{.action} po prawej stronie wybranej operacji.
>>
> **Krok 4**
>>
>> Pojawi się poniższe okno. Wprowadź kod transferu (**authInfo** / **AuthCode**) i uruchom ponownie operację.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-auth-code-missing.png){.thumbnail}

///
<!-- CP-STEPS-END:situation-transfer-code -->

<!-- CP-STEPS-START:situation-dns-error -->
/// details | Błąd serwera DNS

Błąd może wystąpić, jeśli serwery DNS przypisane do nazwy domeny nie działają.
W poniższej sytuacji adres IP serwera DNS nie odpowiada.

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Operacje w toku](/links/control-panel/web-ongoing-operations).
>>
> **Krok 2**
>>
>> Znajdź operację z błędem w tabeli.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-unable-to-retrieve-dns-ip.png){.thumbnail}
>>
> **Krok 3**
>>
>> W sekcji `Domeny`{.action} wybierz odpowiednią nazwę domeny, a następnie kliknij zakładkę `Serwery DNS`{.action}.
>>
> **Krok 4**
>>
>> W tej zakładce [zmień serwery DNS](/pages/web_cloud/domains/dns_server_edit).

///
<!-- CP-STEPS-END:situation-dns-error -->

<!-- CP-STEPS-START:situation-domain-blocked -->
/// details | Błąd dotyczący nazwy domeny .ie, .de lub .it po aktualizacji DNS

Kiedy modyfikujesz serwery DNS, registry może sprawdzić nowe serwery DNS i powiązaną strefę DNS, a następnie zablokować nazwę domeny, jeśli konfiguracja jest niezgodna.

> [!warning]
>
> Ten rodzaj blokady jest inicjowany przez registry, nie przez OVHcloud. Nawet jeśli nazwa domeny jest zablokowana przez registry, jej serwery DNS będą wyświetlane jako `Aktywne` w Panelu klienta OVHcloud.

Aby sprawdzić, czy Twoja nazwa domeny jest zablokowana, kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Operacje w toku](/links/control-panel/web-ongoing-operations).
>>
> **Krok 2**
>>
>> Znajdź operację z błędem w tabeli.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-error-occured-updating-domain.png){.thumbnail}
>>
> **Krok 3**
>>
>> W celu sprawdzenia nazwy domeny zalecamy użycie narzędzia weryfikacyjnego dostarczonego przez registry:
>>
>> - Dla nazwy domeny **.de**: <https://nast.denic.de/>.
>> - Dla nazwy domeny **.it**: <https://dns-check.nic.it/>.
>>
>> > [!primary]
>> >
>> > Jeśli Twój rejestr nie dostarcza narzędzia do weryfikacji serwerów DNS, możesz odpytywać nowe serwery DNS za pomocą polecenia `nslookup` w wierszu poleceń systemu Windows lub za pomocą polecenia `dig` w terminalu Linux lub macOS.
>> >
>> > Jeśli serwery DNS są dostępne, narzędzie zwróci adres IP.
>> >
>> > W każdym przypadku upewnij się u administratora serwera DNS, że serwer DNS jest prawidłowo skonfigurowany do obsługi strefy DNS Twojej nazwy domeny.
>>
> **Krok 4**
>>
>> Po zidentyfikowaniu źródła błędu i jego naprawieniu kliknij przycisk `...`{.action} po prawej stronie wybranej operacji i uruchom ponownie operację weryfikacji DNS.

///
<!-- CP-STEPS-END:situation-domain-blocked -->

<!-- CP-STEPS-START:situation-internal-error -->
/// details | Błąd wewnętrzny OVHcloud

Może pojawić się błąd z komentarzem "błąd wewnętrzny".

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Operacje w toku](/links/control-panel/web-ongoing-operations).
>>
> **Krok 2**
>>
>> Znajdź operację z błędem w tabeli.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-renewal-internal-error.png){.thumbnail}
>>
> **Krok 3**
>>
>> Ten błąd nie pozwala na podjęcie żadnych działań z poziomu Panelu klienta OVHcloud.
>>
>> Sprawdź najpierw, czy Twoja nazwa domeny i serwery DNS są aktywne.
>>
>> Jeśli zauważysz nieprawidłowość niezwiązaną z konfiguracją serwerów DNS lub strefy DNS, [skontaktuj się z pomocą OVHcloud](/links/support) w celu zidentyfikowania przyczyny awarii.

///
<!-- CP-STEPS-END:situation-internal-error -->

## Sprawdź również

[Transfer nazwy domeny do OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Transfer nazwy domeny do innego operatora](/pages/web_cloud/domains/transfer_outgoing_domain)

[Zmiana serwerów DNS nazwy domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
