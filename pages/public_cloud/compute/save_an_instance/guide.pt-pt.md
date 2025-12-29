---
title: 'Guardar uma instância'
excerpt: 'Saiba como efetuar o backup de uma instância Public Cloud a partir da Área de Cliente OVHcloud'
updated: 2025-12-09
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Pode criar um backup único de uma instância ou configurar um planeamento para automatizar os backups das suas instâncias. Os backups podem ser utilizados para restaurar a sua instância num estado anterior ou para criar uma nova instância idêntica.

**Este guia explica como criar backups manuais e automáticos de uma instância Public Cloud.**

## Requisitos

- Ter uma instância [Public Cloud](/links/public-cloud/public-cloud) na sua conta OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- CLI OpenStack. Consulte nosso guia "[Preparar o ambiente para utilizar a API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)". (opcional)

## Instruções

### Criar um backup de uma instância

> [!warning]
> Esta opção só está disponível através de um **Cold Snapshot** para as instâncias Metal. A instância Metal passará para o modo rescue e, uma vez efetuado o backup, a instância será reiniciada em modo normal.
>

> [!primary]
>
> Dois tipos de backup estão disponíveis:
>
> - Local: Um backup local é armazenado na mesma região que sua instância.
> - Remoto: Um backup remoto cria automaticamente uma cópia do backup local em outra região de sua escolha.
>
> Cada backup é cobrado separadamente. O backup remoto será cobrado de acordo com a tarifa de armazenamento da região remota selecionada.
>
> **Nota :** as Local Zones não são elegíveis para cópias de segurança remotas.


> [!tabs]
> Através do área de cliente OVHcloud
>>
>> Faça login no [área de cliente OVHcloud](/links/manager), acesse a seção `Public Cloud`{.action} e selecione o projeto Public Cloud desejado.<br>
>> Clique em `Instâncias`{.action} no menu à esquerda.<br>
>> Na página das instâncias, clique no botão `...`{.action} à direita da instância e selecione `Criar um backup`{.action}.
>>
>> ![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}
>>
>> /// details | Backup local
>>
>> Forneça um nome para o backup, revise as informações de preços e clique em `Confirmar`{.action}.
>>
>> ![public-cloud-instance-backup](images/createbackup2bis.png){.thumbnail}
>>
>> ///
>>
>> /// details | Cópia de segurança remota
>>
>> Introduza um nome para a cópia de segurança e verifique as informações tarifárias. Clique em `Adicionar backup remoto (Opção)`{.action}, introduza um nome para a cópia de segurança remota, selecione uma região e clique em `Confirmar`{.action}.
>>
>> ![public-cloud-instance-backup](images/createdistantbackup.png){.thumbnail}
>>
>> ///
>>
>> Não é possível seguir o progresso da cópia de segurança em tempo real. No entanto, pode consultar o estado da cópia de segurança na secção `Instance Backup`{.action} sob a rubrica **Compute** do menu à esquerda, onde será exibido o estado `Backup em curso` durante o processo.
>>
>> Após o término do backup, ele estará disponível na seção `Instance Backup`{.action} sob a seção **Compute** no menu à esquerda.
>>
>> ![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}
>>
> Através da API OVHcloud <a name="createinstanceviaapi"></a>
>> Autentique-se na [API OVHcloud](/links/console).
>>
>> Pode listar todas as regiões disponíveis utilizando o seguinte pedido API :
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET  /cloud/project/{serviceName}/region
>> >
>>
>> Utilize em seguida o seguinte pedido API :
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance/{instanceId}/snapshot
>> >
>>
>> Preencha as variáveis:
>>
>> - **instanceId**: ID único da instância desejada.
>> - **regionName**: Nome da região onde se encontra a instância de origem.
>> - **serviceName**: ID do projeto OVHcloud.
>> - **distantRegionName (opcional)**: Nome da região remota onde o backup será armazenado.
>> - **distantSnapshotName (opcional)**: Nome do backup remoto a ser criado na região remota.
>> - **snapshotName**: Nome do snapshot (backup local) a ser criado.
>>
>> > [!primary]
>> >
>> > Crie um backup remoto apenas se os parâmetros relacionados à região remota (**distantRegionName** e **distantSnapshotName**) estiverem preenchidos.
>> >
>>
> Através da CLI OpenStack
>>
>> Execute o seguinte comando para exibir a lista de instâncias:
>>
>> ```bash
>> $ openstack server list
>>
>> +--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
>> | ID | Name | Status | Networks | Image Name |
>> +--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
>> | aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
>> +--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
>> ```
>>
>> Pode listar todas as regiões disponíveis utilizando o seguinte comando :
>>
>> ```bash
>> $ openstack region list
>> ```
>>
>> /// details | Backup local
>>
>> Execute o seguinte comando para criar um backup da sua instância:
>>
>> ```bash
>> $ openstack server image create --name snap_server1 aa7115b3-83df-4375-b2ee-19339041dcfa
>> ```
>>
>> ///
>>
>> /// details | Backup remoto
>>
>> Execute o seguinte comando após criar o backup local:
>>
>> ```bash
>> $ openstack workflow execution create ovh.glance.glance_download '{"src_image_id": "<image_id>", "src_region": "<current_region>", "dst_region": "<remote_region>"}'
>> ```
>>
>> ///
>>
> Através do Horizon
>>
>> Clique no menu `Compute`{.action} à esquerda e selecione `Instâncias`{.action}.<br>
>> Clique no botão `Create Snapshot`{.action} à direita da linha correspondente à instância.
>>
>> ![public-cloud-instance-backup-horizon1](images/createbackuphorizon1.png){.thumbnail}
>>
>> Forneça um nome ao backup e clique em `Create Snapshot`{.action}.
>>
>> ![public-cloud-instance-backup-horizon2](images/createbackuphorizon2.png){.thumbnail}
>>

