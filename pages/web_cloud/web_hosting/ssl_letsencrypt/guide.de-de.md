---
title: "Webhosting - Kostenloses SSL-Zertifikat von Let's Encrypt aktivieren"
excerpt: "Erfahren Sie hier, wie Sie ein kostenloses SSL-Zertifikat von Let's Encrypt auf Ihrem Webhosting aktivieren"
updated: 2025-06-15
---
  
## Ziel  

Secure Socket Layer (SSL) Zertifikate erlauben es, Verbindungen von oder zu Ihrer Website zu verschlüsseln. So wird verhindert, dass unbefugte Personen oder Bots auf ausgehende und eingehende Anfragen von Ihrer Website zugreifen können.

OVHcloud bietet verschiedene Arten von SSL-Zertifikaten für die [Webhostings](/links/web/hosting) an, wie in unserer Anleitung "[SSL-Zertifikat auf einem Webhosting verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)" beschrieben. SSL-Zertifikate sind für die Sicherheit Ihrer Website unentbehrlich.

Es gibt drei Arten von SSL-Zertifikaten:

- Domain Validation (DV)
- Organisation Validation (OV)
- Extended Validation (EV)

Die SSL-Verschlüsselungsstufen sind bei diesen drei Zertifikatstypen identisch.

Der Hauptunterschied besteht in den Überprüfungen, mit denen die ausstellende Zertifikatsstelle (CA) die Legitimität verifiziert.

Let's Encrypt ist eine kostenlose, automatisierte, offene und gemeinnützige Zertifizierungsstelle. Weitere Informationen finden Sie unter <https://letsencrypt.org/de/about/>.

**Diese Anleitung erklärt, wie Sie ein kostenloses SSL-Zertifikat von Let's Encrypt auf Ihrem OVHcloud Webhosting aktivieren.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie verfügen über einen [Domainnamen](/links/web/domains) und dessen exklusive Nutzungsrechte oder beabsichtigen, einen zu registrieren. Der Domainname darf nicht bereits mit einem SSL-Zertifikat verbunden sein.

> [!primary]
>
> Seit dem **06.08.2025** ist das Let's Encrypt SSL-Zertifikat automatisch aktiviert für:
>
> - Alle neuen Domainnamen/Subdomains, die mit einem Webhosting verbunden sind.
> - Alle neuen Abonnements eines Domainnamens mit einem neuen Webhosting.
>
> Das Ziel ist, Ihnen bei der Konfiguration Ihrer Dienste Zeit zu sparen. Sie können das Let's Encrypt SSL-Zertifikat jederzeit über Ihr [OVHcloud Kundencenter](/links/manager) deaktivieren, wenn Sie ein anderes SSL-Zertifikat installieren möchten (Sectigo DV, Sectigo EV oder ein personalisiertes SSL-Zertifikat).  
> Weitere Informationen finden Sie in unserer Anleitung „[SSL-Zertifikat einrichten](/pages/web_cloud/web_hosting/ssl_on_webhosting)“, Teil **SSL-Zertifikat auf einem Webhosting deaktivieren**.

## In der praktischen Anwendung

> [!warning]
>
> **Bevor Sie fortfahren**, überprüfen Sie, dass **jeder Domainname und/oder jede Subdomain**, die von einem zukünftigen Let's Encrypt SSL Zertifikat betroffen ist:
>
> - verweist auf die IP-Adresse Ihres Webhostings.
> - ist auf Ihrem Webhosting als Multisite deklariert.
> - verfügt nicht bereits über ein aktives SSL-Zertifikat.
>
> Um dies zu überprüfen, lesen Sie bei Bedarf unsere Anleitungen unten:
>
> - [Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)
> - [Webhosting - Liste der IP-Adressen pro Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
> - [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)
> - [Webhosting - SSL-Zertifikat einrichten](/pages/web_cloud/web_hosting/ssl_on_webhosting), Teil **SSL-Zertifikat auf einem Webhosting deaktivieren**

### Let's Encrypt SSL-Zertifikat aktivieren

Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen:

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
>> Wenn der Inhalt der Registerkarte angezeigt wird, wählen Sie die Domain oder Subdomain aus, für die Sie das kostenlose SSL-Zertifikat Let's Encrypt (DV) aktivieren möchten, und klicken Sie auf den Link `SSL-Zertifikat aktivieren`.
>>
>> ![SSL Let's Encrypt](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/enable-ssl-lets-encrypt.png){.thumbnail}
>>
>> Klicken Sie dann auf den Button `SSL Let's Encrypt aktivieren`{.action}.

Es kann mehrere Stunden dauern, bis das SSL-Zertifikat von Let's Encrypt eingerichtet ist.

### Die Aktivierung des kostenlosen SSL-Zertifikats Let's Encrypt (DV) überprüfen

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
>> Wenn der Inhalt des Tab angezeigt wird, überprüfen Sie, ob jeder betroffene Domainname und/oder jede Subdomain in der Tabelle mit dem SSL-Zertifikattyp `Let's Encrypt` aufgeführt ist.
>>
>> ![Tabelle zur Verwaltung der SSL-Zertifikate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab.png){.thumbnail}

Ihr Let's Encrypt SSL-Zertifikat ist nun installiert und aktiv. Sie können es ab sofort mit Ihrer Website verwenden, indem Sie zum Beispiel [HTTPS für Ihre Website aktivieren](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Weiterführende Informationen

[Webhosting - SSL-Zertifikat verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Webhosting - Website auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Häufige Fehler beim Schutz Ihrer Website mit SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
