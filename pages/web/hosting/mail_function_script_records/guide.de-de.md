---
title: 'Automatische E-Mails eines Webhostings verwalten'
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie über ein Webhosting versendete automatische E-Mails verfolgen und verwalten'
slug: webhosting_verwaltung_automatischer_e-mails
legacy_guide_number: g1974
section: 'Diagnose'
---

**Stand 24.09.2018**

## Einleitung

Automatische E-Mails werden über ein Skript versendet. Sie werden beispielsweise im Kontaktformular auf Ihrer Website verwendet und ermöglichen es, dass die Besucher der Website Ihnen Nachrichten senden.

**Hier erfahren Sie, wie Sie automatische E-Mails verfolgen und verwalten können, die über Ihr OVHcloud Webhosting versendet werden.**

## Voraussetzungen

- Sie besitzen ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.

> [!primary]
>
> Diese Anleitung bezieht sich nur auf E-Mails, die über Skripte auf Ihrem OVHcloud Webhosting versendet werden.
>
> Wenn Sie E-Mail-Adressen aus Ihrem MX Plan Angebot oder Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot verwalten möchten, gehen Sie in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} in den Bereich `E-Mails`{.action}.
>

## Beschreibung

Sie können automatische E-Mails, die von Ihrem Webhosting aus versendet werden, über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} verfolgen und verwalten. Loggen Sie sich hierzu im Kundencenter ein, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Klicken Sie dann auf den Tab `Mehr +`{.action} und auf `E-Mail-Skripte`{.action}.

Auf der angezeigten Seite können Sie die von Ihrem OVHcloud Webhosting aus gesendeten automatischen E-Mails verfolgen und verwalten.

![Hosting](images/monitoring-automatic-emails-step1.png){.thumbnail}

### Versand automatischer E-Mails nachverfolgen

Bleiben Sie im Bereich `E-Mail-Skripte`{.action}. Auf der Seite werden Ihnen auf einen Blick alle Informationen zu den E-Mails angezeigt, die automatisch über ein Skript versendet werden.

|Information|Details|
|---|---|
|Status der Dienstleistung|Zeigt den aktuellen Status des Dienstes an, der automatische E-Mails von Ihrem Webhosting aus versendet. Bei grün hinterlegtem Status ist der Versand aktiv. Ein rot hinterlegter Status bedeutet, dass keine E-Mails gesendet werden. Je nach Status unterscheidet sich die Versandverwaltung; siehe [„Versand automatischer E-Mails verwalten“](https://docs.ovh.com/de/hosting/webhosting_verwaltung_automatischer_e-mails/#versand-automatischer-e-mails-verwalten){.external}.|
|Fehlerbericht an|Sie können einen täglichen Fehlerbericht an eine E-Mail-Adresse Ihrer Wahl erhalten. Diese können Sie über den Button `Empfänger ändern`{.action} neu festlegen. Im Fehlerbericht werden die von Ihrem Webhosting aus gesendeten E-Mails aufgelistet, bei deren Versand OVHcloud eine Fehlermeldung erhalten hat, da sie nicht zugestellt werden konnten. Die Berichte können Sie außerdem jederzeit in Ihrem OVHcloud Kundencenter über den Button `E-Mails im Fehlerstatus`{.action} einsehen.|
|Gesamtzahl versandter E-Mails|Zeigt die Gesamtzahl der seit der Erstellung Ihres OVHcloud Webhostings versendeten automatischen E-Mails an.|
|Heute versandte E-Mails|Zeigt die Gesamtzahl der am aktuellen Tag versendeten automatischen E-Mails an.|
|Gesamtzahl E-Mails im Fehlerstatus|Zeigt die Gesamtzahl der seit der Erstellung Ihres OVHcloud Webhostings versendeten automatischen E-Mails an, bei deren Versand OVHcloud eine Fehlermeldung erhalten hat, da sie nicht zugestellt werden konnten.|
|History der versandten E-Mails|Zeigt eine Grafik an, die die History der von Ihrem Webhosting aus versendeten E-Mails bis zum aktuellen Tag darstellt.|

> [!primary]
>
> Um Missbrauch beim automatisierten Versand von E-Mails über Ihr Webhosting zu vermeiden, empfehlen wir Ihnen dringend, ein Sicherheitssystem wie einen Captcha für Formulare auf Ihrer Website einzurichten, über die E-Mails versendet werden (beispielsweise Kontaktformulare).
>

![Hosting](images/monitoring-automatic-emails-step2.png){.thumbnail}

Sollten Sie feststellen, dass die über Ihre Skripte generierten E-Mails nicht mehr versendet werden, obwohl der Status als „aktiv“ angezeigt wird, nehmen Sie die folgenden Schritte vor:

- **Versandskripte überprüfen**: Die Skripte können Syntaxfehler enthalten, wodurch der Versand der E-Mails nicht mehr möglich ist. Überprüfen Sie den Inhalt Ihrer Skripte und korrigieren Sie wenn nötig die Syntax. Versuchen Sie es anschließend erneut.

- **E-Mail-Versand über ein Testskript testen**: Schreiben Sie ein Testskript, um eine E-Mail an Ihre persönliche Adresse zu senden. Wenn Sie die Nachricht korrekt empfangen, bedeutet das, dass Ihre Versandskripte Fehler enthalten. Sollten Sie Hilfe beim Schreiben des Skripts benötigen, orientieren Sie sich an Testskripts im Internet.

- **Versand ohne Angabe des SMTP-Servers**: Geben Sie in den Skript-Einstellungen keinen SMTP-Server an. Wenn Sie ein Interface verwenden, um den E-Mail-Versand über Ihre Website zu verwalten, muss diese Einstellung auch in dessen Konfiguration bearbeitet werden können.

### Versand automatischer E-Mails verwalten

Bleiben Sie im Bereich `E-Mail-Skripte`{.action}. Dort finden Sie mehrere Buttons, um den Versand automatischer E-Mails über Ihr Webhosting zu verwalten. Je nach Status der Dienstleistung sind einige Optionen möglicherweise nicht verfügbar.

|Aktionen|Details|
|---|---|
|Versand blockieren|Stoppt den Versand automatischer E-Mails von Ihrem Webhosting aus. E-Mails, die nach der Sperrung über Ihre Skripte generiert werden, werden nicht versendet, sondern für bis zu 72 Stunden in einer Warteschleife gespeichert.|
|Versand entsperren|Setzt den Versand automatischer E-Mails von Ihrem Webhosting aus fort und versendet die E-Mails in der Warteschleife.|
|E-Mails bereinigen|Löscht E-Mails aus der Warteschleife und setzt anschließend den Versand fort.|

Klicken Sie für die gewünschte Aktion auf den entsprechenden Button und dann auf `Bestätigen`{.action}. In manchen Fällen kann es einige Minuten dauern, bis die Aktion vollständig ausgeführt ist.

![Hosting](images/monitoring-automatic-emails-step3.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
