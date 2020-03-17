---
title: 'Einen Gmail-Account mit dem OVH Mail Migrator auf einen OVHcloud E-Mail-Account migrieren'
slug: migration-gmail-mit-ovh-mail-migrator
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie Ihre Gmail-Accounts mit dem OVH Mail Migrator zu OVHcloud migrieren'
section: Account-Migration
order: 2
---

**Letzte Aktualisierung am 13.02.2020**

## Ziel

Der [OVH Mail Migrator](https://omm.ovh.net) (OMM) wurde von OVHcloud entwickelt. Mit diesem Online-Interface können Sie Ihre E-Mail-Konten von einem Host auf einen anderen migrieren. Dabei können verschiedene Inhalte wie beispielsweise E-Mails, Kontakte, Kalender und Aufgaben übertragen werden, sofern diese mit Ihren OVHcloud E-Mail-Konten kompatibel sind.

In dieser Anleitung wird beschrieben, wie Sie mit OMM die verschiedenen Elemente aus Ihrem Google Mail-Account in Ihr OVHcloud E-Mail-Konto importieren.

**Erfahren Sie, wie Sie Ihren Google Mail-Account mithilfe unseres OMM-Tools auf ein E-Mail-Konto bei OVHcloud migrieren.**


## Voraussetzungen

- Sie haben einen E-Mail-Dienst bei OVHcloud ([Exchange](https://www.ovh.de/emails/hosted-exchange), [E-Mail Pro](https://www.ovh.de/emails/email-pro) oder MX Plan, aus dem MX Plan Angebot oder als Teil eines [OVHcloud Webhostings](https://www.ovh.de/hosting)).
- Sie verfügen über die Login-Daten für die E-Mail-Accounts, die Sie migrieren möchten (Quell-Accounts).
- Sie verfügen über die Login-Daten der OVHcloud E-Mail-Accounts, auf die Sie die Inhalte übertragen möchten (Ziel-Accounts).

## In der praktischen Anwendung

### Schritt 1: E-Mail- und Ordnermigration

> [!primary]
> Damit eine Migration möglich ist, müssen Sie das IMAP-Protokoll in Ihrem Google Mail-Account aktivieren. Folgen Sie dazu der Google-Anleitung
> [Gmail-Nachrichten über andere E-Mail-Clients empfangen](https://support.google.com/mail/answer/7126229?hl=de).

Sobald das IMAP-Protokoll in Ihrem Google Mail-Account aktiviert ist, gehen Sie auf [OMM](https://omm.ovh.net).

Klicken Sie auf `Migration`{.action} und dann auf `Neue Migration`{.action}.

![omm](images/OMM-gmail-step01-01.png){.thumbnail}

Das folgende Fenster wird angezeigt:

![omm](images/OMM-gmail-step01-02.png){.thumbnail}

Füllen Sie die erforderlichen Felder aus, wie in den beiden folgenden Tabellen angegeben:

**Quellkonto**

| Information            	| Beschreibung                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Server-Typ         	| Wählen Sie **„IMAP“**  im Dropdown-Menü.         									|
| Server-URL          	| Geben Sie **„imap.gmail.com“** ein.                       					 			  	|
| Login						| Geben Sie Ihre Gmail-Adresse an.															|
| Passwort				| Geben Sie das Passwort Ihrer Gmail-Adresse ein.										|

**Ziel-Konto**

| Information            	| Beschreibung                                                                              							|
|------------------------	|-------------------------------------------------------------------------------------------------------------------|
| Server-Typ         	| Wählen Sie im Dropdown-Menü die Option **„Hosted by OVH (Autodetect)“**.   											|
| Server-URL          	| Das Feld wird automatisch ausgefüllt.                     					  		 							|
| Login						| Geben Sie Ihre OVHcloud E-Mail-Adresse ein.																			|
| Passwort				| Klicken Sie auf `Einstellungen erkennen`{.action} und geben Sie das Passwort für Ihre OVHcloud E-Mail-Adresse ein.	|

Aktivieren Sie im Abschnitt **„Optionen“** nur **„E-Mails“**. Die anderen Optionen sind in IMAP nicht verfügbar. Die Migration von Kontakten und Kalendern erfolgt in den Schritten 2 und 3.

![omm](images/OMM-gmail-step01-03.png){.thumbnail}

Im Feld **„Informationen“** können Sie eine E-Mail-Adresse eingeben, unter der Sie über den Fortschritt der Migration informiert werden. Dieses Feld ist optional. Klicken Sie dann auf `Migration starten`{.action}

![omm](images/OMM-gmail-step01-04.png){.thumbnail}

Das Migrationsverfolgungsfenster wird angezeigt. Sie können es offen lassen, um die Live-Migration zu verfolgen, oder es schließen. Das hat keine Auswirkungen auf die Migration.

![omm](images/OMM-gmail-step01-06.png){.thumbnail}

> [!warning]
> Beim Starten der Migration wird möglicherweise die folgende Meldung angezeigt:

![omm](images/OMM-gmail-step01-05.png){.thumbnail}

In diesem Fall rufen Sie den Posteingang Ihres Google Mail-Accounts auf und überprüfen Sie, ob Sie eine E-Mail mit Betreff in einer Variante von **„Kritische Sicherheitswarnung“** erhalten haben. Hier greift eine von Google Mail durchgeführte Sicherheitsmaßnahme. Um diesen Zustand zu beheben, folgen Sie unserer Anleitung [Weniger sichere Verbindungen in Google Mail zulassen](https://docs.ovh.com/de/microsoft-collaborative-solutions/migration-gmail-mit-ovh-mail-migrator/gmail-sicherheit).

Nachdem Sie in Google Mail **„weniger sichere Apps“ zugelassen** haben, können Sie die Migration neu starten.

### Schritt 2: Kalendermigration

#### 2.1 Ein Kalender-Backup in Google Mail wieder herstellen

Um Ihren Kalender in Ihren OVHcloud-Account zu importieren, erstellen Sie ein Backup von Ihrer Google Mail-Oberfläche aus. Folgen Sie dazu der offiziellen Google-Dokumentation:

[Google-Kalender exportieren](https://support.google.com/calendar/answer/37111?hl=de)

Wenn Ihr Google Mail-Account mehrere Kalender enthält, laden Sie dabei eine Archivdatei zum Entpacken herunter. Sie finden jeden Kalender im Format **.ics**.

#### 2.2 Ihren Kalender über OMM importieren

> [!primary]
> Die Kalendermigration von OMM ist nur mit Exchange Accounts kompatibel.

Nachdem Sie das Backup Ihres Kalenders im Format **.ics** wiederhergestellt haben, gehen Sie auf [OMM](https://omm.ovh.net).

Gehen Sie oben auf die Registerkarte `PST/ICS/VCF-MIGRATION`{.action} und klicken Sie dann auf `Neue PST/ICS/VCF-Migration`{.action}.

![omm](images/OMM-gmail-step23-01.png){.thumbnail}

Füllen Sie die angeforderten Felder gemäß der folgenden Tabelle aus und klicken Sie auf `Migration starten`{.action}:

| Information            	| Beschreibung                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Login                  	| Geben Sie die OVHcloud E-Mail-Adresse ein, zu der Sie Ihren Kalender migrieren.           	|
| Passwort           	| Geben Sie das Passwort für die Ziel-E-Mail-Adresse ein.                          	|
| Kontakt-E-Mail 	| Geben Sie eine E-Mail-Adresse ein, über die Sie über den Fortschritt der Migration informiert werden und den Download einer Datei fortsetzen können.	|

![omm](images/OMM-gmail-step23-02.png){.thumbnail}

 Klicken Sie auf `Datei auswählen`{.action}, um die Kalender-Datei im Format **.ics** auf Ihrem Gerät zu selektieren, und klicken Sie dann auf `Hochladen`{.action}.

![omm](images/OMM-gmail-step23-03.png){.thumbnail}

Geben Sie dann das Passwort für Ihr Ziel-E-Mail-Konto ein und klicken Sie auf `Migration starten`{.action}.

![omm](images/OMM-gmail-step23-04.png){.thumbnail}

Das Migrationsverfolgungsfenster (unten) wird angezeigt. Sie können es offen lassen, um die Live-Migration zu verfolgen, oder es schließen. Das hat keine Auswirkungen auf die Migration.

![omm](images/OMM-gmail-step02.png){.thumbnail}


### Schritt 3: Kontaktmigration

> [!primary]
> Die Kontaktmigration von OMM ist nur mit Exchange Accounts kompatibel.

Um Ihre Kontakte in Ihren OVHcloud E-Mail-Account zu importieren, sichern Sie sie über Ihre Google Mail-Oberfläche. Folgen Sie dazu der offiziellen Google-Dokumentation:

[Kontakte exportieren oder sichern](https://support.google.com/contacts/answer/7199294?hl=de)

> [!warning]
> Der Export muss im vCard-Format (**.vcf**) über die Google Mail-Oberfläche erfolgen. Diese Option wird Ihnen am Ende des Exports angeboten.

![omm](images/OMM-gmail-step23-01.png){.thumbnail}

Füllen Sie die angeforderten Felder gemäß der folgenden Tabelle aus und klicken Sie auf `Migration starten`{.action}:

| Information            	| Beschreibung                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Login                  	| Geben Sie die OVHcloud E-Mail-Adresse ein, zu der Sie Ihre Kontakte migrieren.            	|
| Passwort           	| Geben Sie das Passwort für die Ziel-E-Mail-Adresse ein.                          	|
| Kontakt-E-Mail 	| Geben Sie eine E-Mail-Adresse ein, über die Sie über den Fortschritt der Migration informiert werden und den Download einer Datei fortsetzen können.	|

![omm](images/OMM-gmail-step23-02.png){.thumbnail}

Klicken Sie auf `Datei auswählen`{.action}, um die Kontakte-Datei mit Endung **.vcf** auf Ihrem Gerät zu selektieren, und klicken Sie dann auf `Hochladen`{.action}.

![omm](images/OMM-gmail-step23-03.png){.thumbnail}

Geben Sie das Passwort für Ihr Ziel-E-Mail-Konto ein und klicken Sie auf `Migration starten`{.action}.

![omm](images/OMM-gmail-step23-04.png){.thumbnail}

Das Migrationsüberwachungsfenster wird angezeigt. Sie können es geöffnet lassen, um die Live-Migration zu verfolgen oder es schließen. Das hat keine Auswirkungen auf die Migration.

![omm](images/OMM-gmail-step03.png){.thumbnail}


## Weiterführende Informationen

[Weniger sichere Verbindungen in Google Mail zulassen](https://docs.ovh.com/de/microsoft-collaborative-solutions/migration-gmail-mit-ovh-mail-migrator/gmail-sicherheit).

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en).