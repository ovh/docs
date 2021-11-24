---
title: Verwendung des VMware Update Manager
slug: verwendung_des_vmware_update_manager
excerpt: Verwenden Sie das Tool von VMware, um Ihre Hosts auf dem neuesten Stand zu halten
section: VMware vSphere Funktionen
order: 09
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 23.11.2021**

## Ziel

Die VMware Update-Verwaltung erlaubt es Ihnen, Ihre Hosts auf dem neuesten Stand zu halten, indem Sie die *Fixed Bug* und Patches für die Sicherheit installieren, ohne dass unsere Teams eingreifen.     

> [!primary]
> vCenter Updates oder größere Updates erfordern immer unsere Teilnahme.

**In dieser Anleitung wird erläutert, wie das Tool funktioniert**

## Voraussetzungen

- Als Administrator-Kontakt für die [Hosted Private Cloud Infrastruktur](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) fungieren, um Login-Daten zu erhalten.
- Sie haben eine aktive Benutzerkennung mit spezifischen Rechten für NSX (erstellt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de))

## In der praktischen Anwendung

### Maintenance mMde

Bevor Sie an einem Host arbeiten, müssen Sie diesen in den Wartungsmodus versetzen.    
Das Patchen bewirkt in der Regel einen Neustart des Hosts, was die Auswirkungen auf Ihre Produktions-VMs begrenzt. 

Gehen Sie im Menü des vSphere Interface auf das Dashboard `Hosts and Clusters`{.action}.

![Instandhaltung](images/en01menu.png){.thumbnail}

Klicken Sie links auf Ihren Host. Wählen Sie `Enter Maintenance Mode`{.action} In den `Maintenance Mode`{.action}.

![Instandhaltung](images/en02maintenance.png){.thumbnail}

Vergewissern Sie sich, dass im nächsten Schritt ein Haken gesetzt ist, und klicken Sie dann auf `OK`{.action}.

![Instandhaltung](images/en03enter.png){.thumbnail}

Wenn DRS aktiv ist, werden Ihre Produktions-VMs auf einen anderen Host migriert.

> [!primary]
> Wenn Sie Ihre Umgebung angepasst haben, müssen die Migrationen der VMs möglicherweise manuell durchgeführt werden.
>

Folgende Warnung kann erscheinen:     

![Instandhaltung](images/en04warning.png){.thumbnail}

Ihr Host befindet sich nun im Wartungsmodus.

![Instandhaltung](images/en05maintenanced.png){.thumbnail}

### Update Manager

Wählen Sie Ihren Host und gehen Sie in den Bereich `Update`{.action}.
Sie sehen die verschiedenen Basisstatuten und die Konformität des Hosts.     

Sie müssen eine "Basislinie"verwenden, um die Konformität zu überprüfen.

![Update](images/en06summary.png){.thumbnail}

Klicken Sie im `Attached Baselines` auf `Attach`{.action} und `Attach Baseline or Baseline Group`{.action}.

![Update](images/en07attach.png){.thumbnail}

Es gibt vordefinierte Basenlinien für die verschiedenen empfohlenen Korrekturstufen.

> [!primary]
> In unserem Beispiel verwenden wir kritische Patches, aber Sie können die beiden existierenden Leitungen verwenden oder nach Belieben andere erstellen, um die verschiedenen Anforderungen Ihrer Umgebung zu erfüllen.
>

Wählen Sie die gewünschte Basiszeile aus und klicken Sie dann auf `Attach`{.action}.

![Update](images/en08define.png){.thumbnail}

Die Konformitätserklärung wird anschließend aktualisiert.     

![Update](images/en09noncompliant.png){.thumbnail}

Gehen Sie zurück in den `Attached Baselines`, wählen Sie alle zugewiesenen Basisleitungen aus und klicken Sie auf `Remediate`{.action}.

![Update](images/en10remediate.png){.thumbnail}

Wählen Sie den Host aus und klicken Sie erneut auf `Remediate`{.action}.

![Update](images/en11remediate.png){.thumbnail}

Das Update wird abhängig von Anzahl und Größe der verwendeten Patches gestartet und durchgeführt.<br>
Wenn nötig wird Ihr Host automatisch neu gestartet.

![Update](images/en12remediating.png){.thumbnail}

Am Ende des Prozesses wird die Konformitätsprüfung wieder aufgenommen (oder durch Klicken auf die Verbindung erzwungen), und es wird erwartet, dass eine grüne Hähne erscheint.

![Update](images/en13compliant.png){.thumbnail}

Ihr Host ist jetzt auf dem neuesten Stand.    

Denken Sie daran, ihn aus dem Wartungsmodus zu entfernen, und er wird wieder in der Produktion sein.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
