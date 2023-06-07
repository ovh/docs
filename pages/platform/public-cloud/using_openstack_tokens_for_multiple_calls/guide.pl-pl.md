---
title: Korzystanie z tokenów OpenStack
excerpt: "Dowiedz się, jak tworzyć i wykorzystywać tokeny OpenStack do realizacji Twoich operacji"
updated: 2023-05-05
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

**Ostatnia aktualizacja z dnia 05-05-2023**

## Wprowadzenie

**Niniejszy przewodnik zawiera dobre praktyki w zakresie wykonywania dużej liczby operacji OpenStack w krótkim czasie.**

> [!primary]
>
> Etapy opisane w tym przewodniku opierają się na wersji 3.0 Keystone API.
>

### Definicje

- **Punkt końcowy (*Endpoint*)**: adres www wskazujący bezpośrednio na API usługi. Na przykład: [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/) dla punktu dostępu do uwierzytelnienia lub [https://image.compute.gra11.cloud.ovh.net/](https://image.compute.gra11.cloud.ovh.net/) dla punktu dostępu do zarządzania obrazami w strefie GRA11. 

- **Teton (*token*)**: unikalny ciąg znaków używany do uwierzytelniania i uzyskiwania dostępu do zasobów. Użytkownik zwraca się o to, wprowadzając swoje dane identyfikacyjne (dane do logowania) do API uwierzytelniania. Token jest generowany i jest ważny przez 24 godziny.

- **OpenRC**: Aby zwiększyć skuteczność interakcji z usługą tożsamości za pośrednictwem klienta OpenStack, OpenStack obsługuje proste skrypty środowiska klienta znane również jako pliki OpenRC. Są to pliki zawierające opcje wspólne dla wszystkich klientów, ale zawierające również unikalne opcje.

### Kwestia

Większość zleceń wysłanych do API OpenStack musi przejść procedurę wydawania zezwoleń, która wymaga wygenerowania tokenu i jego zatwierdzenia.

Jeśli jednak wykonujesz zbyt dużą liczbę operacji w krótkim czasie, niektóre operacje OpenStack będą w błędzie ze względu na zbyt dużą liczbę wezwań do API. Obecny limit to 60 kreacji żetonów na minutę na użytkownika. API uwierzytelniania spowoduje powrót błędów HTTP 429 powyżej tego limitu.

Aby uzyskać więcej informacji, zapoznaj się [z oficjalną dokumentacją OpenStack API](http://developer.openstack.org/api-guide/quick-start/).

Niniejszy przewodnik wyjaśnia, jak emitować token OpenStack, używać go do wykonywania czynności, które chcesz wykonać i jak usunąć token.

## Wymagania początkowe 

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Niniejszy przewodnik wymaga instalacji narzędzia OpenStack CLI na Twoim komputerze.

> [!primary]
>
> Więcej informacji o tym narzędziu znajdziesz w [dokumentacji OpenStack CLI](https://docs.openstack.org/python-openstackclient/latest/).

Można to uzyskać z interfejsu zarządzania pakietami apt (dla dystrybucji opartych na Debianie) lub ium (dla dystrybucji opartych na RHEL/CentOS):

```bash
# Dystrybucje Debian 

sudo apt install python3-openstackclient

# Dystrybucje CentOS/RHEL

sudo yum install python3-openstackclient
```

- Aby wyeksportować zmienne środowiskowe, zapoznaj się z tym przewodnikiem: [Zmienne środowiskowe OpenStack](/pages/platform/public-cloud/loading_openstack_environment_variables/).

## W praktyce

### Etap 1: pobierz i utwórz plik OpenRC

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i otwórz swój projekt `Public Cloud`{.action}.

Kliknij `Users & Roles`{.action} w sekcji `Project Management`, a następnie przycisk `...`{.action} po prawej stronie użytkownika OpenStack.<br>
Pobierz plik OpenRC tego użytkownika i podaj region, w którym chcesz wykonywać operacje.

![pobierz plik openRC](images/openrc.png){.thumbnail}

Po pobraniu edytuj Twój plik OpenRC i dodaj tę linię:

```bash
OS_PASSWORD=<your_password>
```

Pamiętaj, aby dostosować tę linię do hasła użytkownika OpenStack, które otrzymałeś podczas tworzenia użytkownika.

Następnie kliknij pobrany wcześniej plik:

```bash
source openrc.sh
```

### Etap 2: emisja tokenu OpenStack

> [!primary]
>
> Token OpenStack jest ważny przez 24 godziny po zakończeniu programu. Aby zwiększyć niezawodność, możesz emitować żeton co 8 godziny (na przykład), aby uniknąć wykonywania operacji z wydychanym żetonem.
>
> Jeśli planujesz długie operacje, takie jak snapshoty, *shelving* instancji, tworzenie obrazów, itp., wolisz tworzenie nowego tokenu zamiast bezpośredniego wykonania wybranego działania.
>

Po wygenerowaniu pliku OpenRC wprowadź następującą komendę, aby nadać token:

```bash
openstack token issue
```

Wynik powinien być podobny do poniższego:

```bash
+------------+----------------------------------------------------------------+
| Field      | Value                                                          |
+------------+----------------------------------------------------------------+
| expires    | 2023-04-06T08:33:15+0000                                       |
| id         | gAAAAA[...]                                                    |
| project_id | 8a7[...]                                                       |
| user_id    | f99[...]                                                       |
+------------+----------------------------------------------------------------+
```

Możesz teraz wyeksportować ID tokenu:

```bash
export OS_TOKEN = gAAAAA[...]
```

Możesz również wyeksportować żeton bezpośrednio za pomocą tego polecenia:

```bash
export OS_TOKEN=$(openstack token issue -f value -c id)
```

### Etap 3: usuń niepotrzebne zmienne

Aby użyć tokenu do wykonywania operacji z użytkownikiem, należy usunąć zmienną `OS_USER_DOMAIN_NAME`.

W tym celu wprowadź następującą komendę:

```bash
unset OS_USER_DOMAIN_NAME
```

### Etap 4: użyj tokenu do wykonania poleceń

Po utworzeniu żetonu możesz korzystać z klasycznych połączeń OpenStack do zarządzania swoją infrastrukturą.

```bash
openstack --os-auth-type token <command>
```

Przykład: 

```bash
openstack --os-auth-type token image list
```

### Etap 5: usuń token OpenStack

Po przeprowadzeniu wszystkich operacji możesz usunąć token OpenStack, aby nie został on wykorzystany do innych operacji.

W tym celu wprowadź następującą komendę:

```bash
openstack --os-auth-type token token revoke <token_id>

# lub 

openstack --os-auth-type token token revoke $OS_TOKEN
```

## Sprawdź również

Dołącz do społeczności naszych użytkowników na <https://community.ovh.com/en/>.