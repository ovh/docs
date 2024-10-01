---
title: Ativar as ligações Active Directory Federation Services (AD FS) SSO com a sua conta OVHcloud
excerpt: "Saiba como associar o seu serviço Active Directory Federation Services (AD FS) à sua conta OVHcloud via SAML 2.0"
updated: 2024-06-25
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Pode utilizar a autenticação SSO (*Single Sign-On*) **única** para se ligar à sua conta OVHcloud. Para ativar estas ligações, a sua conta e os seus serviços AD FS (*Active Directory Federation Services*) devem ser configurados com a ajuda das autenticações SAML (*Security Assertion Markup Language*).

**Este manual explica-lhe como associar a sua conta OVHcloud a um Active Directory externo.**

## Requisitos

- Os serviços AD FS (Active Directory Federation Services) devem ser executados no seu servidor
- Ter uma [conta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Estar ligado à [Área de Cliente OVHcloud](/links/manager).

## Instruções

> [!primary]
>
> Para que um prestador de serviços (ou seja, a sua conta OVHcloud) possa estabelecer uma ligação SSO com um fornecedor de identidade (ou seja, o seu serviço AD FS), o essencial é estabelecer uma relação de confiança mútua.
>

### Estabelecer a confiança AD FS

O seu AD FS atua como fornecedor de identidade. Os pedidos de autenticação da sua conta OVHcloud só serão aceites se o tiver declarado previamente como organismo terceiro de confiança.

No contexto Active Directory, isto significa que deve ser adicionado como `Relying Party Trust`.

No gestor dos Servidores, abra o menu `Tools`{.action} e selecione `AD FS Management`{.action}.

![Ferramentas Windows Server](images/windows_server_tools_menu.png){.thumbnail}

Clique em `Relying Party Trusts`{.action}.

![AD FS Menu](images/adfs_menu.png){.thumbnail}

A seguir, clique em `Add Relying Party Trust...`{.action}.

![Mensagem de aprovações AD FS](images/adfs_relying_party_trusts_menu.png){.thumbnail}

Selecione `Claims aware`{.action} e valide com o botão `Start`{.action}.

![AD FS adicionar uma aprovação - etapa 1](images/adfs_add_relying_party_trust_1.png){.thumbnail}

Pode introduzir manualmente as informações sobre o organismo terceiro de confiança ou importá-las a partir de um ficheiro de metadados.

#### Importar os metadados OVHcloud SP

Pode obter o ficheiro de metadados adequado através das seguintes ligações:

- [Metadados da região da UE](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadados da região CA](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Selecione o `Import data about the relying party from a file`{.action} e selecione o seu ficheiro de metadados.

A seguir, clique no botão `Next`{.action}.

![AD FS - adicionar uma aprovação - etapa 2](images/adfs_add_relying_party_trust_2.png){.thumbnail}

Introduza um nome de apresentação para o organismo terceiro de confiança e clique no botão `Next`{.action}.

![AD FS - adicionar uma aprovação - etapa 3](images/adfs_add_relying_party_trust_3.png){.thumbnail}

Clique em `Next`{.action} na janela do controlo de acesso.

![AD FS - adicionar uma aprovação - etapa 4](images/adfs_add_relying_party_trust_4.png){.thumbnail}

Clique novamente em `Next`{.action} para continuar.

![AD FS - adicionar uma aprovação - etapa 5](images/adfs_add_relying_party_trust_5.png){.thumbnail}

Clique no botão `Close`{.action} na última janela. A aprovação da OVHcloud como organismo terceiro de confiança foi adicionada ao seu AD FS.

![Aprovação AD FS](images/adfs_relying_party_trusts.png){.thumbnail}

> [!primary]
>
> Com a OVHcloud adicionada como organismo terceiro de confiança, já deveria poder ligar-se através de uma ligação SSO. No entanto, todas as informações relativas à identidade do utilizador (em termos de "asserção" SAML) permanecerão indisponíveis até que configure uma estratégia para fazer corresponder os campos LDAP Active Directory aos atributos da asserção SAML.
>

#### Correspondência dos atributos LDAP aos atributos SAML

Clique na entrada da OVHcloud na secção "Relying Party Trusts".

![Conjunto de aprovação AD FS etapa 1](images/adfs_relying_party_trusts_mapping_1.png){.thumbnail}

A seguir, clique em `Edit Claim Issuance Policy...`{.action}.

![Conjunto de aprovação AD FS etapa 2](images/adfs_relying_party_trusts_mapping_2.png){.thumbnail}

Clique no botão `Add Rule...`{.action}.

![Conjunto de aprovação AD FS etapa 3](images/adfs_relying_party_trusts_mapping_3.png){.thumbnail}

Clique em `Next`{.action}.

Introduza um nome de regra e defina a sua tabela de correspondência.

Selecione `Active Directory` como `Attribute store`.

> [!primary]
>
> Os parâmetros seguintes podem ser configurados livremente de modo a que o prestador de serviços possa ler corretamente os dados LDAP Active Directory. Pode consultar a imagem abaixo como exemplo.

Quando terminar, clique no botão `Finish`{.action}.

![Conjunto de aprovação AD FS etapa 4](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

![Conjunto de aprovação AD FS etapa 5](images/adfs_relying_party_trusts_mapping_5.png){.thumbnail}

Clique no botão `Apply`{.action} e valide com `OK`{.action}.

![Conjunto de aprovação etapa 6](images/adfs_relying_party_trusts_mapping_6.png){.thumbnail}

Uma vez terminada a tabela de correspondências, o seu serviço AD FS confia agora na OVHcloud enquanto fornecedor de serviços. O passo seguinte consiste em assegurar-se de que a conta OVHcloud confia no seu AD FS enquanto fornecedor de identidade.

### Determinar a confiança da conta OVHcloud e configurar a ligação

A adição do AD FS como fornecedor de identidade de confiança pode ser efetuada na [Área de Cliente OVHcloud](/links/manager), onde poderá fornecer os metadados do fornecedor de identidade.

Clique no nome da sua conta no canto superior direito e, a seguir, no seu nome na barra lateral.

![Para aceder ao menu IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Pode aceder ao menu IAM através da entrada dedicada na sua Área de Cliente.

![Para aceder ao menu IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

De seguida, clique no separador `Identidades`{.action} para aceder à gestão dos utilizadores locais.

![Para aceder ao menu IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Clique no botão `SSO connection`{.action}.

![A ligação SSO da OVHcloud etapa 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Insira os metadados XML do seu serviço AD FS. O campo `Nome do atributo do grupo` é facultativo neste caso. Clique em `Confirmar`{.action}.

É possível conservar os utilizadores locais marcando a caixa `Manter os utilizadores da OVHcloud ativos`.

![Ligação SSO OVHcloud etapa 2](images/ovhcloud_user_management_connect_sso_2.png){.thumbnail}

Agora deve encontrar o AD FS como fornecedor de identidade, assim como os grupos predefinidos.

![A ligação SSO da OVHcloud etapa 3](images/ovhcloud_user_management_connect_sso_3.png){.thumbnail}

Para mais informações, clique no link situado abaixo do `URL do serviço SSO`.

![A ligação SSO da OVHcloud etapa 4](images/ovhcloud_user_management_connect_sso_4.png){.thumbnail}

![Ligação SSO OVHcloud etapa 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

O botão `...`{.action} permite atualizar ou eliminar o SO, e consultar os respetivos detalhes.

![Ligação SSO OVHcloud etapa 6](images/ovhcloud_user_management_connect_sso_6.png){.thumbnail}

O seu AD FS é agora considerado fornecedor de identidade de confiança. No entanto, deve mesmo assim adicionar grupos à sua conta OVHcloud.

> [!warning]
> Se, nesta fase, estiver a tentar conectar-se através de SSO, é provável que apareça uma mensagem de erro `Not in valid groups`.
>
> A sua conta OVHcloud verifica se o utilizador que se autentica pertence a um grupo existente na conta.
>

Para resolver este problema, verifique as informações associadas ao atributo "Group" devolvidas pelo serviço AD FS.

Tome como exemplo o de um utilizador "John Doe" do seu Active Directory, como indicado na imagem abaixo.

![Utilizador AD FS](images/adfs_user.png){.thumbnail}

Verifique a tabela de correspondências em AD FS:

![Conjunto de aprovação da parte de confiança AD FS](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

Neste exemplo, o atributo "Group" reenviado pelo Active Directory para o utilizador "John Doe" é "title". Corresponde ao "job title" que é o `manager@<my-domain>.com`.

Também pode verificar isto na secção SAML:

```xml
<AttributeStatement>
    <Attribute Name="http://schemas.xmlsoap.org/claims/Group">
        <AttributeValue>manager@<my-domain>.com</AttributeValue>
    </Attribute>
    ...
</AttributeStatement>
```

Isto significa que deve adicionar o grupo `manager@<my-domain>.com` à sua conta OVHcloud ligando-lhe um papel. Caso contrário, a sua conta OVHcloud não sabe o que o utilizador pode fazer.

Adicione-o ao clicar no botão `Declarar um grupo`{.action} e preencher os campos:

![Grupos de gestão dos utilizadores AD FS](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![Grupos de gestão dos utilizadores AD FS](images/ovhcloud_user_management_groups_2.png){.thumbnail}

De seguida, poderá verificar que o grupo é adicionado à sua conta OVHcloud na secção `Grupos`:

![Grupos de gestão dos utilizadores AD FS](images/ovhcloud_user_management_groups_3.png){.thumbnail}

Quando se ligar ao utilizador Active Directory "John Doe", a sua conta OVHcloud reconhecerá que o utilizador tem o papel "REGULAR", especificado pelo seu grupo.

Atenção: se conceder o privilégio `Nenhum`, será necessário atribuir permissões a este grupo através das [políticas IAM](/pages/account_and_service_management/account_information/iam-policy-ui).

De seguida, poderá desligar a sua conta e voltar a ligar-se ao seu AD FS enquanto fornecedor de identidade.

### Ligação via SSO

Na [página de identificação da OVHcloud](/links/manager), introduza o seu [identificador de cliente](/pages/account_and_service_management/account_information/ovhcloud-account-creation#qual-e-o-meu-identificador-de-cliente) seguido de **/idp** sem password e clique no botão `Login`{.action}.

![Ligação à Federação OVHcloud](images/ovhcloud_federation_login_1.png){.thumbnail}

De seguida, será redirecionado para a página de ligação AD FS. Introduza um login/password de um utilizador do seu Active Directory LDAP e clique no botão `Sign in`{.action}.

![OVHcloud Federation login Reencaminhamento AD FS](images/ovhcloud_federation_login_2.png){.thumbnail}

Já está conectado com o mesmo identificador de cliente, mas através do utilizador Active Directory e do SSO AD FS.

![Federação das informações utilizadores OVHcloud](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Quer saber mais?

[Criar uma conta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)

[Proteger a minha conta OVHcloud e gerir as minhas informações pessoais](/pages/account_and_service_management/account_information/all_about_username)

[Definição e gestão da palavra-passe da sua conta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Proteger a sua conta OVHcloud com a dupla autenticação](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Como utilizar as políticas IAM a partir do seu Espaço Cliente](/pages/account_and_service_management/account_information/iam-policy-ui)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
