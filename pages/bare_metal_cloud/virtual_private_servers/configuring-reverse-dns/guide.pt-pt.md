---
title: "Configurar a reverse DNS de um VPS"
excerpt: Saiba como implementar a resolução reverse DNS
updated: 2024-06-10
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O **Reverse DNS** (*rDNS*) é o complemento da resolução "clássica" dos DNS que permite converter um nome de domínio num endereço IP (registo do tipo **A**). Graças a um pedido deste tipo, um endereço IP pode ser resolvido em nome de domínio (registo do tipo **PTR**). Isto significa que os pedidos DNS no endereço IP em causa irão devolver um domínio.

Configurar a resolução **Reverse DNS** de um VPS é particularmente útil para o envio de e-mails. O risco de as suas mensagens serem rejeitadas por um sistema de proteção contra spam será diminuído se o endereço IP do seu servidor de envio se resolver corretamente em seu nome de domínio.

**Saiba como configurar a reverse DNS para o(s) endereço(s) de IP do seu VPS.**

## Requisitos

- Dispor de um [VPS](https://www.ovhcloud.com/pt/vps/) na sua conta OVHcloud.
- Um domínio com o seu campo `A` apontando para o VPS.
- Estar ligado à [Área de Cliente OVHcloud](/links/manager).

## Instruções

Aceda à [Área de Cliente OVHcloud](/links/manager), aceda à secção `Bare Metal Cloud`{.action} e abra o programa `Network`{.action}. De seguida, clique em `IP`{.action}.

O menu suspenso em **Meus endereços IP públicos e serviços associados** permite filtrar os serviços por categoria.

![Reverse IP](images/filteripvps.png){.thumbnail}

Clique em `...`{.action} na linha do endereço IP em causa e selecione `Alterar a reverse`{.action}.

![Reverse DNS](images/modifyreverse.png){.thumbnail}

Na nova janela, introduza a sua reverse e clique em `Confirmar`{.action}.

![Reverse DNS](images/enterreverse.png){.thumbnail}

Também pode editar a reverse diretamente através do ícone da coluna **Reverse** da tabela.

> [!primary]
>
Se a alteração não funcionar como previsto, verifique se o campo `A` está corretamente configurado na zona DNS do seu domínio. Atenção, a modificação da [zona DNS](/pages/web_cloud/domains/dns_zone_edit) pode demorar até 24 horas se apenas alterou recentemente o campo `A`.
>

## Quer saber mais? <a name="gofurther"></a>

[VPS - primeira utilização](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

Fale com nossa [comunidade de utilizadores](/links/community).