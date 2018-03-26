---
title: Configurar um IP Failover em Ubuntu
excerpt: Configurar um IP Failover em Ubuntu
slug: configurar_um_ip_failover_em_ubuntu
legacy_guide_number: g2043
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
vi /etc/network/interfaces
```


- Adicionar no final do ficheiro:

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
|Y|número de alias (partir de de 0 e depois 1... em função do número de endereços IP a configurar)|


Caso tenha vários endereços IP a adicionar, é necessário adicioná-los na mesma linha:
ao incrementar o valor Y (número de alias).


## Reiniciar o serviço de rede

- Reiniciar o serviço de rede com o seguinte comando

```
service networking restart
```





## 

- [Migrar um endereço IP Failover]({legacy}1890)




## 
[Voltar à página inicial dos guias Cloud]({legacy}1785)

