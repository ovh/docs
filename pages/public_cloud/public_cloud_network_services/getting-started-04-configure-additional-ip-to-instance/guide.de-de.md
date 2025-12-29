---
title: Additional IP konfigurieren
excerpt: "Erfahren Sie hier, wie Sie Additional IPs in Ihre Instanzen einbinden"
updated: 2025-12-17
---

> [!primary]
> Diese Anleitung befasst sich mit der Konfiguration von Additional IPv4-Adressen auf einer öffentlichen Schnittstelle. Sie können auch IPv6-Adressen auf Ihren Public Cloud Instanzen konfigurieren, indem Sie [diese Anleitung](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6) verwenden.
>
> Beachten Sie, dass Additional IPs auch in einem vRack (privates Netzwerk) konfiguriert werden können, was die Anbindung einer breiten Palette von OVHcloud Diensten ermöglicht und somit eine größere Flexibilität bietet.
>
> Weitere Informationen zum Konfigurieren von Additional IPs in einem vRack zur Verwendung mit Public Cloud Instanzen finden Sie in folgenden Anleitungen:
>
> - [IP-Block in einem vRack auf einer Public Cloud Instanz konfigurieren (EN)](/pages/public_cloud/public_cloud_network_services/configuration-06-configure-ip-block-vrack-to-instance).
> - [IPv6-Block in einem vRack konfigurieren (EN)](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack).
>

## Ziel

Es kann nowendig werden, Additional IPs auf Ihren Instanzen konfigurieren, zum Beispiel, wenn Sie eine große Anzahl an Websites oder internationale Projekte hosten. Mit den Additional IPs von OVHcloud können Sie mehrere IP-Adressen einem einzigen Netzwerkinterface zuweisen.

**In dieser Anleitung erfahren Sie, wie Sie Additional IPs zu Ihrer Netzwerkkonfiguration hinzufügen.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Dienste haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen [spezialisierten Dienstleister](/links/partner) zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Dienstes haben. Sie können sich auch jederzeit an unsere [Community](/links/community) wenden, um sich mit anderen Benutzern auszutauschen.

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](/links/public-cloud/public-cloud) in Ihrem OVHcloud Account.
- Sie verfügen über eine [Additional IP](/links/bare-metal/ip)-Adresse oder einen Additional IP-Block.
- Sie haben administrativen Zugriff (sudo) auf Ihre Instanz über SSH oder GUI. 
- Sie haben Grundkenntnisse in Administration und Netzwerkkonfiguration.

> [!warning]
> Diese Funktion ist derzeit für Metal Instanzen nicht verfügbar.
>

## In der praktischen Anwendung

Die folgenden Abschnitte enthalten die Konfigurationen für die am häufigsten verwendeten Distributionen/Betriebssysteme. Der erste Schritt ist immer die Anmeldung auf Ihrer Instanz über SSH oder einen GUI-Login (VNC für eine Windows-Instanz). Die folgenden Beispiele setzen voraus, dass Sie als Benutzer mit erhöhten Berechtigungen (Administrator/sudo) angemeldet sind.

> [!primary]
>
Bitte beachten Sie, dass sich bei unterschiedlichen Distributionen die korrekte Vorgehensweise zur Konfiguration Ihrer Netzwerkschnittstelle sowie die Dateinamen geändert haben können. Wir empfehlen Ihnen, bei Problemen die Dokumentationen und Wissensressourcen der jeweiligen Betriebssystemversionen zu konsultieren. 
>

**Bitte beachten Sie die Terminologie, die in den nachfolgenden Codebeispielen und Anweisungen dieser Anleitung verwendet wird:**

|Bezeichnung|Beschreibung|Beispiele|
|---|---|---|
|ADDITIONAL_IP|Ihrem Dienst zugewiesene Additional IP|169.254.10.254|
|NETWORK_INTERFACE|Name des Netzwerkinterfaces|*eth*, *ens3*|
|ID|ID der Additional IP, beginnend mit *0* (abhängig von der Anzahl der zu konfigurierenden zusätzlichen IP-Adressen)|*0*, *1*|

> [!primary]
>
> Für die Konfiguration einer Additional IP auf einer Public Cloud Instanz ist kein Gateway oder Subnetzmaske erforderlich.
>

> [!success]
> Wählen Sie den Tab für Ihr Betriebssystem.

