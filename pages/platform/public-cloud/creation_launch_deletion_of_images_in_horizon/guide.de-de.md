---
title: 'Erstellung, Start und Löschung von Abbildern (Images) in Horizon'
excerpt: 'Erstellung, Start und Löschung von Abbildern (Images) in Horizon'
slug: erstellung_start_und_loschung_von_abbildern_images_in_horizon
legacy_guide_number: g1784
---


## 
Sie können über den OpenStack Horizon Manager auch personalisierte Images hinzufügen. Dies ermöglicht Ihnen beispielsweise den Import von Abbildern (Images) Ihrer alten virtuellen Maschinen in die Public Cloud, sofern deren Format kompatibel ist.

In dieser Hilfe werden die Erstellung, der Start und die Löschung von Abbildern (Images) im Horizon Interface, über das Sie Ihre OVH Cloud Dienstleistungen verwalten, beschrieben.


## Voraussetzungen

- [Erstellung eines Zugangs zu Horizon]({legacy}1773)
- Aufruf des Menüs Abbilder im OpenStack Horizon Manager



![](images/img_2661.jpg){.thumbnail}


## 

- Wenn noch kein Abbild erstellt wurde, wird standardmäßig die Liste der öffentlichen Abbilder angezeigt:



![](images/img_2662.jpg){.thumbnail}

- Sie können ein Abbild von einer URL starten oder über den Button Abbild erstellen ein Eigenes erstellen. Es öffnet sich dann folgendes Menü:



![](images/img_2720.jpg){.thumbnail}

## Hier müssen einige verpflichtende (*) oder optionale Angaben gemacht werden:

- Name (*)
- Beschreibung
- Abbilddatei (Upload von Ihrem lokalen Computer)
- Formatieren (*):

|AKI|Amazon Kernel Image|
|AMI|Amazon Machine Image|
|ARI|Amazon Ramdisk Image|
|ISO|ISO 9660|
|QCOW2|QEMU Emulator|
|RAW|
|VDI|
|VHD|
|VMDK|



- Architektur: x86_64
- Minimum Festplatte (GB): Falls keine Angabe gemacht wird, wird der Standardwert 0 verwendet.
- Minimum RAM (MB): Falls keine Angabe gemacht wird, wird der Standardwert 0 verwendet.


Es kann auch festgelegt werden, ob das Abbild öffentlich und vor Löschung geschützt sein soll.
Sobald die Erstellung bestätigt wurde, erscheint das Abbild in der Warteschlange für die Erstellung:

![](images/img_2664.jpg){.thumbnail}
Für detaillierte Informationen klicken Sie auf den Namen des Abbilds:

![](images/img_2665.jpg){.thumbnail}
In der Spalte Aktionen können Sie:


- Ein ausgewähltes Abbild starten, um eine Instanz zu erstellen. Es wird dann folgendes Menü angezeigt:



![](images/img_2666.jpg){.thumbnail}

- Die Details des Abbilds bearbeiten (nur für von Ihnen erstellte Abbilder)
- Das Abbild löschen (nur für von Ihnen erstellte Abbilder), es wird dann eine Bestätigung angefordert:



![](images/img_2667.jpg){.thumbnail}


## 
[Zurück zum Index der Cloud Hilfen]({legacy}1785)

