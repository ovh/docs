---
title: Block Storage Volume bearbeiten
excerpt: "Erfahren Sie hier, wie Sie den Typ eines Block Storage Volumes mit OpenStack ändern"
updated: 2026-01-13
---

## Ziel

In dieser Anleitung wird erläutert, wie Sie einen Block Storage Volume vom Typ *Classic* oder *High speed* auf *High speed gen2* ändern können.

## Voraussetzungen

- Sie haben Zugriff auf das [OVHcloud Kundencenter](/links/manager) oder auf das [Horizon Interface](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon).
- Sie haben ein [Block Storage Volume](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) in Ihrem [Public Cloud Projekt](/links/public-cloud/public-cloud) erstellt.

## In der praktischen Anwendung

Wenn Sie einen Block Storage Volume Typ auf *High speed gen2* ändern, muss die Migrationsrichtlinie von `Never` auf `On Demand` gewechselt werden.

Als Standard ist die Migrationsrichtlinie auf `Never` eingestellt, da das Volume auf demselben CEPH Cluster verbleibt. Für *High speed gen2* muss das Volume jedoch auf ein neues Cluster migriert werden.

Diese Änderung kann über Horizon oder OpenStack CLI vorgenommen werden.

> [!warning]
>
> Wenn das Block Storage-Volumen an eine Instanz angeschlossen ist, müssen Sie es abtrennen. Weitere Informationen finden Sie im Abschnitt **Volume abtrennen** in "[Zusätzliches Volume auf einer Instanz erstellen und konfigurieren](/pages/public_cloud/Compute/create_and_configure_an_additional_disk_on_an_instance#detach-a-volume)".
>
> Das Ändern des Volumetyps (Retyping) über das OVHcloud Kundencenter oder die OVHcloud API ist nur für nicht verschlüsselte Volumes verfügbar. Volumes des Typs **-LUKS** können über diese Schnittstellen nicht retypisiert werden.
>
> Retyping wird über OpenStack / Horizon nur für **-LUKS** zu **-LUKS** Volumen unterstützt. In diesem Fall ist die Wiederherstellung des Volumens nach dem Retyping nicht möglich.
>
> Konvertierungen von **-LUKS** zu **nicht -LUKS** (oder umgekehrt) werden nicht unterstützt, auch nicht über OpenStack / Horizon.
>

> [!tabs]
> Über das OVHcloud Kundencenter
>>
>> Melden Sie sich im [OVHcloud Kundencenter](/links/manager) an, wechseln Sie in den Bereich `Public Cloud`{.action} und wählen Sie das betreffende Public Cloud Projekt aus. Klicken Sie anschließend auf `Block Storage`{.action} im linken Menü unter **Storage und Backups**.
>>
>> Suchen Sie das relevante Volumen in der Liste, klicken Sie dann auf den Button `...`{.action} rechts daneben und wählen Sie `Ändern Sie den Typ des Volumens`{.action}.
>>
>> Ein neues Fenster öffnet sich, in dem die verfügbaren Volumetypen angezeigt werden. Wählen Sie den gewünschten Typ aus und bestätigen Sie, indem Sie auf `Edit`{.action} klicken.
>>
>> > [!primary]
>> >
>> > Das Ändern des Volumetyps (Retyping) kann einige Minuten dauern.
>> >
>>
> Über die Horizon-Schnittstelle
>>
>> Melden Sie sich bei der [Horizon-Schnittstelle](https://horizon.cloud.ovh.net/auth/login/) an und stellen Sie sicher, dass Sie sich in der richtigen Region befinden. Dies können Sie in der linken oberen Ecke überprüfen. 
>>
>> ![Region selection](images/region2021.png){.thumbnail}
>>
>> Klicken Sie anschließend auf das Menü `Volumes`{.action} auf der linken Seite und wählen Sie `Volumes`{.action} aus.
>> Klicken Sie auf das Dropdown-Menü neben `Edit Volume`{.action} und wählen Sie `Change Volume Type`{.action}.
>>
>> ![Option selection](images/selectoption.png){.thumbnail}
>>
>> Im Pop-up-Fenster klicken Sie auf das Dropdown-Menü unter `Type` und wählen Sie `high-speed-gen-2`{.action} aus. Klicken Sie anschließend auf das Dropdown-Menü unter `Migration Policy` und wählen Sie `On Demand`{.action}.
>>
>> Sobald Sie fertig sind, klicken Sie auf `Change Volume Type`{.action}, um die Änderung zu bestätigen.
>>
>> ![Option selection](images/changevolume.png){.thumbnail}
>>
> Über die OpenStack CLI
>>
>> Stellen Sie sicher, dass Sie den folgenden Leitfaden vorab konsultieren:
>>
>> - [Preparing an environment for using the OpenStack API](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).
>>
>> Zunächst listen Sie die in Ihrer Region verfügbaren Volumetypen mit dem folgenden Befehl auf:
>>
>> ```bash
>> #~$ openstack volume type list
>> +--------------------------------------+----------------------------------------------------+-----------+
>> | ID                                   | Name                                               | Is Public |
>> +--------------------------------------+----------------------------------------------------+-----------+
>> | 27844ef7-1a9a-4944-be59-6e4eb19a71f6 | high-speed-gen2                                    | True      |
>> | 23f75fef-d4f6-416a-a884-95aa3fd45695 | classic                                            | True      |
>> | 2f78e8af-93c9-4e5c-b177-83c4a7ec456a | high-speed                                         | True      |
>> | 9c5b1e42-3d8f-4a67-a9d2-84f3b2e7c1aa | high-speed-gen2-luks                               | True      |
>> | f41d7c8e-6a2b-4b91-9e73-2d6c0a58e94f | classic-luks                                       | True      |
>> | c8e92a5d-0f6e-4e3b-b1a4-7a9d6f3c2e8b | high-speed-luks                                    | True      |
>> ---------------------------------------------------------------------------------------------------------
>> ```
>>
>> > [!warning]
>> >
>> > Bitte beachten Sie, dass, wenn die Typen "high-speed-gen2" oder **-LUKS** nicht in der Liste erscheinen, dies bedeutet, dass sie in dieser Region nicht verfügbar sind.
>> >
>> > Typen von **-LUKS** Volumen werden nur angezeigt, wenn sie in der Region unterstützt werden und mit dem Verschlüsselungstyp des Volumens kompatibel sind.
>> >
>>
>> Als nächstes wechseln Sie den Volumetyp mit dem folgenden Befehl:
>>
>> ```bash
>> $ openstack volume set --type <VOLUME_TYPE> --retype-policy on-demand <VOLUME_NAME_OR_ID>
>> ```
>>

## Weiterführende Informationen

Weitere Informationen zur Migration eines Block Storage Volumes auf ein LUKS-verschlüsseltes Volume finden Sie in unserer dedizierten Anleitung [Block Storage Volume auf ein LUKS-verschlüsseltes Volume migrieren](/pages/public_cloud/compute/migrating-non-encrypted-to-encrypted-volume).(EN).

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.
