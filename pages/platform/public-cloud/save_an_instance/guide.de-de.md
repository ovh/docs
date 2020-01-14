---
title: 'Backup einer Instanz erstellen'
excerpt: 'So erstellen Sie mit wenigen Klicks eine Sicherheitskopie Ihrer Instanz'
slug: ein_backup_einer_instanz_erstellen
legacy_guide_number: g1881
section: 'Über das OVH Kundencenter'
---

**letzter Stand 22.11.2019**

## Ziel

Sie können jederzeit über Ihren [OVH Kundenbereich](https://www.ovh.com/auth/?action=gotomanager){.external} eine Sicherheitskopie einer Instanz erstellen. Mit diesem können Sie Ihre Instanz auf eine frühere Konfiguration zurücksetzen oder die Instanz wiederherstellen.

**Erstellen Sie mit wenigen Klicks eine Sicherheitskopie einer Öffentliche Cloud Instanz.**

## Voraussetzungen

- Sie haben eine [Öffentliche Cloud Instanz](../creer-instance-espace-client/) in Ihrem Konto erstellt.
- Sie sind mit Ihrem [OVH Kundenbereich](https://www.ovh.com/auth/?action=gotomanager){.external}verbunden.

## in der Praxis angewendet

### eine Sicherheitskopie einer Instanz erstellen

Verbinden Sie sich mit Ihrem [Kundenbereich OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, wählen Sie dann den Tab Öffentlicher Cloud in der Rubrik `Instanzen`{.action}.

Klicken Sie dann auf die`...`{.action} rechts von der gewählten Instanz und anschließend auf  `ein Backup erstellen`{.action}.

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Geben Sie dann auf der folgenden Seite einen Namen für diese Sicherheitskopie an.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

Sobald die Sicherung abgeschlossen ist wird sie in der Rubrik `Instanz Backup`{.action} zur Verfügung stehen.

![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}

### automatische Sicherheitskopie einer Instanz erstellen

In der Rubrik `Instanzen`{.action} wählen Sie `eine automatische Sicherheitskopie erstellen`{.action} in den für die zu sicherende Instanz verfügbaren Aktionen.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Sie müssen dann auf der nächsten Seite ein paar Informationen abgeben:

#### **Der Arbeitsfluss** 

Es gibt zur Zeit nur einen einzigen Arbeitsfluss, dieser wird eine Sicherheitskopie der Instanz und ihrem hauptsächlichen Volumen erstellen.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **Die Ressource**. 

Es genügt die für die Sicherheitskopie betroffene Instanz zu wählen.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **Die Ablaufplanung** 

Es handelt sich darum die Häufigkeit der Sicherheitskopien zu definieren. Standardmäßig werden zwei Optionen vorgeschlagen:

* Eine tägliche Sicherungskopie mit einer Historik von maximal 7 Tagen.
* Eine tägliche Sicherungskopie mit einer Historik von maximal 14 Tagen.

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

    
#### **Die Bezeichnung** 

Es handelt sich ganz einfach darum der Aufgabe der Sicherungskopie einen Namen zu geben.
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

Sobald diese erstellt ist wird sie in der Rubrik  `Arbeitsfluss Management`{.action} zur Verfügung stehen:

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Die Sicherheitskopien werden in der Rubrik  `Instanz Backup`{.action} verfügbar sein und auch so berechnet.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.