---
title: 'Utilizar os alias e reencaminhamentos de e-mail'
excerpt: 'Saiba como gerir os seus alias e reencaminhamentos de e-mail'
updated: 2025-06-03
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

## Objetivo

Encontre neste guia diferentes informações e dicas relativas à configuração dos seus **reencaminhamentos** e **alias** emails, por exemplo para reenviar e-mails recebidos num endereço A para um endereço B.

![emails](images/schema-redirect00.png){.thumbnail .w-640}

**Saiba como gerir os seus alias e reencaminhamentos de e-mail.**

/// details | O que é um reencaminhamento de e-mail?

Um reencaminhamento permite modificar o trajeto inicial de um e-mail para um ou vários outros endereços de e-mail.

Por exemplo, ao enviar um e-mail para **contact@mydomain.ovh**, este deverá ser igualmente enviado para **john.smith@otherdomain.ovh**. Isto permite transmitir automaticamente um e-mail destinado a **contact@mydomain.ovh** para **john.smith@otherdomain.ovh**.

///

/// details | O que é um alias de e-mail?

Contrariamente ao reencaminhamento, o endereço de e-mail associado ao alias não é um endereço que se possa consultar, trata-se de uma "máscara".

Criar um alias para o seu endereço de e-mail permite-lhe comunicar um endereço "máscara" aos seus contactos, sem ter de comunicar o seu endereço de e-mail pessoal ao remetente. Um endereço de e-mail pode ter vários alias.

Por exemplo, o seu endereço de e-mail é **john.smith@mydomain.ovh** e o seu alias **information@mydomain.ovh**. Pode então comunicar aos seus contactos o endereço **information@mydomain.ovh** e receber os seus e-mails em **john.smith@mydomain.ovh**, sem que o remetente tenha conhecimento de **john.smith@mydomain.ovh**.

///

/// details | Reencaminhamento e alias em imagem <a name="diagram"></a>

Clique nos separadores seguintes para obter explicações ilustradas sobre o funcionamento dos alias e reencaminhamentos.

- `From` designa o endereço do remetente
- `To` designa o endereço do destinatário
- `Redirect to` designa o endereço de e-mail de reencaminhamento que foi configurado.

> [!tabs]
> **1. O reencaminhamento simples**
>>
>> O e-mail é reencaminhado para o endereço de reencaminhamento e o destinatário original não recebe o e-mail.
>>
>> ![emails](images/schema-redirect01.png){.thumbnail .w-640}
>>
> **2. O reencaminhamento com cópia local**
>>
>> O e-mail é enviado para o destinatário original e para o endereço de reencaminhamento.
>>
>> ![emails](images/schema-redirect02.png){.thumbnail .w-640}
>>
> **3. O alias e-mail**
>>
>> O email é endereçado ao alias que o reencaminha para o destinatário no qual o alias foi configurado. A menção `Received by` designa o endereço de e-mail que recebe o e-mail.
>>
>> ![emails](images/schema-redirect03.png){.thumbnail .w-640}
>>

> [!primary]
>
> Tenha em atenção que é possível configurar um reencaminhamento para vários endereços de e-mail. No entanto, isto implica criar um de cada vez os reencaminhamentos para cada destinatário.

///

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Ter uma solução de e-mail OVHcloud previamente configurada, entre as seguintes:
    - **MX Plan** proposta com os nossos [oferta de alojamento web](/links/web/hosting) ou incluída num [alojamento gratuito 100M](/links/web/domains-free-hosting).
    - [Exchange](/links/web/emails).
    - [Email Pro](/links/web/email-pro).
    - [Zimbra](/links/web/emails-zimbra).


## Instruções

Este guia diz respeito ao conjunto das nossas ofertas de e-mail. Em função da oferta, a gestão dos alias e dos reencaminhamentos pode ser feita a partir da Área de Cliente OVHcloud ou a partir do webmail. Para maior clareza, mencionamos os tipos de ofertas de e-mail em causa em cada capítulo deste guia. Eis os diferentes tipos de ofertas de e-mail OVHcloud:

