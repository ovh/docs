---
title: Configurar um IP Failover em CentOS
excerpt: Configurar um IP Failover em CentOS
slug: configurar_um_ip_failover_em_centos
legacy_guide_number: g2044
---


## 
Se necessita de configurar um endereço IP Failover nas suas instâncias, quer seja porque:

- dispõe de vários websites na sua instância,
- aloja vários projetos internacionais,

É possível adquirir ou importar um endereço IP Failover para as suas instâncias Public Cloud.

No entanto, estes endereços IP Failover não são configurados automaticamente nas suas instâncias, e este guia ajuda-o a configurar a interface de rede da sua instância para que consiga adicionar o seu endereço IP Failover.


## Pré-requisitos

- [Criar uma instância no Espaço Cliente OVH]({legacy}1775)
- Um endereço IP Failover




## Configuração da interface

- Editar o ficheiro com o seguinte comando:

```
vi /etc/sysconfig/network-scripts/ifcfg-ethX:Y
```



|Parâmetros|Valores|
|---|---|
|X|número da interface principal (généralement eth0)|
|Y|numero de alias (partir de de 0 e depois 1... em função do número de endereços IP a configurar)|



- Adicionar no ficheiro:

```
DEVICE="ethX:Y"
BOOTPROTO=static
IPADDR="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
BROADCAST="xxx.xxx.xxx.xxx"
ONBOOT=yes
```





## Reiniciar o serviço de rede

- Reiniciar o serviço de rede com o seguinte comando

```
ifup ethX:Y
```





## 

- [Migrar um endereço IP Failover]({legacy}1890)




## 
[Voltar à página inicial dos guias Cloud]({legacy}1785)

