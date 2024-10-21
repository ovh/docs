---
title: Criar e utilizar chaves SSH
excerpt: Descubra como criar um par de chaves SSH na sua estação de trabalho e como as utilizar para estabelecer uma ligação segura ao seu servidor
updated: 2024-06-26
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A utilização do protocolo SSH abre um canal seguro numa rede não segura numa arquitetura cliente-servidor, ligando um cliente SSH a um servidor SSH. A criação de um conjunto de chaves SSH permite-lhe obter uma chave pública e uma chave privada. Pode colocar a chave pública num servidor e ligar-se a ele com um cliente que possui a chave privada correspondente. Se as chaves SSH públicas e privadas corresponderem, a sessão será realizada sem que seja necessária uma palavra-passe.

Trata-se geralmente do método de ligação mais seguro e mais prático.

**Este manual explica como configurar chaves SSH no seu dispositivo local para proteger as ligações a servidores remotos.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/pt/&ovhSubsidiary=pt)
- Ter um [servidor dedicado](/links/bare-metal/bare-metal) ou um [VPS](https://www.ovhcloud.com/pt/vps/) na sua conta OVHcloud
- Instalar previamente uma aplicação cliente SSH (linha de comandos ou GUI)
- Dispor de um acesso administrador (sudo) através de SSH

> [!primary]
> Este manual não se aplica a instalações padrão do Windows** Server porque estas dependem do protocolo Remote Desktop Protocol (RDP) para as ligações. No entanto, as ligações SSH são utilizadas no modo rescue da OVHcloud. Para mais informações, consulte [Quer saber mais?](#gofurther) deste guia.
>

## Instruções

Não se esqueça de consultar os nossos manuais "Primeiros passos": <a name="getstarted"></a>

- para um [servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server) ;
- para um [servidor dedicado da gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco) ;
- para um [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

Consulte também o guia de apresentação do [protocolo SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

<a name="create-ssh-key"></a>

### Criação de um par de chaves SSH

As instruções seguintes abrangem dois métodos de utilização das chaves SSH:

- [A criação de um par de chaves **Open SSH** e a ligação a um servidor a partir do cliente SSH em linha de comandos](#openssh)
- [A criação de um par de chaves `PuTTY` e a ligação a um servidor a partir do cliente SSH `PuTTY`](#useputty)

Pode utilizar os dois métodos simultaneamente, mas tenha em conta que "PuTTY` conserva os ficheiros de chave num formato específico, o que os torna incompatíveis com os ficheiros de chave SSH criados com o cliente **Open SSH**.

Isto significa que uma chave privada criada com o cliente SSH em linha de comandos deverá primeiro ser [convertida no formato `PuTTY` e vice-versa](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt){.external}.

#### Criação de um par de chaves SSH em linha de comandos <a name="openssh"></a>

A partir de um computador **Mac** ou de um periférico com um sistema operativo **Linux**, abra a aplicação de linha de comandos (`Terminal`).

Certifique-se de que tem uma pasta chamada `.ssh` no seu diretório `$HOME`. Se a pasta não existir, crie-a:

```bash
mkdir ~/.ssh
```

Num sistema operativo **Windows** atual, abra a linha de comandos introduzindo "cmd" na barra de pesquisa (ou abra `PowerShell` a partir do menu).

Aceda ao diretório `.ssh` do seu utilizador **Windows** ativo (por predefinição: `C:\Users\WindowsUsername.ssh`):

```powershell
cd .ssh
```

<a name="createnewkey"></a>
De seguida, utilize o seguinte comando para criar uma chave RSA de 4096 bits:

```bash
ssh-keygen -b 4096
```

A utilização da opção `-t` com este comando permite especificar outro método de encriptação, por exemplo:

```bash
ssh-keygen -t ed25519 -a 256
```

A linha de comandos solicita que guarde a chave recém-criada no ficheiro padrão:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Confirme com a tecla "Enter" para aceitar o nome de ficheiro proposto ou insira um nome individual. Isto é relevante se vários pares de chaves forem colocados no diretório `.ssh`. Consulte a secção "[Gestão de Múltiplas Chaves SSH no Dispositivo Local](#multiplekeys)" deste guia.<br>
Este exemplo utiliza os nomes de ficheiros standard `id_rsa` e `id_rsa.pub`.

Pode proteger a sua chave SSH com uma frase secreta (*passphrase*) na operação seguinte. Esta é uma etapa recomendada para uma maior segurança.

> [!warning]
>
> O acesso remoto ao seu servidor deve ser tão seguro como o dispositivo cliente que armazena a chave privada. Assim, a proteção do seu dispositivo e dos seus ficheiros contra acessos não autorizados é crucial durante a utilização de chaves SSH.
> 
> Por razões de conveniência de uso e segurança, lembre-se de usar um gerenciador de palavras-passe no seu dispositivo, como a solução open source `KeePass`.
> 

Todas as chaves SSH devem ser armazenadas no diretório `.ssh`. A extensão `.pub` será adicionada aos nomes dos ficheiros de chaves públicas.

```console
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
| =o.o.  .   .    |
|o +   .  . o ..  |
|.. .  .   oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

<a name="publickey"></a>

Para ver e exportar a sua chave pública, utilize o comando `cat` no seu ficheiro de chaves `.pub`. Copie a cadeia de chaves completa para a área de transferência para[adicionar ao servidor](#addserverkey).

```bash
cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

> [!primary]
>
> Num terminal **MacOS**, pode utilizar os comandos `pbcopy` e `pbpaste` para gerir cadeias de teclas mais rapidamente. Por exemplo, utilize este comando para copiar a chave do ficheiro `id_rsa.pub` para a área de transferência:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

Num sistema operativo **Windows**, abra o ficheiro com a aplicação `Bloco de notas` a partir do `Explorador de ficheiros` (clique com o botão direito do rato no ficheiro e selecione `Abrir com`) ou utilize um dos seguintes comandos (em `\Users\WindowsUsername\.ssh`):

- `cmd`

```powershell
more id_rsa.pub
```

- `powershell`

```powershell
cat id_rsa.pub
```

Copie a cadeia de chaves completa para a área de transferência para [adicionar ao servidor](#addserverkey).

> [!primary]
>
> **Utilização da área de transferência**
>
> Quando estiver a trabalhar em linha de comandos sob **Windows**, clique com o botão direito do rato para **colar** o conteúdo da área de transferência na janela da linha de comandos. Para **copiar** um canal a partir da janela da linha de comandos, realce-o com o rato e prima a tecla ‘Enter`. Pode também consultar estas funções através de um "clique com o botão direito do rato" na barra de menu.
>

#### Criar um par de chaves SSH com PuTTY <a name="useputty"></a>

[PuTTY](https://putty.org/){.external} é um software cliente SSH open source com uma interface gráfica do utilizador, disponível para **Windows** e outros sistemas operativos. Fornece um software complementar para criar chaves SSH: `PuTTY Key Generator` (`PuTTYgen`).

> [!primary]
>
> O objetivo principal do `PuTTY` é gerenciar as conexões SSH de um dispositivo cliente **Windows** para um servidor **GNU/Linux**. `PuTTY` armazena os arquivos de chave em um formato específico, tornando-os incompatíveis com os arquivos de chave SSH criados com o cliente **Open SSH** incluído nativamente na maioria dos sistemas operativos modernos.
>
> Se necessário e como explicado acima neste manual, as chaves geradas em *linha de comandos* podem ser [convertidas no formato `PPK`](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt) de forma a utilizá-las com o cliente `PuTTY`. Para uma utilização mais prática das chaves SSH, escolha uma opção e respeite-a (chaves privadas **Open SSH** ou chaves privadas `PuTTY`).
>

Se já não estiver instalado (consulte a sua lista de aplicações ou utilize a função de pesquisa), transfira o `PuTTY` a partir de [o site oficial](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html){.external}. O pacote de instalação padrão recomendado já contém `PuTTYgen`, mas também está disponível como um arquivo independente no site.

Abra `PuTTYgen` e selecione um dos algoritmos de encriptação suportados. Este exemplo usa RSA. Digite 4096 como número de bits no canto inferior direito e clique no botão `Generate`{.action}.

![PuTTy](/pages/assets/screens/other/web-tools/putty/puttygen_01.png){.thumbnail}

Mova o cursor do rato livremente para a área abaixo da barra de progresso:

![PuTTy](/pages/assets/screens/other/web-tools/putty/puttygen_02.gif){.thumbnail}

A chave está pronta quando a barra de progresso está cheia.

![PuTTy](/pages/assets/screens/other/web-tools/putty/puttygen_03.png){.thumbnail}

Copie a cadeia de chaves completa para a área de transferência para [adicionar ao servidor](#addserverkey). Guarde ambas as chaves como ficheiros clicando nos botões correspondentes e introduza uma frase secreta (*passphrase*) para as proteger.

> [!warning]
>
> O acesso remoto ao seu servidor deve ser tão seguro como o dispositivo cliente que armazena a chave privada. Assim, a proteção do seu dispositivo e dos seus ficheiros contra acessos não autorizados é crucial durante a utilização de chaves SSH.
> 
> Por razões de conveniência de uso e segurança, lembre-se de usar um gerenciador de palavras-passe no seu dispositivo, como a solução open source `KeePass`.
>

Uma das vantagens de usar `PuTTY` é a capacidade de salvar várias conexões como "sessões". Encontre mais informações na secção [Gestão de várias chaves SSH no seu dispositivo local](#puttykeys)".

Para saber mais sobre as ligações SSH, consulte os guias de [primeiros passos](#getstarted) e a nossa introdução ao "[protocolo SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

### Adicionar chaves SSH ao servidor <a name="addserverkey"></a>

#### Transferência de chaves públicas criadas em sistemas baseados em GNU/Linux, MacOS ou BSD

Se criou os seus pares de chaves SSH num sistema baseado em GNU/Linux, MacOS ou BSD, pode utilizar o comando `ssh-copy-id` para adicionar as chaves públicas ao seu servidor.

O utilitário `ssh-copy-id` copia as chaves públicas no ficheiro `~/.ssh/authorized_keys` no servidor remoto especificado e cria automaticamente o ficheiro nesse diretório, se necessário.

```bash
ssh-copy-id user@IP_ADDRESS
```

Por predefinição, o `ssh-copy-id` tentará transferir todas as chaves públicas para o diretório `~/.ssh` do seu utilizador local. No entanto, se precisar de adicionar apenas uma chave pública, pode especificar este ficheiro de chave com a opção `-i` seguida do caminho do ficheiro:

```bash
ssh-copy-id -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Por exemplo:

```bash
ssh-copy-id -i ~/.ssh/VPS_rsa.pub ubuntu@203.0.113.100
```

A palavra-passe do utilizador será solicitada. receberá uma mensagem conforme indicado abaixo.

```console
Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'user@server-ip'"
and check to make sure that only the key(s) you wanted were added.
```

Se aparecer uma mensagem de erro, pode adicionar manualmente as suas chaves públicas seguindo os passos indicados abaixo.

> [!primary]
>
> Como boa prática e por razões de segurança, um único par de chaves não deve ser utilizado por vários utilizadores. Como cada utilizador dos sistemas GNU/Linux possui o seu próprio ficheiro `authorized_keys` em `~/.ssh/`, pode utilizar o comando `ssh-copy-id` como se mostra acima e adaptar `KeyFileName` e `user` depois de ter [criado o par de chaves](#openssh).
>

#### Adição manual de chaves públicas a um servidor

[Ligue-se](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) ao seu servidor e certifique-se de que está no diretório `$HOME` do seu utilizador. Se já não existir, crie a pasta `.ssh`:

```bash
mkdir ~/.ssh
```

Para armazenar a chave para o utilizador atual, abra (ou crie) o ficheiro `authorized_keys` com o seu editor de texto preferido (`nano` é utilizado neste exemplo):

```bash
nano ~/.ssh/authorized_keys
```

Cole a [**chave pública**](#publickey) neste ficheiro. Guarde o ficheiro e saia do editor. Reinicie o seu servidor (`sudo reboot`) ou reinicie apenas o serviço OpenSSH com um dos seguintes comandos (o comando apropriado pode variar em função do seu sistema operativo):

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Para verificar que a chave foi corretamente configurada, ligue-se ao seu servidor com o comando seguinte. Substitua "utilizador" pelo nome de utilizador para o qual foram criadas as chaves e "IP_ADDRESS" pelo endereço IP (ou nome de host) do servidor ao qual pretende aceder:

```bash
ssh user@IP_ADDRESS
```

Por exemplo:
    
```bash
ssh ubuntu@203.0.113.100
```

#### Adicionar chaves públicas suplementares ao seu servidor

Para adicionar chaves SSH para outros utilizadores que acedam ao seu servidor, repita as etapas de criação de chaves mas utilize a pasta `$HOME` adequada ou o diretório de **Windows** `Users` do utilizador em questão para criar e armazenar as chaves SSH (ou executar os comandos no periférico dedicado desta pessoa). A seguir, adicione a nova chave pública ao servidor em `authorized_keys`, como descrito acima.

#### Eliminação das chaves públicas do seu servidor

Abra o ficheiro `authorized_keys` (tal como [descrito acima](#addserverkey)) e elimine a cadeia de chaves correspondente ao utilizador cujo acesso deve ser revogado.

Guarde o ficheiro e saia do editor.

### Gestão de várias chaves SSH no seu equipamento local <a name="multiplekeys"></a>

Pode utilizar vários pares de chaves SSH para estabelecer ligação a diferentes hosts remotos. Se utilizar `PuTTY`, passe para [a secção correspondente](#puttykeys) abaixo.

Uma vez que todas as chaves devem ser colocadas na pasta `.ssh` no seu dispositivo local, os nomes dos ficheiros devem ser diferentes. Quando você [criar um novo par de chaves](#createnewkey) e um nome de arquivo for solicitado, insira um nome desejado. Faça-o corresponder ao seu nome de servidor, por exemplo.

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

Quando se conectar ao servidor correspondente, especifique o nome do arquivo de chave, além dos detalhes do usuário e do servidor:

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Por exemplo:

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Como indicado nas secções anteriores, as mesmas instruções funcionarão num cliente **Windows*. Substitua apenas `~/` pelo caminho da sua pasta de utilizador **Windows**, por predefinição `C:\Users\WindowsUsername\`. Por exemplo: `ssh -i C:\Users\Username\.ssh/myVPS_rsa ubuntu@203.0.113.100`.

#### Utilização do ficheiro "config"

A alternativa para adicionar a opção `-i` em cada vez consiste em modificar um ficheiro chamado `config` na pasta `~/.ssh` (`\Users\Username\.ssh` para **Windows**). Permite configurar os detalhes das diferentes ligações (nome de utilizador, porta, ficheiro de chave, parâmetros opcionais, etc.)

Se este ficheiro existir no `.ssh`, provavelmente já contém informações. Em função do seu ambiente de trabalho, considere criar uma cópia de segurança do original.

Exemplo de conteúdo da pasta `.ssh`:

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

O ficheiro de `config` permite armazenar várias ligações SSH bem como os seus parâmetros individuais para além dos valores standard. A exploração de todo o potencial deste ficheiro pode tornar-se complexo, pois é particularmente útil para os utilizadores experientes que gerem vários servidores de forma regular.

Eis um exemplo simples para lhe explicar como configurar uma ligação SSH a um VPS.<br>
Abra o arquivo e adicione as seguintes linhas na parte superior:

```console
Host vps
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myVPS_rsa
```

De seguida, poderá ligar-se ao VPS com o nome de alias que definiu como `Host`:

```bash
ssh ubuntu@vps
```

Apenas o IP do servidor e o ficheiro de chave foram especificados no exemplo anterior, mas podem ser adicionados mais detalhes. Para configurar uma ligação SSH para um segundo servidor com o nome de utilizador "rocky", a [porta SSH modificada](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps#changesshport) "49160" e a chave privada no ficheiro "myserver_rsa", expanda o conteúdo do ficheiro como indicado neste exemplo:

```console
Host vps
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myVPS_rsa

Host dedicated_server
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myserver_rsa
```

De seguida, poderá ligar-se ao servidor ao seguinte endereço:

```bash
ssh dedicated_server
```

Pode consultar [a página "man` correspondente](https://manpages.org/ssh_config/5){.external} para mais informações.

#### Utilização de PuTTY <a name="puttykeys"></a>

Se seguiu as instruções das secções "[Criação de um par de chaves SSH com `PuTTY`](#useputty)" e "[Adição de chaves SSH ao servidor](#addserverkey)", dispõe de um par de chaves que lhe permite ligar-se ao servidor. 

`PuTTY` pode salvar as credenciais e parâmetros de uma conexão SSH como `Session`. Permite também estabelecer a ligação a diferentes servidores através de chaves individuais.

Abra `PuTTY` e expanda a subsecção `SSH` no menu à esquerda e clique em `Auth` e `Credentials`.

![PuTTy](/pages/assets/screens/other/web-tools/putty/puttygen_04.png){.thumbnail}

Clique no botão `Browse`{.action} e selecione o ficheiro de chave privada `PuTTY` (`keyfile.ppk`) na pasta onde o guardou.

O ficheiro de chave está associado à sessão SSH em curso. Passe para `Session` no menu à esquerda e introduza as suas credenciais de [ligação ao servidor](#getstarted) (`username@IPv4_address`).

Introduza um nome para esta ligação em `Saved Sessions` e clique em `Save`{.action} para a adicionar à lista.

![PuTTy](/pages/assets/screens/other/web-tools/putty/puttygen_05.png){.thumbnail}

Pode desde já clicar neste elemento de `Session` e abrir uma ligação ao seu servidor. Para o testar, clique em `Open`{.action}. Se protegeu o ficheiro de chave com uma frase secreta, introduza-a nesta fase.

Para configurar outra ligação ao servidor, repita os passos abaixo:

- [Crie o par de chaves](#useputty).
- [Adicione a chave pública ao servidor](#addserverkey).
- [Introduza os detalhes do servidor e adicione o ficheiro de chave em `PuTTY`](#puttykeys).


## Quer saber mais? <a name="gofurther"></a>

[Introdução ao protocolo SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Modo rescue num servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Modo Rescue para VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.