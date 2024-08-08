---
title: "Konfiguration von dynamischen DNS-Aktualisierungen (DynHost/DynDNS) für Ihren Domainnamen"
excerpt: "Erfahren Sie hier, wie Sie einen dynamischen DNS-Eintrag (DynHost) für Ihren Domainnamen einrichten"
updated: 2024-07-12
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

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

- Sie haben über Ihr [OVHcloud Kundencenter](/links/manager){.external} Zugriff auf die Verwaltung des Domainnamens.
- Der Domainname verwendet OVHcloud DNS-Server als zuständige Namensserver.
- Der DynHost-Eintrag, den Sie erstellen möchten, darf noch nicht als A- oder AAAA-Eintrag in der DNS-Zone Ihres Domainnamens bei OVHcloud vorhanden sein.

> [!warning]
>
> - Wenn Ihr Domainname nicht die DNS-Server von OVHcloud verwendet, wenden Sie sich an den Dienstanbieter, der die DNS-Konfiguration verwaltet.
> 
> - Wenn Ihre Domainname bei OVHcloud registriert ist, können Sie überprüfen, ob unsere Konfiguration verwendet wird. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](/links/manager){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf den Tab `Domainnamen`{.action} und wählen Sie dann den Domainnamen aus. Klicken Sie auf dieser Seite auf den Tab `DNS-Server`{.action}, um die aktuell verwendeten DNS-Server anzuzeigen. 
>
> OVHcloud DNS-Server haben folgendes Namensformat: 
>
> - **dnsXX.ovh.net** und **nsXX.ovh.net** (wobei **XX** für die Nummer des spezifischen DNS-Servers steht), wenn Sie die Option *DNS Anycast* nicht verwenden
> - **dns200.anycast.me.** und **ns200.anycast.me**, wenn Sie die Option *DNS Anycast* verwenden
> 
> Mehr Informationen finden Sie in unserer [Dokumentation zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information).
>

## In der praktischen Anwendung

### Schritt 1: DynHost-Benutzer erstellen <a name="step1"></a>

Um einen DynHost-Benutzer zu erstellen, loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf den Tab `Domainnamen`{.action} und wählen Sie den Domainnamen aus. Klicken Sie auf dieser Seite auf den Tab `DynHost`{.action}.

![dynhost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab.png){.thumbnail}

Klicken Sie auf den Button `Zugriff verwalten`{.action} und dann auf `DynHost-Kennung erstellen`{.action}. Geben Sie im neuen Fenster die notwendigen Informationen ein.

|Information|Beschreibung|
|---|---|
|Suffix der Kennung|Legen Sie das Suffix der DynHost-Kennung fest.|
|Subdomain|Geben Sie die Subdomain an, für die der dynamische DNS-Eintrag erstellt wird. Wenn Sie alle Subdomains über diese Kennung verwalten möchten, geben Sie einfach `*` in das Feld ein|
|Passwort|Legen Sie für die DynHost-Kennung ein Passwort fest und bestätigen Sie es.|

> [!success]
>
> Um einen DynHost für Ihren Domainnamen direkt einzurichten, geben Sie `*` in das Feld mit dem Namen `Subdomain`{.action} ein.
>

Wenn Sie die Felder ausgefüllt haben, klicken Sie auf den Button `Bestätigen`{.action}. Die Kennung erscheint dann in der Tabelle auf der aktuellen Seite. Wiederholen Sie diesen Schritt, wenn Sie weitere DynHost-Kennungen anlegen möchten.

![dynhost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost-username.png){.thumbnail}

### Schritt 2: Dynamischen DNS-Eintrag (DynHost) erstellen <a name="step2"></a>

Im zweiten Schritt erstellen Sie den DNS-Eintrag, der dynamisch aktualisiert werden soll. Zur Erinnerung: Dieser darf nicht als A- oder AAAA-Eintrag in der OVHcloud DNS-Zone des Domainnamens vorhanden sein. Um den Eintrag zu überprüfen und wenn nötig zu löschen, können Sie die Anleitung „[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)“ verwenden.

Gehen Sie für die Erstellung des DynHost-Eintrags nun zurück auf den Tab `DynHost`{.action} und klicken Sie auf den Button `DynHost hinzufügen`{.action}. Geben Sie im angezeigten Fenster die notwendigen Informationen ein.

|Information|Beschreibung|
|---|---|
|Subdomain|Geben Sie die Subdomain ein, deren DNS-Eintrag dynamisch aktualisiert werden soll. Diese Subdomain muss der bei der Erstellung des DynHost-Benutzers angegebenen Subdomain entsprechen. **Wenn Sie einen DynHost direkt für Ihren Domainnamen einrichten möchten, lassen Sie dieses Feld leer**|
|Ziel-IP|Geben Sie die IP-Adresse (IPv4 oder IPv6) ein, die derzeit für den DNS-Eintrag verwendet wird. Dies ist in der Regel die öffentliche IP-Adresse Ihrer Internet-Zugangsbox oder Ihres selbst gehosteten Servers. Nach dem DynHost-Prinzip wird diese Adresse künftig automatisch aktualisiert.|

> [!warning]
>
> Für die Einrichtung eines dynamischen DNS-Eintrags (DynHost) ist die Verwendung einer *wildcard* (nur das Zeichen `*`) im Formular `Subdomain`{.action} nicht verfügbar.
>

![dynhost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost.png){.thumbnail}

Wenn Sie die Felder ausgefüllt haben, klicken Sie auf den Button `Bestätigen`{.action}. Der DynHost-Eintrag erscheint dann in der Tabelle auf der aktuell geöffneten Seite. Wiederholen Sie diesen Schritt, wenn Sie weitere DynHost-Einträge erstellen möchten.

### Schritt 3: DynHost-Update automatisieren

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

Sie können überprüfen, ob die Ziel-IP aktualisiert wurde. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf den Tab `Domainnamen`{.action} und wählen Sie dann den Domainnamen aus. Klicken Sie auf dieser Seite auf den Tab `DynHost`{.action}. Überprüfen Sie die in der Spalte `Ziel`{.action} angezeigte IP-Adresse.

> [!warning]
>
> Jede Änderung der aktiven DNS-Zone eines Domainnamens über DynDNS kann zu einer Verzögerung von mehreren Minuten bei der Propagation der Aktualisierung führen.
>

![dynhost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/target.png){.thumbnail}

## Weiterführende Informationen <a name="go-further"></a>

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.