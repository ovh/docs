---
title: "IPv6-Adresse für Ihre Website konfigurieren"
slug: ipv6-konfigurieren für Ihre Website
excerpt: "Erfahren Sie, wie Sie Ihre Website mit einer IPv6-Adresse kompatibel machen"
section: "Webhosting-Konfiguration"
order: 06
---

**Letzte Aktualisierung am 10.02.2023**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>
  
## Ziel

Das Internet läuft seit Anfang der 1990er Jahre gemäß IPv4. Dieser Standard erlaubt die Bereitstellung einer IP-Adresse X.X.X.X.X (oder die "X"sind Zahlen zwischen 0 und 255) für jede der mit dem Internet verbundenen Maschinen (Server, Computer, Smartphones, Tablets..). Dieser Standard begrenzt jedoch die Anzahl der an das Internet angeschlossenen Geräte auf etwa 4 Milliarden, was 2022 weniger als ein an zwei Menschen auf der Erde angeschlossenes Gerät ausmachte.

Das Protokoll **IPv6** wurde deshalb eingeführt, um bis zu 340 Millionen Geräte an das Internet anbinden zu können. Seine Einführung braucht Zeit, da das gesamte Internet diese neue Norm integrieren muss. 

Da IPv4-Adressen weniger verfügbar sind, ist es schwieriger, neue Maschinen zum IPv4-Standard im Internet hinzuzufügen. Allerdings sind Verbindungen zu einer IPv6-Adresse nur nützlich, wenn Ihre Website zum Beispiel auch mit demselben Protokoll verfügbar ist. Je mehr IPv6-Websites verfügbar sind, desto mehr können die verschiedenen Akteure im Internet ihre Geräte und Maschinen auf dieses neue Protokoll umstellen.

Weitere Informationen finden Sie in [Wikipedia](https://de.wikipedia.org/wiki/IPv6){.external} zum IPv6-Protokoll.

Unsere Webhostings sind seit 2011 mit IPv6 kompatibel. Die Aktivierung dieses Protokolls ist jedoch bis vor kurzem eine optionale Option für die Konfiguration geblieben. 

**Diese Anleitung erklärt, wie Sie ob Ihre Website mit IPv6 kompatibel ist und wie Sie sie mit einer IPv6-Adresse konfigurieren.**

## Voraussetzungen

- Sie verfügen über eine [Domainname](https://www.ovhcloud.com/de/domains/){.external} in Ihrem OVHcloud Kundencenter.
- Sie besitzen [Webhosting-Angebot](https://www.ovhcloud.com/de/web-hosting/){.external}.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.

## In der praktischen Anwendung

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/) und/oder den Herausgeber des Dienstes zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Mehr Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
> 

Wenn Ihre Website nicht konfiguriert ist, um mit einer IPv6-Adresse zu funktionieren, können Sie [IPv6-Adresse Ihres OVHcloud Shared Hostings](https://docs.ovh.com/de/hosting/verzeichnis-der-ip-adressen-web-hosting-cluster/) in die aktive DNS-Zone Ihrer Domain hinzufügen. Ziel ist es, Webbrowsern zu ermöglichen, eine IPv6-Adresse zu finden, die Ihrer Website über Ihren Domainnamen zugeordnet ist.

### Die IPv6-Kompatibilität Ihrer Website überprüfen

Um zu überprüfen, ob Ihre Website bereits eine IPv6-Adresse verwendet, verwenden Sie die Website [ipv6-test.com](https://ipv6-test.com/validate.php){.external}. Er wird Ihnen mitteilen, ob Ihre Website auf dieses neue IP-Protokoll reagiert. Ist das nicht der Fall, lesen Sie unsere Anleitung.

### Schritt 1: die IPv6-Adresse Ihres Webhostings abrufen

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}. Klicken Sie im Bereich `Web Cloud`{.action} auf `Hosting-Pakete`{.action}, wählen Sie das betreffende Hosting aus und gehen Sie dann auf den Tab `Allgemeine Informationen`{.action}.

Kopieren Sie im Rahmen **IPv6** den Eintrag und gehen Sie zum nächsten Schritt über.

![IPv6](images/ipv6_01.png){.thumbnail}

### Schritt 2: die aktive DNS-Zone Ihrer Domain konfigurieren

> [!warning]
>
> Unsere CDN Optionen sind derzeit mit IPv6-Adressen nicht kompatibel. Wenn Sie eine IPv6-Adresse für Ihre Website konfigurieren, profitieren Ihre Besucher nicht vom CDN.
>
> Darüber hinaus führt das Hinzufügen, Ändern oder Löschen eines DNS Eintrags in der aktiven DNS Zone einer Domain zu einer Propagationszeit von **4 bis 24 Stunden**, um voll wirksam zu sein.
>

Damit Ihr Browser die IPv6-Adresse mit Ihrer Domain aufruft, ändern Sie die aktive DNS-Zone Ihrer Domain. Verwenden Sie unsere Anleitung "[OVHcloud DNS-Zone bearbeiten](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/#bearbeiten-der-ovhcloud-dns-zone-ihrer-domain_1)", um einen DNS-Eintrag vom Typ **AAAA** zu erstellen.

Klicken Sie im Bereich `Web Cloud`{.action} auf `Domainnamen`{.action}. Wählen Sie Ihre Domain aus und gehen Sie dann auf den Tab `DNS-Zone`{.action}. Klicken Sie rechts neben der Tabelle auf den Button Einen `Eintrag hinzufügen`{.action}. 

Tragen Sie die zuvor kopierte IPv6-Adresse unter Verwendung des Eintragstyps ein **AAAA**.

![IPv6](images/ipv6_02.png){.thumbnail}

## Weiterführende Informationen <a name="go-further"></a>

[OVHcloud DNS-Zone bearbeiten](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/#bearbeiten-der-ovhcloud-dns-zone-ihrer-domain_1)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.