---
title: 'Tutorial - Como criar um servidor Minecraft num VPS ou num servidor dedicado'
slug: criar-servidor-minecraft-em-vps
excerpt: 'Saiba como instalar o seu próprio servidor Minecraft'
section: Tutorial
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 29/06/2021**

## Objetivo

Minecraft é um videojogo de construção de sucesso global. Deve estar alojado num servidor se deseja jogar em modo multi-jogador.

Pode alugar um servidor Minecraft pré-construído ou configurá-lo você mesmo num [VPS](https://www.ovhcloud.com/pt/vps/) ou num [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/). Isto permitir-lhe-á realizar economias e dar-lhe-á o controlo total da sua instância de jogo.

**Este tutorial descreve como lançar um servidor Minecraft Java Edition num VPS da OVHcloud e testar a sua conectividade.**

> [!warning]
>Este manual explica-lhe como utilizar uma ou várias soluções da OVHcloud com ferramentas externas e descreve as ações a efetuar num contexto específico. Poderá ter de adaptar as instruções à sua situação.
>
>Se tiver dificuldades em aplicar estas instruções, recomendamos que recorra a um fornecedor especializado. Para mais informações, consulte a secção [Quer saber mais](#gofurther)?
>

## Requisitos

- Dispor de um [VPS](https://www.ovhcloud.com/pt/vps/) na sua conta OVHcloud,
- Ter instalado uma distribuição GNU/Linux no servidor
- Dispor de um acesso administrador (root) via SSH ao seu servidor
- Ter uma compreensão básica da administração GNU/Linux

## Instruções

> [!primary]
> Este tutorial baseia-se na versão 1.17 do Minecraft Java Edition e na versão 16.0.1 do OpenJDK.
>

### Etapa 1: preparar o servidor

O primeiro passo consiste em configurar o seu VPS para uma instalação de Minecraft.
<br>É recomendado encomendar um novo VPS ou reinstalar um já existente a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), usando a última versão disponível do Ubuntu ou Debian. Consulte o nosso guia [Primeiros passos](../instalar-gerir-vps//#reinstallvps), se necessário.

Depois de instalar o sistema operativo, ligue-se ao VPS em SSH, conforme descrito no manual "[VPS - primeira utilização](../instalar-gerir-vps/)".

Em primeiro lugar, atualize os pacotes com as suas últimas versões:

```sh
sudo apt update
```

```sh
~$ sudo apt full-upgrade
```

Utilize o seguinte comando para garantir que todos os pacotes necessários estão instalados:

```sh
sudo apt install screen nano wget git
```

Instale o pacote Java:

```sh
~$ sudo apt install openjdk-16-jdk
```

Para evitar criar vulnerabilidades no seu sistema, crie um utilizador chamado "minecraft" que executará as ações do servidor:

```sh
~$ sudo adduser minecraft --disabled-login --disabled-password
```

São-lhe solicitadas várias informações; basta que pressione a tecla `Entrada`{.action} para as validar.

O utilizador foi criado. Tenha em conta que não foi especificada nenhuma palavra-passe para este utilizador. É normal porque a conta só está acessível quando já está conectada por SSH com a sua própria conta de utilizador.

Migre para o novo utilizador:

```sh
sudo su - minecraft
```

> [!primary]
>
> Os comandos seguintes devem ser executados pelo utilizador "minecraft".
>

Para terminar a preparação da instalação, crie uma pasta chamada `server`.

```sh
~$ mkdir ~/server & cd ~/
```

### Etapa 2: instalar o seu servidor Vanilla Minecraft

> [!primary]
>
> Um servidor "Vanilla" é uma instância sem quaisquer add-ons ou plug-ins. Irá experimentar o jogo da forma como foi criado pelos criadores.
>

Primeiro, deve copiar/colar o link de download do software do servidor.
<br>No [site oficial do Minecraft](https://minecraft.net/download/server){.external}, clique com o botão direito do rato no link de download e selecione `Copiar o endereço do link`{.action}.

![Download do servidor](images/download_jar.png){.thumbnail}

No seu terminal de linha de comandos, verifique se ainda está na pasta `server` e utilize o `wget` para descarregar o ficheiro.
<br>Substitua o `link_para_descarregar` pelo URL real que copiou anteriormente.

```sh
~/server$ wget link_para_descarregar
```

Antes de lançar o servidor, deve aceitar a licença do software (EULA ou _End User License Agreement_) para evitar o seu corte instantâneo. Para isso, insira o seguinte comando:

```sh
~/server$ echo "eula=true" > eula.txt
```

Um ficheiro chamado `eula.txt` está agora localizado ao nível da raiz do seu servidor, contendo a linha `eula=true`. Isto indica ao software que aceita as condições de utilização do Minecraft.
<br>Consulte as condições gerais no [site oficial do Minecraft](https://www.minecraft.net/){.external}.

O seu servidor está pronto para ser lançado.

Na etapa 1, instalámos o pacote `screen` que permite abrir várias sessões do terminal (*shell*). Vamos iniciar o Minecraft numa nova sessão que pode ser realizada no fundo. A utilização de `screen` pode ser muito prática pois permite-lhe lançar vários servidores Minecraft em simultâneo.

Em primeiro lugar, vamos criar um novo `shell` chamado `minecraft1`:

```sh
~/server$ screen -S minecraft1
```

A janela ativa do seu terminal muda automaticamente para uma nova sessão `shell`. Se necessário, pode criar outras `shells` e listá-las através do seguinte comando:

```sh
screen -ls
```

Para se desassociar do `shell` (e mantê-lo durante a execução), prima `Ctrl`{.action}, depois `a`{.action}, depois `d`{.action} no seu teclado.

Para passar de uma `nome_shell` chaminé para outra, utilize o seguinte comando:

```sh
~/server$ screen -x nome_shell
```

Também pode pressionar o `Ctrl`{.action}, depois `a`{.action} e depois `n`{.action} no teclado.

Na `shell` anteriormente criada "minecraft1", lançar o servidor Minecraft com o seguinte comando. (Utilize `ls` para verificar o nome do ficheiro caso este seja diferente). 


```sh
~/server$ java -jar server.jar
```

Para parar o seu servidor, insira o comando de `stop`.

### Etapa 3: ligar-se ao servidor

A sua instância de servidor está agora funcional. Para jogar jogos, descarregue o cliente Minecraft a partir [do website oficial](https://www.minecraft.net/){.external}.

Instale e lance o cliente para o seu sistema operativo e ligue-se.

![Ligação ao servidor](images/login_minecraft.png){.thumbnail}

No ecrã seguinte, indique o nome do servidor no campo `Server Name` e o endereço IP do servidor no campo `Server Address`.

![Informações sobre o servidor](images/minecraft_server_login.png){.thumbnail}

Por predefinição, nenhuma porta deve ser introduzida.

### Conclusão

O seu servidor Vanilla Minecraft já está instalado no seu VPS.

Tenha em conta que este guia de instalação é igualmente válido para um [servidor dedicado OVHcloud](https://www.ovhcloud.com/pt/bare-metal/) ou uma instância [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/). Estas soluções também lhe permitem usufruir de recursos físicos garantidos e estáveis a qualquer momento do dia, uma vez que o material é dedicado.

## Quer saber mais? <a name="gofurther"></a>

Para adicionar add-ons, mods e configurar mais detalhadamente o seu servidor Minecraft, queira consultar a seguinte documentação oficial: <https://help.mojang.com/>.

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
