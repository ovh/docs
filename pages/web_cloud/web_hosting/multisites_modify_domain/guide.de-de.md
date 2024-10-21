---
title: "Webhosting - Ändern von mit einem Webhosting verbundenen Domainnamen"
excerpt: "Erfahren Sie hier, wie Sie die Zuordnungseinstellungen von Domainnamen oder Subdomains ändern, die bereits auf Ihrem Webhosting deklariert sind"
updated: 2024-09-04
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Bei der Verwendung Ihres Webhostings oder zur Aktualisierung Ihrer Website können Sie die Einstellungen Ihres Domainnamens oder Ihrer Subdomain, die bereits mit Ihrem Webhosting verbunden ist, ändern.

> [!primary]
>
> In dieser Anleitung erfahren Sie, wie Sie einen Domainnamen oder Subdomain ändern, die bereits auf einem OVHcloud Webhosting registriert ist. Wenn Sie eine neue Domain/Subdomain mit Ihrem Webhosting verbinden möchten, lesen Sie unsere Anleitung „[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)“.
>

**Diese Anleitung erklärt, wie Sie die Zuordnungseinstellungen für Domainnamen oder Subdomain ändern, die bereits auf Ihrem Webhosting registriert ist.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie verwalten einen oder mehrere [Domainnamen](/links/web/domains).
- Sie verfügen über die erforderlichen Berechtigungen für alle betroffenen Dienste. Weitere Informationen finden Sie in unserer Anleitung „[Die Kontakte Ihrer Dienste verwalten](/pages/account_and_service_management/account_information/managing_contacts)“.

## In der praktischen Anwendung

> [!warning]
>
> Die Änderung der Zuordnungseinstellungen einer Domain oder Subdomain kann zu einer Unterbrechung des Zugangs zu Ihren Diensten (Ihrer Website) führen. Wenn Sie sich nicht sicher sind, welche Änderungen notwendig sind, wenden Sie sich an einen spezialisierten Dienstleister.
>

So ändern Sie die Zuordnungseinstellungen für Domainnamen oder Subdomain, die bereits auf Ihrem Webhosting-Angebot deklariert ist:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Klicken Sie auf den Tab `Multisite`{.action}.
6. Klicken Sie in der Tabelle rechts neben der betreffenden Domain bzw. Subdomain auf den Button `...`{.action} und dann auf `Domain bearbeiten`{.action}.

