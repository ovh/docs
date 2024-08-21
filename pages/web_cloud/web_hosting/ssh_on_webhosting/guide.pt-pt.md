---
title: "Utilizar o acesso SSH do seu alojamento web"
excerpt: "Saiba como se conectar e utilizar o acesso SSH do seu alojamento web OVHcloud"
updated: 2024-01-30
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Os planos de alojamento web da OVHcloud dão-lhe acesso a um espaço de armazenamento que permite publicar ficheiros nos seus sites ou aplicações. O acesso a este espaço é possível através de um utilizador FTP ou SSH e das respetivas palavras-passe.

**Saiba como se conectar e utilizar o acesso SSH do seu alojamento web OVHcloud.**

## Requisitos

- Ter um [plano de alojamento web OVHcloud](/links/web/hosting){.external} com acesso SSH.
- Estar na posse das informações necessárias à conexão em SSH ao espaço de armazenamento.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager){.external}, secção `Web Cloud`{.action}.

> [!warning]
> 
> O acesso SSH a um alojamento web da OVHcloud é possível a partir de [oferta Pro](/links/web/hosting-compare).

## Instruções

### 1.ª etapa: Assegurar que o acesso SSH se encontra ativo <a name="sshcheck"></a>

Aceda à [Área de Cliente OVHcloud](/links/manager){.external}, secção «Web», e clique em `Alojamentos`{.action}. De seguida, selecione o nome do alojamento correspondente e aceda ao separador `FTP - SSH`{.action}. Aparecerá a informação relativa ao seu espaço de armazenamento 

Na coluna «SSH» da tabela, verifique se o utilizador SSH (ou «Login») em causa dispõe de um acesso SSH ativo. Se não for o caso, surgirá a menção «Desativado».

![usessh](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-ssh.png){.thumbnail}

Se o acesso SSH não estiver ativo, clique no botão `...`{.action} à direita do utilizador em questão e, a seguir, em `Modificar`{.action}. Na janela que se abrir, ative o acesso SSH e conclua a modificação. Se não conseguir proceder à ativação, certifique-se de que o seu serviço de [alojamento web OVHcloud](/links/web/hosting){.external} beneficia de um acesso SSH.

### 2.ª etapa: Obter as informações de acesso <a name="sshlogin"></a>

Para se ligar em SSH ao seu espaço de armazenamento, encontre os elementos necessários a partir do separador `FTP - SSH`{.action}:

- **Utilizador SSH ativo**: Consulte-o na coluna "**Login**" da tabela. Nota: este utilizador deve dispor de um acesso SSH ativo.
- **Password do utilizador SSH**: Se esqueceu esta palavra-passe, pode alterá-la clicando no botão `...`{.action} e, a seguir, em `Alterar a palavra-passe`{.action}.
- **Endereço do servidor SSH**: Consulte a menção "**Servidor SSH**".
- **Porta de ligação ao servidor SSH**: Consulte a menção "**Porta SSH**"

### 3.ª etapa: Conectar-se em SSH ao espaço de armazenamento

Para estabelecer uma conexão em SSH, utilize um terminal para interagir diretamente com o espaço de armazenamento através de linhas de comando. 

> [!primary]
>
> Em macOS, Linux e Windows 10, esta ferramenta encontra-se instalada por predefinição. Um ambiente Windows mais antigo irá requerer a instalação de um software como o PuTTY ou a adição da funcionalidade OpenSSH.

Assim, há duas possibilidades de conexão, em função do método utilizado:

#### 3.1\. A partir de um terminal

> [!warning]
> Os nossos serviços de alojamento partilhado não oferecem um acesso «superutilizador» (ou «root») via SSH.

Uma vez aberto o terminal, utilize o seguinte comando: substitua os elementos "yourlogin", "ssh.cluster00.hosting.ovh.net" e "22" pelos que correspondem aos seus identificadores SSH. 

```bash
ssh yourlogin@ssh.cluster000.hosting.ovh.net -p 22
```

