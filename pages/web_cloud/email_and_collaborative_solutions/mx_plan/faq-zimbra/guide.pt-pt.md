---
title: FAQ sobre a solução Zimbra OVHcloud
excerpt: "Encontre as questões relativas à migração para Zimbra para a oferta MX Plan da OVHcloud"
updated: 2025-12-05
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
.w-600 {
  max-width:600px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Objetivo

Esta página responde às questões relativas à solução Zimbra na OVHcloud

### Questões gerais sobre as ofertas Zimbra na OVHcloud

/// details | Zimbra, o que é isto?

Zimbra é uma solução colaborativa de código aberto popular. Zimbra propõe numerosas funcionalidades propostas no catálogo OVHcloud.

Para contextualizar a solução Zimbra no seio da OVHcloud, esta é utilizada para 2 ofertas de e-mail.

- **MX Plan** : Zimbra é utilizado no âmbito de uma transição tecnológica do webmail Outlook Web Access (OWA) para o de Zimbra para a oferta de e-mail histórico MX Plan.
- **Zimbra**: Zimbra surge no catálogo da OVHcloud como uma oferta de pleno direito com a oferta [Zimbra Starter](/links/web/zimbra).

Para melhor compreender, o seguinte visual mostra-lhe as tecnologias atualmente utilizadas em cada uma das ofertas OVHcloud. O webmail Outlook Web Access (OWA) é levado a desaparecer progressivamente da oferta MX Plan.

![FAQ Zimbra](images/technology_email.png){.thumbnail .w-600 .h-600}

> [!warning]
>
> Existem diferenças de funcionalidade entre a solução Zimbra utilizada na oferta MX Plan e a solução Zimbra utilizada na oferta Zimbra Starter. Encontre as funcionalidades mantidas durante a transição para a solução Zimbra para a oferta MX Plan em [quadro no final desta FAQ](#features)

///

/// details | Onde posso encontrar guias?

Um guia de utilização do Zimbra está desde já disponível em [este endereço](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

///

/// details | Como posso configurar o meu endereço de e-mail num software de e-mail?

Consulte a nossa página « [Configurar o seu endereço de e-mail Zimbra num programa de correio eletrónico](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps) ».

///

/// details | Como alterar a minha oferta Zimbra?

As suas necessidades mudam: pretende beneficiar de mais funcionalidades na sua conta Zimbra ou, pelo contrário, já não precisa delas. As ofertas Zimbra são flexíveis. Siga as instruções abaixo de acordo com a sua situação:

**Pretende mudar para uma oferta superior?**

1. Inicie sessão na sua [área de cliente OVHcloud](/links/manager).
1. Dirija-se à secção `Web Cloud`{.action}.
1. Clique em `Zimbra Mail`{.action}.
1. Clique no separador `Conta de e-mail`{.action}.
1. À direita da conta de correio electrónico para a qual pretende passar para uma oferta superior, clique em `⁝`{.action}.
1. Clique em `Mudar de oferta`{.action}.

![Zimbra](images/zimbra-change-offer.png){.thumbnail .w-500}

**Deseja mudar para uma oferta inferior?**

Os passos são os mesmos que para mudar para uma oferta superior (detalhados acima).

> [!warning]
>
> Antes de passar para uma oferta inferior, certifique-se dos seguintes pontos :
>
> - Nenhum ficheiro está armazenado no seu volume de armazenamento "Breifcase" se mudar para a oferta Starter.
> - O conteúdo da sua conta de correio electrónico deve ser inferior a 15 Go se mudar para a oferta Starter.

///

### Questões sobre a Migração MX Plan para a solução Zimbra

No âmbito da evolução da oferta MX Plan, está planificada uma migração da solução atual que utiliza o webmail Outlook Web Access (OWA) para a solução Zimbra e o seu webmail.

Se for afetado por esta migração, encontrará aqui as questões mais frequentes sobre esta questão.

/// details | Quais são as diferenças entre o webmail Outlook Web App (OWA) e o Zimbra?

Zimbra oferece as mesmas funcionalidades e uma ergonomia semelhante ao OWA. Um guia de utilização do Zimbra está desde já disponível em [este endereço](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

///

/// details | A migração oferece novas funcionalidades?

A migração para o novo webmail mantém o mesmo nível de serviço que o anterior.

///

/// details | Quando é que os meus serviços irão ser migrados?

As notificações por correio eletrónico para cada serviço ser-lhe-ão enviadas **2 semana** e, em seguida, **1 dia** antes da migração.

Os seus serviços serão migrados de forma progressiva, é possível que os seus diferentes serviços sejam migrados com várias semanas de diferença.

///

/// details | Como preparar a minha migração para o Zimbra?

A migração não requer nenhuma ação da sua parte relativamente ao conteúdo das contas de e-mail.

No entanto, é necessária uma curta interrupção do serviço durante a fase de migração. Assim, recomendamos vivamente que informe os seus utilizadores quando a data de migração das suas contas de e-mail lhe for comunicada.

///

/// details | Tenho alguma operação a efetuar no âmbito da migração para o Zimbra?

Esta migração foi pensada para minimizar o impacto nos nossos clientes. Não é esperada qualquer manipulação da sua parte.

Não é esperada qualquer manipulação da sua parte.

///

/// details | É necessário prever alterações na Área de Cliente OVHcloud?

Não está prevista qualquer alteração na Área de Cliente. Uma vez que a migração se realiza com uma nova solução, poderão não estar disponíveis algumas funcionalidades menores nas primeiras semanas após a migração.

Consulte a lista das funcionalidades e o respetivo estado para esta migração [no final desta FAQ](#features).

///

/// details | Vou ter de reconfigurar o meu software de correio eletrónico?

Não, a migração não requer a reconfiguração do software de e-mail

Caso haja uma alteração de palavra-passe, você precisará digitar a nova palavra-passe no seu software de e-mail.

///

/// details | A migração altera a faturação do meu serviço?

Não, a migração para o novo webmail Zimbra está incluída na sua oferta. Não há alteração na parte de faturação ou contrato do seu serviço MX Plan.

///

/// details | Onde serão alojados os meus emails após a migração?

A migração faz-se dentro dos nossos datacenters franceses. Os seus dados permanecem em França.

///

/// details | Haverá alterações no processamento dos meus dados?

Não estão previstas alterações no que respeita ao tratamento dos dados e à sua utilização. Pode consultar todas estas informações no contrato da sua oferta MX Plan.

///

/// details | Como permanecer no webmail atual (OWA)?

Se desejar, pode migrar para uma oferta que utilize o webmail OWA, a saber, E-mail Pro ou Exchange. Para isso, consulte o nosso guia « [Migrar um endereço de e-mail MX Plan para uma conta E-mail Pro ou Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel) ».

///

/// details | Posso opor-me à migração?

Não, A OVHcloud compromete-se a fornecer um serviço com a melhor relação qualidade/preço para as suas ofertas MX Plan. Por esta razão, optámos por migrar as ofertas atuais para a solução Zimbra.

No entanto, é possível continuar a beneficiar da interface OWA [ao migrar as suas contas de e-mail para uma solução E-mail Pro ou Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)

///

/// details | Posso rescindir a minha oferta MX Plan?

Para rescindir a sua oferta na secção « Serviços » do seu espaço OVHcloud, consulte a rubrica MX Plan do nosso guia « [Como rescindir os seus serviços OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services#mxplan) ».

///

/// details | As funcionalidades são mantidas, suspensas ou retiradas durante a migração para o Zimbra. <a name="features"></a>

| Função | Descrição | Estado |
|-|-|-|
|**Gestão da conta de e-mail a partir da Área de Cliente**<br>(Palavra-passe, alias, quota)|Manutenção|✅|
|**Ofertas e faturação**|Mantidas|✅|
|**Reencaminhamento / Alias / mailing list a partir da Área de Cliente**|Mantidos|✅|
|**Configuração DNS**<br>(SPF / MX / SRV)|Mantidas|✅|
|**Delegações de contas de e-mail**|Mantidas, via webmail|✅|
|**Ligação ao software de correio eletrónico**<br>(IMAP/POP)|Mantido, não são necessárias alterações de configuração.|✅|
|**Conteúdo da conta de e-mail**<br>(e-mails, pastas, contactos)|Migrado|✅|
|**E-mails recebidos durante o processo de migração**|Entregues|✅|
|**Resposta automática / Resposta automática**|Mantida|✅|
|**Regra da caixa de entrada**|- As regras configuradas a partir do seu software de e-mail não serão alteradas.<br>- As regras configuradas a partir do webmail OWA serão migradas para o webmail Zimbra. Apenas uma percentagem muito reduzida de regras não poderá ser migrada devido à incompatibilidade.<br>- *Regra incompatível*: Regra que utiliza dois tipos de condições, como "E" e "OU", simultaneamente. Por exemplo: se a mensagem for recebida de (**john@mydomain.ovh** OU **mary@mydomain.ovh**) E o assumpto contiver « fatura », então mover para a pasta « importante ».|⚠️|
|**Assinatura pessoal**|- As assinaturas configuradas a partir do seu software de e-mail não serão alteradas.<br>- As assinaturas configuradas a partir do webmail OWA não serão migradas devido à formatação.|⚠️|
|**Contactos externos**|Esta funcionalidade permite integrar um endereço de correio eletrónico externo à plataforma de correio eletrónico no seu livro de endereços global. Esta função não estará presente em Zimbra.|❌|
|**Bloquear / Permitir**|Esta funcionalidade, que permite bloquear e-mails provenientes de um nome de domínio específico ou de um endereço de e-mail específico, não estará presente no Zimbra. Este comportamento pode ser facilmente recriado através de uma regra da caixa de entrada a partir de Zimbra.|❌|
|**Rodapé**<br>(assinatura de domínio configurável através da Área de Cliente)|Esta funcionalidade não estará presente para a nova infraestrutura Zimbra. No entanto, é sempre possível configurar uma assinatura ao nível da conta de e-mail.|❌|
|**Política de Segurança**|Esta funcionalidade da Área de Cliente, que permite alterar a política de gestão das palavras-passe, não estará presente numa primeira fase na solução Zimbra.<br>A política de segurança aplicada por predefinição nas palavras-passe requer um mínimo de 10 caracteres alfanuméricos, 1 caráter especial, 1 maiúscula.|❌|
|**Spoofing**|O spoofing consiste em enviar um e-mail a partir de uma identidade diferente da conta de e-mail na qual é autenticado. Esta prática é incompatível com os protocolos de segurança SPF e DKIM necessários para a correta entrega dos e-mails.<br>A partir do Zimbra, pode configurar outra identidade diferente da conta de e-mail utilizada, desde que seja aplicada uma delegação.|❌|
|**Suporte para TLS (Transport Layer Security) 1.0 e 1.1.**|As versões 1.0 e 1.1 são consideradas vulneráveis a ataques e já não cumprem as normas de segurança atuais.<br>Se o seu browser da Internet não suportar **o protocolo TLS 1.2** ou posterior, recomendamos que instale as mais recentes atualizações de segurança e funcionalidade.|❌|

///

## Saiba mais

[MX Plan - Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

ara serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).