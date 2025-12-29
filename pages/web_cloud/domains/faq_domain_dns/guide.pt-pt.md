---
title: "FAQ sobre os nomes de domínio & DNS"
excerpt: "Encontre as principais questões colocadas sobre os nomes de domínio, os servidores DNS e as zonas DNS"
updated: 2025-12-16
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

**Clique na perguntas abaixo para exibir as explicações.**

## Subscrição de um nome de domínio

/// details | Como posso subscrever um nome de domínio na OVHcloud?

Siga estas etapas:

1. Acesse nosso site [OVHcloud](/links/website).
2. Na página exibida e no campo apropriado, digite o nome de domínio que deseja reservar (por exemplo: `dominio.tld`), em seguida, clique no botão `Pesquisar`{.action}.
3. Na nova página exibida, nossa interface informará se o nome de domínio escolhido está disponível para compra ou não. Se já estiver reservado com a sintaxe que você digitou, modifique-o e inicie uma nova verificação de disponibilidade.
4. Uma vez que você tenha encontrado um nome de domínio disponível, clique no botão `Adquirir`{.action}, depois no botão `Continuar a encomendar`{.action} na coluna à direita.
5. Selecione as opções ou serviços adicionais aos quais deseja subscrever-se juntamente com seu nome de domínio, depois clique em `Continuar`{.action} até que o processo de compra solicite que você faça login ou crie uma conta cliente OVHcloud.
6. Assim que você estiver autenticado com sua conta cliente OVHcloud, poderá personalizar as informações dos contatos (proprietário/titular, administrador, técnico) para seu nome de domínio. Em seguida, clique no botão `Continuar`{.action} para acessar o resumo de sua compra.
7. Na página `Resumo da sua compra` e, se necessário, poderá modificar a configuração DNS que será aplicada ao seu nome de domínio clicando no link intitulado `Modificar a configuração`{.action}. Assim que suas modificações forem concluídas, clique no botão `Pagar`{.action} para acessar a última etapa de sua compra.

Pague sua compra para iniciar a reserva de seu nome de domínio, bem como a instalação dos serviços e opções adicionais aos quais você se inscreveu.

Alguns instantes depois, você receberá um e-mail de confirmação para sua compra.
Você poderá, em seguida, administrar seu nome de domínio fazendo login no seu [Área de Cliente OVHcloud](/links/manager).

Não hesite em criar um ticket de suporte a partir do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) se necessário.

///

/// details | Como posso comprar um nome de domínio no mercado secundário?

A compra de um nome de domínio no mercado secundário é feita da mesma forma que a subscrição de um nome de domínio.

Siga estas etapas:

1. Acesse nosso site [OVHcloud](/links/website).
2. Na página exibida e no campo apropriado, digite o nome de domínio que deseja reservar (por exemplo: `dominio.tld`), em seguida, clique no botão `Pesquisar`{.action}.
3. Na nova página exibida, nossa interface informará se o nome de domínio escolhido está disponível para compra ou não. Se já estiver reservado com a sintaxe que você digitou, modifique-o e inicie uma nova verificação de disponibilidade.
4. Uma vez que você tenha encontrado um nome de domínio disponível, clique no botão `Comprar`{.action}, depois no botão `Continuar a compra`{.action} na coluna à direita.
5. Selecione as opções ou serviços adicionais aos quais deseja subscrever-se juntamente com seu nome de domínio, depois clique em `Avançar`{.action} até que o processo de compra solicite que você faça login ou crie uma conta cliente OVHcloud.
6. Assim que você estiver autenticado com sua conta cliente OVHcloud, poderá personalizar as informações dos contatos (proprietário/titular, administrador, técnico) para seu nome de domínio. Em seguida, clique no botão `Continuar`{.action} para acessar o resumo de sua compra.
7. Na página `Resumo da sua compra` e, se necessário, poderá modificar a configuração DNS que será aplicada ao seu nome de domínio clicando no link intitulado `Modificar a configuração`{.action}. Assim que suas modificações forem concluídas, clique no botão `Pagar`{.action} para acessar a última etapa de sua compra.

Pague sua compra para iniciar a reserva de seu nome de domínio, bem como a instalação dos serviços e opções adicionais aos quais você se inscreveu.

Alguns instantes depois, você receberá um e-mail de confirmação para sua compra.
Você poderá, em seguida, administrar seu nome de domínio fazendo login no seu [Área de Cliente OVHcloud](/links/manager).

Não hesite em criar um ticket de suporte a partir do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) se necessário.

///

## Administração de um nome de domínio

/// details | Como saber se meu nome de domínio está registrado na OVHcloud?

Para isso, você pode realizar uma consulta [WHOIS](/links/web/domains-whois) para saber onde seu nome de domínio está registrado e verificar se você está declarado como titular do nome de domínio.

Cada escritório de registro (como a OVHcloud) tem a possibilidade de escolher como exibir as informações relativas a um nome de domínio no WHOIS.

Após realizar a consulta WHOIS, procure no resultado pelo menos uma das seguintes linhas:

- Domain Name: ovhcloud.com
- Registrar WHOIS Server: whois.ovh.com
- Registrar URL: https://ovh.com
- Registrar: OVH sas

Se você observar pelo menos uma dessas linhas no resultado, seu nome de domínio está realmente registrado na OVHcloud.

Caso contrário, seu nome de domínio está registrado em outro escritório de registro. Procure então as linhas relativas ao `Registrar` para identificar o escritório de registro onde seu nome de domínio está registrado.

///

/// details | Como saber a data de expiração de um nome de domínio?

A solução mais rápida é realizar uma consulta [WHOIS](/links/web/domains-whois) no nome de domínio. Após realizar a consulta, procure no resultado a linha correspondente à data de expiração (por exemplo: `Expiry Date: 2025-09-22T08:00:00Z`, `Registry Expiry Date: 2025-09-22T08:00:00Z`, etc.).

Se seu nome de domínio estiver registrado na OVHcloud, você também poderá seguir estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Clique no seu nome no canto superior direito e escolha `As minhas ofertas e serviços`{.action}.
3. No quadro que aparece, procure a linha correspondente ao seu nome de domínio e localize a data presente na coluna `Data de entrada em vigor`. Esta data corresponde à data de expiração do seu nome de domínio.

///

/// details | Como alterar a data anual de expiração de um nome de domínio?

A data anual de expiração de um nome de domínio (por exemplo: 24 de setembro) é pré-determinada com base na data de registro (criação) do nome de domínio.

Geralmente, a data anual de expiração de um nome de domínio é a mesma da data em que você o registrou.

Portanto, não é possível alterar a data anual de expiração de um nome de domínio.

///

<br>

/// details | Como corrigir um erro de digitação no meu nome de domínio?

