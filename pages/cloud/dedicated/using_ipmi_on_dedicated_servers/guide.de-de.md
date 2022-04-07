---
title: Verwendung der IPMI-Konsole für Dedicated Server
slug: verwendung-ipmi-dedicated-server
excerpt: Mit IPMI können Sie sich mit Ihrem Server verbinden, ohne auf externe Software zurückgreifen zu müssen
section: Erste Schritte
order: 4
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 18.03.2021**

## Ziel

Die IPMI-Konsole (Intelligent Platform Management Interface) erlaubt es, eine direkte Verbindung zu Ihrem Dedicated Server herzustellen, ohne externe Software (z. B. ein Terminal oder PuTTY) zu verwenden. In dieser Anleitung erfahren Sie, wie Sie diese Konsole starten.

Bitte beachten Sie, dass in der Anleitung auch der Begriff KVM (Keyboard Video and Mouse) verwendet wird, der vor allem in Zusammenhang mit VPS gebräuchlich ist.

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](https://eco.ovhcloud.com/de/about/) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](https://eco.ovhcloud.com/de/compare/).

## In der praktischen Anwendung

Die Verbindung zur IPMI kann über mehrere Methoden hergestellt werden: Java-Applet (empfohlen, jedoch nur für neuere Server verfügbar) oder Browser (Serial over LAN).

- **Java Applet**: Mit dieser Option können Sie ein KVM-Tool (Tastatur, Video, Maus) über eine Java-Konsole verwenden, um die gewünschten Aktionen auszuführen.

- **Browser (Serial over LAN)**: Diese Methode verwendet den Webbrowser zum Fernzugriff auf die Server-Konsole.

- Eine dritte Methode, die nur für neuere Server verfügbar ist, erlaubt die Verwendung des KVM-Tools auch über einen Webbrowser.

Um eine dieser Methoden zu aktivieren, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein. Klicken Sie im Bereich `Bare Metal Cloud`{.action} und wählen Sie unter `Dedicated Server`{.action} Ihren Server aus. Klicken Sie dann auf den Tab `IPMI`{.action}.

### Über Java Applet verbinden <a name="applet-java"></a>

Damit das Java Applet funktionieren kann, muss Java auf Ihrem Computer installiert sein. Ist das nicht der Fall, gehen Sie auf die [offizielle Seite](https://www.java.com/en/download/){.external}.

Klicken Sie im `IPMI`{.action}-Bereich Ihres OVHcloud Kundencenters auf `Mit einem Java-Applet (KVM)`{.action}.

![IPMI Java initiiert](images/java_ipmi_initiate_2022.png){.thumbnail}.

Laden Sie die `kvm.jnlp`-Datei herunter, wenn Sie dazu aufgefordert sind, und starten Sie sie.

![IPMI Java](images/java_ipmi_activation.png){.thumbnail}

Sie gelangen dann zur Login-Seite. Geben Sie Ihre `Root`-Login-Daten ein, wie bei einer Verbindung über ein Terminal oder einen GUI-Client.

![Java IPMI Verbindung](images/java_ipmi_login.png){.thumbnail}

Sie können nun Ihren Server verwalten.

### KVM über Ihren Webbrowser verwenden (nur für neuere Server)

Klicken Sie im `IPMI`{.action}-Bereich Ihres OVHcloud Kundencenters auf `Über Ihren Browser (KVM)`{.action}:

![Browser-IPMI](images/KVM-web-browser01.png){.thumbnail}

Die Aktivierung dauert einige Sekunden. Sie werden über die Verfügbarkeit der IPMI-Verbindung informiert.

![Browser-IPMI](images/KVM-web-browser02.png){.thumbnail}

Klicken Sie dann auf `Zur Konsole (KVM)`, um die Konsole in Ihrem Browser zu öffnen.

![Browser-IPMI](images/KVM-web-browser03b.png){.thumbnail}

### Verbindung über den Browser mit Serial over LAN (SoL)

Wir empfehlen, sich via Java-Applet einzuloggen; Sie können IPMI aber auch als Serial over LAN (SoL) verwenden. Klicken Sie `Mit Ihrem Browser (SoL)`{.action} im Bereich `IPMI`{.action} Ihres Kundencenters.

![Aktivierung der IPMI Integritätserklärung](images/sol_ipmi_activation_2022.png){.thumbnail}

> [!warning]
>
> Die Verbindung mit SoL kann mehrere Minuten in Anspruch nehmen, weshalb das Java-Applet normalwerweise vorzuziehen ist.
>

### IPMI testen und neu starten

Es kann vorkommen, dass die IPMI nicht mehr reagiert. Sie können dann zunächst einen Test durchführen, indem Sie auf `IPMI-Test `{.action} klicken. Die Ergebnisse der Diagnose werden unten auf der Seite angezeigt.

![IPMI-Test](images/ipmi_test_2022.png){.thumbnail}

Wenn alles normal ist, wie in hier verwendeten Beispiel, dann haben Sie wahrscheinlich lokale Probleme (Internetverbindung, lokales Gerät). Wenn die IPMI-Funktion tatsächlich auf Schwierigkeiten stößt, können Sie sie neu starten, indem Sie auf `IPMI neu starten`{.action} klicken.

![IPMI-Test](images/ipmi_reboot_2022.png){.thumbnail}

Der Neustart des IPMI dauert einige Minuten.

> [!primary]
> Dieser Vorgang beeinträchtigt nicht den Betrieb des Servers.
>

### Installation eines Betriebssystems mit IPMIv1

> [!warning]
> OVHcloud garantiert nicht die Funktionalität von über IPMI installierten Betriebssystemen. Diese Methode sollte nur von einem erfahrenen Server-Administrator erwogen werden.

Um zu beginnen, öffnen Sie [IPMI über Java-Applet](./#applet-java) in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Klicken Sie anschließend im Menü auf `Device`{.action} und wählen Sie im Drop-down-Menü `Redirect ISO`{.action} aus.

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

Um zu beginnen, öffnen Sie [IPMI mit einem Java-Applet](./#applet-java) über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Klicken Sie dann auf `Virtual Media`{.action} und auf `Virtual Storage`{.action}.

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

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
