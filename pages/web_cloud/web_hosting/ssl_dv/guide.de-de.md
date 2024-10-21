---
title: "Webhosting - SSL-Zertifikat Sectigo DV aktivieren"
excerpt: "Erfahren Sie hier, wie aktivieren Sie ein Sectigo DV SSL-Zertifikat auf Ihrem OVHcloud Webhosting"
updated: 2024-10-21
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Mit den Secure Socket Layer (SSL) Zertifikaten können Sie den Datenaustausch zwischen Ihrer Website und Ihrer Website verschlüsseln. So wird verhindert, dass böswillige Personen oder Roboter auf Anfragen von Ihrer Website klar „hören“.

OVHcloud bietet verschiedene Arten von SSL-Zertifikaten für die [Webhostings](/links/web/hosting) an, wie in unserer Anleitung "[Webhosting - SSL-Zertifikat verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)" beschrieben. SSL-Zertifikate sind für die Sicherheit Ihrer Website unentbehrlich.

Es gibt drei Arten von SSL-Zertifikaten:

- Domain Validation (DV)
- Organization Validation (OV)
- Extended Validation (EV)

Die SSL-Verschlüsselungsstufen zwischen diesen drei Zertifikattypen sind identisch.

Der Hauptunterschied liegt in der Überprüfungsebene, die von der Zertifizierungsstelle (Certificate Authority, CA) durchgeführt wird, die das SSL-Zertifikat ausstellt und dessen Authentizität bescheinigt.

Für Shared Hosting von OVHcloud ist die Zertifizierungsstelle, die das DV SSL-Zertifikat ausstellt, [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> Sobald die Bestellung des Zertifikats durchgeführt und an unseren Zertifikatsanbieter/unsere Sectigo-Zertifizierungsstelle weitergeleitet wurde, ist **keine Rückerstattung der Bestellung möglich**.
>

**Erfahren Sie, wie Sie ein Sectigo DV SSL-Zertifikat auf Ihrem OVHcloud Webhosting aktivieren.**

## Voraussetzungen

- Sie sind in Ihrem [OVHcloud Kundencenter] eingeloggt (/links/manager).
- Bestellen oder verfügen Sie über ein [OVHcloud Shared Hosting](/links/web/hosting), auf dem noch kein SSL-Zertifikat installiert ist.
- Bestellen oder Verfügen über eine [Domainname](/links/web/domains) und verfügen über die exklusiven Rechte für dessen Nutzung. Der Domainname darf noch nicht an ein SSL-Zertifikat gebunden sein.

## In der praktischen Anwendung

> [!warning]
>
> Die bei OVHcloud angebotenen Sectigo DV SSL-Zertifikate sind auf Ihrem Webhosting nur für einen der beiden folgenden Fälle gültig:
>
> - ein einziger Domainname + seine Subdomain als „www“ (Beispiel: `domain.tld` und `www.domain.tld`);
> - eine Subdomain (Beispiel: `sub.domain.tld`).
>
> Das bedeutet, dass Sie kein SSL-Zertifikat erhalten können, wenn Ihr Webhosting über weitere Domains/Subdomains mit Multisite-Deklaration verfügt.
>
> Pro Webhosting kann nur ein SSL-Zertifikat installiert werden.
>
> Wenn Sie ein SSL-Zertifikat für mehrere Domains/Subdomains aktivieren möchten, die auf Ihrem Webhosting deklariert sind, installieren Sie stattdessen ein [kostenloses SSL-Zertifikat von Let's Encrypt](/links/web/hosting-options-ssl) oder Ihr eigenes [personalisiertes SSL-Zertifikat](/pages/web_cloud/web_hosting/ssl_custom).

**Bevor Sie das Sectigo DV SSL-Zertifikat auf Ihrem Webhosting bestellen**, überprüfen Sie bitte, dass **der Domainname/die Subdomain** für Ihr SSL-Zertifikat gilt:

- verweist auf die IP-Adresse Ihres Webhostings;
- ist auf Ihrem Webhosting als Multisite deklariert.

> [!primary]
>
> Wenn Sie ein Sectigo DV SSL-Zertifikat für eine Domain bestellen möchten (Beispiel: `domain.tld`), überprüfen Sie bitte, dass die zugehörige Subdomain auf „www“ (Beispiel: `www.domain.tld`) ebenfalls auf die IP-Adresse Ihres Webhostings verweist und korrekt für Multisite deklariert ist.
>
> Wenn Sie das Sectigo DV SSL-Zertifikat bestellen, ohne sich dessen zu vergewissern, müssen Sie nachträglich eine Korrektur vornehmen. In diesem Fall müssen Sie das zuvor abonnierte Sectigo DV SSL-Zertifikat **ohne Rückerstattung** löschen und anschließend ein neues Zertifikat bestellen. Das neue Sectigo DV SSL Zertifikat soll sowohl Ihre Domain `domain.tld` als auch deren Subdomain „www“ `www.domain.tld` umfassen.
>
> Zur Erinnerung: Wenn Sie ein Sectigo DV SSL-Zertifikat direkt für eine Subdomain bestellen (Beispiel: `sub.domain.tld`), sind Sie von dieser Situation nicht betroffen.

Überprüfen Sie außerdem Folgendes:

- Das Kontrollkästchen `SSL` darf nicht aktiviert sein, wenn der Domainname bzw. die Subdomain, die bzw. die von Ihrem Sectigo DV SSL-Zertifikat betroffen ist, an mehreren Standorten hinzugefügt wird.
- Der Status `Zu erstellen` oder `Aktiviert` darf für die Domain bzw. Subdomain, die von Ihrem Sectigo DV SSL-Zertifikat betroffen ist, noch nicht vorhanden sein.

Wenn Sie es benötigen, lesen Sie unsere Anleitungen:

- [Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite);
- [Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
- [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit).

### Sectigo DV SSL-Zertifikat bestellen

So bestellen Sie das Sectigo DV SSL-Zertifikat:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Bleiben Sie auf der angezeigten Seite im Tab `Allgemeine Informationen`{.action}.
6. Gehen Sie in die Box mit dem Namen `Konfiguration`.
7. Rechts neben `SSL-Zertifikat` klicken Sie auf den Button `...`{.action} und dann auf `SSL-Zertifikat bestellen`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Wählen Sie im angezeigten Fenster `Kostenpflichtiges Zertifikat`{.action} aus der Liste der verfügbaren Optionen aus.

Wählen Sie dann die betreffende Domain/Subdomain aus der Dropdown-Liste aus und klicken Sie auf `Weiter`{.action}.

Klicken Sie im neu geöffneten Fenster auf `Bestätigen`{.action}, um zum Bestellschein Ihres Sectigo DV SSL-Zertifikats weitergeleitet zu werden.

Folgen Sie der Bestellung bis zur Zahlung, um die Anfrage zur Erstellung des Sectigo DV SSL-Zertifikats für Ihre Domain/Subdomain auf Ihrem Webhosting zu bestätigen.

> [!alert]
>
> Sobald die Bestellung bestätigt wurde, wird die SSL-Zertifikatanforderung Sectigo DV an die Sectigo-Zertifizierungsstelle gesendet.
>
> Ab diesem Zeitpunkt ist keine Rückerstattung des Sectigo DV SSL-Zertifikats möglich.

Die Installation des Sectigo DV SSL-Zertifikats kann bis zu **24** Stunden dauern.

### Die Aktivierung des Sectigo DV SSL-Zertifikats überprüfen

So überprüfen Sie, ob die Installation abgeschlossen ist:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Hosting-Pakete`{.action}.
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