---
title: 'Domainnamen zu OVHcloud transferieren'
slug: transfer-einer-generischen-domain
excerpt: 'Erfahren Sie hier, wie Sie Ihren Domainnamen zu OVHcloud transferieren'
section: Transfer
order: 1
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 20.04.2021**

## Ziel

Mit einem Domaintransfer wechseln Sie Ihren Domainnamen-Registrar. Sie können Ihren Domainnamen zu OVHcloud übertragen, indem Sie eine Bestellung erzeugen; der Vorgang dauert anschließend zwischen 1 und 10 Tagen.

**Diese Anleitung erklärt, wie Sie einen generischen Domainnamen zu OVHcloud transferieren.**

## Voraussetzungen

- Sie verfügen über einen Domainnamen bei einem anderen Registrar.
- Der Domainname existiert seit mehr als 60 Tagen.
- Der Domainname wurde in den letzten 60 Tagen nicht transferiert und der Inhaber wurde nicht geändert.
- Der Zustand des Domainnamens ist "OK" oder "Transferable".
- Der Domainname ist nicht abgelaufen und hat ein Ablaufdatum, das den Transfer noch ermöglicht (empfohlen sind mehr als 60 Tage).
- Der Domainname ist zum Transfer entsperrt und Sie haben bereits den Transfer-Code oder können ihn anfordern.
- Sie besitzen die Verfügungsberechtigung, um den Transfer des Domainnamen zu veranlassen.
- Der Domaininhaber und/oder dessen Administratoren sind über den Transfer informiert.

## In der praktischen Anwendung

Der Transferprozess umfasst mehrere Schritte. Diese beinhalten die Kontaktaufnahme mit mehreren Stellen, darunter Ihr aktueller Registrar, OVHcloud und weitere Parteien. Die folgende Tabelle enthält die zu kontaktierenden Personen sowie die Dauer der verschiedenen Schritte des Transfervorgangs.

|Schritt|Beschreibung|Wer ist betroffen?|Wo?|Dauer|
|---|---|---|---|---|
|1|Domaininformationen überprüfen|Administrator des Domainnamens|Beim aktuellen Registrar|Entsprechend Ihrem Vorgehen|
|2|Domainname entsperren und Transfer-Code beantragen|Der Administrator des Domainnamens mit Genehmigung des Inhabers|Beim aktuellen Registrar|Entsprechend Ihrem Vorgehen|
|3|Domaintransfer beantragen|Jede Person, die den Transfer-Code sowie die Genehmigung des Inhabers hat|Beim neuen Registrar (OVHcloud)|Entsprechend Ihrem Vorgehen|
|4|Erster Schritt der Transferbestätigung|Domain-Inhaber und -Administrator informieren den neuen Registrar des Domainnamens|Per E-Mail|Maximal fünf Tage|
|5|Zweiter Schritt der Transferbestätigung|Der aktuelle Registrar|Über Anfrage bei der Organisation, die die Domainendung verwaltet|Maximal fünf Tage|

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

Wenn Sie zur Eingabe des AUTH/INFO-Code eingeben werden, können Sie ihn in das entsprechende Feld eintragen. Wenn Sie noch nicht über den Code verfügen, können Sie auch die Option auswählen, diesen nachzuliefern. Wir empfehlen jedoch, den Code verfügbar zu haben, bevor Sie die Bestellung ausführen. Denken Sie daran, dass der Transfer erst dann gestartet wird, wenn ein gültiger Code eingegeben wurde.

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

Sobald die Bestellung bestätigt wurde, erhalten Sie einen Bestellschein. Der Transferprozess wird erst nach Erhalt der Zahlung gestartet. Ab dann können Sie den Fortschritt des Transfers über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) nachverfolgen: Öffnen Sie `Domainnamen`{.action} und klicken Sie auf `Laufende Operationen`{.action}.

### Schritt 4: Erster Schritt der Transferbestätigung

