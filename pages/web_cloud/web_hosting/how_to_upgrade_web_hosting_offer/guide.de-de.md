---
title: "Webhosting - Wie kann ich mein Angebot wechseln"
excerpt: "Erfahren Sie hier, wie Sie das Abonnement Ihres OVHcloud Webhosting-Dienstes ändern können"
updated: 2024-10-03
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel 

Im [OVHcloud Kundencenter](/links/manager) können Sie die Kapazitäten Ihrer [Webhosting-Angebote](/links/web/hosting) erweitern. Ein Abonnement-Upgrade bietet die folgenden Vorteile:

- Leistungsfähigeres Hosting
- Mehr FTP-Speicherplatz
- Zusätzliche Datenbanken
- Zusätzliche E-Mail-Accounts
- Zusätzliche Funktionen wie [Mailinglisten](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list) (ab [dem Pro Angebot](/links/web/hosting-professional-offer)) oder [Web Cloud Databases](/links/web/databases){.external} (in [den Performance Angeboten](/links/web/hosting-performance-offer))

**Diese Anleitung erklärt, wie Sie Ihr OVHcloud Hosting ohne Dienstunterbrechung skalieren können.**

## Voraussetzungen

- Sie verfügen über ein [Webhosting Angebot](/links/web/hosting)
- Sie sind in Ihrem [OVHcloud Kundencenter](/links/manager) eingeloggt
- Sie sind mindestens „[Administrator](/pages/account_and_service_management/account_information/managing_contacts)“ der Dienste, für die Sie das Abonnement ändern möchten.

## In der praktischen Anwendung

