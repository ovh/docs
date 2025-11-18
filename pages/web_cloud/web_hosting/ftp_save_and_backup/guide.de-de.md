---
title: "Den Speicherplatz Ihres Webhostings wiederherstellen"
excerpt: "Erfahren Sie hier, wie Sie eine Datei oder den gesamten Speicherplatz Ihres Webhostings wiederherstellen"
updated: 2025-10-20
---

## Ziel 

Über Ihr OVHcloud Webhosting haben Sie Zugriff auf einen Speicherplatz, auf dem Sie Ihre Websites hosten können. Aus verschiedenen Gründen kann es vorkommen, dass die gesamten Daten Ihres Speicherplatzes oder auch nur eine darin gespeicherte Datei wiederhergestellt werden müssen. Das ist beispielsweise der Fall, wenn eine Datei gelöscht oder bearbeitet wurde und die Website nicht mehr erreichbar ist.

> [!primary]
> 
> Die von OVHcloud angebotenen Backups für Shared Hosting sind nicht vertraglich festgelegt. Wir bieten Ihnen diese zusätzlich zu Ihren Dienstleistungen an, um Ihnen in Notsituationen zu helfen. Wir empfehlen Ihnen, regelmäßig Ihre eigenen Sicherheitsbackups durchzuführen, um mögliche Datenverluste zu vermeiden.
> 
> Wenn Sie ein Sicherheitsbackup für Ihre Website erstellen und eine Datenbank verwenden, erstellen Sie auch ein Backup Ihrer Datenbank. Lesen Sie dazu unsere Anleitung, "[Backup einer Webhosting-Datenbank exportieren](/pages/web_cloud/web_hosting/sql_database_export)".
> 

**Diese Anleitung erklärt, wie Sie eine Datei oder den gesamten Speicherplatz Ihres Webhostings wiederherstellen.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovh.com/de/hosting/) Angebot (mit Ausnahme von [Cloud Web](/links/web/hosting-cloud-web-offer)).
- Je nach der verwendeten Methode benötigen Sie Zugriff auf die Verwaltung des Webhostings über das [OVHcloud Kundencenter](/links/manager) oder das Passwort des FTP-Benutzers, um sich mit Ihrem Speicherplatz zu verbinden. 

## In der praktischen Anwendung

Vergewissern Sie sich zunächst, dass ein Backup für den Zeitpunkt zur Verfügung steht, zu dem Sie den Speicherplatz Ihres Webhostings wiederherstellen möchten:

- Vom selben Tag um 00:01 Uhr
- Vom Tag davor um 00:01 Uhr
- Zwei Tage zuvor um 00:01 Uhr
- Vom letzten Sonntag um 01:00 Uhr 
- Vom Sonntag zwei Wochen zuvor um 01:00 Uhr

Ein früheres Backup kann OVHcloud Ihnen leider nicht zur Verfügung stellen. Wir empfehlen, regelmäßig selbst Backups Ihrer Website zu erstellen, wenn Sie ältere Backups verwenden möchten. 

Entscheiden Sie sich für eine Wiederherstellungsmethode, die Sie verwenden möchten:

|Wiederherstellungsmethode|Beschreibung|
|---|---|
|Wiederherstellung über das Kundencenter|Mit dieser Methode stellen Sie den gesamten Speicherplatz wieder her. Der aktuelle Inhalt wird dabei komplett mit dem Inhalt des ausgewählten Backups ersetzt.|
|Wiederherstellung mithilfe einer Software oder über ein Interface|Bei dieser Methode erhalten Sie Leserechte für ein Backup des Speicherplatzes. Diese Methode ist zwar technisch aufwendiger, dafür können Sie jedoch eine oder mehrere Dateien zu einem früheren Zeitpunkt zurücksetzen und müssen nicht den gesamten Inhalt Ihres Speicherplatzes überschreiben.|

> [!warning]
>
> Bezüglich der Methode der **Wiederherstellung über das OVHcloud Kundencenter** überprüfen Sie, dass mindestens **die Hälfte des FTP-Speicherplatzes**, der bei Ihrem Webhosting-Angebot inbegriffen ist, noch frei ist.
> Wenn Sie zum Beispiel über ein Webhosting **Performance** verfügen, müssen noch 250 GB der insgesamt 500 GB verfügbar sein.
>
> Unsere Roboter installieren das Backup auf Ihrem Hosting, bevor der FTP Inhalt gelöscht und von der Wiederherstellung überschrieben wird.

Um die auf Ihrem Webhosting verwendete Quota zu überprüfen, klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
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
>> Im Feld **Allgemeine Informationen** finden Sie Speicherplatzauslastung unter **Speicherplatz**.
>>
>> ![disk_space](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-disk-space.png){.thumbnail}
>>
>> Wenn mehr als die Hälfte des hier angezeigten FTP-Speicherplatzes Ihres Webhostings belegt ist, können Sie zum Beispiel große Dateien Ihrer Website auswählen und lokal sichern. (Sie können dazu [Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) verwenden).
>>
>> Löschen Sie diese anschließend aus Ihrem FTP-Speicherplatz. Dadurch verringert sich die Größe des genutzten FTP-Speicherplatzes und Sie können die Wiederherstellung über das OVHcloud-Kundencenter starten.

