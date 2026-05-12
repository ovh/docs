---
title: "Server Ihrer Datenbank identifizieren"
excerpt: "Erfahren Sie, wie Sie den Namen des Servers ermitteln können, auf dem Ihre Datenbank gehostet wird, die mit Ihrem Webhosting verbunden ist"
updated: 2026-02-12
---

## Ziel

Während der Nutzung Ihrer Dienste können Sie gelegentlich den Namen des SQL-Servers benötigen, auf dem sich Ihre Datenbank befindet (entweder inbegriffen oder als Ergänzung über Ihr [Webhosting](/links/web/hosting) bestellt).

> [!warning]
>
> Diese Anleitung gilt nicht für Datenbanken, die sich auf einer [Web Cloud Databases](/links/web/databases) Lösung befinden.

**Diese Anleitung erklärt, wie Sie den Namen des Servers ermitteln können, der Ihre Datenbank hostet, die mit Ihrem Webhosting verbunden ist.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting).
- Sie verwenden eine im Webhosting inkludierte oder eine [zusätzliche Datenbank](/links/web/hosting-options-startsql).

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

Klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Datenbanken`{.action}.
>>
>> ![Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im angezeigten Tabelle suchen Sie die Spalte **Server**.
>>
>> ![Datenbankserver](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}
>>
>> Für die betreffende Datenbank finden Sie in dieser Spalte den Namen des SQL-Servers (z. B. **mysqlXXX.euXXX**), auf dem Ihre Datenbank gehostet wird.
>>
>> > [!warning]
>> >
>> > Verwechseln Sie **Server** nicht mit der **Serveradresse**:
>> >
>> > - Die **Serveradresse** ist ein Zugangsidentifizierer, der spezifisch für Ihre Datenbank ist und es Ihrem Webseiten ermöglicht, sich mit dieser zu verbinden.
>> > - Der **Server** ist die Infrastruktur, die Ihre Datenbank sowie andere Datenbanken hostet. Der Name des Servers hilft Ihnen dabei, zu prüfen, ob dieser von einem Wartungsvorgang oder einem Vorfall betroffen ist, der auf unserer Seite [Web Cloud Status](https://web-cloud.status-ovhcloud.com/) zu finden ist.

## Weiterführende Informationen <a name="go-further"></a>

[Die häufigsten Datenbankfehler beheben](/pages/web_cloud/web_hosting/diagnosis_database_errors)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.