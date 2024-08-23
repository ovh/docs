---
title: "Aktivieren der Web Application Firewall"
excerpt: "Aktivieren der Web Application Firewall"
updated: 2021-04-26
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel 

*ModSecurity* ist ein zusätzliches Apache-Modul, das alle auf Ihrem Webserver eingehenden Anfragen filtert. Es erhöht die Sicherheit gegen bekannte Schwachstellen, indem es Anfragen abfängt und filtert, bevor sie von Skripten verbeitet werden.

Das vorkonfigurierte "Core Rule Set" (CRS) unserer *ModSecurity*, schützt Ihre Webseiten vor den häufigsten Angriffen, zum Beispiel:

- Trojaner
- E-Mail Injection
- Sicherheitslücken in PDF Dateien
- File Injections auf Ihrem Hosting
- SQL oder XSS Injection

**In dieser Anleitung erfahren Sie, wie Sie die Application Firewall zur verbesserten Sicherheit über Ihr OVHcloud Kundencenter aktivieren.**

## Voraussetzungen

- Sie haben ein [Webhosting](/links/web/hosting) in Ihrem OVHcloud Account.
- Sie verfügen über mindestens einen mit dem Hosting verbundenen [Domainnamen](/links/web/domains){.external}.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager)

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und wählen Sie `Web Cloud`{.action} aus. Klicken Sie auf den Bereich `Hosting-Pakete`{.action} und dann auf das betreffende Hosting.

### Die Application Firewall in der PHP Konfiguration aktivieren

Klicken Sie auf den Tab `Allgemeine Informationen`{.action}. Die aktuelle `Globale PHP-Version` Version wird im Bereich **Konfiguration** angezeigt. Klicken Sie auf den Button `...`{.action} und wählen Sie `Konfiguration ändern`{.action}. Wählen Sie im neuen Fenster das Element `Aktuelle Konfiguration ändern`{.action} und klicken Sie auf `Weiter`{.action}.

![managephpconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/application-firewall-step-2.png){.thumbnail}

Stellen Sie im neuen Fenster sicher, dass die **Application Firewall** auf `aktiviert`{.action} eingestellt ist. Um die Konfiguration zu bestätigen, klicken Sie auf den Button `Bestätigen`{.action}.

### Die Application Firewall für einzelne Multisite-Domainnamen aktivieren

Wechseln Sie zum Tab `Multisite`{.action} Ihres Webhostings. Klicken Sie auf den Button `...`{.action} rechts neben der betreffenden Domain und wählen Sie die Option `Domain bearbeiten`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-2.png){.thumbnail}

Setzen Sie im Konfigurationsfenster einen Haken bei `Firewall aktivieren`{.action}. Sie können auch die `www`-Subdomain in diese Konfiguration aufnehmen, indem Sie oben die Checkbox anhaken.

Klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}, um die Multisite-Einstellungen zu ändern.

![modifydomain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-enable-firewall-step-1.png){.thumbnail}

### Aktivierungstask überprüfen

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/firewall-planned.png){.thumbnail}

Die Updates Ihrer Multisite-Konfiguration werden im Tab `Aktuelle Tasks`{.action} aufgeführt (der Status ist zunächst "geplant"). Die Firewall wird aktiv, sobald ihr Update-Task nicht mehr in der Liste angezeigt wird.

### Überprüfung des Firewall-Status für Domainnamen

Der Tab `Multisite`{.action} Ihres Webhosting-Angebots zeigt ab, für welche Domainnamen die Firewall-Option aktiviert ist.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/firewall-enabled.png){.thumbnail}

Die angezeigte Tabelle enthält alle Domains, die Ihrem Webhosting Angebot hinzugefügt wurden. In der Spalte "Firewall" wird der Aktivierungsstatus für jede Domain angezeigt.

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.