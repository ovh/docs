---
title: 'vRack zwischen Public Cloud und Dedicated Server einrichten'
slug: vrack-zwischen-public-cloud-dedicated-server-einrichten
excerpt: 'Hier erfahren Sie, wie Sie ein privates Netzwerk zwischen einer Public Cloud Instanz und einem dedizierten Server einrichten.'
section: vRack
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 22.11.2021**

## Einleitung

Das [vRack](https://www.ovh.de/loesungen/vrack/){.external} OVHcloud ist ein privates Netzwerk, mit dem Sie das Routing zwischen zwei oder mehr OVHcloud [Dedicated Servern](https://www.ovh.de/dedicated_server/){.external} einrichten können. Darüber hinaus können Sie auch [Public Cloud Instanzen](https://www.ovh.de/public-cloud/instances/){.external} zu Ihrem privaten Netzwerk hinzufügen, um eine Infrastruktur aus physischen und virtuellen Ressourcen zu erstellen.

**In dieser Anleitung erfahren Sie, wie Sie ein privates Netzwerk zwischen einer Public Cloud Instanz und einem dedizierten Server einrichten.**


## Voraussetzungen

* Sie haben eine [OVHcloud Public Cloud Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/).
* Sie haben ein [OVHcloud vRack](https://www.ovh.de/loesungen/vrack/) in Ihrem Kunden-Account aktiviert.
* SSie haben ein [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account (vRack kompatiblen).
* Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
* Sie haben einen privaten IP-Adressbereich für das vRack festgelegt.

## In der praktischen Anwendung

### Public Cloud Projekt zum vRack hinzufügen

Nachdem Ihr [Public Cloud Projekt](https://docs.ovh.com/de/public-cloud/erstellung_public_cloud_projekt/) fertig konfiguriert ist, muss es zum vRack hinzugefügt werden. Dies kann auf zwei Arten geschehen:

1. Wenn Sie keine vRack Dienstleistung bestellen, ist diese kostenlos.

Gehen Sie in das Menü `Bare Metal Cloud`{.action} und klicken Sie auf den Button `Bestellen`{.action}. Klicken Sie in diesem Menü auf die vRack `Option`{.action}.

![vRack bestellen](images/orderingvrack.png){.thumbnail}

Sie werden auf eine andere Seite weitergeleitet, um die Bestellung zu validieren. Die Operation wird einige Minuten dauern.

Sobald der vRack Dienst auf Ihrem Account bereitgestellt ist, können Sie Ihr Projekt hinzufügen.

Klicken Sie auf das Menü `Bare Metal Cloud`{.action}, dann auf `Network`{.action} und dann auf `vRack`{.action}. Wählen Sie Ihr vRack aus der Liste aus.

![vRack geliefert](images/vrackdelivered.png){.thumbnail}

Wählen Sie in der Liste der verfügbaren Dienstleistungen das Projekt aus, das Sie zum vRack hinzufügen möchten, und klicken Sie dann auf den Button `Hinzufügen`{.action}.

![Projekt zum vRack hinzufügen](images/addprojectvrack.png){.thumbnail}

<ol start="2">
  <li><a href="https://docs.ovh.com/gb/en/public-cloud/public-cloud-vrack/#step-1-activating-and-managing-a-vrack">Erstellen oder Hinzufügen eines bestehenden vRack Dienstes</a> im Bereich Public Cloud.</li>
</ol>

### Instanz in das vRack integrieren

Es können zwei Situationen auftreten:

- Die Instanz existiert noch nicht.
- Die Instanz existiert bereits und Sie müssen sie zum vRack hinzufügen.

#### Fälle einer neuen Instanz

Wenn Sie Hilfe benötigen, folgen Sie zunächst diesem Leitfaden:[Erstellen Ihrer ersten Public Cloud-Instanz](../public-cloud-erste-schritte/#schritt-3-instanz-erstellen){.external}. Bei der Erstellung einer Instanz können Sie in Schritt 4 ein privates Netzwerk angeben, in das Ihre Instanz integriert werden kann. Wählen Sie dann im dargestellten Drop-down-Menü Ihr zuvor erstelltes vRack aus.

#### Fälle einer bereits bestehenden Instanz

Sie können eine bestehende Instanz einem privaten Netzwerk zuweisen. Weitere Informationen finden Sie in [diesem Abschnitt](https://docs.ovh.com/gb/en/public-cloud/public-cloud-vrack/#in-case-of-an-existing-instance_2) der zugehörigen Anleitung.

### VLAN-ID erstellen

Damit beide Dienste miteinander kommunizieren können, müssen sie mit derselben **VLAN ID** « taggetaget » werden. 

#### Verwendung der standardmäßigen VLAN-ID

Die VLAN-ID für dedizierte Server ist standardmäßig **0**. Um diese VLAN-ID zu verwenden, müssen Sie das mit Ihrer Instanz verbundene private Netzwerk mit VLAN **0** « taggen ». Setzen Sie hierfür einen Haken bei eine `VLAN-ID festlegen`, wenn Sie Ihrer Instanz ein privates Netzwerk hinzufügen.

Weitere Informationen finden Sie in [diesem Abschnitt](https://docs.ovh.com/gb/en/public-cloud/public-cloud-vrack/#step-2-creating-a-vlan-in-the-vrack_1) der entsprechenden Anleitung.

> [!primary]
> In der Public Cloud definieren Sie eine einzige VLAN-ID pro privatem Netzwerk.
>
> Sie können nicht dieselbe VLAN-ID in zwei verschiedenen privaten Netzwerken definieren.

#### Verwendung einer anderen VLAN-ID

Wenn Sie eine andere VLAN-ID verwenden möchten:

- Das mit der Public Cloud Instanz verbundene private Netzwerk muss mit dieser ID « taggetaggert » werden.
- In der Netzwerkkonfigurationsdatei des dedizierten Servers muss die private Netzwerkschnittstelle mit dieser ID « taggetaggert » werden.


> [!primary]
> 
> Im Gegensatz zu Dedicated Servern ist es nicht notwendig, das VLAN direkt auf eine Public Cloud Instanz « zu taggen ».
>

Zum Beispiel: Wenn Sie das mit Ihrer Instanz verbundene private Netzwerk mit VLAN 2 definiert haben, muss das private Netzwerkinterface Ihres dedizierten Servers mit VLAN 2 « taggetaggert » werden. Weitere Informationen finden Sie in folgender Anleitung: [Mehrere VLANs im vRack erstellen](https://docs.ovh.com/de/dedicated/vrack-vlan-erstellen/).

### Netzwerkinterfaces konfigurieren

Konfigurieren Sie anschließend die Netzwerkinterfaces auf Ihrer neuen Public Cloud Instanz und Ihrem dedizierten Server mithilfe dieser Anleitung: [Mehrere dedizierte Server im vRack konfigurieren](../dedicated/mehrere-dedizierte-server-im-vrack-konfigurieren/){.external}.

## Weiterführende Informationen

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en>.