- **MX Plan Roundcube**: Corresponde à oferta MX Plan que utiliza o webmail Roundcube.
- **MX Plan Zimbra**: Corresponde à oferta MX Plan que utiliza o webmail Zimbra.
- **MX Plan OWA**: Corresponde à oferta MX Plan utilizando o webmail Outlook Web App (OWA).
- **Exchange**: Aplicável às ofertas **Hosted**, **Private** e **Dedicated*** Exchange que utilizam o webmail Outlook Web App (OWA).
- **Email Pro**: Oferta de e-mail baseado em Exchange que utiliza o webmail Outlook Web App (OWA).
- **Zimbra**: Oferta dedicada que utiliza o webmail Zimbra.
- **Redirect**: Esta oferta gratuita está automaticamente disponível se dispuser de um domínio na Área de Cliente sem que tenha recebido uma oferta por e-mail. Permite criar reencaminhamentos de e-mail.

> [!primary]
>
> A tecnologia de e-mail da oferta MX Plan pode variar em função da data de ativação da sua oferta ou se ocorreu recentemente uma migração. Esta tecnologia distingue-se notavelmente pela interface do seu webmail. Para o identificar a partir da Área de Cliente, siga este procedimento:
>
> 1. Aceda à [Área de Cliente OVHcloud](/links/manager).
> 1. Aceda à secção `Web Cloud`{.action}.
> 1. Clique em `MX Plan`{.action}.
> 1. Selecione o domínio em questão.
> 1. O separador `Informações gerais`{.action} é selecionado por predefinição.
> 1. Registe a tecnologia utilizada com a legenda **Webmail** na caixa `Subscrição`.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-640}
>

**Índice**

