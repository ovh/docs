---
title: "Kostenloses Hosting 100M aktivieren"
excerpt: "Diese Anleitung erklärt, wie Sie Ihr kostenloses Hosting 100M aktivieren"
updated: 2023-12-18
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel 

Mit dem Angebot [Kostenloses Hosting 100M](/links/web/domains-free-hosting){.external} bietet Ihnen OVHcloud ein Webhosting mit 100 MB und einen E-Mail-Account mit 5 GB Speicherplatz.

In dieser Anleitung erfahren Sie, wie Sie dieses Angebot für Ihren [Domainnamen](/links/web/domains){.external} aktivieren.

> [!warning]
>
> Dieses kostenlose Webhosting mit 100 MB Speicherplatz ist für eine einfache Präsentationsseite geeignet; es enthält **keine Datenbank**.
> Es eignet sich auch für die E-Mail-Nutzung, wenn Sie nicht mehr als einen "MX Plan" E-Mail-Account benötigen.
>
> Wenn Sie eine Website mit mehreren Seiten einrichten möchten, die eine Datenbank benötigt, wie etwa WordPress, Joomla!, PrestaShop oder Drupal, bestellen Sie direkt über unsere Website oder Ihr [OVHcloud Kundencenter](/links/manager) eines unserer [Webhosting-Angebote](/links/web/hosting){.external}.
>

**Diese Anleitung erklärt, wie Sie Ihr <i>Kostenloses Hosting 100M</i> aktivieren.**

## Voraussetzungen

- Sie verfügen über einen [Domainnamen](/links/web/domains){.external} in Ihrem [OVHcloud Kundencenter](/links/manager){.external}, der nicht bereits mit einem Webhosting oder einem [MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities) verbunden ist. 
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und klicken Sie im Bereich `Web Cloud`{.action} auf `Domainnamen`{.action}. Wählen Sie den Domainnamen aus.

Im Bereich **Allgemeine Informationen** finden Sie den Abschnitt *Gratis Webhosting und E-Mail*. Klicken Sie rechts auf den Button `...`{.action} und anschließend auf `Aktivieren`{.action}.

![enable 100m](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/enable-100m.png){.thumbnail}

Daraufhin öffnet sich das Aktivierungsfenster. **Schritt 1** zeigt Ihnen Angebotsinformationen an. Klicken Sie auf `Weiter`{.action} und wählen Sie in **Schritt 2** die Änderungen aus, die Sie in Ihrer DNS-Zone vornehmen möchten.

![activate100m](/pages/assets/screens/control_panel/product-selection/web-cloud/order/order-100m-step-2.png){.thumbnail}

> [!warning]
>
> Wenn Sie eine oder beide der Optionen `DNS A Eintrag` und `DNS MX Eintrag` anhaken, wird die in der DNS-Zone Ihrer Domain bereits vorhandene Konfiguration überschrieben.
>
> Wenn Ihre DNS-Zone nicht in Ihrem [OVHcloud Kundencenter](/links/manager){.external} verwaltet wird, müssen die Änderungen manuell in Ihrer externen DNS-Zone durchgeführt werden.
>
> Weitere Informationen finden Sie in unserer Anleitung zum [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit).
>

| Option                                       	| Beschreibung                                                                                                               								|
|--------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| DNS A Eintrag                         	| Die Domain wird auf die IP-Adresse des <i>Kostenloses Hosting 100M</i> verweisen.                                               								|
| DNS MX Eintrag 	| Die E-Mail-Server ( `mx1.mail.ovh.net`, `mx2.mail.ovh.net`, `mx3.mail.ovh.net`, etc.) von OVHcloud werden auf den Domainnamen angewandt. 	|

> [!primary]
>
> Wenn Ihr Projekt künftig auf ein Hosting mit einer Datenbank, einem größeren Speicherplatz oder mehr E-Mail-Accounts erweitert werden muss, können Sie von **Kostenloses Hosting 100M** ausschließlich auf ein Webhosting-Angebot **Basic** in Ihrem [OVHcloud Kundencenter](/links/manager){.external} wechseln.
>
> Ein Wechsel zum Angebot **Pro** oder **Performance** erfordert einen vorherigen Wechsel von **Kostenloses Hosting 100M** zum Angebot **Basic**.
>
> Sie können auch das kostenlose Angebot löschen, nachdem Sie Ihre Hosting-Daten und den Inhalt Ihres E-Mail-Accounts gesichert haben.
>
> Weitere Informationen finden Sie in unserer [Webhosting-Übersicht](/links/web/hosting).
>

**Schritt 3** informiert Sie über die Preisgestaltung des Angebots. 

In **Schritt 4** können Sie die Verträge einsehen und Ihre Bestellung bestätigen.

Sobald Ihre Bestellung bestätigt wurde, erhalten Sie eine E-Mail mit den Informationen zur [FTP-Verbindung](/pages/web_cloud/web_hosting/ftp_connection){.external} für Ihr **Kostenloses Hosting 100M**.

Ziehen Sie die Anleitung zur [Erstellung eines MX Plan E-Mail-Accounts](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation){.external} zu Rate, um den Account zu nutzen, der in **Kostenloses Hosting 100M** inklusive ist.

## Weiterführende Informationen

[Mit dem Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection){.external}

[E-Mail-Adresse mit MX Plan erstellen](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation){.external}

[SSL-Zertifikat auf einem Webhosting verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.