---
title: "Transferir um nome de domínio .uk para outro agente de registo"
excerpt: "Saiba como transferir um nome de domínio UK para outro registar"
updated: 2026-03-13
---

## Objetivo

O processo de mudança de agente de registo (*registar*) para os nomes de domínio de primeiro nível (*top-level domain*, ou **TLD**) do indicativo de país **UK** (**.uk**) difere do que é detalhado no nosso [guia de transferência dos TLD genéricos](/pages/web_cloud/domains/transfer_outgoing_domain). As seguintes instruções dizem respeito às seguintes extensões:

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
> Se o nome de domínio em questão deve permanecer registado na OVHcloud mas alterado nas suas modalidades de gestão ou de titularidade, uma transferência de domínio não é o procedimento adequado.
>
> Para transferir a gestão do seu nome de domínio para outra conta de cliente OVHcloud, o método adequado é uma alteração de contactos. O procedimento está descrito no [presente guia](/pages/account_and_service_management/account_information/managing_contacts).
>
> Se também tem de mudar o **titular** do nome de domínio, deve fazê-lo **antes** de alterar os contactos do nome de domínio. Para isso, siga as instruções descritas na nossa documentação sobre a [alteração de titular dos nomes de domínio](/pages/web_cloud/domains/trade_domain).
>

## Requisitos

- Ter um [nome de domínio .uk](/links/web/domains) registado na OVHcloud
- O nome de domínio deve estar sempre ativo, isto é, não deve ter expirado ou ser bloqueado pela OVHcloud
- O nome de domínio não deve ser objeto de um litígio em curso no [Registo Nominet](https://www.nominet.uk/)

<!-- CP-NAV-START:web-domains -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Nomes de domínio](/links/control-panel/web-domains)
- **Caminho de navegação:** `Web Cloud`{.action} > `Nomes de domínio`{.action} > Selecione o seu nome de domínio

---
<!-- CP-NAV-END:web-domains -->


> [!primary]
>
> Se o nome de domínio expirou há **menos de 90 dias**, pode ainda ser transferido. Contacte as nossas equipas de suporte criando um pedido de assistência na sua Área de Cliente OVHcloud para desbloquear o nome de domínio para a transferência.
>
> Se é o **titular** do nome de domínio mas não consegue geri-lo na Área de Cliente OVHcloud, nem através do seu próprio acesso nem do contacto administrativo, consulte [este guia](/pages/account_and_service_management/account_information/managing_contacts) antes de continuar.
>

## Instruções

Os TLD em causa dispõem cada um de uma *TAG* correspondente ao seu agente de registo de nomes de domínio atual, como a OVHcloud. A transferência inicia-se com a substituição da TAG pela que identifica o seu novo agente de registo.

Se ainda não conhece a TAG necessária, pode solicitá-la ao novo prestador de serviços ou consultar a [lista dos agentes de registo Nominet](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/).

### 1 - Modificar a TAG do seu nome de domínio para iniciar a transferência para outro agente de registo

> [!primary]
>
> Deve estar ligado como [administrador](/pages/account_and_service_management/account_information/managing_contacts) para efetuar estas ações.

Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Área de Cliente OVHcloud - lista de nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na secção **Configuração**, clique no link `Tag de transferência que sai`{.action}.
>>
>> ![transferência de saída](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na nova janela, introduza a TAG do novo agente de registo e clique em `Confirmar`{.action}.
>>
>> ![transferência de saída](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag-confirmation.png){.thumbnail}

Se não conseguir alterar a TAG do nome de domínio a partir da Área de Cliente, pode solicitá-la ao registry Nominet. Encontre mais informações no [site oficial da Nominet](https://www.nominet.uk/domain-support/).

### 2 - Seguir o processo de transferência para o novo agente de registo

A alteração da TAG ativa o processo de transferência.

Contacte o seu novo fornecedor para obter mais informações sobre a transferência.

## Quer saber mais?

[Transferir um nome de domínio para outro agente de registo](/pages/web_cloud/domains/transfer_outgoing_domain)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Fale com a nossa [comunidade de utilizadores](/links/community).
