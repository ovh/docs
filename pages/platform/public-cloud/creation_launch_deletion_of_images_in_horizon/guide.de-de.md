---
title: 'Erstellung, Start und Löschung von Abbildern (Images) in Horizon'
excerpt: 'Erstellung, Start und Löschung von Abbildern (Images) in Horizon'
slug: erstellung_start_und_loschung_von_abbildern_images_in_horizon
legacy_guide_number: g1784
section: 'Horizon'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Letzte Aktualisierung am 31.12.2021**

## Ziel 

Sie können über den OpenStack Horizon Manager auch personalisierte Images hinzufügen. Dies ermöglicht Ihnen beispielsweise den Import von Abbildern (Images) Ihrer alten virtuellen Maschinen in die Public Cloud, sofern deren Format kompatibel ist.

In dieser Hilfe werden die Erstellung, der Start und die Löschung von Abbildern (Images) im Horizon Interface, über das Sie Ihre OVHcloud Dienstleistungen verwalten, beschrieben.


## Voraussetzungen

- [Erstellung eines Zugangs zu Horizon](https://docs.ovh.com/de/public-cloud/horizon/)
- Aufruf des Menüs Abbilder im OpenStack Horizon Manager

![public-cloud](images/horizon_menu.png){.thumbnail}

## Verwaltung der Images

- Wenn noch kein Abbild erstellt wurde, wird standardmäßig die Liste der öffentlichen Abbilder angezeigt:

![public-cloud](images/horizon_images.png){.thumbnail}

- Sie können ein Abbild von einer URL starten oder über den Button Abbild erstellen ein Eigenes erstellen. Es öffnet sich dann folgendes Menü:


![public-cloud](images/horizon_create_image.png){.thumbnail}

Hier müssen einige verpflichtende (*) oder optionale Angaben gemacht werden:

- Image name (Name des Images) (*)
- Image description (Beschreibung des Images)
- Image file (Abbilddatei) (Upload von Ihrem lokalen Computer)
- Image format (Formatieren) (*):

|||
|---|---|
|AKI|Amazon Kernel Image|
|AMI|Amazon Machine Image|
|ARI|Amazon Ramdisk Image|
|ISO|ISO 9660|
|QCOW2|QEMU Emulator|
|RAW|Raw Disk Image|
|VDI|VirtualBox format|
|VHD|Microsoft format|
|VMDK|VMware format|


- Architektur: x86_64
- Minimum Festplatte (GB): Falls keine Angabe gemacht wird, wird der Standardwert 0 verwendet.
- Minimum RAM (MB): Falls keine Angabe gemacht wird, wird der Standardwert 0 verwendet.


Es kann auch festgelegt werden, ob das Abbild öffentlich und vor Löschung geschützt sein soll.
Sobald die Erstellung bestätigt wurde, erscheint das Abbild in der Warteschlange für die Erstellung:

![public-cloud](images/horizon_image_saving.png){.thumbnail}

Für detaillierte Informationen klicken Sie auf den Namen des Abbilds:

![public-cloud](images/horizon_image_details.png){.thumbnail}


In der Spalte **Actions** können Sie:

- Ein ausgewähltes Abbild starten, um eine Instanz zu erstellen. Es wird dann folgendes Menü angezeigt:

![public-cloud](images/horizon_launch_image.png){.thumbnail}

- Die Details des Abbilds bearbeiten (nur für von Ihnen erstellte Abbilder)
- Das Abbild löschen (nur für von Ihnen erstellte Abbilder), es wird dann eine Bestätigung angefordert:

![public-cloud](images/horizon_delete_image.png){.thumbnail}


## Weiterführende Informationen
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
