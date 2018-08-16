---
title: 'vSphere Web Client sichern'
slug: vsphere-web-zugang-sichern
excerpt: 'Hier erfahren Sie, wie Sie den Zugang zu Ihrem vSphere Web Client sichern.'
section: 'Erste Schritte'
---

**Stand 16.08.2018**

## Einleitung

Um Ihre Infrastruktur optimal zu schützen, empfehlen wir, den Zugriff entsprechend einzuschränken. Hierzu stehen verschiedene Methoden zur Verfügung.

**In dieser Anleitung erhalten Sie einige Tipps, wie Sie den Zugang zu Ihrem vSphere Web Client schnell und einfach sichern können.**

## Voraussetzungen

- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.

## Beschreibung

### Zugriff auf bestimmte IP-Adressen einschränken

Unser erster Tipp ist die IP-basierte Zugangsbeschränkung. Wir empfehlen Ihnen, immer mit einem Whitelisting-System zu arbeiten. Hierbei wird grundsätzlich allen IP-Adressen der Zugriff verwehrt und Sie können manuell die Adressen hinzufügen, denen Sie Zugriff auf Ihre Infrastruktur gewähren möchten.

Sie können die Einstellungen direkt in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} vornehmen. Gehen Sie dazu in Ihrem Private Cloud Bereich auf `Sicherheit`{.action}. Es wird eine Tabelle angezeigt, die alle gesperrten und freigegebenen IP-Adressen auflistet. Um eine weitere IP hinzuzufügen, klicken Sie rechts auf `IP-Adressen hinzufügen`{.action}.

![IPs hinzufügen](images/adding_ip.png){.thumbnail}


### Spezifische Benutzer anlegen

Wir empfehlen, personalisierte Zugänge für diejenigen Benutzer einzurichten, die Zugriff auf Ihre Infrastruktur erhalten sollen. Diese Einstellungen können Sie ebenfalls über Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} vornehmen. Klicken Sie dazu bitte auf den Tab `Benutzer`{.action}. Um einen neuen Benutzer hinzuzufügen, klicken Sie rechts auf den Button: `Benutzer erstellen`{.action}.

![Benutzer](images/users.png){.thumbnail}


Bei der Erstellung eines neuen Benutzers muss ein Passwort angelegt werden.

> [!primary]
>
> Damit Ihre Daten optimal geschützt sind, sollte Ihr Passwort folgende Anforderungen erfüllen:
>
> - Das Passwort muss mindestens 8 Zeichen umfassen.
> - Es muss mindestens 3 verschiedene Zeichentypen enthalten.
> - Es darf kein Wort aus dem Wörterbuch sein.
> - Es darf keine personenbezogenen Daten (Vorname, Nachname oder Geburtsdatum) enthalten.
> - Es darf nicht für mehrere Benutzerzugänge verwendet werden.
> - Es muss in einem Passwort-Manager gespeichert sein.
> - Es muss alle drei Monate geändert werden.
> - Es muss sich von Ihren vorherigen Passwörtern unterscheiden.
>

Anschließend können Sie die Rechte für jeden Benutzer verwalten, indem Sie in der jeweiligen Nutzerzeile rechts auf das Zahnrad-Symbol klicken:

![Benutzereinstellungen](images/users_edit.png){.thumbnail}

### Sitzungstimeout einrichten

Wenn der Benutzer den Client nicht mehr verwendet, sollte die Sitzung entsprechend geschlossen werden. Es ist möglich, eine maximale Sitzungsdauer festzulegen, um die Verbindungszeit der Benutzer einzuschränken.

Diese Einstellungen können Sie im [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} vornehmen. Gehen Sie hierzu in Ihrem Private Cloud Bereich auf `Sicherheit`{.action}. Klicken Sie dann rechts auf den Button `Sitzungstimeout ändern`{.action}. Es öffnet sich ein Fenster, in dem Sie die Zeit (in Minuten) eingeben können, bis die Sitzung abläuft.

![Sitzungstimeout](images/expiration.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.