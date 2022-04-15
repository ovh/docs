---
title: Firewall auf einem Windows Server konfigurieren
excerpt: Erfahren Sie hier, wie Sie Ihre Windows Firewall konfigurieren
slug: firewall-windows
section: Tutorial
order: 02
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Letzte Aktualisierung am 31.01.2022**

## Ziel

Um Ihr System optimal zu schützen, verfügt Ihr Windows Server über eine integrierte Firewall. Deren Konfiguration erlaubt es Ihnen, das Sicherheitsniveau zu erhöhen und so die Verfügbarkeit und Integrität aller auf dem Server gehosteten Elemente wie Rollen, Dienste und geteilte Ordner zu garantieren.

**Diese Anleitung erklärt, wie Sie die Firewall-Regeln unter Windows anwenden.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Dienste haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen spezialisierten Dienstleister zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Sie können sich auch jederzeit an unsere [Community](https://community.ovh.com/en/) wenden, um sich mit anderen Benutzern auszutauschen.
>


## Voraussetzungen

- Sie verfügen über einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account.
- Sie haben administrativen Zugriff (root/sudo) auf Ihren Server über. 

## In der praktischen Anwendung

### Schritt 1: Windows Firewall konfigurieren

Um auf die Windows Firewall zuzugreifen, befolgen Sie folgenden Befehl:

- Öffnen Sie `Start`{.action}.
- Klicken Sie auf `Suchen`{.action}.
- Suchen Sie nach "Windows Firewall" über die Suchleiste.
- Klicken Sie auf `Windows Firewall`{.action}.

Klicken Sie anschließend auf die Zeile `Erweiterte Einstellungen`{.action}.

![Step1](images/step1.PNG){.thumbnail}

### Schritt 2: Eine Regel für eingehenden Traffic aktivieren

Im angezeigten Fenster finden Sie Einstellungen wie:

- Eingangs- und Ausgangsregeln
- Regeln für die Verbindungssicherheit
- Optionen zur Überwachung der Firewall des Servers

Unter den `Eingangsregeln`{.action} werden alle vorkonfigurierten Windows Server Traffic-Regeln angezeigt, die mit Netzwerkverbindungen und eingehenden Paketen zusammenhängen. Einige dieser Regeln sind nicht standardmäßig aktiviert. Wenn Sie diese aktivieren möchten, klicken Sie mit der rechten Maustaste auf die Regel und wählen Sie die Option `Regel aktivieren`{.action}.

![Step1](images/step2.PNG){.thumbnail}

### Schritt 3: Eine neue Regel erstellen 

Um eine neue Regel zu erstellen, gehen Sie in das Menü `Aktionen`{.action} und wählen Sie `Neue Regel`{.action} aus.
Klicken Sie auf die Option `Neue Regel`{.action} im rechten Feld.

![Step3](images/step3.PNG){.thumbnail}

### Schritt 4: Den Typ der zu aktivierenden Regel festlegen

Der Assistent wird angezeigt, um den Typ der zu erstellenden Regel zu definieren. Wählen Sie das Feld `Port`{.action} aus.

![Step4](images/step4.PNG){.thumbnail}

### Schritt 5: Art des zu aktivierenden Ports festlegen

Geben Sie im nächsten Schritt den Typ des zu aktivierenden Ports an:

![Step5](images/step5.PNG){.thumbnail}

> [!primary]
>
>- TCP (Transmission Control Protocol))
>TCP ist ein verbindungsorientiertes Protokoll, d.h. mit TCP können Verbindungen hergestellt werden, um Datenströme zu senden. Dieses Protokoll gewährleistet, dass die Datenpakete dem Empfänger fehlerfrei und in der gleichen Reihenfolge, in der sie versendet wurden, geliefert werden.
>
>- UDP (User Datagram Protocol)
>UDP ist ein nicht-verbindungsorientiertes Protokoll, dessen Entwicklung auf dem Austausch von Datagrammen basiert. Es erleichtert den Versand von Datagrammen über das Netzwerk. Es ist notwendig, dass Sie zuvor eine Verbindung zum Ziel hergestellt haben.
>
>Sie können `Alle lokalen Ports`{.action} auswählen, um alle TCP oder UDP Ports auf einem ungesicherten Server zu aktivieren. Sie können auch die Option `Spezifische lokale Ports`{.action} anhaken, um zu bestimmen, welcher Port zugelassen werden soll. 
>

### Schritt 6: Verbindung erlauben oder blockieren

Für die Aktion, die diese Regel auslösen wird, stehen folgende Optionen zur Verfügung. Wählen Sie die für Sie passende aus.

- **Verbindung erlauben**. Diese Option ermöglicht die vollständige Kommunikation über diesen Port.
- **Verbindung erlauben, wenn sie gesichert ist**. Diese Option erlaubt die Übertragung der Daten nur, wenn die Verbindung per IPsec authentifiziert wird.
- **Verbindung blockieren**. Diese Option verhindert, dass Daten über diesen Port weitergeleitet werden.

Klicken Sie auf `Weiter`{.action}. 

![Step6](images/step6.PNG){.thumbnail}

### Schritt 7: Firewall-Profil festlegen und Regel benennen 

Wählen Sie dann aus, in welchen Netzwerken die Regel gelten soll: Domain-weites, privates oder öffentliches Profil.
Sie können auch mehrere Profile auswählen.

![Step7](images/step7.PNG){.thumbnail}

Geben Sie der neuen Regel einen Namen und eine Beschreibung, um deren Verwendung zu erleichtern (optional).

![Step7_01](images/step7-01.PNG){.thumbnail}

Klicken Sie auf die Schaltfläche `Fertigstellen`{.action}, um den Vorgang abzuschließen und die neue Regel zu erstellen.

![Step7_02](images/step7_02.PNG){.thumbnail}

Danach wird die neue Regel in der Übersicht angezeigt und Sie können die Einstellungen der Regel ändern.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
