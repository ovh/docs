---
title: "Was tun, wenn meine Website nicht erreichbar ist?"
slug: fehler-server nicht erreichbar
excerpt: "Diagnose der Ursachen für die Unverfügbarkeit Ihrer Website"
section: Diagnose
---

**Stand 16.07.2021**

## Ziel

Im Browser können mehrere Fehlerrückmeldungen auftreten, wenn Ihre Website nicht erreichbar ist. Die folgenden Beispiele zeigen eine fehlerhafte Konfiguration Ihrer [DNS](../../domains/generalites-serveurs-dns/#comprendre-la-notion-de-dns) Server oder eine angebrochene Domain an (wenn Ihre Website keine der hier beschriebenen Fehlermeldungen zeigt, lesen Sie den Abschnitt [Weiterführende Informationen](#aller-plus-loin)):

€ Browser
\|-|---|
|Chrome:<br>"Diese Seite ist nicht erreichbar"|![cantbereached_chrome](images/cantbereached_chrome.png){.thumbnail}\|
|Firefox:<br>"Hum, wir finden diese Seite nicht. " ![cantbereached_firefox](images/cantbereached_firefox.png){.thumbnail}\|
|Edge:<br>"Leider kann auf diese Seite nicht zugegriffen werden"|![cantbereached_edge](images/cantbereached_edge.png){.thumbnail}\|
|Safari:<br>"Safari kann den Server nicht finden"|![cantbereached_safari](images/cantbereached_safari.png){.thumbnail}\|

**Hier erfahren Sie, wie Sie Fehler vom Typ "Diese Seite ist nicht erreichbar" beheben.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie im [Abschnitt](#aller-plus-loin) Weitere Informationen.
>

## Voraussetzungen

- Über eine [Domain verfügen](https://www.ovh.com/fr/domaines/)
- Sie haben die Verwaltung der Server und der [DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) Zone Ihrer Domain
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) angemeldet.

## In der praktischen Anwendung

### Schritt 1: Die Gültigkeit Ihrer Domain überprüfen

> [!warning]
>
> Die Verlängerung Ihrer Angebote liegt in Ihrer alleinigen Verantwortung.<br>
> OVHcloud ist als Hosting-Anbieter verpflichtet, Dienste (Domains, Hosting-Pakete, E-Mails etc.), die nicht rechtzeitig verlängert wurden, sowie alle darin enthaltenen Daten endgültig zu löschen.
>
> Daher empfehlen wir Ihnen dringend, die automatische [Verlängerung](../../billing/renouvellement-automatique-ovh/#en-pratique) für alle Ihre OVHcloud Abonnements zu aktivieren.
>

Um die Gültigkeit des Abonnements für Ihre Domain zu überprüfen, klicken Sie oben rechts in Ihrem Kundencenter auf Ihren Namen, um das Kontextmenü zu erstellen, und dann auf `Produkte und Dienstleistungen`{.action}.

![control-panel](images/control-panel.png){.thumbnail}\|

Wenn nötig verlängern Sie Ihre Domain über den Button `..`{.action}. rechts neben dem Bildschirm und dann `Dienstleistung verlängern`{.action}.

![renew-service-button](images/renew-service-button.png){.thumbnail}

Warten Sie danach bis zu 48 Stunden (Propagationszeit nach Änderungen der [DNS Server](../../domains/generalites-serveurs-dns/#comprendre-la-notion-de-dns)).

### Schritt 2: DNS Server überprüfen

Um die Gültigkeit Ihrer [DNS](../../domains/generalites-serveurs-dns/) Server zu überprüfen, klicken Sie oben links [in Ihrem OVHcloud Kundencenter auf ](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)Domainnamen` `{.action} und dann auf die Domain Ihrer Website.

#### Szenario 1: keine Anomalien auf den DNS Servern

Überprüfen Sie die im Tab DNS `Server angegebenen Server`{.action}:

![srv-dns-ok2](images/srv-dns-ok2.png){.thumbnail}

Wenn sie mit den Zielen der `NS`-Einträge in der `DNS`{.action}-Zone identisch sind, gehen Sie [zu Schritt drei](#etape3):

![srv-dns-ok](images/srv-dns-ok.png){.thumbnail}

#### Szenario 2: eine Warnung erscheint über der DNS Zone

Eine Warnung im Tab `DNS`{.action} Zone zeigt an, dass die von Ihrer Domain verwendeten DNS Server nicht in Ihrer Zone angegeben sind. Hier sind zwei Szenarien möglich:

- unter "Sie verwenden derzeit folgende DNS Server: ", sind die angegebenen Server vom Typ "ns **?** .ovh.net"und "DNS"**?** .ovh.net"(ersetzen Sie das **?** " unter jeder Nummer):

![warning_other_ovh_dns_srv](images/warning_other_ovh_dns_srv.png){.thumbnail}

Ändern Sie die DNS Server entsprechend den [Anweisungen](../../domains/generalites-serveurs-dns/#modifier-les-serveurs-dns) in dieser Anleitung, damit diese mit den Zielen der Einträge vom Typ `NS` in der `DNS Zone identisch sind`{.action}.

Warten Sie nun bis zu 48 Stunden (Propagationszeit für Änderungen der `DNS Server`{.action}).

- unter "Sie verwenden derzeit folgende DNS Server: ", sind die angegebenen Server nicht vom Typ "ns **?** .ovh.net"und "DNS"**?** .ovh.net"

![warning_external_dns_srv](images/warning_external_dns_srv.png){.thumbnail}

> [!warning]
>
> Kontaktieren Sie in diesem Fall Ihren Webmaster oder die [OVHcloud](https://partner.ovhcloud.com/fr/) Partner, bevor Sie Änderungen vornehmen.
>
> Es ist möglich, dass die von Ihrer Domain verwendeten DNS Server funktionieren und dass das Problem beim Zugriff auf Ihre Website auf einen fehlenden oder fehlerhaften Eintrag in der [DNS Zone zurückzuführen ist](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns). Jede Änderung der DNS Server kann dazu führen, dass Ihre E-Mail Adressen oder andere Online-Anwendungen nicht mehr verfügbar sind.
>

#### Szenario 3: In der DNS Zone wird kein NS Eintrag angezeigt

Die `DNS`{.action} Zone Ihrer Domain enthält keinen Eintrag vom Typ `NS`:

![srv_dns_missing](images/srv_dns_missing.png){.thumbnail}

Erstellen Sie ein Backup der aktuellen Zone, indem Sie rechts neben Ihrem `Bildschirm auf den Button Im`{.action} Textmodus ändern klicken:

![change_DNS_zone_change_text_format](images/change_DNS_zone_change_text_format.png){.thumbnail}

Kopieren Sie anschließend den Inhalt Ihrer `DNS`{.action} Zone in ein Textdokument. Speichern Sie dieses Dokument lokal.

Klicken Sie anschließend auf `DNS Zone zurücksetzen`{.action} und wählen Sie `Nein aus, aber ich möchte meine DNS Zone zurücksetzen`{.action}, geben Sie Ihre E-Mail und Hosting Server ein und klicken Sie auf `Bestätigen`{.action}.

![change_DNS_zone_reset](images/change_DNS_zone_reset.png){.thumbnail}

Warten Sie bis zu 24 Stunden (Propagationszeit der Änderungen in der `DNS Zone`{.action}).

### Schritt 3: Die DNS Zone überprüfen <a name="etape3"></a>

In diesem Schritt finden Sie die IP-Adresse Ihres Hostings und fügen sie zu Ihrer `DNS Zone hinzu`{.action}.

Wenn Ihre Website außerhalb der Infrastruktur von OVHcloud oder von einer dritten Person gehostet wird, kontaktieren Sie bitte den betreffenden Hosting-Anbieter.

Wenn Ihre Website auf einem unserer Cloud [Webhosting](https://www.ovh.com/fr/hebergement-web/) Angebote gehostet wird, klicken Sie links auf den Tab `Hosting`{.action} und anschließend auf das entsprechende Angebot.

Kopieren Sie im Tab `Allgemeine`{.action} Informationen die IPv4- und/oder IPv6-Adresse Ihrer Domain.

![ipv4-6](images/ipv4-6.png){.thumbnail}

Geben Sie diese dann in die [DNS](../../domains/editer-ma-zone-dns/#editer-la-zone-dns-ovhcloud-de-votre-nom-domaine_1)-Zone Ihrer Domain ein, indem Sie einen oder mehrere Einträge vom Typ `A` bearbeiten oder erstellen.

![ipv4-DNSzone](images/ipv4-DNSzone.png){.thumbnail}

Warten Sie bis zu 24 Stunden (Propagationszeit der Änderungen in der `DNS Zone`{.action}).

## Mehr <a name="aller-plus-loin"></a>

[Fehler "Seite nicht installiert"beheben](../erreur-site-non-installe/)

[Diagnose und Korrektur bei einer weißen Seite](../comment-diagnostiquer-page-blanche/)

[Was tun bei einem 500 Internal Server Error Fehler?](../erreur-500-internal-server-error/)

[Die häufigsten Fehler bei 1-Klick-Modulen beheben](../erreurs-frequentes-modules-en-1-clic/)

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/fr/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, können Sie unsere Support-Angebote [einsehen](https://www.ovhcloud.com/fr/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.
