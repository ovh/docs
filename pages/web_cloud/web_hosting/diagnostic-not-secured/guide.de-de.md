---
title: Was tun bei dem Fehler "Dies ist keine sichere Verbindung"?
excerpt: Erfahren Sie hier, wie Sie bei sicherheitsrelevanten Fehlermeldungen auf Ihrer Website vorgehen
updated: 2026-03-31
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

## Ziel <a name="objective"></a>

Es können verschiedene Fehlermeldungen auftreten, wenn Ihre Website nicht erreichbar ist. Die nachfolgenden Beispiele zeigen an, dass Ihr Webhosting kein [SSL-Zertifikat](/pages/web_cloud/web_hosting/ssl_on_webhosting) enthält (wenn Ihre Website keine der in dieser Anleitung beschriebenen Fehlermeldungen anzeigt, gehen Sie zum Abschnitt ["Weiterführende Informationen"](#go-further) in dieser Anleitung):

|Browser|Betreffende Fehlermeldung|
|-|---|
|Chrome:<br>"Dies ist keine sichere Verbindung"|![notsecured_chrome](/pages/assets/screens/other/browsers/errors/notsecured-chrome.png){.thumbnail}|
|Firefox:<br>"Warnung: Mögliches Sicherheitsrisiko erkannt"|![notsecured_firefox](/pages/assets/screens/other/browsers/errors/notsecured-firefox.png){.thumbnail}|
|Edge:<br>"Ihre Verbindung ist nicht privat"|![notsecured_edge](/pages/assets/screens/other/browsers/errors/notsecured-edge.png){.thumbnail}|
|Safari:<br>"Diese Verbindung ist nicht privat"|![notsecured_safari](/pages/assets/screens/other/browsers/errors/notsecured-safari.png){.thumbnail}|

**Diese Anleitung erklärt, wie Sie Fehler der Art "Keine sichere Verbindung" beheben.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie haben die Berechtigung zur Verwaltung der [DNS-Server](/pages/web_cloud/domains/dns_server_general_information) und der [DNS-Zone](/pages/web_cloud/domains/dns_zone_general_information) Ihrer Domain.

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

Um die Problemursache zu beheben müssen Sie:

1. Das korrekte Hosting identifizieren, mit dem Ihre Domain verbunden ist.
2. Auf dem betreffenden Hosting ein [SSL-Zertifikat](/pages/web_cloud/web_hosting/ssl_on_webhosting) für Ihre Domain erstellen, aktivieren oder verlängern.

### 1 - Überprüfen des Webhostings der betroffenen Domain

#### Die IP-Adresse des Hostings überprüfen

Die [oben](#objective) genannten Fehlermeldungen bedeuten nicht unbedingt, dass Ihre Website auf einem unserer [Web Cloud Angebote](/links/web/hosting) gehostet wird. Überprüfen Sie daher die IP-Adresse des Servers, auf den Ihr [Domainname](/links/web/domains) verweist.

Um die IP-Adresse Ihres [OVHcloud Webhostings](/links/web/hosting) herauszufinden, klicken Sie auf die Tabs, um die **2** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Hosting-Pakete Seite](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Im Feld **Allgemeine Informationen** finden Sie die Adressen unter **IPv4** und **IPv6**.
>>
>> ![IPv4- und IPv6-Adressen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Notieren Sie die IPv4- und/oder IPv6-Adresse und folgen Sie der Anleitung weiter.

#### IP-Adresse in der DNS-Zone überprüfen

Überprüfen Sie nun, ob die in der [DNS-Zone](/pages/web_cloud/domains/dns_zone_edit) hinterlegte IP-Adresse der Adresse Ihres [Webhostings](/links/web/hosting) entspricht.

Klicken Sie auf die Tabs, um die **2** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den Domainnamen aus.
>>
>> ![DNS-Zone Seite](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Notieren Sie das "Ziel" des Eintrags vom Typ `A` Ihres Domainnamens:
>>
>> ![A-Eintrag Ziel in der DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

#### Die notwendigen Aktionen durchführen

**Klicken Sie auf das Szenario, das Ihrer Situation entspricht, um den Inhalt anzuzeigen.**

/// details | Die IP-Adresse entspricht der IP-Adresse Ihres Webhostings

Die in der [DNS-Zone](/pages/web_cloud/domains/dns_zone_edit) gelistete IP-Adresse entspricht der IP-Adresse Ihres Webhostings. Gehen Sie zu [Teil 2](#step2).

///

/// details | Die IP-Adresse betrifft keines der Webhostings in Ihrem Account, erscheint aber in der Adressliste unserer Web Server

Die in der Zone angegebene IP-Adresse betrifft keines der Webhostings in Ihrem [OVHcloud Kundencenter](/links/manager), aber erscheint in der [Adressliste unserer Web Server](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

Überprüfen Sie, ob die betreffende IP-Adresse zu einem Ihrer Webhostings in einem anderen [OVHcloud Kunden-Account](/links/manager) gehört, falls Sie mehrere haben. Falls nötig kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](/links/partner).

///

/// details | Die IP-Adresse ist nicht die Ihres Webhostings und erscheint nicht in der Adressliste unserer Web Server

Die in der Zone eingetragene IP-Adresse ist nicht die Ihres Webhostings und erscheint auch nicht in der [Adressliste unserer Web Server](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

Kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](/links/partner) für mehr Informationen.

///

/// details | Ihre Domain verwendet andere OVHcloud DNS-Server (ns?.ovh.net / dns?.ovh.net)

Über der DNS-Zone in Ihrem OVHcloud Kundencenter gibt ein Warnhinweis an, dass Ihre Domain andere [DNS-Server](/pages/web_cloud/domains/dns_zone_edit) verwendet. Diese werden in der Form "ns **?** .ovh.net" oder "dns **?** .ovh.net" angezeigt ("**?**" zu ersetzen mit der entsprechenden DNS-Servernummer):

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Sie müssen die DNS-Server Ihrer Domain bearbeiten, damit sie mit den `NS`-Einträgen der DNS-Zone übereinstimmen. Befolgen Sie hierzu die Anweisungen in [dieser Anleitung](/pages/web_cloud/domains/dns_server_edit).

///

/// details | Ihre Domain verwendet externe (nicht OVHcloud) DNS-Server

Über der DNS-Zone in Ihrem OVHcloud Kundencenter gibt eine Nachricht an, dass Ihre Domain andere [DNS-Server](/pages/web_cloud/domains/dns_zone_edit) verwendet, die nicht dem Format "ns **?** .ovh.net" oder "dns **?** .ovh.net" entsprechen:

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

Kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](/links/partner) für mehr Informationen.

///

/// details | Ihre Domain ist nicht in Ihrem OVHcloud Kundencenter aufgelistet

Ihre Domain erscheint nicht auf der Seite [Domainnamen](/links/control-panel/web-domains) in Ihrem OVHcloud Kundencenter.

Das bedeutet, dass dieser Domainname nicht in diesem [OVHcloud Kunden-Account](/links/manager) verwaltet wird.

Überprüfen Sie, ob er zu einem Ihrer anderen [OVHcloud Kunden-Accounts](/links/manager) gehört, falls Sie mehrere davon erstellt haben.

Sie können auch, um den Registrar Ihres Domainnamens herauszufinden sowie die tatsächlich verwendeten DNS-Server zu überprüfen, das [WHOIS Tool](/links/web/domains-whois) verwenden.

Falls nötig kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](/links/partner).

///

### 2 - Das SSL-Zertifikat Ihres Hostings überprüfen <a name="step2"></a>

Klicken Sie auf die Tabs, um die **2** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Hosting-Pakete Seite](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Überprüfen Sie im Tab `Allgemeine Informationen`{.action} den Abschnitt `SSL-Zertifikat`:
>>
>> ![SSL-Zertifikat im Tab Allgemeine Informationen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/no-ssl-certificate.png){.thumbnail}

#### Szenario 1: Ihr Hosting enthält kein SSL-Zertifikat

Aktivieren Sie ein [SSL-Zertifikat](/links/web/hosting-options-ssl) auf Ihrem Webhosting gemäß dieser [Anleitung](/pages/web_cloud/web_hosting/ssl_on_webhosting).

#### Szenario 2: Das SSL-Zertifikat Ihres Hostings funktioniert nicht

Wenn Sie ein **"Let's Encrypt" SSL-Zertifikat** generiert haben, aktivieren Sie die SSL-Option Ihres Hosting-Pakets, indem Sie die Anweisungen in [dieser Anleitung](/pages/web_cloud/web_hosting/ssl_on_webhosting) befolgen.

Wenn Sie über ein **importiertes SSL-Zertifikat** verfügen und es nicht funktioniert, kontaktieren Sie den entsprechenden Anbieter.

Wenn Sie eines der **kostenpflichtigen SSL-Zertifikate** unseres Partners [SECTIGO](https://sectigo.com/) bestellt haben, überprüfen Sie, ob Sie eine E-Mail zur Verlängerung erhalten haben.
<br>Falls nötig kontaktieren Sie den [SECTIGO Support](https://sectigo.com/support).

> [!primary]
>
> Um alle von unseren Diensten versendeten E-Mails einzusehen, gehen Sie auf die Seite [Meine Kommunikation](/links/control-panel/account-messages).

## Weiterführende Informationen <a name="go-further"></a>

[SSL-Zertifikat auf einem Webhosting verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Website mit SSL-Zertifikat auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Fehler "Seite nicht installiert" beheben](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Beheben des Fehlers "500 Internal Server Error"](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Die häufigsten Fehler bei 1-Klick-Modulen beheben](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
