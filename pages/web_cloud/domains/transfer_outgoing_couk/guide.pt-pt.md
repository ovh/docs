---
title: "Transferir um domínio .uk para outro agente de registo"
excerpt: "Saiba como transferir um domínio UK para outro registar"
updated: 2022-10-19
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O processo de mudança de agente de registo (*registar*) para os domínios de primeiro nível (*top-level domain*, ou **TLD**) do indicativo de país **UK** (**.uk**) difere do que é detalhado no nosso [guia de transferência dos TLD genéricos](/pages/web_cloud/domains/transfer_outgoing_domain). As seguintes instruções dizem respeito às seguintes extensões:

- .uk
- .co.uk
- .ac.uk
- .gov.uk
- .me.uk
- .net.uk
- .org.uk
- .plc.uk
- .sch.uk

**Este manual explica-lhe como iniciar uma transferência de saída para estes TLD a partir da Área de Cliente OVHcloud.**

> [!warning]
>
> Se o domínio em questão deve permanecer registado na OVHcloud mas alterado nas suas modalidades de gestão ou de propriedade, uma transferência de domínio não é o procedimento adequado.
>
> Para transferir a gestão do seu domínio para outra conta de cliente OVHcloud, o método adequado é uma alteração de contactos. O procedimento está descrito no [presente guia](/pages/account_and_service_management/account_information/managing_contacts).
>
> Se também tem de mudar o **proprietário** do nome de domínio, deve fazê-lo **antes** de alterar os contactos do nome de domínio. Para isso, siga as instruções descritas na nossa documentação sobre a [alteração de proprietário dos nomes de domínio](/pages/web_cloud/domains/trade_domain).
>

## Requisitos

- Ter um [domínio .uk](/links/web/domains) registado na OVHcloud
- Ter acesso à [Área de Cliente OVHcloud](/links/manager) e ter os direitos necessários para gerir o domínio (ser administrador do domínio)
- O domínio deve estar sempre ativo, isto é, não deve ter expirado ou ser bloqueado pela OVHcloud
- O nome de domínio não deve ser objeto de um litígio em curso no [Registo Nominet](https://www.nominet.uk/)

> [!primary]
>
> Se é o **proprietário** do domínio mas a sua gestão na Área de Cliente OVHcloud está indisponível, seja através do seu próprio acesso ou através do contacto administrativo do domínio, consulte [este guia](/pages/account_and_service_management/account_information/managing_contacts#caso-especifico-de-um-proprietario-de-dominio) antes de continuar.
>
> Se o domínio expirou há **menos de 90 dias**, pode ainda ser transferido. Contacte as nossas equipas de suporte técnico criando um pedido de suporte no seu Área de Cliente OVHcloud para desbloquear o domínio para a transferência.
>

## Instruções

Os TLD em causa dispõem cada um de uma *TAG* correspondente ao seu agente de registo de nomes de domínio atual, como a OVHcloud. A transferência inicia-se com a substituição da TAG pela que identifica o seu novo agente de registo.

Se ainda não conhece a TAG necessária, pode solicitá-la ao novo prestador de serviços ou consultar a [lista dos agentes de registo Nominet](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/).

### Etapa 1: verificar as informações necessárias

Ligue-se à sua [Área de Cliente OVHcloud](/links/manager) e selecione a `Web Cloud`{.action}. Clique em `Nomes de domínio`{.action} e selecione o domínio correspondente.

Lembre-se de que deve estar ligado como contacto administrador.

No separador `Informações gerais`{.action}, pode verificar se as condições exigidas para o processo de transferência estão preenchidas.

### Etapa 2: modificar a TAG do seu domínio

Clique no link `Tag de transferência que sai`{.action} na secção intitulada **Segurança**.

![transferência de saída](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag.jpg){.thumbnail}

Na nova janela, introduza a TAG do novo agente de registo e clique em `Confirmar`{.action}.

![transferência de saída](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag-confirmation.jpg){.thumbnail}

Se não conseguir alterar a TAG do domínio a partir da Área de Cliente, pode solicitá-la ao registry Nominet. Encontre mais informações no [site oficial da Nominet](https://www.nominet.uk/domain-support/).

### Etapa 3: seguir o processo de transferência para o novo agente de registo

A alteração da TAG ativa o processo de transferência.

Contacte o seu novo fornecedor para obter mais informações sobre a transferência.

## Quer saber mais?

[Transferir um domínio para outro agente de registo](/pages/web_cloud/domains/transfer_outgoing_domain)

Fale com nossa [comunidade de utilizadores](/links/community).