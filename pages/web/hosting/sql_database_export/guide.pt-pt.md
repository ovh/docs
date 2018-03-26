---
title: 'Partilhado: Guia de exportação de uma base de dados MySQL'
excerpt: 'Partilhado: Guia de exportação de uma base de dados MySQL'
id: '1394'
slug: partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql
legacy_guide_number: g1394
---


## Pré-requisitos
Deverá ter em sua posse:


- Um acesso ao seu espaço cliente

- O seu identificador a password, bem como o servidor sql da base de dados que permitirá que se ligue à base de dados.
Está disponível um guia que diz respeito à recuperação dos identificadores SQL :[]({legacy}1374)


Encontrará neste guia diferentes métodos para que possa realizar a exportação da base de dados.

![](images/img_1833.jpg){.thumbnail}


## A partir do Espaço cliente
É possível recuperar a cópia da sua base de dados no Espaço cliente.

Este método é o mais simples e mais rápido para que possa realizar a exportação da sua base de dados.

Deve, num primeiro tempo, ligar-se ao [Espaço Cliente](https://www.ovh.com/manager/web).

Uma vez ligado ao espaço cliente selecione o seu nome de domínio na secção Alojamentos.

## Etapa 1
Na parte "Alojamento" selecione o alojamento em questão e aceda de seguida a "Gestão SQL".

Em função do tamanho da sua base de dados, a criação do backup da sua base de dados pode levar mais ou menos tempo.

![](images/img_2698.jpg){.thumbnail}

## Etapa 2
Selecione de seguida na "roda dentada" à direita da base de dados em questão e clique depois em criar um dump.

A lista das bases de dados aparecerá na tabela (cf. ecrã ao lado).

![](images/img_2699.jpg){.thumbnail}

## Etapa 3
Pode de seguida selecionar a data do último backup: Atual, Ontem, a semana passada

Três datas de backup são recuperáveis:


- Atual: cópia da base de dados no instante T.

- Ontem: cópia da base de dados da noite (D-0), o backup recuperado foi realizado às 3h da manhã.

- A semana passada: cópia da base de dados de D-7, o backup recuperado foi realizado às 3h da manhã.


Clique em "Seguinte" depois "Validar"para lançar o repatriamento do seu backup SQL.

Após ter sido validado, é necessário aguardar até que o dump* seja repatriado, sendo que de seguida receberá um e-mail com o link que permite a obtenção do ficheiro de backup (dump).

Deixamos um exemplo do assunto do e-mail recebido:


```
[OVH-SQL] testovh.ovh - Dump da sua base: testovhmod1
```


Um link para o ficheiro de backup será disponível no e-mail. O backup da sua base de dados será disponível num servidor distante durante uma duração de 30 dias.

O ficheiro recebido será comprimido, aconselhamos que o descomprima antes de importar o seu ficheiro de backup SQL.

![](images/img_2700.jpg){.thumbnail}


## Através do PhpMyAdmin
Deve num primeiro tempo ligar-se à [interface do PhpMyAdmin](https://phpmyadmin.ovh.net/).

## Exportação rápida
Após ligar-se, seleciona a sua base de dados (cf quadro azul ao lado).

Aceda de seguida a "Exportar".

A exportação rápida não permite que escolha o formato de exportação da sua base de dados.

Veja a segunda parte, onde poderá utilizar uma exportação personalizada.

![](images/img_1963.jpg){.thumbnail}

## Exportação personalizada
Uma vez ligado, selecione a sua base de dados.

Aceda de seguida a "Exportar".

Selecione "Personalizado - mostrar todas as opções possíveis".

Vão aparecer diferentes opções.

Tabela(s): 

É possível que selecione a totalidade ou uma parte das tabelas a exportar.

Pode ser interessante utilizar esta opção caso a sua base de dados seja grande, podendo exportar e depois importar a sua base de dados várias vezes.

Saída: 

É possível definir aqui se deseja gerar o seu backup para um ficheiro externo ou apresentar diretamente o resultado do pedido que deverá copiar.

Formato: 

Defina o formato da exportação da sua base de dados. É aconselhado que deixe SQL.

Opções específicas ao formato:

É possível definir o que deseja exportar a tabela.
Seja unicamente as estruturas ou os dados, ou exportar os dois.
É aconselhado que introduza "estrutura e dados"
Il vous est possible de définir ce que vous sou.

Opções de exportação:

Selecione a opção de exportação "Nenhum dos modos em baixo" a fim de evitar o erro associado ao "Max_Allowed_Packet".

Apenas serão vistas neste guia as opções mais importantes.

A fim de lançar a exportação, clique em "Executar".

![](images/img_1964.jpg){.thumbnail}

## Backup do ficheiro .sql
Poderá efetuar o backup do dump* através de um link.

Guarde o ficheiro que o PhpMyAdmin lhe propõe.

![](images/img_1848.jpg){.thumbnail}

## Backup anterior

- É possível, através do PhpMyAdmin e na página inicial, recuperar um backup da noite anterior e da semana passada.




## Através de um script
É possível que crie esses scripts através de um ficheiro txt. Deverá dar-lhe a extensão correspondente à linguagem utilizada.

Esta solução é interessante, uma vez que permite exportar os dumps* importantes e está acessível a todos os alojamentos partilhados.

Nos scripts em baixo, substitua:


- nome_da_base.sql pelo nome do seu ficheiro.

- servidor_sql pelo nome do servidor onde a sua base de dados foi crada.

- nome_da_base pelo nome da sua base de dados.

- password pela password associada à sua base de dados.

O seu ficheiro de backup deverá ser colocado no seu alojamento via FTP.

Através de php (backupbase.php):
O código a introduzir e a completar: 


```
<?
echo "A sua base de dados está em curso de backup.......";
system("mysqldump --host=servidor_sql --user=nome_da_base --password=password nome_da_base > nome_da_base.sql");
echo "Está terminado. Poderá recuperar a base através de FTP";
?>
```


Através de perl (backupbase.cgi):
O código a introduzir e a completar: 


```
#!/usr/bin/perl
print "A sua base de dados está em curso de backup.......";
system("mysqldump --host=servidor_sql --user=nome_da_base --password=password nome_da_base > nome_da_base.sql");
print "Está terminado. Poderá recuperar a base através de FTP";
```


- Efetue o upload via FTP do script que criou, bem como o dump* da sua base na pasta www do seu alojamento e chame o script com o browser com o seguinte url: http://votre_domaine.com/importbase.php


Substitua seudominio.com pelo nome de domínio e importbase.php pelo nome do seu ficheiro.

Este comando irá gerar um ficheiro nome_da_base.sql na pasta onde o script foi colocado.

Nesse ficheiro encontrará todas as instruções SQL para recriar a base como estava aquando do backup, com o conjunto dos seus dados.

- Nota 1 : Se a sua base de dados é demasiado volumosa, deve efetuar um dump* tabela por tabela ao adicionar a opção "--tables nome_da_table", e no final para ter o seguinte comando:

mysqldump --host=serveur_sql --user=nom_de_la_base --password=mot_de_passe nom_de_la_base --tables nom_de_la_table > nom_de_la_base.sql


- Nota 2 : Pode igualmente comprimir o ficheiro para conseguir efetuar o seu download para o seu computasdor (por FTP ou via web). Para comprimir o ficheiro, execute o comando gzip, o que criará um ficheiro na extensão .sql.gz :

system("gzip nome_da_base.sql");


## Através de um comando via SSH

## Os pré-requisitos

- Obtenha o seu identificador e password que lhe permita ligar-se ao seu alojamento web.
Está disponível um guia que diz respeito à recuperação dos dados de acesso FTP: []({legacy}1374)

- Dispor de uma oferta que permita o acesso ssh ([ver as características das nossas ofertas](http://www.ovh.pt/alojamento_partilhado))


Queira encontrar em baixo um guia para a ligação via SSH:


- [Ligação ssh partilhado](http://guias.ovh.pt/SshPartilhado)



## Realizar a importação da base de dados via ssh
Ligue-se por ssh ao seu alojamento partilhado.

Aceda à pasta onde deseja colocar o ficheiro a importar, e de seguida coloque o seguinte comando:

O código a introduzir e a completar: 


```
mysqldump --host=serveur_sql --user=nom_de_la_base --password=mot_de_passe nom_de_la_base > nom_de_la_base.sql
```


O código completo em exemplo: 


```
mysqldump --host=sql3 --user=testbackup --password=RtPgDsmL testbackup > testbackup.sql
```




## Através do SQL Privado
Está disponível um guia que diz respeito à importação de uma base de dados está disponível:


- []({legacy}2023)




## Salvaguarda - Backup
Se deseja recuperar o backup de uma das suas bases de dados numa data anterior através de um script, deverá precisar um número de porta específico:

Cópia atual = 3306
Ontem = 3307
Semana passada = 3317

Deixamos um exemplo de um código que poderá utilizar:

PHP :

```
system("mysqldump --host=servidor_sql --user=nome_da_base --password=password --port=3317 nom_de_la_base > nome_da_base.sql ");
```



- Este sistema de backup está disponível para as bases de dados com a versão mínimna de Mysql5




## Erros "Max_Allowed_Packet" aquando da importação do dump*
Aquando de um dump*, deve personalizar a exportação da sua base de dados SQL através de PhpMyAdmin.

O objetivo é o de evitar que todo o conteúdo de uma tabela seja adicionado através de um só "INSERT INTO" para evitar os erros associados à variável servidor "Max_Allowed_Packet" aquando de uma importação do dump* se o conteúdo da tabela é importante.

Exemplo, se a tabela A contém 500 linhas, ao invés de ter um único "INSERT INTO" para as 500 linhas, deverá efetuar 500 "INSERT INTO". 

Através do PhpMyAdmin:

Para tal, aquando da exportação via PhpMyAdmin, selecione a opção de criação de dados "Nenhum dos modos abaixo" para evitar os erros associados ao "Max_Allowed_Packet".

Através de ssh:

Deverá utilizar a opção --skip-extended-insert.

A opção --extended-insert, incluída com a opção -opt (Ativada por defeito), gera um único INSERT INTO para toda uma tabela, devendo desativar essa opção graças ao comando:


```
--skip-extended-insert
```



![](images/img_1965.jpg){.thumbnail}


## Léxico
dump*: o ficheiro de backup da base de dados do seu site. 

