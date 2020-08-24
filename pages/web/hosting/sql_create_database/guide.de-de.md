---
title: 'Eine Datenbank auf Ihrem Webhosting erstellen'
slug: datenbank-erstellen
excerpt: 'So erstellen Sie eine Datenbank auf Ihrem OVH Webhosting'
section: 'Datenbanken'
order: 1
---

**Stand 27.06.2018**

## Einleitung

In einer Datenbank (DB) können sogenannte dynamische Elemente, wie zum Beispiel Kommentare oder Artikel, gespeichert werden. Diese Datenbanken werden heute von praktisch allen Content Management Systemen (CMS) wie WordPress oder Joomla! verwendet.

**In dieser Anleitung erfahren Sie, wie Sie eine Datenbank auf Ihrem OVH Webhosting erstellen.**

## Voraussetzungen

- Sie verfügen über ein [OVH Webhosting](https://www.ovh.de/hosting/){.external} Angebot.
- Sie können im Rahmen Ihres Angebots Datenbanken erstellen.
- Sie haben über Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} Zugriff auf die Verwaltung des betreffenden Webhosting Angebots.

## Beschreibung

### Schritt 1: Auf die Verwaltung der Webhosting-Datenbanken zugreifen

Loggen Sie sich zunächst in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `Datenbanken`{.action}.

Die angezeigte Tabelle enthält alle Datenbanken, die im Rahmen Ihres Webhosting Angebots erstellt wurden.

![Datenbank Erstellung](images/database-creation-step1.png){.thumbnail}

### Schritt 2: Datenbank erstellen

Es gibt zwei Möglichkeiten zur Erstellung einer Datenbank

- **Wenn Sie noch keine Datenbank erstellt haben**: Klicken Sie auf den Button `Eine Datenbank erstellen`{.action}.

- **Wenn Sie bereits eine Datenbank erstellt haben**: Klicken Sie auf den Button `Aktionen`{.action} und anschließend auf `Eine Datenbank erstellen`{.action}.

Wählen Sie im angezeigten Fenster die gewünschten Informationen aus und klicken Sie anschließend auf `Weiter`{.action}.

|Information|Beschreibung|  
|---|---|  
|Datenbank-Engine|Wählen Sie die Datenbank-Engine aus, die für Ihre Datenbank verwendet wird. [OVH Webhosting](https://www.ovh.de/hosting/){.external} Angebote sind nur mit MySQL-Engines verfügbar.|  
|Datenbankversion|Wählen Sie die Version aus, die von der Datenbank-Engine verwendet wird. Achten Sie auf die Kompatibilität Ihrer Website mit der gewählten Version. |  
|Datenbanktyp|Wählen Sie die Größe der Datenbank aus. Hierbei handelt es sich um den Speicherplatz Ihrer Datenbank zum Speichern von Daten.|   

Geben Sie die geforderten Informationen an und klicken Sie anschließend auf `Weiter`{.action}.

|Information|Beschreibung|   
|---|---|   
|Benutzer|Geben Sie einen Benutzernamen an, der mit Ihrer Datenbank verbunden wird.|   
|Passwort|Legen sie ein Passwort für diesen Benutzer fest und bestätigen Sie dieses.|   

Überprüfen Sie die in der Übersicht angezeigten Informationen. Sind alle Angaben korrekt, klicken Sie erneut auf `Bestätigen`{.action}, um die Datenbank zu erstellen. Wiederholen Sie diesen Vorgang sooft wie nötig, um weitere Datenbanken anzulegen.

> [!primary]
>
> Aus Sicherheitsgründen halten Sie sich bitte an die bei der Eingabe des Passworts angezeigten Bedingungen. Wir empfehlen Ihnen außerdem:
>
> - nicht zweimal das gleiche Passwort zu verwenden
>
> - ein Passwort zu verwenden, das keinen Bezug zu Ihren persönlichen Angaben hat (vermeiden Sie zum Beispiel Ihren Namen, Vornamen oder Ihr Geburtsdatum)
>
> - Ihr Passwort regelmäßig zu erneuern
>
> - Ihr Passwort nicht auf Papier zu notieren oder sich selbst per E-Mail zuzusenden
>
> - Ihr Passwort nicht in Ihrem Webbrowser zu speichern, auch wenn dieser Sie dazu auffordert
>

![Datenbank Erstellung](images/database-creation-step2.png){.thumbnail}

### Schritt 3: Datenbank verwenden

Sie können Ihre Datenbank nun verwenden. Halten Sie hierzu folgende Informationen bereit: der von Ihnen angegebene Benutzer und das zugehörige Passwort, den von Ihnen angepassten Datenbanknamen sowie die Server-Adresse.

Diese Informationen sind notwendig, um Ihre Website mit der Datenbank zu verbinden. Je nach Website wird die Verbindung manuell eingerichtet oder über ein Interface der Website hergestellt. Da diese Einstellungen die Konfiguration Ihrer Website und nicht die OVH Dienste betreffen, empfehlen wir, den Herausgeber der Website oder einen spezialisierten Dienstleister zu kontaktieren, sollten Sie weitere Hilfe benötigen.

OVH stellt Ihnen eine Webanwendung zur Verfügung: phpMyAdmin. Den zugehörigen Link finden Sie im Kundencenter. Klicken Sie hierzu im Tab `Datenbanken`{.action} rechts neben der betreffenden Datenbank auf die drei Punkte und anschließend auf `Zugang zu phpMyAdmin`{.action}. Geben Sie dort die Login-Daten zu Ihrer OVH Datenbank ein.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
