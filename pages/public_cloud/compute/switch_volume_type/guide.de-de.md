---
title: Block Storage Volume bearbeiten
excerpt: "Erfahren Sie hier, wie Sie den Typ eines Block Storage Volumes mit OpenStack ändern"
updated: 2023-08-08
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

In dieser Anleitung wird erläutert, wie Sie einen Block Storage Volume vom Typ *Classic* oder *High speed* auf *High speed gen2* ändern können.

## Voraussetzungen

- Sie haben Zugriff auf das [Horizon Interface](/pages/public_cloud/compute/introducing_horizon).
- Sie haben ein [Block Storage Volume](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) in Ihrem [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud/) erstellt.

## In der praktischen Anwendung

Wenn Sie einen Block Storage Volume Typ auf *High speed gen2* ändern, muss die Migrationsrichtlinie von `Never` auf `On Demand` gewechselt werden.

Als Standard ist die Migrationsrichtlinie auf `Never` eingestellt, da das Volume auf demselben CEPH Cluster verbleibt. Für *High speed gen2* muss das Volume jedoch auf ein neues Cluster migriert werden.

Diese Änderung kann über Horizon oder OpenStack CLI vorgenommen werden.

### Über das Horizon-Interface

Loggen Sie sich ins [Horizon Interface](https://horizon.cloud.ovh.net/auth/login/) ein wählen Sie oben links die korrekte Region aus.

![Region auswählen](images/region2021.png){.thumbnail}

Klicken Sie links im Menü `Volumes`{.action} auf `Volumes`{.action}.

Klicken Sie auf den Pfeil neben `Edit Volume`{.action}, und wählen Sie `Change Volume Type`{.action} aus.

![Wahl der Option](images/selectoption.png){.thumbnail}

Klicken Sie im angezeigten Fenster auf das Dropdown-Menü unter `Type` und wählen Sie `high-speed-gen-2`{.action}. Klicken Sie dann auf den Ppfeil unter `Migration Policy` und wählen Sie `On Demand`{.action}.

Wenn Sie diese Aktionen ausgeführt haben, klicken Sie auf `Change Volume Type`{.action}, um die Änderung zu bestätigen.

![Wahl der Option](images/changevolume.png){.thumbnail}

### Über OpenStack CLI

Bevor Sie fortfahren, empfehlen wir folgende Anleitungen:

- [Vorbereitung Ihrer Umgebung zur Verwendung der OpenStack API](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- [Konfigurieren der OpenStack-Umgebungsvariablen](/pages/public_cloud/compute/loading_openstack_environment_variables)

Sie können die in Ihrer Region verfügbaren Volume-Typen mit folgendem Befehl auflisten:

```bash
#~$ openstack image list
+--------------------------------------+-----------------------------------------------+----------+
| ID                                   | Name                                          | Is Public |
+--------------------------------------+-----------------------------------------------+----------+
| 27844ef7-1a9a-4944-be59-6e4eb19a71f6 | high-speed-gen2                                    | True |
| 23f75fef-d4f6-416a-a884-95aa3fd45695 | classic                                            | True |
| 2f78e8af-93c9-4e5c-b177-83c4a7ec456a | high-speed                                         | True |
----------------------------------------------------------------------------------------------------
```

> [!warning]
> Beachten Sie: Wenn der Volume Typ "*high-speed-gen2*" nicht in der Liste angezeigt wird, ist er in dieser Region nicht verfügbar.
>

Ändern Sie anschließend den Volume Typ mit folgendem Befehl:

```bash
$ openstack volume set --type high-speed-gen2 --retype-policy on-demand VOLUME_NAME_OR_ID
```

## Weiterführende Informationen

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.