---
title: "Verwendung der IPMI-Konsole für Dedicated Server"
excerpt: "Erfahren Sie hier, wie Sie sich über das OVHcloud Kundencenter auf Ihrem Server einloggen können, ohne externe Software zu verwenden"
updated: 2024-07-23
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die IPMI-Konsole (Intelligent Platform Management Interface) ermöglicht eine direkte Verbindung zu Ihrem Dedicated Server, ohne dass der Konnektivitätsstatus des Betriebssystems eine Rolle spielt. In dieser Anleitung erfahren Sie, wie Sie diese Konsole starten.

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](/links/bare-metal/eco-about) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](/links/bare-metal/eco-compare).

<a name="procedure"></a>

## In der praktischen Anwendung

Die Verbindung mit IPMI kann auf verschiedene Arten hergestellt werden¹. Hier eine Tabelle:

|Methodenname|Alternativer Name|Beschreibung|Kopieren-Einfügen|Virtuelles ISO-Laufwerk²|Anwendungsfälle|
|---|---|---|---|---|---|
|**KVM**³ über **Webbrowser**|**KVM HTML**|Emulation des Videobildschirms durch eine **Canvas HTML**, so als würden Sie eine USB-Tastatur/Maus und einen VGA-Videobildschirm physisch an Ihren Dedicated Server anschließen.|❌|⚠️⁴|- Diagnostizieren Sie ein Problem mit einem Dedicated Server-Boot.|
|**KVM**³ über **Java-Applet**|**KVM Java**|Dasselbe gilt für HTML-KVM, mit der Ausnahme, dass die Emulation über ein **Java-Applet** anstelle des HTML-Canvas durchgeführt wird.|❌|✅|- Diagnose eines Bootproblems des Dedicated Servers. <br />- Manuelles Installieren eines bestimmten Betriebssystems (außer [Katalog](/links/bare-metal/os))⁵.|
|**SoL**⁶ über **Webbrowser**|**SoL JavaScript**|Serielle Verbindung über Webbrowser emulieren, so als ob Sie eine serielle Konsole physisch in RS-232 an Ihren Dedicated Server anschließen würden.|✅|❌|- Netzwerkproblem diagnostizieren: Logs abrufen und Konfigurationsdateien bearbeiten.|
|**SoL**⁶ über **SSH**|**SoL SSH**|Wie bei JavaScript-SoL, mit der Ausnahme, dass die Emulation über ein SSH-Gateway erfolgt. Sie verbinden sich mit Ihrem bevorzugten SSH-Client via SSH mit einem Fremdserver, der die Befehle dann seriell an den Dedicated Server weiterleitet.|✅|❌|- Das Gleiche gilt für SoL JavaScript, allerdings nicht für die grafische Oberfläche.|

¹ Abhängig von der Hardware-Kompatibilität Ihres Dedicated Servers (einige Methoden werden nicht im [OVHcloud Kundencenter](/links/manager) angezeigt).<br />
² Funktion zum Mounten eines lokal auf Ihrem Rechner gespeicherten ISO-Images auf einen dedizierten Server an einer entfernten Stelle, mit der Sie ein Betriebssystem über IPMI installieren können.<br />
³ KVM = Keyboard Video and Mouse<br />
⁴ Je nach Hardware-Kompatibilität Ihres Dedicated Servers : wenn nicht kompatibel, Java KVM verwenden.<br />
⁵ Wenn das Betriebssystem, das Sie installieren möchten, nicht im [Katalog der für die OVHcloud Dedicated Server verfügbaren Betriebssysteme](/links/bare-metal/os) verfügbar ist, können Sie auch ein personalisiertes Image verwenden: siehe [Vergleich von Bring Your Own Image (BYOI) und Bring Your Own Linux (BYOLinux)](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image-versus-bring-your-own-linux) für weitere Details.<br />
⁶ SoL = Serial over LAN

Um eine dieser Methoden zu aktivieren, loggen Sie sich in Ihrem [OVHcloud Kundencenter] ein (/links/manager). Klicken Sie im Bereich `Bare Metal Cloud`{.action} auf `Dedicated Server`{.action} und wählen Sie Ihren Server aus und klicken Sie dann auf den Tab `IPMI/KVM`{.action}.

