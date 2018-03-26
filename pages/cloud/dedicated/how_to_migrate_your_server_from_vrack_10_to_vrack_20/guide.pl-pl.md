---
title: Jak przenieść serwer z infrastruktury vrack 1.0 na 2.0.
excerpt: Jak przenieść serwer z infrastruktury vrack 1.0 na 2.0.
slug: jak_przeniesc_serwer_z_infrastruktury_vrack_10_na_20
legacy_guide_number: g1994
---


## 
W przewodniku tym wyjaśniamy, jak przejść z infrastruktury vrack 1.0 na vrack 2.0. Usługa vrack 1.0 opierała się na tagowaniu interfejsów sieciowych, natomiast usługa vrack 2.0 działa na osobnym interfejsie sieciowym.


## 
Do wykonania tej operacji potrzebujesz: 

- Serwerów z dwiema kartami sieciowymi w infrastrukturze vrack 1.0 
- Usługi vrack 1.0




## 
Aby dokonać migracji serwerów z vrack 1.0 do vrack 2.0, należy przejść poniższe etapy: 

- Zdefiniowanie drugiego interfejsu dla każdego serwera 
- Aktywacja vrack 2.0
- Tymczasowa konfiguracja adresu IP na interfejsie vrack 2.0 
- Wyłączenie interfejsu vrack 1.0 i ponowna konfiguracja interfejsu vrack 2.0




## Zdefiniowanie interfejsu vrack 2.0

## Aby umieścić serwer w sieci vrack 2.0, serwer ten musi mieć dwa interfejsy sieciowe.
Zdefiniujmy interfejs vrack 2.0 Twojego serwera: 

Aby sprawdzić interfejs do skonfigurowania w systemie Linux lub w trybie rescue pro: 

Pobierz listę interfejsów: 


```
ifconfig -a | grep eth | awk '{print $1}'
```



Przykład: 


```
#ifconfig -a | grep eth | awk '{print $1}'
eth0
eth1
```



eth0 jest naszym interfejsem głównym. Możesz zobaczyć swoje IP za pomocą ifconfig. 

Następnie wykonaj: 


```
#ifconfig eth1 up
#ethtool eth1 | grep "Link detected"
Link detected: yes
```


Jeśli w odpowiedzi dla "Link detected" pojawi się 'no' wykonaj: 


```
#ifconfig eth1 down
```


Wykonaj to samo polecenie z innymi.

W naszym przykładzie pozostawiamy eth1.


## Aktywacja usługi vrack 2.0
Aby aktywować usługę vrack 2.0, zapoznaj się z przewodnikiem na ten temat.


## Dodanie usługi vrack 1.0 do vrack 2.0
Aby dokonać migracji z vrack 1.0 na vrack 2.0, zapraszamy do umieszczenia usługi vrack 1.0. w vrack 2.0. 

W tym celu zaloguj się do panelu klienta na tej stronie: 

https://www.ovh.com/manager/

Wybierz vrack 2.0 w menu z lewej strony. 

Wyświetli się poniższa sekcja:

![](images/img_3295.jpg){.thumbnail}
Wybierz vrack 1.0 w kolumnie z dostępnymi usługami (kolumna z lewej strony). 

Kliknij na "Dodaj".


## Dodawanie serwerów do vrack 2.0
Aby dokonać migracji z vrack 1.0 na vrack 2.0, zapraszamy do umieszczenia serwerów w vrack 2.0. 
W tym celu zaloguj się do panelu klienta na tej stronie: 
https://www.ovh.com/manager/dedicated 

Wybierz vrack 2.0 w menu z lewej strony. 

Wyświetli się poniższa sekcja:

![](images/img_3297.jpg){.thumbnail}
Wybierz serwer w kolumnie z dostępnymi usługami (kolumna z lewej strony). 

Kliknij na "Dodaj".


## Tymczasowa konfiguracja adresu IP na interfejsie vrack 2.0

## W pierwszej kolejności wykonamy tymczasową konfigurację, aby sprawdzić działanie usługi vrack 2.0.
Dodaj prywatne IP do interfejsu vrack dla każdego z serwerów: 

Przykład: 
(na serwerze z debianem z eth1 dla interfejsu vrack 2.0 i z blokiem 10.0.0.0/24) 

W pliku konfiguracyjnym: /etc/network/interfaces 

Dodaj: 


