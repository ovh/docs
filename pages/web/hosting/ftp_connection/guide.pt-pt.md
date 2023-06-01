---
title: "Aceder ao espaço de armazenamento FTP do alojamento web"
slug: aceder-espaco-de-armazenamento-ftp-alojamento-web
excerpt: "Descubra como aceder ao espaço de armazenamento FTP do alojamento web da OVHcloud"
section: FTP e SSH
order: 02
updated: 2023-06-01
---

**Última atualização: 01/06/2023**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

As ofertas de alojamento web da OVHcloud dão acesso a um espaço de armazenamento FTP que permite publicar ficheiros nos seus websites ou aplicações. O acesso a este espaço é possível através de um utilizador FTP ou SSH com as palavras-passe que lhes estão associadas.

**Descubra como aceder ao espaço de armazenamento FTP do seu alojamento web da OVHcloud.**

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Web Cloud`{.action}.

> [!primary]
> Apenas os alojamentos web **Pro** ou **Performance** permitem a ativação de vários utilizadores FTP e dispõem de ligações em SSH.
>

## Instruções

### Etapa 1 - recuperar as informações necessárias para se ligar

Para se ligar ao espaço de armazenamento FTP, recupere os seguintes elementos:

- o utilizador FTP ou SSH ativo;
- a palavra-passe associada a este utilizador FTP ou SSH;
- o endereço do servidor FTP ou SSH do alojamento web;
- a porta de ligação ao servidor FTP ou SSH do seu alojamento web.

> [!primary]
>
> Estes elementos foram-lhe enviados por e-mail após a subscrição do seu alojamento web. Estão disponíveis a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
>
> **Se já dispõe destes elementos**, consulte o etapa 2 "[Aceder ao espaço de armazenamento](#ftp_storage_access)" deste manual.
>

Se não dispõe destes elementos, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceda à secção `Web Cloud`{.action}. Clique na secção `Alojamentos`{.action} na coluna da esquerda. Escolha o nome do alojamento web em causa e aceda ao separador `FTP - SSH`{.action}. 

Aparecerá a informação relativa ao seu espaço de armazenamento, assim como uma tabela com os utilizadores FTP e SSH criados no seu alojamento web.

![ftpconnect](images/connect-ftp-step1.png){.thumbnail}

> [!primary]
>
> Se deseja criar um novo utilizador FTP/SSH a partir da mesma página, clique no botão `Criar utilizador`{.action} à direita.
> Defina a extensão do nome deste novo `Utilizador`{.action} e o `Pasta raiz`{.action} no qual este utilizador poderá agir e clique em `Seguinte`{.action}.
> Escolha uma palavra-passe para esta nova conta de utilizador, clique em `Seguinte`{.action} e depois clique em `Confirmar`{.action}.
>

Todos os elementos necessários para aceder ao espaço de armazenamento FTP estão presentes nesta página.

Encontre aqui uma descrição das informações essenciais exibidas na página `FTP-SSH`:

- **Servidor FTP e SFTP**: endereço do servidor FTP do seu alojamento web que permite aceder ao seu espaço de armazenamento FTP. Isto utilizando, por exemplo, um software FTP através do protocolo FTP ou SFTP.

> A porta clássica de ligação é a porta "21". Utilize a porta "22" para uma ligação através do protocolo SFTP (caso este esteja ativado)

- **Servidor SSH**: endereço do servidor SSH do seu alojamento web que permite aceder ao seu espaço de armazenamento FTP. Isto usando um terminal através do protocolo SSH.

> A porta de ligação SSH é a porta "22".

- **Login principal**: ID (S)FTP principal criado no seu alojamento web. Pode consultar todos os utilizadores (S)FTP do seu alojamento na coluna "Login" da tabela.

> [!primary]
>
> Dependendo da oferta de [alojamento web OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external} que possui, algumas das informações descritas acima (nomeadamente sobre o SSH) podem não aparecer.
>

Se já não sabe a palavra-passe de um utilizador FTP ou SSH, consulte o nosso guia "[Modificar a palavra-passe de um utilizador FTP](/pages/web/hosting/ftp_change_password/)".

![ftpconnect](images/connect-ftp-step2.png){.thumbnail}

Nesta fase, dispõe de todos os elementos que lhe permitem aceder ao seu espaço de armazenamento FTP.

### Etapa 2 - aceder ao seu espaço de armazenamento FTP <a name="ftp_storage_access"></a>

A ligação ao espaço de armazenamento FTP pode ser efetuada de várias formas. Consulte este manual em função da operação que pretende realizar.

- [1 Ligação via "FTP Explorer"](#ftpexplorer): permite aceder ao seu espaço de armazenamento FTP a partir do seu browser.

- [2. Ligação através de um software FTP](#ftpsoftware): permite aceder ao seu espaço de armazenamento FTP através de um software (como [FileZilla](/pages/web/hosting/ftp_filezilla_user_guide/) ou [Cyberduck](/pages/web/hosting/ftp_cyberduck_user_guide_on_mac/). 
Deverá instalar previamente o software/cliente FTP escolhido no seu computador.

- [3. Ligação via acesso SSH](#ssh): permite aceder ao seu espaço de armazenamento FTP através de um acesso SSH. Este tipo de acesso requer conhecimentos técnicos avançados, bem como uma oferta de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external} **Pro* ou **Performance**.

#### 1. Ligação através de FTP Explorer <a name="ftpexplorer"></a>

Para se ligar ao espaço de armazenamento FTP através do "FTP Explorer", aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceda à secção `Web Cloud`{.action}.

Clique na secção `Alojamentos`{.action} na coluna da esquerda. Escolha o nome do alojamento web em causa, aceda ao separador `FTP - SSH`{.action} e clique no botão `Explorador FTP`{.action}.

![ftpconnect](images/connect-ftp-step3.png){.thumbnail}

Na nova página, insira o seu identificador FTP e a respetiva palavra-passe. Se as informações estiverem corretas, aparecerá o seu espaço de armazenamento.

![ftpconnect](images/connect-ftp-step4.png){.thumbnail}

#### 2. Ligação através de um software FTP <a name="ftpsoftware"></a>

Depois de instalar o software FTP à sua escolha no seu computador (como [FileZilla](/pages/web/hosting/ftp_filezilla_user_user_guide/) ou [Cyberduck](/pages/web/hosting/ftp_cyberduck_user_guide_on_mac/), inicie-o. 

Deverá encontrar campos específicos onde inserir as informações de ligação. 

> [!warning]
>
> Esta operação é inerente ao software que utiliza e à sua versão, pelo que não podemos referenciá-los a todos neste manual.
>

Aqui fica um lembrete das informações que deverá introduzir:

- **Servidor FTP e SFTP**: endereço do servidor FTP para aceder ao espaço de armazenamento FTP. Em função do programa utilizado, a denominação pode ter o seguinte formato: "Servidor", "Endereço de servidor", "Host", "nome do host".
- **Login principal**: identificador que permite aceder ao seu espaço de armazenamento FTP. Em função do programa utilizado, a denominação pode ter o seguinte formato: "Utilizador", "Nome de utilizador", "Identificador", "Login" ou ainda "Username".
- **Password do utilizador FTP**: palavra-passe associada ao login FTP. Consoante o programa utilizado, a denominação pode parecer "Palavra-passe" ou "Password".
- **Porta de ligação**: este é automaticamente completado pelo software. Se tiver de preencher esta informação:
    - utilize a porta "21" para uma ligação através do protocolo FTP;
    - utilize a porta "22" para uma ligação através do protocolo SFTP (caso este esteja ativado).

Se as informações estiverem corretas, o programa que utiliza mostrará o conteúdo do seu espaço de armazenamento FTP. Poderá aparecer uma mensagem (também chamada "status") para confirmar que o conteúdo foi listado com sucesso pelo seu software FTP.

#### 3. Ligação através de um acesso SSH <a name="ssh"></a>

Para se ligar em SSH, utilize um terminal para interagir diretamente com o seu espaço de armazenamento FTP através de linhas de comando. 

Encontre mais informações sobre o SSH no nosso guia sobre a [utilização do SSH com o seu alojamento partilhado OVHcloud](/pages/web/hosting/ssh_on_webhosting/)

Esta ferramenta é instalada de forma padrão em *macOS*, *Linux* e *Windows 10*. Um ambiente Windows mais antigo exigirá a instalação de um software como [PuTTY](/pages/web/hosting/ssh_using_putty_on_windows/) ou a adição da funcionalidade "*OpenSSH*". 

> [!warning]
> 
> Esta operação é específica ao sistema operativo que utiliza, pelo que não podemos detalhá-la neste manual.
>

Uma vez estabelecida a ligação SSH e em função do método escolhido, existem dois métodos para se ligar: 

- **a partir de um software**: as zonas de texto devem ser completadas pelas informações de ligação;
- **em linha de comandos**: deverá ser respeitada uma sintaxe específica.

Em linha de comandos, utilize a sintaxe seguinte:

```bash
ssh sshlogin@sshserver -p connectionport
```

Substitua os elementos `sshlogin`, `sshserver` e `connectionport` pelos seus próprios dados. 

Uma vez enviado o comando, deverá introduzir a palavra-passe do utilizador SSH.

Se as informações estiverem corretas, será ligado ao seu espaço de armazenamento FTP. 

Para mais informações, consulte o manual "[Utilizar uma ligação SSH num alojamento web](/pages/web/hosting/ssh_on_webhosting/)".

![ftpconnect](images/connect-ftp-step5.png){.thumbnail}

## Quer saber mais?

[Modificar a palavra-passe de um utilizador FTP](/pages/web/hosting/ftp_change_password/){.external}.

[Utilizar uma ligação SSH num alojamento web](/pages/web/hosting/ssh_on_webhosting/){.external}.

[Utilizar PuTTY para se ligar em SSH](/pages/web/hosting/ssh_using_putty_on_windows/)

[Utilize o FileZilla com o seu alojamento web](/pages/web/hosting/ftp_filezilla_user_guide/)

[Utilize o Cyberduck com o seu alojamento web](/pages/web/hosting/ftp_cyberduck_user_guide_on_mac/)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 