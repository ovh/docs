---
title: Public Cloud Instanzen verwalten
excerpt: Erfahren Sie hier, wie Sie Ihre Public Cloud Instanzen im OVHcloud Kundencenter verwalten
updated: 2024-02-20
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Sie können Ihre Public Cloud Instanzen in Ihrem [Kundencenter](/links/manager) verwalten.

**In dieser Anleitung werden die im OVHcloud Kundencenter für eine Public Cloud Instanz verfügbaren Aktionen beschrieben.**

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud/) in Ihrem OVHcloud Kunden-Account.
- Sie haben eine [Public Cloud Instanz](/pages/public_cloud/compute/public-cloud-first-steps) in Ihrem Projekt erstellt.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und wählen Sie Ihr `Public Cloud`{.action} Projekt aus.

### Das Instanzen-Verwaltungsinterface verwenden

Klicken Sie im linken Menü auf `Instances`{.action}. 

![public-cloud](images/compute-2024.png){.thumbnail}

Diese Seite zeigt alle Ihre Public Cloud Instanzen und einige ihrer Eigenschaften an:

- Die ID der Instanz (erforderlich für bestimmte API-Aufrufe)
- Standort des Rechenzentrums, d.h. Region der Instanz
- Der Instanz-Typ
- Das Image, d.h. das auf der Instanz installierte Betriebssystem
- IPv4-Adresse der Instanz
- Die private Adresse, die derzeit an die Instanz angehängt ist
- Zusätzliche Volumes (Disks), die derzeit mit der Instanz verbunden sind
- Instanz-Status, der anzeigt, ob sich die Instanz im Zustand `Aktiviert` befindet

### Verwaltungsoptionen im Instanz-Dashboard

Klicken Sie auf der Instanzverwaltungsseite auf den Namen der gewünschten Instanz.

Wählen Sie die gewünschte Option im linken Menü "Verwaltung".

![public-cloud](images/management.png){.thumbnail}

Diese Aktionen sind auch auf der Instanzverwaltungsseite verfügbar, wenn Sie auf den Button `...`{.action} in der Tabelle klicken.

#### Konfiguration einer Instanz bearbeiten

Klicken Sie auf `Bearbeiten`{.action}.

Die neue Seite zeigt eine modifizierte Ansicht der Optionen zur [Erstellung von Instanzen](/pages/public_cloud/compute/public-cloud-first-steps), in der Sie die folgenden Elemente bearbeiten können.

