---
title: 'Auf das Horizon-Interface zugreifen'
excerpt: 'Erfahren Sie hier Details über den Zugang zum Horizon-Interface'
slug: erstellung_eines_zugangs_zu_horizon
legacy_guide_number: g1773
section: 'Über das Horizon-Interface'
---

**Letzte Aktualisierung am 09.01.2020**

## Ziel

Horizon ist die grafische Verwaltungsoberfläche für OpenStack. Bestimmte Funktionen sind nur über diese Schnittstelle abrufbar.

**In diesem Handbuch erfahren Sie, wie Sie auf das Horizon-Interface zugreifen.**


## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie haben bereits ein [Public Cloud-Projekt](https://www.ovhcloud.com/de/public-cloud) erstellt.

## In der praktischen Anwendung

### Schritt 1: Ein OpenStack Benutzerkonto erstellen

Um auf das Horizon-Interface zugreifen zu können, müssen Sie zunächst ein OpenStack-Benutzerkonto erstellen. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein. Klicken Sie oben auf der Seite auf `Public Cloud`{.action}. Klicken Sie dann im folgenden Bereich auf die Pfeilschaltfläche neben Ihrem Projektnamen in der linken Menüleiste.

![Add user](images/select_project.png){.thumbnail}

Wählen Sie in der linken Menüleiste `Users & Roles`{.action} unter „Project Management“.

![User roles](images/users_roles.png){.thumbnail}

Klicken Sie auf die Schaltfläche `Create User`{.action}, um das folgende Popup zu generieren:

![Add user](images/adduser.png){.thumbnail}

Die „Beschreibung des Benutzers“ ist nicht der Benutzername für den Benutzer. Es handelt sich nur um eine beschreibende Bezeichnung, die Ihnen hilft, sich daran zu erinnern, um welche Art von Benutzer es sich handelt. Auf dem nächsten Bildschirm können Sie Benutzerberechtigungen erteilen. Für jede von Ihnen angehakte Benutzerrolle erhält der Benutzer die entsprechenden Berechtigungen gemäß der Darstellung in der folgenden Tabelle:

![Permissions](images/permissions.png){.thumbnail}

Klicken Sie auf die Schaltfläche `Bestätigen`{.action}, wenn Sie fertig sind. Der folgende Bildschirm wird angezeigt:

![User_pw](images/user_pw.png){.thumbnail}

Achten Sie darauf, Ihr Passwort jetzt zu speichern, da es nur einmalig in dieser Ansicht angezeigt wird. Andernfalls können Sie jederzeit ein neues erstellen, indem Sie auf `...`{.action} rechts des Benutzers klicken und `Passwort neu generieren`{.action} auswählen.

![Generate](images/generatepw.png){.thumbnail}

Sobald Sie Ihren Benutzer erstellt haben, können Sie sich mit diesen Anmeldeinformationen über `Horizon`{.action} in der linken Seitenleiste im Horizon-Interface anmelden.

### Schritt 2: In OpenStack Horizon anmelden

Um das Benutzermenü aufzuklappen, klicken Sie `...`{.action} neben dem gewünschten Benutzer. Mit Klick auf den Link `OpenStack Horizon öffnen`{.action} gelangen Sie direkt zur [Horizon-Anmeldeseite](https://horizon.cloud.ovh.net/auth/login). Der Benutzername wird automatisch eingetragen. Zum Anmelden geben Sie noch das Passwort ein und klicken auf `Connect`{.action}.

![Project menu](images/3_H_open_menu.png){.thumbnail}

![Login screen](images/4_H_login_window.png){.thumbnail}

Nachdem Sie sich angemeldet haben, wird das OpenStack Horizon-Interface angezeigt:

![Horizon interface](images/5_H_view.png){.thumbnail}


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf  <https://community.ovh.com/en/>.