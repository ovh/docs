---
title: 'Durchsatzlimits der Public Cloud API'
excerpt: Erfahren Sie hier Details zu Rate Limits und Nutzungsbeschränkungen der Public Cloud API
updated: 2023-06-23
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Was sind Rate Limits?

Ein Durchsatzlimit ist eine Einschränkung, die von der API auf die Anzahl der Anforderungen angewendet wird, die ein Client über einen bestimmten Zeitraum an die API stellen kann.

## Warum Nuzungsbeschränkungen?

Durchsatzlimits sind gängige Praxis für APIs. Sie werden aus verschiedenen Gründen eingerichtet:

- Sie helfen, das API-Backend vor Missbrauch sowie Fehlnutzung der API zu schützen.
- Sie garantieren eine höhere Dienstqualität bei der API-Nutzung, indem der faire Zugang zur API erhalten wird.

Beispielsweise kann ein fehlerhaftes oder schlecht optimiertes Skript versuchen, die API übermäßig zu beanspruchen, was zu Leistungsproblemen beim API-Backend führen kann. 

Durch die Festlegung von Durchsatzlimits stellen wir sicher, dass die API einen reibungslosen und konsistenten Betrieb für alle Nutzer beibehalten kann.

## Was sind die Durchsatzlimits für unsere API?

### Keystone (OpenStack Identity API)

Wir setzen Durchsatzlimits auf der Ebene von OpenStack-**Benutzern** ein.

Ein User kann **60 Anfragen pro Minute** stellen, bevor er eine *HTTP 429* Antwort erhält.

### Nova (OpenStack Compute API)

Wir setzen Durchsatzlimits auf der Ebene von OpenStack-**Projekten** ein.

Ein Projekt kann **20 Anfragen pro Sekunde** stellen, bevor es eine *HTTP 429* Antwort erhält.

### Neutron (OpenStack Network API)

Wir setzen Durchsatzlimits auf der Ebene von OpenStack-**Projekten** ein.

Ein Projekt kann **20 Anfragen pro Sekunde** stellen, bevor es eine *HTTP 429* Antwort erhält.

### Glance (OpenStack Image API)

Wir setzen Durchsatzlimits auf der Ebene von OpenStack-**Projekten** ein.

Ein Projekt kann **20 Anfragen pro Sekunde** stellen, bevor es eine *HTTP 429* Antwort erhält.

### Cinder (OpenStack Compute API)

Wir setzen Durchsatzlimits auf der Ebene von OpenStack-**Projekten** ein.

Ein Projekt kann **20 Anfragen pro Sekunde** stellen, bevor es eine *HTTP 429* Antwort erhält.

## Wie funktionieren Durchsatzlimits?

Wenn Sie zu viele Token bei Keystone (der Identity API) anfordern oder zu viele Anfragen an einen API-Endpunkt, etwa Nova (Compute API) senden, wird der Endpunkt mit einem Antwortcode vom Typ **HTTP 429** antworten, der ein JSON-Objekt wie dieses enthält:

```json
{
    "error": {
        "status": "429 Too Many Requests",
        "message": "Too Many Requests"
    }
}
```

## Wie kann man verhindern, zu viele Anfragen durchzuführen?

Es wird empfohlen, die Anzahl der API-Aufrufe Ihrer Automatisierung zu reduzieren, um unter dem Durchsatzlimit des Endpunkts zu bleiben.

In der Regel kann diese Situation auftreten, wenn Sie mehrere Abfragen parallel ausführen (mit mehreren Prozessen oder Threads).

Es gibt mehrere Möglichkeiten, die Effizienz der Automatisierung zu verbessern, etwa mit Caching oder der Verwendung von Mechanismen zum Abbrechen wiederholter Aufruf-Versuche (*Retry Backoff*).

### Cache verwenden

Eine Möglichkeit, die Anzahl der Aufrufe zu reduzieren, ist die Verwendung des Cache.

Beispiel: Ein Keystone-Token ist 24 Stunden nach seiner Ausstellung gültig. Sie können einen Token anfordern, im Cache speichern und ihn für den gesamten Tag einsetzen.

### *Retry Backoff* implementieren

Wenn es notwendig ist, regelmäßig Informationen über die API zu beziehen, können Sie eine automatische Abfragewiederholung in Verbindung mit *Exponential Backoff*  implementieren.

*Retry*-Abfragen mit *Exponential Backoff* einzusetzen, bedeutet, bei Erreichen eines *Rate Limits* wird zunächst eine kurzer *Sleep*-Zeitraum abgewartet, bevor der gescheiterte Anfrageversuch wiederholt wird.<br>
Wenn die Anfrage erneut fehlschlägt, wird die *Sleep*-Dauer verlängert und der Vorgang wiederholt.<br>
Dieser Prozess wird so lange fortgesetzt, bis die Anfrage erfolgreich ist oder die maximale Anzahl von Wiederholungsanfragen erreicht wird.

Dieser Ansatz hat viele Vorteile:

- Automatische Wiederholungsversuch ermöglichen es, den Betrieb bei Durchsatzlimitfehlern fortzuführen, ohne Abstürze oder Datenverlust.
- *Exponential Backoff* ermöglicht es, die ersten Wiederholungsversuche schnell durchzuführen und falls diese fehlschlagen, weitere Anfrageversuche zu späteren Zeitpunkten auszuführen.
- Das Hinzufügen von randomisiertem *Jitter* zur Verzögerung verhindert, dass alle Versuche gleichzeitig Anfragen senden.

Beachten Sie, dass erfolglose Anfragen nicht in die Berechnung Ihres Durchsatzlimits einfließen, weshalb das wiederholte Senden einer Anfrage derzeit funktioniert. Jedoch ist dieses Verhalten nicht für die Zukunft garantiert. Wir empfehlen deshalb, nicht auf diese Vorgehensweise zu vertrauen.

Im Folgenden finden Sie Beispiele für etablierte Bibliotheken zur Implementierung von *Retry Backoff* in Python:

- Tenacity: <https://pypi.org/project/tenacity/>
- Backoff: <https://pypi.org/project/backoff/>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.
