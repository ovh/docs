---
title: 'Optimierung der Performance Ihrer Webseite'
excerpt: 'Erfahren Sie hier, wie Sie Latenzen auf Webseiten analysieren und verbessern können'
updated: 2024-01-08
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel 

Diese Anleitung richtet sich an Kunden, die die Performance ihrer Webauftritte optimieren möchten.
Die erläuterten Stichpunkte helfen Ihnen dabei, ein grundlegendes Verständnis dafür zu erlangen, welche Kriterien die Geschwindigkeit von Webseiten beeinflussen können.

**Erfahren Sie, wie Sie die Performance Ihrer Webseite verbessern können.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting).
- Sie erhielten eine E-Mail, die bestätigt, dass Ihr Webhosting eingerichtet wurde.
- Sie verfügen über einen [Domainnamen](/links/web/domains), mit dem Sie auf Ihre Webseite zugreifen können.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

### Schritt 1: Den Anwendungsbereich definieren

#### Fragen, die Sie sich stellen sollten:
Wenn Ihre Webseite langsam ist, kann es hilfreich sein, sich die folgenden Fragen zu stellen um den Untersuchungsumfang einzugrenzen.

1. **Wann wurde Ihre Webseite langsam?**
Auf diese Weise können Sie feststellen, ob die Latenz durch eine kürzlich vorgenommene Änderung der Webseite verursacht wurde, z.B. durch ein falsch optimiertes neues Plugin oder Layout, das viele ausgehende Anfragen senden und Ihre Website verlangsamen könnte.
2. **Tritt die Verlangsamung einmalig auf oder ist die niedrige Geschwindigkeit ein Dauerzustand?**
Es kann hilfreich sein, zu überprüfen, wann die Webseite im Tagesverlauf langsam ist, und dann festzustellen, ob die Verlangsamung durch einen Anstieg des Traffic verursacht wurde oder ob gleichzeitig andere Tasks auf dem Hosting-Paket ausgeführt wurden.
3. **Betrifft die Verlangsamung Ihre gesamte Webseite oder nur einen Teil davon?**
Wenn nur eine Webseite und nicht der gesamte Webauftritt betroffen ist, ist es hilfreich, diese Seite insbesondere zu analysieren und zu überprüfen, welche Anforderung oder welches Skript die Latenz verursachen kann.
4. **Erhalten Sie eine Fehlerseite? Wenn ja, welche Art?**
Überprüfen Sie, ob Fehler generiert werden, um die Ursache der Latenz zu ermitteln. Einen besseren Überblick über auftretende Fehler bei Ihrem Hosting erhalten Sie bei einer Durchsicht der Logs.

Die Beantwortung dieser Fragen kann dazu beitragen, sich auf bestimmte Punkte zu konzentrieren und Verbesserungsbereiche zu erkennen.

Für die Verwendung von CMS wie WordPress, PrestaShop, Drupal oder Joomla! sind viele Bibliotheken erforderlich, deshalb könnte eine einzelne Webseite viele Elemente zu verarbeiten haben.
Internetbrowser müssen alle diese Elemente laden und lesen.
Wir geben Empfehlungen dazu, welches Webhosting-Angebot für das oben aufgeführte CMS verwendet werden sollte auf [der Produktseite](/links/web/hosting).

Weitere Informationen dazu, welches Hostingpaket sich eignet, finden Sie auf [dieser Seite](/links/web/hosting-best-web).

