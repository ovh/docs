---
title: 'VPS - primeira utilização'
excerpt: 'Saiba como instalar e começar a gerir um VPS'
slug: instalar-gerir-vps
section: 'Primeiros passos'
order: 1
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 25/03/2022**
 
## Objetivo

Um VPS (Virtual Private Server) é um servidor dedicado virtual. Ao contrário de um alojamento web (partilhado) onde a gestão técnica é da responsabilidade da OVHcloud, a administração do VPS é da total responsabilidade do cliente.

**Este guia fornece informações de base para o ajudar a gerir o seu VPS.**

> [!warning]
>A OVHcloud fornece-lhe serviços pelos quais é responsável em termos de configuração e gestão. Assim, é responsável pelo seu bom funcionamento.
>
>Se encontrar dificuldades para realizar estas ações, contacte um fornecedor de serviços especializado e/ou discuta o problema com a nossa comunidade de utilizadores em https://community.ovh.com/en/. A OVHcloud não lhe pode fornecer apoio técnico a este respeito.
>

## Requisitos

- Ter contratado um [VPS OVHcloud](https://www.ovhcloud.com/pt/vps/){.external}.
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Dispor dos dados de acesso enviados por e-mail após a instalação

## Instruções

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na secção `Servidor privado virtual`{.action}.

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

```bash
ssh nome_de_utilizador@IPv4_do_VPS
```

Uma vez que está ligado com elevadas taxas de utilização (um utilizador *sudo*), pode introduzir comandos para efetuar tarefas administrativas. Mas, antes de mais, é recomendável que altere a sua palavra-passe:

```bash
~$ sudo passwd nome_de_utilizador
New password:
Retype new password:
passwd: password updated successfully
```

Atenção: as palavras-passe não são exibidas. De seguida, passe para o utilizador "root" e defina a sua palavra-passe admin:

```bash
~$ sudo su -
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

#### Ativação das ligações root

Por razões de segurança, a ligação ao utilizador "root" é desativada de forma padrão. Para autorizar este tipo de ligações, consulte as instruções [deste manual](../root-password/#ativar-a-password-root_1).

#### Reinicialização do VPS (gama atual) <a name="reboot-current-range"></a>

Pode ser necessário um reboot para aplicar configurações atualizadas ou para resolver um problema. Na medida do possível, faça o "soft reboot" do servidor através da seguinte linha de comando:

```bash
reboot
```

No entanto, pode efetuar um "hard reboot" a qualquer momento na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). No separador `Página Inicial`{.action}, clique em `...`{.action} em face de "Boot" na zona **O seu VPS** e, a seguir, em `Reiniciar o meu VPS`{.action} e `Confirmar`{.action} na janela contextual.

![Reiniciar](images/reboot-vps-current01.png){.thumbnail}

#### Instalação ou reinstalação do VPS (gama atual) <a name="reinstallvps"></a>

Pode realizar qualquer reinstalação diretamente a partir da Área de Cliente OVHcloud. No separador «Home», procure «SO/Distribuição» na caixa **O seu VPS**. Clique em `...`{.action} e, a seguir, em `Reinstalar o meu VPS`{.action}.

![Reinstalação do VPS](images/2022panel_02.png){.thumbnail}

Depois, surge uma janela onde poderá escolher:

- o sistema operativo;
- uma [chave SSH](../../dedicated/criar-chaves-ssh-dedicadas/) (opcional).

![Reinstalação do VPS](images/2020panel_01.png){.thumbnail}

> [!primary]
>
> Determinados sistemas operativos ou plataformas proprietárias, como o Plesk ou cPanel, requerem licenças que implicam custos adicionais. As licenças podem ser geridas a partir da Área de Cliente OVHcloud: aceda à secção `Bare Metal Cloud` na parte superior e clique em `Licenças`{.action}.
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

```bash
ssh root@IPv4_do_seu_VPS
```

Ou:

```bash
ssh root@Referência_do_seu_VPS
```

#### Reinicialização do VPS (gama antiga) <a name="reboot-older-range"></a>

Pode ser necessário um reboot para aplicar configurações atualizadas ou para resolver um problema. Na medida do possível, faça o "soft reboot" do servidor através da seguinte linha de comando:

```bash
reboot
```

No entanto, pode efetuar um "hard reboot" a qualquer momento na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). No separador `Página Inicial`{.action}, clique em `Reiniciar o meu VPS`{.action} e `Confirmar`{.action} na janela contextual.

![Reiniciar](images/reboot-vps-older.png){.thumbnail}

#### Instalação ou reinstalação do VPS (gama antiga)

A instalação é realizada através da Área de Cliente. Para tal, clique no botão `Reinstalar o meu VPS`{.action} a partir do separador `Página Inicial`{.action}:

![Reinstalação do VPS](images/reinstall_manager.png){.thumbnail}

Depois, surge uma janela onde poderá escolher:

- o sistema operativo;
- o idioma;
- uma [chave SSH](../../dedicated/criar-chaves-ssh-dedicadas/) (opcional).

![Menu de opções de reinstalação](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
> Determinados sistemas operativos ou plataformas proprietárias, como o Plesk ou cPanel, requerem licenças que implicam custos adicionais. As licenças podem ser geridas a partir da Área de Cliente OVHcloud: aceda à secção `Bare Metal Cloud` na parte superior e clique em `Licenças`{.action}.
> 
> Para que um sistema operativo **Windows** se execute num VPS, deve ser **selecionado durante a respetiva encomenda**. Um VPS com um sistema operativo diferente instalado não pode ser reinstalado com Windows seguindo o método indicado anteriormente.
> 

Durante a instalação, irá surgir uma barra de progresso. Esta indica o andamento do processo. A reinstalação pode demorar até 30 minutos.

### Como proteger o VPS

Como explicado na secção "Objetivo" deste guia, é o administrador do seu VPS. Enquanto tal, é responsável pelos seus dados e pela sua segurança.

Para obter conselhos de base, consulte o guia [Proteger um VPS](../como-proteger-vps/).

### Associar um domínio

A utilização do seu VPS para a publicação de um website implica normalmente a associação de um nome de domínio via DNS. Se gerir o seu domínio na OVHcloud, consulte o nosso guia sobre a [modificação da sua zona DNS](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/) para obter instruções.

### Como proteger um domínio com um certificado SSL

Depois de instalar e proteger o VPS, é necessário garantir a segurança do seu domínio e do respetivo site. A instalação de um certificado SSL permite aceder ao seu site de forma segura, através do protocolo *https* (em vez do protocolo *http*).

O certificado SSL pode ser instalado manualmente pelo utilizador no VPS. Para tal, consulte os manuais do sistema operativo ou do software de gestão do VPS.

Se preferir uma instalação automática, recomendamos o [SSL Gateway](https://www.ovh.pt/ssl-gateway/). Para mais informação, consulte a [página do produto](https://www.ovh.pt/ssl-gateway/){.external} ou o [manual](https://docs.ovh.com/pt/ssl-gateway/){.external} relativo a esta oferta.

## Quer saber mais?

[Introdução ao SSH](../../dedicated/ssh-introducao/)

[Proteger um VPS](../como-proteger-vps/)

[Configurar uma nova instalação do Windows Server](../windows-first-config/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
