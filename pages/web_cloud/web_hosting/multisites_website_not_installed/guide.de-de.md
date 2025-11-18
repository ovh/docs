---
title: 'Fehler "Seite nicht installiert" beheben'
excerpt: 'Erfahren Sie hier, wie Sie den Fehler "Seite nicht installiert" beheben'
updated: 2025-08-25
---

> [!success]
> Nehmen Sie an unserer Umfrage teil und helfen Sie uns, diese Anleitung zu verbessern!<br>
> Teilen Sie uns Ihre Meinung und Ihre Ideen mit.<br>
> [Zur Umfrage wechseln.](https://s.elq.fr/ovhext/B4nKjrd)

## Ziel 

Möglicherweise wird in Ihrem Webbrowser die Fehlerseite "**Seite nicht installiert**" angezeigt, insbesondere bei der ersten Installation Ihrer Website.

![website not installed](/pages/assets/screens/other/browsers/errors/site-not-installed.png){.thumbnail}

**Diese Anleitung erklärt, wie Sie den Fehler "Seite nicht installiert" beheben.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting) in Ihrem Kunden-Account.
- Sie verfügen über die erforderlichen Berechtigungen zum Verwalten der [DNS-Zone](/pages/web_cloud/domains/dns_zone_edit) des Domainnamens.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

Die Seite "**Seite nicht installiert**" wird aus zwei Gründen angezeigt:

- 1: [Ihr Domainname oder Ihre Subdomain ist auf Ihrem Webhosting nicht korrekt deklariert](#check-multisites).
- 2: [Ihr Domainname zeigt nicht auf die IP-Adresse Ihres Webhostings](#check-dns-domain).

Mit den folgenden Schritten können Sie in beiden Fällen den Fehler `Seite nicht installiert` beheben.

### 1 - Überprüfen Sie die Deklaration Ihrer Domain oder Subdomain auf Ihrem Webhosting <a name="check-multisites"></a>

Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Tab `Multisite`{.action}.
>>
>> ![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/multisite.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Auf der neu geöffneten Seite wird eine Tabelle angezeigt.
>>
>> ![Multisite Interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/tab.png){.thumbnail}
>>
>> |Szenarios|Auszuführende Aktionen|
>> |---|---|
>> |Der Domainname oder die Subdomain Ihrer Website **erscheint** in der Tabelle „Multisite“.|Wenn Sie Ihre Domain oder Subdomain gerade im Bereich `Multisite`{.action} Ihres Webhostings hinzugefügt haben, warten Sie etwa **zwanzig Minuten** und laden Sie den Cache Ihres Webbrowsers neu. Wenn weiterhin die Meldung „Seite nicht installiert“ angezeigt wird, fahren Sie mit [Teil 2](#check-dns-domain) fort.|
>> |Der Domainname oder die Subdomain Ihrer Website **wird nicht** in der Tabelle „Multisite“ angezeigt.|Fügen Sie Ihren Domainnamen oder Ihre Subdomain im Bereich `Multisite`{.action} hinzu, indem Sie den entsprechenden Abschnitt der Anleitung „[Mehrere Websites auf einem Webhosting einrichten - Eine Domain oder Subdomain hinzufügen](/pages/web_cloud/web_hosting/multisites_configure_multisite)“ folgen.|
>> |Der Domainname oder die Subdomain **wurde** ohne Aktion Ihrerseits aus der Tabelle „Multisite“ entfernt.|Ihre Domain oder die dazugehörige DNS-Zone wird möglicherweise von einem anderen Konto aus verwaltet. Fügen Sie Ihren Domainnamen oder Ihre Subdomain im Bereich `Multisite`{.action} hinzu, indem Sie den entsprechenden Abschnitt der Anleitung „[Mehrere Websites auf einem Webhosting einrichten - Eine externe Domain hinzufügen](/pages/web_cloud/web_hosting/multisites_configure_multisite)“ folgen.|

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

Klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im Feld **Allgemeine Informationen** finden Sie die Adresse unter **IPv4**.
>>
>> ![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Kopieren Sie die IPv4-Adresse und lesen Sie die Anleitung weiter.

Die Ihrem Webhosting zugeordnete IP-Adresse finden Sie auch in unserer Anleitung „[Webhosting - Liste der IP-Adressen pro Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)“.

#### 2\.2 Die in der aktiven DNS-Zone Ihrer Domain angegebene IP-Adresse überprüfen

Überprüfen Sie nun, ob die IP-Adresse Ihres Webhostings in der aktiven DNS-Zone Ihrer Domain angezeigt wird.

> [!primary]
>
> Vor dem Fortsetzen des Vorgangs kann es bei einer Änderung der aktiven DNS-Zone einer Domain zu einer Propagationsverzögerung von **4 bis 24 Stunden** kommen, um die Informationen im DNS-Netzwerk zu aktualisieren.
>
> Wenn Sie die mit Ihrer Domain verbundenen DNS-Server direkt ändern, kann die Bearbeitungszeit bis zu **48 Stunden** betragen.

Klicken Sie hierzu auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie den Domainnamen aus.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Wenn Ihr Domainname nicht in der angezeigten Liste aufgeführt ist, wird seine DNS-Zone nicht über Ihr OVHcloud Kundencenter verwaltet.<br>
>> > Bestimmen Sie über unser Tool [WHOIS](/links/web/domains-whois) seinen Registrar und die DNS-Server, mit denen er verbunden ist.<br>
>> > Suchen Sie die betreffende DNS-Zone und ändern Sie sie entsprechend. Folgen Sie hierzu dem entsprechenden Abschnitt der Anleitung „[Mehrere Websites auf einem Webhosting einrichten - Eine externe Domain hinzufügen](/pages/web_cloud/web_hosting/multisites_configure_multisite)“.
>>
> **Schritt 3**
>>
>> Die angezeigte Tabelle zeigt für jede Zeile einen mit Ihrer Domain bei OVHcloud verbundenen DNS-Eintrag an. Sie können den Inhalt der Tabelle nach Eintragstyp oder Domainname filtern.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Wenn der Tab `DNS-Zone`{.action} Ihres Domainnamens wie folgt angezeigt wird:<br><br>![zone-without-domain-top-of-the-page](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}<br>
>> >
>> > Dies bedeutet, dass Ihre Domain nicht über Ihr OVHcloud Kundencenter verwaltet wird.<br> Bestimmen Sie über unser Tool [WHOIS](/links/web/domains-whois) den Registrar und die DNS-Server, mit denen sie verbunden ist.<br> Suchen Sie die betreffende DNS-Zone und ändern Sie sie entsprechend. Folgen Sie hierzu dem entsprechenden Abschnitt der Anleitung „[Mehrere Websites auf einem Webhosting einrichten - Eine externe Domain hinzufügen](/pages/web_cloud/web_hosting/multisites_configure_multisite)“.
>>
>> Fahren Sie mit Schritt 4 fort, um die verschiedenen Szenarien und zu ergreifenden Maßnahmen anzuzeigen.
>>
> **Schritt 4**
>>
>> |Mögliche Szenarien|Auszuführende Aktion|
>> |---|---|
>> |In der aktiven DNS-Zone verweist Ihr Domainname oder Ihre Subdomain auf die IP-Adresse Ihres Webhostings mit einem A-Eintrag (für eine IPv4-Adresse) oder AAAA-Eintrag (für eine IPv6-Adresse).<br><br>![DNS-Zone_IP2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}|Dies weist darauf hin, dass die Konfiguration Ihres Domainnamens korrekt ist.<br>Warten Sie, bis die DNS Propagation abgeschlossen ist. Die Änderung wurde vor kurzem vorgenommen.<br><br>Starten Sie Ihre Geräte neu (PC, Smartphone, Box), und leeren Sie den Cache Ihres Browsers. Es ist möglich, dass die alte Konfiguration Ihrer Domain noch im Cache gespeichert ist, was die Anzeige Ihres Updates verzögern kann.|
>> |Die aktive DNS-Zone enthält keine A- oder AAAA-Einträge, die Ihre Domain oder Subdomain mit der IP-Adresse Ihres Webhostings verbinden.|Fügen Sie den neuen A- oder AAAA-Eintrag hinzu, oder korrigieren Sie den vorhandenen Eintrag, indem Sie [diese Anleitung](/pages/web_cloud/domains/dns_zone_edit) befolgen.|
>> |Der vorhandene DNS-Eintrag vom Typ A oder AAAA in der DNS-Zone für Ihre Domain oder Subdomain verweist auf eine andere IP-Adresse als die Ihres Webhostings.|Fügen Sie den neuen DNS-Eintrag vom Typ A oder AAAA hinzu, oder korrigieren Sie den vorhandenen Eintrag, indem Sie [diese Anleitung](/pages/web_cloud/domains/dns_zone_edit) befolgen.|
>> |Diese Warnung erscheint im Tab `DNS-Zone`{.action}:<br><br>![message-other-ovh-dns-servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Ändern Sie die DNS-Server Ihrer Domain entsprechend unserer Anleitung „[DNS-Server einer OVHcloud-Domain bearbeiten](/pages/web_cloud/domains/dns_server_edit).“|

## Weitere Informationen <a name="go-further"></a>

[Liste der IP-Adressen von Clustern und Webhostings](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[DNS-Server einer OVHcloud Domain bearbeiten](/pages/web_cloud/domains/dns_server_edit)

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

[OVHcloud DNS-Zone erstellen](/pages/web_cloud/domains/dns_zone_create)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.