### Schritt 2: Überprüfen der PHP-Version
Durch die Verwendung der neuesten PHP-Version, die mit Ihrer Seite kompatibel ist, könnte die Leistung erheblich beeinflusst werden.
Um zu überprüfen, ob Ihre Webseite mit der neuesten PHP-Version kompatibel ist, können Sie [in der offiziellen Dokumentation von PHP](https://php.net/eol.php){.external} nachlesen.

**PHP-FPM**

Wir haben PHP-FPM an unsere Webinfrastruktur angepasst, um die PHP-Antworten zu beschleunigen und die CPU-Auslastung radikal zu reduzieren.
Tests haben gezeigt, dass die Leistung im Vergleich zum älteren Mechanismus bis zu **7 mal schneller** ist.

Einige Servervariablen werden über die Verwendung von PHP-FPM geändert:

|Variable|ohne PHP-FPM|mit PHP-FPM|
| ------------- |:-------------:| -----:|
|max_execution_time|120 s|165 s|
|max_input_vars|2000|16000|
|memory_limit|128 M|512 M|

Informationen zum Aktualisieren von PHP finden Sie in [dieser Anleitung](/pages/web_cloud/web_hosting/configure_your_web_hosting).

Informationen zur Verwendung von PHP-FPM in der _stabilen_ Version oder Details zu erweiterten Optionen Ihres Webhostings finden Sie in [dieser Anleitung](/pages/web_cloud/web_hosting/configure_your_web_hosting).

Die Datei _.ovhconfig_ befindet sich im Stammverzeichnis des Hosting-Pakets oder in einem Unterverzeichnis der Ebene 1 (z.B.: _/www/_), jedoch nicht in Verzeichnissen der Ebene 2 oder darunter (z.B.: _/www/test/_ , _/www/test/test2/_)

### Schritt 3: Überprüfen der Medieninhalte (Bilder, Videos, ...)
Beim Zugriff auf eine Webseite müssen alle Inhalte vom Browser heruntergeladen werden.

Dieser Vorgang kann insbesondere dann problematisch sein, wenn Sie über ein mobiles Gerät auf eine nicht hierfür optimierte Webseite zugreifen.

Mithilfe komprimierter Bilder und Videos besteht die Möglichkeit, die Ladezeit zu verkürzen.
Zur Optimierung Ihrer Inhalte können verschiedene Algorithmen und Tools verwendet werden. Plugins gibt es auch für die gängigsten CMS.
Es liegt an Ihnen, diejenigen auszuwählen, die Ihren spezifischen Anforderungen entsprechen.

Weitere Details zu diesem Thema finden Sie unten in Schritt 5.

### Schritt 4: Optimieren Ihrer Skripte

Vergleichen Sie die Grafiken der Ressourcennutzung Ihres Hostings (weitere Informationen unten), um den Ursprung der Verzögerungen zu ermitteln, und entnehmen Sie die Daten dieser Spitzenwerte aus den Protokollen.

Sie können direkt über das [OVHcloud Kundencenter](/links/manager) auf Ihre Logs, Statistiken und Verlaufsdiagramme zugreifen.

Zugriff auf Statistiken und Logs:

1. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
2. Klicken Sie auf den Tab `Statistiken und Logs`{.action}.
3. Klicken Sie anschließend auf den Button `Die Statistiken anzeigen`{.action} angezeigt, um auf die Besucherstatistiken der Website zuzugreifen, oder auf `Die Logs einsehen`{.action}, um die für Ihr Webhosting verfügbaren Logs anzuzeigen.

![logs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/tab.png){.thumbnail}

Zugriff auf Nutzungsgraphen:

1. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
2. Klicken Sie auf den Tab `Statistiken und Logs`{.action}. Scrollen Sie bis zum Ende der Seite, um die Graphen zur Webhosting-Nutzung einzusehen.
3. Wählen Sie den **Informationstyp** sowie den **Zeitraum** der angezeigten Daten aus.

![graphs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/infrastructure-statistics-graph.png){.thumbnail}

Welche verschiedenen Arten von Informationen können angezeigt werden?

- **HTTP Requests**: Gibt die durchschnittliche Anzahl der Webseitenzugriffe an. Hits werden nach HTTP-Status 2xx/3xx/4xx/5xx klassifiziert.

- **Durchschnittliche Antwortzeit**: Bezieht sich auf die durchschnittliche Seitenantwortzeit. Es werden dynamische und statische Seiten unterschieden.

- **Überschreitungen der Ressourcenobergrenzen**: In dieser Grafik wird die Auslastung durch PHP Worker angezeigt, um Ihnen bei Bedarf ein anderes Webhosting-Paket zu empfehlen. Die Verwendung von PHP-FPM kann Ihnen dabei helfen, den Einsatz von PHP Workern zu reduzieren.

- **CPU Verwendung**: Zeigt die CPU-Auslastung Ihrer Webseite an. Auf diese Weise können Sie eine mögliche CPU-Überlastung erkennen.

- **Ausgehende Verbindungen**: Auf diese Weise können Sie ausgehende TCP-Anforderungen des Servers anzeigen. Wenn Ihre Webseite beispielsweise gehackt wurde, könnte sie über den Server auf andere externe Webseiten zugreifen. Sie können auch externe Anrufe von Modulen wie Facebook, Twitter usw. überprüfen. Durch das Reduzieren der Anzahl ausgehender TCP-Anfragen lässt sich die Ladezeit verkürzen. Wenn der Server, von dem Sie Inhalte anfordern, Zeit zum Beantworten benötigt, erhöht sich die Verzögerung beim Laden Ihrer Webseite.

- **FTP Befehle**: Zeigt die verschiedenen FTP-Befehle an, die auf dem Hosting verwendet wurden. z.B. erfolgreiche und erfolglose Anmeldeversuche, Herunterladen, Hochladen und Löschen von Dateien.

Die beiden folgenden Kategorien werden nur dann angezeigt, wenn Sie derzeit eine Datenbank für Ihr Hosting-Angebot verwenden.
Vergessen Sie nicht, den Namen Ihrer Datenbank und den gewünschten Zeitraum auszuwählen.

- **SQL-Antwortzeiten**: Zeigt die Antwortzeit der Abfragen an.

- **SQL Requests**: Zeigt die Anzahl der Anfragen an.

### Schritt 5: Überprüfen von Netzwerkanfragen
Ein nützliches Tool für die Analyse ist der [Network Monitor](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor){.external}, der direkt in den Mozilla Firefox-Browser integriert ist und die detaillierte Analyse der Ladezeit einer Webseite ermöglicht.

So können Sie überprüfen, welche Elemente Ihrer Seite schwerfällig geladen werden.
Es kann hilfreich sein, einzugrenzen, welche Bilder und welche Inhalte die Ladezeit der Webseite verlängern, und damit Prioritäten zu setzen, wo Optimierungen vorgenommen werden sollten.

Sie können auf dieses Tool zugreifen, indem Sie die Taste F12 auf Ihrer Tastatur drücken (über Firefox oder Chrome).

Durch das Reduzieren der Anzahl ausgehender TCP-Anfragen bietet sich auch eine gute Möglichkeit, die Ladezeit zu verkürzen. Wenn der Server, von dem Sie Inhalte anfordern, Zeit zum Beantworten benötigt, erhöht sich die Verzögerung beim Laden Ihrer Website.

**CDN**

Um den Webseitenzugriff auf Downloads zu verbessern und ein optimiertes Ranking zu erhalten, können Sie das OVHcloud CDN (Content Delivery Network) verwenden, um Ihre Dateien, Anwendungen und Webseiten näher bei Ihren Besuchern zu speichern.

Infolgedessen verbessern Sie die Reaktionszeiten für Besucher auf der ganzen Welt, da die statischen Teile Ihrer Website direkt von Ihrem Besucher an der nächstgelegenen Präsenzstelle (PoP) heruntergeladen werden.

Entdecken Sie hier unsere [CDN Lösung](https://www.ovh.de/cdn/).

### Schritt 6: Überprüfen des verwendeten Content Management Systems (CMS) und der verwendeten Plugins

_Dieser Schritt ist optional, wenn Sie kein CMS verwenden._

Um sicherzustellen, dass Ihr Hosting-Angebot an die Anforderungen Ihres CMS angepasst ist, finden Sie einen Vergleich unserer Dienste auf [der Produktseite](/links/web/hosting).

- **Verwenden eines Cache-Plugins:** Um CMS verwenden zu können, benötigen Sie mehrere Bibliotheken, sodass eine einzelne Webseite eine enorme Anzahl von Elementen verarbeiten kann. Um Ihr CMS zu optimieren, sollten Sie Cache-Plugins verwenden, um zu vermeiden, dass der gesamte Inhalt Ihrer Webseite bei jedem Laden einer Seite neu generiert wird. Wir empfehlen, auf den Community-Websites nach Cache-Plugins suchen, die sich auf das von Ihnen verwendete CMS beziehen (Joomla! - PrestaShop - WordPress).

- **Deaktivierung nicht verwendeter Plugins:** Es ist meist eine gute Idee, nicht verwendete Plugins zu deaktivieren oder gar zu löschen, um die Leistung der Webseite zu verbessern. Dadurch wird verhindert, dass nutzlose Elemente heruntergeladen werden.

### Schritt 7: Ihre Datenbank optimieren

_Dieser Schritt ist optional, wenn Sie keine Datenbank verwenden._
Sie können mit PHPMyAdmin auf Ihre Datenbank zugreifen. Anweisungen zur Verwendung von PHPMyAdmin würden den Rahmen dieser Anleitung sprengen und werden daher nicht weiter ausgeführt.
Es gibt jedoch viele externe Tutorials zu diesem Thema.

**So greifen Sie über phpMyAdmin auf die Datenbank zu:** Um über phpMyAdmin auf Ihre Datenbank zuzugreifen, gehen Sie wie folgt über das [OVHcloud Kundencenter](/links/manager) vor:

- Klicken Sie im Bereich `Hosting-Pakete`{.action} auf Ihre Domain.
- Wechseln Sie zur Registerkarte `Datenbanken`{.action}.
- Klicken Sie auf `...`{.action} rechts neben Ihrer Datenbank, um auf phpMyAdmin zuzugreifen.

**Warum sollte eine Datenbank optimiert werden?** Sie müssen eine Datenbank pflegen, um sicherzustellen, dass deren Leistung optimiert ist. Mit anderen Worten, die in der Datenbank enthaltenen Informationen sollten so schnell wie möglich an das Skript zurückgegeben werden, von dem sie angefordert wurden. Um dies zu erreichen, muss eine Datenbank gut strukturiert und optimiert sein. Wir haben einige Hinweise zusammengestellt, wie Sie Ihre Datenbank am besten optimieren können.

#### In der Datenbank

- **Die Datenbank indizieren:** Um die Suchgeschwindigkeit während einer Abfrage zu erhöhen, müssen Sie Felder indizieren, die in WHERE-Klauseln verwendet werden. Beispiel: Sie suchen oft nach einer Person über die Stadt. Sie müssen das Feld „city“ mit der folgende Anfrage indizieren:

```
ALTER TABLE `test` ADD INDEX (`city`);
```

- **Die Datenbank bereinigen:** Wenn Daten nicht mehr verwendet werden, sollte man diese archivieren. Die Tabellen werden so weniger voll und das Abfragen der Datenbank nimmt weniger Zeit in Anspruch.

#### In Ihren Skripten

- **Anzeigelimit:** Begrenzen Sie die Anzahl der angezeigten Datensätze (z.B. 10 pro Seite) mit dem LIMIT-Teil Ihrer SQL-Abfrage.

- **Sortieren Sie Ihre Requests:** Gruppieren Sie Ihre Anfragen zu Beginn des Skripts folgendermaßen:

```
open_connection
request1
request2
...
close_connection

Display...
Treat data
Loop through data...
Display...
...
```

Durch das Schließen der Verbindung nach der Anfrage kann der Datenbankserver sofort für andere Anfragen verfügbar sein (und es wird vermieden, dass der Fehler „Benutzer hat bereits mehr als 'max_user_connections' aktive Verbindungen“ angezeigt wird).

#### Ihre Datenbank mithilfe des Cache optimieren

- Wenn Ihre Datenbank Elemente enthält, die sich nicht verändern, sollten Sie sie diese Elemente zwischenspeichern. Wenn Sie diesen Tipp befolgen, muss deutlich weniger häufig auf die Datenbank zugegriffen werden und die Ladezeit Ihrer Seite wird beschleunigt.

- Sie können auch einen Sitzungscache ausführen, d.h. Sie fügen Abfrageergebnisse in eine Sitzungsvariable ein. Auf diese Weise müssen Sie beim nächsten Mal keine identische Abfrage ausführen, sondern können stattdessen nur die Sitzungsvariablen abrufen.

- Stellen Sie nur die verwendeten Daten wieder her: Stellen Sie in Ihren SQL-Anfragen sicher, dass Sie nur das auswählen, was Sie benötigen, und dass Sie die Verknüpfungen zwischen den Tabellen nicht vergessen haben.

Beispiel:

```
(where table1.champs = table2.champs2)
```

#### Vermeiden Sie ressourcenintensive Abfragen
Vermeiden Sie die Verwendung der „HAVING“ -Klausel, die Abfragen verlangsamen kann. Sie sollten auch die Verwendung von „GROUP BY“ vermeiden, es sei denn, dies ist unbedingt erforderlich.

#### Web Cloud Databases
Wenn die Datenbank trotz aller Änderungen und Optimierungen, die Sie vorgenommen haben, zu langsam läuft oder wenn eine große Anzahl von Anfragen regelmäßig an die Datenbank gestellt werden, können Sie gegebenenfalls zu unserem Web Cloud Databases-Angebot wechseln; dort stehen Ihnen dann mehr Ressourcen zur Verfügung.
[Das Web Cloud Databases Angebot auf unserer Website](https://www.ovh.de/cloud/cloud-databases/){.external}.

## Weiterführende Informationen

[Konfiguration Ihres Webhostings bearbeiten](/pages/web_cloud/web_hosting/configure_your_web_hosting)

[Verwaltung einer Datenbank in Ihrem Webhosting](/pages/web_cloud/web_hosting/sql_create_database){.external}

[Erste Schritte mit Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb){.external}

Treten Sie unserer [User Community](/links/community) bei.