---
title: "Como adicionar um registo DNS de tipo CNAME para um subdomínio"
excerpt: "Saiba como adicionar um registo DNS do tipo CNAME numa zona DNS gerida na OVHcloud para o subdomínio de um domínio"
updated: 2025-06-25
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

Um registo CNAME permite associar um subdomínio a um nome de domínio ou subdomínio, sem ter de especificar um endereço IP. Isto significa que o subdomínio será reencaminhado para o endereço IP do nome de domínio ou subdomínio de destino, sem necessidade de configuração adicional.

Por exemplo, se criar um registo CNAME para *www.domain.tld* que aponta para *domain.tld*, então *www.domain.tld* utilizará o mesmo endereço IP que *domain.tld*.

Os registos CNAME são úteis para evitar a necessidade de alterar os endereços IP dos subdomínios. Também podem ser utilizados para configurar serviços como os servidores de correio eletrónico.

**Saiba como adicionar um registo CNAME na zona DNS da OVHcloud.**

> **Já tem um registo do tipo CNAME na sua zona DNS?** Siga o nosso guia "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

## Requisitos

- Ter um [nome de domínio](/links/web/domains).
- Ter uma zona DNS associada a este domínio na OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager), secção `Web Cloud`{.action}.

> [!warning]
>
> **A adição, modificação ou eliminação de registos DNS numa zona DNS ativa é uma operação sensível.**
> Em caso de dúvida, contacte um [fornecedor especializado](/links/partner).**

## Instruções

### Adicionar um registo DNS do tipo CNAME para o subdomínio de um domínio

1. Clique no menu `Zonas DNS`{.action} e escolha o domínio em causa.
2. Na página que se abrir, clique no botão `Adicionar uma entrada`{.action}.
3. Na janela que aparecer, selecione o campo de apontamento do tipo `CNAME`{.action}.
4. De seguida, introduza no campo `Subdomínio` o subdomínio em causa (por exemplo: `www` para o subdomínio `www.domain.tld`) e, no campo `Alvo *`, o nome de domínio ou subdomínio (por exemplo: `domain.tld`) que pretende visar através do registo do tipo CNAME. Por fim, clique em `Seguinte`{.action}.
5. Verifique o resumo e, em seguida, clique em `Validar`{.action}. Aguarde até **24** horas para que a propagação da adição na rede DNS seja plenamente efetiva.

/// details | Consulte os nossos guias detalhados:

- [Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)
- [Como criar um subdomínio?](/pages/web_cloud/domains/domain_create_subdomains)
- [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
- [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Alojamento web - Alterar um nome de domínio já associado a um alojamento](/pages/web_cloud/web_hosting/multisites_modify_domain)

///


### Casos especiais

Clique nos links a seguir para obter mais informações:

/// details | Registos CNAME e TXT para o mesmo subdomínio

Não configure um registo CNAME e um registo TXT para o mesmo subdomínio. Isto pode levar a resultados aleatórios durante a resolução DNS, uma vez que apenas uma resposta pode ser devolvida através de consulta DNS.

Por exemplo, se tiver os seguintes registos para *www.domain.tld*:

- Um registo CNAME que aponta para *domain.tld*.
- Um registo TXT com um valor específico.

Um pedido DNS para *www.domain.tld* retornará o destino do registo CNAME ou o valor do registo TXT, de forma aleatória.

///

/// details | CNAME num domínio na sua própria zona DNS

Por convenção, **os registos do tipo CNAME não podem ser utilizados num nome de domínio na sua própria zona DNS**. De facto, o domínio deve obrigatoriamente apontar diretamente para um endereço IP com um registo do tipo [A](/pages/web_cloud/domains/dns_zone_a_record_creation) para um IPv4, ou [AAAA](/pages/web_cloud/domains/dns_zone_aaaa_record_creation) para um IPv6.

Como tal, e tomando como exemplo o exemplo acima, não poderá criar um registo do tipo CNAME para o nome de domínio *domain.tld* na zona DNS que criou para esse nome.
No entanto, pode criar registos do tipo CNAME para todos os subdomínios (por exemplo: *subdomain.domain.tld* ou *www.domain.tld*) do nome de domínio *domain.tld* na zona DNS criada para *domain.tld*.

///

## Quer saber mais?
 
Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com a nossa [comunidade de utilizadores](/links/community).