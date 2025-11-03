---
title: "Primeiros passos com a oferta Zimbra"
excerpt: "Descubra como começar com a sua oferta Zimbra a partir da Área de Cliente OVHcloud"
updated: 2025-11-04
---

<style>
.w-500 {
  max-width:500px !important;
}
</style>

## Objetivo

Com a oferta Zimbra, a OVHcloud propõe-lhe uma plataforma de mensagens colaborativa open source que oferece todas as funcionalidades necessárias a uma utilização profissional. Neste guia, encontrará os elementos que permitem começar na configuração das suas contas de e-mail Zimbra.

**Saiba como começar com a oferta de e-mail Zimbra**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/q8QCtcXRbME?si=bAjQhzr-PQ--3Aj7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Requisitos

- Ter subscrito uma conta de e-mail na nossa solução de e-mail Zimbra OVHcloud.
- Ter um [nome de domínio OVHcloud](/links/web/domains).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

**Índice**

- [Aceder à interface de gestão do serviço](#zimbra-access)
- [Configurar o serviço Zimbra](#zimbra-conf)
- [Organizações](#organizations)
    - [Criar uma organização](#organizations-create)
    - [Filtrar por organização](#organizations-filters)
- [Domínios](#domains)
    - [Adicionar domínio](#domains-add)
    - [Editar um domínio](#domains-modify)
- [Contas de e-mail](#emails)
    - [Criar uma conta de e-mail](#emails-create)
    - [Alterar a oferta](#emails-offer)
- [Consultar a respetiva conta de e-mail](#emails-consult)
- [Reencaminhamentos](#redirections)
- [alias](#alias)
- [Respostas automáticas](#autoreply)

### Aceder à gestão do seu serviço <a name="zimbra-access"></a>

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
1. Aceda à secção `Web Cloud`{.action}.
1. Clique em `Zimbra Mail`{.action}.

![zimbra](images/zimbra_general_information.png){.thumbnail .w-500}

### Configurar o serviço Zimbra <a name="zimbra-conf"></a>

Antes de iniciar a configuração das suas contas de e-mail Zimbra, consulte os três elementos que estruturam hierarquicamente o seu serviço Zimbra:

- [**Organização**](#organizations): permite agrupar os nomes de domínio a fim de os associar.
- [**Nome de domínio**](#domains): é indispensável para criar uma conta de e-mail. Deve gerir pelo menos um a partir da sua Área de Cliente OVHcloud e adicioná-lo ao seu serviço Zimbra.
- [**Contas de e-mail**](#emails): ao utilizar os nomes de domínio adicionados ao seu serviço Zimbra, poderá criar um endereço de e-mail.

> [!primary]
>
> A *organização* serve para representar uma entidade (uma empresa, uma associação, um projeto pessoal, etc.). Permite a separação de contas de e-mail, a aplicação de políticas de segurança específicas (funcionalidade futura) e a delegação de permissões a uma organização (funcionalidade futura). A utilização de organizações permite facilitar a navegação na sua plataforma Zimbra, bem como a sua gestão.

O diagrama abaixo resume a relação hierárquica entre os elementos acima citados.

![zimbra](images/zimbra_organization.png){.thumbnail .w-500}

### Organizações <a name="organizations"></a>

Se adicionar um grande número de nomes de domínio ao seu serviço Zimbra, poderá ser útil reagrupá-los associando-os a uma «organização». A partir do seu serviço Zimbra, clique em `Organization`{.action}.

![zimbra](images/zimbra_organization_tab.png){.thumbnail .w-500}

#### Criar uma organização <a name="organizations-create"></a>

Para criar uma organização, clique em `Adicionar uma organização`{.action}. Defina o `Nome` da organização e o `Label da organização`, sendo este último uma breve descrição da organização que lhe permite identificar-se quando filtra a apresentação dos nomes de domínio e contas de e-mail do seu serviço Zimbra.

![zimbra](images/zimbra_organization_add.png){.thumbnail .w-500}

#### Filtrar por organização <a name="organizations-filters"></a>

A partir dos separadores `Organização`{.action}, `Domínio`{.action} e `Contas de e-mail`{.action}, ao clicar no rótulo de uma organização, poderá criar um filtro que mostrará apenas os elementos associados a esta organização.

Poderá verificar que o filtro é aplicado quando o label é apresentado junto do nome do seu serviço Zimbra.

Para remover o filtro, basta clicar no X do filtro.

![zimbra](images/zimbra_organization_filter.png){.thumbnail .w-500}

### Domínios <a name="domains"></a>

> [!warning]
>
> Para um funcionamento ideal quando utiliza o mesmo domínio entre as ofertas OVHcloud [Exchange](/links/web/emails-hosted-exchange), [E-mail Pro](/links/web/email-pro) e Zimbra, é necessário configurar o domínio em `non-authoritative`. Para saber como configurar um domínio não autoritário numa plataforma Exchange ou E-mail Pro, consulte o nosso guia [Adicionar um domínio numa plataforma de e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain).

Neste separador, encontrará todos os domínios adicionados ao seu serviço Zimbra. Para serem adicionados, devem ser geridos a partir da Área de Cliente OVHcloud.

A tabela dos nomes de domínio dá-lhe duas informações:

- **Organização**: ela é determinada quando adiciona o domínio, e verá automaticamente a respetiva etiqueta nesta coluna.
- **Número de contas**: Aqui, encontrará todas as contas que foram criadas com o domínio em questão.

![zimbra](images/zimbra_domain_tab.png){.thumbnail .w-500}

#### Adicionar um nome de domínio <a name="domains-add"></a>

> [!warning]
>
> É necessário [criar uma organização](#organisations) para poder adicionar um domínio ao serviço Zimbra.

Para adicionar um domínio ao serviço Zimbra, clique no separador `Domínio`{.action} e, em seguida, clique em `Adicionar domínio`{.action}.

Selecione uma organização no menu suspenso e, em seguida, selecione uma das duas opções seguintes:

- **Selecionar um domínio na lista** (domínio interno): nesta lista, encontrará os domínios que pode gerir a partir da Área de Cliente OVHcloud.
- **Introduzir um domínio não gerido pela sua conta OVHcloud** (domínio externo): indique um domínio que não é gerido na Área de Cliente OVHcloud ou que se encontra registado noutro agente registador e cuja gestão é da sua responsabilidade.

Selecione o separador correspondente à sua escolha:

> [!tabs]
> **Domínio interno**
>>
>> Selecione um domínio na lista gerido a partir da Área de Cliente OVHcloud.
>>
>> ![zimbra](images/zimbra_domain_add_internal01.png){.thumbnail .w-500}
>>
>> Para configurar a zona DNS, selecione uma das duas opções seguintes:
>>
>> - **Configuração recomendada**: a sua zona DNS será configurada automaticamente. Esta opção é adequada se não configurou uma oferta de e-mail no seu domínio.
>> - **Definições personalizadas**: se já configurou um serviço de e-mail no seu domínio, pode optar por elementos que lhe interessem.
>>    - *Configurar o registo MX automaticamente*: permite introduzir automaticamente os servidores de receção OVHcloud (aplica-se a todos os serviços de e-mail OVHcloud).
>>    - *Configurar o registo SPF automaticamente*: permite introduzir automaticamente o registo que autoriza os servidores de e-mail de envio da OVHcloud a reencaminhar os seus e-mails. Este registo é válido para o conjunto das ofertas de e-mail OVHcloud.
>>    - *Configurar o registo DKIM automaticamente*: permite introduzir automaticamente os registos necessários para autenticar os seus envios de e-mails.
>>    - *Configurar o registo SRV automaticamente* : permite a configuração automática dos parâmetros de uma conta de correio electrónico quando a adiciona num software de mensagens (Outlook, Mail para Mac, Thunderbird, etc.).
>>
>> ![zimbra](images/zimbra_domain_add_internal02.png){.thumbnail .w-500}
>>
>> Clique em `Confirmar`{.action} para finalizar a adição do seu domínio e lançar o processo de configuração.
>>
> **Domínio externo**
>>
>> Introduza um domínio que não seja gerido na Área de Cliente. Certifique-se de que tem acesso para modificar a zona DNS do domínio em questão.
>>
>> Clique em `Confirmar`{.action}
>>
>> ![zimbra](images/zimbra_domain_add_external01.png){.thumbnail .w-500}
>>
>> Quando se abrir a janela abaixo, é necessário introduzir este registo CNAME na zona DNS do domínio para que o mesmo seja validado na plataforma Zimbra.
>>
>> ![zimbra](images/zimbra_domain_add_external02.png){.thumbnail .w-500}
>>
>> > [!warning]
>> >
>> > Após 48 horas, se o CNAME não estiver visível na zona DNS, a operação é anulada. Será necessário reiniciar a operação.

#### Modificar um nome de domínio <a name="domains-modify"></a>

Pode alterar o seu nome de domínio para alterar a sua organização ou verificar os seus registos DNS associados.

No separador `Domínio`{.action} do seu serviço Zimbra, clique no ícone «&#8285;» à direita do domínio em causa para ver as opções.

![zimbra](images/zimbra_domain_modify01.png){.thumbnail .w-500}

- Clique em `Configurar`{.action} para modificar a organização associada ao seu domínio.
- Clique em `Diagnósticos`{.action} para apresentar a interface de diagnóstico dos registos DNS do domínio. É necessário garantir que nenhum alerta é apresentado para cada um dos registos DNS mencionados nos separadores. Siga as instruções detalhadas em cada separador que menciona um alerta para configurar os registos DNS:
    - **MX**: indispensável para a receção dos seus e-mails.
    - **SPF**: segurança exigida pela maioria dos servidores de e-mail de destino para legitimar os servidores de envio de e-mail da OVHcloud com o seu nome de domínio.
    - **DKIM**: permite implementar um sistema de assinatura para cada e-mail enviado pelo seu serviço Zimbra. A assinatura é verificada pelo destinatário graças à chave pública visível na sua zona DNS.
     - **SRV** : Facilita a configuração da sua conta Zimbra quando a configura em um software de mensagens (Outlook, Mail para Mac, Thunderbird, etc.).

![zimbra](images/zimbra_domain_modify02.png){.thumbnail .w-500}

### Contas de e-mail <a name="emails"></a>

A gestão dos endereços de e-mail do seu serviço Zimbra faz-se a partir do separador `Contas de e-mail`{.action}. A tabela apresenta a lista das contas de e-mail presentes no seu serviço, assim como 3 informações para cada uma delas:

- **Organização**: se o nome de domínio da sua conta de e-mail estiver associado a uma organização, encontrará automaticamente o seu label nesta coluna.
- **Oferta**: uma vez que o seu serviço Zimbra pode alojar várias ofertas Zimbra no seu seio, encontrará nesta coluna a oferta associada à sua conta de e-mail.
- **Tamanho**: Esta coluna mostra a capacidade total da conta de e-mail e a quantidade de espaço que ocupa atualmente.

No topo desta página encontrará também uma ligação para [Webmail](/links/web/email) para se poder ligar diretamente ao conteúdo da sua conta de e-mail a partir do seu browser.

![zimbra](images/zimbra_emailaccounts_tab.png){.thumbnail .w-500}

#### Criar uma conta de e-mail <a name="emails-create"></a>

Para criar uma conta de e-mail no seu serviço Zimbra, clique no separador `Contas de e-mail`{.action} e, em seguida, clique em `Criar uma conta`{.action}.

Preencha as informações apresentadas.

- **Conta de e-mail**: introduza o *nome da conta* no seu endereço de e-mail (por exemplo, nome.apelido) e *selecione um domínio* no menu pendente.

> [!warning]
>
> A escolha do nome do seu endereço de e-mail deve respeitar as seguintes condições:
>
> - Mínimo de 2 caracteres.
> - Máximo de 32 caracteres.
> - Nenhum caráter acentuado.
> - Sem caracteres especiais, com exceção dos seguintes caracteres: `.`, `+`, `-` e `_`.

- **Nome Próprio**: introduza um nome.
- **Nome**: introduza um nome.
- **Nome a apresentar**: indique o nome que pretende que figure como remetente quando envia e-mails a partir deste endereço.
- **Palavra-passe**: defina uma palavra-passe forte composta por (no mínimo) 9 caracteres, uma maiúscula, uma minúscula e um algarismo. Por razões de segurança, não utilize duas vezes a mesma palavra-passe. Escolha um que não tenha qualquer relação com as suas informações pessoais (evite mencionar, por exemplo, o seu nome, sobrenome e data de nascimento). Altere-o regularmente.

> [!warning]
>
> A escolha da palavra-passe deve respeitar as seguintes condições:
>
> - Mínimo de 10 caracteres.
> - Máximo de 64 caracteres.
> - Mínimo de 1 maiúscula.
> - Mínimo 1 caráter especial.
> - Nenhum caráter acentuado.

Clique em `Confirmar`{.action} para lançar a criação da conta.

![zimbra](images/zimbra_emailaccounts_add.png){.thumbnail .w-500}

### Alterar a oferta <a name="emails-offer"></a>

É possível alterar a oferta de qualquer conta Zimbra para uma oferta superior ou inferior.

1. Inicie sessão na sua [área de cliente OVHcloud](/links/manager).
1. Dirija-se à secção `Web Cloud`{.action}.
1. Clique em `Zimbra Mail`{.action}.
1. Clique em `Compte email`{.action}.
1. À direita da conta de correio electrónico para a qual pretende passar para uma oferta superior, clique em `⁝`{.action}.
1. Clique em `Changer d'offre`{.action}.

![Zimbra](images/zimbra-change-offer.png){.thumbnail .w-500}

> [!warning]
>
> Antes de passar para uma oferta inferior, certifique-se dos seguintes pontos :
>
> - Nenhum ficheiro está armazenado no seu volume de armazenamento « Breifcase » se mudar para a oferta STARTER.
> - O conteúdo da sua conta de correio electrónico deve ser inferior a 15 Go se mudar para a oferta STARTER.

### Consultar a conta de e-mail <a name="mail-consult"></a>

Para consultar a sua conta de e-mail:

- Aceda a [webmail](/links/web/email) a partir de um browser e introduza o seu endereço de e-mail e a sua palavra-passe. Para mais informações, consulte a nossa página «[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)».
- Configure um programa de mensagens no seu computador, smartphone ou tablet. Consulte a nossa página «[Configurar o seu endereço de e-mail Zimbra num programa de correio eletrónico](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)».

### Reencaminhamentos <a name="redirections"></a>

Para criar um reencaminhamento num endereço de e-mail Zimbra, aceda a [webmail](/links/web/email).
Para criar um reencaminhamento, são utilizadas regras da caixa de entrada, conhecidas «filtros» no webmail. Estas regras, que se aplicam quando recebemos um e-mail, permitem a reencaminhamento de um e-mail.

Para reencaminhar os e-mails da sua conta Zimbra para outro endereço de e-mail, vamos aplicar uma regra de transferência. Siga os separadores abaixo para configurar o reencaminhamento.

> [!primary]
>
> No nosso exemplo abaixo, todos os e-mails recebidos são reencaminhados para outro endereço de e-mail. Para percebermos o exemplo nas capturas de ecrã, acedemos a **zimbra@mydomain.ovh** e desejamos reencaminhar os e-mails desta conta para o endereço **address@exemplo.com**.

> [!tabs]
> **Etapa 1**
>>
>> Clique no botão &#9881; no canto superior direito da sua janela de webmail, clique em `Configurações`{.action}.
>>
>> ![zimbra](images/zimbra_settings01.png){.thumbnail .w-500}
>>
> **Etapa 2**
>>
>> Clique na secção `Filtros`{.action} a partir da janela de parâmetros e, a seguir, clique no botão `Adicionar um filtro`{.action}.
>>
>> ![zimbra](images/zimbra_redirection02.png){.thumbnail .w-500}
>>
> **Etapa 3**
>>
>> - Clique em <u>Modo avançado</u> no canto superior direito para implementar esta regra.
>> - Dê um nome ao seu filtro na caixa `Nome do filtro`.
>> - Deixe o menu suspenso em `tudo` na frase «Se uma mensagem de entrada reúne ... dessas condições».
>> - No primeiro menu suspenso das regras, escolha `Para` (To), deixe `contém` (contains) e, em seguida, insira o endereço de e-mail no qual você está conectado na caixa à direita.
>> - Sob a menção «Então» (Then), selecione `Para a frente` (Forward to) no menu pendente e, em seguida, insira o endereço de e-mail de destino.
>> - Clique em `+ Adicionar uma ação`{.action} (Add an action) abaixo e selecione `Manter na caixa de entrada` (Keep in Inbox).
>> - Clique em `Salvar`{.action} a partir da janela do seu filtro e também a partir da janela dos parâmetros.
>>
>> ![zimbra](images/zimbra_redirection03.png){.thumbnail .w-500}
>>

Para mais informações sobre a utilização do webmail Zimbra, consulte o guia «[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)».

### alias <a name="alias"></a>

Criar um alias para o seu endereço de e-mail permite-lhe comunicar um endereço «máscara» aos seus contactos, sem ter de comunicar o seu endereço de e-mail pessoal ao remetente.

A criação de um alias é feita a partir da [Área de Cliente OVHcloud](/links/manager). Clique nas etapas abaixo:

> [!tabs]
> **Etapa 1**
>>
>> - Clique no separador `Contas de e-mail`{.action} do seu serviço Zimbra.
>> - Clique no botão &#8942; da conta de e-mail em questão.
>> - Clique em `Modificar`{.action}.
>>
>> ![zimbra](images/zimbra_alias01.png){.thumbnail .w-500}
>>
> **Etapa 2**
>>
>> Aparece a janela de configuração da sua conta de e-mail. Clique no separador `Alias`{.action} acima.
>>
>> ![zimbra](images/zimbra_alias02.png){.thumbnail .w-500}
>>
> **Etapa 3**
>>
>> A janela seguinte contém a lista dos alias que pode associar à conta em questão. Clique no botão `Criar um alias`{.action}.
>>
>> ![zimbra](images/zimbra_alias03.png){.thumbnail .w-500}
>>
> **Etapa 4**
>>
>> Defina o endereço do seu alias e selecione um dos nomes de domínios associados ao seu serviço Zimbra.
>>
>> ![zimbra](images/zimbra_alias04.png){.thumbnail .w-500}
>>

### Respostas automáticas <a name="autoreply"></a>

Quando tiver de se ausentar e não conseguir processar as suas mensagens de correio eletrónico, pode configurar uma mensagem de ausência. Siga os passos abaixo:

- Clique no botão &#9881; no canto superior direito da sua janela de webmail, e clique em `Configurações`{.action}.

![zimbra](images/zimbra_settings01.png){.thumbnail .w-500}

- Clique na secção `Ausente da Área de Trabalho` na janela de configurações.
- Selecione a caixa «Ativar resposta automática durante essas datas (incluídas)».
- No início da ausência, preencha a data «Do».
- Desmarque a caixa «Sem data de término» se quiser determinar uma data de término de ausência e escolha-a.
- No quadro, indique a sua mensagem de ausência.
- Clique em `Guardar`{.action} para finalizar a implementação da sua mensagem de ausência.

![zimbra](images/zimbra_autoreply01.png){.thumbnail .w-500}

Para mais informações sobre a utilização do webmail Zimbra, consulte o guia «[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)»

## Quer saber mais? <a name="go-further"></a>

[Configurar o endereço de correio eletrónico do Zimbra num software de correio eletrónico](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ sobre a solução Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).