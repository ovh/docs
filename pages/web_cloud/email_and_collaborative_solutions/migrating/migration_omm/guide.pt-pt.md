---
title: Migração das contas de E-mail utilizando o OVH Mail Migrator
excerpt: Descubra como utilizador o OVH Mail Migrator
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

[OVH Mail Migrator](/links/web/omm) é uma ferramenta criada pela OVHcloud que responde à necessidade de reversibilidade. Permite migrar as suas contas de e-mail para os seus endereços de e-mail da OVHcloud ou para um serviço de e-mail externo. O processo suporta diferentes tipos de conteúdos, tais como e-mails, contactos, calendários e tarefas, desde que estes sejam compatíveis com os seus endereços de e-mail.

**Aprenda a migrar as suas contas de e-mail para a OVHcloud através da nossa ferramenta OVH Mail Migrator.**

## Requisitos

- Ter um serviço de e-mail externo ou na OVHcloud, tais como uma oferta [Zimbra](/links/web/zimbra), [Exchange](/links/web/emails), [E-mail Pro](/links/web/email-pro) ou MX Plan (através da oferta MX Plan única ou incluída numa oferta de [alojamento web OVHcloud](/links/web/hosting)).
- Ter os identificadores relativos às contas de e-mail que pretende migrar (as contas de e-mail de origem).
- Ter os identificadores relativos às contas de e-mail de destino.

## Instruções

Para aceder ao OMM, dirija-se ao endereço <omm.ovhcloud.com>

![omm](images/omm-01.png){.thumbnail .w-600}

### Criar um projeto de migração <a name="create-project"></a>

Antes de iniciar uma migração, é necessário criar um projeto. Este projeto permitirá iniciar uma ou várias migrações e acompanhá-las.

Clique em `New migration`{.action} para iniciar a criação do seu projeto:

**Project contact email** : Introduza um endereço de e-mail que servirá para receber os identificadores e as notificações de acompanhamento das suas migrações. Não é aconselhável introduzir um dos endereços de e-mail que serão migrados no seu projeto.
**Project password** : Introduza uma palavra-passe que servirá para aceder ao seu projeto. Deve conter pelo menos 10 caracteres, incluir pelo menos 1 caractere especial, 1 número, 1 maiúscula e 1 minúscula.

Clique em `Create my project`{.action} para iniciar a criação do projeto.

No endereço de e-mail de contacto do projeto, receberá um e-mail de confirmação contendo o identificador único do projeto e um link para aceder a ele.

![omm](images/omm-create-project-01.png){.thumbnail .w-600}

> [!primary]
>
> O projeto de migração e os dados associados a este serão automaticamente eliminados após 60 dias de inatividade.

### Criar uma migração <a name="create-migration"></a>

Depois de criar o seu projeto, inicie sessão no mesmo. a partir da página inicial de [OMM](/links/web/omm):

- Clique em `Track a migration`{.action}.
- Introduza o `Project ID` recebido por e-mail.
- Introduza a `Project password` que definiu na sua criação.
- Clique em `Connect to project`{.action} para terminar.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Agora está na página inicial do projeto que lhe permitirá iniciar a sua primeira migração.

- Clique em `New migration`{.action} no canto superior esquerdo da tabela.

![omm](images/omm-create-migration-02.png){.thumbnail .w-600}

Aparece uma nova página na qual vai definir as informações de ligação à conta de origem e à conta de destino para poder planejar ou iniciar diretamente esta migração. Para recordar, o conteúdo da **source account** será migrado para a **destination account**.

Antes de iniciar a sua migração, é importante conhecer bem os 3 tipos de contas que pode migrar e para onde pode migrar:

