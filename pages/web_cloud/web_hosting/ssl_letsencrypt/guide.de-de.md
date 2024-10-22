---
title: "Webhosting - Kostenloses SSL-Zertifikat von Let's Encrypt aktivieren"
excerpt: "Hier erfahren Sie, wie Sie ein kostenloses SSL-Zertifikat von Let's Encrypt auf Ihrem Webhosting aktivieren oder erneuern."
updated: 2024-10-22
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>
  
## Ziel  

Secure Socket Layer (SSL) Zertifikate erlauben es, Verbindungen von oder zu Ihrer Website zu verschlüsseln. So wird verhindert, dass unbefugte Personen oder Roboter auf ausgehende und eingehende Anfragen von Ihrer Website zugreifen können.

OVHcloud bietet verschiedene Arten von SSL-Zertifikaten für die [Webhostings](/links/web/hosting) an, wie in unserer Anleitung "[SSL-Zertifikat auf einem Webhosting verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)" beschrieben. SSL-Zertifikate sind für die Sicherheit Ihrer Website unentbehrlich.

Es gibt drei Arten von SSL-Zertifikaten:

- Domain Validation (DV)
- Organisation Validation (OV)
- Extended Validation (EV)

Die SSL-Verschlüsselungsstufen sind bei diesen drei Zertifikatstypen identisch.

Der Hauptunterschied besteht in den Überprüfungen, mit denen die ausstellende Zertifikatsstelle (CA) die Legitimität verifiziert.

Let's Encrypt ist eine kostenlose, automatisierte, offene und gemeinnützige Zertifizierungsstelle. Weitere Informationen finden Sie unter <https://letsencrypt.org/de/about/>.

**So aktivieren oder erneuern Sie ein kostenloses SSL-Zertifikat von Let's Encrypt auf Ihrem OVHcloud Webhosting.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting), auf dem noch kein SSL-Zertifikat installiert ist oder beabsichtigen, eines zu bestellen.
- Sie verfügen über einen [Domainnamen](/links/web/domains) und dessen exklusive Nutzungsrechte oder beabsichtigen, einen zu registrieren. Der Domainname darf nicht bereits mit einem SSL-Zertifikat verbunden sein.

## In der praktischen Anwendung

### 1. Das künftige SSL Let's Encrypt Zertifikat Ihrem/Ihren Domainnamen/Subdomain(n) vorab zuweisen <a name="ssl-multisite"></a>

