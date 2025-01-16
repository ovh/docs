---
title: 'vRack für Public Cloud konfigurieren'
excerpt: 'Erfahren Sie hier, wie Sie Ihr vRack mit Public Cloud Instanzen einrichten'
updated: 2024-12-23
---

## Ziel

Das OVHcloud [vRack](/links/network/vrack) ist ein privates Netzwerk, mit dem Sie die Adressierung zwischen mehreren Dedicated Servern von OVHcloud konfigurieren können. Sie können aber auch [Public Cloud Instanzen](/links/public-cloud/compute) zu Ihrem privaten Netzwerk hinzufügen, um eine Infrastruktur mit physischen und virtuellen Ressourcen zu erstellen.

**Diese Anleitung erklärt die Konfiguration Ihrer Public Cloud Instanzen im vRack.**

## Voraussetzungen

- Sie verfügen über ein [Public Cloud Projekt](/pages/public_cloud/compute/create_a_public_cloud_project) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben einen [OpenStack User erstellt](/pages/public_cloud/compute/create_and_delete_a_user) (optional).
- Sie haben Grundkenntnisse in Administration und Netzwerkkonfiguration.

## Vorstellung der Interfaces

Ob Sie Ihr vRack neu erstellen oder eine Instanz zum Netzwerk hinzufügen möchten, Sie können dazu das OVHcloud Kundencenter verwenden, die OVHcloud APIv6, die OpenStack API, das Horizon-Interface oder Terraform.

Je nach Ihrem technischen Profil und Ihren Bedürfnissen müssen Sie entscheiden, welches Interface oder welche Methode Sie verwenden. Für jede Aktion werden nachfolgend die möglichen Vorgehensweisen erklärt.

**Hier eine kurze Beschreibung der möglichen Aktionen, je nach gewählter Methode/Interface:**

### OVHcloud Kundencenter

Das [OVHcloud Kundencenter](/links/manager) ist ein ausschließlich visuelles Interface, ideal für die Verwaltung mehrerer VLANs. Sie haben auch die Möglichkeit, den privaten IP-Bereich anzupassen, vorkonfiguriert als 10.x.x.x/16.

Die VLANs werden in der ausgewählten Region eingesetzt. Außerdem haben Sie die Möglichkeit, Gateways zu aktivieren oder zu deaktivieren, DHCP-Verteilungen zu aktivieren, etc.

Sie können auch die Abrechnung Ihrer Dienste über Ihr OVHcloud Kundencenter verwalten.

### Horizon <a name="horizon"></a>

