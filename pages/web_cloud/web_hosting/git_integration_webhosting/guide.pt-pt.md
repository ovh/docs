---
title: "Configurar e utilizar o Git com o seu alojamento web OVHcloud"
excerpt: "Saiba como configurar e utilizar o Git com o seu alojamento web na sua Área de Cliente OVHcloud"
updated: 2026-05-04
---

## Objetivo

No atual panorama digital, as empresas estão a tornar-se cada vez mais dinâmicas e inovadoras. A capacidade de gerir e implementar eficazmente o código do seu website é essencial para manter a competitividade e a perenidade da sua marca. O Git, o sistema de gestão de versões mais utilizado do mundo, permite armazenar o código do seu website em plataformas como o GitHub, permitindo uma melhor rastreabilidade das modificações, assim como uma automatização e implementações mais rápidas. Enquanto cliente OVHcloud, beneficia de uma infraestrutura robusta para alojar o seu website, enquanto explora as numerosas vantagens do Git e do GitHub para o desenvolvimento e evolução do seu website.

**Saiba como configurar e utilizar o Git com o seu alojamento web a partir da Área de Cliente OVHcloud.**

## Requisitos

- Ter um serviço de [alojamento web OVHcloud](/links/web/hosting).
- Ter uma conta [GitHub](https://github.com/) e ter acesso à mesma.

> [!primary]
>
> À data, apenas a plataforma GitHub é suportada no âmbito da utilização com os serviços de alojamento Web da OVHcloud.

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

> [!primary]
>
> Para a associação e configuração do Git, deverá efetuar alterações na sua conta GitHub. Antes de começar o guia, aceda à sua conta GitHub.

### Associar um diretório a Git <a name="associateGitRepo"></a>

> [!warning]
>
> Quando você associa um diretório ao Git, todos os domínios presentes nesse diretório também serão associados ao Git. Por exemplo, se o diretório correspondente ao site que associou for `www`, então todos os domínios associados ao diretório `www` também serão associados ao Git.

<!-- CP-STEPS-START:associate-git-repo -->
Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na tabela que aparece, clique no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Associar Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Passo 5**
>>
>> O formulário de associação do Git aparece. Vários elementos devem ser configurados:
>>
>> - Repositório GitHub
>> - Ramo do repositório GitHub
>> - Chave SSH (para um repositório GitHub privado)
>> - Webhook (opcional)
>>
>> Continue a ler este guia para obter as informações necessárias para preencher os campos obrigatórios.
<!-- CP-STEPS-END:associate-git-repo -->

<!-- CP-STEPS-START:git-association-form -->
#### Definir o repositório GitHub

Insira o endereço do seu repositório GitHub. Se você ainda não tem um repositório GitHub para o seu projeto, crie um.

Para criar um novo repositório:

- Ligue-se à sua conta GitHub.
- Clique na sua imagem de perfil no canto superior direito e, a seguir, em `Your repositories`{.action}.
- À direita do ecrã que se abrir, clique em `New`{.action}.

Defina um nome para o seu depósito e preencha as informações necessárias.

> [!warning]
>
> Marque a opção `Add a README file` para que o GitHub inicialize corretamente o seu repositório.
>

Por fim, clique em `Create Repository`{.action}.

Copie o endereço do seu repositório GitHub. Esta deve ser da forma:

- `https://github.com/<username>/<repository_name>.git` para um repositório público.
- `git@github.com:<username>/<repository_name>.git` para um repositório privado.

Volte para o formulário de associação do Git e cole o endereço do repositório GitHub no campo `Repositório`{.action}. Se o formato do endereço não estiver correto, aparecerá a seguinte mensagem de erro:

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-branch-name.png){.thumbnail}

Agora defina o ramo do seu repositório GitHub. O branch padrão é "main`", mas se você quiser usar outro branch, crie um no GitHub seguindo as etapas abaixo:

- Ligue-se à sua conta GitHub.
- Clique na sua imagem de perfil no canto superior direito e, a seguir, em `Your repositories`{.action}.
- Dirija-se ao repositório GitHub em questão.
- Clique em `Main`{.action} e, em seguida, em `View all rams`{.action}, ou clique diretamente no separador `x Branch`{.action}.
- À direita do ecrã que se abrir, clique em `New branch`{.action}.
- Indique o nome do novo ramo e confirme clicando em `Create new branch`{.action}.

Volte para o formulário de associação de Git na sua Área de Cliente OVHcloud e indique o nome do novo ramo que acabou de criar.

Se indicar o endereço de um repositório GitHub privado (do tipo `git@github.com:<username>/<repository_name>.git`), um campo `SSH key` (chave SSH) será apresentado abaixo no campo `Branch`.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/field-ssh-key.png){.thumbnail}

