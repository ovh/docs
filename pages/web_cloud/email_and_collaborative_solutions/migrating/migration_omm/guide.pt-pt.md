---
title: 'Migrar contas de e-mail com o OVHcloud Mail Migrator'
excerpt: 'Saiba como migrar as suas contas de e-mail para a OVHcloud com a nossa ferramenta OVHcloud Mail Migrator'
updated: 2025-11-25
---

<style>
.w-600 {
  max-width:600px !important;
}
.w-300 {
  max-width:300px !important;
}
</style>

## Objetivo

[OVHcloud Mail Migrator](/links/web/omm) é uma ferramenta criada pela OVHcloud que responde à necessidade de reversibilidade. Permite migrar as suas contas de e-mail para os seus endereços de e-mail da OVHcloud ou para um serviço de e-mail externo. O processo suporta diferentes tipos de conteúdos, tais como e-mails, contactos, calendários e tarefas, desde que estes sejam compatíveis com os seus endereços de e-mail.

**Saiba como migrar as suas contas de e-mail para a OVHcloud com a nossa ferramenta OVHcloud Mail Migrator.**

## Requisitos

- Dispor de um serviço de e-mail externo ou da OVHcloud, tais como uma oferta [Zimbra](/links/web/zimbra), [Exchange](/links/web/emails), [E-mail Pro](/links/web/email-pro) ou MX Plan (via oferta MX Plan única ou incluída numa oferta de [alojamento web OVHcloud](/links/web/hosting)).
- Dispor das credenciais das contas de e-mail que pretende migrar (as contas de e-mail fonte).
- Dispor das credenciais das contas de e-mail de destino.

## Instruções

Para aceder ao OMM, dirija-se ao endereço <https://omm.ovhcloud.com/>.

![omm](images/omm-01.png){.thumbnail .w-600}

### Criar um projeto de migração <a name="create-project"></a>

Antes de iniciar uma migração, é necessário criar um projeto. Este projeto permitirá iniciar uma ou várias migrações e segui-las.

Clique em `New migration`{.action} para iniciar a criação do seu projeto.

**Project contact email**: Introduza um endereço de e-mail que servirá para receber as credenciais e as notificações de acompanhamento das suas migrações. Não é aconselhável introduzir um dos endereços de e-mail que será migrado no seu projeto.
**Project password**: Introduza uma palavra-passe que servirá para aceder ao seu projeto. Deve conter pelo menos 10 caracteres e incluir pelo menos 1 caractere especial, 1 dígito, 1 maiúscula e 1 minúscula.

Clique em `Create my project`{.action} para iniciar a criação do projeto.

No endereço de e-mail de contacto do projeto, receberá um e-mail de confirmação contendo o identificador único do projeto e um link para aceder a ele.

![omm](images/omm-create-project-01.png){.thumbnail .w-600}

> [!primary]
>
> Em caso de inatividade durante 60 dias, o projeto de migração e todos os dados associados serão automaticamente eliminados.

### Criar uma nova migração <a name="create-migration"></a>

Depois de criar o seu projeto, faça login no projeto a partir da página inicial do [OMM](/links/web/omm):

- Clique em `Track a migration`{.action}.
- Introduza o `Project ID` recebido por e-mail.
- Introduza a `Project password` definida na sua criação.
- Clique em `Connect to project`{.action} para terminar.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Agora está na página inicial do projeto, que lhe permitirá iniciar a sua primeira migração.

- Clique em `New migration`{.action} no canto superior esquerdo da tabela.

![omm](images/omm-create-migration-02.png){.thumbnail .w-600}

Na nova página que aparece, preencha as informações de conexão da conta de origem e da conta de destino para planejar a migração ou iniciá-la imediatamente. Lembre-se de que o conteúdo da **source account** será migrado para o **destination account**.

Antes de iniciar a sua migração, é importante conhecer bem os 3 tipos de contas que podem ser migradas e para onde pode migrar:

