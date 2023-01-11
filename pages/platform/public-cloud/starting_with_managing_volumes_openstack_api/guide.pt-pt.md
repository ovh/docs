---
title: "Começar com a gestão dos volumes na API OpenStack"
slug: gestao-volumes-api-openstack
legacy_guide_number: 2071
section: Gestão via OpenStack
order: 7
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 19/05/2021**

## Objetivo

De forma a automatizar as suas operações no Public Cloud, é possível utilizar as API OpenStack para gerar diferentes scripts.
<br>Poderá, por exemplo, criar um novo volume do tipo "alto desempenho" para o associar a uma instância Public Cloud.

**Este guia ajudá-lo-á a gerir as API OpenStack para gerir os seus volumes com a ajuda do cliente Python OpenStack.**

## Requisitos

- [Preparar o ambiente para utilizar a API OpenStack](../prepare_the_environment_for_using_the_openstack_api/) instalando pithon-cinderclient e python-novaclient
- [Carregar as variáveis de ambiente OpenStack](../set-openstack-environment-variables/)

## Instruções

### Documentação Cinder

Pode obter a lista dos comandos possíveis lendo a documentação do cliente OpenStack:

```bash
admin@server-1:~$ openstack help
```

Eis a lista dos comandos principais:

|Comando|Descrição|
|---|---|
|volume creme|Criar um novo volume|
|volume delete|Eliminar um volume|
|volume list|Lista dos volumes|
|volume snapshot create|Criar uma snapshot de um volume|

Também pode obter informações sobre uma encomenda específica adicionando `help` a esta:

```bash
admin@server-1:~$ openstack help volume snapshot create
usage: openstack volume snapshot create [-h] [-f {json,shell,table,value,yaml}] [-c COLUMN] [--noindent] [--prefix PREFIX] [--max-width <integer>] [--fit-width] [--print-empty] [--volume <volume>] [--description <description>] [--force] [--property <key=value>]
                                        [--remote-source <key=value>]
                                        <snapshot-name>

Create new volume snapshot

positional arguments:
  <snapshot-name>       Name of the new snapshot

optional arguments:
  -h, --help            show this help message and exit
  --volume <volume>     Volume to snapshot (name or ID) (default is <snapshot-name>)
  --description <description>
                        Description of the snapshot
  --force               Create a snapshot attached to an instance. Default is False
```

> [!primary]
>
> Também pode consultar a documentação do cliente Openstack diretamente [no site OpenStack](https://docs.openstack.org/python-openstackclient/latest/){.external}.
> 

### Operações básicas

#### Criar um volume de alta performance

- Listar os tipos de volumes: 

```bash
admin@server-1:~$ openstack volume type list
+--------------------------------------+------------+-----------+
| ID                                   | Name       | Is Public |
+--------------------------------------+------------+-----------+
| e9551830-6362-4bf8-92e5-391829456b03 | classic    | True      |
| 6fc8e512-3cac-4f39-b9a8-af098d710506 | high-speed | True      |
+--------------------------------------+------------+-----------+
```

- Criar o volume do tipo high-speed de 10GB chamado volume1:

``` bash
admin@server-1:~$ openstack volume create --type high-speed --size 10 volume1

+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| attachments         | []                                   |
| availability_zone   | nova                                 |
| bootable            | false                                |
| consistencygroup_id | None                                 |
| created_at          | 2021-05-18T14:16:28.658308           |
| description         | None                                 |
| encrypted           | False                                |
| id                  | f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 |
| multiattach         | False                                |
| name                | volume1                              |
| properties          |                                      |
| replication_status  | disabled                             |
| size                | 10                                   |
| snapshot_id         | None                                 |
| source_volid        | None                                 |
| status              | creating                             |
| type                | high-speed                           |
| updated_at          | None                                 |
| user_id             | ...                                  |
+---------------------+--------------------------------------+
```

Pode instalar uma imagem num volume com a ajuda do argumento `--image`:

```bash
admin@server-1:~$ openstack volume create --type high-speed --image be66762f-b849-43e1-b57c-005d9fe28088 --size 20 volume_debian
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| attachments         | []                                   |
| availability_zone   | nova                                 |
| bootable            | false                                |
| consistencygroup_id | None                                 |
| created_at          | 2021-05-18T14:26:38.887508           |
| description         | None                                 |
| encrypted           | False                                |
| id                  | 442d9dff-7df5-41b2-95e9-fa8ac5f4784a |
| multiattach         | False                                |
| name                | volume_debian                        |
| properties          |                                      |
| replication_status  | disabled                             |
| size                | 20                                   |
| snapshot_id         | None                                 |
| source_volid        | None                                 |
| status              | creating                             |
| type                | high-speed                           |
| updated_at          | None                                 |
| user_id             | ...                                  |
+---------------------+--------------------------------------+
```

Onde **be66762f-b849-43e1-b57c-005d9fe28088** corresponde ao ID da imagem Debian 10.

#### Associar um volume a uma instância

- Listar os volumes adicionais:

```bash
admin@server-1:~$ openstack volume list
+--------------------------------------+---------------+-----------+------+-------------+
| ID                                   | Name          | Status    | Size | Attached to |
+--------------------------------------+---------------+-----------+------+-------------+
| 442d9dff-7df5-41b2-95e9-fa8ac5f4784a | volume_debian | available |   20 |             |
| f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 | volume1       | available |   10 |             |
+--------------------------------------+---------------+-----------+------+-------------+
```

> [!primary]
>
> A maioria dos comandos seguintes exigirá que indique o ID do volume em vez do seu nome.
> 

- Montar o volume numa instância com o cliente Openstack:

```bash
admin@server-1:~$ openstack server add volume 46aec29f-fe50-4562-b3f9-2e6665a7270d f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

- Verificar a ligação correta do volume à instância com o cliente OpenStack:

```bash
admin@server-1:~$ openstack volume list
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
| ID                                   | Name          | Status    | Size | Attached to                             |
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
| 442d9dff-7df5-41b2-95e9-fa8ac5f4784a | volume_debian | available |   20 |                                         |
| f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 | volume1       | in-use    |   10 | Attached to cli-playground on /dev/sdb  |
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
```

#### Eliminação de um volume

- Desassociar o volume da instância:

```bash
admin@server-1:~$ openstack server remove volume 46aec29f-fe50-4562-b3f9-2e6665a7270d f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

- Eliminar o volume:

```bash
admin@server-1:~$ openstack volume delete f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
