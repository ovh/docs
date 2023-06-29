---
title: Tutorial - Instalar um servidor web (LAMP) em Debian ou Ubuntu
excerpt: "Saiba como configurar um servidor web LAMP"
updated: 2023-05-10
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo 

A implementação de um servidor web e dos softwares associados permite ao seu servidor cloud alojar páginas web ou aplicações web dinâmicas. A instalação de um *LAMP stack* constitui uma medida comprovada para o conseguir com as aplicações open source. LAMP significa **L**inux (OS), **A**pache (servidor web), **M**ariaDB (sistema de gestão de base de dados) e **P**HP (linguagem de programação). 

**Este tutorial explica como instalar um servidor web LAMP no seu serviço OVHcloud.**

## Requisitos

- Um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/), um [VPS](https://www.ovhcloud.com/pt/vps/) ou uma instância [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud (exceto sistemas Windows)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
- Um acesso administrativo ao seu serviço via SSH


> [!warning]
> Este tutorial explica a utilização de uma ou várias soluções da OVHcloud com ferramentas externas e descreve as operações realizadas num contexto preciso. Talvez tenha de adaptar as instruções à sua situação.
>
> Recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) ou que contacte a [nossa comunidade](https://community.ovh.com/en/) se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação de serviços num servidor.
>

## Instruções

Se uma distribuição Debian ou Ubuntu não estiver já instalada no seu servidor, efetue uma reinstalação a partir da sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). É a melhor forma de ter um sistema limpo para o seu servidor web e as aplicações que se executam.

Siga o guia correspondente para instalar uma distribuição no seu serviço OVHcloud e aceder-lhe através de [SSH](/pages/cloud/dedicated/ssh_introduction):

- [Servidor dedicado](/pages/cloud/dedicated/getting-started-with-dedicated-server)
- [VPS](/pages/cloud/vps/starting_with_a_vps)
- [Instância Public Cloud](/pages/platform/public-cloud/public-cloud-first-steps)


> [!primary]
>
> As seguintes instruções são verificadas para Debian 11. Uma vez que o Ubuntu se baseia em Debian, este tutorial deverá também funcionar numa distribuição Ubuntu atual.


### Etapa 1: atualização do sistema

Depois de aceder ao servidor via SSH, certifique-se de que todos os pacotes estão atualizados:

```bash
sudo apt update && sudo apt upgrade -y
```

Pode agora instalar os pacotes LAMP atuais.

> [!primary]
>
> Uma vez que os pacotes de software são atualizados regularmente, poderá ter de ajustar as seguintes instruções de acordo com as versões mais recentes.

### Etapa 2: instalação do Apache

Instale os pacotes Apache (incluindo a documentação):

```bash
sudo apt install -y apache2 apache2-doc
```

Para verificar a instalação, execute o seguinte comando:

```bash
sudo systemctl status apache2
```

Pode também abrir `http://server_IP` num browser Web. A página "Apache2 Debian Default Page" deve ser apresentada.


### Etapa 3: instalar o servidor de bases de dados e PHP

Instale os pacotes de MariaDB e PHP:

```bash
sudo apt install -y php php-pdo php-mysql php-zip php-gd php-mbstring php-curl php-xml php-pear php-bcmath mariadb-server
```

### Etapa 4: configuração do servidor de base de dados <a name="sqlconf"></a>

MariaDB fornece um script para o ajudar na configuração inicial e para aplicar certos parâmetros relacionados com a segurança.

Para o executar, insira o seguinte comando:

```bash
sudo mysql_secure_installation
```

Confirme a primeira chamada apoiando-se na `Entrada`{.action}.

De seguida, selecione um método para proteger os acessos ao seu servidor de bases de dados. 

```console
Switch to unix_socket authentication [Y/n]
```

Recomenda-se a utilização do método de autenticação proposto (*unix_socket*) em vez do acesso por palavra-passe root. Carregue `y`{.action} e depois em `Enter`{.action}. Se optar por utilizar o acesso root ao utilizador, escolha `n`{.action} e defina uma palavra-passe root ao seguinte convite.

Introduza `n`{.action} convite:

```console
Change the root password? [Y/n]
```

Os convites seguintes relativos às medidas de segurança, confirme-as com `y`{.action} até ao fim do script.

```console
Reloading the privilege tables will ensure that all changmade so far
Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] y
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
```

Se configurou o acesso MariaDB da forma recomendada (*unix_socket*), dispõe agora de um acesso de administrador automático (*root*) ao mesmo sempre que está ligado ao servidor enquanto utilizador com direitos elevados (*sudo*).

> [!primary]
>
> Para preparar uma base de dados para a sua utilização através de um software, pode seguir a secção abaixo. Ao instalar uma aplicação como um CMS (WordPress, Drupal, etc.), deverá fornecer os dados de acesso à base de dados (nome da base de dados, utilizador, palavra-passe). Em termos de boas práticas, evite utilizar a mesma base de dados em diferentes aplicações.
> 
> Para instalar o WordPress num servidor, pode seguir [este tutorial](/pages/platform/public-cloud/install_wordpress_on_an_instance).

#### Criar a primeira base de dados e um utilizador de base de dados (opcional)

Abra o shell MariaDB:

```bash
sudo mariadb
```

```sql
MariaDB [(none)]> 
```

Crie uma base de dados:

```sql
MariaDB [(none)]> CREATE DATABASE database_name;
```

