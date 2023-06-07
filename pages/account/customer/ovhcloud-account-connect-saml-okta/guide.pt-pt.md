---
title: "Ativar as ligações Okta SSO com a sua conta OVHcloud"
excerpt: "Saiba como associar o seu serviço Okta à sua conta OVHcloud através do SAML 2.0"
updated: 2023-04-18
---

## Objetivo

Pode utilizar a autenticação SSO (*Single Sign-On*) para se ligar à sua conta OVHcloud. Para ativar estas ligações, a sua conta e as suas contas de Okta devem ser configuradas com a ajuda de SAML (*Security Assertion Markup Language*).

**Este guia explica como associar a sua conta OVHcloud a um serviço Okta externo.**

## Requisitos

- Ser administrador de um serviço Okta
- Ter uma [conta OVHcloud](/pages/account/customer/ovhcloud-account-creation)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

> [!primary]
>
> Para que um prestador de serviços (por exemplo, a sua conta OVHcloud) estabeleça uma ligação SSO com um fornecedor de identidade (por exemplo, o seu serviço Okta), o essencial é estabelecer uma relação de confiança mútua ao registar a ligação SSO em ambos os serviços.
>

### Registar a OVHcloud na Okta

O seu serviço Okta atua como fornecedor de identidade. Os pedidos de autenticação da sua conta OVHcloud só serão aceites se o tiver declarado previamente como organismo terceiro de confiança.

Isto significa que deve ser adicionado como `Applications`.

Ligue-se à interface de administração do Okta com a sua conta de administrador.

Aceda às `Applications`{.action} e, de novo, às `Applications`{.action}.

![Adicionar uma aplicação SAML, etapa 1](images/OKTA_add_application_step1.png){.thumbnail}

Clique em `Create App Integration`{.action} e selecione `SAML 2.0`{.action}.

![Adicionar uma aplicação SAML, etapa 2](images/OKTA_add_application_step2.png){.thumbnail}

Na etapa "General Settings", adicione um nome para esta aplicação, como a **OVHcloud**, e um logótipo se desejar. Clique em `Next`{.action}.

![Adicionar uma aplicação SAML, etapa 3](images/OKTA_add_application_step3.png){.thumbnail}

Na etapa "Configure SAML", preencha os campos `Single sign-on URL` e `Audience URI` com os valores da sua região: 

- Região UE: **Single sign-on URL**: `https://www.ovhcloud.com/eu/auth/saml/acs` e **Audience URI**: `https://www.ovhcloud.com/eu/auth/`
- Região CA: **Single sign-on URL**: `https://www.ovhcloud.com/ca/auth/saml/acs` e **Audience URI**: `https://www.ovhcloud.com/ca/auth/`

![Adicionar uma aplicação SAML, etapa 4](images/OKTA_add_application_step4.png){.thumbnail}

A seguir, defina os `Attribute Statements`:

- **Name**: `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn` e **Value**: `user.login`
- **Name**: `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` e **Value**: `user.email`
- **Name**: `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` e **Value**: `user.displayName`

Defina os `Group Attribute Statements`:

- **Name**: `groups` e **Filter**: `Matches regex:.*` (Adapte o filtro se deseja ser mais preciso)

Clique em `Next`{.action}.

![Adicionar uma aplicação SAML, etapa 5](images/OKTA_add_application_step5.png){.thumbnail}

Na etapa "Feedback", selecione a opção em função e clique em `Finish`{.action}.

A seguir, abra a aplicação, aceda ao separador `Assignments`{.action} e afete utilizadores ou grupos à aplicação.

![Afetar utilizadores](images/OKTA_add_user.png){.thumbnail}

Antes de avançar para a secção seguinte, aceda ao separador `Sign On`{.action}, aceda ao **Metadata URL** e registe o ficheiro XML fornecido.

![Obter os metadados](images/OKTA_retrieve_metadata.png){.thumbnail}

O seu serviço Okta confia agora na OVHcloud enquanto prestadora de serviços. O passo seguinte consiste em assegurar-se de que a conta OVHcloud confia no seu Okta enquanto fornecedor de identidade.

### Registar o Okta na conta OVHcloud e configurar a ligação

Para adicionar o Okta como fornecedor de identidade de confiança, deve fornecer os metadados do fornecedor de identidade na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

