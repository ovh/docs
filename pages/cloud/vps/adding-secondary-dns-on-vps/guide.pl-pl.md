---
title: 'Konfiguracja DNS secondary OVHcloud na serwerze VPS'
slug: dns-secondary-vps
excerpt: Dowiedz się, jak dodać serwer DNS secondary dla Twojej domeny
section: Poziom zaawansowany
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 12-01-2022**

## Wprowadzenie

Jeśli skonfigurujesz serwer VPS jako serwer DNS, możesz użyć Secondary DNS OVHcloud do zainstalowania strefy DNS secondary. Dzięki temu serwery DNS Twojej domeny pozostaną dostępne nawet, jeśli serwer DNS primary nie odpowiada.

**Dowiedz się, jak dodać domenę do Panelu klienta i używać serwera DNS secondary OVHcloud.**

## Wymagania początkowe

- Domena, do której masz dostęp jako administrator
- Serwer [VPS](https://www.ovhcloud.com/pl/vps/) w Panelu klienta OVHcloud
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

> [!warning]
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Jesteś tym samym odpowiedzialny za ich prawidłowe funkcjonowanie.
>
> Niniejszy przewodnik ułatwi Ci realizację bieżących zadań. W przypadku trudności lub wątpliwości związanych z administrowaniem, użytkowaniem lub uruchomieniem usługi na serwerze zalecamy skorzystanie z pomocy specjalisty.
>

## W praktyce

### Etap 1: odzyskanie kodu <a name="retrievecode"></a>

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w części `Prywatny serwer wirtualny`{.action}.

Przejdź do zakładki `DNS secondary`{.action} i kliknij przycisk `Dodaj domenę`{.action}.

![Secondary DNS](images/sec-01.png){.thumbnail}

Wpisz nazwę domeny, którą chcesz dodać, następnie kliknij `Zatwierdź`{.action}.

![Secondary DNS](images/sec-02.png){.thumbnail}

W Panelu klienta wyświetli się komunikat dotyczący procesu weryfikacji.

![Secondary DNS](images/sec-03.png){.thumbnail}

Przed dodaniem domeny do DNS secondary OVHcloud należy zatwierdzić zezwolenie na zarządzanie domeną. Jest to realizowane poprzez automatyczne wyszukiwanie DNS subdomeny *ownercheck.twojejdomeny*. W tym celu generowany jest indywidualny ciąg znaków i wyświetlany w czerwonej strefie powiadomienia. Skopiuj ten kod, aby korzystać z niego na kolejnym etapie.

### Etap 2: weryfikacja autoryzacji domeny <a name="verifyingdomain"></a>

Operacja jest inna w zależności od tego, gdzie są zarządzane DNS Twojej domeny.

- Jeśli domena jest zarządzana przez zewnętrznego operatora domeny **lub** na tym etapie używa zewnętrznych serwerów DNS, zaloguj się do panelu klienta Twojego dostawcy DNS i dodaj w strefie DNS wpis TXT z subdomeną "ownercheck" oraz wartość dodaną wykonując [etap 1](#retrievecode).

- Jeśli domena jest zarządzana przez OVHcloud jako operator **i** używa serwerów DNS OVHcloud, dodaj rekord TXT do sekcji `Web Cloud`{.action} w Twoim [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). Postępuj zgodnie z instrukcjami zawartymi w przewodniku "[Edytuj strefę DNS](../../domains/hosting_www_jak_edytowac_strefe_dns/)”, jeśli nie znasz tego procesu.

![Secondary DNS](images/sec-04.png){.thumbnail}

### Etap 3: dodanie domeny

Po dodaniu rekordu TXT do strefy DNS domeny powtórzcie [kroki opisane w pierwszej części tego przewodnika](#retrievecode), aby dodać domenę do serwera DNS secondary OVHcloud.

Kliknij na `Zatwierdź`{.action}, aby rozpocząć automatyczną weryfikację właściciela, przepytując pole TXT. Wiadomość z Panelu klienta potwierdzi poprawność weryfikacji DNS. Możesz usunąć wpis TXT.

Dodane domeny wyświetlają się w zakładce z **nazwą odpowiadającą serwerowi DNS secondary**. Odśwież stronę w przeglądarce po dodaniu domeny.

![Secondary DNS](images/sec-05.png){.thumbnail}

Można usunąć domenę klikając przycisk `...`{.action} w tabeli.

> [!primary]
>
> Inne operacje niezbędne do konfiguracji Twojego serwera DNS dla Twoich domen mogą być wymagane:
>
> - konfiguracja usługi DNS (np. *BIND*)
> - konfiguracja wpisów GLUE
> - autoryzacja transferów strefy DNS
>
> Jeśli potrzebujesz dodatkowych informacji do realizacji tych zadań administracyjnych, skorzystaj z zewnętrznych dokumentacji.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
