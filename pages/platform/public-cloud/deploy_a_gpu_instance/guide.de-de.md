---
title: 'GPU Instanzen einrichten'
slug: gpu-intanz-einrichten
excerpt: 'Erfahren Sie hier, wie Sie unter Windows und Linux eine GPU Instanz einrichten'
section: 'Über das OVH Kundencenter'
---

**Letzte Aktualisierung am 06.12.2019**

## Ziel

GPU Instanzen ähneln technisch den Instanzen aus der Produktreihe 2017, verfügen jedoch zusätzlich über eine Grafikkarte (Graphic Processing Unit oder GPU). Die verwendete Technik (*pci_passthrough*) ermöglicht es dem Betriebssystem der Instanz, die GPU genau wie eine physische Maschine zu steuern.

Bei den eingesetzten GPUs handelt es sich um NVIDIA Tesla V100. 

> [!warning]
>
> Derzeit sind GPU Instanzen nur in den Rechenzentren GRA3, GRA5, GRA7 und BHS3 verfügbar. Möglicherweise müssen Sie ein neues Projekt erstellen und die Reihe 2017 auswählen. [Mehr erfahren](https://docs.ovh.com/gb/en/public-cloud/faq-how-to-understand-the-new-flavor-naming-rules-for-the-2017-range) (EN).
> 

**Diese Anleitung erläutert, wie Sie eine GPU Instanz unter Linux oder Windows einrichten.**

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud) mit Zugriff auf die Regionen, in denen GPUs verfügbar sind (GRA3, GRA5, GRA7 und BHS3) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).


## In der praktischen Anwendung

Nachfolgend finden Sie die Informationen, die zum Bereitstellen einer GPU Instanz unter Linux oder Windows erforderlich sind.
Beachten Sie bitte, dass Sie das Instanz-Betriebssystem nicht ändern können, um von Linux auf Windows zu wechseln oder umgekehrt. Stellen Sie daher sicher, dass die Instanz in der Ausgangskonfiguration mit dem richtigen Betriebssystem erstellt wird.


### Unter Linux

Alle von uns angebotenen Images können auf einer GPU Instanz verwendet werden.

> [!primary]
>
> Wenn Sie mit dem manuellen Kompilieren eines Kernelmoduls nicht vertraut sind, empfehlen wir die Verwendung einer Distribution, die offiziell von NVIDIA unterstützt wird und für die _turnkey_ Treiber angeboten werden: <https://developer.nvidia.com/cuda-downloads>.
> 

Wenn Sie sich im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) angemeldet haben, klicken Sie im Dashboard Ihres Public Cloud Projekts auf `Instanz erstellen`{.action} und wählen Sie eine GPU Instanz:

![public-cloud](images/gpu.png){.thumbnail}

Wählen Sie die gewünschte Unix-Distribution aus:

![public-cloud](images/linuxchoice.png){.thumbnail}

Die Instanz wird einige Sekunden später gestartet. Sie können sich dann anmelden und nach der Grafikkarte suchen: 

```ssh
lspci | grep -i nvidia
00:05.0 3D-Controller: NVIDIA Corporation GV100GL [Tesla V100 PCIe 16GB] (rev a1)
```

Die Grafikkarte ist vorhanden, kann aber noch nicht verwendet werden. Dazu müssen Sie zuerst den NVIDIA-Treiber installieren. Die passenden Pakete finden Sie unter diesem Link: [Liste der verfügbaren Linux-Pakete](http://developer.download.nvidia.com/compute/cuda/repos/).

Die folgenden Befehle sind noch erforderlich:

```sh
wget URL_of_packet_to_download
sudo dpkg -i cuda-repo-XXXX-XXXXXX
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install cuda
sudo reboot
```

> [!primary]
>
> Der Linux-Befehl kann je nach Version variieren. Im Zweifelsfall lesen Sie bitte die offizielle Dokumentation für Ihre Linux-Version.
> 


Nach dem Neustart der Instanz wird die Grafikkarte im NVIDIA-Dienstprogramm angezeigt:

```sh
nvidia-smi
Fri Dec  6 12:32:25 2019       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 418.67       Driver Version: 418.67       CUDA Version: 10.1     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  Tesla V100-PCIE...  On   | 00000000:00:05.0 Off |                    0 |
| N/A   26C    P0    35W / 250W |      0MiB / 16130MiB |      5%      Default |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID   Type   Process name                             Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

Die GPU Instanz ist jetzt voll funktionsfähig und verwendbar.


### Unter Windows

Es gibt Inkompatibilitäten zwischen dem NVIDIA-Treiber und der Visualisierungslösung *KVM/pci_passthrough*. **Standard-Windows-Images funktionieren nicht.**
Aus diesem Grund bieten wir spezielle Images an, die auf einem virtuellen UEFI-BIOS basieren und dem Treiber eine ordnungsgemäße Funktion ermöglichen (dies gilt nur für G1-, G2- und G3-Instanzen; Reihe 2017 und frühere).

Wenn Sie sich im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) angemeldet haben, klicken Sie im Dashboard Ihres Public Cloud Projekts auf `Instanz erstellen`{.action} und wählen Sie eine GPU Instanz:

![public-cloud](images/gpu.png){.thumbnail}

Wählen Sie dann die gewünschte Windows-Distribution aus: 

![public-cloud](images/oschoice.png){.thumbnail}

Sobald Ihre GPU Instanz gestartet wurde, müssen Sie den NVIDIA-Treiber von der [offiziellen Webseite](https://www.nvidia.com/Download/index.aspx) installieren.

Starten Sie eine Instanz mit einem der verfügbaren GPU-Typ (t1-45, t1-90, t1-180 ...). Dieser Vorgang sollte nur wenige Minuten dauern.

Anschließend müssen Sie nur noch den erforderlichen Treiber installieren, der dann in den Windows-Einstellungen angezeigt wird:

![public-cloud](images/driverson.png){.thumbnail}

![public-cloud](images/devicemanager.png){.thumbnail}


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en](https://community.ovh.com/en).