---
title: "Windows-Lizenz für eine Instanz im privaten Modus aktivieren"
slug: activate-windows-licence-private-mode-instance
excerpt: "Erfahren Sie hier, wie Sie eine Windows-Lizenz für eine Instanz im privaten Modus aktivieren"
section: Erste Schritte
order: 09
updated: 2023-01-25
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 02.02.2023**

## Ziel

Im Gegensatz zu Windows-Instanzen, die im öffentlichen Netzwerk erstellt wurden, haben Windows-Instanzen, die im privaten Netzwerk-Modus (vRack) erstellt wurden, ihre Windows-Lizenzen nicht automatisch aktiviert.
In diesem Fall müssen Sie die Lizenz manuell aktivieren, um Zugriff auf alle Windows-Dienstleistungen zu erhalten.

**Diese Anleitung hilft Ihnen bei der Konfiguration des öffentlichen Interfaces Ihrer Public Cloud Instanzen im vRack.**

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud/){.external} in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben einen [OpenStack User erstellt](https://docs.ovh.com/de/public-cloud/openstack-user-erstellen-loeschen/).

Wir empfehlen, die [Einführung in das Horizon Interface](https://docs.ovh.com/de/public-cloud/horizon/) zu lesen, um sich mit Horizon vertraut zu machen.

## In der praktischen Anwendung

### Einen öffentlichen "Ext-Net" Port mit einer Instanz verbinden

#### Über das Horizon-Interface

Loggen Sie sich in [Horizon-interface](https://horizon.cloud.ovh.net/auth/login/) mit der im [ersten Teil dieser Anleitung](https://docs.ovh.com/de/publiccloud/network-services/public-cloud-vrack/#horizon) beschriebenen Methode ein. 

Wählen Sie die korrekte Zone im Menü aus.

![Region](images/horizon1.png)

Öffnen Sie `Compute`{.action} und dann `Instances`{.action} links im Menü.

![Instanz](images/horizon2.png){.thumbnail}

Um ein Interface hinzuzufügen, klicken Sie in der Spalte “Actions” auf den Pfeil, um auf die Aktionen zuzugreifen, die auf der Instanz möglich sind. Klicken Sie dann auf `Attach Interface`{.action}:

![attach interface](images/horizon3.png){.thumbnail}

Wählen Sie Ihr Interface aus und bestätigen Sie.

![select interface](images/attachinterfacehorizon.png){.thumbnail}

#### Über die OpenStack API

Bevor Sie fortfahren, empfehlen wir Ihnen folgende Anleitungen:

- [Vorbereitung Ihrer Umgebung zur Verwendung der OpenStack API](https://docs.ovh.com/de/public-cloud/prepare_the_environment_for_using_the_openstack_api/)
- [OpenStack Umgebungsvariablen einrichten](https://docs.ovh.com/de/public-cloud/set-openstack-environment-variables/)

Sammeln Sie zunächst alle notwendigen Informationen:

- **Identifizierung Ihrer Instanzen**

```bash
openstack server list
+--------------------------------------+-------------------+--------+---------------------------------------------------------------------+----------------------------------------+----------+
| ID                                   | Name              | Status | Networks                                                            | Image                                  | Flavor   |
+--------------------------------------+-------------------+--------+---------------------------------------------------------------------+----------------------------------------+----------+
| f095ad19-5c0a-4ef5-8e01-b3590bc9c6f1 | MyInstance        | ACTIVE |                                                                     | Windows Server 2016 Standard (Desktop) | win-b2-7 |
+--------------------------------------+-------------------+--------+---------------------------------------------------------------------+----------------------------------------+----------+
```


- **Identifizierung öffentlicher und privater Netzwerke**

```bash
openstack network list
-----------------------------------------------------------------------------------------+
| ID                                   | Name              | Subnets                                                                                                                                                                                                                                                                  |
+--------------------------------------+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 1ca87837-7860-47a3-8916-c9c516841bf2 | Ext-Net-Baremetal | 1db089a7-1bd9-449f-8e3b-4ea61e666320, 4a614403-b8aa-4291-bd59-0cb2c81c4deb                                                                                                                                                                                               |
| 7394fc68-0f77-40d7-a274-388e7e75d82c | vlan 0            | f3fb67dc-7419-49da-b26c-7f64c480eb63                                                                                                                                                                                                                                     |
| 7a0e67da-70f3-48ed-a6e7-5ec265916211 | private-net       | 57d9faac-f01c-43a2-8866-d9b1dd02cb9e, 5cb270a9-3795-4286-96fe-f3bfa3a328e5                                                                                                                                                                                               |
| b2c02fdc-ffdf-40f6-9722-533bd7058c06 | Ext-Net           | 0f11270c-1113-4d4f-98de-eba83445d962, 1a6c6b72-88e9-4e94-ac8b-61e6dbc4792c, 22e2d853-1b86-48f3-8596-9d12c7693dc7, 4aa6cac1-d5cd-4e25-b14b-7573aeabcab1, 7d6352a6-dbed-4628-a029-fcc3986ae7d6, 9f989c4b-c441-4678-b395-e082c300356e, b072b17b-ef1d-4881-98c7-e0d6a1c3dcea|
+--------------------------------------+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

Mit den zuvor abgerufenen Elementen können Sie einen öffentlichen Port mit dem Namen "Ext-Net" im Subnet "Ext-Net" erstellen und mit der Instanz verbinden.

```bash
openstack port create --network b2c02fdc-ffdf-40f6-9722-533bd7058c06 Ext-Net
+-------------------------+----------------------------------------------------------------------------------------+
| Field                   | Value                                                                                  |
+-------------------------+----------------------------------------------------------------------------------------+
| admin_state_up          | UP                                                                                     |
| allowed_address_pairs   |                                                                                        |
| binding_host_id         | None                                                                                   |
| binding_profile         | None                                                                                   |
| binding_vif_details     | None                                                                                   |
| binding_vif_type        | None                                                                                   |
| binding_vnic_type       | normal                                                                                 |
| created_at              | 2023-01-20T10:12:17Z                                                                   |
| data_plane_status       | None                                                                                   |
| description             |                                                                                        |
| device_id               |                                                                                        |
| device_owner            |                                                                                        |
| device_profile          | None                                                                                   |
| dns_assignment          | None                                                                                   |
| dns_domain              | None                                                                                   |
| dns_name                | None                                                                                   |
| extra_dhcp_opts         |                                                                                        |
| fixed_ips               | ip_address='2001:41d0:304:400::128f', subnet_id='4aa6cac1-d5cd-4e25-b14b-7573aeabcab1' |
|                         | ip_address='57.128.42.227', subnet_id='22e2d853-1b86-48f3-8596-9d12c7693dc7'           |
| id                      | ed34add5-aa76-4aab-97af-815724d76e2c                                                   |
| ip_allocation           | immediate                                                                              |
| mac_address             | fa:16:3e:68:35:9c                                                                      |
| name                    | Ext-Net                                                                                |
| network_id              | b2c02fdc-ffdf-40f6-9722-533bd7058c06                                                   |
| numa_affinity_policy    | None                                                                                   |
| port_security_enabled   | True                                                                                   |
| project_id              | 2098640de5e547289e3740b09e725ecc                                                       |
| propagate_uplink_status | None                                                                                   |
| qos_network_policy_id   | None                                                                                   |
| qos_policy_id           | None                                                                                   |
| resource_request        | None                                                                                   |
| revision_number         | 2                                                                                      |
| security_group_ids      | 9f60804a-0ecf-4738-a4d8-30a6bb0d20c2                                                   |
| status                  | DOWN                                                                                   |
| tags                    |                                                                                        |
| tenant_id               | 2098640de5e547289e3740b09e725ecc                                                       |
| trunk_details           | None                                                                                   |
| updated_at              | 2023-01-20T10:12:18Z                                                                   |
+-------------------------+----------------------------------------------------------------------------------------+
```

Rufen Sie die UUID des Ports "Ext-Net" ab:

```bash
openstack port list --name Ext-Net
+--------------------------------------+---------+-------------------+---------------------------------------------------------------------------------------+--------+
| ID                                   | Name    | MAC Address       | Fixed IP Addresses                                                                    | Status |
+--------------------------------------+---------+-------------------+---------------------------------------------------------------------------------------+--------+
| ed34add5-aa76-4aab-97af-815724d76e2c | Ext-Net | fa:16:3e:68:35:9c | ip_address='2001:41d0:304:400::128f', subnet_id='4aa6cac1-d5cd-4e25-b14b-7573aeabcab1'| DOWN   |
|                                      |         |                   | ip_address='57.128.42.227', subnet_id='22e2d853-1b86-48f3-8596-9d12c7693dc7'          |        |
+--------------------------------------+---------+-------------------+---------------------------------------------------------------------------------------+--------+
```

Verbinden Sie den Port mit der Instanz:

```bash
openstack server add port <server_id> <port_id>
```

#### Windows-System aktivieren

Um Ihr Windows-System zu aktivieren, müssen Sie PowerShell verwenden.

Wenn Sie sich in Ihrer Windows-Instanz eingeloggt haben, klicken Sie auf das `Startmenü`{.action} und dann auf das Icon von `Windows PowerShell`{.action}.

Geben Sie folgenden Befehl ein:

```bash
slmgr.vbs -ato
```

![Windows Key aktivieren](images/windowsactivation1.png){.thumbnail}

Die Windows-Lizenz wird für 180 Tage aktiviert.

Diese Operation muss alle 180 Tage wiederholt werden.

> [!primary]
>
> In der Zwischenzeit können Sie, wenn Sie Ihre Instanz vom öffentlichen Netzwerk isolieren möchten, den erstellten öffentlichen Port über Horizon oder die OpenStack API deaktivieren.
> Sie können den Netzwerk-Port auch direkt über Windows deaktivieren.
>

Um den Status der Lizenz und ihr Ablaufdatum zu überprüfen, verwenden Sie folgenden Befehl:

```bash
slmgr.vbs -dli
```

![Windows Key aktivieren](images/windowsactivation2.png){.thumbnail}

## Weiterführende Informationen

[Den Aktivierungsschlüssel Ihres Windows Servers korrigieren](https://docs.ovh.com/de/dedicated/windows-key/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
