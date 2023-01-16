---
title: Webhosting-Dienst anpassen
excerpt: "Erfahren Sie hier, wie Sie das Abonnement Ihres OVHcloud Webhosting-Dienstes ändern"
slug: how_to_change_web_hosting_offer
section: Webseitenoptimierung
order: 2
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 03.01.2023**

## Ziel 

Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) erlaubt es Ihnen, [die Kapazitäten Ihrer Webhosting Dienste](https://www.ovhcloud.com/de/web-hosting/) zu erhöhen, um über mehr Rechenleistung, Speicherplatz, Datenbanken, E-Mail-Adressen zu verfügen. Zusätzliche Funktionen wie [Mailinglisten](https://docs.ovh.com/de/emails/webhosting_e-mail_verwendung_von_mailinglisten/) (ab [Pro Dienst](https://www.ovhcloud.com/de/web-hosting/professional-offer/)) oder [Private SQL](https://www.ovhcloud.com/de/web-hosting/options/private-sql/) (inkludiert in Webhostings der Reihe [Performance](https://www.ovhcloud.com/de/web-hosting/performance-offer/)) werden mit einem Upgrade ebenfalls verfügbar.

**Diese Anleitung erklärt, wie Sie Ihr OVHcloud Hosting-Abonnement ohne Dienstunterbrechung skalieren können.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

> [!warning]
>
> **Bevor** Sie Ihr aktuelles Abonnement ändern, überprüfen Sie die folgenden Fragen:
>
> - [Wie kann ich mein kostenloses Start 10M Angebot auf ein Webhosting Angebot umstellen?](#start10m)
> - [Wie kann ich eine temporäre Verbesserung der Performance bei meinem Performance-Hosting nutzen?](#boost)
> - [Werde ich beim Wechsel des Angebots die verbleibende Zeit auf meinem aktuellen Webhosting-Angebot verlieren?](#billing)
> - [Kann ich mein derzeitiges Angebot auf ein kleineres Angebot umstellen?](#checks)
>

### Ihr Webhosting-Angebot wechseln <a name="modify"></a>

Um Ihr Abonnement zu ändern, öffnen Sie im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) den Bereich `Web Cloud`{.action}. Klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus.

Klicken Sie im Rahmen `Abonnement` auf `...`{.action} rechts neben `Angebot` und dann auf `Angebot wechseln`{.action}.

![change_plan](images/change_plan.png){.thumbnail}

Wählen Sie dann Ihr neues Abonnement und dessen Dauer aus. Bestätigen Sie die entsprechenden Verträge und klicken Sie dann auf `Absenden`{.action}.

### Überprüfen, ob Ihr Hosting mit einem kleineren Angebot kompatibel ist <a name="checks"></a>

> [!primary]
>
> Die Änderung Ihres Abos zu einem Dienst mit weniger Ressourcen ist nur möglich, wenn es sich um das **nächstkleinere Angebot handelt**.
> So können Sie zum Beispiel nicht von *Performance 2* auf *Pro* wechseln.
> Sie müssen Ihr Hosting **zuerst** von *Performance 2* zum *Performance 1* **und dann** zum *Pro*-Angebot umstellen.
>

Bevor Sie Ihre Umstellung auf eine niedrigere Reihe vornehmen, überprüfen Sie die folgenden 6 Punkte:

#### 1 - Anzahl der Websites

Mit dem Angebot [Kimsufi Web](https://www.ovhcloud.com/de/web-hosting/old-web-hosting-offers/) können Sie auf Ihrem Hosting nur einen Domainnamen mit [Multisite](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/) verwenden.

Bevor Sie vom [Basic Webhosting](https://www.ovhcloud.com/de/web-hosting/personal-offer/) zu [Kimsufi Web](https://www.ovhcloud.com/de/web-hosting/old-web-hosting-offers/) wechseln, überprüfen Sie, dass Ihr Hosting nur eine einzige Website enthält.

#### 2 - Start SQL Datenbanken

Bevor Sie Ihr Hosting auf ein kleineres Angebot umstellen, überprüfen Sie, dass das neue Angebot genügend [Datenbanken enthält](https://www.ovhcloud.com/de/web-hosting/options/start-sql/). Überprüfen Sie auch, ob sie groß genug sind.

Ist dies nicht der Fall, löschen Sie ungenutzte Datenbanken und verringern Sie gegebenenfalls deren Datenmenge. Diese darf die maximale Größe der Datenbanken des neuen Angebots nicht überschreiten (bei Support-Anfragen zu den durchzuführenden Operationen wenden Sie sich an die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/)).

Nachdem Sie Ihre Datenbanken gelöscht haben, denken Sie daran, die genutzte Quota im Tab `Datenbanken`{.action} im Bereich `Hosting-Pakete`{.action} Ihres Kundencenters neu zu berechnen. Klicken Sie rechts neben der betreffenden Datenbank auf `...`{.action} und dann auf `Quota neu berechnen`{.action}.

![Quota](images/quota.png){.thumbnail}

#### 3 - Web Cloud Databases

Wenn Sie die in Ihrem Hosting der Reihe [Performance](https://www.ovhcloud.com/de/web-hosting/performance-offer/) enthaltene [Web Cloud Databases](https://docs.ovh.com/de/hosting/erste-schritte-mit-clouddb/#aktivierung-des-in-ihrem-webhosting-angebot-enthaltenen-clouddb-servers) verwenden und Ihr Hosting auf [Pro](https://www.ovhcloud.com/de/web-hosting/professional-offer/) umstellen möchten, gehen Sie in den Bereich `Hosting-Pakete`{.action} Ihres Kundencenters.<br>
Klicken Sie im Bereich `Konfiguration`{.action} auf den Button `...`{.action} und dann auf `Abtrennen`{.action}.

![Web Cloud Databases](images/clouddb.png){.thumbnail}

Mit dieser Aktion können Sie einen Web Cloud Databases Dienst bestellen, der unabhängig von Ihrem *Performance* Abo ist. Die Daten Ihres Servers werden gespeichert.

Wenn Sie diese Daten nicht speichern möchten, können Sie auch einfach den Private SQL löschen, bevor Sie zum *Pro* Angebot wechseln.

1. Speichern Sie Ihre Daten gemäß den Anweisungen in [dieser Anleitung](https://docs.ovh.com/de/hosting/backup-eine-datenbank-exportieren/).<br>
2. Löschen Sie Ihren Web Cloud Databases Server über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Klicken Sie hierzu oben rechts auf Ihren Namen und dann auf der `Dienstverwaltung`{.action}. Klicken Sie dann rechts in der betreffenden Zeile auf `...`{.action} und dann auf `Mein SQL Private Hosting kündigen`{.action}.

#### 4 - FTP Bereich

Bevor Sie Ihr Webhosting auf ein kleineres Angebot umstellen, stellen Sie sicher, dass im [gewünschten Angebot ausreichend FTP-Speicherplatz](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) zur Verfügung steht, damit die Dateien Ihres aktuellen Webhostings importiert werden können.

Das auf Ihrem FTP-Hosting verwendete Quota ist im Bereich `Hosting-Pakete`{.action} Ihres Kundencenters einsehbar. Sie finden die Quota-Anzeige im Tab `Allgemeine Informationen`{.action} unter `Speicherplatz`.

![ftp](images/ftp.png){.thumbnail}

#### 5 - E-Mail-Adressen

Überprüfen Sie außerdem, dass Ihr neues Angebot eine ausreichende Anzahl verfügbarer E-Mail-Accounts bietet. Falls nicht, löschen Sie die überflüssigen Accounts, nachdem Sie diese gegebenenfalls [gesichert haben](https://docs.ovh.com/de/emails/email-adressen-manuell-migrieren/).

Wenn Sie die gleiche Anzahl an E-Mail-Accounts behalten möchten, können Sie vor der Umstellung Ihres Hostings auf ein niedrigeres Angebot auch ein neues **MX Plan E-Mail-Angebot bestellen**. Klicken Sie im Bereich `E-Mails`{.action} in Ihrem Kundencenter auf das betreffende Angebot und dann auf den Button `...`{.action} rechts neben `Angebot`. Klicken Sie anschließend auf `Zu einem anderen Angebot wechseln`{.action}.

![mxplan](images/mxplan.png){.thumbnail}

#### 6 - Mailinglisten

Die [Mailinglisten-Funktion](https://docs.ovh.com/de/emails/webhosting_e-mail_verwendung_von_mailinglisten/) ist optional bei den [Basic Hostings](https://www.ovhcloud.com/de/web-hosting/personal-offer/) und [Kimsufi Web](https://www.ovhcloud.com/de/web-hosting/old-web-hosting-offers/).

Um Ihr Hosting auf ein [Basic Hosting](https://www.ovhcloud.com/de/web-hosting/personal-offer/) umzustellen, müssen Sie zunächst Mailinglisten entfernen oder ein E-Mail-Angebot mit dieser Funktion (**MX Plan 100** oder **MX Plan Full**) über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) bestellen.

Wählen Sie im Bereich `E-Mails`{.action} in Ihrem Kundencenter den betreffenden Dienst aus und klicken Sie dann auf `...`{.action} rechts neben `Angebot`{.action}. Klicken Sie anschließend auf `Zu einem anderen Angebot wechseln`{.action}.

#### Finalisation

Wenn Sie alle Punkte überprüft haben, können Sie [Ihr Angebot wechseln](#modify).

### Sonderfälle

#### Sie besitzen ein Start 10M Angebot <a name="start10m"></a>

Sie können das [Start 10M](https://docs.ovh.com/de/hosting/start10m-aktivieren/) Angebot nur auf ein [Basic Webhosting](https://www.ovhcloud.com/de/web-hosting/personal-offer/) umstellen. Nach der Umstellung auf das Basic Angebot können Sie es jedoch auf alle unsere [Webhosting Angebote hochstufen](https://www.ovhcloud.com/de/web-hosting/).

Folgen [Sie diesen Anweisungen](#modify), um Ihr Angebot zu wechseln.

#### Ihr Performance Hosting vorübergehend boosten <a name="boost"></a>

Mit der [Boost Option](https://www.ovhcloud.com/de/web-hosting/options/boost/), die für unsere *Performance* Angebote verfügbar ist, können Sie die CPU und RAM Ressourcen Ihres Hostings vorübergehend erhöhen, um einen punktuellen Anstieg des Traffics abzufangen. Wenn diese Erhöhung über einen längeren Zeitraum erfolgt, können Sie auch [zu einem höheren Performance Angebot wechseln](#modify), um diese Ressourcen dauerhaft verfügbar zu machen.

> [!warning]
>
> Wenn Sie sich entscheiden, die Boost-Option zu aktivieren, bleibt diese aktiv und wird **berechnet, bis sie deaktiviert wird**.

Wenn Sie die **Boost**-Option benötigen, finden Sie unten die Anweisungen, um diese Option zu **aktivieren** oder zu **deaktivieren**.

> [!tabs]
> **Boost-Option aktivieren**
>>
>> Klicken Sie im Rahmen `Allgemeine Informationen` zu Ihrem Hosting auf `...`{.action} rechts neben `Boost` und dann auf `Mein Angebot boosten`{.action}.<br><br>
>> ![boost](images/enable_boost.png){.thumbnail}<br>
>>
> **Boost-Option deaktivieren**
>>
>> Klicken Sie im Tab `Mehr` Ihres Hostings auf `Mein Angebot boosten`{.action}.<br>
>> Die Tabelle mit der Boost Option wird angezeigt. Klicken Sie auf `Boost deaktivieren`{.action}.<br><br>
>> ![boost](images/disable_boost.png){.thumbnail}<br>

#### Abrechnung bei einem Angebotswechsel <a name="billing"></a>

Wenn Sie Ihr ursprüngliches Angebot auf ein höheres Angebot umstellen, wird eine *anteilige* Berechnung bis zum nächsten Verlängerungsdatum dieses ursprünglichen Angebots durchgeführt.
Diese Berechnung entspricht dem Unterschied im Preis zwischen Ihrem ursprünglichen und Ihrem neuen Angebot.

> **Beispiel:**<br>
>
> Sie haben am 1. Januar 2022 ein [Basic Hosting](https://www.ovhcloud.com/de/web-hosting/personal-offer/) abonniert.
>
> Am 31. Oktober 2022 wechseln Sie von diesem **Basic** Angebot zu einem Abo für das [Pro Hosting](https://www.ovhcloud.com/de/web-hosting/professional-offer/).<br>
>
> Folglich wird der Betrag für die verbleibende Laufzeit des **Basic** Abos (2 Monate vom 1. November 2022 bis zum 1. Januar 2023) automatisch von den Kosten des neuen **Pro** Abonnements bis zum 1. Januar 2023 abgezogen. Sie zahlen also nur die Differenz.
> Ab dem 1. Januar 2023 wird Ihnen das Pro Abo dann nach dem geltenden Tarif berechnet.

Folgen [Sie diesen Anweisungen](#modify), um Ihr Angebot zu wechseln.

## Weiterführende Informationen <a name="gofurther"></a>

[Statistiken und Logs eines Webhostings einsehen](https://docs.ovh.com/de/hosting/webhosting_die_statistiken_und_logs_meiner_website_einsehen/)

[Optimierung der Performance Ihrer Webseite](https://docs.ovh.com/de/hosting/webhosting_optimierung_der_performance_ihrer_webseite/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
