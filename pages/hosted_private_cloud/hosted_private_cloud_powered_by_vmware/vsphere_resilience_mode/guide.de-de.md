---
title: Testen des vorübergehenden Verlusts eines Hosts durch Aktivierung des Resilienz-Modus
excerpt: Erfahren Sie hier, wie Sie den Ausfall eines Hosts im Resilienz-Modus auf Ihrer OVHcloud Hosted Private Cloud Infrastruktur simulieren
updated: 2023-11-29
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Wenn Sie einen Resilienz-Test für Ihre OVHcloud Hosted Private Cloud Infrastruktur durchführen möchten, können Sie im Resilienz-Modus den vorübergehenden Verlust eines Hosts simulieren, um die Business Continuity Ihrer Produktion im Falle einer Störung zu validieren.

**Diese Anleitung erklärt, wie Sie den vorübergehenden Ausfall eines Hosts im Resilienz-Modus auf Ihrer OVHcloud Hosted Private Cloud Infrastruktur testen.**

## Voraussetzungen

- Sie verwenden eine [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) Infrastruktur.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Diese Operation wird über die OVHcloud API durchgeführt und führt dazu, dass der Zugriff auf das Netzwerk für den ausgewählten Host unterbrochen wird. Anschließend wird der Host für eine vorab festgelegte Dauer (min:10min, max:24h, default:1h) deaktiviert.

Dieser Test ist unabhängig vom Monotoring und vermeidet so den automatischen Austausch des Hosts.

Die VMs werden heruntergefahren, und die Migration und der anschließende Neustart auf den verbleibenden Hosts werden von vSphere HA durchgeführt, sofern die Funktion auf Ihrem Cluster korrekt konfiguriert ist.

Weitere Informationen zu vSphere HA finden Sie in der VMware-Dokumentation: [Arbeitsweise von vSphere HA](https://docs.vmware.com/de/VMware-vSphere/7.0/com.vmware.vsphere.avail.doc/GUID-33A65FF7-DA22-4DC5-8B18-5A7F97CCA536.html).

Sie können so die Zeit abschätzen, die benötigt wird, um den Betrieb wieder aufzunehmen, vom Start des Tests und der Störungssimulation (RTO) bis zum Neustart der VMs.

Im Folgenden sind die Aufrufe aufgeführt, um die Kennungen der Infrastruktur, des Rechenzentrums und des Hosts, für der Test durchgführt wird aufzulisten und abzurufen:

So rufen Sie den Namen Ihrer Infrastruktur ab: (`pcc-xx-xx-xx`):

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud

So rufen Sie die `datacenterId` ab:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter

Und schließlich, um die `hostId` abzurufen:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host

Sobald Sie diese Informationen haben, können Sie den folgenden Aufruf verwenden, um zu bestätigen, dass Sie die Aktion ausführen können. Dieser Aufruf validiert die Bedingungen, unter denen der Test ausgeführt wurde, und verhindert somit einen Aktivitätsverlust:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/canBeEnabled

Wenn der Test ausgeführt werden kann, lautet das Ergebnis: `true`.

Um den Test zu starten, können Sie folgenden Aufruf verwenden:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/enable

Der Host wird dann abgemeldet und wechselt bis zum Ende des Tests in den Modus "No response":

![vSphere](images/resilience_mode.png){.thumbnail}

Sie können den Status der Aktion mit folgendem Aufruf überprüfen:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience

Wenn der Test auf dem Host erfolgreich gestartet wurde, lautet das Ergebnis: `enabled`.

Falls erforderlich, können Sie den Test mit diesem Aufruf auch vor der ausgewählten Zeit anhalten:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/disable

Die zurückgegebenen Informationen enthalten den Zeitplan für den Task "updateHostResilienceOff".

Die Host-Konnektivität wird nach Abschluss des Tests wiederhergestellt, und Ihre Hosted Private Cloud Infrastruktur wird wieder normal genutzt.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
