---
title: Orchestrierung eines Docker Serverclusters mit Shipyard
excerpt: ''
slug: orchestrierung_eines_docker_serverclusters_mit_shipyard
legacy_guide_number: g1762
hidden: true
---

> [!warning]
>
> **Shipyard Project** is now retired, and is no longer maintained. Read the official announcement at <https://github.com/shipyard/shipyard>.
> 

## 
Shipyard ist eine von der Docker Benutzer-Community entwickelte Applikation. Sie stellt eine gute Alternative zu Swarm dar und verfügt über ein graphisches Interface zur Verwaltung eines Clusters von Docker Maschinen, das eine Ablaufplanung der Task-Ausführung sowie die Allozierung von Ressourcen pro Container innerhalb des Ressourcen-Pools erlaubt.

Wir erstellen in einem ersten Schritt auf der Master-Maschine die Schlüssel und Zertifikate, die uns die Authentifizierung auf unseren Maschinen erlauben und darüber hinaus dafür sorgen, dass die Kommunikation zwischen unseren Servern per TLS verschlüsselt wird, um zu vermeiden, dass unsere Nodes durch eine nicht autorisierte Person kontrolliert werden: nur die mit den Zertifikaten ausgestattete(n) Maschine(n) können sich mit den Docker Clients unserer Server verbinden.

Die Vorgehensweise dazu wird in der offiziellen Dokumentation von Docker beschrieben:

