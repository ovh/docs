---
title: "Backup einer gelöschten Datenbank wiederherstellen"
excerpt: "Diese Anleitung erklärt, wie Sie das Backup einer Datenbank, wenn diese über Ihr OVHcloud Kundencenter gelöscht wurde"
updated: 2024-07-23
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die meisten unserer [Webhosting](/links/web/hosting) Angebote beinhalten Datenbanken. Wenn Sie versehentlich eine mit Ihrem Webhosting verbundene Datenbank löschen, können Sie versuchen, über unsere API ein Backup dieser Datenbank wiederherzustellen.

**Diese Anleitung erklärt, wie Sie über die OVHcloud API das Backup einer Datenbank, wenn diese über Ihr OVHcloud Kundencenter gelöscht wurde.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration, Verwaltung und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit in Ihrer Verantwortung, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei gängigen Aufgaben bestmöglich zu begleiten. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren. Für APIs können wir Ihnen leider keine weitergehende Unterstützung anbieten. Weitere Informationen finden Sie im Abschnitt [„Weiterführende Informationen“](#go-further) dieser Anleitung.
>

## Voraussetzungen

- Sie verfügen über ein aktives [OVHcloud Webhosting](/links/web/hosting) Angebot, das eine oder mehrere verbundene(n) OVHcloud Shared-Datenbank(n) umfasst.
- Die Löschung der Datenbank muss weniger als 30 Tage alt sein.

## In der praktischen Anwendung

Die OVHcloud APIs werden Entwicklern oder Integratoren zur Verfügung gestellt, um beispielsweise Funktionen, die im OVHcloud Kundencenter vorhanden sind oder nicht, direkt in ihren Anwendungen oder Lösungen zu kombinieren.

> [!warning]
>
> Die von OVHcloud angebotenen Backups für Shared Hosting und die dazugehörigen Datenbanken sind unvertraglich. Wir bieten Ihnen diese als Ergänzung zu Ihren Dienstleistungen an, um Ihnen in Notsituationen zu helfen. Wir empfehlen Ihnen, regelmäßig Ihre eigenen Sicherheitssicherungen durchzuführen, um eventuelle Datenverluste zu vermeiden.
>
> Darüber hinaus kann OVHcloud, wenn eine Datenbank von ihrem Benutzer oder Administrator gelöscht wird, aus den oben genannten Gründen keine Garantie für die Wiederherstellung des Backups der Datenbank übernehmen.
>

### Schritt 1 - Rufen Sie den Namen des Webhostings ab, mit dem die gelöschte Datenbank verbunden war

So rufen Sie den Namen Ihres Webhostings ab:

1. Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager).
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Oben links auf der angezeigten Seite finden Sie den Namen Ihres Webhostings rechts unter `Hosting-Pakete /`{.action}.

![API](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-webhosting-name.png){.thumbnail}

### Schritt 2 - Verbindung zu den OVHcloud APIs herstellen und ihnen den Zugriff auf Ihre Dienste erlauben

Gehen Sie hierzu wie folgt vor:

- Besuchen Sie unsere Website [OVHcloud API](/links/api) (überprüfen Sie, ob Sie sich auf `https://eu.api.ovh.com` befinden, wenn Ihre Dienste in Europa gehostet werden, und auf `https://ca.api.ovh.com`, wenn sie außerhalb Europas gehostet werden).
- Klicken Sie auf der angezeigten Seite in der Mitte auf `Explore the OVHcloud API`{.action}.
- Gehen Sie auf der neu angezeigten Seite und links auf der Seite auf das Formular rechts neben dem Formular `v1`{.action} und wählen Sie die Option `/hosting/web` aus.
- Suchen Sie in der Liste der APIs in der linken Spalte nach der folgenden API, und klicken Sie auf diese: **GET /hosting/web/{serviceName}/dump**. Sie können auch direkt auf die API klicken, um darauf zuzugreifen:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump
>

- Auf der rechten Seite wird dann die API mit den verschiedenen auszufüllenden Formularen angezeigt.
- Klicken Sie oben rechts auf `Authenticate`{.action} und dann auf `Login with OVHcloud SSO`{.action}.
- Das Login-Interface für Ihr [OVHcloud Kundencenter](/links/manager) wird geöffnet.
- Loggen Sie sich mit Ihrer Kundenkennung ein und klicken Sie auf `Authorize`{.action}, um die OVHcloud APIs mit den Diensten in Ihrem Kundencenter zu verwenden.
- Sie werden dann automatisch auf die vorherige Seite der API weitergeleitet **GET /hosting/web/{serviceName}/dump**, während Sie in Ihrem OVHcloud Kundencenter eingeloggt sind.

### Schritt 3 - Verfügbarkeit der Backups überprüfen und die ID des letzten Backups abrufen

Füllen Sie hierzu die verschiedenen Formulare wie folgt aus:

- Für den Abschnitt `PATH PARAMETERS`:
- `serviceName`: Geben Sie den Namen Ihres Webhostings ein, den Sie zuvor in Schritt 1 dieser Anleitung erhalten haben.

- Für den Abschnitt `QUERY-STRING PARAMETERS`:
- `creationDate.from`: Lassen Sie das Formular leer.
- `creationDate.to`: Lassen Sie das Formular leer.
- `databaseName`: Geben Sie den Namen der Datenbank ein, die versehentlich gelöscht wurde. (Beispiel: **deletedDatabase.mysql.db**).
- `deletionDate.from`: Lassen Sie das Formular leer.
- `deletionDate.to`: Lassen Sie das Formular leer.
- `Orphan`: Geben Sie den Wert: `true` in Kleinbuchstaben ein.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump.png){.thumbnail}

