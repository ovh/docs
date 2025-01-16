---
title: "Como criar e utilizar chaves de autenticação para as ligações SSH aos servidores OVHcloud"
excerpt: "Descubra como criar pares de chaves para OpenSSH no seu dispositivo local e como as utilizar para estabelecer ligações seguras ao seu servidor dedicado ou VPS"
updated: 2025-01-06
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

O protocolo SSH permite estabelecer um canal de comunicação seguro nas redes públicas numa arquitetura cliente-servidor. Podem ser utilizados pares de chaves para autenticar estas ligações SSH entre dois hosts aprovados, por exemplo, um desktop e um servidor remoto.

Um conjunto de chaves é composto por uma chave pública que pode ser partilhada e uma chave privada que permanece secreta. Colocada num servidor, a chave pública permite a qualquer cliente que disponha da chave privada correspondente aceder-lhe sem ter de introduzir uma palavra-passe.

Este método de comunicação é geralmente o melhor compromisso entre segurança e conveniência.

**Saiba como criar e gerir pares de chaves de autenticação no seu dispositivo local e como aceder a servidores remotos.**

## Requisitos

- Ter um [servidor dedicado](/links/bare-metal/bare-metal) ou um [VPS](/links/bare-metal/vps) na sua conta OVHcloud
- Uma aplicação de ligação remota compatível com o protocolo OpenSSH

