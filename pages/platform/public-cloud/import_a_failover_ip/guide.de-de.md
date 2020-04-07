---
title: 'Failover-IP importieren'
slug: import_einer_failover-ip
excerpt: 'Erfahren Sie hier, wie Sie eine Failover-IP-Adresse in ein Public Cloud Projekt importieren'
legacy_guide_number: g1883
section: 'Netzwerk und IP'
---

**Letzte Aktualisierung am 07.04.2020**

## Ziel

Möglicherweise müssen Sie auf Ihre Instanz eine Failover-IP-Adresse konfigurieren, weil:

- Sie mehrere Webseiten auf Ihrer Instanz verwalten.
- Sie internationale Projekte hosten.
- Sie von einem Dedicated Server zu einer Public Cloud Instanz migrieren möchten.

Im OVHcloud Kundencenter können Sie eine Failover-IP-Adresse, die mit einem anderen OVHcloud Dienst verknüpft ist, einfach Ihrem Projekt zuordnen.

**In dieser Anleitung wird erläutert, wie Sie eine Failover-IP in Ihr OVHcloud Public Cloud Projekt importieren.**

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie verfügen über eine [Failover-IP-Adresse](https://www.ovh.de/dedicated_server/ip_failover.xml).

## In der praktischen Anwendung

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action} und wählen Sie anschließend Ihr Projekt aus.

Klicken Sie auf `Failover IP`{.action} im Abschnitt „Network“.

![IP-Bereich](images/import.png){.thumbnail}

Klicken Sie nun auf `Failover IP importieren`{.action}, um alle IP-Adressen anzuzeigen, die importiert werden können.

![IP-Bereich](images/import1.png){.thumbnail}

Klicken Sie `...`{.action} rechts neben der IP, die Sie importieren möchten, und klicken Sie dann auf `Diese Failover-IP importieren`{.action}.

![Failover-IP importieren](images/import2.png){.thumbnail}

Bestätigen Sie Ihre Auswahl mit `Importieren`{.action}.

![Failover-IP importieren](images/importconfirm.png){.thumbnail}

Die Seite aktualisiert sich, und die Information, dass die IP-Adresse erfolgreich migriert wurde, wird angezeigt.

Wenn die Failover-IP erfolgreich importiert wurde, klicken Sie rechts auf `...`{.action} und dann auf `Verbundene Instanz bearbeiten`{.action}.

![Failover-IP importieren](images/modifyinstance.png){.thumbnail}

Wählen Sie im neuen Fenster die Instanz aus, mit der Sie Ihre IP-Adresse verknüpfen möchten.

![Failover-IP importieren](images/modifyinstance1.png){.thumbnail}

Bestätigen Sie mit Klick auf `Verbinden`{.action}. Im Interface wird nun eine Änderungsmeldung angezeigt.

![Failover-IP importieren](images/modifycompleted.png){.thumbnail}

Die Failover-IP ist jetzt an Ihre Instanz angehängt.

Im nächsten Schritt muss die IP-Konfiguration in Ihrem Betriebssystem durchgeführt werden. Wir empfehlen hierzu unsere [Anleitung](https://docs.ovh.com/gb/en/public-cloud/configure_a_failover_ip/).

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
