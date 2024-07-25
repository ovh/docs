---
title: "Backup einer gelöschten Datenbank wiederherstellen"
excerpt: "Erfahren Sie hier, wie Sie das Backup einer im OVHcloud Kundencenter gelöschten Datenbank wiederherstellen können"
updated: 2024-07-25
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die meisten unserer [Webhosting](/links/web/hosting) Angebote beinhalten Datenbanken. Wenn Sie versehentlich eine mit Ihrem Webhosting verbundene Datenbank löschen, können Sie versuchen, über unsere API ein Backup dieser Datenbank wiederherzustellen.

**Diese Anleitung erklärt, wie Sie über die OVHcloud API das Backup einer Datenbank abrufen können, wenn diese über Ihr OVHcloud Kundencenter gelöscht wurde.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten. Leider können wir Ihnen zur API-Verwendung keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie verfügen über ein aktives [OVHcloud Webhosting](/links/web/hosting) Angebot mit mindestens einer OVHcloud Shared-Datenbank.
- Die Löschung der Datenbank muss weniger als 30 Tage her sein.

## In der praktischen Anwendung

Die OVHcloud API wird Entwicklern zur Verfügung gestellt, um alle verfügbaren Dienst-Funktionen direkt in ihren Anwendungen anzusteuern.

> [!warning]
>
> Die von OVHcloud angebotenen Backups für Shared Hosting und die dazugehörigen Datenbanken sind unvertraglich. Wir bieten Ihnen diese als Ergänzung zu Ihren Dienstleistungen an, um Ihnen in Notsituationen zu helfen. Wir empfehlen Ihnen, regelmäßig Ihre eigenen Ssicherungen durchzuführen, um Datenverluste zu vermeiden.
>
> Darüber hinaus kann OVHcloud, wenn eine Datenbank von ihrem Benutzer oder Administrator gelöscht wird, aus den oben genannten Gründen keine Garantie für die Wiederherstellung des Backups der Datenbank übernehmen.
>

### Schritt 1 - Rufen Sie den Namen des Webhostings ab, mit dem die gelöschte Datenbank verbunden war

So rufen Sie den Namen Ihres Webhostings ab:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Oben links auf der angezeigten Seite finden Sie den Namen Ihres Webhostings rechts unter `Hosting-Pakete`{.action}.

![API](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-webhosting-name.png){.thumbnail}

### Schritt 2 - Einloggen, um die OVHcloud API zu verwenden und Zugriff auf Ihre Dienste zu erlauben

Gehen Sie wie folgt vor:

- Öffnen Sie die korrekte Webseite für Ihre [OVHcloud API](/links/api) (`https://eu.api.ovh.com` wenn Ihre Dienste in Europa gehostet werden oder `https://ca.api.ovh.com`, wenn sie außerhalb Europas gehostet werden).
- Klicken Sie auf `Explore the OVHcloud API`{.action}.
- Gehen Sie auf der neuen Seite rechts neben `v1`{.action} auf das Auswahlfeld und wählen Sie `/hosting/web` aus.
- Klicken Sie in der Liste links auf diesen Endpunkt: **GET /hosting/web/{serviceName}/dump**. Sie können auch direkt den Pfad über folgenden Link öffnen:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump
>

- Auf der rechten Seite werden dann alle Parameter des API-Pfads angezeigt.
- Klicken Sie oben rechts auf `Authenticate`{.action} und dann auf `Login with OVHcloud SSO`{.action}.
- Das Login-Interface für Ihr [OVHcloud Kundencenter](/links/manager) wird geöffnet.
- Loggen Sie sich mit Ihrer Kundenkennung ein und klicken Sie auf `Authorize`{.action}, um der OVHcloud API Zugriff auf Ihre Dienste zu erlauben.
- Sie werden dann automatisch wieder auf die vorherige Seite geleitet: **GET /hosting/web/{serviceName}/dump**.

### Schritt 3 - Verfügbarkeit der Backups überprüfen und die ID des letzten Backups abrufen

Füllen Sie hierzu die verschiedenen Felder wie folgt aus:

- Für den Abschnitt `PATH PARAMETERS`:
    - `serviceName`: Geben Sie den Namen Ihres Webhostings ein, den Sie in Schritt 1 dieser Anleitung erhalten haben.

- Für den Abschnitt `QUERY-STRING PARAMETERS`:
    - `creationDate.from`: Lassen Sie das Feld leer.
    - `creationDate.to`: Lassen Sie das Feld leer.
    - `databaseName`: Geben Sie den Namen der Datenbank ein, die versehentlich gelöscht wurde (Beispiel: **deletedDatabase.mysql.db**).
    - `deletionDate.from`: Lassen Sie das Feld leer.
    - `deletionDate.to`: Lassen Sie das Feld leer.
    - `Orphan`: Geben Sie den Wert `true` ein.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump.png){.thumbnail}

Wenn Sie die Felder ausgefüllt haben, klicken Sie unten rechts auf die blaue Schaltfläche `TRY`{.action}.

Wenn alles korrekt angegeben wurde und Backups für die gelöschte Datenbank verfügbar sind, erscheint eine Liste der Backup-IDs im Fenster `RESPONSE`{.action} unter der Schaltfläche `TRY`{.action}.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-response.png){.thumbnail}

