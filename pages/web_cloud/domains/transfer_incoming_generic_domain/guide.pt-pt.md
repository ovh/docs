---
title: 'Transferir o nome de domínio para a OVHcloud'
excerpt: 'Descubra como transferir um nome de domínio para a OVHcloud'
updated: 2026-03-27
---

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/MILAnKdjHns" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Objetivo

O seu domínio está atualmente registado num **registrar** e deseja transferi-lo para a OVHcloud? É possível, através de um processo de transferência.

Ao transferir o domínio, irá mudar de **registrar** para o nome de domínio. Pode transferir o seu nome de domínio para a OVHcloud através da criação de uma encomenda. Este processo demora geralmente entre um e dez dias.

**Descubra como transferir um nome de domínio genérico para a OVHcloud.**

> [!warning]
>
> O agente de *registo* de um nome de domínio representa a organização/fornecedor aprovado em que o nome de domínio é registado/subscrito por um particular, uma associação ou uma organização. É neste mesmo agente de *registo* que renova a subscrição do seu nome de domínio (geralmente uma vez por ano).
>
> Se a OVHcloud já é o agente de *registo* **antes** de iniciar o procedimento que se seguirá, a *transferência de domínio* não é o procedimento adequado. O procedimento de *transferência de domínio* aplica-se **unicamente** aos nomes de domínio registados noutro agente de registo* que não a OVHcloud.
>
> Para transferir a gestão do seu nome de domínio para outra conta de cliente OVHcloud, o método adequado é *uma alteração de contactos*. O procedimento está descrito no [guia](/pages/account_and_service_management/account_information/managing_contacts).
>
> Se também tem de mudar o **titular** do nome de domínio, deve fazê-lo **antes** de alterar os contactos do nome de domínio. Para isso, siga as instruções descritas na nossa documentação sobre a [alteração de titular dos nomes de domínio](/pages/web_cloud/domains/trade_domain).
>
> Se, para além da transferência do seu nome de domínio, pretender migrar os serviços que lhe estão associados (site, e-mail, etc.), consulte primeiro o guia "[Migrar o site e os serviços associados para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" antes de prosseguir.
> Este guia explica em detalhe como migrar o conjunto dos seus serviços sem interrupções.
>
> Se apenas transferir o nome de domínio sem ter de migrar os seus outros serviços, certifique-se de que recupera os servidores DNS ativos para o nome de domínio junto do seu **agente de registo** atual para os introduzir diretamente na etapa 3 deste guia.
> Isto evitará que interrompa a associação entre o seu nome de domínio e os seus serviços externos associados.
>

## Requisitos

- O nome de domínio é registado noutro agente de registo.
- O nome de domínio existe há mais de 60 dias.
- O nome de domínio não foi transferido nem mudou de titular nos últimos 60 dias.
- O estado do nome de domínio é "OK" ou "Transferível".
- O nome de domínio não expirou e tem uma data de expiração que permite concluir o processo de transferência no prazo (recomendado: mais de 60 dias).
- Poder desbloquear o nome de domínio.
- Dispor do código de transferência ou ter a possibilidade de o obter.
- Ter a autorização para solicitar a transferência do nome de domínio.
- Ter notificado o titular do nome de domínio e/ou os seus administradores do pedido de transferência.

<!-- CP-NAV-START:web-domains -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Nomes de domínio](/links/control-panel/web-domains)
- **Caminho de navegação:** `Web Cloud`{.action} > `Nomes de domínio`{.action} > Selecione o seu nome de domínio

---
<!-- CP-NAV-END:web-domains -->

## Instruções

> [!success]
>
> Para conhecer as condições tarifárias para a transferência de um nome de domínio em função da sua extensão, insira o nome de domínio que deseja transferir na nossa página [www.ovhcloud.com/pt/domains/tld/](/links/web/domains-tld) e siga as instruções.
>

O procedimento de transferência compreende várias etapas, implicando o contacto com várias entidades, entre as quais o seu registo atual, a OVHcloud e outras partes. A tabela abaixo indica as etapas de uma transferência.