Crie um "utilizador" com o nome da sua escolha e conceda-lhe todos os direitos nesta base de dados. Este último poderá então aceder à base de dados e efetuar todas as operações para a aplicação que utiliza esta base de dados. Substitua `database_name` pelo nome da base de dados, `user_name` pelo nome da sua escolha e `password` por uma palavra-passe forte.

```sql
MariaDB [(none)]> GRANT ALL ON database_name.* TO 'user_name'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;
```

Certifique-se de que as modificações introduzidas são aplicadas e saia a seguir do shell MariaDB:

```sql
MariaDB [(none)]> FLUSH PRIVILEGES;
```

```sql
MariaDB [(none)]> exit;
```

### Etapa 5: configuração da firewall (opcional)

[A configuração de uma firewall](/pages/cloud/dedicated/firewall-Linux-iptable) (*iptables*) permitirá melhorar a segurança do seu servidor. Este processo pode ser simplificado utilizando o Frontend "Uncomplated Firewall" (UFW) e o seu conjunto de perfis pré-definidos. 

Instale o UFW:

```bash
sudo apt install ufw
```

Na lista de aplicações, os perfis em causa devem conter a menção "WWW":

```bash
sudo ufw app list | grep WWW
  WWW
  WWW Cache
  WWW Full
  WWW Secure
```
```

Ao escolher "WWW Full", autoriza as ligações seguras (porta 443) e os pedidos *http* não seguros (porta 80) para o servidor web.

Para ver quais as portas que são afetadas por um perfil particular, introduza `sudo ufw app info "profile name"`.

Ao executar o seguinte comando, as portas definidas pelo perfil "WWW Full" serão abertas:

```bash
sudo ufw allow 'WWW Full'
```

Uma vez que todas as portas não explicitamente autorizadas serão **bloqueadas** após a ativação da firewall, certifique-se de que autoriza igualmente as ligações SSH (porta 22 numa configuração predefinida):

```bash
sudo ufw allow 'SSH'
```

Ative as regras da firewall e verifique a configuração:

```bash
sudo ufw enable
```

```bash
sudo ufw status
```

```console
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip

To                         Action      From
--                         ------      ----
80,443/tcp (WWW Full)      ALLOW IN    Anywhere                  
22/tcp (SSH)               ALLOW IN    Anywhere                  
80,443/tcp (WWW Full (v6)) ALLOW IN    Anywhere (v6)             
22/tcp (SSH (v6))          ALLOW IN    Anywhere (v6)    
```

Pode ir mais longe com a UFW, por exemplo, se deseja restringir os ataques de *denial of service* (DOS) ou impedir os pedidos através de certos intervalos de endereços IP. Recorra à [documentação oficial da UFW](https://help.ubuntu.com/community/UFW).

### Etapa 6: configuração DNS (facultativo)

O acesso à instalação do seu servidor web através de um nome de domínio requer que o associe ao seu serviço. Para isso, deve editar a zona DNS acessível a partir do seu [Espaço Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), na condição de a OVHcloud ser o seu ambiente de registo **e** o nome de domínio utilizar os servidores DNS da OVHcloud.

Para saber mais, consulte o guia "[Editar uma zona DNS](/pages/web/domains/dns_zone_edit)". Se o domínio estiver a ser utilizado atualmente, só poderá configurar os DNS depois de o website ou a aplicação estarem prontos.

### Etapa 7: ativar ligações seguras com Let’s Encrypt (facultativo)

> [!primary]
>
> Para estabelecer ligações seguras (`https`), o servidor web deve ser protegido por uma autoridade de certificação oficial como "[Let’s Encrypt](https://letsencrypt.org/)", que propõe certificados gratuitos. Deverá instalar uma ferramenta cliente (como o Certbot) e configurar o Apache em conformidade. Sem esta etapa, o seu website ou a sua aplicação só podem aceitar pedidos `http` não encriptados.
> 
> Em alternativa, a OVHcloud oferece-lhe a solução [SSL Gateway](https://www.ovh.pt/ssl-gateway/). Para mais informações, consulte o [nosso manual](/pages/web/ssl-gateway/order-ssl-gateway).
> 

Certifique-se de que o seu nome de domínio está corretamente indicado na zona DNS, ou seja, associado ao endereço IP do seu servidor.

> [!warning]
> O comando seguinte instala uma versão do Certbot que funciona mas está obsoleto (*certbot 1.12.0*). Para instalar a última versão, deve utilizar o gestor de pacotes suplementar *snappy*. Encontrará as instruções de instalação no [site Certbot](https://certbot.eff.org/instructions?ws=apache&os=debianbuster).
>

Instale os pacotes necessários para o cliente Certbot:

```bash
sudo apt install -y certbot python3-certbot-apache
```

Obtenha o certificado do seu domínio e do subdomínio "www":

```bash
sudo certbot --apache -d domainname.ovh -d www.domainname.ovh
```

Deverá introduzir um endereço de e-mail válido e aceitar as condições de utilização.

Certbot renova automaticamente os certificados. Não são necessárias outras etapas. No entanto, pode consultar as opções disponíveis para saber mais sobre as funcionalidades do Certbot.

## Quer saber mais?

[Documentação UFW](https://help.ubuntu.com/community/UFW)

[Documentação Apache](https://httpd.apache.org/docs/)

[Documentação MariaDB](https://mariadb.com/kb/en/documentation/)

[Documentação Let's Encrypt](https://httpd.apache.org/docs/)

[Documentação Certbot](https://eff-certbot.readthedocs.io/en/stable/)

[Documentação NGINX](https://nginx.org/en/docs/) (alternativa Apache)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.