---
title: "Primeiros passos com a oferta Zimbra"
excerpt: "Descubra como começar com a sua oferta Zimbra a partir da Área de Cliente OVHcloud"
updated: 2024-10-10
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-400 {
  max-height:400px !important;
}
</style>

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

> [!warning]
>
> **Importante*
>
> A oferta Zimbra é um produto em fase beta.
>
> Só está disponível para as pessoas que tenham completado o [formulário de inscrição na fase beta](https://labs.ovhcloud.com/en/zimbra-beta/).
>
> Algumas das funcionalidades e limitações deste guia podem mudar à medida que o produto é colocado no mercado.

## Objetivo

Com a oferta Zimbra, a OVHcloud propõe-lhe uma plataforma de mensagens colaborativa open source que oferece todas as funcionalidades necessárias a uma utilização profissional. Neste guia, encontrará os elementos que permitem começar na configuração das suas contas de e-mail Zimbra.

**Saiba como começar com a oferta de e-mail Zimbra**

## Requisitos

- Ter subscrito uma conta de e-mail na nossa solução de e-mail Zimbra OVHcloud.
- Ter um [nome de domínio OVHcloud](/links/web/domains).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### Aceder à gestão do seu serviço

Para aceder ao seu serviço Zimbra, aceda a [Área de Cliente OVHcloud](/links/manager) e clique no separador `Web Cloud`{.action}. Na parte `E-mails`{.action}, clique em `Zimbra`{.action}.

![zimbra](images/zimbra_general_information.png){.thumbnail .w-400}

### Configurar o serviço Zimbra

Antes de iniciar a configuração das suas contas de e-mail Zimbra, consulte os três elementos que estruturam hierarquicamente o seu serviço Zimbra:

- [**Organização**](#organizations): permite agrupar os nomes de domínio a fim de os associar.
- [**Nome de domínio**](#domains): é indispensável para criar uma conta de e-mail. Deve gerir pelo menos um a partir da sua Área de Cliente OVHcloud e adicioná-lo ao seu serviço Zimbra.
- [**Contas de e-mail**](#emails): ao utilizar os nomes de domínio adicionados ao seu serviço Zimbra, poderá criar um endereço de e-mail.

> [!primary]
>
> A *organização* serve para representar uma entidade (uma empresa, uma associação, um projeto pessoal, etc.). Permite a separação de contas de e-mail, a aplicação de políticas de segurança específicas (funcionalidade futura) e a delegação de permissões a uma organização (funcionalidade futura). A utilização de organizações permite facilitar a navegação na sua plataforma Zimbra, bem como a sua gestão.

O diagrama abaixo resume a relação hierárquica entre os elementos acima citados.

![zimbra](images/zimbra_organization.png){.thumbnail .w-400}

### Organizações <a name="organizations"></a>

Se adicionar um grande número de nomes de domínio ao seu serviço Zimbra, poderá ser útil reagrupá-los associando-os a uma "organização". A partir do seu serviço Zimbra, clique em `Organization`{.action}.

![zimbra](images/zimbra_organization_tab.png){.thumbnail .w-400}

#### Criar uma organização

Para criar uma organização, clique em `Adicionar uma organização`{.action}. Defina o `Nome` da organização e o `Label da organização`, sendo este último uma breve descrição da organização que lhe permite identificar-se quando filtra a apresentação dos nomes de domínio e contas de e-mail do seu serviço Zimbra.

![zimbra](images/zimbra_organization_add.png){.thumbnail .w-400}

#### Filtrar por organização

A partir dos separadores `Organização`{.action}, `Domínio`{.action} e `Contas de e-mail`{.action}, ao clicar no rótulo de uma organização, poderá criar um filtro que mostrará apenas os elementos associados a esta organização.

Poderá verificar que o filtro é aplicado quando o label é apresentado junto do nome do seu serviço Zimbra.

Para remover o filtro, basta clicar no X do filtro.

![zimbra](images/zimbra_organization_filter.png){.thumbnail .w-400}

### Domínios <a name="domains"></a>

> [!warning]
>
> Para um funcionamento ideal quando utiliza o mesmo domínio entre as ofertas OVHcloud [Exchange](/links/web/emails-hosted-exchange), [E-mail Pro](/links/web/email-pro) e Zimbra, é necessário configurar o domínio em `non-authoritative`. Para saber como configurar um domínio não autoritário numa plataforma Exchange ou E-mail Pro, consulte o nosso guia [Adicionar um domínio numa plataforma de e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain).

Neste separador, encontrará todos os domínios adicionados ao seu serviço Zimbra. Para serem adicionados, devem ser geridos a partir da Área de Cliente OVHcloud.

A tabela dos nomes de domínio dá-lhe duas informações:

- **Organização** : ela é determinada quando adiciona o domínio, e verá automaticamente a respetiva etiqueta nesta coluna.
- **Número de contas** : Aqui, encontrará todas as contas que foram criadas com o domínio em questão.

![zimbra](images/zimbra_domain_tab.png){.thumbnail .w-400}

#### Adicionar um nome de domínio

Para adicionar um domínio ao serviço Zimbra, clique no separador `Domínio`{.action} e, em seguida, clique em `Adicionar domínio`{.action}.

Selecione uma organização a partir do menu pendente e, em seguida, selecione um domínio a partir da lista (é necessário que os nomes de domínio sejam geridos na Área de Cliente OVHcloud). De seguida, clique em `Confirmar`{.action} para finalizar a adição do domínio.

![zimbra](images/zimbra_domain_add.png){.thumbnail .w-400 .h400}

### Contas de e-mail <a name="emails"></a>

A gestão dos endereços de e-mail do seu serviço Zimbra faz-se a partir do separador `Contas de e-mail`{.action}. A tabela apresenta a lista das contas de e-mail presentes no seu serviço, assim como 3 informações para cada uma delas:

- **Organização** : se o nome de domínio da sua conta de e-mail estiver associado a uma organização, encontrará automaticamente o seu label nesta coluna.
- **Oferta** : uma vez que o seu serviço Zimbra pode alojar várias ofertas Zimbra no seu seio, encontrará nesta coluna a oferta associada à sua conta de e-mail.
- **Tamanho** : Esta coluna mostra a capacidade total da conta de e-mail e a quantidade de espaço que ocupa atualmente.

No topo desta página encontrará também uma ligação para [Webmail](/links/web/email) para se poder ligar diretamente ao conteúdo da sua conta de e-mail a partir do seu browser.

![zimbra](images/zimbra_emailaccounts_tab.png){.thumbnail .w-400}

#### Criar uma conta de e-mail

Para criar uma conta de e-mail no seu serviço Zimbra, clique no separador `Contas de e-mail`{.action} e, em seguida, clique em `Criar uma conta`{.action}.

Preencha as informações apresentadas.

- **Conta de e-mail** : introduza o *nome da conta* no seu endereço de e-mail (por exemplo, nome.apelido) e *selecione um domínio* no menu pendente.

> [!warning]
>
> A escolha do nome do seu endereço de e-mail deve respeitar as seguintes condições:
>
> - Mínimo de 2 caracteres
> - Máximo de 32 caracteres
> - Nenhum caráter acentuado
> - Sem caracteres especiais, com exceção dos seguintes caracteres: `.`, `,`, `-` e `_`

- **Nome Próprio** : introduza um nome.
- **Nome** : introduza um nome.
- **Nome a apresentar** : indique o nome que pretende que figure como remetente quando envia e-mails a partir deste endereço.
- **Palavra-passe** : defina uma palavra-passe forte composta por (no mínimo) 9 caracteres, uma maiúscula, uma minúscula e um algarismo. Por razões de segurança, não utilize duas vezes a mesma palavra-passe. Escolha um que não tenha qualquer relação com as suas informações pessoais (evite mencionar, por exemplo, o seu nome, sobrenome e data de nascimento). Altere-o regularmente.

> [!warning]
>
> A escolha da palavra-passe deve respeitar as seguintes condições:
>
> - Mínimo de 10 caracteres
> - Máximo de 64 caracteres
> - Mínimo de 1 maiúscula
> - Mínimo 1 caráter especial
> - Nenhum caráter acentuado

Clique em `Confirmar`{.action} para lançar a criação da conta.

![zimbra](images/zimbra_emailaccounts_add.png){.thumbnail .w-400}

### Consultar a conta de e-mail <a name="mail-consult"></a>

Para consultar a sua conta de e-mail:

- Aceda a [webmail](/links/web/email) a partir de um browser e introduza o seu endereço de e-mail e a sua palavra-passe. Para mais informações, consulte a nossa página « [Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra) ».
- Configure um programa de mensagens no seu computador, smartphone ou tablet. Consulte a nossa página « [Configurar o seu endereço de e-mail Zimbra num programa de correio eletrónico](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_apps) ».

## Quer saber mais? <a name="go-further"></a>

[Configurar o endereço de correio eletrónico do Zimbra num software de correio eletrónico](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_apps)

[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ sobre a solução Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).