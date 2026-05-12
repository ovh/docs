---
title: "Wie kann ich einen Domainnamen von einer bestehenden Website trennen?"
excerpt: "Erfahren Sie, wie Sie einen Domainnamen oder eine Subdomain von einer bereits existierenden Website auf Ihrem Webhosting trennen können"
updated: 2026-05-04
---

## Ziel

Sie können mehrere Websites auf derselben Webhosting Angebot nutzen, selbst wenn die Domainnamen nicht bei OVHcloud registriert sind. Zudem können Sie einen oder mehrere Domainnamen oder Subdomains derselben Website zuordnen.

Möchten Sie einen Domainnamen oder eine Subdomain nicht länger für Ihre Website verwenden?  
Möchten Sie Ihren Domainnamen oder Ihre Subdomain einer anderen Website auf einem Ihrer Webhostings zuordnen?  

**Diese Anleitung erklärt, wie Sie einen Domainnamen oder eine Subdomain von einer bereits existierenden Website auf Ihrem Webhosting trennen können.**

## Voraussetzungen

- Sie haben ein kompatibles [OVHcloud Webhosting](/links/web/hosting-multisite).
- Sie verfügen über einen oder mehrere [Domainnamen](/links/web/domains).
- Sie haben die erforderlichen Berechtigungen zur Verwaltung der [DNS-Zonen Ihrer Domainnamen](/pages/web_cloud/domains/dns_zone_edit).

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
> Das Trennen eines Domainnamens oder einer Subdomain von einer Website auf Ihrem Webhosting ist eine sensible Aktion. Nach dieser Operation wird Ihre Website nicht mehr über das Internet mit Ihrem Domainnamen und/oder Subdomain zugänglich sein.

Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

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
>> Klicken Sie anschließend auf den Button `⁝`{.action} rechts neben dem gewünschten Domainnamen oder Subdomain und dann auf `Domain abtrennen`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Das neue Fenster fragt Sie nach der Bestätigung der Abtrennung des Domainnamens oder der Subdomain.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Abhängig von Ihrer Wahl, aktivieren oder deaktivieren Sie das Feld `Automatische Konfiguration (empfohlen)`{.action}, und klicken Sie auf `Bestätigen`{.action}, um Ihre Auswahl zu bestätigen.
>>
>> > ![!warning]
>> >
>> > **Besonderer Fall: Sie haben Git mit Ihrer Website verknüpft und nur ein Domainname ist an die Website angehängt**
>> >
>> > Falls dies der Fall ist, werden Sie das folgende Fenster sehen:
>> >
>> > ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>> >
>> > Wie die Nachricht angibt, müssen Sie Ihre [Git-Verknüpfung zuerst löschen](/pages/web_cloud/web_hosting/git_integration_webhosting), **bevor** Sie Ihren Domainnamen trennen.

### Besonderer Fall: Trennen eines Domainnamens oder einer Subdomain, um sie mit einer anderen Website zu verwenden

- Falls Sie Ihren Domainnamen oder Ihre Subdomain einer anderen bestehenden Website auf einem Webhosting hinzufügen möchten, konsultieren Sie [diese Anleitung](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).
- Falls Sie eine neue Website auf einem Webhosting mit Ihrem kürzlich getrennten Domainnamen oder Subdomain erstellen möchten, konsultieren Sie [diese Anleitung](/pages/web_cloud/web_hosting/multisites_configure_multisite).

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
