---
title: "Configurar e utilizar o Git com o seu alojamento web OVHcloud"
excerpt: "Saiba como configurar e utilizar o Git com o seu alojamento web na sua Área de Cliente OVHcloud"
updated: 2024-09-12
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

No atual panorama digital, as empresas estão a tornar-se cada vez mais dinâmicas e inovadoras. A capacidade de gerir e implementar eficazmente o código do seu website é essencial para manter a competitividade e a perenidade da sua marca. O Git, o sistema de gestão de versões mais utilizado do mundo, permite armazenar o código do seu website em plataformas como o GitHub, permitindo uma melhor rastreabilidade das modificações, assim como uma automatização e implementações mais rápidas. Enquanto cliente OVHcloud, beneficia de uma infraestrutura robusta para alojar o seu website, enquanto explora as numerosas vantagens do Git e do GitHub para o desenvolvimento e evolução do seu website.

**Saiba como configurar e utilizar o Git com o seu alojamento web a partir da Área de Cliente OVHcloud.**

## Requisitos

- Ter um serviço de [alojamento web OVHcloud](/links/web/hosting).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager), na secção Web Cloud.
- Ter uma conta [GitHub](https://github.com/){.external} e ter acesso à mesma.

> [!primary]
>
> À data, apenas a plataforma GitHub é suportada no âmbito da utilização com os serviços de alojamento Web da OVHcloud.

## Instruções

> [!primary]
>
> Para a associação e configuração do Git, deverá efetuar alterações na sua conta GitHub. Antes de começar o guia, aceda à sua conta GitHub.
>

### Associar um diretório a Git <a name="associateGitRepo"></a>

> [!warning]
>
> Quando você associa um diretório ao Git, todos os domínios presentes nesse diretório também serão associados ao Git. Por exemplo, se o diretório correspondente ao site que associou for `www`, então todos os domínios associados ao diretório `www` também serão associados ao Git.
>

Aceda à [Área de Cliente OVHcloud](/links/manager) e efetue as seguintes ações:

- Aceda ao separador `Web Cloud`{.action}.
- Selecione o seu alojamento na rubrica `Alojamentos`{.action}, à esquerda.
- Clique no separador `Multisite`{.action}.
- Na tabela que aparece, identifique a linha correspondente ao diretório que deseja associar ao Git.
- Clique no botão `...`{.action} e selecione `Associar o Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/link-git.png){.thumbnail}

O formulário de associação do Git é exibido. É necessário configurar vários elementos:

- Chave SSH
- Depósito GitHub
- Ramo do repositório GitHub
- Webhook (opcional)

#### Associar uma chave SSH ao GitHub <a name="linkSSHKey"></a>

> [!primary]
>
> A geração de uma chave SSH é uma etapa crucial, pois estabelece uma ligação segura e encriptada entre o diretório do seu website e o repositório GitHub. Esta chave garante que as transferências de dados e as alterações do código são efetuadas de forma segura e autenticada, evitando o acesso não autorizado e garantindo a integridade do código.
>

Copie e registe a chave SSH na sua conta GitHub. Isto permite estabelecer uma ligação segura sem necessidade de introduzir uma palavra-passe em cada operação Git que será levada a cabo.

- Ligue-se à sua conta GitHub.
- Clique na sua imagem de perfil no canto superior direito e, a seguir, em `Settings`{.action}.
- Na nova página, clique em `SSH and GPG keys`{.action} na coluna da esquerda.
- Selecione `New SSH key`{.action} ou `Add SSH key`{.action}.

Aparece o formulário que permite adicionar uma nova chave SSH:

- **Title** : adicione uma descrição para a sua chave SSH. Por exemplo, pode dar um nome a esta chave "OVHcloud".
- **Type of key** : deixe o valor predefinido `authentication key`{.action}
- **Key** : cole a sua chave SSH.

Para validar as informações, clique em `Add SSH key`{.action}. Se solicitado, confirme o acesso à sua conta no GitHub.

#### Definir o repositório GitHub

Volte para o formulário de associação do Git na sua Área de Cliente OVHcloud. Deve introduzir o endereço do seu repositório GitHub. Se você ainda não tem um repositório GitHub para o seu projeto, crie um.

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

Copie o endereço do seu repositório GitHub. Esta deve ser da forma `https://github.com/<username>/<repository_name.git>`. Volte para o formulário de associação do Git e cole o endereço do repositório GitHub no campo `Repositório`{.action}. Se o formato do endereço não estiver correto, aparecerá a seguinte mensagem de erro:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-branch-name.png){.thumbnail}

Agora defina o ramo do seu repositório GitHub. O branch padrão é "main`", mas se você quiser usar outro branch, crie um no GitHub seguindo as etapas abaixo:

- Ligue-se à sua conta GitHub.
- Clique na sua imagem de perfil no canto superior direito e, a seguir, em `Your repositories`{.action}.
- Dirija-se ao repositório GitHub em questão.
- Clique em `Main`{.action} e, em seguida, em `View all rams`{.action}, ou clique diretamente no separador `x Branch`{.action}.
- À direita do ecrã que se abrir, clique em `New branch`{.action}.
- Indique o nome do novo ramo e confirme clicando em `Create new branch`{.action}.

Volte para o formulário de associação de Git na sua Área de Cliente OVHcloud e indique o nome do novo ramo que acabou de criar.

#### Configurar a implementação automática

Na parte inferior do formulário de associação do Git, aparece uma secção `Configurar a implementação automática`{.action}, acompanhada do URL do webhook. Configurar um webhook permite que o seu repositório GitHub notifique automaticamente o seu alojamento web da OVHcloud dos eventos que ocorrem no repositório GitHub (nova implementação, alteração do código, etc.). Esta funcionalidade é particularmente útil se trabalha em grupo no mesmo projeto e deseja manter-se atualizado de todas as modificações do repositório GitHub. Para saber mais, descubra como [configurar um webhook no GitHub](#configureWebhook).

#### Validar a associação do Git

Antes de validar o formulário de associação do Git, certifique-se de que:

- A sua chave SSH foi corretamente registada na sua conta GitHub.
- O endereço do seu repositório GitHub está correto. Deve ser da forma `https://github.com/<username>/<repository_name.git>`.
- O nome do ramo do repositório GitHub está correto.
- O diretório de instalação está vazio.

Para validar as informações do formulário de associação do Git, clique em `Aplicar configuração`{.action}.

### Ativação da associação do Git

#### Sucesso da associação do Git

Depois de validar o formulário de associação do Git, será redirecionado para o separador Multisite.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/banner-git-activation-ongoing.png){.thumbnail}

Um banner verde indica que o Git está sendo ativado. Siga a ativação do Git ao clicar no link `Tarefas em curso`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ongoing-tasks/ongoing-task-git-activation.png){.thumbnail}

