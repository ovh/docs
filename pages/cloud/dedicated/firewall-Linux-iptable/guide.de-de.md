---
title: Konfiguration der Linux Firewall mit iptables
excerpt: Erfahren Sie hier, wie Sie einen Server mit iptables sichern
slug: firewall-iptables
section: Tutorial
order: 01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Letzte Aktualisierung am 31.01.2022**

## Ziel

Ihr Dedicated Server ist mit einer Firewall ausgestattet. Firewalls schaffen eine Barriere zwischen einem vertrauenswürdigen und einem unzuverlässigen Netzwerk.
Firewalls implementieren Regeln, die erlaubten und gesperrten Traffic verwalten. Die für Linux-Systeme etablierte Firewall ist *iptables*.

**Diese Anleitung erklärt, wie Sie Ihren dedizierten Server mit *iptables* sichern.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Dienste haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Sie können sich auch jederzeit an unsere [Community](https://community.ovh.com/en/) wenden, um sich mit anderen Benutzern auszutauschen.
>

## Voraussetzungen

- Sie verfügen über einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account.
- Sie haben administrativen Zugriff (root/sudo) über SSH auf Ihren Server. 

## In der praktischen Anwendung

> [!primary]
>
> Diese Anleitung verwendet die Befehle für eine Ubuntu Server Distribution.
>
> Es handelt sich hierbei eine generelle Vorgehensweise. Möglicherweise müssen aufgrund der Distribution und/oder des Betriebssystems, das Sie verwenden, einige Befehle entsprechend angepasst werden. Vereinzelt wird Ihnen geraten, ein Tool eines Drittanbieters zu verwenden. Bei Fragen zur Nutzung eines solchen Tools lesen Sie bitte die offizielle Dokumentation des jeweiligen Herausgebers.  
>

### Schritt 1: Ihr System aktualisieren

Die Entwickler von Distributionen und Betriebssystemen bieten häufig Updates der Softwarepakete an, meistens aus Sicherheitsgründen. **Deswegen ist es für die Sicherheit Ihres Servers äußerst wichtig, Ihre Distribution oder Ihr Betriebssystem immer auf dem neuesten Stand zu halten.**

Weitere Informationen finden Sie in unserer [Anleitung zur Sicherung eines Dedicated Servers](https://docs.ovh.com/de/dedicated/dedizierten-server-sichern/).

### Schritt 2: Die iptables Firewall mit Ubuntu installieren

> [!primary]
>
> Es gibt zwei verschiedene Versionen von *iptables*, für IPv4 und IPv6. Die Regeln, die wir in diesem Linux-spezifischen Tutorial erläutern, betreffen IPv4.
> Um *iptables* für IPv6 zu konfigurieren müssen Sie das Dienstprogramm *iptables6* verwenden. Diese beiden Protokolle funktionieren nicht miteinander und müssen unabhängig konfiguriert werden.
>

*iptables* ist standardmäßig für die meisten Linux-Systeme installiert. Um zu bestätigen, dass *iptables* installiert ist, verwenden Sie folgenden Befehl:

```bash
sudo apt-get install iptables
```

Das folgende Beispiel des Outputs in Ubuntu bestätigt, dass die neueste Version von *iptables* bereits vorhanden ist:

![iptables-version](images/step2-version-iptables.PNG){.thumbnail}

Ein *iptables*-Befehl ist im Allgemeinen folgendermaßen aufgebaut:

```bash
sudo iptables [option] CHAIN_rule [-j target]
```

Diese Liste enthält einige der üblichen Optionen:

- -A -—append: Füge eine Regel zu einer Kette (*Chain*) hinzu (am Ende).
- -C -—check: Suche nach einer Regel, die den Anforderungen der Kette entspricht.
- -D —-delete: Die spezifizierten Regeln einer Kette löschen.
- -F —-flush: Löscht alle Regeln.
- -I —-insert: Füge eine Regel an einer bestimmten Position hinzu.
- -L —-list: Zeigt alle Regeln einer Kette an.
- -N -new-chain: Erstelle eine neue Kette.
- -v —-verbose Zeigt bei der Verwendung einer Listenoption mehr Informationen an.
- -X —-delete-chain: Die gegebene Kette löschen.

### Schritt 3: Den aktuellen Zustand von iptables überprüfen

Um alle aktuellen Regeln auf Ihrem Server anzuzeigen, geben Sie folgenden Befehl in der Kommandozeile ein:

```bash
sudo iptables -L
```

Das System zeigt den Status Ihrer Tabellen an.<br>
Die Ausgabe enthält drei Ketten:

![Check-Current-iptables](images/Check-Current-iptables.PNG){.thumbnail}

### Schritt 4: Traffic auf localhost erlauben

Um Traffic von Ihrem eigenen System (*localhost*) zu erlauben, fügen Sie die Eingangskette wie folgt hinzu:

```bash
sudo iptables -A INPUT -i lo -j ACCEPT
```

Dieser Befehl konfiguriert die Firewall, um den *Input*-Traffic für das Interface (-i) von *localhost* (lo) zu akzeptieren. Damit wird dieser Traffic über Ihre Firewall übertragen.
Sie müssen diese Regel festlegen, damit Anwendungen mit der Schnittstelle des *localhost* kommunizieren können.

### Schritt 5: Traffic auf bestimmten Ports erlauben <a name="step5"></a>

Diese Regeln erlauben den Traffic auf spezifischen Ports, die Sie mithilfe der unten aufgeführten Befehle festlegen.
Ein Port ist ein Kommunikationsendpunkt für einen bestimmten Datentyp.

Um HTTP-Web-Traffic zu erlauben geben Sie folgenden Befehl ein:

```bash
sudo iptables -A INPUT -p tcp -—dport 80 -j ACCEPT
```

Um eingehenden SSH-Traffic (Secure Shell) zu erlauben geben Sie Folgendes ein:

```bash
sudo iptables -A INPUT -p tcp -—dport 22 -j ACCEPT
```

Um HTTPS-Web-Traffic zu erlauben geben Sie folgenden Befehl ein:

```bash
sudo iptables -A INPUT -p tcp —-dport 443 -j ACCEPT
```

Die Optionen funktionieren wie folgt:

- -p: Überprüft das angegebene Protokoll (TCP).
- -—dport: Gibt den Zielport an.
- -j (jump): Führt die Aktion aus.

> [!warning]
> Wenn Sie den Zugriff auf Ihren Server verlieren, können Sie immer noch das KVM/IPMI Tool verwenden, um Ihre Konfiguration zu ändern oder Ihre Regeln zu löschen.
>
> Weitere Informationen zum Zugriff auf dieses Tool finden Sie in [dieser Anleitung](https://docs.ovh.com/de/dedicated/verwendung-ipmi-dedicated-server/).
> 

### Schritt 6: Den Traffic nach IP-Adresse kontrollieren

Verwenden Sie folgenden Befehl, um den Traffic von einer bestimmten IP-Adresse zu akzeptieren.

```bash
sudo iptables -A INPUT -s IP-Adresse -j ACCEPT
```

Ersetzen Sie IP_Adresse im Befehl mit der IP-Adresse, die Sie autorisieren möchten.

Sie können auch den Traffic von einer IP-Adresse aus sperren:

```bash
sudo iptables -A INPUT -s IP_Adresse -j DROP
```

Ersetzen Sie die IP_Adresse im Befehl mit der IP-Adresse, die Sie blockieren möchten.

Sie können den Traffic aus einem IP-Adressbereich mit folgendem Befehl zurückweisen:

```bash
sudo iptables -A INPUT -m iprange —-src-range Start_IP-End_IP -j REJECT
```

Die in den Beispielen verwendeten Optionen funktionieren wie folgt:

- -m: Entspricht der angegebenen Option.
- -iprange: Teilt dem System mit, einen IP-Adressbereich zu erwarten statt einer einzelnen IP-Adresse.
- —-src-range: Identifiziert den IP-Adressbereich.

### Schritt 7: Unerwünschten Traffic ablehnen

Wenn Sie Firewall-Regeln für *iptables* festlegen, müssen Sie unerwünschten Zugriff verhindern, indem Sie Traffic aus anderen Ports ablehnen:

```bash
sudo iptables -A INPUT -j DROP
```

Die Option "-A" fügt der Kette eine neue Regel hinzu. Wenn eine Verbindung über andere Ports als die von Ihnen bereits definierten läuft, wird sie abgebrochen.

> [!warning]
> 
>Wenn Sie diesen Befehl eingeben, bevor Sie [Schritt 5](#step5) ausführen, blockieren Sie alle Zugänge und damit auch die laufende SSH-Verbindung. Dies ist besonders relevant bei einem Server, auf den Sie *remote* zugreifen. 
>

### Schritt 8: Eine Regel löschen

Eine genauere Methode besteht darin, die Zeilennummer einer Regel zu löschen:

```bash
sudo iptables -P INPUT DROP 
```

Lassen Sie zunächst alle Regeln anzeigen:

```bash
sudo iptables -L --line-numbers
```

![line-numbers](images/Step7-all-rules.PNG){.thumbnail}

Suchen Sie die Zeile der Firewall-Regel, die Sie löschen möchten, und führen Sie diesen Befehl aus:

```bash
sudo iptables -D INPUT <Nummer>
```

Ersetzen Sie `Nummer` mit der Zeilennummer, die Sie löschen möchten.

### Schritt 9: Ihre Änderungen speichern

Beim Neustart des Systems werden Regeln, die Sie für *iptables* erstellt haben, nicht beibehalten.
Jedes Mal, wenn Sie *iptables* unter Linux konfigurieren, greifen alle von Ihnen vorgenommenen Änderungen nur bis zum nächsten Neustart.

Um die Regeln in auf Ubuntu basierenden Systemen zu speichern, geben Sie folgenden Befehl ein:

```bash
sudo -s iptables-save -c
```

Beim nächsten Start Ihres Systems lädt *iptables* automatisch die Firewall-Regeln.

Sie können nun Firewall-Regeln mit *iptables* für Ihren Linux-Server konfigurieren.
Zögern Sie nicht, zu experimentieren, denn Sie können nicht mehr benötigte Regeln immer wieder löschen, oder alle Regeln leeren und neu starten.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
