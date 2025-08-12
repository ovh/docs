---
title: Aussetzen oder Pausieren einer Instanz
updated: 2025-05-26
---

## Ziel

Bei der Konfiguration einer hochverfügbaren Infrastruktur müssen Sie möglicherweise den Zugriff auf Ihre Instanzen reduzieren, um verschiedene Tests durchzuführen. Mit OpenStack können Sie Ihre Instanz aussetzen, pausieren oder anhalten. Die zugehörige IP-Adresse bleibt in jedem Fall erhalten.

> [!warning]
> Die Bezeichnung dieser Optionen im OVHcloud Kundencenter unterscheidet sich von den Namen in OpenStack/Horizon. Wenn Sie Operationen über das OVHcloud Kundencenter durchführen, wählen Sie jeweils die unten beschriebene passende Option aus.
>

**Diese Anleitung erklärt, wie Sie eine Instanz aussetzen, anhalten oder pausieren können.**

## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](/pages/public_cloud/compute/public-cloud-first-steps) mit **stündlicher** Abrechnung.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager) oder das [Horizon Interface](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon).
- Sie haben Kenntnisse der [OpenStack API](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api) und der [OpenStack Variablen](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables).

## In der praktischen Anwendung

> [!alert]
>
> Diese Anleitung gilt nur für Instanzen mit **stündlicher Abrechnung**. Wenn Ihre Instanzen über eine **monatliche Abrechnung** verfügen, wird die Abrechnung ungeachtet des Status der Dienstleistung fortgesetzt.
>
> Instanzen werden weiterhin abgerechnet, solange sie nicht gelöscht werden.
>

In der folgenden Tabelle finden Sie die auf Ihren Instanzen verfügbaren Optionen in der Übersicht. Klicken Sie auf die Option Ihrer Wahl, um zum entsprechenden Teil der Anleitung zu gelangen. Wir setzen die in der Horizon-Interface verwendete Terminologie in Klammern.

