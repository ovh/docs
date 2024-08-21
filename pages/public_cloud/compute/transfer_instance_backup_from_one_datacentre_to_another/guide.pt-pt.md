---
title: "Descarregar e transferir a cópia de segurança de uma instância de uma região OpenStack para outra"
excerpt: "Saiba como descarregar e transferir uma cópia de segurança de uma instância de uma região OpenStack para outra, mantendo a configuração e o estado da instância"
updated: 2023-09-25
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>


## Objetivo

Poderá ser necessário mover a sua [instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) de uma região OpenStack para outra. Ou porque prefere migrar para uma nova região OpenStack disponível ou porque pretende migrar do OVHcloud Labs para o Public Cloud.

**Saiba como transferir uma cópia de segurança de uma instância de uma região OpenStack para outra, mantendo a configuração e o estado da instância.**

## Requisitos

Para efetuar a transferência, precisará de um ambiente com:

- CLI OpenStack. Consulte o nosso guia « [Como preparar o ambiente para utilizar a API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api) ».
- A Conectividade às API OVHcloud OpenStack.
- Do espaço de armazenamento disponível correspondente ao tamanho do disco da instância (para o armazenamento de backup temporário).

Este ambiente será utilizado como « jump host » para transferir a cópia de segurança de uma região para outra. Este ambiente pode ser uma instância alojada na OVHcloud ou na sua máquina local.

Também necessitará de uma [instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud.

## Instruções

### Criar uma cópia de segurança


```bash
$ openstack server list
 
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| ID | Name | Status | Networks | Image Name |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
```

De seguida, execute o comando seguinte para criar uma cópia de segurança da sua instância:


```bash 
$ openstack server image create --name snap_server1 aa7115b3-83df-4375-b2ee-19339041dcfa
```

### Transferir a cópia de segurança

De seguida, execute este comando para listar as instâncias disponíveis:

```bash
$ openstack image list
+--------------------------------------+-----------------------------------------------+--------+
| ID | Name | Status |
+--------------------------------------+-----------------------------------------------+--------+
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | active |
| 3ff877dc-1a62-43e7-9655-daff37a0c355 | NVIDIA GPU Cloud (NGC) | active |
| a14a7c1e-3ac5-4a61-9d36-1abc4ab4d5e8 | Centos 7 | active |
| f720a16e-543b-42e5-af45-cc188ad2dd34 | Debian 8 - GitLab | active |
| d282e7aa-332c-4dc7-90a9-d49641fa7a95 | CoreOS Stable | active |
| 2519f0fb-18cc-4915-9227-7754292b9713 | Ubuntu 16.04 | active |
| b15789f8-2e2f-4f6c-935d-817567319627 | Windows Server 2012 R2 Standard - UEFI | active |
| ed2f327f-dbae-4f9e-9754-c677a1b76fa3 | Ubuntu 14.04 | active |
| 9c9b3772-5320-414a-90bf-60307ff60436 | Debian 8 - Docker | active |
```

Identifique a cópia de segurança da instância na lista:

```text
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | qcow2 | bare | 1598029824 | active |
```

Por fim, execute este comando para descarregar a cópia de segurança para o host de reencaminhamento:

```bash
$ openstack image save --file snap_server1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
```

<a name="transfer"></a>

### Transferir a cópia de segurança para outra região OpenStack

Para lançar o processo de transferência, deverá começar por carregar novas variáveis de ambiente.

> [!warning]
>
> Se transferir o backup para uma região OpenStack no mesmo projeto, deverá alterar a variável `OS_REGION_NAME`.
>


```bash
$ export OS_REGION_NAME=SBG1
```

Se transferir a sua cópia de segurança para outro projeto ou conta, deverá recarregar as variáveis de ambiente associadas a esta conta através do seguinte comando:

```bash
$ source openrc.sh
```

Para transferir o backup para a nova região OpenStack, utilize este comando:

```bash
$ openstack image create --disk-format qcow2 --container-format bare --file snap_server1.qcow snap_server1
```

```text
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field | Value |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| checksum | 82cb7d57ec7278818bba0afcf802f0fb |
| container_format | bare |
| created_at | 2019-03-22T14:26:22Z |
| disk_format | qcow2 |
| file | /v2/images/1bf21cf3-8d39-40ae-b088-5549c31b7905/file |
| id | 0a3f5901-2314-438a-a7af-ae984dcbce5c |
| min_disk | 0 |
| min_ram | 0 |
| name | snap_server1 |
| owner | 4e03fd164d504aa3aa03938f0bf4ed90 |
| properties | direct_url='swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', locations='[{u'url': u'swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', u'metadata': {}}]' |
| protected | False |
| schema | /v2/schemas/image |
| size | 3004956672 |
| status | active |
| tags | |
| updated_at | 2019-03-22T14:41:05Z |
| virtual_size | None |
| visibility | private |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Criar uma instância a partir da sua cópia de segurança

Para criar uma instância a partir do seu backup, utilize o ID da cópia de segurança como imagem com este comando:

```bash
$ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
```

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