> [!primary]
> Este manual não se aplica às ligações ao sistema operativo padrão **Windows Server**, uma vez que o protocolo `Remote Desktop Protocol` (RDP) é a predefinição. No entanto, as ligações SSH são utilizadas no modo rescue da OVHcloud.
>
> Encontre mais informações na secção [Quer saber mais?](#gofurther) deste guia.
>

## Instruções

<a name="getstarted"></a>

Não se esqueça de consultar os nossos manuais "Primeiros passos":

- para um [servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- para um [servidor dedicado da gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- para um [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

### Criação de pares de chaves para as ligações OpenSSH

As seguintes instruções explicam como criar e gerir pares de chaves para ligações remotas com **OpenSSH** em linha de comandos**. A maioria dos sistemas operativos atuais incluem esse recurso sem a necessidade de instalar qualquer software adicional.

Se preferir uma interface gráfica, existem numerosas aplicações de software para cada tipo de sistema operativo que lhe permitem ligar-se a hosts distantes através do protocolo OpenSSH.

Por exemplo, [PuTTY](https://putty.org/) é um software cliente SSH open source com numerosas funcionalidades úteis. Saiba como utilizá-lo para as ligações aos servidores OVHcloud no nosso tutorial detalhado:

- [Como utilizar PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

> [!primary]
>
> Se receber mensagens de erro ao tentar efetuar a ligação, certifique-se de que as definições e as informações de início de sessão estão corretas e que o sistema e as aplicações instaladas estão atualizadas. Se receber uma mensagem de aviso do tipo `REMOTE HOST IDENTIFICATION HAS CHANGED`, consulte o nosso [guia de introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>

#### Configuração dos pares de chaves a partir de uma distribuição GNU/Linux ou macOS

/// details | Expanda esta secção

Abra a aplicação em linha de comandos (`Terminal`) no seu dispositivo local.

Certifique-se de que tem uma pasta chamada `.ssh` no seu diretório `$HOME`. Se a pasta não existir, crie-a:

```bash
mkdir ~/.ssh
```

Utilize o comando `ssh-keygen` para criar um par de chaves. A opção `-t` permite especificar o método de encriptação.

> [!primary]
>
> `Ed25519` é considerado o método mais seguro, mas `RSA` é uma alternativa válida. Ambos são compatíveis com a Área de Cliente OVHcloud se pretender [armazenar as chaves públicas na sua conta de cliente](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel)..

Exemplos:

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

A mensagem seguinte permite atribuir um nome à chave que acabou de criar ou utilizar o nome de ficheiro padrão:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Se confirmar com `Enter`{.action} sem introduzir um nome, será utilizado o nome de ficheiro padrão (`id_rsa` neste exemplo).

Se pretender utilizar mais do que um par de chaves no futuro, introduza um nome de ficheiro individual para identificar a chave. Consulte **Gerir várias chaves de autenticação no dispositivo local** para obter mais informações sobre esta questão.

Os exemplos de saída abaixo continuarão a utilizar os nomes de ficheiros `id_rsa` e `id_rsa.pub` para fins ilustrativos.

Pode proteger a sua chave SSH com uma frase secreta no prompt seguinte. Isto é recomendado para uma maior segurança.

> [!warning]
>
> Quando utilizar chaves de autenticação, o acesso remoto ao seu servidor é tão seguro como o dispositivo cliente que armazena a chave privada. Por isso, é essencial proteger o seu dispositivo e os ficheiros importantes que contém contra acessos não autorizados.
>
> Para uma maior comodidade e segurança, armazene as frases secretas num gestor de palavras-passe no seu dispositivo, como a solução open source **KeePass**.
>

Todas as chaves SSH são armazenadas no diretório `.ssh` por predefinição. Os ficheiros de chave pública terão `.pub` adicionado ao nome do ficheiro.

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

Para apresentar e exportar a sua chave pública, utilize o comando `cat` no seu ficheiro de chave `.pub` ou abra-o com um editor de texto.

```bash
cat ~/.ssh/id_rsa.pub
```

```console
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

Copie esta cadeia de chaves para [adicioná-la a um novo servidor](#getstarted) ou para [importá-la para a sua Área de Cliente](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

> [!primary]
>
> Num terminal **macOS**, pode utilizar os comandos `pbcopy` e `pbpaste` para gerir cadeias de chaves mais rapidamente. Por exemplo, utilize este comando para copiar a chave do ficheiro `id_rsa.pub` para a área de transferência:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

#### Gerir várias chaves de autenticação no dispositivo local

Pode utilizar vários pares de chaves SSH para estabelecer a ligação a diferentes hosts remotos ou dispositivos de rede local.

Como todos os arquivos-chave devem ser colocados na pasta `.ssh` do diretório `home` do seu usuário, os nomes dos arquivos devem ser diferentes. Quando criar um novo par de chaves e lhe for pedido um nome de ficheiro, introduza um nome à sua escolha, por exemplo, o nome do servidor.

Exemplo de saída:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

Quando se conectar ao servidor correspondente, especifique o nome do arquivo de chave privada, além dos detalhes do usuário e do servidor de conexão:

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Exemplo:

```bash
ssh -i ~/.ssh/myServer_rsa ubuntu@203.0.113.100
```

##### Utilização do ficheiro "config"

A alternativa para adicionar a opção `-i` em cada vez é editar um arquivo chamado `config` dentro da pasta `~/.ssh`. Permite configurar os detalhes das diferentes ligações (nome de utilizador, porta, ficheiro de chave, parâmetros opcionais, etc.)

Se este ficheiro existir no interior de `.ssh`, provavelmente já contém informações. Em função do seu ambiente de trabalho, considere criar primeiro uma cópia de segurança do original.

Exemplo de saída de listagem do conteúdo da pasta `.ssh`:

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

O ficheiro `config` permite armazenar várias ligações SSH bem como os seus parâmetros individuais, para além dos valores standard. A exploração de todo o potencial deste ficheiro pode tornar-se complexa, pois é particularmente útil para os utilizadores experientes que gerem vários servidores.

Eis um exemplo simples para lhe explicar como configurar uma ligação SSH a um servidor.  
Abra o arquivo e adicione as seguintes linhas na parte superior:

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa
```

Certifique-se de que utiliza o endereço IP e o nome de ficheiro de chave corretos. A primeira linha, que começa por `Host`, define o nome desta ligação (`dedicated_server` neste exemplo).

De seguida, pode ligar-se ao servidor substituindo o endereço IP do servidor pelo nome do alias que identifica esta ligação (`Host`):

```bash
ssh username@connection_name
```

Exemplo:

```bash
ssh ubuntu@dedicated_server
```

Apenas o IP do servidor e o ficheiro de chave foram especificados no exemplo anterior, mas podem ser adicionados mais detalhes.  
Para configurar uma ligação SSH a um segundo host remoto com o nome de utilizador "rocky", a porta SSH alterada "49160" e a chave privada no ficheiro "myVPS_rsa", expanda o conteúdo do ficheiro como indicado neste exemplo:

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa

Host vps
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myVPS_rsa
```

De seguida, poderá ligar-se a este segundo host ao seguinte endereço:

```bash
ssh vps
```

Para mais informações sobre o ficheiro `config`, consulte a [página `man` correspondente](https://manpages.org/ssh_config/5).

///


#### Como configurar os pares de chaves num dispositivo Windows

/// details | Expanda esta secção

Abra a aplicação Prompt de comando escrevendo « cmd » na barra de pesquisa (ou abra o PowerShell no menu `Iniciar`{.action}).

Abra o diretório `.ssh` da sua conta de utilizador ativa do Windows (caminho predefinido: `C:\Users\WindowsUsername\.ssh`):

```bash
cd .ssh
```

Utilize o comando `ssh-keygen` para criar um par de chaves. A opção `-t` permite-lhe especificar o método de encriptação.

> [!primary]
>
> `Ed25519` é considerado o método mais seguro, mas `RSA` é uma alternativa válida. Ambos são compatíveis com a Área de Cliente OVHcloud se pretender [armazenar as chaves públicas na sua conta de cliente](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

Exemplos:

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

A mensagem seguinte permite atribuir um nome à chave que acabou de criar ou utilizar o nome de ficheiro padrão:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa):
```

Se confirmar com a tecla `Enter`{.action} sem introduzir um nome, será utilizado o nome de ficheiro padrão (`id_rsa` neste exemplo).

Se pretender utilizar mais do que um par de chaves no futuro, introduza um nome de ficheiro individual para identificar a chave. Consulte **Gerir várias chaves de autenticação no dispositivo local** para obter mais informações sobre esta questão.

Os exemplos de saída abaixo continuarão a utilizar os nomes de ficheiros `id_rsa` e `id_rsa.pub` para fins ilustrativos.

Pode proteger a sua chave SSH com uma frase secreta no prompt seguinte. Isto é recomendado para uma maior segurança.

> [!warning]
>
> Quando utilizar chaves de autenticação, o acesso remoto ao seu servidor é tão seguro como o dispositivo cliente que armazena a chave privada. Por isso, é essencial proteger o seu dispositivo e os ficheiros importantes que contém contra acessos não autorizados.
>
> Para uma maior comodidade e segurança, armazene as frases secretas num gestor de palavras-passe no seu computador, como a solução open source **KeePass**.
>

Todas as chaves SSH são armazenadas no diretório `.ssh` por predefinição. Os ficheiros de chave pública terão `.pub` adicionado ao nome do ficheiro.

```console
Your identification has been saved in id_rsa.
Your public key has been saved in id_rsa.pub.
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

Você pode abrir o arquivo de teclas usando um editor de texto (Notepad, Notepad++, etc.). No Windows File Explorer, clique com o botão direito do mouse no arquivo e selecione `Abrir com`.  
Pode também utilizar um dos seguintes comandos (no diretório `\Users\WindowsUsername\.ssh`):

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Copie esta cadeia de chaves para [adicioná-la a um novo servidor](#getstarted) ou para [importá-la para a sua Área de Cliente](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

> [!primary]
>
> **Utilização da área de transferência**
>
> Ao trabalhar com base numa linha de comandos **Windows**, utilize o botão direito do rato para **colar** o conteúdo da área de transferência na janela da linha de comandos. Para **copiar** um canal a partir da janela da linha de comandos, realce-o e prima `Enter`{.action}. Pode igualmente consultar estas funções através de um clique com o botão direito do rato na barra de menu da janela da linha de comandos.
>

#### Gerir várias chaves de autenticação no dispositivo local

Pode utilizar vários pares de chaves SSH para estabelecer a ligação a diferentes hosts remotos ou dispositivos de rede local.

Como todos os arquivos-chave devem ser colocados na pasta `.ssh` de seu diretório de usuário do Windows, os nomes dos arquivos devem ser diferentes. Quando criar um novo par de chaves e lhe for pedido um nome de ficheiro, introduza um nome à sua escolha, por exemplo, o nome do servidor.

Exemplo de saída:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in KeyFileName_rsa.
Your public key has been saved in KeyFileName_rsa.pub.
```

Quando se conectar ao servidor correspondente, especifique o nome do arquivo de chave privada, além dos detalhes do usuário e do servidor de conexão:

```bash
ssh -i C:\Users\Username\.ssh/KeyFileName user@IP_ADDRESS
```

Exemplo:

```bash
ssh -i C:\Users\Username\.ssh/myServer_rsa ubuntu@203.0.113.100
```

##### Utilização do ficheiro "config"

A alternativa para adicionar a opção `-i` em cada vez é editar um arquivo chamado `config` dentro da pasta `C:\Users\Username\.ssh`. Permite configurar os detalhes das diferentes ligações (nome de utilizador, porta, ficheiro de chave, parâmetros opcionais, etc.)

Se este ficheiro existir no interior de `.ssh`, provavelmente já contém informações. Em função do seu ambiente de trabalho, considere criar primeiro uma cópia de segurança do original.

Exemplo de saída de listagem do conteúdo da pasta `.ssh`:

```bash
C:\Users\Username\.ssh>dir /B
```

```console
config
id_rsa
id_rsa.pub
known_hosts    
known_hosts.old
```

O ficheiro `config` permite armazenar várias ligações SSH bem como os seus parâmetros individuais, para além dos valores standard. A exploração de todo o potencial deste ficheiro pode tornar-se complexa, pois é particularmente útil para os utilizadores experientes que gerem vários servidores.

Eis um exemplo simples para lhe explicar como configurar uma ligação SSH a um servidor.  
Abra o arquivo e adicione as seguintes linhas na parte superior:

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa
```

Certifique-se de que utiliza o endereço IP e o nome de ficheiro de chave corretos. A primeira linha, que começa por `Host`, define o nome desta ligação (`dedicated_server` neste exemplo).

De seguida, ligue-se ao servidor substituindo o endereço IP do servidor pelo nome do alias que identifica esta ligação (`Host`):

```bash
ssh username@connection_name
```

Exemplo:

```bash
ssh ubuntu@dedicated_server
```

Apenas o IP do servidor e o ficheiro de chave foram especificados no exemplo anterior, mas podem ser adicionados mais detalhes.  
Para configurar uma ligação SSH a um segundo host remoto com o nome de utilizador "rocky", a porta SSH alterada "49160" e a chave privada no ficheiro "myVPS_rsa", expanda o conteúdo do ficheiro como indicado neste exemplo:

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile C:\Users\Username\.ssh/myServer_rsa

Host vps
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile C:\Users\Username\.ssh/myVPS_rsa
```

De seguida, poderá ligar-se a este segundo host ao seguinte endereço:

```bash
ssh vps
```

Para mais informações sobre o ficheiro `config`, consulte a [página `man` correspondente](https://manpages.org/ssh_config/5).

///


#### Adicionar chaves públicas suplementares ao seu servidor

Para adicionar uma autenticação com chave para outros utilizadores que acedam ao seu servidor, crie um novo par de chaves mas utilize a pasta `$HOME` adequada ou **Windows** `Users` do utilizador em questão para armazenar as chaves de autenticação (ou executar os comandos no dispositivo dedicado desta pessoa).  
De seguida, adicione a nova cadeia de chave pública ao servidor no ficheiro `authorized_keys`, tal como descrito acima.

#### Eliminação das chaves públicas do seu servidor

Abra o ficheiro `authorized_keys` no seu servidor, como descrito acima, e elimine a cadeia de chaves que corresponde à conta de utilizador cujo acesso foi revogado.

<a name="gofurther"></a>

## Quer saber mais?

[Introdução ao protocolo SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Modo rescue num servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Modo Rescue para VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).