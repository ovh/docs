---
title: "CO2-Fußabdruck Ihrer OVHcloud Dienste einsehen"
excerpt: "Erfahren Sie, wie Sie den monatlichen CO2-Fußabdruck der OVHcloud Dienste mit unserem CO2-Rechner abrufen"
updated: 2025-06-17
---

## Ziel
  
Im Rahmen Ihrer beruflichen Tätigkeit oder aus Interesse an dem Thema müssen Sie möglicherweise den CO2-Fußabdruck Ihrer Dienstleistungen berechnen.

**Diese Anleitung erklärt, wie Sie monatlich die CO2-Bilanz Ihrer OVHcloud Dienste ermitteln.**

## Voraussetzungen

- Ihr Kunden-Account ist der "Rechnungskontakt" für die Dienstleistungen, für die Sie den CO2-Fußabdruck erhalten möchten. Weitere Informationen finden Sie in [unserer Anleitung zur Kontaktverwaltung](/pages/account_and_service_management/account_information/managing_contacts).

**Die Berechnung des CO2-Fußabdrucks ist für folgende Dienste verfügbar:**

- [Dedicated Server](/links/bare-metal/bare-metal) (Advance, Game, Scale, High Grade, Storage)
- [Eco Dedicated Server](/links/bare-metal/eco) (Rise, Kimsufi, So You Start)
- [VMware on OVHcloud](/links/hosted-private-cloud/vmware)
- [Public Cloud Instanzen (Compute)](/links/public-cloud/compute)

## In der praktischen Anwendung

Dabei sind mehrere Punkte zu beachten:

- Für den laufenden Monat kann keine Bilanz erstellt werden.
- Unabhängig davon, ob Sie über die OVHcloud API ein Datum am Anfang, in der Mitte oder am Ende des Monats für den gewählten Monat eingeben, wird die Bilanz den gesamten Monat berücksichtigen.
- Nach Ablauf der letzten 24 Monate kann keine Bilanz erstellt werden.
- Für jeden OVHcloud Dienst kann vor der Bereitstellung der Funktion keine Bilanz erstellt werden (siehe nachstehende Tabelle).

| Dienst                | Datum der Inbetriebnahme des CO2-Fußabdruckrechners |
|------------------------|----------------------------------------------------------|
| Dedicated Server       | 2023/05/01 |
| Eco Dedicated Server   | 2023/05/01 |
| VMware on OVHcloud     | 2023/08/01 |
| Public Cloud Instanzen | 2025/01/01 |

### Abrufen der monatlichen Bilanz des Vormonats über das OVHcloud Kundencenter

1. Melden Sie sich im [OVHcloud Kundencenter](/links/manager) an.
1. Gehen Sie auf der angezeigten Seite in der linken Spalte nach unten zu **Nützliche Links**, und klicken Sie dann auf den Tab `Meine CO2-Bilanz`{.action}.
1. Klicken Sie auf der neu geöffneten Seite auf `Meinen CO2-Fußabdruck von [Monat] [Jahr] herunterladen`{.action}.

![Carbon footprint](/pages/assets/screens/control_panel/product-selection/right-column/carbon-footprint/my-carbon-footprint.png){.thumbnail}

Sie können jeden Monat die CO2-Bilanz des Vormonats für Ihre wählbaren Dienste abrufen.

Wenn Sie den CO2-Fußabdruck für einen Monat vor dem laufenden Monat benötigen, müssen Sie ihn über unsere API abrufen.

### Eine monatliche Bilanz vor dem Vormonat über unsere API abrufen

Standardmäßig wird die OVHcloud API zur Verfügung gestellt, damit Entwickler oder Integratoren Funktionen, die im OVHcloud Kundencenter vorhanden sind oder darüber hinaus direkt in ihren Anwendungen oder Lösungen kombinieren können.

#### Schritt 1 - Verbindung zur OVHcloud API

- Besuchen Sie unsere Website [OVHcloud API](/links/api) (überprüfen Sie, ob Sie sich auf `https://eu.api.ovh.com` befinden, wenn Ihre Dienste in Europa gehostet werden, und auf `https://ca.api.ovh.com`, wenn sie außerhalb Europas gehostet werden).
- Klicken Sie auf der angezeigten Seite auf `Explore the OVHcloud API`{.action}.
- Gehen Sie auf der neu angezeigten Seite und links auf der Seite auf das Formular rechts neben dem Feld `v1`{.action} und wählen Sie die Option `/me` aus.
- Suchen Sie in der unten angezeigten Liste der API-Aufrufe nach dem folgenden API-Aufruf, und klicken Sie auf diesen: **POST /me/carbonCalculator/task**. Sie können auch direkt auf den unten stehenden API-Aufruf klicken, um darauf zuzugreifen:

> [!api]
>
> @api {v1} /me POST /me/carbonCalculator/task
>

- Auf der rechten Seite wird dann der Aufruf mit den zu vervollständigenden Daten angezeigt.
- Klicken Sie oben rechts auf `Authenticate`{.action} und dann auf `Login with OVHcloud SSO`{.action}.
- Das Login-Interface für Ihr [OVHcloud Kundencenter](/links/manager) wird geöffnet.
- Loggen Sie sich mit Ihrer Kundenkennung ein und klicken Sie auf `Authorize`{.action}, um die OVHcloud API mit Ihren Diensten zu verwenden.
- Sie werden dann automatisch auf die vorherige Seite der API-Konsole weitergeleitet **POST /me/carbonCalculator/task**.

