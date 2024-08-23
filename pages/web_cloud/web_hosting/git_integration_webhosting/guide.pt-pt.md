---
title: "Configurar e utilizar o Git com o seu alojamento web OVHcloud"
excerpt: "Saiba como configurar e utilizar o Git com o seu alojamento web na sua Área de Cliente OVHcloud"
updated: 2024-08-22
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

Copie o endereço do seu repositório GitHub. Esta deve ser da forma `https://github.com/<username>/<repository_name.git>`{.action}. Volte para o formulário de associação do Git e cole o endereço do repositório GitHub no campo `Repositório`{.action}. Se o formato do endereço não estiver correto, aparecerá a seguinte mensagem de erro:

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
- O endereço do seu repositório GitHub está correto. Deve ser da forma `https://github.com/<username>/<repository_name.git>`{.action}.
- O nome do ramo do repositório GitHub está correto.
- O diretório de instalação está vazio.

Para validar as informações do formulário de associação do Git, clique em `Aplicar configuração`{.action}.

### Ativação da associação do Git

#### Sucesso da associação do Git

Depois de validar o formulário de associação do Git, será redirecionado para o separador Multisite.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/banner-git-activation-ongoing.png){.thumbnail}

A green banner will show you that Git is being enabled. Follow the activation of Git by clicking on the `Current tasks`{.action} link.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ongoing-task-git-activation.png){.thumbnail}

The status `Running`{.action} indicates that the Git association is in progress. The process may take several minutes. When the task is complete, the status `Enabled`{.action} is displayed.

You can also track the progress of Git activation from the `Multisite`{.action} tab. In the table, identify the rows that correspond to the directory you want to associate with Git. For each of the rows concerned, in the `Git`{.action} column, the phrase `In progress`{.action} tells you that Git is being enabled.

When the Git association is complete, the status `Enabled`{.action} appears in the `Git`{.action} column for the rows concerned.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Git association errors

In the table in the `Multisite`{.action} tab, identify the rows corresponding to the directory you want to associate with Git. In the `Git` column, if the word `Error` appears, this means that at least one of the following errors has occurred:

- The SSH key has not been saved in your GitHub account.
- The installation directory is not empty.
- The GitHub repository address does not exist or is incorrect.
- The branch of the GitHub repository does not exist or its name is incorrect.

For the exact cause of the error, see the information from the last deployment. In the table, identify the row corresponding to the domain name for which you want to view the logs for the last deployment. To the right of the line, click on the `...`{.action} button, then on `Latest deployment information`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/info-last-deployment-button.png){.thumbnail}

Once you have identified the error(s), associate Git again. Retry the operation by clicking on the `...`{.action} button on the corresponding line, then on `Link Git`{.action}.

### Deploy your GitHub repository on your OVHcloud web hosting plan

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain name that you want to deploy with Git. Ensure that the status of the Git column is `Enabled`{.action}. Click the `...`{.action} button, then `Deploy Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/deploy-git-button.png){.thumbnail}

A confirmation message appears, along with a check box telling you that if there is a conflict during deployment, you can force remote (GitHub repository) changes on your local repository. Tick or untick the box depending on your choice, then click `Confirm`{.action} to validate the deployment.

> [!warning]
>
> To avoid losing your local changes, remember to save them before overwriting them with changes from the remote branch.
>

The new version of your website has been deployed on your OVHcloud hosting plan. If other people are working on the same project and they make changes on the GitHub repository, then you can [configure a webhook on GitHub](#configureWebhook) so that their changes are automatically deployed to your web hosting plan. This avoids having to deploy Git manually, and your web hosting plan will always be up-to-date.

### Modify a domain name

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain you want to modify. Click the `...`{.action} button, then `Modify domain`{.action}. There are two possible scenarios:

#### The domain name is not the only one attached to the same directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}

Modify the information of your choice and click `Next`{.action}.

A second confirmation window will appear, with a summary of your changes.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Click `Confirm`{.action} to confirm your domain name changes.

#### The domain name is the only one attached to the directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}

As the message states, [delete your Git association](#deleteGitAssociation) first before changing your domain name.

### Detach a domain name

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the line corresponding to the domain that you want to detach from your OVHcloud web hosting plan. Click the `...`{.action} button, then `Detach domain`{.action}. There are two possible scenarios:

#### The domain name is not the only one attached to the same directory

The following window will appear.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}

Click `Confirm`{.action} to confirm the detachment of your domain name.

#### The domain name is the only one attached to the directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}

As the message states, [delete your Git association](#deleteGitAssociation) first before detaching your domain name.

### Configure Git

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row corresponding to the directory you want to configure with Git. Click the `...`{.action} button, then `Configure Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

The following information is displayed:

- SSH key: If you have not already done so, [save your SSH key in your GitHub account](#linkSSHKey).
- Deposit: Address of your Git deposit. This field is grayed out because you cannot change the address of the Git repository. To change the Git repository URL, you must [remove Git association from your directory](#deleteGitAssociation) and then [associate directory to Git](#associateGitRepo) again.
- Branch: Name of the branch of the GitHub repository. You can edit this field.
- Webhook URL: If you want to optimise your deployments on Git, [configure the webhook on GitHub](#configureWebhook).

### Latest deployment information

Once you have deployed your GitHub repository on your web hosting plan, you can view information on the latest deployment, such as errors, tests and any useful information. 

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain whose logs you want to view from the last deployment. To the right of the line, click the `...`{.action} button, then `Latest deployment information`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/informations-last-git-deployment-button.png){.thumbnail}

On this screen, you can view all the information related to the latest deployment.

### Delete Git <a name="deleteGitAssociation"></a> association

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that opens, identify the row corresponding to the directory whose association with Git you want to remove. Click the `...`{.action} button, then `Delete Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-button.png){.thumbnail}

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}

The message informs you that the deletion will apply to all domain names attached to your directory. Tick the `Do you want to empty the contents of the <your_directory> directory?`{.action} option if you also want to delete the contents (folders and files) of the directory.

1\.	If you select the check box, the following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}

Click `Confirm`{.action} to confirm the deletion of the Git association from your directory, as well as its contents.

2\.	If you do not select the check box, the following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}

Click `Confirm`{.action} to confirm the deletion of the Git association from your directory.

### Configure a webhook on GitHub

#### Retrieve the webhook URL

> [!primary]
>
> If you are already in the Git association form, copy the webhook URL and go to the step “[Configure the webhook](#configureWebhook)”.
>

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that opens, identify the row that corresponds to the directory where you want to configure a webhook. Click the `...`{.action} button, then `Configure Git`{.action}.

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