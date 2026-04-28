---
title: "FAQ sobre os nomes de domínio & DNS"
excerpt: "Encontre as principais questões sobre os nomes de domínio, os servidores DNS e as zonas DNS"
updated: 2026-03-27
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

**Clique nas perguntas abaixo para ver as explicações.**

## Subscrição de um nome de domínio

/// details | Como posso subscrever um nome de domínio na OVHcloud?

Siga estes passos:

1. Aceda ao nosso website [OVHcloud](/links/website).
2. Na página apresentada, introduza no campo previsto para o efeito o nome de domínio que deseja reservar (por exemplo: `domain.tld`) e clique no botão `Pesquisar`{.action}.
3. Na nova página apresentada, a nossa interface indicará se o nome de domínio escolhido está disponível ou não para compra. Se já estiver reservado com a sintaxe que introduziu, modifique-o e lance uma nova pesquisa de disponibilidade.
4. Depois de encontrar um nome de domínio disponível, clique no botão `Comprar`{.action} e, em seguida, no botão `Prosseguir com a encomenda`{.action} na coluna da direita.
5. Selecione as eventuais opções ou serviços que deseja subscrever juntamente com o seu nome de domínio e clique em `Seguinte`{.action} até que o processo de encomenda o convide a autenticar-se ou a criar uma conta de cliente OVHcloud.
6. Assim que estiver autenticado com a sua conta de cliente OVHcloud, poderá personalizar as informações dos contactos (titular, administrador, técnico) para o seu nome de domínio. Em seguida, clique no botão `Continuar`{.action} para aceder ao resumo da sua encomenda.
7. Na página `Resumo da sua encomenda`, se necessário, poderá alterar a configuração DNS que será aplicada ao seu nome de domínio clicando no link `Alterar a configuração`{.action}. Assim que as suas alterações estiverem concluídas, clique no botão `Pagar`{.action} para aceder à última etapa da sua encomenda.

De seguida, pague a sua encomenda para iniciar a reserva do seu nome de domínio, bem como a instalação dos serviços e opções que subscreveu.

Alguns instantes depois, receberá um e-mail de confirmação da sua encomenda.
Poderá depois administrar o seu nome de domínio acedendo à sua [Área de Cliente OVHcloud](/links/manager).

Não hesite em criar um ticket de assistência a partir do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) se necessário.

///

/// details | Como posso comprar um nome de domínio no mercado secundário?

A compra de um nome de domínio no mercado secundário processa-se da mesma forma que a subscrição de um nome de domínio.

Siga estes passos:

1. Aceda ao nosso website [OVHcloud](/links/website).
2. Na página apresentada, introduza no campo previsto para o efeito o nome de domínio que deseja reservar (por exemplo: `domain.tld`) e clique no botão `Pesquisar`{.action}.
3. Na nova página apresentada, a nossa interface indicará se o nome de domínio escolhido está disponível ou não para compra. Se já estiver reservado com a sintaxe que introduziu, modifique-o e lance uma nova pesquisa de disponibilidade.
4. Depois de encontrar um nome de domínio disponível, clique no botão `Comprar`{.action} e, em seguida, no botão `Prosseguir com a encomenda`{.action} na coluna da direita.
5. Selecione as eventuais opções ou serviços que deseja subscrever juntamente com o seu nome de domínio e clique em `Seguinte`{.action} até que o processo de encomenda o convide a autenticar-se ou a criar uma conta de cliente OVHcloud.
6. Assim que estiver autenticado com a sua conta de cliente OVHcloud, poderá personalizar as informações dos contactos (titular, administrador, técnico) para o seu nome de domínio. Em seguida, clique no botão `Continuar`{.action} para aceder ao resumo da sua encomenda.
7. Na página `Resumo da sua encomenda`, se necessário, poderá alterar a configuração DNS que será aplicada ao seu nome de domínio clicando no link `Alterar a configuração`{.action}. Assim que as suas alterações estiverem concluídas, clique no botão `Pagar`{.action} para aceder à última etapa da sua encomenda.

De seguida, pague a sua encomenda para iniciar a reserva do seu nome de domínio, bem como a instalação dos serviços e opções que subscreveu.

Alguns instantes depois, receberá um e-mail de confirmação da sua encomenda.
Poderá depois administrar o seu nome de domínio acedendo à sua [Área de Cliente OVHcloud](/links/manager).

Não hesite em criar um ticket de assistência a partir do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) se necessário.

///

## Gestão de um nome de domínio

/// details | Como saber se o meu nome de domínio está registado na OVHcloud?

Para isso, pode efetuar uma consulta [WHOIS](/links/web/domains-whois) para saber onde o seu nome de domínio está registado e para verificar que é o titular declarado do nome de domínio.

Cada agente de registo (como a OVHcloud) pode escolher como apresentar as informações relativas a um nome de domínio no WHOIS.

Uma vez efetuada a consulta WHOIS, procure no resultado pelo menos uma das seguintes linhas:

- Domain Name: ovhcloud.com
- Registrar WHOIS Server: whois.ovh.com
- Registrar URL: https://ovh.com
- Registrar: OVH sas

Se observar pelo menos uma destas linhas no resultado, o seu nome de domínio está registado na OVHcloud.

Caso contrário, o seu nome de domínio está registado noutro agente de registo. Procure então as linhas relativas ao `Registrar` para identificar o agente de registo onde o seu nome de domínio está registado.

///

<!-- CP-STEPS-START:expiry-date -->
/// details | Como conhecer a data de expiração de um nome de domínio?

A solução mais rápida é efetuar uma consulta [WHOIS](/links/web/domains-whois) sobre o nome de domínio. Uma vez efetuada a consulta, procure no resultado a linha correspondente à data de expiração (por exemplo: `Expiry Date: 2025-09-22T08:00:00Z`, `Registry Expiry Date: 2025-09-22T08:00:00Z`, etc.).

Se o seu nome de domínio estiver registado na OVHcloud, clique nos separadores abaixo para ver cada um dos **2** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [As minhas ofertas e serviços](/links/control-panel/billing-services).
>>
> **Passo 2**
>>
>> Na tabela que aparece, procure a linha correspondente ao seu nome de domínio e localize a data presente na coluna `Data de efeito`. Esta data corresponde à data de expiração do seu nome de domínio.

///
<!-- CP-STEPS-END:expiry-date -->

/// details | Como alterar a data anual de expiração de um nome de domínio?

A data anual de expiração de um nome de domínio (por exemplo: 24 de setembro) é pré-estabelecida em função da data de registo (criação) do nome de domínio.

Geralmente, a data anual de expiração de um nome de domínio é a mesma que a data em que registou o nome de domínio.

Consequentemente, não é possível alterar a data anual de expiração de um nome de domínio.

///

<br>

/// details | Como posso corrigir uma gralha no meu nome de domínio?

Uma vez subscrito um nome de domínio, este fica registado com os caracteres que lhe atribuiu aquando da sua encomenda. O registo é efetuado junto do registo da extensão do seu nome de domínio (por exemplo: o registo dos *.com*) e são aplicados custos de reserva por parte do agente de registo (como a OVHcloud).

