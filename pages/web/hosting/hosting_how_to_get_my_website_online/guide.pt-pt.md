---
title: Colocar o meu website online
slug: partilhado_colocar_o_meu_website_online
legacy_guide_number: g1374
---


## Generalidades
Um website é funcional e é apresentado corretamente se for colocado na pasta correta.
Considerado como norma standard, deve colocar os ficheiros do seu website na pasta "www" do seu alojamento partilhado, para que o mesmo seja apresentado.
Para tal, é necessário que passe por uma etapa de transferência de ficheiros para o seu alojamento. É necessário utilizar então um software que utilize o protocolo de ficheiros (File Transfert Protocol).
Utilizaremos o [FileZilla](http://filezilla-project.org/), uma vez que é um software gratuito.


## Recuperar os meus identificadores FTP

### No e-mail de instalação do alojamento
Aquando da subscrição da sua oferta de alojamento partilhado OVH recebe um e-mail após a instalação dos seus serviços.
Esse e-mail conterá, entre outros, os identificadores FTP necessários.
Em função da sua oferta e do domínio associado ao seu alojamento, o assunto do e-mail será algo do género:


```
/* caso de uma oferta Perso encomendada para o domínio "oseudominio.pt" */

[OVH-perso] oseudominio.pt instalado
```


Contenu :


```
[...]
OS SEUS CÓDIGOS FTP
-------------

Estes códigos permitem-lhe colocar o seu website online
(Atenção: Os seus dados deverão ser colocados na pasta www)

Servidor ftp: ftp.votre-domaine.tld ou ftp.cluster0XX.ovh.net
Login ou utilizador: loginftp
Password: mDpFtP

[...]
```


É este login e password que necessita para se ligar.

Se depois da instalação a password FTP for modificada, recuperar a password neste e-mail não lhe servirá de nada.
Falamos então de quando a modifica no seu Espaço Cliente. O login, esse é imutável, conserve-o.


### No Espaço Cliente
No espaço cliente
Após efetuar o login no seu Espaço Cliente, selecione o domínio associado ao alojamento na secção "Alojamento".
Clique no separador "FTP".
Clique na roda dentada à direita do seu login e depois clique em "alterar a password".
O login associado é apresentado no ecrã após "Login FTP:".
Introduza a nova password que deseja, confirme-a e clique em "Validar". Essa password deve ser composta entre 8 e 12 caracteres alfanuméricos.

Deverá aguardar alguns minutos para que a password seja tomada em conta pelo sistema.


### Utilizar FileZilla

Está à sua disposição um guia relativo à utilização do FileZilla:[]({legacy}1380)

Os elementos que deverá possuir são:

- os ficheiros do seu website
- os ficheiros de backup da sua base de dados (se necessário)

Os seus identificadores FTP:

- host: ftp.seu-dominio.tld ou ftp.cluster0XX.ovh.net
- login: o seu login FTP
- password: a password associada (cf parágrafos anteriores)
- porta: 21 (para ligação SSH: 22 - a partir da oferta Pro)



![](images/img_1858.jpg){.thumbnail}


## Recuperar os meus identificadores FTP

### Através da Área de Cliente
A partir da sua área de cliente, tem a possibilidade de restaurar automaticamente o seu espaço FTP para um "estado anterior".

Para o fazer, selecione o nome de domínio que tem um pacote de alojamento partilhado associado na secção Alojamento

Aceda a "FTP"  e depois "Restaurar o meu espaço Web".

![](images/img_2690.jpg){.thumbnail}
De seguida, terá a possibilidade de escolher a data para a restauração desejada.

Atenção, os dados restaurados irão substituir os dados atuais no seu espaço de alojamento.

Clique em "Seguinte" para confirmar a operação; algumas horas serão necessárias para a restauração dos ficheiros.


- A totalidade do espaço FTP será restaurada com este sistema contrariamente ao que ocorre com um backup através de Filezilla, por exemplo, com o qual pode ser mais seletivo em relação aos ficheiros



### Através de FileZilla
Está disponível um guia que diz respeito à recuperação de um backup inteiro ou de um ficheiro especifico via FTP através do software FileZilla: []({legacy}1593)

## base de dados

### Generalidades
Uma base de dados permite armazenar as informações relacionadas com o seu website ou as suas aplicações.

Ela permite o armazenamento de diferentes tipos de dados, o conteúdo do seu site, os urls das suas páginas, as informações dos seus visitantes.

Diferentes motores de bases de dados estão acessíveis nas ofertas partilhadas da OVH: MySQL, PostgreSQL.


### Criar
Aquando da instalação da sua oferta de alojamento a(s) base(s) de dados incluída(s) não são automaticamente instaladas.
Não recebe então nenhuma informação por e-mail.
Deve, num primeiro tempo, criar a(s) sua(s) base(s) de dados.
Ligue-se ao seu Espaço Cliente, selecione o alojamento relativo na secção "Alojamento".

Depois, no menu "SQL" clique em "Criar uma base de dados"

![](images/img_2743.jpg){.thumbnail}
Selecione o motor da base de dados: "Mysql ou PostgreSQL."
Selecione o tipo de base de dados e depois clique em "Seguinte"

Ser-lhe-á solicitado que introduza um nome de utilizador e uma password.

Receberá depois um e-mail, minutos mais tarde, que conterá os identificadores da base de dados-

![](images/img_2694.jpg){.thumbnail}


### Recuperar os meus identificadores SQL

- Atenção, a(s) sua(s) base(s) de dados incluída(s) não são automaticamente criadas aquando da instalação do seu alojamento.


Receberá, minutos mais tarde de ter efetuado o processo de criação da base de dados, um e-mail que conterá os identificadores da base de dados-
Poderá consultar este e-mail a partir do seu Espaço Cliente. Após estar ligado, clique no menu A minha conta (canto superior direito) e depois Emails recebidos.

![](images/img_2747.jpg){.thumbnail}
O assunto do e-mail será algo do género:


```
[MySQL] A base MySQL Nome_da_BDD
```


Contenu :


```
[...]

A sua base MySQL foi instalada no nosso servidor.

Veja os detalhes técnicos:
-----------------------------

MySQL:
Servidor: mysql51-66.pro
Utilizador: Nome_da_BDD
Nome da base: Nom_da_BDD
Password: ************

[...]
```


É possível que modifique a password da sua base de dados diretamente a partir do seu espaço cliente.


- Atenção: modificar a password da base de dados não é trivial. Poderá levar a uma paragem do site ou dos serviços que utilizam essa base de dados.


Se desejar modificar a password da base de dados deverá aceder ao espaço cliente, seleciona o seu nome de domínio e acede a: "Partilhado" -> "Alojamento" -> "Gestão SQL" -> "Password".

Terá a possibilidade de atualizar a password da sua base de dados.

Deverá atualizar o ficheiro de configuração do seu site para que se conecte à base de dados com a nova password, caso exista um site no seu alojamento que utilize essa base de dados aquando da modificação.


### Ligação ao PhpMyAdmin
Deverá num primeiro tempo aceder à [interface do PhpMyAdmin](https://phpmyadmin.ovh.net/).

Introduza os campos pedidos:


- Servidor: utilizador.mysql.db (o utilizador encontra-o no e-mail de criação da base de dados).

- Utilizador: encontra-o no e-mail de criação da base de dados.

- Password: a password da sua base de dados.

- Versão: poderá escolher a versão de ligação à base de dados, se a base de dados atual ou os backups de 1 ou 7 dias.


Introduza os parâmetros pedidos e clique em "Executar" para se ligar.

![](images/img_1960.jpg){.thumbnail}

- Para as bases de dados do tipo MYSQL 4 antigas deve utilizar o link que consulta na interface de ligação.




### Exportar
Como exportar a minha base de dados? Quais são os diferentes métodos disponível para realizar o backup da minha base de dados?

Está disponível um guia que diz respeito à exportação de uma base de dados:[]({legacy}1394)

![](images/img_1932.jpg){.thumbnail}


### Importar
Como importar o backup da minha base de dados MySQL? Quais são os diferentes métodos para o efetuar?

Está disponível um guia que diz respeito à importação de uma base de dados:[]({legacy}1393)

![](images/img_1933.jpg){.thumbnail}


### Reparar - Otimizar - Analisar
É-lhe possível reparar, otimizar ou analisar as tabelas da sua base de dados.

Para tal deverá ligar-se à base de dados a partir da [interface do PhpMyAdmin](https://phpmyadmin.ovh.net/).

Seleciona de seguida a tabela para a qual deseja realizar uma dessas operações.

Clique de seguida em "Operações" no topo superior direito.

Poderá, no separador de manutenção da tabela, realizar as diferentes operações.

![](images/img_1961.jpg){.thumbnail}


### Utilização do SQL Privado
Deseja saber como utilizar o servidor SQL Privado? Deseja saber como pode importar ou exportar os seus dados?

Está disponível um guia que diz respeito à utilização do servidor SQL Privado :[Guia de utilização do SQL Privado](http://guides.ovh.com/GuideSqlPrive)

![](images/img_1866.jpg){.thumbnail}


## Guia de instalação
Têm necessidade de criar o seu site rapidamente sem que tenha de ter conhecimentos técnicos sobre criação de sites?

Está disponível um guia que diz respeito à instalação de módulos em 1 clique na OVH:[]({legacy}1402)

![](images/img_1930.jpg){.thumbnail}


### Nova instalação de WordPress

O WordPress é um sistema de gestão de conteúdos (CMS) que permite criar e gerir facilmente um website ou um blog.
Gratuito e livre, o WordPress pode ser personalizado graças a numerosos temas e extensões.


- Blog & Site

Está disponível um guia que diz respeito à instalação manual do CMS WordPress:[]({legacy}1375)


![](images/img_1873.jpg){.thumbnail}


### Nova instalação do Joomla

O Joomla é um sistema de gestão de conteúdos (CMS).
Gratuito e livre, o Joomla pode ser personalizado graças a numerosos temas e extensões.
O CMS é um software web que permite gerir um website online ou uma Intranet dinâmica com toda a simplicidade.


- Site Web

Está disponível um guia que diz respeito à instalação manual do CMS Joomla:[]({legacy}1375)


![](images/img_1874.jpg){.thumbnail}


### Nova instalação do PrestaShop

O PrestaShop é uma aplicação Web open source que permite criar uma loja online com o objetivo de realizar comércio eletrónico.


- Loja online

Está disponível um guia que diz respeito à instalação manual do CMS PrestaShop:[]({legacy}1375)


![](images/img_1862.jpg){.thumbnail}


## Ficheiro .ovhconfig
Pretende modificar a versão do PHP do seu alojamento partilhado? Ou ativar o phpfm?

Está disponível um guia que diz respeito à utilização e configuração do ficheiro .ovhconfig :


- []({legacy}1175)

- []({legacy}1207)



![](images/img_1867.jpg){.thumbnail}


## "Libraries" disponíveis nos alojamentos partilhados
Informações sobre as "librairies" disponíveis:

|"Librairie"|Disponibilidade|
|---|---|
|ffmepg|não ativado|
|GD|ativado|
|imagemagik|ativado|
|zend (opcache)|ativado|
|PDO|ativado|
|Zip - Gzip|ativado|



![](images/img_1867.jpg){.thumbnail}
Atenção: através da utilização do PHP-FPM, e por razões de segurança, as seguintes opções estão desativadas (depreciadas pelo PHP):


- register_globals
- magic_quotes_gpc




## Otimizar as performances do meu website
Deseja diagnosticar a lentidão do seu website? Ou deseja simplemente melhorar as performances do seu website?

Está disponível um guia que diz respeito ao diagnóstico das lentidões do seu site e a otimização dessas performances:[]({legacy}1396)

![](images/img_1865.jpg){.thumbnail}

