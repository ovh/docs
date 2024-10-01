---
title: Autorizar IP a ligar-se ao vCenter
updated: 2023-01-25
---

## Objetivo

O acesso ao seu vCenter é restrito aos endereços IP autorizados.

**Saiba como autorizar endereços IP a ligarem-se ao vCenter.**

## Requisitos

* Ter acesso à [Área de Cliente OVHcloud](/links/manager).
* Dispor de uma [infraestrutura Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/) na sua conta OVHcloud.

## Instruções

Por predefinição, o acesso ao seu vCenter é restrito. Por isso, é necessário adicionar os IP que serão autorizados a ligar-se ao serviço.

A operação pode ser realizada a partir da [Área de Cliente OVHcloud](/links/manager). Na secção `Hosted Private Cloud`{.action}, clique na opção `VMware`{.action}. 

Selecione a infraestrutura e aceda ao separador `Segurança`{.action} e clique em `Adicionar um novo intervalo de endereços IP`{.action}.

![vCenter](images/restrictIP.JPG){.thumbnail}

Aqui, deve adicionar o IP em questão e eventualmente uma descrição para o encontrar facilmente na lista mais tarde.

Só precisa de validar clicando em `Seguinte`{.action} e, uma vez que o IP está corretamente marcado como **Autorizado e implementado**, a ligação ao vSphere será possível a partir do IP em questão.

![vCenter](images/restrictIP2.JPG){.thumbnail}

> [!primary]
>
> Tenha em conta que, por razões de segurança, só poderá autorizar um máximo de 2048 endereços IP a ligar-se ao seu vCenter.
>

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