Um nome de domínio é um endereço único na Internet, por exemplo: `ovhcloud.com`.
Qualquer alteração neste nome, quer se trate de um carácter ou de uma extensão (.com, .fr, .net, etc.), transforma-o num nome de domínio completamente diferente.

Consequentemente, se cometeu um erro de digitação aquando da sua encomenda, este não poderá ser alterado nem corrigido. Terá de encomendar um novo nome de domínio independentemente do anterior (desde que a nova ortografia desejada não esteja já reservada por outra pessoa).

Os nomes de domínio são considerados produtos personalizados, pois são registados especificamente para um titular e ficam bloqueados para os demais desde o momento da encomenda. Por esta razão, uma vez registados, não podem ser reembolsados.

///

/// details | Como alterar um nome de domínio já subscrito?

Uma vez subscrito um nome de domínio, este fica registado com os caracteres que lhe atribuiu aquando da sua encomenda. O registo é efetuado junto do registo da extensão do seu nome de domínio (por exemplo: o registo dos *.com*) e são aplicados custos de reserva por parte do agente de registo (como a OVHcloud).

Um nome de domínio é um endereço único na Internet, por exemplo: `ovhcloud.com`.
Qualquer alteração neste nome, quer se trate de um carácter ou de uma extensão (.com, .fr, .net, etc.), transforma-o num nome de domínio completamente diferente.

Consequentemente, se cometeu um erro de digitação aquando da sua encomenda, este não poderá ser alterado nem corrigido. Terá de encomendar um novo nome de domínio independentemente do anterior (desde que a nova ortografia desejada não esteja já reservada por outra pessoa).

Os nomes de domínio são considerados produtos personalizados, pois são registados especificamente para um titular e ficam bloqueados para os demais desde o momento da encomenda. Por esta razão, uma vez registados, não podem ser reembolsados.

///

<!-- CP-STEPS-START:delete-domain -->
/// details | Como eliminar um nome de domínio?

Clique nos separadores abaixo para ver cada um dos **3** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [As minhas ofertas e serviços](/links/control-panel/billing-services).
>>
> **Passo 2**
>>
>> Na tabela que aparece, procure a linha correspondente ao seu nome de domínio, clique no botão `...`{.action} à direita e depois em `Rescindir o meu serviço`{.action}.
>>
> **Passo 3**
>>
>> Na página apresentada, selecione o modo de rescisão (imediatamente ou na data de expiração do serviço) e clique na parte inferior no botão `Sim, rescindir`{.action}.
>>
>> O seu nome de domínio ficará suspenso na data de expiração e, a partir dessa data, será eliminado **definitivamente** num prazo máximo de 60 dias. Este prazo é definido pela **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) para que um nome de domínio seja totalmente eliminado e fique novamente disponível para registo por outro titular.

> [!primary]
>
> Depois de solicitada a rescisão, pode acelerar a eliminação criando um ticket de assistência a partir do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_get_help). Serão necessários documentos comprovativos para acelerar esta eliminação.

> [!success]
>
> Consulte todos os detalhes no nosso manual "[Como rescindir os meus serviços OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services)".

///
<!-- CP-STEPS-END:delete-domain -->

/// details | Recebi um e-mail relativo à validação das informações do titular associada ao meu nome de domínio, o que devo fazer?

Antes de mais, se tiver dúvidas sobre a legitimidade do e-mail recebido, consulte o nosso manual "[Phishing - Como reconhecer e-mails ou SMS fraudulentos?](/pages/account_and_service_management/account_information/phishing_care)".

Em conformidade com uma diretiva da **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) de 01/09/2014, os agentes de registo (por exemplo: a OVHcloud) são obrigados a verificar a validade dos dados de contacto dos titulares de nomes de domínio. A OVHcloud envia então um e-mail aos titulares do nome de domínio registado para o endereço e-mail de contacto declarado na OVHcloud.

Receberá este e-mail quando efetuar uma das seguintes ações:

- Registo de um novo nome de domínio.
- Transferência de um nome de domínio.
- Alteração dos dados de contacto associados ao seu nome de domínio.

Este e-mail contém um link que permite verificar rapidamente os seus dados enquanto titular legal do nome de domínio.

Atenção: esta verificação deve ser efetuada num prazo de 15 dias. Decorrido este prazo, o nome de domínio será tecnicamente suspenso. Continuará contratualmente em seu nome, mas deixará de estar acessível na Internet. Uma mensagem de erro será apresentada aos visitantes do seu website.

Pode receber os seguintes e-mails durante os primeiros 15 dias:

- **Dia 0**: Imediatamente após encomendar o nome de domínio ou alterar os seus dados de contacto, o titular (ou a pessoa registada como titular do nome de domínio) receberá o primeiro e-mail com um link de verificação.
- **Dias 4, 9 e 13 (e-mails de lembrete)**: Se ainda não tiver verificado o nome de domínio, receberá novamente o e-mail.
- **Dia 14**: Se ainda não tiver verificado o nome de domínio, o e-mail é enviado novamente. Além disso, é também enviado um e-mail para o endereço do administrador/titular do nome de domínio para o informar de que os dados de contacto não foram confirmados.
- **Dia 15**: Se o titular do nome de domínio ainda não tiver respondido, enviamos um e-mail ao administrador do nome de domínio para o informar da situação e da desativação do nome de domínio.

Para além destes 15 dias, o sistema envia e-mails adicionais (até 9 e-mails) antes de eliminar o seu nome de domínio. Esta eliminação será efetuada 60 dias após o dia 0.

> [!warning]
>
> Em função da extensão do nome de domínio (por exemplo: *.com*, *.net*, etc.), alguns dos prazos mencionados acima podem variar. Recomendamos vivamente que verifique, junto do registo da extensão do seu nome de domínio, o processo de verificação do controlo dos contactos.

///

/// details | Não recebi o e-mail de validação das informações do titular associado ao meu nome de domínio e este foi suspenso, o que devo fazer?

Se não recebeu o e-mail de validação do titular do seu nome de domínio, verifique os seguintes pontos:

1. O endereço e-mail declarado para o titular do nome de domínio é válido e operacional.
2. O e-mail de validação não se encontra no correio indesejado.

Depois de ter verificado e confirmado os dois pontos acima, se ainda não conseguir recuperar o e-mail de validação do titular, convidamo-lo a abrir um ticket de assistência a partir do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) para solicitar o reenvio deste e-mail.

///

/// details | O que é um nome de domínio no formato IDN?

Inicialmente, os nomes de domínio só podiam conter caracteres **ASCII** bem específicos (incluindo as 26 letras do alfabeto latino). Um **I**nternationalized **D**omain **N**ame (**IDN**) permite nomeadamente utilizar caracteres especiais ou acentuados, e até outros alfabetos (como o *cirílico*).

Na OVHcloud, é possível encomendar IDN e utilizá-los como nomes de domínio completos com os nossos outros serviços oferecidos (alojamento web, zona DNS, etc.<sup>1</sup>).

Uma vez subscritos, os IDN aparecem na sua [Área de Cliente OVHcloud](/links/manager) no formato **xn--**.

