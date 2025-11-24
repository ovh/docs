35 71 

> **Passo 4**
> 
>> No quadro que aparece, clique no botão `⁝`{.action} à direita do site web relevante, depois em `Associar Git`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>> 
> **Passo 5**
>> 
>> O formulário de associação do Git é exibido. Vários elementos devem ser configurados:
>> 
>> - Repositório GitHub
>> - Branch do repositório GitHub
>> - Chave SSH (para um repositório GitHub privado)
>> - Webhook (opcional)
>> 
>> Continue a ler este guia para obter as informações necessárias para preencher os campos obrigatórios.

167

Após validar o formulário de associação do Git, é redirecionado para a página do separador `Meus sites`{.action}.

177 179

Também pode acompanhar a evolução da ativação do Git no separador `Meus sites`{.action}. Na coluna `Git`{.action} do quadro, a menção `Em curso`{.action} apresentada na linha do site web relevante indica que o Git está a ser ativado.

Quando a associação do Git é concluída, o estado `Ativado`{.action} aparece na coluna `Git`{.action} para o site web relevante.

185

No quadro do separador `Meus sites`{.action}, identifique as linhas correspondentes ao diretório do site web que pretende associar ao Git. Na coluna `Git`, se a menção `Erro` aparecer, isso significa que pelo menos um dos seguintes erros ocorreu:

192 196

Para conhecer a causa exata do erro, consulte as informações do último deployment. No quadro, clique no botão `⁝`{.action} à direita do site web relevante, depois em `Informações do último deployment`{.action}.

![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Depois de identificar o(s) erro(s), associe o Git novamente. Repita a operação ao clicar no botão `⁝`{.action} à direita do site web relevante, depois em `Associar Git`{.action}.

200 235

> **Passo 4**
>> 
>> No quadro que aparece, clique no botão `⁝`{.action} à direita do site web relevante, depois em `Deploy Git`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
> **Passo 5**
>> 
>> Uma mensagem de confirmação aparece, juntamente com uma caixa de seleção que indica que, em caso de conflito durante o deployment, pode forçar as modificações remotas (do repositório GitHub) sobre o seu repositório local. Marque ou não a caixa conforme a sua escolha, depois clique em `Confirmar`{.action} para validar o deployment.
>> 
>> > [!warning]
>> >
>> > Para evitar perder as suas modificações locais, lembre-se de as guardar antes de as substituir pelas modificações da branch remota.
>> 
>> A nova versão do seu site web foi bem deployada no seu web hosting OVHcloud. Se outras pessoas trabalham no mesmo projeto e fazem modificações no repositório GitHub, pode [configurar um webhook no GitHub](#configureWebhook) para que as suas modificações sejam automaticamente deployadas no seu web hosting. Isso evita que tenha de deployar o Git manualmente, e o seu site web permanecerá sempre atualizado.

239 294

> **Passo 4**
>> 
>> No quadro que aparece, clique no botão `>`{.action} à esquerda do nome do site web relevante para visualizar os nomes de domínio ou subdomínios associados.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>> 
>> Clique depois no botão `⁝`{.action} à direita do nome de domínio ou subdomínio relevante, depois em `Modificar o domínio`{.action}.
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
>> ![Meus sites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}
>> 
>> Modifique as informações conforme necessário e clique em `Seguinte`{.action}.
>> 
>> Uma segunda janela de confirmação aparece com o resumo das suas alterações:
>> 
>> ![Meus sites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}
>> 
>> Clique em `Confirmar`{.action} para validar as modificações do seu nome de domínio.
>> 
>> **2 - Apenas um nome de domínio está associado ao site web**
>> 
>> A seguinte janela aparece:
>> 
>> ![Meus sites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}
>> 
>> Como a mensagem indica, [elimine primeiro a sua associação Git](#deleteGitAssociation) antes de modificar o seu nome de domínio.

298 347

> **Passo 4**
>> 
>> No quadro que aparece, clique no botão `>`{.action} à esquerda do nome do site web relevante para visualizar os nomes de domínio ou subdomínios associados.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>> 
>> Clique depois no botão `⁝`{.action} à direita do nome de domínio ou subdomínio relevante, depois em `Desassociar o domínio`{.action}.
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
>> ![Meus sites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>> 
>> Clique em `Confirmar`{.action} para validar a desassociação do seu nome de domínio.
>> 
>> **2 - Apenas um nome de domínio está associado ao site web**
>> 
>> A seguinte janela aparece:
>> 
>> ![Meus sites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>> 
>> Como a mensagem indica, [elimine primeiro a sua associação Git](#deleteGitAssociation) antes de desassociar o seu nome de domínio.

351 385

> **Passo 4**
>> 
>> No quadro que aparece, clique no botão `⁝`{.action} à direita do site web relevante, depois em `Configurar Git`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
> **Passo 5**
>> 
>> As seguintes informações aparecem:
>> 
>> - Chave SSH: Se ainda não o fez, [registe a sua chave SSH no seu conta GitHub](#linkSSHKey).
>> - Repositório: Endereço do seu repositório Git. Este campo está cinzento porque não pode modificar o endereço do repositório Git. Para alterar a URL do repositório Git, deve [eliminar a associação Git do seu diretório](#deleteGitAssociation) e depois [associar o diretório a Git novamente](#associateGitRepo).
>> - Branch: Nome da branch do repositório GitHub. Pode modificar este campo se necessário.
>> - URL do webhook: Se quiser otimizar os seus deployments no Git, [configure o webhook no GitHub](#configureWebhook).

391 418

> **Passo 4**
>> 
>> No quadro que aparece, clique no botão `⁝`{.action} à direita do site web relevante, depois em `Informações do último deployment`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
>> Encontre todas as informações relativas ao último deployment na tela.

422 467

A mensagem informa que a eliminação aplicar-se-á a todos os nomes de domínio associados ao seu site web. Marque a caixa `Deseja esvaziar o conteúdo do diretório <seu_diretório>`{.action} se quiser também eliminar o conteúdo (pastas e ficheiros) do diretório.
>> 
>> 1\. Se marcar a caixa, a seguinte janela aparece:
>> 
>> ![Meus sites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}
>> 
>> Clique em `Confirmar`{.action} para validar a eliminação da associação Git do seu diretório e do seu conteúdo.
>> 
>> 2\. Se não marcar a caixa, a seguinte janela aparece:
>> 
>> ![Meus sites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}
>> 
>> Clique em `Confirmar`{.action} para validar a eliminação da associação Git do seu diretório.

477 506

Clique nas janelas abaixo para visualizar cada uma das **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na tabela que aparece, clique no botão `⁝`{.action} à direita do site web relevante, em seguida, em `Configurar o Git`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
> **Etapa 5**
>> 
>> Na parte inferior do formulário que aparece, copie o endereço contido no campo `URL do webhook`{.action}. Agora, deve registar a URL e configurar o webhook no seu conta GitHub.