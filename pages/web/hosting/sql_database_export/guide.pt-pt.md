---
title: "Recuperar a cópia de segurança da base de dados de um alojamento web"
excerpt: "Saiba como recuperar a cópia de segurança de uma base de dados de um alojamento web da OVHcloud"
updated: 2023-08-22
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

As bases de dados são utilizadas pela maior parte dos websites e dos **C**ontent **M**anagement **S**ystem (**CMS**) tais como *WordPress*, *Joomla!*, *PrestaShop* ou *Drupal*. Estes cookies permitem geralmente armazenar elementos dinâmicos, como, por exemplo, comentários, utilizadores/palavras-passe, o estado dos stocks caso disponha de um site de e-commerce ou ainda artigos. Por várias razões, terá de realizar um backup da sua base de dados para recuperar o seu conteúdo.

**Saiba como recuperar a cópia de segurança de uma base de dados de um alojamento web da OVHcloud.**

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}.
- Possuir uma base de dados criada no âmbito de uma oferta de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}.
- Consoante o método de backup utilizado, ter acesso à gestão do alojamento web a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} ou às informações que lhe permitem aceder à base de dados.

## Instruções

Antes de começar, defina o método que vai seguir para recuperar a cópia de segurança da sua base de dados. Tem à sua disposição várias possibilidades:

- **Utilizar a ferramenta de backup da OVHcloud** : esta solução permite recuperar backups das suas bases de dados a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Este método não requer conhecimentos técnicos especiais.

- **Realizar a cópia de segurança a partir da interface web phpMyAdmin** : este método requer que se ligue à interface *phpMyAdmin* para efetuar a operação. Isto requer um controlo da interface *phpMyAdmin*.

- **Utilizar um script que realize o backup** : este método requer a criação de um script registado no alojamento web da OVHcloud para poder realizar o backup. São necessários conhecimentos específicos para esta criação.

- **Efetuar o backup através de SSH** : este método requer que se ligue ao espaço de armazenamento FTP através do protocolo SSH e que utilize comandos para interagir com este. Este tipo de acesso requer conhecimentos mais avançados, bem como uma oferta de [alojamento web OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external} específica.

> [!success]
>
> Se efetuar um backup da sua base de dados, pois esta está saturada / cheia, não hesite em consultar o nosso tutorial "[O que fazer quando a minha base de dados estiver saturada?](/pages/web/hosting/sql_overquota_database)".
>

Alguns dos métodos acima indicados não são inerentes a uma interface OVHcloud. Por isso, deverá realizar a operação de acordo com os seus próprios conhecimentos. A seguir disponibilizamos algumas informações, mas estas não substituem a assistência fornecida por um webmaster se tiver dificuldade em realizar estas tarefas sozinho.

Consulte este manual de acordo com o método de backup pretendido.

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/diretory/). Não poderemos proporcionar-lhe assistência técnica. Mais informações na secção [Quer saber mais?](#go-further) deste guia.
>

### Recuperar um backup através da ferramenta da OVHcloud

Para aceder à ferramenta de backup da OVHcloud, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Alojamentos`{.action} e escolha o nome do alojamento correspondente. Por fim, clique no separador `Bases de dados`{.action}.

Aparecerá uma tabela com todas as bases de dados criadas com o plano de alojamento web. Poderá optar por realizar um novo backup ou recuperar um já existente, através de duas operações distintas.

#### Etapa 1: efetuar um novo backup da base de dados

Ainda no separador `Bases de dados`{.action}, clique no botão `...`{.action} à direita da base de dados a salvaguardar e, a seguir, em `Criar uma cópia de segurança`{.action}.

![databasedump](images/database-dump-step2.png){.thumbnail}

Na janela que surgir, selecione a data desejada para o backup e clique no botão `Seguinte`{.action}. Certifique-se de que as informações no resumo estão corretas e clique em `Validar`{.action} para dar início à operação.

Aguarde enquanto o backup é realizado. Quando estiver disponível, poderá importá-la.

![databasedump](images/database-dump-step3.png){.thumbnail}

#### Etapa 2: recuperar uma cópia de segurança da base de dados

Ainda no separador `Bases de dados`{.action}, clique no botão `...`{.action} à direita da base de dados a salvaguardar e, a seguir, em `Restaurar um backup`{.action}.

![databasedump](images/database-dump-step4.png){.thumbnail}

A tabela que aparecerá apresenta todos os backups disponíveis da base de dados selecionada. Poderá consultar a data exata em que os backups foram realizados, assim como a data em que estes últimos serão eliminados da ferramenta da OVHcloud.

Para descarregar um backup, clique no botão `...`{.action} à direita daquele que deseja recuperar e, a seguir, em `Transferir backup`{.action}. Surgirá uma janela que lhe solicitará para guardar o ficheiro na sua máquina. Aceite e espere enquanto o backup é descarregado.

![databasedump](images/database-dump-step5.png){.thumbnail}

### Recuperar um backup a partir da interface web phpMyAdmin

Para realizar a operação, aceda a *phpMyAdmin*. Para saber a ligação de acesso a esta última, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Alojamentos`{.action} e escolha o nome do alojamento correspondente. Por fim, clique no separador `Bases de dados`{.action}.

Aparecerá uma tabela com todas as bases de dados criadas com o plano de alojamento web. Clique no botão `...`{.action} à direita da base de dados em causa e depois em `Aceder ao phpMyAdmin`{.action}.

![databasedump](images/database-dump-step6.png){.thumbnail}

Uma vez na interface de ligação a *phpMyAdmin*, introduza as informações da base de dados e ligue-se. Depois de iniciar sessão, aceda ao separador `Exportar`{.action} onde existem dois métodos de exportação:

- **Método rápido** : pode definir o formato de exportação do backup. O mais comum é o formato SQL, mas, consoante as suas necessidades, terá outros ao seu dispor;

- **Método personalizado** : pode definir pormenorizadamente os parâmetros de exportação do backup.

> [!warning]
>
> Como a interface *phpMyAdmin* não foi criada pela OVHcloud, deverá realizar a operação de acordo com os seus conhecimentos. Recomendamos que, em caso de dúvida, recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/diretory/) e/ou que contacte o editor da interface. Não poderemos proporcionar-lhe assistência técnica.
>