#### Schritt 2 - Bilanzgenerierung anfordern und die ID des angeforderten Tasks abrufen

Ersetzen Sie das aktuelle Datum in der Konsole durch das Datum, an dem Sie die Bilanzberechnung beenden möchten. Beachten Sie das folgende Datumsformat:

```bash
{
  "date": "YYYY-MM-DD"
}
```

![API](/pages/assets/screens/api/post-me-carboncalculator-task.png){.thumbnail}

Wenn Sie das Datum richtig eingegeben haben, klicken Sie unten rechts im zuvor ausgefüllten Abschnitt auf die blaue Schaltfläche `EXECUTE`{.action}.

Wenn alles korrekt ausgeführt wurde, erscheint im Fenster `RESPONSE`{.action} unten auf der Seite unter der Schaltfläche `EXECUTE`{.action} eine `taskID`.

![API](/pages/assets/screens/api/post-me-carboncalculator-task-response.png){.thumbnail}

Wenn Ihre OVHcloud Kundenkennung beispielsweise `aa00000-ovh` lautet und das zuvor gewählte Datum `31.01.2025` ist, erhalten Sie folgendes Ergebnis:

```bash
{
  "taskID": "aa00000-ovh_202501"
}
```

Kopieren Sie nur den Wert der dem Wert unseres Beispiels `aa00000-ovh_202501` entspricht (ohne die beiden (`"`) an den Enden zu kopieren).

#### Schritt 3 - Datei mit der Kohlenstoffbilanz Ihrer Dienstleistungen im PDF Format abrufen

Dank des zuvor abgerufenen Wertes der `taskID` können Sie die CO2-Bilanz Ihrer Dienstleistungen im PDF-Format einsehen.

In unserer API-Konsole [OVHcloud API](/links/api) führen Sie folgende Aktionen aus:

- Gehen Sie auf der linken Seite auf das Formular rechts neben dem Formular `v1`{.action} und wählen Sie/geben Sie die Option `/me`{.action} ein.
- Suchen Sie in der unten angezeigten Liste der API-Aufrufe nach dem folgenden API-Aufruf, und klicken Sie auf diesen: **GET /me/carbonCalculator/task/{taskID}**. Sie können auch direkt auf den unten stehenden API-Aufruf klicken, um darauf zuzugreifen:

> [!api]
>
> @api {v1} /me GET /me/carbonCalculator/task/{taskID}
>

- Auf der rechten Seite wird dann der API-Aufruf mit einem auszufüllenden Formular angezeigt.

Füllen Sie das Formular im Teil `PATH PARAMETERS` aus:

- `taskID`: Kopieren Sie den in Schritt 2 abgerufenen Wert der taskID hier.

![API](/pages/assets/screens/api/get-me-carboncalculator-task-taskid.png){.thumbnail}

Wenn Sie den Wert Ihrer `taskID` korrekt eingegeben haben, klicken Sie auf den blauen Button `EXECUTE`{.action}.

Das folgende Ergebnis wird im Fenster `RESPONSE`{.action} angezeigt, wenn Sie nach unten auf die Seite unterhalb der Schaltfläche `EXECUTE`{.action} gehen:

![API](/pages/assets/screens/api/get-me-carboncalculator-task-taskid-response.png){.thumbnail}

```bash
{
  "link": "Find here the complete URL to download the carbon footprint in PDF format",
  "status": "SUCCESS",
  "taskID": "aa00000-ovh_202501"
}
```

Kopieren Sie in diesem Ergebnis die gesamte URL inklusive HTTPS rechts neben dem Vermerk `"link":` und fügen Sie sie in die Suchleiste Ihres Browsers ein, um das Herunterladen der CO2-Bilanz im PDF-Format zu starten.

Die Datei wird in Ihrem Browser automatisch heruntergeladen und ggf. angezeigt.

> [!primary]
>
> Je nach Konfiguration Ihres Browsers kann es sein, dass der Download oder die Anzeige der Datei blockiert werden. Ist das der Fall, überprüfen Sie die Konfiguration Ihres Browsers und laden Sie die Seite neu.

Nach dem Öffnen der Datei enthält sie u.a. folgende Elemente:

- Eine Tabelle mit einer Übersicht über die C02-Emissionen nach Kategorien für den beantragten Monat
- Eine Übersicht über die C02-Emissionen nach Kategorien vom Beginn des Kalenderjahres bis zum beantragten Monat
- Eine Tabelle, in der die Werte nach der Art des abonnierten Produkts aufgeführt sind
- Eine Grafik mit den C02-Emissionen nach Kategorie

> [!warning]
> Der generierte Link ist nur 24 Stunden gültig. Achten Sie also darauf, die CO2-Bilanz mit Ihrem Browser herunterzuladen, nachdem der Link geöffnet wurde.

## Weiterführende Informationen <a name="go-further"></a>

[Erste Schritte mit der OVHcloud API](/pages/manage_and_operate/api/first-steps)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Treten Sie unserer [User Community](/links/community) bei.
