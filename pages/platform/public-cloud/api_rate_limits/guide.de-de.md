---
title: 'Durchsatzlimits der Public Cloud APIs'
excerpt: Entdecken Sie die Grenzen und Einschränkungen der Public Cloud API
updated: 2023-06-23
---

## Was ist ein Durchsatzlimit?

Ein Durchsatzlimit ist eine Einschränkung, die von der API auf die Anzahl der Anforderungen angewendet wird, die ein Client über einen bestimmten Zeitraum an die API stellen kann.

## Warum Beschränkungen?

Durchsatzlimits sind gängige Praxis für APIs. Sie werden aus verschiedenen Gründen eingerichtet:

- Sie helfen uns, das API-Backend vor Missbrauch oder Missbrauch der API zu schützen.
- Sie garantieren eine höhere Dienstqualität auf der API durch einen fairen Zugang zur API.

Beispielsweise kann ein fehlerhaftes oder falsch optimiertes Skript versuchen, die API übermäßig zu verwenden, was zu Leistungsproblemen beim API-Backend führen kann. 

Durch die Festlegung von Durchsatzlimits stellen wir sicher, dass die API eine reibungslose und konsistente Erfahrung für alle Kunden gewährleistet.

## Was sind die Durchsatzlimits für unsere API?

### Keystone (OpenStack Identity API)

Wir setzen Durchsatzlimits auf Benutzerebene ein**OpenStack**.

Ein Benutzer kann **60 Anfragen pro Minute** stellen, bevor er eine HTTP 429 Antwort erhält.

### Nova (OpenStack Computing-API)

Wir setzen Durchsatzlimits auf **Projekt** OpenStack-Ebene.

Ein Projekt kann **20 Anfragen pro Sekunde** durchführen, bevor es eine HTTP 429 Antwort erhält.

### Neutron (OpenStack Netzwerk-API)

Wir setzen Durchsatzlimits auf **Projekt** OpenStack-Ebene.

Ein Projekt kann **20 Anfragen pro Sekunde** durchführen, bevor es eine HTTP 429 Antwort erhält.

### Glance (OpenStack Image-API)

Wir setzen Durchsatzlimits auf **Projekt** OpenStack-Ebene.

Ein Projekt kann **20 Anfragen pro Sekunde** durchführen, bevor es eine HTTP 429 Antwort erhält.

### Cinder (API für OpenStack-Berechnungen)

Wir setzen Durchsatzlimits auf **Projekt** OpenStack-Ebene.

Ein Projekt kann **20 Anfragen pro Sekunde** durchführen, bevor es eine HTTP 429 Antwort erhält.

## Wie funktionieren Durchsatzlimits?

Wenn Sie zu viele Tokenanforderungen an Keystone (die Identitäts-API) stellen oder zu viele Anforderungen an einen API-Endpunkt wie Nova (die Berechnungs-API) senden, beginnt der Endpunkt mit einem **HTTP 429** Antwortcode, der ein JSON-Objekt wie dieses enthält:

```json
{
    "error": {
        "status": "429 Too Many Requests",
        "message": "Too Many Requests"
    }
}
```

## Wie stelle ich sicher, dass du nicht zu viele Anfragen durchführst?

Es wird empfohlen, die Anzahl der API-Aufrufe durch die Automatisierung zu reduzieren, um das Durchsatzlimit des Endpunkts zu unterschreiten.

In der Regel kann diese Situation auftreten, wenn Sie mehrere Abfragen parallel ausführen (mit mehreren Prozessen oder Threads).

Es gibt mehrere Möglichkeiten, die Effizienz der Automatisierung zu verbessern, z. B. das Zwischenspeichern oder die Verwendung von Mechanismen zum Abbrechen von Versuchen (*retry backoffs*).

### Cache verwenden

Eine Möglichkeit, die Anzahl der Aufrufe zu reduzieren, ist die Verwendung des Caches.

Ein Keystone-Token ist beispielsweise 24 Stunden nach seiner Ausstellung gültig. Sie können einen einzelnen Token anfordern, im Cache speichern und diesen den ganzen Tag lang wiederverwenden!

### *retry backoff* implementieren

Wenn Sie wirklich regelmäßig Informationen von der API abrufen möchten, können Sie eine Automatisierung der Abfragewiederholung in Verbindung mit einer zufälligen exponentiellen Deaktivierung implementieren.

Wenn Sie den Vorgang mit einer exponentiellen Deaktivierungsfunktion wiederholen, wird bei einem Ratenlimitfehler ein kurzer Standbymodus ausgeführt, und die fehlgeschlagene Anforderung wird wiederholt.<br>
Wenn die Anforderung erneut fehlschlägt, wird die Standbydauer erhöht und der Vorgang wiederholt.<br>
Dieser Vorgang wird so lange fortgesetzt, bis die Anforderung abgeschlossen ist oder die maximale Anzahl von Wiederholungen erreicht wurde.

Dieser Ansatz hat viele Vorteile:

- Automatische Wiederholungsversuche ermöglichen die Wiederherstellung von Durchsatzlimitfehlern ohne Blockierung oder Datenverlust;
- Die exponentielle Deaktivierung ermöglicht es Ihnen, Ihre ersten Versuche schnell durchzuführen und dabei von längeren Verzögerungen zu profitieren, falls Ihre ersten Versuche fehlschlagen;
- Durch das Hinzufügen einer zufälligen Verzögerung wird verhindert, dass alle Versuche gleichzeitig ausgeführt werden.

Bitte beachten Sie, dass nicht erfolgreiche Anfragen nicht in die Berechnung Ihres Durchsatzlimits einfließen. Daher könnte die fortgesetzte Weiterleitung einer Anfrage funktionieren, aber wir könnten dieses Verhalten in Zukunft ändern. Wir empfehlen Ihnen, diesem Mechanismus nicht zu vertrauen.

Im Folgenden finden Sie einige Beispiele für bekannte Bibliotheken zum Implementieren der *retry backoff*-Funktion in Python:

- Tenacity: <https://pypi.org/project/tenacity/>
- Backoff: <https://pypi.org/project/backoff/>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.
