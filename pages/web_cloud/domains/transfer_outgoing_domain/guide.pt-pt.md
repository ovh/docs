---
title: "Transferir um nome de domínio para outro agente de registo"
excerpt: "Saiba como transferir um nome de domínio da OVHcloud para o agente de registo da sua escolha"
updated: 2026-03-24
---

## Objetivo

Um **Transferência de nome de domínio** refere-se à transferência de um nome de domínio de um agente de registo para outro. Por exemplo, se encomendou um nome de domínio para o nosso website, a OVHcloud é o seu agente de registo atual. O novo agente registador deve iniciar uma transferência de nome de domínio para fora.

De modo a impedir as transferências de nome de domínio não autorizadas, os nomes de domínio são geralmente bloqueados por um estado *clientTransferProhibited*. Esta proteção deve ser levantada na Área de Cliente OVHcloud antes de começar qualquer transferência.

**Descubra como preparar o seu nome de domínio para uma transferência de saída.**

> [!warning]
>
> Se o nome de domínio em questão deve permanecer registado na OVHcloud mas alterado nas suas modalidades de gestão ou de titularidade, uma transferência de nome de domínio não é o procedimento adequado.
>
> Para transferir a gestão do seu nome de domínio para outra conta de cliente OVHcloud, o método adequado é uma **alteração de contactos**. O procedimento está descrito no [presente guia](/pages/account_and_service_management/account_information/managing_contacts).
>
> Se também tem de mudar o **titular** do nome de domínio, deve fazê-lo **antes** de alterar os contactos do nome de domínio. Para isso, siga as instruções descritas na nossa documentação sobre a [alteração de titular dos nomes de domínio](/pages/web_cloud/domains/trade_domain).
>

## Requisitos

- Ter um [nome de domínio](/links/web/domains) registado na OVHcloud
- Ter o direito de solicitar a transferência do nome de domínio: o titular e/ou os administradores devem ser informados do pedido de transferência.
- O registo do nome de domínio em questão data de há pelo menos 60 dias **e** não foi transferido ou trocado (ou seja, a mudança de titular) durante os últimos 60 dias

<!-- CP-NAV-START:web-domains -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Nomes de domínio](/links/control-panel/web-domains)
- **Caminho de navegação:** `Web Cloud`{.action} > `Nomes de domínio`{.action} > Selecione o seu nome de domínio

---
<!-- CP-NAV-END:web-domains -->

> [!primary]
>
> Se é o **titular** do nome de domínio mas a sua gestão na Área de Cliente OVHcloud está indisponível, seja através do seu próprio acesso ou através do contacto administrativo do nome de domínio, consulte [este guia](/pages/account_and_service_management/account_information/managing_contacts) antes de continuar.
>

## Instruções

> [!warning]
>
> As instruções que se seguem descrevem a forma mais comum de transferir um nome de domínio, válido para a maioria dos nomes de domínio de primeiro nível (top-level domain, ou TLD). No entanto, as regras específicas de procedimentos aplicáveis aos TLD são definidas apenas pela autoridade competente, ou seja, pelo **registo**. Os agentes de registo, como a OVHcloud, devem respeitar estas regras e não têm qualquer influência sobre as decisões dos registos.
>
> Assim, o procedimento exato para as transferências de nomes de domínio pode variar, em particular no caso de certos TLD de código de país (ccTLD, tais como .lu, .uk, .hk, .ro) e de alguns TLD especiais (.am, .fm, etc..). As transferências podem igualmente ser proibidas por diversas razões, por exemplo, em caso de pagamento pendente, de abuso ou de bloqueio do registo.
>
> Em caso de dúvida, recomendamos que consulte os seguintes recursos:
>
> - O sítio Web do registo TLD correspondente;
> - a [lista dos TLD disponíveis na OVHcloud](/links/web/domains-tld);
> - [Explicações do ICANN sobre os códigos de estado EPP](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) (para saber que códigos de estado se aplicam atualmente ao seu nome de domínio, efetue uma pesquisa *Whois*, utilizando de preferência o website do registo TLD correspondente);
> - o website e a interface de gestão do seu novo agente de registo, especialmente para as questões relativas a um processo de transferência pendente.
>
> Consoante o novo agente de registo que escolher, a transferência de um nome de domínio pode ser uma operação paga. Sugerimos que o informe antes de avançar.
>

### 1 - Eliminar a proteção contra a transferência do nome de domínio

