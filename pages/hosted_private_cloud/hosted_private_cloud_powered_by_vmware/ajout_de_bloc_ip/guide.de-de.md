---
title: IP-Block hinzufügen
excerpt: Erfahren Sie hier, wie Sie einen IP-Block für Ihr Hosted Private Cloud Projekt bestellen
updated: 2022-04-06
---

## Ziel

IP-Blöcke können verwendet werden, um Ihre Dienste über das Internet zugänglich zu machen. 

**Diese Anleitung erklärt, wie Sie einen IP-Block für Ihre Hosted Private Cloud bestellen, hinzufügen und migrieren.**

## Voraussetzungen

- Sie sind Administrator-Kontakt für die Infrastruktur [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/), um Login-Daten zu erhalten.
- Sie haben eine aktive Benutzerkennung (erstellt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)

## In der praktischen Anwendung

### IP-Block bestellen

Um einen zusätzlichen IP-Block für Ihre **Private Cloud** zu bestellen, gehen Sie in Ihr OVHcloud Kundencenter. Klicken Sie im Bereich `Hosted Private Cloud` in der linken Spalte auf `IP` und dann auf `Zusätzliche IP-Adressen bestellen`{.action}. Wählen Sie anschließend im Drop-down-Menü Ihre **Private Cloud** aus und gehen Sie weiter zum nächsten Schritt.

Zur Erstellung Ihres IP-Blocks sind zunächst mehrere Felder auszufüllen:

- Größe des IP-Blocks (/28 bis /24)

> [!primary]
>
> Zur Erinnerung haben wir in der nachstehenden Tabelle die Anzahl der in einem Block enthaltenen IPs sowie die Anzahl der verwendbaren IPs aufgeführt.
> 

|Block-Größe|IPs im Block|Bei OVHcloud verwendbare IPs|
|:---:|:---:|:---:|
|28|16|11|
|27|32|27|
|26|64|59|
|25|128|123|
|24|256|251|

> [!primary]
>
> Welche IPs Ihres Blocks reserviert sind und wofür sie verwendet werden, können Sie in unserer Anleitung zum [OVHcloud Network Plugin](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/plugin_ovh_network) nachlesen.
>

- Land des IP-Blocks. Dieses kann für das SEO-Ranking Ihrer Dienste von Bedeutung sein (zum Beispiel ist die Referenzierung einer deutschen Website in Deutschland besser, wenn auch ihre IP deutsch ist)
- Netzwerkname (sichtbar im Whois des IP-Blocks)
- Anzahl der erwarteten Kunden (wie viele Endkunden werden auf diesen IPs gehostet)
- Netzwerkbeschreibung (sichtbar im Whois des IP-Blocks)
- Verwendung (Nutzungsinformationen wie Web, SSL, Cloud, ...)

> [!success]
>
> Sie müssen die Aktivierungsgebühr für Ihren IP-Block vor der Lieferung bezahlen.
>

Sobald Sie den letzten Schritt bestätigt haben, erhalten Sie den Bestellschein Ihres IP-Blocks. Wenn dieser Ihren Wünschen entspricht, können Sie ihn einfach mithilfe der unten auf der Seite vorgeschlagenen Zahlungsmittel begleichen, damit er geliefert wird.

### IP-Block zwischen zwei Hosted Private Clouds migrieren

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Gemao3Fd7rI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Für die Migration eines IP-Blocks müssen die Blöcke manuell über die OVHcloud APIv6 verschoben werden.

Verwenden Sie hierzu folgenden Befehl:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/move
> 

Die Felder müssen wie folgt ausgefüllt werden:

- ip: IP-Block mit /mask
- nexthop „newPrimaryIp“ (case-sensitive)
- to: Ziel-Private-Cloud in der Form pcc-XXX-XXX-XXX-XXX

![Feld nexthop](images/move-api.png){.thumbnail}

Das Ergebnis wird wie folgt angezeigt:

![Feld nexthop](images/api-result.png){.thumbnail}

Wenn Sie anschließend den IP-Block abtrennen müssen, können Sie diesen API-Aufruf verwenden, um die IP in den IP-Parkplatz zu verschieben:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/park
> 

> [!warning]
>
> Dieser Aufruf trennt das Netzwerk auf den VMs, die die betreffenden IPs verwenden.
>

Sie können die Migration Ihres IP-Blocks über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im Bereich `Hosted Private Cloud`{.action} unter `Private Cloud`{.action} nachverfolgen. Klicken Sie auf Ihren Hosted Private Cloud Dienst und dann auf den Tab `Operationen`{.action}.

Die Referenz der Operation lautet „removeIpRipeBlock“.

![Operationen Kundencenter](images/operations.png){.thumbnail}

Die IP wird dann im `Ip-Parkplatz`{.action} angezeigt.

![IP parking](images/ip-parking.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
