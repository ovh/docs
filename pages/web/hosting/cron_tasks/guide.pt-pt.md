---
title: 'Alojamento Partilhado: Tarefas Agendadas / CRON'
excerpt: 'Alojamento Partilhado: Tarefas Agendadas / CRON'
id: '1990'
slug: alojamento_partilhado_tarefas_agendadas_cron
legacy_guide_number: g1990
---


## Criar uma tarefa automatizada
Selecione o nome de domínio associado ao seu Alojamento (1) e clique em Mais +, depois em Tarefas Planeadas - Cron (2) e, por fim, em Adicionar uma planificação.

![](images/3261.png){.thumbnail}
Para esta primeira etapa, deve indicar o caminho para o seu script e o tipo de linguagem de programação usada.
Os outros 2 casos são facultativos. A opção "logs por email" permitirá escolher um endereço para o qual sejam enviados os relatórios das tarefas executadas ou manter o endereço predefinido.


- Este e-mail será enviado apenas quando ocorrem erros.


Por fim, terá a possibilidade de incluir uma descrição para a sua tarefa agendada.

![](images/3262.png){.thumbnail}
A segunda etapa diz respeito à periodicidade de execução da sua tarefa CRON.

![](images/3264.png){.thumbnail}
Terá 2 modos às disposição: o modo simples e o modo perito.

![](images/3265.png){.thumbnail}
Uma vez validada a configuração da sua tarefa agendada, uma página com um resumo será apresentada.


- Se as informações estão corretas, valide a criação da sua tarefa agendada.



![](images/3266.png){.thumbnail}
Uma mensagem deste género aparecerá para indicar que o seu pedido foi corretamente tomado em conta.

![](images/3267.png){.thumbnail}


## Modificação de uma tarefa automatizada
Selecione o nome de domínio associado ao seu Alojamento (1) e clique em Mais +, depois em Tarefas Planeadas - Cron (2) e, por fim, clique no ícone do lápis que aparecerá à frente da linha da tabela que representa as suas tarefas agendadas.

![](images/3268.png){.thumbnail}
Poderá, nesta etapa, modificar o caminho ou a linguagem de programação, ativar os logs por email e adicionar uma descrição à sua tarefa agendada.

![](images/3269.png){.thumbnail}


## Eliminar uma tarefa agendada
Selecione o nome de domínio associado ao seu Alojamento (1) e clique em Mais +, depois em Tarefas Planeadas - Cron (2) e, por fim, clique no ícone do caixote de lixo que aparecerá à frente da linha da tabela que representa as suas tarefas agendadas.

![](images/3270.png){.thumbnail}
Um resumo da tarefa automatizada que deseja eliminar será apresentado.
Valide a sua escolha se tudo estiver correto.

![](images/3271.png){.thumbnail}


## Testar a execução da sua tarefa automatizada através de um browser
Poderá testar o seu script diretamente através de um browser para ver se o script é corretamente executado.
Por exemplo, se o seu script está no caminho www/cron.php e o seu nome de domínio é teste.pt, deve usar o URL http://teste.pt/cron.php.
Para que o teste seja o mais adequado, é recomendável que a versão de PHP do seu alojamento seja a mesma que a que definiu na criação da tarefa agendada relativa ao script em questão.
Se constata um erro, será necessário corrigir o seu script.
Se nenhum erro for detetado, aconselha-se a consulta dos logs associados à execução da sua tarefa CRON.


## Consultar os logs de execução da sua tarefa automatizada
Selecione o seu alojamento na coluna da esquerda, e depois clique no separador "Mais +".

![](images/4012.png){.thumbnail}
Clique, de seguida, no link "Logs".

![](images/4013.png){.thumbnail}
Se a tarefa agendada for executada durante o decorrer da jornada, poderá consultar os logs de execução através de OVH Speed Log (1).

-> No caso em que a execução seja mais antiga do que 24 horas, selecione o ficheiro de de logs relativo ao mês em questão para consultar os logs (aqui no exemplo, trata-se do mês de Junho).

