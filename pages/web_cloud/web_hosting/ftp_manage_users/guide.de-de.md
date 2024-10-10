---
title: "Webhosting - FTP-Benutzer verwalten"
excerpt: "Erfahren Sie hier, wie Sie FTP-Benutzer auf Ihrem OVHcloud Webhosting erstellen, bearbeiten und löschen"
updated: 2024-10-07
---

> [!primary]
>
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die OVHcloud Webhostings bieten Zugriff auf einen FTP-Speicherplatz. Mit diesem FTP-Bereich können Sie zum Beispiel die Dateien Ihrer Websites oder Anwendungen online stellen. Auf diesen können Sie über einen FTP- oder SSH-Benutzer und das zugehörige Passwort zugreifen. Beispielsweise können Sie mehrere FTP-Zugänge für Ihre Mitarbeiter erstellen.

**Diese Anleitung erklärt, wie Sie FTP-Benutzer auf Ihrem OVHcloud Webhosting erstellen, ändern und löschen.**

> [!primary]
>
> Diese Anleitung gilt nur für Webhostings der Reihen **Pro** und **Performance**. Nur bei diesen beiden Angeboten können mehrere FTP-Benutzer aktiviert werden.

## Voraussetzungen

- Sie verfügen über ein kompatibles [OVHcloud Webhosting](/links/web/hosting).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager) im Bereich `Web Cloud`{.action}.

## In der praktischen Anwendung

### Einen neuen FTP-Benutzer auf Ihrem Webhosting erstellen <a name="create-ftp-user"></a>

So erstellen Sie über Ihr OVHcloud Kundencenter einen neuen FTP-Benutzer auf Ihrem Webhosting:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Klicken Sie auf der angezeigten Seite auf den Tab `FTP-SSH`{.action}.
6. Um einen neuen FTP-Benutzer zu erstellen, klicken Sie rechts auf die Schaltfläche `Benutzer erstellen`{.action}. Je nach Bildschirmauflösung befindet sich die Schaltfläche möglicherweise unten auf der Seite.

![FTP-SSH create user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user.png){.thumbnail}

Das folgende Fenster wird angezeigt:

![FTP-SSH create user step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-1.png){.thumbnail}

Geben Sie die Einstellungen für den neuen FTP-Benutzer ein, indem Sie die folgenden Elemente / Formulare bearbeiten:

- *Benutzer*: Der vollständige FTP-Benutzername, den Sie für diesen Account festlegen, um sich mit dem FTP-Speicherplatz Ihres Webhostings zu verbinden. Neu erstellten FTP-Benutzern auf Ihrem Webhosting wird immer der Haupt-FTP-Login Ihres Webhostings vorangestellt, gefolgt von einem Bindestrich.
- Wenn zum Beispiel Ihr Haupt-FTP-Login `FTPLogin` ist und Sie einen neuen FTP-Benutzer `user1` erstellen, lautet der FTP-Login Ihres neuen Benutzers `FTPLogin-user1`.

- *Wurzelverzeichnis*: Der Name des Verzeichnisses oder Unterverzeichnisses, in dem sich der FTP-Benutzer im FTP-Speicherbereich anmelden kann.
- Wenn der FTP-Benutzer zum Beispiel auf den gesamten FTP-Speicherplatz Ihres Webhostings zugreifen muss, lassen Sie dieses Formular leer. Geben Sie andernfalls den Namen des Verzeichnisses an, auf das zugegriffen werden soll (`www`, `blog`, `website1`, `www/development`, etc.).

- *Verbindungsprotokoll*: Hier können Sie das oder die Protokolle festlegen, die der FTP-Benutzer für die Verbindung mit dem FTP-Speicherplatz Ihres Webhostings verwenden kann.
- Wenn Sie beispielsweise die dritte Option auswählen (die Protokolle **FTP**,**SFTP** und **SSH**), kann sich der FTP-Benutzer mit allen drei Protokollen anmelden. So kann sich beispielsweise ein FTP-Benutzer über die Kommandozeile mit dem **SSH** Protokoll verbinden und Inhalte über dasselbe Protokoll verwalten.

Nachdem Sie die Einstellungen festgelegt haben, klicken Sie auf `Weiter`{.action}, um zu Schritt 2 der Erstellung des neuen FTP-Benutzers zu gehen:

![FTP-SSH create user step 2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-2.png){.thumbnail}

In diesem zweiten Schritt müssen Sie nur das Passwort des neuen FTP-Benutzers in beiden Formularen festlegen und bestätigen. Befolgen Sie die Passwortrichtlinie direkt unter den beiden Formularen, um mit Schritt 3 fortzufahren.

Wenn Sie Ihr Passwort ausgewählt und bestätigt haben, klicken Sie auf `Weiter`{.action}, um zu Schritt 3 der Erstellung des neuen FTP-Benutzers zu gehen:

