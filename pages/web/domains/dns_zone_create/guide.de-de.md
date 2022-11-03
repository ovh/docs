---
title: 'OVHcloud DNS-Zone für eine Domain erstellen'
excerpt: 'Hier erfahren Sie, wie Sie über Ihr Kundencenter eine OVHcloud DNS-Zone für Ihre Domain erstellen.'
slug: erstellung_einer_dns_zone_fur_eine_externe_domain
section: 'DNS und DNS-Zone'
---

**Stand 30.11.2018**

## Ziel

Die Domain Name System Zone (DNS-Zone) ist die Konfigurationsdatei einer Domain. Sie besteht aus technischen Angaben, die als Einträge bezeichnet werden. DNS-Zonen werden üblicherweise dazu verwendet, Ihre Domain mithilfe dieser Einträge mit dem oder den Servern zu verbinden, auf denen Ihre Website oder E-Mail-Adressen gehostet werden.

Es kann aus verschiedenen Gründen erforderlich sein, dass Sie eine DNS-Zone für Ihre Domain bei OVHcloud erstellen.

**In dieser Anleitung erfahren Sie, wie Sie über Ihr Kundencenter eine OVHcloud DNS-Zone für Ihre Domain erstellen.**

## Voraussetzungen

- Sie besitzen eine Domain.
- Die betreffende Domain hat noch keine OVHcloud DNS-Zone und ist nicht Teil eines laufenden Vorgangs oder einer aktuellen Bestellung bei OVHcloud.
- Sie sind in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.


## In der praktischen Anwendung

### Schritt 1: DNS-Zone über das Kundencenter erstellen

Loggen Sie sich zunächst im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, klicken Sie auf `Bestellen`{.action} und dann auf `DNS Zone`{.action}.

Geben Sie auf der angezeigten Seite den Domainnamen ein, für den Sie die OVHcloud DNS-Zone erstellen möchten. Warten Sie einen Moment, bis das Tool den Domainnamen überprüft hat.

Wenn Ihnen eine Nachricht angezeigt wird, dass die DNS-Zone nicht erstellt werden kann, überprüfen Sie, ob der Domainname die nötigen Voraussetzungen erfüllt oder fragen Sie bei der Person nach, die die Domain für Sie verwaltet. Wenn die Angaben korrekt sind, versuchen Sie es erneut.

![dnszonecreate](images/dns-zone-create-step1.png){.thumbnail}

Wählen Sie nach der Überprüfung des Domainnamens aus, ob Sie die minimalen Einträge für die zu erstellende DNS-Zone aktivieren möchten oder nicht. Sie können Ihre Auswahl im Nachhinein problemlos anpassen und die DNS-Einträge bearbeiten, nachdem die DNS-Zone erstellt wurde.

|Minimale Einträge aktivieren?|Details|
|---|---|
|Ja|Wählen Sie diese Option, wenn Sie Ihre DNS-Zone später selbst anpassen möchten.|
|Nein|Wählen Sie diese Option, wenn Sie OVHcloud Dienste wie zum Beispiel ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot nutzen möchten. Die DNS-Zone ist hierfür bereits vorkonfiguriert.|

![dnszonecreate](images/dns-zone-create-step2.png){.thumbnail}

Nachdem Sie eine Option ausgewählt haben, folgen Sie den angezeigten Schritten zur Erstellung der DNS-Zone.

### Schritt 2: DNS-Zone bearbeiten (optional)

Nun, da die DNS-Zone für Ihre Domain erstellt wurde, können Sie sie bearbeiten. Die Bearbeitung ist optional, kann jedoch erforderlich werden, um die ständige Verfügbarkeit der mit dieser Domain verbundenen Dienste (wie Websites und E-Mails) sicherzustellen.

Loggen Sie sich für die Bearbeitung der DNS-Zone im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie in `Domainnamen`{.action} die betreffende Domain aus. Gehen Sie dann auf den Tab `DNS Zone`{.action}.

> [!primary]
>
> Wenn Sie die DNS-Zone gerade erst erstellt haben und diese in der Liste der Dienste im Bereich `Domainnamen`{.action} nicht angezeigt wird, warten Sie einen Moment und laden Sie die Seite erneut.
>

Sobald die Domain angezeigt wird, können Sie die nötigen Änderungen vornehmen. Weitere Informationen hierzu finden Sie in unserer Anleitung [Bearbeiten der OVHcloud DNS-Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/){.external}. Die Änderung der DNS-Konfiguration Ihrer Domain erfordert eine Propagationszeit von 4 bis maximal 24 Stunden, bis sie voll wirksam ist.

### Schritt 3: DNS-Server einer Domain ändern

Sobald die OVHcloud DNS-Zone verwendet werden kann, können Sie sie mit Ihrer Domain verbinden. Suchen Sie hierfür zunächst die Angaben der für Ihre Domain aktivierten OVHcloud DNS-Server in Ihrem Kundencenter. Sie werden unter `Name Servers`{.action} aufgelistet.

![dnszonecreate](images/dns-zone-create-step3.png){.thumbnail}

Wenn Sie die Angaben haben, **ändern Sie die DNS-Server Ihrer Domain im Interface Ihres bisherigen Domain-Anbieters.** Die Änderung erfordert eine Propagationszeit von maximal 48 Stunden, bevor sie voll wirksam ist.

## Weiterführende Informationen

[Bearbeiten der OVHcloud DNS-Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
