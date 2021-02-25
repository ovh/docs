---
title: 'Konfiguration von Exchange auf Outlook 2016 für Windows'
slug: exchange-automatische-konfiguration-auf-outlook-2016
excerpt: 'So konfigurieren Sie Ihren Exchange Account auf Outlook 2016 für Windows'
section: 'Konfiguration des Exchange E-Mail-Clients'
---

**Stand 29.06.2018**

## Einleitung

Exchange Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihre E-Mail-Adresse von dem von Ihnen bevorzugten Gerät aus verwenden.

**In dieser Anleitung erfahren Sie, wie Sie Ihren Exchange Account auf Outlook 2016 für Windows einrichten.**

## Voraussetzungen

- Sie besitzen ein [Exchange](https://www.ovh.de/emails/){.external} Angebot.
- Die Microsoft Outlook-Anwendung ist auf Ihrem Gerät installiert.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.
- Der OVH SRV-Eintrag ist in der DNS-Zone der Domain korrekt konfiguriert.

> [!primary]
>
> Sie verwenden Outlook 2016 für Mac? Die zugehörige Dokumentation finden Sie hier: [Konfiguration von Exchange auf Outlook 2016 für Mac](https://docs.ovh.com/de/microsoft-collaborative-solutions/konfiguration-outlook-2016-mac/){.external}
>

## Beschreibung

### Schritt 1: Account hinzufügen

Nachdem Sie die Outlook-Anwendung auf Ihrem Gerät gestartet haben, können Sie einen Account auf zwei Arten hinzufügen:

- **Wenn Sie die Anwendung zum ersten Mal starten**, öffnet sich ein Konfigurationsassistent und Sie werden dazu aufgefordert, Ihre E-Mail-Adresse einzugeben.

- **Wenn Sie bereits einen Account eingerichtet haben**, klicken Sie am oberen Rand Ihres Bildschirms auf `Datei`{.action} und anschließend auf `Konto hinzufügen`{.action}.

![Exchange](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Geben Sie nun Ihre E-Mail-Adresse an und klicken Sie auf `Erweiterte Optionen`{.action}. Setzen Sie einen Haken in dem sich öffnenden Feld `Ich möchte mein Konto manuell einrichten`{.action} und klicken Sie anschließend auf `Verbinden`{.action}. Wählen Sie aus den verschiedenen Kontotypen **Exchange** aus.

Es erscheint ein Fenster, in dem Sie das **Kennwort** der E-Mail-Adresse angeben sollen. Tragen Sie das Kennwort ein, setzen Sie einen Haken, um das Passwort zu speichern, und klicken Sie anschließend auf `OK`{.action}.

> [!primary]
>
> Wenn eine Nachricht erscheint, dass Ihr Konto nicht eingerichtet werden konnte, ist der OVH SRV-Eintrag möglicherweise nicht korrekt in der DNS-Zone konfiguriert.
>
> Überprüfen Sie die Domainkonfiguration Ihres Exchange Dienstes im [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}. Gehen Sie hierzu auf den Tab `Assoziierte Domains`{.action} und dann in die Spalte `Diagnose`{.action}.
>

Ist die Konfiguration Ihrer Domain korrekt, erscheint eine Nachricht, die Sie auffordert, die Verbindung zu den OVH Servern zu erlauben. Akzeptieren Sie die Verbindung, damit Ihr Exchange Account automatisch konfiguriert werden kann.

Ist dieser fertig eingerichtet und über Ihr Outlook 2016 erreichbar, können Sie eine Test-E-Mail versenden, um zu überprüfen, ob der Account auch korrekt funktioniert.

![Exchange](images/configuration-outlook-2016-windows-exchange-step2.png){.thumbnail}

### Schritt 2: E-Mail-Adresse verwenden

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt Nachrichten versenden und empfangen.

OVH bietet Ihnen außerdem eine Webanwendung mit [kollaborativen Funktionen](https://www.ovh.de/emails/){.external}. Diese ist über <https://www.ovh.de/mail/> verfügbar. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.

## Weiterführende Informationen

[Konfiguration Ihrer E-Mail-Adresse aus dem MX Plan Angebot oder einem Webhosting Angebot auf Outlook 2016 für Windows](https://docs.ovh.com/de/emails/konfiguration-outlook-2016/){.external}

[Konfiguration von E-Mail Pro auf Outlook 2016 für Windows](https://docs.ovh.com/de/emails-pro/konfiguration-outlook-2016/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.