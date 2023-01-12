---
title: Redimensionar uma instância
excerpt: Como redimensionar uma instância
slug: redimensionar_uma_instancia
legacy_guide_number: g1778
section: Gestão a partir do Horizon
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 23/11/2021**

## Objetivo

No seguimento de um crescimento da sua atividade, ou simplesmente porque tem novas necessidades, é possível que a sua instância não tenha a potência necessária para responder aos novos picos de carga.
É possível, graças ao Public Cloud, aumentar os recursos que a sua instância dispõe em apenas alguns cliques.

**Este guia explica-lhe o procedimento a seguir para redimensionar a sua instância a partir da interface OpenStack Horizon.**

> [!warning]
>
> Apenas o redimensionamento para um modelo superior é possível para os modelos clássicos.
> Além disso, esta operação provoca um corte da instância durante o tempo da operação.
> 

> [!success]
>
> As instâncias do tipo *flex* permitem o redimensionamento para modelos superiores ou inferiores graças a um tamanho de disco único.
> 

## Requisitos

- Ter [criado uma instância Public Cloud](https://docs.ovh.com/pt/public-cloud/public-cloud-primeiros-passos/#3o-passo-criacao-de-uma-instancia) na sua conta OVHcloud
- [Aceder à interface Horizon](../horizon/)

## Instruções

Ligue-se ao [Horizon interface](https://horizon.cloud.ovh.net/auth/login/), e verifique se está na região correcta. Pode verificar isto no canto superior esquerdo.</br>
Clique no menu `Compute`{.action} à esquerda e selecione `Instances`{.action}. Selecione a `Resize Instance`{.action} no menu pendente à direita da instância em questão.

![Resize instance](images/resizeinstance2021.png){.thumbnail}

### Escolha do template (*Flavor Choice*)

Esta secção indica o template atual (*old flavor*) e permite-lhe selecionar um novo template (*new flavor*) para o recurso da instância.

![public-cloud](images/flavorchoice.png){.thumbnail}

#### Detalhes do template (*Flavor Details*)

Nesta secção apresentam-se os recursos associados ao template escolhido. 

#### Limites do Projeto (*Project Limits*)

Visite aqui os recursos ocupados em comparação com os recursos totais atribuídos ao projeto.

> [!warning]
> Tenha em conta que só pode redimensionar uma instância de um modelo Linux para outro modelo Linux e de um modelo Windows para outro modelo Windows.
>

### Opções avançadas (*Advanced Options*)

Esta secção permite gerir o particionamento do disco (*Disk Partition*) e o grupo de servidores (*Server Group*).

![public-cloud](images/resize_advanced.png){.thumbnail}

Concluída a configuração, clique em `Resize`{.action}.

### Redimensionamento do disco sob Windows

Atenção, aquando de um redimensionamento para uma Instância Windows, o tamanho da partição não é automaticamente atualizado, será necessário ampliá-la ao utilizar o **disk manager**:

- Clique com o botão direito do rato no menu `Start`{.action} e lance o gestor de disco ao clicar em `Disk Management`{.action}:

![public-cloud](images/2980.png){.thumbnail}

- Clique com o botão direito na partição principal e, em seguida, em `Extend Volume`{.action}.

![public-cloud](images/2981a.png){.thumbnail}

- Clique em `Next`{.action} para aceder à secção `Extend Volume Wizard`. Escolha os recursos do disco a expandir e clique em `Next`{.action}. 

![public-cloud](images/2978a.png){.thumbnail}

A seguir, clique em `Finish`{.action} para validar a sua escolha.

![public-cloud](images/wizard2021.png){.thumbnail}

- A nova dimensão do disco será então apresentada no gestor de disco.

![public-cloud](images/2979.png){.thumbnail}

## Quer saiba mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.

