---
title: "Tutorial - Como usar o PuTTY para conexões SSH e autenticação"
excerpt: "Saiba como aceder ao servidor cloud ou ao alojamento web e gerir as chaves SSH com o software cliente SSH PuTTY"
updated: 2024-11-11
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

O [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) é um software cliente SSH open source com uma interface gráfica do utilizador. Ele foi desenvolvido para o Windows, mas também está disponível para outros sistemas operativos e inclui recursos úteis, como gerenciamento de chaves SSH.

**Este tutorial explica como utilizar o PuTTY para proteger as ligações ao seu serviço OVHcloud através do protocolo SSH.**

## Requisitos

- [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) instalado no seu equipamento local
- Conhecimentos de base do [protocolo SSH e da sua utilização](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)
- Ter acesso à [Área de Cliente OVHcloud](/links/manager)

> [!warning]
> A OVHcloud fornece serviços cuja configuração e gestão são da sua responsabilidade. Este tutorial explica como utilizar as soluções da OVHcloud com ferramentas externas. Poderá ser necessário adaptar algumas instruções específicas ao sistema operativo da estação de trabalho local ou do servidor.
>
> Recomendamos que entre em contacto com um [fornecedor de serviços especializado](/links/partner) ou [nossa comunidade](/links/community) se encontrar dificuldades.
>

## Instruções

### Apresentação do conteúdo