Assim que um nome de domínio é adquirido, ele é registrado com base nos caracteres que você definiu ao fazer a compra. O registro é feito junto ao registro da extensão do seu nome de domínio (por exemplo: o registro dos *.com*) e são aplicadas taxas de reserva do lado do registrador (como a OVHcloud).

Um nome de domínio é um endereço único na Internet, por exemplo: `ovhcloud.com`.
Qualquer alteração nesse nome, seja um caractere ou uma extensão (.com, .fr, .net, etc.), torna-o um nome de domínio completamente diferente.

Portanto, se você cometeu um erro de digitação ao fazer a compra, ele não poderá ser modificado ou corrigido. Você deverá adquirir um novo nome de domínio independentemente do anterior (desde que a nova ortografia desejada não esteja já reservada por outra pessoa).

Os nomes de domínio são considerados produtos personalizados, pois são registrados especificamente para um titular e bloqueados para outros desde a compra. Por isso, uma vez registrados, eles não podem ser reembolsados.

///

/// details | Como modificar um nome de domínio já adquirido?

Assim que um nome de domínio é adquirido, ele é registrado com base nos caracteres que você definiu ao fazer a compra. O registro é feito junto ao registro da extensão do seu nome de domínio (por exemplo: o registro dos *.com*) e são aplicadas taxas de reserva do lado do registrador (como a OVHcloud).

Um nome de domínio é um endereço único na Internet, por exemplo: `ovhcloud.com`.
Qualquer alteração nesse nome, seja um caractere ou uma extensão (.com, .fr, .net, etc.), torna-o um nome de domínio completamente diferente.

Portanto, se você cometeu um erro de digitação ao fazer a compra, ele não poderá ser modificado ou corrigido. Você deverá adquirir um novo nome de domínio independentemente do anterior (desde que a nova ortografia desejada não esteja já reservada por outra pessoa).

Os nomes de domínio são considerados produtos personalizados, pois são registrados especificamente para um titular e bloqueados para outros desde a compra. Por isso, uma vez registrados, eles não podem ser reembolsados.

///

/// details | Como excluir um nome de domínio?

Siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Clique no seu nome no canto superior direito e escolha `As minhas ofertas e serviços`{.action}.
3. No quadro que aparece, procure a linha correspondente ao seu nome de domínio, clique no botão `...`{.action} à direita, depois em `Rescindir o meu serviço`{.action}.
4. Na página que aparece, selecione o modo de cancelamento (imediatamente ou na data de expiração do serviço) e clique no botão `Sim, rescindir`{.action} embaixo.

Seu nome de domínio será então suspenso na data de expiração, e, a partir dessa data, será excluído **permanentemente** em um prazo máximo de 60 dias. Esse prazo é definido pela **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) para que um nome de domínio seja totalmente excluído e novamente disponível para registro por outro titular.

> [!primary]
>
> Uma vez solicitada a rescisão, você pode acelerar a exclusão criando um ticket de suporte a partir do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_get_help). Documentos comprobatórios deverão ser fornecidos para acelerar essa exclusão.

> [!success]
>
> Encontre todos os detalhes no nosso guia «[Como cancelar os meus serviços OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services)».

///

/// details | Recebi um e-mail sobre a validação das informações do titular associadas ao meu nome de domínio, o que fazer?

Primeiramente, se você tiver dúvidas sobre a legitimidade do e-mail recebido, consulte nosso guia «[Atenção às tentativas de fraude: como reconhecer os emails fraudulentos e de phishing](/pages/account_and_service_management/account_information/phishing_care)».

Conforme uma diretiva da **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) de 01/09/2014, os registradores (por exemplo: OVHcloud) são obrigados a verificar a validade dos dados dos titulares/proprietários de nomes de domínio. A OVHcloud envia então um e-mail aos titulares/proprietários do nome de domínio registrado para o endereço de e-mail de contato declarado na OVHcloud.

Você receberá esse e-mail quando realizar uma das seguintes ações:

- Registro de um novo nome de domínio.
- Transferência de um nome de domínio.
- Alteração das informações associadas ao seu nome de domínio.

Esse e-mail contém um link que permite verificar rapidamente suas informações como proprietário/titular legal do nome de domínio.

Atenção: Essa verificação deve ser feita em um prazo de 15 dias. Após esse prazo, o nome de domínio será suspenso tecnicamente. Ele permanecerá sob seu nome contratuamente, mas não será mais acessível na Internet. Uma mensagem de erro será exibida para os visitantes do seu site.

Você pode receber os seguintes e-mails nos primeiros 15 dias:

- **Dia 0**: Imediatamente após adquirir o nome de domínio ou alterar suas informações, você (ou a pessoa registrada como proprietário/titular do nome de domínio) receberá o primeiro e-mail com um link de verificação.
- **Dias 4, 9 e 13 (e-mails de lembrete)**: Se você ainda não verificou o nome de domínio, você receberá o e-mail novamente.
- **Dia 14**: Se você ainda não verificou o nome de domínio, o e-mail é enviado novamente. Além disso, um e-mail também é enviado para o endereço de e-mail do administrador/titular do nome de domínio para informá-lo de que as informações dele não foram confirmadas.
- **Dia 15**: Se o proprietário/titular do nome de domínio ainda não respondeu, enviamos um e-mail para o administrador do nome de domínio para informá-lo da situação e da desativação do nome de domínio.

Após esses 15 dias, o sistema envia e-mails adicionais (até 9 e-mails) antes de excluir seu nome de domínio. Essa exclusão será realizada após 60 dias a partir do dia 0.

> [!warning]
>
> Dependendo da extensão do nome de domínio (por exemplo: *.com*, *.net*, etc.), alguns dos prazos mencionados acima podem variar. Recomendamos fortemente que você verifique, junto ao registro da extensão do seu nome de domínio, o processo de verificação do controle dos contatos.

///

/// details | Não recebi o e-mail de validação das informações do titular associado ao meu nome de domínio e ele está suspenso, o que fazer?

Se você não recebeu o e-mail de validação do proprietário do seu nome de domínio, verifique os seguintes pontos:

1. O endereço de e-mail declarado para o titular do nome de domínio é válido e funcional.
2. O e-mail de validação não está na pasta de spam.

Após verificar e confirmar os dois pontos acima, se você ainda não conseguir recuperar o e-mail de validação do titular, convidamos você a abrir um ticket de suporte a partir do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) para solicitar o reenvio desse e-mail.

///

/// details | O que é um nome de domínio no formato IDN?

Originalmente, os nomes de domínio podiam conter apenas caracteres **ASCII** específicos (incluindo as 26 letras do alfabeto latino). Um **I**nternationalized **D**omain **N**ame (**IDN**) permite, entre outras coisas, o uso de caracteres especiais ou acentuados, ou até mesmo outros alfabetos (como o *cirílico*).