Jede dieser Nummern entspricht einer verfügbaren Backup-ID. Diese Backup-IDs erscheinen von der neuesten zur ältesten. **Kopieren Sie die oberste ID aus der Liste** (ohne `,` am Ende), wenn Sie (in Schritt 4 dieser Anleitung) das jüngste Backup Ihrer gelöschten Datenbank wiederherstellen möchten.

Wenn im Fenster keine ID angezeigt wird, überprüfen Sie, ob Sie mit der richtigen OVHcloud Kundenkennung eingeloggt sind (wenn Sie mehrere haben). Überprüfen Sie außerdem die Informationen in den Abschnitten **PATH PARAMETERS** und **QUERY-STRING PARAMETERS**. Wiederholen Sie dann den Vorgang.

Wenn Sie trotzdem noch keine ID sehen, sind keine Backups für die gelöschte Datenbank auf unserer Infrastruktur verfügbar.

### Schritt 4 - Letzte Sicherung wiederherstellen

Anhand der in Schritt 3 ermittelten Backup-ID können Sie über einen von der API generierten Link das letzte Backup Ihrer Datenbank herunterladen, das gelöscht wurde.

Führen Sie dazu auf [OVHcloud API](/links/api) folgende Aktionen aus:

- Gehen Sie auf der neuen Seite rechts neben `v1`{.action} auf das Auswahlfeld und wählen Sie `/hosting/web` aus.
- Klicken Sie in der Liste links auf diesen Endpunkt: **GET /hosting/web/{serviceName}/dump/{id}**. Sie können auch direkt den Pfad über folgenden Link öffnen:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump/{id}
>

- Auf der rechten Seite werden dann alle Parameter des API-Pfads angezeigt.

Füllen Sie die Felder im Teil `PATH PARAMETERS` wie folgt aus:

- `id`: Kopieren Sie die Backup-ID aus Schritt 3. Wenn Sie nicht zwischenzeitlich von der OVHcloud API-Seite ausgeloggt wurden, kann das Interface Ihnen direkt die verfügbaren Backup-IDs anzeigen. Ist das der Fall, können Sie auf die erste ID-Nummer in der Liste unter dem Feld **id** klicken.
- `serviceName`: Geben Sie den Namen Ihres Webhostings ein, den Sie in Schritt 1 dieser Anleitung erhalten haben.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id.png){.thumbnail}

Wenn Sie die Felder ausgefüllt haben, klicken Sie unten rechts auf die blaue Schaltfläche `TRY`{.action}.

Wenn alles korrekt angegeben wurde, erscheint das folgende Ergebnis im Fenster `RESPONSE`{.action} unterhalb der Schaltfläche `TRY`{.action}:

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id-response.png){.thumbnail}

```bash
{
  "taskId": null,
  "orphan": true,
  "status": "created",
  "deletionDate": "2024-07-18T20:02:00+02:00",
  "databaseName": "deleteDatabase.mysql.db",
  "url": "Find here the complete URL to download the deleted database backup",
  "type": "now",
  "creationDate": "2024-06-17T22:17:42+02:00",
  "id": 22XXXXX888
}
```

> [!warning]
>
> Die Zeilen im obigen Ergebnisbeispiel werden nicht immer in dieser Reihenfolge angezeigt.
>

Kopieren Sie in Ihrer Ergebnisausgabe die gesamte URL in HTTPS **ohne Anführungszeichen** aus der Zeile `"url":` und fügen Sie diese in die Adresszeile Ihres Browsers ein, um den Download des Backups zu starten.

### Schritt 5 - Neue Datenbank erstellen, Backup-Datei importieren und Verbindung zwischen Ihrer Website und der neuen Datenbank wiederherstellen

Nachdem Sie das Backup Ihrer Datenbank wiederhergestellt haben, müssen Sie eine neue Datenbank erstellen. Weitere Informationen finden Sie in unserer Anleitung „[Datenbank auf Ihrem Webhosting erstellen](/pages/web_cloud/web_hosting/sql_create_database)“.

Importieren Sie nach der Erstellung dieser neuen Datenbank das Backup mithilfe unserer Anleitung „[Backup in eine Webhosting-Datenbank importieren](/pages/web_cloud/web_hosting/sql_importing_mysql_database)“.

Verbinden Sie zum Schluss Ihre OVHcloud-Datenbank mit der Konfigurationsdatei Ihrer Website im [FTP-Speicherplatz Ihres OVHcloud Hostings](/pages/web_cloud/web_hosting/ftp_connection).
Ersetzen Sie hierzu die Login-Daten der versehentlich gelöschten Datenbank durch die Login-Daten Ihrer neuen OVHcloud Datenbank. Diese Informationen finden Sie in der Datei „Konfiguration/Verbindung mit Ihrer Datenbank“ Ihrer Website.

> [!success]
>
> Um Ihre neue Datenbank zu verknüpfen, wenn Sie ein Content Management System (CMS) wie WordPress, Joomla!, Drupal oder PrestaShop verwenden, finden Sie die Informationen zu ihren Konfigurationsdateien in **Schritt 2** der Anleitung „[Datenbankpasswort ändern](/pages/web_cloud/web_hosting/sql_change_password)“.
>

## Weiterführende Informationen <a name="go-further"></a>

[Eine Datenbank auf Ihrem Webhosting erstellen](/pages/web_cloud/web_hosting/sql_create_database).

[Backup in eine Webhosting-Datenbank importieren](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Datenbankkennwort ändern](/pages/web_cloud/web_hosting/sql_change_password).
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