Folgen Sie dieser Anleitung nun entsprechend der ausgewählten Wiederherstellungsmethode:

- [Speicherplatz über das Kundencenter wiederherstellen](#viacontrolpanel)
- [Datei mithilfe einer Software oder über ein Interface wiederherstellen](#viainterface)

### Speicherplatz über das Kundencenter wiederherstellen <a name="viacontrolpanel"></a>

> [!warning]
>
> Diese Wiederherstellungsmethode ist nicht verfügbar, wenn Ihr Hosting von unseren Administratoren in den Wartungsmodus versetzt wurde oder aufgrund einer Aktion Ihrerseits nicht über FTP-Zugriffsrechte (`CHMOD` Rechte) verfügt.
>
> Die `CHMOD` Rechte im Wurzelverzeichnis Ihres Hostings müssen auf `705` gesetzt sein, damit diese Methode funktioniert.
>

> [!primary]
> **Seite im Wartungsmodus**
> 
> Wenn Sie feststellen, dass Ihre Website in den Wartungsmodus versetzt wurde, befolgen Sie unsere Anleitung [Was tun bei dem Fehler “403 forbidden”?](/pages/web_cloud/web_hosting/diagnostic_403_forbidden). 
> 
> Konkret bedeutet das Folgendes:
>
> - Unsere Teams senden eine E-Mail über den Status an den [Administrator-Kontakt](/pages/account_and_service_management/account_information/managing_contacts#auf-die-kontaktverwaltung-zugreifen) des Webhostings. 
> - Der Status "Wartung" wird in Ihrem [OVHcloud Kundencenter](/links/manager) angezeigt. Klicken Sie im Bereich `Web Cloud`{.action} auf Ihren Dienst unter `Hosting-Pakete`{.action} und dann auf den Tab `Allgemeine Informationen`{.action}.
> - Die gehosteten Webseiten zeigen eine "403 Forbidden"-Meldung an.

Klicken Sie auf die Tabs, um die **6** Schritte anzuzeigen:

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
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Klicken Sie auf der neu angezeigten Seite auf die Schaltfläche `Backup wiederherstellen`{.action}.
>>
>> ![FTP-Backup](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/restore-backup.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Wählen Sie im angezeigten Fenster über das Dropdown-Menü mithilfe folgender Informationen das gewünschte Backup-Datum aus:
>>
>> |Angezeigtes Datum|Backup-Datum|
>> |---|---|
>> |T-1|Vom selben Tag um 00:01 Uhr|
>> |T-2|Vom Tag davor um 00:01 Uhr|
>> |T-3|Zwei Tage zuvor um 00:01 Uhr|
>> |1 Woche|Vom letzten Sonntag um 01:00 Uhr |
>> |2 Wochen|Vom Sonntag zwei Wochen zuvor um 01:00 Uhr|
>>
>> Klicken Sie nach der Auswahl auf den Button `Weiter`{.action}. 
>>
> **Schritt 6**
>>
>> ![FTP-Backup](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/restore-backup-step-1.png){.thumbnail}
>>
>> Vergewissern Sie sich, dass bei der Wiederherstellung keine Datei verloren geht. Das könnte beispielsweise mit einer Datei passieren, die nach dem ausgewählten Datum in Ihren Speicherplatz hochgeladen wurde. Beachten Sie, dass bei der Wiederherstellung die aktuellen Daten vollständig mit den Backup-Daten überschrieben werden.
>>
>> Klicken Sie auf den Button `Bestätigen`{.action}, um die Wiederherstellung zu starten.

> [!primary]
>
> Die automatische Wiederherstellung kann einige Minuten bis einige Stunden in Anspruch nehmen. Wenn der Vorgang **über 24 Stunden** dauert, kontaktieren Sie den [OVHcloud Support](/links/support).
>

### Datei mithilfe einer Software oder über ein Interface wiederherstellen

Für diese Methode sind mehrere Schritte notwendig. Vergewissern Sie sich, dass Sie über das Passwort des FTP-Benutzers verfügen, um auf Ihren Speicherplatz zuzugreifen. 

> [!warning]
>
> Hierfür sind Kenntnisse über die verwendete Software bzw. das Interface erforderlich. Im Folgenden haben wir einige Informationen zur Vorgehensweise zusammengetragen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) und/oder den Herausgeber der Software bzw. des Interface zu kontaktieren. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten.
>

#### Schritt 1: Software oder Interface auswählen <a name="viainterface"></a>

Entscheiden Sie sich zunächst, welche Software oder welches Interface Sie verwenden möchten, um auf den Backup-Speicher zuzugreifen. Wenn Sie sich bereits entschieden haben, können Sie direkt zu Schritt 2 übergehen. Andernfalls empfehlen wir Ihnen eine der folgenden beiden Lösungen:

- **FileZilla**: Laden Sie FileZilla zunächst über die Website des Herausgebers herunter. OVHcloud stellt Ihnen für die [Verwendung von FileZilla eine Anleitung zur Verfügung](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide). Diese Anleitung ersetzt jedoch nicht die offizielle Dokumentation des Herausgebers.

- **Cyberduck**: Laden Sie Cyberduck zunächst über die Website des Herausgebers herunter. OVHcloud stellt Ihnen für die [Verwendung von Cyberduck eine Anleitung zur Verfügung](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac) (Englisch). Diese Anleitung ersetzt jedoch nicht die offizielle Dokumentation des Herausgebers.

Gehen Sie zum nächsten Schritt über, um mit der Wiederherstellung fortzufahren.

#### Schritt 2: Auf das Backup zugreifen

Mithilfe der ausgewählten Software bzw. über das Interface können Sie sich nun auf Ihrem Speicherplatz einloggen, um auf die gewünschten Backup-Daten zuzugreifen. Sie benötigen hierfür den FTP-Benutzernamen, das zugehörige Passwort sowie den Hostnamen Ihres FTP-Servers.

Diese Login-Informationen finden Sie über den Tab `FTP - SSH`{.action} Ihres Webhostings.

![FTP- SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}

Wenn Sie kein FTP-Passwort besitzen, lesen Sie die Anleitung [„Passwort eines FTP-Benutzers ändern“](/pages/web_cloud/web_hosting/ftp_change_password).

![FTP-Backup](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/login-infos.png){.thumbnail}

Ergänzen Sie Ihren Haupt-FTP-Benutzernamen (bzw. „FTP-Login“) mit einem Suffix, das sich auf das betreffende Backup bezieht. Verwenden Sie die folgenden Tabelle, um das korrekte Backup auszuwählen:

|Backup-Datum|Hinzuzufügendes Suffix|Beispiel für einen ergänzten FTP-Benutzernamen|
|---|---|---|
|Vom selben Tag um 00:01 Uhr|-snap0|ftpbenutzer**-snap0**|
|Vom Tag davor um 00:01 Uhr|-snap1|ftpbenutzer**-snap1**|
|Zwei Tage zuvor um 00:01 Uhr|-snap2|ftpbenutzer**-snap2**|
|Vom letzten Sonntag um 01:00 Uhr|-snap3|ftpbenutzer**-snap3**|
|Vom Sonntag zwei Wochen zuvor um 01:00 Uhr|-snap4|ftpbenutzer**-snap4**|

Denken Sie daran, „ftpbenutzer“ mit Ihrem eigenen FTP-Benutzernamen zu ersetzen. Notieren Sie sich das Suffix für das Backup, auf das Sie zugreifen möchten.

Wie Sie sich in Ihren Speicherplatz einloggen, hängt von der verwendeten Software bzw. dem Interface ab.

#### Schritt 3: Eine oder mehrere Backup-Dateien wiederherstellen

Wählen Sie nach dem Login die Dateien aus, die Sie wiederherstellen möchten. Gehen Sie hierfür den Inhalt Ihres Speicherplatzes durch, bis Sie die gewünschten Dateien finden, und laden Sie diese herunter. Die Vorgehensweise richtet sich nach der verwendeten Software oder dem Interface.

Vergewissern Sie sich, bevor Sie zum nächsten Schritt übergehen, dass Sie alle Dateien für die Wiederherstellung heruntergeladen haben, und loggen Sie sich dann aus Ihrem Speicherplatz aus.

> [!success]
>
> Wenn Sie eine Software verwenden, um sich mit Ihrem FTP-Speicherplatz zu verbinden, empfehlen wir, die offizielle Dokumentation Ihrer Software zu konsultieren, um die notwendigen Änderungen vorzunehmen.
>

#### Schritt 4: Die gewünschten Dateien wiederherstellen

Wenn Sie alle Dateien heruntergeladen haben, loggen Sie sich erneut auf Ihrem Speicherplatz ein. Verwenden Sie für diesen Login allerdings den FTP-Benutzernamen ohne die zusätzliche Endung. Indem Sie das Suffix nicht verwenden, loggen Sie sich in die aktuelle Version Ihres Speicherplatzes ein und nicht in eine ältere Backup-Version.

Nach dem Login können Sie die gewünschten Dateien wiederherstellen. Gehen Sie hierfür den Inhalt Ihres Speicherplatzes durch bis Sie die entsprechenden Dateien finden, und ersetzen Sie diese mit den zuvor heruntergeladenen Dateien.

> [!success]
>
> Wenn Sie eine Software verwenden, um sich mit Ihrem FTP-Speicherplatz zu verbinden, empfehlen wir, die offizielle Dokumentation Ihrer Software zu konsultieren, um die notwendigen Änderungen vorzunehmen.
>

## Weiterführende Informationen

[Backup einer Webhosting-Datenbank exportieren](/pages/web_cloud/web_hosting/sql_database_export)

[Verwendung von FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Using Cyberduck (on Mac)](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac) (Englisch)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
