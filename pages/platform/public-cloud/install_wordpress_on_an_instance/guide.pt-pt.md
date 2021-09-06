---
title: Instalar o Wordpress numa instância
excerpt: Saiba como utilizar uma instância Public Cloud para WordPress
slug: instalar_o_wordpress_numa_instancia
section: Tutoriais
hidden: true
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 26/07/2021**

## Objetivo

WordPress é um sistema de gestão de conteúdos (CMS) que lhe permite criar o seu site de forma rápida e simples. Não necessita de competências específicas em programação para administrá-lo.

Este tutorial inclui as etapas de base de uma instalação inteiramente manual que implica a configuração de um servidor web. Também pode pré-configurar a sua instância para utilizar o WordPress ao selecionar o nosso template WordPress (em CentOS) aquando da criação da instância.

**Saiba como instalar o WordPress numa instância Public Cloud.**

## Requisitos

- Um [projeto Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
- Um acesso administrador (root) à sua instância através de SSH.

## Instruções

- Para uma instalação totalmente manual, siga as instruções abaixo. (Crie uma instância se necessário; recomendamos que consulte o [guia de criação da instância de Cloud Público](../public-cloud-primeiros-passos/).)
- Para uma instalação utilizando o modelo para WordPress, siga o [guia de criação de instância] e escolha `WordPress`{.action} no passo 3 do processo, "Selecionar uma imagem". <br><br> ![wordpress](images/wp_instance.png){.thumbnail} <br> Com uma instância WordPress criada com sucesso, o software já está instalado mas ainda precisa de configurar a base de dados. Proceda com as [instruções para a configuração MariaDB abaixo](#sqlconf).

### Instalar o servidor Web

Num primeiro tempo, será necessário instalar o servidor Web na sua instância Public Cloud.

Para isso, certifique-se de que a instância está atualizada:

- **Para Debian/Ubuntu**

```bash
admin@instance:~$ sudo apt-get update && sudo apt-get upgrade -y
```

- **Pour Fedora/CentOS**

```bash
[admin@instance]$ sudo yum update & sudo yum upgrade
```

De seguida, pode instalar o servidor Web à sua escolha. Este exemplo utiliza o servidor web Apache com os seguintes elementos:

- PHP
- PHP-MySQL
- Servidor MySQL ou MariaDB

> [!primary]
>
> Uma vez que os pacotes de software são atualizados regularmente, poderá ter de ajustar as instruções seguintes em função das versões mais recentes.
>

- **Para Debian/Ubuntu**

```bash
admin@instance:~$ sudo apt-get install apache2 php php-mysql mysql-server -y
```

- **Pour Fedora/CentOS**

```bash
[admin@instance ~]$ sudo yum install httpd php php-mysqlnd mariadb-server -y
```

Receberá então uma palavra-passe para configurar a conta "root" da base de dados MySQL. Reinicie o servidor Web para se certificar de que este foi registado.

- **Para Debian/Ubuntu**

```bash
admin@instance:~$ sudo systemctl restart apache2
```

- **Pour Fedora/CentOS**

```bash
[admin@instance ~]$ sudo systemctl restart httpd.service
```

### Telecharger WordPress

Aceda ao site [WordPress](https://wordpress.org/download/){.external} para obter o link de download da última versão. De seguida, descarregue o ficheiro:

```bash
admin@instance:~$ wget https://wordpress.org/latest.tar.gz
```

Descomprima o arquivo descarregado:

```bash
admin@instance:~$ tar zxvf latest.tar.gz
```

Elimine a pasta predefinida do servidor Web:

```bash
admin@instance:~$ sudo rm -R /var/www/html/
```

Substitua a pasta do servidor web predefinida pela pasta WordPress:

```bash
admin@instance:~$ sudo mv wordpress /var/www/html
```

Pode então conceder ao servidor Web autorizações de escrita no dossier.

- **Para Debian/Ubuntu**

```bash
admin@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```

- **Pour Fedora/CentOS**

```bash
[admin@instance ~]$ sudo chown -R apache:apache /var/www/html/
```

### Configuração de MySQL <a name="sqlconf"></a>

Ao contrário do MySQL-Server que pode instalar em Debian/Ubuntu, MariaDB não configura a sua palavra-passe root durante a instalação. Por isso, execute o servidor MariaDB e configure a sua palavra-passe com os comandos seguintes.

Iniciar o servidor de base de dados:

```bash
[admin@instance ~]$ sudo systemctl start mariadb.service
```

Reconfigurar a palavra-passe "root":

```bash
[admin@instance ~]$ sudo /usr/bin/mysql_secure_installation
```

```bash
Set root password? [Y/n] Y
New password:
```

Também será convidado a confirmar algumas ações relacionadas com a segurança, como a eliminação do utilizador anónimo por predefinição e a desativação das ligações root.

As instruções seguintes são válidas para MySQL e MariaDB.

Quando tiver a palavra-passe "root", pode aceder ao servidor das bases de dados:

```bash
admin@instance
```

Assim, pode criar um novo utilizador, definir uma palavra-passe e criar uma base de dados dedicada ao WordPress.

Criar um utilizador:

```sql
mysql> CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'password do utilizador';
```

Criar uma base de dados:

```sql
mysql> CREATE DATABASE `wordpress`;
```

Conceder todos os direitos ao utilizador "wordpress" com base em dados "wordpress" :

```sql
mysql> GRANT ALL PRIVILEGES ON `wordpress` . * TO 'wordpress'@'localhost';
```

Fechar a CLI da base de dados:

```sql
mysql> exit;
```

### Configurar o WordPress

Depois de configurar a base de dados, pode lançar um browser e ligar-se ao site WordPress introduzindo o endereço IP da sua instância (ou o nome de domínio se [já tiver associado um à instância](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/)).

O assistente de configuração WordPress permite-lhe configurar os acessos à sua base de dados. Introduza os detalhes que definiu nas etapas anteriores.

![wordpress](images/wp_install1.png){.thumbnail}

A segunda etapa consiste em configurar as informações gerais do seu website, bem como o utilizador administrador WordPress.

![wordpress](images/wp_install2.png){.thumbnail}

Uma vez validado, poderá aceder ao espaço de administração do seu site com o utilizador que acabou de criar.

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.