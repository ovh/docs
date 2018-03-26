---
title: Criar uma instância na interface Horizon
excerpt: Como criar uma instância na interface Horizon
slug: criar_uma_instancia_na_interface_horizon
legacy_guide_number: g1772
---


## 
Conforme as suas necessidades, poderá ser necessário criar instâncias a partir do manager Horizon, nomeadamente nos casos em que deseja criar várias instâncias ao mesmo tempo, ou até para configurar um grupo de segurança particular nas suas instâncias.
Este guia indica-lhe como poderá efetuar essas operações.


## 
Para criar uma instância e necessário:


- Ligar-se à interface Horizon
- clicar em Instances no menu das esquerda.
- clicar no botão Start an instance
- preencher o formulário:



## Separador Detalhes
Eis as informações a fornecer:

|Availability Zone|Deixar nova (escolha "por defeito")|
|Name Nome da instância|Indicar o nome desejado para a instância a criar|
|Template|Selecionar o tipo de instância a criar|
|Número de instâncias|Indicar o número de instâncias a criar|
|Source da instância|Selecionar a fonte de origem da instância: (Iniciar a partir de uma imagem ou a partir de uma snapshot)|
|Image Name|Selecionar o nome da imagem (apenas no caso de não estar a ser escolhida uma imagem snapshot)|
|Instance Snapshot Name|Selecionar o nome da snapshot (no caso de pretender arrancar a partir de uma snapshot)|



## Separador acesso e segurança
Esta secção permite indicar uma chave SSH e o grupo de segurança para a instância

|Key Pair|Selecionar uma chave SSH para se ligar à instância (a criação de uma chave pode ser efetuada ao clicar no símbolo "+"|
|Grupos de segurança|Selecionar o grupo de segurança para a instância (autorização de abertura de portas)|



## Separador Rede
Esta secção permite indicar quais as redes às quais a instância será interligada

|Redes selecionadas|Selecionar a rede ou redes às quais a instância estará ligada a partir da lista de redes disponíveis|



## Separador Pós-Criação
Esta secção permite personalizar uma instância após a sua criação.

|Fonte de Script personalizado|Introdução direta ou Ficheiro|
|Dados de Script|Indicar o código do script no campo de introdução. Máximo 16KB) .|
|Ficheiro de Script|Clicar para indicar o local do script de pós-instalação.|



## Opções avançadas
Esta secção permite a gestão do particionamento da instância.

|Particionamento do disco|Automático ou Manual|
|Disco de configuração|Configurar OpenStack para escrever os metadados num disco de configuração específico que será associado à instância no momento da sua inicialização.|




## 
[Voltar ao índice dos guias Cloud]({legacy}1785)