- [Criar um reencaminhamento](#redirect)
    - [A partir da Área de Cliente](#redirect-manager)
        - [MX Plan / redirect](#redirect-manager-mxplan)
    - [Através do webmail](#redirect-webmail)
        - [Outlook Web App (OWA)](#redirect-webmail-owa)
        - [Zimbra](#redirect-webmail-zimbra)
- [Eliminar um reencaminhamento](#redirect-delete)
    - [MX Plan através da Área de Cliente](#redirect-delete)
    - [Outlook Web App (OWA)](#redirect-delete-owa)
    - [Zimbra](#redirect-delete-zimbra)
- [Criar um alias](#alias)
    - [Exchange / E-mail Pro / MX Plan](#alias-exchange-emp-mxplan)
    - [MX Plan Roundcube](#alias-mxplan-roundcube)
    - [Zimbra](#alias-mxplan-roundcube)
- [Eliminar um alias](#alias-delete)
    - [Exchange / E-mail Pro / MX Plan](#alias-delete-exchange-emp-mxplan)
    - [MX Plan Roundcube](#alias-delete-mxplan-roundcube)
    - [Zimbra](#alias-delete-zimbra)

### Criar um reencaminhamento <a name="redirect"></a>

#### A partir da Área de Cliente <a name="redirect-manager"></a>

Atualmente, apenas as ofertas **MX plan** e **Redirect** dispõem de uma interface de gestão dos reencaminhamentos através da Área de Cliente OVHcloud.

##### MX Plan / redirect <a name="redirect-manager-mxplan"></a>

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
1. Aceda à secção `Web Cloud`{.action}.
1. Clique em `MX Plan`{.action}.
1. Selecione o domínio em questão.

No nosso exemplo, trata-se de um **reencaminhamento com cópia local** (ver [esquema 2](#diagram) no início deste guia). Se for necessário, clique no separador correspondente à tecnologia webmail utilizada pelo MX Plan e siga as etapas abaixo:

> [!tabs]
> **MX Plan Roundcube / MX Plan Outlook Web App / Redirect**
>>
>> Por predefinição, está no separador `Informações gerais`{.action} do seu MX Plan. Clique no separador `E-mails`{.action} e, a seguir, no botão `Gestão dos reencaminhamentos`{.action}.
>>
>> ![emails](images/mxplan-legacy-1.png){.thumbnail .w-640}
>>
>> Aparecerá o quadro dos reencaminhamentos ativos. À direita, clique no botão `Adicionar um reencaminhamento`{.action}.
>>
>> ![emails](images/mxplan-legacy-2.png){.thumbnail .w-640}
>>
>> No formulário `Criar um reencaminhamento`, complete os seguintes elementos:
>>
>> - **Do endereço**: Introduza aqui o endereço de e-mail que deseja reencaminhar.
>> - **Para o endereço**: Introduza aqui o endereço de destino do seu reencaminhamento. Pode ser um dos seus endereços de e-mail OVHcloud ou um endereço de e-mail externo.
>> - **Escolha o modo de cópia**: Escolha se deseja:
>>      - **Manter uma cópia do e-mail na OVHcloud**: Receber o e-mail no seu endereço principal bem como o endereço de reencaminhamento (ver [esquema 2](#diagram) no início deste guia).
>>      - **Não manter uma cópia do e-mail**: Reenviar diretamente para o endereço de reencaminhamento sem que o endereço principal o receba (ver [esquema 1](#diagram) no início deste guia).
>>
>> Clique em `Validar`{.action} para confirmar a adição deste reencaminhamento.
>>
>> ![emails](images/mxplan-legacy-3.png){.thumbnail .w-640}
>>
>> > [!primary]
>> >
>> > Para alterar o endereço de destino ou eliminar um reencaminhamento, clique em `...`{.action}, no lado direito do reencaminhamento em causa.
>>
> **MX Plan Zimbra**
>>
>> Por predefinição, está no separador `Informações gerais`{.action} do seu MX Plan. Clique no separador `Reencaminhamentos`{.action}.
>>
>> Aparecerá o quadro dos reencaminhamentos ativos. À direita, clique no botão `Adicionar um reencaminhamento`{.action}.
>>
>> ![emails](images/mxplan-zimbra-1.png){.thumbnail .w-640}
>>
>> No formulário `Criar um reencaminhamento`, complete os seguintes elementos:
>>
>> - **Do endereço**: Introduza aqui o endereço de e-mail que deseja reencaminhar.
>> - **Para o endereço**: Introduza aqui o endereço de destino do seu reencaminhamento. Pode ser um dos seus endereços de e-mail OVHcloud ou um endereço de e-mail externo.
>> - **Escolha um modo de cópia**: Escolha se deseja:
>>      - **Manter uma cópia do e-mail na OVHcloud**: Receber o e-mail no seu endereço principal bem como o endereço de reencaminhamento (ver [esquema 2](#diagram) no início deste guia).
>>      - **Não mantar uma cópia do e-mail**: Reenviar diretamente para o endereço de reencaminhamento sem que o endereço principal o receba (ver [esquema 1](#diagram) no início deste guia).
>>
>> Clique em `Validar`{.action} para confirmar a adição deste reencaminhamento.
>>
>> ![emails](images/mxplan-legacy-3.png){.thumbnail .w-640}
>>

> [!primary]
>
> Quando escolhe o modo de cópia "**Manter uma cópia do e-mail na OVHcloud**", um reencaminhamento do endereço de e-mail para si é automaticamente criado na lista dos reencaminhamentos e materializa esta cópia local.
>

#### A partir do webmail <a name="redirect-webmail"></a>

Aceda ao [webmail](/links/web/email). Introduza **o endereço de correio eletrónico** e **a palavra-passe** para iniciar sessão.

![emails](images/webmail.png){.thumbnail}

Para criar um reencaminhamento, são utilizadas regras da caixa de entrada, também conhecidas "filtros" no webmail. Estas regras, que se aplicam quando recebemos um e-mail, permitem que o e-mail recebido seja reencaminhado ou reencaminhado.

##### Outlook Web App (OWA) <a name="redirect-webmail-owa"></a>

> [!success]
>
> Este capítulo diz respeito às seguintes ofertas:
>
> - **MX Plan OWA**.
> - **Exchange**.
> - **E-mail Pro**.
>

Outlook Web App é uma interface utilizada para as nossas ofertas **Exchange**, **E-mail Pro** e uma parte das contas **MX Plan**.

Navegue pelos separadores abaixo para configurar o seu reencaminhamento através da Outlook Web App:

> [!tabs]
> **Etapa 1**
>>
>> Depois de aceder ao endereço de e-mail através do [webmail](/links/web/email), clique na roda dentada no canto superior direito e, a seguir, em `Opções`{.action}.
>>
>> ![emails](images/emails-all-01.png){.thumbnail .w-640}
>>
> **Etapa 2**
>>
>> Na janela **Opções**, na coluna da esquerda, aceda à categoria **Tratamento automático** na secção **Mail** e clique em `Regras da caixa de entrada e de arrumação`{.action}.
>>
>> ![emails](images/emails-all-02.png){.thumbnail .w-640}
>>
>> Esta janela permite gerir os reencaminhamentos e aplicar filtros ao conjunto dos e-mails recebidos.
>>
> **Etapa 3**
>>
>> Na janela de gestão das **Regras da caixa de receção**, clique no ícone `+`{.action} no canto superior esquerdo.
>>
>> ![emails](images/emails-all-03.png){.thumbnail .w-640}
>>
> **Etapa 4**
>>
>> Na nova janela que aparecerá, preencha os seguintes elementos:
>> - **Nome**: Defina o nome do reencaminhamento.
>> - **Quando a mensagem for recebida e satisfizer todas estas condições**: Se o reencaminhamento se aplicar a todas as mensagens, selecione `[Aplicar a todas as mensagens]`{.action}.
>>
>> ![emails](images/emails-all-04.png){.thumbnail .w-640}
>>
> **Etapa 5**
>>
>> Então, na mesma janela:
>>
>> **Efetuar todas as operações seguintes**: É aqui que aplica o reencaminhamento. Selecione `Transferir, reencaminhar ou enviar`{.action} e `Reencaminhar a mensagem para...`{.action}.
>>
>> ![emails](images/emails-all-05.png){.thumbnail .w-640}
>>
> **Etapa 6**
>>
>> Introduza o endereço para o qual deseja reencaminhar o e-mail antes de "**Reencaminhar o e-mail para...**" e depois clique em `Registar`{.action}. Por fim, clique em `OK`{.action} (ícone de disquete) para finalizar o reencaminhamento.
>>
>> ![emails](images/emails-all-06.png){.thumbnail .w-640}
>>

> [!primary]
>
> Para aplicar um **reencaminhamento simples** (ver [esquema 1](#diagram) no início deste guia), adicione uma regra suplementar ao seu **reencaminhamento com cópia local** a partir desta janela. Clique em `Adicionar uma ação`{.action} (quadro 1), depois em `Mover, copiar ou eliminar`{.action}, e por fim clique em `eliminar a mensagem`{.action}. Esta regra envia a mensagem diretamente para o lixo depois de reencaminhar a mensagem para o endereço final.
>
> ![emails](images/emails-all-07.png){.thumbnail .w-640}
>

##### Zimbra <a name="redirect-webmail-zimbra"></a>

> [!success]
>
> Este capítulo diz respeito às seguintes ofertas:
>
> - **MX Plan** com a menção zimbra para o webmail.
> - **Zimbra**.
>

Para reencaminhar os e-mails da sua conta Zimbra para outro endereço de e-mail, vamos aplicar uma regra de transferência.

> [!primary]
>
> No nosso exemplo abaixo, todos os e-mails recebidos são reencaminhados para outro endereço de e-mail. Para percebermos o exemplo nas capturas de ecrã, acedemos a **zimbra@mydomain.ovh** e desejamos reencaminhar os e-mails desta conta para o endereço **address@exemplo.com**.
>

Siga as etapas abaixo para configurar o reencaminhamento:

> [!tabs]
> **Etapa 1**
>>
>> Clique no botão &#9881; no canto superior direito da sua janela de webmail, clique em `Configurações`{.action}.
>>
>> ![zimbra](images/zimbra_settings01.png){.thumbnail .w-640}
>>
> **Etapa 2**
>>
>> Clique na secção `Filtros`{.action} a partir da janela de parâmetros e, a seguir, clique no botão `Adicionar um filtro`{.action}.
>>
>> ![zimbra](images/zimbra_redirection02.png){.thumbnail .w-640}
>>
> **Etapa 3**
>>
>> - Clique em <u>Modo avançado</u> no canto superior direito para implementar esta regra.
>> - Dê um nome ao seu filtro na caixa `Nome do filtro`.
>> - Deixe o menu suspenso em `todos` na frase "Se uma mensagem de entrada reúne ... dessas condições".
>> - No primeiro menu suspenso das regras, escolha `À` (To), deixe `contém` (contains) e, em seguida, insira o endereço de e-mail no qual você está conectado na caixa à direita.
>> - Sob a menção "Então" (Then), selecione `Transferir para` (Forward to) no menu pendente e, em seguida, insira o endereço de e-mail de destino.
>> - Clique em `+ Adicionar uma ação`{.action} (Add an action) abaixo e selecione `Mover para a pasta receção` (Keep in Inbox).
>> - Clique em `Guardar`{.action} a partir da janela do seu filtro e também a partir da janela dos parâmetros.
>>
>> ![zimbra](images/zimbra_redirection03.png){.thumbnail .w-640}
>>

Para mais informações sobre a utilização do webmail Zimbra, consulte o guia "[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

#### Eliminar um reencaminhamento <a name="redirect-delete"></a>

##### MX Plan através da Área de Cliente <a name="redirect-delete-mxplan"></a>

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
1. Aceda à secção `Web Cloud`{.action}.
1. Clique em `MX Plan`{.action}.
1. Selecione o domínio em questão.

Selecione o separador abaixo para a tecnologia de e-mail utilizada pelo serviço MX Plan:

> [!tabs]
> **MX Plan Roundcube / MX Plan OWA / Redirect**
>>
>> - Por defeito, aparecerá no separador `Informações gerais`{.action} do seu MX Plan.
>> - Clique no separador `E-mails`{.action} e, à direita, no botão `Gestão dos reencaminhamentos`{.action}.
>>
>>    ![emails](images/mxplan-legacy-1.png){.thumbnail .w-640}
>>
>> - Clique em `...`{.action}, à direita do reencaminhamento em causa, e depois em `Eliminar o reencaminhamento`{.action}.
>>
>>    ![emails](images/mxplan-redirect-delete01.png){.thumbnail .w-640}
>>
> **MX Plan Zimbra**
>>
>> - Por defeito, aparecerá no separador `Informações gerais`{.action} do seu MX Plan.
>> - Clique no separador `Reencaminhamentos`{.action}.
>> - Clique em `...`{.action}, à direita do reencaminhamento em causa, e depois em `Eliminar o reencaminhamento`{.action}.
>>
>>    ![emails](images/mxplan-redirect-delete02.png){.thumbnail .w-640}
>>

##### Outlook Web App (OWA) <a name="redirect-delete-owa"></a>

Aceda ao [webmail](/links/web/email). Introduza **o endereço de correio eletrónico** e **a palavra-passe** para iniciar sessão. A partir da interface do webmail OWA, siga os passos clicando nos separadores abaixo:

> [!tabs]
> **Etapa 1**
>>
>> Depois de aceder à interface do webmail OWA, clique na roda dentada no canto superior direito e, a seguir, em `Opções`{.action}.
>>
>> ![emails](images/emails-all-01.png){.thumbnail .w-640}
>>
> **Etapa 2**
>>
>> Na janela **Opções**, na coluna da esquerda, aceda à categoria **Tratamento automático** na secção **Mail** e clique em `Regras da caixa de entrada e de arrumação`{.action}.
>>
>> ![emails](images/owa-redirect-del-01.png){.thumbnail .w-640}
>>
>> Encontrará a janela que permite gerir os seus reencaminhamentos e filtros.
>>
> **Etapa 3**
>>
>> Na janela de gestão das **Regras da caixa de entrada**, clique no reencaminhamento que pretende eliminar e este deverá ser realçado. De seguida, clique no ícone da lixeira.
>>
>> ![emails](images/owa-redirect-del-02.png){.thumbnail .w-640}
>>

##### Zimbra <a name="redirect-delete-zimbra"></a>

Aceda ao [webmail](/links/web/email). Introduza **o endereço de correio eletrónico** e **a palavra-passe** para iniciar sessão. A partir da interface do webmail Zimbra, siga os passos clicando nos separadores abaixo:

> [!tabs]
> **Etapa 1**
>>
>> Depois de se conectar à interface do webmail Zimbra, clique no botão &#9881; no canto superior direito da sua janela de webmail, clique em `Configurações`{.action}.
>>
>> ![zimbra](images/zimbra_settings01.png){.thumbnail .w-640}
>>
> **Etapa 2**
>>
>> Clique na secção `Filtros`{.action} a partir da janela de parâmetros.
>>
>> ![zimbra](images/zimbra_redirect-del-01.png){.thumbnail .w-640}
>>
> **Etapa 3**
>>
>> Clique no botão `...`{.action} à direita do filtro em causa e, a seguir, clique em `Eliminar`{.action}.
>>
>> ![zimbra](images/zimbra_redirect-del-02.png){.thumbnail .w-640}
>>

### Criar um alias <a name="alias"></a>

Criar um alias para o seu endereço de e-mail permite-lhe comunicar um endereço "máscara" aos seus contactos, sem ter de comunicar o seu endereço de e-mail pessoal ao remetente.

#### Exchange / E-mail Pro / MX Plan <a name="alias-exchange-emp-mxplan"></a>

Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`. De seguida, escolha o menu em função do seu serviço de e-mail:

- **Exchange**: Aceda à secção `Microsoft`{.action}, clique em `Exchange`{.action} e selecione a plataforma em causa. Clique no separador `Contas de e-mail`{.action}.

- **E-mail Pro**: Aceda à secção `E-mail Pro`{.action}, selecione a plataforma em causa e clique no separador `Contas de e-mail`{.action}.

- **MX Plan**: Aceda à secção `MX Plan`{.action}, selecione a plataforma em causa e clique no separador `Contas de e-mail`{.action}.

Para adicionar um alias à sua conta de e-mail, siga as etapas descritas clicando sucessivamente em cada separador abaixo:

> [!tabs]
> **Etapa 1**
>>
>> Na tabela que aparece, encontrará uma coluna `Alias`.
>>
>> ![emails](images/email-alias012.png){.thumbnail .w-640}
>>
> **Etapa 2**
>>
>> Clique no botão `...`{.action} e em `Configurar os alias`{.action} (ou `Gerir os alias`{.action}).
>>
>> ![emails](images/email-alias02.png){.thumbnail .w-640}
>>
> **Etapa 3**
>>
>> Clique em `Adicionar um alias`{.action} e introduza o endereço que escolheu para o seu alias e valide a sua escolha.
>>
>> ![emails](images/email-alias03.png){.thumbnail .w-640}

#### MX Plan Roundcube <a name="alias-mxplan-roundcube"></a>

Para criar um alias numa conta de e-mail MX Plan Roundcube, deve fazê-lo da mesma forma que um reencaminhamento. Basta que identifique um endereço de e-mail que não exista no seu domínio e aponte para um endereço existente. Consulte o capítulo [MX Plan / MX redirect](#redirect-manager-mxplan) na parte "criar um reencaminhamento" a partir deste guia.

#### Zimbra <a name="alias-mxplan-roundcube"></a>

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
1. Aceda à secção `Web Cloud`{.action}.
1. Clique em `Zimbra Mail`{.action}.
1. Clique no separador `Contas de e-mail`{.action} do seu serviço Zimbra.

> [!tabs]
> **Etapa 1**
>>
>> - Clique no botão `⁝`{.action} à direita da conta de e-mail em causa.
>> - Clique em `Modificar`{.action}.
>>
>> ![zimbra](images/zimbra_alias01.png){.thumbnail .w-640}
>>
> **Etapa 2**
>>
>> Aparece a janela de configuração da sua conta de e-mail. Clique no separador `Alias`{.action} acima.
>>
>> ![zimbra](images/zimbra_alias02.png){.thumbnail .w-640}
>>
> **Etapa 3**
>>
>> A janela seguinte contém a lista dos alias que pode associar à conta em questão. Clique no botão `Criar um alias`{.action}.
>>
>> ![zimbra](images/zimbra_alias03.png){.thumbnail .w-640}
>>
> **Etapa 4**
>>
>> Defina o endereço do seu alias e selecione um dos nomes de domínios associados ao seu serviço Zimbra.
>>
>> ![zimbra](images/zimbra_alias04.png){.thumbnail .w-640}
>>

### Eliminar um alias <a name="alias-delete"></a>

#### Exchange / E-mail Pro / MX Plan <a name="alias-delete-exchange-emp-mxplan"></a>

Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`. De seguida, escolha o menu em função do seu serviço de e-mail:

- **Exchange**: Aceda à secção `Microsoft`{.action}, clique em `Exchange`{.action} e selecione a plataforma em causa. Clique no separador `Contas de e-mail`{.action}.

- **E-mail Pro**: Aceda à secção `E-mail Pro`{.action}, selecione a plataforma em causa e clique no separador `Contas de e-mail`{.action}.

- **MX Plan**: Aceda à secção `MX Plan`{.action}, selecione a plataforma em causa e clique no separador `Contas de e-mail`{.action}.

No separador `Contas de e-mail`{.action}, clique no botão `...`{.action} à direita do endereço de e-mail em causa. A seguir, clique em `Configurar os alias`{.action} (ou `Gerir os alias`{.action}).

Clique no botão `...`{.action} à direita do alias em causa, no menu de gestão dos alias. Por fim, clique em `Eliminar o alias`{.action}

![emails](images/email-alias04.png){.thumbnail .w-640}

#### MX Plan Roundcube <a name="alias-delete-mxplan-roundcube"></a>

Para eliminar um alias de uma conta de e-mail MX Plan Roundcube, deve fazê-lo da mesma forma que um reencaminhamento. Deverá chegar à gestão dos reencaminhamentos do seu serviço MX Plan.

No separador `E-mails`{.action}, clique em `Gestão dos reencaminhamentos`{.action} à direita da janela.

Clique no botão `...`{.action} à direita do reencaminhamento em causa e, a seguir, clique em `Eliminar o reencaminhamento`{.action}.

> [!warning]
>
> Não é possível modificar um reencaminhamento ou um alias. Deve eliminá-la e recriá-la.
>

![emails](images/email-del-legacy-redirect01.png){.thumbnail .w-640}

#### Zimbra <a name="alias-delete-zimbra"></a>

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
1. Aceda à secção `Web Cloud`{.action}.
1. Clique em `Zimbra Mail`{.action}.
1. Clique no separador `Contas de e-mail`{.action} do seu serviço Zimbra.

> [!tabs]
> **Etapa 1**
>>
>> - Clique no botão `⁝`{.action} à direita da conta de e-mail em causa.
>> - Clique em `Modificar`{.action}.
>>
>> ![zimbra](images/zimbra_alias01.png){.thumbnail .w-640}
>>
> **Etapa 2**
>>
>> Aparece a janela de configuração da sua conta de e-mail. Clique no separador `Alias`{.action} acima.
>>
>> ![zimbra](images/zimbra_alias02.png){.thumbnail .w-640}
>>
> **Etapa 3**
>>
>> A janela seguinte contém a lista dos alias que pode associar à conta em questão. Clique no botão `Criar um alias`{.action}.
>>
>> ![zimbra](images/zimbra_alias03.png){.thumbnail .w-640}
>>

## Quer saber mais? <a name="go-further"></a>

[Primeiros passos com a oferta MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Primeiros passos com o serviço Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Primeiros passos com o serviço Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

[Primeiros passos com a solução E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Primeiros passos com a oferta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).