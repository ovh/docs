---
title: 'vRack auf Ihren Public Cloud konfigurieren'
excerpt: 'Erfahren Sie hier, wie Sie ein vRack auf zwei oder mehr Public Cloud'
slug: public-cloud-vrack
section: vRack
order: 1
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 18.11.2021**

## Ziel

Das OVHcloud [vRack](https://www.ovh.de/loesungen/vrack/) ist ein privates Netzwerk, mit dem Sie die Adressierung zwischen mehreren dedizierten Servern von OVHcloud konfigurieren können. Sie können aber auch [Public Cloud Instanzen](https://www.ovhcloud.com/fr/public-cloud/) zu Ihrem privaten Netzwerk hinzufügen, um eine Infrastruktur mit physischen und virtuellen Ressourcen zu erstellen.

**Diese Anleitung hilft Ihnen bei der Konfiguration Ihrer Public Cloud Instanzen in Ihrem vRack.**

## Voraussetzungen

- Sie verfügen über ein [Public Cloud Projekt](https://docs.ovh.com/de/public-cloud/erstellung_public_cloud_projekt/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben einen [OpenStack-Benutzer erstellen](../../#einen-openstack-benutzer-erstellen). (optional)
- Grundlegende Netzwerkkenntnisse.

## Vorstellung der Interfaces

Egal, ob Sie Ihr vRack erstellen oder eine Instanz in diesem Netzwerk hinzufügen möchten, Sie können das OVHcloud Kundencenter, die OVHcloud APIv6, die OpenStack APIs oder das Horizon-Interface verwenden.

Je nach Ihrem technischen Profil und Ihren Bedürfnissen müssen Sie entscheiden, welches Interface oder welche Methode Sie verwenden. So werden wir Ihnen für jede Aktion die verschiedenen denkbaren Schritte vorschlagen.

**Hier eine kurze Beschreibung der möglichen Aktionen, je nach gewählter Methode/Interface:**

### OVHcloud Kundencenter

Das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ist ein vollständig und ausschließlich visuelles Interface, was es zu einem idealen Interface macht, wenn Sie nur ein einziges VLAN verwalten müssen. Sie können den privaten IP-Bereich nicht anpassen, der nur 10.x.x.x/16 sein wird.

Die VLANs werden standardmäßig in allen Zonen eingerichtet. Sie können nur die Gateways aktivieren oder nicht.

Sie können auch die Abrechnung Ihrer Dienste über Ihr OVHcloud Kundencenter verwalten.

### Horizon

Das [Interface-Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} (unabhängig von OVHcloud) ist die erste Implementierung des OpenStack-Dashboards, das ein Web-Benutzerinterface für OpenStack-Dienste, insbesondere Nova, Swift, Keystone.

Dieses vollständige und technische Interface erlaubt es Ihnen, fast alle OpenStack Aktionen zu verwalten. Dies wird eines der notwendigen Interfaces sein, wenn Sie mehr als zwei VLANs verwalten, private Netzwerkinterfaces zu Ihren Instanzen hinzufügen, personalisierte Images verwalten.

Lesen Sie die Anleitung [Auf das Horizon-Interface zugreifen](../erstellung_eines_zugangs_zu_horizon/), um sich mit Horizon vertraut zu machen.

> [!primary]
> Horizon mit Zonenfunktion: Denken Sie daran, Ihr geografisches Arbeitsgebiet ganz oben links in Ihrem Interface zu wählen (GRA5, SBG3, BHS1...)
>

### APIv6 OVHcloud

Jede Aktion, die Sie im OVHcloud Kundencenter durchführen, erfolgt auf der Grundlage der [OVHcloud APIv6](https://api.ovh.com/).
Sie können sogar über die APIs weiter gehen als in Ihrem Kundencenter.

Das Interface ist weniger visuell als das OVHcloud Kundencenter, ermöglicht Ihnen aber die Durchführung zahlreicher Aktionen. So können Sie Ihre VLANs verwalten und personalisieren, Interfaces zu Ihren Instanzen hinzufügen oder hochpersonalisierte Server erstellen.

Vor der Verwendung einer bestimmten API können Sie mehrere Informationen abrufen müssen.

Sie können einfach von unserer Webseite [aus auf die](https://api.ovh.com/) API zugreifen, aber auch Ihre PHP oder Python Skripte erstellen, um darauf zuzugreifen.

So können Sie grundlegende Tasks frei automatisieren, mit Skripten, optimieren Sie Ihre eigenen Funktionen usw.

Lesen Sie die [Anleitung Erste Schritte mit den OVHcloud APIs](../../api/first-steps-with-ovh-api/)(EN), um sich mit der Verwendung der OVHcloud APIv6 vertraut zu machen.

### OpenStack API

Public Cloud Dienste können nach dem Herunterladen und der Installation der OpenStack-Tools mithilfe von Linux- oder Windows-Kommandozeilen verwaltet werden.

Diese Methode erfordert gute Kenntnisse über Linux oder Windows, um sie zu nutzen. Sie ermöglicht es jedoch, die gesamte Leistung von OpenStack zu nutzen.

Je nach Schicht, die Sie verwalten möchten, verwenden Sie den **Nova** (Compute), **Neutron** (Netzwerk), **Glance** (Image) oder auch **Swift** (Object Storage) Client. Das letzte Kind der Familie, der OpenStack-Client, erlaubt es Ihnen, fast alle OpenStack-Schichten direkt zu verwalten.

Dank der OpenStack-API können Sie diese Verwaltung auch ganz einfach über Ihre Skripte automatisieren.

Um sich mit der OpenStack-API vertraut zu machen, lesen Sie zuerst folgende Anleitungen:

- [Umgebung für die Verwendung der OpenStack-API vorbereiten](../vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/).
- [OpenStack Umgebungsvariablen einrichten](../die-variablen-der-umgebung-openstack-laden/).

Sie können dann bei Bedarf die dedizierten OpenStack-APIs verwenden:

- Nova (compute)
- Glance (image)
- Cinder (image)
- Neutron (netzwerk)

> [!primary]
>In einigen Fällen wird es einfacher sein, die OpenStack-APIs zu verwenden, in anderen Fällen die Nova-APIs, Neutron-APIs.
>
> Je nach Version Ihres Kunden und Betriebssystems können auch bestimmte Funktionen der OpenStack-API fehlen.
In dieser Anleitung wurden Ihnen die einfachsten und intuitivsten Alternativen angeboten.
Sie können jederzeit die offizielle [Dokumentation von OpenStack einsehen](https://docs.openstack.org/xena/){.external}, wenn Sie diese weiter verwenden möchten.
>

## In der praktischen Anwendung

### Schritt 1: vRack aktivieren und verwalten

Zuerst müssen Sie ein vRack erstellen.

Dieses Produkt ist kostenlos und die Bereitstellung dauert nur wenige Minuten. Hierzu muss jedoch ein Bestellschein erstellt und validiert werden.

Sobald das vRack aktiv ist, finden Sie diesen Dienst unter der Bezeichnung "pn-xxxxxx".

#### Über das OVHcloud Kundencenter

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, gehen Sie in den Bereich `Public Cloud`{.action} und wählen Sie dann das Public Cloud Projekt Ihrer Wahl oben links aus.

![Projektauswahl](images/vrack2021-05.png){.thumbnail}

Klicken Sie auf `Private Network`{.action} im linken Menü.

![Private Network](images/vrack2021-02.png){.thumbnail}

Klicken Sie auf den Button `Um zu beginnen, erstellen Sie ein vRack`{.action}. Sie müssen dann entweder ein neues vRack erstellen oder ein bestehendes vRack verwenden. In unserem Beispiel erstellen wir ein neues vRack. Klicken Sie nach der Auswahl auf `Erstellen`{.action}.

![vRack erstellen](images/vrack3.png){.thumbnail}

Um die Konfiguration des vRack über das OVHcloud Kundencenter fortzusetzen, lesen Sie diese Anleitung weiter aus [Erstellen eines VLAN im vRack über das OVHcloud Kundencenter](./#erstellen-eines-vlan-im-ovhcloud-kundencenter).

#### Über die OVHcloud APIv6

Um einen vRack mit der OVHclow APIv6 zu aktivieren und zu verwalten, lesen Sie bitte [diesen Abschnitt](../public-cloud-vrack-apiv6/#step-1-activating-and-managing-a-vrack)(EN) des entsprechenden Leitfadens.

### Schritt 2: Erstellen eines VLAN im vRack

Es ist notwendig, ein VLAN (oder virtuelles lokales Netzwerk) zu erstellen, damit die mit dem vRack verbundenen Instanzen untereinander kommunizieren können.

Beim Public Cloud Angebot können Sie bis zu 4 000 VLANs innerhalb eines einzigen vRack erstellen. Das bedeutet, dass Sie jede private IP-Adresse bis zu 4 000 mal verwenden können.
So unterscheidet sich beispielsweise die IP 192.168.0.10 des VLAN 2 von der IP 192.168.0.10 des VLAN 42.

Dies kann nützlich sein, um Ihr vRack in mehrere virtuelle Netzwerke aufzuteilen.

Über das OVHcloud Kundencenter können Sie das VLAN Ihrer Wahl zuweisen, aber Sie können den IP-Bereich nicht anpassen. vRack ist in allen Bereichen aktiv.

Über die OVHcloud APIv6 können Sie alle Einstellungen anpassen: IP-Bereich (z. B. 10.0.0.0/16), Deployment-Zone, DHCP, Gateway.

> [!primary]
> Standardmäßig befinden Sie sich auf dem VLAN 0. Aufgrund der Funktionsweise der OpenStack-Infrastruktur müssen Sie die Nummer Ihres VLAN direkt auf Infrastrukturebene angeben.
>
> Im Gegensatz zu Dedicated Servern ist es nicht notwendig, das VLAN direkt auf eine Public Cloud Instanz "zu taggen". 
>
> Weitere Informationen zur Verwaltung der VLANs des vRack der Dedicated Server finden Sie in dieser Anleitung: [Mehrere VLANs im vRack erstellen](../../dedicated/vrack-vlan-erstellen/).

> [!warning]
> Da das vRack eine auf OVHcloud verwaltete Infrastruktur ist, können Sie es nur über das OVHcloud Kundencenter und die OVHcloud APIv6 verwalten.
>
>Da OpenStack nicht auf derselben Ebene der Infrastruktur liegt, können Sie die VLANs nicht über das Horizon-Interface oder die OpenStack-APIs personalisieren.
>

#### Erstellen eines VLAN im OVHCcloud Kundencenter

Sobald der vRack erstellt ist, navigieren Sie zum Abschnitt `Private Network`{.action}. 

![VLAN Erstellung](images/vrack2021-03.png){.thumbnail}

Klicken Sie nun auf ein `Privates Netzwerk erstellen`{.action}. Auf der nächsten Seite können Sie mehrere Einstellungen anpassen.

![add private network](images/vrack5.png){.thumbnail}

Setzen Sie einen Haken `VLAN-ID festlegen` definieren, wählen Sie eine VLAN-Nummer von 2 bis 4000 aus.

Wenn Sie das Feld Ein `VLAN-ID festlegen` nicht ankreuzen, sind Sie standardmäßig im VLAN 0.

Wenn Sie OVHcloud Dedicated Server mit getagetem VLAN kommunizieren lassen möchten, lesen Sie folgende Anleitung: [Mehrere VLANs im vRack erstellen](../../dedicated/vrack-vlan-erstellen/).

Der standardmäßige DHCP-Bereich ist 10.0.0.0/16. Um diesen IP-Bereich zu ändern, müssen Sie die OVHcloud APIv6 verwenden.

Bestätigen Sie die gewünschten Regionen, geben Sie einen Namen für Ihr privates Netzwerk ein und klicken Sie dann auf `Erstellen`{.action}, um dessen Erstellung zu starten. 

> [!primary]
> Die Erstellung des privaten Netzwerks kann einige Minuten in Anspruch nehmen.
>

#### Erstellen eines VLAN mit der OVHclove APIv6

Um ein VLAN mit der OVHCloud APIv6 zu erstellen, lesen Sie bitte [diesen Abschnitt](../public-cloud-vrack-apiv6/#step-3-creating-a-vlan-in-the-vrack_1)(EN) des entsprechenden Leitfadens.

### Schritt 3: Instanz in das vRack integrieren

Es können zwei Situationen auftreten:

- Die Instanz existiert noch nicht.
- Die Instanz existiert bereits und Sie müssen sie zum vRack hinzufügen.

#### Im Falle einer neuen Instanz

##### **Über das OVHcloud Kundencenter**

Die Anleitung [Erstellen der ersten Public Cloud-Instanz](../public-cloud-erste-schritte/). Bei der Erstellung einer Instanz können Sie in Schritt 4 ein privates Netzwerk angeben, in das Ihre Instanz integriert werden kann. Wählen Sie dann im dargestellten Drop-down-Menü Ihr zuvor erstelltes vRack aus.

![attach new instance](images/vrack6.png){.thumbnail}

> [!warning]
> Bei der Erstellung einer neuen Instanz können Sie Ihre Instanz nur mit einem vRack über das OVHcloud Kundencenter verbinden.
> Um mehrere verschiedene Interfaces hinzuzufügen, müssen Sie die OpenStack- oder Horizon-APIs verwenden.
>

##### **Über die OVHcloud APIv6**

Bitte lesen Sie [diesen Abschnitt](../public-cloud-vrack-apiv6/#step-4-integrating-an-instance-into-the-vrack_1)(EN).

##### **Über die OpenStack-APIs**

Um die OpenStack-APIs zu verwenden, denken Sie bitte daran, Ihre Arbeitsumgebung wie im ersten Teil [dieser Anleitung beschrieben vorzubereiten](./#openstack-api).

Wenn Sie eine Instanz direkt im vRack erstellen möchten, müssen Sie so verfahren.

###### Abruf der notwendigen Informationen

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

oder

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
> Notieren Sie sich die ID der Netzwerke, die Sie interessieren:
><br> - Ext-Net für eine öffentliche IP
><br> - Der für Ihre Konfiguration erforderliche(n) VLAN
>

Beachten Sie auch die folgenden Informationen, wie im [Benutzerhandbuch der Nova API](../starting-with-nova-api/)(EN) angegeben:

- ID oder Name des OpenStack SSH Keys
- ID des Instanz-Typs (flavor)
- ID des gewünschten Images (Betriebssystem, Snapshot...)

###### Inbetriebnahme der Instanz

Mit den zuvor abgerufenen Elementen können Sie eine Instanz erstellen, indem Sie diese direkt in das vRack integrieren:

```bash
nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]

Beispiel:
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
oder

```bash
openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]

Beispiel:
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

Hierzu können Sie ein einfaches Argument zur Funktion "—nic"hinzufügen:

--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]

Beispiel:

--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42

###### Überprüfung der Instanz

Nach einigen Augenblicken können Sie die Liste der existierenden Instanzen überprüfen, um den erstellten Server zu finden:

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


#### Im Falle einer bestehenden Instanz

Das OVHcloud Kundencenter erlaubt es, eine Instanz mit einem oder mehreren privaten Netzwerken zu verbinden, bietet jedoch keine erweiterte Konfiguration der Netzwerkinterfaces. Wenn Sie diese weiter personalisieren möchten, müssen Sie sie entweder über die OVHcloud APIv6, über OpenStack APIs oder über Horizon verwalten.

Fügen Sie dann einfach zusätzlich zu dem existierenden ein neues Netzwerkinterface zu Ihrem Server hinzu.

Wenn Sie zum Beispiel ein öffentliches *eth0* Interface haben, fügen Sie das *eth1* Interface hinzu.

> [!warning]
> Die Konfiguration dieses neuen Interfaces ist selten automatisch.
> Je nach Infrastruktur müssen Sie die Konfiguration daher als DHCP oder Festnetz-IP durchführen.
>


##### **Über das OVHcloud Kundencenter** 

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, gehen Sie in den Bereich `Public Cloud`{.action} und wählen Sie dann das betreffende Public Cloud Projekt oben links aus.

Klicken Sie links im Menü auf `Instances`{.action}. Klicken Sie dann auf `...`{.action} rechts neben der betreffenden Instanz und anschließend auf `Instanz-Details`{.action}.

![detail instance](images/vrack2021.png){.thumbnail}

Dadurch wird das Instanz-Dashboard geöffnet. Klicken Sie auf `...`{.action} neben "Private(s) Netzwerk(e)", und wählen Sie `Netzwerk hinzufügen`{.action}.

![Netzwerk anbinden](images/vrack2021-01.png){.thumbnail}

Wählen Sie im daraufhin angezeigten Popup-Fenster die privaten Netzwerke aus, die Sie mit Ihrer Instanz verbinden möchten, und klicken Sie auf `Verbinden`{.action}.

![Netzwerk anbinden](images/vrack9.png){.thumbnail}

##### **Verwaltung der Netzwerkinterfaces über die OVHcloud APIv6**

Bitte lesen Sie [diesen Abschnitt](../public-cloud-vrack-apiv6/#in-case-of-an-existing-instance_1)(EN) des entsprechenden Handbuchs.

##### **Verwaltung der Netzwerkinterfaces über OpenStack Horizon**

Loggen Sie sich bei der [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} mit der im [ersten Teil dieses Handbuchs](./#horizon) beschriebenen Methode ein.

Verbinden Sie sich gut mit Ihrem Arbeitsbereich:

![Horizon-Verbindung](images/horizon1.png){.thumbnail}

Gehen Sie dann zu `Compute` und dann zu `Instance`:

![Horizon Instanzen](images/horizon2.png){.thumbnail}

###### Ein privates Interface hinzufügen

Um ein Interface hinzuzufügen, klicken Sie in der Spalte "Actions" auf den Pfeil, um auf die Aktionen zuzugreifen, die auf der Instanz möglich sind. Klicken Sie dann auf `Attach Interface`{.action}:

![Horizon Attach Interface](images/horizon3.png){.thumbnail}

Wählen Sie Ihr Interface aus und bestätigen Sie:

![Horizon Attach Interface](images/horizon4.png){.thumbnail}

> [!primary]
> Ihre OVHcloud Instanz verfügt somit über ein neues Netzwerkinterface zusätzlich zum öffentlichen Interface (Ext-net).
><br>In der Zusammenfassung der Instanz können Sie die private IP-Adresse sehen, die Ihrem Interface automatisch zugewiesen wurde.
><br>Verwenden Sie diese Option, indem Sie Ihr Interface über DHCP konfigurieren oder indem Sie Ihre eigenen IPs über eine statische IP-Konfiguration verwenden.
>

###### Löschung eines privaten Interfaces

> [!warning]
> Das Löschen eines Interfaces ist endgültig.
>
>Wenn Sie das "Ext-Net"-Interface (öffentliche IP) löschen, wird diese Adresse freigegeben und wieder in Betrieb genommen. Sie könnten es sich also nicht neu zuordnen.
><br>Diese Aktion ist nur durchzuführen, wenn Sie Ihren Server im vRack (Ext-Net-Interface) isolieren oder aus einem VLAN entfernen möchten.
>

Um ein Interface zu löschen, klicken Sie in der Spalte "Action" auf den Pfeil, um auf die Aktionen zuzugreifen, die auf der Instanz möglich sind. Klicken Sie dann auf `Detach Interface`{.action}:

![Horizon detach interface](images/horizon5.png){.thumbnail}

Wählen Sie das zu löschende Interface aus und bestätigen Sie:

![Horizon detach interface](images/horizon6.png){.thumbnail}

##### **Verwaltung der Netzwerkinterfaces über die OpenStack APIs**

Um die OpenStack-APIs zu nutzen, sollten Sie, falls noch nicht geschehen, Ihre Arbeitsumgebung wie im [ersten Teil dieses Leitfadens](./#openstack-api) beschrieben vorbereiten.

Wenn Sie eine bestehende Instanz in das vRack integrieren möchten, müssen Sie so verfahren.

###### Abruf der notwendigen Informationen

Identifizierung Ihrer Instanzen:

```bash
openstack server list

+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| ID                                   | Name         | Status | Networks                                                               | Image Name |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MyVrack=192.168.0.124  | Debian 9   |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
```

oder

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

oder

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
><br> - Ext-Net für eine öffentliche IP
><br> - Der für Ihre Konfiguration erforderliche(n) VLAN
>

###### Ein privates Interface hinzufügen

Um ein neues Interface zu verbinden, können Sie folgenden Befehl ausführen:

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

oder

```bash
openstack server show <ID-instance>
+--------------------------------------+-------------------------------------------------------------------------+
| Field                                | Value                                                                   |
+--------------------------------------+-------------------------------------------------------------------------+
[...]
| addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx:xxxx myVLAN-42=192.168.0.x      | => Ihre öffentliche IP Ihre private IP                                                                     
[...]
```

###### Löschung eines Interfaces

> [!warning]
> Das Löschen eines Interfaces ist endgültig.
>
>Wenn Sie das "Ext-Net"-Interface (öffentliche IP) löschen, wird diese Adresse freigegeben und wieder in Betrieb genommen. Sie könnten es sich also nicht neu zuordnen.
><br>Diese Aktion ist nur durchzuführen, wenn Sie Ihren Server im vRack (Ext-Net-Interface) isolieren oder aus einem VLAN entfernen möchten.
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

oder

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

##  Weiterführende Informationen

[Konfiguration von vRack für die öffentliche Cloud mit OVHclow APIv6](../public-cloud-vrack-apiv6)(EN).

[Dedicated Server - Mehrere VLANs im vRack erstellen](../../dedicated/vrack-vlan-erstellen/).

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.