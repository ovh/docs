---
title: Verwaltung einer Office 365 Reseller Lizenzgruppe (CSP2) bei OVHcloud
slug: verwaltung_einer_office_365_reseller_lizenzgruppe_csp2
excerpt: Erfahren Sie hier, wie Sie einen Office 365 Reseller Dienst (CSP2) bei OVHcloud abonnieren und verwalten
section: Office
order: 03
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 17.06.2022**

## Ziel

Office 365 Reseller (CSP2) ist ein Dienst, mit dem Sie verschiedene Arten von Microsoft 365 Lizenzen zu Sonderpreisen nutzen können, damit Sie diese bei Ihren Kunden verkaufen können.

**Diese Anleitung erklärt, wie Sie einen Office 365 Reseller Dienst (CSP2) bei OVHcloud abonnieren und verwalten.**

## Voraussetzungen

- Sie sind im OVHcloud [Kundencenter eingeloggt](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)
- Sie verfügen über eine [MPN ID](https://learn.microsoft.com/partner-center/mpn-create-a-partner-center-account) (Microsoft Partner Network IDe) 
- Sie sind im CSP (Cloud Solutions Provider) Programm von Microsoft als indirekter Reseller in der Region angemeldet, in der Sie arbeiten (zum Beispiel: "EU"für Europa)

> [!warning]
>
> Seit dem 01.07.2022 werden alle Office 365 Reseller Dienstleistungen (CSP2), die nicht über eine im Programm "CSP indirekter Reseller"eingetragene MPN-ID verfügen, von Microsoft deaktiviert.
>
> Sie müssen nun über eine MPN-ID für jede Neubestellung verfügen.
>

Wenn Sie noch nicht über eine MPN ID verfügen, können Sie eine MPN ID erstellen (wenn Sie die Bedingungen von Microsoft erfüllen können), [indem Sie die offizielle Dokumentation von Microsoft befolgen."Was ist das Microsoft Cloud Partner Program? "](https://docs.microsoft.com/partner-center/mpn-create-a-partner-center-account){.external}.

Um sich dann als indirekter Reseller anzumelden, lesen Sie die Microsoft Dokumentation "Sich [beim Cloud Anbieter anmelden"](https://docs.microsoft.com/partner-center/enrolling-in-the-csp-program#enroll-as-an-indirect-reseller){.external}.

Mit der MPN ID erhalten Sie ein Cashback zu den Abonnements, die Sie über das OVHcloud Kundencenter bestellen. Dieses Cashback unterliegt den von Microsoft festgelegten Regeln, abhängig von der Anzahl der von Ihnen erstellten Abonnements.

> [!success]
>
> Mit der MPN ID erhalten Sie ein Cashback zu den Abonnements, die Sie über das OVHcloud Kundencenter bestellen. Dieses Cashback unterliegt den von Microsoft festgelegten Regeln, abhängig von der Anzahl der von Ihnen erstellten Abonnements.
>

## In der praktischen Anwendung

### Office 365 Reseller bestellen

Um einen Office 365 Reseller Dienst zu bestellen, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie `Sunrise`{.action} im oberen Menu aus. Klicken Sie dann auf `Office 365 Revendeurs`{.action}.

- *Optional*: Sie können bei **der Erstellung** einer neuen Plattform eine personalisierte Subdomain definieren, indem Sie das dafür vorgesehene Feld ankreuzen (unter Vorbehalt der verfügbaren Namen).
- Geben Sie Ihre zuvor bei Microsoft erstellte MPN ID ein.
- Vervollständigen Sie die Kontaktinformationen des Endkunden. Diese werden angefordert, um die Verwaltung der Lizenzgruppe (*Tenant*) zu definieren, die Sie erstellen möchten.
- Fügen Sie in der unten stehenden Liste die Lizenzen hinzu, die Sie in Ihre Gruppe integrieren möchten.
- Klicken Sie auf `Bestellen`{.action}, um den Vorgang abzuschließen.

> [!warning]
> Bitte überprüfen Sie die Gültigkeit der bei der Erstellung Ihrer Lizenzgruppe angegebenen E-Mail-Adresse, da diese für den Empfang der Login-Daten für die Microsoft-Plattform verwendet wird.
>

![office365](images/csp2-01.png){.thumbnail}

> [!warning]
> Bei lizenzierten Produkten ist es nicht möglich, einen Tenant Office *365* Reseller von einem identischen OVHcloud Kunden auf einen anderen zu wechseln. Es ist notwendig, das Abonnement für den ursprünglichen OVHcloud-Account zu beenden und diese Lizenz für den neuen OVHcloud-Account zu bestellen.
> 
![office365](images/csp2-01.png){.thumbnail}

### Office 365 Reseller Dienste verwalten

Sobald der Office 365 Dienst verfügbar ist, können Sie ihn über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) verwalten.

Gehen Sie hierzu in den Bereich `Sunrise`{.action}. Im Menü auf der linken Seite wählen Sie `Office 365 Revendeurs`{.action}, und dann den Dienst aus.

Folgende Angaben werden angezeigt:

- **Interner Servicename**: Zeigt den Namen Ihrer Dienstleistung an. Dieser ist nur in Ihrem Kundencenter sichtbar. Er entspricht auch dem Tenant (der Ihre Lizenzgruppe enthält) bei Microsoft.
- **Anzeigename des Dienstes**: Erlaubt es, den Anzeigenamen des Dienstes in Ihrem Kundencenter zu personalisieren.
- **Erstellt am**: Gibt das Erstellungsdatum des Dienstes an.
- **Microsoft Verwaltungsportal**: URL zur Office Verwaltungsoberfläche, über die Sie Ihre Abonnements verwalten können.
- Die Verwaltung des Administratorpassworts Ihres *Microsoft* Tenant erfolgt direkt über das Microsoft Verwaltungsinterface. Lesen Sie auch [die Microsoft Dokumentation](https://support.microsoft.com/account-billing/reset-a-forgotten-microsoft-account-password-eff4f067-5042-c1a3-fe72-b04d60556c37).
- Die Verwaltung zusätzlicher Domains erfolgt auch über das Verwaltungsinterface von Microsoft. Lesen [Sie die Microsoft Dokumentation](https://support.microsoft.com/office/connect-your-domain-to-office-365-cd74b4fa-6d34-4669-9937-ed178ac84515).

![office365](images/sunrise_office365_CSP2_services_details.png){.thumbnail}

### Ihre Abos verwalten

Mit der Verwaltung Ihrer Abos können Sie die zu Ihrer Abonnementgruppe gehörenden Lizenzen erhöhen oder stornieren. Die Details können Sie in der Tabelle sehen:

- **ID**: Jeder Typ einer bestellten Lizenz verfügt über eine eindeutige Kennung (ID).
- **Status**: Zeigt den Status Ihrer Lizenz.
- **Name der Lizenz**: Gibt die Art der bestellten Lizenz an.
- **Anzahl der Lizenzen**: Gibt die Anzahl der verfügbaren Lizenzen an.
- **Erstellungsdatum**: Gibt das Erstellungsdatum des Abonnements für den ausgewählten Lizenztyp an.
- **Letztes Update**: Gibt das Datum an, an dem das Abonnement zuletzt aktualisiert wurde (z.B. durch Hinzufügen einer Lizenz).

Mit dem <i class="icons-pen"></i>  können Sie die Gesamtzahl der Lizenzen des Abonnements ändern. Mit dem <i class="icons-bin"></i>  können Sie das Abonnement und alle Lizenzen kündigen.

> [!primary]
>
> Für Office 365 Education sind besondere Lizenzbedingungen von Microsoft einzuhalten. Die entsprechenden offiziellen Dokumente stehen Ihnen je nach Region und Sprache [hier](https://www.microsoft.com/licensing/docs){.external} zur Verfügung.
>

![office365](images/sunrise_office365_CSP2_Subscribers.png){.thumbnail}

### Benutzer verwalten

Sobald Sie über eine ausreichende Anzahl an Lizenzen verfügen, müssen Sie die Benutzer verwalten, die diese verwenden. Dieser Schritt erfolgt direkt über das [Verwaltungsportal von Microsoft](https://portal.office.com/Admin/Default.aspx){.external}.

Um sich dort einzuloggen, geben Sie Ihre Kundenkennung und das Passwort ein, das Sie in der Bestätigungsmail von OVHcloud zur Installation Ihrer Lizenzgruppe erhalten haben. Diese Informationen werden an die bei der Erstellung der Lizenzgruppe angegebene Adresse versandt.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
