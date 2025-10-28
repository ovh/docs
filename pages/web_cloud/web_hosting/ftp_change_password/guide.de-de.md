---
title: "Passwort eines FTP-Benutzers ändern"
excerpt: "Erfahren Sie hier, wie Sie das Passwort eines auf Ihrem OVHcloud Webhosting erstellten FTP-Benutzers ändern"
updated: 2025-10-14
---

## Ziel 

Die OVHcloud Webhosting Angebote bieten Zugriff auf einen Online-Speicherplatz für Dateien, der über das **FTP**-Protokoll nutzbar ist: FTP-Speicherplatz.

Der Zugriff auf diesen Speicherplatz ist mit einem **FTP-Benutzer** und seinem zugehörigen Passwort möglich.

Dieser Zugang erlaubt unter anderem [Ihre Website online zu stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).

**Diese Anleitung erklärt, wie Sie das Passwort eines auf Ihrem OVHcloud Webhosting erstellten FTP-Benutzers ändern.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

### 1 - Auf die FTP-Benutzerverwaltung zugreifen

Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Tab `FTP - SSH`{.action}.
>>
>> ![FTP 6 SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Eine Tabelle zeigt die *FTP-Benutzer*, die auf Ihrem Webhosting erstellt wurden. Mit diesen Benutzern können Sie auf Ihren FTP-Speicherplatz zugreifen, um dort die Dateien Ihrer Website online zu stellen. Bei der Installation Ihres Webhostings wird automatisch ein Benutzer erstellt.

### 2 - Passwort eines FTP-Benutzers ändern

> [!primary]
>
> Für weitere Informationen zu bewährten Praktiken bei der Passwortverwaltung folgen Sie den Anweisungen in [dieser Anleitung](/pages/account_and_service_management/account_information/manage-ovh-password).
>

Je nach Ihrem [OVHcloud Webhosting](/links/web/hosting) erfolgt die Änderung des Passworts Ihres FTP-Benutzers im Tab `FTP - SSH`{.action} über zwei verschiedene Wege:

- **Für Hosting-Pakete, die keinen zweiten FTP-Benutzer erstellen können** (*Kostenloses Hosting 100M* und *Basic Hosting*):

Klicken Sie in der Spalte `Passwort`{.action} der angezeigten Tabelle auf das *Stift-Symbol*, geben Sie das neue Passwort **unter Beachtung der Passwortrichtlinie** ein und bestätigen Sie die Änderung, indem Sie auf den *grünen Button* klicken.

![change-ftp-password-step1-perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-perso.png){.thumbnail}

- **Für Hosting-Pakete, die es erlauben, mehrere FTP-Benutzer zu erstellen** (*Pro* und *Performance*): 

Klicken Sie auf den Button `...`{.action} rechts neben dem betreffenden FTP-Benutzer und anschließend auf `Passwort ändern`{.action}. Geben Sie im angezeigten Fenster das neue Passwort **unter Beachtung der Passwortrichtlinie** ein, bestätigen Sie, indem Sie es ein zweites Mal eingeben und klicken Sie dann auf den Button `Bestätigen`{.action}.

![change-ftp-password-pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-pro.png){.thumbnail}

> [!primary]
>
> Ihr neues Passwort muss folgenden **Richtlinien** entsprechen:
>
>- Mindestens 9 Zeichen
>- Maximal 30 Zeichen
>- Mindestens ein Großbuchstabe
>- Mindestens ein Kleinbuchstabe
>- Mindestens eine Ziffer
>- Nur Ziffern und Buchstaben

Gehen Sie dann zum Tab `Aktuelle Tasks`{.action} und laden Sie die Seite ggf. neu um den Fortschritt zu überprüfen. Die Änderung benötigt einige Minuten, bis sie wirksam ist.

### 3 - Auf Ihren Speicherplatz zugreifen

Um auf Ihren FTP-Speicherplatz zuzugreifen, lesen Sie unsere Anleitung ["Mit dem Speicherplatz Ihres Webhostings verbinden"](/pages/web_cloud/web_hosting/ftp_connection).

## Weiterführende Informationen <a name="go-further"></a>

[Das Passwort Ihres Kunden-Accounts anlegen und verwalten](/pages/account_and_service_management/account_information/manage-ovh-password)

[Mit dem Speicherplatz eines Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)

[Ihre Website online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.