---
title: "Passwort eines FTP-Benutzers ändern"
excerpt: "Erfahren Sie hier, wie Sie das Passwort eines auf Ihrem OVHcloud Webhosting erstellten FTP-Benutzers ändern"
updated: 2026-03-31
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

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

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

### Das Passwort eines FTP-Benutzers ändern

> [!primary]
>
> Für weitere Informationen zu bewährten Praktiken bei der Passwortverwaltung lesen Sie die Anleitung "[Das Passwort Ihres Kunden-Accounts anlegen und verwalten](/pages/account_and_service_management/account_information/manage-ovh-password)".

Je nach Ihrem [OVHcloud Webhosting](/links/web/hosting) erfolgt die Änderung des Passworts Ihres FTP-Benutzers auf zwei verschiedene Weisen.

**Klicken Sie auf Ihr Angebot, um den Inhalt anzuzeigen.**

/// details | Perso und kostenloses 100M Hosting (ein FTP-Benutzer)

Klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Eine Tabelle zeigt die *FTP-Benutzer*, die auf Ihrem Webhosting erstellt wurden. Klicken Sie in der Spalte `Passwort`{.action} auf das *Stift-Symbol*, geben Sie das neue Passwort **unter Beachtung der Passwortrichtlinie** ein und bestätigen Sie die Änderung, indem Sie auf den *grünen Button* klicken.
>>
>> ![change-ftp-password-step1-perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-perso.png){.thumbnail}

///

/// details | Pro und Performance (mehrere FTP-Benutzer)

Klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Eine Tabelle zeigt die *FTP-Benutzer*, die auf Ihrem Webhosting erstellt wurden. Klicken Sie auf den Button `...`{.action} rechts neben dem betreffenden FTP-Benutzer und anschließend auf `Passwort ändern`{.action}. Geben Sie im angezeigten Fenster das neue Passwort **unter Beachtung der Passwortrichtlinie** ein, bestätigen Sie, indem Sie es ein zweites Mal eingeben, und klicken Sie dann auf den Button `Bestätigen`{.action}.
>>
>> ![change-ftp-password-pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-pro.png){.thumbnail}

///

> [!primary]
>
> Ihr neues Passwort muss folgenden **Richtlinien** entsprechen:
>
> - Mindestens 9 Zeichen
> - Maximal 30 Zeichen
> - Mindestens ein Großbuchstabe
> - Mindestens ein Kleinbuchstabe
> - Mindestens eine Ziffer
> - Nur Ziffern und Buchstaben

Gehen Sie dann zum Tab `Aktuelle Tasks`{.action} und laden Sie die Seite ggf. neu, um den Fortschritt zu überprüfen. Die Änderung benötigt einige Minuten, bis sie wirksam ist.

### Zugang zu Ihrem Speicherplatz

Um auf Ihren FTP-Speicherplatz zuzugreifen, lesen Sie unsere Anleitung ["Mit dem Speicherplatz Ihres Webhostings verbinden"](/pages/web_cloud/web_hosting/ftp_connection).

## Weiterführende Informationen <a name="go-further"></a>

[Das Passwort Ihres Kunden-Accounts anlegen und verwalten](/pages/account_and_service_management/account_information/manage-ovh-password)

[Mit dem Speicherplatz eines Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)

[Ihre Website online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.