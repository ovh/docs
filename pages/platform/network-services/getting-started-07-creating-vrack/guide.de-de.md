---
title: 'vRack für Public Cloud konfigurieren'
excerpt: 'Erfahren Sie hier, wie Sie Ihr vRack mit Public Cloud Instanzen einrichten'
slug: public-cloud-vrack
section: Erste Schritte
order: 07
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 02.11.2022**

## Ziel

Das OVHcloud [vRack](https://www.ovh.de/loesungen/vrack/) ist ein privates Netzwerk, mit dem Sie die Adressierung zwischen mehreren Dedicated Servern von OVHcloud konfigurieren können. Sie können aber auch [Public Cloud Instanzen](https://www.ovhcloud.com/de/public-cloud/) zu Ihrem privaten Netzwerk hinzufügen, um eine Infrastruktur mit physischen und virtuellen Ressourcen zu erstellen.

**Diese Anleitung erklärt die Konfiguration Ihrer Public Cloud Instanzen im vRack.**

## Voraussetzungen

- Sie verfügen über ein [Public Cloud Projekt](https://docs.ovh.com/de/public-cloud/erstellung_public_cloud_projekt/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben einen [OpenStack User erstellt](https://docs.ovh.com/de/public-cloud/openstack-user-erstellen-loeschen/) (optional).
- Sie haben Grundkenntnisse in Administration und Netzwerkkonfiguration.

## Vorstellung der Interfaces

Ob Sie Ihr vRack neu erstellen oder eine Instanz zum Netzwerk hinzufügen möchten, Sie können dazu das OVHcloud Kundencenter, die OVHcloud APIv6, die OpenStack API oder das Horizon-Interface verwenden.

Je nach Ihrem technischen Profil und Ihren Bedürfnissen müssen Sie entscheiden, welches Interface oder welche Methode Sie verwenden. Für jede Aktion werden nachfolgend die möglichen Vorgehensweisen erklärt.

**Hier eine kurze Beschreibung der möglichen Aktionen, je nach gewählter Methode/Interface:**

### OVHcloud Kundencenter

Das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ist ein ausschließlich visuelles Interface, ideal zur Verwaltung eines einzigen VLANs. Sie können den privaten IP-Bereich (10.x.x.x/16) nicht anpassen.

Die VLANs werden standardmäßig in allen Zonen eingerichtet. Sie können nur die Gateways aktivieren und deaktivieren.

Sie können auch die Abrechnung Ihrer Dienste über Ihr OVHcloud Kundencenter verwalten.

### Horizon <a name="horizon"></a>

Das [Horizon-Interface](https://horizon.cloud.ovh.net/auth/login/){.external} (unabhängig von OVHcloud) ist die originale Implementierung eines Dashboards für OpenStack, das ein Web-Benutzerinterface für OpenStack Dienste, insbesondere Nova, Swift und Keystone bereitstellt.

Dieses umfassende technische Interface erlaubt es Ihnen, fast alle Aktionen in OpenStack zu verwalten. Dies wird eines der notwendigen Interfaces sein, wenn Sie mehr als zwei VLANs verwalten, private Netzwerkinterfaces zu Ihren Instanzen hinzufügen und personalisierte Images verwalten.

Lesen Sie die [Anleitung zu Horizon](https://docs.ovh.com/de/public-cloud/horizon/), um sich mit dem Interface vertraut zu machen.

> [!primary]
> Horizon mit Zonenfunktion: Denken Sie daran, Ihre Arbeitszone oben links in Ihrem Interface zu wählen (GRA5, SBG3, BHS1...).
>

### OVHcloud APIv6

Jede Aktion, die Sie im OVHcloud Kundencenter durchführen, erfolgt auf der Grundlage der [OVHcloud APIv6](https://api.ovh.com/).
Sie können mit der API darüber hinaus noch mehr Funktionen nutzen als über Ihr Kundencenter verfügbar sind.

Das Interface ist weniger visuell als das OVHcloud Kundencenter, ermöglicht Ihnen aber die Durchführung zahlreicher Aktionen. So können Sie Ihre VLANs verwalten und personalisieren, Interfaces zu Ihren Instanzen hinzufügen oder hochpersonalisierte Server erstellen.

Vor der Verwendung eines bestimmten API-Aufrufs müssen Sie möglicherweise mehrere Parameter abfragen.

Sie können einfach von unserer Webseite aus auf die [API](https://api.ovh.com/) zugreifen, aber auch Ihre PHP- oder Python-Skripte verwenden, um API-Funktionen auszuführen.

So können Sie Ihre Tasks frei automatisieren, Skripte verwenden, Ihre eigenen Funktionen optimieren etc.

Lesen Sie die [Anleitung zur OVHcloud API](https://docs.ovh.com/de/api/first-steps-with-ovh-api/), um sich mit der Verwendung der OVHcloud APIv6 vertraut zu machen.

### OpenStack API <a name="openstack-api"></a>

Public Cloud Dienste können nach dem Herunterladen und der Installation der OpenStack Tools mithilfe von Linux- oder Windows-Kommandozeilen verwaltet werden.

Diese Methode erfordert fortgeschrittenes Wissen zu Linux oder Windows. Sie ermöglicht es jedoch, die gesamte Leistung von OpenStack zu nutzen.

Je nach Verwaltungsebene verwenden Sie jeweils den Client für **Nova** (Compute), **Neutron** (Netzwerk), **Glance** (Image) oder **Swift** (Object Storage). Das letzte Element dieses Pakets, der OpenStack Client, erlaubt es Ihnen, fast alle Ebenen von OpenStack direkt zu verwalten.

Dank der OpenStack API können Sie diese Verwaltung auch ganz einfach über Ihre Skripte automatisieren.

Um sich mit der OpenStack API vertraut zu machen, lesen Sie zuerst folgende Anleitungen:

- [Umgebung für die Verwendung der OpenStack API vorbereiten](https://docs.ovh.com/de/public-cloud/vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/)
- [OpenStack Umgebungsvariablen einrichten](https://docs.ovh.com/de/public-cloud/die-variablen-der-umgebung-openstack-laden/)

Sie können dann bei Bedarf die dedizierten OpenStack APIs verwenden:

- Nova (Compute)
- Glance (Image)
- Cinder (Image)
- Neutron (Netzwerk)

> [!primary]
> In einigen Fällen wird es einfacher sein, die OpenStack API zu verwenden, in anderen Fällen die APIs von Nova oder Neutron. 
>
> Je nach Version Ihres Clients und Betriebssystems können auch bestimmte Funktionen der OpenStack API fehlen. In dieser Anleitung werden je die einfachsten und intuitivsten Vorgehensweisen erklärt.<br>
> Sie können auch [die offizielle Dokumentation von OpenStack einsehen](https://docs.openstack.org/xena/){.external}, wenn Sie diese tiefergehend verwenden möchten.
>

## In der praktischen Anwendung

### Schritt 1: vRack aktivieren und verwalten <a name="activation"></a>

Zuerst müssen Sie ein vRack erstellen.

Dieses Produkt ist kostenlos und die Bereitstellung dauert nur wenige Minuten. Hierzu muss jedoch ein Bestellschein erstellt und validiert werden.

Sobald das vRack aktiv ist, finden Sie diesen Dienst unter der Bezeichnung "pn-xxxxxx".

#### Über das OVHcloud Kundencenter

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie Ihr `Public Cloud`{.action} Projekt aus.

Klicken Sie auf `Private Network`{.action} im linken Menü.

![Private Network](images/vrack2021-02.png){.thumbnail}

Klicken Sie auf den Button `Um zu beginnen, erstellen Sie ein vRack`{.action}. Sie müssen dann entweder ein neues vRack erstellen oder ein bestehendes vRack verwenden. In unserem Beispiel erstellen wir ein neues vRack. Klicken Sie nach der Auswahl auf `Erstellen`{.action}.

![vRack erstellen](images/vrack3.png){.thumbnail}

Um die Konfiguration des vRack über das OVHcloud Kundencenter fortzusetzen, lesen Sie diese Anleitung weiter im Abschnitt "[Erstellen eines VLAN im OVHcloud Kundencenter](#kundencenter)".

#### Über die OVHcloud APIv6

Um ein vRack mit der OVHcloud APIv6 zu aktivieren und zu verwalten, lesen Sie [diesen Abschnitt](https://docs.ovh.com/gb/en/publiccloud/network-services/public-cloud-vrack-apiv6/#step-1-activating-and-managing-a-vrack) (EN) der entsprechenden Anleitung.

### Schritt 2: Erstellen eines VLAN im vRack

Es ist notwendig, ein virtuelles lokales Netzwerk (VLAN) zu erstellen, damit die mit dem vRack verbundenen Instanzen untereinander kommunizieren können.

Für Public Cloud können Sie bis zu 4000 VLANs innerhalb eines einzigen vRack erstellen. Das bedeutet, dass Sie jede private IP-Adresse bis zu 4000 mal verwenden können.
So kann beispielsweise die IP 192.168.0.10 des VLAN 2 von der IP 192.168.0.10 des VLAN 42 unterschieden werden.

Dies ist nützlich, um Ihr vRack in mehrere virtuelle Netzwerke aufzuteilen.

Über das OVHcloud Kundencenter können Sie das VLAN Ihrer Wahl zuweisen, aber Sie können den IP-Bereich nicht anpassen. vRack ist in allen Bereichen aktiv.

Über die OVHcloud APIv6 können Sie alle Einstellungen anpassen: IP-Bereich (z.B. 10.0.0.0/16), Deployment-Zone, DHCP, Gateway.

> [!primary]
> Standardmäßig wird VLAN 0 verwendet. Die Funktionsweise der OpenStack-Infrastruktur macht es notwendig, die ID Ihres VLAN direkt auf Infrastrukturebene anzugeben.
>
> Im Gegensatz zu Dedicated Servern ist es nicht notwendig, das VLAN direkt auf einer Public Cloud Instanz zu "taggen". 
>
> Weitere Informationen zur Verwaltung der vRack VLANs für Dedicated Server finden Sie in dieser Anleitung: "[Mehrere VLANs im vRack erstellen](https://docs.ovh.com/de/dedicated/vrack-vlan-erstellen/)".

> [!warning]
> Da das vRack eine von OVHcloud verwaltete Infrastruktur ist, können Sie es nur über das OVHcloud Kundencenter und die OVHcloud APIv6 verwalten.
>
>Da OpenStack nicht auf derselben Ebene der Infrastruktur liegt, können Sie die VLANs nicht über das Horizon-Interface oder die OpenStack APIs personalisieren.
>

#### Erstellen eines VLAN im OVHcloud Kundencenter <a name="kundencenter"></a>

Sobald ein vRack erstellt ist, gehen Sie zum Abschnitt `Private Network`{.action}. 

![VLAN Erstellung](images/vrack2021-03.png){.thumbnail}

Klicken Sie nun auf `Privates Netzwerk erstellen`{.action}. Auf der nächsten Seite können Sie mehrere Einstellungen anpassen.

![add private network](images/vrack5.png){.thumbnail}

Setzen Sie einen Haken bei `VLAN-ID festlegen` und wählen Sie eine Nummer von 2 bis 4000 aus.

Wenn Sie das Feld `VLAN-ID festlegen` nicht anhaken, wird VLAN 0 verwendet.

Wenn in diesem VLAN mit OVHcloud Dedicated Servern kommuniziert werden soll, lesen Sie folgende Anleitung: "[Mehrere VLANs im vRack erstellen](https://docs.ovh.com/de/dedicated/vrack-vlan-erstellen/)."

Der standardmäßige DHCP-Bereich ist 10.0.0.0/16. Um diesen IP-Bereich zu ändern, müssen Sie die OVHcloud APIv6 verwenden.

Bestätigen Sie die gewünschten Regionen, geben Sie einen Namen für Ihr privates Netzwerk ein und klicken Sie dann auf `Erstellen`{.action}, um dessen Erstellung zu starten. 

> [!primary]
> Die Erstellung des privaten Netzwerks kann einige Minuten in Anspruch nehmen.
>

#### Erstellen eines VLAN mit der OVHcloud APIv6

Um ein VLAN mit der OVHCloud APIv6 zu erstellen, folgen Sie [diesem Abschnitt](https://docs.ovh.com/gb/en/publiccloud/network-services/public-cloud-vrack-apiv6/#step-3-creating-a-vlan-in-the-vrack_1) (EN) der entsprechenden Anleitung.

### Schritt 3: Instanz in das vRack integrieren

Es können zwei Situationen auftreten:

- Die Instanz existiert noch nicht.
- Die Instanz existiert bereits und Sie müssen sie zum vRack hinzufügen.

#### Im Fall einer neuen Instanz

##### **Über das OVHcloud Kundencenter**

Folgen Sie der Anleitung zum [Erstellen einer Public Cloud-Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#create-instance). Bei der Erstellung einer Instanz können Sie in Schritt 4 ein privates Netzwerk angeben, in das Ihre Instanz integriert werden kann. Wählen Sie dann im dargestellten Drop-down-Menü Ihr zuvor erstelltes vRack aus.

![attach new instance](images/vrack6.png){.thumbnail}

> [!warning]
> Bei der Erstellung einer neuen Instanz können Sie Ihre Instanz nur mit einem vRack über das OVHcloud Kundencenter verbinden.
> Um mehrere verschiedene Interfaces hinzuzufügen, müssen Sie die OpenStack API oder Horizon API verwenden.
>

##### **Über die OVHcloud APIv6**

Bitte folgen Sie [diesem Abschnitt](https://docs.ovh.com/gb/en/publiccloud/network-services/public-cloud-vrack-apiv6/#step-4-integrating-an-instance-into-the-vrack_1) (EN) der entsprechenden Anleitung.

##### **Über die OpenStack APIs**

Um die OpenStack APIs zu verwenden, denken Sie bitte daran, Ihre Arbeitsumgebung wie im ersten Teil [dieser Anleitung beschrieben vorzubereiten](#openstack-api).

Wenn Sie eine Instanz direkt im vRack erstellen möchten, ist dies das zu verwendende Verfahren.

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

Beachten Sie auch die folgenden Informationen, wie in der [Anleitung zur Nova API](https://docs.ovh.com/gb/en/public-cloud/starting-with-nova-api/) (EN) beschrieben:

- ID oder Name des OpenStack SSH Keys
- ID des Instanz-Typs (Flavor)
- ID des gewünschten Images (Betriebssystem, Snapshot)

###### Inbetriebnahme der Instanz

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

```bash
--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]
```

Beispiel:

```bash
--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42
```

###### Überprüfung der Instanz

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


#### Im Fall einer bestehenden Instanz

Das OVHcloud Kundencenter erlaubt es, eine Instanz mit einem oder mehreren privaten Netzwerken zu verbinden, bietet jedoch keine erweiterte Konfiguration der Netzwerkinterfaces. Wenn Sie diese weiter individualisieren möchten, muss die OVHcloud APIv6, die OpenStack APIs oder Horizon verwendet werden.

Fügen Sie dann einfach zusätzlich zu dem existierenden ein neues Netzwerkinterface zu Ihrem Server hinzu.

Wenn Sie zum Beispiel ein öffentliches Interface *eth0* haben, fügen Sie ein Interface *eth1* hinzu.

> [!warning]
> Die Konfiguration dieses neuen Interfaces erfolgt wahrscheinlich nicht automatisch.
> Je nach Infrastruktur müssen Sie die Konfiguration daher als DHCP oder statische Adresse einrichten.
>


##### **Über das OVHcloud Kundencenter** 

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Public Cloud`{.action} und wählen Sie dann das betreffende Public Cloud Projekt oben links aus.

Klicken Sie links im Menü auf `Instances`{.action}. Klicken Sie dann auf `...`{.action} rechts neben der betreffenden Instanz und anschließend auf `Instanz-Details`{.action}.

![Instance](images/vrack2021.png){.thumbnail}

Dadurch wird das Dashboard der Instanz geöffnet. Klicken Sie auf `...`{.action} neben "Private(s) Netzwerk(e)", und wählen Sie `Netzwerk hinzufügen`{.action}.

![Netzwerk anbinden](images/vrack2021-01.png){.thumbnail}

Wählen Sie im daraufhin angezeigten Popup-Fenster die privaten Netzwerke aus, die Sie mit Ihrer Instanz verbinden möchten, und klicken Sie auf `Verbinden`{.action}.

![Netzwerk anbinden](images/vrack9.png){.thumbnail}

##### **Verwaltung der Netzwerkinterfaces über die OVHcloud APIv6**

Lesen Sie [diesen Abschnitt](https://docs.ovh.com/gb/en/publiccloud/network-services/public-cloud-vrack-apiv6/#in-case-of-an-existing-instance_1) (EN) der entsprechenden Anleitung.

##### **Verwaltung der Netzwerkinterfaces über OpenStack Horizon**

Loggen Sie sich in [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} mit der im [ersten Teil dieser Anleitung](#horizon) beschriebenen Methode ein.

Wählen Sie die korrekte Zone im Menü aus.

![Horizon-Verbindung](images/horizon1.png){.thumbnail}

Öffnen Sie `Compute` und dann `Instances` links im Menü.

![Horizon Instanzen](images/horizon2.png){.thumbnail}

###### Ein privates Interface hinzufügen

Um ein Interface hinzuzufügen, klicken Sie in der Spalte "Actions" auf den Pfeil, um auf die Aktionen zuzugreifen, die auf der Instanz möglich sind. Klicken Sie dann auf `Attach Interface`{.action}.

![Horizon Attach Interface](images/horizon3.png){.thumbnail}

Wählen Sie Ihr Interface aus und bestätigen Sie.

![Horizon Attach Interface](images/horizon4.png){.thumbnail}

> [!primary]
> Ihre OVHcloud Instanz verfügt über ein neues Netzwerkinterface zusätzlich zum öffentlichen Interface ("Ext-net").
><br>In der Zusammenfassung zur Instanz können Sie die private IP-Adresse sehen, die dem Interface automatisch zugewiesen wurde.
><br>Das Interface muss über DHCP konfiguriert oder IP-Adressen über eine statische IP-Konfiguration zugewiesen werden.
>

###### Löschung eines privaten Interfaces

> [!warning]
> Das Löschen eines Interfaces ist endgültig.
>
>Wenn Sie das Interface "Ext-Net" (öffentliche IP) löschen, wird diese Adresse freigegeben und wieder in Betrieb genommen. Sie kann also nicht erneut zugeordnet werden.
><br>Diese Aktion ist nur durchzuführen, wenn Sie Ihren Server im vRack ("Ext-Net" Interface) isolieren oder aus einem VLAN entfernen möchten.
>

Um ein Interface zu löschen, klicken Sie in der Spalte "Action" auf den Pfeil, um auf die Aktionen zuzugreifen, die auf der Instanz möglich sind. Klicken Sie dann auf `Detach Interface`{.action}:

![Horizon detach interface](images/horizon5.png){.thumbnail}

Wählen Sie das zu löschende Interface aus und bestätigen Sie:

![Horizon detach interface](images/horizon6.png){.thumbnail}

##### **Verwaltung der Netzwerkinterfaces über die OpenStack APIs**

Um die OpenStack APIs zu verwenden, denken Sie bitte daran, Ihre Arbeitsumgebung wie im ersten Teil [dieser Anleitung beschrieben vorzubereiten](#openstack-api).

Wenn Sie eine bestehende Instanz in das vRack integrieren möchten, ist dies das zu verwendende Verfahren.

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

###### Ein privates Interface hinzufügen

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

###### Löschung eines Interfaces

> [!warning]
> Das Löschen eines Interfaces ist endgültig.
>
>Wenn Sie das Interface "Ext-Net" (öffentliche IP) löschen, wird diese Adresse freigegeben und wieder in Betrieb genommen. Sie kann also nicht erneut zugeordnet werden.
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

[Konfiguration von vRack für Public Cloud mit OVHcloud APIv6](https://docs.ovh.com/gb/en/publiccloud/network-services/public-cloud-vrack-apiv6/) (EN)

[Dedicated Server - Mehrere VLANs im vRack erstellen](https://docs.ovh.com/de/dedicated/vrack-vlan-erstellen/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
