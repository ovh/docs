---
title: Verwaltung einer Office 365 Reseller Lizenzgruppe (CSP2) bei OVHcloud
slug: verwaltung_einer_office_365_reseller_lizenzgruppe_csp2
excerpt: Erfahren Sie hier, wie Sie einen Office 365 Reseller Dienst (CSP2) bei OVHcloud abonnieren und verwalten
section: Office
order: 3
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 17.06.2022**

## Ziel

Office 365 Reseller (CSP2) ist ein Dienst, mit dem Sie verschiedene Arten von Microsoft 365 Lizenzen zu Sonderpreisen nutzen können, damit Sie diese bei Ihren Kunden verkaufen können.

**Diese Anleitung erklärt, wie Sie einen Office 365 Reseller Dienst (CSP2) bei OVHcloud abonnieren und verwalten.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie verfügen über eine MPN ID (Microsoft Partner Network Identifikationsnummer).
- Sie sind im CSP-Programm (Cloud Solutions Provider) von Microsoft als indirekter Reseller in der Region, in der Sie operieren, angemeldet (z.B.: "EU" für Europa).

> [!warning]
>
> Ab dem 01.07.2022 werden alle Office 365 Reseller Dienstleistungen (CSP2), die nicht über eine im Programm "Indirekter CSP Reseller" eingetragene MPN ID verfügen, von Microsoft deaktiviert.
>
> Es muss nun eine MPN ID für jede Neubestellung vorhanden sein.
>

