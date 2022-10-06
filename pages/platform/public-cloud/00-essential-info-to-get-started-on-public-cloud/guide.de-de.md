---
title: Die wichtigsten Informationen zum Start mit Public Cloud
excerpt: "Entdecken Sie nützliche Grundkenntnisse, um in der Public Cloud Umgebung anzufangen"
slug: public-cloud-essential-information
section: Erste Schritte
order: 01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 07.02.2022**

## Ziel

Die OVHcloud Public Cloud ist eine Infrastruktur mit einer großen Auswahl weltweit verfügbarer Cloud-Produkte, die miteinander kompatibel sind und deren Verwendung sich für einen kurzen Zeitraum (eine Stunde, einige Tage) oder langfristig (mehrere Monate, Jahre) eignet.

Die Bereitstellung erfolgt fast augenblicklich, und die Abrechnung ist transparent und flexibel an Ihre Nutzung angepasst.

In dieser Anleitung erfahren Sie die wesentlichen Punkte für eine erfolgreiche Produktnutzung.
<br>Wir stellen Ihnen zunächst die [essentiellen Produktmerkmale der Public Cloud](#global-approach) und einige allgemeine Begriffe vor, dann einen [konkreten Ansatz mit den Vorteilen der Public Cloud](#concrete-approach) sowie die ersten Schritte.
<br>Anschließend finden Sie Links zu [weiterführenden Wissensressourcen](#gofurther).

Wenn Sie diese Konzepte bereits kennen, können Sie mit der OVHcloud Public Cloud fortfahren, indem Sie folgende Anleitungen heranziehen:

- [OVHcloud Account öffnen](https://docs.ovh.com/de/customer/ovhcloud-account-erstellen/)
- [Ihr erstes Public Cloud Projekt erstellen](https://docs.ovh.com/de/public-cloud/erstellung_public_cloud_projekt/)
- [Einführung in das Public Cloud Interface](https://docs.ovh.com/gb/en/public-cloud/public-cloud-interface/)
- [Erste Instanz erstellen](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/)
- [Quota verwalten](https://docs.ovh.com/de/public-cloud/public-cloud-quota-erhoehen/)

## Globaler Ansatz <a name="global-approach"></a>

### Ein Ökosystem mit Ressourcen *on-demand*

Alle in der Public Cloud verfügbaren Produkte (wie Server, Kubernetes-Cluster, Festplattenvolumen, etc.) bilden ein Ökosystem.
<br>Jedes Element entspricht einer Funktion und erfüllt einen Bedarf, kann allein oder zusätzlich zu anderen Elementen des Katalogs verwendet werden.
<br>So kann beispielsweise eine Instanz (ein Server *on demand*) als Ergänzung zu Speicherelementen wie Object Storage verwendet werden. Wenn Ihre Anwendung eine Datenbank benötigt, gibt es auch ein Element, um dieser Anforderung nachzukommen.

Alle diese Komponenten werden in eine Umgebung integriert, um den Einsatz und die Nutzung dieser Ressourcen zu erleichtern.
<br>So ist es sehr einfach, Ressourcen wie eine Instanz oder ein Kubernetes-Cluster zu starten. Die Inbetriebnahme erfolgt in wenigen Sekunden.
<br>Sie können diese Ressourcen auch einige Stunden später löschen und so nur diese Nutzungszeit bezahlen. Das wird als Ressourcen *on demand* bezeichnet.

![Public Cloud Ecosystem](images/ecosystem.png){.thumbnail}

### Überall verfügbare Ressourcen

Der Public Cloud Katalog bietet sowohl Ressourcen auf niedriger Ebene, wie private Instanzen oder Netzwerke als auch gemanagte Ressourcen auf höherer Ebene, etwa Datenbanken.
<br>Diese Ressourcen werden als Dienstleistung bereitgestellt, da der Nutzer die Elemente nicht kaufen muss, sondern sie für eine bestimmte Zeit verwendet und lediglich den Preis für die Nutzungszeit zahlt (gemietet *as-a-service*).
<br>In den meisten Fällen ist die Verwendung dieser Ressourcen nicht an einen festen Zeitraum gebunden (außer bei einer monatlichen Abrechnung zur Reduzierung Ihrer Kosten).

Wenn die Ressource als "managed" angeboten wird, geht es meist um eine Ressource höherer Verwaltungsebene, die bereits nahe an der Anwendungsschicht ist, wie einem Datenbank-Cluster, einem Kubernetes-Cluster, einer Modelltrainingslösung für KI, etc.
<br>"Managed" bedeutet, dass die Plattform von OVHcloud eingerichtet, gewartet und geupdatet wird. Sie müssen sich nicht um diese Verwaltung kümmern und profitieren direkt von der Dienstleistung.

Die Ressourcen sind in unseren verschiedenen Rechenzentren weltweit verfügbar. OVHcloud bietet Public Cloud Dienste in Europa, Nordamerika, Asien und Ozeanien an.
<br>Sie können an jedem dieser Orte eine Ressource starten, indem Sie einfach den gewünschten Standort auswählen.

![Public Cloud Geolocation](images/geolocation.png){.thumbnail}

### Cloud-Anbieter auf einem ausgereiften Markt

Die OVHcloud Public Cloud ist neben bekannten Cloud-Anbietern wie AWS (Amazon Web Services), GCP (Google Cloud Platform), Azure (von Microsoft) oder Alibaba Cloud positioniert. Unser Angebot zeichnet sich durch [besonders günstige Preise](https://www.ovhcloud.com/de/public-cloud/prices/) und die Verwendung von Standard-APIs aus, die unseren Nutzern Änderungen erlauben, ohne sich einer einzelnen proprietären Technologie unterwerfen zu müssen.

## Konkreter Ansatz <a name="concrete-approach"></a>

### Einsatzzwecke: konkrete Beispiele und deren Vorteile

- **Mehr Flexibilität**: *Sie haben eine Anwendung, die aktuell auf einem klassischen Hosting läuft, beispielweise einen oder mehrere Dedicated Server, und Sie möchten mehr Flexibilität bei der Nutzung.* Die Verwendung von Public Cloud Instanzen funktioniert ähnlich der Verwendung eines Dedicated Servers, bietet aber die Möglichkeit, Ihren Server einfach neu zu dimensionieren, stets aktuelle Hardware zu verwenden, Speicherplatz im laufenden Betrieb hinzuzufügen, die Netzwerkarchitektur frei zu konfigurieren, Backups zu planen sowie Ihren Server in wenigen Schritten zu klonen.

- **Mehr Skalierbarkeit**: *Sie entwickeln eine Cloud-Anwendung und möchten eine Infrastruktur, die große Lastschwankungen bewältigen kann.* Kubernetes-Cluster können je nach Last dynamisch reagieren und sich anpassen. Sie können automatisch Nodes zum Cluster hinzufügen, sobald der Druck auf die Infrastruktur steigt.

- **Mehr Kostenkontrolle**: *Sie haben eine saisonabhängige Anwendung im Produktivbetrieb und möchten die Compute-Last zum Zeitpunkt der Lastspitzen abwälzen, ohne im Laufe des Jahres hohe Infrastrukturkosten zu erzeugen.* Die stundenweise abgerechneten Instanzen können Tasks kurzfristig ausführen und nach Abschluss der Abrechnung gelöscht werden.

- **Mehr Gelassenheit**: *Sie benötigen eine Datenbank, aber Sie möchten die Engine nicht verwalten und warten.* Datenbanken *as-a-service* sind innerhalb von Sekunden verfügbar und werden vollständig von OVHcloud verwaltet. Sie können den Datenbankdienst direkt verwenden, ohne sich um Installation, Wartung, Updates usw. zu kümmern.

### Verwendung: ein einfaches Interface und Standard-APIs

Es gibt mehrere Möglichkeiten, Public Cloud Ressourcen zu verwalten. Ob als Einsteiger oder fortgeschrittener Nutzer, die Handhabung von Public Cloud Diensten bleibt einfach.

- Um die Produkte zu entdecken, unterstützt Sie das Kundencenter bei der Erstellung von Ressourcen, indem Sie die Performance, den Standort, die gewünschte Personalisierung und andere Einstellungen wie die Abrechnung auswählen.

- Um Deployments zu automatisieren und Ihre Architekturen zu industrialisieren, können Sie auch gängige Tools verwenden, indem Sie sich direkt über Standard-APIs wie der S3-API, den OpenStack-APIs oder sogar Kubernetes verbinden.

### In der praktischen Anwendung

#### Das Projekt

Um zu starten benötigen Sie zunächst einen OVHcloud [Kunden-Account](https://docs.ovh.com/de/customer/ovhcloud-account-erstellen/).

Erstellen Sie anschließend ein [Public Cloud Projekt](https://docs.ovh.com/de/public-cloud/erstellung_public_cloud_projekt/). Ein Projekt ist eine Umgebung, die einem Kontext zugeordnet wird.

Sie können zum Beispiel Ihre Test- und Produktionsumgebungen in zwei Projekte aufteilen.
<br>Sie können auch jeweils ein Projekt Ihren Anwendungen zuordnen (öffentliche Website, Webshop, Business-Anwendung, Dokumentenverwaltung, etc.).

Um ein Projekt zu starten müssen Sie bei der Erstellung des Projekts unbedingt eine Zahlungsart hinterlegen.

#### Abrechnung

Da Ihr Zahlungsmittel hinterlegt ist, wird der berechnete Betrag [am Ende des Monats abgebucht](https://docs.ovh.com/de/public-cloud/informationen-zu-cloud-abrechnungsoptionen/). Diese Berechnung erfolgt auf der Grundlage der Nutzungszeit der einzelnen Ressourcen und des Preises der Ressourcen.

Beispiel: Sie haben 1 Instanz d2-8 für den ganzen Monat verwendet, sowie 3 Instanzen b2-60 für insgesamt 32 Stunden während dieses Monats.
<br>Ihre Rechnung beträgt 720 (Stundenzahl im Monat) x 0,0325 € ohne MwSt (stündlicher Preis für d2-8) + 32 x 0,4589 € ohne MwSt (stündlicher Preis für b2-60). Das ergibt also 38,08 € ohne MwSt.

#### Verwaltung der Quotas

Es kann sein, dass Sie sich mit einer Begrenzung der Kontingente für Public Cloud befassen müssen.
<br>Die Public Cloud Quotas definieren das Maximum an Ressourcen, die Sie starten können. Es hängt von bestimmten Parametern ab (zum Beispiel: Alter des Accounts, vorherige Rechnungen).
<br>Diese Quotas werden nach Region zugeteilt (im Sinne von OpenStack). Es kann daher sein, dass Sie das Maximum an Ressourcen für Ihr Projekt erreichen und [diese Quotas erhöhen müssen](https://docs.ovh.com/de/public-cloud/public-cloud-quota-erhoehen/).

![Public Cloud quota](images/quota.png){.thumbnail}

#### Benutzerverwaltung

Sie können mehrere Benutzer verwalten, die an Ihrem Projekt beteiligt sind.
<br>Sie haben dann zwei Möglichkeiten:

- Wenn Sie die OpenStack- oder S3-APIs oder das Horizon-Interface verwenden möchten, müssen dafür [Benutzer erstellt werden](https://docs.ovh.com/de/public-cloud/openstack-user-erstellen-loeschen/). Die Benutzer können gegebenenfalls eingeschränkte Rechte haben, um die Verwaltungsbereiche abzusichern.
- Wenn der Zugriff nicht die APIs oder Horizon beinhalten muss, können Sie dem Projekt auch [einen weiteren OVHcloud Kunden-Account hinzufügen](https://docs.ovh.com/de/public-cloud/seine-Projekte-delegieren/).

## Weiterführende Informationen <a name="gofurther"></a>

Nachfolgend finden Sie grundlegende Wissensressourcen, die Ihnen bei Ihrem Start mit der Public Cloud helfen:

|Dokumentation|Beschreibung|
|---|---|
|[FAQ](https://docs.ovh.com/de/public-cloud/public-cloud-faq/)|Die häufigsten Fragen zur Public Cloud.|
|[Glossar](https://docs.ovh.com/gb/en/public-cloud/introduction-to-instances-and-other-cloud-based-terms/)|Die Konzepte und Definitionen zur fortgeschrittenen Nutzung.|
|[Verfügbarkeit der Dienste nach Standort](https://www.ovhcloud.com/fr/public-cloud/regions-availability/)|Verfügbarkeitstabellen der Dienste über die verschiedenen Standorte hinweg.|
|[Changelog](https://docs.ovh.com/de/public-cloud/changelog-images/)|Änderungslogs von öffentlich verfügbaren System-Images.|

Verwenden Sie folgende Anleitungen, um Informationen zum praktischen Vorgehen zu erhalten:

|Dokumentation|Beschreibung|
|---|---|
|[Erste Instanz erstellen](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/)|Praktische Anleitung zum Starten eines Cloud-Servers über das OVHcloud Kundencenter.|
|[Verwendung von SSH-Schlüsseln](https://docs.ovh.com/de/public-cloud/verwendung-ssh-key-public-cloud-interface/)| Um sich mit einer Linux-Instanz zu verbinden, benötigen Sie eine SSH-Verbindung. In dieser Anleitung erfahren Sie, wie diese verwendet wird.|
|[Konfiguration des privaten Netzwerks](https://docs.ovh.com/gb/en/public-cloud/public-cloud-vrack/)|Bei OVHcloud werden private Netzwerke mit der vRack Technologie eingesetzt. Diese Anleitung begleitet Sie bei der Umsetzung.|
|[Eine zusätzliche Disk mit einer Instanz verbinden](https://docs.ovh.com/de/public-cloud/erstellen_zustzliche_festplatte_public_cloud/)|In dieser Anleitung erfahren Sie, wie Sie zusätzlichen Storage zu Ihrer Instanz hinzufügen.|
|[Auf das Horizon-Interface zugreifen](https://docs.ovh.com/de/public-cloud/erstellung_eines_zugangs_zu_horizon/)|Das OpenStack Horizon Interface erlaubt einige erweiterte Einstellungen. Der Zugriff wird hier erklärt.|
|[Kubernetes-Cluster erstellen](https://docs.ovh.com/gb/en/kubernetes/creating-a-cluster/) (EN) |Diese Anleitung begleitet Sie bei der Erstellung Ihres ersten Kubernetes-Clusters.|
|[Eine Additional IP konfigurieren](https://docs.ovh.com/de/public-cloud/failover-ip-konfigurieren-pci/)|Mit Additional IPs können Sie den Traffic von einer Instanz auf eine andere umstellen. In dieser Anleitung erfahren Sie, wie Sie diesen konfigurieren.|
|[OpenStack CLI installieren](https://docs.ovh.com/de/public-cloud/vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/)|OpenStack kann auch über die Kommandozeile verwendet werden. Hier können Sie die Tools installieren.|

Einer der großen Vorteile der Verwendung von Standard- und Open-Source-Technologien wie OpenStack oder Kubernetes besteht darin, dass alle bereits verfügbaren Dokumentationen herangezogen werden können.

|Dokumentation|Beschreibung|
|---|---|
|[OpenStack CLI](https://docs.openstack.org/python-openstackclient/stein/#using-openstackclient) (EN)|Die vollständige Dokumentation des essentiellen 'OpenStack' Clients in der Kommandozeile. Dokumentation für die Stein Version: Nutzen Sie [die Verfügbarkeitstabelle](https://www.ovhcloud.com/fr/public-cloud/regions-availability/), um zu sehen, welche Dienstleistungen verfügbar sind.|
|[OpenStack API](https://docs.openstack.org/stein/api/) (EN)|Die vollständige Dokumentation zu OpenStack für die "Stein"-Version. Nutzen Sie [die Verfügbarkeitstabelle](https://www.ovhcloud.com/fr/public-cloud/regions-availability/), um zu sehen, welche Dienstleistungen verfügbar sind.|
|[Benutzer-Dokumentation](https://docs.openstack.org/stein/user/) (EN)|Vollständige Dokumentation für den OpenStack-Benutzer in der "Stein"-Version.|
|[Entwickler-Dokumentation](https://developer.openstack.org/) (EN)|Dokumentation für Entwickler, die ihre Anwendung mit der OpenStack API verbinden möchten, unter Verwendung der verfügbaren Bibliotheken/SDKs.|
|[Kubernetes CLI Overview](https://kubernetes.io/docs/reference/kubectl/overview/) (EN)| Dokumentation des essentiellen CLI-Clients *kubectl*.|
|[Kubernetes API Overview](https://kubernetes.io/docs/reference/using-api/) (EN)| Kubernetes-API-Dokumentation für einen umfassenden Überblick zu deren Fähigkeiten.|

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/>.
