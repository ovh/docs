---
title: 'Public Cloud Quota erhöhen'
excerpt: 'Erfahren Sie hier, wie Sie eine Erhöhung Ihrer Kontingente für Public Cloud Ressourcen (RAM, CPU, Speicherplatz, Instanzen) direkt über das OVHcloud Kundencenter anfordern.'
updated: 2026-05-05
---

## Ziel

Standardmäßig ist die Anzahl der Public Cloud Projekte sowie der Ressourcen insgesamt (RAM, CPU, Speicherplatz, Anzahl der Instanzen, etc.), die Sie nutzen können, aus Sicherheitsgründen begrenzt.

Um zusätzliche Ressourcen und Projekte nutzen zu können, müssen die Quotas erhöht werden.

**Diese Anleitung erklärt, wie Sie über Ihr OVHcloud Kundencenter eine Erhöhung von Public Cloud Quotas anfordern.**

## Voraussetzungen

- Sie haben eine [gültige Zahlungsart](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods) in Ihrem OVHcloud Kundencenter hinterlegt.

## In der praktischen Anwendung

<!-- CP-NAV-START:publiccloud-projects -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Public Cloud Projekte](/links/control-panel/publiccloud-projects)
- **Navigationspfad:** `Public Cloud`{.action} > Wählen Sie Ihr Projekt aus

---
<!-- CP-NAV-END:publiccloud-projects -->

Klicken Sie in der linken Seitenleiste unter **Einstellungen** auf `Quota und Regionen`{.action}.

![Seite "Quota und Regionen" mit aktuellen Projektkontingenten nach Region](images/raisepciquota1.png){.thumbnail}

Diese Seite zeigt eine Zusammenfassung der aktuellen Quoten Ihres Projekts nach Region. Ein Hinweis wird angezeigt, sobald eine Ressource 80 % ihrer Quote erreicht.

### Erhöhung der Ressourcenquote

Gemäß interner Kriterien (Dienstalter, bezahlte Rechnungen usw.) können Sie direkt vom OVHcloud Kundencenter aus Quotenerhöhungen für Ihre Public Cloud Projekte beantragen.

> [!primary]
>
> Erstmalige Public Cloud Nutzer erhalten bei der Projekterstellung automatisch ein [Gratis-Guthaben von 200 €](/links/public-cloud/free-trial), das einen Monat lang gültig ist. Da die Berechtigung für eine Quotenerhöhung von Kriterien wie der Account-Dauer und bezahlten Rechnungen abhängt, stehen Nutzern des Gratis-Testguthabens möglicherweise nur eingeschränkte Optionen zur Quotenerhöhung zur Verfügung, bis ihre erste Rechnung beglichen wurde.
>

Sie können Ihre Ressourcenquote manuell oder automatisch erhöhen.

#### Automatische Erhöhung Ihrer Ressourcenquoten mit der Funktion "Quota Autoscaling"

Diese Option ermöglicht Ihnen, eine automatische und schrittweise Erhöhung Ihrer Ressourcenquote zu beantragen. Die Quote wird basierend auf Ihrer realen Nutzung angepasst, **wenn Sie 60 % Ihrer aktuellen Quote 30 aufeinanderfolgende Tage überschreiten**, sowie anhand einer Reihe interner und finanzieller Kriterien.

> [!primary]
>
> Dieser Prozess eignet sich nicht für schnelle Anpassungen der Quote.
>

Im oberen rechten Bereich der Seite ist die Option **Quota Autoscaling** verfügbar:

- Um weitere Informationen zu dieser Funktion zu erhalten, klicken Sie auf das Symbol `?`{.action} neben dieser Option.
- Aktivieren Sie die Option, indem Sie auf die Schaltfläche rechts neben dieser Option klicken. Der Status ändert sich von *Deaktiviert* zu *Aktiviert*.

![Schaltfläche zum Aktivieren/Deaktivieren des Quota Autoscalings im Status "Aktiviert"](images/autoscaling.png){.thumbnail}

Sobald aktiviert, erhöht sich die Quote Ihres Projekts automatisch und schrittweise basierend auf Ihren tatsächlichen Anforderungen.

#### Manuelle Erhöhung Ihrer Ressourcenquote

> [!primary]
>
> Wenn Sie Ihre Quota erhöhen möchten und die Schaltfläche `Quota erhöhen`{.action} in Ihrem Kundencenter nicht verfügbar ist, klicken Sie auf die Schaltfläche `Kundendienst kontaktieren`{.action}.
>

![Schaltfläche "Kundendienst kontaktieren" auf der Quota-Seite im Kundencenter](images/contact_support_quota.png){.thumbnail}

