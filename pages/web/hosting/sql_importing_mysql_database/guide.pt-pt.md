---
title: 'Partilhado: Guia de importação de uma base de dados MySQL'
excerpt: 'Partilhado: Guia de importação de uma base de dados MySQL'
id: '1393'
slug: partilhado_guia_de_importacao_de_uma_base_de_dados_mysql
legacy_guide_number: g1393
---


## Pré-requisitos
Deverá ter em sua posse:


- O ficheiro de backup da sua base de daados, o chamado dump*, obtido aquando do backup da sua base de dados (Está disponível um guia que diz respeito ao backup das bases de dados SQL []({legacy}1394)).

O backup da base de dados é geralmente do tipo .sql.
Se a sua base de dados foi criada num outro prestador que não a OVH, convidamo-lo a entrar em contacto com eles para obter informações sobre como poderá recupera a sua base de dados do seu serviço. 


- É igualmente necessário ter em sua posse o seu identificador a password, bem como o servidor sql da base de dados que permitirá que se ligue à base de dados.
Está disponível um guia que diz respeito à recuperação dos identificadores SQL :[]({legacy}1374)


![](images/img_1802.jpg){.thumbnail}


## A partir do seu Espaço Cliente OVH
A solução mais simples e mais rápida para importar a sua base de dados é através do [espaço cliente OVH](https://www.ovh.com/manager/).
A vantagem deste método é que não existe limite de tamanho na importação do seu ficheiro de backup.

Após estar ligado ao [espaço cliente](https://www.ovh.com/manager/) com o seu NIC-Handle/Password, selecione o seu alojamento à esquerda e depois aceda ao separador Bases de dados.

![](images/img_4125.jpg){.thumbnail}
À direita da base de dados onde pretende importar o seu backup deve clicar na roda dentada e escolher "Importar um ficheiro".

Depois basta seguir as etapas propostas no Espaço Cliente para que possa importar o seu backup SQL.

![](images/img_4126.jpg){.thumbnail}


## Através do PhpMyAdmin para MySQL
Deverá ligar-se à base de dados através do PhpMyAdmin.

Queira seguir este link para se ligar: [PhpMyAdmin OVH](https://phpmyadmin.ovh.net)

Está disponível um guia que diz respeito à utilização do PhpMyAdmin:[]({legacy}1374)


- Após estabelecer ligação ao PhpMyAdmin, selecione a sua base de dados ao clicar no seu nome (cf quadro azul do lado esquerdo do ecrã).

- Clique de seguida em "Importar".

- Selecione o seu ficheiro de backup ao clicar em "Encontrar" (atenção, o ficheiro não pode ser maior do que 16MB).

- Clique em "Executar" para dar inicio à importação.

Se obtém o backup da base de dados através do espaço cliente, verifique que descompactou o ficheiro antes de o importar.


![](images/img_1962.jpg){.thumbnail}

## Lembramos:

- O ficheiro não pode ser maior do que 16 MB.




## Através de um script presente no seu alojamento
É possível que crie esses scripts através de um ficheiro txt. Deverá dar-lhe a extensão correspondente à linguagem utilizada.

Nos scripts em baixo, substitua:


- nome_da_base.sql pelo nome do seu ficheiro.

- servidor_sql pelo nome do servidor onde a sua base de dados foi crada.

- nome_da_base pelo nome da sua base de dados.

- password pela password associada à sua base de dados.

O seu ficheiro de backup deverá ser colocado no seu alojamento via FTP.


## Através PHP (importbase.php) :
O código a introduzir e a completar: 


```
<?php
echo "A sua base de dados está em curso de restauro.......
<br>";
system("cat nome_da_base.sql | mysql --host=servidor_sql --user=nome_da_base --password=password nome_da_base");
echo "Está terminado. A sua base está a ser utilizada neste alojamento.";
?>
```



## Através de perl (importbase.cgi) :
O código a introduzir e a completar: 


```
#!/usr/bin/perl

print "A sua base de dados está em curso de restauro.......
<br>";
system("cat nome_da_base.sql | mysql --host=servidor_sql --user=nome_da_base --password=password nome_da_base");
print "Está terminado. A sua base está a ser utilizada neste alojamento.";
```



- Efetue o upload via FTP do script que criou, bem como o dump* da sua base na pasta www do seu alojamento e chame o script com o browser com o seguinte url: http://votre_domaine.com/importbase.php


Substitua oseudominio.com pelo nome de domínio e importbase.php pelo nome do seu ficheiro.

O seu ficheiro de backup está comprimido?

Se o seu dump* não está comprimido, ou seja, na forma .sql.gz, basta substituir o mesmo no comando no inicio do script :


```
system("gunzip nome_da_base.sql.gz");
```


Exemplo:

## Através de PHP: dump comprimido + restauro bdd
O código completo como exemplo: 


```
<?php
echo "Descomprimir o ficheiro.....
<br>";
system("gunzip testbackup.sql.gz");
echo "A sua base está em curso de restauro......
<br>";
system("cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport");
echo "Está terminado. A sua base está a ser utilizada neste alojamento.";
?>
```



## Através de perl:dump comprimido + restauro bdd
O código completo como exemplo: 


```
#!/usr/bin/perl

print "Descomprimir o ficheiro.....
<br>";
system("gunzip testbackup.sql.gz");
print "A sua base está em curso de restauro.......
<br>";
system("cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport");
print "Está terminado. A sua base está a ser utilizada neste alojamento.";
```




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
cat nome_da_base.sql | mysql --host=servidor_sql --user=nome_da_base --password=password nome_da_base
```


O código completo em exemplo: 


```
cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport
```




## Através do SQL Privado
Está disponível um guia que diz respeito à importação de uma base de dados está disponível:


- [Importação de uma base de dados SQL Privado](https://www.ovh.pt/g2023.partilhado_tudo_sobre_sql_privado#backup_importacao_restauro)




## Erros devido ao nome da base de dados
Pode ser igualmente necessário adicionar a seguinte linha no inicio do seu ficheiro de backup:


```
utilize nom_de_votre_base;
```


O nom_de_vote_base corresponde ao nome da base para o qual está a importar os dados.


## Léxico
dump*: o ficheiro de backup da base de dados do seu site. 

