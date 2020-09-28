---
title: 'E-Mail-Weiterleitungen verwenden'
excerpt: 'Erfahren Sie hier, wie Sie Ihre E-Mail-Weiterleitungen verwalten'
slug: webhosting_e-mail_anleitung_zum_einrichten_einer_mail-weiterleitung
section: 'E-Mail Account Funktionen'
order: 1
legacy_guide_number: g2001
---

**Letzte Aktualisierung am 20.05.2020**

## Ziel

In dieser Anleitung erhalten Sie Informationen und Hilfen zur Konfiguration Ihrer E-Mail-Weiterleitungen, um zum Beispiel an eine E-Mail-Adresse A empfangene E-Mails an eine Adresse B weiterzuleiten.

## Definition

### Was ist eine E-Mail-Weiterleitung?

Mit einer Weiterleitung können E-Mails, die mit einer Adresse empfangen wurden, zu einer oder mehreren anderen Adressen umgeleitet werden.

Zum Beispiel möchten Sie vielleicht, dass E-Mails, die an **public@mydomain.com** versendet werden, an **private@otherdomain.com** weitergeleitet werden. Auf diese Weise können Sie dem Absender die erste Adresse (**public@mydomain.com**) geben, ohne dass dieser Ihre echte Adresse (**private@otherdomain.com**) erfährt.

Es gibt zwei Arten von Weiterleitungen: 

- einfache Weiterleitung (Schema 1): Die E-Mail wird direkt an die Weiterleitungsadresse versendet, der ursprüngliche Empfänger erhält die E-Mail nicht. 

- Weiterleitung mit lokaler Kopie (Schema 2): Die E-Mail wird sowohl an den ursprünglichen Empfänger als auch an die Weiterleitungsadresse übertragen.

![E-Mails](images/schema-redirect.png){.thumbnail}