![FTP-SSH create user step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-3.png){.thumbnail}

Im letzten Schritt werden die Einstellungen zusammengefasst, die Sie für Ihren neuen FTP-Benutzer ausgewählt haben. Wenn diese Einstellungen Ihren Wünschen entsprechen, klicken Sie auf `Bestätigen`{.action}, um die Anfrage zur Erstellung eines neuen FTP-Benutzers für Ihr Webhosting abzuschließen.

> [!primary]
>
> Nach der Validierung der Erstellungsanfrage kann es bis zu 15 Minuten dauern, bis der neue Nutzer auf Ihrem Webhosting registriert ist.

Testen Sie bei Bedarf diesen neuen FTP-Benutzer mithilfe unserer Anleitung „[Mit dem FTP-Speicherplatz eines Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)“.

### FTP-Benutzer bearbeiten

So ändern Sie einen FTP-Benutzer:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Klicken Sie auf der angezeigten Seite auf den Tab `FTP-SSH`{.action}.
6. Klicken Sie in der Tabelle unten auf der Seite und rechts in der Zeile für den betreffenden FTP-Benutzer auf die Schaltfläche `...`{.action}, und klicken Sie dann auf `Bearbeiten`{.action}.

![FTP-SSH edit user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/edit-user1.png){.thumbnail}

Das folgende Fenster wird angezeigt:

![FTP-SSH edit user step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-a-user-step1.png){.thumbnail}

Mit Ausnahme des FTP-Benutzernamens und des zugehörigen Kennworts können Sie hier den *Wurzelverzeichnis* und die für den FTP-Benutzer definierten *Verbindungsprotokolle* ändern. Weitere Informationen zum *Wurzelverzeichnis* und den *Verbindungsprotokolle* finden Sie weiter oben in dieser Anleitung unter „[Einen neuen FTP-Benutzer auf Ihrem Webhosting erstellen](#create-ftp-user)“.

Sie können den Benutzer bei Bedarf auch *Benutzer deaktivieren*, indem Sie das entsprechende Kästchen ankreuzen. Diese Option kann nützlich sein, wenn Sie verhindern möchten, dass ein Mitarbeiter auf Ihren FTP-Bereich zugreift, ohne die zugehörigen FTP- und SSH-Logs zu löschen. Anhand dieser Logs können Sie feststellen, welche Operationen Ihr Mitarbeiter durchgeführt hat, wenn Sie unerwünschte Eingriffe auf Ihrem Webhosting feststellen.

Nachdem Sie die Änderungen vorgenommen haben, klicken Sie auf `Weiter`{.action}, um zu Schritt 2 zu gehen. Überprüfen Sie nun Ihre Änderungsanfragen und klicken Sie auf `Bestätigen`{.action}, um die Änderungsanfrage des FTP-Benutzers auf Ihrem Webhosting abzuschließen.

> [!primary]
>
> Wenn Sie nur das Passwort des FTP-Benutzers ändern möchten, lesen Sie unsere Anleitung „[Passwort eines FTP-Benutzers ändern](/pages/web_cloud/web_hosting/ftp_change_password)“.
>
> Wenn Sie den FTP-Benutzernamen ändern möchten, ist es erforderlich, [einen neuen FTP-Benutzer mit dem gewünschten Benutzernamen zu erstellen](#create-ftp-user). Anschließend können Sie bei Bedarf [den alten FTP-Benutzer löschen](#delete-ftp-user).

### FTP-Benutzer löschen <a name="delete-ftp-user"></a>

So löschen Sie einen FTP-Benutzer:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Klicken Sie auf der angezeigten Seite auf den Tab `FTP-SSH`{.action}.
6. Klicken Sie in der Tabelle unten auf der Seite und rechts in der Zeile für den betreffenden FTP-Benutzer auf die Schaltfläche `...`{.action}, und klicken Sie dann auf `Löschen`{.action}.

![FTP-SSH delete user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/delete-user1.png){.thumbnail}

Das folgende Fenster wird angezeigt:

![FTP-SSH delete user confirmation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/delete-user1-confirmation.png){.thumbnail}

Klicken Sie auf `Bestätigen`{.action}, um den FTP-Benutzer dauerhaft von Ihrem Webhosting zu entfernen.

## Weiterführende Informationen

[Mit dem FTP-Speicherplatz eines Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)

[Passwort eines FTP-Benutzers ändern](/pages/web_cloud/web_hosting/ftp_change_password)

[SSH-Zugang Ihres Webhostings verwenden](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Verwendung von PuTTY für Windows](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Tutorial - FileZilla mit Ihrem OVHcloud Hosting nutzen](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Tutorial - Cyberduck mit Ihrem OVHcloud Hosting nutzen](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
