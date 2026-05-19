---
title: "Webhosting – Aktivieren des Zugriffs über SFTP"
excerpt: "Erfahren Sie, wie Sie den SFTP-Zugriff auf Ihrem OVHcloud Webhosting aktivieren"
updated: 2026-02-04
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

Die Webhosting-Angebote von OVHcloud bieten Zugriff auf einen Speicherplatz, auf dem Sie die Dateien Ihrer Webseiten oder Anwendungen hochladen können. Der Zugriff auf diesen Speicherplatz ist über einen FTP- oder SSH-Benutzer mit den zugehörigen Passwörtern möglich.

Wie **F**ile **T**ransfer **P**rotocol (**FTP**) ermöglicht es **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**), Daten von Ihrem Gerät auf den Speicherplatz Ihres Webhostings zu übertragen.

Der einzige Unterschied besteht darin, dass SFTP einen sicheren Kanal zum Austausch von Daten verwendet. Die über diesen Protokoll übertragenen Daten werden automatisch verschlüsselt.

**Erfahren Sie, wie Sie den SFTP-Zugriff auf Ihrem OVHcloud Webhosting aktivieren.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting).

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

### SFTP-Zugriff für einen FTP-Benutzer Ihres Webhostings aktivieren

**Öffnen Sie den Abschnitt, der Ihrem Webhosting-Angebot entspricht, um die Erklärungen anzuzeigen.**

<!-- CP-STEPS-START:enable-sftp-starter-perso -->
/// details | SFTP auf einem Webhosting-Angebot **Kostenloses Hosting 100M**, **Starter** oder **Basic** aktivieren

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
>> Im Tabelle am unteren Rand der Seite klicken Sie das Kontrollkästchen in der Spalte **SFTP** des gewünschten FTP-Benutzers an. Die Seite aktualisiert sich automatisch.
>>
>> ![FTP - SSH Perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-perso.png){.thumbnail}
>>
>> Sobald die Option **SFTP** aktiviert ist, können Sie den SFTP-Protokoll Ihres Webhostings mit dem gewünschten FTP-Benutzer nutzen.
>>

///
<!-- CP-STEPS-END:enable-sftp-starter-perso -->

<!-- CP-STEPS-START:enable-sftp-pro-performance -->
/// details | SFTP auf einem Webhosting-Angebot **Pro** oder **Performance** aktivieren

Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

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
>> Im Tabelle am unteren Rand der Seite prüfen Sie den Status in der Spalte **SFTP** des gewünschten FTP-Benutzers :
>>
>> - **Aktiviert**: SFTP ist bereits für diesen Benutzer aktiv.
>> - **Deaktiviert**: Klicken Sie auf die Schaltfläche `...`{.action} rechts neben der entsprechenden Zeile, und dann auf `Ändern`{.action}.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/sftp-enabled-pro.png){.thumbnail}
>>
> **Schritt 4**
>>
>> In dem sich öffnenden Fenster, im Bereich **Verbindungsprotokolle**, wählen Sie `FTP und SFTP`{.action} oder `FTP, SFTP und SSH`{.action}, falls Sie auch das SSH-Protokoll aktivieren möchten.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-user-step-1-connexion-protocols.png){.thumbnail}
>>
>> Klicken Sie anschließend auf `Weiter`{.action}, und dann auf `Bestätigen`{.action}, um die Aktivierung des SFTP für den gewünschten Benutzer abzuschließen.

///
<!-- CP-STEPS-END:enable-sftp-pro-performance -->

### Über SFTP auf Ihr Webhosting zugreifen

Dazu konsultieren Sie unseren Guide « [Mit dem FTP-Speicherplatz eines Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection) ».

## Weiterführende Informationen

[Passwort eines FTP-Benutzers ändern](/pages/web_cloud/web_hosting/ftp_change_password)

[SSH-Zugang Ihres Webhostings verwenden](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Verwendung von PuTTY für Windows](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Tutorial - FileZilla mit Ihrem OVHcloud Hosting nutzen](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Tutorial - Cyberduck mit Ihrem OVHcloud Hosting nutzen](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.