---
title: Konfiguration von HTTP/2 auf dem OVH Loadbalancer
excerpt: So konfigurieren Sie HTTP/2 auf dem OVH Loadbalancer
updated: 2018-01-15
---

## Einleitung

Das HTTP/2-Protokoll wird aktuell nicht vom OVH Loadbalancer unterstützt. Sie können diese Einschränkung jedoch umgehen, indem Sie den TCP-Modus mit der ALPN-Erweiterung des TLS-Protokolls verwenden.

ALPN (Application-Layer Protocol Negotiation) ist eine TLS-Erweiterung, die es der Anwendungsschicht erlaubt, das verwendete Protokoll auszuhandeln (im vorliegenden Fall h2).

**In dieser Anleitung erfahren Sie, wie Sie HTTP/2 auf dem OVH Loadbalancer einrichten. Wir werden den Dienst im Folgenden konfigurieren, um die Traffic-Last auf mehrere Server zu verteilen, die mit HTTP/2 antworten.**

## Voraussetzungen

- Sie haben ein TCP-Frontend erstellt.
- Sie haben eine TCP-Farm erstellt und dieser Server hinzugefügt.

## Beschreibung

> [!warning]
>
> Es ist wichtig, dass die verschiedenen Elemente in der richtigen Reihenfolge angelegt werden: Die Routen werden zuerst konfiguriert, damit ihnen anschließend Regeln hinzugefügt werden können.
> 

### Eine Route hinzufügen

Im Folgenden werden wir eine Route zu unserer Dienstleistung hinzufügen.

#### Über die API

> [!faq]
>
> Dienst:
>
>> > [!api]
>> >
>> > @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>> >
>>
>
> Einstellungen:
>
>> > **ServiceName***
>> >
>> >> `<Loadbalancer ID>`
>> >
>> > **action**
>> >
>> >> **type**
>> >> >
>> >> > `"farm"`
>> >>
>> >> **target**
>> >> >
>> >> > `<ID Ihrer TCP-Farm, die HTTP/2 verarbeiten kann>`
>> >
>> > **frontendId**
>> >
>> >> `<ID Ihres TCP/443-Frontends>`
>

### Eine Regel hinzufügen

Wir werden nun eine Regel zu unserer Route hinzufügen.

#### Über die API

> [!faq]
>
> Dienst:
>
>> > [!api]
>> >
>> > @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>> >
>>
>
> Einstellungen:
>
>> > **ServiceName***
>> >
>> >> `<Loadbalancer ID>`
>> >
>> > **routeId**
>> >
>> >> `<ID der zuvor erstellten Route>`
>> >
>> > **field**
>> >
>> >> `"protocol"`
>> >
>> > **match**
>> >
>> >> `"is"`
>> >
>> > **pattern**
>> >
>> >> `"http/2.0"`
>

### Änderungen anwenden

Die vorgenommenen Änderungen müssen in jeder für Ihren Dienst konfigurierten Zone *explizit angewendet* werden. Erst dann werden sie für Ihre Besucher sichtbar. So können Sie auch komplexere Konfigurationsänderungen in einem Mal durchführen.

Falls Sie mehrere Zonen haben, ist die gleiche Konfiguration für jede einzeln vorzunehmen.

#### Über die API

Eine Zone aktualisieren

> [!faq]
>
> Dienst:
>
>> > [!api]
>> >
>> > @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>> >
>>
>
> Einstellungen:
>
>> > **ServiceName***
>> >
>> >> `<Loadbalancer ID>`
>> >
>> > **zone**
>> >
>> >> `<Zone, in der die Konfiguration angewendet wird>`
>

### Bestätigen

Nachdem Sie die oben stehenden Schritte durchgeführt haben, verfügen Sie über einen funktionsbereiten Lastverteiler für Ihre HTTP/2-Server. Sie können jetzt den Status des Dienstes kontrollieren, indem Sie eine Anfrage an Ihren OVH Loadbalancer senden und die Antwort überprüfen:

```bash
curl -I --http2 https://www.ovh.de/
HTTP/2 200
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.