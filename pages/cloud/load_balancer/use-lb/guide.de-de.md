---
title: Verwaltung des Loadbalancers über das Kundencenter
slug: verwendung-lb
excerpt: Zusammenfassung der wesentlichen Funktionen zur Verwaltung des Loadbalancers über das Kundencenter
section: Erste Schritte
---

## Einleitung

Ziel dieser Anleitung ist es, Sie bei der erstmaligen Verwendung des Loadbalancers zu unterstützen und Ihnen die wesentlichen Funktionalitäten des Angebots vorzustellen.

## Voraussetzungen

- Zugang zu Ihrem OVHcloud Kundencenter
- Bestellung des [Loadbalancers](https://www.ovh.com/fr/solutions/load-balancer)

## Beschreibung

### Den Loadbalancer über das Kundencenter verwalten
Um den Loadbalancer über das Kundencenter zu verwalten, gehen Sie in den Bereich `Cloud`{.action} (1), dann in den Bereich `Loadbalancer`{.action} (2) im Menü links. Daraufhin erscheint die Hauptseite des Dienstes:

![Loadbalancer](images/lb_main_page.png){.thumbnail}

Auf der Hauptseite finden Sie folgende Informationen:


|Element|Funktion|
|---|---|
|Status|Zusammenfassung Ihres Loadbalancers mit dem Namen des Dienstes, den Frontends, den funktionsfähigen Farmen und den hinzugefügten Servern|
|Verwendung|Zusammenfassung der Verwendung Ihres Loadbalancers|
|Graphen|Hier finden Sie die mit Ihrer Dienstleistung verbundenen Graphen zur Anzahl der Simultanverbindungen oder der Anfragen pro Minute|
|Informationen|Ihre IPv4 und die verbundenen Additional IPs sowie die Anzahl der ausgehenden IPv4 (Details durch Klicken auf die Auslassungspunkte)|
|Konfiguration|Hier können Sie den Namen Ihres Angebots (er erscheint oben und in der Spalte links) sowie die Ciphers anpassen. Außerdem wird hier das Rechenzentrum Ihres Loadbalancers angezeigt.|
|Abo|Hier finden Sie die administrativen Details zu Ihrem Angebot|


Um ein `Frontend`{.action} oder eine `Serverfarm`{.action} hinzuzufügen, gehen Sie in den jeweiligen Tab und klicken Sie einfach auf die entsprechenden Schaltflächen. Ein Formular hilft Ihnen anschließend dabei, jeden Bestandteil Ihres Dienstes zu konfigurieren.


### Verwaltung der Frontends

Um Frontends hinzuzufügen, gehen Sie einfach in den Bereich `Frontends`{.action} und klicken auf `Ein Frontend hinzufügen`{.action}. Sie gelangen dann in folgendes Menü:


![Frontend hinzufügen](images/add_frontend.png){.thumbnail}

Details zu den Elementen eines Frontends:


|Element|Funktion|
|---|---|
|Name|Wenn Sie möchten, können Sie Ihrem Frontend einen Namen geben. Wenn Sie mehrere Frontends besitzen, können Sie diese so schneller unterscheiden.|
|Protokoll|Sie haben die Wahl zwischen HTTP, HTTPS, TCP, SSL TCP (TLS) und UDP|
|Port|Wählen Sie den zu verwendenden Eingangsport aus|
|Rechenzentrum|Für die Erstellung Ihres Frontends können Sie zwischen Ihrem Rechenzentrum oder allen wählen|
|Standardfarm|Wenn Sie mehrere Serverfarmen eingestellt haben, können Sie für jedes Frontend eine Standardfarm auswählen.|

Sie haben außerdem Zugriff auf die erweiterten Einstellungen:


![Erweiterte Einstellungen](images/advanced_frontend.png){.thumbnail}

|Element|Funktion|
|---|---|
|Dedicated Additional IP|Liste der Additional IPs der Remote-Server|
|Zugang auf bestimmte IPs begrenzen|Liste, die den Remote-Zugriff auf den Loadbalancer beschränkt, nur bei IPv4|
|HTTP-Weiterleitung|Hinzufügen einer URL zur HTTP-Weiterleitung|
|HTTP-Header|Hier fügen Sie einen HTTP-Header hinzu|


### Verwaltung der Serverfarmen
Um eine Serverfarm hinzuzufügen, gehen Sie einfach in den Bereich `Serverfarmen`{.action} und klicken dann auf `Eine Serverfarm hinzufügen`{.action}. Ihnen stehen die gleichen wesentlichen Optionen zur Verfügung wie beim Frontend. Die erweiterten Einstellungen sind jedoch anders:


![Eine Serverfarm hinzufügen](images/advanced_cluster.png){.thumbnail}

|Element|Funktion|
|---|---|
|Lastverteilungstyp|Auswahl zwischen Round Robin, First, Last, Source oder URI zum Ausgleich Ihrer IP|
|Sitzungsnachverfolgung|Die Sitzungsnachverfolgung kann über Cookies oder Quell-IP erfolgen und wird hier eingestellt|
|Monitoring-Sonde|Auswahl und Aktivierung der Monitoring-Sonde|


### Verwaltung der Server
Nachdem Ihre Serverfarm angelegt wurde, müssen Sie ihr nur noch Server zuweisen. Nachfolgend die Details zu den Optionen und den erweiterten Einstellungen:


![Server hinzufügen](images/add_server.png){.thumbnail}
![Server hinzufügen](images/add_server_advanced.png){.thumbnail}


|Element|Funktion|
|---|---|
|Name|Wenn Sie möchten, können Sie Ihrem Server einen Namen geben. Wenn Sie mehrere Server betreiben, können Sie diese so schneller unterscheiden.|
|IPv4-Adresse|Die IP des Dienstes hinzufügen, der als Server fungiert|
|Port|Server-Port|
|Backup-Server|Hier können Sie einstellen, ob es sich bei diesem Server um einen Backup-Server handelt|
|Monitoring-Sonde der Farm verwenden|Hier können Sie festlegen, ob Sie die bei der Erstellung der Serverfarm definierte Monitoring-Sonde verwenden möchten|
|Anfragen mit SSL verschlüsseln|Verschlüsseln Sie die Anfragen mit einem SSL-Zertifikat|
|Cookie|Fügen Sie einen personalisierten Sitzungscookie hinzu|
|Zertifikatskette|Fügen Sie eine Zertfikatskette hinzu|
|Verteilungsgewicht|Auswahl des Verteilungsgewichts für die Lastverteilung|


### Verwaltung der SSL-Zertifikate
Im Bereich `SSL-Zertifikate`{.action} ist es möglich, den Loadbalancer um eine SSL-Verschlüsselung zu ergänzen. Sie haben zwei Möglichkeiten: Sie können ein SSL-Zertifikat über OVH bestellen oder ein externes Zertifikat hinzufügen.

#### SSL-Zertifikat von OVH
Um ein SSL-Zertifikat zu bestellen, gehen Sie einfach in den Bereich `SSL-Zertifikate`{.action}, klicken dann auf `Ein SSL-Zertifikat bestellen`{.action} und folgen dem Bestellprozess:


![SSL-Zertifikat bestellen](images/ordering_ssl.png){.thumbnail}


|Element|Funktion|
|---|---|
|Name|Wenn Sie möchten, können Sie Ihrem Zertifikat einen Namen geben. Wenn Sie mehrere Zertifikate verwenden, können Sie diese so schneller unterscheiden.|
|Zertifikattyp|Kostenlos (Let's Encrypt), Comodo DV oder Comodo EV (Details unter dieser Adresse: https://www.ovh.de/ssl/)|
|Fully Qualified Domain Name (FQDN)|Die betroffene(n) Domain(s)|

#### Hinzufügen eines externen SSL-Zertifikats
Wenn Sie bereits über ein eigenes SSL-Zertifikat verfügen, können Sie es direkt hinzufügen:


![Ein SSL-Zertifikat hinzufügen](images/external_ssl.png){.thumbnail}


|Element|Funktion|
|---|---|
|Name|Wenn Sie möchten, können Sie Ihrem Zertifikat einen Namen geben. Wenn Sie mehrere Zertifikate verwenden, können Sie diese so schneller unterscheiden.|
|Privater Schlüssel|Feld zur Eingabe des privaten Schlüssels, der dem Dienst hinzugefügt werden soll|
|Zertifikat|Feld zum Hinzufügen eines Zertifikats|
|Kette|Feld zur Eingabe des Root-Zertifikats, sofern nötig|


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.