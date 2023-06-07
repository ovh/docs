---
title: vSphere Web Client sichern
routes:
    canonical: '/pages/cloud/private-cloud/vsphere_access_security_advices'
excerpt: Hier erfahren Sie, wie Sie den Zugang zu Ihrem vSphere Web Client sichern.
updated: 2020-11-18
---

**Stand 18.11.2020**

## Einleitung

Um die Integrität Ihrer Infrastruktur zu gewährleisten, empfehlen wir, den Zugriff darauf einzuschränken. Hierzu stehen verschiedene Methoden zur Verfügung.

**In dieser Anleitung erhalten Sie einige Tipps, wie Sie den Zugang zu Ihrem vSphere Web Client schnell und einfach sichern können.**

## Voraussetzungen

- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angemeldet.

## Beschreibung

### Zugriff auf bestimmte IP-Adressen einschränken

Unser erster Tipp ist die IP-basierte Zugangsbeschränkung. Wir empfehlen Ihnen, immer mit einem Whitelisting-System zu arbeiten. Hierbei wird grundsätzlich allen IP-Adressen der Zugriff verwehrt und Sie können manuell die Adressen hinzufügen, denen Sie Zugriff auf Ihre Infrastruktur gewähren möchten.

Sie können die Einstellungen direkt in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} vornehmen. Gehen Sie dazu in Ihrem Managed Bare Metal Bereich auf `Sicherheit`{.action}. Es wird eine Tabelle angezeigt, die alle gesperrten und freigegebenen IP-Adressen auflistet. Um eine weitere IP hinzuzufügen, klicken Sie rechts auf `IP-Adressen hinzufügen`{.action}.

![IPs hinzufügen](images/adding_ip.png){.thumbnail}


### Spezifische Nutzer anlegen

Wir empfehlen, personalisierte Zugänge für diejenigen Nutzer einzurichten, die Zugriff auf Ihre Infrastruktur erhalten sollen. Diese Einstellungen können Sie ebenfalls über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} vornehmen. Klicken Sie dazu bitte auf den Tab `Benutzer`{.action}. Um einen neuen Nutzer hinzuzufügen, klicken Sie rechts auf den Button: `Benutzer erstellen`{.action}.

![Nutzer](images/users.png){.thumbnail}


Bei der Erstellung eines neuen Nutzers muss ein Passwort angelegt werden.

> [!primary]
>
> Damit Ihre Daten optimal geschützt sind, sollte Ihr Passwort folgende Anforderungen erfüllen:
>
> - Das Passwort muss mindestens 8 Zeichen umfassen.
> - Es muss mindestens 3 verschiedene Zeichentypen enthalten.
> - Es darf kein Wort aus dem Wörterbuch sein.
> - Es darf keine personenbezogenen Daten (Vorname, Nachname oder Geburtsdatum) enthalten.
> - Es darf nicht für mehrere Nutzerzugänge verwendet werden.
> - Es muss in einem Passwort-Manager gespeichert sein.
> - Es muss alle drei Monate geändert werden.
> - Es muss sich von den vorherigen Passwörtern unterscheiden.
>

Anschließend können Sie die Rechte für jeden Nutzer verwalten, indem Sie in der jeweiligen Nutzerzeile rechts auf `...`{.action} klicken:

![Nutzereinstellungen](images/users_edit.png){.thumbnail}

### Sitzungstimeout einrichten

Wenn der Nutzer den Client nicht mehr verwendet, sollte die Sitzung entsprechend geschlossen werden. Es ist möglich, eine maximale Sitzungsdauer festzulegen, um die Verbindungszeit der Nutzer einzuschränken.

Diese Einstellungen können Sie im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} vornehmen. Gehen Sie hierzu in Ihrem Managed Bare Metal Bereich auf `Sicherheit`{.action}. Klicken Sie dann rechts auf den Button `Sitzungstimeout ändern`{.action}.

![Sitzungstimeout](images/security-expiration.png){.thumbnail}

Geben Sie ein, nach wie vielen Minuten eine Sitzung beendet werden soll.

![Sitzungstimeout](images/expiration.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
