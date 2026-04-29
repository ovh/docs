---
title: "Webhosting - Ändern von mit einem Webhosting verbundenen Domainnamen"
excerpt: "Erfahren Sie hier, wie Sie die Zuordnungseinstellungen von Domainnamen oder Subdomains ändern, die bereits auf Ihrem Webhosting deklariert sind"
updated: 2026-05-04
---

## Ziel

Bei der Verwendung Ihres Webhostings oder zur Aktualisierung Ihrer Website können Sie die Einstellungen Ihres Domainnamens oder Ihrer Subdomain, die bereits mit Ihrem Webhosting verbunden ist, ändern.

> [!primary]
>
> In dieser Anleitung erfahren Sie, wie Sie einen Domainnamen oder Subdomain ändern, die bereits auf einem OVHcloud Webhosting registriert ist. 
>
> - Um einen neuen Domainnamen oder eine Subdomain mit Ihrer Website auf Ihrem Webhosting zu verknüpfen, konsultieren Sie bitte unsere Anleitung "[Wie verknüpfe ich eine Domain mit einer bestehenden Website?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
> - Um eine neue Website auf Ihrem Webhosting hinzuzufügen, konsultieren Sie bitte unsere Anleitung "[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

**Diese Anleitung erklärt, wie Sie die Zuordnungseinstellungen für Domainnamen oder Subdomain ändern, die bereits auf Ihrem Webhosting registriert ist.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie verwalten einen oder mehrere [Domainnamen](/links/web/domains).
- Sie verfügen über die erforderlichen Berechtigungen für alle betroffenen Dienste. Weitere Informationen finden Sie in unserer Anleitung "[Die Kontakte Ihrer Dienste verwalten](/pages/account_and_service_management/account_information/managing_contacts)".

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

> [!warning]
>
> Die Änderung der Zuordnungseinstellungen einer Domain oder Subdomain kann zu einer Unterbrechung des Zugangs zu Ihren Diensten (Ihrer Website) führen. Wenn Sie sich nicht sicher sind, welche Änderungen notwendig sind, wenden Sie sich an einen spezialisierten Dienstleister.

<!-- CP-STEPS-START:modify-domain-settings -->
Um die Zuordnungsparameter einer bereits deklarierten Domain oder Subdomain auf Ihrem Webhosting zu ändern, klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im angezeigten Tabelle klicken Sie auf den Button `>`{.action} links neben dem Namen der Website, um die zugehörigen Domainnamen oder Subdomains anzuzeigen.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Klicken Sie anschließend auf den Button `⁝`{.action} rechts neben dem gewünschten Domainnamen oder Subdomain und dann auf `Domain bearbeiten`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Das folgende Fenster wird angezeigt: 
>>
>> ![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled.png){.thumbnail}
>>
>> Im weiteren Verlauf dieser Anleitung finden Sie eine Beschreibung aller verfügbaren Parameter im obenstehenden Fenster. Nachdem Sie die verschiedenen Beschreibungen in der Abschnitt "[Beschreibung der änderbaren Parameter](#step1)" gelesen haben und Ihre Änderungen vorgenommen wurden, klicken Sie auf den Button `Weiter`{.action} unten rechts im Fenster, und wechseln Sie zur [Teil 2](#step2).
<!-- CP-STEPS-END:modify-domain-settings -->

### 1 - Beschreibung der bearbeitbaren Parameter <a name="step1"></a>

<!-- CP-STEPS-START:description-editable-parameters -->
> [!primary]
>
> Die Felder `Domainname`{.action} und `Wurzelverzeichnis`{.action} sind nicht änderbar, da es sich hierbei um Parameter handelt, die für die Website auf Ihrem Webhosting relevant sind.
>
> - Um eine neue Domain oder Subdomains mit einer Website auf Ihrem Webhosting zu verknüpfen, konsultieren Sie unsere Anleitung "[Wie verknüpfe ich eine Domain mit einer bestehenden Website?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
> - Um das Wurzelverzeichnis Ihrer Website zu ändern, konsultieren Sie unser Handbuch "[Wie ändere ich das Wurzelverzeichnis einer bestehenden Website?](/pages/web_cloud/web_hosting/my_websites_modify_root_folder)".

#### Die Option "CDN aktivieren"

Um diese Option nutzen zu können, müssen Sie zuerst ein CDN von OVHcloud abonniert haben oder über ein Performance Webhosting verfügen.

Aktivieren/deaktivieren Sie diese Option, um die CDN-Option für Ihren Domainnamen oder Ihre Subdomain zu aktivieren/deaktivieren.

Weitere Informationen zu den verfügbaren CDN-Optionen/-Angeboten finden Sie in unserer Dokumentation "[Ihre Webseiten mit CDN beschleunigen](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)".

#### Die Option "IP des Landes"

Diese Option wird hauptsächlich für Websites verwendet, deren Nutzer sich in einem anderen Land als das Hosting befinden. Es verbessert die SEO-Bewertung der Website im gewählten Land.

Weitere Informationen zu dieser Option finden Sie in unserer Dokumentation "[Geolokalisierung Ihrer Website in einem bestimmten Land](/pages/web_cloud/web_hosting/multisites_geolocation)".

#### Die Option "Firewall aktivieren"

Mit dieser Option können Sie eingehende Anfragen filtern, um Ihr Webhosting vor den häufigsten Angriffen zu schützen.

Weitere Informationen zu dieser Option finden Sie in unserer Dokumentation "[Aktivieren der Web Application Firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)".

#### Die Option "Getrennte Logs"

Aktivieren/deaktivieren Sie diese Option nur, wenn Sie die Logs Ihres Domainnamens von den anderen Domainnamen trennen möchten, die auf Ihrem Webhosting deklariert sind.

Weitere Informationen zu dieser Option finden Sie auf unserer [Seite zu detaillierten Statistiken](/links/web/hosting-traffic-analysis).

Nachdem Sie Ihre Änderungen vorgenommen haben, klicken Sie auf den Button `Weiter`{.action} unten rechts im Fenster, um zur [Teil 2](#step2) zu wechseln.


<!-- CP-STEPS-END:description-editable-parameters -->

### 2 - Zusammenfassung der Änderungen <a name="step2"></a>

<!-- CP-STEPS-START:confirm-domain-changes -->
Sobald Sie auf den Button `Weiter`{.action} geklickt haben, finden Sie eine Zusammenfassung der Einstellungen, die Sie für Ihren Domainnamen übernehmen möchten:

![Modify domain resume](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Wenn alle Einstellungen Ihren Wünschen entsprechen, klicken Sie auf `Bestätigen`{.action}.
<!-- CP-STEPS-END:confirm-domain-changes -->

Abhängig von den ausgewählten Optionen kann es einige Minuten bis zu einigen Stunden dauern, bis die Änderungen wirksam werden.

Wenn die Änderungen für die Optionen **CDN**, **IP des Landes** und **Getrennte Logs** nach 24 Stunden nicht wirksam werden, nutzen Sie die entsprechenden Wissensressourcen für alle Optionen in [Teil 1](#step1), um sicherzustellen, dass alle Anforderungen erfüllt wurden.

## Weiterführende Informationen

[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[SSL-Zertifikat auf einem Webhosting verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Ihre Webseiten mit CDN beschleunigen](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)

[Geolokalisierung Ihrer Website in einem bestimmten Land](/pages/web_cloud/web_hosting/multisites_geolocation)

[Aktivieren der Web Application Firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
