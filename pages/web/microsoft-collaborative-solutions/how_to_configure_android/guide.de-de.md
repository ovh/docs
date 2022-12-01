---
title: 'Konfiguration Ihres Exchange Accounts in Android über die Gmail-App'
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie Ihren Exchange Account in Android über die Gmail-App einrichten.'
slug: exchange_20132016_konfiguration_in_android
legacy_guide_number: g1282
section: 'Konfiguration von Exchange auf kompatiblen Smartphones/Tablets'
---

**Stand 14.09.2018**

## Einleitung

Exchange Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden.

**Hier erfahren Sie, wie Sie Ihren Exchange Account in Android über die Gmail-App einrichten.**

## Voraussetzungen

- Sie besitzen ein [Exchange](https://www.ovhcloud.com/de/emails/){.external} Angebot.
- Die Gmail-App ist auf Ihrem Gerät installiert. Sie können diese über den Google Play Store installieren.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

> [!primary]
>
> Diese Anleitung wurde über ein Nexus-6-Gerät mit Android Version 7.1.1 erstellt. Aus Konsistenzgründen verwenden wir die Gmail-App, die über den Google Play Store heruntergeladen werden kann. Wenn Sie eine andere App verwenden möchten, wird sich die Vorgehensweise dementsprechend unterscheiden.
>

## Beschreibung

### Schritt 1: Account hinzufügen

Tippen Sie auf dem Bildschirm Ihres Geräts auf die `Gmail`{.action}-App. Es gibt zwei Möglichkeiten, um Ihren Account hinzuzufügen:

- **Wenn noch kein Account eingerichtet ist**: Tippen Sie sich durch das Willkommensfenster und dann auf `E-Mail-Adresse hinzufügen`{.action}. Wählen Sie anschließend `Exchange und Office 365`{.action} aus. 

- **Wenn bereits ein Account eingerichtet ist**: Tippen Sie oben links auf das Icon mit den drei Strichen, dann auf das Pfeilsymbol rechts neben dem bereits eingerichteten Account. Tippen Sie anschließend auf `Konto hinzufügen`{.action} und wählen Sie `Exchange und Office 365`{.action} aus. 

![Exchange](images/configuration-exchange-gmail-application-android-step1.png){.thumbnail}

Geben Sie Ihre E-Mail-Adresse ein und tippen Sie dann auf `Weiter`{.action}.

Geben Sie nun das Passwort Ihrer E-Mail-Adresse ein, wählen Sie kein Clientzertifikat aus und klicken Sie auf `Weiter`{.action}, um mit der Konfiguration fortzufahren. Es kann sein, dass sich die App mit dem OVHcloud Server verbindet, um Ihren Account einzurichten. Ist das der Fall, erscheint eine entsprechende Nachricht auf Ihrem Gerät. Tippen Sie auf `OK`{.action}, um die Verbindung vorzunehmen.

Geben Sie nun die Einstellungen des Eingangsservers ein. Manche Felder werden gegebenenfalls automatisch ausgefüllt.

|Information|Beschreibung| 
|---|---| 
|Domain/Nutzername|Geben Sie die vollständige E-Mail-Adresse ein.|  
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein.|
|Clientzertifikat|Wählen Sie nichts aus.|
|Server|Tragen Sie hier den Server ein, auf dem Ihr Exchange Dienst gehostet ist. Sie finden die Angaben zum Server im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}, indem Sie den entsprechenden Exchange Dienst auswählen, auf den Tab `Allgemeine Informationen`{.action} tippen und dort in den Bereich `Verbindung`{.action} gehen.|
|Port|Tragen Sie den Port „443“ ein.|  
|Sicherheitstyp|Wählen Sie „SSL/TLS“ aus.|

Tippen Sie anschließend auf `Weiter`{.action}. Wenn Ihre Angaben korrekt sind, wird die Verbindung zu Ihrem Account hergestellt.

![Exchange](images/configuration-exchange-gmail-application-android-step2.png){.thumbnail}

Um die Konfiguration abzuschließen, erlauben Sie dem OVHcloud Server bestimmte Sicherheitsfunktionen Ihres Geräts remote zu steuern. Tippen Sie auf `OK`{.action}, lesen Sie die Informationen im angezeigten Fenster und tippen Sie dann auf `Diesen Geräteadministrator aktivieren`{.action}.

Nun können Sie einen Namen für Ihren Account festlegen, um diesen von anderen in Ihrer App angezeigten Accounts zu unterscheiden. Tippen Sie anschließend auf `Weiter`{.action}.

Sie können eine Test-E-Mail versenden, um zu überprüfen, dass der Account korrekt eingerichtet ist.

### Schritt 2: E-Mail-Adresse verwenden

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt Nachrichten versenden und empfangen.

Eine OVHcloud Webanwendung mit [kollaborativen Funktionen](https://www.ovhcloud.com/de/emails/){.external} ist verfügbar unter [https://www.ovh.de/mail/](https://www.ovh.de/mail/){.external}. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.

## Weiterführende Informationen

[Konfiguration Ihrer E-Mail-Adresse aus dem MX Plan Angebot oder einem Webhosting Angebot in Android über die Gmail-App](https://docs.ovh.com/de/emails/konfiguration-android){.external}

[Konfiguration Ihres E-Mail Pro Accounts in Android über die Gmail-App](https://docs.ovh.com/de/emails-pro/konfiguration-android){.external}

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.