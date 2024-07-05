---
title: 'Verwendung von PuTTY für Windows'
excerpt: 'Webhosting: Verwendung von PuTTY für Windows'
updated: 2020-05-05
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>
 
## Einleitung

Auf den Windows Systemen sind mehrere auf SSH basierende Programme verfügbar.
"PuTTY" gehört zu den beliebtesten dieser Programm und ist besonders nutzerfreundlich.
Sie können es auf der [offiziellen Webseite](http://www.putty.org/) herunterladen.

Weiterhin benötigen Sie Ihre FTP-Daten:

- FTP-Server.
- FTP-Login.
- FTP-Passwort.

Diese Informationen finden Sie im Konfigurationspanel. Gehen Sie in den Bereich FTP oder folgen Sie den nachstehenden Anweisungen
[diese Anleitung](/pages/web_cloud/web_hosting/ftp_connection).

## PuTTY starten

- Nach Abschluss der Installation starten Sie PuTTY.
- Im Feld Host Name (oder IP adress) geben Sie Ihren FTP-Server an.
- Im Feld Port geben Sie 22 ein, sofern das Feld noch nicht ausgefüllt ist.
- Setzen Sie das Häkchen bei SSH.
- Klicken Sie auf Open.

![Putty](/pages/assets/screens/other/web-tools/putty/configuration.png){.thumbnail}

## Verbindung zu Ihrem Hosting

- In der Eingabeaufforderung, die nun erscheint, geben Sie Ihren FTP-Login an und drücken dann "Enter".
- Geben Sie anschließend Ihr FTP-Passwort ein und drücken Sie erneut "Enter".

Bitte beachten Sie: Aus Sicherheitsgründen werden die von Ihnen eingegebenen Zeichen verborgen.
Falls Sie sich bei Login oder Passwort vertippt haben, wiederholen Sie einfach die Eingabe.

- Wenn Sie Ihre FTP-Daten korrekt eingegeben haben, erscheint die Nachricht "Welcome to Ovh".

## Verwendung von SSH
Alles über die Verwendung von SSH erfahren Sie in [dieser Hilfe](https://www.ovh.de/g1962.webhosting_ssh_auf_ihren_webhostings).

