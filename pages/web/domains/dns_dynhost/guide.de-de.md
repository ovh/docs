---
title: "Konfiguration von dynamischen DNS-Aktualisierungen (DynHost/DynDNS) für Ihren Domainnamen"
excerpt: "Diese Anleitung erklärt, wie Sie einen dynamischen DNS-Eintrag (DynHost) für Ihre OVHcloud Domain einrichten."
updated: 2023-06-29
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die **DNS**-Zone (**D**omain **N**ame **S**ystem) ist die Konfigurationsdatei eines Domainnamens. Sie besteht aus **DNS-Einträgen**, Datensätzen die dem Domainnamen verschiedenen Diensten und Funktionen zuordnen, zum Beispiel:

- Die IP-Adresse (DNS-Einträge vom Typ *A* und *AAAA*) Ihres Hostings muss in der Zone eingetragen sein, damit Ihre Webseite angezeigt wird, wenn der Domainname in einen Browser eingegeben wird.
- Die E-Mail-Server (DNS-Einträge vom Typ *MX*), die E-Mails erhalten sollen, die an Adressen mit diesem Domainnamen versendet wurden. Wenn Sie die MX-Einträge Ihres Domainnamens konfigurieren, können Sie E-Mails über Ihre personalisierten E-Mail-Adressen empfangen.
- Informationen zur Sicherheit/Authentifizierung von Diensten (Webhosting, Webserver, E-Mail-Server, etc.), die mit Ihrem Domainnamen verbunden sind (DNS-Einträge vom Typ *SPF*, *DKIM*, *DMARC*, etc.).

Für weitere Informationen zu DNS-Zonen und wie Sie diese im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) editieren, lesen Sie [unsere Dokumentation zu DNS](/pages/web/domains/dns_zone_edit).

Das dynamische Aktualisieren eines DNS-Eintrags kann Unterbrechungen Ihrer Dienste verhindern, wenn Sie nicht über eine statische IP-Adresse verfügen.

So kann **DynHost** beispielsweise verwendet werden, um einen selbst gehosteten Game Server (in Geschäftsräumen oder privat) ohne feste IP-Adresse zu betreiben; das bedeutet, Ihr **I**nternet **S**ervice **P**rovider (**ISP**) vergibt regulär eine neue Adresse.

**Diese Anleitung erklärt, wie Sie einen dynamischen DNS-Eintrag (DynHost) für Ihren OVHcloud Domainnamen einrichten.**

## Voraussetzungen

- Sie haben über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} Zugriff auf die Verwaltung des Domainnamens.
- Der Domainname verwendet OVHcloud DNS-Server als zuständige Namensserver.
- Der DynHost-Eintrag, den Sie erstellen möchten, darf noch nicht als "A"-Eintrag in der DNS-Zone Ihres Domainnamens bei OVHcloud vorhanden sein.

> [!warning]
>
> - Wenn Ihr Domainname nicht die DNS-Server von OVHcloud verwendet, wenden Sie sich an den Dienstanbieter, der die DNS-Konfiguration verwaltet.
> 
> - Wenn Ihre Domainname bei OVHcloud registriert ist, können Sie überprüfen, ob unsere Konfiguration verwendet wird. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf den Tab `Domainnamen`{.action} und wählen Sie dann den Domainnamen aus. Klicken Sie auf dieser Seite auf den Tab `DNS-Server`{.action}, um die aktuell verwendeten DNS-Server anzuzeigen. 
>
> OVHcloud DNS-Server haben folgendes Namensformat: 
>
> - **dnsXX.ovh.net** und **nsXX.ovh.net** (wobei **XX** für die Nummer des spezifischen DNS-Servers steht), wenn Sie die Option *DNS Anycast* nicht verwenden
> - **dns200.anycast.me.** und **ns200.anycast.me**, wenn Sie die Option *DNS Anycast* verwenden
> 
> Mehr Informationen finden Sie in unserer [Dokumentation zu DNS-Servern](/pages/web/domains/dns_server_general_information).
>

## In der praktischen Anwendung

### Schritt 1: DynHost-Benutzer erstellen <a name="step1"></a>

Um einen DynHost-Benutzer zu erstellen, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf den Tab `Domainnamen`{.action} und wählen Sie den Domainnamen aus. Klicken Sie auf dieser Seite auf den Tab `DynHost`{.action}.

![dynhost](images/use-dynhost-step1.png){.thumbnail}

Klicken Sie auf den Button `Zugriff verwalten`{.action} und dann auf `DynHost-Kennung erstellen`{.action}. Geben Sie im neuen Fenster die notwendigen Informationen ein.

|Information|Beschreibung|
|---|---|
|Suffix der Kennung|Legen Sie das Suffix der DynHost-Kennung fest.|
|Subdomain|Geben Sie die Subdomain an, für die der dynamische DNS-Eintrag erstellt wird. Wenn Sie alle Subdomains über diese Kennung verwalten möchten, geben Sie einfach `*` in das Feld ein|
|Passwort|Legen Sie für die DynHost-Kennung ein Passwort fest und bestätigen Sie es.|

Wenn Sie die Felder ausgefüllt haben, klicken Sie auf den Button `Bestätigen`{.action}. Die Kennung erscheint dann in der Tabelle auf der aktuellen Seite. Wiederholen Sie diesen Schritt, wenn Sie weitere DynHost-Kennungen anlegen möchten.

