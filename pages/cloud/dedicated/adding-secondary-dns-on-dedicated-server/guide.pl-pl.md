---
title: 'Tworzenie DNS secondary na serwerze dedykowanym'
slug: dodawanie-domeny-secondary-dns
excerpt: 'Dowiedz się, jak utworzyć DNS secondary dla Twojego serwera dedykowanego OVHcloud'
section: 'Poziom zaawansowany'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 12-01-2021**

## Wprowadzenie

Jeśli skonfigurujesz serwer dedykowany jako serwer DNS, możesz użyć DNS secondary OVHcloud, aby zainstalować strefę zapasową. DNS domeny pozostanie dostępny nawet, jeśli serwer DNS główny nie odpowiada.

**Niniejszy przewodnik wyjaśnia, jak dodać domenę w Panelu klienta OVHcloud i używać serwera DNS secondary.**


## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/){.external}
- Posiadanie [domeny](https://www.ovh.pl/domeny/){.external} podlegającej administracjom lub zarządzaniu technicznym
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności lub wątpliwości związanych z administrowaniem, użytkowaniem lub wdrażaniem usług na serwerze zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/directory/).
> 


## W praktyce

### Dodanie domeny <a name="ajoutdomaine"></a>

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Bare Metal Cloud`{.action}, a następnie wybierz swój serwer z `Serwery dedykowane`{.action}.

Następnie kliknij zakładkę `DNS secondary`{.action}, a następnie przycisk `Dodaj domenę`{.action}.

![DNS secondary](images/cp-01.png){.thumbnail}

Wprowadź adres IP i domenę, którą chcesz dodać, następnie kliknij `Dalej`{.action}.

![DNS secondary](images/cp-02.png){.thumbnail}

Po kliknięciu `Dalej`{.action} w tym etapie zostanie aktywowana weryfikacja domeny. Jeśli nie dodałeś jeszcze rekordu TXT do strefy DNS, postępuj zgodnie z instrukcjami [podanymi poniżej](#verificationdomaine). W przeciwnym razie kliknij Dalej, `klikając Dalej`{.action}.

![DNS secondary](images/cp-03.png){.thumbnail}

Po kliknięciu `Dodaj`{.action} w ostatnim oknie domena zostanie dodana do serwera DNS secondary OVHcloud.

Dodane domeny zostaną wymienione w tej zakładce i mogą zostać usunięte po kliknięciu na przycisk `...`{.action}. Obok domeny wyświetla się nazwa serwera DNS secondary.

![DNS secondary](images/cp-05.png){.thumbnail}

> [!primary]
>
> Inne operacje wymagane do konfiguracji Twojego własnego DNS domeny to:
>
> - konfiguracja usługi DNS (np. *BIND*)
> - konfiguracja wpisów GLUE
> - zezwolenie na transfer strefy
>
> Jeśli potrzebujesz dodatkowych informacji, aby uzupełnić te zadania administracyjne, skorzystaj z odpowiednich zewnętrznych dokumentów.

### Weryfikacja zezwolenia dla domeny <a name="verificationdomaine"></a>

Zanim dodasz domenę do DNS secondary OVHcloud, musisz potwierdzić, że zezwalasz na zarządzanie tą domeną. Przeprowadza się to przez zautomatyzowane wyszukiwanie DNS subdomeny *ownercheck.twojej domeny*. W tym celu generowany jest unikalny ciąg znaków widoczny w Panelu klienta OVHcloud.

- Jeśli domena jest zarządzana przez zewnętrznego operatora domeny lub na tym etapie korzysta z zewnętrznych serwerów DNS, zaloguj się do panelu klienta dostawcy DNS i dodaj rekord TXT z subdomeną "ownercheck" oraz wartością przedstawioną w etapie 2 [Dodania domeny"](#ajoutdomaine).

- Jeśli domena jest zarządzana przez OVHcloud jako serwer do rejestracji i korzysta z serwerów DNS OVHcloud, zamknij okno klikając wcześniej na `Anuluj`{.action}. Następnie postępuj zgodnie z instrukcjami zawartymi w [tym przewodniku](../../domains/hosting_www_jak_edytowac_strefe_dns/), aby dodać rekord TXT do Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

![DNS secondary](images/cp-04.png){.thumbnail}

Po poprawnym dodaniu rekordu TXT do strefy DNS domeny powtórzyć [powyższe](#ajoutdomaine) kroki i zakończyć procedurę.

## Sprawdź również

[Modyfikacja strefy DNS OVHcloud](../../domains/hosting_www_jak_edytowac_strefe_dns/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
