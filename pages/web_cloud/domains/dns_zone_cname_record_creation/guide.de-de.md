---
title: "Hinzufügen eines CNAME DNS-Eintrags für eine Subdomain"
excerpt: "Erfahren Sie, wie Sie einen DNS-Eintrag vom Typ CNAME zu einer von OVHcloud verwalteten DNS-Zone für die Subdomain einer Domain hinzufügen"
updated: 2025-06-25
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

Mit einem CNAME-Eintrag können Sie eine Subdomain einem Domainnamen oder einer Subdomain zuordnen, ohne eine IP-Adresse angeben zu müssen. Das bedeutet, dass die Subdomain auf die IP-Adresse der Ziel-Domain bzw. Subdomain weitergeleitet wird, ohne dass eine zusätzliche Konfiguration erforderlich ist.

Wenn Sie beispielsweise einen CNAME-Eintrag für *www.domain.tld* erstellen, der auf *domain.tld* verweist, verwendet *www.domain.tld* dieselbe IP-Adresse wie *domain.tld*.

CNAME-Einträge sind nützlich, um zu vermeiden, dass die IP-Adressen für Ihre Subdomains geändert werden müssen. Sie können auch verwendet werden, um Dienste wie E-Mail-Server zu konfigurieren.

**Diese Anleitung erklärt, wie Sie einen CNAME-Eintrag in Ihre OVHcloud DNS-Zone eintragen.**

> **Sie haben bereits einen CNAME Eintrag in Ihrer DNS-Zone?** Folgen Sie unserer Anleitung "[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

## Voraussetzungen

- Sie haben einen [Domainnamen](/links/web/domains).
- Sie nutzen eine diesem Domainnamen zugeordnete DNS-Zone bei OVHcloud.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager), im Bereich `Web Cloud`{.action}.

> [!warning]
>
> **Das Hinzufügen, Ändern oder Löschen von DNS-Einträgen in einer aktiven DNS-Zone ist kritisch.**
> Im Zweifelsfall wenden Sie sich an einen [spezialisierten Dienstleister](/links/partner).

## In der praktischen Anwendung

### Einen CNAME DNS-Eintrag für die Subdomain einer Domain hinzufügen

1. Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie den Domainnamen aus.
2. Klicken Sie auf der angezeigten Seite auf die Schaltfläche `Eintrag hinzufügen`{.action}.
3. Wählen Sie im angezeigten Fenster das Feld `CNAME`{.action} aus.
4. Geben Sie anschließend im Feld `Subdomain` die betreffende Subdomain (zum Beispiel `www` für die Subdomain `www.domain.tld`) und im Feld `Ziel *` den Domainnamen oder die Subdomain (zum Beispiel `domain.tld`) ein, auf die Sie mit dem CNAME Eintrag zeigen möchten. Klicken Sie anschließend auf `Weiter`{.action}.
5. Überprüfen Sie die Zusammenfassung, und klicken Sie auf `Bestätigen`{.action}. Warten Sie bis zu **24** Stunden, bis die Propagation im DNS-Netzwerk voll wirksam ist.

/// details | Lesen Sie unsere detaillierten Anleitungen:

- [Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)
- [Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)
- [Erstellung einer Subdomain](/pages/web_cloud/domains/domain_create_subdomains)
- [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)
- [Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Webhosting - Ändern von mit einem Webhosting verbundenen Domainnamen](/pages/web_cloud/web_hosting/multisites_modify_domain)

///


### Sonderfälle

Klicken Sie auf die folgenden Links, um weitere Informationen zu erhalten:

/// details | CNAME- und TXT-Einträge für eine Subdomain

Konfigurieren Sie nicht gleichzeitig einen CNAME- und einen TXT-Eintrag für dieselbe Subdomain. Dies kann zu unvorhersehbaren Ergebnissen bei der DNS-Auflösung führen, da nur eine Antwort pro DNS-Abfrage zurückgegeben werden kann.

Beispiel: Für *www.domain.tld* stehen folgende Einträge zur Verfügung:

- Ein CNAME-Eintrag, der auf *domain.tld* verweist
- Ein TXT-Eintrag mit einem bestimmten Wert

Eine DNS-Abfrage für *www.domain.tld* gibt entweder das Ziel des CNAME-Eintrags oder den Wert des TXT-Eintrags zufällig zurück.

///

/// details | CNAME auf einer Domain in ihrer eigenen DNS-Zone

Gemäß der Konvention **können CNAME Einträge nicht für einen Domainnamen in seiner eigenen DNS-Zone verwendet werden**. Der Domainname muss nämlich direkt auf eine IP-Adresse mit einem Eintrag vom Typ [A](/pages/web_cloud/domains/dns_zone_a_record_creation) für eine IPv4 oder [AAAA](/pages/web_cloud/domains/dns_zone_aaaa_record_creation) für eine IPv6 verweisen.

Wie bereits erwähnt, können Sie in der DNS-Zone, die Sie für die Domain *domain.tld* erstellt haben, keinen CNAME-Eintrag für diese Domain erstellen.  
Sie können jedoch CNAME-Einträge für alle Subdomains (zum Beispiel: *subdomain.domain.tld* oder *www.domain.tld*) der Domain *domain.tld* in der für *domain.tld* erstellten DNS-Zone erstellen.

///

## Weiterführende Informationen
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.