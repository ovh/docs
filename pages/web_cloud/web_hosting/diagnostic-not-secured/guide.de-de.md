---
title: Was tun bei dem Fehler "Dies ist keine sichere Verbindung"?
excerpt: Erfahren Sie hier, wie Sie bei sicherheitsrelevanten Fehlermeldungen auf Ihrer Website vorgehen
updated: 2021-07-08
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel  <a name="objective"></a>

Es können verschiedene Fehlermeldungen auftreten, wenn Ihre Website nicht erreichbar ist. Die nachfolgenden Beispiele zeigen an, dass Ihr Webhosting kein [SSL-Zertifikat](/pages/web_cloud/web_hosting/ssl_on_webhosting) enthält (wenn Ihre Website keine der in dieser Anleitung beschriebenen Fehlermeldungen anzeigt, gehen Sie zum Abschnitt [“Weiterführende Informationen“](#go-further) in dieser Anleitung): 

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

- Sie haben die Berechtigung zur Verwaltung der [DNS Server](/pages/web_cloud/domains/dns_server_general_information) und der [DNS Zone](/pages/web_cloud/domains/dns_zone_general_information) Ihrer Domain
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

Um die Problemursache zu beheben müssen Sie:

1. Das korrekte Hosting identifizieren, mit dem Ihre Domain verbunden ist.
2. Auf dem betreffenden Hosting ein [SSL-Zertifikat](/pages/web_cloud/web_hosting/ssl_on_webhosting) für Ihre Domain erstellen, aktivieren oder verlängern.

### Schritt 1: Überprüfen des Webhostings der betroffenen Domain

#### Die IP-Adresse des Hostings überprüfen

Die [oben](#objective) genannten Fehlermeldungen bedeuten nicht unbedingt, dass Ihre Website auf einem unserer [Web Cloud Angebote](/links/web/hosting) gehostet wird. Überprüfen Sie daher die IP-Adresse des Servers, auf den Ihr [Domainname](/links/web/domains) verweist.

Um die IP-Adresse Ihres [OVHcloud Webhostings](/links/web/hosting) herauszufinden, gehen Sie in Ihrem [OVHcloud Kundencenter](/links/manager) zu `Web Cloud`{.action} und wählen Sie das betreffende Hosting unter `Hosting-Pakete`{.action} aus.

Im Tab `Allgemeine Informationen`{.action} wird Ihnen die IPv4- und IPv6-Adresse Ihres Hostings angezeigt.

![hosting-general-informations](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}

#### IP-Adresse in der DNS Zone überprüfen

Überprüfen Sie nun, ob die in der [DNS Zone](/pages/web_cloud/domains/dns_zone_edit) hinterlegte IP-Adresse der Adresse Ihres [Webhostings](/links/web/hosting) entspricht.

Loggen Sie Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und  und wählen Sie den Domainnamen Ihrer Website unter `Domainnamen`{.action} aus.

Wechseln Sie zum Tab `DNS-Zone`{.action} aus und notieren Sie das "Ziel" des Eintrags vom Typ `A` Ihres Domainnamens:

![zone-dns-ip](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

#### Die notwendigen Aktionen durchführen

|Szenario|Nächster Schritt|
|---|---|
|Die in der [DNS-Zone](/pages/web_cloud/domains/dns_zone_edit) gelistete IP-Adresse entspricht der IP-Adresse Ihres Webhostings.|Fortfahren mit [Schritt 2](#step2)|
|Die in der Zone angegebene IP-Adresse betrifft keines der Webhostings in Ihrem [OVHcloud Kundencenter](/links/manager), aber erscheint in der [Adressliste unserer Web Server](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).|Überprüfen Sie, ob die betreffende IP Adresse zu einem Ihrer Webhostings in einem anderen [OVHcloud Kunden-Account](/links/manager) gehört, falls Sie mehrere haben. Für mehr Informationen kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](/links/partner).|
|Die in der Zone eingertragene IP-Adresse ist nicht die Ihres Webhostings und erscheint auch nicht in der [Adressliste unserer Web Server](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).|Kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](/links/partner) für mehr Informationen.|
|Im Tab `DNS-Zone`{.action} gibt ein Warnhinweis an, dass Ihre Domain andere [DNS-Server](/pages/web_cloud/domains/dns_zone_edit) verwendet. Diese werden in der Form "ns **?** .ovh.net" oder "dns **?** .ovh.net" angezeigt ("**?**" zu ersetzen mit der entsprechenden DNS-Servernummer):<br><br>![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Sie müssen die DNS-Server Ihrer Domain bearbeiten, damit sie mit den `NS`-Einträgen der DNS-Zone übereinstimmen. Befolgen Sie hierzu die Anweisungen in [dieser Anleitung](/pages/web_cloud/domains/dns_server_edit).|
|Im Tab `DNS-Zone`{.action} gibt eine Nachricht an, dass Ihre Domain andere [DNS-Server](/pages/web_cloud/domains/dns_zone_edit) verwendet, die nicht dem Format "ns **?** .ovh.net" oder "dns **?** .ovh.net" entsprechen :<br><br>![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}|Kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](/links/partner) für mehr Informationen.|
|Ihre Domain ist nicht im Bereich `Domainnamen`{.action} im [OVHcloud Kundencenter](/links/manager) aufgelistet.<br><br>Oder der Tab `DNS-Zone`{.action} Ihrer Domainname erscheint wie folgt:<br><br>![dns](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}|Das bedeutet, dass dieser Domainname nicht in diesem [OVHcloud Kunden-Account](/links/manager) verwaltet wird.<br><br>Überprüfen Sie, ob er zu einem Ihrer anderen [OVHcloud Kunden-Accounts](/links/manager) gehört, falls Sie mehrere davon erstellt haben.<br><br>Sie können auch, um den Registrar Ihres Domainnamens herauszufinden sowie die tatsächlich verwendeten DNS-Server zu überprüfen, das [WHOIS Tool](https://www.ovh.de/support/werkzeuge/check_whois.pl) verwenden.<br><br>Falls nötig kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](/links/partner).|

### Schritt 2: Das SSL-Zertifikat Ihres Hostings überprüfen <a name="step2"></a>

Überprüfen Sie im Tab `Allgemeine Informationen`{.action} Ihres OVHcloud Hostings den Abschnitt `SSL-Zertifikat`:

![ssl-certificate-in-general-tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/no-ssl-certificate.png){.thumbnail}

#### Szenario 1: Ihr Hosting enthält kein SSL-Zertifikat

Aktivieren Sie ein [SSL-Zertifikat](https://www.ovh.de/ssl/) auf Ihrem Webhosting gemäß den Anweisungen in dieser [Anleitung](/pages/web_cloud/web_hosting/ssl_on_webhosting).

#### Szenario 2: Das SSL-Zertifikat Ihres Hostings funktioniert nicht

Wenn Sie ein **"Let's Encrypt" SSL-Zertifikat** erstellt haben, aktivieren Sie die SSL-Option unter `Multisite`{.action} Ihres Hostings gemäß den Anweisungen in dieser [Anleitung](/pages/web_cloud/web_hosting/ssl_on_webhosting#ssl-zertifikat-fur-eine-multisite-aktivieren).

Wenn Sie eines der **kostenpflichtigen SSL-Zertifikate** unseres Partners [SECTIGO](https://sectigo.com/){.external} bestellt haben, kontaktieren Sie den [SECTIGO Support](https://sectigo.com/support){.external}.

Wenn Sie über ein **importiertes SSL-Zertifikat** verfügen, kontaktieren Sie den entsprechenden Anbieter.

>[!primary]
>
> Um alle von unseren Diensten versendeten E-Mails einzusehen, klicken Sie oben rechts in Ihrem [OVHcloud Kundencenter](/links/manager) und dann auf `E-Mails von OVHcloud`{.action}:
>
>![right-menu-email-button](/pages/assets/screens/control_panel/product-selection/right-column/right-menu-email-button.png){.thumbnail}
>

## Weiterführende Informationen <a name="go-further"></a>

[SSL-Zertifikat auf einem Webhosting verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Website mit SSL-Zertifikat auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Fehler "Seite nicht installiert" beheben](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Beheben des Fehlers "500 Internal Server Error"](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Die häufigsten Fehler bei 1-Klick-Modulen beheben](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.