- **OVHcloud**: O `Autodetect` é aconselhada se tiver de migrar uma conta alojada numa das ofertas de e-mail da OVHcloud. Se tiver um grande número de contas de e-mail OVHcloud, selecione uma das seguintes ofertas: `MX plan`, `E-mail Pro`, `Exchange` ou `Zimbra`. Será solicitado que faça login na conta OVHcloud associada à oferta em questão. Para mais informações, consulte a secção "[Migrar via conexão à conta cliente OVHcloud](#sso-migration)".
- **Others**: Trata-se de serviços de e-mail subscritos fora da OVHcloud. Uma lista não exaustiva de serviços de e-mail suportados pelo OMM está disponível. Se o tipo de serviço da sua conta de e-mail não estiver lá, utilize os protocolos `IMAP` ou `POP`, compatíveis com a maioria dos servidores de e-mail.
- **Importing files**: É possível migrar o conteúdo de ficheiros PST, ICS, CSV e XML Rules através do OMM para uma conta de e-mail de destino. Quando esta função é selecionada, basta arrastar e largar o seu documento na área apropriada ou navegar no seu terminal através do botão `Browse your files`{.action}.

![omm](images/omm-create-migration-03.png){.thumbnail .w-600}

Complete as informações de acordo com o tipo de conta:

- **Source account**
    - **Account type**: Selecione o tipo de conta de origem.
    - **E-mail**: Introduza o endereço de e-mail da conta de origem.
    - **Password**: Introduza a palavra-passe da conta de origem.
    - **Server URL** / **Server domain** *(consoante o tipo)*: Introduza o nome do anfitrião do servidor de e-mail associado à conta de e-mail que pretende migrar.
    - **OVHcloud Account ID** *(consoante o tipo)*: Este campo é automaticamente preenchido quando está ligado a uma conta OVHcloud. Para mais informações, consulte a secção "[Migrar via conexão à conta cliente OVHcloud](#sso-migration)".
    - **Organization** *(consoante o tipo)*: Selecione a organização associada à conta de e-mail de origem.
    - **Platform** *(consoante o tipo)*: Selecione a plataforma associada à conta de e-mail de origem.
    - **Service** *(consoante o tipo)*: Selecione o serviço associado à conta de e-mail de origem.
    - **Advanced settings** > **Delegation account ID** *(consoante o tipo)*: Quando a conta de e-mail que está a migrar é uma conta partilhada, terá de introduzir o endereço de e-mail da conta administrador nessa conta de delegação.<br><br>

- **Destination account**
    - **Account type**: Selecione o tipo de conta de destino.
    - **E-mail**: Introduza o endereço de e-mail de destino.
    - **Password**: Introduza a palavra-passe associada à conta de destino.
    - **Server URL** / **Server domain** *(consoante o tipo)*: Introduza o nome do anfitrião do servidor de e-mail associado à conta de e-mail de destino.
    - **OVHcloud Account ID** *(consoante o tipo)*: Este campo é automaticamente preenchido quando está ligado a uma conta OVHcloud. Para mais informações, consulte a secção "[Migrar via conexão à conta cliente OVHcloud](#sso-migration)".
    - **Organization** *(consoante o tipo)*: Selecione a organização associada à conta de e-mail de destino.
    - **Platform** *(consoante o tipo)*: Selecione a plataforma associada à conta de e-mail de destino.
    - **Service** *(consoante o tipo)*: Selecione o serviço associado à conta de e-mail de destino.
    - **Advanced settings** > **Delegation account ID** *(consoante o tipo)*: Quando a conta de e-mail de destino é uma conta partilhada, terá de introduzir o endereço de e-mail da conta administrador nessa conta de delegação.<br><br>

- **Start of transfer**: Pode iniciar a migração `Immediately` ou marcar `Later` para a adiar. A migração adiada permite-lhe iniciá-la automaticamente numa data e hora que definir.
- **Data to transfer**: Consoante o tipo de conta de e-mail que está a migrar e a conta de destino, esta secção indica-lhe os diferentes tipos de dados suportados durante a migração. Isto depende da conta de origem e da conta de destino.

![omm](images/omm-create-migration-04.png){.thumbnail .w-600}

> [!warning]
>
> Se migrar uma conta com funcionalidades que a conta de destino não possui, **será necessário guardar por sua conta os elementos que não poderão ser migrados pelo OMM**. Para o ajudar, consulte o nosso guia "[Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

Depois de completar as definições das contas de origem e de destino, clique em:

- `Migrate and add another account`{.action} se quiser adicionar outra migração à lista do seu projeto.
- `Migrate my account`{.action} para iniciar a migração configurada e voltar à página inicial do projeto.

