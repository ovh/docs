---
deprecated: true
title: Docker-palvelinklusterin hallinta ja käyttö Shipyardilla
excerpt: ''
slug: docker-palvelinklusterin_hallinta_ja_kaytto_shipyardilla
legacy_guide_number: g1762
hidden: true
---


## 
Shipyard on kehitetty Docker-käyttäjäyhteisön voimin. Se on hyvä vaihtoehto Swarmille mm. sen sisältämän graafisen käyttöliittymän ansiosta jonka avulla Docker-palvelinklusterin hallinnointi on helppoa. Tässä ohjeessa ensimmäinen etappi on avainten ja sertifikaattien luonti jotka mahdollistavat sisäänkirjautumisen eri palvelimille, sekä TLS-käytön turvalliseen liikennöintiin palvelimien kesken. Vain palvelimet joilla on sertifikaatti, voivat olla yhteydessä Docker-asiakaspäähän.

Luodaksesi sertifikaatit, katso virallinen Docker-dokumentaatio osoitteessa [https://docs.docker.com/articles/https](https://docs.docker.com/articles/https).

Kun sertifikaatit on luotu, siirry asiakaspään palvelimille (noodit). Tässä esimerkissä klusteri sisältää kolme palvelinta, joiden osoitteet ovat 1.1.1.1, 2.2.2.2 ja 3.3.3.3.

Kopioi avaimet ja sertifikaatit hakemistosta /etc/docker/certs asiakaspalvelimillesi (noodeille) scp-sovelluksella seuraavasti:


```
scp ca.pem server-cert.pem server-key.pem user@1.1.1.1:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@2.2.2.2:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@3.3.3.3:/etc/docker/certs/
```


Tietoturvan parannus klusteritasolla onnistuu iptables-palomuurin avulla. Alla esimerkkisäännöstö…

…asiakaspalvelimilla (noodit)

Iptables-säännöt:

# Muodostettujen yhteyksien keepalive-toiminto
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# Loopback-yhteyden hyväksyntä
iptables -t filter -A INPUT -i lo -j ACCEPT

# ICMP (ping)
iptables -t filter -A INPUT -p icmp -j ACCEPT

# Sisääntuleva SSH-yhteys
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 22 -j ACCEPT

# /!\ TÄRKEÄÄ: Varmista että syötät oikean IP-osoitteen iptables-sääntöihin. IP-osoitteen tulisi vastata master-palvelimen osoitetta, tai osoitetta joista yhteydet otetaan. Ne ovat ainoat IP-osoitteet jotka yhdistävät SSH-yhteydellä asiakaspalvelimille (noodit).

# Sisääntuleva HTTP-yhteys
iptables -t filter -A INPUT -p tcp --dport 80 -j ACCEPT

# Sisääntuleva HTTPS-yhteys
iptables -t filter -A INPUT -p tcp --dport 443 -j ACCEPT

# Sisääntuleva Docker-yhteys
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 2375 -j ACCEPT

# /!\ TÄRKEÄÄ: Varmista että syötät oikean IP-osoitteen iptables-sääntöihin. IP-osoitteen tulisi vastata master-palvelimen osoitetta, joka voi ainoana osoitteena yhdistää porttiin 2375.

# Muiden yhteyksien tiputus
iptables -P INPUT DROP
iptables -P FORWARD DROP
[/code]

Kun säännöt on määritelty, ne täytyy tallentaa jotta säännöt ovat voimassa vielä uudelleenkäynnistyksenkin yhteydessä:


```
apt-get install iptables-persistent
```


Kun Linux kysyy IPv4-sääntöjen tallennuksesta ”Save current IPv4 rules?”, valitse ”yes”.

# /!\ HUOMIOI: suosittelemme tarkastamaan että palomuurisäännöt toimivat, ennen niiden tallentamista. Mikäli haluat nollata tallentamattomat muurisäännöt, uudelleenkäynnistä palvelimesi.

Voit lisätä iptables-sääntöjä milloin tahansa ja tallentaa ne seuraavalla komennolla:


```
iptables-persistent save
```


…master-palvelimella

Määrittele iptables-säännöstöt seuraavasti:



```
# Muodostettujen yhteyksien keepalive-toiminto
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# Loopback-yhteyden hyväksyntä
iptables -t filter -A INPUT -i lo -j ACCEPT

# ICMP (ping)
iptables -t filter -A INPUT -p icmp -j ACCEPT

# Shipyard-web-hallinta
iptables -t filter -A INPUT -s <Oman verkkoyhteyden julkinen IP-osoite, tai VPN-osoite> -p tcp --dport 8080 -j ACCEPT

# /!\ HUOMIOI: muista syöttää oikea IP-osoite tässä vaiheessa. Sen pitäisi olla oman verkkoyhteytesi IP-osoite tai VPN-yhteyden osoite, jota käytät. Kyseessä on siis ainoat osoitteet, jotka voivat yhdistää Shipyard-hallintakäyttöliittymään.

# Sisääntuleva SSH-yhteys
iptables -t filter -A INPUT -s <Oman verkkoyhteyden julkinen osoite, tai VPN-osoite> -p tcp --dport 22 -j ACCEPT

# /!\: TÄRKEÄÄ muista syöttää oikea IP-osoite tässä vaiheessa. Sen pitäisi olla oman verkkoyhteytesi IP-osoite tai VPN-yhteyden osoite, jota käytät. Kyseessä on siis ainoat osoitteet, jotka voivat yhdistää master-palvelimelle SSH-yhteydellä.

# Muiden yhteyksien tiputus
iptables -t filter -P INPUT DROP
iptables -t filter -P FORWARD DROP
```


Kun säännöt on määritelty, ne tallennetaan seuraavalla komennolla jotta ne olisivat käytössä vielä uudelleenkäynnistyksenkin jälkeen:


```
apt-get install iptables-persistent
```


Kun Linux kysyy IPv4-sääntöjen tallennuksesta ”Save current IPv4 rules?”, valitse ”yes”.

# /!\ TÄRKEÄÄ: suosittelemme tarkastamaan että palomuurisäännöt toimivat, ennen niiden tallentamista. Mikäli haluat nollata tallentamattomat muurisäännöt, uudelleenkäynnistä palvelimesi.

Voit lisätä iptables-sääntöjä milloin tahansa ja tallentaa ne seuraavalla komennolla:


```
iptables-persistent save
```




## 


```
service docker stop
```


Sitten siirry hakemistoon johon sertifikaatit on tallennettu:


```
cd /etc/docker
```


Jonka jälkeen käynnistääksesi Dockerin (porttiin 2375 TLS-salauksella), syötä seuraava komento kaikilla noodi-palvelimilla:


```
docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node1

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node2

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node3
```


/!\ HUOMIOI: nämä eivät ole pysyvät asetukset. Mikäli palvelin uudelleenkäynnistyy, sinun täytyy käynnistää Docker uudestaan em. asetuksilla. Suosittelemme käynnistysasetusten tallentamista $DOCKER_OPTS-ympäristömuuttujaan. Ubuntussa tämä onnistuu hakemistossa /etc/default/docker

”--label name=node1” mahdollistaa noodi-palvelimien nimeämisen yksilöllisellä nimellä ja Docker-kontin käynnistys tietyllä noodi-palvelimella on mahdollista.

Shipyard on nyt asennettavissa hallintapalvelimelle.


## 
Käynnistä ensin RethinkDB-datasäilöinstanssi:


```
docker run -it -d --name shipyard-rethinkdb-data --entrypoint /bin/bash shipyard/rethinkdb -l
```



Kun datasäilöinstanssi on käynnistetty, käynnistä tämän jälkeen RethinkDB aiemmin luodun datasäilöinstanssin kanssa:


```
docker run -it -P -d --name shipyard-rethinkdb --volumes-from shipyard-rethinkdb-data shipyard/rethinkdb
```


/!\ HUOMIOI: tilanteessa jossa palvelimesi on saavutettavissa julkisesta Internetistä, ota huomioon että RethinkDB kuuntelee portteja 49153 (paikallinen instanssi), 49154 (klusteri) sekä 49155 (www-käyttöliittymä).

Käynnistä tämän jälkeen Shipyard yhdistämällä se tietokantaan muuttujalla ”--link shipyard-rethinkdb:rethinkdb”:


```
docker run -it -p 8080:8080 -d --name shipyard --link shipyard-rethinkdb:rethinkdb shipyard/shipyard
```


Shipyard luo automaattisesti pääkäyttäjän ”admin” oletussalasanalla ”shipyard”.

Ennen kuin kirjaudut Shipyard–www-käyttöliittymään, suosittelemme vaihtamaan oletussalasanan joksikin haluamaksesi. Ota salasanassa huomioon tietoturva; suosittelemme salasanan olemaan mahdollisimman monimutkainen. Mikäli unohtelet salasanoja, tutustu salasanojen tallennusta varten kehitettyyn sovellukseen nimeltä [KeePass](http://keepass.info). Seuraavaksi käynnistä kontti joka mahdollistaa Shipyard-komentokehotteeseen pääsyn:


```
docker run -it shipyard/shipyard-cli
```


Kirjaudu sisään:


```
shipyard cli> shipyard login
URL: http://palvelin.tld:8000
Username: admin
Password: shipyard
Puis on change le mot de passe
shipyard cli> shipyard change-password
Password: <salasana>
Confirm: <salasanan_varmistus>
```


Kun salasanamuutos on suoritettu, voit poistua komentokehotteesta näppäinyhdistelmällä ctrl+d.

Pääset nyt kirjautumaan Shipyard-www-käyttöliittymään oman palvelinosoitteesi `http://palvelin.tld:8080` kautta käyttäjätunnuksella ”admin” ja aiemmin Shipyard-komentokehotteen kautta määritellyllä salasanalla.

Kun olet kirjautunut hallintakäyttöliittymään sisään, lisää tarvittavat ns. käyttömoottorit (noodit) valikosta Engines:

![](images/img_2612.jpg){.thumbnail}
Älä unohda kopioida ja liittää turvasertifikaatteja jotka loit SSL certificates-, SSL key- ja CA certificate -osioissa. Tämä täytyy tehdä jokaiselle noodille (varmista että jokaisella noodilla on yksilöllinen nimi).

![](images/img_2613.jpg){.thumbnail}
Voit lisätä käyttömoottoreita myös komentokehotteen kautta. Käynnistä siis ensin Shipyard-komentokehotekontti seuraavalla komennolla:


```
docker run -it -v /etc/docker/certs/:/home/ shipyard/shipyard-cli
```


Vipu ”-v /etc/docker/certs/:/home/” mahdollistaa samalla koneella olevan isäntäpalvelimen ja Shipyard-komentokehotekontin välisen yhteisarkiston luomisen, jonka avulla kontti voi käyttää vaivatta aiemmin tässä ohjeessa luotuja sertifikaatteja.

Kirjaudu sisään…:


```
shipyard cli> shipyard login
URL: http://:8000
Username: admin
Password: salasana
```


…ja syötä seuraava komento:


```
shipyard add-engine --id node1 --addr https://1.1.1.1:2375 --label node1 --ssl-cert /home/client-cert.pem --ssl-key /home/client-key.pem --ca-cert /home/ca.pem
```


Kun operaatio on valmis, kirjaudu ulos komentokehotteesta ctrl+d.


## 
Nyt eri noodeille käyttöönotettujen konttipalvelinten hallinta on mahdollinen osiossa Containers:

![](images/img_2614.jpg){.thumbnail}

![](images/img_2615.jpg){.thumbnail}
Klikkaa lopuksi DEPLOY käynnistääksesi kontit kaikilla noodipalvelimilla, tai määritellyillä/määritellyllä noodilla (rastittamalla noodin/noodit DEPLOY-painikenapin yläpuolelta).

![](images/img_2616.jpg){.thumbnail}


