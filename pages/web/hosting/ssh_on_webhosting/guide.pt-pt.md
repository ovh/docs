---
title: 'Utilizar o acesso SSH do seu alojamento web'
slug: partilhado_o_ssh_nos_alojamentos_partilhados
excerpt: 'Saiba como se conectar e utilizar o acesso SSH do seu alojamento web OVHcloud'
section: 'FTP e SSH'
---

**Última atualização: 01/09/2020**

## Objetivo

Os planos de alojamento web da OVH dão-lhe acesso a um espaço de armazenamento que permite publicar ficheiros nos seus sites ou aplicações. O acesso a este espaço é possível através de um utilizador FTP ou SSH e das respetivas palavras-passe.

**Saiba como se conectar e utilizar o acesso SSH do seu alojamento web OVHcloud.**

## Requisitos

- Ter um [plano de alojamento web OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external} com acesso SSH.
- Estar na posse das informações necessárias à conexão em SSH ao espaço de armazenamento.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, secção `Web Cloud`{.action}.

## Instruções

### 1.ª etapa: Assegurar que o acesso SSH se encontra ativo

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, secção «Web», e clique em `Alojamentos`{.action} na barra de serviços à esquerda. De seguida, selecione o nome do alojamento correspondente e aceda ao separador `FTP - SSH`{.action}. Aparecerá a informação relativa ao seu espaço de armazenamento 

Na coluna «SSH» da tabela, verifique se o utilizador SSH (ou «Login SSH») em causa dispõe de um acesso SSH ativo. Se não for o caso, surgirá a menção «Desativado».

![usessh](images/use-ssh-step1.png){.thumbnail}

Se o acesso SSH não estiver ativo, clique no botão `...`{.action} à direita do utilizador em questão e, a seguir, em `Modificar`{.action}. Na janela que se abrir, ative o acesso SSH e conclua a modificação. Se não conseguir proceder à ativação, certifique-se de que o seu serviço de [alojamento web OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external} beneficia de um acesso SSH.

### 2.ª etapa: Obter as informações de acesso

Para se ligar ao seu espaço de armazenamento, deve dispor dos elementos apresentados a seguir. Pode encontrá-los no separador `FTP - SSH`{.action}.

|Elemento|Onde encontrá-lo?|
|---|---|
|Utilizador SSH ativo|Encontre-o na coluna «Login SSH» da tabela. Nota: este utilizador deve dispor de um acesso SSH ativo.|
|Palavra-passe do utilizador SSH|Se esqueceu esta palavra-passe, pode alterá-la clicando no botão `...`{.action} e, a seguir, em `Alterar a palavra-passe`{.action}.|
|Endereço do servidor SSH|Procure a menção «Acesso SSH ao cluster». No elemento que surgir, o endereço do servidor SSH começa depois de «ssh://» e termina antes dos dois pontos.|
|Porta de conexão ao servidor SSH|Procure a menção «Acesso SSH ao cluster». No elemento que surgir, o número da porta é mencionado depois dos dois pontos.|

Aqui fica um exemplo do que poderia encontrar: `ssh://ssh.cluster023.hosting.ovh.net:22/`. Neste caso, «ssh.cluster023.hosting.ovh.net» é o endereço do servidor SSH e «22» é a porta de conexão SSH.

![usessh](images/use-ssh-step2.png){.thumbnail}

### 3.ª etapa: Conectar-se em SSH ao espaço de armazenamento

Para estabelecer uma conexão em SSH, utilize um terminal para interagir diretamente com o espaço de armazenamento através de linhas de comando. 

Em macOS, Linux e Windows 10, esta ferramenta encontra-se instalada por predefinição. Um ambiente Windows mais antigo irá requerer a instalação de um software como o PuTTY ou a adição da funcionalidade OpenSSH. Uma vez que esta operação depende do sistema operativo que utiliza, não podemos especificar todos os casos neste guia.

Assim, há duas possibilidades de conexão, em função do método utilizado:

#### 3.1\. A partir de um terminal

> [!warning]
> Os nossos serviços de alojamento partilhado não oferecem um acesso «superutilizador» (ou «root») via SSH.

Uma vez aberto o terminal, utilize o comando seguinte substituindo os elementos «sshlogin», «sshserver» e «connectionport» pelos seus identificadores SSH. 

```ssh
ssh sshlogin@sshserver -p connectionport
```

Depois de enviado o comando, deverá introduzir a palavra-passe do utilizador SSH. Quando estiver conectado, prossiga para a etapa seguinte: [Interagir com o espaço de armazenamento em SSH](./#4a-etapa-interagir-com-o-espaco-de-armazenamento-em-ssh_1).

![usessh](images/use-ssh-step3.png){.thumbnail}

#### 3.2\. A partir de um programa

Depois de aberto o programa (o PuTTY, por exemplo), introduza as informações de conexão SSH. Como esta manipulação é inerente ao programa, não podemos descrever todos os casos neste guia. A seguir, apresentamos a informação que lhe será solicitada:

|Informação solicitada|Detalhes|
|---|---|
|Servidor SSH|Indique o endereço do servidor SSH identificado na [2.ª etapa](./#2a-etapa-obter-as-informacoes-de-acesso). Em função do tipo de software, a denominação pode ser: «Endereço do servidor», «Host» ou «Host Name».|
|Porta de conexão|Indique a porta de conexão identificada na [2.ª etapa](./#2a-etapa-obter-as-informacoes-de-acesso).|
|Login SSH|Indique o utilizador SSH. Em função do tipo de software, a denominação pode ser: «nome de utilizador», «ID de utilizador», «Login» ou «Username».|
|Palavra-passe do utilizador SSH|Trata-se da palavra-passe associada ao login SSH.<br><br> Em função do tipo de software, pode igualmente denominar-se «Password».|

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

Em função da versão de PHP que deseja usar, é possível que o ambiente de execução tenha de ser modificado por uma questão de compatibilidade. Para isso, recorra [ao guia](../modificar_o_ambiente_de_execucao_do_meu_alojamento_web/) «Alterar a configuração do alojamento web».

## Quer saber mais?

[Alterar a configuração do alojamento web](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/)

[Configurar o ficheiro .ovhconfig do alojamento web](https://docs.ovh.com/pt/hosting/configurar-ficheiro-ovhconfig/)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