- **Instanz-Name ändern**: Sie können der Instanz einen Namen geben, um die Identifikation zu vereinfachen.
- **Image ändern**: Sie können ein anderes Betriebssystem für die Instanz auswählen. (Beachten Sie, dass bei der Reinstallation einer Instanz alle darauf liegenden Daten gelöscht werden.)
- **Modell ändern**: Sie können auf einen anderen Instanz-Typ wechseln. Weitere Informationen zu diesen Optionen finden Sie in [dieser Anleitung](/pages/public_cloud/compute/public-cloud-first-steps#model).
- **Abrechnungszeitraum ändern**: Sie können die Abrechnungsart der Instanz von stündlicher auf monatliche Abrechnung ändern. Weitere Informationen finden Sie in [dieser Anleitung](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).

#### Backup einer Instanz erstellen

Klicken Sie auf `Backup erstellen`{.action}.

Weitere Informationen finden Sie in der Anleitung "[Backup einer Instanz erstellen](/pages/public_cloud/compute/save_an_instance)". 

#### Ein automatisches Backup einer Instanz erstellen

Klicken Sie auf `Automatisches Backup erstellen`{.action}.

Weitere Informationen finden Sie in der Anleitung "[Backup einer Instanz erstellen](/pages/public_cloud/compute/save_an_instance#automatisches-backup-einer-instanz-erstellen)".

#### Instanz anhalten (*suspend*)

Klicken Sie auf `Anhalten`{.action}.

Dadurch wird die Instanz in den Zustand `Off` versetzt, aber Ihnen wird immer noch derselbe Preis für Ihre Instanz berechnet. Weitere Informationen finden Sie in unserer Anleitung zum [Aussetzen oder Pausieren einer Instanz](/pages/public_cloud/compute/suspend_or_pause_an_instance#anhalten-einer-instanz-suspend).

Klicken Sie auf `Starten`{.action}, um die Instanz zu reaktivieren.

#### Rescue-Modus verwenden

Klicken Sie auf `Neustart im Rescue-Modus`{.action}.

Dies aktiviert den Rescue-Modus der Instanz. Um detaillierte Informationen zu erhalten, lesen Sie unsere Anleitung zum [Rescue-Modus](/pages/public_cloud/compute/put_an_instance_in_rescue_mode).

#### Instanz neu starten

> [!warning]
> Die Durchführung eines Soft Reboot ist derzeit für Metal Instanzen nicht verfügbar.
>

- Klicken Sie auf `Soft Reboot durchführen`{.action} um einen Neustart auf Software-Ebene durchzuführen.
- Klicken Sie auf `Hard Reboot durchführen`{.action} um einen Neustart auf Hardware-Ebene durchzuführen.

Bestätigen Sie die Anfrage zum Neustart im angezeigten Fenster.

#### Instanz aussetzen (*shelve*)

Klicken Sie auf `Aussetzen`{.action}.

Dadurch wird die Instanz in den Zustand "*shelved*" versetzt, hier als `Ausgesetzt` angezeigt. Genauere Informationen zu den Aussetzungszuständen einer Instanz finden Sie in unserer Anleitung "[Aussetzen oder Pausieren einer Instanz](/pages/public_cloud/compute/suspend_or_pause_an_instance#aussetzen-einer-instanz-shelve)".

Klicken Sie auf `Reaktivieren`{.action}, um den Status `Aktiviert` der Instanz wiederherzustellen.

#### Instanz neu installieren

Klicken Sie auf `Neu installieren`{.action}.

Mit dieser Aktion wird die Instanz mit demselben Betriebssystem neu installiert, sofern das Image weiterhin unterstützt wird.

Bitte beachten Sie, dass bei einer Reinstallation alle derzeit **auf Ihrer Instanz gespeicherten Daten gelöscht** werden.

#### Instanz löschen

Klicken Sie auf `Löschen`{.action}.

Die Instanz und alle zugehörigen Daten werden damit endgültig entfernt.

Bestätigen Sie die Löschungsanfrage im angezeigten Fenster.

> [!warning]
> Wenn Sie eine Instanz löschen, werden nicht automatisch alle zugehörigen Optionen gelöscht (z.B. Storage, Snapshot, Backup). Stellen Sie sicher, dass **alle** Optionen, die mit der Instanz verbunden sind, ebenfalls gelöscht werden, um deren Abrechnung zu stoppen.
>

### Auf die VNC-Konsole zugreifen <a name="accessvnc"></a>

Klicken Sie im linken Menü auf `Instances`{.action}. Klicken Sie auf der Instanzverwaltungsseite in der Tabelle auf den Namen der Instanz.

Wechseln Sie dann vom Dashboard zum Tab `VNC-Konsole`{.action}.

![public-cloud](images/vnc1.png){.thumbnail}

Die VNC-Konsole bietet direkten Zugriff auf Ihre Instanz. Damit dieser Zugang funktioniert, müssen Sie zuerst einen Benutzernamen und ein Passwort auf der Instanz konfigurieren. 

Weitere Informationen zu den notwendigen Schritten finden Sie in unserer Anleitung zur [Erstellung einer Public Cloud Instanz](/pages/public_cloud/compute/public-cloud-first-steps#vnc-console).

## Weiterführende Informationen

[Erste Public Cloud Instanz erstellen und auf dieser einloggen](/pages/public_cloud/compute/public-cloud-first-steps)

[Einführung in Horizon](/pages/public_cloud/compute/introducing_horizon)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
