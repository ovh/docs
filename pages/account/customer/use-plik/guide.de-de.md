---
title: 'Plik nutzen, um Dateien zu teilen'
excerpt: Erfahren Sie hier, wie Sie mit dem Plik Tool Dateien an andere Personen senden
slug: plik
section: Tools
updated: 2022-02-14
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 14.02.2022**

## Ziel

Das Online-Tool [Plik](https://plik.ovhcloud.com) erlaubt es, Dateien mit anderen Personen zu teilen und bietet Optionen zur Absicherung des Zugriffs auf diese Dateien.

**Diese Anleitung erklärt, wie Sie das Online-Tool Plik verwenden, um Dateien zu teilen.**

## Voraussetzungen

- Sie verfügen über einen [OVHcloud Kunden-Account](https://docs.ovh.com/de/customer/ovhcloud-account-erstellen/).

## In der praktischen Anwendung

### API Verbindung

Öffnen Sie die Seite <https://plik.ovhcloud.com>.

Um Dateien hochzuladen, müssen Sie authentifiziert sein. Klicken Sie auf `Login with OVH`{.action}.

![login](images/plik-login-EU.png)

Loggen Sie sich in Ihren OVHcloud Account ein, um der OVHcloud API Zugriff auf das Plik Tool zu erlauben.<br>
Geben Sie Ihre Login-Daten ein und klicken Sie auf den Button `Log in`{.action}, um fortzufahren.

![API](images/api-login-EU.png)

> [!primary]
>
> Wenn Sie die [Zwei-Faktor-Authentifizierung](https://docs.ovh.com/de/customer/Account-mit-2FA-absichern/) für Ihren Account aktiviert haben, geben Sie den Code ein, den die Authentifizierungsmethode ausgibt. 

### Dateien hochladen

Wenn Sie eingeloggt sind, klicken Sie oben links auf `Plik`{.action}, um auf das Menü zum Hinzufügen von Dateien zuzugreifen.

Klicken Sie auf `Add Files`{.action} und wählen Sie die Datei aus, die Sie hinzufügen möchten, oder verwenden Sie "Drag and Drop" aus Ihrem Dateimanager.

> [!primary]
>
> Die Dateigröße ist auf 10 GB begrenzt.
>

![Add Files - Optionen](images/plik-add-files-options.png)

Für die Konfiguration Ihrer Auszahlungen stehen mehrere Optionen zur Verfügung:

- `Destruct after the first download` - Nach dem ersten Download wird die Datei gelöscht.
- `Streaming` - Die Datei wird nicht auf dem Server gespeichert. Stattdessen beginnt die Dateiübertragung, wenn der Remote-Benutzer mit dem Download beginnt.
- `Removable` - Erlaubt es den Endbenutzern, die Datei zu löschen.
- `Password` - Schützen Sie Ihre Uploads, indem Sie eine Kennung und ein Passwort festlegen, die der Remote-Benutzer eingeben muss.
- `Comments` - Fügen Sie Ihrem Download Kommentare hinzu. *Markdown* wird unterstützt.
- `Files will be automatically removed in` - Wählen Sie die Anzahl an Tagen (maximal 30), Stunden oder Minuten aus, nach deren Ablauf Ihre Dateien automatisch gelöscht werden sollen.

> [!primary]
>
> Wenn Sie Ihre Übertragung mit einem Passwort schützen, ist der Standardbenutzername "plik".
>

Nachdem Sie Ihre Dateien hinzugefügt und die gewünschten Optionen ausgewählt haben, klicken Sie auf der linken Seite auf den grünen `Upload`{.action} button. Es öffnet sich die Übersichtsseite mit Ihren hochgeladenen Dateien.

![upload File](images/plik-upload-EU.png)

Die Download-Optionen sind dann verfügbar.

### Dateien herunterladen

Auf der Download-Seite haben Sie weitere Optionen:

- `Zip Archive` - Fügt alle hochgeladenen Dateien einem komprimierten Ordner hinzu.
- `Add Files` - Sie können damit weitere Dateien hinzufügen.
- `Delete` - Löschung aller bereits hochgeladenen Dateien.

Sie können auch Dateien einzeln löschen, indem Sie rechts neben der Datei auf den `X`{.action}-Button klicken.

![download file](images/plik-download-EU.png)

Damit andere Personen Ihre Dateien herunterladen können, geben Sie den Link weiter, der unter dem Namen der Datei angezeigt wird.<br>
Sie können auch den Link zu allen Dateien der Session weitergeben, indem Sie die URL in der Adresszeile Ihres Browsers kopieren.<br>
Sie können auch den links angezeitgen QR-Code weitergeben. Wenn Sie mehrere Dateien hochgeladen haben, zeigt der QR-Code jede Datei an.

### Account-Optionen

Klicken Sie auf Ihre Kundenkennung oben rechts, um auf die Account-Optionen zuzugreifen.

![download file](images/account-options.png)

Über dieses Menü können Sie sich ausloggen, Token generieren, um das Plik-Tool in der Kommandozeile zu verwenden, einzelne Dateien löschen (über den `Remove`{.action}-Button rechts) oder alle Uploads löschen (über den `DELETE UPLOADS`{.action} Button).

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