O estado `Em curso`{.action} indica que a associação do Git está em curso. O processo pode demorar alguns minutos. Quando a tarefa estiver concluída, o estado `Ativado`{.action} é apresentado.

Pode igualmente seguir a evolução da ativação do Git a partir do separador `Multisite`{.action}. Na tabela, identifique as linhas que correspondem ao diretório que deseja associar ao Git. Para cada uma das linhas em causa, na coluna `Git`{.action}, a menção `Em curso`{.action} indica-lhe que o Git está em curso de ativação.

Quando a associação do Git é efetuada, o estado `Ativado`{.action} aparece na coluna `Git`{.action} para as linhas em causa.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Erros da associação do Git

Na tabela do separador `Multisite`{.action}, identifique as linhas correspondentes ao diretório que pretende associar ao Git. Na coluna `Git`, se for apresentado `Erro`, significa que ocorreu, pelo menos, um dos seguintes erros:

- A chave SSH não foi registada na sua conta GitHub.
- O diretório de instalação não está vazio.
- O endereço do repositório GitHub não existe ou está errado.
- O ramo do repositório GitHub não existe ou o seu nome está errado.

Consulte as informações da última implementação para obter a causa exata do erro. Na tabela, identifique a linha correspondente ao nome de domínio cujos logs da última implementação pretende consultar. À direita da linha, clique no botão `...`{.action} e, a seguir, em `Informações da última implementação`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/latest-deployment-information.png){.thumbnail}

