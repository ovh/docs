---
title: "Como configurar a reverse DNS do seu servidor (registo PTR)"
excerpt: Descubra como configurar a resolução reverse DNS do seu endereço IP a partir da Área de Cliente OVHcloud
updated: 2025-09-18
---

## Objetivo

O Reverse DNS (*rDNS*) é o complemento da resolução DNS « *forward* » que permite resolver os nomes de domínio em endereços IP. Graças à reverse DNS, um endereço IP pode ser resolvido com um nome de domínio (ou nome de host) ao qual está associado. Isto significa que os pedidos DNS do endereço IP associado retornarão este domínio.

A configuração da reverse DNS de um servidor é particularmente útil durante o envio de e-mails. A validação de um servidor de e-mail pelos sistemas de proteção antisspam melhora se uma query DNS do endereço IP é resolvida corretamente.

**Este manual explica como configurar a reverse DNS do endereço IP a partir da Área de Cliente OVHcloud.**

## Requisitos

- Um endereço IP associado a um serviço da sua conta OVHcloud
- Um nome de domínio com o seu registo `A` ligado ao seu serviço
- Ter acesso à [Área de Cliente OVHcloud](/links/manager)

## Instruções

Aceda à [Área de Cliente OVHcloud](/links/manager), clique em `Network`{.action} no menu à esquerda do ecrã e, a seguir, em `Endereços IP Públicos`{.action}.

Os menus suspensos na secção **Os meus endereços IP públicos e serviços associados** permitem filtrar os elementos da tabela para os serviços e encontrar rapidamente o endereço IP pretendido.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip.png){.thumbnail}

Clique em `...`{.action} na linha do endereço IP em causa e selecione `Modificar a reverse`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse.png){.thumbnail}

Na nova janela, indique a sua reverse e clique em `Validar`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse.png){.thumbnail}

Pode igualmente editar a reverse diretamente a partir do ícone em forma de caneta na coluna **Reverse DNS** da tabela.

> [!warning]
> Ao introduzir o seu nome de domínio na reverse, este verifica imediatamente se o registo A remete para o mesmo IP. Isto é utilizado nos procedimentos antisspam, pelo que o seu registo A deve ser válido e propagado. Há certas regras a seguir aquando da introdução da reverse:
>
>  - a reverse não pode começar por um `-`
>  - a reverse não pode ter mais de 63 caracteres
>  - a reverse não pode conter caracteres maiúsculos
>  - a reverse deve terminar com um `.`
>
> Por exemplo: "domain.tld" no registo reverse seria `domain.tld.`.
>

> [!primary]
>
> Se a alteração não funcionar como esperado, verifique se o registo `A` está corretamente configurado na zona DNS do seu domínio. A aplicação das alterações na zona DNS pode demorar até 24 horas, no caso de ter alterado recentemente o registo `A`.
>
> Se o domínio for gerido pela OVHcloud como agente de registo **e utilizar os servidores DNS da OVHcloud**, pode consultar [este manual](/pages/web_cloud/domains/dns_zone_edit).
>

## Quer saber mais?

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Alterar os servidores DNS de um domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Fale com nossa [comunidade de utilizadores](/links/community).