<!-- CP-STEPS-START:unlock-domain-transfer -->
Clique nos separadores abaixo para visualizar cada um dos **3** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns.png){.thumbnail}
>>
> **Passo 2**
>>
>> No separador `Informações gerais`{.action}, encontrará o cursor `Proteção contra a transferência` sob **Segurança**, com o estado `Ativada`{.action} por predefinição.
>>
>> > [!warning]
>> >
>> > Se o botão `Proteção contra transferência` não estiver presente, tal significa que a extensão do nome de domínio não requer nenhum código de transferência. Poderá então lançar diretamente a sua transferência.
>>
>> ![proteção ativada](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-enabled.png){.thumbnail}
>>
> **Passo 3**
>>
>> Clique no cursor e confirme, na nova janela, que pretende eliminar esta proteção. Aguarde alguns minutos para que o estado passe para `Desativado`{.action}.
>>
>> > [!primary]
>> >
>> > Se encontra a mensagem "**Ocorreu um erro aquando do pedido de desativação da proteção do nome de domínio (User not granted for this request)**", isto significa que não tem os direitos suficientes para desbloquear o nome de domínio.
>> >
>> > Além disso, se encontrar a mensagem: "**AUTH/INFO code : Authcode is not managed by OVHcloud, contact the registry to claim it**" significa que o código de transferência do seu nome de domínio não pode ser recuperado através do seu [Área de Cliente OVHcloud](/links/manager).
>> >
>> > Em ambos os casos, verifique se é o contacto **administrador** do nome de domínio através do nosso guia sobre a [gestão dos contactos](/pages/account_and_service_management/account_information/managing_contacts) e verifique se a extensão do seu nome de domínio permite um desbloqueio a partir da [Área de Cliente OVHcloud](/links/manager).
>> >
>> > De facto, alguns *códigos de transferência* são geridos diretamente pelo *registry* da extensão do seu nome de domínio. Um *registry* é uma organização que gere o conjunto dos nomes de domínio para uma determinada extensão. Por exemplo, a **AFNIC** gere o conjunto dos nomes de domínio com a extensão "*.fr*". Se for este o caso, deverá contactar diretamente o *registry* que gere a extensão do seu nome de domínio a fim de recuperar o *código de transferência*.
>>
>> ![desativação proteção](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-deactivating.png){.thumbnail}
<!-- CP-STEPS-END:unlock-domain-transfer -->

> [!primary]
>
> Uma vez levantada a proteção, o nome de domínio ficará desbloqueado durante sete dias. Após este período, a proteção será automaticamente reativada. Se não solicitar a transferência de nome de domínio para o novo agente de registo durante este período, será necessário levantar novamente a proteção do nome de domínio.
>

### 2 - Recuperar o código de transferência

> [!warning]
>
> Observe que sempre é possível desbloquear e recuperar o código de transferência do seu nome de domínio após a expiração. De acordo com as regras de registro, um nome de domínio em [redemptionPeriod](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) pode precisar ser restaurado para ser transferido. Entre em contato com seu novo registrador para obter os detalhes da transferência.
>

Uma vez levantada a proteção contra a transferência, pode recuperar o código de transferência do seu nome de domínio.

<!-- CP-STEPS-START:get-transfer-code -->
Clique nos separadores abaixo para visualizar cada um dos **3** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns.png){.thumbnail}
>>
> **Passo 2**
>>
>> No separador `Informações gerais`{.action}, clique em `AUTH/INFO`{.action} situado ao lado de `Proteção contra a transferência`{.action}. Atualize a página caso seja necessário.
>>
>> ![outgoingtransfer](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-disabled.png){.thumbnail}
>>
> **Passo 3**
>>
>> Aparecerá uma janela com o seu código AUTH/INFO (também conhecido como código de transferência, palavra-passe de domínio, AUTH-CODE ou EPP-Code).
>>
>> O código será pedido pelo seu novo agente de registo para concluir o processo de transferência. Pode verificar os detalhes junto do seu novo agente de registo.
>>
>> Em vez de introduzir manualmente o código, recomendamos que o copie/cole, uma vez que alguns caracteres podem ser facilmente confundidos.
<!-- CP-STEPS-END:get-transfer-code -->

Uma vez o código de transferência recuperado, **não bloqueie de novo o seu nome de domínio a menos que já não queira transferi-lo**.

### 3 - Iniciar a transferência para o novo agente de registo

Depois de executar as etapas anteriores, inicie o processo de transferência, normalmente com um pedido no novo agente de registo. A transferência pode demorar até 10 dias.

Para mais informações, contacte o novo agente de registo que escolheu.

> [!warning]
>
> Se o seu novo agente de registo pedir um novo código de transferência, reative a **Proteção contra a transferência** para o seu nome de domínio e desative-a novamente alguns minutos depois. Assim, poderá recuperar um novo código de transferência.
>

## Quer saber mais?

[Transferência de nome de domínio .co.uk de saída](/pages/web_cloud/domains/transfer_outgoing_couk)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).
