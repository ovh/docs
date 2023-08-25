---
title: 'Datastore löschen'
excerpt: 'Erfahren Sie hier, wie Sie einen Datastore aus Ihrer Private Cloud entfernen'
legacy_guide_number: '7766789'
updated: 2020-07-01
---


## Ziel

In einigen Fällen kann es nützlich sein, einen Datastore aus Ihrem Cluster zu löschen, zum Beispiel, um ihn zu ersetzen oder seine Speicherkapazität zu erhöhen.

**Diese Anleitung erklärt, wie Sie einen Datastore aus Ihrer Infrastruktur entfernen.**

## Voraussetzungen

- Sie verfügen über ein [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/){.external} Angebot.
- Sie haben Zugriff auf das vSphere-Verwaltungsinterface.

## In der praktischen Anwendung

> [!warning]
>
> Hinweis: Aus Sicherheitsgründen wird die Löschungsanfrage abgewiesen, wenn sich auf dem betreffenden Datastore virtuelle Maschinen (VMs) befinden (die zugehörige Liste wird Ihnen im Bestätigungsfenster angezeigt).
> 

Um einen Datastore zu löschen, klicken Sie zuerst mit der rechten Maustaste auf die entsprechende Ressource. Wählen Sie dann `OVHcloud`{.action} und klicken Sie auf `Remove storage`{.action}.

![Wahl des Datastores](images/removedatastore01.png){.thumbnail}

Daraufhin öffnet sich ein Bestätigungsfenster. Bestätigen Sie mit `Next`{.action}.

![Löschen bestätigen](images/removedatastore02.png){.thumbnail}

Ihre Löschungsanfrage wurde nun registriert.

![Löschen bestätigt](images/removedatastore03.png){.thumbnail}

Sie können den Löschvorgang im Bereich der aktuellen Tasks nachverfolgen.

![Löschvorgang nachverfolgen](images/removedatastore04.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
