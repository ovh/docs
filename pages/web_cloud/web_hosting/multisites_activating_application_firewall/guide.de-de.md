---
title: "Aktivieren der Web Application Firewall"
excerpt: "Aktivieren der Web Application Firewall"
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

*ModSecurity* ist ein zusätzliches Apache-Modul, das alle auf Ihrem Webserver eingehenden Anfragen filtert. Es erhöht die Sicherheit gegen bekannte Schwachstellen, indem es Anfragen abfängt und filtert, bevor sie von Skripten verbeitet werden.

Das vorkonfigurierte "Core Rule Set" (CRS) unserer *ModSecurity*, schützt Ihre Webseiten vor den häufigsten Angriffen, zum Beispiel:

- Trojaner
- E-Mail Injection
- Sicherheitslücken in PDF Dateien
- File Injections auf Ihrem Hosting
- SQL oder XSS Injection

**Diese Anleitung erklärt, wie Sie die Application Firewall in Ihrem OVHcloud Kundencenter aktivieren können, um eine verbesserte Schutzfunktion zu erhalten.**

> [!primary]
>
> Da sich Ihr Webhosting auf einer Shared Hosting Infrastruktur befindet, ist die Änderung der Firewall-Konfigurationseinstellungen nicht verfügbar.

## Voraussetzungen

- Sie haben ein [Webhosting](/links/web/hosting) in Ihrem OVHcloud Account.
- Sie verfügen über mindestens einen mit dem Hosting verbundenen [Domainnamen](/links/web/domains).

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

**Klicken Sie auf die Titel, um die Erklärungen anzuzeigen.**

/// details | Application Firewall für die gesamte Webhosting-Konfiguration in PHP aktivieren

Klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Im Feld **Konfiguration** finden Sie die Bezeichnung **Globale PHP-Version**.
>>
>> ![Global PHP version](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration.png){.thumbnail}
>>
>> Klicken Sie auf den Button `...`{.action} rechts neben **Globale PHP-Version** und anschließend auf `Konfiguration ändern`{.action}.
>>
> **Schritt 3**
>>
>> In dem sich öffnenden Fenster wählen Sie den Eintrag `Aktuelle Konfiguration ändern`{.action} aus und klicken Sie auf den Button `Weiter`{.action}.
>>
>> ![managephpconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/application-firewall-step-2.png){.thumbnail}
>>
>> Im neuen Fenster stellen Sie sicher, dass die Option **Application Firewall** auf `aktiviert`{.action} gesetzt ist. Klicken Sie anschließend auf den Button `Bestätigen`{.action}.

///

/// details | Application Firewall nur für einen bestimmten Domainnamen oder Subdomain aktivieren

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
>> Klicken Sie anschließend auf den Button `⁝`{.action} rechts neben dem gewünschten Domainnamen oder Subdomain und dann auf `Domain bearbeiten`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Im Konfigurationsfenster aktivieren Sie das Feld `Firewall aktivieren`{.action}. Sie können auch die Subdomain `www` in diese Konfiguration einbeziehen, indem Sie das entsprechende Feld oben ankreuzen (sofern diese ebenfalls auf der gleichen Website deklariert ist).
>>
>> ![Modify a domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-enable-firewall-step-1.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action} und anschließend auf `Bestätigen`{.action}, um die Änderung der Einstellungen zu bestätigen.
>>
>> Sobald die Firewall für Ihren Domainnamen oder Subdomain aktiviert ist, wird die Bezeichnung **Aktiviert** in der Spalte **Firewall** angezeigt.
>>
>> Falls die Bezeichnung **Aktiviert** nach einigen Minuten nicht in der entsprechenden Zeile des Domainnamens oder Subdomain angezeigt wird, laden Sie die Seite erneut.

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
