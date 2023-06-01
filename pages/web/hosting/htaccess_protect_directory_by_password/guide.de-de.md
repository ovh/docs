---
title: "Tutorial - Ein Verzeichnis oder das Verwaltungsinterface Ihrer Website durch .htaccess und .htpasswd Dateien schützen"
slug: hosting-htaccess-authentifizierung
excerpt: "Diese Anleitung erklärt, wie Sie ein Verzeichnis oder den Zugang zur Verwaltung Ihrer Website durch Authentifizierung mit den Dateien .htaccess und .htpasswd schützen"
section: Weiterleitung und Authentifizierung
order: 02
updated: 2023-06-01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 01.06.2023**

## Ziel 

In dieser Anleitung erfahren Sie, wie Sie eine "Benutzer/Passwort"-Authentifizierung einrichten, um über einen Webbrowser auf Ihre Website ganz oder teilweise zuzugreifen. 

Verwenden Sie hierzu zwei Apache-Konfigurationsdateien (HTTP), die in [FTP-Bereich](/pages/web/hosting/ftp_connection/) Ihres Webhostings zu platzieren sind: 

- "**.htaccess**": Weitere Informationen zu den Funktionen dieser Datei finden Sie in unserem Tutorial zu den ["Operationen mit einer ".htaccess"-Datei"](/pages/web/hosting/htaccess_what_else_can_you_do/).
- "**.htpasswd**: In Ergänzung zu dieser Anleitung lesen Sie die [offizielle Apache Dokumentation](https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html) zu dieser Datei.

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>
> Folgende Beispiele sind in Dateien mit dem Namen ".htaccess" und ".htpasswd" zu erstellen. Achtung, die Regeln, die Sie in diesen Dateien festlegen, haben direkte Auswirkungen auf Ihre Website. Überprüfen Sie systematisch die Regeln, die Sie hinzufügen, bevor Sie sie auf Ihrer Website anwenden. 
> 

**Diese Anleitung erklärt, wie Sie ein Verzeichnis oder den Zugang zum Administratorteil Ihrer Website durch Authentifizierung mit den Dateien ".htaccess" und ".htpasswd" schützen.**

## Voraussetzungen

## In der praktischen Anwendung

## Weiterführende Informationen <a name="go-further"></a>
