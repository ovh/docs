---
title: "IPv6 für Ihre Website konfigurieren"
excerpt: "Diese Anleitung erklärt, wie Sie Ihre Website über eine IPv6-Adresse verfügbar machen"
updated: 2025-01-28
---

## Ziel

Das Internet läuft seit Anfang der 1990er Jahre unter Verwendung von IPv4. Mit diesem Standard werden mit dem öffentlichen Netzwerk verbundenen Geräten IP-Adressen im Format X.X.X.X (wobei "X" für Zahlen zwischen 0 und 255 steht) zur Verfügung gestellt (Server, Computer, Smartphones, etc.). Dieses Protokoll begrenzt jedoch die Anzahl der an das Internet angeschlossenen Geräte auf etwa 4 Milliarden, was für 2022 im Schnitt weniger als ein Gerät je zwei Personen der Weltbevölkerung bedeutet.

Aus diesem Grund wurde das **IPv6**-Protokoll eingeführt, mit dem bis zu 340 Sextillionen Geräte an das Internet angeschlossen werden können. Die umfassende Bereitstellung von IPv6 braucht Zeit, da die neue Norm für das gesamte Internet integriert werden muss.

Da weniger IPv4-Adressen zur Verfügung stehen, ist es schwieriger, neue Geräte mit dem IPv4-Standard ins Internet zu bringen. Verbindungen über IPv6-Adressen sind aber nur anwendbar, wenn die öffentlichen Ressourcen (z.B. Ihre Website) mit diesem Protokoll verfügbar sind. Das bedeutet, je mehr Websites mit IPv6 verfügbar werden, desto wichtiger wird es für alle beteiligten Akteure, auf dieses neue Protokoll umzusteigen.

Weitere Informationen finden Sie im [Wikipedia-Artikel](https://de.wikipedia.org/wiki/IPv6) zum IPv6-Protokoll.

Unsere Webhostings sind seit 2011 mit IPv6 kompatibel, doch die Aktivierung dieses Protokolls war bis vor kurzem eine optionale Konfigurationseinstellung.  

**Diese Anleitung erklärt, wie Sie prüfen, ob Ihre Website über IPv6 erreichbar ist und wie Sie die IPv6-Adresse Ihres Webhostings konfigurieren.**

## Voraussetzungen

- Sie verfügen über einen [Domainnamen](/links/web/domains).
- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Wir empfehlen Ihnen jedoch, bei Schwierigkeiten einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bieten wir leider keine Unterstützung. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).

Wenn Ihre Website nicht bereits mit IPv6 funktioniert, können Sie die [IPv6-Adresse Ihres OVHcloud Webhostings](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) der aktiven DNS-Zone Ihres Domainnamens hinzufügen. Ziel ist es, dass Webbrowser eine IPv6-Adresse finden, die mit Ihrer Website über Ihren Domainnamen verknüpft ist.

### 1 - Die IPv6-Verfügbarkeit Ihrer Website überprüfen

Um zu überprüfen, ob Ihre Website bereits eine IPv6-Adresse verwendet, können Sie Ihre URL auf der Website [ipv6-test.com](https://ipv6-test.com/validate.php) eingeben. Es wird geprüft, ob Ihre Website auf dieses IP-Protokoll reagiert. Ist das nicht der Fall, führen Sie die nachfolgenden Schritte aus.

### 2 - IPv6-Adresse Ihres Webhostings abrufen

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
>> Im Feld **Allgemeine Informationen** finden Sie die Adresse unter **IPv6**.
>>
>> ![IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv6.png){.thumbnail}
>>
>> Kopieren Sie die IPv6-Adresse und folgen Sie der Anleitung weiter.

### 3 - DNS-Zone Ihres Domainnamens konfigurieren

> [!warning]
>
> Unsere CDN-Optionen sind derzeit mit IPv6-Adressen nicht kompatibel. Wenn Sie eine IPv6-Adresse für Ihre Website konfigurieren, profitieren Ihre Besucher nicht vom CDN.
>
> Beachten Sie, dass ein Hinzufügen, Ändern oder Löschen von DNS-Einträgen in der aktiven DNS-Zone eines Domainnamens eine Propagationszeit von **4 bis 24 Stunden** benötigt, um voll wirksam zu sein.
>

Damit Ihr Internetbrowser die IPv6-Adresse mit Ihrem Domainnamen findet, müssen Sie die aktive DNS-Zone Ihrer Domain ändern.

Wenn die aktive DNS-Zone Ihrer Domain bei OVHcloud vorhanden ist, verwenden Sie unsere Anleitungen „[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)“ und „[Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)“, um einen DNS-Eintrag vom Typ **AAAA** zu erstellen.

Wenden Sie sich andernfalls unter Angabe der zuvor abgerufenen IPv6-Adresse an Ihren DNS-Anbieter.

## Weiterführende Informationen <a name="go-further"></a>

[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.