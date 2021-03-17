---
title: 'Erste Schritte mit einem Dedicated Server'
slug: erste-schritte-dedicated-server
excerpt: 'Erfahren Sie hier, wie Sie Ihren neuen Dedicated Server verwalten'
section: 'Erste Schritte'
order: 1
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>


**Letzte Aktualisierung am 16.02.2021**

## Ziel

Ein dedizierter Server ist ein physischer Server in einem unserer Rechenzentren. Im Gegensatz zum Webhosting (auch "Shared Hosting" genannt), bei dem die technische Verwaltung von OVHcloud geleistet wird, sind Sie allein für die Verwaltung Ihres Servers verantwortlich.

**Diese Anleitung erläutert einige Grundlagen zur Erstverwendung eines OVHcloud Dedicated Server.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/I2G6TkKg0gQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Voraussetzungen

- Sie verfügen über einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/){.external} in Ihrem Kunden-Account.
- Sie sind via SSH (Root-Zugang) unter Linux oder über einen entfernten Desktop unter Windows mit Ihrem Server verbunden.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Wenn Ihr Dedicated Server während des Bestellprozesses zum ersten Mal konfiguriert ist, können Sie das zu installierende Betriebssystem auswählen.

### Ihren dedizierten Server installieren oder reinstallieren

Sie können Ihren Server in wenigen Schritten in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) reinstallieren und ein anderes Betriebssystem auswählen. Klicken Sie im Tab `Allgemeine Informationen`{.action} auf `...`{.action} neben `System (OS)` und danach auf `Installieren`{.action}.

![Button Reinstallieren](images/reinstalling-your-server-00.png){.thumbnail}

Wählen Sie im folgenden Fenster `Installation mit einem OVH Template`{.action} oder `Installation mit einem Ihrer Templates`{.action} Vorlagen zur Installation eines Installations-Template.

Um ein personalisiertes Image auf dem Server installieren zu können, wählen Sie die dritte Option `Installieren aus einem personalisierten Image`{.action}. Weitere Informationen zu den Parametern finden Sie in der Anleitung ["Bring Your Own Image verwenden"](../bringyourownimage/).