![](images/3274.png){.thumbnail}
Exemplo de logs de execução de uma tarefa automatizada:


```
[2015-06-04 10:39:03] ## OVH ## START - 2015-06-04 10:39:03.700912 executing: /usr/local/php5.6/bin/php /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03] Could not open input file: /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03]
[2015-06-04 10:39:03] ## OVH ## END - 2015-06-04 10:39:03.762685 exitcode: 1
```


Neste caso, a seguinte linha de código indica que a minha tarefa automatizada não pôde ser executada corretamente pois o caminho está incorreto ou não existe:


```
Could not open input file: /homez.600/loginftp/www/cron.php
```




## Limitações

- Num alojamento partilhado, não é possível configurar os minutos da execução de uma tarefa agendada. Além dessa limitação, os scripts apenas podem ser executados 1 única vez por hora.

- O limite do tempo de execução é fixado a 60 minutos

- A limitação da geração de dados é fixada a 5MB (stdin/stderr)




## Scripts com variáveis
Não é possível agendar tarefas para scripts com a indicação das variáveis no caminho de acesso ao script.

Exemplo:

```
/www/cron.php?variable=test
```



- Pode, contudo, definir essas variáveis no seu script, por exemplo.




## Utilização de caminhos absolutos
Para que a sua tarefa cron funcione deverá utilizar, nos seus scripts, caminhos absolutos e não relativos.
Para obter o endereço do caminho corrente, poderá utilizar a constante "_DIR_" :
[Documentação PHP](http://php.net/manual/en/language.constants.predefined.php)


## Relatório de execução
Um único email é enviado a cada dia. Ele é enviado no decorrer da noite/madrugada.


## Chamada de um script
Se script utilizado pela tarefa agendada CRON necessitar de executar outros scripts, deve utilizar um caminho absoluto e não relativo para que isso funcione. O caminho absoluto do seu alojamento começa por:


```
/home/seu_loginFTP/
```




## Em caso de erro de execução
Se a sua tarefa agendada (cron) tem um erro, ela será desativada ao fim de 10 tentativas de execução não bem sucedidas.


## Exemplo de logs
Execução correta do script:

```
# OVH ## START - 2014-12-23 15:34:12.680711 executing: /homez.600/loginftp/test/run.sh
I am the client and I'm printing stuff with this nice 'echo' feature.

# OVH ## END - 2014-12-23 15:34:13.056472 exitcode: 0
```


Execução do script em erro porque o ficheiro chamado não foi encontrado:

```
# OVH ## START - 2014-12-23 15:36:16.206693 executing: /homez.600/loginftp/test/idontexist.sh
# OVH ## ERROR command '/homez.600/loginftp/test/idontexist.sh' not found

# OVH ## END - 2014-12-23 15:36:16.546574 exitcode: 255
```


Execução do script em erro devido a um timeout:

```
# OVH ## START - 2014-12-23 16:05:52.233058 executing: /homez.600/loginftp/test/sleep.sh
mardi 23 décembre 2014, 16:05:52 (UTC+0100)
Now sleeping 9000 sec

# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
# OVH ## END - 2014-12-23 17:05:54.690413 exitcode: 0
```


Execução do script em erro devido a ter ultrapassado o limite de geração de dados:

```
# OVH ## START - 2014-12-23 15:43:27.606083 executing: /homez.600/loginftp/test/echoer.sh
[...a lot of logs here...]
# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: cron output (9288634 bytes) exceeds maximum permitted (5242880 bytes)
# OVH ## END - 2014-12-23 15:43:50.999934 exitcode: 255
```


Execução do script em erro devido a um erro proveniente de direitos incorretos (chmod) ou de uma incorreta configuração no ficheiro .ovhconfig:

```
[2015-01-08 18:07:10]
[2015-01-08 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason. Please contact customer support for more information.
[2015-01-08 18:07:10] ## OVH ## END - 2015-01-08 18:07:10.969840 exitcode: 255
```



