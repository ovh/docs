---
title: "Den Versionsverlauf einer DNS-Zone verwalten"
excerpt: "Erfahren Sie hier, wie Sie Backups der DNS-Zone mithilfe der History-Funktion einsehen, vergleichen, herunterladen und wiederherstellen können"
updated: 2024-06-26
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die **DNS**-Zone (**D**omain **N**ame **S**ystem) ist die Konfigurationsdatei eines Domainnamens, die sich aus **DNS-Einträgen** zusammensetzt. Das sind Datensätze, die dem Domainnamen verschiedene Dienste und Funktionen zuordnen, zum Beispiel:

- Die IP-Adresse (DNS-Einträge vom Typ *A* und *AAAA*) Ihres Hostings muss in der Zone eingetragen sein, damit Ihre Webseite angezeigt wird, wenn der Domainname in einen Browser eingegeben wird.
- Die E-Mail-Server (DNS-Einträge vom Typ *MX*), die E-Mails erhalten sollen, die an Adressen mit diesem Domainnamen versendet wurden. Wenn Sie die MX-Einträge Ihres Domainnamens konfigurieren, können Sie E-Mails über Ihre personalisierten E-Mail-Adressen empfangen.
- Informationen zur Sicherheit/Authentifizierung von Diensten (Webhosting, Webserver, E-Mail-Server, etc.), die mit Ihrem Domainnamen verbunden sind (DNS-Einträge vom Typ *SPF*, *DKIM*, *DMARC*, etc.).

Lesen Sie bei Bedarf unsere Dokumentation zu [DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records) und [Bearbeiten einer DNS-Zone](/pages/web_cloud/domains/dns_zone_edit) über Ihr [OVHcloud Kundencenter](/links/manager).
Es kann aus verschiedenen Gründen erforderlich sein, eine alte DNS-Konfiguration auf Ihre Domain anzuwenden.

Die Verwaltung von DNS wird mit dem Zugriff auf den Verlauf Ihrer DNS-Zonen vereinfacht.

**Diese Anleitung erklärt, wie Sie ältere Versionen Ihrer DNS-Zone einsehen, vergleichen, herunterladen und wiederherstellen können.**

## Voraussetzungen

- Sie haben eine DNS-Zone für Ihren Domainnamens in Ihrem [OVHcloud Kundencenter](/links/manager).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben die erforderlichen Berechtigungen zum Verwalten des Domainnamens.

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den Domainnamen aus, dessen DNS-Zone Sie bearbeiten möchten. Öffnen Sie den Tab `DNS-Zone`{.action}.

Die angezeigte Tabelle stellt die DNS-Zone Ihrer Domain dar. Dort finden Sie die Liste der darin enthaltenen DNS-Einträge. Rechts in der Tabelle finden Sie mehrere Schaltflächen, mit denen Sie Aktionen in Ihrer DNS-Zone durchführen können. 

![DNS history tool](images/dns-zone-history.png){.thumbnail}

Klicken Sie auf `Den Verlauf meiner DNS-Zone einsehen`{.action}. 

Auf der neu geöffneten Seite wird eine Tabelle mit dem Versionsverlauf Ihrer DNS-Zone angezeigt. Er wird absteigend von der jüngsten Version sortiert. Am Anfang der Tabelle befindet sich die aktuelle Version Ihrer DNS-Zone. Auf dieser Seite können Sie folgende Aktionen ausführen:

- [DNS Zone anzeigen](#view)
- [DNS Zone herunterladen](#download)
- [DNS-Zone wiederherstellen](#restore)
- [Zwei DNS Zonen vergleichen](#compare)

> [!primary]
>
> Die Backups Ihrer DNS-Zone unterliegen folgenden Einschränkungen:
>
> - Es existieren maximal 200 Sicherungen für eine DNS-Zone.
> - Wenn ein Backup älter als 31 Tage ist, wird es automatisch gelöscht, mit Ausnahme der **letzten 5 Backups**.
>

### Eine DNS-Zone anzeigen <a name="view"></a>

Um die gewünschte DNS-Zone anzuzeigen, geben Sie die Zeile in der Tabelle an und klicken Sie auf das Symbol in der Spalte `Anzeigen`{.action}.

![DNS Zone anzeigen](images/visualize-dns-eyes.png){.thumbnail}

Die Einträge der ausgewählten DNS-Zone werden angezeigt.

![Details einer DNS-Zone](images/details-dns-zone.png){.thumbnail}

Klicken Sie auf `Schließen`{.action}, um zur Hauptseite „History der DNS-Zone“ zurückzukehren.

### DNS Zone herunterladen <a name="download"></a>

Um die gewünschte DNS-Zone herunterzuladen, identifizieren Sie die entsprechende Zeile in der Tabelle und klicken Sie dann auf das Symbol in der Spalte `Herunterladen`{.action}.

![DNS-Zone herunterladen](images/download-dns-zone.png){.thumbnail}

Die DNS Zone wird im Format *.txt* heruntergeladen.

### DNS Zone wiederherstellen <a name="restore"></a>

Wenn Sie Ihre aktuelle DNS-Zone durch eine andere ersetzen möchten, stellen Sie einfach eine ältere DNS-Zone wieder her. Suchen Sie in der Tabelle mit dem Verlauf Ihrer DNS-Zonen die Zeile für die DNS-Zone, die Sie wiederherstellen möchten (überprüfen Sie bitte das Datum links in der Zeile), und klicken Sie dann auf das Symbol in der Spalte `Wiederherstellen`{.action}.

![DNS-Zone wiederherstellen](images/restore-dns-zone.png){.thumbnail}

Das folgende Fenster wird angezeigt.

![Bestätigung DNS-Zone wiederherstellen](images/confirmation-restore-dns-zone.png){.thumbnail}

Stellen Sie sicher, dass das Datum in der Nachricht mit der DNS-Zone übereinstimmt, die Sie wiederherstellen möchten. Wie das gelbe Banner zeigt, wird die aktuelle DNS-Zone (die in der Liste der DNS-Zonenversionen ganz oben angezeigt wird) gelöscht und durch die DNS-Zone ersetzt, die Sie wiederherstellen.

Klicken Sie auf `Wiederherstellen`{.action}, um die Wiederherstellung zu bestätigen, oder auf `Abbrechen`{.action}.

> [!primary]
>
> Das Ändern oder Wiederherstellen einer DNS-Zone führt zu einer Propagationsverzögerung von **4** bis **24** Stunden, damit sie im DNS-Netzwerk vollständig berücksichtigt wird.
>

### Zwei DNS-Zonen vergleichen <a name="compare"></a>

Sie können den Inhalt zweier DNS-Zonen vergleichen. Suchen Sie in der Tabelle mit der History Ihrer DNS-Zone die beiden Zeilen, die den beiden DNS-Zonen entsprechen, die Sie vergleichen möchten (überprüfen Sie das Datum links neben jeder Zeile), und wählen Sie diese aus. Um diese beiden Versionen der DNS-Zone zu vergleichen, klicken Sie oben links auf `Versionen vergleichen`{.action}.

![Zwei DNS-Zonen vergleichen](images/compare-two-dns-zone.png){.thumbnail}

Es wird eine neue Seite mit dem Inhalt der beiden DNS-Zonen angezeigt. Über jeder Version wird das zugehörige Datum angezeigt. Standardmäßig befindet sich die neueste Version der DNS-Zone links und die älteste rechts. Eine Farbcodierung hilft Ihnen dabei, Unterschiede im Inhalt zu erkennen.<br>
Auf der linken Seite wurde der rot markierte Inhalt in der neueren Version geändert oder entfernt.<br>
Auf der rechten Seite wurde der grün hervorgehobene Inhalt im Vergleich zur älteren Version geändert oder hinzugefügt. 

Sie können auch die Datumsangaben der Versionen, die Sie vergleichen möchten, mithilfe der beiden Dropdownlisten aktualisieren.

![Details zum Vergleich zweier DNS-Zonen](images/compare-dns-zone-details.png){.thumbnail}

Mit dieser Anleitung können Sie nun zwei DNS-Zonen vergleichen sowie eine DNS-Zone anzeigen, herunterladen, wiederherstellen und löschen.

## Weiterführende Informationen

[In das OVHcloud Kundencenter einloggen](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[DNS-Zone bei OVHcloud erstellen](/pages/web_cloud/domains/dns_zone_create)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