Na OVHcloud, é perfeitamente possível comprar IDNs e utilizá-los como nomes de domínio completos com os nossos outros serviços (como alojamento web, zona DNS, etc.<sup>1</sup>).

Uma vez adquiridos, os IDNs aparecem no seu [Área de Cliente OVHcloud](/links/manager) no formato **xn--**.

Mesmo que seu domínio apareça em [notação internacionalizada (IDN)](https://en.wikipedia.org/wiki/Internationalized_domain_name) no seu [Área de Cliente OVHcloud](/links/manager), ele funcionará e aparecerá de forma totalmente normal em outros lugares. O endereço do seu site será exibido como você solicitou. Seus endereços de e-mail também serão exibidos como você deseja para seus correspondentes.

> [!alert]
>
> <sup>1</sup>: Não é recomendado utilizar um endereço de e-mail com um nome de domínio IDN a partir de um cliente de e-mail (Outlook, Mail do macOS, etc.). De fato, alguns clientes de e-mail ainda não interpretam nomes de domínio com caracteres acentuados, o que bloqueia a transmissão dos e-mails. Quando um remetente lhe envia um e-mail, ele recebe então uma mensagem automática indicando que seu endereço de e-mail não existe.
>
> **Recomenda-se reservar, em complemento ao seu nome de domínio com caracteres acentuados, o mesmo nome de domínio sem esses acentos, para evitar qualquer incompatibilidade nos intercâmbios de e-mails.**

///

/// details | Como corrigir um nome de domínio no formato IDN?

Assim como os nomes de domínio «clássicos», assim que um nome de domínio ou um IDN é adquirido, ele é registrado com base nos caracteres que você definiu ao fazer a compra.

Portanto, se você cometeu um erro de digitação ao fazer a compra, ele não poderá ser corrigido. Você deverá adquirir um novo nome de domínio independentemente do anterior (desde que a nova ortografia desejada não esteja já reservada por outra pessoa).

///

/// details | Como renovar apenas um nome de domínio presente em um pack Alldom?

Para isso, você deve estar, no mínimo, declarado como [contato «faturação»](/pages/account_and_service_management/account_information/managing_contacts) do nome de domínio em questão. Você deverá, em seguida, modificar o modo de renovação do nome de domínio para **renovação automática**.

Para isso, siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Clique no seu nome no canto superior direito e escolha `As minhas ofertas e serviços`{.action}.
3. No quadro que aparece e à direita do nome de domínio em questão, clique no botão `...`{.action} na coluna `Ações`, depois em `Configurar a renovação`{.action}. Você poderá, em seguida, configurar a renovação desse nome de domínio em **renovação automática**.

> [!primary]
>
> Se você possui uma oferta antiga de alojamento web que inclui um nome de domínio gratuito e se você modificar essa oferta de alojamento, isso pode, em alguns casos, cancelar a gratuidade do nome de domínio.
>
> Em caso de dúvida, convidamos você a abrir um ticket de suporte a partir do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) especificando o nome de domínio e a alojamento web em questão.

> [!success]
>
> Encontre todos os detalhes no nosso guia «[Como renovar os meus serviços OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)».

///

## Transferência de um nome de domínio

/// details | Meu nome de domínio é transferível após uma mudança de proprietário?

A **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) implementou medidas de segurança para prevenir transferências ou mudanças de proprietários não autorizadas ou abusivas de nomes de domínio.

A ICANN definiu, entre outras coisas, um prazo incompressível de **60** dias entre cada operação que pode ocorrer em um nome de domínio (criação, mudança de proprietário, transferência).

As regras definidas pela ICANN devem obrigatoriamente ser respeitadas pelos registradores (como a OVHcloud).

Você não terá outra escolha senão esperar até o final do prazo de 60 dias para poder transferir seu nome de domínio após ter mudado seu proprietário.

///

/// details | Meu nome de domínio está bloqueado contra a transferência por 60 dias, o que fazer?

A **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) implementou medidas de segurança para prevenir transferências ou mudanças de proprietários não autorizadas ou abusivas de nomes de domínio.

A ICANN definiu, entre outras coisas, um prazo incompressível de **60** dias entre cada operação que pode ocorrer em um nome de domínio (criação, mudança de proprietário, transferência).

As regras definidas pela ICANN devem obrigatoriamente ser respeitadas pelos registradores (como a OVHcloud).

Você não terá outra escolha senão esperar até o final do prazo de 60 dias para realizar uma nova operação (mudança de proprietário ou transferência) em seu nome de domínio.

///

/// details | Não consigo encontrar meu nome de domínio no meu espaço cliente, o que fazer?

Primeiramente, realize uma consulta [WHOIS](/links/web/domains-whois) para saber onde seu nome de domínio está registrado e verificar se você está declarado como titular do nome de domínio.

Caso n°1.A - Seu nome de domínio está registrado na OVHcloud e você está declarado como titular do nome de domínio:

Realize uma [procedimento de recuperação de contatos](/links/transversal/procedure-contact-change) para que seu nome de domínio seja totalmente gerenciado no seu [Área de Cliente OVHcloud](/links/manager). Assim, você não precisará mais contatar a pessoa que gerenciava anteriormente seu nome de domínio.

Caso n°1.B - Seu nome de domínio está registrado na OVHcloud e você não está declarado como titular do nome de domínio:

De acordo com o **R**egulamento **G**eral sobre a **P**roteção de **D**ados (**RGPD**), a OVHcloud não poderá fornecer informações relativas à pessoa ou à organização que gerencia o nome de domínio na OVHcloud.

No entanto, você pode tentar contatar a pessoa ou organização que o gerencia seguindo as instruções de [este formulário](/links/web/contact-domain-owner).

Caso n°2 - Seu nome de domínio não está registrado na OVHcloud:

Entre em contato diretamente com o registrador (indicado nas linhas que começam com o termo `Registrar`) do seu nome de domínio para continuar suas pesquisas. De fato, se o nome de domínio não estiver registrado na OVHcloud, não seremos capazes de acompanhá-lo nesse assunto.

///

/// details | Não consigo contatar a pessoa que gerencia meu nome de domínio, o que fazer?

Primeiramente, realize uma consulta [WHOIS](/links/web/domains-whois) para verificar se você está declarado como titular do nome de domínio.

Caso n°1 - Você está declarado como titular do nome de domínio:

Realize uma [procedimento de recuperação de contatos](/links/transversal/procedure-contact-change) para que seu nome de domínio seja totalmente gerenciado no seu [Área de Cliente OVHcloud](/links/manager). Assim, você não precisará mais contatar a pessoa que gerenciava anteriormente seu nome de domínio.

Caso n°2 - Você não está declarado como titular do nome de domínio:

De acordo com o **R**egulamento **G**eral sobre a **P**roteção de **D**ados (**RGPD**), a OVHcloud não poderá fornecer informações relativas à pessoa ou à organização que gerencia o nome de domínio na OVHcloud.