Uma vez identificado o(s) erro(s), associe Git novamente. Repita a operação clicando no botão `...`{.action} da linha correspondente e, a seguir, em `Associar Git`{.action}.

### Implementar o seu repositório GitHub no seu alojamento web OVHcloud

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o nome do alojamento em causa. Selecione o separador `Multisite`{.action}. Na tabela que aparece, identifique a linha que corresponde ao nome de domínio que deseja implementar com o Git. Certifique-se de que o estado da coluna Git seja `Ativado`{.action}. Clique no botão `...`{.action} e, a seguir, em `Implementar o Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/deploy-git.png){.thumbnail}

Uma mensagem de confirmação será exibida, juntamente com uma caixa de seleção indicando que, em caso de conflito durante a implementação, você pode forçar as alterações remotas (do repositório GitHub) em seu repositório local. Selecione ou não a caixa de verificação conforme a sua escolha e depois clique em `Confirmar`{.action} para validar a implementação.

> [!warning]
>
> Para evitar a perda das alterações locais, guarde-as antes de as substituir pelas alterações do ramo remoto.
>

A nova versão do seu website foi corretamente implementada no seu alojamento OVHcloud. Se outras pessoas estiverem a trabalhar no mesmo projeto e estiverem a fazer alterações no repositório GitHub, pode [configurar um webhook no GitHub](#configureWebhook) para que as alterações sejam implementadas automaticamente no seu alojamento web. Isso evita que você implemente o Git manualmente, e seu alojamento web estará sempre atualizado.

### Modificar um nome de domínio

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o nome do alojamento em causa. Selecione o separador `Multisite`{.action}. Na tabela que aparece, identifique a linha que corresponde ao domínio que pretende alterar. Clique no botão `...`{.action} e, a seguir, em `Modificar o domínio`{.action}. Existem dois cenários possíveis:

#### O nome de domínio não é o único associado ao mesmo diretório

Aparecerá a seguinte janela:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}

Altere as informações à sua escolha e clique em `Seguinte`{.action}.

Ser-lhe-á exibida uma segunda janela de confirmação, juntamente com o resumo das alterações efetuadas.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Clique em `Confirmar`{.action} para validar as modificações do seu nome de domínio.

#### O nome de domínio é o único associado ao diretório

Aparecerá a seguinte janela:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}

Como indicado na mensagem, [elimine a associação Git](#deleteGitAssociation) primeiro antes de modificar o domínio.

### Desassociar um nome de domínio

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o nome do alojamento em causa. Selecione o separador `Multisite`{.action}. Na tabela que se abrir, identifique a linha correspondente ao domínio que pretende destacar do seu alojamento web da OVHcloud. Clique no botão `...`{.action} e, a seguir, em `Desassociar o domínio`{.action}. Existem dois cenários possíveis:

#### O nome de domínio não é o único associado ao mesmo diretório

Aparecerá a janela seguinte.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}

Clique em `Confirmar`{.action} para validar a dissociação do seu nome de domínio.

#### O nome de domínio é o único associado ao diretório

Aparecerá a seguinte janela:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}

Como indicado na mensagem, [elimine a associação Git](#deleteGitAssociation) primeiro antes de desassociar o domínio.

### Configurar o Git

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o nome do alojamento em causa. Selecione o separador `Multisite`{.action}. Na tabela que aparece, identifique a linha correspondente ao diretório que deseja configurar com o Git. Clique no botão `...`{.action} e, a seguir, em `Configurar o Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

Aparecerão as seguintes informações:

