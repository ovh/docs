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
- Sie bestellen oder verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie bestellen oder verfügen über einen [Domainnamen](/links/web/domains) und dessen exklusive Nutzungsrechte. Der Domainname darf nicht bereits mit einem SSL-Zertifikat verbunden sein.

## In der praktischen Anwendung

> [!warning]
>
> Die bei OVHcloud angebotenen Sectigo DV SSL-Zertifikate sind auf Ihrem Webhosting nur für einen der beiden folgenden Fälle gültig:
>
> - Ein Domainname und seine Subdomain "www" (Beispiel: `domain.tld` und `www.domain.tld`).
> - Eine Subdomain (Beispiel: `sub.domain.tld`).
>
> Wenn auf Ihrem Webhosting weitere Domains oder Subdomains registriert sind und Sie diesen ebenfalls ein SSL-Zertifikat zuweisen möchten, können Sie entweder:
>
> - [Kostenloses SSL-Zertifikat für Let's Encrypt aktivieren](/pages/web_cloud/web_hosting/ssl_letsencrypt) (falls noch nicht standardmäßig festgelegt).
> - Ein oder mehrere weitere kostenpflichtige SSL-Zertifikate aktivieren ([Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv) oder [Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)).
> - [Eigenes SSL-Zertifikat installieren](/pages/web_cloud/web_hosting/ssl_custom).

**Bevor Sie das Sectigo DV SSL-Zertifikat auf Ihrem Webhosting bestellen**, überprüfen Sie, dass **alle Domains und Subdomains**, die von Ihrem zukünftigen SSL-Zertifikat betroffen sind:

- verweist auf die IP-Adresse Ihres Webhostings.
- ist auf Ihrem Webhosting als Multisite deklariert.
- verfügt nicht bereits über ein aktives SSL-Zertifikat.

> [!primary]
>
> Wenn Sie ein Sectigo DV SSL-Zertifikat für eine Domain bestellen möchten (zum Beispiel: `domain.tld`), überprüfen Sie, dass die zugehörige Subdomain "www" (zum Beispiel: `www.domain.tld`) ebenfalls auf die IP-Adresse Ihres Webhostings verweist und korrekt für Multisite deklariert ist.
>
> Wenn Sie das Sectigo DV SSL-Zertifikat bestellen, ohne sich dessen zu vergewissern, müssen Sie nachträglich eine Korrektur vornehmen. In diesem Fall müssen Sie das zuvor abonnierte Sectigo DV SSL-Zertifikat **ohne Rückerstattung** löschen und anschließend ein neues Zertifikat bestellen. Das neue Sectigo DV SSL Zertifikat soll sowohl Ihre Domain `domain.tld` als auch deren Subdomain `www.domain.tld` umfassen.
>
> Wenn Sie ein Sectigo DV SSL-Zertifikat direkt für eine Subdomain bestellen (Beispiel: `sub.domain.tld`), sind Sie von dieser Situation nicht betroffen.

Um dies zu überprüfen, lesen Sie bei Bedarf unsere Anleitungen unten:

- [Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Webhosting - Liste der IP-Adressen pro Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
- [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)
- [Webhosting - SSL-Zertifikat einrichten](/pages/web_cloud/web_hosting/ssl_on_webhosting), Teil **SSL-Zertifikat auf einem Webhosting deaktivieren**

### Sectigo DV SSL-Zertifikat bestellen

Klicken Sie auf die Tabs, um die **5** Schritte anzuzeigen:

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf der angezeigten Seite auf den Tab `SSL-Zertifikate`{.action}.
>>
>> ![SSL-Zertifikate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Wenn der Inhalt der Registerkarte angezeigt wird, klicken Sie auf `Sectigo-SSL-Zertifikat bestellen`{.action}.
>>
>> ![SSL Sectigo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Wählen Sie im neu geöffneten Fenster über das Dropdown-Menü die betreffende Domain oder Subdomain aus und klicken Sie auf `Bestätigen`{.action}, um zum Bestellschein für Ihr Sectigo DV SSL-Zertifikat weitergeleitet zu werden.
>>
>> ![SSL Sectigo Domainauswahl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
>> Folgen Sie der Bestellung bis zur Zahlung, um die Anfrage zur Erstellung des Sectigo DV SSL-Zertifikats für Ihre Domain und/oder Subdomain auf Ihrem Webhosting zu bestätigen.

> [!alert]
>
> Sobald die Bestellung bestätigt wurde, wird die SSL-Zertifikatanforderung an die Sectigo-Zertifizierungsstelle gesendet.
>
> Ab diesem Zeitpunkt ist keine Rückerstattung des Sectigo DV SSL-Zertifikats möglich.

Die Installation des Sectigo DV SSL-Zertifikats kann bis zu **24** Stunden dauern.

### Aktivierung des Sectigo DV SSL-Zertifikats überprüfen

Um zu überprüfen, dass die Installation abgeschlossen ist, klicken Sie auf die folgenden Tabs, um die **4** Schritte anzuzeigen:

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf der angezeigten Seite auf den Tab `SSL-Zertifikate`{.action}.
>>
>> ![SSL-Zertifikate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Wenn der Inhalt des Tab angezeigt wird, überprüfen Sie, ob jeder betroffene Domainname und/oder jede Subdomain in der Tabelle mit dem SSL-Zertifikattyp `Sectigo` aufgeführt ist.
>>
>> ![Tabelle zur Verwaltung der SSL-Zertifikate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab.png){.thumbnail}

Ihr Sectigo DV SSL-Zertifikat ist installiert und aktiv. Sie können es nun mit Ihrem Webhosting nutzen und zum Beispiel [HTTPS für Ihre Website aktivieren](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Weiterführende Informationen <a name="go-further"></a>

[Webhosting - SSL-Zertifikat verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Webhosting - Website auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Häufige Fehler beim Schutz Ihrer Website mit SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
