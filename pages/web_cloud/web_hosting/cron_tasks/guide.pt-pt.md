---
title: "Criar tarefas automatizadas (CRON) no seu alojamento Web"
excerpt: "Saiba como criar tarefas CRON para automatizar as tarefas programadas num alojamento web"
updated: 2026-03-31
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Objetivo

No seu alojamento web OVHcloud, pode utilizar scripts para automatizar certas operações. Uma tarefa planificada ("tarefa CRON") permite que os seus scripts sejam executados em momentos específicos sem que seja necessário mais ações da sua parte.

**Saiba como criar tarefas CRON para automatizar as tarefas planeadas num alojamento web.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se tiver alguma dúvida, recomendamos que recorra a um fornecedor de serviços especializado e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
>

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](/links/web/hosting).
<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

### Criação de uma tarefa automatizada

Clique nos separadores abaixo para visualizar cada uma das **5** etapas.

<!-- CP-STEPS-START:create-cron-task -->
> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Mais`{.action} e, a seguir, em `Cron`{.action}. Terá uma visão geral das tarefas planeadas e dos respetivos parâmetros.
>>
>> ![cron control panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/schedule-jobs.png){.thumbnail}
>>
>> Para criar uma tarefa CRON, clique no botão `Adicionar uma ação programada`{.action} à direita.
>>
> **Etapa 3**
>>
>> Personalize os parâmetros da tarefa na janela apresentada.
>>
>> ![adding scheduling](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-step-1.png){.thumbnail}
>>
>> |Opção|Descrição|
>> |---|---|
>> |Comando a executar|Defina o caminho de acesso ao ficheiro que contém o script. Exemplo: www/jobs/cron.php|
>> |Linguagem|Selecione a versão PHP utilizada pelo script.|
>> |Ativação|Escolha se a tarefa será ativa após a sua criação ou ativada posteriormente.|
>> |Logs por e-mail|Se necessário, selecione um contacto (administrador ou técnico) ao qual será enviado um relatório em caso de erro de execução. Pode também fornecer outro endereço de e-mail.|
>> |Descrição|Introduza uma descrição para seguir a execução das suas tarefas.|
>>
>> Clique em `Seguinte`{.action}.
>>
> **Etapa 4**
>>
>> A interface oferece dois modos para configurar a frequência da sua tarefa:
>>
>> - **Modo simples**: utilize os menus pendente para especificar a hora, os dias de um mês, os dias da semana e os meses da tarefa.
>> - **Modo expert**: introduza valores numéricos como num *crontab*.
>>
>> |Modo simples|Modo expert|
>> |---|---|
>> |Utilize os menus pendente para especificar a hora, os dias de um mês, os dias da semana e os meses da tarefa.|Introduza valores numéricos como num *crontab*. Os asteriscos indicam cada valor do período, o que significa que a tarefa será realizada continuamente **uma vez por hora, todos os dias**, no exemplo.|
>> |![cron frequency](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-basic-mod-step-2.png){.thumbnail}|![cron frequency](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-expert-mod-step-2.png){.thumbnail}|
>>
>> > [!primary]
>> >
>> > O formulário `Dias`{.action} permite definir frequências de execução num ciclo mensal.
>> >
>> > O formulário `Dias da semana`{.action} permite definir frequências de execução complementares mas com um ciclo semanal.
>>
>> Pode alternar entre os dois modos durante a configuração. Tenha em atenção as [limitações durante o planeamento de uma tarefa num alojamento web](./#limitacoes-das-tarefas-planificadas-no-seu-alojamento-web).
>>
>> Clique em `Seguinte`{.action}.
>>
> **Etapa 5**
>>
>> O resumo lembra-lhe os parâmetros configurados, incluindo a notação *crontab* da frequência de execução. Se tudo estiver correto, clique em `Confirmar`{.action}.
>>
>> ![cron confirmation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-step-3.png){.thumbnail}
>>
>> A tarefa estará pronta dentro de alguns minutos. Pode alterar todos os seus parâmetros ou eliminar a tarefa clicando em `...`{.action} na tabela de apresentação do seu painel de configuração OVHcloud.
<!-- CP-STEPS-END:create-cron-task -->

### Modificar ou eliminar uma tarefa agendada

Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

<!-- CP-STEPS-START:modify-delete-cron-task -->
> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Mais`{.action} e, a seguir, em `Cron`{.action}.
>>
> **Etapa 3**
>>
>> Na tabela que aparece, clique no botão `...`{.action} situado à direita da tarefa planeada em causa.
>>
>> Escolha entre os botões `Alterar`{.action} ou `Eliminar`{.action} em função da ação que pretende realizar na tarefa programada.
<!-- CP-STEPS-END:modify-delete-cron-task -->

