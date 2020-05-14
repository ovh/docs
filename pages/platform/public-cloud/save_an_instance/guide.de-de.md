---
title: 'Backup einer Instanz erstellen'
excerpt: 'So erstellen Sie mit wenigen Klicks eine Sicherheitskopie Ihrer Instanz'
slug: ein_backup_einer_instanz_erstellen
legacy_guide_number: g1881
section: 'Über das OVH Kundencenter'
---

**Letzte Aktualisierung am 22.11.2019**


## Ziel

Sie können jederzeit über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) eine Sicherheitskopie einer Instanz erstellen. Damit können Sie Ihre Instanz auf eine frühere Konfiguration zurücksetzen oder auf deren Basis eine neue Instanz erstellen.

**Diese Anleitung erklärt, wie Sie in der Public Cloud Oberfläche des OVHcloud Kundencenters Backups erstellen und planen.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie verfügen über eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud).

## In der praktischen Anwendung

### Ein Backup einer Instanz erstellen

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action}. Klicken Sie dann im folgenden Bereich auf die Pfeilschaltfläche neben Ihrem Standardprojektnamen in der oberen linken Ecke der Anzeige. Wählen Sie nun das gewünschte Projekt aus und klicken anschließend im linken Menü auf `Instances`{.action}.

Klicken Sie dann auf `...`{.action} rechts neben der Instanz und wählen Sie `Backup erstellen`{.action}.

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Geben Sie dann auf der folgenden Seite einen Namen für dieses Backup an.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

Sobald die Sicherung abgeschlossen ist, wird das Backup im Abschnitt `Instance Backup`{.action} angezeigt

![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}

### Ein automatisches Backup einer Instanz erstellen

Im Bereich `Instances`{.action} klicken Sie auf die 3 Punkte rechts neben der Instanz und wählen `Automatisches Backup erstellen`{.action}

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Sie müssen dann auf der nächsten Seite einige Informationen abgeben:

#### **Workflow** 

Es gibt zur Zeit nur diesen einen Workflow, er erstellt die Backups der Instanz und des primären Volume.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **Zugeteilte Ressource**. 

Es genügt, die für die Sicherheitskopie betroffene Instanz zu wählen.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **Scheduling** 

Legen Sie hier die Häufigkeit der Sicherheitskopien fest. Es gibt auch zwei Standard-Optionen zur Auswahl:

- Tägliches Backup mit einer Historie von maximal 7 Tagen.
- Tägliches Backup mit einer Historie von maximal 14 Tagen.

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

    
#### **Schedule-Name** 

Geben Sie eine Bezeichnung für den Workflow-Task an.
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

Sobald er erstellt wurde, wird der neue Workflow unter `Workflow Management`{.action} angezeigt.

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Die Backups werden im linken Menü unter `Instance Backup`{.action} verfügbar sein und gemäß Ihrer Instanzkonfiguration berechnet.

Um eine neue Instanz basierend auf einem Backup zu erstellen, klicken Sie hier rechts auf `...`{.action} und dann auf `Instanz erstellen`{.action}.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.