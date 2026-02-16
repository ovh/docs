---
title: 'vRack für Public Cloud konfigurieren'
excerpt: 'Erfahren Sie hier, wie Sie Ihr vRack mit Public Cloud Instanzen einrichten'
updated: 2025-12-23
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

OVHcloud [vRack](/links/network/vrack) ist eine Lösung für private Netzwerke, die es unseren Kunden ermöglicht, den Datenverkehr zwischen OVHcloud Dedizierten Servern sowie anderen OVHcloud Diensten zu leiten. Ebenso können Sie [Public Cloud Instanzen](/links/public-cloud/compute) in Ihr privates Netzwerk einfügen, um eine Infrastruktur aus physischen und virtuellen Ressourcen zu erstellen.

**Diese Anleitung erklärt, wie Sie Public Cloud Instanzen in Ihrem vRack konfigurieren.**

## Voraussetzungen

- Sie verfügen über ein [Public Cloud Projekt](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben einen [OpenStack User erstellt](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) (optional).
- Sie haben Grundkenntnisse in Administration und Netzwerkkonfiguration.

## Schnittstellen

Ein vRack erstellen oder eine Instanz in das Netzwerk hinzufügen kann mit dem OVHcloud Kundencenter, der OVHcloud APIv6, der OpenStack API, dem Horizon Interface oder Terraform erfolgen.

Je nach Ihrem technischen Profil und Ihren Anforderungen können Sie selbst entscheiden, welche Schnittstelle oder Methode Sie verwenden möchten. Für jede Option beschreibt die folgende Anleitung die notwendigen Schritte.

**Sie finden nachfolgend eine kurze Beschreibung der möglichen Aktionen je nach gewählter Methode/Schnittstelle.** <a name="horizon"></a>

/// details | OVHcloud Kundencenter

Das [OVHcloud Kundencenter](/links/manager) ist eine vollständig visuelles Interface, die ideal geeignet ist, um mehrere VLANs zu verwalten. Sie können außerdem den privaten IP-Bereich anpassen, der standardmäßig in 10.1.0.0/16 liegt.

Das VLAN wird in die ausgewählte Region bereitgestellt. Sie haben außerdem die Möglichkeit, Gateways zu aktivieren oder nicht, DHCP-Verteilungen zu ermöglichen etc.

Sie können außerdem die Abrechnung Ihrer Dienste im OVHcloud Kundencenter verwalten.

///

/// details | Horizon

[Horizon](https://horizon.cloud.ovh.net/auth/login/) (unabhängig von OVHcloud) ist die ursprüngliche Implementierung des OpenStack Dashboards, das eine Web-Benutzeroberfläche für OpenStack Dienste bereitstellt, einschließlich Nova, Swift, Keystone etc.

Diese multifunktionale, technische Oberfläche ermöglicht es Ihnen, fast alle OpenStack Aktionen zu verwalten. Sie ist notwendig, wenn Sie mehr als zwei VLANs verwalten müssen, private Netzwerkschnittstellen zu Ihren Instanzen hinzufügen, benutzerdefinierte Images verwalten etc.

Verwenden Sie [diese Anleitung](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon), um sich mit Horizon vertraut zu machen.

> [!primary]
> Horizon ist zonenbezogen, daher müssen Sie Ihre logische (geografische) Arbeitszone oben links in Ihrer Oberfläche auszuwählen (GRA5, SBG3, BHS1 etc.).
>

///

/// details | OVHcloud APIv6

Jede Aktion, die Sie in Ihrem OVHcloud Kundencenter durchführen, kann mit der [OVHcloud APIv6](/links/api) aufgerufen werden.  
Sie bietet sogar mehr Möglichkeiten als die grafische Oberfläche.

Die API-Schnittstelle ist weniger visuell als das OVHcloud Kundencenter, ermöglicht Ihnen aber die Durchführung einer großen Anzahl von Aktionen. Sie können Ihr VLAN verwalten und anpassen, Schnittstellen zu Ihren Instanzen hinzufügen oder Server mit hoher Anpassung erstellen.

Sie können sie einfach über [unsere Webseite](/links/api) erreichen, aber auch verwenden, um Ihre PHP- oder Python-Skripte zu erstellen.

Auf diese Weise können Sie grundlegende Aufgaben mit Skripten automatisieren, Ihre eigenen Funktionen optimieren und vieles mehr.

Sie müssen möglicherweise verschiedene Informationen abrufen, bevor Sie einige API-Aufrufe verwenden, da ein spezifischer Eingabewert erforderlich ist.

Verwenden Sie [diese Anleitung](/pages/manage_and_operate/api/first-steps), um mit der OVHcloud APIv6 zu beginnen.

///

/// details | OpenStack API

Public Cloud Dienste können nach dem Herunterladen und Installieren von OpenStack Tools über Befehlszeilen (Linux oder Windows) verwaltet werden.

Diese Methode erfordert ein gutes Wissen über Linux oder Windows, um sie nutzen zu können, ermöglicht Ihnen aber, die gesamte Leistung von OpenStack zu nutzen.

Je nach Schicht, die Sie verwalten möchten, müssen Sie den Clients von Nova (Compute), Neutron (Netzwerk), Glance (Image) oder Swift (Object Storage) verwenden. Die neueste Ergänzung zu dieser Palette, der OpenStack Client, ermöglicht es Ihnen, fast alle OpenStack Schichten direkt zu verwalten.

Mit der OpenStack API können Sie diese Verwaltung auch über Ihre Skripte automatisieren.

Um mehr über die Verwendung der OpenStack API zu erfahren, konsultieren Sie diese Anleitungen:

- [System für die Verwendung der OpenStack API vorbereiten](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [OpenStack Umgebungsvariablen einrichten](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

Sie können anschließend die für OpenStack vorgesehenen APIs nach Bedarf verwenden:

- Nova (Compute)
- Glance (Image)
- Cinder (Image)
- Neutron (Netzwerk)

> [!primary]
> In einigen Fällen ist es einfacher, die OpenStack API zu verwenden, in anderen Fällen hingegen Nova, Neutron etc.
>
> Darüber hinaus können einige Funktionen je nach Version Ihres Clients und Betriebssystems von der OpenStack API fehlen.  
> Um diese Anleitung für alle zugänglich zu machen, werden die einfachsten und intuitivsten Optionen vorgestellt.  
> Sie können sich bei Bedarf die [offizielle OpenStack Dokumentation](https://docs.openstack.org/) ansehen, um mehr über deren Nutzung zu erfahren.
>

///

/// details | OpenStack CLI

Sie können Ihre OVHcloud Public Cloud Dienste und vRacks direkt über Ihr Linux- oder Windows-Terminal mit der OpenStack CLI verwalten.

Diese Schnittstelle ermöglicht Ihnen die Verwaltung aller OpenStack Schichten:

- Nova: Instanzen (Compute)
- Neutron: Netzwerke
- Glance: Images
- Cinder: Volumes

Die CLI vereinigt diese Funktionen und kann in Ihre Skripte integriert werden, um Ihre Aufgaben zu automatisieren.

Bevor Sie beginnen, konsultieren Sie die folgenden Anleitungen:

- [System für die Verwendung der OpenStack API vorbereiten](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [OpenStack Umgebungsvariablen einrichten](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

> [!primary]
>
> Die OpenStack CLI ist nützlich, um Ihr vRack zu verwalten, aber einige Funktionen können je nach Version des Clients oder Betriebssystems variieren. Verwenden Sie die [offizielle OpenStack-Dokumentation](https://docs.openstack.org/).
>

///

/// details | Terraform

Terraform kann ebenfalls verwendet werden, um OVHcloud Infrastrukturen zu verwalten.

Dazu müssen Sie den richtigen Terraform-Provider und -Ressource auswählen. Weitere Informationen finden Sie in unserer Anleitung zu [der Verwendung von Terraform mit OVHcloud](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

///

## In der praktischen Anwendung

### Schritt 1: Aktivieren und Verwalten eines vRacks <a name="activation"></a>

> [!warning]
>
> Das vRack wird auf der OVHcloud Infrastruktur-Ebene verwaltet, was bedeutet, dass Sie es nur in Ihrem OVHcloud Kundencenter und der OVHcloud APIv6 verwalten können.
>

> [!tabs]
> Über das OVHcloud Kundencenter
>> > [!primary]
>> >
>> > Dies gilt nicht für neu erstellte Projekte, die automatisch mit einem vRack ausgeliefert werden. Um das vRack anzuzeigen, nachdem das Projekt erstellt wurde, gehen Sie in den Bereich `Network`{.action} und klicken Sie auf `Private vRack Netzwerk`{.action}, um das/die vRack(s) anzuzeigen.
>> >
>>
>> Wenn Sie ein älteres Projekt haben und kein vRack besitzen, müssen Sie eines bestellen. Die Nutzung des vRacks selbst ist kostenlos und kann innerhalb weniger Minuten ausgeliefert werden.
>>
>> Klicken Sie im linken Menü auf die Schaltfläche `Dienst hinzufügen`{.action} (Warenkorb-Symbol). Nutzen Sie den Filter oben auf der Seite oder scrollen Sie nach unten, um den Dienst `vRack`{.action} zu finden.
>>
>> ![vRack bestellen](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/orderingvrack25.png){.thumbnail}
>>
>> Sie werden auf eine andere Seite weitergeleitet, um die Bestellung zu bestätigen. Es wird einige Minuten dauern, bis das vRack in Ihrem Account eingerichtet ist.
>>
>> Sobald der Dienst aktiv ist, finden Sie ihn in Ihrem Kundencenter im Bereich `Network`{.action} > `Private vRack Netzwerk`{.action}, bezeichnet als "pn-xxxxxx".
>>
>> Klicken Sie auf Ihr vRack, wählen Sie dann aus der Liste der verfügbaren Dienste das Projekt aus, das Sie zum vRack hinzufügen möchten, und klicken Sie auf die Schaltfläche `Hinzufügen`{.action}.
>>
>> ![Projekt zum vRack hinzufügen](images/addprojectvrack.png){.thumbnail}
>>
>> Um die Konfiguration Ihres vRacks über das OVHcloud Kundencenter fortzusetzen, fahren Sie mit dieser Anleitung unter [Schritt 2: Ein privates Netzwerk im vRack erstellen](#create-pn-in-vrack) fort, im Tab **Über das OVHcloud Kundencenter**.
>>
> Über die OVHcloud APIv6
>>
>> **Schritt 1: Aktivieren und Verwalten eines vRacks**
>>
>> Melden Sie sich über die entsprechende Anleitung ([Erste Schritte mit der OVHcloud API](/pages/manage_and_operate/api/first-steps)) in die OVHcloud APIv6-Schnittstelle an und folgen Sie diesen Schritten:
>>
>> **Erstellen des Warenkorbs**
>>
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart
>> >
>>
>> > [!primary]
>> >
>> > Dieser Aufruf erstellt eine ID für Ihren "Warenkorb". Sie können so viele Artikel wie gewünscht hinzufügen, bevor Sie ihn bestätigen.
>> >
>> > In diesem Fall ist die Bestellung eines vRacks allein kostenlos. Notieren Sie Ihre Warenkorbnummer (cartId), sie wird für den Rest benötigt.
>> >
>>
>> **Abrufen der erforderlichen Informationen für die vRack-Bestellung**
>>
>> > [!api]
>> >
>> > @api {v1} /order GET /order/cart/{cartId}/vrack
>> >
>>
>> > [!primary]
>> >
>> > Dieser Aufruf ermöglicht es Ihnen, alle erforderlichen Informationen für die Bestellung des vRacks abzurufen. Kopieren Sie Folgendes:
>> >
>> > *cartId*, *duration*, *planCode* und *pricingMode*.
>> >
>>
>> **Hinzufügen des vRacks zum Warenkorb**
>>
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart/{cartId}/vrack
>> >
>>
>> > [!primary]
>> >
>> > Dieser Aufruf ermöglicht es Ihnen, das vRack durch Hinzufügen aller erforderlichen Informationen zur Bestellung in den Warenkorb zu legen.
>> >
>> > Bei einem vRack wären dies beispielsweise:
>> >
>> > cartId: [Ihre Warenkorb-ID]
>> >
>> > duration: "P1M"
>> >
>> > planCode: "vrack"
>> >
>> > pricingMode: "default"
>> >
>> > quantity: 1
>> >
>>
>> Nachdem Sie die Bestellung bestätigt haben, erhalten Sie eine Artikelnummer ("itemId"). Behalten Sie diese Information, sie ist nützlich, wenn Sie Änderungen vornehmen möchten, bevor der Warenkorb bestätigt wird.
>>
>> **Bestätigen des Warenkorbs**
>>
>> Nachdem Sie alle Artikel in Ihren Warenkorb gelegt haben, müssen Sie diesen bestätigen:
>>
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart/{cartId}/checkout
>> >
>>
>> > [!primary]
>> >
>> > Dieser Aufruf bestätigt den Warenkorb und erstellt eine Bestellung ("orderId"). Behalten Sie diese Information, sie ist notwendig, um die Bestellung zu bestätigen.
>> >
>>
>> **Bestätigen der endgültigen Bestellung**
>>
>> Um die Bestellung zu bestätigen, haben Sie zwei Möglichkeiten:
>>
>> - Sichtbare URL, wenn der Warenkorb bestätigt ist.  
>> URL-Beispiel: https://www.ovh.com/cgi-bin/order/displayOrder.cgi?orderId=12345678&orderPassword=xxxxxxxxxx
>>
>> - Bestätigen Sie mithilfe dieses Aufrufs:
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /me/order/{orderId}/payWithRegisteredPaymentMean
>> >
>>
>> > [!primary]
>> >
>> > Selbst wenn es sich um eine €0-Bestellung handelt, ist es notwendig, eine Bestellung (orderId) zu simulieren. Ihr Bestellformular wird dann bestätigt und die Bearbeitung beginnt.
>> >
>>
>> Nachdem die kostenlose Bestellung bestätigt wurde, kann es einige Minuten dauern, bis das vRack aktiviert wird.
>>
>> **Schritt 2: Ihr Public Cloud Projekt dem vRack hinzufügen**
>>
>> Sobald das vRack aktiv ist, müssen Sie Ihr Public Cloud Projekt (e) in das vRack integrieren.
>>
>> Folgen Sie unserer Anleitung: [Erste Schritte mit der OVHcloud API](/pages/manage_and_operate/api/first-steps).
>>
>> Falls die Projekt-ID unbekannt ist, ermöglichen die folgenden Aufrufe, sie abzurufen.
>>
>> **Identifizieren des Projekts**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> > [!primary]
>> >
>> > Dieser Aufruf ruft die Liste der Projekte ab.
>> >
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}
>> >
>>
>> > [!primary]
>> >
>> > Dieser Aufruf identifiziert das Projekt über das Feld "description".
>> >
>>
>> **Hinzufügen des Projekts zum vRack**
>>
>> Sobald die Projekt-ID und der vRack-Name bekannt sind, erfolgt die Zuordnung über den folgenden Aufruf:
>>
>> > [!api]
>> >
>> > @api {v1} /vrack POST /vrack/{serviceName}/cloudProject
>> >
>>
>> Füllen Sie die Felder mit den zuvor abgerufenen Informationen aus:
>>
>> - **serviceName**: vRack-Name in der Form "pn-xxxxxx".
>> - **project**: Die Public Cloud Projekt-ID in Form einer 32-stelligen Zeichenkette.
>>
>> > [!primary]
>> >
>> > Dieser Aufruf initialisiert die Zuordnung des Projekts und des vRacks. Die Task-ID muss anschließend abgerufen werden, um den Fortschritt zu überprüfen.
>> >
>>
>> **Überprüfen des Fortschritts des Tasks**
>>
>> Sie können den Fortschritt des Tasks mit diesem Aufruf einsehen:
>>
>> > [!api]
>> >
>> > @api {v1} /vrack GET /vrack/{serviceName}/cloudProject/{project}
>> >
>>
>> > [!primary]
>> >
>> > Dieser Aufruf ist optional und ermöglicht nur die Überprüfung des Status des Tasks. Sobald abgeschlossen, können Sie zum nächsten Schritt übergehen.
>> >
>>

### Schritt 2: Ein privates Netzwerk im vRack erstellen <a name="create-pn-in-vrack"></a>

Es ist notwendig, ein privates Netzwerk mit einem virtuellen lokalen Bereich (VLAN) zu erstellen, damit die angeschlossenen Instanzen miteinander kommunizieren können.

Mit dem Public Cloud-Dienst können Sie bis zu 4000 VLANs innerhalb eines vRacks erstellen. Das bedeutet, dass Sie jede private IP-Adresse bis zu 4000 Mal verwenden können.  
Somit ist beispielsweise 192.168.0.10 von VLAN 2 anders als die IP 192.168.0.10 von VLAN 42.

Dies kann nützlich sein, um Ihr vRack zwischen mehreren virtuellen Netzwerken zu segmentieren.

Über das OVHcloud Kundencenter und die OVHcloud APIv6 können Sie alle Einstellungen anpassen: Bereitstellungsmodus und Region, VLAN-Name und -ID, privater IP-Adressbereich (z. B. 10.0.0.0/16), DHCP und Gateway.

> [!primary]
> Auf dedizierten Servern wird standardmäßig VLAN 0 verwendet. Die OpenStack Infrastruktur erfordert, dass Sie Ihre VLAN-ID direkt auf der Infrastruktur-Ebene angeben.
>
> Im Gegensatz zu dedizierten Servern ist es nicht notwendig, ein VLAN direkt auf einer Public Cloud-Instanz zu kennzeichnen.
>
> Weitere Informationen zu diesem Thema finden Sie in der Anleitung "[Mehrere vLANs in einem vRack erstellen](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)".

> [!warning]
> vRack wird auf der OVHcloud Infrastruktur-Ebene verwaltet, was bedeutet, dass Sie es nur im OVHcloud Kundencenter und der OVHcloud APIv6 verwalten können.
>
> Da OpenStack nicht auf der gleichen Ebene liegt, können Sie VLANs nicht über Horizon oder OpenStack API anpassen.
>

> [!tabs]
> Über das OVHcloud Kundencenter
>> Sobald Ihr vRack eingerichtet ist, ist der nächste Schritt die Erstellung eines privaten Netzwerks.
>>
>> Klicken Sie im Bereich `Public Cloud`{.action} auf `Private Network`{.action} im linken Menü unter **Netzwerk**.
>>
>> ![VLAN-Erstellung](images/vrack2022-03.png){.thumbnail}
>>
>> Klicken Sie auf die Schaltfläche `Privates Netzwerk hinzufügen`{.action}. Die folgende Seite ermöglicht es Ihnen, mehrere Einstellungen anzupassen.
>>
>> Zunächst wählen Sie einen Bereitstellungsmodus und die Region aus, in der Sie das private Netzwerk erstellen möchten.
>>
>> ![Region auswählen](images/vrack5-2024.png){.thumbnail}
>>
>> Im nächsten Schritt werden Ihnen mehrere Optionen präsentiert:
>>
>> ![Netzwerk erstellen](images/vrack6-2022.png){.thumbnail}
>>
>> Im Feld **Name des privaten Netzwerks** legen Sie einen Namen für Ihr privates Netzwerk fest.
>>
>> **Netzwerkoption Layer 2**
>>
>> Wenn Sie das Feld `VLAN-ID festlegen`{.action} ankreuzen, können Sie manuell eine VLAN-ID zwischen 0 und 4000 wählen.
>>
>> Wenn Sie das Feld nicht ankreuzen, wird dem privaten Netzwerk eine zufällige VLAN-ID zugewiesen.
>>
>> Wenn Sie mit Servern in diesem VLAN kommunizieren möchten, konsultieren Sie die Anleitung: [Mehrere vLANs in einem vRack erstellen](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).
>>
>> **Verteilungsoptionen für DHCP-Adressen**
>>
>> Der Standard-DHCP-Bereich ist 10.1.0.0/16. Sie können einen anderen privaten Bereich Ihrer Wahl verwenden oder DHCP für dieses private Netzwerk deaktivieren.
>>
>> **Netzwerk-Gateway-Optionen**
>>
>> - **Die erste Adresse einer bestimmten CIDR als Standard-Gateway ankündigen (DHCP-Option 3)**: Wenn diese Option aktiviert ist, bewirbt der DHCP-Server die erste Adresse im CIDR als Standard-Gateway für Geräte, die mit dem Netzwerk verbunden sind.
>> - **Ein Gateway zuweisen und sich mit dem privaten Netzwerk verbinden**: Wählen Sie diese Option, wenn Sie beabsichtigen, Instanzen mit einem privaten Netzwerk zu erstellen. Weitere Informationen finden Sie in den folgenden Anleitungen: [Ein privates Netzwerk mit Gateway erstellen](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) und [Erstellen und Verbinden mit Ihrer ersten Public Cloud-Instanz](/pages/public_cloud/Compute/public-cloud-first-steps).
>>
>> > [!warning]
>> >
>> > Wenn die zweite Option grau ist, bedeutet dies, dass die ausgewählte Region sie nicht unterstützt. Weitere Informationen finden Sie auf unserer [Seite zur Regionenverfügbarkeit](/links/public-cloud/regions-pci).
>> > 
>>
>> Sobald Sie fertig sind, klicken Sie auf `Ihr privates Netzwerk konfigurieren`{.action}, um den Prozess zu starten.
>>
>> > [!primary]
>> >
>> > Die Erstellung des privaten Netzwerks kann mehrere Minuten dauern.
>> >
>>
> Über die OVHcloud APIv6 <a name="vlansetup"></a>
>>
>> Nachdem Sie sich in die [OVHcloud APIv6-Schnittstelle](/links/api) angemeldet haben, folgen Sie diesen Schritten:
>>
>> **Schritt 1: Abrufen der erforderlichen Informationen**
>>
>> **Public Cloud Projekt**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> > [!primary]
>> >
>> > Dieser Aufruf ruft die Liste der Projekte ab.
>> >
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}
>> >
>>
>> > [!primary]
>> >
>> > Dieser Aufruf identifiziert das Projekt über das Feld "description".
>> >
>>
>> **vRack**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/vrack
>> >
>>
>> > [!primary]
>> >
>> > Geben Sie im Feld "serviceName" die ID Ihres Projekts an. Speichern Sie die vRack-ID-Informationen in der Form "pn-xxxxx".
>> >
>>
>> **Schritt 2: Erstellen des privaten Netzwerks**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Füllen Sie die Felder mit den zuvor abgerufenen Informationen aus:
>> >
>> > - **serviceName**: Projekt-ID.
>> > - **name**: Name Ihres VLANs.
>> >
>> > Sie können das Feld "Region" leer lassen, um es für alle Regionen zu aktivieren.
>> >
>> > Der VLAN-Bezeichner (vlanId) ist erforderlich, wenn Sie ein bestimmtes VLAN erstellen möchten.
>> >
>>
>> Die Erstellung dauert einige Momente.
>>
>> Sie können Ihre VLAN-Informationen mit dem folgenden Aufruf überprüfen:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Dieser Aufruf ruft die "networkId" in dieser Form ab: name-vrack_vlanId.
>> >
>> > Beispiel: VLAN 42: pn-xxxxxx_42.
>> >
>>
>> **Schritt 3: Erstellen eines Subnetzes**
>>
>> Standardmäßig wird folgender IP-Adressbereich verwendet, wenn kein Subnetz hinzugefügt wird:
>>
>> ```
>> 10.1.0.0/16
>> ```
>>
>> Wenn Sie die IP-Zuweisung selbst verwalten möchten, müssen Sie ein Subnetz erstellen.
>>
>> Dazu müssen Sie nach der Erstellung des VLANs für jede betroffene Region ein Subnetz mit folgendem API-Aufruf erstellen:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/network/private/{networkId}/subnet
>> >
>>
>> Füllen Sie die Felder gemäß der folgenden Tabelle aus.
>>
>> | Feld        | Beschreibung                                                                                           |
>> | ----------- | ------------------------------------------------------------------------------------------------------ |
>> | serviceName | ID des Projekts.                                                                                       |
>> | networkId   | Ihre Netzwerk-ID, die in den vorherigen Schritten ermittelt wurde. Beispiel: pn-xxxxxx_42 für VLAN 42. |
>> | dhcp        | Kontrollkästchen zum Aktivieren / Deaktivieren von DHCP im VLAN.                                       |
>> | end         | Letzte Adresse des Subnetzes in dieser Region. Beispiel: 192.168.1.50.                                 |
>> | network     | IP-Block des Subnetzes. Beispiel: 192.168.1.0/24.                                                      |
>> | region      | Beispiel: SBG3.                                                                                        |
>> | start       | Erste Adresse des Subnetzes in dieser Region. Beispiel: 192.168.1.15.                                  |
>> 
>> > [!primary]
>> >
>> > In diesem Schritt wird das Subnetz pro Region erstellt. Sie können die Zuweisung privater IP-Adressen dynamisch über DHCP aktivieren oder deaktivieren.
>> >
>> > Sie müssen diesen Vorgang für jede Region wiederholen, in der Ihre Instanzen vorhanden sind.
>> 
>> > [!warning]
>> >
>> > Achten Sie darauf, die IP-Adressbereiche für die verschiedenen Regionen voneinander zu trennen. Zum Beispiel:
>> >
>> > - Von 192.168.0.2 bis 192.168.0.254 für SBG1.
>> > - Von 192.168.1.2 bis 192.168.1.254 für GRA1.
>> >
>>
> Über Terraform
>> In Terraform müssen Sie den OpenStack-Provider verwenden. Ein Beispiel für ein vollständiges Terraform-Skript können Sie aus [diesem GitHub-Repository](https://github.com/yomovh/tf-at-ovhcloud/tree/main/private_network) herunterladen.
>>
>> Der für OVHcloud spezifische Teil für die vRack-Integration ist der Parameter `value_specs`.
>>
>> ```python
>> resource "openstack_networking_network_v2" "tf_network" {
>>   name = "tf_network"
>>   admin_state_up = "true"
>>   value_specs = {
>>     "provider:network_type"    = "vrack"
>>     "provider:segmentation_id" = var.vlan_id
>>   }
>> }
>> resource "openstack_networking_subnet_v2" "tf_subnet"{
>>   name       = "tf_subnet"
>>   network_id = openstack_networking_network_v2.tf_network.id
>>   cidr       = "10.1.0.0/16"
>>   enable_dhcp       = true
>> }
>> ```
>>
> Über die OpenStack CLI
>> Im folgenden Beispiel geben wir die `VLAN_ID`, zu der das Netzwerk gehören soll, über die Parameter `--provider-network-type` und `--provider-segment` an.
>>
>> Sie können diese Parameter entfernen. In diesem Fall wird eine verfügbare `VLAN_ID` automatisch verwendet.
>>
>> ```bash
>> openstack network create --provider-network-type vrack --provider-segment 42 OS_CLI_private_network
>> openstack subnet create --dhcp --network OS_CLI_private_network OS_CLI_subnet --subnet-range 10.1.0.0/16
>> ```
>>

### Schritt 3: Integrieren einer Instanz in vRack <a name="instance-integration"></a>

Es gibt zwei mögliche Szenarien:

- Die zu integrierende Instanz existiert noch nicht.
- Eine vorhandene Instanz muss dem vRack hinzugefügt werden.

/// details | **Im Fall einer neuen Instanz**

> [!tabs]
> Über das OVHcloud Kundencenter
>> Wenn Sie Unterstützung benötigen, folgen Sie zunächst dieser Anleitung: [Erstellen einer Instanz im OVHcloud Kundencenter](/pages/public_cloud/Compute/public-cloud-first-steps). Beim Erstellen einer Instanz können Sie in Schritt 5 einen Netzwerkmodus wählen, gefolgt von einem privaten Netzwerk, in das Sie Ihre Instanz integrieren können.
>>
>> ![attach new instance](images/network-selection.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Sie können Ihre Instanz **nur mit einem** vRack über das OVHcloud Kundencenter verbinden.
>> >
>> > Um mehrere Schnittstellen hinzuzufügen, müssen Sie OpenStack oder Horizon verwenden.
>> >
>>
> Über die OVHcloud APIv6
>> Nachdem Sie sich bei der [OVHcloud APIv6-Schnittstelle](/links/api) angemeldet haben, folgen Sie diesen Schritten:
>>
>> **Schritt 1: Erforderliche Informationen abrufen**
>>
>> **Projekt-ID abrufen**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> **NetworkID des öffentlichen Netzwerks (Ext-Net) abrufen**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/public
>> >
>>
>> **NetworkID des privaten Netzwerks (vRack-Schnittstelle, die zuvor erstellt wurde) abrufen**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Der Bezeichner hat die Form: "pn-xxxxx_yy", wobei yy die VLAN-Nummer ist.
>> >
>>
>> **ID des ausgewählten Instanztyps (flavorId) abrufen**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/flavor
>> >
>>
>> > [!primary]
>> >
>> > Sie können die Liste durch Angabe der Region beschränken, in der Ihre Instanz erstellt wird.
>> >
>>
>> **ID des ausgewählten Images (imageId) abrufen**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/image
>> >
>>
>> > [!primary]
>> >
>> > Sie können die Liste durch Angabe der Region beschränken, in der Ihre Instanz erstellt wird.
>> >
>>
>> **ID Ihrer OpenStack-SSH-Schlüssels (sshKeyId) abrufen**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/sshkey
>> >
>>
>> Wenn Sie noch keinen SSH-Schlüssel in Ihrem OVHcloud Kundencenter hinzugefügt haben, können Sie dies mit dem folgenden Aufruf tun:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/sshkey
>> >
>>
>> ***Instanz bereitstellen**
>>
>> Sobald alle für die Bereitstellung erforderlichen Elemente zusammengefasst sind, können Sie den folgenden Aufruf verwenden:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/instance
>> >
>>
>> Sie müssen mindestens die folgenden Felder ausfüllen:
>>
>> |Feld|Beschreibung| 
>> |---|---| 
>> |serviceName|ID des Public Cloud Projekts.|
>> |flavorId|ID des Instanztyps (z. B. D2-2, B2-7, WIN-R2-15 etc.).|
>> |imageId|ID des Images für die Bereitstellung (z. B. Debian 9, Centos 7 etc.).|
>> |name|Name Ihrer Instanz.|
>> |networks|Im Abschnitt "networkId" geben Sie die Kennung des öffentlichen Netzwerks (Ext-Net) oder Ihrer VLAN (pn-xxxxxx_yy) an. Sie können auf die "+"-Schaltfläche klicken, um weitere Netzwerke hinzuzufügen.|
>> |region|Region für die Bereitstellung Ihrer Instanz (z. B. GRA5).|
>> |sshKeyId|ID Ihres OpenStack-SSH-Schlüssels.|
>>
>> Sobald der Aufruf abgeschlossen ist und alle Informationen korrekt ausgefüllt wurden, wird die Instanz mit einer oder mehreren Netzwerkschnittstellen erstellt.
>>
>> > [!warning]
>> >
>> > Abhängig vom Betriebssystem müssen Sie Ihre privaten Netzwerkschnittstellen manuell konfigurieren, damit sie berücksichtigt werden.<br>
>> > Da OpenStack die öffentliche Schnittstelle der vRack-Schnittstelle nicht priorisieren kann, kann die vRack-Schnittstelle manchmal als Standardroute gelten.<br>
>> > Die direkte Konsequenz ist, dass die Instanz über eine öffentliche IP nicht erreichbar ist.<br>
>> > Ein oder mehrere Neustarts der Instanz über das Control Panel können diese Situation beheben.<br>
>> > Eine andere Lösung besteht darin, sich über einen anderen Server im gleichen privaten Netzwerk mit der Instanz zu verbinden. Sie können auch die Netzwerkkonfiguration der Instanz über Rescue-Modus korrigieren.
>> >
>>
> Über die OpenStack CLI
>> Die folgenden Schritte sind erforderlich, um eine Instanz direkt im vRack zu erstellen.
>>
>> **Erforderliche Informationen abrufen**
>>
>> Öffentliche und private Netzwerke:
>>
>> ```bash
>> openstack network list
>> 
>> +--------------------------------------+------------+-------------------------------------+
>> | ID                                   | Name       | Subnets                             |
>> +--------------------------------------+------------+-------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN_0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
>> +--------------------------------------+------------+-------------------------------------+
>> ```
>>
>> oder
>>
>> ```bash
>> nova net-list
>> 
>> +--------------------------------------+------------+------+
>> | ID                                   | Label      | CIDR |
>> +--------------------------------------+------------+------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | None |
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN_0   | None |
>> +--------------------------------------+------------+------+
>> ```
>>
>> > [!primary]
>> >
>> > Sie müssen sich die Netzwerk-IDs notieren, die Sie interessieren:
>> >
>> > - Ext-Net für eine öffentliche IP-Adresse
>> > - Die VLANs, die für Ihre Konfiguration erforderlich sind
>> >
>>
>> Notieren Sie auch die in der [Nova API-Benutzeranleitung](/pages/public_cloud/Compute/starting_with_nova) beschriebenen Informationen:
>>
>> - ID oder Name des OpenStack-SSH-Schlüssels
>> - ID des Instanztyps (flavor)
>> - ID des gewünschten Images (Betriebssystem, Snapshot etc.)
>>
>> **Instanz bereitstellen**
>>
>> Mit den zuvor abgerufenen Elementen kann eine Instanz erstellt werden, die direkt im vRack integriert ist:
>>
>> ```bash
>> nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]
>> ```
>>
>> Beispiel:
>>
>> ```bash
>> nova boot --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NameOfInstance
>>
>> +--------------------------------------+------------------------------------------------------+
>> | Property                             | Value                                                |
>> +--------------------------------------+------------------------------------------------------+
>> | OS-DCF:diskConfig                    | MANUAL                                               |
>> | OS-EXT-AZ:availability_zone          |                                                      |
>> | OS-EXT-STS:power_state               | 0                                                    |
>> | OS-EXT-STS:task_state                | scheduling                                           |
>> | OS-EXT-STS:vm_state                  | building                                             |
>> | OS-SRV-USG:launched_at               | -                                                    |
>> | OS-SRV-USG:terminated_at             | -                                                    |
>> | accessIPv4                           |                                                      |
>> | accessIPv6                           |                                                      |
>> | adminPass                            | xxxxxxxxxxxx                                         |
>> | config_drive                         |                                                      |
>> | created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | flavor                               | [Flavor type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
>> | hostId                               |                                                      |
>> | id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
>> | image                                | [Image type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
>> | key_name                             | [Name of key]                                        |
>> | metadata                             | {}                                                   |
>> | name                                 | [Name of instance]                                   |
>> | os-extended-volumes:volumes_attached | []                                                   |
>> | progress                             | 0                                                    |
>> | security_groups                      | default                                              |
>> | status                               | BUILD                                                |
>> | tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> | updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> +--------------------------------------+------------------------------------------------------+
>> ```
>>
>> oder
>>
>> ```bash
>> openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]
>> ```
>>
>> Beispiel:
>>
>> ```bash
>> openstack server create --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NameOfInstance
>>
>> +--------------------------------------+------------------------------------------------------+
>> | Property                             | Value                                                |
>> +--------------------------------------+------------------------------------------------------+
>> | OS-DCF:diskConfig                    | MANUAL                                               |
>> | OS-EXT-AZ:availability_zone          |                                                      |
>> | OS-EXT-STS:power_state               | 0                                                    |
>> | OS-EXT-STS:task_state                | scheduling                                           |
>> | OS-EXT-STS:vm_state                  | building                                             |
>> | OS-SRV-USG:launched_at               | -                                                    |
>> | OS-SRV-USG:terminated_at             | -                                                    |
>> | accessIPv4                           |                                                      |
>> | accessIPv6                           |                                                      |
>> | adminPass                            | xxxxxxxxxxxx                                         |
>> | config_drive                         |                                                      |
>> | created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | flavor                               | [Flavor type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
>> | hostId                               |                                                      |
>> | id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
>> | image                                | [Image type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
>> | key_name                             | [Name of key]                                        |
>> | metadata                             | {}                                                   |
>> | name                                 | [Name of instance]                                   |
>> | os-extended-volumes:volumes_attached | []                                                   |
>> | progress                             | 0                                                    |
>> | security_groups                      | default                                              |
>> | status                               | BUILD                                                |
>> | tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> | updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> +--------------------------------------+------------------------------------------------------+
>> ```
>>
>> Sie können die IP-Adresse der Instanz Ihrer vRack-Schnittstelle auf der OpenStack Ebene festlegen.
>>
>> Dazu können Sie ein einzelnes Argument zur Funktion "--nic" hinzufügen:
>>
>> `--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]`
>>
>> Beispiel:
>>
>> `--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42`
>>
>> **Instanz überprüfen**
>>
>> Nach einigen Momenten können Sie die Liste der bestehenden Instanzen überprüfen, um den Server zu finden, den Sie erstellt haben:
>>
>> ```bash
>> openstack server list
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
>> | ID                                   |       Name          | Status | Networks                                         |     Image Name     |
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
>> | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx | [Name of instance]  | ACTIVE | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack]  | [Name-of-instance] |
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
>> ```
>>
>> ```bash
>> nova list
>> +--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
>> | ID                                   | Name               | Status | Task State | Power State | Networks                                         |
>> +--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
>> | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   | [Name of instance] | ACTIVE | -          | Running     | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack]  |
>> +--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
>> ```
>>

///

/// details | **Im Fall einer vorhandenen Instanz**

Das OVHcloud Kundencenter ermöglicht es Ihnen, eine Instanz an eine oder mehrere private Netzwerke anzuschließen, bietet aber keine fortgeschrittene Netzwerkkonfiguration der Netzwerkschnittstellen. Wenn Sie weitere Anpassungen vornehmen möchten, müssen Sie diese entweder über die OVHcloud APIv6, über die OpenStack APIs oder über Horizon verwalten.

Die erforderliche Aktion besteht einfach darin, eine neue Netzwerkschnittstelle an Ihren Server anzufügen, zusätzlich zur vorhandenen.

Zum Beispiel, wenn Sie eine öffentliche Schnittstelle *eth0* haben, fügen Sie die Schnittstelle *eth1* hinzu.

> [!warning]
> Die Konfiguration dieser neuen Schnittstelle ist selten automatisch.  
> Sie müssen daher eine statische IP-Adresse zuweisen oder DHCP konfigurieren, je nach Ihrer Infrastruktur.
>

> [!tabs]
> Über das OVHcloud Kundencenter
>> Melden Sie sich im [OVHcloud Kundencenter](/links/manager) an, gehen Sie in den Bereich `Public Cloud`{.action} und wählen Sie das betreffende Public Cloud Projekt aus.
>>
>> Klicken Sie auf `Instanzen`{.action} in der linken Navigationsleiste und dann auf `⁝`{.action} rechts neben der Instanz. Wählen Sie `Details der Instanz`{.action}.
>>
>> ![detail instance](images/instance_details.png){.thumbnail}
>>
>> Dies öffnet das Instanz-Dashboard. Klicken Sie auf die Schaltfläche `⁝`{.action} im Bereich "Netzwerke", neben "Private Netzwerke", und wählen Sie `Netzwerk hinzufügen`{.action}.
>>
>> ![attach network](images/vrack2021-01.png){.thumbnail}
>>
>> Wählen Sie die privaten Netzwerke aus, die Sie an Ihre Instanz anhängen möchten, und klicken Sie auf `Bestätigen`{.action}.
>>
>> ![attach network](images/vrack9.png){.thumbnail}
>>
> Über die OVHcloud APIv6
>>
>> Wenn Sie eine vorhandene Instanz in den vRack integrieren möchten, ist dies nicht über Ihr OVHcloud Kundencenter möglich. Sie müssen Horizon, die OpenStack-API oder die OVHcloud APIv6 verwenden.
>>
>> Die erforderliche Aktion besteht einfach darin, eine neue Netzwerkschnittstelle an Ihren Server anzufügen, zusätzlich zur vorhandenen.
>>
>> Zum Beispiel, wenn Sie eine öffentliche Schnittstelle *eth0* haben, fügen Sie die Schnittstelle *eth1* hinzu.
>>
>> > [!warning]
>> >
>> > Die Konfiguration dieser neuen Schnittstelle ist selten automatisch.  
>> > Sie müssen daher eine statische IP-Adresse zuweisen oder DHCP konfigurieren, je nach Ihrer Infrastruktur.
>> >
>>
>> **Die folgenden Schritte beschreiben, wie Sie die Netzwerkschnittstellen Ihrer Instanzen verwalten.**
>>
>> **Schritt 1: Erforderliche Informationen abrufen**
>>
>> **Projekt-ID abrufen**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> **Instanz-ID abrufen**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/instance
>> >
>>
>> **Netzwerk-ID des öffentlichen Netzwerks (Ext-Net) abrufen**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/public
>> >
>>
>> **Netzwerk-ID des privaten Netzwerks (vorher erstellte vRack-Schnittstelle) abrufen**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Der Bezeichner hat die Form: "pn-xxxxx_yy", wobei yy die VLAN-Nummer ist.
>> >
>>
>> **Schritt 2: Eine Schnittstelle an Ihre Instanz anhängen**
>>
>> Sobald alle erforderlichen Elemente bekannt sind, können Sie den folgenden Aufruf verwenden:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/instance/{instanceId}/interface
>> >
>>
>> Sie müssen mindestens die folgenden Felder ausfüllen:
>>
>> |Feld|Beschreibung| 
>> |---|---| 
>> |serviceName|ID des Public Cloud Projekts.|
>> |instanceId|ID der Instanz.|
>> |networkId|Geben Sie die öffentliche Netzwerk-ID (Ext-Net) oder Ihre VLAN-ID (pn-xxxxxx_yy) ein.|
>> |ip|Definieren Sie eine spezifische IP-Adresse (funktioniert nur für private Schnittstellen).|
>>
>> Sobald der Aufruf abgeschlossen ist und alle Informationen korrekt ausgefüllt wurden, wird eine neue Schnittstelle an Ihre Instanz angehängt.
>>
>> > [!primary]
>> >
>> > Ihre OVHcloud Instanz hat eine neue Netzwerkschnittstelle zusätzlich zur öffentlichen Schnittstelle (Ext-Net).  
>> > In der Zusammenfassung der Instanz können Sie die private IP-Adresse einsehen, die automatisch Ihrer Schnittstelle zugewiesen wird.  
>> > Es ist Ihre Verantwortung, die Schnittstelle korrekt über DHCP zu konfigurieren oder durch statische IP-Adressen zu verwenden.
>> >
>>
>> **Schritt 3: Eine Schnittstelle von Ihrer Instanz trennen**
>>
>> > [!warning]
>> >
>> > Das Trennen einer Netzwerkschnittstelle ist dauerhaft.
>> >
>> > Es ist jedoch wichtig zu beachten, dass, wenn Sie die Schnittstelle "Ext-Net" (öffentliche IP) trennen, diese Adresse wieder zur generellen Nutzung freigegeben wird. Sie kann deshalb nicht einfach erneut zugewiesen werden.  
>> > Diese Aktion ist nur erforderlich, wenn Sie Ihren Server im vRack (privates Netzwerk) isolieren möchten oder wenn Sie ihn von einer oder mehreren VLANs trennen möchten.
>> >
>>
>> Sobald alle erforderlichen Informationen abgerufen wurden, können Sie den folgenden Aufruf verwenden, um eine Schnittstelle zu trennen:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud DELETE /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
>> >
>>
>> Sie müssen mindestens die folgenden Felder ausfüllen:
>>
>> |Feld|Beschreibung| 
>> |---|---| 
>> |serviceName|ID des Public Cloud Projekts.|
>> |instanceId|ID der Instanz.|
>> |networkId|Geben Sie die öffentliche Netzwerk-ID (Ext-Net) oder Ihre VLAN-ID (pn-xxxxxx_yy) ein.|
>>
> Über Horizon
>> Melden Sie sich über die [Horizon-Schnittstelle](https://horizon.cloud.ovh.net/auth/login/) an, wie [hier](#horizon) erwähnt.
>>
>> Wählen Sie die richtige Arbeitszone aus.
>>
>> ![connection Horizon](images/horizon1.png){.thumbnail}
>>
>> Wählen Sie `Compute` und dann `Instances` aus dem Menü.
>>
>> ![Horizon Compute instances](images/horizon2.png){.thumbnail}
>>
>> **Ein privates Interface hinzufügen**
>>
>> Um ein Interface hinzuzufügen, klicken Sie auf den Pfeil in der Spalte `Actions`, um die möglichen Aktionen für die Instanz anzuzeigen. Wählen Sie `Attach Interface`{.action}.
>>
>> ![Horizon attach interface](images/horizon3.png){.thumbnail}
>>
>> Wählen Sie Ihr Interface aus und bestätigen Sie.
>>
>> ![Horizon attach interface](images/horizon4.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Ihre OVHcloud Instanz hat eine neue Netzwerkschnittstelle zusätzlich zur öffentlichen Schnittstelle (Ext-Net).  
>> > In der Zusammenfassung der Instanz können Sie die private IP-Adresse einsehen, die automatisch Ihrem Interface zugewiesen wird.  
>> > Es ist Ihre Verantwortung, das Interface korrekt über DHCP zu konfigurieren oder durch statische IP-Adressen zu verwenden.
>> >
>>
>> **Ein privates Netzwerkinterface trennen**
>>
>> > [!warning]
>> >
>> > Das Trennen eines Netzwerkinterfaces ist dauerhaft.
>> >
>> > Es ist jedoch wichtig zu beachten, dass, wenn Sie die Schnittstelle "Ext-Net" (öffentliche IP) trennen, diese Adresse wieder zur generellen Nutzung freigegeben wird. Sie kann deshalb nicht einfach erneut zugewiesen werden.  
>> > Diese Aktion ist nur erforderlich, wenn Sie Ihren Server im vRack (privates Netzwerk) isolieren möchten oder wenn Sie ihn von einer oder mehreren VLANs trennen möchten.
>> >
>>
>> Um ein privates Interface zu trennen, klicken Sie auf den Pfeil in der Spalte `Actions`, um die möglichen Aktionen für die Instanz anzuzeigen. Wählen Sie `Detach Interface`{.action}.
>>
>> ![Horizon detach interface](images/horizon5.png){.thumbnail}
>>
>> Wählen Sie Ihr Interface aus und bestätigen Sie.
>>
>> ![Horizon detach interface](images/horizon6.png){.thumbnail}
>>
> Über die OpenStack CLI
>> Die folgenden Schritte sind notwendig, um eine vorhandene Instanz in den vRack zu integrieren.
>>
>> **Erforderliche Informationen abrufen**
>>
>> Identifizieren Sie Ihre Instanzen:
>>
>> ```bash
>> openstack server list
>> 
>> +--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
>> | ID                                   | Name         | Status | Networks                                                               | Image Name |
>> +--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MyVrack=192.168.0.124  | Debian 9   |
>> +--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
>> ```
>>
>> oder
>>
>> ```bash
>> nova list
>> 
>> +--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
>> | ID                                   | Name         | Status | Task State | Power State | Networks                                                             |
>> +--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | -          | Running     | Ext-Net=xx.xx.xx.xx,2001:41d0:yyyy:yyyy::yyyy;MyVrack=192.168.0.124  |
>> +--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
>> ```
>>
>> Öffentliche und private Netzwerke:
>>
>> ```bash
>> openstack network list
>> 
>> +--------------------------------------+------------+-------------------------------------+
>> | ID                                   | Name       | Subnets                             |
>> +--------------------------------------+------------+-------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN-0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
>> +--------------------------------------+------------+-------------------------------------+
>> ```
>>
>> oder
>>
>> ```bash
>> nova net-list
>> 
>> +--------------------------------------+------------+------+
>> | ID                                   | Label      | CIDR |
>> +--------------------------------------+------------+------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | None |
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN-0   | None |
>> +--------------------------------------+------------+------+
>> ```
>>
>> > [!primary]
>> >
>> > Sie müssen sich die Netzwerk-IDs notieren, die Sie benötigen:
>> >
>> > - Ext-Net für eine öffentliche IP-Adresse
>> > - Die VLANs, die für Ihre Konfiguration erforderlich sind
>> >
>>
>> **Ein privates Netzwerkinterface hinzufügen**
>>
>> Um ein neues Interface anzuhängen, führen Sie den folgenden Befehl aus:
>>
>> ```bash
>> nova interface-attach --net-id <ID-VLAN> <ID-instance>
>> ```
>>
>> Beispiel:
>>
>> ```bash
>> nova interface-attach --net-id 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx
>> ```
>>
>> Sie können prüfen, ob die Aktion erfolgreich war:
>>
>> ```bash
>> nova show <ID-instance>
>> 
>> +--------------------------------------+----------------------------------------------------------+
>> | Property                             | Value                                                    |
>> +--------------------------------------+----------------------------------------------------------+
>> | Ext-Net network                      | xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx                    | => Ihre öffentliche IP
>> | MyVLAN-42 network                    | 192.168.0.x                                              | => Ihre private IP
>> [...]
>> ```
>>
>> oder
>>
>> ```bash
>> openstack server show <ID-instance>
>> +--------------------------------------+-------------------------------------------------------------------------+
>> | Field                                | Value                                                                   |
>> +--------------------------------------+-------------------------------------------------------------------------+
>> [...]
>> | addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx ; MyVLAN-42=192.168.0.x  | => Ihre öffentliche IP ; Ihre private IP
>> [...]
>> ```
>>

### Ein Netzwerkinterface entfernen

> [!warning]
>
> Das Trennen eines Netzwerkinterfaces ist dauerhaft.
>
> Es ist jedoch wichtig zu beachten, dass, wenn Sie die Schnittstelle "Ext-Net" (öffentliche IP) trennen, diese Adresse wieder zur generellen Nutzung freigegeben wird. Sie kann deshalb nicht einfach erneut zugewiesen werden.   
> Diese Aktion ist nur erforderlich, wenn Sie Ihren Server im vRack (privates Netzwerk) isolieren möchten oder wenn Sie ihn von einer oder mehreren VLANs trennen möchten.
>

Um ein Interface zu trennen, müssen Sie zuerst den Neutron-Port identifizieren, der erstellt wurde.  
Dazu können Sie die folgenden Befehle verwenden:

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

Sobald Sie den zu entfernenden Port identifiziert haben, können Sie den folgenden Befehl ausführen:

```bash
nova interface-detach <ID_instance> <port_id>
```

Beispiel:

```bash
nova interface-detach 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-abcd-ef01-2345-678910abcdef
```

///

## Weiterführende Informationen

[Erstellen mehrerer vLANs in einem vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.