---
title: "Montagem de NAS-HA através de NFS"
slug: nas/nfs
excerpt: "Saiba como conectar-se ao NAS-HA através de NFS"
section: NAS-HA
order: 03
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 08/11/2022**

## Objetivo

O serviço NAS-HA da OVHcloud permite-lhe gerir um armazenamento de ficheiros acessível a partir de uma rede.

**Saiba como aceder ao NAS-HA através do NFS nos sistemas operativos mais comuns.**

> [!warning]
> A OVHcloud oferece-lhe um certo número de serviços cuja configuração e gestão lhe incumbem. Por isso, é da sua responsabilidade garantir que eles funcionem corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação de serviços num servidor, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) ou que contacte a [nossa comunidade](https://community.ovh.com/en/).
>

## Requisitos

- Dispor de um serviço [NAS-HA OVHcloud](https://www.ovhcloud.com/pt/storage-solutions/nas-ha/)
- Dispor de um serviço OVHcloud associado a um endereço IP público (Hosted Private Cloud, servidor dedicado, VPS, instância Public Cloud, etc.).
- Ter um sistema operativo compatível com NFS instalado no seu servidor
- [Ter criado uma partição no seu serviço com o protocolo NFS ativado](https://docs.ovh.com/pt/storage/file-storage/nas/get-started/#partition)
- [Ter uma entrada ACL para o endereço IP do servidor](https://docs.ovh.com/pt/storage/file-storage/nas/get-started/#addaccess)
- Dispor de um acesso administrativo (root) ao seu servidor através de SSH ou GUI

## Instruções

As secções seguintes contêm exemplos de configuração para as distribuições/sistemas operativos mais utilizados. A primeira etapa consiste sempre em ligar-se ao seu servidor através de SSH ou ligando-se à interface gráfica do seu sistema operativo instalado. Os exemplos abaixo pressupõem que está ligado enquanto utilizador com autorizações elevadas.

Também precisará do **nome interno** e **do endereço IP** do serviço NAS-HA que poderá encontrar no e-mail recebido após a instalação ou na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

As seguintes notações são utilizadas como argumentos nas secções da linha de comandos abaixo. Substitua-os pelos valores apropriados aquando da introdução dos comandos.

|Argumento|Descrição|
|---|---|
|IP_HA-NAS|O endereço IP do NAS-HA (Exemplo: `10.1.1.1`)|
|NFS_PATH|o caminho de acesso à partição NAS-HA a montar, composto pelo nome do serviço e pelo nome das suas partições (Exemplo: `zpool-123456/partition01`)|
|MOUNTING_FOLDER|A pasta local para a sua partição montada|

> [!warning]
>
> O utilizador NFS é `root`, as modificações de permissões com este utilizador podem gerar conflitos com os direitos CIFS/SMB existentes.
>

### Distribuições baseadas em Debian

Instale o package `nfs-common`:

```bash
ubuntu@server:~$ sudo apt install nfs-common
```

De seguida, utilize o seguinte comando de montagem:

```bash
ubuntu@server:~$ sudo mount -t nfs_HA-NAS:NFS_PATH /MOUNTING_FOLDER
```

**Exemplo:**

```bash
ubuntu@server:~$ sudo mount -t nfs 10.1.1.1:zpool-123456/partition01 /mount/ha_nas
```

Já pode aceder à sua partição montada na pasta especificada.

> [!primary]
>
> A fim de automatizar o processo de montagem em cada arranque do servidor, adicione a seguinte linha ao ficheiro `/etc/fstab`:
>
> `IP_HA-NAS:/NFS_PATH/MOUNTING_FOLDER nfs rw 0`
>

### CentOS 7 / AlmaLinux / Rocky Linux

Verifique que as últimas versões dos pacotes `nfs-utils` e `rpcbind` estão instaladas:

```bash
centos@server:~$ sudo yum install nfs-utils rpcbind
```

Se necessário, reinicie o serviço `rpcbind` com o seguinte comando:

```bash
centos@server:~$ sudo systemctl restart rpcbind
```

Para montar a sua partição, utilize o seguinte comando:

```bash
centos@server:~$ sudo mount -t nfs_HA-NAS:NFS_PATH /MOUNTING_FOLDER
```

**Exemplo:**

```bash
centos@server:~$ sudo mount -t nfs 10.1.1.1:zpool-123456/partition01 /mount/ha_nas
```

Já pode aceder à sua partição montada na pasta especificada.

> [!primary]
>
> A fim de automatizar o processo de montagem em cada arranque do servidor, adicione a seguinte linha ao ficheiro `/etc/fstab`:
>
> `IP_HA-NAS:NFS_PATH /MOUNTING_FOLDER nfs rw 0`
>

### Fedora

Instale o package `nfs-utils`:

```bash
fedora@server:~$ sudo dnf -y instal nfs-utils
```

De seguida, utilize o seguinte comando de montagem:

```bash
fedora@server:~$ sudo mount -t nfs_HA-NAS:NFS_PATH /MOUNTING_FOLDER
```

**Exemplo:**

```bash
fedora@server:~$ sudo mount -t nfs 10.1.1.1:zpool-123456/partition01 /mount/ha_nas
```

Já pode aceder à sua partição montada na pasta especificada.


### Proxmox

Na interface de administração Proxmox, clique em `Storage`{.action} no menu vertical.

![proxmox](images/proxmox1.png){.thumbnail}

Clique no botão `Add`{.action} e selecione `NFS`{.action}.

Na janela que aparecer, indique as seguintes informações:

|Ação|Descrição|
|---|---|
|ID|Identificador da partilha|
|Server|Endereço IP do NAS-HA (Exemplo: `10.1.1.1`)|
|Export|Caminho para a partição NAS-HA (Deve ser detetado através da análise automática: selecione-o na lista.)|
|Content|Tipos de conteúdos para este NFS (Disk image, ISO image, Container template, VZDump backup file, Container, Snippets)|

![proxmox](images/proxmox2.png){.thumbnail}

Clique em `Add`{.action} para montar a sua partição.

### VMware ESXI

Na interface de administração VMware ESXI, clique em `Storage`{.action} no menu à esquerda.

A seguir, clique no botão `New datastore`{.action} para abrir o assistente.

![ESXI](images/esxi1.png){.thumbnail}

Na nova janela, selecione `Mount NFS datastore`{.action} e clique em `Next`{.action}.

![ESXI](images/esxi2.png){.thumbnail}

Preencha o formulário com os detalhes seguintes.

|Ação|Descrição|
|---|---|
|Name|Identificador da partilha|
|NFS server|Endereço IP do NAS-HA (Exemplo: `10.1.1.1`)|
|NFS share|Caminho para a partição NAS-HA a montar (Exemplo: `zpool-123456/partition01`)|

![ESXI](images/esxi3.png){.thumbnail}

Depois, clique em `Next`{.action}. Clique em `Finish`{.action} na última etapa.

A sua partição NAS-HA foi montada num datastore.

![ESXI](images/esxi4.png){.thumbnail}


## Quer saber mais?

Fale com a nossa comunidade de utilizadores em  <https://community.ovh.com/en/>.
