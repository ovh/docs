---
title: Autorizar IP a ligar-se ao vCenter
slug: autorizar-ip-a-ligar-se-ao-vcenter
legacy_guide_number: '1442255'
space_key: VS
space_name: vSphere as a Service
section: Funcionalidades da OVHcloud
---

**Última atualização: 18/08/2021**

## Objetivo

É possível limitar o acesso ao vCenter autorizando que apenas alguns endereços IP se liguem. 

**Saiba como autorizar endereços IP a ligarem-se ao vCenter.**

## Requisitos

* Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
* Dispor de uma [infraestrutura Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/){.external} na sua conta OVHcloud.

## Instruções

Quando [a política de acesso ao vCenter é limitada](../alterar-a-politica-de-acesso-ao-vcenter/), é necessário adicionar os IP que serão autorizados a ligar-se ao serviço.

A operação pode ser realizada a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external-link}. Na secção `Hosted Private Cloud`, clique na opção `Private Cloud`. Selecione a infraestrutura e aceda ao separador `Segurança` e clique em `Adicionar um novo intervalo de endereços IP`{.action}.

![vCenter](images/restrictIP.JPG){.thumbnail}

Aqui, deve adicionar o IP em questão e eventualmente uma descrição para o encontrar facilmente na lista mais tarde.

Só precisa de validar clicando em `Seguinte`{.action} e, uma vez que o IP está corretamente marcado como **Autorizado e implementado**, a ligação ao vSphere será possível a partir do IP em questão.

![vCenter](images/restrictIP2.JPG){.thumbnail}

> [!primary]
>
> Tenha em conta que, por razões de segurança, só poderá autorizar um máximo de 2048 endereços IP a ligar-se ao seu vCenter.
>

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com>.
