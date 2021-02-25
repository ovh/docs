---
title: 'Utilizar o Backup Storage num servidor dedicado'
slug: servicos-backup-storage
excerpt: 'Saiba como ativar e utilizar o serviço Backup Storage'
section: Armazenamento
---

**Última atualização: 27/08/2018**

## Sumário

No âmbito das ofertas de [servidores dedicados](https://www.ovh.pt/servidores_dedicados/){.external}, tem à sua disposição um espaço de armazenamento de 500 GB por servidor que lhe permite [proteger os seus dados](https://docs.ovh.com/pt/dedicated/proteger-um-servidor-dedicado/){.external}.

**Este manual explica-lhe como ativar e utilizar este espaço de armazenamento.**


## Requisitos

- Ter um [servidor dedicado](https://www.ovh.pt/servidores_dedicados/){.external}.
- Aceder à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Serviços Dedicados`{.action}.


## Instruções

### Ativar o seu espaço de armazenamento

Ligue-se à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e entre na página do servidor na secção `Serviços Dedicados`{.action}. De seguida, selecione a janela `Backup Storage`{.action}, clique no botão `Ativar backup storage`{.action} e valide.

![Ativar o seu espaço de armazenamento](images/backup_storage_activation.png){.thumbnail}

Receberá um e-mail de ativação e o seu Backup Storage ficará disponível em apenas alguns minutos.


### Configurar o controlo de acesso

O acesso ao seu espaço de armazenamento é restrito pelo endereço de IP através de uma lista de controlo de acesso ou *Access Control List* (ACL). Por predefinição, todos os endereços de IP da sua conta têm um acesso FTP/FTPS ao espaço de armazenamento. Os outros protocolos (NFS e CIDFS) não são autorizados, por predefinição. Para os autorizar, deverá criar uma ACL.


#### Adicionar um acesso

Na secção `Backup Storage`{.action}, clique em `Adicionar acesso`{.action}.

![Adicionar um acesso backup](images/add_access.png){.thumbnail}

Selecione o bloco do IP que pretende autorizar. Depois de selecionado, escolha o protocolo que quer autorizar e, em seguida, clique em `Seguinte`{.action}.

> [!primary]
>
> Para aceder ao armazenamento, só pode autorizar os blocos de IP presentes na sua conta OVH.
>

![Adicionar um acesso backup](images/add_access_ip.png){.thumbnail}

Para confirmar a adição do acesso, clique em `Concluir`{.action}.

![Adicionar um acesso backup](images/add_access_confirmation.png){.thumbnail}

Poderá aceder ao Backup Storage do servidor a partir do bloco de IP selecionado.


#### Alterar um acesso

Para alterar os protocolos de um bloco de IP autorizado, clique no botão `...`{.action} e em `Alterar acesso`{.action} na linha correspondente ao bloco que pretende alterar. Selecione ou desselecione os protocolos pretendidos. Quando tiver terminado, clique em `Validar`{.action} para confirmar estas alterações.

![Alterar o acesso](images/modify_access.png){.thumbnail}


#### Eliminar um acesso

Para anular a autorização de um bloco de IP autorizado, clique no botão `...`{.action} e em `Alterar acesso`{.action} na linha correspondente ao bloco que pretende eliminar.

![Alterar o acesso](images/delete_access.png){.thumbnail}

Finalmente, clique em `Validar`{.action} para confirmar. O acesso ao Backup Storage ficará anulado para o bloco de IP em causa.


### Alterar a palavra-passe

Na secção `Backup Storage`{.action}, clique em `Perdeu a palavra-passe?`{.action} e valide.

![Alterar a palavra-passe](images/forgotten_password.png){.thumbnail}

Um e-mail de recuperação de palavra-passe será enviado para o endereço de e-mail registado na sua conta de administrador. Basta seguir as indicações para reinicializar a sua palavra-passe.


### Eliminar o Backup Storage

Na secção `Backup Storage`{.action}, clique em `Eliminar Backup Storage`{.action} e valide.

![Eliminar o Backup Storage](images/backup_storage_delete.png){.thumbnail}

> [!warning]
> 
> O pedido de eliminação é irreversível.
> 

O Backup Storage será definitivamente eliminado após alguns minutos.


### Encomendar espaço de disco adicional

Na secção `Backup Storage`{.action}, clique no botão `Encomendar espaço de disco`{.action}. 

![Encomendar espaço de disco](images/additional_space_order.png){.thumbnail}

Selecione a capacidade de armazenamento desejada e, em seguida, clique em `Seguinte`{.action}.

![Seleção do espaço adicional](images/additional_space_order_selection.png){.thumbnail}

Só precisa de ler e validar as condições gerais, assim como o pedido clicando em `Confirmar`{.action}

Uma nota de encomenda será criada e, assim que o pagamento for efetuado, o espaço de armazenamento adicional ficará disponível.


### Utilizar o Backup Storage

> [!primary]
>
> O serviço Backup Storage não efetua backups automáticos dos seus dados e apenas disponibiliza o espaço e os protocolos de acesso. É da responsabilidade do cliente estabelecer uma estratégia de armazenamento apropriada através de ferramentas à sua escolha. A OVH não poderá ser responsabilizada pelos dados guardados neste espaço.
>


#### FTP/FTPS

##### NcFTP (para Linux)

Para guardar um único ficheiro, pode utilizar o comando seguinte:

```sh
ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

**Este comando não suporta o protocolo FTPS. Se necessitar de efetuar uma transferência segura, deverá utilizar o cliente lftp  ou a interface cURL.**

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua palavra-passe FTP.
* **HostName**: o nome do seu Backup Storage.
* **FolderLocation**: o caminho de acesso ao diretório no qual pretende gravar o ficheiro.
* **File**: o nome do ficheiro que pretende guardar.

Para guardar um diretório, só precisa de o arquivar e transferi-lo no seu diretório de backup:

```sh
tar czf - /FolderName | ncftpput -u FtpUserName -p FtpPassword -c HostName ArchiveName.tar.gz
```

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **FolderName**: o caminho de acesso ao diretório que pretende guardar.
* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua palavra-passe FTP.
* **HostName**: o nome do seu Backup Storage.
* **ArchiveName**: o nome do diretório que pretende guardar.

Para descarregar um ficheiro de arquivo a partir do seu espaço de armazenamento, pode utilizar o comando seguinte:

```sh
ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua palavra-passe FTP.
* **HostName**: o nome do seu Backup Storage.
* **LocalFolder**: o caminho de acesso ao diretório local no qual pretende gravar o ficheiro.
* **File**: o caminho de acesso ao ficheiro que pretende descarregar.

##### cURL (para Linux)

> [!primary]
>
> Para utilizar o protocolo FTPS, tem de mudar o nome do seu Backup Storage. Por exemplo: se o nome é “ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net”, deverá alterá-lo para “ftpback-rbxX-YYY.mybackup.ovh.net”. Além disso, também deverá adicionar o argumento `-ssl` ao comando abaixo.
>

Para guardar um único ficheiro, pode utilizar o comando seguinte:

```sh
curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **File**: o nome do ficheiro que pretende guardar.
* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua palavra-passe FTP.
* **HostName**: o nome do seu Backup Storage.
* **FolderLocation**: o caminho de acesso ao diretório no qual pretende gravar o ficheiro.

Para guardar um diretório, só precisa de o arquivar e transferi-lo no seu diretório de backup:

```sh
tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **FolderName**: o caminho de acesso ao diretório que pretende guardar.
* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua palavra-passe FTP.
* **HostName**: o nome do seu Backup Storage.
* **FolderLocation**: o caminho de acesso ao diretório local no qual pretende gravar o ficheiro.
* **ArchiveName**: o nome do diretório que pretende guardar.

Para descarregar um ficheiro de arquivo a partir do seu espaço de armazenamento, pode utilizar o comando seguinte:

```sh
cd /LocalFolder
curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua palavra-passe FTP.
* **HostName**: o nome do seu Backup Storage.
* **LocalFolder**: o nome do diretório local no qual pretende gravar o ficheiro.
* **File**: o caminho de acesso ao ficheiro que pretende descarregar.


##### lftp (para Linux)

> [!primary]
>
> lftp utiliza FTP+SSL/TLS por predefinição. Por isso, é necessário alterar o nome do seu Backup Storage. Por exemplo: se o nome é “ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net”, deverá alterá-lo para “ftpback-rbxX-YYY.mybackup.ovh.net”.
>

Para guardar um único ficheiro, pode utilizar o comando seguinte:

```sh
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **File**: o nome do ficheiro que pretende guardar.
* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua palavra-passe FTP.
* **HostName**: o nome do seu Backup Storage.
* **FolderLocation**: o caminho de acesso ao diretório no qual pretende gravar o ficheiro.

Para guardar um diretório, só precisa de o arquivar e transferi-lo no seu diretório de backup:

```sh
tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **FolderName**: o caminho de acesso ao diretório que pretende guardar.
* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua palavra-passe FTP.
* **HostName**: o nome do seu Backup Storage.
* **FolderLocation**: o caminho de acesso ao diretório local no qual pretende gravar o ficheiro.
* **ArchiveName**: o nome do diretório que pretende guardar.

Para descarregar um ficheiro de arquivo a partir do seu espaço de armazenamento, pode utilizar o comando seguinte:

```sh
cd /LocalFolder
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "get /File; quit"
```

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **FtpUsername**: o seu nome de utilizador FTP.
* **FtpPassword**: a sua palavra-passe FTP.
* **HostName**: o nome do seu Backup Storage.
* **LocalFolder**: o nome do diretório local no qual pretende gravar o ficheiro.
* **File**: o caminho de acesso ao ficheiro que pretende descarregar.

##### FileZilla

Depois de instalar o FileZilla no seu servidor, poderá configurá-lo para se ligar ao Backup Storage através das informações de identificação FTP que recebeu no momento da ativação do seu Backup Storage. Para uma ligação bem-sucedida, precisará do nome de utilizador e da respetiva palavra-passe.


#### NFS

Em primeiro lugar, certifique-se de que autorizou o acesso dos seus blocos de IP ao armazenamento e que estes podem utilizar o protocolo NFS. Dependendo do seu sistema operativo Linux, é possível que tenha de instalar o cliente NFS e executar o serviço NFS/portmap.

Depois de executar o cliente NFS e o serviço portmap, poderá estabelecer a partilha NFS como uma partição normal, tal como indicado abaixo:

```sh
mount -t nfs HostName:/export/ftpbackup/ServiceName /FolderMount
```

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **HostName**: o nome do seu Backup Storage.
* **ServiceName**: o nome do seu servidor (ex: ns0000000.ip-123-123-123.net).
* **FolderMount**: o diretório onde pretende estabelecer a partilha NFS.

Depois de estabelecer a partilha, pode utilizar os comandos **cp** e rsync, tal como procederia com um diretório normal.


#### CIFS

##### Windows

Ligue-se ao seu servidor, abra a linha de comandos e introduza o comando seguinte:

```sh
net use z: \\HostName\ServiceName
```

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **HostName**: o nome do seu Backup Storage.
* **ServiceName**: o nome do seu servidor (ex: ns0000000.ip-123-123-123.net).

##### Linux

Abra uma ligação SSH para o seu servidor e introduza o comando abaixo:

```sh
mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //HostName/ServiceName /mnt/FolderMount
```

O exemplo acima contém as variáveis que deverá substituir pelos seus valores.

* **HostName**\: o nome do seu Backup Storage.
* **ServiceName**\: o nome do seu servidor (ex: ns0000000.ip-123-123-123.net).
* **FolderMount**\: o diretório onde pretende estabelecer a partilha (já existente).


## Quer saber mais?

Fale com a nossa comunidade de utilizadores: [Comunidade OVH](https://community.ovh.com/en/){.external}.