### Recuperar um backup usando um script

Esta operação realiza-se em várias etapas. Certifique-se de que possui a informação necessária para se ligar à base de dados na qual pretende realizar um backup: o nome de utilizador, a respetiva palavra-passe, o nome da base de dados e o endereço do servidor.

> [!warning]
>
> Esta solução requer conhecimentos de programação. Apresentamos a seguir algumas informações sobre como o fazer. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/diretory/). Não poderemos proporcionar-lhe assistência técnica.
>

#### Etapa 1: criar o script de backup

O primeiro passo consiste em criar o script que permitirá realizar o backup da base de dados. Encontrará abaixo um exemplo que o ajudará a realizar esta operação. No entanto, se encontrar dificuldades, este exemplo não substitui por si só a ajuda que um webmaster pode fornecer.

```php
<?
system("mysqldump --host=server_address --user=user_name --password=user_password name_of_database > backup_file_name.sql");
?>
```

Substitua a informação genérica do script pela informação da base de dados correspondente, recorrendo aos elementos abaixo. Quando o script estiver concluído, aconselhamos que dê ao script "backup.php" um nome.

|Informações|A substituir por|
|---|---| 
|server_address|O endereço do servidor da base de dados.|
|user_name|O nome de utilizador com acesso à base de dados.|
|user_password|A palavra-passe do nome de utilizador indicado anteriormente.|
|name_of_database|O nome da base de dados.|
|backup_file_name|O nome do ficheiro de backup quando este for executado.|

#### Etapa 2: descarregar o script no espaço de armazenamento FTP

Depois de criar o script de backup, deverá carregá-lo para o espaço de armazenamento FTP do seu alojamento web. Para isso, consulte as informações descritas no passo 2 da documentação intitulada "[Ligar-se ao espaço de armazenamento](/pages/web/hosting/hosting_how_to_get_my_website_online)".

Para realizar as seguintes etapas, transfira o script para a pasta que contém o website que utiliza a base de dados. **Tenha cuidado com o nome do ficheiro do script de backup.** Não substitua um ficheiro já existente com o mesmo nome no espaço de armazenamento FTP quando carregar o script. Se aparecer uma mensagem de aviso, altere o nome do script que acabou de criar e tente carregá-lo novamente.

#### Etapa 3: chamar o script

Assim que o script for transferido para o espaço de armazenamento FTP, inicie o código presente no mesmo chamando o script.

Para efetuar esta operação, aceda ao URL completo do script a partir do seu browser (por exemplo: mypersonaldomain.ovh/backup.php se tiver nomeado o script "backup.php"). Se as informações introduzidas no script estiverem corretas, o backup será iniciado. Aguarde alguns instantes até a instalação ser finalizada. Caso contrário, verifique as informações introduzidas no script e tente novamente.

#### Etapa 4: recuperar o backup a partir do espaço de armazenamento FTP

Uma vez feito o backup, recupere-o na pasta onde colocou o script de backup. O backup da base de dados deve ter o nome definido anteriormente no script. Agora já só tem de descarregar o backup para o seu dispositivo.

Antes de terminar, sugerimos que elimine o ficheiro de backup e o script do diretório onde se encontram.

> [!primary]
>
> A utilização de um script de backup com o nosso sistema de tarefas planificadas (tarefas « CRON ») pode permitir automatizar backups com a frequência que desejar. Saiba mais sobre as tarefas planificadas no manual: "[Criar uma tarefa planificada (CRON) no alojamento web](/pages/web/hosting/cron_tasks)".
>

### Recuperar um backup através de um comando SSH

Para interagir com o espaço de armazenamento FTP, deverá utilizar comandos a partir de um terminal.

> [!warning]
>
> São necessários conhecimentos mais avançados para utilizar este tipo de acesso. Apresentamos a seguir algumas informações sobre a operação. Contudo, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/diretory/). Não poderemos proporcionar-lhe assistência técnica.
>

Depois de aceder ao espaço de armazenamento FTP por SSH, utilize um comando que lhe permita efetuar o backup da base de dados. Apresentamos a seguir um exemplo que o ajudará a realizar esta operação. Tenha em conta que o backup será realizado no diretório que estiver ativo no momento em que introduzir o comando no terminal.

```sh
mysqldump --host=server_address --user=user_name --password=user_password name_of_database > backup_file_name.sql
```

Substitua a informação genérica deste comando pela informação da base de dados em causa. Agora já só tem de descarregar o backup para o seu computador.


|Informações|A substituir por|
|---|---| 
|server_address|O endereço do servidor da base de dados.|
|user_name|O nome de utilizador com acesso à base de dados.|
|user_password|A palavra-passe do nome de utilizador indicado anteriormente.|
|name_of_database|O nome da base de dados.|
|backup_file_name|O nome do ficheiro de backup quando este for executado.|

## Quer saber mais? <a name="go-further"></a>

[Tutorial - O que fazer quando o meu banco de dados estiver cheio?](/pages/web/hosting/sql_overquota_database)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 