---
title: "Webhosting - SSL-Zertifikat einrichten"
excerpt: "Erfahren Sie hier, wie Sie ein SSL-Zertifikat auf Ihrem OVHcloud Webhosting installieren und verwalten"
updated: 2025-06-16
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
- Sie haben mindestens eine [Domain](/links/web/domains) registriert.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!warning]
>
> Bevor Sie Fortfahren, **überprüfen Sie, dass Domainname und Subdomain**, die von Ihrem zukünftigen SSL-Zertifikat betroffen sind:
>
> - Auf die IP-Adresse Ihres Webhostings verweisen.
> - Auf Ihrem Webhosting als Multisite deklariert sind.
>
> Um dies zu überprüfen, lesen Sie unsere Anleitungen:
>
> - [Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)
> - [Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
> - [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

### SSL-Zertifikat auf seinem Webhosting aktivieren <a name="ssl-enable"></a>

OVHcloud bietet 4 Lösungen für die Aktivierung/Installation eines SSL-Zertifikats auf einem Webhosting. Jede dieser Lösungen wird ausführlich dokumentiert.

Hier finden Sie die Anleitungen zu diesen 4 Lösungen:

- [Let's Encrypt (DV) SSL-Zertifikat aktivieren](/pages/web_cloud/web_hosting/ssl_letsencrypt): Zertifikat mit bis zu **99** Domainnamen/Subdomains, die auf einem Webhosting deklariert sind.
- [SSL-Zertifikat für Sectigo (DV) aktivieren](/pages/web_cloud/web_hosting/ssl_dv): Zertifikat gültig für einen Domainnamen und Subdomain "www" (Beispiel: `domain.tld` und `www.domain.tld`) oder **nur** eine Subdomain (Beispiel: `sub.domain.tld`).
- [SSL-Zertifikat für Sectigo (EV) aktivieren](/pages/web_cloud/web_hosting/ssl_ev): Zertifikat gültig für einen Domainnamen und Subdomain "www" (Beispiel: `domain.tld` und `www.domain.tld`) oder **nur** eine Subdomain (Beispiel: `sub.domain.tld`).
- [Benutzerdefiniertes SSL-Zertifikat installieren](/pages/web_cloud/web_hosting/ssl_custom): Wenn Sie über Ihr eigenes SSL-Zertifikat verfügen oder keine der 3 vorherigen Lösungen Ihren Anforderungen entspricht.

> [!primary]
>
> Es kann nur ein SSL-Zertifikat pro Webhosting installiert werden (von den vier vorgenannten Lösungen).
>
> Wenn Sie ein SSL-Zertifikat für mehrere Domains/Subdomains aktivieren möchten, die auf Ihrem Webhosting deklariert sind, installieren Sie stattdessen ein [kostenloses SSL-Zertifikat von Let's Encrypt](/links/web/hosting-options-ssl) oder Ihr eigenes [personalisiertes SSL-Zertifikat](/pages/web_cloud/web_hosting/ssl_custom).

### SSL-Zertifikat von einem Webhosting löschen <a name="delete-ssl"></a>

> [!warning]
>
> Wenn Sie ein SSL-Zertifikat von Ihrem Webhosting löschen möchten und stellen Sie sicher, dass durch das Löschen des SSL-Zertifikats Ihre Websites nicht unzugänglich werden, **bevor Sie fortfahren**. In diesem Fall erhalten Ihre Benutzer eine Sicherheitswarnung, wenn sie versuchen, auf Ihre Website über HTTPS zuzugreifen.

Da diese Überprüfung von den Einstellungen Ihrer Website abhängig ist, empfehlen wir Ihnen, sich im Falle von Problemen mit einem spezialisierten Dienstleister in Verbindung zu setzen. Wir können Ihnen in dieser Hinsicht keine Unterstützung bieten.

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

So entfernen Sie das auf Ihrem Webhosting installierte SSL-Zertifikat:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Bleiben Sie auf der angezeigten Seite im Tab `Allgemeine Informationen`{.action}.
6. Gehen Sie in die Box mit dem Namen `Konfiguration`.
7. Rechts neben `SSL-Zertifikat` klicken Sie auf den Button `...`{.action} und dann auf `SSL löschen`{.action}.
8. Klicken Sie im angezeigten Fenster auf `Bestätigen`{.action}, um das Löschen des SSL-Zertifikats zu bestätigen.

![Delete SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/delete-ssl.png){.thumbnail}

Dieser dauert höchstens ein paar Stunden.

> [!warning]
>
> Die Löschung eines kostenpflichtigen SSL-Zertifikats von **Sectigo** (DV oder EV) ist endgültig, auch wenn das Zertifikat noch nicht abgelaufen ist. Für die verbleibende Zeit können keine anteiligen Rückerstattungen vorgenommen werden. Wenn Sie ein **Sectigo** SSL-Zertifikat (DV oder EV) neu installieren möchten, müssen Sie eine neue Bestellung aufgeben und das neue abonnierte SSL-Zertifikat vollständig bezahlen.
>

### Beheben Sie häufig auftretende Fehler bei SSL-Zertifikaten auf Webhostings

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Diese Meldung zeigt an, dass Sie bereits Inhaber eines SSL-Zertifikats sind. Sie müssen also kein neues SSL-Zertifikat für Ihr Webhosting aktivieren.

- 1: Wenn das auf Ihrem Webhosting installierte SSL-Zertifikat ein kostenloses Let's Encrypt SSL-Zertifikat ist, lesen Sie unsere Anleitung zum SSL-Zertifikat [Let's Encrypt (DV)](/pages/web_cloud/web_hosting/ssl_letsencrypt), um Ihre Aktionen fortzusetzen.

- 2: Wenn das auf Ihrem Webhosting installierte SSL-Zertifikat nicht das ist, das Sie verwenden möchten, können Sie [Ihr aktuelles SSL-Zertifikat löschen](#delete-ssl) und anschließend [ein neues SSL-Zertifikat aktivieren](#ssl-enable) auf Ihrem Webhosting verwenden.

#### "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

Diese Meldung kann 3 Ursachen haben.

- **1**: Der zu Ihrer Website gehörende Domainname verweist auf die IP-Adresse des CDN für das Webhostings. Auf Ihrem Webhosting sind aber keine CDN-Optionen aktiv.  
    Um diese Situation zu beheben, weisen Sie Ihrem Domainnamen in dessen DNS-Zone die IP-Adresse des Webhostings selbst (ohne CDN) zu.  
    Die IP-Adresse Ihres Webhostings finden Sie in unserer Anleitung „[Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)“.  
    Um die aktive DNS-Zone Ihrer Domain zu bearbeiten, lesen Sie unsere Anleitung „[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)“.

- **2**: Der Ihrer Website zugeordnete Domainname verweist nicht auf die IP-Adresse Ihres Webhostings.  
    Um diese Situation zu beheben, weisen Sie Ihrem Domainnamen in dessen DNS-Zone die IP-Adresse des Webhostings zu.  
    Wenn Sie auf Ihrem Webhosting eine CDN-Option aktiviert haben, können Sie auch die IP-Adresse des Webhostings mit CDN verwenden.  
    Die IP-Adressen Ihres Webhostings finden Sie in unserer Anleitung „[Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)“.  
    Um die aktive DNS-Zone Ihrer Domain zu bearbeiten, lesen Sie unsere Anleitung „[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)“.

- **3**: Keiner der im Tab "Multisite" aufgeführten Domainnamen verfügt über eine aktive SSL Option.  
    Aktivieren Sie das SSL-Zertifikat für die Domain, um die Situation zu beheben. Falls nötig, lesen Sie den Abschnitt „[SSL-Zertifikat aktivieren](#ssl-enable)“ dieser Anleitung, um um fortzufahren.

#### Sie haben Sectigo EV SSL zusammen mit Ihrem Webhosting bestellt, aber das Zertifikat ist noch nicht aktiv und das Webhosting funktioniert nicht korrekt

Diese Situation hängt mit den notwendigen Schritten zur Aktivierung von EV SSL auf Ihrem Webhosting zusammen.

Wenn nötig, lesen Sie unsere Anleitung „[Webhosting - Sectigo EV SSL-Zertifikat aktivieren](/pages/web_cloud/web_hosting/ssl_ev)“, um diese Situation zu beheben.

> [!primary]
>
> Wenn das EV SSL-Zertifikat nicht vollständig aktiviert wird, wird die Bestellung nicht abgeschlossen und es wird keine Rechnung erstellt. Aus diesem Grund wird der Webhosting-Dienst nicht korrekt funktionieren.
>

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
>

## Weiterführende Informationen

[Webhosting - Website auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Häufige Fehler beim Schutz Ihrer Website mit SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.