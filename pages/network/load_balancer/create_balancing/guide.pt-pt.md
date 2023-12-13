---
title: 'Método de repartição'
excerpt: 'Conheça os diferentes métodos de repartição de carga do Load Balancer OVH'
updated: 2018-01-17
---

## Sumário

O novo Load Balancer OVH oferece diferentes tipos de repartição de carga para os seus serviços. Este processo determina a forma como o Load Balancer OVH distribui os pedidos recebidos pelos seus servidores.

**Este guia apresenta os diferentes tipos de repartição de carga e explica como modificá-los.**

## Requisitos

- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Ter uma Farm de servidores criada.

## Instruções

### Os diferentes tipos de repartição de carga

A repartição de carga é utilizada nas Farms de servidores. É este parâmetro que define a forma como os pedidos são distribuídos entre os servidores da Farm.

Para conhecer os principais elementos do Load Balancer OVH, consulte [Apresentação do Load Balancer](/pages/network/load_balancer/use_presentation){.external}. 

|Algoritmo|Funcionalidades|
|---|---|
|First|O primeiro servidor disponível recebe a conexão. O servidor é escolhido em função do seu ID, do menor ao maior.|
LeastConn|Seleciona o servidor que tem menos conexões ativas. Este parâmetro é recomendado para sessões longas com pouco tráfego. O algortimo *RoundRobin* é aplicado aos grupos de servidores que têm o mesmo número de conexões ativas.|
|RoundRobin|Seleciona os servidores um após o outro para cada conexão. **Este é o algoritmo usado por defeito.**|
|Source|Este algoritmo efetua uma função de *hash* no endereço IP de origem e a seguir divide o resultado pelo número de servidores atualmente ativos. Cada endereço IP de origem será então redirigido para o mesmo servidor, enquanto este continuar ativo.|
|URI|Este algoritmo efetua uma função de *hash* numa parte da URI, ou na URI inteira, e a seguir divide o resultado pelo número de servidores atualmente ativos. Cada URI será então redirigida para o mesmo servidor, enquanto este continuar ativo.|

### Modificar o método de repartição de carga de uma Farm através da Área de Cliente

- Na secção `Server farms`{.action} (1), verá as Farms já criadas. Basta editar uma delas clicando nos três pontos à direita (2) e depois em `Change`{.action}:

![Modificação de uma Farm](images/server_cluster_change.png){.thumbnail}

Em `Advanced settings`{.action}, poderá modificar o `Load balancing method`{.action}:

![Modificação de uma Farm](images/distrib_mode_edit.png){.thumbnail}

Quando tiver selecionado o método de repartição desejado, clique em `Update`{.action} e depois em `Apply configuration`{.action} na barra amarela que surgir:

![Aplicar a configuração ](images/apply_config.png){.thumbnail}

### Modificar o método de repartição de carga de uma Farm através da API

Para modificar os parâmetros do método de repartição, edite os parâmetros da Farm de servidores.

- Ver detalhes de uma Farm

Esta instrução permite consultar detalhes de uma Farm se conhecer o seu ID. Neste exemplo, vamos trabalhar sobre uma Farm HTTP:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

|Parâmetro|Significado|
|---|---|
|ServiceName*|ID do serviço Load Balancer|
|farmId*|ID da Farm|

|Resposta (BackendHttp)|Significado|
|---|---|
|farmId|ID da Farm|
|balance|Tipo de repartição atualmente configurado para a Farm|
|zone|Nome da zona em que está configurada a Farm|
|port|Porta usada para ligar aos servidores configurados na Farm|
|probe|Tipo de probe atualmente configurado para a Farm|
|displayName|Nome dado a esta Farm|
|stikiness|Modo de monitoramento de conexão atualmente configurado para a Farm|

- Modificar o método de repartição de uma Farm

Esta instrução permite modificar a configuração de uma Farm se conhecer o seu ID. Neste exemplo, vamos trabalhar sobre uma Farm HTTP. Para modificar o método de repartição, o campo `BackendHttp.balance` deve ser atualizado com um método de repartição disponível:

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{id}
> 

|Parâmetro|Significado|
|---|---|
|ServiceName*|ID do serviço Load Balancer|
|farmId*|ID da Farm|
|BackendHttp.balance|Tipo de repartição desejado para esta Farm|

- Aplicar as modificações

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

|Parâmetro|Significado|
|---|---|
|ServiceName*|ID do Load Balancer|
|zone*|Nome da zona na qual deseja aplicar a configuração|

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