Im Gegensatz zu anderen Zertifikaten kann das [Let's Encrypt Gratis-SSL-Zertifikat](/links/web/hosting-options-ssl) für mehrere Domains/Subdomains gleichzeitig aktiviert werden. Dies ist im Rahmen von **99** Domains oder Subdomains pro Webhosting erlaubt.

Aus diesem Grund müssen Sie vor der Installation des SSL-Zertifikats Let's Encrypt alle Domains / Subdomains vorbereiten, die dieses SSL-Zertifikat erhalten.

Gehen Sie hierzu wie folgt vor:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Klicken Sie auf der angezeigten Seite auf den Tab `Multisite`{.action}.

Die angezeigte Tabelle listet alle Domains/Subdomains auf, die bereits als Multisites auf Ihrem Webhosting deklariert sind. In der Spalte „SSL“ wird der Aktivierungsstatus des SSL für Ihre Multi-Site-Domains bzw. Subdomains angezeigt.

![manage SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ssls.png){.thumbnail}

In dieser Spalte und allgemein können drei Status angezeigt werden:

|Status|Beschreibung|
|---|---|
|Aktiviert|Für diesen Multisite-Eintrag wurde bereits ein SSL-Zertifikat aktiviert. Ist das der Fall, [vergewissern Sie sich, dass das SSL-Zertifikat ein Let's Encrypt SSL-Zertifikat ist](#check-ssl). Wenn ja, lesen Sie zuerst den unten in dieser Anleitung aufgeführten [Sonderfall](#regenerate-ssl). Alternativ dazu lesen Sie unsere Anleitung „[Webhosting - SSL-Zertifikat verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)“, wenn Sie Ihr aktuelles SSL-Zertifikat (kostenlos oder kostenpflichtig) löschen und durch ein Let's Encrypt SSL-Zertifikat ersetzen möchten.|
|Zu erstellen|Für diesen Multisite-Eintrag wurde ein SSL-Zertifikat aktiviert, das jedoch noch nicht technisch aktiv ist. Dazu müssen Sie [Let's Encrypt SSL-Zertifikat neu generieren](#regenerate-ssl), damit es auch die neuen Domains/Subdomains enthält, die für Multisite deklariert sind und deren Status `Zu erstellen` lautet.|
|Deaktiviert|Für diesen Multisite-Eintrag ist kein SSL-Zertifikat aktiviert. Führen Sie die folgenden Schritte aus, um den Dienst zu aktivieren.|

> [!primary]
>
> Wenn eine Ihrer Domains/Subdomains noch nicht auf Ihrem Webhosting registriert ist, lesen Sie die folgenden Anleitungen, um diese Situation zu lösen:
>
> - [Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite);
> - [Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
> - [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit).

Gehen Sie ebenfalls im Tab `Multisite`{.action} vor und weisen Sie die SSL-Option Let's Encrypt für einen Domainnamen bzw. eine Subdomain, die bzw. die für Multisite auf Ihrem Webhosting deklariert ist, vorab zu:

1. Klicken Sie in der Tabelle mit allen Domains/Subdomains, die bereits als Multisites auf Ihrem Webhosting deklariert sind, auf den Button `...`{.action} rechts in der Zeile des betreffenden Domainnamens/Subdomains.
2. Klicken Sie anschließend auf `Domain bearbeiten`{.action}.
3. Aktivieren Sie im angezeigten Fenster das Kontrollkästchen `SSL`{.action}, und klicken Sie auf `Weiter`{.action}.
4. Im neu geöffneten Fenster finden Sie eine Zusammenfassung der Konfiguration Ihrer Domain/Subdomain. Klicken Sie auf `Bestätigen`{.action}, um die angeforderte Änderung für diesen Multisite-Eintrag zu übernehmen.

Sobald die Änderung bestätigt wurde, ändert sich der Status in der SSL-Spalte für den betreffenden Multisite-Eintrag von `Deaktiviert` in `Zu erstellen` innerhalb weniger Sekunden. Wenn Sie unter den Multisite-Einträgen Ihres Webhostings weitere betroffene Domains/Subdomains haben, wiederholen Sie diesen Vorgang so oft wie nötig.

### 2. SSL-Zertifikat aktivieren Let's Encrypt <a name="enable-ssl"></a>

Vergewissern Sie sich, dass der [vorherige Schritt](#ssl-multisite) erfolgreich abgeschlossen wurde, bevor Sie mit dieser Konfiguration fortfahren. Im Tab `Multisite`{.action} Ihres Webhostings muss mindestens eine Domain/Subdomain die SSL-Option mit dem Status `Aktiviert` oder `Zu erstellen` haben, um das Let's Encrypt SSL-Zertifikat zu installieren.

> [!warning]
>
> **Bevor Sie fortfahren**, überprüfen Sie bitte, dass **alle Domains und/oder Subdomains**, die von Ihrem zukünftigen SSL Let's Encrypt Zertifikat betroffen sind:
>
> - verweisen auf die IP-Adresse Ihres Webhostings;
> - sind auf Ihrem Webhosting als Multisite deklariert.
>
> Um dies zu überprüfen, lesen Sie unsere Anleitungen:
>
> - [Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite);
> - [Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
> - [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit).

So aktivieren Sie Ihr Let's Encrypt SSL-Zertifikat:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Bleiben Sie auf der angezeigten Seite im Tab `Allgemeine Informationen`{.action}.
6. Gehen Sie in die Box mit dem Namen `Konfiguration`.
7. Rechts neben `SSL-Zertifikat` klicken Sie auf den Button `...`{.action} und dann auf `SSL-Zertifikat bestellen`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Wählen Sie im angezeigten Fenster `Kostenloses Zertifikat (Let’s Encrypt)`{.action} aus der Liste der verfügbaren Optionen aus und klicken Sie auf `Weiter`{.action}, um die Anfrage zur Aktivierung des SSL zu bestätigen.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-le.png){.thumbnail}

Es kann mehrere Stunden dauern, bis das SSL-Zertifikat von Let's Encrypt eingerichtet ist.

<a name="check-ssl"></a>

So überprüfen Sie, ob die Installation abgeschlossen ist:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Bleiben Sie auf der angezeigten Seite im Tab `Allgemeine Informationen`{.action}.
6. Gehen Sie in die Box mit dem Namen `Konfiguration`.

Nach Abschluss sollte unter `SSL-Zertifikat` ein Wert angezeigt werden, der diesem entspricht: `Ja - LETSENCRYPT - DV`.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/tab-ssl-le.png){.thumbnail}

Ihr Let's Encrypt SSL-Zertifikat ist nun installiert und aktiv. Sie können es ab sofort mit Ihrer/ihren neuen Website(s) verwenden, indem Sie zum Beispiel Ihre/n neue(n) [Website(s) als HTTPS übergeben](/pages/web_cloud/web_hosting/ssl-activate-https-website).

### Sonderfall: Let's Encrypt SSL-Zertifikat auf einem Webhosting erneuern <a name="regenerate-ssl"></a>

Bei der Verwendung Ihres Webhostings kann es vorkommen, dass Sie zusätzliche Domains oder Subdomains für Multisite hinzufügen, für die Sie die SSL-Option aktivieren müssen.

Auch wenn Sie bereits ein Let's Encrypt SSL-Zertifikat für einige Ihrer Domains/Subdomains aktiviert haben, können Sie jederzeit neue hinzufügen (im Rahmen der **99** Domains/Subdomains, die weiter oben in dieser Anleitung beschrieben sind).

Führen Sie dazu **in der Reihenfolge** folgende Aktionen aus:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Weisen Sie Ihren neuen Domainnamen/Subdomains das Let's Encrypt SSL-Zertifikat vorab zu, wie im [ersten Teil](#ssl-multisite) dieser Anleitung beschrieben.
3. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
4. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Hosting-Pakete`{.action}.
5. Wählen Sie das betreffende Webhosting aus.
6. Bleiben Sie auf der angezeigten Seite im Tab `Allgemeine Informationen`{.action}.
7. Gehen Sie in die Box mit dem Namen `Konfiguration`.
8. Klicken Sie rechts neben `SSL-Zertifikat` auf den Button `...`{.action} und dann auf `SSL-Zertifikat neu erstellen`{.action}.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/regenerate-ssl-certificate.png){.thumbnail}

Lesen Sie die Informationen im angezeigten Fenster und klicken Sie auf `Bestätigen`{.action}. Warten Sie nun ab, bis Ihr SSL-Zertifikat neu generiert wurde.

Dieser Schritt kann mehrere Stunden dauern.

> [!warning]
>
> Let's Encrypt, die Behörde, die das SSL-Zertifikat bereitstellt, [begrenzt die Anzahl der Erneuerungen pro Woche auf fünf](https://letsencrypt.org/docs/rate-limits/){.external}. Achten Sie daher auf die verschiedenen Regenerierungen, die Sie kurzfristig vornehmen können, um nicht vorübergehend blockiert zu werden.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-regeneration.png){.thumbnail}

Ihr Let's Encrypt SSL-Zertifikat ist nun neu generiert und aktiv. Sie können es ab sofort mit Ihrer/ihren neuen Website(s) verwenden, indem Sie zum Beispiel Ihre/n neue(n) [Website(s) als HTTPS übergeben](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Weiterführende Informationen

[Webhosting - SSL-Zertifikat verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Webhosting - Website auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Häufige Fehler beim Schutz Ihrer Website mit SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.