Para configurar a chave SSH, consulte a etapa "Associar uma chave SSH ao GitHub (unicamente para os repositórios GitHub privados)" abaixo.

#### Associar uma chave SSH ao GitHub (apenas para os repositórios GitHub privados) <a name="linkSSHKey"></a>

> [!primary]
>
> **Porque é que a chave SSH é necessária apenas para um depósito privado?**
>
> Quando o repositório do GitHub é público, os arquivos podem ser recuperados sem autenticação, o que significa que o Git pode clonar e atualizar o código sem a necessidade de uma chave SSH. Por outro lado, se o seu repositório é privado, o GitHub exige uma autenticação para aceder. A chave SSH permite estabelecer essa ligação segura e garantir que apenas os utilizadores autorizados podem interagir com o repositório.

> [!primary]
>
> A geração de uma chave SSH é uma etapa crucial, pois estabelece uma ligação segura e encriptada entre o diretório do seu website e o repositório GitHub. Esta chave garante que as transferências de dados e as alterações do código são efetuadas de forma segura e autenticada, evitando o acesso não autorizado e garantindo a integridade do código.
>

Copie a sua chave SSH clicando no botão à direita.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/field-ssh-key-copy.png){.thumbnail}

Registe a chave SSH na sua conta GitHub:

- Ligue-se à sua conta GitHub.
- Clique na sua imagem de perfil no canto superior direito e, a seguir, em `Settings`{.action}.
- Na nova página, clique em `SSH and GPG keys`{.action} na coluna da esquerda.
- Selecione `New SSH key`{.action} ou `Add SSH key`{.action}.

Aparece o formulário que permite adicionar uma nova chave SSH:

- **Title**: adicione uma descrição para a sua chave SSH. Por exemplo, pode dar um nome a esta chave "OVHcloud".
- **Type of key**: deixe o valor predefinido `authentication key`{.action}
- **Key**: cole a sua chave SSH.

Para validar as informações, clique em `Add SSH key`{.action}. Se solicitado, confirme o acesso à sua conta no GitHub.

#### Configurar a implementação automática

Na parte inferior do formulário de associação do Git, aparece uma secção `Configurar a implementação automática`{.action}, acompanhada do URL do webhook. Configurar um webhook permite que o seu repositório GitHub notifique automaticamente o seu alojamento web da OVHcloud dos eventos que ocorrem no repositório GitHub (nova implementação, alteração do código, etc.). Esta funcionalidade é particularmente útil se trabalha em grupo no mesmo projeto e deseja manter-se atualizado de todas as modificações do repositório GitHub. Para saber mais, descubra como [configurar um webhook no GitHub](#configureWebhook).

#### Validar a associação do Git

Antes de validar o formulário de associação do Git, certifique-se de que:

- A sua chave SSH foi corretamente registada na sua conta GitHub.
- O endereço do seu repositório GitHub está correto. Deve ser da forma `https://github.com/<username>/<repository_name>.git`.
- O nome do ramo do repositório GitHub está correto.
- O diretório de instalação está vazio.

Para validar as informações do formulário de associação do Git, clique em `Aplicar configuração`{.action}.
<!-- CP-STEPS-END:git-association-form -->

### Ativação da associação do Git

<!-- CP-STEPS-START:git-activation-status -->
#### Sucesso da associação do Git

Após validar o formulário de associação do Git, é redirecionado para a página da aba `Meus sites`{.action}.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/git-activation-ongoing.png){.thumbnail}

Um banner verde indica que o Git está sendo ativado. Siga a ativação do Git ao clicar no link `Tarefas em curso`{.action}.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ongoing-tasks/ongoing-task-git-activation.png){.thumbnail}

O estado `Em curso`{.action} indica que a associação do Git está em curso. O processo pode demorar alguns minutos. Quando a tarefa estiver concluída, o estado `Ativo`{.action} é apresentado.

Também pode seguir a evolução da ativação do Git na aba `Meus sites`{.action}. Na coluna `Git`{.action} da tabela, a menção `Em curso`{.action} apresentada na linha do site web relevante indica que o Git está em curso de ativação.

Quando a associação do Git é efetuada, o estado `Ativo`{.action} aparece na coluna `Git`{.action} para o site web relevante.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Erros da associação do Git

Na tabela da aba `Meus sites`{.action}, identifique as linhas correspondentes ao diretório do site web que pretende associar ao Git. Na coluna `Git`, se a menção `Erro` aparecer, isso significa que pelo menos um dos seguintes erros ocorreu:

- A chave SSH não foi registada na sua conta GitHub.
- O diretório de instalação não está vazio.
- O endereço do repositório GitHub não existe ou está errado.
- O ramo do repositório GitHub não existe ou o seu nome está errado.