> [!primary]
>
> Einige proprietäre Betriebssysteme oder Plattformen wie Plesk oder Windows benötigen Lizenzen, die zusätzliche Kosten verursachen. Sie können Lizenzen [bei OVHcloud](https://www.ovhcloud.com/de/bare-metal/os/) oder einem externen Reseller kaufen. Danach müssen Sie Ihre Lizenz im Betriebssystem selbst oder über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
>
> Sie können alle Ihre Lizenzen im Bereich `Bare Metal Cloud`{.action} unter `Lizenzen`{.action}. verwalten  In diesem Abschnitt können Sie auch über den Button `Aktionen`{.action}. Lizenzen bestellen oder bestehende Lizenzen hinzufügen
>

Klicken Sie auf `Weiter`{.action}, um fortzufahren.

![Template-Auswahl](images/reinstalling-your-server-02.png){.thumbnail}

Nachdem Sie `Installation mit einem OVH Template`{.action} ausgewählt haben, können Sie das Betriebssystem in den Laufbahnmenüs auswählen.

![Operationelle Auswahl](images/reinstalling-your-server-03.png){.thumbnail}

Wenn Sie das Partitionsschema Ihres Betriebssystems ändern müssen, setzen Sie einen Haken in dem Feld "Konfiguration der Partitionen anpassen", bevor Sie auf `Weiter klicken`{.action}.

![Konfiguration der Partitionen anpassen](images/SSH_02.png){.thumbnail}

Klicken Sie nach Abschluss der Anpassungen auf `Weiter`{.action}, um zur Zusammenfassung zu gelangen.

#### Installation des Real Time Monitoring (optional) <a name="installrtm"></a>

Wenn Sie ein mit GNU/Linux kompatibles Betriebssystem ausgewählt haben, erscheint die Option zur Aktivierung der Echtzeit-Überwachung (RTM für Real Time Monitoring) des Servers.

![RTM](images/reinstalling-your-server-04.png){.thumbnail}

Den Regler auf `Aktivieren`{.action} einstellen, um ihn zu installieren. Mehr Informationen zur RTM Funktion finden Sie in unserer Anleitung ["Real Time Monitoring (RTM) installieren"](../rtm-installieren/).

#### Hinzufügen eines SSH-Schlüssels (optional)

Wenn Sie ein GNU/Linux-Betriebssystem installieren, können Sie Ihren SSH-Schlüssel im letzten Schritt des Installationsprozesses hinzufügen.

![Partitionskonfiguration personalisieren](images/SSH_03.png){.thumbnail}

Wenn ein SSH-Schlüssel bereits gespeichert ist, erscheint er unten im Drop-down-Menü unter "SSH-Schlüssel". Falls nicht, fügen Sie zuerst eine Domain im Bereich "Meine Dienstleistungen"hinzu.

Öffnen Sie hierzu die Seitenleiste, indem Sie oben rechts auf Ihren Namen klicken und die Shortcut `Produkte und Dienstleistungen`{.action} verwenden.

![Partitionskonfiguration personalisieren](images/SSH_13.png){.thumbnail}

Gehen Sie in "Meine Dienste"auf den Tab `SSH-Schlüssel`{.action} und klicken Sie auf `SSH-Schlüssel hinzufügen`{.action}.

![Partitionskonfiguration personalisieren](images/SSH_14.png){.thumbnail}

Da es sich um die Installation eines Dedicated Servers handelt, wählen Sie bitte im Drop-down-Menü "Dedicated"aus (ebenfalls mit einem VPS kompatibel).

Geben Sie im neuen Fenster eine ID (Name Ihrer Wahl) und den Schlüssel selbst (vom Typ RSA, ECDSA oder Ed25519) in die entsprechenden Felder ein.

![Partitionskonfiguration personalisieren](images/SSH_12.png){.thumbnail}

Weitere Informationen zur Erstellung von SSH-Schlüsseln finden Sie in unserer [Anleitung](../ssh-schluessel-erzeugen/).

> [!warning]
>OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration und Verwaltung Sie verantwortlich sind. Sie sind also verantwortlich für das ordnungsgemäße Funktionieren dieser Systeme.
>
>Diese Anleitung hilft Ihnen bei der Bewältigung der laufenden Aufgaben. Dennoch empfehlen wir Ihnen, einen spezialisierten Dienstleister zu kontaktieren, falls Sie Schwierigkeiten oder Zweifel hinsichtlich der Administration, Nutzung oder Implementierung der Dienste auf einem Server haben.
>

### Verbindung zu Ihrem Server

#### Linux

Sobald die Installation abgeschlossen ist, erhalten Sie eine E-Mail mit den administrativen Zugriffsanweisungen. Sie können sich über ein Bestellterminal oder einen Drittanbieter mit Ihrem Server verbinden, indem Sie SSH verwenden, ein gesichertes Kommunikationsprotokoll.

Verwenden Sie die folgenden Beispiele, um sich mit Ihrem Server zu verbinden, und ersetzen Sie die Login-Daten mit Ihren eigenen Login-Daten (IP-Adresse und Serverreferenzname sind austauschbar).

**Beispiel mit Root:**

```sh
ssh root@IPv4_Ihres_Servers
```

**Beispiel mit einem vorkonfigurierten Benutzer:**

```sh
ssh root@Referenzname_Ihres_Servers
```

Weitere Informationen zu SSH finden Sie in unserer Anleitung "[SSH-Einführung](../ssh-introduction/)".

#### Windows

Sobald die Installation abgeschlossen ist, erhalten Sie eine E-Mail mit Ihrem Passwort für den Administrator-Zugang (Root). Verwenden Sie diese Login-Daten, um sich via RDP (**R**emote **D**esktop **P**rotocol) mit dem Server zu verbinden. Wenn Sie eingeloggt sind, wird Windows Sie während der gesamten Erstinstallation unterstützen.

### Neustart Ihres Dedicated Servers <a name="resboot"></a>

Ein Neustart kann notwendig sein, um aktualisierte Konfigurationen anzuwenden oder ein Problem zu lösen. Wenn möglich, führen Sie über folgende Befehlszeile einen "Soft Reboot"des Servers durch:

```sh
reboot
```

Sie können jedoch jederzeit einen "Hard Reboot" in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Klicken Sie im Tab `Allgemeine Informationen`{.action} auf `...`{.action} gegenüber "Status" im Bereich der **Dienstatus** und klicken Sie dann im Kontextfenster auf `Neu starten`{.action} und `Bestätigen`{.action}.

![Neustart](images/rebooting-your-server.png){.thumbnail}

### Absicherung Ihres Dedicated Servers

Wie im Abschnitt „Einleitung“ dieser Anleitung erläutert, sind Sie der Administrator Ihres dedizierten Servers. Als solcher sind Sie für Ihre Daten und deren Sicherheit verantwortlich. Mehr Informationen zur Sicherung Ihres Servers finden Sie in unserer Anleitung ["Einen dedizierten Server sichern"](../dedizierten-server-sichern/).

### Netzwerkkonfiguration

#### IP-Bridge-Modus

Der Bridge-Modus ist die Aktion, die von der Netzwerkausrüstung durchgeführt wird, um ein aggregiertes Netzwerk aus mehreren Kommunikationsnetzen oder Netzwerksegmenten zu erstellen. Der Bridge-Modus ist vom Routing getrennt, das es Netzwerken erlaubt, unabhängig zu kommunizieren, während sie voneinander getrennt bleiben.

Diese Konfiguration wird vor allem in der Virtualisierung verwendet, damit jede virtuelle Maschine über eine eigene öffentliche IP-Adresse verfügt.

Weitere Informationen zum Bridge-Modus finden Sie in unserer Anleitung: [IP Bridge Modus](../network-bridging/).

#### Alias IP

Im IP-Alias-Modus werden zwei oder mehr IP-Adressen mit demselben Netzwerkinterface verknüpft. So kann Ihr Server mehrere Verbindungen zu einem Netzwerk herstellen, die jeweils einen anderen Zweck erfüllen.

Detaillierte Anweisungen zur Konfiguration des IP-Alias finden Sie in der Anleitung "[IP-Adresse als Alias konfigurieren](../network-ipaliasing)".

#### IPv6 Konfiguration

Alle OVHcloud Dedicated Server werden mit einem /64 IPv6 Block geliefert. Um die Adressen dieses Blocks zu verwenden müssen Sie die Konfiguration des Netzwerks anpassen. Lesen Sie unsere [Anleitung "IPv](../netzwerk-ipv6/)-Konfiguration".

### Rescue-Modus

Der erste Schritt zur Fehlerbehebung besteht darin, Ihren Server in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) für alle Arten von Problemen im Rescue-Modus neu zu starten. Es ist wichtig, Serverprobleme in diesem Modus zu identifizieren, um Probleme mit Software auszuschließen, bevor wir unsere Support-Teams kontaktieren.

Lesen Sie die Anleitung "[Den Rescue-Modus aktivieren und](../ovh-rescue/) verwenden".

### Zugang zur Unterstützung durch IPMI

OVHcloud stellt alle Dedicated Server mit einer IPMI-Konsole (Intelligent Platform Management Interface) ein, die in Ihrem Browser oder einem Java-Applet ausgeführt wird. Sie können sich direkt mit Ihrem Server verbinden, auch wenn dieser über keine Netzwerkverbindung verfügt. Dies macht sie zu einem nützlichen Werkzeug, um die Probleme zu lösen, die Ihren Server offline gesetzt haben könnten.

Weitere Informationen finden Sie in unserer Anleitung: [Verwendung der IPMI-Konsole für Dedicated Server](../verwendung-ipmi-dedicated-server/).

## Weiterführende Informationen

[Einen dedizierten Server sichern](../dedizierten-server-sichern/)

[Rescue-Modus aktivieren und verwenden](../ovh-rescue/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