Für den Transferprozess eines Domainnamens sind zwei Bestätigungsschritte notwendig. Der erste Schritt kann ab Beginn des Transfers bestätigt werden, kann aber dennoch bis zu fünf Tage dauern.

|Wer erhält diese Bestätigungsanfragen?|Wohin wird die Bestätigungsanfrage versandt?|
|---|---|
|Domain-Inhaber|An die im Whois gespeicherte E-Mail-Adresse des Inhabers (falls nicht anonymisiert). Andernfalls wird sie an die Inhaber-E-Mail-Adresse versandt, die während des Bestellvorgangs eingetragen wurde.|
|Der beim Bestellvorgang bei OVHcloud angegebene Administrator|An die in den Administratordaten hinterlegte E-Mail-Adresse bei OVHcloud |

Beide Parteien bestätigen den Transfer über ein OVHcloud-Interface. In den versendeten E-Mails ist ein Link zum Interface enthalten.

![domain](images/domaintransfer_gTLD_validationv2.png){.thumbnail}

Abhängig von den Aktionen des Inhabers und des Administrators können in diesem Schritt mehrere Ergebnisse erzielt werden.

|Aktion|Ergebnis|
|---|---|
|Der Inhaber des Domainnamens und der Administrator bestätigen die Transferanfrage.|Übergang zum zweiten Bestätigungsschritt innerhalb von 24 Stunden|
|Nur eine Bestätigung von einem der Kontakte erhalten. Der andere Kontakt antwortet nicht.|Übergang zum zweiten Bestätigungsschritt nach fünf Tagen|
|Keine Antwort auf beide Bestätigungsanfragen|Übergang zum zweiten Bestätigungsschritt nach fünf Tagen|
|Die Bestätigungsanfrage wird von einem der Kontakte abgelehnt.|Der Transferprozess wird abgebrochen, sobald einer der Kontakte den Transfer ablehnt.|

Falls ein Transfer abgebrochen wurde, vergewissern Sie sich, dass alle Beteiligten zustimmen, bevor Sie einen weiteren Versuch unternehmen. Wenn keine E-Mails empfangen wurden, überprüfen Sie zunächst, dass alle E-Mail-Adressen aktuell sind.

Der Transfervorgang kann später im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) erneut gestartet werden. Gehen Sie im Bereich `Web Cloud`{.action} zu `Domainnamen`{.action} und klicken Sie auf `Laufende Operationen`{.action}.

### Schritt 5: Zweiter Schritt der Transferbestätigung

Sobald der zweite Schritt eingeleitet wurde, wird der aktuelle Registrar (der noch nicht OVHcloud ist) eine Bestätigungsanfrage erhalten. Auch hier sind wieder je nach vorgenommener Aktion mehrere Ergebnisse möglich.

|Aktion|Ergebnis|
|---|---|
|Bestätigung des bisherigen Registrars|Der Transfer erfolgt innerhalb von 24 Stunden.|
|Keine Antwort des aktuellen Registrars|Der Transfer erfolgt nach fünf Tagen.|
|Ablehnung durch den bisherigen Registrar|Der Transfer wird abgebrochen, sobald eine Ablehnung ergangen ist.|

Wird eine Ablehnung vom bisherigen Registrar ausgesprochen, kontaktieren Sie bitte den Registrar, um zu erfahren, warum der Transfer verhindert wird.

Der Transfervorgang kann später im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) erneut gestartet werden. Gehen Sie im Bereich `Web Cloud`{.action} zu `Domainnamen`{.action} und klicken Sie auf `Laufende Operationen`{.action}.

### Schritt 6: Domainnamen bei OVHcloud verwalten

Sobald der Transfer abgeschlossen ist, können Sie Ihren Domainnamen über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) verwalten. Gehen Sie im Bereich `Web Cloud`{.action} zu `Domainnamen`{.action} und wählen Sie den Domainnamen aus.

## Weiterführende Informationen

[Migration Ihrer Website und E-Mails zu OVHcloud](../../hosting/migration-ihrer-website-zu-ovh/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
