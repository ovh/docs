---
title: "Konfiguration eines dynamischen DNS (DynHost/DynDNS) für Ihre Domainname"
excerpt: "Diese Anleitung erklärt, wie Sie einen dynamischen DNS-Eintrag (DynHost) für Ihre OVHcloud Domain einrichten."
updated: 2023-06-29
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die Konfigurationsdatei einer Domain ist die Zone **D**omain **N**ame **S**ystem (**DNS**). Sie besteht aus technischen Informationen, die als DNS-Einträge bezeichnet werden*. Die DNS Zone ist sozusagen wie ein Weichenzentrum. 

Geben Sie hierzu beispielsweise Folgendes an:

- IP-Adresse (DNS-Einträge vom Typ *A* und *AAAA*) Ihres Webhostings, um Ihre Website mit Ihrer Domain anzuzeigen.
- Die E-Mail Server (DNS-Einträge vom Typ *MX*), auf die Ihre Domain die E-Mails, die sie erhält, weiterleiten soll. So können Sie die E-Mail-Adressen Ihrer Domain einsehen.
- Informationen zur Sicherheit / Authentifizierung Ihrer mit Ihrer Domain verbundenen Dienstleistungen (Webhosting, Webserver, E-Mail-Server usw.) (DNS-Einträge vom Typ *SPF*, *DKIM*, *DMARC* etc.).

Wenn nötig, lesen Sie [unsere Dokumentation zu den DNS-Einträgen und zur Bearbeitung einer DNS-Zone](/pages/web/domains/dns_zone_edit) über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

Ein "dynamisches"Update eines DNS-Eintrags kann eine längere Unterbrechung Ihrer Dienste vermeiden, wenn Sie nicht über eine so genannte "feste"IP-Adresse verfügen (die sich nicht ändert).

So kann zum Beispiel **DynHost** verwendet werden, wenn Sie *Auto-Hosting* (in den Geschäftsräumen Ihres Unternehmens oder zu Hause über die *box* Ihres **Internetprovider**)) einen Videospielserver ohne IP-Adresse "fest".

**Diese Anleitung erklärt, wie Sie einen dynamischen DNS-Eintrag (DynHost) für Ihre OVHcloud Domain einrichten.**

## Voraussetzungen

- Sie haben über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} Zugriff auf die Verwaltung der betreffenden Domain.
- Die von OVHcloud angebotenen DNS-Server für die betreffende Domain verwenden.
- Der DynHost-Eintrag, den Sie erstellen möchten, muss noch nicht als "A"-Eintrag in der OVHcloud DNS-Zone Ihrer Domain vorhanden sein.

> [!warning]
>
> - Wenn Ihre Domain nicht die DNS-Server von OVHcloud verwendet, wenden Sie sich an den Anbieter/Anbieter, der seine DNS-Konfiguration verwaltet, um die Vorgehensweise auf dessen Ebene zu erfahren.
> 
> - Wenn Ihre Domain bei OVHcloud registriert ist, können Sie überprüfen, ob diese unsere Konfiguration verwendet. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf den Tab `Domainnamen`{.action} und wählen Sie dann die betreffende Domain aus. Klicken Sie auf der angezeigten Seite auf den Tab `DNS Server`{.action}, um die von Ihrer Domain verwendeten DNS Server anzuzeigen. 
>
> Ob Sie die DNS Server von OVHcloud verwenden oder nicht, diese haben folgende Form: 
>
> - **dnsXX.ovh.net** und **nsXX.ovh.net** (wobei die "**X**" Zahlen durch die Zahlen zu ersetzen sind, die die Server Ihrer Domain betreffen), wenn Sie die Option *DNS Anycast* nicht verwenden
> - **DNS200.anycast.me.** und **ns200.anycast.me**, wenn Sie die Option *DNS Anycast* verwenden
> 
> Mehr Informationen finden Sie in unserer Anleitung zu den [DNS Servern](/pages/web/domains/dns_server_general_information).
>

## In der praktischen Anwendung

### Schritt 1: DynHost-Benutzer erstellen <a name="step1"></a>

Um einen DynHost-Benutzer zu erstellen, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf den Tab `Domainnamen`{.action} und wählen Sie dann die betreffende Domain aus. Klicken Sie auf der angezeigten Seite auf den Tab `DynHost`{.action}.

![dynhost](images/use-dynhost-step1.png){.thumbnail}

Klicken Sie auf den Button `Zugriff verwalten`{.action} und dann auf `DynHost-Kennung erstellen`{.action}. Geben Sie im angezeigten Fenster die notwendigen Informationen ein.

|Information|Beschreibung|
|---|---|
|Suffix der Kennung|Legen Sie das Suffix der DynHost-Kennung fest.|
|Subdomain|Geben Sie die Subdomain an, für die der dynamische DNS-Eintrag erstellt wird. Wenn Sie alle Subdomains mit einer einzigen Kundenkennung verwalten möchten, geben Sie einfach `*` im Formular für die Eingabe an|
|Passwort|Legen Sie für die DynHost-Kennung ein Passwort fest und bestätigen dieses.|

Wenn Sie die Felder ausgefüllt haben, klicken Sie auf den Button `Bestätigen`{.action}. Die Kennung erscheint dann in der Tabelle auf der aktuell geöffneten Seite. Wiederholen Sie diesen Schritt, wenn Sie weitere DynHost-Kennungen anlegen möchten.

