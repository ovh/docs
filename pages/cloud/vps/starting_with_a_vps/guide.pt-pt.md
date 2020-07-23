---
title: 'VPS - primeira utilização'
excerpt: 'Saiba como instalar e começar a gerir um VPS'
slug: instalar-gerir-vps
section: 'Primeiros passos'
order: 1
---

**Última atualização: 22/07/2020**
 
## Objetivo

Um VPS (Virtual Private Server) é um servidor dedicado virtual. Ao contrário de um alojamento web (com recursos partilhados), cuja gestão técnica cabe à OVHcloud, a gestão e a utilização de um VPS é da total responsabilidade do cliente.

**Este guia fornece instruções sobre a instalação e a gestão básica do VPS que acabou de contratar.**


> [!warning]
>
> A utilização e a gestão dos serviços da OVHcloud são da responsabilidade do cliente. A OVHcloud não tem permissões de acesso aos VPS e o cliente é o único responsável pela gestão e pela segurança do serviço. Este guia fornece as instruções necessárias para realizar as operações mais habituais. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção abaixo intitulada: «Quer saber mais?»
> 


## Requisitos

- Ter contratado um [VPS OVHcloud](https://www.ovhcloud.com/pt/vps/){.external}.
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Ter recebido um e-mail depois da instalação com os dados de utilizador.

## Instruções

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, dirija-se à secção `Server`{.action} e selecione o seu servidor no menu à esquerda, em `VPS`{.action}. 

Este painel de controlo contém informações importantes sobre o serviço e permite-lhe realizar operações essenciais. O seu aspeto pode variar em função da gama do VPS. 

- Se acabou de encomendar um VPS, a referência terá a seguinte forma: *vps-XXXXXXX.vps.ovh.net* (em que os *X* são uma sequência de algarismos e letras). 
- Se dispõe de um VPS mais antigo, reparará que a referência tem uma estrutura diferente: *vpsXXXX.ovh.net* (em que os *X* são algarismos). 

Quanto à gama atual de VPS, continue a ler este guia a partir da secção **Primeiros passos (gama VPS atual)**. 

Quanto a modelos VPS mais antigos, prossiga a leitura deste guia clicando na seguinte ligação: [Primeiros passos (gama VPS antiga)](./#primeiros-passos-gama-vps-antiga_1).

### Primeiros passos (gama VPS atual)

#### Conexão ao VPS (gama atual)

Durante a primeira instalação ou uma reinstalação a partir da Área de Cliente, será criado um utilizador com plenos direitos. Vai receber um e-mail com todos os dados de identificação.
O nome de utilizador será gerado em função do sistema operativo, por exemplo, «ubuntu» ou «debian». 

Poderá conectar-se ao VPS em SSH com o nome de utilizador e a palavra-passe. O SSH é um protocolo de comunicação segura. Para saber mais, consulte [este guia de introdução ao SSH para os servidores dedicados OVHcloud](../../dedicated/ssh-introducao/). Pode aceder ao servidor através de um terminal de linhas de comando (Linux ou Mac) ou via um programa em Windows (recomendamos o PuTTy).

Ao utilizar o PuTTy, por exemplo, abra simplesmente a aplicação e introduza o nome do servidor ou o endereço IPv4 para estabelecer a ligação. Depois de introduzir o nome de utilizador e a palavra-passe, poderá aceder à interface de linhas de comando (CLI).

![utilização putty](images/putty1.png){.thumbnail}

Uma vez aberto o terminal, introduza o comando seguinte para se conectar ao VPS com as informações fornecidas no e-mail (nome de utilizador e endereço IPv4):

```sh
ssh nome_de_utilizador@IPv4_do_VPS
```

Como estará conectado com privilégios root (utilizador sudo), pode introduzir comandos para efetuar tarefas de administração. Mas, antes de mais, é recomendável que altere a sua palavra-passe:

```sh
$ sudo passwd
New password:
Retype new password:
passwd: password updated successfully
```

Atenção: as palavras-passe não são exibidas. De seguida, passe para o utilizador root e defina a palavra-passe admin:

```sh
$ sudo su -
# passwd
New password:
Retype new password:
passwd: password updated successfully
```

#### Instalação ou reinstalação do VPS (gama atual)

Pode realizar qualquer reinstalação diretamente a partir da Área de Cliente OVHcloud. No separador «Home», procure «SO/Distribuição» na caixa **O seu VPS**. Clique em `...`{.action} e, a seguir, em `Reinstalar o meu VPS`{.action}.

![Reinstalação do VPS](images/2020panel_02.png){.thumbnail}

Depois, surge uma janela onde poderá escolher:

- o sistema operativo;
- uma chave SSH, caso já tenha criado chaves na Área de Cliente.

![Reinstalação do VPS](images/2020panel_01.png){.thumbnail}

> [!primary]
>
> Determinados sistemas operativos ou plataformas proprietárias, como o Plesk ou cPanel, requerem licenças que implicam custos adicionais. As licenças podem ser geridas a partir da Área de Cliente OVHcloud: aceda à secção `Server` na parte superior e clique em `Licenças`{.action}.
> 
> Para que um sistema operativo **Windows** se execute num VPS, deve ser **selecionado durante a respetiva encomenda**. Um VPS com um sistema operativo diferente instalado não pode ser reinstalado com Windows seguindo o método indicado anteriormente.
>  

Durante a instalação, irá surgir uma barra de progresso. Esta indica o andamento do processo. A reinstalação pode demorar até 30 minutos.

### Primeiros passos (gama VPS antiga)

#### Conexão ao VPS (gama antiga)

Após a instalação (ou reinstalação) do VPS, é enviado um e-mail com a palavra-passe de acesso root via SSH. O SSH é um protocolo de comunicação segura. Para saber mais, consulte [este guia de introdução ao SSH para os servidores dedicados OVHcloud](../../dedicated/ssh-introducao/). 

O acesso ao VPS é feito através do terminal de linhas de comando (Linux ou MAC) ou, no caso dos sistemas Windows, por intermédio de um software de terceiros (por exemplo, PuTTy).

Ao utilizar o PuTTy, por exemplo, abra simplesmente a aplicação e introduza o nome do servidor ou o endereço IPv4 para estabelecer a ligação. Depois de introduzir o nome de utilizador e a palavra-passe, poderá aceder à interface de linhas de comando (CLI).

![utilização putty](images/putty1.png){.thumbnail}

Abra o terminal e execute um dos comandos abaixo para aceder ao VPS.

```sh
ssh root@IPv4_do_seu_VPS
```

Ou:

```sh
ssh root@Referência_do_seu_VPS
```

#### Instalação ou reinstalação do VPS (gama antiga)

A instalação é realizada através da Área de Cliente. Para tal, clique no botão `Reinstalar o meu VPS`{.action}:

![Reinstalação do VPS](images/reinstall_manager.png){.thumbnail}

Depois, surge uma janela onde poderá escolher:

- o sistema operativo;
- o idioma;
- uma chave SSH, caso já tenha criado chaves na Área de Cliente.


![Menu de opções de reinstalação](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
> Determinados sistemas operativos ou plataformas proprietárias, como o Plesk ou cPanel, requerem licenças que implicam custos adicionais. As licenças podem ser geridas a partir da Área de Cliente OVHcloud: aceda à secção `Server` na parte superior e clique em `Licenças`{.action}.
> 
> Para que um sistema operativo **Windows** se execute num VPS, deve ser **selecionado durante a respetiva encomenda**. Um VPS com um sistema operativo diferente instalado não pode ser reinstalado com Windows seguindo o método indicado anteriormente.
> 

Durante a instalação, irá surgir uma barra de progresso. Esta indica o andamento do processo. A reinstalação pode demorar até 30 minutos.

### Como proteger o VPS

O cliente é responsável pela gestão do VPS, incluindo a segurança do servidor e dos dados nele armazenados. Desta forma, é o único responsável pelos dados e pela segurança destes.

Para saber mais sobre a segurança do VPS, consulte o guia [Como proteger um VPS](../como-proteger-vps/){.external}.


### Como proteger um domínio com um certificado SSL

Depois de instalar e proteger o VPS, é necessário garantir a segurança do seu domínio e do respetivo site. A instalação de um certificado SSL permite aceder ao seu site de forma segura, através do protocolo *https* (em vez do protocolo *http*).

O certificado SSL pode ser instalado manualmente pelo utilizador no VPS. Para tal, consulte os manuais do sistema operativo ou do software de gestão do VPS.

Se preferir uma instalação automática, recomendamos o [SSL Gateway](https://www.ovh.pt/ssl-gateway/). Para mais informação, consulte a [página do produto](https://www.ovh.pt/ssl-gateway/){.external} ou o [manual](https://docs.ovh.com/pt/ssl-gateway/){.external} relativo a esta oferta.


## Quer saber mais?

Consulte o manual [Introdução ao SSH](../../dedicated/ssh-introducao/){.external}.

Ou fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.