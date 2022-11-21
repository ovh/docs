---
title: Domainnamen zu OVHcloud transferieren
slug: transfer-einer-generischen-domain
excerpt: Erfahren Sie hier, wie Sie Ihren Domainnamen zu OVHcloud transferieren
section: Transfer
order: 01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 21.11.2022**

## Ziel

Mit einem Domaintransfer wechseln Sie Ihren Domainnamen-Registrar. Sie können Ihren Domainnamen zu OVHcloud übertragen, indem Sie eine Bestellung erzeugen; der Vorgang dauert anschließend bis zu 10 Tage.

**Diese Anleitung erklärt, wie Sie einen generischen Domainnamen zu OVHcloud transferieren.**

> [!warning]
>
> Wenn der zu ändernde Domainname aktuell bei OVHcloud registriert ist, ist ein eingehender Domaintransfer nicht der passende Vorgang. Die vorliegende Anleitung betrifft lediglich den Wechsel des Registrars (OVHcloud) des Domainnamens.
>
> Um die Verwaltung des Domainnamens einem anderen OVHcloud Kunden-Account zu übertragen, muss stattdessen eine **Änderung der Kontakte** durchgeführt werden. Die Vorgehensweise wird in [dieser Anleitung](https://docs.ovh.com/de/customer/verwaltung-der-kontakte/) beschrieben.
>
> Wenn auch der **Inhaber des Domainnamens** geändert werden muss, sollte dies erfolgen, **bevor** Sie die Kontakte des Domainnamens ändern. Verwenden Sie dazu unsere Anleitung zum [Inhaberwechsel für Domainnamen](https://docs.ovh.com/de/domains/wechsel_des_domaininhabers/).
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
> Geben Sie die Domain, die Sie transferieren möchten, auf unserer Seite an [www.ovhcloud.com/de/domains/tld/](https://www.ovhcloud.com/de/domains/tld/) und folgen Sie den Schritten dieser Anleitung.
>

Der Transferprozess umfasst mehrere Schritte. Diese erfordern die Kontaktaufnahme mit Ihrem aktuellen Registrar und OVHcloud. Die folgende Tabelle enthält die zu kontaktierenden Stellen sowie die Dauer der verschiedenen Schritte des Transfervorgangs.

|Schritt|Beschreibung|Wer ist betroffen?|Wo?|Dauer|
|---|---|---|---|---|
|1|Domaininformationen überprüfen|Administrator des Domainnamens|Beim aktuellen Registrar|Entsprechend Ihrem Vorgehen|
|2|Domainname entsperren und Transfer-Code beantragen|Der Administrator des Domainnamens mit Genehmigung des Inhabers|Beim aktuellen Registrar|Entsprechend Ihrem Vorgehen|
|3|Domaintransfer beantragen|Jede Person, die den Transfer-Code sowie die Genehmigung des Inhabers hat|Beim neuen Registrar (OVHcloud)|Entsprechend Ihrem Vorgehen|
|4|Transfer bestätigen|Ihr aktueller Registrar|Via Anfrage der Organisation, die Ihre Domainendung verwaltet|Maximal fünf Tage|

> [!warning]
>
> Das genaue Verfahren für den Domaintransfer kann variieren, insbesondere bei bestimmten Ländercode-TLDs (ccTLD, z.B. .pl, .lu, .hk, .ro, .be, .lt, .dk, .at, .fi) und einigen speziellen TLDs (.am, .fm. etc.). Je nach Endung Ihres Domainnamens können zusätzliche Voraussetzungen notwendig sein. Wir empfehlen Ihnen, zunächst die für die betreffende Endung verfügbaren Informationen auf unserer Website zu überprüfen: <https://www.ovhcloud.com/de/domains/tld/>.
>

### Schritt 1: Domaininformationen überprüfen

**Bevor Sie den Transfer beantragen, ist es wichtig zu überprüfen, dass die Angaben zu Ihrem Domainnamen aktuell sind.** Seit Inkrafttreten der DSGVO sind die im [Whois-Eintrag](https://www.ovh.de/support/werkzeuge/check_whois.pl) sichtbaren Daten sehr begrenzt. Daher empfehlen wir Ihnen, die Informationen Ihres Domainnamens über Ihren aktuellen Registrar zu überprüfen.

- **Wenn die Angaben korrekt sind: Gehen Sie zum nächsten Schritt dieser Anleitung.**

- **Wenn die Angaben falsch oder nicht sichtbar sind: Kontaktieren Sie Ihren aktuellen Registrar, um den Domainnamen zu überprüfen und/oder zu ändern.**

> [!primary]
>
> Wenn Sie nicht wissen, welcher Registrar für Ihren Domainnamen verantwortlich ist, können Sie über die "Registrar"-Zeilen, die im Suchergebnis des [Whois](https://www.ovh.de/support/werkzeuge/check_whois.pl){.external}-Tools erscheinen, Informationen zu dessen Identität erhalten.
>

### Schritt 2: Domainnamen entsperren und AUTH/INFO-Code beantragen

Wenn Sie alle Informationen überprüft haben, muss Ihr Domainname noch entsperrt werden. Dieser Vorgang ist nur über Ihren aktuellen Registrar möglich. Fragen Sie dort an, um Informationen zum genauen Vorgehen zu erhalten.

Sobald Ihr Domainname freigegeben ist, muss Ihr bisheriger Registrar Ihnen den zugehörigen AUTH/INFO-Code mitteilen. Für diesen Transfercode werden auch abweichende Bezeichnungen verwendet, beispielsweise Transferschlüssel, Domainpasswort, AUTH-CODE oder EPP-Code.

Bitte beachten Sie, dass OVHcloud zum Zeitpunkt der Einleitung des Transfervorgangs nicht der Registrar Ihres Domainnamen ist. Daher können wir ihn nicht freigeben oder Ihnen den AUTH/INFO-Code mitteilen.

> [!warning]
>
> Sobald Ihr Domainname freigegeben ist, haben Sie sieben Tage Zeit, um den Transfer zu OVHcloud durchzuführen. Nach diesem Zeitraum wird Ihr Domainname automatisch gesperrt, wenn Sie keine Anfrage zur Änderung des Registrars einreichen.
>

### Schritt 3: Domaintransfer zu OVHcloud anfordern

Sobald Ihr Domainname freigegeben und der Code verfügbar ist, können Sie den Transfer zu OVHcloud beantragen. Dazu führen Sie einfach eine [Bestellung über unsere Website aus](https://www.ovhcloud.com/de/domains/){.external}. Geben Sie dort Ihren Domainnamen ein und folgen Sie den Bestellschritten.

![domain](images/Domain_transfer_order.png){.thumbnail}

Wenn Sie zur Eingabe des AUTH/INFO-Code eingeben werden, können Sie ihn in das entsprechende Feld eintragen. Wenn Sie noch nicht über den Code verfügen, können Sie auch die Option auswählen, diesen nachzuliefern. Wir empfehlen jedoch, den Code verfügbar zu haben, bevor Sie die Bestellung ausführen. Denken Sie daran, dass der Transfer erst dann gestartet wird, wenn ein gültiger Code eingegeben wurde.

![domain](images/step_authinfo_add.png){.thumbnail}

Sie können Ihre Bestellung auch mit einem [Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} kombinieren. Unsere Anleitung "[Migration Ihrer Website zu OVHcloud](../../hosting/migration-ihrer-website-zu-ovh/){.external}" beschreibt den optimalen Weg zum Migrieren Ihrer Dienste.

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

- Wenn Sie fortfahren, ohne diese Operation durchzuführen, wird der Domainname mit einer neuen DNS-Zone auf den OVHcloud DNS-Servern konfiguriert. In diesem Fall kann eine [manuelle Bearbeitung der DNS-Zone](../webhosting_bearbeiten_der_dns_zone/) erforderlich werden.

- In einigen Fällen kann der Transfer zusätzliche Informationen zum Inhaber des Domainnamens erfordern. Um diese Informationen hinzuzufügen, klicken Sie auf die Option `Kontakte/Inhaber verwalten`{.action}.

![Domain](images/Order_summary.png){.thumbnail}

#### Weiterverfolgung des Transfers nach der Bestellung

Sobald die Bestellung bestätigt wurde, erhalten Sie einen Bestellschein. Der Transferprozess wird erst nach Erhalt der Zahlung gestartet. Ab dann können Sie den Fortschritt des Transfers über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) nachverfolgen: Öffnen Sie `Domainnamen`{.action} und klicken Sie auf `Laufende Operationen`{.action}.

> [!primary]
>
> Wenn der Transfer-Code bei der Bestellung nicht eingegeben wurde, können Sie ihn im Bereich `Laufende Operationen`{.action} eingeben und damit den Transfer bestätigen.

### Schritt 4: Validierung des Transfers durch den aktuellen Registrar

Sobald die Bestellung und der Transfer-Code bestätigt sind, wird der aktuelle Registrar (der noch nicht OVHcloud ist) eine Bestätigungsanfrage erhalten. Auch hier sind wieder je nach ausgeführter Aktion mehrere Ergebnisse möglich.

|Aktion|Ergebnis|
|---|---|
|Bestätigung des aktuellen Registrars.|Der Transfer erfolgt innerhalb von **24 Stunden**.|
|Keine Antwort des aktuellen Registrars|Der Transfer wird nach **5 Tagen** abgeschlossen.|
|Ablehnung durch den aktuellen Registrar.|Der Transfer wird **abgebrochen**, sobald dessen Ablehnung erfolgt.|

Wird eine Ablehnung vom aktuellen Registrar ausgesprochen, kontaktieren Sie den Registrar, um die Gründe dafür zu erfahren.

Der Transferprozess kann über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) neu gestartet werden. Wählen Sie `Web Cloud`{.action} aus und gehen Sie in den Bereich `Domainnamen`{.action}. Klicken Sie dann auf `Laufende Operationen`{.action}.

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

Sobald der Transfer abgeschlossen ist, können Sie Ihren Domainnamen über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) verwalten. Gehen Sie im Bereich `Web Cloud`{.action} zu `Domainnamen`{.action} und wählen Sie den Domainnamen aus.

## Weiterführende Informationen

[Migration Ihrer Website und E-Mails zu OVHcloud](../../hosting/migration-ihrer-website-zu-ovh/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
