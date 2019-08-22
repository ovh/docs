---
title: Instalar o Wordpress numa instância
excerpt: Instalar o Wordpress numa instância
slug: instalar_o_wordpress_numa_instancia
legacy_guide_number: g2060
---


## 
O Wordpress é um sistema de gestão de conteúdos (CMS) que lhe permite criar o seu website de forma rápida e simples.
O Wordpress não requer competência particulares em programação para o administrar.

Contrariamente às VPS OVH, não existem templates Wordpress previstos para a instalação da sua instância Public Cloud, mas poderá instalar você mesmo o Wordpress numa instância.

Este guia mostra-lhe as diferentes etapas a seguir de forma a poder instalar o Wordpress numa instância Public Cloud.


## Pré-requisitos

- [Criar uma instância no Espaço Cliente OVH]({legacy}1775)




## Instalação do servidor Web
Num primeiro tempo será necessário instalar o servidor Web na sua instância Public Cloud.

Para tal, é necessário verificar se a instância está atualizada:


- Em Debian / Ubuntu


```
admin@instance:~$ sudo apt-get update && sudo apt-get upgrade -y
```


- Em Fedora / CentOS


```
[admin@instance ~]$ sudo yum update && sudo yum upgrade
```



De seguida, vamos instalar então o servidor Web.
Vamos utilizar o Apache com os seguintes elementos:

- Php5
- Php5-mysql
- Serveur Mysql

- Em Debian / Ubuntu


```
admin@instance:~$ sudo apt-get install apache2 php5 php5-mysql mysql-server -y
```


- Em Fedora / CentOS


```
[admin@instance ~]$ sudo yum install httpd php php-mysql mariadb-server -y
```



Ser-lhe-á solicitado uma password para configurar a conta "root" da base de dados.

Vamos de seguida reiniciar o servidor Web para que ela seja tomada em conta.


- Em Debian / Ubuntu


```
admin@instance:~$ sudo service apache2 restart
```


- Em Fedora / CentOS


```
admin@instance:~$ sudo service httpd restart
```





## Download do Wordpress
Aceda ao website [Wordpress](https://fr.wordpress.org/txt-download/) para poder efetuar o download da versão mais recente:


```
admin@instance:~$ wget https://fr.wordpress.org/wordpress-4.4-fr_FR.tar.gz
```


Vamos de seguida descomprimir o arquivo que acabámos de descarregar:


```
admin@instance:~$ tar zxvf wordpress-4.4-fr_FR.tar.gz
```



- Eliminação da pasta padrão do servidor Web


```
admin@instance:~$ sudo rm -R /var/www/html/
```


- Migração da pasta Wordpress para a pasta padrão do servidor Web


```
admin@instance:~$ sudo mv wordpress /var/www/html
```



Após a substituição efetuada, podemos dar ao servidor Web o direito de escrita nessa mesma pasta.


- Em Debian / Ubuntu


```
admin@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```


- Em Fedora / CentOS


```
[admin@serveur-7 ~]$ sudo chown -R apache:apache /var/www/html/
```





## Configuração do MySQL
Contrariamente ao MySQL-Server que pode instalar em Debian / Ubuntu, MariaDB não configura a sua password root aquando da instalação.
É então necessário iniciar o servidor MariaDB e depois deverá configuirar a password com os seguintes comandos:


- Iniciar o servidor de base de dados:


```
[admin@instance ~]$ sudo /sbin/service mariadb start
```


- Reconfiguração da password "root" :


```
[admin@instance ~]$ sudo /usr/bin/mysql_secure_installation
```



Após ter em posse a sua password "root" poderá ligar-se ao sue servidor de base de dados:


```
admin@instance:~$ sudo mysql -u root -p
```


É então possível que efetue um novo utilizador e uma base de dados dedicado a WordPress :


- Criação do utilizador


```
mysql> CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'P@ssw0rd';
```


- Criação da base de dados


```
mysql> CREATE DATABASE `wordpress` ;
```


- Vamos de seguida dar todos os direitos ao utilizador "wordpress" na base de dados "wordpress"


```
mysql> GRANT ALL PRIVILEGES ON `wordpress` . * TO 'wordpress'@'localhost';
```





## Configuração do Wordpress
Após a base de dados estar configurada, poderá iniciar um browser e ligar-se ao seu webstie Wordpress ao colocar o endereço IP da sua instância no seu browser.

A página Wordpress aparecerá, e terá, num primeiro tempo, de configurar o acesso à sua base de dados.

![](images/img_3674.jpg){.thumbnail}
Após o término desta operação, basta que configure as informações gerais do seu website, bem como os acessos do seu utilizador administrador.

![](images/img_3675.jpg){.thumbnail}
Após terminar este processo, poderá ligar-se de seguida ao painel de administração do seu website com os dados que acaba de criar.


## 

- [Efetuar backup a uma instância]({legacy}1881)
- [Configurar o Owncloud com o Object Storage]({legacy}2000)




## 
[Voltar à página inicial dos guias Cloud]({legacy}1785)

