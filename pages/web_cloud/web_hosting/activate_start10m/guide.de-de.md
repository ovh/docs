---
title: "Webhosting - Kostenloses Hosting 100M aktivieren"
excerpt: "Diese Anleitung erklärt, wie Sie Ihr kostenloses Hosting 100M aktivieren"
updated: 2024-12-06
---

## Ziel 

Mit dem Angebot [Kostenloses Hosting 100M](/links/web/domains-free-hosting) bietet Ihnen OVHcloud ein Webhosting mit 100 MB und einen E-Mail-Account mit 5 GB Speicherplatz.  
In dieser Anleitung erfahren Sie, wie Sie dieses Angebot für Ihren [Domainnamen](/links/web/domains) aktivieren.

> [!warning]
>
> Dieses kostenlose Webhosting mit 100 MB Speicherplatz ist für eine einfache Präsentationsseite geeignet; es enthält **keine Datenbank**.  
> Es eignet sich auch für die E-Mail-Nutzung, wenn Sie nicht mehr als einen "MX Plan" E-Mail-Account benötigen.  
> Wenn Sie eine Website mit mehreren Seiten einrichten möchten, die eine Datenbank benötigt, wie etwa WordPress, Joomla!, PrestaShop oder Drupal, bestellen Sie direkt über unsere Website oder Ihr [OVHcloud Kundencenter](/links/manager) eines unserer [Webhosting-Angebote](/links/web/hosting).
>

**Diese Anleitung erklärt, wie Sie Ihr <i>Kostenloses Hosting 100M</i> aktivieren.**

## Voraussetzungen

- Sie verfügen über einen [Domainnamen](/links/web/domains) in Ihrem [OVHcloud Kundencenter](/links/manager), der nicht bereits mit einem Webhosting oder einem [MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities) verbunden ist. 

> [!primary]
>
> Das Angebot Kostenloses Hosting 100M ist **nur** für unsere Kunden in Europa verfügbar.

<!-- CP-NAV-START:web-domains -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Domainnamen](/links/control-panel/web-domains)
- **Navigationspfad:** `Web Cloud`{.action} > `Domainnamen`{.action} > Wählen Sie Ihren Domainnamen aus

---
<!-- CP-NAV-END:web-domains -->


## In der praktischen Anwendung

<!-- CP-STEPS-START:activate-100m-steps -->
Um Ihr Kostenloses Hosting 100M zu aktivieren, klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains) und wählen Sie den Domainnamen aus.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Im Bereich **Allgemeine Informationen** finden Sie den Abschnitt **Gratis Webhosting und E-Mail**. Klicken Sie rechts auf den Button `...`{.action} und anschließend auf `Aktivieren`{.action}.
>>
>> ![enable 100m](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/enable-100m.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Daraufhin öffnet sich das Aktivierungsfenster. Der Abschnitt **1** zeigt Ihnen Angebotsinformationen an.  
>> Klicken Sie auf `Weiter`{.action} und wählen Sie in Abschnitt **2** die Änderungen aus, die Sie in Ihrer DNS-Zone vornehmen möchten.
>>
>> ![activate100m](/pages/assets/screens/control_panel/product-selection/web-cloud/order/order-100m-step-2.png){.thumbnail}
>>
>> | Option                                       	| Beschreibung                                                                                                               								|
>> |--------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
>> | DNS A Eintrag                         	| Die Domain wird auf die IP-Adresse des <i>Kostenloses Hosting 100M</i> verweisen.                                               								|
>> | DNS MX Eintrag 	| Die E-Mail-Server ( `mx1.mail.ovh.net`, `mx2.mail.ovh.net`, `mx3.mail.ovh.net`, etc.) von OVHcloud werden auf den Domainnamen angewendet. 	|
>>
>> > [!warning]
>> >
>> > Wenn Sie eine oder beide der Optionen `DNS A Eintrag` und `DNS MX Eintrag` anhaken, wird die in der DNS-Zone Ihrer Domain bereits vorhandene Konfiguration überschrieben.  
>> > Setzen Sie hier ein Häkchen, um Ihre Domain automatisch mit dem kostenlosen Hosting 100M und dem enthaltenen E-Mail-Dienst zu konfigurieren.
>> >
>> > Wenn Ihre DNS-Zone nicht in Ihrem [OVHcloud Kundencenter](/links/manager) verwaltet wird, müssen die Änderungen manuell in Ihrer externen DNS-Zone durchgeführt werden.
>> >
>> > Weitere Informationen finden Sie in unserer Anleitung zum [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit).
>>
>> Abschnitt **3** informiert Sie über die Preisgestaltung des Angebots. 
>>
>> In Abschnitt **4** können Sie die Verträge einsehen und Ihre Bestellung bestätigen.
<!-- CP-STEPS-END:activate-100m-steps -->

> [!primary]
>
> Wenn Ihr Projekt künftig auf ein Hosting mit einer Datenbank, einem größeren Speicherplatz oder mehr E-Mail-Accounts erweitert werden muss, können Sie von **Kostenloses Hosting 100M** ausschließlich auf ein Webhosting-Angebot **Basic** in Ihrem [OVHcloud Kundencenter](/links/manager) wechseln.
>
> Ein Wechsel zum Angebot **Pro** oder **Performance** erfordert einen vorherigen Wechsel von **Kostenloses Hosting 100M** zum Angebot **Basic**.
>
> Sie können auch das kostenlose Angebot löschen, nachdem Sie Ihre Hosting-Daten und den Inhalt Ihres E-Mail-Accounts gesichert haben.
>
> Weitere Informationen finden Sie in unserer [Webhosting-Übersicht](/links/web/hosting).

Sobald Ihre Bestellung bestätigt wurde, erhalten Sie eine E-Mail mit den Informationen zur [FTP-Verbindung](/pages/web_cloud/web_hosting/ftp_connection) für Ihr **Kostenloses Hosting 100M**.

Ziehen Sie die Anleitung zur [Erstellung eines MX Plan E-Mail-Accounts](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation) zu Rate, um den Account zu nutzen, der in **Kostenloses Hosting 100M** inklusive ist.

## Weiterführende Informationen

[Mit dem Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)

[E-Mail-Adresse mit MX Plan erstellen](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation)

[SSL-Zertifikat auf einem Webhosting verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.