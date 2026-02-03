---
title: "Webhosting - SSL-Zertifikat einrichten"
excerpt: "Erfahren Sie hier, wie Sie ein SSL-Zertifikat auf Ihrem OVHcloud Webhosting installieren und verwalten"
updated: 2025-12-16
---

## Ziel 

Secure Socket Layer (SSL) Zertifikate erlauben es, Verbindungen von und zu Ihrer Website zu verschlüsseln. So wird verhindert, dass unbefugte Personen oder Bots auf ausgehende und eingehende Anfragen von Ihrer Website zugreifen können.

OVHcloud bietet verschiedene Arten von SSL-Zertifikaten für die [Webhostings](/links/web/hosting) an. Sie werden nachfolgend in dieser Anleitung beschrieben. SSL-Zertifikate sind für die Sicherheit Ihrer Website unerlässlich.

Es gibt drei Arten von SSL-Zertifikaten:

- Domain Validation (DV)
- Organization Validation (OV)
- Extended Validation (EV)

Die SSL-Verschlüsselungsstufen sind bei diesen drei Zertifikatstypen identisch.

Der Hauptunterschied besteht in den Überprüfungen, mit denen die ausstellende Zertifikatsstelle (CA) die Legitimität verifiziert.

Sie benötigen ein SSL-Zertifikat für Ihre Website, um es über HTTPS zu verwenden.

