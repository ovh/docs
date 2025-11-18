---
title: 'Migrar um endereço de e-mail MX Plan para uma conta Zimbra OVHcloud'
excerpt: 'Saiba como migrar um endereço de e-mail MX Plan para uma conta Zimbra OVHcloud'
updated: 2025-05-22
---

## Objetivo

No âmbito da transição progressiva das contas MX Plan para Zimbra, é possível antecipar esta migração e efetuar você mesmo a transferência de contas de e-mail antes da implementação de uma ferramenta automatizada pela OVHcloud. Este manual explica-lhe como efetuar esta migração manualmente.

**Saiba como migrar um endereço de e-mail MX Plan para uma conta Zimbra OVHcloud.**

## Requisitos

- Dispor de um endereço de e-mail MX Plan (através da oferta MX Plan ou incluída numa oferta de [alojamento web OVHcloud](/links/web/hosting)).
- Ter uma conta de e-mail Zimbra OVHcloud.
- **Não ter parametrizado o reencaminhamento para o endereço de e-mail MX Plan que pretende migrar**.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

> [!warning]
>
> Se a sua conta de e-mail gere informações sensíveis ou se encontrar problemas durante a migração, recomendamos que aguarde a implementação da ferramenta de automatização na Área de Cliente OVHcloud.

A migração de uma conta de e-mail MX Plan para uma conta de e-mail Zimbra é realizada em 2 etapas. Para evitar o corte da receção no endereço de e-mail original, é necessário seguir o seguinte processo:

