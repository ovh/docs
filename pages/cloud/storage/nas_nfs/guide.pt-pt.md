---
title: 'Montar um NAS através de NFS'
slug: nas-nfs
excerpt: 'Saiba como montar um NAS através de NFS'
section: NAS
order: 03
---

**Última atualização: 21/02/2022**

## Requisitos

Este manual explica-lhe como realizar uma montagem NFS nas distribuições mais comuns. Para isso, precisará de:

- Um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/) **ou** um [VPS]https://www.ovhcloud.com/pt/vps/) **ou** uma [instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/).
- Uma oferta [NAS-HA](https://www.ovh.pt/nas/).
- Uma distribuição compatível NFS.


### Linux

Compatibilidade: Debian & Ubuntu

Para montar um NFS em Linux, é necessário:

- Aceder ao servidor em SSH.
- Instalar o pacote “nfs-client” através do comando:


```sh
aptitude install nfs-client
```

De seguida, utilize o seguinte comando de montagem:


```sh
mount -t nfs -o _netdev,mountproto=tcp IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE
```

|Argumento|Descrição|
|---|---|
|IP_NAS|Corresponde ao nome ou IP do NAS|
|/CHEMIN_NFS|Caminho no servidor NFS (ex.: “nas-000YY/mapartition”)|
|PASTA_MONTAGEM|Corresponde à pasta do servidor na qual pretende montar o NFS.|


> [!primary]
>
> Pode automatizar a montagem do NAS ao iniciar a sua distribuição através da seguinte linha que deve adicionar ao ficheiro /etc/fstab:
> 
> ```
> IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE nfs rw,_netdev,mountproto=tcp 0 0
> ```
>

*Por exemplo:*

```sh
mount -t nfs -o _netdev,mountproto=tcp 10.16.XXX.YYY:zpool-999888/PartitionName /media/NasHA -v
```

|Argumento|Descrição|
|---|---|
|IP_NAS|10.16.XXX.YYY|
|/CAMINHO_NFS|zpool-999888/PartitionName|
|PASTA_MONTAGEM|/media/NasHA -v|

### CentOS

Para montar um NFS em CentOS, é necessário:

- Aceder ao servidor em SSH.
- Instalar os pacotes "nfs-utils" e "rpcbind" através do comando:


```sh
yum install nfs-utils rpcbind
```

A seguir, reinicie o serviço `rpcbind` através do seguinte comando:


```sh
/etc/init.d/rpcbind start
```

De seguida, utilize o seguinte comando de montagem:

```sh
mount -t nfs -o _netdev,mountproto=tcp IP_NAS:/CAMINHO_NFS /PASTA_MONTAGEM
```

|Argumento|Descrição|
|---|---|
|IP_NAS|Corresponde ao nome ou IP do NAS|
|/CAMINHO_NFS|Caminho no servidor NFS (ex.: “nas-000YY/mapartition”)|
|PASTA_MONTAGEM|Corresponde à pasta do servidor na qual pretende montar o NFS.|


> [!primary]
>
> Pode automatizar a montagem do NAS ao iniciar a sua distribuição através da seguinte linha que deve adicionar ao ficheiro /etc/fstab:
> 
> ```
> IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE nfs rw,_netdev,mountproto=tcp 0 0
> ```
>

### Gentoo

Para montar um NFS em Gentoo, é necessário:

- Aceder ao servidor em SSH.
- Instalar o pacote “nfs-utils” através do comando:


```sh
emerge nfs-utils
```

A seguir, execute o serviço NFS através do seguinte comando:

```sh
/etc/init.d/nfs start
```

Utilize o seguinte comando de montagem:


```sh
mount -t nfs IP_NAS:/CAMINHO_NFS /PASTA_MONTAGEM
```

|Argumento|Descrição|
|---|---|
|IP_NAS|Corresponde ao nome ou IP do NAS|
|/CAMINHO_NFS|Caminho no servidor NFS (ex.: “nas-000YY/mapartition”)|
|PASTA_MONTAGEM|Corresponde à pasta do servidor na qual pretende montar o NFS.|


> [!primary]
>
> Pode automatizar a montagem do NAS ao iniciar a sua distribuição através da seguinte linha que deve adicionar ao ficheiro /etc/fstab:
> 
> ```
> IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE nfs rw 0 0
> ```
> 
> E colocar o serviço "nfsmount" ao iniciar o servidor com o seguinte comando:
> 
> ```
> rc-update add nfsmount default
> ```
>

### Proxmox

Compatibilidade: Proxmox 3.X

Para montar um NFS em Proxmox, é necessário:

- Aceder à interface de administração do Proxmox.
- Clique no separador `Armazenamento`{.action}.


![configuration](images/img_4647.jpg){.thumbnail}

- Clique em `Adicionar`{.action} e selecione `NFS`{.action}.


![configuration](images/img_4648.jpg){.thumbnail}


|Argumento|Descrição|
|---|---|
|ID|Nome que pretende atribuir ao NFS|
|Servidor|Corresponde ao nome do NAS|
|Exportação|Caminho no servidor NFS|
|Conteúdo|Tipo de conteúdos para este NFS (valor possível: Images, ISO, Template, Backups, Containers)|


> [!primary]
>
> Pode automatizar a montagem do NAS ao iniciar a sua distribuição através da seguinte linha que deve adicionar ao ficheiro /etc/fstab:
> 
> ```
> IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE nfs rw 0 0
> ```
>

### ESXI

Para montar um NFS em ESXI, é necessário:

- Aceder ao servidor através do vSphere
- No painel de gestão, clique em `Inventory`{.action}: 


![configuration](images/esxi_1.jpg){.thumbnail}

- Aceda ao separador `Configuration`{.action}:


![configuração](images/esxi_2.jpg){.thumbnail}

- Finalmente, clique em `Storage`{.action} no menu à esquerda:


![configuração](images/esxi_3.jpg){.thumbnail}

Terá de preencher o formulário:


![configuração](images/esxi_4.jpg){.thumbnail}

|Argumento|Descrição|
|---|---|
|Server|Corresponde ao nome ou IP do NAS|
|Folder|Caminho no servidor NFS (ex.: “nas-000YY/mapartition”)|
|Datastore Name|Corresponde ao nome que pretende dar ao datastore|


## Informações complementares


> [!alert]
>
> O utilizador NFS é `root` e as alterações de direitos deste utilizador podem gerar conflitos com os direitos CIFS/SMB existentes.
> 

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.