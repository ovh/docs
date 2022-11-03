---
title: Primeiros passos com a API OpenStack
excerpt: Descubra como gerir as suas instâncias com a ajuda do cliente Python OpenStack
slug: dar_os_primeiros_passos_com_a_api_nova
legacy_guide_number: g1935
section: Gestão via OpenStack
---

**Última atualização: 03/11/2022**

## Objetivo

Com o objetivo de automatizar as suas operações no Public Cloud é possível utilizar as APIs OpenStack de forma a gerar diferentes scripts.

> [!primary]
>
> O cliente Nova era anteriormente utilizado para gerir as suas instâncias bem como os seus discos. Este cliente está agora com imparidade e as encomendas foram integradas no seio do cliente Python OpenStack.
>

Poderá, por exemplo, lançar a criação de uma instância suplementar assim que as ferramentas de monitorização detetarem um pico de carga para evitar uma saturação na sua infraestrutura.
É igualmente possível programar a criação instantânea de foram regular pelo mesmo motivo.

Este guia ajudá-lo-á a gerir as suas instâncias com a ajuda do cliente Python OpenStack.


## Requisitos

- [Preparar o ambiente para utilizar a API OpenStack](../preparer-lenvironnement-pour-utiliser-lapi-openstack/)
- [Carregar as variáveis de ambiente OpenStack](../charger-les-variables-denvironnement-openstack/)


## Instruções

Pode obter a lista dos comandos possível lendo a documentação do cliente:

```bash
admin@server-1:~$ openstack command list
```

Pode filtrar os comandos indicados indicando o grupo: 

```bash
admin@server-1:~$ openstack command list —group compute
```

Também é possível obter informações sobre uma encomenda adicionando `help` a esta:

```bash
admin@server-1:~$ openstack help flavor list 
usage: openstack flavor list [-h] [-f {csv,json,table,value,yaml}] [-c COLUMN]
                             [--quote {all,minimal,none,nonnumeric}] [--noindent]
                             [--max-width <integer>] [--fit-width] [--print-empty]
                             [--sort-column SORT_COLUMN]
                             [--sort-ascending | --sort-descending] [--public | --private | --all]
                             [--min-disk <min-disk>] [--min-ram <min-ram>] [--long]
                             [--marker <flavor-id>] [--limit <num-flavors>]
List flavors ...
```

