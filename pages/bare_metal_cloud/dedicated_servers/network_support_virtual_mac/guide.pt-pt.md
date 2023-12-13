---
title: Determinar se a funcionalidade dos MAC virtuais é suportada por um servidor dedicado
excerpt: Saiba como determinar se a funcionalidade dos MAC virtuais é suportada por um servidor dedicado através da API OVHcloud
updated: 2021-12-09
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em “Contribuir” nesta página.
>

## Objetivo

Para utilizar a funcionalidade dos MAC virtuais (VMAC) num servidor dedicado, deve, em primeiro lugar, determinar se este servidor suporte esta funcionalidade.

O suporte desta funcionalidade é um pré-requisito para todas as ações relativas aos MAC virtuais.

**Saiba como verificar se o seu servidor dedicado suporta a funcionalidade dos MAC virtuais.**

## Requisitos

- Dispor de um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/){.external}.
- Ter acesso à [API OVHcloud](https://api.ovh.com/){.external}.

> [!primary]
> Se não está familiarizado com a utilização da API OVHcloud, consulte o nosso manual "[Primeiros passos com as API OVHcloud](/pages/manage_and_operate/api/first-steps)".

## Instruções

Utilize a seguinte chamada API:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

Introduza o nome do seu servidor no campo `serviceName` e clique em `Execute`{.action}.

![SVMAC](images/support_virtual_mac_02.png){.thumbnail}

Assim, poderá obter uma lista com uma entrada "vmac / suported" que será "true" ou "false" (valor booleano).

![SVMAC](images/support_virtual_mac_04.png){.thumbnail}

> [!primary]
> **Interpretação dos resultados**
>
> - **false**: não pode utilizar as funcionalidades associadas aos MAC virtuais neste servidor.
>
> - **true**: pode utilizar as funcionalidades associadas aos MAC virtuais neste servidor.
>

## Quer saber mais?

[Primeiros passos com as API OVHcloud](/pages/manage_and_operate/api/first-steps)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.