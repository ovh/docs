---
title: Parâmetros de acesso e de segurança no Horizon
excerpt: Saiba como gerir e proteger o acesso às suas instâncias
slug: access_and_security_in_horizon
legacy_guide_number: g1774
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 26/05/2021**

## Objetivo

A interface OpenStack Horizon fornece opções para configurar o acesso às suas instâncias e a outros serviços.<br>
Pode, por exemplo, configurar grupos de segurança para filtrar as ligações de entrada e de saída, ou ainda descarregar o ficheiro OpenRC que contém os seus identificadores para utilizar as API OpenStack.

**Saiba como gerir e proteger o acesso às suas instâncias**

## Requisitos

- [Aceder à interface Horizon](../criar_um_acesso_a_interface_horizon/)

## Instruções

Ligue-se à [interface Horizon](https://horizon.cloud.ovh.net/auth/login/).

Os parâmetros de acesso e de segurança são compostos pelas seguintes secções, acessíveis através do menu à esquerda:

- **API Access** (ao abrigo do `Projeto`{.action})

O quadro de acesso à API apresenta os endpoints das API OpenStack.

![horizon - acesso API](images/api_access.png){.thumbnail}

Para verificar os valores de acesso a utilizar com as API, clique em `View Credentials`{.action}.

Clique no botão `Download OpenStack RC File`{.action} para abrir um menu pendente no qual pode escolher o ficheiro RC apropriado a descarregar.

- **Key Pairs** (em `Project`{.action} e depois `Compute`{.action})

Esta secção permite-lhe armazenar e gerir os pares de chaves SSH. Pode simplesmente criar e adicionar uma chave pública e uma chave privada ao clicar no botão `Create Key Pair`{.action}.

![horizonte - chaves SSH](images/key_pairs.png){.thumbnail}

Se deseja adicionar uma chave pré-existente, clique em `Import Public Key`{.action}. Na nova janela, pode introduzir uma chave ou selecionar um ficheiro de chave.

Esta secção da interface contém instruções básicas. Para mais informações sobre as chaves SSH, consulte [este guia](../criacao-de-chaves-ssh/).

- **Security Groups** (em `Projeto`{.action} e `Network`{.action})

Os grupos de segurança são conjuntos de regras de filtragem que são aplicadas às interfaces de rede. Pode utilizá-las para restringir o acesso às instâncias a endereços IP e portas.

![horizon - grupos de segurança](images/security_groups.png){.thumbnail}

Adicione um grupo de segurança ao clicar no `Create Security Group`{.action} e aplique regras personalizadas ou predefinidas através do botão `Manage Rules`{.action} na tabela.

## Saiba mais

Fale com a nossa comunidade de utilizadores <https://community.ovh.com/en/>.
