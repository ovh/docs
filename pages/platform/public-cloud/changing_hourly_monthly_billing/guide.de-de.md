---
title: 'Von der stündlichen auf monatliche Abrechnung umstellen'
excerpt: 'Erfahren Sie hier, wie Sie die Abrechnungsart Ihrer Public Cloud Instanz ändern'
slug: abrechnungsart-aendern-public-cloud
section: Projektverwaltung
---

**Letzte Aktualisierung am 03.12.2019**

## Ziel

Wenn Sie eine Public Cloud Instanz erstellen, können Sie wählen, ob die Abrechnung stündlich oder monatlich erfolgen soll. Instanzen mit Stundensatz werden nach einem _Pay as you go_ Verfahren abgerechnet, d.h. am Monatsende werden den Nutzern die spezifischen Ressourcen in Rechnung gestellt, die sie verwendet haben. Instanzen mit monatlicher Fälligkeit können im Voraus bezahlt werden und werden zu einem niedrigeren Preis berechnet (50% weniger als bei der verbrauchsspezifischen Abrechnung). Wenn Sie ursprünglich die stündliche Abrechnung ausgewählt haben, können Sie jederzeit zur monatlichen Abrechnung wechseln.

**In dieser Anleitung wird erläutert, wie Sie von der stündlichen zur monatlichen Abrechnung wechseln.**

> [!warning]
>
> Sie können nicht von der monatlichen zur stündlichen Abrechnung wechseln. Wenn Sie zum Stundensatz abgerechnet werden möchten, müssen Sie Ihre monatlich abgerechnete Instanz löschen, eine neue erstellen und die stündliche Abrechnung auswählen. In diesem Fall empfehlen wir Ihnen das folgende Verfahren:
>
>- Erstellen Sie einen Snapshot Ihrer aktuellen Instanz.
>
>- Erstellen Sie eine neue Instanz basierend auf diesem Snapshot.
>
>- Löschen Sie die alte Instanz.
>

## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).


## In der praktischen Anwendung

Wählen Sie im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) unter `Instances`{.action} die Instanz für welche Sie den Abrechnungssatz ändern möchten. Öffnen Sie das Kontextmenü indem Sie auf die 3 Punkte rechts neben der Instanz klicken. Sie sehen dann die Option `Auf monatliche Abrechnung umstellen`{.action}:

![Change billing calculation](images/switch.png){.thumbnail}

Sie müssen dann bestätigen, dass Sie die Abrechnungsart ändern möchten:

![Confirm billing calculation change](images/switch1.png){.thumbnail}

Sobald Sie Ihre Wahl bestätigt haben, enthält Ihre nächste Rechnung die stündlichen Kosten der Instanz für die verbleibenden Tage des Monats sowie die Kosten für den nächsten Monat zum monatlichen Pauschalpreis.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en](https://community.ovh.com/en).