---
title: 'Importar um backup para a base de dados de um alojamento web'
excerpt: 'Saiba como importar um backup para a base de dados de um alojamento web da OVH'
slug: partilhado_guia_de_importacao_de_uma_base_de_dados_mysql
section: Bases de dados
order: 04
---

**Última atualização: 11/01/2019**

## Sumário

As bases de dados, utilizadas pela maioria dos sistemas de gestão de conteúdos (Content Management System ou CMS) como WordPress ou Joomla!, permitem armazenar elementos dinâmicos, como comentários ou artigos. São vários os motivos pelos quais poderia ser obrigado a importar dados numa das suas bases de dados para modificar ou substituir os conteúdos.

**Saiba como importar um backup para a base de dados de um alojamento web da OVHcloud.**

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}.
- Possuir uma base de dados criada no âmbito de uma oferta de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}.
- Ter acesso ao backup que pretende importar na base de dados.
- Consoante o método de importação utilizado, ter acesso à gestão do alojamento web a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} ou às informações que lhe permitem aceder à base de dados.

## Instruções

Antes de começar, deve escolher o método que quer utilizar para importar o backup na base de dados. Existem várias opções com diferentes níveis de dificuldade técnica.

- **Restaurar a base de dados numa data anterior**: esta solução permite restaurar o conteúdo da base de dados utilizando as cópias de segurança armazenadas na ferramenta de backup da OVHcloud. Esta operação não requer conhecimentos técnicos especiais e realiza-se a partir da [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

- **Importar o seu próprio ficheiro de backup**: esta solução permite importar os dados do seu próprio ficheiro de backup numa das suas bases de dados. Esta operação pode ser realizada a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

- **Realizar a importação a partir da interface web phpMyAdmin**: para isso, deverá aceder à interface phpMyAdmin. Tenha em atenção que esta operação requer conhecimentos técnicos e que existe um limite para o tamanho do ficheiro de configuração.

- **Realizar a importação utilizando um script**: para isso, deverá criar um script alojado no seu alojamento web da OVHcloud. São necessários conhecimentos específicos para criar este script.

- **Realizar a importação utilizando um comando SSH**: deverá ligar-se ao seu espaço de armazenamento através do protocolo SSH e utilizar comandos para interagir com o espaço. Tenha em atenção que este tipo de acesso requer conhecimentos técnicos avançado e ter adquirido um plano de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external} concreto.

Tenha em conta que algumas destas operações se realizam fora da interface da OVHcloud e, por isso, deverá executá-las você mesmo. A seguir, disponibilizamos informações sobre os diferentes métodos de importação. No entanto, se precisar de ajuda, pode entrar em contacto com um webmaster.

Consulte a documentação correspondente ao método de importação pretendido.

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, recomendamos que recorra a um fornecedor especializado e/ou que contacte o editor do serviço se encontrar dificuldades. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção deste guia intitulada: “Quer saber mais?”
>

### Restaurar um backup a partir da Área de Cliente

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em `Alojamentos`{.action} e escolha o nome do alojamento correspondente. Por fim, clique no separador `Base de dados`{.action}.

Aparecerá uma tabela com todas as bases de dados criadas com o plano de alojamento. Clique nos três pontos à direita da linha correspondente à base de dados que pretende restaurar numa data anterior e selecione `Restaurar um backup`{.action}. Tenha em atenção que esta ação substituirá o conteúdo atual da base de dados pelo backup.

![databaseimport](images/database-import-step5.png){.thumbnail}

Todos os backups ficarão disponíveis na base de dados selecionada.  Poderá consultar a data exata das cópias de segurança, assim como a data em que estas cópias de segurança serão eliminadas da ferramenta da OVHcloud.

Clique nos três pontos à direita da linha correspondente à base de dados que pretende restaurar e selecione `Restaurar um backup`{.action}. Na janela que aparece, certifique-se de que as informações estão corretas e clique em `Confirmar`{.action}. Aguarde uns instantes para que a restauração seja realizada. 

![databaseimport](images/database-import-step6.png){.thumbnail}

### Importar o seu próprio backup a partir da Área de Cliente

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em `Alojamentos`{.action} e escolha o nome do alojamento correspondente. Por fim, clique no separador `Base de dados`{.action}.

Aparecerá uma tabela com todas as bases de dados criadas com o plano de alojamento. Clique nos três pontos à direita da linha correspondente à base de dados na qual pretende importar dados e selecione `Importar ficheiro`{.action}.

![databaseimport](images/database-import-step1.png){.thumbnail}

Na nova janela, selecione `Importar um novo ficheiro`{.action} e clique em `Seguinte`{.action}.

> [!primary]
>
> A opção `Utilizar um ficheiro existente`{.action} permite importar novamente os dados de um ficheiro que já foi enviado na ferramenta de importação.
>

![databaseimport](images/database-import-step2.png){.thumbnail}

Introduza o nome do ficheiro (que lhe permitirá identificar este backup mais tarde, caso pretenda voltar a restaurá-lo) e selecione o ficheiro de backup no seu computador. Clique em `Enviar`{.action}.

Aguarde a confirmação de envio e, de seguida, clique em `Seguinte`{.action}.

![databaseimport](images/database-import-step3.png){.thumbnail}

Por último, selecione as opções adicionais que pretende aplicar:

- **eliminar conteúdos da base de dados**: o conteúdo da BD será completamente eliminado e substituído pelo conteúdo do backup. Recomendamos que selecione esta opção apenas e exclusivamente se pretende substituir o conteúdo atual da base de dados pelo conteúdo do ficheiro de backup.

- **enviar um e-mail no final da importação**: no final do processo, é enviado um e-mail para informar que a importação foi concluída.

