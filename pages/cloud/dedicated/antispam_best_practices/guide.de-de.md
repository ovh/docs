---
title: OVHcloud AntiSpam - Best Practices und Entsperren einer IP-Adresse
slug: antispam-best-practices
excerpt: Erfahren Sie hier unsere AntiSpam-Maßnahmen und wie Sie eine gesperrte IP-Adresse freigeben können
section: Diagnose & Rescue Modus
order: 04
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 14.12.2022**

## Ziel

Als Anbieter von Internetdiensten registriert und reserviert OVHcloud jegliche IP-Adressen, die mit Dienstleistungen verwendet werden bei den entsprechenden Organisationen wie [RIPE](https://www.ripe.net/) oder [ARIN](https://www.arin.net/). Das bedeutet, OVHcloud ist als rechtlicher Kontakt für missbräuchliche Verwendung (*Abuse*) in der *WHOIS*-Datenbank hinterlegt.

Wenn eine IP-Adresse bei Organisationen wie Spamhaus, SpamCop etc., die gegen SPAM, Phishing und dergleichen missbräuchliche Praktiken kämpfen, gemeldet wird, verschlechtert dies den Ruf des gesamten OVHcloud Netzwerks.

OVHcloud muss sich daher beständig um den Ruf, die Qualität und die Sicherheit des Netzwerks kümmern, das auch einen wichtigen Teil Ihrer Dienstleistungen ausmacht.

### Wie funktioniert das Schutzsystem?

Unser System basiert auf der Antispam-Technik von Vade Secure.

Sobald das Sytem eine IP-Adresse wegen SPAM sperrt, wird eine E-Mail mit entsprechenden Informationen an Ihre Kontaktadresse gesendet, wie nachfolgend beispielhaft dargestellt:

> 
> Guten Tag,
>
> Unser Antispam-Schutz hat einen massiven Spam-Versand von einer Ihrer IPs erkannt:
122.122.122.122
>
> Um die Sicherheit unseres Netzwerks zu gewährleisten wurde der ausgehende Traffic vom Port 25 Ihres Server gesperrt.
> Um Ihnen bei der Überprüfung zu helfen, finden Sie hier einen Auszug aus den Details betroffener E-Mails:
>
> Destination IP: 188.95.235.33 - Message-ID: d24aa492-5f37-457f-9595-23ddc9e0f714@xxxxxxxxxxxxx.xx.local - Spam score: 300 <br>
> Destination IP: 188.95.235.33 - Message-ID: fc090jdhf934iu09bf084bfo92@xxxxxxxxxxxxx.com - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID: P0hbfo93407684bfoqljrlqvpLatS3RRB9rZw7e8s@xxxxxxxxxxxx.online - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID: 6ZUnls843bnf0934StxFasYGmhtDJRo@xxxxxxxxxxxx.online - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID: zcb.3z54da3kdfkl45802n0c0q98rqcc57e3b8aadfac63b2c408e3f5f9a27.1d44jkgnddfef.166489320375@xxxxxx.xxxx.net - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID: zcb.3z54da33hn98v9bcq-nrf3r67cc57e3b8aadfac63b2c408e3f5f9a27.1d44jd9340252.1655508652095@xxxxxx.xxxx.net - Spam score: 300
> <br>
> <br>

## In der praktischen Anwendung

**Was ist bei einer E-Mail-Benachrichtigung zu tun?**

Identifizieren Sie die Problemursache, beheben Sie sie und entsperren Sie dann Ihre IP.

### Das Problem identifizieren und lösen

**Bevor Sie eine IP-Adresse entsperren, überprüfen Sie, dass Sie folgende Maßnahmen ergriffen haben:**

- Beenden Sie den Versand von E-Mails (zum Beispiel: jegliche E-Mail-Software wie qmail, Postfix, Sendmail usw. abschalten).
- Überprüfen Sie die Warteschlange der E-Mails (zum Beispiel: qmHandle für qmail, postqueue -p für Postfix) und leeren Sie diese.
- Analysieren Sie Ihre Logs mithilfe der **Message-ID** im Sperralarm.  
- Wenn Sie den Versand von SPAM oder missbräuchlicher E-Mails bestätigen können, beheben Sie dessen Ursache, **bevor** Sie die IP-Adresse entsperren. In diesem Leitfaden erfahren Sie mehr über [*best practices* (EN)](https://docs.ovh.com/ie/en/dedicated/antispam-best-practices/#bestpractices) beim Versand von E-Mails. 

Wenn das Problem gelöst ist, können Sie Ihre IP-Adresse entsperren, indem Sie die folgenden Schritte ausführen.

> [!alert]
> 
> Geben Sie die IP-Adresse in keinem Fall frei, bevor Sie den Versand von E-Mails von Ihrem Server aus unterbrochen und Ihre Warteschlange für E-Mails geleert haben. Andernfalls erfolgt unmittelbar eine weitere Sperre für einen längeren Zeitraum. 
>

### Ihre IP-Adresse entsperren

#### Ihre IP-Adresse über das Kundencenter entsperren

Gehen Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) in den Bereich `Bare Metal Cloud`{.action} und klicken Sie auf `IPs`{.action}.

Eine Warnmeldung zeigt Ihnen die aufgrund von SPAM blockierte IP oder Dienstleistung an.

![Spam-Alarm](images/alertantispam.png){.thumbnail}

Im Bereich "Meine öffentlichen IP-Adressen und dazugehörigen Dienste" klicken Sie auf den Button `...`{.action} neben der IP oder dem entsprechenden Dienst und wählen Sie `Antispam`{.action}.

![antispam](images/antispam.png){.thumbnail}

Klicken Sie im neuen Tab unten auf `Antispam-Sperrung aufheben`{.action} und bestätigen Sie.

![IP entsperren](images/unblockip.png){.thumbnail}

Die IP wird nun entsperrt. Die Operation kann einige Minuten in Anspruch nehmen.

Sobald die Bearbeitung abgeschlossen ist, wird Ihre IP entsperrt.

#### Entsperren Sie Ihre IP-Adresse über die OVHcloud API

Verbinden Sie sich mit dem [API-Interface von OVHcloud](https://eu.api.ovh.com/console/) und folgen Sie den nachstehenden Schritten. Weitere Informationen zur Verwendung der OVHcloud API finden Sie in unserer Anleitung "[Erste Schritte mit der OVHcloud API](https://docs.ovh.com/de/api/first-steps-with-ovh-api/)".

Rufen Sie zunächst die Liste der IPs jedes OVHcloud Dienstes ab (Hosted Private Cloud / VPS / Public Cloud / Dedicated Server):

> [!api]
>
> @api {GET} /ip
>

**type**: Geben Sie den Typ der IP-Adresse an (Dedicated, PCC, VPS, vRack, PCI etc.)

Hier ein Beispiel:

```bash
"2001:41d0:67:d200::/56",
"2001:41d0:68:a00::/56",
"2001:41d0:68:f000::/56",
"2001:41d0:117:db00::/56",
"122.122.122.121/28",
"145.56.222.96/28",
"188.81.49.30/28",
```

Suchen Sie anschließend mithilfe des folgenden Aufrufs die IP-Adressen in einem bestimmten Zustand. Wenn Sie die blockierte IP-Adresse bereits kennen, gehen Sie zum nächsten [Schritt](#unblockip):

> [!api]
>
> @api {GET} /ip/{ip}/spam
>

**ip**: Geben Sie den im vorherigen Schritt erhaltenen IP-Block mit der Netzmaske an. Beispiel: 122.122.122.121/28<br>
**state**: Geben Sie den Zustand an.

Hier ein Beispiel für das Ergebnis (in diesem Fall wurde Block 122.122.122.121/28 ausgewählt):

```bash
"122.122.122.122"
```

Sie erhalten Informationen zur Sperrung mit dem nächsten Aufruf, ansonsten gehen Sie zum nächsten [Schritt über](#unblockip).

> [!api]
>
> @api {GET} /ip/{ip}/spam/{ipSpamming}
>

**ip**: Geben Sie den im vorherigen Schritt erhaltenen IP-Block mit der Netzmaske an.<br>
**ipSpamming**: Geben Sie zum Beispiel die zuvor abgerufene IP im Zustand "blockedForSpam" ein.

Hier ein Ergebnisbeispiel (in diesem Fall wurde Block 122.122.122.121/28 und die IP 122.122.122.122 ausgewählt):

```bash
time: 3600,
date: "2022-08-29T17:42:50+01:00",
ipSpamming: "122.122.122.122",
state: "blockedForSpam" 
```

Das bedeutet:

```console
- The IP is blocked for 1 hour (or 3600 seconds).
- It was blocked on 29/08/2022 at 5:42 p.m.
- Its current state is blocked.
```

Wenn Sie Statistiken über die Ergebnisse sehen möchten, verwenden Sie den folgenden API-Aufruf, ansonsten gehen Sie zum [nächsten Schritt über](#unblockip).

> [!api]
>
> @api {GET} /ip/{ip}/spam/{ipSpamming}/stats
>

**ip**: Geben Sie den im vorherigen Schritt erhaltenen IP-Block mit der Netzmaske an.<br>
**ipSpamming**: Geben Sie zum Beispiel die zuvor erhaltene IP im Zustand "blockedForSpam" ein.<br>
**from and to**: Das in der vorherigen Funktion verwendete Datumsformat (YYYY-MM-DDTHH:MM+01:SS).

Hier ein Beispiel:

```console
{
"messageId": "2PXQSX-3JRAUU-SF@obfuscated.com",
"destinationIp": "188.95.235.33",
"date": 1385640992,
"spamscore": 410
}
```

##### **IP entsperren** <a name="unblockip"></a>

> [!alert]
> WICHTIG!
Entsperren Sie die IP unter keinen Umständen, bevor Sie den Versand von E-Mails von Ihrem Server aus unterbrochen und Ihre Warteschlange für E-Mails geleert haben. Andernfalls erfolgt unmittelbar eine weitere Sperre für einen längeren Zeitraum.
>

Um Ihre IP-Adresse zu entsperren, verwenden Sie folgenden Aufruf:

> [!api]
>
> @api {POST} /ip/{ip}/spam/{ipSpamming}/unblock
>

**ip**: Geben Sie den im vorherigen Schritt erhaltenen IP-Adressblock mit der Netzmaske an.<br>
**ipSpamming**: Geben Sie die IP-Adresse ein, die zuvor als im Zustand "blockedForSpam" ausgegeben wurde.

Hier ein Beispiel:

```console
"message": "This IP address is still blocked for 129 seconds"
```

Ergebnis mehr als 129 Sekunden später:

```console
Time 3600,
date: "2022-08-29T17:42:50+01:00",
ipSpamming: "122.122.122.122",
state: "unblocking" 
```

Die IP-Adresse wird nun entsperrt. Es kann einige Minuten dauern, bis die Operation abgeschlossen ist.


### False Positives

In einigen Fällen kann es sich bei der SPAM-Warnung um einen falschen Alarm handeln. Wenn Sie nachgeprüft und festgestellt haben, dass die **Message-ID** einer legitimen E-Mail zugeordnet ist, stellen Sie sicher, dass Ihre E-Mails den [RFC (EN)](https://docs.ovh.com/ie/en/dedicated/antispam-best-practices/#rfc) und den [*Best Practices* (EN)](https://docs.ovh.com/ie/en/dedicated/antispam-best-practices/#bestpractices) entsprechen.


## Weiterführende Informationen
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
