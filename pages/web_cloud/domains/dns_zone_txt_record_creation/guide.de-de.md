---
title: "DNS-TXT-Eintrag für einen Domainnamen hinzufügen"
excerpt: "Erfahren Sie hier, wie Sie einen DNS-Eintrag vom Typ TXT zu einer von OVHcloud verwalteten DNS-Zone für Ihre Domain hinzufügen"
updated: 2026-03-24
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

Müssen Sie einen Verifizierungs- oder Sicherheitsprozess für Ihren Domainnamen (Zuordnung von Diensten über ein Token zur Bestätigung, Verifizierungsschlüssel, etc.) mithilfe Ihrer DNS-Zone bestätigen? Sie möchten der DNS-Zone Ihrer Domain einen benutzerdefinierten Textwert hinzufügen?  
Erstellen Sie hierzu in der aktiven DNS-Zone Ihrer Domain einen DNS-Eintrag vom Typ TXT.

**Diese Anleitung erklärt, wie Sie einen DNS-Eintrag vom Typ TXT zu einer von OVHcloud verwalteten DNS-Zone für Ihre Domain hinzufügen.**

> [!primary]
>
> Befolgen Sie [diese Anleitung](/pages/web_cloud/domains/dns_zone_edit), um einen DNS-Eintrag vom Typ TXT einer OVHcloud DNS-Zone zu ändern oder zu löschen.

## Voraussetzungen

- Sie haben einen [Domainnamen](/links/web/domains).
- Sie nutzen eine diesem Domainnamen zugeordnete DNS-Zone bei OVHcloud.

<!-- CP-NAV-START:web-dns-zone -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [DNS-Zone](/links/control-panel/web-dns-zone)
- **Navigationspfad:** `Web Cloud`{.action} > `DNS-Zone`{.action} > Wählen Sie Ihren Domainnamen aus

---
<!-- CP-NAV-END:web-dns-zone -->

## In der praktischen Anwendung

> [!warning]
>
> Das Hinzufügen, Ändern oder Löschen von DNS-Einträgen in einer aktiven DNS-Zone kann zu Dienstunterbrechungen führen. Im Zweifelsfall wenden Sie sich an einen [spezialisierten Dienstleister](/links/partner).

### Einen DNS-Eintrag vom Typ TXT für eine Domain hinzufügen

Klicken Sie auf die Tabs, um die einzelnen **5** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf die Schaltfläche `Eintrag hinzufügen`{.action}.
>>
> **Schritt 3**
>>
>> Wählen Sie im angezeigten Fenster erweiterte Einträge vom Typ `TXT`{.action} aus.
>>
> **Schritt 4**
>>
>> Geben Sie im Feld `Wert *` die TXT-Zeichenfolge ein, die Sie hinzufügen möchten (zum Beispiel: `AbCdE-Value-of-TXT-fGhIjK`), und klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 5**
>>
>> Überprüfen Sie die Zusammenfassung, und klicken Sie auf `Bestätigen`{.action}. Es dauert bis zu **24** Stunden, bis die Änderung im DNS-Netzwerk voll wirksam ist.

/// details | Klicken Sie hier für weitere Informationen.

Lesen Sie unsere detaillierten Anleitungen:

- [Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)
- [Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)
- [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

///

### Einen DNS-Eintrag vom Typ TXT für die Subdomain einer Domain hinzufügen

Klicken Sie auf die Tabs, um die einzelnen **5** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf die Schaltfläche `Eintrag hinzufügen`{.action}.
>>
> **Schritt 3**
>>
>> Wählen Sie im angezeigten Fenster erweiterte Einträge vom Typ `TXT`{.action} aus.
>>
> **Schritt 4**
>>
>> Geben Sie im Feld `Subdomain` die betreffende Subdomain ein (zum Beispiel: `www` für die Subdomain `www.domain.tld`) und im Feld `Wert *` die hinzuzufügende TXT-Zeichenfolge (zum Beispiel: `AbCdE-Value-of-TXT-fGhIjK`). Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 5**
>>
>> Überprüfen Sie die Zusammenfassung, und klicken Sie auf `Bestätigen`{.action}. Es dauert bis zu **24** Stunden, bis die Änderung im DNS-Netzwerk voll wirksam ist.

/// details | Klicken Sie hier für weitere Informationen.

Lesen Sie unsere detaillierten Anleitungen:

- [Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)
- [Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)
- [Erstellung einer Subdomain](/pages/web_cloud/domains/domain_create_subdomains)
- [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

///

## Weiterführende Informationen

[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)

[Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
