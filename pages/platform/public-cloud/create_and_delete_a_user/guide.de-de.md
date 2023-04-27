---
title: Erstellung und Löschung von OpenStack Benutzern
slug: openstack-user-erstellen-loeschen
excerpt: 'Erfahren Sie hier, wie Sie einen OpenStack User über Ihr OVHcloud Kundencenter erstellen und löschen'
section: 'Projektverwaltung'
order: 8
updated: 2022-03-16
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 17.03.2022**

## Ziel

Der Zugriff auf Horizon und die OpenStack APIs erfolgt über Benutzername/Passwort-Kombinationen, die als "OpenStack User" bezeichnet werden. Sie können so viele OpenStack User wie nötig erstellen und ihnen verschiedene Zugriffsrechte zuweisen.

**Diese Anleitung erklärt, wie Sie OpenStack User im OVHcloud Kundencenter erstellen und löschen.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/NC69nrb6QlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud) in Ihrem OVHcloud Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

> [!primary]
>
> Wenn das betreffende Public Cloud Projekt das **erste Projekt** ist, das in Ihrem Kunden-Account angelegt wurde, sind OpenStack Benutzer erst 7 Tage nach Erstellung des Projekts verfügbar.
>
> Sie können die Aufhebung dieser Sicherheitsmaßnahme beantragen, indem Sie in Ihrem Kundencenter ein Support-Ticket erstellen.
>

## In der praktischen Anwendung

### Erstellung eines OpenStack Benutzers

Loggen Sie sich in Ihrem OVHcloud Kundencenter ein und öffnen Sie Ihr `Public Cloud`{.action} Projekt. Klicken Sie auf `Users & Roles`{.action} im linken Menü unter "Project management". 

Klicken Sie auf den Button `Benutzer erstellen`{.action}.

![User roles](images/users_roles.png){.thumbnail}

Die "Beschreibung des Benutzers", die Sie hier eingeben können ist nicht der Benutzername für den OpenStack User, sondern eine erläuternde Bezeichnung, um Ihnen bei der Organisation der Benutzer und deren Berechtigungen zu helfen. Geben Sie eine Beschreibung für den Benutzer ein und klicken Sie auf `Weiter`{.action}.

![Add user](images/adduser.png){.thumbnail}

Sie können nun Rollen auswählen, welche die Berechtigungen repräsentieren, die der Benutzer erhalten soll. Für jedes angehakte Feld erhält der Benutzer Zugriffsrechte gemäß der nachstehenden Tabelle.

![Berechtigungen](images/permissions.png){.thumbnail}

Klicken Sie auf `Bestätigen`{.action}, um den OpenStack Benutzer zu erstellen. Der Benutzername und das Passwort werden automatisch erzeugt und in Ihrem Kundencenter angezeigt.

![User_pw](images/user_pw.png){.thumbnail}

Achten Sie darauf, das Passwort, das nur zu diesem Zeitpunkt im grünen Rahmen angezeigt wird, in einem Passwortmanager zu speichern. Das Passwort kann später nicht mehr abgerufen werden. Sie können jedoch stets ein neues Passwort erstellen, indem Sie auf `...`{.action} klicken und `Passwort neu generieren`{.action} auswählen.

![Generate](images/generatepw.png){.thumbnail}

Sobald der OpenStack User erstellt ist, können Sie seine Zugangsdaten für den Login zum [Horizon Interface](https://docs.ovh.com/de/public-cloud/horizon/) verwenden, indem Sie im linken Menü auf den Eintrag `Horizon`{.action} klicken.

### Löschung eines OpenStack Benutzers

Sie können OpenStack Benutzer im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) löschen. Klicken Sie auf `Users & Roles`{.action} im linken Menü unter "Project management". 

![public-cloud](images/delete.png){.thumbnail}

Klicken Sie auf `...`{.action} und wählen Sie `Löschen`{.action} aus.

> [!warning]
>
> Die Löschung eines Benutzers ist endgültig und führt zur Ungültigkeit aller zugehörigen Token, auch derjenigen, deren Ablaufdatum noch nicht überschritten ist.
> 

## Weiterführende Informationen

[Einführung in das Horizon Interface](https://docs.ovh.com/de/public-cloud/horizon/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.