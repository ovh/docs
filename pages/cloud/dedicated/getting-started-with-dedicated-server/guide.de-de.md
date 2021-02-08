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

**Letzte Aktualisierung am 13.01.2021**
 
## Ziel

Ein dedizierter Server ist ein physischer Server in einem unserer Rechenzentren. Im Gegensatz zum Webhosting (auch "Shared Hosting" genannt), bei dem die technische Verwaltung von OVHcloud geleistet wird, sind Sie allein für die Verwaltung Ihres Servers verantwortlich.

**Diese Anleitung erläutert einige Grundlagen zur Erstverwendung eines OVHcloud Dedicated Server.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/I2G6TkKg0gQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen spezialisierten Dienstleister zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Sie können sich auch jederzeit an unsere [Community](https://community.ovh.com/en/) wenden, um sich mit anderen Benutzern auszutauschen.
>

## Voraussetzungen

- Sie verfügen über einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/){.external} in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben administrativen Zugriff (Root) über SSH auf Ihren Server (oder RDP für Windows).

## In der praktischen Anwendung

Wenn Ihr dedizierter Server zum ersten Mal eingerichtet wird, können Sie das zu installierende Betriebssystem auswählen.

### Ihren Server installieren oder reinstallieren

Sie können Ihren Server in wenigen Schritten in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) reinstallieren und ein anderes Betriebssystem auswählen. Klicken Sie im Tab `Allgemeine Informationen`{.action} auf `...`{.action} neben `System (OS)` und danach auf `Installieren`{.action}.

![Button Reinstallieren](images/reinstalling-your-server-00.png){.thumbnail}

Wählen Sie im folgenden Fenster `Installation mit einem OVH Template`{.action} (zur Verwendung eines unserer Installationstemplates) oder `Installation mit einem Ihrer Templates`{.action} (zur Verwendung eigener Templates) aus und klicken Sie dann auf `Weiter`{.action}.

![Modellauswahl](images/reinstalling-your-server-02.png){.thumbnail}

Wählen Sie das zu installierende Betriebssystem aus und klicken Sie auf `Weiter`{.action}.

![Operationelle Auswahl](images/reinstalling-your-server-03.png){.thumbnail}

Wenn Sie das Partitionsschema Ihres Betriebssystems ändern müssen, setzen Sie einen Haken in dem Feld "Konfiguration der Partitionen anpassen" und klicken Sie dann auf `Weiter`{.action}.

![Partitionskonfiguration personalisieren](images/SSH_02.png){.thumbnail}

Klicken Sie nach Abschluss der Anpassungen auf `Weiter`{.action}, um zur Zusammenfassung zu gelangen.

### Hinzufügen eines SSH-Schlüssels (optional)

Wenn Sie ein Linux-Betriebssystem installieren, können Sie Ihren SSH-Schlüssel im letzten Schritt des Installationsprozesses hinzufügen.

![Partitionskonfiguration personalisieren](images/SSH_03.png){.thumbnail}

Wenn ein SSH-Schlüssel bereits im Kundencenter gespeichert ist, erscheint er unten Menü unter `SSH-Schlüssel`. Falls nicht, muss zuerst ein Schlüssel im Bereich "Meine Dienste" eingetragen werden.

Öffnen Sie hierzu die Seitenleiste, indem Sie oben rechts auf Ihren Namen klicken und dann den Shortcut `Produkte und Dienstleistungen`{.action} auswählen.

![Partitionskonfiguration personalisieren](images/SSH_13.png){.thumbnail}

Gehen Sie in "Meine Dienste" auf den Tab `SSH-Schlüssel`{.action} und klicken Sie auf `SSH-Schlüssel hinzufügen`{.action}.

![Partitionskonfiguration personalisieren](images/SSH_14.png){.thumbnail}

Da Sie einen Dedicated Server einrichten möchten, wählen Sie im Drop-down-Menü "Dedicated" aus (ebenfalls für einen VPS verwendbar).

Geben Sie im neuen Fenster eine ID (Name Ihrer Wahl) und den Schlüssel selbst (vom Typ RSA, ECDSA oder Ed25519) in die entsprechenden Felder ein.

![Partitionskonfiguration personalisieren](images/SSH_12.png){.thumbnail}

Weitere Informationen zur Erstellung von SSH-Schlüsseln finden Sie in [dieser Anleitung](../../public-cloud/create-ssh-keys/).


