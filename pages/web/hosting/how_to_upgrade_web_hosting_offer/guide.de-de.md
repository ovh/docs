---
title: "Webhosting-Angebot anpassen"
excerpt: "Hier erfahren Sie, wie Sie die Abonnementformel Ihres OVHcloud Webhosting-Angebots ändern."
slug: how_to_change_web_hosting_offer
section: Webseitenoptimierung
order: 2
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Stand 19.05.2022**

## Ziel

Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) erlaubt es Ihnen, [die Kapazitäten Ihrer Webhosting Angebote](https://www.ovhcloud.com/de/web-hosting/) zu erhöhen, um über leistungsfähigeres Hosting, mehr Speicherplatz, Datenbanken, E-Mail-Adressen oder zusätzliche Funktionen wie [Mailinglisten](https://docs.ovh.com/de/emails/webhosting_e-mail_verwendung_von_mailinglisten/) zu verfügen (vom [Pro](https://www.ovhcloud.com/de/web-hosting/professional-offer/)Angebot aus) oder über [SQL Private](https://www.ovhcloud.com/de/web-hosting/options/private-sql/) Service (inklusive der SQL Angebote der [PerformanceNenner](https://www.ovhcloud.com/de/web-hosting/performance-offer/)).

**In dieser Anleitung erfahren Sie, wie Sie Ihr OVHcloud Hosting-Angebot ununterbrochen skalieren.**

## Voraussetzungen

- Sie verfügen [über ein Webhosting](https://www.ovhcloud.com/de/web-hosting/)
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.

## In der praktischen Anwendung

> [!success]
>
> **Sie möchten Ihr Hosting temporär boosten?**
>
> Mit der [BOOST](https://www.ovhcloud.com/de/web-hosting/options/boost/) Option, verfügbar für unsere *Performance* Angebote, können Sie die Ressourcen Ihres Hostings vorübergehend anpassen, um einen punktuellen Anstieg des Traffics zu bewältigen. Wenn der Grad der Auslastung dauerhaft hoch bleibt, können Sie auch zu einer noch leistungsfähigeren Lösung wechseln. Mit dieser verfügen Sie dann permanent über mehr Ressourcen. 
>

### Wichtig - Abrechnung bei einem Angebotswechsel

Wenn Sie Ihr Abo-Angebot ändern, *wird* die Laufzeit Ihres neuen Angebots verlängert. Diese Verlängerung entspricht der verbleibenden Vertragslaufzeit Ihres derzeitigen Angebots.

**Beispiel:**<br>
Sie wechseln von einem [Basic](https://www.ovhcloud.com/de/web-hosting/personal-offer/) zu einem [Pro](https://www.ovhcloud.com/de/web-hosting/professional-offer/) Angebot, obwohl das laufende Abonnement noch nicht abgeschlossen ist.<br>
Die verbleibende Laufzeit wird daher automatisch **pro rata temporis** zu Ihrem neuen Pro Abo **hinzugefügt**.<br>
Die Laufzeit des Programms beträgt somit **etwas mehr als ein** Jahr, bis die nächste Verlängerung erfolgt.

### Ihr Webhosting-Angebot bearbeiten <a name="modify"></a>

> [!primary]
>
> Die Änderung Ihres Abos für ein Angebot mit weniger Ressourcen ist nur möglich, wenn es sich um das nächstniedrigere **Angebot handelt**.
> So können Sie zum Beispiel nicht von einer *Performance 2* auf eine *Pro* Lösung wechseln.
> Sie müssen **Ihr** Hosting zunächst von *Performance 2* zum *Performance 1* Hosting **und dann** zum *Pro* Angebot umstellen.
>
> Die folgenden Elemente betreffen kostenpflichtige Angebote. Um Ihr kostenloses [Start 10M Hosting](https://docs.ovh.com/de/hosting/start10m-aktivieren/) anzupassen, folgen Sie [diesen Anweisungen](#start10m).
>

> [!warning]
>
> **Bevor** Sie Ihr Abonnement auf ein niedrigeres Angebot ändern, überprüfen Sie bitte, ob die Verwendung Ihres aktuellen Angebots mit den Eigenschaften Ihres [nächsten Webhosting-Angebots kompatibel ist](https://www.ovhcloud.com/de/web-hosting/).
>
> Befolgen Sie hierzu [diese Anweisungen](#checks), wechseln Sie das Angebot und wiederholen Sie diese Operationen so oft wie nötig.
>

Um Ihr Abonnement zu ändern, begeben Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im Bereich `Web Cloud`{.action}. Klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus.

Klicken Sie im Rahmen `Abonnement` auf `...`{.action} rechts neben `Angebot` und dann auf `Angebot wechseln`{.action}.

![change_plan](images/change_plan.png){.thumbnail}

Wählen Sie dann Ihr neues Abonnement und dessen Dauer aus. Bestätigen Sie die entsprechenden Verträge und klicken Sie dann auf `Absenden`{.action}.

### Ihr Start 10M Hosting auf ein leistungsfähigeres Angebot umstellen <a name="start10m"></a>

> [!primary]
>
> Das folgende Verfahren gilt nur, **wenn Sie das E-Mail-Angebot für das Start 10M aktiviert haben**.
>
> Wenn Sie das E-Mail-Angebot nicht aktiviert haben, sind die Anweisungen im [vorherigen Abschnitt](#modify) ausreichend.
>

Sie können nicht **direkt** von einem kostenlosen [Start 10M Hosting](https://docs.ovh.com/de/hosting/start10m-aktivieren/) auf ein kostenpflichtiges Angebot umstellen. Folgende Operationen sind durchzuführen:

1. Speichern Sie erforderlichenfalls die [Dateien Ihres Hostings](https://docs.ovh.com/de/hosting/website-exportieren/#schritt-1-dateien-von-ihrem-ftp-speicherplatz-abrufen) und die [Nachrichten Ihres E-Mail Angebots](https://docs.ovh.com/de/emails/email-adressen-manuell-migrieren/)<br>.
2. Starten Sie die Löschung Ihres Start 10M. Klicken Sie hierzu oben rechts auf Ihren Namen und dann auf der `Dienstverwaltung`{.action}. Klicken Sie dann rechts neben dem betreffenden Dienst auf `...`{.action}. und dann auf `Hosting sofort löschen`{.action}.<br>
3. Erstellen Sie ein [Support-Ticket](https://help.ovhcloud.com/de/faq/support/cant-reach-support-phone/), um auf Wunsch die beschleunigte Löschung Ihres Angebots zu beantragen (eine Start 10M E-Mail-Adresse wird standardmäßig 14 Tage gespeichert, um jeglichen Datenverlust aufgrund eines Handhabungsfehlers zu vermeiden)<br>.
4. [Bestellen Sie ein neues Webhosting-Angebot](https://www.ovhcloud.com/de/web-hosting/).<br>
5. Importieren Sie Ihre Website erforderlichenfalls in Ihren [neuen Hosting-Bereich](https://docs.ovh.com/de/hosting/webhosting_meine_seite_online_stellen/#schritt-2-websitedateien-im-speicherplatz-online-stellen).<br>
6. [Fügen Sie den Domainnamen Ihrer Website zur Multisite Ihres neuen Angebots hinzu](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/#schritt-2-eine-domain-oder-subdomain-hinzufugen).<br>
7. [Erstellen Sie bei Bedarf Ihre E-Mail](https://docs.ovh.com/de/emails/e-mail-adresse-erstellen/)-Adresse und [importieren Sie Ihre Nachrichten](https://docs.ovh.com/de/emails/email-adressen-manuell-migrieren/).

### Überprüfen, ob Ihr Hosting mit einem niedrigeren Angebot kompatibel ist <a name="checks"></a>

#### Anzahl der Websites

Mit dem [Kimsufi Web](https://www.kimsufi.com/de/) Angebot können Sie nicht mehr als einen Domainnamen auf der [Multisite](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/) Ihres Hostings verwenden.

Bevor Sie vom [Basic](https://www.ovhcloud.com/de/web-hosting/personal-offer/) Angebot zum [Kimsufi Web](https://www.kimsufi.com/de/) Angebot wechseln, überprüfen Sie, dass Ihr Hosting nur eine einzige Website enthält.

#### Start SQL-Datenbanken

Bevor Sie Ihr Hosting auf ein niedrigeres Angebot umstellen, überprüfen Sie bitte, dass das neue Angebot genügend [Datenbanken enthält](https://www.ovhcloud.com/de/web-hosting/options/start-sql/). Überprüfen Sie auch, ob sie groß genug sind.

Ist dies nicht der Fall, löschen Sie ungenutzte Datenbanken und verringern Sie gegebenenfalls die Datenmenge, die diese enthalten. Diese Anzahl darf die maximale Größe der Datenbanken des neuen Angebots nicht überschreiten (bei jeder Support-Anfrage zu den durchzuführenden Operationen wenden Sie sich an die [OVHcloud Partner](https://partner.ovhcloud.com/de/)).

Nachdem Sie Ihre Datenbanken gelöscht haben, denken Sie daran, das verwendete Quota im Tab `Datenbanken`{.action} im Bereich `Hosting-Pakete`{.action} Ihres Kundencenters neu zu berechnen. Klicken Sie rechts neben der betreffenden Datenbank auf `...`{.action} und dann auf `Das Quota neu berechnen`{.action}.

![Quota](images/quota.png){.thumbnail}

#### CloudDB

Wenn Sie das bei Ihrem Hosting enthaltene [CloudDB](https://docs.ovh.com/de/hosting/erste-schritte-mit-clouddb/#aktivierung-des-in-ihrem-webhosting-angebot-enthaltenen-clouddb-servers) [Performance](https://www.ovhcloud.com/de/web-hosting/performance-offer/) verwenden und Ihr Hosting auf ein [Pro](https://www.ovhcloud.com/de/web-hosting/professional-offer/) Angebot umstellen möchten, gehen Sie in den Bereich `Hosting`{.action} Ihres Kundencenters.<br>
Klicken Sie auf den Button `...`{.action} im Bereich Private Datenbanken {.action} und dann auf `Abtrennen`{.action}.

![clouddb](images/clouddb.png){.thumbnail}

Mit dieser Aktion können Sie ein CloudDB Angebot bestellen, das unabhängig von Ihrem *Performance* Abo ist. Die Daten Ihres Servers werden gespeichert.

Wenn Sie diese Daten nicht speichern möchten, können Sie auch Ihr SQL Private löschen, bevor Sie zum *Pro* Angebot wechseln: 

1. Speichern Sie Ihre Daten gemäß den Anweisungen in dieser [Anleitung](https://docs.ovh.com/de/hosting/backup-eine-datenbank-exportieren/).<br>
2. Löschen Sie Ihren CloudDB Server über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Klicken Sie hierzu oben rechts auf Ihren Namen und dann auf der `Dienstverwaltung`{.action}. Klicken Sie dann rechts neben der betreffenden Zeile auf `...`{.action} und dann auf `Mein SQL Private Hosting kündigen`{.action}.

#### FTP Bereich

Bevor Sie Ihr Webhosting auf ein niedrigeres Angebot umstellen, stellen Sie sicher, dass das neue [Angebot ausreichend FTP](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/)-Speicherplatz zur Verfügung steht, damit die Dateien Ihres aktuellen Webhostings importiert werden können.

Das auf Ihrem FTP-Hosting verwendete Quota ist im Bereich `Hosting-Pakete`{.action} Ihres Kundencenters einsehbar. Klicken Sie auf den Tab `Allgemeine Informationen`{.action}, Sie finden das Quota im `Speicherplatz`.

![ftp](images/ftp.png){.thumbnail}

#### E-Mail Adressen

Überprüfen Sie außerdem, dass Ihr neues Angebot eine ausreichende Anzahl verfügbarer E-Mail-Adressen bietet. Falls nicht, löschen Sie die überflüssigen Adressen, nachdem Sie diese [gegebenenfalls](https://docs.ovh.com/de/emails/email-adressen-manuell-migrieren/) gespeichert haben.

Wenn Sie die gleiche Anzahl an E-Mail-Accounts behalten möchten, können Sie vor der Umstellung Ihres Hostings auf ein niedrigeres Angebot auch ein neues **MX Plan E-Mail-Angebot bestellen**. Klicken Sie im Bereich `E-Mails`{.action}  in Ihrem Kundencenter auf das betreffende Angebot und dann auf den Button `...`{.action} rechts neben `Angebot`. Klicken Sie anschließend auf `Zu einem anderen Angebot wechseln`{.action}.

![mxplan](images/mxplan.png){.thumbnail}

#### Mailinglisten

Die [Mailinglisten](https://docs.ovh.com/de/emails/webhosting_e-mail_verwendung_von_mailinglisten/) Funktion ist optional bei den [Basic](https://www.ovhcloud.com/de/web-hosting/personal-offer/) und [Kimsufi Web](https://www.kimsufi.com/de/) Hostings.

Um Ihr Hosting auf ein [Basic](https://www.ovhcloud.com/de/web-hosting/personal-offer/) Angebot umzustellen, müssen Sie zunächst Mailinglisten entfernen oder ein E-Mail-Angebot mit dieser Funktion (**MX Plan** oder **MX Full** Plan) über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) bestellen.

Wählen Sie im Bereich `E-Mails`{.action} in Ihrem Kundencenter das betreffende Angebot aus und klicken Sie dann auf `...`{.action} rechts neben `Angebot`{.action}. Klicken Sie anschließend auf `Zu einem anderen Angebot wechseln`{.action}.

## Mehr <a name="gofurther"></a>

[Statistiken und Logs meiner auf einem Shared Hosting Angebot gehosteten Website einsehen](https://docs.ovh.com/de/hosting/webhosting_die_statistiken_und_logs_meiner_website_einsehen/)

[Optimierung der Performance Ihrer Webseite](https://docs.ovh.com/de/hosting/webhosting_optimierung_der_performance_ihrer_webseite/)

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/de/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, lesen Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
