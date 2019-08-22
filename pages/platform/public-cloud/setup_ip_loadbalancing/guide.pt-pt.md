---
title: Configurar um IP LoadBalancing
excerpt: Configurar um IP LoadBalancing
slug: configurar_um_ip_loadbalancing
legacy_guide_number: g1927
---


## 
Para colocar em produção soluções de alojamento de alta disponibilidade ou para efetuar a repartição de carga, será necessário utilizar um IP LoadBalancing.
Este é evidentemente compatível com as instâncias Public CLoud.

Este guia irá explicar como poderá configurar um IP LoadBalancing com as suas instâncias Public Cloud


## Pré-requisitos

- 2 instâncias
- 1 IP Load Balancing




## Adicionar um endereço IP Backend

- Identificar as instâncias adicionar como backend



![](images/img_2967.jpg){.thumbnail}

- Aceder à parte "Dedicada" do Espaço Cliente OVH



![](images/img_2968.jpg){.thumbnail}

- Aceder ao menu "IP" à esquerda, e depois selecione o separador "IP LoadBalancing"



![](images/img_2969.jpg){.thumbnail}

- Clique em "Adicionar um backend" e de seguida selecione o endereço IP das suas instâncias



![](images/img_2970.jpg){.thumbnail}
Apenas os endereços IPs compatíveis serão apresentados, e isto se não dispuser da opção MultiDatacentres.


## Outras operações
Após a adição terminada, os seus endereços IP backends serão apresentados no Espaço Cliente.

![](images/img_2971.jpg){.thumbnail}
Poderá de seguida efetuar outras operações, tais como:

- Modificar os pesos
- Modificar os protocolos de teste
- Definir como backend de segurança
- Eliminar um backend



![](images/img_2972.jpg){.thumbnail}


## 
[Voltar à página inicial dos guias Cloud]({legacy}1785)

