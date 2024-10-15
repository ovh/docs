---
title: "Webhosting - Benutzerdefiniertes SSL-Zertifikat installieren"
excerpt: "Hier erfahren Sie, wie Sie ein personalisiertes SSL-Zertifikat auf Ihrem OVHcloud Webhosting importieren und installieren"
updated: 2024-10-15
---
 
> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>
  
## Ziel  

Secure Socket Layer (SSL) Zertifikate erlauben es, Verbindungen von oder zu Ihrer Website zu verschlüsseln. So wird verhindert, dass unbefugte Personen oder Roboter auf ausgehende und eingehende Anfragen von Ihrer Website zugreifen können.

OVHcloud bietet verschiedene Arten von SSL-Zertifikaten für die [Webhostings](/links/web/hosting) an, wie in unserer Anleitung "[Webhosting - SSL-Zertifikat verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)" beschrieben. SSL-Zertifikate sind für die Sicherheit Ihrer Website unentbehrlich.

Je nach Ihrer Situation kann es sein, dass Sie ein anderes SSL-Zertifikat als das von OVHcloud angebotene auf Ihrem Webhosting installieren möchten.

**Diese Anleitung erklärt, wie Sie ein personalisiertes SSL-Zertifikat importieren und auf Ihrem OVHcloud Webhosting installieren.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie bestellen oder verfügen über ein [OVHcloud Webhosting](/links/web/hosting), auf dem noch kein SSL Zertifikat installiert ist.
- Sie bestellen oder verfügen über einen [Domainnamen](/links/web/domains) und dessen exklusive Nutzungsrechte. Der Domainname darf nicht bereits mit einem SSL-Zertifikat verbunden sein.
- Sie haben einen SSH Zugang (zum Beispiel über ein Computerterminal) mit installiertem OpenSSL.