[https://docs.docker.com/articles/https/](https://docs.docker.com/articles/https/)

Nachdem wir unsere Zertifikate erstellt haben, kümmern wir uns um die Client-Maschinen (Nodes). In unserem Beispiel besteht unser Cluster aus 3 Maschinen (IP-Adressen: 1.1.1.1, 2.2.2.2 und 3.3.3.3).

Wir kopieren die erstellten Schlüssel und Zertifikate mit folgendem Befehl in den Ordner /etc/docker/certs/ auf unseren Nodes:


```
scp ca.pem server-cert.pem server-key.pem user@1.1.1.1:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@2.2.2.2:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@3.3.3.3:/etc/docker/certs/
```


Für mehr Sicherheit auf der Ebene unseres Clusters richten wir noch einige IPtables Regeln auf unserer Master-Maschine und unseren Nodes ein.
Sie finden hier einige Beispiel für IPtables Regeln, die verwendet werden können.

Auf den Nodes:

Wir richten auf den Nodes folgende IPtables Regeln ein:


```
# Aufgebaute Verbindungen beibehalten
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# Loopback erlauben
iptables -t filter -A INPUT -i lo -j ACCEPT

# ICMP (Ping)
iptables -t filter -A INPUT -p icmp -j ACCEPT

# SSH Eingehend
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 22 -j ACCEPT

# /!\ ACHTUNG: Überprüfen Sie die hier angegebene IP-Adresse genau, dies muss zum Beispiel Ihre Verbindungs-IP oder die IP-Adresse der Master-Maschine sein. Nur die hier angegebene(n) Adresse(n) kann/können sich per SSH mit den Nodes verbinden.

# HTTP Eingehend
iptables -t filter -A INPUT -p tcp --dport 80 -j ACCEPT

# SSL Eingehend
iptables -t filter -A INPUT -p tcp --dport 443 -j ACCEPT

# Docker Eingehend
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 2375 -j ACCEPT

# /!\ ACHTUNG: Überprüfen Sie die hier angegebene IP-Adresse genau. Dies muss die IP-Adresse der Master-Maschine sein, die sich als Einzige auf dem Port 2375 verbinden darf.

# Alle eingehenden Verbindungen verbieten
iptables -P INPUT DROP
iptables -P FORWARD DROP
```


Nachdem die Regeln festgelegt wurden, speichern wir diese mit folgendem Befehl, damit sie beim Start angewandt werden:


```
apt-get install iptables-persistent
```


Außerdem wählen wir bei der Frage, ob die IPtables IPv4 Regeln gespeichert werden sollen, "Ja" aus.

/!\ ACHTUNG: Wir empfehlen Ihnen, die korrekte Funktion Ihrer Regeln zu überprüfen, bevor Sie diese abspeichern. So genügt bei Problemen ein einfacher Reboot Ihrer Maschinen, um die Regeln zurückzusetzen, wenn diese noch nicht gespeichert wurden.

Es können jederzeit weitere IPtables Regeln hinzugefügt und mit folgendem Befehl gespeichert werden:


```
iptables-persistent save
```


Auf dem Master:

Wir richten auf dem Master folgende IPtables Regeln ein:


```
# Aufgebaute Verbindungen beibehalten
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# Loopback erlauben
iptables -t filter -A INPUT -i lo -j ACCEPT

# ICMP (Ping)
iptables -t filter -A INPUT -p icmp -j ACCEPT

# Shipyard Web Eingehend
iptables -t filter -A INPUT -s "Öffentliche IP Ihrer Verbindung oder Ihres VPN" -p tcp --dport 8080 -j ACCEPT

# /!\ ACHTUNG: Überprüfen Sie die hier angegebene IP-Adresse genau, dies muss zum Beispiel Ihre Verbindungs-IP oder die IP-Adresse Ihres VPN sein. Nur die hier angegebene(n) Adresse(n) kann/können sich mit dem Shipyard Interface verbinden.

# SSH Eingehend
iptables -t filter -A INPUT -s "Öffentliche IP Ihrer Verbindung oder Ihres VPN" -p tcp --dport 22 -j ACCEPT

# /!\ ATTENTION : Überprüfen Sie die hier angegebene IP-Adresse genau, dies muss zum Beispiel Ihre Verbindungs-IP oder die IP-Adresse Ihres VPN sein. Nur die hier angegebene(n) Adresse(n) kann/können sich per SSH mit dem Master verbinden.

# Alle eingehenden Verbindungen verbieten
iptables -t filter -P INPUT DROP
iptables -t filter -P FORWARD DROP
```


Nachdem die Regeln festgelegt wurden, speichern wir diese mit folgendem Befehl, damit sie beim Start angewandt werden:


```
apt-get install iptables-persistent
```


Außerdem wählen wir bei der Frage, ob die IPtables IPv4 Regeln gespeichert werden sollen, "Ja" aus.

/!\ ACHTUNG: Wir empfehlen Ihnen, die korrekte Funktion Ihrer Regeln zu überprüfen, bevor Sie diese abspeichern. So genügt bei Problemen ein einfacher Reboot Ihrer Maschinen, um die Regeln zurückzusetzen, wenn diese noch nicht gespeichert wurden.

Es können jederzeit weitere IPtables Regeln hinzugefügt und mit folgendem Befehl gespeichert werden:


```
iptables-persistent save
```




## 
Nachdem wir Docker auf unseren 3 Maschinen installiert haben, können nun auch mit Docker Machine bereitgestellte RunAbove Instanzen verwendet werden. Wir aktivieren nun einen Port für den Docker daemon (zum Beispiel Port 2375, den von der [IANA](http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=docker) zugewiesenen offiziellen Port), damit diese Maschinen mit dem Master kommunizieren können.

Dazu halten wir zuerst Docker auf allen unseren Maschinen mit folgendem Befehl an:


```
service docker stop
```


Wir begeben uns anschließend in den Ordner, in dem unsere Zertifikate gespeichert sind:


```
cd /etc/docker/
```


Wir starten jetzt Docker und lassen die Kommunikation über den Port 2375 mit TLS Authentifizierung laufen, indem wir folgenden Befehl auf allen unseren Nodes ausführen:


```
docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node1

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node2

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node3
```


/!\ ACHTUNG: Diese Optionen sind nicht persistent: wenn die Maschine einen Reboot durchführt, muss Docker mit diesen Optionen erneut gestartet werden. Idealerweise werden diese Optionen deshalb in der Umgebungsvariable $DOCKER_OPTS angegeben. Unter Ubuntu können sie einfach in /etc/default/docker eingetragen werden.

Wichtig ist hier auch die Verwendung von "--label name=node1", das es uns erlaubt, jeden Node mit einem eindeutigen Label zu versehen. Dies ermöglicht es uns im weiteren Verlauf, einen Docker Container über ein System von Regeln auf einem bestimmten Node zu starten.

Weiter geht es nun mit der Installation von Shipyard auf der Manager-Maschine.


## 
Wir starten zuerst eine RethinkDB Data Volume Instanz:


```
docker run -it -d --name shipyard-rethinkdb-data --entrypoint /bin/bash shipyard/rethinkdb -l
```



Wir starten anschließend RethinkDB unter Verwendung des zuvor erstellten Data Volumes:


```
docker run -it -P -d --name shipyard-rethinkdb --volumes-from shipyard-rethinkdb-data shipyard/rethinkdb
```



/!\ ACHTUNG: Wenn Ihr Server direkt vom Internet aus erreichbar ist, lauscht RethinkDB öffentlich auf den Ports 49153 (lokale Instanz), 49154 (Cluster) und 49155 (Web-Interface).

Wir starten dann den Shipyard Controller und verbinden diesen mit der Datenbank (über "--link shipyard-rethinkdb:rethinkdb"):


```
docker run -it -p 8080:8080 -d --name shipyard --link shipyard-rethinkdb:rethinkdb shipyard/shipyard
```



Shipyard erstellt standardmäßig einen Benutzer "admin" mit dem Passwort "shipyard".

Es wird empfohlen, vor dem Zugriff auf das Web-Interface das Passwort für den Zugriff auf Shipyard zu ändern.

Wir starten dazu zuerst einen Container, der uns den Zugriff auf das CLI von Shipyard ermöglicht:


```
docker run -it shipyard/shipyard-cli
```


Wir loggen uns ein:


```
shipyard cli> shipyard login
URL:http://<IHRE_MASCHINE>:8000
Username: admin
Password: shipyard
```


Und ändern dann das Passwort:


```
shipyard cli> shipyard change-password
Password: <IHR_PASSWORT>
Confirm: <WIEDERHOLUNG>
```


Nach der Änderung des Passworts verlassen wir das CLI mit STRG+D.

Wir können jetzt über die URL http://<ihre-host-ip>:8080 auf das Shipyard Interface zugreifen und uns mit dem Benutzernamen "admin" und dem neu gesetzten Passwort einloggen.

Nach dem Einloggen können wir nun in der Rubrik "Engines" im Shipyard Web-Interface die verwendeten Engines (die Nodes) eintragen:

![](images/img_2612.jpg){.thumbnail}
Denken Sie daran, Ihre zuvor erstellten Sicherheitszertifikate per Copy / Paste in die Rubriken SSL Certificate, SSL Key und CA Certificate einzufügen.
Diese Operation muss für jeden einzelnen Node durchgeführt werden (achten Sie darauf, ein eindeutiges Label für jeden Ihrer Nodes zu vergeben).

![](images/img_2613.jpg){.thumbnail}
Es können auch Engines direkt über das CLI hinzugefügt werden. Dazu starten wir den CLI Container von Shipyard:


```
docker run -it -v /etc/docker/certs/:/home/ shipyard/shipyard-cli
```


Wichtig ist hier die Verwendung von "-v /etc/docker/certs/:/home/", das es uns erlaubt, ein gemeinsam genutztes Verzeichnis für unsere Host-Maschine (den Master) und den auf der gleichen Maschine ausgeführten CLI Container von Shipyard zu erstellen, damit der Container auf die zuvor erstellten Zertifikate zugreifen kann.

Wir loggen uns ein:


```
shipyard cli> shipyard login
URL:http://<IHRE_MACHINE>:8000
Username: admin
Password: ihr_passwort
```


Und führen folgenden Befehl aus:


```
shipyard add-engine --id node1 --addr https://1.1.1.1:2375 --label node1 --ssl-cert /home/client-cert.pem --ssl-key /home/client-key.pem --ca-cert /home/ca.pem
```


Danach verlassen wir das CLI wieder mit STRG+D.


## 
In der Rubrik "Containers" können wir nun alle auf den verschiedenen Nodes befindlichen Container einsehen und verwalten:

![](images/img_2614.jpg){.thumbnail}

![](images/img_2615.jpg){.thumbnail}
Mit einem Klick auf "Deploy" können wir die Container auf allen oder nur auf bestimmten Nodes starten (durch Auswahl des Labels der Nodes, auf denen der Container betrieben werden soll):

![](images/img_2616.jpg){.thumbnail}
Wir verfügen nun über ein System zur Orchestrierung der verschiedenen Docker Maschinen und können unsere Applikationen / Container innerhalb unseres Clusters schnell und einfach über ein grafisches Interface in Betrieb nehmen.
