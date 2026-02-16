---
title: "Zimbra - Einrichten eines WebDAV-Ordners auf Ihrem Computer"
excerpt: "Richten Sie den WebDAV-Zugriff auf Ihren Zimbra Briefcase auf Ihrem Computer ein, um Dateien direkt aus Ihrem System zu verwalten und zu teilen"
updated: 2026-02-10
---

<style>
.w-600 {
  max-width:600px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Ziel

Zimbra Pro E-Mail-Konten verfügen über einen Speicherbereich, der **Briefcase** genannt wird und über die WebDAV-Funktion verwendet werden kann, um Dateien auszutauschen. Diese Funktion ist über den Zimbra Webmail-Client verfügbar und kann auch auf Ihrem Computer eingerichtet werden, um den Briefcase als Speicherlaufwerk anzuzeigen.

**Erfahren Sie, wie Sie einen Zimbra WebDAV-Ordner auf Ihrem Computer einrichten.**

## Voraussetzungen

- Eine OVHcloud [Zimbra Pro](/links/web/emails) E-Mail-Adresse.
- Ein Windows- oder macOS-Computer.
- Die Zugangsdaten, die mit der E-Mail-Adresse des Zimbra Pro Kontos verknüpft sind.

## In der praktischen Anwendung

WebDAV (Web-based Distributed Authoring and Versioning) ist eine Erweiterung des HTTP-Protokolls, die es Ihnen ermöglicht, Dateien auf einem Server remote zu verwalten und sie so zu bearbeiten, als wären sie lokal.

Der dem Zimbra E-Mail-Konto zugewiesene Speicherbereich wird zwischen Ihren E-Mails und den Dateien im Briefcase aufgeteilt. Jede Datei, die in den Zimbra Briefcase hochgeladen wird, darf 100 MB nicht überschreiten.

In dieser Dokumentation verwenden wir die Beispiel-E-Mail-Adresse `john.smith@mydomain.ovh` und mounten den Ordner `Briefcase`, der standardmäßig vorhanden ist.

### Ein Ordner von Windows mounten

Bevor Sie sich von dem Windows Explorer mit Ihrem WebDAV-Ordner verbinden können, müssen Sie den WebClient-Dienst aktivieren und konfigurieren.

#### 1. WebClient-Dienst aktivieren

> [!tabs]
> **Schritt 1**
>>
>> - Öffnen Sie `Dienste`{.action} über das Windows-Startmenü.
>>
>> ![MX plan](images/windows-services-01.png){.thumbnail .w-600}
>>
> **Schritt 2**
>>
>> 1. Identifizieren Sie den **WebClient**-Dienst in der Liste.
>> 2. Klicken Sie mit der rechten Maustaste auf **WebClient**, dann auf `Eigenschaften`{.action}.
>> 3. Ändern Sie den *Starttyp* auf **Automatisch**.
>> 4. Klicken Sie auf `Starten`{.action}, um den Dienst zu starten, und dann auf `OK`{.action}, um die Änderungen zu bestätigen.
>>
>> ![MX plan](images/windows-services-02.png){.thumbnail .w-600}

#### 2. WebClient-Registrierungsschlüssel ändern

> [!tabs]
> **Schritt 1**
>>
>> - Öffnen Sie den `Registrierungs-Editor`{.action} über das Windows-Startmenü.
>>
>> ![MX plan](images/windows-regedit-01.png){.thumbnail .w-600}
>>
> **Schritt 2**
>>
>> 1. Identifizieren Sie den **WebClient**-Dienst im `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters\BasicAuthLevel`-Baum.
>> 2. Doppelklicken Sie auf den Registrierungsschlüssel `BasicAuthLevel`.
>> 3. Ändern Sie den *Wert*: Standardmäßig auf `1` gesetzt, ersetzen Sie ihn durch den Wert `2` und klicken Sie dann auf `OK`{.action}, um die Änderungen zu bestätigen.
>>
>> ![MX plan](images/windows-regedit-02.png){.thumbnail .w-600}

#### 3. SSL-Zertifikat des Zimbra-Servers importieren

> [!primary]
>
> Um das SSL-Zertifikat zu exportieren, haben wir den [Mozilla Firefox](https://www.firefox.com/)-Browser verwendet.

> [!tabs]
> **Schritt 1**
>>
>> 1. Öffnen Sie Ihren Webbrowser, laden Sie die Seite https://zimbra1.mail.ovh.net/, dann klicken Sie auf das Schlosssymbol in der Adressleiste.
>> 2. Klicken Sie auf `Verbindung ist sicher`{.action}.
>> 3. Klicken Sie auf `Weitere Informationen`{.action}.
>>
>> ![MX plan](images/windows-ssl-01.png){.thumbnail .w-600}
>>
> **Schritt 2**
>>
>> 1. Klicken Sie auf `Zertifikat anzeigen`{.action}.
>> 2. Öffnen Sie das Fenster, bleiben Sie auf dem Tab `zimbra1.mail.ovh.net` und klicken Sie auf `PEM (cert)`{.action}, um das SSL-Zertifikat herunterzuladen.
>>
>> ![MX plan](images/windows-ssl-02.png){.thumbnail .w-600}
>>
> **Schritt 3**
>>
>> - Ändern Sie die Dateierweiterung von `.pem` in `.cer`.
>>
>> ![MX plan](images/windows-ssl-03.png){.thumbnail .w-600}
>>
> **Schritt 4**
>>
>> 1. Öffnen Sie die Datei `zimbra1-mail-ovh-net.cer`, dann klicken Sie auf `Zertifikat installieren…`{.action}.
>> 2. Klicken Sie auf `Lokaler Computer`{.action}, dann auf `Weiter`{.action}.
>> 3. Aktivieren Sie `Alle Zertifikate in folgendem Speicher platzieren`, dann klicken Sie auf `Durchsuchen…`{.action}.
>> 4. Wählen Sie den Ordner `Vertrauenswürdige Stammzertifizierungsstellen` aus, dann klicken Sie auf `OK`{.action}.
>>
>> ![MX plan](images/windows-ssl-04.png){.thumbnail .w-600}

#### 4. Das Laufwerk mounten

In unserem Beispiel verwenden wir die Zimbra-E-Mail-Adresse `john.smith@mydomain.ovh` und den Ordner `Briefcase`, der standardmäßig im Zimbra-Speicherbereich erstellt wird.

1. Öffnen Sie den Windows-Datei-Explorer und klicken Sie auf `Dieser PC`{.action}.
2. Klicken Sie in der oberen Leiste auf den Button `…`{.action}, dann auf `Netzlaufwerk zuordnen`{.action}.
3. Geben Sie im erscheinenden Fenster den Ordnerpfad ein. Laut unserem Beispiel ist der Pfad `\\zimbra1.mail.ovh.net@SSL\dav\john.smith@mydomain.ovh\Briefcase`. Klicken Sie auf `Fertig`{.action}.
4. Ein Authentifizierungsfenster öffnet sich, geben Sie den `Benutzername` ein, der der vollständigen E-Mail-Adresse entspricht, und das zugehörige `Passwort`. Klicken Sie auf `OK`{.action}.

![MX plan](images/windows-mount-01.png){.thumbnail .w-600}

Ihr Netzlaufwerk wird nun angezeigt. Sie können Ihre Dateien darin platzieren, bis zu einer Grenze von 100 MB pro Datei.

![MX plan](images/windows-mount-02.png){.thumbnail .w-600}

### Ein Ordner von macOS mounten

Unter macOS ist es nicht notwendig, einen Dienst zu aktivieren oder das SSL-Zertifikat zu registrieren, Sie müssen lediglich das Laufwerk direkt über den **Finder** mounten.

> [!tabs]
> **Schritt 1**
>>
>> - Öffnen Sie den **Finder**.
>> - Klicken Sie in der oberen Leiste auf das Menü `Gehe zu`{.action}.
>> - Klicken Sie auf `Zum Server verbinden`{.action} (`⌘ + K`).
>>
>> ![MX plan](images/macos-mount-01.png){.thumbnail .w-600}
>>
> **Schritt 2**
>>
>> > [!warning]
>> >
>> > Es ist wichtig, das `@` in Ihrer E-Mail-Adresse durch `%40` zu ersetzen, wenn Sie den Pfad eingeben.
>>
>> - Geben Sie im erscheinenden Fenster den Verbindungspfad ein, der für Ihre E-Mail-Adresse und den Ordner, den Sie verbinden möchten, geeignet ist. Laut unserem Beispiel ist der Pfad `https://zimbra1.mail.ovh.net/dav/john.smith%40mydomain.ovh/Briefcase`.
>> - Klicken Sie auf `Verbinden`{.action}.
>>
>> ![MX plan](images/macos-mount-02.png){.thumbnail .w-600}
>> 
> **Schritt 3**
>>
>> 1. Ein Validierungsfenster für den Server `zimbra1.mail.ovh.net` erscheint, klicken Sie auf `Verbinden`{.action}.
>> 2. Ein neues Fenster fragt Sie nach dem `Namen`, der Ihrer vollständigen E-Mail-Adresse entspricht, und dem zugehörigen `Passwort`. Aktivieren Sie `Dieses Passwort in meinem Schlüsselbund speichern`, wenn Sie es für eine zukünftige Verbindung zu einem anderen Ordner speichern möchten. Klicken Sie auf `Verbinden`{.action}, um das Laufwerk zu mounten.
>>
>> ![MX plan](images/macos-mount-03.png){.thumbnail .w-600}

Sie haben nun Zugriff auf Ihren Zimbra Briefcase-Speicherbereich. Sie können darin jede Art von Datei platzieren, die nicht 100 MB überschreitet.

![MX plan](images/macos-mount-04.png){.thumbnail .w-600}

## Weiterführende Informationen <a name="go-further"></a>

[Erste Schritte mit der Zimbra-Lösung](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Richten Sie Ihre Zimbra-E-Mail-Adresse auf einem E-Mail-Client ein](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[Webmail von Zimbra verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[Zimbra OVHcloud Lösung FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.