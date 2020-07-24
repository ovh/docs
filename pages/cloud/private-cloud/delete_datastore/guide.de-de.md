---
title: 'Datastore löschen'
slug: datastore-loeschen
excerpt: 'So löschen Sie einen Datastore Ihrer Private Cloud'
legacy_guide_number: '7766789'
section: 'OVH Funktionen'
---

**Stand 24.07.2020**

## Einleitung

In einigen Fällen kann es nützlich sein, einen Datastore aus Ihrem Cluster zu löschen, zum Beispiel, um ihn zu ersetzen oder seine Speicherkapazität zu erhöhen.

**In dieser Anleitung erfahren Sie, wie Sie einen Datastore aus Ihrer Infrastruktur entfernen.**

## Voraussetzungen

* Sie verfügen über ein [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/){.external} Angebot.
* Sie haben Zugriff auf das vSphere-Verwaltungsinterface.

## Beschreibung

> [!warning]
>
> Hinweis: Es ist nicht möglich, die **beiden 300 GB bzw. 1,2 TB Datastores**, die in Ihrem Paket inklusive sind, zu löschen. Aus Sicherheitsgründen wird die Löschungsanfrage auch abgewiesen, wenn sich auf dem betreffenden Datastore virtuelle Maschinen (VMs) befinden (die zugehörige Liste wird Ihnen im Bestätigungsfenster angezeigt).
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
