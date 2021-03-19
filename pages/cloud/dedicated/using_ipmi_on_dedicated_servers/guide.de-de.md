---
title: 'Verwendung der IPMI-Konsole für Dedicated Server'
slug: verwendung-ipmi-dedicated-server
excerpt: 'Mit IPMI können Sie sich mit Ihrem Server verbinden, ohne auf externe Software zurückgreifen zu müssen.'
section: Erste Schritte
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 18.03.2021**

## Ziel

Die IPMI-Konsole (Intelligent Platform Management Interface) erlaubt es, eine direkte Verbindung zu Ihrem Dedicated Server herzustellen, ohne externe Software (z. B. ein Terminal oder PuTTY) zu verwenden. In dieser Anleitung erfahren Sie, wie Sie diese Konsole starten.

Bitte beachten Sie, dass in der Anleitung auch der Begriff KVM (Keyboard Video and Mouse) verwendet wird, der vor allem in Zusammenhang mit VPS gebräuchlich ist.

## Voraussetzungen

- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.

## In der praktischen Anwendung

Die Verbindung zur IPMI kann hauptsächlich über mehrere Methoden hergestellt werden: Java-Applet (empfohlen) oder Browser (Serial over LAN).

- **Java Applet** : ermöglicht die Verwendung eines KVM-Tools (Tastatur, Video, Maus) über eine Java-Konsole für die gewünschten Aktionen. Hier gibt es zwei Möglichkeiten: Tastatur und Maus.

- **Browser (Serial over LAN)** : ermöglicht den Fernzugriff auf die Server-Konsole über einen Webbrowser.

- Eine dritte Methode, die ausschließlich für die neuesten Server verfügbar ist, erlaubt die Verwendung eines KVM-Tools über einen Webbrowser.

