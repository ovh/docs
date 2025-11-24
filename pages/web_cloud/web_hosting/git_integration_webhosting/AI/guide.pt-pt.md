35 71 

Clique nas abas abaixo para mostrar sucessivamente cada uma das **5** etapas.

> [!tabs]
> **Passo 1**
>>
>> Inicie sessão na sua [área de cliente OVHcloud](/links/manager), em seguida, aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique no menu `Hospedagens`{.action}, em seguida, escolha a hospedagem web relevante.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na página que aparece, clique na aba `Os meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
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

167

Após validar o formulário de associação do Git, é redirecionado para a página da aba `Os meus sites`{.action}.

177 179

Também pode seguir a evolução da ativação do Git na aba `Os meus sites`{.action}. Na coluna `Git`{.action} da tabela, a menção `Em curso`{.action} apresentada na linha do site web relevante indica que o Git está em curso de ativação.

Quando a associação do Git é efetuada, o estado `Ativado`{.action} aparece na coluna `Git`{.action} para o site web relevante.

185

Na tabela da aba `Os meus sites`{.action}, identifique as linhas correspondentes ao diretório do site web que pretende associar ao Git. Na coluna `Git`, se a menção `Erro` aparecer, isso significa que pelo menos um dos seguintes erros ocorreu:

192 196

Para conhecer a causa exata do erro, consulte as informações do último deployment. Na tabela, clique no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Informações do último deployment`{.action}.

