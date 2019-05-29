---
title: Opcja vRack i prywatne sieci dla instancji Public Cloud
excerpt: Opcja vRack i prywatne sieci dla instancji Public Cloud
slug: opcja_vrack_i_prywatne_sieci_dla_instancji_public_cloud
legacy_guide_number: g2162
section: Sieć
hidden: true
---


Aby korzystać z prywatnych sieci z instancjami Public Cloud, należy przypisać projekt do usługi vRack. 

Etapy niezbędne do połączenia dwóch instancji Public Cloud w ramach jednej sieci to:


- Utworzenie sieci vRack 3
- Przyłączenie projektu Public Cloud do vRack
- Utworzenie prywatnej sieci
- Przyłączenie instancji do prywatnej sieci


Wykonaj po kolei podane polecenia przez [APIv6 OVH](https://eu.api.ovh.com/console/#/):


- [POST /order/vrack/new](https://api.ovh.com/console/#/order/vrack/new#POST)


|Quantity|1|
|---|---|
|Quantity|1|


Uwagi:
To zapytanie utworzy zamówienie na vRack. 
Zamówienie usługi vRack jest darmowe.
Pobierz numer zamówienia (orderId).

- [POST /me/order/{orderId}/payWithRegisteredPaymentMean](https://api.ovh.com/console/#/me/order/{orderId}/payWithRegisteredPaymentMean#POST) :


|orderID|numer pobrany za pomocą poprzedniego zapytania|
|---|---|
|paymentMean|fidelityAccount|


Uwagi:
Nawet jeśli jest to zamówienie na 0 zł, należy je zatwierdzić.

- [GET /me/order/{orderId}/status](https://api.ovh.com/console/#/me/order/{orderId}/status#GET) :


|orderID|numer pobrany za pomocą pierwszego zapytania|
|---|---|
|orderID|numer pobrany za pomocą pierwszego zapytania|


Uwagi:
Należy poczekać, aż status zamówienia zmieni się na "delivered".

- [GET /me/order/{orderId}/details/{orderDetailId}](https://api.ovh.com/console/#/me/order/{orderId}/details/{orderDetailId}#GET) :


|orderID|numer pobrany za pomocą pierwszego zapytania|
|---|---|

|orderDetailId|numer pobrany za pomocą poprzedniego zapytania|


Uwagi:
Ważną informacją jest tutaj "domain", które powinno mieć taką formę: "pn-XXXX".

- [GET /me/order/{orderId}/details](https://api.ovh.com/console/#/me/order/{orderId}/details#GET) :


|orderID|numer pobrany za pomocą pierwszego zapytania|
|---|---|
|orderID|numer pobrany za pomocą pierwszego zapytania|


Uwagi:
To zapytanie jest niezbędne do uzyskania nazwy utworzonej usługi vRack. Pojawi się tabela z jednym elementem.


Jeśli nie znasz identyfikatora projektu Public Cloud, postępuj zgodnie z tymi wskazówkami:


- [GET /cloud/project](https://api.ovh.com/console/#/cloud/project#GET)


Uwagi:
Pozwala to na uzyskanie listy projektów.

- [GET /cloud/project/{serviceName}](https://api.ovh.com/console/#/cloud/project/{serviceName}#GET) :


|serviceName|jeden z identyfikatorów uzyskanych za pomocą poprzedniego zapytania|
|---|---|
|serviceName|jeden z identyfikatorów uzyskanych za pomocą poprzedniego zapytania|


Uwagi:
Pozwala to na zidentyfikowanie projektu dzięki polu "description".
Po uzyskaniu informacji na temat identyfikatora projektu i nazwy usługi vRack, można dokonać połączenia:


- [POST /vrack/{serviceName}/cloudProject](https://api.ovh.com/console/#/vrack/{serviceName}/cloudProject#POST) :


|serviceName|"domain" uzyskane na poprzednim tepaie, jest to nazwa usługi vRack|
|---|---|
|serviceName|"domain" uzyskane na poprzednim tepaie, jest to nazwa usługi vRack|
|project|identyfikator projektu cloud w formie łańcucha 32 znaków|


b]Uwagi:
Zapytanie to inicjuje połączenie projektu vRack. Należy uzyskać ID zadania.
[GET /vrack/{serviceName}/task/{taskId}](https://api.ovh.com/console/#/vrack/{serviceName}/task/{taskId}#GET)

|serviceName|"domain" uzyskane na poprzednim tepaie, jest to nazwa usługi vRack|
|---|---|
|serviceName|"domain" uzyskane na poprzednim tepaie, jest to nazwa usługi vRack|
|taskID|id zadania|


Uwagi:
To zapytanie pozwala na sprawdzenie statusu zadania. Po zakończeniu zadania przejdź do kolejnego zapytania.


- [POST /cloud/project/{serviceName}/network/private](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/private#POST)


|serviceName|identyfikator projektu|
|---|---|
|serviceName|identyfikator projektu|
|name|nazwa prywatnej sieci|
|region|przykład: SBG1|
|vlandID|ID nowego VLAN, do wyboru między 1 i 4000|


Uwagi:
Jest to etap tworzenia sieci VLAN. 
Możesz pozostawić puste pole "Region", aby usługa została włączona dla wszystkich regionów. 
Niezbędny jest identyfikator VLAN. Będzie on używany do nawiązywania komunikacji z innymi usługami OVH komaptybilnymi z funkcją vRack.

- [GET /cloud/project/{serviceName}/network/private](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/private#GET) :

|serviceName|identyfikator projektu|
|---|
|serviceName|identyfikator projektu|


Uwagi:
To zapytanie pozwala na uzyskanie networkId.
Będzie ono mieć taką formę: nom-vrack_vlanId.

- [POST /cloud/project/{serviceName}/network/private/{networkId}/subnet](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/private/{networkId}/subnet#POST) :


|serviceName|identyfikator projektu|
|---|
|serviceName|identyfikator projektu|
|networkId|identyfikator sieci uzyskany za pomocą poprzedniego zapytania|
|dhcp|true lub false|
|end|ostatni adres podsieci|
|network|blok IP podsieci|
|region|przykład: SBG1|
|start|pierwszy adres podsieci|


Uwagi:
Jest to etap tworzenia podsieci dla regionu.  
Możesz włączyć (lub nie) przypisywanie prywatnych adresów IP w sposób dynamiczny przez DHCP.
Pamiętaj o oddzieleniu puli adresów IP dla poszczególnych regionów.
Na przykład:

- Od 192.168.0.2 do 192.168.0.254 dla SBG1
- Od 192.168.1.2 do 192.168.1.254 dla GRA1


Aby uzyskać prywatny adres IP instancji, skorzystaj z tego zapytania:


```
/cloud/project/{serviceName}/instance/{instanceId}
```




## Z poziomu APIv6 OVH
Utworzymy nową instancję przypisaną do naszej prywatnej sieci. 


- [GET /cloud/project/{serviceName}/network/public](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/public#GET) :


|serviceName|identyfikator projektu|
|---|
|serviceName|identyfikator projektu|


Uwagi:
Ten etap pozwala na uzyskanie numeru networkID publicznej sieci, aby skonfigurować ją na instancji.

- [GET /cloud/project/{serviceName}/network/private](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/private#GET) :


|serviceName|identyfikator projektu|
|---|
|serviceName|identyfikator projektu|


Uwagi:
Ten etap pozwala na uzyskanie numeru networkID prywatnej sieci, aby skonfigurować ją na instancji.

- [POST /cloud/project/{serviceName}/instance](https://api.ovh.com/console/#/cloud/project/{serviceName}/instance#POST) :


Parametry klasyczne i sieciowe:

|ip|nie podawać dla sieci publicznej ani w przypadku korzystania z DHCP|
|networkId|identyfikator sieci|
|+|pozwala na dodanie dodatkowego interfejsu|


Uwagi:
Poza parametrami klasycznymi do uruchomienia instancji, będziesz mógł skonfigurować interfejsy sieciowe instancji.
APIv6 OVH nie pozwala jeszcze na przypisanie istniejącej instancji do prywatnej sieci. Należy utworzyć nową instancję.


## Z poziomu API OpenStack

- Pobierz listę dostępnych sieci:


```
admin@serveur-1:~$ nova net-list

+--------------------------------------+-------------------+------+
| ID | Label | CIDR |
+--------------------------------------+-------------------+------+
| 8d3e91fd-xxxx-xxxx-xxxx-4252de201489 | Ext-Net | None |
| b19cb941-xxxx-xxxx-xxxx-581e8e7e4f54 | private_network_1 | None |
+--------------------------------------+-------------------+------+
```


- Utwórz nową instancję z 2 interfejsami:


```
admin@serveur-1:~$ nova boot --flavor vps-ssd-1 --image "Debian 8" --nic net-id=8d3e91fd-xxxx-xxxx-xxxx-4252de201489 --nic net-id=b19cb941-xxxx-xxxx-xxxx-581e8e7e4f54 --key_name SSH_KEY test_vrack
```


- Sprawdź instancję:


```
admin@serveur-1:~$ nova list
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
| ID | Name | Status | Task State | Power State | Networks |
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
| 0b4be30f-b21f-4cba-a51b-c2024ab20ae8 | test_vrack | ACTIVE | - | Running | Ext-Net=149.xxx.xxx.48; private_network_1=192.168.0.5 |
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
```



Instancja ta ma 2 interfejsy sieciowe:

- Publiczny: 149.xxx.xxx.48
- Prywatny: 192.168.0.5


Za pomocą API OpenStack można dodać prywatny interfejs sieciowy na istniejącej już instancji. 

Oto procedura:


```
admin@serveur-1:~$ nova interface-attach --net-id b19cb941-xxxx-xxxx-xxxx-581e8e7e4f54 Instance1
```



```
admin@serveur-1:~$ nova list
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
| ID | Name | Status | Task State | Power State | Networks |
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
| 0952355f-cc8b-45b7-b011-d20415adc9f5 | Instance1 | ACTIVE | - | Running | Ext-Net=149.xxx.xxx.83; private_network_1=192.168.0.6 |
| 0b4be30f-b21f-4cba-a51b-c2024ab20ae8 | test_vrack | ACTIVE | - | Running | Ext-Net=149.xxx.xxx.48; private_network_1=192.168.0.5 |
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
```




## 
Możesz sprawdzić, czy obydwa interfejsy są skonfigurowane na instancji za pomocą tego polecenia:


```
root@test-vrack:~$ ip addr list
```


Zobaczysz 3 interfejsy sieciowe:


- lo: Loopback
- eth0: interfejs publiczny
- eth1: interfejs prywatny


Następnie wystarczy skonfigurować prywatny adres IP:


```
root@test-vrack:~$ ip addr add 192.168.0.5/16 dev eth1
```


I włączyć interfejs sieciowy:


```
root@test-vrack:~$ ip link set eth1 up
```




## 

- [Rozpocznij pracę z API Nova]({legacy}1935)
- [Stała konfiguracja IP Fail Over]({legacy}1885)




## 
[Przewodniki Cloud]({legacy}1785)

