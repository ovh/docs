---
title: "Jak uzyskać ślad węglowy Twoich usług OVHcloud"
excerpt: "Dowiedz się, jak odzyskać miesięczny ślad węglowy usług OVHcloud za pomocą naszego kalkulatora emisji dwutlenku węgla"
updated: 2025-06-17
---

## Wprowadzenie

W związku z Twoją działalnością lub zainteresowaniem tym tematem może być konieczne obliczenie śladu węglowego Twoich usług.

**Dowiedz się, jak w skali miesiąca pobrać ślad węglowy generowany przez Twoje usługi OVHcloud.**

## Wymagania początkowe

- Posiadanie statusu kontaktu "Płatności" za usługi, w przypadku których chcesz uzyskać ślad węglowy. Aby uzyskać więcej informacji, zapoznaj się z [przewodnikiem dotyczącym zarządzania kontaktami](/pages/account_and_service_management/account_information/managing_contacts).

**Obliczanie śladu węglowego jest dostępne dla następujących usług:**

- [Serwer dedykowany](/links/bare-metal/bare-metal) (Advance, Game, Scale, High Grade, Storage)
- [Serwer dedykowany Eco](/links/bare-metal/eco) (Rise, Kimsufi, So You Start)
- [VMware on OVHcloud](/links/hosted-private-cloud/vmware)
- [Instancje Public Cloud (Compute)](/links/public-cloud/compute)

## W praktyce

Należy wziąć pod uwagę kilka kwestii:

- Nie możesz wygenerować bilansu dla bieżącego miesiąca.
- Za pośrednictwem API OVHcloud podasz datę na początku, w połowie lub na koniec miesiąca dla wybranego miesiąca. Bilans będzie zależał od pełnego miesiąca.
- Bilans nie może być generowany dłużej niż ostatnie 24 miesiące.
- Brak bilansu za okres przed datą wdrożenia funkcji dla każdej usługi OVHcloud (patrz tabela poniżej).

| Usługa | Data uruchomienia kalkulatora śladu węglowego |
|---|---|
| Serwer Dedykowany | 2023/05/01 |
| Serwer Dedykowany Eco | 2023/05/01 |
| VMware on OVHcloud | 2023/08/01 |
| Instancje Public Cloud | 2025/01/01 |

### Pobranie miesięcznego bilansu za poprzedni miesiąc w Panelu klienta OVHcloud

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
1. Na stronie, która się wyświetli i w kolumnie po lewej stronie przejdź do sekcji **Przydatne linki**, następnie kliknij zakładkę `Mój ślad węglowy`{.action}.
1. Na nowej stronie, która się wyświetli, kliknij `Pobierz dane dot. śladu węglowego z m-ca: [Miesiąc] [Rok]`{.action}.

![Carbon footprint](/pages/assets/screens/control_panel/product-selection/right-column/carbon-footprint/my-carbon-footprint.png){.thumbnail}

Co miesiąc będziesz mógł pobrać ślad węglowy z poprzedniego miesiąca w odniesieniu do wybranych usług.

Jeśli potrzebujesz śladu węglowego za miesiąc przed bieżącym miesiącem, musisz obowiązkowo przejść przez nasze API, aby go odzyskać.

### Pobierz bilans miesięczny sprzed poprzedniego miesiąca za pośrednictwem naszych API

Udostępniamy domyślnie API OVHcloud, które umożliwiają programistom lub integratorom łączenie, na przykład, funkcji dostępnych lub nie w Panelu klienta OVHcloud bezpośrednio z ich aplikacjami lub rozwiązaniami.

#### Etap 1 - Logowanie do API OVHcloud

- Przejdź do naszej strony [API OVHcloud](/links/api) (upewnij się, że jesteś na `https://eu.api.ovh.com` czy Twoje usługi są zainstalowane w Europie i na `https://ca.api.ovh.com` jeśli są zainstalowane poza Europą).
- Na stronie, która się wyświetli kliknij `Explore the OVHcloud API`{.action}.
- Na nowej stronie, która się wyświetli i w lewej części strony, przejdź do formularza znajdującego się po prawej stronie pola `v1`{.action}, następnie wybierz/wpisz opcję `/me`.
- Na liście wywołań API, która się wyświetla poniżej, wyszukaj i kliknij następujące wywołanie API: **POST /me/carbonCalculator/task**. Możesz również kliknąć bezpośrednio na poniższe wywołanie API, aby uzyskać do niego dostęp:

> [!api]
>
> @api {v1} /me POST /me/carbonCalculator/task
>

- Po prawej stronie wyświetli się API z ramką do uzupełnienia.
- Kliknij przycisk znajdujący się w prawym górnym rogu o nazwie `Authenticate`{.action}, a następnie przycisk `Login with OVHcloud SSO`{.action}.
- Otworzy się interfejs logowania do [Panelu klienta OVHcloud](/links/manager).
- Zaloguj się za pomocą identyfikatora klienta, następnie kliknij `Authorize`{.action}, aby korzystać z API OVHcloud w połączeniu z Twoimi usługami.
- Zostaniesz automatycznie przekierowany do poprzedniej strony API **POST /me/carbonCalculator/task**.

