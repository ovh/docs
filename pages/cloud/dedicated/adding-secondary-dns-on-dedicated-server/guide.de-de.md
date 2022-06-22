---
title: 'OVHcloud DNS Server mit einem Dedicated Server verwenden'
slug: sekundaeren-dns-erstellen-dedicated-server
excerpt: 'Erfahren Sie hier, wie Sie einen sekundären DNS Server für Ihren Dedicated Server einrichten'
section: 'Fortgeschrittene Nutzung'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 18.01.2021**

## Ziel

Wenn Sie Ihren dedizierten Server als DNS-Server konfigurieren, können Sie den sekundären OVHcloud DNS verwenden, um eine sekundäre Zone zu hosten. So bleibt das DNS Ihres Domainnamens auch dann verfügbar, wenn der primäre DNS-Server nicht mehr antwortet.

**Diese Anleitung erklärt, wie Sie Ihren Domainnamen zum OVHcloud Kundencenter hinzufügen, um einen sekundären DNS-Server zu verwenden.**


## Voraussetzungen

- Sie verfügen über einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account.
- Sie haben adminstrativen Zugriff auf einen [Domainnamen](https://www.ovhcloud.com/de/domains/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben.
> 


## In der praktischen Anwendung

### Einen Domainnamen hinzufügen <a name="addingdomain"></a>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie dann Ihren Server unter `Dedicated Server`{.action} aus.

Wechseln Sie zum Tab `Sekundärer DNS`{.action} und klicken Sie auf den Button `Domain hinzufügen`{.action}.

![Sekundärer DNS](images/cp-01.png){.thumbnail}

Geben Sie Ihre IP-Adresse und den hinzuzufügenden Domainnamen ein und klicken Sie dann auf `Weiter`{.action}.

![Sekundärer DNS](images/cp-02.png){.thumbnail}

Wenn Sie in diesem Schritt auf `Weiter`{.action} klicken, wird die Prüfung der Domainauthorisierung angestoßen. Wenn Sie diese Bedingung noch nicht erfüllt haben, indem Sie einen TXT-Eintrag zu Ihrer DNS-Zone hinzufügen, folgen Sie zuerst den [Anweisungen unten in dieser Anleitung](#verifyingdomain). Klicken Sie andernfalls auf `Weiter`{.action}.

![Sekundärer DNS](images/cp-03.png){.thumbnail}

Nachdem Sie im letzten Fenster auf `Hinzufügen`{.action} geklickt haben, wird der Domainname zum sekundären DNS-Server von OVHcloud hinzugefügt.

Die hinzugefügten Domainnamen werden in diesem Tab aufgeführt und können gelöscht werden, indem Sie auf den `...`{.action} Button klicken. Der Name des sekundären DNS-Servers wird neben dem Domainnamen angezeigt.

![Sekundärer DNS](images/cp-05.png){.thumbnail}

> [!primary]
>
> Weitere für die Konfiguration Ihres eigenen DNS für Ihren Domainnamen erforderliche Aktionen sind üblicherweise:
>
> - Konfiguration eines DNS-Dienstes (z.B. *BIND*)
> - Konfiguration von GLUE-Einträgen
> - Genehmigung von Zonentransfers
>
> Konsultieren Sie die entsprechenden Anleitungen und sonstige externe Wissensressourcen, wenn Sie zusätzliche Informationen zu diesen administrativen Aufgaben benötigen.

### Bestätigung der Domainauthorisierung <a name="verifyingdomain"></a>

Es ist erforderlich, Ihre Berechtigung zum Verwalten des Domainnamens zu überprüfen, bevor sie zum sekundären DNS von OVHcloud hinzugefügt werden kann. Dies erfolgt über eine automatisierte DNS-Abfrage auf die Subdomain *ownercheck.ihrdomainname*. Eine individuelle Zeichenkette wird hierzu generiert und in Ihrem OVHcloud Kundencenter angezeigt.

- Wenn der Domainname zu diesem Zeitpunkt von einem externen Registrar verwaltet wird **oder** externe DNS-Server verwendet, loggen Sie sich in die Verwaltungsoberfläche Ihres DNS-Anbieters ein und fügen Sie Ihrer Zone einen TXT-Eintrag mit der Subdomain "ownercheck" und dem Wert, den Sie in Schritt 2 des Dialogs ["Domain hinzufügen"](#addingdomain) erhalten haben, hinzu.

- Wenn der Domainname von OVHcloud als Registrar verwaltet wird **und** OVHcloud DNS-Server verwendet, klicken Sie in Schritt 2 des Dialogs zunächst auf `Abbrechen`{.action}. Folgen Sie anschließend den Anweisungen in [dieser Anleitung](../../domains/webhosting_bearbeiten_der_dns_zone/), um den TXT-Eintrag über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) hinzuzufügen.

![Sekundärer DNS](images/cp-04.png){.thumbnail}

Nachdem Sie den TXT-Eintrag erfolgreich zur DNS-Zone des Domainnamens hinzugefügt haben, wiederholen Sie die [oben erklärten Schritte](#addingdomain) und schließen Sie den Vorgang ab.

## Weiterführende Informationen

[OVHcloud DNS-Zone bearbeiten](../../domains/webhosting_bearbeiten_der_dns_zone/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.