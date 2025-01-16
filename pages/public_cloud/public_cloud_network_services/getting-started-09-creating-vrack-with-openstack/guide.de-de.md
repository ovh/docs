---
title: 'Konfiguration des Public Cloud vRack mit OpenStack CLI'
excerpt: 'Erfahren Sie, wie Sie ein Public Cloud vRack mithilfe der OpenStack CLI aktivieren und verwalten.'
updated: 2025-01-13
---

## Ziel

Das OVHcloud [vRack](/links/network/vrack) ist ein privates Netzwerk, mit dem Sie die Adressierung zwischen mehreren Dedicated Servern von OVHcloud konfigurieren können. Sie können aber auch [Public Cloud Instanzen](/links/public-cloud/compute) zu Ihrem privaten Netzwerk hinzufügen, um eine Infrastruktur mit physischen und virtuellen Ressourcen zu erstellen.

**Diese Anleitung soll Sie bei der Konfiguration Ihrer Public Cloud Instanzen mit OpenStack CLI unterstützen**

## Voraussetzungen

- Sie verfügen über ein [Public Cloud Projekt](/pages/public_cloud/compute/create_a_public_cloud_project) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben einen [OpenStack User erstellt](/pages/public_cloud/compute/create_and_delete_a_user) (optional).
- Sie haben Grundkenntnisse in Administration und Netzwerkkonfiguration.

Bevor Sie beginnen, sollten Sie unbedingt diese Leitfäden lesen, um Ihre OpenStack-Umgebung richtig einzurichten:

