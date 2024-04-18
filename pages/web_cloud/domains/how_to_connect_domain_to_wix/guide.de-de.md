---
title: So verbinden Sie eine OVHcloud Domain mit einem Wix-Hosting
excerpt: Bereiten Sie die DNS-Zone Ihrer OVHcloud Domain vor und konfigurieren Sie sie, um sie mit einem Wix-Hosting zu verbinden
updated: 2024-04-17
---

## Ziel

Sie besitzen einen Domainnamen bei OVHcloud und möchten ihn mit einem Wix-Hosting verbinden. In dieser Anleitung erfahren Sie, wie Sie die OVHcloud DNS-Zone vorbereiten und konfigurieren, um die Konfiguration Ihres Wix-Hostings zu ermöglichen.

**Hier erfahren Sie, wie Sie Ihre OVHcloud Domain mit einem Wix-Hosting verbinden**

> [!warning]
>
> - Der Wix-Support hat keinen Zugriff auf die Einstellungen Ihrer OVHcloud-Domain und kann Sie daher nicht darüber beraten, welche Informationen Sie ihm zur Verfügung stellen müssen.
>
> - OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.<br><br> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt [Weiterführende](#gofurther) Informationen in dieser Anleitung.
>

## Voraussetzungen

- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angemeldet.
- Sie verfügen über einen bei OVHcloud registrierten [Domainnamen](https://www.ovhcloud.com/de/domains/).
- Sie verfügen über die entsprechenden [Berechtigungen zur Verwaltung](/pages/account_and_service_management/account_information/managing_contacts) der Domain über Ihr OVHcloud [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}.
- Sie verfügen über ein Hosting bei Wix.
- Sie haben Zugriff auf die Verwaltung dieses Hostings bei Wix.

## In der praktischen Anwendung

Bevor Sie die beiden Schritte in dieser Anleitung ausführen, sollten Sie sich mit der Konfiguration einer DNS-Zone vertraut machen. Nutzen Sie dazu unsere Anleitung "[Bearbeiten der OVHcloud](/pages/web_cloud/domains/dns_zone_edit) DNS-Zone".

> [!warning]
>
> Ihre DNS-Zone ist möglicherweise bereits konfiguriert oder mit einem Hosting verbunden. In dieser Anleitung erfahren Sie, wie Sie die DNS-Einträge zur Verbindung mit Ihrem Shopify-Hosting konfigurieren. Einige müssen gelöscht werden, um Konflikte mit den erforderlichen DNS-Einträgen zu vermeiden. Andere müssen nur noch geändert oder neu erstellt werden. Für ein besseres Verständnis verwenden wir als Beispiel den Domainnamen "**mydomain.ovh**". Ersetzen Sie ihn bei der Konfiguration durch Ihren Domainnamen.

### 1. Ihr Wix Hosting konfigurieren

** Wenn Sie ein Wix-Hosting mit einem OVHcloud Domainnamen verwenden, müssen Sie zuerst Ihr Hosting gemäß den Anweisungen in **Schritt 1** auf [**dieser Seite der Wix**](https://support.wix.com/de/article/connecter-un-domaine-%C3%A0-wix-par-pointage-5727882)-Dokumentation vorbereiten.

### 2. DNS-Einträge auf Ihrem OVHcloud Account konfigurieren

> [!warning]
>
> Bevor Sie fortfahren: <br>
> - Öffnen Sie einen Tab parallel zu Ihrem Webbrowser.
> - Öffnen Sie [**diese Seite der Wix-Dokumentation**](https://support.wix.com/de/article/connect-un-domain-%C3%A0-wix-par-pointing-5727882){.external}.
> - Gehen Sie auf den Bereich "**Schritt 2 | Aktualisieren Sie die DNS-Einträge im Konto Ihres Domain-Hostings**" der Wix-Dokumentation.<br>
> Die folgenden Anweisungen helfen Ihnen bei der Konfiguration Ihrer OVHcloud DNS-Zone.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den Domainnamen aus der Liste aus. Gehen Sie dann auf den Tab `DNS-Zone`{.action}.

Die Tabelle listet alle DNS-Einträge des ausgewählten Domainnamens auf.

![dnszone](images/tab.png){.thumbnail}

Jeder DNS-Eintrag kann geändert werden, indem Sie rechts in der Zeile auf den Button `...`{.action} und dann auf `Eintrag bearbeiten`{.action} klicken.

Folgen Sie den in den Tabs aufgeführten Schritten:

> [!tabs]
> **Schritt 1**
>> **A-Eintrag**<br><br>
>> Um die vorhandenen A-Einträge zu identifizieren, klicken Sie oben in der Tabelle mit den DNS-Einträgen auf das Filtermenü und wählen Sie `A` aus.<br>
>> ![dnszone](images/filter-a.png){.thumbnail}<br>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile, die Ihrem Domainnamen ohne Subdomain entspricht (Beispiel: `mydomain.ovh.`), und klicken Sie dann auf `Eintrag bearbeiten`{.action}.<br>
>> - Wenn ein Eintrag für die Subdomain "www." vorhanden ist (Beispiel: `www.mydomain.ovh.`), müssen Sie diesen löschen, damit er nicht in Konflikt mit dem CNAME-Eintrag steht, den Sie in Schritt 3 eingeben. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile für Ihre Domain allein und mit der Subdomain "www." und klicken Sie dann auf `Eintrag löschen`{.action}.<br>
>> - Wenn Sie noch keinen A Eintrag haben, klicken Sie auf den Button Einen `Eintrag hinzufügen`{.action} rechts oben auf Ihrem Bildschirm und wählen Sie das "Zeigerfeld" `A`{.action}<br><br>
>> Lassen Sie das Feld **Subdomain** leer und geben Sie die IPv4-Adresse ein, die von Ihrem Wix* Interface im Feld **Ziel** erfasst wird.
>> Klicken Sie auf `Weiter`{.action}, bestätigen Sie Ihren A Eintrag und fahren Sie mit Schritt 2 fort.
> **Schritt 2**
>> **AAAA-Eintrag**<br><br>
>>  Um vorhandene AAAA-Einträge zu identifizieren, klicken Sie oben in der Tabelle mit DNS-Einträgen auf das Filtermenü und wählen Sie `AAAA` aus.<br>
>> ![dnszone](images/filter-aaaa.png){.thumbnail}<br>
>> - Wenn "AAAA"-Einträge für die Domain alleine (Beispiel: `mydomain.ovh.`) und ihre Subdomain mit der Endung "www." (Beispiel: `www.mydomain.ovh.`) vorhanden sind, müssen diese gelöscht werden, damit sie nicht im Konflikt mit den "A" und "CNAME"-Einträgen stehen, die Sie in Schritt 4 eingeben. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile für Ihre Domain allein und mit der Subdomain "www." und klicken Sie dann auf `Eintrag löschen`{.action}.<br>
> **Schritt 3**
>> **TXT-Eintrag**<br><br>
>>  Um vorhandene TXT-Einträge zu identifizieren, klicken Sie oben in der Tabelle mit DNS-Einträgen auf das Filtermenü und wählen `TXT` aus.<br>
>> ![dnszone](images/filter-txt.png){.thumbnail}<br>
>> - Wenn "TXT"-Einträge für die Domain alleine (Beispiel: `mydomain.ovh.`) und ihre Subdomain mit der Endung "www." (Beispiel: `www.mydomain.ovh.`) vorhanden sind, müssen diese gelöscht werden, damit sie nicht im Konflikt mit dem CNAME-Eintrag stehen, den Sie in Schritt 3 eingeben. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile für Ihre Domain allein mit der Subdomain "www." und klicken Sie dann auf `Eintrag löschen`{.action}.<br>
> **Schritt 4**
>> **CNAME-Eintrag**<br><br>
>>  Um vorhandene CNAME-Einträge zu identifizieren, klicken Sie oben in der DNS-Eintragstabelle auf das Filtermenü und wählen Sie `CNAME` aus.<br>
>> ![dnszone](images/filter-cname.png){.thumbnail}<br>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile zu Ihrer Subdomain in "www." (Beispiel: `mydomain.ovh.`) und klicken Sie dann auf Eintrag `bearbeiten`{.action}.<br>
>> - Wenn Sie keinen existierenden "CNAME" Eintrag haben, klicken Sie auf den Button Einen `Eintrag hinzufügen`{.action} rechts oben auf Ihrem Bildschirm und wählen Sie das "`CNAME`{.action}" Daraufzeigefeld.
>> Vervollständigen Sie das Feld **Subdomain** mit dem Wert `www` und geben Sie den Wert aus Ihrem Wix Interface in das Feld **Ziel** ein.<br>
>> Klicken Sie auf `Weiter`{.action} und bestätigen Sie Ihren "CNAME" Eintrag.

Die DNS Zone ist nun so konfiguriert, dass sie mit einem Wix Hosting verbunden wird.

> [!primary]
>
> Die Verifizierung Ihres Domainnamenamens kann bis zu 48 Stunden dauern.

Wenn Sie einen E-Mail-Dienst von OVHcloud nutzen oder eines [unserer E-Mail-Angebote](https://www.ovhcloud.com/de/emails/) abonnieren möchten, müssen Sie auch Ihre DNS-Zone entsprechend konfigurieren. Lesen Sie dazu unsere Anleitung zur [Konfiguration eines MX-Eintrags](/pages/web_cloud/domains/dns_zone_mx).

## Weiterführende Informationen <a name="gofurther"></a>

[DNS-Server von OVHcloud Domainnamen ändern](/pages/web_cloud/domains/dns_server_general_information)

[OVHcloud DNS-Zone für einen Domainnamen erstellen](/pages/web_cloud/domains/dns_zone_create)

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

Um die Verwaltung Ihrer Domainnamen auf einen anderen OVHcloud Kunden-Account zu delegieren, folgen Sie der Anleitung zur [Kontaktverwaltung](/pages/account_and_service_management/account_information/managing_contacts)".

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
