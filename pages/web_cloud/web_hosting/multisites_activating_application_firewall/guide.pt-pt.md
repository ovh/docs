---
title: "Partilhado: ativação da firewall"
excerpt: "Partilhado: ativação da firewall"
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

*O ModSecurity* é um módulo Apache complementar que filtro todos os pedidos de acesso ao seu servidor Web. Aumenta a segurança contra vulnerabilidades conhecidas, intercetando e filtrando pedidos antes que sejam tratados com scripts.

O conjunto pré-configurado de regras de base, o "Core Rule Set" (CRS), do nosso *ModSecurity* protege os seus websites contra os ataques mais comuns, por exemplo:

- Trojans,
- Injeções de e-mails,
- Falha dos ficheiros PDF,
- Injeção de ficheiros no seu alojamento,
- injeção do tipo SQL ou XSS,
- etc.

**Saiba como ativar a firewall de aplicação a partir da Área de Cliente OVHcloud, de forma a obter uma proteção melhorada.**

> [!primary]
>
> Uma vez que o seu alojamento web está presente numa infraestrutura partilhada, a alteração dos parâmetros de configuração da firewall não está disponível.

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](/links/web/hosting).
- Dispor de, pelo menos, um [domínio](/links/web/domains) associado ao alojamento.

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

**Clique nos títulos abaixo para visualizar as explicações.**

/// details | Ativar o firewall de aplicações em todo o seu alojamento web nas definições PHP

<!-- CP-STEPS-START:enable-firewall -->
Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> No marco **Configuração**, encontrará a indicação **Versão global de PHP**.
>>
>> ![Global PHP version](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration.png){.thumbnail}
>>
>> Clique no botão `...`{.action} à direita da indicação **Versão global de PHP**, depois em `Alterar configuração`{.action}.
>>
> **Passo 4**
>>
>> Na janela que se abre, selecione o item `Modificar a configuração atual`{.action} e clique no botão `Seguinte`{.action}.
>>
>> ![managephpconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/application-firewall-step-2.png){.thumbnail}
>>
>> Na nova janela, certifique-se de que a opção **Firewall aplicacional** está definida como `ativado`{.action}. Em seguida, clique no botão `Validar`{.action}.
<!-- CP-STEPS-END:enable-firewall -->

///

/// details | Ativar o firewall de aplicações apenas num nome de domínio ou subdomínio específico

<!-- CP-STEPS-START:disable-firewall -->
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
>> Em seguida, clique no botão `⁝`{.action} à direita do nome de domínio ou subdomínio relevante e, depois, em `Modificar o domínio`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na janela de configuração, marque a caixa `Ativar a firewall`{.action}. Também pode incluir o subdomínio `www` nesta configuração marcando a caixa correspondente no topo (se este também estiver declarado no mesmo site web).
>>
>> ![Modify a domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-enable-firewall-step-1.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action}, depois em `Validar`{.action} para validar a modificação das definições.
>>
>> Uma vez ativado o firewall para o seu nome de domínio ou subdomínio, a indicação **Ativado** aparece na coluna **Firewall**.
>>
>> Se a indicação **Ativado** não aparecer ao fim de alguns minutos na linha correspondente ao nome de domínio ou subdomínio relevante, atualize a página.
<!-- CP-STEPS-END:disable-firewall -->

///

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).
