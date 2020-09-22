---
title: IP-Block hinzufügen
slug: ip-block-hinzufuegen
excerpt: So bestellen Sie einen IP-Block für Ihre Private Cloud
legacy_guide_number: '7766457'
section: OVH Funktionen
order: 1
---

**Stand 21.09.2020**

## Einleitung

IP-Blöcke können verwendet werden, um Ihre Dienste über das Internet zugänglich zu machen. 

**In dieser Anleitung erfahren Sie, wie Sie einen IP-Block für Ihre Hosted Private Cloud bestellen, hinzufügen und migrieren.**

## Voraussetzungen

* Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.
* Sie verfügen über eine [Hosted Private Cloud Infrastruktur](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/){.external} in Ihrem OVHcloud Account.

## Beschreibung

### IP-Block bestellen

Um einen zusätzlichen IP-Block für Ihre **Private Cloud** zu bestellen, gehen Sie in Ihr OVHcloud Kundencenter. Klicken Sie im Bereich `Server` in der linken Spalte auf `IP` und dann auf `Zusätzliche IP-Adressen bestellen`{.action}. Wählen Sie anschließend im Drop-down-Menü Ihre **Private Cloud** aus und gehen Sie weiter zum nächsten Schritt.


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
> Welche IPs Ihres Blocks reserviert sind und wofür sie verwendet werden, können Sie in unserer Anleitung zum [OVHcloud Network Plugin](https://docs.ovh.com/de/private-cloud/ovhcloud-network-plugin/){.external-link} nachlesen.
>

- Land des IP-Blocks. Dieses kann für das SEO-Ranking Ihrer Dienste von Bedeutung sein (zum Beispiel ist die Referenzierung einer deutschen Website in Deutschland besser, wenn auch ihre IP deutsch ist)
- Netzwerkname (sichtbar im Whois des IP-Blocks)
- Anzahl der erwarteten Kunden (wie viele Endkunden werden auf diesen IPs gehostet)
- Netzwerkbeschreibung (sichtbar im Whois des IP-Blocks)
- Verwendung (Nutzungsinformationen wie Web, SSL, Cloud, ...)

> \[!success]
>
> Die Aktivierungsgebühren eines Blocks betragen 2,34 € inkl. MwSt./IP. Für einen Block der Größe `/28` mit 16 IPs bedeutet das, dass vor der Lieferung ein Bestellschein über 37,44 € inkl. MwSt. zu begleichen ist.
>  
> Die Verlängerung der IPs ist kostenlos.
>

Sobald Sie den letzten Schritt bestätigt haben, erhalten Sie den Bestellschein Ihres IP-Blocks. Wenn dieser Ihren Wünschen entspricht, können Sie ihn einfach mithilfe der unten auf der Seite vorgeschlagenen Zahlungsmittel begleichen, damit er geliefert wird.

### IP-Block zwischen zwei Hosted Private Clouds migrieren

Für die Migration eines IP-Blocks müssen die Blöcke manuell über die OVHcloud APIv6 verschoben werden.

Verwenden Sie hierzu folgenden Befehl:

> \[!api]
>
> @api {POST} /ip/{ip}/move
> 

Die Felder müssen wie folgt ausgefüllt werden:

- ip: IP-Block mit /mask
- nexthop „newPrimaryIp“ (case-sensitive)
- to: Ziel-Private-Cloud in der Form pcc-XXX-XXX-XXX-XXX

![Feld nexthop](images/move-api.png){.thumbnail}


Das Ergebnis wird wie folgt angezeigt:

![Feld nexthop](images/api-result.png){.thumbnail}

Verwenden Sie anschließend diesen API-Aufruf, um die IP in den IP-Parkplatz zu verschieben:

> \[!api]
>
> @api {POST} /ip/{ip}/park
> 

> [!warning]
>
> Dieser Aufruf trennt das Netzwerk auf den VMs, die die betreffenden IPs verwenden.
>

Sie können die Migration Ihres IP-Blocks über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} im Bereich `Server`{.action} unter `Private Cloud`{.action} nachverfolgen. Klicken Sie auf Ihren Hosted Private Cloud Dienst und dann auf den Tab `Operationen`{.action}.

Die Referenz der Operation lautet „removeIpRipeBlock“.

![Operationen Kundencenter](images/operations.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
