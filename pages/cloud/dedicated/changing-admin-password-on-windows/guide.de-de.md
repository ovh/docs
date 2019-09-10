---
title: 'Administrator-Passwort auf einem Windows Dedicated Server ändern'
slug: "windows-admin-passwort-aendern"
excerpt: 'Hier erfahren Sie, wie Sie das Administrator-Passwort auf einem Windows Dedicated Server ändern.'
section: 'Diagnose und Rescue-Modus'
---

**Stand 03.09.2018**

## Einleitung

Bei der Installation oder Reinstallation eines Windows-Betriebssystems wird Ihnen ein Passwort für den Root-Zugriff zugeteilt. Wie in unserer Anleitung „[Einen dedizierten Server sichern](https://docs.ovh.com/de/dedicated/dedizierten-server-sichern/){.external}“ erklärt, empfehlen wir Ihnen dringend, dieses zugeteilte Passwort zu ändern. Oder vielleicht haben Sie auch Ihr Passwort vergessen und müssen es deshalb ändern.

**In dieser Anleitung erfahren Sie, wie Sie das Administrator-Passwort Ihres Servers sichern.**


## Voraussetzungen

* Sie verfügen über einen [Dedicated Server](https://www.ovh.de/dedicated_server/){.external}, auf dem Windows installiert ist.
* Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.


## Beschreibung

Um zu beginnen, starten Sie Ihren Server im Rescue-Modus und verwenden Sie hierzu die Boot-Umgebung WinRescue. Falls nötig, lesen Sie die Anleitung zum [Rescue-Modus](https://docs.ovh.com/de/dedicated/ovh-rescue/{.external}. 

Nachdem der Server neu gestartet ist, gehen Sie in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} auf der Seite Ihres Servers zum Tab `IPMI`{.action}.

> [!primary]
>
> Für detaillierte Informationen zur Verwendung der IPMI-Funktion lesen Sie unsere [Anleitung zu IPMI](https://docs.ovh.com/de/dedicated/verwendung-ipmi-dedicated-server/){.external}.
>

Aktivieren Sie anschließend die IPMI-Funktion mithilfe des Java-Applets oder über Ihren Browser. Wenn die IPMI-Sitzung gestartet ist, doppelklicken Sie auf das Server-Tool NTPWEdit auf dem WinRescue-Desktop.

![NTPWEdit](images/ntpwdi-tool-01.png){.thumbnail}

Klicken Sie dann auf den Button `(Re)Open`{.action}, um die Liste der verfügbaren Benutzerkonten anzuzeigen.

![NTPWEdit](images/ntpwdi-tool-02.png){.thumbnail}

Wählen Sie in der Liste das Root-Benutzerkonto aus und klicken Sie auf den Button `Change password`{.action}.

![NTPWEdit](images/ntpwdi-tool-03.png){.thumbnail}

Geben Sie zum Schluss das neue Passwort zweimal ein und klicken Sie dann auf `OK`{.action}.

![NTPWEdit](images/ntpwdi-tool-04.png){.thumbnail}

Ihr Passwort wurde nun geändert. Schließen Sie das Tool und die IPMI-Sitzung und starten Sie Ihren Server im normalen Modus neu.


## Weiterführende Informationen

[Rescue-Modus](https://docs.ovh.com/de/dedicated/ovh-rescue/{.external}

[ Dedicated Server](https://docs.ovh.com/de/dedicated/verwendung-ipmi-dedicated-server/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.