---
title: "Wie Sie den Server Ihrer Datenbank identifizieren"
excerpt: "Erfahren Sie, wie Sie den Namen des Servers ermitteln können, auf dem Ihre gemeinschaftliche Datenbank gehostet wird, der mit Ihrem Webhosting-Service verbunden ist"
updated: 2026-02-11
---

## Ziel

Während der Nutzung Ihrer Dienste können Sie gelegentlich den Namen des SQL-Servers benötigen, auf dem sich Ihre Datenbank befindet (entweder inbegriffen oder als Ergänzung über Ihr [Webhosting](/links/web/hosting) bestellt).

> [!warning]
>
> Dieses Handbuch gilt nicht für Datenbanken, die sich auf einer [Web Cloud Databases](/links/web/databases)-Lösung befinden.

**Erfahren Sie, wie Sie den Namen des Servers ermitteln können, der Ihre gemeinschaftliche Datenbank hostet, die mit Ihrem Webhosting-Service verbunden ist.**

## Voraussetzungen

- Ein [OVHcloud Webhosting-Service](/links/web/hosting) besitzen.
- Angemeldet sein in Ihrem [OVHcloud Kundencenter](/links/manager).
- Eine inbegriffene oder [als Ergänzung bestellte](/links/web/hosting-options-startsql) Datenbank über Ihr Webhosting nutzen.

## In der praktischen Anwendung

Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Tab `Datenbanken`{.action}.
>>
>> ![Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Im angezeigten Tabelle suchen Sie die Spalte **Server**.
>>
>> ![Datenbankserver](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}
>>
>> Für die betreffende Datenbank finden Sie in dieser Spalte den Namen des SQL-Servers (z. B. **mysqlXXX.euXXX**), auf dem Ihre gemeinschaftliche Datenbank gehostet wird.
>>
>> > [!warning]
>> >
>> > Verwechseln Sie **Server** nicht mit der **Serveradresse** :
>> >
>> > - Die **Serveradresse** ist ein Zugangsidentifizierer, der spezifisch für Ihre Datenbank ist und es Ihrem Webseiten ermöglicht, sich mit dieser zu verbinden.
>> > - Der **Server** ist die Infrastruktur, die Ihre Datenbank sowie andere Datenbanken hostet. Der Name des Servers hilft Ihnen dabei, zu prüfen, ob dieser von einem Wartungsvorgang oder einem Vorfall betroffen ist, der auf unserer Seite [Web Cloud Status](https://web-cloud.status-ovhcloud.com/) angekündigt wurde.

## Weiterführende Informationen <a name="go-further"></a>

[Die häufigsten Datenbankfehler beheben](/pages/web_cloud/web_hosting/diagnosis_database_errors)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.