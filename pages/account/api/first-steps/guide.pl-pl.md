---
title: 'Pierwsze kroki z API OVHcloud'
slug: first-steps-with-ovh-api
excerpt: 'Dowiedz się, jak korzystać z API OVHcloud'
section: 'Pierwsze kroki'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 30-05-2022**

## Wprowadzenie

API dostępne na stronie [https://api.ovh.com/](https://api.ovh.com/){.external} pozwalają na zakup, zarządzanie i konfigurowanie produktów OVHcloud bez konieczności korzystania z interfejsu graficznego, takiego jak Panel klienta.

**Dowiedz się, jak korzystać z API OVHcloud oraz jak je łączyć z Twoimi aplikacjami**

## Wymagania początkowe

- Posiadanie aktywnego konta OVHcloud i znanie jego identyfikatorów
- Bycie na stronie WWW [API OVHcloud](https://api.ovh.com/){.external}.

## W praktyce

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „[Sprawdź również](#gofurther)”.
> 

### Proste użytkowanie

#### Logowanie do API OVHcloud

Na stronie [API OVHcloud](https://api.ovh.com/) kliknij `Explore the OVH API`{.action}, aby wyświetlić listę API. 

Aby korzystać z API na produktach, należy zalogować się na tej stronie za pomocą identyfikatora OVHcloud.

- W prawym górnym rogu kliknij `Login`{.action}. 
- Wpisz dane dostępowe OVHcloud. 
- Określ czas, z określeniem **Validity**, podczas którego zezwalasz na wykonywanie operacji przez API OVHcloud.

![API](images/login.png){.thumbnail} 

> [!primary]
>
> Jeśli Twoje konto OVHcloud jest chronione [weryfikacją dwuetapową](https://docs.ovh.com/pl/customer/zabezpieczenie-konta-za-pomoca-2FA/), wpisz również kod wygenerowany w wiadomości SMS lub aplikacji OTP lub klucz U2F.
>

#### Sprawdź produkty dostępne na API

Po zalogowaniu się znajdziesz listę produktów OVHcloud wyposażonych w API. Wykaz ten jest uporządkowany alfabetycznie.

![API](images/api-list.png){.thumbnail} 

Aby wyświetlić na przykład API powiązane z domenami, kliknij na **/domain** na liście.

Po kliknięciu na produkt lista API tego produktu wyświetla się poniżej. 

![API](images/api-displayed.png){.thumbnail} 

#### Uruchom API

Dostępne są 4 rodzaje API, które wykorzystują tak zwane metody HTTP: 

**GET** 

Metoda GET ma na celu odzyskanie danych z zasobu.

Na przykład, aby pobrać listę Twoich domen, użyj następującego API:
 
> [!api]
>
> @api {GET} /domena
>

**POST**

Metoda POST jest wykorzystywana do wysyłania dodatkowych danych do zasobu. 

Na przykład, aby dodać rekord do strefy DNS, użyj następującego API:

> [!api]
>
> @api {POST} /domena/zone/{zoneName}/record
>

**PUT**

Metoda PUT służy do zastąpienia aktualnych danych dotyczących zasobu danymi zapytania.

Na przykład, jeśli popełniłeś błąd podczas zapisywania strefy DNS, użyj następującego API:

> [!api]
>
> @api {PUT} /domena/zone/{zoneName}/record/{id}
>

**DELETE**

Metoda DELETE jest używana do usuwania nazwanego zasobu.

Na przykład, jeśli nie chcesz zachować rekordu DNS, który dodałeś do strefy DNS, użyj następującego API:

> [!api]
>
> @api {DELETE} /domena/zone/{zoneName}/record/{id}
>

##### **Parametry API**

Po kliknięciu na API w wybranej przez Ciebie sekcji **Parameters** możesz przypisać zmienne związane z aplikacją.
 
Na przykład, aby dodać rekord TXT do strefy DNS, zoptymalizujesz następujące parametry:

![API](images/parameters.png){.thumbnail} 
 
Po zdefiniowaniu ustawień możesz uruchomić API klikając `Execute`{.action}. 

W zakładce `Result` wyświetli się raport z realizacji API.

![API](images/result.png){.thumbnail} 

Zakładki `PHP` i `Python` zawierają elementy, które należy dodać do skryptu w zależności od używanego języka.

### Zaawansowane wykorzystanie: łączenie API OVHcloud z aplikacją

#### Utwórz klucze aplikacji

Każda aplikacja, która chce komunikować się z API OVHcloud, musi zostać zgłoszona z wyprzedzeniem.

W tym celu kliknij link: [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/){.external}.

Wpisz identyfikator klienta, hasło i nazwę aplikacji. Nazwa będzie pomocna później, jeśli chcesz zezwolić innym na jej używanie.

Możesz również dodać opis aplikacji oraz czas jej trwania. 

Zakres `Rights` pozwala na ograniczenie korzystania z aplikacji do niektórych API.
<br> Aby zezwolić wszystkim API OVHcloud dla metody HTTP, wprowadź gwiazdkę `*` w polu, jak w poniższym przykładzie, w którym metoda GET jest dozwolona dla wszystkich API:

![API keys](images/api-keys.png){.thumbnail} 

Po kliknięciu `Create keys`{.action} otrzymasz trzy klucze:

- Klucz aplikacji zwany **AK**. Przykład:

```console
7kbG7Bk7S9Nt7ZSV
```

- klucza aplikacji, który nie zostanie ujawniony, o nazwie **AS**. Przykład:

```console
EXEgWIz07P0HYwtQDs7cNIqCiQaWSuHF
```

- tajnej "**consumer key**", której nie ujawnia się, zwanej **CK**. Przykład:

```console
MtSwSrPpNjqfVSmJhLbPyr2i45lSwPU1
```

W tym przypadku klucz **CK** jest przypisany do Twojego konta.

Token **CK** może być wykorzystywany do przekazywania uprawnień. Więcej informacji znajdziesz w przewodniku: [Jak zarządzać kontem klienta OVHcloud za pomocą API](https://docs.ovh.com/gb/en/api/api-rights-delegation/) (przewodnik po języku angielskim).

#### Pierwsze wykorzystanie API

Po uzyskaniu trzech kluczy (**AK**, **AS**, **CK**) możesz podpisać zlecenia API. Podpis oblicza się w następujący sposób:

```console
"$1$" + SHA1_HEX(AS+"+"+CK+"+"+METHOD+"+"+QUERY+"+"+BODY+"+"+TSTAMP)
```

Aby uprościć programowanie aplikacji, OVHcloud udostępnia wrappery API w kilku językach.
Dzięki nim nie będziesz martwił się o obliczenia podpisu i będziesz mógł skupić się na rozwoju Twojej aplikacji.

- *Perl* : <https://eu.api.ovh.com/wrappers/OvhApi-perl-1.1.zip>
- *Python* : <https://github.com/ovh/python-ovh>
- *PHP* : <https://github.com/ovh/php-ovh>
- *Node.js* : <https://github.com/ovh/node-ovh>
- *Swift* : <https://github.com/ovh/swift-ovh>
- *C#* : <https://github.com/ovh/csharp-ovh>

Przykład zastosowania sekcji `/me`, która pozwala na zarządzanie kontem OVHcloud:

```python
import ovh

# Instantiate. Visit https://api.ovh.com/createToken/?GET=/me
# to get your credentials
client = ovh.Client(
    endpoint='ovh-eu',
    application_key='<application key>',
    application_secret='<application secret>',
    consumer_key='<consumer key>',
)

# Print nice welcome message
print("Welcome", client.get('/me')['firstname'])
```

## Sprawdź również <a name="gofurther"></a>

[Zarządzanie domeną poprzez API OVHcloud](https://docs.ovh.com/it/domains/api/) (przewodnik po angielsku)

[Jak zarządzać kontem klienta OVHcloud za pomocą API](https://docs.ovh.com/gb/en/api/api-rights-delegation/) (przewodnik po angielsku)

Przyłącz się do społeczności naszych użytkowników na stronie [https://community.ovh.com/en/](https://community.ovh.com/en/)
