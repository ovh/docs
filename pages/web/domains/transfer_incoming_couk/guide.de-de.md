---
title: Transfer einer .uk-Domain zu OVHcloud
slug: webhosting_anleitung_zum_transfer_einer_couk_domain
excerpt: Erfahren Sie hier, wie Sie Domainnamen mit UK-Ländercode zu OVHcloud transferieren
section: Transfer
order: 04
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 20.10.2022**

> [!warning]
>
> Wenn der zu ändernde Domainname aktuell bei OVHcloud registriert ist, ist ein eingehender Domaintransfer nicht der passende Vorgang. Die vorliegende Anleitung betrifft lediglich den Wechsel des Registrars (OVHcloud) des Domainnamens.
>
> Um die Verwaltung des Domainnamens einem anderen OVHcloud Kunden-Account zu übertragen, muss stattdessen eine **Änderung der Kontakte** durchgeführt werden. Die Vorgehensweise wird in [dieser Anleitung](https://docs.ovh.com/de/customer/verwaltung-der-kontakte/) beschrieben.
>
> Wenn auch der **Inhaber des Domainnamens** geändert werden muss, sollte dies erfolgen, **bevor** Sie die Kontakte des Domainnamens ändern. Verwenden Sie dazu unsere Anleitung zum [Inhaberwechsel für Domainnamen](https://docs.ovh.com/de/domains/wechsel_des_domaininhabers/).
>

## Ziel

Für den Transfer einer .uk-Domain (oder einer ähnlichen Domain) ist ein spezifischer Vorgang erforderlich.

**In dieser Anleitung erfahren Sie, wie Sie .uk-Domains zu OVHcloud transferieren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Ihre Domain darf sich nicht in der **Redemption**-Phase befinden oder den Status "Pending Delete" haben.
- Die Domain darf nicht bei Ihrem Registrar blockiert sein. 
- Die Angaben des Inhabers müssen im Whois der [Domain](https://www.nominet.uk/whois/){.external} aktuell sein.
- Sie haben Zugriff auf den Autorisierungscode, der an die E-Mail-Adresse des Inhabers versandt wird. 

> [!primary]
>
> Der Zeitraum der **Redemption**-Phase beträgt maximal 90 Tage ab dem Ablaufdatum der Domain. Im Falle eines Transfers erlaubt dieser Zeitraum die Wiederherstellung der Domain und entsperrt so die Möglichkeit, diese zu transferieren.

## Betroffene Endungen

- .uk
- .co.uk
- .ac.uk
- .gov.uk
- .me.uk
- .net.uk
- .org.uk
- .plc.uk
- .sch.uk

## In der praktischen Anwendung

### Transferverfahren

#### Schritt 1: Änderung des TAG Ihrer Domain

Um Ihre Domain zu OVHcloud transferieren zu können, müssen Sie zuerst den OVHcloud TAG bei Ihrem aktuellen Registrar angeben. Der OVHcloud TAG ist “OVH-FR“. Die Liste der TAGs der verschiedenen Registrare ist auf der [offiziellen Seite der Registry Nominet](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/){.external} verfügbar.

> [!primary]
>
> Wenn Sie den TAG Ihrer Domain nicht über Ihren aktuellen Registrar ändern können, können Sie bei der Nominet Registry beantragen, die Änderung für Sie durchzuführen. Nominet berechnet eine Gebühr für diese Dienstleistung.
>
> Weitere Informationen finden Sie auf der [Nominet-Website](https://www.nominet.uk/domain-support/){.external}.


#### Schritt 2: Transfer-Autorisierungscode erhalten

Sobald Sie den TAG geändert haben, erhält der Inhaber der Domain nach einigen Minuten per E-Mail einen Autorisierungscode (“authcode“). Dieser ist 5 Tage gültig und ermöglicht es, die (kostenlose) Bestellung der Domain bei OVHcloud zu starten.

#### Schritt 3: Bestellung des kostenlosen Transfers

Sobald Sie über Ihren Autorisierungscode verfügen, können Sie die Transfer-Bestellung Ihrer Domain auf der [OVHcloud Website](https://www.ovhcloud.com/de/) ausführen. Der Bestellvorgang läuft dann ab wie bei der Bestellung generischer Domains.

Ihre Domain wird in wenigen Stunden in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angezeigt.

### Zusätzliche Informationen

#### Kosten für einen .uk-Domaintransfer

Der Transfer ist kostenlos.

#### Gültigkeit des Autorisierungscode

Der Autorisierungscode wird nach der Änderung des TAG automatisch generiert. Wenn die Bestellung nicht innerhalb von 5 Tagen ausgeführt wird, wird der Transfer vom Registrar abgebrochen.

#### Verlängerung der Domain nach einem Transfer

Da der Transfer kostenlos ist, ändert sich nichts am Ablaufdatum. Um die Domain nach dem Transfer zu verlängern, gehen Sie auf [die Website von OVHcloud](https://www.ovh.co.uk/cgi-bin/order/renew.cgi).

## Weiterführende Informationen <a name="gofurther"></a>

[Domainnamen zu OVHcloud transferieren](https://docs.ovh.com/de/domains/transfer-einer-generischen-domain/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