Para conhecer a causa exata do erro, consulte as informações do último deployment. Na tabela, clique no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Informações sobre a última implantação`{.action}.

![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Depois de identificar o(s) erro(s), associe o Git novamente. Repita a operação clicando no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Associar Git`{.action}.
<!-- CP-STEPS-END:git-activation-status -->

### Implementar o seu repositório GitHub no seu alojamento web OVHcloud

<!-- CP-STEPS-START:deploy-github-repo -->
Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na tabela que aparece, clique no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Implementar Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Uma mensagem de confirmação aparece, bem como uma caixa de verificação que lhe indica que, em caso de conflito durante o deployment, pode forçar as modificações remotas (do repositório GitHub) sobre o seu repositório local. Marque ou não a caixa conforme a sua escolha, em seguida, clique em `Validar`{.action} para validar o deployment.
>>
>> > [!warning]
>> >
>> > Para evitar perder as suas modificações locais, lembre-se de as guardar antes de as sobrescrever pelas modificações da branch remota.
>>
>> A nova versão do seu site web foi bem deployada na sua hospedagem web OVHcloud. Se outras pessoas trabalham no mesmo projeto e fazem modificações no repositório GitHub, pode [configurar um webhook no GitHub](#configureWebhook) para que as suas modificações sejam automaticamente deployadas na sua hospedagem web. Isso evita que tenha de deployar o Git manualmente, e o seu site web permanecerá sempre atualizado.
<!-- CP-STEPS-END:deploy-github-repo -->

### Modificar um nome de domínio

<!-- CP-STEPS-START:modify-domain-name -->
Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na tabela que aparece, clique no botão `>`{.action} à esquerda do nome do site web relevante para mostrar os nomes de domínio e subdomínios associados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Em seguida, clique no botão `⁝`{.action} à direita do nome de domínio ou subdomínio relevante, em seguida, em `Modificar um domínio`{.action}.
>>
>> ![Opções de domínios associados](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Dois cenários são possíveis:
>>
>> **1 - Um ou mais outros nomes de domínio estão associados ao site web**
>>
>> A seguinte janela aparece:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}
>>
>> Modifique as informações conforme necessário e clique em `Seguinte`{.action}.
>>
>> Uma segunda janela de confirmação aparece com o resumo das suas alterações:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}
>>
>> Clique em `Validar`{.action} para validar as modificações do seu nome de domínio.
>>
>> **2 - Apenas um nome de domínio está associado ao site web**
>>
>> A seguinte janela aparece:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}
>>
>> Como a mensagem indica, [elimine a sua associação Git](#deleteGitAssociation) primeiro antes de modificar o seu nome de domínio.
<!-- CP-STEPS-END:modify-domain-name -->

### Desassociar um nome de domínio

<!-- CP-STEPS-START:detach-domain-name -->
Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na tabela que aparece, clique no botão `>`{.action} à esquerda do nome do site web relevante para mostrar os nomes de domínio e subdomínios associados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Em seguida, clique no botão `⁝`{.action} à direita do nome de domínio ou subdomínio relevante, em seguida, em `Destacar um domínio`{.action}.
>>
>> ![Opções de domínios associados](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Dois cenários são possíveis:
>>
>> **1 - Um ou mais outros nomes de domínio estão associados ao site web**
>>
>> A seguinte janela aparece.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Clique em `Validar`{.action} para validar o desanexamento do seu nome de domínio.
>>
>> **2 - Apenas um nome de domínio está associado ao site web**
>>
>> A seguinte janela aparece:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>>
>> Como a mensagem indica, [elimine a sua associação Git](#deleteGitAssociation) primeiro antes de desanexar o seu nome de domínio.
<!-- CP-STEPS-END:detach-domain-name -->

### Configurar o Git

<!-- CP-STEPS-START:configure-git -->
Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na tabela que aparece, clique no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Configurar Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Etapa 4**
>>
>> As seguintes informações aparecem:
>>
>> - Chave SSH: Se ainda não o fez, [registe a sua chave SSH no seu conta GitHub](#linkSSHKey).
>> - Repositório: Endereço do seu repositório Git. Este campo está cinzento porque não pode modificar o endereço do repositório Git. Para mudar a URL do repositório Git, tem de [eliminar a associação Git do seu diretório](#deleteGitAssociation) e depois [associar o diretório a Git novamente](#associateGitRepo).
>> - Ramo: Nome do ramo do repositório GitHub. Pode modificar este campo se necessário.
>> - URL do webhook: Se pretende otimizar os seus deployments no Git, [configure o webhook no GitHub](#configureWebhook).
<!-- CP-STEPS-END:configure-git -->

### Informações da última implementação

Depois de ter implementado o seu repositório GitHub no seu alojamento web, pode consultar as informações sobre a última implementação, como os erros, os testes ou qualquer informação útil.

<!-- CP-STEPS-START:latest-deployment-info -->
Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na tabela que aparece, clique no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Informações sobre a última implementação`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
>> Neste ecrã, encontra todas as informações relativas ao último deployment.
<!-- CP-STEPS-END:latest-deployment-info -->

### Eliminar a associação de Git <a name="deleteGitAssociation"></a>

<!-- CP-STEPS-START:delete-git-association -->
Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na tabela que aparece, clique no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Eliminar Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Etapa 4**
>>
>> A seguinte janela aparece:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}
>>
>> A mensagem informa que a eliminação aplica-se a todos os nomes de domínio associados ao seu site web. Marque a caixa `Pretende esvaziar o conteúdo do diretório <o_seu_repositório>?`{.action} se quiser também eliminar o conteúdo (pastas e ficheiros) do diretório.
>> 
>> 1\. Se marcar a caixa, a seguinte janela aparece:
>> 
>> ![Meus sites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}
>> 
>> Clique em `Validar`{.action} para validar a eliminação da associação Git do seu diretório e do seu conteúdo.
>> 
>> 2\. Se não marcar a caixa, a seguinte janela aparece:
>> 
>> ![Meus sites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}
>> 
>> Clique em `Validar`{.action} para validar a eliminação da associação Git do seu diretório.
<!-- CP-STEPS-END:delete-git-association -->

### Configurar um webhook no GitHub

#### Obter o URL do webhook

> [!primary]
>
> Se você já estiver no formulário de associação do Git, copie o URL do webhook e vá para a etapa "[Configurar o webhook](#configureWebhook)".

<!-- CP-STEPS-START:configure-webhook -->
Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na tabela que aparece, clique no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Configurar Git`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
> **Etapa 4**
>> 
>> Na parte inferior do formulário que aparece, copie o endereço contido no campo `URL do webhook`{.action}. Agora, deve registar a URL e configurar o webhook no seu conta GitHub.
<!-- CP-STEPS-END:configure-webhook -->

#### Configurar o webhook <a name="configureWebhook"></a>

Aceda à sua conta GitHub e ao repositório onde pretende configurar o webhook. Aceda ao separador `Settings`{.action} e, no menu lateral dos parâmetros, clique em `Webhooks`{.action}". Clique no botão `Add webhook`{.action} para aceder ao formulário:

- **Payload URL**: introduza o URL fornecido no formulário de associação de Git (`URL do webhook`{.action}).
- **Content type**: escolha `application/json`{.action} como tipo de conteúdo para os dados enviados.
- **Secret**: o segredo é facultativo. O GitHub irá utilizá-lo para assinar as mensagens enviadas pelo webhook, reforçando assim a segurança.
- **SSL verification**: se o seu website suporta o HTTPS, deixe esta opção ativada para uma segurança acrescida.
- **Which events would you like to trigger this webhook?**: selecione os eventos que irão despoletar o envio do webhook. Para uma implementação automática, `Just the push event`{.action} (apenas o evento push) é frequentemente suficiente, mas pode escolher `Send me everything`{.action} para receber notificações para todos os eventos.
- **Active**: certifique-se de que a caixa está selecionada para ativar o webhook.

Clique em `Add webhook`{.action} para guardar e ativar o seu novo webhook.

#### Testar o seu webhook

Depois de criar o seu webhook no GitHub, vá à lista dos seus webhooks e selecione o que acabou de criar, ou clique em `Edit`{.action}.

No ecrã que vai aparecer, clique no separador `Recent Deliveries`{.action}. Para enviar um evento de teste especificamente, o GitHub normalmente envia um evento `ping` quando o webhook é criado, e você pode usar o botão `Redeliver`{.action} ao lado deste evento para testá-lo.

Se o teste tiver sido executado, o separador `Response`{.action} devolve um código 200. Se um código de erro for devolvido (geralmente 500 ou 400), isso significa que o webhook foi mal configurado. Volte para o formulário de adição de um webhook e verifique as informações, especificamente o URL do webhook fornecido pela OVHcloud.

#### Utilizar o webhook

Depois de configurar o webhook, o código do site será atualizado automaticamente sempre que ocorrerem alterações no repositório GitHub. Por exemplo, se um dos seus colegas efetuar alterações no repositório GitHub, o código do seu website será atualizado localmente (no seu alojamento OVHcloud).

### Conclusão

Acabou de associar o código do seu website com o Git, através do seu repositório GitHub. Agora pode implementar as modificações realizadas no repositório GitHub para o seu alojamento web ou implementá-las de forma automatizada graças ao webhook, consultar os logs das suas implementações e efetuar múltiplas ações, tudo a partir da sua Área de Cliente, em apenas alguns cliques.

## Quer saber mais?

[Publicar um site num alojamento web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).
