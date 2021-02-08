---
title: 'Bearbeiten der OVH DNS-Zone'
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie eine OVH DNS-Zone über Ihr Kundencenter bearbeiten.'
slug: webhosting_bearbeiten_der_dns_zone
legacy_guide_number: g1604
---

**Stand 26.06.2018**

## Einleitung

Die Domain Name System Zone (DNS-Zone) ist die Konfigurationsdatei einer Domain. Sie besteht aus technischen Angaben, die als Einträge bezeichnet werden. DNS-Zonen werden üblicherweise dazu verwendet, Ihre Domain mithilfe dieser Einträge mit dem oder den Servern zu verbinden, auf denen Ihre Website oder E-Mail-Adressen gehostet werden.

**Hier erfahren Sie, wie Sie eine OVH DNS-Zone über Ihr Kundencenter bearbeiten.**

## Voraussetzungen

- Sie haben über Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} Zugriff auf die Verwaltung der betreffenden Domain.
- Sie sind in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.
- Die angegebene Domain verwendet die OVH Konfiguration (die OVH DNS-Server).

> [!warning]
>
> - Wenn Ihre Domain nicht die DNS-Server von OVH verwendet, muss die Änderung über das Interface des Anbieters vorgenommen werden, bei dem die Konfiguration Ihrer Domain verwaltet wird.
> - Wenn Ihre Domain bei OVH registriert ist, können Sie überprüfen, ob sie unsere Konfiguration verwendet. Gehen Sie hierzu in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} zur betreffenden Domain und klicken Sie anschließend auf den Tab `DNS Server`{.action}.
>

## Beschreibung

**Seien Sie vorsichtig bei der Bearbeitung der DNS-Zone**: Wenn Sie eine falsche Änderung vornehmen, kann es sein, dass Ihre Website nicht mehr erreichbar ist oder Ihre E-Mail-Adressen keine Nachrichten empfangen können.

Ein genaueres Verständnis der verschiedenen Einträge ermöglicht es Ihnen, die notwendigen Änderungen der DNS-Zone Ihrer Domain besser zu bestimmen. Lesen Sie hierzu in der folgenden Tabelle die Beschreibungen zu den einzelnen Einträgen. 

