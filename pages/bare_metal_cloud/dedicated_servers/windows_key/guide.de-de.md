---
title: 'Windows Server Product Key ändern'
excerpt: 'So passen Sie den Product Key Ihres Windows Servers an'
updated: 2025-01-06
---

## Ziel

Bei der Installation eines Windows Server Betriebssystems kann es vorkommen, dass der Product Key (auch Key Management Service oder KMS Key) nicht korrekt gespeichert wird. In diesem Fall wird das System mit dem Key einer 120-Tage-Testversion installiert. Nach Ablauf der Frist kann das Betriebssystem nicht weiter verwendet werden.

**In dieser Anleitung erfahren Sie, wie Sie den Product Key Ihrer Windows Server Umgebung ändern.**

## Voraussetzungen

- Sie haben einen OVHcloud [Dedicated Server](/links/bare-metal/os) mit Windows Server oder eine virtuelle Maschine mit Windows Server auf einem [Managed VMware](/links/hosted-private-cloud/vmware-images-licenses) Dienst.
- Sie verfügen über eine SPLA-Windows-Lizenz in Ihrem Kunden-Account.
- Sie haben administrativen Zugriff auf Ihren Server über Remotedesktop-Verbindung.

## In der praktischen Anwendung

### Standard-Product-Key deinstallieren

Wenn Ihr System als Testversion installiert wird, wird ein Standard-Key hinterlegt. Um diesen zu ändern, öffnen Sie den `Ausführen`{.action}-Dialog (Windows-Taste + `R`{.action}):

![Ausführen-Dialog starten](images/executer.png){.thumbnail}

![Ausführen](images/executer2.png){.thumbnail}

Geben Sie in dem Dialogfenster folgenden Befehl ein:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -upk
```

### Den neuen Key installieren

Sie können nun den neuen Key hinzufügen. Öffnen Sie hierzu erneut den `Ausführen`{.action}-Dialog und geben Sie folgenden Befehl ein:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ipk PRODUCT KEY
```

Die Product Keys für unterstützte Versionen von Windows Server finden Sie in der Tabelle auf der [offiziellen Webseite von Microsoft](https://learn.microsoft.com/en-gb/windows-server/get-started/kms-client-activation-keys).

> [!primary]
>
> Core-Versionen verwenden die gleichen KMS Keys wie Nicht-Core-Versionen.
> 

### Verwendung von kms.ovh.net

Um Ihren Key mit unserem automatisierten Aktivierungssystem zu verbinden, geben Sie folgenden Befehl im `Ausführen`{.action}-Dialog ein

```bash
cscript.exe c:\windows\system32\slmgr.vbs -skms kms.ovh.net
```

> [!primary]
>
> Wenn Sie einen VPS oder eine Public Cloud Instanz nutzen, verwenden Sie stattdessen `kms.cloud.ovh.net`.
> 

### Betriebssystem aktivieren

Um Ihr Windows-System zu aktivieren, ist nur noch der folgende Befehl einzugeben:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ato
```

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.
