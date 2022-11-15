---
title: OVHcloud AntiSpam - Best Practices und Entsperren einer IP-Adresse
slug: antispam-best-practices
excerpt: Entdecken Sie unsere bewährten Antispam-Praktiken und wie Sie eine für SPAM gesperrte IP-Adresse entsperren können
section: Diagnose und Rescue-Modus
order: 04
---

**Letzte Aktualisierung am 15.11.2022**

## Ziel

Für jede auf den Produkten und Dienstleistungen von OVHcloud verfügbare IP-Adresse registrieren und reservieren wir als Internetprovider Organisationen wie [RIPE](https://www.ripe.net/) oder [ARIN](https://www.arin.net/). In diesem Fall erscheinen wir als *missbräuchlicher* Kontakt des geistigen Eigentums im Falle eines Rechtsstreits in der *WHOIS Datenbank*.

Wenn eine IP-Adresse bei Organisationen wie Spamhaus, SpamCop etc., die gegen SPAM, Spam-Seiten und Phishing kämpfen, einen Bericht vorlegt, dann geht es um den Ruf des gesamten OVHcloud Netzwerks.

OVHcloud muss sich daher um den Ruf, die Qualität und die Sicherheit des Netzwerks kümmern, das auch einen wichtigen Teil Ihrer Dienstleistung ausmacht.

### Wie funktioniert das Schutzsystem?

Unser System basiert auf der Antispam-Technologie von Vade Secure.

Sobald eine IP-Adresse für SPAM gesperrt ist, wird eine E-Mail mit Informationen wie im folgenden Beispiel an Ihren Account gesendet:

> 
> Guten Tag,
>
> Unser Antispam-Schutz hat einen umfangreichen Spam-Versand von einer Ihrer IPs erkannt:
122.122.122.122
>
> Um die Sicherheit unseres Netzwerks zu gewährleisten wurde der ausgehende Traffic von Ihrem Server zum Port 25 gesperrt.
> Um die Überprüfung durchzuführen, werden folgende E-Mails ausgewählt:
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

**Was ist beim Empfang der Benachrichtigung per E-Mail zu tun?**

Wählen Sie das Problem aus, lösen Sie es und entsperren Sie Ihre IP.

### Das Problem identifizieren und lösen

**Bevor Sie eine IP-Adresse entsperren, überprüfen Sie bitte, dass Sie folgende Maßnahmen ergriffen haben:**

- Beenden Sie den Versand von E-Mails (zum Beispiel: alle E-Mail-Programme wie qmail, Postfix, Sendmail usw. abschalten.
- Überprüfen Sie die Warteschlange der E-Mails (z. B. qmHandle für qmail, postqueue -p für Postfix) und leeren Sie diese.
- Analysieren Sie Ihre Logs mit der **Message-ID** im Sperralarm.
- Wenn Sie SPAM oder unrechtmäßige E-Mails versenden, empfehlen wir Ihnen dringend, das Problem zu lösen, **bevor** Sie die IP-Adresse entsperren. Im zweiten Teil dieser Anleitung erfahren Sie über[bewährte Praktiken](#bestpractices) beim Versand von E-Mails. 

Wenn das Problem gelöst ist, können Sie Ihre IP-Adresse entsperren, indem Sie die folgenden Schritte ausführen.

> [!alert]
> 
> Geben Sie die IP-Adresse in keinem Fall frei, bevor Sie den Versand von E-Mails von Ihrem Server aus unterbrochen und Ihre Warteschlange für E-Mails geleert haben. Andernfalls werden Sie sofort ein zweites Mal für einen längeren Zeitraum gesperrt. 
>

### Ihre IP-Adresse entsperren

#### Ihre IP-Adresse über das Kundencenter entsperren

Gehen Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) in den Bereich `Bare Metal Cloud`{.action} und klicken Sie auf `IPs`{.action}.

Ein Pop-up zeigt Ihnen die für SPAM blockierte IP oder Dienstleistung an.

![Spam-Alarm](images/alertantispam.png){.thumbnail}

Im Bereich "Meine öffentlichen IP-Adressen und dazugehörigen Dienste" klicken Sie auf den Button `..`{.action}. neben der IP oder dem entsprechenden Dienst und wählen Sie `Antispam aus`{.action}.

![antispam](images/antispam.png){.thumbnail}

Klicken Sie im neuen Tab unten `auf Antispam`{.action} entsperren und bestätigen Sie.

![IP entsperren](images/unblockip.png){.thumbnail}

Die IP wird nun entsperrt, die Operation kann einige Minuten in Anspruch nehmen.

Sobald die Bearbeitung abgeschlossen ist, wird Ihre IP entsperrt.

#### Entsperren Sie Ihre IP-Adresse über die OVHcloud API

Verbinden Sie sich mit dem [API-Interface von OVHcloud](https://eu.api.ovh.com/console/) und folgen Sie den nachstehenden Schritten. Weitere Informationen zur Verwendung der OVHcloud APIs finden Sie in unserer Anleitung "[Erste Schritte mit den OVHcloud APIs](https://docs.ovh.com/de/api/first-steps-with-ovh-api/)".

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

Suchen Sie anschließend mithilfe des folgenden Anrufs die IP-Adressen in einem bestimmten Zustand. Wenn Sie die blockierte IP-Adresse bereits kennen, gehen Sie zum folgenden [Schritt](#unblockip):

> [!api]
>
> @api {GET} /ip/{ip}/spam
>

**ip** : Geben Sie den im vorherigen Schritt erhaltenen IP-Block mit der Netzmaske an. 122.122.122.121/28<br>
**state** : Geben Sie den gewünschten Zustand an.

Hier ein Beispiel für das Ergebnis (in diesem Fall wurde Block 122.122.122.121/28 ausgewählt):

```bash
"122.122.122.122" 
```

Sie erhalten Informationen zur Sperrung mit dem nächsten Anruf, ansonsten gehen Sie zum nächsten [Schritt über](#unblockip).

> [!api]
>
> @api {GET} /ip/{ip}/spam/{ipSpamming}
>

**ip** : Geben Sie den im vorherigen Schritt erhaltenen IP-Block mit der Netzmaske an.<br>
**ipSpamming** : Geben Sie zum Beispiel die zuvor abgerufene IP im Zustand "blockedForSpam" ein.

Hier ein Ergebnisbeispiel (in diesem Fall wurden Block 122.122.122.121/28 und IP 122.122.122.122 ausgewählt):

```bash
time: 3600,
date: "2022-08-29T17:42:50+01:00",
ipSpamming: "122.122.122.122",
state: "blockedForSpam" 
```

Daher :

```bash
- The IP is blocked for 1 hour (or 3600 seconds).
- It was blocked on 29/08/2022 at 5:42 p.m.
- Its current state is blocked.
```

Wenn Sie Statistiken darüber erhalten möchten, was festgestellt wurde, verwenden Sie den folgenden api-Aufruf, ansonsten gehen Sie zum nächsten [Schritt über](#unblockip).

> [!api]
>
> @api {GET} /ip/{ip}/spam/{ipSpamming}/stats
>

**ip** : Geben Sie den im vorherigen Schritt erhaltenen IP-Block mit der Netzmaske an.<br>
**ipSpamming** : Geben Sie zum Beispiel die zuvor abgerufene IP im Zustand "blockedForSpam"ein.<br>
**from and to** : Verwenden Sie das in der vorherigen Funktion verwendete Datumsformat (YYYY-MM-DDTHH:MM+01:SS).

Hier ein Beispiel:

```bash
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
Entsperren Sie die IP unter keinen Umständen, ohne den Versand von E-Mails von Ihrem Server aus unterbrochen zu haben, und leeren Sie Ihre Warteschlange für E-Mails. Andernfalls werden Sie sofort ein zweites Mal für einen längeren Zeitraum gesperrt. 
>

Um Ihre IP-Adresse zu entsperren, verwenden Sie folgenden Anruf:

> [!api]
>
> @api {POST} /ip/{ip}/spam/{ipSpamming}/unblock
>

**ip** : Geben Sie den im vorherigen Schritt erhaltenen IP-Adressblock mit der Netzmaske an.<br>
**ipSpamming** : Geben Sie die IP-Adresse an, die zuvor im Zustand "blockedForSpam"abgerufen wurde.

Hier ein Beispiel:

```bash
"message": "This IP address is still blocked for 129 seconds"
```

Und ein Ergebnis, etwas mehr als 129 Sekunden später:

```bash
Time 3600,
date: "2022-08-29T17:42:50+01:00",
ipSpamming : "122.122.122.122",
state: "unblocking" 
```

Die IP-Adresse wird nun entsperrt, es kann einige Minuten dauern, bis die Operation abgeschlossen ist.


### Falsch positive Ergebnisse

In einigen Fällen kann die Antispam-Warnung falsch positiv sein. Wenn Sie überprüft und festgestellt haben, dass die **Message-ID** mit einer legitimen E-Mail verbunden ist, stellen Sie sicher, dass Ihre E-Mails den [RFC](#rfc) und den unten [aufgeführten bewährten](#bestpractices) Verfahren entsprechen.


## Weiterführende Informationen
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.