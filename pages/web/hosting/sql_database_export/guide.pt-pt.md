---
title: 'Recuperar a cópia de segurança da base de dados de um alojamento web'
excerpt: 'Saiba como recuperar a cópia de segurança de uma base de dados de um alojamento web da OVH'
id: '1394'
slug: partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql
legacy_guide_number: g1394
---

**Última atualização: 14/02/2019**

## Sumário

As bases de dados, utilizadas pela maioria dos sistemas de gestão de conteúdos (Content Management System ou CMS), como o WordPress ou o Joomla!, permitem armazenar elementos dinâmicos, como comentários ou artigos. Por diversas razões, pode precisar de realizar a cópia de segurança de uma base de dados para mais tarde recuperar o seu conteúdo.

**Saiba como recuperar a cópia de segurança de uma base de dados de um alojamento web da OVH.**

## Requisitos

- Ter um serviço de [alojamento web da OVH](https://www.ovhcloud.com/pt/web-hosting/){.external}.
- Possuir uma base de dados criada no âmbito de uma oferta de [alojamento web da OVH](https://www.ovhcloud.com/pt/web-hosting/){.external}.
- Consoante o método de backup utilizado, ter acesso à gestão do alojamento web a partir da [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} ou às informações que lhe permitem aceder à base de dados.

## Instruções

Antes de começar, deve escolher o método que quer utilizar para recuperar a cópia de segurança da base de dados. Para isso, existem várias opções, adequadas a diferentes competências técnicas.

- **Utilizar a ferramenta de backup da OVH**: esta solução permite recuperar backups das suas bases de dados a partir da [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Trata-se da solução mais acessível, pois não requer competências técnicas especiais.

- **Realizar a cópia de segurança a partir da interface web phpMyAdmin**: deverá aceder à interface phpMyAdmin. A utilização desta última exige conhecimentos específicos.

- **Utilizar um script que realize o backup**: esta solução requer a criação de um script registado no alojamento web da OVH, de modo a viabilizar a cópia de segurança. São necessários conhecimentos específicos para criar este script.

- **Realizar a cópia de segurança através de um comando SSH**: deverá ligar-se ao seu espaço de armazenamento através do protocolo SSH e utilizar comandos para interagir com o espaço. Tenha em atenção que este tipo de acesso requer conhecimentos técnicos avançados, bem como um plano de [alojamento web da OVH](https://www.ovhcloud.com/pt/web-hosting/){.external} específico.

Tenha em conta que algumas destas operações se realizam fora da interface da OVH e, por isso, deverá executá-las de forma autónoma. A seguir disponibilizamos algumas informações, mas, se precisar de ajuda, entre em contacto com um webmaster. 

Consulte este manual de acordo com o método de backup pretendido.

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVH disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se tiver alguma dúvida, recomendamos que recorra a um fornecedor de serviços especializado e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção “Quer saber mais?” deste manual.
>

### Recuperar uma cópia de segurança através da ferramenta da OVH

Para iniciar a operação, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em `Alojamentos`{.action} e escolha o nome do alojamento em causa. Por fim, clique no separador `Base de dados`{.action}.

Aparecerá uma tabela com todas as bases de dados criadas com o plano de alojamento web. Poderá optar por realizar um novo backup ou importar um já existente através de duas operações.

#### 1 - Efetuar um novo backup da base de dados

Ainda no separador `Bases de dados`{.action}, clique nos três pontos à direita da base de dados que pretende salvaguardar e, a seguir, em `Criar uma cópia de segurança`{.action}.

![databasedump](images/database-dump-step2.png){.thumbnail}

Na janela que surgir, selecione a data desejada para a cópia de segurança e clique em `Seguinte`{.action}. Certifique-se de que as informações no resumo estão corretas e clique em `Validar`{.action} para dar início à operação.

Aguarde enquanto a cópia de segurança é realizada. Quando estiver disponível, poderá importá-la.

![databasedump](images/database-dump-step3.png){.thumbnail}

#### 2 - Recuperar uma cópia de segurança da base de dados

Ainda no separador `Bases de dados`{.action}, clique nos três pontos à direita da base de dados cujo backup pretende recuperar e, a seguir, em `Restaurar um backup`{.action}.

![databasedump](images/database-dump-step4.png){.thumbnail}

A tabela que aparecerá apresenta todos os backups disponíveis da base de dados selecionada. Poderá consultar a data exata das cópias de segurança, assim como a data em que estes backups serão eliminados da ferramenta da OVH.

Para transferir um backup, clique nos três pontos à direita daquele que deseja obter e, a seguir, em `Transferir backup`{.action}. Surgirá uma janela que lhe solicitará para guardar o ficheiro na sua máquina. Aceite e espere enquanto o backup é descarregado.

![databasedump](images/database-dump-step5.png){.thumbnail}

### Recuperar um backup a partir da interface web phpMyAdmin

Em primeiro lugar, deverá aceder ao phpMyAdmin. Para isso, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em `Alojamentos`{.action} e selecione o nome do alojamento correspondente. Por fim, clique no separador `Base de dados`{.action}.

Aparecerá uma tabela com todas as bases de dados criadas com o plano de alojamento web. Clique nos três pontos à direita da linha correspondente à base de dados e selecione `Aceder ao phpMyAdmin`{.action}.

![databasedump](images/database-dump-step6.png){.thumbnail}

Uma vez na página do phpMyAdmin, introduza as informações da base de dados, selecione a opção para aceder aos dados atuais da base de dados no menu pendente e, em seguida, conecte-se. Clique no separador `Exportar`{.action}, onde poderá escolher entre dois métodos de exportação:

- **Método rápido**: pode definir o formato de exportação do backup. O mais comum é o formato SQL, mas, consoante as suas necessidades, terá outros ao seu dispor.

- **Método personalizado**: pode definir pormenorizadamente os parâmetros de exportação do backup.

> [!warning]
>
> A interface phpMyAdmin não pertence à OVH, pelo que deverá encarregar-se da realização das operações necessárias. Recomendamos que, caso de precise de ajuda, recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor da interface. Não poderemos proporcionar-lhe assistência técnica.
>

### Recuperar um backup através de um script

Esta operação realiza-se em vários passos. Certifique-se de que possui a informação necessária para se ligar à base de dados na qual pretende realizar o backup: o nome de utilizador e a respetiva palavra-passe, o nome da base de dados e o endereço do servidor.

> [!warning]
>
> Esta operação requer conhecimentos técnicos de programação. Apresentamos a seguir algumas informações sobre como a realizar. Contudo, se precisar de ajuda, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/). Não poderemos proporcionar-lhe assistência técnica.
>

#### 1 - Criar um script de backup

O primeiro passo consiste em criar o script que permitirá realizar o backup da base de dados. Encontrará abaixo um exemplo que o ajudará a realizar esta operação. No entanto, se precisar de ajuda, contacte um webmaster.

```php
<?
system("mysqldump --host=endereço_do_servidor --user=nome_utilizador --password=palavra_passe_utilizador nome_base_de_dados > nome_ficheiro_backup.sql");
?>
```

Substitua a informação genérica do script pela informação da base de dados correspondente, recorrendo aos elementos abaixo. Depois de concluir o script, recomendamos que lhe atribua um nome (“backup.php”, por exemplo).

|Informações|Substituir por|
|---|---|
|endereço_do_servidor|O endereço do servidor da base de dados em causa.|
|nome_de_utilizador|O nome de utilizador com acesso à base de dados.|
|palavra_passe_utilizador|A palavra-passe do nome de utilizador indicado anteriormente.|
|nome_base_de_dados|O nome da base de dados.|
|nome_ficheiro_backup|O nome do ficheiro de backup quando este for executado.|

> [!primary]
>
> Pode realizar um backup a partir de uma data anterior se adicionar uma porta ao script. Para um backup com a data de ontem, utilize a porta “3307”. Para um backup com a data de há uma semana, utilize a porta “3317”. 
> 
> Note que, se utilizar a porta “3306”, poderá realizar um backup dos dados atualmente presentes na base de dados.
>

#### 2 - Carregar o script no espaço de armazenamento

Depois de criar o script de backup, deverá carregá-lo para o espaço de armazenamento do alojamento web. Para isso, ligue-se ao seu espaço de armazenamento. Se precisar de ajuda, consulte o passo 2.2 do manual “[Aceder ao espaço de armazenamento](https://docs.ovh.com/pt/hosting/partilhado_colocar_o_meu_website_online/#22-aceder-ao-espaco-de-armazenamento){.external}”.

Para poder realizar as seguintes ações, descarregue o script para a pasta “www”. **Preste especial atenção ao nome do ficheiro do script de backup.** Certifique-se de que não apaga um ficheiro já existente com o mesmo nome no espaço de armazenamento quando carregar o script. Se aparecer uma mensagem de aviso deste tipo, altere o nome do script que acabou de criar e tente carregá-lo novamente.

#### 3 - Chamar um script

Depois de carregar o script no espaço de armazenamento, só falta executar o código. Para isso, é necessário chamar o script.

Introduza no browser o URL completo do script (por exemplo, “mypersonaldomain.ovh/backup.php”, se o nome do script for “backup.php”). Se as informações introduzidas no script estiverem corretas, o backup será iniciado. Só precisará de esperar alguns segundos. Caso contrário, verifique as informações introduzidas no script e tente novamente.

#### 4 - Recuperar o backup a partir do espaço de armazenamento

Uma vez feito o backup, pode recuperá-lo na pasta onde colocou o script de backup. O backup da base de dados deve ter o nome definido anteriormente no script. Agora já só tem de descarregar o backup para a sua máquina.

Antes de terminar, recomendamos vivamente que elimine o ficheiro de backup e o script do diretório “www”.

> [!primary]
>
> A utilização de um script de backup e das tarefas planificadas (chamadas “CRON”) permitir-lhe-á automatizar as cópias de segurança segundo a frequência que desejar. Saiba mais sobre as tarefas planificadas no manual: "[Alojamento Partilhado: Tarefas Agendadas / CRON](https://docs.ovh.com/pt/hosting/alojamento_partilhado_tarefas_agendadas_cron/){.external}".
>

### Recuperar um backup através de um comando SSH

Para interagir com o seu espaço de armazenamento, deverá executar comandos a partir de um terminal.

> [!warning]
>
> Este tipo de acesso requer conhecimento técnicos mais avançados. Apresentamos a seguir algumas informações sobre a operação. Contudo, se precisar de ajuda, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/). Não poderemos proporcionar-lhe assistência técnica.
>

Depois de aceder ao espaço de armazenamento por SSH, tem de utilizar um comando que lhe permita realizar o backup da base de dados. Apresentamos a seguir um exemplo que o ajudará a realizar esta operação. Tenha em conta que o backup será realizado no diretório que estiver ativo no momento em que introduzir o comando no terminal.

```sh
mysqldump --host=endereço_do_servidor --user=nome_utilizador --password=palavra_passe_utilizador nome_base_de_dados > nome_ficheiro_backup.sql
```

Substitua a informação genérica deste comando pela informação da base de dados em causa. Agora já só tem de descarregar o backup para o seu computador.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}