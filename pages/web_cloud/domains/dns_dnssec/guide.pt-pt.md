---
title: "Proteger o seu nome de domínio com DNSSEC"
excerpt: "Saiba como proteger o seu domínio do Cache Poisoning ativando o DNSSEC"
updated: 2025-03-04
---

## Objetivo 

Um servidor DNS aloja uma ou várias zonas DNS. Uma zona DNS contém a configuração DNS de um domínio. É esta configuração que liga o seu nome de domínio aos diferentes serviços que lhe estão associados (servidor de alojamento para o seu website, servidores para os seus endereços de e-mail personalizados com o seu nome de domínio, etc.).

Em certos casos, os fluxos de dados que transitam pelos servidores DNS podem ser desviados por pessoas mal-intencionadas.
Em resumo, para o fazer, estas pessoas envenenam a cache dos servidores DNS com a configuração DNS que desejam aplicar ao seu domínio: é o que é chamado o "Cache poisoning".
Desta forma, podem reencaminhar os fluxos de entrada do seu domínio para os seus próprios websites e para os seus próprios endereços de e-mail.

O **D**omain **N**ame **S**ystem **SEC**urity tensions (**DNSSEC**), permite proteger a configuração DNS do seu domínio contra o "Cache poisoning" verificando e autenticando as respostas DNS.

**Saiba como ativar o DNSSEC para o seu domínio para o proteger do "Cache poisoning".**

> [!primary]
>
> A opção DNSSEC está atualmente indisponível para os nomes de domínio registados na OVHcloud que tenham uma extensão em **.it**.
>

Para mais informações sobre o funcionamento do **DNSSEC**, consulte a nossa página "[Compreender o DNSSEC](/links/web/domains-dnssec){.external}".

Não hesite também em consultar os nossos manuais sobre [os servidores DNS da OVHcloud](/pages/web_cloud/domains/dns_server_general_information) e sobre a [edição de uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit) se deseja mais informações sobre estes assumptos.

## Requisitos

- Dispor de um nome de domínio.
- O domínio afetado deve dispor de uma extensão compatível com o DNSSEC.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager){.external}, secção `Web Cloud`{.action}.

## Instruções

Para verificar se o domínio utiliza a configuração DNS da OVHcloud, clique nas guias abaixo para exibir sucessivamente cada um dos **3** etapas.