Mesmo que o seu nome de domínio seja apresentado em [notação internacionalizada (IDN)](https://pt.wikipedia.org/wiki/Nome_de_dom%C3%ADnio_internacionalizado) na sua [Área de Cliente OVHcloud](/links/manager), funcionará e será apresentado de forma normal noutros locais. O endereço do seu website será apresentado tal como o solicitou. Os seus endereços e-mail também serão apresentados como deseja junto dos seus correspondentes.

> [!alert]
>
> <sup>1</sup>: É desaconselhado utilizar um endereço e-mail com um nome de domínio IDN a partir de um cliente de correio (Outlook, Mail do macOS, etc.). Alguns clientes de correio ainda não interpretam os nomes de domínio com caracteres acentuados, o que bloqueia a transmissão dos e-mails. Quando um remetente lhe envia um e-mail, recebe uma mensagem automática a indicar que o seu endereço e-mail não existe.
>
> **Recomenda-se reservar, para além do seu nome de domínio com caracteres acentuados, o mesmo nome de domínio sem acentos, para evitar qualquer incompatibilidade ao nível das trocas de e-mails.**

///

/// details | Como corrigir um nome de domínio no formato IDN?

Tal como os nomes de domínio "clássicos", uma vez subscrito um nome de domínio ou um IDN, este fica registado com os caracteres que lhe atribuiu aquando da sua encomenda.

Consequentemente, se cometeu um erro de digitação aquando da sua encomenda, este não poderá ser corrigido. Terá de encomendar um novo nome de domínio independentemente do anterior (desde que a nova ortografia desejada não esteja já reservada por outra pessoa).

///

<!-- CP-STEPS-START:renew-alldom -->
/// details | Como renovar um único nome de domínio presente num pack Alldom?

Para isso, deve estar declarado no mínimo como [contacto "Faturação"](/pages/account_and_service_management/account_information/managing_contacts) do nome de domínio em questão. Deverá depois alterar o modo de renovação do nome de domínio para o passar a **renovação automática**.

Para isso, clique nos separadores abaixo para ver cada um dos **2** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [As minhas ofertas e serviços](/links/control-panel/billing-services).
>>
> **Passo 2**
>>
>> Na tabela que aparece, à direita do nome de domínio em questão, clique no botão `...`{.action} na coluna `Ações` e depois em `Configurar a renovação`{.action}. Poderá então configurar a renovação deste nome de domínio em **renovação automática**.

> [!primary]
>
> Se dispõe de uma oferta de alojamento web antiga que inclui um nome de domínio gratuito e se alterar esta oferta de alojamento, em alguns casos pode anular a gratuitidade do nome de domínio.
>
> Em caso de dúvida, convidamo-lo a abrir um ticket de assistência a partir do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) indicando o nome de domínio e o alojamento web em questão.

> [!success]
>
> Consulte todos os detalhes no nosso manual "[Como renovar os meus serviços OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)".

///
<!-- CP-STEPS-END:renew-alldom -->

## Transferência de um nome de domínio

/// details | O meu nome de domínio é transferível após uma alteração de titular?

A **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) implementou medidas de segurança para prevenir as transferências ou alterações de titular não autorizadas ou abusivas dos nomes de domínio.

A ICANN definiu um prazo incompressível de **60** dias entre cada operação que possa ocorrer num nome de domínio (criação, alteração de titular, transferência).

As regras definidas pela ICANN devem ser obrigatoriamente respeitadas pelos agentes de registo (como a OVHcloud).

Portanto, não terá outra escolha senão aguardar o final do prazo de 60 dias para poder transferir o seu nome de domínio após ter alterado o seu titular.

///

/// details | O meu nome de domínio está bloqueado contra a transferência durante 60 dias, o que posso fazer?

A **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) implementou medidas de segurança para prevenir as transferências ou alterações de titular não autorizadas ou abusivas dos nomes de domínio.

A ICANN definiu um prazo incompressível de **60** dias entre cada operação que possa ocorrer num nome de domínio (criação, alteração de titular, transferência).

As regras definidas pela ICANN devem ser obrigatoriamente respeitadas pelos agentes de registo (como a OVHcloud).

Portanto, não terá outra escolha senão aguardar o final do prazo de 60 dias para efetuar uma nova operação (alteração de titular ou transferência) no seu nome de domínio.

///

/// details | Não encontro o meu nome de domínio na minha Área de Cliente, o que devo fazer?

Antes de mais, efetue uma consulta [WHOIS](/links/web/domains-whois) para saber onde o seu nome de domínio está registado e para verificar que é o titular declarado do nome de domínio.

Caso n.º 1.A - O seu nome de domínio está registado na OVHcloud e é o titular declarado do nome de domínio:

Efetue um [procedimento de recuperação de contactos](/links/transversal/procedure-contact-change) para que o seu nome de domínio seja integralmente gerido na sua [Área de Cliente OVHcloud](/links/manager). Assim, já não precisará de contactar a pessoa que geria anteriormente o seu nome de domínio.

Caso n.º 1.B - O seu nome de domínio está registado na OVHcloud e não é o titular declarado do nome de domínio:

Em conformidade com o **R**egulamento **G**eral sobre a **P**roteção de **D**ados (**RGPD**), a OVHcloud não poderá fornecer informações relativas à pessoa ou organização que gere o nome de domínio na OVHcloud.

No entanto, pode tentar contactar a pessoa ou organização que o gere seguindo as instruções [deste formulário](/links/web/contact-domain-owner).

Caso n.º 2 - O seu nome de domínio não está registado na OVHcloud:

Contacte diretamente o agente de registo (indicado nas linhas que começam pelo termo `Registrar`) do seu nome de domínio para prosseguir com as suas investigações. Se o nome de domínio não estiver registado na OVHcloud, não estaremos em condições de o ajudar neste assunto.

///

/// details | Não consigo contactar a pessoa que gere o meu nome de domínio, o que devo fazer?

Antes de mais, efetue uma consulta [WHOIS](/links/web/domains-whois) para verificar que é o titular declarado do nome de domínio.

Caso n.º 1 - É o titular declarado do nome de domínio:

Efetue um [procedimento de recuperação de contactos](/links/transversal/procedure-contact-change) para que o seu nome de domínio seja integralmente gerido na sua [Área de Cliente OVHcloud](/links/manager). Assim, já não precisará de contactar a pessoa que geria anteriormente o seu nome de domínio.

Caso n.º 2 - Não é o titular declarado do nome de domínio:

Em conformidade com o **R**egulamento **G**eral sobre a **P**roteção de **D**ados (**RGPD**), a OVHcloud não poderá fornecer informações relativas à pessoa ou organização que gere o nome de domínio na OVHcloud.

No entanto, pode tentar contactar a pessoa ou organização que o gere seguindo as instruções [deste formulário](/links/web/contact-domain-owner).

///

/// details | Posso vender o meu nome de domínio?

Atualmente, a OVHcloud não gere diretamente o processo de venda dos nomes de domínio já registados. Não oferecemos este tipo de serviço.

No entanto, se deseja colocar o seu nome de domínio à venda num mercado secundário, contacte um dos nossos parceiros seguintes:

