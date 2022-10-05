---
title: "Was tun, wenn Ihre Website nicht erreichbar ist?"
slug: fehler-server-nicht-erreichbar
excerpt: Diagnose der Ursachen für die Unverfügbarkeit Ihrer Website
section: Diagnose
order: 01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 02.08.2022**

## Ziel

Im Browser können mehrere Fehlermeldungen auftreten, wenn Ihre Website nicht erreichbar ist. Die folgenden Beispiele zeigen eine fehlerhafte [DNS-Konfiguration](../../domains/webhosting_allgemeine_informationen_zu_den_dns_servern/#dns-konzept-verstehen) oder eine angebrochene Domain an (wenn Ihre Website keine der hier beschriebenen Fehlermeldungen zeigt, lesen Sie den Abschnitt [Weiterführende Informationen](#gofurther)):

|Browser|Betreffende Fehlermeldung|
|-|---|
|Chrome:<br>"Die Website ist nicht erreichbar"|![cantbereached_chrome](images/cantbereached_chrome.png){.thumbnail}|
|Firefox:<br>"Seite wurde nicht gefunden"|![cantbereached_firefox](images/cantbereached_firefox.png){.thumbnail}|
|Edge:<br>"Hmmm...diese Seite ist leider nicht erreichbar"|![cantbereached_edge](images/cantbereached_edge.png){.thumbnail}|
|Safari:<br>"Safari kann keine Verbindung zum Server aufbauen"|![cantbereached_safari](images/cantbereached_safari.png){.thumbnail}|

**Diese Anleitung erklärt, wie Sie Fehler der Art "Website nicht erreichbar" beheben.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) mit den erforderlichen Berechtigungen zum Verwalten der Domain bzw. der [DNS-Zone](../../domains/webhosting_bearbeiten_der_dns_zone/#dns-konzept-verstehen) sowie der DNS-Server.
- Sie haben keine ausstehenden [Zahlungen](https://docs.ovh.com/de/billing/ovh-rechnungen-verwalten/#pay-bills) und [Verlängerungen](https://docs.ovh.com/de/billing/anleitung_zur_nutzung_der_automatischen_verlangerung_bei_ovh/#renewal-management) der dazugehörigen Dienstleistungen (Domainname und Webhosting).

## In der praktischen Anwendung

### Schritt 1: Die Gültigkeit Ihrer Domain überprüfen

> [!warning]
>
> Die Verlängerung Ihrer Dienste liegt in Ihrer alleinigen Verantwortung.<br>
> OVHcloud ist als Hosting-Anbieter verpflichtet, Dienste (Domains, Hosting-Pakete, E-Mail-Accounts etc.), die nicht rechtzeitig verlängert wurden, sowie alle darin enthaltenen Daten unwiderruflich zu löschen.
>
> Daher empfehlen wir Ihnen dringend, die [automatische Verlängerung](../../billing/anleitung_zur_nutzung_der_automatischen_verlangerung_bei_ovh/#in-der-praktischen-anwendung) für alle Ihre OVHcloud Abonnements zu aktivieren.
>

Um die Gültigkeit des Abonnements für Ihre Domain zu überprüfen, klicken Sie oben rechts in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) auf Ihren Namen, um das Kontextmenü anzuzeigen, und dann auf `Produkte und Dienstleistungen`{.action}.

![control-panel](images/control-panel.png){.thumbnail}

Wenn nötig verlängern Sie Ihre Domain mit Klick auf den Button `...`{.action} rechts und dann auf `Dienst verlängern`{.action}.

![renew-service-button](images/renew-service-button.png){.thumbnail}

Nach dieser Verlängerung ist Ihre Website innerhalb von maximal 48 Stunden verfügbar.

### Schritt 2: DNS Server überprüfen

Um die Gültigkeit Ihrer [DNS Server](../../domains/webhosting_allgemeine_informationen_zu_den_dns_servern/) zu überprüfen, klicken Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) auf `Domainnamen`{.action} und dann auf die Domain Ihrer Website.

#### Szenario 1: keine Anomalien bei den DNS Servern

Überprüfen Sie die im Tab `DNS-Server`{.action} angezeigten Informationen:

![srv-dns-ok2](images/srv-dns-ok2.png){.thumbnail}

Wenn die Servernamen mit den Zielen der `NS`-Einträge in der `DNS-Zone`{.action} identisch sind, gehen Sie zu [Schritt 3](#step3).

![srv-dns-ok](images/srv-dns-ok.png){.thumbnail}

#### Szenario 2: eine Warnung erscheint über der DNS Zone

Eine Warnung im Tab `DNS-Zone`{.action} zeigt an, dass die von Ihrer Domain verwendeten DNS Server nicht in Ihrer Zone hinterlegt sind. Hier sind zwei Szenarien möglich.

- Unter "Sie verwenden derzeit folgende DNS-Server:" sind die angegebenen Server vom Typ "ns **?** .ovh.net" und "dns **?** .ovh.net" (wobei "**?**" für eine zweistellige Zahl steht):

![warning_other_ovh_dns_srv](images/warning_other_ovh_dns_srv.png){.thumbnail}

Ändern Sie die DNS Server entsprechend den Anweisungen in dieser [Anleitung](../../domains/webhosting_allgemeine_informationen_zu_den_dns_servern/#dns-server-andern), damit diese mit den Zielen der Einträge vom Typ `NS` in der `DNS-Zone`{.action} identisch sind.

Ihre Website wird dann innerhalb von maximal 48 Stunden verfügbar sein.

- Unter "Sie verwenden derzeit folgende DNS-Server:" sind die angegebenen Server nicht vom Typ "ns **?** .ovh.net" und "dns **?** .ovh.net":

![warning_external_dns_srv](images/warning_external_dns_srv.png){.thumbnail}

> [!warning]
>
> Kontaktieren Sie in diesem Fall den Hoster Ihrer DNS Zone, Ihren Webmaster oder die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/), bevor Sie die Änderung vornehmen.
>
> Es ist möglich, dass die von Ihrer Domain verwendeten DNS Server funktionieren und dass das Problem beim Zugriff auf Ihre Website auf einen fehlenden oder fehlerhaften Eintrag in der [DNS Zone](../../domains/webhosting_bearbeiten_der_dns_zone/#dns-konzept-verstehen) zurückzuführen ist. Jede Änderung der DNS Server kann dazu führen, dass Ihre E-Mail Adressen oder andere Online-Anwendungen nicht mehr verfügbar sind.
>

#### Szenario 3: In der DNS Zone wird kein Eintrag des Typs "NS" angezeigt

Die `DNS-Zone`{.action} Ihrer Domain enthält keinen Eintrag vom Typ `NS`:

![srv_dns_missing](images/srv_dns_missing.png){.thumbnail}

Erstellen Sie ein Backup der aktuellen DNS Zone, indem Sie rechts im Menü auf den Button `Im Textmodus bearbeiten`{.action} klicken:

![change_DNS_zone_change_text_format](images/change_DNS_zone_change_text_format.png){.thumbnail}

Kopieren Sie anschließend den Inhalt Ihrer `DNS-Zone`{.action} in ein Textdokument. Speichern Sie diese Datei lokal ab.

Klicken Sie anschließend auf `Meine DNS-Zone zurücksetzen`{.action} und wählen Sie `Nein, aber ich möchte meine DNS-Zone zurücksetzen.`{.action}, wählen Sie Ihre E-Mail- und Hosting-Server aus und klicken Sie auf `Bestätigen`{.action}.

![change_DNS_zone_reset](images/change_DNS_zone_reset.png){.thumbnail}

Ihre Website wird dann innerhalb von maximal 24 Stunden verfügbar sein.

### Schritt 3: Die DNS Zone überprüfen <a name="step3"></a>

In diesem Schritt ermitteln Sie die IP-Adresse Ihres Hostings und fügen sie zu Ihrer `DNS-Zone`{.action} hinzu.

Wenn Ihre Website nicht auf der OVHcloud Infrastruktur gehostet ist oder von einem anderen Anbieter verwaltet wird, kontaktieren Sie bitte den zuständigen Support.

Wenn Ihre Website auf einem unserer [Hosting-Angebote](https://www.ovhcloud.com/de/web-hosting/) gehostet wird, wählen Sie aus `Hosting-Pakete`{.action} den entsprechenden Dienst aus.

Kopieren Sie im Tab `Allgemeine Informationen`{.action} die IPv4- und/oder IPv6-Adresse Ihrer Domain.

![ipv4-6](images/ipv4-6.png){.thumbnail}

Tragen Sie diese dann in die [DNS-Zone](../../domains/webhosting_bearbeiten_der_dns_zone/#bearbeiten-der-ovhcloud-dns-zone-ihrer-domain_1) Ihrer Domain ein, indem Sie einen oder mehrere Einträge vom Typ `A` bearbeiten oder erstellen.

![ipv4-DNSzone](images/ipv4-DNSzone.png){.thumbnail}

Ihre Website wird dann innerhalb von maximal 24 Stunden verfügbar sein.

## Weiterführende Informationen <a name="gofurther"></a>

[Fehler "Seite nicht installiert" beheben](../webhosting_fehler_-_webseite_ist_nicht_installiert/)

[Beheben des Fehlers "500 Internal Server Error"](../webhosting_bei_einem_fehler_500_internal_server_error/)

[Die häufigsten Fehler bei 1-Klick-Modulen beheben](../fehler-bei-1-klick-modulen/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
