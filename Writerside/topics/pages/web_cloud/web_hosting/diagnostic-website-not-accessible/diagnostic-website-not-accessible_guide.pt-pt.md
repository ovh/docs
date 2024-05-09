---
title: "O que fazer se o meu site está inacessível?"
excerpt: "Diagnóstico das causas da inacessibilidade do seu site"
updated: 2022-08-02
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Em caso de inacessibilidade do seu website, podem ocorrer várias reações de erro. Os exemplos abaixo indicam uma configuração errada dos seus [DNS](dns_server_general_information#compreender-a-nocao-de-dns.) ou um domínio suspenso (se o seu site não apresentar uma das mensagens de erro descritas aqui, consulte a secção [Quer saber mais?](diagnostic-website-not-accessible_#go-further.)):

|Browser|Mensagem de Erro|
|-|---|
|Chrome:<br>"Não é possível acessar esse site"|![cantbereached_chrome](cant-be-reached-chrome.png){.thumbnail}|
|Firefox:<br>"Hum. Estamos a ter problemas em encontrar esse site."|![cantbereached_firefox](cant-be-reached-firefox.png){.thumbnail}|
|Edge:<br>"Hum… Não consigo chegar a esta página"|![cantbereached_edge](cant-be-reached-edge.png){.thumbnail}|
|Safari:<br>"O Safari não pode encontrar o servidor"|![cantbereached_safari](cant-be-reached-safari.png){.thumbnail}|

**Saiba como corrigir erros do tipo "Não é possível acessar esse site"**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](partner.) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](diagnostic-website-not-accessible_#go-further.).
>

## Requisitos

- Ter a gestão dos servidores e da [Zona DNS](dns_zone_edit#compreender-a-nocao-de-dns.) do seu domínio.
- Estar ligado à [Área de Cliente OVHcloud](manager.).
- Estar atualizado em [pagamentos](invoice_management#pay-bills.) e [renovações](how_to_use_automatic_renewal#renewal-management.) dos serviços associados (nome de domínio e alojamento web).

## Instruções

### Etapa 1: verificar a validade do seu domínio

> [!warning]
>
> A renovação das suas ofertas é da sua inteira responsabilidade.<br>
> A OVHcloud, enquanto alojador, tem a obrigação de eliminar definitivamente os serviços (domínios, alojamentos, e-mails, etc.) que não foram renovados a tempo, bem como o conjunto dos dados que contêm.
>
> Assim, recomendamos vivamente que ative a [renovação automática](how_to_use_automatic_renewal#instrucoes.) em todas as subscrições da OVHcloud.
>

Para verificar a validade da assinatura relativa ao seu domínio, clique no seu nome (no canto superior direito do seu [Área de Cliente OVHcloud](manager.)) no menu contextual e, a seguir, em `Produtos e serviços`{.action}.

![control-panel](control-panel.png){.thumbnail}|

Renove o domínio se necessário através do botão `...`{.action} à direita do ecrã e `Renovar o serviço`{.action}.

![renew-service-button](renew-service-button.png){.thumbnail}

Uma vez terminada a renovação da sua oferta, o seu website estará disponível num prazo máximo de 48 horas.

### Etapa 2: verificar os servidores DNS

Para verificar a validade dos seus [servidores DNS](dns_server_general_information1.), na [Área de Cliente OVHcloud](manager.) clique em `Nomes de domínio`{.action} e, a seguir, no domínio do seu site.

#### Cenário 1: nenhuma anomalia nos servidores DNS

Verifique os servidores indicados no separador `Servidores DNS`{.action}:

![srv-dns-ok2](name-dns-server.png){.thumbnail}

Se forem idênticos aos alvos das entradas do tipo `NS` na `Zona DNS`{.action}, consulte o [Etapa 3](diagnostic-website-not-accessible_#step3.):

![srv-dns-ok](dashboard-entry-ns.png){.thumbnail}

#### Cenário 2: Aparecer um aviso sobre a zona DNS

Um aviso no separador `Zona DNS`{.action} indica que os servidores DNS utilizados pelo seu domínio não estão indicados na sua zona. Aqui, podem ocorrer dois cenários:

- Na frase "Utiliza atualmente os seguintes servidores DNS:", os servidores indicados são do tipo "ns **?** .ovh.net" e "dns **?** .ovh.net" (substituir "**?**" por qualquer número):

![warning_other_ovh_dns_srv](images_message-other-ovh-dns-servers.png){.thumbnail}

Altere os servidores DNS de acordo com as instruções [deste manual](dns_server_general_information#modificar-os-servidores-dns.), para que sejam idênticos aos alvos das entradas do tipo `NS` na `Zona DNS`{.action}.

O seu website estará disponível num prazo máximo de 48 horas.

- Na frase "Utiliza atualmente os seguintes servidores DNS:", os servidores indicados não são do tipo "ns **?** .ovh.net" e "dns **?** .ovh.net".

![warning_external_dns_srv](images_message-external-dns-servers.png){.thumbnail}

> [!warning]
>
> Nesta situação, contacte o alojador da sua Zona DNS, o seu webmaster ou os [parceiros OVHcloud](partner.) antes de qualquer manipulação.
>
> É possível que os servidores DNS utilizados pelo seu domínio estejam funcionais e que o problema de acesso ao seu site esteja associado a uma entrada inexistente ou errada na [zona DNS](dns_zone_edit#compreender-a-nocao-de-dns.). Se alterar os servidores DNS nesta situação, os seus endereços de e-mail ou outras aplicações online poderão ficar indisponíveis.
>

#### Cenário 3: nenhuma entrada do tipo NS aparece na zona DNS

A `Zona DNS`{.action} do seu domínio não contém nenhuma entrada do tipo `NS`:

![srv_dns_missing](dashboard-entry-ns-missing.png){.thumbnail}

Efetue um backup da zona atual ao clicar no botão `Editar em modo de texto`{.action} à direita do seu ecrã:

![change_DNS_zone_change_text_format](change-in-text-format.png){.thumbnail}

De seguida, copie/cole o conteúdo da sua `Zona DNS`{.action} num documento em texto. Registe este documento localmente.

De seguida, clique em `Reiniciar zona DNS`{.action} e selecione `Não, mas desejo reiniciar a minha zona DNS.`{.action}, indique os seus servidores de e-mail e de alojamento e clique em `Validar`{.action}.

![change_DNS_zone_reset](images_reset-my-dns-zone.png){.thumbnail}

O seu website estará disponível num prazo máximo de 24 horas.

### Etapa 3: verificar a zona DNS <a name="step3"></a>

Nesta etapa, vai encontrar o endereço IP do seu alojamento e adicioná-lo à sua `Zona DNS`{.action}.

Se o seu site não está alojado na infraestrutura da OVHcloud ou é gerido por outro fornecedor, contacte o serviço de suporte em causa.

Se o seu site está alojado numa das nossas [ofertas Web Cloud](hosting.), clique no separador `Alojamentos`{.action} à esquerda do seu ecrã e, a seguir, na oferta em causa.

No separador `Informações gerais`{.action}, copie o endereço IPV4 e/ou IPV6 do seu domínio.

![find-ipv4-and-ipv6](images_find-ipv4-and-ipv6.png){.thumbnail}

De seguida, aceda à [Zona DNS](dns_zone_edit#editar-a-zona-dns-da-ovhcloud-do-seu-dominio.) do seu domínio alterando ou criando uma ou mais entradas de tipo `A`.

![ipv4-DNSzone](images_dashboard-entry-a.png){.thumbnail}

O seu website estará disponível num prazo máximo de 24 horas.

## Quer saber mais? <a name="go-further"></a>

[Resolver o erro “Site não instalado”](multisites_website_not_installed1.)

[O que fazer em caso de erro 500 Internal Server Error?](diagnostic_fix_500_internal_server_error1.)

[Resolver os erros mais frequentes associados aos módulos 1 clique](diagnostic_errors_module1clic1.)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](partner.).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](support.).

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.