---
title: 'OVHcloud SharePoint aktivieren und verwalten'
excerpt: 'Erfahren Sie hier, wie Sie einen OVHcloud SharePoint Dienst bestellen und konfigurieren'
slug: aktivierung_und_verwaltung_ihres_ovh_sharepoint
legacy_guide_number: g2249
section: SharePoint
order: 1
---

**Letzte Aktualisierung am 15.04.2020**

## Ziel

Mit einer Microsoft SharePoint Lösung können Sie während Ihrer kollaborativen Arbeit von einem gemeinsam genutzten Speicherplatz profitieren.

**In dieser Anleitung wird erklärt, wie Sie eine SharePoint Plattform bestellen und konfigurieren.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie haben bereits einen [OVHcloud Exchange](https://www.ovh.de/emails/) Dienst eingerichtet (optional).

## In der praktischen Anwendung

### Schritt 1: Eine SharePoint Plattform bestellen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager). Klicken Sie im Bereich `Web`{.action} links in der Menüleiste auf `Bestellen`{.action} und dann auf `SharePoint`{.action}.

Ihnen stehen zwei Arten von Plattformen zur Verfügung:

| Geteilter SharePoint                                                                                                                      	| SharePoint Standalone                                                                                                                                                                       	|
|-----------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| ![sharepoint](images/order-manage-sharepoint-02.png){.thumbnail}                                                                        	| ![sharepoint](images/order-manage-sharepoint-03.png){.thumbnail}                                                                                                                            	|
| Wenn Sie bereits einen Hosted Exchange Dienst in Ihrem Kunden-Account haben, können Sie dessen Benutzer der neuen SharePoint Plattform zuordnen. Überprüfen Sie die Accounts, denen Sie eine SharePoint-Lizenz zuordnen möchten 	| Wenn Sie nicht über einen Hosted Exchange Dienst verfügen oder eine unabhängige SharePoint Plattform wünschen, bestellen Sie SharePoint Standalone. <br>Legen Sie die Anzahl der gewünschten Lizenzen basierend auf der Anzahl der Benutzer fest.	|

Wenn Sie Ihre Wahl getroffen haben, klicken Sie auf `Dienst bestellen`{.action}, um zum Bestellvorgang zu gelangen.

### Schritt 2: Die SharePoint Plattform aktivieren

Sobald Ihre Bestellung bestätigt und bezahlt wurde, erhalten Sie eine Bestätigungsmail an die hinterlegte E-Mail-Adresse in Ihrem Kunden-Account. Diese bestätigt, dass der Dienst für die Konfiguration bereit ist.

Um die E-Mail einzusehen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein, klicken Sie auf Ihren Namen oben rechts und danach auf Ihre Initialen. Gehen Sie zum Tab `Empfangene E-Mails`{.action} und suchen Sie nach der E-Mail mit dem Betreff:

> **\[xx-11111-ovh] Konfigurieren Sie Ihren Microsoft SharePoint Dienst!**

Um mit dieser Konfiguration zu beginnen, gehen Sie zum `Web`{.action}-Bereich Ihres Kundencenters. Klicken Sie links im Menü auf `Microsoft`{.action}, dann auf `SharePoint`{.action} und wählen Sie die entsprechende SharePoint Plattform aus.

Definieren Sie den Namen Ihrer Plattform im Feld „SharePoint URL“ und klicken Sie danach auf `URL bestätigen`{.action}

![sharepoint](images/order-manage-sharepoint-04.png){.thumbnail}  

> [!warning]
>
> Nach der Bestätigung kann der Name der Plattform nicht mehr geändert werden.

### Schritt 3: Die SharePoint Plattform konfigurieren

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web`{.action} links in der Menüleiste auf `Microsoft`{.action} und dann auf `SharePoint`{.action}. Wählen Sie den betreffenden SharePoint Dienst aus.

#### **SharePoint Standalone**

Diese Plattform ist unabhängig. Sie müssen zuerst einen Domainnamen zuordnen, bevor Sie Ihre Benutzer konfigurieren können.

##### ***Domain hinzufügen***

Gehen Sie zum Tab `Domains`{.action} und klicken Sie auf `Domain hinzufügen`{.action}. Wählen Sie eine Domain aus, die Sie in Ihrem Kunden-Account verwalten, oder geben Sie einen externen Domainnamen ein, über den Sie verfügen. 

- Wenn Sie einen Domainnamen innerhalb derselben Kundenkennung auswählen, wird dieser automatisch überprüft. Sie müssen lediglich Ihre Benutzer konfigurieren.
 
- Wenn Sie einen externen Domainnamen auswählen, muss in der DNS-Zone des Domainnamens ein Eintrag vom Typ CNAME hinzugefügt werden, um ihn auf der SharePoint Plattform zu überprüfen. Der CNAME-Eintrag kann abgerufen werden, indem Sie auf das Informationssymbol neben „Validierung der Domain“ klicken.

![sharepoint](images/order-manage-sharepoint-05.png){.thumbnail}

##### Benutzer konfigurieren

Gehen Sie zum Tab `Benutzer`{.action}, klicken Sie auf `...`{.action} rechts in der Zeile und danach auf `Account bearbeiten`{.action}

![sharepoint](images/order-manage-sharepoint-06.png){.thumbnail} 

Füllen Sie das angezeigte Fenster mit den Benutzerinformationen aus und klicken Sie auf `Bestätigen`{.action}.

Um auf der SharePoint Plattform Administratorrechte zu erhalten, klicken Sie auf `...`{.action} rechts in der Zeile und danach auf `Administrator-Rechte aktivieren`{.action}

#### **Geteilter SharePoint**

Diese Art Plattform ist bereits mit der Exchange Plattform verknüpft, die Sie bei der Bestellung ausgewählt haben, sodass kein Domainname zugeordnet werden kann.

##### Benutzer konfigurieren

Gehen Sie zum Tab `Benutzer`{.action} Ihrer Plattform, um alle Exchange Accounts anzuzeigen, die von einer SharePoint Lizenz profitieren können.

![sharepoint](images/order-manage-sharepoint-07.png){.thumbnail} 

Die Spalte `Konto aktiviert` gibt an, ob der Exchange Account über eine SharePoint Lizenz verfügt. 

> [!primary]
>
> Wenn Sie eine Lizenz für einen Account aktivieren möchten, der noch keine besitzt, klicken Sie auf `...`{.action} rechts neben dem Konto und danach auf `SharePoint aktivieren`{.action}.

Anfangs verfügt ein lizenziertes Konto nicht über Administrator-Rechte. Um diese zu aktivieren, klicken Sie auf `...`{.action} rechts neben dem Konto und danach auf `Administrator-Rechte aktivieren`{.action}.

![sharepoint](images/order-manage-sharepoint-08.png){.thumbnail} 

#### **Administratorrechte wiederherstellen**

Auf beiden Varianten von SharePoint Plattformen finden Sie die Schaltfläche `Administrator-Rechte wiederherstellen`{.action} im Tab `Benutzer`. Damit können die Administrator-Rechte der Plattform im Falle eines Missbrauchs über die SharePoint Oberfläche wiederhergestellt werden.

![sharepoint](images/order-manage-sharepoint-09.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
