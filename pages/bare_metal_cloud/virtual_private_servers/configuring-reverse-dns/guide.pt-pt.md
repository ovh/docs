---
title: "Como configurar a reverse DNS do seu servidor (registo PTR)"
excerpt: Descubra como configurar a resolução reverse DNS do seu endereço IPv4 ou IPv6 a partir da Área de Cliente OVHcloud
updated: 2026-02-23
---

## Objetivo

O Reverse DNS (*rDNS*) é o complemento da resolução DNS "*forward*" que permite resolver os nomes de domínio em endereços IP. Graças à reverse DNS, um endereço IP pode ser resolvido com um nome de domínio (ou nome de host) ao qual está associado. Isto significa que os pedidos DNS do endereço IP associado retornarão este domínio.

A configuração da reverse DNS de um servidor é particularmente útil durante o envio de e-mails. A validação de um servidor de e-mail pelos sistemas de proteção antisspam melhora se uma query DNS do endereço IP é resolvida corretamente.

**Este manual explica como configurar a reverse DNS do endereço IP a partir da Área de Cliente OVHcloud.**

## Requisitos

- Um endereço IP associado a um serviço da sua conta OVHcloud
- Um nome de domínio com o seu registo `A` ou `AAAA` ligado ao seu serviço

<!-- CP-NAV-START:network-public-ip -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Public IP](/links/control-panel/network-public-ip)
- **Caminho de navegação:** `Network`{.action} > `Endereços IP Públicos`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

## Instruções
O menu suspenso sob "**Os meus endereços IP públicos e serviços associados**" permite-lhe filtrar os seus serviços por categoria. Também pode pesquisar um endereço IP específico através da barra de pesquisa localizada à esquerda do menu suspenso.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip_new.png){.thumbnail}

Clique no botão `⁝`{.action} na linha do endereço IP em questão e selecione `Configurar o reverse DNS`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse_new.png){.thumbnail}

Na nova janela, preencha o seu reverse e clique em `Confirmar`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse_new.png){.thumbnail}

Também pode editar o reverse diretamente através do ícone `lápis`{.action} na coluna **Reverse DNS** da tabela.

> [!warning]
> Ao introduzir o seu nome de domínio na reverse, este verifica imediatamente se o registo `A` / `AAAA` remete para o mesmo IP. Isto é utilizado nos procedimentos antisspam, pelo que o seu registo DNS deve ser válido e propagado. Há certas regras a seguir aquando da introdução da reverse:
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
> Se a alteração não funcionar como esperado, verifique se o registo `A` / `AAAA` está corretamente configurado na zona DNS do seu domínio. A aplicação das alterações na zona DNS pode demorar até 24 horas, no caso de ter alterado recentemente o registo.
>
> Se o nome de domínio for gerido pela OVHcloud como um registo **e utilizar os servidores DNS da OVHcloud**, pode consultar [este guia](/pages/web_cloud/domains/dns_zone_edit).
>

## Quer saber mais?

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Alterar os servidores DNS de um domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Fale com nossa [comunidade de utilizadores](/links/community).