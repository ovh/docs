---
title: 'Tutorial - Eigene Webseite bei OVHcloud erstellen'
slug: create-your-own-web-page
excerpt: 'Hier erfahren Sie, wie Sie Ihre erste Webseite auf einem kostenlosen Start 10M Webhosting erstellen.'
section: 'Tutorials'
order: 01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 22.11.2022**

## Ziel

Hier erfahren Sie, wie Sie die erste Seite einer Website auf einem Start 10M Hosting erstellen, das Sie kostenlos für den Kauf einer Domain bei OVHcloud erhalten.

## Voraussetzungen

- Eine [Domain besitzen](https://www.ovhcloud.com/de/domains/)
- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) oder ein kostenloses [Start 10M Hosting](https://www.ovhcloud.com/de/domains/free-web-hosting/)
- Sie haben einen Texteditor (Notizblock, TextEdit, Notepad+ etc.)
- Sie haben einen FTP-Client (wie [Cyberduck](https://cyberduck.io/), [FileZilla](https://filezilla-project.org/download.php) etc.) installiert, um ihre Dateien auf ihrem dedizierten Speicherplatz fernzuleiten (auf dem Hosting ablegen).

## Vor den Benchmark-Tests

### Woraus besteht eine Webseite?

Der Inhalt einer Website besteht oft aus mehreren Webseiten. Eine Webseite zeigt einen Inhalt an, der für ein Navigationserlebnis geformt wurde - ob erstarrt oder nicht. Die Seiten, die Sie in Ihrem Browser anzeigen, ergeben sich aus drei Komponenten, die wir im Detail aufführen werden:

- **HTML (HyperText Markup Language)**: Sprache zur Strukturierung Ihrer Seiten. "Struktur"bezeichnet die Elemente und ihre Organisation.<br>
**Beispiel**: einem Dokumententitel ein Untertitel und ein oder mehrere Absätze folgen.

Die Elemente, die verwendet werden, um Ihren Inhalt zu strukturieren, werden als "Baken"bezeichnet und werden unter Verwendung von öffnenden und schließbaren Sparren geschrieben.<br>
**Beispiel**: Die Markierung `<p>` bezeichnet die Markierung, die einen Absatz beginnt, wobei der gleiche Absatz durch die Markierung `</p>` geschlossen wird. 

>[!warning]
>
> Für jede offene Bake muss eine geschlossene Bake erstellt werden. Die Tags überlappen sich nicht (sie schließen sich in der umgekehrten Reihenfolge ihrer Öffnung) und können nur durch HTML-Tags interpretiert werden.
>

Es sind mehr als 100 Baken verfügbar, aber Sie können Ihre Website mit einigen von ihnen perfekt erstellen.

- **Das CSS (Cascading Style Sheet, Blätter mit Stil in Kaskade)**: Sprache, die beschreibt, wie die HTML-Elemente positioniert, dimensioniert, verhaltenisiert, gefärbt oder angezeigt werden. Diese Regeln können für generische Elemente (die gleiche Farbe für alle Titel der Website oder die Schriftart, die für alle Texte verwendet wird) oder für bestimmte Elemente (Text im Footer, Verhalten über dem Navigationsmenü) gelten.

- **Das JavaScript**: Sprache zur Bereicherung der Interaktionen auf einer Website (oder Webanwendung). Obwohl für Web-Entwickler unentbehrlich, ist es nicht erforderlich, Ihre Website zu erstellen.<br>
Wenn Sie mit dem Code in den verschiedenen Sprachen nicht vertraut sind, können Sie die Codebeispiele in dieser Anleitung kopieren und einfügen. So können Sie eine auswertbare Website auf Ihrem Hosting erstellen.

### Welche Werkzeuge verwenden?

Um eine Webseite zu erstellen, schreiben Sie zunächst Ihren Quellcode in einer der drei oben genannten Sprachen in eine Datei. Hier die wichtigsten Domainendungen: *".html"* (für Ihre HTML-Dateien), *".css"* (für Ihre CSS-Dateien), *".js"* (für Ihre JavaScript-Dateien).

Die Dateien können in Texteditoren geschrieben werden, darunter auch die standardmäßig in Ihrem Betriebssystem verfügbaren (Notizblock, TextEdit). Zahlreiche kostenlose Open Source Lösungen bieten zusätzliche Funktionen: [Notepad++](https://notepad-plus-plus.org/), [Brackets](https://brackets.io/), [Sublime Text](https://www.sublimetext.com/) oder [Micro](https://micro-editor.github.io/). Es ist auch möglich, IDE (Integrated Development Environment, integrierte Entwicklungsumgebung) wie [Visual Studio Code](https://code.visualstudio.com/) oder [Geany](https://www.geany.org/) zu verwenden.

Verwenden Sie Ihren Webbrowser, um Ihre Seiten zu visualisieren und anzupassen, bevor Sie sie auf Ihrem Hosting ablegen. Öffnen Sie hierzu Ihre Datei von Ihrem lokalen Standort aus direkt in Ihrem Browser.

### **Statische** oder **dynamische** Seite?

Eine Website wird als **statisch** bezeichnet, wenn die Seiten, die Sie mit Ihrem Browser anzeigen, immer identisch sind und keine anderen Interaktionen als Effekte (z. B. Rollmenüs), Animationen und Videos bieten.

Im Gegensatz dazu bedeutet eine **dynamische** Website, dass die Seiten, die Sie anzeigen, von dem Webserver generiert werden, der den Code ausführt, auf eine Datenbank zugreift usw... So können Sie ein Ergebnis abhängig von den Benutzeranfragen liefern (Abfragen von Rubriken, Authentifizierung, Versand von Daten über ein Formular, Zugriff auf Bestände oder Inventare usw.).

### Was ist PHP?

PHP (*PHP Hypertext Preprocessor*) ist eine Sprache, die hauptsächlich in der Web-Entwicklung verwendet wird. Es funktioniert ausschließlich auf Serverseite und ist daher nicht notwendig, um die sichtbaren Elemente in Ihrem Browser zu erstellen. Er ist jedoch nützlich, um beispielsweise die Nachrichten, die an Sie gesendet werden, über das Kontaktformular Ihrer Website abzurufen.

## In der praktischen Anwendung

Mit den folgenden Schritten können Sie Ihre erste Webseite erstellen.

### Erstellen Sie den Inhalt Ihrer Seite, indem Sie diese mithilfe des HTML-Codes strukturieren

Erstellen Sie ein Verzeichnis von überall auf Ihrem Computer, um Ihre erste Webseite zu erstellen, in dem Sie alle Ihre Dateien speichern.

Benennen Sie die erste `index.html` Datei, die HTML-Code enthält. Dies ist die erste zu erstellende Datei, da die HTTP-Server standardmäßig konfiguriert sind, damit die Anfrage auf Ihrem Hosting (indem Sie Ihre Domain in die Adresszeile eines Browsers einfügen) die Datei "index" anzeigt.

Öffnen Sie Ihren Texteditor und sichern Sie Ihre Arbeitsdatei. 

> [!primary]
> 
> Wir empfehlen, mehrere Kopien dieses Arbeitsverzeichnisses für Backups aufzubewahren.
> Die Website wird auf Ihrem Hosting verfügbar sein, aber es ist sicherer, eine lokale Kopie sowie Backups auf anderen Medien wie externen Festplatten zu speichern.
>

#### Zusammensetzung einer typischen HTML-Seite

HTML Seiten sind immer auf die gleiche Weise strukturiert:

- eine DOCTYPE-Erklärung, in der dem Browser angezeigt wird, die folgenden Inhalte zu lesen, wobei die Standards so weit wie möglich eingehalten werden;
- eine Bake `<html>`, die alle anderen Tags des Dokuments einrahmt.
- ein `<head>`-Beacon, das Informationen zur Kodierung der Seite und deren Titel enthält;
- ein `<body>` Beacon, das den "Körper" Ihrer HTML-Seite enthält.

Sie können diesen Code in Ihre `index.html`-Datei kopieren/einfügen:

```html
<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meine persönliche Seite</title>
    </head>
    <body>
         
    </body>
</html>
```

Einige Baken enthalten mehr Informationen als andere, wie zum Beispiel die Bake `<html lang="en">` des vorstehenden Beispiels.<br>
In diesem Fall wird von Attributen gesprochen, die es ermöglichen werden, bestimmte Elemente zu präzisieren. In diesem Fall ist anzugeben, welche Hauptsprache die Webseite ist. Einige dieser Attribute sind universell und können auf allen Baken verwendet werden (mit wenigen Ausnahmen), andere sind spezifisch.

Die Bake `<head>` enthält Elemente, die nicht auf dem Bildschirm angezeigt werden. Die Baken `<meta>` geben dem Browser, aber auch den Suchmaschinen Hinweise, wie zum Beispiel die Kodierung der im Dokument verwendeten Zeichen (UTF-8 im obenstehenden Beispiel) oder Informationen zur Anzeige auf Mobiltelefonen ("viewport" im obenstehenden Beispiel).
Die Markierung `<title>` ist sehr wichtig. So können Sie den Titel Ihrer Seite festlegen, der auf dem Tab Ihres Browsers angezeigt wird, aber vor allem der Name, der von den Suchmaschinen indexiert wird.<br>
Mit diesem Titel können Sie zum Beispiel in den Suchergebnissen auf Google, DuckDuckGo usw. erscheinen.<br>
Die Top-Level-Messung ist eine durch die SEO-Regeln (*Search Engine Optimization*) definierte Übung. Wir werden in diesem Artikel nicht auf dieses Thema eingehen.

Die Bake `<body>` enthält die anderen HTML-Tags, die Ihr Dokument strukturieren.

#### Mit einem Titel, Untertitel und Inhalt vervollständigen

Wir werden nun den Textinhalt Ihrer Seite bearbeiten, stets unter Einhaltung der Standardstruktur des HTML, um einen Titel, einen Untertitel, Absätze und Textlisten hinzuzufügen.

- **Die Baken `<h1>` bis `<h6>`**

Die Überschriften werden zwischen Tags geschrieben `<h...>`, die wie in jedem Dokument hierarchisch geordnet sind: zunächst `<h1>`, dann `<h2>` usw., wobei das letzte die Markierung `<h6>` ist. Ein Bake `<h1>` ist daher unerlässlich, wenn Sie ein Bake `<h2>`schreiben möchten. Wenn Sie diese Regel jedoch nicht einhalten, wird der Browser das Ergebnis fehlerfrei anzeigen.

```html
<body>
    <h1>Willkommen auf meiner persönlichen Seite</h1>
    <h2>Erstellen Sie schnell und einfach Ihre Website</h2>
</body>
```

Sie können das Ergebnis beobachten, indem Sie die HTML-Datei über einen Webbrowser (Firefox, Chrome, Safari usw.) öffnen: Beide Zeichenketten werden in unterschiedlichen Größen angezeigt.

- **Die Bake `<p>`**

Mit diesem Bake wird Text eingefügt ("p" für Absatz). Es können mehrere Server positioniert werden:

```html
<body>
    <h1>Willkommen auf meiner persönlichen Seite</h1>
    <h2>Erstellen Sie schnell und einfach Ihre Website</h2>
    <p>OVHcloud bietet Ihnen auf seinem Start 10M Angebot kostenlos ein Hosting für jeden Kauf einer Domain an.</p>
</body>
```

- **Die Baken `<ul>` und `<li>`**

Sie können im HTML-Format Listen verwenden. Wir nehmen dabei ein Beispiel für einfache, so genannte ungeordnete Listen (wie sie in einer Textverarbeitung verfügbar sind). Für die Erstellung einer Liste wird die Bake `<ul>` (*unordered list*) verwendet. Diese Bake wird weitere Elemente einrahmen, die Befeuerung `<li>`, die den Inhalt Ihrer Listen enthalten:

```html
<body>
    <h1>Willkommen auf meiner persönlichen Seite</h1>
    <h2>Erstellen Sie schnell und einfach Ihre Website</h2>
    <p>
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </p>
    <p>OVHcloud bietet Ihnen auf seinem Start 10M Angebot kostenlos ein Hosting für jeden Kauf einer Domain an.</p>
    <p>Das Angebot "Domainname" umfasst:</p>
    <ul>
        <li>Webhosting 10 MB gratis</li>
        <li>5 GB geschenkter E-Mail Account
        <li>DNSSEC: Schutz gegen Cache-Vergiftung (cache poisoning)</li>
        <li>Easy Redirect: Zugang zu sozialen Netzwerken über Ihre Domain</li>
    </ul>
</body>
```

Sie können das Ergebnis in Ihrem Browser sehen: standardmäßig werden die Listenelemente mit Chips angezeigt.

#### Bilder hinzufügen, um Ihre Seite attraktiver zu machen

Das Web ist vor allem ein visuelles Medium. Wir werden in diesem Bereich sehen, wie Sie Bilder in Ihren Inhalt einfügen. Das Start 10M Angebot bietet Ihnen einen Speicherplatz von 10 MB. Dies genügt für Ihre HTML und CSS Seiten, kann aber eingeschränkt werden, wenn Sie viele Bilder auf Ihrer Seite platzieren möchten. In diesem Fall empfehlen wir Ihnen, ein [OVHcloud Webhosting-Angebot](https://www.ovhcloud.com/de/web-hosting/) zu bestellen, um mehr Speicherplatz zu erhalten.

Der zur Anzeige eines Bildes verwendete HTML-Beacon ist der `<img>`. Im Gegensatz zu den Baken, die wir zuvor gesehen haben, gibt es kein Öffnen und Schließen dieses Elements. Wir reden von einem selbsttätigen Baken. Die Attribute dieser Bake ermöglichen die Verknüpfung des Dateistandorts mit dem beschreibenden Text des Bildes.

##### **Die Bilder optimieren**

Ein großes Bild ist ein Bild, das Zeit braucht, um von Ihrem Browser geladen zu werden, insbesondere wenn Ihre Besucher ein Smartphone oder ein Tablet verwenden, das mit dem 4 oder 5G Netzwerk verbunden ist.
In der Regel müssen Sie Ihre Bilder optimieren und deren Gewicht reduzieren. Dieses Gewicht wird in Bytes angegeben. Üblicherweise werden Kilobyte (1 kB = 1.000 Bytes) oder Megabyte (1 kB = 1.000.000 Bytes) verwendet. Ein Image von mehr als einigen Dutzend KB wird als schwer eingestuft und verdient Optimierung. 

**Beispiel**: Wenn Ihre Images je 1 MB wiegen, sind Sie auf Ihrem Start10M Hosting auf weniger als 10 Images beschränkt. Wenn es Ihnen gelingt, ihre Größe zwischen 50 KB und 200 KB zu reduzieren, könnten Sie bis zu 100 KB auf Ihrer Webseite zeigen.

Einige Tipps, wie Ihre Dateien so einfach wie möglich sein sollten:

- Beschränken Sie die Definition Ihrer Images, indem Sie diese so dimensionieren, wie sie auf Ihrer Website angezeigt werden.
- Die Größe wird in Pixeln mit Breite×Höhe ausgedrückt (z. B. 300×250 Pixel ist die Breite eines Standardwerbebildes);
- Ändern Sie die Auflösung (das "Web" verwendet eine Standardauflösung von 72 dpi).
- Bevorzugen Sie komprimierte Formate wie *JPEG*, *PNG* oder *Webp*.
- Es kann auch ein Vektorformat (SVG) verwendet werden.
- vermeiden Sie nicht komprimierte *BPM*- und *TIFF*-Formate.

##### **Bilder auf seinem Hosting speichern**

Aus Gründen der Lesbarkeit sollten die Images in einem dedizierten Verzeichnis gespeichert werden:

![Ordner und Ordner](images/create_your_personal_webpage_1.png){.thumbnail}

Man denke an eine Datei im *PNG* Format Fügen Sie es in das Verzeichnis "Bilder" ein:

![Ordnerstruktur mit Bildern](images/create_your_personal_webpage_2.png){.thumbnail}

Wir werden nun einen neuen Absatz erstellen, in dem wir das Bild eintragen (in diesem Beispiel geben wir nicht die Bildbildbildanzeigegröße an. Der Browser zeigt es entsprechend seiner ursprünglichen Größe als Datei an.)

```html
<body>
    <h1>Willkommen auf meiner persönlichen Seite</h1>
    <h2>Erstellen Sie schnell und einfach Ihre Website</h2>
    <p>
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </p>
    <p>OVHcloud bietet Ihnen auf seinem Start 10M Angebot kostenlos ein Hosting für jeden Kauf einer Domain an.</p>
    <p>Das Angebot "Domainname" umfasst:</p>
    <ul>
        <li>Webhosting 10 MB gratis</li>
        <li>5 GB geschenkter E-Mail Account
        <li>DNSSEC: Schutz gegen Cache-Vergiftung (cache poisoning)</li>
        <li>Easy Redirect: Zugang zu sozialen Netzwerken über Ihre Domain</li>
    </ul>
</body>
```

Das Ergebnis für Ihren Browser sollte sein:

![HTML-Code-Ergebnis im Browser](images/create_your_personal_webpage_3.png){.thumbnail}

### Gestalten Sie Ihren Inhalt mit CSS Stilen

Wir haben gesehen, wie Sie Ihren Inhalt in HTML strukturieren. Das Ergebnis ist minimalistisch und beschränkt sich auf Größen von Titeln und Untertiteln, die standardmäßig definiert sind.
Stilblätter ermöglichen es, das Aussehen und Verhalten der HTML-codierten Elemente zu ändern.

#### Grundsätzliches

##### **Erstellung einer CSS Datei**

Wie bei HTML Dateien können CSS Dateien mit jedem beliebigen Texteditor erstellt werden. Die Dateiendung muss *.css* sein.

![CSS Datei platzieren](images/create_your_personal_webpage_4.png){.thumbnail}

Wir müssen nun diese CSS-Datei, die wir konventionell *style.css* benannt haben, mit unserer HTML-Seite verbinden. Dieser Link wird durch Hinzufügen eines `<link>` Baches in der Bake `<head>` zur index.html Datei hergestellt:

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Kompatibel" content="IE=edge">
    <meta name="viewport" content="width=device width, start-scale=1.0">
    <title>Meine persönliche Seite</title>
    <link rel="stylesheet" href="style.css">
</head>
```

Um zu überprüfen, geben wir in unserem Stilblatt eine bestimmte Farbe für jedes Element auf `<h1>` unserer Webseite an. Ändern Sie die Datei style.css, indem Sie folgende Zeilen hinzufügen:

```html
h1 {
    color: red;
}
```

Diese Instruktionen werden als "CSS Regel" bezeichnet und bedeuten: Alle HTML-Elemente `<h1>` haben die Farbe *(color)* rot *(red)*.

Sie können eine andere Farbe auf dem Element `<h2>`, den Paragraphen und den Listenelementen testen:

```html
h1 {
    color: red;
}
 
h2 {
    color: blue;
}
 
p {
    color: slategray;
}
 
li {
    color: slategray;
}
```

Aktualisieren Sie die Seite Ihres Browsers, indem Sie auf die Taste `F5` Ihrer Tastatur klicken: Ihr Titel erscheint jetzt rot.

Browser verfügen standardmäßig über Stile, darunter spezielle Regeln für die Positionierung der Elemente. Wir werden die CSS Datei entsprechend ändern und eine Regel festlegen, die für alle im Browser angezeigten HTML-Elemente gilt. Es wird der Wähler `*` (Stern) verwendet, der so genannte universale Wähler, der am Anfang der CSS-Datei eingefügt wird:

```html
* {
    padding: 0;
    margin: 0;
}
```

Sie werden sehen, dass die Texte nun an die Browserkanten gebunden sind.

Die padding-Eigenschaft definiert den rotierenden Rand (Innenrand), d. h. den Raum außerhalb des Blocks, der den Text (oder irgendein Element) enthält. Das folgende Diagramm veranschaulicht die Übereinstimmung dieser Begriffe mit dem so genannten CSS-Boxmodell:

![CSS-Modell](images/create_your_personal_webpage_5.png){.thumbnail}

### HTML-Struktur des Dokuments verbessern

Wir haben grundlegende Elemente in Ihrem Bake `<body>` positioniert : `h`, `h`, `p`, `ul` und `li`.

In ihrer letzten Wiederholung bietet die fünfte [HTML5](https://html.spec.whatwg.org/)-Sprache neue Tags, die eine bessere Strukturierung und semantische Bereicherung eines Dokuments ermöglichen. Ein klassisches Dokument (auch auf einem traditionellen Datenträger) enthält visuell identifizierbare Blöcke, die als HTML wiedergegeben werden können :

- ein Header, der auf einem Beacon `<header>` (nicht zu verwechseln mit dem Beacon `<head>`) erscheint;
- einen Hauptinhalt, definiert durch ein `<main>` Beacon ;
- schließlich ein Seitenfuß, beschrieben durch das Element `<footer>`.

Jedes dieser Elemente kann für bestimmte Zwecke verwendet werden:

- Der `header` enthält zum Beispiel das Navigationsmenü (selbst mit einem Bake-`<nav>`);
- Von `Hand` werden alle inhaltlichen Elemente enthalten, die auch das Dokument noch genauer strukturieren können (`Abschnitt`, `Artikel`, `aside`, `div` usw.);
- Der `Footer` enthält allgemeinere Informationen wie Links zu sozialen Netzwerken, rechtliche Hinweise, allgemeine Nutzungsbedingungen und möglicherweise ein anderes Browsermenü.

Ihr HTML-Code wird wie folgt strukturiert:

```html
<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ma page personnelle</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
                <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
        </header>
        <main>
            <h1>Willkommen auf meiner persönlichen Seite</h1>
            <h2>Erstellen Sie schnell und einfach Ihre Website</h2>
            <p>OVHcloud bietet Ihnen auf seinem Start 10M Angebot kostenlos ein Hosting für jeden Kauf einer Domain an.</p>
            <p>Das Angebot "Domainname" umfasst:</p>
            <ul>
                <li>Webhosting 10 MB gratis</li>
                <li>5 GB geschenkter E-Mail Account
                <li>DNSSEC: Schutz gegen Cache-Vergiftung (cache poisoning)</li>
                <li>Easy Redirect: Zugang zu sozialen Netzwerken über Ihre Domain</li>
            </ul>
        </main>
        <footer>
            <p>© 2022 Meine persönliche Seite</p>
        </footer>
    </body>
</html>
```

### Ein Element interaktiv machen

Links, die es ermöglichen, über eine Website von einer Seite zur anderen zu navigieren, sind wesentliche Elemente des Web. Zu ihrer Umsetzung ist die Bake `<a>` (_Anchor_, Anker) zu verwenden, die ein interaktives Element zusammen mit einem Attribut `href` enthält, das die URL enthält, auf die zu verweisen ist. Im folgenden Beispiel werden wir das Logo in der Bake interaktiv `<header>` machen :

```html
<header> 
    <a href="index.html">
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </a>
</header>
```

Wir können es genauso machen, um den Text interaktiv zu machen:

```html
<p>Das Angebot <a href="https://www.ovhcloud.com/de/domains/">"Domainname"</a> beinhaltet:</p>
```

Um das Ziel des Links in einem neuen Tab anzuzeigen genügt es, ein Attribut `target` in Ihrem Bake `<a>` anzuzeigen:

```html
<p>Das Angebot <a href="https://www.ovhcloud.com/de/domains/" target="_blank">"Domainname"</a> beinhaltet:</p>
```

### Wie speichere ich Inhalte auf meinem Hosting?

Damit Ihre Seiten und damit Ihre Seite für jedermann sichtbar sind, müssen Sie sie auf Ihrem Hosting ablegen (Sie müssen Ihr Hosting wie [in dieser Anleitung beschrieben aktivieren](https://docs.ovh.com/de/hosting/start10m-aktivieren/)).

Der Dateitransfer erfolgt über ein dediziertes Protokoll: FTP** (für **F**ile **T**ransfer **P**rotokoll). Verwenden Sie für diese Operation ein dediziertes Programm wie [FileZilla](https://filezilla-project.org/download.php?type=client) oder [Cyberduck](https://cyberduck.io/download/).

### Website per FTP deployen

Um Ihre Dateien auf Ihrem Hosting zu speichern, lesen Sie die Anleitung zur Verwendung von [FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/).

Sobald die Dateien vollständig auf Ihr Hosting übertragen wurden, können Sie das Ergebnis anzeigen lassen, indem Sie Ihren Domainnamen in die Adresszeile Ihres Browsers eingeben oder indem Sie die Taste `F5` Ihrer Tastatur drücken, um die Seite neu zu laden, wenn Sie bereits auf Ihrer Seite sind.

> [!warning]
> 
> Unsere Infrastruktur umfasst ein Cache-System, mit dem Ihre Seiten so schnell wie möglich angezeigt werden können. Beim Deployment können Sie die Änderungen in Ihrem Browser nicht sofort erkennen. In diesem Fall warten Sie einige Sekunden und laden Sie den Cache Ihres Browsers mit der Kombination aus `Ctrl` + `F5` auf.
> 

### Verbessern Sie Ihre Website mit einem Template

CSS und HTML sind einfach verständliche Sprachen für schnelle Ergebnisse. Allerdings haben sich diese Sprachen, insbesondere der CSS, erheblich weiterentwickelt. Wenn die Blätter von Stilen in Kaskaden mehr Funktionen bieten (Animationen, Degradation, Position der Elemente auf der Seite usw.), sind sie komplexer zu kodieren.

Um Zeit für das Aussehen Ihrer Website zu gewinnen und Ihnen zu erlauben, sich auf den Inhalt zu konzentrieren, und so ist es gängige Praxis, Templates (*Modelle*) zu verwenden, um Zeit zu gewinnen und ein Ergebnis von grafischer und funktionaler Qualität zu erzielen (Design, Ergonomie, Sichtbarkeit auf Smartphone und Tablet).

#### Was ist ein Template? Welche Lösungen verwenden Sie?

Ein *Template* ist ein Modell oder ein Beispiel, das man wiederverwenden kann, ob man es nun anpasst oder nicht. Die *Nutzung* von Templates ermöglicht es, Zeit für die Gestaltung einer Website zu gewinnen, indem bereits entwickelte Elemente angepasst werden und gleichzeitig die Qualitäten geboten werden, die von einer "professionellen" Website gefordert werden können. Das Wort "Thema"kann ebenfalls verwendet werden.

Im Internet sind kostenlose "Open Source"-Lösungen verfügbar, wie [Bootstrap](https://materializecss.com/), [Materialize](https://materializecss.com/), [Foundation](https://get.foundation/) oder [Semantic UI](https://semantic-ui.com/). Diese Tools werden als "Framework" bezeichnet : Hierbei handelt es sich um Bibliotheken, die die Erstellung von Webseiten oder Webanwendungen erleichtern. Sie bieten standardisierte, personalisierbare und wiederverwendbare Elemente und die gesamte Community bietet *wiederverwendbare* Templates.

#### Bootstrap

Bootstrap ist eines der von Web-Entwicklern verwendeten Werkzeuge, das am häufigsten vorkommt. Ursprünglich 2010 von Twitter-Technikern entwickelt, um die Entwicklung intern entwickelter Schnittstellen zu harmonisieren. Bootstrap ist seit 2011 unter der Open Source Lizenz verfügbar und hat sich im Zuge des technologischen Wandels (Technologie- und Nutzungsentwicklung) kontinuierlich weiterentwickelt und ist nach wie vor unverzichtbar.

Einige Beispiele für Websites und Webanwendungen mit Bootstrap:

- [https://themes.getbootstrap.com/](https://themes.getbootstrap.com/)
- [https://bootswatch.com/](https://bootswatch.com/)
- [https://bootstrapmade.com/](https://bootstrapmade.com/)
- [https://bootstraptaste.com/](https://bootstraptaste.com/)
- [https://bootstrapthemes.co/](https://bootstrapthemes.co/).

## Weiterführende Informationen

Im Web finden Sie viele Ressourcen, um Ihre Praxis zu lernen und zu verbessern, ganze Elemente des Codes oder Teile des Codes zu kopieren oder Funktionen zu Ihrer Website hinzuzufügen, ohne Fehler oder Fehlfunktionen zu riskieren. Hier einige Fundstellen:

- [Mit dem HTML beginnen](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [Anleitung zu den HTML Befeuerungen](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools-Tutorial auf HTML](https://www.w3schools.com/html/)
- [CSS Mozilla Tutorials](https://developer.mozilla.org/en-US/docs/Web/CSS/Tutorials)
- [CSS Tutorial W3 Schools](https://www.w3schools.com/css/).

### Ihre Images neu bearbeiten

Zahlreiche kostenlose Tools erlauben es Ihnen, Ihre Illustrationen zu überarbeiten:

- Die Anwendung [Windows](https://apps.microsoft.com/store/detail/photos-microsoft/9WZDNCRFJBH4) Fotos 10 und 11
- Die App [macOS](https://support.apple.com/de-de/guide/photos/welcome/mac) Fotos
- [Paint.Net](https://www.getpaint.net/), [GIMP](https://www.gimp.org/), [darktable](https://www.darktable.org/)
- Denken Sie auch an die für Ihr Smartphone Android oder iOS verfügbaren Fototouch-Apps.

Sie finden auch Online-Ressourcen:

- [Komprimierung](https://compressor.io/)
- [ShrinkMe](https://shrinkme.app/)
- [Free Online Image Optimizer](https://kraken.io/web-interface)
- [TinyJPG](https://tinyjpg.com/) und [TinyPNG](https://tinypng.com/).

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/de/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, können Sie unsere [Support-Angebote einsehen](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