Wenn Sie noch nicht über eine MPN ID verfügen, können Sie eine erstellen (falls Sie die Bedingungen von Microsoft erfüllen), indem Sie die [offizielle Microsoft Dokumentation](https://docs.microsoft.com/de-de/partner-center/mpn-create-a-partner-center-account){.external} befolgen.

Um sich als indirekter Reseller anzumelden, folgen Sie [dieser offiziellen Microsoft Dokumentation](https://docs.microsoft.com/de-de/partner-center/enrolling-in-the-csp-program#enroll-as-an-indirect-reseller){.external}.

> [!success]
>
> Mit der MPN ID erhalten Sie ein Cashback zu den Abonnements, die Sie über das OVHcloud Kundencenter bestellen. Dieses Cashback unterliegt den von Microsoft festgelegten Regeln, abhängig von der Anzahl der von Ihnen erstellten Abonnements.
>

## In der praktischen Anwendung

### Office 365 Reseller bestellen

Um einen Office 365 Reseller Dienst zu bestellen, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie `Sunrise`{.action} im oberen Menu aus. Klicken Sie dann auf `Office 365 Revendeurs`{.action}.

- Geben Sie Ihre zuvor bei Microsoft erstellte MPN ID ein.
- Vervollständigen Sie die Kontaktinformationen des Endkunden. Diese werden angefordert, um den Manager der Lizenzgruppe ("Tenant") zu definieren, die Sie erstellen möchten.

> [!primary]
>
> Sie können bei der Erstellung einer neuen Plattform auch eine **personalisierte Subdomain** definieren, indem Sie das entsprechende Feld anhaken (sofern die Namen verfügbar sind).


- Geben Sie in der Liste die Lizenzen ein, die Sie zu Ihrer Gruppe hinzufügen möchten.
- Klicken Sie auf `Bestellen`{.action}, um Ihre Bestellung abzuschließen.

> [!warning]
>
> Bitte überprüfen Sie die Gültigkeit der bei der Erstellung Ihrer Lizenzgruppe angegebenen E-Mail-Adresse, da diese die Login-Daten der Microsoft Plattform erhält.
>

![office365](images/csp2-01.png){.thumbnail}

#### Sonderfall Delegationen

- Wenn Sie bereits über einen Office 365 CSP2 Dienst bei Microsoft verfügen, können Sie dessen Administration an OVHcloud delegieren. So können Sie direkt über Ihr OVHcloud Kundencenter zusätzliche Abonnements hinzufügen. Wenn Sie eine neue Lizenzgruppe bestellen, wählen Sie `Eine bei Microsoft erstellte Plattform delegieren` aus und geben Sie den **Office 365 Tenant*** ein, den Sie in Ihrem Microsoft Portal zusammen mit Ihrer MPN ID einsehen können. 

- Wenn Sie bereits einen anderen Anbieter als OVHcloud für Ihr Office 365 Reseller nutzen, können Sie die Verwaltung auch an OVHcloud delegieren, müssen aber vorher die Anbindung zu Ihrem bisherigen Anbieter beenden.

- Es ist eine doppelte Validierung erforderlich, um das Start des Tenant in Ihrem OVHcloud Kundencenter abzuschließen.

- Sobald der delegierte Tenant abonniert ist, werden die Lizenzen in Ihrem [Microsoft Verwaltungsportal](https://portal.office.com/Admin/Default.aspx){.external} verfügbar. Ersetzen Sie anschließend Ihre alten Lizenzen in Ihrem [Microsoft Verwaltungsportal](https://portal.office.com/Admin/Default.aspx){.external} durch die OVHcloud Lizenzen und kündigen Sie Ihre alten Lizenzen, damit Sie nicht doppelt bezahlen müssen.

- Lizenzen, die bei OVHcloud nicht verfügbar sind, bleiben weiterhin bei Microsoft aktiv.

> [!warning]
> Da es sich um lizenzierte Produkte handelt, ist es nicht möglich, einen Office 365 Reseller Tenant von einem OVHcloud Kunden-Account auf einen anderen zu wechseln.
>

### Office 365 Reseller Dienste verwalten

Sobald der Office 365 Dienst verfügbar ist, können Sie ihn über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) verwalten.

Gehen Sie hierzu in den Bereich `Sunrise`{.action}. Im Menü auf der linken Seite wählen Sie `Office 365 Revendeurs`{.action}, und dann den Dienst aus.

Folgende Angaben werden angezeigt:

- **Interner Servicename**: Zeigt den Namen Ihrer Dienstleistung an. Dieser ist nur in Ihrem Kundencenter sichtbar. Er entspricht auch dem Tenant (der Ihre Lizenzgruppe enthält) bei Microsoft.
- **Anzeigename des Dienstes**: Erlaubt es, den Anzeigenamen des Dienstes in Ihrem Kundencenter zu personalisieren.
- **Erstellt am**: Gibt das Erstellungsdatum des Dienstes an.
- **Microsoft Verwaltungsportal**: URL zur Office Verwaltungsoberfläche, über die Sie Ihre Abonnements verwalten können.
- **Das Administrator-Passwort zurücksetzen**: Ermöglicht die Änderung des Login-Passworts zum Microsoft Administrationsportal.

![office365](images/sunrise_office365_CSP2_services_details.png){.thumbnail}

### Eine bei OVHcloud gehostete Domain automatisch konfigurieren

OVHcloud stellt Ihnen ein Tool zur Verfügung, das die Konfiguration der DNS-Zone Ihres Domainnamens vereinfacht. So können Sie Domainnamen, die OVHcloud DNS-Zonen verwenden, automatisch konfigurieren, damit sie mit folgenden Lösungen funktionieren:

- Exchange Online
- Skype
- Intune

Wählen Sie hierzu die entsprechende Domain in der Drop-down-Liste und anschließend die gewünschten Lösungen aus. Wir erstellen dann die entsprechenden DNS-Einträge in der OVHcloud DNS-Zone der Domain.

> [!warning]
> Damit die Konfiguration funktioniert, müssen Sie sicherstellen, dass Sie die OVHcloud DNS-Server für die betreffenden Domains verwenden. Lesen Sie dazu unsere Anleitung "[DNS-Server einer OVHcloud Domain ändern](https://docs.ovh.com/de/domains/webhosting_allgemeine_informationen_zu_den_dns_servern/)".
>

![office365](images/sunrise_office365_CSP2_automatic_domain_configuration.png){.thumbnail}

### Ihre Abos verwalten

Mit der Verwaltung Ihrer Abos können Sie die zu Ihrer Abonnementgruppe gehörenden Lizenzen erhöhen oder stornieren. Die Details können Sie in der Tabelle sehen:

- **ID**: Jeder Typ einer bestellten Lizenz verfügt über eine eindeutige Kennung (ID).
- **Status**: Zeigt den Status Ihrer Lizenz.
- **Name der Lizenz**: Gibt die Art der bestellten Lizenz an.
- **Anzahl der Lizenzen**: Gibt die Anzahl der verfügbaren Lizenzen an.
- **Erstellungsdatum**: Gibt das Erstellungsdatum des Abonnements für den ausgewählten Lizenztyp an.
- **Letztes Update**: Gibt das Datum an, an dem das Abonnement zuletzt aktualisiert wurde (z.B. durch Hinzufügen einer Lizenz).

Mit dem Stift-Button können Sie die Gesamtzahl der Lizenzen des Abonnements ändern. Mit dem Papierkorb-Button können Sie das Abonnement und alle Lizenzen kündigen.

> [!primary]
>
> Für Office 365 Education sind besondere Lizenzbedingungen von Microsoft einzuhalten. Die entsprechenden offiziellen Dokumente stehen Ihnen je nach Region und Sprache [hier](http://www.microsoftvolumelicensing.com/DocumentSearch.aspx?Mode=2&Keyword=AcademicQualEdUserDef){.external} zur Verfügung.
>

![office365](images/sunrise_office365_CSP2_Subscribers.png){.thumbnail}

### Benutzer verwalten

Sobald Sie über eine ausreichende Anzahl an Lizenzen verfügen, müssen Sie die Benutzer verwalten, die diese verwenden. Dieser Schritt erfolgt direkt über das [Verwaltungsportal von Microsoft](https://portal.office.com/Admin/Default.aspx){.external}.

Um sich dort einzuloggen, geben Sie Ihre Kundenkennung und das Passwort ein, das Sie in der Bestätigungsmail von OVHcloud zur Installation Ihrer Lizenzgruppe erhalten haben. Diese Informationen werden an die bei der Erstellung der Lizenzgruppe angegebene Adresse versandt.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