- [Instalação do PuTTY](#installation)
- [Início de sessão SSH com nome de utilizador e palavra-passe](#sshconnect1)
    - [Alojamento partilhado](#webhosting)
    - [Servidor dedicado ou VPS](#cloudserver)
- [Início de sessão SSH com nome de utilizador e autenticação com chave SSH](#sshconnect2)
    - [Criação de chaves SSH com PuTTY](#puttygen)
    - [Transferência das chaves SSH públicas para o seu servidor](#transferkeys)
    - [Ligação ao servidor](#puttykeys)
    - [Gestão das chaves SSH privadas num periférico local (PuTTY authentication agent)](#pageant)
- [Utilização das sessões de ligação PuTTY](#sessions)
- [Exemplo de utilização: Como utilizar as ferramentas PuTTY para configurar ligações seguras aos servidores OVHcloud (VPS, servidor dedicado, instância Public Cloud)](#example)


<a name="installation"></a>

### Instalação do PuTTY

Transfira a última versão do cliente PuTTY a partir do [site oficial](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) e instale-a no seu sistema (ou descomprima os ficheiros executáveis). As versões suportadas do PuTTY também podem ser disponibilizadas através do seu gestor de pacotes ou [Homebrew](https://brew.sh/).

O pacote de instalação padrão recomendado inclui várias aplicações que melhoram as funcionalidades do PuTTY, nomeadamente para as transferências de ficheiros (`psftp`, `pscp`, não abrangidas neste tutorial) e a gestão das chaves SSH (`PuTTYgen`, `Pageant`, necessárias para as partes correspondentes abaixo).

> [!primary]
> As seguintes instruções são baseadas em um sistema operativo Windows. As funcionalidades do software PuTTY em si devem ser semelhantes em todos os sistemas operativos. No entanto, se não utilizar o PuTTY num computador com Windows, poderá ser necessário consultar a documentação do sistema operativo ou a [FAQ oficial](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html) e a [documentação do PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/docs.html).
>

> [!success]
> Pode ter várias instâncias do PuTTY e das suas ferramentas "companheiras" abertas simultaneamente. Por exemplo, você pode abrir uma janela para seguir os passos do tutorial e uma segunda para testar as conexões.
>

<a name="sshconnect1"></a>

### Ligações SSH com PuTTY - Nome de utilizador e palavra-passe

Esta secção explica como estabelecer uma primeira ligação SSH aos seguintes serviços OVHcloud:

- [Espaço de armazenamento FTP de um alojamento web compatível com SSH](/links/web/hosting-compare)
- [Servidor dedicado](/links/bare-metal/bare-metal)
- [VPS](/links/bare-metal/vps)

<a name="webhosting"></a>

#### Alojamento web

Vai precisar do nome de cluster do seu alojamento web que encontrará na sua [Área de Cliente OVHcloud](/links/manager), bem como do nome de utilizador FTP e da palavra-passe. Consulte [o guia correspondente](/pages/web_cloud/web_hosting/ftp_connection) se precisar de mais informações sobre este método de acesso.

/// details | Ligação a um alojamento web

Abra o PuTTY e introduza as credenciais FTP do seu alojamento nos campos previstos para esse efeito.

- `Host Name (or IP address)`: **ftp_username@hosting_cluster_name** (exemplo: **yourlogin@ssh.cluster042.hosting.ovh.net**)
- `Port`: 22

![putty](/pages/assets/screens/other/web-tools/putty/putty1.png){.thumbnail}

Clique em `Open`{.action}.

Quando se inicia pela primeira vez a sessão, é apresentada a mensagem "PuTTY Security Alert" avisa-o dos possíveis riscos. Isto não é normalmente prejudicial, desde que se ligue a um host de confiança (por exemplo, o armazenamento FTP de um alojamento web).  
Clique em `Accept`{.action} para continuar. Se selecionar `Connect Once`{.action}, a marca do alojamento web não será guardada na cache e a janela de alerta aparecerá na próxima ligação. Pode consultar mais detalhes no nosso [guia de introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

A janela de linha de comandos (PuTTY terminal) é aberta e solicita que você forneça a palavra-passe de login.

Introduza a palavra-passe que criou [atribuída a este utilizador](/pages/web_cloud/web_hosting/ftp_connection). Você pode colar a cadeia de palavra-passe nesta janela através de um clique direito.

Tenha em atenção que **uma mensagem de palavra-passe não apresentará as suas teclas** num terminal PuTTY. Exemplo de saída:

```console
Using username "yourlogin".
yourlogin@ssh.cluster042.hosting.ovh.net's password:
```

```console
Welcome to OVH
yourlogin@ssh.cluster042.hosting.ovh.net (php/7.3/production/stable) ~ $ 
```

Consulte o nosso guia [Acesso SSH para os alojamentos web da OVHcloud](/pages/web_cloud/web_hosting/ssh_on_webhosting) para conhecer as ações possíveis no espaço de armazenamento FTP do seu alojamento web.

A PuTTY pode guardar as credenciais e os parâmetros de uma ligação SSH enquanto "session". Isto permite estabelecer ligação a hosts conhecidos ou dispositivos de rede local sem introduzir as respetivas informações. Aprenda a utilizar sessões PuTTY na [secção abaixo](#sessions).

///

<a name="cloudserver"></a>

#### Servidor dedicado ou VPS

Vai precisar do endereço IP do seu servidor que encontrará na sua [Área de Cliente OVHcloud](/links/manager), assim como do nome da conta de utilizador que deseja utilizar para esta sessão de ligação. Não hesite em consultar os nossos manuais "Primeiros passos" se deseja obter mais pormenores sobre este assumpto:

- [Servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Servidor dedicado da gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

/// details | Como aceder a um sistema anfitrião remoto

Abra o PuTTY e insira as credenciais de login nos campos apropriados.

- `Host Name (or IP address)`: **username@IPv4_server** (exemplo: **ubuntu@203.0.113.101**)
- `Port`: 22 (exceto se alterou o número da porta SSH do seu servidor)

![putty](/pages/assets/screens/other/web-tools/putty/putty2.png){.thumbnail}

Clique no botão `Open`{.action}.

Quando se inicia pela primeira vez a sessão, é apresentada a janela "PuTTY Security Alert," avisando-o dos possíveis riscos. Este não é normalmente um problema, desde que se ligue a um host de confiança (como o seu próprio servidor seguro).  
Clique em `Accept`{.action} para continuar. Se selecionar `Connect Once`{.action}, a marca do servidor não será guardada na cache e o alerta será apresentado novamente na próxima ligação. Pode consultar mais detalhes no nosso [guia de introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

A janela de linha de comandos (PuTTY terminal) é aberta e solicita a palavra-passe da conta de utilizador. Você pode colar a cadeia de palavra-passe nesta janela através de um clique direito.

Tenha em atenção que**uma mensagem de palavra-passe não apresentará as suas teclas** num terminal PuTTY. Exemplo de saída:

```console
Using username "ubuntu".
ubuntu@203.0.113.101's password:
```

```console
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-47-generic x86_64)
```

Para saber mais sobre as ligações SSH, consulte o guia de [introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

PuTTY pode guardar os parâmetros de uma ligação SSH enquanto "session". Isto permite-lhe estabelecer ligação a hosts remotos ou dispositivos de rede local conhecidos sem introduzir os dados para eles. Saiba como utilizar **PuTTY sessions** na [secção correspondente deste tutorial](#sessions).

///

<a name="sshconnect2"></a>

### Ligações SSH com PuTTY - Nome de utilizador e chave de autenticação (ficheiros de chaves SSH)

Esta parte do tutorial explica como utilizar o SSH com **autenticação por par de chaves** em PuTTY para se ligar aos seguintes serviços OVHcloud:

- [Instância Public Cloud](/links/public-cloud/public-cloud)
- [Servidor dedicado](/links/bare-metal/bare-metal)
- [VPS](/links/bare-metal/vps)

Vai precisar do endereço IP do seu servidor que encontrará na sua [Área de Cliente OVHcloud](/links/manager), assim como do nome da conta de utilizador que deseja utilizar para esta sessão de ligação. Não hesite em consultar os nossos manuais "Primeiros passos" se deseja obter mais pormenores sobre este assumpto:

- [Instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)
- [Servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Servidor dedicado da gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)


> [!primary]
>
> O PuTTY armazena os ficheiros de chaves num formato específico que os torna incompatíveis com os ficheiros de chave SSH criados com o cliente **OpenSSH**. Se pretender utilizar uma **chave privada** anteriormente criada com o cliente SSH em linha de comandos (por exemplo, para um [servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) ou uma [instância Public Cloud](/pages/public_cloud/compute/creating-ssh-keys-pci)), deverá primeiro utilizar [a converter para o formato PuTTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt).
>

<a name="puttygen"></a>

#### Criar chaves SSH (PuTTY key generator)

Esta etapa requer a ferramenta complementar **PuTTY key generator** (PuTTYgen).

/// details | Como criar chaves SSH com PuTTYgen

##### Etapa 1: Criar um par de chaves

Abra a aplicação PuTTYgen e selecione o algoritmo de encriptação. Este exemplo utiliza **RSA**. Introduza "4096" no campo `Number of bits in a generated key:` em baixo.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen1.png){.thumbnail}

Clique no botão `Generate`{.action}.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen2.png){.thumbnail}

Ser-lhe-á exibida uma barra de progresso. Mova o cursor do rato sobre a área abaixo da barra de progresso até que o PuTTYgen disponha de dados aleatórios suficientes para começar a gerar a sua chave.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen.gif){.thumbnail}

Dispõe agora de um **par de chaves** composto por dois elementos:

- **Public key**: a cadeia de chaves que será armazenada nos hosts remotos aos quais pretende estabelecer a ligação.
- **Private key**: a cadeia de chaves que fica no dispositivo local a partir do qual se liga a um ou vários hosts remotos.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen3.png){.thumbnail}

Opcionalmente, você pode alterar o campo `Comment` com sua própria descrição. Ela será exibida pelas ferramentas PuTTY ao usar a chave.

##### Etapa 2: Guardar a chave privada

Introduza uma frase secreta para proteger o seu ficheiro de chave privada nos campos `Key passphrase` e `Confirm`. A melhor abordagem consiste em utilizar um gestor de palavras-passe para criar e armazenar uma palavra-passe composta de várias palavras (passphrase).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen4.png){.thumbnail}

Clique no botão `Save private key`{.action}. Selecione uma pasta para os seus ficheiros de chaves ou crie uma nova, por exemplo, `putty_key_files`.  
Introduza um nome para o seu ficheiro e guarde-o. Agora você deve ter um novo arquivo **private key** com a extensão `ppk` (*PuTTY private key*) em sua pasta.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen5.png){.thumbnail}

> [!warning]
>
> O acesso aos servidores remotos é tão seguro como o periférico cliente que armazena a chave privada. Por isso, é fundamental proteger o seu dispositivo e os ficheiros importantes que contém contra o acesso não autorizado.
>
> Para uma maior comodidade, armazene as frases secretas num gestor de palavras-passe no seu dispositivo, como a solução open source **KeePass**, e utilize a ferramenta [Pageant](#pageant) para as ligações baseadas em chaves.
>

O botão `Save public key`{.action} na interface PuTTYgen converterá o canal **public key** no formato "SSH-2 standard format" e, em seguida, criará um ficheiro que contém este canal. No entanto, as cadeias de chaves deste formato não são relevantes para este tutorial.

##### Etapa 3: Preparar a chave pública

A próxima etapa consiste em armazenar a **chave pública** no host remoto ao qual pretende estabelecer a ligação. O formato da cadeia de chaves, tal como é apresentado na janela PuTTYgen em `Public key for pasting into OpenSSH authorized_keys file`, é compatível com OpenSSH. Você precisará da cadeia de chave exata em uma única linha.

> [!primary]
> Não é necessário armazenar a chave pública como ficheiro, pois pode sempre recuperá-la a partir do ficheiro **private key**. Para isso, abra o PuTTYgen e clique no botão `Load`{.action}. Selecione o seu ficheiro de chave `ppk` e insira a sua frase secreta para abri-lo.
>
> Você também pode copiar a cadeia de chave pública e colá-la em um arquivo de texto simples (sem interromper a cadeia de chave por quebras de linha).
>

Para continuar com [próxima etapa](#transferkeys), realce **a toda a cadeia de chaves** e copie-a.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

///

<a name="transferkeys"></a>

#### Transferência das chaves SSH públicas para o seu servidor

As ações neste passo dependem do tipo de serviço que está a utilizar e se vai instalar um novo sistema operativo ou adicionar a chave a um sistema em utilização.

/// details | Como adicionar uma chave SSH pública aquando da instalação ou reinstalação de um SO (Área de Cliente OVHcloud)

Clique no separador do seu serviço:

> [!tabs]
> **Instance Public Cloud**
>>
>> Destaque e copie **toda a cadeia de chaves públicas** que criou [no passo anterior](#puttygen) a partir da janela PuTTYgen (abra primeiro o **ficheiro de chaves privadas** correspondente, se necessário). De seguida, utilize-a tal como indicado na secção correspondente do nosso [guia relativo à criação de uma instância Public Cloud na Área de Cliente OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps)
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>
> **Servidor dedicado**
>>
>> Destaque e copie **toda a cadeia de chaves públicas** que criou [no passo anterior](#puttygen) a partir da janela PuTTYgen (abra primeiro o **ficheiro de chaves privadas** correspondente, se necessário). De seguida, introduza-a no campo adequado durante a instalação. Encontre os detalhes no nosso [guia de utilização de um servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>
> **VPS**
>>
>> Destaque e copie **toda a cadeia de chaves públicas** que criou [no passo anterior](#puttygen) a partir da janela PuTTYgen (abra primeiro o **ficheiro de chaves privadas** correspondente, se necessário). De seguida, introduza-a no campo adequado durante a instalação. Consulte os detalhes no nosso [manual de inicio com um VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>


///

**Como adicionar uma chave SSH pública num SO em curso de execução**

Selecione o tipo de serviço:

/// details | Instância Public Cloud

Realce e copie **a cadeia de chaves públicas completa** que você criou [no passo anterior](#puttygen) a partir da janela PuTTYgen (abra primeiro o **ficheiro de chaves privadas** correspondente, se necessário). De seguida, siga as instruções fornecidas no manual adequado:

- [Como configurar chaves SSH adicionais numa instância](/pages/public_cloud/compute/configuring_additional_ssh_keys)
- [Como substituir um par de chaves SSH numa instância Public Cloud](/pages/public_cloud/compute/replacing_lost_ssh_key)

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

///


/// details | Servidor dedicado ou VPS

[Iniciar sessão no servidor](#cloudserver) com a conta de utilizador correta. Crie a pasta `.ssh` (se não existir):

```bash
mkdir ~/.ssh
```

Para armazenar a chave para o utilizador atual, abra (ou crie) o ficheiro `authorized_keys` com o seu editor de texto preferido (`nano` é utilizado neste exemplo):

```bash
nano ~/.ssh/authorized_keys
```

Realce e copie **a cadeia de chaves públicas completa** que você criou [no passo anterior](#puttygen) a partir da janela PuTTYgen (abra primeiro o **ficheiro de chaves privadas** correspondente, se necessário).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

Cole a sua **cadeia de chave pública completa** neste ficheiro. Certifique-se de que a cadeia da chave está sempre ininterrupta, sem quebras de linha.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen7.png){.thumbnail}

Salve o arquivo e saia do editor. Reinicie o seu servidor (`sudo reboot`) ou reinicie apenas o serviço OpenSSH com um dos seguintes comandos (o comando apropriado pode variar em função do seu sistema operativo):

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Saia da sessão PuTTY em curso:

```bash
logout
```

Para verificar se a chave foi configurada corretamente, inicie sessão no seu servidor seguindo os [passos descritos abaixo](#puttykeys).

///

<a name="puttykeys"></a>

#### Ligação ao servidor

Para se ligar a um host remoto (instância Public Cloud, servidor dedicado ou VPS), deve ter [criado o par de chaves](#puttygen) e [adicionado a cadeia de chaves públicas ao seu servidor](#transferkeys).

| ![putty](/pages/assets/screens/other/web-tools/putty/putty3.png){.thumbnail} |
|---| 
| 1\. Abra o PuTTY.<br> 2\. Expanda o nó `SSH` em `Connection` na árvore `Category`.<br> 3\. Desenvolva o nó `Auth`.<br> 4\. Clique em `Credentials` para visualizar as definições correspondentes.<br> 5\. Clique no botão `Browse`{.action}.<br> 6\. Selecione o ficheiro de chave privada (`keyfile.ppk`) na pasta onde o guardou. |

Volte para `Session` no menu à esquerda. Introduza as credenciais de ligação nos campos apropriados.

![putty](/pages/assets/screens/other/web-tools/putty/putty2.png){.thumbnail}

- `Host Name (or IP address)`: **username@IPv4_server** (exemplo: **ubuntu@203.0.113.101**)
- `Port`: 22 (exceto se alterou o número da porta SSH do seu servidor)

Clique no botão `Open`{.action}. O terminal PuTTY irá pedir-lhe a palavra-passe do ficheiro de chave. Você pode colar a cadeia de palavra-passe nesta janela através de um clique direito.

Tenha em atenção que **uma mensagem de palavra-passe não apresentará as suas teclas** num terminal PuTTY. Exemplo de saída:

```console
Using username "ubuntu".
Authenticating with public key "rsa-key-example"
Passphrase for key "rsa-key-example":
```

```console
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-47-generic x86_64)
```

Para uma abordagem mais prática, descubra como associar um ficheiro de chave (através de Pageant) e [registar esta ligação](#sessions) nas secções abaixo.

<a name="pageant"></a>

#### Gestão das chaves SSH num periférico local com Pageant (PuTTY authentication agent)

Se você tiver seguido as instruções acima, poderá acessar seu host remoto usando a autenticação de chave. Embora a ligação em si não necessite de uma palavra-passe, o PuTTY irá sempre pedir a palavra-passe do ficheiro de chave privada correspondente.

![pageant](/pages/assets/screens/other/web-tools/putty/pterminal.png){.thumbnail}

Existem duas formas de utilizar o Pageant para estabelecer ligações mais rápidas:

- Você não precisa selecionar o arquivo de chave privada para cada conexão no PuTTY.
- Você só precisa inserir a frase secreta para o arquivo de chave privada uma vez, quando o arquivo de chave é aberto por Pageant.

Abra a aplicação Pageant [no seu computador](#installation). Uma vez que a janela da chave de pagamento não se abre automaticamente, deve clicar duas vezes no ícone da chave de pagamento na barra de tarefas (tabuleiro do sistema ou *system tray* no Windows).

![pageant](/pages/assets/screens/other/web-tools/putty/systray.png){.thumbnail}

Esta ação irá abrir a **Lista de chaves do pagante**. Clique no botão `Add Key`{.action} e selecione o ficheiro de chave privada (`keyfile.ppk`) na pasta onde o guardou.

![pageant](/pages/assets/screens/other/web-tools/putty/pageant1.png){.thumbnail}

Introduza a frase secreta para este ficheiro de chave. A chave está agora na lista e será usada por PuTTY como o Pageant está em execução.

![pageant](/pages/assets/screens/other/web-tools/putty/pageant2.png){.thumbnail}

Mesmo que feche esta janela, o Pageant continuará a ser executado em segundo plano. Funciona enquanto o ícone estiver presente na barra de tarefas.

Se você também salvar sua conexão como uma sessão no PuTTY como descrito na próxima secção, você pode abrir conexões remotas com apenas alguns cliques.

<a name="sessionskeys"></a>

### Utilização de sessões de ligação PuTTY

A PuTTY tem a possibilidade de armazenar parâmetros para diferentes ligações como sessões, o que lhe permite estabelecer uma ligação ao host remoto (alojamento web, servidor, instância, dispositivo de rede local) mais rapidamente.

Selecione o método de ligação adequado:

/// details | Início de sessão com o nome de utilizador e a palavra-passe

Para armazenar um [login baseado em palavra-passe](#sshconnect1), execute as seguintes ações:

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions1.png){.thumbnail} |
|---| 
| 1\. Abra o PuTTY.<br> 2\. Introduza as informações de ligação no campo `Host Name (or IP address)`: **username@IPv4_server** (por exemplo: **ubuntu@203.0.113.101**)<br> 3\. Se aplicável, altere o número da porta SSH no campo em `Port`.<br> 4\. Introduza um nome para esta ligação no campo em `Saved Sessions`.<br> 5\. Clique no botão `Save`{.action}. |

Para abrir uma conexão salva anteriormente, execute as seguintes ações:

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions2.png){.thumbnail} |
|---| 
| 1\. Abra o PuTTY.<br> 2\. Faça duplo clique na sessão desejada na lista em `Saved Sessions` ou selecione-a e clique no botão `Open`{.action}. |

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions3.png){.thumbnail} |
|---|
| Na janela do terminal PuTTY, introduza a palavra-passe de utilizador do host remoto. |

///

<a name="sessionskeys"></a>

/// details | Início de sessão com nome de utilizador e chaves de autenticação

Para armazenar um [login baseado em chave](#puttykeys), execute as seguintes ações:

| ![putty](/pages/assets/screens/other/web-tools/putty/sessions4.png){.thumbnail} |
|---| 
| 1\. Abra o PuTTY.<br> 2\. Introduza as informações de ligação no campo `Host Name (or IP address)`: **username@IPv4_server** (por exemplo: **ubuntu@203.0.113.101**)<br> 3\. Se aplicável, edite o número da porta SSH no campo em `Port`. |

| ![putty](/pages/assets/screens/other/web-tools/putty/putty3.png){.thumbnail} |
|---|
| 4\. Expanda o nó `SSH` em `Connection` na árvore `Category`.<br> 5\. Expanda o nó `Auth` na árvore `Category`.<br> 6\. Clique em `Credentials` para ver as respetivas definições.<br> 7\. Clique no botão `Browse`{.action}.<br> 8\. Aceda à pasta que armazena os seus ficheiros de chaves privadas.<br> 9\. Abra o ficheiro de chave em questão. |

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions5.png){.thumbnail} |
|---|
| 10\. Volte para a categoria de configuração `Session` no menu à esquerda.<br> 11\. Introduza um nome para esta ligação no campo em `Saved Sessions`.<br> 12\. Clique no botão `Save`{.action}. |

<a name="qconnect"></a>

Agora pode abrir rapidamente qualquer ligação com base numa chave que tenha sido guardada a partir da janela PuTTY ou através de Pageant:

| **PuTTY** | **Pageant** |
|---|---| 
| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions2.png){.thumbnail}<br> 1\. Abra o PuTTY.<br> 2\. Faça duplo clique na sessão desejada na lista em `Saved Sessions`. |![pageant](/pages/assets/screens/other/web-tools/putty/pageant3.png){.thumbnail}<br> 1\. Clique com o botão direito do rato no ícone do Pageant na barra de tarefas.<br> 2\. Clique na sessão desejada no submenu `Saved Sessions`. |

///

Para alterar os parâmetros de uma sessão, selecione-a na lista e clique no botão `Load`{.action}.

<a name="example"></a>

### Exemplo de utilização: Como utilizar as ferramentas PuTTY para configurar ligações seguras aos servidores OVHcloud

Este tutorial pode ser aplicado a diferentes cenários e diferentes tipos de conexões.

Seguindo estas etapas por ordem, você configura suas conexões para que elas abram em apenas alguns cliques:

- Etapa 1: [Instalar o pacote PuTTY](#installation)
- Etapa 2: [Criar um par de chaves em PuTTYgen](#puttygen)
- Etapa 3: [Adicionar a chave pública ao host remoto](#transferkeys)
- Etapa 4: [Adicionar chave privada em Pageant](#pageant)
- Etapa 5: [Salvar a conexão como sessão no PuTTY](#sessions)
- Etapa 5: [Ligar-se ao sistema anfitrião remoto através da sessão registada correspondente](#qconnect)

## Go further

[Introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Como criar chaves SSH com OpenSSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Como criar chaves SSH com OpenSSH para as instâncias Public Cloud](/pages/public_cloud/compute/creating-ssh-keys-pci)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).