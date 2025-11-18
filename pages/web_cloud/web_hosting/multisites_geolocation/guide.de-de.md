---
title: "Wie kann ich eine Website in einem bestimmten Land geolokalisieren?"
excerpt: "So lokalisieren Sie Ihre Website mithilfe der geolokalisierten IP-Adressen, die für die Shared Hosting Angebote von OVHcloud verfügbar sind"
updated: 2025-08-22
---

## Ziel

Suchmaschinen (Google, Bing, Yahoo, etc.) setzen Robots ein, um Websiten zu indexieren und Rankings zu erstellen. Bei den Suchergebnissen werden Seiten, die in dem Land von dem aus die Suche erfolgt, geolokalisiert sind, bevorzugt.

**Beispiel**: Wenn Sie über eine Suchmaschine suchen und sich in England befinden, werden in England geolokalisierte Websites in den Suchergebnissen priorisiert angezeigt.

Diese Geolokalisierung basiert auf der IP-Adresse des Hostings, auf dem sich Ihre Website befindet.

Die Geolokalisierungsoption für Ihr Webhosting kann für die Suchmaschinenoptimierung (SEO) nützlich sein, wenn Ihre Website hauptsächlich in einem anderen Land als dem Ihres Webhostings aufgerufen wird.

**Diese Anleitung erklärt, wie Sie Ihre Website mithilfe unserer Länder-IP-Adressen geolokalisieren.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben ein [OVHcloud Webhosting](/links/web/hosting) in Ihrem Kunden-Account.
- Sie verfügen über einen [Domainnamen](/links/web/domains).

## In der praktischen Anwendung

Für Webseiten, die hauptsächlich international abgerufen und auf der OVHcloud Shared Hosting Infrastruktur gehostet werden, bieten wir eine Geolokalisierungsoption nach IP-Adresse an. Sie ermöglicht eine bessere Referenzierung der Websites in dem Land, zu dem die ausgewählte IP-Adresse gehört.

Um die IP-Geolokalisierungsoption zu aktivieren, klicken Sie auf die folgenden Registerkarten, um die einzelnen **5** Schritte anzuzeigen.

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
>> Klicken Sie auf den Tab `Multisite`{.action}.
>>
>> ![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/multisite.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Auf der neuen Seite wird eine Tabelle mit den zugehörigen Domainnamen angezeigt.
>>
>> ![hosting multisites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain.png){.thumbnail}
>>
>> Klicken Sie auf den Button `...`{.action} rechts neben Ihrem Domainnamen in der Tabelle. Klicken Sie auf `Domain bearbeiten`{.action}.
>>
> **Schritt 5**
>>
>> Setzen Sie im neu geöffneten Fenster einen Haken im Feld `IP des Landes`{.action}, um das Drop-down-Menü zu öffnen.
>>
>> ![geolocation option](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/country-ip-selection.png){.thumbnail}
>>
>> Wählen Sie aus den 12 angebotenen Ländern die IP-Adresse des Landes aus, für das Sie Ihre Website geolokalisieren möchten: *Tschechische Republik, Finnland, Frankreich, Deutschland, Irland, Italien, Litauen, Niederlande, Polen, Portugal, Spanien, Vereinigtes Königreich*.
>>
>> Klicken Sie auf `Weiter`{.action} und im nächsten Fenster auf `Bestätigen`{.action}.

> [!primary]
>
> Wenn die aktive DNS-Zone Ihrer Domain vollständig in Ihrem [OVHcloud Kundencenter](/links/manager) verwaltet wird, ändert sich der A-Eintrag in der DNS-Zone Ihrer Domain automatisch. Um zu überprüfen, ob die IP-Adresse korrekt aktualisiert wurde, lesen Sie unsere Anleitung zur [Bearbeitung der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit).
>
> Ist das nicht der Fall, müssen Sie die Änderung manuell beim Anbieter vornehmen, der die aktive DNS-Zone Ihres Domainnamens verwaltet. [Hier](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) finden Sie die Dokumentation, in der alle IP-Adressen der OVHcloud Shared Hosting Infrastruktur aufgeführt sind.
>
> In beiden Fällen ist eine Propagationszeit von **4 bis 24 Stunden** nach der Änderung erforderlich, damit die Änderung im Internet voll wirksam und sichtbar ist.
>

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.