---
title: "Como associar um nome de domínio a um site web existente"
excerpt: "Saiba como associar um nome de domínio ou um subdomínio a um site web já existente no seu alojamento web"
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

> [!primary]
> Se ainda não criou o site web em questão no seu alojamento web, consulte **diretamente** [este guia](/pages/web_cloud/web_hosting/multisites_configure_multisite).

**Saiba como associar um nome de domínio ou um subdomínio a um site web já existente no seu alojamento web.**

## Requisitos

- Dispor de uma oferta de [alojamento web OVHcloud](/links/web/hosting-multisite) compatível.
- Dispor de um ou vários [nomes de domínio](/links/web/domains).
- Poder modificar a configuração dos seus nomes de domínio a partir das [zonas DNS](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

### Adicionar um nome de domínio ou um subdomínio a um site web existente

**Clique num dos títulos abaixo para visualizar as explicações.**

<a name="add-domain-ovhcloud"></a>

/// details | Adicionar um nome de domínio gerido a partir do seu Área de Cliente OVHcloud

Esta secção aplica-se apenas se o seu nome de domínio e/ou a sua zona DNS ativa se encontram **no seu Área de Cliente OVHcloud**.

<!-- CP-STEPS-START:add-domain-ovhcloud -->
Clique nos separadores abaixo para visualizar cada uma das **6** etapas.

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
>> No quadro que aparece, clique no botão `⁝`{.action} localizado à direita do site web em questão, depois em `Adicionar um domínio`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Marque a opção `Associar um domínio OVHcloud existente`{.action} e clique em `Continuar`{.action}.
>>
>> Selecione depois o nome de domínio a associar no menu suspenso **Nome de domínio - obrigatório** que aparece em baixo.
>>
>> > [!primary]
>> > Para adicionar um subdomínio, selecione primeiro o nome de domínio na lista (por exemplo: domain.tld). Marque depois a caixa intitulada `Criar um subdomínio`{.action}. Aparece um campo de introdução para que possa indicar o subdomínio (por exemplo: **sub**.domain.tld).
>> >
>> > **Caso particular**: Os subdomínios em `www` (por exemplo: **www**.domain.tld) são automaticamente adicionados em complemento ao nome de domínio. Por isso, não é necessário especificar este subdomínio particular no campo de introdução.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-ovh-step-1.png){.thumbnail}
>>
>> Se desejar utilizar uma das **opções avançadas** disponíveis, ative o botão `Configuração avançada`{.action} e passe diretamente ao **etapa 7**. Caso contrário, continue ao **etapa 6**.
>>
> **Etapa 5**
>>
>> Verifique que todas as informações introduzidas anteriormente estão corretas, depois clique em `Continuar`{.action} para finalizar a adição do seu nome de domínio ou do seu subdomínio ao seu site web.
>>
>> Esta adição pode demorar até uma hora.
>>
>> A configuração DNS será realizada automaticamente se a zona DNS ativa do seu nome de domínio for gerida no seu área de cliente OVHcloud.
>>
>> Caso contrário, consulte os seguintes guias para configurar manualmente a sua zona DNS:
>>
>> - [Alojamento web - Lista dos endereços IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
>> > [!primary]
>> > A modificação da configuração DNS do seu nome de domínio requer um período de propagação que pode atingir 24 horas antes de ser plenamente efetiva.
>>
> **Etapa 6**
>>
>> > [!primary]
>> >
>> > Esta etapa é **opcional**. Dirige-se apenas aos clientes que desejam ativar certas funcionalidades disponíveis através do botão `Configuração avançada`{.action}.
>> >
>> > **Todas estas funcionalidades podem ser ativadas posteriormente, uma vez que o nome de domínio foi adicionado ao seu site web.** Neste caso específico, consulte diretamente [este guia](/pages/web_cloud/web_hosting/multisites_modify_domain).
>> >
>> > Encontra-se abaixo uma descrição destas opções.
>> >
>> > Consoante a sua oferta de [alojamento web](/links/web/hosting), alguns elementos entre as opções propostas não poderão ser selecionados.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-ovh-advanced-configurations.png){.thumbnail}
>>
>> |Opção|Descrição|
>> |---|---|
>> |IP do país|Permite beneficiar de um endereço IP geolocalizado (a partir de uma lista de países) para o nome de domínio selecionado.<br> Saiba mais com [esta página](/links/web/hosting-options).|
>> |Firewall|Permite ativar um firewall (filtragem e análise das requisições) no nome de domínio selecionado.<br> Saiba mais com [esta página](/links/web/hosting-options).|
>> |CDN|Permite ativar o CDN (armazenamento em cache dos elementos estáticos do seu site web, como as imagens) no nome de domínio selecionado.<br> Saiba mais com [a nossa página CDN](/links/web/hosting-options-cdn).<br> Ao ativar o SSL e o CDN, também poderá beneficiar do protocolo **HTTP/2** (este protocolo está ativado por defeito no nosso datacenter de Gravelines).|
>>
>> Uma vez que o botão `Configuração avançada`{.action} esteja ativado, pode também escolher o modo de configuração DNS do seu nome de domínio:
>>
>> - **Para uma configuração DNS automática**, deixe a caixa `Configuração automática (Recomendado)`{.action} marcada.
>> - **Para uma configuração DNS manual**, marque a caixa `Configuração manual`{.action}. Para realizar depois a configuração, consulte os seguintes guias:
>>     - [Alojamento web - Lista dos endereços IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>>     - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
>> Uma vez que as suas escolhas estejam feitas, clique no botão `Continuar`{.action} para finalizar a adição do seu nome de domínio ou do seu subdomínio ao seu site web. Esta adição pode demorar até uma hora.
>>
>> No entanto, a modificação da configuração DNS do seu nome de domínio requer um período de propagação que pode atingir 24 horas antes de ser plenamente efetiva.
<!-- CP-STEPS-END:add-domain-ovhcloud -->

///

/// details | Adicionar um nome de domínio externo

Esta secção aplica-se apenas se o seu nome de domínio não estiver presente no seu conta OVHcloud.

<!-- CP-STEPS-START:add-domain-external -->
Clique nos separadores abaixo para visualizar cada uma das **6** etapas.

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
>> No quadro que aparece, clique no botão `⁝`{.action} localizado à direita do site web em questão, depois em `Adicionar um domínio`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Marque a opção `Associar um domínio externo`{.action} e clique em `Continuar`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Introduza o nome de domínio (por exemplo: domain.tld) ou o subdomínio (por exemplo: **sub**.domain.tld) a associar no campo **Nome de domínio - obrigatório** que aparece em baixo.
>>
>> > [!success]
>> >
>> > **Caso particular**: Os subdomínios em `www` (por exemplo: **www**.domain.tld) são automaticamente adicionados em complemento ao nome de domínio. Por isso, não é necessário especificar este subdomínio particular no campo de introdução.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-2.png){.thumbnail}
>>
>> Uma vez que as informações estejam completas, clique no botão `Continuar`{.action}.
>>
>> > [!primary]
>> >
>> > Ao contrário dos nomes de domínio diretamente geridos a partir do seu área de cliente OVHcloud, as **opções avançadas** não estão diretamente disponíveis durante a adição de um nome de domínio ou subdomínio externo ao seu site web.
>> >
>> > No entanto, **todas estas funcionalidades podem ser ativadas posteriormente uma vez que o nome de domínio ou o subdomínio externo foi adicionado ao seu site web.** Para isso, consulte diretamente [este guia](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
> **Etapa 6**
>>
>> Toda a adição de um nome de domínio externo à OVHcloud requer uma validação obrigatória adicional. Isso permite-nos assegurar que a adição do nome de domínio externo é legítima. Uma mensagem vai pedir-lhe para modificar a configuração DNS do nome de domínio.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Note os elementos que aparecem, depois clique no botão `Continuar`{.action}. A partir desse momento, o nome de domínio é adicionado temporariamente, enquanto pode modificar a sua configuração DNS.
>>
>> > [!warning]
>> >
>> > Deve realizar estas modificações **rapidamente** para que o seu nome de domínio seja corretamente adicionado. Sem esta ação, a adição do seu nome de domínio será cancelada.
>> >
>> > As entradas DNS do tipo **A** e **TXT** devem obrigatoriamente ser colocadas na zona DNS ativa do seu nome de domínio para que ele seja adicionado ao seu site web. Apenas as entradas DNS do tipo **AAAA** são opcionais.
>> >
>> > Note que se desejar adicionar `sub.domain.tld`, deverá criar a entrada TXT `ovhcontrol.domain.tld` e não a entrada `ovhcontrol.sub.domain.tld`.
>> >
>> > Para encontrar a zona DNS ativa do seu nome de domínio, encontre os [servidores DNS](/pages/web_cloud/domains/dns_server_edit) aos quais este está ligado. Deverá validar apenas o nome de domínio com o campo **TXT**, não todos os seus subdomínios.|
<!-- CP-STEPS-END:add-domain-external -->

///

/// details | Adicionar um novo nome de domínio que ainda não foi registado

Esta secção aplica-se apenas se o seu nome de domínio ainda não foi registado, quer seja na OVHcloud ou junto de outro gabinete de registo. Em outras palavras, esta secção concerne aos nomes de domínio que ainda não foram subscritos.

<!-- CP-STEPS-START:add-domain-new -->
Clique nos separadores abaixo para visualizar cada uma das **5** etapas.

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
>> No quadro que aparece, clique no botão `⁝`{.action} localizado à direita do site web em questão, depois em `Adicionar um domínio`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Marque a opção `Encomendar um novo nome de domínio`{.action} e clique em `Continuar`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-new-step-1.png){.thumbnail}
>>
> **Etapa 5**
>>
>> É então redirecionado para a nossa página comercial de subscrição de um nome de domínio. Escolha o seu novo nome de domínio com base nas disponibilidades do mercado. Siga depois as instruções do túnel de encomenda até à validação do seu bon de commande.
>>
>> Uma vez que a sua encomenda foi paga e validada, aguarde alguns instantes, enquanto é processada.
>>
>> > [!primary]
>> >
>> > Se, ao fim de algumas horas, verificar que o seu novo nome de domínio não se associou corretamente ao seu site web, siga a parte "[Adicionar um nome de domínio gerido a partir do seu área de cliente OVHcloud](#add-domain-ovhcloud)" deste guia.
<!-- CP-STEPS-END:add-domain-new -->

///

### Oferta de e-mail incluída com o seu alojamento web

A maioria das ofertas de [alojamento web OVHcloud](/links/web/hosting) dispõe de uma opção incluída de criação de endereços de e-mail personalizados com o seu nome de domínio.

Esta opção de e-mail pode ser ativada para **um único** nome de domínio. Isso significa que se alojar vários sites web com vários nomes de domínio diferentes no seu alojamento web, apenas poderá ativar esta opção para um dos seus nomes de domínio.

Não hesite em consultar [o nosso guia dedicado](/pages/web_cloud/web_hosting/activate-email-hosting) para mais detalhes sobre a ativação desta opção.

## Quer saber mais?

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Publicar um site num alojamento web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
