---
title: 'Datastore löschen'
slug: datastore-loeschen
excerpt: 'So löschen Sie einen Datastore Ihrer Private Cloud'
legacy_guide_number: '7766789'
section: 'OVH Funktionen'
---

**Stand 22.11.2018**

## Einleitung

In einigen Fällen kann es nützlich sein, einen Datastore aus Ihrem Cluster zu löschen, zum Beispiel, um ihn zu ersetzen oder seine Speicherkapazität zu erhöhen.

**In dieser Anleitung erfahren Sie, wie Sie einen Datastore aus Ihrer Infrastruktur entfernen.**

## Voraussetzungen

* Sie verfügen über ein [Private Cloud](https://www.ovh.de/private-cloud/){.external} Angebot.
* Sie haben Zugriff auf das vSphere-Verwaltungsinterface.

## Beschreibung

> [!warning]
>
> Hinweis: Es ist nicht möglich, die **beiden 300 GB bzw. 1,2 TB Datastores**, die in Ihrem Paket inklusive sind, zu löschen. Aus Sicherheitsgründen wird die Löschungsanfrage auch abgewiesen, wenn sich auf dem betreffenden Datastore virtuelle Maschinen (VMs) befinden (die zugehörige Liste wird Ihnen im Bestätigungsfenster angezeigt).
> 

Um einen Datastore zu löschen, klicken Sie zuerst mit der rechten Maustaste auf die entsprechende Ressource. Wählen Sie dann `OVH Private Cloud`{.action} und klicken Sie auf `Remove storage`{.action}.

![Wahl des Datastores](images/removestorage_01.png){.thumbnail}

Daraufhin öffnet sich ein Bestätigungsfenster. Bestätigen Sie mit `Next`{.action}.

![Löschen bestätigen](images/removestorage_02.png){.thumbnail}

Ihre Löschungsanfrage wurde nun registriert.

![Löschen bestätigt](images/removestorage_03.png){.thumbnail}

Sie können den Löschvorgang im Bereich der aktuellen Tasks nachverfolgen.

![Löschvorgang nachverfolgen](images/removedatastore.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.