### KVM über Java-Applet öffnen <a name="applet-java"></a>

Damit das Java Applet funktionieren kann, muss Java auf Ihrem Computer installiert sein. Ist das nicht der Fall, gehen Sie auf die [offizielle Seite](https://www.java.com/en/download/){.external}.

Klicken Sie in Ihrem OVHcloud Kundencenter im Bereich `Remote KVM`{.action} auf `Von einem Java Applet (KVM)`{.action} :

![Java KVM Zugang](images/ipmi-kvm-java-01.png){.thumbnail}

Laden Sie die `kvm.jnlp`-Datei herunter, wenn Sie dazu aufgefordert sind, und starten Sie sie.

![Java KVM starten](images/ipmi-kvm-java-02.png){.thumbnail}

Sie gelangen dann zur Login-Seite. Geben Sie Ihre `Root`-Login-Daten ein, wie bei einer Verbindung über ein Terminal oder einen GUI-Client.

![Java KVM-Vorschau](images/ipmi-kvm-java-03.png){.thumbnail}

Sie können nun Ihren Server verwalten.

### KVM über Webbrowser öffnen <a name="kvm-browser"></a>

Klicken Sie in Ihrem OVHcloud Kundencenter im Bereich `Remote KVM`{.action} auf `Von Ihrem Browser (KVM)`{.action} :

![KVM HTML Zugang](images/ipmi-kvm-html-01.png){.thumbnail}

Die Aktivierung dauert einige Sekunden. Sie werden über die Verfügbarkeit der IPMI-Verbindung informiert.

![KVM HTML öffnen](images/ipmi-kvm-html-02.png){.thumbnail}

Klicken Sie dann auf `Zur Konsole (KVM)`, um die Konsole in Ihrem Browser zu öffnen.

![KVM HTML-Vorschau](images/ipmi-kvm-html-03.png){.thumbnail}

### SoL via SSH öffnen <a name="sol-ssh"></a>

Weitere Informationen zum Erstellen von SSH-Schlüsselpaaren finden Sie auf [dieser Seite](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#create-ssh-key).

Klicken Sie in Ihrem OVHcloud Kundencenter im Bereich `Serial over LAN (SoL)`{.action} auf `SSH-Schlüssel hinzufügen`{.action}.

![SoL SSH Zugang](images/ipmi-sol-sshkey-01.png){.thumbnail}

Es wird ein Popup geöffnet, in dem Sie den öffentlichen SSH-Schlüssel eingeben können, mit dem Sie sich verbinden möchten. Klicken Sie anschließend auf `SoL-Sitzung via SSH starten`{.action}.

![SoL SSH Öffentlicher SSH-Schlüssel](images/ipmi-sol-sshkey-02.png){.thumbnail}

Wenn die Sitzung bereit ist, erscheint eine Bestätigungsmeldung und ein URI, damit Sie über SSH eine serielle Verbindung zu Ihrem Dedicated Server herstellen können. Kopiert diesen URI in die Zwischenablage.

![SoL SSH öffnen](images/ipmi-sol-sshkey-03.png){.thumbnail}

Weitere Informationen zur Verwendung eines SSH-Schlüssels für die SSH-Verbindung finden Sie auf [dieser Seite](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#multiplekeys).

### SoL über Webbrowser öffnen <a name=„sol-browser“></a>

Klicken Sie in Ihrem OVHcloud Kundencenter im Bereich `Serial over LAN (SoL)`{.action} auf `Von Ihrem Browser (SoL)`{.action}.

![SoL JavaScript Zugang](images/ipmi-sol-html-01.png){.thumbnail}

> [!primary]
> Wenn der Wechsel zum Popup nicht automatisch erfolgt, können Sie immer noch auf die Schaltfläche `Auf die Konsole zugreifen (SoL)`{.action} klicken.

![SoL JavaScript öffnen](images/ipmi-sol-html-02.png){.thumbnail}

### IPMI testen und neu starten

Es kann vorkommen, dass die IPMI nicht mehr reagiert. Sie können dann zunächst einen Test durchführen, indem Sie auf `IPMI-Test `{.action} klicken. Die Ergebnisse der Diagnose werden unten auf der Seite angezeigt.

![IPMI-Test](images/ipmi-test.png){.thumbnail}

Wenn alles normal ist, wie in hier verwendeten Beispiel, dann haben Sie wahrscheinlich lokale Probleme (Internetverbindung, lokales Gerät). Wenn die IPMI-Funktion tatsächlich auf Schwierigkeiten stößt, können Sie sie neu starten, indem Sie auf `IPMI neu starten`{.action} klicken.

![IPMI-Test](images/ipmi-reboot.png){.thumbnail}

Der Neustart des IPMI dauert einige Minuten.

> [!primary]
> Dieser Vorgang beeinträchtigt nicht den Betrieb des Servers.
>

### Installation eines Betriebssystems mit IPMIv1

> [!warning]
> OVHcloud garantiert nicht die Funktionalität von über IPMI installierten Betriebssystemen. Diese Methode sollte nur von einem erfahrenen Server-Administrator erwogen werden.
>
> 64-Bit-Versionen von Java können das Öffnen der Menüs `Redirect ISO`/`Redirect CDROM` verhindern und JViewer zum Absturz bringen.

Um zu beginnen, öffnen Sie [IPMI über Java-Applet](#applet-java) in Ihrem [OVHcloud Kundencenter](/links/manager). Klicken Sie anschließend im Menü auf `Device`{.action} und wählen Sie im Drop-down-Menü `Redirect ISO`{.action} aus.

![Redirect_ISO](images/RedirectISO.jpg){.thumbnail}

Wählen Sie dann die ISO aus, die Sie im Dateisystem Ihres lokalen Computers verwenden möchten. Wenn Sie Ihr ISO-Zertifikat ausgewählt haben, klicken Sie auf den `Ctrl Alt Del`{.action} in der oberen rechten Ecke des Bildschirms, um den Server neu zu starten. Tippen Sie auf die Taste `F`, um auf die Startoptionen zuzugreifen.

> [!primary]
> Vielleicht müssen Sie die Software-Tastatur verwenden, um die Einträge in IPMI zu speichern. Um darauf zuzugreifen, klicken Sie oben im Fenster auf die `Keyboard`{.action}-Option . Wählen Sie anschließend im Drop-down-Menü `Soft Keyboard` aus und klicken Sie auf `Show`{.action}.
>

Wählen Sie die `UEFI Virtual CDROM 1.00` im Startmenü (Boot) aus, um den Server von der zuvor verbundenen ISO zu starten.

![UEFI_Virt](images/UEFIVirt.jpg){.thumbnail}

Folgen Sie den notwendigen Schritten für die Installation des Betriebssystems. Vergessen Sie nicht, die ISO-Norm aus der Option "Redirect ISO"zu löschen.

### Installation eines Betriebssystems mit IPMIv2

> [!warning]
> OVHcloud garantiert nicht die Funktionalität der über IPMI installierten Betriebssysteme. Diese Methode sollte nur von einem erfahrenen Server-Administrator erwogen werden.
>

Um zu beginnen, öffnen Sie [IPMI mit einem Java-Applet](#applet-java) über Ihr [OVHcloud Kundencenter](/links/manager). Klicken Sie dann auf `Virtual Media`{.action} und auf `Virtual Storage`{.action}.

![Virtual Storage](images/virtual_storage.png){.thumbnail}

Wählen Sie im angezeigten Fenster `ISO File` aus der Drop-down-Liste "Logical Drive Type". Klicken Sie anschließend auf `Open Image`{.action} und navigieren Sie zu Ihrer ISO Datei. Klicken Sie abschließend auf `Plug-in`{.action} und `OK`{.action}.

![ISO_file](images/iso_file.png){.thumbnail}

Um von Ihrer ISO Datei aus zu starten müssen Sie auf das BIOS zugreifen und die Startoptionen ändern. Klicken Sie hierzu auf `Power Control`{.action} und dann auf `Set Power Reset`{.action}.

![Power_Reserver](images/power_reset.png){.thumbnail}

> [!primary]
> Möglicherweise müssen Sie die Software-Tastatur verwenden, um die Einträge in IPMI zu speichern. Um darauf zuzugreifen, klicken Sie oben im Fenster auf die Option `Virtual Media`{.action}. Wählen Sie dann `Virtual Keyboard`{.action} im Drop-down-Menü aus.
>

Klicken Sie auf die `ENTF` Taste während des Startvorgangs, um zum BIOS-Interface zu gelangen. Sie können auch die Taste `F11` drücken und auf das BIOS zugreifen, indem Sie die Option `Enter Setup`{.action} auswählen.

![Startmenü](images/boot_menu.png){.thumbnail}

Gehen Sie im BIOS zum Tab `Boot`{.action} und ändern Sie die `UEFI Boot Order #1` zu `UEFI USB CD/DVD:UEFI: CDROM virtual ATEN YSOJ`.

![Bios](images/bios.png){.thumbnail}

Klicken Sie auf die Taste `F4`, um die Änderungen zu speichern und den Server neu zu starten.

### Installation eines Betriebssystems mit KVM über Webbrowser (nur für neuere Server)

> [!warning]
> OVHcloud garantiert nicht die Funktionalität der über IPMI installierten Betriebssysteme. Diese Methode sollte nur von einem erfahrenen Server-Administrator erwogen werden.
>

Öffnen Sie in Ihrem [OVHcloud Kundencenter](/links/manager) die [KVM-Konsole](#kvm-browser).

Hier haben Sie Zugriff auf die gleichen Informationen und Funktionen wie in den auf Java basierenden IPMI-Modulen.

> [!primary]
>
> Stellen Sie sicher, dass Sie die nächsten Schritte zügig ausführen. Der Vorgang könnte abgebrochen werden, wenn zwischen den Aktionen längere Pausen bestehen.
>

Klicken Sie auf den Button `Browse File`{.action} und wählen Sie Ihre Image-Datei aus.

![KVM installieren](images/kvm_install01.png){.thumbnail}

Klicken Sie auf `Start Media`{.action}. Dadurch wird die ISO-Datei für den Installationsprozess vorbereitet.

![KVM installieren](images/kvm_install02.png){.thumbnail}

Die nun angezeigte Dateigröße ist nicht die tatsächliche Größe. Das ist normal, denn die Datei wird in diesem Schritt nicht vollständig übertragen.

![KVM installieren](images/kvm_install03.png){.thumbnail}

Klicken Sie auf `Power`{.action} und wählen Sie `Reset Server`{.action} im Drop-down-Menü aus.

![KVM installieren](images/kvm_install04.png){.thumbnail}

Warten Sie, bis die Anzeige zur Start-Auswahl erscheint, und drücken Sie die entsprechende Taste, um in das Boot-Menü zu gelangen (`F11` in diesem Beispiel).

![KVM installieren](images/kvm_install05.png){.thumbnail}

Wählen Sie im Boot-Menü das optische Laufwerk (`UEFI: AMI Virtual CDROM0` in diesem Beispiel) und drücken Sie `Enter`.

![KVM installieren](images/kvm_install06.png){.thumbnail}

Die ISO-Datei wird nun hochgeladen und der Server wird von der Datei aus starten.

![KVM installieren](images/kvm_install07.png){.thumbnail}

<a name="bios"></a>

### Neustarten eines Servers ins BIOS-Menü

Möglicherweise möchten Sie beim Konfigurieren oder Troubleshooting Ihres Servers auf das BIOS zugreifen. Dies lässt sich am einfachsten mit dem Tool `ipmiutil` erreichen. (Weiterführende Informationen finden Sie auf der [Projektseite](https://ipmiutil.sourceforge.net/).)

Wenn sich der Server im [Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) befindet und Sie eingeloggt sind, installieren Sie es mit den folgenden Befehlen:

```bash
apt install ipmiutil
```

Starten Sie dann den Server mit diesem Befehl neu:

```bash
ipmiutil reset -b
```

Anschließend rufen Sie die [IPMI-Konsole](#procedure) in Ihrem [OVHcloud Kundencenter](/links/manager) auf. Es sollte dort das BIOS-Menü des Servers angezeigt werden.

![KVM BIOS](images/kvm_bios.png){.thumbnail}

## Weiterführende Informationen

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer User Community gehen Sie auf [User Community](/links/community).
