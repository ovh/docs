---
title: Instalar o WordPress numa instância
excerpt: Saiba como utilizar uma instância Public Cloud para alojar websites WordPress
slug: instalar_o_wordpress_numa_instancia
section: Tutoriais
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 15/10/2021**

## Objetivo

O WordPress é um sistema de gestão de conteúdos (CMS) que lhe permite criar e administrar websites para múltiplos fins, sem ter necessidade de conhecimentos específicos de programação.

Este tutorial fornece as etapas de base para uma instalação manual do WordPress numa instância Public Cloud: instalar um servidor web, configurar a base de dados, descarregar e lançar o WordPress.

**Saiba como instalar o WordPress numa instância Public Cloud.**

> [!warning]
>
> A utilização e a gestão dos serviços OVHcloud são da responsabilidade do cliente. A OVHcloud não tem permissões de acesso à parte lógica dos sistemas. O cliente é o único responsável pela gestão e pela segurança destes serviços.
>
> Este guia explica como implementar algumas medidas para tornar o seu sistema mais seguro. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção deste guia intitulada: «Quer saber mais?»
>

## Requisitos

- Um [projeto Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud.
- Ter uma [instância Public Cloud](../public-cloud-primeiros-passos/) com Debian ou Ubuntu instalado.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Um acesso administrador (root) à sua instância através de SSH.

## Instruções

> [!primary]
>
> As seguintes instruções são verificadas para Debian 11. O Ubuntu é baseado em Debian e o tutorial também deve funcionar para uma distribuição Ubuntu atual.
>

Para aceder à sua instalação através de um nome de domínio, deve ligá-la à sua instância. Para isso, deve editar a zona DNS acessível a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), desde que a OVHcloud seja o seu agente de registo **e** que o nome de domínio utilize os servidores DNS da OVHcloud.

Para mais informações, consulte o guia [Editar a sua zona DNS](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/). Se o domínio estiver a ser utilizado atualmente, só pode configurar os DNS após a instalação do novo WordPress e o arranque do seu website.

### Etapa 1: instalação do servidor web (LAMP)

Para poder servir páginas web dinâmicas com WordPress, será instalada uma chamada "*LAMP stack*". LAMP designa **Linux**, **Apache**, **MariaDB** e **PHP**.

Depois de aceder à instância via SSH, certifique-se de que todos os pacotes estão atualizados:

```bash
debian@instance:~$ sudo apt update && sudo apt-get upgrade -y
```

> [!primary]
>
> Uma vez que os pacotes de software são atualizados regularmente, poderá ter de ajustar as instruções seguintes em função das versões mais recentes.
>

Instale os pacotes LAMP:

```bash
debian@instance:~$ sudo apt install apache2 mariadb-server php libapache2-mod-php php-mysql
```

### Etapa 2: configuração do servidor de base de dados <a name="sqlconf"></a>

MariaDB fornece um script para o ajudar na configuração inicial e para aplicar certos parâmetros relacionados com a segurança.

Para o executar, insira o seguinte comando:

```bash
debian@instance:~$ sudo mysql_secure_installation
```

Confirme a primeira chamada apoiando-se na `Enter`{.action}.

De seguida, selecione um método para proteger os acessos ao seu servidor de bases de dados.

```console
Switch to unix_socket authentication [Y/n]
```

Recomenda-se a utilização do método de autenticação proposto em vez do acesso por palavra-passe root. Carregue `y`{.action} e depois em `Enter`{.action}. (Se optar por utilizar o acesso root ao utilizador, introduza `n`{.action} e defina uma palavra-passe root.)

Introduza `n`{.action} convite:

```console
Change the root password? [Y/n]
```

Os convites seguintes relativos às medidas de segurança, confirme-as com `y`{.action} até ao fim do script.

Se configurou o acesso MariaDB da forma recomendada (*unix_socket*), dispõe agora de um acesso root automático a este, cada vez que está ligado à instância enquanto utilizador com taxas elevadas.

Abra o shell MariaDB:

```bash
debian@instance:~$ sudo mariadb
```
```mysql
MariaDB [(none)]> 
```

Crie a base de dados para o WordPress:

```mysql
MariaDB [(none)]> CREATE DATABASE wordpress;
```

De seguida, conceda ao novo utilizador "wordpress" todos os direitos nesta base de dados. Este utilizador vai aceder à base de dados e efetuar todas as operações para o CMS WordPress. Substitua `your_password` por uma palavra-passe forte para este utilizador.

```mysql
MariaDB [(none)]> GRANT ALL ON wordpress.* TO 'wordpress'@'localhost' IDENTIFIED BY 'your_password' WITH GRANT OPTION;
```

> [!primary]
>
> Necessitará destes dados de acesso mais tarde durante a instalação do WordPress.
>

A base de dados está agora pronta para ser utilizada com o WordPress. Certifique-se de que as alterações são aplicadas nos próximos passos e saia do shell MariaDB:

```mysql
MariaDB [(none)]> FLUSH PRIVILEGES;
```
```mysql
MariaDB [(none)]> exit;
```

### Etapa 3: configurar a firewall

