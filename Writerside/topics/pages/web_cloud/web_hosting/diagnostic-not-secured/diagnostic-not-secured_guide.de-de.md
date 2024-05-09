---
title: Was tun bei dem Fehler "Dies ist keine sichere Verbindung"?
excerpt: Erfahren Sie hier, wie Sie bei sicherheitsrelevanten Fehlermeldungen auf Ihrer Website vorgehen
updated: 2021-07-08
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel  <a name="objective"></a>

Es können verschiedene Fehlermeldungen auftreten, wenn Ihre Website nicht erreichbar ist. Die nachfolgenden Beispiele zeigen an, dass Ihr Webhosting kein [SSL-Zertifikat](ssl_on_webhosting1.) enthält (wenn Ihre Website keine der in dieser Anleitung beschriebenen Fehlermeldungen anzeigt, gehen Sie zum Abschnitt [“Weiterführende Informationen“](diagnostic-not-secured_#go-further.) in dieser Anleitung): 

|Browser|Betreffende Fehlermeldung|
|-|---|
|Chrome:<br>"Dies ist keine sichere Verbindung"|![notsecured_chrome](notsecured-chrome.png){.thumbnail}|
|Firefox:<br>"Warnung: Mögliches Sicherheitsrisiko erkannt"|![notsecured_firefox](notsecured-firefox.png){.thumbnail}|
|Edge:<br>"Ihre Verbindung ist nicht privat"|![notsecured_edge](notsecured-edge.png){.thumbnail}|
|Safari:<br>"Diese Verbindung ist nicht privat"|![notsecured_safari](notsecured-safari.png){.thumbnail}|

**Diese Anleitung erklärt, wie Sie Fehler der Art "Keine sichere Verbindung" beheben.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](partner.) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](diagnostic-not-secured_#go-further.).
>

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](manager.) mit den erforderlichen Berechtigungen zum Verwalten der Domain bzw. der [DNS-Zone](dns_zone_edit#dns-konzept-verstehen.) sowie der DNS-Server.

## In der praktischen Anwendung

Um die Problemursache zu beheben müssen Sie:

1. das korrekte Hosting identifizieren, mit dem Ihre Domain verbunden ist.
2. auf dem betreffenden Hosting ein [SSL-Zertifikat](ssl_on_webhosting1.) für Ihre Domain erstellen, aktivieren oder verlängern.

### Schritt 1: Überprüfen des Webhostings der betroffenen Domain

#### Die IP-Adresse des Hostings überprüfen

Die [oben](#objective.) genannten Fehlermeldungen bedeuten nicht unbedingt, dass Ihre Website auf einem unserer [Web Cloud Angebote](hosting.) gehostet wird. Überprüfen Sie daher die IP-Adresse des Servers, auf den Ihr [Domainname](domains.) verweist.

Um die IP-Adresse Ihres [OVHcloud Webhostings](hosting.) herauszufinden, gehen Sie in Ihrem [OVHcloud Kundencenter](manager.) zu `Web Cloud`{.action} und wählen Sie das betreffende Hosting unter `Hosting-Pakete`{.action} aus.

Im Tab `Allgemeine Informationen`{.action} wird Ihnen die IPv4- und IPv6-Adresse Ihres Hostings angezeigt.

![hosting-general-informations](find-ipv4-and-ipv6.png){.thumbnail}

#### IP-Adresse in der DNS Zone überprüfen

Überprüfen Sie nun, ob die in der [DNS Zone](dns_zone_edit#dns-konzept-verstehen.) hinterlegte IP-Adresse der Adresse Ihres [Webhostings](hosting.) entspricht.

Loggen Sie Sie sich in Ihrem [OVHcloud Kundencenter](manager.) ein und  und wählen Sie den Domainnamen Ihrer Website unter `Domainnamen`{.action} aus.

Wechseln Sie zum Tab `DNS-Zone`{.action} aus und notieren Sie das "Ziel" des Eintrags vom Typ `A` Ihres Domainnamens:

![zone-dns-ip](dashboard-entry-a.png){.thumbnail}

#### Die notwendigen Aktionen durchführen

|Szenario|Nächster Schritt|
|---|---|
|Die in der [DNS-Zone](dns_zone_edit1.) gelistete IP-Adresse entspricht der IP-Adresse Ihres Webhostings.|Fortfahren mit [Schritt 2](diagnostic-not-secured_#step2.)|
|Die in der Zone angegebene IP-Adresse betrifft keines der Webhostings in Ihrem [OVHcloud Kundencenter](manager.), aber erscheint in der [Adressliste unserer Web Server](clusters_and_shared_hosting_IP1.).|Überprüfen Sie, ob die betreffende IP Adresse zu einem Ihrer Webhostings in einem anderen [OVHcloud Kundenaccount](manager.) gehört, falls Sie mehrere haben. Für mehr Informationen kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](partner.).|
|Die in der Zone eingertragene IP-Adresse ist nicht die Ihres Webhostings und erscheint auch nicht in der [Adressliste unserer Web Server](clusters_and_shared_hosting_IP1.).|Kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](partner.) für mehr Informationen.|
|Im Tab `DNS-Zone`{.action} gibt ein Warnhinweis an, dass Ihre Domain andere [DNS-Server](dns_zone_edit#dns-konzept-verstehen.) verwendet. Diese werden in der Form "ns **?** .ovh.net" oder "dns **?** .ovh.net" angezeigt ("**?**" zu ersetzen mit der entsprechenden DNS-Servernummer):<br><br>![warning_other_ovh_dns_srv](message-other-ovh-dns-servers.png){.thumbnail}|Sie müssen die DNS-Server Ihrer Domain bearbeiten, damit sie mit den `NS`-Einträgen der DNS-Zone übereinstimmen. Befolgen Sie hierzu die Anweisungen in [dieser Anleitung](dns_server_general_information#dns-server-andern.).|
|Im Tab `DNS-Zone`{.action} gibt eine Nachricht an, dass Ihre Domain andere [DNS-Server](dns_zone_edit#dns-konzept-verstehen.) verwendet, die nicht dem Format "ns **?** .ovh.net" oder "dns **?** .ovh.net" entsprechen :<br><br>![warning_external_dns_srv](message-external-dns-servers.png){.thumbnail}|Kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](partner.) für mehr Informationen.|
|Ihre Domain ist nicht im Bereich `Domainnamen`{.action} im [OVHcloud Kundencenter](manager.) aufgelistet.<br><br>Oder der Tab `DNS-Zone`{.action} Ihrer Domainname erscheint wie folgt:<br><br>![dns](zone-without-domain-top-of-the-page.png){.thumbnail}|Das bedeutet, dass dieser Domainname nicht in diesem [OVHcloud Kunden-Account](manager.) verwaltet wird.<br><br>Überprüfen Sie, ob er zu einem Ihrer anderen [OVHcloud Kunden-Accounts](manager.) gehört, falls Sie mehrere davon erstellt haben.<br><br>Sie können auch, um den Registrar Ihres Domainnamens herauszufinden sowie die tatsächlich verwendeten DNS-Server zu überprüfen, das [WHOIS Tool](https://www.ovh.de/support/werkzeuge/check_whois.pl) verwenden.<br><br>Falls nötig kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](partner.).|

### Schritt 2: Das SSL-Zertifikat Ihres Hostings überprüfen <a name="step2"></a>

Überprüfen Sie im Tab `Allgemeine Informationen`{.action} Ihres OVHcloud Hostings den Abschnitt `SSL-Zertifikat`:

![ssl-certificate-in-general-tab](no-ssl-certificate.png){.thumbnail}

#### Szenario 1: Ihr Hosting enthält kein SSL-Zertifikat

Aktivieren Sie ein [SSL-Zertifikat](https://www.ovh.de/ssl/) auf Ihrem Webhosting gemäß den Anweisungen in dieser [Anleitung](ssl_on_webhosting1.).

#### Szenario 2: Das SSL-Zertifikat Ihres Hostings funktioniert nicht

Wenn Sie ein **"Let's Encrypt" SSL-Zertifikat** erstellt haben, aktivieren Sie die SSL-Option unter `Multisite`{.action} Ihres Hostings gemäß den Anweisungen in dieser [Anleitung](ssl_on_webhosting#ssl-zertifikat-fur-eine-multisite-aktivieren.).

Wenn Sie eines der **kostenpflichtigen SSL-Zertifikate** unseres Partners [SECTIGO](https://sectigo.com/){.external} bestellt haben, kontaktieren Sie den [SECTIGO Support](https://sectigo.com/support){.external}.

Wenn Sie über ein **importiertes SSL-Zertifikat** verfügen, kontaktieren Sie den entsprechenden Anbieter.

>[!primary]
>
> Um alle von unseren Diensten versendeten E-Mails einzusehen, klicken Sie oben rechts in Ihrem [OVHcloud Kundencenter](manager.) und dann auf `E-Mails von OVHcloud`{.action}:
>
>![right-menu-email-button](right-menu-email-button.png){.thumbnail}
>

## Weiterführende Informationen <a name="go-further"></a>

[SSL-Zertifikat auf einem Webhosting verwalten](ssl_on_webhosting1.)

[Website mit SSL-Zertifikat auf HTTPS umstellen](ssl-activate-https-website1.)

[Fehler "Seite nicht installiert" beheben](multisites_website_not_installed1.)

[Beheben des Fehlers "500 Internal Server Error"](diagnostic_fix_500_internal_server_error1.)

[Die häufigsten Fehler bei 1-Klick-Modulen beheben](diagnostic_errors_module1clic1.)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](partner.).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](support.).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.