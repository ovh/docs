---
title: "Tutorial - Dynamischen Inhalt auf einer statischen Webseite hinzufügen, die mit Cecil erstellt wird"
slug: static-site-generator-cecil-use-api
excerpt: "Hier erfahren Sie, wie Sie einen Anruf auf eine externe API von Ihrer statischen Webseite aus hinzufügen."
section: 'Tutorials'
order: 5
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 16.01.2023**

## Ziel

In dieser Anleitung erfahren Sie, wie Sie den [Cecil-Website-Generator](https://cecil.app){.external} verwenden, um den Inhalt einer dynamischen Seite anzuzeigen. Indem Sie eine API aufrufen, um Informationen auf einer über **Cecil erstellten Seite wiederzugeben**.

**Hier erfahren Sie, wie Sie einen Anruf auf eine externe API von Ihrer statischen Webseite aus hinzufügen.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wenn Sie Schwierigkeiten haben, den Schritten dieses Tutorials zu folgen, empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/) zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting-Angebot](https://www.ovhcloud.com/de/web-hosting/) mit SSH-Zugang. Mit diesem Zugang können Sie über die Kommandozeile eine oder mehrere Alternativen zu den standardmäßig in unseren Webhosting Angeboten angebotenen Lösungen installieren.
- Sie sind mit der Eingabe über die Kommandozeile vertraut.
- Sie haben die **Cecil** Anwendung auf Ihrem Hosting installiert und konfiguriert (lesen Sie unsere Anleitung zur [Installation und Konfiguration von Cecil](https://docs.ovh.com/fr/hosting/install-configure-cecil/)).

## In der praktischen Anwendung

Als Beispiel wird eine der APIs eines Wetterdatendienstes verwendet. Dies hängt von einer Stadt ab, die vom Benutzer angegeben wird.

Die Schritte sind:

- eine neue Seite auf Cecil erstellen und diese Seite in das Menü der Website einfügen;
- einen Account erstellen und den Schlüssel für Anfragen an die Wettervorhersage abrufen
- die erstellte `.md`-Datei durch Hinzufügen von HTML-Code bearbeiten
- Assets `hinzufügen` (JavaScript und CSS)
- die Lösung erstellen und testen

### Eine neue Seite erstellen

Erstellen Sie Ihre Umgebung, indem Sie sich via SSH mit Ihrem Webhosting verbinden. Lesen Sie die Anleitung ["Cecil installieren und konfigurieren"](https://docs.ovh.com/fr/hosting/install-configure-cecil/), um Ihre **Cecil** Anwendung in einem dedizierten Verzeichnis zu installieren.

Erstellen Sie ein Verzeichnis und platzieren Sie sich:

```bash
mkdir myWebSite
cd myWebSite
```

### Verwendung der OpenWeather API

Für diese Anleitung verwenden wir eine API, die von der [OpenWeather](https://openweathermap.org/){.external}-Seite bereitgestellt wird. Sie ermöglicht es, die meteorologischen Informationen je nach dem Namen einer Stadt zu kennen.

Erstellen Sie einen Account auf <https://home.openweathermap.org/users/sign_up><br>
Sobald Ihr Account validiert wurde (per E-Mail zur Bestätigung), gehen Sie auf das Menü "My API keys". Es wurde standardmäßig ein Key erstellt, Sie können ihn abrufen und für die Fortsetzung dieses Tutorials speichern.

![Open Weather API key](images/static_website_installation_cecil_api_call01.png){.thumbnail}

### HTML-Code hinzufügen

Erstellen Sie eine neue Seite mit folgendem Befehl:

```bash
php cecil.phar new:page weather
```

Bearbeiten Sie anschließend die erstellte Seite:

```bash
nano pages/weather.md
```

Ändern Sie den Kopf der Datei, damit die Seite im Menü erscheint:

```
---
title: "Weather"
date: 2022-11-28
published: true
menu: main
---
```

Fügen Sie nach dem Header den HTML-Code hinzu, um die gewählte Stadt, die von der API zurückgegebenen Temperaturen und einen Button zur Parameteränderung anzuzeigen:

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

Erstellen Sie die HTML-Seite mit folgendem Befehl:

```bash
php cecil.phar build
```

Überprüfen Sie das Ergebnis in Ihrem Browser und klicken Sie auf den "Weather" Link, der im Hauptmenü hinzugefügt wurde:

![Test new page](images/static_website_installation_cecil_api_call02.png){.thumbnail}

### JavaScript-Code hinzufügen

Es ist nicht möglich, einen `<script>` Beacon in eine Markdown-Datei hinzuzufügen. Ändern Sie das standardmäßig bereitgestellte Template.

#### Template bearbeiten

Die Templates sind im `Layouts`-Verzeichnis angeordnet. Sie können sie mit folgendem Befehl anzeigen:

```bash
ls -la layouts
```

Die Datei enthält ein `blog`-Verzeichnis und eine `index.html.twig`-Datei:

![Layouts Directory](images/static_website_installation_cecil_api_call03.png){.thumbnail}

Öffnen Sie die Datei `index.html.twig`:

![Cecil layouts index file](images/static_website_installation_cecil_api_call04.png){.thumbnail}

Die Datei bezieht sich auf ein Template, das nicht im Verzeichnis vorhanden ist. Diese (und andere) Datei ist tatsächlich in der Datei `cecil.phar` enthalten. Die Domainendungen `.phar` bezeichnen Archive von PHP-Dateien, die ohne Komprimierung bearbeitet werden können.
Dekomprimieren Sie die Dateien dieses Archivs, um sie sichtbar zu machen:

```bash
php cecil.phar util:extract
```

Tragen Sie den Inhalt des `layouts` Verzeichnisses erneut ein:

![Cecil layouts directory including unkompriessed files](images/static_website_installation_cecil_api_call05.png){.thumbnail}

Ändern Sie das Standardtemplate, um ein `<skript>`-Signal einzufügen, das den Code für den Aufruf an die API enthält:

```bash
nano layouts/_default/page.html.twig
```

Dieser Bake und sein Inhalt sind vor dem fermantischen `</body>` Baken am Seitenende anzubringen:

```twig
    </footer>
    {%- include 'partials/googleanalytics.js.twig' with {site}
    {% block javascript %}
    <script src="{ asset( script.js', { minify: true} }}"></script>
    {% endblock %}
  </body>
</html>
```

Wenn eine oder mehrere `assets`-Dateien geändert werden, rekonstruieren Sie den Cache mit folgendem Befehl:

```bash
php cecil.phar cache:clear:assets
```

Wenn die Änderungen in Ihrem Browser nicht aktiv sind, leeren Sie dessen Cache.
Sie können auch die auf Ihrem Webhosting erstellten Dateien löschen:

```bash
php cecil.phar clear
```

Rekonstruieren Sie anschließend Ihre Lösung mit folgendem Befehl:

```bash
php cecil.phar build
```

#### JavaScript-Datei hinzufügen

JavaScript-Dateien, wie CSS-Dateien, sind im Verzeichnis `assets` einzutragen. Sie können sie in verschiedenen Verzeichnissen organisieren.

Erstellen Sie die zuvor erwähnte `script.js`-Datei im Wurzelverzeichnis des `assets`:

```bash
nano assets/script.js
```

Ersetzen Sie den Wert der `apiKey`-Variablen mit dem zuvor auf der [OpenWeather](https://openweathermap.org/){.external}-Seite abgerufenen Schlüssel.

```javascript
let apiKey = '123456789'; // Ersetzen Sie diesen Wert
let city = 'Roubaix'; // Geben Sie hier die Standardstadt an, die auf der Wetterseite angezeigt wird
getTemperature(city);  // Anruf der die API rufenden Funktion mit dem Parameter 'city'

// Ereignis zum Klick auf "Change City" hinzugefügt
let button = document.querySelector('#modify');
button.addEventListener('click', () => {
    city = prompt('Choose a city');
    getTemperature(city);
});

// API Anruf-Funktion unter Verwendung eines XMLHttpRequest Objekts für eine asynchrone Anfrage
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

### Tests

Rufen Sie Ihre Website nun über einen Webbrowser auf:

![Web page with JavaScript running](images/static_website_installation_cecil_api_call06.png){.thumbnail}

Klicken Sie auf "Stadt wechseln" und geben Sie den Namen einer Gemeinde ein:

![Select a new city](images/static_website_installation_cecil_api_call07.png){.thumbnail}

![Updated Seite](images/static_website_installation_cecil_api_call08.png){.thumbnail}

### Schluss

In dieser Anleitung erfahren Sie, wie dynamische Daten, die über APIs aus externen Quellen gewonnen wurden, integriert werden. Erstellen und pflegen Sie eine Website, indem Sie den Inhalt dieser Seiten manuell ändern oder neue erstellen. Gleichzeitig bereichern sie ihre Inhalte über andere Websites.

## Weiterführende Informationen

- Einige APIs zum Testen auf Ihrer Website
    - [Numbers API](http://numbersapi.com/#42){.external}
    - [NASA](https://api.nasa.gov/){.external}
    - [News API](https://newsapi.org/){.external}
    - [Polygon.io](https://polygon.io/){.external}
    - eine Liste öffentlicher [APIs](https://github.com/public-api-lists/public-api-lists){.external}
- Die [Cecil-Steuerung](https://cecil.app/documentation/commands/){.external}.

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/de/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, können Sie unsere [Support-Angebote einsehen](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
