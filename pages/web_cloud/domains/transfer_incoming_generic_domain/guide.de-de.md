---
title: "Domainnamen zu OVHcloud transferieren"
excerpt: "Erfahren Sie hier, wie Sie Ihren Domainnamen zu OVHcloud transferieren"
updated: 2024-06-28
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MILAnKdjHns" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Ziel

Ihr Domainname wird derzeit von einem anderen **Registrar** verwaltet und Sie möchten ihn zu OVHcloud umziehen? Sie können dazu einen Transfervorgang einleiten.

Wenn Sie Ihren Domainname transferieren, ändern Sie dessen **Registrar**. Sie können Ihren Domainnamen zu OVHcloud übertragen, indem Sie eine Bestellung erzeugen; der Transfervorgang dauert anschließend bis zu 10 Tage.

**Diese Anleitung erklärt, wie Sie einen generischen Domainnamen zu OVHcloud transferieren.**

> [!warning]
>
> Der Domainnamen-*Registrar* ist ein Diensteanbieter, der authorisiert ist, Domainnamen zur Registrierung seitens Privatpersonen, Unternehmen oder sonstigen Organisationen anzubieten. Sie verlängern ein Domainnamen-Abonnement bei Ihrem *Registrar*, üblicherweise jährlich.
>
> Wenn OVHcloud bereits der *Registrar* Ihres Domainnamens ist, ist der Prozess des *eingehenden Transfers* nicht für diesen Domainnamen anwendbar. Das in dieser Anleitung beschriebene Verfahren für *eingehende Domaintransfers* gilt **nur** für Domainnamen, die derzeit bei einem anderen *Registrar* als OVHcloud registriert sind.
>
> Um die Verwaltung des Domainnamens einem anderen OVHcloud Kunden-Account zu übertragen, muss stattdessen eine **Änderung der Kontakte** durchgeführt werden. Die Vorgehensweise wird in [unserer Anleitung zur Kontakteverwaltung](/pages/account_and_service_management/account_information/managing_contacts) beschrieben.
>
> Wenn auch der **Inhaber des Domainnamens** geändert werden muss, sollte dies erfolgen, **bevor** Sie die Kontakte des Domainnamens ändern. Verwenden Sie dazu [unsere Anleitung zum Inhaberwechsel für Domainnamen](/pages/web_cloud/domains/trade_domain).
>
> Wenn Sie neben dem Transfer Ihrer Domain auch die dazugehörigen Dienste (Website, E-Mail, etc.) migrieren möchten, lesen Sie zuerst unsere Anleitung „[Website und dazugehörige Dienste zu OVHcloud migrieren](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)“, bevor Sie fortfahren.
> In dieser Anleitung erfahren Sie, wie Sie alle Ihre Dienstleistungen ohne Unterbrechung migrieren.
>
> Wenn Sie Ihren Domainnamen nur transferieren, ohne Ihre anderen Dienste zu verlegen, stellen Sie sicher, dass Sie die aktiven DNS-Server für Ihren Domainnamen von Ihrem **aktuellen Registrar** erfahren, um diese direkt in  Schritt 3 dieser Anleitung einzugeben.
> So wird vermieden, dass die Zuordnung zwischen Ihrem Domainnamen und den zugehörigen externen Diensten unterbrochen wird.
>

## Voraussetzungen

- Sie verfügen über einen Domainnamen bei einem anderen Registrar.
- Der Domainname existiert seit mehr als 60 Tagen.
- Der Domainname wurde in den letzten 60 Tagen nicht transferiert und der Inhaber wurde nicht geändert.
- Der Zustand des Domainnamens ist "OK" oder "Transferable".
- Der Domainname ist nicht abgelaufen und hat ein Ablaufdatum, das den Transfer noch ermöglicht (empfohlen sind mehr als 60 Tage).
- Der Domainname ist zum Transfer entsperrt und Sie haben bereits den Transfer-Code oder können ihn anfordern.
- Sie besitzen die Verfügungsberechtigung, um den Transfer des Domainnamens zu veranlassen.
- Der Domaininhaber und/oder dessen Administratoren sind über den Transfer informiert.

## In der praktischen Anwendung

