---
title: 'Utilizar o Backup Storage num servidor dedicado'
excerpt: 'Saiba como ativar e aceder ao espaço de armazenamento adicional'
updated: 2023-07-28
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Os servidores dedicados OVHcloud incluem um espaço de backup suplementar para armazenar os dados e os ficheiros de configuração importantes. Este espaço é escalável, seguro e independente do servidor principal

**Este manual explica-lhe como ativar e utilizar o seu espaço de backup**.

> [!primary]
> Para mais pormenores, recomendamos que consulte a [página comercial](https://www.ovhcloud.com/pt/bare-metal/backup-storage/) da opção Backup Storage.
>
> Este guia não se aplica aos serviços da OVHcloud US.
>

## Requisitos

* Dispor de um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/){.external} na sua conta OVHcloud.
* Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](https://eco.ovhcloud.com/pt/about/).
>
> Para mais informações, consulte o nosso [comparativo](https://eco.ovhcloud.com/pt/compare/).
>

## Instruções

### Ativar o Backup Storage

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Selecione o seu servidor indo à secção `Bare Metal Cloud`{.action} e depois `Servidores dedicados`{.action}. No separador `Backup Storage`{.action}, clique no botão `Ativar Backup Storage`{.action}.

![Ativar o Backup Storage](images/backup-storage01.png){.thumbnail}

Clique em `Confirmar`{.action} no menu contextual que aparece.

![Ativar o Backup Storage](images/backup-storage02.png){.thumbnail}

O seu Backup Storage será configurado em alguns minutos. Receberá um e-mail de confirmação assim que a configuração estiver terminada.

### Configurar o controlo de acesso

O acesso ao seu espaço de armazenamento é restrito por endereços IP através de uma lista de controlo de acesso (<i>Access Control List</i> ou ACL). Apenas os endereços IP da sua conta OVHcloud registados no ACL poderão aceder ao armazenamento. Os protocolos de acesso (FTP, NFS e CIFS) não são autorizados por predefinição, mas podem ser selecionados aquando da adição de endereços IP.

#### Adicionar um acesso backup

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Selecione o seu servidor indo à secção `Bare Metal Cloud`{.action} e depois `Servidores dedicados`{.action}. De seguida, selecione o separador `Backup Storage`{.action} e clique no botão `Adicionar acesso`{.action}.

![Adicionar um acesso backup](images/backup-storage03.png){.thumbnail}

Selecione o bloco IP que deseja autorizar. Depois de selecionado, selecione o(s) protocolo(s) a autorizar e clique em `Seguinte`{.action}.

> [!primary]
>
> Apenas blocos de endereços IP da sua conta OVHcloud podem ser adicionados à ACL a partir da sua Área de Cliente.
>

![Adicionar um acesso backup](images/backup-storage04.png){.thumbnail}

Confirme ao clicar em `Terminar`{.action}.

De seguida, poderá aceder ao Backup Storage do seu servidor a partir do bloco de IP que selecionou.

#### Alterar ou eliminar um acesso ao backup

Uma vez ativado o serviço, a tabela ACL aparecerá no separador `Backup Storage`{.action}. Clique em `...`{.action} à direita de um bloco IP para abrir o menu de acesso.

![Adicionar um acesso backup](images/backup-storage05.png){.thumbnail}

Para alterar os protocolos de um bloco IP autorizado, clique em `Modificar o acesso`{.action} e selecione/desselecione os protocolos no menu que aparecer. Registe as modificações ao clicar em `Confirmar`{.action}.

Para eliminar a autorização de um bloco IP, clique em `Eliminar o acesso`{.action} e depois em `Confirmar`{.action} no menu que aparecer.

#### Aceder ao Backup Storage a partir de um IP externo ao seu serviço <a name="accessbackup"></a>

O acesso ao Backup Storage pode ser restrito ao serviço ao qual está associado através da Área de Cliente OVHcloud.

Para poder adicionar outros endereços IP de serviços diferentes, pode utilizar a [API OVHcloud](/pages/manage_and_operate/api/first-steps).
Isto permitir-lhe-á recuperar os seus backups a partir de um serviço de outra localização.

> [!warning]
> Apenas os endereços IP OVHcloud podem ser autorizados.
>

Ligue-se ao [api.ovh.com](https://api.ovh.com/) e utilize a seguinte chamada:

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/features/backupFTP/access
>

Introduza os campos da seguinte forma:

- `serviceName`: o nome do seu servidor dedicado
- `cifs`: assinalar se necessário
- `ftp`: assinalar se necessário
- `ipBlock`: indique o IP que terá acesso sob a forma `1.2.3.4/32`
- `nfs`: assinalar se necessário

![apiamendress](images/aclapi01.png){.thumbnail}

Para verificar se o seu endereço IP está corretamente autorizado, utilize a seguinte chamada:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/features/backupFTP/access
>

![apiamendress](images/aclapi02.png){.thumbnail}

### Reinicializar a sua password

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Selecione o seu servidor indo à secção `Bare Metal Cloud`{.action} e depois `Servidores dedicados`{.action}. De seguida, selecione o separador `Backup Storage`{.action} e clique no botão `Perdeu a palavra-passe?`{.action}.

Depois de clicar em `Confirmar`{.action} na janela que aparecer, um e-mail de recuperação da password será enviado para o endereço de e-mail registado na sua conta de administrador. Siga as instruções para reinicializar a sua palavra-passe.

### Eliminar o Backup Storage

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Selecione o seu servidor indo à secção `Bare Metal Cloud`{.action} e depois `Servidores dedicados`{.action}. De seguida, selecione o separador `Backup Storage`{.action} e clique no botão `Eliminar o Backup Storage`{.action}.

Clique em `Confirmar`{.action} na mensagem de aviso para proceder à eliminação. O seu Backup Storage será eliminado após alguns minutos. Todos os dados do espaço de armazenamento serão eliminados.

### Encomendar espaço em disco adicional

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Selecione o seu servidor indo à secção `Bare Metal Cloud`{.action} e depois `Servidores dedicados`{.action}. De seguida, selecione o separador `Backup Storage`{.action} e clique no botão `Encomendar espaço de disco`{.action}.

![Encomendar espaço em disco adicional](images/backup-storage06.png){.thumbnail}

Selecione a capacidade de armazenamento que deseja encomendar e, a seguir, clique em `Seguinte`{.action}.

Tome conhecimento da tarifação e das condições gerais e valide a sua encomenda clicando em `Confirmar`{.action}.
Será criada uma nota de encomenda. Uma vez o pagamento registado, será notificado da extensão do seu espaço de armazenamento.

### Utilizar o Backup Storage

> [!primary]
>
> O serviço Backup Storage não efetua backups automáticos dos seus dados. e apenas disponibiliza o espaço e os protocolos de acesso. É da responsabilidade do cliente estabelecer uma estratégia de armazenamento apropriada através de ferramentas à sua escolha. A OVHcloud não poderá ser responsabilizada pelos dados contidos nestes espaços.
>

> [!warning]
>
> O serviço Backup Storage tem um limite de três ligações simultâneas num IP.
>

#### FTP/FTPS

##### NcFTP (para Linux)

Para guardar um único ficheiro, pode utilizar o comando seguinte:

```sh
# ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

**Este comando não suporta o protocolo FTPS. Se precisar de efetuar uma transferência segura, deverá utilizar o cliente lftp ou cURL.**

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua palavra-passe FTP.
* **HostName**: o nome do seu Backup Storage.
* **FolderLocation**: o caminho de acesso ao diretório no qual pretende gravar o ficheiro.
* **File**: o nome do ficheiro que pretende guardar.

Para guardar um diretório, só precisa de o arquivar e transferi-lo no seu diretório de backup:

```sh
# czf - /FolderName | ncftpput -u FtpUserName -p FtpPassword -c HostName ArchiveName.tar.gz
```

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **FolderName**: o caminho de acesso ao diretório que pretende guardar.
* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua palavra-passe FTP.
* **HostName**: o nome do seu Backup Storage.
* **ArchiveName**: o nome do diretório que pretende guardar.

Para descarregar um ficheiro de arquivo a partir do seu Backup Storage, pode utilizar o seguinte comando:

```sh
# ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua palavra-passe FTP.
* **HostName**: o nome do seu Backup Storage.
* **LocalFolder**: o caminho de acesso ao diretório local no qual pretende gravar o ficheiro
* **File**: o caminho de acesso do ficheiro a descarregar

##### Curl (para Linux)

> [!primary]
>
> Para utilizar FTPS, deve alterar o nome do Backup Storage. Por exemplo, se o nome do Backup Storage for "ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net", deverá alterá-lo para "ftpback-rbxX-YYY.mybackup.ovh.net". Também terá de adicionar o argumento \-ssl\` ao comando abaixo.
>

Para guardar um único ficheiro, pode utilizar o seguinte comando:

```sh
# curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

O exemplo de código acima contém variáveis que deverá substituir pelos seus próprios valores.

* **File** : o nome do ficheiro que pretende guardar.
* **FtpUsername** : o seu nome de utilizador FTP.
* **FtpPassword** : a sua password FTP.
* **HostName** : o nome do seu Backup Storage.
* **FolderLocation** : o caminho de acesso ao diretório no qual pretende gravar o ficheiro.

Para guardar um diretório, só precisa de o arquivar e transferi-lo no seu diretório de backup:

```sh
# tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

O exemplo de código acima contém variáveis que deverá substituir pelos seus próprios valores.

* **FolderName**: o caminho de acesso ao diretório que pretende guardar.
* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua password FTP.
* **HostName**: o nome do seu Backup Storage.
* **FolderLocation**: o caminho de acesso ao diretório local no qual pretende gravar o ficheiro
* **ArchiveName**: o nome do diretório que pretende guardar.

Para descarregar um ficheiro de arquivo a partir do seu Backup Storage, pode utilizar o seguinte comando:

```sh
# cd /LocalFolder
# curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

O exemplo de código acima contém variáveis que deverá substituir pelos seus próprios valores.

* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua password FTP.
* **HostName**: o nome do seu Backup Storage.
* **LocalFolder**: o nome do diretório local no qual pretende gravar o ficheiro.
* **File**: o caminho de acesso do ficheiro a descarregar.

##### lftp (para Linux)

> [!primary]
>
> lftp utiliza FTP+SSL/TLS por predefinição. Por isso, deve alterar o nome do seu Backup Storage. Por exemplo, se o seu nome for "ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net", deverá alterá-lo para "ftpback-rbxX-YYY.mybackup.ovh.net".
>

Para guardar um único ficheiro, pode utilizar o seguinte comando:

```sh
# lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

O exemplo de código acima contém variáveis que deverá substituir pelos seus próprios valores.

* **File**: o nome do ficheiro que pretende guardar.
* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua password FTP.
* **HostName**: o nome do seu Backup Storage.
* **FolderLocation**: o caminho de acesso ao diretório no qual pretende gravar o ficheiro.

Para guardar um diretório, só precisa de o arquivar e transferi-lo no seu diretório de backup:

```sh
# tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

O exemplo de código acima contém variáveis que deverá substituir pelos seus próprios valores.

* **FolderName**: o caminho de acesso ao diretório que pretende guardar.
* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua password FTP.
* **HostName**: o nome do seu Backup Storage.
* **FolderLocation**: o caminho de acesso ao diretório local no qual pretende gravar o ficheiro
* **ArchiveName**: o nome do diretório que pretende guardar.

Para descarregar um ficheiro de arquivo a partir do seu Backup Storage, pode utilizar o seguinte comando:

```sh
# cd /LocalFolder
# lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "get /File; quit"
```

O exemplo de código acima contém variáveis que deverá substituir pelos seus próprios valores.

* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua password FTP.
* **HostName**: o nome do seu Backup Storage.
* **LocalFolder**: o nome do diretório local no qual pretende gravar o ficheiro.
* **File**: o caminho de acesso do ficheiro a descarregar
 
##### Filezilla (para Windows)

Depois de instalar o FileZilla no seu servidor, poderá configurá-lo para se ligar ao Backup Storage utilizando as informações de identificação FTP que lhe foram enviadas quando ativou a sua opção de backup. Para se poder ligar, precisará do nome e da palavra-passe do Backup Storage.

#### NFS

Em primeiro lugar, certifique-se de que autorizou o acesso dos seus blocos de IP ao armazenamento e que estes podem utilizar o protocolo NFS. Dependendo do seu sistema operativo Linux, é possível que tenha de instalar o cliente NFS e iniciar o serviço NFS/portmap.

Depois de instalar o cliente NFS e o serviço portmap, pode montar a partilha NFS como uma partição normal, tal como indicado abaixo:

```sh
# mount -t nfs HostName:/export/ftpbackup/ServiceName /FolderMount
```

O exemplo de código acima contém variáveis que deverá substituir pelos seus próprios valores.

* **HostName**: o nome do seu Backup Storage.
* **ServiçoName**: o nome do seu servidor (exemplo: "ns0000000.ip-123-123-123.net").
* **FolderMount**: o diretório onde pretende montar o NFS.

Depois de montar a partilha, pode utilizar comandos tais como **cp** e \ rsync\`, tal como o faria com um diretório normal.

#### CIFS

##### Windows

Ligue-se ao seu servidor, abra a linha de comandos e introduza o comando seguinte:

```sh
net use z: \\HostName\ServiceName
```

O exemplo de código acima contém variáveis que deverá substituir pelos seus próprios valores.

* **HostName**: o nome do seu Backup Storage.
* **ServiçoName**: o nome do seu servidor (exemplo: "ns0000000.ip-123-123-123.net").

##### Linux

Abra uma ligação SSH ao seu servidor e introduza o comando seguinte:

```sh
# mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //HostName/ServiceName /mnt/FolderMount
```

O exemplo de código acima contém variáveis que deverá substituir pelos seus próprios valores.

* **HostName**: o nome do seu Backup Storage.
* **ServiçoName**: o nome do seu servidor (exemplo: "ns0000000.ip-123-123-123.net").
* **FolderMount**: o diretório onde pretende estabelecer a partilha (já deve existir).

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.