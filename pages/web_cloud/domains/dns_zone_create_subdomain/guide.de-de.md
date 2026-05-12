---
title: "OVHcloud DNS-Zone für Subdomain erstellen"
excerpt: "Erfahren Sie, wie Sie eine DNS-Zone bei OVHcloud für eine Subdomain eines Domainnamens über Ihr OVHcloud Kundencenter erstellen"
updated: 2026-02-19
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
pre {
    font-size: 14px !important;
}
pre.bgwhite {
    background-color: #fff !important;
    color: #000 !important;
    font-family: monospace !important;
    padding: 5px !important;
    margin-bottom: 5px !important;
}
pre.bgwhite code {
    background-color: #fff !important;
    border: solid 0px transparent !important;
    font-family: monospace !important;
    font-size: 0.90em !important;
    color: #000 !important;
}
.small {
   font-size: 0.90em !important;
}
</style>

## Ziel

Möchten Sie eine DNS-Zone für eine Subdomain erstellen?

Die **DNS**-Zone (**D**omain **N**ame **S**ystem) ist die Konfigurationsdatei eines Domainnamens. Sie besteht aus technischen Informationen, sogenannten *DNS-Einträgen*. Die DNS-Zone fungiert wie ein Weichensteller.

Weitere Informationen finden Sie in folgenden Anleitungen:

- [Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)
- [Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)
- [Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

In den meisten Fällen werden die DNS-Einträge einer Subdomain direkt über die aktive DNS-Zone des Domainnamens konfiguriert, von dem sie abhängt.
Es ist jedoch auch möglich, eine spezifische DNS-Zone für eine Subdomain zu erstellen.

Aus verschiedenen Gründen können Sie gezwungen sein, eine DNS-Zone für eine Subdomain bei OVHcloud zu erstellen.
Diese wird dann über eine eigene Zone verfügen, um ihre DNS-Einträge zu konfigurieren.

> [!success]
>
> Zur Erinnerung:
>
> - Ein Domainnamen hat in der Regel folgende Form: **domain.tld**. Beispiel: ovhcloud.com.
> - Eine Subdomain hat in der Regel folgende Form: **sub.domain.tld**. Beispiel: help.ovhcloud.com.
>
> Standardmäßig hängt eine Subdomain von einem Domainnamen ab, um zu funktionieren.
> Konkret können Sie die Subdomain **sub.domain.tld** nicht nutzen, wenn Sie nicht auf die Verwaltung des Domainnamens **domain.tld** zugreifen können.
>
> Wenn Sie eine DNS-Zone für einen Domainnamen erstellen möchten, konsultieren Sie direkt [diesen Guide](/pages/web_cloud/domains/dns_zone_create).

**Diese Anleitung erklärt, wie Sie eine DNS-Zone bei OVHcloud für eine Subdomain eines Domainnamens über Ihr OVHcloud Kundencenter erstellen.**

## Voraussetzungen

- Sie verfügen über einen Domainnamen, von dem die gewählte Subdomain abhängen wird.
- Die betreffende Subdomain darf nicht bereits über eine DNS-Zone (aktiv oder nicht) bei OVHcloud verfügen oder Gegenstand eines laufenden Vorgangs oder einer Bestellung bei OVHcloud sein.

<!-- CP-NAV-START:web-dns-zone -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [DNS-Zone](/links/control-panel/web-dns-zone)
- **Navigationspfad:** `Web Cloud`{.action} > `DNS-Zone`{.action} > Wählen Sie Ihren Domainnamen aus

---
<!-- CP-NAV-END:web-dns-zone -->

## In der praktischen Anwendung

### 1 - Erstellen der DNS-Zone über das OVHcloud Kundencenter

Klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), dann auf den Button `Bestellen`{.action}.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Auf der angezeigten Seite geben Sie die Subdomain ein (z. B. *sub.domain.tld*), für die Sie eine OVHcloud DNS-Zone erstellen möchten. Warten Sie einige Sekunden, während das Tool Prüfungen bezüglich der Subdomain durchführt.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Falls eine Nachricht anzeigt, dass die DNS-Zone nicht erstellt werden kann, prüfen Sie, ob die Subdomain die erforderlichen Voraussetzungen erfüllt, oder kontaktieren Sie die Person, die sie verwaltet. Sobald alles korrekt ist, wiederholen Sie den Vorgang.
>>
> **Schritt 3**
>>
>> Nach Abschluss der Prüfung entscheiden Sie, ob Sie die minimalen Einträge für die zu erstellende DNS-Zone aktivieren möchten. Diese Entscheidung ist nicht endgültig, da Sie die [Einträge der DNS-Zone auch später noch bearbeiten können](/pages/web_cloud/domains/dns_zone_edit).
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}
>>
>> |Die minimalen Einträge aktivieren?|Details|
>> |---|---|
>> |Ja|Wählen Sie diese Option, wenn Sie Ihre DNS-Zone später selbst anpassen möchten.<br>![Minimum-DNS-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
>> |Nein|Wählen Sie diese Option, wenn Sie OVHcloud Dienste wie zum Beispiel ein [Webhosting](/links/web/hosting) nutzen möchten. Die DNS-Zone ist hierfür bereits vorkonfiguriert.<br>![Minimum-dns-zentries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Nachdem Sie Ihre Auswahl getroffen haben, folgen Sie den angezeigten Schritten in Ihrem OVHcloud Kundencenter, bis die DNS-Zone erstellt ist.

### 2 - DNS-Zone bearbeiten (optional)

Die DNS-Zone für Ihre Subdomain ist jetzt erstellt. Sie können sie bereits bearbeiten. Dieser Schritt ist optional, kann aber notwendig sein, wenn Sie die Kontinuität der Verfügbarkeit der Dienste, die mit dieser Subdomain verbunden sind (z. B. eine Website und/oder E-Mails), gewährleisten möchten.

Um die DNS-Zone zu bearbeiten, lesen Sie unsere Anleitung "[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

> [!primary]
>
> Wenn Sie gerade die DNS-Zone erstellt haben und die Subdomain noch nicht in der Liste Ihrer Dienstleistungen erscheint, warten Sie ca. 20 Minuten und laden Sie die Seite neu.

### 3 - Deklarieren der DNS-Server in der aktiven DNS-Zone des Domainnamens, von dem die gewählte Subdomain abhängt

Die Aktivierung einer DNS-Zone für eine Subdomain unterscheidet sich von der Aktivierung eines Domainnamens, da eine Subdomain zwingend von einem Domainnamen abhängt, um zu funktionieren.

Zunächst müssen Sie den Namen der **DNS-Server** von OVHcloud abrufen, die mit der für Ihre Subdomain erstellten DNS-Zone verknüpft sind.

Um diese zu finden, klicken Sie auf die Tabs, um die **2** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), dann wählen Sie die Subdomain aus.
>>
>> ![DNS-Zonen](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> In der Tabelle identifizieren Sie die beiden Spalten **Typ** und **Ziel**.
>>
>> ![DNS-Zonen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> Suchen Sie die beiden Zeilen vom Typ **NS** und notieren Sie die beiden Werte in der Spalte **Ziel**.
>> Die Namen der DNS-Server sollten eine der folgenden drei Formen haben :
>>
>> - `nsXX.ovh.net` und `dnsXX.ovh.net` oder, `nsXXX.ovh.net` und `dnsXXX.ovh.net` (wobei jeder `X` eine Zahl zwischen **0** und **9** darstellt).
>> - `nsXX.ovh.ca` und `dnsXX.ovh.ca` oder, `nsXXX.ovh.ca` und `dnsXXX.ovh.ca` (wobei jeder `X` eine Zahl zwischen **0** und **9** darstellt).
>> - `ns200.anycast.me` und `dns200.anycast.me` (wenn Sie die Option [DNS anycast](/links/web/domains-options) abonniert haben).

Nachdem Sie die beiden DNS-Server-Namen abgerufen haben, gibt es zwei mögliche Szenarien:

**Klicken Sie auf eine der beiden Szenarien, um den Inhalt anzuzeigen.**

/// details | Der Domainname, von dem Ihre Subdomain abhängt, hat seine aktive DNS-Zone bei OVHcloud

Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), dann wählen Sie die Subdomain aus.
>>
>> ![DNS-Zonen](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Rechts oder unterhalb der Tabelle klicken Sie auf `Eintrag hinzufügen`{.action}.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
> **Schritt 3**
>>
>> In dem sich öffnenden Fenster wählen Sie den DNS-Eintrag vom Typ `NS`{.action} aus, dann klicken Sie auf `Weiter`{.action}.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Geben Sie anschließend im Feld `Subdomain *` die betreffende Subdomain ein (z. B. `sub` für die Subdomain `sub.domain.tld`), und im Feld `Ziel *`, einen der beiden zuvor abgerufenen DNS-Server (z. B. `nsXX.ovh.net`).
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-a-ns-entry-to-the-dns-zone.png){.thumbnail}
>>
>> Klicken Sie schließlich auf `Weiter`{.action}.
>>
>> Überprüfen Sie die Zusammenfassung, dann klicken Sie auf `Bestätigen`{.action}.
>>
>> **Wiederholen Sie den gesamten Vorgang für den zweiten DNS-Server.**
>>
>> Falls nötig, konsultieren Sie zusätzlich unsere Anleitung "[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Der Domainname, von dem Ihre Subdomain abhängt, hat seine aktive DNS-Zone bei einem anderen Anbieter

In diesem speziellen Fall kontaktieren Sie Ihren DNS-Anbieter und teilen Sie ihm mit, dass Sie 2 DNS-Einträge vom Typ NS für Ihre Subdomain hinzufügen möchten. 

Hier ist ein Beispiel für eine Anfrage, die Sie an Ihren DNS-Anbieter richten können:

<pre class="bgwhite"><code>
Hallo,

Ich möchte in der aktiven DNS-Zone des Domainnamens <b>domain.tld</b> folgende NS-Einträge für meine Subdomain <b>sub.domain.tld</b> hinzufügen:

 - sub IN NS nsXX.ovh.net.
 - sub IN NS dnsXX.ovh.net.

Damit möchte ich eine spezifische DNS-Zone für meine Subdomain <b>sub.domain.tld</b> aktivieren.

Mit freundlichen Grüßen,
</code></pre>

Im obigen Beispiel ersetzen Sie die Werte **domain.tld**, **sub.domain.tld**, **nsXX.ovh.net** und **dnsXX.ovh.net** durch Ihre eigenen Werte.

///

> [!warning]
>
> **Der folgende Hinweis betrifft nicht die beiden DNS-Einträge vom Typ NS, die Sie gerade hinzugefügt haben.** 
>
> Falls andere DNS-Einträge in der aktiven DNS-Zone des Domainnamens, von dem Ihre Subdomain abhängt, vorhanden waren:
>
> 1. Vergessen Sie nicht, sie in der für Ihre Subdomain erstellten DNS-Zone zu duplizieren.
> 2. Nach der Duplizierung entfernen Sie sie aus der aktiven DNS-Zone Ihres Domainnamens.
>
> Es könnte sonst zu einem Konflikt bei der DNS-Auflösung kommen.

Nachdem Sie die DNS-Zone des Domainnamens, von dem Ihre Subdomain abhängt, geändert haben, kann die Propagation der Änderungen bis zu **48 Stunden** dauern.

## Weiterführende Informationen

[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)

[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)

[Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.