> [!warning]
>
> **Bevor** Sie Ihr aktuelles Abonnement ändern, prüfen Sie, ob die folgenden Fragestellungen für Sie relevant sind:
>
> - [Wie kann ich das Angebot Kostenloses Hosting 100M auf ein Webhosting Angebot umstellen?](#100m)
> - [Wie erhalte ich eine temporäre Leistungssteigerung bei meinem Performance Hosting Angebot?](#boost)
> - [Verschwende ich die verbleibende Zeit meines aktuellen Webhosting-Angebots, wenn ich das Angebot wechsle?](#billing)
> - [Kann ich mein aktuelles Angebot auf ein kleineres Angebot umstellen?](#checks)
>

### Webhosting-Angebot wechseln  <a name="modify"></a>

Um Ihr Abonnement zu ändern, gehen Sie in Ihr [OVHcloud Kundencenter](/links/manager) und klicken Sie auf den Bereich `Web Cloud`{.action}. Klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus.

Klicken Sie im Rahmen `Abo` auf den Button `...`{.action} rechts neben `Angebot` und dann auf `Angebot wechseln`{.action}.

![change_plan](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/pro-change-plan.png){.thumbnail}

Wählen Sie anschließend Ihr neues Abonnement und dessen Laufzeit aus. Bestätigen Sie die entsprechenden Verträge und klicken Sie auf `Senden`{.action}.

### Überprüfen, ob Ihr Hosting mit einem kleineren Angebot kompatibel ist <a name="checks"></a>

> [!warning]
>
> Die Änderung Ihres Abos zu einem Dienst mit weniger Ressourcen (Downgrade) ist nur möglich, wenn es sich um das **nächstkleinere Angebot handelt**.
> So können Sie zum Beispiel nicht von *Performance 2* auf *Pro* wechseln.
> Sie müssten also Ihr Hosting **zuerst** von *Performance 2* zum *Performance 1* **und dann** zum *Pro*-Angebot umstellen.

**Vor dem Wechsel zu einer kleineren Angebotsreihe** überprüfen Sie bitte die folgenden 6 Punkte:

#### 1 - Start SQL-Datenbanken

Stellen Sie sicher, dass das neue Angebot genügend [Datenbanken](/links/web/hosting-options-startsql) enthält. Prüfen Sie auch, ob die Größen ausreichen.

Löschen Sie andernfalls nicht verwendete Datenbanken, und reduzieren Sie ggf. die Datenmenge in diesen Datenbanken. Diese Menge darf die maximale Datenbankgröße des neuen Angebots nicht überschreiten. Wenn Sie weitere Unterstützung bei den durchzuführenden Aktionen benötigen, wenden Sie sich an die [OVHcloud Partner](/links/partner).

Nach der Löschung der Daten Ihrer Datenbanken müssen Sie das verwendete Quota neu berechnen. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Gehen Sie auf der angezeigten Seite in den Tab `Datenbanken`{.action} und klicken Sie dann auf den Button `...`{.action} rechts neben der betreffenden Datenbank und dann auf `Quota neu berechnen`{.action}.

![quota](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/recalculate-quota.png){.thumbnail}

> [!primary]
>
> Diese Neuberechnung Ihrer Datenbankgröße kann bis zu **15 Minuten** dauern. Falls die neu berechnete Quota nicht automatisch angezeigt wird, laden Sie die Seite über Ihren Webbrowser neu.
>

#### 2 - Web Cloud Databases

Wenn Sie das Angebot [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) nutzen, das mit Ihrem Webhosting [Performance](/links/web/hosting-performance-offer) inklusive ist, und Ihr Webhosting auf ein Angebot [Pro](/links/web/hosting-professional-offer) herunterstufen möchten, müssen Sie zunächst das Angebot Web Cloud Databases von Ihrem Webhosting trennen. <br>
Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Bleiben Sie auf der angezeigten Seite im Tab `Allgemeine Informationen`{.action}. Klicken Sie in der mittleren Spalte `Konfiguration` auf den Button `...`{.action} rechts neben `Web Cloud Databases`{.action} und dann auf `Abtrennen`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/wcdb-detach.png){.thumbnail}

Mit dieser Aktion können Sie ein Angebot für Web Cloud Databases unabhängig von Ihrem *Performance* Abonnement bestellen. Die Daten Ihres Servers bleiben dabei erhalten.

Wenn Sie diese Daten nicht behalten möchten, können Sie auch Ihr Angebot Web Cloud Databases löschen, bevor Sie zum Angebot *Pro* wechseln: 

1. Sichern Sie Ihre Daten gemäß den Anweisungen in [dieser Anleitung](/pages/web_cloud/web_cloud_databases/save-export-on-database-server).<br>
2. Löschen Sie Ihren Web Cloud Databases Server über Ihr [OVHcloud Kundencenter](/links/manager). Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](/links/manager) ein, klicken Sie oben rechts auf Ihren Account-Namen und dann auf das Icon `Produkte und Diensleistungen`{.action}. Klicken Sie dann auf den Button `...`{.action} rechts in der Zeile des betreffenden Web Cloud Databases/SQL Private Angebots und dann auf `Mein SQL Private Hosting löschen`{.action}.

#### 3 - FTP-Speicherplatz

Stellen Sie sicher, dass das neue Angebot ausreichend [FTP-Speicherplatz](/pages/web_cloud/web_hosting/ftp_connection) für den Import der Dateien Ihres aktuellen Hostings bietet.

Um die Quota des auf Ihrem Webhosting verwendeten FTP-Speicherplatzes zu überprüfen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Auf der angezeigten Seite `Allgemeine Informationen`{.action} finden Sie das Quota unter `Speicherplatz`.

![ftp](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-disk-space.png){.thumbnail}

#### 4 - E-Mail-Accounts

Stellen Sie sicher, dass Ihr neues Angebot eine ausreichende Anzahl E-Mail-Accounts enthält. Wenn dies nicht der Fall ist, löschen Sie nicht benötigte E-Mail-Accounts, nachdem Sie ein [Backup](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) von deren Inhalten erstellt haben.

Wenn Sie die gleiche Anzahl an E-Mail-Accounts behalten möchten, müssen Sie einen zusätzlichen **MX Plan** bestellen, **bevor Ihr Webhosting auf ein kleineres Angebot umstellen**. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `E-Mails`{.action} und wählen Sie das betreffende E-Mail-Angebot aus. Klicken Sie auf der angezeigten Seite auf `Abonnement`{.action} und rechts neben `Angebot`{.action} auf den Button `...`{.action} und dann auf `Angebot wechseln`{.action}.

![mxplan](/pages/assets/screens/control_panel/product-selection/web-cloud/emails/general-information/change-solution.png){.thumbnail}

>[!primary]
>
> Wenn der Button `...`{.action} auf Ihrem E-Mail-Angebot nicht verfügbar ist, können Sie das E-Mail-Angebot von Ihrem Webhosting trennen. Bleiben Sie hierzu in Ihrem [OVHcloud Kundencenter](/links/manager) im Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Klicken Sie auf der angezeigten Seite `Allgemeine Informationen`{.action} und in der Randleiste `Konfiguration`{.action} auf den Button `...`{.action} rechts neben `E-Mail-Adressen`{.action} und dann auf `Meine E-Mail-Option abtrennen`{.action}.
>

#### 5 - Mailinglisten

Die Funktion [Mailinglisten](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list) ist optional für die Hostings von [Basic](/links/web/hosting-personal-offer) verfügbar.

Wenn Sie Ihr Webhosting auf ein [Basic](/links/web/hosting-personal-offer) Angebot  umstellen möchten, müssen Sie zunächst die Mailinglisten löschen oder ein E-Mail-Angebot mit dieser Funktion (**MX Plan 100** oder **MX Plan Full**) über Ihr [OVHcloud Kundencenter](/links/manager).

Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `E-Mails`{.action} und wählen Sie das betreffende E-Mail-Angebot aus. Klicken Sie auf der angezeigten Seite auf `Abonnement`{.action} und rechts neben `Angebot`{.action} auf den Button `...`{.action} und dann auf `Angebot wechseln`{.action}.

>[!primary]
>
> Wenn der Button `...`{.action} auf Ihrem E-Mail-Angebot nicht verfügbar ist, können Sie das E-Mail-Angebot von Ihrem Webhosting trennen. Bleiben Sie hierzu in Ihrem [OVHcloud Kundencenter](/links/manager) im Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Klicken Sie auf der angezeigten Seite `Allgemeine Informationen`{.action} und auf `Konfiguration`{.action} auf den Button `...`{.action} rechts neben `E-Mail-Adressen`{.action} und dann auf `Meine E-Mail-Option abtrennen`{.action}.
>

#### 6 - FTP-Benutzer

Stellen Sie sicher, dass das neue Angebot genügend FTP-Benutzer bietet.

Die Anzahl der FTP-Benutzer wird in Ihrem OVHcloud Kundencenter angezeigt. Gehen Sie nach dem Login in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Klicken Sie auf der angezeigten Seite auf den Tab `FTP-SSH`{.action}.

Unten auf der angezeigten Seite werden in einer Tabelle alle für Ihr Webhosting erstellten FTP-Benutzer aufgelistet.

Um FTP-Benutzer zu löschen, klicken Sie auf den Button `...`{.action} rechts neben dem FTP-Benutzer, den Sie löschen möchten, und dann auf `Löschen`{.action}.

![user FTP deletion](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/edit-ftp-user-2.png){.thumbnail} 

#### Finalisierung

Nachdem Sie diese 6 Punkte überprüft haben, können Sie Ihren [Angebotswechsel](#modify) durchführen.

### Sonderfälle

#### Sie nutzen das Angebot Kostenloses Hosting 100M <a name="100m"></a>

Sie können Ihr [Kostenloses Hosting 100M](/pages/web_cloud/web_hosting/activate_start10m) Angebot nur auf ein [Basic Webhosting](/links/web/hosting-personal-offer) umstellen. Nach der Umstellung auf das Basic Angebot können Sie es jedoch auf alle unsere [Webhosting Angebote hochstufen](/links/web/hosting).

Folgen Sie [diesen Anweisungen](#modify), um Ihr Angebot zu wechseln.

#### Ihr Performance Hosting vorübergehend boosten <a name="boost"></a>

Mit der [Boost Option](/links/web/hosting-options-boost), die für unsere *Performance* Angebote verfügbar ist, können Sie die CPU und RAM Ressourcen Ihres Hostings vorübergehend erhöhen, um einen punktuellen Anstieg des Traffics abzufangen. Wenn diese Erhöhung über einen längeren Zeitraum erfolgt, können Sie auch [zu einem höheren Performance Angebot wechseln](#modify), um diese Ressourcen dauerhaft verfügbar zu machen.

> [!warning]
>
> Wenn Sie die Boost-Option aktivieren, bleibt diese aktiv und wird **berechnet, bis sie deaktiviert wird**.

Wenn die Option **Boost** Ihren Anforderungen entspricht, finden Sie unten die Anweisungen, um diese Option zu **aktivieren** oder zu **deaktivieren**.

> [!tabs]
> **Boost-Option aktivieren**
>>
>> Um die Boost-Option zu aktivieren, loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Klicken Sie auf der angezeigten Seite in der Box `Allgemeine Informationen` auf den Button `...`{.action} rechts von `Boost` und dann auf `Mein Angebot boosten`{.action}.<br><br>
>>![boost](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/boost-my-hosting-plan.png){.thumbnail}<br>
>>
> **Boost deaktivieren**
>>
>> Um die Boost-Option zu deaktivieren, loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Gehen Sie auf der angezeigten Seite in den Tab `Mehr` und klicken Sie dann auf `Mein Angebot boosten`{.action}.<br>
>> Die Tabelle zur Verwendung der Boost-Option wird angezeigt. Klicken Sie auf `Boost deaktivieren`{.action}.<br><br>
>>![boost](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/boost-my-hosting-plan/deactivate-the-boost-plan.png){.thumbnail}<br>

#### Abrechnung bei einem Angebotswechsel <a name="billing"></a>

**Fall 1**: Wenn Sie Ihr ursprüngliches Angebot auf ein höheres Angebot umstellen, wird eine anteilige *pro rata* Berechnung bis zum nächsten Verlängerungsdatum dieses ursprünglichen Angebots durchgeführt.
Diese Berechnung entspricht der Preisdifferenz zwischen Ihrem ursprünglichen und Ihrem neuen Angebot.

> **Beispiel:**
>
> Sie haben am 1. Januar 2024 ein [Basic Hosting](/links/web/hosting-personal-offer) abonniert.
>
> Am 31. Oktober 2024 wechseln Sie von diesem **Basic** Angebot zu einem Abo für das [Pro Hosting](/links/web/hosting-professional-offer).
>
> Folglich wird der Betrag für die verbleibende Laufzeit des **Basic** Abos (2 Monate vom 1. November 2024 bis zum 1. Januar 2025) automatisch von den Kosten des neuen **Pro** Abonnements bis zum 1. Januar 2025 abgezogen. Sie zahlen also nur die Differenz.  
> Ab dem 1. Januar 2025 wird Ihnen das **Pro** Abonnement dann nach dem geltenden Tarif berechnet.

Folgen Sie [diesen Anweisungen](#modify), um Ihr Angebot zu wechseln.

**Fall 2**: Wenn Sie Ihr ursprüngliches Angebot auf ein niedrigeres Angebot umstellen, verfällt die verbleibende Abonnementzeit für das ursprüngliche Angebot. Für diese verbleibende Zeit wird keine Rückerstattung vorgenommen, auch wenn noch mehrere Monate des Abonnements übrig sind. Sie zahlen also vollständig das Abonnement des niedrigeren Angebots vorab.

> **Beispiel:**
>
> Sie haben am 1. Januar 2024 ein [Pro Hosting](/links/web/hosting-professional-offer) abonniert.
>
> Am 31. Oktober 2024 wechseln Sie von diesem **Pro** Angebot zu einem Abo für das [Basic Hosting](/links/web/hosting-personal-offer).
>
> Der Betrag für die verbleibende Laufzeit des Abonnements **Pro** (2 Monate, vom 1. November 2024 bis zum 1. Januar 2025) geht verloren.  
> Ab dem 1. November 2024 wird Ihnen das Abonnement **Basic** nach dem geltenden Tarif abgerechnet (auch wenn Sie die verbleibenden 2 Monate des Angebots **Pro** bezahlt haben).

Folgen Sie [diesen Anweisungen](#modify), um Ihr Angebot zu wechseln.

## Weitere Informationen <a name="go-further"></a>

[Statistiken und Logs eines Webhostings einsehen](/pages/web_cloud/web_hosting/logs_and_statistics)

[Optimierung der Performance Ihrer Webseite](/pages/web_cloud/web_hosting/optimise_your_website_performance)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
