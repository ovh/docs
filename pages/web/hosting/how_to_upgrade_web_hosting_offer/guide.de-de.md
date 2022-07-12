---
title: Webhosting-Dienst anpassen
excerpt: "Hier erfahren Sie, wie Sie das Abonnement Ihres OVHcloud Webhosting-Dienstes ändern"
slug: how_to_change_web_hosting_offer
section: Webseitenoptimierung
order: 2
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 22.06.2022**

## Ziel

Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) erlaubt es Ihnen, [die Kapazitäten Ihrer Webhosting Dienste](https://www.ovhcloud.com/de/web-hosting/) zu erhöhen, um über mehr Rechenleistung, Speicherplatz, Datenbanken, E-Mail-Adressen zu verfügen. Zusätzliche Funktionen wie [Mailinglisten](https://docs.ovh.com/de/emails/webhosting_e-mail_verwendung_von_mailinglisten/) (ab [Pro Dienst](https://www.ovhcloud.com/de/web-hosting/professional-offer/)) oder [Private SQL](https://www.ovhcloud.com/de/web-hosting/options/private-sql/) (inkludiert in Webhostings der Reihe [Performance](https://www.ovhcloud.com/de/web-hosting/performance-offer/)) werden mit einem Upgrade ebenfalls verfügbar.

**Diese Anleitung erklärt, wie Sie Ihr OVHcloud Hosting-Abonnement ohne Dienstunterbrechung skalieren können.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

> [!success]
>
> **Sie möchten Ihr Hosting nur temporär boosten?**
>
> Mit der Option [BOOST](https://www.ovhcloud.com/de/web-hosting/options/boost/), verfügbar für unsere Angebote der Reihe *Performance* , können Sie die Ressourcen Ihres Hostings vorübergehend anpassen, um einen punktuellen Anstieg des Traffics zu bewältigen. Wenn der Grad der Auslastung dauerhaft hoch bleibt, können Sie auch zu einer noch leistungsfähigeren Lösung wechseln. Mit dieser verfügen Sie dann permanent über mehr Ressourcen. 
>

### Wichtig - Abrechnung bei einem Abonnementwechsel

Wenn Sie Ihr Abonnement ändern, wird die verbliebene Laufzeit Ihres alten Dienstes übertragen. Diese Verlängerung entspricht anteilig der verbleibenden Vertragslaufzeit Ihres derzeitigen Angebots.

**Beispiel:**<br>
Sie wechseln von einem [Basic Hosting](https://www.ovhcloud.com/de/web-hosting/personal-offer/) zu einem [Pro Dienst](https://www.ovhcloud.com/de/web-hosting/professional-offer/), wobei das aktuelle Abonnement noch nicht abgelaufen ist.<br>
Die verbleibende Laufzeit wird daher automatisch **pro rata** zu Ihrem neuen Pro Abo **hinzugefügt**.<br>
Die Laufzeit des Dienstes ist somit **entsprechend länger als die regulären 12 Monate**, bis die nächste Verlängerungszahlung ansteht.

### Ihr Webhosting-Angebot wechseln <a name="modify"></a>

> [!primary]
>
> Die Änderung Ihres Abos zu einem Dienst mit weniger Ressourcen ist nur möglich, wenn es sich um das nächstniedrigere **Angebot handelt**.
> So können Sie zum Beispiel nicht von *Performance 2* auf *Pro* wechseln.
> Sie müssen Ihr Hosting **zuerst** von *Performance 2* zum *Performance 1* **und dann** zum *Pro*-Angebot umstellen.
>

> [!warning]
>
> **Bevor** Sie Ihr Abonnement auf ein niedrigeres Angebot ändern, überprüfen Sie, ob die Verwendung Ihres aktuellen Angebots mit den Eigenschaften Ihres [neuen Webhosting-Angebots kompatibel ist](https://www.ovhcloud.com/de/web-hosting/).
>
> Befolgen Sie hierzu [diese Anweisungen](#checks), wechseln Sie das Angebot und wiederholen Sie diese Operationen so oft wie nötig.
>

Um Ihr Abonnement zu ändern, öffnen Sie im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) den Bereich `Web Cloud`{.action}. Klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus.

Klicken Sie im Rahmen `Abonnement` auf `...`{.action} rechts neben `Angebot` und dann auf `Angebot wechseln`{.action}.

![change_plan](images/change_plan.png){.thumbnail}

Wählen Sie dann Ihr neues Abonnement und dessen Dauer aus. Bestätigen Sie die entsprechenden Verträge und klicken Sie dann auf `Absenden`{.action}.

> [!primary]
>
> **Sonderfall**
>
> Ein Upgrade des [Start 10M Webhostings](https://docs.ovh.com/de/hosting/activer-start10m/) ist nur auf das [Basic Hosting](https://www.ovhcloud.com/de/web-hosting/personal-offer/) möglich. Nach einem Wechsel zum Basic Webhosting können Sie dieses jedoch zu allen unseren [Webhosting Angeboten](https://www.ovhcloud.com/de/web-hosting/) migrieren.

### Überprüfen, ob Ihr Hosting mit einem niedrigeren Angebot kompatibel ist <a name="checks"></a>

#### Anzahl der Websites

Mit dem Angebot [Kimsufi Web](https://www.ovhcloud.com/de/web-hosting/old-web-hosting-offers/) können Sie auf Ihrem Hosting nur einen Domainnamen mit [Multisite](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/) verwenden.

Bevor Sie vom [Basic Webhosting](https://www.ovhcloud.com/de/web-hosting/personal-offer/) Angebot zu [Kimsufi Web](https://www.ovhcloud.com/de/web-hosting/old-web-hosting-offers/) wechseln, überprüfen Sie, dass Ihr Hosting nur eine einzige Website enthält.

#### Start SQL Datenbanken

Bevor Sie Ihr Hosting auf ein niedrigeres Angebot umstellen, überprüfen Sie, dass das neue Angebot genügend [Datenbanken enthält](https://www.ovhcloud.com/de/web-hosting/options/start-sql/). Überprüfen Sie auch, ob sie groß genug sind.

Ist dies nicht der Fall, löschen Sie ungenutzte Datenbanken und verringern Sie gegebenenfalls die Datenmenge, die diese enthalten. Diese Anzahl darf die maximale Größe der Datenbanken des neuen Angebots nicht überschreiten (bei Support-Anfragen zu den durchzuführenden Operationen wenden Sie sich an die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/)).

Nachdem Sie Ihre Datenbanken gelöscht haben, denken Sie daran, die genutzte Quota im Tab `Datenbanken`{.action} im Bereich `Hosting-Pakete`{.action} Ihres Kundencenters neu zu berechnen. Klicken Sie rechts neben der betreffenden Datenbank auf `...`{.action} und dann auf `Das Quota neu berechnen`{.action}.

![Quota](images/quota.png){.thumbnail}

#### CloudDB

Wenn Sie die in Ihrem Hosting der Reihe [Performance](https://www.ovhcloud.com/de/web-hosting/performance-offer/) enthaltene [CloudDB](https://docs.ovh.com/de/hosting/erste-schritte-mit-clouddb/#aktivierung-des-in-ihrem-webhosting-angebot-enthaltenen-clouddb-servers) verwenden und Ihr Hosting auf [Pro](https://www.ovhcloud.com/de/web-hosting/professional-offer/) umstellen möchten, gehen Sie in den Bereich `Hosting-Pakete`{.action} Ihres Kundencenters.<br>
Klicken Sie im Bereich `Konfiguration`{.action} auf den Button `...`{.action} und dann auf `Abtrennen`{.action}.

![clouddb](images/clouddb.png){.thumbnail}

Mit dieser Aktion können Sie einen CloudDB Dienst bestellen, der unabhängig von Ihrem *Performance* Abo ist. Die Daten Ihres Servers werden gespeichert.

Wenn Sie diese Daten nicht speichern möchten, können Sie auch einfach den Private SQL löschen, bevor Sie zum *Pro* Angebot wechseln.

1. Speichern Sie Ihre Daten gemäß den Anweisungen in dieser [Anleitung](https://docs.ovh.com/de/hosting/backup-eine-datenbank-exportieren/).<br>
2. Löschen Sie Ihren CloudDB Server über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Klicken Sie hierzu oben rechts auf Ihren Namen und dann auf der `Dienstverwaltung`{.action}. Klicken Sie dann rechts in der betreffenden Zeile auf `...`{.action} und dann auf `Mein SQL Private Hosting kündigen`{.action}.

#### FTP Bereich

Bevor Sie Ihr Webhosting auf ein niedrigeres Angebot umstellen, stellen Sie sicher, dass im [gewünschten Angebot ausreichend FTP-Speicherplatz](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) zur Verfügung steht, damit die Dateien Ihres aktuellen Webhostings importiert werden können.

Das auf Ihrem FTP-Hosting verwendete Quota ist im Bereich `Hosting-Pakete`{.action} Ihres Kundencenters einsehbar. Sie finden die Quota-Anzeige im Tab `Allgemeine Informationen`{.action} unter `Speicherplatz`.

![ftp](images/ftp.png){.thumbnail}

#### E-Mail Accounts

Überprüfen Sie außerdem, dass Ihr neues Angebot eine ausreichende Anzahl verfügbarer E-Mail-Accounts bietet. Falls nicht, löschen Sie die überflüssigen Accounts, nachdem Sie diese gegebenenfalls [gesichert haben](https://docs.ovh.com/de/emails/email-adressen-manuell-migrieren/).

Wenn Sie die gleiche Anzahl an E-Mail-Accounts behalten möchten, können Sie vor der Umstellung Ihres Hostings auf ein niedrigeres Angebot auch ein neues **MX Plan E-Mail-Angebot bestellen**. Klicken Sie im Bereich `E-Mails`{.action} in Ihrem Kundencenter auf das betreffende Angebot und dann auf den Button `...`{.action} rechts neben `Angebot`. Klicken Sie anschließend auf `Zu einem anderen Angebot wechseln`{.action}.

![mxplan](images/mxplan.png){.thumbnail}

#### Mailinglisten

Die [Mailinglisten-Funktion](https://docs.ovh.com/de/emails/webhosting_e-mail_verwendung_von_mailinglisten/) ist optional bei den [Basic Hostings](https://www.ovhcloud.com/de/web-hosting/personal-offer/) und [Kimsufi Web](https://www.ovhcloud.com/de/web-hosting/old-web-hosting-offers/).

Um Ihr Hosting auf ein [Basic Hosting](https://www.ovhcloud.com/de/web-hosting/personal-offer/) umzustellen, müssen Sie zunächst Mailinglisten entfernen oder ein E-Mail-Angebot mit dieser Funktion (**MX Plan 100** oder **MX Plan Full**) über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) bestellen.

Wählen Sie im Bereich `E-Mails`{.action} in Ihrem Kundencenter den betreffenden Dienst aus und klicken Sie dann auf `...`{.action} rechts neben `Angebot`{.action}. Klicken Sie anschließend auf `Zu einem anderen Angebot wechseln`{.action}.

## Weiterführende Informationen <a name="gofurther"></a>

[Statistiken und Logs eines Webhostings einsehen](https://docs.ovh.com/de/hosting/webhosting_die_statistiken_und_logs_meiner_website_einsehen/)

[Optimierung der Performance Ihrer Webseite](https://docs.ovh.com/de/hosting/webhosting_optimierung_der_performance_ihrer_webseite/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
