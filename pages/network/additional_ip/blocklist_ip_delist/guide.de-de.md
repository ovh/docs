---
title: IP-Adresse von Blocklisten entfernen
excerpt: Erfahren Sie hier, wie Sie die Entfernung von IP-Adressen aus einer Blockliste anfordern können, wenn Ihre Dienste durch Antispam-Anbieter beeinträchtigt sind
updated: 2024-10-21
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

Die *Blocklist* (auch *Blacklist*) ist ein Anti-Spam-Tool, das für IP-Adressen (oder IP-Adressbereiche) verwendet wird, um E-Mails zu blockieren, die als Spam eingestuft wurden oder Schadsoftware enthalten könnten. Wenn ein E-Mail-Domainname oder eine IP-Adresse blockiert ist, können E-Mails von diesem Domainnamen oder dieser IP-Adresse nicht an ihren Empfänger-Client gelangen, was sich auf die Zustellbarkeit und den Ruf des Absenders auswirkt. E-Mails, die dennoch versendet werden, können dann in den Spam-Ordner des Empfängers statt den Posteingang geleitet werden.

Beachten Sie, dass Blocklisten auch Domainnamen und IP-Adressen enthalten können, die keine Bedrohung für Benutzer sind. Darüber hinaus berücksichtigen einige Junk-E-Mail-Filterdienste den DNS-Reverse bei der Auswertung von IP-Adressen, wie z. B. SpamRats.

> [!primary]
> Lesen Sie hierzu unsere Anleitung zum Thema [Verhindern, dass Ihre E-Mails als Spam markiert werden](/pages/bare_metal_cloud/dedicated_servers/mail_sending_optimization), um die Best Practices für einen E-Mail-Server zu erfahren.
>

**Diese Anleitung erklärt, wie Sie Ihre OVHcloud IP-Adressen selbstständig aus einer Blockliste entfernen können.**

> [!warning]
> Die Informationen in dieser Anleitung können sich ändern und gelten für neu erworbene IP-Adressen. OVHcloud übernimmt keine Verantwortung für die Handlungen von Drittanbietern.
>
> Wir empfehlen Ihnen, sich an einen [spezialisierten Dienstanbieter](/links/partner) oder an [unsere Community](/links/community) zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben. 
>

## Voraussetzungen

- Ihre Dienste sind derzeit nicht von einem Abuse-Verfahren betroffen.

## In der praktischen Anwendung

### Unterstützte Anbieter

