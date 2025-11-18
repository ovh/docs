---
title: "Alojamento web - Como utilizar o acesso SSH"
excerpt: "Saiba como conectar-se e utilizar o acesso SSH do seu alojamento web OVHcloud"
updated: 2025-09-08
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Os planos de alojamento web da OVHcloud dão-lhe acesso a um espaço de armazenamento que permite publicar ficheiros nos seus websites ou aplicações. O acesso a este espaço é possível através de identificadores FTP ou SSH.

**Saiba como se conectar e utilizar o acesso SSH do seu alojamento web OVHcloud.**

## Requisitos

- Ter um [plano de alojamento web OVHcloud](/links/web/hosting) com acesso SSH.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager), secção `Web Cloud`{.action}.

> [!warning]
> 
> O acesso SSH a um alojamento web da OVHcloud é possível a partir de [oferta Pro](/links/web/hosting-compare).

## Instruções

Para se ligar e utilizar o acesso SSH do seu alojamento web, precisará dos seguintes elementos:

- o utilizador SSH ativo;
- a palavra-passe associada a este utilizador SSH;
- o endereço do servidor SSH do seu alojamento web;
- a porta de ligação ao servidor SSH do seu alojamento web.

### 1 - Assegure-se de que o acesso SSH está ativo para o utilizador SSH escolhido <a name="user-ssh-enablement"></a>

Clique nas guias abaixo para exibir sucessivamente cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na página que se abrir, clique no separador `FTP - SSH`{.action}.
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na nova página, serão apresentadas as informações relativas ao seu espaço de armazenamento.
>>
>> Na tabela, repare na coluna `SSH` para verificar se o utilizador SSH (presente na coluna `Nome de utilizador` do quadro) em questão dispõe de um acesso SSH ativo. Se não for o caso, será apresentada a menção `Desativado`.
>>
>> ![usessh](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-ssh.png){.thumbnail}
>>
>> Se o acesso SSH do utilizador em questão estiver `Desativado` na tabela, efetue as seguintes operações:
>>
>> - 1: Clique no botão `...`{.action} à direita da linha correspondente ao utilizador, e depois em `Alterar`{.action}.
>> - 2: Na janela que se abrir, na secção `Protocolos de ligação`, selecione a escolha `FTP, SFTP e SSH`{.action} e, em seguida, clique em `Seguinte`{.action}.
>> - 3: Verifique o resumo da modificação solicitada e clique em `Validar`{.action}.
>>
>> > Se não conseguir proceder à ativação, certifique-se de que a [oferta de alojamento web da OVHcloud](/links/web/hosting) beneficia de um acesso SSH.

### 2 - Obtenha as informações necessárias para se ligar em SSH <a name="sshlogin"></a>

Clique nas guias abaixo para exibir sucessivamente cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na página que se abrir, clique no separador `FTP - SSH`{.action}. 
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na nova página, recupere os elementos descritos na tabela seguinte:
>>
>> |Element|Descrição|
>> |---|---| 
>> |**Endereço do servidor SSH**| Registe a menção `Servidor SSH`. Apresenta-se sob a forma `ssh.clusterXXX.hosting.ovh.net` (em que cada um dos 3 `X` corresponde a um número compreendido entre `0` e `9`).|
>> |**Porta de ligação ao servidor SSH**| Registe a menção `Porta SSH`. Por predefinição, o número da porta SSH é o `22`.|
>> |**Utilizador SSH ativo**| No quadro situado no final da página, encontre-o na coluna `Nome de utilizador`.<br>Lembrete: este utilizador deve [dispor de um acesso SSH ativo](#user-ssh-enablement).|
>> |**Palavra-passe do utilizador SSH**| Se se esquecer desta palavra-passe, clique no botão `...`{.action} à direita da linha correspondente ao utilizador em causa na tabela situada no final da página, e depois em `Alterar palavra-passe`{.action}.|

### 3 - Ligue-se ao espaço de armazenamento do seu alojamento web em SSH

Para estabelecer uma ligação em SSH, utilize um terminal para interagir diretamente com o espaço de armazenamento através de linhas de comando.

> [!primary]
>
> Os terminais de comando estão instalados de forma padrão nos sistemas macOS, Linux e Windows 10. Um ambiente Windows mais antigo exigirá a instalação de um software como o [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) ou a adição da funcionalidade OpenSSH.

Existem duas possibilidades de acesso ao alojamento web através de SSH. 

**Clique no método de ligação que pretende utilizar para visualizar uma explicação.**

/// details | A partir de um terminal

> [!warning]
>
> Não existe acesso "super utilizador" (ou "root") via SSH nas nossas ofertas de alojamento partilhado.

Uma vez aberto o terminal, utilize o comando seguinte, substituindo os elementos `yourlogin`, `ssh.clusterXXX.hosting.ovh.net` e `22` pelos elementos que correspondem aos seus dados SSH.

```bash
ssh yourlogin@ssh.clusterXXX.hosting.ovh.net -p 22
```

Após o envio do comando, deverá introduzir a palavra-passe do utilizador SSH.

![usessh](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-login.png){.thumbnail}

///

/// details | A partir do software

Depois de o software (por exemplo, PuTTY) estar aberto, introduza as informações de ligação SSH. Como esta operação é inerente ao programa, não podemos descrever todos os casos neste guia. A seguir, apresentamos a informação que lhe será solicitada:

- **Servidor SSH**: Indique o endereço do servidor SSH indicado na [parte 2](#sshlogin). Em função do programa utilizado, a denominação pode ser semelhante a: "Endereço do servidor", "Nome do host", ou ainda "Host Name".
- **Porta de ligação**: Indique a porta de ligação SSH recuperada na [parte 2](#sshlogin).
- **Login SSH**: Indique o utilizador SSH. Em função do programa utilizado, a denominação pode assemelhar-se "Nome de utilizador", "Identificador", "Login" ou ainda "Username".
- **Palavra-passe do utilizador SSH**: Indique a palavra-passe associada ao login SSH.<br><br> Dependendo do programa que estiver a utilizar, o nome de utilizador poderá também ser semelhante "Password".

///

Quando estiver conectado, prossiga para a parte seguinte.

### 4 - Interaja com o seu espaço de armazenamento em SSH <a name="ssh-using"></a>

Deverá utilizar comandos de modo a interagir com o espaço de armazenamento. Estas têm um significado direto do inglês. Se necessário, recorra à lista abaixo. Atenção: **este não é exaustivo**.

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

Também pode lançar um script utilizando uma versão específica de PHP. Por exemplo, para a versão PHP 7.1, utilize o seguinte comando. Adapte os seus elementos à sua situação pessoal.

```sh
/usr/local/php7.1/bin/php myscript.php
```

Em função da versão de PHP que deseja utilizar, é possível que o ambiente de execução tenha de ser modificado por razões de compatibilidade. Consulte a documentação "[Alojamento web - Ambiente, versão PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)" para obter mais informações.

> [!primary]
>
> Também é possível copiar ficheiros e/ou pastas com o **S**ecure **C**opy **P**rotocol (**SCP**).
> Este protocolo utiliza o protocolo SSH para duplicar conteúdo de forma segura entre:
>
> - um computador/dispositivo local e um servidor remoto
> - dois servidores remotos
>
> Encontre mais informações sobre a utilização do comando `scp` com os nossos alojamentos web OVHcloud no nosso guia "[Alojamento Web - Copiar ficheiros com o comando SCP](/pages/web_cloud/web_hosting/using-scp-command)".

## Quer saber mais?

[Alojamento web - Ambiente, versão PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).