> [!warning]
>
> **Estas 3 etapas só são válidas se o seu domínio estiver registado na OVHcloud.** Caso contrário, deverá efetuar a verificação junto do agente de registo do seu domínio.
>
> Se os nomes dos servidores DNS terminarem com *ovh.net* (com exceção do servidor *snds2.ovh.net*), *ovh.ca* ou *anycast.me*, o seu domínio utiliza bem os servidores DNS da OVHcloud.
>

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Nomes de domínios`{.action} e escolha o domínio em causa.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etapa 3**
>> 
>> Selecione o separador `Servidores DNS`{.action} quando posicionado no domínio em questão.
>>
>> Se os nomes dos servidores DNS terminarem com *ovh.net* (com exceção do servidor *snds2.ovh.net*), *ovh.ca* ou *anycast.me*, o seu domínio utiliza bem os servidores DNS da OVHcloud.

> [!primary]
>
> A ativação/desativação do **DNSSEC** leva **24** horas para ficar efetiva.
>
> Se pretender alterar posteriormente os servidores DNS associados ao seu domínio, a modificação dos servidores DNS só será efetiva na OVHcloud após a desativação do **DNSSEC**. Depois disso, será necessário um prazo suplementar de **24** a **48** horas para a propagação DNS da modificação.
>
> No total, a modificação dos servidores DNS de um domínio com a solução **DNSSEC** ativa será plenamente efetiva passado as **48** às **72** horas.
>

Há três cenários detalhados abaixo que permitem ativar o **DNSSEC**.

### Casos n°1 - O seu domínio está registado na OVHcloud e utiliza os servidores DNS da OVHcloud

Para ativar (ou desativar) a solução **DNSSEC** para o seu domínio, clique nas guias abaixo para exibir sucessivamente cada um dos **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Nomes de domínios`{.action} e escolha o domínio em causa.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etapa 3**
>>
>> A nova página apresenta as informações gerais sobre o domínio. Aqui, pode verificar o estado de ativação do **DNSSEC** no mesmo.
>>
>> No quadro `Segurança`, verifique o estado ao lado da menção `Delegação Segura - DNSSEC`.
>>
>> ![Secured Delegation DNSSEC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/activate-dnssec.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Graças ao botão de ativação situado por cima da menção `Delegação Segura - DNSSEC`{.action}, poderá ativar ou desativar o **DNSSEC** no seu domínio. Ao efetuar esta ação, aparecerá uma nova janela a partir da qual poderá validar a modificação.
>>
>> ![Enable DNSSEC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/activate-dnssec-confirmation.png){.thumbnail}

### Casos n°2 - O seu domínio está registado na OVHcloud e não utiliza os servidores DNS da OVHcloud

Nesta situação, contacte o prestador que gere a configuração DNS do seu domínio para lhe pedir os parâmetros de ativação do DNSSEC ("Key Tag" / "Flag" / "Algoritmo" / "Chave pública (codificada em base64)").

Quando tiver concluído a obtenção destes 4 parâmetros, clique nas guias abaixo para exibir sucessivamente cada um dos **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Nomes de domínios`{.action} e escolha o domínio em causa.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na página que vai aparecer, clique no separador `DS records`{.action}. **Esta janela só é apresentada se o domínio utilizar servidores DNS externos**.
>>
> **Etapa 4**
>>
>> Na nova página que aparece, clique no botão `Alterar`{.action} à direita e, a seguir, no botão `+`{.action}.
>>
> **Etapa 5**
>>
>> Introduza os 4 formulários `Key Tag`, `Flag`, `Algoritmo` e `Chave pública (codificada em base64)` com os dados comunicados pelo seu prestador atual.
>>
>> ![DS records](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ds-records/edit-plus-dashboard.png){.thumbnail}
>>
>> Depois de preencher os 4 formulários, clique no botão azul `Validar`{.action} à direita da tabela.

### Casos n°3 - O seu domínio não está registado na OVHcloud e utiliza os servidores DNS da OVHcloud

> [!warning]
>
> Antes de prosseguir, certifique-se de que o agente de registo atual do seu domínio não possui nenhuma opção DNSSEC ativa.

Ao contrário do **caso n°2**, deverá recuperar do lado da OVHcloud os parâmetros de ativação do DNSSEC ("Key Tag" / "Flag" / "Algoritmo" / "Chave pública (codificada em base64)").

Para isso, deve utilizar as [API OVHcloud](/pages/manage_and_operate/api/first-steps) e efetuar as seguintes ações:

- Aceda ao nosso website [API OVHcloud](/links/api) (verifique se está em `https://eu.api.ovh.com` se os seus serviços estão alojados na Europa e em `https://ca.api.ovh.com` se estiverem alojados fora da Europa).
- Na página que se abrir, clique em `Explore the OVHcloud API`{.action}.
- Na nova página que surgir, e na parte esquerda da página, utilize o menu pendente situado à direita do formulário `v1`{.action} e selecione/introduza a escolha `/domain`.
- Na lista de API que aparece em baixo na coluna da esquerda, procure e clique na seguinte API: **POST /domain/zone/{zoneName}/dnssec**. Se desejar, também pode clicar na ligação para aceder:

> [!api]
>
> @api {v1} /domain POST /domain/zone/{zoneName}/dnssec
>

- À direita da página será apresentada a API com os seus diferentes formulários a preencher.
- Clique no botão situado no canto superior direito intitulado `Authenticate`{.action} e, a seguir, no botão `Login with OVHcloud SSO`{.action}".
- Abre-se a interface de ligação ao seu [Área de Cliente OVHcloud](/links/manager).
- Ligue-se à sua conta e clique em `Authorize`{.action} para utilizar as API da OVHcloud com os serviços presentes na sua Área de Cliente.
- De seguida, será automaticamente reencaminhado para a página anterior da API **POST /domain/zone/{zoneName}/dnssec** ao ser agora autenticado.
- À direita da página será apresentada a API com um formulário a preencher.
- Preencha o formulário da parte `PATH PARAMETERS` da seguinte forma:
- `zoneName` : introduza aqui o nome de domínio em questão (por exemplo: `domain.tld`).

![API](/pages/assets/screens/api/post-domain-zone-zonename-dnssec.png){.thumbnail}

Depois de preencher o formulário, clique no botão azul `EXECUTE`{.action} situado no canto inferior direito da secção previamente preenchida.

Após alguns minutos, receberá um e-mail da OVHcloud com o endereço de e-mail de contacto da sua zona DNS da OVHcloud.
Este e-mail conterá os 4 parâmetros ("Key Tag" / "Flag" / "Algoritmo" / "Chave pública (codificada em base64)") necessários para ativar o DNSSEC junto do agente de registo do seu domínio.

> [!success]
>
> Verifique as mensagens de correio publicitário não solicitado se não tiver recebido a mensagem dentro de uma hora.

Para terminar, contacte o agente de registo atual do seu domínio com os 4 parâmetros para ativar a opção DNSSEC no lado respetivo.

## Quer saber mais?

[Generalidades sobre os servidores DNS da OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Primeiros passos com as API OVHcloud](/pages/manage_and_operate/api/first-steps)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 