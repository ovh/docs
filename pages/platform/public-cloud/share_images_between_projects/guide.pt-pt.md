---
title: "Partilhar imagens entre projetos Public Cloud"
excerpt: "Saiba como partilhar imagens entre projetos Public Cloud com a ajuda do OpenStack"
updated: 2023-07-31
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Pode ser necessário partilhar uma imagem [Instance backup](/pages/platform/public-cloud/save_an_instance) ou uma imagem [Volume backup](/pages/platform/public-cloud/volume-backup) entre vários projetos Public Cloud.

Com OpenStack, poderá partilhar uma imagem entre vários projetos, mesmo que não pertençam à mesma conta.
Esta funcionalidade oferece muitas possibilidades, mas também acarreta riscos. Por isso, é importante compreender os seus princípios.

Por exemplo, se deseja partilhar uma imagem de um projeto A com um projeto B (na mesma conta ou numa conta diferente), aplicam-se as seguintes regras:

- A imagem fica fisicamente ligada ao projeto A. O projeto B só dispõe de uma « autorização de acesso » a esta imagem.
- Se o Projeto A eliminar o acesso à imagem (eliminação da ACL, supressão da imagem, supressão do projeto para faturas não pagas, etc.), as instâncias que são executadas a partir desta imagem no Projeto B podem deixar de funcionar devido a problemas de migração ou de reconstrução.

Por isso, é importante ter isto em mente antes de nos envolvermos nesta configuração.
Para mais informações, consulte a [documentação oficial OpenStack](https://docs.openstack.org/image-guide/share-images.html){.external}.

**Este manual explica-lhe como partilhar imagens entre um ou vários projetos, mantendo a configuração e o estado da imagem.**

## Requisitos

Antes de seguir estes passos, recomendamos que consulte primeiro este guia:

- [Preparar o ambiente para a utilização da API OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)

Necessitará igualmente de:

- Dispor de uma [Instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud
- [Ter criado um utilizador OpenStack](/pages/platform/public-cloud/create_and_delete_a_user)

> [!primary]
>
> Este manual refere-se à utilização de um [cliente de linha de comandos OpenStack](https://docs.openstack.org/python-openstackclient/latest/){.external}.
>

## Instruções

### Partilhar uma imagem

Em primeiro lugar, execute o seguinte comando para listar as imagens existentes:

```bash
$ openstack image list --private
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | pfsense |
```

> [!warning]
> 
> Para ser partilhada, uma imagem deve primeiro ser colocada em « visibilidade partilhada » (*shared visibility*).
>

```bash
$ openstack image set --shared <Image_UUID>
```

### Adicionar um projeto a uma imagem

O próximo passo é adicionar o UUID de outro projeto como um membro da imagem. No nosso exemplo abaixo, adicionamos o UUID do « Projeto B ».

```bash
$ openstack image add project 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba <UUID_Project_B>
+------------+--------------------------------------+
| Field      | Value                                |
+------------+--------------------------------------+
| created_at | 2020-01-27T13:26:52Z                 |
| image_id   | 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba |
| member_id  | <UUID_Project_B>                      |
| schema     | /v2/schemas/member                   |
| status     | pending                              |
| updated_at | 2020-01-30T15:18:00Z                 |
+------------+--------------------------------------+
```

Depois de fazer isso, verifique a solicitação no projeto B:


```bash
$ openstack image member list <Image_UUID>
+--------------------------------------+----------------------------------+----------+
| Image ID | Member ID | Status |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <UUID_Project_B> | pending |
+--------------------------------------+----------------------------------+----------+
```


Se o pedido de partilha estiver em estado `pending`, deve aceitá-lo:

```bash
$ openstack image set --accept 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+--------------------------------------+----------------------------------+----------+
| Image ID                             | Member ID                        | Status   |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | eff99684d8294dbe8c2d4dd7407073f1 | accepted |
+--------------------------------------+----------------------------------+----------+
```

Depois de o pedido de partilha ser aceite, verifique se pode ver e aceder à imagem:

```bash
$ openstack image show 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field            | Value                                                                                                                                                                                  |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| checksum         | 1b19c9e5bdd36b9010de0164dd8b245e                                                                                                                                                       |
| container_format | bare                                                                                                                                                                                   |
| created_at       | 2018-05-08T15:38:50Z                                                                                                                                                                   |
| disk_format      | raw                                                                                                                                                                                    |
| file             | /v2/images/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba/file                                                                                                                                   |
| id               | 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba                                                                                                                                                   |
| min_disk         | 0                                                                                                                                                                                      |
| min_ram          | 0                                                                                                                                                                                      |
| name             | pfsense                                                                                                                                                                                |
| owner            | 35c9ee22e5c84c1097a5652b0abcbab3                                                                                                                                                       |
| properties       | direct_url='swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba', locations='[{'url': 'swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba', 'metadata': {}}]' |
| protected        | False                                                                                                                                                                                  |
| schema           | /v2/schemas/image                                                                                                                                                                      |
| size             | 10737418240                                                                                                                                                                            |
| status           | active                                                                                                                                                                                 |
| tags             |                                                                                                                                                                                        |
| updated_at       | 2018-05-08T15:53:57Z                                                                                                                                                                   |
| virtual_size     | None                                                                                                                                                                                   |
| visibility       | private                                                                                                                                                                                |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Verificar os membros de uma imagem

```bash
$ openstack image member list 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+--------------------------------------+----------------------------------+----------+
| Image ID                             | Member ID                        | Status   |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project C>                      | pending  |
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project B>                      | accepted |
+--------------------------------------+----------------------------------+----------+
```

### Excluir um membro de uma imagem ou anular a partilha de uma imagem

```bash
$ openstack image remove project <image> <UUID_Projeto_A_eliminar>
```

## Saiba mais

[Transferir a cópia de segurança de uma instância de um datacenter para outro](/pages/platform/public-cloud/transfer_instance_backup_from_one_datacentre_to_another).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.