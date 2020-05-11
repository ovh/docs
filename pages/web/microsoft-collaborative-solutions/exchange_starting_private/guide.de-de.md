---
title: 'Erste Schritte mit Private Exchange'
excerpt: 'Erfahren Sie hier, wie Sie Ihren Private Exchange Dienst einrichten'
slug: exchange_die_ersten_schritte_mit_einem_private_server
legacy_guide_number: g2074
section: 'Erste Schritte mit Exchange'
order: 2
---

**Letzte Aktualisierung am 17.04.2020**

## Ziel

Nach Bestellung einer Private Exchange Plattform sind einige Punkte zu beachten, um den Dienst korrekt einzurichten. 

**In dieser Anleitung werden die Schritte beschrieben, die bei der Erstkonfiguration ausgeführt werden müssen.**

## Voraussetzungen

- Sie haben einen [Private Exchange](https://www.ovh.de/emails/) Dienst in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).

## In der praktischen Anwendung

### Schritt 1: Empfang der E-Mail zur Konfiguration Ihrer Plattform

Sobald die Bestellung aufgegeben wurde, erhalten Sie die Informationen zum Konfigurieren Ihres Private Exchange an die hinterlegte E-Mail-Adresse des Kunden-Accounts.

Um diese E-Mail von Ihrem [OVHcloud-Kundencenter](https://www.ovh.com/auth/?action=gotomanager) aus einzusehen, klicken Sie auf Ihren Account-Namen oben rechts und klicken Sie danach auf `E-Mails vom Support`{.action}. Suchen Sie nach der E-Mail mit folgendem Betreff:

> **\[xx-11111-ovh] Ihr Private Exchange 20_xxx_ wird bereitgestellt!**


![first-use-private-exchange](images/first-use-private-exchange-01.png){.thumbnail}

Diese E-Mail enthält einen Link, über den Sie zwei Schritte zum Konfigurieren Ihres Dienstes ausführen können:

- Ihren Zugriffslink zum Webmail individualisieren (dediziertes SSL-Zertifikat);
- Die Kontakt-E-Mail-Adresse angeben, um Ihr Zertifikat zu validieren (Hinweis: Diese E-Mail-Adresse muss vorhanden sein und Sie müssen darauf zugreifen können).

Klicken Sie auf den Link in der E-Mail, danach fahren Sie mit dem nachstehenden [Schritt 2](./#schritt-2-ihren-dienst-initialisieren) fort.

### Schritt 2: Ihren Dienst initialisieren

Nachdem Sie in [Schritt 1](./#schritt-1-empfang-der-email-zur-konfiguration-ihrer-plattform) auf den Link in der E-Mail geklickt haben, identifizieren Sie sich auf der angezeigten Seite.

Sie werden auf die folgende Konfigurationsseite weitergeleitet:
![first-use-private-exchange](images/first-use-private-exchange-02.png){.thumbnail}

Vervollständigen Sie diese wie in der folgenden Tabelle angegeben.

| Information          	| Beschreibung                                                                                                                                                                                                                             	|
|----------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Name Ihres Servers 	| Wählen Sie im Dropdown-Menü die Subdomain zu Ihrem Domainnamen aus. <br> Geben Sie im freien Feld den Domainnamen ein, den Sie zuordnen möchten.                                                                   	|
| E-Mail               	| Wählen Sie eine E-Mail-Adresse aus der Liste. Diese wird verwendet, um die Validierungsmail zum SSL-Zertifikat Ihrer Plattform zu erhalten. Daher ist es unbedingt erforderlich, dass sie gültig ist oder an eine bestehende E-Mail-Adresse umgeleitet wird, auf die SIe Zugriff haben.
| DNS Assist           	| Mit dem Wählen dieser Option autorisieren Sie die automatische Konfiguration Ihrer DNS-Zone für den Domainnamen Ihrer Plattform. Die Domain muss im selben OVHcloud-Account wie Ihr Private Exchange verwaltet werden. Wenn Sie die Checkbox nicht aktivieren, wird eine E-Mail mit den Konfigurationsinformationen für Ihre DNS-Zone an Sie gesendet. 	|

Nach der Bestätigung dieses Schritts erhalten Sie eine Mitteilung, dass die Konfiguration abgeschlossen wurde. Sie noch einmal an die E-Mail-Adresse zur Überprüfung des SSL-Zertifikats und die Webmail-Zugriffsadresse Ihres Dienstes erinnert.

### Schritt 3: Manuelle Konfiguration der DNS-Zone des Domainnamens Ihrer Plattform

> [!primary]
>
> Dieser Schritt ist optional, wenn Sie „**DNS Assist**“ in [Schritt 2](./#schritt-2-ihren-dienst-initialisieren) gewählt haben.
> 

Wenn Ihre Domain nicht im selben Kunden-Account verwaltet oder nicht von OVHcloud gehostet wird, wird eine zweite E-Mail an Sie gesendet, die die erforderlichen Informationen für die manuelle Konfiguration Ihrer DNS-Zone enthält.

Die E-Mail enthält die IPv4- und IPv6-Adressen Ihres Private Exchange Servers. Geben Sie diese Adressen in die DNS-Zone der zuvor in [Schritt 2](./#schritt-2-ihren-dienst-initialisieren) erstellten Subdomain jeweils als Eintrag vom Typ „A“ und vom Typ „AAAA“ ein. Bei einem OVHcloud-Domainnamen finden Sie weitere Informationen in unserer [passenden Anleitung](../../domains/webhosting_bearbeiten_der_dns_zone/).


### Schritt 4: Validierung des SSL-Zertifikats

Nach dem Ausführen von [Schritt 2](./#schritt-2-ihren-dienst-initialisieren) wird eine E-Mail an die Adresse gesendet, die Sie zur Validierung Ihres SSL-Zertifikats ausgewählt haben.

Diese E-Mail wird Ihnen von der Organisation gesendet, die das SSL-Zertifikat ausstellt, mit dem Betreff:

> **ORDER #1111111 - Domain Control Validation for exchange.ihredomain.com**

Kopieren Sie den in der E-Mail enthaltenen Code und klicken Sie auf den Link zur Überprüfung des SSL-Zertifikats.

Das folgende Fenster wird angezeigt. Fügen Sie den Code in das Feld ein und klicken Sie auf `Weiter`{.action}.

![first-use-private-exchange](images/first-use-private-exchange-03.png){.thumbnail}

Sie erhalten eine Meldung darüber, ob der eingegebene Code gültig ist. Klicken Sie dann auf `Fenster schließen`{.action}.

### Abschluss der Installation

Nach der Validierung Ihres SSL-Zertifikats kann es bis zur Bereitstellung Ihres Dienstes noch ca. 4 Stunden dauern. Während dieses Zeitraums ist die Private Exchange Plattform noch nicht in Ihrem Kundencenter sichtbar.

Sobald Ihr Server bereit und verfügbar ist, erhalten Sie eine E-Mail mit folgendem Betreff:

> **\[xx-11111-ovh] Ihr Private Exchange Dienst 20_xxx_ ist bereit!**

Informationen zum Hinzufügen Ihres ersten Domainnamens zu Ihrer Plattform und zum Einrichten der Accounts finden Sie in unserer Anleitung [Eine Domain zu Ihrem Exchange Dienst hinzufügen](../domain-zu-exchange-hinzufugen/) 

## Weiterführende Informationen

[Eine DNS-Zone bearbeiten](../../domains/webhosting_bearbeiten_der_dns_zone/)

[Eine Domain zu Ihrem Exchange Dienst hinzufügen](../domain-zu-exchange-hinzufugen/) 

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en>.