|Eintrag|Beschreibung|  
|---|---|
|A|Der A-Eintrag weist einer Domain eine IP-Adresse (IPv4) zu. Zum Beispiel: die IP-Adresse des Servers, auf dem Ihre Website gehostet ist.|
|AAAA|Der AAAA-Eintrag weist einer Domain eine IP-Adresse (IPv6) zu. Zum Beispiel: die IP-Adresse des Servers, auf dem Ihre Website gehostet ist.|
|CNAME|Erlaubt es einer Domain, den oder die IP-Adressen einer anderen Domain zu verwenden, indem diese durch die Erstellung eines Alias miteinander verbunden werden (IP-Aliasing). Ist zum Beispiel *www.mypersonaldomain.ovh* ein Alias von *mypersonaldomain.ovh*, so verwendet *www.mypersonaldomain.ovh* die IP-Adresse(n) von *mypersonaldomain.ovh*.|
|MX|Der MX-Eintrag legt den für die E-Mail-Adressen der Domain zuständigen E-Mail-Server fest. Zum Beispiel: die IP-Adresse des Servers, auf dem Ihre E-Mail-Lösung gehostet ist. Wahrscheinlich verfügt Ihr Anbieter über mehrere E-Mail-Server. In dem Fall müssen mehrere MX-Einträge angelegt werden.|
|SRV|Der SRV-Eintrag enthält Informationen zur Adresse eines Servers, der einen Dienst bereitstellt. Dieser Eintrag kann zum Beispiel die Adresse eines SIP-Servers angeben oder die Adresse eines Servers, den ein E-Mail-Client für die automatische Konfiguration per Autodiscover verwendet.|
|TXT|Mit einem TXT-Eintrag können Sie zusätzliche, frei definierbare Werte (in Textform) zur DNS-Zone Ihrer Domain hinzufügen. Dieser Eintrag wird häufig für den Verifizierungsprozess verwendet.|
|SPF|Mit dem SPF-Eintrag soll Identitätsdiebstahl und somit die missbräuchliche Verwendung von E-Mail-Adressen mit Ihrem Domainnamen verhindert werden. Mit diesem Eintrag kann zum Beispiel festgelegt werden, dass nur der Server des Anbieters Ihrer E-Mail-Lösung als legitime Quelle angesehen wird. Weitere Informationen hierzu finden Sie in unserer Anleitung [„Einen SPF-Eintrag zur Konfiguration Ihrer Domain hinzufügen“](https://docs.ovh.com/de/domains/webhosting_spf-eintrag/){.external}|
|CAA|Der CAA-Eintrag wird dazu verwendet, die Zertifizierungsstellen aufzulisten, die SSL-Zertifikate für eine Domain ausstellen dürfen.|

### Schritt 1: Auf die Verwaltung der OVH DNS-Zone Ihrer Domain zugreifen

Loggen Sie sich zunächst in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, klicken Sie links im Menü auf `Domains`{.action} und wählen Sie die betreffende Domain aus. Gehen Sie dann auf den Tab `DNS Zone`{.action}.

Die angezeigte Tabelle enthält die Konfiguration Ihrer Domain bei OVH. Sie besteht aus mehreren DNS-Einträgen, die in jeweils einer Zeile der Tabelle stehen. Sie können die Einträge nach dem Eintragstyp oder der zugehörigen Domain filtern.

![dnszone](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### Schritt 2: OVH DNS-Zone Ihrer Domain bearbeiten

Sie können die OVH DNS-Zone Ihrer Domain bearbeiten und DNS-Einträge hinzufügen, bearbeiten oder löschen. Hierzu haben Sie zwei Optionen:

- **DNS-Zone manuell im Textmodus bearbeiten**: nur für fortgeschrittene Nutzer. Klicken Sie im Tab `DNS Zone`{.action} auf `Im Textmodus bearbeiten`{.action} und folgend Sie den Anweisungen.

- **Konfigurationsassistenten verwenden**

Die vorliegende Anleitung beschreibt von hier an nur die Konfiguration über unsere Konfigurationsassistenten.

> [!primary]
>
> Bitte halten Sie die Informationen bereit, die Sie in Ihrer OVH DNS-Zone ändern möchten. Wenn Sie diese Änderung auf Anfrage eines Dienstleisters durchführen, sollte Ihnen dieser eine Lister der vorzunehmenden Änderungen zugesandt haben.
>

- **Neuen DNS-Eintrag hinzufügen**

Um einen neuen DNS-Eintrag hinzuzufügen, gehen Sie in Ihrem Kundencenter auf den Tab `DNS Zone`{.action} und klicken Sie rechts neben der Tabelle auf den Button `Einen Eintrag hinzufügen`{.action}. Wählen Sie den gewünschten Eintragstyp aus und folgen Sie den Anweisungen.

Wir empfehlen Ihnen, zunächst zu überprüfen, dass dieser Eintrag nicht bereits existiert und auf ein anderes Ziel verweist. Filtern Sie hierzu die angezeigten Einträge nach Eintragstyp oder der verbundenen Domain. Wenn der Eintrag bereits existiert, können Sie diesen, wie im nächsten Schritt beschrieben, bearbeiten.

![dnszone](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

- **Existierenden DNS-Eintrag bearbeiten**

Um einen existierenden DNS-Eintrag zu bearbeiten, klicken Sie in Ihrem Kundencenter im Tab `DNS Zone`{.action} rechts neben dem entsprechenden Eintrag auf das Zahnrad-Symbol. Klicken Sie anschließend auf `Eintrag bearbeiten`{.action} und folgen Sie den angezeigten Schritten.

![dnszone](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

- **DNS-Eintrag löschen**

Um einen DNS-Eintrag zu löschen, klicken Sie in Ihrem Kundencenter im Tab `DNS Zone`{.action} rechts neben dem entsprechenden Eintrag auf das Zahnrad-Symbol. Klicken Sie anschließend auf `Eintrag löschen`{.action} und folgen Sie den angezeigten Schritten.

Sie können mehrere Einträge auf einmal löschen, indem Sie links in der Tabelle neben den betreffenden Einträgen einen Haken setzen und anschließend auf den Button `Löschen`{.action} klicken.

![dnszone](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

### Schritt 3: Propagationszeit abwarten

Die Änderung der DNS-Konfiguration Ihrer Domain erfordert eine Propagationszeit von bis zu 24 Stunden, bis sie voll wirksam ist.

Wenn Sie die Propagationszeit für die nächste Bearbeitung Ihrer OVH DNS-Zone verkürzen möchten, können Sie das bis zu einem gewissen Grad tun, indem Sie die TTL (*Time To Live*) anpassen, die für alle Einträge der DNS-Zone angewandt wird.
Klicken Sie hierzu in Ihrem Kundencenter im Tab `DNS Zone`{.action} auf den Button `Standardmäßige TTL ändern`{.action} und folgen Sie den angezeigten Schritten. 

Sie können auch die TTL eines DNS-Eintrags ändern. Diese Änderung muss jedoch für jeden Eintrag einzeln vorgenommen werden, indem Sie diesen bearbeiten oder bei Hinzufügen die entsprechende TTL angeben.

## Weiterführende Informationen

[Webhosting − Allgemeine Informationen zu den DNS-Servern](https://docs.ovh.com/de/domains/webhosting_allgemeine_informationen_zu_den_dns_servern/){.external}

[Einen SPF-Eintrag zur Konfiguration Ihrer Domain hinzufügen](https://docs.ovh.com/de/domains/webhosting_spf-eintrag/){.external}

[Schützen Sie Ihre Domain vor Cache Poisoning](https://www.ovh.de/domains/dnssec_dienst.xml){.external}

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.