No entanto, você pode tentar contatar a pessoa ou organização que o gerencia seguindo as instruções de [este formulário](/links/web/contact-domain-owner).

///

/// details | Posso vender meu nome de domínio?

Atualmente, a OVHcloud não oferece suporte diretamente ao processo de venda de nomes de domínio já registrados. Não oferecemos esse tipo de serviço.

No entanto, se você deseja colocar seu nome de domínio à venda em um mercado secundário, entre em contato com um dos nossos parceiros a seguir?

- [Afternic](https://www.afternic.com).
- [Sedo](https://sedo.com).

Se você deseja vender seu nome de domínio, pode adicioná-lo a essas plataformas. Uma vez adicionado, os fornecedores autorizados oferecerão seu nome de domínio ao preço que você definir em uma das plataformas acima.

///

## Zona DNS

> [!primary]
>
> A modificação de uma zona DNS é uma operação delicada e pode causar interrupções nos serviços associados ao seu nome de domínio (alojamento web, e-mail, etc.). Em caso de dúvida, não hesite em contatar um [provedor especializado](/links/partner).

/// details | O que é uma zona DNS?

A zona DNS de um nome de domínio contém uma configuração aplicável a este último. Ela é composta por informações técnicas, chamadas *registros DNS*. A zona DNS funciona como um centro de encaminhamento, direcionando o tráfego para os serviços corretos associados ao domínio.

Você pode, por exemplo, especificar:

- O endereço IP (registros DNS do tipo *A* e *AAAA*) da sua alojamento web para exibir seu site com seu nome de domínio.
- Os servidores de e-mail (registros DNS do tipo *MX*) para os quais seu nome de domínio deve redirecionar os e-mails que recebe.
- Informações relacionadas à segurança / autenticação dos seus serviços (alojamento web, servidor web, servidor de e-mail, etc.) associados ao seu nome de domínio (registros DNS do tipo *SPF*, *DKIM*, *DMARC*, etc.).

Uma zona DNS é hospedada / registrada em **servidores DNS**. Esses **servidores DNS** devem ser declarados junto ao registrador do nome de domínio para utilizar a zona DNS que eles hospedam.

> [!success]
>
> Encontre todos os detalhes no nosso guia «[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)».

///

/// details | O que é um registro DNS?

Os registros DNS são utilizados, por exemplo, para:

- Associar um nome de domínio a um endereço IP, permitindo que os usuários acessem um site ou um servidor remoto.
- Associar um nome de domínio a outras recursos online usando um nome de domínio (mais fácil de lembrar) em vez de um endereço IP.
- Validar configurações de associação ou segurança, incluindo para serviços de e-mail e hospedagens compartilhadas.

Existem muitos registros DNS. Cada um tem um objetivo específico na resolução DNS. Na OVHcloud, eles são divididos em três partes:

- **Campos de ponteiro**: `A`, `AAAA`, `NS`, `CNAME` e `DNAME`.
- **Campos estendidos**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` e `HTTPS`.
- **Campos de e-mail**: `MX`, `SPF`, `DKIM` e `DMARC`.

> [!success]
>
> Encontre mais detalhes nos seguintes guias:
>
> - Informações gerais:
>     - [Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)
> - Registros DNS de ponteiro:
>     - [Adicionar um registo DNS do tipo A para um domínio](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Adicionar um registo DNS do tipo AAAA para um domínio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Adicionar um registo DNS do tipo CNAME para um domínio](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Registros DNS estendidos:
>     - [Adicionar um registo DNS do tipo TXT para um domínio](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Registros DNS de e-mail:
>     - [Configurar um registo MX para a gestão dos e-mails](/pages/web_cloud/domains/dns_zone_mx)
>     - [Melhorar a segurança dos e-mails através do registo SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Melhorar a segurança dos e-mails através do registo DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Melhorar a segurança dos e-mails através do registo DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Quais são os registros DNS disponíveis em uma zona DNS OVHcloud?

Siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Zonas DNS`{.action} e escolha o domínio em causa.
3. À direita ou abaixo da tabela, clique em `Adicionar uma entrada`{.action}.

Neste momento, você visualizará todos os registros DNS que poderá adicionar via assistente de configuração OVHcloud.

Através deste assistente de configuração, você poderá adicionar os seguintes tipos de registros DNS:

- **Registos de apontamento**: `A`, `AAAA`, `NS`, `CNAME` e `DNAME`.
- **Registos estendidos**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` e `HTTPS`.
- **Registos de e-mail**: `MX`, `SPF`, `DKIM` e `DMARC`.

> [!primary]
>
> Se quiser adicionar um registro DNS que não está presente na lista, feche a janela que se abriu após clicar no botão `Adicionar uma entrada`{.action} e clique no botão `Editar em modo de texto`{.action} localizado à direita ou abaixo da tabela.
>
> Assim, você poderá adicionar manualmente o registro DNS de sua escolha.

> [!success]
>
> Encontre mais detalhes nos seguintes guias:
>
> - Informações gerais:
>     - [Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)
> - Registros DNS de ponteiro:
>     - [Adicionar um registo DNS do tipo A para um domínio](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Adicionar um registo DNS do tipo AAAA para um domínio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Adicionar um registo DNS do tipo CNAME para um domínio](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Registros DNS estendidos:
>     - [Adicionar um registo DNS do tipo TXT para um domínio](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Registros DNS de e-mail:
>     - [Configurar um registo MX para a gestão dos e-mails](/pages/web_cloud/domains/dns_zone_mx)
>     - [Melhorar a segurança dos e-mails através do registo SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Melhorar a segurança dos e-mails através do registo DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Melhorar a segurança dos e-mails através do registo DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Posso alterar os servidores DNS declarados na minha zona DNS na OVHcloud?

A modificação manual dos registros DNS do tipo NS de um nome de domínio em uma zona DNS OVHcloud não é recomendada, pois isso impediria a resolução DNS da zona DNS correspondente.

Se você quiser modificar a configuração dos registros DNS do tipo NS do seu nome de domínio, é provável que isso seja porque você deseja alterar os servidores DNS declarados para este último.

> [!primary]
>
> Para alterar os servidores DNS do seu nome de domínio na OVHcloud, uma zona DNS já deve existir nos novos servidores DNS desejados.
> Além disso, você deverá verificar na mesma zona DNS que os registros DNS do tipo NS correspondem aos servidores DNS correspondentes.

Para isso, siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Nomes de domínio`{.action} e escolha o domínio em causa.
3. Selecione o separador `Servidores DNS`{.action} quando posicionado no domínio em questão.
4. Para modificar os servidores DNS, clique no botão `Modificar os servidores DNS`{.action} localizado à direita da tabela «servidores DNS». Dependendo da resolução da sua tela, o botão pode estar abaixo da tabela.

Você poderá modificar os servidores DNS para o seu nome de domínio na página que aparece.

> [!primary]
>
> A propagação da modificação dos servidores DNS declarados para um nome de domínio pode levar até **48** horas.

Em caso de erro, convidamos você a abrir um ticket de assistência a partir do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) especificando as seguintes informações:

- Os nomes dos servidores DNS que você deseja configurar.
- A mensagem de erro encontrada.

> [!success]
>
> Encontre todos os detalhes no nosso guia «[Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)».

///

/// details | Qual é a diferença entre um registro DNS do tipo A (IPv4) e AAAA (IPv6)?

A Internet funciona desde o início dos anos 1990 seguindo a norma IPv4. Esta norma permite fornecer um endereço IP X.X.X.X (onde cada «X» é um número entre 0 e 255) a cada uma das máquinas conectadas à rede Internet (servidores, computadores, smartphones, tablets, etc.). No entanto, esta norma limita o número de dispositivos conectados à rede Internet a cerca de 4 bilhões.

Após isso, o protocolo IPv6 foi introduzido para permitir conectar até 340 sextilhões de dispositivos à rede Internet.

Como os endereços IPv4 estão agora menos disponíveis, é mais difícil adicionar novas máquinas à rede Internet com a norma IPv4. No entanto, as conexões com um endereço IPv6 são úteis apenas se, por exemplo, seu site também estiver disponível com este mesmo protocolo.

Os registros DNS do tipo A e AAAA são dois tipos de registros de recursos utilizados para associar um nome de domínio a um endereço IP.

Suas principais diferenças residem no tipo de endereço IP que eles utilizam:

- **Registro A** (também chamado de «registro de host»): Associa um nome de domínio a um endereço IPv4 (por exemplo, 213.0.113.0). Os endereços IPv4 são endereços de 32 bits, geralmente escritos em notação decimal pontilhada.
- **Registro AAAA** (também chamado de «registro A quádruplo»): Associa um nome de domínio a um endereço IPv6 (por exemplo, 2001:db8:1:1b00:213:0:113:0). Os endereços IPv6 são endereços de 128 bits, geralmente escritos em notação hexadecimal.

Em outras palavras, os registros A são utilizados para endereços IPv4, enquanto os registros AAAA são utilizados para endereços IPv6. Os dois tipos de registros são utilizados para direcionar o tráfego para um endereço IP específico, mas são utilizados para diferentes versões do protocolo Internet.

A notar que um domínio pode ter ao mesmo tempo campos A e AAAA, o que permite que ele seja acessível nos redes IPv4 e IPv6. Isso é chamado de «empilhamento duplo», uma prática comum para sites e serviços que desejam ser acessíveis aos usuários nas redes IPv4 e IPv6.

> [!success]
>
> Encontre mais detalhes nos seguintes guias:
>
> - [Adicionar um registo DNS do tipo A para um domínio](/pages/web_cloud/domains/dns_zone_a_record_creation)
> - [Adicionar um registo DNS do tipo AAAA para um domínio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
> - [Configure um endereço IPv6 para o seu website](/pages/web_cloud/web_hosting/configure_ipv6)

///

/// details | Como configurar um registro PTR para meu IP externo na OVHcloud?

Na OVHcloud, as configurações **P**oin**T**er **R**ecord (**PTR**) não podem ser gerenciadas diretamente em nossas zonas DNS.

Para configurar um registro reverse/PTR para um IP externo, entre em contato com seu **F**ornecedor de **A**cesso à **I**nternet (**FAI**) pois ele é responsável pela gestão dos registros DNS inversos dos IPs que ele aloca.

> [!success]
>
> Encontre todos os detalhes no nosso guia «[Tudo sobre registros DNS](/pages/web_cloud/domains/dns_zone_records)».

///

/// details | Como alterar o TTL padrão na minha zona DNS OVHcloud?

Siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Zonas DNS`{.action} e escolha o domínio em causa.
3. À direita ou abaixo da tabela, clique em `Modificar o TTL por predefinição`{.action}.
4. Na janela que se abre, ajuste o valor sob a menção `TTL padrão` de acordo com suas necessidades, depois clique em `Alterar`{.action}.

> [!primary]
>
> A propagação da modificação de uma zona DNS pode levar até **24** horas.

///

/// details | O que é um registro DNS do tipo SOA?

O registro DNS do tipo **S**tart **O**f **A**uthority (**SOA**) fornece um conjunto de elementos sobre a configuração DNS de um nome de domínio.

Abaixo está o resultado de uma consulta SOA para o nome de domínio `domain.tld`.

```bash
              ;; ANSWER SECTION:                                                                                                     

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300   
```

|Elemento no resultado|Descrição|Correspondência no exemplo acima|
|---|---|---|
|**NS (Name Server)**|Servidor DNS principal declarado para o nome de domínio `domain.tld`.|`dns200.anycast.me`.|
|**Email address**|Endereço de e-mail do responsável pela zona DNS.|`tech.ovh.net` (o ponto entre os termos `tech` e `ovh` deve ser substituído por um `@`).|
|**Serial number**|Número de série único que incrementa a cada modificação da zona DNS.<br>Normalmente é composto pela data da atualização no formato `YYYYMMDD` seguido do número de atualizações realizadas no dia.|`2025091801`: Aqui 2 atualizações (`00` para 1, `01` para 2, etc.) foram feitas em 18/09/2025.|
|**Refresh time**|Intervalo (em segundos) entre cada atualização dos servidores DNS secundários (componentes da rede DNS) com o servidor DNS principal.|`86400` (24 horas).|
|**Retry time**|Intervalo (em segundos) entre cada tentativa de reatualização dos parâmetros dos servidores DNS secundários (componentes da rede DNS) com o servidor DNS principal se este não responder ou estiver indisponível.|`3600` (1 hora).|
|**Expire time**|Prazo (em segundos) após o qual os servidores DNS secundários (componentes da rede DNS) deixam de responder às consultas DNS se o servidor DNS principal não se atualizar com eles.|`3600000` (1000 horas, 41,67 dias).|
|**Minimum TTL**|Duração mínima de vida (em segundos) durante a qual os registros DNS da zona DNS são armazenados em cache nos servidores DNS secundários (componentes da rede DNS).|`300` (5 minutos).|

///

<br>

/// details | Como verificar a configuração da minha zona DNS?

Aqui estão diferentes soluções para verificar a configuração de uma zona DNS:

- **Um ferramenta de verificação online**: Vários ferramentas online permitem verificar a configuração da sua zona DNS. Encontre-as diretamente através de um navegador Internet (Chrome, Edge, Firefox, Safari, etc.) digitando as palavras-chave adequadas (por exemplo: «verificar propagação DNS») em um motor de busca.

- **O comando «dig»**: Se você tem acesso a um *terminal* a partir de um sistema operacional Linux ou macOS, você pode usar o comando `dig` para verificar a configuração da sua zona DNS na rede DNS.

- **O comando «nslookup»**: O comando `nslookup` está disponível na maioria dos sistemas operacionais e também permite verificar a configuração da sua zona DNS.

- **A partir do seu espaço cliente OVHcloud**: Para isso, siga estas etapas (se a zona DNS ativa do seu nome de domínio é gerenciada pela OVHcloud):
    1. Conecte-se ao seu [Área de Cliente OVHcloud](/links/manager), depois vá para a parte `Web Cloud`{.action}.
    2. Clique no menu `Zonas DNS`{.action}, depois escolha o nome de domínio desejado.
    3. Na tabela da página que aparece, você visualizará todos os registros DNS declarados para o seu nome de domínio.

> [!success]
>
> Encontre todos os detalhes no nosso guia «[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)».

///

/// details | Como verificar a propagação das modificações feitas na minha zona DNS?

> [!primary]
>
> Antes de continuar, saiba que:
>
> - A propagação de uma modificação feita em uma zona DNS pode levar até **24** horas.
> - A propagação de uma modificação de servidores DNS para um nome de domínio pode levar até **48** horas.

Você pode, no entanto, verificar que a propagação DNS está ocorrendo corretamente usando o registro DNS do tipo **S**tart **O**f **A**uthority (**SOA**).

Primeiramente, abra um terminal compatível no seu computador, depois execute a seguinte linha de comando (substitua `domain.tld` pelo seu próprio nome de domínio):

```bash
dig domain.tld soa
```

> [!primary]
>
> Os sistemas operacionais Linux e macOS possuem nativamente um terminal compatível para executar este tipo de comando. Se você usar outro sistema operacional, como Windows, por exemplo, você deverá instalar previamente um terminal compatível para executar o comando.
>
> Além disso, saiba que existem também ferramentas disponíveis na Internet para verificar a propagação DNS.

Uma vez que o comando for executado, você obtém um resultado semelhante a este:

```bash
              ;; ANSWER SECTION:                                                                                                     

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300   
```

Neste resultado, recupere o **número de série** (no nosso exemplo: `2025091801`).

Ele tem a seguinte forma `YYYYMMDDRR` onde:

- `YYYYMMDD`: Representa a data (ano, mês e dia) da última atualização DNS propagada para o nome de domínio.
- `RR`: Representa o número de atualizações que foram realizadas na data indicada. Por exemplo, se uma única atualização foi feita em um dia, terá o valor `00`. Se 2 atualizações foram feitas no mesmo dia, terá o valor `01` e assim por diante.

Uma vez que o número de série for recuperado, siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Zonas DNS`{.action} e escolha o domínio em causa.
3. À direita ou abaixo da tabela, clique em `Editar em modo de texto`{.action}.
4. Na janela que se abre, localize a segunda linha, que, para retomar o nosso exemplo, seria equivalente a esta: `@	IN SOA dns200.anycast.me. tech.ovh.net. (2025091801 86400 3600 3600000 60)`.
5. Compare o número de série recuperado via terminal com aquele que aparece no seu espaço cliente OVHcloud.

Caso n°1 - Os dois números de série correspondem:

Isso significa que a propagação DNS está ocorrendo corretamente. Você não tem mais nada a fazer.

Caso n°2 - Os dois números de série são diferentes:

Isso significa que:

- A propagação DNS das suas modificações não está totalmente concluída (você ainda está dentro dos prazos padrão de propagação DNS). Neste caso, espere o tempo necessário para que a propagação DNS seja totalmente concluída (**24** horas para uma modificação de zona DNS e **48** horas para uma modificação dos servidores DNS), depois repita a operação.
- A propagação DNS não está ocorrendo corretamente. Neste caso, a partir da janela `Editar em modo de texto`{.action} que se abriu na etapa **4**, clique diretamente **sem fazer modificações** no botão `Seguinte`{.action}, depois em `Validar`{.action}. Uma nova propagação DNS será então iniciada.

///

/// details | Como restaurar uma zona DNS?

Siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Zonas DNS`{.action} e escolha o domínio em causa.
3. À direita ou abaixo da tabela, clique em `Ver o histórico da minha zona DNS`{.action}.
4. Na tabela da página que aparece, identifique a linha correspondente à cópia da zona DNS desejada, depois clique no ícone presente na coluna `Restaurar`{.action}. A configuração actual da zona DNS será substituída pela cópia seleccionada.

> [!primary]
>
> A propagação da modificação de uma zona DNS pode levar até **24** horas.

> [!success]
>
> Encontre todos os detalhes no nosso guia «[Gerir o histórico de uma zona DNS](/pages/web_cloud/domains/dns_zone_history)».

///

/// details | Como recuperar uma cópia da minha zona DNS?

Siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Zonas DNS`{.action} e escolha o domínio em causa.
3. À direita ou abaixo da tabela, clique em `Ver o histórico da minha zona DNS`{.action}.
4. Na tabela da página que aparece, identifique a linha correspondente à cópia da zona DNS desejada, depois clique no ícone presente na coluna `Transferir`{.action}. A cópia da zona DNS será transferida no formato *.txt*.

> [!success]
>
> Encontre todos os detalhes no nosso guia «[Gerir o histórico de uma zona DNS](/pages/web_cloud/domains/dns_zone_history)».

///

/// details | Posso criar uma zona DNS para um subdomínio?

Pode criar uma zona DNS para um subdomínio.

Para isso, siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Zonas DNS`{.action} e clique no botão `Encomendar`{.action} no canto superior direito da tabela que aparece.
3. Na página que surge, preencha o subdomínio (por exemplo: *www.domain.tld*) para o qual deseja criar uma zona DNS OVHcloud. Espere alguns instantes enquanto a ferramenta efectua verificações sobre o subdomínio.
4. Assim que a verificação for bem-sucedida, escolha se deseja activar ou não as entradas mínimas para a zona DNS que vai criar. Esta escolha não é definitiva, pois sempre poderá [editar os registos da zona DNS](/pages/web_cloud/domains/dns_zone_edit) posteriormente.
5. Uma vez efectuada a sua escolha, continue as etapas até à criação da zona DNS.

Esta zona DNS será instalada em 2 servidores DNS OVHcloud. Terá de declarar os nomes destes dois servidores na zona DNS activa do domínio do seu subdomínio (por exemplo, *www.domain.tld* é um subdomínio do domínio *domain.tld*).

Para recuperar os nomes dos 2 servidores DNS, siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Zonas DNS`{.action} e escolha o subdomínio em causa.
3. No canto superior esquerdo da página que surge, recupere os 2 nomes dos servidores DNS presentes sob a menção `Name Servers`. Estes têm uma das 2 formas seguintes:

- `dnsXXX.ovh.net` e `nsXXX.ovh.net` **ou** `dnsXXX.ovh.ca` e `nsXXX.ovh.ca` (onde cada `X` representa um número entre `0` e `9`).
- `dns200.ovh.me` e `ns200.anycast.me`.

Uma vez que tenha os 2 servidores DNS, declare-os com dois registos do tipo NS na zona DNS activa do domínio do qual provém o seu subdomínio.

Caso n°1 - A zona DNS activa do domínio do qual provém o seu subdomínio está na OVHcloud:

Siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Zonas DNS`{.action} e escolha o domínio em causa.
3. À direita ou abaixo da tabela, clique em `Adicionar uma entrada`{.action}, depois seleccione o tipo de registo DNS do tipo `NS`{.action} para declarar um servidor DNS.
4. Na janela que surge, preencha o subdomínio em causa no campo `Subdomínio *`{.action} (por exemplo, escreva **apenas** *www* se o seu domínio for *domain.tld* e o seu subdomínio completo for *www.domain.tld*). No campo `Alvo *`{.action}, preencha **apenas um** dos 2 servidores DNS.
5. Clique em `Seguinte`{.action}, depois em `Validar`{.action}.

Repita a operação para o segundo servidor DNS restante a declarar.

Caso n°2 - A zona DNS activa do domínio do qual provém o seu subdomínio não está na OVHcloud:

Terá de declarar os 2 servidores DNS para o seu subdomínio directamente junto do fornecedor DNS do seu domínio (do qual provém o seu subdomínio).

> [!primary]
>
> Nos 2 casos, a propagação da modificação de uma zona DNS pode levar até **24** horas.

> [!success]
>
> Encontre mais detalhes nos seguintes guias:
>
> - [Criar uma zona DNS da OVHcloud para um domínio](/pages/web_cloud/domains/dns_zone_create)
> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///

/// details | Como redirecionar todos os subdomínios de um mesmo nome de domínio para a mesma endereço IP?

Siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Zonas DNS`{.action} e escolha o domínio em causa.
3. À direita ou abaixo da tabela, clique em `Adicionar uma entrada`{.action}, depois seleccione o tipo de registo DNS do tipo `A`{.action} para uma IPv4 (por exemplo: `203.0.113.0`) ou do tipo `AAAA`{.action} para uma IPv6 (por exemplo: `2001:db8:1:1b00:203:0:113:0`).
4. Na janela que surge e no campo de entrada intitulado `Subdomínio *`{.action}, preencha o valor `*`. O asterisco `*` representará todos os subdomínios (por exemplo: `www.domain.tld` ou ainda `ovhcloud.domain.tld`) do seu domínio. Complete o campo `Alvo *`{.action} com o endereço IP desejado.
5. Clique em `Seguinte`{.action}, depois em `Validar`{.action}.

> [!primary]
>
> A propagação da modificação de uma zona DNS pode levar até **24** horas.

> [!success]
>
> Encontre todos os detalhes no nosso guia «[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)».

///

/// details | Posso colocar um wildcard na minha zona DNS?

É possível colocar um wildcard numa zona DNS OVHcloud.

Para isso, siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Zonas DNS`{.action} e escolha o domínio em causa.
3. À direita ou abaixo da tabela, clique em `Adicionar uma entrada`{.action}, depois seleccione o tipo de registo DNS para o qual deseja colocar um wildcard.
4. Na janela que surge e no campo de entrada intitulado `Subdomínio *`{.action}, preencha o valor `*`. O asterisco `*` representará todos os subdomínios (por exemplo: `www.domain.tld` ou ainda `ovhcloud.domain.tld`) do seu domínio. Complete os outros campos com os valores desejados.
5. Clique em `Seguinte`{.action}, depois em `Validar`{.action}.

> [!primary]
>
> A propagação da modificação de uma zona DNS pode levar até **24** horas.

> [!success]
>
> Encontre todos os detalhes no nosso guia «[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)».

///

<br>

/// details | Apaguei acidentalmente a minha zona DNS e quero restaurá-la, o que fazer?

A OVHcloud envia um e-mail contendo uma cópia da zona DNS no formato texto uma vez que a sua zona DNS é apagada, para que possa restaurá-la posteriormente, se necessário.
Este e-mail é enviado para o endereço de e-mail associado ao seu conta OVHcloud.

> [!success]
>
> Se não recebeu este e-mail, verifique na sua pasta de spam ou siga estas etapas:
>
> 1. Aceda à [Área de Cliente OVHcloud](/links/manager), clique no seu nome no canto superior direito, depois em `Aceder à minha conta`{.action}.
> 2. Na página que surge, clique no separador `E-mails recebidos`{.action}.
> 3. Na tabela que aparece e entre a lista de e-mails recebidos, clique no e-mail em questão para visualizar o conteúdo.

Para restaurar a sua zona DNS, siga estas etapas:

1. Transfira o ficheiro contendo a zona DNS a partir do e-mail recebido.
2. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
3. Clique no menu `Nomes de Domínio`{.action} e escolha o domínio em causa.
4. Selecione o separador `Zona DNS`{.action} uma vez posicionado no domínio em causa. **Se a zona DNS estiver inactiva, active-a a partir deste separador.**
5. À direita ou abaixo da tabela, clique em `Editar em modo de texto`{.action}.
6. Na janela que surge, substitua todo o conteúdo que aparece pela cópia da zona DNS apagada. Clique depois em `Seguinte`{.action}, depois em `Validar`{.action}.

> [!primary]
>
> A propagação da modificação de uma zona DNS pode levar até **24** horas.

> [!success]
>
> Encontre mais detalhes nos seguintes guias:
>
> - [Criar uma zona DNS da OVHcloud para um domínio](/pages/web_cloud/domains/dns_zone_create)
> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Gerir o histórico de uma zona DNS](/pages/web_cloud/domains/dns_zone_history)

///

/// details | Como cancelar uma solicitação de eliminação da minha zona DNS?

Para cada solicitação de eliminação de um serviço, um e-mail solicitando a confirmação da eliminação é enviado para o endereço de e-mail associado à sua conta OVHcloud.

Se não clicou no link de confirmação presente neste e-mail, fique tranquilo, a sua zona DNS não será eliminada.

No caso contrário, a eliminação está iniciada e não pode ser cancelada. A operação de eliminação pode levar até 3 dias antes de poder recolocar uma zona DNS OVHcloud para o seu nome de domínio.

///

/// details | Não consigo ativar uma zona DNS para o meu nome de domínio, o que fazer?

Esta situação ocorre quando já existe uma zona DNS para o seu nome de domínio na OVHcloud.

Siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Zonas DNS`{.action} e verifique se o nome de domínio em causa aparece.

Caso n°1 - O nome de domínio em causa aparece na lista:

Isto significa que a zona DNS do nome de domínio já existe na sua [Área de Cliente OVHcloud](/links/manager). Poderá geri-la directamente a partir daí.

Caso n°2 - O nome de domínio em causa não aparece na lista:

Isto significa que a zona DNS do nome de domínio é gerida por outro identificador de cliente OVHcloud.

De acordo com o **R**egulamento **G**eral sobre a **P**roteção de **D**ados (**RGPD**), o identificador de cliente onde se encontra a zona DNS permanecerá confidencial.

Nesta situação e se não conhecer este outro identificador de cliente, convidamo-lo a abrir um ticket de assistência a partir do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) para recuperar a gestão da zona DNS.

///

/// details | Por que não encontro o separador «GLUE» na minha Área de Cliente OVHcloud?

A funcionalidade não está disponível com todas as extensões de nomes de domínio.
Se o separador não aparecer na sua [Área de Cliente OVHcloud](/links/manager), isto significa que a opção «GLUE» não está disponível para o seu nome de domínio.

> [!success]
>
> Encontre todos os detalhes no nosso guia «[Personalizar os servidores DNS de um nome de domínio (Glue Records)](/pages/web_cloud/domains/glue_registry)».

///

## Servidores DNS

> [!primary]
>
> A modificação dos servidores DNS é uma operação sensível e pode causar uma interrupção dos serviços associados ao seu nome de domínio (alojamento web, e-mail, etc.). Em caso de dúvida, não hesite em contactar um [fornecedor especializado](/links/partner).

/// details | Como modificar os meus servidores DNS?

Siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Nomes de Domínio`{.action} e escolha o nome de domínio em causa.
3. Selecione o separador `Servidores DNS`{.action} uma vez posicionado no nome de domínio em causa.
4. Para modificar os servidores DNS, clique no botão `Modificar os servidores DNS`{.action} situado à direita da tabela «servidores DNS». Dependendo da resolução do seu ecrã, o botão pode estar abaixo da tabela.

Poderá modificar os servidores DNS para o seu nome de domínio na página que surge.

> [!primary]
>
> A propagação da modificação dos servidores DNS declarados para um nome de domínio pode levar até **48** horas.

> [!success]
>
> Encontre todos os detalhes no nosso guia «[Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)».

///

/// details | Como personalizar os meus servidores DNS?

Siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Nomes de Domínio`{.action} e escolha o nome de domínio em causa.
3. Selecione o separador `Servidores DNS`{.action} uma vez posicionado no nome de domínio em causa.
4. Para modificar os servidores DNS, clique no botão `Modificar os servidores DNS`{.action} situado à direita da tabela «servidores DNS». Dependendo da resolução do seu ecrã, o botão pode estar abaixo da tabela.

Poderá personalizar os servidores DNS para o seu nome de domínio na página que surge.

> [!primary]
>
> A propagação da modificação dos servidores DNS declarados para um nome de domínio pode levar até **48** horas.

> [!success]
>
> Encontre todos os detalhes no nosso guia «[Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)».

///

/// details | Como substituir os meus servidores DNS pelos da OVHcloud?

Siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Nomes de Domínio`{.action} e escolha o nome de domínio em causa.
3. Selecione o separador `Servidores DNS`{.action} uma vez posicionado no nome de domínio em causa.
4. Para modificar os servidores DNS, clique no botão `Modificar os servidores DNS`{.action} situado à direita da tabela «servidores DNS». Dependendo da resolução do seu ecrã, o botão pode estar abaixo da tabela.

Poderá substituir os servidores DNS para o seu nome de domínio pelos da OVHcloud na página que surge.

> [!primary]
>
> A propagação da modificação dos servidores DNS declarados para um nome de domínio pode levar até **48** horas.

> [!success]
>
> Encontre todos os detalhes no nosso guia «[Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)».

///

/// details | Na minha Área de Cliente, tenho uma mensagem de erro a indicar que não estou a utilizar os servidores DNS da OVHcloud para o meu nome de domínio, o que fazer?

Na sua [Área de Cliente OVHcloud](/links/manager), esta mensagem indica apenas que a zona DNS criada para o seu nome de domínio não é a sua zona DNS activa.

Em outras palavras, isto significa que a configuração presente nesta zona DNS não é a que está actualmente aplicada ao seu nome de domínio.

No entanto, verifique se os servidores DNS mencionados na mensagem de erro correspondem bem aos servidores DNS que deseja aplicar ao seu nome de domínio. Verifique depois a configuração da zona DNS declarada nestes mesmos servidores DNS junto do seu fornecedor DNS.

Se desejar utilizar os servidores DNS da OVHcloud para o seu nome de domínio, poderá preparar a configuração DNS da zona DNS presente na OVHcloud para que esta corresponda às suas necessidades, depois activá-la para o seu nome de domínio.

> [!success]
>
> Encontre mais detalhes nos seguintes guias:
>
> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

///

/// details | Não consigo modificar os servidores DNS de um nome de domínio a partir da minha Área de Cliente OVHcloud, o que fazer?

Isto significa que dispõe apenas da gestão da zona DNS do nome de domínio, mas não do nome de domínio em si.

Para o verificar, siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Nomes de Domínio`{.action} e verifique se o nome de domínio em causa aparece.

Caso n°1 - O nome de domínio não aparece na lista:

Isto significa que o nome de domínio não é gerido a partir da sua [Área de Cliente OVHcloud](/links/manager). Efetue uma requisição [WHOIS](/links/web/domains-whois) com este último para saber onde está registado.

Poderá depois efetuar uma das seguintes ações (se for o titular declarado no WHOIS do nome de domínio): 

- O nome de domínio está registado na OVHcloud: Poderá efetuar uma [procedimento de recuperação dos contactos](/links/transversal/procedure-contact-change) para que o seu nome de domínio seja gerido na sua [Área de Cliente OVHcloud](/links/manager).
- O nome de domínio não está registado na OVHcloud: Poderá realizar uma operação de [transferência entrante](/pages/web_cloud/domains/transfer_incoming_generic_domain) para a OVHcloud para que o seu nome de domínio seja gerido na sua [Área de Cliente OVHcloud](/links/manager).

Caso n°2 - O nome de domínio aparece na lista:

Isto significa que não dispõe dos direitos suficientes para gerir o nome de domínio a partir da sua [Área de Cliente OVHcloud](/links/manager). Efetue uma requisição [WHOIS](/links/web/domains-whois) para verificar se está bem declarado como titular do nome de domínio.

Poderá depois efetuar uma [procedimento de recuperação dos contactos](/links/transversal/procedure-contact-change) para que o seu nome de domínio seja totalmente gerido na sua [Área de Cliente OVHcloud](/links/manager).

///

## Quer saber mais? <a name="go-further"></a>

[FAQ e-mails OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Alojamentos web - FAQ](/pages/web_cloud/web_hosting/faq-web_hosting)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).