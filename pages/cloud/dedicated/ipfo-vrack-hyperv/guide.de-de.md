---
title: "Hyper-V mit Additional IPs in einem vRack verwenden"
excerpt: "Erfahren Sie hier, wie Sie Hyper-V mit Additional IPs in einem vRack konfigurieren"
slug: ipfo-vrack-hyperv
section: vRack 
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 26.04.2021**

## Ziel

**Diese Anleitung erklärt die Vorgehensweise, um Hyper-V zu installieren, einen virtuellen Switch einzurichten und eine VM mit Additional IPs über ein vRack zu konfigurieren.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account (vRack-kompatibel), auf dem Windows Server installiert ist.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben ein ISO-Image für das zu installierende Betriebssystem der VM (CentOS 7 wird in dieser Anleitung beispielhaft verwendet).
- Sie haben ein [vRack](https://www.ovh.de/loesungen/vrack/) in Ihrem Kunden-Account eingerichtet.
- Sie verfügen über einen IP-Block von 4 oder mehr IP-Adressen.

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](https://eco.ovhcloud.com/de/about/) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](https://eco.ovhcloud.com/de/compare/).

## In der praktischen Anwendung

In dieser Anleitung wird davon ausgegangen, dass Sie bereits Windows Server installiert haben, über den Remotedesktop eingeloggt sind und Ihren Dedicated Server und Ihren IP-Block bereits einem vRack zugewiesen haben. Weitere Informationen zu diesen Schritten finden Sie in den Schritten 1 bis 4 unserer Anleitung zum [Konfigurieren von Dedicated Servern in einem vRack](../mehrere-dedizierte-server-im-vrack-konfigurieren/).

### Hyper-V Installation

Installieren Sie zunächst die Rolle "Hyper-V".

Klicken Sie im Server Manager auf `Add roles and features`{.action}.

![Hyper-v Installation](images/add-roles-features.png){.thumbnail}

Klicken Sie im Assistenten auf `Next`{.action}, um zur nächsten Seite zu gelangen.

![Hyper-v Installation](images/add-roles-features-2.png){.thumbnail}

Wählen Sie die Option "Role-Based or feature-based installation" und klicken Sie dann auf `Next`{.action}.

![Hyper-v Installation](images/add-roles-features-3.png){.thumbnail}

Überprüfen Sie, dass die Option "Select a server from the server pool" aktiv ist, bevor Sie den gewünschten Server aus der unten stehenden Liste auswählen. Klicken Sie anschließend auf `Next`{.action}.

![Hyper-v Installation](images/add-roles-features-4.png){.thumbnail}

Setzen Sie in der Liste der Server-Rollen einen Haken bei "Hyper-V" und klicken Sie dann auf `Next`{.action}.

![Hyper-v Installation](images/add-roles-features-5.png){.thumbnail}

Auf der folgenden Seite ("Features") klicken Sie auf `Next`{.action}.

![Hyper-v Installation](images/add-roles-features-9.png){.thumbnail}

Auf der nächsten Seite muss die Netzwerkverbindung Ihres Servers ausgewählt werden, die für den virtuellen Switch verwendet werden soll.

Um diese zu identifizieren, öffnen Sie die Kommandozeile oder PowerShell und führen Sie den Befehl `ipconfig /all` aus.

In unserem Beispiel ist `Ethernet 2` das für vRack verwendete Interface. Es ist jedoch möglich, dass das vRack-Interface in Ihrer Konfiguration ein anderes ist. Das hier auszuwählende Interface verwendet nicht die Haupt-IP-Adresse des Servers oder eine selbst zugewiesene IP-Adresse (169.254.x.x).

![Interface](images/ipconfig.png){.thumbnail}

Gehen Sie mit dieser Information zum `Add Roles and Features Wizard`{.action} und klicken Sie auf `Next`{.action}.

![Hyper-v Installation](images/add-roles-features-6.png){.thumbnail}

Wählen Sie hier das Netzwerkinterface für das vRack aus, das Sie zuvor identifiziert haben, und klicken Sie dann auf `Next`{.action}.

![Hyper-v Installation](images/add-roles-features-7.png){.thumbnail}

Auf den beiden folgenden Seiten können Sie Optionen für Migration und Storage auswählen. Sie können sie nach Belieben konfigurieren.

Wenn Sie die Bestätigungsseite erreicht haben, setzen Sie einen Haken im Feld "Restart the destination server automatically if required", klicken Sie auf `Yes`{.action} und dann auf `Install`{.action}.

![Hyper-v Installation](images/add-roles-features-8.png){.thumbnail}

Hyper-V wird nun installiert und der Server sollte sich neu starten.

### Eine virtuelle Maschine erstellen und konfigurieren

Sobald der Server neu gestartet ist, loggen Sie sich ein und öffnen Sie den Hyper-V Manager.

Wählen Sie links Ihren Server aus, klicken Sie auf `New`{.action} und wählen Sie "Virtual Machine" im Kontextmenü aus.

![VM](images/create-vm.png){.thumbnail}

Konfigurieren Sie die VM in "New Virtual Machine Wizard", wie Sie möchten. Wenn Sie den Schritt "Configure Networking" erreichen, wählen Sie den virtuellen Switch aus. Klicken Sie anschließend auf `Next`{.action}, um fortzufahren.

![VM](images/create-vm-2.png){.thumbnail}

Im Abschnitt "Installation Options" muss der Pfad zum ISO-Image für das zu installierende Betriebssystem angegeben werden. Klicken Sie auf `Next`{.action}, um fortzufahren.

![VM](images/create-vm-3.png){.thumbnail}

Wenn Sie auf der "Summary"-Seite angekommen sind, überprüfen Sie, ob die Einstellungen bei "Network" (Virtueller Switch) und "Operating System" korrekt sind, und klicken Sie dann auf `Finish`{.action}.

![VM](images/create-vm-4.png){.thumbnail}

### Betriebssystem installieren und IP konfigurieren

Wenn Sie die VM starten, sollte die Installation des Betriebssystems automatisch beginnen. Ist das nicht der Fall, wird wahrscheinlich folgende Fehlermeldung angezeigt:

> "The unsigned image hash is not allowed (DB)"

In diesem Fall müssen Sie den "Secure Boot" deaktivieren.

Schalten Sie zunächst die VM aus und klicken Sie dann auf `Settings`{.action}.

![Boot](images/disable-secure-boot.png){.thumbnail}

Öffnen Sie den Bereich `Security`{.action}, haken Sie "Enable Secure Boot" ab und klicken Sie dann auf `Apply`{.action}.

![Boot](images/disable-secure-boot-2.png){.thumbnail}

Schalten Sie anschließend die VM ein.

Richten Sie das Betriebssystem ein, wie Sie möchten.

In den Netzwerkeinstellungen muss eine statische IP-Adresse festgelegt werden.

In diesem Beispiel ist der dem vRack zugewiesene IP-Block 192.xxx.xxx.80/29. Die Verteilung des Blocks sieht so aus:

192.xxx.xxx.80 - Netzwerkadresse (reserviert - nicht verwendbar)
<br>192.xxx.xxx.81 - Erste verwendbare IP-Adresse
<br>192.xxx.xxx.82
<br>192.xxx.xxx.83
<br>192.xxx.xxx.84
<br>192.xxx.xxx.85 - Letzte verwendbare IP-Adresse
<br>192.xxx.xxx.86 - Standardgateway (reserviert - nicht verwendbar)
<br>192.xxx.xxx.87 - Broadcast-Adresse (reserviert - nicht verwendbar)
<br>

Angenommen Sie verwenden 192.xxx.xxx.81, dann sieht die IP-Konfiguration so aus:

Address: 192.xxx.xxx.81
<br>Subnet Mask: 255.255.255.248
<br>Gateway: 192.xxx.xxx.86
<br>DNS: 213.186.33.99 (Sie können alternatives DNS verwenden.)

<br>
Adresse: 192.168.xxx.81<br>
Subnet Mask: 255.255.255.248<br>
Gateway:  192.xxx.xxx.86<br>
DNS: 213.186.33.99 (Sie können weitere DNS hinzufügen)<br>
<br>

Sobald das Betriebssystem installiert ist, sollte die Verbindung bereit sein.

Das nachstehende Beispiel zeigt unter anderem, wie die Datei `ifcfg-eth0` aussehen sollte.

![Konfiguration](images/configured.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
