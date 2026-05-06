---
title: Redimensionar uma instância através da Área de Cliente OVHcloud
excerpt: "Saiba como redimensionar uma instância Public Cloud a partir da Área de Cliente OVHcloud"
updated: 2026-03-04
---

## Objetivo

Se a sua instância não dispõe de recursos suficientes devido a um aumento da atividade ou a novas necessidades, pode aumentar os seus recursos em poucos cliques graças ao Public Cloud.

**Este guia explica como redimensionar a sua instância a partir da Área de Cliente OVHcloud.**

> [!warning]
>
> Apenas o redimensionamento para um modelo superior é possível para os modelos clássicos.
> Além disso, esta operação provoca a interrupção da instância durante o tempo da operação.
>

> [!success]
>
> As instâncias do tipo *flex* permitem o redimensionamento para modelos superiores ou inferiores graças a um tamanho de disco único.
>

## Requisitos

- Ter uma [instância Public Cloud](/links/public-cloud/public-cloud) na sua conta OVHcloud.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Caminho de navegação:** `Public Cloud`{.action} > Selecione o seu projeto

---
<!-- CP-NAV-END:publiccloud-projects -->

## Instruções

No menu à esquerda, clique em `Instâncias`{.action}.

Clique em `...`{.action} à direita da instância e selecione `Editar`{.action}. Também pode aceder a esta ação a partir dos detalhes da instância, clicando no seu nome e depois em `Alterar o modelo`{.action}.

No novo separador, desloque a página até à secção **Modelo** para selecionar o modelo pretendido.

> [!primary]
>
> Para os modelos clássicos, pode mudar para qualquer modelo cujo disco seja semelhante ou maior. Não pode mudar para um modelo com um disco mais pequeno.<br/>
>
> Apenas **as instâncias flexíveis** podem ser atualizadas ou degradadas, mantendo um tamanho de disco fixo de 50 GB.
>

Se o seu disco for igual ou inferior a 50 GB, pode mudar para uma `Instância flexível`{.action}, se assim o desejar.

> [!warning]
> Se editar uma instância do tipo *flex*, não é possível voltar a uma instância clássica através da Área de Cliente. Para mais informações, consulte o nosso guia sobre [Reverter de uma instância flex para uma instância clássica](/pages/public_cloud/compute/revert_a_flex_instance).
>

Após a seleção, clique em `Alterar o modelo`{.action} para confirmar a sua escolha.

### Redimensionamento do disco em Windows

Ao redimensionar uma instância Windows, o tamanho da partição não é automaticamente atualizado. É necessário ampliá-lo utilizando o **gestor de disco**:

- Clique com o botão direito do rato no menu `Start`{.action} e abra o gestor de disco clicando em `Disk Management`{.action}:

![Menu de contexto do menu Iniciar com a opção Gestão de disco](images/2980.png){.thumbnail}

- Clique com o botão direito na partição principal e depois em `Extend Volume`{.action}.

![Clique com o botão direito na partição principal para ampliar o volume](images/2981a.png){.thumbnail}

- No menu `Extend Volume Wizard`, clique em `Next`{.action}. Escolha os recursos do disco a expandir e clique em `Next`{.action}.

![Assistente de extensão de volume com seleção de recursos do disco](images/2978a.png){.thumbnail}

Clique em `Finish`{.action} para confirmar a sua escolha.

![Passo de finalização do assistente de extensão de volume](images/wizard2021.png){.thumbnail}

- O novo tamanho do disco será apresentado no gestor de disco.

![Gestor de disco a apresentar o novo tamanho](images/2979.png){.thumbnail}

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).