**Diese Anleitung erklärt, wie Sie ein SSL-Zertifikat auf Ihrem OVHcloud Webhosting verwalten.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie haben mindestens einen [Domainnamen](/links/web/domains) registriert.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!warning]
>
> Bevor Sie fortfahren, **überprüfen Sie, dass Domainname und Subdomain**, die von Ihrem zukünftigen SSL-Zertifikat betroffen sind:
>
> - Auf die IP-Adresse Ihres Webhostings verweisen.
> - Auf einem der Webseiten Ihres Webhostings deklariert sind.
> - Noch nicht über ein aktives SSL-Zertifikat verfügen.
>
> Um dies zu überprüfen, lesen Sie bei Bedarf unsere Anleitungen unten:
>
> - [Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)
> - [Webhosting - Liste der IP-Adressen pro Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
> - [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)
> - [Webhosting - SSL-Zertifikat einrichten](/pages/web_cloud/web_hosting/ssl_on_webhosting), Teil **SSL-Zertifikat auf einem Webhosting deaktivieren**

### SSL-Zertifikat auf seinem Webhosting aktivieren <a name="ssl-enable"></a>

OVHcloud bietet 4 Lösungen für die Aktivierung/Installation eines SSL-Zertifikats auf einem Webhosting. Jede dieser Lösungen wird ausführlich dokumentiert.

Hier finden Sie die 4 Links zu unseren Anleitungen zu diesen 4 Lösungen:

- [Webhosting - Kostenloses SSL-Zertifikat von Let's Encrypt aktivieren](/pages/web_cloud/web_hosting/ssl_letsencrypt): Kostenloses Zertifikat für unsere Webhostings verfügbar.
- [Webhosting - Sectigo DV SSL-Zertifikat aktivieren](/pages/web_cloud/web_hosting/ssl_dv): Zertifikat gültig für einen Domainnamen + dessen www Subdomain (zum Beispiel: `domain.tld` und `www.domain.tld`) oder **nur** eine Subdomain (zum Beispiel: `sub.domain.tld`).
- [Webhosting - Sectigo EV SSL-Zertifikat aktivieren](/pages/web_cloud/web_hosting/ssl_ev): Zertifikat gültig für einen Domainnamen + dessen www Subdomain (zum Beispiel: `domain.tld` und `www.domain.tld`) oder **nur** eine Subdomain (zum Beispiel: `sub.domain.tld`).
- [Webhosting - Eigenes SSL-Zertifikat installieren](/pages/web_cloud/web_hosting/ssl_custom): Wenn Sie über Ihr eigenes SSL-Zertifikat verfügen oder keine der 3 vorherigen Lösungen Ihren Bedürfnissen entspricht.

### SSL-Zertifikat von einem Webhosting löschen <a name="delete-ssl"></a>

> [!warning]
>
> Die Löschung eines kostenpflichtigen **Sectigo** SSL-Zertifikats (DV oder EV) ist endgültig, auch wenn das Zertifikat noch nicht abgelaufen ist. Für die verbleibende Zeit können keine anteiligen Rückerstattungen vorgenommen werden. Wenn Sie ein solches SSL-Zertifikat neu installieren möchten, müssen Sie eine neue Bestellung aufgeben und das neue abonnierte SSL-Zertifikat vollständig bezahlen.
>
> Wenn Sie ein SSL-Zertifikat dauerhaft auf Ihrem Webhosting deaktivieren möchten, stellen Sie sicher **bevor Sie fortfahren**, dass die endgültige Deaktivierung des SSL-Zertifikats Ihre Websites nicht unzugänglich macht. In diesem Fall erhalten Ihre Benutzer einen Sicherheitsfehler, wenn sie versuchen, auf Ihre Website über HTTPS zuzugreifen.
>
> Da diese Überprüfung von den Einstellungen Ihrer Website abhängt, empfehlen wir Ihnen, sich an einen [spezialisierten Dienstanbieter](/links/partner) zu wenden. Wir können Ihnen in dieser Hinsicht keine Unterstützung bieten.

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
>> Klicken Sie in der Tabelle am unteren Rand der neu angezeigten Seite auf den Button `⁝`{.action} rechts neben der Zeile für die betreffende Domain und dann auf `SSL deaktivieren`{.action}.
>>
>> ![SSL deaktivieren](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/disable-ssl.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Bestätigen Sie im angezeigten Fenster die Deaktivierung, indem Sie auf `Bestätigen`{.action} klicken.
>>
>> ![SSL löschen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/ssl-deletion.png){.thumbnail}

Die Deaktivierung des SSL-Zertifikats wird spätestens in einigen Stunden wirksam.

### Beheben Sie häufig auftretende Fehler bei SSL-Zertifikaten auf Webhostings

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Diese Meldung zeigt an, dass Sie bereits Inhaber eines SSL-Zertifikats sind. Sie müssen also kein neues SSL-Zertifikat für Ihr Webhosting aktivieren.

Wenn das auf Ihrem Webhosting installierte SSL-Zertifikat nicht das ist, das Sie verwenden möchten, können Sie Ihr aktuelles [SSL-Zertifikat deaktivieren](#delete-ssl) und anschließend [ein neues SSL-Zertifikat aktivieren](#ssl-enable) auf Ihrem Webhosting verwenden.

#### "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

Diese Meldung kann 2 Ursachen haben.

- **1**: Der zu Ihrer Website gehörende Domainname verweist auf die IP-Adresse des CDN für das Webhostings. Auf Ihrem Webhosting sind aber keine CDN-Optionen aktiv.

Um diese Situation zu beheben, weisen Sie Ihrem Domainnamen in dessen DNS-Zone die IP-Adresse des Webhostings selbst (ohne CDN) zu.  
Die IP-Adresse Ihres Webhostings finden Sie in unserer Anleitung „[Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)“.  
Um die aktive DNS-Zone Ihrer Domain zu bearbeiten, lesen Sie unsere Anleitung „[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)“.

- **2**: Der Ihrer Website zugeordnete Domainname verweist nicht auf die IP-Adresse Ihres Webhostings.

Um diese Situation zu beheben, weisen Sie Ihrem Domainnamen in dessen DNS-Zone die IP-Adresse des Webhostings zu.  
Wenn Sie auf Ihrem Webhosting eine CDN-Option aktiviert haben, können Sie auch die IP-Adresse des Webhostings mit CDN verwenden.  
Die IP-Adressen Ihres Webhostings finden Sie in unserer Anleitung „[Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)“.  
Um die aktive DNS-Zone Ihrer Domain zu bearbeiten, lesen Sie unsere Anleitung „[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)“.

#### Sie haben Sectigo EV SSL zusammen mit Ihrem Webhosting bestellt, aber das Zertifikat ist noch nicht aktiv und das Webhosting funktioniert nicht korrekt

Diese Situation hängt mit den notwendigen Schritten zur Aktivierung von EV SSL auf Ihrem Webhosting zusammen.

Wenn nötig, lesen Sie unsere Anleitung „[Webhosting - Sectigo EV SSL-Zertifikat aktivieren](/pages/web_cloud/web_hosting/ssl_ev)“, um diese Situation zu beheben.

> [!primary]
>
> Wenn das EV SSL-Zertifikat nicht vollständig aktiviert wird, wird die Bestellung nicht abgeschlossen und es wird keine Rechnung erstellt. Aus diesem Grund wird der Webhosting-Dienst nicht korrekt funktionieren.

#### Nach Ablauf des Sectigo Zertifikats (DV oder EV) erhalten Sie die Fehlermeldung „No attached domain with SSL enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone“

Dieser Fehler tritt auf, wenn das Sectigo SSL-Zertifikat (direkt über das Webhosting aktiviert) abläuft und sich die IP-Adresse des Webhostings ändert. Aus diesem Grund müssen Sie Ihren Domainnamen direkt in der aktiven DNS-Zone Ihrer Domain auf die richtige IP-Adresse zeigen lassen (A-Eintrag).

Die IP-Adresse Ihres Webhostings finden Sie in unserer Anleitung „[Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)“.  
Um die aktive DNS-Zone Ihrer Domain zu bearbeiten, lesen Sie unsere Anleitung „[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)“.

#### Das SSL-Zertifikat ist auf Ihrem Webhosting aktiv, aber auf Ihrer Website wird die Meldung „Your connection is not private“ angezeigt

Diese Meldung wird in folgenden Fällen angezeigt:

- **1**: Die Weiterleitungsregel zu Ihrer URL zu HTTPS ist falsch konfiguriert oder in der Datei ".htaccess" nicht vorhanden.  

Um dies zu korrigieren, lesen Sie unsere Anleitung „[Die URL einer Website mit mod_rewrite über die .htaccess Datei umschreiben](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)“ oder wenden Sie sich an einen [spezialisierten Dienstleister](/links/partner), wenn Sie dabei Schwierigkeiten haben.

- **2**: Einige Elemente der Webseite werden nicht korrekt zu HTTPS-verschlüsselten Elemente umgeleitet.  

Um dies zu korrigieren, müssen Sie sicherstellen, dass Ihre gesamte Website mit dem HTTPS Protokoll verschlüsselt ist.  
Falls nötig, lesen Sie unsere Anleitung „[Webhosting - Website auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website)“ oder wenden Sie sich an einen [spezialisierten Dienstleister](/links/partner), wenn Sie Hilfe benötigen.

> [!success]
>
> Die betroffenen Elemente auf der Webseite können direkt aus den SSL-Informationen des Browsers in den *Zertifikatsdetails* eingesehen werden.

## Weiterführende Informationen

[Webhosting - Website auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Häufige Fehler beim Schutz Ihrer Website mit SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.