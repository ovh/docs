---
title: Migrar um Additional IP
excerpt: "Migrar um Additional IP"
slug: migrate-additional-ip
section: Additional IP
order: 04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 07/11/2022**

> [!primary]
>
> A partir de 6 de outubro de 2022, a nossa solução "Failover IP" passou a designar-se [Additional IP](https://www.ovhcloud.com/pt/network/additional-ip/). Isto não tem qualquer impacto nas suas funcionalidades ou no funcionamento dos seus serviços.
>

## Objetivo
Este guia explica como poderá migrar um Additional IP de uma instância para outra. Esta operação pode ter vários objetivos, permitindo geralmente limitar ou eliminar casos de indisponibilidade de serviço:

- migrar um website para a sua “nova versão”;
- passar a sua aplicação para um servidor de backup enquanto efetua uma manutenção ou atualização do servidor de produção.


## Requisitos

- Dispor de, no mínimo, duas instâncias [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/){.external} iniciadas
- Um Additional IP
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

> [!warning]
>
> Um Additional IP não pode ser migrado entre diferentes zonas. Por exemplo, um IP localizado no datacenter SBG pode ser migrado para GRA ou RBX mas não para BHS.
>

Na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), selecione o seu projeto na secção `Public Cloud`{.action}.

No menu à esquerda, aceda à secção `Network` e abra a parte `Public IPs`{.action}. Clique no separador `Aditional IP`{.action}.

Neste exemplo, o endereço Additional IP rodado para "Instância_A" será migrado para "Instância_B".

Clique em `...`{.action} na linha do Additional IP e selecione `Alterar a instância associada`{.action}.

![migrating Additional IP](images/migrateip_01.png){.thumbnail}

Clique no menu pendente para escolher a instância de destino na lista.

![migrating Additional IP](images/migrateip_02.png){.thumbnail}

Valide ao clicar em `Anexar`{.action}.

Após alguns segundos, o espaço cliente é atualizado. Aparecerá uma mensagem de confirmação se a migração foi efetuada com sucesso.

![migrating Additional IP](images/migrateip_03.png){.thumbnail}

> [!primary]
>
O Additional IP pode ser configurado no servidor de destino antes ou depois da migração. Se estiver pré-configurado, começará a responder assim que o roteamento estiver concluído.
>

## Quer saber mais?

[Configurar um Additional IP](https://docs.ovh.com/pt/publiccloud/network-services/configure-additional-ip/)

[Importar um Additional IP](https://docs.ovh.com/pt/publiccloud/network-services/import-additional-ip/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.