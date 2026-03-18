---
title: 'Usunięcie błędu dla nazwy domeny'
updated: 2026-02-10
---

## Wprowadzenie

Rejestracja nazwy domeny, jej transfer, zmiana abonenta to operacje, w których może wystąpić błąd. Może zaistnieć konieczność interwencji z Twojej strony.

**Dowiedz się, jak postępować w przypadku wystąpienia błędu dla nazwy domeny.**

## Wymagania początkowe

- Być abonentem jednej lub kilku [nazw domen](/links/web/domains)
- Aktualizacja w [płatności](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) i [odnowienie](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) powiązanych usług (nazwa domeny i hosting)

<!-- CP-NAV-START:web-domains -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Domeny](/links/control-panel/web-domains)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Domeny`{.action} > Wybierz nazwę domeny

---
<!-- CP-NAV-END:web-domains -->

## W praktyce

Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. Kliknij `Operacje w toku`{.action}.

W tabeli możesz sprawdzić operacje związane z nazwami domen w Twoim Panelu klienta.

![nazwa domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-header.png){.thumbnail}

- `Domena`: Nazwa domeny, której dotyczy operacja.
- `Operacja`: Trwa wykonywanie operacji dla nazwy domeny.
- `Komentarz`: Szczegóły operacji w trakcie. Instrukcje.
- `Data przetwarzania`: Data utworzenia operacji.
- `Data aktualizacji`:  Znacznik czasu aktualizacji operacji w trakcie.
- `Data zakończenia`: Data zakończenia operacji.
- `Status`: Obecny stan operacji.

Wszystkie operacje wymienione w tej tabeli nie wymagają interwencji, aby były przeprowadzane w normalnych warunkach.<br>
W niniejszym przewodniku przyjrzymy się operacjom **z błędem**, posługując się przykładami, które się powtarzają.

![nazwa domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-error-creating-domain-name-with-registry.png){.thumbnail}

### Przykłady

> [!primary]
>
> Poniższa lista przykładów nie jest wyczerpująca. Jeśli pojawi się błąd, który nie jest opisany w tym przewodniku:
>
> - Sprawdź, czy jesteś na bieżąco w [płatnościach](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) i [odnowieniach](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) Twoich nazw domen.
> - Sprawdź, czy możesz działać klikając przycisk `...`{.action} znajdujący się po prawej stronie wybranej operacji.
> - Przeczytaj komunikat opisowy i sprawdź, czy pozwala on rozwiązać błąd.
>
> Jeśli mimo tych weryfikacji nie jesteś w stanie działać na nazwę domeny, prosimy o otwarcie zgłoszenia serwisowego w Panelu klienta.
>

#### Wniosek o dokumenty

Niektóre rozszerzenia nazw domen muszą uzasadnić ich użycie udostępniając dokumenty. W takim przypadku należy przesłać dokumenty w oknie `Operacje w toku`{.action}.

![nazwa domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/contacts-update-provide-us-with-the-documents-required.png){.thumbnail}

Aby dostarczyć niezbędne dokumenty, kliknij przycisk `...`{.action} po prawej stronie wybranej operacji.<br>
Pojawi się poniższe okno, w części "Opis" otrzymasz szczegółowe informacje na temat dokumentu, który ma być dostarczony, oraz przycisk do pobrania dokumentu.

![nazwa domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-provide-us-with-the-documents-required.png){.thumbnail}

#### Brakujące informacje

Podczas rejestracji nazwy domeny konieczne jest czasem uzupełnienie danych kontaktowych. Jeśli nie odpowiadają kryteriom nazwy domeny, możesz otrzymać błąd.

![nazwa domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-complete-nic-admin-es-tld.png){.thumbnail}

Kliknij przycisk `...`{.action} po prawej stronie operacji.<br>
Pojawi się poniższe okno. Wpisz pola informacjami dotyczącymi wybranego kontaktu.

![nazwa domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-complete-nic-admin-es-tld.png){.thumbnail}

#### Nieprawidłowy kod transferu 

Po przeniesieniu nazwy domeny do OVHcloud należy wprowadzić kod transferu (**authInfo**) podczas składania zamówienia. Jeśli ten kod jest nieprawidłowy, operacja zostaje zawieszona, ale możesz wznowić operację, wprowadzając poprawny kod.

![nazwa domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-auth-code-missing.png){.thumbnail}

Kliknij przycisk `...`{.action} po prawej stronie operacji.<br>
Pojawi się poniższe okno, wprowadź kod transferu (**authInfo**) i uruchom ponownie operację.

![nazwa domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-auth-code-missing.png){.thumbnail}

#### Błąd związany z serwerami DNS

Błąd może wystąpić, jeśli serwery DNS przypisane do nazwy domeny nie działają.<br>
W poniższym przykładzie adres IP serwera DNS nie odpowiada.

![nazwa domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-unable-to-retrieve-dns-ip.png){.thumbnail}

W sekcji `Domeny`{.action} wybierz odpowiednią nazwę domeny, a następnie kliknij zakładkę `Serwery DNS`{.action}. W tej zakładce [zmień serwery DNS](/pages/web_cloud/domains/dns_server_edit). 

#### Błąd dotyczący nazwy domeny **.ie**,.**de** lub **.it** po aktualizacji DNS

Kiedy modyfikujesz serwery DNS, registry może sprawdzić nowe serwery DNS i strefę DNS oraz zablokować nazwę domeny, jeśli jej konfiguracja jest nieprawidłowa.

> [!warning]
>
> Ten rodzaj blokady jest inicjowany przez registry, nie przez OVHcloud. Nawet jeśli nazwa domeny jest zablokowana przez registry, jej serwery DNS wyświetlają się w Panelu klienta jako `aktywa`.

Aby sprawdzić, czy Twoja nazwa domeny jest zablokowana, zapoznaj się z tabelą `Operacje w toku`{.action}.

![nazwa domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-error-occured-updating-domain.png){.thumbnail}

W celu sprawdzenia nazwy Twojej nazwy domeny zalecamy użycie narzędzia weryfikacyjnego dostarczonego przez registry:

- W przypadku nazwy domeny **.de**: <https://nast.denic.de/>.
- Dla domeny z rozszerzeniem.**it**: <https://dns-check.nic.it/>.

> [!primary]
>
> Jeśli Twój rejestr nie dostarcza narzędzia do weryfikacji serwerów DNS, możesz odpytywać nowe serwery DNS za pomocą polecenia `nslookup` sur na polecenie Windows lub za pomocą polecenia `dig` na "urządzeniu" Linux lub macOS. 
>
> Jeśli serwery DNS są dostępne, narzędzie zwraca adres IP.
>
> We wszystkich przypadkach upewnij się, że administrator serwera DNS jest ustawiony na serwerze DNS, aby pomieścić strefę DNS Twojej nazwy domeny.

Po wybraniu źródła błędu i jego poprawieniu kliknij przycisk `...`{.action} po prawej stronie wybranej operacji i uruchom ponownie operację weryfikacji DNS.

#### Błąd wewnętrzny OVHcloud

Może pojawić się błąd, którego szczegóły dotyczą "błąd wewnętrzny". Ten błąd nie pozwala na wykonywanie operacji po Twojej stronie.<br>
Sprawdź najpierw, czy Twoja nazwa domeny i serwery DNS są aktywne. 

Jeśli zauważysz problem, który nie jest związany z konfiguracją serwerów DNS lub strefy DNS, skontaktuj się z pomocą OVHcloud, w celu zidentyfikowania źródła awarii.

![nazwa domeny](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-renewal-internal-error.png){.thumbnail}

## Sprawdź również

[Transfer nazwy domeny do OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Transfer nazwy domeny do innego operatora](/pages/web_cloud/domains/transfer_outgoing_domain)

[Zmiana serwerów DNS nazwy domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
