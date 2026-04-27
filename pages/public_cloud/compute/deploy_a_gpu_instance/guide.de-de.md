---
title: 'GPU Instanzen einrichten'
excerpt: 'Erfahren Sie hier, wie Sie unter Windows und Linux eine GPU Instanz einrichten'
updated: 2026-04-07
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die GPU Instanzen sind den Instanzen aus der Produktreihe 2017 technisch ähnlich, verfügen jedoch zusätzlich über eine Grafikkarte (Graphic Processing Unit oder GPU). Die verwendete Technik (*pci_passthrough*) ermöglicht es dem Betriebssystem der Instanz, die GPU genau wie auf einer physischen Maschine zu steuern.

> [!warning]
>
> Derzeit sind die meisten unserer alten GPU-Instanzen (Tesla V100 and V100s) nur in den Regionen GRA7, GRA9, GRA11 und BHS5 verfügbar. Neuere Modelle (A100, H100, L4 and L40s) sind derzeit nur in der Region GRA11 verfügbar.
> 

**Diese Anleitung erläutert, wie Sie eine GPU Instanz unter Linux oder Windows einrichten.**

## Voraussetzungen

- Ein Public Cloud Projekt mit Zugriff auf die Regionen, in denen die meisten GPUs verfügbar sind (GRA7, GRA9, GRA11 und BHS5).
- [Ein SSH-Schlüssel](/pages/public_cloud/compute/creating-ssh-keys-pci) für die Bereitstellung einer Linux-GPU-Instanz.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Public Cloud Projekte](/links/control-panel/publiccloud-projects)
- **Navigationspfad:** `Public Cloud`{.action} > Wählen Sie Ihr Projekt aus

---
<!-- CP-NAV-END:publiccloud-projects -->

## In der praktischen Anwendung

Nachfolgend finden Sie die Informationen zur Bereitstellung einer GPU-Instanz unter Linux oder Windows.

Klicken Sie auf der Seite `Schnellzugriff`{.action} auf `Instanz erstellen`{.action}. Wählen Sie anschließend ein kompatibles GPU-Instanzmodell aus, das den **Cloud GPU**-Instanzen entspricht, um von Ressourcen zu profitieren, die für grafische oder rechenintensive Workloads geeignet sind.

Folgen Sie anschließend den verbleibenden Schritten, wie in [dieser Anleitung](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) beschrieben. Dieser Vorgang kann einige Minuten dauern.

