---
title: Utilizar o vRack e as redes privadas com as instâncias Public Cloud
excerpt: Utilizar o vRack e as redes privadas com as instâncias Public Cloud
slug: utilizar_o_vrack_e_as_redes_privadas_com_as_instancias_public_cloud
legacy_guide_number: g2162
hidden: true
---


## 
Para utilizar as redes privadas com as instâncias Public Cloud é necessário associar o projeto a um vRack.

As etapas necessárias para a colocação de duas instâncias do Public Cloud a comunicarem de forma privada são:


- Criação de um vRack 3
- Associação do projeto Public Cloud ao vRack
- Criação de uma rede privada
- Associação das instâncias à rede privada




## 
Por ordem, efetue os seguintes comandos a partir [da APIv6 da OVH](https://eu.api.ovh.com/console/#/)


- [POST /order/vrack/new](https://api.ovh.com/console/#/order/vrack/new#POST)


|Quantity|1|
|---|
|Quantity|1|


Nota:
Esta função vai criar uma encomenda para um vRack.
A encomenda de um vRack é gratuita.
Obtenha o número da nota de encomenda (orderId)

- [POST /me/order/{orderId}/payWithRegisteredPaymentMean](https://api.ovh.com/console/#/me/order/{orderId}/payWithRegisteredPaymentMean#POST) :


|orderID|a recuperar da anterior função|
|---|
|orderID|a recuperar da anterior função|
|paymentMean|fidelityAccount|


Nota:
Mesmo tratando-se de uma nota de encomenda a 0€, é necessário simular o pagamento de uma nota de encomenda.
A sua nota de encomenda será depois validada e o seu tratamento será iniciado.
Même s'il s'agit d'un bon de commande à 0€, il est nécessaire de simuler un paiement du bon de commande.
Votre bon de commande sera alors validé et son traitement commencera.

- [GET /me/order/{orderId}/status](https://api.ovh.com/console/#/me/order/{orderId}/status#GET) :


|orderID|recuperado da primeira função|
|---|
|orderID|recuperado da primeira função|


Nota:
Deve aguardar que o estado da encomenda passe a "Entregue".

- [GET /me/order/{orderId}/details/{orderDetailId}](https://api.ovh.com/console/#/me/order/{orderId}/details/{orderDetailId}#GET) :


|orderID|recuperado da primeira função|
|---|
|orderID|recuperado da primeira função|
|orderDetailId|recuperado da função anterior|


Remarques :
A informação importante aqui é o "domain" que deve ter a seguinte forma: "pn-XXXX".

- [GET /me/order/{orderId}/details](https://api.ovh.com/console/#/me/order/{orderId}/details#GET) :


|orderID|recuperado da primeira função|
|---|
|orderID|recuperado da primeira função|


Nota:
Esta função é necessária para recuperar o nome do vRack criado.


## 
Caso o identificador do projeto Public Cloud não seja conhecido, siga as instruções seguintes:


- [GET /cloud/project](https://api.ovh.com/console/#/cloud/project#GET)


Nota:
Esta função permite recuperar a lista dos projetos.

- [GET /cloud/project/{serviceName}](https://api.ovh.com/console/#/cloud/project/{serviceName}#GET) :


|serviceName|um dos identificadores recuperados na anterior função|
|---|
|serviceName|um dos identificadores recuperados na anterior função|


Nota:
Esta função permite identificar o projeto graças ao campo "description".
Após conhecer a informação do identificador do projeto e o nome do vRack, a associação efetua-se da seguinte forma:


- [POST /vrack/{serviceName}/cloudProject](https://api.ovh.com/console/#/vrack/{serviceName}/cloudProject#POST):


|serviceName|o "domain" recuperado da anterior etapa, é o nome do vRack|
|---|
|serviceName|o "domain" recuperado da anterior etapa, é o nome do vRack|
|project|o identificador do projeto Cloud, na forma de uma cadeira de 32 caracteres|


Nota:
Esta chamada dá inicio à associação do projeto ao vRack, e é necessário recuperar o ID da tarefa.

- [GET /vrack/{serviceName}/task/{taskId}](https://api.ovh.com/console/#/vrack/{serviceName}/task/{taskId}#GET)


|serviceName|o "domain" recuperado da anterior etapa. É o nome do vRack|
|---|
|serviceName|o "domain" recuperado da anterior etapa. É o nome do vRack|
|taskID|o id da tarefa recuperado na anterior função|


Nota:
Esta função permite verificar o estado do trabalho. Após o término do trabalho, passe à função seguinte.


## 

- [POST /cloud/project/{serviceName}/network/private](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/private#POST)


|serviceName|o identificador do seu projeto|
|---|
|serviceName|o identificador do seu projeto|
|name|o nome da rede privada|
|region|exemplo: SBG1|
|vlandID|ID da nova VLAN, a escolher entre 1 e 4000|


Nota:
Esta etapa é a criação da VLAN.
Pode deixar o campo 'Região" vazio para que ele seja ativado em todas as regiões.
O identificador da VLAN é necessário. Ele será utilizado para estabelecer a comunicação com outros serviços OVH compatíveis com vRack.

- [GET /cloud/project/{serviceName}/network/private](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/private#GET) :

|serviceName|o identificador do seu projeto|
|---|
|serviceName|o identificador do seu projeto|


Nota:
Esta função permite recuperar o networkId.
Ele será apresentado na seguinte forma: nome-vrack_vlanId.

- [POST /cloud/project/{serviceName}/network/private/{networkId}/subnet](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/private/{networkId}/subnet#POST) :


|serviceName|o identificador do seu projeto|
|---|
|serviceName|o identificador do seu projeto|
|networkId|o identificador da sua rede recuperado aquando da função anterior|
|dhcp|true ou false|
|end|último enderçeo da sub rede|
|network|bloco IP da sub rede|
|region|exemplo: SBG1|
|start|primeiro endereço da sub rede|


Nota:
Nesta etapa irá efetuar a criação da sub rede por região.
Poderá ativar, ou não, a atribuição de endereços IP privados de forma dinâmica via DHCP.
Tenha em conta que deverá separar os seus pools de endereços IP para as diferentes regiões.
Por exemplo:

- De 192.168.0.2 a 192.168.0.254 para SBG1
- De 192.168.1.2 a 192.168.1.254 para GRA1


Para recuperar o endereço IP privado da sua instância poderá utilizar a seguinte função:


```
/cloud/project/{serviceName}/instance/{instanceId}
```




## Com a APIv6 da OVH
Vamos criar uma nova instância associada à nossa rede privada.


- [GET /cloud/project/{serviceName}/network/public](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/public#GET) :


|serviceName|o identificador do seu projeto|
|---|
|serviceName|o identificador do seu projeto|


Nota:
Esta função permite a recuperação do networkID da rede pública para que a configure na sua instância.

- [GET /cloud/project/{serviceName}/network/private](https://api.ovh.com/console/#/cloud/project/{serviceName}/network/private#GET) :


|serviceName|o identificador do seu projeto|
|---|
|serviceName|o identificador do seu projeto|


Nota:
Esta função permite recuperar o networkID da sua rede privada para que possa configurar a sua instância.

- [POST /cloud/project/{serviceName}/instance](https://api.ovh.com/console/#/cloud/project/{serviceName}/instance#POST) :


Parâmetros Clássicos + Networks:

|ip|a não colocar para a rede pública e caso utilize DHCP|
|networkId|o identificador da rede|
|+|permite adicionar uma interface suplementar|


Nota:
Além dos parâmetros clássicos para iniciar uma instância, poderá configurar as interfaces de rede das suas instâncias.
Não é possível associar uma instância já existente à rede privada através da APIv6 da OVH, de momento, e é necessário criar uma nova.


## Com a API OpenStack

- Listar as redes disponíveis:


```
admin@serveur-1:~$ nova net-list

+--------------------------------------+-------------------+------+
| ID | Label | CIDR |
+--------------------------------------+-------------------+------+
| 8d3e91fd-xxxx-xxxx-xxxx-4252de201489 | Ext-Net | None |
| b19cb941-xxxx-xxxx-xxxx-581e8e7e4f54 | private_network_1 | None |
+--------------------------------------+-------------------+------+
```


- Criar uma nova instância com 2 interfaces:


```
admin@serveur-1:~$ nova boot --flavor vps-ssd-1 --image "Debian 8" --nic net-id=8d3e91fd-xxxx-xxxx-xxxx-4252de201489 --nic net-id=b19cb941-xxxx-xxxx-xxxx-581e8e7e4f54 --key_name SSH_KEY test_vrack
```


- Verificar a sua instância:


```
admin@serveur-1:~$ nova list
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
| ID | Name | Status | Task State | Power State | Networks |
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
| 0b4be30f-b21f-4cba-a51b-c2024ab20ae8 | test_vrack | ACTIVE | - | Running | Ext-Net=149.xxx.xxx.48; private_network_1=192.168.0.5 |
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
```



Esta instância tem então 2 interfaces de rede:

- Pública: 149.xxx.xxx.48
- Privada: 192.168.0.5


Com a API OpenStack é necessário adicionar a interface de rede privada numa instância já existente.

Veja o procedimento a seguir:


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
Pode verificar que as 2 interfaces estão presentes na sua instância com a ajuda do seguinte comando:


```
root@test-vrack:~$ ip addr list
```


Deverá, normalmente, encontrar 3 interfaces de rede:

- lo: Loopback
- eth0: a sua interface pública
- eth1: a sua interface privada


É então necessário que configure o seu endereço IP Privado:


```
root@test-vrack:~$ ip addr add 192.168.0.5/16 dev eth1
```


E depois deve ativar a sua interface de rede:


```
root@test-vrack:~$ ip link set eth1 up
```




## 

- [Dar os primeiros passos com a API Nova]({legacy}1935)
- [Configuração de um IP Failover de forma permanente]({legacy}1885)




## 
[Voltar à página inicial dos guias Cloud]({legacy}1785)

