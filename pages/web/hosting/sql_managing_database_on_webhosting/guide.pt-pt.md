---
title: Gestao de uma base de dados a partir de um alojamento partilhado OVH
slug: gestao-de-uma-base-de-dados-a-partir-de-um-alojamento-partilhado-ovh
legacy_guide_number: 1943
hidden: true
---


## Informacoes gerais
Uma base de dados, muitas vezes designada como "BDD" ou "DB" (database) é um elemento estruturado e organizado que permite o armazenamento de grandes quantidades de informações (adição, atualização, pesquisa de dados). O SQL é a linguagem que permite solicitar à base a inclusão, edição, recuperação e eliminação de dados.

O número de bases de dados e o seu tamanho máximo difere de acordo com o tipo de oferta de alojamento partilhado do qual dispões. Poderá encontrar os diferentes serviços de alojamento partilhado OVH [aqui](https://www.ovhcloud.com/pt/web-hosting/){.external}

Somente os alojamentos partilhados da OVH podem aceder a estas bases de dados. A OVH não permite igualmente a ligação a partir do "exterior" a uma base de dados criada no serviço de alojamento partilhado.

São propostos 2 tipos de bases de dados: MySQL ou PostgreSQL


## Gestao de uma base de dados num alojamento partilhado

### Criacao de uma base de dados
Aceda ao seu [espaço cliente](https://www.ovh.com/manager/web){.external} com a ajuda do seu identificador de cliente (nic-handle, por exemplo " **xx999-ovh** ") - password.


![hosting](images/3035.png){.thumbnail}

No nosso exemplo vamos utilizar uma oferta de alojamento Web OVH que possui várias bases de dados. Vamos criar então uma base de dados MySQL. Selecione o seu alojamento na secção "Alojamentos" e aceda de seguida a Bases de dados


![hosting](images/3854.png){.thumbnail}

- Clique em "Criar uma base de dados" para aceder ao formulário de criação.
- Poderá também Encomendar uma base de dados se já não tem mais bases de dados disponíveis na sua oferta de alojamento.


![hosting](images/3855.png){.thumbnail}

A esse nível, tem de definir:

- O tipo de base de dados (MySQL ou PostgreSQL);
- A versão da sua base de dados;
- O tamanho da base de dados (escolha apenas possível a partir de uma oferta "Pro");


![hosting](images/3040.png){.thumbnail}

Uma vez preenchido o formulário, deve clicar em "Seguinte" A esse nível, tem de definir:

- um nome de utilizador ( 6 caracteres alfa-numéricos, no máximo );
- uma palavra-passe, que deve respeitar certas condições indicadas no formulário.


![hosting](images/3041.png){.thumbnail}

Clique em "Seguinte" a fim de passar à última etapa.

Trata-se de um resumo das informações de criação da sua base de dados. Se não constatar nenhum erro, poderá clicar em "Validar"


![hosting](images/3042.png){.thumbnail}

Se tudo correr bem, aparecerá uma mensagem de sucesso. A sua base de dados levará alguns minutos a estar totalmente funcional. Assim que tal ocorrer, receberá um e-mail.


![hosting](images/3043.png){.thumbnail}

A criação da sua base de dados está agora concluída.


## As opcoes de gestao que estao a disposicao a partir do Espaco Cliente OVH
Após a criação da base de dados, a OVH fornece-lhe um painel de funcionalidades de forma a simplificar a sua administração.


![hosting](images/3847.png){.thumbnail}


### Alterar a palavra-passe
Permite atualizar a palavra-passe da sua base de dados

- Atenção: modificar a palavra-passe tem consequências. Essa ação poderá fazer com que um ou mais sites que recorram a essa base de dados fiquem indisponíveis .

Em caso de alteração de palavra-passe, se tem um site que acede a essa base de dados, deve  **obrigatoriamente**  alterar a palavra-passe no ficheiro de configuração da ligação presente no seu espaço FTP.


### Criar um backup (dump)
É possível gerar um backup da sua base de dados diretamente a partir do seu Espaço Cliente.

A OVH propõe-lhe a recuperação dos dados da sua base de dados em diferentes datas:

- Agora: Os dados que estão atualmente na base de dados;
- Ontem: Os dados que estariam armazenados na base de dados há 24 horas
- Semana anterior: Os dados que estariam armazenados na base de dados há 7 dias.

Esta funcionalidade permite-lhe recuperar os dados em caso de eliminação ou alteração dos dados.


![hosting](images/3045.png){.thumbnail}

Uma vez efetuada a seleção, clique em "Seguinte" e depois clique em "Validar". A criação do backup levará alguns minutos, e assim que tudo estiver terminado receberá um e-mail no endereço de e-mail registado na sua conta de cliente.


### Restaurar um backup (dump)
Se desejar restaurar os dados de um backup criado pelo método detalhado em cima, poderá efetuá-lo aqui.

No menu de restauro, à direita de cada backup efetuado com o método descrito em cima, poderá:

- Fazer o download do backup para o seu computador
- Restaurar a base de dados a partir deste backup


![hosting](images/3848.png){.thumbnail}


### Eliminar a base de dados
Se não deseja conservar uma base de dados poderá elimina-la definivamente com este botão.

**Esta ação é irreversível e levará à perda de todos os dados presentes na base de dados** .

Aparecerá de seguida um pop-up que o irá lembrar que a eliminação é definitiva e será solicitado que confirme o seu pedido.


![hosting](images/3046.png){.thumbnail}


### Recalcular a quota de utilizacao
**Informação importante sobre as quotas de utilização** :

Estas informações são atualizadas automaticamente a cada  **24 horas** .

Poderá, se desejar, iniciar uma ação de atualização da informação a partir do seu Espaço Cliente.

Se ultrapassar a quota autorizada, as permissões da base de dados serão limitadas a um acesso com apenas possibilidade de leitura.

Para evitar esta limitação, convidamo-lo a efetuar uma limpeza da sua base de daos e recalcular a quota de utilização a fim de se manter abaixo do patamar recomendado. A sua base de dados deixará de estar limitada apenas a leitura de forma automática alguns minutos após ser efetuado o cálculo da quota e se verificar que a mesma já não é ultrapassada.


### Aceder a phpMyAdmin
Deve indicar apenas a palavra-passe da sua base de dados. As restantes informações serão automaticamente preenchidas.

- Palavra-passe: a palavra-passe que definiu no seu Espaço Cliente quando criou a base de dados.

Versão: pode escolher ligar-se à sua base de dados atual ou a uma cópia de há 1 ou 7 dias.


![hosting](images/3047.png){.thumbnail}



> [!success]
>
> https://phpmyadmin.ovh.net/
> 


## Erros comuns

### Can't connect to local MySQL
Trata-se de um erro de ligação ao servidor mySQL. A mensagem indica que o seu script tenta estabelecer ligação ao servidor MySQL local, o que não é efetuado. Na OVH, nos alojamentos partilhados, os servidores MySQL não são locais mas, acessíveis através da rede. Na configuração dos seus scripts deverá ter definido localhost e isso não está correto. É, portanto, necessário corrigir o nome do servidor de base de dados no seu ficheiro configuração (deverá ser algo do género "nome_da_sua_basededados.mysql.db")


### Too Many Connections
Se obtém o erro " **Too many connections**" quando tenta estabelecer ligação ao servidor MySQL, isso significa que já foi atingido o valor de  **max_connections** . Atingiu o número de ligações simultâneas autorizados (limitado a 30). Nesse caso, deve verificar no código do seu site que todas as ligações SQL são encerradas após cada "query".


## Outras acoes

### Importar um dump (backup)
Como importar o backup da minha base de dados MySQL? Quais os diferentes métodos para o fazer?

Consulte o guia relativo à importação de uma base de dados MySQL: [aqui](https://www.ovh.pt/g1393.importacao-de-base-de-dados-mysql){.external}


### Exportar uma base de dados
Como exportar o backup da minha base de dados SQL? Quais os diferentes métodos para efetuar o backup da minha base de dados?

Consulte o guia relativo à exportação de uma base de dados MySQL: [ici](https://www.ovh.pt/g1394.exportacao-de-base-de-dados){.external}
