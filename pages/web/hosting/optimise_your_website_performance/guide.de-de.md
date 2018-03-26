---
title: 'Webhosting: Optimierung der Performance Ihrer Webseite'
excerpt: 'Webhosting: Optimierung der Performance Ihrer Webseite'
id: '1396'
slug: webhosting_optimierung_der_performance_ihrer_webseite
legacy_guide_number: g1396
---


## Allgemeines

## Wenn Ihre Seite langsam ist, stellen sich folgende Fragen:

- Seit wann ist die Seite langsam?

So können Sie herausfinden, ob das Problem auf eine Änderung an Ihrer Webseite zurückzuführen ist, etwa ein schlecht konfiguriertes Plugin oder ein neues Theme, das durch viele externe Abfragen die Geschwindigkeit Ihrer Seite beeinträchtigen kann.

- Besteht das Problem nur ab und zu oder dauerhaft?

Hier kann es sinnvoll sein zu überprüfen, zu welcher Tageszeit die Geschwindigkeitsprobleme auftreten und ob es möglicherweise mit erhöhtem Traffic zusammenhängt oder ob gleichzeitig andere Tasks auf dem Hosting laufen.

- Betrifft es die ganze Webseite oder nur Teile davon?

Wenn nur eine einzige Seite und nciht Ihre ganze Webpräsenz betroffen ist, kann eine gezielte Analyse dieser Seite von Interesse sein. Möglicherweise kann hier ein fehlerhaftes Skript die Probleme verursachen.

- Erscheint eine Fehlermeldung? Wenn ja, welche?

Überprüfen Sie, ob Fehlermeldungen generiert werden, um den Ursprung des Problems zu identifizieren. In dieser Anleitung erklären wir Ihnen verschiedene Fehlertypen sowie die häufigsten Ursachen.


![](images/img_1876.jpg){.thumbnail}


