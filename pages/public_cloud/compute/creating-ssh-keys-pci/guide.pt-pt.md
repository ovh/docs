---
title: Criar e utilizar chaves SSH
excerpt: Descubra como criar um par de chaves SSH na sua estação de trabalho e como as utilizar para estabelecer uma ligação segura ao seu servidor
updated: 2024-09-02
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A utilização do protocolo SSH abre um canal seguro numa rede não segura numa arquitetura cliente-servidor, ligando um cliente SSH a um servidor SSH. A criação de um conjunto de chaves SSH permite-lhe obter uma chave pública e uma chave privada. Pode armazenar a chave pública num servidor e aceder com um cliente que possui a chave privada correspondente. Se as chaves SSH públicas e privadas corresponderem, a sessão será realizada sem que seja necessária uma palavra-passe.

Trata-se geralmente do método de ligação mais seguro e mais prático, bem como do método predefinido nas instâncias Public Cloud.

**Este manual explica como criar e gerir chaves SSH no seu dispositivo local para se ligar a instâncias Public Cloud.**

## Requisitos

- Um [projeto Public Cloud](/links/public-cloud/public-cloud) na sua conta OVHcloud
- Uma aplicação cliente SSH (linha de comandos ou GUI)

> [!primary]
> Este manual não é aplicável a instalações padrão do Windows** Server, uma vez que estas dependem do protocolo "Remote Desktop Protocol" (RDP) para as ligações.
>
> Encontre mais informações no nosso [guia sobre a criação de uma instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
>

## Instruções

As instruções seguintes abrangem dois métodos de utilização das chaves SSH:

- [A criação de um par de chaves **Open SSH** e a ligação a um servidor a partir do cliente SSH em linha de comandos](#openssh)
- [A criação de um par de chaves `PuTTY` e a ligação a um servidor a partir do cliente SSH `PuTTY`](#useputty)

Pode utilizar os dois métodos simultaneamente, mas tenha em conta que "PuTTY` conserva os ficheiros de chave num formato específico, o que os torna incompatíveis com os ficheiros de chave SSH criados com o cliente **Open SSH**.

Isto significa que uma chave privada criada com o cliente SSH em linha de comandos deverá primeiro ser [convertida no formato `PuTTY` e vice-versa](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt){.external}.

<a name="openssh"></a>

#### Criação de um par de chaves SSH em linha de comandos

A partir de um computador **Mac** ou de um periférico com um sistema operativo **Linux**, abra a aplicação de linha de comandos (`Terminal`).

Certifique-se de que tem uma pasta chamada `.ssh` no seu diretório `$HOME`. Se a pasta não existir, crie-a:

```bash
mkdir ~/.ssh
```

Num sistema operativo **Windows** atual, abra a linha de comandos introduzindo "cmd" na barra de pesquisa (ou abra `PowerShell` a partir do menu).

Aceda ao diretório `.ssh` do seu utilizador **Windows** ativo (por predefinição: `C:\Users\WindowsUsername.ssh`):

```bash
cd .ssh
```

<a name="createnewkey"></a>

Utilize o seguinte comando para criar uma chave RSA 4096 bits:

```bash
ssh-keygen -b 4096
```

A utilização da opção `-t` com este comando permite-lhe especificar outro método de encriptação, por exemplo:

```bash
ssh-keygen -t ed25519 -a 256
```

A linha de comandos solicita que guarde a chave recém-criada no ficheiro padrão:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Pode confirmar com `Enter` para aceitar o nome de ficheiro proposto ou introduzir um outro nome. Isto é relevante se vários pares de chaves forem colocados no diretório `.ssh`. Encontre mais informações na secção [Gerir várias chaves SSH](#multiplekeys).  
Este exemplo utiliza os nomes de ficheiros standard `id_rsa` e `id_rsa.pub`.

Pode proteger a sua chave SSH com uma frase secreta (*passphrase*) na próxima mensagem. Isto é recomendado para uma maior segurança.

> [!warning]
>
> O acesso remoto ao seu servidor é tão seguro como o periférico cliente que armazena a chave privada. Assim, a proteção do seu dispositivo e dos seus ficheiros contra acessos não autorizados é crucial durante a utilização de chaves SSH.
>
> Por razões de conveniência e segurança, recomendamos que utilize um gestor de palavras-passe no seu dispositivo, como a solução open source `KeePass`.
>

Todas as chaves SSH devem ser armazenadas no diretório `.ssh`. Os ficheiros de chave pública terão o sufixo `.pub` adicionado ao nome do ficheiro.

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

Para apresentar e exportar a sua chave pública, utilize o comando `cat` no seu ficheiro de chave `.pub`. Copie esta cadeia de chaves para a [adicionar a uma nova instância](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) ou para a [importar para a Área de Cliente OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

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
> Num terminal **macOS**, pode utilizar os comandos `pbcopy` e `pbpaste` para gerir cadeias de teclas mais rapidamente. Por exemplo, utilize este comando para copiar a chave do ficheiro `id_rsa.pub` para a área de transferência:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

Num sistema operativo **Windows**, abra o ficheiro com a aplicação `Notepad` a partir do Explorador de ficheiros (clique com o botão direito do rato no ficheiro e selecione `Abrir com`) ou utilize um dos seguintes comandos (em `\Users\WindowsUsername\.ssh`):

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Copie esta cadeia de chaves para a [adicionar a uma nova instância](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) ou para a [importar para a Área de Cliente OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

> [!primary]
>
> **Utilização da área de transferência**
>
> Quando estiver a trabalhar em linha de comandos sob **Windows**, clique com o botão direito do rato para **colar** o conteúdo da área de transferência na janela da linha de comandos. Para **copiar** um canal a partir da janela da linha de comandos, realce-o com o rato e prima a tecla `Enter`. Pode também consultar estas funções através de um "clique com o botão direito do rato" na barra de menu.
>

<a name="useputty"></a>

#### Criar um par de chaves SSH com PuTTY

[PuTTY](https://putty.org/){.external} é um software cliente SSH open source com uma interface gráfica do utilizador, disponível para **Windows** e outros sistemas operativos. Fornece um software complementar para criar chaves SSH: `PuTTY Key Generator` (`PuTTYgen`).

> [!primary]
>
> O objetivo principal do `PuTTY` é gerenciar as conexões SSH de um dispositivo cliente **Windows** para um servidor **GNU/Linux**. `PuTTY` armazena os arquivos de chave em um formato específico, tornando-os incompatíveis com os arquivos de chave SSH criados com o cliente **Open SSH** incluído nativamente na maioria dos sistemas operativos modernos.
>
> Se necessário e como explicado acima neste manual, as chaves geradas em *linha de comandos* podem ser [convertidas no formato `PPK`](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt) de forma a utilizá-las com o cliente `PuTTY`. Para uma utilização mais prática das chaves SSH, escolha uma opção e respeite-a (chaves privadas **Open SSH** ou chaves privadas `PuTTY`).
>

Se já não estiver instalado (consulte a sua lista de aplicações ou utilize a função de pesquisa), transfira o `PuTTY` a partir de [o site oficial](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html){.external}. O pacote de instalação padrão recomendado já contém `PuTTYgen`, mas também está disponível como um arquivo independente no site.

Abra `PuTTYgen` e selecione um dos algoritmos de encriptação suportados. Este exemplo usa RSA. Digite 4096 como número de bits no canto inferior direito e clique no botão `Generate`{.action}.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_01.png){.thumbnail}

Mova o cursor do rato livremente para a área abaixo da barra de progresso:

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_02.gif){.thumbnail}

A chave está pronta quando a barra de progresso está cheia.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_03.png){.thumbnail}

Copie esta cadeia de chaves para a [adicionar a uma nova instância](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) ou para a [importar para a Área de Cliente OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

Guarde ambas as chaves como ficheiros clicando nos botões correspondentes e introduza uma frase secreta (*passphrase*) para as proteger.

> [!warning]
>
> O acesso remoto à sua instância é tão seguro como o dispositivo cliente que armazena a chave privada. Assim, a proteção do seu dispositivo e dos seus ficheiros contra acessos não autorizados é crucial durante a utilização de chaves SSH.
>
> Por razões de conveniência e segurança, recomendamos que utilize um gestor de palavras-passe no seu dispositivo, como a solução open source `KeePass`.
>

Uma das vantagens do uso de `PuTTY` é a capacidade de salvar várias conexões sob o nome de `Sessions`. Encontre mais informações na secção [Gestão de várias chaves SSH no seu dispositivo local](#puttykeys).

<a name="multiplekeys"></a>

### Gestão de várias chaves SSH no seu equipamento local

Pode utilizar vários pares de chaves SSH para estabelecer ligação a diferentes hosts remotos.

> [!primary]
>
> Se utilizar `PuTTY`, vá para [secção correspondente](#puttykeys) abaixo.
>

Uma vez que todas as chaves devem ser colocadas na pasta `.ssh` da sua unidade local, os nomes dos ficheiros devem ser diferentes. Quando [criar um novo par de chaves](#createnewkey) e lhe for solicitado que forneça um nome de ficheiro, introduza um nome à sua escolha. Associe-o ao nome da instância.

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

Exemplo:

```bash
ssh -i ~/.ssh/myInstance_rsa ubuntu@203.0.113.100
```

Como indicado nas secções anteriores, as mesmas instruções funcionarão num cliente **Windows**. Substitua apenas `~/` pelo caminho da sua pasta de utilizador **Windows**, por predefinição `C:\Users\WindowsUsername\`. Por exemplo: `ssh -i C:\Users\Username\.ssh/myInstance_rsa ubuntu@203.0.113.100`.

#### Através de um ficheiro "config"

A alternativa para adicionar a opção `-i` em cada vez consiste em modificar um ficheiro chamado `config` na pasta `~/.ssh` (`\Users\Username\.ssh` para **Windows**). Permite configurar os detalhes das diferentes ligações (nome de utilizador, porta, ficheiro de chave, parâmetros opcionais, etc.)

Se este ficheiro existir no `.ssh`, provavelmente já contém informações. Em função do seu ambiente de trabalho, considere criar uma cópia de segurança do original.

Exemplo de conteúdo da pasta `.ssh`:

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

Com o ficheiro `config`, várias ligações SSH podem ser armazenadas com os seus parâmetros individuais, além dos valores padrão. A exploração de todo o potencial deste ficheiro pode tornar-se complexa, pois é particularmente útil para os utilizadores experientes que gerem vários servidores numa base regular.

Eis um exemplo simples para lhe explicar como configurar uma ligação SSH a uma instância.

Abra o arquivo e adicione as seguintes linhas na parte superior:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

De seguida, poderá ligar-se à instância com o nome de alias que terá definido como `Host`:

```bash
ssh ubuntu@instance
```

Apenas o IP do servidor e o ficheiro de chave foram especificados no exemplo anterior, mas podem ser adicionados mais detalhes.  
Para configurar uma ligação SSH para um segundo servidor com o nome de utilizador "rocky", a porta SSH alterada "49160" e a chave privada no ficheiro "myserver_rsa, expanda o conteúdo do ficheiro como indicado neste exemplo:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa

Host myserver
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myserver_rsa
```

De seguida, poderá ligar-se ao servidor ao seguinte endereço:

```bash
ssh myserver
```

Pode consultar a [página "man` correspondente](https://manpages.org/ssh_config/5) para mais informações.

<a name="puttykeys"></a>

#### Via PuTTY

`PuTTY` pode salvar as credenciais e parâmetros de uma conexão SSH como `Session`. Permite também estabelecer a ligação a diferentes servidores através de chaves individuais.

Abra `PuTTY` e expanda a subsecção `SSH` no menu à esquerda e clique em `Auth` e `Credentials`.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_04.png){.thumbnail}

Clique no botão "Browse"{.action} e selecione o ficheiro de chave privada `PuTTY` (`keyfile.ppk`) na pasta onde o guardou.

O ficheiro de chave está associado à sessão SSH em curso. Passe para `Session` no menu à esquerda e introduza as suas credenciais de ligação ao servidor (`username@IPv4_address`).

Introduza um nome para esta ligação em `Saved Sessions` e clique em `Save`{.action} para a adicionar à lista.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_05.png){.thumbnail}

Pode desde já clicar neste elemento de `Session` e abrir uma ligação ao seu servidor. Para o testar, clique em `Open`{.action}. Se protegeu o ficheiro de chave com uma frase secreta, introduza-a nesta fase.

#### Adicionar chaves públicas suplementares à sua instância

Para adicionar chaves SSH para outros utilizadores que acedam à sua instância, repita as etapas de criação da chave mas utilize a pasta `$HOME` adequada ou **Windows** `Users` do utilizador em questão para criar e armazenar as chaves SSH (ou executar os comandos no dispositivo dedicado desta pessoa).

Consulte o nosso [manual dedicado](/pages/public_cloud/compute/configuring_additional_ssh_keys) para uma explicação pormenorizada destas etapas.

<a name="gofurther"></a>

## Quer saber mais?

[Como criar uma instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Primeiros passos com SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Configuração de chaves SSH adicionais numa instância](/pages/public_cloud/compute/configuring_additional_ssh_keys)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com nossa [comunidade de utilizadores](/links/community).