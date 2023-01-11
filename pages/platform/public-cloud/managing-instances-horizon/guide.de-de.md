---
title: Die ersten Schritte mit Ihrer Public Cloud Instanz
slug: erste_schritte_mit_ihrer_public_cloud_instanz_horizon
excerpt: "Erfahren Sie hier, wie Sie Ihre Instanzen über das Horizon-Interface verwalten"
section: Horizon
order: 04
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 03.02.2022**

## Ziel

Zusätzlich zum OVHcloud Kundencenter können Sie Ihre OVHcloud Public Cloud Projekte auch über das [Horizon-Interface](https://horizon.cloud.ovh.net/auth/login/) verwalten. In diesem Interface finden Sie alle Ihre Infrastruktur- (Instanzen, Backups, Festplatten, SSH-Schlüssel usw.) und Storage-Projekte (einschließlich der Liste Ihrer Container).

**Diese Anleitung erklärt, wie Sie Ihre Public Cloud Instanzen über das Horizon-Interface verwalten.**

## Voraussetzungen

- Sie haben eine Public Cloud Instanz über Ihr [OVHcloud Kundencenter](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/) oder über das [Horizon-Interface](https://docs.ovh.com/de/public-cloud/erstellung_einer_instanz_in_horizon/) erstellt.
- Sie haben einen [SSH-Schlüssel erstellt](https://docs.ovh.com/de/public-cloud/create-ssh-keys/).

## In der praktischen Anwendung

### Zugriff auf das Verwaltungsinterface der Instanz

Loggen Sie sich zunächst im [Horizon-Interface](https://horizon.cloud.ovh.net/auth/login/) ein.

Anders als im OVHcloud Kundencenter unterscheidet Horizon Ihre Dienste je nach Region. Sie können die Region im Menü oben links auswählen:

![public-cloud](images/region2021.png){.thumbnail}

Klicken Sie links im Menü auf `Compute`{.action} und wählen Sie dann `Instances`{.action} aus. Auf der angezeigten Seite finden Sie eine Zusammenfassung aller Ihrer Instanzen. Hier werden folgende Informationen angezeigt:

- Das Modell Ihrer Instanz (*Flavor*)
- Namen, Stromversorgungszustand (Power State) und die seit Erzeugung verstrichene Zeit (*Time since created*) der Instanz
- IPv4- und IPv6-Adresse Ihrer Instanz
- Zugehöriges privates Netzwerk und private IPv4-Adresse
- Status der Instanz
- Das für die Installation der Instanz verwendete Image (falls zutreffend)

![public-cloud](images/options2022.png){.thumbnail}

**Launch Instance** 

Mit dieser Option können Sie eine Instanz erstellen. Weitere Informationen finden Sie in [dieser Anleitung](https://docs.ovh.com/de/public-cloud/erstellung_einer_instanz_in_horizon/).

**Delete Instances**

Mit dieser Option können Sie mehrere Instanzen gleichzeitig löschen. Setzen Sie einfach einen Haken links des Instanznamens.

**More Actions**

In diesem Menü können Sie die folgenden Aktionen auf einer oder mehreren Instanzen ausführen. Vergewissern Sie sich zunächst, dass Sie den Haken links vom Namen der Instanz setzen:

- Start Instances: Mit dieser Option können Sie eine oder mehrere Instanzen im Status *shutoff* oder *off* neu starten.
- Shut Off Instances: Mit dieser Option können eine oder mehrere Instanzen gesperrt werden.
- Soft Reboot Instances: Mit dieser Option können Sie einen Software-Neustart auf einer oder mehreren Instanzen durchführen.

**Create Snapshot**: Mit dieser Option können Sie einen Snapshot Ihrer Instanz erstellen. Weitere Informationen finden Sie in [dieser Anleitung](https://docs.ovh.com/de/public-cloud/verwaltung_der_speicherauszuge_snapshots_einer_instanz_in_horizon/).

### Instanz bearbeiten

Wählen Sie im Verwaltungsinterface der Instanz die gewünschte Option aus der Drop-down-Liste.

![public-cloud](images/list2022.png){.thumbnail}

- Attach Interface: Mit dieser Option können Sie über das VLAN eine oder mehrere private Interfaces zu Ihrer Instanz hinzufügen. Weitere Informationen finden Sie in [diesem Abschnitt](https://docs.ovh.com/de/public-cloud/public-cloud-vrack/#ein-privates-interface-hinzufugen_1) der vRack-Anleitung.
- Detach Interface: Mit dieser Option können Sie ein Interface löschen, das zu einer Instanz gehört. Weitere Informationen finden Sie in [diesem Abschnitt](https://docs.ovh.com/de/public-cloud/public-cloud-vrack/#loschung-eines-interfaces) der vRack-Anleitung.
- Edit Instance: Mit dieser Option können Sie den Namen der Instanz und die [Sicherheitsgruppen ändern](https://docs.ovh.com/de/public-cloud/configure-security-group-horizon/).

> [!warning]
> Die rot markierten Optionen geben an, ob während des Vorgangs Datenverlust möglich ist. Stellen Sie sicher, dass Sie immer über ein Backup Ihrer Daten verfügen, bevor Sie Änderungen an Ihrer Instanz vornehmen.
>

### Änderung der Größe einer Instanz

Mit der Public Cloud können Sie die Ressourcen Ihrer Instanz mit nur wenigen Klicks erhöhen.

> [!warning]
>
> Bei klassischen Modellen ist nur die Umstellung auf ein größeres Modell möglich.
> Beachten Sie weiterhin, dass der Betrieb der Instanz während der Operation unterbrochen wird.
> 

> [!success]
>
> *Flex*-Instanzen erlauben die Anpassung auf höhere oder niedrigere Modelle aufgrund einer festen Größe einer einzelnen Disk.
> 

Loggen Sie sich ins [Horizon-Interface](https://horizon.cloud.ovh.net/auth/login/) ein und wählen Sie oben links die korrekte Region aus.</br>
Klicken Sie links im Menü auf `Compute`{.action} und wählen Sie dann `Instances`{.action} aus. Wählen Sie `Resize Instance`{.action} im Drop-down-Menü rechts neben der betreffenden Instanz aus.

![Resize instance](images/resizeinstance2022.png){.thumbnail}


- Wahl des Templates (*Flavor Choice*): Dieser Abschnitt zeigt das aktuelle Template (*old flavor*) an und erlaubt es Ihnen, das neue Template (*new flavor*) für die Instanz auszuwählen.

![public-cloud](images/flavorchoice.png){.thumbnail}

- Ressourcen für das Template (*Flavor Details*). In diesem Abschnitt werden die Ressourcen angezeigt, die dem gewählten Modell zugeordnet sind. 
- Limitierungen des Projekts (*Project Limits*). Hier sehen Sie die belegten Ressourcen im Vergleich zur Gesamtverfügbarkeit.

> [!warning]
> Bitte beachten Sie, dass Sie nicht von einer Linux-Instanz auf ein Windows-Modell oder umgekehrt wechseln können.
>

- Erweiterte Optionen (*Advanced Options*). In diesem Bereich können Sie die Partitionierung der Festplatte (*Disk Partition*) und die Servergruppe (*Server Group*) einrichten.

![public-cloud](images/resize_advanced.png){.thumbnail}

Wenn die Konfiguration abgeschlossen ist, klicken Sie auf `Resize`{.action}.

**Änderung der Größe einer Disk unter Windows**

Achtung, bei einer Größenanpassung einer Windows-Instanz wird die Größe der Partition nicht automatisch geupdatet. Die Partition muss also über die Datenträgerverwaltung (**Disk Management**) angepasst werden.

Klicken Sie mit der rechten Maustaste auf den Windows `Start`{.action} Button und öffnen Sie die Datenträgerverwaltung, indem Sie auf `Datenträgerverwaltung`{.action} klicken.

![public-cloud](images/2980.png){.thumbnail}

Klicken Sie rechts auf die Hauptpartition und klicken Sie dann auf `Volume erweitern`{.action}.

![public-cloud](images/2981a.png){.thumbnail}

Klicken Sie im `Assistent zum Erweitern von Volumes` auf `Weiter`{.action}. Wählen Sie dann die Ressourcen der zu erweiternden Disk aus und klicken Sie auf `Weiter`{.action}. 

![public-cloud](images/2978a.png){.thumbnail}

Klicken Sie abschließend auf `Fertig stellen`{.action}, um die Änderung zu bestätigen.

![public-cloud](images/wizard2021.png){.thumbnail}

Die neue Partitionsgröße wird nun in der Datenträgerverwaltung angezeigt.

![public-cloud](images/2979.png){.thumbnail}


### Instanz rekonstruieren

Mit dieser Option können Sie Ihre Instanz auf einer neuen Basis rekonfigurieren oder einfach das Betriebssystem wechseln.

> [!alert]
> Hierbei werden die Daten der Instanz gelöscht.
> 

Wählen Sie `Rebuild Instance`{.action} in der Drop-down-Liste der Instanz aus.

![public-cloud](images/rebuildinstance.png){.thumbnail}

Wählen Sie das Image für die Rekonstruktion aus.<br>
Wählen Sie den Partitionstyp ("Automatisch" oder "Manuell") aus. Dies ist optional.<br>
Klicken Sie abschließend auf `Rebuild Instance`{.action}. Diese Operation kann einige Minuten dauern.

### Aussetzen oder Pausieren einer Instanz (Shelve or pause an instance)

Um zu erfahren, wie Sie eine Instanz aussetzen oder pausieren, klicken Sie [hier](https://docs.ovh.com/de/public-cloud/aussetzen_oder_pausieren_einer_instanz/), um die Anleitung zu diesen Funktionen einzusehen.

### Zugriff auf die Konsole einer Instanz

Bei Verlust des Zugangs zu Ihrer Instanz aufgrund einer fehlerhaften Konfiguration oder einer Unterbrechung des SSH-Dienstes können Sie Ihre Instanz jederzeit mithilfe der VNC-Konsole rekonfigurieren.

> [!primary]
>
> Sie können direkt über die VNC-Konsole auf Ihre Instanz zugreifen. Sie müssen jedoch zuerst ein Passwort für den Root-Benutzer konfigurieren.
> Weitere Informationen finden Sie in [dieser Anleitung](https://docs.ovh.com/de/public-cloud/root-rechte_erlangen_und_passwort_festlegen/).
> Die VNC-Konsole kann auch als erster Diagnose-Ansatz bei einer Fehlfunktion verwendet werden, indem die Bootphase Ihrer Instanz analysiert wird.
> 

Wählen Sie in der Drop-down-Liste der Instanz `Console`{.action}.

![public-cloud](images/accessconsole.png){.thumbnail}

Die Konsole der Instanz wird angezeigt.

> [!success]
>
> Wenn die Konsole nicht mehr auf die Tastatureingaben antwortet, klicken Sie auf die Statusleiste.
> Um den Vollbildschirmmodus zu verlassen, klicken Sie auf den Button "Zurück zum Browser".
> 

**Konsole der Instanz**

![public-cloud](images/console.png){.thumbnail}

### Instanz neu starten

Es gibt zwei Methoden, um eine Instanz neu zu starten:

- Soft Reboot Instance (Software)
- Hard Reboot Instance (Hardware)

Wählen Sie in der Drop-down-Liste der Instanz entweder `Soft Reboot Instance`{.action} oder `Hard Reboot Instance`{.action}.

![public-cloud](images/rebootinstance.png){.thumbnail}

Bestätigen Sie anschließend Ihre Anfrage im angezeigten Fenster.

### Instanz löschen

Wenn Sie eine Ihrer Instanzen nicht mehr benötigen, können Sie diese jederzeit löschen.

> [!alert]
>
> Die Daten auf der Instanz werden gelöscht.
> Sie können auch ein Backup dieser Instanz erstellen, wenn Sie die Daten speichern und eine identische Instanz später neu starten möchten.
> 

Wählen Sie in der Drop-down-Liste der Instanz `Delete Instance`{.action}. 

![public-cloud](images/deleteinstance.png){.thumbnail}

Klicken Sie anschließend auf `Confirm`{.action}, um den Vorgang zu starten.

> [!success]
>
> Wenn Sie die Instanz gelöscht haben, werden Ihnen keine Kosten mehr berechnet und die Instanz ist nicht wiederherstellbar.
> 

##  Weiterführende Informationen

Für den Austausch mit unserer User Community gehen <https://community.ovh.com/en/>.