Dieser Vorgang ermöglicht eine schnelle und erhebliche Erhöhung Ihrer Quoten (z. B. schnelles Skalieren, GPU-Instanzen usw.). Dieses Verfahren basiert auf dem sofortigen Kauf von Cloud-Guthaben, aus denen alle relevanten Kosten automatisch abgebucht werden.

Sie können verschiedene Gutschriftsbeträge erwerben.

Klicken Sie auf die Schaltfläche `Quota erhöhen`{.action}.

![Schaltfläche "Quota erhöhen" im Bereich Public Cloud Quota](images/raisepciquota2.png){.thumbnail}

Klicken Sie dann auf den Dropdown-Pfeil neben `Wählen Sie die Menge aus`{.action}, um die Liste der derzeit verfügbaren Kontingente anzuzeigen, auf die Sie Ihre Ressourcen aktualisieren können. In diesem Abschnitt wird auch der fällige Betrag angezeigt, um diese Ressourcen nutzen zu können.

![Dropdown-Liste mit verfügbaren Quota-Stufen und zugehörigen Kosten](images/selectquotas.png){.thumbnail}

Die nachstehende Tabelle zeigt die Ressourcen, die Sie für jedes Kontingent erhalten:

|Quota|Instanzen|CPU/Cores|RAM (GB)|Größe des Volumes (TB)|Volumes (Maximale Anzahl)|Backups|Größe Backup (TB)|Floating IPs|Octavia Load Balancer|Gateway (Routers)|
|---|---|---|---|---|---|---|---|---|---|---|
|20 VMs|20|40|430|20|200|1200|120|30|10|4|
|50 VMs|50|64|507|20|500|3000|300|75|25|10|
|100 VMs|100|128|1015|40|1000|6000|600|300|50|10|
|200 VMs|200|512|4063|80|2000|12000|1200|600|50|50|

Klicken Sie nach Auswahl der gewünschten Kapazität auf `Bestätigen`{.action}. Ihre Zahlung wird so schnell wie möglich bearbeitet.

> [!warning]
>
> **Jede manuelle Erhöhung der Quote wird unmittelbar in Rechnung gestellt.**
>
> Nachdem Sie auf die Schaltfläche `Bestätigen`{.action} geklickt haben, wird die Bestellung automatisch erstellt und der Betrag wird von Ihrer Standardzahlungsmethode abgebucht.
>

Für eine detailliertere Ansicht Ihrer Ressourcen besuchen Sie die [Horizon-Oberfläche](https://horizon.cloud.ovh.net/auth/login/). Klicken Sie nach der Anmeldung auf `Project`{.action} und dann auf `Overview`{.action}.

### Erhöhung der Quoten Ihres Public Cloud Projekts

Es gibt zwei Hauptfälle, in denen Sie möglicherweise eine Anpassung der Quote benötigen:

1. **Maximale Anzahl an Projekten erreicht**: Wenn Sie die maximale Anzahl an Public Cloud Projekten in Ihrem Kundenkonto erreicht haben und neue erstellen möchten, müssen Sie eine Anfrage an unser Support-Team stellen.

2. **Andere Arten von Quotenanfragen**: Für alle anderen Grenzwerte (CPU, RAM, Speicher usw.) oder spezifische Anforderungen, die mit Ihren Public Cloud Projekten zusammenhängen, können Sie ebenfalls den Support kontaktieren, um eine Erhöhung zu beantragen.

> [!primary]
>
> Quotenanfragen werden manuell von unserem Team bearbeitet. Die Bearbeitungsdauer kann je nach Komplexität der Anfrage variieren. Wir empfehlen Ihnen, Ihre Anfrage so früh wie möglich einzureichen, um Verzögerungen bei Ihren Projekten zu vermeiden.

Um die Bearbeitung zu beschleunigen, geben Sie bitte Folgendes in Ihrer Anfrage an:

- Den Typ der zu erhöhenden Quote (Anzahl der Projekte, Ressourcen usw.);
- Die beabsichtigte Verwendung und Begründung der Erhöhung;
- Den gewünschten Zeitraum oder die Dauer der Erhöhung.

### Spezifische Quoten und spezielle Ressourcen

Für bestimmte Ressourcen oder Dienste können spezifische Quoten gelten. Weitere Informationen finden Sie hier:

**S3 Quoten**<sup>1</sup>: siehe die offizielle Dokumentation "[Object Storage - Technische Grenzen (EN)](/pages/storage_and_backup/object_storage/s3_limitations)".

**Quoten für den Managed Kubernetes Service (MKS)**: siehe die offizielle Dokumentation "[ETCD Quotas, usage, troubleshooting and error (EN)](/pages/public_cloud/containers_orchestration/managed_kubernetes/etcd-quota-error)".

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