Das [Horizon-Interface](https://horizon.cloud.ovh.net/auth/login/){.external} (unabhängig von OVHcloud) ist die originale Implementierung eines Dashboards für OpenStack, das ein Web-Benutzerinterface für OpenStack Dienste, insbesondere Nova, Swift und Keystone bereitstellt.

Dieses umfassende technische Interface erlaubt es Ihnen, fast alle Aktionen in OpenStack zu verwalten. Dies wird eines der notwendigen Interfaces sein, wenn Sie mehr als zwei VLANs verwalten, private Netzwerkinterfaces zu Ihren Instanzen hinzufügen und personalisierte Images verwalten.

Lesen Sie die [Anleitung zu Horizon](/pages/public_cloud/compute/introducing_horizon), um sich mit dem Interface vertraut zu machen.

> [!primary]
> Horizon mit Zonenfunktion: Denken Sie daran, Ihre Arbeitszone oben links in Ihrem Interface zu wählen (GRA5, SBG3, BHS1, etc.).
>

### OVHcloud APIv6

Jede Aktion, die Sie im OVHcloud Kundencenter durchführen, erfolgt auf der Grundlage der [OVHcloud APIv6](https://api.ovh.com/).
Sie können mit der API darüber hinaus noch mehr Funktionen nutzen als über Ihr Kundencenter verfügbar sind.

Das Interface ist weniger visuell als das OVHcloud Kundencenter, ermöglicht Ihnen aber die Durchführung zahlreicher Aktionen. So können Sie Ihre VLANs verwalten und personalisieren, Interfaces zu Ihren Instanzen hinzufügen oder hochpersonalisierte Server erstellen.

Vor der Verwendung eines bestimmten API-Aufrufs müssen Sie möglicherweise mehrere Parameter abfragen.

Sie können einfach von unserer Webseite aus auf die [API](https://api.ovh.com/) zugreifen, aber auch Ihre PHP- oder Python-Skripte verwenden, um API-Funktionen auszuführen.

So können Sie Ihre Tasks frei automatisieren, Skripte verwenden, Ihre eigenen Funktionen optimieren etc.

Lesen Sie die [Anleitung zur OVHcloud API](/pages/manage_and_operate/api/first-steps), um sich mit der Verwendung der OVHcloud APIv6 vertraut zu machen.

### OpenStack API <a name="openstack-api"></a>

Public Cloud Dienste können nach dem Herunterladen und der Installation der OpenStack Tools mithilfe von Linux- oder Windows-Kommandozeilen verwaltet werden.

Diese Methode erfordert fortgeschrittenes Wissen zu Linux oder Windows. Sie ermöglicht es jedoch, die gesamte Leistung von OpenStack zu nutzen.

Je nach Verwaltungsebene verwenden Sie jeweils den Client für **Nova** (Compute), **Neutron** (Netzwerk), **Glance** (Image) oder **Swift** (Object Storage). Das letzte Element dieses Pakets, der OpenStack Client, erlaubt es Ihnen, fast alle Ebenen von OpenStack direkt zu verwalten.

Dank der OpenStack API können Sie diese Verwaltung auch ganz einfach über Ihre Skripte automatisieren.

Um sich mit der OpenStack API vertraut zu machen, lesen Sie zuerst folgende Anleitungen:

- [Umgebung für die Verwendung der OpenStack API vorbereiten](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- [OpenStack Umgebungsvariablen einrichten](/pages/public_cloud/compute/loading_openstack_environment_variables)

Sie können dann bei Bedarf die dedizierten OpenStack APIs verwenden:

- Nova (Compute)
- Glance (Image)
- Cinder (Image)
- Neutron (Netzwerk)

> [!primary]
> In einigen Fällen wird es einfacher sein, die OpenStack API zu verwenden, in anderen Fällen die APIs von Nova oder Neutron. 
>
> Je nach Version Ihres Clients und Betriebssystems können auch bestimmte Funktionen der OpenStack API fehlen. In dieser Anleitung werden je die einfachsten und intuitivsten Vorgehensweisen erklärt.<br>
> Sie können auch [die offizielle Dokumentation von OpenStack einsehen](https://docs.openstack.org/xena/){.external}, wenn Sie die API tiefergehend verwenden möchten.
>

### Terraform

Terraform kann auch für die Verwaltung von OVHcloud Infrastrukturen verwendet werden.

Dazu müssen Sie den richtigen Terraform-Anbieter und die richtige Terraform-Ressource auswählen. Weitere Informationen finden Sie in unserer Anleitung zur [Nutzung von Terraform mit OVHcloud (EN)](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

## In der praktischen Anwendung

### Schritt 1: vRack aktivieren und verwalten <a name="activation"></a>

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

Um die Konfiguration des vRack über das OVHcloud Kundencenter fortzusetzen, lesen Sie diese Anleitung weiter im Abschnitt "[Erstellen eines privaten Netzwerks im OVHcloud Kundencenter](#kundencenter)".

#### Über die OVHcloud APIv6

Um ein vRack mit der OVHcloud APIv6 zu aktivieren und zu verwalten, lesen Sie [diesen Abschnitt](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-1-activating-and-managing-a-vrack) (EN) der entsprechenden Anleitung.

### Schritt 2: Erstellen eines privaten Netzwerks im vRack

Es ist notwendig, ein virtuelles lokales Netzwerk (VLAN) zu erstellen, damit die mit dem vRack verbundenen Instanzen untereinander kommunizieren können.

Für Public Cloud können Sie bis zu 4000 VLANs innerhalb eines einzigen vRack erstellen. Das bedeutet, dass Sie jede private IP-Adresse bis zu 4000 mal verwenden können.  
So kann beispielsweise die IP 192.168.0.10 des VLAN 2 von der IP 192.168.0.10 des VLAN 42 unterschieden werden.

Dies ist nützlich, um Ihr vRack in mehrere virtuelle Netzwerke aufzuteilen.

Im OVHcloud Kundencenter können Sie das VLAN Ihrer Wahl zuweisen und den Bereich der privaten IP-Adressen personalisieren.

> [!primary]
> Standardmäßig wird VLAN 0 verwendet. Die Funktionsweise der OpenStack-Infrastruktur macht es notwendig, die ID Ihres VLAN direkt auf Infrastrukturebene anzugeben.
>
> Im Gegensatz zu Dedicated Servern ist es nicht notwendig, das VLAN direkt auf einer Public Cloud Instanz zu taggen. 
>
> Weitere Informationen zur Verwaltung der vRack VLANs für Dedicated Server finden Sie in dieser Anleitung: "[Mehrere VLANs im vRack erstellen](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)".

> [!warning]
> Da das vRack eine von OVHcloud verwaltete Infrastruktur ist, können Sie es nur über das OVHcloud Kundencenter und die OVHcloud APIv6 verwalten.
>
> Da OpenStack nicht auf derselben Ebene der Infrastruktur liegt, können Sie die VLANs nicht über das Horizon-Interface oder die OpenStack APIs personalisieren.
>

#### Erstellen eines privaten Netzwerks im OVHcloud Kundencenter <a name="kundencenter"></a>

Nachdem Sie Ihr vRack erstellt haben, erstellen Sie im nächsten Schritt ein privates Netzwerk.

Klicken Sie im Tab Public Cloud im linken Menü unter **Network** auf `Private Network`{.action}.

![VLAN Erstellung](images/vrack2022-03.png){.thumbnail}

Klicken Sie nun auf `Privates Netzwerk erstellen`{.action}. Auf der nächsten Seite können Sie mehrere Einstellungen anpassen.

Wählen Sie in Schritt 1 die Regionen aus, in denen Sie das private Netzwerk einrichten möchten.

![select region](images/vrack5-2024.png){.thumbnail}

Im nächsten Schritt erhalten Sie eine Reihe von Optionen:

![create network](images/vrack6-2022.png){.thumbnail}

Geben Sie im Feld **Name des privaten Netzwerks** einen Namen für Ihr privates Netzwerk ein.

**Erstellen Sie ein Gateway und verbinden Sie sich mit dem privaten Netzwerk**

Wählen Sie diese Option aus, wenn Sie beabsichtigen, Instanzen ausschließlich für ein privates Netzwerk zu erstellen. Weitere Informationen finden Sie in den folgenden Hilfen: [Creating a private network with Gateway (EN)](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) und [Public Cloud Instanz erstellen und einloggen](/pages/public_cloud/compute/public-cloud-first-steps).

> [!warning]
> Wenn die Option grau ist, bedeutet dies, dass sie mit der ausgewählten Region unvereinbar ist. Weitere Informationen finden Sie auf unserer Seite zur [Verfügbarkeit der Public Cloud Produkte für jede Region](/links/public-cloud/regions-pci).
>

**Netzwerk-Optionen von Layer 2:**

Setzen Sie einen Haken bei `VLAN-ID festlegen` und wählen Sie eine Nummer von 0 bis 4000 aus.

Wenn Sie dieses Feld nicht ankreuzen, wird eine zufällige VLAN-Nummer vergeben.


Wenn in diesem VLAN mit OVHcloud Dedicated Servern kommuniziert werden soll, lesen Sie folgende Anleitung: "[Mehrere VLANs im vRack erstellen](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)."

**Verteilungsoptionen für DHCP-Adressen**

Der DHCP-Bereich ist auf 10.0.0.0/16 voreingestellt. Sie können einen anderen privaten Bereich Ihrer Wahl verwenden.

Wenn Sie Ihre Wahl getroffen haben, klicken Sie auf `Erstellen`{.action}, um den Prozess zu starten.

> [!primary]
> Die Erstellung des privaten Netzwerks kann einige Minuten in Anspruch nehmen.
>

#### Erstellen eines privaten Netzwerks mit der OVHcloud APIv6 <a name="vlansetup"></a>

Um ein privates Netzwerk mit der OVHCloud APIv6 zu erstellen, folgen Sie [diesem Abschnitt](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-3-creating-a-vlan-in-the-vrack) der entsprechenden Anleitung (EN).

#### Ein privates Netzwerk über Terraform erstellen

In Terraform muss der Provider *openstack* verwendet werden. Ein vollständiges Beispiel für ein Terraform-Skript können Sie in [diesem Repository](https://github.com/yomovh/tf-at-ovhcloud/tree/main/private_network) herunterladen.

Der bezüglich OVHcloud relevante Part für die vRack-Integration ist der Parameter `value_specs`.

```python
resource "openstack_networking_network_v2" "tf_network" {
  name = "tf_network"
  admin_state_up = "true"
  value_specs = {
    "provider:network_type"    = "vrack"
    "provider:segmentation_id" = var.vlan_id
  }
}
resource "openstack_networking_subnet_v2" "tf_subnet"{
  name       = "tf_subnet"
  network_id = openstack_networking_network_v2.tf_network.id
  cidr       = "10.0.0.0/16"
  enable_dhcp       = true
}
```

### Schritt 3: Instanz in das vRack integrieren

Es können zwei Situationen auftreten:

- Die Instanz existiert noch nicht.
- Die Instanz existiert bereits und Sie müssen sie zum vRack hinzufügen.

**Im Fall einer neuen Instanz**

#### Über das OVHcloud Kundencenter

Folgen Sie der Anleitung zum [Erstellen einer Public Cloud-Instanz](/pages/public_cloud/compute/public-cloud-first-steps). Bei der Erstellung einer Instanz können Sie in Schritt 5 einen Netzwerkmodus und anschließend ein privates Netzwerk auswählen, in das Ihre Instanz integriert werden kann.

![attach new instance](images/network-selection.png){.thumbnail}

> [!warning]
> Bei der Erstellung einer neuen Instanz können Sie Ihre Instanz nur mit einem vRack über das OVHcloud Kundencenter verbinden.
> Um mehrere verschiedene Interfaces hinzuzufügen, müssen Sie die OpenStack API oder Horizon API verwenden.
>

#### Über die OVHcloud APIv6

Bitte folgen Sie [diesem Abschnitt](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-4-integrating-an-instance-into-the-vrack) (EN) der entsprechenden Anleitung.

**Im Fall einer bestehenden Instanz**

Das OVHcloud Kundencenter erlaubt es, eine Instanz mit einem oder mehreren privaten Netzwerken zu verbinden, bietet jedoch keine erweiterte Konfiguration der Netzwerkinterfaces. Wenn Sie diese weiter individualisieren möchten, muss die OVHcloud APIv6, die OpenStack APIs oder Horizon verwendet werden.

Fügen Sie dann einfach zusätzlich zu dem existierenden ein neues Netzwerkinterface zu Ihrem Server hinzu.

Wenn Sie zum Beispiel ein öffentliches Interface *eth0* haben, fügen Sie ein Interface *eth1* hinzu.

> [!warning]
> Die Konfiguration dieses neuen Interfaces erfolgt wahrscheinlich nicht automatisch.
> Je nach Infrastruktur müssen Sie die Konfiguration daher als DHCP oder statische Adresse einrichten.
>

#### Über das OVHcloud Kundencenter

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein, gehen Sie in den Bereich `Public Cloud`{.action} und wählen Sie dann das betreffende Public Cloud Projekt oben links aus.

Klicken Sie links im Menü auf `Instances`{.action}. Klicken Sie dann auf `...`{.action} rechts neben der betreffenden Instanz und anschließend auf `Instanz-Details`{.action}.

![Instance](images/vrack2021.png){.thumbnail}

Dadurch wird das Dashboard der Instanz geöffnet. Klicken Sie auf `...`{.action} neben "Private(s) Netzwerk(e)", und wählen Sie `Netzwerk hinzufügen`{.action}.

![Netzwerk anbinden](images/vrack2021-01.png){.thumbnail}

Wählen Sie im daraufhin angezeigten Popup-Fenster die privaten Netzwerke aus, die Sie mit Ihrer Instanz verbinden möchten, und klicken Sie auf `Verbinden`{.action}.

![Netzwerk anbinden](images/vrack9.png){.thumbnail}

#### Verwaltung der Netzwerkinterfaces über die OVHcloud APIv6

Lesen Sie [diesen Abschnitt](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#in-case-of-an-existing-instance) (EN) der entsprechenden Anleitung.

#### Verwaltung der Netzwerkinterfaces über OpenStack Horizon

Loggen Sie sich in [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} mit der im [ersten Teil dieser Anleitung](#horizon) beschriebenen Methode ein.

Wählen Sie die korrekte Zone im Menü aus.

![Horizon-Verbindung](images/horizon1.png){.thumbnail}

Öffnen Sie `Compute` und dann `Instances` links im Menü.

![Horizon Instanzen](images/horizon2.png){.thumbnail}

**Ein privates Interface hinzufügen**

Um ein Interface hinzuzufügen, klicken Sie in der Spalte "Actions" auf den Pfeil, um auf die Aktionen zuzugreifen, die auf der Instanz möglich sind. Klicken Sie dann auf `Attach Interface`{.action}.

![Horizon Attach Interface](images/horizon3.png){.thumbnail}

Wählen Sie Ihr Interface aus und bestätigen Sie.

![Horizon Attach Interface](images/horizon4.png){.thumbnail}

> [!primary]
> Ihre OVHcloud Instanz verfügt über ein neues Netzwerkinterface zusätzlich zum öffentlichen Interface ("Ext-net").
><br>In der Zusammenfassung zur Instanz können Sie die private IP-Adresse sehen, die dem Interface automatisch zugewiesen wurde.
><br>Das Interface muss über DHCP konfiguriert oder IP-Adressen über eine statische IP-Konfiguration zugewiesen werden.
>

**Löschung eines privaten Interfaces**

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

## Weiterführende Informationen

[Konfiguration von vRack für Public Cloud mit OVHcloud APIv6](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api) (EN)

[Dedicated Server - Mehrere VLANs im vRack erstellen](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.