![dynhost](images/use-dynhost-step2.png){.thumbnail}

### Schritt 2: Dynamischen DNS-Eintrag (DynHost) erstellen <a name="step2"></a>

Im zweiten Schritt erstellen Sie den DNS-Eintrag, der dynamisch aktualisiert werden soll. Zur Erinnerung: Dieser darf nicht als A-Eintrag in der OVHcloud DNS-Zone Ihrer Domain vorhanden sein. Um den Eintrag zu überprüfen und wenn nötig zu löschen, lesen Sie bitte die Anleitung „[Bearbeiten der OVHcloud DNS-Zone](/pages/web/domains/dns_zone_edit){.external}“.

Gehen Sie für die Erstellung des DynHost-Eintrags nun zurück auf den Tab `DynHost`{.action} und klicken Sie auf den Button `DynHost hinzufügen`{.action}. Geben Sie im angezeigten Fenster die notwendigen Informationen ein.

|Information|Beschreibung|
|---|---|
|Subdomain|Geben Sie die Subdomain ein, deren DNS-Eintrag dynamisch aktualisiert werden soll. Diese Subdomain muss der bei der Erstellung des DynHost-Benutzers angegebenen Subdomain entsprechen.|
|Ziel-IP|Geben Sie die IP-Adresse (nur IPv4) ein, die derzeit für den DNS-Eintrag verwendet wird. Dies ist in der Regel die öffentliche IP-Adresse Ihres *box* Internets oder Ihres selbst gehosteten Servers. Nach dem DynHost-Prinzip wird diese automatisch im Nachhinein aktualisiert.|

> [!primary]
>
> Für die Einrichtung eines DynHost darf nur ein **IPv4** verwendet werden. Die **IPv6** sind nicht verfügbar.
>

Wenn Sie die Felder ausgefüllt haben, klicken Sie auf den Button `Bestätigen`{.action}. Der DynHost-Eintrag erscheint dann in der Tabelle auf der aktuell geöffneten Seite. Wiederholen Sie diesen Schritt, wenn Sie weitere DynHost-Einträge erstellen möchten.

![dynhost](images/use-dynhost-step3.png){.thumbnail}

### Schritt 3: DynHost-Änderung automatisieren

Sobald der [Benutzer](#step1) und der [DynHost-Eintrag](#step2) erstellt wurden, müssen Sie die Aktualisierung des DNS-Eintrags automatisieren, damit diese dynamisch durchgeführt wird. Verwenden Sie hierzu ein Programm/Client, das regelmäßig überprüft, ob sich die Ziel-IP geändert hat, um diese automatisch zu aktualisieren.

> [!warning]
>
> Installation und Konfiguration der Software/des Kunden müssen nach Ihren eigenen Kenntnissen erfolgen. Im Folgenden finden Sie einige Informationen zur Vorgehensweise. Wir empfehlen Ihnen jedoch, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren, wenn Sie Schwierigkeiten haben. Wir werden Ihnen diesbezüglich keine Hilfe anbieten können. 
> Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>

Es gibt mehrere Möglichkeiten für Software/Client: 

- Es kann auf Ihrem Server oder Ihrem Computer installiert werden.
- Es kann bereits im Interface Ihres Routers/*box* im Internet verfügbar sein, wenn dieser kompatibel ist. Wenn Sie in diesem Fall Schwierigkeiten haben, wenden Sie sich für die Konfiguration an den Support **ISP**.

Sobald der Kunde ausgewählt und installiert ist, muss er unter Verwendung der zuvor im OVHcloud Kundencenter erstellten DynHost-Benutzerinformationen konfiguriert werden.

Je nach verwendetem Client kann zusätzlich zu den Elementen des DynHost-Benutzers und der betreffenden Subdomain eine Update-URL erforderlich sein. Ist das der Fall, verwenden Sie die unten stehende URL-Adresse und ersetzen Sie die allgemeinen Informationen:

`https://www.ovh.com/nic/update?system=dyndns&hostname=**$HOSTNAME**&myip=**$IP**`

|Information|Ersetzen durch|
|---|---|
|$HOSTNAME|Die Subdomain, die von der Aktualisierung betroffen ist.|
|$IP|Die neue Ziel-IPv4-Adresse.|

Um zu überprüfen, ob die Ziel-IP aktualisiert wurde, gehen Sie in Ihrem Kundencenter in den Tab `DynHost`{.action}. Überprüfen Sie dort in der Spalte `Ziel`{.action} die angezeigte IP-Adresse.

Sie können überprüfen, ob die Ziel-IP aktualisiert wurde. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf den Tab`Domainnamen`{.action} und wählen Sie dann die betreffende Domain aus. Klicken Sie auf der angezeigten Seite auf den Tab `DynHost`{.action}. Überprüfen Sie die in der Spalte `Ziel`{.action} gezeigte IP-Adresse.

> [!warning]
>
> Jede Änderung der aktiven DNS Zone einer Domain kann zu einer Propagationszeit von 4 bis 24 Stunden führen.
>

![dynhost](images/use-dynhost-step4.png){.thumbnail}

## Weiterführende Informationen <a name="go-further"></a>

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