> [!tabs]
> Unter Linux
>> Alle von uns angebotenen Images können auf einer GPU-Instanz verwendet werden.
>>
>> Öffnen Sie beim Schritt zur Image-Auswahl den Tab `Unix-Distributionen`{.action} und wählen Sie ein UNIX-Image, das Ihren Anforderungen entspricht.
>>
>> > [!primary]
>> >
>> > Wenn Sie mit dem manuellen Kompilieren eines Kernelmoduls nicht vertraut sind, empfehlen wir die Verwendung einer Distribution, die offiziell von NVIDIA unterstützt wird und für die _turnkey_ Treiber angeboten werden: <https://developer.nvidia.com/cuda-downloads>.
>> >
>>
>> Nach der Lieferung der Instanz können Sie sich anmelden und nach der Grafikkarte suchen:
>>
>> ```bash
>> lspci | grep -i nvidia
>> 00:05.0 VGA compatible controller: NVIDIA Corporation Device 1c03 (rev a1)
>> 00:06.0 Audio device: NVIDIA Corporation Device 10f1 (rev a1)
>> ```
>>
>> Die Grafikkarte ist vorhanden, kann aber noch nicht verwendet werden. Dazu müssen Sie zuerst den NVIDIA-Treiber installieren. Die passenden Pakete finden Sie unter diesem Link: [Liste der verfügbaren Linux-Pakete](https://developer.download.nvidia.com/compute/cuda/repos/).
>>
>> Die folgenden Befehle sind noch erforderlich:
>>
>> ```sh
>> wget URL_of_packet_to_download
>> sudo dpkg -i cuda-repo-XXXX-XXXXXX
>> sudo apt-get update
>> sudo apt-get upgrade
>> sudo apt-get install cuda
>> sudo apt-get install -y cuda-drivers
>> sudo apt-get install linux-headers-$(uname -r)
>> sudo reboot
>> ```
>>
>> > [!primary]
>> >
>> > Der Linux-Befehl kann je nach Version variieren. Im Zweifelsfall lesen Sie bitte die offizielle Dokumentation für Ihre Linux-Version.
>> >
>>
>> Nach dem Neustart der Instanz wird die Grafikkarte im NVIDIA-Dienstprogramm angezeigt:
>>
>> ```sh
>> nvidia-smi
>> Wed Apr 26 13:05:25 2017
>> +-----------------------------------------------------------------------------+
>> | NVIDIA-SMI 375.51                 Driver Version: 375.51                    |
>> |-------------------------------+----------------------+----------------------+
>> | GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
>> | Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
>> |===============================+======================+======================|
>> |   0  GeForce GTX 106...  Off  | 0000:00:05.0     Off |                  N/A |
>> |  0%   22C    P0    26W / 120W |      0MiB /  6072MiB |      0%      Default |
>> +-------------------------------+----------------------+----------------------+
>>
>> +-----------------------------------------------------------------------------+
>> | Processes:                                                       GPU Memory |
>> |  GPU       PID  Type  Process name                               Usage      |
>> |=============================================================================|
>> |  No running processes found                                                 |
>> +-----------------------------------------------------------------------------+
>> ```
>>
>> Die GPU-Instanz ist jetzt voll funktionsfähig und verwendbar.
>>
> Unter Windows
>> Es gibt Inkompatibilitäten zwischen dem NVIDIA-Treiber und der Visualisierungslösung *KVM/pci_passthrough*. **Standard-Windows-Images funktionieren nicht.**
>>
>> Wir stellen spezielle Images auf Basis eines virtuellen **UEFI**-BIOS zur Verfügung, die den ordnungsgemäßen Betrieb des Treibers ermöglichen.
>>
>> > [!warning]
>> >
>> > Sie haben die Möglichkeit, diese Images auf einigen ausgewählten Modellen (T1-45, T1-90, T1-180, T2-45, T2-90, T2-180) zu installieren. Je nach ausgewählter Region sind diese speziellen Images möglicherweise nicht verfügbar.
>> >
>>
>> Öffnen Sie beim Schritt zur Image-Auswahl den Tab `Windows-Distributionen`{.action} und wählen Sie ein Windows-Image, das mit dem gewählten Instanzmodell kompatibel ist.
>>
>> > [!warning]
>> >
>> > Wir können nicht garantieren, dass die Lösung mit allen zukünftigen Versionen des NVIDIA-Treibers funktioniert.
>> >
>> > Vor einem Update des NVIDIA-Treibers wird dringend empfohlen, einen Snapshot Ihrer Instanz zu erstellen, damit Sie falls nötig zu einem vorherigen Zustand zurückkehren können.
>> >
>>
>> **Verbindung zu einer Windows-Instanz**
>>
>> Nachdem die Instanz fertig erstellt ist, muss die Windows-Installation abgeschlossen werden (_sysprep_). Klicken Sie hierzu auf `...`{.action} und dann auf `Details der Instanz`{.action}. Wechseln Sie zum Tab `VNC-Konsole`{.action}. Die Konsole sollte bereits das Post-Installationsfenster anzeigen.
>>
>> Legen Sie im ersten Schritt Ihre Standorteinstellungen fest, indem Sie eine Region, eine Sprache sowie das Tastaturlayout auswählen. Klicken Sie auf `Weiter`{.action}, um fortzufahren.
>>
>> Im zweiten Schritt wird der native “Administrator”-Account eingerichtet. Geben Sie zweimal Ihre Passphrase ein und klicken Sie auf `Beenden`{.action}, um den Installationsvorgang abzuschließen. Verwenden Sie das Augen-Symbol, um zu überprüfen, dass alle im Feld eingegebenen Zeichen dem Layout Ihrer Tastatur entsprechen.
>>
>> Die Instanz wird neu gestartet und Sie können sich mithilfe dieser Login-Daten über einen Remote-Desktop-Client einloggen.
>>
>> **Über Windows**
>>
>> Verwenden Sie falls nötig die Windows-Suche und öffnen Sie den Windows-Client für Remote-Desktopverbindungen.
>>
>> Geben Sie die IPv4-Adresse Ihrer Instanz sowie “Administrator” als Benutzer und dann Ihre Passphrase ein. Normalerweise erscheint nun eine Warnungsmeldung, die Sie auffordert, die Verbindung aufgrund eines unbekannten Zertifikats zu bestätigen. Klicken Sie auf `Ja`{.action}, um sich mit Ihrer Instanz zu verbinden.
>>
>> > [!primary]
>> >
>> > Sollten bei diesem Vorgang Probleme auftreten, stellen Sie sicher, dass Remoteverbindungen (RDP) auf Ihrem Gerät erlaubt sind, indem Sie Ihre Systemeinstellungen, Firewall-Regeln und mögliche Netzwerkeinschränkungen kontrollieren.
>> >
>>
>> Wenn Sie mit Ihrer Instanz verbunden sind, müssen Sie den NVIDIA-Treiber von der [offiziellen Webseite](https://www.nvidia.com/Download/index.aspx) installieren.
>>
>> Nach der Installation wird der Treiber im **Geräte-Manager > Grafikkarten** angezeigt, sodass Sie überprüfen können, ob die GPU-Karte korrekt erkannt und betriebsbereit ist. Sie können Ihre Instanz dann für Anwendungen nutzen, die GPU-Beschleunigung erfordern.
>>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