### Limitações das tarefas planificadas no seu alojamento web

|Funcionalidade|Descrição|
|---|---|
|Planeamento horário|Reparem que o campo "Minutes" está desativado na interface (definido por "? " na vista *crontab*). Uma tarefa só pode ser executada uma vez por hora, sendo a frequência de repetição mais baixa que pode ser especificada.|
|Duração|A duração de execução de uma tarefa é de 60 minutos. Se um script ultrapassar este tempo de execução, será automaticamente interrompido pelo sistema.|
|Variáveis|Apenas pode definir variáveis num script. Adicioná-las ao URL que chama o script não funcionará (Exemplo: www/jobs/cron.php?variável=value).|
|Limite de dados|Uma tarefa só pode gerar 5 MB de dados (*stdin/stderr*). Por exemplo, se um script escrever dados num ficheiro .txt, a execução será automaticamente interrompida quando o ficheiro atingir 5 MB.|
|Scripts que produzem erros|Se um script falhar, ele será automaticamente desativado após 10 tentativas de execução com falha. O relatório de erro só será enviado quando as 10 tentativas tiverem falhado.<br>Corrija o script em função do relatório de erro recebido e reative a "tarefa CRON" no painel de configuração (clique em `...`{.action} e em `Alterar`{.action}).|
|Relatórios de execução|Os relatórios só serão enviados para o endereço eletrónico selecionado uma vez por dia (durante as horas noturnas).|

### Reparação

#### Teste do seu script com um browser

Um teste simples para ver se o script vai produzir um erro é executá-lo num browser. Por exemplo, se o caminho de acesso do seu script for "www/cron.php" e o seu domínio de alojamento for "mypersonaldomain.ovh", deve utilizar o URL "http://<i></i>mypersonaldomain.ovh/cron.php". Se não aparecer nenhum erro, mas o script não funcionar como previsto, siga as sugestões abaixo.

#### Verificação da utilização dos caminhos absolutos

Tenha o cuidado de utilizar caminhos de acesso absolutos aos ficheiros dos seus scripts. A constante "DIR", por exemplo, pode ajudar a receber o caminho corrente nos scripts PHP ([documentação PHP](https://www.php.net/manual/en/language.constants.predefined.php)).

#### Verificação dos logs de execução

No \[logs] do seu alojamento web, acessível a partir da sua Área de [Cliente OVHcloud](/links/manager), poderá ver a categoria de log intitulada "CRON".

Para mais informações, consulte o nosso guia ["Consultar as estatísticas e os logs do meu site alojado numa oferta partilhada"](/pages/web_cloud/web_hosting/logs_and_statistics).

##### **Exemplo de logs**

- Exemplo de fim de script corretamente executado

<pre class="bgwhite"><code>
[2026-03-30 00:36:01] ## OVH ## START - 2026-03-30 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/myscript.sh
[2026-03-30 00:36:01]
[2026-03-30 00:36:01] ## OVH ## END - 2023-08-10 22:39:44.086166 exitcode: 0
</code></pre>

- Exemplo de insucesso devido a ultrapassagem do tempo de execução

<pre class="bgwhite"><code>
[2026-03-30 00:36:01] ## OVH ## START - 2026-03-30 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/sleep.sh

[2026-03-30 01:36:01] ## OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
[2026-03-30 01:36:01] ## OVH ## END - 2026-03-30 01:36:01.086166 exitcode: 0
</code></pre>

- Exemplo de falha porque o ficheiro de script não pode ser encontrado no caminho de acesso especificado

<pre class="bgwhite"><code>
[2026-03-30 00:36:01] ## OVH ## START - 2026-03-30 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/noscript.sh

[2026-03-30 00:36:01] ## OVH ## ERROR command '/homez.161/myftpusername/www/noscript.sh' not found
[2026-03-30 00:36:01] ## OVH ## END - 2026-03-30 00:36:01.086166 exitcode: 255
</code></pre>

- Exemplo de falha devido a um erro de autorização (chmod) ou a uma configuração incorreta do ficheiro .ovhconfig

<pre class="bgwhite"><code>
[2026-03-30 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason.
[2026-03-30 18:07:10]
[2026-03-30 18:07:10] ## OVH ## END - 2026-03-30 18:07:10.969840 exitcode: 255
</code></pre>

## Quer saber mais? <a name="go-further"></a>

[Configurar o ficheiro .ovhconfig do alojamento web](/pages/web_cloud/web_hosting/configure_your_web_hosting)

[Utilizar o acesso SSH do seu alojamento web](/pages/web_cloud/web_hosting/ssh_on_webhosting)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