- Chave SSH: se ainda não o fez, [registe a chave SSH na sua conta GitHub](#linkSSHKey).
- Depósito: endereço do seu repositório Git. Este campo está cinzento, pois não é possível alterar o endereço do repositório Git. Para alterar o URL do repositório Git, você precisa [remover a associação Git do seu diretório](#deleteGitAssociation) e, em seguida, [associar o diretório ao Git](#associateGitRepo).
- Ramo: nome do ramo do repositório GitHub. Pode alterar este campo.
- URL de webhook: se deseja otimizar as implementações no Git, [configure o webhook no GitHub](#configureWebhook).

### Informações da última implementação

Depois de ter implementado o seu repositório GitHub no seu alojamento web, pode consultar as informações sobre a última implementação, como os erros, os testes ou qualquer informação útil.

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o nome do alojamento em causa. Selecione o separador `Multisite`{.action}. Na tabela que se abrir, identifique a linha correspondente ao domínio que pretende consultar os logs da última implementação. À direita da linha, clique no botão `...`{.action} e, a seguir, em `Informações da última implementação`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/latest-deployment-information.png){.thumbnail}

Encontre neste ecrã todas as informações relativas à última implementação.

### Eliminar a associação de Git <a name="deleteGitAssociation"></a>

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o nome do alojamento em causa. Selecione o separador `Multisite`{.action}. Na tabela exibida, identifique a linha correspondente ao diretório cuja associação com o Git você deseja remover. Clique no botão `...`{.action} e, a seguir, em `Eliminar o Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-button.png){.thumbnail}

Aparecerá a seguinte janela:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}

A mensagem informa que a eliminação será aplicada ao conjunto dos nomes de domínio ligados ao seu diretório. Marque a caixa de seleção `Pretende esvaziar o conteúdo do diretório <your_repository>?`{.action} se deseja igualmente eliminar o conteúdo (pastas e ficheiros) do diretório.

1\.	Se selecionar a caixa de verificação, surge a seguinte janela:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}

Clique em `Confirmar`{.action} para validar a eliminação da associação Git do seu diretório, bem como o seu conteúdo.

2\.	Se a caixa de verificação não estiver selecionada, ser-lhe-á exibida a seguinte janela:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}

Clique em `Confirmar`{.action} para validar a eliminação da associação Git do seu diretório.

### Configurar um webhook no GitHub

#### Obter o URL do webhook

> [!primary]
>
> Se você já estiver no formulário de associação do Git, copie o URL do webhook e vá para a etapa "[Configurar o webhook](#configureWebhook)".
>

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o nome do alojamento em causa. Selecione o separador `Multisite`{.action}. Na tabela que aparece, identifique a linha correspondente ao diretório no qual pretende configurar um webhook. Clique no botão `...`{.action} e, a seguir, em `Configurar o Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

Na parte inferior do formulário, identifique o endereço do campo `URL do webhook`{.action} e copie-o. Agora você deve salvar o URL e configurar o webhook em sua conta do GitHub.

#### Configurar o webhook <a name="configureWebhook"></a>

Aceda à sua conta GitHub e ao repositório onde pretende configurar o webhook. Aceda ao separador `Settings`{.action} e, no menu lateral dos parâmetros, clique em `Webhooks`{.action}". Clique no botão `Add webhook`{.action} para aceder ao formulário:

- **Payload URL** : introduza o URL fornecido no formulário de associação de Git (`URL do webhook`{.action}).
- **Content type** : escolha `application/json`{.action} como tipo de conteúdo para os dados enviados.
- **Secret** : o segredo é facultativo. O GitHub irá utilizá-lo para assinar as mensagens enviadas pelo webhook, reforçando assim a segurança.
- **SSL verification** : se o seu website suporta o HTTPS, deixe esta opção ativada para uma segurança acrescida.
- **Which events would you like to trigger this webhook?** : selecione os eventos que irão despoletar o envio do webhook. Para uma implementação automática, `Just the push event`{.action} (apenas o evento push) é frequentemente suficiente, mas pode escolher `Send me everything`{.action} para receber notificações para todos os eventos.
- **Active** : certifique-se de que a caixa está selecionada para ativar o webhook.

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