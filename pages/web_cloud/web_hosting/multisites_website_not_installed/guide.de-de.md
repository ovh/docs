---
title: 'Fehler "Seite nicht installiert" beheben'
excerpt: 'Erfahren Sie hier, wie Sie den Fehler "Seite nicht installiert" beheben'
updated: 2026-05-04
---

## Ziel 

Möglicherweise wird in Ihrem Webbrowser die Fehlerseite "**Seite nicht installiert**" angezeigt, insbesondere bei der ersten Installation Ihrer Website.

![website not installed](/pages/assets/screens/other/browsers/errors/site-not-installed.png){.thumbnail}

**Diese Anleitung erklärt, wie Sie den Fehler "Seite nicht installiert" beheben.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting) in Ihrem Kunden-Account.
- Sie verfügen über die erforderlichen Berechtigungen zum Verwalten der [DNS-Zone](/pages/web_cloud/domains/dns_zone_edit) des Domainnamens.

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

Die Seite "**Seite nicht installiert**" wird aus zwei Gründen angezeigt:

- 1: [Ihr Domainname oder Ihre Subdomain ist nicht korrekt auf einer der Webseiten auf Ihrem Webhosting deklariert](#check-my-websites).
- 2: [Ihr Domainname zeigt nicht auf die IP-Adresse Ihres Webhostings](#check-dns-domain).

Mit den folgenden Schritten können Sie in beiden Fällen den Fehler `Seite nicht installiert` beheben.

### 1 - Überprüfen Sie die Deklaration Ihres Domainnamens oder Ihrer Subdomain auf der Webseite, die auf Ihrem Webhosting bereitgestellt wird <a name="check-my-websites"></a>

<!-- CP-STEPS-START:check-my-websites -->
Klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![Meine Webseiten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie in der angezeigten Tabelle auf die Schaltfläche `>`{.action} links neben dem Namen der betreffenden Webseite, um die zugeordneten Domainnamen und Subdomänen anzuzeigen.
>>
>> ![Webseite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> |Szenarien|Auszuführende Aktionen|
>> |---|---|
>> |Der Domainname oder die Subdomain, die mit Ihrer Webseite verknüpft ist, **erscheint** in der Tabelle.|Wenn Sie gerade Ihren Domainnamen oder Ihre Subdomain auf der Webseite auf Ihrem Webhosting hinzugefügt haben, warten Sie etwa **zwanzig Minuten** und leeren Sie anschließend den Cache Ihres Browsers. Wenn die Meldung "Seite nicht installiert" weiterhin angezeigt wird, wechseln Sie zur [Teil 2](#check-dns-domain).|
>> |Der Domainname oder die Subdomain, die mit Ihrer Webseite verknüpft ist, **erscheint nicht** in der Tabelle.|Fügen Sie Ihren Domainnamen oder Ihre Subdomain gemäß unserer Anleitung "[Wie verknüpfe ich einen Domainnamen mit einer bestehenden Webseite?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)" hinzu.|
>> |Der Domainname oder die Subdomain **wurde aus der Tabelle gelöscht**, ohne dass Sie etwas getan haben.|Ihr Domainname oder seine DNS-Zone wird möglicherweise von einem anderen Account verwaltet. Fügen Sie Ihren Domainnamen oder Ihre Subdomain gemäß unserer Anleitung "[Wie verknüpfe ich einen Domainnamen mit einer bestehenden Webseite? - Externer Domainname hinzufügen](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)" hinzu.|
<!-- CP-STEPS-END:check-my-websites -->

### 2 - Überprüfen Sie den IP-Verweis in der aktiven DNS-Zone Ihrer Domain <a name="check-dns-domain"></a>

In diesem Schritt überprüfen Sie, dass Ihre Domain bzw. Subdomain über die aktive DNS-Zone auf die IP-Adresse Ihres Webhostings verweist.

> [!primary]
>
> Weitere Informationen zum Begriff DNS finden Sie auf den folgenden Seiten:
>
> - [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)
> - [OVHcloud DNS-Zone für eine Domainnamen erstellen](/pages/web_cloud/domains/dns_zone_create)
> - [DNS-Server eines OVHcloud Domainnamens ändern](/pages/web_cloud/domains/dns_server_edit)

#### 2\.1 IP-Adresse Ihres OVHcloud Webhostings identifizieren

<!-- CP-STEPS-START:check-dns-ip -->
Klicken Sie auf die Tabs, um die **2** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Im Feld **Allgemeine Informationen** finden Sie die Adresse unter **IPv4**.
>>
>> ![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Kopieren Sie die IPv4-Adresse und lesen Sie die Anleitung weiter.
<!-- CP-STEPS-END:check-dns-ip -->

Die Ihrem Webhosting zugeordnete IP-Adresse finden Sie auch in unserer Anleitung "[Webhosting - Liste der IP-Adressen pro Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".

#### 2\.2 Die in der aktiven DNS-Zone Ihrer Domain angegebene IP-Adresse überprüfen

Überprüfen Sie nun, ob die IP-Adresse Ihres Webhostings in der aktiven DNS-Zone Ihrer Domain angezeigt wird.

> [!primary]
>
> Vor dem Fortsetzen des Vorgangs kann es bei einer Änderung der aktiven DNS-Zone einer Domain zu einer Propagationsverzögerung von **4 bis 24 Stunden** kommen, um die Informationen im DNS-Netzwerk zu aktualisieren.
>
> Wenn Sie die mit Ihrer Domain verbundenen DNS-Server direkt ändern, kann die Bearbeitungszeit bis zu **48 Stunden** betragen.

<!-- CP-STEPS-START:check-multisite-root-folder -->
Klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Die angezeigte Tabelle zeigt für jede Zeile einen mit Ihrer Domain bei OVHcloud verbundenen DNS-Eintrag an. Sie können den Inhalt der Tabelle nach Eintragstyp oder Domainname filtern.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Wenn der Tab `DNS-Zone`{.action} Ihres Domainnamens wie folgt angezeigt wird:<br><br>![zone-without-domain-top-of-the-page](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}<br>
>> >
>> > Dies bedeutet, dass Ihr Domainname nicht über Ihr OVHcloud Kundencenter verwaltet wird.<br> Ermitteln Sie den zuständigen "Registrierungsstelle" sowie die zugehörigen DNS-Server mithilfe unseres [WHOIS](/links/web/domains-whois)-Tools.<br> Rufen Sie die entsprechende DNS-Zone ab und passen Sie sie ggf. an, indem Sie sich die dafür vorgesehene Rubrik in der Anleitung "[Wie verknüpfe ich einen Domainnamen mit einer bestehenden Webseite? - Externer Domainname hinzufügen](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)" ansehen.
>>
>> Fahren Sie mit Schritt 4 fort, um die verschiedenen Szenarien und zu ergreifenden Maßnahmen anzuzeigen.
>>
> **Schritt 3**
>>
>> |Mögliche Szenarien|Auszuführende Aktion|
>> |---|---|
>> |In der aktiven DNS-Zone verweist Ihr Domainname oder Ihre Subdomain auf die IP-Adresse Ihres Webhostings mit einem A-Eintrag (für eine IPv4-Adresse) oder AAAA-Eintrag (für eine IPv6-Adresse).<br><br>![DNS-Zone_IP2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}|Dies weist darauf hin, dass die Konfiguration Ihres Domainnamens korrekt ist.<br>Warten Sie, bis die DNS Propagation abgeschlossen ist. Die Änderung wurde vor kurzem vorgenommen.<br><br>Starten Sie Ihre Geräte neu (PC, Smartphone, Box), und leeren Sie den Cache Ihres Browsers. Es ist möglich, dass die alte Konfiguration Ihrer Domain noch im Cache gespeichert ist, was die Anzeige Ihres Updates verzögern kann.|
>> |Die aktive DNS-Zone enthält keine A- oder AAAA-Einträge, die Ihre Domain oder Subdomain mit der IP-Adresse Ihres Webhostings verbinden.|Fügen Sie den neuen A- oder AAAA-Eintrag hinzu, oder korrigieren Sie den vorhandenen Eintrag, indem Sie [diese Anleitung](/pages/web_cloud/domains/dns_zone_edit) befolgen.|
>> |Der vorhandene DNS-Eintrag vom Typ A oder AAAA in der DNS-Zone für Ihre Domain oder Subdomain verweist auf eine andere IP-Adresse als die Ihres Webhostings.|Fügen Sie den neuen DNS-Eintrag vom Typ A oder AAAA hinzu, oder korrigieren Sie den vorhandenen Eintrag, indem Sie [diese Anleitung](/pages/web_cloud/domains/dns_zone_edit) befolgen.|
>> |Diese Warnung erscheint im Tab `DNS-Zone`{.action}:<br><br>![message-other-ovh-dns-servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Ändern Sie die DNS-Server Ihrer Domain entsprechend unserer Anleitung "[DNS-Server einer OVHcloud Domain bearbeiten](/pages/web_cloud/domains/dns_server_edit)."|
<!-- CP-STEPS-END:check-multisite-root-folder -->

## Weitere Informationen <a name="go-further"></a>

[Liste der IP-Adressen von Clustern und Webhostings](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[Wie verknüpfe ich einen Domainnamen mit einer bestehenden Webseite?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)

[DNS-Server einer OVHcloud Domain bearbeiten](/pages/web_cloud/domains/dns_server_edit)

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

[OVHcloud DNS-Zone erstellen](/pages/web_cloud/domains/dns_zone_create)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
