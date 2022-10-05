---
title: Was tun bei dem Fehler "Dies ist keine sichere Verbindung"?
slug: fehler-website-nicht-gesichert
excerpt: Erfahren Sie hier, wie Sie bei sicherheitsrelevanten Fehlermeldungen auf Ihrer Website vorgehen
section: Diagnose
order: 03
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 08.07.2021**
 
## Ziel <a name="objective"></a>

Es können verschiedene Fehlermeldungen auftreten, wenn Ihre Website nicht erreichbar ist. Die nachfolgenden Beispiele zeigen an, dass Ihr Webhosting kein [SSL-Zertifikat](../ssl-zertifikate-auf-webhostings-verwalten/) enthält (wenn Ihre Website keine der in dieser Anleitung beschriebenen Fehlermeldungen anzeigt, gehen Sie zum Abschnitt [“Weiterführende Informationen“](#gofurther) in dieser Anleitung): 

|Browser|Betreffende Fehlermeldung|
|-|---|
|Chrome:<br>"Dies ist keine sichere Verbindung"|![notsecured_chrome](images/notsecured_chrome.png){.thumbnail}|
|Firefox:<br>"Warnung: Mögliches Sicherheitsrisiko erkannt"|![notsecured_firefox](images/notsecured_firefox.png){.thumbnail}|
|Edge:<br>"Ihre Verbindung ist nicht privat"|![notsecured_edge](images/notsecured_edge.png){.thumbnail}|
|Safari:<br>"Diese Verbindung ist nicht privat"|![notsecured_safari](images/notsecured_safari.png){.thumbnail}|

**Diese Anleitung erklärt, wie Sie Fehler der Art "Keine sichere Verbindung" beheben.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) mit den erforderlichen Berechtigungen zum Verwalten der Domain bzw. der [DNS-Zone](../../domains/webhosting_bearbeiten_der_dns_zone/#dns-konzept-verstehen) sowie der DNS-Server.

## In der praktischen Anwendung

Um die Problemursache zu beheben müssen Sie:

1. das korrekte Hosting identifizieren, mit dem Ihre Domain verbunden ist.
2. auf dem betreffenden Hosting ein [SSL-Zertifikat](../ssl-zertifikate-auf-webhostings-verwalten/) für Ihre Domain erstellen, aktivieren oder verlängern.

### Schritt 1: Überprüfen des Webhostings der betroffenen Domain

#### Die IP-Adresse des Hostings überprüfen

Die [oben](#objective) genannten Fehlermeldungen bedeuten nicht unbedingt, dass Ihre Website auf einem unserer [Web Cloud Angebote](https://www.ovhcloud.com/de/web-hosting/) gehostet wird. Überprüfen Sie daher die IP-Adresse des Servers, auf den Ihr [Domainname](https://www.ovhcloud.com/de/domains/) verweist.

Um die IP-Adresse Ihres [OVHcloud Webhostings](https://www.ovhcloud.com/de/web-hosting/) herauszufinden, gehen Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu `Web Cloud`{.action} und wählen Sie das betreffende Hosting unter `Hosting-Pakete`{.action} aus.

Im Tab `Allgemeine Informationen`{.action} wird Ihnen die IPv4- und IPv6-Adresse Ihres Hostings angezeigt.

![hosting-general-informations](images/hosting-general-informations.png){.thumbnail}

#### IP-Adresse in der DNS Zone überprüfen

Überprüfen Sie nun, ob die in der [DNS Zone](../../domains/webhosting_bearbeiten_der_dns_zone/#dns-konzept-verstehen) hinterlegte IP-Adresse der Adresse Ihres [Webhostings](https://www.ovhcloud.com/de/web-hosting/) entspricht.

Loggen Sie Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und  und wählen Sie den Domainnamen Ihrer Website unter `Domainnamen`{.action} aus.

Wechseln Sie zum Tab `DNS-Zone`{.action} aus und notieren Sie das "Ziel" des Eintrags vom Typ `A` Ihres Domainnamens:

![zone-dns-ip](images/zone-dns-ip.png){.thumbnail}

#### Die notwendigen Aktionen durchführen

|Szenario|Nächster Schritt|
|---|---|
|Die in der [DNS-Zone](../../domains/webhosting_bearbeiten_der_dns_zone/) gelistete IP-Adresse entspricht der IP-Adresse Ihres Webhostings.|Fortfahren mit [Schritt 2](#step2)|
|Die in der Zone angegebene IP-Adresse betrifft keines der Webhostings in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), aber erscheint in der [Adressliste unserer Web Server](../verzeichnis-der-ip-adressen-web-hosting-cluster/).|Überprüfen Sie, ob die betreffende IP Adresse zu einem Ihrer Webhostings in einem anderen [OVHcloud Kundenaccount](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) gehört, falls Sie mehrere haben. Für mehr Informationen kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).|
|Die in der Zone eingertragene IP-Adresse ist nicht die Ihres Webhostings und erscheint auch nicht in der [Adressliste unserer Web Server](../verzeichnis-der-ip-adressen-web-hosting-cluster/).|Kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/) für mehr Informationen.|
|Im Tab `DNS-Zone`{.action} gibt ein Warnhinweis an, dass Ihre Domain andere [DNS-Server](../../domains/webhosting_bearbeiten_der_dns_zone/#dns-konzept-verstehen) verwendet. Diese werden in der Form "ns **?** .ovh.net" oder "dns **?** .ovh.net" angezeigt ("**?**" zu ersetzen mit der entsprechenden DNS-Servernummer):<br><br>![warning_other_ovh_dns_srv](images/warning_other_ovh_dns_srv.png){.thumbnail}|Sie müssen die DNS-Server Ihrer Domain bearbeiten, damit sie mit den `NS`-Einträgen der DNS-Zone übereinstimmen. Befolgen Sie hierzu die Anweisungen in [dieser Anleitung](../../domains/webhosting_allgemeine_informationen_zu_den_dns_servern/#dns-server-andern).|
|Im Tab `DNS-Zone`{.action} gibt eine Nachricht an, dass Ihre Domain andere [DNS-Server](../../domains/webhosting_bearbeiten_der_dns_zone/#dns-konzept-verstehen) verwendet, die nicht dem Format "ns **?** .ovh.net" oder "dns **?** .ovh.net" entsprechen :<br><br>![warning_external_dns_srv](images/warning_external_dns_srv.png){.thumbnail}|Kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/) für mehr Informationen.|
|Ihre Domain ist nicht im Bereich `Domainnamen`{.action} im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) aufgelistet.<br><br>Oder der Tab `DNS-Zone`{.action} Ihrer Domainname erscheint wie folgt:<br><br>![dns](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|Das bedeutet, dass dieser Domainname nicht in diesem [OVHcloud Kunden-Account](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) verwaltet wird.<br><br>Überprüfen Sie, ob er zu einem Ihrer anderen [OVHcloud Kunden-Accounts](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) gehört, falls Sie mehrere davon erstellt haben.<br><br>Sie können auch, um den Registrar Ihres Domainnamens herauszufinden sowie die tatsächlich verwendeten DNS-Server zu überprüfen, das [WHOIS Tool](https://www.ovh.de/support/werkzeuge/check_whois.pl) verwenden.<br><br>Falls nötig kontaktieren Sie Ihren Webmaster oder einen [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).|

### Schritt 2: Das SSL-Zertifikat Ihres Hostings überprüfen <a name="step2"></a>

Überprüfen Sie im Tab `Allgemeine Informationen`{.action} Ihres OVHcloud Hostings den Abschnitt `SSL-Zertifikat`:

![ssl-certificate-in-general-tab](images/ssl-certificate-in-general-tab.png){.thumbnail}

#### Szenario 1: Ihr Hosting enthält kein SSL-Zertifikat

Aktivieren Sie ein [SSL-Zertifikat](https://www.ovh.de/ssl/) auf Ihrem Webhosting gemäß den Anweisungen in dieser [Anleitung](../ssl-zertifikate-auf-webhostings-verwalten/).

#### Szenario 2: Das SSL-Zertifikat Ihres Hostings funktioniert nicht

Wenn Sie ein **"Let's Encrypt" SSL-Zertifikat** erstellt haben, aktivieren Sie die SSL-Option unter `Multisite`{.action} Ihres Hostings gemäß den Anweisungen in dieser [Anleitung](../ssl-zertifikate-auf-webhostings-verwalten/#ssl-zertifikat-fur-eine-multisite-aktivieren).

Wenn Sie eines der **kostenpflichtigen SSL-Zertifikate** unseres Partners [SECTIGO](https://sectigo.com/){.external} bestellt haben, kontaktieren Sie den [SECTIGO Support](https://sectigo.com/support){.external}.

Wenn Sie über ein **importiertes SSL-Zertifikat** verfügen, kontaktieren Sie den entsprechenden Anbieter.

>[!primary]
>
> Um alle von unseren Diensten versendeten E-Mails einzusehen, klicken Sie oben rechts in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) und dann auf `E-Mails von OVHcloud`{.action}:
>
>![right-menu-email-button](images/right-menu-email-button.png){.thumbnail}
>

## Weiterführende Informationen <a name="gofurther"></a>

[SSL-Zertifikat auf einem Webhosting verwalten](../ssl-zertifikate-auf-webhostings-verwalten/)

[Website mit SSL-Zertifikat auf HTTPS umstellen](../website-umstellen-https-ssl/)

[Fehler "Seite nicht installiert" beheben](../webhosting_fehler_-_webseite_ist_nicht_installiert/)

[Beheben des Fehlers "500 Internal Server Error"](../webhosting_bei_einem_fehler_500_internal_server_error/)

[Die häufigsten Fehler bei 1-Klick-Modulen beheben](../fehler-bei-1-klick-modulen/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