- [Afternic](https://www.afternic.com).
- [Sedo](https://sedo.com).

Se deseja vender o seu nome de domínio, pode adicioná-lo a estas plataformas. Uma vez adicionado, os fornecedores autorizados proporão o seu nome de domínio ao preço que tiver definido numa das plataformas acima.

///

## Zona DNS

> [!primary]
>
> A alteração de uma zona DNS é uma operação sensível e pode provocar uma interrupção dos serviços associados ao seu nome de domínio (alojamento web, e-mail, etc.). Em caso de dúvida, não hesite em contactar um [prestador de serviços especializado](/links/partner).

/// details | O que é uma zona DNS?

A zona DNS de um nome de domínio contém uma configuração aplicável a este último. É composta por informações técnicas, designadas *registos DNS*. A zona DNS funciona como um centro de encaminhamento, dirigindo o tráfego para os serviços corretos associados ao domínio.

Pode, por exemplo, especificar:

- O endereço IP (registos DNS de tipo *A* e *AAAA*) do seu alojamento web para apresentar o seu website com o seu nome de domínio.
- Os servidores e-mail (registos DNS de tipo *MX*) para os quais o seu nome de domínio deve redirecionar os e-mails que recebe.
- Informações relacionadas com a segurança / autenticação dos seus serviços (alojamento web, servidor web, servidor e-mail, etc.) associados ao seu nome de domínio (registos DNS de tipo *SPF*, *DKIM*, *DMARC*, etc.).

Uma zona DNS está alojada / registada em **servidores DNS**. Estes **servidores DNS** devem ser declarados junto do agente de registo do nome de domínio para utilizar a zona DNS que alojam.

> [!success]
>
> Consulte todos os detalhes no nosso manual "[Tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".

///

/// details | O que é um registo DNS?

Os registos DNS são utilizados, por exemplo, para:

- Associar um nome de domínio a um endereço IP, o que permite aos utilizadores aceder a um website ou a um servidor remoto.
- Associar um nome de domínio a outros recursos online utilizando um nome de domínio (mais fácil de memorizar) em vez de um endereço IP.
- Validar configurações de associação ou segurança, nomeadamente para os serviços e-mail e os alojamentos partilhados.

Existem numerosos registos DNS. Cada um tem um objetivo específico na resolução DNS. Na OVHcloud, são distinguidos em três partes:

- **Campos de apontamento**: `A`, `AAAA`, `NS`, `CNAME` e `DNAME`.
- **Campos alargados**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` e `HTTPS`.
- **Campos mail**: `MX`, `SPF`, `DKIM` e `DMARC`.

> [!success]
>
> Consulte mais detalhes nos seguintes manuais:
>
> - Informações gerais:
>     - [Tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)
> - Registos DNS de apontamento:
>     - [Adicionar um registo DNS de tipo A para um nome de domínio](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Adicionar um registo DNS de tipo AAAA para um nome de domínio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Adicionar um registo DNS de tipo CNAME para um nome de domínio](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Registos DNS alargados:
>     - [Adicionar um registo DNS de tipo TXT para um nome de domínio](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Registos DNS de e-mail:
>     - [Configurar um registo MX para a gestão dos e-mails](/pages/web_cloud/domains/dns_zone_mx)
>     - [Melhorar a segurança dos e-mails com um registo SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Melhorar a segurança dos e-mails com um registo DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Melhorar a segurança dos e-mails com um registo DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

<!-- CP-STEPS-START:dns-records-available -->
/// details | Quais são os registos DNS disponíveis numa zona DNS OVHcloud?

Clique nos separadores abaixo para ver cada um dos **2** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> À direita ou abaixo da tabela, clique em `Adicionar um registo`{.action}.
>>
>> Visualizará todos os registos DNS que poderá adicionar através do assistente de configuração OVHcloud:
>>
>> - **Campos de apontamento**: `A`, `AAAA`, `NS`, `CNAME` e `DNAME`.
>> - **Campos alargados**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` e `HTTPS`.
>> - **Campos mail**: `MX`, `SPF`, `DKIM` e `DMARC`.
>>
>> > [!primary]
>> >
>> > Se deseja adicionar um registo DNS que não aparece na lista, feche a janela que se abriu após ter clicado no botão `Adicionar um registo`{.action} e clique no botão `Modificar em modo de texto`{.action} situado à direita ou abaixo da tabela.
>> >
>> > Poderá assim adicionar manualmente o registo DNS à sua escolha.

> [!success]
>
> Consulte mais detalhes nos seguintes manuais:
>
> - Informações gerais:
>     - [Tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)
> - Registos DNS de apontamento:
>     - [Adicionar um registo DNS de tipo A para um nome de domínio](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Adicionar um registo DNS de tipo AAAA para um nome de domínio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Adicionar um registo DNS de tipo CNAME para um nome de domínio](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Registos DNS alargados:
>     - [Adicionar um registo DNS de tipo TXT para um nome de domínio](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Registos DNS de e-mail:
>     - [Configurar um registo MX para a gestão dos e-mails](/pages/web_cloud/domains/dns_zone_mx)
>     - [Melhorar a segurança dos e-mails com um registo SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Melhorar a segurança dos e-mails com um registo DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Melhorar a segurança dos e-mails com um registo DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///
<!-- CP-STEPS-END:dns-records-available -->

<!-- CP-STEPS-START:change-ns-in-dns-zone -->
/// details | Posso alterar os servidores DNS declarados na minha zona DNS na OVHcloud?

A alteração manual dos registos DNS de tipo NS de um nome de domínio numa zona DNS OVHcloud não é recomendada, pois impediria a resolução DNS da zona DNS correspondente.

Se deseja alterar a configuração dos registos DNS de tipo NS do seu nome de domínio, é provavelmente porque deseja alterar os servidores DNS declarados para este último.

> [!primary]
>
> Para alterar os servidores DNS do seu nome de domínio na OVHcloud, já deve existir uma zona DNS nos novos servidores DNS pretendidos.
> Além disso, deverá verificar nessa mesma zona DNS que os registos DNS de tipo NS correspondem aos servidores DNS correspondentes.

Para isso, clique nos separadores abaixo para ver cada um dos **3** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passo 2**
>>
>> Selecione o separador `Servidores DNS`{.action} uma vez posicionado no nome de domínio em questão.
>>
> **Passo 3**
>>
>> Clique no botão `Modificar os servidores DNS`{.action} situado à direita da tabela "servidores DNS". Dependendo da resolução do seu ecrã, o botão pode encontrar-se abaixo da tabela.
>>
>> Poderá alterar os servidores DNS do seu nome de domínio na página que aparece.

> [!primary]
>
> A propagação da alteração dos servidores DNS declarados para um nome de domínio pode demorar até **48** horas.

Em caso de erro, convidamo-lo a abrir um ticket de assistência a partir do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) indicando as seguintes informações:

- Os nomes dos servidores DNS que deseja configurar.
- A mensagem de erro encontrada.

> [!success]
>
> Consulte todos os detalhes no nosso manual "[Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///
<!-- CP-STEPS-END:change-ns-in-dns-zone -->

/// details | Qual é a diferença entre um registo DNS de tipo A (IPv4) e AAAA (IPv6)?

A rede Internet funciona desde o início dos anos 1990 seguindo a norma IPv4. Esta norma permite fornecer um endereço IP X.X.X.X (onde cada "X" é um número compreendido entre 0 e 255) a cada uma das máquinas ligadas à rede Internet (servidores, computadores, smartphones, tablets, etc.). No entanto, esta norma limita a aproximadamente 4 mil milhões o número de dispositivos ligados à rede Internet.

Na sequência disto, o protocolo IPv6 foi introduzido para permitir ligar à rede Internet até 340 sextiliões de dispositivos.

Dado que os endereços IPv4 estão cada vez menos disponíveis, é mais difícil adicionar novas máquinas à rede Internet com a norma IPv4. No entanto, as ligações com um endereço IPv6 só são úteis se, por exemplo, o seu website também estiver disponível com este mesmo protocolo.

Os registos DNS de tipo A e AAAA são dois tipos de registos de recursos utilizados para associar um nome de domínio a um endereço IP.

As suas principais diferenças residem no tipo de endereço IP que utilizam:

- **Registo A** (também designado "registo de host"): Associa um nome de domínio a um endereço IPv4 (por exemplo, 213.0.113.0). Os endereços IPv4 são endereços de 32 bits, geralmente escritos em notação decimal pontuada.
- **Registo AAAA** (também designado "quádruplo registo A"): Associa um nome de domínio a um endereço IPv6 (por exemplo, 2001:db8:1:1b00:213:0:113:0). Os endereços IPv6 são endereços de 128 bits, geralmente escritos em notação hexadecimal.

Por outras palavras, os registos A são utilizados para os endereços IPv4, enquanto os registos AAAA são utilizados para os endereços IPv6. Ambos os tipos de registos são utilizados para direcionar o tráfego para um endereço IP específico, mas são utilizados para versões diferentes do protocolo Internet.

Note-se que um nome de domínio pode ter simultaneamente registos A e AAAA, o que lhe permite ser acessível nas redes IPv4 e IPv6. Isto é chamado de "dupla pilha", uma prática comum para os websites e serviços que desejam ser acessíveis aos utilizadores nas redes IPv4 e IPv6.

> [!success]
>
> Consulte mais detalhes nos seguintes manuais:
>
> - [Adicionar um registo DNS de tipo A para um nome de domínio](/pages/web_cloud/domains/dns_zone_a_record_creation)
> - [Adicionar um registo DNS de tipo AAAA para um nome de domínio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
> - [Configure um endereço IPv6 para o seu website](/pages/web_cloud/web_hosting/configure_ipv6)

///

/// details | Como configurar um registo PTR para o meu endereço IP externo à OVHcloud?

Na OVHcloud, as configurações **P**oin**T**er **R**ecord (**PTR**) não podem ser geridas diretamente dentro das nossas zonas DNS.

Para configurar um registo reverse/PTR para um endereço IP externo, contacte o seu **F**ornecedor de **A**cesso à **I**nternet (**ISP**), pois é o responsável pela gestão dos registos DNS inversos dos endereços IP que atribui.

> [!success]
>
> Consulte todos os detalhes no nosso manual "[Tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)".

///

<!-- CP-STEPS-START:change-ttl -->
/// details | Como alterar o TTL predefinido na minha zona DNS OVHcloud?

Clique nos separadores abaixo para ver cada um dos **3** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> À direita ou abaixo da tabela, clique em `Modificar o TTL predefinido`{.action}.
>>
> **Passo 3**
>>
>> Na janela que se abre, ajuste o valor sob a menção `TTL predefinido` conforme as suas necessidades e clique em `Modificar`{.action}.

> [!primary]
>
> A propagação da alteração de uma zona DNS pode demorar até **24** horas.

///
<!-- CP-STEPS-END:change-ttl -->

/// details | O que é um registo DNS de tipo SOA?

O registo DNS de tipo **S**tart **O**f **A**uthority (**SOA**) fornece um conjunto de elementos relativos à configuração DNS de um nome de domínio.

Encontre abaixo o resultado de uma consulta SOA para o nome de domínio `domain.tld`.

```bash
              ;; ANSWER SECTION:

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300
```

|Elemento no resultado|Descrição|Correspondência no exemplo acima|
|---|---|---|
|**NS (Name Server)**|Servidor DNS principal declarado para o nome de domínio `domain.tld`.|`dns200.anycast.me`.|
|**Email address**|Endereço e-mail do responsável pela zona DNS.|`tech.ovh.net` (o ponto entre os termos `tech` e `ovh` deve ser substituído por um `@`).|
|**Serial number**|Número de série único que se incrementa a cada alteração da zona DNS.<br>É geralmente composto pela data de atualização no formato `YYYYMMDD` seguida do número de atualizações realizadas no dia.|`2025091801`: Aqui foram realizadas 2 atualizações (`00` para 1, `01` para 2, etc.) em 18/09/2025.|
|**Refresh time**|Intervalo (em segundos) entre cada atualização dos servidores DNS secundários (que compõem a rede DNS) com o servidor DNS principal.|`86400` (24 horas).|
|**Retry time**|Intervalo (em segundos) entre cada tentativa de reatualização dos parâmetros dos servidores DNS secundários (que compõem a rede DNS) com o servidor DNS principal se este não responder ou estiver indisponível.|`3600` (1 hora).|
|**Expire time**|Prazo (em segundos) após o qual os servidores DNS secundários (que compõem a rede DNS) deixam de responder às consultas DNS se o servidor DNS principal deixar de se atualizar com eles.|`3600000` (1000 horas, 41,67 dias).|
|**Minimum TTL**|Tempo de vida mínimo (em segundos) durante o qual os registos DNS da zona DNS são armazenados em cache nos servidores DNS secundários (que compõem a rede DNS).|`300` (5 minutos).|

///

<br>

/// details | Como verificar a configuração da minha zona DNS?

Eis diferentes soluções para verificar a configuração de uma zona DNS:

- **Uma ferramenta de verificação online**: Várias ferramentas online permitem verificar a configuração da sua zona DNS. Encontre-as diretamente através de um navegador de Internet (Chrome, Edge, Firefox, Safari, etc.) introduzindo as palavras-chave adequadas (por exemplo: "verificar propagação DNS") num motor de pesquisa.

- **O comando "dig"**: Se tiver acesso a um *terminal* a partir de um sistema operativo Linux ou macOS, pode utilizar o comando `dig` para verificar a configuração da sua zona DNS na rede DNS.

- **O comando "nslookup"**: O comando `nslookup` está disponível na maioria dos sistemas operativos e também permite verificar a configuração da sua zona DNS.

- **A partir da sua Área de Cliente OVHcloud**: Se a zona DNS ativa do seu nome de domínio for gerida na OVHcloud, aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) para visualizar todos os registos DNS declarados para o seu nome de domínio.

> [!success]
>
> Consulte todos os detalhes no nosso manual "[Editar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

<!-- CP-STEPS-START:verify-dns-propagation -->
/// details | Como verificar a propagação das alterações efetuadas na minha zona DNS?

> [!primary]
>
> Antes de prosseguir, saiba que:
>
> - A propagação de uma alteração efetuada numa zona DNS pode demorar até **24** horas.
> - A propagação de uma alteração de servidores DNS para um nome de domínio pode demorar até **48** horas.

Pode, no entanto, verificar que a propagação DNS está a decorrer corretamente com a ajuda do registo DNS de tipo **S**tart **O**f **A**uthority (**SOA**).

Em primeiro lugar, abra um terminal compatível no seu computador e execute a seguinte linha de comando (substitua `domain.tld` pelo seu próprio nome de domínio):

```bash
dig domain.tld soa
```

> [!primary]
>
> Os sistemas operativos Linux e macOS dispõem nativamente de um terminal compatível para executar este tipo de comando. Se utilizar outro sistema operativo, como o Windows, deverá instalar previamente um terminal compatível para executar o comando.
>
> Além disso, existem ferramentas disponíveis na Internet para verificar a propagação DNS.

Uma vez executado o comando, obterá um resultado semelhante a este:

```bash
              ;; ANSWER SECTION:

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300
```

Neste resultado, recupere o **número de série** (no nosso exemplo: `2025091801`).

Tem a seguinte forma `YYYYMMDDRR` onde:

- `YYYYMMDD`: Representa a data (ano, mês e dia) da última atualização DNS propagada para o nome de domínio.
- `RR`: Representa o número de atualizações realizadas na data indicada. Por exemplo, se apenas uma atualização foi efetuada num dia, terá o valor `00`. Se 2 atualizações foram efetuadas no mesmo dia, terá o valor `01` e assim por diante.

Uma vez recuperado o número de série, clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> À direita ou abaixo da tabela, clique em `Modificar em modo de texto`{.action}.
>>
> **Passo 3**
>>
>> Na janela que se abre, localize a segunda linha que, retomando o nosso exemplo, seria equivalente a esta: `@	IN SOA dns200.anycast.me. tech.ovh.net. (2025091801 86400 3600 3600000 60)`.
>>
> **Passo 4**
>>
>> Compare o número de série recuperado através do terminal com o que aparece na sua Área de Cliente OVHcloud.
>>
>> **Caso n.º 1** - Os dois números de série correspondem:
>>
>> Isto significa que a propagação DNS está a decorrer corretamente. Não tem mais nada a fazer.
>>
>> **Caso n.º 2** - Os dois números de série são diferentes:
>>
>> Isto significa que:
>>
>> - A propagação DNS das suas alterações ainda não terminou completamente (ainda se encontra dentro dos prazos normais de propagação DNS). Nesse caso, aguarde até que a propagação DNS termine completamente (**24** horas para uma alteração de zona DNS e **48** horas para uma alteração de servidores DNS) e repita a operação.
>> - A propagação DNS não está a decorrer corretamente. Nesse caso, a partir da janela `Modificar em modo de texto`{.action} que se abriu no passo **3**, clique diretamente **sem efetuar alterações** no botão `Seguinte`{.action} e depois em `Validar`{.action}. Uma nova propagação DNS será então iniciada.

///
<!-- CP-STEPS-END:verify-dns-propagation -->

<!-- CP-STEPS-START:restore-dns-zone -->
/// details | Como restaurar uma zona DNS?

Clique nos separadores abaixo para ver cada um dos **3** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> À direita ou abaixo da tabela, clique em `Ver o histórico da minha zona DNS`{.action}.
>>
> **Passo 3**
>>
>> Na tabela da página apresentada, identifique a linha correspondente à cópia de segurança da zona DNS pretendida e clique no ícone presente na coluna `Restaurar`{.action}. A configuração atual da zona DNS será substituída pela cópia de segurança escolhida.

> [!primary]
>
> A propagação da alteração de uma zona DNS pode demorar até **24** horas.

> [!success]
>
> Consulte todos os detalhes no nosso manual "[Gerir o histórico de uma zona DNS](/pages/web_cloud/domains/dns_zone_history)".

///
<!-- CP-STEPS-END:restore-dns-zone -->

<!-- CP-STEPS-START:get-dns-zone-copy -->
/// details | Como obter uma cópia da minha zona DNS?

Clique nos separadores abaixo para ver cada um dos **3** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> À direita ou abaixo da tabela, clique em `Ver o histórico da minha zona DNS`{.action}.
>>
> **Passo 3**
>>
>> Na tabela da página apresentada, identifique a linha correspondente à cópia de segurança da zona DNS pretendida e clique no ícone presente na coluna `Descarregar`{.action}. A cópia da zona DNS será descarregada no formato *.txt*.

> [!success]
>
> Consulte todos os detalhes no nosso manual "[Gerir o histórico de uma zona DNS](/pages/web_cloud/domains/dns_zone_history)".

///
<!-- CP-STEPS-END:get-dns-zone-copy -->

<!-- CP-STEPS-START:create-dns-zone-subdomain -->
/// details | Posso criar uma zona DNS para um subdomínio?

Pode criar uma zona DNS para um subdomínio.

Para isso, clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e clique no botão `Encomendar`{.action} no canto superior direito da tabela apresentada.
>>
> **Passo 2**
>>
>> Na página que aparece, introduza o subdomínio (por exemplo: *www.domain.tld*) para o qual deseja criar uma zona DNS OVHcloud. Aguarde alguns instantes enquanto a ferramenta efetua verificações relativas ao subdomínio.
>>
> **Passo 3**
>>
>> Quando a verificação terminar, escolha se deseja ativar ou não os registos mínimos para a zona DNS que vai criar. Esta escolha não é definitiva, pois poderá sempre [editar os registos da zona DNS](/pages/web_cloud/domains/dns_zone_edit) posteriormente.
>>
> **Passo 4**
>>
>> Depois de efetuar a sua escolha, prossiga com os passos até à criação da zona DNS.

Esta zona DNS será instalada em 2 servidores DNS OVHcloud. Deverá declarar os nomes destes dois servidores na zona DNS ativa do nome de domínio do seu subdomínio (por exemplo, *www.domain.tld* é um subdomínio do nome de domínio *domain.tld*).

Para recuperar os nomes dos 2 servidores DNS, clique nos separadores abaixo para ver cada um dos **2** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o subdomínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> No canto superior esquerdo da página apresentada, recupere os 2 nomes dos servidores DNS presentes sob a menção `Name Servers`. Estes últimos têm uma das 2 formas seguintes:
>>
>> - `dnsXXX.ovh.net` e `nsXXX.ovh.net` **ou** `dnsXXX.ovh.ca` e `nsXXX.ovh.ca` (onde cada `X` representa um algarismo compreendido entre `0` e `9`).
>> - `dns200.ovh.me` e `ns200.anycast.me`.

Uma vez na posse dos 2 servidores DNS, declare-os através de dois registos de tipo NS na zona DNS ativa do nome de domínio de onde provém o seu subdomínio.

Caso n.º 1 - A zona DNS ativa do nome de domínio de onde provém o seu subdomínio está na OVHcloud:

Clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> À direita ou abaixo da tabela, clique em `Adicionar um registo`{.action} e selecione o tipo de registo DNS `NS`{.action} para declarar um servidor DNS.
>>
> **Passo 3**
>>
>> Na janela que se abre, introduza o subdomínio em questão no campo `Subdomínio *`{.action} (por exemplo, escreva **unicamente** *www* se o seu nome de domínio for *domain.tld* e o seu subdomínio completo for *www.domain.tld*). No campo `Destino *`{.action}, introduza **apenas um** dos 2 servidores DNS.
>>
> **Passo 4**
>>
>> Clique em `Seguinte`{.action} e depois em `Validar`{.action}.
>>
>> Repita a operação para o segundo servidor DNS que falta declarar.

Caso n.º 2 - A zona DNS ativa do nome de domínio de onde provém o seu subdomínio não está na OVHcloud:

Deverá declarar os 2 servidores DNS para o seu subdomínio diretamente junto do fornecedor DNS do seu nome de domínio (de onde provém o seu subdomínio).

> [!primary]
>
> Em ambos os casos, a propagação da alteração de uma zona DNS pode demorar até **24** horas.

> [!success]
>
> Consulte mais detalhes nos seguintes manuais:
>
> - [Criar uma zona DNS OVHcloud para um nome de domínio](/pages/web_cloud/domains/dns_zone_create)
> - [Editar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///
<!-- CP-STEPS-END:create-dns-zone-subdomain -->

<!-- CP-STEPS-START:redirect-all-subdomains -->
/// details | Como redirecionar todos os subdomínios de um mesmo nome de domínio para o mesmo endereço IP?

Clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> À direita ou abaixo da tabela, clique em `Adicionar um registo`{.action} e selecione o tipo de registo DNS `A`{.action} para um IPv4 (por exemplo: `203.0.113.0`) ou `AAAA`{.action} para um IPv6 (por exemplo: `2001:db8:1:1b00:203:0:113:0`).
>>
> **Passo 3**
>>
>> Na janela que se abre, no campo de introdução `Subdomínio *`{.action}, introduza o valor `*`. O asterisco `*` representará todos os subdomínios (por exemplo: `www.domain.tld` ou `ovhcloud.domain.tld`) do seu nome de domínio. Preencha o campo `Destino *`{.action} com o endereço IP pretendido.
>>
> **Passo 4**
>>
>> Clique em `Seguinte`{.action} e depois em `Validar`{.action}.

> [!primary]
>
> A propagação da alteração de uma zona DNS pode demorar até **24** horas.

> [!success]
>
> Consulte todos os detalhes no nosso manual "[Editar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///
<!-- CP-STEPS-END:redirect-all-subdomains -->

<!-- CP-STEPS-START:wildcard-dns -->
/// details | Posso configurar um wildcard na minha zona DNS?

É possível configurar um wildcard numa zona DNS OVHcloud.

Para isso, clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> À direita ou abaixo da tabela, clique em `Adicionar um registo`{.action} e selecione o tipo de registo DNS para o qual deseja configurar um wildcard.
>>
> **Passo 3**
>>
>> Na janela que se abre, no campo de introdução `Subdomínio *`{.action}, introduza o valor `*`. O asterisco `*` representará todos os subdomínios (por exemplo: `www.domain.tld` ou `ovhcloud.domain.tld`) do seu nome de domínio. Preencha os restantes campos com os valores pretendidos.
>>
> **Passo 4**
>>
>> Clique em `Seguinte`{.action} e depois em `Validar`{.action}.

> [!primary]
>
> A propagação da alteração de uma zona DNS pode demorar até **24** horas.

> [!success]
>
> Consulte todos os detalhes no nosso manual "[Editar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///
<!-- CP-STEPS-END:wildcard-dns -->

<br>

<!-- CP-STEPS-START:restore-deleted-dns-zone -->
/// details | Eliminei acidentalmente a minha zona DNS e desejo restaurá-la, o que devo fazer?

A OVHcloud envia um e-mail com uma cópia da zona DNS em formato de texto depois de a sua zona DNS ser eliminada, para que a possa restaurar posteriormente se necessário.
Este e-mail é enviado para o endereço e-mail associado à sua conta de cliente OVHcloud.

> [!success]
>
> Se não recebeu este e-mail, verifique o seu correio indesejado ou aceda à página [A minha conta](/links/control-panel/account-dashboard) e clique no separador `E-mails recebidos`{.action}.

Para restaurar a sua zona DNS, descarregue o ficheiro que contém a zona DNS a partir do e-mail recebido.

Clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passo 2**
>>
>> Selecione o separador `Zona DNS`{.action} uma vez posicionado no nome de domínio em questão. **Se a zona DNS estiver inativa, ative-a a partir deste separador.**
>>
> **Passo 3**
>>
>> À direita ou abaixo da tabela, clique em `Modificar em modo de texto`{.action}.
>>
> **Passo 4**
>>
>> Na janela que se abre, substitua todo o conteúdo apresentado pela cópia da zona DNS eliminada. Em seguida, clique em `Seguinte`{.action} e depois em `Validar`{.action}.

> [!primary]
>
> A propagação da alteração de uma zona DNS pode demorar até **24** horas.

> [!success]
>
> Consulte mais detalhes nos seguintes manuais:
>
> - [Criar uma zona DNS OVHcloud para um nome de domínio](/pages/web_cloud/domains/dns_zone_create)
> - [Editar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Gerir o histórico de uma zona DNS](/pages/web_cloud/domains/dns_zone_history)

///
<!-- CP-STEPS-END:restore-deleted-dns-zone -->

/// details | Como anular um pedido de eliminação da minha zona DNS?

Para cada pedido de eliminação de um serviço, é enviado um e-mail de confirmação de eliminação para o endereço e-mail associado à sua conta de cliente OVHcloud.

Se não clicou no link de confirmação presente neste e-mail, não se preocupe, a sua zona DNS não será eliminada.

Caso contrário, a eliminação foi iniciada e já não pode ser anulada. A operação de eliminação pode demorar até 3 dias antes de poder recriar uma zona DNS OVHcloud para o seu nome de domínio.

///

<!-- CP-STEPS-START:activate-dns-zone -->
/// details | Não consigo ativar uma zona DNS para o meu nome de domínio, o que devo fazer?

Esta situação ocorre quando já existe uma zona DNS para o seu nome de domínio na OVHcloud.

Clique nos separadores abaixo para ver cada um dos **2** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e verifique se o nome de domínio em questão aparece.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> **Caso n.º 1** - O nome de domínio em questão aparece na lista:
>>
>> Isto significa que a zona DNS do nome de domínio já existe na sua Área de Cliente OVHcloud. Poderá geri-la diretamente nesse local.
>>
>> **Caso n.º 2** - O nome de domínio em questão não aparece na lista:
>>
>> Isto significa que a zona DNS do nome de domínio é gerida por outro identificador de cliente OVHcloud diferente do seu.
>>
>> Em conformidade com o **R**egulamento **G**eral sobre a **P**roteção de **D**ados (**RGPD**), o identificador de cliente onde se encontra a zona DNS permanecerá confidencial.
>>
>> Nesta situação, se não conhecer este outro identificador de cliente, convidamo-lo a abrir um ticket de assistência a partir do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) para recuperar a gestão da zona DNS.

///
<!-- CP-STEPS-END:activate-dns-zone -->

/// details | Porque não encontro o separador "GLUE" na minha Área de Cliente OVHcloud?

A funcionalidade não está disponível com todas as extensões de nomes de domínio.
Se o separador não aparece na sua [Área de Cliente OVHcloud](/links/manager), é porque a opção "GLUE" não está disponível para o seu nome de domínio.

> [!success]
>
> Consulte todos os detalhes no nosso manual "[Personalizar os servidores DNS de um nome de domínio (Glue records)](/pages/web_cloud/domains/glue_registry)".

///

## Servidores DNS

> [!primary]
>
> A alteração dos servidores DNS é uma operação sensível e pode provocar uma interrupção dos serviços associados ao seu nome de domínio (alojamento web, e-mail, etc.). Em caso de dúvida, não hesite em contactar um [prestador de serviços especializado](/links/partner).

<!-- CP-STEPS-START:change-dns-servers -->
/// details | Como alterar os meus servidores DNS?

Clique nos separadores abaixo para ver cada um dos **3** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passo 2**
>>
>> Selecione o separador `Servidores DNS`{.action} uma vez posicionado no nome de domínio em questão.
>>
> **Passo 3**
>>
>> Clique no botão `Modificar os servidores DNS`{.action} situado à direita da tabela "servidores DNS". Dependendo da resolução do seu ecrã, o botão pode encontrar-se abaixo da tabela.
>>
>> Poderá alterar os servidores DNS do seu nome de domínio na página que aparece.

> [!primary]
>
> A propagação da alteração dos servidores DNS declarados para um nome de domínio pode demorar até **48** horas.

> [!success]
>
> Consulte todos os detalhes no nosso manual "[Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///
<!-- CP-STEPS-END:change-dns-servers -->

<!-- CP-STEPS-START:customize-dns-servers -->
/// details | Como personalizar os meus servidores DNS?

Clique nos separadores abaixo para ver cada um dos **3** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passo 2**
>>
>> Selecione o separador `Servidores DNS`{.action} uma vez posicionado no nome de domínio em questão.
>>
> **Passo 3**
>>
>> Clique no botão `Modificar os servidores DNS`{.action} situado à direita da tabela "servidores DNS". Dependendo da resolução do seu ecrã, o botão pode encontrar-se abaixo da tabela.
>>
>> Poderá personalizar os servidores DNS do seu nome de domínio na página que aparece.

> [!primary]
>
> A propagação da alteração dos servidores DNS declarados para um nome de domínio pode demorar até **48** horas.

> [!success]
>
> Consulte todos os detalhes no nosso manual "[Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///
<!-- CP-STEPS-END:customize-dns-servers -->

<!-- CP-STEPS-START:replace-with-ovhcloud-dns -->
/// details | Como substituir os meus servidores DNS pelos da OVHcloud?

Clique nos separadores abaixo para ver cada um dos **3** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passo 2**
>>
>> Selecione o separador `Servidores DNS`{.action} uma vez posicionado no nome de domínio em questão.
>>
> **Passo 3**
>>
>> Clique no botão `Modificar os servidores DNS`{.action} situado à direita da tabela "servidores DNS". Dependendo da resolução do seu ecrã, o botão pode encontrar-se abaixo da tabela.
>>
>> Poderá substituir os servidores DNS do seu nome de domínio pelos da OVHcloud na página que aparece.

> [!primary]
>
> A propagação da alteração dos servidores DNS declarados para um nome de domínio pode demorar até **48** horas.

> [!success]
>
> Consulte todos os detalhes no nosso manual "[Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///
<!-- CP-STEPS-END:replace-with-ovhcloud-dns -->

/// details | Na minha Área de Cliente, aparece uma mensagem de erro a indicar que não estou a utilizar os servidores DNS da OVHcloud para o meu nome de domínio, o que devo fazer?

Na sua [Área de Cliente OVHcloud](/links/manager), esta mensagem indica unicamente que a zona DNS criada para o seu nome de domínio não é a sua zona DNS ativa.

Por outras palavras, isto significa que a configuração presente nesta zona DNS não é a que está atualmente aplicada ao seu nome de domínio.

No entanto, verifique que os servidores DNS mencionados na mensagem de erro correspondem aos servidores DNS que deseja aplicar ao seu nome de domínio. Em seguida, verifique a configuração da zona DNS declarada nesses mesmos servidores DNS junto do seu fornecedor DNS.

Se deseja utilizar os servidores DNS da OVHcloud para o seu nome de domínio, poderá preparar a configuração DNS da zona DNS presente na OVHcloud para que corresponda às suas necessidades e depois ativá-la para o seu nome de domínio.

> [!success]
>
> Consulte mais detalhes nos seguintes manuais:
>
> - [Editar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

///

<!-- CP-STEPS-START:cannot-change-dns-servers -->
/// details | Não consigo alterar os servidores DNS de um nome de domínio a partir da minha Área de Cliente OVHcloud, o que devo fazer?

Isto significa que apenas dispõe da gestão da zona DNS do nome de domínio, mas não do nome de domínio em si.

Para verificar, clique nos separadores abaixo para ver cada um dos **2** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e verifique se o nome de domínio em questão aparece.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passo 2**
>>
>> **Caso n.º 1** - O nome de domínio não aparece na lista:
>>
>> Isto significa que o nome de domínio não é gerido a partir da sua Área de Cliente OVHcloud. Efetue uma consulta [WHOIS](/links/web/domains-whois) para saber onde está registado.
>>
>> Poderá então efetuar uma das seguintes ações (se for o titular declarado no WHOIS do nome de domínio):
>>
>> - O nome de domínio está registado na OVHcloud: Poderá efetuar um [procedimento de recuperação de contactos](/links/transversal/procedure-contact-change) para que o seu nome de domínio seja gerido na sua Área de Cliente OVHcloud.
>> - O nome de domínio não está registado na OVHcloud: Poderá efetuar uma operação de [transferência de entrada](/pages/web_cloud/domains/transfer_incoming_generic_domain) para a OVHcloud para que o seu nome de domínio seja gerido na sua Área de Cliente OVHcloud.
>>
>> **Caso n.º 2** - O nome de domínio aparece na lista:
>>
>> Isto significa que não dispõe de direitos suficientes para gerir o nome de domínio a partir da sua Área de Cliente OVHcloud. Efetue uma consulta [WHOIS](/links/web/domains-whois) para verificar que é o titular declarado do nome de domínio.
>>
>> Poderá então efetuar um [procedimento de recuperação de contactos](/links/transversal/procedure-contact-change) para que o seu nome de domínio seja integralmente gerido na sua Área de Cliente OVHcloud.

///
<!-- CP-STEPS-END:cannot-change-dns-servers -->

## Saiba mais <a name="go-further"></a>

[FAQ e-mails OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Alojamento web - FAQ](/pages/web_cloud/web_hosting/faq-web_hosting)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretende usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
