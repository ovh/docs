---
title: Konfiguration des Firewall Network
slug: firewall-network
section: IP & Netzwerk
---

**Stand 23.01.2018**

## Einleitung

Zum Schutz seiner weltweiten Infrastruktur und der Server seiner Kunden bietet OVH eine konfigurierbare Firewall an, die in die **Anti-DDoS** (VAC) Lösung integriert ist: Firewall Network. Mithilfe dieser Option kann die Anfälligkeit der Dienste für Angriffe aus dem öffentlichen Netz begrenzt werden.

**In dieser Anleitung erklären wir Ihnen, wie Sie Firewall Network konfigurieren.**


> [!primary]
>
> VAC*: Weitere Informationen zur VAC Technologie, unserem internen Anti-DDoS-System, finden Sie hier: <https://www.ovh.de/anti-ddos/>.
> 

![VAC im Detail](images/vac-inside.png){.thumbnail}


## Voraussetzungen

- Sie haben eine OVH Dienstleistung abonniert, in der die Firewall Network Option enthalten ist ([Dedicated Server](https://www.ovh.de/dedicated_server/){.external}, [VPS](https://www.ovh.de/virtual_server/){.external}, [Public Cloud Instanz](https://www.ovh.de/public-cloud/instances/){.external}, [Private Cloud](https://www.ovh.de/private-cloud/){.external}, [Failover-IP](https://www.ovh.de/dedicated_server/ip_failover.xml){.external}, ...)
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.
- Sie verfügen über grundlegende Netzwerkkenntnisse.


## Beschreibung

### Firewall Network aktivieren

> [!primary]
>
> Firewall Network schützt die IP-Adressen, die mit einer Maschine verbunden sind. Daher ist es notwendig, jede IP-Adresse einzeln zu konfigurieren, eine globale Serverkonfiguration ist nicht möglich.
> 

Aktivierung und Konfiguration erfolgen manuell über das Kundencenter im Bereich `IP`{.action}, indem Sie auf das Zahnrad-Symbol rechts neben der entsprechenden IPv4-Adresse klicken.

![Aktivierung der Firewall Network](images/firewall_creation.png){.thumbnail}

- Die Aktivierung muss anschließend bestätigt werden:

![Bestätigung](images/creationvalid.png){.thumbnail}

- Klicken Sie erneut auf das Zahnrad-Symbol rechts neben der entsprechenden IPv4-Adresse und klicken Sie danach auf `Firewall aktivieren`{.action} und auf `Firewall konfigurieren`{.action}:

![Aktivierung der Konfiguration](images/activationconfig.png){.thumbnail}

Sie können bis zu **20 Regeln für jede IP** festlegen.


> [!warning]
>
> Die Firewall wird bei jedem DDoS-Angriff automatisch aktiviert, und es ist nicht möglich, sie vor Ende des Angriffs zu deaktivieren. Deshalb ist es wichtig, dass Ihre Firewall-Regeln immer auf dem neuesten Stand sind.
> Standardmäßig sind keine Regeln konfiguriert, so dass alle Verbindungen offen sind.
> Sollten Sie Firewall-Regeln angelegt haben, denken Sie bitte daran, diese regelmäßig zu überprüfen, auch wenn Sie die Firewall deaktivieren.
> 



> [!primary]
>
> - Die UDP-Fragmentierung (DROP) ist standardmäßig blockiert. Wenn Sie ein VPN verwenden, denken Sie bitte nach der Aktivierung des Firewall Network daran, Ihre maximale Übertragungseinheit (MTU) korrekt zu konfigurieren. Auf OpenVPN können Sie z. B. `MTU Test`{.action} ankreuzen.
> - Firewall Network hat keinen Einfluss auf die Verbindungen innerhalb des OVH Netzwerks. Die definierten Regeln haben also keine Auswirkungen auf die Verbindungen im internen Netzwerk.
>


### Konfiguration des Firewall Network

Um eine Regel hinzuzufügen, klicken Sie rechts auf die Schaltfläche `Eine Regel hinzufügen`{.action}:


![Regel hinzufügen](images/ajoutregle1.png){.thumbnail}

Legen Sie dann für jede Regel folgende Einstellungen fest:

- Die Priorität (von 0 bis 19, wobei die Regel mit dem Wert 0 als erste Regel angewandt wird, danach in aufsteigender Reihenfolge)
- Die auszuführende Aktion: (`Erlauben`{.action} oder `Verbieten`{.action})
- Das Protokoll
- Eine IP-Adresse (optional)
- Den Quell-Port (nur bei TCP)
- Den Ziel-Port (nur bei TCP)
- Die TCP-Optionen (nur bei TCP)


![Details zum Hinzufügen einer Regel](images/ajoutregle4.png){.thumbnail}


> [!primary]
>
> - Priorität 0: Es wird empfohlen, das TCP-Protokoll auf allen IPs mit der `ESTABLISHED`{.action} Option zuzulassen. Mithilfe der `ESTABLISHED`{.action} Option kann überprüft werden, ob das Paket Teil einer zuvor geöffneten (bereits initiierten) Sitzung ist. Wenn Sie diese Option nicht zulassen, wird der Server keine TCP-Rückmeldungen für SYN/ACK-Anfragen erhalten.
> - Priorität 19: Die empfohlene Einstellung ist, mit der Regel 19 das Verwerfen aller IPv4-Pakete einzustellen, damit alle Pakete, die durch keine der vorangegangenen Regeln akzeptiert wurden, blockiert werden.
> 


### Konfigurationsbeispiel:

Um nur die Ports für SSH (22), HTTP (80), HTTPS (443) und UDP (auf Port 10000) zu öffnen, wenn ICMP erlaubt ist, müssen Sie die folgenden Regeln definieren:

![Konfigurationsbeispiel:](images/exemple.png){.thumbnail}

Die Regeln sind chronologisch geordnet von 0 (erste angewandte Regel) bis 19 (zuletzt angewandte Regel). Die chronologische Überprüfung der Regelkette wird abgebrochen, sobald eine Regel auf das empfangene Paket zutrifft.

Im Beispiel wird ein Paket für den TCP-Port 80 von der Regel 2 angenommen, die nachfolgenden Regeln werden also nicht getestet. Ein Paket, das für TCP-Port 25 bestimmt ist, wird nur von der letzten Regel (Nummer 19) abgefangen. Die Regel 19 blockiert daraufhin das Paket, da OVH in den vorherigen Regeln keine Kommunikation auf Port 25 zulässt.

> [!warning]
>
> Wenn Sie die DDoS-Schutz-Funktion aktivieren, werden automatisch auch Ihre Firewall Network Regeln aktiviert, auch wenn Sie die Firewall deaktiviert haben. Um Firewall Network zu deaktivieren, denken Sie also bitte daran, Ihre Regeln zu löschen.
> 

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.