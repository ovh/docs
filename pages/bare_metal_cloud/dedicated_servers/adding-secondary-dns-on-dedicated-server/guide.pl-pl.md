---
title: "Konfiguracja secondary DNS OVHcloud na serwerze dedykowanym"
excerpt: "Dodaj serwer secondary DNS dla domeny hostowanej na serwerze dedykowanym OVHcloud, aby zwiększyć odporność DNS."
updated: 2021-01-08
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Jeśli skonfigurujesz serwer dedykowany jako serwer DNS, możesz użyć DNS secondary OVHcloud, aby zainstalować strefę zapasową. DNS domeny pozostanie dostępny nawet, jeśli serwer DNS główny nie odpowiada.

**Niniejszy przewodnik wyjaśnia, jak dodać domenę w Panelu klienta OVHcloud i używać serwera DNS secondary.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](/links/bare-metal/bare-metal)
- Posiadanie [domeny](/links/web/domains) podlegającej administracjom lub zarządzaniu technicznym

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Serwery dedykowane](/links/control-panel/baremetal-dedicated-servers)
- **Ścieżka nawigacji:** `Bare Metal Cloud`{.action} > `Serwery dedykowane`{.action} > Wybierz serwer

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności lub wątpliwości związanych z administrowaniem, użytkowaniem lub wdrażaniem usług na serwerze zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner).
> 

## W praktyce

### Dodanie domeny <a name="addingdomain"></a>

Kliknij zakładkę `DNS secondary`{.action}, a następnie przycisk `Dodaj domenę`{.action}.

![Zakładka Secondary DNS z przyciskiem Dodaj domenę](images/cp-01.png){.thumbnail}

Wprowadź adres IP i domenę, którą chcesz dodać, następnie kliknij `Dalej`{.action}.

![Formularz dodawania domeny z polami adresu IP i nazwy domeny](images/cp-02.png){.thumbnail}

Po kliknięciu `Dalej`{.action} w tym etapie zostanie aktywowana weryfikacja domeny. Jeśli nie dodałeś jeszcze rekordu TXT do strefy DNS, postępuj zgodnie z instrukcjami [podanymi poniżej](#verifyingdomain). W przeciwnym razie kliknij Dalej, `klikając Dalej`{.action}.

![Etap weryfikacji domeny z instrukcjami rekordu TXT](images/cp-03.png){.thumbnail}

Po kliknięciu `Dodaj`{.action} w ostatnim oknie domena zostanie dodana do serwera DNS secondary OVHcloud.

Dodane domeny zostaną wymienione w tej zakładce i mogą zostać usunięte po kliknięciu na przycisk `...`{.action}. Obok domeny wyświetla się nazwa serwera DNS secondary.

![Lista dodanych domen secondary DNS z opcją usunięcia](images/cp-05.png){.thumbnail}

> [!primary]
>
> Inne operacje wymagane do konfiguracji Twojego własnego DNS domeny to:
>
> - konfiguracja usługi DNS (np. *BIND*)
> - konfiguracja wpisów GLUE
> - zezwolenie na transfer strefy
>
> Jeśli potrzebujesz dodatkowych informacji, aby uzupełnić te zadania administracyjne, skorzystaj z odpowiednich zewnętrznych dokumentów.

### Weryfikacja zezwolenia dla domeny <a name="verifyingdomain"></a>

Zanim dodasz domenę do DNS secondary OVHcloud, musisz potwierdzić, że zezwalasz na zarządzanie tą domeną. Przeprowadza się to przez zautomatyzowane wyszukiwanie DNS subdomeny *ownercheck.twojadomena*. W tym celu generowany jest unikalny ciąg znaków widoczny w Panelu klienta OVHcloud.

- Jeśli domena jest zarządzana przez zewnętrznego operatora domeny lub na tym etapie korzysta z zewnętrznych serwerów DNS, zaloguj się do panelu klienta dostawcy DNS i dodaj rekord TXT z subdomeną "ownercheck" oraz wartością przedstawioną w etapie 2 ["Dodania domeny"](#addingdomain).

- Jeśli domena jest zarządzana przez OVHcloud jako serwer do rejestracji i korzysta z serwerów DNS OVHcloud, zamknij okno klikając wcześniej na `Anuluj`{.action}. Następnie postępuj zgodnie z instrukcjami zawartymi w [tym przewodniku](/pages/web_cloud/domains/dns_zone_edit), aby dodać rekord TXT do Panelu [klienta OVHcloud](/links/manager).

![Okno weryfikacji właściciela pokazujące wartość rekordu TXT](images/cp-04.png){.thumbnail}

Po poprawnym dodaniu rekordu TXT do strefy DNS domeny powtórzyć [powyższe](#addingdomain) kroki i zakończyć procedurę.

## Sprawdź również

[Modyfikacja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

- [Pierwsze kroki z serwerem dedykowanym OVHcloud](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Konfiguracja IPv6 na serwerze dedykowanym](/pages/bare_metal_cloud/dedicated_servers/network_ipv6)
Dołącz do [grona naszych użytkowników](/links/community).