Wenn Sie die Formulare ausgefüllt haben, klicken Sie unten rechts in den beiden zuvor ausgefüllten Abschnitten auf die blaue Schaltfläche `Try`{.action}.

Wenn alles korrekt angegeben wurde und Backups für die gelöschte Datenbank verfügbar sind, erscheint eine Liste der Backup-IDs im Fenster `RESPONSE`{.action}, wenn Sie auf die Seite unter der Schaltfläche `Try`{.action} gehen.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-response.png){.thumbnail}

Jede dieser Nummern entspricht einer verfügbaren Backup-ID (ID). Diese Backup-IDs erscheinen von der neuesten zur ältesten. **Kopieren Sie die höchste ID aus der Liste** (ohne die `,` am Ende), wenn Sie (in Schritt 4 dieser Anleitung) das neueste Backup Ihrer gelöschten Datenbank wiederherstellen möchten.

Wenn im Fenster keine ID angezeigt wird, überprüfen Sie, ob Sie mit der richtigen OVHcloud Kundenkennung eingeloggt sind (wenn Sie mehrere haben). Überprüfen Sie außerdem die Informationen, die Sie in die Abschnitte **PATH PARAMETERS** und **QUERY-STRING PARAMETERS** eingeben. Wiederholen Sie dann den Vorgang.

Wenn Sie trotzdem noch keine ID sehen, dann sind keine oder mehrere Backups für die gelöschte Datenbank auf unserer Infrastruktur verfügbar.

### Schritt 4 - Letzte Sicherung wiederherstellen

Anhand der in Schritt 3 ermittelten Backup-ID können Sie über einen von der API generierten Link das letzte Backup Ihrer Datenbank herunterladen, das gelöscht wurde.

Bleiben Sie hierzu auf unserer Website [OVHcloud API](/links/api) und führen Sie folgende Aktionen aus:

- Gehen Sie auf der linken Seite auf das Formular rechts neben dem Formular `v1`{.action} und wählen Sie die Option `/hosting/web`{.action} aus.
- Suchen Sie in der Liste der APIs in der linken Spalte nach der folgenden API, und klicken Sie auf diese: **GET /hosting/web/{serviceName}/dump/{id}**. Sie können auch direkt auf die API klicken, um darauf zuzugreifen:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump/{id}
>

- Auf der rechten Seite wird dann die API mit den verschiedenen auszufüllenden Formularen angezeigt.

Füllen Sie die verschiedenen Formulare im Teil `PATH PARAMETERS` aus:

- `id`: Kopieren Sie die Backup-ID aus Schritt 3. Wenn Sie nicht von unserer OVHcloud API-Seite abgemeldet sind, kann das Interface Ihnen direkt die verschiedenen verfügbaren Backup-IDs anzeigen. Ist das der Fall, können Sie direkt auf die erste ID-Nummer in der Liste direkt unter dem Formular **id** klicken.
- `serviceName`: Geben Sie den Namen Ihres Webhostings ein, den Sie zuvor in Schritt 1 dieser Anleitung erhalten haben.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id.png){.thumbnail}

Wenn Sie alle Formulare ausgefüllt haben, klicken Sie unten rechts im zuvor ausgefüllten Abschnitt auf die blaue Schaltfläche `Try`{.action}.

Wenn alles korrekt angegeben wurde, erscheint das folgende Ergebnis im Fenster `RESPONSE`{.action}, wenn Sie nach unten auf die Seite unterhalb der Schaltfläche `Try`{.action} gehen:

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
> Die Zeilen im obigen Ergebnis werden nicht immer in dieser Reihenfolge angezeigt.
>

Kopieren Sie in diesem Ergebnis die gesamte URL in „HTTPS“ **ohne Anführungszeichen** rechts neben dem Begriff `"url":` und fügen Sie sie in die Suchleiste Ihres Internetbrowsers ein, um den Download des Backups zu starten.

### Schritt 5 - Neue Datenbank erstellen, Backup-Datei importieren und Verbindung zwischen Ihrer Website und der neuen Datenbank wiederherstellen

Nachdem Sie das Backup Ihrer Datenbank wiederhergestellt haben, müssen Sie eine neue Datenbank erstellen. Weitere Informationen finden Sie in unserer Anleitung „[Datenbank auf Ihrem Webhosting erstellen](/pages/web_cloud/web_hosting/sql_create_database)“.

Importieren Sie nach der Erstellung dieser neuen Datenbank das Backup mithilfe unserer Anleitung „[Backup in eine Webhosting-Datenbank importieren](/pages/web_cloud/web_hosting/sql_importing_mysql_database)“.

Verbinden Sie zum Schluss Ihre OVHcloud-Datenbank mit der Konfigurationsdatei Ihrer Website im [FTP-Speicherplatz Ihres OVHcloud Hostings](/pages/web_cloud/web_hosting/ftp_connection).
Ersetzen Sie hierzu die Login-Daten der versehentlich gelöschten Datenbank durch die Login-Daten Ihrer neuen OVHcloud Datenbank. Diese Informationen finden Sie in der Datei „Konfiguration/Verbindung mit Ihrer Datenbank“ auf Ihrer Website.

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