![dynhost](images/use-dynhost-step2.png){.thumbnail}

### Schritt 2: Dynamischen DNS-Eintrag (DynHost) erstellen <a name="step2"></a>

Im zweiten Schritt erstellen Sie den DNS-Eintrag, der dynamisch aktualisiert werden soll. Zur Erinnerung: Dieser darf nicht als A-Eintrag in der OVHcloud DNS-Zone des Domainnamens vorhanden sein. Um den Eintrag zu überprüfen und wenn nötig zu löschen, können Sie die Anleitung „[Bearbeiten der OVHcloud DNS-Zone](/pages/web/domains/dns_zone_edit)“ verwenden.

Gehen Sie für die Erstellung des DynHost-Eintrags nun zurück auf den Tab `DynHost`{.action} und klicken Sie auf den Button `DynHost hinzufügen`{.action}. Geben Sie im angezeigten Fenster die notwendigen Informationen ein.

|Information|Beschreibung|
|---|---|
|Subdomain|Geben Sie die Subdomain ein, deren DNS-Eintrag dynamisch aktualisiert werden soll. Diese Subdomain muss der bei der Erstellung des DynHost-Benutzers angegebenen Subdomain entsprechen.|
|Ziel-IP|Geben Sie die IP-Adresse (nur IPv4) ein, die derzeit für den DNS-Eintrag verwendet wird. Dies ist in der Regel die öffentliche IP-Adresse Ihrer Internet-Zugangsbox oder Ihres selbst gehosteten Servers. Nach dem DynHost-Prinzip wird diese Adresse künftig automatisch aktualisiert.|

> [!primary]
>
> Für die Einrichtung eines DynHost kann nur eine **IPv4**-Adresse verwendet werden. **IPv6** ist derzeit nicht verfügbar.
>

Wenn Sie die Felder ausgefüllt haben, klicken Sie auf den Button `Bestätigen`{.action}. Der DynHost-Eintrag erscheint dann in der Tabelle auf der aktuell geöffneten Seite. Wiederholen Sie diesen Schritt, wenn Sie weitere DynHost-Einträge erstellen möchten.

![dynhost](images/use-dynhost-step3.png){.thumbnail}

### Schritt 3: DynHost-Update automatisieren

Sobald der [Benutzer](#step1) und der [DynHost-Eintrag](#step2) erstellt wurden, müssen Sie die Aktualisierung des DNS-Eintrags automatisieren, damit diese dynamisch durchgeführt wird. Verwenden Sie hierzu einen Software-Client, der regelmäßig überprüft, ob sich die Ziel-IP geändert hat, um diese automatisch zu aktualisieren.

> [!warning]
>
> Die Installation und Konfiguration von Geräten und Software muss nach Ihren eigenen Kenntnissen erfolgen. Nachfolgend finden Sie einige Informationen zur Vorgehensweise. Wir empfehlen Ihnen jedoch, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren, wenn Sie Schwierigkeiten haben. Wir werden Ihnen diesbezüglich keine Hilfe anbieten können. 
> Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>

Es gibt mehrere Möglichkeiten der Client-Verwendung: 

- Eine Software kann auf Ihrem Server oder Ihrem Computer installiert werden.
- Eine entsprechende Funktion kann bereits im Interface Ihres Routers bzw. Ihrer Internetbox verfügbar sein, sofern kompatibel. Wenn Sie in diesem Fall Schwierigkeiten haben, wenden Sie sich für die Konfiguration an den Support Ihres **ISP**.

Wenn Ihr Client einsatzbereit ist, muss er unter Verwendung der zuvor im OVHcloud Kundencenter erstellten DynHost-Benutzerinformationen konfiguriert werden.

Je nach verwendetem Client kann zusätzlich zu DynHost-Benutzerinformationen und der Subdomain eine Update-URL erforderlich sein. Ist das der Fall, verwenden Sie die unten stehende URL und ersetzen Sie die generischen Elemente:

`https://www.ovh.com/nic/update?system=dyndns&hostname=**$HOSTNAME**&myip=**$IP**`

|Information|Ersetzen mit|
|---|---|
|$HOSTNAME|Subdomain, die von der Aktualisierung betroffen ist|
|$IP|Neue Ziel-IPv4-Adresse|

Um zu überprüfen, ob die Ziel-IP aktualisiert wurde, gehen Sie in Ihrem Kundencenter zum Tab `DynHost`{.action}. Überprüfen Sie dort in der Spalte `Ziel`{.action} die angezeigte IP-Adresse.

Sie können überprüfen, ob die Ziel-IP aktualisiert wurde. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf den Tab `Domainnamen`{.action} und wählen Sie dann den Domainnamen aus. Klicken Sie auf dieser Seite auf den Tab `DynHost`{.action}. Überprüfen Sie die in der Spalte `Ziel`{.action} angezeigte IP-Adresse.

> [!warning]
>
> Jede Änderung der aktiven DNS Zone eines Domainnamenns kann zu einer Propagationszeit von 4 bis 24 Stunden führen.
>

![dynhost](images/use-dynhost-step4.png){.thumbnail}

## Weiterführende Informationen <a name="go-further"></a>

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