![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

Das folgende Fenster wird angezeigt:

![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled.png){.thumbnail}

Im weiteren Verlauf dieser Anleitung finden Sie eine Beschreibung der im obigen Fenster verfügbaren Einstellungen. Nachdem Sie die unten stehenden Beschreibungen gelesen haben und Ihre Änderungen vorgenommen haben, klicken Sie unten rechts im Fenster auf den Button `Weiter`{.action} und fahren Sie mit [Schritt 2](#step2) fort.

### Schritt 1 - Beschreibung der bearbeitbaren Parameter <a name="step1"></a>

> [!primary]
>
> Das Formular `Domainname`{.action} kann nicht bearbeitet werden, da es sich um eine Änderung der Einstellungen des dem Webhosting zugeordneten Domainnamens handelt. Wenn die gewünschte Aktion darin besteht, Ihrem Webhosting eine neue Domain/Subdomain zuzuordnen, lesen Sie unsere Anleitung „[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)“.
>

#### Wurzelverzeichnis bearbeiten

> [!warning]
> **Sonderfall: Konfiguration mit Git**
>
> Um das `Wurzelverzeichnis`{.action} zu ändern, das für Ihren Domainnamen deklariert wurde wenn eine Konfiguration mit Git für diesen Domainnamen vorhanden ist, müssen Sie diese Konfiguration zuerst löschen.
>
> Wenn eine Konfiguration mit Git vorhanden ist, wird direkt unter dem Formular eine Meldung angezeigt:
>
> ![Modify domain associed with git](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled-git-message.png){.thumbnail}
>
> Um die Git-Konfiguration einer Ihrem Hosting zugeordneten Domain/Subdomain zu löschen, lesen Sie unsere Anleitung „[Konfiguration und Nutzung von Git mit OVHcloud Webhosting](/pages/web_cloud/web_hosting/git_integration_webhosting)“.
>

Das Formular `Wurzelverzeichnis`{.action} enthält den Namen des Ordners, der die Elemente enthält, die mit Ihrem Domainnamen angezeigt werden. Dies kann z.B. ein Ordner sein, der die Dateien für die Website enthält.

Bei der Nutzung Ihrer Dienste kann es vorkommen, dass Sie das `Wurzelverzeichnis`{.action} ändern müssen, das für Ihren Domainnamen deklariert ist. Dies kann verschiedene Gründe haben:

- Sie haben eine neue Website in einem neuen Ordner im FTP-Speicherbereich Ihres Webhostings erstellt.
- Sie möchten Ihre Domain in einen leeren Ordner umleiten und dort eine neue Website platzieren.
- etc.

In diesem Formular müssen Sie also den Namen des vorausgefüllten Ordners durch den Namen des neuen Ordners ersetzen, den Sie erstellen möchten.

> [!success]
>
> Wenn Sie einen nicht existierenden Ordnernamen im FTP-Speicherbereich Ihres Webhostings eingeben, wird dieser automatisch von unseren Robots in Ihrem FTP-Speicherbereich erstellt.
>

#### Weitere Optionen verfügbar

##### Die Option "SSL"

Aktivieren/deaktivieren Sie diese Option nur, wenn Sie das kostenlose **Let's Encrypt** SSL für Ihre Domain/Subdomain aktivieren/deaktivieren möchten. Bei anderen SSL-Angeboten von OVHcloud muss diese Option nicht aktiviert werden.

Weitere Informationen zu den verfügbaren SSL-Optionen/-Angeboten finden Sie in unserer Dokumentation „[SSL-Zertifikat auf einem Webhosting verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)“.

##### Die Option "CDN aktivieren"

Um diese Option nutzen zu können, müssen Sie zuerst ein CDN von OVHcloud abonniert haben oder über ein Performance Webhosting verfügen.

Aktivieren/deaktivieren Sie diese Option, um die CDN-Option für Ihren Domainnamen oder Ihre Subdomain zu aktivieren/deaktivieren.

Weitere Informationen zu den verfügbaren CDN-Optionen/-Angeboten finden Sie in unserer Dokumentation „[Ihre Webseiten mit CDN beschleunigen](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)“.

##### Die Option "IP des Landes"

Diese Option wird hauptsächlich für Websites verwendet, deren Nutzer sich in einem anderen Land als das Hosting befinden. Es verbessert die SEO-Bewertung der Website im gewählten Land.

Weitere Informationen zu dieser Option finden Sie in unserer Dokumentation „[Geolokalisierung Ihrer Website in einem bestimmten Land](/pages/web_cloud/web_hosting/multisites_geolocation)“.

##### Die Option "Firewall aktivieren"

Mit dieser Option können Sie eingehende Anfragen filtern, um Ihr Webhosting vor den häufigsten Angriffen zu schützen.

Weitere Informationen zu dieser Option finden Sie in unserer Dokumentation „[Aktivieren der Web Application Firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)“.

##### Die Option "Getrennte Logs"

Aktivieren/deaktivieren Sie diese Option nur, wenn Sie die Logs Ihres Domainnamens von den anderen Domainnamen trennen möchten, die auf Ihrem Webhosting deklariert sind.

Weitere Informationen zu dieser Option finden Sie auf unserer [Seite zu detaillierten Statistiken](/links/web/hosting-traffic-analysis).

Nachdem Sie Ihre Änderungen vorgenommen haben, klicken Sie unten rechts im Fenster auf den Button `Weiter`{.action}, um mit [Schritt 2](#step2) fortzufahren.

### Schritt 2 - Zusammenfassung der Änderungen <a name="step2"></a>

Sobald Sie auf den Button `Weiter`{.action} geklickt haben, finden Sie eine Zusammenfassung der Einstellungen, die Sie für Ihren Domainnamen übernehmen möchten:

![Modify domain resume](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Wenn alle Einstellungen Ihren Wünschen entsprechen, klicken Sie auf `Bestätigen`{.action}.

Abhängig von den ausgewählten Optionen kann es einige Minuten bis zu einigen Stunden dauern, bis die Änderungen wirksam werden.

Wenn die Änderungen für die Optionen **SSL**, **CDN**, **IP des Landes** und **Getrennte Logs** nach 24 Stunden nicht wirksam werden, nutzen Sie die entsprechenden Wissensressourcen für alle Optionen in [Schritt 1](#step1), um sicherzustellen, dass alle Anforderungen erfüllt wurden.

## Weiterführende Informationen

[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[SSL-Zertifikat auf einem Webhosting verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Ihre Webseiten mit CDN beschleunigen](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)

[Geolokalisierung Ihrer Website in einem bestimmten Land](/pages/web_cloud/web_hosting/multisites_geolocation)

[Aktivieren der Web Application Firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.