---
title: Ein Objekt mit temporärer Adresse teilen
excerpt: Ein Objekt mit temporärer Adresse teilen
slug: ein_objekt_mit_temporarer_adresse_teilen
legacy_guide_number: g2007
---


## 
OpenStack Swift ermöglicht das Speichern großer Mengen von Dateien.

Um Ihre Dateien zu verwalten, müssen Sie für jede Anfrage an die API mittels eines Tokens authentifiziert werden. So können Ihre Rechte aus Swift jedes Mal verifiziert (Lesen, Schreiben, ...).

Das Token erhalten Sie über das Authentifizierungssystem unter Angabe von Login und Passwort.

Gehen wir nun also davon aus, Sie möchten eine Datei mit einem Freund oder Kollegen teilen. Dabei möchten Sie aber natürlich nicht Ihre persönlichen Daten für die Authentifizierung weitergeben. In diesem Fall sind also temporäre URL (tempURL) die richtige Lösung für Sie.

Es handelt sich dabei um eine Funktion, mit der Sie genau festlegen können, welche Dateien Sie teilen möchten und wie lang.


## Wie funktioniert das?
Die Funktion tempURL erstellt eine temporäre Adresse unter Verwendung der folgenden Elemente:


- die Adresse des Zugriffspunkts, zum Beispiel: "https://storage.sbg1.cloud.ovh.net/";
- den Pfad zu Ihrem Projekt aus Projektname, Container und Objektname: "v1/AUTH_tenant/default/file";
- einen ersten zusätzlichen Parameter tempurlsign, der einer gemäß Ihrem geheimen Key entsprechenden Signatur, der HTTP-Methode und dem Ablaufdatum entspricht;
- einen zweiten Parameter url_expires, der dem Ablaufdatum Ihres Links entspricht.




## Voraussetzungen

- [Vorbereitung der Umgebung für die Verwendung der OpenStack API]({legacy}1851);
- [Laden der OpenStack Umgebungsvariablen]({legacy}1852);
- Python auf Ihrem Arbeitsplatz
- Python Skript: [swift-temp-url](https://raw.githubusercontent.com/openstack/swift/master/bin/swift-temp-url)




## Erstellung des Key
Zunächst einmal müssen Sie einen Key erstellen. Dieser kann für alle Dateien Ihres Projekts verwendet werden und ist somit auch für alle künftigen tempURLs ausreichend. Wir empfehlen daher einen langen und sicheren Key. Allerdings können Sie auch zu jedem späteren Zeitpunkt einen neuen Key generieren, wenn gewünscht.

Für die Erstellung Ihres Key empfehlen wir die Verwendung von wenigstens 20 Zeichen.
Sie können dafür auch Tools verwenden:

- [http://www.random.org/strings/](http://www.random.org/strings/)
- unter Linux: "/dev/urandom"
- oder einfach den Befehl: "date +%s | md5sum"


Wenn Ihr Key erstellt ist, können Sie diesen mithilfe des Swift Client auf Ihrem Projekt konfigurieren (ersetzen Sie die Zahlenreihe "12345" durch Ihren Key):


```
swift post -m "Temp-URL-Key: 12345"
```


Oder Sie verwenden curl:


```
curl -i -X POST \ -H "X-Account-Meta-Temp-URL-Key: 12345" \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```



## Information:
Der vollständige Header lautet X-Account-Meta-Temp-Url-Key, aber der Swift Client verwendet Temp-Url-Key, da er X-Account-Meta automatisch hinzufügt.
Sobald der Key auf Ihrem Account konfiguriert ist, können Sie überprüfen, ob der Header korrekt angewendet wurde. Verwenden Sie dafür folgenden Befehl in Ihrem Swift Client:


```
swift stat
```


Oder mit curl:


```
curl -i -X HEAD \ -H "X-Auth-Token: abcdef12345" \ ttps://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```




## Erstellung der URL
Folgende Tasks können auch im Offline-Modus erledigt werden.

Wir erstellen eine temporäre URL mithilfe des Skripts swift-temp-url:


```
python swift-temp-url GET 60 /v1/AUTH_tenant/default/file 12345
```



- GET: HTTP-Methode
- 60: Link verfügbar für 60 Sekunden. Diesen Wert können Sie ganz nach Wunsch festlegen.
- 12345: Ihr Key
- /v1/AUTH_tenant/default/file: der Dateipfad. Hier brauchen Sie den Zugriffspunkt nicht anzugeben. 


So erhalten Sie eine tempURL wie:


```
v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```


Sie sehen also den Dateipfad, die Signatur und das Ablaufdatum, wie zuvor beschrieben.

Damit Ihre URL korrekt funktioniert, müssen Sie nun lediglich die Adresse des Zugriffspunkts vor die tempURL setzen:


```
https://storage.sbg1.cloud.ovh.net/v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```


In unserem Beispiel kann die Datei "File" im Container "Default" nun 60 Sekunden lang frei heruntergeladen werden, ohne Authentifizierung.

Nach Ablauf von 60 Sekunden ist die URL nicht mehr gültig.
Für fortgeschrittene Nutzer gibt es auch die Möglichkeit, temporäre URLs ohne das Skript [swift-temp-url](https://raw.githubusercontent.com/openstack/swift/master/bin/swift-temp-url) zu erstellen. Mehr Informationen finden Sie direkt in der [OpenStack Dokumentation](http://docs.openstack.org/liberty/config-reference/content/object-storage-tempurl.html).


## 
... lesen Sie auch unsere anderen Hilfen zum Thema Cloud!

