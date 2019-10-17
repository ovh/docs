---
title: 'Windows Server Product Key ändern'
excerpt: 'So passen Sie den Product Key Ihres Windows Servers an'
slug: windows-key
section: Verschiedenes
---

**Stand 08.03.2018**

## Einleitung

Bei der Installation eines Windows Server Betriebssystems kann es vorkommen, dass der Product Key (auch Key Management Service oder KMS Key) nicht korrekt gespeichert wird. In diesem Fall wird das System mit dem Key einer 120-Tage-Testversion installiert. Nach Ablauf der Frist kann das Betriebssystem nicht weiter verwendet werden.

**In dieser Anleitung erfahren Sie, wie Sie den Product Key Ihrer Windows Server Umgebung korrigieren.**


## Voraussetzungen

- Sie besitzen einen [Dedicated Server](https://www.ovh.de/dedicated_server/){.external} mit Windows-Betriebssystem.
- Sie verfügen über eine SPLA-Windows-Lizenz oder haben [eine bestellt](https://www.ovh.de/dedicated_server/preise-windows-2014-lizenzen.xml){.external}.
- Sie haben Zugriff auf den Remotedesktop.


## Beschreibung

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
cscript.exe c:\windows\system32\slmgr.vbs -ipk CLEF KMS
```

In der nachstehenden Tabelle finden Sie die verfügbaren KMS Keys für die verschiedenen Betriebssysteme:

|Betriebssystem|KMS Key|
|---|---|
|Windows Server 2008 Standard|TM24T-X9RMF-VWXK6-X8JC9-BFGM2|
|Windows Server 2008 Enterprise|YQGMW-MPWTJ-34KDK-48M3W-X4Q6V|
|Windows Server 2008 Datacenter|7M67G-PC374-GR742-YH8V4-TCBY3|
|Windows Server 2008 R2 Standard|YC6KT-GKW9T-YTKYR-T4X34-R7VHC|
|Windows Server 2008 R2 Enterprise|489J6-VHDMP-X63PK-3K798-CPX3Y|
|Windows Server 2008 R2 Datacenter|74YFP-3QFB3-KQT8W-PMXWJ-7M648|
|Windows Server 2012 Standard|XC9B7-NBPP2-83J2H-RHMBY-92BT4|
|Windows Server 2012 Datacenter|48HP8-DN98B-MYWDG-T2DCC-8W83P|
|Windows Server 2012 R2 Standard|D2N9P-3P6X9-2R39C-7RTCD-MDVJX|
|Windows Server 2012 R2 Datacenter|W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9|
|Windows 8.1 Pro|GCRJD-8NW9H-F2CDX-CCM8D-9D6T9|
|Windows Server 2016 Datacenter|CB7KF-BWN84-R7R2Y-793K2-8XDDG|
|Windows Server 2016 Standard|WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY|
|Windows Server 2016 Essentials|JCKRF-N37P4-C2D82-9YXRT-4M63B|
|Windows Server 2019 Standard|N69G4-B89J2-4G8F4-WWYCC-J464C|
|Windows Server 2019 Datacenter|WMDGN-G9PQG-XVVXX-R3X43-63DFG|

Quelle: [Microsoft MSDN](http://ovh.to/B8XJVVg){.external}.


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

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.