Depois de enviado o comando, deverá introduzir a palavra-passe do utilizador SSH. Quando estiver conectado, prossiga para a etapa seguinte: [Interagir com o espaço de armazenamento em SSH](./#4a-etapa-interagir-com-o-espaco-de-armazenamento-em-ssh).

![usessh](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-login.png){.thumbnail}

#### 3.2\. A partir de um programa

Depois de aberto o programa (o PuTTY, por exemplo), introduza as informações de conexão SSH. Como esta manipulação é inerente ao programa, não podemos descrever todos os casos neste guia. A seguir, apresentamos a informação que lhe será solicitada:

- **Servidor SSH**: Indique o endereço do servidor SSH identificado na [2.ª etapa](#sshlogin). Em função do tipo de software, a denominação pode ser: «Endereço do servidor», «Host» ou «Host Name».
- **Porta de ligação**: Indique a porta de conexão identificada na [2.ª etapa](#sshlogin).
- **Login SSH**: Indique o utilizador SSH. Em função do tipo de software, a denominação pode ser: «nome de utilizador», «ID de utilizador», «Login» ou «Username».
- **Password do utilizador SSH**: Trata-se da palavra-passe associada ao login SSH. Em função do tipo de software, pode igualmente denominar-se «Password».

Quando estiver conectado, prossiga para a etapa seguinte.

### 4.ª etapa: Interagir com o espaço de armazenamento em SSH

Deverá utilizar comandos de modo a interagir com o espaço de armazenamento. Cada um destes comandos tem um significado específico associado ao inglês. Se necessário, recorra à lista abaixo. Atenção: **esta lista não é exaustiva**.

|Comando|Significado em inglês|Descrição| 
|---|---|---|
|pwd|Print working directory|Exibe o repertório de trabalho atual.| 
|cd `arg`|Change directory|Permite mudar para o repertório de trabalho indicado no lugar de `arg`.|
|cd `..`|Change directory|Permite mudar de repertório de trabalho, subindo um nível na árvore de repertórios.|
|cd|Change directory|Sem especificar um argumento, permite que se reposicione na raiz do espaço de armazenamento (home).|
|ls|List|Lista o conteúdo do repertório de trabalho. Adicione atributos para modificar a exibição do resultado do comando (como `ls -ulhG`).| 
|chmod `droit` `arg`|Change mode|Altera os direitos do ficheiro ou do repertório mencionado como argumento `arg`.| 
|mkdir `arg`|Make directory|Permite criar um repertório com o nome do argumento `arg`.| 
|touch `arg`|Touch|Cria um ficheiro vazio, se já não existir, com o nome mencionado como argumento `arg`.|
|rm `arg`|Remove|Elimina o ficheiro mencionado como argumento `arg`.| 
|rm -r `arg`|Remove|Elimina o repertório mencionado como argumento `arg`, bem como todo o seu conteúdo, de forma recursiva.| 
|mv `arg1` `arg2`|Move|Renomeia ou desloca um elemento (especificado como `arg1`) para uma nova localização (especificada como `arg2`).| 

Através de um comando, pode igualmente lançar um script utilizando uma versão específica de PHP. Por exemplo, para a versão PHP 7.1, utilize o comando seguinte. Adapte os elementos ao seu caso pessoal.

```sh
/usr/local/php7.1/bin/php myscript.php
```

Em função da versão de PHP que deseja usar, é possível que o ambiente de execução tenha de ser modificado por uma questão de compatibilidade. Para isso, recorra ao guia "[Alojamento web : ambiente, versão PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)".

> [!primary]
>
> Também é possível copiar ficheiros e/ou pastas com o **S**ecure **C**opy **P**rotocol (**SCP**).
> Este protocolo utiliza o protocolo SSH para duplicar conteúdo de forma segura entre:
> 
> - um computador/dispositivo local para um servidor remoto
> - um servidor remoto e um PC/dispositivo local
> - dois servidores remotos
>
> Encontre mais informações sobre a utilização do comando `scp` com os nossos alojamentos web OVHcloud no nosso guia "[Alojamento Web - Copiar ficheiros com o comando SCP](/pages/web_cloud/web_hosting/using-scp-command)"
>

## Quer saber mais?

[Alojamento web : ambiente, versão PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 