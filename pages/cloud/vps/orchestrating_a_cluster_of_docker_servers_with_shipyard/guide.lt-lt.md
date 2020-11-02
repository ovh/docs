---
deprecated: true
title: Docker klasterio valdymas su Shipyard
excerpt: ''
slug: docker_klasterio_valdymas_su_shipyard
legacy_guide_number: g1762
hidden: true
---


## 
Shipyard - tai Docker naudotojų sukurta aplikacija. Tai puiki Swarm alternatyva su grafine sąsaja, skirta Docker serverių valdymui ir paskirstanti užduotis bei konteinerių resursus po visus serverius.
Pirmiausiai pradėsime nuo valdymo serverio ir sugeneruosime raktus bei sertifikatus, kurie leis autentifikuotis skirtinguose serveriuose bei saugiai (su TLS) perduoti duomenis tarp serverių ir leisti prie klasterio mazgų jungtis tik išskirtiniams asmenims (tik serveriai, kuriuose įdiegti sertifikatai, gali jungtis prie Docker klientų iš nuotolinių kompiuterių).

Kaip generuoti sertifikatus, skaitykite oficialioje dokumentacijoje:

[https://docs.docker.com/articles/https/](https://docs.docker.com/articles/https/)

Kai sertifikatai sugeneruoti, pereikime prie klientinių (mazgų) serverių. Pavyzdyje klasteris bus sudarytas iš 3 serverių (IP: 1.1.1.1, 2.2.2.2 ir 3.3.3.3).

Nukopijuokite sugeneruotus raktus ir sertifikatus į mazgų serverių katalogus /etc/docker/certs/:


```
scp ca.pem server-cert.pem server-key.pem user@1.1.1.1:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@2.2.2.2:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@3.3.3.3:/etc/docker/certs/
```


Didesniam klasterio saugumui užtikrinti, į valdymo ir mazgų serverius įdiegsime IPtables.
Žemiau pateiktas IPtables taisyklių pavyzdys, kurį galite naudoti savo serveriuose.

Mazguose:

IPtables taisyklės:


```
# Esamų prisijungimų išsaugojimas
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# loopback
iptables -t filter -A INPUT -i lo -j ACCEPT

# ICMP (Ping)
iptables -t filter -A INPUT -p icmp -j ACCEPT

# SSH In
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 22 -j ACCEPT

# /!\ DĖMESIO: Gerai patikrinkite čia nurodytą valdymo serverio IP adresą, nes tik jam bus leidžiama jungtis prie mazgų per SSH.

# HTTP In
iptables -t filter -A INPUT -p tcp --dport 80 -j ACCEPT

# SSL In
iptables -t filter -A INPUT -p tcp --dport 443 -j ACCEPT

# Docker In
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 2375 -j ACCEPT

# /!\ DĖMESIO: Gerai patikrinkite čia nurodytą valdymo serverio IP adresą, nes tik jam bus leidžiama jungtis per 2375 prievadą.

# Kitų įeinančių prisijungimų atmetimas
iptables -P INPUT DROP
iptables -P FORWARD DROP
```


Kai nustatysite taisykles, išsaugokite jas ir nustatykite, kad jos būtų taikomos kiekvieno serverio paleidimo metu:


```
apt-get install iptables-persistent
```


Pasirinkite «Yes», kai sistema paklaus, ar norite išsaugoti IPtables IPv4 taisykles.

/!\ DĖMESIO: patariame patikrinti taisyklių veikimą prieš išsaugant. Jeigu būtų problema, pakaktų tiesiog perkrauti serverį ir naujos taisyklės nebūtų naudojamos.

IPtables taisykles papildyti ir išsaugoti galima su komanda:


```
iptables-persistent save
```


Valdymo serveryje:

IPTABLES taisyklės:


```
# Esamų prisijungimų išsaugojimas
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# loopback
iptables -t filter -A INPUT -i lo -j ACCEPT

# ICMP (Ping)
iptables -t filter -A INPUT -p icmp -j ACCEPT

# Shipyard web In
iptables -t filter -A INPUT -s « IP publique de votre connexion ou de votre VPN » -p tcp --dport 8080 -j ACCEPT

# /!\ DĖMESIO: Gerai patikrinkite čia nurodytą IP adresą (tai gali būtų jūsų ar VPN adresas), nes tik jam bus leidžiama jungtis prie Shipyard sąsajos.

# SSH In
iptables -t filter -A INPUT -s « IP publique de votre connexion ou de votre VPN » -p tcp --dport 22 -j ACCEPT

# /!\ DĖMESIO: Gerai patikrinkite čia nurodytą IP adresą (tai gali būtų jūsų ar VPN adresas), nes tik jam bus leidžiama jungtis prie serverio per SSH.

# Kitų įeinančių prisijungimų atmetimas
iptables -t filter -P INPUT DROP
iptables -t filter -P FORWARD DROP
```


Kai nustatysite taisykles, išsaugokite jas ir nustatykite, kad jos būtų taikomos kiekvieno serverio paleidimo metu:


```
apt-get install iptables-persistent
```


Pasirinkite «Yes», kai sistema paklaus, ar norite išsaugoti IPtables IPv4 taisykles.

/!\ DĖMESIO: patariame patikrinti taisyklių veikimą prieš išsaugant. Jeigu būtų problema, pakaktų tiesiog perkrauti serverį ir naujos taisyklės nebūtų naudojamos.

IPtables taisykles papildyti ir išsaugoti galima su komanda:


```
iptables-persistent save
```




## 
Įdiegus Docker į 3 serverius (žr. [ankstesnį gidą](http://www.ovh.lt/g1708.wordpress_svetainiu_vps_serveriuose_optimizavimas_su_docker), galima naudoti RunAbove instances, suteiktais su Docker serveriu. Daugiau informacijos apie tai rasite [čia](https://community.runabove.com/kb/en/instances/docker-in-5-minutes-on-runabove-with-docker-machine.html)). 
Pirmiausiai įjungsime Docker daemon tam skirtame prievade (pvz., 2375 prievade, kuris yra oficialiai paskirtas [IANA](http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=docker)), kad mūsų serveriai galėtų komunikuoti su valdymo serveriu.
Pirmiausiai sustabdysime Docker serveriuose, tam naudosime komandą:


```
service docker stop
```


Pirmiausiai pereisime į sertifikatų katalogą:


```
cd /etc/docker/
```


Paskui paleisime Docker, komunikacijai naudodami 2375 prievadą ir naudosime TLS autentifikaciją. Šią komandą paleisime viuose mazguose:


```
docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node1

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node2

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node3
```


/!\ DĖMESIO: šios nuostatos nėra nuolatinės: perkrovus serverį jos nebus naudojamos ir reikės sustabdyti Docker bei paleisti jį iš naujo su šiomis parinktimis. Dėl to rekomenduojame nurodyti jas $DOCKER_OPTS kintamajame. Ubuntu sistemose tai lengvai padaroma atidarius failą /etc/default/docker.

Atkreipkite dėmesį į atributą "--label name=node1", jis leidžia pavadinti kieikvieną mazgą mums suprantamu ir lengvai atpažįstamu pavadinimu (tai vėliau leis lengviau paleisti Docker konteinerius norimame mazge).

Dabar pereisime prie Shipyard diegimo į valdymo serverį.


## 
Pradėsime nuo instance RethinkDB su duomenų banku paleidimo:


```
docker run -it -d --name shipyard-rethinkdb-data --entrypoint /bin/bash shipyard/rethinkdb -l
```



Paleisime RethinkDB su jau turimu duomenų banku:


```
docker run -it -P -d --name shipyard-rethinkdb --volumes-from shipyard-rethinkdb-data shipyard/rethinkdb
```



/!\ DĖMESIO: Jeigu serveris pasiekiamas iš interneto, atkreipkite dėmesį, kad jis bus pasiekiamas 49153 (lokalus instance), 49154 (klasteris) ir 49155 (web sąsaja) prievadais.

Paleisime Shipyard kontrolerį ir sujungsime jį su duomenų baze (--link shipyard-rethinkdb:rethinkdb):


```
docker run -it -p 8080:8080 -d --name shipyard --link shipyard-rethinkdb:rethinkdb shipyard/shipyard
```



Shipyard pagal nutylėjimą sukurs vartotoją "admin", kurio slaptažodis yra "shipyard".

Prieš jungiantis prie valdymo sąsajos, rekomenduojama pakeisti Shipyard slaptažodį. 

Dabar paleisime konteinerį, kuris leis prisijungti prie Shipyard CLI:


```
docker run -it shipyard/shipyard-cli
```


Prisijungiame:


```
shipyard cli> shipyard login
URL:http://<SERVERIS>:8000
Username: admin
Password: shipyard
Puis on change le mot de passe
shipyard cli> shipyard change-password
Password: <SLAPTAŽODIS>
Confirm: <DAR_KARTĄ>
```


Kai pakeisite slaptažodį, spauskite CTRL+D, kad išeitumėte iš CLI.

Dabar galite jungtis prie Shipyard: http://<serverio-ip>:8080; prisijungimui naudokite vardą "admin" ir naują slaptažodį.

Prisijungę galėsite išsaugoti "engines" (mazgus) Shipyard sąsajoje. Tai atliekama skyriuje "engines":

![](images/img_2612.jpg){.thumbnail}
Nepamirškite nukopijuoti anksčiau sugeneruotų SSL sertifikatų, SSL raktų ir CA sertifikatų. Jie turi būti nukopijuoti į visus mazgus (atkreipkite dėmesį į mazgų pavadinimus).

![](images/img_2613.jpg){.thumbnail}
"Engines" galima pridėti ir per CLI. Tai atliekama Shipyard CLI konteineryje:


```
docker run -it -v /etc/docker/certs/:/home/ shipyard/shipyard-cli
```


Atkreipkite dėmesį į "-v /etc/docker/certs/:/home/", šis atributas sukuria katalogą, kurį bendrai naudoja pagrindinis (valdymo) serveris ir Shipyard CLI konteineris, veikiantis šiame serveryje. Taip konteineris pasieks anksčiau sugeneruotus sertifikatus.

Prisijunkite:


```
shipyard cli> shipyard login
URL:http://<SERVERIS>:8000
Username: admin
Password: slaptažodis
```


Po to įveskite komandą:


```
shipyard add-engine --id node1 --addr https://1.1.1.1:2375 --label node1 --ssl-cert /home/client-cert.pem --ssl-key /home/client-key.pem --ca-cert /home/ca.pem
```


Tuomet spauskite "CTRL+D", kad atsijungtumėte nuo CLI.


## 
Konteinerių skyriuje galite matyti ir valdyti visus konteinerius, esančius skirtinguose mazguose:

![](images/img_2614.jpg){.thumbnail}

![](images/img_2615.jpg){.thumbnail}
Spragtelėjus "Deploy" galima paleisti konteinerius visuose mazguose arba kuriame nors atskirai (pažymėjus mazgo, kuriame norima paleisti, pavadinimą):

![](images/img_2616.jpg){.thumbnail}
Dabar jau turite Docker serverių klasterio valdymo sistemą ir galite greitai bei paprastai skirstyti aplikacijas/konteinerius po visą klasterį. Jeigu norite išbandyti Docker, nepamirškite, kad vykdome Sailabove Alpha testavimus: [https://labs.runabove.com/docker/](https://labs.runabove.com/docker/). Taip pat sukūrėme Ubuntu Server su Docker (iškart įdiegtu) VPS Cloud ir Classic paslaugoms (taigi, galėsite šią sistemą diegti į visus VPS serverius, pradedant VPS Classic 1, kuris nepasymi didele disko vieta). Taip gausite serverį, iškart paruoštą konteinerių paleidimui ir išsaugosite visus VPS paslaugos privalumus.