> [!primary]
>
> Es ist auch möglich, eine Weiterleitung an mehrere E-Mail-Adressen einzurichten.

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie besitzen ein MX Plan Angebot, verfügbar mit einer [Webhosting](https://www.ovh.de/hosting/) Lösung, dem [kostenlosen Start 10M Hosting](https://www.ovh.de/domains/angebot_hosting_start10m.xml) oder separat bestellbar.

## In der praktischen Anwendung

Je nach Aktivierungsdatum Ihres MX Plan Angebots, oder falls [dieses vor Kurzem migriert wurde](https://www.ovh.de/mxplan-migration/), verfügen Sie entweder über die historische oder die neue Version des Angebots. Bevor Sie fortfahren, ermitteln Sie zunächst Ihre Angebotsversion. 

Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und gehen Sie in den Bereich „Web“. Klicken Sie im linken Menü auf `E-Mails`{.action} und wählen Sie den Namen Ihres Angebots aus. Fahren Sie entsprechend Ihrer MX Plan Version fort.

|Historische MX Plan Version|Neue MX Plan Version|
|---|---|
|![E-Mail](images/mxplan-starter-legacy.png){.thumbnail}<br> Ihr Angebot steht in der Box „Abo“.|![E-Mail](images/mxplan-starter-new.png){.thumbnail}<br>Die `Server-Referenz` steht in der Box „Zusammenfassung“.|
|Weiter zur [historischen MX Plan Version](./#historische-mx-plan-version)|Weiter zur [neuen MX Plan Version](./#neue-mx-plan-version_1)|

### Historische MX Plan Version

#### Schritt 1: Auf die Verwaltung der Weiterleitungen zugreifen
Wenn Sie Ihr MX Plan Angebot aufrufen, gelangen Sie zuerst zum Tab `Allgemeine Informationen`{.action}. Klicken Sie auf den Tab `E-Mails`{.action} und dann rechts auf den Button `Verwaltung der Weiterleitungen`{.action}.

![E-Mails](images/mxplan-legacy-1.png){.thumbnail}


#### Schritt 2: Weiterleitung hinzufügen

Es wird eine Tabelle mit bereits aktiven Weiterleitungen angezeigt. Klicken Sie rechts auf den Button `Weiterleitung hinzufügen`{.action}.

![E-Mails](images/mxplan-legacy-2.png){.thumbnail}

Vervollständigen Sie die folgenden 3 Einstellungen:

|Information|Beschreibung| 
|---|---|  
|Von der Adresse |Geben Sie hier die Adresse ein, die Sie umleiten möchten.|  
|Zur Adresse|Geben Sie hier die Zieladresse der Weiterleitung ein. Hierbei kann es sich um eine Ihrer OVHcloud E-Mail-Adressen oder eine externe Adresse handeln.|
|Wählen Sie einen Kopiermodus aus|Wählen Sie die gewünschte Option aus: <br> - **Eine Kopie der Mail bei OVHcloud aufbewahren** (Sie erhalten die E-Mail auf Ihrer Haupt-E-Mail-Adresse sowie auf der Weiterleitungsadresse.) <br> - **Keine Kopie der Mail aufbewahren** (Die E-Mail wird direkt an die Weiterleitungsadresse versendet, ohne dass die Hauptadresse die E-Mail empfängt.) <br> *vgl. [Schema](./#definition){.external} am Anfang der Anleitung.*|

Klicken Sie anschließend auf `Bestätigen`{.action}, um das Hinzufügen der Weiterleitung zu bestätigen.

![E-Mails](images/mxplan-legacy-3.png){.thumbnail}

> [!primary]
> Wenn Sie den Kopiermodus „**Eine Kopie der Mail bei OVHcloud aufbewahren**“ auswählen, wird in der Liste der Weiterleitungen automatisch eine Weiterleitung von der ursprünglichen E-Mail-Adresse zu sich selbst erstellt; diese stellt die lokale Kopie dar.
> 

### Neue MX Plan Version

Bei der neuen MX Plan Version wird die Verwaltung der Weiterleitungen nicht im Kundencenter sondern direkt im Webmail der betreffenden E-Mail-Adresse vorgenommen.

Gehen Sie hierzu zum [Webmail](https://www.ovh.com/de/mail/). Geben Sie die **E-Mail-Adresse** und das **Passwort** ein, um sich einzuloggen.
![E-Mails](images/webmail.png){.thumbnail}

#### Schritt 1: Auf die Verwaltung der Weiterleitungen zugreifen

Nachdem Sie sich via [Webmail](https://www.ovh.com/de/mail/) in Ihrem E-Mail-Account eingeloggt haben, klicken Sie oben rechts auf das Zahnrad-Symbol und dann auf `Optionen`{.action}.

![E-Mails](images/mxplan-new-1.png){.thumbnail}
Vom Fenster **Optionen** im linken Menü, gehen Sie im Bereich **Mail** zur Kategorie **Automatische Verarbeitung** und klicken Sie dann auf `Posteingangs- und Aufräumregeln`{.action}. 

![E-Mails](images/mxplan-new-2.png){.thumbnail}

In diesem Fenster können Sie Ihre Weiterleitungen verwalten und Filter für alle eingehenden E-Mails einrichten.

#### Schritt 2: Weiterleitung hinzufügen

Wenn Sie im Verwaltungsfenster für **Posteingangsregeln** sind, klicken Sie oben links auf das `+`{.action}-Icon.
![E-Mails](images/mxplan-new-3.png){.thumbnail}

In diesem Fenster legen Sie die notwendigen Regeln fest, um eine Weiterleitung zu erstellen:

|Information|Beschreibung| 
|---|---|  
|Name |Legen Sie den Namen Ihrer Weiterleitung fest (Box 1).|  
|Wenn die Nachricht eintrifft und all diesen Bedingungen entspricht| Wenn Sie möchten, dass Ihre Weiterleitung für alle E-Mails angewendet wird, wählen Sie **\[Auf alle Nachrichten anwenden]** aus (Box 2).|
|Alle folgenden Aktionen ausführen|Hier richten Sie die Weiterleitung ein. Wählen Sie **Weiterleiten, umleiten oder senden** aus und dann **Nachricht umleiten an...** (Box 3). Geben Sie anschließend im Feld **Nachricht umleiten an...** die Adresse ein, an die Sie die E-Mail umleiten möchten, und klicken Sie dann auf `Speichern`{.action} (Box 4).|


![E-Mails](images/mxplan-new-4.png){.thumbnail}

In unserem Beispiel handelt es sich um eine **Weiterleitung mit lokaler Kopie** (siehe [Schema 2](./#definition) am Anfang dieser Anleitung). Wenn das auch Ihre gewünschte Einstellung ist, klicken Sie links oben auf `OK`{.action} (Diskettensymbol) und die Regel wird angewendet. Ist das nicht der Fall, gehen Sie zum nachstehenden Schritt über.



Um eine **einfache Weiterleitung** (nach [Schema 1](./#definition) am Anfang der Anleitung) einzurichten, fügen Sie in diesem Fenster eine zusätzliche Regel zu Ihrer **Weiterleitung mit lokaler Kopie** hinzu. Klicken Sie auf `Aktion hinzufügen`{.action} (Box 1), dann auf **Verschieben, kopieren oder löschen** und anschließend auf **Nachricht löschen**. Mit dieser Regel wird die E-Mail direkt im Papierkorb abgelegt, nachdem sie an die Weiterleitungsadresse versendet wurde.

![E-Mails](images/mxplan-new-5.png){.thumbnail}

Wenn Sie das Fenster fertig ausgefüllt haben, klicken Sie links oben auf `OK`{.action} (Diskettensymbol).

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.