Um eine dieser Methoden zu aktivieren, loggen Sie sich in Ihrem [OVHcloud Kundencenter ein]( https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Klicken Sie im Bereich `Bare Metal Cloud`{.action} im linken Menü auf `Dedicated Server`{.action}, wählen Sie Ihren Server aus und klicken Sie dann auf den Tab `IPMI`{.action}.

### Mit dem Java Applet verbinden <a name="applet-java"></a>

Damit das Java Applet funktionieren kann, muss Java auf Ihrem Computer installiert sein. Ist dies noch nicht geschehen, gehen Sie auf die [offizielle Seite](https://www.java.com/en/download/){.external}.

Klicken Sie im `IPMI`{.action}-Bereich Ihres OVHcloud Kundencenters auf `Über ein Java-Applet (KVM)`{.action}:

![IPMI Java initiiert](images/java_ipmi_initiate_2020.png){.thumbnail}

Laden Sie die `kvm.jnlp`-Datei herunter, wenn Sie dazu eingeladen sind, und starten Sie sie:

![IPMI Java Öffnung](images/java_ipmi_activation.png){.thumbnail}

Sie gelangen dann zur Login-Seite. Geben Sie Ihre `Root`-Login-Daten ein, wie bei einer Verbindung über ein Terminal oder ein externes Programm:

![Java IPMI Verbindung](images/java_ipmi_login.png){.thumbnail}

Sie können nun Ihren Server verwalten.

### KVM über Ihren Webbrowser verwenden (nur für die neuesten Server)

Klicken Sie im `IPMI`{.action}-Bereich Ihres OVHcloud Kundencenters auf `Ihren Browser (KVM)`{.action}:

![Browser-IPMI](images/KVM-web-browser01.png){.thumbnail}

Die Aktivierung dauert einige Sekunden. Sie werden per IPMI über die Verfügbarkeit der Verbindung informiert.

![Browser-IPMI](images/KVM-web-browser02.png){.thumbnail}

Klicken Sie `dann auf Zur Konsole (KVM)` gelangen, um die Konsole in Ihrem Browser zu öffnen.

![Browser-IPMI](images/KVM-web-browser03b.png){.thumbnail}

### Verbindung über den Browser Serial over LAN (SoL).

Auch wenn wir Ihnen empfehlen, sich via Java-Applet einzuloggen, können Sie IPMI auch als Serial over LAN (SoL) verwenden. Klicken Sie `Über Ihren Browser (SoL)`{.action} im Bereich `IPMI`{.action} Ihres Kundencenters.

![Aktivierung der IPMI Integritätserklärung](images/sol_ipmi_activation_2020.png){.thumbnail}

> [!warning]
>
> Die Verbindung mit SoL kann mehrere Minuten in Anspruch nehmen, weshalb das Java-Applet empfohlen wird.
>

### IPMI testen und neu starten

Es kann sein, dass die IPMI nicht mehr reagiert. Wenn Sie nicht darauf zugreifen können, können Sie zunächst einen Test durchführen, indem Sie auf `IPMI Test `{.action}  klicken und das Ergebnis der Diagnose anzeigen:

![IPMI-Test](images/ipmi_test_2020.png){.thumbnail}

Wenn alles normal ist, wie in unserem Beispiel, dann haben Sie wahrscheinlich lokale Probleme (Internetverbindung, lokale Station). Wenn die IPMI-Funktion tatsächlich auf Schwierigkeiten stößt, können Sie sie neu starten, indem Sie auf `IPMI-Neustart`{.action} klicken.

![IPMI-Test](images/ipmi_reboot_2020.png){.thumbnail}

Der Neustart des IPMI dauert einige Minuten.

> [!primary]
> Dieser Vorgang beeinträchtigt nicht den Betrieb des Servers.
>

### Installation eines Betriebssystems mit IPMI v1

> [!warning]
> OVHcloud garantiert nicht die Funktionalität der über IPMI installierten Betriebssysteme. Diese Methode sollte nur von einem erfahrenen Server-Administrator erwogen werden.

Um zu beginnen, öffnen Sie [IPMI mit einem Java-Applet](./#applet-java) über Ihr [OVHcloud Kundencenter]( https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Klicken Sie anschließend im Menüauf `Device`{.action}  und wählen Sie im Drop-down-Menü `Redirect ISO`{.action} aus.

![Redirect_ISO](images/RedirectISO.jpg){.thumbnail}

Wählen Sie dann die ISO aus, die Sie im Dateisystem Ihres lokalen Computers verwenden möchten. Wenn Sie Ihr ISO-Zertifikat ausgewählt haben, klicken Sie auf den `Ctrl Alt Del`{.action} in der oberen rechten Ecke des Bildschirms, um den Server neu zu starten. Tippen Sie auf die Taste `F`, um auf die Startoptionen zuzugreifen.

> [!primary]
> Vielleicht müssen Sie die Software-Tastatur verwenden, um die Einträge in IPMI zu speichern. Um darauf zuzugreifen, klicken Sie oben im Fenster auf die `Keyboard`{.action}-Option . Wählen Sie anschließend im Drop-down-Menü `Soft Keyboard` aus und klicken Sie auf `Show`{.action}.
>

Wählen Sie die `UEFI Virtual CDROM 1.00` im Startmenü (Boot) aus, um den Server von der zuvor verbundenen ISO zu starten.

![UEFI_Virt](images/UEFIVirt.jpg){.thumbnail}

Folgen Sie den notwendigen Schritten für die Installation des Betriebssystems. Vergessen Sie nicht, die ISO-Norm aus der Option "Redirect ISO"zu löschen.

### Installation eines Betriebssystems mit IPMI v1

> [!warning]
> OVHcloud garantiert nicht die Funktionalität der über IPMI installierten Betriebssysteme. Diese Methode sollte nur von einem erfahrenen Server-Administrator erwogen werden.
>

Um zu beginnen, öffnen Sie [IPMI mit einem Java-Applet](./#applet-java) über Ihr [OVHcloud Kundencenter]( https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Klicken Sie dann auf `Virtual Media`{.action} und dann auf `Virtual Storage`{.action}.

![Virtual Storage](images/virtual_storage.png){.thumbnail}

Wählen Sie im angezeigten Fenster `ISO File` aus der Drop-down-Liste "Logical Drive Type". Klicken Sie anschließend auf `Open Image`{.action} und navigieren Sie zu Ihrer ISO Datei. Klicken Sie abschließend auf `Plug-in`{.action} und `OK`{.action}.

![ISO_file](images/iso_file.png){.thumbnail}

Um von Ihrer ISO Datei aus zu starten müssen Sie auf das BIOS zugreifen und die Startoptionen ändern. Klicken Sie hierzu auf `Power Control`{.action} und dann auf `Set Power Reset`{.action}.

![Power_Reserver](images/power_reset.png){.thumbnail}

> [!primary]
> Vielleicht müssen Sie die Software-Tastatur verwenden, um die Einträge in IPMI zu speichern. Um darauf zuzugreifen, klicken Sie oben im Fenster auf die Option `Virtual Media` {.action}. Wählen Sie dann `Virtual Keyboard`{.action} im Drop-down-Menü aus.
>

Während des Startvorgangs klicken Sie auf die `SUPPR` Taste, wenn Sie zum BIOS-Interface eingeladen werden. Sie können auch die Taste `F11` drücken und auf das BIOS zugreifen, indem Sie die Option Enter `Setup auswählen`{.action}.

![Startmenü](images/boot_menu.png){.thumbnail}

Gehen Sie im BIOS zum Tab `Boot`{.action} und ersetzen Sie `UEFI Boot Order #1`durch `UEFI USB CD/DVD:UEFI: CDROM virtual ATEN YSOJ`.

![Bios](images/bios.png){.thumbnail}

Klicken Sie auf die Taste `F4`, um Änderungen zu speichern und den Server neu zu starten.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
