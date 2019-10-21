---
title: 'Festplattengruppe für die Installation des Betriebssystems auswählen'
slug: install-hybrid
excerpt: 'Hier erfahren Sie, wie Sie eine spezifische Festplattengruppe für die Installation Ihres Betriebssystems auswählen.'
section: 'RAID & Festplatten'
---

**Stand 19.07.2018**

## Einleitung

Bei OVH können Sie [Dedicated Server](https://www.ovh.de/dedicated_server/){.external} mieten, die sowohl über eine SATA- als auch über eine SSD-Festplattengruppe verfügen. Diesen Servertyp bezeichnen wir als **Hybridserver**.

**In dieser Anleitung erfahren Sie, wie Sie die Festplattengruppe festlegen, auf der das Betriebssystem installiert werden soll.**

> [!warning]
> 
> OVH stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen spezialisierten Dienstleister zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
>

## Voraussetzungen

* Sie verfügen über einen [Hybridserver von OVH](https://www.ovh.de/dedicated_server/){.external}.
* Sie haben Zugriff auf die [OVH API](https://api.ovh.com/console/){.external}.
* Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.

> [!warning]
>
> Diese Beschreibung gilt ausschließlich für Linux-Systeme (mit Ausnahme von ESXi- und XenServer-Systemen) und nur bei SoftRAID-, NoRAID- oder HardRAID-Konfigurationen (Standardkonfiguration).
> 

## Beschreibung

### OVH API verbinden und Servernamen abrufen

Sobald Sie sich auf <https://api.ovh.com/console/> eingeloggt haben, können Sie den Servernamen wie folgt abrufen:

> [!api]
>
> @api {GET} /dedicated/server
> 

Um den Namen Ihres Hybridservers abzurufen, klicken Sie auf `Execute`{.action}:

![Verfügbare Dienste](images/services-01.png){.thumbnail}

### DiskGroupId abrufen

Mithilfe der `diskGroupId` können Sie festlegen, auf welcher Festplattengruppe das Betriebssystems installiert wird. 

Verwenden Sie hierzu folgenden API-Aufruf:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/specifications/hardware
> 

Geben Sie den zuvor erhaltenen Servernamen in das Feld „**serviceName**“ ein und klicken Sie dann auf `Execute`{.action}. Alle Informationen zur Hardware Ihres Servers werden nun angezeigt. Die gewünschte `diskGroupId` finden Sie im Bereich `diskGroups`.

Das Betriebssystem wird standardmäßig auf `diskGroupId` 1 installiert.

![Hybrid](images/hybrid-01.png){.thumbnail}

### Installation des Betriebssystems starten

Sobald Sie die `diskGroupId` kennen, können Sie mit dem letzten Schritt beginnen und Ihr Betriebssystem installieren.

Rufen Sie hierfür mit folgendem API-Aufruf die Liste der kompatiblen Betriebssysteme ab:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/install/compatibleTemplates
> 

![Kompatible Templates](images/templates-01.png){.thumbnail}

Notieren Sie den Template-Namen des gewünschten Betriebssystems und fahren Sie dann mit dem nächsten API-Aufruf fort:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/install/start
> 

Geben Sie den Servernamen in das Feld **serviceName** und die „diskGroupId“ (2) in das Feld **diskGroupId** sowie anschließend den Namen des gewünschten Betriebssystems in das Feld **templateName** ein (die übrigen Felder sind optional).

Wenn Sie alle Angaben gemacht haben, klicken Sie auf `Execute`{.action}:

![Installation](images/install-01.png){.thumbnail}

Ihr Betriebssystem wird nun installiert. Den Fortschritt der Installation können Sie überprüfen, indem Sie in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} die Seite des betreffenden Servers aktualisieren. Alternativ können Sie folgenden API-Aufruf verwenden, im Feld **serviceName** den Namen Ihres Servers angeben und anschließend auf `Execute`{.action} klicken:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/install/status
> 

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.