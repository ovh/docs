---
title: Zarządzanie klastrem serwerów Docker za pomocą narzędzia Shipyard
excerpt: ''
slug: zarzadzanie_klastrem_serwerow_docker_za_pomoca_narzedzia_shipyard
legacy_guide_number: g1762
hidden: true
---


## 
Shipyard to aplikacja opracowana przez użytkowników platformy Docker. Aplikacja ta może być dobrą alternatywą dla narzędzia Swarm. Dysponuje ona graficznym interfejsem do zarządzania klastrem maszyn Docker pozwalającym na zarządzanie zadaniami i przyznawanie zasobów dla wybranych kontenerów w ramach zasobów dostępnych dla maszyny.
Najpierw zajmiemy się generowaniem kluczy i certyfikatów na maszynie głównej. Pozwolą nam one na logowanie się na poszczególne maszyny i na zabezpieczoną wymianę informacji pomiędzy maszynami. Dzięki temu nasze węzły nie będą kontrolowane przez osoby trzecie. Tylko maszyny dysponujące certyfikatami będą mogły logować się do klientów Docker naszych zdalnych maszyn. 

W tym celu należy skorzystać z oficjalnej dokumentacji Docker:

[https://docs.docker.com/articles/https/](https://docs.docker.com/articles/https/)

Po wygenerowaniu certyfikatów przejdziemy do maszyn klienckich (węzłów). W naszym przykładzie nasz klaster będzie się składał z 3 maszyn (IP: 1.1.1.1, 2.2.2.2 i 3.3.3.3).

Kopiujemy wygenerowane klucze i certyfikaty do katalogu /etc/docker/certs/ na naszych węzłach za pomocą polecenia:


```
scp ca.pem server-cert.pem server-key.pem user@1.1.1.1:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@2.2.2.2:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@3.3.3.3:/etc/docker/certs/
```


Aby zwiększyć bezpieczeństwo na poziomie naszego klastra, wprowadzimy reguły IPtables na naszej głównej maszynie i na węzłach. 
Poniżej znajduje się przykład reguł IPtables, które można zastosować.

Na węzłach:

Instalujemy reguły IPtables:


```
# Zachowanie nawiązanych połączeń 
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# Zezwalanie na loopback
iptables -t filter -A INPUT -i lo -j ACCEPT

# ICMP (Ping)
iptables -t filter -A INPUT -p icmp -j ACCEPT

# SSH In
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 22 -j ACCEPT 

# /!\ UWAGA: sprawdź adres IP wpisywany na tym poziomie. Musi on się odnosić do IP, z którego się łączysz lub do adresu IP maszyny głównej. Tylko te adresy IP będą mogły się łączyć przez SSH z węzłami.

# HTTP In
iptables -t filter -A INPUT -p tcp --dport 80 -j ACCEPT

# SSL In
iptables -t filter -A INPUT -p tcp --dport 443 -j ACCEPT

# Docker In
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 2375 -j ACCEPT

# /!\ UWAGA: sprawdź adres IP wpisywany na tym poziomie. Musi on się odnosić do adresu IP maszyny głównej, która jako jedyna będzie mogła się łączyć na porcie 2375.

# Zakaz połączeń wchodzących
iptables -P INPUT DROP
iptables -P FORWARD DROP
```


Po zdefiniowaniu reguł zapisujemy je, aby wykonywały się podczas uruchamiania:


```
apt-get install iptables-persistent
```


Wybieramy « tak », gdy zostaniemy zapytani, czy zapisać reguły IPtables IPv4.

/!\ UWAGA: zalecamy sprawdzenie poprawnego działania reguł przed ich zapisaniem. W przypadku problemu restart maszyn pozwoli na zresetowanie reguł, jeśli nie zostaną one zapisane.

W każdej chwili można dodać reguły IPtables i zapisać je poprzez:


```
iptables-persistent save
```



Na głównej maszynie:

Instalujemy reguły IPtables:


```
# Zachowanie nawiązanych połączeń 
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# Zezwalanie na loopback
iptables -t filter -A INPUT -i lo -j ACCEPT

# ICMP (Ping)
iptables -t filter -A INPUT -p icmp -j ACCEPT

# Shipyard web In
iptables -t filter -A INPUT -s « publiczne IP połączenia lub urządzenia VPN » -p tcp --dport 8080 -j ACCEPT 

# /!\ UWAGA: sprawdź adres IP wpisywany na tym poziomie. Musi on się odnosić do IP, z którego się łączysz lub do adresu IP urządzenia VPN. Tylko te adresy IP będą mogły się łączyć z interfejsem Shipyard.

# SSH In
iptables -t filter -A INPUT -s « publiczne IP połączenia lub urządzenia VPN » -p tcp --dport 22 -j ACCEPT

# /!\ UWAGA: sprawdź adres IP wpisywany na tym poziomie. Musi on się odnosić do IP, z którego się łączysz lub do adresu IP urządzenia VPN. Tylko te adresy IP będą mogły się łączyć poprzez SSH z główną maszyną.

# Zakaz połączeń wchodzących
iptables -t filter -P INPUT DROP
iptables -t filter -P FORWARD DROP
```


Po zdefiniowaniu reguł zapisujemy je, aby wykonywały się podczas uruchamiania:


```
apt-get install iptables-persistent
```


Wybieramy « tak », gdy zostaniemy zapytani, czy zapisać reguły IPtables IPv4.

/!\ UWAGA: zalecamy sprawdzenie poprawnego działania reguł przed ich zapisaniem. W przypadku problemu restart maszyn pozwoli na zresetowanie reguł, jeśli nie zostaną one zapisane.

W każdej chwili można dodać reguły IPtables i zapisać je przy użyciu polecenia:


```
iptables-persistent save
```




## 

Aby to zrobić, rozpoczniemy od zatrzymania narzędzia Docker na każdej z maszyn za pomocą polecenia:


```
service docker stop
```


Następnie przechodzimy do katalogu, w którym są przechowywane certyfikaty:


```
cd /etc/docker/
```


Uruchamiamy program Docker korzystając z komunikacji na porcie 2375 i uwierzytelniania TLS wpisując poniższe polecenie na każdym z węzłów:


```
docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node1

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node2

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node3
```


/!\ UWAGA: opcje te nie są trwałe: jeśli maszyna się zrestartuje, należy ponownie uruchomić program Docker z tymi opcjami. Idealnie byłoby wskazać te opcje w zmiennej środowiskowej $DOCKER_OPTS. W Ubuntu można ją wskazać w /etc/default/docker.

Zauważmy tu obecność « --label name=node1 », który pozwoli nam na nazwanie każdego z węzłów za pomocą unikalnej etykiety, co z kolei pozwoli nam na uruchomienie kontenera Docker na jednym węźle poprzez system ograniczeń. 

Następnie możemy przejść do instalacji programu Shipyard na maszynie manager.


## 
Rozpoczynamy od uruchomienia instancji data volume RethinkDB:


```
docker run -it -d --name shipyard-rethinkdb-data --entrypoint /bin/bash shipyard/rethinkdb -l
```



Uruchamiamy RethinkDB korzystając z wcześniej utworzonego data volume:


```
docker run -it -P -d --name shipyard-rethinkdb --volumes-from shipyard-rethinkdb-data shipyard/rethinkdb
```


/!\ UWAGA: Jeśli Twój serwer jest dostępny z Internetu, musisz wiedzieć, że RethinkDB będzie nasłuchiwał publicznie na portach 49153 (lokalna instancja), 49154 (klaster) i 49155 (interfejs www).

Następnie uruchamiamy kontroler Shipyard podłączając go do bazy danych za pomocą 
(--link shipyard-rethinkdb:rethinkdb):


```
docker run -it -p 8080:8080 -d --name shipyard --link shipyard-rethinkdb:rethinkdb shipyard/shipyard
```


Shipyard domyślnie utworzy użytkownika « admin » dysponującego hasłem « shipyard ».

Przed zalogowaniem do interfejsu www zaleca się zmianę hasła do Shipyard.

Rozpoczynamy od uruchomienia kontenera, który pozwoli nam na uzyskanie dostępu do CLI programu Shipyard:


```
docker run -it shipyard/shipyard-cli
```


Logujemy się:


```
shipyard cli> shipyard login
URL:http://<TWOJA_MASZYNA>:8000
Username: admin
Password: shipyard

Zmieniamy hasło:

shipyard cli> shipyard change-password
Password: <HASŁO>
Confirm: <JESZCZE_RAZ>
```


Po wykonaniu tej operacji używamy ctrl+d, aby zamknąć CLI.

Teraz masz dostęp do interfejsu Shipyard na stronie http://<your-host-ip>:8080. Należy podać login « admin » i zdefiniowane hasło.

Po zalogowaniu można przystąpić do rejestracji maszyn (węzłów). Przechodzimy do sekcji  « engines »:

![](images/img_2612.jpg){.thumbnail}
Nie zapomnij o skopiowaniu i wklejeniu certyfikatów bezpieczeństwa wygenerowanych wcześniej w zakładkach SSL certificate, SSL key i CA certificate.
Wykonujemy taką operację dla każdego z naszych węzłów. Należy zwrócić uwagę na poprawne zdefiniowanie unikalnej etykiety dla każdego węzła.

![](images/img_2613.jpg){.thumbnail}
Można również dodawać maszyny przez CLI. W tym celu należy uruchomić kontener CLI w Shipyard:


```
docker run -it -v /etc/docker/certs/:/home/ shipyard/shipyard-cli
```


Zauważymy tu obecność "-v /etc/docker/certs/:/home/". Pozwoli nam to na utworzenie katalogu wspólnego dla naszej maszyny głównej i kontenera CLI w Shipyard wykonującego się na tej samej maszynie, aby kontener miał dostęp do wcześniej wygenerowanych certyfikatów. 

Logujemy się:


```
shipyard cli> shipyard login
URL:http://<TWÓJ_SERWER>:8000
Username: admin
Password: hasło
```


Następnie wprowadzamy polecenie:


```
shipyard add-engine --id node1 --addr https://1.1.1.1:2375 --label node1 --ssl-cert /home/client-cert.pem --ssl-key /home/client-key.pem --ca-cert /home/ca.pem
```


Po wykonaniu tej operacji używamy ctrl+d, aby wyjść z CLI.


## 
W zakładce dotyczącej kontenerów możemy zobaczyć i zarządzać wszystkimi kontenerami wdrożonymi na naszych węzłach:

![](images/img_2614.jpg){.thumbnail}

![](images/img_2615.jpg){.thumbnail}
Klikając na « deploy », będziemy mogli uruchamiać kontenery na wszystkich naszych węzłach lub na wybranych węzłach (wybierając etykietę odnoszącą się do węzłów, na których chcemy wdrożyć kontener):

![](images/img_2616.jpg){.thumbnail}

