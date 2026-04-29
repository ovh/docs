---
title: "Como verificar a associação 'nome de domínio / site web'?"
excerpt: "Utilize a nossa ferramenta de diagnóstico para verificar que o seu nome de domínio ou subdomínio está bem declarado com o seu site web no seu alojamento web"
updated: 2026-05-04
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

Pode alojar vários sites web na mesma oferta de alojamento web, mesmo que os nomes de domínio não estejam registados na OVHcloud. Além disso, pode associar um ou vários nomes de domínio ou subdomínios ao mesmo site web.

**Utilize a nossa ferramenta de diagnóstico para verificar que o seu nome de domínio ou subdomínio está bem declarado com o seu site web no seu alojamento web.**

## Requisitos

- Dispor de uma oferta de [alojamento web OVHcloud](/links/web/hosting-multisite) compatível.
- Dispor de um ou vários [nomes de domínio](/links/web/domains).
- Poder modificar a configuração dos seus nomes de domínio a partir da [zona DNS](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

### Aceder à ferramenta de diagnóstico

<!-- CP-STEPS-START:diagnose-website -->
Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na tabela que surge, clique no botão `>`{.action} à esquerda do nome do site relevante para visualizar os nomes de domínio ou subdomínios associados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Os nomes de domínio ou subdomínios associados ao seu site web aparecem. 
>>
>> ![Domains associated websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab-with-domains-associated-displayed.png){.thumbnail}
>>
>> A coluna `Diagnóstico` informa-o se o seu nome de domínio aponta corretamente para o alojamento web associado. Permite-lhe verificar rapidamente se a configuração DNS do seu nome de domínio está corretamente feita com o seu alojamento web. Assim, esta coluna ajuda-o a identificar e resolver eventuais problemas de ponteiro. Para cada nome de domínio, três resultados de diagnóstico são possíveis:
>>
>> - `A/AAAA` verde.
>> - `A/AAAA` amarelo.
>> - `A/AAAA` cinzento.
>>
>> Consulte a secção "[Interpretação das cores da ferramenta de diagnóstico](#interpretation)" deste guia para conhecer o significado destas 3 cores.
<!-- CP-STEPS-END:diagnose-website -->

<!-- CP-STEPS-START:diagnostic-status-interpretation -->
### Interpretação das cores da ferramenta de diagnóstico <a name="interpretation"></a>

**Clique nos indicadores de estado relevantes abaixo para ver as respetivas explicações.**

/// details | A/AAAA verde

![A and AAAA green](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-green-info.png){.thumbnail}

Quando o ícone `A/AAAA` é verde na coluna `Diagnóstico`, isso significa que o registo **A** (para endereços IPv4) e/ou o registo **AAAA** (para endereços IPv6) do seu nome de domínio aponta corretamente para o endereço IP do seu alojamento web. A configuração DNS do seu nome de domínio está, portanto, conforme para funcionar com o site web do seu alojamento web.

/// 

/// details | A/AAAA amarelo

![A and AAAA yellow](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-yellow-info.png){.thumbnail}

Quando o ícone `A/AAAA` é amarelo na coluna `Diagnóstico`, isso significa que o registo **A** (IPv4) e/ou **AAAA** (IPv6) do seu nome de domínio aponta para um endereço IP, mas que não é o do alojamento web a partir do qual está a consultar a coluna `Diagnóstico`.

Para resolver os problemas de ponteiro DNS do seu nome de domínio e assegurar-se de que aponta corretamente para o alojamento web desejado, siga as etapas descritas no nosso guia "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

/// 

/// details | A/AAAA cinzento

![A and AAAA grey](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-grey-info.png){.thumbnail}

Quando o ícone `A/AAAA` é cinzento na coluna `Diagnóstico`, isso significa que o nome de domínio não aponta atualmente para nenhum endereço IP e que nenhum registo **A** (IPv4) ou **AAAA** (IPv6) está configurado para este nome de domínio.

Para adicionar os registos **A** e/ou **AAAA** e configurar corretamente o seu nome de domínio, siga as etapas descritas no nosso guia "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///
<!-- CP-STEPS-END:diagnostic-status-interpretation -->

## Quer saber mais?

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Publicar um site num alojamento web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
