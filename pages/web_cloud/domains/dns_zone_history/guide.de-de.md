---
title: "Versionsverlauf einer DNS-Zone verwalten"
excerpt: "Erfahren Sie, wie Sie Backups Ihrer DNS-Zone einsehen, vergleichen, herunterladen und wiederherstellen"
updated: 2026-03-27
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

Die **D**omain **N**ame **S**ystem (**DNS**)-Zone eines Domainnamens ist dessen Konfigurationsdatei. Sie besteht aus technischen Informationen, den sogenannten *DNS-Einträgen*. Die DNS-Zone funktioniert gewissermaßen wie eine Vermittlungszentrale.

Weitere Informationen finden Sie in den folgenden Anleitungen:

- [Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)
- [Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)
- [Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

Es kann aus verschiedenen Gründen erforderlich sein, eine ältere DNS-Konfiguration auf Ihren Domainnamen anzuwenden.

Die DNS-Verwaltung wird durch den Versionsverlauf Ihrer DNS-Zonen vereinfacht.

**Erfahren Sie, wie Sie Backups Ihrer DNS-Zone einsehen, vergleichen, herunterladen und wiederherstellen.**

## Voraussetzungen

- Sie verfügen über Zugriff auf die Verwaltung des betreffenden Domainnamens.

<!-- CP-NAV-START:web-dns-zone -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [DNS-Zone](/links/control-panel/web-dns-zone)
- **Navigationspfad:** `Web Cloud`{.action} > `DNS-Zone`{.action} > Wählen Sie Ihren Domainnamen aus

---
<!-- CP-NAV-END:web-dns-zone -->

## In der praktischen Anwendung

> [!primary]
>
> Die Backups Ihrer DNS-Zone unterliegen folgenden Einschränkungen:
>
> - Es werden maximal 200 Backups für eine DNS-Zone aufbewahrt.
> - Sobald ein Backup älter als 31 Tage ist, wird es automatisch gelöscht, mit Ausnahme der **5 jüngsten Backups**.

**Klicken Sie auf die gewünschte Aktion, um den Inhalt anzuzeigen.**

/// details | Eine DNS-Zone anzeigen

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS-Zonen](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Die angezeigte Tabelle stellt die DNS-Zone Ihres Domainnamens dar. Sie enthält die Liste der darin enthaltenen DNS-Einträge. Auf der rechten Seite der Tabelle können Sie über mehrere Buttons Aktionen in Ihrer DNS-Zone durchführen.
>>
>> ![DNS-Verlaufstool](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Klicken Sie auf `Den Verlauf meiner DNS-Zone einsehen`{.action}.
>>
> **Schritt 3**
>>
>> Auf der neuen Seite wird eine Tabelle mit dem Versionsverlauf Ihrer DNS-Zone-Backups angezeigt, von der jüngsten bis zur ältesten Version. Am Anfang dieser Tabelle befindet sich die aktuelle Version Ihrer DNS-Zone.
>>
>> Um die gewünschte DNS-Zone anzuzeigen, identifizieren Sie die entsprechende Zeile in der Tabelle und klicken Sie auf das Symbol in der Spalte `Anzeigen`{.action}.
>>
>> ![Eine DNS-Zone anzeigen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/visualize-dns-eyes.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Die Daten der betreffenden DNS-Zone werden angezeigt.
>>
>> ![Details einer DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/details-dns-zone.png){.thumbnail}
>>
>> Klicken Sie auf `Schließen`{.action}, um zur Hauptseite "Versionsverlauf der DNS-Zone" zurückzukehren.

///

/// details | Eine DNS-Zone herunterladen

Klicken Sie auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS-Zonen](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Die angezeigte Tabelle stellt die DNS-Zone Ihres Domainnamens dar. Sie enthält die Liste der darin enthaltenen DNS-Einträge. Auf der rechten Seite der Tabelle können Sie über mehrere Buttons Aktionen in Ihrer DNS-Zone durchführen.
>>
>> ![DNS-Verlaufstool](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Klicken Sie auf `Den Verlauf meiner DNS-Zone einsehen`{.action}.
>>
> **Schritt 3**
>>
>> Auf der neuen Seite wird eine Tabelle mit dem Versionsverlauf Ihrer DNS-Zone-Backups angezeigt, von der jüngsten bis zur ältesten Version. Am Anfang dieser Tabelle befindet sich die aktuelle Version Ihrer DNS-Zone.
>>
>> Um die gewünschte DNS-Zone herunterzuladen, identifizieren Sie die entsprechende Zeile in der Tabelle und klicken Sie auf das Symbol in der Spalte `Herunterladen`{.action}.
>>
>> ![Eine DNS-Zone herunterladen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/download-dns-zone.png){.thumbnail}
>>
>> Die DNS-Zone wird im .txt-Format heruntergeladen.

///

/// details | Eine DNS-Zone wiederherstellen

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS-Zonen](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Die angezeigte Tabelle stellt die DNS-Zone Ihres Domainnamens dar. Sie enthält die Liste der darin enthaltenen DNS-Einträge. Auf der rechten Seite der Tabelle können Sie über mehrere Buttons Aktionen in Ihrer DNS-Zone durchführen.
>>
>> ![DNS-Verlaufstool](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Klicken Sie auf `Den Verlauf meiner DNS-Zone einsehen`{.action}.
>>
> **Schritt 3**
>>
>> Auf der neuen Seite wird eine Tabelle mit dem Versionsverlauf Ihrer DNS-Zone-Backups angezeigt, von der jüngsten bis zur ältesten Version. Am Anfang dieser Tabelle befindet sich die aktuelle Version Ihrer DNS-Zone.
>>
>> Wenn Sie Ihre aktuelle DNS-Zone durch eine ältere ersetzen möchten, genügt es, diese wiederherzustellen. Identifizieren Sie in der Tabelle mit dem Versionsverlauf Ihrer DNS-Zonen die Zeile für die DNS-Zone, die Sie wiederherstellen möchten (überprüfen Sie das Datum links neben der Zeile), und klicken Sie auf das Symbol in der Spalte `Wiederherstellen`{.action}.
>>
>> ![Eine DNS-Zone wiederherstellen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/restore-dns-zone.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Das folgende Fenster wird angezeigt.
>>
>> ![Bestätigung Wiederherstellung DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/confirmation-restore-dns-zone.png){.thumbnail}
>>
>> Überprüfen Sie, ob das in der Nachricht angezeigte Datum der DNS-Zone entspricht, die Sie wiederherstellen möchten. Wie das gelbe Banner anzeigt, wird die aktuelle DNS-Zone (ganz oben in der Liste des Versionsverlaufs der DNS-Zonen) gelöscht und durch die DNS-Zone ersetzt, die Sie wiederherstellen möchten.
>>
>> Klicken Sie auf `Wiederherstellen`{.action}, um die Wiederherstellung zu bestätigen, oder auf `Abbrechen`{.action}.

> [!primary]
>
> Das Ändern oder Wiederherstellen einer DNS-Zone führt zu einer Propagationsverzögerung von **4** bis **24** Stunden, bis die Änderung im DNS-Netzwerk vollständig berücksichtigt wird.

///

/// details | Zwei DNS-Zonen vergleichen

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS-Zonen](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Die angezeigte Tabelle stellt die DNS-Zone Ihres Domainnamens dar. Sie enthält die Liste der darin enthaltenen DNS-Einträge. Auf der rechten Seite der Tabelle können Sie über mehrere Buttons Aktionen in Ihrer DNS-Zone durchführen.
>>
>> ![DNS-Verlaufstool](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Klicken Sie auf `Den Verlauf meiner DNS-Zone einsehen`{.action}.
>>
> **Schritt 3**
>>
>> Auf der neuen Seite wird eine Tabelle mit dem Versionsverlauf Ihrer DNS-Zone-Backups angezeigt, von der jüngsten bis zur ältesten Version. Am Anfang dieser Tabelle befindet sich die aktuelle Version Ihrer DNS-Zone.
>>
>> Sie können den Inhalt zweier DNS-Zonen vergleichen. Identifizieren Sie in der Tabelle mit dem Versionsverlauf Ihrer DNS-Zone die beiden Zeilen, die den beiden DNS-Zonen entsprechen, die Sie vergleichen möchten (überprüfen Sie das Datum links neben jeder Zeile), und wählen Sie diese aus. Um diese beiden DNS-Zone-Versionen zu vergleichen, klicken Sie oben links auf `Versionen vergleichen`{.action}.
>>
>> ![Zwei DNS-Zonen vergleichen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-two-dns-zone.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Eine neue Seite wird angezeigt, auf der der Inhalt beider DNS-Zonen dargestellt wird. Über jeder Version wird das entsprechende Datum angezeigt. Standardmäßig befindet sich die jüngste DNS-Zone-Version links und die älteste rechts. Eine Farbcodierung hilft Ihnen, Unterschiede im Inhalt zu erkennen.
>>
>> Auf der linken Seite wurde der rot markierte Inhalt in der neueren Version geändert oder gelöscht.
>>
>> Auf der rechten Seite wurde der grün markierte Inhalt im Vergleich zur älteren Version geändert oder hinzugefügt.
>>
>> Sie können auch die Datumsangaben der Versionen, die Sie vergleichen möchten, mithilfe der beiden Dropdown-Listen aktualisieren.
>>
>> ![Details zum Vergleich zweier DNS-Zonen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-dns-zone-details.png){.thumbnail}

///

## Weiterführende Informationen

[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)

[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)

[Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

[In das OVHcloud Kundencenter einloggen](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[DNS-Zone bei OVHcloud erstellen](/pages/web_cloud/domains/dns_zone_create)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