- **OVHcloud** : a `Auto detection` é aconselhada se tiver de migrar uma conta alojada em qualquer oferta de e-mail da OVHcloud. Se tiver um grande número de contas de e-mail OVHcloud, selecione entre as ofertas `MX plan`, `E-mail Pro`, `Exchange` e `Zimbra`. Será solicitado que se conecte à conta OVHcloud associada à oferta associada à migração. Para mais informações, consulte a secção « [Migrar através de uma ligação à conta cliente OVHcloud](#sso-migration) ».
- **Others** : referem-se a serviços de e-mail subscritos fora da OVHcloud, encontra uma lista não exaustiva de serviços de e-mail suportados pelo OMM. Se o tipo de serviço da sua conta de e-mail não estiver listado, utilize os protocolos `Imap` ou `Pop`, que são compatíveis com a maioria dos servidores de e-mail.
- **Importing files** : É possível migrar o conteúdo de ficheiros PST, ICS, CSV e Xml Rules através do OMM para uma conta de e-mail de destino. Quando esta função é selecionada, basta arrastar e largar o seu documento na zona prevista para esse efeito ou navegar no seu terminal através do botão `Browse your files`{.action}.

![omm](images/omm-create-migration-03.png){.thumbnail .w-600}

Complete as informações de acordo com o tipo de conta :

- **Source account**
    - **Account type** : selecione o tipo de conta de origem.
    - **E-mail** : introduza o endereço de e-mail da conta de origem.
    - **Password** : introduza a palavra-passe da conta de origem.
    - **Server URL** / **Server domain** *(consoante o tipo)*: introduza o nome do anfitrião do servidor de e-mail associado à conta de e-mail que pretende migrar.
    - **OVHcloud Account ID** *(consoante o tipo)*: este campo é automaticamente preenchido quando está ligado a uma conta OVHcloud. Para mais informações, consulte a secção « [Migrar através de uma ligação à conta cliente OVHcloud](#sso-migration) ».
    - **Organization** *(consoante o tipo)*: selecione a organização associada à conta de e-mail de origem.
    - **Platform** *(consoante o tipo)*: selecione a plataforma associada à conta de e-mail de origem.
    - **Service** *(consoante o tipo)*: selecione o serviço associado à conta de e-mail de origem.
    - **Advanced settings** > **Delegation account ID** *(consoante o tipo)*: Quando a conta de e-mail que está a migrar é uma conta partilhada, tem de introduzir o endereço de e-mail da conta administrativa nessa conta de delegação.
- **Destination account**
    - **Account type** : selecione o tipo de conta de destino.
    - **E-mail** : introduza o endereço de e-mail de destino.
    - **Password** : introduza a palavra-passe associada à conta de destino.
    - **Server URL** / **Server domain** *(consoante o tipo)*: introduza o nome do anfitrião do servidor de e-mail associado à conta de e-mail de destino.
    - **OVHcloud Account ID** *(consoante o tipo)*: este campo é automaticamente preenchido quando está ligado a uma conta OVHcloud. Para mais informações, consulte a secção « [Migrar através de uma ligação à conta cliente OVHcloud](#sso-migration) ».
    - **Organization** *(consoante o tipo)*: selecione a organização associada à conta de e-mail de destino.
    - **Platform** *(consoante o tipo)*: selecione a plataforma associada à conta de e-mail de destino.
    - **Service** *(consoante o tipo)*: selecione o serviço associado à conta de e-mail de destino.
    - **Advanced settings** > **Delegation account ID** *(consoante o tipo)*: Quando a conta de e-mail de destino é uma conta partilhada, tem de introduzir o endereço de e-mail da conta administrativa nessa conta de delegação.
- **Start of transfer** : pode iniciar a migração `imediatamente` ou marcar `Mais tarde` para adiar a migração. A migração adiada permite-lhe iniciar automaticamente a migração numa data e hora que definir.
- **Data to transfer** : Consoante o tipo de conta de e-mail que está a migrar e a conta de destino, esta secção indica-lhe os diferentes tipos de dados que são suportados durante a migração. Isto depende da conta de origem e da conta de destino.

![omm](images/omm-create-migration-04.png){.thumbnail .w-600}

> [!warning]
>
> Se migrar uma conta com funcionalidades que a conta de destino não possui, será necessário guardar por si os elementos que não poderão ser migrados pelo OMM. Para o ajudar, consulte o nosso guia « [Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) ».

Depois de completar os parâmetros das contas de origem e de destino, clique em:

- `Migrate and add another account`{.action} se quiser adicionar outra migração à lista do seu projeto 
- `Migrate my account`{.action} para iniciar a migração configurada e voltar à página inicial do projeto.

### Migrar através de uma ligação à conta cliente OVHcloud <a name="sso-migration"></a>

Durante uma migração para ou a partir de uma conta OVHcloud, pode selecionar uma das nossas ofertas `MX plan`, `E-mail Pro`, `Exchange` e `Zimbra`.

![omm](images/omm-migration-sso-00.png){.thumbnail .w-300}

Quando seleciona uma destas ofertas, siga as etapas abaixo:

> [!tabs]
> **Etapa 1**
>>
>> - Clique em `Login`{.action} para mostrar a janela de login no espaço cliente OVHcloud.
>>
>> ![omm](images/omm-migration-sso-01.png){.thumbnail .w-600}
>>
> **Etapa 2**
>>
>> Faça login na conta cliente OVHcloud:
>>
>> - Introduza o identificador ou o endereço de e-mail associado à conta OVHcloud, introduza a palavra-passe associada e clique em `Login`{.action}.
>> - Clique em `Continue`{.action} se já estiver identificado.
>>
>> > [!primary]
>> >
>> > A conta cliente OVHcloud tem de estar associada à oferta de e-mail que está a ser migrada.
>>
>> ![omm](images/omm-migration-sso-02.png){.thumbnail .w-600}
>>
> **Etapa 3**
>>
>> - Aparece uma nova janela, esta permite autorizar o OMM a aceder às funções do seu espaço cliente listando as ofertas e contas de e-mail presentes. Por defeito, a validade (Validity) destes direitos é de 24h (1day). Defina a temporalidade que lhe convier, depois clique em `Authorize`{.action}.
>>
>> ![omm](images/omm-migration-sso-03.png){.thumbnail .w-600}
>>
> **Etapa 4**
>>
>> - Agora será possível selecionar os seus serviços e contas através de menus suspensos, facilitando a pesquisa dos elementos e evitando erros de introdução. É, no entanto, necessário introduzir a palavra-passe associada à conta de e-mail selecionada.
>>
>> Exemplo com um serviço Zimbra:
>>
>> ![omm](images/omm-migration-sso-04.png){.thumbnail .w-600}

> [!warning]
>
> É possível desligar os acessos atuais a partir de um espaço cliente OVHcloud clicando em `Log out`{.action}, depois, sob a menção `OVHcloud account ID`, clique em `Log out the account`{.action}.
>
> ![omm](images/omm-migration-sso-05.png){.thumbnail .w-300}

### Seguir um projeto de migração <a name="follow-migration"></a>

Existem dois meios para aceder ao acompanhamento do projeto de migração:

- A partir do e-mail recebido durante a criação do seu projeto. Encontrará um link que lhe permite aceder à página de login do projeto com o `Project ID` pré-preenchido, apenas o `Project password` tem de ser introduzido.
- A partir da página inicial OMM, clique em `Track a migration`{.action}. Introduza o seu `Project ID` e o seu `Project password`.

Clique em seguida em `Connect to project`{.action} para aceder à página inicial do projeto e seguir as suas migrações.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

A partir desta página, encontra a lista das migrações em curso ou programadas. O estado do projeto também é mostrado à direita.

Clique no botão `⋮`{.action} à direita da linha de uma migração para mostrar as opções :

- `See more details`{.action} : É redirecionado para uma página que lhe permite seguir o progresso de uma migração ou ler o relatório uma vez que esta esteja concluída
- `Cancel migration`{.action} : Permite cancelar a migração em curso. Os elementos já migrados são conservados na conta de destino.
- `Delete migration data (GDPR)`{.action} : esta opção desencadeia a eliminação de todos os dados relativos à migração da conta. Mantém, no entanto, as informações sobre os eventos ocorridos durante a migração.

![omm](images/omm-migration-follow-02.png){.thumbnail .w-600}

Exemplo de acompanhamento de migração :

![omm](images/omm-migration-follow-03.png){.thumbnail .w-600}

> [!primary]
>
> Se ocorrer um erro durante a migração, um link para o registo de erros é fornecido na janela `See more details`{.action}

## Quer saber mais?

[Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)

[Migrar um endereço de e-mail MX Plan para uma conta E-mail Pro ou Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)

Para serviços especializados (posicionamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se desejar beneficiar de um apoio no uso e na configuração das suas soluções OVHcloud, propomos-lhe consultar as nossas diferentes [ofertas de apoio](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).