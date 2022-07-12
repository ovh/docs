---
title: Introdução ao SSH
slug: ssh-introducao
excerpt: "Saiba como utilizar as ligações SSH para aceder ao servidor"
section: Introdução
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 08/06/2022**

## Objetivo

O protocolo de comunicação SSH (Secure Shell) é a ferramenta principal para estabelecer ligações de host encriptadas através de redes não seguras. A ferramenta OpenSSH é instalada de forma nativa em todos os servidores da OVHcloud (VPS, Servidores Dedicados, instâncias Public Cloud) de forma a permitir ligações seguras a servidores distantes e a outras operações.

**Este guia explica-lhe como aceder ao seu servidor de forma segura graças ao SSH.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, é da sua responsabilidade assegurar o seu bom funcionamento.
>
> Se encontrar dificuldades durante a execução destas ações, convidamo-lo a contactar um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou a trocar informações com a nossa comunidade de utilizadores em https://community.ovh.com/en/. A OVHcloud não lhe pode fornecer assistência técnica a este respeito.
>

## Requisitos

- Ter um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/) ou um [VPS](https://www.ovhcloud.com/pt/vps/) na sua conta OVHcloud.
- Uma aplicação cliente SSH (em linha de comandos ou em interface gráfica)

> [!primary]
> Este guia não se aplica às instalações standard de servidores Windows, pois estas baseiam-se no protocolo de Desktop (*Remote Desktop Protocol*) para as ligações. No entanto, as ligações SSH são utilizadas para o modo rescue OVHcloud. Para mais informações, aceda à secção [Quer saber mais](#gofurther).
>

## Instruções

Existem vários métodos para autenticar uma ligação a um periférico distante através de SSH.<br>
As instruções seguintes dizem respeito ao método de autenticação através de um nome de utilizador e de uma palavra-passe.<br>
Também pode configurar chaves SSH para ativar as ligações seguras sem password. Para mais informações, consulte o nosso [guia sobre chaves SSH](https://docs.ovh.com/pt/dedicated/criar-chaves-ssh-dedicadas/).

Os dados de acesso (ID de utilizador e password) são-lhe enviados por e-mail após uma instalação ou reinstalação do servidor efetuada a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
O nome de utilizador corresponde ao sistema operativo, por exemplo, `ubuntu` ou `debian`.<br>
Para se conectar, também deve especificar o endereço IPv4 ou o nome do host do servidor. Estas informações estão disponíveis no e-mail de instalação e na Área de Cliente.

Não se esqueça de consultar também os nossos guias "Primeiros passos":

- Para um [servidor dedicado](https://docs.ovh.com/pt/dedicated/primeiros-passos-servidor-dedicado/)
- Para um [servidor dedicado da gama de produtos **Eco**](https://docs.ovh.com/pt/dedicated/getting-started-dedicated-server-eco/)
- Para um [VPS](https://docs.ovh.com/pt/vps/instalar-gerir-vps/)

### Ligação a partir de uma distribuição GNU/Linux ou macOS

Um cliente em linha de comandos SSH (OpenSSH) está geralmente disponível de forma padrão. Abra a aplicação Terminal e ligue-se ao servidor com o seguinte comando:

```bash
ssh username@server_IP
```

Se a porta SSH do servidor não é a porta standard, utilize o comando seguinte:

```bash
ssh username@server_IP -p port_number
```

### Ligação a partir de um computador com Windows 10/11

As últimas versões do Windows integram de forma nativa o OpenSSH para as ligações a partir do Powershell ou a linha de comandos.

Clique com o botão Iniciar do Windows e selecione o `Windows PowerShell`{.action}. Também pode usar o campo de pesquisa para iniciar um destes programas.

![PowerShell](images/windowsps.png){.thumbnail}

Ligue-se ao servidor com o seguinte comando:

```bash
ssh username@server_IP
```

Se a porta SSH do servidor não é a porta standard, utilize este comando:

```bash
ssh username@server_IP -p port_number
```

### Ligação e fingerprint

Quando for convidado a introduzir uma palavra-passe, introduza a do utilizador que se liga e prima a `Enter`.

Se se tratar de uma nova ligação, o seu cliente SSH receberá uma impressão digital (*fingerprint*) do servidor. Introduza "yes" para confirmar e a palavra-passe do utilizador que se liga.


```bash
ssh ubuntu@169.254.10.254
```
```console
The authenticity of host '169.254.10.254 (169.254.10.254)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '169.254.10.254' (ECDSA) to the list of known hosts.
ubuntu@169.254.10.254's password:
```

A impressão da chave é depois registada no seu dispositivo e verificada em cada nova ligação. Se a chave tiver mudado no host remoto, surgirá uma mensagem de aviso ao tentar conectar-se, por exemplo:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in /home/user/.ssh/known_hosts:3
```

Isto significa que ocorreu uma das seguintes situações:

- O servidor foi reinstalado.
- O serviço SSH no servidor foi reinstalado.
- Aceda a outro host com o mesmo endereço IP.

> [!primary]
> A mensagem de aviso não indica necessariamente um problema de segurança. No entanto, se não liderar uma destas situações, o servidor remoto pode ficar comprometido.
>

Para resolver este problema, utilize o seguinte comando com o endereço IP do seu servidor:

```bash
ssh-keygen -f ~/.ssh/known_hosts -R 169.254.10.254
```

Pode também abrir o ficheiro `known_hosts` situado na sua pasta pessoal com a ajuda de um editor de texto e suprimir a linha "ofending" especificada na mensagem de aviso:

```bash
nano ~/.ssh/known_hosts
```

Registe as modificações e saia do editor. A nova impressão de chave deve ser aceite na próxima ligação ao servidor.

Em Windows, a localização do ficheiro `known_hosts` e a linha a eliminar são também especificadas, por exemplo:

```console
Offending ECDSA key in C:\\Users\\YourWindowsUser/.ssh/known_hosts:3
```

Aceda a esta pasta, clique com o botão direito do rato sobre o ficheiro e abra-o com a aplicação Bloco de notas.

![known_hosts](images/windowskh.png){.thumbnail}

Elimine a linha correspondente, neste caso a terceira. Registe as modificações e saia do editor. A nova impressão de chave deve ser aceite na próxima ligação ao servidor.

### Utilização de clientes gráficos ou de softwares compatíveis SSH

Para cada tipo de sistema operativo, existem numerosos softwares que lhe permitem ligar-se ao seu servidor através do protocolo SSH. 

Por exemplo, [PuTTY](https://putty.org/){.external} para Windows é um software cliente SSH open source com uma interface gráfica de utilizador. Foi também usado em outras plataformas e está disponível através [do site oficial](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), dos gestores de pacotes de software e através de [Homebrew](https://brew.sh/).

Inicie o PuTTY e introduza o endereço IP do servidor. Indique o número da porta se a porta standard não for utilizada. A seguir, clique em `Open`{.action} para se ligar. Receberá um nome de utilizador e uma palavra-passe.

![PuTTY](images/putty_01.png){.thumbnail}

Uma das vantagens da PuTTY é a possibilidade de registar várias sessões. Introduza as informações de ligação no campo `Saved Sessions` e clique em `Save`{.action}.

![PuTTY](images/putty_02.png){.thumbnail}

Como de costume, o aviso de pegada aparece na primeira ligação. Clique em `Accept`{.action} para registar a pegada de chave ou selecione `Connect Once`{.action}.

![PuTTY](images/putty_03.png){.thumbnail}

Para mais informações, consulte a FAQ oficial e a documentação do PuTTY.

## Quer saber mais? <a name="gofurther"></a>

[Criação de chaves SSH](https://docs.ovh.com/pt/dedicated/criar-chaves-ssh-dedicadas/)

[Modo rescue servidor dedicado](https://docs.ovh.com/pt/dedicated/rescue_mode/)

[VPS em modo de rescue](https://docs.ovh.com/pt/vps/rescue/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.