![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Depois de identificar o(s) erro(s), associe o Git novamente. Repita a operação clicando no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Associar Git`{.action}.

200 235

Clique nas abas abaixo para mostrar sucessivamente cada uma das **5** etapas.

> [!tabs]
> **Passo 1**
>>
>> Inicie sessão na sua [área de cliente OVHcloud](/links/manager), em seguida, aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique no menu `Hospedagens`{.action}, em seguida, escolha a hospedagem web relevante.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na página que aparece, clique na aba `Os meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
>>
>> Na tabela que aparece, clique no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Deploy Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Passo 5**
>>
>> Uma mensagem de confirmação aparece, bem como uma caixa de verificação que lhe indica que, em caso de conflito durante o deployment, pode forçar as modificações remotas (do repositório GitHub) sobre o seu repositório local. Marque ou não a caixa conforme a sua escolha, em seguida, clique em `Confirmar`{.action} para validar o deployment.
>>
>> > [!warning]
>> >
>> > Para evitar perder as suas modificações locais, lembre-se de as guardar antes de as sobrescrever pelas modificações da branch remota.
>>
>> A nova versão do seu site web foi bem deployada na sua hospedagem web OVHcloud. Se outras pessoas trabalham no mesmo projeto e fazem modificações no repositório GitHub, pode [configurar um webhook no GitHub](#configureWebhook) para que as suas modificações sejam automaticamente deployadas na sua hospedagem web. Isso evita que tenha de deployar o Git manualmente, e o seu site web permanecerá sempre atualizado.

239 294

Clique nas abas abaixo para mostrar sucessivamente cada uma das **5** etapas.

> [!tabs]
> **Passo 1**
>>
>> Inicie sessão na sua [área de cliente OVHcloud](/links/manager), em seguida, aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique no menu `Hospedagens`{.action}, em seguida, escolha a hospedagem web relevante.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na página que aparece, clique na aba `Os meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
>>
>> Na tabela que aparece, clique no botão `>`{.action} à esquerda do nome do site web relevante para mostrar os nomes de domínio ou subdomínios associados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Em seguida, clique no botão `⁝`{.action} à direita do nome de domínio ou subdomínio relevante, em seguida, em `Modificar o domínio`{.action}.
>>
>> ![Opções de domínios associados](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Passo 5**
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
>> Clique em `Confirmar`{.action} para validar as modificações do seu nome de domínio.
>>
>> **2 - Apenas um nome de domínio está associado ao site web**
>>
>> A seguinte janela aparece:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}
>>
>> Como a mensagem indica, [elimine a sua associação Git](#deleteGitAssociation) primeiro antes de modificar o seu nome de domínio.

298 347

Clique nas abas abaixo para mostrar sucessivamente cada uma das **5** etapas.

> [!tabs]
> **Passo 1**
>>
>> Inicie sessão na sua [área de cliente OVHcloud](/links/manager), em seguida, aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique no menu `Hospedagens`{.action}, em seguida, escolha a hospedagem web relevante.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na página que aparece, clique na aba `Os meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
>>
>> Na tabela que aparece, clique no botão `>`{.action} à esquerda do nome do site web relevante para mostrar os nomes de domínio ou subdomínios associados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Em seguida, clique no botão `⁝`{.action} à direita do nome de domínio ou subdomínio relevante, em seguida, em `Desanexar o domínio`{.action}.
>>
>> ![Opções de domínios associados](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Passo 5**
>>
>> Dois cenários são possíveis:
>>
>> **1 - Um ou mais outros nomes de domínio estão associados ao site web**
>>
>> A seguinte janela aparece.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Clique em `Confirmar`{.action} para validar o desanexamento do seu nome de domínio.
>>
>> **2 - Apenas um nome de domínio está associado ao site web**
>>
>> A seguinte janela aparece:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>>
>> Como a mensagem indica, [elimine a sua associação Git](#deleteGitAssociation) primeiro antes de desanexar o seu nome de domínio.

351 385

Clique nas abas abaixo para mostrar sucessivamente cada uma das **5** etapas.

> [!tabs]
> **Passo 1**
>>
>> Inicie sessão na sua [área de cliente OVHcloud](/links/manager), em seguida, aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique no menu `Hospedagens`{.action}, em seguida, escolha a hospedagem web relevante.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na página que aparece, clique na aba `Os meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
>>
>> Na tabela que aparece, clique no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Configurar Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Passo 5**
>>
>> As seguintes informações aparecem:
>>
>> - Chave SSH: Se ainda não o fez, [registe a sua chave SSH no seu conta GitHub](#linkSSHKey).
>> - Repositório: Endereço do seu repositório Git. Este campo está cinzento porque não pode modificar o endereço do repositório Git. Para mudar a URL do repositório Git, tem de [eliminar a associação Git do seu diretório](#deleteGitAssociation) e depois [associar o diretório a Git novamente](#associateGitRepo).
>> - Ramo: Nome do ramo do repositório GitHub. Pode modificar este campo se necessário.
>> - URL do webhook: Se pretende otimizar os seus deployments no Git, [configure o webhook no GitHub](#configureWebhook).

391 418

Clique nas abas abaixo para mostrar sucessivamente cada uma das **4** etapas.

> [!tabs]
> **Passo 1**
>>
>> Inicie sessão na sua [área de cliente OVHcloud](/links/manager), em seguida, aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique no menu `Hospedagens`{.action}, em seguida, escolha a hospedagem web relevante.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na página que aparece, clique na aba `Os meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
>>
>> Na tabela que aparece, clique no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Informações do último deployment`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
>> Neste ecrã, encontra todas as informações relativas ao último deployment.

422 467

Clique nas abas abaixo para mostrar sucessivamente cada uma das **5** etapas.

> [!tabs]
> **Passo 1**
>>
>> Inicie sessão na sua [área de cliente OVHcloud](/links/manager), em seguida, aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique no menu `Hospedagens`{.action}, em seguida, escolha a hospedagem web relevante.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na página que aparece, clique na aba `Os meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
>>
>> Na tabela que aparece, clique no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Eliminar Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Passo 5**
>>
>> A seguinte janela aparece:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}
>>
>> A mensagem informa que a eliminação aplica-se a todos os nomes de domínio associados ao seu site web. Marque a caixa `Deseja esvaziar o conteúdo do diretório <seu_diretório>`{.action} se quiser também eliminar o conteúdo (pastas e ficheiros) do diretório.
>>
>> 1\. Se marcar a caixa, a seguinte janela aparece:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}
>>
>> Clique em `Confirmar`{.action} para validar a eliminação da associação Git do seu diretório bem como do seu conteúdo.
>>
>> 2\. Se não marcar a caixa, a seguinte janela aparece:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}
>>
>> Clique em `Confirmar`{.action} para validar a eliminação da associação Git do seu