---
title: Redimensionar uma instância de Public Cloud usando a CLI do OpenStack
excerpt: Descubra como fazer evoluir os recursos da sua instância para fazer face a uma atividade acrescida
updated: 2023-09-26
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Devido a uma atividade acrescida, ou simplesmente para responder a novas necessidades, a sua instância pode carecer de recursos e ficar incapaz de responder a uma nova carga. Graças ao Public Cloud da OVHcloud, pode aumentar os recursos disponíveis para a sua instância em apenas algumas etapas.

**Saiba como redimensionar a instância Public Cloud com a CLI OpenStack.**

> [!primary]
> **Limites:**
>
> - Apenas é possível o redimensionamento para um modelo superior (*upscaling*) nas instâncias clássicas.
> - Uma [instância Metal](https://www.ovhcloud.com/pt/public-cloud/metal-instances/) só pode ser redimensionada para outro modelo **Metal**.
> - As instâncias *Flex* permitem o redimensionamento para modelos superiores ou inferiores, devido ao tamanho de disco único e bloqueado.
>

## Requisitos

- Uma [instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud
- Um [utilizador OpenStack](create_and_delete_a_user1.)
- Ter um [ambiente OpenStack preparado para CLI](prepare_the_environment_for_using_the_openstack_api1.)
- Ter definido as [variáveis de ambiente do OpenStack](loading_openstack_environment_variables1.)

## Instruções

> [!warning]
>
> Esta operação faz com que a instância seja interrompida durante toda a operação.
>

### Guardar a instância

Aquando de um redimensionamento, a instância é interrompida durante toda a duração da operação. Por isso, antes de realizar esta operação, recomendamos que guarde a sua instância e interrompa todos os processos em execução. Encontre mais informações sobre os métodos de backup no [guia dedicado](save_an_instance1.).

### Listar as instâncias

A primeira etapa consiste em listar as suas instâncias a fim de recuperar o nome da instância que deseja redimensionar. No nosso exemplo, desejamos redimensionar a instância chamada « OVHcloudinstance ».

```bash
$ openstack server list
+--------------------------------------+----------------------------------------------------------------+--------+---------------------------------------------+
| ID                                   | Name             | Image      | Flavor |        | Status | Networks                                    | 
+--------------------------------------+----------------------------------------------------------------+--------+---------------------------------------------+
| 19298898-934b-xxxx-xxxx-xxxxxxxxxxxx | testinstance1    | Centos 7     | d2-2 |        | ACTIVE | Ext-Net=111.112.113.9, 2607:5300:xxx:xxxx::ae9                                                       
| 23ce0491-5e29-xxxx-xxxx-xxxxxxxxxxxx | testinstance2    | Ubuntu 23.04 | d2-2 |        | ACTIVE | Ext-Net=111.112.113.61, 2607:5300:xxx:xxxx::c0a                                                          
| 8f9a08a6-f0fe-xxxx-xxxx-xxxxxxxxxxxx | OVHcloudinstance | Debian 12    | b2-7 |        | ACTIVE | Ext-Net=111.112.113.200, 2607:5300:xxx:xxxx::9a3                                  
+--------------------------------------+----------------------------------------------------------------+--------+----------------------------------------------+
```

### Listar os modelos <a name="flavorlist"></a>

Para recuperar a ID do novo modelo, deve visualizar uma lista dos modelos (*flavors*) disponíveis na sua região. No nosso exemplo, queremos redimensionar a nossa instância num modelo b2-30 com o ID `098889e6-d1fc-4967-baea-19fd97fd83a8`.

```bash
$ openstack flavor list
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| ID                                   | Name                |    RAM | Disk | Ephemeral | VCPUs | Is Public |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| 009ee05f-9430-4c85-b9f7-66297db22731 | win-hg-7-ssd-flex   |   7000 |   50 |         0 |     2 | True      |
| 01ef1e13-5a85-4c4b-84f4-9e9da85da51d | r2-15               |  15000 |   50 |         0 |     2 | True      |
| 01f4f140-3d51-4d94-ad26-9aa85941dc63 | win-hg-60-ssd-flex  |  60000 |   50 |         0 |    16 | True      |
| 041d0272-4db5-4c13-9861-a4e17c48fd9c | r2-60               |  60000 |  100 |         0 |     4 | True      |
| 0531d26b-e117-4cdb-9e83-c16727f4737e | c2-60               |  60000 |  400 |         0 |    16 | True      |
| 05ebb9db-d6c8-4b7a-bf38-eea519aa5262 | win-r2-120-flex     | 120000 |   50 |         0 |     8 | True      |
| 098889e6-d1fc-4967-baea-19fd97fd83a8 | b2-30               |  30000 |  200 |         0 |     8 | True      |
| 0ec183bd-d014-48ad-a71e-1233c5f5c79b | win-r2-30           |  30000 |   50 |         0 |     2 | True      |
| 1070c9d6-5bc7-45db-bab2-073bff119f22 | r2-30               |  30000 |   50 |         0 |     2 | True      |
| 108e2180-e257-4054-aa23-18b123d06ed8 | win-hg-120-ssd-flex | 120000 |   50 |         0 |    32 | True      |
| 11a77f5f-5cbe-4394-ba85-d4afb2b0bade | eg-30-flex          |  30000 |   50 |         0 |     8 | True      |
| 125a6e9e-7522-463a-a90d-121abaabf21a | win-b2-30-flex      |  30000 |   50 |         0 |     8 | True      |
| 1335874a-7ddd-453b-b655-d9bf044ef5f9 | eg-120-ssd          | 120000 |  800 |         0 |    32 | True      |
| fd80c213-d30f-4e0c-ae9d-ecdcb422fc1b | eg-7-ssd            |   7000 |  100 |         0 |     2 | True      |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
```

> [!warning]
> Tenga en cuenta que sólo puede cambiar el tamaño de una instancia de un modelo Linux a otro y de un modelo Windows a otro Windows.

### Redimensionar la instancia

Una vez que haya recuperado la información, ya puede redimensionar su instancia:

```bash
$  openstack server resize --flavor <FLAVOR-ID> <INSTANCE-NAME>
```

Por ejemplo, para redimensionar nuestra instancia "OVHcloudInstance":

```bash
$ openstack server resize --flavor 098889e6-d1fc-4967-baea-19fd97fd83a8 OVHcloudinstance
```

Pode acompanhar o processo executando frequentemente o seguinte comando. O estado (*status*) deve ser `RESIZE`.

```bash
$ openstack server show OVHcloudinstance
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field                               | Value                                                                                                                                                                                              |
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| id                                  | 8f9a08a6-f0fe-xxxx-xxxx-xxxxxxxxxxxx                                                                                                                                                              |
| image                               | Debian 12 (31e40bc4-5b35-4c5f-96ff-37df3660dec0)                                                                                                                                                   |

| key_name                            | OVHcloud                                                                                                                                                                                               |
| name                                | OVHcloudinstance                                                                                                                                                                                     |
| status                              | RESIZE                                                                                                                                                                                             |
| tags                                |                                                                                                                                                                                                    |
| task_state                          | resize_migrating                                                                                                                                                                                   |
| updated                             | 2023-08-29T20:02:05Z                                                                                                                                                                               |
| updated_at                          | 2023-08-29T20:02:05Z                                                                                                                                                                               |
| vm_state                            | active           
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Reduzir uma instância

> [!warning]
> Esta opção só está disponível para os modelos *Flex*.
>

Se quiser reduzir a sua instância, pode fazê-lo seguindo os mesmos passos mencionados [acima](#flavorlist.) e utilizando um ID diferente no campo <FLAVOR-ID>.

## Saiba mais

[Redimensionar uma instância Public Cloud através da Área de Cliente OVHcloud](resize_instance_manager1.)

[Redimensionar uma instância Public Cloud através do Horizon](resize_of_an_instance1.)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.