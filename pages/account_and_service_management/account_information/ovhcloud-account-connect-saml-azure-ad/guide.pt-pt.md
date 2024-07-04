---
title: Ativar as ligações Entra ID SSO com a sua conta OVHcloud
excerpt: "Saiba como associar o seu Entra ID (anteriormente Azure Active Directory) à sua conta OVHcloud utilizando SAML 2.0"
updated: 2024-07-04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Pode utilizar a autenticação **SSO** (*Single Sign-On*) para se ligar à sua conta OVHcloud. Para ativar estas ligações, a sua conta e o seu Entra ID (anteriormente Azure Active Directory) devem ser configurados através do SAML (*Security Assertion Markup Language*).

**Saiba como associar a sua conta OVHcloud a um Entra ID externo.**

## Requisitos

- Ter acesso às funções de **Administrador de aplicações** e **Administrador de utilizadores** de um serviço Entra ID
- Ter uma [conta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

> [!primary]
>
> Para que um prestador de serviços (por exemplo, a sua conta OVHcloud) estabeleça uma ligação SSO com um fornecedor de identidade (por exemplo, o seu Entra ID), deve estabelecer uma relação de confiança mútua ao registar a ligação SSO em ambos os serviços.
>

### Utilizadores e grupos Entra ID

O seu Entra ID atua como fornecedor de identidade. Os pedidos de autenticação da sua conta OVHcloud só serão aceites se o tiver declarado como terceiro de confiança.

Concentremo-nos, por um momento, nas identidades do lado do fornecedor de identidade.

#### Utilizadores Entra ID

Para começar, aceda ao painel de controlo Entra ID.

![Painel de controlo Entra ID](images/azure_ad_dashboard.png){.thumbnail}

A seguir, clique em `Users`{.action} no menu à esquerda.

![Utilizador do menu Entra ID](images/azure_ad_menu_user.png){.thumbnail}

Crie tantos utilizadores quantos desejar e/ou verifique os seus utilizadores clicando em cima.

Neste exemplo, será utilizado o utilizador **John Smith**.

![Utilizador Entra ID](images/azure_ad_user.png){.thumbnail}

Quando é efetuada uma autenticação SSO, a identidade de **John Smith** é fornecida pela Entra ID à conta OVHcloud. No entanto, é necessário que essa identidade contenha pelo menos um grupo. Se nenhum grupo existir, veja abaixo como criar um grupo para adicionar **John Smith**.

#### Grupos Entra ID

Clique em `Groups`{.action} no menu à esquerda.

![Grupos de menus Entra ID](images/azure_ad_menu_groups.png){.thumbnail}

Clique em `New group`{.action} no menu superior e introduza todas as informações necessárias.

Para este exemplo, utilizar-se-á o grupo **manager@ovhcloudsaml**.

![Entra ID Group etapa 1](images/azure_ad_group_1.png){.thumbnail}

Clique no botão `Create`{.action} para apresentar todas as informações sobre este grupo.

![Entra ID Group etapa 2](images/azure_ad_group_2.png){.thumbnail}

Agora, os utilizadores que serão utilizados para a autenticação SSO devem ser adicionados a um grupo.

Neste exemplo, associemos o utilizador **John Smith** ao grupo **manager@ovhcloudsaml**.

Na interface do grupo selecionado, clique em `Members`{.action} no menu à esquerda e, a seguir, em `Add members`{.action} no menu superior.

![Entra ID Group User Assignment Passo 1](images/azure_ad_group_user_assignment_1.png){.thumbnail}

Selecione o utilizador a adicionar neste grupo e clique no botão `Select`{.action}.

![Entra ID Group User Assignment Passo 2](images/azure_ad_group_user_assignment_2.png){.thumbnail}

Agora, o utilizador é atribuído ao grupo.

Para efetuar as autenticações SSO, deve ser criada uma aplicação Entra ID.

A autenticação única deve ser configurada nesta aplicação.

### Aplicações Entra ID

Em primeiro lugar, crie uma aplicação se ela ainda não existir.

#### Criar uma aplicação Entra ID

Clique em `Enterprise applications`{.action} no menu à esquerda.

![Aplicações de menu Entra ID](images/azure_ad_menu_applications.png){.thumbnail}

Clique em `New application`{.action} no menu superior.

![Aplicações Entra ID etapa 1](images/azure_ad_applications_1.png){.thumbnail}

Clique em `Create your own application`{.action} no menu superior.

![Aplicações Entra ID etapa 2](images/azure_ad_applications_2.png){.thumbnail}

Selecione `Non-Gallery`{.action} no menu à esquerda e clique no botão `Create`{.action}.

![Aplicações Entra ID etapa 3](images/azure_ad_applications_3.png){.thumbnail}

Os detalhes da aplicação serão apresentados.

![Aplicações Entra ID etapa 4](images/azure_ad_applications_4.png){.thumbnail}

A aplicação Entra ID foi criada. Os utilizadores que pretendam efetuar autenticações SSO através desta aplicação devem agora ser acrescentados.

#### Aplicação Entra ID - Afetação de utilizadores

> [!primary]
>
> Para que um utilizador efetue uma autenticação SSO a partir de uma aplicação Entra ID, deve ser adicionado a esta aplicação. Encontre aqui como adicionar um utilizador a uma aplicação Entra ID.
>
> No entanto, é melhor adicionar um grupo de utilizadores do que utilizadores se tiver **Entra ID Premium**.
>

Clique em `Users and groups`{.action} no menu à esquerda e, em seguida, em `Add user/group`{.action} no menu superior.

A seguir, clique na secção `Users`{.action}, selecione o utilizador a adicionar à aplicação e clique no botão `Select`{.action}.

![Entra ID Application User Assignment Passo 1](images/azure_ad_application_user_assignment_1.png){.thumbnail}

![Entra ID Application User Assignment Passo 2](images/azure_ad_application_user_assignment_2.png){.thumbnail}

A aplicação é criada, o utilizador é atribuído, só precisa de configurar o SSO via SAML.

#### Entra ID aplicação SSO

Consulte o conjunto através do botão `Overview`{.action} no menu à esquerda e clique na secção `Set up single sign on`{.action} on.

![Entra ID SSO etapa 1](images/azure_ad_sso_1.png){.thumbnail}

Clique na secção `SAML`{.action}.

![Entra ID SSO etapa 2](images/azure_ad_sso_2.png){.thumbnail}

Clique em `Upload metadata file`{.action} no menu superior.

![Entra ID SSO etapa 3](images/azure_ad_sso_3.png){.thumbnail}

Clique no ícone do botão `Select a file`{.action}, selecione o ficheiro de metadados OVHcloud Service Provider e clique no botão `Add`{.action}.

Pode obter o ficheiro de metadados adequado através das seguintes ligações:

- [Metadados da região da UE](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadados de região CA](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Faça o download do ficheiro de metadados, terá necessidade dele mais tarde.

![Entra ID SSO etapa 5](images/azure_ad_sso_5.png){.thumbnail}

Aparecerá a configuração SAML.

![Entra ID SSO etapa 6](images/azure_ad_sso_6.png){.thumbnail}

Na secção `Attributes & Claims`{.action}, clique no botão `Edit`{.action}.

![Entra ID SSO etapa 9](images/azure_ad_sso_9.png){.thumbnail}

Adicione o atributo UPN (User Principal Name) às informações SAML para informar a OVHcloud do e-mail do utilizador. Esta etapa é indispensável.

Clique em `Add a new claim`{.action} no menu superior.

No campo `Name`{.action}, introduza o valor `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn`.

No campo `Source attribute`{.action}, introduza `user.mail`{.action}.

A sua interface deverá ser bastante semelhante à seguinte captura de ecrã:

![Entra ID SSO entrado UPN](images/azure_ad_sso_9bis.png){.thumbnail}

Clique em `Save`{.action}

Declare o atributo utilizado para o grupo do utilizador.

Clique em `Add a group claim`{.action} no menu superior.

![Entra ID SSO etapa 10](images/azure_ad_sso_10.png){.thumbnail}

Selecione `Security groups`{.action} e **Group ID** na `Source attribute`{.action} e clique no botão `Save`{.action}.

![Entra ID SSO etapa 11](images/azure_ad_sso_11.png){.thumbnail}

A reivindicação de **groups** deve agora constar da lista.

Copie e registe o valor do **Claim name** algures (por exemplo, um bloco de notas), necessitará dele mais tarde.

![Entra ID SSO etapa 12](images/azure_ad_sso_12.png){.thumbnail}

Na secção `SAML certificates`{.action}, copie o valor do campo `App Federation Metadata Url`{.action}.

Utilize esta ligação para descarregar o ficheiro de metadados da aplicação Entra ID para o utilizar mais tarde na conta OVHcloud.

![Entra ID SSO etapa 8](images/azure_ad_sso_8.png){.thumbnail}

### Criar a confiança de uma conta OVHcloud e configurar a ligação

A adição da sua aplicação Entra ID como fornecedor de identidade aprovado é efetuada na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), onde poderá fornecer os metadados do fornecedor de identidade.

#### Criar confiança na OVHcloud

Clique no nome da sua conta no canto superior direito e, a seguir, no seu nome na barra lateral.

![Para aceder ao menu IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Pode aceder ao menu IAM através da entrada dedicada na sua Área de Cliente.

![Para aceder ao menu IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

De seguida, clique no separador `Identidades`{.action} para aceder à gestão dos utilizadores locais.

![Para aceder ao menu IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

A seguir, clique no botão `Ligação SSO`{.action}.

![OVHcloud connect SSO step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Complete o campo **Nome de Atributo de utilizador** com a aplicação Entra ID **upn** nome do pedido e no campo **Nome de atributo de grupo** com o valor de nome de pedido **groups** guardado antes.

Preencha os metadados XML da sua aplicação Entra ID a partir do ficheiro anteriormente registado.

É possível conservar os utilizadores locais marcando a caixa `Manter os utilizadores da OVHcloud ativos`.

Clique no botão `Validar`{.action}.

![Ovhcloud SSO step 1](images/ovhcloud_sso_1.png){.thumbnail}

A adição da sua aplicação Entra ID como fornecedor de identidade foi estabelecida, mas deve ainda assim adicionar grupos à sua conta OVHcloud.

> [!warning]
> Se tentar conectar-se através de SSO, é provável que apareça uma mensagem de erro "`Not in valid groups`".
>
> A sua conta OVHcloud verifica se o utilizador autenticado pertence a um grupo existente na conta.
>

Para resolver esta situação, verifique o atributo "Group" devolvido pela sua aplicação Entra ID: o campo **Object Id**.

#### Declaração dos grupos OVHcloud

![Entra ID Group etapa 2](images/azure_ad_group_2.png){.thumbnail}

Adicione-o clicando no botão `Declarar um grupo`{.action}.

![Grupos de gestão de utilizadores Ovhcloud etapa 1](images/ovhcloud_sso_menu_1.png){.thumbnail}

Preencha os campos e clique no botão `Validar`{.action}.

![Grupos de gestão de utilizadores Ovhcloud etapa 2](images/ovhcloud_sso_menu_2.png){.thumbnail}

O grupo criado deve constar da lista.

![Grupos de gestão de utilizadores Ovhcloud etapa 3](images/ovhcloud_sso_menu_3.png){.thumbnail}

Atenção: se conceder o privilégio `Nenhum`, será necessário atribuir permissões a este grupo através das [políticas IAM](/pages/account_and_service_management/account_information/iam-policy-ui).

### Ligação via SSO

Na [página de identificação da OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), introduza o seu [identificador de cliente](/pages/account_and_service_management/account_information/ovhcloud-account-creation#qual-e-o-meu-identificador-de-cliente) seguido de **/idp** sem password e clique no botão `Login`{.action}.

![Ovhcloud SSO Login step 1](images/ovhcloud_sso_login_1.png){.thumbnail}

De seguida, será redirecionado para a página de ligação à sua aplicação Entra ID. Selecione `Use another account`{.action}.

![Entra ID Login etapa 1](images/azure_ad_login_1.png){.thumbnail}

Introduza o e-mail do utilizador da aplicação Entra ID e clique no botão `Next`{.action}.

![Entra ID Login etapa 2](images/azure_ad_login_2.png){.thumbnail}

Introduza a palavra-passe do utilizador da aplicação Entra ID e clique no botão `Sign In`{.action}.

![Entra ID Login etapa 3](images/azure_ad_login_3.png){.thumbnail}

Já está ligado com o mesmo nichandle, mas através do utilizador Ative Diretory e utilizando o seu SSO de aplicação Entra ID.

![Ovhcloud SSO Login step 2](images/ovhcloud_sso_login_2.png){.thumbnail}

Se o seu e-mail não aparecer abaixo de `Connected via SSO`, isto significa que não configurou corretamente o atributo **UPN** e que uma parte das funcionalidades não poderá funcionar.

## Quer saber mais?

[Criar uma conta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)

[Proteger a minha conta OVHcloud e gerir as minhas informações pessoais](/pages/account_and_service_management/account_information/all_about_username)

[Definição e gestão da palavra-passe da sua conta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Proteger a sua conta OVHcloud com a dupla autenticação](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Como utilizar as políticas IAM a partir do seu Espaço Cliente](/pages/account_and_service_management/account_information/iam-policy-ui)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
