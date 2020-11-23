---
deprecated: true
title: Het beheren van een cluster Docker servers met Shipyard
excerpt: ''
slug: het_beheren_van_een_cluster_docker_servers_met_shipyard
legacy_guide_number: g1762
hidden: true
---


## 
De Shipyard applicatie is ontwikkeld door de community van Docker gebruikers. Het kan een goed alternatief voor Swarm zijn en het beschikt over GUI voor het beheer van een cluster Docker servers, zodat u taken kunt bestellen en resources kunt toewijzen per container, binnen een pool van server resources. Ga eerst naar de master server om de keys en certificaten te genereren, waarmee u kunt inloggen op verschillende servers, en vervolgens beschikt u over TLS-beveiligde uitwisselingen tussen onze verschillende servers om te vermijden, dat onze nodes kunnen worden beheerd door ongewenste personen. Alleen servers met een certificaat zullen verbinding kunnen maken met de Docker clients op onze remote servers.

Volg de stappen in de officiële Docker documentatie om dit uit te voeren:

[https://docs.docker.com/articles/https/](https://docs.docker.com/articles/https/)

Ga naar de client servers (nodes), zodra u uw certificaten heeft gegenereerd. In ons voorbeeld bevat het cluster 3 servers (IP: 1.1.1.1, 2.2.2.2 en 3.3.3.3).

Kopieer de keys en certificaten die zijn gegenereerd in het  /etc/docker/certs/ bestand naar uw nodes met het volgende commando:


```
scp ca.pem server-cert.pem server-key.pem user@1.1.1.1:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@2.2.2.2:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@3.3.3.3:/etc/docker/certs/
```


Om de beveiliging op cluster level te verhogen, zullen we iptable regels instellen op onze master server en onze nodes. Hieronder is een voorbeeld van de iptable regels, die kunnen worden toegepast:

Op de nodes:

Om iptable regels te installeren:


```
# Om iptable rules te installeren
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# Het autoriseren van een loopback
iptables -t filter -A INPUT -i lo -j ACCEPT

# ICMP (Ping)
iptables -t filter -A INPUT -p icmp -j ACCEPT

# SSH In
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 22 -j ACCEPT

#/!\ LET OP: zorg ervoor dat u het juiste IP-adres op dit level invoert. Het moet bijvoorbeeld de IP-verbinding of het IP-adres van de master server zijn. Dit zullen de enige IP's zijn, die verbinding kunnen maken naar de nodes via SSH.

#HTTP In
iptables -t filter -A INPUT -p tcp --dport 80 -j ACCEPT

#SSL In
iptables -t filter -A INPUT -p tcp --dport 443 -j ACCEPT

#Docker In
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 2375 -j ACCEPT

#/!\ LET OP: zorg ervoor dat u het correcte IP-adres invoert op dit level. Het moet het IP-adres zijn van de master server, wat de enige IP zal zijn, die kan verbinden naar port 2375.

#Stop elke inkomende verbinding
iptables -P INPUT DROP
iptables -P FORWARD DROP
```


Zodra de regels zijn ingesteld, moeten we deze opslaan, zodat deze functioneren bij het opstarten:


```
apt-get install iptables-persistent
```


En selecteer "yes" wanneer wordt gevraagd of we IPv4 iptables moeten bewaren.

/!\ LET OP: we adviseren u om na te gaan dat de regels correct werken, voordat u deze opslaat. Indien u enige niet-opgeslagen regels moet resetten, reboot dan uw servers.

U kunt op elk tijdstip iptable regels toevoegen en deze opslaan via:


```
iptables-persistent save
```


Op de master server:

Het installeren van de iptable regels:


```
#Bewaar de ingestelde verbindingen
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

#Het autoriseren van een loopback
iptables -t filter -A INPUT -i lo -j ACCEPT

#ICMP (Ping)
iptables -t filter -A INPUT -p icmp -j ACCEPT

#Shipyard web In
iptables -t filter -A INPUT -s «The public IP of your connection or VPN" -p tcp --dport 8080 -j ACCEPT» -p tcp --dport 8080 -j ACCEPT

#/!\ LET OP: zorg ervoor dat u het juiste IP-adres invoert op dit level. Het zou bijvoorbeeld het IP van uw VPN verbinding kunnen zijn. Dit zullen de enige IP's zijn, die kunnen worden verbonden naar de Shipyard interface.

#SSH In
iptables -t filter -A INPUT -s «De public IP van uw verbinding of VPN" -p tcp --dport 22 -j ACCEPT


#/!\ LET OP: zorg ervoor dat u het juiste IP-adres invoert op dit level. Het zou bijvoorbeeld het IP van uw VPN verbinding kunnen zijn. Dit zullen de enige IP's zijn, die kunnen worden verbonden via SSH naar de master server.

#Stop alle inkomende verbindingen
iptables -t filter -P INPUT DROP
iptables -t filter -P FORWARD DROP
```


Zodra de regels zijn ingesteld, moeten we deze opslaan, zodat deze werken bij het opstarten: 


```
apt-get install iptables-persistent
```


En selecteer "yes" wanneer er wordt gevraagd of we IPv4 iptables moeten opslaan.

/!\ LET OP: we adviseren u om na te gaan dat de regels correct werken, voordat u deze opslaat. Als u enkele niet bewaarde regels moet resetten, reboot dan uw servers.

U kunt op elk tijdstip iptable regels toevoegen en deze bewaren via:


```
iptables-persistent save
```




## 

Hiervoor beginnen we met het stoppen van Docker op onze servers via het commando:


```
service docker stop
```


We gaan vervolgens naar het bestand, waar onze certificaten zijn opgeslagen:


```
cd /etc/docker/
```


Dan gaan we Docker starten via de communicatie op de port 2375 met TLS authentificatie en starten we het commando onderaan elk van onze nodes:


```
docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node1

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node2

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node3
```


/!\ LET OP: deze opties blijven niet continue bestaan: als de machine reboot, moet u opnieuw Docker starten met deze opties. Het is ideaal om het te verduidelijken in de variabele van de $DOCKER_OPTS omgeving. Onder Ubuntu, kan men het eenvoudig ingeven in /etc/default/docker

Men merkt hier ook de aanwezigheid op van «--label name=node1», waarmee wij elk van onze nodes kunnen benoemen met een uniek label (waarmee wij een Docker container kunnen starten op een node, in het bijzonder via een systeem van beperkingen).

Wij kunnen dan vervolgens beginnen met de installatie van Shipyard op de server manager.


## 
U begint met het starten van een RethinkDB data volume instance:


```
docker run -it -d --name shipyard-rethinkdb-data --entrypoint /bin/bash shipyard/rethinkdb -l
```


Start RethinkDB met het vooraf gecreëerde data volume:


```
docker run -it -P -d --name shipyard-rethinkdb --volumes-from shipyard-rethinkdb-data shipyard/rethinkdb
```


/!\ LET OP: als uw server direct beschikbaar is vanaf het Internet, zult u opmerken dat RethinkDB is verbonden met de ports 49153 (local instance), 49154 (cluster) en 49155 (web interface).

We zullen dan Shipyard starten, door het te verbinden naar de database via (--link shipyard-rethinkdb:rethinkdb):


```
docker run -it -p 8080:8080 -d --name shipyard --link shipyard-rethinkdb:rethinkdb shipyard/shipyard
```


Shipyard zal dan automatisch een »admin» gebruikersnaam creëren met «shipyard» als standaard wachtwoord.

Voordat u inlogt op de web interface, raden wij u aan om uw Shipyard wachtwoord te wijzigen.
We beginnen met het opstarten van een container, waarmee we kunnen verbinden naar Shipyard CLI:


```
docker run -it shipyard/shipyard-cli
```


Voer het volgende in:


```
shipyard cli> shipyard login
URL:http://<VOTRE_MACHINE>:8000
Username: admin
Password: shipyard
Dan zullen we het wachtwoord wijzigen
shipyard cli> shipyard change-password
Password: <VOTRE_MOT_DE_PASSE>
Confirm: <ENCORE>
```


Zodra we deze actie hebben uitgevoerd, kunnen we met ctrl+d de CLI verlaten.

U heeft nu toegang tot de Shipyard interface via `http://<your-host-ip>:8080` door in te loggen met de gebruikersnaam «admin» en het wachtwoord dat u heeft ingesteld.

Zodra u bent ingelogd, kunt u engines (de nodes) toevoegen via de Shipyard web interface onder «engines»:

![](images/img_2612.jpg){.thumbnail}
Vergeet niet om ook uw beveiligingscertificaten te kopiëren/plakken, die tevoren zijn gegenereerd in de SSL-certificaat, SSL key en CA-certificaat kolommen.
En herhaal de handeling voor elk van onze nodes (let op, bepaal een uniek label voor elk van onze nodes).

![](images/img_2613.jpg){.thumbnail}
Het is ook mogelijk om servers toe te voegen via de CLI. Om dit te doen, start men de CLI container van Shipyard:


```
docker run -it -v /etc/docker/certs/:/home/ shipyard/shipyard-cli
```


U ziet hier "-v /etc/docker/certs/:/home/", hiermee kunnen wij een algemeen directory creëren tussen onze host server (de master server) en de CLI container van Shipyard, die draait op deze zelfde server, zodat de container toegang heeft naar vooraf gegenereerde certificaten.

Log in met:


```
shipyard cli> shipyard login
URL:http://<VOTRE_MACHINE>:8000
Username: admin
Password: votre_mot_de_passe
```


Start het commando:


```
shipyard add-engine --id node1 --addr https://1.1.1.1:2375 --label node1 --ssl-cert /home/client-cert.pem --ssl-key /home/client-key.pem --ca-cert /home/ca.pem
```


Zodra deze handeling is voltooid, gebruikt men ctrl+d om de CLI te verlaten.


## 
In de kolom 'containers', kunnen we nu alle containers bekijken en beheren, die zijn geïmplementeerd op onze verschillende nodes:

![](images/img_2614.jpg){.thumbnail}

![](images/img_2615.jpg){.thumbnail}
Klik tenslotte op "implementeren", zodat we alle containers kunnen starten op alle nodes of op sommige in het bijzonder (door het label te selecteren, dat overeenkomt met de nodes, waarop men de container wil implementeren):

![](images/img_2616.jpg){.thumbnail}