|Funktion|Beschreibung|Abrechnung|
|---|---|---|
|[Aussetzen (*shelve*)](#shelve-instance)|Speichert die Ressourcen und Daten Ihrer Disk, indem ein Snapshot erstellt wird. Alle anderen Ressourcen werden freigegeben.|Ihnen wird nur der Snapshot berechnet.|
|[Anhalten (*suspend*)](#stop-suspend-instance)|Speichert den Zustand der VM auf die Disk. Die der Instanz zugewiesenen Ressourcen bleiben reserviert.|An der Abrechnung der Instanz ändert sich nichts.|
|[Pausieren (*pause*)](#pause-instance)|Speichert den Zustand der VM im RAM. Eine pausierte Instanz wird "eingefroren".|An der Abrechnung der Instanz ändert sich nichts.|

### Inhaltsübersicht

- [Aussetzen einer Instanz (*shelve*)](#shelve-instance)
    - [Im OVHcloud Kundencenter](#control-panel)
    - [Im Horizon-Interface](#horizon)
    - [Verwendung der OpenStack/Nova API](#openstack-nova)
-[Reaktivieren einer Instanz (*unshelve*)](#unshelve-instance)
    - [Im OVHcloud Kundencenter](#control-panel-unshelve)
    - [Im Horizon-Interface](#horizon-unshelve)
    - [Verwendung der OpenStack/Nova API](#openstack-nova-unshelve)
- [Anhalten einer Instanz (*suspend*)](#stop-suspend-instance)
    - [Im OVHcloud Kundencenter](#stop-control-panel)
    - [Im Horizon-Interface](#stop-horizon)
    - [Verwendung der OpenStack/Nova API](#stop-openstack-nova)
- [Pausieren einer Instanz (*pause*)](#pause-instance)
    - [Im Horizon-Interface](#pause-horizon)
    - [Verwendung der OpenStack/Nova API](#pause-openstack-nova)

<a name="shelve-instance"></a>

### Aussetzen einer Instanz (*shelve*)

> [!alert]
> Beachten Sie, dass das Aussetzen einer IOPS Instanz oder T1/T2-180 Instanz zu Datenverlust auf den NVMe-Passthrough-Disks führt.
>
> Das Suspendieren dieses Instanztyps führt zur Deaktivierung auf dem Host und somit auf den Passthrough-Disks.
>

Diese Option erlaubt es Ihnen, die dedizierten Ressourcen Ihrer Public Cloud Instanz freizugeben, während die IP-Adresse bestehen bleibt. Die Daten der lokalen Disk werden in einem automatisch erstellten Snapshot gespeichert, sobald die Instanz den Status *shelved* hat. Die im Arbeitsspeicher und anderswo gespeicherten Daten werden nicht gesichert.

<a name="control-panel"></a>

#### Im OVHcloud Kundencenter

Loggen Sie sich in Ihr OVHcloud Kundencenter ein und wählen Sie Ihr `Public Cloud`{.action} Projekt aus. Klicken Sie im linken Menü auf `Instanzen`{.action}.

Klicken Sie in der Instanzenverwaltung auf `...`{.action} rechts neben der Instanz und wählen Sie `Aussetzen`{.action}.

![suspend instance](images/suspend_an_instance.png){.thumbnail}

Nehmen Sie die Meldung im Dialogfenster zur Kenntnis und klicken Sie auf `Bestätigen`{.action}.

![confirm suspension](images/suspend_an_instance_2024.png){.thumbnail}

Sobald der Vorgang abgeschlossen ist, erscheint die Instanz als *Ausgesetzt*.

![suspended status](images/instance_suspended.png){.thumbnail}

Um den Snapshot zu sehen, klicken Sie im linken Menü auf `Instance Backup`{.action} im Bereich **Compute**. Ein Snapshot mit dem Namen *xxxxx-shelved* wird dann angezeigt.

![snapshot tab](images/shelved_backup.png){.thumbnail}

<a name="horizon"></a>

#### Im Horizon-Interface

Um diese Methode zu verwenden, müssen Sie sich [in das Horizon-interface einloggen](https://horizon.cloud.ovh.net/auth/login/).

- Um sich über OVHcloud SSO zu verbinden: Verwenden Sie den Link `Horizon`{.action} im Menü links unter "Management Interfaces", nachdem Sie Ihr `Public Cloud`{.action} Projekt in Ihrem [OVHcloud Kundencenter](/links/manager) geöffnet haben.

- Um sich mit einem bestimmten OpenStack-Benutzer anzumelden: Öffnen Sie die Login-Seite für [Horizon](https://horizon.cloud.ovh.net/auth/login/) und geben Sie die zuvor erstellten [OpenStack-Zugangsdaten](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) ein. Klicken Sie anschließend auf `Connect`{.action}.

Wenn Sie Instanzen in verschiedenen Regionen eingerichtet haben, stellen Sie sicher, dass Sie sich in der korrekten Region befinden. Überprüfen Sie es in der oberen linken Ecke des Horizon-Interface.

![horizon interface](images/firstaccesshorizon.png){.thumbnail}

Klicken Sie auf das Menü `Compute`{.action} auf der linken Seite und wählen Sie `Instances`{.action} aus. Wählen Sie `Shelve Instance`{.action} in der Drop-down-Liste für die betreffende Instanz aus.

![shelve instance](images/shelveinstancehorizon.png){.thumbnail}

Sobald der Vorgang abgeschlossen ist, hat die Instanz den Status *Shelved Offloaded*.

![shelved instance](images/newinstancestatushorizon.png){.thumbnail}

Um den Snapshot anzuzeigen, klicken Sie im Menü `Compute`{.action} auf `Images`{.action}.

![snapshot](images/snapshothorizon.png){.thumbnail}

<a name="openstack-nova"></a>

#### Verwendung der OpenStack/Nova API

Bevor Sie fortfahren, empfehlen wir Ihnen folgende Anleitungen:

- [Vorbereitung Ihrer Umgebung zur Verwendung der OpenStack API](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [Konfigurieren der OpenStack-Umgebungsvariablen](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

Sobald Ihre Umgebung bereit ist, geben Sie in der Kommandozeile Folgendes ein:

```bash
~$ openstack server shelve <UUID server>
 
=====================================

~$ nova shelve <UUID server> 
```

<a name="unshelve-instance"></a>

### Reaktivieren einer Instanz (*unshelve*)

Mit dieser Option können Sie Ihre Instanz aus dem ausgesetzten Zustand entfernen, um sie wieder verwenden zu können. Bitte beachten Sie, dass die Abrechnung nach Abschluss der Operation wieder regulär erfolgt.

> [!alert] **Aktionen auf dem Snapshot**
>
> Jede Aktion auf dem Snapshot außer der Reaktivierung (*unshelve*), kann für Ihre Infrastruktur sehr gefährlich sein, wenn sie nicht korrekt ausgeführt wird. Wenn Sie eine Instanz reaktivieren, wird der Snapshot automatisch gelöscht. Es wird nicht empfohlen, eine neue Instanz auf einem Snapshot zu basieren, der beim Aussetzen (*shelve*) der Instanz erzeugt wurde.
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren. Wir empfehlen Ihnen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste haben.
>

<a name="control-panel-unshelve"></a>

#### Im OVHcloud Kundencenter

Loggen Sie sich in Ihr OVHcloud Kundencenter ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action} und wählen Sie anschließend Ihr Projekt aus. Klicken Sie im linken Menü auf `Instanzen`{.action}.

Klicken Sie in der Instanzenverwaltung auf `...`{.action} rechts neben der Instanz und wählen Sie `Reaktivieren`{.action}.

![reactivate instance](images/reactivate_instancePanel.png){.thumbnail}

Nehmen Sie die Meldung im Dialogfenster zur Kenntnis und klicken Sie auf `Bestätigen`{.action}.

Sobald der Vorgang abgeschlossen ist, erscheint Ihre Instanz als *Aktiviert*.

<a name="horizon-unshelve"></a>

#### Im Horizon-Interface

Klicken Sie auf das Menü `Compute`{.action} auf der linken Seite und wählen Sie `Instances`{.action} aus. Wählen Sie `Unshelve Instance`{.action} in der Drop-down-Liste für die betreffende Instanz aus.

![unshelve instance](images/unshelveinstancehorizon.png){.thumbnail}

Sobald der Vorgang abgeschlossen ist, erscheint Ihre Instanz als *Active*.

<a name="openstack-nova-unshelve"></a>

#### Verwendung der OpenStack/Nova APIs

Sobald Ihre Umgebung bereit ist, geben Sie in der Kommandozeile Folgendes ein:

```bash
~$ openstack server unshelve <UUID server>

=========================================

~$ nova unshelve <UUID server>
```

<a name="stop-suspend-instance"></a>

### Anhalten einer Instanz (*suspend*)

Mit dieser Option können Sie Ihre Instanz anhalten und den Zustand der virtuellen Maschine auf der Disk sichern. Der Arbeitsspeicher wird ebenfalls auf die Disk geschrieben.

<a name="stop-control-panel"></a>

#### Im OVHcloud Kundencenter

Loggen Sie sich in Ihr OVHcloud Kundencenter ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action} und wählen Sie anschließend Ihr Projekt aus. Klicken Sie im linken Menü auf `Instanzen`{.action}.

Klicken Sie in der Instanzenverwaltung auf `...`{.action} rechts neben der Instanz und wählen Sie `Anhalten`{.action}.

![stop instance](images/stopinstance.png){.thumbnail}

Nehmen Sie die Meldung im Dialogfenster zur Kenntnis und klicken Sie auf `Bestätigen`{.action}.

Sobald der Vorgang abgeschlossen ist, erscheint die Instanz als *Ausgeschaltet*.

Um die Instanz wieder in Betrieb zu nehmen (*unsuspend*), klicken Sie in der Instanzenverwaltung auf `...`{.action} rechts neben der Instanz und wählen Sie `Starten`{.action}. In einigen Fällen müssen Sie möglicherweise einen Neustart durchführen.

<a name="stop-horizon"></a>

#### Im Horizon-Interface

Klicken Sie auf das Menü `Compute`{.action} auf der linken Seite und wählen Sie `Instances`{.action} aus. Wählen Sie `Suspend Instance`{.action} in der Drop-down-Liste für die betreffende Instanz aus.

![suspend instance Horizon](images/suspendinstancehorizon.png){.thumbnail}

Es erscheint eine Bestätigungsmeldung, die anzeigt, dass die Instanz gestoppt wurde.

Um die Instanz wieder in Betrieb zu nehmen (*unsuspend*), wählen Sie in der Drop-down-Liste für die entsprechende Instanz `Resume Instance`{.action}.

<a name="stop-openstack-nova"></a>

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

<a name="pause-instance"></a>

### Pausieren einer Instanz (*pause*)

Diese Aktion ist nur im Horizon-Interface oder über die OpenStack/Nova-API möglich. Damit können Sie eine Instanz "einfrieren".

<a name="pause-horizon"></a>

#### Im Horizon-Interface

Klicken Sie auf das Menü `Compute`{.action} auf der linken Seite und wählen Sie `Instances`{.action} aus. Wählen Sie `Pause Instance`{.action} Drop-down-Liste für die entsprechende Instanz aus.

![Pause instance](images/pauseinstancehorizon.png){.thumbnail}

Es erscheint eine Bestätigungsmeldung, die anzeigt, dass die Instanz pausiert wurde.

Um die Instanz wieder in Betrieb zu nehmen (*unpause*), wählen Sie in der Dropdown-Liste der entsprechenden Instanz `Resume Instance`{.action}.

<a name="pause-openstack-nova"></a>

#### Verwendung der OpenStack/Nova API

Sobald Ihre Umgebung bereit ist, geben Sie in der Kommandozeile Folgendes ein:

```bash
~$ openstack server pause <UUID server>

=========================================

~$ nova pause <UUID server>
```

Um die Instanz **zu reaktivieren**, geben Sie in der Kommandozeile Folgendes ein:

```bash
~$ openstack server unpause <UUID server>

=========================================

~$ nova unpause <UUID server>
```

## Weiterführende Informationen

[OpenStack Dokumentation](https://docs.openstack.org/mitaka/user-guide/cli_stop_and_start_an_instance.html).

Treten Sie unserer [User Community](/links/community) bei.
