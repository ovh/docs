---
title: Configurar um IP Failover a quente
excerpt: Configurar um IP Failover a quente
slug: configurar_um_ip_failover_a_quente
legacy_guide_number: g1884
---


## 
Caso tenha uma necessidade pontual de um endereço IP Failover, não é necessário de o configurar no seu ficheiro de configuração de rede para adicionar o seu IP.
Pode configurar este endereço IP com uma só linha de comando.

Este guia explica-lhe como configurar rapidamente um endereço IP numa instância (Apenas aplicável a distribuições Linux).
Esta configuração não é persistente, ou seja, caso reinicie a VPS a configuração perde-se. A implementação de uma configuração persistente está detalhada no seguinte guia:


- [Configuração de um IP Failover de forma permanente]({legacy}1885).




## Pré-requisitos

- Possuir uma instância Public Cloud.
- Ter importado um IP Failover para o seu projeto Public Cloud.
- Estar ligado à instância via SSH.


Neste guia, o IP Failover é simbolizado pelos caracteres X.X.X.X. É necessário substituir este valor pelo seu IP Failover.


## 

- Introduza num terminal o seguinte comando:

```
admin@vserver1:~$ sudo ip addr add X.X.X.X/32 dev eth0
```


- Exemplo

```
admin@vserver1:~$ sudo ip addr add 87.98.177.67/32 dev eth0
```


Verificações

Para verificar que o IP responde basta efetuar um simples teste de ping através de um terminal local (seja sob Windows, Linux ou Mac).

Exemplo:

```
user@hostname:~$ ping 87.98.177.67
PING 87.98.177.67 (87.98.177.67) 56(84) bytes of data.
64 bytes from 87.98.177.67: icmp_req=1 ttl=60 time=0.819 ms
64 bytes from 87.98.177.67: icmp_req=2 ttl=60 time=0.564 ms
64 bytes from 87.98.177.67: icmp_req=3 ttl=60 time=0.615 ms
64 bytes from 87.98.177.67: icmp_req=4 ttl=60 time=0.559 ms
^C
--- 87.98.177.67 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3000ms
rtt min/avg/max/mdev = 0.559/0.639/0.819/0.107 ms
```


Constatamos então que o IP responde corretamente.


## 
[Voltar à página dos guias Cloud]({legacy}1785)

