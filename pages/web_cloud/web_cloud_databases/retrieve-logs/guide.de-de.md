---
title: "Web Cloud Databases - Logs abrufen"
excerpt: "Erfahren Sie hier, wie Sie die Logs Ihrer Datenbanken erhalten, die auf Ihrem Web Cloud Databases Server gehostet werden"
updated: 2024-10-24
---

> [!primary]
>
> **Diese Anleitung wird derzeit aktualisiert. Einige Informationen sind möglicherweise unvollständig oder veraltet. Vielen Dank für Ihr Verständnis.**

## Ziel

Mit der Datenbank-Lösung [Web Cloud Databases](/links/web/databases) können Sie mehrere Datenbanken hosten. In manchen Situationen kann es notwendig sein, deren Logs einzusehen oder abzurufen:

- Logs Ihres Web Cloud Databases Servers
- Logs für eine der auf Ihrem Web Cloud Databases Server gehosteten Datenbanken

**Diese Anleitung erklärt, wie Sie die Logs der auf Ihrem Web Cloud Databases Server gehosteten Datenbanken einsehen können.**

## Voraussetzungen

- Sie verfügen über [Web Cloud Databases](/links/web/databases) (in einem [Performance Web Hosting](/links/web/hosting) Angebot enthalten oder separat).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Wir sind nicht in der Lage, Ihnen bei der Interpretation der Logs Ihrer Web Cloud Databases zu assistieren. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

### Die Logs Ihrer Web Cloud Databases Lösung in Echtzeit einsehen

So überprüfen Sie die Logs Ihrer Web Cloud Databases Lösung in Echtzeit:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Web Cloud Databases`{.action}.
4. Wählen Sie die betreffende Web Cloud Databases Lösung aus.
5. Klicken Sie auf den Tab `Logs`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-with-logs.png){.thumbnail}

In dieser integrierten Konsole finden Sie Echtzeit-Logs Ihrer Web Cloud Databases Lösung.

> [!primary]
>
> Da die Logs hier nur in Echtzeit verfügbar sind, werden sie nur erzeugt und angezeigt während der Tab `Logs`{.action} geöffnet ist.
>
> Wenn Sie den Tab `Logs`{.action} verlassen und später zurückkehren, wird der zuvor angezeigte Verlauf nicht mehr angezeigt.
>

### Loghistorie Ihrer Web Cloud Databases Lösung abrufen

Um den Logverlauf Ihrer Web Cloud Databases Lösung abzurufen, muss eine SFTP-Verbindung verwendet werden.

> [!warning]
>
> Vergewissern Sie sich vor dem Login, dass die öffentliche IP-Adresse Ihres Interzugangs auf Ihrem Web Cloud Databases Server mit der Option `SFTP` autorisiert ist.
>
> Um dies zu überprüfen, rufen Sie die öffentliche IP-Adresse Ihres aktuellen Internetzugriffspunkts ab und folgen Sie dem Abschnitt **Autorisieren einer IP-Adresse*** in [dieser Anleitung](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

So finden Sie die SFTP-Verbindungsinformationen zu Ihrer Web Cloud Databases Lösung:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Web Cloud Databases`{.action}.
4. Wählen Sie die betreffende Web Cloud Databases Lösung aus.
5. Im Tab `Allgemeine Informationen`{.action} finden Sie den Bereich `Verbindungsinformationen`{.action}.
6. Unter `SFTP`{.action} finden Sie alle notwendigen Informationen, um sich via SFTP zu verbinden.

> [!primary]
>
> Wenn Sie das `Server-Passwort` nicht kennen, klicken Sie auf den Button `...`{.action} rechts, um es zu ändern.
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/sftp-login.png){.thumbnail}

Nachdem Sie die SFTP-Login-Daten abgerufen haben, verbinden Sie sich über einen FTP-Client (FileZilla, Cyberduck, WinSCP, etc.).

Gehen Sie in FileZilla links oben in das Menü `File`{.action} und klicken Sie dann auf `Site Manager`{.action}.

Klicken Sie auf `New Site`{.action} und geben Sie die zuvor ermittelten Parameter ein.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/filezilla/site-manager.png){.thumbnail}

Die Log-Datei `stdout.log` befindet sich im Wurzelverzeichnis.

Laden Sie diese Datei herunter, um sie zu öffnen.

> [!primary]
>
> Im SFTP-Wurzelverzeichnis Ihres Web Cloud Databases Servers kann eine zusätzliche Logdatei mit dem Namen `slow-query.log` angezeigt werden.
> Diese Datei enthält den Verlauf der langsamen Anfragen, die auf Ihrem Web Cloud Databases Server ausgeführt wurden. 
> 
> Standardmäßig ist der Wert für Web Cloud Databases-Lösungen in der Variable **long_query_time** auf 1 Sekunde festgelegt.
> 
> Mit dieser Datei können Sie Ihre Skripte und den Inhalt Ihrer Datenbanken optimieren, um die Performance Ihrer dazugehörigen Dienste zu verbessern.
>

## Weiterführende Informationen <a name="go-further"></a>

[Erste Schritte mit Ihren Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Treten Sie unserer [User Community](/links/community) bei.
