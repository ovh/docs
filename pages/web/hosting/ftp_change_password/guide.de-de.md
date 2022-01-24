---
title: Passwort eines FTP-Benutzers ändern
slug: ftp-benutzer-passwort ändern
excerpt: Hier erfahren Sie, wie Sie das Passwort eines auf Ihrem OVHcloud Webhosting erstellten FTP-Benutzers ändern.
section: FTP und SSH
order: 2
---

**Stand 24.01.2022**

## Ziel

Die OVHcloud Webhosting Angebote bieten Zugriff auf einen Online-Speicherplatz für Dateien, der über das **FTP-Protokoll nutzbar ist**.<br>Zugriff auf diesen Bereich ist über einen FTP-Benutzer und das zugehörige Passwort möglich.
<br>Mit diesem Zugang können Sie [Ihre Website online stellen](https://docs.ovh.com/de/hosting/webhosting_meine_seite_online_stellen/).

**Hier erfahren Sie, wie Sie das Passwort eines auf Ihrem OVHcloud Webhosting erstellten FTP-Benutzers ändern.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie im [Abschnitt](#gofurther) Weitere Informationen.
>

## Voraussetzungen

- Sie verfügen über ein OVHcloud [Webhosting Angebot](https://www.ovhcloud.com/de/web-hosting/).
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.

## In der praktischen Anwendung

### Schritt 1: Auf die Verwaltung der FTP-Benutzer zugreifen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Wählen Sie den Tab `FTP-SSH`{.action}.

Eine Tabelle zeigt die auf Ihrem Hosting erstellten FTP-Benutzer an. Mit diesen Benutzern können Sie auf Ihren FTP-Speicherplatz zugreifen, um dort die Dateien Ihrer Website online zu stellen. Bei der Installation Ihres Hostings wird automatisch ein Benutzer erstellt.

### Schritt 2: Passwort eines FTP-Benutzers ändern

> [!primary]
>
> Für weitere Informationen zu bewährten Praktiken bei der Passwortverwaltung folgen Sie den Anweisungen in dieser [Anleitung](https://docs.ovh.com/de/customer/Passwort-verwalten/).
>

Je nach Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/)-Angebot erfolgt die Änderung des Passworts Ihres FTP-Benutzers über den Tab `FTP-SSH`{.action} über zwei verschiedene Wege:

- **für Angebote, die keinen zweiten FTP-Benutzer erstellen können** (Start 10M, Kimsufi Web und Basic Hosting): Klicken Sie in der Spalte `Passwort`{.action} auf das Bleistift-Symbol, geben Sie das neue Passwort ein und bestätigen Sie die Änderung, indem Sie auf den grünen Button klicken.

![change-ftp-password-step1-perso](images/change-ftp-password-step1-perso.png){.thumbnail}

- **für die Angebote, die es erlauben, mehrere FTP-Benutzer zu erstellen** (Pro und Performance Hosting): Klicken Sie auf die drei Punkte rechts neben dem betreffenden FTP-Benutzer und anschließend auf `Passwort ändern`{.action}. Geben Sie im angezeigten Fenster das neue Passwort ein, bestätigen Sie dieses, indem Sie es ein zweites Mal eingeben und klicken Sie dann auf den Button `Bestätigen`{.action}.

![change-ftp-password-step1-pro](images/change-ftp-password-step1-pro.png){.thumbnail}

Wählen Sie das neue Passwort Ihrer Datenbank aus und notieren Sie es. In beiden Fällen muss er folgende Bedingungen erfüllen:

- Mindestens 8 Zeichen
- Maximal 30 Zeichen
- Mindestens ein Großbuchstabe
- Mindestens ein Kleinbuchstabe
- Mindestens eine Ziffer
- Darf ausschließlich aus Ziffern und Buchstaben bestehen.

Gehen Sie dann auf den Tab `Laufende Tasks`{.action} und laden Sie die Seite regelmäßig neu. Die Änderung dauert nur wenige Minuten, bis sie wirksam ist.

### Schritt 3: Auf Ihren Speicherplatz zugreifen

Die Anbindung Ihrer Dateien an den Hosting-Bereich kann auf mehrere Arten erfolgen:

- **FTP Explorer**: Diese Software ist über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) erreichbar. Klicken Sie im Tab `FTP-SSH`{.action} auf den Button `FTP Explorer`{.action}.

- **ein FTP Programm**: Installieren Sie einen FTP-kompatiblen Client auf Ihrem Computer (z. B. [FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/)).

- **einen SSH-Zugang** (nur bei den Pro und Performance Hosting): Verwenden Sie dieses Verbindungsprotokoll in der Anleitung [“SSH-Zugang Ihres Webhostings verwenden“](https://docs.ovh.com/de/hosting/webhosting_ssh_auf_ihren_webhostings/).

> [!primary]
>
> Weitere Informationen finden Sie in der Anleitung [“Mit dem Speicherplatz eines Webhostings verbinden“](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/).
>

## Mehr <a name="gofurther"></a>

[Grundlegende Sicherheitsmaßnahmen zu Passwörtern vom BSI](https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Passwoerter/passwoerter_node.html){.external}

[Verwendung des FileZilla Programms mit Ihrem Hosting](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/)

[SSH auf Webhostings](https://docs.ovh.com/de/hosting/webhosting_ssh_auf_ihren_webhostings/)

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, lesen Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
