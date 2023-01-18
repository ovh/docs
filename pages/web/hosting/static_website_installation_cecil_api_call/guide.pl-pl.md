---
title: "Tutorial - Dodaj dynamiczne treści do statycznej strony internetowej generowanej przez Cecil"
slug: static-site-generator-cecil-use-api
excerpt: "Dowiedz się, jak dodać połączenie do zewnętrznego API na stronie statycznej WWW"
section: 'Tutoriale'
order: 5
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 16-01-2023**

## Wprowadzenie

Tutorial wyjaśnia, jak używać generatora strony [Cecil](https://cecil.app){.external} do wyświetlania zawartości dynamicznej strony. Podczas połączenia z API, aby pobrać i wyświetlić informacje na stronie generowanej przez **Cecil**.

**Dowiedz się, jak dodać połączenie do zewnętrznego API na stronie statycznej.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Jeśli masz trudności z postępuniem zgodnie z instrukcjami zawartymi w tym przewodniku, zalecamy skorzystanie z pomocy specjalisty[ ](https://partner.ovhcloud.com/pl/). Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>

## Wymagania początkowe

- Posiadanie hostingu [OVHcloud](https://www.ovhcloud.com/pl/web-hosting/) z dostępem SSH Dostęp ten pozwala na zainstalowanie w wierszu poleceń jednego lub kilku rozwiązań alternatywnych wobec rozwiązań oferowanych domyślnie w naszej ofercie hostingu.
- Zaznajomiony z wprowadzaniem wiersza poleceń.
- Instalacja i skonfigurowanie aplikacji **Cecil** na Twoim hostingu (zapoznaj się z naszym tutorialem [dotyczącym instalacji i konfiguracji Cecil](https://docs.ovh.com/fr/hosting/install-configure-cecil/)).

## W praktyce

Wybranym przykładem jest wykorzystanie jednego z API usługi dostarczającej dane meteorologiczne. To zależy od miasta wpisanego przez użytkownika.

Etapy te są następujące:

- utworzyć nową stronę Cecil i dodać tę stronę do menu strony;
- utworzyć konto i pobrać klucz do wykonywania zapytań do interfejsu API pogody;
- zmodyfikować plik `.md` utworzony poprzez dodanie kodu HTML;
- dodawanie `assets` (JavaScript i CSS);
- wygenerować i przetestować rozwiązanie.

### Stwórz nową stronę

Przygotuj środowisko, logując się przez SSH na hostingu i postępuj zgodnie z instrukcjami zawartymi w przewodniku "[Instalacja i konfiguracja Cecil](https://docs.ovh.com/fr/hosting/install-configure-cecil/)", aby zainstalować aplikację **Cecil** w dedykowanym katalogu.

Stwórz katalog i umieszczaj go w:

```bash
mkdir myWebSite
cd myWebSite
```

### Korzystanie z API OpenWeather

W tym tutorialu użyjemy interfejsu API dostarczonego przez stronę [OpenWeather](https://openweathermap.org/){.external}. Pozwala on na poznanie informacji meteorologicznych w zależności od nazwy miasta.

Załóż konto na <https://home.openweathermap.org/users/sign_up><br>
Po zatwierdzeniu konta (wysyłając e-mail z potwierdzeniem) przejdź do menu "My API keys". Klucz został wygenerowany domyślnie. Uzyskaj go i zachowaj do końca tego tutoriala.

![Open Weather API key](images/static_website_installation_cecil_api_call01.png){.thumbnail}

### Dodanie kodu HTML

Utwórz nową stronę za pomocą polecenia:

```bash
php cecil.phar new:page weather.md
```

Następnie edytuj wygenerowaną stronę:

```bash
nano pages/weather.md
```

Zmień nagłówek pliku, aby strona wyświetliła się w menu:

```
---
title: "Weather"
date: 2022-11-28
published: true
menu: main
---
```

Po nagłówku dodaj kod HTML, aby wyświetlić wybrane miasto, temperatury zwracane przez API i przycisk, aby zmienić ustawienia:

```html
---
title: "Weather"
date: 2022-11-28
published: true
menu: main
---
<h1>Weather</h1>
<div>
    <span id="city">Roubaix</span>
    <div id="temperature"><span id="temperatureValue"></span> °C</div>
    <div id="modify">Change city</div>
</div>
```

Wygeneruj stronę HTML za pomocą polecenia:

```bash
php cecil.phar build
```

Sprawdź wynik w swojej przeglądarce i kliknij link "Weather", który został dodany w menu głównym:

![Test nowej strony](images/static_website_installation_cecil_api_call02.png){.thumbnail}

### Dodaj kod JavaScript

Nie można dodać znacznika `<script>` do pliku Markdown. Musisz zmienić szablon dostarczony domyślnie.

#### Zmień szablon

Szablony są dostępne w katalogu `layouts`. Możesz je wyświetlić za pomocą polecenia:

```bash
ls -la layouts
```

Plik zawiera katalog `blog` i plik `index.html.twig`:

![layouts directory](images/static_website_installation_cecil_api_call03.png){.thumbnail}

Otwórz plik `index.html.twig`:

![Cecil layouts index file](images/static_website_installation_cecil_api_call04.png){.thumbnail}

Plik odnosi się do szablonu, który nie jest obecny w katalogu. Ten plik (i inne) są w rzeczywistości w pliku `cecil.phar`. Rozszerzenia `.far` to archiwa plików PHP, które można obsłużyć bez rozpakowania.
Rozłącz pliki tego archiwum, aby były widoczne:

```bash
php cecil.phar util:extract
```

Wyświetl ponownie zawartość katalogu `layouts`:

![Cecil layouts directory including uncomessed files](images/static_website_installation_cecil_api_call05.png){.thumbnail}

Zmień domyślny szablon, aby wstawić tag `<script>` zawierający kod umożliwiający wywołanie API:

```bash
nano layouts/_default/page.html.twig
```

Ten znacznik i jego zawartość należy umieścić przed zamkniętym znacznikiem `</body>` na dole:

```twig
    </footer>
    {%- include 'partials/googleanalytics.js.twig' with {site} only ~%}
    {% block javascript %}
    <script src="{{ asset('script.js', {minify: true}) }}"></script>
    {% endblock %}
  </body>
</html>
```

Jeśli jeden lub więcej plików `assets` ulegnie zmianie, odbuduj cache za pomocą polecenia:

```bash
php cecil.phar cache:clear:assets
```

Jeśli modyfikacje nie są widoczne w Twojej przeglądarce internetowej, wyczyść jej cache.
Możesz również usunąć pliki wygenerowane na Twoim hostingu:

```bash
php cecil.phar clear
```

Następnie zbuduj rozwiązanie, używając następującego polecenia:

```bash
php cecil.phar build
```

#### Dodaj plik JavaScript

Pliki JavaScript, takie jak pliki CSS, muszą być umieszczone w katalogu `assets`. Możesz je zorganizować w różnych katalogach.

Utwórz plik `script.js` wymieniony powyżej w katalogu `assets`:

```bash
nano assets/script.js
```

Zastąp wartość zmiennej `apiKey` kluczem pobranym wcześniej na stronie [OpenWeather](https://openweathermap.org/){.external}

```javascript
let apiKey = '123456789'; // Zastąp tą wartość
let city = 'Roubaix'; // Wpisz tutaj domyślne miasto, które zostanie wyświetlone na stronie pogody
getTemperature(city);  // Wywołanie funkcji wywołującej API z parametrem 'city'

// Dodanie wydarzenia na kliknięciu przycisku "Change city"
let button = document.querySelector('#modify');
button.addEventListener('click', () => {
    city = prompt('Choose a city');
    getTemperature(city);
});

// Funkcja wywołania API za pomocą obiektu XMLHttpRequest dla zapytania asynchronicznego
function getTemperature(city) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';
    let xhrQuery = new XMLHttpRequest();
    xhrQuery.open('GET', url);
    xhrQuery.responseType = 'json';
    xhrQuery.send();

    xhrQuery.onload = function() {
        if (xhrQuery.readyState === XMLHttpRequest.DONE) {
            if (xhrQuery.status === 200) {
                let city = xhrQuery.response.name;
                let temperature = xhrQuery.response.main.temp;
                document.querySelector('#city').textContent = city;
                document.querySelector('#temperatureValue').textContent = temperature;
            } else {
                alert('A problem has occurred, please come try later.');
            }
        }
    };
}
```

### Testy

Teraz możesz sprawdzić Twoją stronę WWW za pomocą przeglądarki internetowej:

![Strona internetowa with JavaScript running](images/static_website_installation_cecil_api_call06.png){.thumbnail}

Kliknij na "Zmień miasto" i wpisz nazwę gminy:

![Select Nowojorski](images/static_website_installation_cecil_api_call07.png){.thumbnail}

![Strona updated](images/static_website_installation_cecil_api_call08.png){.thumbnail}

### Podsumowanie

Tutorial przedstawia przykład integracji dynamicznych danych pochodzących ze źródeł zewnętrznych za pośrednictwem API. Możesz zbudować i uruchomić stronę WWW, modyfikując ręcznie zawartość lub tworząc nowe. Wzbogacając zawartość stron internetowych.

## Sprawdź również

- Kilka interfejsów API do przetestowania na Twojej stronie WWW
    - [Numery API](http://numbersapi.com/#42){.external}
    - [NASA](https://api.nasa.gov/){.external}
    - [Nowe API](https://newsapi.org/){.external}
    - [Poligon](https://polygon.io/){.external}
    - lista publicznych [API](https://github.com/public-api-lists/public-api-lists){.external}
- Komendy [Cecil](https://cecil.app/documentation/commands/){.external}.

Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