A configuração de uma firewall (*iptables*) permite melhorar a segurança da sua instância WordPress. Este processo pode ser simplificado utilizando o Frontend "Uncomplated Firewall" (UFW) e o seu conjunto de perfis pré-definidos. Instale o UFW:

```bash
debian@instance:~$ sudo apt install ufw
```

Na lista de aplicações, os perfis em causa devem conter a menção "WWW":

```bash
debian@instance:~$ sudo ufw app list | grep WWW
  WWW
  WWW Cache
  WWW Full
  WWW Secure
```

Ao escolher "WWW Full", serão autorizadas as ligações seguras (porta 443) e os pedidos http não seguros (porta 80) ao servidor web.

Para ver quais as portas que são afetadas por um perfil particular, introduza ```sudo ufw app info "perfil"```.

Com o seguinte comando, serão abertas as portas definidas pelo perfil "WWW Full":

```bash
debian@instance:~$ sudo ufw allow 'WWW Full'
```

Uma vez que todas as portas não explicitamente autorizadas serão bloqueadas após a ativação da firewall, certifique-se de que também são autorizadas as ligações SSH (porta 22):

```bash
debian@instance:~$ sudo ufw allow 'SSH'
```

Finalmente, verifique a configuração e ative as regras de firewall:

```bash
debian@instance:~$ sudo ufw status
```

```bash
debian@instance:~$ sudo ufw enable
```

Pode ir mais longe com a UFW, por exemplo, se deseja restringir os ataques de "*denial of service*" (DOS) ou impedir os pedidos através de certos intervalos de endereços IP. Recorra à documentação oficial da UFW.

### Etapa 4: instalação do WordPress

Aceda ao [website oficial do WordPress](https://wordpress.org/download/) para obter **o URL de download** da última versão (no formato "tar.gz"). De seguida, descarregue o ficheiro:

```bash
debian@instance:~$ wget https://wordpress.org/latest.tar.gz
```

Descomprima o arquivo descarregado:

```bash
debian@instance:~$ tar zxvf latest.tar.gz
```

O seu servidor Apache deve estar pronto a funcionar nesta fase. Para verificar isto, execute o seguinte comando:

```bash
debian@instance:~$ sudo systemctl status apache2
```

Pode também abrir `http://IP_da_sua_instância` num browser Web. A página "Apache2 Debian Default Page" deve ser apresentada.

As etapas seguintes instalarão o WordPress substituindo a pasta Apache por predefinição para as páginas web.

Em vez de utilizar a pasta predefinida, também pode criar um novo *Virtual Host* para a instalação do WordPress. Este último é útil para alojar vários websites, o que não é relevante para este tutorial.

Elimine a pasta existente:

```bash
debian@instance:~$ sudo rm -R /var/www/html/
```

Substitua a pasta do servidor web predefinida pela pasta WordPress:

```bash
debian@instance:~$ sudo mv wordpress /var/www/html
```

Dê ao servidor Web as permissões de escrita (`write`) na pasta:

```bash
debian@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```

O servidor web está pronto para a configuração inicial do WordPress.

### Etapa 5: configurar WordPress

Abra um navegador Web e ligue-se ao site WordPress introduzindo o endereço IP da sua instância (ou o nome de domínio se já tiver [ligado um à instância](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/)). Escolha uma língua na primeira página.

Utilize o assistente de configuração WordPress para dar acesso à sua base de dados. Insira as informações que [configurou anteriormente](#sqlconf).

![wordpress](images/wp_install1.png){.thumbnail}

O passo seguinte consiste em pré-configurar as informações gerais do seu site e em criar o seu utilizador administrador WordPress.

![wordpress](images/wp_install2.png){.thumbnail}

Uma vez validado, poderá aceder ao espaço de administração do seu site com os dados definidos na etapa anterior.

> [!primary]
>
> Para estabelecer ligações seguras (`https`), o servidor web deve ser protegido por uma Autoridade de Certificação como a [Let’s Encrypt](https://letsencrypt.org/){.external}, que propõe certificados gratuitos. Deverá instalar uma ferramenta cliente (como "Certbot") e configurar Apache. Sem esta etapa, o seu site só poderá aceitar pedidos `http`.
>

### Etapa 6 (facultativo): ativar ligações seguras com o Let’s Encrypt

Em primeiro lugar, verifique se o seu nome de domínio dispõe dos registos certos na zona DNS, ou seja, se aponta para o endereço IP da sua instância.

Instale os pacotes necessários para o cliente Certbot:

```bash
debian@instance:~$ sudo apt install certbot python3-certbot-apache
```

Obtenha o certificado do seu domínio. (Pode incluir o subdomínio "www" adicionando `-d www.yourdomainname.ovh`.)

```bash
debian@instance:~$ sudo certbot --apache -d yourdomainname.ovh
```

Deverá introduzir um endereço de e-mail válido e aceitar as condições de utilização.

Certbot renova automaticamente os certificados. Não é necessária outra etapa. No entanto, pode consultar as opções disponíveis para saber mais sobre as funcionalidades do Certbot.

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.