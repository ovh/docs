---
title: "Wie kann ich eine Website in einem bestimmten Land geolokalisieren?"
excerpt: "So lokalisieren Sie Ihre Website mithilfe der geolokalisierten IP-Adressen, die für die Shared Hosting Angebote von OVHcloud verfügbar sind"
updated: 2026-05-04
---

## Ziel

Suchmaschinen (Google, Bing, Yahoo, etc.) setzen Robots ein, um Websiten zu indexieren und Rankings zu erstellen. Bei den Suchergebnissen werden Seiten, die in dem Land von dem aus die Suche erfolgt, geolokalisiert sind, bevorzugt.

**Beispiel**: Wenn Sie über eine Suchmaschine suchen und sich in England befinden, werden in England geolokalisierte Websites in den Suchergebnissen priorisiert angezeigt.

Diese Geolokalisierung basiert auf der IP-Adresse des Hostings, auf dem sich Ihre Website befindet.

Die Geolokalisierungsoption für Ihr Webhosting kann für die Suchmaschinenoptimierung (SEO) nützlich sein, wenn Ihre Website hauptsächlich in einem anderen Land als dem Ihres Webhostings aufgerufen wird.

**Diese Anleitung erklärt, wie Sie Ihre Website mithilfe unserer Länder-IP-Adressen geolokalisieren.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting) in Ihrem Kunden-Account.
- Sie verfügen über einen [Domainnamen](/links/web/domains).

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

Für Webseiten, die hauptsächlich international abgerufen und auf der OVHcloud Shared Hosting Infrastruktur gehostet werden, bieten wir eine Geolokalisierungsoption nach IP-Adresse an. Sie ermöglicht eine bessere Referenzierung der Websites in dem Land, zu dem die ausgewählte IP-Adresse gehört.

<!-- CP-STEPS-START:configure-geolocation -->
Um die IP-Geolokalisierungsoption zu aktivieren, klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

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
>> Setzen Sie im neu geöffneten Fenster einen Haken im Feld `IP des Landes`{.action}, um das Drop-down-Menü zu öffnen.
>>
>> ![geolocation option](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/country-ip-selection.png){.thumbnail}
>>
>> Wählen Sie aus den 12 angebotenen Ländern die IP-Adresse des Landes aus, für das Sie Ihre Website geolokalisieren möchten: *Tschechische Republik, Finnland, Frankreich, Deutschland, Irland, Italien, Litauen, Niederlande, Polen, Portugal, Spanien, Vereinigtes Königreich*.
>>
>> Klicken Sie auf `Weiter`{.action} und im nächsten Fenster auf `Bestätigen`{.action}.
<!-- CP-STEPS-END:configure-geolocation -->

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
