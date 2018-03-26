---
title: Redimensionar uma instância
excerpt: Como redimensionar uma instância
slug: redimensionar_uma_instancia
legacy_guide_number: g1778
---


## 
No seguimento de um crescimento da sua atividade, ou simplesmente porque tem novas necessidades, é possível que a sua instância não tenha a potência necessária para responder aos novos picos de carga.
É possível, graças ao Public Cloud, aumentar os recursos que a sua instância dispõe em apenas alguns cliques.

Este guia explica-lhe o procedimento a ter em conta para redimensionar a sua instância a partir do seu manager OpenStack Horizon.

## Atenção
Esta manipulação leva ao corte do funcionamento da instância durante o tempo necessário à realização da operação.


## Pré-requisitos

- [Criar um acesso ao Horizon]({legacy}1773)
- Uma instância




## Redimensionar uma instância
Para redimensionar uma instância, é necessário:


- Ligar-se à interface Horizon;
- Clicar em "Instâncias" no menu da esquerda;
- Selecionar "Redimensionar a instância" no menu dropdown da esquerda correspondente à instância;



![](images/img_2718.jpg){.thumbnail}


## Separador de escolha do template
Esta secção indica o template atual e permite-lhe selecionar um novo template como "fonte" da instância.

![](images/img_2717.jpg){.thumbnail}

## Dica:
É possível consultar os recursos consumidos no contexto dos recursos globais disponíveis para o projeto.


## Separador Opções Avançadas
Esta secção permite gerir o particionamento do disco.

Particionamento do disco: (Automático ou Manual)

![](images/img_2652.jpg){.thumbnail}

- Uma vez efetuada a configuração, clique em Redimensionar




## Redimensionamento do disco em Windows
 Atenção 
Aquando do redimensionamento de uma instância Windows, o tamanho da partição não automaticamente atualizado e é necessário efetuar essa ação no sistema operativo com a ferramenta Gestor de discos :


- Iniciar a execução do "Gestor de Discos":



![](images/img_2980.jpg){.thumbnail}

- Fazer clique com o botão do lado direito do rato na partição principal



![](images/img_2981.jpg){.thumbnail}

- Extender a partição principal:



![](images/img_2978.jpg){.thumbnail}

- Validar a extensão do disco:



![](images/img_2979.jpg){.thumbnail}


## 
[Voltar à lista dos guias Cloud]({legacy}1785)