> [!primary]
>
> Einige Betriebssysteme oder Plattformen wie Plesk und Windows benötigen vor der Installation eine Lizenz. Sie können diese Lizenz [bei OVHcloud](https://www.ovhcloud.com/de/bare-metal/os/) oder einem Reseller kaufen. Anschließend müssen Sie sie manuell über das Betriebssystem selbst oder über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) einfügen.
>
Sie können Ihre Lizenzen im Kundencenter unter `Bare Metal Cloud`{.action} im Bereich `Lizenzen`{.action} verwalten. In diesem Bereich können Sie auch Lizenzen bestellen oder Ihre eigene SPLA Windows- oder SPLA SQL Server-Lizenz hinzufügen (über den Button `Aktionen`{.action}).
>

### Verbindung zu Ihrem Server

#### Linux

Sobald die Installation abgeschlossen ist, erhalten Sie eine E-Mail mit Ihrem Passwort für den Root-Zugriff. Mit Root-Zugriff können Sie sich über SSH, einem gesicherten Kommunikationsprotokoll, mit Ihrem Server verbinden. Sie können auf Ihren Server über eine Kommandozeile (Linux oder MacOS) oder über ein spezielles Tool unter Windows zugreifen (zum Beispiel PuTTy).

Geben Sie nach dem Öffnen des Terminals folgenden Befehl ein, um sich mit Ihrem Server zu verbinden. Ersetzen Sie den Text hinter dem @-Zeichen durch die erforderlichen Angaben (IP-Adresse oder Serverreferenzname). Der Referenzname Ihres Servers beginnt immer mit *ns*.

**Beispiel unter Verwendung einer IP-Adresse**

```sh
ssh root@IPv4_Ihres_Servers
```

**Beispiel mit Serverreferenz**

```sh
ssh root@Referenzname_Ihres_Servers
```

#### Windows

Sobald die Installation abgeschlossen ist, erhalten Sie eine E-Mail mit Ihrem Passwort für den Administrator-Zugang (Root). Verwenden Sie diese Login-Daten, um sich via RDP (**R**emote **D**esktop **P**rotocol) mit dem Server zu verbinden. Sobald Sie eingeloggt sind, wird Windows Sie durch die Erstinstallation führen.


### Absicherung Ihres Dedicated Servers

Wie im Abschnitt "Ziel" dieser Anleitung erwähnt, sind Sie der Administrator Ihres Servers. Damit sind Sie auch für Ihre Daten und die Sicherheit Ihres Dienstes verantwortlich. Folgende Tipps helfen Ihnen dabei, Ihren Server zu sichern:

- Halten Sie Ihr Betriebssystem immer auf dem neuesten Stand.
- Halten Sie Ihre Software auf dem neuesten Stand.
- Ändern Sie Ihren Standard-SSH-Port (Port 22) und wählen Sie einen anderen Port.
- Ändern Sie Ihr Root-Passwort.
- Erstellen Sie einen neuen Systembenutzer mit eingeschränktem Zugriff für die tägliche Nutzung.

Weitere Informationen finden Sie in unserer zugehörigen [Anleitung](../dedizierten-server-sichern/).

### Netzwerkkonfiguration

#### Network Bridging

Der Bridge-Modus wird von Netzwerkgeräten verwendet, um ein aggregiertes Netzwerk aus zwei oder mehr Kommunikationsnetzwerken, bzw. zwei oder mehr Netzwerksegmenten zu erstellen. Der Bridging unterscheidet sich vom Routing, das es Netzwerken erlaubt, unabhängig zu kommunizieren, während sie voneinander getrennt bleiben.

Diese Konfiguration wird vor allem in der Virtualisierung verwendet, damit jede virtuelle Maschine über eine eigene öffentliche IP-Adresse verfügt.

Weitere Informationen finden Sie in unserer Anleitung zu [Netzwerk Bridging](../network-bridging/).

#### IP Aliasing

IP Aliasing bedeutet, dass zwei oder mehr IP-Adressen mit demselben Netzwerkinterface verknüpft werden. So kann Ihr Server mehrere Verbindungen zu einem Netzwerk herstellen, die jeweils einen anderen Zweck erfüllen.

Detaillierte Anweisungen zur Konfiguration von IP Aliasing finden Sie in [dieser Anleitung](../network-ipaliasing).

#### IPv6 Konfiguration

Alle OVHcloud Dedicated Server beinhalten einen /64 IPv6 Block. Um die Adressen dieses Blocks zu verwenden, müssen Sie die Netzwerkkonfiguration ändern. Lesen Sie hierzu unsere Anleitung: [IPv6 auf einem Dedicated Server konfigurieren](../netzwerk-ipv6/).

### Fehlerdiagnose

OVHcloud liefert alle Dedicated Server mit einer IPMI-Konsole (Intelligent Platform Management Interface) aus, die in Ihrem Browser oder über ein Java-Applet ausgeführt wird. Sie können sich direkt mit Ihrem Server verbinden, auch wenn dieser über keine Netzwerkverbindung verfügt. So können die Probleme, die zur Trennung Ihres Servers geführt haben, gelöst werden.

Weitere Informationen finden Sie in unserer Anleitung: [Verwendung der IPMI-Konsole für Dedicated Server](../verwendung-ipmi-dedicated-server/).

### Rescue-Modus

Bei jeglichen Problemen sollte üblicherweise der erste Schritt zur Behebung sein, den Server über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im Rescue-Modus neu zu starten. Es ist wichtig, Fehler in diesem Modus einzugrenzen, auch um einen Software-Zusammenhang auszuschließen, bevor Sie unsere Support-Teams kontaktieren.

Bitte folgen Sie unserer [Anleitung zum Rescue-Modus](../ovh-rescue/).

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
