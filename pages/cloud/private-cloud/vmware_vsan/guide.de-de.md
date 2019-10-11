---
title: 'Hyperkonvergenz mit VMware vSAN umsetzen'
slug: vmware-vsan
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie mit vSAN die Power der Hyperkonvergenz für Ihre virtuellen Maschinen nutzen.'
section: 'VMware vSphere Funktionen'
order: 0
---

**Stand 09.08.2019**

## Einleitung

In dieser Anleitung erklären wir die Funktionsweise von VMware vSAN und wie Sie es auf der Private Cloud einrichten.

**Hier erfahren Sie, wie Sie mit vSAN die Power der Hyperkonvergenz für Ihre virtuellen Maschinen nutzen.**

## Voraussetzungen

* Sie verfügen über ein [Private Cloud](https://www.ovh.de/private-cloud/){.external} Angebot.
* Sie haben mindestens drei vSAN-Hosts hinzugefügt.
* Sie haben Zugriff auf das vSphere-Verwaltungsinterface.

## Beschreibung

### vSAN: die Grundprinzipien

#### Was ist vSAN?

vSAN ist eine Objektspeicherlösung von VMware. Sie fasst verschiedene, direkt in den Hosts befindliche Festplatten zusammen und präsentiert diese als einen einzigen Datastore. Diese Art von Architektur, die über eine Gruppe von Hosts verteilte Rechen- und Speicherkapazitäten gemeinsam verwendet, wird auch als **hyperkonvergente Architektur** bezeichnet. Da dieser Datastore eine virtuelle Konstruktion ist, die von der vSAN-Software verwaltet wird, spricht man hier auch von Software Defined Storage oder SDS. Ein Vorteil von vSAN ist, dass es vollständig in vSphere integriert ist und direkt über vCenter verwaltet wird.

#### Objektspeicher?

Einer der wichtigsten Aspekte ist, dass es sich bei dem vSAN-Datastore um ein Objektspeichersystem handelt. Die auf diesem Datastore gehosteten VMs bestehen aus verschiedenen Objekten, wohingegen VMs auf einem „klassischen“ Speicher aus Dateien bestehen, die auf einer LUN abgelegt werden. Diese Objekte werden gesichert, indem sie einfach auf verschiedenen Hosts des Clusters repliziert werden, statt sie wie herkömmlich über den RAID-Level der Festplatten zu sichern.

Eine VM besteht aus den folgenden Objekten:
* den Basisdateien der VM (VMX, nvram, Logs, Memory Snapshots, ...), auch VM Home genannt
* den virtuellen Festplatten (VMDK)
* dem Swap
* den Festplatten-Snapshots

Die Elemente, aus denen ein Objekt besteht, werden als Komponenten bezeichnet. Wird ein Objekt zum Beispiel auf zwei Hosts repliziert, so besteht es aus zwei Komponenten. Über die Anzahl der Komponenten eines Objekts kann das Level der Datenresilienz ermittelt werden.

#### Datenschutz

Um den Schutz der Daten im Fall von Hardware-Ausfällen (Hosts, Festplatten etc.) sicherzustellen, müssen die gewünschten Redundanzlevel festgelegt werden. vSAN bietet hierzu zwei komplementäre Mechanismen.

##### Failures To Tolerate (FTT)

Das erste Redundanzlevel betrifft die Anzahl der Fehler, die der vSAN-Cluster kompensieren können soll, egal, ob es sich dabei um den Ausfall einer Festplatte, eines Hosts oder des Netzwerks handelt. Dieser Wert heißt „Primäre Ebene von zu tolerierenden Fehlern“ (*Failures to Tolerate* oder FTT) und kann zwischen 0 (keine Redundanz) und 3 (maximale Redundanz) liegen. Je nach gewünschtem Level „n“ erstellt vSAN verschiedene Komponenten und verteilt diese über jeden der Hosts. So bleiben die virtuellen Maschinen im Fall von Störungen weiterhin verfügbar. Je höher das Redundanzlevel, umso mehr Hosts sind erforderlich:

* FTT=1:  mindestens 3 Hosts
* FTT=2:  mindestens 5 Hosts
* FTT=3:  mindestens 7 Hosts

> [!warning]
>
> Wenn Sie ein FTT-Level von 0 auswählen, besteht für die betreffenden Daten absolut keine Redundanz. Somit besteht ein größeres Risiko, dass die zugehörigen VMs ausfallen.
>

##### Failure Tolerance Method (FTM)

Zusätzlich zur Anzahl der tolerierten Fehler bietet vSAN auch zwei verschiedene Methoden zum Schutz der Daten, aus den Sie auswählen können: Mirroring und Erasure Coding. Diese Mechanismen funktionieren wie die von Festplatten-Controllern verwendeten RAID-Arrays, werden allerdings direkt an den Objekten und somit direkt auf den Komponenten angewendet.

* Mirroring (RAID 1): Dies ist das Standardlevel. Jedes Objekt wird gleichzeitig auf zwei verschiedene Hosts geschrieben (Mirror).
* Erasure Coding + FTT=1 (RAID 5): Jedes Objekt wird in drei Komponenten aufgeteilt und es wird eine vierte Paritätskomponente berechnet. Diese wird verwendet, um fehlende Daten zu finden, wenn eine der Komponenten ausfällt. Um vier Komponenten zu schreiben, werden vier Hosts benötigt.
* Erasure Coding + FTT=2 (RAID 6): Jedes Objekt wird in vier Komponenten aufgeteilt und es werden zwei Paritätskomponenten berechnet. So können zwei fehlende Kapazitätsgeräte neu errechnet werden. Bei dieser Methode sind 6 Hosts erforderlich, um sechs Komponenten auf sechs verschiedene Orte zu schreiben und die entsprechende Redundanz zu gewährleisten.

Die verschiedenen Einstellungen legen die Anzahl der Komponenten fest, aus denen ein Objekt besteht, und geben somit auch die Mindestanzahl an Hosts sowie die Anzahl der zu tolerierenden Fehler (auf Hosts, Festplatten etc.) vor.

|         | | Konfiguration der Objekte entsprechend FTT und FTM|||
|------------------------|----------------------------------|------------------------|------------------------|------------------------|
| Failure Tolerance Method (FTM)   | Failures To Tolerate (FTT) | Äquivalentes RAID | Mindestanzahl Hosts | Anzahl zu tolerierender Fehler |
| Mirroring | 1 | RAID 1 | 3 | 1 |
| Mirroring | 2 | RAID 1 | 5 | 2 |
| Mirroring | 3 | RAID 1 | 7 | 3 |
| Erasure Coding | 1 | RAID 5 | 4 | 1 |
| Erasure Coding | 2 | RAID 6 | 6 | 2 |

> [!primary]
>
> Bei Erasure Coding geben die Schutzlevel RAID 5 und RAID 6 jeweils ein FTT=1 oder 2 vor. Die anderen Werte (0 und 3) sind nicht mit dieser Einstellung kompatibel.
>

#### Speicherverbrauch

Der Einsatz von Redundanzsystemen sorgt logischerweise für einen höheren Speicherbedarf, weswegen ein angemessenes Gleichgewicht gefunden werden muss. Der große Vorteil von vSAN besteht darin, dass Sie die Redundanzeinstellungen pro VM auswählen können, statt für den gesamten Datastore. So können Sie entsprechend der Umgebungsart verschiedene Einstellungen festlegen.

|         | Zusätzlicher Ressourcenverbrauch aufgrund von Redundanz |||
|------------------------|----------------------------------|------------------------|------------------------|
| Schutzlevel   | RAID 1 | RAID 5 | RAID 6 |
| 3 Hosts FTT=1          | x 2    | - | - |
| 4 Hosts FTT=1          | x 2    | x 1.33 | - |
| 5 Hosts FTT=1          | x 2    | x 1.33 | - |
| 6 Hosts FTT=2          | x 2    | - | x 1.5 |

> [!warning]
>
> Aus Gründen der Leistung und Resilienz empfiehlt VMware, nie mehr als 70 % eines vSAN-Datastores zu verwenden.
>

#### Nutzbarer Speicherplatz für Benutzerdaten

Um den zuvor genannten Aspekt zu verdeutlichen, hier eine konservative Schätzung zum verfügbaren Speicherplatz bei verschiedenen Konfigurationen der Private Cloud mit vSAN 256 oder 512 (unter Beachtung der Empfehlung von VMware, nicht mehr als 70 % des Datastores zu übersteigen).

| Anzahl vSAN-256-Hosts  | FTT  | Host Capacity (TB)  | Total Space  | 	Usable Space RAID 1 Policy (TB)  | Usable Space RAID 5 Policy (TB)  | Usable Space RAID 6 Policy (TB)  |
|---|---|---|---|---|---|---|
| 3  | 1  | 4  | 12  | 4,2  | n/a  | n/a  |
| 4  | 1  | 4  | 16  | 5,6  | 8,4  | n/a  |
| 5  | 1  | 4  | 20  | 7,0  | 10,5  | n/a  |
| 6  | 1  | 4  | 24  | 8,4  | 12,6  | n/a  |
| 6  | 2  | 4  | 24  | n/a  | n/a  | 11,1  |

| Anzahl vSAN-512-Hosts  | FTT  | Host Capacity (TB)  | Total Space  | 	Usable Space RAID 1 Policy (TB)  | Usable Space RAID 5 Policy (TB)  | Usable Space RAID 6 Policy (TB)  |
|---|---|---|---|---|---|---|
| 3  | 1  | 8  | 24  | 8,4  | n/a  | n/a  |
| 4  | 1  | 8  | 32  | 11,2  | 16,8  | n/a  |
| 5  | 1  | 8  | 40  | 14,0  | 21,0  | n/a  |
| 6  | 1  | 8  | 48  | 16,8  | 25,2  | n/a  |
| 6  | 2  | 8  | 48  | n/a  | n/a  | 22,2  |

> [!primary]
>
> Diese Zahlen basieren auf der Annahme, dass **alle VMs dieselben Speichereinstellungen** verwenden.
> Eventuelle Einsparungen aufgrund von Deduplizierung/Komprimierung (die je nach Art der gespeicherten Daten stark variieren) werden nicht beachtet.
> Dies ist daher eine sehr konservative Schätzung des Speicherplatzes.
>

#### Festplattengruppen oder Disk Groups

Die physischen Festplatten der Hosts werden in einer Festplattengruppe zusammengefasst. Diese stellt eine vSAN-Verwaltungseinheit dar und besteht aus einer SSD-Cache-Festplatte (erforderliche Komponente) und bis zu 7 Speicherfestplatten (OVH Konfigurationen verwenden nur NVMe-SSDs, um ein Maximum an Leistung zu gewährleisten). Jeder Host, der dem vSAN-System zugeordnet ist, benötigt mindestens eine Festplattengruppe und maximal 5.

Wenn eine Festplattengruppe hinzugefügt wird, wird somit auch eine Cache-Festplatte in den Storage Pool hinzugefügt, was den Cache-Speicherplatz und die allgemeine Performance erhöht.

Da jedoch alle Schreibvorgänge auf der Cache-Festplatte durchgeführt werden, bedeutet der Ausfall einer Cache-Festplatte eines Hosts, dass automatisch die zugehörige Festplattengruppe nicht mehr verfügbar ist. Verfügt der Host insgesamt über nur eine Festplattengruppe, so ist diese bis zum Austausch der fehlerhaften Festplatte nicht mehr für vSAN verfügbar.

Der Vorgang, bei dem Cache- und Speicherfestplatten einer Gruppe zugewiesen werden, heißt **Beanspruchen** oder **Claiming** und wird durchgeführt, wenn Sie vSAN für einen Cluster aktivieren.

##### Das Witness-Objekt

Für vSAN gibt es ein besonderes Objekt, das sogenannte Zeugen- oder Witness-Objekt. Es wird verwendet, um ein Partitionsproblem im Cluster zu beheben. Eine Partition im Netzwerk entsteht, wenn Teile eines Clusters nicht mehr miteinander kommunizieren können oder ein Host isoliert wird.

Im Falle einer RAID-1-Einstellung, bei der sich zwei Kopien eines Objekts auf verschiedenen Partitionen befinden und gleichzeitig bearbeitet werden, ist es nicht mehr möglich, zu ermitteln, wo sich die Referenzdaten befinden. Hier kommt das Witness-Objekt zum Einsatz: Dieses ist eine kleine Datei (2 MB), die ausschließlich Metadaten enthält und verwendet wird, um zu entscheiden, welche Kopie als Referenz dient. Bei einem Cluster mit 3 Hosts und RAID-1-Policy erhalten zwei Hosts eine Datenkopie und der dritte die Witness-Datei, die Informationen über die Datenobjekte enthält. Im Falle einer Netzwerkpartition oder Isolation wird der Host, der weiterhin Zugriff auf das Witness-Objekt hat, im herabgestuften Modus fortgesetzt. Sobald das Problem behoben wurde, wird der isolierte Host mit den neuesten Daten synchronisiert.

Das Witness-Objekt wird normalerweise nur für RAID 1 verwendet, da bei RAID 5 und 6 die Daten und ihre
Paritätskopien auf alle Hosts verteilt sind und ihre Anzahl ausreicht, um Zweideutigkeiten im Fall eines isolierten Hosts zu verhindern.

##### Visualisierung der Objekte

Der Status der Objekte kann in den Eigenschaften des Clusters angezeigt werden. Gehen Sie hierzu in den Tab „Monitor“ und dort in den Bereich „vSAN“.

Klicken Sie anschließend auf „Virtual Objects“.

![](images/vsan_21.png){.thumbnail}

Es werden drei Arten von Objekten angezeigt:

* VM Home
* Festplatte
* RAM-swap-Datei (vswp-Datei)

Wenn Sie auf ein Objekt klicken, können Sie sehen, wie es im Cluster gespeichert ist und aus welchen Komponenten es besteht:

![](images/vsan_22.png){.thumbnail}

Um die anderen Objekttypen zu veranschaulichen, erstellen wir einen Snapshot der VM.

![](images/vsan_23.png){.thumbnail}

Wir sehen, dass ein neues Snapshot-Objekt zu jedem der Festplattenobjekte hinzugefügt wurde.

#### Maximalwerte von vSAN

##### vSAN 6.6

* 5 Festplattengruppen je Host
* 9000 Komponenten je vSAN-Host
* 35 Speicherfestplatten je Host
* 64 Hosts je vSAN-Cluster
* 1 vSAN-Datastore je Cluster
* 6000 virtuelle Maschinen je Cluster
* 12 Stripes je Objekt
* Host-Ausfalltoleranz: 3
* Größe virtueller Festplatten: 62 TB

#### vSAN-Einschränkungen

##### vSAN 6.6

Die folgenden vSphere-Funktionen werden nicht unterstützt:
  * RDM, VMFS, Diagnosepartition
  * Raw Device Mapping (RDM)
  * Storage I/O Control
  * SCSI-Reservierung

### vSAN aktivieren

> [!warning]
>
> In vSphere 6.5 sind vSAN-Operationen nur im vSphere-Web-Client in Flash (Flex) verfügbar, und nicht im HTML-5-Interface.
>

#### Hocherverfügbarkeitsmodus (vSphere HA) deaktivieren

vSAN basiert auf den Hochverfügbarkeitsfunktionen des Clusters. Diese müssen jedoch vor jeder Operation deaktiviert werden.

Gehen Sie hierzu in den Eigenschaften des Clusters, für den vSAN aktiviert werden soll, in den Bereich „vSphere Availability“ und entfernen Sie den entsprechenden Haken:

![](images/vsan_01.png){.thumbnail}

#### vSAN-Einstellungen

Diese Anleitung behandelt nur die grundlegenden vSAN-Funktionen. Wie verwenden daher die Standardoptionen, da sie für diese Art der Verwendung ideal geeignet sind.

![](images/vsan_03.png){.thumbnail}

Die einzigen Optionen, die wir zusätzlich aktivieren, sind Deduplizierung und Komprimierung. Mithilfe dieser Optionen kann die Datenspeicherung optimiert werden, indem alle sich wiederholenden Daten nur einmal gespeichert werden.

Dieser Prozess ist dank den leistungsstarken Flash-Festplatten, die anstelle der herkömmlichen mechanischen Festplatten verwendet werden, möglich.

![](images/vsan_04.png){.thumbnail}

Die Netzwerkkarten für den vSAN-Traffic werden Ihnen automatisch vorgeschlagen.

Klicken Sie anschließend auf `Next`{.action}, um die Festplatten auszuwählen, die für den vSAN-Speicher verwendet werden sollen. Bei der ersten Aktivierung von vSAN werden die Festplatten automatisch erkannt.

![](images/vsan_05.png){.thumbnail}

> [!primary]
>
> Wenn die Festplatten bei einem vorherigen Deployment von vSAN bereits eingerichtet wurden, müssen sie nicht erneut ausgewählt werden. Das Auswahlfenster ist in diesem Fall leer, aber Sie können dennoch zum nächsten Schritt übergehen.
>
> ![](images/vsan_06.png){.thumbnail}
>

Im letzten Fenster können Sie überprüfen, ob alle Einstellungen korrekt sind, bevor Sie den Prozess starten.

![](images/vsan_07.png){.thumbnail}

Die Aktivierung von vSAN kann einige Minuten dauern. Sobald der Vorgang abgeschlossen ist, sind die Konfigurationsinformationen im Tab „vSAN“ verfügbar.

![](images/vsan_08.png){.thumbnail}

> [!warning]
>
> Wichtig: Denken Sie daran, die Hochverfügbarkeitsfunktion Ihres Clusters erneut zu aktivieren.
>

### vSAN deaktivieren

> [!warning]
>
> In vSphere 6.5 sind vSAN-Operationen nur im vSphere-Web-Client in Flash verfügbar, und nicht im HTML-5-Interface.
>

#### Datastore leeren

Evakuieren Sie mithilfe von Storage vMotion alle virtuellen Maschinen in dem vSAN-Datastore oder löschen Sie diejenigen, die Sie nicht mehr brauchen.

Klicken Sie auf den Tab „Datastore“ und überprüfen Sie, dass keine virtuelle Maschine mehr auf dem vSAN-Datastore installiert ist.

![](images/vsan_09.png){.thumbnail}

#### Festplattengruppen löschen

Wenn Sie alle vSAN-Konfigurationsinformationen von Ihren Festplatten entfernen möchten, können Sie die Festplattengruppe löschen, die bei der Aktivierung von vSAN erstellt wurden.

Gehen Sie hierzu in den Eigenschaften des Clusters in den Tab „vSAN“ und dort in den Bereich „Disk Management“.

![](images/vsan_11.png){.thumbnail}

Wählen Sie für jeden Host die betreffende Festplattengruppe aus und klicken Sie auf das Lösch-Icon direkt darüber.

Anschließend werden Sie nach einer Bestätigung gefragt.

![](images/vsan_12.png){.thumbnail}

Die beiden ersten Optionen sind nützlich, wenn Sie möchten, dass der vSAN-Datastore funktionsbereit bleibt, wenn Sie einen Host aus dem Cluster entfernen.

Da Sie Ihren gesamten Datastore löschen werden, ist es nicht notwendig, Ihre Daten zu migrieren. Sie können daher die letzte Option auswählen: „No data evacuation“.

Der Löschvorgang wird einen Moment dauern.

Wiederholen Sie den Vorgang einfach für jeden Node des Clusters, bis die gesamte Festplattengruppe gelöscht wurde.

![](images/vsan_13.png){.thumbnail}

Falls Meldungen zum Gesundheitszustand der Festplattengruppe erscheinen, können Sie diese ignorieren.

#### Hochverfügbarkeit deaktivieren

Wie bei der Aktivierung von vSAN, muss die Hochverfügbarkeit des Clusters auch deaktiviert werden, bevor vSAN ausgeschaltet wird. Gehen Sie hierzu in den Eigenschaften des Clusters in den Bereich „vSphere Availability“ und entfernen Sie den Haken bei „Turn ON vSphere HA“.

![](images/vsan_14.png){.thumbnail}

#### vSAN deaktivieren

Nachdem Sie die Hochverfügbarkeit deaktiviert haben, können Sie vSAN ausschalten.

Klicken Sie in den Eigenschaften des Clusters auf den Button „Edit“.

![](images/vsan_16.png){.thumbnail}

Entfernen Sie anschließend den Haken bei „Turn ON vSAN“.

![](images/vsan_17.png){.thumbnail}

Bestätigen Sie den Vorgang:

![](images/vsan_18.png){.thumbnail}

> [!primary]
>
> Wenn die Hochverfügbarkeit nicht korrekt deaktiviert wurde, erscheint die folgende Fehlermeldung:
>
> ![](images/vsan_19_FR.png){.thumbnail}
>

Wenn der Vorgang abgeschlossen wurde, erscheint folgende Bestätigungsnachricht:

![](images/vsan_20.png){.thumbnail}

> [!warning]
>
> Falls der Cluster virtuelle Maschinen hostet, die auf externen Datastores gespeichert sind, müssen nach diesem Vorgang die Hochverfügbarkeitsfunktionen wieder aktiviert werden.
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
