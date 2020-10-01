---
title: Abruf der SQL Private Metriken in Grafana
excerpt: Abruf der SQL Private Metriken in Grafana
id: '2057'
slug: abruf_der_sql_private_metriken_in_grafana
legacy_guide_number: g2057
section: 'SQL Private'
---


## 

## Was ist Docker?
Docker ist eine kostenlose Software, die Bereitstellung von Applikationen in Software-Containern automatisiert.

![](images/img_3657.jpg){.thumbnail}

## Was ist Grafana?
Grafana ist eine Open Source Lösung zur Erstellung von Diagrammen anhand vorhandener Daten.

![](images/img_3658.jpg){.thumbnail}


## Eine Instanz
Für die Nutzung von Grafana muss Docker verwendet werden. Sie können Docker auf verschiedenen OVH Produkten installieren:


- [VPS](https://www.ovh.de/virtual_server/)
- [Dedicated Server](https://www.ovh.de/dedicated_server/)
- [Cloud Instanzen](https://www.ovh.de/cloud/instances/)




## Docker

## Installation von Docker
Informationen zur Installation von Docker abhängig von der verwendeten Maschine finden Sie in der [offiziellen Dokumentation](https://docs.docker.com/engine/installation/).

## Auf einem VPS
Wenn Sie über einen OVH VPS verfügen, können Sie die "Docker on Ubuntu" Distribution von OVH installieren, bei der Docker bereits vorinstalliert ist.

![](images/img_3659.jpg){.thumbnail}


## Grafana

## Installation von Grafana in Docker
Wenn Sie Grafana auf dem Port 80 Ihres Servers verwenden möchten, führen Sie einfach folgenden Befehl aus:


```
docker run -i -p 80:3000 grafana/grafana
```


Mehr Informationen dazu finden Sie in der [Grafana Dokumentation](http://docs.grafana.org/installation/docker/).
Sie können Grafana auch ohne Docker installieren, die Vorgehensweise dazu wird [hier](http://docs.grafana.org/installation/) beschrieben.


## Ein SQL Private Server

## Typ des SQL Private Servers
Ihr SQL Server muss vom "Docker"-Typ sein, um Metriken abrufen zu können.

## Kostenlose Aktivierung bei einem Performance Webhosting-Paket
Wenn Sie über ein Performance Webhosting verfügen, können Sie wie in [dieser Hilfe](https://www.ovh.de/g2023.alles_zum_sql_private) beschrieben kostenlos einen SQL Private Server aktivieren.

## Bestellung eines SQL Private Servers
Sie können auch direkt über Ihr OVH Kundencenter einen SQL Private Server bestellen.


- Alle neu bereitgestellten SQL Private Server sind vom "Docker"-Typ.



![](images/img_3660.jpg){.thumbnail}

## Ist mein SQL Private Server vom "Legacy"- ou "Docker"-Typ?
Die alten SQL Private Server sind alle vom "Legacy"-Typ (Beispiel: sqlprive-kx11111-009), die neuen SQL Private Server sind alle vom "Docker"-Typ (Beispiel: sx11111-012). Die Server-Typen werden auf verschiedenen Infrastrukturen betrieben.

![](images/img_3661.jpg){.thumbnail}


## Abruf des Tokens über die OVH API

## Verbindung mit der OVH API
Für die Verbindung mit der OVH API rufen Sie folgenden Link auf und melden sich mit einem Klick auf "Login" an:

[https://api.ovh.com/console/](https://api.ovh.com/console/)

![](images/img_3662.jpg){.thumbnail}

## Abruf des Tokens
Verwenden Sie folgende Funktion zum Abruf der Liste der SQL Private Server Ihres Accounts und klicken Sie anschließend auf "Execute":


```
/hosting/privateDatabase
```



![](images/img_3663.jpg){.thumbnail}
Geben Sie mit Hilfe folgender Funktion den Namen Ihres "Docker" SQL Private Servers an:


```
/hosting/privateDatabase/{serviceName}
```


Unter "graphEndpoint" finden Sie die beiden benötigten Angaben:


- readToken
- host



![](images/img_3664.jpg){.thumbnail}


## Verwendung von Grafana

## Verbindung mit Grafana
Der Zugriff auf Grafana erfolgt mit Ihrem Browser, die standardmäßigen Zugangsdaten sind:


- admin / admin



![](images/img_3665.jpg){.thumbnail}

## Hinzufügen Ihrer Datenquelle
Klicken Sie dazu in der Spalte auf der linken Seite auf "Data Sources" und dann auf "Add new".

Vervollständigen Sie dann die Angaben:


- Name: Der Name Ihrer Datenquelle, in unserem Beispiel "private SQL".
- Default: Ja
- Type: "OpenTSDB"
- URL: Tragen Sie hier den Inhalt des im vorigen Schritt über die OVH API abgerufenen "host" Felds ein
- Access: "proxy"
- Http Auth: Wählen Sie "Basic Auth" aus und entfernen Sie das Häkchen bei "With Credentials"
- User: Tragen Sie hier den Inhalt des im vorigen Schritt über die OVH API abgerufenen "readToken" Felds ein
- Password: Tragen Sie hier ebenfalls den Inhalt des im vorigen Schritt über die OVH API abgerufenen "readToken" Felds ein


Führen Sie dann einen Verbindungstest durch und fügen Sie die Datenquelle hinzu, wenn dieser erfolgreich ist.

![](images/img_3666.jpg){.thumbnail}

## Konfiguration Ihres "Dashboards"
Klicken Sie in der Spalte auf der linken Seite auf "Dashboards" und dann auf "Home" und "New".


- Sie erhalten dann ein leeres Dashboard, dass Sie mit einem Klick auf das "Manage Dashboard" Icon und "Settings" umbenennen können.
- Sie können Ihr Dashboard jederzeit mit einem Klick auf das Disketten-Icon speichern.


Ein Dashboard besteht aus verschiedenen Zeilen ("Rows"), um den erste Graphen hinzuzufügen klicken Sie auf den grünen Button und dann auf "Add Panel" und "Graph".

![](images/img_3667.jpg){.thumbnail}
Tragen Sie in der Rubrik "General" den Namen Ihres Graphen ein, in unserem Beispiel "RAM".

![](images/img_3668.jpg){.thumbnail}

- Überprüfen Sie zuerst in der Rubrik "Metrics", dass rechts unten Ihre Datenquelle ausgewählt wurde.


Die erste hinzuzufügende Metrik ist "memory.hierarchical_memory_limit". Dies entspricht dem Ihrem SQL Private Server maximal zugewiesenen RAM.

Klicken Sie anschließend auf "+ Query", um die zweite Metrik "memory.rss" hinzuzufügen. Dies entspricht dem von Ihrem Server verwendeten RAM.

![](images/img_3669.jpg){.thumbnail}
In der Rubrik "Axes & Grid" wählen Sie unter "Left Y" die Einheit "data" und dann "Bytes" aus.

![](images/img_3670.jpg){.thumbnail}

- Wählen Sie rechts oben den anzuzeigenden Zeitraum aus, in unserem Beispiel wählen wir 60 Tage.



![](images/img_3671.jpg){.thumbnail}


## Die Metriken
Folgende Metriken sind besonders interessant zur Überwachung der Performance Ihres SQL Private Servers:

|Maximal nutzbares RAM|memory.hierarchical_memory_limit|
|Verwendetes RAM|memory.rss|
|Anzahl aktiver MySQL Verbindungen|mysql.active_connections|


Mehr Informationen finden Sie in der offiziellen Dokumentation der Docker Metriken:


- [https://docs.docker.com/engine/articles/runmetrics/](https://docs.docker.com/engine/articles/runmetrics/)