### Criar um backup automatizado de uma instância

> [!primary]
>
> Se desejar automatizar esta funcionalidade diretamente através do OpenStack, pode criar um workflow Mistral associado a um cron trigger.

Clique no botão `...`{.action} à direita da instância e selecione `Criar um backup automatizado`{.action}.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Poderá configurar os seguintes parâmetros de backup:

#### **O workflow** 

Atualmente, existe apenas um workflow. Irá criar um backup para a instância e o seu volume principal.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **O recurso** 

Pode selecionar a instância a salvaguardar.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **Nome** 

Introduza um nome para o planeamento do backup automático. Leia as informações de preços e crie o calendário ao clicar no botão `Criar`{.action}.
 
![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

#### **O planeamento** 

Pode definir um planeamento de backup personalizado ou escolher uma das frequências predefinidas:

- Backup diário com retenção dos últimos 7 backups
- Backup diário com retenção dos últimos 14 backups

![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

/// details | **Adicionar um backup remoto**

Clique no botão `Adicionar um backup remoto`{.action}, selecione uma localização, consulte as informações de precificação e clique no botão `Criar`{.action} 

![public-cloud-instance-Backup-distant](images/createbackup8distant.png){.thumbnail}

///

### Gestão dos backups e dos planos

As planificações podem ser criadas e eliminadas na secção `Workflow Management`{.action} que se encontra na rubrica **Compute** no menu à esquerda.

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Os backups das suas instâncias são geridos na secção `Instance Backup`{.action}, que se encontra na secção **Compute** no menu à esquerda.

![public-cloud-instance-backup](images/createbackup10.png){.thumbnail}

> [!warning]
> A opção de backup da instância deve ser eliminada separadamente se já não desejar que esta lhe seja faturada. A eliminação de uma instância não elimina as opções que lhe estão associadas.
>

> [!warning]
> **Tenha em atenção que não é possível eliminar um backup de instância se uma instância gerada a partir deste backup estiver a ser executada no momento da ação de eliminação.**

Saiba como utilizar os backups para clonar ou restaurar instâncias neste [guia](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup).

## Quer saber mais?

[Criar/restaurar um servidor virtual a partir de um backup](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.