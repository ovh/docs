---
title: "Como configurar a reverse DNS do seu servidor (registo PTR)"
excerpt: Descubra como configurar a resolução reverse DNS do seu endereço IP a partir da Área de Cliente OVHcloud
updated: 2026-01-06
---

## Objetivo

O Reverse DNS (*rDNS*) é o complemento da resolução DNS "*forward*" que permite resolver os nomes de domínio em endereços IP. Graças à reverse DNS, um endereço IP pode ser resolvido com um nome de domínio (ou nome de host) ao qual está associado. Isto significa que os pedidos DNS do endereço IP associado retornarão este domínio.

A configuração da reverse DNS de um servidor é particularmente útil durante o envio de e-mails. A validação de um servidor de e-mail pelos sistemas de proteção antisspam melhora se uma query DNS do endereço IP é resolvida corretamente.

**Este manual explica como configurar a reverse DNS do endereço IP a partir da Área de Cliente OVHcloud.**

## Requisitos

- Um endereço IP associado a um serviço da sua conta OVHcloud
– Um nome de domínio com o seu registo `A` ligado ao seu serviço
- Ter acesso à [Área de Cliente OVHcloud](/links/manager)

## Instruções

Aceda à [Área de Cliente OVHcloud](/links/manager), clique em `Network`{.action} no menu à esquerda do ecrã e, a seguir, em `Endereços IP Públicos`{.action}.

O menu suspenso sob "**Os meus endereços IP públicos e serviços associados**" permite-lhe filtrar os seus serviços por categoria. Também pode pesquisar um endereço IP específico através da barra de pesquisa localizada à esquerda do menu suspenso.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip_new.png){.thumbnail}

Clique no botão `⁝`{.action} na linha do endereço IP em questão e selecione `Configurar o reverse DNS`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse_new.png){.thumbnail}

Na nova janela, preencha o seu reverse e clique em `Confirmar`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse_new.png){.thumbnail}

Também pode editar o reverse diretamente através do ícone `lápis`{.action} na coluna **Reverse DNS** da tabela.

> [!warning]
> Quando introduz o seu nome de domínio no *reverse*, este verifica imediatamente se o registo A aponta para a mesma IP. Isto é utilizado nas procedimentos anti-spam, pelo que o seu registo A tem de ser válido e propagado. Existem algumas regras a seguir quando introduz o *reverse* :
>
>  - o *reverse* não pode começar com um `-`
>  - o *reverse* não pode conter mais de 63 caracteres
>  - o *reverse* não pode conter caracteres maiúsculos
>  - o *reverse* tem de terminar com um `.`
>
> Exemplo : « domain.tld » no registo *reverse* seria `domain.tld.`.
>

> [!primary]
>
> Se a modificação não funcionar como esperado, verifique se o registo `A` está corretamente configurado na zona DNS do seu nome de domínio. A aplicação das alterações na zona DNS pode levar até 24 horas, no caso em que acabou de modificar o registo `A`.
>
> Se o nome de domínio for gerido pela OVHcloud como um registo **e utilizar os servidores DNS da OVHcloud**, pode consultar [este guia](/pages/web_cloud/domains/dns_zone_edit).
>

## Quer saber mais?

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Alterar os servidores DNS de um domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Fale com nossa [comunidade de utilizadores](/links/community).