- [Spamhaus](https://check.spamhaus.org/)

    - [Spamhaus Block List (SBL)](https://www.spamhaus.org/blocklists/spamhaus-blocklist/)  
    Wenn die IP auf der [Spamhaus Blocklist (SBL)](https://check.spamhaus.org/sbl/listings/ovh.net/) ist, erstellen Sie eine Support-Anfrage über das [OVHcloud Help Center](https://help.ovhcloud.com/csm?id=csm_get_help). Unser Support-Team leitet Ihre Anfrage an unser Abuse Team weiter, das dann den Anbieter der Blocklist kontaktiert.
    - [Exploits Block List (XBL)](https://www.spamhaus.org/blocklists/exploits-blocklist/) oder [Combined Spam Sources (CSS)](https://www.spamhaus.org/blocklists/combined-spam-sources/)    
    Wenn Ihre IP-Adresse in *Exploits Block List* oder *Combined Spam Sources*, aufgeführt ist, liegt dies an Konfigurationsproblemen. Befolgen Sie die Schritte auf der Spamhaus-Website, um die IP-Adresse aus der Liste zu entfernen (siehe Beispiel unten). Wenn Sie die Schritte korrekt ausgeführt haben, können Sie damit die IP von der Liste entfernen.  
    /// details | Beispiel
    
    ![spamhaus](images/blocklist1.png){.thumbnail}  
    ![spamhaus](images/blocklist2.png){.thumbnail}

    ///

- [SpamCop](https://www.spamcop.net/bl.shtml)

- [Barracuda](https://www.barracudacentral.org/lookups)

- [SpamRATS](https://spamrats.com/lookup.php)  
    Wenn Sie Ihren eigenen E-Mail-Server verwenden, müssen Sie den PTR-Eintrag des Domainnamens konfigurieren, der die entsprechenden Kontaktdaten beinhaltet. Nur korrekt konfigurierte E-Mail-Server werden aus dieser Liste entfernt.  
    Sie müssen außerdem die [Reverse DNS-Auflösung konfigurieren](/pages/bare_metal_cloud/virtual_private_servers/configuring-reverse-dns).
    
    > [!primary]
    > **Gute Praxis:**
    > 
    > Die für den Versand von E-Mails verwendeten IP-Adressen müssen mit dem Domainnamen des Verantwortlichen übereinstimmen. Sie können auch Subdomains für die Reverse DNS-Auflösung verwenden, wie `mail.domain_name.com` oder `gateway.domain_name.com`.



### Nicht unterstützte Anbieter

#### s5h.net

/// details | Weitere Informationen...

Um die Löschung anzufordern, öffnen Sie von der gesperrten IP-Adresse aus [diese Seite](http://www.usenix.org.uk/content/rblremove). Sie sollte unmittelbar von der Liste entfernt werden.

Dies ist auch mit den Tools *telnet*, *curl* oder *wget* möglich.

Um Ihre IPv4-Adresse über *curl* aus der Liste zu entfernen, loggen Sie sich beim E-Mail-Server ein und führen Sie den folgenden Befehl aus:

```bash
curl -4 http://www.usenix.org.uk/content/rblremove
```

Wenn Sie denselben Vorgang mit *telnet* auf einem Windows- oder Linux-Host ausführen möchten, geben Sie die Zeilen *GET* und *Host* nach dem Befehl *telnet* wie unten dargestellt ein.

```bash
telnet www.usenix.org.uk 80
```

```bash
GET /content/rblremove HTTP/1.1
```

```bash
Host: www.usenix.org.uk
```

Eine ausführliche Erläuterung findet sich unter <http://www.usenix.org.uk/content/rbl.html>.

///

#### UCEprotect

/// details | Weitere Informationen...

Kürzlich hat UCE Protect mehr als tausend neue ASNs auf seine Blockliste gesetzt. Leider war auch unsere ASN (AS16276) davon betroffen. Die aktuelle Liste der betroffenen ASNs und die Anzahl der hinzugefügten neuen ASNs finden Sie unter folgenden Links:

- http://www.uceprotect.net/en/l3charts.php
- http://stats.uceprotect.net/?page=su

Unser Abuse Team hat UCEProtect kontaktiert, um unsere ASN aus der Blockliste zu entfernen. Im Allgemeinen möchte UCEProtect, dass die Netzbetreiber der neu gesperrten ASNs für die sofortige Streichung von der Liste bezahlen. Wie alle großen Anbieter zahlt auch OVHcloud nicht für die Löschungen, da es sich um einen Dienst handelt, der außerhalb unserer Kontrolle liegt. Wenn Sie für die Entfernung einer Blockliste bezahlen, erhöhen Sie den Anreiz für *Overblocking*, was insgesamt der Branche schadet.

UCEProtect behauptet, dass die ASNs nach einer Woche automatisch gelöscht werden, aber da dies außerhalb unserer Kontrolle liegt, können wir keine Garantie dafür geben.

Wenn Sie derzeit davon betroffen sind, empfehlen wir Ihnen diese Optionen:

1. IPv6-Adressen zum Senden von E-Mails verwenden. UCEProtect blockiert keine über IPv6 versandten E-Mails. Alle OVHcloud Dienste werden mit mindestens einer IPv6-Adresse geliefert, die Sie konfigurieren können. Alle wichtigen E-Mail-Anbieter unterstützen mittlerweile IPv6.
2. Bitten Sie die empfangende Partei, sich mit dem E-Mail-Anbieter in Verbindung zu setzen, um die Verwendung der UCEProtect-Blockliste vorerst einzustellen.

///

### Fabel Spamsources

/// details | Weitere Informationen...

Um eine IP-Adresse aus der Liste von Fabel Spamsources zu entfernen, gehen Sie zu deren [*Delist*-Seite](https://www.spamsources.fabel.dk/delist).

Klicken Sie auf `Please login to continue`{.action}, geben Sie Ihre E-Mail-Adresse ein und überprüfen Sie Ihren Posteingang. Verwenden Sie den Prüfcode, um sich einzuloggen.

Geben Sie Ihre IP-Adresse und eine Begründung für die Anfrage und klicken Sie dann auf den Button `Submit Query`{.action}.

![Beispiel](images/blocklist3.png){.thumbnail}

Das Entfernen von der Liste sollte zwischen 20 und 30 Minuten dauern.

///

#### MIPSpace

/// details | Weitere Informationen...

Um [eine IP aus MIPSpace zu entfernen](https://www.mipspace.com/remove.php), loggen Sie sich zunächst im [OVHcloud Kundencenter](/links/manager) ein und stellen Sie sicher, dass die folgenden Informationen aktuell sind:

- [DNS Reverse-Auflösung](/pages/bare_metal_cloud/virtual_private_servers/configuring-reverse-dns) (PTR-Eintrag).
- Details Ihrer Organisation (*RWhois*) im Bereich `Network`{.action}: Öffnen Sie `IP`{.action} und klicken Sie dann rechts auf das `Zahnrad`{.action}. Wählen Sie im Dropdown-Menü `Meine Organisationen verwalten`{.action} aus.

///

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Treten Sie unserer [User Community](/links/community) bei.