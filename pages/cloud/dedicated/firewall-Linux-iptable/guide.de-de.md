---
title: Konfiguration der Linux Firewall mit iptables
excerpt: Hier erfahren Sie, wie Sie einen Server mit iptables sichern.
slug: firewall-iptables
section: Tutorial
order: 01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Stand 31.01.2022**

## Ziel

Ihr Dedicated Server ist mit einer Firewall ausgestattet. Firewalls schaffen eine Barriere zwischen einem vertrauenswürdigen und einem unzuverlässigen Netzwerk.
Firewalls funktionieren, indem sie Regeln festlegen, die den erlaubten Traffic und den gesperrten Traffic regeln. Die für Linux-Systeme entwickelte Firewall ist iptables.

**Hier erfahren Sie, wie Sie Ihren dedizierten Server mit iptables sichern.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen spezialisierten Dienstleister zu kontaktieren, wenn Sie Probleme oder Zweifel hinsichtlich der Administration, Nutzung oder Absicherung eines Servers haben. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
>

## Voraussetzungen

- Sie haben einen [Dedizierten Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem OVHcloud Account
- Administrator-Zugang (root/sudo) zu Ihrem Server über SSH

## In der praktischen Anwendung

> [!primary]
>
> Diese Anleitung zeigt die Befehle für eine Ubuntu Server Distribution an.
>
> Dies ist eine allgemeine Anleitung. Es kann sein, dass aufgrund der Distribution und/oder des Betriebssystems, das Sie verwenden, einige Befehle entsprechend angepasst werden müssen. In manchen Tipps wird Ihnen geraten, ein Tool eines Dritten zu verwenden. Bei Fragen zur Nutzung eines solchen Tools lesen Sie bitte die offizielle Dokumentation des jeweiligen Herausgebers.  
>

### Schritt 1: Ihr System aktualisieren

Die Entwickler von Distributionen und Betriebssystemen bieten häufig Updates der Softwarepakete an, meistens aus Sicherheitsgründen. **Deswegen ist es für die Sicherheit Ihres Servers äußerst wichtig, Ihre Distribution oder Ihr Betriebssystem immer auf dem neuesten Stand zu halten.**

Weitere Informationen finden Sie [in unserer Anleitung](https://docs.ovh.com/de/dedicated/dedizierten-server-sichern/) zur Sicherung eines Dedicated Servers.

### Schritt 2: die iptables Firewall unter Ubuntu installieren

> [!primary]
>
> Es gibt zwei verschiedene Versionen von iptables, für IPv4 und IPv6. Die Regeln, die wir in diesem Linux iptables Tutorial beachten, betreffen IPv4.
> Um iptables für IPv6 zu konfigurieren müssen Sie das iptables6 Dienstprogramm verwenden. Diese beiden Protokolle funktionieren nicht miteinander und müssen unabhängig konfiguriert werden.
>

iptables ist standardmäßig für die meisten Linux-Systeme installiert. Um zu bestätigen, dass iptables installiert ist, verwenden Sie folgenden Befehl:

```bash
sudo apt-get install iptables
```

Das Beispiel des Outputs in Ubuntu bestätigt, dass die neueste Version von iptables bereits vorhanden ist:

![iptables-version](images/step2-version-iptables.PNG){.thumbnail}

Ein iptables-Befehl ist im Allgemeinen wie folgt:

```bash
sudo iptables [option] CHAIN_rule [-j target]
```

Hier eine Liste mit einigen gängigen iptables:

- -A -—append: Füge eine Regel zu einer Kette hinzu (am Ende).
- -C -—check: Suche nach einer Regel, die den Anforderungen der Kette entspricht.
- -D —-delete: Die spezifizierten Regeln einer Kette löschen.
- -F —-flush: Löscht alle Regeln.
- -I —-insert: Füge eine Regel zu einer bestimmten Position hinzu.
- -L —-list: Zeigt alle Regeln einer Kette an.
- -N -new-chain: Erstelle eine neue Kette.
- -v —-verbose Zeigt bei der Verwendung einer Listenoption mehr Informationen an.
- -X —-delete-chain: Die gelieferte Kette löschen.

### Schritt 3: den aktuellen Zustand von iptables überprüfen

Um alle aktuellen Regeln auf Ihrem Server anzuzeigen, geben Sie folgenden Befehl im Fenster des Endgeräts ein:

```bash
sudo iptables -L
```

Das System zeigt den Status Ihrer Sender an.<br>
Der Start wird drei Sender erfassen:

![Check-Current-iptables](images/Check-Current-iptables.PNG){.thumbnail}

### Schritt 4: Traffic auf Localhost erlauben

Um den Traffic Ihres eigenen Systems (des Localhosts) zu erlauben, fügen Sie die Eingangskette wie folgt hinzu:

```bash
sudo iptables -A INPUT -i lo -j ACCEPT
```

Mit diesem Befehl wird die Firewall konfiguriert, um den Traffic für das Localhost-Interface (lo) (-i) zu akzeptieren. Von nun an wird alles, was aus Ihrem System kommt, über Ihre Firewall übertragen.
Sie müssen diese Regel festlegen, damit die Anwendungen mit dem localhost-Interface kommunizieren können.

### Schritt 5: Traffic auf bestimmten Ports erlauben <a name="step5"></a>

Diese Regeln erlauben den Traffic auf den verschiedenen Ports, die Sie mithilfe der unten aufgeführten Befehle angeben.
Ein Port ist ein spezifizierter Kommunikationsendpunkt für einen bestimmten Datentyp.

Um den HTTP-Web-Traffic zu erlauben geben Sie folgenden Befehl ein:

```bash
sudo iptables -A INPUT -p tcp -—dport 80 -j ACCEPT
```

Um nur den eingehenden SSH-Traffic (Secure Shell) zu erlauben geben Sie Folgendes ein:

```bash
sudo iptables -A INPUT -p tcp -—dport 22 -j ACCEPT
```

Um den HTTPS-Internetverkehr zu erlauben geben Sie folgenden Befehl ein:

```bash
sudo iptables -A INPUT -p tcp —-dport 443 -j ACCEPT
```

Die Optionen funktionieren wie folgt:

- -p: Überprüfen Sie das angegebene Protokoll (tcp).
- -—dport: Gibt den Zielport an.
- -j jump: Führt die 

> [!warning]
> Wenn Sie den Zugriff auf Ihren Server verlieren, können Sie jederzeit das KVM/IPMI Tool verwenden, um erneut darauf zuzugreifen, Ihre Konfiguration zu ändern oder Ihre Regeln zu löschen.
>
> Weitere Informationen zum Zugriff auf dieses Tool finden Sie in dieser [Anleitung](https://docs.ovh.com/de/dedicated/verwendung-ipmi-dedicated-server/).
> 

### Schritt 6: den Traffic nach IP-Adresse kontrollieren

Verwenden Sie folgenden Befehl, um den Traffic von einer bestimmten IP-Adresse aus zu akzeptieren.

```bash
sudo iptables -A INPUT -s Ihre_IP_adresse erlauben -j ACCEPT
```

Ersetzen Sie die IP-Adresse im Befehl mit der IP-Adresse, die Sie autorisieren möchten.

Sie können auch den Traffic von einer IP-Adresse aus sperren 

```bash
sudo iptables -A INPUT -s Ihre_IP_adresse_zu_blockieren -j DROP
```

Ersetzen Sie die IP-Adresse im Befehl mit der IP-Adresse, die Sie blockieren möchten.

Sie können den Traffic aus einem IP-Adressbereich mit folgendem Befehl zurückweisen:

```bash
sudo iptables -A INPUT -m iprange —-src-range ihre_IP_adresse_anfang-ihre_end_adresse -j REJECT
```

Die in den Beispielen verwendeten Optionen funktionieren wie folgt:

- -m: Entspricht der angegebenen Option.
- -iprange: Zeigt dem System an, auf einen IP-Adressbereich zu warten statt auf einen.
- —-src range: Identifiziert den IP-Adressbereich.

### Schritt 7: unerwünschten Traffic

Wenn Sie iptables Firewall-Regeln festlegen, müssen Sie unbefugten Zugriff verhindern, indem Sie Traffic aus anderen Ports löschen:

```bash
sudo iptables -A INPUT -j DROP
```

Die Option -A fügt der Kette eine neue Regel hinzu. Wenn eine Verbindung über andere Ports als die von Ihnen definierten läuft, wird sie aufgegeben.

> [!warning]
> 
>Achtung, wenn Sie diesen Befehl eingeben, bevor Sie [Schritt 5](#step5) ausführen, blockieren Sie alle Zugänge, auch den laufenden, den SSH-Zugang. Dies ist besonders problematisch bei einer Maschine, auf die Sie aus der Ferne zugreifen. 
>

### Schritt 8: eine Regel löschen

Eine genauere Methode besteht darin, die Zeilennummer einer Regel zu löschen.

```bash
sudo iptables -P INPUT DROP 
```

Zuerst zeigen Sie alle Regeln auf und geben Sie folgendes ein:

```bash
sudo iptables -L --line-numbers
```

![line-numbers](images/Step7-all-rules.PNG){.thumbnail}

Suchen Sie die Zeile der Firewall-Regel, die Sie löschen möchten, und führen Sie diesen Befehl aus:

```bash
sudo iptables -D INPUT <Number>
```

Ersetzen Sie `Number` mit der Zeilennummer, die Sie löschen möchten.

### Schritt 9: Ihre Änderungen speichern

Beim Neustart des Systems behält iptables nicht die Regeln, die Sie erstellt haben.
Jedes Mal, wenn Sie iptables unter Linux konfigurieren, gelten alle von Ihnen vorgenommenen Änderungen nur bis zum nächsten Neustart.

Um die Regeln in den auf Ubuntu basierenden Systemen zu speichern geben Sie folgenden Eintrag ein:

```bash
sudo -s iptables-save -c
```

Beim nächsten Start Ihres Systems übernimmt iptables automatisch die Regeln der Firewall.

Sie können ab sofort iptables Basis-Firewall-Regeln für Ihren Linux-Server konfigurieren.
Zögern Sie nicht, zu experimentieren, denn Sie können immer die Regeln löschen, die Sie nicht brauchen, oder alle Regeln leeren und neu starten.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
