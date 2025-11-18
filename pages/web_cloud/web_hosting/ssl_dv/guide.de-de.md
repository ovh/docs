---
title: "Webhosting - Sectigo DV SSL-Zertifikat aktivieren"
excerpt: "Erfahren Sie hier, wie Sie ein Sectigo DV SSL-Zertifikat auf Ihrem OVHcloud Webhosting aktivieren"
updated: 2025-06-16
---

## Ziel

Secure Socket Layer (SSL) Zertifikate erlauben es, Verbindungen von oder zu Ihrer Website zu verschlüsseln. So wird verhindert, dass unbefugte Personen oder Bots auf ausgehende und eingehende Anfragen von Ihrer Website zugreifen können.

OVHcloud bietet verschiedene Arten von SSL-Zertifikaten für die [Webhostings](/links/web/hosting) an, wie in unserer Anleitung "[Webhosting - SSL-Zertifikat verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)" beschrieben. SSL-Zertifikate sind für die Sicherheit Ihrer Website unentbehrlich.

Es gibt drei Arten von SSL-Zertifikaten:

- Domain Validation (DV)
- Organization Validation (OV)
- Extended Validation (EV)

Die SSL-Verschlüsselungsstufen zwischen diesen drei Zertifikattypen sind identisch.

Der Hauptunterschied besteht in den Überprüfungen, mit denen die ausstellende Zertifikatsstelle (Certificate Authority, CA) die Legitimität verifiziert und dessen Authentizität bescheinigt.