1. **Transferir o conteúdo da conta MX Plan para uma conta Zimbra**
    - [1.1 - Criação de um endereço de e-mail Zimbra](#step11)
    - [1.2 - Migração de e-mails com o OVH Mail Migrator](#step12)
    - [1.3 - Cópia de segurança do correio eletrónico da conta de origem (opcional)](#step13)
2. **Eliminar a conta MX Plan original e reatribuir o seu endereço à conta Zimbra**
    - [2.1 - Eliminação do antigo endereço de e-mail MX Plan](#step21)
    - [2.2 - Mudar o nome do endereço de e-mail Zimbra](#step22)

No exemplo abaixo, migramos o endereço `contact@mydomain.ovh`. Para isso, vamos criar a conta Zimbra com o nome `contact2@mydomain.ovh`.

![zimbra](images/zimbra_migration_mxplan.png){.thumbnail}

### 1.1 - Criação de um endereço de e-mail Zimbra <a name="step11"></a>

> [!primary]
>
> Se já dispõe de um endereço de e-mail Zimbra, passe para a [Migração dos e-mails com o OVH Mail Migrator](#step12).

Crie um endereço de e-mail com um nome provisório. Pode criar, por exemplo, o endereço `contact2@mydomain.ovh`{.action} se tiver de migrar o endereço `contact@mydomain.ovh`{.action}.

Para criar um endereço de e-mail Zimbra, consulte a secção " Criar uma conta de e-mail " do nosso guia [Primeiros passos com a oferta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).

### 1.2 - Migração dos e-mails com o OVH Mail Migrator <a name="step12"></a>

Utilize a ferramenta de migração [**O**VH **M**ail **M**igrator](https://omm.ovh.net/) (**OMM**) para transferir o conteúdo da conta MX Plan original para a nova conta de destino Zimbra, seguindo o exemplo evocado no esquema acima.

#### Etapa 1: Aceder ao OVH Mail Migrator

Aceda a [OVH Mail Migrator](https://omm.ovh.net/).

Na página <https://omm.ovh.net/>, no separador `Migration`{.action}, clique em `New migration`{.action}.

![omm](images/omm-migration-create01.png){.thumbnail}

#### Etapa 2: Introduza as informações de migração

**Account**

- **Source Account**:
    - **Server type**: Selecione `Hosted by OVHcloud (Autodetect)`, esta opção permite preencher automaticamente as informações, exceto a palavra-passe.
    - **Server URL**: Este campo é preenchido automaticamente.
    - **Login**: Introduza o endereço de e-mail completo da conta a migrar (por exemplo: `contact@mydomain.ovh`).
    - **Password**: Insira a palavra-passe do e-mail em questão.
- **Destination Account**:
    - **Server type**: Selecione `Zimbra` para o tipo de servidor de destino.
    - **Server URL**: Insira o endereço do servidor Zimbra <https://zimbra1.mail.ovh.net>.
    - **Login**: Introduza o endereço de e-mail completo da conta Zimbra de destino (por exemplo:`contact2@mydomain.ovh`).
    - **Password**: Insira a palavra-passe do endereço de e-mail da conta Zimbra de destino.

**Opções**

Selecione os itens que pretende migrar. Alguns conteúdos podem não estar disponíveis, dependendo do tipo de servidor que escolheu anteriormente.

**Informações**

Introduza um endereço de e-mail para ser notificado sobre o progresso da migração. Selecione a caixa na parte inferior da página para aceitar os termos e condições OMM.

![omm](images/omm-migration-create02.png){.thumbnail}

#### Etapa 3: Iniciar a migração

Verifique que todas as informações estão corretas e clique em `Iniciar a migração`{.action}. A nova página apresenta os detalhes do estado da migração. Guarde o `ID de migração` apresentado e aguarde até que o processo seja concluído. O tempo de espera varia consoante o número de itens que pretende migrar.

#### Etapa 4: Seguir a migração

Pode aceder ao estado de monitorização de uma migração única de duas formas:

- A partir do e-mail recebido com notificação sobre o progresso da migração.
- A partir da página <https://omm.ovh.net/>: No separador `Migration`{.action}, clique em `Track/Synchronize`{.action}. Introduza o identificador de migração (`Migration ID`{.action}), bem como a conta de origem (`Source account`{.action}) em causa.

![omm](images/omm-migration-track.png){.thumbnail}

A nova página que vai aparecer permite-lhe acompanhar o progresso da sua migração. Será notificado se o processo irá iniciar, estiver em curso ou estiver concluído. Dependendo da situação, existem várias formas de interação:

- `Stop the process`{.action}: Permite anular a migração. Os elementos já migrados serão conservados na conta de destino.
- `Delete migrated elements`{.action}: Permite eliminar os elementos já migrados para a conta de destino. Você pode apagar itens de um ponto de sincronização específico.
- `Synchronize`{.action}: Permite recuperar novos elementos não migrados numa anterior sincronização entre a conta de origem e a conta de destino. Essa ação é considerada uma migração dos itens em falta da conta de destino em comparação com a conta de origem.

Para realizar uma migração por ficheiro ou múltiplo, consulte as secções " Migração por ficheiro " e " Realizar e seguir uma migração múltipla (modo projeto) " do nosso guia " [Migrar contas de e-mail via OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm) ".

> [!primary]
>
> O tempo de migração varia em função do volume de dados e pode ir de alguns minutos a várias horas. Quando a migração estiver concluída, verifique que todos os e-mails foram migrados.

### 1.3 - Cópia de segurança do correio eletrónico da conta de origem (opcional) <a name="step13"></a>

> [!warning]
>
> Antes de eliminar a conta MX Plan, **efetue uma cópia de segurança do correio eletrónico** para evitar a perda de dados.

Utilize as opções de exportação do seu cliente de correio eletrónico. Pode encontrar, no nosso guia " [Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) ", os detalhes da exportação manual de um endereço de e-mail a partir de um cliente de e-mail.

### 2.1 - Eliminação do antigo endereço de e-mail MX Plan <a name="step21"></a>

Para eliminar o endereço de e-mail MX Plan (exemplo: `contact@mydomain.ovh`), siga o nosso guia " [Eliminar uma conta de e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/email_reset_account)".

> [!warning]
>
> Se estiver a migrar a partir de uma conta MX Plan que utilize o webmail Zimbra, aguarde 5 minutos até que a eliminação seja efetiva antes de mudar o nome da segunda conta de e-mail.

### 2.2 - Alterar o nome do endereço de e-mail Zimbra <a name="step22"></a>

Na Área de Cliente OVHcloud, aceda ao serviço Zimbra Starter e mude o nome da conta de e-mail Zimbra para o nome da conta de e-mail migrada (por exemplo: `contact2@mydomain.ovh` em `contact@mydomain.ovh`).

### Conclusão <a name="concluse"></a>

A sua conta de e-mail está agora totalmente migrada para o Zimbra Starter. Agora pode utilizar o Zimbra para gerir o seu e-mail.

## Quer saber mais? <a name="go-further"></a>

[Primeiros passos com a oferta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurar o endereço de correio eletrónico do Zimbra num software de correio eletrónico](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[FAQ sobre a solução Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).