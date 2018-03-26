---
title: Suspender ou colocar em pausa uma instância
excerpt: Com suspender ou colocar em pausa uma instância a partir da interface Horizon.
slug: suspender_ou_colocar_em_pausa_uma_instancia
legacy_guide_number: g1781
---


## 
Durante a configuração de uma infraestrutura de alta disponível, poderá ser necessário cortar o acesso às instâncias para efetuar alguns testes.
O OpenStack permite que suspenda ou coloque em pausa as suas instâncias.
O processo de suspensão é similar à hibernação da instância e o colocar em pausa é similar a estar em espera.
O estado "Suspenso" é igualmente utilizado caso haja problemas de faturação.
Este guia de exemplo explica como suspender uma instância, o que corresponde à hibernação, ou colocar em pausa uma instância.

## Informação
Estas manipulações não interrompem a faturação da instância, ela será faturada até que a termine.


## Pré-requisitos

- [Criar um acesso ao Horizon]({legacy}1773)
- Uma instância




## 
Para suspender uma instância é necessário:


- Ligar-se à interface Horizon
- Clicar em Instâncias no menu da esquerda.
- Selecionar Suspender a instância no menu dropdown correspondente à instância.



![](images/img_2656.jpg){.thumbnail}

- Uma mensagem de confirmação aparecerá para indicar a suspensão da instância.



## Informação
Para reiniciar a execução da instância, é necessário selecionar Ligar a instância na lista dropdown correspondente à instância.


## 
Para colocar em pausa uma instância é necessário:


- Ligar-se à interface Horizon
- Clicar em Instâncias no menu da esquerda.
- Selecionar Instância em Pausa no menu dropdown correspondente à instância.



![](images/img_2656.jpg){.thumbnail}

- Uma mensagem de confirmação aparecerá para indicar que a instância foi colocada em pausa.




## 
[Voltar à lista dos guias Cloud]({legacy}1785)

