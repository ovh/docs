---
title: Object Storage Swift - Einem Object Storage Container eine spezifische Domain zuweisen
excerpt: Einem Object Storage Container eine spezifische Domain zuweisen
section: OpenStack Swift Storage Class Specifics
slug: pcs/link-domain
legacy_guide_number: g2006
order: 120
---


## 
Wenn Sie einen Public Container erstellen, kann jedermann auf Ihre Daten zugreifen. Das ist eine sinnvolle Lösung, wenn Sie Ihre Dateien per Internet teilen möchten.
Um allerdings Ihre Dateien beispielsweise mit Freunden zu teilen, müssen Sie ihnen für gewöhnlich eine lange und komplizierte URL mitteilen.
Oder aber Sie möchten diese Objekte auf Ihrer Webseite benutzen, aber nicht in Verbindung mit einer anderen Domain.
Mit einem Domainnamen können Sie für das Teilen Ihrer Daten eine personalisierte URL verwenden.

In dieser Online-Hilfe erfahren Sie, wie Sie Ihrem Container einen Domainnamen zuweisen, um anderen den Zugriff darauf zu erleichern.


## Voraussetzungen

- [Hinzufügen von Storage-Bereichen](https://docs.ovh.com/de/public-cloud/hinzufugen_von_storage-bereichen/)
- Ein Domainname




## In der Theorie
Wenn eine HTTP-Anfrage auf einem OpenStack Object Storage eingeht, erfolgt eine Überprüfung des Headers  "host" [/ b]. Wenn dieser sich vom tatsächlichen Hostnamen unterscheidet, erfasst das System dies als abgebildeten Eintrag und macht eine DNS-Abfrage, um den vollständigen DNS-Eintrag des Hosts zu erhalten.
Wenn ein DNS-Eintrag gefunden wird, wird die Antwort aufgeteilt, um den Container, den Account und das gewünschte Objekt zu finden und zu extrahieren. Dann wird die Anfrage umgeschrieben.
Stellen Sie sicher, dass Ihr Client den Header "host"[/ b] korrekt eingerichtet hat, da sonst der Object Storage Ihre Anfrage nicht erkennen und verarbeiten kann.


## HTTP und HTTPS
Mit HTTP funktioniert alles korrekt.
Wenn Sie HTTPS verwenden, kommt es zu einem Zertifikatsfehler, weil wir natürlich Ihr privates Zertifikat nicht besitzen.
Sie können zwar HTTPS verwenden, dann erscheint aber in den meisten neueren Browsern ein Warnhinweis wegen des Zertifikats.


## CNAME- oder TXT-Eintrag
Sie müssen sich für eine der folgenden Möglichkeiten entscheiden:


- CNAME: Ein CNAME-Eintrage ist der normale Eintrag und die richtige Wahl, wenn Sie Ihre DNS Zone selbst verwalten können. Er verweist auch bei einem Wechsel der IP-Adresse automatisch auf das richtige Ziel.

- TXT: Verwenden Sie diese Möglichkeit nur dann, wenn Sie Ihren Domainnamen über ein anderes Medium konfigurieren müssen, etwa ein CDN. Hier müssen Sie beachten, ob die IP-Adresse Ihres Ziel sich ändert. Sie können auch die Funktion "virtual CNAME" verwenden, sofern Ihr CDN-Anbieter dies anbietet.




## Mit CNAME
Wählen Sie eine Subdomain aus (z. B. static.mypersonaldomain.ovh) und fügen Sie einen CNAME-Eintrag und das Ziel hinzu. Beachten Sie dabei untenstehende Anweisungen.

Der CNAME-Eintrag muss folgenden Vorgaben entsprechen, damit er vom Object Storage korrekt erkannt werden kann. Passen Sie die [VARIABLEN] entsprechend an:


```
[NAME_DES_CONTAINERS].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```


Für einen Container mit dem Namen staticct und ein Projekt 123xxxx456 im Rechenzentrum SBG ergäbe das etwa:


```
staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Der DNS-Eintrag ist entsprechend:


```
static IN CNAME staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```




## Mit TXT
Fügen Sie ein TXT-Feld hinzu und beachten Sie dabei untenstehende Vorgaben.

Der TXT-Eintrag muss folgenden Vorgaben entsprechen, damit er vom Object Storage korrekt erkannt werden kann:


```
'_swift-remap.' + subdomain
```


Für eine Subdomain static.mypersonaldomain.ovh ergäbe das:


```
_swift-remap.static
```


Wie beim CNAME-Eintrag müssen Sie auch hier die [VARIABLEN] anpassen:


```
[NAME_DES_CONTAINERS].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```


Für einen Container mit dem Namen staticct und ein Projekt 123xxxx456 im Rechenzentrum SBG ergäbe das etwa:


```
staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Der DNS-Eintrag ist entsprechend:


```
_swift-remap.static IN TXT staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Wenn Sie keine Subdomain verwenden möchten, geht das folgendermaßen:


```
_swift-remap IN TXT staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Als letzten Schritt für die Konfiguration Ihres TXT-Eintrags müssen Sie ein Feld des Typs A für Ihre (Sub)Domain hinzufügen, das auf die IP-Adresse des Public Cloud Object Storage verweist.
Dafür brauchen Sie folgende Befehlen:


```
dig storage.sbg.cloud.ovh.net
dig storage.gra.cloud.ovh.net
dig storage.bhs.cloud.ovh.net
```



## Gut zu wissen!
Folgende Zeichen dürfen Sie im Containernamen nicht verwenden:


- [ . ]
- [ _ ] (je nach DNS-Provider)
- Großbuchstaben
- Ersetzen von auth-ProjectID durch auth_ProjectID




## 
... lesen Sie auch unsere anderen Hilfen zum Thema Cloud!

