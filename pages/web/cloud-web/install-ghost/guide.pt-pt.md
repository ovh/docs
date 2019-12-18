---
title: 'Instalar o Ghost num alojamento Cloud Web'
slug: instalar-o-ghost-cloud-web
excerpt: 'Saiba como instalar um blogue com a plataforma Ghost num alojamento Cloud Web'
section: Tutoriais
order: 1
---

## Introdução

[Ghost](https://ghost.org/){.external} é um gestor de conteúdos open source destinado a blogueiros ou jornalistas que simplifica o processo de publicação na Internet. O programa está escrito em JavaScript e utiliza [Node.js](https://nodejs.org/){.external}, uma plataforma que permite criar websites e API em JavaScript do lado do servidor.

O [alojamento Cloud Web da OVHcloud](https://www.ovh.pt/alojamento-partilhado/cloud-web.xml){.external} permite utilizar Node.js como motor de execução para os seus websites e, assim, instalar e alojar o Ghost ou qualquer outra aplicação concebida para Node.js.

Neste tutorial, vamos explicar como instalar um blogue com Ghost num alojamento Cloud Web da OVHcloud e publicá-lo através do seu domínio.

## Requisitos

### O que precisa de saber

- Conhecer as bases do ecossistema Node.js
- Aceder através de SSH.
- Editar um ficheiro em linha de comandos com Vim, Emacs ou Nano, por exemplo.

### O que precisa de ter

- Ter um serviço de [alojamento Cloud Web da OVHcloud]({ovh_www}/alojamento-partilhado/cloud-web.xml){.external}.
- Ter ativado Node.js como motor de execução.
- Ter adicionado o domínio em questão como multisite e ter definido Node.js como o motor de execução.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, na secção `Web`{.action}.

## Instruções

### 1 - Ativar Node.js como motor de execução

Para aceder aos motores de execução do seu alojamento Cloud Web, aceda à [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}. Clique em `Alojamentos`{.action} na barra à esquerda e, em seguida, selecione o alojamento Cloud Web correspondente. Por fim, clique no separador `Motores de execução`{.action}.

A tabela que aparece indica os motores de execução que se encontram adicionados. Certifique-se de que o motor de execução Node.js está ativo. Se tal for o caso, consulte o passo “[2 - Associar o Node.js a um multisite](./#2-associar-o-nodejs-a-um-multisite)”.

![ghostcloudweb](images/ghost-cloud-web-step1.png){.thumbnail}

Caso contrário, adicione um novo (se a sua solução o permitir) ou altere o motor de execução existente.

- **Se pretender adicionar um motor**: clique em `Ações`{.action} na parte superior da tabela e em `Adicionar um tempo de execução para o aplicativo de software`{.action}.
- **Se pretender alterar um motor**: clique no botão `...`{.action} à direita do motor e, a seguir, em `Alterar`{.action}.

No nova janela, insira as informações solicitadas com os valores do nosso exemplo ou adapte-os à sua situação.

|Informação|Valor que deve indicar| 
|---|---| 
|Nome personalizado|NodeJS 8|
|Motor de execução|nodejs-8|
|Caminho para a pasta pública|public|
|Ambiente da aplicação|production|
|Script de lançamento da aplicação|server.js|

Concluída esta etapa, clique no botão `Validar`{.action}. Para mais informações sobre os motores de execução, consulte o nosso manual [Gerir os motores de execução de um alojamento Cloud Web](https://docs.ovh.com/pt/cloud-web/gerir-motores-execucao-alojamento-cloud-web/){.external}.

![ghostcloudweb](images/ghost-cloud-web-step2.png){.thumbnail}

### 2 - Associar o Node.js a um multisite

Agora que o Node.js está ativado como motor de execução, já o pode associar a um multisite. Para isso, clique no separador `Multisite`{.action}. Aparecerá uma tabela com todos os domínios adicionados enquanto multisite. 

![ghostcloudweb](images/ghost-cloud-web-step3.png){.thumbnail}

Deverá prestar especial atenção a duas colunas da tabela abaixo. Verifique que o motor de execução Node.js está associado aos domínios correspondentes e que a pasta raiz é correta. Se precisar de ajuda, explicamos estes valores de forma mais detalhada a seguir. Se tudo estiver correto, consulte o passo “[3 - Criar uma base de dados MySQL](./#3-criar-uma-base-de-dados-mysql)”.

|Coluna|Descrição| 
|---|---| 
|Pasta raiz|Trata-se da pasta raiz que deve conter o código fonte do domínio em questão (corresponde ao “DocumentRoot”). No nosso exemplo, optámos por indicar “ghost”. Esta será a pasta onde deverá colocar o código fonte Node.js.|
|Motor de execução|Este é o motor de execução associado ao domínio em questão. O nome que aparece corresponde ao “Nome personalizado” que definiu durante a criação do motor de execução. No nosso exemplo, é “NodeJS 8”.|

Se este não for o caso, adicione um novo multisite ou altere o existente.

- **Se pretender adicionar um multisite**: clique em `Adicionar um domínio ou subdomínio`{.action} à direita da tabela.
- **Se pretender alterar um multisite**: clique no ícone em forma de roda dentada no final da linha correspondente ao domínio e selecione a opção `Alterar`{.action}.

Na nova janela que aparecerá, preencha as informações necessárias em função da sua situação. A tabela abaixo apresenta os valores utilizados neste tutorial.

|Informação|Valor utilizado como exemplo neste tutorial| 
|---|---| 
|Domínio|ghost.demo-nodejs.ovh|
|Pasta raiz|ghost|
|Motor de execução|NodeJS 8|

No que diz respeito às opções adicionais, selecione as que pretende ativar. Uma vez as informações introduzidas, clique em `Seguinte`{.action} e finalize a operação. Esta operação pode demorar até uma hora. No entanto, a alteração da configuração DNS pode demorar até 24 horas antes de ficar totalmente efetiva. Se pretender obter mais informações sobre a gestão dos multisites, consulte o nosso manual “[Partilhar o alojamento entre vários sites](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/){.external}”.

![ghostcloudweb](images/ghost-cloud-web-step4.png){.thumbnail}

### 3 - Criar uma base de dados MySQL

Clique no separador `Base de dados`{.action} (se não o conseguir ver, clique no botão com três barras). A tabela apresenta as bases de dados já criadas no seu alojamento. Para iniciar a criação de uma nova base de dados, existem duas possibilidades:

- **Se ainda não tiver criado uma base de dados**: clique no botão `Criar uma base de dados`{.action}.

- **Se já tiver criado uma base de dados**: clique no botão `Ações`{.action} acima da tabela e, a seguir, `Criar uma base de dados`{.action}.

![ghostcloudweb](images/ghost-cloud-web-step5.png){.thumbnail}

Na nova janela, selecione “MySQL” e escolha uma versão. Para este tutorial, selecionámos a versão 5.6. A seguir, selecione a opção “Armazenado na sua instância Cloud Web” e, por fim, `Seguinte`{.action}.

Personalize um nome de utilizador e defina uma palavra-passe. Depois clique em `Seguinte`{.action}. Confirme a criação da base de dados clicando em `Validar`{.action}. Aguarde alguns minutos até a operação ser finalizada.

![ghostcloudweb](images/ghost-cloud-web-step6.png){.thumbnail}

### 4 - Criar as variáveis de ambiente

Embora não seja obrigatório criar variáveis de ambiente, recomendamos-lhe vivamente que o faça. 

Neste tutorial, iremos criar variáveis de ambiente para as informações de ligação à nossa base de dados MySQL. Desta forma, se estes dados forem alterados (por exemplo, se alterar a palavra-passe), apenas teremos de alterar o valor da variável a partir da Área de Cliente, sem precisar de editar o código fonte.

Para isso, clique no separador `Variáveis de ambiente`{.action}. A tabela apresenta as variáveis já criadas. Para adicionar uma nova, clique no botão `Ações`{.action} acima da tabela e, depois, em `Adicionar uma variável de ambiente`{.action}.

![ghostcloudweb](images/ghost-cloud-web-step7.png){.thumbnail}

Na nova janela que aparecerá, preencha as informações necessárias em função da sua situação e, depois, clique em `Confirmar`{.action} para criar a variável. Estas são as variáveis que criámos para este tutorial:

|Sobrenome|Tipo de variável|Valor| 
|---|---|---|
|database__connection__user|string|O nome de utilizador MySQL escolhido ao criar a base de dados|
|database__connection__database|string|O nome da base MySQL|
|database__connection__password|password|A palavra-passe MySQL escolhida ao criar a base de dados|
|database__client|string|mysql|
|server__port|integer|80|
|server__host|string|0.0.0.0|

![ghostcloudweb](images/ghost-cloud-web-step8.png){.thumbnail}

### 5 - Ligar-se ao alojamento Cloud Web por SSH

Primeiro, certifique-se de que tem todas as informações que precisa para se ligar. De seguida, clique no separador `FTP - SSH`{.action}. (se não o conseguir ver, clique no botão com três barras). Aparecerá a informação relativa ao seu espaço de armazenamento. Consulte os seguintes elementos:

|Elementos|Descrição| 
|---|---| 
|Acesso SSH ao cluster|Poderá consultar os seguintes dados: <br>**\- o endereço do servidor**: começa depois de “ssh://” e acaba antes de “:”;<br> **\- a porta de ligação**: o número é referido depois de “:”. <br><br>Por exemplo: em ssh://`sshcloud.cluster024.hosting.ovh.net`:`12345`/, ”sshcloud.cluster024.hosting.ovh.net” será o endereço do servidor e “12345” a porta de ligação.|
|Login SSH principal|Trata-se do nome de utilizador SSH principal criado no seu alojamento.|

Se já não se lembra da palavra-passe SSH, clique no botão `...`{.action} situado no final da linha correspondente e selecione `Alterar a palavra-passe`{.action}.

![ghostcloudweb](images/ghost-cloud-web-step9.png){.thumbnail}

Para se conectar por SSH, é necessário utilizar um terminal. Em macOs e Linux, esta ferramenta é instalada por predefinição. Um ambiente Windows irá requerer a instalação de um software como PuTTY ou a adição da funcionalidade “OpenSSH”. Uma vez que esta operação depende do sistema operativo que utiliza, não podemos detalhar todos os casos neste tutorial.

No entanto, disponibilizamos a seguir um exemplo de comandos que pode utilizar. Substituir os elementos “sshlogin”, “sshserver” e “connectionport” pela sua informação. Uma vez enviado o comando, deverá introduzir a palavra-passe do utilizador SSH.

```sh
ssh sshlogin@sshserver -p connectionport
```

Uma vez conectado, pode verificar se aparecem as variáveis de ambientes [anteriormente criadas](./#4-criar-as-variaveis-de-ambiente). Para o nosso tutorial, temos a seguinte informação:

```sh
demonon@cloudweb-ssh:~ $ env | grep "database_"
database__client=mysql
database__connection__host=demononghost.mysql.db
database__connection__user=demononghost
database__connection__password=ZuperZecure123
database__connection__database=demononghost
```

### 6 - Instalar o Ghost

Comece por aceder à pasta raiz especificada no passo [2](./#2-associar-o-nodejs-a-um-multisite). Neste tutorial, trata-se do diretório “ghost”.

```sh
demonon@cloudweb-ssh:~ $ ls -l
drwxr-xr-x 3 demonon demonon 4 Mar  6 16:53 ghost
drwx---r-x 3 demonon demonon 5 Mar  6 16:48 www
demonon@cloudweb-ssh:~ $ cd ghost/
demonon@cloudweb-ssh:~/ghost $
```

Obtenha a [versão mais recente do Ghost](https://ghost.org/developers/){.external} e descomprima o seu conteúdo.

```sh
demonon@cloudweb-ssh:~/ghost $ ls
public  server.js
demonon@cloudweb-ssh:~/ghost $ curl -s -LO https://github.com/TryGhost/Ghost/releases/download/2.16.4/Ghost-2.16.4.zip
demonon@cloudweb-ssh:~/ghost $ unzip Ghost-2.16.4.zip
Archive:  Ghost-2.16.4.zip
   creating: content/
   creating: content/adapters/
  inflating: content/adapters/README.md 
   creating: content/apps/
  inflating: content/apps/README.md 
  ....
demonon@cloudweb-ssh:~/ghost $ rm Ghost-2.16.4.zip
demonon@cloudweb-ssh:~/ghost $ ls
Gruntfile.js  LICENSE  MigratorConfig.js  PRIVACY.md  README.md  content  core  index.js  package.json  public  server.js  yarn.lock
```

Ghost utiliza [Yarn](https://yarnpkg.com/en/){.external}, uma alternativa ao **npm**, para gerir as dependências Node.js. Instale o Yarn através de **npm** e adicione estes binários ao seu “PATH”:

```sh
demonon@cloudweb-ssh:~/ghost $ npm-node8 install yarn
npm notice created a lockfile as package-lock.json. You should commit this file.
+ yarn@1.13.0
added 1 package and audited 1 package in 2.893s
found 0 vulnerabilities
 
demonon@cloudweb-ssh:~/ghost $ export PATH=$PATH:/usr/local/nodejs8/bin/:~/ghost/node_modules/.bin/
demonon@cloudweb-ssh:~/ghost $ node --version
v8.15.0
demonon@cloudweb-ssh:~/ghost $ yarn --version
1.13.0
```

Pode fazer com que as alterações no seu “PATH” sejam persistentes adicionando a exportação ao ficheiro “~/.profile”:

```sh
demonon@cloudweb-ssh:~ $ echo "export PATH=$PATH:/usr/local/nodejs8/bin/:~/ghost/node_modules/.bin/" >> ~/.profile
```

A seguir, instale as dependências do Ghost utilizando o Yarn:

```sh
demonon@cloudweb-ssh:~/ghost $ yarn install
yarn install v1.13.0
[1/5] Validating package.json...
[2/5] Resolving packages...
[3/5] Fetching packages...
[4/5] Linking dependencies...
[5/5] Building fresh packages...
success Saved lockfile.
Done in 269.89s.
```

Ainda na pasta “~/ghost”, crie um ficheiro `config.production.json` que contém a configuração do Ghost:

```json
{
    "url": "http://ghost.demo-nodejs.ovh",
    "paths": {
        "contentPath": "content/"
    }
}
```

De seguida, faça com que o ficheiro `server.js` (indicado [no passo 1](./#1-ativar-nodejs-como-motor-de-execucao)) aponte para o ficheiro `index.js` do Ghost:

```sh
demonon@cloudweb-ssh:~/ghost $ unlink  server.js
demonon@cloudweb-ssh:~/ghost $ ln -s index.js server.js
```

A instalação e a configuração de Ghost ficam assim concluídas. Só falta reiniciar o *daemon* Node.js para que as alterações sejam aplicadas na pasta “~/ghost”.

### 7 - Reiniciar o *daemon* Node.js

Para reiniciar o *daemon* Node.js, aceda à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. No separador `Multi-site`{.action}, clique na roda dentada no final da linha correspondente ao seu nome de domínio e, a seguir, em `Reiniciar`{.action}.

Depois de realizar esta operação, a aplicação ficará acessível através do nome de domínio escolhido na configuração do seu multisite.

![ghostcloudweb](images/ghost-cloud-web-step10.png){.thumbnail}

### 8 - Utilizar HTTPS

Para uma maior segurança do seu site, pode configurar um reencaminhamento HTTP para HTTPS. Para o fazer, aceda à pasta `ghost` e crie um ficheiro `.htaccess` com o seguinte conteúdo:

```
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Conclusão

Neste tutorial, foi-lhe explicado como instalar uma aplicação Node.js num alojamento Cloud Web. Já pode começar a utilizar o Ghost e publicar os seus primeiros conteúdos!