---
title: Testen des vorübergehenden Verlusts eines Hosts durch Aktivierung des Resilienz-Modus
excerpt: So testen Sie den vorübergehenden Ausfall eines Hosts im Resilienz-Modus auf Ihrer OVHcloud Hosted Private Cloud Infrastruktur
---

## Ziel

Wenn Sie einen Resilienz-Test für Ihre OVHcloud Hosted Private Cloud Infrastruktur durchführen möchten, können Sie im Resilienz-Modus den vorübergehenden Verlust eines Hosts simulieren, um die Business Continuity Ihrer Produktion im Falle einer Störung zu validieren.

**So testen Sie den vorübergehenden Ausfall eines Hosts im Resilienz-Modus auf Ihrer OVHcloud Hosted Private Cloud Infrastruktur**

## Voraussetzungen

- Sie nutzen ein Angebot der Art [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/).
- Sie sind in Ihrem [OVHcloud-Kunden Center eingeloggt](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Diese Operation wird über die APIs von OVHcloud durchgeführt und führt dazu, dass der Zugriff auf das Netzwerk für den ausgewählten Host unterbrochen wird. Anschließend wird der Host für eine vorab festgelegte Dauer (min:10min, max:24h, default:1h) deaktiviert.

Dieser Test ist unabhängig vom Überwachungssystem und vermeidet so den automatischen Austausch des Hosts.

Die VMs werden heruntergefahren, und die Migration und der anschließende Neustart auf den verbleibenden Host bzw. die verbleibenden Hosts werden von vSphere HA durchgeführt, sofern die Funktion auf Ihrem Cluster korrekt konfiguriert ist.

Weitere Informationen zu vSphere HA finden Sie in der VMware-Dokumentation „Funktionsweise [von vSphere HA](https://docs.vmware.com/de/VMware-vSphere/7.0/com.vmware.vsphere.avail.doc/GUID-33A65FF7-DA22-4DC5-8B18-5A7F97CCA536.html)“.

Sie können so die Zeit abschätzen, die benötigt wird, um den Betrieb wieder aufzunehmen, vom Start des Tests und der Störungssimulation (RTO) bis zum Neustart der VMs.

Im Folgenden sind die Aufrufe aufgeführt, mit denen wir die Kennungen Ihrer Infrastruktur, Ihres Rechenzentrums und des Hosts, für die wir diesen Test durchführen möchten, auflisten und abrufen können:

So rufen Sie den Namen Ihrer Infrastruktur ab: (pcc-xx-xx-xx):

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud

So rufen Sie die Kennung Ihres Datacenters ab:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter

Und schließlich, um die Kennung Ihres Hosts abzurufen:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host

Sobald Sie diese Informationen haben, können Sie den folgenden Aufruf verwenden, um zu bestätigen, dass Sie die Aktion ausführen können. Dieser Aufruf validiert die Bedingungen, unter denen der Test ausgeführt wurde, und verhindert somit einen Aktivitätsverlust:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/canBeEnabled

Wenn der Test ausgeführt werden kann, lautet das Ergebnis: true.

Um den Test zu starten, können Sie folgenden Aufruf verwenden:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/enable

Der Host wird dann abgemeldet und wechselt bis zum Ende des Tests in den Modus „Keine Antwort“:

![vSphere](images/resilience_mode.png){.thumbnail}

Sie können den Status der Aktion mit folgendem Aufruf überprüfen:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience

Wenn der Test auf dem Host erfolgreich gestartet wurde, lautet das Ergebnis: enabled.

Falls erforderlich, können Sie den Test mit diesem Aufruf auch vor der ausgewählten Zeit anhalten:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/disable

Die zurückgegebenen Informationen enthalten den Zeitplan für den Task „updateHostResilienceOff“.

Die Host-Konnektivität wird nach Abschluss des Tests wiederhergestellt, und Ihre HPC-Infrastruktur wird wieder normal genutzt.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
