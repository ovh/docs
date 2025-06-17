---
title: "Konfiguration von dynamischen DNS-Aktualisierungen (DynHost/DynDNS) für Ihren Domainnamen"
excerpt: "Erfahren Sie hier, wie Sie einen dynamischen DNS-Eintrag (DynHost) für Ihren Domainnamen einrichten"
updated: 2025-04-28
---

## Ziel

Die **DNS**-Zone (**D**omain **N**ame **S**ystem) ist die Konfigurationsdatei eines Domainnamens, die sich aus **DNS-Einträgen** zusammensetzt. Das sind Datensätze, die dem Domainnamen verschiedene Dienste und Funktionen zuordnen.

Weitere Informationen finden Sie in folgenden Anleitungen:

- [Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)
- [Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)
- [Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

Das dynamische Aktualisieren eines DNS-Eintrags kann Unterbrechungen Ihrer Dienste verhindern, wenn Sie nicht über eine statische IP-Adresse verfügen.

So kann **DynHost** beispielsweise verwendet werden, um einen selbst gehosteten Game Server (in Geschäftsräumen oder privat) ohne feste IP-Adresse zu betreiben; das bedeutet, Ihr **I**nternet **S**ervice **P**rovider (**ISP**) vergibt regulär eine neue Adresse.

> [!primary]
>
> Jeder A- oder AAAA-Eintrag mit einer TTL (**T**ime **T**o **L**ive) von 60 Sekunden gilt als DynHost. Die TTL gibt an, wie lange DNS-Einträge von DNS-Servern zwischengespeichert werden, bevor sie aktualisiert werden.
>

**Diese Anleitung erklärt, wie Sie einen dynamischen DNS-Eintrag (DynHost) für Ihren OVHcloud Domainnamen einrichten.**

## Voraussetzungen

- Sie verfügen über einen Domainnamen.
- Sie haben eine DNS-Zone bei OVHcloud für den Domainnamen.
- Der Domainname verwendet OVHcloud DNS-Server als zuständige Namensserver.
- Der DynHost-Eintrag, den Sie erstellen möchten, darf noch nicht als A- oder AAAA-Eintrag in der DNS-Zone Ihres Domainnamens bei OVHcloud vorhanden sein.

**Wenn Ihr Domainname nicht die DNS-Server von OVHcloud verwendet**, kontaktieren Sie den Anbieter, der die DNS-Konfiguration Ihrer Domainname verwaltet, um sich über das weitere Vorgehen zu informieren.

**Wenn Ihr Domainname bei OVHcloud registriert ist**, können Sie überprüfen, ob er unsere Konfiguration verwendet. Klicken Sie hierzu auf die Registerkarten unten, um die einzelnen **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Domainnamen`{.action} und wählen Sie den Domainnamen aus.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Wählen Sie den Tab `DNS-Server`{.action} aus.
>>
>> ![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Die angezeigte Tabelle enthält die derzeit von OVHcloud für Ihre Domain definierten DNS-Server. Es können mehrere DNS-Server mit jeweils eigener Zeile in der Tabelle aufgeführt werden.
>>
>> ![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

> [!success]
>
> Um festzustellen, ob Sie die DNS-Server von OVHcloud verwenden oder nicht, prüfen Sie das Namensformat:
>
> - `nsXX.ovh.net` und `dnsXX.ovh.net` **oder** `nsXXX.ovh.net` und `dnsXXX.ovh.net` (wobei jedes `X` eine Ziffer zwischen **0** und **9** sein kann).
> - `ns200.anycast.me` und `dns200.anycast.me` (wenn die Option [DNS Anycast](/links/web/domains-options) aktiviert ist).
> 
> Mehr Informationen finden Sie in unserer [Dokumentation zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information).

## In der praktischen Anwendung

### 1 - DynHost-Benutzer erstellen <a name="step1"></a>

Klicken Sie jeweils auf die Tabs, um die **6** Schritte anzuzeigen.

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
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Wählen Sie den Tab `DynHost`{.action} aus.
>>
>> ![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Klicken Sie auf den Button `Zugriff verwalten`{.action} und dann auf `DynHost-Kennung erstellen`{.action}. 
>>
>> ![DynHost tab empty](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab-empty.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Geben Sie im neuen Fenster die notwendigen Informationen ein.
>>
>> |Information|Beschreibung|
>> |---|---|
>> |Suffix der Kennung|Legen Sie das Suffix der DynHost-Kennung fest.|
>> |Subdomain|Geben Sie die Subdomain an, für die der dynamische DNS-Eintrag erstellt wird. Wenn Sie alle Subdomains über diese Kennung verwalten möchten, geben Sie einfach `*` in das Feld ein|
>> |Passwort|Legen Sie für die DynHost-Kennung ein Passwort fest und bestätigen Sie es.|
>>
>> > [!success]
>> >
>> > Um einen DynHost für Ihren Domainnamen direkt einzurichten, geben Sie `*` in das Feld mit dem Namen `Subdomain`{.action} ein.
>> >
>>
>> ![Create a DynHost username](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost-username.png){.thumbnail}
>>
> **Schritt 6**
>>
>> Wenn Sie die Felder ausgefüllt haben, klicken Sie auf den Button `Bestätigen`{.action}. Die Kennung erscheint dann in der Tabelle auf der aktuellen Seite.
>>
>> ![DynHost tab](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab.png){.thumbnail}
>>

Wiederholen Sie diesen Schritt, wenn Sie weitere DynHost-Kennungen anlegen möchten.

### 2 - Dynamischen DNS-Eintrag (DynHost) erstellen <a name="step2"></a>

Im zweiten Schritt erstellen Sie den DNS-Eintrag, der dynamisch aktualisiert werden soll. Zur Erinnerung: Dieser darf nicht als A- oder AAAA-Eintrag in der OVHcloud DNS-Zone des Domainnamens vorhanden sein. Um den Eintrag zu überprüfen und wenn nötig zu löschen, können Sie die Anleitung „[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)“ verwenden.

Wenn Sie bereit sind, den DynHost-Eintrag zu erstellen, klicken Sie jeweils auf die Tabs, um die **5** Schritte anzuzeigen.

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
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Wählen Sie den Tab `DynHost`{.action} aus.
>>
>> ![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Klicken Sie auf den Button `DynHost hinzufügen`{.action}.
>>
>> ![DynHost tab empty](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab-empty.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Geben Sie im angezeigten Fenster die notwendigen Informationen ein.
>>
>> |Information|Beschreibung|
>> |---|---|
>> |Subdomain|Geben Sie die Subdomain ein, deren DNS-Eintrag dynamisch aktualisiert werden soll. Diese Subdomain muss der bei der Erstellung des DynHost-Benutzers angegebenen Subdomain entsprechen.<br><br>**Wenn Sie einen DynHost direkt für Ihren Domainnamen einrichten möchten, lassen Sie dieses Feld leer**|
>> |Ziel-IP|Geben Sie die IP-Adresse (IPv4 oder IPv6) ein, die derzeit für den DNS-Eintrag verwendet wird. Dies ist in der Regel die öffentliche IP-Adresse Ihrer Internet-Zugangsbox oder Ihres selbst gehosteten Servers.<br><br>Nach dem DynHost-Prinzip wird diese Adresse künftig automatisch aktualisiert.<br><br>In diesem Formular darf nur eine IP-Adresse angegeben werden.|
>>
>> > [!warning]
>> >
>> > Für die Einrichtung eines dynamischen DNS-Eintrags (DynHost) ist die Verwendung einer *wildcard* (nur das Zeichen `*`) im Formular `Subdomain`{.action} nicht verfügbar.
>>
>> ![dynhost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost.png){.thumbnail}
>>
>> Wenn Sie die Felder ausgefüllt haben, klicken Sie auf den Button `Bestätigen`{.action}. Der DynHost-Eintrag erscheint dann in der Tabelle auf der aktuell geöffneten Seite. 

Wiederholen Sie diesen Schritt, wenn Sie weitere DynHost-Einträge erstellen möchten.

> [!primary]
>
> Wenn Ihr Domainname oder Ihre Subdomain dynamisch konfiguriert werden muss, z. B. mit einer IPv4 und einer IPv6, können Sie zwei dynamische DNS-Einträge für denselben Domainnamen oder dieselbe Subdomain erstellen. Der erste dynamische DNS-Eintrag wird dann für IPv4 und der zweite für IPv6 erstellt.
>

### 3 - DynHost-Update automatisieren

Sobald der [Benutzer](#step1) und der [DynHost-Eintrag](#step2) erstellt wurden, müssen Sie die Aktualisierung des DNS-Eintrags automatisieren, damit diese dynamisch durchgeführt wird. Verwenden Sie hierzu einen Software-Client, der regelmäßig überprüft, ob sich die Ziel-IP geändert hat, um diese automatisch zu aktualisieren.

> [!warning]
>
> Die Installation und Konfiguration von Geräten und Software muss nach Ihren eigenen Kenntnissen erfolgen. Nachfolgend finden Sie einige Informationen zur Vorgehensweise. Wir empfehlen Ihnen jedoch, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren, wenn Sie Schwierigkeiten haben. Wir werden Ihnen diesbezüglich keine Hilfe anbieten können. 
> Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>

Es gibt mehrere Möglichkeiten der Client-Verwendung: 

- Eine Software kann auf Ihrem Server oder Ihrem Computer installiert werden.
- Eine entsprechende Funktion kann bereits im Interface Ihres Routers bzw. Ihrer Internetbox verfügbar sein, sofern kompatibel. Wenn Sie in diesem Fall Schwierigkeiten haben, wenden Sie sich für die Konfiguration an den Support Ihres **ISP**.

Wenn Ihr Client einsatzbereit ist, muss er unter Verwendung der zuvor im OVHcloud Kundencenter erstellten DynHost-Benutzerinformationen konfiguriert werden.

Je nach verwendetem Client kann zusätzlich zu DynHost-Benutzerinformationen und der Subdomain eine Update-URL erforderlich sein. Ist das der Fall, verwenden Sie die unten stehende URL und ersetzen Sie die generischen Elemente:

```bash
https://dns.eu.ovhapis.com/nic/update?system=dyndns&hostname=$HOSTNAME&myip=$IP
```

|Information|Ersetzen mit|
|---|---|
|$HOSTNAME|Subdomain, die von der Aktualisierung betroffen ist|
|$IP|Die neue IPv4- oder IPv6-Zieladresse.|

Sie können überprüfen, ob die Ziel-IP aktualisiert wurde. Klicken Sie jeweils auf die Tabs, um die **4** Schritte anzuzeigen.

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
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Wählen Sie den Tab `DynHost`{.action} aus.
>>
>> ![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Überprüfen Sie die in der Spalte `Ziel`{.action} angezeigte IP-Adresse.
>>
>> ![DynHost target](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/target.png){.thumbnail}
>>

> [!warning]
>
> Jede Änderung der aktiven DNS-Zone eines Domainnamens über DynDNS kann zu einer Verzögerung von mehreren Minuten bei der Propagation der Aktualisierung führen.
>

## Weiterführende Informationen <a name="go-further"></a>

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
