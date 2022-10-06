---
title: 'Additional IP importieren'
slug: import_einer_failover-ip
excerpt: 'Erfahren Sie hier, wie Sie eine Additional IP-Adresse in ein Public Cloud Projekt importieren'
section: 'Netzwerk und IP'
---

**Letzte Aktualisierung am 06.10.2022**

> [!primary]
>
> Seit dem 6. Oktober 2022 heißt unser Dienst "Failover-IP" nun [Additional IP](https://www.ovhcloud.com/de/network/additional-ip/). Dies hat keine weiteren Auswirkungen auf dessen Eigenschaften oder die Funktionalität Ihrer Dienstleistungen.
>

## Ziel

Möglicherweise müssen Sie auf Ihrer Instanz eine Additional IP-Adresse konfigurieren, weil

- Sie mehrere Webseiten auf Ihrer Instanz verwalten.
- Sie internationale Projekte hosten.
- Sie von einem Dedicated Server zu einer Public Cloud Instanz migrieren möchten.

Im OVHcloud Kundencenter können Sie eine Additional IP-Adresse, die mit einem anderen OVHcloud Dienst verknüpft ist, einfach Ihrem Projekt zuordnen.

**In dieser Anleitung wird erläutert, wie Sie eine Additional IP in Ihr OVHcloud Public Cloud Projekt importieren.**

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie verfügen über eine [Additional IP-Adresse](https://www.ovhcloud.com/de/bare-metal/ip/).

## In der praktischen Anwendung

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie Ihr `Public Cloud`{.action} Projekt aus.

Klicken Sie auf `Additional IP`{.action} im Abschnitt "Network".

Klicken Sie auf `Aktionen`{.action} und wählen Sie `Eine IP importieren`{.action}, um alle IP-Adressen anzuzeigen, die in Ihr Public Cloud Projekt importiert werden können.

![IP-Bereich](images/import1.png){.thumbnail}

Wenn Sie in Ihrem Public Cloud Projekt noch keine Additional IP haben, wird die Option zum Import einer IP auf der Startseite angezeigt.

Klicken Sie `...`{.action} rechts neben der IP, die Sie importieren möchten, und klicken Sie dann auf `Diese Additional IP importieren`{.action}.

![Additional IP importieren](images/import2.png){.thumbnail}

Bestätigen Sie Ihre Auswahl mit `Importieren`{.action}.

![Import confirm](images/importconfirm.png){.thumbnail}

Die Seite aktualisiert sich, und die Information, dass die IP-Adresse erfolgreich migriert wurde, wird angezeigt.

Wenn die Additional IP erfolgreich importiert wurde, klicken Sie rechts auf `...`{.action} und dann auf `Verbundene Instanz bearbeiten`{.action}.

![Additional IP importieren](images/modifyinstance.png){.thumbnail}

Wählen Sie im neuen Fenster die Instanz aus, mit der Sie Ihre IP-Adresse verknüpfen möchten.

![Additional IP importieren](images/modifyinstance1.png){.thumbnail}

Bestätigen Sie mit Klick auf `Verbinden`{.action}. Im Interface wird nun eine Änderungsmeldung angezeigt.

> [!primary]
> Eine Additional IP kann nicht von einer Zone zur anderen umgezogen werden. So kann beispielsweise eine IP im Rechenzentrum SBG nach GRA oder RBX umgezogen werden, aber nicht nach BHS.
>

![Additional IP importieren](images/modifycompleted.png){.thumbnail}

Die Additional IP ist jetzt an Ihre Instanz angehängt.

Im nächsten Schritt muss die IP-Konfiguration in Ihrem Betriebssystem durchgeführt werden. Wir empfehlen hierzu unsere [Anleitung](https://docs.ovh.com/de/public-cloud/failover-ip-konfigurieren-pci/).

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