- [System für die Verwendung der OpenStack API vorbereiten](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- [OpenStack Umgebungsvariablen einrichten](/pages/public_cloud/compute/loading_openstack_environment_variables)

## In der praktischen Anwendung

### Inhaltsübersicht

- [Schritt 1: vRack aktivieren und verwalten](#activating-vrack)
    - [Über das OVHcloud Kundencenter](#control-panel)
    - [Über die OVHcloud APIv6](#ovhcloud-api)
- [Schritt 2: Erstellen eines privaten Netzwerks im vRack](#private-network)
- [Schritt 3: Instanz in das vRack integrieren](#instance-vrack)
    - [Im Fall einer neuen Instanz](#new-instance)
    - [Im Fall einer bereits vorhandenen Instanz](#existing-instance)
- [Löschung eines Interfaces](#detach-interface)

<a name="activating-vrack"></a>

### Schritt 1: vRack aktivieren und verwalten

> [!warning]
> Da das vRack eine von OVHcloud verwaltete Infrastruktur ist, können Sie es nur über das OVHcloud Kundencenter und die OVHcloud APIv6 verwalten.
>

#### Über das OVHcloud Kundencenter

> [!primary]
> Dies gilt nicht für neu erstellte Projekte, da die automatisch mit einem vRack ausgeliefert werden. Um das vRack anzuzeigen, nachdem das Projekt erstellt wurde, gehen Sie in das Menü `Bare Metal Cloud`{.action} und klicken Sie auf `Network`{.action}. Klicken Sie auf `Privates Netzwerk vRack`{.action}, um alle vRacks anzuzeigen.
>

Wenn Sie ein älteres Projekt haben und kein vRack besitzen, müssen Sie eines bestellen. Dieses Produkt ist kostenlos und die Bereitstellung dauert nur wenige Minuten.

Gehen Sie in das Menü `Bare Metal Cloud`{.action} und klicken Sie auf die Schaltfläche `Bestellen`{.action}. Unter diesem Menü klicken Sie auf die Option `vRack`{.action}.

![vRack bestellen](images/ordering_vrack_2024.png){.thumbnail}

Sie werden auf eine andere Seite weitergeleitet, um die Bestellung zu bestätigen. Dieser Vorgang dauert einige Minuten.

Sobald der Dienst aktiv ist, finden Sie ihn in Ihrem Kundencenter im Bereich `Bare Metal Cloud`{.action} > `Network`{.action} > `Privates vRack Netzwerk`{.action} unter der Bezeichnung "pn-xxxxxx".

Wählen Sie in der Liste der wählbaren Dienste das Projekt aus, das Sie dem vRack hinzufügen möchten, und klicken Sie auf `Hinzufügen`{.action}.

![Projekt hinzufügen](images/addprojectvrack.png){.thumbnail}

<a name="ovhcloud-api"></a>

#### Über die OVHcloud APIv6

Um ein vRack mit der OVHcloud APIv6 zu aktivieren und zu verwalten, lesen Sie [diesen Abschnitt](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-1-activating-and-managing-a-vrack) (EN) der entsprechenden Anleitung.

<a name="private-network"></a>

### Schritt 2: Erstellen eines privaten Netzwerks im vRack

Es ist notwendig, ein virtuelles lokales Netzwerk (VLAN) zu erstellen, damit die mit dem vRack verbundenen Instanzen untereinander kommunizieren können.

Für Public Cloud können Sie bis zu 4000 VLANs innerhalb eines einzigen vRack erstellen. Das bedeutet, dass Sie jede private IP-Adresse bis zu 4000 mal verwenden können.  
So kann beispielsweise die IP 192.168.0.10 des VLAN 2 von der IP 192.168.0.10 des VLAN 42 unterschieden werden.

Dies ist nützlich, um Ihr vRack in mehrere virtuelle Netzwerke aufzuteilen.

Um das gleiche private Netzwerk zu erstellen, müssen Sie 2 OpenStack-Objekte erstellen: *network* und *subnet*.

Im folgenden Beispiel geben wir die `VLAN_ID`, zu der das Netzwerk gehören soll, über `--provider-network-type` und `--provider-segment` an.

Sie können diese Einstellungen auch entfernen. In diesem Fall wird eine verfügbare `VLAN_ID` verwendet.

```bash 
openstack network create --provider-network-type vrack --provider-segment 42 OS_CLI_private_network
openstack subnet create --dhcp --network OS_CLI_private_network OS_CLI_subnet --subnet-range 10.0.0.0/16
```

<a name="instance-vrack"></a>

### Schritt 3: Instanz in das vRack integrieren

Es können zwei Situationen auftreten:

- Die Instanz existiert noch nicht.
- Die Instanz existiert bereits und Sie müssen sie zum vRack hinzufügen.

<a name="new-instance"></a>

#### Im Fall einer neuen Instanz

**Abruf der notwendigen Informationen**

Identifizierung öffentlicher und privater Netzwerke:

```bash
openstack network list
 
+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN_0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

Alternative:

```bash
nova net-list
 
+--------------------------------------+------------+------+
| ID                                   | Label      | CIDR |
+--------------------------------------+------------+------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | None |
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN_0   | None |
+--------------------------------------+------------+------+
```

> [!primary]
> Notieren Sie sich die ID der passenden Netzwerke:
><br> - "Ext-Net" für eine öffentliche IP
><br> - Die für Ihre Konfiguration erforderliche(n) VLAN(s) 
>

Beachten Sie auch die folgenden Informationen, wie in der [Anleitung zur Nova API](/pages/public_cloud/compute/starting_with_nova) (EN) beschrieben:

- ID oder Name des OpenStack SSH Keys
- ID des Instanz-Typs (Flavor)
- ID des gewünschten Images (Betriebssystem, Snapshot)

**Inbetriebnahme der Instanz**

Mit den zuvor abgerufenen Elementen können Sie eine Instanz erstellen, indem Sie diese direkt in das vRack integrieren:

```bash
nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]
```

Beispiel:

```bash
nova boot --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NameOfInstance

+--------------------------------------+------------------------------------------------------+
| Property                             | Value                                                |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig                    | MANUAL                                               |
| OS-EXT-AZ:availability_zone          |                                                      |
| OS-EXT-STS:power_state               | 0                                                    |
| OS-EXT-STS:task_state                | scheduling                                           |
| OS-EXT-STS:vm_state                  | building                                             |
| OS-SRV-USG:launched_at               | -                                                    |
| OS-SRV-USG:terminated_at             | -                                                    |
| accessIPv4                           |                                                      |
| accessIPv6                           |                                                      |
| adminPass                            | xxxxxxxxxxxx                                         |
| config_drive                         |                                                      |
| created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| flavor                               | [Flavor type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
| hostId                               |                                                      |
| id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
| image                                | [Image type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
| key_name                             | [Name of key]                                        |
| metadata                             | {}                                                   |
| name                                 | [Name of instance]                                   |
| os-extended-volumes:volumes_attached | []                                                   |
| progress                             | 0                                                    |
| security_groups                      | default                                              |
| status                               | BUILD                                                |
| tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
| updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
+--------------------------------------+------------------------------------------------------+
```

Alternative:

```bash
openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]
```

Beispiel:

```bash
openstack server create --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NameOfInstance

+--------------------------------------+------------------------------------------------------+
| Property                             | Value                                                |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig                    | MANUAL                                               |
| OS-EXT-AZ:availability_zone          |                                                      |
| OS-EXT-STS:power_state               | 0                                                    |
| OS-EXT-STS:task_state                | scheduling                                           |
| OS-EXT-STS:vm_state                  | building                                             |
| OS-SRV-USG:launched_at               | -                                                    |
| OS-SRV-USG:terminated_at             | -                                                    |
| accessIPv4                           |                                                      |
| accessIPv6                           |                                                      |
| adminPass                            | xxxxxxxxxxxx                                         |
| config_drive                         |                                                      |
| created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| flavor                               | [Flavor type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
| hostId                               |                                                      |
| id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
| image                                | [Image type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
| key_name                             | [Name of key]                                        |
| metadata                             | {}                                                   |
| name                                 | [Name of instance]                                   |
| os-extended-volumes:volumes_attached | []                                                   |
| progress                             | 0                                                    |
| security_groups                      | default                                              |
| status                               | BUILD                                                |
| tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
| updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
+--------------------------------------+------------------------------------------------------+
```

Sie können die IP-Adresse der Instanz Ihres vRack Interface auf OpenStack-Ebene festlegen.

Hierzu können Sie ein einfaches Argument zur Funktion "--nic" hinzufügen:

`--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]`

Beispiel:

`--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42`

**Überprüfung der Instanz**

Nach kurzer Zeit können Sie die Liste der existierenden Instanzen überprüfen, um den erstellten Server zu finden:

```bash
openstack server list
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
| ID                                   |       Name          | Status | Networks                                         |     Image Name     |
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
| xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx | [Name of instance]  | ACTIVE | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack]  | [Name-of-instance] |
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
```

```bash
nova list
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
| ID                                   | Name               | Status | Task State | Power State | Networks                                         |
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
| xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   | [Name of instance] | ACTIVE | -          | Running     | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack]  |
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
```

<a name="existing-instance"></a>

#### Im Fall einer bereits vorhandenen Instanz

**Abruf der notwendigen Informationen**

Identifizierung Ihrer Instanzen:

```bash
openstack server list

+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| ID                                   | Name         | Status | Networks                                                               | Image Name |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MyVrack=192.168.0.124  | Debian 9   |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
```

Alternative:

```bash
nova list

+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| ID                                   | Name         | Status | Task State | Power State | Networks                                                             |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | -          | Running     | Ext-Net=xx.xx.xx.xx,2001:41d0:yyyy:yyyy::yyyy;MyVrack=192.168.0.124  |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
```

Identifizierung öffentlicher und privater Netzwerke:

```bash
openstack network list

+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVlan-0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

Alternative:

```bash
nova net-list

+--------------------------------------+------------+------+
| ID                                   | Label      | CIDR |
+--------------------------------------+------------+------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | None |
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVlan-0   | None |
+--------------------------------------+------------+------+
```

> [!primary]
> Notieren Sie sich die ID der Netzwerke, die Sie interessieren:
><br> - "Ext-Net" für eine öffentliche IP
><br> - Die für Ihre Konfiguration erforderliche(n) VLAN(s)
>

**Ein privates Interface hinzufügen**

Um ein neues Interface anzuhängen, können Sie folgenden Befehl ausführen:

```bash
nova interface-attach --net-id <VLAN-ID> <ID-instance>
```

Zum Beispiel:

```bash
nova interface-attach --net-id 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx
```

Sie können überprüfen, ob die Aktion erfolgreich durchgeführt wurde:

```bash
nova show <ID-instance>
 
+--------------------------------------+----------------------------------------------------------+
| Property                             | Value                                                    |
+--------------------------------------+----------------------------------------------------------+
| Ext-Net network                      | xx.xx.xx.xx, 2001:41d0:xxx:xxxx:xxxx                     | => Ihre öffentliche IP
| MyVLAN-42 network                    | 192.168.0.x                                              | => Ihre private IP
[...]
```

Alternative:

```bash
openstack server show <ID-instance>
+--------------------------------------+-------------------------------------------------------------------------+
| Field                                | Value                                                                   |
+--------------------------------------+-------------------------------------------------------------------------+
[...]
| addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx:xxxx myVLAN-42=192.168.0.x      | => Ihre öffentliche IP, Ihre private IP                                                                     
[...]
```

<a name="detach-interface"></a>

### Löschung eines Interfaces

> [!warning]
> Das Löschen eines Interfaces ist endgültig.
>
> Wenn Sie das Interface "Ext-Net" (öffentliche IP) löschen, wird diese Adresse freigegeben und wieder in Betrieb genommen. Sie kann also nicht erneut zugeordnet werden.
><br>Diese Aktion ist nur durchzuführen, wenn Sie Ihren Server im vRack ("Ext-Net" Interface) isolieren oder aus einem VLAN entfernen möchten.
>

Um ein Interface zu trennen, müssen Sie zunächst den Neutron-Port identifizieren, der erstellt wurde.

Hierfür können Sie folgende Befehle verwenden:

```bash
neutron port-list
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| id                                   | name | mac_address       | fixed_ips                                                                                         |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | {"subnet_id": "01234567-8901-abscdef12345678910abcd", "ip_address": "192.168.0.x"}                |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | {"subnet_id": "65432109-abcd-ef09-8765-43210abcdef1", "ip_address": "2001:41d0:xxx:xxxx::xxxx"}   |
|                                      |      |                   | {"subnet_id": "abcdef12-3456-7890-abcd-ef1234567890", "ip_address": "YY.YY.YY.YY"}                |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
```

Alternative:

```bash
openstack port list
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| ID                                   | Name | MAC Address       | Fixed IP Addresses                                                                        |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | ip_address='192.168.0.xx', subnet_id='301234567-8901-abscdef12345678910abcd'              |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | ip_address='2001:41d0:xxx:xxxx::xxxx', subnet_id='65432109-abcd-ef09-8765-43210abcdef1'   |
|                                      |      |                   | ip_address='YY.YY.YY.YY', subnet_id='abcdef12-3456-7890-abcd-ef1234567890'                |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
```

Nachdem Sie den zu löschenden Port identifiziert haben, können Sie folgenden Befehl ausführen:

```bash
nova interface-detach <ID_instance> <port_id>
```

Zum Beispiel:

```bash
nova interface-detach 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-abcd-ef01-2345-678910abcdef
```

## Weiterführende Informationen

[Konfiguration von vRack für Public Cloud mit OVHcloud APIv6](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api) (EN).

[Dedicated Server - Mehrere VLANs im vRack erstellen](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.