---
title: "Bare Metal Server - Zuweisen von Tags im OVHcloud Kundencenter"
excerpt: "Erfahren Sie, wie Sie über das OVHcloud Kundencenter Tags für jeden Dedicated Server erstellen und ändern"
updated: 2025-07-01
---

## Ziel

Tags sind kennzeichnende Meta-Informationen, die Ihren Ressourcen zugeordnet werden können, um sie effizienter zu organisieren und zu verwalten.

Jeder Tag besteht aus zwei Elementen:

- **Schlüssel**: Ein Attribut oder eine Kategorie.
- **Wert**: Die Informationen, die mit diesem Schlüssel verknüpft sind.

Beispielsweise können Sie Ihre Ressourcen nach Standort, Dienst oder nach Sicherheitsstufe kategorisieren. Die Verwendung von Tags erleichtert die Suche, das Organisieren von Ressourcen, das Verwalten zugehöriger Kosten und das Anwenden von Richtlinien mit der gewünschten Granularität.

**Diese Anleitung erklärt, wie Sie über das OVHcloud Kundencenter Tags für Dedicated Server erstellen, zuweisen und löschen.**

## Voraussetzungen

- Ein [Dedicated Server](/links/bare-metal/bare-metal) in Ihrem OVHcloud Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

### Zuweisen von Tags im OVHcloud Kundencenter

1. Melden Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) an.
2. Gehen Sie in den Bereich `Bare Metal Cloud`{.action}.
3. Klicken Sie auf `Dedicated Server`{.action} und wählen Sie Ihren Server aus der Liste aus.

![Allgemeine Informationen](images/general_information.png){.thumbnail}

Klicken Sie im Tab `Allgemeine Informationen`{.action} im Feld **Tags** auf `Tag hinzufügen`{.action}.

![Tag hinzufügen](images/add_a_tag.png){.thumbnail}

Der Tab `Tags` wird geöffnet.

Klicken Sie auf die Schaltfläche `Tag zuweisen`{.action}.

![Leere Stichwortliste](images/tag_list_empty.png){.thumbnail}

Klicken Sie im daraufhin geöffneten Fenster in das Feld `Schlüssel`{.action} und wählen Sie den gewünschten Schlüssel aus.

![Tag zuweisen](images/assign_tag.png){.thumbnail}

Klicken Sie in das Feld `Wert`{.action} und wählen Sie den gewünschten Wert aus.

![Tag zuweisen - aufgefüllt](images/assign_tag_populated.png){.thumbnail}

> [!warning]
>
> **Wenn Sie einen Schlüssel oder Wert verwenden möchten, der noch nicht existiert**, können Sie ihn erstellen, indem Sie ihn eingeben und anschließend `Hinzufügen`{.action} im Dropdown-Menü anklicken.
>

Klicken Sie abschließend auf die Schaltfläche `Hinzufügen`{.action}, um den Tag zu erstellen, und klicken Sie dann auf den Button `Zuweisen`{.action}.

![Tag added](images/tag_added.png){.thumbnail}

Sie erhalten eine grüne Bestätigungsmeldung und sehen dann die Liste der Tags, die auf den ausgewählten Server angewendet wurden.

![Tags - Liste mit Beispiel](images/tag_list_with_example.png){.thumbnail}

### Löschen eines Tags eines Dedicated Servers

So finden Sie die Liste der Ihrem Server zugewiesenen Tags:

1. Melden Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) an.
2. Gehen Sie in den Bereich `Bare Metal Cloud`{.action}.
3. Klicken Sie auf `Dedicated Server`{.action} und wählen Sie Ihren Server aus der Liste aus.
4. Gehen Sie zu `Tags`{.action}.

Klicken Sie auf `...`{.action} rechts vom Tag, den Sie von Ihrem Server entfernen möchten.  
Klicken Sie dann auf `Entfernen`{.action}.

![Tag list remove](images/tag_list_remove.png){.thumbnail}

Ein Bestätigungsfenster wird angezeigt. Klicken Sie auf `Bestätigen`{.action}, um die Zuweisung des Tags aufzuheben.

![Tag entfernen](images/remove_tag.png){.thumbnail}

## Weitere Informationen

Treten Sie unserer [User Community](/links/community) bei.
