---
title: Aussetzen oder Pausieren einer Instanz
slug: aussetzen_oder_pausieren_einer_instanz
legacy_guide_number: g1781
section: 'Projektverwaltung'
order: 3
---

**Letzte Aktualisierung am 22.09.2021**

## Ziel

Bei der Konfiguration einer hochverfügbaren Infrastruktur müssen Sie möglicherweise den Zugriff auf Ihre Instanzen reduzieren, um verschiedene Tests durchzuführen. Mit OpenStack können Sie Ihre Instanz aussetzen, pausieren oder anhalten. Die zugehörige IP-Adresse bleibt in jedem Fall erhalten.

> [!warning]
> Die Bezeichnung dieser Optionen im OVHcloud Kundencenter unterscheidet sich von den Namen in OpenStack/Horizon. Wenn Sie Operationen über das OVHcloud Kundencenter durchführen, wählen Sie jeweils die unten beschriebene passende Option aus.
>

**Diese Anleitung erklärt, wie Sie eine Instanz aussetzen, anhalten oder pausieren können.**

## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#schritt-3-instanz-erstellen) mit **stündlicher** Abrechnung.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) oder das [Horizon Interface](https://docs.ovh.com/de/public-cloud/erstellung_eines_zugangs_zu_horizon/).
- Sie haben Kenntnisse der [OpenStack API](https://docs.ovh.com/de/public-cloud/vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/) und der [OpenStack Variablen](https://docs.ovh.com/de/public-cloud/die-variablen-der-umgebung-openstack-laden/).

## In der praktischen Anwendung

> [!alert]
>
> Diese Manipulationen führen dazu, dass die Instanz weiterhin abgerechnet wird, solange sie nicht gelöscht wird.
>

In der folgenden Tabelle finden Sie die auf Ihren Instanzen verfügbaren Optionen in der Übersicht. Klicken Sie auf die Option Ihrer Wahl, um zum entsprechenden Teil der Anleitung zu gelangen.

|Funktion|Beschreibung|Abrechnung|
|---|---|---|
|[Aussetzen (*shelve*)](#shelve-instance)|Speichert die Ressourcen und Daten Ihrer Disk, indem ein Snapshot erstellt wird. Alle anderen Ressourcen werden freigegeben.|Ihnen wird nur der Snapshot berechnet.|
|[Anhalten (*suspend*)](#stop-suspend-instance)|Speichert den Zustand der VM auf die Disk. Die der Instanz zugewiesenen Ressourcen bleiben reserviert.|An der Abrechnung der Instanz ändert sich nichts.|
|[Pausieren (*pause*)](#pause-instance)|Speichert den Zustand der VM im RAM. Eine pausierte Instanz wird "eingefroren".|An der Abrechnung der Instanz ändert sich nichts.|

### Aussetzen einer Instanz (*shelve*) <a name="shelve-instance"></a>

Diese Option erlaubt es Ihnen, die dedizierten Ressourcen Ihrer Public Cloud Instanz freizugeben, während die IP-Adresse bestehen bleibt. Die Daten der lokalen Disk werden in einem automatisch erstellten Snapshot gespeichert, sobald die Instanz den Status *shelved* hat. Die im Arbeitsspeicher und anderswo gespeicherten Daten werden nicht gesichert.

#### Im OVHcloud Kundencenter

Loggen Sie sich in Ihr OVHcloud Kundencenter ein und wählen Sie Ihr `Public Cloud`{.action} Projekt aus. Klicken Sie im linken Menü auf `Instances`{.action}.

Klicken Sie in der Instanzenverwaltung auf `...`{.action} rechts neben der Instanz und wählen Sie `Aussetzen`{.action}.

![suspend instance](images/suspend_an_instance.png){.thumbnail}

Nehmen Sie die Meldung im Dialogfenster zur Kenntnis und klicken Sie auf `Bestätigen`{.action}.

![confirm suspension](images/confirm_suspension.png){.thumbnail}

Sobald der Vorgang abgeschlossen ist, erscheint die Instanz als *Ausgesetzt*.

![suspended status](images/instance_suspended.png){.thumbnail}

Um den Snapshot zu sehen, klicken Sie im linken Menü auf `Instance Backup`{.action}. Ein Snapshot namens *xxxxx-shelved* wird jetzt angezeigt.

![snapshot tab](images/shelved_backup.png){.thumbnail}

#### Im Horizon-Interface

Um fortzufahren, muss der [Zugang zu Horizon](../horizon/) konfiguriert sein, damit Sie sich [in das Horizon-interface einloggen](https://horizon.cloud.ovh.net/auth/login/) können.

Wenn Sie Instanzen in verschiedenen Regionen eingerichtet haben, stellen Sie sicher, dass Sie sich in der korrekten Region befinden. Überprüfen Sie es in der oberen linken Ecke des Horizon-Interface.

![horizon interface](images/firstaccesshorizon.png){.thumbnail}

Klicken Sie auf das Menü `Compute`{.action} auf der linken Seite und wählen Sie `Instances`{.action} aus. Wählen Sie `Shelve Instance`{.action} in der Drop-down-Liste für die betreffende Instanz aus.

![shelve instance](images/shelveinstancehorizon.png){.thumbnail}

Sobald der Vorgang abgeschlossen ist, hat die Instanz den Status *Shelved Offloaded*.

![shelved instance](images/newinstancestatushorizon.png){.thumbnail}

Um den Snapshot anzuzeigen, klicken Sie im Menü `Compute`{.action} auf `Images`{.action}.

![snapshot](images/snapshothorizon.png){.thumbnail}

#### Verwendung der OpenStack/Nova API

Bevor Sie fortfahren, empfehlen wir Ihnen folgende Anleitungen:

- [Vorbereitung Ihrer Umgebung zur Verwendung der OpenStack API](https://docs.ovh.com/de/public-cloud/vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/)
- [Konfigurieren der OpenStack-Umgebungsvariablen](https://docs.ovh.com/de/public-cloud/die-variablen-der-umgebung-openstack-laden/)

Sobald Ihre Umgebung bereit ist, geben Sie in der Kommandozeile Folgendes ein:

```bash
~$ openstack server shelve <UUID server>
 
=====================================

~$ nova shelve <UUID server> 
```

### Reaktivieren einer Instanz (*unshelve*)

Mit dieser Option können Sie Ihre Instanz aus dem ausgesetzten Zustand entfernen, um sie wieder verwenden zu können. Bitte beachten Sie, dass die Abrechnung nach Abschluss der Operation wieder regulär erfolgt.

> [!alert] **Aktionen auf dem Snapshot**
>
> Jede Aktion auf dem Snapshot außer der Reaktivierung (*unshelve*), kann für Ihre Infrastruktur sehr gefährlich sein, wenn sie nicht korrekt ausgeführt wird. Wenn Sie eine Instanz reaktivieren, wird der Snapshot automatisch gelöscht. Es wird nicht empfohlen, eine neue Instanz auf einem Snapshot zu basieren, der beim Aussetzen (*shelve*) der Instanz erzeugt wurde.
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren. Wir empfehlen Ihnen, einen spezialisierten Dienstleister zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste haben.
>

#### Im OVHcloud Kundencenter

Loggen Sie sich in Ihr OVHcloud Kundencenter ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action} und wählen Sie anschließend Ihr Projekt aus. Klicken Sie im linken Menü auf `Instances`{.action}.

Klicken Sie in der Instanzenverwaltung auf `...`{.action} rechts neben der Instanz und wählen Sie `Reaktivieren`{.action}.

![reactivate instance](images/reactivate_instancePanel.png){.thumbnail}

Nehmen Sie die Meldung im Dialogfenster zur Kenntnis und klicken Sie auf `Bestätigen`{.action}.

Sobald der Vorgang abgeschlossen ist, erscheint Ihre Instanz als *Aktiviert*.

#### Im Horizon-Interface

Klicken Sie auf das Menü `Compute`{.action} auf der linken Seite und wählen Sie `Instances`{.action} aus. Wählen Sie `Unshelve Instance`{.action} in der Drop-down-Liste für die betreffende Instanz aus.

![unshelve instance](images/unshelveinstancehorizon.png){.thumbnail}

Sobald der Vorgang abgeschlossen ist, erscheint Ihre Instanz als *Active*.

#### Verwendung der OpenStack/Nova APIs

Sobald Ihre Umgebung bereit ist, geben Sie in der Kommandozeile Folgendes ein:

```bash
~$ openstack server unshelve <UUID server>

=========================================

~$ nova unshelve <UUID server>
```

### Anhalten einer Instanz (*suspend*) <a name="stop-suspend-instance"></a>

Mit dieser Option können Sie Ihre Instanz anhalten und den Zustand der virtuellen Maschine auf der Disk sichern. Der Arbeitsspeicher wird ebenfalls auf die Disk geschrieben.

#### Im OVHcloud Kundencenter

Loggen Sie sich in Ihr OVHcloud Kundencenter ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action} und wählen Sie anschließend Ihr Projekt aus. Klicken Sie im linken Menü auf `Instances`{.action}.

Klicken Sie in der Instanzenverwaltung auf `...`{.action} rechts neben der Instanz und wählen Sie `Anhalten`{.action}.

![stop instance](images/stopinstance.png){.thumbnail}

Nehmen Sie die Meldung im Dialogfenster zur Kenntnis und klicken Sie auf `Bestätigen`{.action}.

Sobald der Vorgang abgeschlossen ist, erscheint die Instanz als *Ausgeschaltet*.

Um die Instanz wieder in Betrieb zu nehmen (*unsuspend*), klicken Sie in der Instanzenverwaltung auf `...`{.action} rechts neben der Instanz und wählen Sie `Starten`{.action}. In einigen Fällen müssen Sie möglicherweise einen Neustart durchführen.

#### Im Horizon-Interface

Klicken Sie auf das Menü `Compute`{.action} auf der linken Seite und wählen Sie `Instances`{.action} aus. Wählen Sie `Suspend Instance`{.action} in der Drop-down-Liste für die betreffende Instanz aus.

![suspend instance Horizon](images/suspendinstancehorizon.png){.thumbnail}

Es erscheint eine Bestätigungsmeldung, die anzeigt, dass die Instanz gestoppt wurde.

Um die Instanz wieder in Betrieb zu nehmen (*unsuspend*), wählen Sie in der Drop-down-Liste für die entsprechende Instanz `Resume Instance`{.action}.

#### Verwendung der OpenStack/Nova API

Sobald Ihre Umgebung bereit ist, geben Sie in der Kommandozeile Folgendes ein:

```bash
~$ openstack server suspend <UUID server>

=========================================

~$ nova suspend <UUID server>
```

Um die Instanz wieder in Betrieb zu nehmen, geben Sie in der Kommandozeile Folgendes ein:

```bash
~$ openstack server unsuspend <UUID server>

=========================================

~$ nova unsuspend <UUID server>
```

### Pausieren einer Instanz (*pause*) <a name="pause-instance"></a>

Diese Aktion ist nur im Horizon-Interface oder über die OpenStack/Nova-API möglich. Damit können Sie eine Instanz "einfrieren".

#### Im Horizon-Interface

Klicken Sie auf das Menü `Compute`{.action} auf der linken Seite und wählen Sie `Instances`{.action} aus. Wählen Sie `Pause Instance`{.action} Drop-down-Liste für die entsprechende Instanz aus.

![Pause instance](images/pauseinstancehorizon.png){.thumbnail}

Es erscheint eine Bestätigungsmeldung, die anzeigt, dass die Instanz pausiert wurde.

Um die Instanz wieder in Betrieb zu nehmen (*unpause*), wählen Sie in der Dropdown-Liste der entsprechenden Instanz `Resume Instance`{.action}.

#### Verwendung der OpenStack/Nova API

Sobald Ihre Umgebung bereit ist, geben Sie in der Kommandozeile Folgendes ein:

```bash
~$ openstack server pause <UUID server>

=========================================

~$ nova pause <UUID server>
```

Um die Instanz wieder in Betrieb zu nehmen, geben Sie in der Kommandozeile Folgendes ein:

```bash
~$ openstack server unpause <UUID server>

=========================================

~$ nova unpause <UUID server>
```

## Weiterführende Informationen

[OpenStack Dokumentation](https://docs.openstack.org/mitaka/user-guide/cli_stop_and_start_an_instance.html)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
