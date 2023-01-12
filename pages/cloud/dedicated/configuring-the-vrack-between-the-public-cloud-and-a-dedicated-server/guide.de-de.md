---
title: 'vRack zwischen Public Cloud und Dedicated Server einrichten'
slug: vrack-zwischen-public-cloud-dedicated-server-einrichten
excerpt: 'Erfahren Sie hier, wie Sie ein privates Netzwerk zwischen Public Cloud Instanzen und Dedicated Servern einrichten'
section: vRack
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 22.11.2021**

## Ziel

OVHcloud [vRack](https://www.ovh.de/loesungen/vrack/){.external} ist ein privates Netzwerk, mit dem Sie das Routing zwischen zwei oder mehr OVHcloud [Dedicated Servern](https://www.ovh.de/dedicated_server/){.external} einrichten können. Darüber hinaus können Sie auch [Public Cloud Instanzen](https://www.ovh.de/public-cloud/instances/){.external} zu Ihrem privaten Netzwerk hinzufügen, um eine Infrastruktur aus physischen und virtuellen Ressourcen zu erstellen.

**Diese Anleitung erklärt, wie Sie eine Public Cloud Instanz und einen dedizierten Server über vRack verbinden.**

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#schritt-3-instanz-erstellen) in Ihrem Kunden-Account.
- Sie haben ein [vRack](https://www.ovh.de/loesungen/vrack/) in Ihrem Kunden-Account eingerichtet.
- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) (kompatibel mit vRack) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben einen privaten IP-Adressbereich für das vRack festgelegt.

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](https://eco.ovhcloud.com/de/about/) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](https://eco.ovhcloud.com/de/compare/).

## In der praktischen Anwendung

### Public Cloud Projekt zum vRack hinzufügen

Nachdem Ihr [Public Cloud Projekt](https://docs.ovh.com/de/public-cloud/create_a_public_cloud_project/) fertig konfiguriert ist, muss es zum vRack hinzugefügt werden. Dies kann auf zwei Arten geschehen.

#### Option 1: Einen neuen vRack Dienst bestellen, wenn Sie noch keinen verwenden (kostenlos).

Gehen Sie zum Bereich `Bare Metal Cloud`{.action} und klicken Sie links auf den Button `Bestellen`{.action}. Wählen Sie in diesem Menü `vRack`{.action} aus.

![vRack bestellen](images/orderingvrack.png){.thumbnail}

Sie werden auf eine neue Seite weitergeleitet, um die Bestellung zu validieren. Die Ausführung wird einige Minuten dauern.

Sobald der vRack Dienst auf Ihrem Account bereitgestellt ist, können Sie Ihr Projekt hinzufügen.

Klicken Sie im Bereich `Bare Metal Cloud`{.action} auf `Network`{.action} und dann auf `vRack`{.action}. Wählen Sie Ihr vRack aus der Liste aus.

Wählen Sie in der Liste der verfügbaren Dienstleistungen das Projekt aus, das Sie zum vRack hinzufügen möchten, und klicken Sie dann auf den Button `Hinzufügen`{.action}.

![Projekt zum vRack hinzufügen](images/addprojectvrack.png){.thumbnail}

#### Option 2: Im Public Cloud Interface ein [neues vRack erstellen oder ein bestehendes hinzufügen](https://docs.ovh.com/de/public-cloud/public-cloud-vrack/#schritt-1-vrack-aktivieren-und-verwalten).


### Instanz in das vRack integrieren

Es können zwei Situationen auftreten:

- Die Instanz existiert noch nicht.
- Die Instanz existiert bereits und Sie müssen sie zum vRack hinzufügen.

#### Fälle einer neuen Instanz

Wenn Sie Hilfe benötigen, folgen Sie zunächst diesem Leitfaden: [Erstellen Ihrer ersten Public Cloud-Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#schritt-3-instanz-erstellen){.external}. Bei der Erstellung einer Instanz können Sie in Schritt 4 ein privates Netzwerk angeben, in das Ihre Instanz integriert werden kann. Wählen Sie dann im dargestellten Drop-down-Menü Ihr zuvor erstelltes vRack aus.

#### Im Fall einer bereits bestehenden Instanz

Sie können eine bestehende Instanz einem privaten Netzwerk zuweisen. Weitere Informationen finden Sie in [diesem Abschnitt](https://docs.ovh.com/de/public-cloud/public-cloud-vrack/#im-fall-einer-bestehenden-instanz_2) der zugehörigen Anleitung.

### VLAN ID erstellen

Damit beide Dienste miteinander kommunizieren können, müssen sie mit derselben **VLAN ID** "getagt" werden. 

#### Verwendung der Standard-ID

Die VLAN ID für dedizierte Server ist standardmäßig **0**. Um diese VLAN-ID zu verwenden, müssen Sie das mit Ihrer Instanz verbundene private Netzwerk als VLAN **0** "taggen". Setzen Sie dazu einen Haken bei `VLAN-ID festlegen`, wenn Sie Ihrer Instanz ein privates Netzwerk hinzufügen.

Weitere Informationen finden Sie in [diesem Abschnitt](https://docs.ovh.com/de/public-cloud/public-cloud-vrack/#schritt-2-erstellen-eines-vlan-im-vrack_1) der entsprechenden Anleitung.

> [!primary]
> In der Public Cloud definieren Sie eine einzige VLAN ID pro privatem Netzwerk.
>
> Sie können nicht dieselbe VLAN-ID in zwei verschiedenen privaten Netzwerken definieren.

#### Verwendung einer anderen VLAN ID

Wenn Sie eine andere VLAN ID verwenden möchten:

- Das mit der Public Cloud Instanz verbundene private Netzwerk muss mit dieser ID "getagt" werden.
- In der Netzwerkkonfigurationsdatei des Dedicated Servers muss die private Netzwerkschnittstelle mit dieser ID "getagt" werden.


> [!primary]
> 
> Anders als bei Dedicated Servern ist es nicht notwendig, das VLAN direkt auf einer Public Cloud Instanz zu "taggen".
>

Beispiel: Wenn Sie das mit Ihrer Instanz verbundene private Netzwerk mit der VLAN ID 2 definiert haben, muss das private Netzwerkinterface Ihres dedizierten Servers mit VLAN 2 "getagt" werden. Weitere Informationen finden Sie in folgender Anleitung: "[Mehrere VLANs im vRack erstellen](https://docs.ovh.com/de/dedicated/vrack-vlan-erstellen/)".

### Netzwerkinterfaces konfigurieren

Konfigurieren Sie anschließend die Netzwerkinterfaces auf Ihrer neuen Public Cloud Instanz und Ihrem Dedicated Server mithilfe dieser Anleitung: "[Mehrere dedizierte Server im vRack konfigurieren](https://docs.ovh.com/de/dedicated/mehrere-dedizierte-server-im-vrack-konfigurieren/)".

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