Uma vez selecionada a opção, clique em `Confirmar`{.action} e aguarde até que a importação seja concluída.

![databaseimport](images/database-import-step4.png){.thumbnail}

### Realizar a importação a partir da interface phpMyAdmin

Em primeiro lugar, deverá aceder a phpMyAdmin. Para isso, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em `Alojamentos`{.action} e selecione o nome do alojamento correspondente. Por fim, clique no separador `Base de dados`{.action}.

Aparecerá uma tabela com todas as bases de dados criadas com o plano de alojamento. Clique nos três pontos à direita da linha correspondente à base de dados e selecione `Aceder ao phpMyAdmin`{.action}.

![databaseimport](images/database-import-step7.png){.thumbnail}

Uma vez na página de phpMyAdmin, introduza as informações da base de dados, selecione a opção de aceder aos dados atuais da base de dados no menu pendente e, em seguida, conecte-se.  Depois de se conectar, na barra superior direita, selecione a opção `Importar`{.action} e introduza a informação que lhe é solicitada. Recordamos que existe um limite para o tamanho do ficheiro de configuração.

> [!warning]
>
> A interface phpMyAdmin não pertence à OVHcloud, pelo que deverá encarregar-se da realização das operações necessárias. Recomendamos que, caso de precise de ajuda, recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor da interface. Não poderemos proporcionar-lhe assistência técnica.
>

### Importar um backup utilizando um script

Esta operação realiza-se em vários passos. Certifique-se de que possui o ficheiro de backup que pretende importar, assim como a informação necessária para se conectar à base de dados na qual se realizará a importação: o nome de utilizador e a respetiva palavra-passe, o nome da base de dados e o endereço do servidor.

> [!warning]
>
> Esta operação requer conhecimentos técnicos de programação. Apresentamos a seguir algumas informações sobre como a realizar. Contudo, se precisar de ajuda, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/). Não poderemos proporcionar-lhe assistência técnica.
>

#### 1 - Criar um script de importação

O primeiro passo consiste em criar o script que permitirá realizar a importação na base de dados. Encontrará abaixo um exemplo que o ajudará a realizar esta operação. No entanto, se precisar de ajuda, pode contactar um webmaster.

```php
<?php
system("cat nome_ficheiro_backup.sql | mysql --host=endereço_do_servidor --user=nome_utilizador --password=palavra_passe_utilizador nome_base_de_dados");
?>
```

Substitua a informação genérica do script pela informação da base de dados correspondente. Depois de concluir o script, recomendamos que atribua um nome (“ import.php”, por exemplo).

|Informações|Substituir por|
|---|---|
|nome_ficheiro_backup|O nome do ficheiro de backup que deseja importar.|
|endereço_do_servidor|O endereço do servidor da base de dados na qual pretende importar os dados.|
|nome_utilizador|O nome de utilizador com acesso à base de dados.|
|palavra_passe_utilizador|A palavra-passe do nome de utilizador indicado anteriormente.|
|nome_base_de_dados|O nome da base de dados.|

#### 2 - Carregar o script e o backup no espaço de armazenamento

Depois de criar o script de importação, deverá carregá-lo juntamente com o ficheiro de backup que quer importar no espaço de armazenamento do seu alojamento web. Para isso, ligue-se ao seu espaço de armazenamento. Se precisar de ajuda, consulte o passo 2 do nosso manual “[Publicar um website no alojamento web](https://docs.ovh.com/pt/hosting/partilhado_colocar_o_meu_website_online/){.external}”.

Para poder realizar as seguintes ações, carregue o script de importação e o ficheiro de backup na pasta “www”. **Preste especial atenção ao nome do ficheiro do script de importação.** Certifique-se de que não apaga um ficheiro já existente com o mesmo nome no espaço de armazenamento quando carregar o script. Se aparecer uma mensagem de aviso, altere o nome do script que acabou de criar por outro diferente e tente carregá-lo novamente.

#### 3 - Chamar um script

Depois de carregar o script de importação e o ficheiro de backup no espaço de armazenamento, só terá de iniciar a operação. Para isso, é necessário chamar o script.

Introduza no browser o URL completo do script (por exemplo, “mypersonaldomain.ovh/import.php”, se o nome do script for “import.php”). Se as informações introduzidas no script estiverem corretas, iniciará a importação. Só precisará de esperar alguns segundos. Caso contrário, verifique as informações introduzidas no script e tente novamente.

Uma vez concluída a importação, recomendamos vivamente que elimine o ficheiro de backup assim como o script do diretório “www”.

### Importar um backup por SSH

Para interagir com o seu espaço de armazenamento, deverá executar comandos a partir de um terminal.

> [!warning]
>
> Este tipo de acesso requer conhecimento técnicos mais avançados. Apresentamos a seguir algumas informações sobre como fazer. Contudo, se precisar de ajuda, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/). Não poderemos proporcionar-lhe assistência técnica.
>

Depois de aceder ao espaço de armazenamento por SSH, utilize um comando que lhe permita realizar a importação da base de dados. Apresentamos a seguir um exemplo que o ajudará a realizar esta operação. Tenha em atenção que, em primeiro lugar, deverá carregar o backup que pretende importar no espaço de armazenamento e enviar o comando no seu terminal posicionando-se no diretório onde se encontra este último.

```sh
cat nome_ficheiro_backup.sql | mysql --host=endereço_do_servidor --user=nome_utilizador --password=palavra_passe_utilizador nome_base_de_dados
```

Substitua a informação genérica do script pela informação da base de dados correspondente. Uma vez concluída a importação, recomendamos vivamente que elimine o ficheiro de backup do diretório onde o carregou.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}