### Migrar via conexão à conta cliente OVHcloud <a name="sso-migration"></a>

Durante uma migração para ou a partir de uma conta OVHcloud, é possível selecionar uma das nossas ofertas `MX plan`, `E-mail Pro`, `Exchange` ou `Zimbra`.

![omm](images/omm-migration-sso-00.png){.thumbnail .w-300}

Quando seleciona uma destas ofertas, siga as etapas abaixo:

> [!tabs]
> **Passo 1**
>>
>> - Clique em `Login`{.action} para mostrar a janela de login no área de cliente OVHcloud.
>>
>> ![omm](images/omm-migration-sso-01.png){.thumbnail .w-600}
>>
> **Passo 2**
>>
>> Faça login na conta cliente OVHcloud:
>>
>> - Introduza o identificador ou o endereço de e-mail associado à conta OVHcloud, introduza a palavra-passe correspondente e clique em `Login`{.action} ;
>> - ou clique em `Continue`{.action} se já estiver identificado.
>>
>> > [!primary]
>> >
>> > A conta cliente OVHcloud deve estar associada à oferta de e-mail que está a ser migrada.
>>
>> ![omm](images/omm-migration-sso-02.png){.thumbnail .w-600}
>>
> **Passo 3**
>>
>> - Uma nova janela aparece. Permite-lhe autorizar o OMM a aceder às funções do seu espaço cliente e listar as ofertas e contas de e-mail presentes. Por defeito, a validade (Validity) destes direitos é de 24 horas (1 day). Defina o período de validade que desejar e clique em `Authorize`{.action}.
>>
>> ![omm](images/omm-migration-sso-03.png){.thumbnail .w-600}
>>
> **Passo 4**
>>
>> - Agora será possível selecionar os seus serviços e contas através de menus suspensos. Isto facilita a pesquisa dos elementos e evita erros de introdução. No entanto, será necessário introduzir a palavra-passe associada à conta de e-mail selecionada.
>>
>> Exemplo com um serviço Zimbra:
>>
>> ![omm](images/omm-migration-sso-04.png){.thumbnail .w-600}

> [!warning]
>
> É possível desligar os acessos atuais a partir de um área de cliente OVHcloud clicando em `Log out`{.action}, depois, sob a menção `OVHcloud account ID`, clique em `Log out of the account`{.action}.
>
> ![omm](images/omm-migration-sso-05.png){.thumbnail .w-300}

### Seguir um projeto de migração <a name="follow-migration"></a>

Existem duas formas de aceder ao acompanhamento do projeto de migração:

- No e-mail recebido durante a criação do seu projeto, encontrará um link que lhe permite aceder à página de login do projeto com o `Project ID` pré-preenchido. Apenas o `Project password` terá de ser introduzido.
- A partir da página inicial do [OMM](/links/web/omm), clique em `Track a migration`{.action}. Introduza depois o seu `Project ID` e o seu `Project password`.

Clique depois em `Connect to project`{.action} para aceder à página inicial do projeto e seguir as suas migrações.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

A partir desta página, encontra a lista das migrações em curso ou programadas. O estado do projeto também aparece à direita.

Clique no botão `⋮`{.action} à direita da linha de uma migração para mostrar as Opções:

- `See more details`{.action}: É redirecionado para uma página que lhe permite seguir o progresso de uma migração e ler o relatório uma vez a migração terminada.
- `Cancel migration`{.action}: Permite cancelar a migração em curso. Os elementos já migrados serão mantidos na conta de destino.
- `Delete migration data (GDPR)`{.action}: Esta opção inicia a eliminação de todos os dados relativos à migração da conta. No entanto, manterá as informações sobre os eventos ocorridos durante a migração.

![omm](images/omm-migration-follow-02.png){.thumbnail .w-600}

Exemplo de acompanhamento de migração:

![omm](images/omm-migration-follow-03.png){.thumbnail .w-600}

> [!primary]
>
> Se ocorrer um erro durante a migração, será fornecido um link para o registo de erros na janela `See more details`{.action}.

## Quer saber mais?

[Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)

[Migrar um endereço de e-mail MX Plan para uma conta E-mail Pro ou Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support). 

Fale com a nossa [comunidade de utilizadores](/links/community).