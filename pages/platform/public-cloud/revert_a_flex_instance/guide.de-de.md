---
title: Revertieren einer Flex-Instanz
slug: revertieren-einer-flex-instanz
excerpt: Erfahren Sie, wie Sie eine Flex-Instanz über die OpenStack Horizon-Schnittstelle zurücksetzen können.
section: Horizon
Order: 7
---

**Letzte Aktualisierung am 10.12.2021**

## Ziel

Eine Flex-Instanz ist eine Single-Size-Disk (50GB), die einen schnelleren Prozess für Snapshots bietet. Es ermöglicht die Größe auf ein höheres oder niedrigeres Modell mit festem Speicherplatz, während klassische Modelle nur auf ein höheres Modell skaliert werden können.</br> Während sich Ihre Infrastruktur ständig weiterentwickelt, müssen Sie unter Umständen den Speicherplatz Ihrer Instanz erhöhen. In diesem Fall müssen Sie Ihre Flex-Instanz auf ein klassisches Modell "zurücksetzen". Diese Aktion kann nur über die Horizon-Schnittstelle durchgeführt werden.

</br>**Diese Anleitung zeigt Ihnen, wie Sie Ihre Flex-Instanz über die OpenStack Horizon-Oberfläche zurücksetzen und in der Größe verändern können.**

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#schritt-3-instanz-erstellen) mit der Flex-Option
- Sie haben Zugriff auf das [Horizon Interface](https://docs.ovh.com/de/public-cloud/erstellung_eines_zugangs_zu_horizon/)

## In der praktischen Anwendung

Loggen Sie sich ins [Horizon-Interface](https://horizon.cloud.ovh.net/auth/login/) ein wählen Sie oben links die korrekte Region aus.

![Region selection](images/region2021.png){.thumbnail}

Klicken Sie links im Menü auf `Compute`{.action} und wählen Sie dann `Instances`{.action} aus. Wählen Sie `Resize Instance`{.action} im Drop-down-Menü rechts neben der betreffenden Instanz aus. 

![Resize instance](images/resizeinstance2021.png){.thumbnail}

**Flavor Choice (Wahl des Templates)** <a name="flavorchoice"></a>

In diesem Abschnitt können Sie die neue instanz-Template (*flavor*) auswählen. Sie können Ihre Instanz entweder auf ein klassisches Modell umstellen und dieselbe Template beibehalten oder die Größe Ihrer Instanz durch Auswahl einer anderen Template ändern.

In unserem Beispiel ist unser flavor « b2-15-flex », wir können entweder zu einem « b2-15 » flavor zurückkehren oder es zu einem « b2-30 » flavor upgraden. In unserem Fall wollen wir unsere Instanz auf das klassische Modell « b2-30 » aktualisieren.

![choose new flavor](images/confirmflavor.png){.thumbnail}

> [!warning]
> - Sie können nur von einem Linux-Modell zu einem anderen Linux-Modell und von einem Windows-Modell zu einem anderen Windows-Modell wechseln.
>
> - Die Flex-Option ist nicht für alle Modelle verfügbar.
>

**Advanced Options (Erweiterte Optionen)**

In diesem Bereich können Sie die Partitionierung der Festplatte (*Disk Partition*) und die Servergruppe (*Server Group*) einrichten.

![public-cloud](images/resize_advanced.png){.thumbnail}

Wenn die Konfiguration abgeschlossen ist, klicken Sie auf `Resize`{.action}.

Sobald der Prozess abgeschlossen ist, wird unsere Instanz in ein klassisches Modell mit einem größeren Speicherplatz umgewandelt.

![Neuer Geschmack](images/newflavor.png){.thumbnail}

Falls Sie wieder zu einem Flex-Modell wechseln möchten, können Sie dies tun, indem Sie die gleichen Schritte wie [oben](#flavorchoice) ausführen und ein Flex-Flavor anstelle eines klassischen Modells auswählen. 

Alternativ können Sie auch [die Konfiguration der Instanz bearbeiten](https://docs.ovh.com/de/public-cloud/die_ersten_schritte_mit_ihrer_public_cloud_instanz/#die-konfiguration-einer-instanz-bearbeiten) auf Ihr OVHcloud Kundencenter.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.