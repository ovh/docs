---
title: Passwort eines FTP-Benutzers ändern
excerpt: Erfahren Sie hier, wie Sie das Passwort eines auf Ihrem OVHcloud Webhosting erstellten FTP-Benutzers ändern
updated: 2023-05-29
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 29.05.2023**

## Ziel 

Die OVHcloud Webhosting Angebote bieten Zugriff auf einen Online-Speicherplatz für Dateien, der über das **FTP**-Protokoll nutzbar ist: FTP-Speicherplatz.

Der Zugriff auf diesen Speicherplatz ist mit einem **FTP-Benutzer** und seinem zugehörigen Passwort möglich.

Dieser Zugang erlaubt unter anderem [Ihre Website online zu stellen](/pages/web/hosting/hosting_how_to_get_my_website_online/).

**Diese Anleitung erklärt, wie Sie das Passwort eines auf Ihrem OVHcloud Webhosting erstellten FTP-Benutzers ändern.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Schritt 1: Auf die FTP-Benutzerverwaltung zugreifen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Öffnen Sie den Tab `FTP-SSH`{.action}.

Eine Tabelle zeigt die *FTP-Benutzer*, die auf Ihrem Webhosting erstellt wurden. Mit diesen Benutzern können Sie auf Ihren FTP-Speicherplatz zugreifen, um dort die Dateien Ihrer Website online zu stellen. Bei der Installation Ihres Webhostings wird automatisch ein Benutzer erstellt.

### Schritt 2: Passwort eines FTP-Benutzers ändern

> [!primary]
>
> Für weitere Informationen zu bewährten Praktiken bei der Passwortverwaltung folgen Sie den Anweisungen in [dieser Anleitung](/pages/account/customer/manage-ovh-password/).
>

Ihr neues Passwort muss folgenden **Richtlinien** entsprechen:

- Mindestens 8 Zeichen
- Maximal 30 Zeichen
- Mindestens ein Großbuchstabe
- Mindestens ein Kleinbuchstabe
- Mindestens eine Ziffer
- Nur Ziffern und Buchstaben

Je nach Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) erfolgt die Änderung des Passworts Ihres FTP-Benutzers im Tab `FTP-SSH`{.action} über zwei verschiedene Wege:

- **Für Hosting-Pakete, die keinen zweiten FTP-Benutzer erstellen können** (*Kostenloses Hosting 100M* und *Basic Hosting*):

Klicken Sie in der Spalte `Passwort`{.action} der angezeigten Tabelle auf das *Stift-Symbol*, geben Sie das neue Passwort **unter Beachtung der Passwortrichtlinie** ein und bestätigen Sie die Änderung, indem Sie auf den *grünen Button* klicken.

![change-ftp-password-step1-perso](images/change-ftp-password-step1-perso.png){.thumbnail}

- **Für Hosting-Pakete, die es erlauben, mehrere FTP-Benutzer zu erstellen** (*Pro* und *Performance*): 

Klicken Sie auf den Button `...`{.action} rechts neben dem betreffenden FTP-Benutzer und anschließend auf `Passwort ändern`{.action}. Geben Sie im angezeigten Fenster das neue Passwort **unter Beachtung der Passwortrichtlinie** ein, bestätigen Sie, indem Sie es ein zweites Mal eingeben und klicken Sie dann auf den Button `Bestätigen`{.action}.

![change-ftp-password-step1-pro](images/change-ftp-password-step1-pro.png){.thumbnail}

Gehen Sie dann zum Tab `Aktuelle Tasks`{.action} und laden Sie die Seite ggf. neu um den Fortschritt zu überprüfen. Die Änderung benötigt einige Minuten, bis sie wirksam ist.

### Schritt 3: Auf Ihren Speicherplatz zugreifen

Um auf Ihren FTP-Speicherplatz zuzugreifen, lesen Sie unsere Anleitung ["Mit dem Speicherplatz Ihres Webhostings verbinden"](/pages/web/hosting/ftp_connection/).

## Weiterführende Informationen <a name="gofurther"></a>

[Das Passwort Ihres Kunden-Accounts anlegen und verwalten](/pages/account/customer/manage-ovh-password/)

[Mit dem Speicherplatz eines Webhostings verbinden](/pages/web/hosting/ftp_connection/)

[Ihre Website online stellen](/pages/web/hosting/hosting_how_to_get_my_website_online/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
