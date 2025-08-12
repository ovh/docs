---
title: 'Como criar um servidor Minecraft num VPS ou num servidor dedicado'
excerpt: 'Saiba como instalar o seu próprio servidor Minecraft'
updated: 2025-06-06
---

## Objetivo

Minecraft é um videojogo de construção de sucesso global. Deve estar alojado num servidor se deseja jogar em modo multi-jogador.

Pode alugar um servidor Minecraft pré-construído ou configurá-lo você mesmo num [VPS](/links/bare-metal/vps) ou num [servidor dedicado](/links/bare-metal/bare-metal). Isto permitir-lhe-á realizar economias e dar-lhe-á o controlo total da sua instância de jogo.

**Este tutorial descreve como lançar um servidor Minecraft Java Edition num VPS da OVHcloud e testar a sua conectividade.**

> [!warning]
> Este manual explica-lhe como utilizar uma ou várias soluções da OVHcloud com ferramentas externas e descreve as ações a efetuar num contexto específico. Poderá ter de adaptar as instruções à sua situação.
>
> Se tiver dificuldades em aplicar estas instruções, recomendamos que recorra a um [fornecedor especializado](/links/partner). Para mais informações, consulte a secção [Quer saber mais?](#gofurther).
>

## Requisitos

- Dispor de um [VPS](/links/bare-metal/vps) na sua conta OVHcloud
- Ter instalado uma distribuição GNU/Linux no servidor
- Dispor de um acesso administrador (sudo) via SSH ao seu servidor
- Ter uma compreensão básica da administração GNU/Linux

## Instruções

> [!primary]
> Este tutorial baseia-se na versão 1.21 do Minecraft Java Edition e na versão 24.0.1 do OpenJDK.
>

### Etapa 1: preparar o servidor

O primeiro passo consiste em configurar o seu VPS para uma instalação de Minecraft.
<br>É recomendado encomendar um novo VPS ou reinstalar um já existente a partir do seu [Área de Cliente OVHcloud](/links/manager), usando a última versão disponível do Ubuntu ou Debian. Consulte o nosso guia [Primeiros passos](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps#reinstallvps), se necessário.

Depois de instalar o sistema operativo, ligue-se ao VPS em SSH, conforme descrito no manual "[VPS - primeira utilização](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)".

Em primeiro lugar, atualize os pacotes com as suas últimas versões:

```sh
$ sudo apt update
```

```sh
$ sudo apt full-upgrade
```

Utilize o seguinte comando para garantir que todos os pacotes necessários estão instalados:

```sh
$ sudo apt install screen nano wget git
```

Instale o pacote Java:

```sh
$ sudo apt install openjdk-24-jdk
```

Para evitar criar vulnerabilidades no seu sistema, crie um utilizador chamado "minecraft" que executará as ações do servidor:

```sh
$ sudo adduser minecraft --disabled-password
```

São-lhe solicitadas várias informações; basta que pressione a tecla `Entrada`{.action} para as validar.

O utilizador foi criado. Tenha em conta que não foi especificada nenhuma palavra-passe para este utilizador. É normal porque a conta só está acessível quando já está conectada por SSH com a sua própria conta de utilizador.

Migre para o novo utilizador:

```sh
$ sudo su - minecraft
```

> [!primary]
>
> Os comandos seguintes devem ser executados pelo utilizador "minecraft".
>

Para terminar a preparação da instalação, crie uma pasta chamada `server`.

```sh
$ mkdir ~/server && cd ~/server
```

### Etapa 2: instalar o seu servidor Vanilla Minecraft

> [!primary]
>
> Um servidor "Vanilla" é uma instância sem quaisquer add-ons ou plug-ins. Irá experimentar o jogo da forma como foi criado pelos criadores.
>

Primeiro, deve copiar/colar o link de download do software do servidor.
<br>No [site oficial do Minecraft](https://minecraft.net/download/server), clique com o botão direito do rato no link de download e selecione `Copiar o endereço do link`{.action}.

![Download do servidor](images/jar_file_download.png){.thumbnail}

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
<br>Consulte as condições gerais no [site oficial do Minecraft](https://www.minecraft.net/).

O seu servidor está pronto para ser lançado.

Na etapa 1, instalámos o pacote `screen` que permite abrir várias sessões do terminal (*shell*). Vamos iniciar o Minecraft numa nova sessão que pode ser realizada no fundo. A utilização de `screen` pode ser muito prática pois permite-lhe lançar vários servidores Minecraft em simultâneo.

Em primeiro lugar, vamos criar um novo `shell` chamado `minecraft1`:

```sh
~/server$ screen -S minecraft1
```

A janela ativa do seu terminal muda automaticamente para uma nova sessão `shell`. Se necessário, pode criar outras `shells` e listá-las através do seguinte comando:

```sh
~/server$ screen -ls
```

Para se desassociar do `shell` (e mantê-lo durante a execução), prima `Ctrl`{.action}, depois `a`{.action}, depois `d`{.action} no seu teclado.

Para passar de uma `nome_shell` chaminé para outra, utilize o seguinte comando:

```sh
~/server$ screen -x nome_shell
```

Também pode pressionar o `Ctrl`{.action}, depois `a`{.action} e depois `n`{.action} no teclado.

Na `shell` anteriormente criada "minecraft1", lançar o servidor Minecraft com o seguinte comando. (Utilize `ls` para verificar o nome do ficheiro caso este seja diferente). 

```sh
~/server$ java -Xmx1024M -Xms1024M -jar server.jar nogui
```

- `Xmx1024M`: Isto configura o servidor para iniciar com 1024 MB ou 1 GB de RAM. Este limite pode ser aumentado se você quiser que seu servidor inicie com mais RAM.
- `Xms1024M`: Isto permite que o servidor utilize um máximo de 1024M de RAM. Pode aumentar este limite se quiser que o seu servidor funcione com mais RAM, para acomodar mais jogadores ou se sentir que o seu servidor está a funcionar lentamente.
- `jar`: Especifica o arquivo jar do servidor a ser executado.
- `nogui`: Diz para o servidor não rodar uma GUI.

Você também pode usar o comando abaixo:

```sh
~/server$ java -jar server.jar
```

Uma vez que o servidor esteja funcionando, você terá o seguinte resultado:

```console
[14:52:58] [Server thread/INFO]: Done (41.530s)! For help, type "help"
```

Para parar o seu servidor, insira o comando de `stop`.

### Etapa 3: ligar-se ao servidor

A sua instância de servidor está agora funcional. Para jogar jogos, descarregue o cliente Minecraft a partir [do website oficial](https://www.minecraft.net/).

Instale e lance o cliente para o seu sistema operativo e ligue-se.

![Ligação ao servidor](images/login_minecraft.png){.thumbnail}

No ecrã seguinte, indique o nome do servidor no campo `Server Name` e o endereço IP do servidor no campo `Server Address`.

![Informações sobre o servidor](images/minecraft_server_login.png){.thumbnail}

Por predefinição, nenhuma porta deve ser introduzida.

### Conclusão

O seu servidor Vanilla Minecraft já está instalado no seu VPS.

Tenha em conta que este guia de instalação é igualmente válido para um [servidor dedicado OVHcloud](/links/bare-metal/bare-metal) ou uma instância [Public Cloud](/links/public-cloud/compute). Estas soluções também lhe permitem usufruir de recursos físicos garantidos e estáveis a qualquer momento do dia, uma vez que o material é dedicado.

## Quer saber mais? <a name="gofurther"></a>

Para adicionar add-ons, mods e configurar mais detalhadamente o seu servidor Minecraft, queira consultar a seguinte documentação oficial: <https://help.mojang.com/>.

Fale com a nossa [comunidade de utilizadores](/links/community).
