---
title: 'Ativar uma licença Windows para uma instância em modo privado'
slug: activate-windows-licence-private-mode-instance
excerpt: 'Descubra como ativar uma licença Windows numa instância em modo privado'
section: Introdução
order: 09
updated: 2023-01-25
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 02/02/2023**

## Objetivo

Contrariamente às instâncias Windows criadas na rede pública, as instâncias Windows criadas com o modo de rede privada (vRack) não têm as suas licenças Windows automaticamente ativadas.
Neste caso, deverá ativar a licença manualmente para ter acesso a todos os serviços Windows.

**Este guia tem como objetivo acompanhá-lo na configuração da interface pública das suas instâncias Public Cloud no seio do seu vRack.**

## Requisitos

- Dispor de um [projeto Public Cloud](https://docs.ovh.com/pt/public-cloud/create_a_public_cloud_project/)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
- [Ter criado um utilizador OpenStack](https://docs.ovh.com/pt/public-cloud/criar-e-eliminar-um-utilizador-openstack/)

Recomendamos que consulte o guia "[Aceder à interface Horizon](https://docs.ovh.com/pt/public-cloud/horizon/)" para se familiarizar com o Horizon.

## Instruções

### Associar uma porta pública "Ext-Net" a uma instância

#### A partir da interface Horizon

Ligue-se à interface [Horizon](https://horizon.cloud.ovh.net/auth/login/) de acordo com o método indicado na [primeira parte deste guia](https://docs.ovh.com/pt/publiccloud/network-services/public-cloud-vrack/#interface-horizon).

Ligue-se bem à sua zona de trabalho:

![região](images/horizon1.png){.thumbnail}

Selecione `Compute`{.action} e, a seguir, `Instances`{.action}:

![computação e instância](images/horizon2.png){.thumbnail}

Para adicionar uma interface, na coluna "Actions", clique na seta que permite aceder às ações possíveis na instância. A seguir, clique em `Attach Interface`{.action}:

![adicionar interface](images/horizon3.png){.thumbnail}

Selecione a sua interface e valide:

![interface select](images/attachinterfacehorizon.png){.thumbnail}

#### A partir da API OpenStack

Antes de prosseguir, recomendamos que consulte os seguintes guias:

- [Preparar o ambiente para utilizar a API OpenStack](https://docs.ovh.com/pt/public-cloud/prepare_the_environment_for_using_the_openstack_api/).
- [Carregar as variáveis de ambiente OpenStack](https://docs.ovh.com/pt/public-cloud/set-openstack-environment-variables/).

Compile todas as informações necessárias:

- **Identificação das suas instâncias**

```bash
openstack server list
+--------------------------------------+-------------------+--------+---------------------------------------------------------------------+----------------------------------------+----------+
| ID                                   | Name              | Status | Networks                                                            | Image                                  | Flavor   |
+--------------------------------------+-------------------+--------+---------------------------------------------------------------------+----------------------------------------+----------+
| f095ad19-5c0a-4ef5-8e01-b3590bc9c6f1 | MyInstance        | ACTIVE |                                                                     | Windows Server 2016 Standard (Desktop) | win-b2-7 |
+--------------------------------------+-------------------+--------+---------------------------------------------------------------------+----------------------------------------+----------+
```


- **Identificação das redes públicas e privadas**

```bash
openstack network list
-----------------------------------------------------------------------------------------+
| ID                                   | Name              | Subnets                                                                                                                                                                                                                                                                  |
+--------------------------------------+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 1ca87837-7860-47a3-8916-c9c516841bf2 | Ext-Net-Baremetal | 1db089a7-1bd9-449f-8e3b-4ea61e666320, 4a614403-b8aa-4291-bd59-0cb2c81c4deb                                                                                                                                                                                               |
| 7394fc68-0f77-40d7-a274-388e7e75d82c | vlan 0            | f3fb67dc-7419-49da-b26c-7f64c480eb63                                                                                                                                                                                                                                     |
| 7a0e67da-70f3-48ed-a6e7-5ec265916211 | private-net       | 57d9faac-f01c-43a2-8866-d9b1dd02cb9e, 5cb270a9-3795-4286-96fe-f3bfa3a328e5                                                                                                                                                                                               |
| b2c02fdc-ffdf-40f6-9722-533bd7058c06 | Ext-Net           | 0f11270c-1113-4d4f-98de-eba83445d962, 1a6c6b72-88e9-4e94-ac8b-61e6dbc4792c, 22e2d853-1b86-48f3-8596-9d12c7693dc7, 4aa6cac1-d5cd-4e25-b14b-7573aeabcab1, 7d6352a6-dbed-4628-a029-fcc3986ae7d6, 9f989c4b-c441-4678-b395-e082c300356e, b072b17b-ef1d-4881-98c7-e0d6a1c3dcea|
+--------------------------------------+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

Com os elementos recuperados anteriormente, pode criar uma porta pública designada "Ext-Net" na subnet "Ext-Net" e associá-la à instância:

```bash
openstack port create --network b2c02fdc-ffdf-40f6-9722-533bd7058c06 Ext-Net
+-------------------------+----------------------------------------------------------------------------------------+
| Field                   | Value                                                                                  |
+-------------------------+----------------------------------------------------------------------------------------+
| admin_state_up          | UP                                                                                     |
| allowed_address_pairs   |                                                                                        |
| binding_host_id         | None                                                                                   |
| binding_profile         | None                                                                                   |
| binding_vif_details     | None                                                                                   |
| binding_vif_type        | None                                                                                   |
| binding_vnic_type       | normal                                                                                 |
| created_at              | 2023-01-20T10:12:17Z                                                                   |
| data_plane_status       | None                                                                                   |
| description             |                                                                                        |
| device_id               |                                                                                        |
| device_owner            |                                                                                        |
| device_profile          | None                                                                                   |
| dns_assignment          | None                                                                                   |
| dns_domain              | None                                                                                   |
| dns_name                | None                                                                                   |
| extra_dhcp_opts         |                                                                                        |
| fixed_ips               | ip_address='2001:41d0:304:400::128f', subnet_id='4aa6cac1-d5cd-4e25-b14b-7573aeabcab1' |
|                         | ip_address='57.128.42.227', subnet_id='22e2d853-1b86-48f3-8596-9d12c7693dc7'           |
| id                      | ed34add5-aa76-4aab-97af-815724d76e2c                                                   |
| ip_allocation           | immediate                                                                              |
| mac_address             | fa:16:3e:68:35:9c                                                                      |
| name                    | Ext-Net                                                                                |
| network_id              | b2c02fdc-ffdf-40f6-9722-533bd7058c06                                                   |
| numa_affinity_policy    | None                                                                                   |
| port_security_enabled   | True                                                                                   |
| project_id              | 2098640de5e547289e3740b09e725ecc                                                       |
| propagate_uplink_status | None                                                                                   |
| qos_network_policy_id   | None                                                                                   |
| qos_policy_id           | None                                                                                   |
| resource_request        | None                                                                                   |
| revision_number         | 2                                                                                      |
| security_group_ids      | 9f60804a-0ecf-4738-a4d8-30a6bb0d20c2                                                   |
| status                  | DOWN                                                                                   |
| tags                    |                                                                                        |
| tenant_id               | 2098640de5e547289e3740b09e725ecc                                                       |
| trunk_details           | None                                                                                   |
| updated_at              | 2023-01-20T10:12:18Z                                                                   |
+-------------------------+----------------------------------------------------------------------------------------+
```

Obtenha a UUID da porta "Ext-Net":

```bash
openstack port list --name Ext-Net
+--------------------------------------+---------+-------------------+---------------------------------------------------------------------------------------+--------+
| ID                                   | Name    | MAC Address       | Fixed IP Addresses                                                                    | Status |
+--------------------------------------+---------+-------------------+---------------------------------------------------------------------------------------+--------+
| ed34add5-aa76-4aab-97af-815724d76e2c | Ext-Net | fa:16:3e:68:35:9c | ip_address='2001:41d0:304:400::128f', subnet_id='4aa6cac1-d5cd-4e25-b14b-7573aeabcab1'| DOWN   |
|                                      |         |                   | ip_address='57.128.42.227', subnet_id='22e2d853-1b86-48f3-8596-9d12c7693dc7'          |        |
+--------------------------------------+---------+-------------------+---------------------------------------------------------------------------------------+--------+
```

Associe a porta à instância:

```bash
openstack server add port <server_id> <port_id>
```

#### Ativar o seu sistema Windows

Para ativar o seu sistema Windows, deve usar Powershell.

Depois de aceder à instância Windows, clique no menu `Iniciar`{.action} e, a seguir, no ícone do `Windows PowerShell`{.action}.

Introduza o seguinte comando:

```bash
slmgr.vbs -ato
```

![ativação da chave windows](images/windowsactivation1.png){.thumbnail}

A licença Windows será ativada durante 180 dias.

Será necessário repetir esta operação a cada 180 dias.

> [!primary]
>
> Entretanto, se deseja isolar a sua instância da rede pública, pode desativar, através do Horizon ou da API OpenStack, a porta pública criada.
> Também pode desativar diretamente a porta de rede via Windows.
>

Para verificar o estado da licença e a data de expiração, utilize o seguinte comando:

```bash
slmgr.vbs -dli
```

![ativação da chave windows](images/windowsactivation2.png){.thumbnail}

## Quer saber mais?

[Saiba como alterar a chave de produto do Windows Server](https://docs.ovh.com/pt/dedicated/windows-key/).

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.