> [!success]
>
> Um die Transferkosten anzuzeigen, geben Sie den Domainnamen, den Sie transferieren möchten, auf unserer Webseite ein: [www.ovhcloud.com/de/domains/tld/](/links/web/domains-tld). Folgen Sie dann den Schritten dieser Anleitung.
>

Der Transferprozess umfasst mehrere Schritte. Diese erfordern die Kontaktaufnahme mit Ihrem aktuellen Registrar und OVHcloud. Die folgende Tabelle enthält die zu kontaktierenden Stellen sowie die Dauer der verschiedenen Schritte des Transfervorgangs.

|Schritt|Beschreibung|Wer ist betroffen?|Wo?|Dauer|
|---|---|---|---|---|
|[1](#step1)|[Domaininformationen überprüfen](#step1)|Administrator des Domainnamens|Beim aktuellen Registrar|Entsprechend Ihrem Vorgehen|
|[2](#step2)|[Domainname entsperren und Transfer-Code beantragen](#step2)|Der Administrator des Domainnamens mit Genehmigung des Inhabers|Beim aktuellen Registrar|Entsprechend Ihrem Vorgehen|
|[3](#step3)|[Domaintransfer beantragen](#step3)|Jede Person, die den Transfer-Code sowie die Genehmigung des Inhabers hat|Beim neuen Registrar (OVHcloud)|Entsprechend Ihrem Vorgehen|
|[4](#step4)|[Transfer bestätigen](#step4)|Ihr aktueller Registrar|Via Anfrage der Organisation, die Ihre Domainendung verwaltet|Maximal fünf Tage|

> [!warning]
>
> Das genaue Verfahren für den Domaintransfer kann variieren, insbesondere bei bestimmten Ländercode-**TLD**s (**ccTLD**, z.B. .pl, .lu, .hk, .ro, .be, .lt, .dk, .at, .fi) und einigen speziellen **TLD**s (.am, .fm. etc.). Je nach Endung Ihres Domainnamens können zusätzliche Voraussetzungen notwendig sein. Wir empfehlen Ihnen, zunächst die für die betreffende Endung verfügbaren Informationen auf unserer Website zu überprüfen: <https://www.ovhcloud.com/de/domains/tld/>.
>

### Schritt 1: Domaininformationen überprüfen <a name="step1"></a>

**Bevor Sie den Transfer beantragen, ist es wichtig zu überprüfen, dass die Angaben zu Ihrem Domainnamen aktuell sind.** Seit Inkrafttreten der DSGVO sind die im [Whois-Eintrag](/links/web/domains-whois) sichtbaren Daten sehr begrenzt. Daher empfehlen wir Ihnen, die Informationen Ihres Domainnamens über Ihren aktuellen Registrar zu überprüfen.

- **Wenn die Angaben korrekt sind: Gehen Sie zum nächsten Schritt dieser Anleitung.**

- **Wenn die Angaben falsch oder nicht sichtbar sind: Kontaktieren Sie Ihren aktuellen Registrar, um den Domainnamen zu überprüfen und/oder zu ändern.**

> [!primary]
>
> Wenn Sie nicht wissen, welcher Registrar für Ihren Domainnamen verantwortlich ist, können Sie über die "Registrar"-Zeilen, die im Suchergebnis des [Whois](/links/web/domains-whois){.external}-Tools erscheinen, Informationen zu dessen Identität erhalten.
>

### Schritt 2: Domainnamen entsperren und AUTH/INFO-Code beantragen <a name="step2"></a>

Wenn Sie alle Informationen überprüft haben, muss Ihr Domainname noch entsperrt werden. Dieser Vorgang ist nur über Ihren aktuellen Registrar möglich. Fragen Sie dort an, um Informationen zum genauen Vorgehen zu erhalten.

Sobald Ihr Domainname freigegeben ist, muss Ihr bisheriger Registrar Ihnen den zugehörigen AUTH/INFO-Code mitteilen. Für diesen Transfercode werden auch abweichende Bezeichnungen verwendet, beispielsweise Transferschlüssel, Domainpasswort, AUTH-CODE oder EPP-Code.

Bitte beachten Sie, dass OVHcloud zum Zeitpunkt der Einleitung des Transfervorgangs nicht der Registrar Ihres Domainnamen ist. Daher können wir ihn nicht freigeben oder Ihnen den AUTH/INFO-Code mitteilen.

> [!warning]
>
> Sobald Ihr Domainname freigegeben ist, haben Sie sieben Tage Zeit, um den Transfer zu OVHcloud durchzuführen. Nach diesem Zeitraum wird Ihr Domainname automatisch gesperrt, wenn Sie keine Anfrage zur Änderung des Registrars einreichen.
>

### Schritt 3: Domaintransfer zu OVHcloud anfordern <a name="step3"></a>

Sobald Ihr Domainname freigegeben und der Code verfügbar ist, können Sie den Transfer zu OVHcloud beantragen. Dazu führen Sie einfach eine [Bestellung über unsere Website aus](/links/web/domains){.external}. Geben Sie dort Ihren Domainnamen ein und folgen Sie den Bestellschritten.

![domain](/pages/assets/screens/website/order/domain-transfer-order.png){.thumbnail}

Wenn Sie zur Eingabe des AUTH/INFO-Code eingeben werden, können Sie ihn in das entsprechende Feld eintragen. Wenn Sie noch nicht über den Code verfügen, können Sie auch die Option auswählen, diesen nachzuliefern. Wir empfehlen jedoch, den Code verfügbar zu haben, bevor Sie die Bestellung ausführen. Denken Sie daran, dass der Transfer erst dann gestartet wird, wenn ein gültiger Code eingegeben wurde.

![domain](/pages/assets/screens/website/order/step_authinfo_add.png){.thumbnail}

Sie können Ihre Bestellung auch mit einem [Webhosting](/links/web/hosting){.external} kombinieren. Unsere Anleitung "[Migration Ihrer Website zu OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh){.external}" beschreibt den optimalen Weg zum Migrieren Ihrer Dienste.

> [!warning]
>
> Wir empfehlen Ihnen, während des gesamten Bestellvorgangs folgende Punkte zu berücksichtigen:
>
> - **Angaben zum Inhaber des Domainnamens.** Vor allem seit Inkrafttreten der DSGVO ist es wichtig, dass Sie sicherstellen, dass die Angaben zum Inhaber mit denen übereinstimmen, die von Ihrem bisherigen Registrar gespeichert wurden. So wird verhindert, dass Sie der unbefugten Aneignung des Domainnamens verdächtigt werden.
>
> - **Eingabe der DNS Server für Ihren Domainnamen.** Wenn Sie Ihren Domainnamen derzeit verwenden, um eine Website oder einen E-Mail-Dienst bereitzustellen, sollten Sie deren DNS-Server angeben, um Dienstunterbrechungen zu vermeiden.
>

#### Konfiguration der Inhaber- und DNS-Informationen

- Wenn Sie in diesem Schritt auf `Konfiguration ändern`{.action} klicken, können Sie die Namen der DNS-Server eingeben, die der Domainname derzeit verwendet. Auf diese Weise wird der Domainname in der OVHcloud-Konfiguration unmittelbar diesen DNS-Servern zugewiesen.

- Wenn Sie fortfahren, ohne diese Operation durchzuführen, wird der Domainname mit einer neuen DNS-Zone auf den OVHcloud DNS-Servern konfiguriert. In diesem Fall kann eine [manuelle Bearbeitung der DNS-Zone](/pages/web_cloud/domains/dns_zone_edit) erforderlich werden.

- In einigen Fällen kann der Transfer zusätzliche Informationen zum Inhaber des Domainnamens erfordern. Um diese Informationen hinzuzufügen, klicken Sie auf die Option `Kontakte/Inhaber verwalten`{.action}.

![Domain](/pages/assets/screens/website/order/order-summary.png){.thumbnail}

#### Weiterverfolgung des Transfers nach der Bestellung

Sobald die Bestellung bestätigt wurde, erhalten Sie einen Bestellschein. Der Transferprozess wird erst nach Erhalt der Zahlung gestartet. Ab dann können Sie den Fortschritt des Transfers über das [OVHcloud Kundencenter](/links/manager) nachverfolgen: Öffnen Sie `Domainnamen`{.action} und klicken Sie auf `Laufende Operationen`{.action}.

> [!primary]
>
> Wenn der Transfer-Code bei der Bestellung nicht eingegeben wurde, können Sie ihn im Bereich `Laufende Vorgänge`{.action} eingeben und damit den Transfer bestätigen.

### Schritt 4: Validierung des Transfers durch den aktuellen Registrar <a name="step4"></a>

Sobald die Bestellung und der Transfer-Code bestätigt sind, wird der aktuelle Registrar (der noch nicht OVHcloud ist) eine Bestätigungsanfrage erhalten. Auch hier sind wieder je nach ausgeführter Aktion mehrere Ergebnisse möglich.

|Aktion|Ergebnis|
|---|---|
|Bestätigung des aktuellen Registrars.|Der Transfer erfolgt innerhalb von **24 Stunden**.|
|Keine Antwort des aktuellen Registrars|Der Transfer wird nach **5 Tagen** abgeschlossen.|
|Ablehnung des aktuellen Registrars.|Der Transfer wird **abgebrochen**, sobald dessen Ablehnung erfolgt.|

Wird eine Ablehnung vom aktuellen Registrar ausgesprochen, kontaktieren Sie den Registrar, um die Gründe dafür zu erfahren.

Der Transferprozess kann über das [OVHcloud Kundencenter](/links/manager) neu gestartet werden. Wählen Sie `Web Cloud`{.action} aus und gehen Sie in den Bereich `Domainnamen`{.action}. Klicken Sie dann auf `Laufende Operationen`{.action}.

> [!primary]
>
> Der Transfer eines Domainnamens mit der Endung ".fr" unterscheidet sich geringfügig von dem oben beschriebenen Vorgang. Sie müssen den Domainnamen freigeben und ihren Transfer-Code beim aktuellen Registrar beziehen.
> Initiieren Sie die Bestellung des Transfers und geben Sie den Transfer-Code wie oben beschrieben ein.
>
> Anschließend beträgt die Gesamtfrist für den **Transfer eines ".fr" Domainnamens mindestens 8 nicht reduzierbare Tage.**
>
>Im Fall einer **Ablehnung des Transfers seitens des aktuellen Registrars** wird der Transfer **trotzdem durchgeführt**, benötigt jedoch **mindestens 22 nicht reduzierbare Tage**, bis er abgeschlossen ist.
>

### Schritt 5: Domainnamen bei OVHcloud verwalten

Sobald der Transfer abgeschlossen ist, können Sie Ihren Domainnamen über das [OVHcloud Kundencenter](/links/manager) verwalten. Gehen Sie im Bereich `Web Cloud`{.action} zu `Domainnamen`{.action} und wählen Sie den Domainnamen aus.

> [!warning]
>
> Für Domainnamen mit einer *generischen* Endung (**gTLD**, z.B. *.com*, *.net*, *.info*, *.org*, etc.) wird das ursprüngliche Ablaufdatum beibehalten. Nach einem erfolgreichen Transfer verlängert OVHcloud das Abonnement des Domainnamens um ein weiteres Jahr ohne Aufpreis.
> Beispiel: Ihr Domainname mit einer *generischen* Endung läuft am 29.09.2023 ab und wird am 04.06.2023 transferiert. Nach dem Transfer des Domainnamens zu OVHcloud ist das neue Ablaufdatum: 29.09.2024.
>
> Für Domainnamen mit einer *landesspezifischen* oder *regionalen* Endung (**ccTLD**, z.B. *.de*, *.fr*, *.be*, *.es*, etc.) sind die Bedingungen für den Transfer abhängig von den Vorgaben der **Registry** der jeweiligen Domainendung.
> Sobald der Transfer abgeschlossen ist, überprüfen Sie das Ablaufdatum des Domainnamens in Ihrem OVHcloud Kundencenter.
>
> Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den Domainnamen aus. **Monat** und **Jahr** der nächsten Verlängerung werden oben auf der Seite unter dem Domainnamen angezeigt.
>
> Je nach Situation und dem neuen Ablaufdatum kann es notwendig sein, Ihren Domainnamen direkt nach dem Transfer zu verlängern.
>

## Weiterführende Informationen

[Migration Ihrer Website und E-Mails zu OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
