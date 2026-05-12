---
title: "Wie kann ich die Zuordnung von Domainnamen und Websites prüfen?"
excerpt: "Verwenden Sie unser Diagnose-Tool, um zu prüfen, ob Ihre Domain oder Subdomain korrekt mit Ihrer Website auf Ihrem Webhosting verknüpft ist"
updated: 2026-05-04
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

Sie können mehrere Webseiten auf derselben Webhosting Angebot nutzen, selbst wenn die Domains nicht bei OVHcloud registriert sind. Zudem können Sie eine oder mehrere Domains oder Subdomains derselben Website zuordnen.

**Verwenden Sie unser Diagnose-Tool, um zu prüfen, ob Ihre Domain oder Subdomain korrekt mit Ihrer Website auf Ihrem Webhosting verknüpft ist.**

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

### Zugriff auf das Diagnose-Tool

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
>> In der Tabelle klicken Sie auf den Button `>`{.action} links neben dem Namen der Website, um die zugehörigen Domainnamen oder Subdomain anzuzeigen.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Die Domains oder Subdomains, die mit Ihrer Website verknüpft sind, werden angezeigt. 
>>
>> ![Domains associated websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab-with-domains-associated-displayed.png){.thumbnail}
>>
>> Die Spalte `Diagnose` informiert Sie darüber, ob Ihre Domain korrekt auf das zugeordnete Webhosting verweist. Sie können unmittelbar sehen, ob die DNS-Konfiguration Ihrer Domain mit Ihrem Webhosting korrekt durchgeführt wurde. Somit hilft Ihnen diese Spalte, etwaige Probleme mit der Zuordnung zu identifizieren und zu beheben. Für jede Domain sind drei mögliche Diagnose-Ergebnisse möglich:
>>
>> - `A/AAAA` grün
>> - `A/AAAA` gelb
>> - `A/AAAA` grau
>>
>> Konsultieren Sie den Abschnitt "[Bedeutung der Farben des Diagnose-Tools](#interpretation)" in dieser Anleitung, um die Bedeutung dieser drei Farben zu verstehen.

### Bedeutung der Farben des Diagnose-Tools <a name="interpretation"></a>

**Klicken Sie auf das beobachtete Ergebnis unter den drei möglichen Ergebnissen unten, um die Erklärungen anzuzeigen.**

/// details | A/AAAA grün

![A and AAAA green](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-green-info.png){.thumbnail}

Wenn das Symbol `A/AAAA` in der Spalte `Diagnose` grün ist, bedeutet dies, dass der Eintrag **A** (für IPv4-Adressen) und/oder der Eintrag **AAAA** (für IPv6-Adressen) Ihrer Domain korrekt auf die IP-Adresse Ihres Webhostings verweist. Die DNS-Konfiguration Ihrer Domain ist somit für die Verwendung mit der Website Ihres Webhostings korrekt.

/// 

/// details | A/AAAA gelb

![A and AAAA yellow](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-yellow-info.png){.thumbnail}

Wenn das Symbol `A/AAAA` in der Spalte `Diagnose` gelb ist, bedeutet dies, dass der Eintrag **A** (IPv4) und/oder **AAAA** (IPv6) Ihrer Domain auf eine IP-Adresse verweist, die jedoch nicht die IP-Adresse des Webhostings ist, von dem aus Sie die Spalte `Diagnose` einsehen.

Um Probleme mit der DNS-Zuordnung Ihrer Domain zu beheben und sicherzustellen, dass diese korrekt auf das gewünschte Webhosting verweist, befolgen Sie die Schritte in unserer Anleitung "[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

/// 

/// details | A/AAAA grau

![A and AAAA grey](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-grey-info.png){.thumbnail}

Wenn das Symbol `A/AAAA` in der Spalte `Diagnose` grau ist, bedeutet dies, dass die Domain aktuell auf keine IP-Adresse verweist und weder ein Eintrag **A** (IPv4) noch **AAAA** (IPv6) für diese Domain konfiguriert ist.

Um die Einträge **A** und/oder **AAAA** hinzuzufügen und Ihre Domain korrekt zu konfigurieren, befolgen Sie die Schritte in unserer Anleitung "[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

///

## Weiterführende Informationen

[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

[Eine Website auf Ihrem Webhosting online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