```
auto eth1
iface eth1 inet static
address 10.0.0.1
netmask 255.255.255.0
broadcast 10.0.0.255
```


Następnie zrestartuj interfejs sieciowy: 


```
service networking restart
```


Jeśli korzystasz z innej dystrybucji, skorzystaj z przewodnika http://pomoc.ovh.pl/VrackInfrastructureServer (sekcja "IP prywatny" dla dystrybucji, której używasz).

## Ważne:
Sprawdź, czy serwery odpowiadają na ping z prywatnych adresów IP, które skonfigurowałeś.
Jeśli wszystkie serwery odpowiadają na ping, przechodzimy do kolejnego etapu. 

W przeciwnym razie, wykonaj tę komendę: 


```
arping -I INTERFACE_VRACK_2.0 1.1.1.1
```


INTERFACE_VRACK_2.0: zastąpić interfejsem vrack 2.0 w naszym przykładzie eth1.


## Wyłączenie interfejsu vrack 1.0 i ponowna konfiguracja interfejsu vrack 2.0

## Ważne:
Ten etap spowoduje przerwę w działaniu na czas przeniesienia IP, którego używasz z interfejsu vrack 1.0 na interfejs vrack 2.0.
Usuń tymczasową konfigurację z interfejsu 2.0 i z interfejsu vrack 1.0. 

Następnie zrestartuj interfejsy. 

Następnie dodaj IP z vrack 1.0 do interfejsu 2.0. 


Przykład dla debiana: 

Fragment konfiguracji sprzed zmiany: 


```
auto eth0.XXXX
iface eth0.XXXX inet static
address 172.16.0.1
netmask 255.240.0.0
post-up ip r a 172.16.0.0/12 via 172.31.255.254 dev eth0.XXXX ;

auto eth1
iface eth1 inet static
address 10.0.0.1
netmask 255.255.255.0
broadcast 10.0.0.255
```



Fragment konfiguracji po zmianie:


```
auto eth1
iface eth1 inet static
address 172.16.0.1
netmask 255.240.0.0
broadcast 255.240.0.0
```



i zrestartuj interfejsy sieciowe. 

Dla innych dystrybucji znajdziesz informacje w tym przewodniku: http://pomoc.ovh.pl/VrackInfrastructureServer 

Twoje serwery powinny się teraz komunikować.


## Przypadek publicznego bloku IP

## Ważne:
Nie korzystaj z tej części przewodnika, jeśli publiczny blok jest przypisany do usługi ACE lub Firewall ASA.

## Jeśli masz publiczny blok ip i jeśli Twoje serwery są kompatybilne z usługą vrack 2.0, możesz dodać blok do vrack 2.0. Nie będziesz już używał usługi vrack 1.0 w panelu manager:
W tym celu zaloguj się do panelu klienta na tej stronie: 

https://www.ovh.com/manager/dedicated 

Wybierz publiczny blok IP w menu z lewej strony.

Wyświetli się poniższa sekcja:

![](images/img_3297.jpg){.thumbnail}

## Wybierz serwer w kolumnie z dostępnymi usługami (kolumna z lewej strony).
Kliknij na "Dodaj".

## Ważne:
Ta operacja spowoduje około 1 minutę przerwy.


## Wstrzymanie usługi vrack 1.0

## Ważne:
Skorzystaj z tej sekcji tylko, jeśli nie masz sprzętu, który działa tylko w vrack 1.0. Sprzęt, który działa tylko z vrack 1.0: 

-> Stary serwer superplan kompatybilny z vrack 1.0 
-> ACE 
-> Firewall ASA dla usługi vrack. 

Jeśli masz ten rodzaj sprzętu, nie będziesz mógł jeszcze dokonać migracji.
Jeśli Twoje serwery komunikują się w vrack 2.0, możesz usunąć serwery z vrack 1.0. 

Zaloguj się do panelu:

https://www.ovh.com/manager

Po zalogowaniu: 

Wybierz usługę vrack 1.0. 
Kliknij na 'Usuń serwer z wirtualnej szafy' 
Następnie usuń serwery z wirtualnej szafy wybierając je w części "Aktualne ustawienia infrastruktury" i kliknij na ">>" 

Jeśli wszystkie Twoje serwery działają w vrack 2.0 i usunąłeś je z vrack 1.0, skontaktuj się z naszą pomocą, aby definitywnie usunąć usługę vrack 1.0.