Depois de aceder, clique no seu perfil (canto superior direito).

![Top menu OVHcloud](images/ovhcloud_top_menu.png){.thumbnail}

Clique no seu nome para aceder à página de gestão do seu perfil.

![User Informação OVHcloud](images/ovhcloud_user_infos.png){.thumbnail}

Abra o separador `Gestão dos utilizadores`{.action}.

![OVHcloud menu perfil](images/ovhcloud_profile_menu.png){.thumbnail}

Clique no botão `Ligação SSO`{.action}.

![Ligação SSO OVHcloud etapa 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Insira os metadados XML do seu serviço Okta. Preencha o campo "Apelido de grupo" com o valor dos `grupos`. Clique em `Confirmar`{.action}.

![Ligação SSO OVHcloud etapa 2](images/ovhcloud_add_federation.png){.thumbnail}

Agora tem de encontrar o seu Okta como fornecedor de identidade, assim como os grupos predefinidos.

![Ligação SSO OVHcloud etapa 3](images/ovhcloud_add_federation_success.png){.thumbnail}

Para mais informações, clique no link em "URL do serviço SSO".

![Ligação SSO OVHcloud etapa 4](images/ovhcloud_idp_details.png){.thumbnail}

O botão `...`{.action} permite atualizar ou eliminar o SO, e consultar os respetivos detalhes.

![Ligação SSO OVHcloud etapa 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

O seu serviço Okta é agora considerado um fornecedor de identidade de confiança. No entanto, deve mesmo assim adicionar grupos à sua conta OVHcloud.

> [!warning]
> Se, nesta fase, estiver a tentar conectar-se através de SSO, é provável que apareça uma mensagem de erro `Not in valid groups`.
>
> A sua conta OVHcloud verifica se o utilizador que se autentica pertence a um grupo existente na conta.
>

Agora deve atribuir **funções** aos grupos de utilizadores Okta na OVHcloud. Caso contrário, a sua conta OVHcloud não sabe o que o utilizador está autorizado a fazer e, de forma padrão, não é atribuído nenhum direito.

Na Área de Cliente, adicione um grupo ao clicar no botão `Declarar um grupo`{.action} e preencher os campos:

- **Group name**: Nome do grupo em Okta
- **Role**: Nível de direitos concedidos a este grupo

![Grupos de gestão dos utilizadores Okta](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![Grupos de gestão dos utilizadores Okta](images/ovhcloud_user_management_groups_2.png){.thumbnail}

De seguida, poderá verificar que o grupo é adicionado à sua conta OVHcloud na secção "Grupos":

![Grupos de gestão dos utilizadores Okta](images/ovhcloud_user_management_groups_3.png){.thumbnail}

Quando se ligar posteriormente com um utilizador do grupo **Intern**, a sua conta OVHcloud reconhecerá que o utilizador tem o papel "UNPRIVILEGED" especificado pelo seu grupo.

De seguida, poderá desligar a sua conta e voltar a ligar-se ao seu Okta enquanto fornecedor de identidade.

### Ligação via SSO

Na [página de identificação da OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), introduza o seu [identificador](/pages/account/customer/ovhcloud-account-creation#qual-e-o-meu-identificador-de-cliente) seguido de **/idp** sem password e clique no botão `Ligação`{.action}.

![Ligação à Federação OVHcloud](images/ovhcloud_federation_login_1.png){.thumbnail}

De seguida, será redirecionado para a página de ligação de Okta. Introduza o identificador e a password de um utilizador do seu Okta e clique no botão `Sign in`{.action} .

![OVHcloud Federation login Reencaminhamento Okta](images/OKTA_login.png){.thumbnail}

Já está ligado com o mesmo identificador de cliente, mas através do seu utilizador Okta.

![OVHcloud User Info Federation](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Quer saber mais?

[Criação de uma conta OVHcloud](/pages/account/customer/ovhcloud-account-creation)

[Proteger a minha conta OVHcloud e gerir as minhas informações pessoais](/pages/account/customer/all_about_username)

[Configuração e gestão da palavra-passe da sua conta](/pages/account/customer/manage-ovh-password)

[Proteger a sua conta OVHcloud com a dupla autenticação](/pages/account/customer/secure-ovhcloud-account-with-2fa)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.