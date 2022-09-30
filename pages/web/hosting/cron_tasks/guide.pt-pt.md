---
title: Criar tarefas automatizadas (CRON) no seu alojamento Web
excerpt: Saiba como criar tarefas CRON para automatizar as tarefas programadas num alojamento web
slug: alojamento_partilhado_tarefas_agendadas_cron
section: Tarefas automatizadas (CRON)
order: 01
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 22 de setembro de 2020**

## Objetivo

No seu alojamento Web OVHcloud, pode utilizar scripts para automatizar certas operações. A criação de uma tarefa planificada ("tarefa CRON") é a forma mais simples de assegurar que os seus scripts são executados em momentos específicos sem que seja necessário mais ações da sua parte. 

**Saiba como criar tarefas CRON para automatizar as tarefas planeadas num alojamento web.**

> [!warning]
>A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
>Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se tiver alguma dúvida, recomendamos que recorra a um fornecedor de serviços especializado e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção “Quer saber mais?” deste manual. 
>

## Requisitos

- Ter um serviço de [alojamento Web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Clique no separador `Web Cloud`{.action} e, a seguir, em `Alojamentos`{.action}.

Selecione o alojamento em causa, clique no separador `Plus+`{.action} e, a seguir, em `Tarefas programadas - Cron`{.action}

Nesta secção, terá uma visão geral das tarefas planeadas e dos respetivos parâmetros.

![cron control panel](images/cron-jobs-1.png){.thumbnail}

### Criação de uma tarefa automatizada

#### Etapa 1: Definição dos parâmetros gerais

Para criar uma tarefa CRON, clique no botão `Adicionar um planeamento`{.action} à direita. Pode personalizar os parâmetros da tarefa na nova janela.

![adding scheduling](images/cron-jobs-2.png){.thumbnail}

|Opção|Descrição|   
|---|---|   
|Comando a executar|Defina o caminho de acesso ao ficheiro que contém o script. Exemplo: www/jobs/cron.php|   
|Linguagem|Selecione a versão PHP utilizada pelo script ou escolha "Outro".|
|Ativação|Escolha se a tarefa será ativa após a sua criação ou ativada posteriormente.| 
|Logs por e-mail|Se necessário, selecione um contacto (administrador ou técnico) ao qual será enviado um relatório em caso de erro de execução. Pode também fornecer outro endereço de e-mail.| 
|Descrição|Introduza uma descrição para seguir a execução das suas tarefas.| 

Clique em `Seguinte`{.action} para passar ao passo 2.

#### Etapa 2: Definição da frequência

A interface oferece dois modos para configurar a frequência da sua tarefa. Utilize o **Modo Simple** para uma seleção de opções de planeamento simplificado para os principiantes. Se prefere entrar diretamente uma frequência, semelhante a um formato de tabela CRON (*crontab*), escolha o **Modo expert**.

|Modo simples|
|---|
|Utilize os menus pendente para especificar a hora, os dias de um mês, os dias da semana e os meses da tarefa.|
|![cron frequency](images/cron-jobs-3.png){.thumbnail}|

|Modo expert| 
|---|
|Introduza valores numéricos como num *crontab*. Os asteriscos indicam cada valor do período, o que significa que a tarefa será realizada continuamente **uma vez por hora, todos os dias**, no exemplo.|
|![cron frequency](images/cron-jobs-4.png){.thumbnail}|

Pode alternar entre os dois modos durante a configuração para visualizar as alterações em conformidade. Tenha em atenção as [limitações durante o planeamento de uma tarefa num alojamento Web](./#limitacoes-das-tarefas-planificadas-no-seu-alojamento-web_1).

![cron control panel](images/cron-jobs-5.gif){.thumbnail}

#### Etapa 3: Fim da instalação

O resumo lembra-lhe os parâmetros configurados, incluindo a notação *crontab* da frequência de execução. Se tudo estiver correto, clique em `Validar`{.action}.

![cron confirmação](images/cron-jobs-6.png){.thumbnail}

A tarefa estará pronta dentro de alguns minutos. Pode alterar todos os seus parâmetros ou eliminar a tarefa clicando em `...`{.action} na tabela de apresentação do seu painel de configuração OVHcloud.

### Limitações das tarefas planificadas no seu alojamento Web

|Funcionalidade|Descrição|
|---|---|
|Planeamento horário|Reparem que o campo "Minutes" está desativado na interface (definido por "? " na vista *crontab*). Uma tarefa só pode ser executada uma vez por hora, sendo a frequência de repetição mais baixa que pode ser especificada.|
|Duração|A duração de execução de uma tarefa é de 60 minutos. Se um script ultrapassar este tempo de execução, será automaticamente interrompido pelo sistema.|
|Variáveis|Apenas pode definir variáveis num script. Adicioná-las ao URL que chama o script não funcionará (Exemplo: www/jobs/cron.php?variável=value).|
|Limite de dados|Uma tarefa só pode gerar 5 MB de dados (*stdin/stderr*). Por exemplo, se um script escrever dados num ficheiro .txt, a execução será automaticamente interrompida quando o ficheiro atingir 5 MB.|
|Scripts que produzem erros|Se um script estiver defeituoso, será automaticamente desativado após 10 tentativas de execução falhadas. Reative-o de forma simples no Painel de configuração. (Clique em `...`{.action} e depois em `Alterar`{.action})|
|Relatórios de execução|Os relatórios só serão enviados para o endereço eletrónico selecionado uma vez por dia (durante as horas noturnas).|

### Reparação

#### Teste do seu script com um browser

Um teste simples para ver se o script vai produzir um erro é executá-lo num browser. Por exemplo, se o caminho de acesso do seu script for "www/cron.php" e o seu domínio de alojamento for "mypersonaldomain.ovh", deve utilizar o URL "http://<i></i>mypersonaldomain.ovh/cron.php". Se não aparecer nenhum erro, mas o script não funcionar como previsto, siga as sugestões abaixo.

#### Verificação da utilização dos caminhos absolutos

Tenha o cuidado de utilizar caminhos de acesso absolutos aos ficheiros dos seus scripts. A constante "DIR", por exemplo, pode ajudar a receber o caminho corrente nos scripts PHP ([documentação PHP](https://www.php.net/manual/en/language.constants.predefined.php){.external}).
 
#### Verificação dos logs de execução

No \[logs] do seu alojamento Web, acessível a partir da sua Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, poderá ver a categoria de log intitulada "CRON".

Para mais informações, consulte o nosso guia ["Consultar as estatísticas e os logs do meu site alojado numa oferta partilhada"](../partilhado_consultar_as_estatisticas_e_os_logs_do_meu_site/).

##### **Exemplo de logs**

- Exemplo de fim de script corretamente executado 

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/myscript.sh
[2020-08-11 00:36:01] 
[2020-08-11 00:36:01] ## OVH ## END - 2020-08-10 22:39:44.086166 exitcode: 0
```

- Exemplo de insucesso devido a ultrapassagem do tempo de execução

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/sleep.sh

[2020-08-11 01:36:01] ## OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
[2020-08-11 01:36:01] ## OVH ## END - 2020-08-11 01:36:01.086166 exitcode: 0
```

- Exemplo de falha porque o ficheiro de script não pode ser encontrado no caminho de acesso especificado

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/noscript.sh

[2020-08-11 00:36:01] ## OVH ## ERROR command '/homez.161/myftpusername/www/noscript.sh' not found
[2020-08-11 00:36:01] ## OVH ## END - 2020-08-11 00:36:01.086166 exitcode: 255
```

- Exemplo de falha devido a um erro de autorização (chmod) ou a uma configuração incorreta do ficheiro .ovhconfig

```
[2020-08-11 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason.
[2020-08-11 18:07:10]
[2020-08-11 18:07:10] ## OVH ## END - 2020-08-11 18:07:10.969840 exitcode: 255
```


## Saiba mais

[Configurar o ficheiro .ovhconfig do alojamento web](../configurar-ficheiro-ovhconfig/)

[Utilizar o acesso SSH do seu alojamento web](../partilhado_o_ssh_nos_alojamentos_partilhados/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.