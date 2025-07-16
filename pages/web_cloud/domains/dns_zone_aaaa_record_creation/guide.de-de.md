---
title: "DNS-AAAA-Eintrag für einen Domainnamen hinzufügen"
excerpt: "Erfahren Sie hier, wie Sie einen DNS-Eintrag vom Typ AAAA zu einer von OVHcloud verwalteten DNS-Zone für Ihre Domain hinzufügen"
updated: 2025-05-15
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

Sie möchten Ihre Website über einen bestimmten Domainnamen erreichbar machen? Hierzu muss Ihr Domainname auf die IP-Adresse des Dienstes verweisen, auf dem sich Ihre Website befindet (Webhosting, Dedicated Server, VPS, etc.). Konfigurieren Sie hierzu die aktive DNS-Zone Ihrer Domain mit einem DNS-Eintrag vom Typ AAAA.

**Diese Anleitung erklärt, wie Sie einen DNS-Eintrag vom Typ AAAA zu einer von OVHcloud verwalteten DNS-Zone für Ihre Domain hinzufügen.**

> [!primary]
>
> Befolgen Sie [diese Anleitung](/pages/web_cloud/domains/dns_zone_edit), um einen DNS-Eintrag vom Typ AAAA einer OVHcloud DNS-Zone zu ändern oder zu löschen.

## Voraussetzungen

- Sie haben einen [Domainnamen](/links/web/domains).
- Sie nutzen eine diesem Domainnamen zugeordnete DNS-Zone bei OVHcloud.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager), im Bereich `Web Cloud`{.action}.

## In der praktischen Anwendung

> [!warning]
>
> Das Hinzufügen, Ändern oder Löschen von DNS-Einträgen in einer aktiven DNS-Zone kann zu Dienstunterbrechungen führen. Im Zweifelsfall wenden Sie sich an einen [spezialisierten Dienstleister](/links/partner).

### Einen DNS-Eintrag vom Typ AAAA für eine Domain hinzufügen

1. Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie den Domainnamen aus.
2. Klicken Sie auf der angezeigten Seite auf die Schaltfläche `Eintrag hinzufügen`{.action}.
3. Wählen Sie im angezeigten Fenster das Feld `AAAA`{.action} aus.
4. Geben Sie anschließend in das Feld `Ziel *` die IP-Adresse (zum Beispiel `2001:db8:1:1b00:203:0:113:0`) des Dienstes ein, auf dem sich Ihre Website befindet (Webhosting, Dedicated Server, VPS, etc.), und klicken Sie dann auf `Weiter`{.action}.
5. Überprüfen Sie die Zusammenfassung, und klicken Sie auf `Bestätigen`{.action}. Es dauert bis zu  **24** Stunden, bis die Änderung im DNS-Netzwerk voll wirksam ist.

/// details | Klicken Sie hier für weitere Informationen.

Lesen Sie unsere detaillierten Anleitungen:

- [Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)
- [Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)
- [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)
- [Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Webhosting - Ändern von mit einem Webhosting verbundenen Domainnamen](/pages/web_cloud/web_hosting/multisites_modify_domain)

///

### Einen DNS-Eintrag vom Typ AAAA für die Subdomain einer Domain hinzufügen

1. Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie den Domainnamen aus.
2. Klicken Sie auf der angezeigten Seite auf die Schaltfläche `Eintrag hinzufügen`{.action}.
3. Wählen Sie im angezeigten Fenster das Feld `AAAA`{.action} aus.
4. Geben Sie anschließend in das Feld `Subdomain` die betreffende Subdomain (zum Beispiel `www` für die Subdomain `www.domain.tld`) und im Feld `Ziel *` die IP-Adresse (zum Beispiel `2001:db8:1:1b00:203:0:113:0`) des Dienstes ein, auf dem sich Ihre Website befindet (Webhosting, Dedicated Server, VPS, etc.). Klicken Sie anschließend auf `Weiter`{.action}.
5. Überprüfen Sie die Zusammenfassung, und klicken Sie auf `Bestätigen`{.action}. Es dauert bis zu **24** Stunden, bis die Änderung im DNS-Netzwerk voll wirksam ist.

/// details | Klicken Sie hier für weitere Informationen.

Lesen Sie unsere detaillierten Anleitungen:

- [Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)
- [Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)
- [Erstellung einer Subdomain](/pages/web_cloud/domains/domain_create_subdomains)
- [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)
- [Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Webhosting - Ändern von mit einem Webhosting verbundenen Domainnamen](/pages/web_cloud/web_hosting/multisites_modify_domain)

///

## Weiterführende Informationen

[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information).

[Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.