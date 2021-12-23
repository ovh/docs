---
title: 'Konfiguration von Exchange auf macOS Mail'
slug: exchange-automatische-konfiguration-auf-mac-mail
excerpt: 'Hier erfahren Sie, wie Sie Ihren Exchange Account auf der Mail App von macOS El Capitan, Sierra und High Sierra einrichten.'
section: 'Konfiguration des Exchange E-Mail-Clients'
---

**Stand 27.06.2018**

## Einleitung

Exchange Accounts können auf einem kompatiblen E-Mail-Client eingerichtet werden. So können Sie Ihre E-Mail-Adresse mit Ihrer bevorzugten App verwenden und zugleich von den kollaborativen Exchange Funktionen profitieren.

**In dieser Anleitung erfahren Sie, wie Sie Ihren Exchange Account auf der Mail App von macOS El Capitan, Sierra und High Sierra einrichten.**


## Voraussetzungen

- Sie besitzen ein [Exchange](https://www.ovhcloud.com/de/emails/){.external} Angebot.
- Die Mail App ist auf Ihrem Gerät installiert.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

> [!primary]
>
> Diese Anleitung gilt für folgende macOS Versionen: El Capitan, Sierra, High Sierra.
>

## Beschreibung

Es gibt zwei Möglichkeiten, um Ihre E-Mail-Adresse zur Mail App hinzuzufügen:

- **In nur wenigen Klicks über unser Apple Devices Tool**: Klicken Sie auf den Link <https://autodiscover.mail.ovh.net/AppleDevices/> und folgen Sie den Konfigurationsschritten.

- **Folgen Sie dem Konfigurationsassistenten der Mail App**: Starten Sie die Mail App auf Ihrem Gerät.

Die vorliegende Anleitung dokumentiert von hier an nur die Konfiguration über die Mail App.

### Schritt 1: Account hinzufügen

Nachdem Sie die Mail App auf Ihrem Gerät gestartet haben, können Sie einen Account auf zwei Arten hinzufügen:

- **Wenn Sie die App zum ersten Mal starten**, öffnet sich ein Fenster, in dem Sie einen Anbieter für Ihren E-Mail-Account auswählen können. Wählen Sie `Exchange`{.action} aus und fahren Sie fort.

- **Wenn Sie bereits einen Account eingerichtet haben**, klicken Sie auf `Mail`{.action} am oberen Rand Ihres Bildschirms und anschließend auf `Account hinzufügen`{.action}. Wählen Sie `Exchange`{.action} aus und fahren Sie fort.

![Exchange](images/configuration-mail-macos-step1.png){.thumbnail}

Geben Sie Ihre Account-Daten ein:

|Information|Beschreibung| 
|---|---| 
|Name|Geben Sie den Namen ein, der als Absender angezeigt werden soll, wenn E-Mails von dieser Adresse aus versendet werden.|
|E-Mail-Adresse|Geben Sie die vollständige E-Mail-Adresse ein.|
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein.|  

Klicken Sie auf `Anmelden`{.action}. Wenn Ihre Angaben korrekt sind und die Domain richtig mit Ihrem Exchange Dienst verknüpft ist, wird die Verbindung zu Ihrem Account hergestellt.

![Exchange](images/configuration-mail-macos-step2.png){.thumbnail}

Stellen Sie sicher, dass Sie bei der Wahl der Anwendungen `Mail`{.action} ausgewählt lassen, damit die App den Account verwenden kann. Auch andere Anwendungen können einige der kollaborativen Funktionen von Exchange verwenden. Wenn Sie die gewünschten Anwendungen ausgewählt haben, klicken Sie auf `Fertig`{.action}.

Sie können eine Test-E-Mail versenden, um zu überprüfen, ob der Account korrekt eingerichtet ist.

![Exchange](images/configuration-mail-macos-step3.png){.thumbnail}

Sollten Sie Probleme bei der Verbindung Ihres Accounts haben, empfehlen wir Folgendes:

- Überprüfen Sie im [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} die Domainkonfiguration Ihres Exchange Dienstes. Gehen Sie hierzu auf den Tab `Assoziierte Domains`{.action} und dann in die Spalte `Diagnose`{.action}.

- Geben Sie die URL für die Verbindung mit dem Exchange Dienst manuell ein. Fahren Sie trotz Sicherheitswarnung des Zertifikats fort und vervollständigen Sie die Felder `Interne URL`{.action} und `Externe URL`{.action} mit den Informationen zum Server, auf dem Ihr Exchange Dienst gehostet ist.

Sie finden die Server-Informationen im [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}, wenn Sie im Menü den betreffenden Exchange Dienst auswählen. Gehen Sie dann auf den Tab `Allgemeine Informationen`{.action}. Der entsprechende Server wird unter `Verbindung`{.action} angezeigt.

### Schritt 2: E-Mail-Adresse verwenden

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt Nachrichten versenden und empfangen.

Eine OVH Webanwendung mit [kollaborativen Funktionen](https://www.ovhcloud.com/de/emails/){.external} ist verfügbar unter [https://www.ovhcloud.com/de/emails/](https://www.ovh.de/mail/){.external}. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.

## Weiterführende Informationen

[Konfiguration Ihrer E-Mail-Adresse aus dem MX Plan Angebot oder aus einem Webhosting Angebot auf macOS Mail](https://docs.ovh.com/de/emails/anleitung-mail-konfiguration-auf-macos){.external}

[Anleitung zur Konfiguration von E-Mail Pro auf macOS Mail](https://docs.ovh.com/de/emails-pro/email-pro-auf-macos-konfigurieren/){.external}

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
