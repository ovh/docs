---
title: "Wie kann ich einen Domainnamen von einer bestehenden Website trennen?"
excerpt: "Erfahren Sie, wie Sie einen Domainnamen oder eine Unterdomäne von einer bereits existierenden Website auf Ihrem Webhosting trennen können"
updated: 2025-11-27
---

## Ziel

Sie können mehrere Websites auf derselben Webhosting-Angebot nutzen, selbst wenn die Domainnamen nicht bei OVHcloud registriert sind. Zudem können Sie einen oder mehrere Domainnamen oder Unterdomänen derselben Website zuordnen.

Möchten Sie einen Domainnamen oder eine Unterdomäne nicht länger für Ihre Website verwenden?
Möchten Sie Ihren Domainnamen oder Ihre Unterdomäne einer anderen Website auf einem Ihrer Webhostings zuordnen?
Müssen Sie den Root-Ordner ändern, der mit Ihrer Website verknüpft ist, und eine neue Website auf Ihrem Webhosting erstellen?

**Erfahren Sie, wie Sie einen Domainnamen oder eine Unterdomäne von einer bereits existierenden Website auf Ihrem Webhosting trennen können.**

## Voraussetzungen

- Über ein kompatibles [OVHcloud Webhosting-Angebot](/links/web/hosting-multisite) verfügen.
- Über einen oder mehrere [Domainnamen](/links/web/domains) verfügen.
- Die Konfiguration Ihrer Domainnamen von deren [DNS-Zonen](/pages/web_cloud/domains/dns_zone_edit) ändern können.
- Angemeldet sein in Ihrem [OVHcloud Kundencenter](/links/manager), Bereich `Web Cloud`{.action}.

## In der praktischen Anwendung

> [!warning]
>
> Das Trennen eines Domainnamens oder einer Unterdomäne von einer Website auf Ihrem Webhosting ist eine sensible Aktion. Nach dieser Operation wird Ihre Website nicht mehr über das Internet mit Ihrem Domainnamen und/oder Unterdomäne zugänglich sein.

Klicken Sie auf die nachfolgenden Tabs, um die **5** Schritte anzuzeigen.

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
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Im angezeigten Tabelle klicken Sie auf den Button `>`{.action} links neben dem Namen der Website, um die zugehörigen Domainnamen oder Subdomains anzuzeigen.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Klicken Sie anschließend auf den Button `⁝`{.action} rechts neben dem gewünschten Domainnamen oder Subdomain und dann auf `Domain abtrennen`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Das sich öffnende Fenster fragt Sie nach der Bestätigung des Trennens des Domainnamens oder der Unterdomäne.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Abhängig von Ihrer Wahl, aktivieren oder deaktivieren Sie das Feld `Automatische Konfiguration (empfohlen)`{.action}, und klicken Sie auf `Bestätigen`{.action}, um Ihre Auswahl zu bestätigen.
>>
>> > ![!warning]
>> >
>> > **Besonderer Fall: Sie haben Git auf Ihrer Website verknüpft und nur ein Domainname ist an die Website angehängt**
>> >
>> > Falls dies der Fall ist, werden Sie das folgende Fenster sehen:
>> >
>> > ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>> >
>> > Wie die Nachricht angibt, müssen Sie Ihre [Git-Verknüpfung zuerst löschen](/pages/web_cloud/web_hosting/git_integration_webhosting), **vor** Sie Ihren Domainnamen trennen.

### Besonderer Fall: Trennen eines Domainnamens oder einer Unterdomäne, um sie mit einer anderen Website zu verwenden

- Falls Sie Ihren Domainnamen oder Ihre Unterdomäne einer anderen bestehenden Website auf einem Webhosting hinzufügen möchten, konsultieren Sie [dieses Handbuch](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).
- Falls Sie eine neue Website auf einem Webhosting mit Ihrem kürzlich getrennten Domainnamen oder Unterdomäne erstellen möchten, konsultieren Sie [dieses Handbuch](/pages/web_cloud/web_hosting/multisites_configure_multisite).

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.