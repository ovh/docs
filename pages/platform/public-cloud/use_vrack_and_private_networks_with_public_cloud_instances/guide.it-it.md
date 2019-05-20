---
title: Utilizza la vRack e le reti private con le istanze Public Cloud
excerpt: Utilizza la vRack e le reti private con le istanze Public Cloud
slug: utilizza_la_vrack_e_le_reti_private_con_le_istanze_public_cloud
legacy_guide_number: g2162
hidden: true
---


## 
Per utilizzare le reti private con le istanze Public Cloud, collega il tuo progetto a una vRack.

Per effettuare questa operazione, è necessario:


- creare una vRack 3.0
- collegare il tuo progetto Public Cloud alla vRack
- creare una rete privata
- collegare le tue istanze alla rete privata




## 
Esegui i comandi indicati utilizzando [l'API OVH](https://eu.api.ovh.com/console/#/):


- [POST /order/vrack/new](https://api.ovh.com/console/#/order/vrack/new#POST)


|Quantity|1|
|---|
|Quantity|1|


Nota:
Questa chiamata genera l'ordine di una vRack (gratis) etipermette di recuperare il numero del tuo ordine (orderId).

- [POST /me/order/{orderId}/payWithRegisteredPaymentMean](https://api.ovh.com/console/#/me/order/{orderId}/payWithRegisteredPaymentMean#POST):


|orderID|recuperato con la chiamata precedente|
|---|
|orderID|recuperato con la chiamata precedente|
|paymentMean|fidelityAccount|


Nota:
Anche se l'importo è 0 €, è necessario simulare il pagamento del tuo ordine per la sua convalida e presa in carico.

- [GET /me/order/{orderId}/status](https://api.ovh.com/console/#/me/order/{orderId}/status#GET):


|orderID|recuperato con la prima chiamata|
|---|
|orderID|recuperato con la prima chiamata|


Nota:
È necessario attendere che lo stato dell'ordine risulti in "delivered".

- [GET /me/order/{orderId}/details/{orderDetailId}](https://api.ovh.com/console/#/me/order/{orderId}/details/{orderDetailId}#GET):


|orderID|recuperato con la prima chiamata|
|---|
|orderID|recuperato con la prima chiamata|
|orderDetailId|recuperato con la chiamata precedente|


Nota:
È importante che il formato del campo "domain" sia di tipo "pn-XXXX".

- [GET /me/order/{orderId}/details](https://api.ovh.com/console/#/me/order/{orderId}/details#GET):


|orderID|recuperato con la prima chiamata|
|---|
|orderID|recuperato con la prima chiamata|


Nota:
Questa chiamata è necessaria per recuperare il nome della vRack creata.
Il risultato ottenuto è una tabella con un elemento.


## 
Se non conosci l'identificativo del progetto Public Cloud, utilizza questi comandi:


- [GET /cloud/project](https://api.ovh.com/console/#/cloud/project#GET)


Attenzione:
Questa operazione permette di recuperare la lista dei tuoi progetti.

- [GET /cloud/project/{serviceName}](https://api.ovh.com/console/#/cloud/project/{serviceName}#GET):


|serviceName|uno degli identificativi recuperati con la chiamata precedente|
|---|
|serviceName|uno degli identificativi recuperati con la chiamata precedente|


Nota:
Questa operazione permette di identificare il progetto tramite il campo "description".
Una volta recuperati l'identificativo del progetto e il nome della vRack, associali in questo modo:


- [POST /vrack/{serviceName}/cloudProject](https://api.ovh.com/console/#/vrack/{serviceName}/cloudProject#POST):


|serviceName|il "domain" recuperato nello step precedente, che corrisponde al nome della vRack|
|---|
|serviceName|il "domain" recuperato nello step precedente, che corrisponde al nome della vRack|
|project|l'identificativo del progetto Cloud, formato da una stringa di 32 caratteri|


Nota:
Con questa chiamata viene avviata l’associazione del progetto alla vRack. A questo punto, recupera l'ID del task con questo comando:

- [GET /vrack/{serviceName}/task/{taskId}](https://api.ovh.com/console/#/vrack/{serviceName}/task/{taskId}#GET)


|serviceName|il "domain" recuperato nello step precedente, che corrisponde al nome della vRack|
|---|
|serviceName|il "domain" recuperato nello step precedente, che corrisponde al nome della vRack|
|taskID|l'ID del task recuperato con la chiamata precedente|


Nota:
Questa chiamata permette di verificare lo stato del task. Una volta completato, passa allo step successivo.


## 

- [POST /cloud/project/{serviceName}/network/private](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/private#POST)


|serviceName|l'identificativo del tuo progetto|
|---|
|serviceName|l'identificativo del tuo progetto|
|name|nome della rete privata|
|region|esempio: SBG1|
|vlandID|ID della nuova VLAN, compreso tra 1 e 4000|


Nota:
Questo step corrisponde alla fase di creazione della VLAN.
Se vuoi attivarla su tutte le Region, lascia vuoto il campo "Region". L'identificativo della VLAN è necessario per stabilire la comunicazione con altri servizi OVH compatibili con la vRack.

- [GET /cloud/project/{serviceName}/network/private](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/private#GET):

|serviceName|l'identificativo del tuo progetto|
|---|
|serviceName|l'identificativo del tuo progetto|


Nota:
Questa chiamata permette di recuperare il networkId, che avrà un formato di tipo "nome-vrack_vlanId".

- [POST /cloud/project/{serviceName}/network/private/{networkId}/subnet](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/private/{networkId}/subnet#POST):


|serviceName|l'identificativo del tuo progetto|
|---|
|serviceName|l'identificativo del tuo progetto|
|networkId|l'identificativo della tua rete recuperato con la chiamata precedente|
|dhcp|true o false|
|end|ultimo indirizzo della sottorete|
|network|blocco IP della sottorete|
|region|esempio: SBG1|
|start|primo indirizzo della sottorete|


Nota:
Questo step corrisponde alla fase di creazione della sottorete per ogni Region.
È possibile attivare l'assegnazione dinamica di indirizzi IP privati tramite DHCP.
Assicurati che i pool dei tuoi IP siano separati per le diverse Region.
Ad esempio:

- da 192.168.0.2 a 192.168.0.254 per SBG1
- da 192.168.1.2 a 192.168.1.254 per GRA1


Per recuperare l'indirizzo IP privato della tua istanza, utilizza la chiamata:


```
/cloud/project/{serviceName}/instance/{instanceId}
```




## Con l'API OVH
Crea una nuova istanza associata alla rete privata OVH utilizzando il comando:


- [GET /cloud/project/{serviceName}/network/public](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/public#GET):


|serviceName|l'identificativo del tuo progetto|
|---|
|serviceName|l'identificativo del tuo progetto|


Nota:
Questa chiamata consente di recuperare il networkID della rete pubblica per configurarla sulla tua istanza.

- [GET /cloud/project/{serviceName}/network/private](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/private#GET):


|serviceName|l'identificativo del tuo progetto|
|---|
|serviceName|l'identificativo del tuo progetto|


Nota:
Questa chiamata permette di recuperare il networkID della rete privata per configurarla sulla tua istanza.

- [POST /cloud/project/{serviceName}/instance](https://api.ovh.com/console/#/cloud/project/{serviceName}/instance#POST):


Parametri Classici + Network:

|ip|non indicare per la rete pubblica e in caso di utilizzo di DHCP|
|networkId|l'identificativo della rete|
|+|permette di aggiungere un'interfaccia supplementare|


Nota:
Oltre ai parametri classici per avviare un'istanza, è possibile configurare le interfacce di rete delle tue istanze.
Al momento con le API OVH non è possibile collegare alla rete privata un'istanza esistente.


## Con l'API OpenStack

- Mostra l'elenco delle reti disponibili:


```
admin@server-1:~$ nova net-list

+--------------------------------------+-------------------+------+
| ID | Label | CIDR |
+--------------------------------------+-------------------+------+
| 8d3e91fd-xxxx-xxxx-xxxx-4252de201489 | Ext-Net | None |
| b19cb941-xxxx-xxxx-xxxx-581e8e7e4f54 | private_network_1 | None |
+--------------------------------------+-------------------+------+
```


- Crea una nuova istanza con 2 interfacce:


```
admin@server-1:~$ nova boot --flavor vps-ssd-1 --image "Debian 8" --nic net-id=8d3e91fd-xxxx-xxxx-xxxx-4252de201489 --nic net-id=b19cb941-xxxx-xxxx-xxxx-581e8e7e4f54 --key_name SSH_KEY test_vrack
```


- Verifica la tua istanza:


```
admin@server-1:~$ nova list
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
| ID | Name | Status | Task State | Power State | Networks |
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
| 0b4be30f-b21f-4cba-a51b-c2024ab20ae8 | test_vrack | ACTIVE | - | Running | Ext-Net=149.xxx.xxx.48; private_network_1=192.168.0.5 |
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
```



Questa istanza ha 2 interfacce di rete:

- pubblica: 149.xxx.xxx.48
- privata: 192.168.0.5


Con le API OpenStack, è possibile aggiungere l'interfaccia di rete privata su un'istanza già esistente.

Per farlo, segui questa procedura:


```
admin@server-1:~$ nova interface-attach --net-id b19cb941-xxxx-xxxx-xxxx-581e8e7e4f54 Istanza1
```



```
admin@server-1:~$ nova list
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
| ID | Name | Status | Task State | Power State | Networks |
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
| 0952355f-cc8b-45b7-b011-d20415adc9f5 | Instance1 | ACTIVE | - | Running | Ext-Net=149.xxx.xxx.83; private_network_1=192.168.0.6 |
| 0b4be30f-b21f-4cba-a51b-c2024ab20ae8 | test_vrack | ACTIVE | - | Running | Ext-Net=149.xxx.xxx.48; private_network_1=192.168.0.5 |
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
```




## 
Per verificare che le tue 2 interfacce siano presenti sulla tua istanza, utilizza questo comando:


```
root@test-vrack:~$ ip addr list
```


Dovresti visualizzare 3 interfacce di rete:

- lo: Loopback
- eth0: la tua interfaccia pubblica
- eth1: la tua interfaccia privata


A questo punto, è sufficiente configurare il tuo indirizzo IP privato:


```
root@test-vrack:~$ ip addr add 192.168.0.5/16 dev eth1
```


e attivare la tua interfaccia di rete:


```
root@test-vrack:~$ ip link set eth1 up
```




## 

- [Come utilizzare l'API Nova]({legacy}1935)
- [Configura un IP Failover permanente]({legacy}1885)




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