> [!tabs]
> **Debian 11**
>> Debian 11
>>
>> **Schritt 1: Automatische Netzwerkkonfiguration deaktivieren**
>>
>> Öffnen Sie diesen Dateipfad mit einem Texteditor:
>>
>> ```bash
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> Fügen Sie die folgende Zeile ein, speichern Sie und schließen Sie dann den Editor.
>>
>> ```bash
>> network: {config: disabled}
>> ```
>>
>> Die Erstellung dieser Konfigurationsdatei verhindert die automatische Ausführung von Änderungen an der Konfiguration Ihres Netzwerks.
>>
>> **Schritt 2: Netzwerkkonfigurationsdatei bearbeiten**
>>
>> Um den Namen Ihres Netzwerkinterfaces zu überprüfen, verwenden Sie folgenden Befehl:
>>
>> ```bash
>> ip a
>> ```
>>
>> Öffnen Sie die Netzwerkkonfigurationsdatei zur Bearbeitung:
>>
>> ```bash
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> Fügen Sie folgende Zeilen hinzu:
>>
>> ```bash
>> auto NETWORK_INTERFACE:ID
>> iface NETWORK_INTERFACE:ID inet static
>> address ADDITIONAL_IP
>> netmask 255.255.255.255
>> ```
>>
>> **Schritt 3: Interface neu starten**
>>
>> Wenden Sie die Änderungen mit folgendem Befehl an:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
> **Debian 12+ und Ubuntu 22.04+**
>> Debian 12, Ubuntu 22.04 und spätere Versionen
>>
>> Die Konfigurationsdatei für Ihre Additional IPs befindet sich in `/etc/netplan/`. 
>> In diesem Beispiel heißt sie "50-cloud-init.yaml". Bevor Sie Änderungen vornehmen, überprüfen Sie am besten den tatsächlichen Dateinamen in diesem Ordner. Jede Additional IP benötigt in der Datei eine eigene Zeile.
>>
>> **Schritt 1: Automatische Netzwerkkonfiguration deaktivieren**
>>
>> Öffnen Sie diesen Dateipfad mit einem Texteditor:
>>
>> ```bash
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> Fügen Sie die folgende Zeile ein, speichern Sie und schließen Sie dann den Editor.
>>
>> ```bash
>> network: {config: disabled}
>> ```
>>
>> Die Erstellung dieser Konfigurationsdatei verhindert die automatische Ausführung von Änderungen an der Konfiguration Ihres Netzwerks.
>>
>> **Schritt 2: Konfigurationsdatei bearbeiten**
>>
>> Um den Namen Ihres Netzwerkinterfaces zu überprüfen, verwenden Sie folgenden Befehl:
>>
>> ```bash
>> ip a
>> ```
>>
>> Öffnen Sie die Netzwerkkonfigurationsdatei zur Bearbeitung:
>>
>> ```bash
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> Ändern Sie nicht die vorhandenen Zeilen in der Datei; fügen Sie Ihre Additional IP wie folgt hinzu:
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         NETWORK_INTERFACE:
>>             dhcp4: true
>>             match:
>>                 macaddress: fa:xx:xx:xx:xx:63
>>             set-name: NETWORK_INTERFACE
>>             addresses:
>>             - ADDITIONAL_IP/32
>> ```
>>
>> > [!warning]
>> >
>> > Es ist wichtig, dass die Zeilenausrichtung jedes Elements dieser Datei, wie im Beispiel dargestellt, eingehalten wird. Verwenden Sie nicht die Tabulationstaste, um den Abstand zu erzeugen.
>> >
>>
>> Speichern und schließen Sie die Datei.
>>
>> **Schritt 3: Neue Netzwerkkonfiguration anwenden**
>>
>> Sie können Ihre Konfiguration mit folgendem Befehl testen:
>>
>> ```bash
>> sudo netplan try
>> ```
>>
>> Ist die Änderung korrekt, verwenden Sie folgenden Befehl, um sie anzuwenden:
>>
>> ```bash
>> sudo netplan apply
>> ```
>>
>> Wiederholen Sie diesen Vorgang für jede Additional IP.
>>
> **AlmaLinux (8/9) / Rocky Linux (8/9) / CloudLinux (8/9)**
>> AlmaLinux (8/9) / Rocky Linux (8/9) / CloudLinux (8/9)
>>
>> **Schritt 1: Netzwerkkonfigurationsdatei bearbeiten**
>>
>> Um den Namen Ihres Netzwerkinterfaces zu überprüfen, verwenden Sie folgenden Befehl:
>>
>> ```bash
>> ip a
>> ```
>>
>> Öffnen Sie die Netzwerkkonfigurationsdatei zur Bearbeitung:
>>
>> ```bash
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
>> ```
>>
>> Fügen Sie folgende Zeilen hinzu:
>>
>> ```bash
>> DEVICE=NETWORK_INTERFACE:ID
>> BOOTPROTO=static
>> IPADDR=ADDITIONAL_IP
>> NETMASK=255.255.255.255
>> BROADCAST=ADDITIONAL_IP
>> ONBOOT=yes
>> ```
>>
>> **Schritt 2: Interface neu starten**
>>
>> Wenden Sie die Änderungen mit folgendem Befehl an:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
> **Fedora / AlmaLinux (10) / Rocky Linux (10)**
>> Fedora, AlmaLinux 10 & Rocky Linux 10
>>
>> Diese Systeme verwenden Schlüsseldateien. NetworkManager hat zuvor Netzwerkprofile im ifcfg-Format in diesem Verzeichnis gespeichert: `/etc/sysconfig/network-scripts/`. Das ifcfg-Format ist jedoch veraltet. Standardmäßig erstellt NetworkManager keine neuen Profile in diesem Format mehr. Die Konfigurationsdatei befindet sich nun in `/etc/NetworkManager/system-connections/`.
>>
>> **Schritt 1: Konfigurationsdatei bearbeiten**
>>
>> > [!primary]
>> > Bitte beachten Sie, dass sich der Name der Netzwerkdatei in unserem Beispiel von Ihrem Namen unterscheiden kann. Passen Sie die Befehle an Ihren Dateinamen an.
>> >
>>
>> ```bash
>> sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
>> ```
>>
>> Ändern Sie die vorhandenen Zeilen in der Konfigurationsdatei nicht, fügen Sie Ihre Additional IP wie folgt hinzu und ersetzen Sie `ADDITIONAL_IP/32` durch Ihre eigenen Werte:
>>
>> ```console
>> [IPv4]
>> method=auto
>> may-fail=false
>> address1=ADDITIONAL_IP/32
>> ```
>>
>> Wenn Sie zwei Additional IPs konfigurieren müssen, sollte die Konfiguration wie folgt aussehen:
>>
>> ```console
>> [IPv4]
>> method=auto
>> may-fail=false
>> address1=ADDITIONAL_IP1/32
>> address2=ADDITIONAL_IP2/32
>> ```
>>
>> **Schritt 2: Schnittstelle neu starten**
>>
>> Sie müssen jetzt Ihr Interface neu starten:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Plesk**
>> Plesk
>>
>> **Schritt 1: Auf die IP-Verwaltung von Plesk zugreifen**
>>
>> Wählen Sie im Plesk Konfigurationspanel `Tools & Settings`{.action} im linken Menü aus.
>>
>> ![Zugang zur Verwaltung der IP-Adressen](images/pleskip1.png){.thumbnail}
>>
>> Klicken Sie auf `IP Addresses`{.action} unter **Tools & Resources**.
>>
>> **Schritt 2: Die zusätzliche IP-Information hinzufügen**
>>
>> Klicken Sie in diesem Abschnitt auf den Button `Add IP Address`{.action}.
>>
>> ![IP-Informationen hinzufügen](images/pleskip2-2.png){.thumbnail}
>>
>> Geben Sie Ihre Additional IP in der Form `xxx.xxx.xxx.xxx/32` in das Feld "IP address and subnet mask" ein und klicken Sie dann auf `OK`{.action}.
>>
>> ![IP-Informationen hinzufügen](images/pleskip3-3.png){.thumbnail}
>>
>> **Schritt 3: Aktuelle IP-Konfiguration überprüfen**
>>
>> Überprüfen Sie im Bereich "IP Addresses" ob die Additional IP korrekt hinzugefügt wurde.
>>
>> ![aktuelle IP-Konfiguration](images/pleskip4-4.png){.thumbnail}
>>
> **Windows Server**
>> Windows Server
>>
>> Öffnen Sie im Public Cloud Bereich im linken Menü `Instances`{.action} und klicken Sie dann auf den Namen der betreffenden Instanz. Wechseln Sie zum Tab `VNC Konsole`{.action}.
>>
>> **Schritt 1: Netzwerkkonfiguration überprüfen**
>>
>> Klicken Sie mit der rechten Maustaste auf das `Startmenü`{.action} und öffnen Sie `Ausführen`{.action}.
>>
>> Geben Sie `cmd` ein und klicken Sie auf `OK`{.action}, um die Kommandozeilenanwendung zu öffnen.
>>
>> ![cmdprompt](images/pci_win07.png){.thumbnail}
>>
>> Um die aktuelle IP-Konfiguration anzuzeigen, geben Sie `ipconfig` in der Eingabeaufforderung ein.
>>
>> ![IP-Konfiguration überprüfen](images/image1-1.png){.thumbnail}
>>
>> **Schritt 2: IPv4 Eigenschaften ändern**
>>
>> Die IP-Eigenschaften müssen nun zu einer statischen Konfiguration geändert werden.
>>
>> Öffnen Sie die Adaptereinstellungen in der Windows-Systemsteuerung und öffnen Sie die `Eigenschaften`{.action} von `Internet Protocol Version 4 (TCP/IPv4)`{.action}.
>>
>> ![IP-Konfiguration ändern](images/image2.png){.thumbnail}
>>
>> Wählen Sie in den IPv4-Eigenschaften `Folgende IP-Adresse verwenden`{.action}. Geben Sie die IP-Adresse ein, die Sie im ersten Schritt ausgelesen haben, und klicken Sie dann auf `Erweitert`{.action}.
>>
>> **Schritt 3: Die Additional IP in "Erweiterte TCP/IP Einstellungen" hinzufügen**
>>
>> Klicken Sie im neuen Fenster auf `Hinzufügen...`{.action} unter "IP-Adressen". Geben Sie Ihre Additional IP und die Subnetzmaske (255.255.255.255) ein.
>>
>> ![Konfiguration](images/image4-4.png){.thumbnail}
>>
>> Bestätigen Sie, indem Sie auf `Hinzufügen`{.action} klicken.
>>
>> ![Konfiguration Additional IP](images/image5-5.png){.thumbnail}
>>
>> **Schritt 4: Netzwerk-Interface neu starten**
>>
>> Wieder in der Systemsteuerung (`Netzwerkverbindungen`{.action}), klicken Sie mit der rechten Maustaste auf Ihr Netzwerkinterface und wählen Sie `Deaktivieren`{.action}.
>>
>> ![Netzwerkdeaktivierung](images/image6.png){.thumbnail}
>>
>> Um es neu zu starten klicken Sie mit der rechten Maustaste darauf und wählen Sie `Aktivieren`{.action}.
>>
>> ![Netzwerkaktivierung](images/image7.png){.thumbnail}
>>
>> **Schritt 5: Überprüfung der neuen Netzwerkkonfiguration**
>>
>> Öffnen Sie die Eingabeaufforderung (cmd) und geben Sie `ipconfig` ein. Die Konfiguration sollte nun die neue Additional IP enthalten.
>>
>> ![Aktuelle Netzwerkkonfiguration überprüfen](images/image8-8.png){.thumbnail}
>>

### Diagnose

Starten Sie zunächst Ihre Instanz neu, über das Betriebssystem oder im [OVHcloud Kundencenter](/links/manager). Wenn Sie dann immer noch keine Verbindung zwischen dem öffentlichen Netzwerk und Ihrer Additional IP-Adresse herstellen können und ein Netzwerkproblem vermuten, ist es notwendig, die Instanz im [Rescue-Modus neu zu starten](/pages/public_cloud/compute/put_an_instance_in_rescue_mode). Anschließend können Sie die Additional IP direkt auf der Instanz konfigurieren.

Wenn Sie über SSH im Rescue-Modus eingeloggt sind, geben Sie folgenden Befehl ein:

```bash
ifconfig ens3:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Um die Verbindung zu testen senden Sie einfach von außerhalb einen Ping an Ihre Additional IP. Wenn sie im Rescue-Modus antwortet, bedeutet dies wahrscheinlich, dass ein Konfigurationsfehler vorliegt. Wenn die IP jedoch noch nach wie vor nicht funktioniert, informieren Sie bitte unsere Support-Teams, indem Sie ein Support-Ticket über Ihr [OVHcloud Kundencenter](/links/manager) erstellen.

## Weiterführende Informationen

[Additional IP importieren](/pages/public_cloud/public_cloud_network_services/additional-ip-import)

[Umzug einer Additional IP](/pages/public_cloud/public_cloud_network_services/additional-ip-migrate)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.