> [!success]
>
> Consulte a documentação do cliente diretamente no [site OpenStack](https://docs.openstack.org/python-openstackclient/latest/cli/index.html)
> 


### Operações básicas

#### Adição de uma chave SSH pública

Primeiro, é necessário adicionar uma chave SSH pública que permita ligar-se às instâncias.

- Listar os comandos associados às chaves SSH:

```bash
admin@server-1:~$ openstack help | grep keypair         
  keypair create  Create new public or private key for server ssh access
  keypair delete  Delete public or private key(s)
  keypair list    List key fingerprints
  keypair show    Display key details
```

- Adicionar a chave SSH pública:

```bash
admin@server-1:~$ openstack keypair create --public-key ~/.ssh/id_rsa.pub SSHKEY
```

- Lista as chaves SSH disponíveis:

```bash
admin@server-1:~$ openstack keypair list
+---------------+-------------------------------------------------+------+
| Name          | Fingerprint                                     | Type |
+---------------+-------------------------------------------------+------+
| SSHKEY        | 5c:fd:9d:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:3a | ssh  |
+---------------+-------------------------------------------------+------+
```

#### Listar os modelos das instâncias

De seguida, deverá recuperar o ID do modelo que se deseja utilizar:

```bash
admin@server-1:~$ openstack flavor list
+--------------------------------------+-----------------+--------+------+-----------+-------+-----------+
| ID                                   | Name            |    RAM | Disk | Ephemeral | VCPUs | Is Public |
+--------------------------------------+-----------------+--------+------+-----------+-------+-----------+
| 0062dad0-f93c-4d7d-bde7-6add4ad6baaa | win-b2-15-flex  |  15000 |   50 |         0 |     4 | True      |
| 022f8ac5-b6a7-4365-9db8-c69775d67a2d | t2-180          | 180000 |   50 |         0 |    60 | True      |
| 07124b62-dd6d-4bf2-80d7-d9ea3c923cf3 | i1-180          | 180000 |   50 |         0 |    32 | True      |
| 0cb50da2-cd4d-4a14-8a22-bbc59d94c814 | c2-120-flex     | 120000 |   50 |         0 |    32 | True      |
| 0d338e52-cfba-4e32-914e-c2ea19d2a9df | d2-4            |   4000 |   50 |         0 |     2 | True      |
| 0dbcff05-2da0-40a6-87dc-96a1e98d9ffc | b2-30           |  30000 |  200 |         0 |     8 | True      |
| 11530c24-bc02-48c3-b272-802791795176 | i1-45           |  45000 |   50 |         0 |     8 | True      |
| 11fc4ed3-5198-4043-b093-063787a144e1 | c2-7            |   7000 |   50 |         0 |     2 | True      |
| 13d9146d-f519-4f8b-b87c-245d76bd21b0 | b2-120-flex     | 120000 |   50 |         0 |    32 | True      |
| ...                                  | ...             | ...    | ..   | ...       |       | ...       |
+--------------------------------------+-----------------+--------+------+-----------+-------+-----------+
```

#### Listar as imagens disponíveis

Basta recuperar o ID da imagem que será utilizada pela instância:

```bash
admin@serveur-1:~$ openstack image list 
+--------------------------------------+-----------------------------------------------+--------+
| ID                                   | Name                                          | Status |
+--------------------------------------+-----------------------------------------------+--------+
| 8990fbb-bd7e-4c57-8b19-a162e12c5195 | AlmaLinux 8                                   | active |
| f1d2e56e-faec-4fd4-8493-dcf4c4201b40 | AlmaLinux 8 - UEFI                            | active |
| a243240a-ca1f-4a53-a3bd-30c4f96b241f | AlmaLinux 8 - cPanel                          | active |
| 1be04371-252f-48be-81fb-1cb89ea55778 | AlmaLinux 9                                   | active |
| df89529f-8b4f-4534-9ddc-0092e30bcc97 | AlmaLinux 9 - UEFI                            | active |
| 81c5ebbc-04fd-40f8-83aa-9b2bae8769f2 | Centos 7                                      | active |
| b753f820-37cd-437a-b301-3423caf27637 | Centos 7 - Analytics - Ambari pre-warmed      | active |
| 81ddd059-41b0-493e-a1e2-a278139b7bbb | Centos 7 - Analytics - Base image             | active |
| ...                                  | ...                                           | ...    |
+--------------------------------------+-----------------------------------------------+--------+
```

## Criação de uma instância

Com os elementos obtidos anteriormente, é possível criar uma instância:


```bash
admin@server-1:~$ openstack server create --key-name SSHKEY --flavor d2-2 --image "Ubuntu 22.04" InstanceTest
+-----------------------------+-----------------------------------------------------+
| Field                       | Value                                               |
+-----------------------------+-----------------------------------------------------+
| OS-DCF:diskConfig           | MANUAL                                              |
| OS-EXT-AZ:availability_zone |                                                     |
| OS-EXT-STS:power_state      | NOSTATE                                             |
| OS-EXT-STS:task_state       | scheduling                                          |
| OS-EXT-STS:vm_state         | building                                            |
| OS-SRV-USG:launched_at      | None                                                |
| OS-SRV-USG:terminated_at    | None                                                |
| accessIPv4                  |                                                     |
| accessIPv6                  |                                                     |
| addresses                   |                                                     |
| adminPass                   | xxxxxxxxxxxx                                        |
| config_drive                |                                                     |
| created                     | 2022-10-13T19:05:54Z                                |
| flavor                      | d2-2 (14c5fa3f-fdad-45c4-9cd1-14dd99c341ee)         |
| hostId                      |                                                     |
| id                          | xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                |
| image                       | Ubuntu 22.04 (0ea24976-fb6c-46ef-acb5-0cb88b0493aa) |
| key_name                    | SSHKEY                                              |
| name                        | InstanceTest                                        |
| progress                    | 0                                                   |
| project_id                  | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                    |
| properties                  |                                                     |
| security_groups             | name='default'                                      |
| status                      | BUILD                                               |
| updated                     | 2022-10-13T19:05:55Z                                |
| user_id                     | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                    |
| volumes_attached            |                                                     |
+-----------------------------+-----------------------------------------------------+
```

Dopo pochi minuti, puoi verificare la lista delle istanze esistenti per trovare l'istanza appena creata:

```bash
admin@server-1:~$ openstack server list                                                                 
+--------------------------------------+--------------+--------+-------------------------------------+--------------+--------+
| ID                                   | Name         | Status | Networks                            | Image        | Flavor |
+--------------------------------------+--------------+--------+-------------------------------------+--------------+--------+
| xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx | InstanceTest | ACTIVE | Ext-Net=xxxx:xxxx::xxxx, 51.xx.xx.x | Ubuntu 22.04 | d2-2   |
+--------------------------------------+--------------+--------+-------------------------------------+--------------+--------+
```

#### Eliminação de uma instância

Para eliminar uma instância basta efetuar o seguinte comando:

```bash
admin@server-1:~$ openstack server delete InstanceTest
```

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