Für OVHcloud Hosting-Dienste ist die Zertifizierungsstelle, die EV SSL-Zertifikate ausstellt [Sectigo](https://sectigostore.com).

> [!warning]
>
> Beachten Sie, dass ab der Initiierung und Übermittlung der Bestellung an unseren Zertifikatsanbieter/die Zertifizierungsstelle Sectigo **keine Rückerstattung möglich ist**.
>

**Diese Anleitung erklärt, wie Sie ein Sectigo DV SSL-Zertifikat auf Ihrem OVHcloud Webhosting aktivieren.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie bestellen oder verfügen über ein [OVHcloud Webhosting](/links/web/hosting), auf dem noch kein SSL Zertifikat installiert ist.
- Sie bestellen oder verfügen über einen [Domainnamen](/links/web/domains) und dessen exklusive Nutzungsrechte. Der Domainname darf nicht bereits mit einem SSL-Zertifikat verbunden sein.

## In der praktischen Anwendung

> [!warning]
>
> Die bei OVHcloud angebotenen Sectigo DV SSL-Zertifikate sind auf Ihrem Webhosting nur für einen der beiden folgenden Fälle gültig:
>
> - Ein Domainname und seine Subdomain "www" (Beispiel: `domain.tld` und `www.domain.tld`)
> - Eine Subdomain (Beispiel: `sub.domain.tld`)
>
> Das bedeutet, dass Sie kein SSL-Zertifikat erhalten können, wenn Ihr Webhosting über weitere Domains/Subdomains mit Multisite-Deklaration verfügt.
>
> Pro Webhosting kann nur ein SSL-Zertifikat installiert werden.
>
> Wenn Sie ein SSL-Zertifikat für mehrere Domains/Subdomains aktivieren möchten, die auf Ihrem Webhosting deklariert sind, installieren Sie stattdessen ein [kostenloses SSL-Zertifikat von Let's Encrypt](/links/web/hosting-options-ssl) oder Ihr eigenes [personalisiertes SSL-Zertifikat](/pages/web_cloud/web_hosting/ssl_custom).

**Bevor Sie das Sectigo DV SSL-Zertifikat auf Ihrem Webhosting bestellen**, überprüfen Sie, dass **alle Domains und Subdomains**, die von Ihrem zukünftigen SSL-Zertifikat betroffen sind:

- Auf die IP-Adresse Ihres Webhostings verweisen.
- Auf Ihrem Webhosting als Multisite deklariert sind.

> [!primary]
>
> Wenn Sie ein Sectigo DV SSL-Zertifikat für eine Domain bestellen möchten (Beispiel: `domain.tld`), überprüfen Sie, dass die zugehörige Subdomain "www" (Beispiel: `www.domain.tld`) ebenfalls auf die IP-Adresse Ihres Webhostings verweist und korrekt für Multisite deklariert ist.
>
> Wenn Sie das Sectigo DV SSL-Zertifikat bestellen, ohne sich dessen zu vergewissern, müssen Sie nachträglich eine Korrektur vornehmen. In diesem Fall müssen Sie das zuvor abonnierte Sectigo DV SSL-Zertifikat **ohne Rückerstattung** löschen und anschließend ein neues Zertifikat bestellen. Das neue Sectigo DV SSL Zertifikat soll sowohl Ihre Domain `domain.tld` als auch deren Subdomain `www.domain.tld` umfassen.
>
> Wenn Sie ein Sectigo DV SSL-Zertifikat direkt für eine Subdomain bestellen (Beispiel: `sub.domain.tld`), sind Sie von dieser Situation nicht betroffen.

Überprüfen Sie die folgenden Punkte:

- Die Option `SSL` darf nicht aktiviert sein, wenn der von Ihrem Sectigo DV SSL-Zertifikat betroffene Domainname oder Subdomain zur Multisite hinzugefügt wird.
- Der Status `Zu erstellen` oder `Aktiviert` darf für den von Ihrem Sectigo DV SSL-Zertifikat betroffene Domainname oder Subdomain noch nicht aktiv sein.

Um dies zu überprüfen, lesen Sie unsere Anleitungen:

- [Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
- [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

### Sectigo DV SSL-Zertifikat bestellen

> [!primary]
>
> **Informationen zur Migration auf das neue SSL-Zertifikat-Verwaltungsinterface:**
>
> Diese Anleitung richtet sich an Kunden, deren Webhosting-Dienste noch nicht auf das neue Verwaltungsinterface für SSL-Zertifikate migriert sind.
> Gehen Sie in Ihrem OVHcloud Kundencenter auf Ihr Webhosting und überprüfen Sie den Tab `SSL-Zertifikate`, um festzustellen, ob diese Migration durchgeführt wurde.
> Wenn der Tab `SSL-Zertifikate` vorhanden ist, wurde Ihr Dienst bereits zum neuen Verwaltungsinterface migriert. In diesem Fall konsultieren Sie bitte [diese Anleitung](/pages/web_cloud/web_hosting/ssl_management), um Ihr SSL-Zertifikat zu verwalten.
>
> Aus technischen Gründen können nicht alle Webhosting-Dienste unserer Kunden auf einmal migriert werden. Diese Migration erfolgt automatisch über mehrere Wochen, ohne dass die Funktionsweise Ihrer Webhosting-Dienste beeinträchtigt wird oder dass dazu weitere Eingriffe oder Aktionen Ihrerseits erforderlich sind.
>
> Im Laufe der Zeit werden alle Webhosting-Dienste mit dem neuen Verwaltungsinterface für SSL-Zertifikate funktionieren.

So bestellen Sie das Sectigo DV SSL-Zertifikat:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Bleiben Sie auf der angezeigten Seite im Tab `Allgemeine Informationen`{.action}.
6. Gehen Sie in die Box mit dem Namen `Konfiguration`.
7. Rechts neben `SSL-Zertifikat` klicken Sie auf den Button `...`{.action} und dann auf `SSL-Zertifikat bestellen`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Wählen Sie im neuen Fenster `Kostenpflichtiges Zertifikat`{.action} aus der Liste der verfügbaren Optionen aus.

Wählen Sie dann die betreffende Domain/Subdomain aus der Dropdown-Liste aus und klicken Sie auf `Weiter`{.action}.

Klicken Sie im neuen Fenster auf `Bestätigen`{.action}, um zum Bestellschein Ihres Sectigo DV SSL-Zertifikats weitergeleitet zu werden.

Folgen Sie der Bestellung bis zur Zahlung, um die Anfrage zur Erstellung des Sectigo DV SSL-Zertifikats für Ihre Domain/Subdomain auf Ihrem Webhosting zu bestätigen.

> [!alert]
>
> Sobald die Bestellung bestätigt wurde, wird die SSL-Zertifikatanforderung an die Sectigo-Zertifizierungsstelle gesendet.
>
> Ab diesem Zeitpunkt ist keine Rückerstattung des Sectigo DV SSL-Zertifikats möglich.

Die Installation des Sectigo DV SSL-Zertifikats kann bis zu **24** Stunden dauern.

### Aktivierung des Sectigo DV SSL-Zertifikats überprüfen

So überprüfen Sie, ob die Installation abgeschlossen ist:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Bleiben Sie auf der angezeigten Seite im Tab `Allgemeine Informationen`{.action}.
6. Gehen Sie in die Box mit dem Namen `Konfiguration`.

Nach Abschluss sollte unter `SSL-Zertifikat` ein Wert angezeigt werden, der diesem entspricht: `Ja - SECTIGO - DV`.

![SSL Sectigo DV certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-certificate-dv-enable.png){.thumbnail}

Ihr Sectigo DV SSL-Zertifikat ist installiert und aktiv. Sie können es nun mit Ihrem Webhosting nutzen und zum Beispiel [HTTPS für Ihre Website aktivieren](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Weiterführende Informationen <a name="go-further"></a>

[Webhosting - SSL-Zertifikat verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Webhosting - Website auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Häufige Fehler beim Schutz Ihrer Website mit SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.