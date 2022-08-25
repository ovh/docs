---
title: Redimensionar uma instância
excerpt: Como redimensionar uma instância a partir da Área de Cliente OVHcloud
slug: resize-an-instance-manager
section: Gestão a partir da Área de Cliente OVHcloud
order: 6
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 25/08/2022**

## Objetivo

No seguimento de um crescimento da sua atividade, ou simplesmente porque tem novas necessidades, é possível que a sua instância não tenha a potência necessária para responder aos novos picos de carga.
É possível, graças ao Public Cloud, aumentar os recursos que a sua instância dispõe em apenas alguns cliques.

**Este guia explica-lhe o procedimento a seguir para redimensionar a sua instância a partir da Área de Cliente OVHcloud.**

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

- Ter uma [instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

Inicie a sessão na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), aceda à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em questão. A seguir, clique em `Instâncias`{.action} no menu à esquerda. 

A seguir, clique em `...`{.action} à direita da instância e selecione `Editar`{.action}.

![public-cloud](images/editinstance.png){.thumbnail}

No novo separador, expanda a página até à secção **Modelo** para selecionar o modelo à sua escolha.

![public-cloud](images/template.png){.thumbnail}

> [!primary]
>
> Para os modelos clássicos, pode migrar para qualquer modelo cujo disco seja semelhante ou maior. Não pode passar para um modelo com um disco mais pequeno.<br/>
>
> Apenas **as instâncias flexíveis** podem ser atualizadas e degradadas, mantendo um tamanho de disco fixo de 50 GB.
>

Se o seu disco for igual ou inferior a 50GB, pode passar para uma `Instância flexível`{.action} se assim o desejar.

> [!warning]
> Atenção, no caso em que edita uma instância do tipo *Flex*, não é possível migrar para uma instância clássica através à Área de Cliente. Para mais informações, consulte o nosso guia sobre [Migrar de uma instância Flex para uma instância clássica](https://docs.ovh.com/pt/public-cloud/modificar-uma-instancia-flex/).
>

Depois de fazer a seleção, clique em `Alterar o modelo`{.action} para confirmar a sua escolha.

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