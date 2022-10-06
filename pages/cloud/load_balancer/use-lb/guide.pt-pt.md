---
title: Gestão do serviço Load Balancer através da Área de Cliente
slug: utilizacao-iplb
excerpt: Resumo das funções principais e utilização inicial do serviço Load Balancer através da Área de Cliente
section: Primeira Etapa
---

## Objetivo

Este guia tem como objetivo facilitar a primeira utilização do Load Balancer e apresentar as principais funções do serviço.

## Pré-requisitos

- Ter acesso à Área de Cliente
- Ter contratado um [Load Balancer](https://www.ovh.pt/solucoes/load-balancer/)

## Questões práticas

### Como gerir o Load Balancer a partir da Área de Cliente 

Para gerir o Load Balancer através da Área de Cliente, clique na secção `Cloud`{.action} (1) depois em `Load Balancer`{.action} (2) na coluna à esquerda. De seguida irá visualizar a página principal do serviço: 

![Load Balancer](images/lb_main_page.png){.thumbnail}

Nesta página principal serão apresentadas as seguintes informações:

|Elemento|Função|
|---|---|
|Estado|Resumo do Load Balancer com IP, Frontends, Farms ativas e servidores adicionados|
|Utilização|Resumo da utilização do Load Balancer|
|Gráficos|Gráficos associados à atividade do serviço em termos de ligações simultâneas ou de pedidos de ligação por minuto|
|Informações|Detalhes sobre os IPv4 e Additional IP associados, e sobre o número do IPv4 de saída (para ver mais info, clique nos três pontos)|
|Configuração|Opções de personalização do nome da oferta (visível em cima e na coluna à esquerda), da(s) cipher(s), do datacenter do Load Balancer|
|Subscrição|Detalhes administrativos do serviço|


Para adicionar `Frontends`{.action} ou `Server Farms`{.action}, clique nos respetivos botões. Será apresentado um menu para auxiliar na configuração daqueles componentes do serviço.


### Gestão de Fontends

Para adicionar Frontends, basta aceder à secção `Frontends`{.action} e clicar em `Adicionar Frontend`{.action}. De seguida, irá visualizar o seguinte menu


![Adicionar Frontend](images/add_frontend.png){.thumbnail}

Detalhes dos Elementos de um Frontend


|Elemento|Função|
|---|---|
|Nome|Opção que permite atribuir um nome ao frontend, para facilitar a sua identificação|
|Protocolo|Selecione entre HTTP, HTTPS, TCP, SSL TCP (ou TLS) e UDP|
|Porta|Selecione a porta de escuta|
|Datacenter|Pode optar pelo seu datacenter ou por todos quando criar o Frontend|
|Farm predefinida|Se tiver várias Farms configuradas, pode predefinir uma para cada Frontend|

A gestão dos Frontends tem opções de configuração avançada. 


![Configurações Avançadas](images/advanced_frontend.png){.thumbnail}

|Elemento|Função|
|---|---|
|Additional IP dedicado|Lista dos Additional IP dos servidores remotos|
|Limitar acesso a IP|Lista que permite limitar os acessos remotos ao Load Balancer (só IPv4)|
|Reencaminhamento HTTP|Adicionar um URL de reencaminhamento HTTP|
|Cabeçalho HTTP|Adicionar cabeçalho HTTP|


### Gestão de Server Farms
Para adicionar uma Server Farm, basta aceder a `Server Farms`{.action} e clicar em `Adicionar Server Farm`{.action}. Nesta secção, as opções básicas são iguais às dos Frontends. Já as opções avançadas são diferentes.


![Adicionar Farm](images/advanced_cluster.png){.thumbnail}

|Elemento|Função|
|---|---|
|Método de repartição|Opção entre Round-robin, First, Last, Source ou URI para o balanceamento do IP|
|Monitorização da sessão|Definição da monitorização através de Cookie ou IP Source|
|Sonda|Seleção e ativação da sonda|


### Gestão dos Servidores
Depois de criada a Server Farm, só falta adicionar os servidores (veja abaixo os detalhes das opções básicas e opções avançadas):


![Adicionar Servidor](images/add_server.png){.thumbnail}
![Adicionar Servidor](images/add_server_advanced.png){.thumbnail}


|Elemento|Função|
|---|---|
|Nome|Opção que permite atribuir um nome ao servidor, para facilitar a sua identificação|
|Endereço IPv4|Adicione o IP do serviço que irá funcionar como servidor|
|Porta|Porta do servidor|
|Servidor de backup|Especificar se o servidor é de backup|
|Usar a sonda de disponibilidade da Farm|Definir se vai usar a sonda validada durante a criação da Farm|
|Encriptar os pedidos com SSL|Ativar a encriptação dos pedidos com um certificado SSL|
|Cookie|Adicione um cookie de sessão personalizada|
|Cadeia de certificação|Adicione uma cadeia de certificação|
|Peso do balanceamento|Seleção do peso de balanceamento para a repartição da carga|


### Gestão dos Certificados SSL
Pode adicionar um SSL ao Load Balancer na secção `Certificado SSL`{.action}. Aqui tem duas opções: solicitar um certificado SSL da OVH ou adicionar um certificado externo.

#### Certificado SSL OVH
Para solicitar um certificado SSL, basta aceder à secção `Certificado SSL`{.action}, clicar em `Encomendar um certificado SSL`{.action}, e seguir as instruções:


![Encomendar um certificado SSL](images/ordering_ssl.png){.thumbnail}


|Elemento|Função|
|---|---|
|Nome|Opção que permite atribuir um nome ao servidor, para facilitar a sua identificação|
|Tipo de certificado|Gratuito (Let's Encrypt), Comodo DV ou Comodo EV (veja detalhes neste endereço: https://www.ovh.pt/ssl/)|
|Fully Qualified Domain Name (FQDN)|O(s) domínio(s) associados(s) ao serviço|

#### Adicionar um certificado SSL externo
Se já tem um certificado SSL, este pode ser associado ao serviço:


![Adicionar um Certificado SSL](images/external_ssl.png){.thumbnail}


|Elemento|Função|
|---|---|
|Nome|Opção que permite atribuir um nome ao servidor, para facilitar a sua identificação|
|Chave privada|Campo para adicionar a chave privada ao serviço|
|Certificado|Campo para adicionar o Certificado|
|Cadeia|Campo para adicionar o certificado root|


## Quer saber mais?

Troque impressões com a nossa comunidade em <https://community.ovh.com>.