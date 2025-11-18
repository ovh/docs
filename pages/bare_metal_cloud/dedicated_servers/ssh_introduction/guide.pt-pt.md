---
title: Como começar com as ligações SSH
excerpt: "Descubra como utilizar o SSH para aceder ao servidor OVHcloud a partir da maioria dos postos de trabalho"
updated: 2024-12-03
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

O protocolo de comunicação SSH (Secure Shell) é a forma preferida de estabelecer ligações de hosts encriptados através de redes públicas. O utilitário OpenSSH está disponível em todos os servidores OVHcloud (VPS, servidores dedicados, instâncias Public Cloud) para permitir ligações remotas seguras aos servidores, bem como outras operações.

**Este manual explica como aceder com segurança ao servidor com o protocolo SSH.**

> [!warning]
> A OVHcloud fornece serviços cuja configuração e gestão são da sua responsabilidade. É da sua responsabilidade assegurar o seu bom funcionamento.
>
> Este manual foi concebido para o ajudar com as tarefas de rotina. Contudo, se encontrar dificuldades, recomendamos que contacte um [fornecedor de serviços especializado](/links/partner) ou que contacte a [comunidade OVHcloud](/links/community). Para mais informações, consulte [Quer saber mais?](#gofurther) deste guia.
>

## Requisitos

- Um [servidor dedicado](/links/bare-metal/bare-metal) ou um [VPS](/links/bare-metal/vps) na sua conta OVHcloud

> [!primary]
> Este manual não se aplica a instalações de servidores padrão do Windows, uma vez que estas dependem do protocolo Remote Desktop Protocol (RDP) para as ligações. No entanto, as ligações SSH são pertinentes aquando da utilização do modo rescue OVHcloud. Encontre mais informações na secção [Quer saber mais?](#gofurther) deste guia.
>

## Instruções

Existem várias formas de autenticar uma ligação a um host remoto através de SSH. As instruções a seguir referem-se ao método de autenticação com **nome de utilizador e palavra-passe**.  
Pode também configurar a autenticação de chave para ativar ligações seguras sem trocar as palavras-passe. Encontre os detalhes nos nossos guias:

- [Como criar e utilizar chaves para a autenticação SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Como criar e utilizar chaves para a autenticação SSH com PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Os identificadores iniciais (identificador e palavra-passe) são-lhe transmitidos por e-mail após uma instalação ou uma reinstalação do servidor a partir da [Área de Cliente OVHcloud](/links/manager).

O nome de utilizador corresponde ao sistema operativo, por exemplo, `ubuntu` ou `debian`. Para se conectar, deve igualmente especificar o endereço IP ou o `hostname` do servidor. Estas informações estão disponíveis no e-mail de instalação e na Área de Cliente.

Não hesite em consultar os nossos manuais "Primeiros passos" se deseja obter mais pormenores sobre este assumpto:

- Para um [servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Para um [servidor dedicado da gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Para um [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

### Como conectar-se a um servidor remoto a partir de uma distribuição GNU/Linux ou macOS

/// details | Expanda esta secção

#### Estabelecimento de uma ligação

Normalmente, um cliente em linha de comandos para SSH (protocolo OpenSSH) está disponível por predefinição. Abra a aplicação de linha de comandos (Terminal) e ligue-se ao servidor com o seguinte comando:

```bash
ssh username@server_IP
```

Se alterou a porta SSH do servidor, utilize o seguinte comando:

```bash
ssh username@server_IP -p port_number
```

#### Ligação e fingerprint

Quando solicitado, introduza a palavra-passe do utilizador que inicia sessão (ou cole-a com um clique através do botão central do rato) e prima `Enter`{.action}.

Se for uma nova ligação, o seu cliente SSH receberá uma **impressão de chave** do servidor. Introduza "yes" para confirmar e, em seguida, a palavra-passe do utilizador que inicia sessão para iniciar sessão.

Exemplo de saída:

```bash
ssh ubuntu@203.0.113.100
```

```console
The authenticity of host '203.0.113.100 (203.0.113.100)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '203.0.113.100' (ECDSA) to the list of known hosts.
ubuntu@203.0.113.100's password:
```

A impressão digital será registada no seu equipamento e verificada a cada nova ligação. Se a chave tiver sido alterada no sistema anfitrião remoto, receberá uma mensagem de aviso quando tentar estabelecer ligação.

Exemplo de saída:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in /home/user/.ssh/known_hosts:3
```

Isto significa que ocorreu um dos seguintes eventos:

- O servidor foi reinstalado com sucesso.
- O serviço SSH no servidor foi reinstalado com sucesso.
- Ligar-se a um host diferente com o mesmo endereço IP.

> [!primary]
> A mensagem de aviso não indica necessariamente um problema de segurança. No entanto, se não tiver sido esta a causar um incidente, é possível que o servidor remoto esteja comprometido.
>

Para resolver este problema, utilize o seguinte comando com o endereço IP do seu servidor:

```bash
ssh-keygen -f ~/.ssh/known_hosts -R 203.0.113.100
```

Você também pode editar o arquivo `known_hosts` localizado na pasta `home` de sua conta de usuário local usando um editor de texto.

Exemplo:

```bash
nano ~/.ssh/known_hosts
```

Localize a linha "offending" especificada na mensagem de aviso (neste exemplo, seria a terceira linha). Realce a linha inteira e remova-a.

Salve as alterações e saia do editor. Na próxima ligação ao servidor, terá de confirmar o novo certificado digital.

///

### Como conectar-se a um servidor remoto a partir de um dispositivo Windows

/// details | Expanda esta secção

#### Estabelecimento de uma ligação

As versões mais recentes do sistema operativo Windows incluem OpenSSH, permitindo que você o use diretamente das aplicações de linha de comando nativas (PowerShell ou Prompt de comando).

Clique com o botão direito do rato no botão `Iniciar`{.action} do Windows e selecione `Windows PowerShell`{.action}. Você também pode usar o campo de pesquisa para iniciar um dos aplicativos de linha de comando.

![PowerShell](images/windowsps.png){.thumbnail}

Ligue-se ao servidor com o seguinte comando:

```bash
ssh username@server_IP
```

Se alterou a porta SSH do servidor, utilize o seguinte comando:

```bash
ssh username@server_IP -p port_number
```

#### Ligação e fingerprint

Quando solicitado, introduza a palavra-passe do utilizador que inicia sessão (ou cole-a através de um clique com o botão direito do rato) e prima `Enter`{.action}.

Se for uma nova ligação, o seu cliente SSH receberá uma **impressão de chave** do servidor. Introduza "yes" para confirmar e, em seguida, a palavra-passe do utilizador que inicia sessão para iniciar sessão.

Exemplo de saída:

```bash
ssh ubuntu@203.0.113.100
```

```console
The authenticity of host '203.0.113.100 (203.0.113.100)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '203.0.113.100' (ECDSA) to the list of known hosts.
ubuntu@203.0.113.100's password:
```

A impressão digital será registada no seu equipamento e verificada a cada nova ligação. Se a chave tiver sido alterada no sistema anfitrião remoto, receberá uma mensagem de aviso quando tentar estabelecer ligação.

Exemplo de saída:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in C:\\Users\\Name_Windows_User/.ssh/known_hosts:3
```

Isto significa que ocorreu um dos seguintes eventos:

- O servidor foi reinstalado com sucesso.
- O serviço SSH no servidor foi reinstalado com sucesso.
- Ligar-se a um host diferente com o mesmo endereço IP.

> [!primary]
> A mensagem de aviso não indica necessariamente um problema de segurança. No entanto, se não tiver sido esta a causar um incidente, é possível que o servidor remoto esteja comprometido.
>

Para resolver este problema, introduza o comando seguinte com o nome da conta de utilizador local do Windows e o endereço IP do servidor:

```bash
ssh-keygen -f "C:\Users\Name_Windows_User\.ssh\known_hosts" -R 203.0.113.100
```

Também pode aceder a esta pasta, clicar com o botão direito do rato no ficheiro e abri-lo com um editor de texto (Notepad, Notepad++, etc.)

![known_hosts](images/windowskh.png){.thumbnail}

Localize a linha "offending" especificada na mensagem de aviso (neste exemplo, seria a terceira linha). Realce a linha inteira e remova-a.

Salve as alterações e saia do editor. Na próxima ligação ao servidor, terá de confirmar o novo certificado digital.

///


### Utilização de clientes GUI dedicados ou de software compatível com SSH

Se preferir uma interface gráfica, poderá encontrar numerosas aplicações de software para cada tipo de sistema operativo que lhe permitem ligar-se a hosts distantes através do protocolo SSH.

Por exemplo, [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) é um software cliente SSH open source com numerosas funcionalidades úteis. Saiba como utilizá-lo para as ligações aos servidores OVHcloud no nosso tutorial detalhado:

[Como utilizar PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

<a name="gofurther"></a>

## Quer saber mais?

[Configuração das contas de utilizador e do acesso root num servidor](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

[Como criar e utilizar chaves para a autenticação SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Como criar e utilizar chaves para a autenticação SSH com PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Modo rescue num servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Modo rescue num VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).