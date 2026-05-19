---
title: "Adicionar um registo DNS do tipo TXT para um domínio"
excerpt: "Saiba como adicionar um registo DNS do tipo TXT numa zona DNS gerida na OVHcloud para o seu domínio"
updated: 2026-03-24
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

Deve validar um processo de verificação ou de segurança para o seu domínio (associação de serviços através de um token de validação, chave de verificação, etc.) utilizando a sua zona DNS? Deseja adicionar um valor personalizado ao formato texto na zona DNS do seu domínio?
Para isso, terá de criar um registo DNS de tipo TXT na zona DNS ativa do seu domínio.

**Saiba como adicionar um registo DNS do tipo TXT numa zona DNS gerida na OVHcloud para o seu domínio.**

> [!primary]
>
> Para alterar ou eliminar um registo DNS do tipo TXT de uma zona DNS da OVHcloud, siga o nosso guia «[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)».

## Requisitos

- Ter um [nome de domínio](/links/web/domains).
- Ter uma zona DNS associada a este domínio na OVHcloud.

<!-- CP-NAV-START:web-dns-zone -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Caminho de navegação:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Selecione o seu nome de domínio

---
<!-- CP-NAV-END:web-dns-zone -->

## Instruções

> [!warning]
>
> A adição, modificação ou eliminação de registos DNS numa zona DNS ativa é uma operação sensível. Se não tiver a certeza, entre em contacto com um [fornecedor especializado](/links/partner).

<!-- CP-STEPS-START:add-txt-record-domain -->
### Adicionar um registo DNS do tipo TXT para um domínio

Clique nos separadores abaixo para visualizar cada um dos **5** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique no botão `Adicionar uma entrada`{.action}.
>>
> **Passo 3**
>>
>> Na janela que se abrir, selecione o registo expandido do tipo `TXT`{.action}.
>>
> **Passo 4**
>>
>> Introduza no campo `Valor *` a cadeia TXT a adicionar (por exemplo: `AbCdE-Value-of-TXT-fGhIjK`), e clique em `Seguinte`{.action}.
>>
> **Passo 5**
>>
>> Verifique o resumo e clique em `Validar`{.action}. Aguarde até **24** horas para que a propagação da adição na rede DNS seja plenamente efetiva.

/// details | Clique aqui para mais informações.

Consulte os nossos guias detalhados:

- [Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)
- [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///
<!-- CP-STEPS-END:add-txt-record-domain -->

<!-- CP-STEPS-START:add-txt-record-subdomain -->
### Adicionar um registo DNS do tipo TXT para o subdomínio de um domínio

Clique nos separadores abaixo para visualizar cada um dos **5** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique no botão `Adicionar uma entrada`{.action}.
>>
> **Passo 3**
>>
>> Na janela que se abrir, selecione o registo expandido do tipo `TXT`{.action}.
>>
> **Passo 4**
>>
>> Introduza no campo `Subdomínio` o subdomínio em causa (por exemplo: `www` para o subdomínio `www.domain.tld`), e no campo `Valor *`, a cadeia TXT a adicionar (por exemplo: `AbCdE-Value-of-TXT-fGhIjK`). Clique em `Seguinte`{.action}.
>>
> **Passo 5**
>>
>> Verifique o resumo e clique em `Validar`{.action}. Aguarde até **24** horas para que a propagação da adição na rede DNS seja plenamente efetiva.

/// details | Clique aqui para mais informações.

Consulte os nossos guias detalhados:

- [Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)
- [Como criar um subdomínio?](/pages/web_cloud/domains/domain_create_subdomains)
- [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///
<!-- CP-STEPS-END:add-txt-record-subdomain -->

## Quer saber mais?

[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)
 
Para serviços especializados (SEO, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com a nossa [comunidade de utilizadores](/links/community).