|Etapa|Descrição|Quem está envolvido?|Onde?|Prazo|
|---|---|---|---|---|
|[1](#step1)|[Verificar a informação relativa ao nome de domínio](#step1)|O administrador do nome de domínio|O agente registador atual|Depende das suas ações|
|[2](#step2)|[Desbloquear o nome de domínio e obter o código de transferência](#step2)|O administrador do nome de domínio, com a autorização do titular|O agente registador atual|Depende das suas ações|
|[3](#step3)|[Solicitar a transferência do nome de domínio](#step3)|Qualquer pessoa que possua o código de transferência, com a autorização do titular|Com o novo agente de registo (por exemplo, a OVHcloud)|Depende das suas ações|
|[4](#step4)|[Validação da transferência](#step4)|O agente registador atual|Através de um pedido enviado pela entidade que gere a extensão do nome de domínio|5 dias, no máximo|

> [!warning]
>
> O procedimento exato de transferência de nome de domínio pode variar, especialmente no caso de certos **TLD** de código de país (**ccTLD**, tais como .pl, .lu, .hk, .ro, .be, .lt, .dk, .at, .fi, etc.) e de alguns **TLD** especiais (.am, .fm, etc.). Em função da extensão do nome de domínio, poderá ser necessário realizar requisitos adicionais. Recomendamos que comece por verificar as informações apresentadas para a extensão em causa no nosso website: <https://www.ovhcloud.com/pt/domains/tld/>.
>

### 1 - Verificar a informação relativa ao nome de domínio <a name="step1"></a>

**Para começar, é importante verificar se as informações relativas ao nome de domínio estão atualizadas.** Desde a criação do RGPD, os dados visíveis em « [Whois](/links/web/domains-whois) » tornaram-se muito limitados. Assim, recomendamos que verifique as informações relativas ao seu nome de domínio no seu agente registador atual.

- **Se as informações estiverem corretas:** consulte o passo seguinte deste guia.

- **Se a informação for incorreta ou invisível:** contacte o agente de registo atual para verificar e/ou alterar o nome de domínio.

> [!primary]
>
> Se não sabe qual o agente de registo responsável pelo seu nome de domínio, as linhas "Registar", que aparecerão no resultado da pesquisa da ferramenta [Whois](/links/web/domains-whois), podem fornecer-lhe informações sobre a sua identidade.
>

### 2 - Desbloquear o nome de domínio e obter o código de transferência <a name="step2"></a>

Depois de verificar as informações, deverá desbloquear o seu nome de domínio. Esta operação só pode ser realizada no agente registador atual. Por isso, recomendamos que o contacte diretamente.

Após desbloquear o nome de domínio, o seu agente registador deverá enviar-lhe o código de transferência associado. Este código é por vezes referenciado sob diferentes nomes, tais como: "Código de transferência", "CodeAuth", "InfosAuth" ou "Código EPP".

Atenção: a OVHcloud não é o agente registador do seu nome de domínio no momento em que inicia o processo de transferência, pelo que não podemos desbloquear o processo ou fornecer-lhe o código de transferência.

> [!warning]
>
> Depois de desbloquear o nome de domínio, terá 7 (7) dias para efetuar a transferência para a OVHcloud. Após este período, o seu nome de domínio será automaticamente bloqueado se não apresentar um pedido de modificação do agente de registo de um nome de domínio.
>

### Etapa 3: solicitar a transferência de um nome de domínio para a OVHcloud <a name="step3"></a>

Depois de desbloquear o seu nome de domínio e obter o código, pode encomendar a sua transferência para a OVHcloud a partir do [nosso site](/links/web/domains). Introduza o seu nome de domínio e siga os passos da encomenda.

![nome de domínio](/pages/assets/screens/website/order/domain-transfer-order.png){.thumbnail}

Quando for necessário indicar o código de transferência, introduza-o no campo ao lado do seu nome de domínio. Se ainda não dispõe do código de transferência, selecione a opção Indicar o código de `transferência mais tarde`{.action}. No entanto, sugerimos que se certifique de que tem este código à sua disposição antes de continuar. Lembre-se de que a transferência não será iniciada até que um código válido seja fornecido.

![nome de domínio](/pages/assets/screens/website/order/step_authinfo_add.png){.thumbnail}

Também pode concluir a sua encomenda com um [alojamento web](/links/web/hosting) e outras soluções da OVHcloud. Isto pode interessar-lhe se deseja também migrar os seus serviços para a OVHcloud. O nosso manual intitulado "[Como migrar um site para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)?" irá fornecer-lhe instruções sobre como realizar este procedimento.

> [!warning]
>
> Durante o processo de encomenda, sugerimos que tenha em conta os seguintes aspetos:
>
> - **dados sobre o titular do nome de domínio.** Especialmente após a entrada em vigor do RGPD, é essencial assegurar-se de que as informações sobre o titular do nome de domínio correspondam às armazenadas pelo seu agente de registo atual. Isto irá evitar suspeitas de roubo de um nome de domínio;
>
> - **introduzir os servidores DNS para o seu nome de domínio.** Se atualmente utiliza o seu nome de domínio para manter um website ou um serviço de e-mail online, deverá especificar os seus servidores DNS para evitar qualquer interrupção do serviço.
>

#### Gestão do titular e detalhes dos servidores DNS

- Ao clicar em `Alterar a configuração`{.action} nesta etapa, pode introduzir os nomes dos servidores DNS que o nome de domínio utiliza atualmente. Desta forma, o nome de domínio ficará associado a estes servidores DNS na configuração da OVHcloud.

- Se continuar sem efetuar esta operação, o nome de domínio será fornecido com uma nova zona DNS nos servidores DNS da OVHcloud. A [alteração manual da zona DNS](/pages/web_cloud/domains/dns_zone_edit) pode ser necessária.

- Em alguns casos, o processo de transferência pode requerer informações adicionais sobre o titular do nome de domínio. Para adicionar estas informações, clique na opção `Gerir os contactos/o titular`{.action}.

![nome de domínio](/pages/assets/screens/website/order/order-summary.png){.thumbnail}

#### Seguimento da transferência após a encomenda

Depois de validar a encomenda, receberá uma nota de encomenda. O processo de transferência só terá início após a receção do pagamento. Depois de realizar esta operação, pode seguir o progresso da transferência na página [Operações em curso](/links/control-panel/web-ongoing-operations).

> [!primary]
>
> Se o código de transferência não foi introduzido durante a encomenda, poderá introduzi-lo a partir desta mesma página e assim validar a transferência.

### Etapa 4: validação da transferência pelo agente de registo atual <a name="step4"></a>

Depois de validar a encomenda e o código de transferência, o agente registador do nome de domínio atual (que ainda não é a OVHcloud) receberá um pedido de validação. Aqui também podem ocorrer várias situações.

|Cenários|Resultado|
|---|---|
|Validação do agente de registo atual.|A transferência é efetuada no prazo de **24 horas**.|
|O agente registador não responde ao pedido|A transferência é concluída após um período de **5 dias**.|
|Recusa emitida pelo agente de registo atual.|O processo de transferência é **anulado** assim que uma recusa é emitida.|

Se o agente registador atual recusar o pedido, contacte o agente registador para saber por que razão o recusou.

O processo de transferência pode ser reiniciado a partir da página [Operações em curso](/links/control-panel/web-ongoing-operations).

> [!primary]
>
> A transferência de um nome de domínio com a extensão ".fr" difere ligeiramente do processo descrito acima. Deve desbloquear o seu nome de domínio e recuperar o código de transferência junto do agente de registo atual.
> Inicie o comando da transferência e introduza o código de transferência como descrito anteriormente.
>
> Uma vez iniciada a transferência, o prazo total de **transferência de um nome de domínio para ".fr" demora, no mínimo, 8 dias incompressíveis**.
>
> Em caso de **oposição à transferência pelo agente de registo atual**, a transferência **será efetuada no entanto**, mas o prazo de transferência será de pelo **menos 22 dias úteis** para ser finalizado.
>

### Etapa 5: gerir o seu nome de domínio com a OVHcloud

Uma vez terminado o processo de transferência, pode gerir o seu nome de domínio a partir da página [Nomes de domínio](/links/control-panel/web-domains).

> [!warning]
>
> Para os nomes de domínio com uma extensão *genérica* (os **gTLD** tais como *.com*, *.net*, *.info*, *.org*, etc.), a data de expiração inicial do nome de domínio é conservada. A OVHcloud aumenta gratuitamente um ano de subscrição adicional à transferência realizada.
> Por exemplo, em 04/06/2023 e o seu nome de domínio com uma extensão *genérica* expira em 29/09/2023 **antes* a transferência. Uma vez transferido para a OVHcloud, o seu nome de domínio expirará a partir de 29/09/2024.
>
> Para os nomes de domínio com uma extensão *local* ou *regional* (os **ccTLD** tais como os *.fr*, *.be*, *.de*, *.es*, etc.), tal depende das extensões e das regras implementadas pelo **registry** da extensão em questão.
> Uma vez concluída a transferência, verifique a data de expiração do seu nome de domínio diretamente a partir da Área de Cliente OVHcloud.
>
> Em função da situação e da nova data de expiração do seu nome de domínio, poderá ser necessário renovar o nome de domínio imediatamente após a transferência.

<!-- CP-STEPS-START:check-domain-expiry -->
Para verificar isto, clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e selecione o nome de domínio em causa.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página apresentada, logo abaixo do nome de domínio, encontrará a data de renovação prevista com o **mês** e o **ano** de expiração.
<!-- CP-STEPS-END:check-domain-expiry -->

## Quer saber mais?

[Migração do seu website e dos seus e-mails para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).