#### Etap 2 - Poproś o wygenerowanie bilansu i pobierz identyfikator żądanego zadania

Zastąp datę dzisiejszą, która pojawia się w ramce API datą, z którą chcesz zatrzymać obliczanie bilansu. Zachowaj następujący format daty:

```bash
{
  "date": "YYYY-MM-DD"
}
```

![API](/pages/assets/screens/api/post-me-carboncalculator-task.png){.thumbnail}

Po wpisaniu daty kliknij niebieski przycisk `EXECUTE`{.action} znajdujący się w prawym dolnym rogu poprzednio wypełnionej sekcji.

Jeśli wszystko zostało wykonane prawidłowo, `taskID` pojawia się w oknie `RESPONSE`{.action}, gdy opuszczasz stronę, pod przyciskiem `EXECUTE`{.action}.

![API](/pages/assets/screens/api/post-me-carboncalculator-task-response.png){.thumbnail}

Na przykład, jeśli Twoim identyfikatorem klienta OVHcloud jest `aa00000-ovh`, a wcześniej wybrana data to `31-01-2025`, otrzymasz następujący wynik:

```bash
{
  "taskID": "aa00000-ovh_202501"
}
```

Skopiuj tylko uzyskaną wartość po Twojej stronie, która jest równa wartości z naszego przykładu `aa00000-ovh_202501` (bez kopiowania dwóch `"` znajdujących się na końcach).

#### Etap 3 - Pobieranie pliku z bilansem węglowym Twoich usług w formacie PDF

Dzięki wartości `taskID` uprzednio uzyskanej, będziesz mógł pobrać bilans dwutlenku węgla Twoich usług w formacie PDF.

Pozostań na naszej stronie [API OVHcloud](/links/api) i wykonaj następujące czynności:

- W lewej części strony przejdź do formularza znajdującego się po prawej stronie formularza `v1`{.action}, następnie wybierz/wpisz wybór `/me`{.action}.
- Na liście wywołań API, która się wyświetla poniżej, wyszukaj i kliknij następujące wywołanie API: **GET /me/carbonCalculator/task/{taskID}**. Możesz również kliknąć bezpośrednio na poniższe wywołanie API, aby uzyskać do niego dostęp:

> [!api]
>
> @api {v1} /me GET /me/carbonCalculator/task/{taskID}
>

- Po prawej stronie wyświetla się wywołanie API z formularzem do wypełnienia.

Wypełnij formularz w części `PATH PARAMETERS` w następujący sposób:

- `taskID`: skopiuj tutaj wartość taskID pobraną podczas wykonywania etapu 2.

![API](/pages/assets/screens/api/get-me-carboncalculator-task-taskid.png){.thumbnail}

Po wpisaniu poprawnej wartości Twojego `taskID` kliknij niebieski przycisk `EXECUTE`{.action}.

Następujący wynik pojawia się w oknie `RESPONSE`{.action}, gdy przechodzisz na stronę, pod przyciskiem `EXECUTE`{.action}:

![API](/pages/assets/screens/api/get-me-carboncalculator-task-taskid-response.png){.thumbnail}

```bash
{
  "link": "Find here the complete URL to download the carbon footprint in PDF format",
  "status": "SUCCESS",
  "taskID": "aa00000-ovh_202501"
}
```

Następnie skopiuj cały adres URL jako "HTTPS" (**bez cudzysłowów**) po prawej stronie pozycji `"link":`, a następnie wklej go w pasku wyszukiwania przeglądarki internetowej, aby rozpocząć pobieranie bilansu dwutlenku węgla w formacie PDF.

Przeglądarka internetowa pobierze plik automatycznie i wyświetli go.

> [!primary]
>
> W zależności od ustawień przeglądarki pobieranie i wyświetlanie pliku może być zablokowane. Sprawdź poprawność konfiguracji przeglądarki i ponownie załaduj stronę.

Po otwarciu pliku widoczne są w nim między innymi następujące elementy:

- Tabelaryczne zestawienie emisji C02 według kategorii we wnioskowanym miesiącu.
- Tabelaryczne zestawienie emisji C02 według kategorii między początkiem roku kalendarzowego a miesiącem, którego dotyczy wniosek.
- Tabela wyszczególniająca wartości według typu zamówionego produktu.
- Wykres przedstawiający emisje C02 w poszczególnych kategoriach.

> [!warning]
> Wygenerowany link jest ważny przez 24 godziny. Po otworzeniu linka pobierz bilans dwutlenku węgla z przeglądarki.

### Sprawdź również <a name="go-further"></a>

[Pierwsze kroki z API OVHcloud](/pages/manage_and_operate/api/first-steps)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).