---
title: "Public Cloud Interface kennenlernen"
excerpt: "Public Cloud Interface Tour zur Entdeckung der verschiedenen Bereiche"
slug: public-cloud-interface
section: Erste Schritte
order: 03
---

[!primary] Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.

Letzte Aktualisierung am 10.11.2021

## Ziel

Sie haben gerade Ihr Public Cloud Projekt erstellt und möchten im OVHcloud Kundencenter etwas über das Benutzerinterface erfahren.

**Entdecken Sie die wichtigsten Bereiche des Public Cloud Interface im OVHcloud Kundencenter**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}.
- Sie haben ein [erstes Public Cloud Projekt erstellt](https://docs.ovh.com/de/public-cloud/erstellung_public_cloud_projekt/).

## In der praktischen Anwendung

Sobald Ihr erstes Public Cloud Projekt erstellt wurde, werden Sie zum primären Public Cloud Interface weitergeleitet.

![Public Cloud Interface](images/main-interface.png){.thumbnail}

### Zugriff auf Ihre OVHcloud Account-Informationen

Die Einstellungen Ihres OVHcloud Accounts bleiben jederzeit verfügbar, ebenso wie Benachrichtigungen oder die Sprachänderung im Kundencenter.

![Public Cloud Interface - Account Menü](images/account.png){.thumbnail}

### Ihr Public Cloud Projekt

Da es möglich ist, mehrere Projekte (je nach Ihren Quotas) zu verwenden, werden Projektname und -ID immer angezeigt, unabhängig vom Bildschirm, den Sie besuchen, um zu sehen, welche Umgebung Sie gerade dabei sind zu agieren.

![Projektmenü](images/project-menu.png){.thumbnail}

Die ID kann bei der Verwendung der CLI, bestimmter Support-Anfragen oder anderer Anfragen erforderlich sein. Sie können es kopieren, indem Sie auf das Icon rechts klicken.

Sie können den Projektnamen im Tab `Einstellungen `{.action}. Geben Sie einen neuen Namen ein und klicken Sie auf `Update`{.action}.

![Public Cloud Projekt umbenennen](images/rename-project.png){.thumbnail}

### Das Public Cloud Hauptmenü

![Public Cloud Interface - Hauptmenü](images/main-menu.png){.thumbnail}

|Abschnitt|Beschreibung der Optionen|
|---|---|
|**Compute**|In diesem Bereich können Sie Instanzen starten, diese Cloud Server sind on demand verfügbar.|
|**Storage**|In diesem Abschnitt finden Sie verschiedene Storage- und Datenbanklösungen, die jeweils einem bestimmten Bedarf und einer bestimmten Nutzung entsprechen.|
|**Network**|In diesem Abschnitt finden Sie, wie Sie Ihre Public Cloud Ressourcen verbinden, aber auch mit anderen OVHcloud Produkten.|
|**Container and Orchestration**|Diese Rubrik bietet Ihnen verschiedene Werkzeuge zur Automatisierung Ihrer Architekturen und zur Erhöhung der Flexibilität.|
|**AI & Machine Learning**|In diesem Abschnitt finden Sie die Werkzeuge von OVHcloud für künstliche Intelligenz.|
|**Data & Analytics**|Diese Dienste helfen Ihnen, Ihre Big Data und Data Analytics Probleme zu lösen.|

### Die Verknüpfungen

Das Bildschirmzentrum bietet Ihnen Verknüpfungen, die Ihnen einen schnellen Zugriff auf die Konfigurationsassistenten und die nützlichsten Anleitungen ermöglichen.

![Public Cloud Interface - verkürztes Menü](images/shortcuts.png){.thumbnail}

#### Beihilfen für die Schaffung von Ressourcen

Für jede Ressource, die Sie erstellen möchten, wird Ihnen ein Konfigurationsassistent zur Verfügung gestellt, der Ihnen Schritt für Schritt erlaubt, die Ressource nach Ihren Bedürfnissen einzurichten.
<br>In den meisten Fällen müssen Sie den Standort der Ressource, das Modell, einige personalisierbare Parameter und in einigen Fällen den Abrechnungsmodus auswählen.

![Public Cloud Interface - Konfigurationsassistent](images/wizard.png){.thumbnail}

### Die Verwaltungswerkzeuge

In Ihrem Public Cloud Projekt sind mehrere Management-Tools verfügbar, die sich am unteren Rand der linken Menüleiste befinden.

![Public Cloud Interface - Verwaltungswerkzeuge](images/management-tools.png){.thumbnail}

|Menüeintrag|Beschreibung|
|---|---|
|**Horizon**|Dies ist die [grafische Oberfläche](https://docs.ovh.com/de/public-cloud/horizon/), die normalerweise auf Openstack verfügbar ist, sodass die Benutzer, die dieses Interface kennen, ihre Reflexe wiederfinden können.|
|**Users & Roles**|Ermöglicht [die Erstellung](https://docs.ovh.com/de/public-cloud/openstack-user-erstellen-loeschen/) von Benutzern und deren Zuweisung. Diese Benutzer können insbesondere direkt auf die APIs oder das Horizon-Interface zugreifen. Sie können zum Beispiel einen Benutzer für Ihre klassischen Wartungsarbeiten und einen Benutzer für Ihre Automatisierungswerkzeuge wie Terraform erstellen.|
|**Quota & Regions**|Dieses Tool erlaubt es Ihnen, die Standorte und die Begrenzungen der für Ihr Projekt verfügbaren Ressourcen zu steuern.<br><br>**Die Quotas**: Unser System setzt nach bestimmten Kriterien (Anzahl bereits bezahlter Rechnungen, Verwendung anderer OVHcloud Produkte) Quotas (Limits) für die Anzahl der Ressourcen ein, die Sie erstellen können, um Probleme mit Zahlungsausfällen zu vermeiden. Standardmäßig erhöht das System Ihre Quotas automatisch, wenn bestimmte Kriterien erfüllt werden. Sie können jedoch [eine Quote manuell erhöhen](https://docs.ovh.com/de/public-cloud/public-cloud-quota-erhoehen/#manuelle-erhohung-der-ressourcenquote) mit diesem Tool.<br><br>**Die Standorte**: Die Public Cloud ist an mehreren Standorten weltweit verfügbar. Darüber hinaus kann jeder Standort mehrere "Regionen"(OpenStack-spezifisches Konzept) umfassen. Für einen europäischen Kunden beispielsweise ist die APAC-Zone (Asien-Pazifik) standardmäßig deaktiviert. Wenn Sie möchten, können Sie über dieses Menü neue Regionen aktivieren.|
|**SSH Keys**|Ein Werkzeug, mit dem Sie Ihre SSH-Schlüssel zentral verwalten können.|
|**Billing Control**|Public Cloud funktioniert nach dem Prinzip *pay as you go*, wobei die Rechnungen am Ende des Monats ausgestellt werden. In [diesem](https://docs.ovh.com/de/public-cloud/informationen-zu-cloud-abrechnungsoptionen/) Menü können Sie Ihren aktuellen Verbrauch einsehen, eine Prognose für die nächste Rechnung einsehen und natürlich Ihre vorherigen Rechnungen einsehen.|
|**Credit and Vouchers**|Dieses Menü erlaubt es Ihnen, den Verbrauch eines Coupons einzusehen, einen Coupon hinzuzufügen oder [Guthaben direkt](https://docs.ovh.com/de/public-cloud/cloud_guthaben_aufladen/) zu Ihrem Public Cloud Projekt hinzuzufügen.|
|**Contacts and Rights**|Neben der Möglichkeit, den technischen Kontakt oder den Rechnungskontakt Ihres Projekts zu ändern, können Sie weitere Kontakte [(OVHcloud Account)](https://docs.ovh.com/de/public-cloud/die_kontakte_eines_projekts_andern/) hinzufügen, um Ihr Projekt technisch zu verwalten. Sie können auch nur Benutzer im Abruf hinzufügen (« *read-only* »).|
|**Project settings**|Dieses Tool erlaubt es Ihnen, die allgemeinen Einstellungen des Projekts wie seinen Namen, seine Konfiguration als "Standardprojekt Ihres Accounts", HDS-Kompatibilität oder auch Ihr [Public Cloud Projekt zu konfigurieren](https://docs.ovh.com/de/public-cloud/ein_projekt_loschen/)|

## Weiterführende Informationen

[Erste Public Cloud Instanz erstellen und auf dieser einloggen](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
