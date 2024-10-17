---
title: "Webhosting - Benutzerdefiniertes SSL-Zertifikat installieren"
excerpt: "Hier erfahren Sie, wie Sie ein personalisiertes SSL-Zertifikat auf Ihrem OVHcloud Webhosting importieren und installieren"
updated: 2024-10-17
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
- Sie haben OpenSSL oder eine kompatible Anwendung lokal auf Ihrem Gerät installiert.

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

```sh
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

```sh
cat my_private.key
```

Ersetzen Sie den Begriff `my_private` durch den Dateinamen, den Sie zuvor in [Schritt 1.1](#step-1.1) dieser Anleitung ausgewählt haben.

Der private Schlüssel wird dann in folgendem Format in Ihrem Terminal angezeigt:

```console
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

```sh
cat your_file_name.csr
```

Ersetzen Sie den Begriff `your_file_name` durch den Dateinamen, den Sie zuvor in [Schritt 1.1](#step-1.1) dieser Anleitung ausgewählt haben.

Die CSR erscheint dann in folgender Form in Ihrem Terminal:

```console
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

### Schritt 2 - SSL-Zertifikat bei Ihrem SSL-Anbieter bestellen <a name="step-2"></a>

> [!primary]
>
> Dieser Schritt ist optional, wenn Sie das SSL-Zertifikat bereits von Ihrem SSL-Anbieter erstellt und abgerufen haben. Ist das der Fall, fahren Sie direkt mit [Schritt 3](#step-3) fort.

Bestellen Sie das SSL-Zertifikat bei Ihrem SSL-Anbieter. Falls nötig, übermitteln Sie ihm den Inhalt der CSR, die im [Schritt 1](#step-1) dieses Handbuchs generiert wurde. Wenn er Sie auffordert, zusätzlich den privaten Schlüssel zu übergeben, der in [Schritt 1](#step-1) generiert wurde.

Nach Ihrer Bestellung muss der Anbieter des SSL-Zertifikats Ihnen 3 Dateien zur Verfügung stellen:

- die Datei `certificate.crt`;
- die Datei `private.key`;
- die Datei `ca_bundle.crt`.

Dies ist der Inhalt jeder einzelnen Datei, der benötigt wird, um den [Schritt 3](#step-3) dieser Anleitung durchzuführen.

<a name="3files"></a>

> [!warning]
>
> Einige SSL-Anbieter liefern den Inhalt der Dateien `certificate.crt` und `ca_bundle.crt` in einer einzigen Datei. Sie müssen den Inhalt dieser Datei aufteilen, um die Dateien `certificate.crt` und `ca_bundle.crt` umzuformen. Dies geschieht vor der Ausführung von [Schritt 3](#step-3) dieser Anleitung.
>
> Andere SSL-Anbieter liefern die Datei `ca_bundle.crt` in mehreren Teilen/Dateien. Sie müssen den Inhalt dieser Dateien verketten, um eine einzelne Datei `ca_bundle.crt` zu erstellen und den [Schritt 3](#step-3) dieser Anleitung zu befolgen.
>
> Wenn Sie davon betroffen sind und bei der Durchführung dieser Operationen Schwierigkeiten haben, wenden Sie sich mit diesen Informationen an Ihren SSL-Anbieter. Sagen Sie ihm, dass der gesamte Inhalt, den er Ihnen ausgestellt hat, nur in 3 Dateien (`certificate.crt`, `ca_bundle.crt` und `private.key`) aufgeteilt werden muss, damit Sie mit der Installation des SSL-Zertifikats fortfahren können.

### Schritt 3 - Installieren Sie das personalisierte SSL-Zertifikat auf Ihrem Webhosting <a name="step-3"></a>

Wenn Sie diese Anleitung in diesem Schritt direkt lesen, da Sie bereits über ein externes SSL-Zertifikat verfügen, das bei einem SSL-Anbieter bestellt wurde, überprüfen Sie, dass Sie nur über die folgenden 3 Dateien verfügen: `certificate.crt`, `private.key` und `ca_bundle.crt`. Ist das nicht der Fall, lesen Sie die Informationen [oben](#3files).

**Bevor Sie die Installation des SSL-Zertifikats auf Ihrem Webhosting** abschließen, überprüfen Sie bitte, dass **alle Domains und/oder Subdomains**, die von Ihrem SSL-Zertifikat betroffen sind:

- auf die IP-Adresse Ihres Webhostings verweisen;
- sind auf Ihrem Webhosting als Multisite deklariert;

Überprüfen Sie außerdem Folgendes:

- Das Kontrollkästchen `SSL` darf nicht aktiviert sein, wenn Sie eine Domain bzw. Subdomain, die von Ihrem externen SSL Zertifikat betroffen ist, an mehreren Standorten hinzufügen.
- Der Status `Zu erstellen` oder `Aktiviert` muss nicht bereits für jede Domain bzw. Subdomain vorhanden sein, die von Ihrem externen SSL Zertifikat betroffen ist.

Wenn nötig und um dies zu überprüfen, lesen Sie unsere Anleitungen „[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)“ und „[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)“.

Sobald alle diese Voraussetzungen erfüllt sind, können Sie mit der Fertigstellung der Installation Ihres personalisierten SSL-Zertifikats auf Ihrem Webhosting beginnen.

Gehen Sie hierzu wie folgt vor:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Bleiben Sie auf der angezeigten Seite im Tab `Allgemeine Informationen`{.action}.
6. Gehen Sie in die Box mit dem Namen `Konfiguration`.
7. Rechts neben `SSL-Zertifikat` klicken Sie auf den Button `...`{.action} und dann auf `SSL-Zertifikat bestellen`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Wählen Sie im angezeigten Fenster `Import Ihres SSL-Zertifikats`{.action} aus der Liste der verfügbaren Optionen aus und klicken Sie dann auf `Weiter`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-custom.png){.thumbnail}

Das folgende Fenster wird mit 3 Formularen angezeigt, die ausgefüllt werden müssen:

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-2-custom-empty.png){.thumbnail}

- `Inhalt Ihres Zertifikats kopieren (nur RSA)`{.action}: Geben Sie den Inhalt der Datei **certificate.crt** ein, die von Ihrem SSL-Anbieter bereitgestellt wurde, einschließlich der Begriffe `-----BEGIN CERTIFICATE-----` und `-----END CERTIFICATE-----` (oder entsprechender Begriffe). Die RSA-Verschlüsselung entspricht der Standardverschlüsselung von SSL-Zertifikaten.
- `Inhalt Ihres Private Key kopieren (nicht verschlüsselt)`{.action}: Geben Sie den Inhalt der von Ihrem SSL-Anbieter bereitgestellten **private.key** Datei ein, einschließlich der Begriffe `-----BEGIN RSA PRIVATE KEY-----` und `-----END RSA PRIVATE KEY-----` (oder entsprechender Begriffe). *Unverschlüsselt* bedeutet, dass der private Schlüssel nicht durch ein Kennwort oder eine Passphrase geschützt sein darf. Andernfalls schlägt die Installation des Zertifikats fehl.
- `Inhalt Ihrer Zertifikatskette kopieren`{.action}: Geben Sie den Inhalt der Datei **ca_bundle.crt** Ihres SSL-Anbieters ein, einschließlich der Begriffe `-----BEGIN CERTIFICATE-----` und `-----END CERTIFICATE-----` (oder Entsprechungen).

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-2-custom.png){.thumbnail}

Wenn Sie alle 3 Formulare ausgefüllt haben, klicken Sie auf `Bestätigen`{.action}, um den Import des personalisierten SSL-Zertifikats auf Ihr Webhosting abzuschließen.

Wenn das SSL-Zertifikat vom SSL-Anbieter korrekt generiert wurde und die Voraussetzungen erfüllt sind, erscheint eine Meldung, dass die Aktivierung des SSL-Zertifikats auf Ihrem Webhosting durchgeführt wird.

> [!warning]
>
> Wenn der Fehler `error check SAN from certificate` auftritt, liegt mindestens eine der folgenden Ursachen vor:
>
> - Mindestens eine in Ihrem SSL-Zertifikat deklarierte Domain bzw. Subdomain verweist nicht auf die IP-Adresse Ihres Webhostings;
> - Mindestens eine Domain/Subdomain, die in Ihrem SSL-Zertifikat deklariert ist, ist nicht im Tab `Multisite` Ihres Webhostings deklariert.
>
> Lesen Sie unsere Anleitungen „[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)“ und „[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)“, um diese Situation zu beheben.

Die Installation dauert mehrere Minuten.

So überprüfen Sie, ob die Installation abgeschlossen ist:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Bleiben Sie auf der angezeigten Seite im Tab `Allgemeine Informationen`{.action}.
6. Gehen Sie in die Box mit dem Namen `Konfiguration`.

Wenn alles abgeschlossen ist, muss unter dem Vermerk `SSL-Zertifikat` ein Wert angezeigt werden, der diesem entspricht: `Ja - CUSTOM - CUSTOM`.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-certificate-custom-enable.png){.thumbnail}

Ihr personalisiertes SSL Zertifikat ist nun installiert und aktiv. Sie können es ab sofort mit Ihrer Website verwenden, zum Beispiel über Ihre [HTTPS-Website](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Weiterführende Informationen <a name="go-further"></a>

[Webhosting - SSL-Zertifikat verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Webhosting - Website auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Häufige Fehler beim Schutz Ihrer Website mit SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.