---
title: 'Migrar um endereço de e-mail MX Plan para uma conta Zimbra OVHcloud'
excerpt: 'Saiba como migrar um endereço de e-mail MX Plan para uma conta Zimbra OVHcloud'
updated: 2026-04-10
---

## Objetivo

Se pretende migrar a sua oferta de e-mail MX Plan para uma oferta [Zimbra OVHcloud](/links/web/zimbra), pode utilizar a ferramenta [**O**VH **M**ail **M**igrator](/links/web/omm) para efetuar a sua migração.

**Saiba como migrar um endereço de e-mail MX Plan para uma conta Zimbra OVHcloud.**

## Requisitos

- Dispor de um endereço de e-mail MX Plan (através da oferta MX Plan ou incluído numa oferta de [alojamento web OVHcloud](/links/web/hosting)).
- Dispor de uma conta de e-mail Zimbra OVHcloud.
- **Não ter configurado nenhum reencaminhamento no endereço de e-mail MX Plan que pretende migrar**.

<!-- CP-NAV-START:web-zimbra -->
---

### Acesso à área de cliente OVHcloud

- **Link direto:** [Zimbra](/links/control-panel/web-zimbra)
- **Para aceder aos seus serviços:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

---
<!-- CP-NAV-END:web-zimbra -->

## Instruções

> [!warning]
>
> Se a sua conta de e-mail gere informações sensíveis ou se encontrar problemas durante a migração, recomendamos que aguarde a implementação da ferramenta de automatização na área de cliente OVHcloud.

A migração de uma conta de e-mail MX Plan para uma conta de e-mail Zimbra é feita em 2 etapas. Para evitar interromper a receção de mensagens no endereço de e-mail de origem, é necessário seguir o processo seguinte:

1. **[Transferir o conteúdo da conta MX Plan para uma conta Zimbra](#step1)**
    - [1.1 - Criação de um endereço de e-mail Zimbra](#step11)
    - [1.2 - Migração dos e-mails com o OVHcloud Mail Migrator](#step12)
    - [1.3 - Cópia de segurança dos e-mails da conta de origem (opcional)](#step13)
2. **[Eliminar a conta MX Plan de origem e reatribuir o seu endereço à conta Zimbra](#step2)**
    - [2.1 - Eliminação do antigo endereço de e-mail MX Plan](#step21)
    - [2.2 - Mudar o nome do endereço de e-mail Zimbra](#step22)

No exemplo abaixo, migramos o endereço `contact@mydomain.ovh`. Para isso, vamos criar a conta Zimbra com o nome `contact2@mydomain.ovh`.

![zimbra](images/zimbra_migration_mxplan.png){.thumbnail}

### 1 - Transferir o conteúdo da conta MX Plan para uma conta Zimbra <a name="step1"></a>

#### 1.1 - Criação de um endereço de e-mail Zimbra <a name="step11"></a>

> [!primary]
>
> Se já dispõe de um endereço de e-mail Zimbra, passe para a secção [Migração dos e-mails com o OVHcloud Mail Migrator](#step12).

Comece por criar um endereço de e-mail com um nome provisório. Por exemplo, pode criar o endereço `contact2@mydomain.ovh` se precisar de migrar o endereço `contact@mydomain.ovh`.

Para criar um endereço de e-mail Zimbra, consulte a secção "Criar uma conta de e-mail" do nosso manual [Primeiros passos com a oferta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).

#### 1.2 - Migração dos e-mails com o OVHcloud Mail Migrator <a name="step12"></a>

Utilize a ferramenta de migração [**O**VH **M**ail **M**igrator](/links/web/omm) (**OMM**) para transferir o conteúdo da conta MX Plan de origem para a nova conta de destino Zimbra, seguindo o exemplo ilustrado no esquema acima.

A migração com o OMM realiza-se em 3 etapas: criar um projeto, configurar a migração e, em seguida, acompanhar o seu progresso. Clique em cada separador para ver as instruções correspondentes.

> [!tabs]
> **Etapa 1**
>>
>> **Criar um projeto de migração**
>>
>> Aceda a <https://omm.ovhcloud.com/> e clique em `Nova migração`{.action}.
>>
>> ![zimbra](images/omm-01.png){.thumbnail}
>>
>> - **Endereço de e-mail de contacto do projeto**: Introduza um endereço de e-mail que receberá as credenciais de acesso e as notificações de acompanhamento. Não utilize um endereço que irá ser migrado neste projeto.
>> - **Palavra-passe do projeto**: Defina uma palavra-passe (mínimo 10 caracteres, com pelo menos 1 carácter especial, 1 número, 1 maiúscula e 1 minúscula).
>>
>> Clique em `Criar o meu projeto`{.action}. Receberá um e-mail de confirmação com o identificador único do projeto.
>>
> **Etapa 2**
>>
>> **Ligar-se ao projeto e criar a migração**
>>
>> A partir da página inicial do [OMM](/links/web/omm), clique em `Acompanhar uma migração`{.action}, introduza o `Identificador do projeto` e a `Palavra-passe do projeto` e clique em `Ligar-se ao projeto`{.action}.
>>
>> A seguir, clique em `Nova migração`{.action} para configurar a sua migração:
>>
>> ![zimbra](images/omm-create-migration.png){.thumbnail}
>>
>> - **Conta de origem**:
>>     - **Tipo de conta**: Selecione `OVHcloud` e, em seguida, escolha `MX Plan` ou `Deteção automática`. Clique em `Ligar-se`{.action} para se identificar com a sua conta OVHcloud e selecionar automaticamente o serviço e o endereço a migrar (exemplo: `john.smith@mydomain.ovh`). Introduza depois a palavra-passe desta conta de e-mail.
>> - **Conta de destino**:
>>     - **Tipo de conta**: Selecione `OVHcloud` e, em seguida, escolha `Zimbra`. Clique em `Ligar-se`{.action} para se identificar com a sua conta OVHcloud e selecionar o serviço Zimbra e o endereço de destino (exemplo: `zimbra2@mydomain.ovh`). Introduza depois a palavra-passe desta conta de e-mail.
>> - **Dados a transferir**: Verifique os tipos de dados suportados e desmarque os que não pretende migrar.
>> - **Início da transferência**: Escolha `Imediatamente` ou selecione `Mais tarde` para agendar a migração numa data e hora definidas.
>>
>> Clique em `Migrar a minha conta`{.action} para iniciar a migração.
>>
>> ![zimbra](images/omm-zimbra-01.png){.thumbnail}
>>
> **Etapa 3**
>>
>> **Acompanhar a migração**
>>
>> Existem dois métodos para aceder ao acompanhamento do seu projeto de migração:
>>
>> - A partir do e-mail recebido aquando da criação do projeto, através do link fornecido (o identificador do projeto está pré-preenchido).
>> - A partir da página inicial do [OMM](/links/web/omm): clique em `Acompanhar uma migração`{.action}, introduza o `Identificador do projeto` e a `Palavra-passe do projeto` e clique em `Ligar-se ao projeto`{.action}.
>>
>> A partir da página do projeto, clique no botão `⋮`{.action} à direita da linha da sua migração para ver as opções:
>>
>> - `Ver mais detalhes`{.action}: Acompanhe o progresso da migração e consulte o relatório quando estiver concluída.
>> - `Cancelar a migração`{.action}: Cancela a migração em curso. Os elementos já migrados são conservados na conta de destino.
>> - `Eliminar os meus dados de migração (RGPD)`{.action}: Desencadeia a eliminação de todos os dados relativos à migração. As informações sobre os eventos de migração são conservadas.
>>
>> ![zimbra](images/omm-migration-follow.png){.thumbnail}

Para mais informações sobre a utilização do OMM, consulte o nosso manual "[Migrar contas de e-mail através do OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)".

> [!primary]
>
> O tempo de migração varia em função do volume de dados e pode ir de alguns minutos a várias horas. Após a conclusão da migração, verifique que todos os e-mails foram migrados corretamente.

#### 1.3 - Cópia de segurança dos e-mails da conta de origem (opcional) <a name="step13"></a>

> [!warning]
>
> Antes de eliminar a sua conta MX Plan, **efetue uma cópia de segurança dos seus e-mails** para evitar qualquer perda de dados.

Utilize as opções de exportação do seu cliente de e-mail. No nosso manual "[Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)", encontrará os detalhes de exportação manual de um endereço de e-mail a partir de um cliente de e-mail.

### 2 - Eliminar a conta MX Plan de origem e reatribuir o seu endereço à conta Zimbra <a name="step2"></a>

#### 2.1 - Eliminação do antigo endereço de e-mail MX Plan <a name="step21"></a>

Para eliminar o endereço de e-mail MX Plan (exemplo: `contact@mydomain.ovh`), siga o nosso manual "[Eliminar uma conta de e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/email_reset_account)".

> [!warning]
>
> Se estiver a migrar a partir de uma conta MX Plan que utiliza o webmail Zimbra, aguarde 5 minutos para que a eliminação seja efetiva antes de mudar o nome da segunda conta de e-mail.

#### 2.2 - Mudar o nome do endereço de e-mail Zimbra <a name="step22"></a>

Na sua área de cliente OVHcloud, aceda ao seu serviço Zimbra e mude o nome do endereço de e-mail Zimbra provisório para o endereço MX Plan migrado. Retomando o exemplo da etapa 2 do capítulo 1.2, o endereço provisório `zimbra2@mydomain.ovh` será renomeado para `john.smith@mydomain.ovh`, que é o seu endereço de e-mail habitual.

### Conclusão <a name="conclusion"></a>

A sua conta de e-mail foi migrada para o Zimbra. Para concluir a configuração, consulte os manuais abaixo:

- [Primeiros passos com a oferta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)
- [Configurar o seu endereço de e-mail Zimbra num cliente de e-mail](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

## Quer saber mais? <a name="go-further"></a>

[FAQ sobre a solução Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
