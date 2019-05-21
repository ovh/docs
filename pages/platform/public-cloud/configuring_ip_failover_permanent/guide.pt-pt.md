---
title: Configuração de um IP Failover de forma permanente
excerpt: Configuração de um IP Failover de forma permanente
slug: configuracao_de_um_ip_failover_de_forma_permanente
legacy_guide_number: g1885
---


## 
Com o objetivo de conservar a sua instância a longo termo, é preferível que configure os seus endereços IPs Failover de forma permanente para não o ter de reconfigurar cada vez que reiniciar a VPS.

Este guia explica-lhe como configurar de forma permanente um endereço IP numa instância.


## Pré-requisitos

- Possuir uma instância Public Cloud.
- Ter importado um IP Failover para o seu projeto Public Cloud.
- Estar ligado à instância via SSH.




## Para Debian / Ubuntu

- Deverá editar de configuração com o comando:

```
vi /etc/network/interfaces
```


- E deverá aicionar no final do ficheiro:

```
auto ethX:Y
iface ethX:Y inet static
address xxx.xxx.xxx.xxx
netmask 255.255.255.255
broadcast xxx.xxx.xxx.xxx
```



|Parâmetros|Valores|
|---|---|
|X|número da interface principal (geralmente eth0)|
|xxx.xxx.xxx.xxx|IP failover a configurar|
|Y|numero do alias (partir de 0 e depois 1, 2,... em função do número de IPS a configurar)|


Caso tenha de adicionar vários IPS é necessário adicioná-los:
ao incrementar o valor de Y (número de alias)

- Deverá reiniciar os serviços de rede com o seguinte comando:

```
service networking restart
```





## Para CentOS / Fedora

- Deverá editar de configuração com o comando:

```
vi /etc/sysconfig/network-scripts/ifcfg-ethX:Y
```



|Parâmetros|Valores|
|---|---|
|X|número da interface principal (geralmente eth0)|
|Y|numero do alias (partir de 0 e depois 1, 2,... em função do número de IPS a configurar)|



- E deverá adicionar no ficheiro

```
DEVICE="ethX:Y"
BOOTPROTO=static
IPADDR="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
BROADCAST="xxx.xxx.xxx.xxx"
ONBOOT=yes
```


- Deverá reiniciar os serviços de rede com o seguinte comando:

```
ifup ethX:Y
```





## Para Windows
O Windows não aceita a configuração de um endereço IP Failover como complemento da configuração do endereço IP principal em DHCP.
É então necessário que reconfigure a sua placa de rede com um IP adicional manualmemnte.


- Recupere as informações de rede com a ajuda do "ipconfig":



![](images/img_3545.jpg){.thumbnail}

- Aceda ao Painel de controlo e depois ao Centro de redes e partilhas:



![](images/img_3543.jpg){.thumbnail}

- Modificar os parâmetros da placa:



![](images/img_3544.jpg){.thumbnail}

- Aceder às propriedades da sua interface:



![](images/img_3546.jpg){.thumbnail}

- Aceder à configuração do protocolo TCP/IPv4



![](images/img_3547.jpg){.thumbnail}

- Passe a sua configuração para manual e utilize uma configuração similar à apresentada em baixo ao adaptar os endereços IP mediante as informações que obteve com a ajuda do seu "ipconfig" e depois clique em "Avançadas:



![](images/img_3548.jpg){.thumbnail}

- Adicione o seu endereço IP Failover da seguinte forma:



![](images/img_3551.jpg){.thumbnail}


## 

- [Migrar um IP FailOver]({legacy}1890)




## 
[Voltar à página inicial dos guias Cloud]({legacy}1785)