## Firebug
Ein möglicherweise für Sie interssantes Analyse-Tool ist [Firebug](https://addons.mozilla.org/fr/firefox/addon/firebug/).

Es handelt sich dabei um ein Add-on für den Browser Mozilla Firefox.

Damit können Sie unter anderem die Ladezeiten Ihrer Seite im Detail analysieren.

Gehen Sie hierfür in den Tab "Netzwerk".

In nebenstehendem Beispiel braucht die Seite 5,6 Sekunden zum Laden. Dank Firebug sieht man direkt, dass eines der Bilder "accueil.png" alleine 2,42 Sekunden zum Laden benötigt, weil es mehr als 1 MB groß ist. In diesem Fall kann man also das Bild optimieren, um so die Ladezeiten der Webseite zu verbessern.

![](images/img_1886.jpg){.thumbnail}


## Statistiken Ihrer Seite

## Lesen von Daten
Sie können über das neue [OVH Kundencenter](https://www.ovh.com/manager/web/login.html) auf neue Statistiken für Ihre Webseite zugreifen.


- HTTP-Anfragen: Durchschnittliche Hits. (Hit: Dateizugriffsanfrage (unabhängig vom Dateityp, seien es also Texte, Bilder, etc.) beim Aufruf einer Webseite über einen Browser).

Hits werden nach http-Status klassifiziert: 2xx/3xx - 4xx - 5xx


- Durchschnittliche Antwortzeit: Hier wird zwischen dynamischen und statischen Seiten unterschieden.

- Überschreitung des Ressourcenlimits: Diese Grafik zeigt die Verwendung von PHP Workers, um Sie bei Bedarf auf ein anderes Web-Hosting-Paket zu lenken. Mit PHP-FPM können Sie möglicherweise die Verwendung der PHP Worker reduzieren.

- CPU-Auslastung: Zeigt Ihnen die CPU-Auslastung Ihrer Website. So können Sie mögliche Überlastungen schneller erkennen.

- Ausgehende Verbindungen: Hier können Sie ausgehende Verbindungen von den Servern sehen. Wenn etwa Ihre Website gehackt wird, könnte der Server verwendet werden, um andere externe Webseiten anzugreifen. Sie können auch externe Anrufe von Modulen wie Facebook, Twitter etc. überprüfen, die ebenfalls Ihre Webseite verlangsamen können.



![](images/img_2105.jpg){.thumbnail}

- Auf unserem Beispiel-Screenshot wurde die Website am 11. Juli gehackt. Dadurch wurden die Ladezeiten und die Zahl der ausgehenden Verbindungen stark erhöht. Nach Behebung der Sicherheitslücke sind Antwortzeiten, ausgehende Verbindungen und CPU-Auslastung wieder normal.




## PHP-FPM
Wir haben PHP-FPM unserer Web-Infrastruktur angepasst, um die PHP-Antworten zu beschleunigen.

Bei Tests unter Laborbedingungen kann man so bis zu siebenmal schnellere ladezeiten erzielen.

Auch zur Verwendung von PHP-FPM gibt es eine Hilfe:


- []({legacy}1175)


Einige Servervariablen werden durch die Verwendung von PHP-FPM verändert:

|Variable|ohne PHP-FPM|mit PHP-FPM|
|max_execution_time|120s|300s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|



![](images/img_1890.jpg){.thumbnail}

- Die .ovhconfig-Datei muss im Wurzelverzeichnis Ihres Hostings oder in einem Unterverzeichnis erster Ebene liegen (ex : /www/), nicht zweiter Ebene oder höher (z. B.: /www/test/ , /www/test/test2/)


Diese Grafik zeigt beispielhaft die Verwendung von PHP-FPM.

Es ist deutlich zu sehen, dass die CPU-Auslastung hierdurch radikal sinkt, wodurch die Performance der Webseite enorm zulegt.

![](images/img_2167.jpg){.thumbnail}


## Plugins

## Verwendung eines Cache-Plugins
Die Verwendung von CMS verwendet viele Libraries, damit eine einzige Webseite viele Elemente handhaben kann. Die Browser Ihrer Besucher müssen alle diese Elemente laden und lesen.

Um die Verwendung Ihres CMS zu optimieren, empfehlen wir Cache-Plugins, mit denen Sie vermeiden können, dass die gesamten Inhalte Ihrer Webseite bei jedem Aufruf neugeladen werden.

Wir empfehlen Ihnen Cache-Plugins zur Optimierung Ihrer Webseite direkt auf der Community-Webseite des von Ihnne verwendeten CMS zu suchen (Joomla! - PrestaShop - WordPress).

![](images/img_1892.jpg){.thumbnail}

## Deaktivierung - Löschung nicht benötigter Plugins
Die Performance Ihres CMS können Sie auch optimieren, indem Sie nicht (mehr) benötigte Plugins deaktivieren oder vollständig löschen. So vermeiden Sie, dass nicht benötigte Elemente geladen werden.


## CDN
Um Zugriffs- und Download-Zeiten für Ihre Webseite zu verbessern und ein besseres Ranking zu erreichen, können Sie das OVH CDN (Content Delivery Network) verwenden, um Ihre Dateien, Applikationen und Webseiten möglichst nahe an Ihren Benutzern zu speichern.

So können Sie die Ladezeiten für Ihre Benutzer auf der ganzen Welt verbessern, weil die statischen Teile Ihrer Webseite direkt vom Besucher am nächstgelegenen Point of Presence geladen werden.

Informieren Sie sich über unser Angebot auf der [CDN Webseite](https://www.ovh.de/cdn/).

![](images/img_1891.jpg){.thumbnail}


## SQL

## Was bringt Datenbankoptimierung?
Damit eine Datenbank jederzeit gut funktioniert, müssen Sie sie entsprechend pflegen. Die in der Datenbank enthaltenen Informationen sollten schnellstmöglich an das Skript zurückgegeben werden, von dem eine Abfrage kommt.

![](images/img_2002.jpg){.thumbnail}
Hierfür brauchen Sie eine gut strukturierte und optimierte Datenbank. Wie das geht, erklären wir Ihnen nun.

## 1. Datenbank

- Datenbank indizieren:


Um die Geschwindigkeit der Suche bei einer Abfrage zu erhöhen, müssen Sie in WHERE Clauses verwendete Felder indizieren.

Beispiel:

```
Sie suchen oft anhand der Stadt nach einer Person. Sie müssen das Feld "Stadt" mit folgendermaßen  indizieren:

ALTER TABLE `test` ADD INDEX (`town`);
```



- Datenbank bereinigen:


Wenn Daten vorhanden sind, die Sie nicht mehr benötigen, sollten Sie diese archivieren? Ihre Tabellen sind so weniger voll und Datenbankabfragen werden beschleunigt.

## 2. Skripte

- Anzeigebeschränkung:


Beschränken Sie die Anzahl der angezeigten Datensätze (z. B. 10 pro Seite) mit dem LIMIT-Teil Ihrer SQL-Abfrage.


- Gruppieren der Abfragen:


Gruppieren Sie Ihre Anfragen am Anfang des Skripts folgendermaßen:


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



- Optimierung durch Verwendung des Cache:


Wenn es Elemente in Ihrer Datenbank gibt, die sich nicht verändern, können Sie diese im Cache speichern.

Solche kleinen Tricks reduzieren die Zugriffszahlen auf Ihre Datenbank und beschleunigen so das Laden Ihrer Seite. 

Sie können auch Session-Cache verwenden.
Stellen Sie Abfrageergebnisse in eine Session-Variable. So muss eine identische Abfrage beim nächsten Mal nicht ausgeführt werden, stattdessen werden die vorhandenen Session-Variablen verwendet.


- Abruf nur notwendiger Daten:


Stellen Sie sicher, dass Sie in Ihren SQL-Abfragen nur wirklich notwendige Daten auswählen und dass Sie die Links zwischen den Tabellen nicht vergessen haben.

Beispiel:


```
(where table1.champs = table2.champs2)
```



- Vermeiden außerordentlich ressourcenintensiver Optionen:


Vermeiden Sie etwa die Verwendung von "HAVING", da hierdurch Abfragen verlangsamt werden können. "GROUP BY" sollte ebenfalls nur dann verwendet werden, wenn es unbedingt notwendig ist.

