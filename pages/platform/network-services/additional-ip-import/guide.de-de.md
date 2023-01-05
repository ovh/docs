---
title: Additional IP importieren
slug: import-additional-ip
excerpt: "Erfahren Sie hier, wie Sie eine Additional IP-Adresse in ein Public Cloud Projekt importieren"
section: Additional IP
order: 03
---

**Letzte Aktualisierung am 04.01.2023**

> [!primary]
>
> Seit dem 6. Oktober 2022 heißt unser Dienst "Failover-IP" nun [Additional IP](https://www.ovhcloud.com/de/network/additional-ip/). Die Namensänderung hat keine Auswirkungen auf dessen technische Funktionen.
>

## Ziel

Es gibt verschiedene Gründe, auf Ihrer Instanz eine Additional IP-Adresse zu konfigurieren:

- Sie verwalten mehrere Webseiten auf Ihrer Instanz.
- Sie hosten internationale Projekte.
- Sie möchten von einem Dedicated Server zu einer Public Cloud Instanz migrieren.

Im OVHcloud Kundencenter können Sie eine Additional IP-Adresse, die mit einem anderen OVHcloud Dienst verknüpft ist, einfach Ihrem Projekt zuordnen.

**In dieser Anleitung wird erläutert, wie Sie eine Additional IP in Ihr OVHcloud Public Cloud Projekt importieren.**

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie verfügen über eine [Additional IP-Adresse](https://www.ovhcloud.com/de/bare-metal/ip/).

> [!warning]
> Diese Funktion ist derzeit für Metal Instanzen nicht verfügbar.
>

## In der praktischen Anwendung

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie im Bereich `Public Cloud`{.action} Ihr Projekt aus.

Öffnen Sie im linken Menü `Public IPs`{.action} unter `Network`.

Öffnen Sie den Tab `Additional IP`{.action} und klicken Sie auf den Button `Aktionen`{.action}. Wählen Sie `Eine Additional IP importieren`{.action}, um alle IP-Adressen anzuzeigen, die in Ihr Public Cloud Projekt importiert werden können.

![Import Additional IP](images/import22_01.png){.thumbnail}

Wenn Sie noch keine Additional IP-Adresse für Ihr Public Cloud Projekt haben, wird die Import-Option für Additional IPs auf der Startseite angezeigt.

Klicken Sie auf `...`{.action} in der Zeile der IP-Adresse, die Sie importieren möchten, und klicken Sie auf `Diese Additional IP importieren`{.action}.

![Import Additional IP](images/import22_02.png){.thumbnail}

Bestätigen Sie, indem Sie auf `Importieren`{.action} klicken.

![Import Additional IP](images/import22_03.png){.thumbnail}

Nach einigen Minuten ist der Import abgeschlossen. Öffnen Sie den Tab `Additional IP`{.action}, um die importierte Additional IP-Adresse zu sehen. Aktualisieren Sie die Seite falls nötig.

Klicken Sie rechts auf `...`{.action} und wählen Sie `Verbundene Instanz bearbeiten`{.action}.

![Import Additional IP](images/import22_04.png){.thumbnail}

Im neu angezeigten Fenster kann die Instanz ausgewählt werden, der die IP-Adresse zugewiesen werden soll.

![Import Additional IP](images/import22_05.png){.thumbnail}

Klicken Sie auf `Verbinden`{.action}, um zu bestätigen. Im Interface wird nun eine Änderungsmeldung angezeigt.

> [!warning]
>
> Eine Additional IP kann nicht von einer Länderzone zur anderen umgezogen werden. So kann beispielsweise eine IP-Adresse von SBG nach GRA oder RBX umgezogen werden, aber nicht nach BHS. 
>

Ihre Additional IP-Adresse wird nun mit Ihrer Instanz verbunden.

Im nächsten Schritt muss die IP-Adresse in Ihrem Betriebssystem konfiguriert werden. Lesen Sie dazu unsere [Anleitung zur IP-Konfiguration](https://docs.ovh.com/de/publiccloud/network-services/configure-additional-ip/).

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
