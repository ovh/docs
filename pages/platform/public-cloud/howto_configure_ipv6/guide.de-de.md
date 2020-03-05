---
title: 'IPV6 auf einer Public Cloud Instanz konfigurieren'
slug: ipv6-konfigurieren
excerpt: 'Anleitung zum Konfigurieren von IPv6 auf einer Public Cloud Instanz'
section: 'Netzwerk und IP'
---

**Letzte Aktualisierung am 25.11.2019**

## Ziel

Internet Protocol Version 6 (IPv6) ist die neueste Version des Internet Protocol (IP). Seit Langem wird die Ausschöpfung der verfügbaren IPv4-Adressen erwartet. Diese Version soll Abhilfe schaffen, indem Adressen aus 128 Bits statt der herkömmlichen 32 Bits des IPv4 verwendet werden.

Jede Public Cloud Instanz wird mit einer IPv4-Adresse und einer IPv6-Adresse ausgeliefert.

Standardmäßig ist nur die IPv4-Adresse eingerichtet.

**In dieser Anleitung möchten wir Ihnen zeigen, wie Sie eine IPv6-Adresse auf einer Public Cloud Instanz konfigurieren können.**


## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie verfügen bereits über eine Public Cloud Instanz, wobei das Modell keine Rolle spielt.
- Sie haben SSH-Kenntnisse.
- Sie haben Grundkenntnisse zu Netzwerken.


## In der praktischen Anwendung

### Glossar

Hier ein kurzes Glossar der in dieser Anleitung verwendeten Begriffe:

|Glossar|Beschreibung|
|---|---|
|IPV6_BLOCK|Der Ihrem Dienst zugewiesene IPv6-Block|
|YOUR_IPV6|Die IPv6-Adresse, die Ihrem Dienst zugewiesen ist|
|IPv6_PREFIX|Das Präfix Ihres IPv6-Blockes (Bsp. für "2607:5300:60:62ac::/128": netmask = 128)|
|IPv6_GATEWAY|Das Gateway Ihres IPv6-Blocks|


### Netzwerk-Informationen abrufen

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, und klicken Sie oben auf der Seite auf `Public Cloud`{.action}. Nachdem Sie links Ihr Projekt ausgewählt haben, wählen Sie das Menü `Instances`{.action} und klicken Sie dann auf `...`{.action} und `Instanz-Details`{.action} neben der gewünschten Instanz.

![Public-Cloud-IPv6](images/pcipv61.png){.thumbnail}

Alle erforderlichen Informationen werden im Abschnitt **Netzwerke** angezeigt.

![Public-Cloud-IPv6](images/pcipv62.png){.thumbnail}

### Beispiele für persistente Konfigurationen

> [!primary] **Beispiele**
> 
>Die untenstehenden Informationen dienen lediglich als Beispiele.
>
>Als Administrator Ihrer Dienste obliegt es Ihnen, diese an Ihre Distribution anzupassen.
>

Verbinden Sie sich zunächst über SSH mit Ihrer  Instanz.

#### **Mit Debian/Ubuntu**

Wenn wir davon ausgehen, dass Ihr Interface eth0 ist, und Sie ein Debian-Betriebssystem verwenden, sollte die hinzuzufügende Konfiguration wie folgt aussehen:

Anzupassende Datei (mit Superuser-Rechten): /etc/network/interfaces

```
iface eth0 inet6 static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Hier ein konkretes Beispiel:

```
iface eth0 inet6 static
address 2001:41d0:xxx:xxxx::999
netmask 128
post-up /sbin/ip -6 route add 2001:41d0:xxx:xxxx::111 dev eth0
post-up /sbin/ip -6 route add default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del 2001:41d0:xxx:xxxx::111 dev eth0
```
#### **Mit RedHat / CentOS**

Wenn wir davon ausgehen, dass Ihr Interface eth0 ist, sollte die Konfiguration wie folgt aussehen:

Anzupassende Datei (mit "sudo"-Rechten): /etc/sysconfig/network-scripts/ifcfg-eth0

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Hier ein praktisches Beispiel:

```
IPV6INIT=yes
IPV6ADDR=2001:41d0:xxx:xxxx::999
IPV6_DEFAULTGW=2001:41d0:xxx:xxxx::111
```

#### **Mit Windows**

Gehen Sie in den Bereich `Netzwerkverbindungen`{.action} Ihrer Windows-Oberfläche.

![Public-Cloud-IPv6](images/pcipv63.png){.thumbnail}

Öffnen Sie danach per Klick mit der rechten Maustaste auf Ihre Netzwerkschnittstelle `Eigenschaften`{.action}.

![Public-Cloud-IPv6](images/pcipv64.png){.thumbnail}

Wählen Sie `IPv6`{.action} und klicken danach auf `Eigenschaften`{.action}.

![Public-Cloud-IPv6](images/pcipv65.png){.thumbnail}

Tragen Sie schließlich die Informationen zu Ihrem IPv6 in die passenden Felder ein.

![Public-Cloud-IPv6](images/pcipv66.png){.thumbnail}

## Diagnose

Sie haben IPv6 konfiguriert, aber es funktioniert dennoch nicht? 

Mit einem einfachen Mittel lässt sich herausfinden, ob der Fehler in der durchgeführten Konfigurierung, oder im Netzwerk von OVHcloud liegt.

Zunächst [stellen Sie Ihre Instanz auf den Rescuemodus "rescue-pro" um](https://docs.ovh.com/de/public-cloud/umstellung_einer_instanz_auf_den_rescue-modus/).

Nutzen Sie nun die nachfolgenden Befehle, um Ihre IP-Adresse nicht-persistent zu konfigurieren, wobei Sie die Platzhalter mit Ihren Spezifikationen ersetzen:

```
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Prüfen Sie Ihr Netzwerk erneut mit "ping6", zum Beispiel:

```
ping6 ipv6.google.com
```
Wenn Ihre Instanz antwortet, wurde wahrscheinlich ein Schritt in Ihrer ursprünglichen Konfigurierung nicht korrekt ausgeführt.

Zögern Sie jedenfalls nicht, sich mit Testergebnissen zu den oben erwähnten Angaben an unseren [Kundendienst zu wenden](https://www.ovh.com/manager/dedicated/#/support/tickets/new), um eine Analyse von unserer Seite zu erhalten.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.