## In der praktischen Anwendung

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration, Verwaltung und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit in Ihrer Verantwortung, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei gängigen Aufgaben bestmöglich zu begleiten. Wir empfehlen Ihnen jedoch, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren. **Bei der Installation oder Bestellung eines anderen SSL-Zertifikats als [den von OVHcloud angebotenen](/links/web/hosting-options-ssl)** können wir Ihnen keine Unterstützung anbieten. Weitere Informationen finden Sie im Abschnitt „[Weiterführende Informationen](#go-further)“ in dieser Anleitung.
>

### Schritt 1 - Erhalten Sie eine SSL Certificate Signing Request (CSR) <a name="step-1"></a>

> [!primary]
>
> Dieser Schritt ist optional, wenn Sie das SSL-Zertifikat bereits erstellt und von Ihrem SSL-Anbieter erhalten haben oder wenn dieser während der Bestellung des SSL-Zertifikats die Erstellung des CSR anbietet. Ist das der Fall, fahren Sie direkt mit [Schritt 2](#step-2) fort.

#### 1.1 - Den privaten Schlüssel und die CSR per SSH generieren <a name="step-1.1"></a>

Öffnen Sie ein Terminal, um sich via SSH zu verbinden. Dieses Tool ist standardmäßig auf macOS oder Linux installiert. Für eine Windows-Umgebung muss eine Software wie PuTTY installiert oder die Funktion „OpenSSH“ hinzugefügt werden. Diese Vorgehensweise ist betriebssystemspezifisch, daher können wir sie in dieser Anleitung nicht im Detail beschreiben.

Führen Sie im Terminal folgenden Befehl aus:

```ssh
openssl req -nodes -newkey rsa:2048 -sha256 -keyout my_private.key -out your_file_name.csr -utf8
```

Ersetzen Sie die Begriffe `my_private` und `your_file_name` durch die gewünschten Dateinamen.

Sobald die Bestellung gestartet wurde, fragt das Terminal Sie nach den folgenden Informationen (für Sie, Ihre Firma oder Ihren Verein). Wenn Sie die Frage beantwortet haben, drücken Sie die `EINGABETASTE`{.action} auf der Tastatur, um die folgende Frage anzuzeigen:

- `Country Name (2 letter code) [AU]`: Geben Sie den **Country Code** Ihres Landes in Großbuchstaben ein. Alle **Country Codes** [hier](https://www.iban.com/country-codes){.external}.
- `State or Province Name (full name) [Some-State]` : Geben Sie den Namen Ihrer Region (oder Ihres Bundeslandes, z.B. USA) in Großbuchstaben ein.
- `Locality Name (eg, city) []`: Geben Sie den Namen Ihrer Stadt in Großbuchstaben ein.
- `Organization Name (eg, company) [Internet Widgits Pty Ltd]`: Geben Sie den Namen Ihrer Organisation, Ihres Unternehmens oder Ihrer Organisation ein. **Wenn Sie eine Privatperson sind, beantworten Sie diese Frage nicht und drücken Sie `EINGABETASTE`{.action} direkt auf Ihrer Tastatur, um die nächste Frage anzuzeigen**.
- `Organizational Unit Name (eg, section) []`: Geben Sie den Namen Ihrer Abteilung oder Abteilung in Ihrer Organisation, Ihrem Unternehmen oder Ihrer Organisation ein. **Wenn Sie eine Privatperson sind, beantworten Sie diese Frage nicht und drücken Sie `EINGABETASTE`{.action} direkt auf Ihrer Tastatur, um die nächste Frage anzuzeigen**.
- `Common Name (e.g. server FQDN or YOUR name) []`: Geben Sie den Domainnamen (Beispiel: `domain.tld`) oder die Subdomain (Beispiel: `sub.domain.tld`) ein, für die Sie ein SSL Zertifikat erhalten möchten. **Hier kann nur ein** Domainname oder Subdomain angegeben werden. Je nach SSL-Anbieter geben Sie entweder Ihren Domainnamen allein an (Beispiel: `domain.tld`) oder dessen Subdomain in „www“ (Beispiel: `www.domain.tld`). Erkundigen Sie sich hierzu vorab bei Ihrem SSL-Anbieter.
- `Email Address []` : Geben Sie Ihre E-Mail-Adresse ein.

Die daraufhin gestellten Fragen sind optional und betreffen hauptsächlich erfahrene Benutzer. Im Zweifelsfall empfehlen wir Ihnen dringend, diese zu übergeben, indem Sie die `EINGABETASTE`{.action} auf Ihrer Tastatur drücken, bis Sie keine weiteren Fragen mehr vom Terminal erhalten.

- `A challenge password []`: Geben Sie für fortgeschrittene Benutzer ein geheimes Passwort ein, das zwischen Ihnen und dem SSL-Zertifikatanbieter verwendet wird. Bitte beachten Sie, dass die CSR und der private Schlüssel auf Seiten von OVHcloud nicht durch ein Passwort geschützt sein müssen, um einem Shared Hosting von OVHcloud hinzugefügt zu werden.
- `An optional company name []`: Für fortgeschrittene Benutzer können Sie einen anderen Namen für Ihre Organisation, Firma oder Organisation eingeben.

#### 1.2 - Den privaten Schlüssel per SSH abrufen

Um den zuvor generierten privaten Schlüssel immer noch von Ihrem Terminal aus zu erhalten, führen Sie folgenden Befehl aus:

```ssh
cat my_private.key
```

Ersetzen Sie den Begriff `my_private` durch den Dateinamen, den Sie zuvor in [Schritt 1.1](#step-1.1) dieser Anleitung ausgewählt haben.

Der private Schlüssel wird dann in folgendem Format in Ihrem Terminal angezeigt:

```ssh
-----BEGIN PRIVATE KEY-----
XXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXX The Private Key XXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXX
------END PRIVATE KEY------
```

Öffnen Sie ein Textverarbeitungsprogramm (Notizblock, LibreOffice usw.) und `kopieren/einfügen`{.action} den gesamten privaten Schlüssel, einschließlich der Begriffe `-----BEGIN PRIVATE KEY-----` und `-----END PRIVATE KEY-----`.

Speichern Sie diese Datei und bewahren Sie sie sorgfältig für die weitere Verwendung dieser Anleitung auf, wenn Ihr SSL-Anbieter Sie bei Ihrer zukünftigen Bestellung dazu auffordert.

#### 1.3 - Die CSR per SSH abrufen

Um die zuvor erstellte CSR immer über Ihr Terminal abzurufen, geben Sie folgenden Befehl ein:

```ssh
cat your_file_name.csr
```

Ersetzen Sie den Begriff `your_file_name` durch den Dateinamen, den Sie zuvor in [Schritt 1.1](#step-1.1) dieser Anleitung ausgewählt haben.

Die CSR erscheint dann in folgender Form in Ihrem Terminal:

```ssh
-----BEGIN CERTIFICATE REQUEST-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXX The CSR XXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
------END CERTIFICATE REQUEST------
```

Öffnen Sie ein Textverarbeitungsprogramm und `kopieren/einfügen`{.action} die gesamte CSR, einschließlich der Begriffe `-----BEGIN CERTIFICATE REQUEST-----` und `-----END CERTIFICATE REQUEST-----`.

Speichern Sie diese Datei und bewahren Sie sie sorgfältig für die weitere Verwendung dieser Anleitung auf, wenn Ihr SSL-Anbieter Sie bei Ihrer zukünftigen Bestellung dazu auffordert.

> [!warning]
>
> Die Datei mit dem privaten Schlüssel und die Datei mit der CSR sind miteinander verknüpft und nicht austauschbar. Wenn Sie mehrere private Schlüssel oder CSRs erstellt haben, achten Sie darauf, dass Sie Ihre verschiedenen privaten Schlüssel und CSRs nicht mischen.