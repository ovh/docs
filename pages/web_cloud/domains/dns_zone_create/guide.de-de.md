---
title: OVHcloud DNS-Zone für eine Domainnamen erstellen
excerpt: Erfahren Sie hier, wie Sie im OVHcloud Kundencenter eine DNS-Zone für Ihren Domainnamen erstellen
updated: 2026-03-10
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

Die **DNS**-Zone (**D**omain **N**ame **S**ystem) ist die Konfigurationsdatei eines Domainnamens. Sie besteht aus **DNS-Einträgen**, Datensätzen die dem Domainnamen verschiedenen Diensten und Funktionen zuordnen.

Weitere Informationen finden Sie in folgenden Anleitungen:

- [Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)
- [Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)
- [Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

Es gibt verschiedene Gründe für die Erstellung einer DNS-Zone bei OVHcloud für Ihren Domainnamen.

**Diese Anleitung erklärt, wie Sie im OVHcloud Kundencenter eine DNS-Zone bei OVHcloud für Ihren Domainnamen erstellen.**

## Voraussetzungen

- Sie haben administrativen Zugriff auf Ihren Domainnamen.
- Für den betreffenden Domainnamen besteht nicht bereits eine aktive oder inaktive OVHcloud DNS-Zone, noch ist er Gegenstand einer laufenden Operation oder einer Bestellung bei OVHcloud.

<!-- CP-NAV-START:web-dns-zone -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [DNS-Zone](/links/control-panel/web-dns-zone)
- **Navigationspfad:** `Web Cloud`{.action} > `DNS-Zone`{.action} > Wählen Sie Ihren Domainnamen aus

---
<!-- CP-NAV-END:web-dns-zone -->

## In der praktischen Anwendung

> [!warning]
>
> Sie können mehrere DNS-Zonen (bei verschiedenen DNS- oder Hosting-Providern) für einen Domainnamen erstellen. Sie können jedoch nur eine aktive DNS-Zone für Ihre Domainnamen verwenden. Diese Beschränkung dient der Vermeidung von *DNS-Konflikten*.
>
> Die Aktivierung/Deaktivierung einer DNS-Zone erfolgt, indem die zugehörigen **DNS-Server** für den Domainnamen deklariert werden. Um diese **DNS-Server** und damit die Konfiguration eines Domainnamens zu ändern müssen die entsprechenden Einstellungen bei der zuständigen Stelle vorgenommen werden: 
>
> - Der *Registrar*, bei dem der Domainname registriert ist.
> - Ihr DNS-Anbieter, falls Sie Ihren Domainnamen über einen spezialisierten Dienstleister verwalten.
>
> Indem Sie die **DNS-Server** eines Domainnamens ändern, deaktivieren Sie die Konfiguration der bestehenden DNS-Zone zugunsten der neuen DNS-Zone, die auf den zu deklarierenden **DNS-Servern** liegt.
>
> Überprüfen Sie daher, bevor Sie die für Ihrem Domainnamen angegebenen **DNS-Server** ändern, ob die Konfiguration der neuen DNS-Zone Ihren Erwartungen entspricht.
>

### 1 - DNS-Zone über das OVHcloud Kundencenter erstellen

<!-- CP-STEPS-START:create-dns-zone -->
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
>> Auf der angezeigten Seite geben Sie den Domainnamen ein (z. B. *domain.tld*), für den Sie eine OVHcloud DNS-Zone erstellen möchten. Warten Sie einige Sekunden, während das Tool Prüfungen bezüglich des Domainnamens durchführt.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Falls eine Nachricht anzeigt, dass die DNS-Zone nicht erstellt werden kann, prüfen Sie, ob der Domainname die erforderlichen Voraussetzungen erfüllt, oder kontaktieren Sie die Person, die ihn verwaltet. Sobald alles korrekt ist, wiederholen Sie den Vorgang.
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
>> |Nein|Wählen Sie diese Option, wenn Sie OVHcloud Dienste wie zum Beispiel ein [Webhosting](/links/web/hosting) nutzen möchten. Die DNS-Zone ist hierfür bereits vorkonfiguriert.<br>![Minimum-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Nachdem Sie Ihre Auswahl getroffen haben, folgen Sie den angezeigten Schritten in Ihrem OVHcloud Kundencenter, bis die DNS-Zone erstellt ist.
<!-- CP-STEPS-END:create-dns-zone -->

### 2 - DNS-Zone bearbeiten (optional)

Sobald die DNS-Zone für Ihren Domainnamen erstellt wurde, können Sie sie bearbeiten. Dieser Vorgang ist optional, kann aber notwendig sein, wenn Sie die Verfügbarkeit der mit dieser Domainnamen verbundenen Dienste (wie Websites und E-Mails) aufrechterhalten möchten.

Um die DNS-Zone zu bearbeiten, lesen Sie unsere Anleitung "[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

> [!primary]
>
> Wenn Sie gerade die DNS-Zone erstellt haben und der Domainname noch nicht in der Liste Ihrer Dienstleistungen erscheint, warten Sie ca. 20 Minuten und laden Sie die Seite neu.
>

### 3 - DNS-Server des Domainnamens ändern

Sobald die OVHcloud DNS-Zone bereit ist, aktivieren Sie diese, indem Sie die neuen DNS-Server deklarieren. Ermitteln Sie hierfür zuerst die Namen der **DNS-Server** von OVHcloud, auf denen die OVHcloud DNS-Zone für Ihre Domainnamen erstellt wurde.

<!-- CP-STEPS-START:find-dns-servers -->
Um diese zu finden, klicken Sie auf die Tabs, um die **2** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
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
>> Die Namen der DNS-Server sollten eine der folgenden drei Formen haben:
>>
>> - `nsXX.ovh.net` und `dnsXX.ovh.net` oder, `nsXXX.ovh.net` und `dnsXXX.ovh.net` (wobei `X` eine Zahl zwischen **0** und **9** darstellt).
>> - `nsXX.ovh.ca` und `dnsXX.ovh.ca` oder, `nsXXX.ovh.ca` und `dnsXXX.ovh.ca` (wobei `X` eine Zahl zwischen **0** und **9** darstellt).
>> - `ns200.anycast.me` und `dns200.anycast.me` (wenn Sie die Option [DNS anycast](/links/web/domains-options) abonniert haben).
<!-- CP-STEPS-END:find-dns-servers -->

Sobald die beiden DNS-Server-Namen abgerufen wurden, gibt es zwei mögliche Szenarien.

> [!primary]
>
> Zur Erinnerung: Überprüfen Sie, bevor Sie die bei Ihrem Domainnamen angegebenen **DNS-Server** ändern, ob die Konfiguration der neuen DNS-Zone Ihren Erwartungen entspricht.

**Klicken Sie auf eines der beiden Szenarien, um den Inhalt anzuzeigen.**

/// details | Der Domainname hat seine aktive DNS-Zone bei OVHcloud

Lesen Sie [diese Anleitung](/pages/web_cloud/domains/dns_server_edit), um die für Ihren Domainnamen deklarierten DNS-Server zu überprüfen oder zu ändern.

///

/// details | Der Domainname hat seine aktive DNS-Zone bei einem anderen Anbieter

Kontaktieren Sie in diesem Fall Ihren DNS-Anbieter und teilen Sie ihm mit, dass Sie die DNS-Einträge vom Typ NS für Ihren Domainnamen ersetzen möchten.

Hier ein Beispiel für eine Anfrage an Ihren DNS-Anbieter:

<pre class="bgwhite"><code>
Guten Tag,

für meinen Domainnamen <b>domain.tld</b> möchte ich die aktuellen DNS-Server durch die folgenden DNS-Server ersetzen:

 - nsXX.ovh.net.
 - dnsXX.ovh.net.

Mit freundlichen Grüßen,
</code></pre>

Ersetzen Sie im obigen Beispiel die Werte **domain.tld**, **nsXX.ovh.net** und **dnsXX.ovh.net** durch Ihre eigenen Werte.

///

Nach der Änderung der DNS-Server des Domainnamens kann die Propagation der Änderungen bis zu **48 Stunden** dauern.

> [!success]
>
> Wenn Sie die Namen der DNS-Server individualisieren möchten, die die aktive DNS-Zone Ihres Domainnamens bereitstellen, lesen Sie unsere Anleitung “[DNS-Server von Domainnamen individualisieren (Glue Records)](/pages/web_cloud/domains/glue_registry)”.
>

## Weiterführende Informationen

[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)

[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)

[Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
