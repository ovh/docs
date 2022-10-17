---
title: Object Storage Swift - Gestão dos seus arquivos com Rsync
slug: pca/rsync
excerpt: Saiba como aceder aos seus arquivos Public Cloud com Rsync
section: OpenStack Swift Archive Storage Class Specifics
order: 090
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 08/12/2020**

## Objetivo

A OVHcloud Public Cloud Archive é uma solução de armazenamento gerida principalmente através da API OpenStack. No entanto, desenvolvemos uma gateway que permite que se ligue ao seu container PCA com Rsync.

**Descubra as informações necessárias para ativar a ligação aos seus dados armazenados com a ajuda de Rsync.**

## Requisitos

### Rsync

[Rsync](https://rsync.samba.org/) est un utilitaire Open Source qui permet un transfert de fichiers incrémentiel rapide.<br>
Os ficheiros binários pré-compilados estão disponíveis na maioria das distribuições de sistemas operativos recentes. Por isso, deve verificar primeiro se pode instalar um pacote Rsync com as suas ferramentas de instalação de pacotes standard para o seu sistema operativo.

### ID OpenStack

Para poder gerar o seu identificador e a sua palavra-passe OpenStack, utilize este [guia](https://docs.ovh.com/pt/public-cloud/criar_um_acesso_a_interface_horizon/).

### TenantName

O TenantName corresponde ao nome do seu projeto Horizon. Para obter o TenantName, deve ligar-se à interface web OpenStack: [https://horizon.cloud.ovh.net/](https://horizon.cloud.ovh.net/){.external}.

Uma vez ligado, o TenantName fica visível no topo da página.

![horizon](images/image1.png){.thumbnail}

## Instruções

### Detalhes da ligação

- Host Name: gateways.storage.{region}.cloud.ovh.net
- User Name: pca
- Password: {TenantName}.{Username_Openstack}.{Password_Openstack}
- Port: 22

### Transferência de dados

Exemplo de linha de comandos se criou um container PCA na região GRA:

```bash
user@host:~$ rsync -a /path/to/my/dir pca@gateways.storage.gra.cloud.ovh.net:/container
pca@gateways.storage.gra.cloud.ovh.net's password:
user@host:~$
```

### Descarregamento de dados

O Public Cloud da OVHcloud Archive oferece um armazenamento de dados a baixo custo em troca de uma latência acrescida no processo de recuperação. Para aceder ao seu arquivo, deve ser recebido um pedido de extração com os nomes de container e de arquivo a que se refere.

Uma vez extraído o seu arquivo, poderá carregá-lo durante 24 horas com um débito ilimitado e uma frequência de acesso ilimitada. Após este período de recuperação, o arquivo será novamente bloqueado.

```bash
user@host:~$ rsync -a pca@gateways.storage.gra.cloud.ovh.net:/container
pca@gateways.storage.gra.cloud.ovh.net's password:
user@host:~$
```

### Informações suplementares: Opções Rsync

Uma vez que o servidor Rsync foi adaptado para funcionar com a API Swift, estas opções serão aplicadas no lado do servidor para corresponder ao comportamento do servidor principal de armazenamento de objetos:

> —inplace: Em vez do método predefinido que consiste em criar uma nova cópia do ficheiro e movê-la uma vez o processo terminado, Rsync escreve os dados atualizados diretamente no ficheiro de destino.
>

Além disso, apenas é permitido um subconjunto de opções no lado do cliente:

> -a, --archive: Ative o modo de arquivo.
>
> -r, --recursive: Cópia os diretórios de forma recorrente.
>
> -v, —verbose: Aumente a quantidade de informações que lhe são fornecidas durante a transferência.
>
> --del, --delete: Elimina os ficheiros desnecessários do diretório de destino.
>
> -P, --progress: Imprime as informações que indicam o progresso da transferência.


## Quer saber mais?

[Particularidades da API OpenStack Swift no Cloud Archive](https://docs.ovh.com/gb/en/storage/pca/api/)

[Página inicial do Rsync](https://linux.die.net/man/1/rsync)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
