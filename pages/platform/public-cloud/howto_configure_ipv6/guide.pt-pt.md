---
title: 'Configurar o IPv6 numa instância Public Cloud'
slug: configurar-ipv6
excerpt: 'Tutorial de configuração do protocolo IPv6 numa instância Public Cloud'
---

**Última atualização: 05/02/2020**

## Sumário
“Internet Protocol version 6” (IPv6) é a última versão do Internet Protocol (IP). Foi concebido para resolver o esgotamento antecipado dos endereços IPv4 utilizando os endereços compostos por 128 bits em vez dos tradicionais 32 bits do IPv4.

Todas as instâncias Public Cloud são entregues com um endereço IPv4 e um endereço IPv6.

Por predefinição, apenas o endereço IPv4 é configurado.

Neste tutorial, iremos explicar como configurar um endereço IPv6 numa instância Public Cloud.

## Requisitos

* Uma instância Public Cloud (qualquer modelo)
* Conhecimento de SSH.
* Ter conhecimentos básicos de rede.

## Instruções

### Léxico

Aqui tem um breve léxico dos termos utilizados neste tutorial:

|Léxico|Descrição|
|---|---|
|IPV6_BLOCK|O bloco IPv6 associado ao seu serviço|
|YOUR_IPV6|O endereço IPv6 associado ao seu serviço|
|IPv6_PREFIX|O prefixo do bloco IPv6 (por ex.: 2607:5300:60:62ac::/128 -> netmask = 128)|
|IPv6_GATEWAY|A gateway do bloco IPv6|


### Obter as informações de rede

Aceda à Área de Cliente, selecione o menu `Instâncias`{.action} e clique em `Detalhes da instância`{.action}.

![public-cloud ipv6](images/pcipv61.png){.thumbnail}

Todas as informações necessárias serão visíveis na secção **Redes**.

![public-cloud ipv6](images/pcipv62.png){.thumbnail}

### Exemplos de configurações persistentes

> [!primary] **Exemplos**
> 
>As informações fornecidas abaixo são exemplos.
>
>Enquanto administrador dos seus serviços, é responsável por adaptá-los à sua distribuição.
>

Em primeiro lugar, aceda à sua instância em SSH.

#### **Debian/Ubuntu**

Se considerarmos que a sua interface é eth0 e que está a usar um sistema operativo Debian, a configuração a adicionar deverá ser a seguinte:

Ficheiro a alterar (com privilégios su): /etc/network/interfaces

```
iface eth0 inet6 static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Exemplo concreto:

```
iface eth0 inet6 static
address 2001:41d0:xxx:xxxx::999
netmask 128
post-up /sbin/ip -6 route add 2001:41d0:xxx:xxxx::111 dev eth0
post-up /sbin/ip -6 route add default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del 2001:41d0:xxx:xxxx::111 dev eth0
```
#### **RedHat / CentOS**

Se considerarmos que a sua interface é eth0, a configuração deverá ser a seguinte:

Ficheiro a alterar (com privilégios sudo): /etc/sysconfig/network-scripts/ifcfg-eth0

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Exemplo concreto:

```
IPV6INIT=yes
IPV6ADDR=2001:41d0:xxx:xxxx::999
IPV6_DEFAULTGW=2001:41d0:xxx:xxxx::111
```

#### **Windows**

Aceda à secção `Ligações de rede`{.action} do seu Windows.

![public-cloud ipv6](images/pcipv63.png){.thumbnail}

A seguir, aceda às `Propriedades`{.action} da sua placa de rede clicando com o botão direito do rato.

![public-cloud ipv6](images/pcipv64.png){.thumbnail}

Clique em `IPv6`{.action} e, a seguir, em `Propriedades`{.action}.

![public-cloud ipv6](images/pcipv65.png){.thumbnail}

Finalmente, insira as informações relativas ao IPv6.

![public-cloud ipv6](images/pcipv66.png){.thumbnail}

## Diagnóstico

Configurou o IPv6 mas nada mudou? 

Existe uma operação simples para determinar se a falha está relacionada com a configuração realizada ou a rede da OVHcloud.

Primeiro, [passe a sua instância para o modo Rescue](https://docs.ovh.com/pt/public-cloud/passar_uma_instancia_em_modo_de_rescue/).

De seguida, utilize os comandos abaixo para configurar o seu IP de forma não persistente:

```
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Teste novamente a sua rede através de um ping6, por exemplo:

```
ping6 ipv6.google.com
```
Se a sua instância responder, é provável que uma das etapas da sua configuração inicial não tenha sido realizada corretamente.

De qualquer forma, não hesite em contactar o suporte com os elementos testados acima para receber uma análise da nossa parte.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>