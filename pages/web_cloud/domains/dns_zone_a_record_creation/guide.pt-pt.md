---
title: "Adicionar um registo DNS do tipo A para um domínio"
excerpt: "Saiba como adicionar um registo DNS do tipo A numa zona DNS gerida na OVHcloud para o seu domínio"
updated: 2025-05-12
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Deseja que o seu website esteja acessível através do seu nome de domínio? Para isso, o seu domínio deve apontar para o endereço IP do serviço no qual o seu website está situado (alojamento web, servidor dedicado, VPS, etc.). De seguida, deverá configurar a zona DNS ativa do seu domínio através de um registo DNS do tipo A.

**Saiba como adicionar um registo DNS do tipo A numa zona DNS gerida na OVHcloud para o seu domínio.**

> [!primary]
>
> Para alterar ou eliminar um registo DNS do tipo A de uma zona DNS da OVHcloud, siga [este manual](/pages/web_cloud/domains/dns_zone_edit).

## Requisitos

- Ter um [nome de domínio](/links/web/domains).
- Ter uma zona DNS associada a este domínio na OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager), secção `Web Cloud`{.action}.

## Instruções

> [!warning]
>
> A adição, modificação ou eliminação de registos DNS numa zona DNS ativa é uma operação sensível. Se não tiver a certeza, entre em contacto com um [fornecedor especializado](/links/partner).

### Adicionar um registo DNS do tipo A para um domínio

1. Clique no menu `Zonas DNS`{.action} e escolha o domínio em causa.
2. Na página que se abrir, clique no botão `Adicionar uma entrada`{.action}.
3. Na janela que aparecer, selecione o campo de apontamento do tipo `A`{.action}.
4. De seguida, introduza no campo `Alvo *` o endereço IP (por exemplo: `203.0.113.0`) do serviço em que se situa o seu website (alojamento web, servidor dedicado, VPS, etc.) e clique em `Seguinte`{.action}.
5. Verifique o resumo e, em seguida, clique em `Validar`{.action}. Aguarde até **24** horas para que a propagação da adição na rede DNS seja plenamente efetiva.

/// details | Clique aqui para mais informações.

Consulte os nossos guias detalhados:

- [Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records).
- [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
- [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Alojamento web - Alterar um nome de domínio já associado a um alojamento](/pages/web_cloud/web_hosting/multisites_modify_domain).

///

### Adicionar um registo DNS do tipo A para o subdomínio de um domínio

1. Clique no menu `Zonas DNS`{.action} e escolha o domínio em causa.
2. Na página que se abrir, clique no botão `Adicionar uma entrada`{.action}.
3. Na janela que aparecer, selecione o campo de apontamento do tipo `A`{.action}.
4. De seguida, introduza no campo `Subdomínio` o subdomínio em causa (por exemplo: `www` para o subdomínio `www.domain.tld`) e, nos campos `Alvo *`, o endereço IP (por exemplo: `203.0.113.0`) do serviço em que se situa o seu website (alojamento web, servidor dedicado, VPS, etc.). Por fim, clique em `Seguinte`{.action}.
5. Verifique o resumo e, em seguida, clique em `Validar`{.action}. Aguarde até **24** horas para que a propagação da adição na rede DNS seja plenamente efetiva.

/// details | Clique aqui para mais informações.

Consulte os nossos guias detalhados:

- [Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records).
- [Como criar um subdomínio?](/pages/web_cloud/domains/domain_create_subdomains).
- [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
- [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Alojamento web - Alterar um nome de domínio já associado a um alojamento](/pages/web_cloud/web_hosting/multisites_modify_domain).

///

## Quer saber mais?

[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information).

[Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records).
 
Para serviços especializados (SEO, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com a nossa [comunidade de utilizadores](/links/community).